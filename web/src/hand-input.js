/**
 * State transitions for a single PhoneXR pointing hand.
 *
 * A down edge is emitted once when a pinch begins, repeated pinched samples are holds, an observed
 * open pinch emits one release, and losing/changing the hand cancels rather than clicks. This is
 * deliberately sample-driven: it adds no minimum press duration that would punish slow tracking.
 */
export class HandClickState {
  constructor() {
    this.phase = 'hovering';
    this.handId = null;
  }

  get down() {
    return this.phase === 'pressing' || this.phase === 'holding';
  }

  update(handId, pinching) {
    if (handId == null) return this.cancel();

    const events = [];
    if (this.handId !== null && this.handId !== handId) {
      if (this.down) events.push('cancel');
      this.phase = 'hovering';
    }
    this.handId = handId;

    if (pinching) {
      if (this.down) this.phase = 'holding';
      else {
        this.phase = 'pressing';
        events.push('down');
      }
    } else if (this.down) {
      this.phase = 'releasing';
      events.push('up');
    } else {
      this.phase = 'hovering';
    }
    return events;
  }

  cancel() {
    const events = this.down ? ['cancel'] : [];
    this.phase = 'hovering';
    this.handId = null;
    return events;
  }
}

/**
 * Click versus drag for one held pinch, decided by how far the hand travels while pinched.
 *
 * The old behavior sent touch-DOWN the instant the pinch closed and forwarded every cursor move to
 * the page, so on sites like YouTube a tremor-laced click always arrived as a drag. Instead the
 * press stays undecided for a short decision window and the measured travel from the pinch anchor
 * classifies it:
 *
 *  - travel beyond `dragOnPx` (sustained over `sustainSamples`) classifies the gesture as a DRAG;
 *  - once the window elapses with travel below `dragOnPx` it is a CLICK — and a later, clearly
 *    deliberate sweep can still promote it to a drag before release;
 *  - hysteresis keeps the classification stable: "moving" enters at `dragOnPx` and only leaves
 *    below `dragOffPx`, a single noisy sample cannot flip the state (`sustainSamples`), and a
 *    gesture classified as drag never demotes back to a click mid-press.
 *
 * Positions are in logical pixels. Only REAL detections may be sampled — motion-model predictions
 * must never classify a gesture (they keep moving after the hand stops, which would fake a drag).
 */
export class ClickDragArbiter {
  constructor({ decideMs = 150, dragOnPx = 18, dragOffPx = 8, sustainSamples = 2 } = {}) {
    this.decideMs = decideMs;
    this.dragOnPx = dragOnPx;
    this.dragOffPx = dragOffPx;
    this.sustainSamples = sustainSamples;
    this.mode = 'idle';
    this.handId = null;
    this.anchorX = 0;
    this.anchorY = 0;
    this.startedAt = 0;
    this.moving = false;
    this.beyond = 0;
    this.maxDisp = 0;
  }

  begin(handId, px, py, nowMs) {
    this.mode = 'undecided';
    this.handId = handId;
    this.anchorX = px;
    this.anchorY = py;
    this.startedAt = nowMs;
    this.moving = false;
    this.beyond = 0;
    this.maxDisp = 0;
    return this.mode;
  }

  sample(handId, px, py, nowMs) {
    if (this.mode === 'idle' || handId !== this.handId) return this.mode;
    const disp = Math.hypot(px - this.anchorX, py - this.anchorY);
    if (disp > this.maxDisp) this.maxDisp = disp;
    if (disp >= this.dragOnPx) {
      if (++this.beyond >= this.sustainSamples) {
        this.moving = true;
        this.mode = 'drag';
      }
    } else if (disp <= this.dragOffPx) {
      this.beyond = 0;
      this.moving = false;
    }
    // In the grey zone between the thresholds the classification holds: no flapping.
    if (this.mode === 'undecided' && !this.moving && nowMs - this.startedAt >= this.decideMs)
      this.mode = 'click';
    return this.mode;
  }

  /** Classify the finished gesture: a pinch released before any decision is a click (a tap). */
  end() {
    if (this.mode === 'undecided' || this.mode === 'idle') this.mode = 'click';
    return this.mode;
  }

  reset() {
    this.mode = 'idle';
    this.handId = null;
    this.moving = false;
    this.beyond = 0;
    this.maxDisp = 0;
  }
}

/**
 * Build 96 — precisão do ponteiro da mão.
 *
 * O que o usuário pediu: "deixe um Hand tracking mais preciso". O detector e os filtros One Euro
 * moram no lado nativo; o que sobra para o ponteiro é o tremor que chega ao DOM: dois quadros
 * seguidos com o mesmo punho parado podem diferir em 1-3 px (ruído do modelo + quantização do
 * landmark), e isso é o suficiente para um alvo de 34 px na Dock "escapar" do raio no momento do
 * clique. A solução clássica é filtrar mais — e pagar com atraso em todo movimento.
 *
 * Aqui a filtragem é ADAPTATIVA, pelo mesmo princípio do One Euro:
 *
 *   - mão parada (deslocamento por quadro abaixo do ruído): a posição é SEGURA. Nada de tremer;
 *   - movimento lento: o ponteiro anda com um amortecimento leve (alpha baixo), que é onde o olho
 *     nota o tremor;
 *   - movimento rápido: passa direto (alpha = 1), porque atraso em movimento rápido é o que faz o
 *     alvo "fugir" da mão;
 *   - durante o clique (pinça fechada) a zona morta cresce: o ponteiro fica parado onde apertou, e
 *     um tremor não transforma um clique em arrasto (o `ClickDragArbiter` mede o deslocamento).
 *
 * Um "segura" nunca dura mais que `maxHoldMs`: se a mão está realmente andando devagar, o ponteiro
 * acompanha de qualquer jeito — a zona morta não pode virar um ímã.
 */
export class CursorStabilizer {
  constructor({ deadband = 0.0018, pressDeadband = 0.0032, maxHoldMs = 70, slowSpeed = 0.35, fastSpeed = 1.6 } = {}) {
    this.deadband = deadband;
    this.pressDeadband = pressDeadband;
    this.maxHoldMs = maxHoldMs;
    this.slowSpeed = slowSpeed;
    this.fastSpeed = fastSpeed;
    this.x = null;
    this.y = null;
    this.heldSince = 0;
    this.lastRawX = 0;
    this.lastRawY = 0;
    this.rejected = 0;
    this.accepted = 0;
  }

  /** Quanto a zona morta abre para esta velocidade (0 = parada, >= fastSpeed = passagem direta). */
  deadbandFor(speed, pressing) {
    const base = pressing ? Math.max(this.deadband, this.pressDeadband) : this.deadband;
    if (!(speed > 0)) return base;
    // Em movimento rápido a zona morta vai a zero: precisão onde importa, zero atraso onde corre.
    const t = Math.max(0, Math.min(1, (speed - this.slowSpeed) / Math.max(1e-3, this.fastSpeed - this.slowSpeed)));
    return base * (1 - t);
  }

  /** Peso do novo valor quando ele passa da zona morta: 1 = direto, < 1 = amortecido. */
  alphaFor(speed) {
    const t = Math.max(0, Math.min(1, (speed - this.slowSpeed) / Math.max(1e-3, this.fastSpeed - this.slowSpeed)));
    return 0.45 + 0.55 * t;
  }

  /**
   * @param {number} x posição normalizada (0..1)
   * @param {number} y posição normalizada (0..1)
   * @param {{nowMs?:number, speed?:number, pressing?:boolean, reset?:boolean}} options
   * @returns {{x:number,y:number,held:boolean}} posição a publicar
   */
  update(x, y, { nowMs = 0, speed = 0, pressing = false, reset = false } = {}) {
    if (!Number.isFinite(x) || !Number.isFinite(y)) return { x: this.x ?? 0.5, y: this.y ?? 0.5, held: true };
    if (reset || this.x === null) {
      this.x = x;
      this.y = y;
      this.heldSince = nowMs;
      this.lastRawX = x;
      this.lastRawY = y;
      return { x, y, held: false };
    }
    const dist = Math.hypot(x - this.x, y - this.y);
    const deadband = this.deadbandFor(speed, pressing);
    if (dist <= deadband && nowMs - this.heldSince < this.maxHoldMs) {
      // Dentro do ruído: o ponteiro não anda. O `lastRaw` guarda para onde a mão realmente ia,
      // então ao sair da zona morta o ponteiro retoma do ponto certo, sem "pular" o que foi filtrado.
      this.rejected++;
      return { x: this.x, y: this.y, held: true };
    }
    const alpha = this.alphaFor(Math.max(speed, dist * 60));
    this.x += (x - this.x) * alpha;
    this.y += (y - this.y) * alpha;
    this.heldSince = nowMs;
    this.lastRawX = x;
    this.lastRawY = y;
    this.accepted++;
    return { x: this.x, y: this.y, held: false };
  }

  reset(x = null, y = null) {
    this.x = x;
    this.y = y;
    this.heldSince = 0;
    this.rejected = 0;
    this.accepted = 0;
  }
}
