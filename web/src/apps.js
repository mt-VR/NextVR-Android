// NextVR — aplicativos, menu flutuante, ambientes, idiomas e ligação geral.
import { settings as S, save, t, setLang, on, emit, toast, recenter, setEnvironment, envList, startGyro, gyroLive, native, css3d,
  LANG_ROWS, langRow } from './core.js';
import { startHands, stopHands, tracking } from './hands.js';
import { open, close, wins, buildDock, keyboard, keyboardOpen, focusedWin, focus, setDockVisible } from './windows.js';
import { startGame, refreshGame } from './game.js';
import { icon } from './reference-icons.js';
import { installAndroidApps, androidApps, androidTileHtml, shizukuNotice, openApp, androidRecent,
  androidRecentIndex, focusAppWindow, openWindowCount,
  loadLibrary as loadAndroidLibrary } from './android-apps.js';

const el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };
const iconText = (name, text='') => `<span class="icon-label">${icon(name)}${text ? `<span>${text}</span>` : ''}</span>`;

const escH = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
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
      // Mesma tela do Quest do primeiro uso, aberta como janela normal (o idioma atual é o destaque).
      const pick = el('button', 'seg-btn', langRow(S.lang || 'pt').label);
      pick.onclick = () => {
        const picker = open({ id:'language-pick', title:t('langTitle'), w:880, h:660,
          node:languagePicker(S.lang || 'pt', id => { setLang(id); toast(t('langChanged')); rebuild(); close(picker); }, true) });
      };
      c.append(row(t('language'), 'Mesma tela do primeiro uso', pick));
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
      c.append(row('Detector', 'MediaPipe Tasks Vision, 2 mãos por frame', el('span', 'note', 'NextVR')));
      page.append(c);
    }],
    [t('windows'), () => {
      page.innerHTML = `<h2>${t('windows')}</h2><p class="sub">As janelas ficam fixas no ambiente.</p>`;
      const c = el('div', 'card');
      c.append(row(t('curve'), '1 = encara o centro; menor = mais aberta', slider('winCurve', 0, 1, .05)));
      c.append(row('Inclinação', 'Ajuste vertical ao subir/descer', slider('winTilt', 0, 1.5, .05)));
      c.append(row(t('scale'), 'Tamanho das janelas', slider('winScale', .6, 1.6, .05)));
      c.append(row(t('dist'), 'Distância do arco', slider('winDist', native?.6:1.5, native?1.8:3.4, .05)));
      c.append(row(t('win360'), t('win360k'), slider('win360K', .2, 1.15, .05)));
      c.append(row(t('win360All'), 'O botão 360° na barra da janela troca por janela', toggle('win360')));
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
      page.append(el('p', 'sub', 'Passthrough da câmera ou um panorama 360° em volta de você.'));
      const g = el('div', 'grid3');
      for (const e of envList()) {
        const b = el('button', 'env' + (e.thumb ? ' env-pano' : ''));
        b.style.background = e.thumb ? `url('${e.thumb}') center/cover` : 'linear-gradient(160deg,#253244,#11151d)';
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
  youtube:  () => webWindow('youtube',   'YouTube',      'https://m.youtube.com/'),
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
  let html = `<div class="st-top"><img class="st-logo-img" src="./icons/nextvr-n.png" alt="NextVR"><div class="st-tabs">${tabs}</div>`
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
/*
 * The Applications menu, as one list: NextVR's own apps and games plus the apps installed on the
 * phone. There is deliberately no separate Android page, no filter that hides them and no button
 * that has to be pressed first — an installed app is one more tile among the others, and the search
 * box, the sort and the "Recentes" filter treat it exactly like a web app.
 */
function libItems() {
  // The native side is asked for the installed apps here, cheaply and cached: a tile drawn before
  // its icon existed is drawn again as soon as the native icon revision moves (applyState).
  loadAndroidLibrary(false);
  const games = GAMES.filter(g => installed.includes(g.id)).map(g => ({ ...g, kind: 'game' }));
  const apps = LIB_APPS.map(a => ({ ...a, kind: 'app' }));
  const android = androidApps().map(a => ({ kind: 'android', id: 'android:' + a.pkg, name: a.label || a.pkg,
    label: a.label || a.pkg, pkg: a.pkg, icon: a.icon, system: a.system, app: a }));
  let list = [...games, ...apps, ...android];
  const ord = id => { const i = LIB_ORDER.indexOf(id); return i < 0 ? 99 : i; };
  list.sort((a, b) => ord(a.id) - ord(b.id));
  if (libFilter === 'games') list = list.filter(x => x.kind === 'game');
  if (libFilter === 'apps') list = list.filter(x => x.kind === 'app' || x.kind === 'android');
  if (libFilter === 'recent') list = list.filter(x => x.kind === 'android'
    ? androidRecent(x.pkg) : libRecent.includes(x.id));
  const q = libQuery.trim().toLowerCase();
  if (q) list = list.filter(x => (x.name + ' ' + (x.label || '')).toLowerCase().includes(q));
  if (libSort === 'az') return [...list].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
  // The most recently used first. An installed app the native side counts as recent ranks with the
  // web apps the shell remembers; everything else keeps the menu's own order.
  const rank = item => {
    if (item.kind === 'android') {
      const i = androidRecentIndex(item.pkg);
      return i < 0 ? 1e6 : i;
    }
    const i = libRecent.indexOf(item.id); return i < 0 ? 1e6 : i;
  };
  return [...list].sort((a, b) => rank(a) - rank(b));
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
        list.map(x => x.kind === 'game' ? gameTile(x) : x.kind === 'android' ? androidTileHtml(x.app) : appTile(x)).join('')
      }</div>
      ${list.length ? '' : `<div class="lib-empty">${libFilter === 'games' ? 'Nenhum jogo baixado ainda. Baixe um na Store.' : libFilter === 'recent' ? 'Os apps usados recentemente vão aparecer aqui.' : 'Nenhum app encontrado.'}</div>`}
      </div>
    </section>
    `;
  // The only Android-specific row in the interface, and it exists only while the shell service is
  // not available: it says which of the two mechanisms a tile will use and how to get the other one.
  const notice = shizukuNotice();
  if (notice) root.querySelector('.lib-scroll')?.prepend(notice);

  const q = root.querySelector('[data-q]:not([data-q="android"])');
  if (q && libQuery) q.classList.add('open');
  if (q) {
    q.addEventListener('input', () => { libQuery = q.value; paintLibrary(true); const nq = winBody('library')?.querySelector('[data-q]:not([data-q="android"])'); if (nq) { nq.focus(); nq.setSelectionRange(nq.value.length, nq.value.length); } });
    q.addEventListener('focus', () => keyboard(true, q));
  }

  root.addEventListener('click', e => {
    const c = s => e.target.closest(s);
    let m;
    if (c('[data-s]')) { const i = root.querySelector('[data-q]:not([data-q="android"])'); if (!i) return; i.classList.toggle('open'); if (i.classList.contains('open')) i.focus(); else { libQuery = ''; i.value = ''; paintLibrary(); } return; }
    if ((m = c('[data-nav]'))) { libFilter = m.dataset.nav; paintLibrary(); return; }
    if (c('[data-sort]')) { libSort = libSort === 'az' ? 'recent' : 'az'; paintLibrary(); return; }
    if (c('[data-filter]')) { libFilter = LIB_FILTERS[(LIB_FILTERS.indexOf(libFilter) + 1) % LIB_FILTERS.length]; paintLibrary(); return; }
    if ((m = c('[data-android]'))) {
      // One action, one owner of the decision: the native side focuses a window that is already
      // open, wakes a minimized one and restarts a failed one — whichever mechanism it needs. The
      // shell only brings an existing window forward so the tap always ends on the app.
      const pkg = m.dataset.android;
      // The shape travels, not a size: the app is hosted on this phone's own screen, and the window
      // takes that canvas' shape (see openApp).
      openApp(pkg);
      focusAppWindow(pkg);
      return;
    }
    if ((m = c('[data-game]'))) {
      const g = gameById(m.dataset.game); touchLib(g.id);
      // O jogo abre o mundo 3D nativo com a cena salva dele: geometria e transforms vão para o
      // renderer GLES2 do Cardboard (não é WebXR), e o workspace some com o estado preservado.
      toast(`${g.name}: ${t('game.launching')}`);
      startGame(g.id);
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
function shizukuWindow() {
  const body = el('div', 'pad');
  body.innerHTML = `<h2>${t('shizuku')}</h2><p class="sub">${t('androidApps')}</p>`;
  const grid = el('div', 'lib-grid');
  const apps = androidApps();
  grid.innerHTML = apps.length
    ? apps.map(a => androidTileHtml(a)).join('')
    : `<p class="sub">${t('noPhotos')}</p>`;
  body.appendChild(grid);
  body.addEventListener('click', e => {
    const m = e.target.closest('[data-android]');
    if (!m) return;
    openApp(m.dataset.android);
    focusAppWindow(m.dataset.android);
  });
  return open({ id: 'shizuku', title: t('shizuku'), node: body });
}
const shizukuApp = shizukuWindow;
const androidAppsWindow = shizukuWindow;

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
  compass:icon('compass'), store:icon('store'), people:icon('people'),
  camera:icon('camera'), gear:icon('settings'), play:icon('play'),
});

function makeDock() {
  buildDock([
    // Apenas perfil + hora/status + vão + apps principais + launcher de apps.
    { kind: 'avatar', id: 'profile', label: t('profile'),  run: settingsApp },
    { kind: 'status', id: 'status',  label: t('settings'), run: settingsApp },
    { kind: 'spacer' },  // vão entre hora/bateria e os apps (estilo Quest/Meta)
    // apps principais
    { id: 'browser', win: 'browser', label: t('browser'), svg: DK.compass, bg: 'linear-gradient(145deg,#5a9bff,#2a5ee0)', run: () => webWindow('browser', t('browser'), 'https://duckduckgo.com/') },
    { id: 'store',   win: 'store',   label: t('store'),   svg: DK.store,   bg: 'linear-gradient(145deg,#ffb544,#e8741a)', run: storeApp },
    { id: 'discord', win: 'discord', label: 'Discord',    svg: DK.people,  bg: 'linear-gradient(145deg,#ad82f4,#6c45c9)', run: () => webWindow('discord', 'Discord', 'https://discord.com/app') },
    { id: 'gallery', win: 'gallery', label: t('gallery'), svg: DK.camera,  bg: 'linear-gradient(145deg,#ff6584,#d4204e)', run: gallery },
    { id: 'settings', win: 'settings', label: t('settings'), svg: DK.gear, bg: 'linear-gradient(145deg,#45d894,#1f9d63)', run: settingsApp },
    { id: 'youtube',  win: 'youtube',  label: 'YouTube',     svg: DK.play, bg: 'linear-gradient(145deg,#ff6b6b,#d63c3c)', run: () => webWindow('youtube', 'YouTube', 'https://m.youtube.com/') },
    { id: 'library', win: 'library', launcher: true, label: t('apps'), run: libraryApp },
  ]);
}
on('lang', makeDock);


/**
 * Count badge of the dock's applications tile: how many Android app windows are open right now
 * (hosted or captured). The tile it sits on opens the same menu the windows are listed in, so the
 * number is where the user would look for them.
 */
function paintWindowBadge() {
  const tile = document.querySelector('.dock [data-id="library"], .dock-app[data-id="library"]');
  if (!tile) return;
  const count = openWindowCount();
  let badge = tile.querySelector('.dock-badge');
  if (!count) { badge?.remove(); return; }
  if (!badge) { badge = el('i', 'dock-badge'); tile.appendChild(badge); }
  badge.textContent = String(count);
}

installAndroidApps();
on('appsState', () => { paintWindowBadge(); paintLibrarySoon(); });
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
    body.innerHTML = `<div class="lq-head"><span class="lq-pick">${label(pending)}</span><span class="lq-title">${t('langTitle')}</span></div>
      <div class="lq-main">
        <div class="lang-options" role="list">${LANG_ROWS.map(r => `<button class="lang-option${r.table ? '' : ' soon'}" data-lang="${r.id}"
            ${r.table ? '' : 'disabled aria-disabled="true"'}
            aria-pressed="${r.id === pending}"><span>${r.label}</span>${r.table ? '' : `<i>${t('langSoon')}</i>`}</button>`).join('')}</div>
        <div class="lq-art"><img src="./hand-controller.png" alt=""></div>
      </div>
      <div class="lq-foot"><span class="lang-tracking">Aponte com a mão e faça uma pinça para escolher.</span>
        <button class="lq-go">${t('langContinue')}</button></div>`;
    body.querySelectorAll('[data-lang]').forEach(b => b.onclick = () => onPick(b.dataset.lang));
    body.querySelector('.lq-go').onclick = () => onPick(pending);
  };
  paint();
  return body;
}
function languageWindow() {
  const w = open({ id:'language', title:'Next VR', w:880, h:660, onboarding:true,
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
  window.nextvrResume = () => { css3d.invalidate?.(); refreshGame(); startGyro(); if (S.handsOn) startHands(); };
  window.nextvrSuspend = () => { stopHands(); };
  on('hands', () => { document.getElementById('perm').hidden = true; });
}

/* O menu do jogo pede as configurações: a janela abre por cima do mundo, sem sair dele. */
on('game:settings', () => settingsApp());
