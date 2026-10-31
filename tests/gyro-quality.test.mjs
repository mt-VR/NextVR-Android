import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
import * as THREE from 'three';
const html=await readFile('web/index.html','utf8');

test('native head tracking keeps yaw across browser focus, source fallback and both landscape rotations',()=>{
  let now=1000,listener;
  const camera=new THREE.PerspectiveCamera();
  const ctx=vm.createContext({THREE,camera,performance:{now:()=>now},window:{orientation:90,addEventListener:(name,fn)=>listener=fn},rawSensorQuaternion:new THREE.Quaternion(),initialSensorInverse:new THREE.Quaternion(),isSensorCalibrated:false,isGyroActive:false,flowCorrectionQuat:new THREE.Quaternion(),worldLockEnabled:true,activePanelType:'google',shootTheDieFrameRef:null,updateHeadLockedPanel:()=>{throw Error('world-locked layout must not follow head');},console});
  vm.runInContext(html.slice(html.indexOf('// Rotation tracking must not depend'),html.indexOf('// 7. Arraste Touch/Mouse')),ctx);
  ctx.setupGyro();
  const send=(angle,screen=90)=>{const q=new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1),angle);ctx.window.__dixvrNativeOrientation(q.x,q.y,q.z,q.w,screen);};
  send(0); const baseline=camera.quaternion.clone();send(.4);
  assert.ok(camera.quaternion.angleTo(baseline)>.39,'yaw remains active with Google open');
  ctx.activePanelType='youtube';send(.8);
  assert.ok(camera.quaternion.angleTo(baseline)>.79,'opening another native app does not reset yaw');
  const before=camera.quaternion.clone();listener({alpha:100,beta:90,gamma:0});
  assert.ok(camera.quaternion.angleTo(before)<1e-7,'browser events cannot overwrite fresh native pose');
  now+=500;listener({alpha:100,beta:90,gamma:0});
  assert.ok(camera.quaternion.angleTo(before)<1e-7,'fallback switches source without jumping');
  listener({alpha:120,beta:90,gamma:0});assert.ok(camera.quaternion.angleTo(before)>.3);
  const fallback=camera.quaternion.clone();send(.9,270);
  assert.ok(camera.quaternion.angleTo(fallback)<1e-7,'native recovery preserves current heading');
  send(1.3,270);assert.ok(camera.quaternion.angleTo(fallback)>.39);
  const preResume=camera.quaternion.clone();
  ctx.window.__dixvrNativeOrientation(0,0,0,1,270,2);
  assert.ok(camera.quaternion.angleTo(preResume)<1e-7,'sensor re-registration preserves heading after returning from external app');
  assert.equal(ctx.worldLockEnabled,true);
});

test('Activity rotation listener is focus-independent, lifecycle-scoped and bounded to one JS delivery',async()=>{
  const java=await readFile('app/src/main/java/com/dixvr/app/DixVrActivity.java','utf8');
  assert.match(java,/implements SensorEventListener/);
  assert.match(java,/TYPE_GAME_ROTATION_VECTOR/);assert.match(java,/TYPE_ROTATION_VECTOR/);
  assert.match(java,/super.onResume\(\);\s*startOrientationTracking\(\)/);
  assert.match(java,/protected void onPause\(\) \{\s*stopOrientationTracking\(\)/);
  assert.match(java,/orientationManager.unregisterListener\(this\)/);
  assert.match(java,/mainWebView == null \|\| orientationInFlight/);
  assert.match(java,/if \(generation == orientationGeneration\) orientationInFlight = false/);
  const open=html.slice(html.indexOf('function openMultitaskWindow('),html.indexOf('function moveMultitaskWindowToSlot('));
  assert.doesNotMatch(open,/isSensorCalibrated\s*=|setWorldLock\(|camera.quaternion\./);
});

test('static shadows are cached, moving shadows refreshed at most 15 Hz and reused for both eyes',()=>{
  let now=0,calls=0;
  const renderer={shadowMap:{enabled:true},getPixelRatio:()=>1,getSize:v=>v.set(1000,600),setScissorTest(){},setViewport(){},setScissor(){},render(){calls++;}};
  const ctx=vm.createContext({THREE,performance:{now:()=>now},gameShadowFrames:new WeakMap(),adaptGameQuality(){},vrCardboardActive:true});
  vm.runInContext(html.slice(html.indexOf('function renderGameEyes('),html.indexOf('function animateKitchen(')),ctx);
  const camera=new THREE.PerspectiveCamera(),scene=new THREE.Scene();
  ctx.renderGameEyes(renderer,scene,camera);assert.equal(renderer.shadowMap.needsUpdate,true);assert.equal(calls,2);
  now=100;ctx.renderGameEyes(renderer,scene,camera);assert.equal(renderer.shadowMap.needsUpdate,false);
  renderer.__dixvrShadowsDirty=true;ctx.renderGameEyes(renderer,scene,camera);assert.equal(renderer.shadowMap.needsUpdate,true);
  now=120;renderer.__dixvrShadowsDirty=true;ctx.renderGameEyes(renderer,scene,camera);assert.equal(renderer.shadowMap.needsUpdate,false);
  now=180;ctx.renderGameEyes(renderer,scene,camera);assert.equal(renderer.shadowMap.needsUpdate,true);
});

test('panorama quality preserves received source bytes and avoids a fixed 30 Hz head-motion cap',async()=>{
  const manifest=JSON.parse(await readFile('web/panoramas/manifest.json','utf8'));
  for(const p of manifest)assert.equal(createHash('sha256').update(await readFile('web/panoramas/'+p.file)).digest('hex'),p.sha256);
  assert.equal(manifest.filter(p=>p.file.endsWith('.png')).length,2);
  assert.equal(manifest.filter(p=>p.file.endsWith('.webp')).length,3);
  assert.match(html,/panoramaRenderer.setPixelRatio\(Math.min\(window.devicePixelRatio\|\|1,1.5\)\)/);
  assert.match(html,/panoramaLastRotation.equals\(camera.quaternion\)/);
  assert.doesNotMatch(html,/now-lastPanoramaRender>=33/);
  assert.match(html,/handInferenceEMA\*1.5/);
});
