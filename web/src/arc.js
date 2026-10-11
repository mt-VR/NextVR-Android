// Multitarefa em arco: até 5 apps abertos por vez, numa única fileira curva centrada
// (o "arco" do multitarefa). Módulo puro, sem DOM, para ser testado direto no node.

/** Quantos apps o arco comporta ao mesmo tempo. */
export const ARC_CAPACITY = 5;

/**
 * Slots do arco para n janelas, NA ORDEM em que as janelas os ocupam. O primeiro app fica no
 * CENTRO (ângulo 0) e os seguintes alternam direita/esquerda em volta dele (+passo, -passo).
 *
 * Antes o arco era simétrico — duas janelas viravam [-passo/2, +passo/2], ou seja NENHUMA no centro
 * e as duas deslocadas, sobrepostas na visão do usuário. Agora o centro é sempre ocupado primeiro,
 * e como o layout é por índice, fechar um app faz os que sobraram descerem para os primeiros
 * slots: o app que estava ao lado vai para o centro.
 *
 * Com CINCO lugares a fileira única não cabe no campo de visão: cinco janelas de meia janela de
 * folga pedem ~4 rad de arco, e o usuário só alcança ±1,3 rad. As três primeiras continuam na
 * fileira principal (centro, direita, esquerda) e as outras duas vão para uma FILEIRA SUPERIOR,
 * centrada e mais larga — mesmo tamanho de janela, tudo ao alcance do olhar. A fileira de cima se
 * recentra sozinha (uma janela em cima fica no meio; duas ficam em ±passo/2).
 *
 * Nunca devolve mais slots que ARC_CAPACITY.
 */
export function arcSlots(n, step) {
  const count = Math.max(0, Math.min(ARC_CAPACITY, n | 0));
  const bottom = Math.min(3, count), top = count - bottom;
  const out = [];
  for (let k = 0; k < bottom; k++) out.push({ angle: k === 0 ? 0 : (k % 2 ? step : -step), row: 0 });
  for (let k = 0; k < top; k++) out.push({ angle: top === 1 ? 0 : (k === 0 ? -step / 2 : step / 2), row: 1 });
  return out;
}

/** Ângulos do arco na ordem dos slots (compatibilidade: o layout usa `arcSlots`). */
export function arcAngles(n, step) {
  return arcSlots(n, step).map(s => s.angle);
}

/**
 * Posições horizontais [x, z] (metros) dos slots do arco: (sin a * dist, -cos a * dist),
 * todas sobre o círculo de raio `dist` voltadas para o usuário.
 */
export function arcLayout(n, { step, dist }) {
  return arcAngles(n, step).map(a => [Math.sin(a) * dist, -Math.cos(a) * dist]);
}

/** Altura relativa da fileira superior, em unidades de altura de janela (`halfHeight`). */
export const ARC_TOP_ROW_STEP = 1.22;

/** Largura angular (rad) que uma janela de `width` metros ocupa a `dist` metros do olho. */
export function windowAngle(width, dist) {
  return 2 * Math.atan(Math.max(0, width) / (2 * Math.max(1e-3, dist)));
}

/**
 * Passo angular entre dois slots do arco: a largura angular da MAIOR janela mais `gap` janelas de
 * folga (0.5 = meia janela de vão entre duas bordas vizinhas).
 *
 * Com janelas grandes e o arco perto, a folga pedida não cabe no campo de visão: o passo é limitado
 * a `outerLimit` (o limite de yaw do workspace) para a janela mais externa continuar alcançável pelo
 * olhar — a folga fica então a que couber, nunca uma janela fora de alcance. Aumentar a "Distância
 * do arco" ou diminuir a "Escala" reduz a largura angular e devolve a folga completa.
 */
export function arcStep({ width, dist, gap = .5, outerLimit = 1.30 }) {
  const angle = windowAngle(width, dist);
  return Math.min(angle * (1 + Math.max(0, gap)), Math.max(0, outerLimit));
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
