import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import vm from 'node:vm';
import * as Three from 'three';
const html=await readFile('web/index.html','utf8');
const manifest=JSON.parse(await readFile('web/panoramas/manifest.json','utf8'));

test('only the seven supplied panoramas are bundled, offline and byte-identical',async()=>{
  assert.equal(manifest.length,7);
  const expected=manifest.map(p=>p.file).sort();
  assert.deepEqual((await readdir('web/panoramas')).filter(f=>f.endsWith('.jpg')).sort(),expected);
  assert.deepEqual((await readdir('app/src/main/assets/panoramas')).filter(f=>f.endsWith('.jpg')).sort(),expected);
  for(const p of manifest){
    assert.ok(html.includes(p.file));
    assert.deepEqual(await readFile('web/panoramas/'+p.file),await readFile('app/src/main/assets/panoramas/'+p.file));
  }
  assert.doesNotMatch(html,/initBeachScene|oceanBasePositions|renderBeachScene|beach-webgl/);
});

test('panorama selection handles stale loads, texture disposal, both eyes and camera return',()=>{
  const loads=[],renders=[],views=[];
  const elements={};
  const document={getElementById:id=>elements[id]??=( {style:{}} )};
  const videoElement={style:{}};
  const label={};const btn={classList:{toggle(){}},setAttribute(){},querySelector:()=>label};
  class Renderer{
    setPixelRatio(){}setSize(){}setScissorTest(){}setScissor(){}
    setViewport(...v){views.push(v);}render(scene,camera){renders.push({scene,camera});}
  }
  class Loader{load(url,success,progress,error){loads.push({url,success,error});}}
  const camera=new Three.PerspectiveCamera(55,1,.1,100); camera.rotation.set(.1,.2,0);
  const ctx=vm.createContext({THREE:{...Three,WebGLRenderer:Renderer,TextureLoader:Loader},window:{innerWidth:1000,innerHeight:600,devicePixelRatio:2},document,videoElement,camera,vrCardboardActive:true,uiQuery:()=>btn});
  vm.runInContext(html.slice(html.indexOf('const PANORAMAS ='),html.indexOf('function getScreenCoordinates')),ctx);
  ctx.cyclePanorama();ctx.cyclePanorama();
  const stale=new Three.Texture();let disposed=0;stale.addEventListener('dispose',()=>disposed++);
  loads[0].success(stale);assert.equal(disposed,1);
  const texture=new Three.Texture();texture.addEventListener('dispose',()=>disposed++);loads[1].success(texture);
  assert.equal(videoElement.style.opacity,'0');assert.equal(label.textContent,'2/7');
  ctx.renderPanoramaScene();assert.equal(renders.length,2);
  assert.deepEqual(views,[[0,0,500,600],[500,0,500,600]]);
  assert.equal(renders[0].camera.position.length(),0);
  assert.ok(renders[0].camera.quaternion.equals(camera.quaternion));
  ctx.selectPanorama(2);loads[2].success(new Three.Texture());assert.equal(disposed,2);
  ctx.selectPanorama(6);ctx.cyclePanorama();assert.equal(videoElement.style.opacity,'1');assert.equal(label.textContent,'360°');
  const cancelled=new Three.Texture();cancelled.addEventListener('dispose',()=>disposed++);loads[3].success(cancelled);assert.equal(disposed,3);
  ctx.renderPanoramaScene();assert.equal(renders.length,2,'hidden panorama does not render');
  ctx.cyclePanorama();loads[4].error();assert.equal(videoElement.style.opacity,'1');
});

test('shortened ray has bounded reach and retains pinch target locking',()=>{
  const code=html.slice(html.indexOf('const pinchRayState ='),html.indexOf('function clipHandRayToDock('));
  const ctx=vm.createContext({THREE:Three});vm.runInContext(code,ctx);
  const points=Array.from({length:9},()=>({x:200,y:200}));points[0]={x:0,y:0};
  const hand={points,pinchProgress:0};
  const first=ctx.getStablePinchRay('right',hand,1000,600);
  assert.ok(Math.hypot(first.x-first.originX,first.y-first.originY)<=600*.28+1e-8);
  assert.ok(first.x<600 && first.y<600,'not the old 2x extrapolation');
  hand.pinchProgress=1;ctx.getStablePinchRay('right',hand,1000,600);
  const locked={x:first.x,y:first.y};points[2]={x:100,y:100};
  const next=ctx.getStablePinchRay('right',hand,1000,600);
  assert.equal(next.x,locked.x);assert.equal(next.y,locked.y);
});

test('DI launcher icon replaces both legacy and adaptive variants',async()=>{
  for(const [density,size] of [['mdpi',48],['hdpi',72],['xhdpi',96],['xxhdpi',144],['xxxhdpi',192]]){
    for(const name of ['ic_launcher','ic_launcher_round']){
      const data=await readFile(`app/src/main/res/mipmap-${density}/${name}.png`);
      assert.equal(data.readUInt32BE(16),size);assert.equal(data.readUInt32BE(20),size);
    }
  }
  const foreground=await readFile('app/src/main/res/drawable-nodpi/ic_launcher_foreground.png');
  assert.equal(foreground.readUInt32BE(16),432);
  assert.deepEqual(await readFile('web/icons/dixvr-app.png'),await readFile('app/src/main/assets/icons/dixvr-app.png'));
  assert.match(await readFile('app/src/main/res/drawable/ic_launcher_background.xml','utf8'),/#000000/);
});
