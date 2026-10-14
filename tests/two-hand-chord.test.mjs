import test from 'node:test';
import assert from 'node:assert/strict';
import { TwoHandMenuChord, CHORD_DEFAULTS } from '../web/src/two-hand-chord.js';

/** Duas mãos pinçando; `t` é o relógio em ms. */
const both = { left: true, right: true };
const onlyLeft = { left: true, right: false };
const none = { left: false, right: false };

test('o menu só abre com as DUAS mãos pinçando, e só depois de segurar ~2 s', () => {
  const g = new TwoHandMenuChord();
  assert.equal(CHORD_DEFAULTS.armMs, 2000, 'o acorde é de dois segundos, como no SteamVR');
  assert.equal(g.update(0, none).opened, false);
  // Uma mão só nunca abre, por mais tempo que seja.
  for (let t = 0; t <= 9000; t += 500) assert.equal(g.update(t, onlyLeft).opened, false);
  g.reset();
  // As duas mãos: antes dos 2 s é só progresso, exatamente uma borda de abertura aos 2 s.
  const progress = [];
  for (let t = 0; t <= 2000; t += 250) {
    const state = g.update(t, both);
    assert.equal(state.opened, t === 2000, `abre exatamente aos 2 s (t=${t})`);
    progress.push(state.progress);
  }
  assert.ok(progress.every((p, i) => i === 0 || p >= progress[i - 1]), 'o progresso só cresce');
  assert.ok(progress[0] === 0 && progress.at(-1) === 1);
  // Segurar mais não repete a abertura.
  for (let t = 2250; t <= 4000; t += 250) assert.equal(g.update(t, both).opened, false);
});

test('perder uma das mãos zera a espera; um quadro perdido é tolerado', () => {
  const g = new TwoHandMenuChord();
  g.update(0, both); g.update(1500, both);
  assert.ok(g.update(1500, both).progress > .7, 'quase lá');
  // Um quadro sem uma das mãos, dentro da tolerância: a espera continua.
  const brief = g.update(1600, onlyLeft);
  assert.equal(brief.opened, false);
  assert.ok(g.update(1700, both).progress > .7, 'voltou sem recomeçar');
  // Passou da tolerância com uma mão só: recomeça do zero.
  g.update(2100, onlyLeft);
  g.update(2500, onlyLeft);                  // 400 ms sem a segunda mão (> graceMs)
  assert.equal(g.update(2600, both).progress, 0, 'a espera recomeçou');
  assert.equal(g.update(4500, both).opened, false, '2 s contam de novo do zero');
  assert.equal(g.update(4600, both).opened, true);
});

test('o acorde continua valendo enquanto estiver segurado e termina ao soltar', () => {
  const g = new TwoHandMenuChord();
  for (let t = 0; t < 2000; t += 200) g.update(t, both);
  assert.equal(g.update(2000, both).opened, true);
  assert.equal(g.update(2400, both).active, true, 'o menu fica aberto enquanto segura');
  const released = g.update(2600, none);
  assert.equal(released.closed, true, 'soltar fecha');
  assert.equal(released.active, false);
  // Um novo acorde abre de novo (não fica travado depois do primeiro).
  for (let t = 3000; t < 5000; t += 200) g.update(t, both);
  assert.equal(g.update(5000, both).opened, true);
});

test('reset devolve o estado inicial sem bordas de evento', () => {
  const g = new TwoHandMenuChord();
  for (let t = 0; t <= 2000; t += 200) g.update(t, both);
  const state = g.reset();
  assert.deepEqual({ ...state, active: false }, { progress: 0, opened: false, closed: false, active: false });
  assert.equal(g.progress, 0);
  assert.equal(g.update(100, both).opened, false, 'a espera recomeça');
});

test('o tempo de segurar pode ser configurado (o app usa o padrão de 2 s)', () => {
  // O relógio começa na primeira amostra com as duas mãos, não no zero absoluto.
  const fast = new TwoHandMenuChord({ armMs: 400, progressHoldMs: 400 });
  assert.equal(fast.update(200, both).opened, false);
  assert.equal(fast.update(500, both).opened, false);
  assert.equal(fast.update(600, both).opened, true);
  const strict = new TwoHandMenuChord({ armMs: 3000, progressHoldMs: 3000 });
  assert.equal(strict.update(2000, both).opened, false);
  assert.equal(strict.update(4900, both).opened, false);
  assert.equal(strict.update(5000, both).opened, true);
});
