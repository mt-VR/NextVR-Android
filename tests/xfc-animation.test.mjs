// Sistema de animação por camadas do XFC.
//
// A maior parte roda sem navegador: o controlador (`match3d/animation.js`) não
// depende de three.js, então dá para flexionar máscaras, pesos e IK com ossos
// falsos. O último teste usa o Chromium do projeto para conferir que o rig real
// responde e que a API `window.__xfcAnim` existe na partida.
import test from 'node:test';
import assert from 'node:assert/strict';

import {
  BONE_GROUPS,
  CLIP_NAMES,
  createAnimationController,
  installAnimationApi,
  maskBones
} from '../xfc-game/src/match3d/animation.js';
import { createPlayer3D } from '../xfc-game/src/match3d/player.js';
import { launchOrSkip } from './support/chromium.mjs';
import { startXfcServer } from '../xfc-game/serve.mjs';

function bone(x = 0, y = 0, z = 0, positionY = 0) {
  return { rotation: { x, y, z }, position: { x: 0, y: positionY, z: 0 } };
}

/** Rig mínimo com as mesmas proporções do atleta (coxa 0,405 / canela 0,32). */
function fakeRig() {
  const rig = {
    body: bone(),
    head: bone(),
    shoulderL: bone(0, 0, -0.085),
    shoulderR: bone(0, 0, 0.085),
    elbowL: bone(-0.2),
    elbowR: bone(-0.2),
    hipL: bone(0, 0, 0, 0.795),
    hipR: bone(0, 0, 0, 0.795),
    kneeL: bone(),
    kneeR: bone(),
    ankleL: bone(),
    ankleR: bone()
  };
  rig.legs = [
    { hip: rig.hipL, knee: rig.kneeL, ankle: rig.ankleL, side: 'L' },
    { hip: rig.hipR, knee: rig.kneeR, ankle: rig.ankleR, side: 'R' }
  ];
  return rig;
}

/** O rig base reescreve a pose a cada quadro; o fake faz o mesmo antes de animar. */
function reset(rig) {
  for (const key of ['body', 'head', 'shoulderL', 'shoulderR', 'elbowL', 'elbowR',
    'hipL', 'hipR', 'kneeL', 'kneeR', 'ankleL', 'ankleR']) {
    rig[key].rotation.x = 0;
    rig[key].rotation.y = 0;
    rig[key].rotation.z = 0;
  }
  rig.body.position.y = 0;
}

function run(controller, frames, dt = 1 / 60, context = {}) {
  for (let index = 0; index < frames; index += 1) {
    reset(controller.rig);
    controller.update(dt, context);
  }
}

test('máscaras cobrem pernas, tronco/braços e cabeça, com aliases em português', () => {
  assert.deepEqual(maskBones('lower'), BONE_GROUPS.lower);
  assert.deepEqual(maskBones('pernas'), BONE_GROUPS.lower);
  assert.deepEqual(maskBones('upper'), BONE_GROUPS.upper);
  assert.deepEqual(maskBones('tronco'), BONE_GROUPS.upper);
  assert.deepEqual(maskBones('head'), ['head']);
  const combined = maskBones('upper+head');
  assert.ok(combined.includes('head') && combined.includes('shoulderL'), 'a combinação soma grupos');
  assert.equal(combined.includes('hipL'), false, 'combinar tronco e cabeça não toca nas pernas');
  assert.equal(maskBones('nada-disso').length, 12, 'máscara desconhecida cai no corpo inteiro');
});

test('camada mascarada não sequestra os ossos de fora do grupo', () => {
  const rig = fakeRig();
  const controller = createAnimationController({ rig, ik: false });
  controller.trigger('celebrate', { mask: 'upper', fade: 0.08 });
  run(controller, 40);
  assert.ok(rig.shoulderR.rotation.x < -1.2, 'os braços sobem na comemoração de tronco');
  assert.ok(Math.abs(rig.hipL.rotation.x) < 0.001, 'a máscara de tronco não mexe nas pernas');
  assert.ok(Math.abs(rig.kneeR.rotation.x) < 0.001, 'nem nos joelhos');
  assert.equal(rig.head.rotation.x, 0, 'a cabeça tem máscara própria e fica de fora do tronco');
});

test('as camadas entram com peso animado: nenhum salto entre poses', () => {
  const rig = fakeRig();
  const controller = createAnimationController({ rig, ik: false });
  controller.trigger('celebrate', { mask: 'upper', fade: 0.3 });
  reset(rig);
  controller.update(1 / 60);
  const firstFrame = Math.abs(rig.shoulderL.rotation.x);
  run(controller, 42);
  const settled = Math.abs(rig.shoulderL.rotation.x);
  assert.ok(firstFrame < settled * 0.35, `o primeiro quadro é suave (${firstFrame.toFixed(3)} contra ${settled.toFixed(3)})`);
  assert.ok(settled > 1.5, 'depois do fade a pose do clipe vale por inteiro');
});

test('blend() mistura dois clipes pelo peso e aceita máscara própria', () => {
  const rig = fakeRig();
  const controller = createAnimationController({ rig, ik: false });
  const id = controller.blend('celebrate', 0.5, { mask: 'arms', fade: 0.05 });
  assert.ok(id, 'blend devolve o id da camada');
  run(controller, 60);
  const half = rig.shoulderL.rotation.x;
  assert.ok(half < -0.9 && half > -1.6, `peso 0,5 fica no meio do caminho (${half.toFixed(3)})`);
  controller.blend('celebrate', 1, { mask: 'arms', fade: 0.05 });
  run(controller, 60);
  assert.ok(rig.shoulderL.rotation.x < half - 0.15, 'subir o peso aproxima da pose completa');
  controller.blend('celebrate', 0, { fade: 0.05 });
  run(controller, 90);
  assert.ok(Math.abs(rig.shoulderL.rotation.x) < 0.05, 'peso zero devolve o braço à pose base');
  assert.equal(controller.layerCount, 0, 'camada zerada é descartada');
});

test('trigger() dispara uma vez, respeita a duração e se dissolve sozinho', () => {
  const rig = fakeRig();
  const controller = createAnimationController({ rig, ik: false });
  controller.trigger('kick', { mask: 'full', duration: 0.4, fade: 0.05 });
  run(controller, 6);
  assert.equal(controller.layerCount, 1, 'o clipe está ativo no meio do chute');
  run(controller, 90);
  assert.equal(controller.layerCount, 0, 'o clipe termina e é removido');
  assert.ok(Math.abs(rig.kneeR.rotation.x) < 0.05, 'a perna volta ao ciclo base depois do chute');
});

test('animation.speed acelera e desacelera o tempo das camadas', () => {
  const slowRig = fakeRig();
  const slow = createAnimationController({ rig: slowRig, ik: false });
  slow.blend('run', 1, { mask: 'legs', fade: 0.01 });
  run(slow, 20);

  const fastRig = fakeRig();
  const fast = createAnimationController({ rig: fastRig, ik: false });
  fast.speed = 2;
  fast.blend('run', 1, { mask: 'legs', fade: 0.01 });
  run(fast, 20);

  assert.ok(Math.abs(fast.stats().layers[0].time - 2 * slow.stats().layers[0].time) < 0.002,
    'velocidade 2 avança o clipe no dobro do tempo');
  fast.speed = 99;
  assert.equal(fast.speed, 4, 'a velocidade é limitada para não explodir a integração');
  fast.speed = -3;
  assert.equal(fast.speed, 0, 'velocidade negativa congela a camada');
});

test('IK de chão dobra o joelho para o pé não afundar e não mexe no quadril', () => {
  const rig = fakeRig();
  const controller = createAnimationController({ rig, ikWeight: 1 });
  // Perna esticada: tornozelo a 7 cm do chão, abaixo da altura de apoio.
  run(controller, 30);
  assert.ok(rig.kneeL.rotation.x > 0.02, 'o joelho compensa a altura do tornozelo');
  assert.equal(rig.hipL.rotation.x, 0, 'o quadril do ciclo base fica intacto');
  assert.ok(rig.ankleL.rotation.x < 0, 'o pé acompanha a inclinação para manter a sola apoiada');
  assert.ok(Number.isFinite(controller.stats().ik.lastGround));
});

test('IK de bola leva a perna dominante ao ponto de contato e o LOD desliga o rig', () => {
  const rig = fakeRig();
  const controller = createAnimationController({ rig, ikWeight: 1, ballIKWeight: 1, ikDistance: 20 });
  const contact = {
    ownsBall: true,
    ball: { x: 0, y: 0.32, z: 0.28 },
    x: 0,
    z: 0,
    facingAngle: 0,
    kickLeg: 'R',
    distance: 8
  };
  run(controller, 30, 1 / 60, contact);
  assert.ok(rig.hipR.rotation.x < -0.25, 'a perna direita avança para o contato');
  assert.ok(rig.kneeR.rotation.x > 0.1, 'e o joelho acompanha a mira');
  assert.ok(controller.stats().ik.lastBall <= 1.25, 'o IK registra a distância do contato');

  const farRig = fakeRig();
  const far = createAnimationController({ rig: farRig, ikWeight: 1, ikDistance: 20, farDistance: 50 });
  far.trigger('celebrate', { mask: 'upper' });
  run(far, 30, 1 / 60, { distance: 70 });
  assert.equal(farRig.shoulderL.rotation.x, 0, 'acima da distância limite nenhuma camada é avaliada');
  assert.equal(far.layerCount, 1, 'a camada continua registrada para quando o atleta voltar ao quadro');
});

test('API do LLM expõe clipes, máscaras, blend, trigger e estado', () => {
  const rig = fakeRig();
  const controller = createAnimationController({ rig, ik: false });
  const target = {};
  const api = installAnimationApi(target, () => ({ animation: controller }));
  assert.equal(target.__xfcAnim, api, 'a API fica pendurada no alvo (window na partida)');
  assert.ok(api.clips.includes('kick') && api.clips.includes('celebrate'));
  assert.ok(api.masks.includes('lower') && api.masks.includes('upper'));
  api.setMask('lower');
  assert.deepEqual(controller.mask, BONE_GROUPS.lower, 'applyMask muda a máscara padrão');
  api.trigger('kick');
  assert.equal(api.state().layers[0].mask.join(','), BONE_GROUPS.lower.join(','),
    'o disparo herda a máscara aplicada');
  api.setSpeed(0.5);
  assert.equal(api.state().speed, 0.5);
  assert.ok(CLIP_NAMES.length >= 10, 'a biblioteca traz corrida, chute, comemoração, carrinho e afins');
});

test('o rig real responde à camada de animação e ao LOD de sombra', () => {
  const previousDocument = Object.getOwnPropertyDescriptor(globalThis, 'document');
  const previousImage = Object.getOwnPropertyDescriptor(globalThis, 'Image');
  const gradient = { addColorStop() {} };
  const context = new Proxy({
    createLinearGradient: () => gradient,
    createRadialGradient: () => gradient,
    measureText: () => ({ width: 1 })
  }, {
    get(target, key) {
      if (key in target) return target[key];
      return () => {};
    },
    set(target, key, value) { target[key] = value; return true; }
  });
  try {
    Object.defineProperty(globalThis, 'document', {
      configurable: true,
      writable: true,
      value: {
        createElement(tag) {
          return tag === 'canvas' ? { width: 1, height: 1, getContext: () => context } : {};
        }
      }
    });
    Object.defineProperty(globalThis, 'Image', {
      configurable: true,
      writable: true,
      value: class TestImage {
        constructor() { this.width = 144; this.height = 168; }
        set src(value) { this.url = value; this.onload?.(); }
      }
    });

    const model = createPlayer3D({ simplified: true, kit: { primary: '#1f6f4a', secondary: '#112233', accent: '#ffffff' }, number: 7 });
    assert.ok(model.animation, 'todo atleta nasce com o controlador de camadas');
    assert.equal(model.animation.speed, 1);
    model.animation.trigger('celebrate', { mask: 'upper', fade: 0.05 });
    for (let frame = 0; frame < 60; frame += 1) model.update(1 / 60, { speed: 1.5, moving: true });
    assert.ok(model.arms[0].shoulder.rotation.x < -1, 'a camada de comemoração move o braço do rig real');
    assert.ok(model.animation.stats().layers.length >= 1);

    let casting = 0;
    model.root.traverse(object => {
      if (object.isMesh && object.name !== 'xfc-player-shadow' && object.castShadow) casting += 1;
    });
    assert.ok(casting > 0, 'o protagonista projeta sombra');
    assert.equal(model.setDynamicShadow(false), false);
    assert.equal(model.castsDynamicShadow, false);
    model.root.traverse(object => {
      if (object.isMesh && object.name !== 'xfc-player-shadow') assert.equal(object.castShadow, false,
        'sem sombra dinâmica nenhuma malha do atleta pesa no shadow map');
    });
    model.setDynamicShadow(true);
    assert.equal(model.castsDynamicShadow, true);

    model.root.traverse(object => {
      for (const value of [object.position.x, object.position.y, object.position.z,
        object.rotation.x, object.rotation.y, object.rotation.z]) {
        assert.ok(Number.isFinite(value), `${object.name || object.type} não deforma com NaN`);
      }
    });
    model.dispose();
  } finally {
    if (previousDocument) Object.defineProperty(globalThis, 'document', previousDocument);
    else delete globalThis.document;
    if (previousImage) Object.defineProperty(globalThis, 'Image', previousImage);
    else delete globalThis.Image;
  }
});

test('na partida real a API de animação controla o protagonista e só ele projeta sombra', { timeout: 120000 }, async (t) => {
  const { server, url } = await startXfcServer({ port: 0 });
  const browser = await launchOrSkip(t);
  if (!browser) {
    server.close();
    return;
  }
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => {
      if (message.type() === 'error') errors.push(message.text());
    });
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.keyboard.press('Enter');
    await page.waitForSelector('.screen--launch');
    await page.click('.launch__enter');
    await page.waitForSelector('.screen--menu');
    await page.locator('.menu__item[data-menu-item="learn"]').click();
    await page.waitForSelector('.screen--training-select');
    await page.locator('.training-select__choice[data-drill="penalty"]').click();
    await page.waitForSelector('.screen--training .training__stage[data-drill="penalty"]');
    await page.waitForFunction(() => window.__xfcTrainingMatch?.world.trainingMode === true);

    const before = await page.evaluate(() => {
      const anim = window.__xfcAnim;
      const model = anim?.model;
      return {
        hasApi: Boolean(anim),
        clips: anim?.clips?.length || 0,
        hasController: Boolean(anim?.animation),
        heroShoulder: model?.arms?.[0]?.shoulder?.rotation?.x ?? null
      };
    });
    assert.equal(before.hasApi, true, 'a partida instala window.__xfcAnim');
    assert.ok(before.clips >= 10, 'a API lista os clipes disponíveis');
    assert.equal(before.hasController, true, 'o protagonista tem controlador de camadas');

    const after = await page.evaluate(() => {
      const match = window.__xfcTrainingMatch;
      const anim = window.__xfcAnim;
      anim.setMask('upper');
      anim.trigger('celebrate', { fade: 0.05 });
      anim.setSpeed(1);
      for (let frame = 0; frame < 40; frame += 1) match.world.tick(1 / 60);
      const model = anim.model;
      const keeper = match.world.members('away')[0];
      return {
        shoulder: model.arms[0].shoulder.rotation.x,
        state: anim.state(),
        heroCasts: model.castsDynamicShadow,
        keeperCasts: keeper ? keeper.model.castsDynamicShadow : null,
        keeperMeshCasting: (() => {
          let casting = 0;
          keeper.model.root.traverse(object => {
            if (object.isMesh && object.name !== 'xfc-player-shadow' && object.castShadow) casting += 1;
          });
          return casting;
        })()
      };
    });
    assert.ok(after.shoulder < -1, 'a comemoração disparada pela API move o braço do protagonista');
    assert.equal(after.state.mask.join(','), 'body,shoulderL,shoulderR,elbowL,elbowR');
    assert.ok(after.state.layers.length >= 1, 'o estado mostra a camada ativa');
    assert.equal(after.heroCasts, true, 'o protagonista projeta sombra dinâmica');
    assert.equal(after.keeperCasts, false, 'o goleiro usa só a sombra de contato');
    assert.equal(after.keeperMeshCasting, 0, 'nenhuma malha do goleiro entra no shadow map');

    const realErrors = errors.filter(message => !/favicon/i.test(message));
    assert.deepEqual(realErrors, [], `a partida não deve gerar erro de console: ${realErrors.join(' | ')}`);
  } finally {
    await browser.close();
    server.close();
  }
});

test('sem o arquivo glTF a partida cai no rig procedural (o jogo nunca fica sem atleta)', async () => {
  const models = await import('../xfc-game/src/match3d/models.js');
  assert.equal(models.gltfPlayersEnabled(), false, 'o caminho glTF é opt-in (?models=glb)');
  const pack = await models.preloadFootballerPack();
  assert.equal(pack, null, 'sem assets/players/models/footballer.glb o pacote não carrega');
  assert.equal(models.createGltfPlayer({ kit: { primary: '#fff', secondary: '#000' } }), null,
    'sem pacote, createGltfPlayer devolve null e o chamador usa o procedimental');
});
