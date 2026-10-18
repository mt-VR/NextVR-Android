// NextVR — aplicativos, menu flutuante, ambientes, idiomas e ligação geral.
import { settings as S, save, t, setLang, on, emit, toast, recenter, setEnvironment, setPassthrough, envList, startGyro, gyroLive, native, css3d,
  LANG_ROWS, langRow } from './core.js';
import { startHands, stopHands, tracking } from './hands.js';
import { open, close, wins, buildDock, dockButton, keyboard, keyboardOpen, focusedWin, focus, setDockVisible, getDeviceStatus } from './windows.js';
import { icon } from './reference-icons.js';
import { installAndroidApps, androidApps, androidTileHtml, shizukuStatusRow, openApp, focusAppWindow, openWindowCount,
  loadLibrary as loadAndroidLibrary } from './android-apps.js';
import { installXrGames, xrLibraryItems, xrTileHtml, xrHosting, openXrGameMenu, phoneXrNotice,
  refreshXrLibrary, installXrRuntime, xrState, xrRuntimeReady, xrHandModeOf, setXrHandMode,
  xrSelfTest, xrGames, closeXrGame, restoreXrGame } from './xr-games.js';
import { installJoycon } from './joycon.js';

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

/* ===== Quest-style DuckDuckGo Browser ===== */
function webBrowserFor(id, title, initialUrl='https://duckduckgo.com/') {
  // Chrome do navegador estilo Quest: barra de URL, voltar/avançar/recarregar, mini dock.
  // Se a janela 'browser' já existe, só navega pra URL nova (mantém a WebSurface nativa viva).
  const existing = wins.find(w => w.id === 'browser');
  if (existing) {
    const f = existing.el.querySelector('[data-native-browser], iframe');
    const fld = existing.el.querySelector('.qb-urlfld');
    if (fld) fld.value = initialUrl;
    if (f) {
      if (native) { f.dataset.url = initialUrl; window.NativeXR?.browserCmd?.('browser','go',initialUrl); }
      else f.src = initialUrl;
    }
    focus(existing);
    return existing;
  }
  const body = el('div');
  body.style.cssText='display:flex;flex-direction:column;height:100%;background:#171a22;color:#e9edf4';

  const top = el('div');
  top.style.cssText='display:flex;align-items:center;gap:2px;padding:3px 6px;background:#0e1117;border-bottom:1px solid rgba(255,255,255,.06)';
  const bk = el('button','qb-icn'); bk.innerHTML=icon('back');   bk.title='Voltar';
  const fw = el('button','qb-icn'); fw.innerHTML=icon('enter');  fw.style.transform='rotate(180deg)'; fw.title='Avançar';
  const rl = el('button','qb-icn'); rl.innerHTML=icon('refresh');rl.title='Recarregar';
  const fld = el('input','fld qb-urlfld');
  fld.type='text'; fld.placeholder='Pesquisar ou inserir URL'; fld.value=initialUrl;
  const st = el('button','qb-icn'); st.innerHTML=icon('star');   st.title='Favorito';
  top.append(bk,fw,rl,fld,st);

  const wrap = el('div');
  wrap.style.cssText='flex:1;min-height:0;position:relative;background:#fff';
  const frame = el(native ? 'div' : 'iframe');
  if (native) {
    frame.dataset.nativeBrowser = 'browser';
    frame.style.cssText = 'width:100%;height:100%;background:#fff';
    frame.dataset.url = initialUrl;
  } else {
    frame.style.cssText = 'width:100%;height:100%;border:0;background:#fff';
    frame.referrerPolicy = 'no-referrer';
    frame.sandbox = 'allow-scripts allow-same-origin allow-forms allow-popups allow-presentation';
    frame.src = initialUrl;
  }
  wrap.appendChild(frame);

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
    if(!/^https?:\/\//i.test(u)) u = /\.\w{2,}($|\/)/.test(u) ? 'https://'+u : 'https://duckduckgo.com/?q='+encodeURIComponent(u);
    fld.value=u;
    if (native) { frame.dataset.url=u; window.NativeXR?.browserCmd?.('browser','go',u); }
    else { frame.src = u; }
  }
  function bCmd(cmd,u){ if(native) window.NativeXR?.browserCmd?.('browser',cmd,u||''); }

  fld.addEventListener('keydown', e => { if(e.key==='Enter'){ nav(fld.value); fld.blur(); } });
  fld.addEventListener('focus', () => keyboard(true, fld));
  bk.onclick = () => bCmd('back');
  fw.onclick  = () => bCmd('fwd');
  rl.onclick  = () => bCmd('reload');

  const win = open({id:'browser',title:title||'Navegador',node:body});
  win._cleanupQB = () => { clearInterval(tickI); removeEventListener('online',paintNet); removeEventListener('offline',paintNet); };
  return win;
}

const AVATAR_HTML = '<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><circle cx="12" cy="8.6" r="4.2"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z"/></svg>';
const BAT_HTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16" aria-hidden="true"><rect x="3" y="6" width="16" height="12" rx="2.5"/><rect x="20" y="10" width="2.2" height="4" rx="1" fill="currentColor" stroke="none"/><rect class="b-fill" x="4" y="6.5" width="13" height="11" rx="2" fill="currentColor" stroke="none"/></svg>';


function webWindow(id, title, url, note) {
  // Sites grandes (YouTube, Netflix, etc.) abrem no navegador completo estilo Quest, com
  // barra de URL — modo "cinema" foi desativado a pedido do usuário (pra retomar depois).
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
    if (!/^https?:\/\//i.test(u)) u = /\.\w{2,}($|\/)/.test(u) ? 'https://' + u : 'https://duckduckgo.com/?q=' + encodeURIComponent(u);
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

/* ============ Central de controle (visão compacta inspirada no painel aprovado) ============ */
function controlCenterApp() {
  const body = el('div', 'quick-center');
  const panel = el('section', 'quick-panel');
  const side = el('aside', 'quick-side');
  const status = el('div', 'quick-status');
  const battery = (() => { try { return JSON.parse(window.NativeXR?.battery?.() || 'null'); } catch { return null; } })();
  const date = new Date().toLocaleDateString('pt-BR', { weekday:'long', day:'numeric', month:'long', year:'numeric' });
  status.innerHTML = `<div><strong>Controles rápidos</strong><span>${date}</span></div><div class="quick-battery">${icon('battery')}<b>${battery ? Math.round(battery.level * 100) : '—'}%</b></div>`;
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
  section.innerHTML = '<div class="quick-section-title"><b>Controles rápidos</b><span>Toque para ativar ou ajustar</span></div>';
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
    button.onclick = () => { const value = action(button); button.classList.toggle('is-active', !!value); button.setAttribute('aria-pressed', String(!!value)); };
    controls.appendChild(button); return button;
  };
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
  const openPicker = () => { picker = open({ id:'language-pick', title:t('langTitle'), w:400, h:560,
    node:languagePicker(S.lang||'pt', id=>{setLang(id);toast(t('langChanged'));close(picker);const s=wins.find(x=>x.id==='settings');if(s)close(s);settingsApp();},true) }); };

  // Geral
  scroll.append(ytSection(t('general')));
  const langBtn = el('button','yt-link');
  langBtn.append(ytRow(icon('globe'), t('language'), langRow(S.lang||'pt').label));
  langBtn.onclick = openPicker;
  scroll.append(langBtn);
  scroll.append(ytRow(icon('gauge'), 'Contador de FPS', 'Mostrar taxa de quadros', ytToggle('showFps')));
  const envBtn = el('button','yt-link');
  envBtn.append(ytRow(icon('image'), 'Ambiente', 'Trocar passthrough / panorama'));
  envBtn.onclick = () => { const w=wins.find(x=>x.id==='settings');if(w)close(w);gallery(); };
  scroll.append(envBtn);

  // Mãos
  scroll.append(ytSection(t('hands')));
  scroll.append(ytRow(icon('user'), 'Rastreamento', 'MediaPipe nativo · câmera traseira'));
  scroll.append(ytRow(icon('edit3'), 'Desenhar mãos', 'Contorno ciano e cursor de pinça', ytToggle('handDraw')));
  scroll.append(ytRow(icon('zap'), 'Sensibilidade', 'Pinça com histerese estável'));

  // Janelas
  scroll.append(ytSection(t('windows')));
  scroll.append(ytRow(icon('maximize'), 'Tamanho', 'Escala das janelas', ytRange('winScale',.6,1.6,.05)));
  scroll.append(ytRow(icon('distance'), 'Distância', 'Distância do arco', ytRange('winDist',native?.6:1.5,native?1.8:3.4,.05)));
  scroll.append(ytRow(icon('curve'), t('curve'), 'Abertura do arco', ytRange('winCurve',0,1,.05)));
  scroll.append(ytRow(icon('curve'), t('win360'), t('win360k'), ytRange('win360K',.2,1.15,.05)));
  scroll.append(ytRow(icon('curve'), t('win360All'), 'Novas janelas curvadas', ytToggle('win360')));
  scroll.append(ytRow(icon('move'), 'Inclinação', 'Ajuste vertical das janelas', ytRange('winTilt',0,1.5,.05)));

  // Dock
  scroll.append(ytSection(t('dock')));
  scroll.append(ytRow(icon('appGrid'), 'Tamanho da dock', null, ytRange('dockSize',.7,1.5,.05)));
  scroll.append(ytRow(icon('distance'), 'Distância da dock', null, ytRange('dockDist',.7,1.5,.05)));

  // Desempenho
  scroll.append(ytSection('Desempenho'));
  const seg = el('div','yt-seg');
  for (const [id,name] of [['low','Baixa'],['auto','Automática'],['high','Alta']]) {
    const b = el('button','yt-seg-btn'); b.textContent=name; b.setAttribute('aria-pressed',S.quality===id);
    b.onclick=()=>{S.quality=id;save();emit('quality');[...seg.children].forEach(x=>x.setAttribute('aria-pressed','false'));b.setAttribute('aria-pressed','true');};
    seg.appendChild(b);
  }
  scroll.append(ytRow(icon('settings'), 'Qualidade', 'Resolução de renderização', seg));

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
      <button class="qs-tool" disabled title="Espelhamento do sistema não disponível nesta tela">${icon('cast')}<span>Espelhar</span></button>
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
      if (v > 0) { prefs.lastVolume = v; prefs.muted = false; }
      else prefs.muted = true;
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
  { id:'youtube', name:'YouTube', bg:'linear-gradient(145deg,#352020,#111115)', slug:'youtube', color:'FF0000' },
  { id:'tiktok', name:'TikTok', bg:'linear-gradient(145deg,#173035,#101014)', slug:'tiktok', color:'ffffff' },
  { id:'discord', name:'Discord', bg:'linear-gradient(145deg,#7887ff,#3e48a3)', slug:'discord', color:'ffffff' },
  { id:'twitch', name:'Twitch', bg:'linear-gradient(145deg,#b184ff,#6133b2)', slug:'twitch', color:'ffffff' },
  { id:'prime', name:'prime video', bg:'linear-gradient(145deg,#173e70,#0b172b)', html:'<span class="lx-prime">prime<b>video</b></span>' },
  { id:'whatsapp', name:'WhatsApp', bg:'linear-gradient(145deg,#59e58b,#128a48)', slug:'whatsapp', color:'ffffff' },
  { id:'instagram', name:'Instagram', bg:'linear-gradient(135deg,#feda75,#fa7e1e 30%,#d62976 60%,#962fbf 80%,#4f5bd5)', slug:'instagram', color:'ffffff', iconOnly:true },
  { id:'x', name:'X', label:'X', bg:'linear-gradient(145deg,#38383d,#070708)', slug:'x', color:'ffffff' },
  { id:'facebook', name:'Facebook', bg:'linear-gradient(145deg,#3b91ff,#1554ab)', slug:'facebook', color:'ffffff', iconOnly:true },
  { id:'telegram', name:'Telegram', bg:'linear-gradient(145deg,#69caff,#147eaf)', slug:'telegram', color:'ffffff' },
  { id:'spotify', name:'Spotify', bg:'linear-gradient(145deg,#267b50,#0b1911)', slug:'spotify', color:'1DB954' },
  { id:'browser', name:'Browser', bg:'linear-gradient(145deg,#63aaff,#3052bb)', icon:'compass' },
  { id:'store', name:'Store', bg:'linear-gradient(145deg,#ffc45c,#d96b17)', icon:'store' },
  { id:'gallery', name:'Gallery', bg:'linear-gradient(145deg,#ff8096,#bd254b)', icon:'camera' },
  { id:'settings', name:'Settings', bg:'linear-gradient(145deg,#57dfa1,#168052)', icon:'settings' },
];
const winBody = id => { const w = wins.find(x => x.id === id); return w ? w.el.querySelector('.win-body') : null; };

/* cada tile da biblioteca abre o app de verdade (o mesmo da dock) */
const LIB_ACTIONS = {
  youtube:  () => webWindow('youtube', 'YouTube', 'https://m.youtube.com/'),
  browser:  () => webWindow('browser', t('browser'), 'https://duckduckgo.com/'),
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
};

/* ---------- loja ----------
 * Sem jogos demo embutidos (a coleção demo saiu: os jogos agora vêm do PhoneXR, na Biblioteca),
 * a loja é honesta: aponta para a biblioteca e diz o que a Horizon+ não inclui.
 */
let storeTab = 'apps';
const STORE_TABS = [['apps','Apps'],['horizon','Horizon+']];

function buildStore() {
  const root = el('div', 'st');
  const tabs = STORE_TABS.map(([id, n]) => `<button class="st-tab" data-tab="${id}" aria-selected="${storeTab === id}">${n}</button>`).join('');
  let html = `<div class="st-top"><img class="st-logo-img" src="./icons/nextvr-n.png" alt="NextVR"><div class="st-tabs">${tabs}</div>`
    + `<button class="st-ava" data-ava aria-label="Perfil">${icon('user')}</button><button class="st-x" data-x aria-label="Fechar">${icon('x')}</button></div>`;

  if (storeTab === 'horizon') {
    html += `<p class="st-note">Esta loja não inclui uma assinatura Horizon+.</p>`;
  } else {
    html += `<p class="st-note">Os apps estão na biblioteca — toque no botão de 9 pontos da dock.
      Jogos de headset (PhoneXR) aparecem embarcados na Biblioteca quando o runtime os encontra.</p>
      <div class="st-row" style="max-width:340px"><button class="st-btn" data-openlib>ABRIR BIBLIOTECA</button></div>`;
  }
  root.innerHTML = html;

  root.addEventListener('click', e => {
    const q = s => e.target.closest(s);
    let m;
    if ((m = q('[data-tab]'))) { storeTab = m.dataset.tab; paintStore(); return; }
    if (q('[data-x]')) { const w = wins.find(x => x.id === 'store'); if (w) close(w); return; }
    if (q('[data-ava]')) { toast('Perfil (demonstração)'); return; }
    if (q('[data-openlib]')) { libraryApp(); return; }
  });
  return root;
}

function paintStore() {
  const host = winBody('store'); if (!host) return;
  const sc = host.querySelector('.st')?.scrollTop || 0;
  host.innerHTML = ''; host.appendChild(buildStore());
  host.querySelector('.st').scrollTop = sc;
}
function storeApp() {
  const w = wins.find(x => x.id === 'store');
  if (w) { paintStore(); focus(w); return w; }
  const body = el('div'); body.style.cssText = 'height:100%';
  const win = open({ id: 'store', title: 'Store', node: body });
  paintStore();
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
  const list = [...xrLibraryItems(), ...LIB_APPS.map(a => ({ ...a, kind: 'app' }))];
  let filtered = list;
  if (libFilter === 'games') filtered = filtered.filter(x => x.kind === 'xr');
  if (libFilter === 'apps') filtered = filtered.filter(x => x.kind === 'app');
  if (libFilter === 'recent') filtered = filtered.filter(x => libRecent.includes(x.id));
  const q = libQuery.trim().toLowerCase();
  if (q) filtered = filtered.filter(x => (x.name + ' ' + (x.label || '')).toLowerCase().includes(q));
  if (libSort === 'az') return [...filtered].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
  const rank = item => { const i = libRecent.indexOf(item.id); return i < 0 ? 1e6 : i; };
  return [...filtered].sort((a, b) => rank(a) - rank(b));
}
function appTile(a) {
  const logo = a.slug
    ? `<img class="logo" src="./icons/${a.slug}.svg" alt="" draggable="false" referrerpolicy="no-referrer" onerror="this.closest('button').classList.add('nologo');this.remove()">`
    : a.icon ? `<span class="lib-icon">${icon(a.icon)}</span>` : '';
  const mark = a.html ? a.html : logo ? logo : `<span class="nm">${a.label || a.name}</span>`;
  const cover = a.slug ? `${logo}<span class="nm fb">${a.label || a.name}</span>` : mark;
  return `<button class="lib-tile" data-app="${a.id}" aria-label="Abrir ${a.name}">`
    + `<span class="lib-cover" style="background:${a.bg}"><span class="lib-brand">${cover}</span></span>`
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
      // A headset game opens its pre-launch panel first; only Iniciar asks the native side to check
      // the runtime, hostability and Shizuku. A refusal stays visible in that panel with its reason.
      // Clicking a tile while a session is minimized re-attaches the same running game.
      const pkg = m.dataset.xr;
      if (xrHosting()) restoreXrGame();
      else openXrGameMenu(pkg);
      return;
    }
    if ((m = c('[data-app]'))) {
      const a = LIB_APPS.find(x => x.id === m.dataset.app); if (!a) return;
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
  host.innerHTML = ''; host.appendChild(buildLibrary());
  host.querySelector('.lib-scroll').scrollTop = sc;
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
  if (w) { paintLibrary(); focus(w); return w; }
  const body = el('div'); body.style.cssText = 'height:100%';
  const win = open({ id: 'library', title: t('apps'), node: body, w:1040, h:660, chrome:false, resizable:false });
  paintLibrary();
  return win;
}

/* ============ dock (compacta, com atalho de ambiente virtual) ============ */
const DK = Object.freeze({
  compass:icon('compass'), store:icon('store'), people:icon('people'),
  camera:icon('camera'), gear:icon('settings'), play:icon('play'), shizuku:icon('shizuku'),
  vision:icon('vision'),
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
    // Perfil, status do telefone, atalho do ambiente virtual no lugar do antigo recentramento e apps.
    { kind: 'avatar', id: 'profile', label: t('profile'),  run: settingsApp },
    { kind: 'status', id: 'status',  label: t('settings'), run: quickSettingsApp },
    { kind: 'tool', id: 'virtual-environment', label: t('envVirtual'), svg: DK.vision, run: toggleVirtualEnvironment },
    { kind: 'spacer' },
    // apps principais
    { id: 'browser', win: 'browser', label: t('browser'), svg: DK.compass, bg: 'linear-gradient(145deg,#5a9bff,#2a5ee0)', run: () => webWindow('browser', t('browser'), 'https://duckduckgo.com/') },
    { id: 'store',   win: 'store',   label: t('store'),   svg: DK.store,   bg: 'linear-gradient(145deg,#ffb544,#e8741a)', run: storeApp },
    { id: 'discord', win: 'discord', label: 'Discord',    svg: DK.people,  bg: 'linear-gradient(145deg,#ad82f4,#6c45c9)', run: () => webWindow('discord', 'Discord', 'https://discord.com/app') },
    { id: 'gallery', win: 'gallery', label: t('gallery'), svg: DK.camera,  bg: 'linear-gradient(145deg,#ff6584,#d4204e)', run: gallery },
    { id: 'settings', win: 'control-center', label: t('settings'), svg: DK.gear, bg: 'linear-gradient(145deg,#45d894,#1f9d63)', run: controlCenterApp },
    { id: 'youtube',  win: 'youtube',  label: 'YouTube',     svg: DK.play, bg: 'linear-gradient(145deg,#ff6b6b,#d63c3c)', run: () => webWindow('youtube', 'YouTube', 'https://m.youtube.com/') },
    // Janela dedicada do Shizuku: os apps do aparelho numa janela só deles, com o aviso do serviço.
    { id: 'shizuku', win: 'shizuku', label: t('shizuku'), svg: DK.shizuku, bg: 'linear-gradient(145deg,#4fd1c5,#1a8f87)', run: shizukuWindow },
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
  // The atlas reserves 660 content pixels per window (plus 160px padding on each side).
  const w = open({ id:'language', title:'Next VR', w:480, h:660, onboarding:true,
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

document.getElementById('btnGyro').onclick = () => startGyro();
document.getElementById('btnHand').onclick = () => (tracking() ? stopHands() : startHands());

/* status */
on('hands', v => { document.getElementById('dotHand').classList.toggle('on', !!v); });
on('gyro', v => { document.getElementById('dotGyro').classList.toggle('on', !!v); });

// Onboarding estilo Meta: sem idioma escolhido, SÓ a janelinha de idioma aparece na tela —
// a dock fica escondida (fora do atlas e fora do hit-test da mão). Depois da escolha ela volta
// inteira, com todas as funcionalidades de antes e o idioma selecionado.
makeDock();
if (S.lang) {
  setDockVisible(true);
  if (native) { startGyro(); if (S.handsOn) startHands(); }
  document.getElementById('perm').hidden = false;
  // Permissions/camera are user-gesture gated on mobile. Do not wake them on boot.
  setTimeout(() => recenter(), 280);
} else {
  setDockVisible(false);
  // Nada de chrome de status (mãos/giro/fps, ainda sem tradução) sobre a escolha de idioma.
  document.getElementById('stat').hidden = true;
  langWin = languageWindow();
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
