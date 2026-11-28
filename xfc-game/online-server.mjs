import { randomInt } from 'node:crypto';
import { WebSocket, WebSocketServer } from 'ws';

const ROOM_TTL_MS = 2 * 60 * 1000;
const MATCH_TTL_MS = 30 * 60 * 1000;
const MAX_JOIN_ATTEMPTS = 12;
const JOIN_WINDOW_MS = 60 * 1000;
const ALLOWED_ACTIONS = new Set([
  'pass', 'shoot', 'lob', 'tackle', 'dribble', 'stepover', 'rainbow',
  'elastico', 'roulette', 'switch'
]);

function isRecord(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function finite(value, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function send(socket, message) {
  if (socket?.readyState !== WebSocket.OPEN) return false;
  socket.send(JSON.stringify(message));
  return true;
}

function validMatchConfig(value) {
  if (!isRecord(value)) return null;
  const home = String(value.home || '');
  const away = String(value.away || '');
  if (!/^[a-z0-9-]{1,80}$/i.test(home) || !/^[a-z0-9-]{1,80}$/i.test(away) || home === away) return null;
  const allowedMinutes = new Set([3, 6, 10]);
  const difficulty = ['easy', 'normal', 'hard'].includes(value.difficulty) ? value.difficulty : 'normal';
  return {
    home,
    away,
    homeKit: Math.round(clamp(finite(value.homeKit), 0, 15)),
    awayKit: Math.round(clamp(finite(value.awayKit), 0, 15)),
    minutes: allowedMinutes.has(Number(value.minutes)) ? Number(value.minutes) : 3,
    difficulty,
    stadium: Math.round(clamp(finite(value.stadium), 0, 100)),
    seed: Math.floor(clamp(finite(value.seed, 1), 0, 0xffffffff))
  };
}

function validPieceOptions(value) {
  if (!isRecord(value)) return null;
  const result = {};
  for (const key of ['aim', 'power', 'curve', 'lift', 'impactX', 'impactY']) {
    if (Number.isFinite(Number(value[key]))) result[key] = clamp(Number(value[key]), -1, 1);
  }
  if (['placed', 'power', 'curved', 'normal'].includes(value.kind)) result.kind = value.kind;
  return result;
}

function allowedOriginsFrom(value) {
  if (Array.isArray(value)) return value;
  if (typeof value === 'string') return value.split(',').map(item => item.trim()).filter(Boolean);
  const fromEnvironment = process.env.XFC_ONLINE_ALLOWED_ORIGINS;
  return fromEnvironment ? fromEnvironment.split(',').map(item => item.trim()).filter(Boolean) : null;
}

/**
 * Adds an ephemeral two-player room relay to the static XFC HTTP server.
 * The host's game simulation is authoritative; this service only relays input,
 * events and compact state snapshots. No player accounts or profile data are
 * accepted or stored.
 */
export function attachOnlineRooms(server, {
  path = '/ws',
  allowedOrigins = null,
  now = () => Date.now(),
  roomTtlMs = ROOM_TTL_MS,
  matchTtlMs = MATCH_TTL_MS
} = {}) {
  const origins = allowedOriginsFrom(allowedOrigins);
  const rooms = new Map();
  const joinAttempts = new Map();
  const wss = new WebSocketServer({ noServer: true, maxPayload: 64 * 1024, perMessageDeflate: false });

  function codeForRoom() {
    for (let attempt = 0; attempt < 90000; attempt += 1) {
      const code = String(10000 + randomInt(90000));
      if (!rooms.has(code)) return code;
    }
    throw new Error('No room codes are available');
  }

  function roomPeer(room, client) {
    if (!room || !client) return null;
    return room.host === client ? room.guest : room.guest === client ? room.host : null;
  }

  function removeClientFromRoom(client, { notify = true } = {}) {
    const room = client.room;
    if (!room) return;
    const peer = roomPeer(room, client);
    if (client === room.host) {
      if (notify && peer) send(peer, { type: 'host-left' });
      rooms.delete(room.code);
      room.host = null;
      room.guest = null;
    } else if (client === room.guest) {
      if (notify && peer) send(peer, { type: 'peer-left' });
      room.guest = null;
      room.expiresAt = now() + roomTtlMs;
    }
    client.room = null;
    client.role = null;
  }

  function error(client, code, message) {
    send(client, { type: 'error', code, message });
  }

  function allowJoin(client) {
    const timestamp = now();
    const attempts = (joinAttempts.get(client.ip) || []).filter(item => timestamp - item < JOIN_WINDOW_MS);
    if (attempts.length >= MAX_JOIN_ATTEMPTS) {
      joinAttempts.set(client.ip, attempts);
      return false;
    }
    attempts.push(timestamp);
    joinAttempts.set(client.ip, attempts);
    return true;
  }

  function handleMessage(client, value) {
    if (!isRecord(value) || typeof value.type !== 'string') {
      error(client, 'invalid-message', 'Mensagem inválida.');
      return;
    }

    switch (value.type) {
      case 'create-room': {
        if (client.room) removeClientFromRoom(client, { notify: true });
        const code = codeForRoom();
        const room = { code, host: client, guest: null, config: null, started: false, expiresAt: now() + roomTtlMs };
        rooms.set(code, room);
        client.room = room;
        client.role = 'host';
        send(client, { type: 'room-created', code });
        return;
      }
      case 'join-room': {
        if (!allowJoin(client)) {
          error(client, 'rate-limited', 'Muitas tentativas. Aguarde um minuto antes de tentar outro código.');
          return;
        }
        const code = typeof value.code === 'string' ? value.code : '';
        if (!/^\d{5}$/.test(code)) {
          error(client, 'invalid-code', 'O código deve ter cinco dígitos.');
          return;
        }
        const room = rooms.get(code);
        if (!room?.host || room.host.readyState !== WebSocket.OPEN) {
          error(client, 'room-not-found', 'Sala não encontrada ou expirada. Confira o código e tente de novo.');
          return;
        }
        if (room.guest && room.guest !== client && room.guest.readyState === WebSocket.OPEN) {
          error(client, 'room-full', 'Essa sala já está completa.');
          return;
        }
        if (client.room && client.room !== room) removeClientFromRoom(client, { notify: true });
        room.guest = client;
        room.expiresAt = now() + (room.started ? matchTtlMs : roomTtlMs);
        client.room = room;
        client.role = 'guest';
        send(client, { type: 'joined', code, role: 'guest' });
        send(room.host, { type: 'peer-joined' });
        if (room.started && room.config) send(client, { type: 'match-start', config: room.config });
        return;
      }
      case 'start-match': {
        const room = client.room;
        if (!room || room.host !== client || client.role !== 'host') {
          error(client, 'not-authorized', 'Somente quem criou a sala pode iniciar a partida.');
          return;
        }
        if (!room.guest || room.guest.readyState !== WebSocket.OPEN) {
          error(client, 'peer-not-ready', 'Aguarde outro jogador entrar na sala.');
          return;
        }
        const config = validMatchConfig(value.config);
        if (!config) {
          error(client, 'invalid-match', 'As configurações da partida são inválidas.');
          return;
        }
        room.config = config;
        room.started = true;
        room.expiresAt = now() + matchTtlMs;
        send(client, { type: 'start-accepted', config });
        send(room.guest, { type: 'match-start', config });
        return;
      }
      case 'input': {
        const room = client.room;
        if (!room || client.role !== 'guest' || !room.host || !room.started) {
          error(client, 'not-authorized', 'Não há uma partida ativa para enviar controles.');
          return;
        }
        if (!isRecord(value.input)) return;
        const input = {
          moveX: clamp(finite(value.input.moveX), -1, 1),
          moveZ: clamp(finite(value.input.moveZ), -1, 1),
          sprint: Boolean(value.input.sprint),
          shotCharge: clamp(finite(value.input.shotCharge), 0, 1)
        };
        send(room.host, { type: 'remote-input', seq: Math.max(0, Math.floor(finite(value.seq))), input });
        return;
      }
      case 'action': {
        const room = client.room;
        if (!room || client.role !== 'guest' || !room.host || !room.started) {
          error(client, 'not-authorized', 'Não há uma partida ativa para executar comandos.');
          return;
        }
        const name = String(value.name || '');
        if (!ALLOWED_ACTIONS.has(name)) {
          error(client, 'invalid-action', 'Esse comando não é permitido.');
          return;
        }
        const payload = {};
        if (isRecord(value.payload)) {
          for (const key of ['strength', 'aim', 'curve', 'lift', 'impactX', 'impactY']) {
            if (Number.isFinite(Number(value.payload[key]))) payload[key] = clamp(Number(value.payload[key]), -1, 1);
          }
          if (['normal', 'power', 'placed', 'curved'].includes(value.payload.kind)) payload.kind = value.payload.kind;
          if (typeof value.payload.lob === 'boolean') payload.lob = value.payload.lob;
        }
        send(room.host, { type: 'remote-action', seq: Math.max(0, Math.floor(finite(value.seq))), name, payload });
        return;
      }
      case 'piece-options': {
        const room = client.room;
        const options = validPieceOptions(value.options);
        if (!room || client.role !== 'guest' || !room.host || !room.started || !options) {
          error(client, 'invalid-piece-options', 'As opções de bola parada não são válidas.');
          return;
        }
        send(room.host, { type: 'remote-piece-options', options });
        return;
      }
      case 'state': {
        const room = client.room;
        if (!room || client.role !== 'host' || !room.guest || !room.started) return;
        if (!isRecord(value.state)) return;
        room.expiresAt = now() + matchTtlMs;
        send(room.guest, { type: 'state', state: value.state });
        return;
      }
      case 'event': {
        const room = client.room;
        if (!room || client.role !== 'host' || !room.guest || !room.started) return;
        if (!isRecord(value.event)) return;
        send(room.guest, { type: 'event', event: value.event });
        return;
      }
      case 'leave':
        removeClientFromRoom(client, { notify: true });
        send(client, { type: 'left' });
        return;
      case 'ping':
        send(client, { type: 'pong', at: finite(value.at) });
        return;
      default:
        error(client, 'unknown-message', 'Tipo de mensagem desconhecido.');
    }
  }

  server.on('upgrade', (request, socket, head) => {
    let url;
    try {
      url = new URL(request.url || '/', 'http://localhost');
    } catch {
      socket.destroy();
      return;
    }
    if (url.pathname !== path) {
      socket.write('HTTP/1.1 404 Not Found\r\nConnection: close\r\n\r\n');
      socket.destroy();
      return;
    }
    const origin = request.headers.origin;
    if (origin && origins) {
      const allowed = origins.includes('*') || origins.includes(origin);
      if (!allowed) {
        socket.write('HTTP/1.1 403 Forbidden\r\nConnection: close\r\n\r\n');
        socket.destroy();
        return;
      }
    } else if (origin && !origins) {
      let originHost = '';
      try { originHost = new URL(origin).host; } catch { /* rejected below */ }
      if (!originHost || originHost !== request.headers.host) {
        socket.write('HTTP/1.1 403 Forbidden\r\nConnection: close\r\n\r\n');
        socket.destroy();
        return;
      }
    }
    wss.handleUpgrade(request, socket, head, peer => wss.emit('connection', peer, request));
  });

  wss.on('connection', (socket, request) => {
    socket.isAlive = true;
    socket.ip = request.socket.remoteAddress || 'unknown';
    socket.room = null;
    socket.role = null;
    socket.on('pong', () => { socket.isAlive = true; });
    socket.on('message', raw => {
      try {
        handleMessage(socket, JSON.parse(raw.toString()));
      } catch {
        error(socket, 'invalid-message', 'Não foi possível ler essa mensagem.');
      }
    });
    socket.on('close', () => removeClientFromRoom(socket, { notify: true }));
    socket.on('error', () => removeClientFromRoom(socket, { notify: false }));
  });

  const heartbeat = setInterval(() => {
    const timestamp = now();
    for (const [code, room] of rooms) {
      if (room.expiresAt <= timestamp) {
        send(room.host, { type: 'room-expired' });
        if (room.guest) send(room.guest, { type: 'room-expired' });
        rooms.delete(code);
      }
    }
    for (const [ip, attempts] of joinAttempts) {
      const recent = attempts.filter(item => timestamp - item < JOIN_WINDOW_MS);
      if (recent.length) joinAttempts.set(ip, recent);
      else joinAttempts.delete(ip);
    }
    for (const peer of wss.clients) {
      if (peer.isAlive === false) {
        peer.terminate();
        continue;
      }
      peer.isAlive = false;
      peer.ping();
    }
  }, 30_000);
  heartbeat.unref?.();

  server.once('close', () => {
    clearInterval(heartbeat);
    for (const peer of wss.clients) peer.terminate();
    wss.close();
    rooms.clear();
    joinAttempts.clear();
  });

  return {
    wss,
    rooms,
    close() {
      clearInterval(heartbeat);
      for (const peer of wss.clients) peer.terminate();
      wss.close();
      rooms.clear();
    }
  };
}
