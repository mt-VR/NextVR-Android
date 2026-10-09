// Multitarefa em arco: até 3 apps abertos por vez, numa única fileira curva centrada
// (o "arco" do multitarefa). Módulo puro, sem DOM, para ser testado direto no node.

/** Quantos apps o arco comporta ao mesmo tempo. */
export const ARC_CAPACITY = 3;

/**
 * Ângulos (rad) dos slots do arco para n janelas, centrados em 0 e simétricos.
 * Nunca devolve mais slots que ARC_CAPACITY.
 */
export function arcAngles(n, step) {
  const count = Math.max(0, Math.min(ARC_CAPACITY, n | 0));
  const out = [];
  for (let k = 0; k < count; k++) out.push(count === 1 ? 0 : (-((count - 1) * step) / 2) + k * step);
  return out;
}

/**
 * Posições horizontais [x, z] (metros) dos slots do arco: (sin a * dist, -cos a * dist),
 * todas sobre o círculo de raio `dist` voltadas para o usuário.
 */
export function arcLayout(n, { step, dist }) {
  return arcAngles(n, step).map(a => [Math.sin(a) * dist, -Math.cos(a) * dist]);
}

/**
 * A janela menos recentemente focada (LRU): é ela que sai do arco quando um app novo abre
 * com o arco cheio. `lastFocus` ausente conta como a mais antiga.
 */
export function pickLru(windows) {
  let lru = null;
  for (const w of windows) if (!lru || (w.lastFocus || 0) < (lru.lastFocus || 0)) lru = w;
  return lru;
}
