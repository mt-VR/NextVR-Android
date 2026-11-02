/**
 * NextVR PC Link — o formato dos bytes que passam entre o celular e o PC.
 *
 * Este arquivo é a única implementação em JavaScript do protocolo, e é ele que o PC Bridge usa de
 * verdade (não é documentação solta). O lado Android (Kotlin) e o driver SteamVR (C++) seguem a
 * MESMA tabela de campos, e `tests/pclink-protocol.test.mjs` compara as três: os offsets daqui, os
 * do `core/state_layout.h` (compilado na hora com g++) e os textos do `PROTOCOL.md`.
 *
 * Três canais, porque cada um tem um requisito diferente:
 *
 *   • controle (TCP 44701) — texto JSON por linha. Pouco volume, precisa de confirmação e de
 *     reconexão; um pedido perdido não pode virar um estado mentiroso.
 *   • rastreamento (UDP 44703) — binário, 648 bytes, 72 Hz. Só o pacote MAIS NOVO importa: se um
 *     se perder, o próximo chega em 14 ms. Ordem não existe (o `seq` diz qual é o novo).
 *   • vídeo (UDP 44702) — binário fatiado em pedaços menores que a MTU, remontados pela `frameId`.
 *
 * Tudo little-endian: os dois lados são ARM64/x86-64, ninguém faz byte-swap e um campo que troca de
 * ordem quando o celular é diferente é um bug que só aparece em um aparelho.
 */

/** Versão do protocolo. Um lado que não reconhece a versão avisa em vez de adivinhar. */
export const PROTOCOL_VERSION = 1;

export const DISCOVERY_PORT = 44700;
export const CONTROL_PORT = 44701;
export const VIDEO_PORT = 44702;
export const TRACKING_PORT = 44703;

export const TRACKING_MAGIC = 'NVRT';
export const VIDEO_MAGIC = 'NVRV';
export const DISCOVERY_MAGIC = 'NVRD';

/** Joints do MediaPipe por mão: os 21 pontos que o rastreador do NextVR já produz. */
export const JOINT_COUNT = 21;
export const HAND_COUNT = 2;

/** Cabeçalho do pacote de rastreamento, antes das mãos. */
export const TRACKING_HEADER_BYTES = 88;
/** Palma (posição + rotação) de uma mão: 7 floats. */
export const PALM_FLOATS = 7;
/** 21 joints × 3 floats. */
export const JOINT_FLOATS = JOINT_COUNT * 3;
export const HAND_FLOATS = PALM_FLOATS + JOINT_FLOATS;
/** Tamanho total de um pacote de rastreamento, em bytes. */
export const TRACKING_BYTES = TRACKING_HEADER_BYTES + HAND_COUNT * HAND_FLOATS * 4;

/** Cabeçalho de cada pedaço de vídeo. O payload vai depois dele. */
export const VIDEO_HEADER_BYTES = 28;
/** Quanto de H.264/HEVC cabe num datagrama sem fragmentar em IP. */
export const VIDEO_MTU = 1200;

/** Bitflags do cabeçalho de rastreamento. */
export const FLAG_HEAD = 1 << 0;
export const FLAG_LEFT_PRESENT = 1 << 1;
export const FLAG_RIGHT_PRESENT = 1 << 2;
export const FLAG_LEFT_PREDICTED = 1 << 3;
export const FLAG_RIGHT_PREDICTED = 1 << 4;
export const FLAG_LEFT_CONFIDENT = 1 << 5;
export const FLAG_RIGHT_CONFIDENT = 1 << 6;

/** Codecs. O número é o que viaja no fio — renomear o codec não muda o protocolo. */
export const CODEC = Object.freeze({ h264: 1, hevc: 2 });
export const CODEC_NAME = Object.freeze({ 1: 'h264', 2: 'hevc' });

/** Bitflags do cabeçalho de vídeo. */
export const VIDEO_FLAG_KEYFRAME = 1 << 0;
export const VIDEO_FLAG_STEREO = 1 << 1;

/** Qualidade do vídeo, como o usuário escolhe no menu do NextVR. */
export const QUALITY_PRESETS = Object.freeze({
  low: { bitrateMbps: 20, fps: 60, width: 1440, height: 1600 },
  medium: { bitrateMbps: 40, fps: 72, width: 1832, height: 1920 },
  high: { bitrateMbps: 80, fps: 90, width: 2290, height: 2400 },
});

/**
 * O estado de um hand tracking que o Android relata. `ok` só quando as duas mãos aparecem; `one`
 * quando só uma; `idle` sem câmera; `off` desligado. Os jogos recebem isto como aviso quando a mão
 * não está sendo vista — nunca um esqueleto inventado.
 */
export const HAND_STATE = Object.freeze({ ok: 'ok', one: 'one', idle: 'idle', off: 'off' });

const clamp01 = v => (v < 0 ? 0 : v > 1 ? 1 : v);

/** Quaternion normalizado, ou a identidade se o número não serve. */
export function normalizeQuat([x, y, z, w]) {
  const n = Math.hypot(x, y, z, w);
  if (!(n > 1e-6) || !Number.isFinite(n)) return [0, 0, 0, 1];
  return [x / n, y / n, z / n, w / n];
}

/** Uma mão do jeito que ela vem do rastreador (e do jeito que o Kotlin manda). */
export function emptyHand() {
  return {
    present: false, predicted: false, confidence: 0, pinch: 0, fist: 0,
    palm: [0, 0, 0], rot: [0, 0, 0, 1],
    joints: Array.from({ length: JOINT_COUNT }, () => [0, 0, 0]),
  };
}

/** Estado de rastreamento inteiro, com tudo zerado. */
export function emptyTracking() {
  return {
    seq: 0, captureNs: 0n, flags: 0,
    head: { valid: false, pos: [0, 1.6, 0], rot: [0, 0, 0, 1] },
    ipd: 0.063, userHeight: 1.75, worldScale: 1,
    hands: [emptyHand(), emptyHand()],
  };
}

/**
 * Escreve um pacote de rastreamento. `into` é um Buffer grande o bastante, reusado quadro a quadro:
 * alocar 648 bytes 72 vezes por segundo no caminho do rastreamento é lixo de GC que aparece como
 * tremor na mão.
 */
export function encodeTracking(state, into = Buffer.allocUnsafe(TRACKING_BYTES)) {
  if (into.length < TRACKING_BYTES) throw new RangeError(`tracking buffer too small: ${into.length}`);
  let o = 0;
  into.write(TRACKING_MAGIC, o, 4, 'ascii'); o += 4;
  into.writeUInt16LE(PROTOCOL_VERSION, o); o += 2;

  let flags = 0;
  if (state.head?.valid) flags |= FLAG_HEAD;
  for (let h = 0; h < HAND_COUNT; h++) {
    const hand = state.hands[h];
    if (hand?.present) flags |= h === 0 ? FLAG_LEFT_PRESENT : FLAG_RIGHT_PRESENT;
    if (hand?.predicted) flags |= h === 0 ? FLAG_LEFT_PREDICTED : FLAG_RIGHT_PREDICTED;
    if ((hand?.confidence || 0) >= 0.5) flags |= h === 0 ? FLAG_LEFT_CONFIDENT : FLAG_RIGHT_CONFIDENT;
  }
  into.writeUInt16LE(flags, o); o += 2;
  into.writeUInt32LE(state.seq >>> 0, o); o += 4;
  into.writeBigUInt64LE(BigInt(state.captureNs || 0n), o); o += 8;

  const pos = state.head?.pos || [0, 0, 0];
  const rot = state.head?.rot || [0, 0, 0, 1];
  for (let i = 0; i < 3; i++) { into.writeFloatLE(pos[i] || 0, o); o += 4; }
  const q = normalizeQuat(rot);
  for (let i = 0; i < 4; i++) { into.writeFloatLE(q[i], o); o += 4; }

  into.writeFloatLE(state.ipd || 0.063, o); o += 4;
  into.writeFloatLE(state.userHeight || 1.75, o); o += 4;
  into.writeFloatLE(state.worldScale || 1, o); o += 4;
  into.writeFloatLE(0, o); o += 4;                                   // reservado: futuro campo de áudio

  for (let h = 0; h < HAND_COUNT; h++) {
    into.writeFloatLE(clamp01(state.hands[h]?.confidence || 0), o); o += 4;
  }
  for (let h = 0; h < HAND_COUNT; h++) {
    into.writeFloatLE(state.hands[h]?.pinch ? 1 : 0, o); o += 4;
  }
  for (let h = 0; h < HAND_COUNT; h++) {
    into.writeFloatLE(state.hands[h]?.fist ? 1 : 0, o); o += 4;
  }

  for (let h = 0; h < HAND_COUNT; h++) {
    const hand = state.hands[h] || emptyHand();
    const palm = hand.palm || [0, 0, 0];
    for (let i = 0; i < 3; i++) { into.writeFloatLE(palm[i] || 0, o); o += 4; }
    const hr = normalizeQuat(hand.rot || [0, 0, 0, 1]);
    for (let i = 0; i < 4; i++) { into.writeFloatLE(hr[i], o); o += 4; }
    for (let j = 0; j < JOINT_COUNT; j++) {
      const joint = hand.joints?.[j] || [0, 0, 0];
      for (let i = 0; i < 3; i++) { into.writeFloatLE(joint[i] || 0, o); o += 4; }
    }
  }
  return into.subarray(0, TRACKING_BYTES);
}

/**
 * Lê um pacote de rastreamento. Devolve `null` (e nunca lança) quando o pacote não é nosso: o
 * Chrome e o Android também mandam UDP de outras coisas para a mesma máquina.
 */
export function decodeTracking(buffer) {
  if (!Buffer.isBuffer(buffer)) buffer = Buffer.from(buffer);
  if (buffer.length < TRACKING_BYTES) return null;
  if (buffer.toString('ascii', 0, 4) !== TRACKING_MAGIC) return null;
  const version = buffer.readUInt16LE(4);
  if (version !== PROTOCOL_VERSION) return null;

  let o = 6;
  const flags = buffer.readUInt16LE(o); o += 2;
  const seq = buffer.readUInt32LE(o); o += 4;
  const captureNs = buffer.readBigUInt64LE(o); o += 8;

  const state = emptyTracking();
  state.seq = seq;
  state.captureNs = captureNs;
  state.flags = flags;
  state.head.valid = !!(flags & FLAG_HEAD);
  for (let i = 0; i < 3; i++) { state.head.pos[i] = buffer.readFloatLE(o); o += 4; }
  for (let i = 0; i < 4; i++) { state.head.rot[i] = buffer.readFloatLE(o); o += 4; }

  state.ipd = buffer.readFloatLE(o); o += 4;
  state.userHeight = buffer.readFloatLE(o); o += 4;
  state.worldScale = buffer.readFloatLE(o); o += 4;
  o += 4;                                                            // reservado

  for (let h = 0; h < HAND_COUNT; h++) { state.hands[h].confidence = buffer.readFloatLE(o); o += 4; }
  for (let h = 0; h < HAND_COUNT; h++) { state.hands[h].pinch = buffer.readFloatLE(o) >= 0.5 ? 1 : 0; o += 4; }
  for (let h = 0; h < HAND_COUNT; h++) { state.hands[h].fist = buffer.readFloatLE(o) >= 0.5 ? 1 : 0; o += 4; }

  for (let h = 0; h < HAND_COUNT; h++) {
    const hand = state.hands[h];
    hand.present = !!(flags & (h === 0 ? FLAG_LEFT_PRESENT : FLAG_RIGHT_PRESENT));
    hand.predicted = !!(flags & (h === 0 ? FLAG_LEFT_PREDICTED : FLAG_RIGHT_PREDICTED));
    for (let i = 0; i < 3; i++) { hand.palm[i] = buffer.readFloatLE(o); o += 4; }
    for (let i = 0; i < 4; i++) { hand.rot[i] = buffer.readFloatLE(o); o += 4; }
    for (let j = 0; j < JOINT_COUNT; j++) {
      for (let i = 0; i < 3; i++) { hand.joints[j][i] = buffer.readFloatLE(o); o += 4; }
    }
  }
  return state;
}

/** Cabeçalho de um pedaço de vídeo. */
export function encodeVideoHeader(frame, index, count, payloadBytes, into = Buffer.allocUnsafe(VIDEO_HEADER_BYTES)) {
  into.write(VIDEO_MAGIC, 0, 4, 'ascii');
  into.writeUInt16LE(PROTOCOL_VERSION, 4);
  into.writeUInt8(CODEC[frame.codec] || CODEC.h264, 6);
  into.writeUInt8((frame.keyframe ? VIDEO_FLAG_KEYFRAME : 0) | (frame.stereo ? VIDEO_FLAG_STEREO : 0), 7);
  into.writeUInt32LE(frame.frameId >>> 0, 8);
  into.writeBigUInt64LE(BigInt(frame.captureNs || 0n), 12);
  into.writeUInt16LE(index, 20);
  into.writeUInt16LE(count, 22);
  into.writeUInt32LE(payloadBytes, 24);
  return into;
}

export function decodeVideoHeader(buffer) {
  if (!Buffer.isBuffer(buffer)) buffer = Buffer.from(buffer);
  if (buffer.length < VIDEO_HEADER_BYTES) return null;
  if (buffer.toString('ascii', 0, 4) !== VIDEO_MAGIC) return null;
  if (buffer.readUInt16LE(4) !== PROTOCOL_VERSION) return null;
  const codec = buffer.readUInt8(6);
  const flags = buffer.readUInt8(7);
  return {
    codec: CODEC_NAME[codec] || null,
    keyframe: !!(flags & VIDEO_FLAG_KEYFRAME),
    stereo: !!(flags & VIDEO_FLAG_STEREO),
    frameId: buffer.readUInt32LE(8),
    captureNs: buffer.readBigUInt64LE(12),
    index: buffer.readUInt16LE(20),
    count: buffer.readUInt16LE(22),
    payloadBytes: buffer.readUInt32LE(24),
  };
}

/**
 * Fatia um quadro comprimido em pacotes de vídeo. Devolve uma lista de Buffers prontos para o
 * `send()` — juntos, não um por um, para quem chama poder reusar o mesmo buffer.
 */
export function fragmentFrame(frame, payload, mtu = VIDEO_MTU) {
  const chunk = Math.max(64, mtu - VIDEO_HEADER_BYTES);
  const count = Math.max(1, Math.ceil(payload.length / chunk));
  if (count > 0xffff) throw new RangeError('frame too large for one id');
  const packets = [];
  const header = Buffer.allocUnsafe(VIDEO_HEADER_BYTES);
  for (let i = 0; i < count; i++) {
    const start = i * chunk;
    const slice = payload.subarray(start, Math.min(payload.length, start + chunk));
    encodeVideoHeader(frame, i, count, slice.length, header);
    packets.push(Buffer.concat([header, slice], VIDEO_HEADER_BYTES + slice.length));
  }
  return packets;
}

/**
 * Remonta os pedaços de um quadro. Guarda no máximo dois quadros em andamento: um quadro cujo
 * pedaço se perdeu é jogado fora quando chega o próximo id, porque um quadro velho remontado é
 * latência pura.
 */
export class VideoAssembler {
  constructor() {
    this.frames = new Map();
    this.completed = 0;
    this.dropped = 0;
    this.maxPendingFrames = 2;
  }

  push(packet) {
    const header = decodeVideoHeader(packet);
    if (!header) return null;
    const payload = packet.subarray(VIDEO_HEADER_BYTES, VIDEO_HEADER_BYTES + header.payloadBytes);
    let slot = this.frames.get(header.frameId);
    if (!slot) {
      slot = { header, parts: new Array(header.count), received: 0, count: header.count };
      this.frames.set(header.frameId, slot);
      if (this.frames.size > this.maxPendingFrames) {
        let oldest = null;
        for (const [id, candidate] of this.frames) {
          if (oldest === null || id < oldest) oldest = id;
        }
        this.frames.delete(oldest);
        this.dropped++;
      }
      // Um quadro mais novo chegou ANTES de o anterior terminar: o anterior perdeu pedaço, e insistir
      // nele é só memória gasta (quem recebe mostra o próximo quadro inteiro).
      for (const id of [...this.frames.keys()]) {
        if (id === header.frameId) continue;
        if (((header.frameId - id) >>> 0) < 0x7fffffff) {
          this.frames.delete(id);
          this.dropped++;
        }
      }
    }
    if (slot.parts[header.index] === undefined) {
      slot.parts[header.index] = payload;
      slot.received++;
    }
    if (slot.received < slot.count) return null;
    this.frames.delete(header.frameId);
    this.completed++;
    return { ...slot.header, payload: Buffer.concat(slot.parts) };
  }
}

/* ============================== descoberta ============================== */

/** Pedido de descoberta: pequeno, fixo, reconhecível. */
export function discoveryRequest() {
  return Buffer.from(`${DISCOVERY_MAGIC}1 ?`, 'ascii');
}

export function isDiscoveryRequest(buffer) {
  if (!Buffer.isBuffer(buffer)) buffer = Buffer.from(buffer);
  return buffer.length >= 6 && buffer.toString('ascii', 0, 5) === `${DISCOVERY_MAGIC}1`;
}

/**
 * Resposta da descoberta. É JSON de propósito: cabe numa linha, é legível no log de quem está
 * depurando — e são ~8 pacotes por segundo, não um fluxo de dados.
 */
export function discoveryReply(info) {
  return Buffer.from(JSON.stringify({
    t: 'pclink', v: PROTOCOL_VERSION, name: info.name || 'NextVR PC Bridge',
    controlPort: info.controlPort ?? CONTROL_PORT,
    videoPort: info.videoPort ?? VIDEO_PORT,
    trackingPort: info.trackingPort ?? TRACKING_PORT,
    steamvr: info.steamvr ?? 'unknown',
    driver: info.driver ?? null,
    openxr: info.openxr ?? null,
    // `null` significa "não verificado" e precisa chegar como null ao celular: virar `false` seria
    // afirmar que o runtime não tem a extensão sem ter perguntado.
    openxrHandTracking: info.openxrHandTracking === undefined ? null : info.openxrHandTracking,
    handTracking: info.handTracking ?? 'skeletal',
    warnings: info.warnings || [],
  }), 'utf8');
}

export function parseDiscoveryReply(buffer) {
  try {
    const value = JSON.parse((Buffer.isBuffer(buffer) ? buffer : Buffer.from(buffer)).toString('utf8'));
    if (!value || value.t !== 'pclink' || value.v !== PROTOCOL_VERSION) return null;
    return value;
  } catch { return null; }
}

/* ============================== controle ============================== */

/**
 * Uma mensagem de controle por linha JSON. `JSON.stringify` nunca gera uma quebra de linha dentro de
 * uma string, então o `\n` é um separador seguro — e um leitor de texto (nc, telnet, script) serve
 * para depurar uma sessão.
 */
export function encodeControl(message) {
  return Buffer.from(`${JSON.stringify(message)}\n`, 'utf8');
}

/** Junta um pedaço recebido e devolve as mensagens completas (o resto fica no acumulador). */
export class ControlReader {
  constructor(limit = 64 * 1024) { this.pending = ''; this.limit = limit; }

  push(chunk) {
    this.pending += chunk.toString('utf8');
    if (this.pending.length > this.limit) { this.pending = ''; return []; }
    const out = [];
    let index;
    while ((index = this.pending.indexOf('\n')) >= 0) {
      const line = this.pending.slice(0, index).trim();
      this.pending = this.pending.slice(index + 1);
      if (!line) continue;
      try {
        const value = JSON.parse(line);
        if (value && typeof value === 'object') out.push(value);
      } catch { /* linha inválida não derruba a sessão: o próximo pacote pode estar bom. */ }
    }
    return out;
  }
}

/** Qualidade pedida pelo usuário → os números que o vídeo usa. */
export function qualityFor(id, override = {}) {
  const preset = QUALITY_PRESETS[id] || QUALITY_PRESETS.medium;
  return { ...preset, ...override };
}
