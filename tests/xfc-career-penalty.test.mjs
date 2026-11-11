import {runningCycle,runningArmPose} from '../xfc-game/src/match3d/football-actions.js';
import test from 'node:test';import assert from 'node:assert/strict';
import {TEAMS} from '../xfc-game/src/data/teams.js';
import {TEAM_COUNTRIES,countryTeams,GROUPED_TEAMS} from '../xfc-game/src/data/team-groups.js';
import {careerAppearance,careerOverall,customiseCareer,createCareer,careerFixture,careerTable,careerTeam,beginCareerMatch,settleCareer,improveCareer,nextCareerSeason} from '../xfc-game/src/data/career.js';
import {startXfcServer} from '../xfc-game/serve.mjs';import {launchOrSkip} from './support/chromium.mjs';
test('países: Espanha/Brasil primeiro, cada clube uma vez e catálogo global intacto',()=>{
 assert.deepEqual(TEAM_COUNTRIES.slice(0,2),['Espanha','Brasil']);assert.equal(GROUPED_TEAMS.length,TEAMS.length);assert.equal(new Set(GROUPED_TEAMS.map(t=>t.id)).size,TEAMS.length);
 for(const country of TEAM_COUNTRIES)assert.ok(countryTeams(country).every(t=>t.country===country));assert.equal(TEAMS[0].id,'fc-barcelona');
});
test('carreira: calendário de 14 rodadas, clube próprio, evolução e fechamento idempotente',()=>{
 const before=JSON.stringify(TEAMS),c=createCareer({name:'João',position:'CM',clubId:'fc-barcelona'});
 const all=c.league.rounds.flat();assert.equal(all.length,56);assert.equal(new Set(all.map(g=>g.id)).size,56);
 for(const round of c.league.rounds)assert.equal(new Set(round.flatMap(g=>[g.home,g.away])).size,8);
 assert.equal(careerTeam(c).players.filter(p=>p.id==='career-player').length,1);assert.equal(JSON.stringify(TEAMS),before);
 assert.equal(improveCareer(c,'pace'),false);assert.equal(nextCareerSeason(c),false);
 for(let i=0;i<14;i++){const g=careerFixture(c),p=beginCareerMatch(c);assert.equal(beginCareerMatch(c).id,p.id);assert.equal(settleCareer(c,'wrong',[2,0]),null);
   const score=g.home===c.clubId?[2,0]:[0,2];assert.ok(settleCareer(c,p.id,score,{goals:2,passes:20}));const xp=c.player.xp;assert.equal(settleCareer(c,p.id,score),null);assert.equal(c.player.xp,xp);}
 assert.equal(c.totals.matches,14);assert.equal(c.totals.goals,28);assert.equal(careerTable(c).find(t=>t.id===c.clubId).points,42);assert.equal(careerFixture(c),null);
 assert.ok(c.player.points>0);assert.ok(improveCareer(c,'pace'));assert.equal(c.player.stats.pace,61);assert.equal(improveCareer(c,'__proto__'),false);
 assert.ok(nextCareerSeason(c,'real-madrid'));assert.equal(c.season,2);assert.equal(c.history[0].place,1);assert.equal(c.clubId,'real-madrid');assert.equal(c.round,0);
});
test('carreira: interface salva, atleta controlado fora de casa e resultado chega à carreira',{timeout:120000},async t=>{
 const {server,url}=await startXfcServer();const b=await launchOrSkip(t);if(!b){server.close();return;}
 try{const p=await b.newPage({viewport:{width:1280,height:720}});await p.goto(url);await p.evaluate(async()=>{const m=await import('/src/main.js');m.state.profile.graphicsQuality='low';m.go('menu');});await p.getByRole('button',{name:'CARREIRA DE JOGADOR',exact:true}).click();
 await p.getByLabel('País do clube').selectOption('Espanha');await p.getByLabel('Clube inicial').selectOption('fc-barcelona');await p.getByLabel('Nome do atleta').fill('João Teste');await p.getByLabel('Posição',{exact:true}).selectOption('CM');await p.getByRole('button',{name:'Começar carreira',exact:true}).click();
 assert.ok((await p.locator('.career-identity').innerText()).includes('João Teste'));await p.reload();await p.evaluate(async()=>{(await import('/src/main.js')).go('career');});assert.ok((await p.locator('.career-identity').innerText()).includes('João Teste'));
 await p.getByRole('button',{name:'Jogar próxima partida',exact:true}).click();await p.click('.showcase__enter');await p.waitForSelector('.hud.is-visible');
 const r=await p.evaluate(()=>{const m=__xfcMatch;m.stop();m.world.setPaused(false);m.phase.name='play';m.phase.restart=null;const side=m.world.userSide,hero=m.controlled[side],other=m.teams[side].players.find(x=>x!==hero&&!x.isKeeper);const before=hero?.rosterId;
 m.ball.attachTo(other);m.world.command('switch');const after=m.controlled[side]?.rosterId;
 m.ball.attachTo(hero);m.ball.state.owner=null;m.ball.state.lastTouch=hero;m.ball.state.lastIntentionalTouch=hero;
 m.ball.state.position.set(-52.49,.3,0);m.ball.state.velocity.set(-20,0,0);m.world.tick(1/60);
 m.phase.name='play';m.clock.half=2;m.clock.minutes=91;m.clock.added=0;m.world.tick(1/60);return{side,before,after};});
 assert.equal(r.side,'away');assert.equal(r.before,'career-player');assert.equal(r.after,'career-player');
 await p.waitForTimeout(1100);await p.getByRole('button',{name:'VOLTAR À CARREIRA',exact:true}).click();
 const c=await p.evaluate(()=>JSON.parse(localStorage.getItem('xfc.profile.v1')).career);assert.equal(c.round,1);assert.equal(c.totals.matches,1);assert.equal(c.totals.goals,1);assert.ok(c.player.xp>0);assert.equal(c.pending,null);
 await p.reload();await p.evaluate(async()=>{(await import('/src/main.js')).go('career');});assert.ok((await p.locator('.career-next').innerText()).includes('RODADA 2'));
 }finally{await b.close();server.close();}
});
test('pênalti: 5 metros, espera a confirmação, aproximação sem mover bola, pausa e chute único',{timeout:120000},async t=>{
 const {server,url}=await startXfcServer();const b=await launchOrSkip(t);if(!b){server.close();return;}
 try{const p=await b.newPage({viewport:{width:1280,height:720}});await p.goto(url);await p.evaluate(async()=>{const m=await import('/src/main.js');m.state.profile.graphicsQuality='low';m.go('training',{drill:'penalty'});});
 // A seleção de treino pode abrir antes do exercício.
 if(await p.locator('[data-drill="penalty"].training-select__choice').count())await p.locator('[data-drill="penalty"].training-select__choice').click();
 await p.waitForFunction(()=>window.__xfcTrainingMatch);
 const r=await p.evaluate(()=>{const m=__xfcTrainingMatch;m.stop();m.world.prepareTraining();for(let i=0;i<10;i++)m.world.tick(1/60);const hero=m.controlled.home,start=hero.x,ball=m.ball.state.position.clone();
 m.world.input.moveX=.8;m.world.input.moveZ=.4;for(let i=0;i<60;i++)m.world.tick(1/60);const waiting={x:hero.x,shots:m.world.trainingStats.shots,distance:Math.hypot(hero.x-ball.x,hero.z-ball.z)};
 const accepted=m.world.command('shoot',{strength:.7}),duplicate=m.world.command('shoot');m.world.tick(.1);const moving=hero.x>start,stillBall=m.ball.state.position.distanceTo(ball),before=hero.x;
 m.world.setPaused(true);m.world.tick(.1);const paused=hero.x===before;m.world.setPaused(false);m.world.input.moveX=-1;
 for(let i=0;i<152;i++)m.world.tick(1/120);return{waiting,accepted,duplicate,moving,stillBall,paused,shots:m.world.trainingStats.shots,v:m.ball.state.velocity.toArray(),approach:m.world.penaltyApproach,keeper:m.world.members('away')[0].penaltyDecision?.lane};});
 assert.ok(Math.abs(r.waiting.distance-5)<.001,JSON.stringify(r));assert.equal(r.waiting.shots,0);assert.ok(r.accepted&&r.moving&&r.paused);assert.equal(r.duplicate,false);assert.ok(r.stillBall<1e-7);assert.equal(r.shots,1);assert.equal(r.approach,null);assert.ok(r.v[2]>0);assert.ok([-1,0,1].includes(r.keeper));
 // Reproduz deterministicamente o caminho longo (rebote/bola sem cruzar a linha).
 // O prazo de 3,8 s da tentativa só começa DEPOIS da aproximação de 1,35 s.
 const timeout = await p.evaluate(() => {
   const m = window.__xfcTrainingMatch;
   m.world.prepareTraining();
   const before = { ...m.world.trainingStats };
   const accepted = m.world.command('shoot', { strength: 1 });
   for (let frame = 0; frame < 82; frame++) m.world.tick(1 / 60);
   const released = m.world.penaltyApproach === null && m.world.trainingStats.shots === before.shots + 1;
   // Isola o encerramento por tempo da escolha aleatória do goleiro e da física do rebote.
   m.ball.reset(0, 15);
   for (let frame = 82; frame < 300; frame++) m.world.tick(1 / 60);
   const atFive = { ...m.world.trainingStats };
   for (let frame = 300; frame < 360; frame++) m.world.tick(1 / 60);
   const atSix = { ...m.world.trainingStats };
   for (let frame = 0; frame < 120; frame++) m.world.tick(1 / 60);
   return { accepted, released, before, atFive, atSix, afterReset: { ...m.world.trainingStats } };
 });
 assert.equal(timeout.accepted, true);
 assert.equal(timeout.released, true);
 assert.equal(timeout.atFive.misses, timeout.before.misses, '5 s totais ainda não completam o prazo pós-contato');
 assert.equal(timeout.atSix.misses, timeout.before.misses + 1, 'a tentativa termina até 6 s totais');
 assert.equal(timeout.atSix.shots, timeout.before.shots + 1);
 assert.equal(timeout.atSix.goals, timeout.before.goals);
 assert.equal(timeout.atSix.saves, timeout.before.saves);
 assert.deepEqual(timeout.afterReset, timeout.atSix, 'reinício automático não duplica o resultado');
 }finally{await b.close();server.close();}
});

test('cadência sem tremor de pernas e cotovelo relaxado na corrida',()=>{
 const walkHz=1.4/runningCycle(0).distance,runHz=7/runningCycle(1).distance;
 assert.ok(walkHz>.8&&walkHz<1.5);assert.ok(runHz>1.8&&runHz<2.6);
 for(let i=0;i<120;i++){const arm=runningArmPose(i/120);assert.ok(Math.abs(arm.elbow)<.59);}
});


test('carreira: OVR inicial baixo, cosméticos validados, elenco isolado e save antigo preservado',()=>{
 const catalog=JSON.stringify(TEAMS),c=createCareer({clubId:'santos',position:'CB',appearance:{hairStyle:'mohawk',hairColor:'#c3a16a',bootColor:'#ee4235'}});
 assert.equal(careerOverall(c),57);assert.equal(c.player.position,'CB');
 const team=careerTeam(c),hero=team.players.find(p=>p.id==='career-player');
 assert.equal(hero.pos,'CB');assert.equal(hero.appearance.bootColor,'#ee4235');assert.equal(hero.appearance.hairStyle,'mohawk');
 assert.equal(JSON.stringify(TEAMS),catalog);
 assert.equal(careerAppearance({hairStyle:'__proto__',bootColor:'invalid'}).hairStyle,'short');
 assert.equal(careerAppearance({bootColor:'invalid'}).bootColor,'#171b20');
 const old=JSON.parse(JSON.stringify(c));delete old.player.appearance;old.player.stats.pace=84;
 assert.equal(careerTeam(old).players.find(p=>p.id==='career-player').stats.pace,84);
 assert.equal(careerTeam(old).players.find(p=>p.id==='career-player').appearance.hairStyle,'short');
 beginCareerMatch(c);assert.equal(customiseCareer(c,{position:'CM'}),false);assert.equal(c.player.position,'CB');
});

test('carreira referência: criação, cabelo/chuteira salvos, painéis e aparência real na partida',{timeout:120000},async t=>{
 const {server,url}=await startXfcServer();const b=await launchOrSkip(t);if(!b){server.close();return;}
 try{const p=await b.newPage({viewport:{width:1280,height:720}}),errors=[];p.on('pageerror',e=>errors.push(e.message));await p.goto(url);
 await p.evaluate(async()=>{const m=await import('/src/main.js');m.state.profile.graphicsQuality='low';m.go('career');});
 assert.equal(await p.locator('.ref-art').getAttribute('src'),'assets/ui/career/reference.png');
 await p.getByLabel('País do clube').selectOption('Espanha');await p.getByLabel('Clube inicial').selectOption('real-madrid');
 await p.getByLabel('Nome do atleta').fill('Atleta Teste');await p.getByLabel('Posição',{exact:true}).selectOption('CB');
 await p.getByLabel('Cabelo',{exact:true}).selectOption('mohawk');await p.getByLabel('Chuteira',{exact:true}).selectOption('#ee4235');
 await p.getByRole('button',{name:'Começar carreira',exact:true}).click();
 assert.ok((await p.locator('.career-club').textContent()).includes('Real Madrid'));assert.equal(await p.locator('.career-rating strong').textContent(),'57');
 for(const label of ['Meu Jogador','Estatísticas','Objetivos','Agenda','Configurações']){
   await p.getByRole('button',{name:label,exact:true}).first().click();assert.ok(await p.locator('.career-panel').isVisible());await p.getByLabel('Fechar painel',{exact:true}).click();
 }
 await p.getByRole('button',{name:'Personalização',exact:true}).click();await p.getByLabel('Chuteira',{exact:true}).selectOption('#b3ef36');await p.getByRole('button',{name:'Salvar personalização',exact:true}).click();
 await p.reload();await p.evaluate(async()=>{(await import('/src/main.js')).go('career');});
 const c=await p.evaluate(()=>JSON.parse(localStorage.getItem('xfc.profile.v1')).career);assert.equal(c.player.appearance.bootColor,'#b3ef36');assert.equal(c.player.appearance.hairStyle,'mohawk');assert.equal(c.clubId,'real-madrid');
 await p.getByRole('button',{name:'Jogar próxima partida',exact:true}).click();await p.click('.showcase__enter');await p.waitForSelector('.hud.is-visible');
 const hero=await p.evaluate(()=>{const m=window.__xfcMatch;m.stop();const h=m.controlled[m.world.userSide];return{id:h.rosterId,role:h.role,look:h.model.root.userData.appearance,model:h.model.root.userData.modelId,ovr:h.ovr};});
 assert.equal(hero.id,'career-player');assert.equal(hero.role,'CB');assert.equal(hero.model,'xfc-footballer-glb');assert.equal(hero.look.bootColor,'#b3ef36');assert.equal(hero.look.hairStyle,'mohawk');assert.equal(hero.ovr,57);assert.deepEqual(errors,[]);
 }finally{await b.close();server.close();}
});

test('Kick Off separado: países, uniformes dos dois lados, retorno e Jogo Rápido preservado',{timeout:120000},async t=>{
 const {server,url}=await startXfcServer();const b=await launchOrSkip(t);if(!b){server.close();return;}
 try{const p=await b.newPage({viewport:{width:1280,height:720}}),errors=[];p.on('pageerror',e=>errors.push(e.message));await p.goto(url);
 await p.evaluate(async()=>{(await import('/src/main.js')).go('menu');});await p.locator('[data-menu-item="kickoff"]').click();
 assert.equal(await p.locator('.kickoff-art').getAttribute('src'),'assets/ui/kickoff/teams.jpg');
 await p.getByLabel('País do mandante').selectOption('Brasil');await p.getByLabel('Próximo time (mandante)',{exact:true}).click();
 const names=await p.locator('.team-card__name').allTextContents();assert.ok(names[0].includes('Paraná'));
 await p.getByLabel('Duração da partida',{exact:true}).selectOption('3');await p.getByRole('button',{name:'Uniformes →',exact:true}).click();
 await p.waitForFunction(()=>document.querySelector('.kickoff-models')?.dataset.ready==='true');assert.equal(await p.locator('.kickoff-kit-shirt').count(),6);
 assert.equal(await p.getByRole('button',{name:'Continuar →',exact:true}).isEnabled(),false);
 await p.getByLabel('Próximo uniforme (mandante)',{exact:true}).click();await p.getByLabel('Confirmar uniforme (mandante)',{exact:true}).click();
 await p.getByLabel('Próximo uniforme (visitante)',{exact:true}).click();await p.getByLabel('Confirmar uniforme (visitante)',{exact:true}).click();
 const selection=await p.evaluate(async()=>{const {state}=await import('/src/main.js');return{...state.selection,kits:{...state.kits}};});assert.equal(selection.kits[selection.home],1);assert.equal(selection.kits[selection.away],1);
 await p.getByRole('button',{name:'Continuar →',exact:true}).click();await p.waitForSelector('.screen--stadiums');await p.keyboard.press('Escape');await p.waitForSelector('.kickoff-kits');await p.keyboard.press('Escape');
 assert.deepEqual(await p.locator('.team-card__name').allTextContents(),names);assert.equal(await p.getByLabel('Duração da partida',{exact:true}).inputValue(),'3');
 await p.keyboard.press('Escape');await p.locator('[data-menu-item="friendly"]').click();assert.equal(await p.locator('.ref-art').getAttribute('src'),'assets/ui/quick/field.png');assert.equal(await p.locator('.selection-shirt').count(),2);
 assert.deepEqual(errors,[]);
 }finally{await b.close();server.close();}
});
