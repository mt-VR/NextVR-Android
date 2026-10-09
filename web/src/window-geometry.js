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
  maxResize: 1.40,
});

const clamp = (value, low, high) => Math.max(low, Math.min(high, value));
const finite = value => Number.isFinite(value) ? value : 0;

/**
 * Mantém toda a altura da janela na faixa confortável e o centro no arco frontal.
 * O retorno é um objeto novo para que esta função possa ser usada sem THREE nos testes.
 */
export function clampWindowPosition(point, halfHeight = 0, eye = 1.55) {
  let x = finite(point?.x), y = Number.isFinite(point?.y) ? point.y : eye, z = finite(point?.z);
  let radius = Math.hypot(x, z);
  if (radius < 1e-5) { radius = WINDOW_LIMITS.minDistance; x = 0; z = -radius; }
  const yaw = clamp(Math.atan2(-x, -z), -WINDOW_LIMITS.maxYaw, WINDOW_LIMITS.maxYaw);
  radius = clamp(radius, WINDOW_LIMITS.minDistance, WINDOW_LIMITS.maxDistance);
  const safeHalf = Math.max(0, finite(halfHeight));
  const low = eye + WINDOW_LIMITS.lowerEdgeFromEye + safeHalf;
  const high = eye + WINDOW_LIMITS.upperEdgeFromEye - safeHalf;
  y = low <= high ? clamp(y, low, high) : eye;
  return { x: -Math.sin(yaw) * radius, y, z: -Math.cos(yaw) * radius };
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
 * Remove jitter subcentimétrico e limita saltos de uma única amostra sem adicionar offset.
 * Movimentos normais preservam 65% da amostra mais recente; o restante chega nas próximas frames.
 */
export function stabilizeWindowPosition(previous, candidate) {
  const dx = finite(candidate?.x) - finite(previous?.x);
  const dy = finite(candidate?.y) - finite(previous?.y);
  const dz = finite(candidate?.z) - finite(previous?.z);
  const distance = Math.hypot(dx, dy, dz);
  if (!Number.isFinite(distance) || distance <= WINDOW_LIMITS.motionDeadZone)
    return { x: finite(previous?.x), y: finite(previous?.y), z: finite(previous?.z) };
  const step = Math.min(WINDOW_LIMITS.maxMotionStep, distance * .65);
  const amount = step / distance;
  return { x: finite(previous?.x) + dx * amount, y: finite(previous?.y) + dy * amount,
    z: finite(previous?.z) + dz * amount };
}

export function clampResize(value, maximum = WINDOW_LIMITS.maxResize) {
  const max = clamp(finite(maximum), WINDOW_LIMITS.minResize, WINDOW_LIMITS.maxResize);
  return clamp(Number.isFinite(value) ? value : 1, WINDOW_LIMITS.minResize, max);
}

/** Limita o tamanho sem deslocar o centro: a borda é que para ao chegar ao limite vertical. */
export function maxResizeAtHeight(centerY, baseHalfHeight, eye = 1.55) {
  const half = Math.max(1e-5, finite(baseHalfHeight));
  const available = Math.min(centerY - (eye + WINDOW_LIMITS.lowerEdgeFromEye),
    eye + WINDOW_LIMITS.upperEdgeFromEye - centerY);
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
