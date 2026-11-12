import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {classicIdentity,CLASSIC_HAIR_STYLES} from '../xfc-game/src/match3d/classic-player.js';
import {startXfcServer} from '../xfc-game/serve.mjs';
import {launchOrSkip} from './support/chromium.mjs';

test('identidade clássica é estável por nome, com seis formatos e todos os cortes existentes',()=>{
 assert.equal(classicIdentity('Neymar'),classicIdentity('NEYMAR'));
 assert.equal(new Set(Array.from({length:40},(_,i)=>classicIdentity('Atleta '+i))).size,6);
 for(const style of ['fade','curly','afro','bald','mohawk','short','side','long'])assert.ok(CLASSIC_HAIR_STYLES.includes(style));
});
test('pacote clássico mantém rig/animações, tem menos de 10 mil triângulos e hash reproduzível',async()=>{
 const bytes=await readFile('xfc-game/assets/players/models/footballer.glb'),manifest=JSON.parse(await readFile('xfc-game/assets/players/models/footballer.source.json','utf8'));
 assert.equal(createHash('sha256').update(bytes).digest('hex'),manifest.outputSha256);assert.ok(bytes.length<600000);
 const json=JSON.parse(bytes.subarray(20,20+bytes.readUInt32LE(12)).toString());
 const triangles=json.meshes.flatMap(m=>m.primitives).reduce((n,p)=>n+json.accessors[p.indices].count/3,0);
 assert.ok(triangles<10000&&triangles>3000,`triângulos: ${triangles}`);assert.equal(json.skins[0].joints.length,22);
 assert.deepEqual(json.animations.map(a=>a.name),['idle','walk','run']);
 for(const m of json.meshes)for(const p of m.primitives){assert.ok(p.attributes.JOINTS_0!==undefined&&p.attributes.WEIGHTS_0!==undefined&&p.attributes.TEXCOORD_0!==undefined);}
});
test('cortes sólidos distintos, rostos, UVs, orçamento e animações no renderer real',{timeout:90000},async t=>{
 const {server,url}=await startXfcServer();const b=await launchOrSkip(t);if(!b){server.close();return;}
 try{const page=await b.newPage({viewport:{width:960,height:540}}),errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error'&&/THREE|WebGL|shader/.test(m.text()))errors.push(m.text());});await page.goto(url);
 const result=await page.evaluate(async()=>{
  const T=await import('/vendor/three.module.min.js'),{preloadFootballerPack,createGltfPlayer}=await import('/src/match3d/models.js'),{CLASSIC_HAIR_STYLES}=await import('/src/match3d/classic-player.js');await preloadFootballerPack();
  const scene=new T.Scene(),renderer=new T.WebGLRenderer({antialias:false});renderer.setSize(480,270);scene.add(new T.HemisphereLight(0xffffff,0x667755,3));const camera=new T.PerspectiveCamera(35,480/270,.1,30);camera.position.set(0,1.1,4);camera.lookAt(0,1,0);
  const records=[];let finite=true,normalised=true,skinning=true;const faces=new Set();
  for(const [index,style]of CLASSIC_HAIR_STYLES.entries()){
   const m=createGltfPlayer({name:'Atleta '+index,hairStyle:style,simplified:true,skinTone:'#bd8868',hairColor:'#352015',kit:{primary:'#fff',secondary:'#111',shorts:'#fff',socks:'#fff'},number:10});scene.add(m.root);
   const hair=m.body.getObjectByName('short01'),positions=hair.geometry.attributes.position;
   let triangles=0,body,meshes=0,textureMax=0;m.body.traverse(o=>{if(!o.isMesh)return;meshes++;triangles+=(o.geometry.index?.count||o.geometry.attributes.position.count)/3;for(const mat of [].concat(o.material)){if(mat.name==='Micah | anatomical body.body')body=o;if(mat.map)textureMax=Math.max(textureMax,mat.map.image.width,mat.map.image.height);}});
   faces.add(body.geometry.uuid);const before=new T.Vector3().fromBufferAttribute(positions,40);m.root.updateMatrixWorld(true);hair.skeleton.update();hair.applyBoneTransform(40,before);m.bones.head.rotation.y=.4;m.root.updateMatrixWorld(true);hair.skeleton.update();const after=new T.Vector3().fromBufferAttribute(positions,40);hair.applyBoneTransform(40,after);skinning&&=before.distanceTo(after)>.005;
   for(const action of ['walk','run','pass','shot','dribble','celebrate']){
    if(action==='pass')m.pass();if(action==='shot')m.kick('power');if(action==='dribble')m.skill();if(action==='celebrate')m.celebrate();
    for(let i=0;i<90;i++){m.update(1/60,{speed:action==='walk'?2.5:action==='run'?6:0,ownsBall:action==='dribble'});for(const bone of hair.skeleton.bones){finite&&=[...bone.position.toArray(),...bone.quaternion.toArray()].every(Number.isFinite);normalised&&=Math.abs(bone.quaternion.length()-1)<.001;}}
   }
   renderer.render(scene,camera);records.push({style,triangles,meshes,textureMax,hairCount:positions.count,opaque:!hair.material.transparent&&hair.material.alphaTest===0,signature:Array.from(positions.array).map(v=>v.toFixed(4)).join(','),bump:!!body.material.bumpMap});
   scene.remove(m.root);m.dispose();
  }renderer.dispose();return{records,finite,normalised,skinning,faces:faces.size};
 });
 assert.ok(result.finite&&result.normalised&&result.skinning);assert.ok(result.faces>=4);assert.equal(new Set(result.records.map(r=>r.signature)).size,CLASSIC_HAIR_STYLES.length);
 for(const r of result.records){assert.ok(r.triangles<10000&&r.meshes<=10,JSON.stringify({...r,signature:undefined}));assert.ok(r.textureMax<=512);assert.ok(r.hairCount<=500&&r.opaque);assert.equal(r.bump,false);}
 assert.deepEqual(errors,[]);
 }finally{await b.close();server.close();}
});

// Baselines v041: a v0.5.41 autoriza SOMENTE os acréscimos pedidos (nota ao
// vivo, indicador de expulsão, replay automático, passe direcional e câmera
// Pro). Os controles, menus de referência e a arte de entrada continuam iguais.
test('HUD, controles, gameplay e menus preservados; ligação de aquecimento isolada',async()=>{
 const baseline={
  "src/match3d/hud.js": "7d44e045209b64b67c2afb846ce69cb18242f6d64f73aa2ee2ab24da09a668e3",
  "src/match3d/controls.js": "9a014bf4045165c7a6ed023021a49a1ebf8242b9b99ef580947dc8f4d41b7eec",
  "src/match3d/match.js": "77f26c1076f5608b5792ed5a113778814338e26bfd6f4cf0aa2fd238fa675fb5",
  "src/screens/career-reference.js": "c1dac4158ad6d164f875f03459b42d2617d4e2bacd6906556a23666ab9d7b2cd",
  "styles/career-reference.css": "85eebda817ec4e48c3badd1e9dc6be6310495f16f0462ffe6f878a201429888d",
  "styles/match3d.css": "b60b94e0bec11bb2da8430a707de7606cdda7dc5dfb5d3eb238f5d0a8b8ee3eb"
 };
 for(const [path,hash]of Object.entries(baseline))assert.equal(createHash('sha256').update((await readFile('xfc-game/'+path,'utf8')).replace('    warmupTeams:[{team:home,kit:homeKit},{team:away,kit:awayKit}],\n','')).digest('hex'),hash,path);
});
