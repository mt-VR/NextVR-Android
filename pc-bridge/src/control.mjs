/**
 * Canal de controle (TCP 44701): JSON por linha, uma sessão por celular.
 *
 * Aqui ficam as decisões que o celular precisa ver e o usuário precisa poder conferir:
 * quem está conectado, o SteamVR está aberto, o driver está instalado, o runtime OpenXR entrega
 * mãos, quantos FPS/latência a sessão está tendo. Tudo medido — nada é "estimado" para preencher a
 * tela com números bonitos.
 */
import { createServer } from 'node:net';
import { ControlReader, PROTOCOL_VERSION, VIDEO_PORT, encodeControl, qualityFor } from '../../pclink/wire.mjs';

const DEFAULT_VIDEO = qualityFor('medium');

export class ControlServer {
  constructor({ port, compat, tracking, frames, state, onProblem = () => {} } = {}) {
    this.port = port;
    this.compat = compat;
    this.tracking = tracking;
    this.frames = frames;
    this.state = state;
    this.onProblem = onProblem;
    this.server = null;
    this.peer = null;              // { socket, address, device, config }
    this.sessions = 0;
    this.lastPing = null;
    this.rttSamples = [];
    this.video = { ...DEFAULT_VIDEO, codec: 'h264' };
    this.sessionActive = false;
    this.startedAt = Date.now();
    this.lastProblem = null;
    // Para onde o vídeo vai. O padrão é a porta do protocolo; o celular pode pedir outra na sessão
    // (é assim que dois aparelhos convivem, e que os testes não brigam por um número fixo).
    this.videoPort = VIDEO_PORT;
  }

  async start() {
    this.server = createServer(socket => this.attach(socket));
    this.server.on('error', error => this.onProblem('control-server', error.message));
    await new Promise((resolve, reject) => {
      const fail = error => reject(error);
      this.server.once('error', fail);
      this.server.listen(this.port, '0.0.0.0', () => {
        this.server.off('error', fail);
        // Porta 0 nos testes = porta livre escolhida pelo sistema; guardar a real é o que permite
        // subir dois Bridges na mesma máquina sem eles brigarem por um número fixo.
        this.port = this.server.address().port;
        resolve();
      });
    });
    // O estado vai para o celular a 2 Hz: é o suficiente para a interface respirar sem gastar rede.
    this.stateTimer = setInterval(() => this.pushState(), 500);
    return this;
  }

  attach(socket) {
    socket.setNoDelay(true);
    const address = socket.remoteAddress?.replace('::ffff:', '') || 'unknown';

    // Um celular por vez: o mais novo assume. Dois aparelhos mandando tracking é uma sessão que não
    // existe — e o usuário precisa saber que o que vale é o último que conectou.
    if (this.peer && this.peer.socket !== socket) {
      this.send(this.peer.socket, { t: 'bye', reason: 'outro dispositivo conectou' });
      try { this.peer.socket.destroy(); } catch { /* já caiu */ }
    }

    const reader = new ControlReader();
    this.peer = { socket, address, device: null, config: null, connectedAt: Date.now() };
    this.sessions++;
    this.trackingStaleReset();

    socket.on('data', chunk => {
      for (const message of reader.push(chunk)) this.handle(message, socket);
    });
    socket.on('error', error => this.onProblem('control-client', error.message));
    socket.on('close', () => {
      if (this.peer?.socket !== socket) return;
      this.peer = null;
      this.sessionActive = false;
      this.frames.setTarget(null);
      this.pushState();
    });
    this.pushState();
  }

  send(socket, message) {
    if (!socket || socket.destroyed) return;
    try { socket.write(encodeControl(message)); } catch { /* a queda aparece no close */ }
  }

  broadcast(message) {
    if (this.peer) this.send(this.peer.socket, message);
  }

  trackingStaleReset() {
    if (this.tracking) this.tracking.stale = true;
  }

  handle(message, socket) {
    switch (message.t) {
      case 'hello': {
        this.peer.device = String(message.device || 'Android').slice(0, 80);
        this.send(socket, {
          t: 'welcome',
          v: PROTOCOL_VERSION,
          session: `nextvr-${this.sessions}`,
          name: this.compat.name,
          steamvr: this.compat.steamvr,
          driver: this.compat.driver,
          openxr: this.compat.openxr,
          openxrHandTracking: this.compat.openxrHandTracking,
          codecs: ['h264', 'hevc'],
          warnings: this.compat.warnings,
        });
        this.pushState();
        break;
      }
      case 'config': {
        const config = {
          codec: message.codec === 'hevc' ? 'hevc' : 'h264',
          width: clampInt(message.width, 512, 4096, DEFAULT_VIDEO.width),
          height: clampInt(message.height, 512, 4096, DEFAULT_VIDEO.height),
          fps: clampInt(message.fps, 30, 120, DEFAULT_VIDEO.fps),
          bitrateMbps: clampInt(message.bitrateMbps, 5, 200, DEFAULT_VIDEO.bitrateMbps),
          handTracking: message.handTracking !== false,
          audio: false,   // reservado no protocolo, ainda não transmitido (ver docs/PC-LINK.md)
        };
        this.peer && (this.peer.config = config);
        this.video = { ...config };
        this.frames.setVideoConfig(config);
        this.send(socket, { t: 'state', ...this.snapshot() });
        break;
      }
      case 'calibrate': {
        const state = this.state;
        if (typeof message.ipd === 'number' && message.ipd > 0.03 && message.ipd < 0.09) state.ipd = message.ipd;
        if (typeof message.userHeight === 'number' && message.userHeight > 1 && message.userHeight < 2.3) {
          state.userHeight = message.userHeight;
        }
        if (typeof message.worldScale === 'number' && message.worldScale > 0.5 && message.worldScale < 2) {
          state.worldScale = message.worldScale;
        }
        this.send(socket, { t: 'state', ...this.snapshot() });
        break;
      }
      case 'session': {
        const start = message.action === 'start';
        this.sessionActive = start && !!this.peer;
        if (this.sessionActive) {
          this.videoPort = clampInt(message.videoPort, 1024, 65535, this.videoPort);
          this.frames.setTarget({
            address: socket.remoteAddress?.replace('::ffff:', '') || '127.0.0.1',
            port: this.videoPort,
          });
        } else {
          this.frames.setTarget(null);
        }
        this.pushState();
        break;
      }
      case 'ping': {
        this.send(socket, { t: 'pong', id: message.id, ts: message.ts });
        break;
      }
      case 'pong': {
        const sent = Number(message.ts);
        if (Number.isFinite(sent)) {
          this.rttSamples.push(Math.max(0, Date.now() - sent));
          if (this.rttSamples.length > 20) this.rttSamples.shift();
        }
        break;
      }
      default:
        break;
    }
  }

  /** Latência medida: metade da ida e volta (o caminho é simétrico) + atraso na fila do vídeo. */
  latencyMs() {
    const rtt = this.rttSamples.length
      ? this.rttSamples.reduce((sum, value) => sum + value, 0) / this.rttSamples.length
      : null;
    const video = this.frames.stats();
    const videoDelay = video.ageMs === null ? 0 : Math.min(80, video.ageMs);
    if (rtt === null) return null;
    return +(rtt / 2 + videoDelay).toFixed(1);
  }

  snapshot() {
    const video = this.frames.stats();
    const tracking = this.tracking.stats();
    return {
      connection: this.peer ? 'connected' : 'disconnected',
      device: this.peer?.device || null,
      peer: this.peer?.address || null,
      session: this.sessionActive ? 'running' : 'idle',
      steamvr: this.compat.steamvr,
      driver: this.compat.driver,
      openxrHandTracking: this.compat.openxrHandTracking,
      problems: this.compat.warnings.concat(this.lastProblem ? [this.lastProblem] : []),
      fps: video.fps,
      latencyMs: this.latencyMs(),
      bitrateMbps: video.mbps,
      dropped: video.undelivered + video.dropped,
      handTracking: tracking.hands,
      hands: {
        rateHz: tracking.rateHz,
        ageMs: tracking.ageMs,
        dropped: tracking.dropped,
        invalid: tracking.invalid,
        left: this.tracking.lastFrame ? this.tracking.lastFrame.hands[0].confidence : 0,
        right: this.tracking.lastFrame ? this.tracking.lastFrame.hands[1].confidence : 0,
      },
      video: {
        codec: video.codec,
        width: this.video.width,
        height: this.video.height,
        targetFps: this.video.fps,
        bitrateMbps: this.video.bitrateMbps,
        driverConnected: video.driverConnected,
        stereo: true,
      },
      audio: 'unavailable',
      calibration: {
        ipd: this.state.ipd,
        userHeight: this.state.userHeight,
        worldScale: this.state.worldScale,
      },
      uptimeSeconds: Math.round((Date.now() - this.startedAt) / 1000),
    };
  }

  pushState() {
    if (!this.peer) return;
    this.send(this.peer.socket, { t: 'state', ...this.snapshot() });
  }

  close() {
    if (this.stateTimer) clearInterval(this.stateTimer);
    if (this.peer) { try { this.peer.socket.destroy(); } catch { /* já caiu */ } this.peer = null; }
    if (this.server) { try { this.server.close(); } catch { /* já fechado */ } this.server = null; }
  }
}

function clampInt(value, min, max, fallback) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.max(min, Math.min(max, Math.round(number)));
}
