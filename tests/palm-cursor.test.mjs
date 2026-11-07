// Palm Cursor: a bolinha entre o polegar e o indicador aparece com a PALMA VOLTADA PARA A CÂMERA.
//
// O que estes testes travam (cada um foi um bug observado no aparelho):
//  • palma para a câmera -> bolinha; dorso da mão -> nenhuma bolinha (e some se estava aparecendo);
//  • a orientação NÃO pode depender da altura da mão: a mesma pose baixa e alta dá o mesmo valor;
//  • esquerda e direita não se invertem (a mesma pose nas duas mãos tem normais opostas);
//  • giro lento acompanha a orientação e não pisca no meio do caminho;
//  • tremor de ±2 mm não pisca; mão perdida por um quadro não apaga; perdida de verdade, apaga em fade;
//  • a posição da bolinha continua sendo entre o polegar e o indicador.
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PALM_CURSOR, PalmCursorGate, palmFacingFromHead, palmFacingOfHand,
  isBackOfHand, bolinhaNormalizedPoint, BolinhaMotion,
} from '../web/src/palm-cursor.js';

const rad = d => d * Math.PI / 180;
const norm = v => { const l = Math.hypot(...v); return v.map(c => c / l); };
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];

/**
 * Mão em espaço da cabeça (metros, olho na origem, x direita, y cima, −z à frente).
 *
 * `u` é a direção pulso → nós dos dedos (para onde os dedos apontam) e `out` é a direção "para fora da
 * palma" (para onde a palma olha). A partir desses dois a mão inteira é construída; o lado escolhe o
 * sentido do polegar, que é o que distingue as duas mãos fisicamente.
 */
function headHand({
  u = [0, 1, 0], out = [0, 0, 1], side = 'right',
  x = .12, y = -.2, z = -.42, scale = 1,
} = {}) {
  const U = norm(u), OUT = norm(out);
  // s: do indicador para o mínimo. Os dedos da mão DIREITA com a palma para fora dão
  // out = s × u; os da esquerda dão out = u × s. Era o contrário, e por isso a bolinha aparecia
  // com o dorso da mão: a mesma inversão que existia em palmNormal() e em isBackOfHand().
  const s = side === 'right' ? cross(OUT, U) : cross(U, OUT);
  const S = norm(s);
  const w = .042, L = .085;
  const at = (a, b) => [0, 1, 2].map(k => a * U[k] + b * S[k]);
  const pts = new Array(63).fill(0);
  const put = (i, v, dz = 0) => {
    pts[i * 3] = x + v[0] * scale;
    pts[i * 3 + 1] = y + v[1] * scale;
    pts[i * 3 + 2] = z + v[2] * scale + dz * scale;
  };
  put(0, [0, 0, 0]);                          // pulso
  put(5, at(L * .45, -w / 2));                // MCP do indicador
  put(9, at(L * .55, 0));                     // MCP do médio
  put(17, at(L * .42, w / 2));                // MCP do mínimo
  put(2, at(.02, -w * .55));                  // base do polegar
  put(4, at(L * .8, -w * 1.15));              // ponta do polegar
  put(8, at(L * 1.6, -w * .6));               // ponta do indicador
  return pts;
}

/** A mesma mão vista pela câmera: landmarks 2D (0..1, y para baixo), como o pacote sem 3D. */
function imageHand({ u = [0, 1, 0], out = [0, 0, 1], side = 'right', x = .5, y = .6, scale = .12 } = {}) {
  const head = headHand({ u, out, side, x: 0, y: 0, z: 0 });
  const pts = new Array(63).fill(0);
  for (let i = 0; i < 21; i++) {
    pts[i * 3] = x + head[i * 3] * scale * 8;
    pts[i * 3 + 1] = y - head[i * 3 + 1] * scale * 8;
    pts[i * 3 + 2] = 0;
  }
  return pts;
}

test('palma voltada para a câmera mede +1, dorso mede −1, e nada depende da altura da mão', () => {
  for (const side of ['right', 'left']) {
    const front = palmFacingFromHead(headHand({ side }), side === 'left');
    const back = palmFacingFromHead(headHand({ side, out: [0, 0, -1] }), side === 'left');
    assert.ok(front > .85, side + ': palma para a câmera mede ' + front);
    assert.ok(back < -.85, side + ': dorso mede ' + back);
  }
  // Baixa, alta ou lateral: a orientação é a mesma — não é a posição vertical que decide.
  const low = palmFacingFromHead(headHand({ y: -.6 }), false);
  const high = palmFacingFromHead(headHand({ y: .5 }), false);
  const sideways = palmFacingFromHead(headHand({ x: .6 }), false);
  // Continuam "de frente" em qualquer altura: o valor cai um pouco quando a mão está bem acima ou
  // abaixo do olho (a palma deixa de apontar exatamente para ele, e isso é física, não ruído), mas
  // nunca troca de sinal nem some.
  for (const v of [low, high, sideways]) assert.ok(v > PALM_CURSOR.showAt + .2, 'de frente em qualquer altura (' + v + ')');
  // E o dorso, na mesma altura que antes a bolinha aparecia, continua medindo negativo.
  for (const y of [-.6, .5]) assert.ok(palmFacingFromHead(headHand({ y, out: [0, 0, -1] }), false) < -.5, 'dorso em qualquer altura');
  // Palma para cima (dedos para a frente) NÃO é "de frente": é de perfil para a câmera.
  const palmUpProfile = palmFacingFromHead(headHand({ out: [0, 1, 0] }), false);
  assert.ok(Math.abs(palmUpProfile) < .12, 'palma para o teto fica de perfil (' + palmUpProfile + ')');
});

test('sentido da normal: a PALMA para a câmera é que acende (na mão física, não no desenho)', () => {
  // O bug relatado no aparelho: a bolinha aparecia com o DORSO da mão voltado para a câmera.
  // A causa não era a altura nem o lado: era o SENTIDO do "para fora da palma" em u × v, trocado
  // para as duas mãos. Aqui a geometria da mão é a física — polegar do lado do indicador, como a
  // pessoa vê a própria mão de frente para a câmera.
  for (const side of ['right', 'left']) {
    const isLeft = side === 'left';
    assert.ok(palmFacingFromHead(headHand({ side }), isLeft) > .85, side + ': palma para a câmera acende');
    assert.ok(palmFacingFromHead(headHand({ side, out: [0, 0, -1] }), isLeft) < -.85, side + ': dorso apaga');
    // 3D e 2D têm de concordar: se discordarem, a bolinha pisca entre um caminho e o outro.
    const palmHand = { left: isLeft, id: side, head: headHand({ side }), points: imageHand({ side }) };
    const backHand = { left: isLeft, id: side, head: null, points: imageHand({ side, out: [0, 0, -1] }) };
    const isRight = side === 'right';
    assert.ok(palmFacingOfHand(palmHand, isRight) > .8, side + ': 3D e 2D dizem palma');
    assert.ok(palmFacingOfHand(backHand, isRight) < -.5, side + ': 3D e 2D dizem dorso');
    // E o veto dos 2D, sozinho, tem de dizer a mesma coisa.
    assert.equal(isBackOfHand({ points: imageHand({ side }) }, isRight), false, side + ': 2D vê a palma');
    assert.equal(isBackOfHand({ points: imageHand({ side, out: [0, 0, -1] }) }, isRight), true, side + ': 2D vê o dorso');
  }
});

test('esquerda e direita concordam: nada de inversão entre as mãos', () => {
  const right = palmFacingFromHead(headHand({ side: 'right' }), false);
  const left = palmFacingFromHead(headHand({ side: 'left' }), true);
  assert.ok(Math.abs(right - left) < .02, 'as duas mãos com a palma para a câmera (' + right + ' / ' + left + ')');
  const rightBack = palmFacingFromHead(headHand({ side: 'right', out: [0, 0, -1] }), false);
  const leftBack = palmFacingFromHead(headHand({ side: 'left', out: [0, 0, -1] }), true);
  assert.ok(Math.abs(rightBack - leftBack) < .02, 'e as duas com o dorso para a câmera');
  assert.ok(rightBack < -.85, 'dorso continua sendo dorso nas duas mãos');
});

test('girar o pulso: frente > 45º > perfil > dorso, sem saltos', () => {
  // Dedos para cima e palma girando no plano horizontal (em torno do eixo dos dedos em y).
  const values = [0, 45, 90, 135, 180].map(turn => {
    const a = rad(turn);
    return palmFacingFromHead(headHand({ x: 0, y: 0, z: -.42, u: [0, 1, 0], out: [Math.sin(a), 0, Math.cos(a)] }), false);
  });
  for (let i = 1; i < values.length; i++) {
    assert.ok(values[i] < values[i - 1] + 1e-6, 'sequência monótona: ' + values.map(v => v.toFixed(2)).join(' > '));
  }
  assert.ok(Math.abs(values[2]) < .02, 'de perfil mede ~0 (' + values[2] + ')');
  assert.ok(values[4] < -.9, 'meia volta é o dorso (' + values[4] + ')');
});

test('mão degenerada ou sem landmarks 3D não é medida', () => {
  assert.equal(palmFacingFromHead(new Array(63).fill(0), false), null, 'mão colapsada');
  assert.equal(palmFacingFromHead(null, false), null, 'sem head');
  assert.equal(palmFacingOfHand({ points: new Array(63).fill(.5), left: false }), null, 'sem geometria 2D');
});

test('sem 3D o pacote 2D ainda separa palma de dorso (senão a bolinha sumiria num aparelho sem world landmarks)', () => {
  // O segundo parâmetro é "esta mão é a DIREITA". Antes ele se chamava `isRightBolinha` e o padrão
  // era `physicalLeft(hand)` — ou seja, uma mão esquerda sem o parâmetro era julgada pela regra da
  // direita. O nome e o padrão agora dizem a mesma coisa que o código faz.
  assert.ok(palmFacingOfHand({ id: 'right', left: false, points: imageHand({ side: 'right' }) }, true) > 0,
    'palma da direita medida nos 2D');
  // Mão DIREITA: dorso = polegar do lado de fora do indicador (o índice fica entre ele e o mínimo).
  const pts = new Array(63).fill(.5);
  pts[12] = .31; pts[15] = .39; pts[51] = .52;
  assert.equal(isBackOfHand({ points: pts }, true), true, 'direita: dorso');
  assert.ok(palmFacingOfHand({ points: pts, id: 'right', left: false }, true) < 0, 'dorso não acende a bolinha');
  pts[12] = .52; pts[15] = .39; pts[51] = .31;
  assert.equal(isBackOfHand({ points: pts }, true), false, 'direita: palma');
  assert.ok(palmFacingOfHand({ points: pts, id: 'right', left: false }, true) > 0);
  // Mão ESQUERDA: a geometria é espelhada, então o dorso é o polegar do outro lado.
  pts[12] = .52; pts[15] = .39; pts[51] = .31;
  assert.equal(isBackOfHand({ points: pts }, false), true, 'esquerda: dorso');
  pts[12] = .24; pts[15] = .39; pts[51] = .46;
  assert.equal(isBackOfHand({ points: pts }, false), false, 'esquerda: palma');
  // O padrão do segundo parâmetro deduz do pacote, e não inverte a esquerda.
  assert.equal(isBackOfHand({ points: pts, id: 'left', left: true }), false, 'padrão deduz a esquerda');
  // Folga de 2,5 cm: tremor do polegar perto do limiar não veta a bolinha.
  pts[12] = .405; pts[15] = .39; pts[51] = .31;
  assert.equal(isBackOfHand({ points: pts }, true), false, 'margem evita veto por tremor');
});

test('o 3D manda quando existe, mesmo que os 2D sugiram outra coisa', () => {
  const head = headHand({ side: 'right' });
  const pts = new Array(63).fill(.5);
  pts[12] = .31; pts[15] = .39; pts[51] = .52; // "dorso" nos 2D (polegar do outro lado do MCP)
  assert.ok(palmFacingOfHand({ points: pts, head, id: 'right', left: false }) > .5, 'a geometria 3D decide');
});

test('histerese: acende acima de 0,34 e só apaga abaixo de 0,16 depois da tolerância', () => {
  // Sem suavização aqui: este teste é do histerese, e a suavização tem o seu logo abaixo.
  const gate = new PalmCursorGate({ smoothTauMs: 1 });
  let t = 1000;
  gate.update({ facing: .28, nowMs: t });
  assert.equal(gate.visible, false, '0,28 não acende');
  gate.update({ facing: .40, nowMs: t += 40 });
  assert.equal(gate.visible, true, 'acima de 0,34 acende');
  gate.update({ facing: .22, nowMs: t += 40 });
  assert.equal(gate.visible, true, 'a zona morta não apaga');
  gate.update({ facing: .05, nowMs: t += 40 });
  assert.equal(gate.visible, true, 'um quadro abaixo do limiar baixo ainda não apaga');
  gate.update({ facing: .05, nowMs: t + PALM_CURSOR.graceMs + 10 });
  assert.equal(gate.visible, false, 'abaixo do limiar baixo por toda a tolerância apaga');
});

test('dorso apaga; virar a palma de volta acende, com fade na saída', () => {
  const gate = new PalmCursorGate();
  let t = 0;
  assert.equal(gate.update({ facing: 1, nowMs: t += 33 }).visible, true);
  // A mão vira: a suavização acompanha em alguns quadros (nada de corte instantâneo).
  let down = null;
  for (let i = 0; i < 20; i++) {
    down = gate.update({ facing: -1, nowMs: t += 33 });
    if (down.changed) {
      assert.equal(down.visible, false, 'dorso para a câmera apaga');
      assert.equal(down.fading, true, 'a saída é em fade, não um corte');
    }
  }
  assert.equal(down.visible, false, 'terminou apagada');
  assert.equal(gate.update({ facing: 1, nowMs: t += 500 }).visible, true, 'volta a acender');
});

test('a suavização precisa de alguns quadros para acender — e isso é o que mata o piscar', () => {
  const gate = new PalmCursorGate();
  let t = 0;
  assert.equal(gate.update({ facing: .4, nowMs: t += 33 }).visible, true, 'primeira medida já acende');
  // Um único quadro "para baixo" no meio do movimento NÃO apaga: a média ainda está alta.
  assert.equal(gate.update({ facing: -1, nowMs: t += 33 }).visible, true, 'um quadro ruim não apaga');
  const back = gate.update({ facing: 1, nowMs: t += 33 });
  assert.equal(back.visible, true);
  assert.ok(back.facing > .28, 'e a orientação volta a subir (' + back.facing + ')');
  assert.equal(back.changed, false, 'sem liga/desliga: a bolinha nunca piscou');
});

test('giro lento acompanha a orientação sem piscar no meio do caminho', () => {
  const gate = new PalmCursorGate();
  let t = 0, changes = 0, last = false;
  for (let i = 0; i <= 60; i++) {
    const facing = Math.cos(rad(i * 3)); // 1 -> -1 em ~2 s, 33 ms por quadro
    const out = gate.update({ facing, nowMs: t += 33 });
    assert.ok(out.progress >= 0 && out.progress <= 1, 'progresso sempre em [0,1]');
    if (out.changed) { changes++; assert.notEqual(out.visible, last, 'changed só quando o estado muda'); }
    last = out.visible;
  }
  assert.equal(changes, 2, 'um liga e um desliga num giro completo (' + changes + ')');
  assert.equal(gate.visible, false, 'termina escondida com o dorso para a câmera');
});

test('tremor de ±2 mm na palma não pisca a bolinha', () => {
  const gate = new PalmCursorGate();
  let t = 0;
  for (let i = 0; i < 120; i++) gate.update({ facing: .45 + Math.sin(i * 1.7) * .02, nowMs: t += 33 });
  assert.equal(gate.visible, true, 'estável durante o tremor');
});

test('mão perdida por um quadro não apaga; perdida de verdade apaga', () => {
  const gate = new PalmCursorGate();
  let t = 0;
  gate.update({ facing: .9, nowMs: t += 33 });
  assert.equal(gate.visible, true);
  gate.update({ facing: null, nowMs: t += 33 });
  assert.equal(gate.visible, true, 'uma falha de rastreamento não pisca');
  const gone = gate.update({ facing: null, nowMs: t + PALM_CURSOR.graceMs + 10 });
  assert.equal(gone.visible, false, 'sem medida por toda a tolerância apaga');
});

test('a bolinha fica entre o polegar e o indicador', () => {
  // Dedos para cima e palma para a câmera: a pose que a imagem consegue medir.
  const p = imageHand({ side: 'right' });
  const pt = bolinhaNormalizedPoint({ points: p });
  const thumbU = p[12], thumbV = p[13], indexU = p[24], indexV = p[25];
  assert.ok(pt.u > Math.min(thumbU, indexU) && pt.u < Math.max(thumbU, indexU), 'u entre polegar e indicador');
  assert.ok(pt.v > Math.min(thumbV, indexV) && pt.v < Math.max(thumbV, indexV), 'v entre polegar e indicador');
  // O mapeamento do pacote (sx/sy) desloca o ponto junto com a mão, sem sair da tela.
  const scaled = bolinhaNormalizedPoint({ points: p }, 1.3, 1.3);
  assert.ok(scaled.u >= .08 && scaled.u <= .92 && scaled.v >= .08 && scaled.v <= .9);
});

test('a posição da bolinha é suavizada: tremor de landmark não vira tremedeira na tela', () => {
  const motion = new BolinhaMotion();
  let now = 0;
  const first = motion.update({ u: .5, v: .5 }, now);
  assert.deepEqual(first, { u: .5, v: .5 }, 'a primeira amostra é exata: nada de deslizar até a mão');
  // Tremor de ±0,0012 (menos que a zona morta) em 120 quadros: a bolinha não se mexe.
  let maxDev = 0;
  for (let i = 0; i < 120; i++) {
    const p = motion.update({ u: .5 + Math.sin(i) * .0012, v: .5 + Math.cos(i) * .0012 }, now += 16);
    maxDev = Math.max(maxDev, Math.hypot(p.u - .5, p.v - .5));
  }
  assert.ok(maxDev < .0005, 'zona morta mata o tremor (' + maxDev + ')');
  // Movimento de verdade: acompanha e chega perto em poucos quadros (sem arrastar atrás).
  let p = null;
  for (let i = 0; i < 20; i++) p = motion.update({ u: .6, v: .4 }, now += 16);
  assert.ok(Math.abs(p.u - .6) < .002 && Math.abs(p.v - .4) < .002, 'segue a mão (' + p.u + ', ' + p.v + ')');
  // Um salto grande é suavizado, não teleporta no primeiro quadro.
  const step = motion.update({ u: .8, v: .4 }, now += 16);
  assert.ok(step.u > .6 && step.u < .8, 'passa pelo caminho (' + step.u + ')');
  motion.reset();
  assert.deepEqual(motion.update({ u: .9, v: .1 }, now += 16), { u: .9, v: .1 }, 'depois de sumir, volta a ser exata');
});
