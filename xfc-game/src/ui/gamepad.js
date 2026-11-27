// Suporte a controle Xbox e PlayStation, no navegador e no Android (WebView).
//
// "Tipo console": assim que um controle é detectado, os botões virtuais e o
// analógico de toque somem e só ficam o placar e o pause; os menus passam a
// ser navegados com o direcional/A e o B volta. O mapeamento segue o Gamepad
// Standard (o mesmo layout do Xbox e do DualShock/DualSense, que os
// navegadores normalizam automaticamente).

const STANDARD = {
  A: 0, B: 1, X: 2, Y: 3,
  LB: 4, RB: 5, LT: 6, RT: 7,
  BACK: 8, START: 9, L3: 10, R3: 11,
  UP: 12, DOWN: 13, LEFT: 14, RIGHT: 15,
  HOME: 16
};

const DEAD_ZONE = 0.18;
const REPEAT_DELAY = 0.34;   // segundos antes de repetir a navegação
const REPEAT_RATE = 0.11;

/** Família do controle pela identificação do navegador (só para os rótulos). */
export function padFamily(gamepad) {
  const id = String(gamepad?.id || '').toLowerCase();
  if (/dualsense|dualshock|playstation|sony|054c/.test(id)) return 'playstation';
  if (/xbox|xinput|045e/.test(id)) return 'xbox';
  return 'generic';
}

/** Rótulos dos botões na tela, no padrão da família do controle. */
export const PAD_LABELS = {
  playstation: { A: '✕', B: '○', X: '□', Y: '△', START: 'OPTIONS', BACK: 'SHARE' },
  xbox: { A: 'A', B: 'B', X: 'X', Y: 'Y', START: 'MENU', BACK: 'VIEW' },
  generic: { A: 'A', B: 'B', X: 'X', Y: 'Y', START: 'START', BACK: 'SELECT' }
};

export function padLabels(family) {
  return PAD_LABELS[family] || PAD_LABELS.generic;
}

/**
 * Leitor de controles. Chame `poll(dt)` a cada quadro: ele lê os gamepads,
 * move o foco dos menus e devolve as ações de jogo para quem chamar.
 *
 * - `onMenuCommand(name)`: `up`, `down`, `left`, `right`, `confirm`, `back`,
 *   `tabLeft`, `tabRight`.
 * - `setMenuMode(true)`: os direcionais andam pelo foco e o A clica no
 *   elemento focado (o mesmo que Enter no teclado).
 */
export function createGamepad({ onMenuCommand = () => {}, onActivity = () => {} } = {}) {
  let menuMode = false;
  // Estado por índice de controle: botões que já estavam apertados.
  const states = new Map();
  let connected = false;
  let family = 'generic';
  const listeners = new Set();

  function gamepads() {
    if (typeof navigator === 'undefined' || !navigator.getGamepads) return [];
    const list = navigator.getGamepads?.() || [];
    return Array.from(list).filter(pad => pad && pad.connected);
  }

  function notify() {
    for (const listener of listeners) listener({ connected, family });
  }

  function onChange(listener) {
    listeners.add(listener);
    listener({ connected, family });
    return () => listeners.delete(listener);
  }

  /** Conecta/desconecta e acorda o leitor no primeiro toque. */
  function refresh() {
    const pads = gamepads();
    const now = pads.length > 0;
    const nextFamily = now ? padFamily(pads[0]) : family;
    if (now !== connected || (now && nextFamily !== family)) {
      connected = now;
      family = now ? nextFamily : 'generic';
      notify();
    }
    return { connected, family };
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('gamepadconnected', refresh);
    window.addEventListener('gamepaddisconnected', refresh);
    // O Chrome só expõe o controle depois do primeiro botão: o toque no
    // gamepad dispara o evento, mas alguns WebViews não o emitem.
    window.addEventListener('pointerdown', refresh, { passive: true });
    window.addEventListener('keydown', refresh);
  }

  function isDown(pad, index) {
    const button = pad?.buttons?.[index];
    if (!button) return false;
    if (typeof button === 'object') return Boolean(button.pressed) || (button.value || 0) > 0.55;
    return Boolean(button);
  }

  function axis(pad, index) {
    const value = pad?.axes?.[index];
    return Number.isFinite(value) ? value : 0;
  }

  /** Botão acabou de ser pressionado neste quadro? */
  function pressedNow(state, pad, index, name) {
    const down = isDown(pad, index);
    const was = state.buttons.get(name) || false;
    state.buttons.set(name, down);
    return down && !was;
  }

  /** Repetição automática da navegação (segurar o direcional anda sozinho). */
  function repeat(state, name, down, dt) {
    if (!down) return false;
    const timer = state.repeat.get(name);
    if (!timer) {
      state.repeat.set(name, { wait: REPEAT_DELAY, held: 0 });
      return false; // o primeiro quadro já entregou a ação
    }
    timer.held += dt;
    if (timer.held >= (timer.wait > 0 ? timer.wait : REPEAT_RATE)) {
      timer.wait = 0;
      timer.held = 0;
      return true;
    }
    return false;
  }

  /**
   * Lê os controles. Devolve `{connected, family, move:{x,z}, sprint, commands}`
   * para a partida. Em `menuMode` também navega o DOM.
   */
  function poll(dt = 1 / 60, { enabled = true } = {}) {
    const pads = gamepads();
    if (!pads.length) {
      if (connected) { connected = false; family = 'generic'; notify(); }
      return { connected: false, family, move: { x: 0, z: 0 }, sprint: false, commands: [] };
    }
    if (!connected || padFamily(pads[0]) !== family) {
      connected = true;
      family = padFamily(pads[0]);
      notify();
    }
    const pad = pads[0];
    const state = states.get(pad.index) || { buttons: new Map(), repeat: new Map() };
    states.set(pad.index, state);

    // Analógico esquerdo + direcional: o que estiver mais longe manda.
    let x = axis(pad, 0);
    let z = -axis(pad, 1);
    let dx = 0, dz = 0;
    if (isDown(pad, STANDARD.LEFT)) dx -= 1;
    if (isDown(pad, STANDARD.RIGHT)) dx += 1;
    if (isDown(pad, STANDARD.UP)) dz += 1;
    if (isDown(pad, STANDARD.DOWN)) dz -= 1;
    if (Math.hypot(dx, dz) > 0) { x = dx; z = dz; }
    const magnitude = Math.hypot(x, z);
    if (magnitude < DEAD_ZONE) { x = 0; z = 0; }
    else {
      const scale = Math.min(1, (magnitude - DEAD_ZONE) / (1 - DEAD_ZONE)) / magnitude;
      x *= scale; z *= scale;
    }

    const commands = [];
    const edge = name => pressedNow(state, pad, STANDARD[name], name);

    if (menuMode) {
      if (!enabled) return { connected: true, family, move: { x: 0, z: 0 }, sprint: false, commands: [] };
      // Navegação de menu: direcional/analógico, A confirma, B volta.
      // O estado do direcional é próprio (não é botão físico): a primeira
      // leitura dispara a ação e a repetição só entra depois do atraso.
      state.nav ||= new Map();
      const nav = (name, down) => {
        const was = state.nav.get(name) || false;
        state.nav.set(name, down);
        if (down && !was) { onMenuCommand(name); return; }
        if (down && repeat(state, name, true, dt)) onMenuCommand(name);
        if (!down && was) state.repeat.delete(name);
      };
      nav('up', isDown(pad, STANDARD.UP) || z > 0.55);
      nav('down', isDown(pad, STANDARD.DOWN) || z < -0.55);
      nav('left', isDown(pad, STANDARD.LEFT) || x < -0.55);
      nav('right', isDown(pad, STANDARD.RIGHT) || x > 0.55);
      if (edge('A')) onMenuCommand('confirm');
      if (edge('B')) onMenuCommand('back');
      if (edge('LB')) onMenuCommand('tabLeft');
      if (edge('RB')) onMenuCommand('tabRight');
      if (edge('START')) onMenuCommand('pause');
      if (edge('BACK')) onMenuCommand('back');
      return { connected: true, family, move: { x: 0, z: 0 }, sprint: false, commands: [] };
    }

    // Jogo: A passe, Y chute (carregado), X enfiada, B carrinho, LB/Tab troca
    // de jogador, RT/R2 corrida.
    const aDown = isDown(pad, STANDARD.A);
    if (aDown && !state.passStarted) {
      state.passStarted = performance.now();
      state.passFired = false;
    }
    if (state.passStarted && !state.passFired) {
      const elapsed = performance.now() - state.passStarted;
      const charge = Math.max(0.12, Math.min(1, (elapsed - 120) / 760));
      if (!aDown) {
        state.passFired = true;
        state.passStarted = null;
        commands.push({ name: 'pass', payload: { strength: charge, lob: z > 0.45, kind: z > 0.45 ? 'lob' : 'normal' } });
      }
    }
    const xDown = isDown(pad, STANDARD.X);
    if (xDown && !state.throughStarted) {
      state.throughStarted = performance.now();
      state.throughFired = false;
    }
    if (state.throughStarted && !state.throughFired) {
      const elapsed = performance.now() - state.throughStarted;
      const charge = Math.max(0.22, Math.min(1, (elapsed - 120) / 760));
      if (!xDown) {
        state.throughFired = true;
        state.throughStarted = null;
        commands.push({ name: 'lob', payload: { strength: charge } });
      }
    }
    if (edge('B')) commands.push('tackle');
    if (edge('LB')) commands.push('switch');
    if (edge('BACK')) commands.push('switch');
    if (edge('START')) commands.push('pause');
    const sprint = isDown(pad, STANDARD.RT) || isDown(pad, STANDARD.RB);
    // Chute carregado: Y pressionado e a força cresce no tempo.
    let shotCharge = 0;
    const yDown = isDown(pad, STANDARD.Y);
    if (yDown && !state.shootStarted) {
      state.shootStarted = performance.now();
      state.shootFired = false;
    }
    if (state.shootStarted && !state.shootFired) {
      const elapsed = performance.now() - state.shootStarted;
      const charge = Math.max(0.25, Math.min(1, (elapsed - 120) / 760));
      shotCharge = charge;
      if (typeof onActivity === 'function') onActivity({ charging: charge });
      if (!yDown) {
        state.shootFired = true;
        state.shootStarted = null;
        commands.push({ name: 'shoot', payload: { strength: charge, kind: charge >= 1 ? 'power' : 'normal' } });
      }
    }
    return { connected: true, family, move: { x, z }, sprint, commands, charging: shotCharge };
  }

  return {
    get connected() { return connected; },
    get family() { return family; },
    get labels() { return padLabels(family); },
    setMenuMode(value) { menuMode = Boolean(value); },
    get menuMode() { return menuMode; },
    onChange,
    refresh,
    poll,
    /** Zera os botões lidos (usado ao pausar e nos testes). */
    reset() {
      for (const state of states.values()) {
        state.buttons.clear();
        state.repeat.clear();
        state.nav?.clear();
        state.shootStarted = null;
        state.shootFired = false;
        state.passStarted = null;
        state.passFired = false;
        state.throughStarted = null;
        state.throughFired = false;
      }
    }
  };
}
