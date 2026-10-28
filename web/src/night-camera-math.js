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

/* ---------------------------------------------------------------------------------------------
 * Lanterna (Build 89)
 *
 * O usuario: "a camera noturna deixa assim, quando identificar nenhuma luz, o celular ativa a
 * lanterna, e quando reconhece luz, a lanterna apaga".
 *
 * O problema pratico: o auto-exposure da camera normaliza a imagem, e a propria lanterna ilumina a
 * cena. Uma histerese ingenua (liga escuro / desliga claro) pisca a lanterna para sempre, porque a
 * luz que ela faz e' justamente o que a desligaria. Por isso a decisao tem tres travas:
 *
 *   1. limiar de "sem luz" bem baixo (NO_LIGHT = 0.12) e de "tem luz" bem alto (ENOUGH_LIGHT =
 *      0.50), com exigencias de tempo diferentes;
 *   2. tempo minimo ligada (MIN_ON_MS) e tempo minimo desligada (MIN_OFF_MS): a lanterna nunca
 *      pisca, mesmo com leituras oscilando;
 *   3. `armed`: depois de acender, as leituras so' voltam a valer para desligar quando a cena
 *      realmente clarear (>= ENOUGH_LIGHT por OFF_CONFIRM leituras seguidas).
 * ------------------------------------------------------------------------------------------- */
export const NO_LIGHT = 0.16;        // abaixo disto: "nenhuma luz" (quarto escuro de verdade)
export const ENOUGH_LIGHT = 0.42;    // acima disto, com a lanterna ligada: a luz voltou
export const MIN_ON_MS = 3500;       // tempo minimo ligada (anti-pisca)
export const MIN_OFF_MS = 2000;      // tempo minimo desligada antes de acender de novo
export const ON_CONFIRM = 2;         // leituras escuras seguidas para acender
export const OFF_CONFIRM = 3;        // leituras claras seguidas para apagar

/**
 * Decide a lanterna a partir da leitura suavizada de luz.
 *
 * @param {number} smooth     luminosidade suavizada (0..1) ou < 0 quando nao ha leitura
 * @param {boolean} torchOn   estado atual
 * @param {object} times      { onSince, offSince, dark, bright } em ms/contadores
 * @param {number} now        relogio em ms (performance.now())
 */
export function decideTorch(smooth, torchOn, times = {}, now = 0) {
  const dark = Math.max(0, times.dark || 0);
  const bright = Math.max(0, times.bright || 0);
  const onSince = Number.isFinite(times.onSince) ? times.onSince : -1;
  const offSince = Number.isFinite(times.offSince) ? times.offSince : -1;
  const noReading = !Number.isFinite(smooth) || smooth < 0;

  if (noReading) return { torchOn, changed: false, dark, bright, onSince, offSince, reason: 'no-reading' };

  if (torchOn) {
    // Ligada: so' apaga quando a cena clareou de verdade (a luz voltou) e ela ja' ficou ligada
    // tempo suficiente. Enquanto o ambiente estiver escuro, a leitura alta e' da propria lanterna.
    const enough = smooth >= ENOUGH_LIGHT;
    const nextBright = enough ? bright + 1 : 0;
    const dwell = onSince >= 0 && now - onSince >= MIN_ON_MS;
    if (nextBright >= OFF_CONFIRM && dwell) {
      return { torchOn: false, changed: true, dark: 0, bright: 0, onSince: -1, offSince: now, reason: 'light-back' };
    }
    return { torchOn: true, changed: false, dark: 0, bright: nextBright, onSince, offSince, reason: 'keep-on' };
  }

  // Desligada: so' acende com escuridao confirmada e depois do tempo minimo apagada.
  const pitchDark = smooth <= NO_LIGHT;
  const nextDark = pitchDark ? dark + 1 : 0;
  const waited = offSince < 0 || now - offSince >= MIN_OFF_MS;
  if (nextDark >= ON_CONFIRM && waited) {
    return { torchOn: true, changed: true, dark: 0, bright: 0, onSince: now, offSince: -1, reason: 'no-light' };
  }
  return { torchOn: false, changed: false, dark: nextDark, bright: 0, onSince: -1, offSince, reason: 'stay-off' };
}
