import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFile} from 'node:fs/promises';
const html=await readFile('web/index.html','utf8');

test('isolated detection losses keep the same visual hand, disable gestures, and recover without a flash',()=>{
  let now=100;
  const ctx=vm.createContext({performance:{now:()=>now},videoElement:{videoWidth:960,videoHeight:540},window:{innerWidth:1000,innerHeight:600},vrCardboardActive:false,
    handFramePump:{started:20},activeHands:{Left:null,Right:null},handIdentityNextId:1,pinchRayState:{},handGrabState:{},pinchClickState:{},resetPanelScrollGesture(){},syncNativeHandCursor(){},forwardShootHands(){}});
  vm.runInContext(html.slice(html.indexOf('const HAND_VISUAL_GRACE_MS='),html.indexOf('// 5. Configurar Hand Tracking')),ctx);
  vm.runInContext(html.slice(html.indexOf('function onHandResults(results)'),html.indexOf('// Renderização Fluida')),ctx);
  const detected={multiHandLandmarks:[Array.from({length:21},(_,i)=>({x:.3+i*.002,y:.4+i*.002,z:0}))],multiHandedness:[{label:'Left'}]};
  ctx.onHandResults(detected);const hand=ctx.activeHands.Left;assert.ok(hand);assert.equal(ctx.handInputFresh(hand,now),true);
  now=230;ctx.handFramePump.started=150;ctx.onHandResults({multiHandLandmarks:[]});ctx.clearTrackedHands(now);
  assert.equal(ctx.activeHands.Left,hand,'single missed result must not destroy visual pose');assert.equal(ctx.handInputFresh(hand,now),false);
  now=280;ctx.handFramePump.started=200;ctx.onHandResults(detected);ctx.clearTrackedHands(now);
  assert.equal(ctx.activeHands.Left,hand,'reacquired hand keeps identity and render points');assert.equal(ctx.handInputFresh(hand,now),true);
  now=600;ctx.clearTrackedHands(now);assert.equal(ctx.activeHands.Left,hand,'short visual grace is not an input queue');assert.equal(ctx.handInputFresh(hand,now),false);
  now=800;ctx.clearTrackedHands(now);assert.equal(ctx.activeHands.Left,null,'genuinely missing hand eventually disappears');
});

test('resize invalidates pending inference without clearing visible hands and stale hands cannot interact',()=>{
  assert.match(html,/window.addEventListener\('resize',\(\)=>\{handFramePump.reset\(\);for\(const side of \['Left','Right'\]\)markHandMissing\(side\);\}\)/);
  assert.match(html,/if\(!handInputFresh\(hand\)\)return;\s*const indexTip/);
  assert.match(html,/hand.lastSeen=now;hand.sampledAt=sampledAt;hand.missingFrames=0/);
});
