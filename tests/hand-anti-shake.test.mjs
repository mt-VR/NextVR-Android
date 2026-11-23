import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { LandmarkSmoother, HandPointFilter } from '../web/src/hand-input.js';

/*
 * "bota um filtro anti treme no Hand tracking" (2.6.7).
 *
 * O filtro é um One Euro por eixo com zona morta. O que estes testes garantem é o que o usuário
 * pediu e, igualmente importante, o que ele NÃO pode perder: parado a mão não treme, mas em
 * movimento a ponta continua chegando junto com a mão (pinça e toque direto não podem ficar moles).
 */

test('mão parada com ruído de detector não treme (One Euro)', () => {
  const f = new LandmarkSmoother();
  let t = 0, path = 0, rawPath = 0, prev = null, prevRaw = null;
  for (let i = 0; i < 120; i++) {
    t += 33;
    const raw = 0.5 + (i % 2 ? 0.0009 : -0.0009);   // ~1 px alternando, o pior caso
    const v = f.next(raw, t);
    if (prev !== null) { path += Math.abs(v - prev); rawPath += Math.abs(raw - prevRaw); }
    prev = v; prevRaw = raw;
  }
  assert.ok(rawPath > 0.1, `o sinal cru tremeu (${rawPath})`);
  assert.ok(path < rawPath * 0.05, `o filtrado tem que quase parar (${path} vs ${rawPath})`);
});

test('em movimento o filtro não atrasa a mão (pinça e toque direto continuam responsivos)', () => {
  const f = new LandmarkSmoother();
  let t = 0, lag = 0, n = 0, x = 0.2;
  f.next(x, t);
  for (let i = 0; i < 60; i++) {
    t += 33;
    x += 0.002;                                     // ~6 cm/s na tela
    const v = f.next(x, t);
    if (i > 40) { lag += Math.abs(v - x); n++; }
  }
  assert.ok(lag / n < 0.01, `atraso médio pequeno (${(lag / n).toFixed(4)} do campo)`);
});

test('relógio voltando (reinício) reinicia o filtro em vez de congelar a mão na pose antiga', () => {
  // Regressão encontrada pelo CI: o filtro segurava o valor quando o carimbo era igual OU menor, e um
  // relógio que anda para trás (página recarregada, teste com relógio falso) deixava a mão presa na
  // pose anterior — o gesto antigo continuava valendo na tela.
  const f = new LandmarkSmoother();
  f.next(0.2, 5000);
  f.next(0.2, 5033);
  assert.ok(Math.abs(f.next(0.9, 1000) - 0.9) < 1e-9, 'amostra com carimbo no passado entra inteira');
  // O primeiro passo depois do reinício passa pelo filtro (um salto de detector não é seguido de
  // imediato), mas a mão não pode ficar presa: em poucos quadros ela chega onde está.
  f.next(0.8, 1033);
  let v = 0.8;
  for (let t = 1066; t <= 1200; t += 33) v = f.next(0.8, t);
  assert.ok(Math.abs(v - 0.8) < 0.01, `e a mão alcança a posição de verdade (${v.toFixed(3)})`);
});

test('os 21 pontos passam juntos, cada mão tem o seu filtro e a primeira amostra passa inteira', () => {
  const f = new HandPointFilter();
  let t = 0, path = 0, rawPath = 0, prev = null, prevRaw = null;
  for (let i = 0; i < 90; i++) {
    t += 33;
    const pts = new Array(63);
    for (let k = 0; k < 21; k++) {
      pts[k * 3] = 0.5 + (i % 2 ? 0.001 : -0.001);
      pts[k * 3 + 1] = 0.6 + (i % 2 ? -0.001 : 0.001);
      pts[k * 3 + 2] = 0;
    }
    const out = f.apply('right', pts, t);
    assert.equal(out.length, 63, 'devolve os 63 números');
    assert.notEqual(out, pts, 'devolve uma cópia: o pacote original nunca é alterado');
    if (prev) {
      for (let k = 0; k < 63; k++) { path += Math.abs(out[k] - prev[k]); rawPath += Math.abs(pts[k] - prevRaw[k]); }
    }
    prev = out.slice(); prevRaw = pts.slice();
  }
  assert.ok(path < rawPath * 0.02, `ruído quase todo removido (${path.toFixed(3)} vs ${rawPath.toFixed(3)})`);
  // Mão esquerda e direita não compartilham filtro.
  f.reset('right');
  const one = f.apply('left', new Array(63).fill(0.3), 1000);
  const two = f.apply('left', new Array(63).fill(0.9), 1033);
  assert.ok(Math.abs(two[0] - 0.9) < 0.9, 'um salto grande é seguido, ainda que amortecido');
  assert.ok(one[0] === 0.3, 'a primeira amostra passa inteira');
});

test('o filtro está ligado no caminho real das mãos (interface e jogo)', () => {
  const hands = readFileSync('web/src/hands.js', 'utf8');
  assert.ok(hands.includes("import { HandClickState, ClickDragArbiter, HandPointFilter } from './hand-input.js'"));
  assert.ok(hands.includes('const pointFilter = new HandPointFilter('), 'hands.js cria o filtro');
  assert.ok(hands.includes('hands.splice(0,hands.length,...filteredHands)'),
    'publica os pontos FILTRADOS para cursor, toque direto, janelas e jogos');
  // Gestos nunca passam pelo filtro: atrasar a borda do gesto viraria clique perdido/fantasma.
  assert.ok(!hands.includes('pointFilter.apply(h.id, h.points, now).pinching'), 'gestos vêm do pacote cru');

  const gameHands = readFileSync('tools/gorilla-rush/parts/hands.js', 'utf8');
  assert.ok(gameHands.includes('function nvSmoothPoints('), 'o braço do gorila também é filtrado');
  assert.ok(gameHands.includes('var smoothed = nvSmoothPoints(i, h.points, now);'),
    'o jogo filtra ANTES de publicar os pontos');
  assert.ok(gameHands.includes('window.__nvHandsReset'), 'e esquece o histórico quando a mão some');
  // O game.html é GERADO: o filtro só chega ao APK se o arquivo publicado for regerado
  // (node tools/gorilla-rush/adapt.mjs "<HTML original>"). Já pegamos esse erro no APK.
  const built = readFileSync('nextvr-android/src/main/assets/ui/gorilla-rush/game.html', 'utf8');
  assert.ok(built.includes('function nvSmoothPoints(') && built.includes('var NV_SMOOTH'),
    'o game.html publicado no APK leva o filtro (regerar com tools/gorilla-rush/adapt.mjs)');
});
