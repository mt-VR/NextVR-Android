// v0.5.51 — lote de ajustes pedidos pelo usuário:
// campo maior, acréscimos de 5 min, recuo da bola, cabeçada, lateral com as
// mãos, gamepad (Xbox/PlayStation) e navegação de menu "tipo console".
import test from 'node:test';
import assert from 'node:assert/strict';
import { PITCH, GOAL, BALL } from '../xfc-game/src/match3d/constants.js';
import { padFamily, padLabels } from '../xfc-game/src/ui/gamepad.js';
import { KICKOFF_NATIONAL_TEAMS, getKickoffNationalTeam } from '../xfc-game/src/data/worldcup.js';

test('campo é maior que o oficial (105 × 68) e continua simétrico', () => {
  // v0.5.59: Kick Off / amistoso voltam a 120×82. A carreira usa 140×96.
  assert.equal(PITCH.length, 120);
  assert.equal(PITCH.width, 82);
  assert.equal(PITCH.halfLength, PITCH.length / 2);
  assert.equal(PITCH.halfWidth, PITCH.width / 2);
  assert.ok(PITCH.length > 105 && PITCH.width > 68, 'pedido: aumentar largura e tamanho do campo');
  // O gol não muda com o campo: 7,32 × 2,44.
  assert.equal(GOAL.width, 7.32);
  assert.equal(GOAL.height, 2.44);
  assert.ok(BALL.radius > 0.1 && BALL.radius < 0.13);
});

test('Kick Off aceita seleções (Brasil, Argentina e o catálogo FIFA) sem colidir com clubes', () => {
  assert.ok(KICKOFF_NATIONAL_TEAMS.length >= 32, 'as 32 da Copa e as demais membros da FIFA');
  const brazil = getKickoffNationalTeam('brazil');
  const argentina = getKickoffNationalTeam('argentina');
  assert.equal(brazil?.name, 'Brasil');
  assert.equal(argentina?.name, 'Argentina');
  assert.ok(Array.isArray(brazil.players) && brazil.players.length === 11, 'XI nacional completo');
  assert.ok(brazil.players.every(player => player.name && player.position));
  // As cores nacionais existem: são o uniforme do Kick Off com seleção.
  for (const key of ['primary', 'secondary']) {
    assert.match(brazil.colors[key], /^#[0-9a-f]{6}$/i);
  }
});

test('rótulos do controle seguem Xbox e PlayStation', () => {
  assert.equal(padFamily({ id: 'Xbox Wireless Controller (STANDARD GAMEPAD)' }), 'xbox');
  assert.equal(padFamily({ id: 'DualSense Wireless Controller' }), 'playstation');
  assert.equal(padFamily({ id: 'Wireless Controller (Vendor: 054c)' }), 'playstation');
  assert.equal(padFamily({ id: 'Generic USB Joystick' }), 'generic');
  assert.equal(padLabels('xbox').A, 'A');
  assert.equal(padLabels('playstation').A, '✕');
  assert.equal(padLabels('playstation').B, '○');
  assert.equal(padLabels('generic').A, 'A');
});
