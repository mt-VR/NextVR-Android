import test from 'node:test';
import assert from 'node:assert/strict';
import {TEAMS,getTeam} from '../xfc-game/src/data/teams.js';
import {createCareer,careerFixture,careerTeam,beginCareerMatch,careerOverall} from '../xfc-game/src/data/career.js';
import {createManagerCareer,getCareer,careerSchedule,careerNews,settleManager,managerTeam,buyManagerPlayer,saveCareerSlot,loadCareerSlot} from '../xfc-game/src/data/career-services.js';
import {newGamePlan,normalisePlan,plannedTeam,swapPlanPlayer} from '../xfc-game/src/data/game-plan.js';
import {evaluatePassRequest} from '../xfc-game/src/match3d/pass-request.js';
import {startXfcServer} from '../xfc-game/serve.mjs';
import {launchOrSkip} from './support/chromium.mjs';
test('carreiras isoladas, calendário persistente, liquidação e cópias independentes',()=>{
 const profile={career:createCareer({clubId:'santos'}),managerCareer:createManagerCareer('real-madrid','Técnico')};
 assert.equal(getCareer(profile,'player').clubId,'santos');const c=getCareer(profile,'manager');assert.equal(c.managerName,'Técnico');
 const schedule=careerSchedule(c);assert.equal(schedule.length,14);assert.equal(new Set(schedule.map(g=>g.date)).size,14);assert.equal(schedule.find(g=>g.home==='real-madrid').stadiumIndex,6);
 assert.deepEqual(careerSchedule(JSON.parse(JSON.stringify(c))),schedule);
 const g=careerFixture(c),pending=beginCareerMatch(c),budget=c.budget;assert.equal(settleManager(c,'invalid',[2,0]),null);
 const score=g.home===c.clubId?[3,0]:[0,3];assert.ok(settleManager(c,pending.id,score));assert.equal(c.budget,budget+200);assert.equal(settleManager(c,pending.id,score),null);assert.equal(c.budget,budget+200);assert.ok(careerNews(c)[0].includes('vence'));
 assert.equal(profile.career.round,0);assert.equal(careerOverall(profile.career),57);
 assert.ok(saveCareerSlot(profile,'manager'));c.budget=0;assert.ok(loadCareerSlot(profile,0));assert.equal(profile.managerCareer.budget,budget+200);assert.equal(profile.careerKind,'manager');assert.notEqual(profile.managerCareer,profile.careerSlots[0].career);
});
test('contratação real no elenco local, orçamento e não mutação do catálogo',()=>{
 const before=JSON.stringify(TEAMS),c=createManagerCareer('santos'),source=TEAMS.find(t=>t.id!==c.clubId&&t.substitutes?.length),p=source.substitutes.find(p=>p.pos!=='GK');
 const old=c.budget;assert.ok(buyManagerPlayer(c,source.id,p.id));assert.ok(c.budget<old);assert.ok(managerTeam(c).substitutes.some(x=>x.id===p.id));assert.ok(![...managerTeam(c,source.id).players,...managerTeam(c,source.id).substitutes].some(x=>x.id===p.id));assert.equal(buyManagerPlayer(c,source.id,p.id),false);assert.equal(JSON.stringify(TEAMS),before);
 beginCareerMatch(c);assert.equal(buyManagerPlayer(c,source.id,source.substitutes[1].id),false);
});
test('plano: formação, instruções, capitão, goleiro e protagonista preservados',()=>{
 const c=createCareer({clubId:'santos',position:'ST'}),team=careerTeam(c),original=JSON.stringify(team),plan=newGamePlan(team),hero=plannedTeam(team,plan,'career-player').players.find(p=>p.id==='career-player');assert.equal(hero.pos,'ST');
 const starter=team.players.find(p=>p.pos!=='GK'&&p.id!=='career-player'),reserve=team.substitutes.find(p=>p.pos!=='GK');assert.ok(swapPlanPlayer(team,plan,starter.id,reserve.id,'career-player'));
 assert.equal(swapPlanPlayer(team,plan,'career-player',reserve.id,'career-player'),false);assert.equal(swapPlanPlayer(team,plan,plan.lineup[0],reserve.id),false);
 plan.formation='3-5-2';plan.preset='press';plan.positions[reserve.id]={x:12,z:8};plan.instructions[reserve.id]='forward';plan.captain=reserve.id;const changed=plannedTeam(team,plan,'career-player');
 assert.equal(changed.players.length,11);assert.equal(changed.players[0].pos,'GK');assert.equal(changed.tactics.press,1.4);assert.equal(changed.plan[reserve.id].x,12);assert.equal(changed.players.find(p=>p.id===reserve.id).instruction,'forward');assert.ok(changed.players.find(p=>p.id===reserve.id).captain);assert.equal(JSON.stringify(team),original);
 const sanitised=normalisePlan(team,{lineup:['invalid','invalid'],formation:'__proto__',preset:'__proto__'});assert.equal(sanitised.lineup.length,11);assert.equal(new Set(sanitised.lineup).size,11);assert.equal(sanitised.formation,'4-3-3');
});
test('pedido de passe obedece perto, longe, marcado e impedido; somente posse inválida recusa',()=>{
 const owner={x:0,z:0,side:'home',active:true},receiver={x:15,z:8,side:'home',active:true};
 const assess=extra=>evaluatePassRequest({owner,receiver,rivals:[],...extra});
 for(const extra of [{},{receiver:{...receiver,x:50}},{receiver:{...receiver,x:1,z:0}},{offside:true},{rivals:[{active:true,x:7.5,z:4}]},{owner:{...owner,x:40},receiver:{...receiver,x:30,z:0}}])assert.equal(assess(extra).accepted,true);
 for(const extra of [{owner:null},{owner:receiver},{owner:{...owner,active:false}},{receiver:{...receiver,side:'away'}}])assert.equal(assess(extra).accepted,false);
});
test('técnico: entrada, criação, agenda, plano aplicado, partida sem trava e retorno salvo',{timeout:180000},async t=>{
 const {server,url}=await startXfcServer();const b=await launchOrSkip(t);if(!b){server.close();return;}
 try{const p=await b.newPage({viewport:{width:1280,height:720}}),errors=[];p.on('pageerror',e=>errors.push(e.message));await p.goto(url);
 await p.evaluate(async()=>{const m=await import('/src/main.js');m.state.profile.graphicsQuality='low';m.go('career');});
 assert.equal(await p.locator('.season-entry').count(),1);assert.equal(await p.locator('canvas').count(),0);await p.getByRole('button',{name:'Carreira de Técnico',exact:true}).click();
 await p.getByLabel('Nome do técnico').fill('Técnico Teste');await p.getByLabel('País do clube').selectOption('Espanha');await p.getByLabel('Clube inicial').selectOption('real-madrid');await p.getByRole('button',{name:'Começar carreira',exact:true}).click();assert.equal(await p.locator('.season-journey').count(),1);await p.getByRole('button',{name:'Continuar Carreira',exact:true}).click();
 assert.equal(await p.locator('.season-hub').count(),1);await p.getByRole('button',{name:'Calendário',exact:true}).click();assert.equal(await p.locator('.season-schedule-row').count(),14);assert.equal(await p.locator('.season-schedule-row.is-next').count(),1);await p.getByRole('button',{name:'Próximo dia ›',exact:true}).click();assert.ok((await p.locator('.season-agenda + .season-panel').textContent()).includes('Sem partida'));await p.keyboard.press('Escape');
 await p.getByRole('button',{name:'Vamos Jogar',exact:true}).click();assert.equal(await p.getByRole('button',{name:'Jogar partida',exact:true}).isEnabled(),false);await p.getByRole('button',{name:'Pressão Alta',exact:true}).click();await p.getByLabel('Formação',{exact:true}).selectOption('4-4-2');await p.getByLabel('Instrução individual').selectOption('forward');
 const card=p.locator('.season-plan-pitch .football-card').nth(1);await card.focus();await p.keyboard.press('ArrowRight');await p.getByRole('button',{name:'Confirmar escalação',exact:true}).click();await p.getByRole('button',{name:'Jogar partida',exact:true}).click();await p.click('.showcase__enter');await p.waitForSelector('.hud.is-visible');
 assert.equal(await p.locator('[data-command="request-pass"]').count(),0);assert.equal(await p.locator('[data-command="switch"]').count(),1);
 const result=await p.evaluate(()=>{const m=__xfcMatch;m.stop();m.world.setPaused(false);m.phase.name='play';m.phase.restart=null;const side=m.world.userSide,first=m.controlled[side].rosterId;m.world.switchPlayer();const second=m.controlled[side].rosterId;const info=m.teams[side].info;m.clock.half=2;m.clock.minutes=91;m.clock.added=0;m.world.tick(1/60);return{first,second,tactic:info.tactics,formation:info.formation};});assert.notEqual(result.first,result.second);assert.equal(result.formation,'4-4-2');assert.equal(result.tactic.press,1.4);
 await p.waitForTimeout(1100);await p.getByRole('button',{name:'VOLTAR À CARREIRA',exact:true}).click();assert.equal(await p.locator('.season-hub').count(),1);const save=await p.evaluate(()=>JSON.parse(localStorage.getItem('xfc.profile.v1')));assert.equal(save.managerCareer.round,1);assert.equal(save.managerCareer.pending,null);assert.ok(save.managerCareer.budget>=5100);assert.equal(save.career,undefined);assert.equal(save.coins,1250);
 await p.reload();await p.evaluate(async()=>{(await import('/src/main.js')).go('career');});await p.getByRole('button',{name:'Continuar Carreira',exact:true}).click();await p.getByRole('button',{name:'Continuar Carreira',exact:true}).click();assert.ok((await p.locator('.season-hub-left').textContent()).includes('RODADA 2'));assert.deepEqual(errors,[]);
 }finally{await b.close();server.close();}
});
test('jogador: categorias editam 3D, persistem, passe avaliado e controles móveis sem alterar HUD',{timeout:180000},async t=>{
 const {server,url}=await startXfcServer();const b=await launchOrSkip(t);if(!b){server.close();return;}
 try{const p=await b.newPage({viewport:{width:1280,height:720}}),errors=[];p.on('pageerror',e=>errors.push(e.message));p.on('console',m=>{if(m.type()==='error'&&/Shader|WebGLProgram/.test(m.text()))errors.push(m.text());});await p.goto(url);
 await p.evaluate(async()=>{const m=await import('/src/main.js'),d=await import('/src/data/career.js');m.state.profile.career=d.createCareer({clubId:'real-madrid',position:'ST'});m.state.profile.graphicsQuality='low';m.go('career',{view:'custom'});});
 await p.getByRole('button',{name:'Aparência',exact:true}).click();await p.getByLabel('Altura (cm)').fill('190');await p.getByLabel('Peso (kg)').fill('85');await p.getByLabel('Corpo',{exact:true}).selectOption('strong');await p.getByRole('button',{name:/Cabeça Rosto/}).click();await p.getByLabel('Cabelo',{exact:true}).selectOption('dreads');await p.getByLabel('Cor do cabelo').selectOption('#a3442b');await p.getByLabel('Rosto',{exact:true}).selectOption('broad');await p.getByLabel('Barba',{exact:true}).selectOption('full');await p.getByLabel('Bigode',{exact:true}).selectOption('classic');await p.getByLabel('Sobrancelhas').selectOption('thick');
 await p.getByRole('button',{name:/Uniforme Camisa/}).click();await p.getByLabel('Uniforme',{exact:true}).selectOption('1');await p.getByLabel('Meião',{exact:true}).selectOption('short');await p.getByRole('button',{name:/Acessórios Chuteiras/}).click();await p.getByLabel('Luvas',{exact:true}).selectOption('black');await p.getByLabel('Munhequeira').selectOption('white');await p.getByLabel('Chuteira',{exact:true}).selectOption('#ee4235');await p.getByRole('button',{name:/Animações Sua/}).click();await p.getByLabel('Comemoração').selectOption('wide');
 await p.waitForFunction(()=>{const c=document.querySelector('canvas');return c?.dataset.appearance&&JSON.parse(c.dataset.appearance).celebration==='wide';});await p.getByRole('button',{name:'Testar comemoração',exact:true}).click();await p.getByRole('button',{name:'Salvar personalização',exact:true}).click();await p.getByRole('button',{name:'Voltar',exact:true}).click();
 await p.getByRole('button',{name:'Vamos Jogar',exact:true}).click();await p.getByRole('button',{name:'Confirmar escalação',exact:true}).click();await p.getByRole('button',{name:'Jogar partida',exact:true}).click();await p.click('.showcase__enter');await p.waitForSelector('.hud.is-visible');
 const result=await p.evaluate(()=>{const m=__xfcMatch;m.stop();m.world.setPaused(false);m.phase.name='play';m.phase.restart=null;const side=m.world.userSide,hero=m.controlled[side],owner=m.teams[side].players.find(p=>p!==hero&&!p.isKeeper);for(const p of m.world.members(side==='home'?'away':'home'))p.active=false;owner.x=0;owner.z=0;hero.x=12;hero.z=6;hero.passRequestUntil=0;m.ball.attachTo(owner);const ok=m.world.command('request-pass'),passOwner=m.ball.state.owner;const locked=m.controlled[side]===hero;hero.passRequestUntil=0;m.ball.attachTo(owner);hero.x=50;const refused=m.world.command('request-pass');const same=m.ball.state.owner===owner;m.world.setPaused(true);const paused=m.world.command('request-pass');const model=hero.model;return{ok,passOwner:passOwner?.id||null,locked,refused,same,paused,look:model.root.userData.appearance,height:model.root.userData.targetHeight,headWidth:model.bones.head.scale.x,kit:m.teams[side].kit.id,wrist:!!model.root.getObjectByName('xfc-career-wristband')};});
 assert.ok(result.ok&&result.locked&&!result.same&&result.wrist);assert.equal(result.passOwner,null);assert.equal(result.refused,true);assert.equal(result.paused,false);assert.equal(result.height,1.9);assert.equal(result.headWidth,1.05);assert.equal(result.look.hairStyle,'dreads');assert.equal(result.look.socks,'short');assert.equal(result.look.gloves,'black');assert.equal(result.look.beard,'full');assert.equal(result.look.celebration,'wide');
 assert.equal(await p.locator('[data-command="request-pass"]').textContent(),'PEDIR PASSE');assert.equal(await p.locator('.hud__scoreboard').count(),1);
 await p.setViewportSize({width:844,height:390});await p.waitForFunction(()=>innerWidth===844&&Number(document.querySelector('.app').style.getPropertyValue('--stage-scale'))<1);const bounds=await p.locator('.ctrl-btn').evaluateAll(nodes=>nodes.map(n=>{const r=n.getBoundingClientRect();return{x:r.x,y:r.y,right:r.right,bottom:r.bottom,width:r.width};}));for(const r of bounds){assert.ok(r.x>=0&&r.y>=0&&r.right<=844&&r.bottom<=390,JSON.stringify(r));assert.ok(r.width<70,'botões sem cobrir o campo');}
 assert.deepEqual(errors,[]);
 }finally{await b.close();server.close();}
});
test('arquivos de carreira: entrada → jornada → central Mbappé, personalização original e volta correta',{timeout:120000},async t=>{
 const {server,url}=await startXfcServer();const b=await launchOrSkip(t);if(!b){server.close();return;}
 try{const p=await b.newPage({viewport:{width:1280,height:720}}),errors=[];p.on('pageerror',e=>errors.push(e.message));await p.goto(url);
 const saved=await p.evaluate(async()=>{const m=await import('/src/main.js'),d=await import('/src/data/career.js');const c=d.createCareer({clubId:'santos',name:'Save preservado'});const match=d.beginCareerMatch(c);d.settleCareer(c,match.id,[2,1],{passes:5});m.state.profile.career=c;m.state.profile.graphicsQuality='low';m.go('career');return JSON.stringify(c);});
 const art=()=>p.locator('.career-reference-art').getAttribute('src');
 assert.equal(await art(),'assets/ui/season/entry.png');assert.equal(await p.locator('.season-choices').count(),0);assert.equal(await p.locator('canvas').count(),0);
 await p.getByRole('button',{name:'Continuar Carreira',exact:true}).click();assert.equal(await art(),'assets/ui/season/agenda.png');assert.equal(await p.getByRole('button',{name:'Vamos Jogar',exact:true}).count(),0);
 await p.getByRole('button',{name:'Agenda de Jogos',exact:true}).click();assert.equal(await p.locator('.season-schedule-row').count(),14);await p.keyboard.press('Escape');assert.equal(await art(),'assets/ui/season/agenda.png');
 await p.getByRole('button',{name:'Continuar Carreira',exact:true}).click();assert.equal(await art(),'assets/ui/season/hub.png');assert.match(await p.locator('.career-reference-art').getAttribute('alt'),/Mbappé/);assert.match(await p.locator('.career-reference-last').textContent(),/2 – 1/);assert.match(await p.locator('.career-reference-next').textContent(),/RODADA 2/);
 await p.getByRole('button',{name:'Personalizar',exact:true}).click();assert.equal(await art(),'assets/ui/season/customise.png');assert.equal(await p.locator('.career-reference-hit[data-category]').count(),6);assert.equal(await p.locator('canvas').count(),0,'a arte do menu não é substituída por outro layout');
 await p.getByRole('button',{name:'Cabeça',exact:true}).click();await p.waitForSelector('canvas[data-ready=true]');assert.ok(await p.getByLabel('Cabelo',{exact:true}).isVisible());await p.getByRole('button',{name:'Cancelar',exact:true}).click();assert.equal(await art(),'assets/ui/season/customise.png');
 await p.keyboard.press('Escape');assert.equal(await art(),'assets/ui/season/hub.png');await p.keyboard.press('Escape');assert.equal(await art(),'assets/ui/season/agenda.png');await p.keyboard.press('Escape');assert.equal(await art(),'assets/ui/season/entry.png');
 assert.equal(await p.evaluate(async()=>JSON.stringify((await import('/src/main.js')).state.profile.career)),saved,'navegação não recria nem altera o save');
 // Mesmo arquivo e mesma proporção em palco 16:9, ultrawide e celular.
 for(const viewport of [{width:1920,height:720},{width:844,height:390}]){
  await p.setViewportSize(viewport);await p.waitForFunction(w=>innerWidth===w&&Math.abs(parseFloat(document.querySelector('.app').style.getPropertyValue('--stage-scale'))-Math.min(innerWidth/1280,innerHeight/720))<.001&&parseInt(document.querySelector('.app').style.getPropertyValue('--stage-w'))===Math.round(innerWidth/Math.min(innerWidth/1280,innerHeight/720)),viewport.width);
  for(const view of ['entry','journey','hub','custom']){await p.evaluate(async view=>(await import('/src/main.js')).go('career',{view}),view);await p.waitForFunction(()=>document.querySelector('.career-reference-art')?.complete);const r=await p.locator('.career-reference-art').evaluate(img=>{const b=img.getBoundingClientRect();return{ratio:b.width/b.height,source:img.naturalWidth/img.naturalHeight,left:b.left,right:b.right,bottom:b.bottom,fit:getComputedStyle(img).objectFit};});assert.ok(Math.abs(r.ratio-r.source)<.002,JSON.stringify(r));assert.equal(r.fit,'contain');assert.ok(r.left>=-1&&r.right<=viewport.width+1&&r.bottom<=viewport.height+1,JSON.stringify(r));}
 }
 assert.deepEqual(errors,[]);
 }finally{await b.close();server.close();}
});
test('carregar cópia abre a jornada antes da central, sem perder o save atual',{timeout:60000},async t=>{
 const {server,url}=await startXfcServer();const b=await launchOrSkip(t);if(!b){server.close();return;}
 try{const p=await b.newPage({viewport:{width:1280,height:720}});await p.goto(url);await p.evaluate(async()=>{const m=await import('/src/main.js'),d=await import('/src/data/career.js'),s=await import('/src/data/career-services.js');m.state.profile.career=d.createCareer({clubId:'real-madrid',name:'Cópia antiga'});s.saveCareerSlot(m.state.profile,'player');m.state.profile.career.player.name='Atual preservado';m.go('career');});
 await p.getByRole('button',{name:'Carregar Carreira',exact:true}).click();await p.getByRole('button',{name:/Jogador · Real Madrid/}).click();assert.equal(await p.locator('.career-reference-art').getAttribute('src'),'assets/ui/season/agenda.png');assert.match(await p.locator('.career-reference-profile').textContent(),/Cópia antiga/);
 const names=await p.evaluate(async()=>(await import('/src/main.js')).state.profile.careerSlots.map(s=>s.career.player.name));assert.ok(names.includes('Atual preservado'));await p.getByRole('button',{name:'Continuar Carreira',exact:true}).click();assert.equal(await p.locator('.career-reference-art').getAttribute('src'),'assets/ui/season/hub.png');
 }finally{await b.close();server.close();}
});
