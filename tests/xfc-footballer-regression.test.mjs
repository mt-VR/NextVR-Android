import test from 'node:test';
import assert from 'node:assert/strict';
import { launchOrSkip } from './support/chromium.mjs';
import { startXfcServer } from '../xfc-game/serve.mjs';

test('modelo importado: rosto acompanha a velocidade nos quatro sentidos e mantém pele/roupa separadas', { timeout: 90000 }, async t => {
  const { server, url } = await startXfcServer({ port: 0 });
  const browser = await launchOrSkip(t);
  if (!browser) { server.close(); return; }
  try {
    const page = await browser.newPage();
    await page.goto(url);
    const result = await page.evaluate(async () => {
      const THREE = await import('/vendor/three.module.min.js');
      const { preloadFootballerPack, createGltfPlayer } = await import('/src/match3d/models.js');
      const { faceVelocity } = await import('/src/match3d/movement.js');
      await preloadFootballerPack();
      const model = createGltfPlayer({ kit: { primary: '#ffd800', secondary: '#0044ff' } });
      const player = { root: model.root, facingAngle: 0, facing: new THREE.Vector3(), turnLean: 0 };
      const eyes = model.body.getObjectByName('low-poly');
      const faceDots = [];
      // Measure the ACTUAL skinned eyes, not a declared frontAxis constant.
      for (const [vx, vz] of [[6,0],[-6,0],[0,6],[0,-6]]) {
        Object.assign(player,{ vx,vz });
        for (let frame=0; frame<90; frame++) {
          faceVelocity(player,1/60);
          model.update(1/60,{speed:6,lean:player.turnLean});
        }
        model.root.updateMatrixWorld(true); eyes.skeleton.update();
        const pos = eyes.geometry.attributes.position;
        const center = new THREE.Vector3(); const vertex = new THREE.Vector3();
        for(let i=0;i<pos.count;i++) {
          vertex.fromBufferAttribute(pos,i);eyes.applyBoneTransform(i,vertex);vertex.applyMatrix4(eyes.matrixWorld);center.add(vertex);
        }
        center.multiplyScalar(1/pos.count).sub(model.head.getWorldPosition(new THREE.Vector3()));
        faceDots.push((center.x*vx+center.z*vz)/(Math.hypot(center.x,center.z)*6));
      }
      const colors={};model.body.traverse(o=>{if(o.isMesh)for(const m of [].concat(o.material)) colors[m.name]=m.color.getHexString();});
      // Repeated celebrations must not accumulate additive rotations, even far away.
      model.celebrate(.8);
      for(let i=0;i<120;i++)model.update(1/60,{speed:0,distance:80});
      const gestureAfter=model.animation.state().gesture;
      model.dispose();
      return { faceDots, colors, gestureAfter };
    });
    for (const dot of result.faceDots) assert.ok(dot>.95, `rosto para a frente, não costas: dot=${dot}`);
    assert.equal(result.colors['Micah | top'],'ffd800');
    assert.equal(result.colors['Micah | bottom'],'0044ff');
    assert.equal(result.colors['Micah | anatomical body.body'],'ffffff','textura original da pele, sem tinta do time');
    assert.equal(result.gestureAfter,null,'gestos expiram mesmo longe da câmera');
  } finally { await browser.close(); server.close(); }
});

test('partida real: gol desviado no goleiro celebra o atacante, HUD e jogador controlado usam o autor', { timeout: 120000 }, async t => {
  const { server, url } = await startXfcServer({ port: 0 });
  const browser = await launchOrSkip(t);
  if (!browser) { server.close(); return; }
  try {
    const page=await browser.newPage({viewport:{width:1280,height:720}});
    await page.goto(url);await page.keyboard.press('Enter');
    await page.click('.launch__enter');
    await page.click('.menu__item[data-menu-item="quick"]');
    await page.click('.quick__actions .continue-btn');
    await page.click('.stadiums__card:first-child');
    await page.click('.showcase__enter');
    await page.waitForSelector('.hud.is-visible');
    const result=await page.evaluate(()=>{
      const m=window.__xfcMatch;
      const players=[...m.teams.home.players,...m.teams.away.players];
      const scorer=m.teams.home.players.find(p=>p.role==='ST') || m.teams.home.players.find(p=>!p.isKeeper);
      const keeper=m.teams.away.players.find(p=>p.isKeeper);
      for(const p of players)p.active=false;
      m.phase.name='play';m.phase.restart=null;
      m.ball.attachTo(scorer); // Records the intentional possessor, separate from the deflection.
      m.ball.state.owner=null;
      keeper.active=true;
      keeper.root.position.set(51.7,0,0);
      m.ball.state.position.set(52.0,1.0,0);
      m.ball.state.velocity.set(20,0,0);
      m.ball.update(.001,[keeper]);
      const actualDeflection=m.ball.state.lastTouch===keeper;
      const intentionalAfterDeflection=m.ball.state.lastIntentionalTouch?.id;
      keeper.active=false;
      m.ball.state.position.set(52.45,1.2,0);
      m.ball.state.velocity.set(20,0,0);
      m.ball.state.spin.set(0,0,0);
      m.world.tick(1/60);
      const snapshot=m.world.snapshot();
      return {
        actualDeflection, intentionalAfterDeflection,
        score:snapshot.score,
        scorer:snapshot.scorer?.id,
        expected:scorer.id,
        celebrant:scorer.model.animation.state().gesture,
        keeperGesture:keeper.model.animation.state().gesture,
        controlled:m.controlled.home.id,
        hud:document.querySelector('.hud__banner--goal-card')?.textContent,
        name:scorer.name
      };
    });
    assert.equal(result.actualDeflection,true);
    assert.equal(result.intentionalAfterDeflection,result.expected);
    assert.deepEqual(result.score,[1,0]);
    assert.equal(result.scorer,result.expected);
    assert.equal(result.controlled,result.expected);
    assert.equal(result.celebrant,'celebrate');
    assert.notEqual(result.keeperGesture,'celebrate');
    assert.ok(result.hud.toUpperCase().includes(result.name.toUpperCase()),`HUD deve mostrar ${result.name}: ${result.hud}`);
  } finally {await browser.close();server.close();}
});
