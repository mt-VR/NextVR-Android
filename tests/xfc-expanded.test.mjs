import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { FIFA_MEMBERS } from '../xfc-game/src/data/fifa-members.js';
import { FIFA_NATIONAL_TEAMS, NATIONAL_TEAMS, getNationalTeam } from '../xfc-game/src/data/worldcup.js';
import * as T from '../xfc-game/src/data/tournament.js';
import { runningCycle,runningLegPose } from '../xfc-game/src/match3d/football-actions.js';
import {steerPlayer} from '../xfc-game/src/match3d/movement.js';
import {startXfcServer} from '../xfc-game/serve.mjs';
import {launchOrSkip} from './support/chromium.mjs';
function finish(t,win=true){
  for(let guard=0;guard<100&&!t.champion;guard++){
    T.simulateRound(t,{random:()=>.37});const f=T.nextTournamentFixture(t);if(!f)continue;
    const home=(f.home===t.userTeamId)===win;
    T.recordTournamentResult(t,f.id,home?5:0,home?0:5,{random:()=>.37});
    t=JSON.parse(JSON.stringify(t));
  }
  assert.ok(t.champion,'campeão alcançado após salvar/recarregar cada partida');return t;
}
test('211 associações únicas, seis confederações, bandeiras locais e elencos honestos',()=>{
  assert.equal(FIFA_MEMBERS.length,211);assert.equal(new Set(FIFA_MEMBERS.map(t=>t.id)).size,211);
  assert.deepEqual(Object.fromEntries(['CAF','AFC','UEFA','CONCACAF','CONMEBOL','OFC'].map(c=>[c,FIFA_MEMBERS.filter(t=>t.confederation===c).length])),{CAF:54,AFC:46,UEFA:55,CONCACAF:35,CONMEBOL:10,OFC:11});
  for(const t of FIFA_NATIONAL_TEAMS){assert.ok(fs.existsSync(new URL(`../xfc-game/assets/flags/${t.flagCode}.svg`,import.meta.url)));assert.equal(t.players.length,11);assert.ok(t.players.every(p=>Number.isFinite(p.rating)));if(!NATIONAL_TEAMS.some(n=>n.id===t.id)){assert.equal(t.squadSource,'fictional');assert.ok(t.players.every(p=>p.name.startsWith('Atleta ')));}else assert.deepEqual(t.players,NATIONAL_TEAMS.find(n=>n.id===t.id).players);}
  for(const id of ['scotland','northern-ireland','kosovo','gibraltar','curacao','south-sudan'])assert.ok(getNationalTeam(id),id);
});
test('pools ampliados: Brasil 16, Champions 40, Libertadores personalizada 56, América só CONMEBOL',()=>{
  assert.equal(T.getCompetition('copa-do-brasil').pool.length,16);assert.equal(T.getCompetition('uefa-champions-league').pool.length,40);
  const mixed=T.getCompetition('conmebol-libertadores').pool;assert.equal(mixed.length,56);assert.ok(mixed.includes('real-madrid')&&mixed.includes('flamengo'));
  const america=T.getCompetition('copa-america').pool;assert.equal(america.length,10);assert.ok(america.every(id=>getNationalTeam(id).confederation==='CONMEBOL'));
});
test('211 participantes: 83 preliminares + 45 passes, ninguém some, 210 jogos e campeão',()=>{
  for(const win of [true,false]){
    const initial=T.createTournament('world-cup',{teamId:'scotland',random:()=>.37});assert.equal(initial.fixtures.length,83);assert.equal(initial.byes.r256.length,45);
    assert.equal(new Set([...initial.fixtures.flatMap(f=>[f.home,f.away]),...initial.byes.r256]).size,211);
    const t=finish(initial,win);assert.equal(t.fixtures.length,210);assert.ok(t.fixtures.every(f=>f.played));assert.equal(t.champion==='scotland',win);
    const eliminated=t.fixtures.map(f=>f.winner===f.home?f.away:f.home);assert.equal(new Set(eliminated).size,210);assert.ok(!eliminated.includes(t.champion));
  }
});
test('usuário que recebe passe direto obtém partida da fase de 128 sem bloquear avanço',()=>{
  const t=T.createTournament('world-cup',{random:()=>.4});t.userTeamId=t.byes.r256[0];T.simulateRound(t,{random:()=>.3});assert.equal(T.nextTournamentFixture(t).stage,'r128');assert.equal(finish(t).champion,t.userTeamId);
});
test('todas as competições ampliadas concluem após reload; placar repetido é idempotente',()=>{
  for(const c of T.COMPETITIONS){const t=finish(T.createTournament(c.id,{random:()=>.38}));assert.ok(T.isTournamentValid(t));const snapshot=JSON.stringify(t);T.recordTournamentResult(t,t.fixtures[0].id,9,9);assert.equal(JSON.stringify(t),snapshot);}
});
test('saves reais v0.5.23 mantêm seus pools/formatos e chegam ao fim, sem migração destrutiva',()=>{
  const saves=JSON.parse(fs.readFileSync(new URL('./fixtures/tournaments-v0523.json',import.meta.url)));
  for(const save of saves){const teams=[...save.teams],groups=JSON.stringify(save.groups);assert.ok(T.isTournamentValid(save));const t=finish(save);assert.deepEqual(t.teams,teams);assert.equal(JSON.stringify(t.groups),groups);if(t.competitionId==='copa-do-brasil')assert.equal(t.fixtures.length,3);if(t.competitionId==='brasileirao')assert.equal(t.fixtures.length,30);if(t.competitionId==='world-cup')assert.equal(t.teams.length,32);}
});
test('apoio tem velocidade constante, ciclo considera altura e aceleração é progressiva',()=>{
  const a=runningLegPose(.05),b=runningLegPose(.1),c=runningLegPose(.15);assert.ok(Math.abs((a.z-b.z)-(b.z-c.z))<1e-10);
  assert.ok(runningCycle(1,1.1).distance>runningCycle(1,.9).distance);
  function accelerate(hz){let p={x:0,z:0,vx:0,vz:0};for(let i=0;i<hz;i++){steerPlayer(p,40,0,1/hz,7);if(i===0)assert.ok(p.vx<.4);}return p;}
  const p=accelerate(60),q=accelerate(120);assert.ok(p.vx>6&&p.vx<7);assert.ok(Math.abs(p.x-q.x)<.08);
});
test('UI: 211 seleções pesquisáveis, elenco fictício identificado e 8 artes ligadas a ações reais',{timeout:90000},async t=>{
  const {server,url}=await startXfcServer();const b=await launchOrSkip(t);if(!b){server.close();return;}
  try{const p=await b.newPage({viewport:{width:1280,height:720}}),errors=[];p.on('pageerror',e=>errors.push(e.message));await p.goto(url);
    await p.evaluate(async()=>{(await import('/src/main.js')).go('worldcup',{returnTo:'menu'});});
    await p.locator('[data-panel="play"]').click();assert.equal(await p.locator('.comp__team-card').count(),211);
    await p.getByRole('searchbox').fill('Escocia');assert.equal(await p.locator('.comp__team-card').count(),1);assert.match(await p.locator('.comp__team-card').innerText(),/Fictício/);
    await p.locator('.comp__team-card').click();await p.locator('.comp__selection-preview .comp__cta').click();await p.waitForSelector('.comp__match');
    await p.evaluate(async()=>{const m=await import('/src/main.js');m.state.profile.coins=7777;m.go('ultimate');});assert.match(await p.locator('.ultimate__coin-value').innerText(),/7.777/);
    assert.match(await p.locator('.ut-reference-home').evaluate(n=>getComputedStyle(n).backgroundImage),/home-art/);
    for(const section of ['market','store','events','season','battles','squad']){await p.evaluate(async s=>(await import('/src/main.js')).go('ultimate',{section:s}),section);assert.ok(await p.locator('.ut-main h1').isVisible());}
    assert.equal(await p.locator('.ut-slot').count(),11);assert.match(await p.locator('.ut-pitch').evaluate(n=>getComputedStyle(n).backgroundImage),/squad-field/);
    await p.setViewportSize({width:844,height:390});await p.evaluate(async()=>{(await import('/src/main.js')).go('ultimate');});assert.ok(await p.getByRole('button',{name:'Jogar UT  ›',exact:true}).isVisible());assert.deepEqual(errors,[]);
  }finally{await b.close();server.close();}
});
test('Micah: fase depende do deslocamento, não corre parado; ciclo independe do FPS',{timeout:60000},async t=>{
  const {server,url}=await startXfcServer();const b=await launchOrSkip(t);if(!b){server.close();return;}
  try{const p=await b.newPage();await p.goto(url);const r=await p.evaluate(async()=>{
    const {preloadFootballerPack,createGltfPlayer}=await import('/src/match3d/models.js');await preloadFootballerPack();
    function sample(hz){const m=createGltfPlayer({number:10});for(let i=0;i<180;i++)m.update(1/60,{speed:6,x:0,z:0});const still=m.animation.state().gaitPhase;
      for(let i=1;i<=hz;i++)m.update(1/hz,{speed:6,x:0,z:6*i/hz});const phase=m.animation.state().gaitPhase;
      m.update(1/60,{speed:6,x:0,z:100});const teleport=m.animation.state().gaitPhase;m.dispose();return {still,phase,teleport};}
    return [sample(30),sample(60)];
  });assert.equal(r[0].still,0);assert.ok(Math.abs(r[0].phase-r[1].phase)<1e-7);assert.equal(r[0].teleport,r[0].phase);
  }finally{await b.close();server.close();}
});
