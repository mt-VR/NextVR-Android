import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFile} from 'node:fs/promises';
import * as THREE from 'three';
const html=await readFile('web/index.html','utf8');
const shooter=Buffer.from(html.match(/SHOOT_THE_DIE_HTML_B64\s*=\s*['"]([^'"]+)/)[1],'base64').toString();
const section=(source,a,b)=>source.slice(source.indexOf(a),source.indexOf(b,source.indexOf(a)));

test('ShootTheDie stereo derives both eyes from current pose at every yaw, not previous frame matrix',()=>{
  const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(75,1001/600,.1,1000),stereoCamera=new THREE.StereoCamera();
  scene.add(camera);camera.position.set(-30,1.6,-30);let renders=0;const viewports=[];
  const renderer={setScissorTest(){},setScissor(){},setViewport(...v){viewports.push(v);},render(s,eye){
    assert.equal(s.autoUpdate,false);renders++;
    const eyePosition=new THREE.Vector3().setFromMatrixPosition(eye.matrixWorld);assert.ok(eyePosition.distanceTo(camera.position)<.05);
    const straightAhead=new THREE.Vector3(0,0,-3).applyQuaternion(camera.quaternion).add(camera.position);
    eye.matrixWorldInverse.copy(eye.matrixWorld).invert();const projected=straightAhead.project(eye);
    assert.ok(Math.abs(projected.x)<.1&&Math.abs(projected.y)<.01&&projected.z<1,'scene is in both eye frusta after side/back/up/down turn');
  }};
  const ctx=vm.createContext({THREE,scene,camera,stereoCamera,renderer,window:{innerWidth:1001,innerHeight:600},cardboardMode:true});
  vm.runInContext(section(shooter,'function renderScene()', 'const gameQualityState'),ctx);
  for(const yaw of [0,.9,-.9,Math.PI,-Math.PI/2])for(const pitch of [0,.8,-.8]){
    camera.quaternion.setFromEuler(new THREE.Euler(pitch,yaw,0,'YXZ'));
    ctx.renderScene();assert.equal(scene.autoUpdate,true);
  }
  assert.equal(renders,30);assert.ok(viewports.some(v=>v[0]===500&&v[2]===501),'odd pixel width does not leave black seam');
  assert.match(shooter,/stereoCamera.aspect = 0.5;/);assert.doesNotMatch(shooter,/quaternion.slerp\(targetQuaternion, 0.08\)/);
});

test('main games update world transforms once for stereo and restore flags even if renderer fails',()=>{
  const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera();let updates=0,renders=0;
  const update=scene.updateMatrixWorld.bind(scene);scene.updateMatrixWorld=(...a)=>{updates++;return update(...a);};
  const renderer={shadowMap:{enabled:false},getSize:v=>v.set(1001,600),setScissorTest(){},setScissor(){},setViewport(){},render(){renders++;assert.equal(scene.autoUpdate,false);}};
  const ctx=vm.createContext({THREE,vrCardboardActive:true,adaptGameQuality(){},performance:{now:()=>0}});
  vm.runInContext(section(html,'function renderGameEyes(', 'function animateKitchen('),ctx);
  ctx.renderGameEyes(renderer,scene,camera);assert.equal(updates,1);assert.equal(renders,2);assert.equal(scene.autoUpdate,true);
  renderer.render=()=>{throw Error('context lost');};assert.throws(()=>ctx.renderGameEyes(renderer,scene,camera));assert.equal(scene.autoUpdate,true);
});

test('full-screen shooter is detached from transformed CSS3D ancestry',()=>{
  let appended=0;const host={parentElement:{}};const body={contains:()=>true,appendChild(node){assert.equal(node,host);appended++;node.parentElement=this;}};
  const ctx=vm.createContext({shootTheDieHostRef:host,document:{body}});
  vm.runInContext(section(html,'function getShootTheDieHost(', 'function closeShootTheDieGame('),ctx);
  assert.equal(ctx.getShootTheDieHost(),host);assert.equal(appended,1);ctx.getShootTheDieHost();assert.equal(appended,1);
  assert.match(html,/#shoot-the-die-host.active\{[^}]*transform:none!important/);
});

test('small reference-inspired Poolrooms tiles keep a bounded shared texture density',()=>{
  const calls=[];const ctx=vm.createContext({makeCanvasTexture:(...args)=>{calls.push(args);return {};}});
  vm.runInContext(section(html,'function createPoolTileTexture(', 'function createDreamcoreWaterTexture('),ctx);
  ctx.createPoolTileTexture(false);ctx.createPoolTileTexture(true);
  assert.equal(calls.length,2);for(const [size,draw,rx,ry] of calls){assert.equal(size,256);assert.equal(rx,1.5);assert.equal(ry,1.5);assert.equal(typeof draw,'function');}
});

test('tap-to-start shooter receives VR and pose again after bridges exist, not just premature iframe onload',()=>{
  let listener;const messages=[],target={postMessage:message=>messages.push(message)};
  const ctx=vm.createContext({activePanelType:null,shootTheDieFrameRef:{contentWindow:target},window:{addEventListener:(name,fn)=>listener=fn},vrCardboardActive:true,camera:new THREE.PerspectiveCamera()});
  vm.runInContext(section(html,'let shootHandInFlight=null','// Processamento com correspondência'),ctx);
  listener({source:{},data:{type:'dixvr-shoot-ready'}});assert.equal(messages.length,0);
  listener({source:target,data:{type:'dixvr-shoot-ready'}});assert.equal(messages[0].type,'dixvr-shoot-vr');assert.equal(messages[0].enabled,true);assert.equal(messages[1].type,'dixvr-shoot-gyro');
  assert.ok(shooter.indexOf("parent.postMessage({type:'dixvr-shoot-ready'}")>shooter.lastIndexOf('initHandTracking();'));
});
