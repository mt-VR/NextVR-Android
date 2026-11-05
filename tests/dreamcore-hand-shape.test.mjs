import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFile} from 'node:fs/promises';
import * as THREE from 'three';
const html=await readFile('web/index.html','utf8');
const extract=(a,b)=>html.slice(html.indexOf(a),html.indexOf(b,html.indexOf(a)));

test('all fingertip caps are true semicircles ending at TIP; finger roots overlap the filled palm',()=>{
  const points=[[250,450],[190,390],[160,345],[120,305],[90,300],[200,290],[185,210],[175,150],[170,115],[250,280],[255,180],[255,125],[255,90],[290,300],[320,215],[335,160],[340,125],[330,340],[375,290],[395,245],[405,220]].map(([x,y])=>({x,y}));
  const arcs=[],starts=[];let fills=0;
  const ctx={beginPath(){},moveTo(x,y){starts.push({x,y});},lineTo(){},quadraticCurveTo(){},arc(...args){arcs.push(args);},closePath(){},fill(){fills++;}};
  const sandbox=vm.createContext({});vm.runInContext(extract('function drawHandSilhouette(', 'function clipHandRayToDock('),sandbox);
  sandbox.drawHandSilhouette(ctx,points,170);assert.equal(fills,6);assert.equal(arcs.length,5);
  assert.ok(arcs[1][2]>=11 && arcs[1][2]<16,'index pad is fuller than the old thin cap');
  for(let i=0;i<5;i++){
    const [x,y,r,start,end,anticlockwise]=arcs[i],tip=points[[4,8,12,16,20][i]];
    assert.ok(r>0);assert.ok(Math.abs(start-end-Math.PI)<1e-9);assert.equal(anticlockwise,true);
    const mid=start-Math.PI/2;
    assert.ok(Math.hypot(x+r*Math.cos(mid)-tip.x,y+r*Math.sin(mid)-tip.y)<1e-8,'round cap touches TIP instead of a squared-off chord');
  }
  assert.ok(starts[2].y>points[5].y+20,'index root is inside palm, not closed on exposed MCP');
});

test('Poolrooms uses real shared tile maps, fixed world UV density, transparent textured water and one shadow light',()=>{
  const texture=()=>new THREE.Texture();
  const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera();
  const renderer={__dixvrShadowsDirty:false};
  const ctx=vm.createContext({THREE,tileTexture:texture,makeCanvasTexture:texture,dreamcoreScene:scene,dreamcoreCamera:camera,dreamcoreRenderer:renderer,dreamcoreWaterZones:[],dreamcorePortals:[],dreamcoreWorldRoot:null});
  vm.runInContext(extract('function addDreamcoreWall(', 'function setDreamcoreLevelLabel('),ctx);
  ctx.buildDreamcorePoolLevel();ctx.configureDreamcoreShadows();
  const lights=[];scene.traverse(o=>{if(o.isLight)lights.push(o);});
  assert.equal(lights.filter(o=>o.isPointLight).length,0,'no repeated per-pixel pool point lights');
  const shadow=lights.find(o=>o.castShadow);assert.ok(shadow?.isDirectionalLight);assert.equal(shadow.shadow.mapSize.x,1024);
  const meshes=[];scene.traverse(o=>{if(o.isMesh)meshes.push(o);});
  assert.ok(meshes.some(o=>o.castShadow&&o.receiveShadow));
  const waters=meshes.filter(o=>o.userData.water);assert.equal(waters.length,7);
  assert.ok(waters.every(o=>o.material.map&&o.material.transparent&&o.material.opacity<.6&&!o.material.depthWrite&&o.receiveShadow));
  const box=ctx.setDreamcoreUV(new THREE.BoxGeometry(100,4,10));
  const values=Array.from(box.attributes.uv.array);assert.ok(Math.max(...values)>=50,'tiles repeat with meters, not one stretched image per huge wall');
  renderer.__dixvrShadowsDirty=false;ctx.updateDreamcoreShadowRegion();assert.equal(renderer.__dixvrShadowsDirty,false);
  camera.position.x=13;ctx.updateDreamcoreShadowRegion();assert.equal(renderer.__dixvrShadowsDirty,true,'refresh shadow only on moving to another region');
});

test('Dreamcore level cleanup disposes owned GPU resources once but retains shared tiles and previews',()=>{
  const scene=new THREE.Scene(),geometry=new THREE.BoxGeometry(),sharedMap=new THREE.Texture(),preview=new THREE.Texture();
  const shared=new THREE.MeshStandardMaterial({map:sharedMap});const unique=new THREE.MeshBasicMaterial({map:preview});
  scene.add(new THREE.Mesh(geometry,shared),new THREE.Mesh(geometry,unique));let disposedGeo=0,disposedUnique=0,disposedShared=0,disposedPreview=0;
  geometry.addEventListener('dispose',()=>disposedGeo++);unique.addEventListener('dispose',()=>disposedUnique++);shared.addEventListener('dispose',()=>disposedShared++);preview.addEventListener('dispose',()=>disposedPreview++);
  const ctx=vm.createContext({dreamcoreScene:scene,poolShared:{wall:shared},DREAMCORE_PREVIEWS:{pool:preview},dreamcoreWorldRoot:{},dreamcoreShadowLight:{},dreamcorePortals:[],dreamcoreWaterZones:[]});
  vm.runInContext(extract('function removeDreamcoreLevelRoot(', 'function batchStaticWorld('),ctx);ctx.removeDreamcoreLevelRoot();
  assert.equal(disposedGeo,1);assert.equal(disposedUnique,1);assert.equal(disposedShared,0);assert.equal(disposedPreview,0);assert.equal(scene.children.length,0);
  const poolCode=extract('function buildDreamcorePoolLevel(', 'function setDreamcoreLevelLabel(');
  assert.doesNotMatch(poolCode,/addEventListener\('resize'/,'pool entry does not accumulate resize listeners');
});
