// Palm Cursor: orientação da palma da mão (a bolinha entre o polegar e o indicador).
//
// A bolinha aparece quando a PALMA ESTÁ VIRADA PARA CIMA e some quando está virada para baixo —
// como o cursor de mão do Meta Quest, mas medido pela geometria da mão, não pela altura dela.
//
// Uma única medida de orientação, em 3D quando o rastreamento a oferece:
//
//   • o plano da palma são três landmarks: pulso (0), MCP do indicador (5) e MCP do dedo mínimo (17);
//     a normal é o produto vetorial (5-0) × (17-0) — geometria, nunca a posição vertical da mão;
//   • o sentido "para fora da palma" depende da mão física (a mesma pose na mão esquerda é a imagem
//     espelhada da direita), por isso a normal é orientada por mão: fora = s × u na direita e
//     u × s na esquerda, com u = pulso→nós dos dedos e s = indicador→mínimo;
//   • a comparação é com o "para cima" da cabeça (+Y do espaço da cabeça que o rastreador publica em
//     `head`), então girar o corpo ou andar não muda nada, e a orientação da mão é independente da
//     altura em que ela está.
//
// Em cima dessa medida, [PalmCursorGate] faz o que faltava: suavização temporal, histerese (um
// limiar para acender, outro mais baixo para apagar), tolerância curta a falhas de rastreamento e
// saída em fade — nunca um `remove()` no primeiro quadro ruim.

/** Limiares de "quanto a palma aponta para cima": −1 (para baixo) .. +1 (para cima). */
export const PALM_CURSOR = Object.freeze({
  /** Acende a partir daqui (palma claramente para cima). */
  showAt: .34,
  /** Apaga abaixo daqui (histerese: um valor no meio mantém o estado atual). */
  hideAt: .16,
  /** Constante de tempo da suavização da orientação (ms). */
  smoothTauMs: 120,
  /** Quanto tempo a palma pode ficar sem medida antes de a bolinha sumir (ms). */
  graceMs: 280,
  /** Duração do fade de saída, para casar com o CSS (ms). */
  fadeMs: 180,
  /** Palma menor que isto (metros, 3D) não é medida: é ruído ou mão degenerada. */
  minPalm3d: .01,
  /** Palma menor que isto (largura normalizada, 2D) não é medida. */
  minPalm2d: .008,
  /** Margem do polegar contra o dorso da mão (era .015 e disparava com tremor). */
  thumbMargin: .025,
  /** Valor devolvido quando só existem landmarks 2D: dá para separar palma de dorso, não "para cima". */
  fallbackFacing: .6,
});

const num = v => typeof v === 'number' && Number.isFinite(v);

const physicalLeft = hand => hand?.left === true || hand?.id === 'left';

/**
 * Normal "para fora da palma", unitária, a partir de landmarks 3D no espaço da cabeça (o mesmo
 * array `head` que o rastreador publica: metros, x para a direita, y para cima, −z à frente, olho na
 * origem). Devolve `{x,y,z}` ou null quando não há geometria suficiente.
 */
function palmNormal(head, left) {
  if (!head || head.length < 63) return null;
  const ux = head[15] - head[0], uy = head[16] - head[1], uz = head[17] - head[2];   // pulso → indicador
  const vx = head[51] - head[0], vy = head[52] - head[1], vz = head[53] - head[2];   // pulso → mínimo
  // Uma palma de verdade tem alguns centímetros: abaixo disso não é medida, é ruído.
  if (Math.hypot(ux, uy, uz) < PALM_CURSOR.minPalm3d || Math.hypot(vx, vy, vz) < PALM_CURSOR.minPalm3d) return null;
  let x = uy * vz - uz * vy, y = uz * vx - ux * vz, z = ux * vy - uy * vx;
  const len = Math.hypot(x, y, z);
  if (!(len > 1e-7)) return null;
  x /= len; y /= len; z /= len;
  // Sentido "para fora da palma": a mesma pose nas duas mãos tem a normal invertida.
  return left ? { x, y, z } : { x: -x, y: -y, z: -z };
}

/**
 * Quanto a palma aponta para cima, em [-1, 1], a partir dos landmarks 3D (espaço da cabeça).
 * +1 = palma para o teto, −1 = palma para o chão, 0 = palma de lado. Null quando não há medida.
 */
export function palmUpFromHead(head, left) {
  const n = palmNormal(head, left);
  if (!n) return null;
  return Math.max(-1, Math.min(1, n.y));
}

/**
 * Dorso da mão pelos landmarks 2D (o polegar aparece do outro lado do MCP do indicador). É o único
 * sinal que um pacote sem profundidade consegue dar — por isso é um VETO, com margem folgada.
 */
export function isBackOfHand(hand, isRightBolinha, margin = PALM_CURSOR.thumbMargin) {
  const p = hand?.points;
  if (!p || p.length < 63) return false;
  if (hand.backOfHand === true) return true;
  const thumbX = p[12], indexMcpX = p[15], pinkyMcpX = p[51];
  if (!num(thumbX) || !num(indexMcpX) || !num(pinkyMcpX)) return false;
  if (isRightBolinha) return thumbX > indexMcpX + margin && indexMcpX > pinkyMcpX;
  return thumbX < indexMcpX - margin && indexMcpX < pinkyMcpX;
}

/**
 * Orientação da palma de um pacote de mão: 3D (`head`) quando existe, senão o que os 2D permitem.
 *
 * Sem profundidade não é possível distinguir "palma para cima" de "palma para a câmera"; nesse caso
 * o pacote devolve só o sinal palma/dorso (±[PALM_CURSOR.fallbackFacing]) para a bolinha não
 * desaparecer de vez num aparelho cujo rastreador não publicou os landmarks 3D daquele quadro.
 */
export function palmUpOfHand(hand, isRightBolinha = physicalLeft(hand)) {
  const from3d = palmUpFromHead(hand?.head, physicalLeft(hand));
  if (from3d != null) return from3d;
  const p = hand?.points;
  if (!p || p.length < 63) return null;
  const palm = Math.hypot(p[15] - p[51], p[16] - p[52]);
  if (!(palm >= PALM_CURSOR.minPalm2d)) return null;
  return isBackOfHand(hand, isRightBolinha) ? -PALM_CURSOR.fallbackFacing : PALM_CURSOR.fallbackFacing;
}

/**
 * Portão da bolinha de UMA mão: suaviza a orientação, aplica histerese, tolera uma falha curta de
 * rastreamento e informa quando ligar/desligar. Não aloca por quadro e não chama o relógio: o tempo
 * entra por parâmetro (determinístico e testável).
 */
export class PalmCursorGate {
  constructor(options = {}) {
    this.cfg = { ...PALM_CURSOR, ...options };
    this.reset();
    this.result = { visible: false, changed: false, facing: null, raw: null, progress: 0, fading: false };
  }

  reset() {
    this.visible = false;
    this.facing = null;
    this.raw = null;
    this.at = 0;
    /** Quando a palma deixou de estar erguida (0 = está). */
    this.offSince = 0;
    /** Quando a medida ficou indisponível (0 = há medida). */
    this.lostSince = 0;
    this.hiddenAt = -Infinity;
    return this;
  }

  /**
   * @param {{facing:number|null, nowMs:number, present?:boolean}} sample
   * @returns {{visible:boolean, changed:boolean, facing:number|null, raw:number|null, progress:number, fading:boolean}}
   */
  update(sample = {}) {
    const out = this.result;
    const nowMs = num(sample.nowMs) ? sample.nowMs : this.at;
    const dt = this.at > 0 && nowMs > this.at ? nowMs - this.at : 0;
    this.at = nowMs;
    const present = sample.present !== false;
    const raw = num(sample.facing) ? Math.max(-1, Math.min(1, sample.facing)) : null;
    out.raw = raw;

    // 1. Suavização temporal: sem ela a normal treme com o tremor dos landmarks e a bolinha pisca.
    if (raw == null || !present) {
      this.lostSince = this.lostSince || nowMs;
    } else {
      this.lostSince = 0;
      if (this.facing == null || dt <= 0) this.facing = raw;
      else this.facing += (raw - this.facing) * (1 - Math.exp(-dt / Math.max(1, this.cfg.smoothTauMs)));
    }
    out.facing = this.facing;

    // 2. Histerese: acende acima de `showAt`, apaga só abaixo de `hideAt` e depois da tolerância —
    //    um quadro ruim no meio de um giro lento não apaga a bolinha.
    const before = this.visible;
    const value = this.facing;
    if (value != null) {
      if (!this.visible) {
        if (value >= this.cfg.showAt) { this.visible = true; this.offSince = 0; }
      } else if (value <= this.cfg.hideAt) {
        this.offSince = this.offSince || nowMs;
        if (nowMs - this.offSince >= this.cfg.graceMs) this.visible = false;
      } else {
        this.offSince = 0;
      }
    }

    // 3. Mão perdida (ou orientação impossível de medir): some de forma controlada, nunca no susto.
    if (this.lostSince && nowMs - this.lostSince >= this.cfg.graceMs) this.visible = false;

    if (before && !this.visible) this.hiddenAt = nowMs;
    out.visible = this.visible;
    out.changed = before !== this.visible;
    out.fading = !this.visible && nowMs - this.hiddenAt < this.cfg.fadeMs;
    const span = Math.max(1e-6, this.cfg.showAt - this.cfg.hideAt);
    out.progress = value == null ? 0 : Math.max(0, Math.min(1, (value - this.cfg.hideAt) / span));
    return out;
  }
}

/**
 * Onde a bolinha fica, em coordenadas normalizadas de tela: entre o polegar (4) e o indicador (8),
 * um pouco acima da linha que os une — o mesmo ponto de sempre, agora num só lugar.
 *
 * `sx`/`sy` são os do pacote de mãos (mesmo mapeamento do `screenPoint()`), então a bolinha continua
 * grudada na mão quando o campo de visão do aparelho muda.
 */
export function bolinhaNormalizedPoint(hand, sx = 1, sy = 1) {
  const p = hand?.points;
  const scaleX = Number(sx) || 1;
  const scaleY = Number(sy) || 1;
  const rawU = (p && p.length >= 26 && num(p[24]) && num(p[12])) ? (p[24] * .52 + p[12] * .48) : (hand?.palm?.[0] ?? .55);
  const rawV = (p && p.length >= 26 && num(p[25]) && num(p[13])) ? ((p[25] + p[13]) * .5 - .025) : ((hand?.palm?.[1] ?? .5) - .06);
  return {
    u: Math.max(.08, Math.min(.92, (rawU - .5) * scaleX + .5)),
    v: Math.max(.08, Math.min(.90, (rawV - .5) * scaleY + .5)),
  };
}

/**
 * Posição da bolinha na tela, suavizada.
 *
 * O filtro nativo cuida dos landmarks, mas a bolinha ainda pulava alguns pixels de um quadro para o
 * outro porque a mistura polegar/indicador amplifica o ruído dos dois. Aqui a posição passa por um
 * passa-baixa curto (segue a mão sem arrastar) com uma zona morta: tremor menor que ~1,5 px num
 * campo de visão normal não move a bolinha, e movimento de verdade passa direto.
 */
export class BolinhaMotion {
  constructor({ tauMs = 70, deadZone = .0018 } = {}) {
    this.tauMs = tauMs;
    this.deadZone = deadZone;
    this.reset();
  }

  reset() {
    this.u = null;
    this.v = null;
    this.at = 0;
    return this;
  }

  /** @returns {{u:number, v:number}} posição a desenhar (ou a crua, na primeira amostra). */
  update(point, nowMs = this.at) {
    if (!point || !num(point.u) || !num(point.v)) return { u: this.u ?? .5, v: this.v ?? .5 };
    if (this.u == null || this.v == null) {
      // Primeira amostra (ou logo depois de sumir): mostra exatamente onde a mão está.
      this.u = point.u; this.v = point.v; this.at = nowMs;
      return { u: this.u, v: this.v };
    }
    const dt = this.at > 0 && nowMs > this.at ? nowMs - this.at : 16;
    this.at = nowMs;
    const k = 1 - Math.exp(-dt / Math.max(1, this.tauMs));
    const du = point.u - this.u, dv = point.v - this.v;
    if (Math.hypot(du, dv) > this.deadZone) {
      this.u += du * k;
      this.v += dv * k;
    }
    return { u: this.u, v: this.v };
  }
}
