import test from 'node:test';
import assert from 'node:assert/strict';
import { GOAL, PITCH } from '../xfc-game/src/match3d/constants.js';
import {
  cornerTarget,
  evaluateFreeKick,
  evaluatePenalty,
  impactYFromLift,
  predictTrajectory,
  strikeFromImpact
} from '../xfc-game/src/match3d/set-pieces.js';

test('chance e precisão de falta respondem à distância, ao ângulo, à barreira e aos atributos', () => {
  const near = evaluateFreeKick({ x: 34, z: 0, shooting: 88, precision: 88 });
  const far = evaluateFreeKick({ x: 10, z: 0, shooting: 88, precision: 88 });
  const wide = evaluateFreeKick({ x: 34, z: 24, shooting: 88, precision: 88 });
  const elite = evaluateFreeKick({ x: 34, z: 0, shooting: 95, precision: 95 });
  const wall = evaluateFreeKick({
    x: 34,
    z: 0,
    shooting: 88,
    precision: 88,
    wall: [
      { x: 43.1, z: -0.5, active: true },
      { x: 43.1, z: 0, active: true },
      { x: 43.1, z: 0.5, active: true }
    ]
  });

  assert.ok(near.chancePercent > far.chancePercent, 'uma cobrança mais próxima tem mais chance');
  assert.ok(near.chancePercent > wide.chancePercent, 'um ângulo mais fechado reduz a chance');
  assert.ok(elite.chancePercent > near.chancePercent, 'finalização melhor aumenta a chance estimada');
  assert.ok(elite.precisionPercent > near.precisionPercent, 'precisão do jogador aparece na métrica');
  assert.ok(wall.chancePercent < near.chancePercent, 'uma barreira no corredor bloqueia a cobrança');
  assert.ok(near.distance > 0 && near.angleDegrees >= 0);
});

test('mira de falta permanece dentro do gol em qualquer ajuste', () => {
  for (const aim of [-1, -0.5, 0, 0.5, 1]) {
    const metrics = evaluateFreeKick({ x: 35, z: 0, aim });
    assert.ok(Math.abs(metrics.target.z) < GOAL.width / 2, 'a mira não passa por fora da trave');
    assert.equal(metrics.target.x, PITCH.halfLength);
  }
});

test('a chance de falta também reflete o efeito e a altura escolhidos', () => {
  const neutral = evaluateFreeKick({ x: 34, z: 0, shooting: 85, precision: 85 });
  const complex = evaluateFreeKick({
    x: 34,
    z: 0,
    shooting: 85,
    precision: 85,
    curve: 0.85,
    lift: 0.22
  });
  assert.ok(complex.chancePercent < neutral.chancePercent);
  assert.ok(complex.precisionPercent < neutral.precisionPercent);
});

test('ponto de contato controla chute rasteiro, elevação e curva para os dois lados', () => {
  const topLeft = strikeFromImpact({ x: -0.8, y: -1 });
  const bottomRight = strikeFromImpact({ x: 0.8, y: 1 });
  const center = strikeFromImpact({ x: 0, y: 0 });

  assert.equal(topLeft.curve, -0.8, 'o canto esquerdo do quadrado aplica curva à esquerda');
  assert.equal(bottomRight.curve, 0.8, 'o canto direito aplica curva para o outro lado');
  assert.ok(topLeft.lift < center.lift && center.lift < bottomRight.lift,
    'bater na parte de cima mantém a bola baixa; embaixo levanta a trajetória');
  assert.equal(topLeft.lift, 0.075);
  assert.equal(center.curve, 0, 'o ponto neutro mantém o chute reto');
  assert.equal(center.lift, 0.15);
  assert.equal(bottomRight.lift, 0.225);
  assert.equal(strikeFromImpact({ x: -2, y: 2 }).impactY, 1, 'o cursor fica dentro do quadrado');
  assert.ok(Math.abs(impactYFromLift(center.lift)) < 0.01, 'a altura volta à posição vertical do cursor');
});

test('pênalti considera o goleiro e o canto selecionado', () => {
  const favorable = evaluatePenalty({ finishing: 90, goalkeeper: 60, aim: 0.5 });
  const difficult = evaluatePenalty({ finishing: 60, goalkeeper: 90, aim: 1 });
  assert.ok(favorable.chancePercent > difficult.chancePercent);
  assert.ok(Math.abs(favorable.target.z) < GOAL.width / 2);
  assert.equal(favorable.distance, 11);
});

test('direção do escanteio escolhe um ponto na área e acompanha o sentido do ataque', () => {
  const near = cornerTarget({ attackSign: 1, aim: -0.5 });
  const away = cornerTarget({ attackSign: -1, aim: 0.5 });
  assert.ok(near.x > 0 && away.x < 0);
  assert.ok(Math.abs(near.z) <= 7.2 && Math.abs(away.z) <= 7.2);
});

test('previsão da trajetória é finita, curva acompanha o efeito e não sai do mundo', () => {
  const straight = predictTrajectory({
    start: { x: 0, y: 0.11, z: 0 },
    target: { x: 30, z: 2 },
    speed: 23,
    lift: 0.16,
    curve: 0
  });
  const curved = predictTrajectory({
    start: { x: 0, y: 0.11, z: 0 },
    target: { x: 30, z: 2 },
    speed: 23,
    lift: 0.16,
    curve: 0.8
  });
  assert.ok(straight.length >= 4 && straight.length <= 25);
  assert.ok(straight.every(point => Object.values(point).every(Number.isFinite)));
  assert.ok(curved.some((point, index) => Math.abs(point.z - straight[index].z) > 0.05));
  assert.ok(straight.at(-1).y >= 0.11);
});
