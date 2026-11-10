import test from 'node:test';
import assert from 'node:assert/strict';
import { createNetPanel } from '../xfc-game/src/match3d/net-physics.js';
import { launchOrSkip } from './support/chromium.mjs';
import { startXfcServer } from '../xfc-game/serve.mjs';

test('rede: impulso localizado, bordas fixas e retorno ao repouso sem trabalho por frame', () => {
  const net = createNetPanel({ width: 7.32, height: 2.44 });
  assert.equal(net.update(1 / 60), false);
  assert.equal(net.impact(0.35, 0.55, 24), true);
  let peak = 0;
  for (let i = 0; i < 60; i++) {
    net.update(1 / 60);
    peak = Math.max(peak, ...net.displacement);
    for (let y = 0; y <= net.rows; y++)
      for (let x = 0; x <= net.columns; x++) {
        const d = net.displacement[y * (net.columns + 1) + x];
        assert.ok(Number.isFinite(d));
        if (x === 0 || y === 0 || x === net.columns || y === net.rows)
          assert.equal(d, 0);
      }
  }
  assert.ok(
    peak > 0.1 && peak <= 0.7,
    `deformação visível e limitada: ${peak}`
  );
  for (let i = 0; i < 600; i++) net.update(1 / 60);
  assert.equal(net.active, false);
  assert.ok(net.displacement.every((x) => x === 0));
  assert.equal(net.update(1 / 60), false);
});

test('rede: resposta coerente a 30/60/120 Hz, força limitada, dt inválido ignorado', () => {
  const states = [];
  for (const fps of [30, 60, 120]) {
    const net = createNetPanel({ width: 7.32, height: 2.44 });
    net.impact(0.5, 0.5, 32);
    for (let i = 0; i < fps; i++) net.update(1 / fps);
    states.push([...net.displacement]);
    assert.equal(net.update(NaN), false);
    assert.equal(net.impact(0.5, 0.5, Infinity), false);
  }
  assert.deepEqual(states[0], states[1]);
  assert.deepEqual(states[1], states[2]);
  const net = createNetPanel({ width: 2.2, height: 2.44 });
  for (let i = 0; i < 240; i++) {
    net.impact(0.5, 0.5, 1e6);
    net.update(0.1);
  }
  assert.ok(
    net.displacement.every((d) => Number.isFinite(d) && Math.abs(d) <= 0.701)
  );
});

test(
  'bola/rede: fundo, laterais, teto e dois gols; chute por fora não infla rede',
  { timeout: 90000 },
  async (t) => {
    const { server, url } = await startXfcServer({ port: 0 });
    const browser = await launchOrSkip(t);
    if (!browser) {
      server.close();
      return;
    }
    try {
      const page = await browser.newPage();
      await page.goto(url);
      const result = await page.evaluate(async () => {
        const { THREE } = await import('/src/match3d/engine.js');
        const { createBall } = await import('/src/match3d/ball.js');
        const { createGoalNet } = await import('/src/match3d/goal-net.js');
        const hits = [],
          scene = new THREE.Scene(),
          nets = [
            createGoalNet(-1, { lowPower: true }),
            createGoalNet(1, { lowPower: true })
          ];
        const ball = createBall(scene, {
          lowPower: true,
          onNetImpact: (e) => {
            hits.push(e);
            nets.forEach((n) => n.impact(e));
          }
        });
        const run = (side, surface) => {
          ball.reset();
          ball.state.position.set(side * 52.45, 1.2, 0);
          ball.state.velocity.set(side * 25, 0, 0);
          ball.update(0.02, []);
          if (surface === 'top') ball.state.velocity.set(side * 5, 18, 0);
          if (surface === 'left' || surface === 'right')
            ball.state.velocity.set(side * 2, 0, surface === 'left' ? -25 : 25);
          for (let i = 0; i < 25; i++) {
            ball.update(1 / 120, []);
            nets.forEach((n) => n.update(1 / 120));
          }
        };
        for (const side of [-1, 1])
          for (const surface of ['back', 'left', 'right', 'top'])
            run(side, surface);
        const before = hits.length;
        ball.reset();
        ball.state.goalPocket = -1;
        ball.state.position.set(52.4, 1, 4.4);
        ball.state.velocity.set(30, 0, 0);
        for (let i = 0; i < 30; i++) ball.update(1 / 60, []);
        const outside = hits.length - before,
          stats = nets.map((n) => n.stats());
        for (let i = 0; i < 900; i++) nets.forEach((n) => n.update(1 / 60));
        const sleeping = nets.map((n) => n.stats());
        nets.forEach((n) => n.update(1 / 60));
        const after = nets.map((n) => n.stats());
        ball.dispose();
        return {
          hits: hits.map((e) => `${e.side}:${e.surface}`),
          outside,
          stats,
          sleeping,
          after
        };
      });
      for (const side of [-1, 1])
        for (const surface of ['back', 'left', 'right', 'top'])
          assert.ok(
            result.hits.includes(`${side}:${surface}`),
            `${side}:${surface}`
          );
      assert.equal(result.outside, 0);
      for (const stats of result.stats) {
        assert.ok(stats.impulses >= 4);
        assert.ok(stats.nodes < 1200);
        assert.ok(stats.bufferUpdates > 0);
      }
      for (const stats of result.sleeping) assert.equal(stats.activePanels, 0);
      assert.deepEqual(result.sleeping, result.after);
    } finally {
      await browser.close();
      server.close();
    }
  }
);

test(
  'gramado econômico: textura offline, shader válido e sem novos passes/sombras/lâminas',
  { timeout: 90000 },
  async (t) => {
    const { server, url } = await startXfcServer({ port: 0 });
    const browser = await launchOrSkip(t);
    if (!browser) {
      server.close();
      return;
    }
    try {
      const page = await browser.newPage();
      const errors = [];
      page.on('pageerror', (e) => errors.push(e.message));
      page.on('console', (m) => {
        if (m.type() === 'error') errors.push(m.text());
      });
      await page.goto(url);
      await page.evaluate(async () => {
        const { THREE } = await import('/src/match3d/engine.js');
        const { buildStadium } = await import('/src/match3d/stadium.js');
        const scene = new THREE.Scene(),
          stadium = buildStadium(scene, { lowPower: true });
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(768, 432);
        const camera = new THREE.PerspectiveCamera(45, 768 / 432, 0.1, 400);
        camera.position.set(42, 8, 14);
        camera.lookAt(52, 0, 0);
        window.netVisual = {
          scene,
          stadium,
          renderer,
          camera,
          pitch: scene.getObjectByName('xfc-pitch')
        };
      });
      await page.waitForFunction(
        () => window.netVisual.pitch.userData.turfDetail.image?.complete
      );
      const result = await page.evaluate(() => {
        const { scene, stadium, renderer, camera, pitch } = window.netVisual;
        renderer.render(scene, camera);
        const detail = pitch.userData.turfDetail,
          stats = {
            width: detail.image.width,
            mipmaps: detail.generateMipmaps,
            anisotropy: detail.anisotropy,
            calls: renderer.info.render.calls,
            blades: !!scene.getObjectByName('xfc-procedural-grass'),
            shadow: renderer.shadowMap.enabled
          };
        let disposed = false;
        detail.addEventListener('dispose', () => (disposed = true));
        stadium.dispose();
        renderer.dispose();
        return { ...stats, disposed };
      });
      assert.deepEqual(errors, []);
      assert.equal(result.width, 1024);
      assert.equal(result.mipmaps, true);
      assert.equal(result.anisotropy, 2);
      assert.ok(
        result.calls < 80,
        `draw calls do estádio econômico: ${result.calls}`
      );
      assert.equal(result.blades, false);
      assert.equal(result.shadow, false);
      assert.equal(result.disposed, true);
    } finally {
      await browser.close();
      server.close();
    }
  }
);
