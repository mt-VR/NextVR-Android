import test from 'node:test';
import assert from 'node:assert/strict';
import { DirectTouch, DirectTouchHand, POKE, POKE_STATE } from '../web/src/direct-touch.js';

/**
 * O Toque Direto precisa ser chato de propósito.
 *
 * Cada teste aqui é um clique acidental que o usuário descreveu: o dedo passando por cima do botão, o
 * tremor do rastreador, a mão parada em frente ao painel, o dedo apertado por dois segundos. Nenhum
 * deles pode executar ação — e o toque de verdade tem que continuar funcionando na primeira tentativa.
 *
 * O relógio anda em passos de 33 ms, que é o que o rastreador de mãos entrega no aparelho.
 */

const FRAME = 33;

function rig(options = {}) {
  const hand = options.hand || new DirectTouchHand();
  let now = 1000;
  const events = [];
  const api = {
    hand,
    events,
    get state() { return hand.state; },
    frame(depth, opts = {}) {
      const result = hand.update({
        targetKey: opts.key === undefined ? 'k:botao' : opts.key,
        inside: opts.inside !== false,
        depth,
        nowMs: now,
        predicted: opts.predicted === true,
      });
      events.push(...result.events);
      now += opts.step === undefined ? FRAME : opts.step;
      return result;
    },
    frames(count, depth, opts) {
      let result = null;
      for (let i = 0; i < count; i++) result = api.frame(depth, opts);
      return result;
    },
    /** Aproxima (sem encostar), encosta e empurra: o gesto de toque completo, 1 clique. */
    touch(key) {
      api.frame(0.11, { key });
      api.frames(2, 0.06, { key });
      api.frames(2, 0.02, { key });
      return api.frames(3, -0.010, { key });
    },
    count(event) { return events.filter(e => e === event).length; },
  };
  return api;
}

test('passar o dedo por cima do botão NÃO clica, só acende', () => {
  // Aproximação mantendo o dedo a 40–75 mm do vidro: exactamente o gesto que abria aplicativos
  // antes. Agora tem que acender o botão e mais nada.
  const r = rig();
  r.frame(0.11);
  r.frames(2, 0.09);
  r.frame(0.075);
  r.frames(4, 0.06);
  r.frames(3, 0.05);
  r.frames(2, 0.06);
  assert.deepEqual(r.events, ['hover'], 'só o destaque de aproximação pode sair');
  assert.equal(r.state, POKE_STATE.hover);
  assert.equal(r.hand.pressed, false);
});

test('dedo parado no ar em frente ao botão não clica, mesmo por muito tempo', () => {
  const r = rig();
  r.frame(0.10);
  r.frames(90, 0.05); // ~3 s a 5 cm do vidro
  assert.deepEqual(r.events, ['hover']);
  assert.equal(r.count('press'), 0);
});

test('o tremor do rastreamento não vira clique', () => {
  // ±8 mm de ruído em volta de 3 cm, que é o que o modelo entrega com a mão tremendo: atravessa a
  // banda de contacto, mas nunca a de pressão. Antes era isto que disparava o "levantar o dedo".
  const r = rig();
  r.frame(0.10);
  r.frame(0.038);
  for (let i = 0; i < 80; i++) r.frame(0.03 + (i % 3 === 0 ? 0.009 : -0.009));
  assert.equal(r.count('press'), 0, `tremor não pode clicar (eventos: ${r.events.join(',')})`);
});

test('encostar e empurrar o vidro clica uma vez', () => {
  const r = rig();
  r.frame(0.10);
  r.frame(0.06);
  r.frame(0.03);
  r.frame(0.012);
  const result = r.frames(3, -0.010);
  assert.equal(r.count('press'), 1, 'exatamente um clique');
  assert.equal(r.count('hover'), 1);
  assert.equal(r.count('contact'), 1, 'o contacto na ponta do dedo é anunciado antes da pressão');
  assert.equal(result.state, POKE_STATE.pressed);
});

test('dedo apertado por dois segundos não repete o clique', () => {
  const r = rig();
  r.frames(2, 0.06);
  r.frames(2, 0.02);
  r.frames(3, -0.010);
  assert.equal(r.count('press'), 1);
  r.frames(60, -0.011); // mais 2 s com o dedo apertado
  assert.equal(r.count('press'), 1, 'segurar não pode repetir o clique');
  assert.equal(r.state, POKE_STATE.pressed);
});

test('só clica de novo depois de sair da área de contacto', () => {
  const r = rig();
  r.frames(2, 0.06);
  r.frames(2, 0.02);
  r.frames(3, -0.010);
  assert.equal(r.state, POKE_STATE.pressed);
  // Volta a 3 cm: saiu do vidro, mas continua perto — estado `released`.
  assert.equal(r.frame(0.030).state, POKE_STATE.released);
  // Mesmo empurrando de novo AGORA, não clica: precisa sair de verdade primeiro.
  r.frames(4, -0.010);
  assert.notEqual(r.state, POKE_STATE.pressed, 'sem rearmar não existe segunda pressão');
  assert.equal(r.count('press'), 1);
  // Afasta além do rearme e refaz o gesto: agora sim, um segundo clique.
  r.frame(0.10);
  assert.equal(r.state, POKE_STATE.idle);
  r.frames(2, 0.06);
  r.frames(2, 0.02);
  r.frames(3, -0.010);
  assert.equal(r.state, POKE_STATE.pressed);
  assert.equal(r.count('press'), 2, 'depois de sair da área, um novo toque clica');
});

test('a pressão relativa funciona mesmo com a profundidade deslocada', () => {
  // Um aparelho em que o plano medido fica 1 cm à frente do vidro real: o dedo nunca chega a
  // `POKE.press` em termos absolutos, mas avança até a banda perto do vidro — o gesto é o mesmo.
  const r = rig();
  const offset = 0.012;
  r.frame(0.09 + offset);
  r.frame(0.075 + offset);
  r.frame(0.055 + offset);
  r.frame(0.032 + offset);
  r.frames(3, 0.022 + offset);
  assert.equal(r.count('press'), 1, 'o avanço de 5 cm confirma a pressão mesmo com a profundidade deslocada');
});

test('um desvio de escala na profundidade não deixa o alvo inalcançável', () => {
  // Dock e teclado: a profundidade vem da escala métrica do rastreio e pode estar alguns
  // centímetros à frente do real. Aqui o desvio é +4 cm — a ponta NUNCA chega aos 35 mm da banda
  // nem atravessa o plano, mas caminha 4 cm na direção do vidro, que é o gesto.
  const r = rig();
  r.frame(0.075, { key: 'dock:browser' });
  r.frame(0.07, { key: 'dock:browser' });
  r.frame(0.06, { key: 'dock:browser' });
  r.frame(0.05, { key: 'dock:browser' });
  r.frame(0.04, { key: 'dock:browser' });
  r.frames(3, 0.035, { key: 'dock:browser' });
  assert.equal(r.count('press'), 1, 'chegar na metade do caminho até o vidro conta como pressão');
});

test('atravessar o plano sem se aproximar antes não clica', () => {
  // Um quadro que já chega 1 cm atrás do vidro, sem histórico de aproximação: é ruído de rastreio
  // (ou uma mão que apareceu do nada), não um toque.
  const r = rig();
  r.frames(5, -0.010);
  assert.equal(r.count('press'), 0, 'sem aproximação não existe toque');
});

test('amostras preditas nunca clicam nem soltam', () => {
  const r = rig();
  r.frame(0.06);
  r.frame(0.03);
  const before = r.state;
  for (let i = 0; i < 20; i++) {
    const result = r.frame(-0.02, { predicted: true });
    assert.equal(result.events.includes('press'), false, 'predição não pode clicar');
    assert.equal(r.state, before, 'predição também não avança o estado');
  }
});

test('sair do alvo cancela a pressão em andamento', () => {
  const r = rig();
  r.frames(2, 0.05);
  r.frames(2, 0.01);
  r.frames(3, -0.009);
  assert.equal(r.state, POKE_STATE.pressed);
  const outside = r.frame(-0.009, { inside: false });
  assert.ok(outside.events.includes('release'), 'sair da área solta o botão');
  assert.equal(r.state, POKE_STATE.idle, 'e rearma na hora: sair do alvo já libera o próximo toque');
  assert.ok(outside.events.includes('unhover'));
});

test('trocar de alvo no meio do gesto não clica no alvo errado', () => {
  const r = rig();
  r.frame(0.05, { key: 'k:a' });
  const moved = r.frame(-0.009, { key: 'k:b' });
  assert.equal(moved.events.includes('press'), false, 'chegar apertado em outro botão não é um toque nele');
  assert.equal(moved.targetKey, 'k:b');
  assert.ok(r.events.includes('unhover') || r.events.includes('hover'));
});

test('dois cliques seguidos dentro do debounce não saem os dois', () => {
  const r = rig();
  r.frames(2, 0.05);
  r.frames(2, 0.02);
  r.frames(3, -0.009);
  assert.equal(r.count('press'), 1);
  // Solta, rearma e empurra de novo em menos de POKE.debounceMs: o botão afunda, mas o clique é
  // engolido — dois aplicativos abertos por um toque duplo acidental, nunca mais.
  r.frame(0.10);
  r.frame(0.05);
  r.frame(0.02);
  r.frame(-0.009);
  assert.equal(r.count('press'), 1, 'dentro do intervalo mínimo o segundo clique não sai');
  assert.equal(r.count('stuck'), 1, 'e o botão ainda mostra a pressão');
  // Passado o intervalo, um novo toque normal clica.
  r.frames(9, 0.10);
  r.frames(2, 0.05);
  r.frames(2, 0.02);
  r.frames(2, -0.009);
  assert.equal(r.count('press'), 2);
});

test('duas mãos têm máquinas independentes', () => {
  const touch = new DirectTouch();
  let now = 1000;
  touch.update('left', { targetKey: 'k:l', inside: true, depth: 0.05, nowMs: now });
  touch.update('right', { targetKey: 'k:r', inside: true, depth: 0.05, nowMs: now });
  assert.equal(touch.pressed('left'), false);
  assert.equal(touch.pressed('right'), false);
  for (let i = 0; i < 6; i++) {
    now += FRAME;
    touch.update('right', { targetKey: 'k:r', inside: true, depth: -0.010, nowMs: now });
    touch.update('left', { targetKey: 'k:l', inside: true, depth: 0.05, nowMs: now });
  }
  assert.equal(touch.pressed('right'), true);
  assert.equal(touch.pressed('left'), false, 'a pressão da direita não autoriza a esquerda');
  assert.equal(touch.anyPressed(), true);
  touch.resetAll();
  assert.equal(touch.pressed('right'), false);
  assert.equal(touch.anyPressed(), false);
});

test('perder a mão no meio da pressão não deixa clique pendente', () => {
  const touch = new DirectTouch();
  touch.update('right', { targetKey: 'k', inside: true, depth: 0.05, nowMs: 1000 });
  touch.update('right', { targetKey: 'k', inside: true, depth: -0.010, nowMs: 1033 });
  touch.reset('right');
  const after = touch.update('right', { targetKey: 'k', inside: true, depth: 0.05, nowMs: 1066 });
  assert.equal(after.events.includes('press'), false);
  assert.equal(after.state, POKE_STATE.hover);
});

test('o progresso acompanha a aproximação (é o que a interface desenha)', () => {
  const r = rig();
  r.frame(POKE.hoverExit - 0.01); // vem de longe: a referência do avanço é a entrada na faixa
  assert.equal(r.frame(POKE.hoverEnter + 0.02).progress, 0);
  const mid = r.frame((POKE.hoverEnter + POKE.press) / 2);
  assert.ok(mid.progress > 0.4 && mid.progress < 0.65, `meio do caminho ≈ 0,5 (${mid.progress})`);
  assert.ok(r.frame(0.012).progress > 0.7, 'encostando, a barra já encheu');
  assert.equal(r.frame(POKE.press).progress, 1);
});
