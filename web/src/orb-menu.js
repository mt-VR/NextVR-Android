// O anel de 10 apps — agora uma JANELINHA FLUTUANTE INVISÍVEL, como a UI dos apps espaciais.
//
// Pedido do usuário, palavra por palavra, depois de ver o anel na HUD:
//
//   "Tá a mesma merda, faz ele tipo aquele ui dos apps spaciais, mas só quando clicar aonde era a
//    'antiga biblioteca de apps' faz esses apps em uma janelinha, porém Deixa a janelinha flutuante
//    invisível se barrinha branca pra mover, e tira aquele troço da dock sumir, já sei, faz melhor,
//    adiciona uma opção na dock que aparece 3 bolinhas em cima, 4 no meio, e 3 embaixo, do lado
//    esquerdo da biblioteca de apps, sem afetar na interface gráfica, e quando clicarmos, a dock
//    fica por baixo de tudo, porém o hand tracking fica por cima de tudo pra escolher um app, e faz
//    IGUAL dessa screenshot, só os apps e ícones não, os apps e ícones são o do jogo+android".
//
// Traduzido em comportamento (e é assim que está feito agora):
//   1. é uma JANELA de verdade, com o mesmo vidro invisível do Spatial App: sem moldura, sem
//      barrinha branca para mover, sem fundo preto — o mundo escurecido aparece atrás;
//   2. dez ícones com o nome embaixo, como na referência: 3 em cima, 4 no meio, 3 embaixo;
//   3. a DOCK NÃO SOME mais: ela fica por baixo de tudo (a janela nasce na frente e é a mais
//      próxima), e as mãos continuam desenhadas por cima de tudo (o passe das mãos é o último do
//      render nativo), então dá para escolher o app com a pinça;
//   4. a barra de status embaixo é a da screenshot: um ponto, o texto, o relógio, o perfil e a
//      linha branca fina — mais o chip do GIROSCÓPIO, que já existia;
//   5. os ícones e nomes são os do NextVR + os apps do Android (nada da interface do Android).
import { on, setSceneDim, settings as S, save, startGyro, gyroLive, toast } from './core.js';
import { getDeviceStatus, open, close, wins, focus, updateWindowsDepthLayering } from './windows.js';

/** Os dez lugares, em três fileiras: 3 em cima, 4 no meio, 3 embaixo. */
export const ORB_ROWS = Object.freeze([
  Object.freeze([0, 1, 2]),
  Object.freeze([3, 4, 5, 6]),
  Object.freeze([7, 8, 9]),
]);

/** Posições em % da caixa (mantidas para quem já lê a tabela: 3/4/3). */
export const ORB_LAYOUT = Object.freeze(ORB_ROWS.flatMap((row, r) =>
  row.map((_, i) => ({
    x: Math.round(50 + (i - (row.length - 1) / 2) * (row.length === 4 ? 25 : 28)),
    y: r === 0 ? 16 : r === 1 ? 50 : 84,
  }))));

/** Tamanho da janela (a mesma caixa do Spatial App: é ela que dá o enquadramento da referência). */
export const ORB_W = 1040;
export const ORB_H = 660;

/** Quantos apps do ring cabem por página: dez, como no desenho ("só aparece 10 ícones"). */
export const ORB_PAGE = 10;

/** Quantos apps do Android cabem no anel; o resto dos 10 lugares é do NextVR. */
export const ORB_ANDROID_SLOTS = 4;

export const ORB_WIN = 'orb-apps';
/** Quanto o ambiente escurece com a janelinha aberta: dá para ver o mundo, mas os apps saltam. */
export const ORB_DIM = 0.55;

/** Cores dos tiles sem capa, na ordem do círculo. */
export const ORB_PALETTE = Object.freeze([
  'linear-gradient(160deg,#8b5cf6 0%,#4c1d95 100%)',
  'linear-gradient(160deg,#38bdf8 0%,#075985 100%)',
  'linear-gradient(160deg,#34d399 0%,#065f46 100%)',
  'linear-gradient(160deg,#fb923c 0%,#9a3412 100%)',
  'linear-gradient(160deg,#f472b6 0%,#9d174d 100%)',
  'linear-gradient(160deg,#2dd4bf 0%,#115e59 100%)',
  'linear-gradient(160deg,#facc15 0%,#a16207 100%)',
  'linear-gradient(160deg,#818cf8 0%,#3730a3 100%)',
  'linear-gradient(160deg,#f87171 0%,#991b1b 100%)',
  'linear-gradient(160deg,#22d3ee 0%,#155e75 100%)',
]);

let providers = {
  /** Apps do próprio NextVR: [{ id, name, img?, glyph?, bg? }] */
  own: () => [],
  /** Apps do Android instalados: [{ pkg, label, icon? }] */
  android: () => [],
  /** Abre um app do NextVR pelo id. */
  launchOwn: () => {},
  /** Abre um app do Android pelo pacote. */
  launchAndroid: () => {},
  /** Pede a lista do aparelho (Shizuku); opcional. */
  refreshAndroid: null,
  /** Nome/avatar/verificado do jogador, para o rodapé do anel. */
  profile: () => ({ name: '', avatar: '', verified: false }),
};

export function installOrbMenu(next = {}) {
  providers = { ...providers, ...next };
  if (orbOpen()) paintOrb();
  return providers;
}

const esc = value => String(value == null ? '' : value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** A janela do anel (é uma janela de verdade: id `orb-apps`). */
export const orbWindow = () => wins.find(w => w.id === ORB_WIN) || null;
export const orbOpen = () => !!orbWindow();

/**
 * Todos os apps do anel, na ordem em que aparecem: os apps do Android primeiro (é o que o usuário não
 * tem à mão sem sair do VR) e depois os do NextVR. Sem a lista do Android (Shizuku desligado/sem
 * permissão) o anel se enche só com apps do NextVR — nunca fica com buraco.
 */
export function orbEntries() {
  let own = [], android = [];
  try { own = (providers.own() || []).filter(Boolean); } catch { own = []; }
  try { android = (providers.android() || []).filter(Boolean); } catch { android = []; }
  const phones = android.slice(0, ORB_ANDROID_SLOTS).map(app => ({
    key: 'app:' + app.pkg,
    label: app.label || app.pkg,
    img: app.icon || '',
    android: true,
  }));
  const mine = own.map(app => ({
    key: app.id,
    label: app.name || app.label || app.id,
    img: app.img || '',
    glyph: app.glyph || '',
    bg: app.bg || '',
    android: false,
  }));
  return [...phones, ...mine];
}

/** Os apps divididos em páginas de dez. */
export function orbPages(entries = orbEntries()) {
  const pages = [];
  for (let i = 0; i < entries.length; i += ORB_PAGE) pages.push(entries.slice(i, i + ORB_PAGE));
  return pages.length ? pages : [[]];
}

let page = 0;
export const orbPageNow = () => page;

/**
 * Um ícone: o quadrado arredondado com a capa (ou a inicial) e o NOME EMBAIXO, como na referência.
 * Nada de posição absoluta: as fileiras são o layout, e o texto é parte do ícone.
 */
function tileHtml(entry, index) {
  const label = String(entry.label || entry.key || '');
  const bg = entry.bg || ORB_PALETTE[index % ORB_PALETTE.length];
  const inner = entry.img
    ? `<img src="${esc(entry.img)}" alt="" draggable="false" onerror="this.remove()">`
    : `<span class="orb-glyph">${esc(entry.glyph || label.trim().slice(0, 1).toUpperCase() || '•')}</span>`;
  return `<button type="button" class="orb-app${entry.android ? ' orb-app--android' : ''}"
      data-orb-app="${esc(entry.key)}"
      ${entry.android ? 'data-orb-android="1"' : ''}
      style="--i:${index};--orb-bg:${esc(bg)}"
      title="${esc(label)}${entry.android ? ' · Android' : ''}">
      ${inner}
      ${entry.android ? '<i class="orb-badge" aria-hidden="true">A</i>' : ''}
      <span class="orb-label">${esc(label)}</span>
    </button>`;
}

function clockNow() {
  const status = (() => { try { return getDeviceStatus(); } catch { return {}; } })();
  const now = new Date();
  const pad = n => String(n).padStart(2, '0');
  const own = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
  const fromDock = String(status.time || '');
  // 24 h sempre (o toLocaleTimeString de alguns aparelhos devolve "03:15 AM"): a hora do jogador é a
  // do relógio do aparelho, no mesmo formato para todo mundo.
  const time = /^\d{1,2}:\d{2}$/.test(fromDock) ? fromDock : own;
  const battery = Number.isFinite(status.batteryLevel) ? Math.round(status.batteryLevel) : null;
  return { time, battery, charging: !!status.charging, online: status.online !== false };
}

/** Estado do giroscópio para o chip da barra: ligado/desligado pelo usuário e vivo ou não no
 *  aparelho. Desligado, o olhar volta a ser arrasto — é o que o botão faz. */
export function gyroNow() {
  const on_ = S.gyro !== 0;
  const live = (() => { try { return gyroLive() === true; } catch { return false; } })();
  return { on: on_, live, label: !on_ ? 'DESLIGADO' : live ? 'ATIVO' : 'AGUARDANDO' };
}

function gyroChipHtml() {
  const g = gyroNow();
  return `<button type="button" class="orb-chip orb-chip--gyro${g.on ? (g.live ? ' is-on' : '') : ' is-off'}"
      data-orb-gyro="1" aria-pressed="${g.on}" title="Giroscópio: ${g.label}. Toque para ${g.on ? 'desligar' : 'ligar'}.">
      <span class="orb-chip-dot" aria-hidden="true"></span>
      <span class="orb-chip-label">GIROSCÓPIO</span>
      <b>${g.label}</b>
    </button>`;
}

/** Liga/desliga o giroscópio pelo chip da barra (e liga o sensor de verdade ao ligar de novo). */
function toggleGyro() {
  S.gyro = S.gyro === 0 ? 1 : 0;
  save(S);
  if (S.gyro !== 0) { try { Promise.resolve(startGyro()).catch(() => {}); } catch {} }
  try { toast(S.gyro !== 0 ? 'Giroscópio: ativo' : 'Giroscópio: desligado · arraste para olhar'); } catch {}
  paintOrb();
}

function meHtml() {
  let me = { name: '', avatar: '', verified: false };
  try { me = providers.profile() || me; } catch {}
  const name = String(me.name || 'Você');
  const avatar = me.avatar
    ? `<img src="${esc(me.avatar)}" alt="" draggable="false">`
    : `<span class="orb-me-initial">${esc(name.trim().slice(0, 1).toUpperCase() || '•')}</span>`;
  return `<div class="orb-me" data-orb-me="1">
      <span class="orb-me-av">${avatar}${me.verified ? '<i class="orb-me-check" aria-hidden="true">✓</i>' : ''}</span>
      <span class="orb-me-name">${esc(name)}</span>
    </div>`;
}

function clockHtml() {
  const c = clockNow();
  const bat = c.battery == null ? '' : `<span class="orb-clock-bat">${c.charging ? '⚡' : ''}${c.battery}%</span>`;
  return `<div class="orb-clock" data-orb-clock="1"><span class="orb-clock-time">${esc(c.time)}</span>${bat}</div>`;
}

/** O miolo da janelinha: as três fileiras + a barra de status da referência. */
export function orbMarkup(entries = orbEntries(), pageIndex = page) {
  const pages = orbPages(entries);
  page = Math.max(0, Math.min(pages.length - 1, pageIndex | 0));
  const pageItems = pages[page];
  // As fileiras do desenho são fixas (3/4/3); com menos de dez apps as últimas casas ficam vazias.
  const rows = ORB_ROWS.map(row => `<div class="orb-row">${
    row.map(i => (pageItems[i] ? tileHtml(pageItems[i], i) : '<span class="orb-slot"></span>')).join('')
  }</div>`).join('');
  const total = entries.length;
  return `
    <div class="orb-root" data-orb-root="1" data-page="${page}">
      <button type="button" class="orb-close" data-orb-close="1" aria-label="Fechar" title="Fechar">✕</button>
      <div class="orb-grid" data-orb-grid="1">${rows}</div>
      <div class="orb-bar" data-orb-bar="1">
        <div class="orb-bar-side orb-bar-left">
          <span class="orb-dot" aria-hidden="true"></span>
          <span class="orb-bar-text" data-orb-count>${pageItems.length} de ${total}</span>
          ${total > ORB_PAGE ? `<button type="button" class="orb-pager" data-orb-page="-1" aria-label="Página anterior" title="Página anterior">‹</button>
          <button type="button" class="orb-pager" data-orb-page="1" aria-label="Próxima página" title="Próxima página">›</button>` : ''}
          <button type="button" class="orb-chip orb-chip--all" data-orb-all="1" title="Todos os apps do NextVR">
            <span class="orb-chip-ico" aria-hidden="true">▦</span>
            <span class="orb-chip-label">TODOS</span>
          </button>
          ${gyroChipHtml()}
        </div>
        <div class="orb-bar-side orb-bar-right">
          ${meHtml()}
          ${clockHtml()}
        </div>
      </div>
      ${pages.length > 1 ? `<div class="orb-dots">${pages.map((_, i) => `<i class="${i === page ? 'on' : ''}"></i>`).join('')}</div>` : ''}
      <span class="orb-home-line" aria-hidden="true"></span>
    </div>`;
}

/**
 * Abre o app escolhido. Fechar a janelinha e abrir o app são passos INDEPENDENTES de propósito: um
 * problema ao fechar nunca pode engolir o toque do usuário. O erro fica em `window.__orbLastError`.
 */
function launchTarget(invoke) {
  if (typeof window !== 'undefined') window.__orbLaunchCalls = (window.__orbLaunchCalls || 0) + 1;
  try {
    closeOrbMenu();
  } catch (error) {
    try { dim(false); } catch { try { setSceneDim(0); } catch {} }
    remember(error);
  }
  try {
    invoke();
  } catch (error) {
    remember(error);
  }
}

function remember(error) {
  const text = String((error && (error.stack || error.message)) || error || 'erro desconhecido');
  if (typeof window !== 'undefined') window.__orbLastError = text;
  if (typeof console !== 'undefined') console.error('orb-menu:', error);
}

/** Um ponto (x, y) está dentro da caixa de `el`? Usado quando o toque chega no contêiner. */
function insideRect(el, x, y) {
  if (!el || !Number.isFinite(x) || !Number.isFinite(y)) return false;
  const r = el.getBoundingClientRect();
  return r.width > 0 && r.height > 0 && x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
}

/** O que fazer com cada peça do anel. Um lugar só: o clique da mão, do mouse e das setas entra aqui. */
function act(hit, key, isAndroid) {
  if (hit === 'close') { closeOrbMenu(); return; }
  if (hit === 'all') { launchTarget(() => providers.launchOwn('library')); return; }
  if (hit === 'app') {
    launchTarget(() => {
      if (isAndroid) providers.launchAndroid(String(key).replace(/^app:/, ''));
      else providers.launchOwn(key);
    });
  }
}

/**
 * O toque no anel: delegado no host. Quando o hit-test devolve o PRÓPRIO contêiner (acontece com o
 * toque da mão, que escolhe o elemento mais fundo de uma superfície), quem decide é o ponto tocado —
 * sem isso, um toque no meio do anel não abria nada.
 */
function wireOrb(host) {
  const first = host.dataset.orbWired !== '1';
  host.dataset.orbWired = '1';
  host.onclick = event => {
    const target = event.target instanceof Element ? event.target : null;
    const tile = target?.closest('[data-orb-app]');
    const all = target?.closest('[data-orb-all]');
    const shut = target?.closest('[data-orb-close]');
    const pager = target?.closest('[data-orb-page]');
    if (pager) { turnPage(Number(pager.dataset.orbPage) || 1); return; }
    if (target?.closest('[data-orb-gyro]')) { toggleGyro(); return; }
    let byPointTile = null, byPointAll = false, byPointClose = false;
    if (!tile && !all && !shut) {
      const x = event.clientX, y = event.clientY;
      if (insideRect(host.querySelector('[data-orb-all]'), x, y)) byPointAll = true;
      else if (insideRect(host.querySelector('[data-orb-close]'), x, y)) byPointClose = true;
      else byPointTile = [...host.querySelectorAll('[data-orb-app]')].find(t => insideRect(t, x, y)) || null;
    }
    if (typeof window !== 'undefined') {
      window.__orbLastHit = tile ? 'app:' + tile.dataset.orbApp
        : all ? 'all'
        : shut ? 'close'
        : byPointAll ? 'all(por ponto)'
        : byPointClose ? 'close(por ponto)'
        : byPointTile ? 'app(por ponto):' + byPointTile.dataset.orbApp : 'outside';
    }
    const chosen = tile || byPointTile;
    if (chosen) {
      act('app', chosen.dataset.orbApp, chosen.dataset.orbAndroid === '1');
      return;
    }
    if (all || byPointAll) { act('all'); return; }
    if (shut || byPointClose) act('close');
  };

  // As setas/roda repintam o anel várias vezes: os ouvintes de arrasto são uma vez só, senão cada
  // repintura empilhava mais um e a mesma passada virava três páginas.
  if (!first) return;
  let dragFrom = null;
  host.addEventListener('pointerdown', event => {
    if (event.target.closest?.('[data-orb-app],[data-orb-all],[data-orb-close],[data-orb-page],[data-orb-gyro]')) return;
    dragFrom = { x: event.clientX, y: event.clientY };
  });
  host.addEventListener('pointerup', event => {
    if (!dragFrom) return;
    const dx = event.clientX - dragFrom.x;
    dragFrom = null;
    if (Math.abs(dx) > 48) turnPage(dx < 0 ? 1 : -1);
  });
}

/** Vira a página do anel com a animação de rolagem (as setas da barra e a roda chamam isto). */
export function turnPage(step = 1) {
  const win = orbWindow();
  if (!win) return page;
  const pages = orbPages();
  if (pages.length < 2) return page;
  const next = (page + (Number(step) || 1) + pages.length) % pages.length;
  const direction = (Number(step) || 1) > 0 ? 'next' : 'prev';
  page = next;
  paintOrb();
  const grid = win.el.querySelector('[data-orb-grid]');
  if (grid) {
    grid.classList.add('is-' + direction);
    setTimeout(() => grid.classList.remove('is-next', 'is-prev'), 420);
  }
  return page;
}

export function paintOrb() {
  const win = orbWindow();
  if (!win) return;
  // O conteúdo mora no host que foi entregue à janela (`orb-win-host`), não na `.win-body`: repintar
  // não pode arrancar o próprio host da árvore.
  const host = win.el.querySelector('.orb-win-host') || win.el.querySelector('.win-body') || win.el;
  host.innerHTML = orbMarkup(undefined, page);
  wireOrb(host);
  paintClock();
  updateWindowsDepthLayering(win);
}

/* O relógio do rodapé corre junto com o do aparelho (o mesmo publishDeviceStatus da dock). */
let clockTimer = null;
function paintClock() {
  const win = orbWindow();
  const box = win?.el.querySelector('[data-orb-clock]');
  if (!box) return;
  const c = clockNow();
  box.innerHTML = `<span class="orb-clock-time">${esc(c.time)}</span>`
    + (c.battery == null ? '' : `<span class="orb-clock-bat">${c.charging ? '⚡' : ''}${c.battery}%</span>`);
}
function startClock() {
  stopClock();
  clockTimer = setInterval(paintClock, 1000);
}
function stopClock() {
  if (clockTimer) { clearInterval(clockTimer); clockTimer = null; }
}

/**
 * Abre o anel. É uma JANELA de verdade — o mesmo vidro invisível do Spatial App (`chrome:false`, sem
 * barrinha branca, sem moldura, fundo transparente) —, e não mais uma camada da HUD. A dock NÃO sai
 * de cena: ela continua lá, mais longe, e é o painel desta janela que fica na frente; as mãos são o
 * último passe do render, então continuam por cima de tudo para escolher o app.
 */
export function openOrbMenu() {
  if (typeof window !== 'undefined') window.__orbOpenCalls = (window.__orbOpenCalls || 0) + 1;
  try {
    const existing = orbWindow();
    if (existing) {
      if (existing.hidden) existing.setHidden(false);
      paintOrb();
      focus(existing);
      dim(true);
      return existing;
    }
    page = 0;
    const body = document.createElement('div');
    body.className = 'orb-win-host';
    const win = open({
      id: ORB_WIN,
      title: 'Apps',
      node: body,
      w: ORB_W,
      h: ORB_H,
      chrome: false,
      resizable: false,
    });
    win.handle.hidden = true;
    win.resizeHandle.hidden = true;
    win.pinned = false;
    win.el.classList.add('orb-shell');
    paintOrb();
    dim(true);
    startClock();
    updateWindowsDepthLayering(win);
    // Os apps do Android chegam depois (a lista é lida do aparelho): o anel se redesenha ao chegar.
    try { providers.refreshAndroid?.(); } catch (error) { remember(error); }
    return win;
  } catch (error) {
    remember(error);
    throw error;
  }
}

export function closeOrbMenu() {
  if (typeof window !== 'undefined') window.__orbCloseCalls = (window.__orbCloseCalls || 0) + 1;
  try {
    const win = orbWindow();
    if (win) close(win);
  } finally {
    // Sempre, mesmo se o fechamento falhar no meio: o escurecimento não pode ficar preso.
    stopClock();
    dim(false);
  }
}

let dimmed = false;
function dim(on_) {
  const value = !!on_;
  // Marca no <html> que o anel está aberto: o CSS usa isso para o brilho dos ícones, e nada mais
  // (a dock NÃO é escondida — pedido do usuário).
  if (typeof document !== 'undefined') {
    if (value) document.documentElement.dataset.orbOpen = '1';
    else delete document.documentElement.dataset.orbOpen;
  }
  if (dimmed === value) return;
  dimmed = value;
  // O véu da WebView (para o modo navegador) e o escurecimento do GL nativo (que é quem desenha o
  // mundo dentro do headset) andam juntos: um número só.
  setSceneDim(value ? ORB_DIM : 0);
  try { window.NativeXR?.setSceneDim?.(value ? ORB_DIM : 0); } catch {}
}

/* Rolagem: a roda do mouse/trackpad passa as páginas com animação. O ouvinte é do documento (e não
 * da janela), porque a página recebe a roda no navegador e no headset. */
function onOrbWheel(event) {
  if (!orbOpen()) return;
  if (Math.abs(event.deltaY) < 6 && Math.abs(event.deltaX) < 6) return;
  event.preventDefault();
  turnPage((event.deltaY || event.deltaX) > 0 ? 1 : -1);
}
if (typeof document !== 'undefined') document.addEventListener('wheel', onOrbWheel, { passive: false });

/* O relógio/bateria do rodapé acompanha o aparelho. */
on('device-status', () => { if (orbOpen()) paintClock(); });
/* O giroscópio pode ficar "vivo" depois do anel aberto (permissão, primeiro evento do sensor): o
 * chip da barra acompanha em vez de ficar mentindo "AGUARDANDO". */
on('gyro', () => { if (orbOpen()) paintOrb(); });
/* A lista do aparelho pode chegar com o anel aberto. */
on('appsState', () => { if (orbOpen()) paintOrb(); });
on('lang', () => { if (orbOpen()) paintOrb(); });
/* Fechar a janela por qualquer outro caminho (o ✕ da própria janela, um app que a substituiu)
 * devolve o ambiente ao normal. */
on('wins', () => { if (!orbOpen()) { stopClock(); dim(false); } });

if (typeof window !== 'undefined') {
  window.nextvrOpenOrbMenu = openOrbMenu;
  window.nextvrCloseOrbMenu = closeOrbMenu;
  window.nextvrOrbPage = turnPage;
}
