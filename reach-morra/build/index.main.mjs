// Automatically generated with Reach 0.1.12 (ae94865f)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (ae94865f)';
export const _backendVersion = 24;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Jack(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Jack expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Jack expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v332 = stdlib.protect(ctc0, interact.deadline, 'for Jack\'s interact field deadline');
  const v333 = stdlib.protect(ctc0, interact.wager, 'for Jack\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v333, v332],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:89:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v333, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v337, v338], secs: v340, time: v339, didSend: v63, from: v336 } = txn1;
      
      sim_r.txns.push({
        amt: v337,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v349 = stdlib.safeAdd(v339, v338);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v337, v338], secs: v340, time: v339, didSend: v63, from: v336 } = txn1;
  ;
  const v349 = stdlib.safeAdd(v339, v338);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v349],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v336, v337, v338, v349],
      evt_cnt: 0,
      funcNum: 2,
      lct: v339,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v524, time: v523, didSend: v284, from: v522 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v336,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v524, time: v523, didSend: v284, from: v522 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:81:29:application',
      fs: ['at ./index.rsh:80:9:application call to [unknown function] (defined at: ./index.rsh:80:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:79:28:function exp)', 'at ./index.rsh:97:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Jack'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v355, time: v354, didSend: v72, from: v353 } = txn2;
    const v357 = stdlib.add(v337, v337);
    ;
    let v358 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3');
    let v359 = v354;
    let v366 = v357;
    
    let txn3 = txn2;
    while (await (async () => {
      const v374 = stdlib.eq(v358, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3'));
      const v375 = stdlib.eq(v358, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      const v376 = v374 ? true : v375;
      
      return v376;})()) {
      const v383 = stdlib.safeAdd(v359, v338);
      const v387 = stdlib.protect(ctc0, await interact.getHand(), {
        at: './index.rsh:108:40:application',
        fs: ['at ./index.rsh:107:13:application call to [unknown function] (defined at: ./index.rsh:107:17:function exp)'],
        msg: 'getHand',
        who: 'Jack'
        });
      const v388 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:109:56:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:107:13:application call to [unknown function] (defined at: ./index.rsh:107:17:function exp)'],
        msg: 'random',
        who: 'Jack'
        });
      const v389 = stdlib.digest([ctc0, ctc0], [v388, v387]);
      const v391 = stdlib.protect(ctc0, await interact.getGuess(), {
        at: './index.rsh:112:42:application',
        fs: ['at ./index.rsh:107:13:application call to [unknown function] (defined at: ./index.rsh:107:17:function exp)'],
        msg: 'getGuess',
        who: 'Jack'
        });
      const v392 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:113:56:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:107:13:application call to [unknown function] (defined at: ./index.rsh:107:17:function exp)'],
        msg: 'random',
        who: 'Jack'
        });
      const v393 = stdlib.digest([ctc0, ctc0], [v392, v391]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v336, v337, v338, v353, v366, v383, v389, v393],
        evt_cnt: 2,
        funcNum: 4,
        lct: v359,
        onlyIf: true,
        out_tys: [ctc1, ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:119:9:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v396, v397], secs: v399, time: v398, didSend: v106, from: v395 } = txn4;
          
          ;
          const v407 = stdlib.safeAdd(v398, v338);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v383],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v336, v337, v338, v353, v366, v383],
          evt_cnt: 0,
          funcNum: 5,
          lct: v359,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v490, time: v489, didSend: v237, from: v488 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v353,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v490, time: v489, didSend: v237, from: v488 } = txn5;
        ;
        const v491 = stdlib.addressEq(v336, v488);
        const v492 = stdlib.addressEq(v353, v488);
        const v493 = v491 ? true : v492;
        stdlib.assert(v493, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:120:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Jack'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:81:29:application',
          fs: ['at ./index.rsh:80:9:application call to [unknown function] (defined at: ./index.rsh:80:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:79:28:function exp)', 'at ./index.rsh:120:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Jack'
          });
        
        return;
        
        }
      else {
        const {data: [v396, v397], secs: v399, time: v398, didSend: v106, from: v395 } = txn4;
        ;
        const v400 = stdlib.addressEq(v336, v395);
        stdlib.assert(v400, {
          at: './index.rsh:119:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Jack'
          });
        const v407 = stdlib.safeAdd(v398, v338);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 6,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v407],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v336, v337, v338, v353, v366, v396, v397, v407],
            evt_cnt: 0,
            funcNum: 7,
            lct: v398,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v472, time: v471, didSend: v203, from: v470 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v336,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v472, time: v471, didSend: v203, from: v470 } = txn6;
          ;
          const v473 = stdlib.addressEq(v336, v470);
          const v474 = stdlib.addressEq(v353, v470);
          const v475 = v473 ? true : v474;
          stdlib.assert(v475, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:133:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Jack'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:81:29:application',
            fs: ['at ./index.rsh:80:9:application call to [unknown function] (defined at: ./index.rsh:80:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:79:28:function exp)', 'at ./index.rsh:133:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Jack'
            });
          
          return;
          
          }
        else {
          const {data: [v414, v415], secs: v417, time: v416, didSend: v118, from: v413 } = txn5;
          ;
          const v418 = stdlib.addressEq(v353, v413);
          stdlib.assert(v418, {
            at: './index.rsh:132:7:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Jack'
            });
          const v425 = stdlib.safeAdd(v416, v338);
          const txn6 = await (ctc.sendrecv({
            args: [v336, v337, v338, v353, v366, v396, v397, v414, v415, v425, v388, v392, v387, v391],
            evt_cnt: 4,
            funcNum: 8,
            lct: v416,
            onlyIf: true,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:144:9:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v430, v431, v432, v433], secs: v435, time: v434, didSend: v130, from: v429 } = txn6;
              
              ;
              
              let v445;
              const v446 = stdlib.safeAdd(v432, v414);
              const v447 = stdlib.eq(v433, v446);
              const v448 = stdlib.eq(v415, v446);
              const v449 = v447 ? v448 : false;
              if (v449) {
                v445 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3');
                }
              else {
                if (v448) {
                  v445 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                  }
                else {
                  if (v447) {
                    v445 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    }
                  else {
                    v445 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                    }
                  }
                }
              const cv358 = v445;
              const cv359 = v434;
              const cv366 = v366;
              
              await (async () => {
                const v358 = cv358;
                const v359 = cv359;
                const v366 = cv366;
                
                if (await (async () => {
                  const v374 = stdlib.eq(v358, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3'));
                  const v375 = stdlib.eq(v358, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                  const v376 = v374 ? true : v375;
                  
                  return v376;})()) {
                  const v383 = stdlib.safeAdd(v359, v338);
                  sim_r.isHalt = false;
                  }
                else {
                  const v506 = stdlib.eq(v358, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                  
                  const v513 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:164:10:decimal', stdlib.UInt_max, '2'), v337);
                  const v515 = v506 ? v336 : v353;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v515,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v425],
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v336, v337, v338, v353, v366, v396, v397, v414, v415, v425],
              evt_cnt: 0,
              funcNum: 9,
              lct: v416,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v454, time: v453, didSend: v169, from: v452 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v353,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v454, time: v453, didSend: v169, from: v452 } = txn7;
            ;
            const v455 = stdlib.addressEq(v336, v452);
            const v456 = stdlib.addressEq(v353, v452);
            const v457 = v455 ? true : v456;
            stdlib.assert(v457, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:145:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Jack'
              });
            ;
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:81:29:application',
              fs: ['at ./index.rsh:80:9:application call to [unknown function] (defined at: ./index.rsh:80:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:79:28:function exp)', 'at ./index.rsh:145:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Jack'
              });
            
            return;
            
            }
          else {
            const {data: [v430, v431, v432, v433], secs: v435, time: v434, didSend: v130, from: v429 } = txn6;
            ;
            const v436 = stdlib.addressEq(v336, v429);
            stdlib.assert(v436, {
              at: './index.rsh:144:9:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Jack'
              });
            const v437 = stdlib.digest([ctc0, ctc0], [v430, v432]);
            const v438 = stdlib.digestEq(v396, v437);
            stdlib.assert(v438, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:146:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Jack'
              });
            const v439 = stdlib.digest([ctc0, ctc0], [v431, v433]);
            const v440 = stdlib.digestEq(v397, v439);
            stdlib.assert(v440, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:147:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Jack'
              });
            stdlib.protect(ctc2, await interact.reportHands(v432, v433, v414, v415), {
              at: './index.rsh:151:25:application',
              fs: ['at ./index.rsh:150:7:application call to [unknown function] (defined at: ./index.rsh:150:25:function exp)'],
              msg: 'reportHands',
              who: 'Jack'
              });
            
            let v445;
            const v446 = stdlib.safeAdd(v432, v414);
            const v447 = stdlib.eq(v433, v446);
            const v448 = stdlib.eq(v415, v446);
            const v449 = v447 ? v448 : false;
            if (v449) {
              v445 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3');
              }
            else {
              if (v448) {
                v445 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                }
              else {
                if (v447) {
                  v445 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  }
                else {
                  v445 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                  }
                }
              }
            const cv358 = v445;
            const cv359 = v434;
            const cv366 = v366;
            
            v358 = cv358;
            v359 = cv359;
            v366 = cv366;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v506 = stdlib.eq(v358, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    stdlib.protect(ctc2, await interact.reportResult(v358), {
      at: './index.rsh:161:24:application',
      fs: ['at ./index.rsh:160:5:application call to [unknown function] (defined at: ./index.rsh:160:23:function exp)'],
      msg: 'reportResult',
      who: 'Jack'
      });
    
    const v513 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:164:10:decimal', stdlib.UInt_max, '2'), v337);
    const v515 = v506 ? v336 : v353;
    ;
    return;
    }
  
  
  
  };
export async function Alex(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alex expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alex expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v337, v338], secs: v340, time: v339, didSend: v63, from: v336 } = txn1;
  ;
  const v349 = stdlib.safeAdd(v339, v338);
  stdlib.protect(ctc1, await interact.acceptWager(v337), {
    at: './index.rsh:94:25:application',
    fs: ['at ./index.rsh:93:11:application call to [unknown function] (defined at: ./index.rsh:93:15:function exp)'],
    msg: 'acceptWager',
    who: 'Alex'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v336, v337, v338, v349],
    evt_cnt: 0,
    funcNum: 1,
    lct: v339,
    onlyIf: true,
    out_tys: [],
    pay: [v337, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v355, time: v354, didSend: v72, from: v353 } = txn2;
      
      const v357 = stdlib.add(v337, v337);
      sim_r.txns.push({
        amt: v337,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v358 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3');
      const v359 = v354;
      const v366 = v357;
      
      if (await (async () => {
        const v374 = stdlib.eq(v358, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3'));
        const v375 = stdlib.eq(v358, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        const v376 = v374 ? true : v375;
        
        return v376;})()) {
        const v383 = stdlib.safeAdd(v359, v338);
        sim_r.isHalt = false;
        }
      else {
        const v506 = stdlib.eq(v358, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        const v513 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:164:10:decimal', stdlib.UInt_max, '2'), v337);
        const v515 = v506 ? v336 : v353;
        sim_r.txns.push({
          kind: 'from',
          to: v515,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v349],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v336, v337, v338, v349],
      evt_cnt: 0,
      funcNum: 2,
      lct: v339,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v524, time: v523, didSend: v284, from: v522 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v336,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v524, time: v523, didSend: v284, from: v522 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:81:29:application',
      fs: ['at ./index.rsh:80:9:application call to [unknown function] (defined at: ./index.rsh:80:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:79:28:function exp)', 'at ./index.rsh:97:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alex'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v355, time: v354, didSend: v72, from: v353 } = txn2;
    const v357 = stdlib.add(v337, v337);
    ;
    let v358 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3');
    let v359 = v354;
    let v366 = v357;
    
    let txn3 = txn2;
    while (await (async () => {
      const v374 = stdlib.eq(v358, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3'));
      const v375 = stdlib.eq(v358, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      const v376 = v374 ? true : v375;
      
      return v376;})()) {
      const v383 = stdlib.safeAdd(v359, v338);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc2, ctc2],
        timeoutAt: ['time', v383],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v336, v337, v338, v353, v366, v383],
          evt_cnt: 0,
          funcNum: 5,
          lct: v359,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v490, time: v489, didSend: v237, from: v488 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v353,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v490, time: v489, didSend: v237, from: v488 } = txn5;
        ;
        const v491 = stdlib.addressEq(v336, v488);
        const v492 = stdlib.addressEq(v353, v488);
        const v493 = v491 ? true : v492;
        stdlib.assert(v493, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:120:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alex'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:81:29:application',
          fs: ['at ./index.rsh:80:9:application call to [unknown function] (defined at: ./index.rsh:80:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:79:28:function exp)', 'at ./index.rsh:120:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alex'
          });
        
        return;
        
        }
      else {
        const {data: [v396, v397], secs: v399, time: v398, didSend: v106, from: v395 } = txn4;
        ;
        const v400 = stdlib.addressEq(v336, v395);
        stdlib.assert(v400, {
          at: './index.rsh:119:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alex'
          });
        const v407 = stdlib.safeAdd(v398, v338);
        const v411 = stdlib.protect(ctc0, await interact.getHand(), {
          at: './index.rsh:128:48:application',
          fs: ['at ./index.rsh:127:11:application call to [unknown function] (defined at: ./index.rsh:127:15:function exp)'],
          msg: 'getHand',
          who: 'Alex'
          });
        const v412 = stdlib.protect(ctc0, await interact.getGuess(), {
          at: './index.rsh:129:50:application',
          fs: ['at ./index.rsh:127:11:application call to [unknown function] (defined at: ./index.rsh:127:15:function exp)'],
          msg: 'getGuess',
          who: 'Alex'
          });
        
        const txn5 = await (ctc.sendrecv({
          args: [v336, v337, v338, v353, v366, v396, v397, v407, v411, v412],
          evt_cnt: 2,
          funcNum: 6,
          lct: v398,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:132:7:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v414, v415], secs: v417, time: v416, didSend: v118, from: v413 } = txn5;
            
            ;
            const v425 = stdlib.safeAdd(v416, v338);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v407],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v336, v337, v338, v353, v366, v396, v397, v407],
            evt_cnt: 0,
            funcNum: 7,
            lct: v398,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v472, time: v471, didSend: v203, from: v470 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v336,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v472, time: v471, didSend: v203, from: v470 } = txn6;
          ;
          const v473 = stdlib.addressEq(v336, v470);
          const v474 = stdlib.addressEq(v353, v470);
          const v475 = v473 ? true : v474;
          stdlib.assert(v475, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:133:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alex'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:81:29:application',
            fs: ['at ./index.rsh:80:9:application call to [unknown function] (defined at: ./index.rsh:80:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:79:28:function exp)', 'at ./index.rsh:133:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alex'
            });
          
          return;
          
          }
        else {
          const {data: [v414, v415], secs: v417, time: v416, didSend: v118, from: v413 } = txn5;
          ;
          const v418 = stdlib.addressEq(v353, v413);
          stdlib.assert(v418, {
            at: './index.rsh:132:7:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alex'
            });
          const v425 = stdlib.safeAdd(v416, v338);
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 4,
            funcNum: 8,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            timeoutAt: ['time', v425],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v336, v337, v338, v353, v366, v396, v397, v414, v415, v425],
              evt_cnt: 0,
              funcNum: 9,
              lct: v416,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v454, time: v453, didSend: v169, from: v452 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v353,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v454, time: v453, didSend: v169, from: v452 } = txn7;
            ;
            const v455 = stdlib.addressEq(v336, v452);
            const v456 = stdlib.addressEq(v353, v452);
            const v457 = v455 ? true : v456;
            stdlib.assert(v457, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:145:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Alex'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:81:29:application',
              fs: ['at ./index.rsh:80:9:application call to [unknown function] (defined at: ./index.rsh:80:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:79:28:function exp)', 'at ./index.rsh:145:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alex'
              });
            
            return;
            
            }
          else {
            const {data: [v430, v431, v432, v433], secs: v435, time: v434, didSend: v130, from: v429 } = txn6;
            ;
            const v436 = stdlib.addressEq(v336, v429);
            stdlib.assert(v436, {
              at: './index.rsh:144:9:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alex'
              });
            const v437 = stdlib.digest([ctc0, ctc0], [v430, v432]);
            const v438 = stdlib.digestEq(v396, v437);
            stdlib.assert(v438, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:146:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Alex'
              });
            const v439 = stdlib.digest([ctc0, ctc0], [v431, v433]);
            const v440 = stdlib.digestEq(v397, v439);
            stdlib.assert(v440, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:147:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Alex'
              });
            stdlib.protect(ctc1, await interact.reportHands(v432, v433, v414, v415), {
              at: './index.rsh:151:25:application',
              fs: ['at ./index.rsh:150:7:application call to [unknown function] (defined at: ./index.rsh:150:25:function exp)'],
              msg: 'reportHands',
              who: 'Alex'
              });
            
            let v445;
            const v446 = stdlib.safeAdd(v432, v414);
            const v447 = stdlib.eq(v433, v446);
            const v448 = stdlib.eq(v415, v446);
            const v449 = v447 ? v448 : false;
            if (v449) {
              v445 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3');
              }
            else {
              if (v448) {
                v445 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                }
              else {
                if (v447) {
                  v445 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  }
                else {
                  v445 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                  }
                }
              }
            const cv358 = v445;
            const cv359 = v434;
            const cv366 = v366;
            
            v358 = cv358;
            v359 = cv359;
            v366 = cv366;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v506 = stdlib.eq(v358, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    stdlib.protect(ctc1, await interact.reportResult(v358), {
      at: './index.rsh:161:24:application',
      fs: ['at ./index.rsh:160:5:application call to [unknown function] (defined at: ./index.rsh:160:23:function exp)'],
      msg: 'reportResult',
      who: 'Alex'
      });
    
    const v513 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:164:10:decimal', stdlib.UInt_max, '2'), v337);
    const v515 = v506 ? v336 : v353;
    ;
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAPAAFQCAUJIAcDAiiYAagBWDAmAwEAAQEAIjUAMRhBBRcqZEkiWzUBJVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQQMQAKdSSEHDEABkUklDEABOEkhBQxAAFYhBRJEIQU0ARJENARJIhJMNAISEUQoZClkUEk1A1cwIDX/gASiBWaOsDIGNAMhDFsPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0IEL0ghBTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf9JNQVJSiJbNf4lWzX9gRBbNfyBGFs1+4AEf6I7UjT+FlA0/RZQNPwWUDT7FlCwMgY0AyEMWwxENP8xABJENANXWCA0/hY0/BZQARJENANXeCA0/RY0+xZQARJENPw0AyELWwg1+TT7NPkSNfg0A4GgAVs0+RI19zT4NPcQQQAHIQg1+kIAGjT3QQAHIQk1+kIADjT4QQAGIzX6QgADIjX6NP80AyEGWzQDIQpbNANXMCA0+jIGNAMkW0IC7UghBzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABOIbs6mwMgY0AyELWw9ENP8xABI0A1cwIDEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgMBSYEGDEAArkghBzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSVcAIDX/IQZbNf4hCls1/VcwIDX8JFs1+1dYIDX6V3ggNflJNQVJIls1+CVbNfeABEohy/w0+BZQNPcWULAyBjQDIQtbDEQ0/DEAEkQyBjT9CDX2NP80/hZQNP0WUDT8UDT7FlA0+lA0+VA0+BZQNPcWUDT2FlAoSwFXAH9nKUsBV38xZ0ghBTUBMgY1AkICaEghBDQBEkQ0BEkiEkw0AhIRRChkSTUDVzAgNf+ABMyZklywMgY0AyENWw9ENANXACAxABI0/zEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgH8SSEJDEAA4EmBBAxAAJhIIQQ0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/IQZbNf4hCls1/VcwIDX8JFs1+0k1BUlXACA1+lcgIDX5gARgXaQrNPpQNPlQsDIGNAMhDVsMRDT/MQASRDIGNP0INfg0/zT+FlA0/RZQNPxQNPsWUDT6UDT5UDT4FlAoSwFXAH9nKUsBV38hZ0ghBzUBMgY1AkIBciEJEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQ5bD0SxIrIBNAMhBluyCCOyEDQDVwAgsgezQgEVSSMMQABJSCM0ARJENARJIhJMNAISEUQoZEk1AyEGWzX/gASai5F0sDIGNAMhDlsMRDT/iAFNNANXACA0/zQDIQpbMQAhCDIGNP9JCEIAX0iBoI0GiAEsIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/JVs1/oAErNEfwzT/FlA0/hZQsDT/iAD8MgY0/gg1/TEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgCDNf81/jX9Nfw1+zX6Nfk0/SEIEjT9IhIRQQAvNP40+wg1+DT5NPoWUDT7FlA0/FA0/xZQNPgWUChLAVcAYGdIIQQ1ATIGNQJCADmxIrIBIQk0+guyCCOyEDT8NPk0/SMSTbIHs0IAADEZIQQSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhCDE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 176,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v337",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v338",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v337",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v338",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v396",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v397",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v414",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v415",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v430",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v431",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v432",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v433",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v396",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v397",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v414",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v415",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v430",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v431",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v432",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v433",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001e0c38038062001e0c8339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b611a8f806200037d6000396000f3fe60806040526004361061009a5760003560e01c80638e314769116100615780638e31476914610115578063ab53f2c614610128578063bf2c5b241461014b578063cc923b291461015e578063de73699814610171578063ebdbfdcc1461018457005b80631e93b0f1146100a357806321642639146100c75780632c10a159146100da5780637eea518c146100ed578063832307571461010057005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d536600461157a565b610197565b6100a16100e836600461159d565b6103fc565b6100a16100fb36600461159d565b61058b565b34801561010c57600080fd5b506001546100b4565b6100a161012336600461159d565b610709565b34801561013457600080fd5b5061013d6108a4565b6040516100be9291906115af565b6100a161015936600461159d565b610941565b6100a161016c36600461160c565b610ad8565b6100a161017f36600461159d565b610df5565b6100a161019236600461157a565b610f50565b6101a7600760005414601c6111c1565b6101c1813515806101ba57506001548235145b601d6111c1565b6000808055600280546101d39061161e565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff9061161e565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b505050505080602001905181019061026491906116a7565b905061027c6040518060200160405280600081525090565b61028d8260e001514310601e6111c1565b7fb2a03f9306ab783007397921312164b54fbeead1388356342ff3ef55c8552b3f33846040516102be929190611753565b60405180910390a16102d23415601a6111c1565b60608201516102ed906001600160a01b03163314601b6111c1565b6102fb4383604001516111e7565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e084015285820135610100840152835161012084015260096000554360015590516103d191839101611784565b604051602081830303815290604052600290805190602001906103f5929190611433565b5050505050565b61040c60016000541460096111c1565b6104268135158061041f57506001548235145b600a6111c1565b6000808055600280546104389061161e565b80601f01602080910402602001604051908101604052809291908181526020018280546104649061161e565b80156104b15780601f10610486576101008083540402835291602001916104b1565b820191906000526020600020905b81548152906001019060200180831161049457829003601f168201915b50505050508060200190518101906104c9919061180b565b90506104dc81606001514310600b6111c1565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161050d929190611884565b60405180910390a16105268160200151341460086111c1565b61052e6114b7565b815181516001600160a01b03909116905260208083018051835183015260408085015184519091015282513360609091015281830180516003905251439201919091525180016020820151604001526105868161123a565b505050565b61059b600160005414600d6111c1565b6105b5813515806105ae57506001548235145b600e6111c1565b6000808055600280546105c79061161e565b80601f01602080910402602001604051908101604052809291908181526020018280546105f39061161e565b80156106405780601f1061061557610100808354040283529160200191610640565b820191906000526020600020905b81548152906001019060200180831161062357829003601f168201915b5050505050806020019051810190610658919061180b565b905061066c8160600151431015600f6111c1565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161069d929190611884565b60405180910390a16106b13415600c6111c1565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106ee573d6000803e3d6000fd5b506000808055600181905561070590600290611510565b5050565b61071960056000541460176111c1565b6107338135158061072c57506001548235145b60186111c1565b6000808055600280546107459061161e565b80601f01602080910402602001604051908101604052809291908181526020018280546107719061161e565b80156107be5780601f10610793576101008083540402835291602001916107be565b820191906000526020600020905b8154815290600101906020018083116107a157829003601f168201915b50505050508060200190518101906107d691906118c1565b90506107ea8160a0015143101560196111c1565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338360405161081b929190611884565b60405180910390a161082f341560156111c1565b8051610863906001600160a01b031633146108595760608201516001600160a01b0316331461085c565b60015b60166111c1565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f193505050501580156106ee573d6000803e3d6000fd5b6000606060005460028080546108b99061161e565b80601f01602080910402602001604051908101604052809291908181526020018280546108e59061161e565b80156109325780601f1061090757610100808354040283529160200191610932565b820191906000526020600020905b81548152906001019060200180831161091557829003601f168201915b50505050509050915091509091565b61095160076000541460216111c1565b61096b8135158061096457506001548235145b60226111c1565b60008080556002805461097d9061161e565b80601f01602080910402602001604051908101604052809291908181526020018280546109a99061161e565b80156109f65780601f106109cb576101008083540402835291602001916109f6565b820191906000526020600020905b8154815290600101906020018083116109d957829003601f168201915b5050505050806020019051810190610a0e91906116a7565b9050610a228160e0015143101560236111c1565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610a53929190611884565b60405180910390a1610a673415601f6111c1565b8051610a9b906001600160a01b03163314610a915760608201516001600160a01b03163314610a94565b60015b60206111c1565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106ee573d6000803e3d6000fd5b610ae860096000541460286111c1565b610b0281351580610afb57506001548235145b60296111c1565b600080805560028054610b149061161e565b80601f0160208091040260200160405190810160405280929190818152602001828054610b409061161e565b8015610b8d5780601f10610b6257610100808354040283529160200191610b8d565b820191906000526020600020905b815481529060010190602001808311610b7057829003601f168201915b5050505050806020019051810190610ba59190611955565b9050610bd6604051806080016040528060008152602001600081526020016000151581526020016000151581525090565b610be88261012001514310602a6111c1565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201527fc7e07aa759791812e0e03fb583c5fbed2f43e8adb4535b4faa695e77e84ea4fe9060c00160405180910390a1610c5b341560246111c1565b8151610c73906001600160a01b0316331460256111c1565b604051610cc090610c9a906020808701359160608801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a001511460266111c1565b60408051848201356020820152608085013591810191909152610d06906060016040516020818303038152906040528051906020012060001c8360c001511460276111c1565b610d1b83602001604001358360e001516111e7565b6020820181905260808401358114604083018190526101008401519091146060830152610d49576000610d4f565b80606001515b15610d5d5760038152610d88565b806060015115610d705760028152610d88565b806040015115610d835760018152610d88565b600081525b610d906114b7565b825181516001600160a01b039182169052602080850151835182015260408086015184518201526060808701518551941693019290925283518184018051919091528051439201919091526080850151905190910152610def8161123a565b50505050565b610e05600960005414602d6111c1565b610e1f81351580610e1857506001548235145b602e6111c1565b600080805560028054610e319061161e565b80601f0160208091040260200160405190810160405280929190818152602001828054610e5d9061161e565b8015610eaa5780601f10610e7f57610100808354040283529160200191610eaa565b820191906000526020600020905b815481529060010190602001808311610e8d57829003601f168201915b5050505050806020019051810190610ec29190611955565b9050610ed7816101200151431015602f6111c1565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3383604051610f08929190611884565b60405180910390a1610f1c3415602b6111c1565b8051610863906001600160a01b03163314610f465760608201516001600160a01b03163314610f49565b60015b602c6111c1565b610f6060056000541460126111c1565b610f7a81351580610f7357506001548235145b60136111c1565b600080805560028054610f8c9061161e565b80601f0160208091040260200160405190810160405280929190818152602001828054610fb89061161e565b80156110055780601f10610fda57610100808354040283529160200191611005565b820191906000526020600020905b815481529060010190602001808311610fe857829003601f168201915b505050505080602001905181019061101d91906118c1565b90506110356040518060200160405280600081525090565b6110468260a00151431060146111c1565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a3384604051611077929190611753565b60405180910390a161108b341560106111c1565b81516110a3906001600160a01b0316331460116111c1565b6110b14383604001516111e7565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b039081168252602080850151818401526040808601518185015260608087015190931692840192909252608080860151908401528581013560a08401528582013560c0840152835160e084015260076000554360015590516103d19183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b816107055760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000826111f48382611a00565b91508110156112345760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016111de565b92915050565b6040805160208101909152600081526020820151516003146112625760208201515115611265565b60015b15611371576112848260200151602001518360000151604001516111e7565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e00160405160208183030381529060405260029080519060200190610def929190611433565b6020820151516001146113895781516060015161138d565b8151515b6001600160a01b03166108fc6113ac60028560000151602001516113d4565b6040518115909202916000818181858888f193505050501580156106ee573d6000803e3d6000fd5b60008115806113f8575082826113ea8183611a18565b92506113f69083611a37565b145b6112345760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b60448201526064016111de565b82805461143f9061161e565b90600052602060002090601f01602090048101928261146157600085556114a7565b82601f1061147a57805160ff19168380011785556114a7565b828001600101855582156114a7579182015b828111156114a757825182559160200191906001019061148c565b506114b392915061154d565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161150b60405180606001604052806000815260200160008152602001600081525090565b905290565b50805461151c9061161e565b6000825580601f1061152c575050565b601f01602090049060005260206000209081019061154a919061154d565b50565b5b808211156114b3576000815560010161154e565b60006060828403121561157457600080fd5b50919050565b60006060828403121561158c57600080fd5b6115968383611562565b9392505050565b60006040828403121561157457600080fd5b82815260006020604081840152835180604085015260005b818110156115e3578581018301518582016060015282016115c7565b818111156115f5576000606083870101525b50601f01601f191692909201606001949350505050565b600060a0828403121561157457600080fd5b600181811c9082168061163257607f821691505b6020821081141561157457634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff8111828210171561168557634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146116a257600080fd5b919050565b60006101008083850312156116bb57600080fd5b6040519081019067ffffffffffffffff821181831017156116ec57634e487b7160e01b600052604160045260246000fd5b816040526116f98461168b565b8152602084015160208201526040840151604082015261171b6060850161168b565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b03831681526080810161159660208301848035825260208082013590830152604090810135910152565b81516001600160a01b031681526101408101602083015160208301526040830151604083015260608301516117c460608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525092915050565b60006080828403121561181d57600080fd5b6040516080810181811067ffffffffffffffff8211171561184e57634e487b7160e01b600052604160045260246000fd5b60405261185a8361168b565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146118b257600080fd5b80604085015250509392505050565b600060c082840312156118d357600080fd5b60405160c0810181811067ffffffffffffffff8211171561190457634e487b7160e01b600052604160045260246000fd5b6040526119108361168b565b815260208301516020820152604083015160408201526119326060840161168b565b60608201526080830151608082015260a083015160a08201528091505092915050565b6000610140828403121561196857600080fd5b611970611653565b6119798361168b565b8152602083015160208201526040830151604082015261199b6060840161168b565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611a1357611a136119ea565b500190565b6000816000190483118215151615611a3257611a326119ea565b500290565b600082611a5457634e487b7160e01b600052601260045260246000fd5b50049056fea264697066735822122047dc416ef1b80d436450f2b192b7b251c5bb37ff2a3ab49222b279b4b485db2e64736f6c634300080c0033`,
  BytecodeLen: 7692,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:91:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:97:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:165:9:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:105:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:120:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:121:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:133:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:134:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:145:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Jack": Jack,
  "Alex": Alex
  };
export const _APIs = {
  };
