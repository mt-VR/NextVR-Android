import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import * as BaseThree from 'three';
const html=await readFile('web/index.html','utf8');
const batchCode=html.slice(html.indexOf('function batchStaticWorld('),html.indexOf('function setDreamcoreLevel('));
async function harness(){
  const THREE={...BaseThree};const ctx=vm.createContext({THREE});
  vm.runInContext(await readFile('node_modules/three/examples/js/utils/BufferGeometryUtils.js','utf8'),ctx);
  vm.runInContext(batchCode,ctx);return ctx;
}

test('static batching reduces 100 opaque meshes to two while preserving world bounds and dynamic objects',async()=>{
  const ctx=await harness(),root=new BaseThree.Group();root.position.set(4,2,-8);root.rotation.y=.3;
  for(let i=0;i<100;i++){
    const mesh=new BaseThree.Mesh(new BaseThree.BoxGeometry(.1,.1,.1),new BaseThree.MeshStandardMaterial({color:i%2?0xff0000:0x00ff00}));
    mesh.position.set(.2+(i%10)*.2,.2, .2+Math.floor(i/10)*.2);root.add(mesh);
  }
  const dynamic=new BaseThree.Group();const knife=new BaseThree.Mesh(new BaseThree.BoxGeometry(.2,.2,.2),new BaseThree.MeshStandardMaterial());dynamic.add(knife);root.add(dynamic);
  const glass=new BaseThree.Mesh(new BaseThree.BoxGeometry(.2,.2,.2),new BaseThree.MeshStandardMaterial({transparent:true,opacity:.3}));root.add(glass);
  const before=new BaseThree.Box3().setFromObject(root);
  const stats=ctx.batchStaticWorld(root,[dynamic]);assert.equal(stats.before,100);assert.equal(stats.after,2);
  const after=new BaseThree.Box3().setFromObject(root);
  assert.ok(before.min.distanceTo(after.min)<1e-6);assert.ok(before.max.distanceTo(after.max)<1e-6);
  assert.equal(knife.parent,dynamic);assert.equal(glass.parent,root);assert.equal(root.children.length,4);
});

test('batch chunks retain culling granularity and do not combine different shadow flags',async()=>{
  const ctx=await harness(),root=new BaseThree.Group(),material=new BaseThree.MeshStandardMaterial();
  for(const x of [1,2,20,21])for(const cast of [true,false]){
    const mesh=new BaseThree.Mesh(new BaseThree.BoxGeometry(1,1,1),material);mesh.position.x=x;mesh.castShadow=cast;root.add(mesh);
  }
  const stats=ctx.batchStaticWorld(root);assert.equal(stats.before,8);assert.equal(stats.after,4);
  assert.equal(root.children.filter(m=>m.castShadow).length,2);
  const encoded=html.match(/SHOOT_THE_DIE_HTML_B64\s*=\s*['"]([^'"]+)/)[1];const embedded=Buffer.from(encoded,'base64').toString();
  assert.ok(embedded.includes(batchCode.trim()));assert.match(embedded,/batchStaticWorld\(scene,\[\],18\)/);
});

test('gallery opens as one multitask window and its buttons select previews or camera',()=>{
  let entry,opened,selected;
  const status={textContent:''};const element={querySelector:()=>status};
  Object.defineProperty(element,'innerHTML',{set(markup){this.markup=markup;this.buttons=[...markup.matchAll(/data-panorama-index="(-?\d+)"/g)].map(m=>({dataset:{panoramaIndex:m[1]},setAttribute(name,value){this[name]=value;},addEventListener(type,fn){this.click=fn;}}));}});
  element.querySelectorAll=()=>element.buttons;
  const ctx=vm.createContext({THREE:BaseThree,document:{createElement:()=>element},createFloatingDomWindow:(id,el,title)=>{entry={id,el,title};},openMultitaskWindow:(id,slot)=>opened={id,slot},findSlotOfApp:()=>null});
  vm.runInContext(html.slice(html.indexOf('const PANORAMAS ='),html.indexOf('function getScreenCoordinates')),ctx);
  ctx.createPanoramaGallery();assert.equal(entry.id,'panoramas');assert.equal(element.buttons.length,6);
  assert.match(element.markup,/Criado com IA/);assert.doesNotMatch(element.markup,/cyberpunk-avenue|car-factory|night-skyline|neon-crossroads/);
  ctx.openPanoramaGallery();assert.equal(opened.id,'panoramas');assert.equal(opened.slot,'center');
  ctx.selectPanorama=index=>selected=index;
  element.buttons[5].click({stopPropagation(){}});assert.equal(selected,4);
  element.buttons[0].click({stopPropagation(){}});assert.equal(selected,-1);
  assert.match(html,/action === 'camera'\) \{ openPanoramaGallery\(\)/);
});

test('only retained originals and marked generated environments remain, with lightweight packaged thumbnails',async()=>{
  const list=JSON.parse(await readFile('web/panoramas/manifest.json','utf8'));
  assert.deepEqual(list.filter(p=>!p.generated).map(p=>p.id),['gaming-room','future-studio','purple-street']);
  assert.equal(list.filter(p=>p.generated).length,2);
  for(const p of list)assert.deepEqual(await readFile('web/panoramas/'+p.thumbnail),await readFile('app/src/main/assets/panoramas/'+p.thumbnail));
});
