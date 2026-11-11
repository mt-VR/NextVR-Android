import test from 'node:test';
import assert from 'node:assert/strict';
import {launchOrSkip} from './support/chromium.mjs';
import {startXfcServer} from '../xfc-game/serve.mjs';
import {createTeamAI} from '../xfc-game/src/match3d/ai.js';
import {runningLegPose} from '../xfc-game/src/match3d/football-actions.js';
import {planToPitch,pitchToPlan} from '../xfc-game/src/ui/game-plan.js';

test('postura: apoio quase estendido e recuperação distinta de caminhada/corrida',()=>{
 for(const running of [0,1])for(let i=0;i<240;i++){
   const pose=runningLegPose(i/240,1,running);
   if(pose.stance)assert.ok(pose.knee<.25,'não agacha a perna de apoio');
   assert.ok(Number.isFinite(pose.hip));assert.ok(pose.knee<1.85);
 }
 assert.ok(runningLegPose(.78,1,1).lift>runningLegPose(.78,1,0).lift);
 for(const point of [{x:0,z:0},{x:20,z:-12},{x:-35,z:25}]){
   const round=pitchToPlan(planToPitch(point));assert.ok(Math.hypot(round.x-point.x,round.z-point.z)<1e-8);
 }
});

test('toque: carga imóvel completa gera superchute; sprint distingue gestos e cancelamento',{timeout:60000},async t=>{
 const {server,url}=await startXfcServer({port:0});const b=await launchOrSkip(t);if(!b){server.close();return;}
 try{
   const p=await b.newPage({viewport:{width:1280,height:720}});await p.goto(url);
   await p.evaluate(async()=>{const {createControls}=await import('/src/match3d/controls.js');window.calls=[];window.sprints=[];
     const host=document.createElement('div');host.style.cssText='position:fixed;inset:0;z-index:100';document.body.appendChild(host);
     window.ctrl=createControls({root:host,onCommand:(name,opts)=>calls.push({name,opts}),onSprint:x=>sprints.push(x),onMove(){}});
   });
   const shot=p.locator('.ctrl-btn--shoot');const r=await shot.boundingBox();await p.mouse.move(r.x+r.width/2,r.y+r.height/2);await p.mouse.down();await p.waitForTimeout(1150);
   assert.equal(await shot.getAttribute('data-shot-type'),'power');await p.mouse.up();
   assert.equal(await p.evaluate(()=>calls[0].opts.kind),'power');assert.equal(await p.evaluate(()=>calls[0].opts.strength),1);
   await shot.click();assert.equal(await p.evaluate(()=>calls[1].opts.kind),'normal');
   for(const dy of [-60,60]){
     const r=await p.locator('.ctrl-btn--sprint').boundingBox();await p.mouse.move(r.x+r.width/2,r.y+r.height/2);await p.mouse.down();await p.mouse.move(r.x+r.width/2,r.y+r.height/2+dy,{steps:4});await p.mouse.up();
   }
   assert.deepEqual(await p.evaluate(()=>calls.slice(2).map(x=>x.name)),['rainbow','dribble']);
   await p.evaluate(()=>{const b=document.querySelector('.ctrl-btn--sprint');b.setPointerCapture=()=>{};
     b.dispatchEvent(new PointerEvent('pointerdown',{pointerId:90,clientY:100}));b.dispatchEvent(new PointerEvent('pointermove',{pointerId:90,clientY:0}));b.dispatchEvent(new PointerEvent('pointercancel',{pointerId:90}));});
   assert.equal(await p.evaluate(()=>calls.length),4);assert.equal(await p.evaluate(()=>sprints.at(-1)),false);
   const r2=await shot.boundingBox();await p.mouse.move(r2.x+20,r2.y+20);await p.mouse.down();await p.evaluate(()=>ctrl.setEnabled(false));await p.mouse.up();assert.equal(await p.evaluate(()=>calls.length),4);
   assert.equal(await p.locator('.ctrl-btn--super,.ctrl-btn--rainbow,.ctrl-btn--dribble').count(),0);
 }finally{await b.close();server.close();}
});

test('pausa real: congela simulação/render; plano arrasta sem teleporte, persiste e retoma',{timeout:120000},async t=>{
 const {server,url}=await startXfcServer({port:0});const b=await launchOrSkip(t);if(!b){server.close();return;}
 try{
   const p=await b.newPage({viewport:{width:1280,height:720}});await p.goto(url);await p.keyboard.press('Enter');await p.click('.launch__enter');await p.click('[data-menu-item="quick"]');await p.click('.quick__actions .continue-btn');await p.click('.stadiums__card:first-child');await p.click('.showcase__enter');await p.waitForSelector('.hud.is-visible');
   await p.evaluate(()=>{const m=__xfcMatch;m.phase.name='play';m.phase.restart=null;m.world.command('pass');});
   await p.click('.play__pause-button');
   const capture=()=>p.evaluate(()=>{const m=__xfcMatch;return{clock:{...m.clock},ball:m.ball.state.position.toArray(),velocity:m.ball.state.velocity.toArray(),players:[...m.teams.home.players,...m.teams.away.players].map(x=>[x.x,x.z,x.vx,x.vz]),frames:m.engine.state.frames,camera:m.engine.camera.position.toArray(),phase:m.phase.name};});
   const before=await capture();await p.waitForTimeout(300);await p.evaluate(()=>{for(let i=0;i<60;i++)__xfcMatch.world.tick(1/60);});assert.deepEqual(await capture(),before);
   assert.equal(await p.evaluate(()=>__xfcMatch.engine.running),false);
   const board=await p.locator('.hud__scoreboard').boundingBox();assert.ok(board.x>800);assert.equal(await p.locator('.hud__half').isVisible(),true);
   const clock=await p.locator('.hud__clock').boundingBox();const mainBoard=await p.locator('.hud__sc-main').boundingBox();assert.ok(clock.y>=mainBoard.y&&clock.y<mainBoard.y+mainBoard.height,'na pausa, relógio inline na faixa preta');
   assert.equal(await p.locator('.pause-reference__item').count(),5);
   assert.equal(await p.locator('[data-pause-action="resume"]').getAttribute('aria-label'),'CONTINUAR PARTIDA');
   await p.click('[data-pause-action="settings"]');
   await p.click('[data-pause-action="plan"]');assert.equal(await p.locator('.game-plan__pitch .football-card').count(),11);
   const card=p.locator('.game-plan__pitch .football-card').nth(8),id=await card.getAttribute('data-player-id');
   const old=await p.evaluate(id=>__xfcMatch.world.getGamePlan().find(x=>x.id===id),id);
   const box=await card.boundingBox();await p.mouse.move(box.x+box.width/2,box.y+box.height/2);await p.mouse.down();await p.mouse.move(box.x+box.width/2-90,box.y+box.height/2-65,{steps:6});await p.mouse.up();
   const edited=await p.evaluate(id=>__xfcMatch.world.getGamePlan().find(x=>x.id===id),id);assert.notEqual(edited.x,old.x);assert.notEqual(edited.z,old.z);assert.deepEqual(await capture(),before,'editar tática não altera posições físicas do lance congelado');
   const stored=await p.evaluate(()=>JSON.parse(localStorage.getItem('xfc.profile.v1')).gamePlans);const teamId=await p.evaluate(()=>__xfcMatch.teams.home.info.id);assert.equal(stored[teamId][edited.rosterId].x,edited.x);
   await card.focus();await p.keyboard.press('ArrowUp');const keyEdited=await p.evaluate(id=>__xfcMatch.world.getGamePlan().find(x=>x.id===id),id);assert.ok(keyEdited.x>edited.x);
   await p.keyboard.press('Escape');await p.click('[data-pause-action="settings"]');await p.selectOption('[aria-label="Distância da câmera"]','1.2');assert.equal(await p.evaluate(()=>__xfcMatch.world.cameraZoom),1.2);
   await p.click('[data-pause-action="resume"]');assert.equal(await p.evaluate(()=>__xfcMatch.world.isPaused()),false);await p.waitForFunction(frames=>__xfcMatch.engine.running&&__xfcMatch.engine.state.frames>frames,before.frames,{timeout:10000});
   assert.equal(await p.evaluate(id=>__xfcMatch.world.setGamePlan(id,{x:0,z:0}),id),false,'mudança tática exige pausa');
   assert.equal(await p.evaluate(id=>__xfcMatch.teams.home.players.find(x=>x.id===id).tacticalCustom,id),true);
   await p.click('.play__pause-button');await p.click('[data-pause-action="restart"]');await p.click('.pause-reference__confirm');await p.waitForSelector('.showcase__enter');
   const restored=await p.evaluate(rosterId=>__xfcMatch.world.getGamePlan().find(x=>x.rosterId===rosterId),edited.rosterId);
   assert.equal(restored.x,keyEdited.x);assert.equal(restored.z,keyEdited.z);
 }finally{await b.close();server.close();}
});

test('IA respeita a posição personalizada em vez de recolocar a ponta no corredor antigo',()=>{
 const owner={side:'home',active:true,x:0,z:0};
 const wing={id:'wing',side:'home',index:8,role:'LW',active:true,x:-30,z:20,vx:0,vz:0,turnLean:0,facingAngle:0,facing:{x:0,z:1},root:{rotation:{y:0}},tacticalCustom:true,tacticalBase:{role:'LW',x:-10,z:-12}};
 const world={ball:{state:{position:{x:0,y:.11,z:0},velocity:{x:0,y:0,z:0},owner}},members:side=>side==='home'?[owner,wing]:[],isUserControlled:p=>p===owner,isPlayable:()=>true,rng:()=>1};
 const ai=createTeamAI({side:'home',world});for(let i=0;i<480;i++)ai.update(1/60);
 assert.ok(wing.z<-8,'a ponta permanece no lado escolhido');assert.ok(Math.abs(wing.x+10)<2);
});

test('referências: placar ao vivo branco/lima, pausa preta com cinco ações e retorno móvel',{timeout:120000},async t=>{
 const {server,url}=await startXfcServer();const b=await launchOrSkip(t);if(!b){server.close();return;}
 try{
  const p=await b.newPage({viewport:{width:1280,height:720}}),errors=[];p.on('pageerror',e=>errors.push(e.message));await p.goto(url);
  await p.evaluate(async()=>(await import('/src/main.js')).go('play',{home:'palmeiras',away:'santos'}));await p.click('.showcase__enter');await p.waitForSelector('.hud.is-visible');
  await p.evaluate(()=>{const m=__xfcMatch;m.teams.home.score=3;m.teams.away.score=0;m.clock.minutes=61+7.1/60;m.clock.half=2;m.world.setPaused(true);m.stop();document.querySelector('.hud__scoreboard').dataset.sameBoard='original';});
  await p.waitForFunction(()=>document.querySelector('.hud__clock').textContent==='61:07');
  assert.deepEqual(await p.locator('.hud__team').allTextContents(),['PAL','SAN']);assert.deepEqual(await p.locator('.hud__score').allTextContents(),['3','0']);
  const live=await p.locator('.hud__scoreboard').boundingBox();assert.ok(live.x<100);
  assert.equal(await p.locator('.hud__clock').evaluate(n=>getComputedStyle(n).backgroundColor),'rgb(186, 255, 0)');
  assert.ok(await p.locator('.hud__scoreboard').evaluate(n=>getComputedStyle(n).getPropertyValue('--home-band').trim().startsWith('#')));
  await p.click('.play__pause-button');
  assert.deepEqual(await p.locator('.pause-reference__item').evaluateAll(nodes=>nodes.map(n=>n.getAttribute('aria-label'))),['CONTINUAR PARTIDA','REINICIAR PARTIDA','CONFIGURAÇÕES','ESTATÍSTICAS','SAIR DA PARTIDA']);
  await p.waitForFunction(()=>[...document.querySelectorAll('.pause-reference img')].every(i=>i.complete&&i.naturalWidth>0));
  assert.equal(await p.locator('.hud__scoreboard').getAttribute('data-same-board'),'original');assert.equal(await p.locator('.hud__clock').textContent(),'61:07');assert.equal(await p.locator('.hud__half').textContent(),'2ºT');
  assert.equal(await p.locator('.hud__clock').evaluate(n=>getComputedStyle(n).backgroundColor),'rgba(0, 0, 0, 0)');
  const paused=await p.locator('.hud__scoreboard').boundingBox();assert.ok(paused.x>800);
  await p.getByRole('button',{name:'ESTATÍSTICAS',exact:true}).click();assert.equal(await p.locator('.pause-reference__stats .pause__stat').count(),6);
  await p.locator('.pause-reference__footer').getByRole('button',{name:'Voltar',exact:true}).click();assert.equal(await p.locator('.pause-reference__detail').isVisible(),false);
  await p.setViewportSize({width:960,height:540});
  // setViewportSize confirma o viewport, não o listener resize de fitStage.
  // Esperar a escala aplicada antes de medir mantém a mesma tolerância geométrica.
  await p.waitForFunction(()=>Math.abs(document.querySelector('[data-pause-action="resume"]').getBoundingClientRect().width-379*.75)<1);
  const row=await p.locator('[data-pause-action="resume"]').boundingBox();assert.ok(Math.abs(row.width-379*.75)<1);assert.ok(Math.abs(row.y-157*.75)<1);
  await p.locator('.pause-reference__footer').getByRole('button',{name:'Voltar',exact:true}).click();assert.equal(await p.evaluate(()=>__xfcMatch.world.isPaused()),false);
  assert.equal(await p.locator('.hud__scoreboard').getAttribute('data-same-board'),'original');assert.ok((await p.locator('.hud__scoreboard').boundingBox()).x<100);
  assert.deepEqual(errors,[]);
 }finally{await b.close();server.close();}
});
