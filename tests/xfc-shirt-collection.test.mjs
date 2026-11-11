import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {SHIRT_COLLECTION,COLLECTION_CLUBS} from '../xfc-game/src/data/shirt-collection.js';
import {TEAMS,getTeam} from '../xfc-game/src/data/teams.js';
import {kitsOf,kitShirt} from '../xfc-game/src/data/kits.js';
import {launchOrSkip} from './support/chromium.mjs';
import {startXfcServer} from '../xfc-game/serve.mjs';
const root=new URL('../xfc-game/',import.meta.url);

test('coleção: 69 camisas identificadas, 54 clubes, assets locais e nenhuma duplicação de time',()=>{
  assert.equal(SHIRT_COLLECTION.length,69);assert.equal(COLLECTION_CLUBS.length,54);
  assert.equal(new Set(SHIRT_COLLECTION.map(s=>s.number)).size,69);
  for(const shirt of SHIRT_COLLECTION){
    const team=getTeam(shirt.teamId);assert.ok(team);
    assert.equal(TEAMS.filter(t=>t.id===shirt.teamId).length,1);
    const kit=kitsOf(team.id).find(k=>k.id===`collection-${shirt.number}`);
    assert.equal(kitShirt(kit),shirt.shirt);
    const data=readFileSync(new URL(shirt.shirt,root));
    assert.equal(data.subarray(0,8).toString('hex'),'89504e470d0a1a0a');
    assert.ok(existsSync(new URL(team.crest,root)));
  }
  assert.equal(TEAMS.filter(t=>t.squadSource==='generated').length,47);
  for(const t of TEAMS.filter(t=>t.squadSource==='generated'))assert.equal(t.stadium,'Elenco fictício');
});

test('joystick mantido: teclado não zera toque; soltar preserva mira do pênalti', {timeout:90000}, async t=>{
  const {server,url}=await startXfcServer({port:0});const browser=await launchOrSkip(t);
  if(!browser){server.close();return;}
  try{
    const page=await browser.newPage({viewport:{width:1280,height:720}});
    await page.goto(url);await page.keyboard.press('Enter');await page.click('.launch__enter');
    await page.click('[data-menu-item="learn"]');await page.click('[data-drill="penalty"]');
    await page.waitForFunction(()=>window.__xfcTrainingMatch);
    const stick=await page.locator('.controls__stick').boundingBox();
    await page.mouse.move(stick.x+stick.width/2+35,stick.y+stick.height/2);
    await page.mouse.down();
    // Espera a simulação processar o toque: sob carga, 240 ms de parede
    // podem decorrer sem um único frame WebGL. Depois testa a retenção.
    await page.waitForFunction(()=>__xfcTrainingMatch.world.input.moveX>.4&&__xfcTrainingMatch.engine.scene.getObjectByName('xfc-penalty-aim')?.userData.target?.z>1.2,null,{timeout:10000});
    await page.waitForTimeout(240);
    const before=await page.evaluate(()=>({input:__xfcTrainingMatch.world.input.moveX,
      target:{...__xfcTrainingMatch.engine.scene.getObjectByName('xfc-penalty-aim').userData.target}}));
    assert.ok(before.input>.4,'seis ciclos do timer não apagam o toque');
    assert.ok(before.target.z>1.2);
    await page.mouse.up();await page.waitForTimeout(160);
    const after=await page.evaluate(()=>({input:__xfcTrainingMatch.world.input.moveX,
      target:{...__xfcTrainingMatch.engine.scene.getObjectByName('xfc-penalty-aim').userData.target}}));
    assert.equal(after.input,0);assert.deepEqual(after.target,before.target);
  }finally{await browser.close();server.close();}
});
