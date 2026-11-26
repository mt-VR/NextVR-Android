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
 assert.equal(createHash('sha256').update(bytes).digest('hex'),manifest.outputSha256);assert.ok(bytes.length<800000);
 const json=JSON.parse(bytes.subarray(20,20+bytes.readUInt32LE(12)).toString());
 const triangles=json.meshes.flatMap(m=>m.primitives).reduce((n,p)=>n+json.accessors[p.indices].count/3,0);
 assert.ok(triangles<10000&&triangles>3000,`triângulos: ${triangles}`);assert.equal(json.skins[0].joints.length,22);
 assert.deepEqual(json.animations.map(a=>a.name),['idle','walk','run','sprint','dive','catch','miss','throw-in']);
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

// Baselines v044: os mesmos arquivos da v0.5.43, agora com a cerimônia pré-jogo
// de quatro cenas (match.js) e as regras do painel da cerimônia (match3d.css).
// match.js foi atualizado de propósito: saída de bola destravada, quedas reais,
// conversa com o árbitro e câmera de transmissão com o enquadramento do
// eFootball (a lente também é limitada pelo vão livre antes da arquibancada).
// v0.5.48: `career-reference.js` ganhou as telas Escritório e Evoluir Jogador
// (artes do usuário inteiras, hotspots medidos na própria imagem), e
// `camera.js` fecha a objetiva no lado de cima do quadro. O `match.js` não
// mudou nesta versão — o hash acima é o da v0.5.47.
// v0.5.49: `career-reference.js` mostra o nome real do campeonato (LaLiga,
// Premier League...) no lugar de "Liga da carreira"; o resto segue igual.
// v0.5.50: `match.js` ganha a falta com barreira/goleiro e o chute direto da
// IA; `career-reference.js`/CSS ganham o badge de chance e a convocação. HUD,
// controles, menus de referência e a arte de entrada continuam iguais.
// v0.5.51: mudanças de propósito — campo maior, gamepad (controles + HUD no
// modo console), vantagem do árbitro, cabeçada, lateral com as mãos e
// acréscimos de 5 min em `match.js`; `hud.js`/`controls.js`/`match3d.css`
// ganham o layout de controle. Menus de referência seguem idênticos.
// v0.5.52: campo 120×82 (câmeras, remarcações e clamps em `match.js`) e o
// novo layout dos botões de toque em `match3d.css`.
// v0.5.53: mudanças de propósito — prorrogação de 105'/120' com pênaltis e o
// cache das estatísticas em `match.js`; a HUD passa a mostrar 3ºT/4ºT e o
// intervalo da prorrogação em `hud.js`; o Escritório mostra a Copa de 4 em 4
// temporadas (contagem no cartão da seleção) em `career-reference.js`/CSS.
// v0.5.54: os nomes flutuantes sobre TODOS os jogadores saíram do HUD por
// pedido (a camada `hud__tags-layer` e o CSS de `hud__nametag` foram removidos);
// o cartão fixo do atleta, o do adversário e a etiqueta do controlado ficam.
// v0.5.55: a etiqueta do controlado (`hud__tag`) também saiu — nenhum nome
// flutua mais sobre o campo.
test('HUD, controles, gameplay e menus preservados; ligação de aquecimento isolada',async()=>{
 const baseline={
  "src/match3d/hud.js": "43939e6083e8772dfaecd7f0f0ef23192c17e2ef80b6054a4f9c0ae3a8ea0285",
  "src/match3d/controls.js": "9519199c6a3b879b588fc110396e1500f8d86bde76a93b979635d66e2e4b5376",
  // v0.5.89: câmera Pro Zoom/Speed/Swing, elástico/roleta e sprint da IA.
  // v0.5.94: escala visual dos atletas de linha em 1,18×; coordenadas e colisões inalteradas.
  "src/match3d/match.js": "a62466cabcd03e1c50b627964722923dd881252ab049c26705cb1254765b2fe2",
  "src/screens/career-reference.js": "1583463367c4d7110e059b61ec7adc44457c86493bf3470e22e8d3b78e5bff37",
  "styles/career-reference.css": "ff684a5e88fb8bfd185dd509fc65d6d0a47ae7adf58c5293dbcb9121a0f71c3b",
  // v0.5.57: tela de resultado no estilo EA FC (CASA/FORA, placar, overlay).
  "styles/match3d.css": "33b3098bfeffe264e63cc911af4cde3dd8607b336f79a3d97145d5834c9d046b"
 };
 for(const [path,hash]of Object.entries(baseline))assert.equal(createHash('sha256').update((await readFile('xfc-game/'+path,'utf8')).replace('    warmupTeams:[{team:home,kit:homeKit},{team:away,kit:awayKit}],\n','')).digest('hex'),hash,path);
});

// v0.5.48: a câmera de transmissão aproxima quando a bola está no lado de cima
// do quadro (o lado oposto ao da lente, `z` negativo). A lente é fixa, então
// "mais perto" é a objetiva fechando; do lado de cá o fov continua 54°.
test('câmera de transmissão: fov fecha no lado de cima e não muda do lado de cá',async()=>{
 const {broadcastCameraPose}=await import('../xfc-game/src/match3d/camera.js');
 const {PITCH}=await import('../xfc-game/src/match3d/constants.js');
 const mid=broadcastCameraPose({x:0,y:0,z:0},1,null);
 assert.equal(mid.position.x,0);assert.equal(mid.position.z,50);assert.equal(mid.fov,50);
 const top=broadcastCameraPose({x:0,y:0,z:-PITCH.halfWidth},1,null);
 const near=broadcastCameraPose({x:0,y:0,z:PITCH.halfWidth},1,null);
 assert.ok(top.fov<mid.fov,'bola no lado de cima: a objetiva fecha');
 assert.ok(top.fov>mid.fov*0.7,'...mas sem telephoto: a arquibancada de fundo continua no quadro');
 assert.equal(near.fov,50,'bola do lado da lente: o enquadramento Tele Broadcast não muda');
 for(const z of [-34,-20,0,20,30]){
  const pose=broadcastCameraPose({x:-30,y:0,z},1,null);
  assert.equal(pose.position.x,-30,'a lente acompanha a bola em X');
  assert.equal(pose.position.y,16,'a altura da lente não muda com a bola');
 }
 assert.ok(broadcastCameraPose({x:0,y:0,z:-34},1,null).fov<=broadcastCameraPose({x:0,y:0,z:-20},1,null).fov,
  'quanto mais para cima, mais fechada a objetiva');
});
