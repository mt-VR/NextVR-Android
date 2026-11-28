// A room password is both its private join key and its access control. It is
// never persisted by the client; the relay stores only a one-way digest.
export function normalizeRoomPassword(value) {
  if (typeof value !== 'string') return '';
  const password = value.trim();
  return password.length >= 8 && password.length <= 64 ? password : '';
}

export function isValidRoomPassword(value) {
  return normalizeRoomPassword(value).length > 0;
}

const SERVER_STORAGE_KEY = 'xfc.onlineServer';

export function saveOnlineServerUrl(value, storage = globalThis.localStorage) {
  const url = String(value || '').trim();
  try {
    if (url) storage?.setItem(SERVER_STORAGE_KEY, url);
    else storage?.removeItem(SERVER_STORAGE_KEY);
  } catch { /* private browsing can disable storage */ }
  return url;
}

export function resolveOnlineServerUrl(value = '', location = globalThis.location) {
  let raw = String(value || '').trim();
  if (!raw) {
    raw = String(globalThis.XFC_ONLINE_SERVER || '').trim();
    if (!raw) {
      try { raw = String(globalThis.localStorage?.getItem(SERVER_STORAGE_KEY) || '').trim(); }
      catch { /* storage is optional */ }
    }
  }
  if (!raw) {
    // The Android APK serves bundled files from this virtual origin. It is not
    // a reachable server address, so users must provide their deployed relay.
    if (!location?.host || location.hostname === 'xfc.local') return '';
    raw = `${location.protocol === 'https:' ? 'wss:' : 'ws:'}//${location.host}/ws`;
  }
  if (!/^[a-z][a-z\d+.-]*:\/\//i.test(raw)) {
    raw = `${location?.protocol === 'https:' ? 'wss' : 'ws'}://${raw}`;
  }
  try {
    const url = new URL(raw);
    if (!['ws:', 'wss:', 'http:', 'https:'].includes(url.protocol)) return '';
    if (url.protocol === 'http:') url.protocol = 'ws:';
    if (url.protocol === 'https:') url.protocol = 'wss:';
    if (location?.protocol === 'https:' && url.protocol !== 'wss:') return '';
    if (!url.pathname || url.pathname === '/') url.pathname = '/ws';
    if (url.pathname !== '/ws') return '';
    url.hash = '';
    return url.toString();
  } catch {
    return '';
  }
}

/** Opens a WebSocket connection to the XFC relay and exposes small typed helpers. */
export function openOnlineConnection(url, { WebSocketClass = globalThis.WebSocket } = {}) {
  if (!url || typeof WebSocketClass !== 'function') throw new Error('O navegador não oferece WebSocket.');
  const socket = new WebSocketClass(url);
  const listeners = new Set();
  let state = 'connecting';
  let nextSeq = 1;
  let pendingInput = null;
  let inputTimer = 0;
  let opened = false;
  let rejectOpen;

  const openedPromise = new Promise((resolve, reject) => {
    rejectOpen = reject;
    socket.addEventListener('open', () => {
      opened = true;
      state = 'open';
      resolve();
      notify({ type: 'connected' });
    }, { once: true });
  });
  // Prevent an unobserved rejected promise while preserving the promise for callers.
  openedPromise.catch(() => {});

  function notify(message) {
    for (const listener of [...listeners]) {
      try { listener(message); } catch (error) { console.error('XFC online listener:', error); }
    }
  }
  function send(message) {
    if (state !== 'open' || socket.readyState !== WebSocketClass.OPEN) return false;
    socket.send(JSON.stringify(message));
    return true;
  }
  function flushInput() {
    if (inputTimer) clearTimeout(inputTimer);
    inputTimer = 0;
    if (!pendingInput) return false;
    const input = pendingInput;
    pendingInput = null;
    return send({ type: 'input', seq: nextSeq++, input });
  }

  socket.addEventListener('message', event => {
    try { notify(JSON.parse(String(event.data))); }
    catch { notify({ type: 'error', code: 'invalid-response', message: 'Resposta inválida do servidor.' }); }
  });
  socket.addEventListener('error', () => {
    if (!opened) {
      state = 'closed';
      rejectOpen?.(new Error('Não foi possível conectar ao servidor online. Confira o endereço e tente novamente.'));
    }
    notify({ type: 'transport-error' });
  });
  socket.addEventListener('close', event => {
    state = 'closed';
    if (!opened) rejectOpen?.(new Error('O servidor online encerrou a conexão antes de conectar.'));
    if (inputTimer) clearTimeout(inputTimer);
    pendingInput = null;
    notify({ type: 'disconnected', code: event.code, reason: event.reason || '' });
  });

  return {
    url,
    opened: openedPromise,
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    send,
    sendInput(input) {
      if (state !== 'open') return false;
      pendingInput = {
        moveX: Math.max(-1, Math.min(1, Number(input?.moveX) || 0)),
        moveZ: Math.max(-1, Math.min(1, Number(input?.moveZ) || 0)),
        sprint: Boolean(input?.sprint),
        shotCharge: Math.max(0, Math.min(1, Number(input?.shotCharge) || 0))
      };
      if (!inputTimer) inputTimer = setTimeout(flushInput, 34);
      return true;
    },
    sendAction(name, payload = {}) {
      flushInput();
      return send({ type: 'action', seq: nextSeq++, name, payload });
    },
    sendPieceOptions(options) {
      return send({ type: 'piece-options', options });
    },
    close() {
      if (inputTimer) clearTimeout(inputTimer);
      pendingInput = null;
      if (state !== 'closed') {
        state = 'closing';
        try { socket.close(1000, 'match-ended'); }
        catch { socket.terminate?.(); }
      }
      listeners.clear();
    },
    get state() { return state; },
    get isOpen() { return state === 'open'; }
  };
}
