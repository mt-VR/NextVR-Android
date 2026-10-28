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
 * Lanterna (Build 89, refeita na Build 91)
 *
 * O usuario: "quando identificar nenhuma luz, o celular ativa a lanterna, e quando reconhece luz, a
 * lanterna apaga". E depois: "arruma o bug da lanterna ficar piscando, ela ativa e desativa do nada;
 * ela não pode reconhecer que a luz é ela que tá transmitindo".
 *
 * Por que a versão anterior piscava: a câmera mede a luz que ELA VÊ, e com o flash aceso o que ela
 * vê é o flash iluminando o quarto. A leitura subia acima do limiar de "tem luz", a lanterna apagava,
 * o quarto voltava a ficar escuro, ela acendia de novo... e ficava nesse ciclo a cada poucos segundos
 * (pior ainda porque o modo noturno sobe o +EV no escuro, o que também empurra a leitura pra cima).
 *
 * A correção tem quatro partes de verdade:
 *
 *   1. CALIBRAÇÃO DA LUZ PRÓPRIA (`selfGain`). Depois que a lanterna acende, o app espera o AE e o
 *      LED estabilizarem (SETTLE_MS) e mede quanto a leitura subiu em relação ao escuro de antes
 *      (`baseline`). Esse valor passa a ser descontado: `ambiente = leitura - selfGain`. Ou seja, a
 *      luz da própria lanterna deixa de contar como "luz do ambiente". Calibração limitada entre
 *      SELF_MIN e SELF_MAX para nunca zerar a conta nem engolir uma luz de verdade.
 *   2. LUZ DE VERDADE É O QUE SOBRA. Só apaga quando o ambiente estimado passa de ENOUGH_LIGHT por
 *      OFF_CONFIRM leituras seguidas (ou quando a cena satura em HARD_LIGHT) e depois de MIN_ON_MS.
 *   3. ANTI-PISCA POR TEMPO. Tempo mínimo ligada, tempo mínimo desligada e confirmação de escuridão
 *      antes de acender (ON_CONFIRM leituras).
 *   4. ANTI-PISCA POR HISTÓRICO. Se a lanterna apagou "cedo demais" (menos de STABLE_ON_MS), a
 *      próxima vez exige mais confirmação; depois de 3 ciclos curtos ela PARA por PARK_MS em vez de
 *      continuar piscando. É a garantia final: no pior caso, alguns ciclos e silêncio.
 * ------------------------------------------------------------------------------------------- */
export const NO_LIGHT = 0.16;        // abaixo disto: "nenhuma luz" (quarto escuro de verdade)
export const ENOUGH_LIGHT = 0.45;    // luz de ambiente (sem contar a lanterna) que apaga o flash
export const HARD_LIGHT = 0.92;      // cena saturada: é luz de verdade mesmo com o flash aceso
export const SELF_MIN = 0.12;        // a lanterna sempre responde por pelo menos isto na leitura
export const SELF_MAX = 0.85;        // e nunca por mais que isto (senão engoliria luz real)
export const SETTLE_MS = 1500;       // tempo do AE/LED estabilizar depois de acender
export const MIN_ON_MS = 6000;       // tempo mínimo ligada
export const MIN_OFF_MS = 6000;      // tempo mínimo desligada antes de acender de novo
export const ON_CONFIRM = 3;         // leituras escuras seguidas para acender
export const OFF_CONFIRM = 5;        // leituras de luz seguidas para apagar
export const STABLE_ON_MS = 20000;   // ficou ligada menos que isto? conta como ciclo curto
export const PARK_MS = 120000;       // depois de 3 ciclos curtos, para de tentar por 2 minutos
export const MAX_ON_CONFIRM = 6;     // teto da exigência de escuridão
const MAX_OFF_CONFIRM = OFF_CONFIRM + 4;
const MAX_CYCLES = 3;

const TORCH_IDLE = Object.freeze({
  onSince: -1, offSince: -1, dark: 0, bright: 0,
  baseline: -1, selfGain: -1, cycles: 0, parkUntil: -1,
});

/**
 * Decide a lanterna a partir da leitura suavizada de luz.
 *
 * @param {number} smooth     luminosidade suavizada (0..1) ou < 0 quando não há leitura
 * @param {boolean} torchOn   estado atual
 * @param {object} times      estado devolvido pela chamada anterior (ver TORCH_IDLE)
 * @param {number} now        relógio em ms (performance.now())
 * @returns {{torchOn:boolean, changed:boolean, ambient:(number|null), reason:string}}
 *          mais o estado a guardar: onSince, offSince, dark, bright, baseline, selfGain, cycles,
 *          parkUntil.
 */
export function decideTorch(smooth, torchOn, times = {}, now = 0) {
  const t = { ...TORCH_IDLE, ...times };
  const noReading = !Number.isFinite(smooth) || smooth < 0;
  if (noReading) {
    return { ...t, torchOn: !!torchOn, changed: false, ambient: null, reason: 'no-reading' };
  }
  const level = Math.max(0, Math.min(1, smooth));

  if (torchOn) {
    // Recém-acesa: nada conta enquanto o AE e o LED não estabilizam.
    if (t.onSince < 0 || now - t.onSince < SETTLE_MS) {
      return { ...t, torchOn: true, changed: false, bright: 0, ambient: null, reason: 'settling' };
    }
    // Primeira leitura firme: calibra o quanto a PRÓPRIA lanterna soma na medição.
    if (t.selfGain < 0) {
      const base = t.baseline < 0 ? 0 : t.baseline;
      const self = Math.max(SELF_MIN, Math.min(SELF_MAX, level - base));
      return {
        ...t, selfGain: self, torchOn: true, changed: false, bright: 0,
        ambient: Math.max(0, level - self), reason: 'calibrate',
      };
    }
    // A luz própria acompanha devagar as mudanças (AE, distância da parede): assim ela nunca
    // "engole" a luz externa que acabou de voltar, mas também não fica presa a uma medição só.
    const base = t.baseline < 0 ? 0 : t.baseline;
    const candidate = Math.max(0, level - base);
    const self = Math.max(SELF_MIN, Math.min(SELF_MAX, t.selfGain * 0.9 + candidate * 0.1));
    const ambient = Math.max(0, level - self);
    // `HARD_LIGHT` sozinho não serve de prova: a própria lanterna pode saturar a imagem. Ele só
    // vale junto com um ambiente estimado já alto (luz de verdade somada à da lanterna).
    const lit = ambient >= ENOUGH_LIGHT || (level >= HARD_LIGHT && ambient >= 0.30);
    const bright = lit ? t.bright + 1 : 0;
    const offNeed = Math.min(MAX_OFF_CONFIRM, OFF_CONFIRM + t.cycles * 2);
    const dwell = now - t.onSince >= MIN_ON_MS;
    if (bright >= offNeed && dwell) {
      const short = now - t.onSince < STABLE_ON_MS;
      const cycles = short ? Math.min(MAX_CYCLES, t.cycles + 1) : 0;
      const park = cycles >= MAX_CYCLES ? now + PARK_MS : -1;
      return {
        onSince: -1, offSince: now, dark: 0, bright: 0, baseline: -1, selfGain: -1,
        cycles: park >= 0 ? 0 : cycles, parkUntil: park,
        torchOn: false, changed: true, ambient, reason: 'light-back',
      };
    }
    return { ...t, selfGain: self, torchOn: true, changed: false, bright, ambient, reason: 'keep-on' };
  }

  // Desligada.
  const parked = t.parkUntil >= 0 && now < t.parkUntil;
  if (parked) {
    return { ...t, torchOn: false, changed: false, bright: 0, ambient: null, reason: 'parked' };
  }
  const wasParked = t.parkUntil >= 0;
  const pitchDark = level <= NO_LIGHT;
  const dark = pitchDark ? t.dark + 1 : 0;
  const onNeed = Math.min(MAX_ON_CONFIRM, ON_CONFIRM + t.cycles);
  const waited = t.offSince < 0 || now - t.offSince >= MIN_OFF_MS;
  if (dark >= onNeed && waited) {
    return {
      onSince: now, offSince: -1, dark: 0, bright: 0,
      baseline: level, selfGain: -1,
      cycles: wasParked ? 0 : t.cycles, parkUntil: -1,
      torchOn: true, changed: true, ambient: level, reason: 'no-light',
    };
  }
  return {
    torchOn: false, changed: false, dark, bright: 0, onSince: -1,
    offSince: t.offSince, baseline: -1, selfGain: -1,
    cycles: wasParked ? 0 : t.cycles, parkUntil: wasParked ? -1 : t.parkUntil,
    ambient: null, reason: wasParked ? 'park-over' : 'stay-off',
  };
}
