import test from 'node:test';
import assert from 'node:assert/strict';
import {createCareer,careerAppearance,careerTeam} from '../xfc-game/src/data/career.js';
import {LAB_HAIR} from '../xfc-game/src/data/player-customization.js';
import {TEAMS} from '../xfc-game/src/data/teams.js';
import {startXfcServer} from '../xfc-game/serve.mjs';
import {launchOrSkip} from './support/chromium.mjs';
test('catálogo opt-in, cores/pulsos normalizados e elenco não modificado',()=>{
 const before=JSON.stringify(TEAMS);assert.equal(Object.keys(LAB_HAIR).filter(k=>k!=='lab-none').length,17,'moicano crista removido');
 assert.equal(Object.hasOwn(LAB_HAIR,'lab-mohawk'),false,'crista não volta ao catálogo');
 assert.equal(Object.hasOwn(LAB_HAIR,'lab-reference-mohawk'),true,'moicano da referência permanece');
 const c=createCareer({appearance:{hairStyle:'lab-dreads',gloves:'red',gloveModel:'pro',wristband:'purple',wristbandSide:'both'}});
 const team=careerTeam(c);assert.equal(team.players.filter(p=>p.appearance?.hairStyle==='lab-dreads').length,1);assert.equal(JSON.stringify(TEAMS),before);
 assert.equal(careerAppearance({wristband:'white'}).wristbandSide,'left');assert.equal(careerAppearance({gloveModel:'invalid',wristbandSide:'invalid'}).gloveModel,'winter');
 assert.equal(careerAppearance({hairStyle:'lab-none'}).hairStyle,'lab-none');
});
test('17 cortes: topologias distintas no mesmo corpo; luvas skinned sem caixas azuis e pulseiras laterais',{timeout:90000},async t=>{
 const {server,url}=await startXfcServer();const b=await launchOrSkip(t);if(!b){server.close();return;}
 try{const p=await b.newPage();await p.goto(url);const r=await p.evaluate(async()=>{
  const T=await import('/vendor/three.module.min.js'),{preloadFootballerPack,createGltfPlayer}=await import('/src/match3d/models.js'),{LAB_HAIR}=await import('/src/data/player-customization.js');await preloadFootballerPack();
  const options={name:'Jogador de teste',skinTone:'#bd8868',face:'natural',kit:{primary:'#fff',secondary:'#111'}},base=createGltfPlayer(options);let original;const bodyOf=m=>{let o;m.body.traverse(x=>{if(x.isMesh&&[].concat(x.material).some(m=>m.name==='Micah | anatomical body.body'))o=x;});return o;};original=bodyOf(base).geometry;
  const records=[];let bodies=true,finite=true,rig=true;const skeleton=base.body.getObjectByName('short01').skeleton;
  for(const style of Object.keys(LAB_HAIR).filter(k=>k!=='lab-none')){
   const m=createGltfPlayer({...options,hairStyle:style,gloves:'white',gloveModel:'pro',wristband:'red',wristbandSide:'both'}),hair=m.body.getObjectByName('short01'),g=hair.geometry;
   bodies&&=bodyOf(m).geometry===original;const box=g.boundingBox,size=box.getSize(new T.Vector3()),array=g.attributes.position.array;
   const normalized=Array.from(array).map((n,i)=>((n-box.min.getComponent(i%3))/Math.max(.001,size.getComponent(i%3))).toFixed(3)).join(',');
   records.push({style,parts:g.userData.pieces,triangles:array.length/9,normalized});
   const gloves=m.root.getObjectByName('xfc-fitted-gloves');rig&&=gloves.skeleton.bones.every((bone,i)=>bone===hair.skeleton.bones[i])&&gloves.geometry.attributes.skinWeight.count>20;
   for(const bone of skeleton.bones)rig&&=!/Finger/.test(bone.name); // não alegar rig de dedos inexistente
   for(const action of ['run','pass','dive','celebrate']){if(action==='pass')m.pass();if(action==='dive')m.dive(1);if(action==='celebrate')m.celebrate();for(let i=0;i<90;i++)m.update(1/60,{speed:action==='run'?6:0});}
   finite&&=[...g.attributes.position.array,...gloves.geometry.attributes.position.array].every(Number.isFinite);
   m.root.traverse(o=>{if(o.name.startsWith('xfc-keeper-glove-'))throw Error('caixa antiga ainda presente');});
   if(!m.root.getObjectByName('xfc-career-wristband')||!m.root.getObjectByName('xfc-career-wristband-right'))throw Error('faltou pulseira');m.dispose();
  }
  const variants=[];for(const side of ['left','right','both']){const m=createGltfPlayer({...options,gloves:'black',gloveModel:'winter',wristband:'white',wristbandSide:side});variants.push({side,left:!!m.root.getObjectByName('xfc-career-wristband'),right:!!m.root.getObjectByName('xfc-career-wristband-right'),type:m.root.getObjectByName('xfc-fitted-gloves').userData.type});m.dispose();}
  const none=createGltfPlayer({...options,hairStyle:'lab-none',gloves:'none',wristband:'none'});const removed=!none.root.getObjectByName('xfc-fitted-gloves')&&!none.body.getObjectByName('short01').visible;none.dispose();base.dispose();return{records,bodies,finite,rig,variants,removed};
 });
 assert.ok(r.bodies&&r.finite&&r.rig&&r.removed,JSON.stringify({bodies:r.bodies,finite:r.finite,rig:r.rig,removed:r.removed}));assert.equal(new Set(r.records.map(x=>x.normalized)).size,17,'cada corte tem sua própria topologia (crista removida)');assert.ok(new Set(r.records.map(x=>x.triangles)).size>=10);
 for(const row of r.records)assert.ok(row.triangles<4500&&row.parts>=1,JSON.stringify({...row,normalized:undefined}));
 assert.deepEqual(r.variants,[{side:'left',left:true,right:false,type:'winter'},{side:'right',left:false,right:true,type:'winter'},{side:'both',left:true,right:true,type:'winter'}]);
 }finally{await b.close();server.close();}
});
test('editor: troca em tempo real, combina/remove acessórios, salva só o protagonista e cancela sem mutação',{timeout:90000},async t=>{
 const {server,url}=await startXfcServer();const b=await launchOrSkip(t);if(!b){server.close();return;}
 try{const p=await b.newPage({viewport:{width:1280,height:720}}),errors=[];p.on('pageerror',e=>errors.push(e.message));await p.goto(url);
 await p.evaluate(async()=>{const m=await import('/src/main.js'),d=await import('/src/data/career.js');m.state.profile.career=d.createCareer({clubId:'santos'});m.go('career',{view:'custom-edit',category:'head'});});
 await p.waitForSelector('canvas[data-ready=true]');await p.getByLabel('Cabelo',{exact:true}).selectOption('lab-braids');await p.waitForFunction(()=>JSON.parse(document.querySelector('canvas').dataset.appearance||'{}').hairStyle==='lab-braids');
 await p.getByRole('button',{name:/Acessórios Chuteiras/}).click();await p.getByLabel('Modelo de luva').selectOption('pro');await p.getByLabel('Luvas',{exact:true}).selectOption('red');await p.getByLabel('Munhequeira',{exact:true}).selectOption('black');await p.getByLabel('Pulsos',{exact:true}).selectOption('both');
 await p.getByRole('button',{name:'Girar prévia',exact:true}).click();await p.getByRole('button',{name:'Testar movimentos',exact:true}).click();await p.waitForFunction(()=>document.querySelector('canvas').dataset.motion==='walk');
 await p.getByRole('button',{name:'Salvar personalização',exact:true}).click();const saved=await p.evaluate(async()=>(await import('/src/main.js')).state.profile.career.player.appearance);assert.equal(saved.hairStyle,'lab-braids');assert.equal(saved.gloves,'red');assert.equal(saved.gloveModel,'pro');assert.equal(saved.wristbandSide,'both');
 await p.evaluate(async()=>(await import('/src/main.js')).go('career',{view:'custom-edit',category:'accessories'}));await p.waitForSelector('canvas[data-ready=true]');await p.getByLabel('Luvas',{exact:true}).selectOption('none');await p.getByLabel('Munhequeira',{exact:true}).selectOption('none');await p.getByRole('button',{name:'Cancelar',exact:true}).click();assert.deepEqual(await p.evaluate(async()=>(await import('/src/main.js')).state.profile.career.player.appearance),saved);assert.deepEqual(errors,[]);
 }finally{await b.close();server.close();}
});
