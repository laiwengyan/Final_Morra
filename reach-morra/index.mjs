import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const suStr = stdlib.standardUnit; 
const toAU = (su) => stdlib.parseCurrency(su);
const toSU = (au) => stdlib.formatCurrency(au, 4);
const iBalance = toAU(1000);
const showBalance = async (acc) => console.log(`Your balance is ${toSU(await stdlib.balanceOf(acc))} ${suStr}.`);
const OUTCOME = ['NO_WINS', 'Jack WINS', 'Alex WINS', 'DRAW', ];

const bothInteract = {
  ...stdlib.hasRandom,
  reportResult:  (result) => { console.log(`The result is: ${OUTCOME[result]}`)},
  //interact.reportHands(handJack, guessJack, handAlex, guessAlex, total );

  reportHands:  (A,aGuess,B, bGuess) => { 
    console.log(`*** Jack played hand: ${toSU(A)}, guess: ${toSU(aGuess)} `)
    console.log(`*** Alex played hand: ${toSU(B)}, guess: ${toSU(bGuess)} `)
    console.log(`*** Total fingers : ${toSU( parseInt(A)+parseInt(B) )}`)

    
  },

  informTimeout: () => {  
    console.log(`There was a timeout.`); 
      process.exit(1);
  },

  //getHand: Fun([], UInt),
  getHand: async () => {  
    const hand = await ask.ask( `How many fingers?`, stdlib.parseCurrency );
    return hand
  },

  //getGuess: Fun([], UInt),
  getGuess: async () => {
      const guess = await ask.ask( `Guess total fingers?`, stdlib.parseCurrency );
      return guess
  },
}

const isJack = await ask.ask(
  `Are you Jack?`,
  ask.yesno
);
const who = isJack ? 'Jack' : 'Alex';
console.log(`Starting MORRA as ${who}`);
let acc = null;

if (who === 'Jack') {
  const amt = await ask.ask( `How much do you want to wager?`, stdlib.parseCurrency );

  const jackInteract = {
  ...bothInteract,
  wager: amt,
  deadline:100,
  }

  // create new test account with 1000 ALGO
  const acc = await stdlib.newTestAccount(iBalance);
  await showBalance(acc);

  // First participant, deploy the contract
  const ctc = acc.contract(backend);
  
  ctc.getInfo().then((info) => {
    console.log(`The contract is deployed as = ${JSON.stringify(info)}`); });

  await ctc.p.Jack(jackInteract);
  await showBalance(acc);
  
} else if ( who === 'Alex') {
  const alexInteract = {
    ...bothInteract,
    acceptWager: async (amt) => {
      const accepted = await ask.ask( `Do you want to accept wager of ${toSU(amt)} ?`, ask.yesno )
        if (!accepted) {
          process.exit(0);
        }
      }

  }

  const acc = await stdlib.newTestAccount(iBalance);
  const info = await ask.ask('Paste contract info:', (s) => JSON.parse(s));

  // Other participants attached the contract 
  const ctc = acc.contract(backend, info);
  await showBalance(acc);

  // alex interaction
  await ctc.p.Alex(alexInteract);
  await showBalance(acc);
} 

ask.done();
