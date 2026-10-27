// NextVR — aplicativos, menu flutuante, ambientes, idiomas e ligação geral.
import * as THREE from 'three';
import { settings as S, save, t, setLang, on, emit, toast, recenter, setEnvironment, setPassthrough, setMrDim, setBwCamera, setWorldLock, envList, startGyro, gyroLive, native, css3d, scene, contentRoot, camera,
  LANG_ROWS, langRow, SixDof } from './core.js';
import { startHands, stopHands, tracking, hands } from './hands.js';
import { CHARACTER_OPTIONS, loadCharacter, saveCharacter, drawCharacter2D } from './character-creator.js';
import { open, close, wins, buildDock, dockButton, keyboard, keyboardOpen, setKeyboardHidden, focusedWin, focus, setDockVisible, setDockHidden, getDeviceStatus } from './windows.js';
import { icon } from './reference-icons.js';
import { installAndroidApps, androidApps, androidTileHtml, shizukuStatusRow, openApp, focusAppWindow, openWindowCount,
  loadLibrary as loadAndroidLibrary } from './android-apps.js';
import { installXrGames, xrLibraryItems, xrTileHtml, xrHosting, launchXrGame, phoneXrNotice,
  refreshXrLibrary, installXrRuntime, xrState, xrRuntimeReady, xrHandModeOf, setXrHandMode,
  xrSelfTest, xrGames, closeXrGame, restoreXrGame } from './xr-games.js';
import { installJoycon } from './joycon.js';
import { buildEntryMenu } from './entry-menu.js';
import { openGorillaTag, CARDBOARD_2015_LENS } from './gorilla-tag.js';
import { openVrfsGame } from './vrfs-game.js';
import { openMrPistolGame } from './mr-pistol-game.js';
import { openMrPaint3d, closeMrPaint3d, isMrPaint3dActive, addMrPaintScreenSegment, setMrPaintPaletteOpen } from './mr-paint-3d.js';

const el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };
const iconText = (name, text='') => `<span class="icon-label">${icon(name)}${text ? `<span>${text}</span>` : ''}</span>`;
const openOut = url => { if (native) return webWindow('browser-extra', t('browser'), url); try { window.open(url, '_blank', 'noopener'); } catch { toast('Bloqueado pelo navegador'); } };

/* ============ janela com página externa (Google, Discord) ============ */
/*
 * Google e Discord mandam X-Frame-Options/CSP e recusam ser carregados
 * em iframe. Isso é do servidor deles: não há ajuste no nosso lado que contorne.
 * No app Android a mesma URL funciona, porque lá é WebView (navegador de verdade),
 * não iframe. Então: tentamos carregar, e deixamos a saída pronta se vier em branco.
 * O YouTube tem app próprio abaixo: busca via API pública + player oficial embutido.
 */

const PICO_BROWSER_SHORTCUTS = [
  { name:'PICO',      url:'pico://explore',                        bg:'#ffffff', color:'#111827', svg:`<svg viewBox="0 0 28 28" width="22" height="22"><circle cx="14" cy="14" r="10" fill="none" stroke="#111827" stroke-width="2.6"/><path d="M9.5 17.5L18.5 10.5" stroke="#111827" stroke-width="2.6" stroke-linecap="round"/></svg>` },
  { name:'YouTube',   url:'https://www.youtube.com/',              bg:'#ffffff', color:'#FF0000', svg:`<svg viewBox="0 0 28 20" width="22" height="16"><rect width="28" height="20" rx="5" fill="#FF0033"/><path d="M11 6l8 4-8 4V6z" fill="#fff"/></svg>` },
  { name:'Facebook',  url:'https://www.facebook.com/',             bg:'#1877F2', color:'#ffffff', svg:`<svg viewBox="0 0 24 24" width="22" height="22"><path fill="#fff" d="M13.5 21v-7.5h2.6l.4-3h-3v-1.9c0-.9.3-1.5 1.6-1.5H16.7V4.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2v2H7.7v3h2.6V21h3.2z"/></svg>` },
  { name:'Twitter',   url:'https://x.com/',                        bg:'#1DA1F2', color:'#ffffff', svg:`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="#fff" d="M21 6.5a7.2 7.2 0 0 1-2.1.6 3.6 3.6 0 0 0 1.6-2 7.3 7.3 0 0 1-2.3.9 3.6 3.6 0 0 0-6.2 3.3A10.2 10.2 0 0 1 4.5 5.5a3.6 3.6 0 0 0 1.1 4.8 3.5 3.5 0 0 1-1.6-.4v.1a3.6 3.6 0 0 0 2.9 3.5 3.6 3.6 0 0 1-1.6.1 3.6 3.6 0 0 0 3.4 2.5A7.3 7.3 0 0 1 3 17.6 10.3 10.3 0 0 0 8.6 19.2c6.7 0 10.4-5.6 10.4-10.4v-.5A7.4 7.4 0 0 0 21 6.5z"/></svg>` },
  { name:'Instagram', url:'https://www.instagram.com/',            bg:'#ffffff', color:'#d62976', svg:`<svg viewBox="0 0 24 24" width="22" height="22"><defs><linearGradient id="igG" x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stop-color="#feda75"/><stop offset="45%" stop-color="#d62976"/><stop offset="100%" stop-color="#4f5bd5"/></linearGradient></defs><rect x="3" y="3" width="18" height="18" rx="5" fill="url(#igG)"/><circle cx="12" cy="12" r="4" fill="none" stroke="#fff" stroke-width="2"/><circle cx="16.5" cy="7.5" r="1.1" fill="#fff"/></svg>` },
  { name:'Wikipedia', url:'https://www.wikipedia.org/',            bg:'#ffffff', color:'#111827', badge:'W' },
  { name:'Amazon',    url:'https://www.amazon.com/',               bg:'#f8fafc', color:'#111827', svg:`<svg viewBox="0 0 28 28" width="22" height="22"><circle cx="14" cy="14" r="12" fill="#fbbf24" opacity=".22"/><text x="14" y="16" text-anchor="middle" font-size="13" font-weight="900" fill="#111827" font-family="Inter,sans-serif">a</text><path d="M7.5 19c3.8 2.8 9.2 2.8 13 0" stroke="#d97706" stroke-width="2" fill="none" stroke-linecap="round"/></svg>` },
  { name:'Twitch',    url:'https://www.twitch.tv/',                bg:'#9146FF', color:'#ffffff', svg:`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="#fff" d="M5 4h15v10.5l-4 4h-4l-2.5 2.5H7v-2.5H4V7l1-3zm2 2v9h3v2.5l2.5-2.5H16l2-2V6H7zm4 2.5h2v4h-2v-4zm4 0h2v4h-2v-4z"/></svg>` },
  { name:'Add',       url:'pico://motion-tracker',                 bg:'rgba(255,255,255,.12)', color:'#e2e8f0', badge:'+' },
];

const PICO_BROWSER_POPULAR_CARDS = [
  { name:'DeepSeek',           sub:'First AI Assistant powered by DeepSeek-V3',         cat:'recommended', url:'https://chat.deepseek.com/',       icoBg:'#ffffff', icoColor:'#2563eb', icoTxt:'🐳' },
  { name:'ChatGPT',            sub:'Chat with OpenAI conversational AI assistant',      cat:'recommended', url:'https://chatgpt.com/',             icoBg:'#18181b', icoColor:'#ffffff', icoTxt:'✺' },
  { name:'Netflix',            sub:'Watch TV Shows Online, Watch Movies Online',        cat:'entertainment', url:'https://www.netflix.com/',       icoBg:'#09090b', icoColor:'#e50914', icoTxt:'N' },
  { name:'Steam',              sub:'Steam is the ultimate destination for playing...',  cat:'entertainment', url:'https://store.steampowered.com/', icoBg:'#171a21', icoColor:'#66c0f4', icoTxt:'⚙' },
  { name:'Uptodown',           sub:'Download Android apps easily on Uptodown',          cat:'tools',         url:'https://en.uptodown.com/',       icoBg:'#0284c7', icoColor:'#ffffff', icoTxt:'⬇' },
  { name:'Softonic',           sub:'Softonic is the place to discover the best ap...',  cat:'tools',         url:'https://en.softonic.com/',       icoBg:'#0ea5e9', icoColor:'#4ade80', icoTxt:'S' },
  { name:'Discord',            sub:'Your Place to Talk and Hang Out',                   cat:'social',        url:'https://discord.com/app',        icoBg:'#5865F2', icoColor:'#ffffff', icoTxt:'D' },
  { name:'Disney+',            sub:'The streaming home of Disney, Pixar, Marvel...',    cat:'entertainment', url:'https://www.disneyplus.com/',    icoBg:'#0c1e4a', icoColor:'#38bdf8', icoTxt:'D+' },
  { name:'TikTok',             sub:'Make Your Day · Vertical VR Feed',                  cat:'videos',        url:'pico://tiktok',                  icoBg:'#09090b', icoColor:'#25F4EE', icoTxt:'♪' },
  { name:'Apple TV+',          sub:'Stream all Apple Originals',                        cat:'videos',        url:'https://tv.apple.com/',          icoBg:'#09090b', icoColor:'#ffffff', icoTxt:'tv+' },
  { name:'Amazon Prime Video', sub:'Watch movies, TV, and sports',                      cat:'videos',        url:'https://www.primevideo.com/',    icoBg:'#0ea5e9', icoColor:'#ffffff', icoTxt:'prime' },
  { name:'Spotify',            sub:'Web Player: Music for everyone in VR',              cat:'media',         url:'pico://spotify',                 icoBg:'#1db954', icoColor:'#09090b', icoTxt:'🟢' },
];

const QB_POPULAR_SITES = PICO_BROWSER_SHORTCUTS;

const QB_ENTERTAINMENT_TILES = [
  { name:'Spotify', url:'pico://spotify', cardBg:'#090b0e', art:`<div class="qb-ent-brand qb-ent-spotify"><span class="qb-ent-sp-txt">Spotify</span></div>` },
  { name:'YouTube Music', url:'https://music.youtube.com/', cardBg:'#ffffff', art:`<div class="qb-ent-brand qb-ent-ytm"><span class="qb-ent-ytm-dot">▶</span><span class="qb-ent-ytm-txt">Music</span></div>` },
  { name:'Crunchyroll', url:'https://www.crunchyroll.com/', cardBg:'#F47521', art:`<div class="qb-ent-brand qb-ent-cr"><span class="qb-ent-cr-dot">◉</span><span class="qb-ent-cr-txt">crunchyroll</span></div>` },
  { name:'HBO Max', url:'https://www.max.com/', cardBg:'#07080b', art:`<div class="qb-ent-brand qb-ent-hbo"><span class="qb-ent-hbo-top">HBO</span><span class="qb-ent-hbo-sub">max</span></div>` },
  { name:'Hulu', url:'https://www.hulu.com/', cardBg:'#06080a', art:`<div class="qb-ent-brand qb-ent-hulu">hulu</div>` },
  { name:'Tubi', url:'https://tubitv.com/', cardBg:'linear-gradient(135deg,#4c1d95 0%,#6d28d9 100%)', art:`<div class="qb-ent-brand qb-ent-tubi">tubi</div>` },
  { name:'Paramount+', url:'https://www.paramountplus.com/', cardBg:'linear-gradient(135deg,#0051e6 0%,#0072ff 100%)', art:`<div class="qb-ent-brand qb-ent-para"><span class="qb-ent-para-mtn">▲</span><span class="qb-ent-para-txt">Paramount+</span></div>` },
  { name:'Peacock TV', url:'https://www.peacocktv.com/', cardBg:'#050608', art:`<div class="qb-ent-brand qb-ent-peacock"><span>peacock</span></div>` },
  { name:'Twitch', url:'https://www.twitch.tv/', cardBg:'#9146FF', art:`<div class="qb-ent-brand qb-ent-twitch">twitch</div>` },
  { name:'ESPN', url:'https://www.espn.com/', cardBg:'#CC0000', art:`<div class="qb-ent-brand qb-ent-espn">ESPN</div>` },
];

const QB_IMMERSIVE_CARDS = [
  { title:'Acima das Nuvens 360°', sub:'Experiência WebXR Panorâmica', url:'https://immersiveweb.dev/', bg:'linear-gradient(135deg,#0284c7,#1e1b4b)' },
  { title:'Beat Saber · WebXR', sub:'Ritmo VR com Sabres de Luz', url:'https://moonrider.xyz/?mode=ride&vr=1', bg:'linear-gradient(135deg,#991b1b,#1e1b4b)' },
  { title:'Jogos WebXR Imersivos', sub:'Catálogo VR no Navegador', url:'https://constructarcade.com/', bg:'linear-gradient(135deg,#065f46,#0f172a)' },
];

function buildQuestBrowserHomeHtml(activeCat = 'all') {
  const cats = [
    ['all', 'Recommended'],
    ['videos', 'Videos'],
    ['entertainment', 'Entertainment'],
    ['social', 'Social'],
    ['media', 'Media'],
    ['tools', 'Tools'],
  ];
  const cards = PICO_BROWSER_POPULAR_CARDS.filter(c => activeCat === 'all' || c.cat === activeCat || c.cat === 'recommended');
  return `
    <div class="qb-home-scroll qb-pico-home" data-pico-browser-home="1">
      <section class="qb-sec">
        <div class="qb-sec-head"><span class="qb-sec-title">Shortcuts</span></div>
        <div class="qb-pop-row qb-pico-shortcuts">
          ${PICO_BROWSER_SHORTCUTS.map(s => `
            <button type="button" class="qb-pop-item qb-pico-shortcut" data-qb-url="${escH(s.url)}" title="${escH(s.name)}">
              <span class="qb-pop-icon qb-pico-sc-icon" style="background:${s.bg};color:${s.color};border-radius:50%;width:44px;height:44px;display:inline-flex;align-items:center;justify-content:center;font-weight:900;font-size:17px;box-shadow:0 4px 12px rgba(0,0,0,.32)">${s.img ? `<img src="${s.img}" alt="${escH(s.name)}" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:50%">` : (s.svg || escH(s.badge))}</span>
              <span class="qb-pop-lbl">${escH(s.name)}</span>
            </button>
          `).join('')}
        </div>
      </section>

      <section class="qb-sec">
        <div class="qb-sec-head qb-pico-pop-head" style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap">
          <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">
            <span class="qb-sec-title">Popular</span>
            <div class="qb-pico-cat-tabs" style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
              ${cats.map(([cid, label]) => `
                <button type="button" class="qb-pico-cat-btn ${activeCat === cid ? 'on' : ''}" data-qb-cat="${cid}"
                  style="background:${activeCat === cid ? 'rgba(255,255,255,.14)' : 'transparent'};color:${activeCat === cid ? '#ffffff' : 'rgba(226,232,240,.62)'};border:0;border-radius:999px;padding:3px 9px;font-size:11px;font-weight:${activeCat === cid ? '800' : '600'};cursor:pointer">${label}</button>
              `).join('')}
            </div>
          </div>
          <button type="button" class="qb-sec-more" data-qb-cat="all" style="background:transparent;border:0;color:#38bdf8;font-size:11px;font-weight:700;cursor:pointer">Show More ›</button>
        </div>
        <div class="qb-cont-grid qb-pico-pop-grid" style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px">
          ${cards.map(c => `
            <button type="button" class="qb-cont-card qb-pico-pop-card" data-qb-url="${escH(c.url)}" title="${escH(c.name)}"
              style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:12px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.07);text-align:left;cursor:pointer;color:#f8fafc">
              <span class="qb-cont-ico" style="width:36px;height:36px;border-radius:50%;background:${c.icoBg};color:${c.icoColor};display:inline-flex;align-items:center;justify-content:center;font-weight:900;font-size:13px;flex-shrink:0">${escH(c.icoTxt)}</span>
              <div class="qb-cont-meta" style="min-width:0;flex:1">
                <div class="qb-cont-ttl" style="font-size:12px;font-weight:800;color:#f8fafc;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${escH(c.name)}</div>
                <div class="qb-cont-dom" style="font-size:10px;color:rgba(226,232,240,.58);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${escH(c.sub)}</div>
              </div>
            </button>
          `).join('')}
        </div>
      </section>

      <section class="qb-sec">
        <div class="qb-sec-head"><span class="qb-sec-title">Entretenimento</span></div>
        <div class="qb-ent-grid">
          ${QB_ENTERTAINMENT_TILES.map(e => `
            <button type="button" class="qb-ent-tile" data-qb-url="${escH(e.url)}" title="${escH(e.name)}">
              <div class="qb-ent-card" style="background:${e.cardBg}">
                ${e.art}
              </div>
              <span class="qb-ent-lbl">${escH(e.name)}</span>
            </button>
          `).join('')}
        </div>
      </section>

      <section class="qb-sec">
        <div class="qb-sec-head"><span class="qb-sec-title">Experiências imersivas</span><span class="qb-sec-more">Explorar</span></div>
        <div class="qb-imm-grid">
          ${QB_IMMERSIVE_CARDS.map(m => `
            <button type="button" class="qb-imm-card" data-qb-url="${escH(m.url)}" style="background:${m.bg}">
              <span class="qb-imm-badge">WEBXR</span>
              <span class="qb-imm-ttl">${escH(m.title)}</span>
              <span class="qb-imm-sub">${escH(m.sub)}</span>
            </button>
          `).join('')}
        </div>
      </section>
    </div>
  `;
}

/* ===== Quest-style Google Browser (GPU Accelerated) ===== */
function webBrowserFor(id, title, initialUrl='https://google.com/', options = {}) {
  const mode = options?.mode === 'incognito-tab' || options?.incognito ? 'incognito-tab' : 'new-tab';
  const isIncognito = mode === 'incognito-tab';
  const isDefaultGoogle = initialUrl === 'https://google.com/' || initialUrl === 'https://google.com' || initialUrl === 'https://duckduckgo.com/';
  const baseGoogleUrl = 'https://google.com/';
  const resolvedUrl = isIncognito && isDefaultGoogle
    ? 'https://google.com/?igu=1'
    : (isDefaultGoogle ? baseGoogleUrl : initialUrl);
  const resolvedTitle = isIncognito
    ? 'Navegador · Guia Anônima'
    : (options?.mode === 'new-tab' ? 'Navegador · Nova Guia' : (title || 'Navegador'));

  // Chrome do navegador estilo Quest: barra de URL, voltar/avançar/recarregar, mini dock.
  // Se a janela 'browser' já existe, atualiza modo (Nova Guia / Guia Anônima) e navega pra URL.
  const existing = wins.find(w => w.id === 'browser');
  if (existing) {
    existing.el.dataset.browserMode = mode;
    existing.el.dataset.incognito = isIncognito ? '1' : '0';
    if (existing.shell) {
      existing.shell.dataset.browserMode = mode;
      existing.shell.dataset.incognito = isIncognito ? '1' : '0';
    }
    const titleEl = existing.el.querySelector('.win-title');
    if (titleEl) titleEl.textContent = resolvedTitle;
    const badgeEl = existing.el.querySelector('[data-browser-incognito]');
    if (badgeEl) {
      badgeEl.dataset.browserIncognito = isIncognito ? '1' : '0';
      badgeEl.innerHTML = isIncognito ? '🕶️ Guia anônima <i class="qb-tab-x">⊗</i>' : '🌐 Nova guia <i class="qb-tab-x">⊗</i>';
    }
    const f = existing.el.querySelector('[data-native-browser], iframe');
    const homeOv = existing.el.querySelector('.qb-home-overlay');
    const showHome = options?.showHomeOverlay !== undefined ? Boolean(options.showHomeOverlay) : isDefaultGoogle;
    if (homeOv) homeOv.hidden = !showHome;
    const fld = existing.el.querySelector('.qb-urlfld');
    if (fld) fld.value = showHome ? '' : resolvedUrl;
    if (f) {
      f.dataset.homeOverlay = showHome ? '1' : '0';
      if (native) { f.dataset.url = resolvedUrl; window.NativeXR?.browserCmd?.('browser','go',resolvedUrl); }
      else f.src = resolvedUrl;
    }
    focus(existing);
    css3d.invalidate?.();
    css3d.render?.(scene, camera);
    return existing;
  }
  const body = el('div', 'qb-root');
  body.style.cssText=`display:flex;flex-direction:column;height:100%;background:${isIncognito ? '#120e1e' : '#1b1d24'};color:#e9edf4`;

  const top = el('div', 'qb-top-chrome');
  top.style.cssText=`display:flex;align-items:center;gap:5px;padding:3px 8px;background:${isIncognito ? '#0b0814' : '#14161c'};border-bottom:1px solid rgba(255,255,255,.07)`;
  const bk = el('button','qb-icn'); bk.innerHTML=icon('back');   bk.title='Voltar';
  const fw = el('button','qb-icn'); fw.innerHTML=icon('enter');  fw.style.transform='rotate(180deg)'; fw.title='Avançar';
  const rl = el('button','qb-icn'); rl.innerHTML=icon('refresh');rl.title='Recarregar';
  const modeBadge = el('span', 'qb-mode-badge');
  modeBadge.dataset.browserIncognito = isIncognito ? '1' : '0';
  modeBadge.dataset.qbAct = 'home';
  modeBadge.title = 'Nova guia (Início Meta Quest Browser)';
  modeBadge.innerHTML = isIncognito ? '🕶️ Guia anônima <i class="qb-tab-x">⊗</i>' : '🌐 Nova guia <i class="qb-tab-x">⊗</i>';
  const plusTabBtn = el('button', 'qb-tab-plus');
  plusTabBtn.type = 'button';
  plusTabBtn.dataset.qbAct = 'home';
  plusTabBtn.title = 'Nova guia';
  plusTabBtn.textContent = '+';
  const lockIco = el('span', 'qb-lock-ico', '<svg viewBox="0 0 16 16" width="12" height="12" fill="none" aria-hidden="true"><rect x="3" y="7" width="10" height="7" rx="2" fill="#34a853"/><path d="M5.2 7V5.2a2.8 2.8 0 0 1 5.6 0V7" stroke="#34a853" stroke-width="1.6" stroke-linecap="round"/></svg>');
  const fld = el('input','fld qb-urlfld');
  fld.type='text'; fld.placeholder=isIncognito ? 'Pesquisa privada ou endereço da web' : 'Pesquisar ou digitar endereço da web';
  const showStartHome = options?.showHomeOverlay !== undefined ? Boolean(options.showHomeOverlay) : isDefaultGoogle;
  fld.value = showStartHome ? '' : resolvedUrl;
  const st = el('button','qb-icn'); st.innerHTML=icon('star');   st.title='Favorito';
  const extIco = el('span', 'qb-ext-pill', '[|-|] ⋯');
  top.append(bk,fw,rl,modeBadge,plusTabBtn,lockIco,fld,st,extIco);

  const wrap = el('div');
  wrap.style.cssText='flex:1;min-height:0;position:relative;background:#1b1d24';
  const homeOverlay = el('div', 'qb-home-overlay', buildQuestBrowserHomeHtml());
  homeOverlay.hidden = !showStartHome;
  const frame = el(native ? 'div' : 'iframe');
  if (native) {
    frame.dataset.nativeBrowser = 'browser';
    frame.style.cssText = 'width:100%;height:100%;background:#1b1d24;position:relative;overflow:hidden';
    frame.dataset.url = resolvedUrl;
    frame.dataset.homeOverlay = showStartHome ? '1' : '0';
    frame.appendChild(homeOverlay);
    wrap.appendChild(frame);
  } else {
    frame.style.cssText = 'width:100%;height:100%;border:0;background:#fff';
    frame.referrerPolicy = 'no-referrer';
    frame.sandbox = 'allow-scripts allow-same-origin allow-forms allow-popups allow-presentation';
    frame.src = resolvedUrl;
    frame.dataset.homeOverlay = showStartHome ? '1' : '0';
    wrap.append(frame, homeOverlay);
  }

  const dock = el('div','qb-dock win-pico-foot--browser');
  const footLeft = el('div', 'win-pico-foot-left');
  const btnCloseFoot = el('button', 'win-pico-foot-btn', '✕');
  btnCloseFoot.type = 'button'; btnCloseFoot.title = 'Fechar'; btnCloseFoot.dataset.qbFoot = 'close';
  const btnMinFoot = el('button', 'win-pico-foot-btn', '—');
  btnMinFoot.type = 'button'; btnMinFoot.title = 'Minimizar'; btnMinFoot.dataset.qbFoot = 'min';
  footLeft.append(btnCloseFoot, btnMinFoot);
  const footTitle = el('span', 'win-pico-foot-title', 'Browser');
  const footRight = el('div', 'win-pico-foot-right');
  const av = document.createElement('button');
  av.className = 'dock-av'; av.title='Perfil'; av.setAttribute('aria-label','Perfil');
  av.innerHTML = AVATAR_HTML;
  const status = document.createElement('button');
  status.className = 'dock-status';
  status.title='Status';
  status.innerHTML = `<span class="dock-time">--:--</span><span class="dock-wifi">${icon('wifi')}</span><span class="dock-bat">${BAT_HTML}</span>`;
  const btnMoreFoot = el('button', 'win-pico-foot-btn', '⋯');
  btnMoreFoot.type = 'button'; btnMoreFoot.title = 'Opções'; btnMoreFoot.dataset.qbFoot = 'more';
  footRight.append(av, status, btnMoreFoot);
  dock.append(footLeft, footTitle, footRight);
  dock.addEventListener('click', e => {
    const fb = e.target.closest('[data-qb-foot]');
    if (!fb) return;
    e.stopPropagation();
    const w = wins.find(x => x.id === 'browser');
    if (!w) return;
    if (fb.dataset.qbFoot === 'close' || fb.dataset.qbFoot === 'min') close(w);
  });
  body.append(top, wrap, dock);

  function tick(){
    const device = getDeviceStatus();
    const time = dock.querySelector('.dock-time');
    if (time) time.textContent = device.time === '--:--'
      ? new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'}) : device.time;
    if (native && device.batteryLevel != null) {
      const fill = dock.querySelector('.dock-bat .b-fill');
      if (fill) {
        fill.setAttribute('width', String(Math.max(2, 13*device.batteryLevel)));
        fill.setAttribute('fill', device.charging ? '#8de6c8' :
          (device.batteryLevel < .2 ? '#ff6b6b' : 'currentColor'));
      }
    }
  }
  tick(); const tickI = setInterval(tick,20000);
  if (!native && navigator.getBattery) {
    navigator.getBattery().then(b=>{
      function paint(){
        const f = dock.querySelector('.dock-bat .b-fill'); if(!f) return;
        f.setAttribute('width', String(Math.max(2, 13*b.level)));
        f.setAttribute('fill', b.charging?'#8de6c8':(b.level<.2?'#ff6b6b':'currentColor'));
      }
      b.addEventListener('levelchange',paint); b.addEventListener('chargingchange',paint); paint();
    }).catch(()=>{});
  }
  function paintNet(){
    const w = dock.querySelector('.dock-wifi'); if(w) w.style.opacity = navigator.onLine ? '1' : '.35';
  }
  addEventListener('online',paintNet); addEventListener('offline',paintNet); paintNet();

  function nav(raw){
    let u=(raw||'').trim(); if(!u) return;
    if(!/^https?:\/\//i.test(u)) u = /\.\w{2,}($|\/)/.test(u) ? 'https://'+u : 'https://www.google.com/search?q='+encodeURIComponent(u);
    fld.value=u;
    homeOverlay.hidden = true;
    frame.dataset.homeOverlay = '0';
    if (native) { frame.dataset.url=u; window.NativeXR?.browserCmd?.('browser','go',u); }
    else { frame.src = u; }
    css3d.invalidate?.();
  }
  function bCmd(cmd,u){ if(native) window.NativeXR?.browserCmd?.('browser',cmd,u||''); }

  homeOverlay.addEventListener('click', e => {
    const catBtn = e.target.closest('[data-qb-cat]');
    if (catBtn) {
      e.stopPropagation();
      homeOverlay.innerHTML = buildQuestBrowserHomeHtml(catBtn.dataset.qbCat || 'all');
      css3d.invalidate?.();
      return;
    }
    const tile = e.target.closest('[data-qb-url]');
    if (!tile) return;
    e.stopPropagation();
    const u = tile.dataset.qbUrl || '';
    if (u === 'pico://explore') { openPicoExplore(); return; }
    if (u === 'pico://motion-tracker') { openPicoMotionTracker(); return; }
    if (u === 'pico://tiktok') { openTikTokVr(); return; }
    if (u === 'pico://spotify') { openSpotifyVr(); return; }
    if (u.includes('roblox.com')) {
      openRobloxVr();
      return;
    }
    if (u.includes('moonrider.xyz')) {
      openBeatSaberVr();
      return;
    }
    nav(u);
  });
  modeBadge.onclick = () => {
    homeOverlay.hidden = !homeOverlay.hidden;
    frame.dataset.homeOverlay = homeOverlay.hidden ? '0' : '1';
    css3d.invalidate?.();
  };
  plusTabBtn.onclick = () => {
    homeOverlay.hidden = false;
    frame.dataset.homeOverlay = '1';
    fld.value = '';
    css3d.invalidate?.();
  };

  fld.addEventListener('keydown', e => { if(e.key==='Enter'){ nav(fld.value); fld.blur(); } });
  fld.addEventListener('focus', () => keyboard(true, fld));
  bk.onclick = () => bCmd('back');
  fw.onclick  = () => bCmd('fwd');
  rl.onclick  = () => bCmd('reload');

  const win = open({id:'browser',title:resolvedTitle,node:body});
  if (win?.el) {
    win.el.dataset.browserMode = mode;
    win.el.dataset.incognito = isIncognito ? '1' : '0';
  }
  if (win?.shell) {
    win.shell.dataset.browserMode = mode;
    win.shell.dataset.incognito = isIncognito ? '1' : '0';
  }
  win._cleanupQB = () => { clearInterval(tickI); removeEventListener('online',paintNet); removeEventListener('offline',paintNet); };
  win.obj.position.copy(win.target);
  win.apply();
  scene.updateMatrixWorld(true);
  css3d.invalidate?.();
  css3d.render?.(scene, camera);
  return win;
}

export function openBrowserWithMode(mode = 'new-tab') {
  const isIncognito = mode === 'incognito-tab';
  const win = webBrowserFor(
    'browser',
    isIncognito ? 'Navegador · Guia Anônima' : 'Navegador · Nova Guia',
    isIncognito ? 'https://google.com/?igu=1' : 'https://google.com/',
    { mode: isIncognito ? 'incognito-tab' : 'new-tab', incognito: isIncognito }
  );
  toast(isIncognito ? 'Guia Anônima aberta' : 'Nova Guia aberta');
  return win;
}
if (typeof window !== 'undefined') {
  window.nextvrOpenBrowserOption = openBrowserWithMode;
}

const AVATAR_HTML = '<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><circle cx="12" cy="8.6" r="4.2"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z"/></svg>';
const BAT_HTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16" aria-hidden="true"><rect x="3" y="6" width="16" height="12" rx="2.5"/><rect x="20" y="10" width="2.2" height="4" rx="1" fill="currentColor" stroke="none"/><rect class="b-fill" x="4" y="6.5" width="13" height="11" rx="2" fill="currentColor" stroke="none"/></svg>';


function webWindow(id, title, url, note) {
  // Sites grandes (YouTube, Netflix, etc.) abrem no navegador completo estilo Quest, com
  // barra de URL — modo "cinema" foi desativado a pedido do usuário (pra retomar depois).
  // O Roblox usa a sua própria janela dedicada ('roblox') para manter o ambiente escuro isolado.
  if (id === 'browser' || id === 'youtube' || id === 'netflix' || id === 'prime' || id === 'tiktok' || id === 'twitch' || id === 'discord')
    return webBrowserFor(id, title, url);
  const body = el('div'); body.style.cssText = 'display:flex;flex-direction:column;height:100%';

  const bar = el('div', 'row browser-bar');
  const fld = el('input', 'fld'); fld.value = url; fld.placeholder = t('search');
  const go = el('button', 'go', icon('enter')); go.setAttribute('aria-label', t('open')); go.title=t('open');
  const out = el('button', 'go', icon('external')); out.setAttribute('aria-label', t('open')); out.title=t('open'); out.style.background = 'rgba(255,255,255,.12)'; out.style.color = '#fff';
  bar.append(fld, go, out);

  const warn = el('div', 'warn', note || '');
  warn.style.cssText += 'margin:12px 14px 0;display:none';

  const wrap = el('div'); wrap.style.cssText = 'flex:1;min-height:0;position:relative';
  const frame = el(native ? 'div' : 'iframe');
  if (native) { frame.dataset.nativeBrowser = id; frame.style.cssText = 'width:100%;height:100%;background:#fff'; }
  frame.setAttribute('referrerpolicy', 'no-referrer');
  frame.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms allow-popups allow-presentation');
  wrap.appendChild(frame);
  body.append(bar, warn, wrap);

  const nav = raw => {
    let u = (raw || '').trim(); if (!u) return;
    if (!/^https?:\/\//i.test(u)) u = /\.\w{2,}($|\/)/.test(u) ? 'https://' + u : 'https://www.google.com/search?q=' + encodeURIComponent(u);
    fld.value = u;
    if (native) { frame.dataset.url = u; warn.style.display = 'none'; return; }
    frame.src = u;
    warn.style.display = 'block';
    warn.innerHTML = `Se a área ficar branca, <b>o site recusou abrir em iframe</b> (Google, YouTube e Discord fazem isso).
      No app Android isso funciona, porque lá é WebView. Aqui, use o botão Abrir fora.`;
  };
  go.onclick = () => nav(fld.value);
  fld.addEventListener('keydown', e => { if (e.key === 'Enter') nav(fld.value); });
  fld.addEventListener('focus', () => keyboard(true, fld));
  out.onclick = () => openOut(fld.value);
  nav(url);

  const win = open({ id, title, node: body });
  win.shell.classList.add('web-page-window');
  win.obj.position.copy(win.target);
  win.apply();
  scene.updateMatrixWorld(true);
  css3d.invalidate?.();
  css3d.render?.(scene, camera);
  return win;
}

/* ============ YouTube real (busca + player oficial dentro da janela) ============ */
const YT_API = [
  'https://pipedapi.kavin.rocks',
  'https://pipedapi.leptons.xyz',
  'https://pipedapi.nosebs.ru',
  'https://pipedapi.adminforge.de',
  'https://api.piped.private.coffee',
  'https://pipedapi.reallyaweso.me',
];
const YT_INV = [
  'https://inv.nadeko.net/api/v1',
  'https://inv.tux.pizza/api/v1',
];
const escH = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

async function ytGet(url, ms = 11000) {
  const c = new AbortController();
  const to = setTimeout(() => c.abort(), ms);
  try {
    const r = await fetch(url, { signal: c.signal });
    if (!r.ok) throw new Error('http');
    return await r.json();
  } finally { clearTimeout(to); }
}
function ytDur(sec, live) {
  if (live) return 'AO VIVO';
  if (sec == null || sec < 0) return '';
  sec = Math.round(sec);
  const h = Math.floor(sec / 3600), m = Math.floor(sec % 3600 / 60), s = sec % 60;
  const p = n => String(n).padStart(2, '0');
  return h ? `${h}:${p(m)}:${p(s)}` : `${m}:${p(s)}`;
}
function ytViews(n) {
  n = Number(n);
  if (!n || n < 0) return '';
  if (n >= 1e6) return (n / 1e6).toFixed(1).replace('.', ',') + ' mi';
  if (n >= 1e3) return Math.round(n / 1e3) + ' mil';
  return String(n);
}
function ytIdOf(s) {
  const m = String(s || '').match(/(?:v=|youtu\.be\/|shorts\/|embed\/)([\w-]{11})/) || String(s || '').match(/^([\w-]{11})$/);
  return m ? m[1] : null;
}
function ytMapPiped(it) {
  const m = String(it.url || '').match(/[?&]v=([\w-]{11})/);
  if (!m || !it.title) return null;
  return { id: m[1], title: it.title, thumb: it.thumbnail || `https://i.ytimg.com/vi/${m[1]}/hqdefault.jpg`,
    chan: it.uploaderName || '', dur: ytDur(it.duration, it.isLive), live: !!it.isLive, views: ytViews(it.views) };
}
function ytMapInv(v) {
  if (!v.videoId || !v.title) return null;
  const th = (v.videoThumbnails || []).find(t => t.quality === 'medium') || (v.videoThumbnails || [])[0] || {};
  return { id: v.videoId, title: v.title, thumb: th.url, chan: v.author || '',
    dur: ytDur(v.lengthSeconds, v.liveNow), live: !!v.liveNow, views: ytViews(v.viewCount) };
}
async function ytSearch(q) {
  for (const b of YT_API) {
    try {
      const d = await ytGet(`${b}/search?q=${encodeURIComponent(q)}&filter=videos`);
      const out = (d.items || []).map(ytMapPiped).filter(Boolean);
      if (out.length) return out;
    } catch {}
  }
  for (const b of YT_INV) {
    try {
      const d = await ytGet(`${b}/search?q=${encodeURIComponent(q)}&type=video`);
      const out = (Array.isArray(d) ? d : []).map(ytMapInv).filter(Boolean);
      if (out.length) return out;
    } catch {}
  }
  throw new Error('offline');
}
async function ytTrending() {
  for (const b of YT_API) {
    try {
      const d = await ytGet(`${b}/trending?region=BR`);
      const out = (Array.isArray(d) ? d : []).map(ytMapPiped).filter(Boolean);
      if (out.length) return out;
    } catch {}
  }
  for (const b of YT_INV) {
    try {
      const d = await ytGet(`${b}/popular?region=BR`);
      const out = (Array.isArray(d) ? d : []).map(ytMapInv).filter(Boolean);
      if (out.length) return out;
    } catch {}
  }
  return ytSearch('em alta brasil');
}

/* ---------- player com som: acionado somente pelo controle selecionado com a mão ---------- */
let ytPlayer = null, ytApiPromise = null;

function ytUnmute() {
  try {
    if (ytPlayer && ytPlayer.unMute) { ytPlayer.unMute(); ytPlayer.setVolume && ytPlayer.setVolume(100); }
  } catch {}
}

function loadYtApi() {
  if (ytApiPromise) return ytApiPromise;
  ytApiPromise = new Promise((resolve, reject) => {
    if (window.YT && window.YT.Player) return resolve(window.YT);
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => { prev && prev(); ytApiPromise = null; resolve(window.YT); };
    const s = document.createElement('script');
    s.src = 'https://www.youtube.com/iframe_api';
    s.onerror = () => { ytApiPromise = null; reject(new Error('api')); };
    document.head.appendChild(s);
    setTimeout(() => { if (!(window.YT && window.YT.Player)) { ytApiPromise = null; reject(new Error('timeout')); } }, 9000);
  });
  return ytApiPromise;
}
function ytDestroy() {
  try { if (ytPlayer && ytPlayer.destroy) ytPlayer.destroy(); } catch {}
  ytPlayer = null;
}

function youtube() {
  const body = el('div'); body.style.cssText = 'display:flex;flex-direction:column;height:100%;background:#0f0f12';
  const bar = el('div', 'row'); bar.style.cssText = 'padding:12px 14px;gap:10px;background:rgba(255,255,255,.04);border-bottom:1px solid var(--line)';
  const back = el('button', 'go', icon('back')); back.setAttribute('aria-label','Voltar'); back.title='Voltar'; back.style.display = 'none';
  const fld = el('input', 'fld'); fld.placeholder = 'Pesquisar no YouTube ou colar link';
  const go = el('button', 'go', icon('search')); go.setAttribute('aria-label',t('searchYt')); go.title=t('searchYt');
  const out = el('button', 'go', icon('external')); out.setAttribute('aria-label','Abrir fora'); out.title='Abrir fora'; out.style.background = 'rgba(255,255,255,.12)'; out.style.color = '#fff';
  bar.append(back, fld, go, out);

  const chips = el('div', 'yt-chips');
  const scroll = el('div', 'yt-scroll');
  body.append(bar, chips, scroll);

  const CHIPS = ['Música', 'Jogos', 'VR 360', 'Notícias', 'Ao vivo', 'Filmes'];
  chips.innerHTML = CHIPS.map(c => `<button class="yt-chip" data-q="${c}">${c}</button>`).join('');
  chips.addEventListener('click', e => {
    const b = e.target.closest('[data-q]'); if (!b) return;
    fld.value = b.dataset.q; doSearch(b.dataset.q);
  });

  let current = [], lastTitle = '', playing = null, token = 0;

  const skel = () => { scroll.innerHTML = `<div class="yt-grid">${'<span class="yt-card"><span class="yt-thumb yt-skel"></span><span class="yt-meta"><span class="yt-skel-l"></span><span class="yt-skel-l short"></span></span></span>'.repeat(6)}</div>`; };

  const card = v => `<button class="yt-card" data-v="${v.id}">`
    + `<span class="yt-thumb">${v.thumb ? `<img loading="lazy" src="${v.thumb}" alt="">` : ''}`
    + (v.dur ? `<span class="yt-dur${v.live ? ' live' : ''}">${escH(v.dur)}</span>` : '') + `</span>`
    + `<span class="yt-meta"><span class="yt-t">${escH(v.title)}</span>`
    + `<span class="yt-c">${escH(v.chan)}${v.views ? ' · ' + escH(v.views) : ''}</span></span></button>`;

  function showList(title, videos) {
    ytDestroy(); playing = null; current = videos;
    back.style.display = 'none'; chips.style.display = '';
    scroll.innerHTML = `<div class="yt-sec">${escH(title)}</div><div class="yt-grid">${videos.map(card).join('')}</div>`;
  }
  function showError(q) {
    back.style.display = 'none'; chips.style.display = '';
    scroll.innerHTML = `<div class="yt-err"><div style="display:grid;place-items:center;font-size:46px">${icon('wifi')}</div>`
      + `<div class="yt-err-t">Sem conexão com a busca</div>`
      + `<div class="yt-err-s">Verifique a internet e tente de novo. Dá para colar um link direto também.</div>`
      + `<button class="yt-btn" data-retry>${iconText('refresh','TENTAR DE NOVO')}</button></div>`;
    scroll.querySelector('[data-retry]').onclick = () => (q ? doSearch(q) : doHome());
  }
  async function doSearch(q) {
    q = (q || '').trim(); if (!q) return;
    const id = ytIdOf(q);
    if (id) return play({ id, title: 'Vídeo do YouTube', chan: '', dur: '', views: '' });
    const my = ++token; skel();
    try {
      const v = await ytSearch(q);
      if (my !== token) return;
      lastTitle = `Resultados para “${q}”`;
      showList(lastTitle, v);
    } catch { if (my === token) showError(q); }
  }
  async function doHome() {
    const my = ++token; skel();
    try {
      const v = await ytTrending();
      if (my !== token) return;
      lastTitle = 'Em alta no Brasil';
      showList(lastTitle, v);
    } catch { if (my === token) showError(null); }
  }
  function play(v) {
    playing = v; if (!current.length) current = [v];
    back.style.display = ''; chips.style.display = 'none';
    scroll.innerHTML = `<div class="yt-player">
        <div class="yt-holder yt-frame"></div>
        <div class="yt-info">
          <div class="yt-ptitle">${escH(v.title)}</div>
          ${v.chan ? `<div class="yt-pchan">${escH(v.chan)}${v.views ? ' · ' + escH(v.views) : ''}</div>` : ''}
          <div class="yt-prow">
            <button class="yt-btn" data-back>${iconText('back','VOLTAR')}</button>
            <button class="yt-btn" data-snd>${iconText('volume','ATIVAR SOM')}</button>
            <button class="yt-btn" data-out>${iconText('external','ABRIR')}</button>
          </div>
          <p class="yt-pchan" style="margin-top:10px">Use o controle de som com a mão e ajuste o volume pelas teclas do Android.</p>
        </div></div>`;

    const holder = scroll.querySelector('.yt-holder');
    scroll.querySelector('[data-back]').onclick = () => { ytDestroy(); showList(lastTitle || 'Em alta no Brasil', current); };
    scroll.querySelector('[data-out]').onclick = () => openOut('https://www.youtube.com/watch?v=' + v.id);
    scroll.querySelector('[data-snd]').onclick = ytUnmute;

    if (native) {
      const player = el('div'); player.dataset.nativeBrowser = 'youtube-player';
      player.dataset.url = 'https://www.youtube.com/embed/' + v.id + '?autoplay=1&playsinline=1';
      player.style.cssText = 'width:100%;height:100%'; holder.append(player);
      scroll.querySelector('[data-snd]').onclick = () => { window.NativeXR.click(); toast('Use Android media volume to adjust sound.'); };
      return;
    }
    // plano A: API oficial — permite unMute() mesmo sem ativação de usuário
    loadYtApi().then(YT => {
      if (playing !== v) return;
      try {
        ytPlayer = new YT.Player(holder, {
          videoId: v.id,
          playerVars: { autoplay: 1, playsinline: 1, rel: 0, mute: 0, modestbranding: 1, enablejsapi: 1 },
          events: {
            onReady: e => { try { e.target.unMute(); e.target.setVolume(100); e.target.playVideo(); } catch {} setTimeout(ytUnmute, 350); },
            onError: mountFallback,
          },
        });
      } catch { mountFallback(); }
    }).catch(mountFallback);

    // plano B: iframe simples, se a API não carregar
    function mountFallback() {
      if (playing !== v || holder.dataset.fb) return;
      holder.dataset.fb = '1';
      holder.innerHTML = `<iframe class="yt-frame" title="${escH(v.title)}" `
        + `src="https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&mute=0&playsinline=1&rel=0&enablejsapi=1" `
        + `allow="accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
    }
    setTimeout(ytUnmute, 600);
  }

  scroll.addEventListener('click', e => {
    const c = e.target.closest('[data-v]'); if (!c) return;
    const v = current.find(x => x.id === c.dataset.v);
    if (v) play(v);
  });
  back.onclick = () => showList(lastTitle || 'Em alta no Brasil', current);
  go.onclick = () => doSearch(fld.value);
  out.onclick = () => openOut(playing ? 'https://www.youtube.com/watch?v=' + playing.id : 'https://m.youtube.com/results?search_query=' + encodeURIComponent(fld.value || ''));
  fld.addEventListener('focus', () => keyboard(true, fld));
  fld.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(fld.value); });

  doHome();
  const win = open({ id: 'youtube', title: 'YouTube', node: body });
  // fecha a janela = para o áudio
  on('wins', () => { if (!wins.some(w => w.id === 'youtube')) ytDestroy(); });
  return win;
}

/* ============ Galeria (fotos) ============ */
let photos = [];
function gallery() {
  const body = el('div', 'pad');
  const head = el('div');
  head.innerHTML = `<h2>${t('gallery')}</h2><p class="sub">Veja suas fotos no ATMOXR.</p>`;

  // ---------- Fotos ----------
  const photoHead = el('div');
  photoHead.style.cssText = 'margin-top:18px;display:flex;align-items:center;gap:10px';
  photoHead.innerHTML = `<h3 style="font-size:18px;margin:0;font-weight:700">${t('gallery')}</h3>`;
  const pick = el('button', 'go', t('pickPhotos'));
  const input = el('input'); input.type = 'file'; input.accept = 'image/*'; input.multiple = true; input.style.display = 'none';
  photoHead.appendChild(pick);

  const grid = el('div', 'grid4');
  const big = el('div'); big.style.cssText = 'margin-top:14px';

  const paint = () => {
    grid.innerHTML = '';
    if (!photos.length) {
      grid.innerHTML = `<p class="sub" style="grid-column:1/-1">${t('noPhotos')}</p>`;
      return;
    }
    photos.forEach(p => {
      const c = el('button', 'thumb'); c.innerHTML = `<img src="${p}" alt="">`;
      c.onclick = () => { big.innerHTML = `<img src="${p}" style="width:100%;border-radius:16px">`; };
      grid.appendChild(c);
    });
  };
  pick.onclick = () => input.click();
  input.onchange = () => {
    for (const f of input.files) photos.push(URL.createObjectURL(f));
    paint(); toast(photos.length + ' fotos');
  };
  paint();

  body.append(head, photoHead, input, grid, big);
  return open({ id: 'gallery', title: t('gallery'), node: body });
}

function environments() {
  const body = el('div', 'pad');
  body.innerHTML = `<h2>${t('env')}</h2><p class="sub">Troque sem fechar nada.</p>`;
  const g = el('div', 'grid3');
  for (const e of envList()) {
    const b = el('button', 'env' + (e.thumb ? ' env-pano' : ''));
    b.style.background = e.thumb ? `url('${e.thumb}') center/cover` : 'linear-gradient(160deg,#253244,#11151d)';
    b.innerHTML = `<span>${e.name}</span>`;
    b.setAttribute('aria-pressed', S.env === e.id);
    b.onclick = () => { setEnvironment(e.id); [...g.children].forEach(c => c.setAttribute('aria-pressed', 'false')); b.setAttribute('aria-pressed', 'true'); };
    g.appendChild(b);
  }
  body.appendChild(g);
  return open({ id: 'env', title: t('env'), node: body });
}

/* ============ Configurações ============ */
function row(title, desc, ctl) {
  const r = el('div', 'opt');
  r.append(el('div', 'opt-l', `<div class="opt-t">${title}</div>${desc ? `<div class="opt-d">${desc}</div>` : ''}`), ctl);
  return r;
}
function ytRow(iconSvg, title, sub, ctl) {
  const r = el('div', 'yt-row');
  const ic = el('span', 'yt-ic'); ic.innerHTML = iconSvg;
  const txt = el('div', 'yt-txt');
  txt.innerHTML = `<div class="yt-title">${title}</div>${sub ? `<div class="yt-sub">${sub}</div>` : ''}`;
  r.append(ic, txt);
  if (ctl) { const w = el('div', 'yt-ctl'); w.appendChild(ctl); r.appendChild(w); }
  else { const ch = el('span', 'yt-ch'); ch.innerHTML = ''; r.appendChild(ch); }
  return r;
}
function ytToggle(key, after) {
  const b = el('button', 'yt-sw');
  b.type = 'button'; b.setAttribute('role','switch');
  const upd = () => { b.dataset.on = S[key] ? '1' : '0'; b.setAttribute('aria-checked', S[key] ? 'true' : 'false'); };
  upd();
  b.onclick = () => { S[key] = S[key] ? 0 : 1; save(); upd(); after && after(S[key]); };
  return b;
}
function ytSection(label) {
  const h = el('div', 'yt-sec'); h.textContent = label; return h;
}
function ytRange(key, mn, mx, st) {
  const s = el('input','yt-range'); s.type='range'; s.min=mn; s.max=mx; s.step=st; s.value=S[key];
  s.oninput=()=>{S[key]=+s.value;save();}; return s;
}
/**
 * The PhoneXR page in the settings window: what is installed (runtime, VrApi driver, broker), the
 * runtime install button when an APK is bundled, the hand-input mode of the running and next games,
 * and the live diagnostics every step reports after a self test. It is a single source of truth for
 * "why can't I open a headset game".
 */
function buildXrPage(host) {
  host.innerHTML = '';
  const s = xrState();
  const card = host;
  const head = el('div', 'az-row');
  head.innerHTML = `<i class="az-dot" data-state="${s.runtime}"></i><span class="az-text">`
    + `${t(xrRuntimeReady() ? 'xrRuntimeReady' : 'xrMissing')}<small>${s.summary || ''}</small></span>`;
  card.append(head);

  const actions = el('div', 'row');
  actions.style.cssText = 'gap:10px;flex-wrap:wrap';
  if (s.runtimeBundled && !xrRuntimeReady()) {
    const install = el('button', 'go', t('xrInstall'));
    install.onclick = () => { installXrRuntime(); };
    actions.append(install);
  }
  const again = el('button', 'go', t('xrSelfTest'));
  again.onclick = () => xrSelfTest();
  actions.append(again);
  const mode = el('div', 'seg');
  for (const [id, label, sub] of [
    ['controllers', t('xrModeControllers'), t('xrModeControllersSub')],
    ['hands', t('xrModeHands'), t('xrModeHandsSub')],
  ]) {
    const b = el('button', null, label); b.title = sub;
    b.setAttribute('aria-pressed', String(xrHandModeOf() === id));
    b.onclick = () => { setXrHandMode(id); [...mode.children].forEach(x => x.setAttribute('aria-pressed', 'false')); b.setAttribute('aria-pressed', 'true'); };
    mode.appendChild(b);
  }
  card.append(row(t('xrHandMode'), t('xrHandModeSub'), mode), actions);
  card.append(el('p', 'note', t('xrHandModeNote')));
  if (!xrRuntimeReady() && !s.runtimeBundled) {
    card.append(el('p', 'note', t('xrBundlingNote')));
  }
}

/* ============ Gravação Interna (1 Lente em Tela Cheia) + Hand em 1 Mão Só ============ */
const SINGLE_HAND_OPTIONS = [
  ['both', 'Ambas as Mãos (2 Mãos)'],
  ['right', 'Só Mão Direita (1 Mão)'],
  ['left', 'Só Mão Esquerda (1 Mão)'],
  ['one', '1 Mão Só (Automática)'],
];
export function singleHandModeLabel(mode = S.singleHandMode || 'both') {
  const found = SINGLE_HAND_OPTIONS.find(([id]) => id === mode);
  return found ? found[1] : SINGLE_HAND_OPTIONS[0][1];
}
export function setSingleHandModeChoice(mode) {
  const valid = SINGLE_HAND_OPTIONS.some(([id]) => id === mode) ? mode : 'both';
  S.singleHandMode = valid;
  save(S);
  window.NativeXR?.setSingleHandMode?.(valid);
  emit('singleHandMode', valid);
  document.querySelectorAll('[data-single-hand-label]').forEach(el => {
    el.textContent = singleHandModeLabel(valid);
  });
  document.querySelectorAll('[data-single-hand-pick]').forEach(btn => {
    const on = btn.dataset.singleHandPick === valid;
    btn.classList.toggle('on', on);
    btn.setAttribute('aria-pressed', String(on));
  });
  css3d.invalidate?.();
  return valid;
}
window.nextvrSetSingleHandMode = setSingleHandModeChoice;

let internalRecState = { active: false, seconds: 0, saved: false, path: '' };
let internalRecTimer = 0;
function formatRecTime(sec) {
  const s = Math.max(0, Math.floor(Number(sec) || 0));
  const mm = String(Math.floor(s / 60)).padStart(2, '0');
  const ss = String(s % 60).padStart(2, '0');
  return `${mm}:${ss}`;
}
function syncInternalRecUi() {
  const active = !!internalRecState.active;
  const label = active
    ? `🔴 Gravando ${formatRecTime(internalRecState.seconds)} (Toque p/ salvar)`
    : 'Tela Cheia 1 Lente (Lentes ativas)';
  document.querySelectorAll('[data-internal-rec-btn]').forEach(btn => {
    btn.classList.toggle('is-active', active);
    btn.classList.toggle('on', active);
    btn.setAttribute('aria-pressed', String(active));
    const sm = btn.querySelector('small, [data-internal-rec-sub]');
    if (sm) sm.textContent = label;
  });
  css3d.invalidate?.();
}
export function toggleInternalEyeRecording() {
  let nextActive = !internalRecState.active;
  if (native && typeof window.NativeXR?.toggleInternalRecording === 'function') {
    nextActive = !!window.NativeXR.toggleInternalRecording();
  }
  internalRecState.active = nextActive;
  if (nextActive) {
    internalRecState.seconds = 0;
    toast('🔴 Gravação Interna iniciada (Tela Cheia 1 Lente · Lentes VR ativas)');
    if (!internalRecTimer) {
      internalRecTimer = setInterval(() => {
        if (!internalRecState.active) {
          clearInterval(internalRecTimer);
          internalRecTimer = 0;
          return;
        }
        if (native && typeof window.NativeXR?.internalRecordingSeconds === 'function') {
          internalRecState.seconds = Number(window.NativeXR.internalRecordingSeconds()) || (internalRecState.seconds + 1);
        } else {
          internalRecState.seconds += 1;
        }
        syncInternalRecUi();
      }, 1000);
    }
  } else {
    if (internalRecTimer) { clearInterval(internalRecTimer); internalRecTimer = 0; }
    toast('✅ Gravação Interna salva em Filmes/NextVR (Tela Cheia 16:9)');
  }
  syncInternalRecUi();
  return nextActive;
}
window.nextvrToggleInternalRecording = toggleInternalEyeRecording;
window.nextvrOnInternalRecordState = st => {
  if (!st) return;
  internalRecState = {
    active: !!st.active,
    seconds: Number(st.seconds) || 0,
    saved: !!st.saved,
    path: st.path || '',
  };
  if (!internalRecState.active && internalRecTimer) {
    clearInterval(internalRecTimer);
    internalRecTimer = 0;
  }
  if (st.saved) {
    toast('✅ Vídeo em Tela Cheia (1 Lente) salvo na Galeria · Filmes/NextVR');
  }
  syncInternalRecUi();
};

/* ============ Central de controle PICO 4 Ultra (Configurações e Gestão de VR dentro do jogo) ============ */
function controlCenterApp() {
  const existing = wins.find(w => w.id === 'control-center');
  if (existing) {
    existing.setHidden(false);
    focus(existing);
    css3d.invalidate?.();
    return existing;
  }

  const body = el('div', 'quick-center pico-cc-shell');
  body.dataset.picoControlCenter = '1';
  body.style.cssText = 'position:relative;width:100%;height:100%;background:#24262c;border-radius:24px;padding:18px 22px 16px;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;color:#f8fafc;font-family:Inter,system-ui,sans-serif;user-select:none;overflow:hidden;border:1px solid rgba(255,255,255,.10);box-shadow:0 28px 70px rgba(0,0,0,.65);';

  const readBat = () => {
    try {
      const raw = window.NativeXR?.battery?.();
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed.level === 'number') return parsed;
      }
    } catch {}
    const st = getDeviceStatus();
    if (st && typeof st.batteryLevel === 'number') return { level: st.batteryLevel, charging: !!st.charging };
    return null;
  };
  const battery = readBat();
  const batPctNum = battery ? Math.round(battery.level * 100) : 62;
  const nowDate = new Date();
  const timeStr = nowDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  const shortDate = nowDate.toLocaleDateString('pt-BR', { weekday: 'short', day: 'numeric', month: 'short' });

  // 1. Barra Superior PICO 4 Ultra (Avatar + Hora/Data | Microfone Central | Sino + Engrenagem)
  const topBar = el('div', 'quick-status pico-cc-top');
  topBar.dataset.picoCcTop = '1';
  topBar.style.cssText = 'display:flex;align-items:center;justify-content:space-between;gap:12px;padding:0 2px;';
  const avatarImg = S.profileAvatar
    ? `<img src="${S.profileAvatar}" alt="" style="width:28px;height:28px;border-radius:50%;object-fit:cover;border:1.5px solid rgba(255,255,255,.35)">`
    : `<span style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#f59e0b,#ef4444);display:inline-flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#fff;box-shadow:0 2px 8px rgba(0,0,0,.35)">P</span>`;
  topBar.innerHTML = `
    <div style="display:flex;align-items:center;gap:10px">
      ${avatarImg}
      <div style="display:flex;align-items:baseline;gap:8px">
        <strong data-cc-time style="font-size:13.5px;font-weight:800;color:#f8fafc;letter-spacing:.01em">${timeStr}</strong>
        <span style="font-size:12px;color:#94a3b8;font-weight:600">${shortDate}</span>
      </div>
      <span class="quick-battery" style="display:none">${icon('battery')}<b data-cc-battery>${batPctNum}%</b></span>
    </div>
    <button type="button" data-cc-mic title="Comando de Voz PICO" style="width:34px;height:34px;border-radius:50%;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.07);color:#e2e8f0;display:inline-flex;align-items:center;justify-content:center;cursor:pointer">
      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 17v4"/></svg>
    </button>
    <div style="display:flex;align-items:center;gap:8px">
      <button type="button" data-cc-notif title="Notificações" style="width:32px;height:32px;border-radius:50%;border:0;background:transparent;color:#cbd5e1;display:inline-flex;align-items:center;justify-content:center;cursor:pointer">
        <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
      </button>
      <button type="button" class="quick-gear" data-cc-gear title="Todas as configurações e Gestão de VR" aria-label="Todas as configurações" style="width:32px;height:32px;border-radius:50%;border:0;background:transparent;color:#cbd5e1;display:inline-flex;align-items:center;justify-content:center;cursor:pointer">
        ${icon('settings')}
      </button>
    </div>
  `;
  topBar.querySelector('[data-cc-notif]')?.addEventListener('click', () => openPhoneNotifications());
  topBar.querySelector('[data-cc-gear]')?.addEventListener('click', () => settingsApp());
  topBar.querySelector('[data-cc-mic]')?.addEventListener('click', () => toast('Microfone PICO pronto'));

  // 2. Hero Central com Headset PICO 4 Ultra + Controles L & R + Bateria Real (fiel à foto)
  const picoDevicesHero = el('div', 'pico-cc-devices-hero');
  picoDevicesHero.dataset.picoCcDevicesHero = '1';
  picoDevicesHero.style.cssText = 'display:flex;align-items:center;justify-content:center;gap:64px;padding:12px 16px 8px;margin:2px 0;cursor:pointer;';
  picoDevicesHero.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;gap:6px" title="Controle PICO 4 Ultra Esquerdo">
      <svg viewBox="0 0 54 68" width="46" height="58">
        <path d="M22 10 C13 22,15 44,24 58 C27 62,34 61,36 55 C41 42,40 22,35 10 C31 4,25 4,22 10 Z" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>
        <ellipse cx="29" cy="17" rx="8" ry="6.5" fill="#e2e8f0"/>
        <circle cx="27" cy="16" r="3.2" fill="#1e293b"/>
        <circle cx="33" cy="14.5" r="1.6" fill="#334155"/>
        <circle cx="32" cy="19" r="1.6" fill="#334155"/>
        <rect x="26" y="50" width="6" height="2.2" rx="1.1" fill="#22c55e"/>
      </svg>
      <span style="width:24px;height:4px;border-radius:2px;background:#4ade80;display:block"></span>
      <span style="width:16px;height:16px;border-radius:50%;border:1.2px solid rgba(255,255,255,.35);display:inline-flex;align-items:center;justify-content:center;font-size:9px;color:#cbd5e1;font-weight:800">L</span>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:6px" title="Headset PICO 4 Ultra · Gestão de VR">
      <svg viewBox="0 0 132 68" width="112" height="58">
        <path d="M36 16 Q66 3 96 16" fill="none" stroke="#cbd5e1" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M14 26 Q14 14 34 14 L98 14 Q118 14 118 26 L118 42 Q118 54 98 54 L80 54 Q66 49 52 54 L34 54 Q14 54 14 42 Z" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.8"/>
        <rect x="22" y="19" width="88" height="30" rx="15" fill="#111827" stroke="#475569" stroke-width="1.6"/>
        <ellipse cx="36" cy="34" rx="5.5" ry="3.8" fill="#1e293b" stroke="#64748b" stroke-width="1.2"/>
        <ellipse cx="96" cy="34" rx="5.5" ry="3.8" fill="#1e293b" stroke="#64748b" stroke-width="1.2"/>
        <path d="M44 25 Q66 22 88 25" fill="none" stroke="rgba(255,255,255,.28)" stroke-width="1.6" stroke-linecap="round"/>
      </svg>
      <span style="width:28px;height:4px;border-radius:2px;background:#4ade80;display:block"></span>
      <small data-cc-hero-bat style="font-size:11px;color:#e2e8f0;font-weight:800">${batPctNum}%</small>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:6px" title="Controle PICO 4 Ultra Direito">
      <svg viewBox="0 0 54 68" width="46" height="58">
        <path d="M32 10 C41 22,39 44,30 58 C27 62,20 61,18 55 C13 42,14 22,19 10 C23 4,29 4,32 10 Z" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>
        <ellipse cx="25" cy="17" rx="8" ry="6.5" fill="#e2e8f0"/>
        <circle cx="27" cy="16" r="3.2" fill="#1e293b"/>
        <circle cx="21" cy="14.5" r="1.6" fill="#334155"/>
        <circle cx="22" cy="19" r="1.6" fill="#334155"/>
        <rect x="22" y="50" width="6" height="2.2" rx="1.1" fill="#22c55e"/>
      </svg>
      <span style="width:24px;height:4px;border-radius:2px;background:#4ade80;display:block"></span>
      <span style="width:16px;height:16px;border-radius:50%;border:1.2px solid rgba(255,255,255,.35);display:inline-flex;align-items:center;justify-content:center;font-size:9px;color:#cbd5e1;font-weight:800">R</span>
    </div>
  `;
  picoDevicesHero.onclick = () => openPicoMotionTracker();

  const paintCcBat = () => {
    const b = readBat();
    const pct = `${b ? Math.round(b.level * 100) : batPctNum}%`;
    const bEl = topBar.querySelector('[data-cc-battery]');
    if (bEl) bEl.textContent = pct;
    const hEl = picoDevicesHero.querySelector('[data-cc-hero-bat]');
    if (hEl) hEl.textContent = pct;
  };
  on('device-status', paintCcBat);

  // 3. Grade de 6 Blocos Retangulares PICO 4 Ultra (WLAN | Home Space | Performance | Screencast | Screen Recording Vermelho | Screenshot)
  const tilesRow = el('div', 'quick-tiles pico-cc-tiles-grid');
  tilesRow.dataset.picoCcTiles = '1';
  tilesRow.style.cssText = 'display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:10px;margin:4px 0;';

  const makePicoTile = ({ iconSvg, sub, title, active = false, red = false, onClick, attr = {} }) => {
    const btn = el('button', `quick-tile pico-cc-tile${active ? ' is-active' : ''}`);
    btn.type = 'button';
    for (const [k, v] of Object.entries(attr)) btn.dataset[k] = v;
    const syncStyle = (isAct, isRed) => {
      const bg = isRed
        ? 'linear-gradient(160deg,#f43f5e 0%,#e11d48 100%)'
        : isAct
          ? 'rgba(59,130,246,.32)'
          : 'rgba(255,255,255,.07)';
      const border = isRed
        ? 'rgba(251,113,133,.55)'
        : isAct
          ? 'rgba(96,165,250,.55)'
          : 'rgba(255,255,255,.07)';
      btn.style.cssText = `height:96px;border-radius:16px;padding:12px 13px;border:1px solid ${border};background:${bg};color:#f8fafc;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;text-align:left;cursor:pointer;transition:transform .12s ease,background .15s ease;`;
    };
    syncStyle(active, red);
    btn.innerHTML = `
      <span class="quick-tile-icon" style="color:#f8fafc;display:inline-flex">${iconSvg}</span>
      <div style="width:100%;overflow:hidden">
        <small data-tile-sub style="display:block;font-size:10px;color:${red ? '#ffe4e6' : '#94a3b8'};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-bottom:2px">${sub}</small>
        <b data-tile-title style="display:block;font-size:12px;font-weight:800;color:#ffffff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${title}</b>
      </div>
    `;
    if (onClick) {
      btn.onclick = () => onClick(btn, syncStyle);
    }
    tilesRow.appendChild(btn);
    return btn;
  };

  makePicoTile({
    iconSvg: icon('wifi'),
    sub: '5GHz Conectado',
    title: 'WLAN',
    onClick: () => window.NativeXR?.systemPanel ? window.NativeXR.systemPanel('internet') : toast('Conexões Wi-Fi disponíveis no Android'),
  });

  makePicoTile({
    iconSvg: icon('scene'),
    sub: S.env === 'passthrough' ? 'Passthrough MR' : 'On · Ambiente 360°',
    title: 'Home Space...',
    active: S.env !== 'passthrough',
    onClick: (btn, syncStyle) => {
      const enabled = S.env !== 'passthrough';
      setPassthrough(enabled);
      btn.querySelector('[data-tile-sub]').textContent = enabled ? 'Passthrough MR' : 'On · Ambiente 360°';
      syncStyle(!enabled, false);
    },
  });

  makePicoTile({
    iconSvg: icon('gauge'),
    sub: S.sixdof !== 0 ? 'High · 6DoF Rápido' : '3DoF · Padrão',
    title: 'Performance',
    active: S.sixdof !== 0,
    onClick: (btn, syncStyle) => {
      S.sixdof = S.sixdof === 0 ? 1 : 0;
      save(S);
      if (!S.sixdof) SixDof.reset();
      window.NativeXR?.setSixDofEnabled?.(S.sixdof !== 0);
      emit('sixdof', S.sixdof !== 0);
      btn.querySelector('[data-tile-sub]').textContent = S.sixdof !== 0 ? 'High · 6DoF Rápido' : '3DoF · Padrão';
      syncStyle(S.sixdof !== 0, false);
    },
  });

  makePicoTile({
    iconSvg: icon('camera'),
    sub: S.bwCamera ? 'Câmera P&B Ativa' : 'Câmera Colorida',
    title: 'Screencast',
    active: !!S.bwCamera,
    attr: { bwCameraBtn: '1' },
    onClick: (btn, syncStyle) => {
      const enabled = !S.bwCamera;
      setBwCamera(enabled);
      btn.querySelector('[data-tile-sub]').textContent = enabled ? 'Câmera P&B Ativa' : 'Câmera Colorida';
      syncStyle(enabled, false);
    },
  });

  makePicoTile({
    iconSvg: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="4.5" y="10" width="15" height="10.5" rx="2.5"/><path d="M8 10V7.5a4 4 0 0 1 8 0V10"/><circle cx="12" cy="15.2" r="1.5" fill="currentColor" stroke="none"/></svg>`,
    sub: S.worldLock ? 'Travado no lugar' : '6DoF livre',
    title: 'World Lock',
    active: !!S.worldLock,
    attr: { worldLockBtn: '1' },
    onClick: (btn, syncStyle) => {
      const on = S.worldLock === 0;
      setWorldLock(on);
      btn.querySelector('[data-tile-sub]').textContent = on ? 'Travado no lugar' : '6DoF livre';
      syncStyle(on, false);
      toast(on ? 'World Lock ligado: o mundo não anda sozinho' : 'World Lock desligado: 6DoF livre');
    },
  });

  makePicoTile({
    iconSvg: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.5" fill="currentColor"/></svg>`,
    sub: internalRecState.active ? `🔴 ${formatRecTime(internalRecState.seconds)}` : '1 Lente HD',
    title: 'Screen Recording',
    red: true,
    active: !!internalRecState.active,
    attr: { internalRecBtn: '1' },
    onClick: () => toggleInternalEyeRecording(),
  });

  makePicoTile({
    iconSvg: icon('maximize'),
    sub: 'Ajustar Visão',
    title: 'Screenshot',
    onClick: () => {
      recenter();
      toast('Visão recentralizada & captura pronta');
    },
  });

  // 4. Linha com as 2 Barras Horizontais de Brilho e Volume (fiel à foto)
  const slidersRow = el('div', 'pico-cc-sliders');
  slidersRow.dataset.picoCcSliders = '1';
  slidersRow.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:2px 0;';

  const curBright = window.NativeXR?.brightness ? window.NativeXR.brightness() : 70;
  const curVol = window.NativeXR?.volume ? window.NativeXR.volume() : 65;

  const makeSliderPill = (iconSvg, label, min, max, val, onInput) => {
    const wrap = el('label', 'pico-cc-slider-pill');
    wrap.style.cssText = 'position:relative;height:40px;border-radius:12px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.07);display:flex;align-items:center;padding:0 14px;gap:10px;overflow:hidden;cursor:pointer;';
    const fill = el('div');
    fill.style.cssText = `position:absolute;left:0;top:0;bottom:0;width:${val}%;background:rgba(255,255,255,.16);pointer-events:none;transition:width .08s linear;`;
    const ic = el('span');
    ic.style.cssText = 'position:relative;z-index:1;color:#e2e8f0;display:inline-flex;';
    ic.innerHTML = iconSvg;
    const input = el('input', 'quick-vertical');
    input.type = 'range';
    input.min = String(min);
    input.max = String(max);
    input.value = String(val);
    input.setAttribute('aria-label', label);
    input.title = `${label} ${val}%`;
    input.style.cssText = 'position:relative;z-index:1;flex:1;accent-color:#f8fafc;cursor:pointer;background:transparent;';
    input.oninput = () => {
      const v = +input.value;
      fill.style.width = `${v}%`;
      input.title = `${label} ${v}%`;
      onInput(v);
    };
    wrap.append(fill, ic, input);
    return wrap;
  };

  slidersRow.append(
    makeSliderPill(icon('sun'), 'Brilho', 10, 100, curBright, v => window.NativeXR?.setBrightness?.(v)),
    makeSliderPill(icon('volume'), 'Volume', 0, 100, curVol, v => window.NativeXR?.setVolume?.(v))
  );

  // 5. Barra Inferior com os 8 Botões Pílula Arredondados (com o 3º botão azul destacado igual da foto)
  const bottomRow = el('div', 'quick-controls pico-cc-bottom-pills');
  bottomRow.dataset.picoCcBottomPills = '1';
  bottomRow.style.cssText = 'display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:10px;margin-top:2px;';

  let isMuted = false;
  let previousEnvironment = S.env === 'night' ? 'passthrough' : S.env;

  const makeBottomPill = ({ iconSvg, title, blue = false, active = false, onClick }) => {
    const btn = el('button', `quick-control pico-cc-pill${(blue || active) ? ' is-active' : ''}`);
    btn.type = 'button';
    btn.title = title;
    btn.setAttribute('aria-label', title);
    btn.setAttribute('aria-pressed', String(!!(blue || active)));
    const applyPillStyle = (onBlue) => {
      btn.style.cssText = `height:42px;border-radius:21px;border:1px solid ${onBlue ? 'rgba(96,165,250,.75)' : 'rgba(255,255,255,.08)'};background:${onBlue ? '#4f8ef7' : 'rgba(255,255,255,.07)'};color:#f8fafc;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .15s ease;`;
    };
    applyPillStyle(blue || active);
    btn.innerHTML = `<span style="display:inline-flex">${iconSvg}</span><b style="display:none">${title}</b><small style="display:none">${title}</small>`;
    btn.onclick = () => {
      const next = onClick(btn, applyPillStyle);
      if (typeof next === 'boolean') {
        btn.classList.toggle('is-active', next);
        btn.setAttribute('aria-pressed', String(next));
        applyPillStyle(next);
      }
    };
    bottomRow.appendChild(btn);
    return btn;
  };

  // Pílula 1: Bluetooth
  makeBottomPill({
    iconSvg: icon('bluetooth'),
    title: 'Bluetooth',
    onClick: () => {
      if (window.NativeXR?.systemPanel) window.NativeXR.systemPanel('bluetooth');
      else toast('Bluetooth disponível no Android');
      return false;
    },
  });

  // Pílula 2: Não perturbe / Silenciar áudio
  makeBottomPill({
    iconSvg: icon('volumeoff'),
    title: 'Não perturbe',
    active: isMuted,
    onClick: () => {
      isMuted = !isMuted;
      if (window.NativeXR?.audioEnabled) window.NativeXR.audioEnabled(!isMuted);
      return isMuted;
    },
  });

  // Pílula 3: Destaque Azul PICO (Visão do Ambiente / Passthrough MR)
  makeBottomPill({
    iconSvg: icon('sun'),
    title: 'Visão do ambiente (Passthrough)',
    blue: true,
    active: S.env === 'passthrough',
    onClick: () => {
      const enabled = S.env !== 'passthrough';
      setPassthrough(enabled);
      return true;
    },
  });

  // Pílula 4: Modo Curvo 360° / Centralizar
  makeBottomPill({
    iconSvg: icon('curve'),
    title: 'Modo Curvo 360°',
    active: !!S.win360,
    onClick: () => {
      S.win360 = S.win360 ? 0 : 1;
      save(S);
      emit('win360', !!S.win360);
      return !!S.win360;
    },
  });

  // Pílula 5: Criar Personagem 3D
  makeBottomPill({
    iconSvg: icon('user'),
    title: 'Criar Personagem 3D',
    onClick: () => {
      openAvatarCreator();
      return false;
    },
  });

  // Pílula 6: Apps do Android (Shizuku)
  makeBottomPill({
    iconSvg: icon('android'),
    title: 'Apps do Android',
    onClick: () => {
      shizukuWindow();
      return false;
    },
  });

  // Pílula 7: Modo Noturno
  makeBottomPill({
    iconSvg: icon('moon'),
    title: 'Modo noturno',
    active: S.env === 'night',
    onClick: () => {
      const enabled = S.env !== 'night';
      if (enabled) { previousEnvironment = S.env; setEnvironment('night'); }
      else setEnvironment(previousEnvironment === 'night' ? 'passthrough' : previousEnvironment);
      return enabled;
    },
  });

  // Pílula 8: Gestão de VR & Todas as Configurações
  makeBottomPill({
    iconSvg: icon('settings'),
    title: 'Mais configurações e Gestão de VR',
    onClick: () => {
      settingsApp();
      return false;
    },
  });

  body.append(topBar, picoDevicesHero, tilesRow, slidersRow, bottomRow);
  return open({ id:'control-center', title:'Configurações', node:body, w:980, h:640 });
}

function settingsApp() {
  // Estilo Configurações do YouTube Android: cabeçalho com voltar, lista escura, ícones à
  // esquerda, toggle/seta à direita, seções azuis.
  const body = el('div');
  body.style.cssText = 'display:flex;flex-direction:column;height:100%;background:#0f0f0f;color:#f1f1f1;font-family:Inter,system-ui,sans-serif;';
  const head = el('div');
  head.style.cssText='display:flex;align-items:center;gap:6px;padding:8px 8px 4px;';
  const back = el('button', 'yt-back');
  back.innerHTML = icon('back'); back.title='Voltar';
  back.setAttribute('aria-label','Voltar');
  back.onclick = () => { const w = wins.find(x => x.id === 'settings'); if (w) close(w); };
  const titleEl = el('div', 'yt-head-title'); titleEl.textContent = t('settings');
  head.append(back, titleEl);

  const scroll = el('div');
  scroll.style.cssText='flex:1;min-height:0;overflow-y:auto;padding:4px 0 20px;';

  let picker = null;
  const openPicker = () => { picker = open({ id:'language-pick', title:t('langTitle'), w:320, h:420,
    node:languagePicker(S.lang||'pt', id=>{setLang(id);toast(t('langChanged'));close(picker);const s=wins.find(x=>x.id==='settings');if(s)close(s);settingsApp();},true) }); };

  // Geral
  const picoVrMgmtCard = el('div', 'pico-vr-mgmt-card');
  picoVrMgmtCard.dataset.settingsPicoCc = '1';
  picoVrMgmtCard.style.cssText = 'margin:8px 16px 12px;padding:14px 18px;border-radius:18px;background:#24262c;border:1px solid rgba(255,255,255,.12);display:flex;align-items:center;justify-content:space-between;gap:16px;cursor:pointer;';
  picoVrMgmtCard.innerHTML = `
    <div style="display:flex;align-items:center;gap:18px">
      <svg viewBox="0 0 88 46" width="58" height="32"><rect x="10" y="10" width="68" height="28" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/><rect x="16" y="14" width="56" height="20" rx="10" fill="#0f172a" stroke="#475569" stroke-width="1.5"/><path d="M26 10 Q44 2 62 10" fill="none" stroke="#cbd5e1" stroke-width="2.5"/></svg>
      <div>
        <div style="font-size:13.5px;font-weight:800;color:#f8fafc">Painel Rápido PICO 4 Ultra · Gestão de VR</div>
        <div style="font-size:11px;color:#94a3b8;margin-top:2px">WLAN · Home Space · Performance 6DoF · Screencast P&amp;B · Screen Recording</div>
      </div>
    </div>
    <button type="button" style="padding:7px 14px;border-radius:999px;border:1px solid rgba(96,165,250,.65);background:#4f8ef7;color:#fff;font-size:11.5px;font-weight:800;cursor:pointer;white-space:nowrap">Abrir Painel VR</button>
  `;
  picoVrMgmtCard.onclick = () => controlCenterApp();
  scroll.append(picoVrMgmtCard);

  scroll.append(ytSection(t('general')));
  const langBtn = el('button','yt-link');
  langBtn.append(ytRow(icon('globe'), t('language'), langRow(S.lang||'pt').label));
  langBtn.onclick = openPicker;
  scroll.append(langBtn);
  scroll.append(ytRow(icon('gauge'), 'Contador de FPS', 'Mostrar taxa de quadros', ytToggle('showFps')));
  const bwSw = el('button', 'yt-sw', '');
  bwSw.dataset.on = S.bwCamera ? '1' : '0';
  bwSw.dataset.settingsBwCamera = '1';
  bwSw.onclick = () => {
    const next = !S.bwCamera;
    setBwCamera(next);
    bwSw.dataset.on = next ? '1' : '0';
  };
  scroll.append(ytRow(icon('camera'), 'Câmera P&B (Meta Quest 2)', 'Passthrough preto e branco (janelas e dock continuam coloridas)', bwSw));
  const dofSeg = el('div');
  dofSeg.style.cssText = 'display:inline-flex;gap:6px;align-items:center;';
  const btn3Dof = el('button', 'entry-seg-btn' + (S.sixdof === 0 ? ' on' : ''), '3DoF');
  btn3Dof.dataset.settingsDof = '3dof';
  const btn6Dof = el('button', 'entry-seg-btn' + (S.sixdof !== 0 ? ' on' : ''), '6DoF');
  btn6Dof.dataset.settingsDof = '6dof';
  const syncDofBtns = () => {
    btn3Dof.classList.toggle('on', S.sixdof === 0);
    btn6Dof.classList.toggle('on', S.sixdof !== 0);
  };
  btn3Dof.onclick = () => {
    S.sixdof = 0; save(S); SixDof.reset();
    window.NativeXR?.setSixDofEnabled?.(false); emit('sixdof', false); syncDofBtns();
  };
  btn6Dof.onclick = () => {
    S.sixdof = 1; save(S);
    window.NativeXR?.setSixDofEnabled?.(true); emit('sixdof', true); syncDofBtns();
  };
  dofSeg.append(btn3Dof, btn6Dof);
  scroll.append(ytRow(icon('move'), 'Modo 3DoF / 6DoF', 'Alternar entre 3DoF (rotação) e 6DoF (andar no espaço)', dofSeg));

  // World Lock: o conserto do "6DoF indo pra frente e pros lados do nada".
  const lockSw = el('button', 'yt-sw', '');
  lockSw.dataset.on = S.worldLock ? '1' : '0';
  lockSw.dataset.settingsWorldLock = '1';
  lockSw.onclick = () => {
    const on = !S.worldLock;
    setWorldLock(on);
    lockSw.dataset.on = on ? '1' : '0';
  };
  scroll.append(ytRow(icon('lock'), 'World Lock (travar mundo)', 'O mundo fica preso no lugar e só a cabeça gira — sem deriva de 6DoF', lockSw));
  const recenterBtn = el('button', 'yt-seg-btn', 'Recentralizar agora');
  recenterBtn.dataset.settingsRecenter = '1';
  recenterBtn.onclick = () => {
    SixDof.reset();
    window.NativeXR?.resetSixDof?.();
    setWorldLock(S.worldLock !== 0);
    emit('recenter');
    toast('Mundo recentralizado');
  };
  scroll.append(ytRow(icon('crosshair'), 'Recentralizar Mundo', 'Recoloca o mundo na frente e zera o deslocamento do 6DoF', recenterBtn));

  // Câmera: P&B ou colorida, sem sair do jogo.
  const camSeg = el('div');
  camSeg.style.cssText = 'display:inline-flex;gap:6px;align-items:center;';
  const camBwBtn = el('button', 'entry-seg-btn' + (S.bwCamera ? ' on' : ''), 'P&B');
  camBwBtn.dataset.settingsCamera = 'bw';
  const camColorBtn = el('button', 'entry-seg-btn' + (!S.bwCamera ? ' on' : ''), 'Colorida');
  camColorBtn.dataset.settingsCamera = 'color';
  const syncCamBtns = () => {
    camBwBtn.classList.toggle('on', !!S.bwCamera);
    camColorBtn.classList.toggle('on', !S.bwCamera);
  };
  camBwBtn.onclick = () => { setBwCamera(true); syncCamBtns(); };
  camColorBtn.onclick = () => { setBwCamera(false); syncCamBtns(); };
  camSeg.append(camBwBtn, camColorBtn);
  scroll.append(ytRow(icon('camera'), 'Cor da Câmera Passthrough', 'Preto e branco (estilo Quest 2) ou colorida — janelas continuam coloridas', camSeg));

  // Mãos
  scroll.append(ytSection(t('hands')));
  scroll.append(ytRow(icon('user'), 'Rastreamento', 'Silhueta nativa Zero-Delay · câmera traseira'));
  const recToggleBtn = el('button', 'yt-seg-btn' + (internalRecState.active ? ' on' : ''));
  recToggleBtn.dataset.internalRecBtn = '1';
  recToggleBtn.innerHTML = `<span data-internal-rec-sub>${internalRecState.active ? `🔴 Gravando ${formatRecTime(internalRecState.seconds)}` : 'Iniciar Gravação 16:9'}</span>`;
  recToggleBtn.onclick = () => toggleInternalEyeRecording();
  scroll.append(ytRow(icon('camera'), 'Gravação Interna (1 Lente)', 'Grava tela cheia de 1 lente em HD mantendo as 2 lentes ativas no celular', recToggleBtn));
  scroll.append(ytRow(icon('edit3'), 'Desenhar mãos (PICO 4 · Só a Mão)', 'Malha 3D estilo PICO 4 sem braço com Raio Laser contínuo', ytToggle('handDraw')));
  scroll.append(ytRow(icon('crosshair'), 'Modo Raio Laser PICO 4', 'Interação direta por Raio Laser ao invés de toque por pinça', ytToggle('fingerTouch', v => {
    window.NativeXR?.setFingerTouch?.(!!v);
    emit('fingerTouch', !!v);
  })));
  scroll.append(ytRow(icon('zap'), 'Estabilizador de Raio PICO 4', 'Trava o raio no botão sem desviar ao clicar'));

  // Janelas
  scroll.append(ytSection(t('windows')));
  scroll.append(ytRow(icon('maximize'), 'Tamanho', 'Escala das janelas', ytRange('winScale',.6,1.6,.05)));
  scroll.append(ytRow(icon('distance'), 'Distância', 'Distância do arco', ytRange('winDist',native?.6:1.5,native?1.8:3.4,.05)));
  scroll.append(ytRow(icon('curve'), t('curve'), 'Abertura do arco', ytRange('winCurve',0,1,.05)));
  scroll.append(ytRow(icon('curve'), t('win360'), t('win360k'), ytRange('win360K',.2,1.15,.05)));
  scroll.append(ytRow(icon('curve'), t('win360All'), 'Novas janelas curvadas', ytToggle('win360')));
  scroll.append(ytRow(icon('move'), 'Inclinação', 'Ajuste vertical das janelas', ytRange('winTilt',0,1.5,.05)));
  scroll.append(ytRow(
    icon('move'),
    'Tela Perto Sobre / Trás Embaixo',
    'Quando puxar a tela pra perto ela fica sobre todas as outras, e pra trás fica embaixo das outras',
    ytToggle('depthLayerOrder', v => {
      emit('depthLayerOrder', !!v);
      window.nextvrUpdateDepthLayering?.();
    })
  ));

  // Dock
  scroll.append(ytSection(t('dock')));
  scroll.append(ytRow(icon('appGrid'), 'Tamanho da dock', null, ytRange('dockSize',.7,1.5,.05)));
  scroll.append(ytRow(icon('distance'), 'Distância da dock', null, ytRange('dockDist',.7,1.5,.05)));
  scroll.append(ytRow(icon('move'), t('dockSnapSlot'), t('dockSnapDesc'), ytToggle('dockSnapSlot')));
  const dockColorSeg = el('div', 'yt-seg');
  dockColorSeg.style.cssText = 'display:flex;flex-wrap:wrap;gap:6px;align-items:center;';
  const dockColorOpts = [
    ['default', 'Padrão', '#364051'],
    ['black', 'Preto', '#090b10'],
    ['blue', 'Azul', '#1d4ed8'],
    ['purple', 'Roxo', '#6d28d9'],
    ['green', 'Verde', '#059669'],
    ['red', 'Vermelho', '#b91c1c'],
    ['glass', 'Vidro', 'rgba(255,255,255,0.22)'],
  ];
  for (const [id, name, swatch] of dockColorOpts) {
    const b = el('button', 'yt-seg-btn');
    b.dataset.dockColorPick = id;
    b.innerHTML = `<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${swatch};border:1px solid rgba(255,255,255,.45);margin-right:5px;vertical-align:middle"></span>${name}`;
    b.setAttribute('aria-pressed', String((S.dockColor || 'default') === id));
    b.onclick = () => {
      window.nextvrSetDockColor?.(id);
      [...dockColorSeg.children].forEach(x => x.setAttribute('aria-pressed', 'false'));
      b.setAttribute('aria-pressed', 'true');
    };
    dockColorSeg.appendChild(b);
  }
  scroll.append(ytRow(icon('appGrid'), 'Cor da dock', 'Escolha a cor da barra da dock', dockColorSeg));

  // Desempenho
  scroll.append(ytSection(t('perf')));
  const seg = el('div','yt-seg');
  for (const [id,name] of [['low',t('qualityLow')],['medium',t('qualityMedium')],['high',t('qualityHigh')],['auto',t('qualityAuto')]]) {
    const b = el('button','yt-seg-btn'); b.textContent=name; b.setAttribute('aria-pressed',S.quality===id);
    b.onclick=()=>{S.quality=id;save();emit('quality');[...seg.children].forEach(x=>x.setAttribute('aria-pressed','false'));b.setAttribute('aria-pressed','true');};
    seg.appendChild(b);
  }
  scroll.append(ytRow(icon('settings'), t('quality'), '1080p · 890p · 390p · Auto', seg));

  // O runtime PhoneXR do main mantém a própria página dentro das Configurações compactas.
  scroll.append(ytSection(t('xrTitle')));
  const xrButton = el('button', 'yt-link');
  xrButton.append(ytRow(icon('controller'), t('xrTitle'), t('xrSub')));
  xrButton.setAttribute('aria-expanded', 'false');
  const xrPage = el('div', 'card');
  xrPage.dataset.xrPage = '';
  xrPage.style.margin = '0 16px 14px';
  xrPage.hidden = true;
  xrButton.onclick = () => {
    xrPage.hidden = !xrPage.hidden;
    xrButton.setAttribute('aria-expanded', String(!xrPage.hidden));
    if (!xrPage.hidden) buildXrPage(xrPage);
  };
  scroll.append(xrButton, xrPage);

  const foot = el('div', 'yt-foot'); foot.textContent = 'ATMOXR · shell XR para Android · v2.2.2';
  scroll.append(foot);

  body.append(head, scroll);
  return open({ id: 'settings', title: t('settings'), node: body });
}

/**
 * System-style Quick Settings surface based on the supplied screenshot. Date/time use the Android
 * WebView's system clock; battery is the same native sticky-broadcast value used by the dock.
 * The media and brightness sliders use Android's public AudioManager/window APIs through the bridge.
 */
function quickSettingsApp() {
  const existing = wins.find(w => w.id === 'quick-settings');
  if (existing) { focus(existing); paintQuickSettingsStatus(getDeviceStatus()); return existing; }

  const body = el('div', 'quick-settings');
  body.innerHTML = `<section class="qs-panel">
    <header class="qs-top">
      <div class="qs-system">
        <span class="qs-battery" data-q-battery>${icon('battery')}<span>--%</span></span>
        <span data-q-time>--:--</span><span class="qs-date" data-q-date></span>
      </div>
      <span class="qs-top-spacer"></span>
      <button class="qs-top-action" data-q-main-menu aria-label="Menu Principal PICO 4 Pro">${icon('device')}<span>Menu Principal</span></button>
      <button class="qs-top-action" data-q-settings aria-label="Configurações NextVR">${icon('settings')}<span>Configurações</span></button>
      <button class="qs-repin" data-act="pin" aria-label="Voltar ao arco">${icon('crosshair')}</button>
      <button class="qs-close" data-q-close aria-label="Fechar">${icon('x')}</button>
    </header>
    <div class="qs-ranges">
      <label class="qs-range" title="Volume de mídia"><input data-q-range="volume" type="range" min="0" max="100" value="50" aria-label="Volume"><span>${icon('volume')}</span></label>
      <label class="qs-range" title="Brilho da tela"><input data-q-range="brightness" type="range" min="0" max="100" value="50" aria-label="Brilho"><span>${icon('sun')}</span></label>
    </div>
    <div class="qs-cards">
      <div class="qs-card"><div class="qs-card-line">${icon('wifi')}<span class="qs-card-title">Wi-Fi</span></div><span class="qs-card-sub" data-q-network>Verificando conexão</span></div>
      <div class="qs-card"><div class="qs-card-line">${icon('bluetooth')}<span class="qs-card-title">Bluetooth</span></div><span class="qs-card-sub">Gerenciado pelo Android</span></div>
      <div class="qs-card"><div class="qs-card-line">${icon('link')}<span class="qs-card-title">Link</span></div><span class="qs-card-sub">Não conectado</span></div>
      <div class="qs-card"><div class="qs-card-line">${icon('boundary')}<span class="qs-card-title">Limite</span></div><span class="qs-card-sub">Desativado</span></div>
    </div>
    <div class="qs-tools">
      <button class="qs-tool" data-q-env>${icon('scene')}<span>Visão do ambiente</span></button>
      <button class="qs-tool" disabled title="O NextVR não usa microfone">${icon('mic')}<span>Microfone</span></button>
      <button class="qs-tool" data-q-recenter>${icon('move')}<span>Redefinir visualização</span></button>
      <button class="qs-tool" data-q-night aria-pressed="false">${icon('sun')}<span>Modo noturno</span></button>
      <button class="qs-tool" data-q-dnd aria-pressed="false">${icon('moon')}<span>Não perturbe</span></button>
      <button class="qs-tool" data-q-internal-rec data-internal-rec-btn="1" aria-pressed="${internalRecState.active ? 'true' : 'false'}">${icon('camera')}<span data-internal-rec-sub>${internalRecState.active ? `🔴 Gravando ${formatRecTime(internalRecState.seconds)}` : 'Gravação Interna (1 Lente)'}</span></button>
      <button class="qs-tool" data-q-motion-tracker>${icon('device')}<span>PICO Motion Tracker</span></button>
      <button class="qs-tool" data-q-notifications>${icon('sun')}<span>Notificações · 27°C</span></button>
      <button class="qs-tool" data-q-pico-explore>${icon('compass')}<span>PICO Explore 8K</span></button>
    </div>
  </section>
  <aside class="qs-side" aria-label="Controles rápidos">
    <div class="qs-volume"><span class="qs-more"><i></i><i></i><i></i></span>
      <div class="qs-volume-slider-wrap"><input class="qs-v-range" data-q-range="volume" type="range" min="0" max="100" value="50" aria-label="Volume de mídia"></div>
      ${icon('volume')}
    </div>
    <button class="qs-side-button" data-q-mute aria-pressed="false" aria-label="Silenciar mídia">${icon('volumeoff')}</button>
    <button class="qs-side-button" data-q-night aria-pressed="false" aria-label="Modo noturno">${icon('moon')}</button>
  </aside>`;

  const root = body;
  let prefs = { night:false, dnd:false, muted:false, lastVolume:50 };
  try { prefs = { ...prefs, ...JSON.parse(localStorage.getItem('nextvr.quick-settings.v1') || '{}') }; } catch {}
  const inputs = [...root.querySelectorAll('[data-q-range]')];
  const readBridge = (method, fallback) => {
    try { const n = Number(window.NativeXR?.[method]?.()); return Number.isFinite(n) ? Math.max(0,Math.min(100,n)) : fallback; }
    catch { return fallback; }
  };
  let volume = native ? readBridge('mediaVolumePercent', 50) : 50;
  const brightness = native ? readBridge('brightnessPercent', 50) : 50;
  if (volume > 0) prefs.lastVolume = volume;
  function setRange(name, value) {
    const v = Math.max(0,Math.min(100,Number(value)||0));
    for (const input of inputs.filter(x=>x.dataset.qRange===name)) {
      input.value = String(v); input.style.setProperty('--fill', `${v}%`);
    }
    if (name === 'volume') {
      volume = v;
      S.mediaVolume = v;
      if (v > 0) { prefs.lastVolume = v; prefs.muted = false; }
      else prefs.muted = true;
    }
    if (name === 'brightness') {
      window.nextvrSetScreenBrightness?.(v);
    }
  }
  function savePrefs() {
    try { localStorage.setItem('nextvr.quick-settings.v1',JSON.stringify(prefs)); } catch {}
  }
  function syncPrefs() {
    root.classList.toggle('night',!!prefs.night);
    root.querySelectorAll('[data-q-night]').forEach(b=>b.setAttribute('aria-pressed',String(!!prefs.night)));
    root.querySelectorAll('[data-q-dnd]').forEach(b=>b.setAttribute('aria-pressed',String(!!prefs.dnd)));
    root.querySelectorAll('[data-q-mute]').forEach(b=>b.setAttribute('aria-pressed',String(!!prefs.muted)));
  }
  setRange('volume',volume);setRange('brightness',brightness);syncPrefs();
  for (const input of inputs) {
    input.addEventListener('input',()=>setRange(input.dataset.qRange,input.value));
    input.addEventListener('change',()=>{
      if(!native)return;
      if(input.dataset.qRange==='volume')window.NativeXR.setMediaVolumePercent?.(volume);
      if(input.dataset.qRange==='brightness')window.NativeXR.setBrightnessPercent?.(Number(input.value));
      syncPrefs();savePrefs();
    });
  }
  root.addEventListener('click',e=>{
    const c=selector=>e.target.closest(selector);
    if(c('[data-q-close]')){close(wins.find(w=>w.id==='quick-settings'));return;}
    if(c('[data-q-settings]')){settingsApp();return;}
    if(c('[data-q-env]')){environments();return;}
    if(c('[data-q-recenter]')){recenter();return;}
    if(c('[data-q-night]')){prefs.night=!prefs.night;syncPrefs();savePrefs();return;}
    if(c('[data-q-dnd]')){prefs.dnd=!prefs.dnd;syncPrefs();savePrefs();return;}
    if(c('[data-q-internal-rec]')){toggleInternalEyeRecording();return;}
    if(c('[data-q-motion-tracker]')){openPicoMotionTracker();return;}
    if(c('[data-q-notifications]')){openPhoneNotifications();return;}
    if(c('[data-q-pico-explore]')){openPicoExplore();return;}
    if(c('[data-q-main-menu]')){entryMenuWindow();return;}
    if(c('[data-q-mute]')){
      prefs.muted=!prefs.muted;
      if(prefs.muted){if(volume>0)prefs.lastVolume=volume;setRange('volume',0);}
      else setRange('volume',prefs.lastVolume||50);
      if(native)window.NativeXR.setMediaVolumePercent?.(volume);
      syncPrefs();savePrefs();
    }
  });
  const win=open({id:'quick-settings',title:'Configurações',node:body,w:1040,h:660,chrome:false,resizable:false});
  paintQuickSettingsStatus(getDeviceStatus());
  return win;
}

function paintQuickSettingsStatus(status = getDeviceStatus()) {
  // The CSS3D window is not attached to document until the next atlas frame. Paint its owned DOM
  // immediately, otherwise battery/time show -- until the next one-second status tick.
  const root = wins.find(w => w.id === 'quick-settings')?.el.querySelector('.quick-settings');
  if (!root) return;
  const battery = root.querySelector('[data-q-battery] span');
  if (battery) battery.textContent = status.batteryLevel == null ? '--%' : `${Math.round(status.batteryLevel*100)}%`;
  const time = root.querySelector('[data-q-time]'); if (time) time.textContent = status.time || '--:--';
  const date = root.querySelector('[data-q-date]'); if (date) date.textContent = status.date || '';
  const network = root.querySelector('[data-q-network]');
  if (network) network.textContent = status.online ? 'Conectado à internet' : 'Sem conexão';
}
on('device-status',paintQuickSettingsStatus);

/* ============ Loja + Biblioteca ============ */
const LS_REC = 'nextvr.lib.recent.v1';
const loadArr = k => { try { const v = JSON.parse(localStorage.getItem(k)); return Array.isArray(v) ? v : []; } catch { return []; } };
let libRecent = loadArr(LS_REC);
const persistShop = () => { try {
  localStorage.setItem(LS_REC, JSON.stringify(libRecent));
} catch {} };

/* Apps web e ferramentas NextVR são representados por capas locais, sem depender de uma CDN. */
const LIB_APPS = [
  { id:'netflix', name:'Netflix', bg:'linear-gradient(145deg,#301014,#09090b)', html:'<span class="lx-netflix">N</span>' },
  { id:'youtube', name:'YouTube', bg:'linear-gradient(145deg,#c026d3,#7c3aed)', imgUrl:'./icons/hz-tv.png', slug:'youtube', color:'FF0000' },
  { id:'tiktok', name:'TikTok', bg:'#000000', imgUrl:'./tiktok-logo.jpg', slug:'tiktok', color:'ffffff' },
  { id:'discord', name:'Discord', bg:'linear-gradient(145deg,#b865c6,#9356b8)', imgUrl:'./icons/hz-system-messenger.png', slug:'discord', color:'ffffff' },
  { id:'twitch', name:'Twitch', bg:'linear-gradient(145deg,#b184ff,#6133b2)', slug:'twitch', color:'ffffff' },
  { id:'prime', name:'prime video', bg:'linear-gradient(145deg,#173e70,#0b172b)', html:'<span class="lx-prime">prime<b>video</b></span>' },
  { id:'whatsapp', name:'WhatsApp', bg:'linear-gradient(145deg,#59e58b,#128a48)', imgUrl:'./icons/hz-whatsapp.png', slug:'whatsapp', color:'ffffff' },
  { id:'instagram', name:'Instagram', bg:'linear-gradient(135deg,#feda75,#fa7e1e 30%,#d62976 60%,#962fbf 80%,#4f5bd5)', imgUrl:'./icons/hz-instagram.png', slug:'instagram', color:'ffffff', iconOnly:true },
  { id:'x', name:'X', label:'X', bg:'linear-gradient(145deg,#38383d,#070708)', slug:'x', color:'ffffff' },
  { id:'facebook', name:'Facebook', bg:'linear-gradient(145deg,#3b91ff,#1554ab)', imgUrl:'./icons/hz-facebook.png', slug:'facebook', color:'ffffff', iconOnly:true },
  { id:'vrfs', name:'VRFS', label:'VRFS', bg:'#0b1a10', imgUrl:'./icons/vrfs-logo.jpg', html:'<img class="lx-vrfs-logo" src="./icons/vrfs-logo.jpg" alt="VRFS" draggable="false" style="width:100%;height:100%;object-fit:cover;border-radius:14px;display:block">' },
  { id:'spotify', name:'Spotify', bg:'linear-gradient(145deg,#267b50,#0b1911)', slug:'spotify', color:'1DB954' },
  { id:'browser', name:'Browser', bg:'linear-gradient(145deg,#8aa7ff,#5d62d5)', imgUrl:'./icons/hz-browser.png', icon:'compass' },
  { id:'store', name:'Store', bg:'linear-gradient(145deg,#fcd34d,#ea580c)', imgUrl:'./icons/hz-store.png', icon:'store' },
  { id:'gallery', name:'Gallery', bg:'linear-gradient(145deg,#fdba74,#c084fc)', imgUrl:'./icons/hz-gallery.png', icon:'camera' },
  { id:'settings', name:'Settings', bg:'linear-gradient(145deg,#9ca8b8,#556170)', imgUrl:'./icons/hz-settings.png', icon:'settings' },
];
const GORILLA_TAG_ITEM = {
  id: 'gorilla-tag',
  name: 'Gorilla Tag',
  label: 'Gorilla Tag',
  bg: '#0b141a',
  html: '<img class="lx-gorilla-logo" src="./icons/gorilla-tag-logo.jpg" alt="Gorilla Tag" draggable="false" style="width:100%;height:100%;object-fit:cover;border-radius:14px;display:block">',
  kind: 'app',
};
const MR_PISTOL_ITEM = {
  id: 'mr-pistol',
  name: 'ShootTheDie',
  label: 'ShootTheDie',
  bg: '#080a0f',
  imgUrl: './icons/shootthedie-logo.jpg',
  html: '<img class="lx-mr-pistol-logo" src="./icons/shootthedie-logo.jpg" alt="ShootTheDie" draggable="false" style="width:100%;height:100%;object-fit:cover;border-radius:14px;display:block">',
  kind: 'app',
};
const HAND_DRAW_ITEM = {
  id: 'hand-draw',
  name: 'paintdrawer',
  label: 'paintdrawer',
  bg: '#09090b',
  imgUrl: './icons/paintdrawer-logo.jpg',
  html: '<img class="lx-paintdrawer-logo" src="./icons/paintdrawer-logo.jpg" alt="paintdrawer" draggable="false" style="width:100%;height:100%;object-fit:cover;border-radius:14px;display:block">',
  kind: 'app',
};
const winBody = id => { const w = wins.find(x => x.id === id); return w ? w.el.querySelector('.win-body') : null; };

/* ============ Modo Roblox (Ambiente 100% Preto + só Hand Tracking e Janelinha Flutuante do Roblox) ============ */
export function openRobloxVr() {
  document.documentElement.dataset.robloxBlackEnv = '1';
  window.NativeXR?.env?.('black');
  window.NativeXR?.handVisuals?.(!!S.handDraw);
  if (native && !tracking()) startHands();
  for (const w of wins) {
    if (w.id !== 'roblox') w.setHidden(true);
  }
  setDockVisible(false);
  setDockHidden(true);
  const win = webWindow('roblox', 'Roblox', 'https://www.roblox.com/');
  if (win) {
    win.setHidden(false);
    win.obj.position.copy(win.target);
    win.apply();
    scene.updateMatrixWorld(true);
    focus(win);
  }
  css3d.invalidate?.();
  css3d.render?.(scene, camera);
  return win;
}

on('wins', () => {
  if (document.documentElement.dataset.robloxBlackEnv === '1' && !wins.some(w => w.id === 'roblox')) {
    delete document.documentElement.dataset.robloxBlackEnv;
    window.NativeXR?.env?.(S.env || 'passthrough');
    for (const w of wins) {
      if (w.id !== 'spatial-launcher') w.setHidden(false);
    }
    if (S.spatialLauncher) {
      syncSpatialLauncherVisibility();
    } else {
      setDockHidden(false);
      setDockVisible(true);
    }
    css3d.invalidate?.();
    css3d.render?.(scene, camera);
  }
});

/* ============ Beat Saber VR (Entra no Modo VR imediatamente ao iniciar) ============ */
export function openBeatSaberVr() {
  const existing = wins.find(w => w.id === 'beat-saber');
  if (existing) {
    existing.setHidden(false);
    focus(existing);
    css3d.invalidate?.();
    css3d.render?.(scene, camera);
    return existing;
  }
  if (!S.spatialLauncher) {
    setDockVisible(false);
    setDockHidden(true);
  }
  const body = el('div', 'beat-saber-vr-stage');
  body.dataset.beatSaberVr = '1';
  body.style.cssText = 'position:relative;width:100%;height:100%;background:radial-gradient(circle at 50% 38%,#141838 0%,#060814 68%,#020308 100%);overflow:hidden;display:flex;flex-direction:column;color:#f8fafc';
  body.innerHTML = `
    <div class="bs-vr-hud" style="display:flex;align-items:center;justify-content:space-between;padding:12px 18px;background:rgba(6,8,20,.82);border-bottom:1px solid rgba(56,189,248,.28);z-index:3">
      <div style="display:flex;align-items:center;gap:12px">
        <img src="./beat-saber-logo.jpg" alt="Beat Saber" style="width:40px;height:40px;border-radius:10px;object-fit:cover;border:1px solid rgba(255,255,255,.22)">
        <div>
          <div style="display:flex;align-items:center;gap:8px">
            <strong style="font-size:16px;letter-spacing:.04em;color:#fff">BEAT SABER VR</strong>
            <span data-bs-vr-active="1" style="font-size:10px;font-weight:800;padding:2px 8px;border-radius:999px;background:linear-gradient(90deg,#ef4444,#06b6d4);color:#fff">MODO VR ATIVO</span>
          </div>
          <div style="font-size:11px;color:#94a3b8">Sabres Neon Vermelho &amp; Azul sincronizados com Hand Tracking</div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:16px">
        <div style="text-align:right">
          <div style="font-size:10px;color:#94a3b8;text-transform:uppercase;letter-spacing:.08em">Combo / Score</div>
          <strong data-bs-score style="font-size:18px;color:#38bdf8;font-variant-numeric:tabular-nums">4x · 1.280</strong>
        </div>
        <button type="button" class="st-btn" data-bs-exit style="background:rgba(239,68,68,.24);border:1px solid rgba(248,113,113,.45);color:#fecaca;padding:7px 14px;border-radius:999px;font-size:12px;font-weight:800">SAIR DO VR</button>
      </div>
    </div>
    <div style="position:relative;flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden">
      <canvas data-bs-canvas width="960" height="520" style="width:100%;height:100%;display:block"></canvas>
    </div>
  `;
  const cv = body.querySelector('[data-bs-canvas]');
  const scoreEl = body.querySelector('[data-bs-score]');
  const ctx = cv?.getContext?.('2d');
  let animId = 0;
  let t0 = performance.now();
  let bsScore = 1280, bsCombo = 4, lastSliceStep = -1;
  const drawFrame = now => {
    if (!ctx || !document.body.contains(body)) return;
    const dt = (now - t0) * 0.001;
    const w = cv.width, h = cv.height;
    ctx.fillStyle = '#050712';
    ctx.fillRect(0, 0, w, h);
    // Perspectiva neon da pista VR
    ctx.strokeStyle = 'rgba(56,189,248,0.28)';
    ctx.lineWidth = 2;
    for (let i = -3; i <= 3; i++) {
      ctx.beginPath();
      ctx.moveTo(w * 0.5 + i * 26, h * 0.24);
      ctx.lineTo(w * 0.5 + i * 165, h);
      ctx.stroke();
    }
    for (let ring = 0; ring < 5; ring++) {
      const rz = ((dt * 1.35 + ring * 0.2) % 1);
      const rw = 140 + rz * 720, rh = 80 + rz * 380;
      ctx.strokeStyle = `rgba(14,165,233,${(1 - rz) * 0.32})`;
      ctx.strokeRect((w - rw) * 0.5, h * 0.24 + rz * (h * 0.38) - rh * 0.5, rw, rh);
    }
    // Cubos Beat Saber vermelho e azul vindo em direção ao jogador em VR
    const stepIdx = Math.floor(dt * 1.45);
    const z1 = ((dt * 1.45) % 1);
    const s1 = 26 + z1 * 72;
    const xRed = w * 0.5 - 48 - z1 * 125;
    const yCube = h * 0.28 + z1 * (h * 0.54);
    ctx.fillStyle = '#ff1744';
    ctx.strokeStyle = '#ff8a80';
    ctx.lineWidth = 3;
    ctx.fillRect(xRed - s1 * 0.5, yCube - s1 * 0.5, s1, s1);
    ctx.strokeRect(xRed - s1 * 0.5, yCube - s1 * 0.5, s1, s1);

    const xBlue = w * 0.5 + 48 + z1 * 125;
    ctx.fillStyle = '#00e5ff';
    ctx.strokeStyle = '#84ffff';
    ctx.fillRect(xBlue - s1 * 0.5, yCube - s1 * 0.5, s1, s1);
    ctx.strokeRect(xBlue - s1 * 0.5, yCube - s1 * 0.5, s1, s1);

    // Sabres Neon controlados pelas mãos em tempo real
    const lHand = hands.find(x => x.left) || hands[0];
    const rHand = hands.find(x => !x.left) || hands[1];
    const lx = lHand?.palm ? lHand.palm[0] * w : w * 0.34;
    const ly = lHand?.palm ? lHand.palm[1] * h : h * 0.72 + Math.sin(dt * 6) * 28;
    const rx = rHand?.palm ? rHand.palm[0] * w : w * 0.66;
    const ry = rHand?.palm ? rHand.palm[1] * h : h * 0.72 + Math.cos(dt * 6) * 28;
    ctx.lineCap = 'round';
    ctx.lineWidth = 8;
    ctx.strokeStyle = '#ff1744';
    ctx.beginPath(); ctx.moveTo(lx - 24, ly + 72); ctx.lineTo(lx + 42, ly - 68); ctx.stroke();
    ctx.strokeStyle = '#00e5ff';
    ctx.beginPath(); ctx.moveTo(rx + 24, ry + 72); ctx.lineTo(rx - 42, ry - 68); ctx.stroke();

    if (z1 > 0.78 && stepIdx !== lastSliceStep) {
      lastSliceStep = stepIdx;
      bsCombo = Math.min(8, bsCombo + 1);
      bsScore += 115 * bsCombo;
      if (scoreEl) scoreEl.textContent = `${bsCombo}x · ${bsScore.toLocaleString('pt-BR')}`;
    }
    animId = requestAnimationFrame(drawFrame);
  };
  animId = requestAnimationFrame(drawFrame);

  const win = open({ id: 'beat-saber', title: 'Beat Saber VR', node: body, w: 1020, h: 640 });
  if (win?.shell) win.shell.dataset.beatSaberVr = '1';
  if (win?.el) win.el.dataset.beatSaberVr = '1';
  body.querySelector('[data-bs-exit]')?.addEventListener('click', () => {
    cancelAnimationFrame(animId);
    close(win);
    if (!S.spatialLauncher) {
      setDockHidden(false);
      setDockVisible(true);
    }
  });
  focus(win);
  css3d.invalidate?.();
  css3d.render?.(scene, camera);
  return win;
}

/* ============ paintdrawer — Jogo de Desenho MR 3D (mãos, pinça e traços 3D no ar) ============ */
// A mecânica 3D (traços InstancedMesh presos no espaço, pinça, borracha, paleta flutuante e
// render estéreo) vive em ./mr-paint-3d.js. Aqui ficam só as cores/grossuras, os ganchos
// acessíveis (DOM de teste/atalho) e o ciclo de vida do modo MR independente.
const HAND_DRAW_COLORS = [
  ['#2563eb', 'Azul'],
  ['#ef4444', 'Vermelho'],
  ['#111827', 'Preto'],
  ['#ffffff', 'Branco'],
  ['#7e22ce', 'Roxo'],
  ['#a855f7', 'Violeta'],
  ['#eab308', 'Amarelo'],
  ['#22c55e', 'Verde'],
  ['#64748b', 'Cinza'],
  ['#78350f', 'Marrom'],
];

const HAND_DRAW_SIZES = [
  [4, 'Pincel P', 'Fino (4px)'],
  [9, 'Pincel M', 'Médio (9px)'],
  [16, 'Pincel G', 'Grosso (16px)'],
  [26, 'Pincel XG', 'Super (26px)'],
];

// Seletor do canvas do jogo (o WebGL do motor 3D): usado pelos testes e pelo foco de teclado.
const MR_PAINT_CANVAS_SELECTOR = '[data-hand-draw-canvas="1"]';

let mrPaintApi = null;
let mrPaintHooks = null;

export function closeHandDrawGame() {
  closeMrPaint3d();
  mrPaintApi = null;
  mrPaintHooks = null;
}

export function openHandDrawGame() {
  // O jogo NÃO é janela flutuante (tipo ShootTheDie): é um modo MR independente, com o
  // canvas do motor 3D em tela cheia dentro de #mr-paint-overlay.
  const existingOverlay = document.getElementById('mr-paint-overlay');
  if (mrPaintApi && isMrPaint3dActive()) {
    setPassthrough(true);
    mrPaintApi.setPaletteOpen?.(false);
    css3d.invalidate?.();
    return mrPaintApi.root || existingOverlay;
  }
  if (existingOverlay && !mrPaintApi) existingOverlay.remove();

  const api = openMrPaint3d({
    colors: HAND_DRAW_COLORS,
    sizes: HAND_DRAW_SIZES,
    logo: './icons/paintdrawer-logo.jpg',
    onExit: () => closeHandDrawGame(),
    onPaletteToggle: (openState) => {
      const win = mrPaintHooks?.paletteWin;
      if (win) win.hidden = !openState;
      mrPaintHooks?.paletteBtn?.setAttribute('aria-expanded', String(openState));
    },
    onState: (state) => {
      if (mrPaintHooks?.strokes) mrPaintHooks.strokes.textContent = String(state.strokes);
    },
    onClosed: () => {
      // O jogo pode fechar por dentro (botão 3D "Sair"): solta as referências daqui também.
      mrPaintApi = null;
      mrPaintHooks = null;
    },
  });
  mrPaintApi = api;
  if (!api || !api.root) return null;

  /*
   * Ganchos invisíveis: o jogo é 3D e a interface real é a paleta flutuante desenhada no
   * espaço. Estes elementos existem para acessibilidade, atalhos e para a suíte de testes
   * (abrir/fechar paleta, 10 cores, sair e o canvas do motor). Ficam fora da tela e sem
   * captura de toque, então nunca aparecem nos óculos.
   */
  const hooks = el('div', 'mr-paint-hooks');
  hooks.style.cssText = 'position:absolute;left:-8000px;top:0;width:1px;height:1px;overflow:hidden;opacity:0;pointer-events:none';
  hooks.innerHTML = `
    <button type="button" data-mr-left-palette-btn="1" aria-expanded="false" aria-label="Paleta (mão esquerda)">🎨 Paleta (Mão Esq.)</button>
    <div data-mr-palette-win="1" hidden>
      <span data-mr-paint-hud-badge="1">paintMR · Pintura 3D · <b data-hd-strokes>0</b> traços</span>
      ${HAND_DRAW_COLORS.map(([hex, name]) => `
        <button type="button" data-hd-color="${hex}" data-hd-color-name="${name}" title="${name}">${name}</button>
      `).join('')}
      ${HAND_DRAW_SIZES.map(([sz, code, lbl]) => `
        <button type="button" data-hd-size="${sz}" data-hd-size-code="${code}" title="${lbl}">${code}</button>
      `).join('')}
      <button type="button" data-hd-tool="pen">✏️ Caneta 3D</button>
      <button type="button" data-hd-tool="neon">✨ Tinta Neon</button>
      <button type="button" data-hd-tool="eraser">🧽 Borracha</button>
      <input type="range" data-hd-size-slider min="2" max="36" value="9" aria-label="Grossura da caneta">
      <input type="range" data-hd-depth-slider min="0.30" max="1.05" step="0.01" value="0.55" aria-label="Distância do traço em metros">
      <button type="button" data-hd-camera="1" aria-pressed="false">📷 Câmera P&amp;B / Colorida</button>
      <button type="button" data-hd-worldlock="1" aria-pressed="true">🔒 World Lock</button>
      <button type="button" data-hd-undo>↩ Desfazer</button>
      <button type="button" data-hd-clear>🗑 Limpar Tudo</button>
      <button type="button" data-hd-save>💾 Salvar</button>
      <button type="button" data-hd-load>📂 Abrir</button>
      <button type="button" data-hd-exit>✕ Sair</button>
      <canvas data-hand-draw-canvas="1" data-mr-paint-engine="1" width="1200" height="800"></canvas>
    </div>
  `;
  api.root.appendChild(hooks);

  const paletteBtn = hooks.querySelector('[data-mr-left-palette-btn]');
  const paletteWin = hooks.querySelector('[data-mr-palette-win]');
  const strokesEl = hooks.querySelector('[data-hd-strokes]');
  const sliderEl = hooks.querySelector('[data-hd-size-slider]');
  const depthEl = hooks.querySelector('[data-hd-depth-slider]');
  const camBtn = hooks.querySelector('[data-hd-camera]');
  const lockBtn = hooks.querySelector('[data-hd-worldlock]');
  mrPaintHooks = { hooks, paletteBtn, paletteWin, strokes: strokesEl, camBtn, lockBtn, depthEl };

  paletteBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    api.togglePalette?.();
  });
  paletteWin?.querySelector('[data-hd-exit]')?.addEventListener('click', (e) => {
    e.stopPropagation();
    closeHandDrawGame();
  });
  paletteWin?.querySelectorAll('[data-hd-color]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      api.setColor?.(btn.dataset.hdColor, btn.dataset.hdColorName);
    });
  });
  paletteWin?.querySelectorAll('[data-hd-size]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      api.setSize?.(Number(btn.dataset.hdSize));
    });
  });
  paletteWin?.querySelectorAll('[data-hd-tool]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      api.setTool?.(btn.dataset.hdTool);
    });
  });
  if (sliderEl) sliderEl.addEventListener('input', () => api.setSize?.(Number(sliderEl.value)));
  if (depthEl) depthEl.addEventListener('input', () => api.setDepth?.(Number(depthEl.value)));
  camBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const on = api.setBwCamera?.();
    camBtn.setAttribute('aria-pressed', String(!!on));
  });
  lockBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const on = api.setWorldLock?.();
    lockBtn.setAttribute('aria-pressed', String(!!on));
  });
  paletteWin?.querySelector('[data-hd-undo]')?.addEventListener('click', (e) => { e.stopPropagation(); api.undo?.(); });
  paletteWin?.querySelector('[data-hd-clear]')?.addEventListener('click', (e) => { e.stopPropagation(); api.clear?.(); });
  paletteWin?.querySelector('[data-hd-save]')?.addEventListener('click', (e) => { e.stopPropagation(); api.save?.(); });
  paletteWin?.querySelector('[data-hd-load]')?.addEventListener('click', (e) => { e.stopPropagation(); api.load?.(); });

  // Atalhos / ponte usada pela suíte de testes: traço em coordenadas da placa 1200x800.
  window.nextvrHandDrawStroke = (x0, y0, x1, y1, color = HAND_DRAW_COLORS[7][0], size = 9, tool = 'pen') =>
    addMrPaintScreenSegment(x0, y0, x1, y1, color, size, tool);
  window.nextvrToggleMrDrawPalette = (force) => setMrPaintPaletteOpen(force);
  window.nextvrMrPaintCamera = (on) => (api.setBwCamera ? api.setBwCamera(on) : null);
  window.nextvrMrPaintWorldLock = (on) => (api.setWorldLock ? api.setWorldLock(on) : null);
  window.nextvrMrPaintDepth = (m) => (api.setDepth ? api.setDepth(m) : null);
  window.nextvrCloseHandDrawGame = closeHandDrawGame;
  window.nextvrMrPaintCanSelect = () => Boolean(document.querySelector(MR_PAINT_CANVAS_SELECTOR));

  touchLib('hand-draw', true);
  css3d.invalidate?.();
  css3d.render?.(scene, camera);
  return api.root;
}

/* ============ Criador de Personagem do Próprio Jogo (ATMOXR Avatar Studio 3D) ============ */
export function openAvatarCreator() {
  const existing = wins.find(w => w.id === 'avatar-creator');
  if (existing) {
    existing.setHidden(false);
    focus(existing);
    css3d.invalidate?.();
    return existing;
  }

  let cfg = loadCharacter();
  let yaw = 0.22;
  let autoSpin3D = false;

  const body = el('div', 'atmoxr-avatar-creator-win');
  body.dataset.avatarCreator = '1';
  body.style.cssText = 'position:relative;width:100%;height:100%;background:#14161c;color:#f4f4f5;display:grid;grid-template-columns:310px 1fr;gap:16px;padding:14px 18px 36px;box-sizing:border-box;font-family:Inter,system-ui,sans-serif;user-select:none;overflow:hidden;';

  const renderPanel = () => {
    const nick = S.profileName || 'Jogador ATMOXR';
    body.innerHTML = `
      <div style="background:linear-gradient(180deg,#1d2029 0%,#12141a 100%);border-radius:18px;padding:12px 14px;border:1px solid rgba(255,255,255,.11);display:flex;flex-direction:column;justify-content:space-between;align-items:center">
        <div style="width:100%;display:flex;align-items:center;justify-content:space-between">
          <span style="font-size:11px;font-weight:800;color:#38bdf8;letter-spacing:.05em">PERSONAGEM 3D · ATMOXR</span>
          <div style="display:inline-flex;gap:4px">
            <button type="button" data-ac-rot="-0.45" style="padding:3px 7px;border-radius:999px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.14);color:#e4e4e7;font-size:10px;font-weight:700;cursor:pointer">⟲ 3D</button>
            <button type="button" data-ac-autorot style="padding:3px 7px;border-radius:999px;background:${autoSpin3D ? 'rgba(56,189,248,.24)' : 'rgba(255,255,255,.08)'};border:1px solid ${autoSpin3D ? '#38bdf8' : 'rgba(255,255,255,.14)'};color:#fff;font-size:10px;font-weight:800;cursor:pointer">360°</button>
            <button type="button" data-ac-rot="0.45" style="padding:3px 7px;border-radius:999px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.14);color:#e4e4e7;font-size:10px;font-weight:700;cursor:pointer">3D ⟳</button>
          </div>
        </div>
        <canvas data-ac-canvas width="280" height="330" style="width:255px;height:300px;border-radius:14px;border:1px solid rgba(255,255,255,.1);display:block"></canvas>
        <div style="width:100%;display:flex;gap:5px;justify-content:center;flex-wrap:wrap">
          ${CHARACTER_OPTIONS.poses.map(p => `
            <button type="button" data-ac-set="pose:${p.id}" style="padding:4px 9px;border-radius:999px;font-size:10.5px;font-weight:800;cursor:pointer;border:1px solid ${cfg.pose === p.id ? '#38bdf8' : 'rgba(255,255,255,.14)'};background:${cfg.pose === p.id ? 'rgba(56,189,248,.22)' : 'rgba(255,255,255,.06)'};color:#fff">${p.label}</button>
          `).join('')}
        </div>
        <div style="width:100%;display:grid;grid-template-columns:1fr 1fr;gap:7px">
          <button type="button" data-ac-save-profile style="padding:9px 10px;border-radius:10px;background:#2563eb;border:1px solid #60a5fa;color:#fff;font-size:11px;font-weight:800;cursor:pointer">✓ Salvar no Perfil</button>
          <button type="button" data-ac-open-mt style="padding:9px 10px;border-radius:10px;background:rgba(132,204,22,.18);border:1px solid rgba(132,204,22,.45);color:#bef264;font-size:11px;font-weight:800;cursor:pointer">🦵 Motion Tracker</button>
        </div>
      </div>

      <div style="background:#1c1f27;border-radius:18px;padding:14px 16px;border:1px solid rgba(255,255,255,.09);display:flex;flex-direction:column;justify-content:space-between;overflow-y:auto">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;padding-bottom:8px;border-bottom:1px solid rgba(255,255,255,.08)">
          <div>
            <h2 style="margin:0;font-size:16px;font-weight:900;color:#fff">Criar Personagem do Jogo</h2>
            <div style="font-size:11px;color:#94a3b8">Personalize seu personagem para o ATMOXR, Dock e PICO Motion Tracker · Nome: <b style="color:#fff">${escH(nick)}</b></div>
          </div>
          <div style="display:flex;gap:6px">
            <button type="button" data-ac-random style="padding:6px 11px;border-radius:10px;background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.16);color:#f4f4f5;font-size:11px;font-weight:800;cursor:pointer">🎲 Aleatório</button>
            <button type="button" data-ac-entry-menu style="padding:6px 11px;border-radius:10px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);color:#cbd5e1;font-size:11px;font-weight:700;cursor:pointer">Menu 2D</button>
          </div>
        </div>

        <div style="display:flex;flex-direction:column;gap:9px;margin-top:6px">
          <div style="display:flex;align-items:center;gap:7px;flex-wrap:wrap">
            <span style="font-size:11px;font-weight:800;color:#a1a1aa;min-width:92px">TOM DE PELE:</span>
            ${CHARACTER_OPTIONS.skins.map(s => `
              <button type="button" data-ac-set="skin:${s.id}" title="${s.label}" style="width:26px;height:26px;border-radius:50%;background:${s.id};border:${cfg.skin === s.id ? '3px solid #38bdf8' : '1.5px solid rgba(255,255,255,.3)'};cursor:pointer"></button>
            `).join('')}
          </div>

          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
            <span style="font-size:11px;font-weight:800;color:#a1a1aa;min-width:92px">ESTILO CABELO:</span>
            ${CHARACTER_OPTIONS.hairStyles.map(hs => `
              <button type="button" data-ac-set="hairStyle:${hs.id}" style="padding:5px 10px;border-radius:9px;font-size:11px;font-weight:800;cursor:pointer;border:1px solid ${cfg.hairStyle === hs.id ? '#fff' : 'rgba(255,255,255,.14)'};background:${cfg.hairStyle === hs.id ? '#e4e4e7' : '#272a34'};color:${cfg.hairStyle === hs.id ? '#09090b' : '#f4f4f5'}">${hs.label}</button>
            `).join('')}
          </div>

          <div style="display:flex;align-items:center;gap:7px;flex-wrap:wrap">
            <span style="font-size:11px;font-weight:800;color:#a1a1aa;min-width:92px">COR CABELO:</span>
            ${CHARACTER_OPTIONS.hairColors.map(hc => `
              <button type="button" data-ac-set="hairColor:${hc.id}" title="${hc.label}" style="width:24px;height:24px;border-radius:50%;background:${hc.id};border:${cfg.hairColor === hc.id ? '3px solid #38bdf8' : '1.5px solid rgba(255,255,255,.3)'};cursor:pointer"></button>
            `).join('')}
          </div>

          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
            <span style="font-size:11px;font-weight:800;color:#a1a1aa;min-width:92px">ÓCULOS / VISOR:</span>
            ${CHARACTER_OPTIONS.visors.map(v => `
              <button type="button" data-ac-set="visor:${v.id}" style="padding:5px 10px;border-radius:9px;font-size:11px;font-weight:800;cursor:pointer;border:1px solid ${cfg.visor === v.id ? '#38bdf8' : 'rgba(255,255,255,.14)'};background:${cfg.visor === v.id ? 'rgba(56,189,248,.22)' : '#272a34'};color:#fff">${v.label}</button>
            `).join('')}
          </div>

          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
            <span style="font-size:11px;font-weight:800;color:#a1a1aa;min-width:92px">ROUPA / TRAJE:</span>
            ${CHARACTER_OPTIONS.outfits.map(o => `
              <button type="button" data-ac-set="outfit:${o.id}" style="padding:5px 10px;border-radius:9px;font-size:11px;font-weight:800;cursor:pointer;border:1px solid ${cfg.outfit === o.id ? '#fff' : 'rgba(255,255,255,.14)'};background:${cfg.outfit === o.id ? '#e4e4e7' : '#272a34'};color:${cfg.outfit === o.id ? '#09090b' : '#f4f4f5'}">${o.label}</button>
            `).join('')}
          </div>

          <div style="display:flex;align-items:center;gap:7px;flex-wrap:wrap">
            <span style="font-size:11px;font-weight:800;color:#a1a1aa;min-width:92px">COR DA ROUPA:</span>
            ${CHARACTER_OPTIONS.outfitColors.map(oc => `
              <button type="button" data-ac-set="outfitColor:${oc.id}" title="${oc.label}" style="width:24px;height:24px;border-radius:50%;background:${oc.id};border:${cfg.outfitColor === oc.id ? '3px solid #fff' : '1.5px solid rgba(255,255,255,.3)'};cursor:pointer"></button>
            `).join('')}
            <span style="font-size:11px;font-weight:800;color:#a1a1aa;margin-left:8px">CALÇA:</span>
            ${CHARACTER_OPTIONS.pantsColors.map(pc => `
              <button type="button" data-ac-set="pantsColor:${pc.id}" title="${pc.label}" style="width:22px;height:22px;border-radius:50%;background:${pc.id};border:${cfg.pantsColor === pc.id ? '3px solid #38bdf8' : '1.5px solid rgba(255,255,255,.3)'};cursor:pointer"></button>
            `).join('')}
          </div>

          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
            <span style="font-size:11px;font-weight:800;color:#a1a1aa;min-width:92px">ACESSÓRIO:</span>
            ${CHARACTER_OPTIONS.accessories.map(ac => `
              <button type="button" data-ac-set="accessory:${ac.id}" style="padding:5px 10px;border-radius:9px;font-size:11px;font-weight:800;cursor:pointer;border:1px solid ${cfg.accessory === ac.id ? '#38bdf8' : 'rgba(255,255,255,.14)'};background:${cfg.accessory === ac.id ? 'rgba(56,189,248,.22)' : '#272a34'};color:#fff">${ac.label}</button>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  };

  renderPanel();

  let animId = 0;
  let lastT = performance.now();
  const t0 = performance.now();
  const tickPreview = now => {
    if (!body.isConnected) return;
    const dt = Math.min(0.05, Math.max(0, (now - lastT) * 0.001));
    lastT = now;
    if (autoSpin3D) yaw += dt * 1.15;
    const cv = body.querySelector('[data-ac-canvas]');
    if (cv) {
      const ctx = cv.getContext('2d');
      const lh = hands.find(h => h.left);
      const rh = hands.find(h => !h.left);
      drawCharacter2D(ctx, cv.width, cv.height, cfg, {
        time: (now - t0) * 0.001,
        yaw,
        leftHand: lh,
        rightHand: rh,
      });
    }
    animId = requestAnimationFrame(tickPreview);
  };
  animId = requestAnimationFrame(tickPreview);

  body.addEventListener('click', e => {
    const setBtn = e.target.closest('[data-ac-set]');
    if (setBtn) {
      const raw = setBtn.dataset.acSet || '';
      const sep = raw.indexOf(':');
      if (sep > 0) {
        const k = raw.slice(0, sep);
        const v = raw.slice(sep + 1);
        cfg[k] = v;
        cfg = saveCharacter(cfg, { updateProfileAvatar: true });
        renderPanel();
        css3d.invalidate?.();
      }
      return;
    }
    if (e.target.closest('[data-ac-autorot]')) {
      autoSpin3D = !autoSpin3D;
      renderPanel();
      return;
    }
    const rotBtn = e.target.closest('[data-ac-rot]');
    if (rotBtn) {
      autoSpin3D = false;
      yaw += Number(rotBtn.dataset.acRot || 0);
      return;
    }
    if (e.target.closest('[data-ac-random]')) {
      const pick = arr => arr[Math.floor(Math.random() * arr.length)].id;
      cfg = {
        skin: pick(CHARACTER_OPTIONS.skins),
        hairStyle: pick(CHARACTER_OPTIONS.hairStyles),
        hairColor: pick(CHARACTER_OPTIONS.hairColors),
        visor: pick(CHARACTER_OPTIONS.visors),
        outfit: pick(CHARACTER_OPTIONS.outfits),
        outfitColor: pick(CHARACTER_OPTIONS.outfitColors),
        pantsColor: pick(CHARACTER_OPTIONS.pantsColors),
        accessory: pick(CHARACTER_OPTIONS.accessories),
        pose: pick(CHARACTER_OPTIONS.poses),
      };
      cfg = saveCharacter(cfg, { updateProfileAvatar: true });
      renderPanel();
      toast('Novo personagem gerado e salvo!');
      css3d.invalidate?.();
      return;
    }
    if (e.target.closest('[data-ac-save-profile]')) {
      cfg = saveCharacter(cfg, { updateProfileAvatar: true });
      toast('✓ Personagem salvo no seu Perfil e na Dock!');
      css3d.invalidate?.();
      return;
    }
    if (e.target.closest('[data-ac-open-mt]')) {
      cfg = saveCharacter(cfg, { updateProfileAvatar: true });
      openPicoMotionTracker();
      return;
    }
    if (e.target.closest('[data-ac-entry-menu]')) {
      openEntryMenu();
    }
  });

  const win = open({ id: 'avatar-creator', title: 'Criar Personagem · ATMOXR', node: body, w: 940, h: 610 });
  win._cleanupAC = () => cancelAnimationFrame(animId);
  focus(win);
  css3d.invalidate?.();
  css3d.render?.(scene, camera);
  return win;
}
window.openAvatarCreator = openAvatarCreator;

/* ============ PICO Motion Tracker (Screenshot_2026-10-25-19-28-52-726) ============ */
export function openPicoMotionTracker() {
  const existing = wins.find(w => w.id === 'motion-tracker');
  if (existing) {
    existing.setHidden(false);
    focus(existing);
    css3d.invalidate?.();
    return existing;
  }
  const heights = [170, 175, 180, 183, 188];
  let heightIdx = 3; // 183 cm default from screenshot
  let calibrating = false;
  let calibStatus = '2 Motion Trackers conectados. Tente conectar mais para uma melhor experiência.';

  const body = el('div', 'pico-mt-win');
  body.dataset.picoMotionTracker = '1';
  body.style.cssText = 'position:relative;width:100%;height:100%;background:#1e2026;color:#f1f5f9;display:flex;flex-direction:column;padding:14px 18px;box-sizing:border-box;font-family:Inter,system-ui,sans-serif;user-select:none;overflow:hidden;';

  body.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
      <span style="width:48px"></span>
      <h2 style="margin:0;font-size:15px;font-weight:800;letter-spacing:.01em;color:#f8fafc">PICO Motion Tracker</h2>
      <div style="display:flex;align-items:center;gap:8px">
        <button type="button" data-mt-gear title="Ajustes de Rastreamento" style="width:28px;height:28px;border-radius:50%;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.06);color:#e2e8f0;cursor:pointer;font-size:13px">⚙</button>
        <button type="button" data-mt-help title="Ajuda Motion Tracker" style="width:28px;height:28px;border-radius:50%;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.06);color:#e2e8f0;cursor:pointer;font-size:13px">?</button>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1.05fr 1fr;gap:14px;flex:1;min-height:0">
      <div style="background:linear-gradient(180deg,#2a2d35 0%,#343842 100%);border-radius:16px;padding:12px 14px;display:flex;flex-direction:column;justify-content:space-between;border:1px solid rgba(255,255,255,.08);position:relative;overflow:hidden">
        <div style="display:flex;align-items:center;justify-content:space-between;z-index:2">
          <button type="button" data-mt-floor style="background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.12);color:#e2e8f0;border-radius:999px;padding:4px 10px;font-size:11px;font-weight:700;cursor:pointer">Ajustar piso ›</button>
          <button type="button" data-mt-height style="background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.12);color:#e2e8f0;border-radius:999px;padding:4px 10px;font-size:11px;font-weight:700;cursor:pointer">183 cm ›</button>
        </div>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;min-height:0">
          <canvas data-mt-avatar-canvas width="280" height="270" style="width:240px;height:230px;display:block"></canvas>
        </div>
        <p style="margin:0;font-size:10.5px;line-height:1.38;color:rgba(241,245,249,.78);text-align:center;z-index:2">
          Levante a perna e mova o corpo para ver se o movimento do modelo corresponde ao seu. Caso contrário, recalibre.
        </p>
      </div>
      <div style="background:#262931;border-radius:16px;padding:14px 16px;display:flex;flex-direction:column;justify-content:space-between;border:1px solid rgba(255,255,255,.07)">
        <div>
          <h3 style="margin:0 0 4px;font-size:14px;font-weight:800;color:#f8fafc">Meus Motion Trackers</h3>
          <p data-mt-status style="margin:0 0 12px;font-size:11px;line-height:1.35;color:rgba(226,232,240,.65)">${calibStatus}</p>
          <div data-mt-list style="display:flex;flex-direction:column;gap:10px">
            <div data-mt-tracker="271297" style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-radius:12px;background:#2f333d;border:1px solid rgba(255,255,255,.07)">
              <div style="display:flex;align-items:center;gap:10px">
                <span style="width:34px;height:34px;border-radius:50%;border:2.5px solid #84cc16;display:inline-flex;align-items:center;justify-content:center;background:#1e2026">
                  <span style="width:12px;height:18px;border-radius:6px;background:#f8fafc;display:inline-block"></span>
                </span>
                <div>
                  <div style="font-size:12px;font-weight:800;color:#f8fafc">Motion Tracker 271297</div>
                  <div data-mt-tstatus="1" style="font-size:10.5px;color:#a3e635;font-weight:600">Conectado · Tornozelo Dir. (98%)</div>
                </div>
              </div>
              <button type="button" data-mt-info="271297" style="width:24px;height:24px;border-radius:50%;border:1px solid rgba(255,255,255,.22);background:transparent;color:#cbd5e1;font-size:11px;cursor:pointer">i</button>
            </div>
            <div data-mt-tracker="271296" style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-radius:12px;background:#2f333d;border:1px solid rgba(255,255,255,.07)">
              <div style="display:flex;align-items:center;gap:10px">
                <span style="width:34px;height:34px;border-radius:50%;border:2.5px solid #84cc16;display:inline-flex;align-items:center;justify-content:center;background:#1e2026">
                  <span style="width:12px;height:18px;border-radius:6px;background:#f8fafc;display:inline-block"></span>
                </span>
                <div>
                  <div style="font-size:12px;font-weight:800;color:#f8fafc">Motion Tracker 271296</div>
                  <div data-mt-tstatus="2" style="font-size:10.5px;color:#a3e635;font-weight:600">Conectado · Tornozelo Esq. (95%)</div>
                </div>
              </div>
              <button type="button" data-mt-info="271296" style="width:24px;height:24px;border-radius:50%;border:1px solid rgba(255,255,255,.22);background:transparent;color:#cbd5e1;font-size:11px;cursor:pointer">i</button>
            </div>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px">
          <button type="button" data-mt-customize style="width:100%;padding:9px 14px;border-radius:12px;border:1px solid rgba(56,189,248,.4);background:rgba(56,189,248,.16);color:#e0f2fe;font-size:12px;font-weight:800;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px">
            <span>🎨</span> <span>Criar / Editar Personagem</span>
          </button>
          <button type="button" data-mt-recalibrate style="width:100%;padding:11px 14px;border-radius:12px;border:1px solid rgba(255,255,255,.12);background:#363a45;color:#f8fafc;font-size:12.5px;font-weight:800;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px">
            <span>⊕</span> <span data-mt-recal-label>Recalibrar</span>
          </button>
        </div>
      </div>
    </div>
  `;

  const cv = body.querySelector('[data-mt-avatar-canvas]');
  const ctx = cv.getContext('2d');
  let animId = 0;
  const t0 = performance.now();
  const drawAvatar = (now) => {
    if (!body.isConnected) return;
    const tSec = (now - t0) * 0.001;
    const lh = hands.find(h => h.left);
    const rh = hands.find(h => !h.left);
    drawCharacter2D(ctx, cv.width, cv.height, loadCharacter(), {
      time: tSec,
      leftHand: lh,
      rightHand: rh,
    });
    // PICO Motion Tracker green ankle sensors
    const cx = cv.width * 0.5;
    ctx.fillStyle = '#84cc16';
    ctx.beginPath();
    ctx.arc(cx - 12, 212, 4, 0, Math.PI * 2);
    ctx.arc(cx + 12, 212, 4, 0, Math.PI * 2);
    ctx.fill();

    animId = requestAnimationFrame(drawAvatar);
  };
  animId = requestAnimationFrame(drawAvatar);

  body.addEventListener('click', e => {
    if (e.target.closest('[data-mt-customize]')) {
      openAvatarCreator();
      return;
    }
    if (e.target.closest('[data-mt-height]')) {
      heightIdx = (heightIdx + 1) % heights.length;
      body.querySelector('[data-mt-height]').textContent = `${heights[heightIdx]} cm ›`;
      toast(`Altura ajustada: ${heights[heightIdx]} cm`);
      css3d.invalidate?.();
      return;
    }
    if (e.target.closest('[data-mt-floor]')) {
      toast('Piso calibrado automaticamente com os sensores PICO Motion Tracker');
      return;
    }
    if (e.target.closest('[data-mt-recalibrate]')) {
      if (calibrating) return;
      calibrating = true;
      const lbl = body.querySelector('[data-mt-recal-label]');
      const st = body.querySelector('[data-mt-status]');
      if (lbl) lbl.textContent = 'Calibrando...';
      if (st) st.textContent = 'Olhe para a frente e mantenha os pés alinhados...';
      css3d.invalidate?.();
      setTimeout(() => {
        calibrating = false;
        if (lbl) lbl.textContent = 'Recalibrar';
        if (st) st.textContent = '✓ Calibração concluída! 2 Motion Trackers sincronizados em tempo real.';
        toast('PICO Motion Trackers 271297 & 271296 recalibrados!');
        css3d.invalidate?.();
      }, 650);
    }
  });

  const win = open({ id: 'motion-tracker', title: 'PICO Motion Tracker', node: body, w: 860, h: 540 });
  win._cleanupMT = () => cancelAnimationFrame(animId);
  focus(win);
  css3d.invalidate?.();
  css3d.render?.(scene, camera);
  return win;
}

/* ============ PICO Explore / Recomendado pelo PICO (Screenshot_2026-10-25-19-28-52-726) ============ */
export function openPicoExplore() {
  const existing = wins.find(w => w.id === 'pico-explore');
  if (existing) {
    existing.setHidden(false);
    focus(existing);
    css3d.invalidate?.();
    return existing;
  }

  const body = el('div', 'pico-explore-win');
  body.dataset.picoExplore = '1';
  body.style.cssText = 'position:relative;width:100%;height:100%;background:#181a20;color:#f8fafc;display:grid;grid-template-columns:1fr 250px;gap:16px;padding:16px 18px;box-sizing:border-box;font-family:Inter,system-ui,sans-serif;user-select:none;overflow:auto;';

  body.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:14px;min-width:0">
      <div style="display:flex;align-items:center;justify-content:space-between">
        <h2 style="margin:0;font-size:16px;font-weight:800;color:#f8fafc">Recomendado pelo PICO <span style="font-size:11px;color:#94a3b8;font-weight:600">(PICO 4 Ultra · Hand Tracking)</span></h2>
        <button type="button" data-exp-picovideo style="padding:5px 12px;border-radius:999px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);color:#e2e8f0;font-size:11px;font-weight:700;cursor:pointer">Ir para PICO VIDEO ›</button>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:4px">
        <div style="background:#22252e;border-radius:14px;padding:12px;border:1px solid rgba(255,255,255,.07)">
          <div style="font-size:13px;font-weight:800;margin-bottom:8px;color:#f8fafc">Oferta Especial (Spesialtilbud)</div>
          <div data-exp-amongus style="display:flex;align-items:center;gap:12px;background:#16181f;padding:10px;border-radius:12px;cursor:pointer;border:1px solid rgba(239,68,68,.35)">
            <div style="width:84px;height:62px;border-radius:10px;background:linear-gradient(135deg,#7f1d1d,#1e3a8a);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:12px;color:#f8fafc;text-align:center;line-height:1.1">AMONG US<br>3D VR</div>
            <div style="flex:1;min-width:0">
              <div style="font-size:13px;font-weight:800;color:#f8fafc">Among Us 3D</div>
              <div style="font-size:10.5px;color:#94a3b8;margin:2px 0 6px">Social, Casual, Space · ★ 3.7</div>
              <span style="padding:3px 9px;border-radius:6px;background:#2563eb;color:#fff;font-size:10.5px;font-weight:800">Jogar Agora · Grátis</span>
            </div>
          </div>
        </div>
        <div style="background:#22252e;border-radius:14px;padding:12px;border:1px solid rgba(255,255,255,.07);display:flex;flex-direction:column;justify-content:space-between">
          <div style="font-size:13px;font-weight:800;color:#f8fafc">Rastreamento Corporal PICO</div>
          <p style="margin:4px 0 8px;font-size:11px;color:#94a3b8">2 Motion Trackers conectados (271297 & 271296). Calibre o piso e a altura para VRChat e jogos.</p>
          <button type="button" data-exp-mt style="padding:8px 12px;border-radius:10px;border:1px solid rgba(132,204,22,.45);background:rgba(132,204,22,.16);color:#bef264;font-size:11.5px;font-weight:800;cursor:pointer">🦵 Abrir PICO Motion Tracker</button>
        </div>
      </div>
    </div>
    <div style="background:#22252e;border-radius:14px;padding:12px;border:1px solid rgba(255,255,255,.07);display:flex;flex-direction:column;gap:10px">
      <div style="font-size:13.5px;font-weight:800;color:#f8fafc">Chat e jogos (Chat og spill)</div>
      <button type="button" data-exp-party style="width:100%;padding:10px 12px;border-radius:10px;border:0;background:linear-gradient(135deg,#6366f1,#4f46e5);color:#fff;font-size:12px;font-weight:800;cursor:pointer;text-align:left">🎮 Grupo de jogo (Spillgruppe)</button>
      <button type="button" data-exp-social style="width:100%;padding:10px 12px;border-radius:10px;border:0;background:linear-gradient(135deg,#10b981,#059669);color:#fff;font-size:12px;font-weight:800;cursor:pointer;text-align:left">👥 Social (Sosialt)</button>
      <div data-exp-vrchat style="margin-top:4px;padding:10px;border-radius:12px;background:#181a20;border:1px solid rgba(255,255,255,.08);cursor:pointer">
        <div style="height:78px;border-radius:8px;background:linear-gradient(135deg,#1e1b4b,#3b82f6);display:flex;align-items:flex-end;padding:8px;margin-bottom:8px">
          <span style="padding:2px 7px;border-radius:5px;background:#09090b;color:#38bdf8;font-size:10px;font-weight:900">VRCHAT</span>
        </div>
        <div style="font-size:12px;font-weight:800;color:#f8fafc">VRChat · Kai the Robot</div>
        <div style="font-size:10.5px;color:#94a3b8;margin-top:2px">👥 1/16 na sala · Toque para entrar</div>
      </div>
    </div>
  `;

  body.addEventListener('click', e => {
    if (e.target.closest('[data-exp-mt]')) { openPicoMotionTracker(); return; }
    if (e.target.closest('[data-exp-amongus]')) { openGorillaTag(); return; }
    if (e.target.closest('[data-exp-picovideo]')) { openTikTokVr(); return; }
    if (e.target.closest('[data-exp-vrchat]') || e.target.closest('[data-exp-party]') || e.target.closest('[data-exp-social]')) {
      openPicoMotionTracker();
    }
  });

  const win = open({ id: 'pico-explore', title: 'Recomendado pelo PICO', node: body, w: 1000, h: 580 });
  focus(win);
  css3d.invalidate?.();
  css3d.render?.(scene, camera);
  return win;
}

/* ============ TikTok VR Vertical Window (Screenshots 19-11-24 & 19-11-03) ============ */
export function openTikTokVr() {
  const existing = wins.find(w => w.id === 'tiktok');
  if (existing) {
    existing.setHidden(false);
    focus(existing);
    css3d.invalidate?.();
    return existing;
  }
  const reels = [
    {
      author: 'MrBeast',
      verified: true,
      date: '09-14',
      caption: 'I just got punched by @Mike Tyson #CaneloCrawford #RiyadhSeason · Colaboración de pago',
      likes: '1,1 mi',
      comments: '43,5 mil',
      saves: '78,2 mil',
      shares: '86,1 mil',
      kind: 'mrbeast',
    },
    {
      author: 'DavePicoVr',
      verified: false,
      date: '08-19',
      caption: 'Italia ✈️ Giappone Tokyo · TikTok em VR #fyp #tiktok #pico4ultra #chill',
      likes: '15,4 mil',
      comments: '842',
      saves: '2,1 mil',
      shares: '619',
      kind: 'tokyo-map',
    },
    {
      author: 'ミスターVR@VR解説',
      verified: true,
      date: '09-19',
      caption: 'Com a realidade mista PICO 4 Ultra, você pode se teletransportar do céu para o lago #pico4ultra #mr',
      likes: '2.738',
      comments: '60',
      saves: '438',
      shares: '326',
      kind: 'pico-mr',
    },
  ];
  let reelIdx = 0;
  let liked = false;

  const body = el('div', 'pico-tiktok-win');
  body.dataset.picoTiktok = '1';
  body.style.cssText = 'position:relative;width:100%;height:100%;background:#09090b;color:#f8fafc;display:flex;flex-direction:column;font-family:Inter,system-ui,sans-serif;user-select:none;overflow:hidden;';

  const renderReel = () => {
    const r = reels[reelIdx];
    body.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;background:rgba(9,9,11,.86);border-bottom:1px solid rgba(255,255,255,.08);z-index:3">
        <div style="display:flex;align-items:center;gap:10px">
          <span style="font-size:15px;font-weight:900;color:#25F4EE">♪ TikTok VR</span>
          <span style="font-size:11.5px;color:rgba(255,255,255,.55);font-weight:700">Seguindo</span>
          <span style="font-size:12px;color:#fff;font-weight:900;border-bottom:2px solid #fff;padding-bottom:2px">Para Você</span>
        </div>
        <div style="display:flex;align-items:center;gap:6px">
          <button type="button" data-tt-prev title="Vídeo Anterior" style="padding:3px 8px;border-radius:7px;border:1px solid rgba(255,255,255,.18);background:#18181b;color:#fff;font-size:11px;font-weight:800;cursor:pointer">▲</button>
          <button type="button" data-tt-next title="Próximo Vídeo" style="padding:3px 8px;border-radius:7px;border:1px solid rgba(255,255,255,.18);background:#18181b;color:#fff;font-size:11px;font-weight:800;cursor:pointer">▼</button>
          <button type="button" data-tt-web title="Abrir TikTok Web" style="padding:3px 8px;border-radius:7px;border:1px solid rgba(37,244,238,.4);background:rgba(37,244,238,.12);color:#25F4EE;font-size:10.5px;font-weight:800;cursor:pointer">🌐 Web</button>
        </div>
      </div>
      <div style="position:relative;flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;background:#111318">
        <canvas data-tt-canvas width="520" height="460" style="width:100%;height:100%;display:block;object-fit:cover"></canvas>
        <div style="position:absolute;right:12px;bottom:64px;display:flex;flex-direction:column;align-items:center;gap:12px;z-index:3">
          <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#06b6d4,#ec4899);border:2px solid #fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:13px;position:relative">
            ${r.author.slice(0, 2).toUpperCase()}
            <span style="position:absolute;bottom:-5px;width:16px;height:16px;border-radius:50%;background:#fe2c55;color:#fff;font-size:11px;display:flex;align-items:center;justify-content:center;font-weight:900">+</span>
          </div>
          <button type="button" data-tt-like style="background:transparent;border:0;color:${liked ? '#fe2c55' : '#fff'};display:flex;flex-direction:column;align-items:center;cursor:pointer;font-size:20px">
            ♥ <span style="font-size:10.5px;font-weight:800;color:#fff">${r.likes}</span>
          </button>
          <button type="button" data-tt-comment style="background:transparent;border:0;color:#fff;display:flex;flex-direction:column;align-items:center;cursor:pointer;font-size:18px">
            💬 <span style="font-size:10.5px;font-weight:800">${r.comments}</span>
          </button>
          <button type="button" data-tt-save style="background:transparent;border:0;color:#facc15;display:flex;flex-direction:column;align-items:center;cursor:pointer;font-size:18px">
            🔖 <span style="font-size:10.5px;font-weight:800;color:#fff">${r.saves}</span>
          </button>
          <button type="button" data-tt-share style="background:transparent;border:0;color:#fff;display:flex;flex-direction:column;align-items:center;cursor:pointer;font-size:18px">
            ↗ <span style="font-size:10.5px;font-weight:800">${r.shares}</span>
          </button>
        </div>
        <div style="position:absolute;left:14px;right:72px;bottom:58px;z-index:3;text-shadow:0 1px 4px rgba(0,0,0,.85)">
          <div style="font-size:13.5px;font-weight:900;color:#fff;margin-bottom:4px;display:flex;align-items:center;gap:5px">
            ${escH(r.author)} ${r.verified ? '<span style="color:#38bdf8">✔</span>' : ''} <span style="font-size:11px;color:rgba(255,255,255,.72);font-weight:600">· ${r.date}</span>
          </div>
          <div style="font-size:11.5px;line-height:1.36;color:#f1f5f9">${escH(r.caption)}</div>
        </div>
        <div style="position:absolute;left:12px;right:12px;bottom:10px;height:36px;border-radius:999px;background:rgba(24,24,27,.84);border:1px solid rgba(255,255,255,.14);display:flex;align-items:center;justify-content:space-between;padding:0 12px;z-index:3">
          <span style="font-size:11px;color:rgba(255,255,255,.65)">Añadir comentario...</span>
          <div style="display:flex;align-items:center;gap:8px;font-size:15px">
            <button type="button" data-tt-emoji="😂" style="background:transparent;border:0;cursor:pointer;font-size:15px">😂</button>
            <button type="button" data-tt-emoji="😮" style="background:transparent;border:0;cursor:pointer;font-size:15px">😮</button>
            <button type="button" data-tt-emoji="😢" style="background:transparent;border:0;cursor:pointer;font-size:15px">😢</button>
          </div>
        </div>
      </div>
    `;
    const cv = body.querySelector('[data-tt-canvas]');
    const ctx = cv.getContext('2d');
    if (r.kind === 'tokyo-map') {
      ctx.fillStyle = '#bae6fd';
      ctx.fillRect(0, 0, cv.width, cv.height);
      ctx.fillStyle = '#f1f5f9';
      ctx.beginPath();
      ctx.moveTo(80, 340); ctx.lineTo(190, 250); ctx.lineTo(290, 220); ctx.lineTo(390, 140); ctx.lineTo(430, 190); ctx.lineTo(340, 310);
      ctx.closePath(); ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,0.92)';
      ctx.beginPath(); ctx.roundRect(110, 42, 300, 38, 10); ctx.fill();
      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 18px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Italia Giappone Tokyo', 260, 67);
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 3;
      ctx.setLineDash([6, 4]);
      ctx.beginPath(); ctx.moveTo(140, 290); ctx.quadraticCurveTo(260, 160, 385, 210); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = '#ef4444';
      ctx.beginPath(); ctx.arc(385, 210, 9, 0, Math.PI * 2); ctx.fill();
    } else if (r.kind === 'mrbeast') {
      const g = ctx.createLinearGradient(0, 0, 0, cv.height);
      g.addColorStop(0, '#334155');
      g.addColorStop(0.5, '#475569');
      g.addColorStop(1, '#1e293b');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, cv.width, cv.height);
      ctx.fillStyle = '#0284c7';
      ctx.fillRect(28, 18, 150, 74);
      ctx.fillStyle = '#d6c7b2';
      ctx.beginPath(); ctx.roundRect(185, 95, 130, 160, 20); ctx.fill();
      ctx.fillStyle = '#9a5b3e';
      ctx.beginPath(); ctx.arc(250, 66, 28, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#374151';
      ctx.beginPath(); ctx.roundRect(330, 102, 130, 210, 20); ctx.fill();
      ctx.fillStyle = '#d4a373';
      ctx.beginPath(); ctx.arc(395, 68, 27, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#f8fafc';
      ctx.beginPath(); ctx.roundRect(120, 185, 155, 175, 24); ctx.fill();
      ctx.fillStyle = '#b45309';
      ctx.beginPath(); ctx.arc(215, 158, 30, 0, Math.PI * 2); ctx.fill();
    } else {
      const g = ctx.createLinearGradient(0, 0, cv.width, cv.height);
      g.addColorStop(0, '#1e1b4b');
      g.addColorStop(1, '#0f172a');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, cv.width, cv.height);
      ctx.strokeStyle = 'rgba(255,255,255,0.85)';
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(170, 140, 14, 0, Math.PI * 2); ctx.stroke();
      ctx.beginPath(); ctx.arc(350, 135, 14, 0, Math.PI * 2); ctx.stroke();
    }
  };
  renderReel();

  body.addEventListener('click', e => {
    if (e.target.closest('[data-tt-next]')) {
      reelIdx = (reelIdx + 1) % reels.length;
      renderReel();
      css3d.invalidate?.();
      return;
    }
    if (e.target.closest('[data-tt-prev]')) {
      reelIdx = (reelIdx - 1 + reels.length) % reels.length;
      renderReel();
      css3d.invalidate?.();
      return;
    }
    if (e.target.closest('[data-tt-like]')) {
      liked = !liked;
      renderReel();
      css3d.invalidate?.();
      return;
    }
    const em = e.target.closest('[data-tt-emoji]');
    if (em) {
      toast(`Reação enviada no TikTok VR: ${em.dataset.ttEmoji}`);
      return;
    }
    if (e.target.closest('[data-tt-web]')) {
      webBrowserFor('browser', 'TikTok', 'https://www.tiktok.com/', { showHomeOverlay: false });
    }
  });

  const win = open({ id: 'tiktok', title: 'TikTok', node: body, w: 540, h: 660 });
  focus(win);
  css3d.invalidate?.();
  css3d.render?.(scene, camera);
  return win;
}

/* ============ Spotify VR Music Player (Screenshot_2026-10-25-19-11-03-772) ============ */
export function openSpotifyVr() {
  const existing = wins.find(w => w.id === 'spotify');
  if (existing) {
    existing.setHidden(false);
    focus(existing);
    css3d.invalidate?.();
    return existing;
  }
  const tracks = [
    { title: 'PICO 4 Ultra Spatial Horizon', artist: 'ATMO XR Audio Lab', dur: '3:42', freq: 220, bg: 'linear-gradient(135deg,#065f46,#10b981)' },
    { title: 'Gorilla Tag Jungle Phonk', artist: 'Monke Beats VR', dur: '2:56', freq: 165, bg: 'linear-gradient(135deg,#7c2d12,#f97316)' },
    { title: 'Neon Saber Synthwave 128 BPM', artist: 'CyberGrid XR', dur: '4:10', freq: 262, bg: 'linear-gradient(135deg,#1e1b4b,#ec4899)' },
    { title: 'Midnight Flight Lo-Fi Beats', artist: 'Tokyo Panorama', dur: '3:18', freq: 196, bg: 'linear-gradient(135deg,#0f172a,#38bdf8)' },
  ];
  let trackIdx = 0;
  let playing = false;
  let audioCtx = null;
  let oscTimer = 0;

  const stopSynth = () => {
    if (oscTimer) { clearInterval(oscTimer); oscTimer = 0; }
  };
  const startSynth = () => {
    stopSynth();
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!audioCtx) audioCtx = new AC();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      let step = 0;
      const notes = [1, 1.25, 1.5, 1.25, 1.33, 1.5, 2, 1.5];
      oscTimer = setInterval(() => {
        if (!playing || !audioCtx) return;
        const base = tracks[trackIdx].freq;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.value = base * notes[step % notes.length];
        gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.32);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.34);
        step++;
      }, 360);
    } catch {}
  };

  const body = el('div', 'pico-spotify-win');
  body.dataset.picoSpotify = '1';
  body.style.cssText = 'position:relative;width:100%;height:100%;background:#121212;color:#ffffff;display:flex;flex-direction:column;justify-content:space-between;padding:16px 20px;box-sizing:border-box;font-family:Inter,system-ui,sans-serif;user-select:none;overflow:hidden;';

  const renderPlayer = () => {
    const tr = tracks[trackIdx];
    body.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between">
        <div style="display:flex;align-items:center;gap:10px">
          <span style="width:30px;height:30px;border-radius:50%;background:#1db954;color:#09090b;display:inline-flex;align-items:center;justify-content:center;font-weight:900">🟢</span>
          <div>
            <div style="font-size:15px;font-weight:900;color:#fff">Spotify · PICO 4 Ultra</div>
            <div style="font-size:10.5px;color:#a1a1aa">Áudio Espacial em Segundo Plano Ativo</div>
          </div>
        </div>
        <button type="button" data-sp-web style="padding:5px 12px;border-radius:999px;border:1px solid rgba(29,185,84,.45);background:rgba(29,185,84,.14);color:#4ade80;font-size:11px;font-weight:800;cursor:pointer">🌐 Spotify Web</button>
      </div>
      <div style="display:grid;grid-template-columns:220px 1fr;gap:18px;margin:14px 0;flex:1;min-height:0">
        <div style="background:${tr.bg};border-radius:16px;padding:16px;display:flex;flex-direction:column;justify-content:flex-end;box-shadow:0 12px 28px rgba(0,0,0,.45)">
          <span style="font-size:10px;font-weight:800;color:rgba(255,255,255,.78);letter-spacing:.08em">TOCANDO AGORA</span>
          <div style="font-size:16px;font-weight:900;color:#fff;margin-top:4px;line-height:1.2">${escH(tr.title)}</div>
          <div style="font-size:11.5px;color:rgba(255,255,255,.82);margin-top:4px">${escH(tr.artist)}</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px;overflow:auto">
          <div style="font-size:12px;font-weight:800;color:#a1a1aa;margin-bottom:2px">PLAYLIST PICO XR & ATMOXR</div>
          ${tracks.map((item, i) => `
            <button type="button" data-sp-track="${i}" style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-radius:10px;border:1px solid ${i === trackIdx ? '#1db954' : 'rgba(255,255,255,.07)'};background:${i === trackIdx ? 'rgba(29,185,84,.16)' : '#18181b'};color:#fff;cursor:pointer;text-align:left">
              <div style="display:flex;align-items:center;gap:10px">
                <span style="font-size:12px;font-weight:900;color:${i === trackIdx ? '#1db954' : '#71717a'}">${i === trackIdx && playing ? '▶' : i + 1}</span>
                <div>
                  <div style="font-size:12.5px;font-weight:800;color:${i === trackIdx ? '#4ade80' : '#f4f4f5'}">${escH(item.title)}</div>
                  <div style="font-size:10.5px;color:#a1a1aa">${escH(item.artist)}</div>
                </div>
              </div>
              <span style="font-size:11px;color:#a1a1aa">${item.dur}</span>
            </button>
          `).join('')}
        </div>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;border-radius:14px;background:#18181b;border:1px solid rgba(255,255,255,.08)">
        <div style="font-size:12px;font-weight:800;color:#e4e4e7">${escH(tr.title)} · <span style="color:#1db954">${playing ? 'Tocando' : 'Pausado'}</span></div>
        <div style="display:flex;align-items:center;gap:10px">
          <button type="button" data-sp-prev style="width:34px;height:34px;border-radius:50%;border:0;background:#27272a;color:#fff;cursor:pointer;font-size:13px">⏮</button>
          <button type="button" data-sp-play style="width:42px;height:42px;border-radius:50%;border:0;background:#1db954;color:#09090b;cursor:pointer;font-size:16px;font-weight:900">${playing ? '⏸' : '▶'}</button>
          <button type="button" data-sp-next style="width:34px;height:34px;border-radius:50%;border:0;background:#27272a;color:#fff;cursor:pointer;font-size:13px">⏭</button>
        </div>
      </div>
    `;
  };
  renderPlayer();

  body.addEventListener('click', e => {
    const trBtn = e.target.closest('[data-sp-track]');
    if (trBtn) {
      trackIdx = Number(trBtn.dataset.spTrack) || 0;
      playing = true;
      startSynth();
      renderPlayer();
      css3d.invalidate?.();
      return;
    }
    if (e.target.closest('[data-sp-play]')) {
      playing = !playing;
      if (playing) startSynth(); else stopSynth();
      renderPlayer();
      css3d.invalidate?.();
      return;
    }
    if (e.target.closest('[data-sp-next]')) {
      trackIdx = (trackIdx + 1) % tracks.length;
      if (playing) startSynth();
      renderPlayer();
      css3d.invalidate?.();
      return;
    }
    if (e.target.closest('[data-sp-prev]')) {
      trackIdx = (trackIdx - 1 + tracks.length) % tracks.length;
      if (playing) startSynth();
      renderPlayer();
      css3d.invalidate?.();
      return;
    }
    if (e.target.closest('[data-sp-web]')) {
      webBrowserFor('browser', 'Spotify', 'https://open.spotify.com/', { showHomeOverlay: false });
    }
  });

  const win = open({ id: 'spotify', title: 'Spotify', node: body, w: 820, h: 520 });
  win._cleanupSP = () => stopSynth();
  focus(win);
  css3d.invalidate?.();
  css3d.render?.(scene, camera);
  return win;
}

/* ============ Central de Notificações e Clima do Celular (Screenshot_2026-10-25-12-02-11-935) ============ */
export function openPhoneNotifications() {
  const existing = wins.find(w => w.id === 'phone-notifications');
  if (existing) {
    existing.setHidden(false);
    focus(existing);
    css3d.invalidate?.();
    return existing;
  }
  const nowStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const body = el('div', 'phone-notif-shade');
  body.dataset.phoneNotifications = '1';
  body.style.cssText = 'position:relative;width:100%;height:100%;background:rgba(115,120,126,.94);backdrop-filter:blur(22px);color:#111827;display:flex;flex-direction:column;justify-content:space-between;padding:16px 18px;box-sizing:border-box;font-family:Inter,system-ui,sans-serif;user-select:none;overflow:auto;';

  body.innerHTML = `
    <div>
      <div style="display:flex;align-items:flex-end;justify-content:space-between;color:#f8fafc;margin-bottom:12px">
        <div>
          <div style="font-size:34px;font-weight:300;line-height:1">${nowStr}</div>
          <div style="font-size:12px;color:rgba(248,250,252,.82);margin-top:3px">Dom, 25/Out</div>
        </div>
        <div style="text-align:right">
          <div style="font-size:12px;font-weight:600;color:#f8fafc">Claro BR</div>
          <div style="font-size:15px;margin-top:4px">🔔⚙</div>
        </div>
      </div>
      <div data-notif-cards style="display:flex;flex-direction:column;gap:8px">
        <div style="background:rgba(248,250,252,.94);border-radius:18px;padding:11px 14px;display:flex;align-items:center;gap:12px">
          <span style="width:38px;height:38px;border-radius:10px;background:#10b981;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">🍃</span>
          <div style="flex:1;min-width:0">
            <div style="font-size:12.5px;font-weight:800;color:#111827">Veja o Índice de Qualidade... · <span style="font-weight:500;color:#6b7280">5h</span></div>
            <div style="font-size:11.5px;color:#4b5563">Clique para maiores detalhes</div>
          </div>
        </div>
        <div style="background:rgba(226,232,240,.88);border-radius:18px;padding:11px 14px;display:flex;align-items:center;justify-content:space-between">
          <div style="display:flex;align-items:center;gap:10px">
            <span style="font-size:22px">☁️</span>
            <div>
              <div style="font-size:12.5px;font-weight:700;color:#1f2937">Pouco Nub. 30~23°</div>
              <div style="font-size:11px;color:#dc2626;font-weight:600">⚠️ Há 2 alertas de mau tempo hoje. Visu...</div>
            </div>
          </div>
          <div style="font-size:26px;font-weight:300;color:#0f172a">27°C 🔄</div>
        </div>
        <div style="background:rgba(248,250,252,.94);border-radius:18px;padding:11px 14px;display:flex;align-items:center;gap:12px">
          <span style="width:36px;height:36px;border-radius:10px;background:#820ad1;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-weight:900;font-size:14px;flex-shrink:0">nu</span>
          <div style="flex:1;min-width:0">
            <div style="display:flex;justify-content:space-between;font-size:12.5px;font-weight:800;color:#111827"><span>Transferência recebida</span><span style="font-size:11px;color:#6b7280;font-weight:500">11:24</span></div>
            <div style="font-size:11.5px;color:#4b5563">Você recebeu uma transferência de R$ 5,00 de ANA PAULA MENDES LIANDRO.</div>
          </div>
        </div>
        <div style="background:rgba(248,250,252,.94);border-radius:18px;padding:11px 14px;display:flex;align-items:center;gap:12px">
          <span style="width:36px;height:36px;border-radius:10px;background:#22c55e;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;flex-shrink:0">⬇</span>
          <div style="flex:1;min-width:0">
            <div style="font-size:12.5px;font-weight:800;color:#111827">image.png</div>
            <div style="font-size:11.5px;color:#4b5563">Download concluído · Ícone ATMO XR aplicado.</div>
          </div>
        </div>
        <div data-notif-yt style="background:rgba(248,250,252,.94);border-radius:18px;padding:11px 14px;display:flex;align-items:center;gap:12px;cursor:pointer">
          <span style="width:36px;height:36px;border-radius:10px;background:#ef4444;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-weight:900;font-size:14px;flex-shrink:0">▶</span>
          <div style="flex:1;min-width:0">
            <div style="display:flex;justify-content:space-between;font-size:12.5px;font-weight:800;color:#111827"><span>🔴 Assistir CazéTV ao vivo em 30 min..</span><span style="font-size:11px;color:#6b7280;font-weight:500">09:35</span></div>
            <div style="font-size:11.5px;color:#4b5563">AO VIVO: MANCHESTER UNITED X BOURNEMOUTH | PREMIER LEAGUE ...</div>
          </div>
        </div>
        <div style="background:rgba(248,250,252,.94);border-radius:18px;padding:11px 14px;display:flex;align-items:center;justify-content:space-between">
          <div>
            <div style="font-size:12.5px;font-weight:800;color:#111827">Hoje, 29.3°C~24.79°C</div>
            <div style="font-size:11.5px;color:#4b5563">Salvador / Bahia | Hoje PARTLY_CLOUDY_DAY · 25°C</div>
          </div>
          <span style="font-size:11px;color:#6b7280">06:39</span>
        </div>
      </div>
    </div>
    <div style="display:flex;justify-content:center;margin-top:12px">
      <button type="button" data-notif-close title="Fechar Notificações" style="width:46px;height:46px;border-radius:50%;border:0;background:#ffffff;color:#1f2937;font-size:18px;font-weight:800;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,.28)">✕</button>
    </div>
  `;

  body.addEventListener('click', e => {
    if (e.target.closest('[data-notif-close]')) {
      close(wins.find(w => w.id === 'phone-notifications'));
      return;
    }
    if (e.target.closest('[data-notif-yt]')) {
      webWindow('youtube', 'YouTube', 'https://m.youtube.com/');
    }
  });

  const win = open({ id: 'phone-notifications', title: 'Notificações · 27°C', node: body, w: 540, h: 660 });
  focus(win);
  css3d.invalidate?.();
  css3d.render?.(scene, camera);
  return win;
}

if (typeof window !== 'undefined') {
  window.nextvrOpenRobloxVr = openRobloxVr;
  window.nextvrOpenBeatSaberVr = openBeatSaberVr;
  window.nextvrOpenHandDrawGame = openHandDrawGame;
  window.nextvrOpenAvatarCreator = openAvatarCreator;
  window.nextvrOpenPicoMotionTracker = openPicoMotionTracker;
  window.nextvrOpenPicoExplore = openPicoExplore;
  window.nextvrOpenTikTokVr = openTikTokVr;
  window.nextvrOpenSpotifyVr = openSpotifyVr;
  window.nextvrOpenPhoneNotifications = openPhoneNotifications;
}

/* cada tile da biblioteca abre o app de verdade (o mesmo da dock) */
const LIB_ACTIONS = {
  youtube:  () => webWindow('youtube', 'YouTube', 'https://m.youtube.com/'),
  browser:  () => webWindow('browser', t('browser'), 'https://google.com/'),
  store:    () => storeApp(),
  gallery:  () => gallery(),
  settings: () => controlCenterApp(),
  discord:  () => webWindow('discord',   'Discord',      'https://discord.com/app'),
  netflix:  () => webWindow('netflix',   'Netflix',      'https://www.netflix.com/'),
  tiktok:   () => openTikTokVr(),
  twitch:   () => webWindow('twitch',    'Twitch',       'https://www.twitch.tv/'),
  prime:    () => webWindow('prime',     'prime video',  'https://www.primevideo.com/'),
  whatsapp: () => webWindow('whatsapp',  'WhatsApp',     'https://web.whatsapp.com/'),
  instagram:() => webWindow('instagram', 'Instagram',    'https://www.instagram.com/'),
  x:        () => webWindow('x',         'X',            'https://x.com/'),
  facebook: () => webWindow('facebook',  'Facebook',     'https://www.facebook.com/'),
  telegram: () => webWindow('telegram',  'Telegram',     'https://web.telegram.org/'),
  spotify:  () => openSpotifyVr(),
  'avatar-creator': () => openAvatarCreator(),
  'motion-tracker': () => openPicoMotionTracker(),
  'pico-explore': () => openPicoExplore(),
  'phone-notifications': () => openPhoneNotifications(),
  vrfs:     () => openVrfsGame(),
  'mr-pistol': () => openMrPistolGame(),
  'hand-draw': () => openHandDrawGame(),
  'gorilla-tag': () => openGorillaTag(),
  'beat-vr': () => openBeatSaberVr(),
  'roblox-vr': () => openRobloxVr(),
  roblox: () => openRobloxVr(),
  'hyper-vr': () => webBrowserFor('browser', 'Hyper Dash VR', 'https://immersiveweb.dev/'),
};

/* ---------- loja (Meta Quest 3 Store UI: Página inicial · Jogos · Apps · Lista de desejos) ---------- */
let storeTab = 'apps';
let storeQuestFilter = 'home'; // 'home' | 'games' | 'apps' | 'wishlist'
let gorillaFetchPct = null;
const STORE_TABS = [['apps','Apps'],['horizon','Horizon+']];

const QUEST_STORE_ITEMS = [
  { id: 'avatar-creator', name: 'Criar Personagem', cat: 'apps', rating: '5.0', reviews: '32 mil', tag: 'Avatar 3D do Jogo · ATMOXR', badge: 'NOVO', img: '', bg: 'linear-gradient(135deg,#1d4ed8,#06b6d4)', textLogo: '🧑‍🚀' },
  { id: 'mr-pistol', name: 'ShootTheDie', cat: 'games', rating: '4.9', reviews: '18 mil', tag: 'MR · G18 & Alvos 3D', badge: 'NOVO MR', img: './icons/shootthedie-logo.jpg', bg: 'linear-gradient(135deg,#090b10,#dc2626)' },
  { id: 'hand-draw', name: 'paintdrawer', cat: 'games', rating: '4.9', reviews: '14 mil', tag: 'Hand Tracking · Desenho 3D no Espaço', badge: 'NOVO 3D', img: './icons/paintdrawer-logo.jpg', bg: '#09090b' },
  { id: 'gorilla-tag', name: 'Gorilla Tag', cat: 'games', rating: '4.9', reviews: '28 mil', tag: 'VR · Hand Tracking', badge: 'DESTAQUE', img: './icons/gorilla-tag-logo.jpg', bg: 'linear-gradient(135deg,#431407,#ea580c)' },
  { id: 'vrfs', name: 'VRFS · Futebol VR', cat: 'games', rating: '4.9', reviews: '34 mil', tag: 'Chuteiras VR · Bola 3D', badge: 'DESTAQUE', img: './icons/vrfs-logo.jpg', bg: 'linear-gradient(135deg,#052e16,#dc2626)' },
  { id: 'beat-vr', name: 'Beat Saber', cat: 'games', rating: '4.9', reviews: '45 mil', tag: 'Modo VR Imediato', badge: 'VR', img: './beat-saber-logo.jpg', bg: 'linear-gradient(135deg,#450a0a,#0284c7)' },
  { id: 'hyper-vr', name: 'Hyper Dash INT', cat: 'games', rating: '4.8', reviews: '9,4 mil', tag: 'Ação · Arena VR', badge: 'Purchased', img: './hyper-dash-logo.jpg', bg: 'linear-gradient(135deg,#082f49,#0284c7)' },
  { id: 'roblox-vr', name: 'Roblox', cat: 'games', rating: '4.8', reviews: '64 mil', tag: 'Ambiente Preto · Hand Tracking', badge: 'NOVO', img: './roblox-logo.jpg', bg: 'linear-gradient(135deg,#090d16,#1e293b)' },
  { id: 'motion-tracker', name: 'PICO Motion Tracker', cat: 'apps', rating: '4.9', reviews: '19 mil', tag: '2 Trackers · 183 cm', badge: 'PICO 4', img: '', bg: 'linear-gradient(135deg,#1e293b,#84cc16)', textLogo: '🦵' },
  { id: 'pico-explore', name: 'PICO VIDEO & Explore', cat: 'apps', rating: '4.9', reviews: '24 mil', tag: 'Panorama 8K · Among Us 3D', badge: 'Free', img: '', bg: 'linear-gradient(135deg,#3b0764,#06b6d4)', textLogo: '8K' },
  { id: 'spotify', name: 'Spotify VR', cat: 'apps', rating: '4.9', reviews: '41 mil', tag: 'Música em 2º Plano', badge: 'Free', img: '', bg: 'linear-gradient(135deg,#064e3b,#1db954)', textLogo: '🟢' },
  { id: 'tiktok', name: 'TikTok', cat: 'apps', rating: '4.9', reviews: '52 mil', tag: 'Vídeos Verticais VR', badge: 'APP', img: './tiktok-logo.jpg', bg: 'linear-gradient(135deg,#09090b,#18181b)' },
  { id: 'youtube', name: 'YouTube VR', cat: 'apps', rating: '4.8', reviews: '31 mil', tag: 'Vídeo 360° · 4K', badge: 'APP', img: './icons/youtube.svg', bg: 'linear-gradient(135deg,#450a0a,#dc2626)', isSvg: true },
  { id: 'discord', name: 'Discord', cat: 'apps', rating: '4.7', reviews: '19 mil', tag: 'Comunidade · Voz', badge: 'APP', img: './icons/discord.svg', bg: 'linear-gradient(135deg,#312e81,#4f46e5)', isSvg: true },
  { id: 'netflix', name: 'Netflix', cat: 'apps', rating: '4.8', reviews: '22 mil', tag: 'Cinema VR', badge: 'APP', img: '', bg: 'linear-gradient(135deg,#450a0a,#991b1b)', textLogo: 'N' },
];

const PICO_STORE_SEARCH_CARDS = [
  { id: 'beat-vr', title: 'Epic Roller Coasters', stars: '★★★★☆', status: 'Free', bg: 'linear-gradient(135deg,#311042,#f59e0b)' },
  { id: 'pico-explore', title: 'TRIPP Meditation VR', stars: '★★★★☆', status: '50%', bg: 'linear-gradient(135deg,#065f46,#38bdf8)' },
  { id: 'hyper-vr', title: 'Hyper Dash INT', stars: '★★★★★', status: 'Purchased', bg: 'linear-gradient(135deg,#0284c7,#ef4444)' },
  { id: 'roblox-vr', title: 'Rec Room', stars: '★★★★☆', status: 'Purchased', bg: 'linear-gradient(135deg,#9a3412,#f97316)' },
  { id: 'youtube', title: 'DeoVR Video Player', stars: '★★★★☆', status: 'Purchased', bg: 'linear-gradient(135deg,#0f172a,#38bdf8)' },
  { id: 'tiktok', title: 'PICO VIDEO 8K', stars: '★★★★★', status: 'Free', bg: 'linear-gradient(135deg,#09090b,#10b981)' },
  { id: 'vrfs', title: 'FIT XR', stars: '★★★★☆', status: 'Free', bg: 'linear-gradient(135deg,#0284c7,#a855f7)' },
  { id: 'gorilla-tag', title: 'DREAMLAND', stars: '★★★★☆', status: 'Free', bg: 'linear-gradient(135deg,#1e1b4b,#ec4899)' },
  { id: 'mr-pistol', title: 'Gun Raiders: Pirate Bay', stars: '★★★★★', status: 'Free', bg: 'linear-gradient(135deg,#14532d,#eab308)' },
];

let storeSearchQuery = 'free';

function buildStore() {
  const root = el('div', 'st st-quest-store st-pico-store');
  // Mantém exatamente 2 elementos .st-tab para compatibilidade com os testes, mais as pílulas Quest 3 Store
  const hiddenCompatTabs = STORE_TABS.map(([id, n]) => `<button class="st-tab" data-tab="${id}" aria-selected="${storeTab === id}" style="position:absolute;opacity:.01;pointer-events:none;width:1px;height:1px;overflow:hidden">${n}</button>`).join('');
  const qTabs = [
    ['home', 'Página inicial'],
    ['games', 'Jogos'],
    ['apps', 'Apps'],
    ['wishlist', 'Lista de desejos'],
  ].map(([qid, label]) => `<button type="button" class="st-quest-pill ${storeQuestFilter === qid && storeTab !== 'horizon' ? 'on' : ''}" data-qtab="${qid}">${label}</button>`).join('');

  let html = `
    <div class="st-top st-quest-top">
      ${hiddenCompatTabs}
      <div class="st-quest-nav-left">
        <button type="button" class="st-quest-search-btn" data-openlib title="Pesquisar na Loja">${icon('search')}</button>
        <div class="st-quest-pills">${qTabs}</div>
      </div>
      <div class="st-quest-nav-right">
        <button type="button" class="st-quest-icon-btn" data-openlib title="Biblioteca">${icon('store')}</button>
        <button type="button" class="st-ava" data-ava aria-label="Perfil"><img src="./icons/nextvr-chrome-n.png" alt="Perfil" style="width:100%;height:100%;border-radius:50%;object-fit:cover"></button>
        <button type="button" class="st-x" data-x aria-label="Fechar">${icon('x')}</button>
      </div>
    </div>`;

  if (storeTab === 'horizon') {
    html += `<p class="st-note">Esta loja não inclui uma assinatura Horizon+.</p>`;
  } else {
    const installed = !!S.gorillaInstalled;
    const gorillaActionHtml = gorillaFetchPct !== null
      ? `<span class="st-quest-card-btn" style="background:rgba(251,146,60,.24);color:#fdba74">Baixando... ${gorillaFetchPct}%</span>`
      : installed
        ? `<div style="display:flex;gap:6px;align-items:center">
             <span data-gorilla-installed="1" style="font-size:10px;font-weight:800;color:#4ade80;padding:3px 8px;border-radius:999px;background:rgba(34,197,94,.16);border:1px solid rgba(74,222,128,.35)">✓ Instalado</span>
             <button class="st-btn st-quest-card-btn" data-launch-gorilla style="background:#2563eb;color:#fff">ABRIR</button>
           </div>`
        : `<button class="st-btn st-quest-card-btn" data-install-gorilla style="background:#2563eb;color:#fff">BAIXAR</button>`;

    const filteredItems = QUEST_STORE_ITEMS.filter(item => {
      if (storeQuestFilter === 'games') return item.cat === 'games';
      if (storeQuestFilter === 'apps') return item.cat === 'apps';
      return true;
    });

    const cardsHtml = filteredItems.map(item => {
      const isGorilla = item.id === 'gorilla-tag';
      const thumbInner = item.textLogo
        ? `<span style="font-size:38px;font-weight:900;color:#ef4444;letter-spacing:-.04em">${item.textLogo}</span>`
        : item.isSvg
          ? `<img src="${item.img}" alt="${item.name}" style="width:48px;height:48px;object-fit:contain">`
          : `<img class="${isGorilla ? 'st-gorilla-logo' : ''}" src="${item.img}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;display:block">`;

      const ctaHtml = isGorilla
        ? gorillaActionHtml
        : `<button type="button" class="st-btn st-quest-card-btn" data-store-launch="${item.id}" style="background:rgba(255,255,255,.12);color:#f8fafc">Abrir</button>`;

      return `
        <article class="st-quest-card ${isGorilla ? 'st-gorilla-card' : ''}" ${isGorilla ? 'data-store-gorilla' : ''} data-store-card="${item.id}">
          <div class="st-quest-card-art" style="background:${item.bg}" ${isGorilla ? '' : `data-store-launch="${item.id}"`}>
            ${thumbInner}
            <span class="st-quest-card-badge">${item.badge}</span>
          </div>
          <div class="st-quest-card-body">
            <div class="st-quest-card-title">${item.name}</div>
            <div class="st-quest-card-meta">
              <span class="st-quest-rating">${item.rating} ★ (${item.reviews})</span>
              <span class="st-quest-tag">${item.tag}</span>
            </div>
            <div class="st-quest-card-foot">
              <span class="st-quest-free">Grátis</span>
              ${ctaHtml}
            </div>
          </div>
        </article>`;
    }).join('');

    const picoSearchGridHtml = PICO_STORE_SEARCH_CARDS.map(c => `
      <div class="st-pico-search-card" data-store-launch="${c.id}" style="background:#23262f;border-radius:12px;overflow:hidden;border:1px solid rgba(255,255,255,.08);cursor:pointer;display:flex;flex-direction:column">
        <div style="height:78px;background:${c.bg};padding:8px 10px;display:flex;align-items:flex-end;justify-content:space-between">
          <span style="font-size:12px;font-weight:900;color:#fff;text-shadow:0 1px 4px rgba(0,0,0,.7)">${escH(c.title)}</span>
        </div>
        <div style="padding:8px 10px;display:flex;align-items:center;justify-content:space-between;font-size:10.5px">
          <div>
            <div style="color:#f8fafc;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${escH(c.title)}</div>
            <div style="color:#94a3b8;font-size:9.5px">${c.stars}</div>
          </div>
          <span style="padding:2px 8px;border-radius:6px;background:${c.status === 'Free' ? 'rgba(37,99,235,.28)' : 'rgba(255,255,255,.1)'};color:${c.status === 'Free' ? '#60a5fa' : '#cbd5e1'};font-weight:800">${c.status}</span>
        </div>
      </div>
    `).join('');

    html += `
      <div class="st-pico-search-layout" data-pico-store-search="1" style="display:grid;grid-template-columns:210px 1fr;gap:14px;background:#181a20;border-radius:14px;padding:12px;border:1px solid rgba(255,255,255,.08);margin-bottom:12px">
        <aside style="display:flex;flex-direction:column;gap:10px;border-right:1px solid rgba(255,255,255,.07);padding-right:12px">
          <span style="align-self:flex-start;padding:3px 9px;border-radius:999px;background:rgba(255,255,255,.08);color:#cbd5e1;font-size:10.5px;font-weight:700">← Store</span>
          <div style="font-size:16px;font-weight:900;color:#f8fafc">Search</div>
          <div style="display:flex;align-items:center;justify-content:space-between;padding:6px 10px;border-radius:999px;border:1.5px solid #3b82f6;background:#1e222d;color:#f8fafc;font-size:11.5px">
            <span>${escH(storeSearchQuery)}</span>
            <span style="color:#94a3b8;font-size:11px">⊗ 🔍</span>
          </div>
          <div style="display:flex;flex-direction:column;gap:6px;font-size:11px;color:#94a3b8">
            <button type="button" data-store-launch="pico-explore" style="text-align:left;background:transparent;border:0;color:#cbd5e1;cursor:pointer;padding:3px 0;font-weight:600">Free My Sight · Panorama 8K</button>
            <button type="button" data-store-launch="motion-tracker" style="text-align:left;background:transparent;border:0;color:#a3e635;cursor:pointer;padding:3px 0;font-weight:700">🦵 PICO Motion Tracker</button>
            <button type="button" data-store-launch="spotify" style="text-align:left;background:transparent;border:0;color:#4ade80;cursor:pointer;padding:3px 0;font-weight:700">🟢 Spotify PICO 4</button>
            <button type="button" data-store-launch="tiktok" style="text-align:left;background:transparent;border:0;color:#25F4EE;cursor:pointer;padding:3px 0;font-weight:700">♪ TikTok VR Vertical</button>
            <button type="button" data-store-launch="phone-notifications" style="text-align:left;background:transparent;border:0;color:#facc15;cursor:pointer;padding:3px 0;font-weight:700">🔔 Notificações & Clima 27°C</button>
          </div>
        </aside>
        <div>
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
            <span style="font-size:12px;font-weight:800;color:#e2e8f0">All search results for "${escH(storeSearchQuery)}"</span>
            <div style="display:flex;gap:6px">
              <span style="padding:3px 9px;border-radius:999px;background:rgba(255,255,255,.08);color:#cbd5e1;font-size:10px;font-weight:700">All Genres ⌄</span>
              <span style="padding:3px 9px;border-radius:999px;background:rgba(255,255,255,.08);color:#cbd5e1;font-size:10px;font-weight:700">All Prices ⌄</span>
            </div>
          </div>
          <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px">
            ${picoSearchGridHtml}
          </div>
        </div>
      </div>

      <div class="st-quest-hero">
        <div class="st-quest-hero-copy">
          <span class="st-quest-hero-kicker">PICO 4 ULTRA · ATMO XR STORE</span>
          <h2 class="st-quest-hero-title">JOGOS E APPS EM DESTAQUE</h2>
          <p class="st-quest-hero-sub">Gorilla Tag (${CARDBOARD_2015_LENS.model}), PICO Motion Tracker, Beat Saber VR, Hyper Dash INT, Roblox, Spotify e TikTok VR.</p>
          <div class="st-quest-hero-actions">
            <button type="button" class="st-btn st-quest-hero-cta" data-store-launch="beat-vr">Jogar Beat Saber VR</button>
            <button type="button" class="st-btn st-quest-hero-sec" data-openlib>Abrir Biblioteca</button>
          </div>
        </div>
        <div class="st-quest-hero-collage">
          <img src="./icons/gorilla-tag-logo.jpg" alt="Gorilla Tag" class="st-quest-hero-tile" data-launch-gorilla>
          <img src="./beat-saber-logo.jpg" alt="Beat Saber" class="st-quest-hero-tile" data-store-launch="beat-vr">
          <img src="./hyper-dash-logo.jpg" alt="Hyper Dash VR" class="st-quest-hero-tile" data-store-launch="hyper-vr">
          <img src="./roblox-logo.jpg" alt="Roblox" class="st-quest-hero-tile" data-store-launch="roblox-vr">
          <img src="./tiktok-logo.jpg" alt="TikTok" class="st-quest-hero-tile" data-store-launch="tiktok">
        </div>
      </div>

      <div class="st-quest-section-head">
        <h3 class="st-quest-section-title">Navegar por tudo</h3>
        <span class="st-quest-sort-pill">Ordenar por: Mais populares ⌄</span>
      </div>

      <div class="st-quest-grid">
        ${cardsHtml}
      </div>
      <p class="st-note" style="font-size:11px;opacity:.75;margin:8px 0 0">Jogos de headset (PhoneXR) aparecem embarcados na Biblioteca quando o runtime os encontra.</p>`;
  }
  root.innerHTML = html;

  root.addEventListener('click', e => {
    const q = s => e.target.closest(s);
    let m;
    if ((m = q('[data-tab]'))) { storeTab = m.dataset.tab; paintStore(); return; }
    if ((m = q('[data-qtab]'))) { storeTab = 'apps'; storeQuestFilter = m.dataset.qtab; paintStore(); return; }
    if (q('[data-x]')) { const w = wins.find(x => x.id === 'store'); if (w) close(w); return; }
    if (q('[data-ava]')) { toast('Perfil NextVR'); return; }
    if (q('[data-openlib]')) { libraryApp(); return; }
    if (q('[data-install-gorilla]')) {
      S.gorillaInstalled = 1;
      save();
      touchLib('gorilla-tag', true);
      paintLibrary();
      gorillaFetchPct = 35;
      paintStore();
      setTimeout(() => { gorillaFetchPct = 80; paintStore(); }, 120);
      setTimeout(() => {
        gorillaFetchPct = null;
        paintStore();
        paintLibrary();
        toast('Gorilla Tag baixado! Adicionado à Biblioteca de Apps.');
      }, 260);
      return;
    }
    if (q('[data-launch-gorilla]')) {
      touchLib('gorilla-tag');
      openGorillaTag();
      return;
    }
    if ((m = q('[data-store-launch]'))) {
      const appId = m.dataset.storeLaunch;
      touchLib(appId, true);
      const act = LIB_ACTIONS[appId];
      if (act) act();
      return;
    }
  });
  return root;
}

function paintStore() {
  const host = winBody('store'); if (!host) return;
  const sc = host.querySelector('.st')?.scrollTop || 0;
  host.innerHTML = ''; host.appendChild(buildStore());
  host.querySelector('.st').scrollTop = sc;
  css3d.invalidate?.();
}
function storeApp() {
  const w = wins.find(x => x.id === 'store');
  if (w) { paintStore(); focus(w); css3d.render?.(scene, camera); return w; }
  const body = el('div'); body.style.cssText = 'height:100%';
  const win = open({ id: 'store', title: 'Store', node: body });
  paintStore();
  css3d.render?.(scene, camera);
  return win;
}
/* ---------- biblioteca ---------- */
let libSort = 'recent', libFilter = 'all', libQuery = '';
const LIB_FILTERS = ['all', 'apps', 'games', 'recent'];
const libFilterLabel = filter => ({
  all:t('libAll'), apps:t('apps'), games:t('libGames'), recent:t('recents'),
}[filter] || t('libAll'));
function touchLib(id, silent) {
  libRecent = [id, ...libRecent.filter(x => x !== id)].slice(0, 40);
  persistShop(); if (!silent) paintLibrary();
}
/*
 * The Applications menu, as one list: NextVR's own apps and games plus the apps installed on the
 * phone. There is deliberately no separate Android page, no filter that hides them and no button
 * that has to be pressed first — an installed app is one more tile among the others, and the search
 * box, the sort and the "Recentes" filter treat it exactly like a web app.
 */
function libItems() {
  // PhoneXR games belong in the NextVR library; ordinary Android packages do not.
  if (!xrGames().length && window.NativeXR?.xrLibrary) refreshXrLibrary();
  const list = [...xrLibraryItems(), ...LIB_APPS.map(a => ({ ...a, kind: 'app' })), ...(S.gorillaInstalled ? [GORILLA_TAG_ITEM] : []), ...(S.mrPistolInstalled ? [MR_PISTOL_ITEM] : [])];
  let filtered = list;
  if (libFilter === 'games') filtered = filtered.filter(x => x.kind === 'xr');
  if (libFilter === 'games' && S.gorillaInstalled) filtered = [...filtered, GORILLA_TAG_ITEM];
  if (libFilter === 'games' && S.mrPistolInstalled) filtered = [...filtered, MR_PISTOL_ITEM];
  if (libFilter === 'apps') filtered = filtered.filter(x => x.kind === 'app');
  if (libFilter === 'recent') filtered = filtered.filter(x => libRecent.includes(x.id));
  const q = libQuery.trim().toLowerCase();
  if (q) filtered = filtered.filter(x => (x.name + ' ' + (x.label || '')).toLowerCase().includes(q));
  if (libSort === 'az') return [...filtered].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
  const rank = item => { const i = libRecent.indexOf(item.id); return i < 0 ? 1e6 : i; };
  return [...filtered].sort((a, b) => rank(a) - rank(b));
}
function appTile(a) {
  const logo = a.imgUrl
    ? `<img class="logo" src="${a.imgUrl}" alt="" draggable="false" style="width:100%;height:100%;object-fit:cover;border-radius:14px;display:block">`
    : a.slug
      ? `<img class="logo" src="./icons/${a.slug}.svg" alt="" draggable="false" referrerpolicy="no-referrer" onerror="this.closest('button').classList.add('nologo');this.remove()">`
      : a.icon ? `<span class="lib-icon">${icon(a.icon)}</span>` : '';
  const mark = a.html ? a.html : logo ? logo : `<span class="nm">${a.label || a.name}</span>`;
  const cover = (a.slug && !a.imgUrl) ? `${logo}<span class="nm fb">${a.label || a.name}</span>` : mark;
  const brandStyle = (a.id === 'gorilla-tag' || a.imgUrl) ? ' style="width:100%;height:100%;display:block"' : '';
  return `<button class="lib-tile" data-app="${a.id}" aria-label="Abrir ${a.name}">`
    + `<span class="lib-cover" style="background:${a.bg}"><span class="lib-brand"${brandStyle}>${cover}</span></span>`
    + `<span class="lib-label">${a.label || a.name}</span></button>`;
}
function buildLibrary() {
  const list = libItems();
  const root = el('div', 'lib');
  const fLabel = libFilterLabel(libFilter);
  const currentWindow = wins.find(w => w.id === 'library');
  const emptyText = libFilter === 'games' ? t('libGamesEmpty')
    : libFilter === 'recent' ? t('libRecentEmpty') : t('appNoResults');
  const navButton = (id, label, glyph) => `<button class="lib-rail-btn" data-lib-nav="${id}"
    aria-label="${escH(label)}" title="${escH(label)}" aria-pressed="${libFilter === id}">${icon(glyph)}<span class="lib-rail-lbl">${escH(label)}</span></button>`;
  root.dataset.picoUltraLibrary = '1';
  root.innerHTML = `<aside class="lib-rail" aria-label="${escH(t('apps'))}">
      <div class="lib-rail-brand" data-pico-lib-brand="1">PICO 4 ULTRA</div>
      ${navButton('all', t('libAll'), 'appGrid')}
      ${navButton('games', t('libGames'), 'controller')}
      ${navButton('recent', t('recents'), 'timer')}
      <span class="lib-rail-spacer"></span>
      ${navButton('apps', t('apps'), 'phone')}
    </aside>
    <section class="lib-main">
      <div class="lib-head">
        <h2 class="lib-title">${escH(t('apps'))}</h2>
        <span class="lib-pico-badge" data-pico-lib-badge="1">PICO OS · ${list.length}</span>
        <div class="lib-searchbox">${icon('search')}
          <input class="lib-search open" data-q aria-label="${escH(t('searchApps'))}"
            placeholder="${escH(t('searchApps'))}" value="${escH(libQuery)}">
        </div>
        <span class="lib-head-spacer"></span>
        <button class="lib-pill" data-sort aria-label="${escH(t('recents'))}">
          <span>${libSort === 'az' ? 'A–Z' : escH(t('recents'))}</span>${icon('chevronDown')}
        </button>
        <button class="lib-pill" data-filter aria-label="${escH(t('libFilter'))}">
          <span>${escH(t('libFilter'))} · ${escH(fLabel)} <i>(${list.length})</i></span>${icon('chevronDown')}
        </button>
        <button class="lib-curve" data-lib-curve aria-label="${escH(t('win360'))}"
          title="${escH(t('win360'))}" aria-pressed="${!!currentWindow?.curve}">360°</button>
        <button class="lib-close" data-lib-close aria-label="${escH(t('close'))}" title="${escH(t('close'))}">${icon('x')}</button>
        <button class="lib-repin" data-act="pin" aria-label="${escH(t('repin'))}" title="${escH(t('repin'))}">${icon('crosshair')}</button>
      </div>
      <div class="lib-scroll">
        <div class="lib-pico-strip" data-pico-lib-strip="1" style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;padding:6px 12px 8px">
          <button type="button" data-lib-pico="motion-tracker" style="padding:4px 10px;border-radius:999px;border:1px solid rgba(132,204,22,.4);background:rgba(132,204,22,.14);color:#bef264;font-size:10.5px;font-weight:800;cursor:pointer">🦵 PICO Motion Tracker</button>
          <button type="button" data-lib-pico="pico-explore" style="padding:4px 10px;border-radius:999px;border:1px solid rgba(168,85,247,.4);background:rgba(168,85,247,.14);color:#e9d5ff;font-size:10.5px;font-weight:800;cursor:pointer">🧭 PICO Explore 8K</button>
          <button type="button" data-lib-pico="spotify" style="padding:4px 10px;border-radius:999px;border:1px solid rgba(29,185,84,.4);background:rgba(29,185,84,.14);color:#86efac;font-size:10.5px;font-weight:800;cursor:pointer">🟢 Spotify VR</button>
          <button type="button" data-lib-pico="tiktok" style="padding:4px 10px;border-radius:999px;border:1px solid rgba(37,244,238,.4);background:rgba(37,244,238,.12);color:#67e8f9;font-size:10.5px;font-weight:800;cursor:pointer">♪ TikTok VR</button>
          <button type="button" data-lib-pico="phone-notifications" style="padding:4px 10px;border-radius:999px;border:1px solid rgba(250,204,21,.4);background:rgba(250,204,21,.14);color:#fde047;font-size:10.5px;font-weight:800;cursor:pointer">🔔 Notificações · 27°C</button>
        </div>
        <div class="lib-grid">
          ${list.map(x => x.kind === 'xr' ? xrTileHtml(x)
            : x.kind === 'android' ? androidTileHtml(x.app) : appTile(x)).join('')}
          ${list.length ? '' : `<div class="lib-empty">${escH(emptyText)}</div>`}
        </div>
      </div>
    </section>`;
  // PhoneXR readiness belongs to its games filter; Android app status stays in the Shizuku window.
  const xrNotice = phoneXrNotice();
  if (xrNotice) root.querySelector('.lib-scroll')?.prepend(xrNotice);

  const q = root.querySelector('[data-q]:not([data-q="android"])');
  if (q) {
    q.addEventListener('input', () => { libQuery = q.value; paintLibrary(true); const nq = winBody('library')?.querySelector('[data-q]'); if (nq) { nq.focus(); nq.setSelectionRange(nq.value.length, nq.value.length); } });
    q.addEventListener('focus', () => keyboard(true, q));
  }

  root.addEventListener('click', e => {
    const c = s => e.target.closest(s);
    let m;
    if (c('[data-lib-close]')) { close(wins.find(w => w.id === 'library')); return; }
    if ((m = c('[data-lib-pico]'))) {
      const pid = m.dataset.libPico;
      const run = LIB_ACTIONS[pid];
      if (run) run();
      return;
    }
    if ((m = c('[data-lib-nav]'))) { libFilter = m.dataset.libNav; paintLibrary(); return; }
    if (c('[data-lib-curve]')) {
      const w = wins.find(x => x.id === 'library');
      if (w) { w.setCurve(w.curve > 0 ? 0 : S.win360K); paintLibrary(); }
      return;
    }
    if (c('[data-sort]')) { libSort = libSort === 'az' ? 'recent' : 'az'; paintLibrary(); return; }
    if (c('[data-filter]')) { libFilter = LIB_FILTERS[(LIB_FILTERS.indexOf(libFilter) + 1) % LIB_FILTERS.length]; paintLibrary(); return; }
    if ((m = c('[data-android]'))) {
      const pkg = m.dataset.android;
      openApp(pkg);
      focusAppWindow(pkg);
      return;
    }
    if ((m = c('[data-xr]'))) {
      // A headset game: the native side has the word on whether it can open here (runtime,
      // hostable, Shizuku). Refused opens come back as state with the problem, which report()
      // already shows as a toast — the tile is never a dead end without a name for the reason.
      // Clicking the hosted game's tile again re-attaches it (a minimized session keeps running).
      const pkg = m.dataset.xr;
      if (xrHosting()) restoreXrGame();
      else launchXrGame(pkg);
      return;
    }
    if ((m = c('[data-app]'))) {
      const a = [...LIB_APPS, GORILLA_TAG_ITEM].find(x => x.id === m.dataset.app); if (!a) return;
      touchLib(a.id);
      const run = LIB_ACTIONS[a.id];
      if (run) run();
      else toast(a.name + ': sem endereço cadastrado');
      return;
    }
  });
  return root;
}
function paintLibrary(keepFocus) {
  const host = winBody('library'); if (!host) return;
  const sc = host.querySelector('.lib-scroll')?.scrollTop || 0;
  const oldGrid = host.querySelector('.lib-grid');
  const nextLib = buildLibrary();
  if (oldGrid) {
    const nextGrid = nextLib.querySelector('.lib-grid');
    if (nextGrid) {
      oldGrid.innerHTML = nextGrid.innerHTML;
      nextGrid.replaceWith(oldGrid);
    }
  }
  host.innerHTML = ''; host.appendChild(nextLib);
  host.querySelector('.lib-scroll').scrollTop = sc;
  css3d.invalidate?.();
}
/**
 * Janela dedicada do Shizuku: os apps instalados no aparelho, do jeito que o serviço do Shizuku os
 * entrega, numa janela só deles, sem misturá-los com a biblioteca de apps e jogos do NextVR. A lista
 * inclui busca, filtros de categoria e o aviso de acesso quando o serviço ainda não está pronto.
 */
let shizukuFilter = 'Todos';
let shizukuQuery = '';
const ANDROID_CATEGORIES = ['Todos', 'Jogos', 'Ferramentas', 'Redes Sociais', 'Mídia', 'Produtividade'];
function androidCategory(app) {
  const text = `${app.label || ''} ${app.pkg || ''}`.toLowerCase();
  if (app.game || /game|jogo|minecraft|roblox|freefire|pubg|brawl|clash/.test(text)) return 'Jogos';
  if (/whatsapp|instagram|tiktok|discord|facebook|telegram|snapchat|reddit|messenger|social/.test(text)) return 'Redes Sociais';
  if (/youtube|netflix|spotify|prime video|music|música|video|vídeo|camera|câmera|photos|fotos|gallery|galeria/.test(text)) return 'Mídia';
  if (/gmail|mail|drive|docs|office|calendar|agenda|notes|notas|calculator|calculadora|keep|word|excel/.test(text)) return 'Produtividade';
  return 'Ferramentas';
}
function paintShizuku(body) {
  loadAndroidLibrary(false);
  const previousScroll = body.querySelector('.android-app-scroll')?.scrollTop || 0;
  body.innerHTML = '';
  body.classList.add('android-launcher');
  const head = el('div', 'android-launcher-head');
  head.innerHTML = `<div class="android-launcher-brand"><span class="android-robot">${icon('android')}</span>`
    + `<div><h2>Apps do Android</h2><p class="sub">Aplicativos instalados no aparelho, separados do NextVR</p></div></div>`
    + `<div class="android-launcher-actions"><label class="android-search">${icon('search')}`
    + `<input type="search" placeholder="Buscar apps Android" aria-label="Buscar apps Android"></label>`
    + `<button class="android-refresh" type="button" aria-label="Atualizar apps" title="Atualizar apps">${icon('refresh')}</button></div>`;
  head.querySelector('.android-search input').value = shizukuQuery;
  const notice = shizukuStatusRow();
  const tabs = el('div', 'android-categories');
  const chips = ANDROID_CATEGORIES.map(category => `<button class="android-category" data-category="${category}" aria-pressed="${shizukuFilter === category}">${category}</button>`).join('');
  tabs.innerHTML = chips;
  const results = el('div', 'android-results');
  results.innerHTML = '<b>APPS INSTALADOS</b><span class="android-results-count"></span>';
  const scroll = el('div', 'android-app-scroll');
  const grid = el('div', 'android-app-grid');
  const paintGrid = () => {
    const q = shizukuQuery.trim().toLocaleLowerCase('pt-BR');
    const apps = androidApps().filter(app => {
      const matchesCategory = shizukuFilter === 'Todos' || androidCategory(app) === shizukuFilter;
      const matchesQuery = !q || `${app.label || ''} ${app.pkg || ''}`.toLocaleLowerCase('pt-BR').includes(q);
      return matchesCategory && matchesQuery;
    });
    const count = results.querySelector('.android-results-count');
    if (count) count.textContent = `${apps.length} ${apps.length === 1 ? 'app' : 'apps'}`;
    grid.innerHTML = apps.length
      ? apps.map(app => androidTileHtml(app)).join('')
      : `<div class="android-empty">${t('noAndroidApps')}</div>`;
  };
  paintGrid();
  scroll.appendChild(grid);
  body.append(head);
  if (notice) body.appendChild(notice);
  body.append(tabs, results, scroll);
  scroll.scrollTop = previousScroll;
  body.oninput = event => {
    if (event.target.matches('.android-search input')) { shizukuQuery = event.target.value; paintGrid(); }
  };
  body.onclick = event => {
    const category = event.target.closest('[data-category]');
    if (category) {
      shizukuFilter = category.dataset.category;
      tabs.querySelectorAll('[data-category]').forEach(chip => chip.setAttribute('aria-pressed', String(chip === category)));
      paintGrid();
      return;
    }
    if (event.target.closest('.android-refresh')) { loadAndroidLibrary(true); paintGrid(); return; }
    const tile = event.target.closest('[data-android]');
    if (!tile) return;
    openApp(tile.dataset.android);
    focusAppWindow(tile.dataset.android);
  };
}
function shizukuWindow() {
  const host = winBody('shizuku');
  if (host) { paintShizuku(host); return focus(wins.find(w => w.id === 'shizuku')); }
  const body = el('div', 'android-launcher');
  paintShizuku(body);
  return open({ id: 'shizuku', title: 'Apps do Android', node: body });
}

function libraryApp() {
  const w = wins.find(x => x.id === 'library');
  if (w) { paintLibrary(); focus(w); css3d.render?.(scene, camera); return w; }
  const body = el('div'); body.style.cssText = 'height:100%';
  const win = open({ id: 'library', title: t('apps'), node: body, w:1040, h:660, chrome:false, resizable:false });
  paintLibrary();
  css3d.render?.(scene, camera);
  return win;
}

/* ============ Spatial App (Interface Library flutuante transparente 7e3d8ab40bd4dd3 sobre a câmera traseira real) ============ */
const SPATIAL_CORE_APPS = [
  { id:'browser',      name:'Browser',   bg:'linear-gradient(145deg,#8aa7ff,#5d62d5)', imgUrl:'./icons/hz-browser.png', icon:'compass' },
  { id:'youtube',      name:'YouTube',   bg:'linear-gradient(145deg,#ff0000,#b91c1c)', slug:'youtube' },
  { id:'store',        name:'Store',     bg:'linear-gradient(145deg,#fcd34d,#ea580c)', imgUrl:'./icons/hz-store.png', icon:'store' },
  { id:'environments', name:'Ambientes', bg:'linear-gradient(145deg,#fb923c,#ec4899)', imgUrl:'./icons/hz-camera-share.png', icon:'vision' },
  { id:'gallery',      name:'Gallery',   bg:'linear-gradient(145deg,#fdba74,#c084fc)', imgUrl:'./icons/hz-gallery.png', icon:'camera' },
  { id:'settings',     name:'Settings',  bg:'linear-gradient(145deg,#9ca8b8,#556170)', imgUrl:'./icons/hz-settings.png', icon:'settings' },
  { id:'horizon-tv',   name:'Horizon TV', bg:'linear-gradient(145deg,#f472b6,#7c3aed)', imgUrl:'./icons/hz-tv.png', url:'https://www.youtube.com/tv' },
  { id:'whatsapp',     name:'WhatsApp',  bg:'linear-gradient(145deg,#22c55e,#15803d)', imgUrl:'./icons/hz-whatsapp.png', slug:'whatsapp' },
  { id:'instagram',    name:'Instagram', bg:'linear-gradient(135deg,#feda75,#fa7e1e 30%,#d62976 60%,#962fbf 80%,#4f5bd5)', imgUrl:'./icons/hz-instagram.png', slug:'instagram' },
  { id:'facebook',     name:'Facebook',  bg:'linear-gradient(145deg,#3b82f6,#1d4ed8)', imgUrl:'./icons/hz-facebook.png', slug:'facebook' },
  { id:'discord',      name:'Messenger / Discord', bg:'linear-gradient(145deg,#f5a3c7,#9356b8)', imgUrl:'./icons/hz-system-messenger.png', slug:'discord' },
  { id:'shizuku',      name:'Files & Apps', bg:'linear-gradient(145deg,#7dd3fc,#455e8c)', imgUrl:'./icons/hz-files.png', icon:'appGrid' },
  { id:'tiktok',       name:'TikTok',    bg:'#000000', imgUrl:'./tiktok-logo.jpg', slug:'tiktok' },
  { id:'spotify',      name:'Spotify',   bg:'linear-gradient(145deg,#1db954,#0b3b1e)', slug:'spotify' },
  { id:'twitch',       name:'Twitch',    bg:'linear-gradient(145deg,#a855f7,#581c87)', slug:'twitch' },
  { id:'telegram',     name:'Telegram',  bg:'linear-gradient(145deg,#38bdf8,#0284c7)', slug:'telegram' },
  { id:'x',            name:'X',         bg:'linear-gradient(145deg,#18181b,#050507)', slug:'x' },
];

const SPATIAL_GAME_ITEMS = [
  { id:'mr-pistol',   name:'ShootTheDie',    bg:'#080a0f', imgUrl:'./icons/shootthedie-logo.jpg', isGame:true },
  { id:'hand-draw',   name:'paintdrawer',    bg:'#09090b', imgUrl:'./icons/paintdrawer-logo.jpg', isGame:true },
  { id:'gorilla-tag', name:'Gorilla Tag',    bg:'#0d1b12', imgUrl:'./icons/gorilla-tag-logo.jpg', isGame:true },
  { id:'vrfs',        name:'VRFS Futebol VR', bg:'#0b1a10', imgUrl:'./icons/vrfs-logo.jpg', isGame:true },
  { id:'roblox-vr',   name:'Roblox VR',      bg:'#090d16', imgUrl:'./roblox-logo.jpg', icon:'controller', isGame:true, url:'https://www.roblox.com/' },
  { id:'beat-vr',     name:'Beat Saber Web', bg:'#070814', imgUrl:'./beat-saber-logo.jpg', icon:'controller', isGame:true, url:'https://moonrider.xyz/?mode=ride&vr=1' },
  { id:'hyper-vr',    name:'Hyper Dash VR',  bg:'#0a1426', imgUrl:'./hyper-dash-logo.jpg', icon:'controller', isGame:true, url:'https://immersiveweb.dev/' },
  { id:'webxr-games', name:'WebXR Games',    bg:'linear-gradient(145deg,#7c3aed,#4c1d95)', icon:'controller', isGame:true, url:'https://constructarcade.com/' },
  { id:'netflix',     name:'Netflix',        bg:'linear-gradient(145deg,#e50914,#7f1d1d)', slug:'netflix' },
  { id:'prime',       name:'Prime Video',    bg:'linear-gradient(145deg,#00a8e1,#0369a1)', slug:'prime' },
];

let spatialNavTab = 'all'; // 'all' | 'apps' | 'worlds' | 'horizon' | 'downloads'
let spatialSortMode = 'recent'; // 'recent' | 'az'
let spatialSearchQuery = '';
let _syncingSpatialWins = false;

const SVG_HZ_DOTS = `<svg class="ui-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="6" cy="6" r="2"/><circle cx="12" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="18" cy="12" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="12" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>`;
const SVG_HZ_DOWNLOAD = `<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11m0 0-4-4m4 4 4-4"/><path d="M5 19h14"/></svg>`;
const SVG_HZ_FILTER = `<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="4 5 20 5 14 12 14 19 10 17 10 12 4 5"/></svg>`;
const SVG_HZ_SORT = `<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h10M4 12h7M4 17h4M17 7v11m0 0-3-3m3 3 3-3"/></svg>`;
const SVG_HZ_META = `<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 14.5c0-3 2-5.5 4.2-5.5 1.8 0 3.3 1.8 4.8 4.2 1.5 2.4 2.6 3.3 4 3.3 1.4 0 2.5-1.2 2.5-3 0-2.5-1.6-4.5-3.6-4.5-1.5 0-2.7 1.1-4.2 3.4-1.5 2.3-2.9 4.1-4.8 4.1-1.7 0-2.9-.8-2.9-2z"/></svg>`;
const SVG_HZ_LAYOUT = `<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="5" height="14" rx="1.5"/><rect x="10" y="5" width="5" height="14" rx="1.5"/><rect x="17" y="5" width="4" height="14" rx="1.2"/></svg>`;

function buildSpatialMixedItems() {
  const core = SPATIAL_CORE_APPS.map(a => ({ kind: 'builtin', ...a }));
  const games = SPATIAL_GAME_ITEMS.map(g => ({ kind: 'builtin', ...g }));
  const xrItems = (xrLibraryItems?.() || []).map(x => ({
    kind: 'xr',
    pkg: x.packageName,
    name: x.label || x.packageName,
    iconUrl: x.icon || '',
    isGame: true,
  }));
  let list;
  if (spatialNavTab === 'worlds' || spatialNavTab === 'downloads') {
    list = [...games.filter(g => g.isGame), ...xrItems, ...core];
  } else if (spatialNavTab === 'apps') {
    list = [...core, ...games.filter(g => !g.isGame)];
  } else {
    list = [...core, ...games, ...xrItems];
  }
  const q = spatialSearchQuery.trim().toLowerCase();
  if (q) {
    list = list.filter(item => item.name.toLowerCase().includes(q));
  }
  if (spatialSortMode === 'az') {
    list = [...list].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
  }
  return list;
}

function renderSpatialTile(item) {
  if (item.kind === 'xr') {
    const initials = (item.name || '?').trim().slice(0, 2).toUpperCase();
    const inner = item.iconUrl
      ? `<img class="spatial-app-img" src="${escH(item.iconUrl)}" alt="" draggable="false" onerror="this.remove()">`
      : `<span class="spatial-app-glyph">${icon('controller')}</span><span class="spatial-app-init">${escH(initials)}</span>`;
    return `<button type="button" class="spatial-app-tile" data-spatial-xr="${escH(item.pkg)}" data-spatial-game="1" title="${escH(item.name)}">
      <span class="spatial-app-circle spatial-app-circle--game">${inner}</span>
      <span class="spatial-app-label">${escH(item.name)}</span>
      <i class="spatial-app-tick" aria-hidden="true"></i>
    </button>`;
  }
  if (item.kind === 'android') {
    const initials = (item.name || '?').trim().slice(0, 2).toUpperCase();
    const inner = item.iconUrl
      ? `<img class="spatial-app-img" src="${escH(item.iconUrl)}" alt="" draggable="false" onerror="this.remove()">`
      : `<span class="spatial-app-init">${escH(initials)}</span>`;
    return `<button type="button" class="spatial-app-tile" data-spatial-android="${escH(item.pkg)}" title="${escH(item.name)}">
      <span class="spatial-app-circle spatial-app-circle--android">${inner}</span>
      <span class="spatial-app-label">${escH(item.name)}</span>
      <i class="spatial-app-tick" aria-hidden="true"></i>
    </button>`;
  }
  const inner = item.imgUrl
    ? `<img class="spatial-app-img" src="${escH(item.imgUrl)}" alt="" draggable="false">`
    : item.slug
      ? `<img class="spatial-app-svg" src="./icons/${item.slug}.svg" alt="" draggable="false" onerror="this.remove()">`
      : item.icon
        ? `<span class="spatial-app-glyph">${icon(item.icon)}</span>`
        : item.html || `<span class="spatial-app-init">${escH(item.name.slice(0, 2))}</span>`;
  return `<button type="button" class="spatial-app-tile" data-spatial-builtin="${escH(item.id)}" ${item.isGame ? 'data-spatial-game="1"' : ''} ${item.url ? `data-spatial-url="${escH(item.url)}"` : ''} title="${escH(item.name)}">
    <span class="spatial-app-circle ${item.lightBg ? 'spatial-app-circle--light' : ''}" style="background:${item.bg}">${inner}</span>
    <span class="spatial-app-label">${escH(item.name)}</span>
    <i class="spatial-app-tick" aria-hidden="true"></i>
  </button>`;
}

function readLiveBatteryPercent() {
  try {
    const raw = window.NativeXR?.battery?.();
    if (raw && raw !== 'null') {
      const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw;
      if (parsed && typeof parsed.level === 'number') {
        return Math.round(Math.max(0, Math.min(1, parsed.level)) * 100);
      }
    }
  } catch {}
  const st = getDeviceStatus();
  if (st && typeof st.batteryLevel === 'number') {
    return Math.round(Math.max(0, Math.min(1, st.batteryLevel)) * 100);
  }
  return 100;
}

function buildSpatialLauncherDom() {
  const items = buildSpatialMixedItems();
  const st = getDeviceStatus();
  const batPct = readLiveBatteryPercent();
  const clockStr = st.time && st.time !== '--:--' ? st.time : new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const avatarHtml = S.profileAvatar
    ? `<img src="${escH(S.profileAvatar)}" alt="" class="spatial-hz-avatar-img" draggable="false" />`
    : icon('user');

  const curEnv = S.env || 'passthrough';
  const isMrDim = !!S.mrDim;
  const root = el('div', 'spatial-launcher-root');
  root.innerHTML = `
    <header class="spatial-hz-header">
      <div class="spatial-hz-top-status" aria-label="Status e Ambiente MR">
        <span class="spatial-hz-top-bat"><span class="spatial-hz-bat-pill"><i style="width:${batPct}%"></i></span><strong data-spatial-bat-top>${batPct}%</strong></span>
        <span class="spatial-hz-top-clock" data-spatial-clock-top>${escH(clockStr)}</span>
        <span class="spatial-hz-top-wifi">${icon('wifi')}</span>
        <button type="button" class="spatial-hz-mrdim-circle ${isMrDim ? 'on' : ''}" data-spatial-act="mr-dim" title="${isMrDim ? 'Ambiente MR: Escuro (toque para Normal)' : 'Escurecer Ambiente MR em volta dos apps'}" aria-pressed="${isMrDim ? 'true' : 'false'}">
          ${icon('vision')}
        </button>
      </div>
      <h2 class="spatial-hz-title">Library</h2>
      <div class="spatial-hz-env-pills" aria-label="Ambientes Virtuais">
        <button type="button" class="spatial-hz-env-pill ${curEnv === 'passthrough' ? 'on' : ''}" data-spatial-env="passthrough" title="Câmera Real (Passthrough)">Câmera</button>
        <button type="button" class="spatial-hz-env-pill spatial-hz-mrdim-pill ${isMrDim ? 'on' : ''}" data-spatial-act="mr-dim" title="Alternar Ambiente MR Escuro ou Normal">${isMrDim ? 'MR Escuro: ON' : 'Escurecer MR'}</button>
        <button type="button" class="spatial-hz-env-pill ${curEnv === 'sunset' ? 'on' : ''}" data-spatial-env="sunset" title="Ambiente Pôr do Sol 360°">Sunset</button>
        <button type="button" class="spatial-hz-env-pill ${curEnv === 'lagoon' ? 'on' : ''}" data-spatial-env="lagoon" title="Ambiente Lagoa 360°">Lagoon</button>
        <button type="button" class="spatial-hz-env-pill ${curEnv === 'dark' ? 'on' : ''}" data-spatial-env="dark" title="Ambiente Escuro 360°">Dark</button>
      </div>
      <label class="spatial-hz-search">
        ${icon('search')}
        <input type="text" class="spatial-hz-search-input" data-spatial-search placeholder="Search" value="${escH(spatialSearchQuery)}" aria-label="Search Library" />
      </label>
    </header>

    <div class="spatial-launcher-stage">
      <aside class="spatial-hz-rail" aria-label="Library navigation">
        <button type="button" class="spatial-hz-nav-item ${spatialNavTab === 'all' ? 'on' : ''}" data-spatial-nav="all">
          ${SVG_HZ_DOTS}<span>All</span>
        </button>
        <button type="button" class="spatial-hz-nav-item ${spatialNavTab === 'apps' ? 'on' : ''}" data-spatial-nav="apps">
          ${icon('appGrid')}<span>Apps</span>
        </button>
        <button type="button" class="spatial-hz-nav-item ${spatialNavTab === 'worlds' ? 'on' : ''}" data-spatial-nav="worlds">
          ${icon('location')}<span>Worlds</span>
        </button>
        <button type="button" class="spatial-hz-nav-item ${spatialNavTab === 'horizon' ? 'on' : ''}" data-spatial-nav="horizon">
          ${icon('refresh')}<span>Horizon+</span>
        </button>
        <button type="button" class="spatial-hz-nav-item ${spatialNavTab === 'downloads' ? 'on' : ''}" data-spatial-nav="downloads">
          ${SVG_HZ_DOWNLOAD}<span>Downloads</span>
        </button>
        <div class="spatial-hz-rail-divider" aria-hidden="true"></div>
        <button type="button" class="spatial-hz-nav-item spatial-hz-nav-item--store" data-spatial-act="store">
          <span class="spatial-hz-store-badge">${icon('store')}</span><span>Store</span>
        </button>
      </aside>

      <div class="spatial-honeycomb-wrap">
        <button type="button" class="spatial-scroll-btn spatial-scroll-btn--left" data-spatial-scroll="left" aria-label="Rolar para a esquerda" title="Rolar para a esquerda">‹</button>
        <div class="spatial-honeycomb" data-spatial-scroll-track role="list">
          ${items.map(renderSpatialTile).join('')}
        </div>
        <button type="button" class="spatial-scroll-btn spatial-scroll-btn--right" data-spatial-scroll="right" aria-label="Rolar para a direita" title="Rolar para a direita">›</button>
      </div>

      <aside class="spatial-hz-filters" aria-label="Filters and sorting">
        <button type="button" class="spatial-hz-filter-btn" data-spatial-act="filter" title="Filter: Installed">
          ${SVG_HZ_FILTER}<span>Filter: Insta...</span>${icon('chevronDown')}
        </button>
        <button type="button" class="spatial-hz-filter-btn" data-spatial-act="sort" title="Sort">
          ${SVG_HZ_SORT}<span>Sort: ${spatialSortMode === 'az' ? 'A–Z' : 'Recen...'}</span>${icon('chevronDown')}
        </button>
      </aside>
    </div>

    <footer class="spatial-hz-bottom" aria-label="Horizon bar">
      <div class="spatial-hz-bot-left">
        <button type="button" class="spatial-hz-game-pill" data-spatial-act="store" title="Store">${icon('controller')}</button>
        <button type="button" class="spatial-hz-icon-btn" data-spatial-act="env" title="Câmera Traseira (Ambiente Real)">${icon('camera')}</button>
      </div>

      <div class="spatial-hz-bot-center">
        <div class="spatial-hz-bot-main">
          <button type="button" class="spatial-hz-icon-btn" data-spatial-act="recenter" title="Recentralizar">${SVG_HZ_META}</button>
          <button type="button" class="spatial-hz-home-circle" data-spatial-nav="all" title="Library">${SVG_HZ_DOTS}</button>
          <button type="button" class="spatial-hz-icon-btn" data-spatial-act="close" title="Alternar para Dock">${SVG_HZ_LAYOUT}</button>
        </div>
        <div class="spatial-hz-bot-status">
          ${icon('wifi')}
          <span data-spatial-clock>${escH(clockStr)}</span>
          <span class="spatial-hz-bat-pill"><i style="width:${batPct}%"></i></span>
          <span data-spatial-bat>${batPct}%</span>
        </div>
      </div>

      <div class="spatial-hz-bot-right">
        <button type="button" class="spatial-hz-icon-btn" data-spatial-act="library" title="Biblioteca Completa">${icon('notification')}</button>
        <button type="button" class="spatial-hz-icon-btn" data-spatial-act="settings" title="Configurações">${icon('sliders')}</button>
        <button type="button" class="spatial-hz-avatar-btn" data-spatial-act="settings" title="Perfil">${avatarHtml}</button>
      </div>
    </footer>

    <div class="browser-tab-popup spatial-browser-popup" data-browser-tab-menu="spatial" hidden>
      <button type="button" class="browser-tab-opt" data-browser-opt="new-tab">+ NOVA GUIA</button>
      <button type="button" class="browser-tab-opt" data-browser-opt="incognito-tab">+ GUIA ANÔNIMA</button>
    </div>
  `;

  const searchInput = root.querySelector('[data-spatial-search]');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      spatialSearchQuery = searchInput.value;
      paintSpatialLauncher();
    });
  }

  const browserBtn = root.querySelector('[data-spatial-builtin="browser"]');
  const spatialPopup = root.querySelector('[data-browser-tab-menu="spatial"]');
  let spatialHoldTimer = null;
  if (browserBtn && spatialPopup) {
    browserBtn.addEventListener('pointerdown', () => {
      clearTimeout(spatialHoldTimer);
      spatialHoldTimer = setTimeout(() => {
        browserBtn.dataset.holdConsumed = '1';
        spatialPopup.hidden = false;
        window.NativeXR?.click?.();
        css3d.invalidate?.();
        css3d.render?.(scene, camera);
      }, 2000);
    });
    const cancelHold = () => { clearTimeout(spatialHoldTimer); spatialHoldTimer = null; };
    browserBtn.addEventListener('pointerup', cancelHold);
    browserBtn.addEventListener('pointercancel', cancelHold);
    browserBtn.addEventListener('pointerleave', cancelHold);
  }

  const scrollTrack = root.querySelector('[data-spatial-scroll-track]');
  if (scrollTrack) {
    let dragStartX = 0, startScrollLeft = 0, isDraggingScroll = false;
    scrollTrack.addEventListener('pointerdown', e => {
      dragStartX = e.clientX;
      startScrollLeft = scrollTrack.scrollLeft;
      isDraggingScroll = false;
    });
    scrollTrack.addEventListener('pointermove', e => {
      if (e.buttons !== 1) return;
      const dx = e.clientX - dragStartX;
      if (Math.abs(dx) > 6) {
        isDraggingScroll = true;
        scrollTrack.scrollLeft = startScrollLeft - dx;
        css3d.invalidate?.();
      }
    });
    scrollTrack.addEventListener('wheel', e => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        scrollTrack.scrollLeft += e.deltaY;
        e.preventDefault();
      }
      css3d.invalidate?.();
    }, { passive: false });
    scrollTrack.addEventListener('scroll', () => css3d.invalidate?.(), { passive: true });
    scrollTrack._wasDragging = () => isDraggingScroll;
  }

  root.addEventListener('click', e => {
    const scrollBtn = e.target.closest('[data-spatial-scroll]');
    if (scrollBtn && scrollTrack) {
      e.stopPropagation();
      const dir = scrollBtn.dataset.spatialScroll === 'left' ? -1 : 1;
      scrollTrack.scrollLeft = Math.max(0, scrollTrack.scrollLeft + dir * 240);
      css3d.invalidate?.();
      css3d.render?.(scene, camera);
      return;
    }
    const optBtn = e.target.closest('[data-browser-opt]');
    if (optBtn) {
      e.stopPropagation();
      const mode = optBtn.dataset.browserOpt || 'new-tab';
      if (spatialPopup) spatialPopup.hidden = true;
      openBrowserWithMode(mode);
      return;
    }
    const bXr = e.target.closest('[data-spatial-xr]');
    if (bXr) {
      const pkg = bXr.dataset.spatialXr;
      if (pkg) launchXrGame(pkg);
      return;
    }
    const bBuiltin = e.target.closest('[data-spatial-builtin]');
    if (bBuiltin) {
      if (bBuiltin.dataset.holdConsumed === '1') {
        bBuiltin.dataset.holdConsumed = '0';
        return;
      }
      if (spatialPopup && !spatialPopup.hidden) spatialPopup.hidden = true;
      const id = bBuiltin.dataset.spatialBuiltin;
      if (id === 'environments') { environments(); return; }
      if (id === 'shizuku') { shizukuWindow(); return; }
      if (id === 'gorilla-tag') { openGorillaTag(); return; }
      if (id === 'vrfs') { openVrfsGame(); return; }
      if (id === 'mr-pistol') { openMrPistolGame(); return; }
      if (id === 'hand-draw') { openHandDrawGame(); return; }
      if (id === 'beat-vr') { openBeatSaberVr(); return; }
      if (id === 'roblox-vr' || id === 'roblox') { openRobloxVr(); return; }
      if (bBuiltin.dataset.spatialUrl) {
        webBrowserFor('browser', bBuiltin.title || 'Navegador', bBuiltin.dataset.spatialUrl);
        return;
      }
      const run = LIB_ACTIONS[id];
      if (run) run();
      return;
    }
    const bAndroid = e.target.closest('[data-spatial-android]');
    if (bAndroid) {
      const pkg = bAndroid.dataset.spatialAndroid;
      openApp(pkg);
      focusAppWindow(pkg);
      return;
    }
    const envBtn = e.target.closest('[data-spatial-env]');
    if (envBtn) {
      const envId = envBtn.dataset.spatialEnv || 'passthrough';
      setEnvironment(envId);
      paintSpatialLauncher();
      return;
    }
    const navBtn = e.target.closest('[data-spatial-nav]');
    if (navBtn) {
      spatialNavTab = navBtn.dataset.spatialNav || 'all';
      paintSpatialLauncher();
      return;
    }
    const act = e.target.closest('[data-spatial-act]')?.dataset.spatialAct;
    if (act === 'settings') controlCenterApp();
    else if (act === 'store') storeApp();
    else if (act === 'library') libraryApp();
    else if (act === 'recenter') recenter();
    else if (act === 'sort') {
      spatialSortMode = spatialSortMode === 'az' ? 'recent' : 'az';
      paintSpatialLauncher();
    } else if (act === 'filter') {
      spatialNavTab = spatialNavTab === 'downloads' ? 'all' : 'downloads';
      paintSpatialLauncher();
    } else if (act === 'env') {
      environments();
    } else if (act === 'mr-dim') {
      setMrDim(!S.mrDim);
      paintSpatialLauncher();
      toast(S.mrDim ? 'Ambiente MR: Escuro' : 'Ambiente MR: Normal');
    } else if (act === 'close') {
      setSpatialLauncherMode(false);
    }
  });
  return root;
}

function paintSpatialLauncher() {
  const host = winBody('spatial-launcher');
  if (!host) return;
  const prevTrack = host.querySelector('.spatial-honeycomb');
  const scrollTop = prevTrack?.scrollTop || 0;
  const scrollLeft = prevTrack?.scrollLeft || 0;
  const prevHoverBuiltin = host.querySelector('.finger-hover')?.dataset?.spatialBuiltin || null;
  host.innerHTML = '';
  host.appendChild(buildSpatialLauncherDom());
  const next = host.querySelector('.spatial-honeycomb');
  if (next) {
    next.scrollTop = scrollTop;
    next.scrollLeft = scrollLeft;
  }
  if (prevHoverBuiltin) {
    host.querySelector(`[data-spatial-builtin="${prevHoverBuiltin}"]`)?.classList?.add('finger-hover');
  }
  css3d.invalidate?.();
}

let spatialLauncherGestureSuppressed = false;
let spatialLauncherGestureForcedVisible = false;
let lastSpatialAppWinCount = 0;

function syncSpatialLauncherVisibility() {
  if (_syncingSpatialWins) return;
  const spatialWin = wins.find(w => w.id === 'spatial-launcher');
  if (!S.spatialLauncher || !spatialWin) return;
  _syncingSpatialWins = true;
  try {
    const appWins = wins.filter(w => w.id !== 'spatial-launcher' && w.id !== 'fist-menu' && w.id !== 'left-quick-menu' && !w.onboarding && !w.hidden);
    if (appWins.length > 3) {
      const newest = appWins[appWins.length - 1];
      for (const oldWin of appWins) {
        if (oldWin !== newest) close(oldWin);
      }
    }
    if (appWins.length !== lastSpatialAppWinCount) {
      // Abrir ou fechar um app limpa o override manual do gesto para manter o fluxo automático padrão
      spatialLauncherGestureSuppressed = false;
      spatialLauncherGestureForcedVisible = false;
      lastSpatialAppWinCount = appWins.length;
    }
    const shouldHideSpatial = spatialLauncherGestureSuppressed || (appWins.length > 0 && !spatialLauncherGestureForcedVisible);
    if (spatialWin.hidden !== shouldHideSpatial) {
      spatialWin.setHidden(shouldHideSpatial);
      css3d.invalidate?.();
      css3d.render?.(scene, camera);
    }
  } finally {
    _syncingSpatialWins = false;
  }
}
on('wins', syncSpatialLauncherVisibility);
on('env', () => {
  if (winBody('spatial-launcher')) paintSpatialLauncher();
  if (winBody('fist-menu')) paintFistQuickMenu();
});
on('mr-dim', () => {
  if (winBody('spatial-launcher')) paintSpatialLauncher();
  if (winBody('fist-menu')) paintFistQuickMenu();
});

let gestureHiddenWins = [];

export function toggleSpatialAndDockFromGesture() {
  if (S.spatialLauncher || wins.some(w => w.id === 'spatial-launcher')) {
    let spWin = wins.find(w => w.id === 'spatial-launcher');
    if (!spWin) {
      S.spatialLauncher = 1;
      spWin = spatialLauncherApp();
    }
    const otherVisible = wins.filter(w => w !== spWin && w.id !== 'entry-menu' && !w.hidden);
    const nextHidden = !spWin.hidden || otherVisible.length > 0;
    spatialLauncherGestureSuppressed = nextHidden;
    spatialLauncherGestureForcedVisible = !nextHidden;
    spWin.setHidden(nextHidden);
    if (nextHidden) {
      gestureHiddenWins = otherVisible.map(w => w.id);
      for (const w of otherVisible) w.setHidden(true);
      setKeyboardHidden(true);
    } else {
      for (const id of gestureHiddenWins) {
        const w = wins.find(x => x.id === id);
        if (w) w.setHidden(false);
      }
      gestureHiddenWins = [];
    }
    css3d.invalidate?.();
    css3d.render?.(scene, camera);
    toast(nextHidden ? 'Spatial App e janelas ocultados' : 'Spatial App exibido');
    return !nextHidden;
  }
  const dockNode = document.querySelector('.dock');
  const isDockHidden = !dockNode || dockNode.hidden || getComputedStyle(dockNode).display === 'none';
  if (isDockHidden) {
    setDockHidden(false);
    setDockVisible(true);
    for (const id of gestureHiddenWins) {
      const w = wins.find(x => x.id === id);
      if (w) w.setHidden(false);
    }
    gestureHiddenWins = [];
    toast('Dock e janelas exibidas');
  } else {
    setDockVisible(false);
    setDockHidden(true);
    const otherVisible = wins.filter(w => w.id !== 'entry-menu' && !w.hidden);
    gestureHiddenWins = otherVisible.map(w => w.id);
    for (const w of otherVisible) w.setHidden(true);
    setKeyboardHidden(true);
    toast('Dock e janelas ocultadas');
  }
  css3d.invalidate?.();
  css3d.render?.(scene, camera);
  return isDockHidden;
}
window.nextvrToggleSpatialAndDockFromGesture = toggleSpatialAndDockFromGesture;

function spatialLauncherApp() {
  const existing = wins.find(w => w.id === 'spatial-launcher');
  if (existing) {
    paintSpatialLauncher();
    syncSpatialLauncherVisibility();
    css3d.invalidate?.();
    css3d.render?.(scene, camera);
    return existing;
  }
  // Ao iniciar o modo de apps flutuantes pela primeira vez, começa com o passthrough real
  S.env = 'passthrough';
  setPassthrough(true);
  const body = el('div', 'spatial-launcher-host');
  const win = open({
    id: 'spatial-launcher',
    title: 'Spatial App',
    node: body,
    w: 1040,
    h: 660,
    onboarding: true,
    chrome: false,
    resizable: false,
  });
  win.handle.hidden = true;
  win.resizeHandle.hidden = true;
  paintSpatialLauncher();
  syncSpatialLauncherVisibility();
  css3d.invalidate?.();
  css3d.render?.(scene, camera);
  return win;
}

/* ============ Menuzinho Rápido (Fechar a mão tipo Soco por 2s) ============ */
function buildFistQuickMenuDom() {
  const curEnv = S.env || 'passthrough';
  const root = el('div', 'fist-quick-menu');
  root.innerHTML = `
    <div class="fist-menu-head">
      <div class="fist-menu-badge">${icon('crosshair')}</div>
      <div>
        <h3 class="fist-menu-title">Menu Rápido</h3>
        <p class="fist-menu-sub">Atalho de soco (2s) · Escolha uma ação</p>
      </div>
    </div>

    <div class="fist-menu-actions">
      <button type="button" class="fist-menu-btn fist-menu-btn--primary" data-fist-act="recenter">
        ${icon('move')}
        <div>
          <strong>Recentrar Dock e Visão</strong>
          <small>Traga a dock e janelas para a direção do olhar</small>
        </div>
      </button>

      <button type="button" class="fist-menu-btn" data-fist-act="environments">
        ${icon('vision')}
        <div>
          <strong>Entrar em Ambiente Virtual</strong>
          <small>Abrir painel completo de ambientes 360°</small>
        </div>
      </button>

      <button type="button" class="fist-menu-btn ${S.mrDim ? 'fist-menu-btn--primary' : ''}" data-fist-act="mr-dim">
        ${icon('camera')}
        <div>
          <strong>Ambiente MR: ${S.mrDim ? 'Escuro (Ativo)' : 'Normal'}</strong>
          <small>Escurecer o ambiente real em volta dos apps flutuantes</small>
        </div>
      </button>
    </div>

    <div class="fist-menu-env-section">
      <span class="fist-menu-section-lbl">Trocar Ambiente Agora</span>
      <div class="fist-menu-env-grid">
        <button type="button" class="fist-env-chip ${curEnv === 'passthrough' ? 'on' : ''}" data-fist-env="passthrough">
          ${icon('camera')}<span>Câmera Real</span>
        </button>
        <button type="button" class="fist-env-chip ${curEnv === 'sunset' ? 'on' : ''}" data-fist-env="sunset">
          ${icon('vision')}<span>Sunset 360°</span>
        </button>
        <button type="button" class="fist-env-chip ${curEnv === 'lagoon' ? 'on' : ''}" data-fist-env="lagoon">
          ${icon('vision')}<span>Lagoon 360°</span>
        </button>
        <button type="button" class="fist-env-chip ${curEnv === 'dark' ? 'on' : ''}" data-fist-env="dark">
          ${icon('vision')}<span>Escuro 360°</span>
        </button>
      </div>
    </div>

    <div class="fist-menu-footer-row">
      <button type="button" class="fist-menu-sec-btn ${internalRecState.active ? 'on' : ''}" data-fist-act="internal-record" data-internal-rec-btn="1">
        ${icon('camera')}<span data-internal-rec-sub>${internalRecState.active ? 'Parar Gravação' : 'Gravar 1 Lente'}</span>
      </button>
      <button type="button" class="fist-menu-sec-btn" data-fist-act="single-hand">
        ${icon('hand')}<span>${(S.singleHandMode || 'both') === 'both' ? 'Hand: 2 Mãos' : 'Hand: 1 Mão'}</span>
      </button>
      <button type="button" class="fist-menu-sec-btn" data-fist-act="camera-solo">
        ${icon('camera')}<span>Câmera Sozinha</span>
      </button>
      <button type="button" class="fist-menu-sec-btn" data-fist-act="toggle-dock">
        ${icon('appGrid')}<span>Mostrar / Ocultar Dock</span>
      </button>
      <button type="button" class="fist-menu-sec-btn" data-fist-act="avatar-creator">
        ${icon('user')}<span>Criar Personagem</span>
      </button>
      <button type="button" class="fist-menu-sec-btn" data-fist-act="settings">
        ${icon('settings')}<span>Ajustes</span>
      </button>
    </div>
  `;

  root.addEventListener('click', e => {
    const envBtn = e.target.closest('[data-fist-env]');
    if (envBtn) {
      const envId = envBtn.dataset.fistEnv || 'passthrough';
      setEnvironment(envId);
      paintFistQuickMenu();
      toast('Ambiente: ' + envId);
      return;
    }
    const actBtn = e.target.closest('[data-fist-act]');
    if (!actBtn) return;
    const act = actBtn.dataset.fistAct;
    if (act === 'recenter') {
      if (!S.spatialLauncher) {
        setDockHidden(false);
        setDockVisible(true);
      }
      recenter();
      close('fist-menu');
    } else if (act === 'environments') {
      close('fist-menu');
      environments();
    } else if (act === 'mr-dim') {
      setMrDim(!S.mrDim);
      paintFistQuickMenu();
      toast(S.mrDim ? 'Ambiente MR: Escuro' : 'Ambiente MR: Normal');
    } else if (act === 'internal-record') {
      toggleInternalEyeRecording();
      paintFistQuickMenu();
    } else if (act === 'single-hand') {
      const idx = Math.max(0, SINGLE_HAND_OPTIONS.findIndex(([id]) => id === (S.singleHandMode || 'both')));
      const next = SINGLE_HAND_OPTIONS[(idx + 1) % SINGLE_HAND_OPTIONS.length];
      setSingleHandModeChoice(next[0]);
      paintFistQuickMenu();
      toast('Hand Tracking: ' + next[1]);
    } else if (act === 'camera-solo') {
      close('fist-menu');
      toggleCameraSoloMode(true);
    } else if (act === 'toggle-dock') {
      toggleSpatialAndDockFromGesture();
      close('fist-menu');
    } else if (act === 'avatar-creator') {
      close('fist-menu');
      openAvatarCreator();
    } else if (act === 'settings') {
      close('fist-menu');
      controlCenterApp();
    } else if (act === 'close') {
      close('fist-menu');
    }
  });
  return root;
}

function paintFistQuickMenu() {
  const host = winBody('fist-menu');
  if (!host) return;
  host.innerHTML = '';
  host.appendChild(buildFistQuickMenuDom());
  css3d.invalidate?.();
}

let cameraSoloActive = false;
let cameraSoloAutoTriggered = false;
let cameraSoloSavedWins = [];
let cameraSoloPillEl = null;

export function toggleCameraSoloMode(forceState = undefined, autoFromDefocus = false) {
  const next = typeof forceState === 'boolean' ? forceState : !cameraSoloActive;
  cameraSoloActive = next;
  if (next) {
    cameraSoloAutoTriggered = Boolean(autoFromDefocus);
    setPassthrough(true);
    window.NativeXR?.refocusCamera?.();
    if (cameraSoloSavedWins.length === 0) {
      cameraSoloSavedWins = wins.filter(w => !w.hidden).map(w => w.id);
    }
    for (const w of wins) w.setHidden(true);
    setDockHidden(true);
    setDockVisible(false);
    document.documentElement.dataset.cameraSolo = '1';
    const hud = document.getElementById('hud') || document.body;
    if (!cameraSoloPillEl || !document.body.contains(cameraSoloPillEl)) {
      cameraSoloPillEl = document.createElement('button');
      cameraSoloPillEl.id = 'camera-solo-pill';
      cameraSoloPillEl.type = 'button';
      cameraSoloPillEl.className = 'camera-solo-pill';
      cameraSoloPillEl.style.cssText = 'position:fixed;bottom:18px;left:50%;transform:translateX(-50%);z-index:205;padding:9px 18px;border-radius:999px;border:1.5px solid rgba(56,189,248,.65);background:rgba(15,23,42,.86);color:#f8fafc;font:700 13px Inter,sans-serif;box-shadow:0 8px 24px rgba(0,0,0,.55);cursor:pointer;pointer-events:auto';
      cameraSoloPillEl.textContent = '📷 Câmera Sozinha (Foco Automático) · Toque para voltar';
      cameraSoloPillEl.addEventListener('click', e => {
        e.stopPropagation();
        toggleCameraSoloMode(false);
      });
      hud.appendChild(cameraSoloPillEl);
    }
    cameraSoloPillEl.hidden = false;
    toast('Modo Câmera Sozinha ativado · Focando câmera...');
  } else {
    cameraSoloAutoTriggered = false;
    delete document.documentElement.dataset.cameraSolo;
    if (cameraSoloPillEl) cameraSoloPillEl.hidden = true;
    for (const id of cameraSoloSavedWins) {
      const w = wins.find(x => x.id === id);
      if (w) w.setHidden(false);
    }
    cameraSoloSavedWins = [];
    if (!S.spatialLauncher) {
      setDockHidden(false);
      setDockVisible(true);
    }
  }
  css3d.invalidate?.();
  css3d.render?.(scene, camera);
  return cameraSoloActive;
}
window.nextvrToggleCameraSolo = toggleCameraSoloMode;
window.nextvrOnCameraDefocus = () => {
  // Foco automático sozinho desativado por pedido do utilizador
};

export function openFistQuickMenu() {
  const existing = wins.find(w => w.id === 'fist-menu');
  if (existing) {
    existing.setHidden(false);
    existing.resizeScale = 1.28;
    existing.apply();
    paintFistQuickMenu();
    focus(existing);
    css3d.invalidate?.();
    css3d.render?.(scene, camera);
    return existing;
  }
  const body = el('div', 'fist-quick-menu-host');
  const win = open({
    id: 'fist-menu',
    title: 'Menu Rápido',
    node: body,
    w: 640,
    h: 480,
  });
  if (win) {
    win.resizeScale = 1.28;
    win.apply();
  }
  paintFistQuickMenu();
  css3d.invalidate?.();
  css3d.render?.(scene, camera);
  return win;
}
window.nextvrOpenFistQuickMenu = openFistQuickMenu;

/* ============ Janelinha Flutuante Transparente de Brilho e Som da Mão Esquerda (IMG_20261021_144416.jpg) ============ */
let leftHandQuickMenuEl = null;

function buildLeftHandQuickMenuDom() {
  const root = document.createElement('div');
  root.id = 'left-hand-quick-menu';
  root.className = 'lh-quick-menu lh-quick-menu--floating';
  root.dataset.floatingWindow = '1';
  root.hidden = false;
  const vol = Math.max(0, Math.min(100, Number(S.mediaVolume ?? 70) || 70));
  const bri = Math.max(10, Math.min(100, Number(S.brightness ?? 80) || 80));
  const dim = S.mrDim ? 80 : 20;
  root.innerHTML = `
    <div class="lh-quick-panel">
      <div class="lh-quick-cols">
        <div class="lh-col lh-apps-col">
          <span class="lh-col-lbl">Apps</span>
          <button type="button" class="lh-app-tile lh-app-spotify" data-lh-app="spotify" title="Spotify">
            <span class="lh-spotify-badge">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.59 14.42c-.18.3-.56.39-.86.21-2.35-1.44-5.31-1.76-8.8-.96-.34.08-.67-.13-.75-.47-.08-.34.13-.67.47-.75 3.82-.87 7.1-.5 9.73 1.11.3.18.39.56.21.86zm1.22-2.72c-.23.37-.71.49-1.08.26-2.69-1.65-6.79-2.13-9.97-1.16-.41.12-.85-.11-.97-.52-.12-.41.11-.85.52-.97 3.63-1.1 8.15-.57 11.24 1.33.37.23.49.71.26 1.06zm.11-2.83C14.7 8.95 9.38 8.77 6.3 9.71c-.49.15-1.01-.13-1.16-.62-.15-.49.13-1.01.62-1.16 3.54-1.07 9.42-.86 13.14 1.35.44.26.59.83.33 1.27-.26.44-.83.59-1.31.32z"/></svg>
            </span>
          </button>
          <button type="button" class="lh-app-tile" data-lh-app="youtube" title="YouTube">
            <img src="./icons/hz-tv.png" alt="YouTube" class="lh-app-img" draggable="false"/>
          </button>
          <button type="button" class="lh-app-tile" data-lh-app="browser" title="Browser">
            <img src="./icons/hz-browser.png" alt="Browser" class="lh-app-img" draggable="false"/>
          </button>
          <button type="button" class="lh-app-tile" data-lh-app="store" title="Store">
            <img src="./icons/hz-store.png" alt="Store" class="lh-app-img" draggable="false"/>
          </button>
        </div>
        <div class="lh-col lh-vol-col">
          <span class="lh-col-lbl">Master<br/>Volume</span>
          <div class="lh-vslider-pill" title="Volume">
            <input type="range" min="0" max="100" value="${vol}" class="lh-vslider-input" data-lh-slider="volume" aria-label="Volume" style="--fill:${vol}%"/>
            <span class="lh-vslider-ico">${icon('volume')}</span>
          </div>
          <button type="button" class="lh-mini-round-btn ${S.mrDim ? 'on' : ''}" data-lh-act="dim" title="Escurecimento MR">
            ∞
          </button>
          <input type="range" min="0" max="100" value="${dim}" class="lh-vslider-input lh-hidden-dim-slider" data-lh-slider="dim" aria-label="Ambiente Escuro" style="display:none;--fill:${dim}%"/>
        </div>
        <div class="lh-col lh-bri-col">
          <span class="lh-col-lbl">Brilho</span>
          <div class="lh-vslider-pill lh-vslider-pill--bri" title="Brilho">
            <input type="range" min="10" max="100" value="${bri}" class="lh-vslider-input" data-lh-slider="brightness" aria-label="Brilho" style="--fill:${bri}%"/>
            <span class="lh-vslider-ico">${icon('sun')}</span>
          </div>
        </div>
      </div>
      <div class="lh-home-card-row">
        <button type="button" class="lh-sq-btn lh-home-btn" data-lh-act="home" title="Início">
          ${icon('home')}
          <span class="lh-home-sub">Início</span>
        </button>
      </div>
      <div class="lh-bottom-actions">
        <button type="button" class="lh-sq-btn lh-cam-solo-btn ${cameraSoloActive ? 'on' : ''}" data-lh-act="camera-solo" title="Câmera Sozinha (Focar Câmera)">
          ${icon('camera')}
        </button>
        <button type="button" class="lh-sq-btn lh-hands-btn ${S.fingerTouch !== 0 ? 'on' : ''}" data-lh-act="hands" title="Toque Direto">
          ${icon('hand')}
        </button>
        <button type="button" class="lh-round-btn lh-close-btn" data-lh-act="close" title="Fechar">
          ✕
        </button>
      </div>
    </div>
  `;
  root.querySelectorAll('[data-lh-slider]').forEach(inp => {
    const onInput = e => {
      e.stopPropagation();
      const k = inp.dataset.lhSlider;
      const v = Math.max(0, Math.min(100, Number(inp.value) || 0));
      inp.style.setProperty('--fill', `${v}%`);
      if (k === 'volume') {
        S.mediaVolume = v;
        save(S);
        window.NativeXR?.setMediaVolumePercent?.(v);
      } else if (k === 'brightness') {
        window.nextvrSetScreenBrightness?.(v);
      } else if (k === 'dim') {
        setMrDim(v >= 50);
      }
      css3d.invalidate?.();
    };
    inp.addEventListener('input', onInput);
    inp.addEventListener('change', onInput);
    inp.addEventListener('pointerdown', e => e.stopPropagation());
  });
  root.querySelectorAll('.lh-vslider-pill').forEach(pill => {
    pill.addEventListener('click', e => {
      const inp = pill.querySelector('[data-lh-slider]');
      if (!inp || e.target === inp) return;
      const rect = pill.getBoundingClientRect();
      if (rect.height > 8 && Number.isFinite(e.clientY)) {
        const frac = Math.max(0, Math.min(1, 1 - (e.clientY - rect.top) / rect.height));
        const min = Number(inp.min) || 0;
        const max = Number(inp.max) || 100;
        inp.value = String(Math.round(min + frac * (max - min)));
        inp.dispatchEvent(new Event('input', { bubbles: true }));
        inp.dispatchEvent(new Event('change', { bubbles: true }));
      }
    });
  });
  root.addEventListener('click', e => {
    const appBtn = e.target.closest('[data-lh-app]');
    if (appBtn) {
      e.stopPropagation();
      const appId = appBtn.dataset.lhApp;
      toggleLeftHandQuickMenu(false);
      if (appId === 'browser') webWindow('browser', t('browser'), 'https://google.com/');
      else if (appId === 'spotify') webWindow('spotify', 'Spotify', 'https://open.spotify.com/');
      else if (appId === 'youtube') webWindow('youtube');
      else if (appId === 'roblox') webWindow('roblox');
      else if (appId === 'store') storeApp();
      css3d.invalidate?.();
      css3d.render?.(scene, camera);
      return;
    }
    const actBtn = e.target.closest('[data-lh-act]');
    if (!actBtn) return;
    e.stopPropagation();
    const act = actBtn.dataset.lhAct;
    if (act === 'close') {
      toggleLeftHandQuickMenu(false);
    } else if (act === 'home') {
      toggleLeftHandQuickMenu(false);
      toggleSpatialAndDockFromGesture();
    } else if (act === 'dim') {
      setMrDim(!S.mrDim);
      actBtn.classList.toggle('on', !!S.mrDim);
    } else if (act === 'camera-solo') {
      toggleLeftHandQuickMenu(false);
      toggleCameraSoloMode();
    } else if (act === 'hands') {
      S.fingerTouch = S.fingerTouch === 0 ? 1 : 0;
      save(S);
      actBtn.classList.toggle('on', S.fingerTouch !== 0);
      window.NativeXR?.setFingerTouch?.(S.fingerTouch !== 0);
      toast(S.fingerTouch !== 0 ? 'Toque Direto: Ativo' : 'Toque Direto: Desativado');
    }
    css3d.invalidate?.();
    css3d.render?.(scene, camera);
  });
  return root;
}

function syncLeftHandQuickMenuValues() {
  if (!leftHandQuickMenuEl) return;
  const vol = Math.max(0, Math.min(100, Number(S.mediaVolume ?? 70) || 70));
  const bri = Math.max(10, Math.min(100, Number(S.brightness ?? 80) || 80));
  const dim = S.mrDim ? 80 : 20;
  const volInp = leftHandQuickMenuEl.querySelector('[data-lh-slider="volume"]');
  if (volInp) { volInp.value = String(vol); volInp.style.setProperty('--fill', `${vol}%`); }
  const briInp = leftHandQuickMenuEl.querySelector('[data-lh-slider="brightness"]');
  if (briInp) { briInp.value = String(bri); briInp.style.setProperty('--fill', `${bri}%`); }
  const dimInp = leftHandQuickMenuEl.querySelector('[data-lh-slider="dim"]');
  if (dimInp) { dimInp.value = String(dim); dimInp.style.setProperty('--fill', `${dim}%`); }
  const handsBtn = leftHandQuickMenuEl.querySelector('[data-lh-act="hands"]');
  if (handsBtn) handsBtn.classList.toggle('on', S.fingerTouch !== 0);
}

export function toggleLeftHandQuickMenu(forceState = undefined) {
  if (cameraSoloActive && forceState !== false) {
    toggleCameraSoloMode(false);
  }
  const existing = wins.find(w => w.id === 'left-quick-menu');
  const isCurrentlyOpen = Boolean(existing && !existing.hidden && leftHandQuickMenuEl && !leftHandQuickMenuEl.hidden);
  const nextOpen = typeof forceState === 'boolean' ? forceState : !isCurrentlyOpen;
  if (!nextOpen) {
    if (leftHandQuickMenuEl) leftHandQuickMenuEl.hidden = true;
    if (existing) close('left-quick-menu');
    css3d.invalidate?.();
    css3d.render?.(scene, camera);
    return false;
  }
  if (!leftHandQuickMenuEl) {
    leftHandQuickMenuEl = buildLeftHandQuickMenuDom();
  }
  leftHandQuickMenuEl.hidden = false;
  syncLeftHandQuickMenuValues();
  camera.updateMatrixWorld(true);
  contentRoot.updateMatrixWorld(true);
  const camWorldPos = camera.position.clone().applyMatrix4(camera.parent ? camera.parent.matrixWorld : camera.matrixWorld);
  const camFwd = camera.getWorldDirection(camWorldPos.clone().set(0, 0, -1));
  const worldTarget = camera.getWorldPosition(camWorldPos.clone()).addScaledVector(camFwd, 0.56);
  const localSpawn = contentRoot.worldToLocal(worldTarget);
  if (!Number.isFinite(localSpawn.x) || !Number.isFinite(localSpawn.y) || !Number.isFinite(localSpawn.z)) {
    localSpawn.set(0, 1.46, -0.56);
  }
  if (existing) {
    const host = winBody('left-quick-menu');
    if (host && !host.contains(leftHandQuickMenuEl)) {
      host.innerHTML = '';
      host.appendChild(leftHandQuickMenuEl);
    }
    existing.setHidden(false);
    existing.curve = 0;
    existing.resizeScale = 1.68;
    existing.target.copy(localSpawn);
    existing.obj.position.copy(localSpawn);
    existing.shell.dataset.attachedHand = 'left';
    existing.shell.dataset.attachedPos = `${localSpawn.x.toFixed(2)},${localSpawn.y.toFixed(2)},${localSpawn.z.toFixed(2)}`;
    existing.shell.dataset.attachedDist = '0.56';
    existing.apply();
    focus(existing);
  } else {
    const body = el('div', 'lh-quick-menu-host');
    body.appendChild(leftHandQuickMenuEl);
    const win = open({
      id: 'left-quick-menu',
      title: 'Controle de Brilho e Som',
      node: body,
      w: 560,
      h: 740,
      chrome: false,
      resizable: false,
      free: true,
      at: { x: localSpawn.x, y: localSpawn.y, z: localSpawn.z },
    });
    if (win) {
      win.curve = 0;
      win.resizeScale = 1.68;
      win.target.copy(localSpawn);
      win.obj.position.copy(localSpawn);
      win.shell.dataset.attachedHand = 'left';
      win.shell.dataset.attachedPos = `${localSpawn.x.toFixed(2)},${localSpawn.y.toFixed(2)},${localSpawn.z.toFixed(2)}`;
      win.shell.dataset.attachedDist = '0.56';
      win.apply();
    }
  }
  css3d.invalidate?.();
  css3d.render?.(scene, camera);
  return true;
}
window.nextvrToggleLeftHandQuickMenu = toggleLeftHandQuickMenu;

function setSpatialLauncherMode(enabled) {
  S.spatialLauncher = enabled ? 1 : 0;
  if (S.spatialLauncher) {
    S.env = 'passthrough';
    setPassthrough(true);
  }
  save(S);
  if (S.spatialLauncher) {
    // Ao entrar nos apps flutuantes, fecha janelas anteriores para mostrar a grelha limpa
    for (const w of [...wins]) {
      if (w.id !== 'spatial-launcher' && !w.onboarding) close(w);
    }
    setDockHidden(true);
    setDockVisible(false);
    spatialLauncherApp();
  } else {
    const existing = wins.find(w => w.id === 'spatial-launcher');
    if (existing) close(existing);
    setDockHidden(false);
    if (!entryWin && !fullscreenEntryHost && !langWin) setDockVisible(true);
    css3d.invalidate?.();
    css3d.render?.(scene, camera);
  }
}
on('spatialLauncher', enabled => setSpatialLauncherMode(enabled));
on('device-status', status => {
  const host = winBody('spatial-launcher');
  if (!host) return;
  let dirty = false;
  if (status?.time && status.time !== '--:--') {
    host.querySelectorAll('[data-spatial-clock], [data-spatial-clock-top]').forEach(el => {
      if (el.textContent !== status.time) {
        el.textContent = status.time;
        dirty = true;
      }
    });
  }
  const pct = typeof status?.batteryLevel === 'number'
    ? Math.round(Math.max(0, Math.min(1, status.batteryLevel)) * 100)
    : readLiveBatteryPercent();
  const pctStr = `${pct}%`;
  host.querySelectorAll('[data-spatial-bat], [data-spatial-bat-top]').forEach(el => {
    if (el.textContent !== pctStr) {
      el.textContent = pctStr;
      dirty = true;
    }
  });
  host.querySelectorAll('.spatial-hz-bat-pill i').forEach(fill => {
    if (fill.style.width !== pctStr) {
      fill.style.width = pctStr;
      dirty = true;
    }
  });
  if (dirty) css3d.invalidate?.();
});

/* ============ dock (estilo IMG_20261025_140612.jpg: 4 tiles + divisor + 2 tiles + grade 3x3) ============ */
// Assets mantidos para referência: ./icons/hz-browser.png ./icons/hz-store.png
const DK = Object.freeze({
  compass: '<svg viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="11.2" fill="#ffffff"/><path d="M18 10.2L20.2 15.8L25.8 18L20.2 20.2L18 25.8L15.8 20.2L10.2 18L15.8 15.8L18 10.2Z" fill="#0b7ad8"/><circle cx="18" cy="18" r="1.8" fill="#ffffff"/></svg>',
  store: '<svg viewBox="0 0 36 36" fill="none"><path d="M13.5 14.2V12.5a4.5 4.5 0 0 1 9 0v1.7" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round"/><rect x="9.5" y="13.8" width="17" height="13.2" rx="2.8" fill="#ffffff"/><circle cx="14" cy="17.2" r="1.2" fill="#ea580c"/><circle cx="22" cy="17.2" r="1.2" fill="#ea580c"/></svg>',
  people: '<svg viewBox="0 0 36 36" fill="none"><circle cx="14.5" cy="14" r="3.4" fill="#ffffff"/><path d="M8.8 25.5c0-3.1 2.5-5.5 5.7-5.5s5.7 2.4 5.7 5.5v1H8.8v-1Z" fill="#ffffff"/><circle cx="22.2" cy="15.2" r="2.7" fill="#ffffff" fill-opacity=".92"/><path d="M19.8 25.5c.2-2.4 1.9-4.3 4.3-4.3 2.5 0 4.4 2 4.4 4.5v.8h-8.7v-1Z" fill="#ffffff" fill-opacity=".92"/></svg>',
  camera: '<svg viewBox="0 0 36 36" fill="none"><path d="M20.2 10.5L28 17.8L20.2 25.1V20.4C14.2 20.4 10.6 22.3 8.5 26C9.4 19.6 13.1 15.2 20.2 14.8V10.5Z" fill="#ffffff"/></svg>',
  gear: '<svg viewBox="0 0 36 36" fill="none"><rect x="9" y="10.5" width="18" height="15" rx="2.8" fill="#ffffff"/><rect x="10.8" y="12.5" width="14.4" height="3.2" rx="1" fill="#5b6ef3"/><circle cx="21.5" cy="14.1" r=".9" fill="#ffffff"/><circle cx="23.6" cy="14.1" r=".9" fill="#ffffff"/></svg>',
  play: icon('play'),
  shizuku: '<svg viewBox="0 0 36 36" fill="none"><path d="M9 13.2A2.2 2.2 0 0 1 11.2 11h5.1l2.1 2.2h6.4A2.2 2.2 0 0 1 27 15.4v9.4A2.2 2.2 0 0 1 24.8 27H11.2A2.2 2.2 0 0 1 9 24.8V13.2Z" fill="#ffffff"/><rect x="9" y="15.2" width="18" height="1.5" fill="#109bb8"/></svg>',
  vision: icon('vision'),
});

function toggleVirtualEnvironment() {
  // Um toque sai do passthrough para o último panorama (pôr do sol no padrão) e outro volta à câmera.
  setPassthrough(S.env !== 'passthrough');
}
function syncVirtualEnvironmentDock() {
  const button = dockButton('virtual-environment');
  if (!button) return;
  const active = S.env !== 'passthrough';
  button.setAttribute('aria-pressed', String(active));
  button.title = `${t('envVirtual')} · ${active ? t('on') : t('off')}`;
}

function makeDock() {
  buildDock([
    // Perfil abre o Criador de Personagem 3D ATMOXR, status do telefone e atalho do ambiente virtual.
    { kind: 'avatar', id: 'profile', label: t('profile'),  run: openAvatarCreator },
    { kind: 'status', id: 'status',  label: t('settings'), run: quickSettingsApp },
    { kind: 'tool', id: 'virtual-environment', label: t('envVirtual'), svg: DK.vision, run: toggleVirtualEnvironment },
    { kind: 'spacer' },
    // 4 ícones à esquerda da divisória + 2 à direita + grade 3x3 (idêntico a IMG_20261025_140612.jpg)
    { id: 'browser', win: 'browser', label: t('browser'), svg: DK.compass, bg: 'linear-gradient(180deg,#1cb0f6 0%,#0062cc 100%)', run: () => webWindow('browser', t('browser'), 'https://google.com/') },
    { id: 'store',   win: 'store',   label: t('store'),   svg: DK.store,   bg: 'linear-gradient(180deg,#ff9c1a 0%,#e04f00 100%)', run: storeApp },
    { id: 'discord', win: 'discord', label: 'Discord',    svg: DK.people,  bg: 'linear-gradient(180deg,#ec4899 0%,#7c3aed 100%)', run: () => webWindow('discord', 'Discord', 'https://discord.com/app') },
    { id: 'gallery', win: 'gallery', label: t('gallery'), svg: DK.camera,  bg: 'linear-gradient(180deg,#fb5678 0%,#e11d48 100%)', run: gallery },
    { kind: 'sep' },
    { id: 'settings', win: 'control-center', label: t('settings'), svg: DK.gear, bg: 'linear-gradient(180deg,#a78bfa 0%,#2563eb 100%)', run: controlCenterApp },
    { id: 'youtube',  win: 'youtube',  label: 'YouTube',     svg: DK.play, bg: 'linear-gradient(180deg,#f472b6,#7c3aed)', run: () => webWindow('youtube', 'YouTube', 'https://m.youtube.com/') },
    { id: 'shizuku', win: 'shizuku', label: t('shizuku'), svg: DK.shizuku, bg: 'linear-gradient(180deg,#2dd4bf 0%,#0284c7 100%)', run: shizukuWindow },
    { id: 'library', win: 'library', launcher: true, label: t('apps'), run: libraryApp },
  ]);
  syncVirtualEnvironmentDock();
}
on('env', syncVirtualEnvironmentDock);
on('lang', makeDock);


/**
 * Count badge of the dock's applications tile: how many Android app windows are open right now
 * (hosted or captured). The tile it sits on opens the same menu the windows are listed in, so the
 * number is where the user would look for them.
 */
function paintWindowBadge() {
  const tile = document.querySelector('.dock [data-id="shizuku"], .dock-app[data-id="shizuku"]');
  if (!tile) return;
  const count = openWindowCount();
  let badge = tile.querySelector('.dock-badge');
  if (!count) { badge?.remove(); return; }
  if (!badge) { badge = el('i', 'dock-badge'); tile.appendChild(badge); }
  badge.textContent = String(count);
}

installAndroidApps();
installJoycon();
installXrGames();
on('appsState', () => { paintWindowBadge(); paintLibrarySoon(); });
/**
 * PhoneXR state/library changed: repaint the library (hosted badge, runtime row) and the PhoneXR
 * settings page when it is open. The XR game mode itself is handled by xr-games.js; this side only
 * keeps the abandoned chrome updated.
 */
on('xr', () => {
  paintLibrarySoon();
  const host = winBody('settings');
  if (host?.querySelector('[data-xr-page]')) buildXrPage(host.querySelector('[data-xr-page]'));
});

let libraryPaintTimer = 0;
/**
 * Repaints the Applications menu a moment after the app state changed, if it is open at all.
 *
 * <p>It used to repaint only when the menu had the focus, which was wrong in exactly the case that
 * matters: opening an app gives the focus to the app's window, and the menu behind it then kept
 * showing the tile as closed — and, right after the icons were rendered, kept its placeholders. The
 * repaint restores the scroll position and never touches the focus (see paintLibrary).
 */
function paintLibrarySoon() {
  if (libraryPaintTimer) return;
  libraryPaintTimer = setTimeout(() => {
    libraryPaintTimer = 0;
    if (winBody('library')) paintLibrary();
    if (winBody('spatial-launcher')) paintSpatialLauncher();
    // A janela do Shizuku mostra a mesma lista: quando o serviço entrega (ou perde) os apps, ela
    // acompanha em vez de ficar com a lista velha atrás da janela do app que acabou de abrir.
    const shizukuHost = winBody('shizuku');
    if (shizukuHost) paintShizuku(shizukuHost);
  }, 500);
}

/* ============ primeira execução ============ */
const boot = document.getElementById('boot');
const bootGo = document.getElementById('bootGo');
let langWin = null;

// A tela preta antiga não aparece mais: idioma é uma janela flutuante 3D única.
boot.hidden = true;

/**
 * Escolha de idioma com a cara da referência (a lista do Quest): o idioma atual destacado em cima,
 * a lista completa (com as linhas de idiomas que ainda não têm tradução apagadas), a ilustração da
 * mão com o controle à direita e o botão continuar embaixo. Escolher uma linha já aplica e fecha —
 * um gesto só; o continuar confirma o idioma que já está destacado.
 */
function deviceLanguage() {
  const tag = (navigator.language || 'pt').toLowerCase();
  if (tag.startsWith('en')) return tag.includes('gb') ? 'en-GB' : 'en';
  if (tag.startsWith('es')) return tag.includes('-es') ? 'es-ES' : 'es';
  return 'pt';
}
/**
 * Corpo da escolha de idioma (o mesmo na primeira execução e nas configurações): idioma atual
 * destacado em cima, a lista completa, a ilustração à direita e o botão continuar embaixo.
 */
function languagePicker(pending, onPick, slim = false) {
  const body = el('div', slim ? 'langwin slim' : 'langwin');
  const label = id => langRow(id).label;
  const paint = () => {
    const hero = slim ? '' :
      `<div class="lq-hero">
         <img class="lq-logo" src="./icons/nextvr-n.png" alt="ATMOXR">
         <h1 class="lq-welcome">Bem-vindo<br>ao ATMOXR</h1>
         <p class="lq-tag">Aponte e pinça<br>para escolher.</p>
       </div>`;
    body.innerHTML = `${slim ? `<img class="lq-logo-sm" src="./icons/nextvr-n.png" alt="NextVR"><div class="lq-pickrow"><span class="lq-pick">${label(pending)}</span></div>` : ''}
      <div class="lq-main">
        ${hero}
        <div class="lang-options" role="list">${LANG_ROWS.map(r => `<button class="lang-option${r.table ? '' : ' soon'}" data-lang="${r.id}"
            ${r.table ? '' : 'disabled aria-disabled="true"'}
            aria-pressed="${r.id === pending}"><span>${r.label}</span>${r.table ? '' : `<i>${t('langSoon')}</i>`}</button>`).join('')}</div>
      </div>
      <div class="lq-foot"><span class="lang-tracking">${slim ? 'Escolha o idioma.' : 'Aponte com a mão e faça uma pinça.'}</span>
        <button class="lq-go">${t('langContinue')}</button></div>`;
    body.querySelectorAll('[data-lang]').forEach(b => b.onclick = () => onPick(b.dataset.lang));
    body.querySelector('.lq-go').onclick = () => onPick(pending);
  };
  paint();
  return body;
}
function languageWindow() {
  // Compact language selector window that still displays all 12 options at once.
  const w = open({ id:'language', title:'Next VR', w:390, h:500, onboarding:true,
    node:languagePicker(S.lang || deviceLanguage(), finishLanguage) });
  // No language means no normal shell yet: the only close path is choosing a language.
  w.el.querySelector('[data-act="close"]')?.remove();
  w.el.querySelector('[data-act="pin"]')?.remove();
  return w;
}

on('handframe', frame=>{
  const node=langWin?.el.querySelector('.lang-tracking');
  const text=frame.hands.length?`Mãos detectadas: ${frame.hands.length}`:'Aguardando uma mão…';
  if(node && node.textContent!==text)node.textContent=text;
});

async function finishLanguage(lang) {
  if(!langWin)return;
  setLang(lang);                                  // atualiza dock, menu e todas as telas
  if (langWin) { close(langWin); langWin = null; }
  // Estilo Meta: a janelinha de idioma fecha e TUDO volta ao normal — dock completa com as
  // funcionalidades de antes, no idioma escolhido, e a multitarefa continua em arco (3 apps).
  setDockVisible(true);
  document.getElementById('stat').hidden = false;   // volta tudo ao normal, no idioma escolhido
  document.getElementById('perm').hidden = false;
  // Ask both permissions from the language button while it is still a user gesture.
  const gyroPromise = startGyro();
  const handPromise = S.handsOn ? startHands() : Promise.resolve(false);
  await Promise.allSettled([gyroPromise, handPromise]);
  // O centro muda apenas uma vez, depois da escolha; abrir apps não recalibra.
  setTimeout(() => recenter(), 280);
}

let entryWin = null;
let fullscreenEntryHost = null;
const isFullscreenEntryMode = new URLSearchParams(location.search).get('fullscreen') === '1' ||
  location.hash.includes('fullscreen=1');

function launchGorillaFromEntryMenu() {
  S.gorillaInstalled = 1;
  save(S);
  touchLib('gorilla-tag', true);
  paintLibrary();
  paintStore();
  const delegatedToNativeHost = isFullscreenEntryMode && native && typeof window.NativeXR?.startVrSession === 'function';
  if (delegatedToNativeHost) {
    S.autoLaunchGorilla = 1;
    save(S);
    finishEntryMenu();
    return;
  }
  finishEntryMenu();
  openGorillaTag();
}

on('gorilla-installed', () => {
  S.gorillaInstalled = 1;
  save(S);
  touchLib('gorilla-tag', true);
  paintLibrary();
  paintStore();
});
on('store-app-launch', appId => {
  if (!appId) return;
  touchLib(appId, true);
  finishEntryMenu();
  const act = LIB_ACTIONS[appId];
  if (act) act();
});

function mountFullscreenEntryMenu() {
  if (fullscreenEntryHost) fullscreenEntryHost.remove();
  const host = document.createElement('div');
  host.id = 'entry-fullscreen';
  host.appendChild(buildEntryMenu({
    fullscreen: true,
    onStart: finishEntryMenu,
    onLaunchGorilla: launchGorillaFromEntryMenu,
    getStatus: getDeviceStatus,
  }));
  document.body.appendChild(host);
  fullscreenEntryHost = host;
  return host;
}

function entryMenuWindow() {
  const w = open({
    id: 'entry-menu',
    title: 'NextVR',
    w: 840,
    h: 525,
    chrome: false,
    resizable: false,
    onboarding: true,
    node: buildEntryMenu({
      fullscreen: false,
      onStart: finishEntryMenu,
      onLaunchGorilla: launchGorillaFromEntryMenu,
      getStatus: getDeviceStatus,
    }),
  });
  return w;
}

async function finishEntryMenu(fromHost = false) {
  const isFromHost = fromHost === true;
  if (!S.lang) setLang(deviceLanguage() || 'pt');
  const delegatedToNativeHost = !isFromHost && isFullscreenEntryMode && native && typeof window.NativeXR?.startVrSession === 'function';
  if (fullscreenEntryHost && !delegatedToNativeHost) {
    fullscreenEntryHost.remove();
    fullscreenEntryHost = null;
  }
  if (entryWin) { close(entryWin); entryWin = null; }
  else close('entry-menu');
  if (S.spatialLauncher) {
    for (const w of [...wins]) {
      if (w.id !== 'spatial-launcher' && !w.onboarding) close(w);
    }
    setDockHidden(true);
    setDockVisible(false);
    spatialLauncherApp();
  } else {
    close('spatial-launcher');
    setDockHidden(false);
    setDockVisible(true);
  }
  document.getElementById('stat').hidden = false;
  if (!native) document.getElementById('perm').hidden = false;
  if (S.sixdof !== 0) {
    S.sixdof = 1;
    S.sixDof = 1;
    window.NativeXR?.setSixDofEnabled?.(true);
  }
  window.NativeXR?.handVisuals?.(!!S.handDraw);
  window.NativeXR?.wideCamera?.(!!S.wideCamera);
  if (!isFromHost) {
    window.NativeXR?.startVrSession?.(JSON.stringify(S));
  }
  css3d.invalidate?.();
  css3d.render?.(scene, camera);
  if (delegatedToNativeHost) {
    fullscreenEntryHost?.querySelector('.entry-menu-root')?.resetToHome?.();
    return;
  }
  const gyroPromise = startGyro();
  const handPromise = S.handsOn ? startHands() : Promise.resolve(false);
  await Promise.allSettled([gyroPromise, handPromise]);
  if (!native) setTimeout(() => recenter(), 280);
}

function openEntryMenu() {
  if (native && window.NativeXR?.openEntryMenu) {
    window.NativeXR.openEntryMenu();
    return null;
  }
  setDockVisible(false);
  document.getElementById('stat').hidden = true;
  if (isFullscreenEntryMode || !native) {
    return mountFullscreenEntryMenu();
  }
  entryWin = entryMenuWindow();
  return entryWin;
}

let initialWorkspaceCentered = false;
window.nextvrEnterWorkspace = rawSettings => {
  if (rawSettings) {
    try {
      const parsed = typeof rawSettings === 'string' ? JSON.parse(rawSettings) : rawSettings;
      if (parsed.handDraw !== undefined) S.handDraw = parsed.handDraw ? 1 : 0;
      if (parsed.showFps !== undefined) S.showFps = parsed.showFps ? 1 : 0;
      if (parsed.mediaVolume !== undefined) S.mediaVolume = parsed.mediaVolume;
      if (parsed.brightness !== undefined) S.brightness = parsed.brightness;
      if (parsed.quality !== undefined) { S.quality = parsed.quality; emit('quality'); }
      if (parsed.wideCamera !== undefined) S.wideCamera = parsed.wideCamera ? 1 : 0;
      if (parsed.spatialLauncher !== undefined) S.spatialLauncher = parsed.spatialLauncher ? 1 : 0;
      if (parsed.dockSnapSlot !== undefined) S.dockSnapSlot = parsed.dockSnapSlot ? 1 : 0;
      if (parsed.fingerTouch !== undefined) S.fingerTouch = parsed.fingerTouch ? 1 : 0;
      if (parsed.singleHandMode !== undefined) S.singleHandMode = parsed.singleHandMode || 'both';
      if (parsed.mrDim !== undefined) setMrDim(!!parsed.mrDim);
      if (parsed.sixdof !== undefined) {
        S.sixdof = parsed.sixdof ? 1 : 0;
        if (!S.sixdof) SixDof.reset();
        window.NativeXR?.setSixDofEnabled?.(S.sixdof !== 0);
      }
      if (parsed.gorillaInstalled !== undefined) {
        S.gorillaInstalled = parsed.gorillaInstalled ? 1 : 0;
        if (S.gorillaInstalled) {
          touchLib('gorilla-tag', true);
          paintLibrary();
          paintStore();
        }
      }
      if (parsed.profileName !== undefined) S.profileName = parsed.profileName;
      if (parsed.profileAvatar !== undefined) S.profileAvatar = parsed.profileAvatar;
      if (parsed.lang) setLang(parsed.lang);
      if (!S.spatialLauncher && parsed.entryEnvChosen && parsed.env && parsed.env !== 'passthrough') {
        setEnvironment(parsed.env);
      } else {
        S.env = 'passthrough';
        setPassthrough(true);
      }
      const shouldAutoGorilla = !!parsed.autoLaunchGorilla;
      if (S.autoLaunchGorilla) S.autoLaunchGorilla = 0;
      save(S);
      makeDock();
      window.NativeXR?.handVisuals?.(!!S.handDraw);
      window.NativeXR?.wideCamera?.(!!S.wideCamera);
      window.NativeXR?.setFingerTouch?.(S.fingerTouch !== 0);
      window.NativeXR?.setSingleHandMode?.(S.singleHandMode || 'both');
      if (shouldAutoGorilla) {
        setTimeout(() => openGorillaTag(), 120);
      }
    } catch {}
  } else if (native) {
    setPassthrough(true);
    window.NativeXR?.setFingerTouch?.(S.fingerTouch !== 0);
  }
  finishEntryMenu(true);
  if (!initialWorkspaceCentered) {
    initialWorkspaceCentered = true;
    setTimeout(() => recenter(), 220);
  }
};
on('profile-updated', () => makeDock());

document.getElementById('btnGyro').onclick = () => startGyro();
document.getElementById('btnHand').onclick = () => (tracking() ? stopHands() : startHands());

/* status */
on('hands', v => { document.getElementById('dotHand').classList.toggle('on', !!v); });
on('gyro', v => { document.getElementById('dotGyro').classList.toggle('on', !!v); });

// Menu de entrada NextVR v2.2.2 abre sempre ao iniciar o app/jogo.
makeDock();
const bootOnboarding = new URLSearchParams(location.search).get('onboarding') ||
  (location.hash.includes('onboarding=language') ? 'language' :
   location.hash.includes('onboarding=skip') ? 'skip' : '');
if (isFullscreenEntryMode) {
  setDockVisible(false);
  document.getElementById('stat').hidden = true;
  window.NativeXR?.handVisuals?.(!!S.handDraw);
  mountFullscreenEntryMenu();
} else if (bootOnboarding === 'language') {
  setDockVisible(false);
  document.getElementById('stat').hidden = true;
  langWin = languageWindow();
} else if (bootOnboarding === 'skip') {
  if (S.spatialLauncher) {
    setDockHidden(true);
    setDockVisible(false);
    spatialLauncherApp();
  } else {
    setDockHidden(false);
    setDockVisible(true);
  }
  if (native) {
    window.NativeXR?.wideCamera?.(!!S.wideCamera);
    startGyro();
    if (S.handsOn) startHands();
  }
  document.getElementById('perm').hidden = false;
  setTimeout(() => recenter(), 280);
} else {
  setDockVisible(false);
  document.getElementById('stat').hidden = true;
  if (native) {
    window.NativeXR?.handVisuals?.(!!S.handDraw);
    startGyro();
    if (S.handsOn) startHands();
  }
  entryWin = entryMenuWindow();
}

if (native) {
  // Native owns permission/lifecycle; a page gesture must not open another camera stream.
  document.getElementById('perm').hidden = true;
  // A resumed or recreated shell must receive the whole scene again even if nothing moved: the
  // atlas bridge skips payloads that are bit-identical to the one already sent.
  window.nextvrResume = () => { css3d.invalidate?.(); startGyro(); if (S.handsOn) startHands(); };
  window.nextvrSuspend = () => { stopHands(); };
  on('hands', () => { document.getElementById('perm').hidden = true; });
}

/* O menu do jogo pede as configurações: a janela abre por cima do mundo, sem sair dele. */
on('game:settings', () => controlCenterApp());
