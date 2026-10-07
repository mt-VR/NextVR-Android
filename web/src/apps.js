// NextVR — aplicativos, menu flutuante, ambientes, idiomas e ligação geral.
import { settings as S, save, t, setLang, on, emit, toast, recenter, setEnvironment, envList, startGyro, gyroLive, native } from './core.js';
import { startHands, stopHands, tracking } from './hands.js';
import { open, close, wins, buildDock, keyboard, keyboardOpen, focusedWin, focus } from './windows.js';

const el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };
const openOut = url => { if (native) return webWindow('browser-extra', t('browser'), url); try { window.open(url, '_blank', 'noopener'); } catch { toast('Bloqueado pelo navegador'); } };

/* ============ janela com página externa (Google, Discord) ============ */
/*
 * Google e Discord mandam X-Frame-Options/CSP e recusam ser carregados
 * em iframe. Isso é do servidor deles: não há ajuste no nosso lado que contorne.
 * No app Android a mesma URL funciona, porque lá é WebView (navegador de verdade),
 * não iframe. Então: tentamos carregar, e deixamos a saída pronta se vier em branco.
 * O YouTube tem app próprio abaixo: busca via API pública + player oficial embutido.
 */
function webWindow(id, title, url, note) {
  const body = el('div'); body.style.cssText = 'display:flex;flex-direction:column;height:100%';

  const bar = el('div', 'row'); bar.style.cssText = 'padding:12px 14px;gap:10px;background:rgba(255,255,255,.04);border-bottom:1px solid var(--line)';
  const fld = el('input', 'fld'); fld.value = url; fld.placeholder = t('search');
  const go = el('button', 'go', '↵');
  const out = el('button', 'go', '↗'); out.style.background = 'rgba(255,255,255,.12)'; out.style.color = '#fff';
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
      No app Android isso funciona, porque lá é WebView. Aqui, use ↗ para abrir fora.`;
  };
  go.onclick = () => nav(fld.value);
  fld.addEventListener('keydown', e => { if (e.key === 'Enter') nav(fld.value); });
  fld.addEventListener('focus', () => keyboard(true, fld));
  out.onclick = () => openOut(fld.value);
  nav(url);

  return open({ id, title, node: body });
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

/* ---------- player com som: API oficial + destrave por toque real ---------- */
let ytPlayer = null, ytApiPromise = null;

/**
 * O navegador só libera áudio depois de uma interação REAL do usuário. Como o
 * pinch é sintetizado, ele não conta. Então usamos a API do IFrame para forçar
 * `unMute()` e refazemos isso a cada toque real na tela.
 */
function ytUnmute() {
  try {
    if (ytPlayer && ytPlayer.unMute) { ytPlayer.unMute(); ytPlayer.setVolume && ytPlayer.setVolume(100); }
  } catch {}
}
['pointerdown', 'touchstart', 'keydown'].forEach(ev =>
  addEventListener(ev, () => setTimeout(ytUnmute, 0), { capture: true })
);

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
  const back = el('button', 'go', '←'); back.style.display = 'none';
  const fld = el('input', 'fld'); fld.placeholder = 'Pesquisar no YouTube ou colar link';
  const go = el('button', 'go', '🔎');
  const out = el('button', 'go', '↗'); out.style.background = 'rgba(255,255,255,.12)'; out.style.color = '#fff';
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
    scroll.innerHTML = `<div class="yt-err"><div style="font-size:46px">📡</div>`
      + `<div class="yt-err-t">Sem conexão com a busca</div>`
      + `<div class="yt-err-s">Verifique a internet e tente de novo. Dá para colar um link direto também.</div>`
      + `<button class="yt-btn" data-retry>↻ TENTAR DE NOVO</button></div>`;
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
            <button class="yt-btn" data-back>← VOLTAR</button>
            <button class="yt-btn" data-snd>🔊 ATIVAR SOM</button>
            <button class="yt-btn" data-out>ABRIR ↗</button>
          </div>
          <p class="yt-pchan" style="margin-top:10px">Sem som? Dê um toque na tela do celular uma vez —
          o navegador só libera áudio depois de um toque real.</p>
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

/* ============ Galeria ============ */
let photos = [];
function gallery() {
  const body = el('div', 'pad');
  const head = el('div');
  head.innerHTML = `<h2>${t('gallery')}</h2><p class="sub">${t('photosHelp')}</p>`;
  const pick = el('button', 'go', t('pickPhotos'));
  const input = el('input'); input.type = 'file'; input.accept = 'image/*'; input.multiple = true; input.style.display = 'none';
  const grid = el('div', 'grid4'); grid.style.marginTop = '20px';
  const big = el('div'); big.style.cssText = 'margin-top:18px';

  const paint = () => {
    grid.innerHTML = '';
    if (!photos.length) { grid.innerHTML = `<p class="sub" style="grid-column:1/-1">${t('noPhotos')}</p>`; return; }
    photos.forEach((p, i) => {
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
  body.append(head, pick, input, grid, big);
  body.append(el('p', 'note', 'Na web, o Android pede as fotos pelo seletor do sistema — é a forma correta e não precisa de permissão extra. No app Android use READ_MEDIA_IMAGES e liste direto no MediaStore.'));
  return open({ id: 'gallery', title: t('gallery'), node: body });
}

/* ============ Ambientes ============ */
function environments() {
  const body = el('div', 'pad');
  body.innerHTML = `<h2>${t('env')}</h2><p class="sub">Troque sem fechar nada.</p>`;
  const g = el('div', 'grid3');
  for (const e of envList()) {
    const b = el('button', 'env');
    b.style.background = `linear-gradient(160deg,#${e.top.toString(16).padStart(6,'0')},#${e.bot.toString(16).padStart(6,'0')})`;
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
function toggle(key, after) {
  const b = el('button', 'sw'); b.dataset.on = S[key] ? '1' : '0';
  b.onclick = () => { S[key] = S[key] ? 0 : 1; b.dataset.on = S[key] ? '1' : '0'; save(); after && after(S[key]); };
  return b;
}
function slider(key, min, max, step, after) {
  const i = el('input'); i.type = 'range'; i.min = min; i.max = max; i.step = step; i.value = S[key];
  i.oninput = () => { S[key] = +i.value; save(); after && after(S[key]); };
  return i;
}
function settingsApp() {
  const body = el('div'); body.style.cssText = 'display:flex;flex-direction:column;height:100%';
  const tabs = el('div', 'tabs'); tabs.style.padding = '18px 24px 0';
  const page = el('div', 'pad'); page.style.paddingTop = '6px';
  body.append(tabs, page);

  const TABS = [
    [t('general'), () => {
      page.innerHTML = `<h2>${t('general')}</h2><p class="sub">Next VR · shell XR para Android</p>`;
      const c = el('div', 'card');
      const seg = el('div', 'seg');
      for (const [id, name] of [['pt','🇧🇷 Português'],['en','🇺🇸 English'],['es','🇪🇸 Español']]) {
        const b = el('button', null, name); b.setAttribute('aria-pressed', S.lang === id);
        b.onclick = () => { setLang(id); toast(t('langChanged')); rebuild(); };
        seg.appendChild(b);
      }
      c.append(row(t('language'), 'Muda a interface na hora', seg));
      c.append(row('FPS', 'Mostrar contador', toggle('showFps')));
      page.append(c);
      page.append(el('p', 'note', 'Shizuku: abrir apps Android instalados só existe no app nativo. Nesta versão web o navegador não tem como iniciar outro app.'));
    }],
    [t('hands'), () => {
      page.innerHTML = `<h2>${t('hands')}</h2><p class="sub">Câmera traseira, MediaPipe.</p>`;
      const c = el('div', 'card');
      c.append(row(t('on'), 'Rastrear as mãos', toggle('handsOn', v => v ? startHands() : stopHands())));
      c.append(row(t('sens'), 'PhoneXR: native landmark and pointer filters', el('span', 'note', 'OrangeHanding / One Euro')));
      c.append(row('Desenhar mãos', 'PhoneXR silhouettes over windows', toggle('handDraw')));
      c.append(row('Pinch', 'PhoneXR: fist guard + palm-width hysteresis', el('span', 'note', '0.32 / 0.50')));
      page.append(c);
    }],
    [t('windows'), () => {
      page.innerHTML = `<h2>${t('windows')}</h2><p class="sub">As janelas ficam fixas no ambiente.</p>`;
      const c = el('div', 'card');
      c.append(row(t('curve'), '1 = encara o centro; menor = mais aberta', slider('winCurve', 0, 1, .05)));
      c.append(row('Inclinação', 'Ajuste vertical ao subir/descer', slider('winTilt', 0, 1.5, .05)));
      c.append(row(t('scale'), 'Tamanho das janelas', slider('winScale', .6, 1.6, .05)));
      c.append(row(t('dist'), 'Distância do arco', slider('winDist', 1.5, 3.4, .1)));
      page.append(c);
    }],
    [t('dock'), () => {
      page.innerHTML = `<h2>${t('dock')}</h2><p class="sub">No modo paisagem a dock chega mais perto.</p>`;
      const c = el('div', 'card');
      c.append(row(t('size'), null, slider('dockSize', .7, 1.5, .05)));
      c.append(row(t('dist'), null, slider('dockDist', .7, 1.5, .05)));
      page.append(c);
    }],
    [t('env'), () => { page.innerHTML = ''; page.append(el('h2', null, t('env')));
      const g = el('div', 'grid3');
      for (const e of envList()) {
        const b = el('button', 'env');
        b.style.background = `linear-gradient(160deg,#${e.top.toString(16).padStart(6,'0')},#${e.bot.toString(16).padStart(6,'0')})`;
        b.innerHTML = `<span>${e.name}</span>`; b.setAttribute('aria-pressed', S.env === e.id);
        b.onclick = () => { setEnvironment(e.id); [...g.children].forEach(c => c.setAttribute('aria-pressed','false')); b.setAttribute('aria-pressed','true'); };
        g.appendChild(b);
      }
      page.append(g);
    }],
    [t('perf'), () => {
      page.innerHTML = `<h2>${t('perf')}</h2><p class="sub">Celular esquentando? Baixe a qualidade.</p>`;
      const c = el('div', 'card');
      const seg = el('div', 'seg');
      for (const [id, name] of [['low','Baixa'],['auto','Automática'],['high','Alta']]) {
        const b = el('button', null, name); b.setAttribute('aria-pressed', S.quality === id);
        b.onclick = () => { S.quality = id; save(); emit('quality'); [...seg.children].forEach(x => x.setAttribute('aria-pressed','false')); b.setAttribute('aria-pressed','true'); };
        seg.appendChild(b);
      }
      c.append(row(t('quality'), 'Resolução de renderização', seg));
      page.append(c);
      page.append(el('p','note','O hand tracking roda a ~22 Hz, separado do render, para não derrubar o fps.'));
    }],
  ];
  let cur = 0;
  function rebuild() {
    tabs.innerHTML = '';
    TABS.forEach(([name], i) => {
      const b = el('button', null, name); b.setAttribute('aria-selected', i === cur);
      b.onclick = () => { cur = i; rebuild(); };
      tabs.appendChild(b);
    });
    TABS[cur][1]();
  }
  rebuild();
  return open({ id: 'settings', title: t('settings'), node: body });
}

/* ============ Loja + Biblioteca (igual aos prints) ============ */
const LS_INST = 'nextvr.store.installed.v1', LS_FAV = 'nextvr.store.favs.v1', LS_REC = 'nextvr.lib.recent.v1';
const loadArr = k => { try { const v = JSON.parse(localStorage.getItem(k)); return Array.isArray(v) ? v : []; } catch { return []; } };
let installed = loadArr(LS_INST), favs = loadArr(LS_FAV), libRecent = loadArr(LS_REC);
const persistShop = () => { try {
  localStorage.setItem(LS_INST, JSON.stringify(installed));
  localStorage.setItem(LS_FAV, JSON.stringify(favs));
  localStorage.setItem(LS_REC, JSON.stringify(libRecent));
} catch {} };
const downloading = {};

const GAMES = [
  { id:'vrfs', name:'VRFS', label:'VRFS', cat:'Games · Sports · Futebol',
    img:'https://i.ytimg.com/vi/FxkDg2NGzqw/hqdefault.jpg',
    bg:'linear-gradient(160deg,#1d7a4b,#0c3a2b)',
    badge:'<span style="background:#e11d2e;border-radius:10px;padding:10px 24px;font-size:32px;font-weight:900;box-shadow:0 4px 18px #0009">VRFS</span>',
    mark:'<span style="font-size:34px;font-weight:900;font-style:italic;letter-spacing:-1px;text-shadow:0 2px 8px #0008">VRFS</span>' },
  { id:'minecraft', name:'Minecraft VR', label:'MINECRAFT', cat:'Games · Sandbox · Aventura',
    img:'https://minecraft.wiki/images/thumb/MC_key_art.png/800px-MC_key_art.png',
    bg:'linear-gradient(180deg,#6cb04a 0 30%,#7a5230 30%)', badge:'',
    mark:'<span style="font-size:23px;font-weight:900;letter-spacing:1px;text-shadow:0 2px 0 #222">MINECRAFT</span>' },
  { id:'roblox', name:'Roblox VR', label:'ROBLOX', cat:'Games · Social · Multiplayer',
    img:'', phones:true, bg:'linear-gradient(145deg,#23232c,#101014)', badge:'',
    mark:'<span style="display:flex;align-items:center;gap:8px"><span style="width:34px;height:34px;background:#fff;border-radius:8px;transform:rotate(-8deg);display:grid;place-items:center"><span style="width:13px;height:13px;background:#c81e2b;border-radius:3px"></span></span><span style="font-size:24px;font-weight:900">ROBLOX</span></span>' },
  { id:'brawl', name:'Brawl Stars VR', label:'BRAWL STARS', cat:'Games · Ação · Multiplayer',
    img:'https://supercell.com/images/1a5b69311180a4a1c374e10556941f05/790/hero_bg_brawlstars.a385872a.webp',
    bg:'linear-gradient(115deg,#ffd02e 0 50%,#1280ff 50%)', badge:'',
    mark:'<span style="font-size:21px;font-weight:900;color:#111;text-shadow:0 1px 0 #fff">BRAWL<br>STARS ★</span>' },
];
const gameById = id => GAMES.find(g => g.id === id);

/* apps da biblioteca, mesmas imagens/cores do print */
const LIB_APPS = [
  { id:'netflix', name:'Netflix', bg:'#0b0b0d', html:'<span class="lx-netflix">NETFLIX</span>' },
  { id:'youtube', name:'YouTube', bg:'#1e1e22', slug:'youtube', color:'FF0000' },
  { id:'tiktok', name:'TikTok', bg:'#0b0b0d', slug:'tiktok', color:'ffffff' },
  { id:'discord', name:'Discord', bg:'#5865F2', slug:'discord', color:'ffffff' },
  { id:'twitch', name:'Twitch', bg:'#9146FF', slug:'twitch', color:'ffffff' },
  { id:'prime', name:'prime video', bg:'#0f2347', html:'<span class="lx-prime">prime<b>video</b></span>' },
  { id:'pluto', name:'pluto tv', bg:'#0b0b0d', html:'<span class="lx-pluto">pluto<i>tv</i></span>' },
  { id:'whatsapp', name:'WhatsApp', bg:'#25D366', slug:'whatsapp', color:'ffffff' },
  { id:'instagram', name:'Instagram', bg:'linear-gradient(135deg,#feda75,#fa7e1e 30%,#d62976 60%,#962fbf 80%,#4f5bd5)', slug:'instagram', color:'ffffff', iconOnly:true },
  { id:'x', name:'X Twitter', label:'Twitter', bg:'#000000', slug:'x', color:'ffffff' },
  { id:'facebook', name:'Facebook', bg:'#1877F2', slug:'facebook', color:'ffffff', iconOnly:true },
  { id:'telegram', name:'Telegram', bg:'#229ED9', slug:'telegram', color:'ffffff' },
  { id:'spotify', name:'Spotify', bg:'#101012', slug:'spotify', color:'1DB954' },
];
/* ordem padrão = a do print (jogos entram no meio quando baixados) */
const LIB_ORDER = ['netflix','youtube','vrfs','tiktok','minecraft','roblox','brawl','discord','twitch','prime','pluto','whatsapp','instagram','x','facebook','telegram','spotify'];

const winBody = id => { const w = wins.find(x => x.id === id); return w ? w.el.querySelector('.win-body') : null; };

/* cada tile da biblioteca abre o app de verdade (o mesmo da dock) */
const LIB_ACTIONS = {
  youtube:  () => youtube(),
  discord:  () => webWindow('discord',   'Discord',      'https://discord.com/app'),
  netflix:  () => webWindow('netflix',   'Netflix',      'https://www.netflix.com/'),
  tiktok:   () => webWindow('tiktok',    'TikTok',       'https://www.tiktok.com/'),
  twitch:   () => webWindow('twitch',    'Twitch',       'https://www.twitch.tv/'),
  prime:    () => webWindow('prime',     'prime video',  'https://www.primevideo.com/'),
  pluto:    () => webWindow('pluto',     'pluto tv',     'https://pluto.tv/'),
  whatsapp: () => webWindow('whatsapp',  'WhatsApp',     'https://web.whatsapp.com/'),
  instagram:() => webWindow('instagram', 'Instagram',    'https://www.instagram.com/'),
  x:        () => webWindow('x',         'X Twitter',    'https://x.com/'),
  facebook: () => webWindow('facebook',  'Facebook',     'https://www.facebook.com/'),
  telegram: () => webWindow('telegram',  'Telegram',     'https://web.telegram.org/'),
  spotify:  () => webWindow('spotify',   'Spotify',      'https://open.spotify.com/'),
};

/* ---------- loja ---------- */
let storeTab = 'home';
const STORE_TABS = [['home','Home'],['games','Games'],['apps','Apps'],['horizon','Horizon+'],['wish','Wish']];

function robloxPhones() {
  const ph = () => `<div style="width:96px;height:172px;background:#14141b;border-radius:10px;border:1px solid #383845;padding:9px;display:flex;flex-direction:column;gap:6px">`
    + `<div style="height:9px;background:#33333f;border-radius:4px"></div>`
    + `<div style="height:9px;background:#33333f;border-radius:4px;width:70%"></div>`
    + `<div style="margin-top:auto;height:46px;background:linear-gradient(145deg,#c81e2b,#6f0f18);border-radius:7px"></div></div>`;
  return `<div style="display:flex;gap:10px">${ph()}${ph()}${ph()}</div>`;
}

function coverArt(g) {
  const img = g.img ? `<img class="cov" src="${g.img}" alt="" referrerpolicy="no-referrer" draggable="false" onerror="this.remove()">` : '';
  const art = g.phones ? robloxPhones() : (g.badge || '');
  return `<div class="st-cover" style="background:${g.bg}">${img}<div class="art">${art}</div>`
    + (installed.includes(g.id) ? `<span class="st-inst">INSTALADO</span>` : '')
    + `<span class="st-vr">VR</span><span class="st-clabel">${g.label}</span></div>`;
}
function thumbArt(g) {
  const img = g.img ? `<img src="${g.img}" alt="" referrerpolicy="no-referrer" draggable="false" onerror="this.remove()">` : '';
  const inner = g.id === 'roblox'
    ? `<span style="width:30px;height:30px;background:#fff;border-radius:7px;transform:rotate(-8deg);display:grid;place-items:center"><span style="width:12px;height:12px;background:#c81e2b;border-radius:3px"></span></span>`
    : (g.id === 'vrfs' ? '' : `<span style="font-weight:900;font-size:13px;text-align:center;line-height:1.1">${g.label}</span>`);
  return `<span class="st-thumb" style="background:${g.bg}">${img}${inner}</span>`;
}

function gameCard(g) {
  const done = installed.includes(g.id), pct = downloading[g.id];
  const busy = pct !== undefined;
  const fav = favs.includes(g.id);
  const btns = done
    ? `<button class="st-btn" data-open="${g.id}">ABRIR</button><button class="st-btn" data-rm="${g.id}">REMOVER</button>`
    : `<button class="st-btn" data-dl="${g.id}" ${busy ? 'disabled' : ''}>${busy ? 'BAIXANDO ' + Math.round(pct) + '%' : 'ADICIONAR À BIBLIOTECA'}</button>`;
  return `<article class="st-card" data-card="${g.id}">${coverArt(g)}
    <div class="st-name">${g.name}</div><div class="st-meta">${g.cat}</div>
    <div class="st-sub">${done ? 'Na biblioteca de apps' : 'Toque para ver e baixar'}</div>
    <div class="st-row" style="justify-content:flex-end"><button class="st-heart${fav ? ' on' : ''}" data-fav="${g.id}" aria-label="Favorito">♡</button></div>
    <div class="st-row">${btns}</div></article>`;
}

function buildStore() {
  const root = el('div', 'st');
  const tabs = STORE_TABS.map(([id, n]) => `<button class="st-tab" data-tab="${id}" aria-selected="${storeTab === id}">${n}</button>`).join('');
  let html = `<div class="st-top"><span class="st-logo">∞</span><div class="st-tabs">${tabs}</div>`
    + `<button class="st-ava" data-ava>🙂</button><button class="st-x" data-x>✕</button></div>`;

  if (storeTab === 'apps') {
    html += `<p class="st-note">Os apps estão na biblioteca — toque no botão de 9 pontos da dock.</p>
      <div class="st-row" style="max-width:340px"><button class="st-btn" data-openlib>ABRIR BIBLIOTECA</button></div>`;
  } else if (storeTab === 'horizon') {
    html += `<p class="st-note">Esta loja não inclui uma assinatura Horizon+.</p>`;
  } else if (storeTab === 'wish') {
    const list = GAMES.filter(g => favs.includes(g.id));
    html += list.length
      ? `<div class="st-sec"><h3>Lista de desejos</h3></div><div class="st-cards">${list.map(gameCard).join('')}</div>`
      : `<p class="st-note">Toque no ♡ de um jogo para salvar aqui.</p>`;
  } else {
    const rank = GAMES.map((g, i) => `<button class="st-ri" data-rank="${g.id}">${thumbArt(g)}
      <span><span class="st-rk">${i + 1}. ${g.name}</span><div class="st-cat">${g.cat}</div>
      <div class="st-st">${installed.includes(g.id) ? 'Na biblioteca de apps' : 'Toque para ver e baixar'}</div></span></button>`).join('');
    const cards = GAMES.map(gameCard).join('');
    const title = storeTab === 'games' ? 'Todos os jogos' : 'Jogos para você';
    html += `<div class="st-rank">${rank}</div><div class="st-sec"><h3>${title}</h3>`
      + (storeTab === 'home' ? `<button data-all>Ver todos</button>` : '') + `</div>`
      + `<div class="st-cards">${cards}</div>`;
  }
  root.innerHTML = html;

  root.addEventListener('click', e => {
    const q = s => e.target.closest(s);
    let m;
    if ((m = q('[data-tab]'))) { storeTab = m.dataset.tab; paintStore(); return; }
    if (q('[data-x]')) { const w = wins.find(x => x.id === 'store'); if (w) close(w); return; }
    if (q('[data-ava]')) { toast('Perfil (demonstração)'); return; }
    if (q('[data-all]')) { storeTab = 'games'; paintStore(); return; }
    if (q('[data-openlib]')) { libraryApp(); return; }
    if ((m = q('[data-rank]'))) { root.querySelector(`[data-card="${m.dataset.rank}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'center' }); return; }
    if ((m = q('[data-fav]'))) {
      const id = m.dataset.fav;
      favs = favs.includes(id) ? favs.filter(x => x !== id) : [...favs, id];
      persistShop(); paintStore(); return;
    }
    if ((m = q('[data-dl]'))) { startDownload(m.dataset.dl); return; }
    if ((m = q('[data-rm]'))) { removeGame(m.dataset.rm); return; }
    if ((m = q('[data-open]'))) { const g = gameById(m.dataset.open); toast(`Abrindo ${g.name}… (demonstração)`); touchLib(g.id); return; }
  });
  return root;
}

function paintStore() {
  const host = winBody('store'); if (!host) return;
  const sc = host.querySelector('.st')?.scrollTop || 0;
  host.innerHTML = ''; host.appendChild(buildStore());
  host.querySelector('.st').scrollTop = sc;
}
function paintProgress(id) {
  const host = winBody('store'); if (!host) return;
  host.querySelectorAll(`[data-dl="${id}"]`).forEach(b => { b.textContent = 'BAIXANDO ' + Math.round(downloading[id] || 0) + '%'; });
}
function storeApp() {
  const w = wins.find(x => x.id === 'store');
  if (w) { paintStore(); focus(w); return w; }
  const body = el('div'); body.style.cssText = 'height:100%';
  const win = open({ id: 'store', title: 'Store', node: body });
  paintStore();
  return win;
}

function startDownload(id) {
  if (downloading[id] !== undefined || installed.includes(id)) return;
  downloading[id] = 0; paintStore();
  const g = gameById(id);
  toast('Baixando ' + g.name + '…');
  const timer = setInterval(() => {
    downloading[id] = Math.min(100, downloading[id] + 6 + Math.random() * 11);
    if (downloading[id] < 100) { paintProgress(id); return; }
    clearInterval(timer); delete downloading[id];
    if (!installed.includes(id)) installed.push(id);
    touchLib(id, true); persistShop(); paintStore(); paintLibrary();
    toast(g.name + ' foi para a biblioteca de apps ✓');
  }, 170);
}
function removeGame(id) {
  installed = installed.filter(x => x !== id);
  libRecent = libRecent.filter(x => x !== id);
  persistShop(); paintStore(); paintLibrary();
  toast(gameById(id).name + ' removido da biblioteca');
}

/* ---------- biblioteca ---------- */
let libSort = 'recent', libFilter = 'all', libQuery = '';
function touchLib(id, silent) {
  libRecent = [id, ...libRecent.filter(x => x !== id)].slice(0, 40);
  persistShop(); if (!silent) paintLibrary();
}
function libItems() {
  const games = GAMES.filter(g => installed.includes(g.id)).map(g => ({ ...g, kind: 'game' }));
  const apps = LIB_APPS.map(a => ({ ...a, kind: 'app' }));
  let list = [...games, ...apps];
  const ord = id => { const i = LIB_ORDER.indexOf(id); return i < 0 ? 99 : i; };
  list.sort((a, b) => ord(a.id) - ord(b.id));
  if (libFilter === 'games') list = list.filter(x => x.kind === 'game');
  if (libFilter === 'apps') list = list.filter(x => x.kind === 'app');
  const q = libQuery.trim().toLowerCase();
  if (q) list = list.filter(x => (x.name + ' ' + (x.label || '')).toLowerCase().includes(q));
  if (libSort === 'az') return [...list].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
  if (!libRecent.length) return list;
  const rank = id => { const i = libRecent.indexOf(id); return i < 0 ? 1e6 : i; };
  return [...list].sort((a, b) => rank(a.id) - rank(b.id));
}
function appTile(a) {
  const logo = a.slug
    ? `<img class="logo" src="./icons/${a.slug}.svg" alt="" draggable="false" referrerpolicy="no-referrer" onerror="this.closest('button').classList.add('nologo');this.remove()">` : '';
  const text = a.html ? a.html : `<span class="nm${a.iconOnly ? ' fb' : ''}">${a.label || a.name}</span>`;
  return `<button class="lib-tile" data-app="${a.id}" style="background:${a.bg}">${logo}${text}</button>`;
}
function gameTile(g) {
  return `<button class="lib-tile game" data-game="${g.id}" style="background:${g.bg}">`
    + `<span class="lib-art">${g.mark}</span><span class="lib-vr">VR</span><span class="lib-gname">${g.name}</span></button>`;
}
function buildLibrary() {
  const list = libItems();
  const root = el('div', 'lib');
  const fLabel = libFilter === 'games' ? 'Jogos' : libFilter === 'apps' ? 'Apps' : 'Todas';
  root.innerHTML = `<div class="lib-head"><h2 class="lib-title">Apps</h2>
      <button class="lib-sbtn" data-s>🔍︎</button>
      <input class="lib-search" data-q placeholder="Buscar" value="${libQuery.replace(/"/g, '&quot;')}">
      <span style="flex:1"></span>
      <button class="lib-pill" data-sort>${libSort === 'az' ? 'A–Z' : 'Recentes'} ▾</button>
      <button class="lib-pill" data-filter>${fLabel} (${list.length}) ▾</button></div>
    <div class="lib-scroll"><div class="lib-grid">${
      list.map(x => x.kind === 'game' ? gameTile(x) : appTile(x)).join('')
    }</div>
    ${list.length ? '' : `<div class="lib-empty">${libFilter === 'games' ? 'Nenhum jogo baixado ainda. Baixe um na loja.' : 'Nenhum app encontrado.'}</div>`}
    <p class="lib-note">Tocar abre o app dentro de uma janela do NextVR. Sites que bloqueiam
    incorporação mostram o aviso e o botão ↗ para abrir fora. Os 4 jogos VR são demonstração:
    eles abrem no APK Android.</p></div>
    <div class="lib-bottom"><button data-x aria-label="Fechar">✕</button>
      <button data-top aria-label="Topo">–</button><span>Apps</span>
      <button data-az aria-label="Ordenar">•••</button></div>`;

  const q = root.querySelector('[data-q]');
  if (libQuery || root.querySelector('[data-q]').value) q.classList.add('open');
  q.addEventListener('input', () => { libQuery = q.value; paintLibrary(true); const nq = winBody('library')?.querySelector('[data-q]'); if (nq) { nq.focus(); nq.setSelectionRange(nq.value.length, nq.value.length); } });
  q.addEventListener('focus', () => keyboard(true, q));

  root.addEventListener('click', e => {
    const c = s => e.target.closest(s);
    let m;
    if (c('[data-s]')) { const i = root.querySelector('[data-q]'); i.classList.toggle('open'); if (i.classList.contains('open')) i.focus(); else { libQuery = ''; i.value = ''; paintLibrary(); } return; }
    if (c('[data-sort]')) { libSort = libSort === 'az' ? 'recent' : 'az'; paintLibrary(); return; }
    if (c('[data-filter]')) { libFilter = libFilter === 'all' ? 'games' : libFilter === 'games' ? 'apps' : 'all'; paintLibrary(); return; }
    if (c('[data-x]')) { const w = wins.find(x => x.id === 'library'); if (w) close(w); return; }
    if (c('[data-top]')) { root.querySelector('.lib-scroll').scrollTo({ top: 0, behavior: 'smooth' }); return; }
    if (c('[data-az]')) { libSort = libSort === 'az' ? 'recent' : 'az'; paintLibrary(); return; }
    if ((m = c('[data-game]'))) { const g = gameById(m.dataset.game); touchLib(g.id); toast(`Abrindo ${g.name}… (demonstração)`); return; }
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
function libraryApp() {
  const w = wins.find(x => x.id === 'library');
  if (w) { paintLibrary(); focus(w); return w; }
  const body = el('div'); body.style.cssText = 'height:100%';
  const win = open({ id: 'library', title: t('apps'), node: body });
  paintLibrary();
  return win;
}

/* ============ dock (mesma ordem do print) ============ */
const DK_SVG = (inner, fill) => `<svg viewBox="0 0 24 24" fill="${fill || 'none'}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
const DK = {
  bell:    DK_SVG('<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.6 2H4.4z"/><path d="M10 21a2 2 0 0 0 4 0"/>'),
  kb:      DK_SVG('<rect x="3" y="6.5" width="18" height="11" rx="2.6"/><path d="M7 10.4h.01M10.4 10.4h.01M13.8 10.4h.01M17.2 10.4h.01M7.6 14h8.8"/>'),
  center:  DK_SVG('<circle cx="12" cy="12" r="3.3"/><path d="M12 3v3.6M12 17.4V21M3 12h3.6M17.4 12H21"/>'),
  compass: DK_SVG('<circle cx="12" cy="12" r="9"/><path d="m15.8 8.2-2.2 5.4-5.4 2.2 2.2-5.4z" fill="currentColor" stroke="none"/>'),
  store:   DK_SVG('<path d="M4 9.2 5.6 4h12.8L20 9.2"/><path d="M4.6 9.2V20h14.8V9.2"/><path d="M4 9.2c0 1.9 1.6 2.4 2.7 2.4s2.7-.5 2.7-2.4c0 1.9 1.2 2.4 2.6 2.4s2.7-.5 2.7-2.4c0 1.9 1.4 2.4 2.7 2.4S20 11.1 20 9.2"/><path d="M10 20v-5h4v5"/>'),
  people:  DK_SVG('<circle cx="9" cy="9" r="3"/><path d="M3.6 19c0-3.1 2.4-5 5.4-5s5.4 1.9 5.4 5"/><circle cx="17" cy="10" r="2.4"/><path d="M16.2 14.2c2.6 0 4.4 1.6 4.4 4.3"/>'),
  camera:  DK_SVG('<path d="M4 8.2h3.1L8.6 6h6.8l1.5 2.2H20V19H4z"/><circle cx="12" cy="13.4" r="3.4"/>'),
  gear:    DK_SVG('<circle cx="12" cy="12" r="2.6"/><circle cx="12" cy="12" r="7.4" stroke-width="2.7" stroke-dasharray="2.5 3.1"/><circle cx="12" cy="12" r="5.4"/>'),
  play:    DK_SVG('<rect x="3" y="6" width="18" height="12" rx="3.6"/><path d="M10.2 9.4v5.2l4.6-2.6z" fill="currentColor" stroke="none"/>'),
};

function makeDock() {
  buildDock([
    // grupo da esquerda: perfil, status real (hora/wifi/bateria) e ferramentas
    { kind: 'avatar', id: 'profile', label: t('profile'),  run: settingsApp },
    { kind: 'status', id: 'status',  label: t('settings'), run: settingsApp },
    { kind: 'tool',   id: 'bell',    label: t('notif'),    svg: DK.bell,   run: () => toast(t('noNotif')) },
    { kind: 'tool',   id: 'kb',      label: t('keyboard'), svg: DK.kb,     run: () => keyboard(!keyboardOpen(), null) },
    { kind: 'tool',   id: 'center',  label: t('center'),   svg: DK.center, run: () => recenter() },
    { kind: 'sep' },
    // apps principais (cores do print: azul, laranja, roxo, rosa)
    { id: 'browser', win: 'browser', label: t('browser'), svg: DK.compass, bg: 'linear-gradient(145deg,#5a9bff,#2a5ee0)', run: () => webWindow('browser', t('browser'), 'https://duckduckgo.com/') },
    { id: 'store',   win: 'store',   label: t('store'),   svg: DK.store,   bg: 'linear-gradient(145deg,#ffb544,#e8741a)', run: storeApp },
    { id: 'discord', win: 'discord', label: 'Discord',    svg: DK.people,  bg: 'linear-gradient(145deg,#ad82f4,#6c45c9)', run: () => webWindow('discord', 'Discord', 'https://discord.com/app') },
    { id: 'gallery', win: 'gallery', label: t('gallery'), svg: DK.camera,  bg: 'linear-gradient(145deg,#ff6584,#d4204e)', run: gallery },
    { kind: 'sep' },
    // segundo grupo (verde e vermelho do print)
    { id: 'settings', win: 'settings', label: t('settings'), svg: DK.gear, bg: 'linear-gradient(145deg,#45d894,#1f9d63)', run: settingsApp },
    { id: 'youtube',  win: 'youtube',  label: 'YouTube',     svg: DK.play, bg: 'linear-gradient(145deg,#ff6b6b,#d63c3c)', run: youtube },
    // lançador de 9 pontos: sempre o último, abre a biblioteca
    { id: 'library', win: 'library', launcher: true, label: t('apps'), run: libraryApp },
  ]);
}
on('lang', makeDock);

/* ============ primeira execução ============ */
const boot = document.getElementById('boot');
const bootGo = document.getElementById('bootGo');
let langWin = null;

// A tela preta antiga não aparece mais: idioma é uma janela flutuante 3D única.
boot.hidden = true;

function languageWindow() {
  const body = el('div', 'langwin');
  body.innerHTML = `<h1>Escolha seu idioma</h1>
    <p>Choose your language · Elige tu idioma</p>
    <div class="lang-options" role="list">
      <button class="lang-option" data-lang="pt"><b>🇧🇷</b><span>Português</span></button>
      <button class="lang-option" data-lang="en"><b>🇺🇸</b><span>English</span></button>
      <button class="lang-option" data-lang="es"><b>🇪🇸</b><span>Español</span></button>
    </div>
    <div class="lang-status">A janela desaparece depois da escolha.</div>`;
  body.querySelectorAll('[data-lang]').forEach(b => b.onclick = () => finishLanguage(b.dataset.lang));
  const w = open({ id:'language', title:'Next VR', node:body, w:760, h:520 });
  // No language means no normal shell yet: the only close path is choosing a language.
  w.el.querySelector('[data-act="close"]')?.remove();
  return w;
}

async function finishLanguage(lang) {
  setLang(lang);                                  // atualiza dock, menu e todas as telas
  if (langWin) { close(langWin); langWin = null; }
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

// Dock existe por baixo da janela inicial; só os apps aparecem após a seleção.
makeDock();
if (S.lang) {
  if (native) { startGyro(); if (S.handsOn) startHands(); }
  document.getElementById('perm').hidden = false;
  // Permissions/camera are user-gesture gated on mobile. Do not wake them on boot.
  setTimeout(() => recenter(), 280);
} else {
  langWin = languageWindow();
}

if (native) {
  // Native owns permission/lifecycle; a page gesture must not open another camera stream.
  document.getElementById('perm').hidden = true;
  window.nextvrResume = () => { startGyro(); if (S.handsOn) startHands(); };
  window.nextvrSuspend = () => stopHands();
  on('hands', () => { document.getElementById('perm').hidden = true; });
}

// PhoneXR palm gestures use the existing reference shell, not a second launcher theme.
on('phone-library', () => { const w=wins.find(w=>w.id==='library');if(w)close(w);else libraryApp(); });
on('phone-menu', () => {
  const existing=wins.find(w=>w.id==='hand-menu');if(existing){close(existing);return;}
  const body=el('div','pad');body.append(el('h2',null,'NextVR'));
  for(const [label,run] of [[t('center'),recenter],[t('apps'),libraryApp],[t('settings'),settingsApp]]) {
    const button=el('button','go',label);button.style.margin='12px';button.onclick=run;body.append(button);
  }
  open({id:'hand-menu',title:'NextVR',node:body,w:760,h:420});
});
