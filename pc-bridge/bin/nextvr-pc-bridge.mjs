#!/usr/bin/env node
/**
 * NextVR PC Bridge — o programa que o PC roda.
 *
 *   nextvr-pc-bridge                inicia (descoberta, controle, rastreamento, vídeo)
 *   nextvr-pc-bridge --check        só diagnostica o PC e sai (SteamVR, driver, OpenXR)
 *   nextvr-pc-bridge --state        imprime o estado que o driver está lendo
 *   nextvr-pc-bridge --ports        imprime as portas em uso
 *
 * Sem instalação: é Node.js puro (>= 20). Ver `pc-bridge/README.md`.
 */
import { Bridge, DEFAULT_PORTS } from '../src/server.mjs';
import { collectCompat } from '../src/compat.mjs';
import { readFileSync } from 'node:fs';
import { STATE_BYTES, decodeState } from '../../pclink/state.mjs';
import { defaultStatePath } from '../src/state-writer.mjs';

const args = process.argv.slice(2);
const has = flag => args.includes(flag);
const value = (flag, fallback) => {
  const index = args.indexOf(flag);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};

if (has('--help') || has('-h')) {
  process.stdout.write(`NextVR PC Bridge

  --name <nome>            nome que aparece no celular (padrão: nome do computador)
  --control <porta>        controle (padrão ${DEFAULT_PORTS.control})
  --video <porta>          vídeo (padrão ${DEFAULT_PORTS.video})
  --tracking <porta>       rastreamento (padrão ${DEFAULT_PORTS.tracking})
  --discovery <porta>      descoberta (padrão ${DEFAULT_PORTS.discovery})
  --state-file <caminho>   bloco de estado lido pelo driver
  --no-discovery           não responde broadcast (útil em rede compartilhada)
  --check                  diagnostica o PC e sai
  --state                  imprime o estado atual do driver e sai
  --json                   saída em JSON
`);
  process.exit(0);
}

if (has('--check')) {
  const compat = await collectCompat({ probePath: value('--openxr-probe', undefined) });
  if (has('--json')) {
    process.stdout.write(`${JSON.stringify(compat, null, 2)}\n`);
  } else {
    process.stdout.write(`SteamVR: ${compat.steamvr}${compat.steamvrHome ? ` (${compat.steamvrHome})` : ''}\n`);
    process.stdout.write(`Driver NextVR: ${compat.driverInstalled ? 'instalado' : 'não instalado'}\n`);
    process.stdout.write(`OpenXR: ${compat.openxrRuntime || 'runtime não identificado'}\n`);
    process.stdout.write(
      `XR_EXT_hand_tracking: ${compat.openxrHandTracking === null ? 'não verificado'
        : compat.openxrHandTracking ? 'disponível' : 'indisponível neste runtime'}\n`);
    for (const warning of compat.warnings) process.stdout.write(`! ${warning}\n`);
  }
  process.exit(compat.steamvr === 'not-installed' ? 1 : 0);
}

if (has('--state')) {
  const path = value('--state-file', defaultStatePath());
  try {
    const buffer = readFileSync(path);
    const state = decodeState(buffer.subarray(0, Math.min(buffer.length, STATE_BYTES)));
    if (!state) {
      process.stdout.write(`estado não inicializado em ${path}\n`);
      process.exit(1);
    }
    process.stdout.write(`${JSON.stringify({ path, ...state }, null, 2)}\n`);
    process.exit(0);
  } catch (error) {
    process.stdout.write(`sem estado em ${path}: ${error.message}\n`);
    process.exit(1);
  }
}

const bridge = new Bridge({
  name: value('--name', undefined),
  statePath: value('--state-file', undefined),
  discovery: !has('--no-discovery'),
  ports: {
    control: Number(value('--control', DEFAULT_PORTS.control)),
    video: Number(value('--video', DEFAULT_PORTS.video)),
    tracking: Number(value('--tracking', DEFAULT_PORTS.tracking)),
    discovery: Number(value('--discovery', DEFAULT_PORTS.discovery)),
  },
});

await bridge.start();

const log = message => process.stdout.write(`${new Date().toISOString()} ${message}\n`);
log(`NextVR PC Bridge — ${bridge.name}`);
log(`  controle     tcp ${bridge.ports.control}`);
log(`  vídeo        udp ${bridge.ports.video} (do driver: tcp 127.0.0.1:${bridge.ports.frames})`);
log(`  rastreamento udp ${bridge.ports.tracking}`);
log(`  descoberta   udp ${bridge.ports.discovery}${bridge.discovery ? '' : ' (desligada)'}`);
log(`  estado       ${bridge.stateWriter.path}`);
log(`  steamvr      ${bridge.compat.steamvr}${bridge.compat.driver ? ` · driver ${bridge.compat.driver}` : ''}`);
log(`  openxr       ${bridge.compat.openxrHandTracking === null ? 'mãos: não verificado'
  : bridge.compat.openxrHandTracking ? 'mãos: XR_EXT_hand_tracking disponível' : 'mãos: sem XR_EXT_hand_tracking'}`);
for (const warning of bridge.compat.warnings) log(`  ! ${warning}`);

let lastReport = 0;
setInterval(() => {
  const snapshot = bridge.snapshot();
  const now = Date.now();
  if (now - lastReport < 5000) return;
  lastReport = now;
  const control = snapshot.control || {};
  const tracking = snapshot.tracking || {};
  log(`${control.connection === 'connected' ? control.device || 'celular' : 'aguardando celular'} · ` +
    `vídeo ${snapshot.video?.fps ?? 0}fps ${snapshot.video?.mbps ?? 0}Mb/s · ` +
    `mãos ${tracking.hands || 'idle'} ${tracking.rateHz ?? 0}Hz · latência ${control.latencyMs ?? '--'}ms`);
}, 1000);

const shutdown = async () => {
  log('encerrando…');
  await bridge.stop();
  process.exit(0);
};
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
