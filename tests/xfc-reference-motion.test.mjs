import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {startXfcServer} from '../xfc-game/serve.mjs';
import {launchOrSkip} from './support/chromium.mjs';
import {runningArmPose,runningLegPose,runningFlight} from '../xfc-game/src/match3d/football-actions.js';

test('abertura usa o PNG original enviado, não uma marca redesenhada',async()=>{
  const data=await readFile(new URL('../xfc-game/assets/ui/quick/loading.png',import.meta.url));
  assert.equal(createHash('sha256').update(data).digest('hex'),'fe690a585efc0a225faad55aaa2a5c8a99d9fa4347c3f45bd7179306210e84f2');
  const source=await readFile(new URL('../xfc-game/src/screens/intro.js',import.meta.url),'utf8');
  assert.ok(!source.includes('xfcWordmark'));assert.ok(source.includes('assets/ui/quick/loading.png'));
});
test('andar mantém braços quietos; correr alterna braços, recupera joelho e tem voo',()=>{
  const walk=[],run=[];let air=0,knee=0;
  for(let i=0;i<120;i++){
    walk.push(runningArmPose(i/120,0).shoulder);run.push(runningArmPose(i/120,1).shoulder);
    assert.ok(Math.abs(runningArmPose(i/120,1).shoulder+runningArmPose(i/120+.5,1).shoulder)<1e-9);
    knee=Math.max(knee,runningLegPose(i/120,1,1).knee);if(runningFlight(i/120,1))air++;
  }
  assert.equal(Math.max(...walk)-Math.min(...walk),0);
  // Balanço de ombro na corrida: 1,2 rad de amplitude (~70° total). Acima disso
  // o braço esticava à frente e a corrida parecia autômato.
  assert.ok(Math.max(...run)-Math.min(...run)>1.1);
  // Recuperação do joelho: o modelo novo levanta o calcanhar e chicoteia a perna
  // à frente, então o pico do joelho fica em ~1,63 rad (antes exigia 1,7+, que
  // era o "joelho alto de marcha"). O voo cobre ~40% do ciclo, não 17–50%.
  assert.ok(knee>1.55&&knee<1.85);assert.ok(air>20&&air<60);
});
test('menus de referência: setas, uniformes, configurações, sorteio sem duplicar e retorno',{timeout:90000},async t=>{
  const {server,url}=await startXfcServer();const b=await launchOrSkip(t);if(!b){server.close();return;}
  try{const p=await b.newPage({viewport:{width:1280,height:720}});await p.goto(url);
    await p.evaluate(async()=>{const m=await import('/src/main.js');m.go('friendly');});
    assert.equal(await p.locator('.selection-shirt').count(),2);
    const first=await p.locator('.team-card__name').first().innerText();
    await p.getByRole('button',{name:'Próximo time (mandante)',exact:true}).click();assert.notEqual(await p.locator('.team-card__name').first().innerText(),first);
    await p.getByRole('button',{name:'Time anterior (mandante)',exact:true}).click();assert.equal(await p.locator('.team-card__name').first().innerText(),first);
    await p.locator('.selection-shirt').first().click();await p.locator('.selection-dialog .quick__kit').nth(1).click();
    const kit=await p.evaluate(async()=>{const m=await import('/src/main.js');return m.state.kits[m.state.selection.home];});assert.equal(kit,1);
    await p.getByRole('button',{name:'COMPLETA',exact:true}).click();await p.getByRole('button',{name:'DIFÍCIL',exact:true}).click();
    await p.getByRole('button',{name:'Continuar',exact:true}).click();await p.waitForSelector('.screen--stadiums');await p.keyboard.press('Escape');await p.waitForSelector('.screen--friendly');
    assert.equal(await p.getByRole('button',{name:'COMPLETA',exact:true}).getAttribute('aria-pressed'),'true');
    assert.equal(await p.getByRole('button',{name:'DIFÍCIL',exact:true}).getAttribute('aria-pressed'),'true');
    // Nova escolha depois de voltar do estádio não pode ser sobrescrita pelos params antigos.
    await p.getByRole('button',{name:'Próximo time (mandante)',exact:true}).click();
    const afterReturn=await p.locator('.team-card__name').allTextContents();
    await p.getByRole('button',{name:'Blusas',exact:true}).click();await p.keyboard.press('Escape');await p.waitForSelector('.screen--friendly');
    assert.deepEqual(await p.locator('.team-card__name').allTextContents(),afterReturn);
    await p.evaluate(async()=>{(await import('/src/main.js')).go('quick');});
    for(let i=0;i<6;i++){await p.getByRole('button',{name:'Sortear times',exact:true}).click();const ids=await p.locator('.selection-team').evaluateAll(es=>es.map(e=>e.dataset.teamId));assert.notEqual(ids[0],ids[1]);}
    const names=await p.locator('.team-card__name').allTextContents();await p.getByRole('button',{name:'Blusas',exact:true}).click();await p.keyboard.press('Escape');
    await p.waitForSelector('.screen--quick');assert.deepEqual(await p.locator('.team-card__name').allTextContents(),names);
    await p.setViewportSize({width:1600,height:720});await p.waitForTimeout(100);
    for(const selector of ['.selection-shirt','.continue-btn','.selection-option'])for(const box of await p.locator(selector).evaluateAll(es=>es.map(e=>{const b=e.getBoundingClientRect();return{x:b.x,y:b.y,right:b.right,bottom:b.bottom};}))){
      assert.ok(box.x>=0&&box.y>=0&&box.right<=1600&&box.bottom<=720,JSON.stringify(box));
    }
  }finally{await b.close();server.close();}
});
test('Micah mede 1,75 m em bind, mantém topologia/UV/rig e braços quietos na caminhada',{timeout:90000},async t=>{
  const {server,url}=await startXfcServer();const b=await launchOrSkip(t);if(!b){server.close();return;}
  try{const p=await b.newPage();await p.goto(url);const r=await p.evaluate(async()=>{
    const T=await import('/vendor/three.module.min.js');const {preloadFootballerPack,createGltfPlayer}=await import('/src/match3d/models.js');await preloadFootballerPack();
    const a=createGltfPlayer({heightScale:1.07}),b=createGltfPlayer({heightScale:.94});
    function bounds(m){const box=new T.Box3(),v=new T.Vector3();m.root.updateMatrixWorld(true);m.body.traverse(o=>{if(!o.isSkinnedMesh)return;o.skeleton.update();const pos=o.geometry.attributes.position;for(let i=0;i<pos.count;i++){v.fromBufferAttribute(pos,i);o.applyBoneTransform(i,v);v.applyMatrix4(o.matrixWorld);box.expandByPoint(v);}});return box.max.y-box.min.y;}
    const heights=[bounds(a),bounds(b)],geometry=[];a.body.traverse(o=>{if(o.isSkinnedMesh)geometry.push({name:o.name,id:o.geometry.uuid,count:o.geometry.attributes.position.count,uv:o.geometry.attributes.uv.count});});
    let shared=0;b.body.traverse(o=>{if(o.isSkinnedMesh&&geometry.some(g=>g.id===o.geometry.uuid))shared++;});
    for(let i=0;i<180;i++)a.update(1/60,{speed:2.6});
    const arms=[],legs=[];for(let i=0;i<120;i++){a.update(1/60,{speed:2.6});arms.push(a.bones.leftArm.rotation.x);legs.push(a.bones.leftLeg.rotation.x);}
    const data={heights,geometry,shared,armRange:Math.max(...arms)-Math.min(...arms),legRange:Math.max(...legs)-Math.min(...legs),id:a.root.userData.modelId};a.dispose();b.dispose();return data;
  });for(const h of r.heights)assert.ok(Math.abs(h-1.75)<.002,`altura real: ${h}`);assert.equal(r.id,'xfc-footballer-glb');assert.ok(r.shared>0);for(const g of r.geometry)assert.equal(g.count,g.uv);
    assert.ok(r.armRange<.01,`braços andando: ${r.armRange}`);assert.ok(r.legRange>.4);
  }finally{await b.close();server.close();}
});
test('pênaltis nos dois gols: somente cobrador/goleiro na área, árbitro fora e marcador plano vermelho',{timeout:120000},async t=>{
  const {server,url}=await startXfcServer();const b=await launchOrSkip(t);if(!b){server.close();return;}
  try{const p=await b.newPage({viewport:{width:1280,height:720}});await p.goto(url);await p.evaluate(async()=>{const m=await import('/src/main.js');m.state.profile.graphicsQuality='low';m.go('play',{home:'fc-barcelona',away:'real-madrid'});});await p.click('.showcase__enter');await p.waitForSelector('.hud.is-visible');
    const r=await p.evaluate(()=>{
      const m=__xfcMatch;m.stop();m.world.setPaused(false);m.world.entrancePlayed=true;
      const all=[...m.teams.home.players,...m.teams.away.players],rows=[];
      for(const [side,sign] of [['home',1],['away',-1]]){
        for(const [i,player]of all.entries()){player.active=true;player.x=sign*45;player.z=(i-10)*.7;player.vx=player.vz=0;}
        m.phase.name='restart';m.phase.timer=0;m.phase.restart={type:'penalty',side,x:sign*41.5,z:0,ready:false};m.ball.state.owner=null;
        m.world.tick(1/60);for(let i=0;i<30;i++)m.world.tick(1/60);
        const inside=all.filter(player=>sign*player.x>36&&Math.abs(player.z)<20.16);
        const referee=m.engine.scene.children.find(o=>o.userData?.appearance?.source==='referee'||o.name==='xfc-referee');
        rows.push({distance:Math.hypot(m.phase.restart.taker.x-m.ball.state.position.x,m.phase.restart.taker.z-m.ball.state.position.z),side,inside:inside.map(x=>({id:x.id,keeper:x.isKeeper})),taker:m.phase.restart?.taker?.id,ready:m.phase.restart?.ready,referee:referee?.position.toArray(),active:all.filter(x=>x.active).length,ball:m.ball.state.position.toArray()});
      }
      const marker=m.engine.scene.getObjectByName('xfc-controlled-marker-2d');
      m.engine.renderer.render(m.engine.scene,m.engine.camera);
      const positions=Array.from(marker.geometry.attributes.position.array);
      return{rows,marker:{vertices:positions.length/3,z:positions.filter((_,i)=>i%3===2),color:marker.material.color.getHex(),angle:marker.quaternion.angleTo(m.engine.camera.quaternion)}};
    });for(const row of r.rows){assert.ok(Math.abs(row.distance-5)<.01);assert.equal(row.active,22);assert.equal(row.ready,true);assert.ok(Math.abs(row.referee[2])>20.16);assert.equal(row.inside.length,2,JSON.stringify(row));assert.ok(row.inside.some(x=>x.id===row.taker));assert.equal(row.inside.filter(x=>x.keeper).length,1);assert.ok(Math.abs(Math.abs(row.ball[0])-41.5)<.05);}
    assert.equal(r.marker.vertices,3);assert.deepEqual(r.marker.z,[0,0,0]);assert.equal(r.marker.color,0xf02338);assert.ok(r.marker.angle<1e-6);
  }finally{await b.close();server.close();}
});
