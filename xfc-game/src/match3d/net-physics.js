// Rede elástica leve: deslocamento normal por nó, bordas fixas, mola+tensão.
// Integrador a 120 Hz, no máximo 12 subpassos; dorme sem atualizar buffers.
export function createNetPanel({
  width,
  height,
  columns = 30,
  rows = 12
} = {}) {
  const stride = columns + 1,
    count = stride * (rows + 1);
  const displacement = new Float32Array(count),
    velocity = new Float32Array(count);
  const force = new Float32Array(count);
  let active = false,
    remainder = 0,
    quietTime = 0;
  const fixedStep = 1 / 120;
  function impact(u, v, speed) {
    if (![u, v, speed].every(Number.isFinite) || speed < 0.06) return false;
    u = Math.max(0, Math.min(1, u));
    v = Math.max(0, Math.min(1, v));
    // Rede de gol: o chute abre um bolso e a malha ondula até voltar.
    // Mesmo um toque leve já mexe os fios.
    const strength = Math.min(24, Math.max(2.4, speed * 1.22));
    for (let y = 1; y < rows; y++)
      for (let x = 1; x < columns; x++) {
        const dx = (x / columns - u) * width,
          dy = (y / rows - v) * height;
        velocity[y * stride + x] = Math.min(
          16,
          velocity[y * stride + x] +
            strength * Math.exp(-(dx * dx + dy * dy) / 0.46)
        );
      }
    active = true;
    quietTime = 0;
    return true;
  }
  function update(dt) {
    if (!active || !Number.isFinite(dt) || dt <= 0) return false;
    remainder += Math.min(0.1, dt);
    let changed = false;
    while (remainder + 1e-9 >= fixedStep) {
      remainder -= fixedStep;
      changed = true;
      let peak = 0;
      for (let y = 1; y < rows; y++)
        for (let x = 1; x < columns; x++) {
          const i = y * stride + x,
            d = displacement[i];
          force[i] =
            -24 * d +
            88 *
              (displacement[i - 1] +
                displacement[i + 1] +
                displacement[i - stride] +
                displacement[i + stride] -
                4 * d) -
            3.4 * velocity[i];
        }
      for (let y = 1; y < rows; y++)
        for (let x = 1; x < columns; x++) {
          const i = y * stride + x;
          velocity[i] += force[i] * fixedStep;
          displacement[i] += velocity[i] * fixedStep;
          if (Math.abs(displacement[i]) > 1.15) {
            displacement[i] = Math.sign(displacement[i]) * 1.15;
            velocity[i] *= 0.18;
          }
          peak = Math.max(
            peak,
            Math.abs(displacement[i]),
            Math.abs(velocity[i]) * 0.12
          );
        }
      quietTime = peak < 0.0015 ? quietTime + fixedStep : 0;
      if (quietTime > 0.3) {
        displacement.fill(0);
        velocity.fill(0);
        active = false;
        remainder = 0;
        break;
      }
    }
    return changed;
  }
  return {
    width,
    height,
    columns,
    rows,
    displacement,
    velocity,
    impact,
    update,
    get active() {
      return active;
    },
    reset() {
      displacement.fill(0);
      velocity.fill(0);
      active = false;
      remainder = 0;
      quietTime = 0;
    }
  };
}
