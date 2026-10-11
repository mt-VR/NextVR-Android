import test from 'node:test';
import assert from 'node:assert/strict';
import { PalmDockGesture } from '../web/src/palm-dock.js';
import { COMFORT,migrateComfort } from '../web/src/comfort.js';

function hand(id,x,y,extra={}) {
  const points=Array(63).fill(0);
  points[8*3]=x; points[8*3+1]=y;
  return {id,menuEligible:true,fist:false,pinching:false,predicted:false,confidence:1,
    palm:[x,y],menuPoint:[x,y],palmWidth:.1,points,...extra};
}
const pair=(support=hand('left',.5,.58),control=hand('right',.51,.59))=>[support,control];

test('a palm menu opens only after an eligible open palm meets the other hand near it',()=>{
  const g=new PalmDockGesture({openDelayMs:140});
  assert.equal(g.update([hand('left',.5,.58)],1000).open,false,'one hand cannot summon the controls');
  assert.equal(g.update(pair(hand('left',.5,.58,{menuEligible:false}),hand('right',.51,.59,{menuEligible:false})),1100).open,false,'a palm facing away is not a support palm');
  assert.equal(g.update(pair(hand('left',.5,.58,{pinching:true}),hand('right',.51,.59,{menuEligible:false})),1200).open,false,'the support palm stays open; pinching is reserved for selection');
  assert.equal(g.update(pair(hand('left',.5,.58),hand('right',.95,.9)),1300).open,false,'a distant second hand does not summon the menu');
  assert.equal(g.update(pair(),1400).open,false,'proximity must settle, not flash open on one crossing sample');
  assert.equal(g.update(pair(),1539).open,false);
  const opened=g.update(pair(),1540);
  assert.equal(opened.open,true);
  assert.equal(opened.opened,true);
  assert.equal(opened.supportId,'left');
  assert.equal(opened.controlId,'right');
  assert.deepEqual(opened.anchor,[.5,.58]);
});

test('the second hand can approach with its fingertip and the palm can be either physical side',()=>{
  const g=new PalmDockGesture({openDelayMs:0});
  const support=hand('right',.46,.55,{palmWidth:.09});
  const control=hand('left',.85,.85,{palm:[.86,.84],menuPoint:[.47,.56]});
  const state=g.update([support,control],500,{width:1200,height:800,scaleX:1,scaleY:1});
  assert.equal(state.open,true);
  assert.equal(state.opened,true);
  assert.equal(state.supportId,'right');
});

test('an open menu follows its support palm while the selecting hand moves away, then fades on tracking loss',()=>{
  const g=new PalmDockGesture({openDelayMs:0,closeGraceMs:260});
  const [support,control]=pair();
  assert.equal(g.update([support,control],1000).open,true);
  const moved={...support,palm:[.62,.48]};
  const held=g.update([moved,hand('right',.95,.91)],1100);
  assert.equal(held.open,true,'the active selector may move away to aim at a button');
  assert.deepEqual(held.anchor,[.62,.48]);
  assert.equal(g.update([],1200).open,true,'tracking loss uses a short visual grace, not a pop');
  assert.equal(g.update([],1459).open,true);
  const closed=g.update([],1460);
  assert.equal(closed.open,false);
  assert.equal(closed.closed,true);
});

test('dismissal requires the hands to separate before another summon can arm',()=>{
  const g=new PalmDockGesture({openDelayMs:100,cooldownMs:400,rearmDelayMs:180});
  assert.equal(g.update(pair(),1000).open,false);
  assert.equal(g.update(pair(),1100).open,true);
  g.dismiss(1200);
  assert.equal(g.update(pair(),1600).open,false,'holding near the palm cannot reopen after an action');
  assert.equal(g.update([hand('left',.5,.58)],1700).open,false);
  assert.equal(g.update([hand('left',.5,.58)],1880).open,false);
  const rearmed=g.update(pair(),1900);
  assert.equal(rearmed.open,false);
  assert.equal(rearmed.arming,true);
  assert.equal(g.update(pair(),2000).open,true);
});

test('predicted or low-confidence palms cannot open controls',()=>{
  const g=new PalmDockGesture({openDelayMs:0});
  assert.equal(g.update(pair(hand('left',.5,.58,{predicted:true}),hand('right',.51,.59,{menuEligible:false})),100).open,false);
  assert.equal(g.update(pair(hand('left',.5,.58,{confidence:.2}),hand('right',.51,.59,{menuEligible:false})),200).open,false);
});

test('existing installations get the close layout and compact default size once, then retain adjustments',()=>{
  const old={lang:'en',winDist:2.2,dockDist:1.5,winScale:1.1};
  const moved=migrateComfort(old);
  assert.equal(moved.winDist,.68);assert.equal(moved.dockDist,1);
  assert.equal(moved.lang,'en');assert.equal(moved.winScale,1.1,'a deliberately adjusted window size is preserved');
  assert.equal(migrateComfort({comfortVersion:6,winScale:1}).winScale,COMFORT.windowScale,'old default-size installs become compact');
  assert.equal(migrateComfort({comfortVersion:6,winScale:.9}).winScale,.9,'customized sizes are preserved');
  moved.winDist=1.2;assert.equal(migrateComfort(moved).winDist,1.2);
  assert.equal(COMFORT.welcomeDistance,.42);
  assert.equal(COMFORT.dockDistance,.55,'default dock placement is slightly farther from the viewer');
});
