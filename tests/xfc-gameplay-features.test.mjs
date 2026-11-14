import test from 'node:test';
import assert from 'node:assert/strict';
import { directionalPassTarget } from '../xfc-game/src/match3d/directional-pass.js';
import { createCareerRating, RATING_START, RATING_WEIGHTS } from '../xfc-game/src/data/career-rating.js';
import { createCareer, beginCareerMatch, settleCareer, customiseCareer, careerTable, careerFixture } from '../xfc-game/src/data/career.js';
import { createManagerCareer, settleManager } from '../xfc-game/src/data/career-services.js';

const mate = (id, x, z, extra = {}) => ({ id, x, z, active: true, side: 'home', ...extra });
const owner = { id: 'me', x: 0, z: 0, active: true, side: 'home' };

test('passe direcional: obedece ao analógico para frente, trás e lados', () => {
  const ahead = mate('ahead', 10, 0);
  const behind = mate('behind', -10, 0);
  const right = mate('right', 0, 8);
  const left = mate('left', 0, -8);
  const players = [owner, ahead, behind, right, left];
  // +x (frente), -x (trás, antes ignorado), +z e -z (lados).
  assert.equal(directionalPassTarget(owner, players, { x: 1, z: 0 })?.id, 'ahead');
  assert.equal(directionalPassTarget(owner, players, { x: -1, z: 0 })?.id, 'behind');
  assert.equal(directionalPassTarget(owner, players, { x: 0, z: 1 })?.id, 'right');
  assert.equal(directionalPassTarget(owner, players, { x: 0, z: -1 })?.id, 'left');
});

test('passe direcional: sem direção não escolhe; ignora inativos, adversários e goleiro', () => {
  const good = mate('good', 6, 1);
  const inactive = mate('inactive', 6, 0, { active: false });
  const rival = mate('rival', 6, 0, { side: 'away' });
  const keeper = mate('keeper', 6, 0, { isKeeper: true });
  assert.equal(directionalPassTarget(owner, [owner, good], { x: 0.03, z: 0 }), null);
  assert.equal(directionalPassTarget(owner, [owner, inactive, rival, keeper, good], { x: 1, z: 0 })?.id, 'good');
  assert.equal(directionalPassTarget(owner, [owner, inactive], { x: 1, z: 0 }), null);
  assert.equal(directionalPassTarget(owner, [owner, rival], { x: 1, z: 0 }), null);
});

test('passe direcional: alinhamento prefere quem está na direção, não só à frente', () => {
  const diagonal = mate('diag', 7, 7);
  const players = [owner, mate('far', 30, 0), diagonal];
  assert.equal(directionalPassTarget(owner, players, { x: 0.7, z: 0.7 })?.id, 'diag');
});

test('nota da carreira: começa em 6, pesos por lance e limite 0–10', () => {
  const r = createCareerRating();
  assert.equal(r.value, RATING_START);
  assert.equal(r.text(), '6.0');
  assert.equal(RATING_WEIGHTS.goal, 2);
  assert.equal(RATING_WEIGHTS.assist, 1);
  r.award('goal');      // 8.0
  assert.equal(r.value, 8);
  r.award('assist');    // 9.0
  assert.equal(r.value, 9);
  r.award('pass'); r.award('shot'); r.award('dribble'); // +0.3 -> 9.3
  assert.equal(r.value, 9.3);
  assert.equal(r.tally.pass, 0.1);
  for (let i = 0; i < 200; i++) r.award('goal');
  assert.equal(r.value, 10, 'nunca passa de 10');
  assert.equal(r.award('inexistente'), 10, 'tipo desconhecido não altera');
  const fresh = createCareerRating();
  assert.equal(fresh.value, 6);
  assert.equal(Number.isInteger(Math.round(fresh.value * 10)), true);
});

test('replay removido do jogo: não há gatilhos nem buffer de replay', async () => {
  // O replay foi retirado a pedido do usuário. Garante que os módulos não
  // voltem por engano em um import esquecido.
  await assert.rejects(() => import('../xfc-game/src/match3d/replay-triggers.js'));
  await assert.rejects(() => import('../xfc-game/src/match3d/replay.js'));
});

test('carreira: nota ao vivo vira nota oficial; fallback preservado', () => {
  const c = createCareer({ clubId: 'santos' });
  const p = beginCareerMatch(c);
  const score = [2, 1];
  const result = settleCareer(c, p.id, score, { liveRating: 8.4, goals: 1 });
  assert.equal(result.rating, 8.4);

  const c2 = createCareer({ clubId: 'santos' });
  const p2 = beginCareerMatch(c2);
  assert.equal(settleCareer(c2, p2.id, [2, 1], { liveRating: 15 }).rating, 10, 'limita a 10');

  const c3 = createCareer({ clubId: 'santos' });
  const p3 = beginCareerMatch(c3);
  const old = settleCareer(c3, p3.id, [1, 0], { goals: 1 });
  assert.ok(old && old.rating >= 6 && old.rating <= 10, 'sem nota ao vivo usa média antiga');
});

test('carreira: edição liberada depois de pronto (allowPending), bloqueio padrão mantido', () => {
  const c = createCareer({ clubId: 'santos', position: 'ST' });
  beginCareerMatch(c); // partida pendente
  assert.equal(customiseCareer(c, { position: 'CM' }), false, 'chamada direta continua bloqueada');
  assert.equal(c.player.position, 'ST');
  assert.equal(customiseCareer(c, { position: 'CM', appearance: { hairStyle: 'mohawk' } }, { allowPending: true }), true);
  assert.equal(c.player.position, 'CM');
  assert.equal(c.player.appearance.hairStyle, 'mohawk');
});

test('técnico: fechamento compartilhado continua rápido, limitado e idempotente', () => {
  const c = createManagerCareer('real-madrid', 'Técnico');
  const fixture = careerFixture(c);
  const pending = beginCareerMatch(c);
  const score = fixture.home === c.clubId ? [3, 0] : [0, 3];
  const before = careerTable(c);
  const t0 = performance.now();
  const result = settleManager(c, pending.id, score);
  const elapsed = performance.now() - t0;
  assert.ok(result, 'fechamento do técnico funciona');
  assert.ok(result.rating >= 6 && result.rating <= 10, 'nota histórica preservada');
  assert.ok(elapsed < 50, `fechamento não deve travar a UI: ${elapsed.toFixed(1)}ms`);
  assert.equal(c.budget, 5200);
  assert.equal(settleManager(c, pending.id, score), null, 'idempotente');
  assert.equal(c.pending, null);
  assert.equal(c.totals.matches, 1);
  assert.ok(careerTable(c).find(r => r.id === c.clubId).played >= before.find(r => r.id === c.clubId).played);
});
