// Acorde de duas mãos: pinçar com as DUAS mãos ao mesmo tempo e segurar ~2 s abre o menu do jogo
// (estilo SteamVR). Estado puro, testável sem DOM — recebe amostras de pinça por mão e devolve o
// progresso (0..1) e as bordas de evento.
//
// Regras:
//  - só conta pinça REAL das duas mãos ao mesmo tempo; perder uma delas zera o progresso;
//  - `armMs` impede que um toque rápido abra o menu (o acorde tem que ser segurado);
//  - `graceMs` tolera um quadro sem detecção de uma das mãos sem zerar a espera;
//  - depois de abrir, o acorde fica desarmado até as duas mãos soltarem, então um acorde mantém o
//    menu aberto exatamente o tempo que for segurado e nunca repete sozinho;
//  - `holdMs` opcional fecha o menu ao soltar depois de segurar mais tempo que isso.

export const CHORD_DEFAULTS = {
  /** Segurar antes de abrir. */
  armMs: 2000,
  /** Progresso de segurar antes de abrir (para o anel de espera). */
  progressHoldMs: 1700,
  /** Tolerância de um quadro sem uma das mãos. */
  graceMs: 260,
  /** Segurar além disso fecha o menu ao soltar. */
  holdMs: 4000,
};

/**
 * Duas mãos pinçando ao mesmo tempo (a pré-condição do acorde): aceita amostras de mão com ou sem
 * o rótulo de lado (`left`) — quando há rótulo, exige um de cada; sem rótulo, duas IDs distintas
 * bastam. Pura e compartilhada por quem detecta acordes de mão.
 */
export function twoHandsPinching(pinched) {
  if (pinched.length < 2) return false;
  const left = pinched.some(h => h.left === true);
  const right = pinched.some(h => h.left === false);
  if (left && right) return true;
  const labelled = pinched.some(h => typeof h.left === 'boolean');
  return !labelled && new Set(pinched.map(h => h.id)).size >= 2;
}

/**
 * Acorde de duas mãos para o menu do jogo.
 *
 * `update(nowMs, { left, right, leftValid, rightValid })` → `{ progress, opened, closed, active }`
 *  - `progress` 0..1 do anel de espera (só cresce enquanto as duas mãos pinçam);
 *  - `opened` exatamente uma vez, no instante em que o acorde completa;
 *  - `closed` quando um acorde já aberto é solto depois de [holdMs];
 *  - `active` o menu está aberto agora.
 */
export class TwoHandMenuChord {
  constructor({ armMs = CHORD_DEFAULTS.armMs, graceMs = CHORD_DEFAULTS.graceMs,
    holdMs = CHORD_DEFAULTS.holdMs, progressHoldMs = CHORD_DEFAULTS.progressHoldMs,
    now = () => Date.now() } = {}) {
    this.armMs = Math.max(0, armMs);
    this.graceMs = Math.max(0, graceMs);
    this.holdMs = Math.max(0, holdMs);
    this.progressHoldMs = Math.max(1, progressHoldMs);
    this.now = now;
    this.reset();
  }

  reset() {
    this.startedAt = null;
    this.gapAt = null;
    this.openedAt = null;
    this.open = false;
    return this.state(0);
  }

  state(progress = 0) {
    return { progress, opened: false, closed: false, active: this.open };
  }

  /** Progresso atual (0..1) sem mudar nada — para desenhar o anel de espera no HUD. */
  get progress() {
    if (this.startedAt == null) return 0;
    const t = this.now();
    return Math.max(0, Math.min(1, (t - this.startedAt) / this.progressHoldMs));
  }

  update(nowMs, sample = {}) {
    const t = Number.isFinite(nowMs) ? nowMs : this.now();
    const left = !!sample.left && sample.leftValid !== false;
    const right = !!sample.right && sample.rightValid !== false;
    const both = left && right;
    if (this.open) {
      if (both) {
        // Segurando: se passar do tempo de manter, fechar ao soltar.
        this.holdTooLong = t - this.openedAt >= this.holdMs;
        return this.state(1);
      }
      // Solto: o acorde fecha o menu (ou encerra a sessão se ficou tempo demais).
      const closed = true;
      this.open = false; this.openedAt = null; this.startedAt = null; this.gapAt = null;
      this.holdTooLong = false;
      return { progress: 1, opened: false, closed, active: false };
    }
    if (both) {
      if (this.startedAt == null) this.startedAt = t;
      this.gapAt = null;
      const held = t - this.startedAt;
      if (held >= this.armMs) {
        this.open = true; this.openedAt = t; this.holdTooLong = false;
        return { progress: 1, opened: true, closed: false, active: true };
      }
      return this.state(Math.max(0, Math.min(1, held / this.progressHoldMs)));
    }
    // Uma (ou nenhuma) mão: tolera um quadro perdido e depois zera o progresso.
    if (this.startedAt != null) {
      if (this.gapAt == null) this.gapAt = t;
      else if (t - this.gapAt > this.graceMs) { this.startedAt = null; this.gapAt = null; }
      return this.state(this.progress);
    }
    return this.state(0);
  }
}
