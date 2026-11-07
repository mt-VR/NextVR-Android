/**
 * Recebe o rastreamento do celular (UDP 44703) e publica para o driver.
 *
 * O que chega é o mais novo possível, 72 vezes por segundo. Regras que existem para não mentir:
 *
 *   • pacote com `seq` menor ou igual ao último é descartado (UDP reordena; usar um pacote velho
 *     faz a mão voltar no tempo);
 *   • `sequence` que para de subir por 400 ms significa celular fora da rede — o estado publicado
 *     deixa de marcar pose válida, em vez de repetir a última como se fosse atual;
 *   • a taxa (Hz) e a idade do último pacote são medidas aqui, não estimadas na interface.
 */
import { createSocket } from 'node:dgram';
import { HAND_STATE, TRACKING_BYTES, decodeTracking } from '../../pclink/wire.mjs';

export class TrackingReceiver {
  constructor({ port, onFrame, onProblem = () => {}, host = '0.0.0.0' } = {}) {
    this.port = port;
    this.host = host;
    this.onFrame = onFrame;
    this.onProblem = onProblem;
    this.socket = null;
    this.lastSequence = -1;
    this.received = 0;
    this.dropped = 0;
    this.invalid = 0;
    this.lastPacketAt = 0;
    this.lastSeqAt = 0;
    this.rate = 0;
    this.frames = [];
    this.lastFrame = null;
    this.startedAt = 0;
  }

  async start() {
    this.socket = createSocket({ type: 'udp4', reuseAddr: true });
    this.socket.on('error', error => this.onProblem('tracking-socket', error.message));
    this.socket.on('message', (message, rinfo) => this.handle(message, rinfo));
    await new Promise((resolve, reject) => {
      const fail = error => reject(error);
      this.socket.once('error', fail);
      this.socket.bind(this.port, this.host, () => {
        this.socket.off('error', fail);
        this.port = this.socket.address().port;
        this.startedAt = Date.now();
        resolve();
      });
    });
    return this;
  }

  handle(message) {
    if (message.length !== TRACKING_BYTES) {
      // Um pacote de tamanho errado não é nosso (ou é de uma versão incompatível): conta e ignora.
      this.invalid++;
      return;
    }
    const state = decodeTracking(message);
    if (!state) {
      this.invalid++;
      return;
    }
    const sequence = state.seq >>> 0;
    if (this.lastSequence >= 0) {
      const delta = (sequence - this.lastSequence) >>> 0;
      if (delta === 0 || delta > 0x7fffffff) {
        this.dropped++;
        return;
      }
      // Quantos furos entre o último e este: dá a perda real, sem contar reordenação.
      if (delta > 1 && delta < 1000) this.dropped += delta - 1;
    }
    this.lastSequence = sequence;
    this.lastPacketAt = Date.now();
    this.lastFrame = state;
    this.received++;
    this.onFrame(state);
  }

  /** Taxa medida em uma janela de 1 s (a interface mostra isto, não uma promessa de 72 Hz). */
  tick() {
    const now = Date.now();
    this.frames.push(now);
    while (this.frames.length && now - this.frames[0] > 1000) this.frames.shift();
    this.rate = this.frames.length;
    if (this.lastPacketAt && now - this.lastPacketAt > 400) {
      // Sinal para quem publica o estado: sem pacote recente, pose inválida.
      this.stale = true;
    } else {
      this.stale = false;
    }
    return this.rate;
  }

  /** `ok` (duas mãos), `one` (uma) ou `idle` (nenhuma agora). */
  handState() {
    // A idade é calculada aqui, não herdada do `tick()`: um pacote que acabou de chegar não pode
    // aparecer como "sem mão" só porque a janela de estatística ainda não fechou.
    const fresh = this.lastPacketAt > 0 && Date.now() - this.lastPacketAt <= 400;
    if (!this.lastFrame || !fresh) return HAND_STATE.idle;
    const left = this.lastFrame.hands[0];
    const right = this.lastFrame.hands[1];
    const leftOk = left.present && left.confidence >= 0.25;
    const rightOk = right.present && right.confidence >= 0.25;
    if (leftOk && rightOk) return HAND_STATE.ok;
    if (leftOk || rightOk) return HAND_STATE.one;
    return HAND_STATE.idle;
  }

  stats() {
    const now = Date.now();
    return {
      port: this.port,
      received: this.received,
      invalid: this.invalid,
      dropped: this.dropped,
      rateHz: this.rate,
      ageMs: this.lastPacketAt ? now - this.lastPacketAt : null,
      hands: this.handState(),
      stale: !this.lastPacketAt || now - this.lastPacketAt > 400,
    };
  }

  close() {
    if (!this.socket) return;
    try { this.socket.close(); } catch { /* já fechado */ }
    this.socket = null;
  }
}
