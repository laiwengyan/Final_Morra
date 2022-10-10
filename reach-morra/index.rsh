'reach 0.1';

const [ isResult, NO_WINS, A_WINS, B_WINS, DRAW,  ] = makeEnum(4);

// 0 = none, 1 = B wins, 2 = draw , 3 = A wins
const winner = (handJack, guessJack, handAlex, guessAlex) => {
  const total = handJack + handAlex;

  if ( guessJack == total && guessAlex == total  ) {
      // draw
      return DRAW
  }  else if ( guessAlex == total) {
      // Alex wins
      return B_WINS
  }
  else if ( guessJack == total ) { 
      // Jack wins
      return A_WINS
  } else {
    // else no one wins
      return NO_WINS
  }
}
  
assert(winner(1,2,1,3 ) == A_WINS);
assert(winner(5,10,5,8 ) == A_WINS);
assert(winner(3,6,4,7 ) == B_WINS);
assert(winner(1,5,3,4 ) == B_WINS);

assert(winner(0,0,0,0 ) == DRAW);
assert(winner(2,4,2,4 ) == DRAW);
assert(winner(5,10,5,10 ) == DRAW);

assert(winner(3,6,2,4 ) == NO_WINS);
assert(winner(0,3,1,5 ) == NO_WINS);

forall(UInt, handJack =>
  forall(UInt, handAlex =>
    forall(UInt, guessJack =>
      forall(UInt, guessAlex =>
    assert(isResult(winner(handJack, guessJack, handAlex , guessAlex)))
))));

//common functions
const bothInteract = {
  ...hasRandom,
  reportResult: Fun([UInt], Null),
  reportHands: Fun([UInt, UInt, UInt, UInt], Null),
  informTimeout: Fun([], Null),
  getHand: Fun([], UInt),
  getGuess: Fun([], UInt),

};

const jackInterect = {
  ...bothInteract,
  wager: UInt, 
  deadline: UInt, 

}

const alexInteract = {
  ...bothInteract,
  acceptWager: Fun([UInt], Null),

}

export const main = Reach.App(() => {
  const Jack = Participant('Jack',jackInterect );
  const Alex = Participant('Alex', alexInteract );
  init();

  // Check for timeouts
  const informTimeout = () => {
    each([Jack, Alex], () => {
      interact.informTimeout();
    });

  };

  Jack.only(() => {
    const wager = declassify(interact.wager);
    const deadline = declassify(interact.deadline);
  });
  Jack.publish(wager, deadline)
    .pay(wager);
  commit();

  Alex.only(() => {
    interact.acceptWager(wager);
  });
  Alex.pay(wager)
    .timeout(relativeTime(deadline), () => closeTo(Jack, informTimeout));
  

  var result = DRAW;
   invariant( balance() == 2 * wager && isResult(result) );

  /// When DRAW or NO_WINS //////
   while ( result == DRAW || result == NO_WINS ) {
    commit();

  Jack.only(() => {
    const _handJack = interact.getHand();
    const [_commitJack1, _saltJack1] = makeCommitment(interact, _handJack);
    const commitJack1 = declassify(_commitJack1);
    const _guessJack = interact.getGuess();
    const [_commitJack2, _saltJack2] = makeCommitment(interact, _guessJack);
    const commitJack2 = declassify(_commitJack2);
  })
  

    Jack.publish(commitJack1, commitJack2)
      .timeout(relativeTime(deadline), () => closeTo(Alex, informTimeout));
    commit();

  // Alex must NOT know about Jack hand and guess
      unknowable(Alex, Jack(_handJack,_guessJack, _saltJack1,_saltJack2 ));
  
  // Get Alex hand
  Alex.only(() => {
    const handAlex = declassify(interact.getHand());
    const guessAlex = declassify(interact.getGuess());
  });

  Alex.publish(handAlex, guessAlex)
    .timeout(relativeTime(deadline), () => closeTo(Jack, informTimeout));
  commit();

  Jack.only(() => {
    const saltJack1 = declassify(_saltJack1);
    const handJack = declassify(_handJack);
    const saltJack2 = declassify(_saltJack2);
    const guessJack = declassify(_guessJack);
  });

  Jack.publish(saltJack1,saltJack2, handJack, guessJack)
  .timeout(relativeTime(deadline), () => closeTo(Alex, informTimeout));
  checkCommitment(commitJack1, saltJack1, handJack);
  checkCommitment(commitJack2, saltJack2, guessJack);

  // Report results
  each([Jack, Alex], () => {
    interact.reportHands(handJack, guessJack, handAlex, guessAlex);
  });

  result = winner(handJack, guessJack, handAlex, guessAlex);
  continue;
}
//when no DRAW or NO_WINS
assert(result == A_WINS || result == B_WINS);

each([Jack, Alex], () => {
  interact.reportResult(result);
});

transfer(2 * wager).to(result == A_WINS ? Jack : Alex);
commit();
});
