import test from 'node:test';
import assert from 'node:assert/strict';
import {
  runningLegPose,
  penaltyTarget,
  choosePenaltyLane
} from '../xfc-game/src/match3d/football-actions.js';
import { launchOrSkip } from './support/chromium.mjs';
import { startXfcServer } from '../xfc-game/serve.mjs';

test('passadas: tornozelo segue trajetória limitada, joelho não lança pé para trás', () => {
  let last;
  for (let i = 0; i <= 240; i++) {
    const p = runningLegPose(i / 240);
    const y = -0.44 * Math.cos(p.hip) - 0.42 * Math.cos(p.hip + p.knee);
    const z = -0.44 * Math.sin(p.hip) - 0.42 * Math.sin(p.hip + p.knee);
    assert.ok(Math.abs(z) <= 0.321);
    assert.ok(Math.abs(z - p.z) < 0.005);
    assert.ok(p.knee >= 0 && p.knee < 1.75);
    assert.ok(y >= -0.8 && y <= -0.6);
    assert.ok(Math.abs(p.hip + p.knee + p.ankle) < 1e-8, 'sola nivelada');
    if (last)
      assert.ok(Math.abs(p.hip - last.hip) < 0.06, 'sem salto entre ciclos');
    last = p;
  }
});

test('pênalti: mira contínua e invertida no outro gol; escolhas independentes esquerda/meio/direita', () => {
  assert.deepEqual(
    [0, 0.49, 0.999].map((n) => choosePenaltyLane(() => n)),
    [-1, 0, 1]
  );
  for (const sign of [-1, 1])
    for (const x of [-1, 0, 1]) {
      const target = penaltyTarget(x, 1, sign);
      assert.equal(target.z, x * sign * 3.12);
      assert.equal(target.x, sign * 52.5);
      assert.equal(target.height, 1.85);
    }
});

test(
  'partida: chapéu, pedalada, superchute, luvas, novo placar e preparação real das reposições',
  { timeout: 120000 },
  async (t) => {
    const { server, url } = await startXfcServer({ port: 0 });
    const browser = await launchOrSkip(t);
    if (!browser) {
      server.close();
      return;
    }
    try {
      const page = await browser.newPage({
        viewport: { width: 1280, height: 720 }
      });
      await page.goto(url);
      await page.keyboard.press('Enter');
      await page.click('.launch__enter');
      await page.click('[data-menu-item="quick"]');
      await page.click('.quick__actions .continue-btn');
      await page.click('.stadiums__card:first-child');
      await page.click('.showcase__enter');
      await page.waitForSelector('.hud.is-visible');
      const result = await page.evaluate(() => {
        const m = window.__xfcMatch;
        m.stop();
        const all = [...m.teams.home.players, ...m.teams.away.players],
          p = m.teams.home.players.find((p) => !p.isKeeper),
          gk = m.teams.home.players.find((p) => p.isKeeper);
        const getBall = () => {
          m.phase.name = 'play';
          m.phase.restart = null;
          p.active = true;
          p.x = p.z = 0;
          p.root.position.set(0, 0, 0);
          p.facing.set(1, 0, 0);
          p.facingAngle = Math.PI / 2;
          p.root.rotation.y = Math.PI / 2;
          m.controlled.home = p;
          m.ball.reset();
          m.ball.attachTo(p);
          p.skillUntil = 0;
        };
        getBall();
        const step = m.world.command('dribble'),
          stepGesture = p.model.animation.state().gesture;
        getBall();
        const rainbow = m.world.command('rainbow'),
          rainbowLift = m.ball.state.velocity.y,
          rainbowReleased = !m.ball.state.owner;
        getBall();
        const superShot = m.world.command('shoot', {
          kind: 'power',
          strength: 1
        });
        const velocity = m.ball.state.velocity.toArray();
        const gloves = [];
        gk.root.traverse((o) => {
          if (o.name.startsWith('xfc-keeper-glove-')) gloves.push(o.name);
        });
        let gloveVertices=0,fieldMask=false;
      gk.root.traverse(o=>{if(o.geometry?.attributes.gloveMask)gloveVertices+=o.geometry.attributes.gloveMask.array.filter(x=>x>0).length;});
      p.root.traverse(o=>{if(o.geometry?.attributes.gloveMask)fieldMask=true;});
      const foundation = m.engine.scene.getObjectByName(
          'xfc-stadium-foundation'
        );
        const runRestart = (type) => {
          all.forEach((p) => (p.active = false));
          m.phase.name = 'play';
          m.phase.restart = null;
          m.ball.reset();
          const taker = type === 'goalkick' ? gk : p;
          taker.active = true;
          taker.x = type === 'goalkick' ? -46 : 42;
          taker.z = 5;
          taker.root.position.set(taker.x, 0, taker.z);
          const side = type === 'goalkick' ? -1 : 1;
          m.ball.state.position.set(side * 52.45, 0.18, 7);
          m.ball.state.velocity.set(side * 20, 0, 0);
          m.ball.state.lastTouch = m.teams.away.players.find(
            (x) => !x.isKeeper
          );
          m.world.tick(1 / 60);
          m.world.tick(1 / 60);
          const r = m.phase.restart;
          const initial = {
            type: r?.type,
            carrying: !!r?.preparation,
            owner: m.ball.state.owner?.id
          };
          for (let i = 0; i < 24; i++) m.world.tick(1 / 60);
          const carryY = m.ball.state.position.y,
            carryX = taker.x;
          for (let i = 0; i < 24; i++) m.world.tick(1 / 60);
          const placeGesture = taker.model.animation.state().gesture;
          for (let i = 0; i < 40; i++) m.world.tick(1 / 60);
          return {
            initial,
            carryY,
            carryX,
            placeGesture,
            ready: r?.ready,
            done: !r?.preparation,
            ground: m.ball.state.position.y,
            owner: m.ball.state.owner === taker,
            stillRestart: m.phase.name === 'restart'
          };
        };
        const goalkick = runRestart('goalkick'),
          corner = runRestart('corner');
        const names = [...document.querySelectorAll('.hud__team')].map(
            (n) => n.textContent
          ),
          clock = document.querySelector('.hud__clock');
        return {
          step,
          stepGesture,
          rainbow,
          rainbowLift,
          rainbowReleased,
          superShot,
          velocity,
          gloves,gloveVertices,fieldMask,
          foundation: !!foundation,
          goalkick,
          corner,
          names,
          clockInline: clock.parentElement.className,
          clockColor: getComputedStyle(clock).backgroundColor
        };
      });
      assert.equal(result.step, true);
      assert.equal(result.stepGesture, 'stepover');
      assert.equal(result.rainbow, true);
      assert.equal(result.rainbowReleased, true);
      assert.ok(result.rainbowLift > 6.5);
      assert.equal(result.superShot, true);
      assert.ok(Math.hypot(result.velocity[0], result.velocity[2]) > 45);
      assert.ok(result.velocity[1] < 2.5);
      assert.equal(result.gloves.length, 2);
    assert.ok(result.gloveVertices>20);assert.equal(result.fieldMask,false,"luvas não contaminam jogadores de linha");
      assert.equal(result.foundation, true);
      assert.deepEqual(result.names, ['BAR', 'RMA']);
      assert.equal(result.clockInline, 'hud__sc-main');
      assert.equal(result.clockColor, 'rgb(80, 240, 117)');
      for (const [type, r] of [
        ['goalkick', result.goalkick],
        ['corner', result.corner]
      ]) {
        assert.equal(r.initial.type, type);
        assert.equal(r.initial.carrying, true);
        assert.ok(r.carryY > 0.7);
        assert.equal(r.placeGesture, 'place-ball');
        assert.equal(r.ready, true);
        assert.equal(r.done, true);
        assert.equal(r.owner, true);
        assert.equal(r.stillRestart, true);
        assert.ok(r.ground < 0.15);
      }
    } finally {
      await browser.close();
      server.close();
    }
  }
);

test(
  'treino de pênalti: analógico mira sem andar, chute acompanha mira e goleiro mantém escolha',
  { timeout: 90000 },
  async (t) => {
    const { server, url } = await startXfcServer({ port: 0 });
    const browser = await launchOrSkip(t);
    if (!browser) {
      server.close();
      return;
    }
    try {
      const page = await browser.newPage({
        viewport: { width: 1280, height: 720 }
      });
      await page.goto(url);
      await page.keyboard.press('Enter');
      await page.click('.launch__enter');
      await page.click('[data-menu-item="learn"]');
      await page.click('[data-drill="penalty"]');
      await page.waitForFunction(() => window.__xfcTrainingMatch);
      const shots = await page.evaluate(() => {
        const m = window.__xfcTrainingMatch;
        m.stop();
        const samples = [];
        for (const aim of [-1, 0, 1]) {
          m.world.prepareTraining();
          const p = m.controlled.home,
            start = [p.x, p.z],
            keeper = m.world.members('away')[0];
          m.world.input.moveX = aim;
          m.world.input.moveZ = 0.5;
          for (let i = 0; i < 20; i++) m.world.tick(1 / 120);
          const fixed = [p.x, p.z];
          const marker = m.engine.scene.getObjectByName('xfc-penalty-aim');
          const target = { ...marker.userData.target };
          m.world.command('shoot', { strength: 0.8 });
          const v = m.ball.state.velocity.clone(),
            lane = keeper.penaltyDecision.lane;
          // Atleta/inimigos não redirecionam a mira após o chute.
          m.world.input.moveX = -aim;
          for (let i = 0; i < 10; i++) m.world.tick(1 / 120);
          samples.push({
            aim,
            start,
            fixed,
            target,
            v: v.toArray(),
            lane,
            after: keeper.penaltyDecision.lane,
            cameraY: m.engine.camera.position.y
          });
        }
        return samples;
      });
      for (const shot of shots) {
        assert.deepEqual(shot.fixed, shot.start);
        assert.equal(shot.target.z, shot.aim * 3.12);
        assert.ok(Math.abs(shot.v[2] / shot.v[0] - shot.target.z / 11) < 1e-6);
        assert.ok([-1, 0, 1].includes(shot.lane));
        assert.equal(shot.after, shot.lane);
        assert.ok(shot.cameraY < 3.1);
      }
    } finally {
      await browser.close();
      server.close();
    }
  }
);
