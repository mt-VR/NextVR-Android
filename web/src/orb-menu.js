// O anel de 10 apps — pedido do usuário, textualmente:
//
//   "bota aquela opção de 10 apps que aparece ... os negócios de 10 apps e assim, o ambiente escurece
//    mas ainda dá pra vê e os apps aparecem gigantes na tela, mas esse fundo que aparece
//    configurações, só bugou, não é pra botar esse fundo de configurações".
//
// Traduzido em comportamento:
//   1. a bolinha da dock abre um anel de 10 apps, desenho 3 em cima / 4 no meio / 3 embaixo;
//   2. o AMBIENTE escurece mas continua visível (véu em core.setSceneDim, nunca preto);
//   3. os apps ficam GIGANTES e soltos no ar;
//   4. fundo NENHUM atrás: a janela do anel é transparente de propósito. O bug antigo era a janela
//      abrir com o painel de Configurações por baixo — aqui não existe painel nenhum.
//
// O anel mostra os apps DO NextVR e os apps DO ANDROID. Este módulo não conhece catálogo de
// ninguém: o apps.js entrega as funções por `installOrbMenu`, e aqui só se desenha o anel.
import { on, setSceneDim } from './core.js';
import { open, close, wins, focus } from './windows.js';

/** Os 10 lugares: 3 em cima, 4 no meio, 3 embaixo, fechando o círculo (em % da caixa do anel). */
export const ORB_LAYOUT = Object.freeze([
  { x: 22, y: 17 }, { x: 50, y: 15 }, { x: 78, y: 17 },
  { x: 11, y: 50 }, { x: 34, y: 50 }, { x: 66, y: 50 }, { x: 89, y: 50 },
  { x: 22, y: 83 }, { x: 50, y: 85 }, { x: 78, y: 83 },
]);
/* Tamanho da janela do anel. 1040x660 é o limite do atlas de texturas do lado nativo: uma janela
 * maior que isso é cortada na captura e as colunas das pontas do anel sumiriam no APK. O tamanho
 * "gigante" na tela vem do resizeScale em windows.js, não de aumentar esta caixa. */
export const ORB_W = 1040;
export const ORB_H = 660;

/** Quantos apps do Android cabem no anel; o resto dos 10 lugares é do NextVR. */
export const ORB_ANDROID_SLOTS = 4;

export const ORB_WIN = 'orb-menu';
/** Quanto o ambiente escurece com o anel aberto: dá para ver o mundo, mas os apps saltam. */
export const ORB_DIM = 0.55;

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
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"|'/g, '&quot;');

const winObj = () => wins.find(w => w.id === ORB_WIN) || null;

/**
 * Os 10 apps do anel: os apps do Android primeiro (é o que o usuário não tem à mão sem sair do VR),
 * completando com os apps do NextVR. Sem a lista do Android (Shizuku desligado/sem permissão) o anel
 * se enche só com apps do NextVR — nunca fica com buraco.
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
  const ownSlots = Math.max(0, ORB_LAYOUT.length - phones.length);
  const mine = own.slice(0, ownSlots).map(app => ({
    key: app.id,
    label: app.name || app.label || app.id,
    img: app.img || '',
    glyph: app.glyph || '',
    bg: app.bg || '',
    android: false,
  }));
  return [...mine, ...phones].slice(0, ORB_LAYOUT.length);
}

function tileHtml(entry, index) {
  const pos = ORB_LAYOUT[index] || ORB_LAYOUT[0];
  const label = String(entry.label || entry.key || '');
  const inner = entry.img
    ? `<img src="${esc(entry.img)}" alt="" draggable="false" onerror="this.remove()">`
    : `<span class="orb-glyph">${esc(entry.glyph || label.trim().slice(0, 1).toUpperCase() || '•')}</span>`;
  return `<button type="button" class="orb-app${entry.android ? ' orb-app--android' : ''}"
      data-orb-app="${esc(entry.key)}"
      ${entry.android ? 'data-orb-android="1"' : ''}
      style="left:${pos.x}%;top:${pos.y}%;background:${esc(entry.bg || 'linear-gradient(180deg,#3f3f46 0%,#18181b 100%)')}"
      title="${esc(label)}${entry.android ? ' · Android' : ''}">
      ${inner}
      <span class="orb-label">${esc(label)}</span>
      ${entry.android ? '<i class="orb-badge" aria-hidden="true">A</i>' : ''}
    </button>`;
}

/** O desenho do anel. Fundo NENHUM: quem aparece atrás é o ambiente escurecido. */
export function orbMarkup(entries = orbEntries()) {
  const tiles = entries.map(tileHtml).join('');
  return `
    <div class="orb-root" data-orb-root="1">
      <div class="orb-head">
        <span class="orb-title">APPS</span>
        <span class="orb-hint">${entries.length} no anel · toque para abrir</span>
        <button type="button" class="orb-close" data-orb-close="1" aria-label="Fechar" title="Fechar">✕</button>
      </div>
      <div class="orb-ring" data-orb-ring="1">
        ${tiles}
        <button type="button" class="orb-hub" data-orb-all="1" title="Todos os apps do NextVR">
          <span class="orb-hub-icon">▦</span>
          <span class="orb-hub-label">TODOS</span>
        </button>
      </div>
    </div>`;
}

function wireOrb(host) {
  host.querySelectorAll('[data-orb-app]').forEach(button => {
    button.onclick = () => {
      const key = button.dataset.orbApp;
      const isAndroid = button.dataset.orbAndroid === '1';
      closeOrbMenu();
      if (isAndroid) providers.launchAndroid(key.replace(/^app:/, ''));
      else providers.launchOwn(key);
    };
  });
  const all = host.querySelector('[data-orb-all]');
  if (all) all.onclick = () => { closeOrbMenu(); providers.launchOwn('library'); };
  const closeBtn = host.querySelector('[data-orb-close]');
  if (closeBtn) closeBtn.onclick = () => closeOrbMenu();
}

export function paintOrb() {
  const win = winObj();
  const host = win?.el.querySelector('.orb-host');
  if (!host) return;
  host.innerHTML = orbMarkup();
  wireOrb(host);
}

/**
 * Abre o anel. `onboarding: true` é o que o mantém FORA do arco de janelas: o anel é uma camada
 * sobre o mundo, não um app concorrendo a slot com os apps do usuário (e por isso nunca fecha
 * nenhum app aberto para "abrir espaço").
 */
export function openOrbMenu() {
  const existing = winObj();
  if (existing) { paintOrb(); focus(existing); dim(true); return existing; }
  const host = document.createElement('div');
  host.className = 'orb-host';
  const win = open({
    id: ORB_WIN,
    title: 'Apps',
    node: host,
    w: ORB_W,
    h: ORB_H,
    onboarding: true,
    chrome: false,
    resizable: false,
  });
  win.shell.classList.add('orb-shell');
  win.el.classList.add('orb-window');
  dim(true);
  paintOrb();
  // Os apps do Android chegam depois (a lista é lida do aparelho): o anel se redesenha ao chegar.
  try { providers.refreshAndroid?.(); } catch { /* sem Shizuku não há o que pedir */ }
  return win;
}

export function closeOrbMenu() {
  const win = winObj();
  if (win) close(win);
  dim(false);
}

export const orbOpen = () => !!winObj();

let dimmed = false;
function dim(on_) {
  const value = !!on_;
  if (dimmed === value) return;
  dimmed = value;
  setSceneDim(value ? ORB_DIM : 0);
}

/* A lista do aparelho pode chegar com o anel aberto. */
on('appsState', () => { if (orbOpen()) paintOrb(); });

/* A janela pode ser fechada por fora (✕, troca de idioma, jogo em andamento): o escurecimento sai
 * junto. Sem isso, fechar o anel por qualquer outro caminho deixaria a tela escura para sempre. */
on('wins', () => { if (!orbOpen()) dim(false); });
on('lang', () => { if (orbOpen()) paintOrb(); });

if (typeof window !== 'undefined') window.nextvrOpenOrbMenu = openOrbMenu;
