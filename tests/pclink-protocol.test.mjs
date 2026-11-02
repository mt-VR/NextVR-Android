/**
 * O protocolo do NextVR PC Link, verificado nas três linguagens que o falam.
 *
 * Estes testes não olham texto de documentação: eles
 *
 *   1. levam um pacote de rastreamento de ida e volta pelo codificador;
 *   2. fatiam um quadro e remontam, conferindo o que chega;
 *   3. comparam a tabela de offsets do JavaScript com a do C++ **compilado na hora** (e com o
 *      autoteste do esqueleto de 31 ossos, que roda o código de verdade);
 *   4. sobem o PC Bridge de verdade, com um "celular" falso em loopback, e verificam que o estado
 *      que ele publica é lido pelo leitor em C++ — o mesmo que o driver usa.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { execFile, execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { createSocket } from 'node:dgram';
import { connect } from 'node:net';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { promisify } from 'node:util';
import { fileURLToPath } from 'node:url';

import {
  CODEC, ControlReader, DISCOVERY_MAGIC, FLAG_HEAD, FLAG_LEFT_CONFIDENT, FLAG_LEFT_PRESENT,
  JOINT_COUNT, PROTOCOL_VERSION, TRACKING_BYTES, VideoAssembler, decodeTracking, decodeVideoHeader,
  discoveryRequest, emptyTracking, encodeControl, encodeTracking, fragmentFrame,
  isDiscoveryRequest, parseDiscoveryReply, discoveryReply, qualityFor,
} from '../pclink/wire.mjs';
import { STATE_BYTES, STATE_OFFSETS, decodeState, encodeState } from '../pclink/state.mjs';

const root = fileURLToPath(new URL('..', import.meta.url));
const run = promisify(execFile);

/** Um "celular" de mentira: uma mão à direita, uma cabeça olhando em frente. */
function fakeTracking(overrides = {}) {
  const state = emptyTracking();
  state.seq = 7;
  state.captureNs = 1_500_000_000n;
  state.head = { valid: true, pos: [0.1, 1.6, -0.2], rot: [0, 0.3826834, 0, 0.9238795] };
  state.ipd = 0.064;
  state.userHeight = 1.78;
  const hand = state.hands[0];
  hand.present = true;
  hand.confidence = 0.92;
  hand.pinch = 1;
  hand.fist = 0;
  hand.palm = [0.22, 1.35, -0.45];
  hand.rot = [0, 0, 0.258819, 0.9659258];
  for (let joint = 0; joint < JOINT_COUNT; joint++) {
    hand.joints[joint] = [0.22 + joint * 0.001, 1.35 + joint * 0.002, -0.45 - joint * 0.003];
  }
  state.hands[1].present = true;
  state.hands[1].confidence = 0.55;
  state.hands[1].palm = [-0.24, 1.33, -0.44];
  return Object.assign(state, overrides);
}

test('o pacote de rastreamento vai e volta sem perder um campo', () => {
  const state = fakeTracking();
  const packet = encodeTracking(state);
  assert.equal(packet.length, TRACKING_BYTES);
  assert.equal(TRACKING_BYTES, 648, 'o pacote tem 648 bytes');
  assert.equal(packet.toString('ascii', 0, 4), 'NVRT');

  const decoded = decodeTracking(packet);
  assert.equal(decoded.seq, 7);
  assert.equal(decoded.captureNs, 1_500_000_000n);
  assert.equal(decoded.head.valid, true);
  assert.ok(Math.abs(decoded.head.pos[1] - 1.6) < 1e-6);
  assert.ok(Math.abs(decoded.head.pos[2] + 0.2) < 1e-6);
  assert.equal(decoded.hands[0].present, true);
  assert.equal(decoded.hands[0].pinch, 1);
  assert.ok(Math.abs(decoded.hands[0].joints[8][1] - (1.35 + 8 * 0.002)) < 1e-6);
  assert.ok(Math.abs(decoded.ipd - state.ipd) < 1e-6, 'IPD sobrevive ao float de 32 bits');
  assert.ok(Math.abs(decoded.hands[1].palm[0] + 0.24) < 1e-6);
});

test('lixo de outros programas não é confundido com rastreamento', () => {
  assert.equal(decodeTracking(Buffer.from('GET / HTTP/1.1\r\n')), null);
  assert.equal(decodeTracking(Buffer.alloc(TRACKING_BYTES)), null);
  const wrongVersion = encodeTracking(fakeTracking());
  wrongVersion.writeUInt16LE(99, 4);
  assert.equal(decodeTracking(wrongVersion), null);
});

test('o pacote cabe em um datagrama e o buffer é reaproveitado', () => {
  const buffer = Buffer.allocUnsafe(TRACKING_BYTES);
  const first = encodeTracking(fakeTracking(), buffer);
  assert.equal(first.buffer, buffer.buffer, 'escreve no buffer dado, sem alocar por quadro');
  encodeTracking(fakeTracking({ seq: 8 }), buffer);
  assert.equal(buffer.readUInt32LE(8), 8);
});

test('os flags dizem exatamente o que o pacote traz', () => {
  const state = fakeTracking();
  const packet = encodeTracking(state);
  const flags = packet.readUInt16LE(6);
  assert.ok(flags & FLAG_HEAD, 'cabeça válida');
  assert.ok(flags & FLAG_LEFT_PRESENT, 'mão esquerda presente');
  assert.ok(flags & FLAG_LEFT_CONFIDENT, 'mão esquerda com confiança alta');

  const noHead = fakeTracking();
  noHead.head.valid = false;
  noHead.hands[0].confidence = 0.1;
  const flags2 = encodeTracking(noHead).readUInt16LE(6);
  assert.equal(flags2 & FLAG_HEAD, 0);
  assert.equal(flags2 & FLAG_LEFT_CONFIDENT, 0);
});

test('um quadro de vídeo é fatiado, remontado e identificado', () => {
  const payload = Buffer.alloc(5000);
  for (let i = 0; i < payload.length; i++) payload[i] = i & 0xff;
  const packets = fragmentFrame({ frameId: 42, codec: 'h264', keyframe: true, stereo: true, captureNs: 9n }, payload);
  assert.ok(packets.length > 1);
  for (const packet of packets) {
    assert.ok(packet.length <= 1200, 'nenhum pacote passa da MTU');
    const header = decodeVideoHeader(packet);
    assert.equal(header.frameId, 42);
    assert.equal(header.keyframe, true);
    assert.equal(header.stereo, true);
    assert.equal(header.codec, 'h264');
  }

  const assembler = new VideoAssembler();
  let assembled = null;
  for (const packet of [...packets].reverse()) {   // fora de ordem de propósito
    assembled = assembler.push(packet) || assembled;
  }
  assert.ok(assembled, 'remontou mesmo chegando fora de ordem');
  assert.equal(assembled.payload.length, payload.length);
  assert.deepEqual(assembled.payload, payload);
  assert.equal(assembler.completed, 1);
});

test('quadro incompleto é descartado, não remontado pela metade', () => {
  const assembler = new VideoAssembler();
  const payload = Buffer.alloc(3000, 7);
  const packets = fragmentFrame({ frameId: 1, codec: 'h264', keyframe: false, stereo: true, captureNs: 1n }, payload);
  for (const packet of packets.slice(0, packets.length - 1)) assert.equal(assembler.push(packet), null);
  // O próximo quadro começa antes de o anterior completar: o velho sai da fila.
  const next = fragmentFrame({ frameId: 2, codec: 'h264', keyframe: true, stereo: true, captureNs: 2n },
    Buffer.alloc(2000, 9));
  let result = null;
  for (const packet of next) result = assembler.push(packet) || result;
  assert.ok(result);
  assert.equal(result.frameId, 2);
  assert.ok(assembler.dropped >= 1);
});

test('o controle fala uma mensagem JSON por linha', () => {
  const reader = new ControlReader();
  const messages = reader.push(Buffer.concat([
    encodeControl({ t: 'hello', v: 1 }),
    Buffer.from('{"t":"config","codec":"hevc"}\n{"t":"ses'),
  ]));
  assert.deepEqual(messages, [{ t: 'hello', v: 1 }, { t: 'config', codec: 'hevc' }]);
  // Chega o resto da linha partida.
  assert.deepEqual(reader.push(Buffer.from('sion","action":"start"}\n')), [{ t: 'session', action: 'start' }]);
  // Linha inválida no meio não derruba a sessão.
  assert.deepEqual(reader.push(Buffer.from('nao e json\n{"t":"ping","id":3}\n')), [{ t: 'ping', id: 3 }]);
});

test('a descoberta responde o que o PC tem, incluindo "não verificado"', () => {
  assert.ok(isDiscoveryRequest(discoveryRequest()));
  assert.equal(discoveryRequest().toString('ascii'), `${DISCOVERY_MAGIC}1 ?`);
  const reply = parseDiscoveryReply(discoveryReply({
    name: 'DESKTOP-TEST', steamvr: 'running', driver: '1.0.0', openxrHandTracking: null,
    warnings: ['runtime não verificado'],
  }));
  assert.equal(reply.name, 'DESKTOP-TEST');
  assert.equal(reply.v, PROTOCOL_VERSION);
  assert.equal(reply.controlPort, 44701);
  assert.equal(reply.openxrHandTracking, null, 'não verificado não vira "sim"');
  assert.deepEqual(reply.warnings, ['runtime não verificado']);
});

test('as qualidades de vídeo são as que a interface oferece', () => {
  assert.equal(qualityFor('low').bitrateMbps, 20);
  assert.equal(qualityFor('high').fps, 90);
  assert.equal(qualityFor('inexistente').bitrateMbps, 40, 'qualidade desconhecida cai no padrão');
  assert.equal(qualityFor('medium', { fps: 72 }).fps, 72);
  assert.equal(CODEC.hevc, 2);
});

test('o bloco de estado do JS tem os mesmos offsets do C++', async t => {
  const compiler = whichCompiler();
  if (!compiler) return t.skip('sem compilador C++ para comparar a tabela de offsets');
  const output = await compileAndRun(t, compiler, ['layout']);
  assert.equal(output.ok, true, 'o próprio C++ concorda com os static_assert');
  const byName = new Map(output.checks.map(check => [check.name, check.ok]));
  assert.equal(byName.get('sizeof(SharedState)'), true);
  assert.equal(byName.get('offsetof(hands[1])'), true);

  const details = new Map(output.checks.map(check => [check.name, check.detail]));
  const cppSize = Number(details.get('sizeof(SharedState)').split(' ')[0]);
  assert.equal(cppSize, STATE_BYTES, 'o bloco tem o mesmo tamanho nos dois lados');
  const cppHand1 = Number(details.get('offsetof(hands[1])').split(' ')[0]);
  assert.equal(cppHand1, STATE_OFFSETS.hand1);
});

test('o esqueleto de 31 ossos sai dos 21 pontos reais', async t => {
  const compiler = whichCompiler();
  if (!compiler) return t.skip('sem compilador C++ para rodar o autoteste do esqueleto');
  const output = await compileAndRun(t, compiler, ['skeleton']);
  assert.equal(output.ok, true, `falhas: ${output.checks.filter(c => !c.ok).map(c => c.name).join(', ')}`);
  const names = output.checks.map(check => check.name);
  for (const expected of ['são 31 ossos', 'joints reais no lugar (m)', 'mão ausente não monta esqueleto',
    'curl do indicador fechado', 'suavização reduz o tremor']) {
    assert.ok(names.includes(expected), `o autoteste cobre "${expected}"`);
  }
});

test('o Bridge publica o estado que o driver em C++ lê (sessão de verdade em loopback)', async t => {
  const compiler = whichCompiler();
  const { startBridge } = await import('../pc-bridge/src/server.mjs');
  const directory = mkdtempSync(join(tmpdir(), 'nextvr-pclink-'));
  const statePath = join(directory, 'pclink-state.bin');
  const bridge = await startBridge({
    name: 'TEST-BRIDGE',
    statePath,
    discovery: true,
    ports: { control: 0, video: 0, tracking: 0, discovery: 0, frames: 0 },
    steamvrHome: null,
  });
  t.after(async () => {
    await bridge.stop();
    rmSync(directory, { recursive: true, force: true });
  });

  // --- descoberta: o celular acha o PC pelo broadcast local -------------------------------
  const discovery = createSocket({ type: 'udp4' });
  const discoveryReplyMessage = new Promise((resolve, reject) => {
    discovery.once('message', message => resolve(parseDiscoveryReply(message)));
    discovery.once('error', reject);
  });
  discovery.bind(0, '127.0.0.1', () => {
    discovery.send(discoveryRequest(), bridge.discovery.port, '127.0.0.1');
  });
  const found = await discoveryReplyMessage;
  discovery.close();
  assert.equal(found.name, 'TEST-BRIDGE');
  assert.equal(found.controlPort, bridge.ports.control);

  // --- controle: hello, sessão e estado ---------------------------------------------------
  const control = connect(bridge.ports.control, '127.0.0.1');
  const reader = new ControlReader();
  const received = [];
  control.on('data', chunk => {
    for (const message of reader.push(chunk)) received.push(message);
  });
  await new Promise((resolve, reject) => {
    control.once('connect', resolve);
    control.once('error', reject);
  });
  control.write(encodeControl({ t: 'hello', v: 1, device: 'Pixel de teste' }));
  await waitFor(() => received.some(message => message.t === 'welcome'));
  const welcome = received.find(message => message.t === 'welcome');
  assert.equal(welcome.v, PROTOCOL_VERSION);
  assert.ok(Array.isArray(welcome.codecs) && welcome.codecs.includes('h264'));
  assert.equal(welcome.openxrHandTracking, null, 'sem probe, "não verificado" chega ao celular');

  control.write(encodeControl({ t: 'session', action: 'start' }));
  control.write(encodeControl({ t: 'config', codec: 'h264', width: 1832, height: 1920, fps: 72, bitrateMbps: 60 }));
  control.write(encodeControl({ t: 'calibrate', ipd: 0.066, userHeight: 1.82, worldScale: 1.1 }));
  control.write(encodeControl({ t: 'ping', id: 1, ts: Date.now() }));

  // --- rastreamento: UDP de verdade -------------------------------------------------------
  const tracking = createSocket({ type: 'udp4' });
  const sample = fakeTracking();
  await new Promise(resolve => tracking.bind(0, '127.0.0.1', resolve));
  // Cada pacote tem o SEU seq: repetir o mesmo número é o que o Bridge descarta (pacote velho), então
  // um teste que reenvia o mesmo buffer estaria testando o descarte, não a recepção.
  for (let i = 0; i < 6; i++) {
    tracking.send(encodeTracking({ ...sample, seq: sample.seq + i }), bridge.ports.tracking, '127.0.0.1');
    await new Promise(r => setTimeout(r, 20));
  }
  await waitFor(() => bridge.snapshot().tracking.received >= 6);

  // --- o leitor em C++ (o mesmo que o driver usa) vê os mesmos números --------------------
  if (compiler) {
    const dump = await readStateWithCpp(t, compiler, statePath);
    assert.equal(dump.ok, true, 'o leitor C++ abriu o arquivo do Bridge');
    assert.equal(dump.session, true, 'a sessão iniciada pelo celular chegou ao driver');
    assert.equal(dump.headValid, true);
    assert.ok(Math.abs(dump.head.x - 0.1) < 1e-4);
    assert.ok(Math.abs(dump.head.y - 1.6) < 1e-4);
    assert.ok(Math.abs(dump.ipd - 0.066) < 1e-4, 'a calibração de IPD chega ao driver');
    assert.equal(dump.leftHand, true);
    assert.ok(Math.abs(dump.hands[0].joint8[1] - (1.35 + 8 * 0.002)) < 1e-3);
    assert.equal(dump.width, 1832);
  }

  // --- vídeo: o "driver" manda um quadro e o celular recebe fatiado -----------------------
  const videoSocket = createSocket({ type: 'udp4' });
  const assembler = new VideoAssembler();
  const assembled = new Promise(resolve => {
    videoSocket.on('message', message => {
      const frame = assembler.push(message);
      if (frame) resolve(frame);
    });
  });
  await new Promise(resolve => videoSocket.bind(0, '127.0.0.1', resolve));
  control.write(encodeControl({
    t: 'session', action: 'start', videoPort: videoSocket.address().port,
  }));

  const driver = connect(bridge.ports.frames, '127.0.0.1');
  await new Promise((resolve, reject) => {
    driver.once('connect', resolve);
    driver.once('error', reject);
  });
  const payload = Buffer.alloc(4000, 3);
  const header = Buffer.alloc(24);
  header.writeUInt32LE(0x5246564e, 0);      // 'NVFR'
  header.writeUInt32LE(11, 4);              // frameId
  header.writeUInt32LE(payload.length, 8);
  header.writeUInt32LE(0x3, 12);            // keyframe + estéreo
  header.writeBigUInt64LE(4_242n, 16);
  driver.write(Buffer.concat([header, payload]));

  const frame = await Promise.race([assembled, new Promise((_, reject) =>
    setTimeout(() => reject(new Error('o quadro não chegou ao celular')), 4000))]);
  assert.equal(frame.frameId, 11);
  assert.equal(frame.stereo, true);
  assert.equal(frame.payload.length, payload.length);
  assert.equal(frame.captureNs, 4_242n);

  // Renova o rastreamento: entre a primeira rajada e aqui rodou compilação C++, e o Bridge — certo —
  // já teria declarado "sem mão" por falta de pacote recente.
  //
  // E insiste: um celular de verdade manda pacote o tempo todo, e o anúncio de mão (a cada 250 ms)
  // não está em fase com a publicação de estado (2 Hz). Mandar UMA vez e esperar o próximo estado é
  // apostar que os dois relógios caem dentro da janela de 400 ms — que é exatamente o tipo de teste
  // que passa sozinho e falha quando a máquina está ocupada.
  let lastState = null;
  for (let attempt = 0; attempt < 40 && !lastState; attempt++) {
    tracking.send(encodeTracking({ ...sample, seq: sample.seq + 40 + attempt }), bridge.ports.tracking, '127.0.0.1');
    await new Promise(resolve => setTimeout(resolve, 60));
    const states = received.filter(message => message.t === 'state');
    const latest = states.length ? states[states.length - 1] : null;
    if (latest && latest.handTracking === 'ok') lastState = latest;
  }
  assert.ok(lastState, 'o Bridge publicou um estado com as mãos em \'ok\'');
  control.write(encodeControl({ t: 'ping', id: 2, ts: Date.now() }));
  assert.equal(lastState.device, 'Pixel de teste');
  assert.equal(lastState.session, 'running');
  assert.equal(lastState.handTracking, 'ok', 'as duas mãos do pacote chegam como "ok"');
  assert.equal(lastState.video.stereo, true);
  assert.equal(lastState.audio, 'unavailable', 'áudio não é anunciado como pronto');
  assert.ok(Number.isFinite(lastState.hands.rateHz));

  tracking.close();
  videoSocket.close();
  driver.destroy();
  control.destroy();
});

test('o Bridge não anuncia mãos quando o celular para de mandar', async t => {
  const { startBridge } = await import('../pc-bridge/src/server.mjs');
  const directory = mkdtempSync(join(tmpdir(), 'nextvr-pclink-'));
  const bridge = await startBridge({
    name: 'TEST-IDLE', statePath: join(directory, 'state.bin'), discovery: false,
    ports: { control: 0, video: 0, tracking: 0, discovery: 0, frames: 0 },
  });
  t.after(async () => {
    await bridge.stop();
    rmSync(directory, { recursive: true, force: true });
  });

  const tracking = createSocket({ type: 'udp4' });
  await new Promise(resolve => tracking.bind(0, '127.0.0.1', resolve));
  tracking.send(encodeTracking(fakeTracking()), bridge.ports.tracking, '127.0.0.1');
  await waitFor(() => bridge.snapshot().tracking.received >= 1);
  assert.equal(bridge.tracking.handState(), 'ok');

  // 500 ms sem pacote: a pose deixa de ser válida em vez de repetir a última para sempre.
  await new Promise(resolve => setTimeout(resolve, 520));
  bridge.tracking.tick();
  assert.equal(bridge.tracking.handState(), 'idle');
  assert.equal(bridge.tracking.stats().stale, true);
  tracking.close();
});

/* ============================== utilidades ============================== */

function whichCompiler() {
  for (const candidate of [process.env.CXX, 'g++', 'clang++']) {
    if (!candidate) continue;
    try {
      execFileSync(candidate, ['--version'], { stdio: 'ignore' });
      return candidate;
    } catch { /* tenta o próximo */ }
  }
  return null;
}

/** Compila o núcleo do driver (uma vez por processo) e roda o autoteste. */
let buildDirectory = null;
function buildDir() {
  if (!buildDirectory) {
    buildDirectory = mkdtempSync(join(tmpdir(), 'nextvr-core-'));
    // O binário é compartilhado entre os testes deste arquivo: a limpeza é do processo inteiro, não
    // de um teste, senão o segundo teste encontraria o binário já apagado.
    process.on('exit', () => rmSync(buildDirectory, { recursive: true, force: true }));
  }
  return buildDirectory;
}

let selftestBinary = null;
async function compileAndRun(t, compiler, args) {
  if (!selftestBinary) {
    selftestBinary = join(buildDir(), 'nextvr-core-selftest');
    await run(compiler, [
      '-std=c++17', '-O1', '-o', selftestBinary,
      join(root, 'steamvr-driver/core/selftest.cpp'),
      join(root, 'steamvr-driver/core/hand_skeleton.cpp'),
    ]);
  }
  const { stdout } = await run(selftestBinary, args);
  return JSON.parse(stdout.trim().split('\n').pop());
}

let stateDumpBinary = null;
async function readStateWithCpp(t, compiler, statePath) {
  if (!stateDumpBinary) {
    stateDumpBinary = join(buildDir(), 'nextvr-state-dump');
    await run(compiler, [
      '-std=c++17', '-O1', '-o', stateDumpBinary,
      join(root, 'steamvr-driver/core/state_dump.cpp'),
      join(root, 'steamvr-driver/src/shared_state.cpp'),
      '-I', join(root, 'steamvr-driver/core'),
      '-I', join(root, 'steamvr-driver/src'),
      '-I', join(root, 'steamvr-driver/third_party/openvr'),
    ]);
  }
  const { stdout } = await run(stateDumpBinary, [], {
    env: { ...process.env, NEXTVR_PCLINK_STATE: statePath },
  });
  return JSON.parse(stdout.trim().split('\n').pop());
}

async function waitFor(predicate, timeout = 4000, step = 15) {
  const start = Date.now();
  for (;;) {
    if (predicate()) return;
    if (Date.now() - start > timeout) throw new Error('timeout esperando a condição do teste');
    await new Promise(resolve => setTimeout(resolve, step));
  }
}
