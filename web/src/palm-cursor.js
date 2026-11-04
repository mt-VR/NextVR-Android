// Palm Cursor: orientação da palma da mão (a bolinha entre o polegar e o indicador).
//
// A bolinha aparece quando a PALMA ESTÁ VOLTADA PARA A CÂMERA/HEADSET e some quando é o DORSO da mão
// que está voltado para lá — o comportamento do cursor de mão do Meta Quest, medido pela geometria da
// mão (normal da palma × direção palma → olho), nunca pela altura dela nem pela posição dos dedos.
//
// Uma única medida de orientação, em 3D quando o rastreamento a oferece:
//
//   • o plano da palma são três landmarks: pulso (0), MCP do indicador (5) e MCP do dedo mínimo (17);
//     a normal é o produto vetorial (5-0) × (17-0) — geometria, nunca a posição vertical da mão;
//   • o sentido "para fora da palma" depende da mão física (a mesma pose na mão esquerda é a imagem
//     espelhada da direita), por isso a normal é orientada por mão: fora = s × u na direita e
//     u × s na esquerda, com u = pulso→nós dos dedos e s = indicador→mínimo;
//   • a comparação é com a direção PALMA → OLHO (o olho é a origem do espaço da cabeça que o
//     rastreador publica em `head`), então girar o corpo, andar ou levantar a mão não muda nada: só
//     a orientação conta. Palma de frente mede +1, dorso mede −1, mão de perfil mede ~0.
//
// Em cima dessa medida, [PalmCursorGate] faz o que faltava: suavização temporal, histerese (um
// limiar para acender, outro mais baixo para apagar), tolerância curta a falhas de rastreamento e
// saída em fade — nunca um `remove()` no primeiro quadro ruim.

/** Limiares de "quanto a palma olha para a câmera": −1 (dorso) .. +1 (palma de frente). */
export const PALM_CURSOR = Object.freeze({
  /** Acende a partir daqui (palma claramente voltada para a câmera). */
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
  /** Valor devolvido quando só existem landmarks 2D: separa palma de dorso (comprimido). */
  fallbackFacing: .6,
});

const num = v => typeof v === 'number' && Number.isFinite(v);

/**
 * Sentido do "para fora da palma", deduzido da mão física (e não escolhido por tentativa).
 *
 * Com u = pulso → MCP do indicador, v = pulso → MCP do mínimo, no referencial da cabeça (x direita,
 * y cima, +z para quem olha), a mão DIREITA com a palma voltada para a câmera dá
 *
 *     u × v = +z   (para fora da palma, ou seja, para a câmera)
 *
 * porque, para quem olha de frente, o polegar dela aparece do lado direito da imagem, de modo que o
 * índice está em +x e o mínimo em −x. A esquerda é a imagem espelhada e dá o contrário. Era aqui que
 * o sinal estava trocado: a bolinha aparecia com o DORSO da mão voltado para a câmera, exatamente o
 * oposto do gesto do Meta Quest. `PalmMenuPose` (nativo) já usava o sentido certo — esta é a mesma
 * conta, agora igual nos dois lados.
 */

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
  // Sentido "para fora da palma": na direita é +(u x v); na esquerda, o contrário (dedução acima).
  return left ? { x: -x, y: -y, z: -z } : { x, y, z };
}

/**
 * Quanto a palma olha para quem está olhando, em [-1, 1], a partir dos landmarks 3D (espaço da
 * cabeça). +1 = palma de frente para a câmera, −1 = dorso, 0 = mão de perfil. Null sem medida.
 *
 * O produto escalar é entre a normal da palma e a direção palma → olho: as duas na mesma direção
 * significa palma voltada para o usuário.
 */
export function palmFacingFromHead(head, left) {
  const n = palmNormal(head, left);
  if (!n) return null;
  return Math.max(-1, Math.min(1, palmTowardEye(head, n)));
}

/** Escalar normal · (olho − palma), com o olho na origem do espaço da cabeça. */
function palmTowardEye(head, n) {
  const cx = (head[0] + head[15] + head[27] + head[51]) / 4;
  const cy = (head[1] + head[16] + head[28] + head[52]) / 4;
  const cz = (head[2] + head[17] + head[29] + head[53]) / 4;
  const cl = Math.hypot(cx, cy, cz);
  if (!(cl > .05)) return 0;
  return -(n.x * cx + n.y * cy + n.z * cz) / cl;
}

/**
 * Dorso da mão pelos landmarks 2D (o polegar aparece do outro lado do MCP do indicador). O segundo
 * parâmetro diz se a mão é a "direita" do pacote (`hand.left === false`) — o mesmo lado que orienta a
 * normal 3D, e o padrão deduz do pacote para não haver como divergirem. É o único
 * sinal que um pacote sem profundidade consegue dar — por isso é um VETO, com margem folgada.
 */
export function isBackOfHand(hand, isRightHand, margin = PALM_CURSOR.thumbMargin) {
  const p = hand?.points;
  if (!p || p.length < 63) return false;
  if (hand.backOfHand === true) return true;
  const thumbX = p[12], indexMcpX = p[15], pinkyMcpX = p[51];
  if (!num(thumbX) || !num(indexMcpX) || !num(pinkyMcpX)) return false;
  // Palma de frente: o polegar fica do lado do indicador (a mão direita mostra o polegar à direita
  // da imagem). Dorso: ele passa para o outro lado do MCP do indicador. A condição estava invertida
  // — e, como a normal 3D estava invertida no mesmo sentido, os dois erros concordavam entre si e o
  // teste antigo não via nada.
  if (isRightHand) return thumbX < indexMcpX - margin && indexMcpX < pinkyMcpX;
  return thumbX > indexMcpX + margin && indexMcpX > pinkyMcpX;
}

/**
 * Orientação da palma de um pacote de mão: 3D (`head`) quando existe, senão o que os 2D permitem.
 *
 * Os 2D de imagem dão exatamente o mesmo sinal (é a mesma conta projetada, na convenção que o
 * rastreador nativo usa) com uma compressão suave, então a bolinha não desaparece num aparelho cujo
 * rastreador não publicou os landmarks 3D daquele quadro.
 */
export function palmFacingOfHand(hand, isRightHand = !physicalLeft(hand)) {
  const from3d = palmFacingFromHead(hand?.head, physicalLeft(hand));
  if (from3d != null) return from3d;
  const p = hand?.points;
  if (!p || p.length < 63) return null;
  const palm = Math.hypot(p[15] - p[51], p[16] - p[52]);
  if (!(palm >= PALM_CURSOR.minPalm2d)) return null;
  return isBackOfHand(hand, isRightHand) ? -PALM_CURSOR.fallbackFacing : PALM_CURSOR.fallbackFacing;
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
