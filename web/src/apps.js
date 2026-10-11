// NextVR — aplicativos, menu flutuante, ambientes, idiomas e ligação geral.
import { settings as S, save, t, setLang, on, emit, toast, recenter, setEnvironment, envList, startGyro, gyroLive, native, css3d } from './core.js';
import { startHands, stopHands, tracking } from './hands.js';
import { open, close, wins, buildDock, keyboard, keyboardOpen, focusedWin, focus, setDockVisible } from './windows.js';
import { icon } from './reference-icons.js';

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
function webWindow(id, title, url, note) {
  const body = el('div'); body.style.cssText = 'display:flex;flex-direction:column;height:100%';

  const bar = el('div', 'row'); bar.style.cssText = 'padding:12px 14px;gap:10px;background:rgba(255,255,255,.04);border-bottom:1px solid var(--line)';
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
      c.append(row(t('on'), 'Única entrada da interface VR', el('span', 'note', 'Sempre ativo')));
      c.append(row(t('sens'), 'MediaPipe nativo · câmera traseira', el('span', 'note', '2 mãos · 21 landmarks')));
      c.append(row('Desenhar mãos', 'Contorno ciano e cursor de pinça', toggle('handDraw')));
      c.append(row('Pinch', 'Entrada nativa estável com histerese', el('span', 'note', '0.30 / 0.48')));
      // A/B de motores: troca em tempo de execução (o nativo recria o landmarker no próximo frame).
      // PhoneXR = pipeline completo (slots + resgate YOLO); Simples = um grafo de 2 mãos, sem
      // resgate — mesma pós-produção, para comparar os dois no mesmo aparelho.
      const segEngine = el('div', 'seg');
      for (const [id, name, hint] of [['phonexr', 'PhoneXR', 'slots + resgate YOLO'], ['simple', 'Simples', 'um grafo de 2 mãos']]) {
        const b = el('button', null, name); b.title = hint;
        b.setAttribute('aria-pressed', (S.handEngine || 'phonexr') === id);
        b.onclick = () => {
          S.handEngine = id; save();
          window.NativeXR?.handEngine?.(id);
          toast(`${t('engine')}: ${name}`);
          [...segEngine.children].forEach(x => x.setAttribute('aria-pressed', 'false'));
          b.setAttribute('aria-pressed', 'true');
        };
        segEngine.appendChild(b);
      }
      c.append(row(t('engine'), 'A/B — troca o motor de mãos no aparelho', segEngine));
      page.append(c);
    }],
    [t('windows'), () => {
      page.innerHTML = `<h2>${t('windows')}</h2><p class="sub">As janelas ficam fixas no ambiente.</p>`;
      const c = el('div', 'card');
      c.append(row(t('curve'), '1 = encara o centro; menor = mais aberta', slider('winCurve', 0, 1, .05)));
      c.append(row('Inclinação', 'Ajuste vertical ao subir/descer', slider('winTilt', 0, 1.5, .05)));
      c.append(row(t('scale'), 'Tamanho das janelas', slider('winScale', .6, 1.6, .05)));
      c.append(row(t('dist'), 'Distância do arco', slider('winDist', native?.6:1.5, native?1.8:3.4, .05)));
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
      page.append(el('p','note','O hand tracking roda na própria cadência (single-flight, sem fila), separado do render. Ative o contador de FPS para ver as duas taxas: render e tracking.'));
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

/* Apps web e ferramentas NextVR são representados por capas locais, sem depender de uma CDN. */
const LIB_APPS = [
  { id:'netflix', name:'Netflix', bg:'linear-gradient(145deg,#301014,#09090b)', html:'<span class="lx-netflix">NETFLIX</span>' },
  { id:'youtube', name:'YouTube', bg:'linear-gradient(145deg,#352020,#111115)', slug:'youtube', color:'FF0000' },
  { id:'tiktok', name:'TikTok', bg:'linear-gradient(145deg,#173035,#101014)', slug:'tiktok', color:'ffffff' },
  { id:'discord', name:'Discord', bg:'linear-gradient(145deg,#7887ff,#3e48a3)', slug:'discord', color:'ffffff' },
  { id:'twitch', name:'Twitch', bg:'linear-gradient(145deg,#b184ff,#6133b2)', slug:'twitch', color:'ffffff' },
  { id:'prime', name:'prime video', bg:'linear-gradient(145deg,#173e70,#0b172b)', html:'<span class="lx-prime">prime<b>video</b></span>' },
  { id:'pluto', name:'pluto tv', bg:'linear-gradient(145deg,#34343a,#111115)', html:'<span class="lx-pluto">pluto<i>tv</i></span>' },
  { id:'whatsapp', name:'WhatsApp', bg:'linear-gradient(145deg,#59e58b,#128a48)', slug:'whatsapp', color:'ffffff' },
  { id:'instagram', name:'Instagram', bg:'linear-gradient(135deg,#feda75,#fa7e1e 30%,#d62976 60%,#962fbf 80%,#4f5bd5)', slug:'instagram', color:'ffffff', iconOnly:true },
  { id:'x', name:'X Twitter', label:'Twitter', bg:'linear-gradient(145deg,#38383d,#070708)', slug:'x', color:'ffffff' },
  { id:'facebook', name:'Facebook', bg:'linear-gradient(145deg,#3b91ff,#1554ab)', slug:'facebook', color:'ffffff', iconOnly:true },
  { id:'telegram', name:'Telegram', bg:'linear-gradient(145deg,#69caff,#147eaf)', slug:'telegram', color:'ffffff' },
  { id:'spotify', name:'Spotify', bg:'linear-gradient(145deg,#267b50,#0b1911)', slug:'spotify', color:'1DB954' },
  { id:'browser', name:'Browser', bg:'linear-gradient(145deg,#63aaff,#3052bb)', icon:'compass' },
  { id:'store', name:'Store', bg:'linear-gradient(145deg,#ffc45c,#d96b17)', icon:'store' },
  { id:'gallery', name:'Gallery', bg:'linear-gradient(145deg,#ff8096,#bd254b)', icon:'camera' },
  { id:'settings', name:'Settings', bg:'linear-gradient(145deg,#57dfa1,#168052)', icon:'settings' },
];
/* Ordem previsível; os jogos instalados surgem na posição habitual entre os apps. */
const LIB_ORDER = ['netflix','youtube','vrfs','tiktok','minecraft','roblox','brawl','discord','twitch','prime','pluto','whatsapp','instagram','x','facebook','telegram','spotify','browser','store','gallery','settings'];

const winBody = id => { const w = wins.find(x => x.id === id); return w ? w.el.querySelector('.win-body') : null; };

/* cada tile da biblioteca abre o app de verdade (o mesmo da dock) */
const LIB_ACTIONS = {
  youtube:  () => youtube(),
  browser:  () => webWindow('browser', t('browser'), 'https://duckduckgo.com/'),
  store:    () => storeApp(),
  gallery:  () => gallery(),
  settings: () => settingsApp(),
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
    <div class="st-row" style="justify-content:flex-end"><button class="st-heart${fav ? ' on' : ''}" data-fav="${g.id}" aria-label="Favorito">${icon('heart')}</button></div>
    <div class="st-row">${btns}</div></article>`;
}

function buildStore() {
  const root = el('div', 'st');
  const tabs = STORE_TABS.map(([id, n]) => `<button class="st-tab" data-tab="${id}" aria-selected="${storeTab === id}">${n}</button>`).join('');
  let html = `<div class="st-top"><img class="st-logo-img" src="./icons/nextvr-n.svg" alt="NextVR"><div class="st-tabs">${tabs}</div>`
    + `<button class="st-ava" data-ava aria-label="Perfil">${icon('user')}</button><button class="st-x" data-x aria-label="Fechar">${icon('x')}</button></div>`;

  if (storeTab === 'apps') {
    html += `<p class="st-note">Os apps estão na biblioteca — toque no botão de 9 pontos da dock.</p>
      <div class="st-row" style="max-width:340px"><button class="st-btn" data-openlib>ABRIR BIBLIOTECA</button></div>`;
  } else if (storeTab === 'horizon') {
    html += `<p class="st-note">Esta loja não inclui uma assinatura Horizon+.</p>`;
  } else if (storeTab === 'wish') {
    const list = GAMES.filter(g => favs.includes(g.id));
    html += list.length
      ? `<div class="st-sec"><h3>Lista de desejos</h3></div><div class="st-cards">${list.map(gameCard).join('')}</div>`
      : `<p class="st-note">Selecione o ícone de favorito de um jogo para salvá-lo aqui.</p>`;
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
    toast(g.name + ' foi para a biblioteca de apps com sucesso');
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
const LIB_FILTERS = ['all', 'games', 'apps', 'recent'];
const LIB_FILTER_LABELS = { all:'Todas', games:'Jogos', apps:'Apps', recent:'Recentes' };
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
  if (libFilter === 'recent') list = list.filter(x => libRecent.includes(x.id));
  const q = libQuery.trim().toLowerCase();
  if (q) list = list.filter(x => (x.name + ' ' + (x.label || '')).toLowerCase().includes(q));
  if (libSort === 'az') return [...list].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
  const rank = id => { const i = libRecent.indexOf(id); return i < 0 ? 1e6 : i; };
  return [...list].sort((a, b) => rank(a.id) - rank(b.id));
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
function gameTile(g) {
  const image = g.img ? `<img class="lib-game-cover" src="${g.img}" alt="" loading="lazy" referrerpolicy="no-referrer" draggable="false" onerror="this.remove()">` : '';
  return `<button class="lib-tile game" data-game="${g.id}" aria-label="Abrir ${g.name}">`
    + `<span class="lib-cover" style="background:${g.bg}">${image}<span class="lib-art">${g.mark}</span>`
    + `<span class="lib-vr">VR</span></span><span class="lib-label">${g.name}</span></button>`;
}
function buildLibrary() {
  const list = libItems();
  const root = el('div', 'lib');
  const fLabel = LIB_FILTER_LABELS[libFilter] || LIB_FILTER_LABELS.all;
  const navButton = (id, label, glyph) => `<button class="lib-nav" data-nav="${id}" title="${label}" aria-label="${label}" aria-pressed="${libFilter === id}">${icon(glyph)}</button>`;
  root.innerHTML = `<nav class="lib-rail" aria-label="Navegação da biblioteca">
      ${navButton('all','Todas as aplicações','appGrid')}
      ${navButton('apps','Aplicativos','device')}
      ${navButton('games','Jogos','controller')}
      ${navButton('recent','Recentes','timer')}
      <span class="lib-rail-spacer"></span>
      <button class="lib-nav lib-nav-store" data-app="store" title="Store" aria-label="Abrir Store">${icon('store')}</button>
    </nav>
    <section class="lib-main">
      <div class="lib-head"><h2 class="lib-title">Apps</h2>
        <button class="lib-sbtn" data-s aria-label="Buscar">${icon('search')}</button>
        <input class="lib-search" data-q placeholder="Buscar" value="${escH(libQuery)}">
        <span class="lib-head-spacer"></span>
        <button class="lib-pill" data-sort>${libSort === 'az' ? 'A–Z' : 'Recentes'} ${icon('chevronDown')}</button>
        <button class="lib-pill" data-filter>${fLabel} · ${list.length} ${icon('chevronDown')}</button>
      </div>
      <div class="lib-scroll"><div class="lib-grid">${
        list.map(x => x.kind === 'game' ? gameTile(x) : appTile(x)).join('')
      }</div>
      ${list.length ? '' : `<div class="lib-empty">${libFilter === 'games' ? 'Nenhum jogo baixado ainda. Baixe um na Store.' : libFilter === 'recent' ? 'Os apps usados recentemente vão aparecer aqui.' : 'Nenhum app encontrado.'}</div>`}
      </div>
    </section>`;

  const q = root.querySelector('[data-q]');
  if (libQuery) q.classList.add('open');
  q.addEventListener('input', () => { libQuery = q.value; paintLibrary(true); const nq = winBody('library')?.querySelector('[data-q]'); if (nq) { nq.focus(); nq.setSelectionRange(nq.value.length, nq.value.length); } });
  q.addEventListener('focus', () => keyboard(true, q));

  root.addEventListener('click', e => {
    const c = s => e.target.closest(s);
    let m;
    if (c('[data-s]')) { const i = root.querySelector('[data-q]'); i.classList.toggle('open'); if (i.classList.contains('open')) i.focus(); else { libQuery = ''; i.value = ''; paintLibrary(); } return; }
    if ((m = c('[data-nav]'))) { libFilter = m.dataset.nav; paintLibrary(); return; }
    if (c('[data-sort]')) { libSort = libSort === 'az' ? 'recent' : 'az'; paintLibrary(); return; }
    if (c('[data-filter]')) { libFilter = LIB_FILTERS[(LIB_FILTERS.indexOf(libFilter) + 1) % LIB_FILTERS.length]; paintLibrary(); return; }
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
const DK = Object.freeze({
  bell:icon('notification'), kb:icon('keyboard'), center:icon('crosshair'),
  compass:icon('compass'), store:icon('store'), people:icon('people'),
  camera:icon('camera'), gear:icon('settings'), play:icon('play'),
});

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
  body.innerHTML = `<div class="lang-brand"><img src="./icons/nextvr-n.svg" alt="NextVR"><h1>Escolha seu idioma</h1></div>
    <p>Choose your language · Elige tu idioma</p>
    <div class="lang-options" role="list">
      <button class="lang-option" data-lang="pt"><b>🇧🇷</b><span>Português</span></button>
      <button class="lang-option" data-lang="en"><b>🇺🇸</b><span>English</span></button>
      <button class="lang-option" data-lang="es"><b>🇪🇸</b><span>Español</span></button>
    </div>
    <div class="lang-status">Aponte com a mão e faça uma pinça para escolher.<br><span class="lang-tracking">Iniciando o hand tracking…</span></div>`;
  body.querySelectorAll('[data-lang]').forEach(b => b.onclick = () => finishLanguage(b.dataset.lang));
  const w = open({ id:'language', title:'Next VR', node:body, w:880, h:600, onboarding:true });
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
