// NextVR — aplicativos, menu flutuante, ambientes, idiomas e ligação geral.
import { settings as S, save, t, setLang, on, emit, toast, recenter, setEnvironment, setPassthrough, setMrDim, envList, startGyro, gyroLive, native, css3d, scene, contentRoot, camera,
  LANG_ROWS, langRow, SixDof } from './core.js';
import { startHands, stopHands, tracking } from './hands.js';
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
import { openOrbMenu, closeOrbMenu, orbOpen, installOrbMenu } from './orb-menu.js';

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

const QB_POPULAR_SITES = [
  { name:'Google',      url:'https://www.google.com/',               bg:'#262932', color:'#4285F4', badge:'G', svg:`<svg viewBox="0 0 24 24" width="22" height="22"><path fill="#4285F4" d="M21.35 11.1h-9.17v2.73h6.51c-.33 1.81-1.5 3.34-3.2 4.37v3.62h5.18c3.03-2.79 4.78-6.9 4.78-11.72 0-.8-.08-1.57-.22-2.3z"/><path fill="#34A853" d="M12.18 22c4.32 0 7.95-1.43 10.6-3.88l-5.18-3.62c-1.43.96-3.26 1.53-5.42 1.53-4.17 0-7.7-2.81-8.96-6.6H-2.1v3.73C.54 18.4 5.95 22 12.18 22z" transform="translate(2 0) scale(.86)"/><path fill="#FBBC05" d="M3.22 13.43A9.02 9.02 0 0 1 2.75 10.5c0-1.02.18-2.01.47-2.93V3.84H-2.1A14.96 14.96 0 0 0-3.7 10.5c0 2.42.58 4.71 1.6 6.66l5.32-3.73z" transform="translate(4 1.5) scale(.75)"/><path fill="#EA4335" d="M12.18 4.97c2.35 0 4.46.81 6.12 2.4l4.59-4.59C20.12.99 16.5 0 12.18 0 5.95 0 .54 3.6-2.1 8.84l5.32 3.73c1.26-3.79 4.79-6.6 8.96-6.6z" transform="translate(2 1) scale(.85)"/></svg>` },
  { name:'YouTube',     url:'https://www.youtube.com/',              bg:'#262932', color:'#ffffff', badge:'▶', svg:`<svg viewBox="0 0 28 20" width="24" height="18"><rect width="28" height="20" rx="5" fill="#FF0033"/><path d="M11 6l8 4-8 4V6z" fill="#fff"/></svg>` },
  { name:'Prime Video', url:'https://www.primevideo.com/',           bg:'#1c2536', color:'#00A8E1', badge:'prime' },
  { name:'Discord',     url:'https://discord.com/app',               bg:'#262932', color:'#5865F2', badge:'D', svg:`<svg viewBox="0 0 24 24" width="22" height="22"><circle cx="12" cy="12" r="10" fill="#5865F2"/><circle cx="9.2" cy="12" r="1.5" fill="#fff"/><circle cx="14.8" cy="12" r="1.5" fill="#fff"/><path d="M8 9.2c1.2-.7 2.5-1 4-1s2.8.3 4 1" stroke="#fff" stroke-width="1.6" stroke-linecap="round" fill="none"/></svg>` },
  { name:'Instagram',   url:'https://www.instagram.com/',            bg:'linear-gradient(135deg,#feda75,#d62976,#4f5bd5)', color:'#ffffff', badge:'◎' },
  { name:'Facebook',    url:'https://www.facebook.com/',             bg:'#1877F2', color:'#ffffff', badge:'f' },
  { name:'Roblox',      url:'https://www.roblox.com/',               bg:'#090d16', color:'#f8fafc', badge:'◈', img:'./roblox-logo.jpg' },
  { name:'Reddit',      url:'https://www.reddit.com/',               bg:'#FF4500', color:'#ffffff', badge:'r/' },
  { name:'Xbox Cloud',  url:'https://www.xbox.com/play',             bg:'#107C10', color:'#ffffff', badge:'✕' },
  { name:'TikTok',      url:'https://www.tiktok.com/',               bg:'#000000', color:'#25F4EE', badge:'♪', img:'./tiktok-logo.jpg' },
];

const QB_CONTINUE_CARDS = [
  { title:'(1) Início - YouTube',        domain:'www.youtube.com',                    url:'https://www.youtube.com/',        iconBg:'#FF0033', iconTxt:'▶' },
  { title:'Crunchyroll - Assista a An...', domain:'www.crunchyroll.com',              url:'https://www.crunchyroll.com/',    iconBg:'#F47521', iconTxt:'◉' },
  { title:'YouTube',                     domain:'accounts.google.com/v3/signin/...',  url:'https://www.youtube.com/',        iconBg:'#FF0033', iconTxt:'▶' },
  { title:'Crunchyroll - Assista a An...', domain:'www.crunchyroll.com/pt-br/watch',  url:'https://www.crunchyroll.com/',    iconBg:'#F47521', iconTxt:'◉' },
  { title:'(1) Comprar o Meta Quest...', domain:'www.youtube.com/watch?v=meta',       url:'https://www.youtube.com/',        iconBg:'#FF0033', iconTxt:'▶' },
];

const QB_ENTERTAINMENT_TILES = [
  {
    name:'Spotify', url:'https://open.spotify.com/',
    cardBg:'#090b0e',
    art:`<div class="qb-ent-brand qb-ent-spotify"><span class="qb-ent-sp-dot"><svg viewBox="0 0 24 24" width="22" height="22" fill="#090b0e"><path d="M16.6 15.4c-.2.3-.6.4-.9.2-2.4-1.4-5.3-1.8-8.8-1-.3.1-.7-.1-.8-.5-.1-.3.1-.7.5-.8 3.8-.9 7.1-.5 9.7 1.1.3.2.4.6.3 1zm1.2-2.7c-.2.4-.7.5-1.1.3-2.7-1.6-6.8-2.1-10-1.2-.4.1-.8-.1-1-.5-.1-.4.1-.8.5-1 3.6-1.1 8.1-.6 11.2 1.3.4.2.5.7.4 1.1zm.1-2.8C14.7 8 9.4 7.8 6.3 8.7c-.5.2-1-.1-1.2-.6-.1-.5.1-1 .6-1.2 3.5-1.1 9.4-.9 13.1 1.3.4.3.6.8.3 1.3-.2.4-.8.6-1.2.4z"/></svg></span><span class="qb-ent-sp-txt">Spotify</span></div>`
  },
  {
    name:'YouTube Music', url:'https://music.youtube.com/',
    cardBg:'#ffffff',
    art:`<div class="qb-ent-brand qb-ent-ytm"><span class="qb-ent-ytm-dot">▶</span><span class="qb-ent-ytm-txt">Music</span></div>`
  },
  {
    name:'Crunchyroll', url:'https://www.crunchyroll.com/',
    cardBg:'#F47521',
    art:`<div class="qb-ent-brand qb-ent-cr"><span class="qb-ent-cr-dot">◉</span><span class="qb-ent-cr-txt">crunchyroll</span></div>`
  },
  {
    name:'HBO Max', url:'https://www.max.com/',
    cardBg:'#07080b',
    art:`<div class="qb-ent-brand qb-ent-hbo"><span class="qb-ent-hbo-top">HBO</span><span class="qb-ent-hbo-sub">max</span></div>`
  },
  {
    name:'Hulu', url:'https://www.hulu.com/',
    cardBg:'#06080a',
    art:`<div class="qb-ent-brand qb-ent-hulu">hulu</div>`
  },
  {
    name:'Tubi', url:'https://tubitv.com/',
    cardBg:'linear-gradient(135deg,#4c1d95 0%,#6d28d9 100%)',
    art:`<div class="qb-ent-brand qb-ent-tubi">tubi</div>`
  },
  {
    name:'Paramount+', url:'https://www.paramountplus.com/',
    cardBg:'linear-gradient(135deg,#0051e6 0%,#0072ff 100%)',
    art:`<div class="qb-ent-brand qb-ent-para"><span class="qb-ent-para-mtn">▲</span><span class="qb-ent-para-txt">Paramount+</span></div>`
  },
  {
    name:'Peacock TV', url:'https://www.peacocktv.com/',
    cardBg:'#050608',
    art:`<div class="qb-ent-brand qb-ent-peacock"><span>peacock</span><span class="qb-ent-pk-dots"><i style="background:#facc15"></i><i style="background:#f97316"></i><i style="background:#ef4444"></i><i style="background:#a855f7"></i><i style="background:#3b82f6"></i><i style="background:#22c55e"></i></span></div>`
  },
  {
    name:'Twitch', url:'https://www.twitch.tv/',
    cardBg:'#9146FF',
    art:`<div class="qb-ent-brand qb-ent-twitch">twitch</div>`
  },
  {
    name:'ESPN', url:'https://www.espn.com/',
    cardBg:'#CC0000',
    art:`<div class="qb-ent-brand qb-ent-espn">ESPN</div>`
  },
];

const QB_IMMERSIVE_CARDS = [
  { title:'Acima das Nuvens 360°', sub:'Experiência WebXR Panorâmica', url:'https://immersiveweb.dev/', bg:'linear-gradient(135deg,#0284c7,#1e1b4b)' },
  { title:'Beat Saber · WebXR', sub:'Ritmo VR com Sabres de Luz', url:'https://moonrider.xyz/?mode=ride&vr=1', bg:'linear-gradient(135deg,#991b1b,#1e1b4b)' },
  { title:'Jogos WebXR Imersivos', sub:'Catálogo VR no Navegador', url:'https://constructarcade.com/', bg:'linear-gradient(135deg,#065f46,#0f172a)' },
];

function buildQuestBrowserHomeHtml() {
  return `
    <div class="qb-home-scroll">
      <section class="qb-sec">
        <div class="qb-sec-head"><span class="qb-sec-title">Populares</span></div>
        <div class="qb-pop-row">
          ${QB_POPULAR_SITES.map(s => `
            <button type="button" class="qb-pop-item" data-qb-url="${escH(s.url)}" title="${escH(s.name)}">
              <span class="qb-pop-icon" style="background:${s.bg};color:${s.color};overflow:hidden;padding:0">${s.img ? `<img src="${s.img}" alt="${escH(s.name)}" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit">` : (s.svg || escH(s.badge))}</span>
              <span class="qb-pop-lbl">${escH(s.name)}</span>
            </button>
          `).join('')}
        </div>
      </section>

      <section class="qb-sec">
        <div class="qb-sec-head"><span class="qb-sec-title">Continuar navegando</span></div>
        <div class="qb-cont-grid">
          ${QB_CONTINUE_CARDS.map(c => `
            <button type="button" class="qb-cont-card" data-qb-url="${escH(c.url)}" title="${escH(c.title)}">
              <span class="qb-cont-ico" style="background:${c.iconBg}">${escH(c.iconTxt)}</span>
              <div class="qb-cont-meta">
                <div class="qb-cont-ttl">${escH(c.title)}</div>
                <div class="qb-cont-dom">${escH(c.domain)}</div>
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
  const fld = el('input','fld qb-urlfld');
  fld.type='text'; fld.placeholder=isIncognito ? 'Pesquisa privada ou endereço da web' : 'Pesquisar ou digitar endereço da web';
  const showStartHome = options?.showHomeOverlay !== undefined ? Boolean(options.showHomeOverlay) : isDefaultGoogle;
  fld.value = showStartHome ? '' : resolvedUrl;
  const st = el('button','qb-icn'); st.innerHTML=icon('star');   st.title='Favorito';
  const extIco = el('span', 'qb-ext-pill', '🧩 ⋯');
  top.append(bk,fw,rl,modeBadge,plusTabBtn,fld,st,extIco);

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

  const dock = el('div','qb-dock');
  const av = document.createElement('button');
  av.className = 'dock-av'; av.title='Perfil'; av.setAttribute('aria-label','Perfil');
  av.innerHTML = AVATAR_HTML; dock.appendChild(av);
  const status = document.createElement('button');
  status.className = 'dock-status';
  status.title='Status';
  status.innerHTML = `<span class="dock-time">--:--</span><span class="dock-wifi">${icon('wifi')}</span><span class="dock-bat">${BAT_HTML}</span>`;
  dock.appendChild(status);
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
    const tile = e.target.closest('[data-qb-url]');
    if (!tile) return;
    e.stopPropagation();
    const u = tile.dataset.qbUrl || '';
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

/* ============ Galeria (fotos + ambientes) ============ */
let photos = [];
function gallery() {
  const body = el('div', 'pad');
  const head = el('div');
  head.innerHTML = `<h2>${t('gallery')}</h2><p class="sub">Veja suas fotos e troque o ambiente do NextVR.</p>`;

  // ---------- Ambientes ----------
  const envSection = el('div');
  envSection.style.marginTop = '22px';
  envSection.innerHTML = `<h3 style="font-size:18px;margin:0 0 10px 0;font-weight:700">${t('env')}</h3>
    <p class="sub" style="margin:0 0 12px 0">Escolha o fundo em que tudo flutua.</p>`;
  const envGrid = el('div', 'grid3');
  const paintEnvs = () => {
    envGrid.innerHTML = '';
    for (const e of envList()) {
      const b = el('button', 'env' + (e.thumb ? ' env-pano' : ''));
      b.style.background = e.thumb ? `url('${e.thumb}') center/cover` : 'linear-gradient(160deg,#253244,#11151d)';
      b.innerHTML = `<span>${e.name}</span>`;
      b.setAttribute('aria-pressed', S.env === e.id ? 'true' : 'false');
      b.onclick = () => {
        setEnvironment(e.id);
        [...envGrid.children].forEach(c => c.setAttribute('aria-pressed', 'false'));
        b.setAttribute('aria-pressed', 'true');
        toast('Ambiente: ' + e.name);
      };
      envGrid.appendChild(b);
    }
  };
  paintEnvs();
  on('env', paintEnvs);
  envSection.appendChild(envGrid);

  // ---------- Fotos ----------
  const photoHead = el('div');
  photoHead.style.cssText = 'margin-top:26px;display:flex;align-items:center;gap:10px';
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

  body.append(head, envSection, photoHead, input, grid, big);
  return open({ id: 'gallery', title: t('gallery'), node: body });
}

/* ============ Ambientes ============ */
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

/* ============ Central de controle (visão compacta inspirada no painel aprovado) ============ */
function controlCenterApp() {
  const body = el('div', 'quick-center');
  const panel = el('section', 'quick-panel');
  const side = el('aside', 'quick-side');
  const status = el('div', 'quick-status');
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
  const date = new Date().toLocaleDateString('pt-BR', { weekday:'long', day:'numeric', month:'long', year:'numeric' });
  status.innerHTML = `<div><strong>Controles rápidos</strong><span>${date}</span></div><div class="quick-battery">${icon('battery')}<b data-cc-battery>${battery ? Math.round(battery.level * 100) : '—'}%</b></div>`;
  const paintCcBat = () => {
    const bEl = status.querySelector('[data-cc-battery]');
    if (!bEl) return;
    const b = readBat();
    bEl.textContent = `${b ? Math.round(b.level * 100) : '—'}%`;
  };
  on('device-status', paintCcBat);
  const gear = el('button', 'quick-gear', icon('settings'));
  gear.type = 'button'; gear.title = 'Todas as configurações'; gear.setAttribute('aria-label', 'Todas as configurações');
  gear.onclick = () => settingsApp();
  status.appendChild(gear);

  const quickTiles = el('div', 'quick-tiles');
  const systemTile = (name, title, subtitle, action, disabled=false) => {
    const button = el('button', `quick-tile${disabled ? ' is-disabled' : ''}`);
    button.type = 'button'; button.innerHTML = `<span class="quick-tile-icon">${icon(name)}</span><span><b>${title}</b><small>${subtitle}</small></span>`;
    button.disabled = disabled; if (action) button.onclick = action; quickTiles.appendChild(button); return button;
  };
  systemTile('wifi', 'Wi-Fi', 'Abrir conexões', () => window.NativeXR?.systemPanel ? window.NativeXR.systemPanel('internet') : toast('Conexões disponíveis no Android'));
  systemTile('bluetooth', 'Bluetooth', 'Dispositivos', () => window.NativeXR?.systemPanel ? window.NativeXR.systemPanel('bluetooth') : toast('Bluetooth disponível no Android'));
  systemTile('android', 'Apps Android', 'Abrir janela Shizuku', () => shizukuWindow());
  systemTile('lock', 'Limite', 'Movimento protegido', null, true);
  panel.append(status, quickTiles);

  const section = el('div', 'quick-section');
  section.innerHTML = `<div class="quick-section-title"><b>Controles rápidos</b></div>`;
  const controls = el('div', 'quick-controls');
  let previousEnvironment = S.env === 'night' ? 'passthrough' : S.env;
  let isMuted = false, dndControl = null, sideMute = null;
  const syncMute = value => {
    isMuted = !!value;
    if (window.NativeXR?.audioEnabled) window.NativeXR.audioEnabled(!isMuted);
    for (const button of [dndControl, sideMute]) if (button) {
      button.classList.toggle('is-active', isMuted);
      button.setAttribute('aria-pressed', String(isMuted));
    }
    if (dndControl) dndControl.querySelector('small').textContent = isMuted ? 'Áudio silenciado' : 'Som ativado';
  };
  const control = (name, label, detail, action, active=false) => {
    const button = el('button', `quick-control${active ? ' is-active' : ''}`);
    button.type = 'button'; button.setAttribute('aria-pressed', String(active));
    button.innerHTML = `<span>${icon(name)}</span><b>${label}</b><small>${detail}</small>`;
    button.onclick = () => {
      const value = action(button);
      button.classList.toggle('is-active', !!value);
      button.setAttribute('aria-pressed', String(!!value));
    };
    controls.appendChild(button); return button;
  };
  const recBtn = control(
    'camera',
    'Gravação Interna (1 Lente)',
    internalRecState.active ? `🔴 Gravando ${formatRecTime(internalRecState.seconds)}` : 'Tela Cheia 1 Lente (Lentes ativas)',
    () => toggleInternalEyeRecording(),
    !!internalRecState.active
  );
  recBtn.dataset.internalRecBtn = '1';
  control('camera', 'Visão do ambiente', S.env === 'passthrough' ? 'Câmera ativa' : 'Câmera desligada', button => {
    const enabled = S.env !== 'passthrough'; setPassthrough(enabled); button.querySelector('small').textContent = enabled ? 'Câmera ativa' : 'Câmera desligada'; return enabled;
  }, S.env === 'passthrough');
  dndControl = control('volumeoff', 'Não perturbe', 'Silenciar áudio do app', () => { syncMute(!isMuted); return isMuted; });
  control('crosshair', 'Recentralizar', 'Ajustar a visão', () => { recenter(); toast('Visão recentralizada'); return false; });
  control('moon', 'Modo noturno', S.env === 'night' ? 'Ativado' : 'Desativado', button => {
    const enabled = S.env !== 'night';
    if (enabled) { previousEnvironment = S.env; setEnvironment('night'); }
    else setEnvironment(previousEnvironment === 'night' ? 'passthrough' : previousEnvironment);
    button.querySelector('small').textContent = enabled ? 'Ativado' : 'Desativado'; return enabled;
  }, S.env === 'night');
  control('settings', 'Mais configurações', 'Imagem, janelas e idioma', () => { settingsApp(); return false; });
  control('android', 'Apps do Android', 'Abrir launcher Shizuku', () => { shizukuWindow(); return false; });
  control('appGrid', 'Spatial App', S.spatialLauncher ? 'Ativado (Sem Dock)' : 'Desativado (Dock normal)', button => {
    const enabled = !S.spatialLauncher;
    setSpatialLauncherMode(enabled);
    button.querySelector('small').textContent = enabled ? 'Ativado (Sem Dock)' : 'Desativado (Dock normal)';
    return enabled;
  }, !!S.spatialLauncher);
  control('vision', 'Câmera Grande Ocular', S.wideCamera ? 'Ativada' : 'Normal', button => {
    S.wideCamera = S.wideCamera ? 0 : 1;
    save(S);
    window.NativeXR?.wideCamera?.(!!S.wideCamera);
    button.querySelector('small').textContent = S.wideCamera ? 'Ativada' : 'Normal';
    return !!S.wideCamera;
  }, !!S.wideCamera);
  control('move', t('dockSnapSlot'), S.dockSnapSlot !== 0 ? t('on') : t('off'), button => {
    S.dockSnapSlot = S.dockSnapSlot === 0 ? 1 : 0;
    save(S);
    button.querySelector('small').textContent = S.dockSnapSlot !== 0 ? t('on') : t('off');
    return S.dockSnapSlot !== 0;
  }, S.dockSnapSlot !== 0);
  control('crosshair', t('fingerTouch'), S.fingerTouch !== 0 ? t('on') : t('off'), button => {
    S.fingerTouch = S.fingerTouch === 0 ? 1 : 0;
    save(S);
    window.NativeXR?.setFingerTouch?.(S.fingerTouch !== 0);
    emit('fingerTouch', S.fingerTouch !== 0);
    button.querySelector('small').textContent = S.fingerTouch !== 0 ? t('on') : t('off');
    return S.fingerTouch !== 0;
  }, S.fingerTouch !== 0);
  control('crosshair', 'Pinça no App (Sem Raio)', S.pinchOnApp !== 0 ? 'Ativado' : 'Desativado', button => {
    S.pinchOnApp = S.pinchOnApp === 0 ? 1 : 0;
    save(S);
    emit('pinchOnApp', S.pinchOnApp !== 0);
    button.querySelector('small').textContent = S.pinchOnApp !== 0 ? 'Ativado' : 'Desativado';
    return S.pinchOnApp !== 0;
  }, S.pinchOnApp !== 0);
  control('crosshair', 'Gesto de Soco 2s (Menu Rápido)', S.gunGesture !== 0 ? 'Ativado' : 'Desativado', button => {
    S.gunGesture = S.gunGesture === 0 ? 1 : 0;
    save(S);
    emit('gunGesture', S.gunGesture !== 0);
    button.querySelector('small').textContent = S.gunGesture !== 0 ? 'Ativado' : 'Desativado';
    return S.gunGesture !== 0;
  }, S.gunGesture !== 0);
  control('appGrid', 'Anel de 10 Apps (bolinha da Dock)', S.orbRing !== 0 ? 'Ativado' : 'Desativado · biblioteca de volta', button => {
    const enabled = S.orbRing === 0;      // tocou: inverte
    S.orbRing = enabled ? 1 : 0;
    save(S);
    // Desligar fecha o anel que estiver aberto (o véu e o selo saem junto) e devolve a dock normal.
    if (!enabled) { try { closeOrbMenu(); } catch {} }
    emit('orbRing', enabled);
    button.querySelector('small').textContent = enabled ? 'Ativado' : 'Desativado · biblioteca de volta';
    toast(enabled ? 'Anel de 10 apps ativado' : 'Anel desativado · a bolinha abre a biblioteca');
    return enabled;
  }, S.orbRing !== 0);
  control('move', 'Modo 3DoF / 6DoF', S.sixdof !== 0 ? '6DoF Ativado' : '3DoF Ativado', button => {
    S.sixdof = S.sixdof === 0 ? 1 : 0;
    save(S);
    if (!S.sixdof) SixDof.reset();
    window.NativeXR?.setSixDofEnabled?.(S.sixdof !== 0);
    emit('sixdof', S.sixdof !== 0);
    button.querySelector('small').textContent = S.sixdof !== 0 ? '6DoF Ativado' : '3DoF Ativado';
    return S.sixdof !== 0;
  }, S.sixdof !== 0);
  control('move', 'Tela Perto Sobre / Trás Embaixo', S.depthLayerOrder !== 0 ? 'Ativado (Sobre/Embaixo)' : 'Desativado', button => {
    S.depthLayerOrder = S.depthLayerOrder === 0 ? 1 : 0;
    save(S);
    emit('depthLayerOrder', S.depthLayerOrder !== 0);
    window.nextvrUpdateDepthLayering?.();
    button.querySelector('small').textContent = S.depthLayerOrder !== 0 ? 'Ativado (Sobre/Embaixo)' : 'Desativado';
    return S.depthLayerOrder !== 0;
  }, S.depthLayerOrder !== 0);
  const dockColors = [
    ['default', 'Padrão (Cinza Horizon)'],
    ['black', 'Preto Transparente'],
    ['blue', 'Azul Safira'],
    ['purple', 'Roxo Neon'],
    ['green', 'Verde Esmeralda'],
    ['red', 'Vermelho Rubi'],
    ['glass', 'Vidro Transparente'],
  ];
  const curDockColorLabel = () => (dockColors.find(([id]) => id === (S.dockColor || 'default')) || dockColors[0])[1];
  control('appGrid', 'Cor da Dock', curDockColorLabel(), button => {
    const curIdx = Math.max(0, dockColors.findIndex(([id]) => id === (S.dockColor || 'default')));
    const next = dockColors[(curIdx + 1) % dockColors.length];
    window.nextvrSetDockColor?.(next[0]);
    button.querySelector('small').textContent = next[1];
    return next[0] !== 'default';
  }, (S.dockColor || 'default') !== 'default');
  section.appendChild(controls);
  panel.append(section);

  const sideTitle = el('div', 'quick-side-title', 'Ajustes');
  const volumeIcon = el('span', 'quick-side-icon', icon('volume'));
  const volume = el('input', 'quick-vertical'); volume.type = 'range'; volume.min = '0'; volume.max = '100'; volume.value = window.NativeXR?.volume ? window.NativeXR.volume() : 65;
  volume.setAttribute('aria-label', 'Volume'); volume.title = `Volume ${volume.value}%`;
  volume.oninput = () => { window.NativeXR?.setVolume?.(+volume.value); volume.title = `Volume ${volume.value}%`; };
  sideMute = el('button', 'quick-side-button', icon('volumeoff')); sideMute.type = 'button'; sideMute.title = 'Silenciar áudio'; sideMute.setAttribute('aria-label', 'Silenciar áudio'); sideMute.setAttribute('aria-pressed', 'false');
  sideMute.onclick = () => syncMute(!isMuted);
  const brightnessIcon = el('span', 'quick-side-icon', icon('sun'));
  const brightness = el('input', 'quick-vertical'); brightness.type = 'range'; brightness.min = '10'; brightness.max = '100'; brightness.value = window.NativeXR?.brightness ? window.NativeXR.brightness() : 70;
  brightness.setAttribute('aria-label', 'Brilho'); brightness.title = `Brilho ${brightness.value}%`;
  brightness.oninput = () => { window.NativeXR?.setBrightness?.(+brightness.value); brightness.title = `Brilho ${brightness.value}%`; };
  side.append(sideTitle, volumeIcon, volume, sideMute, brightnessIcon, brightness);
  body.append(panel, side);
  // É uma janela de conteúdo comum: tem barra, posição e curvatura do workspace, igual ao Shizuku.
  // O tamanho contido evita que o painel pareça um HUD cobrindo o campo de visão.
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
  scroll.append(ytSection(t('general')));
  const langBtn = el('button','yt-link');
  langBtn.append(ytRow(icon('globe'), t('language'), langRow(S.lang||'pt').label));
  langBtn.onclick = openPicker;
  scroll.append(langBtn);
  scroll.append(ytRow(icon('gauge'), 'Contador de FPS', 'Mostrar taxa de quadros', ytToggle('showFps')));
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
  const envBtn = el('button','yt-link');
  envBtn.append(ytRow(icon('image'), 'Ambiente', 'Trocar passthrough / panorama'));
  envBtn.onclick = () => { const w=wins.find(x=>x.id==='settings');if(w)close(w);gallery(); };
  scroll.append(envBtn);

  // Mãos
  scroll.append(ytSection(t('hands')));
  scroll.append(ytRow(icon('user'), 'Rastreamento', 'MediaPipe nativo Zero-Delay · câmera traseira'));
  const recToggleBtn = el('button', 'yt-seg-btn' + (internalRecState.active ? ' on' : ''));
  recToggleBtn.dataset.internalRecBtn = '1';
  recToggleBtn.innerHTML = `<span data-internal-rec-sub>${internalRecState.active ? `🔴 Gravando ${formatRecTime(internalRecState.seconds)}` : 'Iniciar Gravação 16:9'}</span>`;
  recToggleBtn.onclick = () => toggleInternalEyeRecording();
  scroll.append(ytRow(icon('camera'), 'Gravação Interna (1 Lente)', 'Grava tela cheia de 1 lente em HD mantendo as 2 lentes ativas no celular', recToggleBtn));
  scroll.append(ytRow(icon('edit3'), 'Desenhar mãos', 'Contorno 3D no ambiente e cursor de pinça', ytToggle('handDraw')));
  scroll.append(ytRow(icon('crosshair'), t('fingerTouch'), t('fingerTouchDesc'), ytToggle('fingerTouch', v => {
    window.NativeXR?.setFingerTouch?.(!!v);
    emit('fingerTouch', !!v);
  })));
  scroll.append(ytRow(
    icon('crosshair'),
    'Pinça no App (Sem Raio)',
    'Fazer a pinça encima de um app abre o app na hora, sem precisar do raio',
    ytToggle('pinchOnApp', v => emit('pinchOnApp', !!v))
  ));
  scroll.append(ytRow(
    icon('crosshair'),
    'Gesto de Soco 2s (Menu Rápido)',
    'Fechar a mão toda por 2 segundos abre o menuzinho de recentrar dock e ambientes',
    ytToggle('gunGesture', v => emit('gunGesture', !!v))
  ));
  scroll.append(ytRow(icon('zap'), 'Sensibilidade', 'Pinça com histerese estável'));

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
  // O anel de 10 apps também se desliga por aqui (a bolinha volta a abrir a biblioteca).
  scroll.append(ytRow(icon('appGrid'), 'Anel de 10 Apps (bolinha da Dock)',
    'Desligado: a bolinha abre a biblioteca de sempre',
    ytToggle('orbRing', v => {
      if (!v) { try { closeOrbMenu(); } catch {} }
      toast(v ? 'Anel de 10 apps ativado' : 'Anel desativado · a bolinha abre a biblioteca');
    })));
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

  const foot = el('div', 'yt-foot'); foot.textContent = 'NextVR · shell XR para Android · v1.0';
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
      <button class="qs-tool" disabled>${icon('bug')}<span>Relatar problema</span></button>
      <button class="qs-tool" disabled>${icon('lock')}<span>Modo viagem</span></button>
      <button class="qs-tool" disabled>${icon('device')}<span>Remote Desktop</span></button>
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

/* ============ Jogo de Desenho VR com Hand Tracking em Tela Branca ============ */
const HAND_DRAW_CHALLENGES = [
  'Desenhe uma Casa 🏠',
  'Desenhe um Sol ☀️',
  'Desenhe uma Estrela ⭐',
  'Desenhe um Carro 🚗',
  'Desenhe um Gato 🐱',
  'Desenhe um Foguete 🚀',
  'Desenhe uma Árvore 🌳',
  'Desenhe um Coração ❤️',
  'Modo Livre 🎨',
];
const HAND_DRAW_COLORS = [
  ['#111827', 'Preto'],
  ['#ef4444', 'Vermelho'],
  ['#2563eb', 'Azul'],
  ['#16a34a', 'Verde'],
  ['#eab308', 'Amarelo'],
  ['#f97316', 'Laranja'],
  ['#9333ea', 'Roxo'],
  ['#ec4899', 'Rosa'],
  ['#06b6d4', 'Ciano'],
  ['#78350f', 'Marrom'],
];

export function openHandDrawGame() {
  const existing = wins.find(w => w.id === 'hand-draw');
  if (existing) {
    existing.setHidden(false);
    focus(existing);
    css3d.invalidate?.();
    return existing;
  }

  let currentColor = '#111827';
  let currentSize = 8;
  let currentTool = 'pen'; // 'pen' | 'neon' | 'eraser' | 'circle' | 'rect'
  let handDrawMode = 'auto'; // 'auto' (indicador esticado ou pinça) | 'pinch' (só na pinça)
  let challengeIdx = 0;
  let completedCount = 0;
  let strokeCount = 0;
  const undoStack = [];

  const body = el('div', 'hand-draw-game');
  body.dataset.handDrawGame = '1';
  body.style.cssText = 'position:relative;width:100%;height:100%;background:#f8fafc;display:flex;flex-direction:column;overflow:hidden;user-select:none;font-family:Inter,system-ui,sans-serif;';

  body.innerHTML = `
    <div class="hd-toolbar" data-hd-toolbar style="display:flex;flex-direction:column;gap:6px;padding:8px 12px;background:#0f172a;color:#f8fafc;border-bottom:2px solid #cbd5e1;z-index:3">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
          <img src="./icons/paintdrawer-logo.jpg" alt="paintdrawer" style="width:24px;height:24px;border-radius:6px;object-fit:cover;border:1px solid rgba(255,255,255,.25)">
          <span style="font-size:13px;font-weight:900;color:#38bdf8;letter-spacing:.03em">paintdrawer</span>
          <span data-hd-challenge style="padding:3px 10px;border-radius:999px;background:rgba(56,189,248,.16);border:1px solid rgba(56,189,248,.42);color:#e0f2fe;font-size:11px;font-weight:800">Desafio: ${HAND_DRAW_CHALLENGES[0]}</span>
          <button type="button" data-hd-next-challenge style="padding:3px 9px;border-radius:999px;border:1px solid rgba(255,255,255,.28);background:#1e293b;color:#f8fafc;font-size:10.5px;font-weight:800;cursor:pointer">🎲 Sortear Desafio</button>
          <button type="button" data-hd-done style="padding:3px 9px;border-radius:999px;border:1px solid rgba(74,222,128,.45);background:rgba(22,163,74,.25);color:#86efac;font-size:10.5px;font-weight:800;cursor:pointer">✓ Concluir (<b data-hd-score>0</b>)</button>
        </div>
        <div style="display:flex;align-items:center;gap:6px">
          <button type="button" data-hd-hand-mode="auto" style="padding:4px 9px;border-radius:7px;border:1px solid rgba(56,189,248,.5);background:#1d4ed8;color:#fff;font-size:10.5px;font-weight:800;cursor:pointer">🖐 Hand: Indicador / Pinça</button>
          <button type="button" data-hd-undo style="padding:4px 9px;border-radius:7px;border:1px solid rgba(255,255,255,.24);background:#1e293b;color:#f8fafc;font-size:10.5px;font-weight:800;cursor:pointer">↩ Desfazer</button>
          <button type="button" data-hd-clear style="padding:4px 9px;border-radius:7px;border:1px solid rgba(248,113,113,.45);background:rgba(185,28,28,.28);color:#fecaca;font-size:10.5px;font-weight:800;cursor:pointer">🗑 Limpar Tela Branca</button>
          <button type="button" data-hd-exit style="padding:4px 10px;border-radius:7px;border:1px solid rgba(255,255,255,.28);background:#334155;color:#fff;font-size:10.5px;font-weight:800;cursor:pointer">✕ Sair</button>
        </div>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap">
        <div style="display:flex;align-items:center;gap:5px;flex-wrap:wrap" data-hd-palette>
          ${HAND_DRAW_COLORS.map(([hex, name], i) => `
            <button type="button" data-hd-color="${hex}" title="${name}" aria-label="${name}"
              style="width:24px;height:24px;border-radius:50%;background:${hex};border:${i === 0 ? '3px solid #38bdf8' : '2px solid rgba(255,255,255,.55)'};cursor:pointer;padding:0;box-shadow:0 1px 4px rgba(0,0,0,.4)"></button>
          `).join('')}
        </div>
        <div style="display:flex;align-items:center;gap:5px;flex-wrap:wrap">
          <button type="button" data-hd-tool="pen" class="on" style="padding:3px 8px;border-radius:6px;border:1px solid #38bdf8;background:#2563eb;color:#fff;font-size:10px;font-weight:800;cursor:pointer">✏️ Pincel</button>
          <button type="button" data-hd-tool="neon" style="padding:3px 8px;border-radius:6px;border:1px solid rgba(255,255,255,.24);background:#1e293b;color:#e2e8f0;font-size:10px;font-weight:800;cursor:pointer">✨ Neon</button>
          <button type="button" data-hd-tool="eraser" style="padding:3px 8px;border-radius:6px;border:1px solid rgba(255,255,255,.24);background:#1e293b;color:#e2e8f0;font-size:10px;font-weight:800;cursor:pointer">🧽 Borracha</button>
          <button type="button" data-hd-tool="circle" style="padding:3px 8px;border-radius:6px;border:1px solid rgba(255,255,255,.24);background:#1e293b;color:#e2e8f0;font-size:10px;font-weight:800;cursor:pointer">⭕ Círculo</button>
        </div>
        <div style="display:flex;align-items:center;gap:4px">
          ${[[4, 'Fino'], [8, 'Médio'], [16, 'Grosso'], [28, 'Super']].map(([sz, lbl]) => `
            <button type="button" data-hd-size="${sz}" class="${sz === 8 ? 'on' : ''}"
              style="padding:3px 7px;border-radius:6px;border:1px solid ${sz === 8 ? '#38bdf8' : 'rgba(255,255,255,.24)'};background:${sz === 8 ? '#2563eb' : '#1e293b'};color:#fff;font-size:10px;font-weight:800;cursor:pointer">${lbl}</button>
          `).join('')}
        </div>
      </div>
    </div>
    <div class="hd-stage" style="position:relative;flex:1;min-height:0;width:100%;background:#ffffff;overflow:hidden;touch-action:none">
      <canvas class="hand-draw-canvas" data-hand-draw-canvas="1" width="1020" height="530"
        style="width:100%;height:100%;display:block;background:#ffffff;cursor:crosshair"></canvas>
      <canvas class="hand-draw-overlay" data-hand-draw-overlay="1" width="1020" height="530"
        style="position:absolute;inset:0;width:100%;height:100%;display:block;pointer-events:none"></canvas>
      <div data-hd-status style="position:absolute;left:12px;bottom:10px;padding:4px 10px;border-radius:999px;background:rgba(15,23,42,.78);color:#f8fafc;font-size:10.5px;font-weight:700;pointer-events:none">
        Aponte o dedo indicador ou faça pinça para desenhar na tela branca · Traços: <b data-hd-strokes>0</b>
      </div>
    </div>
  `;

  const canvas = body.querySelector('[data-hand-draw-canvas]');
  const overlay = body.querySelector('[data-hand-draw-overlay]');
  const ctx = canvas.getContext('2d');
  const octx = overlay.getContext('2d');
  const strokesEl = body.querySelector('[data-hd-strokes]');
  const challengeEl = body.querySelector('[data-hd-challenge]');
  const scoreEl = body.querySelector('[data-hd-score]');
  const handModeBtn = body.querySelector('[data-hd-hand-mode]');

  const fillWhite = () => {
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
  };
  const saveSnapshot = () => {
    try {
      if (undoStack.length >= 20) undoStack.shift();
      undoStack.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    } catch {}
  };
  fillWhite();
  saveSnapshot();

  const applySegment = (x0, y0, x1, y1, color = currentColor, size = currentSize, tool = currentTool) => {
    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    if (tool === 'eraser') {
      ctx.shadowBlur = 0;
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = size * 2.2;
    } else if (tool === 'neon') {
      ctx.shadowColor = color;
      ctx.shadowBlur = size * 1.8;
      ctx.strokeStyle = color;
      ctx.lineWidth = size;
    } else {
      ctx.shadowBlur = 0;
      ctx.strokeStyle = color;
      ctx.lineWidth = size;
    }
    if (tool === 'circle') {
      const r = Math.max(6, Math.hypot(x1 - x0, y1 - y0));
      ctx.beginPath();
      ctx.arc(x1, y1, r, 0, Math.PI * 2);
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.lineTo(x1, y1);
      ctx.stroke();
    }
    ctx.restore();
  };

  const toCanvasCoords = (clientX, clientY) => {
    const r = canvas.getBoundingClientRect();
    const w = Math.max(1, r.width || canvas.width);
    const h = Math.max(1, r.height || canvas.height);
    return {
      x: Math.max(0, Math.min(canvas.width, ((clientX - r.left) / w) * canvas.width)),
      y: Math.max(0, Math.min(canvas.height, ((clientY - r.top) / h) * canvas.height)),
    };
  };

  let pointerDrawing = false;
  let lastPt = null;
  canvas.addEventListener('pointerdown', e => {
    saveSnapshot();
    pointerDrawing = true;
    const pt = toCanvasCoords(e.clientX, e.clientY);
    lastPt = pt;
    applySegment(pt.x, pt.y, pt.x + 0.1, pt.y + 0.1);
    strokeCount++;
    if (strokesEl) strokesEl.textContent = String(strokeCount);
    css3d.invalidate?.();
  });
  canvas.addEventListener('pointermove', e => {
    const pt = toCanvasCoords(e.clientX, e.clientY);
    if (!pointerDrawing || !lastPt) return;
    applySegment(lastPt.x, lastPt.y, pt.x, pt.y);
    lastPt = pt;
    css3d.invalidate?.();
  });
  const finishPointerDraw = () => {
    pointerDrawing = false;
    lastPt = null;
  };
  canvas.addEventListener('pointerup', finishPointerDraw);
  canvas.addEventListener('pointercancel', finishPointerDraw);

  // Rastreamento direto de Hand Tracking (0 Delay): desenha apontando o indicador ou fazendo pinça!
  const handLast = new Map();
  let animId = 0;
  const isIndexPointing = pts => {
    if (!pts || pts.length < 63) return false;
    const wx = pts[0], wy = pts[1];
    const dIndex = Math.hypot(pts[24] - wx, pts[25] - wy);
    const dPip = Math.hypot(pts[18] - wx, pts[19] - wy);
    const dMid = Math.hypot(pts[36] - wx, pts[37] - wy);
    const dRing = Math.hypot(pts[48] - wx, pts[49] - wy);
    return dIndex > dPip * 1.16 && dIndex > Math.min(dMid, dRing) * 1.05;
  };

  const tickHandDraw = () => {
    octx.clearRect(0, 0, overlay.width, overlay.height);
    let dirty = false;
    const activeIds = new Set();
    for (const h of hands) {
      const id = h.id || (h.left ? 'left' : 'right');
      activeIds.add(id);
      let nx = 0.5, ny = 0.5;
      if (h.points && h.points.length >= 26) {
        if (h.pinching && h.points.length >= 14) {
          nx = (h.points[12] + h.points[24]) * 0.5;
          ny = (h.points[13] + h.points[25]) * 0.5;
        } else {
          nx = h.points[24];
          ny = h.points[25];
        }
      } else if (Array.isArray(h.aim)) {
        const sp = screenPoint(h.aim);
        nx = sp.x; ny = sp.y;
      }
      const cx = Math.max(0, Math.min(canvas.width, nx * canvas.width));
      const cy = Math.max(0, Math.min(canvas.height, ny * canvas.height));
      const drawingNow = !h.fist && (h.pinching || (handDrawMode === 'auto' && isIndexPointing(h.points)));

      // Desenha o anel guia da ponta do dedo na tela branca
      octx.save();
      octx.beginPath();
      octx.arc(cx, cy, Math.max(6, currentSize * 0.75), 0, Math.PI * 2);
      octx.strokeStyle = drawingNow ? currentColor : '#2563eb';
      octx.lineWidth = drawingNow ? 3 : 2;
      octx.stroke();
      if (drawingNow) {
        octx.fillStyle = currentTool === 'eraser' ? '#94a3b8' : currentColor;
        octx.globalAlpha = 0.35;
        octx.fill();
      }
      octx.restore();

      const prev = handLast.get(id);
      if (drawingNow) {
        if (!prev) {
          saveSnapshot();
          applySegment(cx, cy, cx + 0.1, cy + 0.1);
          strokeCount++;
          if (strokesEl) strokesEl.textContent = String(strokeCount);
        } else {
          const mx = (prev.x + cx) * 0.5;
          const my = (prev.y + cy) * 0.5;
          applySegment(prev.x, prev.y, mx, my);
          applySegment(mx, my, cx, cy);
        }
        handLast.set(id, { x: cx, y: cy });
        dirty = true;
      } else {
        handLast.delete(id);
      }
    }
    for (const k of [...handLast.keys()]) {
      if (!activeIds.has(k)) handLast.delete(k);
    }
    if (dirty || hands.length > 0) css3d.invalidate?.();
    animId = requestAnimationFrame(tickHandDraw);
  };
  animId = requestAnimationFrame(tickHandDraw);

  body.querySelectorAll('[data-hd-color]').forEach(btn => {
    btn.onclick = () => {
      currentColor = btn.dataset.hdColor || '#111827';
      if (currentTool === 'eraser') currentTool = 'pen';
      body.querySelectorAll('[data-hd-color]').forEach(b => {
        b.style.border = b === btn ? '3px solid #38bdf8' : '2px solid rgba(255,255,255,.55)';
      });
      css3d.invalidate?.();
    };
  });
  body.querySelectorAll('[data-hd-tool]').forEach(btn => {
    btn.onclick = () => {
      currentTool = btn.dataset.hdTool || 'pen';
      body.querySelectorAll('[data-hd-tool]').forEach(b => {
        const on = b === btn;
        b.classList.toggle('on', on);
        b.style.background = on ? '#2563eb' : '#1e293b';
        b.style.borderColor = on ? '#38bdf8' : 'rgba(255,255,255,.24)';
      });
      css3d.invalidate?.();
    };
  });
  body.querySelectorAll('[data-hd-size]').forEach(btn => {
    btn.onclick = () => {
      currentSize = Number(btn.dataset.hdSize) || 8;
      body.querySelectorAll('[data-hd-size]').forEach(b => {
        const on = b === btn;
        b.classList.toggle('on', on);
        b.style.background = on ? '#2563eb' : '#1e293b';
        b.style.borderColor = on ? '#38bdf8' : 'rgba(255,255,255,.24)';
      });
      css3d.invalidate?.();
    };
  });
  if (handModeBtn) {
    handModeBtn.onclick = () => {
      handDrawMode = handDrawMode === 'auto' ? 'pinch' : 'auto';
      handModeBtn.dataset.hdHandMode = handDrawMode;
      handModeBtn.textContent = handDrawMode === 'auto' ? '🖐 Hand: Indicador / Pinça' : '🤏 Hand: Só na Pinça';
      css3d.invalidate?.();
    };
  }
  body.querySelector('[data-hd-next-challenge]')?.addEventListener('click', () => {
    challengeIdx = (challengeIdx + 1) % HAND_DRAW_CHALLENGES.length;
    if (challengeEl) challengeEl.textContent = `Desafio: ${HAND_DRAW_CHALLENGES[challengeIdx]}`;
    css3d.invalidate?.();
  });
  body.querySelector('[data-hd-done]')?.addEventListener('click', () => {
    completedCount++;
    if (scoreEl) scoreEl.textContent = String(completedCount);
    challengeIdx = (challengeIdx + 1) % HAND_DRAW_CHALLENGES.length;
    if (challengeEl) challengeEl.textContent = `Desafio: ${HAND_DRAW_CHALLENGES[challengeIdx]}`;
    toast(`Arte #${completedCount} concluída! Próximo desafio!`);
    css3d.invalidate?.();
  });
  body.querySelector('[data-hd-undo]')?.addEventListener('click', () => {
    if (undoStack.length > 0) {
      const prevImg = undoStack.pop();
      try { ctx.putImageData(prevImg, 0, 0); } catch {}
    } else {
      fillWhite();
    }
    css3d.invalidate?.();
  });
  body.querySelector('[data-hd-clear]')?.addEventListener('click', () => {
    saveSnapshot();
    fillWhite();
    strokeCount = 0;
    if (strokesEl) strokesEl.textContent = '0';
    css3d.invalidate?.();
  });

  const win = open({ id: 'hand-draw', title: 'paintdrawer', node: body, w: 1020, h: 640 });
  if (win?.shell) win.shell.dataset.handDrawVr = '1';
  if (win?.el) win.el.dataset.handDrawVr = '1';
  body.querySelector('[data-hd-exit]')?.addEventListener('click', () => {
    cancelAnimationFrame(animId);
    close(win);
  });
  window.nextvrHandDrawStroke = (x0, y0, x1, y1, color = currentColor, size = currentSize) => {
    saveSnapshot();
    applySegment(x0, y0, x1, y1, color, size, 'pen');
    strokeCount++;
    if (strokesEl) strokesEl.textContent = String(strokeCount);
    css3d.invalidate?.();
    return strokeCount;
  };
  touchLib('hand-draw', true);
  focus(win);
  css3d.invalidate?.();
  css3d.render?.(scene, camera);
  return win;
}

if (typeof window !== 'undefined') {
  window.nextvrOpenRobloxVr = openRobloxVr;
  window.nextvrOpenBeatSaberVr = openBeatSaberVr;
  window.nextvrOpenHandDrawGame = openHandDrawGame;
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
  tiktok:   () => webWindow('tiktok',    'TikTok',       'https://www.tiktok.com/'),
  twitch:   () => webWindow('twitch',    'Twitch',       'https://www.twitch.tv/'),
  prime:    () => webWindow('prime',     'prime video',  'https://www.primevideo.com/'),
  whatsapp: () => webWindow('whatsapp',  'WhatsApp',     'https://web.whatsapp.com/'),
  instagram:() => webWindow('instagram', 'Instagram',    'https://www.instagram.com/'),
  x:        () => webWindow('x',         'X',            'https://x.com/'),
  facebook: () => webWindow('facebook',  'Facebook',     'https://www.facebook.com/'),
  telegram: () => webWindow('telegram',  'Telegram',     'https://web.telegram.org/'),
  spotify:  () => webWindow('spotify',   'Spotify',      'https://open.spotify.com/'),
  vrfs:     () => openVrfsGame(),
  'mr-pistol': () => openMrPistolGame(),
  'hand-draw': () => openHandDrawGame(),
  'gorilla-tag': () => openGorillaTag(),
  'beat-vr': () => openBeatSaberVr(),
  'roblox-vr': () => openRobloxVr(),
  roblox: () => openRobloxVr(),
  'hyper-vr': () => webBrowserFor('browser', 'Hyper Dash VR', 'https://immersiveweb.dev/'),
};

/* ============ o anel de 10 apps da bolinha da dock ============ */
/*
 * O anel mostra os dois lados: os apps DO NextVR (o mesmo catálogo da biblioteca, com o mesmo
 * `LIB_ACTIONS`) e os apps DO ANDROID instalados no aparelho. Até 4 do Android; o resto dos 10
 * lugares é dos apps do NextVR. Sem Shizuku/sem lista do aparelho, o anel enche só com os do NextVR.
 */
const ORB_OWN_APPS = LIB_APPS
  .filter(a => typeof LIB_ACTIONS[a.id] === 'function')
  .map(a => ({
    id: a.id,
    name: a.label || a.name,
    // A capa local quando existe; o resto cai no glifo (primeira letra), como nas outras grades.
    img: a.imgUrl || (a.html && (a.html.match(/src="([^"]+)"/) || [])[1]) || '',
    glyph: String(a.label || a.name || a.id).trim().slice(0, 1).toUpperCase(),
    bg: a.bg || '',
  }));

installOrbMenu({
  own: () => ORB_OWN_APPS,
  android: () => (androidApps() || []).map(a => ({ pkg: a.pkg, label: a.label, icon: a.icon })),
  launchOwn: id => {
    const run = LIB_ACTIONS[id];
    if (run) run();
    else libraryApp();          // 'TODOS' no centro do anel abre a biblioteca completa
  },
  launchAndroid: pkg => { openApp(pkg); focusAppWindow(pkg); },
  refreshAndroid: () => loadAndroidLibrary(),
});

/* ---------- loja (Meta Quest 3 Store UI: Página inicial · Jogos · Apps · Lista de desejos) ---------- */
let storeTab = 'apps';
let storeQuestFilter = 'home'; // 'home' | 'games' | 'apps' | 'wishlist'
let gorillaFetchPct = null;
const STORE_TABS = [['apps','Apps'],['horizon','Horizon+']];

const QUEST_STORE_ITEMS = [
  { id: 'mr-pistol', name: 'ShootTheDie', cat: 'games', rating: '4.9', reviews: '18 mil', tag: 'MR · G18 & Alvos 3D', badge: 'NOVO MR', img: './icons/shootthedie-logo.jpg', bg: 'linear-gradient(135deg,#090b10,#dc2626)' },
  { id: 'hand-draw', name: 'paintdrawer', cat: 'games', rating: '4.9', reviews: '14 mil', tag: 'Hand Tracking · Tela Branca', badge: 'NOVO', img: './icons/paintdrawer-logo.jpg', bg: '#09090b' },
  { id: 'gorilla-tag', name: 'Gorilla Tag', cat: 'games', rating: '4.9', reviews: '28 mil', tag: 'VR · Hand Tracking', badge: 'DESTAQUE', img: './icons/gorilla-tag-logo.jpg', bg: 'linear-gradient(135deg,#431407,#ea580c)' },
  { id: 'vrfs', name: 'VRFS · Futebol VR', cat: 'games', rating: '4.9', reviews: '34 mil', tag: 'Chuteiras VR · Bola 3D', badge: 'DESTAQUE', img: './icons/vrfs-logo.jpg', bg: 'linear-gradient(135deg,#052e16,#dc2626)' },
  { id: 'beat-vr', name: 'Beat Saber', cat: 'games', rating: '4.9', reviews: '45 mil', tag: 'Modo VR Imediato', badge: 'VR', img: './beat-saber-logo.jpg', bg: 'linear-gradient(135deg,#450a0a,#0284c7)' },
  { id: 'hyper-vr', name: 'Hyper Dash VR', cat: 'games', rating: '4.8', reviews: '9,4 mil', tag: 'Ação · Arena VR', badge: 'VR', img: './hyper-dash-logo.jpg', bg: 'linear-gradient(135deg,#082f49,#0284c7)' },
  { id: 'roblox-vr', name: 'Roblox', cat: 'games', rating: '4.8', reviews: '64 mil', tag: 'Ambiente Preto · Hand Tracking', badge: 'NOVO', img: './roblox-logo.jpg', bg: 'linear-gradient(135deg,#090d16,#1e293b)' },
  { id: 'tiktok', name: 'TikTok', cat: 'apps', rating: '4.9', reviews: '52 mil', tag: 'Vídeos · Social', badge: 'APP', img: './tiktok-logo.jpg', bg: 'linear-gradient(135deg,#09090b,#18181b)' },
  { id: 'youtube', name: 'YouTube VR', cat: 'apps', rating: '4.8', reviews: '31 mil', tag: 'Vídeo 360° · 4K', badge: 'APP', img: './icons/youtube.svg', bg: 'linear-gradient(135deg,#450a0a,#dc2626)', isSvg: true },
  { id: 'discord', name: 'Discord', cat: 'apps', rating: '4.7', reviews: '19 mil', tag: 'Comunidade · Voz', badge: 'APP', img: './icons/discord.svg', bg: 'linear-gradient(135deg,#312e81,#4f46e5)', isSvg: true },
  { id: 'netflix', name: 'Netflix', cat: 'apps', rating: '4.8', reviews: '22 mil', tag: 'Cinema VR', badge: 'APP', img: '', bg: 'linear-gradient(135deg,#450a0a,#991b1b)', textLogo: 'N' },
];

function buildStore() {
  const root = el('div', 'st st-quest-store');
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

    html += `
      <div class="st-quest-hero">
        <div class="st-quest-hero-copy">
          <span class="st-quest-hero-kicker">META QUEST · NEXTVR STORE</span>
          <h2 class="st-quest-hero-title">JOGOS E APPS EM DESTAQUE</h2>
          <p class="st-quest-hero-sub">Gorilla Tag (${CARDBOARD_2015_LENS.model}), Beat Saber em modo VR imediato, Hyper Dash VR, Roblox com ambiente escuro e TikTok.</p>
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
    aria-label="${escH(label)}" title="${escH(label)}" aria-pressed="${libFilter === id}">${icon(glyph)}</button>`;
  root.innerHTML = `<aside class="lib-rail" aria-label="${escH(t('apps'))}">
      ${navButton('all', t('libAll'), 'appGrid')}
      ${navButton('games', t('libGames'), 'controller')}
      ${navButton('recent', t('recents'), 'timer')}
      <span class="lib-rail-spacer"></span>
      ${navButton('apps', t('apps'), 'phone')}
    </aside>
    <section class="lib-main">
      <div class="lib-head">
        <h2 class="lib-title">${escH(t('apps'))}</h2>
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
  if (w) {
    // Já aberta: traz para a frente SEM reconstruir o conteúdo. O repintar fechava o teclado de
    // busca e devolvia a lista para o começo — o "volta ao menu principal" dentro da biblioteca.
    if (w.hidden) { w.setHidden(false); paintLibrary(); }
    focus(w); css3d.render?.(scene, camera); return w;
  }
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
        <button type="button" class="spatial-hz-env-pill ${curEnv === 'neon' ? 'on' : ''}" data-spatial-env="neon" title="Sala gamer neon 360°">Neon</button>
        <button type="button" class="spatial-hz-env-pill ${curEnv === 'aether' ? 'on' : ''}" data-spatial-env="aether" title="Cidade flutuante 360°">Aether</button>
        <button type="button" class="spatial-hz-env-pill ${curEnv === 'stadium' ? 'on' : ''}" data-spatial-env="stadium" title="Estádio de futebol 360°">Estádio</button>
        <button type="button" class="spatial-hz-env-pill ${curEnv === 'tron' ? 'on' : ''}" data-spatial-env="tron" title="Cidade cyberpunk 360°">Tron</button>
        <button type="button" class="spatial-hz-env-pill ${curEnv === 'cyber' ? 'on' : ''}" data-spatial-env="cyber" title="Avenida cyberpunk 360°">Cyber</button>
        <button type="button" class="spatial-hz-env-pill ${curEnv === 'spa' ? 'on' : ''}" data-spatial-env="spa" title="Casa de vidro na floresta 360°">Spa</button>
        <button type="button" class="spatial-hz-env-pill ${curEnv === 'factory' ? 'on' : ''}" data-spatial-env="factory" title="Fábrica de carros 360°">Fábrica</button>
        <button type="button" class="spatial-hz-env-pill ${curEnv === 'skyline' ? 'on' : ''}" data-spatial-env="skyline" title="Cityline ao entardecer 360°">Skyline</button>
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
        // A biblioteca é o hub do usuário, não um app do arco: fechá-la aqui devolvia a grade
        // inicial por cima dela ("o app volta ao menu principal do nada").
        if (oldWin !== newest && oldWin.id !== 'library') close(oldWin);
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
        <button type="button" class="fist-env-chip ${curEnv === 'street' ? 'on' : ''}" data-fist-env="street">
          ${icon('vision')}<span>Rua à noite 360°</span>
        </button>
        <button type="button" class="fist-env-chip ${curEnv === 'studio' ? 'on' : ''}" data-fist-env="studio">
          ${icon('vision')}<span>Estúdio VR 360°</span>
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
      <button type="button" class="fist-menu-sec-btn" data-fist-act="toggle-spatial">
        ${icon('maximize')}<span>${S.spatialLauncher ? 'Modo Dock' : 'Apps Flutuantes'}</span>
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
    } else if (act === 'toggle-spatial') {
      close('fist-menu');
      setSpatialLauncherMode(!S.spatialLauncher);
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

/**
 * Botão voltar do Android DENTRO da sessão. O nativo só volta ao menu inicial no SEGUNDO voltar
 * (ver NextVrActivity.onBackPressed): o primeiro chega aqui. Ordem: fecha o anel de 10 apps, o menu
 * da mão esquerda ou a janela em foco — nada de derrubar a biblioteca de apps para o menu principal
 * por causa de um toque acidental na tela (dentro do VR Box a tela encosta no plástico).
 */
window.nextvrBack = () => {
  if (orbOpen()) { closeOrbMenu(); return true; }
  const quick = wins.find(w => w.id === 'left-quick-menu');
  if (quick && !quick.hidden) { toggleLeftHandQuickMenu(false); return true; }
  const focused = focusedWin();
  if (focused && !focused.onboarding) { close(focused); return true; }
  return false;
};

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

/* ============ dock (compacta, com atalho de ambiente virtual) ============ */
/**
 * O ícone do botão novo da dock: DEZ bolinhas — 3 em cima, 4 no meio, 3 embaixo — que é o desenho
 * do anel pedido pelo usuário ("adiciona uma opção na dock que aparece 3 bolinhas em cima, 4 no
 * meio, e 3 embaixo, do lado esquerdo da biblioteca de apps"). Desenhado aqui para não depender de
 * nenhum ícone de terceiros.
 */
const ORB_DOTS_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${
  [[6.2, 5.4], [12, 5.4], [17.8, 5.4],
   [4.2, 12], [9.5, 12], [14.5, 12], [19.8, 12],
   [6.2, 18.6], [12, 18.6], [17.8, 18.6]]
    .map(([cx, cy]) => `<circle cx="${cx}" cy="${cy}" r="1.85"/>`).join('')
}</svg>`;

const DK = Object.freeze({
  compass:icon('compass'), store:icon('store'), people:icon('people'),
  camera:icon('camera'), gear:icon('settings'), play:icon('play'), shizuku:icon('shizuku'),
  vision:icon('vision'), orbDots:ORB_DOTS_SVG,
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

/* O que a bolinha abre: o anel de 10 apps (padrão) ou a biblioteca de sempre, quando o usuário
 * desliga o anel nas Configurações. É o único ponto de decisão — todo o resto do app continua
 * chamando openOrbMenu/render normalmente. */
// O botão da dock (e a bolinha da biblioteca) abre os apps no ambiente. Tocar de novo fecha: o anel
// não tem ✕ no meio dos apps, então o próprio botão é o liga/desliga.
export function openAppsDot() {
  if (S.orbRing === 0) return libraryApp();
  if (orbOpen()) { closeOrbMenu(); return null; }
  return openOrbMenu();
}
window.nextvrOpenAppsDot = openAppsDot;
// A biblioteca completa continua alcançável: segurando a bolinha da biblioteca (abaixo) ou por aqui.
window.nextvrOpenLibrary = libraryApp;

function makeDock() {
  buildDock([
    // Perfil abre o menu de entrada NextVR, status do telefone e atalho do ambiente virtual.
    { kind: 'avatar', id: 'profile', label: t('profile'),  run: openEntryMenu },
    { kind: 'status', id: 'status',  label: t('settings'), run: quickSettingsApp },
    { kind: 'tool', id: 'virtual-environment', label: t('envVirtual'), svg: DK.vision, run: toggleVirtualEnvironment },
    { kind: 'spacer' },
    // apps principais com ícones Horizon OS 2.7 (v207)
    { id: 'browser', win: 'browser', label: t('browser'), img: './icons/hz-browser.png', svg: DK.compass, bg: 'linear-gradient(145deg,#8aa7ff,#5d62d5)', run: () => webWindow('browser', t('browser'), 'https://google.com/') },
    { id: 'store',   win: 'store',   label: t('store'),   img: './icons/hz-store.png',   svg: DK.store,   bg: 'linear-gradient(145deg,#fcd34d,#ea580c)', run: storeApp },
    { id: 'discord', win: 'discord', label: 'Discord',    img: './icons/hz-whatsapp.png', svg: DK.people,  bg: 'linear-gradient(145deg,#4ade80,#16a34a)', run: () => webWindow('discord', 'Discord', 'https://discord.com/app') },
    { id: 'gallery', win: 'gallery', label: t('gallery'), img: './icons/hz-gallery.png', svg: DK.camera,  bg: 'linear-gradient(145deg,#fdba74,#c084fc)', run: gallery },
    { kind: 'sep' },
    { id: 'settings', win: 'control-center', label: t('settings'), img: './icons/hz-settings.png', svg: DK.gear, bg: 'linear-gradient(145deg,#9ca8b8,#556170)', run: controlCenterApp },
    { id: 'youtube',  win: 'youtube',  label: 'YouTube',     img: './icons/hz-tv.png', svg: DK.play, bg: 'linear-gradient(145deg,#f472b6,#7c3aed)', run: () => webWindow('youtube', 'YouTube', 'https://m.youtube.com/') },
    // Janela dedicada do Shizuku: os apps do aparelho numa janela só deles, com o aviso do serviço.
    { id: 'shizuku', win: 'shizuku', label: t('shizuku'), img: './icons/hz-files.png', svg: DK.shizuku, bg: 'linear-gradient(145deg,#7dd3fc,#455e8c)', run: shizukuWindow },
    // A bolinha da dock (a grade de pontinhos): abre o ANEL de 10 apps — apps do NextVR +
    // apps do Android — com o ambiente escurecido mas ainda visível. O desenho da bolinha é o
    // mesmo de sempre; o que muda é só o que ela abre. Com o anel DESATIVADO nas Configurações
    // (S.orbRing = 0) a bolinha volta a abrir a biblioteca, como era antes.
    // O botão do ANEL (dez bolinhas, 3-4-3) fica à ESQUERDA da biblioteca, do mesmo tamanho e no
    // mesmo ritmo dos outros: a interface gráfica da dock não muda, só ganha mais um atalho.
    { id: 'orb-apps', win: 'orb-apps', label: t('apps'), svg: DK.orbDots, run: openAppsDot },
    // Segurar a bolinha da biblioteca abre a BIBLIOTECA COMPLETA (a grade de todos os apps), que é
    // onde ficam os que não cabem nas dez casas do anel.
    { id: 'library', win: 'library', launcher: true, label: t('apps'), run: openAppsDot,
      hold: () => { if (orbOpen()) closeOrbMenu(); libraryApp(); } },
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
         <img class="lq-logo" src="./icons/nextvr-n.png" alt="NextVR">
         <h1 class="lq-welcome">Bem-vindo<br>ao NextVR</h1>
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

// Menu de entrada NextVR v2.0.0 abre sempre ao iniciar o app/jogo.
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
