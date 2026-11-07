#!/usr/bin/env node
// NextVR · Servidor do Gorilla Rush
//
// O jogo que o usuário entregou vinha com o PeerJS público — o "servidor" de terceiros do Gorilla
// Rush, que a gente não controla e que não existe quando não há internet. Este arquivo é o NOSSO
// servidor: um relé de salas, sem dependência nenhuma (só `node`), que roda em qualquer máquina,
// incluindo o próprio PC na mesma rede Wi-Fi do celular.
//
// O protocolo é o mesmo que o jogo já falava: mensagens JSON de texto.
//
//   cliente -> servidor
//     {t:'join', code?:'ABCDE', quick?:true, mode?:'cas'|'tag'|'inf', pub?:bool, nick?:'...'}
//     {t:'p', ...}                 estado de um jogador (quem manda é quem NÃO é anfitrião)
//     {t:'s', ...}                 estado do mundo (quem manda é o anfitrião)
//     {t:'leave'}                  sai da sala
//
//   servidor -> cliente
//     {t:'hello', id, code, host, pub, mode, count}   entrou
//     {t:'full', code}             a sala está cheia (8)
//     {t:'p', id, ...}             estado de outro jogador (só o anfitrião recebe)
//     {t:'s', ...}                 estado do mundo (só quem não é anfitrião recebe)
//     {t:'promote', pub, mode}     o anfitrião saiu: agora é você
//     {t:'peer', on:bool, count}   alguém entrou/saiu
//     {t:'bye', why}               a sala fechou
//     {t:'error', why}
//
// O anfitrião é o primeiro da sala. Como o jogo já simulava o "pega-pego" no cliente do anfitrião,
// não é preciso mudar o jogo: o servidor só entrega os pacotes para quem precisa deles.
import { createServer } from 'node:http';
import { createHash, randomUUID } from 'node:crypto';
import { networkInterfaces } from 'node:os';

const MAX_ROOM = 8;
const QUICK_ROOMS = 6;          // as salas públicas (PUB1…) que o "entrar rápido" procura
const IDLE_MS = 45000;          // sem nenhum pacote do cliente: o socket está morto

const args = process.argv.slice(2);
const argOf = (name, fallback) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};
const PORT = Number(argOf('--port', process.env.PORT || 8787));
const HOST = argOf('--host', '0.0.0.0');

/** Salas: código -> { code, pub, mode, members:Map<id, client> } */
const rooms = new Map();

const log = (...a) => console.log(new Date().toISOString().slice(11, 19), ...a);
const rndCode = () => Array.from({ length: 5 }, () => 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'[Math.random() * 32 | 0]).join('');

function roomOf(client) { return client.room ? rooms.get(client.room) : null; }

function send(client, obj) {
  if (!client || client.closed || client.ws.destroyed) return;
  const text = JSON.stringify(obj);
  try { client.ws.write(encodeFrame(1, Buffer.from(text, 'utf8'))); }
  catch { /* o close() logo abaixo limpa tudo */ }
}

function broadcast(room, obj, exceptId) {
  for (const member of room.members.values()) if (member.id !== exceptId) send(member, obj);
}

/** O anfitrião é o primeiro da sala; se ele sai, o próximo assume e o jogo continua. */
function promoteIfNeeded(room) {
  if (!room.members.size) { rooms.delete(room.code); return; }
  const [first] = room.members.values();
  if (room.host === first.id) return;
  room.host = first.id;
  send(first, { t: 'promote', pub: room.pub, mode: room.mode });
  log(`sala ${room.code}: ${first.id} virou anfitrião`);
}

function joinRoom(client, msg) {
  if (client.room) leaveRoom(client, 'trocou de sala');
  let code = String(msg.code || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 8);
  const mode = ['cas', 'tag', 'inf'].includes(msg.mode) ? msg.mode : 'cas';
  const wantsQuick = !!msg.quick || !code;
  if (wantsQuick) {
    // "Entrar rápido": a primeira sala pública que ainda tem vaga, na ordem; se nenhuma serve, a
    // última é criada vazia por este cliente.
    let chosen = null;
    for (let i = 1; i <= QUICK_ROOMS && !chosen; i++) {
      const candidate = rooms.get('PUB' + i);
      if (!candidate) chosen = {
        code: 'PUB' + i, pub: true, mode, host: null, members: new Map(),
      }, rooms.set(chosen.code, chosen);
      else if (candidate.pub && candidate.members.size < MAX_ROOM) chosen = candidate;
    }
    if (!chosen) { send(client, { t: 'error', why: 'sem sala pública livre' }); return; }
    code = chosen.code;
  }
  let room = rooms.get(code);
  if (room && room.members.size >= MAX_ROOM) { send(client, { t: 'full', code }); return; }
  if (!room) {
    room = { code, pub: !!msg.pub, mode, host: null, members: new Map() };
    rooms.set(code, room);
  }
  if (msg.mode && room.members.size === 0) room.mode = mode;
  room.members.set(client.id, client);
  client.room = code;
  if (!room.host) room.host = client.id;
  // O código com 5 letras mantém o formato do jogo; "PUB3" já nasce com 4 e isso é o esperado.
  code = room.code;
  send(client, {
    t: 'hello', id: client.id, code: room.code, host: room.host === client.id,
    pub: room.pub, mode: room.mode, count: room.members.size,
  });
  broadcast(room, { t: 'peer', on: true, count: room.members.size }, client.id);
  log(`sala ${room.code}: entrou ${client.id} (${room.members.size}/${MAX_ROOM}, ${room.host === client.id ? 'anfitrião' : 'convidado'})`);
}

function leaveRoom(client, why) {
  const room = roomOf(client);
  client.room = null;
  if (!room) return;
  room.members.delete(client.id);
  broadcast(room, { t: 'peer', on: false, count: room.members.size });
  if (!room.members.size) { rooms.delete(room.code); log(`sala ${room.code}: fechou (${why || 'vazia'})`); return; }
  promoteIfNeeded(room);
}

function onMessage(client, text) {
  let msg;
  try { msg = JSON.parse(text); } catch { return; }
  if (!msg || typeof msg !== 'object') return;
  client.last = Date.now();
  const room = roomOf(client);
  switch (msg.t) {
    case 'join': joinRoom(client, msg); return;
    case 'leave': leaveRoom(client, 'pediu para sair'); send(client, { t: 'bye', why: 'você saiu' }); return;
    case 'ping': send(client, { t: 'pong', at: Date.now() }); return;
    case 'p': {
      // Estado de um jogador comum -> só o anfitrião precisa dele, com o id de quem mandou.
      if (!room || room.host === client.id) return;
      const host = room.members.get(room.host);
      if (host) send(host, { ...msg, id: client.id });
      return;
    }
    case 's': {
      // Estado do mundo -> todo mundo da sala, menos o anfitrião que o gerou.
      if (!room || room.host !== client.id) return;
      broadcast(room, msg, client.id);
      return;
    }
    default: return;
  }
}

function closeClient(client, why) {
  if (client.closed) return;
  client.closed = true;
  leaveRoom(client, why);
  try { client.ws.destroy(); } catch { /* já foi */ }
}

/* ============================== WebSocket (RFC 6455) ==============================
 * Só o que este servidor usa: handshake, frames de texto/binário, ping/pong e close, com payload
 * de até 64 bits (o cliente manda JSON pequeno, mas fragmentar e mascarar é obrigatório).
 */
function encodeFrame(opcode, payload) {
  const len = payload.length;
  let header;
  if (len < 126) { header = Buffer.alloc(2); header[1] = len; }
  else if (len < 65536) { header = Buffer.alloc(4); header[1] = 126; header.writeUInt16BE(len, 2); }
  else { header = Buffer.alloc(10); header[1] = 127; header.writeBigUInt64BE(BigInt(len), 2); }
  header[0] = 0x80 | opcode;
  return Buffer.concat([header, payload]);
}

function decodeFrames(state, chunk, onFrame) {
  state.buffer = state.buffer.length ? Buffer.concat([state.buffer, chunk]) : chunk;
  for (;;) {
    const buf = state.buffer;
    if (buf.length < 2) return;
    const fin = (buf[0] & 0x80) !== 0;
    const opcode = buf[0] & 0x0f;
    const masked = (buf[1] & 0x80) !== 0;
    let len = buf[1] & 0x7f;
    let offset = 2;
    if (len === 126) { if (buf.length < 4) return; len = buf.readUInt16BE(2); offset = 4; }
    else if (len === 127) { if (buf.length < 10) return; len = Number(buf.readBigUInt64BE(2)); offset = 10; }
    const maskLen = masked ? 4 : 0;
    if (buf.length < offset + maskLen + len) return;
    const mask = masked ? buf.subarray(offset, offset + 4) : null;
    offset += maskLen;
    const payload = Buffer.from(buf.subarray(offset, offset + len));
    if (mask) for (let i = 0; i < payload.length; i++) payload[i] ^= mask[i & 3];
    state.buffer = buf.subarray(offset + len);
    // Frames fragmentados: só o último interessa aqui (mensagens deste protocolo são curtas).
    if (!fin) { state.pending = Buffer.concat([state.pending, payload]); continue; }
    const whole = state.pending.length ? Buffer.concat([state.pending, payload]) : payload;
    state.pending = Buffer.alloc(0);
    onFrame(opcode, whole);
  }
}

const server = createServer((req, res) => {
  // Diagnóstico honesto: dá para abrir no navegador e ver se o servidor está de pé.
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true, rooms: rooms.size, players: [...rooms.values()].reduce((n, r) => n + r.members.size, 0) }));
    return;
  }
  if (req.url === '/rooms') {
    const list = [...rooms.values()].map(r => ({ code: r.code, pub: r.pub, mode: r.mode, players: r.members.size }));
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ rooms: list }));
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('NextVR Gorilla Rush server\n\n'
    + 'O jogo entra por WebSocket nesta mesma porta.\n'
    + 'No NextVR: Configurações → aba 4 (Gorilla Tag) → Servidor → ws://IP-DO-PC:'
    + PORT + '\n');
});

server.on('upgrade', (req, socket) => {
  const key = req.headers['sec-websocket-key'];
  if (!key || (req.headers.upgrade || '').toLowerCase() !== 'websocket') {
    socket.destroy();
    return;
  }
  const accept = createHash('sha1')
    .update(key + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11')
    .digest('base64');
  socket.write('HTTP/1.1 101 Switching Protocols\r\n'
    + 'Upgrade: websocket\r\nConnection: Upgrade\r\n'
    + `Sec-WebSocket-Accept: ${accept}\r\n\r\n`);
  socket.setNoDelay(true);

  const client = {
    id: randomUUID().slice(0, 8), ws: socket, room: null, closed: false, last: Date.now(),
  };
  const state = { buffer: Buffer.alloc(0), pending: Buffer.alloc(0) };

  socket.on('data', chunk => decodeFrames(state, chunk, (opcode, payload) => {
    if (opcode === 0x8) { // close
      send(client, { t: 'bye', why: 'conexão encerrada' });
      closeClient(client, 'fechou');
      return;
    }
    if (opcode === 0x9) { try { socket.write(encodeFrame(0xA, payload)); } catch { /* caiu */ } return; }
    if (opcode === 0x1 || opcode === 0x2) onMessage(client, payload.toString('utf8'));
  }));
  socket.on('error', () => closeClient(client, 'erro de socket'));
  socket.on('close', () => closeClient(client, 'caiu'));
  send(client, { t: 'welcome', id: client.id, rooms: QUICK_ROOMS, max: MAX_ROOM });
  log(`conectou ${client.id}`);
});

// Clientes que somem sem fechar o socket (celular dormindo, Wi-Fi caindo) não ficam ocupando vaga.
setInterval(() => {
  const now = Date.now();
  for (const room of rooms.values()) {
    for (const client of [...room.members.values()]) {
      if (now - client.last > IDLE_MS) closeClient(client, 'sem sinal');
    }
  }
}, 15000).unref();

function lanAddresses() {
  const out = [];
  for (const list of Object.values(networkInterfaces())) {
    for (const net of list || []) {
      if (net.family === 'IPv4' && !net.internal) out.push(net.address);
    }
  }
  return out;
}

server.listen(PORT, HOST, () => {
  log(`Gorilla Rush server ouvindo em http://${HOST}:${PORT}`);
  log('No NextVR, aba 4 (Gorilla Tag) → Servidor:');
  for (const ip of lanAddresses()) log(`   ws://${ip}:${PORT}   (mesma rede Wi-Fi)`);
  log('De fora de casa: publique este arquivo em um VPS/Docker e use wss://SEU-DOMINIO');
});

export { server, rooms };
