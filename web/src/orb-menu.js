// O anel de 10 apps — agora os apps SOLTOS no ambiente, cada um no seu espaço.
//
// Pedido do usuário, palavra por palavra (depois de ver a janelinha):
//
//   "Não e pra ser uma janelinha flutuanteeeeeeeeeeeeeee, tira a barrinha abaixo dela, aonde aparece
//    giroscopio ativo, o negócio de aumentar e diminuir brilho e a barrinha branca pra mover remove,
//    e os apps tem que ter o próprio espaço, não em dentro de uma janelinha flutuante"
//
// Traduzido em comportamento (e é assim que está feito agora):
//   1. NENHUMA moldura visível: sem barra de status, sem ✕, sem linha branca embaixo, sem barra de
//      brilho, sem barra de cinema, sem as telinhas de encaixe. Só os dez ícones no ar;
//   2. os apps ficam soltos no ambiente escurecido, cada um no seu espaço (3 em cima, 4 no meio,
//      3 embaixo), como no print do usuário;
//   3. a dock NÃO some: ela continua na cena, apagada atrás dos apps, e as mãos são o último passe
//      do render nativo, então continuam por cima de tudo para escolher o app com a pinça;
//   4. fechar: o mesmo botão da dock (que agora alterna) ou o voltar do Android — nada de ✕ no meio
//      dos apps;
//   5. os ícones e nomes são os do NextVR + os apps do Android.
import { on, setSceneDim } from './core.js';
import { open, close, wins, focus, updateWindowsDepthLayering } from './windows.js';

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
// A caixa é a do Spatial App (1040x660) e NÃO pode passar disso: o atlas nativo corta qualquer
// janela em 660 px de altura, então uma janelinha mais alta chegaria no headset com a barra de baixo
// fatiada. Os ícones maiores ("APPS MAIORES E MAIS SEPARADOS", print do usuário) cabem nela folgados
// porque a folga extra vai para os lados, onde há espaço de sobra.
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
 * A cor do brilho em volta do ícone: "o raio do next" (print do usuário) — o halo de cada app sai da
 * PRÓPRIA cor dele, como nos ícones do NextVR, em vez de um brilho azul genérico. Quando o app não tem
 * cor (só a capa do Android), volta o azul claro da referência.
 */
export function glowOf(bg) {
  const text = String(bg || '');
  const hex = text.match(/#([0-9a-f]{3}|[0-9a-f]{6})\b/i);
  if (!hex) return 'rgba(150,190,255,.30)';
  let h = hex[1];
  if (h.length === 3) h = h.split('').map(c => c + c).join('');
  const r = parseInt(h.slice(0, 2), 16), g = parseInt(h.slice(2, 4), 16), b = parseInt(h.slice(4, 6), 16);
  // Halo visível sobre o passthrough escuro sem virar um quadrado de luz: 45% de alfa.
  return `rgba(${r},${g},${b},.45)`;
}

/**
 * Um ícone: o quadrado arredondado com a capa (ou a inicial) e o NOME EMBAIXO, como na referência.
 * Nada de posição absoluta: as fileiras são o layout, e o texto é parte do ícone.
 */
function tileHtml(entry, index) {
  const label = String(entry.label || entry.key || '');
  const bg = entry.bg || ORB_PALETTE[index % ORB_PALETTE.length];
  // O app do Android chega só com o ícone: o halo dele é o verde do sistema, o mesmo do selo.
  const glow = entry.android ? 'rgba(34,197,94,.5)' : glowOf(bg);
  const inner = entry.img
    ? `<img src="${esc(entry.img)}" alt="" draggable="false" onerror="this.remove()">`
    : `<span class="orb-glyph">${esc(entry.glyph || label.trim().slice(0, 1).toUpperCase() || '•')}</span>`;
  return `<button type="button" class="orb-app${entry.android ? ' orb-app--android' : ''}"
      data-orb-app="${esc(entry.key)}"
      ${entry.android ? 'data-orb-android="1"' : ''}
      style="--i:${index};--orb-bg:${esc(bg)};--orb-glow:${esc(glow)}"
      title="${esc(label)}${entry.android ? ' · Android' : ''}">
      ${inner}
      ${entry.android ? '<i class="orb-badge" aria-hidden="true">A</i>' : ''}
      <span class="orb-label">${esc(label)}</span>
    </button>`;
}

/**
 * O miolo do anel: SÓ os dez ícones, em três fileiras (3/4/3). Nada de barra de status, nada de ✕,
 * nada de linha branca embaixo: os apps ficam soltos no ambiente, cada um no seu espaço.
 */
export function orbMarkup(entries = orbEntries(), pageIndex = page) {
  const pages = orbPages(entries);
  page = Math.max(0, Math.min(pages.length - 1, pageIndex | 0));
  const pageItems = pages[page];
  // As fileiras do desenho são fixas (3/4/3); com menos de dez apps as últimas casas ficam vazias.
  const rows = ORB_ROWS.map(row => `<div class="orb-row">${
    row.map(i => (pageItems[i] ? tileHtml(pageItems[i], i) : '<span class="orb-slot"></span>')).join('')
  }</div>`).join('');
  return `
    <div class="orb-root" data-orb-root="1" data-page="${page}">
      <div class="orb-grid" data-orb-grid="1">${rows}</div>
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

/** O que fazer com cada peça do anel: só existem apps. Um lugar só para o toque da mão e do mouse. */
function act(hit, key, isAndroid) {
  if (hit !== 'app') return;
  launchTarget(() => {
    if (isAndroid) providers.launchAndroid(String(key).replace(/^app:/, ''));
    else providers.launchOwn(key);
  });
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
    // Sem barra embaixo: só existem ícones. Se o hit-test devolve o contêiner, vale o ponto tocado.
    const byPoint = !tile
      ? [...host.querySelectorAll('[data-orb-app]')].find(t => insideRect(t, event.clientX, event.clientY)) || null
      : null;
    const chosen = tile || byPoint;
    if (typeof window !== 'undefined') {
      window.__orbLastHit = chosen ? 'app:' + chosen.dataset.orbApp : 'outside';
    }
    if (chosen) act('app', chosen.dataset.orbApp, chosen.dataset.orbAndroid === '1');
  };

  // As repinturas (página nova, lista do Android chegando) não podem empilhar ouvintes de arrasto.
  if (!first) return;
  let dragFrom = null;
  host.addEventListener('pointerdown', event => {
    if (event.target.closest?.('[data-orb-app]')) return;
    dragFrom = { x: event.clientX, y: event.clientY };
  });
  host.addEventListener('pointerup', event => {
    if (!dragFrom) return;
    const dx = event.clientX - dragFrom.x;
    dragFrom = null;
    if (Math.abs(dx) > 48) turnPage(dx < 0 ? 1 : -1);
  });
}

/** Vira a página do anel com a animação de rolagem (a roda e o arrasto chamam isto). */
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
  updateWindowsDepthLayering(win);
}

/**
 * Abre o anel: os dez apps soltos no ambiente, sem nenhuma moldura. A janela que os carrega é
 * invisível e NÃO tem controles — handle, alça de tamanho, barra de brilho, barra de cinema e as
 * telinhas de encaixe são REMOVIDOS do documento (não basta esconder: o CSS deles usa display
 * inline-flex e vence o atributo `hidden`). A dock continua na cena, apagada atrás dos apps, e as
 * mãos são o último passe do render nativo, então escolhem o app por cima de tudo.
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
    // Nada de controle em volta dos apps. `remove()` e não `hidden`: as barras têm display próprio no
    // CSS (inline-flex), que vence o atributo `hidden` — era por isso que a barra de brilho e as
    // telinhas de encaixe continuavam aparecendo no headset.
    for (const part of [win.handle, win.resizeHandle, win.brightnessBar, win.cinemaBar,
      win.predefinedSlotsBar, win.grabArc, win.el?.querySelector?.('.win-bar')]) {
      try { part?.remove(); } catch {}
    }
    win.pinned = false;
    win.el.classList.add('orb-shell');
    paintOrb();
    dim(true);
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

/* A lista do aparelho pode chegar com o anel aberto. */
on('appsState', () => { if (orbOpen()) paintOrb(); });
on('lang', () => { if (orbOpen()) paintOrb(); });
/* Fechar o anel por qualquer outro caminho (o voltar do Android, um app que entrou no lugar) devolve
 * o ambiente ao normal. */
on('wins', () => { if (!orbOpen()) dim(false); });

if (typeof window !== 'undefined') {
  window.nextvrOpenOrbMenu = openOrbMenu;
  window.nextvrCloseOrbMenu = closeOrbMenu;
  window.nextvrOrbPage = turnPage;
}
