// O anel de 10 apps — pedido do usuário, textualmente:
//
//   "bota aquela opção de 10 apps que aparece ... os negócios de 10 apps e assim, o ambiente escurece
//    mas ainda dá pra vê e os apps aparecem gigantes na tela, mas esse fundo que aparece
//    configurações, só bugou, não é pra botar esse fundo de configurações"
//
// e, depois de ver o resultado no aparelho, com o desenho na mão:
//
//   "PEGOS APPS GIGANTES ... → a opção de voltar a dock ... → tudo escurece um pouco → rolagem para
//    avançar as páginas durante → só aparece 10 ícones → → hora e perfil sincronizado com a do
//    jogador → animação de rolagem".
//
// Traduzido em comportamento (e é assim que está feito):
//   1. a bolinha da dock abre uma CAMADA na HUD — não é janela: nada de vidro/caixa preta atrás, e
//      os apps ficam gigantes, 3 em cima / 4 no meio / 3 embaixo;
//   2. o AMBIENTE escurece de verdade (o véu na WebView E o escurecimento no GL nativo, que é quem
//      desenha o mundo no headset) e continua visível;
//   3. só aparecem DEZ ícones por vez, e a rolagem (roda do mouse, arrasto, as setas laterais) passa
//      para a próxima página com animação;
//   4. a dock desaparece enquanto o anel está aberto; no lugar dela, o anel mostra o PERFIL e a HORA
//      do jogador (sincronizados com o relógio/bateria do aparelho);
//   5. o círculo no canto de cima volta para a dock.
// O anel mostra os apps DO NextVR e os apps DO ANDROID. Este módulo não conhece catálogo de
// ninguém: o apps.js entrega as funções por `installOrbMenu`, e aqui só se desenha o anel.
import { on, setSceneDim, settings as S, save, startGyro, gyroLive, toast } from './core.js';
import { getDeviceStatus } from './windows.js';

/** Os 10 lugares: 3 em cima, 4 no meio, 3 embaixo (em % da caixa do anel). */
export const ORB_LAYOUT = Object.freeze([
  { x: 22, y: 16 }, { x: 50, y: 13 }, { x: 78, y: 16 },
  { x: 13, y: 50 }, { x: 37, y: 50 }, { x: 63, y: 50 }, { x: 87, y: 50 },
  { x: 22, y: 84 }, { x: 50, y: 87 }, { x: 78, y: 84 },
]);

/* Tamanho de referência do anel. Ele não é mais uma janela (não passa pelo atlas de texturas), então
 * este número só descreve o desenho histórico; o tamanho na tela vem do CSS, em % da HUD. */
export const ORB_W = 1040;
export const ORB_H = 660;

/** Quantos apps do ring cabem por página: dez, como no desenho ("só aparece 10 ícones"). */
export const ORB_PAGE = 10;

/** Quantos apps do Android cabem no anel; o resto dos 10 lugares é do NextVR. */
export const ORB_ANDROID_SLOTS = 4;

export const ORB_WIN = 'orb-menu';
/** Quanto o ambiente escurece com o anel aberto: dá para ver o mundo, mas os apps saltam. */
export const ORB_DIM = 0.7;

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

const ORB_LAYER_ID = 'orb-layer';

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

export const orbLayer = () => (typeof document === 'undefined' ? null : document.getElementById(ORB_LAYER_ID));
export const orbOpen = () => !!orbLayer();

/** `es` = texto de "não há mais páginas" no rodapé. */

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

function tileHtml(entry, index) {
  const pos = ORB_LAYOUT[index] || ORB_LAYOUT[0];
  const label = String(entry.label || entry.key || '');
  const inner = entry.img
    ? `<img src="${esc(entry.img)}" alt="" draggable="false" onerror="this.remove()">`
    : `<span class="orb-glyph">${esc(entry.glyph || label.trim().slice(0, 1).toUpperCase() || '•')}</span>`;
  return `<button type="button" class="orb-app${entry.android ? ' orb-app--android' : ''}"
      data-orb-app="${esc(entry.key)}"
      ${entry.android ? 'data-orb-android="1"' : ''}
      style="left:${pos.x}%;top:${pos.y}%;--i:${index};background:${esc(entry.bg || ORB_PALETTE[index % ORB_PALETTE.length])}"
      title="${esc(label)}${entry.android ? ' · Android' : ''}">
      ${inner}
      <span class="orb-label">${esc(label)}</span>
      ${entry.android ? '<i class="orb-badge" aria-hidden="true">A</i>' : ''}
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

/**
 * O desenho do anel. Fundo NENHUM: quem aparece atrás é o ambiente escurecido. `page` escolhe qual
 * dezena de apps está na tela.
 */
export function orbMarkup(entries = orbEntries(), pageIndex = page) {
  const pages = orbPages(entries);
  page = Math.max(0, Math.min(pages.length - 1, pageIndex | 0));
  const tiles = pages[page].map(tileHtml).join('');
  const dots = pages.length > 1
    ? `<div class="orb-dots">${pages.map((_, i) => `<i class="${i === page ? 'on' : ''}"></i>`).join('')}</div>`
    : '';
  return `
    <div class="orb-root" data-orb-root="1" data-page="${page}">
      <div class="orb-top">
        <button type="button" class="orb-back" data-orb-close="1" aria-label="Voltar para a dock" title="Voltar para a dock">
          <span class="orb-back-arrow">‹</span>
        </button>
        <div class="orb-headline">
          <span class="orb-title">APPS</span>
          <span class="orb-hint">${pages[page].length} de ${entries.length} · role para ver mais</span>
        </div>
        ${dots}
      </div>
      <div class="orb-ring" data-orb-ring="1">
        ${tiles}
      </div>
      ${pages.length > 1 ? `
      <button type="button" class="orb-page orb-page--prev" data-orb-page="-1" aria-label="Página anterior" title="Página anterior">‹</button>
      <button type="button" class="orb-page orb-page--next" data-orb-page="1" aria-label="Próxima página" title="Próxima página">›</button>` : ''}
      <div class="orb-foot">
        <div class="orb-bar" data-orb-bar="1">
          <div class="orb-bar-side orb-bar-left">
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
      </div>
    </div>`;
}

/**
 * Abre o app escolhido. Fechar o anel e abrir o app são passos INDEPENDENTES de propósito: um
 * problema ao fechar o anel nunca pode engolir o toque do usuário. O erro fica registrado em
 * `window.__orbLastError` para diagnóstico.
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
      window.__orbLastTarget = target
        ? `${target.tagName}.${String(target.className || '').replace(/\s+/g, '.')}`
        : 'sem elemento';
    }
    const chosen = tile || byPointTile;
    if (chosen) {
      act('app', chosen.dataset.orbApp, chosen.dataset.orbAndroid === '1');
      return;
    }
    if (all || byPointAll) { act('all'); return; }
    if (shut || byPointClose) act('close');
  };

  let dragFrom = null;
  host.addEventListener('pointerdown', event => {
    if (event.target.closest?.('[data-orb-app],[data-orb-all],[data-orb-close],[data-orb-page]')) return;
    dragFrom = { x: event.clientX, y: event.clientY };
  });
  host.addEventListener('pointerup', event => {
    if (!dragFrom) return;
    const dx = event.clientX - dragFrom.x;
    dragFrom = null;
    if (Math.abs(dx) > 48) turnPage(dx < 0 ? 1 : -1);
  });
}

/** Vira a página do anel com a animação de rolagem (as setas laterais e a roda chamam isto). */
export function turnPage(step = 1) {
  const layer = orbLayer();
  if (!layer) return page;
  const pages = orbPages();
  if (pages.length < 2) return page;
  const next = (page + (Number(step) || 1) + pages.length) % pages.length;
  const direction = (Number(step) || 1) > 0 ? 'next' : 'prev';
  page = next;
  const host = layer.querySelector('.orb-host');
  const root = layer.querySelector('.orb-root');
  if (host) { host.innerHTML = orbMarkup(undefined, page); wireOrb(host); }
  if (root) root.dataset.page = String(page);
  // A animação de rolagem entra na página NOVA: os ícones deslizam do lado de onde vieram.
  const ring = layer.querySelector('.orb-ring');
  if (ring) {
    ring.classList.add('is-' + direction);
    setTimeout(() => ring.classList.remove('is-next', 'is-prev'), 420);
  }
  return page;
}

export function paintOrb() {
  const layer = orbLayer();
  const host = layer?.querySelector('.orb-host');
  if (!host) return;
  host.innerHTML = orbMarkup(undefined, page);
  wireOrb(host);
  paintClock();
}

/* O relógio do rodapé corre junto com o do aparelho (o mesmo publishDeviceStatus da dock). */
let clockTimer = null;
function paintClock() {
  const layer = orbLayer();
  const box = layer?.querySelector('[data-orb-clock]');
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
 * Abre o anel. Nada de janela: a camada nasce na HUD (#hud), que é o que o lado nativo desenha por
 * cima de tudo e sem vidro. `onboarding: true` deixou de existir aqui — não há slot de janela a
 * disputar, então abrir o anel nunca fecha nem empurra um app do usuário.
 */
export function openOrbMenu() {
  if (typeof window !== 'undefined') window.__orbOpenCalls = (window.__orbOpenCalls || 0) + 1;
  try {
    const existing = orbLayer();
    if (existing) { paintOrb(); dim(true); return existing; }
    page = 0;
    const layer = document.createElement('div');
    layer.id = ORB_LAYER_ID;
    layer.className = 'orb-layer';
    layer.dataset.orbLayer = '1';
    const host = document.createElement('div');
    host.className = 'orb-host';
    layer.appendChild(host);
    const hud = document.getElementById('hud') || document.body;
    hud.appendChild(layer);
    dim(true);
    paintOrb();
    startClock();
    // Os apps do Android chegam depois (a lista é lida do aparelho): o anel se redesenha ao chegar.
    try { providers.refreshAndroid?.(); } catch (error) { remember(error); }
    return layer;
  } catch (error) {
    remember(error);
    const recovered = orbLayer();
    if (!recovered) throw error;
    try { paintOrb(); } catch (again) { remember(again); }
    return recovered;
  }
}

export function closeOrbMenu() {
  if (typeof window !== 'undefined') window.__orbCloseCalls = (window.__orbCloseCalls || 0) + 1;
  try {
    orbLayer()?.remove();
  } finally {
    // Sempre, mesmo se a remoção falhar no meio: o véu e o selo não podem ficar presos.
    stopClock();
    dim(false);
  }
}

let dimmed = false;
function dim(on_) {
  const value = !!on_;
  // Marca no <html> que o anel está aberto: o CSS usa isso para tirar a dock e as janelas da frente.
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
 * da camada), porque a camada é `pointer-events:none` para não roubar o toque das janelas: assim a
 * roda funciona igual no celular, no navegador e no headset. */
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

/* A HUD é presa na cabeça: um pedido de recentralizar/trocar de ambiente não fecha o anel. Quem
 * fecha é o círculo de voltar ou a escolha de um app. */
on('wins', () => { if (!orbOpen()) stopClock(); });

if (typeof window !== 'undefined') {
  window.nextvrOpenOrbMenu = openOrbMenu;
  window.nextvrCloseOrbMenu = closeOrbMenu;
  window.nextvrOrbPage = turnPage;
}
