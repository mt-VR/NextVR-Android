import test from 'node:test';
import assert from 'node:assert/strict';
import { PalmDockGesture } from '../web/src/palm-dock.js';
import { COMFORT,migrateComfort } from '../web/src/comfort.js';
const hand=(pinching,extra={})=>({id:'left',menuEligible:true,fist:false,pinching,...extra});
test('palm dock pinch gesture has been removed — no pinch summons the dock',()=>{
  const g=new PalmDockGesture();
  // Previously required open palm then pinch after 150ms; now disabled.
  assert.deepEqual(g.update([hand(true)],0),[]);
  assert.deepEqual(g.update([hand(false)],100),[]);
  assert.deepEqual(g.update([hand(true)],300),[]);
  assert.deepEqual(g.update([hand(true)],600),[]);
  g.update([hand(false)],700);
  assert.deepEqual(g.update([hand(true)],900),[]);
});
test('palm dock remains disabled for any hand state',()=>{
  const g=new PalmDockGesture();
  assert.deepEqual(g.update([hand(false,{menuEligible:false})],0),[]);
  assert.deepEqual(g.update([hand(true,{fist:true})],100),[]);
  g.update([hand(false)],200);g.update([],500);
  assert.deepEqual(g.update([hand(true)],700),[]);
});
test('fist during pinch transition cannot reactivate the removed palm dock',()=>{
  const g=new PalmDockGesture();
  g.update([hand(false)],0);
  assert.deepEqual(g.update([hand(true)],200),[]);
  g.update([hand(false)],300);
  g.update([hand(false,{fist:true})],400);
  assert.deepEqual(g.update([hand(true)],500),[]);
});
test('existing installations get the close layout once, then retain distance adjustments',()=>{
  const old={lang:'en',winDist:2.2,dockDist:1.5,winScale:1.1};
  const moved=migrateComfort(old);
  assert.equal(moved.winDist,.68);assert.equal(moved.dockDist,1);
  assert.equal(moved.lang,'en');assert.equal(moved.winScale,1.1);
  moved.winDist=1.2;assert.equal(migrateComfort(moved).winDist,1.2);
  assert.equal(COMFORT.welcomeDistance,.42);
});
