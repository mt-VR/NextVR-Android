import test from 'node:test';
import assert from 'node:assert/strict';
import {offsidePosition,offsideExempt} from '../xfc-game/src/match3d/offside.js';
import {firstBallContact} from '../xfc-game/src/match3d/ball-contact.js';
import {createTeamAI} from '../xfc-game/src/match3d/ai.js';
import {FORMATION_433} from '../xfc-game/src/match3d/constants.js';
import {startXfcServer} from '../xfc-game/serve.mjs';
import {launchOrSkip} from './support/chromium.mjs';

test('impedimento usa penúltimo adversário, bola e meio-campo, em ambos sentidos',()=>{
 for(const sign of [1,-1]){
  const rivals=[30,52,10].map(x=>({active:true,x:x*sign}));
  const at=(x,ball=0)=>offsidePosition({active:true,x:x*sign},{x:ball*sign},rivals,sign);
  assert.equal(at(40),true);assert.equal(at(30),false);assert.equal(at(30.1),false);assert.equal(at(40,41),false);assert.equal(at(-1),false);
  rivals[0].active=false;assert.equal(at(20),true);
 }
 for(const kind of ['corner','throwin','goalkick','kickoff'])assert.equal(offsideExempt(kind),true);
 for(const kind of ['freekick','penalty',null])assert.equal(offsideExempt(kind),false);
});
test('contato varre o segmento, escolhe primeiro corpo e ignora posição atrasada da malha',()=>{
 const near={active:true,x:3,z:0,root:{position:{x:99,z:20}}},far={active:true,x:7,z:0};
 const from={x:0,y:.11,z:0},to={x:10,y:.11,z:0};
 assert.equal(firstBallContact(from,to,[far,near]).player,near);
 assert.equal(firstBallContact(from,to,[near,far],{ignore:near}).player,far);
 assert.equal(firstBallContact({...from,y:3},{...to,y:3},[near,far]),null);
 assert.equal(firstBallContact(from,to,[{...near,z:2}]),null);
 assert.equal(firstBallContact(from,to,[{...near,active:false}]),null);
 assert.equal(firstBallContact({x:3,y:.11,z:0},{x:3,y:.11,z:0},[near]).player,near);
 assert.equal(firstBallContact({x:3,y:3,z:0},{x:3,y:0,z:0},[near]).player,near);
 // Altura no ponto de contato, não altura no fim do frame.
 assert.equal(firstBallContact({x:0,y:3,z:0},{x:10,y:0,z:0},[near,far]).player,far);
});
test('os quatro defensores continuam ajustando apoio depois de chegar à formação; humano imóvel',()=>{
 const make=(slot,index,side)=>({...slot,index,side,id:side+index,active:true,isKeeper:slot.role==='GK',isGK:slot.role==='GK',x:slot.x*(side==='home'?1:-1),vx:0,vz:0,facing:{x:1,z:0},facingAngle:Math.PI/2,root:{rotation:{y:0}}});
 const home=FORMATION_433.map((s,i)=>make(s,i,'home')),away=FORMATION_433.map((s,i)=>make(s,i,'away')),owner=home.find(p=>p.role==='ST');
 const world={members:s=>s==='home'?home:away,ball:{state:{owner,position:{x:30,y:.11,z:5},velocity:{x:0,y:0,z:0}}},isPlayable:()=>true,isUserControlled:p=>p===owner,rng:()=>.5,openSpace:()=>10,kickBall(){},shootBall(){},tackle(){},diveKeeper(){}};
 const ai=createTeamAI({side:'home',world}),backs=home.filter(p=>['CB','LB','RB'].includes(p.role));assert.equal(backs.length,4);
 for(let i=0;i<900;i++)ai.update(1/60);
 const start=backs.map(p=>({x:p.x,z:p.z})),human={x:owner.x,z:owner.z},travel=backs.map(()=>0);
 for(let i=0;i<300;i++){ai.update(1/60);backs.forEach((p,j)=>{travel[j]+=Math.hypot(p.x-start[j].x,p.z-start[j].z);start[j]={x:p.x,z:p.z};});}
 for(const d of travel)assert.ok(d>1,`defensor acompanha a jogada: ${d}`);assert.deepEqual({x:owner.x,z:owner.z},human);
});
test('partida: passes de 95m chegam, adversário intercepta, bandeira acompanha impedido e apita na recepção',{timeout:120000},async t=>{
 const {server,url}=await startXfcServer();const b=await launchOrSkip(t);if(!b){server.close();return;}
 try{
  const p=await b.newPage({viewport:{width:1280,height:720}}),errors=[];p.on('pageerror',e=>errors.push(e.message));await p.goto(url);
  await p.evaluate(async()=>{const m=await import('/src/main.js');m.state.profile.graphicsQuality='low';m.go('play',{home:'fc-barcelona',away:'real-madrid'});});await p.click('.showcase__enter');await p.waitForSelector('.hud.is-visible');
  const result=await p.evaluate(()=>{
   const m=__xfcMatch;m.stop();m.world.setPaused(false);m.world.isUserControlled=()=>true;
   const all=[...m.teams.home.players,...m.teams.away.players],home=m.teams.home.players.filter(p=>!p.isKeeper),away=m.teams.away.players.filter(p=>!p.isKeeper),passes=[];
   function reset(){for(const p of all){p.active=false;p.vx=p.vz=0;p.offsideFlagUntil=0;}m.ball.reset();m.phase.name='play';m.phase.restart=null;}
   function place(p,x,z=0){p.active=true;p.x=x;p.z=z;p.facing.set?.(1,0,0);}
   function flight(){for(let i=0;i<1800&&!m.ball.state.owner;i++)m.ball.update(1/120,all);}
   for(const side of ['home','away'])for(const distance of [5,50,95]){
    reset();const sign=side==='home'?1:-1,[from,to]=side==='home'?home:away;place(from,-47*sign);place(to,(-47+distance)*sign);m.ball.attachTo(from);m.ball.update(0,all);m.world.kickBall(from,to,{requested:true});const power=Math.hypot(m.ball.state.velocity.x,m.ball.state.velocity.z);flight();passes.push({side,distance,owner:m.ball.state.owner===to,power});
   }
   reset();const [from,to]=home,block=away[0],last=away[1];place(from,0);place(to,45);place(block,15);place(last,51,15);m.ball.attachTo(from);m.ball.update(0,all);m.world.kickBall(from,to,{requested:true});flight();const intercepted=m.ball.state.owner===block;
   reset();place(from,0);place(to,40);place(block,30,10);place(last,51,-10);m.ball.attachTo(from);m.ball.update(0,all);m.world.kickBall(from,to,{requested:true});const playingAtKick=m.phase.name==='play';m.world.tick(1/120);const flag=m.engine.scene.getObjectByName(`offside-flag-${to.id}`),visibleBefore=flag.visible;
   // Defensor recua depois do passe: a decisão continua na posição do toque.
   block.x=45;flight();m.world.tick(1/120);const restart={name:m.phase.name,kind:m.phase.restart?.type,foul:m.phase.restart?.foulKind,side:m.phase.restart?.side},visibleAfter=flag.visible;
   return {passes,intercepted,playingAtKick,visibleBefore,visibleAfter,restart};
  });
  for(const pass of result.passes)assert.ok(pass.owner,JSON.stringify(pass));assert.ok(result.intercepted);assert.ok(result.playingAtKick&&result.visibleBefore&&result.visibleAfter);assert.deepEqual(result.restart,{name:'restart',kind:'freekick',foul:'offside',side:'away'});assert.deepEqual(errors,[]);
 }finally{await b.close();server.close();}
});

test('detalhe do atleta: pele low poly, cabelo sólido compartilhado e orçamento limitado',{timeout:60000},async t=>{
 const {server,url}=await startXfcServer();const b=await launchOrSkip(t);if(!b){server.close();return;}
 try{const p=await b.newPage();await p.goto(url);const r=await p.evaluate(async()=>{
  const {preloadFootballerPack,createGltfPlayer}=await import('/src/match3d/models.js');await preloadFootballerPack();
  const models=['short','curly','bald','curly'].map(hairStyle=>createGltfPlayer({hairStyle,skinTone:'#bd8868',kit:{primary:'#fff',secondary:'#111'},graphics:{surface:true}}));
  const a=models[1].root.getObjectByName('short01'),b=models[3].root.getObjectByName('short01');let body;models[1].root.traverse(o=>{if(o.isMesh&&[].concat(o.material).some(m=>m.name==='Micah | anatomical body.body'))body=o;});
  const result={shared:a.geometry===b.geometry,bones:a.skeleton.bones.length,count:a.geometry.attributes.position.count,bodyCount:body.geometry.attributes.position.count,bald:models[2].root.getObjectByName('short01').geometry.boundingBox.max.y<a.geometry.boundingBox.max.y,finite:[...a.geometry.attributes.position.array,...a.geometry.attributes.skinWeight.array,...body.geometry.attributes.normal.array].every(Number.isFinite)};
  for(const m of models)m.dispose();return result;
 });assert.ok(r.shared&&r.finite);assert.equal(r.bones,22);assert.ok(r.count>0&&r.count<=500);assert.ok(r.bodyCount<5924);assert.equal(r.bald,true);
 }finally{await b.close();server.close();}
});
