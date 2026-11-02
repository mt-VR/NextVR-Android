/**
 * O bloco de estado que o PC Bridge e o driver SteamVR compartilham (744 bytes).
 *
 * Duas coisas usam isto: o Bridge escreve (72 Hz, quando chega um pacote de rastreamento) e o
 * `RunFrame` do driver lê (90 Hz, no processo do SteamVR). Memória compartilhada, não socket, porque
 * ler um bloco mapeado nunca bloqueia: um driver que trava esperando o Bridge congela o SteamVR
 * inteiro, e o usuário não tem como saber por quê.
 *
 * Os offsets aqui são a metade JavaScript de um contrato que o C++ também implementa. O teste
 * `tests/pclink-protocol.test.mjs` compila `steamvr-driver/core/state_layout.h` e compara offset por
 * offset — mudar um lado sozinho quebra o build.
 */

export const STATE_MAGIC = 0x5453564e;      // 'NVST' little-endian
export const STATE_VERSION = 1;
export const STATE_BYTES = 744;

export const STATE_NAME_WINDOWS = 'Local\\NextVRPcLinkState';
export const STATE_NAME_POSIX = '/nextvr-pclink-state';

export const STATE_FLAG_HEAD = 1 << 0;
export const STATE_FLAG_LEFT = 1 << 1;
export const STATE_FLAG_RIGHT = 1 << 2;
export const STATE_FLAG_SESSION = 1 << 3;

export const STATE_OFFSETS = Object.freeze({
  magic: 0, version: 4, sequence: 8, flags: 12, captureNs: 16,
  headPos: 24, headQuat: 36, ipd: 52, userHeight: 56, worldScale: 60,
  displayFreq: 64, projection: 68, width: 84, height: 88, play: 92,
  hand0: 156, hand1: 448, reserved: 740,
});

/** Dentro de cada mão (292 bytes). */
export const HAND_STATE_OFFSETS = Object.freeze({
  pos: 0, quat: 12, confidence: 28, pinch: 32, fist: 36, joints: 40,
});

export const HAND_STATE_BYTES = 292;

/**
 * Escreve o estado no bloco. `into` é reaproveitado: este caminho roda a 72 Hz e não pode alocar.
 */
export function encodeState(state, into = Buffer.alloc(STATE_BYTES)) {
  if (into.length < STATE_BYTES) throw new RangeError(`state buffer too small: ${into.length}`);
  into.writeUInt32LE(STATE_MAGIC, STATE_OFFSETS.magic);
  into.writeUInt32LE(STATE_VERSION, STATE_OFFSETS.version);
  into.writeUInt32LE((state.sequence || 0) >>> 0, STATE_OFFSETS.sequence);

  let flags = 0;
  if (state.head?.valid) flags |= STATE_FLAG_HEAD;
  if (state.hands?.[0]?.present) flags |= STATE_FLAG_LEFT;
  if (state.hands?.[1]?.present) flags |= STATE_FLAG_RIGHT;
  if (state.session) flags |= STATE_FLAG_SESSION;
  into.writeUInt32LE(flags, STATE_OFFSETS.flags);
  into.writeBigUInt64LE(BigInt(state.captureNs || 0n), STATE_OFFSETS.captureNs);

  const pos = state.head?.pos || [0, 0, 0];
  const rot = state.head?.rot || [0, 0, 0, 1];
  for (let i = 0; i < 3; i++) into.writeFloatLE(pos[i] || 0, STATE_OFFSETS.headPos + i * 4);
  for (let i = 0; i < 4; i++) into.writeFloatLE(rot[i] || 0, STATE_OFFSETS.headQuat + i * 4);

  into.writeFloatLE(state.ipd || 0.063, STATE_OFFSETS.ipd);
  into.writeFloatLE(state.userHeight || 1.75, STATE_OFFSETS.userHeight);
  into.writeFloatLE(state.worldScale || 1, STATE_OFFSETS.worldScale);
  into.writeFloatLE(state.displayFreq || 72, STATE_OFFSETS.displayFreq);
  const projection = state.projection || [-1.2, 1.2, -1.1, 1.1];
  for (let i = 0; i < 4; i++) into.writeFloatLE(projection[i] || 0, STATE_OFFSETS.projection + i * 4);
  into.writeUInt32LE((state.width || 1832) >>> 0, STATE_OFFSETS.width);
  into.writeUInt32LE((state.height || 1920) >>> 0, STATE_OFFSETS.height);

  for (let h = 0; h < 2; h++) {
    const base = h === 0 ? STATE_OFFSETS.hand0 : STATE_OFFSETS.hand1;
    const hand = state.hands?.[h] || {};
    const palm = hand.palm || [0, 0, 0];
    for (let i = 0; i < 3; i++) into.writeFloatLE(palm[i] || 0, base + HAND_STATE_OFFSETS.pos + i * 4);
    const quat = hand.rot || [0, 0, 0, 1];
    for (let i = 0; i < 4; i++) into.writeFloatLE(quat[i] || 0, base + HAND_STATE_OFFSETS.quat + i * 4);
    into.writeFloatLE(hand.confidence || 0, base + HAND_STATE_OFFSETS.confidence);
    into.writeFloatLE(hand.pinch ? 1 : 0, base + HAND_STATE_OFFSETS.pinch);
    into.writeFloatLE(hand.fist ? 1 : 0, base + HAND_STATE_OFFSETS.fist);
    for (let j = 0; j < 21; j++) {
      const joint = hand.joints?.[j] || [0, 0, 0];
      for (let i = 0; i < 3; i++) {
        into.writeFloatLE(joint[i] || 0, base + HAND_STATE_OFFSETS.joints + (j * 3 + i) * 4);
      }
    }
  }
  return into;
}

/** Lê o bloco. Devolve `null` para um bloco que nunca foi escrito (magic errado). */
export function decodeState(buffer) {
  if (!buffer || buffer.length < STATE_BYTES) return null;
  if (buffer.readUInt32LE(STATE_OFFSETS.magic) !== STATE_MAGIC) return null;
  if (buffer.readUInt32LE(STATE_OFFSETS.version) !== STATE_VERSION) return null;
  const flags = buffer.readUInt32LE(STATE_OFFSETS.flags);
  const state = {
    sequence: buffer.readUInt32LE(STATE_OFFSETS.sequence),
    flags,
    session: !!(flags & STATE_FLAG_SESSION),
    captureNs: buffer.readBigUInt64LE(STATE_OFFSETS.captureNs),
    head: {
      valid: !!(flags & STATE_FLAG_HEAD),
      pos: [0, 1, 2].map(i => buffer.readFloatLE(STATE_OFFSETS.headPos + i * 4)),
      rot: [0, 1, 2, 3].map(i => buffer.readFloatLE(STATE_OFFSETS.headQuat + i * 4)),
    },
    ipd: buffer.readFloatLE(STATE_OFFSETS.ipd),
    userHeight: buffer.readFloatLE(STATE_OFFSETS.userHeight),
    worldScale: buffer.readFloatLE(STATE_OFFSETS.worldScale),
    displayFreq: buffer.readFloatLE(STATE_OFFSETS.displayFreq),
    projection: [0, 1, 2, 3].map(i => buffer.readFloatLE(STATE_OFFSETS.projection + i * 4)),
    width: buffer.readUInt32LE(STATE_OFFSETS.width),
    height: buffer.readUInt32LE(STATE_OFFSETS.height),
    hands: [0, 1].map(h => {
      const base = h === 0 ? STATE_OFFSETS.hand0 : STATE_OFFSETS.hand1;
      return {
        present: !!(flags & (h === 0 ? STATE_FLAG_LEFT : STATE_FLAG_RIGHT)),
        palm: [0, 1, 2].map(i => buffer.readFloatLE(base + HAND_STATE_OFFSETS.pos + i * 4)),
        rot: [0, 1, 2, 3].map(i => buffer.readFloatLE(base + HAND_STATE_OFFSETS.quat + i * 4)),
        confidence: buffer.readFloatLE(base + HAND_STATE_OFFSETS.confidence),
        pinch: buffer.readFloatLE(base + HAND_STATE_OFFSETS.pinch) >= 0.5,
        fist: buffer.readFloatLE(base + HAND_STATE_OFFSETS.fist) >= 0.5,
        joints: Array.from({ length: 21 }, (_, j) =>
          [0, 1, 2].map(i => buffer.readFloatLE(base + HAND_STATE_OFFSETS.joints + (j * 3 + i) * 4))),
      };
    }),
  };
  return state;
}
