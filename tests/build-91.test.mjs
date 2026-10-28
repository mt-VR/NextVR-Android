// Build 91 — a lanterna piscava: acendia, a própria luz subia a leitura da câmera, ela apagava, o
// quarto voltava a ficar escuro e ela acendia de novo. Aqui a decisão é simulada em tempo real
// (leitura a cada 1,2 s) para provar que isso não acontece mais.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

import {
  decideTorch, NO_LIGHT, ENOUGH_LIGHT, SELF_MIN, SETTLE_MS, MIN_ON_MS, MIN_OFF_MS,
  ON_CONFIRM, OFF_CONFIRM, PARK_MS, STABLE_ON_MS,
} from '../web/src/night-camera-math.js';

const read = p => readFileSync(p, 'utf8');
const POLL_MS = 1200;

/**
 * Simulador do aparelho. `ambient` é a luz real do ambiente (0..1). Com a lanterna acesa, a câmera
 * vê `ambient + TORCH_LIGHT` — é exatamente esse "truque" que fazia a versão antiga piscar.
 */
function sim({ ambient, torchLight = 0.35, seconds = 120, startOn = false, state = {}, now = 0 }) {
  let on = startOn;
  let st = { ...state };
  const events = [];
  const samples = Math.round((seconds * 1000) / POLL_MS);
  for (let i = 0; i < samples; i++) {
    now += POLL_MS;
    const a = typeof ambient === 'function' ? ambient(now, on) : ambient;
    const level = Math.max(0, Math.min(1, a + (on ? torchLight : 0)));
    const d = decideTorch(level, on, st, now);
    st = d;
    if (d.changed) {
      on = d.torchOn;
      events.push({ at: now, on, reason: d.reason });
    }
  }
  return { on, st, events, now };
}

test('Build 91: in a pitch-dark room the flashlight turns on once and STAYS on', () => {
  // 0,05 de luz real; a lanterna soma 0,35 na leitura (0,40 com ela acesa).
  const r = sim({ ambient: 0.05, torchLight: 0.35, seconds: 180 });
  assert.deepEqual(r.events.map(e => e.on), [true], 'um único evento: acendeu');
  assert.equal(r.on, true);
  assert.ok(r.events[0].at <= ON_CONFIRM * POLL_MS + 1, 'acende rapidinho quando está escuro');
  // A calibração tem que ter descontado a luz da própria lanterna.
  assert.ok(r.st.selfGain >= SELF_MIN, 'a luz da lanterna foi medida e descontada');
  assert.ok(r.st.ambient !== null && r.st.ambient < ENOUGH_LIGHT, 'o ambiente estimado continua escuro');
});

test('Build 91: even a very bright flashlight (near saturation) does not turn itself off', () => {
  // Caso extremo: a lanterna joga a leitura de 0,03 para 0,95.
  const r = sim({ ambient: 0.03, torchLight: 0.92, seconds: 180 });
  assert.deepEqual(r.events.map(e => e.on), [true], 'sem piscadas mesmo com a leitura quase no teto');
});

test('Build 91: when real light comes back, it turns off and stays off', () => {
  // 20 s de breu, depois a luz do quarto acende de verdade (0,75) para sempre.
  const r = sim({
    ambient: now => (now < 20000 ? 0.05 : 0.75),
    torchLight: 0.35,
    seconds: 240,
  });
  const onEvents = r.events.filter(e => e.on);
  const offEvents = r.events.filter(e => !e.on);
  assert.equal(onEvents.length, 1, 'acendeu uma vez');
  assert.equal(offEvents.length, 1, 'apagou uma vez, quando a luz voltou');
  assert.ok(offEvents[0].at > 20000, 'só apagou depois que a luz realmente voltou');
  assert.equal(offEvents[0].reason, 'light-back');
  assert.equal(r.on, false, 'e ficou apagada');
});

test('Build 91: flickering room light does not make the flashlight blink forever', () => {
  // Luz instável: 4 s clara, 4 s escura, repetindo — o pior cenário possível.
  const r = sim({
    ambient: now => (Math.floor(now / 4000) % 2 === 0 ? 0.7 : 0.05),
    torchLight: 0.35,
    seconds: 600,
  });
  assert.ok(r.events.length <= 6,
    `no máximo alguns ciclos e depois silêncio (aconteceram ${r.events.length})`);
  const parks = r.events.some(e => e.reason === 'light-back');
  assert.ok(parks || r.events.length <= 2, 'na dúvida ele para de tentar em vez de piscar');
});

test('Build 91: three short cycles park the flashlight instead of blinking', () => {
  let on = false;
  let st = {};
  let now = 0;
  const run = (level, ms) => {
    const end = now + ms;
    while (now < end) {
      now += POLL_MS;
      const d = decideTorch(level, on, st, now);
      st = d;
      on = d.torchOn;
    }
  };
  // Ciclo curto = acende no escuro e a cena clareia antes de STABLE_ON_MS.
  const shortCycle = () => {
    run(0.02, 9000);         // escuro: acende em ~4 s
    assert.equal(on, true, 'acendeu no escuro');
    run(0.95, 14000);        // a luz volta logo (ficou ligada menos de 20 s: ciclo curto)
    assert.equal(on, false, 'apagou quando a luz voltou');
    run(0.80, 10000);
    assert.equal(on, false, 'e continuou apagada no ambiente claro');
  };

  shortCycle();
  shortCycle();
  assert.equal(st.parkUntil > 0, false, 'com 2 ciclos ainda não estaciona');
  shortCycle();
  assert.ok(st.parkUntil > 0, 'no terceiro ciclo curto ele estaciona em vez de piscar');

  run(0.02, 60000);
  assert.equal(on, false, 'estacionado: fica apagada mesmo no escuro');
  assert.equal(st.reason, 'parked');

  // Passado o descanso, volta a valer (e começa do zero).
  now = st.parkUntil + POLL_MS;
  run(0.02, 40000);
  assert.equal(on, true, 'depois do descanso ele tenta de novo');
  assert.equal(st.parkUntil, -1);
});

test('Build 91: the shell keeps the calibration state and does not let the night mode fight the torch', () => {
  const src = read('web/src/night-camera.js');
  assert.ok(src.includes('baseline: decision.baseline') && src.includes('selfGain: decision.selfGain'),
    'a calibração da luz própria é guardada entre as leituras');
  assert.ok(src.includes('cycles: decision.cycles') && src.includes('parkUntil: decision.parkUntil'),
    'o anti-pisca por histórico também');
  assert.ok(src.includes('if (result.changed && !torchOn) apply(result.active)'),
    'com a lanterna acesa o modo noturno não reage à luz dela');
  assert.ok(src.includes('torchSmooth = torchSmooth < 0 ? level : torchSmooth * 0.5 + level * 0.5'),
    'leitura própria, mais rápida, para a lanterna');
  assert.ok(src.includes('torchAmbient'), 'o estado mostra a luz do ambiente já descontada');
  assert.ok(src.includes("if (torchOn && active && wanted === 'auto') apply(false);"),
    'com o flash aceso o +EV do modo noturno sai de cena (senão estoura e cega a medição)');

  const math = read('web/src/night-camera-math.js');
  assert.ok(math.includes('SETTLE_MS'), 'espera o AE/LED estabilizar antes de medir');
  assert.ok(math.includes('const self = Math.max(SELF_MIN, Math.min(SELF_MAX, level - base));'),
    'calibra quanto a própria lanterna soma');
  assert.ok(math.includes('const ambient = Math.max(0, level - self);'),
    'e decide pela luz do ambiente, não pela luz que ela mesma faz');
  assert.ok(PARK_MS >= 60000, 'o descanso do anti-pisca é longo');
  assert.ok(ENOUGH_LIGHT > NO_LIGHT && SETTLE_MS > 0 && MIN_ON_MS >= 5000 && MIN_OFF_MS >= 5000);
});

test('Build 91: settings show the ambient light and why the flashlight decided that', () => {
  const entry = read('web/src/entry-menu.js');
  assert.ok(entry.includes('torchAmbient'), 'o painel usa a luz ambiente estimada');
  assert.ok(entry.includes('lanterna ACESA'), 'e continua mostrando o estado da lanterna');
});
