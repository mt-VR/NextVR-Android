/**
 * O NextVR PC Bridge inteiro, montado em um lugar só.
 *
 * Quatro peças que não sabem umas das outras (descoberta, controle, rastreamento, vídeo) e um
 * `Bridge` que as liga sem esconder estado:
 *
 *   celular ──descoberta──▶ Bridge responde o que o PC tem (medido)
 *   celular ──controle───▶ sessão, configuração, calibração, estado 2 Hz
 *   celular ──tracking───▶ Bridge valida, mede a taxa e publica no arquivo que o driver mapeia
 *   driver  ──quadros────▶ Bridge fatia e manda por UDP ao celular
 *
 * `start()` devolve o próprio Bridge (com `stop()` e `snapshot()`), que é o que os testes usam para
 * subir uma sessão de verdade em loopback.
 */
import { hostname } from 'node:os';
import { join } from 'node:path';
import { TrackingReceiver } from './tracking.mjs';
import { DiscoveryResponder } from './discovery.mjs';
import { ControlServer } from './control.mjs';
import { FrameRelay } from './frames.mjs';
import { StateWriter, defaultStatePath } from './state-writer.mjs';
import { collectCompat } from './compat.mjs';

export const DEFAULT_PORTS = Object.freeze({
  discovery: 44700,
  control: 44701,
  video: 44702,
  tracking: 44703,
  frames: 44790,
});

export class Bridge {
  constructor(options = {}) {
    this.options = options;
    this.ports = { ...DEFAULT_PORTS, ...(options.ports || {}) };
    this.name = options.name || hostname();
    this.problems = [];
    this.problemLog = [];
    this.compat = {
      steamvr: 'unknown', driver: null, openxr: null, openxrHandTracking: null, warnings: [],
    };
    this.state = {
      ipd: options.ipd ?? 0.063,
      userHeight: options.userHeight ?? 1.75,
      worldScale: options.worldScale ?? 1,
      projection: options.projection ?? [-1.2, 1.2, -1.1, 1.1],
      width: options.width ?? 1832,
      height: options.height ?? 1920,
      displayFreq: options.displayFreq ?? 72,
    };
    this.stateWriter = new StateWriter(options.statePath || defaultStatePath());
    this.startedAt = 0;
  }

  reportProblem(code, message) {
    // Um problema repetido 72 vezes por segundo não pode virar 72 linhas: guarda o último de cada
    // código e mantém o log curto para a interface.
    const entry = { code, message: String(message).slice(0, 200), at: Date.now() };
    this.problems = this.problems.filter(item => item.code !== code).concat(entry).slice(-8);
    if (this.problemLog.length < 50) this.problemLog.push(entry);
  }

  async start() {
    this.stateWriter.open();

    this.compat = {
      ...(await collectCompat({
        steamvrHome: this.options.steamvrHome,
        probePath: this.options.openxrProbe,
      })),
      name: this.name,
      handTracking: 'skeletal',
    };

    this.tracking = new TrackingReceiver({
      port: this.ports.tracking,
      onProblem: (code, message) => this.reportProblem(code, message),
      onFrame: state => this.publish(state),
    });
    await this.tracking.start();
    // Porta real (0 = o sistema escolhe). Tudo daqui para baixo usa a porta DE VERDADE, não a pedida.
    this.ports.tracking = this.tracking.port;

    this.frames = new FrameRelay({
      port: this.ports.frames,
      onProblem: (code, message) => this.reportProblem(code, message),
    });
    await this.frames.start();
    this.ports.frames = this.frames.port;

    this.control = new ControlServer({
      port: this.ports.control,
      compat: this.compat,
      tracking: this.tracking,
      frames: this.frames,
      state: this.state,
      onProblem: (code, message) => this.reportProblem(code, message),
    });
    await this.control.start();
    this.ports.control = this.control.port;

    if (this.options.discovery !== false) {
      this.discovery = new DiscoveryResponder({
        port: this.ports.discovery,
        info: () => this.discoveryInfo(),
        onProblem: (code, message) => this.reportProblem(code, message),
      });
      await this.discovery.start();
      this.ports.discovery = this.discovery.port;
    }

    // A taxa de rastreamento é medida em janelas de 1 s, não a cada pacote.
    this.rateTimer = setInterval(() => {
      if (this.tracking) this.tracking.tick();
    }, 250);

    this.startedAt = Date.now();
    return this;
  }

  /** Publica o rastreamento no arquivo que o driver lê, com a calibração vigente. */
  publish(packet) {
    const session = !!this.control?.sessionActive;
    this.stateWriter.write({
      sequence: packet.seq,
      session,
      captureNs: packet.captureNs,
      head: packet.head,
      ipd: this.state.ipd,
      userHeight: this.state.userHeight,
      worldScale: this.state.worldScale,
      displayFreq: this.state.displayFreq,
      projection: this.state.projection,
      width: this.state.width,
      height: this.state.height,
      hands: packet.hands,
      // A pose vale quando o pacote traz cabeça E o celular está em sessão.
      ...(session ? {} : { head: { ...packet.head, valid: false } }),
      flags: undefined,
    });
  }

  discoveryInfo() {
    return {
      name: this.name,
      controlPort: this.ports.control,
      videoPort: this.ports.video,
      trackingPort: this.ports.tracking,
      steamvr: this.compat.steamvr,
      driver: this.compat.driver,
      openxr: this.compat.openxr,
      openxrHandTracking: this.compat.openxrHandTracking,
      handTracking: 'skeletal',
      warnings: this.compat.warnings,
    };
  }

  snapshot() {
    return {
      name: this.name,
      ports: this.ports,
      started: !!this.startedAt,
      uptimeSeconds: this.startedAt ? Math.round((Date.now() - this.startedAt) / 1000) : 0,
      compat: this.compat,
      problems: this.problems,
      stateFile: this.stateWriter.path,
      stateWrites: this.stateWriter.writes,
      stateFailures: this.stateWriter.failures,
      control: this.control ? this.control.snapshot() : null,
      tracking: this.tracking ? this.tracking.stats() : null,
      video: this.frames ? this.frames.stats() : null,
    };
  }

  async stop() {
    if (this.rateTimer) clearInterval(this.rateTimer);
    this.discovery?.close();
    this.control?.close();
    this.frames?.close();
    this.tracking?.close();
    this.stateWriter.close();
    this.startedAt = 0;
  }
}

export async function startBridge(options = {}) {
  const bridge = new Bridge(options);
  await bridge.start();
  return bridge;
}
