import test from 'node:test';
import assert from 'node:assert/strict';
import { PalmDockGesture } from '../web/src/palm-dock.js';
import { COMFORT,migrateComfort } from '../web/src/comfort.js';
const hand=(pinching,extra={})=>({id:'left',menuEligible:true,fist:false,pinching,...extra});
test('palm menu requires an open palm then pinch; held pinch summons only once',()=>{
  const g=new PalmDockGesture();
  assert.equal(g.update([hand(true)],0)[0].activate,false);
  g.update([hand(false)],100);
  assert.equal(g.update([hand(true)],300)[0].activate,true);
  assert.equal(g.update([hand(true)],600)[0].activate,false);
  g.update([hand(false)],700);
  assert.equal(g.update([hand(true)],900)[0].activate,true);
});
test('forward pointing, fists and lost hands cannot activate the dock menu',()=>{
  const g=new PalmDockGesture();
  assert.deepEqual(g.update([hand(false,{menuEligible:false})],0),[]);
  assert.deepEqual(g.update([hand(true,{fist:true})],100),[]);
  g.update([hand(false)],200);g.update([],500);
  assert.equal(g.update([hand(true)],700)[0].activate,false);
});
test('fist during pinch transition preserves the open-palm timer',()=>{
  const g=new PalmDockGesture();
  g.update([hand(false)],0);
  assert.equal(g.update([hand(true)],200)[0].activate,true);
  g.update([hand(false)],300);
  g.update([hand(false,{fist:true})],400);
  assert.equal(g.update([hand(true)],500)[0].activate,true);
});
test('existing installations get the close layout once, then retain distance adjustments',()=>{
  const old={lang:'en',winDist:2.2,dockDist:1.5,winScale:1.1};
  const moved=migrateComfort(old);
  assert.equal(moved.winDist,.68);assert.equal(moved.dockDist,1);
  assert.equal(moved.lang,'en');assert.equal(moved.winScale,1.1);
  moved.winDist=1.2;assert.equal(migrateComfort(moved).winDist,1.2);
  assert.equal(COMFORT.welcomeDistance,.42);
});
