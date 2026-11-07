/**
 * Toque Direto (Direct Touch) — o dedo indicador tem que ENCOSTAR e EMPURRAR o botão.
 *
 * ## O problema que isto resolve
 *
 * O mecanismo anterior era o contrário disso: escolher um alvo quando o dedo passava por cima e
 * disparar o clique quando o dedo fazia um movimento pequeno para cima ("levantar o dedo"). Como o
 * rastreamento oscila alguns milímetros entre dois quadros, o mesmo tremor que mantinha o destaque
 * aceso também passava dos limiares de "levantou o dedo" — e a interface abria aplicativos só por o
 * dedo passar na frente deles.
 *
 * Aqui não existe nenhum caminho de "passou por cima → clicou". Existem três informações medidas:
 *
 *   • **alvo**: qual botão/ícone está sob a ponta do indicador (landmark 8) naquele instante;
 *   • **dentro**: a ponta ainda está sobre a área daquele alvo;
 *   • **profundidade**: a distância da ponta até o PLANO daquele alvo, em metros, positiva à frente
 *     da superfície e negativa atrás dela (ou seja, atravessando o vidro).
 *
 * E uma máquina de estados que só produz `press` quando a profundidade mostra uma Pressão de
 * verdade — aproximação não clica, travessia de plano clica, e só uma vez por pressão.
 *
 * ## Os estados
 *
 *   idle ──(ponta entra na faixa de aproximação)──▶ hover ──(encosta: ≤ contacto)──▶ contact
 *     ▲                                              │                                │
 *     │                                   (sai do alvo/afasta)                (empurra ≥ pressão)
 *     │                                              ▼                                ▼
 *     └────────────(afasta mais que rearm)────── released ◀──(volta a sair)────── pressed
 *
 * - `hover` acende o botão, e nada mais. Não existe ação em `hover`.
 * - `contact` mostra o efeito de contacto na ponta do dedo; ainda não é clique.
 * - `pressed` é o clique: o evento `press` sai UMA vez, no instante da confirmação. Ficar com o dedo
 *   apertado não repete nada — quem quiser outro clique tem que sair do contacto e voltar.
 * - `released` é o "esperando o dedo sair": só depois de afastar além de `rearm` (ou sair da área do
 *   alvo) é que um novo clique pode ser confirmado.
 *
 * ## Pressão: absoluta OU relativa
 *
 * O plano do alvo é reconstruído a partir dos landmarks do MediaPipe em metros, e a profundidade
 * medida oscila conforme a mão e a luz. Duas condições confirmam a pressão, e qualquer uma basta:
 *
 *   1. **absoluta** — a ponta atravessou o plano (`depth ≤ POKE.press`, 6 mm atrás do vidro);
 *   2. **relativa** — a ponta avançou `POKE.push` (30 mm) na direção da superfície desde que entrou
 *      na faixa de aproximação (`restDepth - depth`), sem ter saído do alvo.
 *
 * A relativa existe porque num aparelho a profundidade absoluta pode estar deslocada por alguns
 * centímetros — mas o GESTO de empurrar é o mesmo, e é ele que o usuário faz. As duas exigem
 * aproximação real: nenhuma delas dispara com o dedo parado longe do botão.
 *
 * ## Anti-fantasma
 *
 * - Amostras **preditas** (modelo de movimento do rastreador) nunca avançam o estado, nunca confirmam
 *   pressão e nunca soltam: o esqueleto predito continua se movendo depois que a mão parou, e deixá-lo
 *   decidir era justamente uma das fontes de clique fantasma.
 * - **o dedo tem que vir de fora para dentro**: a pressão só vale se, desde que o alvo foi escolhido,
 *   a ponta já esteve À FRENTE do plano (`depth > 0`). Uma mão que aparece no quadro já atravessada
 *   — ou um salto do rastreador — não vira toque, porque não houve o gesto de encostar.
 * - `pressHoldMs` de histerese: a condição de pressão tem que valer por alguns quadros seguidos.
 * - `minHoverMs`: o alvo precisa estar em aproximação antes da pressão (um dedo que atravessa o plano
 *   no mesmo quadro em que entrou no botão não conta).
 * - `debounceMs`: dois cliques no mesmo alvo, no mesmo toque, não saem.
 */

/** Números do Toque Direto, em metros e milissegundos. Exportados porque a interface os usa nos visuais. */
export const POKE = Object.freeze({
  /** Até esta distância à frente do vidro o botão já acende (só destaca, não age). */
  hoverEnter: 0.075,
  /** Acima disto o destaque apaga: histerese, para não piscar na borda da faixa. */
  hoverExit: 0.12,
  /** A ponta está visualmente encostada: efeito de contacto na ponta. */
  contact: 0.012,
  /** Banda "perto do vidro", onde a pressão relativa vale. Cobre o desvio de profundidade do aparelho. */
  nearBand: 0.035,
  /** Pressão absoluta: 6 mm atrás do plano do alvo. */
  press: -0.006,
  /** Pressão relativa: 30 mm de avanço em direção à superfície desde a aproximação. */
  push: 0.030,
  /** Para soltar, a ponta tem que voltar a esta distância à frente do vidro. */
  release: 0.02,
  /** E para poder clicar de novo, tem que afastar até aqui (ou sair da área do alvo). */
  rearm: 0.06,
  /** Quantos ms a condição de pressão precisa se sustentar antes de virar clique. */
  pressHoldMs: 30,
  /** Tempo mínimo de aproximação antes de a pressão poder ser confirmada. */
  minHoverMs: 30,
  /** Intervalo mínimo entre dois cliques quaisquer (dedo diferente incluído). */
  debounceMs: 260,
});

/** Estados possíveis de uma mão no Toque Direto. */
export const POKE_STATE = Object.freeze({
  idle: 'idle',
  hover: 'hover',
  contact: 'contact',
  pressed: 'pressed',
  released: 'released',
});

const NO_EVENTS = Object.freeze([]);

/**
 * Uma mão. `update()` é chamado a cada quadro de rastreamento REAL (30 Hz, tipicamente) e devolve os
 * eventos daquele quadro. Os objetos devolvidos são reaproveitados: isto roda no caminho do
 * rastreamento e alocar um objeto por quadro por mão é lixo que aparece como tremor.
 */
export class DirectTouchHand {
  constructor(options = {}) {
    this.poke = { ...POKE, ...options };
    this.state = POKE_STATE.idle;
    this.targetKey = null;
    this.depth = Infinity;
    this.progress = 0;
    this.contact = false;
    this.pressAt = 0;
    this.releaseAt = 0;
    this._hoverSince = 0;
    this._pressSince = 0;
    this._restDepth = -Infinity;
    this._seenFront = false;
    this._lastClickAt = -Infinity;
    this._lastClickKey = null;
    this._events = [];
    this._result = {
      state: this.state, events: NO_EVENTS, depth: this.depth,
      progress: 0, contact: false, pressed: false, targetKey: null,
    };
  }

  get pressed() {
    return this.state === POKE_STATE.pressed;
  }

  /** Esquece tudo: mão perdida, alvo fechado, sessão trocada. Sem clique, sem evento. */
  reset() {
    this.state = POKE_STATE.idle;
    this.targetKey = null;
    this.depth = Infinity;
    this.progress = 0;
    this.contact = false;
    this._hoverSince = 0;
    this._pressSince = 0;
    this._restDepth = -Infinity;
    this._seenFront = false;
  }

  /** Sai de `released` para `idle`: o dedo saiu de verdade e um novo toque pode começar. */
  _disarm() {
    this.state = POKE_STATE.idle;
    this.targetKey = null;
    this._hoverSince = 0;
    this._pressSince = 0;
    this._restDepth = -Infinity;
    this._seenFront = false;
  }

  /**
   * Uma amostra.
   *
   * @param {object} sample
   * @param {string|null} sample.targetKey identidade do alvo (botão/janela sob a ponta), ou null.
   * @param {boolean} sample.inside a ponta está dentro da área do alvo.
   * @param {number} sample.depth metros até o plano do alvo; positivo à frente do vidro.
   * @param {number} sample.nowMs relógio monotônico (performance.now()).
   * @param {boolean} [sample.predicted] amostra veio do modelo de movimento, não do detector.
   */
  update(sample = {}) {
    const now = Number(sample.nowMs) || 0;
    const depth = Number.isFinite(sample.depth) ? sample.depth : Infinity;
    const inside = sample.inside === true;
    const key = inside && sample.targetKey ? String(sample.targetKey) : null;

    const result = this._result;
    result.state = this.state;
    result.events = NO_EVENTS;
    result.depth = this.depth;
    result.progress = this.progress;
    result.contact = this.contact;
    result.pressed = this.pressed;
    result.targetKey = this.targetKey;

    // Uma predição não decide nada — nem clique, nem soltura, nem troca de alvo. Ela só devolve o
    // estado atual para quem desenha (o dedo continua visível e o botão continua aceso).
    if (sample.predicted === true || sample.present === false) return result;

    this.depth = depth;
    const events = this._events;
    events.length = 0;

    switch (this.state) {
      case POKE_STATE.pressed: {
        // Só solta quando a ponta volta a sair do vidro (ou sai da área do alvo). Enquanto isso,
        // o botão fica no estado de pressão — e nenhum segundo clique nasce daqui.
        if (depth >= this.poke.release || !inside) {
          this.state = POKE_STATE.released;
          this.releaseAt = now;
          this.contact = false;
          events.push('release');
          // Já saiu o suficiente para rearmar? Então não espera mais um quadro: o mesmo movimento
          // que soltou o botão também libera o próximo toque.
          if (!inside || depth > this.poke.rearm) {
            this._disarm();
            events.push('unhover');
          }
        }
        break;
      }
      case POKE_STATE.released: {
        // Espera o dedo sair de verdade: afastar além de `rearm` ou sair da área do alvo.
        if (!inside || depth > this.poke.rearm) {
          this._disarm();
          events.push('unhover');
        }
        break;
      }
      default: {
        // idle / hover / contact
        if (!key) {
          if (this.state !== POKE_STATE.idle) {
            events.push('unhover');
            this.state = POKE_STATE.idle;
          }
          this.targetKey = null;
          this._hoverSince = 0;
          this._pressSince = 0;
          this._restDepth = -Infinity;
          this._seenFront = false;
          break;
        }
        const changed = key !== this.targetKey;
        if (changed) {
          if (this.state !== POKE_STATE.idle) events.push('unhover');
          this.targetKey = key;
          this.state = POKE_STATE.idle;
          this._hoverSince = 0;
          this._pressSince = 0;
          this._restDepth = depth;
          this._seenFront = depth > 0;
        }
        if (depth > this.poke.hoverExit) {
          if (this.state !== POKE_STATE.idle) {
            events.push('unhover');
            this.state = POKE_STATE.idle;
          }
          this._hoverSince = 0;
          this._pressSince = 0;
          this.contact = false;
          break;
        }
        if (this.state === POKE_STATE.idle && depth <= this.poke.hoverEnter) {
          this.state = POKE_STATE.hover;
          this._hoverSince = now;
          // A referência do avanço relativo é a profundidade com que o dedo ENTROU na faixa. Antes
          // era o maior valor visto — e aí quem vinha de longe "já tinha avançado" tudo até aqui.
          this._restDepth = depth;
          this._seenFront = depth > 0;
          events.push('hover');
        } else if (this.state !== POKE_STATE.idle) {
          // Continua na faixa: a referência acompanha o dedo quando ele vai para LONGE (nunca para
          // perto, senão o próprio tremor diminuiria a distância e fabricaria uma pressão).
          if (Number.isFinite(depth)) this._restDepth = Math.max(this._restDepth, depth);
          if (depth > 0) this._seenFront = true;
        }
        if (this.state === POKE_STATE.idle) break;

        // Quanto a ponta avançou na direção do vidro desde que entrou na faixa de aproximação.
        // A referência só aumenta (dedo indo para longe), então o tremor não fabrica avanço.
        const push = Number.isFinite(this._restDepth) && Number.isFinite(depth)
          ? this._restDepth - depth
          : 0;
        // Encostado visualmente: ou a profundidade absoluta diz isso, ou o dedo já avançou a maior
        // parte do caminho de pressão (casos em que o plano medido está alguns mm deslocado).
        const nearSurface = depth <= this.poke.nearBand;
        this.contact = nearSurface &&
          (depth <= this.poke.contact || push >= this.poke.push * 0.6);
        if (this.contact && this.state !== POKE_STATE.contact) {
          this.state = POKE_STATE.contact;
          events.push('contact');
        } else if (!this.contact && this.state === POKE_STATE.contact) {
          this.state = POKE_STATE.hover;
        }

        const absolute = depth <= this.poke.press;
        const halfway = this._restDepth > 0.02 && push >= this.poke.push &&
          push >= this.poke.halfway * this._restDepth;
        const relative = (nearSurface && push >= this.poke.push) || halfway;
        const pressedNow = inside && this._seenFront && (absolute || relative);
        const hoveredEnough = now - this._hoverSince >= this.poke.minHoverMs;
        const cooled = now - this._lastClickAt >= this.poke.debounceMs;
        if (pressedNow && hoveredEnough) {
          if (this._pressSince === 0) this._pressSince = now;
          if (now - this._pressSince >= this.poke.pressHoldMs) {
            this.state = POKE_STATE.pressed;
            this.pressAt = now;
            this.contact = true;
            this._pressSince = 0;
            if (cooled) {
              this._lastClickAt = now;
              this._lastClickKey = key;
              events.push('press');
            } else {
              // Pressão confirmada mas ainda dentro do intervalo mínimo: o estado vira `pressed`
              // (o botão afunda), e nenhum clique sai. Melhor um toque ignorado que dois aplicativos.
              events.push('stuck');
            }
          }
        } else {
          this._pressSince = 0;
        }
        break;
      }
    }

    const span = this.poke.hoverEnter - this.poke.press;
    const travelled = Number.isFinite(this._restDepth) && Number.isFinite(depth)
      ? this._restDepth - depth
      : 0;
    this.progress = Number.isFinite(depth) && this.state !== POKE_STATE.idle
      ? Math.max(0, Math.min(1, Math.max(
        (this.poke.hoverEnter - depth) / (span > 1e-6 ? span : 1),
        travelled / this.poke.push,
      )))
      : 0;

    result.state = this.state;
    result.events = events.length ? events : NO_EVENTS;
    result.depth = this.depth;
    result.progress = this.progress;
    result.contact = this.contact;
    result.pressed = this.pressed;
    result.targetKey = this.targetKey;
    return result;
  }
}

/** Todas as mãos de uma sessão. Uma instância por id de mão, criada sob demanda. */
export class DirectTouch {
  constructor(options = {}) {
    this.options = options;
    this.byHand = new Map();
    /** Último resultado de cada mão, para quem desenha (HUD/GL) ler sem recalcular. */
    this.last = new Map();
  }

  hand(id) {
    const key = id || 'right';
    let hand = this.byHand.get(key);
    if (!hand) {
      hand = new DirectTouchHand(this.options);
      this.byHand.set(key, hand);
    }
    return hand;
  }

  update(id, sample) {
    const hand = this.hand(id);
    const result = hand.update(sample);
    this.last.set(id || 'right', result);
    return result;
  }

  /** Esquece uma mão (saiu do quadro): nenhum evento, nenhum clique pendente. */
  reset(id) {
    const key = id || 'right';
    this.byHand.get(key)?.reset();
    this.last.delete(key);
  }

  resetAll() {
    for (const hand of this.byHand.values()) hand.reset();
    this.last.clear();
  }

  /** O último estado conhecido, ou um estado neutro. */
  stateOf(id) {
    return this.last.get(id || 'right') || null;
  }

  pressed(id) {
    const result = this.last.get(id || 'right');
    return Boolean(result?.pressed);
  }

  /** Alguma mão está com o dedo apertando um alvo? Usado para segurar o raio de fora. */
  anyPressed() {
    for (const result of this.last.values()) if (result?.pressed) return true;
    return false;
  }
}
