// Mecânicas pequenas e determinísticas, compartilhadas pelos testes e pelo jogo.
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

/** IK de duas pernas: o pé percorre o solo e volta pela frente, não chuta atrás. */
export function runningLegPose(phase, stride = 1) {
  const p = ((phase % 1) + 1) % 1;
  const stance = p < 0.58;
  const t = stance ? p / 0.58 : (p - 0.58) / 0.42;
  const z = (stance ? 1 - 2 * t : -Math.cos(Math.PI * t)) * 0.32 * stride;
  const lift = stance ? 0 : Math.sin(Math.PI * t) * 0.18;
  const y = -0.79 + lift,
    a = 0.44,
    b = 0.42;
  const distance = clamp(Math.hypot(y, z), 0.2, a + b - 0.002);
  const knee =
    Math.PI -
    Math.acos(
      clamp((a * a + b * b - distance * distance) / (2 * a * b), -1, 1)
    );
  const hip =
    -Math.atan2(z, -y) -
    Math.acos(
      clamp((a * a + distance * distance - b * b) / (2 * a * distance), -1, 1)
    );
  return { hip, knee, ankle: -hip - knee, z, lift };
}

/** O joystick horizontal é relativo à câmera atrás do batedor. */
export function penaltyTarget(stickX, stickY = 0, sign = 1) {
  return {
    x: sign * 52.5,
    z: clamp(Number(stickX) || 0, -1, 1) * sign * 3.12,
    height: 0.35 + clamp(Number(stickY) || 0, 0, 1) * 1.5
  };
}
export function choosePenaltyLane(random = Math.random) {
  return [-1, 0, 1][Math.min(2, Math.floor(clamp(random(), 0, 1) * 3))];
}
