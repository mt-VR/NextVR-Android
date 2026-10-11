// Multitarefa em arco: até 3 apps abertos por vez, numa única fileira curva centrada
// (o "arco" do multitarefa). Módulo puro, sem DOM, para ser testado direto no node.

/** Quantos apps o arco comporta ao mesmo tempo. */
export const ARC_CAPACITY = 3;

/**
 * Ângulos (rad) dos slots do arco para n janelas, NA ORDEM em que as janelas os ocupam: o primeiro
 * app fica no CENTRO (0) e os seguintes alternam direita/esquerda em volta dele (+passo, -passo).
 *
 * Antes o arco era simétrico — duas janelas viravam [-passo/2, +passo/2], ou seja NENHUMA no centro
 * e as duas deslocadas, sobrepostas na visão do usuário. Agora o centro é sempre ocupado primeiro,
 * e como o layout é por índice, fechar um app faz os que sobraram deslizarem para os primeiros
 * slots: o app que estava ao lado vai para o centro.
 *
 * Nunca devolve mais slots que ARC_CAPACITY.
 */
export function arcAngles(n, step) {
  const count = Math.max(0, Math.min(ARC_CAPACITY, n | 0));
  const out = [];
  for (let k = 0; k < count; k++) {
    if (k === 0) out.push(0);
    else out.push((k % 2 ? 1 : -1) * Math.ceil(k / 2) * step);
  }
  return out;
}

/**
 * Posições horizontais [x, z] (metros) dos slots do arco: (sin a * dist, -cos a * dist),
 * todas sobre o círculo de raio `dist` voltadas para o usuário.
 */
export function arcLayout(n, { step, dist }) {
  return arcAngles(n, step).map(a => [Math.sin(a) * dist, -Math.cos(a) * dist]);
}

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
