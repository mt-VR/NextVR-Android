import test from 'node:test';
import assert from 'node:assert/strict';
import {createCareer,nextCareerSeason} from '../xfc-game/src/data/career.js';
import {createManagerCareer} from '../xfc-game/src/data/career-services.js';
import {queueCareerPresentation,pendingCareerPresentation,completeCareerPresentation,presentationFrame,presentationShots} from '../xfc-game/src/data/career-presentations.js';
import {startXfcServer} from '../xfc-game/serve.mjs';
import {launchOrSkip} from './support/chromium.mjs';

test('contratos: eventos únicos, snapshots, saves antigos, transferência/renovação e exclusão do técnico',()=>{
 const c=createCareer({clubId:'santos',name:'Lucas',number:7});assert.equal(pendingCareerPresentation(c),null,'não inventa eventos ao carregar save antigo');
 const e=queueCareerPresentation(c);assert.equal(e.type,'signing');assert.equal(queueCareerPresentation(c),e);c.player.number=9;assert.equal(e.player.number,7);
 const restored=JSON.parse(JSON.stringify(c));assert.equal(pendingCareerPresentation(restored).id,e.id);assert.equal(completeCareerPresentation(restored,'wrong'),false);assert.ok(completeCareerPresentation(restored,e.id,true));assert.equal(pendingCareerPresentation(restored),null);queueCareerPresentation(restored);assert.equal(pendingCareerPresentation(restored),null,'reabrir não repete evento consumido');
 assert.equal(nextCareerSeason(c,'real-madrid'),false);c.round=14;c.pending={id:'match'};assert.equal(nextCareerSeason(c,'real-madrid'),false);c.pending=null;assert.ok(nextCareerSeason(c,'real-madrid'));assert.equal(c.presentation.type,'transfer');assert.equal(c.presentation.fromClubId,'santos');assert.equal(c.presentation.clubId,'real-madrid');assert.equal(c.presentation.player.number,9);
 assert.ok(completeCareerPresentation(c,c.presentation.id));assert.equal(c.presentation.status,'played');c.round=14;assert.ok(nextCareerSeason(c));assert.equal(c.presentation.type,'renewal');assert.equal(c.presentation.season,3);
 const manager=createManagerCareer('santos');assert.equal(queueCareerPresentation(manager),null);manager.round=14;nextCareerSeason(manager);assert.equal(pendingCareerPresentation(manager),null);
 for(const type of ['signing','transfer','renewal']){const shots=presentationShots(type),total=shots.reduce((n,s)=>n+s.duration,0);assert.equal(presentationFrame(type,0).id,type==='signing'?'arrival':'announcement');assert.ok(presentationFrame(type,total).done);assert.ok(shots.some(s=>s.id==='signature'));assert.ok(shots.some(s=>s.id==='shirt'));assert.equal(shots.some(s=>s.id==='arrival'),type!=='renewal');}
});

test('coloração: render da pele/rosto/sobrancelhas idêntico nas cinco cores, inclusive barba e bigode',{timeout:120000},async t=>{
 const {server,url}=await startXfcServer();const b=await launchOrSkip(t);if(!b){server.close();return;}
 try{const page=await b.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto(url);const result=await page.evaluate(async()=>{
  const T=await import('/vendor/three.module.min.js'),{preloadFootballerPack,createGltfPlayer}=await import('/src/match3d/models.js'),{CAREER_HAIR_COLORS,CAREER_SKIN}=await import('/src/data/career.js');await preloadFootballerPack();
  const renderer=new T.WebGLRenderer({preserveDrawingBuffer:true,antialias:false});renderer.setSize(160,160);const scene=new T.Scene();scene.add(new T.HemisphereLight(0xffffff,0x777777,3));const cam=new T.PerspectiveCamera(30,1,.01,20);cam.position.set(0,1.66,1);cam.lookAt(0,1.66,0);let changed=0,pairs=0,separate=true;
  const pixels=()=>{renderer.render(scene,cam);const data=new Uint8Array(160*160*4);renderer.getContext().readPixels(0,0,160,160,renderer.getContext().RGBA,renderer.getContext().UNSIGNED_BYTE,data);return data;};
  for(const skinTone of Object.keys(CAREER_SKIN)){let baseline;for(const hairColor of Object.keys(CAREER_HAIR_COLORS)){
   const m=createGltfPlayer({name:'Mesmo rosto',careerHair:true,hairStyle:'curly',hairColor,skinTone,beard:'full',moustache:'classic',brows:'thick',kit:{primary:'#fff',secondary:'#111'}});scene.add(m.root);const hair=m.body.getObjectByName('short01');separate&&=hair.material.userData.hairOnly&&hair.geometry.userData.labHair==='lab-curly';hair.visible=false;
   const current=pixels();if(baseline){pairs++;for(let i=0;i<current.length;i++)if(current[i]!==baseline[i])changed++;}else baseline=current;
   m.body.traverse(o=>{if(o.isMesh&&o!==hair)for(const mat of [].concat(o.material))separate&&=mat!==hair.material&&mat.map!==hair.material.map;});scene.remove(m.root);m.dispose();
  }}renderer.dispose();renderer.forceContextLoss();return{pairs,changed,separate};
 });assert.equal(result.pairs,16);assert.equal(result.changed,0,'nenhum pixel de pele/rosto muda com a tintura');assert.ok(result.separate);assert.deepEqual(errors,[]);
 }finally{await b.close();server.close();}
});

test('cenas reais: destinos distintos, camisa/assinatura, orçamentos, poses finitas, descarte e asset compartilhado intacto',{timeout:120000},async t=>{
 const {server,url}=await startXfcServer();const b=await launchOrSkip(t);if(!b){server.close();return;}
 try{const p=await b.newPage({viewport:{width:640,height:360}}),errors=[];p.on('pageerror',e=>errors.push(e.message));p.on('console',m=>{if(m.type()==='error'&&/THREE|WebGL|shader/.test(m.text()))errors.push(m.text());});await p.goto(url);
 const result=await p.evaluate(async()=>{
  const {createCareerCinematic}=await import('/src/match3d/career-cinematic.js'),{createGltfPlayer}=await import('/src/match3d/models.js'),{presentationShots}=await import('/src/data/career-presentations.js');const rows=[];
  for(const [clubId,type]of [['santos','signing'],['fc-barcelona','transfer'],['real-madrid','renewal']]){
   const canvas=document.createElement('canvas');canvas.style.cssText='width:640px;height:360px';document.body.replaceChildren(canvas);const film=await createCareerCinematic(canvas,{type,clubId,season:2,player:{name:'Atleta Teste',number:27,appearance:{hairStyle:'lab-braids',hairColor:'#c3a16a',skinTone:'#96613f'}}},{reducedMotion:true});
   let start=0,finite=true,calls=0,triangles=0,signature=false,shirt=false;
   for(const shot of presentationShots(type)){film.setTime(start+shot.duration*.5);calls=Math.max(calls,film.renderer.info.render.calls);triangles=Math.max(triangles,film.renderer.info.render.triangles);for(const a of [film.hero,...film.representatives])for(const bone of Object.values(a.bones))finite&&=[...bone.position.toArray(),...bone.quaternion.toArray()].every(Number.isFinite)&&Math.abs(bone.quaternion.length()-1)<.001;
    if(shot.id==='signature'){signature=film.pen.visible&&film.paper.visible;const tip=film.pen.localToWorld(film.pen.position.clone().set(0,-.06,0));signature&&=Math.abs(tip.y-.843)<.002;}
    if(shot.id==='shirt')shirt=film.shirt.visible&&film.shirt.userData.clubId===clubId&&film.shirt.userData.number===27&&film.shirt.userData.name==='Atleta Teste';start+=shot.duration;
   }
   const body=film.hero.body.getObjectByName('short01').geometry;film.dispose();film.dispose();const after=createGltfPlayer({name:'Atleta Teste',hairStyle:'lab-braids',kit:{primary:'#fff',secondary:'#111'}});const unchanged=after.body.getObjectByName('short01').geometry===body;after.dispose();rows.push({clubId,type,finite,calls,triangles,signature,shirt,unchanged});
  }return rows;
 });for(const row of result){assert.ok(row.finite&&row.signature&&row.shirt&&row.unchanged,JSON.stringify(row));assert.ok(row.calls<110&&row.triangles<40000,JSON.stringify(row));}assert.deepEqual(errors,[]);
 }finally{await b.close();server.close();}
});

test('roteamento: contratação, pular antes/depois de carregar, reload sem repetição, transferência e renovação',{timeout:120000},async t=>{
 const {server,url}=await startXfcServer();const b=await launchOrSkip(t);if(!b){server.close();return;}
 try{const p=await b.newPage({viewport:{width:960,height:540}}),errors=[];p.on('pageerror',e=>errors.push(e.message));await p.goto(url);
 await p.evaluate(async()=>{const m=await import('/src/main.js'),{createCareer}=await import('/src/data/career.js'),{queueCareerPresentation}=await import('/src/data/career-presentations.js');m.state.profile.career=createCareer({clubId:'santos',name:'Meu Atleta',number:19});queueCareerPresentation(m.state.profile.career);m.go('career',{view:'journey'});});
 await p.waitForSelector('.career-film[data-ready=true]');assert.equal(await p.locator('.career-film').getAttribute('data-event-type'),'signing');await p.getByRole('button',{name:'Pular apresentação'}).click();assert.equal(await p.locator('.career-film').count(),0);assert.equal(await p.evaluate(()=>JSON.parse(localStorage.getItem('xfc.profile.v1')).career.presentation.status),'skipped');
 await p.reload();await p.evaluate(async()=>(await import('/src/main.js')).go('career',{view:'journey'}));assert.equal(await p.locator('.career-film').count(),0);
 await p.evaluate(async()=>{const m=await import('/src/main.js');m.state.profile.career.round=14;m.go('career',{view:'office'});});await p.getByLabel('Clube da próxima temporada').selectOption('fc-barcelona');await p.getByRole('button',{name:'Iniciar próxima temporada'}).click();await p.waitForSelector('.career-film[data-ready=true]');assert.equal(await p.locator('.career-film').getAttribute('data-event-type'),'transfer');assert.ok((await p.locator('.career-film-title').textContent()).includes('Barcelona'));await p.keyboard.press('Escape');
 const c=await p.evaluate(()=>JSON.parse(localStorage.getItem('xfc.profile.v1')).career);assert.equal(c.clubId,'fc-barcelona');assert.equal(c.presentation.status,'skipped');assert.equal(c.presentation.fromClubId,'santos');
 await p.evaluate(async()=>{const m=await import('/src/main.js');m.state.profile.career.round=14;m.go('career',{view:'office'});});await p.getByRole('button',{name:'Iniciar próxima temporada'}).click();assert.equal(await p.locator('.career-film').getAttribute('data-event-type'),'renewal');await p.getByRole('button',{name:'Pular apresentação'}).click();assert.equal(await p.locator('.career-film').count(),0);assert.deepEqual(errors,[]);
 }finally{await b.close();server.close();}
});

test('falha de WebGL não bloqueia contrato e falha de persistência não consome evento',{timeout:60000},async t=>{
 const {server,url}=await startXfcServer();const b=await launchOrSkip(t);if(!b){server.close();return;}
 try{const p=await b.newPage();await p.goto(url);await p.evaluate(async()=>{const {careerPresentation}=await import('/src/screens/career-presentation.js'),{createCareer}=await import('/src/data/career.js'),{queueCareerPresentation}=await import('/src/data/career-presentations.js');const get=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(type,...args){if(type.startsWith('webgl'))return null;return get.call(this,type,...args);};window.c=createCareer();window.contractEvent=queueCareerPresentation(c);window.ok=false;window.navigated=false;window.testScreen=careerPresentation({toast(){}},{career:c,event:contractEvent,persist:()=>ok,go:()=>navigated=true});document.body.replaceChildren(testScreen.node);await testScreen.mount();});
 await p.waitForSelector('.career-film[data-fallback=true]');await p.getByRole('button',{name:'Continuar carreira'}).click();assert.equal(await p.evaluate(()=>contractEvent.status),'pending');assert.equal(await p.evaluate(()=>navigated),false);await p.evaluate(()=>window.ok=true);await p.getByRole('button',{name:'Continuar carreira'}).click();assert.equal(await p.evaluate(()=>navigated),true);assert.equal(await p.evaluate(()=>contractEvent.status),'skipped');await p.evaluate(()=>testScreen.unmount());
 }finally{await b.close();server.close();}
});

test('reprodução completa termina sozinha, grava played e não reaparece no menu',{timeout:90000},async t=>{
 const {server,url}=await startXfcServer();const b=await launchOrSkip(t);if(!b){server.close();return;}
 try{const p=await b.newPage({viewport:{width:640,height:360}}),errors=[];p.on('pageerror',e=>errors.push(e.message));await p.goto(url);await p.evaluate(async()=>{const m=await import('/src/main.js'),d=await import('/src/data/career.js'),e=await import('/src/data/career-presentations.js');m.state.profile.career=d.createCareer({clubId:'santos'});e.queueCareerPresentation(m.state.profile.career,'renewal');m.go('career',{view:'journey'});});await p.waitForSelector('.career-film[data-ready=true]');try{await p.waitForSelector('.season-journey',{timeout:70000});}catch(e){throw Error(JSON.stringify(await p.evaluate(()=>({hidden:document.hidden,phase:document.querySelector('.career-film')?.dataset,time:document.querySelector('.career-film-canvas')?.dataset,text:document.querySelector('.career-film-footer')?.textContent})))+' ERRORS '+errors.join(','));}assert.equal(await p.evaluate(()=>JSON.parse(localStorage.getItem('xfc.profile.v1')).career.presentation.status),'played');await p.evaluate(async()=>(await import('/src/main.js')).go('career',{view:'hub'}));assert.equal(await p.locator('.career-film').count(),0);assert.deepEqual(errors,[]);
 }finally{await b.close();server.close();}
});
