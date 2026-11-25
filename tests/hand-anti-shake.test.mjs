import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { LandmarkSmoother, HandPointFilter, HAND_FILTER_PROFILES } from '../web/src/hand-input.js';

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
  assert.ok(hands.includes("HandPointFilter, HAND_FILTER_PROFILES } from './hand-input.js'"));
  assert.ok(hands.includes('new HandPointFilter({ ...HAND_FILTER_PROFILES.interface })'),
    'a interface usa o perfil "interface" (o mais estável, mas já sem atraso)');
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

test('perfil do jogo é MAIS RÁPIDO que o da interface (e ainda mata o tremor parado)', () => {
  const lagOf = (profile) => {
    const f = new LandmarkSmoother({ ...profile });
    let t = 0, x = 0.2, lag = 0, n = 0;
    f.next(x, t);
    for (let i = 0; i < 80; i++) {
      t += 33; x += 0.002;
      const v = f.next(x, t);
      if (i > 40) { lag += Math.abs(v - x); n++; }
    }
    return lag / n;
  };
  const stillOf = (profile) => {
    const f = new LandmarkSmoother({ ...profile });
    let t = 0, path = 0, raw = 0, prev = null, prevRaw = null;
    for (let i = 0; i < 120; i++) {
      t += 33;
      const rawValue = 0.5 + (i % 2 ? 0.0012 : -0.0012);
      const v = f.next(rawValue, t);
      if (prev !== null) { path += Math.abs(v - prev); raw += Math.abs(rawValue - prevRaw); }
      prev = v; prevRaw = rawValue;
    }
    return path / raw;
  };
  const iface = HAND_FILTER_PROFILES.interface, game = HAND_FILTER_PROFILES.game;
  // "deixa o hand tracking mais rapido": o perfil da interface já tem que ser mais rápido que o de
  // 2.6.7 (minCutoff 1,2 / beta 6), e o do jogo mais rápido ainda.
  assert.ok(iface.minCutoff > 1.2 && iface.beta > 6, 'o perfil da interface ficou mais rápido');
  assert.ok(lagOf(game) < lagOf(iface), `jogo (${lagOf(game).toFixed(4)}) responde antes da interface (${lagOf(iface).toFixed(4)})`);
  assert.ok(lagOf(iface) < 0.004, 'e a interface continua sem atraso perceptível');
  assert.ok(stillOf(game) < 0.2, 'o jogo ainda segura a mão parada');
  assert.ok(stillOf(iface) < stillOf(game), 'a interface filtra mais parada que o jogo');
});

test('no jogo a mão NÃO sai: 0,8 s de oclusão mantém o braço, 1,2 s deixa expirar de verdade', async () => {
  const { readFileSync } = await import('node:fs');
  const vm = await import('node:vm');
  let t = 0;
  const sb = { console, isFinite, performance: { now: () => t } };
  sb.window = sb; sb.self = sb; sb.NextVRGame = {}; sb.slot = [{}, {}];
  vm.createContext(sb);
  vm.runInContext(readFileSync('tools/gorilla-rush/parts/hands.js', 'utf8'), sb);
  const pts = new Array(63).fill(0);
  for (let k = 0; k < 21; k++) { pts[k * 3] = 0.5; pts[k * 3 + 1] = 0.6; }
  pts[3] = 0.75; pts[27] = 0.6;
  const send = () => sb.__nvHands({ hands: [{ id: 'right', left: false, points: pts, palm: [0.5, 0.6], palmWidth: 0.2, pinching: false, fist: false }] });
  t = 0; send(); t = 100; send();
  // 800 ms sem NENHUM quadro de mão (mão batendo no chão / fora do quadro).
  t = 900; sb.__nvHands({ hands: [] });
  assert.ok(sb.slot[1].p, 'o braço continua lá durante a oclusão');
  assert.equal(sb.__nvHandsInfo().direita, true);
  // E depois de 1,2 s a mão sai DE VERDADE (o slot esvazia — regressão: antes ela ficava para sempre).
  t = 1500; sb.__nvHands({ hands: [] });
  assert.equal(sb.slot[1].p, null, 'passado o tempo, o slot é esvaziado');
  assert.equal(sb.__nvHandsInfo().direita, false);
  const src = readFileSync('tools/gorilla-rush/parts/hands.js', 'utf8');
  assert.ok(/NV_HOLD_MS = 1200, NV_EXTRAP_MS = 400/.test(src), 'a tolerância é 1,2 s com 0,4 s de extrapolação');
  assert.ok(src.includes('const fade = 1 - Math.min(1, age / NV_EXTRAP_MS) * 0.85;'),
    'a extrapolação perde força com o tempo (a mão não escapa em linha reta)');
});

test('o app troca o perfil de rastreio ao entrar e ao sair do Gorilla Rush', () => {
  const activity = readFileSync('nextvr-android/src/main/java/com/nextvr/app/NextVrActivity.java', 'utf8');
  const camera = readFileSync('nextvr-android/src/main/java/com/nextvr/app/PassthroughCamera.java', 'utf8');
  const hands = readFileSync('nextvr-android/src/main/java/com/nextvr/app/hands/PhoneXrHands.kt', 'utf8');
  const tracker = readFileSync('nextvr-android/src/main/java/com/nextvr/handtrack/HandTracker.kt', 'utf8');
  const gorillaOpen = activity.slice(activity.indexOf('private void openHtmlGame'), activity.indexOf('private void showCockpitGame'));
  assert.ok(gorillaOpen.includes('camera.setGameHandsProfile(true)'), 'entrar no Gorilla liga o perfil de jogo');
  const restart = activity.slice(activity.indexOf('private void restartTracking'));
  assert.ok(restart.includes('camera.setGameHandsProfile(false)'), 'sair do jogo devolve o perfil da interface');
  // Um perfil de jogo mais rápido e tolerante, no lugar do filtro de cursor.
  assert.ok(hands.includes('GAME_PREDICT_HORIZON_NS') && hands.includes('GAME_STATE_RETAIN_NS'),
    'PhoneXrHands tem o perfil de jogo (horizonte de predição e retenção maiores)');
  // 2.6.9 — o rastreio virou PALITO: só a BASE é filtrada (centro, eixo e comprimento da palma),
  // e o perfil do jogo é mais rápido e com menos zona morta do que o da interface.
  assert.ok(/val cx = HandGestures\.OneEuro\(minCutoff = if \(gameProfile\) 1\.6f else 1\.2f,\n\s+beta = if \(gameProfile\) 22\.0f else 12\.0f, deadZone = if \(gameProfile\) \.00035f else \.0007f\)/.test(hands),
    'e uma base filtrada mais rápida no jogo, com menos zona morta');
  assert.ok(hands.includes('stickPoints(') && hands.includes('STICK'),
    'a forma publicada é reconstruída da base (o palito), não copiada do detector');
  assert.ok(/consecutiveMisses >= if \(game\) GAME_MAX_PREDICT_MISSES else MAX_PREDICT_MISSES/.test(hands),
    'a mão é segurada por mais tempo no jogo');
  assert.ok(camera.includes('void setGameHandsProfile(boolean enabled)') && camera.includes('hands.setGameProfile(enabled)'),
    'a câmera repassa o perfil para o rastreio');
  assert.ok(tracker.includes('gameSlots') && tracker.includes('PROBE_FRAMES * 2'),
    'no jogo a sondagem de segundo slot custa metade (menos latência por quadro)');
  // E o detector NÃO é mais recriado a cada reabertura (era mão lenta/sumindo nos primeiros segundos).
  assert.ok(camera.includes('Reaproveita o detector já construído'),
    'PassthroughCamera reaproveita o detector em vez de reconstruir os grafos a cada reabertura');
});
