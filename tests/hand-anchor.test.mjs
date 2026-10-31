import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import * as THREE from 'three';
const html=await readFile('web/index.html','utf8');
const pumpCode=html.slice(html.indexOf('class LatestHandFramePump'),html.indexOf('let handFramePump=null;'))+'\nthis.Pump=LatestHandFramePump;';

test('hand inference never queues or duplicates video frames and rejects stale/reset results',async()=>{
  let now=0,captures=0,sends=0,release;
  const ctx=vm.createContext({ANALYSIS_INTERVAL:1000/60});vm.runInContext(pumpCode,ctx);
  const pump=new ctx.Pump({now:()=>now,capture:()=>captures++,send:()=>{sends++;return new Promise(resolve=>release=resolve);}});
  const first=pump.sample(1);assert.equal(pump.acceptResult(),true);
  for(let i=2;i<50;i++){now+=5;await pump.sample(i);}
  assert.equal(captures,1);assert.equal(sends,1);assert.equal(pump.acceptResult(),false);
  release();await first;
  now+=100;await pump.sample(1);assert.equal(sends,1,'same video frame not sent twice');
  const second=pump.sample(50);assert.equal(sends,2);pump.reset();assert.equal(pump.acceptResult(),false);
  await pump.sample(51);assert.equal(sends,2,'reset cannot overlap a physical inference');release();await second;
  now+=100;const third=pump.sample(52);assert.equal(sends,3);assert.equal(pump.acceptResult(),true);release();await third;
});

test('failed hand capture releases the slot instead of permanently blocking tracking',async()=>{
  const ctx=vm.createContext({ANALYSIS_INTERVAL:1000/60});vm.runInContext(pumpCode,ctx);
  const pump=new ctx.Pump({now:()=>0,capture:()=>{throw Error('camera unavailable');},send:()=>{throw Error('must not send');}});
  await pump.sample(1);assert.equal(pump.busy,false);
});

test('world-space dock stays fixed while head rotates, including unlocked mode; recenter levels and locks',()=>{
  const group3D=new THREE.Object3D(),camera=new THREE.PerspectiveCamera();
  group3D.position.set(1,-.8,-2);group3D.rotation.set(.2,.3,.1);
  const origin=new THREE.Vector3();let layouts=0,captures=0;
  const ctx=vm.createContext({THREE,group3D,camera,worldLockEnabled:true,workspaceDockY:-.8,workspacePitch:0,DOCK_DIST:1.55,DOCK_Y:-.68,draggingPanelWithHand:true,googlePanelDragging:true,youtubePanelDragging:true,multitaskHandDrag:{library:{}},workspaceOrigin:origin,multitaskDetached:new Set(),layoutMultitaskArc(){layouts++;group3D.rotation.set(0,ctx.workspaceYaw+Math.PI,0);group3D.position.set(Math.sin(ctx.workspaceYaw)*1.55,-.68,Math.cos(ctx.workspaceYaw)*1.55);},captureWorldLockPose:()=>captures++,updateButtonCache(){},updateWorldLockButton(){},resetOpticalFlowDrift(){}});
  vm.runInContext(html.slice(html.indexOf('function updateHeadLockedPanel(){'),html.indexOf('function enterCardboardVR()')),ctx);
  for(const locked of [true,false]){ctx.worldLockEnabled=locked;for(let i=0;i<20;i++){camera.rotation.y=i*.1;ctx.updateHeadLockedPanel();}}
  assert.equal(layouts,0);assert.deepEqual(group3D.position.toArray(),[1,-.8,-2]);
  vm.runInContext(html.slice(html.indexOf('function alignPanelInFront('),html.indexOf('class LatestHandFramePump')),ctx);
  vm.runInContext(html.slice(html.indexOf('function getWorkspaceTilt()'),html.indexOf('function workspaceToWorld(')),ctx);
  ctx.recenterWorkspace();assert.equal(ctx.worldLockEnabled,true);assert.equal(ctx.workspaceDockY,-.68);
  assert.equal(group3D.rotation.x,0);assert.equal(group3D.rotation.z,0);assert.ok(captures>0);
  const saved=group3D.position.clone();camera.rotation.y+=.5;ctx.updateHeadLockedPanel();assert.ok(group3D.position.equals(saved));
  assert.match(html,/action === 'recenter'\) \{ recenterWorkspace/);
  assert.match(html,/!experimentGameActive&&!worldLockEnabled&&handleElement/);
  const startup=html.slice(html.indexOf("startBtn.addEventListener('click'"));
  assert.doesNotMatch(startup,/initOpticalFlow\(\)|startWebXRSpatialTracking\(\)/);
});

test('hand overlay has no 30Hz cap, and bottom bars share existing drag handlers',()=>{
  const overlay=html.slice(html.indexOf('function renderHandOverlay(now)'),html.indexOf('function animate(now='));
  assert.doesNotMatch(overlay,/1000\/30/);assert.match(overlay,/if\(!visible && !hadHandOverlay\)return/);
  assert.match(html,/bottom:-30px; transform:translateX\(-50%\)/);
  assert.match(html,/width:130px; height:12px/);
  assert.match(html,/drawImage\(auraHandCanvas,sx,sy,sw,sh,sx,sy,sw,sh\)/);
});

test('ShootTheDie hand IPC allows one outstanding frame and ACKs stale packets',()=>{
  let listener,sent=0;const target={postMessage(){sent++;}};
  const ctx=vm.createContext({activePanelType:'shoot-the-die',shootTheDieFrameRef:{contentWindow:target},window:{addEventListener:(type,fn)=>listener=fn}});
  vm.runInContext(html.slice(html.indexOf('let shootHandInFlight=null'),html.indexOf('// Processamento com correspondência')),ctx);
  ctx.forwardShootHands({});ctx.forwardShootHands({});assert.equal(sent,1);
  listener({source:{},data:{type:'dixvr-shoot-hand-ack',sequence:1}});ctx.forwardShootHands({});assert.equal(sent,1);
  listener({source:target,data:{type:'dixvr-shoot-hand-ack',sequence:1}});ctx.forwardShootHands({});assert.equal(sent,2);
  const embedded=Buffer.from(html.match(/SHOOT_THE_DIE_HTML_B64\s*=\s*['"]([^'"]+)/)[1],'base64').toString();
  assert.match(embedded,/Date.now\(\)-d.capturedAt<=200/);assert.match(embedded,/finally \{ parent.postMessage/);
});

test('held visual hands expire after bounded dropout grace even if no more results arrive',()=>{
  const activeHands={Left:{lastSeen:0},Right:{lastSeen:10}};let hidden=0;
  const ctx=vm.createContext({activeHands,pinchRayState:{},handGrabState:{Left:true,Right:true},pinchClickState:{Left:true,Right:true},resetPanelScrollGesture(){},HAND_VISUAL_GRACE_MS:450,syncNativeHandCursor:()=>hidden++});
  vm.runInContext(html.slice(html.indexOf('function clearTrackedHands('),html.indexOf('// 5. Configurar Hand Tracking')),ctx);
  ctx.clearTrackedHands(150);assert.ok(activeHands.Left);assert.ok(activeHands.Right);
  ctx.clearTrackedHands(500);assert.equal(activeHands.Left,null);assert.equal(activeHands.Right,null);assert.equal(hidden,1);
  ctx.clearTrackedHands(600);assert.equal(hidden,1);
});
