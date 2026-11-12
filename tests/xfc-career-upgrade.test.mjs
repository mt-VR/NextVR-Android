import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {startXfcServer} from '../xfc-game/serve.mjs';
import {launchOrSkip} from './support/chromium.mjs';

test('artes originais preservadas, sem redesenho; PNG de entrada e derivação dos ícones',async()=>{
 for(const [path,hash]of [['design/brand/xfc27-icon-original.png','3a3dec6cb59d28fd2ecabf558bd046864eab24edd6d5725df3e188803ef2ae0c'],['xfc-game/assets/brand/launch-xfc27.png','67bcab1206e7ec23cf422bbefa0a35043f8c30b10659025f912df0891c6e927d']])assert.equal(createHash('sha256').update(await readFile(path)).digest('hex'),hash);
 const icon=await readFile('xfc-game/assets/brand/xfc-icon.png');assert.equal(icon.readUInt32BE(16),512);assert.equal(icon.readUInt32BE(20),512);
});

test('percurso fechado contínuo, campo livre; reservas distintos, animação, estádio e descarte assíncrono',{timeout:90000},async t=>{
 const {server,url}=await startXfcServer({port:0}),b=await launchOrSkip(t);if(!b){server.close();return;}
 try{const p=await b.newPage(),errors=[];p.on('pageerror',e=>errors.push(e.message));await p.goto(url);const r=await p.evaluate(async()=>{
  const T=await import('/vendor/three.module.min.js'),{warmupPose,WARMUP_LENGTH,addWarmup}=await import('/src/match3d/warmup.js'),{TEAMS}=await import('/src/data/teams.js'),{buildStadium}=await import('/src/match3d/stadium.js');let clear=true,smooth=true;const step=WARMUP_LENGTH/12000;
  for(let i=0;i<=12000;i++){const a=warmupPose(i*step),b=warmupPose(i*step+step);clear&&=Math.abs(a.x)>53.5||Math.abs(a.z)>35;smooth&&=Math.hypot(a.x-b.x,a.z-b.z)<=step*1.001&&Math.abs(Math.atan2(Math.sin(a.yaw-b.yaw),Math.cos(a.yaw-b.yaw)))<.01;}
  const scene=new T.Scene(),entries=TEAMS.slice(0,2).map(team=>({team})),cancel=addWarmup(scene,entries);cancel.dispose();await cancel.ready;const cancelled=cancel.actors.length===0&&!scene.children.includes(cancel.group);
  const stadium=buildStadium(scene,{lowPower:true,stadium:0,warmupTeams:entries});await stadium.warmup.ready;const low=stadium.warmup.actors.length,dimensions=stadium.dimensions;stadium.dispose();
  const warmup=addWarmup(scene,entries,false);await warmup.ready;let finite=true,stretch=false;const start=warmup.actors[0].root.position.clone();for(let i=0;i<600;i++){warmup.update(1/30);for(const a of warmup.actors)for(const bone of Object.values(a.bones))finite&&=[...bone.position.toArray(),...bone.quaternion.toArray()].every(Number.isFinite);stretch||=Math.abs(warmup.actors[1].bones.leftArm.rotation.z)>1;}
  const ids=warmup.actors.map(a=>a.root.userData.rosterId),reserve=ids.every(id=>entries.some(e=>e.team.substitutes.some(p=>p.id===id))),moved=start.distanceTo(warmup.actors[0].root.position)>10;warmup.dispose();warmup.dispose();return{clear,smooth,cancelled,low,dimensions,finite,stretch,ids,reserve,moved,empty:warmup.actors.length===0};
 });assert.ok(r.clear&&r.smooth&&r.cancelled&&r.finite&&r.stretch&&r.reserve&&r.moved&&r.empty,JSON.stringify(r));assert.equal(r.low,2);assert.equal(new Set(r.ids).size,4);assert.ok(r.dimensions.standHeight>=25&&r.dimensions.standOffset-r.dimensions.standDepth/2>=20);assert.equal(r.dimensions.pitch.length,105);assert.equal(r.dimensions.pitch.width,68);assert.equal(r.dimensions.goal.width,7.32);assert.deepEqual(errors,[]);
 }finally{await b.close();server.close();}
});

test('munhequeiras no pulso seguem ossos; cabelos novos em corpos e rostos distintos',{timeout:90000},async t=>{
 const {server,url}=await startXfcServer({port:0}),b=await launchOrSkip(t);if(!b){server.close();return;}
 try{const p=await b.newPage();await p.goto(url);const r=await p.evaluate(async()=>{
  const T=await import('/vendor/three.module.min.js'),{preloadFootballerPack,createGltfPlayer}=await import('/src/match3d/models.js');await preloadFootballerPack();let finite=true,attached=true,fit=true,count=0;
  for(const [height,body,weight]of [[160,'lean',55],[175,'normal',68],[200,'strong',100]])for(const hairStyle of ['lab-reference-mohawk','lab-ragnarok','lab-long']){const a=createGltfPlayer({name:'Cabeça '+count++,height,body,weight,hairStyle,hairColor:'#e53c49',wristband:'white',wristbandSide:'both'});a.root.updateMatrixWorld(true);let skin;a.body.traverse(o=>{if(o.isSkinnedMesh&&o.material.name==='Micah | anatomical body.body')skin=o;});const hair=a.body.getObjectByName('short01');finite&&=hair.geometry.boundingBox.min.toArray().every(Number.isFinite)&&hair.geometry.boundingBox.max.toArray().every(Number.isFinite);
   for(const side of ['left','right']){const band=a.root.getObjectByName(side==='left'?'xfc-career-wristband':'xfc-career-wristband-right'),hand=a.bones[side+'Hand'];attached&&=band.parent===hand;const idx=skin.skeleton.bones.indexOf(hand),bind=skin.skeleton.boneInverses[idx].clone().invert().multiply(band.matrix);const y=new T.Vector3().setFromMatrixPosition(bind).y;fit&&=Math.abs(y-1.040)<1e-6&&Math.abs(new T.Vector3(0,1,0).transformDirection(bind).y-1)<1e-6;const local=band.matrix.clone();for(let i=0;i<45;i++){a.update(1/60,{speed:6});a.root.updateMatrixWorld(true);finite&&=band.matrixWorld.elements.every(Number.isFinite);attached&&=local.equals(band.matrix);}}
   a.dispose();
  }return{finite,attached,fit,count};
 });assert.deepEqual(r,{finite:true,attached:true,fit:true,count:9});
 }finally{await b.close();server.close();}
});

test('seleção inicial: sete países europeus atualizam escudo, bandeira, liga e uniforme',{timeout:90000},async t=>{
 const {server,url}=await startXfcServer({port:0}),b=await launchOrSkip(t);if(!b){server.close();return;}
 try{const p=await b.newPage({viewport:{width:1280,height:720}}),errors=[];p.on('pageerror',e=>errors.push(e.message));await p.goto(url);await p.evaluate(async()=>(await import('/src/main.js')).go('career',{view:'create',kind:'player'}));
 for(const country of ['Inglaterra','Espanha','Alemanha','Itália','França','Portugal','Países Baixos']){await p.getByLabel('País do clube').selectOption(country);const r=await p.locator('.season-initial-club').evaluate(async card=>{const {getTeam}=await import('/src/data/teams.js'),team=getTeam(document.querySelector('[aria-label="Clube inicial"]').value);return{crest:card.querySelector('img').getAttribute('src')===team.crest,flag:card.querySelectorAll('img')[1].getAttribute('alt').includes(team.country),name:card.querySelector('b').textContent===team.name,league:!!card.querySelector('p').textContent,kit:!!card.querySelector('svg')};});assert.ok(Object.values(r).every(Boolean),country+JSON.stringify(r));}assert.deepEqual(errors,[]);
 }finally{await b.close();server.close();}
});

test('dedos locais articulados, ponta no papel, material e foco por qualidade; não altera rig global',{timeout:90000},async t=>{
 const {server,url}=await startXfcServer({port:0}),b=await launchOrSkip(t);if(!b){server.close();return;}
 try{const p=await b.newPage(),errors=[];p.on('pageerror',e=>errors.push(e.message));p.on('console',m=>{if(m.type()==='error'&&/WebGL|THREE|shader/.test(m.text()))errors.push(m.text());});await p.goto(url);const r=await p.evaluate(async()=>{
 const T=await import('/vendor/three.module.min.js'),{createCareerCinematic}=await import('/src/match3d/career-cinematic.js');const rows=[];for(const quality of ['low','high']){const canvas=document.createElement('canvas');canvas.style.cssText='width:640px;height:360px';document.body.replaceChildren(canvas);const film=await createCareerCinematic(canvas,{type:'transfer',clubId:'fc-barcelona',season:2,player:{name:'Teste',number:10,appearance:{}}},{quality});film.setTime(19);const hand=film.gripHands.right,pose=hand.fingers[0].bones[2].quaternion.clone();film.setTime(19.2);const tip=film.pen.localToWorld(new T.Vector3(0,-.06,0));rows.push({joints:hand.fingers.reduce((n,f)=>n+f.bones.length,0),moves:pose.angleTo(hand.fingers[0].bones[2].quaternion)>1e-5,contact:Math.abs(tip.y-.843)<.002,focus:!!film.focusPass,details:!!film.paper.material.bumpMap&&!!film.shirt.material.bumpMap,calls:film.renderer.info.render.calls,triangles:film.renderer.info.render.triangles});film.dispose();film.dispose();}return rows;
 });r.forEach((row,i)=>{assert.equal(row.joints,15);assert.ok(row.moves&&row.contact&&row.details);assert.equal(row.focus,i===1);assert.ok(row.calls>30&&row.calls<150&&row.triangles<65000,JSON.stringify(row));});assert.deepEqual(errors,[]);
 }finally{await b.close();server.close();}
});
