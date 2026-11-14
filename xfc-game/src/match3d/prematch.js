// Cerimônia pré-jogo do XFC — a ordem das quatro cenas é FIXA.
//
//   1. túnel      — os dois times esperam, um de cada lado, com os árbitros à frente;
//   2. entrada    — árbitros saem primeiro, os times seguem juntos até a linha;
//   3. hino       — times alinhados de frente para a câmera, árbitros no meio;
//   4. apito      — a câmera sobe para a transmissão e o controle é liberado.
//
// Este módulo é PURO (sem three.js e sem DOM): só tempos, posições e a curva da
// câmera. Assim a ordem das cenas pode ser testada no Node, sem navegador, e o
// motor só aplica o que está aqui.
//
// A câmera é UMA só curva contínua do começo ao fim (Catmull-Rom), inclusive
// nas trocas de cena: não existe corte seco entre o túnel, o gramado, o hino e
// a transmissão.

/** Duração (s) de cada cena, na ordem obrigatória. */
export const PREMATCH_BEATS = Object.freeze([
  Object.freeze({ id: 'tunnel', label: 'OS VESTIÁRIOS', caption: 'Os times esperam no túnel', duration: 3.4 }),
  Object.freeze({ id: 'walkout', label: 'ENTRADA EM CAMPO', caption: 'Árbitros e jogadores entram no gramado', duration: 8.0 }),
  Object.freeze({ id: 'anthem', label: 'HINO', caption: 'As equipes se apresentam', duration: 3.8 }),
  Object.freeze({ id: 'handoff', label: 'APITO INICIAL', caption: 'Começa a partida', duration: 3.2 })
]);

export const PREMATCH_TOTAL = PREMATCH_BEATS.reduce((total, beat) => total + beat.duration, 0);

/** Início acumulado de cada cena (mesma ordem do array). */
export const PREMATCH_STARTS = Object.freeze(PREMATCH_BEATS.reduce((starts, beat, index) => {
  starts.push(index === 0 ? 0 : starts[index - 1] + PREMATCH_BEATS[index - 1].duration);
  return starts;
}, []));

/** A cena que está no ar no tempo `time` (segundos desde o apito do pré-jogo). */
export function prematchBeatAt(time) {
  const t = Math.max(0, Number(time) || 0);
  let index = PREMATCH_BEATS.length - 1;
  for (let i = 0; i < PREMATCH_BEATS.length; i += 1) {
    if (t < PREMATCH_STARTS[i] + PREMATCH_BEATS[i].duration) { index = i; break; }
  }
  const beat = PREMATCH_BEATS[index];
  const start = PREMATCH_STARTS[index];
  return {
    index,
    id: beat.id,
    label: beat.label,
    caption: beat.caption,
    start,
    duration: beat.duration,
    local: Math.max(0, Math.min(beat.duration, t - start)),
    progress: Math.max(0, Math.min(1, (t - start) / beat.duration)),
    total: Math.max(0, Math.min(1, t / PREMATCH_TOTAL))
  };
}

/** Fim de cada cena em segundos (para o motor agendar as viradas). */
export const PREMATCH_ENDS = Object.freeze(PREMATCH_BEATS.map((beat, index) => PREMATCH_STARTS[index] + beat.duration));

// ------------------------------------------------------------------ geometria --

/**
 * Medidas do túnel usado na cena 1. O corredor estreito (o mesmo do estádio,
 * aberto no gramado) cresce para uma sala larga o suficiente para os dois
 * elencos; tudo isso fica escondido fora da cerimônia.
 */
export const TUNNEL = Object.freeze({
  halfWidth: 3.4,
  mouthZ: -45.2,
  throatZ: -47.4,
  backZ: -53.0,
  height: 4.2,
  // Cada elenco ocupa um bloco lateral virado para a boca do túnel: duas
  // colunas por lado, de frente para o gramado, esperando a autorização.
  columnX: [1.02, 1.68],
  rowStartZ: -49.9,
  rowSpacing: 0.46,
  rowsPerColumn: 6,
  refereeZ: -46.75
});

/**
 * Lugar do jogador `index` do time no túnel (cena 1). Os dois times ficam um de
 * cada lado do corredor, todos de frente para a boca — quem está na frente sai
 * primeiro.
 */
export function tunnelSlot(side, index) {
  const sign = side === 'home' ? -1 : 1;
  const slot = Math.max(0, Math.min(10, index));
  const column = Math.floor(slot / TUNNEL.rowsPerColumn);
  const row = slot % TUNNEL.rowsPerColumn;
  const columnX = TUNNEL.columnX[Math.min(TUNNEL.columnX.length - 1, column)];
  return {
    x: sign * columnX,
    z: TUNNEL.rowStartZ - row * TUNNEL.rowSpacing,
    // De frente para a boca do túnel (e para os árbitros que barram a saída).
    angle: 0
  };
}

/** Árbitros no meio do corredor, de frente para as equipes (barrando a saída). */
export function refereeTunnelSlot(index) {
  const offsets = [-0.62, 0.62, 0];
  return { x: offsets[Math.max(0, Math.min(2, index))], z: TUNNEL.refereeZ, angle: Math.PI };
}

/**
 * Linha de apresentação (cena 3): os dois times alinhados de frente para a
 * câmera, um de cada lado do círculo central, com os árbitros no meio.
 */
export const PRESENTATION = Object.freeze({
  z: -27.0,
  spacing: 1.28,
  gap: 2.1,
  angle: 0
});

export function presentationSlot(side, index) {
  const count = 11;
  const row = Math.max(0, Math.min(count - 1, index));
  const spread = (row - (count - 1) / 2) * PRESENTATION.spacing;
  const sign = side === 'home' ? -1 : 1;
  return {
    x: sign * (PRESENTATION.gap / 2 + Math.abs(spread)) * (row === (count - 1) / 2 ? 0 : 1) + sign * Math.sign(spread || 1) * 0,
    z: PRESENTATION.z,
    angle: PRESENTATION.angle
  };
}

/**
 * Posição na linha de apresentação: o time da casa ocupa a metade esquerda,
 * o visitante a direita, cada jogador com o seu espaço.
 */
export function lineupSlot(side, index) {
  const row = Math.max(0, Math.min(10, index));
  const step = PRESENTATION.spacing;
  if (side === 'home') return { x: -(PRESENTATION.gap / 2) - (10 - row) * step, z: PRESENTATION.z, angle: 0 };
  return { x: PRESENTATION.gap / 2 + row * step, z: PRESENTATION.z, angle: 0 };
}

/** Árbitros entre as duas equipes, à frente da linha. */
export function refereeLineupSlot(index) {
  const offsets = [-1.15, 0, 1.15];
  return { x: offsets[Math.max(0, Math.min(2, index))], z: PRESENTATION.z + 0.9, angle: 0 };
}

/**
 * Ponto de saída no gramado (boca do túnel) e pontos do trajeto até a linha.
 * O corredor é estreito, então os times saem em duas filas.
 */
export const WALKOUT = Object.freeze({
  mouthX: 0,
  mouthZ: TUNNEL.mouthZ,
  pitchZ: -33.2,
  fileGap: 0.95
});

/** Trajeto (pontos) do jogador até a linha de apresentação. */
export function walkoutPath(side, index) {
  const start = tunnelSlot(side, index);
  const target = lineupSlot(side, index);
  const sign = side === 'home' ? -1 : 1;
  // Duas filas: uma logo à esquerda do eixo do corredor, outra à direita.
  const lane = sign * 0.62;
  const gate = TUNNEL.mouthZ + 0.25;
  return [
    { x: start.x, z: start.z },
    { x: start.x * 0.72, z: TUNNEL.throatZ + 0.15 },
    { x: lane, z: gate - 1.1 },
    { x: lane * 1.35, z: WALKOUT.pitchZ + 2.2 },
    { x: lane * 2.0 + target.x * 0.22, z: WALKOUT.pitchZ - 1.4 },
    { x: target.x * 0.68, z: target.z + 3.6 },
    { x: target.x, z: target.z }
  ];
}

/** Comprimento de um trajeto (metros), para calibrar a velocidade da caminhada. */
export function pathLength(points) {
  let total = 0;
  for (let i = 1; i < points.length; i += 1) {
    total += Math.hypot(points[i].x - points[i - 1].x, points[i].z - points[i - 1].z);
  }
  return total;
}

/** Ponto do trajeto a `u` (0..1) do comprimento, com a direção do movimento. */
export function samplePath(points, u) {
  if (!points?.length) return { x: 0, z: 0, dx: 0, dz: 1 };
  if (points.length === 1) return { x: points[0].x, z: points[0].z, dx: 0, dz: 1 };
  const lengths = [];
  let total = 0;
  for (let i = 1; i < points.length; i += 1) {
    const segment = Math.hypot(points[i].x - points[i - 1].x, points[i].z - points[i - 1].z);
    lengths.push(segment);
    total += segment;
  }
  let remaining = Math.max(0, Math.min(1, Number(u) || 0)) * total;
  for (let i = 0; i < lengths.length; i += 1) {
    const segment = lengths[i] || 0.0001;
    if (remaining <= segment || i === lengths.length - 1) {
      const t = Math.max(0, Math.min(1, remaining / segment));
      const a = points[i];
      const b = points[i + 1];
      const dx = b.x - a.x;
      const dz = b.z - a.z;
      const length = Math.hypot(dx, dz) || 1;
      return {
        x: a.x + dx * t,
        z: a.z + dz * t,
        dx: dx / length,
        dz: dz / length
      };
    }
    remaining -= segment;
  }
  const last = points[points.length - 1];
  return { x: last.x, z: last.z, dx: 0, dz: 1 };
}

/** Suavização de entrada e saída (sem freada brusca no começo/fim do trajeto). */
export function smoothstep(t) {
  const value = Math.max(0, Math.min(1, Number(t) || 0));
  return value * value * (3 - 2 * value);
}

// ---------------------------------------------------------------------- hino --

/**
 * Abertura da boca no hino. Não é senoide pura: cada atleta tem um timbre de
 * sílabas (seed), frases com respiração e um leve rubato, senão todos cantam
 * no mesmo compasso e a cena vira coral de robô.
 */
export function anthemMouth(time, seed = 0) {
  const t = Math.max(0, time) + seed * 3.1;
  // Sílabas: ~4,6 a 5,6 por segundo (ritmo de hino cantado, não de coral lento).
  const rate = 4.6 + (seed % 1) * 1.0;
  const syllable = 0.5 - 0.5 * Math.cos(t * rate * Math.PI * 2);
  // Cada verso dura ~2,2 s; a boca fecha na respiração entre eles.
  const phrase = (t % 2.6) / 2.6;
  const breath = smoothstep(phrase / 0.14) * (1 - smoothstep((phrase - 0.86) / 0.14));
  // Vogal: as sílabas tônicas abrem mais que as átonas.
  const stress = 0.45 + 0.55 * (0.5 + 0.5 * Math.sin(t * 1.9 + seed * 1.7));
  const openness = Math.pow(syllable, 0.62) * breath * stress;
  return Math.max(0, Math.min(1, openness));
}

/** Balanço do corpo no hino (radianos, pequeno e lento). */
export function anthemSway(time, seed = 0) {
  const t = Math.max(0, time) + seed * 3.71;
  return {
    side: 0.045 * Math.sin(t * 1.05),
    nod: 0.05 * Math.sin(t * 1.6 + 1.1) * 0.7,
    lift: 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * 0.52))
  };
}

// ------------------------------------------------------------------- câmera --

/**
 * Amostra uma sequência de chaves de câmera com Catmull-Rom (contínuo em C¹).
 *
 * `keys` = [{ t, position:{x,y,z}, target:{x,y,z}, fov }]. O tempo de cada
 * chave é absoluto (s). As tangentes são estimadas pelos vizinhos e limitadas
 * para não estourar a curva — a câmera nunca "pula" nem atravessa o chão.
 */
export function sampleCamera(keys, time) {
  if (!keys?.length) return null;
  if (keys.length === 1) return cloneKey(keys[0]);
  const t = Number(time) || 0;
  if (t <= keys[0].t) return cloneKey(keys[0]);
  if (t >= keys[keys.length - 1].t) return cloneKey(keys[keys.length - 1]);
  let index = 0;
  while (index < keys.length - 2 && t > keys[index + 1].t) index += 1;
  const k0 = keys[Math.max(0, index - 1)];
  const k1 = keys[index];
  const k2 = keys[index + 1];
  const k3 = keys[Math.min(keys.length - 1, index + 2)];
  const span = Math.max(0.0001, k2.t - k1.t);
  const s = Math.max(0, Math.min(1, (t - k1.t) / span));
  const curve = (a, b, c, d) => catmullRom(
    a, b, c, d,
    Math.max(0.0001, k1.t - k0.t),
    span,
    Math.max(0.0001, k3.t - k2.t),
    s
  );
  return {
    t,
    position: {
      x: curve(k0.position.x, k1.position.x, k2.position.x, k3.position.x),
      // A câmera nunca mergulha no gramado, mesmo numa curva apertada.
      y: Math.max(0.9, curve(k0.position.y, k1.position.y, k2.position.y, k3.position.y)),
      z: curve(k0.position.z, k1.position.z, k2.position.z, k3.position.z)
    },
    target: {
      x: curve(k0.target.x, k1.target.x, k2.target.x, k3.target.x),
      y: curve(k0.target.y, k1.target.y, k2.target.y, k3.target.y),
      z: curve(k0.target.z, k1.target.z, k2.target.z, k3.target.z)
    },
    fov: k1.fov + (k2.fov - k1.fov) * smoothstep(s)
  };
}

function cloneKey(key) {
  return { t: key.t, position: { ...key.position }, target: { ...key.target }, fov: key.fov };
}

/**
 * Catmull-Rom com tangentes centrais (não uniformes) e amortecimento: a câmera
 * acelera e freia sem estourar o enquadramento em curvas com nós próximos.
 */
function catmullRom(p0, p1, p2, p3, before, span, after, s) {
  const s2 = s * s;
  const s3 = s2 * s;
  const h00 = 2 * s3 - 3 * s2 + 1;
  const h10 = s3 - 2 * s2 + s;
  const h01 = -2 * s3 + 3 * s2;
  const h11 = s3 - s2;
  const damp = 0.45;
  const m1 = damp * span * ((p2 - p0) / Math.max(0.0001, before + span));
  const m2 = damp * span * ((p3 - p1) / Math.max(0.0001, span + after));
  const value = h00 * p1 + h10 * m1 + h01 * p2 + h11 * m2;
  // Sem ultrapassar o corredor entre os dois nós (evita a câmera "voar").
  const low = Math.min(p1, p2);
  const high = Math.max(p1, p2);
  const margin = Math.abs(high - low) * 0.05 + 0.02;
  return Math.max(low - margin, Math.min(high + margin, value));
}

// ------------------------------------------------------ câmera da cerimônia --

const D = PREMATCH_BEATS.map(beat => beat.duration);
const T = PREMATCH_STARTS;

/**
 * Chaves da câmera escritas em FRAÇÃO de cada cena (`beat` + `at` 0..1). Assim a
 * coreografia continua válida se a duração de uma cena mudar — e a ordem das
 * cenas (a única coisa que não pode mudar) fica explícita aqui também.
 */
const CAMERA_CHOREOGRAPHY = [
  // 1. túnel — da boca do túnel para dentro: os dois elencos de frente, um de
  // cada lado, os árbitros na frente deles.
  { beat: 0, at: 0.0, position: { x: 0.0, y: 2.3, z: -45.55 }, target: { x: -0.1, y: 1.4, z: -50.5 }, fov: 62 },
  { beat: 0, at: 0.26, position: { x: 0.2, y: 2.05, z: -46.05 }, target: { x: -0.2, y: 1.42, z: -50.7 }, fov: 54 },
  // 1b. close no rosto do time da casa: a lente fica na BOCA do túnel, à frente
  // da última fila (z −47,6), olhando corredor adentro pela coluna da esquerda.
  // Antes a câmera entrava entre as fileiras e atravessava cabeças.
  { beat: 0, at: 0.52, position: { x: -1.35, y: 1.78, z: -46.35 }, target: { x: -1.35, y: 1.59, z: -49.4 }, fov: 30 },
  { beat: 0, at: 0.68, position: { x: -1.30, y: 1.74, z: -46.55 }, target: { x: -1.30, y: 1.58, z: -49.5 }, fov: 28 },
  // 1c. central elevada, acima das cabeças: dá o túnel inteiro e faz a travessia
  // de um lado para o outro sem cortar ninguém.
  { beat: 0, at: 0.80, position: { x: 0.0, y: 2.32, z: -46.0 }, target: { x: 0.0, y: 1.5, z: -49.8 }, fov: 46 },
  // 1d. contra-plano do visitante, do outro lado do corredor.
  { beat: 0, at: 0.95, position: { x: 1.35, y: 1.78, z: -46.35 }, target: { x: 1.35, y: 1.59, z: -49.4 }, fov: 30 },

  // 2. entrada — a câmera espera fora da boca do túnel, de frente para dentro,
  // enquanto os árbitros abrem a fila e vêm na direção da lente.
  { beat: 1, at: 0.05, position: { x: 0.0, y: 2.35, z: -42.2 }, target: { x: 0, y: 1.5, z: -47.4 }, fov: 48 },
  { beat: 1, at: 0.24, position: { x: -3.1, y: 2.25, z: -41.0 }, target: { x: -0.2, y: 1.5, z: -45.6 }, fov: 50 },
  // 2b. sai do túnel para o gramado: recua na frente do grupo, de frente para
  // os rostos, com a arquibancada ao fundo.
  { beat: 1, at: 0.50, position: { x: -6.2, y: 2.6, z: -31.6 }, target: { x: -0.4, y: 1.5, z: -36.4 }, fov: 50 },
  // 2c. plano aberto da arena (mesmo lado, sem cruzar por cima do campo) com os
  // times caminhando para a linha de apresentação.
  { beat: 1, at: 0.76, position: { x: -15.5, y: 7.6, z: -24.0 }, target: { x: -0.6, y: 1.3, z: -31.0 }, fov: 52 },
  { beat: 1, at: 0.99, position: { x: -3.4, y: 3.1, z: -20.2 }, target: { x: 0.4, y: 1.5, z: -26.6 }, fov: 48 },

  // 3. hino — plano geral de frente para as duas linhas, com os árbitros no meio.
  { beat: 2, at: 0.35, position: { x: 0.0, y: 2.5, z: -18.2 }, target: { x: 0, y: 1.55, z: -26.7 }, fov: 44 },
  // 3b. closes nos rostos cantando, um de cada lado.
  { beat: 2, at: 0.60, position: { x: -5.3, y: 1.72, z: -23.0 }, target: { x: -6.2, y: 1.62, z: -26.7 }, fov: 30 },
  { beat: 2, at: 0.84, position: { x: 5.55, y: 1.72, z: -22.75 }, target: { x: 6.2, y: 1.62, z: -26.7 }, fov: 30 },

  // 4. apito — a câmera sobe de ré atrás do grupo que caminha para as posições
  // do jogo e entrega o enquadramento de transmissão.
  { beat: 3, at: 0.12, position: { x: 2.0, y: 4.3, z: -17.2 }, target: { x: 0.0, y: 1.35, z: -24.0 }, fov: 46 },
  { beat: 3, at: 0.48, position: { x: 1.5, y: 9.6, z: -6.5 }, target: { x: 0.0, y: 0.9, z: -11.5 }, fov: 47 },
  // Última chave = câmera oficial da partida (bola no círculo central). Terminar
  // exatamente nela é o que faz o corte para o jogo não existir.
  { beat: 3, at: 1.0, position: { x: 0.0, y: 21.5, z: 30.0 }, target: { x: 0.0, y: 0.0, z: 0.0 }, fov: 48 }
];

/** Converte a coreografia (fração por cena) em chaves de tempo absoluto. */
function ceremonyKeys() {
  return CAMERA_CHOREOGRAPHY.map(key => ({
    t: T[key.beat] + D[key.beat] * key.at,
    position: { ...key.position },
    target: { ...key.target },
    fov: key.fov
  }));
}

let CAMERA_KEYS = null;

/**
 * Pose da câmera da cerimônia no tempo `time` (s). A última chave é a câmera de
 * transmissão (`broadcast`), então o fim da cerimônia já entrega o enquadramento
 * oficial — sem corte e sem "reset" quando o controle é liberado.
 */
export function prematchCameraPose(time, context = {}) {
  if (!CAMERA_KEYS) CAMERA_KEYS = ceremonyKeys();
  const keys = CAMERA_KEYS;
  const t = Math.max(0, Math.min(PREMATCH_TOTAL, Number(time) || 0));
  const pose = sampleCamera(keys, t);
  if (!pose) return null;
  // A última chave da curva já É a câmera de transmissão; nenhum cruzamento
  // extra é necessário — e um cruzamento aqui reintroduziria o salto que a
  // curva contínua elimina.
  return pose;
}

/** Onde os olhos dos jogadores devem mirar em cada cena (espaço do campo). */
export function anthemFocusPoint() {
  return { x: 0, y: 1.9, z: PRESENTATION.z + 9 };
}
