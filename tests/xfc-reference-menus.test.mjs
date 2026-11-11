import test from 'node:test';
import assert from 'node:assert/strict';
import { appearanceFor } from '../xfc-game/src/data/appearance.js';
import { KITS } from '../xfc-game/src/data/kits.js';
import { createTournament,simulateRound,nextTournamentFixture,recordTournamentResult,allGroupTables } from '../xfc-game/src/data/tournament.js';
import { startXfcServer } from '../xfc-game/serve.mjs';
import { launchOrSkip } from './support/chromium.mjs';

test('aparência acompanha a identidade, não o índice no elenco; uniformes têm peças independentes',()=>{
  const vini=appearanceFor({name:'Vinícius Jr'}),nation=appearanceFor({fullName:'Vinícius Júnior'}),fede=appearanceFor({name:'Valverde'});
  assert.equal(vini.skinTone,nation.skinTone);assert.equal(vini.hairStyle,'afro');assert.equal(fede.hairStyle,'short');assert.notEqual(vini.skinTone,fede.skinTone);
  assert.equal(appearanceFor({name:'Jogador sem referência'}).source,'default-unverified');
  assert.equal(KITS['real-madrid'][0].shorts,'#f7f7f7');assert.equal(KITS['real-madrid'][0].socks,'#f7f7f7');
  assert.equal(KITS['fc-barcelona'][0].pattern,'stripes');assert.equal(KITS.flamengo[0].pattern,'hoops');
});

test('Brasileirão termina por pontos em turno/returno; Copa do Brasil ampliada tem oitavas até final',()=>{
  for(const id of ['brasileirao','copa-do-brasil']){
    const t=createTournament(id,{random:()=>.31});
    assert.equal(t.fixtures.length,id==='brasileirao'?240:8);
    for(let guard=0;guard<40;guard++){
      simulateRound(t,{random:()=>.31});const f=nextTournamentFixture(t);if(!f)break;
      recordTournamentResult(t,f.id,2,1,{random:()=>.31});
    }
    assert.ok(t.champion);assert.equal(t.stage,'champion');assert.equal(t.fixtures.filter(f=>!f.played).length,0);
    if(id==='brasileirao'){
      assert.ok(t.fixtures.every(f=>f.stage==='group'));assert.ok(allGroupTables(t)[0].table.every(r=>r.played===30));
      assert.equal(t.champion,allGroupTables(t)[0].table[0].id);
    }else assert.deepEqual([...new Set(t.fixtures.map(f=>f.stage))],['r16','qf','sf','final']);
  }
});

test('texturas de pele são isoladas entre jogadores e cabelo alto não altera a cabeça', {timeout:90000},async t=>{
  const {server,url}=await startXfcServer({port:0});const b=await launchOrSkip(t);if(!b){server.close();return;}
  try{const p=await b.newPage();await p.goto(url);
    const r=await p.evaluate(async()=>{
      const {preloadFootballerPack,createGltfPlayer}=await import('/src/match3d/models.js');const {appearanceFor}=await import('/src/data/appearance.js');
      await preloadFootballerPack();
      const make=name=>createGltfPlayer({...appearanceFor({name}),name,number:name==='Valverde'?15:7,kit:{primary:'#fff',secondary:'#dcae47',shorts:'#fff',socks:'#fff',print:'#123'}});
      const material=(m,n)=>{let out;m.body.traverse(o=>{if(o.isMesh)for(const a of [].concat(o.material))if(a.name===n)out=a;});return out;};
      const skin=m=>material(m,'Micah | anatomical body.body').map;
      const a=make('Vinícius Jr'),before=skin(a).image.toDataURL();const b=make('Valverde');
      const c=make('Vinícius Jr');
      const hairHeight=m=>{const g=m.body.getObjectByName('short01').geometry;g.computeBoundingBox();return g.boundingBox.max.y;};
      const result={separate:skin(a).source!==skin(b).source,unchanged:before===skin(a).image.toDataURL(),same:skin(a)===skin(c),difference:before!==skin(b).image.toDataURL(),hairDelta:hairHeight(a)-hairHeight(b),jerseyDifferent:material(a,'Micah | top').map.image.toDataURL()!==material(b,'Micah | top').map.image.toDataURL()};
      a.dispose();b.dispose();c.dispose();return result;
    });
    assert.equal(r.separate,true);assert.equal(r.unchanged,true);assert.equal(r.same,true);assert.equal(r.difference,true);assert.ok(r.hairDelta>.03);assert.equal(r.jerseyDifferent,true);
  }finally{await b.close();server.close();}
});

test('sete cartões abrem fundamentos distintos; goleiro é controlável, escanteio cruza e menus têm voltar', {timeout:180000},async t=>{
  const {server,url}=await startXfcServer({port:0});const b=await launchOrSkip(t);if(!b){server.close();return;}
  try{const p=await b.newPage({viewport:{width:1600,height:720}});const errors=[];p.on('pageerror',e=>errors.push(e.message));
    await p.goto(url);await p.keyboard.press('Enter');await p.click('.launch__enter');
    for(const drill of ['free','shooting','dribble','corner','keeper']){
      await p.click('[data-menu-item="learn"]');await p.waitForSelector('.screen--training-select');
      assert.equal(await p.locator('.training-select__choice').count(),7);
      await p.click(`[data-drill="${drill}"]`);await p.waitForSelector(`.training__stage[data-drill="${drill}"]`);
      const r=await p.evaluate(drill=>{
        const m=window.__xfcTrainingMatch;m.stop();const w=m.world;
        const r={drill:w.trainingDrill,keeper:m.controlled.home.isKeeper,x:m.controlled.home.x,z:m.controlled.home.z};
        if(drill==='keeper'){
          r.dive=w.trainingDive(1);
          for(let i=0;i<100;i++)w.tick(1/60);
          r.shots=w.trainingStats.shots;
        }
        if(drill==='corner'){r.cross=w.trainingCross();r.lift=m.ball.state.velocity.y;r.receiver=m.controlled.home!==m.ball.state.lastIntentionalTouch;}
        if(drill==='dribble')r.cones=m.engine.scene.children.filter(o=>o.name.startsWith('xfc-training-cone-')).length;
        return r;
      },drill);
      assert.equal(r.drill,drill);
      if(drill==='free')assert.ok(Math.abs(r.x)<2);
      if(drill==='shooting')assert.ok(r.x<33);
      if(drill==='dribble')assert.equal(r.cones,6);
      if(drill==='corner'){assert.ok(r.z>30);assert.equal(r.cross,true);assert.ok(r.lift>1);assert.equal(r.receiver,true);}
      if(drill==='keeper'){assert.equal(r.keeper,true);assert.equal(r.dive,true);assert.ok(r.shots>=1);}
      await p.click('.training__exit');await p.waitForSelector('.screen--menu');
    }
    await p.click('[data-menu-item="tournament"]');await p.waitForSelector('.screen--modes');
    assert.equal(await p.locator('.modes__cta').count(),0,'não há o CTA nem o hub roxo intermediário');
    for(const id of ['copa-do-brasil','brasileirao']){
      await p.click(`[data-option="${id}"]`);await p.waitForSelector(`.screen--competition[data-competition="${id}"]`);
      assert.ok(await p.locator('.comp__domestic-reference').isVisible());
      assert.match(await p.locator('.comp__art').evaluate(n=>getComputedStyle(n).backgroundImage),new RegExp(id));
      await p.keyboard.press('Escape');await p.waitForSelector('.screen--modes');
    }
    await p.keyboard.press('Escape');await p.waitForSelector('.screen--menu');await p.click('[data-menu-item="grounds"]');
    await p.waitForSelector('.screen--stadiums');await p.getByRole('button',{name:'Mais estádios',exact:true}).click();
    assert.ok(await p.getByRole('button',{name:'MorumBis',exact:true}).isVisible(),'os estádios anteriores continuam na segunda página');
    await p.getByRole('button',{name:'Voltar',exact:true}).click();await p.waitForSelector('.screen--menu');
    assert.deepEqual(errors,[]);
  }finally{await b.close();server.close();}
});
