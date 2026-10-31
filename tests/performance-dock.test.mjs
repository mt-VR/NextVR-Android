import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import * as THREEBase from 'three';

const html = await readFile('web/index.html', 'utf8');
const extract = (start, end) => html.slice(html.indexOf(start), html.indexOf(end, html.indexOf(start)));
const rayCode = extract('function clipHandRayToDock(', 'function processPinchClick(');
const qualityCode = 'const gameQualityState = new WeakMap();\n' + extract('function adaptGameQuality(', 'function renderGameEyes(');

test('hand ray meets the transformed Dock plane and uses its projected contact point', () => {
  const THREE = THREEBase;
  const camera = new THREE.PerspectiveCamera(55, 1000/600, .1, 100);
  camera.updateMatrixWorld(true);
  const group3D = new THREE.Object3D();
  group3D.position.set(0,-.5,-1.55); group3D.rotation.set(-.14,.12,0);
  group3D.scale.setScalar(.0024); group3D.updateMatrixWorld(true);
  const root = { offsetWidth:600, offsetHeight:120 };
  const dock = { offsetLeft:10, offsetTop:45, offsetWidth:580, offsetHeight:70, offsetParent:root };
  root.querySelector = () => dock;
  const originScreen = { x:500, y:590 };
  const origin = new THREE.Vector3(0,1-originScreen.y/600*2,.5).unproject(camera).normalize().multiplyScalar(.35);
  const center = group3D.localToWorld(new THREE.Vector3(0,-20,0));
  const direction = center.clone().sub(origin).normalize();
  const od = origin.dot(direction);
  const distance = -od + Math.sqrt(od*od + 16-origin.lengthSq());
  const far = origin.clone().addScaledVector(direction,distance).project(camera);
  const aim = {originX:500,originY:590,x:(far.x+1)*500,y:(1-far.y)*300};
  const ctx = vm.createContext({THREE,group3D,camera,windowGroupElement:root});
  vm.runInContext(rayCode,ctx);
  const hit = ctx.clipHandRayToDock(aim,1000,600);
  const projected = center.clone().project(camera);
  assert.equal(hit.onDock,true);
  assert.ok(Math.abs(hit.x-(projected.x+1)*500)<1e-7);
  assert.ok(Math.abs(hit.y-(1-projected.y)*300)<1e-7);
  assert.ok(Math.hypot(hit.x-500,hit.y-590)<Math.hypot(aim.x-500,aim.y-590), 'beam is shorter');
  const miss = {...aim,x:990,y:10};
  assert.equal(ctx.clipHandRayToDock(miss,1000,600),miss);
  group3D.visible=false;
  assert.equal(ctx.clipHandRayToDock(aim,1000,600),aim);
  assert.match(html,/const aim = clipHandRayToDock\(getStablePinchRay/);
  assert.match(html,/syncNativeHandCursor\(aim.x, aim.y, dwell.progress, !aim.onDock\)/);
});

test('adaptive resolution responds to sustained slow frames, is bounded and recovers without exceeding initial quality', () => {
  const ctx=vm.createContext({}); vm.runInContext(qualityCode,ctx);
  let ratio=1, now=0, changes=0;
  const renderer={getPixelRatio:()=>ratio,setPixelRatio:v=>{ratio=v;changes++;}};
  ctx.adaptGameQuality(renderer,now);
  for(let i=0;i<400;i++) ctx.adaptGameQuality(renderer,now+=40);
  assert.equal(ratio,.6); assert.ok(changes>0);
  for(let i=0;i<4000;i++) ctx.adaptGameQuality(renderer,now+=16);
  assert.equal(ratio,1);
  ctx.adaptGameQuality(renderer,now+=20000);
  assert.equal(ratio,1,'background pause alone does not lower quality');
  for(let i=0;i<40;i++) ctx.adaptGameQuality(renderer,now+=300);
  assert.ok(ratio<1,'severe jank is not mistaken for a background pause');
});

test('ShootTheDie uses the same adaptive quality controller as main games', () => {
  const encoded=html.match(/SHOOT_THE_DIE_HTML_B64\s*=\s*['"]([^'"]+)/)[1];
  const embedded=Buffer.from(encoded,'base64').toString('utf8');
  const helper=extract('function adaptGameQuality(', 'function renderGameEyes(').trim();
  assert.ok(embedded.includes(helper));
  assert.match(embedded,/adaptGameQuality\(renderer,/);
});

test('right-eye mirror serializes only dirty content, keeps full-rate pose and disconnects removed observers', () => {
  let now=200, reads=0, observer;
  const element={className:'panel',style:{display:''},cloneNode:()=>({style:{},removeAttribute(){},setAttribute(){},querySelectorAll:()=>[]}),querySelectorAll:()=>[]};
  Object.defineProperty(element,'innerHTML',{get(){reads++;return '<span>content</span>';}});
  class Observer {constructor(cb){this.cb=cb;observer=this;}observe(){}disconnect(){this.disconnected=true;}}
  class CSS3DObject extends THREEBase.Object3D {constructor(el){super();this.element=el;this.isCSS3DObject=true;}}
  const obj=new CSS3DObject(element), scene=new THREEBase.Scene(), right=new THREEBase.Scene(); scene.add(obj);
  const clones=new Map();
  const ctx=vm.createContext({THREE:{CSS3DObject},scene,vrRightScene:right,vrCardboardActive:true,vrMirrorClones:clones,performance:{now:()=>now},MutationObserver:Observer});
  vm.runInContext(extract('function syncVRMirrorClones(', 'let workspaceYaw ='),ctx);
  ctx.syncVRMirrorClones(); assert.equal(reads,1);
  obj.position.x=2;
  for(let i=0;i<90;i++){now+=17;ctx.syncVRMirrorClones();}
  assert.equal(reads,1); assert.equal(clones.get(obj).position.x,2);
  observer.cb([{target:element,attributeName:'style'}]); now+=100;ctx.syncVRMirrorClones(); assert.equal(reads,1);
  observer.cb([{target:{},attributeName:'class'}]); ctx.syncVRMirrorClones(); assert.equal(reads,2);
  observer.cb([{target:{},attributeName:'class'}]);now+=30;ctx.syncVRMirrorClones();assert.equal(reads,2);
  now+=80;ctx.syncVRMirrorClones();assert.equal(reads,3);
  scene.remove(obj);ctx.syncVRMirrorClones();assert.equal(observer.disconnected,true);assert.equal(clones.size,0);
  assert.match(html,/vrMirrorClones.forEach\(clone=>\{clone.userData.observer\?\.disconnect\(\)/);
});
