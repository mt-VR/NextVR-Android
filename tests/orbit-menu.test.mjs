import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFile} from 'node:fs/promises';
import * as THREE from 'three';
const html=await readFile('web/index.html','utf8');
const extract=(a,b)=>html.slice(html.indexOf(a),html.indexOf(b,html.indexOf(a)));

test('circular menu selects one flyout, closes it, refreshes hit targets and both eyes without moving workspace',()=>{
  const keys=['apps','scene','windows','hands','system'];
  const tabs=keys.map(key=>({dataset:{orbitTab:key},setAttribute(k,v){this[k]=v;}}));
  const panes=keys.map(key=>({dataset:{orbitPane:key},hidden:true}));
  const popover={hidden:true,offsetHeight:160,style:{}};let caches=0,mirrors=0;
  const root={querySelector:()=>popover,querySelectorAll:s=>s==='.orbit-tab'?tabs:panes};
  const ctx=vm.createContext({windowGroupElement:root,updateButtonCache(){caches++;},syncVRMirrorClones(force){assert.equal(force,true);mirrors++;}});
  vm.runInContext(extract('function setOrbitMenu(', 'function setupDockActions('),ctx);
  for(const key of keys){ctx.setOrbitMenu(key);assert.equal(popover.hidden,false);assert.equal(panes.filter(p=>!p.hidden).length,1);assert.equal(panes.find(p=>!p.hidden).dataset.orbitPane,key);assert.equal(tabs.filter(t=>t['aria-expanded']==='true').length,1);assert.ok(parseInt(popover.style.top)>=0);assert.ok(parseInt(popover.style.top)<=110);}
  ctx.setOrbitMenu(null);assert.equal(popover.hidden,true);assert.ok(panes.every(p=>p.hidden));assert.ok(tabs.every(t=>t['aria-expanded']==='false'));assert.equal(caches,6);assert.equal(mirrors,6);
  assert.match(html,/INTERACTIVE_UI_SELECTOR = '.orbit-tab,/);
  assert.match(html,/elements.filter\(el => !el.getClientRects \|\| el.getClientRects\(\).length > 0\)/);
});

test('ray contact extends to visible adjacent options, not hidden or out-of-bounds panels',()=>{
  const camera=new THREE.PerspectiveCamera(55,1000/600,.1,100);camera.updateMatrixWorld(true);
  const group3D=new THREE.Object3D();group3D.position.set(0,0,-1.55);group3D.scale.setScalar(.0024);group3D.updateMatrixWorld(true);
  const root={offsetWidth:600,offsetHeight:270};
  const popup={hidden:false,offsetLeft:82,offsetTop:0,offsetWidth:234,offsetHeight:150};
  const dock={offsetLeft:268,offsetTop:0,offsetWidth:64,offsetHeight:270,offsetParent:root,querySelector:()=>popup};root.querySelector=()=>dock;
  const ctx=vm.createContext({THREE,camera,group3D,windowGroupElement:root});vm.runInContext(extract('function clipHandRayToDock(', 'function processPinchClick('),ctx);
  const center=group3D.localToWorld(new THREE.Vector3(150,70,0));
  const origin=new THREE.Vector3(0,-.9,.5).unproject(camera).normalize().multiplyScalar(.35);
  const direction=center.clone().sub(origin).normalize();const od=origin.dot(direction);
  const far=origin.clone().addScaledVector(direction,-od+Math.sqrt(od*od+16-origin.lengthSq())).project(camera);
  const aim={originX:500,originY:570,x:(far.x+1)*500,y:(1-far.y)*300};
  assert.equal(ctx.clipHandRayToDock(aim,1000,600).onDock,true);
  popup.hidden=true;assert.equal(ctx.clipHandRayToDock(aim,1000,600),aim);
  popup.hidden=false;popup.offsetTop=180;assert.equal(ctx.clipHandRayToDock(aim,1000,600),aim);
});

test('neon silhouette merges a filled palm and five tapered digits, then removes mask interior from glow',()=>{
  const operations=[];
  const canvas=new Proxy({}, {set(o,k,v){o[k]=v;return true;},get(o,k){return k in o?o[k]:(...args)=>operations.push([k,...args]);}});
  const points=Array.from({length:21},(_,i)=>({x:i*4,y:100-i*3}));
  const ctx=vm.createContext({});vm.runInContext(extract('function drawHandSilhouette(', 'function clipHandRayToDock('),ctx);
  ctx.drawHandSilhouette(canvas,points,100);
  assert.equal(operations.filter(o=>o[0]==='fill').length,1,'filled, closed palm');
  assert.equal(operations.filter(o=>o[0]==='closePath').length,1);
  assert.equal(operations.filter(o=>o[0]==='stroke').length,16,'thumb and all four fingers join the mask');
  assert.equal(canvas.lineCap,'round');
  const aura=extract("} else if (handVisualStyle === 'aura')", "} else if (handVisualStyle === '3d')");
  assert.doesNotMatch(aura,/drawAuraSkeleton|quadraticCurveTo/);
  assert.match(aura,/globalCompositeOperation='destination-out'/);
  assert.match(aura,/drawImage\(auraMaskCanvas/);assert.match(aura,/drawImage\(auraHandCanvas,sx,sy,sw,sh,sx,sy,sw,sh\)/);
});
