/**
 * Recebe os quadros comprimidos do driver (TCP 127.0.0.1:44790) e os entrega ao celular (UDP).
 *
 * O driver entrega H.264 em Annex-B com um cabeçalho de 24 bytes:
 *
 *   u32 magic 'NVFR' · u32 frameId · u32 bytes · u32 flags · u64 captureNs
 *
 * Aqui cada quadro é fatiado em pacotes de vídeo (cabeçalho de 28 bytes + até 1172 de payload) e
 * enviado por UDP para o endereço que o celular abriu no canal de controle. Estatística de verdade:
 * quadros entregues, bytes, taxa, e quantos quadros foram descartados por não haver sessão.
 */
import { createServer } from 'node:net';
import { createSocket } from 'node:dgram';
import { CODEC, fragmentFrame } from '../../pclink/wire.mjs';

export const FRAME_MAGIC = 0x5246564e;   // 'NVFR'
export const FRAME_HEADER_BYTES = 24;
const MAX_FRAME_BYTES = 8 * 1024 * 1024;

export class FrameRelay {
  constructor({ port, onProblem = () => {} } = {}) {
    this.port = port;
    this.onProblem = onProblem;
    this.server = null;
    this.udp = null;
    this.client = null;
    this.target = null;        // { address, port }
    this.codec = 'h264';
    this.bytes = 0;
    this.fragments = 0;
    this.frames = 0;
    this.dropped = 0;
    this.undelivered = 0;
    this.framesInWindow = [];
    this.bytesInWindow = [];
    this.lastFrameAt = 0;
    this.lastFrameId = -1;
    this.outOfOrder = 0;
    this.width = 0;
    this.height = 0;
    this.socketBuffer = Buffer.alloc(0);
  }

  async start() {
    this.udp = createSocket({ type: 'udp4' });
    this.udp.on('error', error => this.onProblem('video-socket', error.message));

    this.server = createServer(socket => this.attachDriver(socket));
    this.server.on('error', error => this.onProblem('video-server', error.message));
    await new Promise((resolve, reject) => {
      const fail = error => reject(error);
      this.server.once('error', fail);
      this.server.listen(this.port, '127.0.0.1', () => {
        this.server.off('error', fail);
        this.port = this.server.address().port;
        resolve();
      });
    });
    return this;
  }

  /** Onde o vídeo deve ir agora (chamado pelo controle, quando o celular entra/sai). */
  setTarget(target) {
    this.target = target;
  }

  setVideoConfig({ codec = 'h264', width = 0, height = 0 } = {}) {
    if (CODEC[codec]) this.codec = codec;
    this.width = width;
    this.height = height;
  }

  attachDriver(socket) {
    // Um driver por vez: se um novo conectar (o usuário reiniciou o SteamVR), o antigo sai.
    if (this.client && this.client !== socket) {
      try { this.client.destroy(); } catch { /* já caiu */ }
    }
    this.client = socket;
    this.socketBuffer = Buffer.alloc(0);
    socket.setNoDelay(true);
    socket.on('data', chunk => this.onData(chunk));
    socket.on('error', () => { /* a queda é tratada no close */ });
    socket.on('close', () => { if (this.client === socket) this.client = null; });
  }

  onData(chunk) {
    this.socketBuffer = this.socketBuffer.length ? Buffer.concat([this.socketBuffer, chunk]) : chunk;
    for (;;) {
      if (this.socketBuffer.length < FRAME_HEADER_BYTES) return;
      const magic = this.socketBuffer.readUInt32LE(0);
      if (magic !== FRAME_MAGIC) {
        // Fluxo desalinhado: joga fora o que veio e espera o próximo cabeçalho. Melhor perder um
        // quadro do que interpretar bytes de imagem como se fossem cabeçalho.
        this.socketBuffer = Buffer.alloc(0);
        this.onProblem('video-stream', 'cabeçalho de quadro desconhecido; fluxo reiniciado');
        return;
      }
      const frameId = this.socketBuffer.readUInt32LE(4);
      const bytes = this.socketBuffer.readUInt32LE(8);
      const flags = this.socketBuffer.readUInt32LE(12);
      const captureNs = this.socketBuffer.readBigUInt64LE(16);
      if (bytes > MAX_FRAME_BYTES) {
        this.socketBuffer = Buffer.alloc(0);
        this.onProblem('video-stream', `quadro grande demais (${bytes} bytes); fluxo reiniciado`);
        return;
      }
      if (this.socketBuffer.length < FRAME_HEADER_BYTES + bytes) return;
      const payload = this.socketBuffer.subarray(FRAME_HEADER_BYTES, FRAME_HEADER_BYTES + bytes);
      this.socketBuffer = this.socketBuffer.subarray(FRAME_HEADER_BYTES + bytes);
      this.deliver({ frameId, flags, captureNs, payload });
    }
  }

  deliver(frame) {
    this.frames++;
    this.lastFrameAt = Date.now();
    if (frame.frameId <= this.lastFrameId && this.lastFrameId - frame.frameId < 1000) this.outOfOrder++;
    this.lastFrameId = frame.frameId;

    const now = Date.now();
    this.framesInWindow.push(now);
    this.bytesInWindow.push([now, frame.payload.length]);
    while (this.framesInWindow.length && now - this.framesInWindow[0] > 1000) this.framesInWindow.shift();
    while (this.bytesInWindow.length && now - this.bytesInWindow[0][0] > 1000) this.bytesInWindow.shift();

    if (!this.target) {
      // Nenhum celular em sessão: o quadro é descartado de propósito (não há para onde mandar).
      this.undelivered++;
      return;
    }
    const chunks = fragmentFrame({
      frameId: frame.frameId, codec: this.codec, keyframe: (frame.flags & 1) !== 0,
      stereo: (frame.flags & 2) !== 0, captureNs: frame.captureNs,
    }, frame.payload);
    for (const packet of chunks) {
      try {
        this.udp.send(packet, this.target.port, this.target.address);
        this.fragments++;
      } catch {
        this.dropped++;
        break;
      }
    }
    this.bytes += frame.payload.length;
  }

  stats() {
    const now = Date.now();
    const bytesPerSecond = this.bytesInWindow.reduce((sum, [, size]) => sum + size, 0);
    return {
      driverConnected: !!this.client,
      frames: this.frames,
      fps: this.framesInWindow.length,
      mbps: +(bytesPerSecond * 8 / 1e6).toFixed(1),
      fragments: this.fragments,
      outOfOrder: this.outOfOrder,
      undelivered: this.undelivered,
      dropped: this.dropped,
      ageMs: this.lastFrameAt ? now - this.lastFrameAt : null,
      codec: this.codec,
      width: this.width,
      height: this.height,
    };
  }

  close() {
    if (this.client) { try { this.client.destroy(); } catch { /* já caiu */ } this.client = null; }
    if (this.server) { try { this.server.close(); } catch { /* já fechado */ } this.server = null; }
    if (this.udp) { try { this.udp.close(); } catch { /* já fechado */ } this.udp = null; }
  }
}
