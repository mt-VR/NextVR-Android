// Build 96 — o menu orbital da Dock: a bolinha com 10 bolinhas dentro.
//
// O pedido do usuário:
//   "na dock normal, consegue por uma opção em bolinha que aparece 10 bolinhas dentro dela, aí quando
//    clicar, ela abre um menu com uns apps gigantes, tipo assim, aparece 3 encima, 4 no meio e 3
//    embaixo, tipo um círculo, e é pra aparecer os apps do Android e do aplicativo".
//
// É isso que este módulo faz:
//   * a bolinha (`kind: 'orb'` na Dock) mostra 10 pontinhos dentro dela, no mesmo desenho 3/4/3;
//   * ao clicar, abre uma janela com um ANEL de 10 apps grandes — 3 em cima, 4 no meio, 3 embaixo;
//   * os 10 lugares são divididos entre os apps DO APP (Navegador, YouTube, Store, Galeria, …) e os
//     apps DO ANDROID instalados no aparelho (com o ícone real que o lado nativo entrega);
//   * o centro do anel abre a lista completa de apps (a Biblioteca);
//   * embaixo do anel fica o controle "tela perto / longe" para levar o workspace inteiro para perto
//     ou para longe — o mesmo movimento suave do arco, só que num toque.
//
// Este módulo não desenha ícones de mentira: quando a lista de apps Android ainda não chegou (o
// Shizuku precisa do serviço do aparelho), o anel mostra só os apps do NextVR e um aviso honesto.

import { settings as S, emit, native } from './core.js';
import { open, close, wins, focus, screenDepth, screenDepthLimits } from './windows.js';
import { DOCK_CATALOG, dockCatalogAll, catalogEntry, launchDockApp } from './dock-catalog.js';

/**
 * 10 lugares: 3 em cima, 4 no meio, 3 embaixo (posições em % da caixa do anel).
 *
 * As linhas de cima e de baixo se fecham para dentro e o meio é a linha mais larga — é isso que faz
 * o conjunto ler como um CÍRCULO em vez de uma grade. Os limites (8 %, 92 %, 10 %, 90 %) existem
 * para a bolha de 104 px não encostar na borda da janela: o anel cabe inteiro em qualquer tela.
 */
export const ORB_LAYOUT = Object.freeze([
  // linha de cima
  { x: 22, y: 14 }, { x: 50, y: 10 }, { x: 78, y: 14 },
  // linha do meio (a mais larga)
  { x: 8, y: 50 }, { x: 36, y: 50 }, { x: 64, y: 50 }, { x: 92, y: 50 },
  // linha de baixo
  { x: 22, y: 86 }, { x: 50, y: 90 }, { x: 78, y: 86 },
]);

/** Quantos apps de cada lado aparecem no anel. */
export const ORB_OWN_SLOTS = 5;
export const ORB_ANDROID_SLOTS = 5;

/** Apps do próprio NextVR, na ordem em que entram no anel. */
export const ORB_OWN_IDS = Object.freeze([
  'browser', 'youtube', 'store', 'gallery', 'library', 'settings', 'tiktok', 'discord',
]);

const isAndroidId = id => String(id || '').startsWith('app:');

/** Apps Android instalados, como o lado nativo os entregou (ícone real incluído). */
export function orbAndroidApps() {
  try {
    return dockCatalogAll().filter(item => item && isAndroidId(item.id));
  } catch {
    return [];
  }
}

/**
 * Os 10 apps do anel, alternando os dois lados:
 *   - até 5 apps do Android e até 5 do NextVR quando os dois existem;
 *   - sem apps Android (aparelho sem a lista), o anel fica com os apps do NextVR — nada de buraco.
 * O que não couber fica na lista completa (o centro do anel).
 */
/**
 * Os apps do NextVR do anel: os da lista fixa primeiro e, se eles não bastarem para encher os
 * lugares que os apps do Android não ocuparam, entram os JOGOS do catálogo (que são apps do app
 * também). Assim o anel fica cheio num aparelho sem a lista de apps Android em vez de mostrar 8 e
 * deixar dois buracos.
 */
export function orbOwnApps(count = 10) {
  const out = [];
  const push = entry => {
    if (!entry || out.length >= count) return;
    if (out.some(item => item.id === entry.id)) return;
    out.push(entry);
  };
  for (const id of ORB_OWN_IDS) push(catalogEntry(id));
  for (const meta of DOCK_CATALOG) if (!meta.id.startsWith('app:')) push(meta);
  return out;
}

/**
 * Os 10 apps do anel, alternando os dois lados:
 *   - até 5 apps do Android e até 5 do NextVR quando os dois existem;
 *   - sem apps Android (aparelho sem a lista), o anel fica cheio com os apps do NextVR.
 * O que não couber fica na lista completa (o centro do anel).
 */
export function orbEntries(android = orbAndroidApps()) {
  const phones = (android || []).filter(item => item && isAndroidId(item.id)).slice(0, ORB_ANDROID_SLOTS);
  const ownCount = Math.max(0, Math.min(ORB_LAYOUT.length - phones.length,
    ORB_OWN_SLOTS + (ORB_ANDROID_SLOTS - phones.length)));
  const own = orbOwnApps(ownCount);
  return [...own, ...phones].slice(0, ORB_LAYOUT.length);
}

/** Quanto um toque move a tela para perto/longe (metros). */
export const SCREEN_DEPTH_STEP = 0.2;

const ORB_WIN = 'orb-menu';

function winEl() {
  return wins.find(w => w.id === ORB_WIN) || null;
}

function bodyOf() {
  const w = winEl();
  return w ? w.el.querySelector('.orb-root') : null;
}

function tileHtml(entry, index) {
  const pos = ORB_LAYOUT[index] || ORB_LAYOUT[0];
  const label = String(entry.label || entry.id || '').replace(/^app:/, '');
  const phone = isAndroidId(entry.id);
  const inner = entry.img
    ? `<img src="${entry.img}" alt="" loading="lazy">`
    : `<span class="orb-glyph">${entry.glyph || '•'}</span>`;
  return `<button type="button" class="orb-app${phone ? ' orb-app--android' : ''}"
      data-orb-app="${String(entry.id).replace(/"/g, '&quot;')}"
      style="left:${pos.x}%;top:${pos.y}%"
      title="${label}${phone ? ' (Android)' : ''}">
      <span class="orb-app-bubble" style="background:${entry.bg || 'linear-gradient(180deg,#3f3f46 0%,#18181b 100%)'}">${inner}</span>
      <span class="orb-app-label">${label}</span>
    </button>`;
}

/** O desenho do anel: 10 lugares, o centro, e o controle de distância da tela. */
export function orbMarkup(entries = orbEntries()) {
  const apps = entries.map(tileHtml).join('');
  const empty = entries.length < ORB_LAYOUT.length;
  const depth = Number(S.winDist) || 2.2;
  return `
    <div class="orb-root" data-orb-root="1">
      <div class="orb-head">
        <b class="orb-title">APPS</b>
        <span class="orb-count">${entries.length} de 10 no anel · o resto na lista completa</span>
        <button type="button" class="orb-close" data-orb-close="1" aria-label="Fechar">✕</button>
      </div>
      <div class="orb-ring" data-orb-ring="1">
        ${apps}
        <button type="button" class="orb-hub" data-orb-all="1" title="Todos os apps">
          <span class="orb-hub-icon">▦</span>
          <span class="orb-hub-label">TODOS OS APPS</span>
        </button>
      </div>
      <div class="orb-depth" data-orb-depth="1">
        <button type="button" class="orb-depth-btn" data-orb-depth="-1" title="Tela para longe">LONGE</button>
        <span class="orb-depth-read" data-orb-distance>${depth.toFixed(2).replace('.', ',')} m</span>
        <button type="button" class="orb-depth-btn" data-orb-depth="1" title="Tela para perto">PERTO</button>
      </div>
      ${empty ? `<p class="orb-note" data-orb-note="1">Os apps do Android aparecem aqui assim que a
        lista do aparelho chegar. Se ela não chegar, abra <b>Apps Android</b> na Dock e ligue o
        Shizuku — sem ele o Android não entrega a lista de apps instalados.</p>` : ''}
    </div>`;
}

/** Abre (ou foca) a janela do anel. */
export function openOrbMenu() {
  const existing = winEl();
  if (existing) {
    paintOrb();
    focus(existing);
    return existing;
  }
  const body = document.createElement('div');
  body.style.cssText = 'height:100%;display:flex;min-height:0';
  const win = open({ id: ORB_WIN, title: 'APPS', node: body, w: 1180, h: 800, chrome: false, resizable: false });
  paintOrb();
  return win;
}

export function closeOrbMenu() {
  const w = winEl();
  if (w) close(w);
}

/** Redesenha o anel (lista de apps Android nova, distância nova, etc.). */
export function paintOrb() {
  const host = winEl()?.el.querySelector('.win-body');
  if (!host) return;
  const entries = orbEntries();
  host.innerHTML = orbMarkup(entries);
  wireOrb(host);
}

function wireOrb(host) {
  host.querySelectorAll('[data-orb-app]').forEach(button => {
    button.onclick = () => launchDockApp(button.dataset.orbApp);
  });
  const all = host.querySelector('[data-orb-all]');
  if (all) all.onclick = () => launchDockApp('library');
  const closeBtn = host.querySelector('[data-orb-close]');
  if (closeBtn) closeBtn.onclick = () => closeOrbMenu();
  host.querySelectorAll('[data-orb-depth]').forEach(button => {
    button.onclick = () => {
      const dir = Number(button.dataset.orbDepth) || 0;
      // Perto/longe do NextVR: janelas e dock deslizam juntas (ver `screenDepth` em windows.js).
      screenDepth(dir);
      syncDepthPanel(host);
    };
  });
  syncDepthPanel(host);
  watchDepthPanel(host);
}

/**
 * O número e os botões do perto/longe seguem o valor REAL da tela — inclusive quando quem mexeu
 * foi o slider de Ajustes, ou quando a animação ainda está no meio do caminho.
 */
function syncDepthPanel(host) {
  const limits = screenDepthLimits();
  const read = host.querySelector('[data-orb-distance]');
  const text = `${limits.value.toFixed(2).replace('.', ',')} m`;
  if (read && read.textContent !== text) read.textContent = text;
  const near = host.querySelector('[data-orb-depth="1"]');
  const far = host.querySelector('[data-orb-depth="-1"]');
  if (near) near.disabled = limits.near;
  if (far) far.disabled = limits.far;
}

let depthPanelLoop = 0;
function watchDepthPanel(host) {
  if (typeof requestAnimationFrame !== 'function') return;
  cancelAnimationFrame(depthPanelLoop);
  const step = () => {
    if (!winEl() || !host.isConnected) { depthPanelLoop = 0; return; }
    syncDepthPanel(host);
    depthPanelLoop = requestAnimationFrame(step);
  };
  depthPanelLoop = requestAnimationFrame(step);
}

if (typeof window !== 'undefined') {
  window.nextvrOpenOrbMenu = openOrbMenu;
}

/** Os apps Android chegaram (ou saíram): o anel em cima da tela acompanha. */
export function refreshOrbIfOpen() {
  if (winEl()) paintOrb();
}

export const orbOpen = () => !!winEl();
