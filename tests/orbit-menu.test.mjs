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
  popup.offsetTop=0;
  const sub={hidden:false,offsetLeft:243,offsetTop:0,offsetWidth:186,offsetHeight:150};
  popup.querySelectorAll=()=>[sub];
  const childTarget=group3D.localToWorld(new THREE.Vector3(340,70,0));
  const childDirection=childTarget.clone().sub(origin).normalize(),childOd=origin.dot(childDirection);
  const childFar=origin.clone().addScaledVector(childDirection,-childOd+Math.sqrt(childOd*childOd+16-origin.lengthSq())).project(camera);
  const childAim={originX:500,originY:570,x:(childFar.x+1)*500,y:(1-childFar.y)*300};
  assert.equal(ctx.clipHandRayToDock(childAim,1000,600).onDock,true);
  sub.hidden=true;assert.equal(ctx.clipHandRayToDock(childAim,1000,600),childAim);
  sub.hidden=false;popup.hidden=true;assert.equal(ctx.clipHandRayToDock(childAim,1000,600),childAim);

});

test('neon silhouette merges a filled palm and five tapered digits, then removes mask interior from glow',()=>{
  const operations=[];
  const canvas=new Proxy({}, {set(o,k,v){o[k]=v;return true;},get(o,k){return k in o?o[k]:(...args)=>operations.push([k,...args]);}});
  const points=Array.from({length:21},(_,i)=>({x:i*4,y:100-i*3}));
  const ctx=vm.createContext({});vm.runInContext(extract('function drawHandSilhouette(', 'function clipHandRayToDock('),ctx);
  ctx.drawHandSilhouette(canvas,points,100);
  assert.equal(operations.filter(o=>o[0]==='fill').length,6,'filled palm and five closed digits');
  assert.equal(operations.filter(o=>o[0]==='closePath').length,6);
  assert.equal(operations.filter(o=>o[0]==='stroke').length,0,'no bone strokes or rounded skeleton capsules');
  assert.ok(operations.some(o=>o[0]==='quadraticCurveTo'));
  const aura=extract("} else if (handVisualStyle === 'aura')", "} else if (handVisualStyle === '3d')");
  assert.doesNotMatch(aura,/drawAuraSkeleton/);
  assert.match(aura,/globalCompositeOperation='destination-in'/);
  assert.match(aura,/shadowBlur=0/);
  assert.match(aura,/globalCompositeOperation='destination-out'/);
  assert.match(aura,/drawImage\(auraMaskCanvas/);assert.match(aura,/drawImage\(auraHandCanvas,sx,sy,sw,sh,sx,sy,sw,sh\)/);
});

test('library/store filters really hide unrelated cards, keep selection and update ray/mirror caches',()=>{
  const classes=()=>({toggle(name,value){this[name]=value;}});
  for(const kind of ['library','store']){
    const buttons=['all','web','games'].map(filter=>({dataset:{filter},classList:classes(),setAttribute(k,v){this[k]=v;}}));
    const cards=[{id:'library-kitchen-app'},{id:'library-google-app'},{id:'store-dreamcore-card'},{id:'library-wikipedia-app'}];
    const root={dataset:{},querySelectorAll:s=>s==='.catalog-filter'?buttons:cards};let refresh=0;
    const ctx=vm.createContext({uiQuery:()=>root,updateButtonCache:()=>refresh++,syncVRMirrorClones:()=>refresh++});
    vm.runInContext(extract('function applyCatalogFilter(', 'function refreshStore('),ctx);
    ctx.applyCatalogFilter(kind,'games');assert.deepEqual(cards.map(c=>c.hidden),[false,true,false,true]);
    assert.equal(root.dataset.catalogFilter,'games');assert.equal(buttons[2]['aria-pressed'],'true');
    ctx.applyCatalogFilter(kind,'web');assert.deepEqual(cards.map(c=>c.hidden),[true,false,true,false]);
    ctx.applyCatalogFilter(kind,'all');assert.ok(cards.every(c=>!c.hidden));assert.equal(refresh,6);
  }
  assert.match(html,/grid-template-columns:repeat\(4,minmax\(0,1fr\)\)/);
  assert.match(html,/store-feature/);
});

test('requested fine camera-visible hand becomes default once; later explicit styles persist',()=>{
  const code=extract("let handVisualStyle = 'aura';",'let experimentGameActive');
  const saved=new Map([['dixVR_hand_visual_style','ghost']]);
  const localStorage={getItem:k=>saved.get(k),setItem:(k,v)=>saved.set(k,v)};
  const run=()=>{const ctx=vm.createContext({localStorage});vm.runInContext(code+';this.style=handVisualStyle;',ctx);return ctx.style;};
  assert.equal(run(),'aura');assert.equal(saved.get('dixVR_hand_visual_style'),'aura');
  saved.set('dixVR_hand_visual_style','3d');assert.equal(run(),'3d');
});

test('cascading menu shows one child list and explicitly closes siblings without changing the anchor',()=>{
  const keys=['library','store','camera','hand-aura'];
  const subs=keys.map(key=>({dataset:{orbitSubmenu:key},hidden:true}));
  const branches=keys.map(key=>({dataset:{orbitBranch:key},setAttribute(k,v){this[k]=v;}}));
  const root={querySelectorAll:s=>s==='.orbit-submenu'?subs:branches};let refreshed=0;
  const ctx=vm.createContext({windowGroupElement:root,updateButtonCache:()=>refreshed++,syncVRMirrorClones:()=>refreshed++});
  vm.runInContext(extract('function setOrbitSubmenu(', 'function setOrbitMenu('),ctx);
  for(const key of keys){ctx.setOrbitSubmenu(key);assert.equal(subs.filter(s=>!s.hidden).length,1);assert.equal(subs.find(s=>!s.hidden).dataset.orbitSubmenu,key);assert.equal(branches.filter(b=>b['aria-expanded']==='true').length,1);}
  ctx.setOrbitSubmenu(null);assert.ok(subs.every(s=>s.hidden));assert.equal(refreshed,10);
  assert.match(html,/\.orbit-branch, .orbit-leaf,/);
  assert.match(html,/if\(type==='catalog'\)\{openMultitaskWindow\(value\);applyCatalogFilter\(value,filter\);\}/);
});

test('adaptive hand filter suppresses stationary jitter but follows fast motion without frame-based extra lag',()=>{
  const ctx=vm.createContext({});vm.runInContext(extract('function filterHandLandmark(', 'function onHandResults('),ctx);
  const p={x:100,y:200,targetX:100,targetY:200,rawX:100,rawY:200,filteredAt:0};
  let energy=0;
  for(let i=1;i<=120;i++){ctx.filterHandLandmark(p,100+(i%2?1:-1),200,i*16.67);energy+=(p.x-100)**2;assert.equal(p.x,p.targetX);}
  assert.ok(Math.sqrt(energy/120)<.45,'less than half the raw jitter');
  ctx.filterHandLandmark(p,200,200,121*16.67);assert.ok(Math.abs(p.x-200)<2,'no long filter tail during quick translation');
  ctx.filterHandLandmark(p,260,220,122*16.67,true);assert.equal(p.x,260,'reacquisition snaps instead of drawing a travelling ghost');
  const before={...p};ctx.filterHandLandmark(p,NaN,Infinity,123*16.67);assert.deepEqual(p,before);
  assert.doesNotMatch(html,/pt.x \+= \(pt.targetX-pt.x\)\*0.72/);
  assert.match(html,/handsCtx.globalAlpha=\.30/);assert.match(html,/auraMaskCtx.fillStyle='#15202b'/);
});
