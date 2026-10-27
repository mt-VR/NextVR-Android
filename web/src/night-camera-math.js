// Regra pura da camera noturna (Build 89), separada do DOM/ponte para testes deterministicos.
//
// O passthrough treme e uma luz acesa por um instante nao pode apagar o modo noturno. Por isso a
// leitura e' suavizada (media exponencial) e a decisao usa dois limiares com histerese: liga abaixo
// de DARK_ON, desliga acima de DARK_OFF, e entre os dois mantem o que estava.

export const DARK_ON = 0.20;
export const DARK_OFF = 0.30;

/**
 * Uma leitura de luminosidade (0..1) -> novo estado.
 * `level < 0` significa "sem leitura" (preview de desktop, camera parada): nada muda.
 */
export function decideNightCamera(level, previousSmooth = -1, currentActive = false) {
  if (!Number.isFinite(level) || level < 0) {
    return { smooth: previousSmooth, active: currentActive, changed: false };
  }
  const clamped = Math.max(0, Math.min(1, level));
  const smooth = previousSmooth < 0 ? clamped : previousSmooth * 0.7 + clamped * 0.3;
  let active = currentActive;
  if (currentActive) {
    if (smooth > DARK_OFF) active = false;
  } else if (smooth < DARK_ON) {
    active = true;
  }
  return { smooth, active, changed: active !== currentActive };
}
