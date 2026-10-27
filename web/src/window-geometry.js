// Regras puras do workspace. Separadas do DOM/THREE para testes determinísticos.
export const WINDOW_LIMITS = Object.freeze({
  minDistance: .38,
  maxDistance: 1.60,
  maxYaw: 1.36,                 // ~78° para cada lado da frente do workspace
  lowerEdgeFromEye: -.78,
  upperEdgeFromEye: .78,
  dragActivationPx: 18,
  resizeActivationPx: 14,
  motionDeadZone: .006,
  maxMotionStep: .14,
  minResize: .72,
  // Build 89: "deixa o negocio de aumentar o tamanho das janelinhas flutuantes ate 300%".
  // 3.00 = 300% do tamanho base da janela, o suficiente para assistir video/filme de longe.
  maxResize: 3.00,
  // Folga vertical usada pelo limite de redimensionamento: sem ela o teto de 300% nunca seria
  // alcancado (a janela bateria na borda de cima/baixo antes), que era o bug do build 82.
  resizeOverscan: .60,
});

const clamp = (value, low, high) => Math.max(low, Math.min(high, value));
const finite = value => Number.isFinite(value) ? value : 0;

/**
 * Mantém toda a altura da janela na faixa confortável e o centro no arco frontal.
 * O retorno é um objeto novo para que esta função possa ser usada sem THREE nos testes.
 *
 * `radius` FIXA a distância ao olho em vez de preservar a do ponto recebido: é o que o arrasto
 * passa para a janela não ganhar profundidade enquanto é movida. Sem ele o raio do próprio ponto é
 * preservado (o comportamento de sempre, usado pelo layout e pelo redimensionamento).
 */
export function clampWindowPosition(point, halfHeight = 0, eye = 1.55, radius = null) {
  let x = finite(point?.x), y = Number.isFinite(point?.y) ? point.y : eye, z = finite(point?.z);
  let r = Number.isFinite(radius) ? radius : Math.hypot(x, z);
  if (r < 1e-5) { r = WINDOW_LIMITS.minDistance; x = 0; z = -r; }
  const yaw = clamp(Math.atan2(-x, -z), -WINDOW_LIMITS.maxYaw, WINDOW_LIMITS.maxYaw);
  r = clamp(r, WINDOW_LIMITS.minDistance, WINDOW_LIMITS.maxDistance);
  const safeHalf = Math.max(0, finite(halfHeight));
  const low = eye + WINDOW_LIMITS.lowerEdgeFromEye + safeHalf;
  const high = eye + WINDOW_LIMITS.upperEdgeFromEye - safeHalf;
  y = low <= high ? clamp(y, low, high) : eye;
  return { x: -Math.sin(yaw) * r, y, z: -Math.cos(yaw) * r };
}

/** Distância do gesto em pixels lógicos do HUD, independente da proporção da tela. */
export function gestureDistancePx(start, current, width = 1200, height = 800) {
  if (!start || !current) return 0;
  return Math.hypot((finite(current.x) - finite(start.x)) * width,
    (finite(current.y) - finite(start.y)) * height);
}

export function dragGestureActivated(start, current, width, height) {
  return gestureDistancePx(start, current, width, height) >= WINDOW_LIMITS.dragActivationPx;
}

export function resizeGestureActivated(start, current, width, height) {
  return gestureDistancePx(start, current, width, height) >= WINDOW_LIMITS.resizeActivationPx;
}

/**
 * Passo do arrasto com âncora estável: a posição da janela é SEMPRE `âncora + delta aplicado`,
 * nunca rederivada de uma posição anterior defasada (que fazia a janela puxar de um lado para o
 * outro ao perseguir o cursor em 65% por amostra). O delta relativo à âncora é aplicado por
 * inteiro — zero lag adicional enquanto a mão se move — com duas proteções:
 *
 *  - deltas acumulados iguais ou menores que a zona morta não movem a janela (sem tremor em
 *    repouso), mas continuam acumulando: um arrasto muito lento nunca trava;
 *  - um único amostra nunca move mais que `maxMotionStep` (escudo contra um frame ruim).
 */
export function stepDragDelta(applied, delta) {
  const ax = finite(applied?.x), ay = finite(applied?.y), az = finite(applied?.z);
  const dx = finite(delta?.x) - ax, dy = finite(delta?.y) - ay, dz = finite(delta?.z) - az;
  const step = Math.hypot(dx, dy, dz);
  if (!Number.isFinite(step) || step <= WINDOW_LIMITS.motionDeadZone)
    return { x: ax, y: ay, z: az };
  const move = Math.min(step, WINDOW_LIMITS.maxMotionStep);
  const amount = move / step;
  return { x: ax + dx * amount, y: ay + dy * amount, z: az + dz * amount };
}

/**
 * Curvatura "360" da superfície da janela. A janela vira um pedaço de cilindro em volta do
 * usuário: a LARGURA não muda (as pontas ficam onde estavam), só o meio recua — é o efeito da
 * parede de vidro curva da referência. `angle` é a meia-abertura em radianos (0 = plana).
 *
 * Tudo aqui trabalha em unidades locais da janela (px do CSS3D), as mesmas que o shader nativo
 * reconstrói por metro; por isso raio e deslocamento são lineares na largura.
 */
export const CURVE_LIMITS = Object.freeze({ maxAngle: 1.15 });

/** Meia-abertura válida (rad) da curvatura. */
export function curveAngle(angle) {
  const a = Number.isFinite(angle) ? angle : 0;
  return Math.max(0, Math.min(CURVE_LIMITS.maxAngle, a));
}

/** Raio (unidades locais) do cilindro: o arco tem a MESMA largura da janela plana. */
export function curveRadius(width, angle) {
  const a = curveAngle(angle);
  return a < 1e-4 ? Infinity : (Math.max(0, width) / 2) / Math.sin(a);
}

/**
 * Deslocamento em z (para o usuário, +z local) da superfície curvada no ponto `x` (0 = centro).
 * Fora do arco (|x| > raio, só acontece na margem transparente do atlas) a superfície segue reta
 * na tangente — sem degrau.
 */
export function curveOffset(x, radius) {
  if (!Number.isFinite(radius) || radius <= 0) return 0;
  const rest = radius * radius - x * x;
  return rest <= 0 ? radius : radius - Math.sqrt(rest);
}

/** Quanto a borda (x = largura/2) avança: raio * (1 - cos(angle)). */
export function curveBulge(width, angle) {
  const a = curveAngle(angle);
  if (a < 1e-4) return 0;
  return curveRadius(width, a) * (1 - Math.cos(a));
}

export function clampResize(value, maximum = WINDOW_LIMITS.maxResize) {
  const max = clamp(finite(maximum), WINDOW_LIMITS.minResize, WINDOW_LIMITS.maxResize);
  return clamp(Number.isFinite(value) ? value : 1, WINDOW_LIMITS.minResize, max);
}

/** Limita o tamanho sem deslocar o centro: a borda é que para ao chegar ao limite vertical. */
export function maxResizeAtHeight(centerY, baseHalfHeight, eye = 1.55) {
  const half = Math.max(1e-5, finite(baseHalfHeight));
  // A faixa vertical ganha a folga de `resizeOverscan` dos dois lados: a janela pode passar um
  // pouco da borda enquanto cresce, senao o teto de 300% jamais seria alcancavel.
  const slack = WINDOW_LIMITS.resizeOverscan;
  const available = Math.min(centerY - (eye + WINDOW_LIMITS.lowerEdgeFromEye - slack),
    eye + WINDOW_LIMITS.upperEdgeFromEye + slack - centerY);
  return clampResize(available / half);
}

export function resizeFromPointer(startScale, startDistance, currentDistance, maximum) {
  if (!(startDistance > 1) || !Number.isFinite(currentDistance)) return clampResize(startScale, maximum);
  return clampResize(startScale * currentDistance / startDistance, maximum);
}

export function stabilizeResize(previous, candidate) {
  const current = clampResize(previous);
  const target = clampResize(candidate);
  const delta = target - current;
  if (Math.abs(delta) < .004) return current;
  return clampResize(current + Math.sign(delta) * Math.min(Math.abs(delta) * .55, .07));
}
