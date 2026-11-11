// Forças aerodinâmicas da bola em unidades de campo (m, s).
// A curva aplica uma aceleração lateral limitada e perde força no voo; o giro
// nunca substitui a velocidade nem prende a bola numa órbita.

export const BALL_GRAVITY = -9.81;
export const BALL_LINEAR_AIR_DRAG = 0.035;
export const BALL_QUADRATIC_AIR_DRAG = 0.00135;
export const BALL_MAGNUS_COEFFICIENT = 0.07;
export const BALL_MAX_CURVE_ACCELERATION = 20;
export const BALL_SPIN_DECAY = 0.78;

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

/** Converte a força e o gesto do chute em rotação lateral limitada (rad/s). */
export function curveSpinRate(power, curve) {
  const normalizedCurve = clamp(Number(curve) || 0, -1, 1);
  const shotSpeed = clamp(Number(power) || 0, 0, 42);
  if (Math.abs(normalizedCurve) < 0.001 || shotSpeed < 0.1) return 0;
  return normalizedCurve * (2.2 + shotSpeed * 0.17);
}

/** Aplica gravidade, arrasto do ar e efeito Magnus à velocidade, sem alocar vetores. */
export function applyBallAirForces(velocity, spin, dt) {
  const step = clamp(Number(dt) || 0, 0, 0.1);
  if (!velocity || !spin || step <= 0) return velocity;

  velocity.y += BALL_GRAVITY * step;
  const speed = Math.hypot(velocity.x, velocity.y, velocity.z);
  const dragRate = BALL_LINEAR_AIR_DRAG + BALL_QUADRATIC_AIR_DRAG * speed;
  const drag = Math.max(0, 1 - Math.min(dragRate * step, 0.22));
  velocity.x *= drag;
  velocity.y *= drag;
  velocity.z *= drag;

  const vx = velocity.x;
  const vz = velocity.z;
  const horizontalSpeed = Math.hypot(vx, vz);
  if (horizontalSpeed > 0.15 && Math.abs(spin.y) > 0.01) {
    const lateralAcceleration = clamp(
      spin.y * BALL_MAGNUS_COEFFICIENT * horizontalSpeed,
      -BALL_MAX_CURVE_ACCELERATION,
      BALL_MAX_CURVE_ACCELERATION
    );
    // Produto vetorial do giro lateral pela velocidade horizontal. A aceleração
    // é sempre perpendicular ao deslocamento, então o chute continua avançando.
    velocity.x += (vz / horizontalSpeed) * lateralAcceleration * step;
    velocity.z -= (vx / horizontalSpeed) * lateralAcceleration * step;
  }

  const spinDecay = Math.exp(-BALL_SPIN_DECAY * step);
  spin.x *= spinDecay;
  spin.y *= spinDecay;
  spin.z *= spinDecay;
  return velocity;
}
