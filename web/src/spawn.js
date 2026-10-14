// Colocação inteligente de janelas: onde uma janela nova nasce sem empilhar em cima das que já
// estão no mundo. Módulo PURO (sem DOM e sem THREE) para poder ser testado direto no node.
//
// A medida é ANGULAR: cada superfície vira o retângulo (yaw × pitch) que ela ocupa no campo de
// visão do usuário. É a única medida que faz sentido aqui — duas janelas "colidem" quando uma
// esconde a outra, e isso depende do tamanho aparente, não da distância entre os centros.
//
// Regras:
//  - nenhuma separação mínima artificial é imposta: o usuário pode deixar duas janelas coladas, ou
//    sobrepostas, se quiser. A resolução de colisão existe só para ESCOLHER onde uma janela NOVA
//    (ou um slot do arco) vai cair, nunca para empurrar algo que o usuário posicionou;
//  - a nota de um lugar é o quanto ele evita sobreposição e o quanto mantém folga em volta, com
//    preferência pelo que está mais centralizado e mais perto da distância pedida;
//  - tudo é determinístico: mesma cena, mesma escolha (sem Math.random), o que mantém os testes e
//    a cena espacial estáveis entre frames.

/** Folga angular desejada (rad) entre superfícies antes de a nota piorar. ~2°: respiro, não muro. */
export const DESIRED_GAP = .03;
/** Altura do olho do workspace (a mesma do resto do app): é daqui que o campo de visão é medido. */
export const EYE_HEIGHT = 1.55;
/** Peso de cada radiano de folga que falta (quadrático) na nota de um candidato. */
const GAP_WEIGHT = 900;
/** Peso por radiano² de sobreposição. */
const OVERLAP_WEIGHT = 26000;
/** Peso por radiano de afastamento do centro do olhar. */
const ANGLE_WEIGHT = 26;
/** Peso por metro de profundidade a mais que a distância pedida. */
const DEPTH_WEIGHT = 34;

const finite = value => (Number.isFinite(value) ? value : 0);
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

/**
 * O retângulo angular de uma superfície: o yaw e a pitch do centro mais as meias-aberturas que o
 * tamanho dela ocupa a essa distância. `halfWidth`/`halfHeight` são metros no mundo.
 */
export function viewBox(center, halfWidth, halfHeight, opts = {}) {
  const eyeY = Number.isFinite(opts.eye) ? opts.eye : EYE_HEIGHT;
  const x = finite(center?.x), y = finite(center?.y), z = finite(center?.z);
  const dy = y - eyeY;
  const flat = Math.hypot(x, z);
  const distance = Math.hypot(x, dy, z) || 1e-6;
  const hw = Math.max(0, finite(halfWidth)), hh = Math.max(0, finite(halfHeight));
  return {
    x, y, z,
    yaw: Math.atan2(-x, -z),
    pitch: flat > 1e-6 ? Math.atan2(dy, flat) : (dy >= 0 ? Math.PI / 2 : -Math.PI / 2),
    halfYaw: Math.atan2(hw, flat || 1e-6),
    halfPitch: Math.atan2(hh, distance),
  };
}

/** Retângulo angular de uma janela do workspace (posição/escala já aplicadas no objeto). */
export function boxOfWindow(win) {
  const p = win?.target || win?.obj?.position || { x: 0, y: 0, z: 0 };
  const scale = win?.obj?.scale?.x || 0;
  return viewBox(p, (win?.w || 0) * scale / 2, (win?.h || 0) * scale / 2);
}

/**
 * Retângulo angular de um plano do cenário a partir da malha (a dock, o teclado). O tamanho da
 * malha já está em metros; um teclado deitado aparece como uma faixa mais baixa do que é, o que é
// conservador do jeito certo: nada nasce em cima dele.
 */
export function boxFromMesh(mesh, opts = {}) {
  const params = mesh?.geometry?.parameters;
  if (!params || !(params.width > 0) || !(params.height > 0)) return null;
  mesh.updateMatrix();
  const e = mesh.matrix.elements;
  return viewBox({ x: e[12], y: e[13], z: e[14] }, params.width / 2, params.height / 2, opts);
}

/**
 * Separação angular entre duas superfícies (rad). Positivo = há folga; negativo = há sobreposição
 * (o valor é a raiz da área angular em comum, então "muito sobreposto" pesa mais).
 */
export function separation(a, b) {
  const ax0 = a.yaw - a.halfYaw, ax1 = a.yaw + a.halfYaw;
  const bx0 = b.yaw - b.halfYaw, bx1 = b.yaw + b.halfYaw;
  const ay0 = a.pitch - a.halfPitch, ay1 = a.pitch + a.halfPitch;
  const by0 = b.pitch - b.halfPitch, by1 = b.pitch + b.halfPitch;
  const ox = Math.min(ax1, bx1) - Math.max(ax0, bx0);
  const oy = Math.min(ay1, by1) - Math.max(ay0, by0);
  if (ox > 0 && oy > 0) return -Math.sqrt(ox * oy);
  return Math.hypot(Math.max(-ox, 0), Math.max(-oy, 0));
}

/**
 * Nota de um candidato: menor é melhor. `others` são os retângulos ocupados (janelas visíveis,
 * dock, teclado); `candidate` é o lugar avaliado (x, y, z e, opcionalmente, o retângulo pronto).
 */
export function scorePlacement(candidate, others = [], opts = {}) {
  const eye = Number.isFinite(opts.eye) ? opts.eye : EYE_HEIGHT;
  const desiredDistance = Number.isFinite(opts.desiredDistance) ? opts.desiredDistance : .68;
  const maxYaw = Number.isFinite(opts.maxYaw) ? opts.maxYaw : 1.30;
  const gap = Number.isFinite(opts.gap) ? opts.gap : DESIRED_GAP;
  const box = candidate.box || viewBox(candidate, candidate.hw || .5, candidate.hh || .35);
  let score = 0;
  let worstOverlap = 0;
  for (const other of others) {
    const s = separation(box, other);
    if (s < 0) {
      const depth = s * s;
      score += OVERLAP_WEIGHT * depth + 1000;
      if (depth > worstOverlap) worstOverlap = depth;
    } else if (s < gap) {
      const missing = gap - s;
      score += GAP_WEIGHT * missing * missing;
    }
  }
  const radius = Math.hypot(box.x, box.z) || 1e-6;
  score += ANGLE_WEIGHT * Math.abs(box.yaw);
  if (Math.abs(box.yaw) > maxYaw) score += ANGLE_WEIGHT * (Math.abs(box.yaw) - maxYaw) * 40;
  if (radius > desiredDistance) score += DEPTH_WEIGHT * (radius - desiredDistance);
  const lift = Number.isFinite(opts.lift) ? opts.lift : box.y;
  score += Math.abs(box.y - lift) * 12;
  return { score, overlap: worstOverlap, yaw: box.yaw, radius };
}

/**
 * Candidatos de lugar, na ordem em que devem ser testados: primeiro a fileira principal (centro,
 * direita, esquerda, e assim por diante), depois anéis um pouco mais distantes e por fim a fileira
 * de cima. Todos ficam na frente do usuário e dentro do yaw alcançável do workspace.
 */
export function spawnCandidates({ eye = EYE_HEIGHT, lift, step = .8, distance = .68,
  halfHeight = .35, outerLimit = 1.3, rings = 3, ringStep = .16, rows = 2, topRowStep = 1.22 } = {}) {
  const out = [];
  const baseY = Number.isFinite(lift) ? lift : eye;
  const angles = [0];
  for (let k = 1; k <= 6; k++) {
    const a = k * step;
    if (a > outerLimit + 1e-9) break;
    angles.push(a, -a);
  }
  for (let row = 0; row < rows; row++) {
    const y = row === 0 ? baseY : baseY + halfHeight * 2 * (topRowStep - 1) + halfHeight;
    for (let ring = 0; ring < rings; ring++) {
      const radius = distance + ring * ringStep;
      for (const angle of angles) {
        const limited = clamp(angle, -outerLimit, outerLimit);
        out.push({ x: Math.sin(limited) * radius, y, z: -Math.cos(limited) * radius,
          angle: limited, row, radius });
      }
    }
  }
  return out;
}

/**
 * Escolhe onde uma janela nova deve nascer. Devolve o melhor candidato com o retângulo avaliado,
 * ou o lugar desejado quando ele já é tão bom quanto qualquer outro (o que preserva o layout de
 * sempre quando não há nada no caminho).
 *
 * `occupied` deve incluir tudo que ocupa espaço visual: janelas presas, janelas soltas colocadas à
 * mão, a dock e o teclado.
 */
export function chooseSpawn({ occupied = [], desired = null, eye = EYE_HEIGHT, step = .8,
  distance = .68, halfWidth = .5, halfHeight = .35, outerLimit = 1.3, lift = null, rings = 3,
  ringStep = .16, rows = 2, gap = DESIRED_GAP, topRowStep = 1.22, improvement = 1e-6 } = {}) {
  const opts = { eye, desiredDistance: distance, maxYaw: outerLimit, gap, lift: lift ?? eye };
  const candidates = spawnCandidates({ eye, lift: lift ?? eye, step, distance, halfHeight,
    outerLimit, rings, ringStep, rows, topRowStep });
  let best = null;
  for (const c of candidates) {
    const box = viewBox(c, halfWidth, halfHeight);
    const { score, overlap } = scorePlacement({ ...c, box }, occupied, opts);
    const ranked = { x: c.x, y: c.y, z: c.z, angle: c.angle, row: c.row, radius: c.radius,
      score, overlap, box };
    if (!best || ranked.score < best.score - improvement) best = ranked;
  }
  if (desired) {
    const box = viewBox(desired, halfWidth, halfHeight);
    const { score, overlap } = scorePlacement({ ...desired, box }, occupied, opts);
    const ranked = { x: desired.x, y: desired.y, z: desired.z, angle: 0, row: 0,
      radius: Math.hypot(desired.x, desired.z), score, overlap, box, desired: true };
    if (!best || ranked.score <= best.score + improvement) best = ranked;
  }
  return best;
}

/**
 * Ajuste de um slot do arco já ocupado por uma janela presa: se o lugar desejado COLIDE com alguma
 * coisa (uma janela solta colocada à mão, por exemplo), procura o lugar equivalente mais próximo,
 * no mesmo arco, que não colida. Sem colisão o lugar desejado é devolvido intacto — o layout
 * atual não muda.
 */
export function resolveSlot({ desired, occupied = [], eye = EYE_HEIGHT, step = .8,
  distance = .68, halfWidth = .5, halfHeight = .35, outerLimit = 1.3, gap = DESIRED_GAP,
  maxShift = 3 } = {}) {
  const opts = { eye, desiredDistance: distance, maxYaw: outerLimit, gap, lift: desired.y };
  const boxFor = (x, y, z) => viewBox({ x, y, z }, halfWidth, halfHeight);
  const base = scorePlacement({ ...desired, box: boxFor(desired.x, desired.y, desired.z) },
    occupied, opts);
  if (base.overlap <= 0) {
    return { x: desired.x, y: desired.y, z: desired.z, score: base.score, moved: false, overlap: 0 };
  }
  let best = { x: desired.x, y: desired.y, z: desired.z, score: base.score, overlap: base.overlap };
  const radius = Math.hypot(desired.x, desired.z) || distance;
  const yaw0 = Math.atan2(-desired.x, -desired.z);
  for (let k = 1; k <= maxShift; k++) {
    for (const sign of [1, -1]) {
      const yaw = clamp(yaw0 + sign * k * step, -outerLimit, outerLimit);
      const x = -Math.sin(yaw) * radius, z = -Math.cos(yaw) * radius;
      const { score, overlap } = scorePlacement({ x, y: desired.y, z, box: boxFor(x, desired.y, z) },
        occupied, opts);
      if (score < best.score) best = { x, y: desired.y, z, score, overlap };
    }
  }
  return { ...best, moved: best.x !== desired.x || best.z !== desired.z };
}
