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
 * Filtro anti-trem dos landmarks (One Euro, Casiez et al.), para o lado WEB.
 *
 * O rastreador nativo já filtra os 21 pontos da silhueta, mas o caminho até a interface tem outros
 * três consumidores que não passam por aquele filtro: o raio/bolinha (`aim`, `palm`, `grab`), o
 * Toque Direto (profundidade do indicador) e os dois jogos HTML que recebem `window.__nvHands`. Com
 * a mão parada, o detector devolve ruído de ~1 px por quadro e quem está na tela vê a bolinha
 * respirando — o "treme".
 *
 * Duas propriedades importam, e são o motivo de ser One Euro e não uma média:
 *
 *  - **parado, filtra muito**: o corte cai para `minCutoff` (~1,2 Hz) e o tremor de poucos pixels
 *    praticamente desaparece;
 *  - **andando, filtra pouco**: o corte sobe com a velocidade medida (`beta`), então a ponta do dedo
 *    continua chegando junto com a mão. Uma média fixa atrasaria o gesto e transformaria um toque
 *    em arrasto.
 *
 * Além do filtro existe uma zona morta (`deadZone`): enquanto a diferença entre o valor filtrado e
 * o publicado é menor que ela, nada muda. É o que mata o tremor residual que um filtro linear sempre
 * deixa passar.
 *
 * A derivada é medida no sinal BRUTO, não no erro do filtro: a variante de erro faz o corte depender
 * da taxa de quadros (o mesmo gesto era suavizado mais num rastreador lento) e infla a velocidade
 * sempre que o filtro atrasa — que aparece na tela como a bolinha "deslizando de volta".
 */
export class LandmarkSmoother {
  constructor({ minCutoff = 1.2, beta = 6, derivativeCutoff = 1, deadZone = 0.0006 } = {}) {
    this.minCutoff = minCutoff;
    this.beta = beta;
    this.derivativeCutoff = derivativeCutoff;
    this.deadZone = deadZone;
    this.reset();
  }

  reset() {
    this.value = NaN;
    this.shown = NaN;
    this.raw = NaN;
    this.derivative = 0;
    this.lastMs = 0;
  }

  /** Um número filtrado; `nowMs` é a hora da amostra (mesma linha do tempo entre as chamadas). */
  next(sample, nowMs) {
    if (!Number.isFinite(sample)) return this.shown;
    if (!Number.isFinite(this.value) || !(this.lastMs > 0)) {
      this.value = this.shown = this.raw = sample;
      this.lastMs = nowMs;
      return this.shown;
    }
    // Carimbo repetido nunca roda o filtro para trás no tempo: segura o que está na tela.
    if (!(nowMs > this.lastMs)) return this.shown;
    const dt = Math.max(0.001, Math.min(0.2, (nowMs - this.lastMs) / 1000));
    this.lastMs = nowMs;
    const rawDerivative = (sample - this.raw) / dt;
    this.raw = sample;
    this.derivative += alphaOf(this.derivativeCutoff, dt) * (rawDerivative - this.derivative);
    const cutoff = this.minCutoff + this.beta * Math.abs(this.derivative);
    this.value += alphaOf(cutoff, dt) * (sample - this.value);
    const gap = this.value - this.shown;
    if (Math.abs(gap) > this.deadZone) this.shown = this.value - this.deadZone * Math.sign(gap);
    return this.shown;
  }
}

function alphaOf(cutoff, dt) {
  const tau = 1 / (2 * Math.PI * Math.max(0.01, cutoff));
  return 1 / (1 + tau / dt);
}

/**
 * Um conjunto de 21 landmarks (x, y, z) suavizados com `LandmarkSmoother`, em milissegundos.
 *
 * A zona morta é medida em FRAÇÃO DO CAMPO, que é como o ruído do detector se comporta (é o mesmo
 * em qualquer resolução). `handFields` é por mão (`id`) e por eixo — mão direita e esquerda nunca
 * compartilham filtro, senão uma puxaria a outra quando cruzassem.
 */
export class HandPointFilter {
  constructor({ minCutoff = 1.2, beta = 6, deadZone = 0.0007 } = {}) {
    this.options = { minCutoff, beta, deadZone };
    this.byHand = new Map();
  }

  reset(handId) {
    if (handId == null) this.byHand.clear();
    else this.byHand.delete(handId);
  }

  /**
   * Filtra `points` (63 números) e devolve uma cópia nova — o pacote original nunca é alterado.
   * Sem pontos válidos, devolve o próprio array recebido.
   */
  apply(handId, points, nowMs) {
    if (!points || points.length < 63) return points;
    const key = handId == null ? 'hand' : String(handId);
    let axes = this.byHand.get(key);
    if (!axes) {
      axes = new Array(63);
      for (let i = 0; i < 63; i++) axes[i] = new LandmarkSmoother(this.options);
      this.byHand.set(key, axes);
    }
    const out = new Array(63);
    for (let i = 0; i < 63; i++) out[i] = axes[i].next(points[i], nowMs);
    return out;
  }
}
