import { settings as S, save, emit, on, setLang, langTable, setEnvironment, setPassthrough, native, SixDof } from './core.js';
import {
  ENTRY_VERSION,
  ENTRY_VERSION_ALPHA,
  ENTRY_SUBTITLE,
  ENTRY_TAGLINE_TOP,
  ENTRY_TAGLINE_BOTTOM,
  ENTRY_COLLABORATORS,
  ENTRY_COLLABORATOR_BIOS,
  ENTRY_ABOUT_TITLE,
  ENTRY_ABOUT_PARAGRAPHS,
  ENTRY_ABOUT_TEXT,
} from './entry-data.js';

export {
  ENTRY_VERSION,
  ENTRY_VERSION_ALPHA,
  ENTRY_SUBTITLE,
  ENTRY_TAGLINE_TOP,
  ENTRY_TAGLINE_BOTTOM,
  ENTRY_COLLABORATORS,
  ENTRY_COLLABORATOR_BIOS,
  ENTRY_ABOUT_TITLE,
  ENTRY_ABOUT_PARAGRAPHS,
  ENTRY_ABOUT_TEXT,
};

const SVG_BACK_ARROW = `
<svg viewBox="0 0 28 24" fill="none" class="entry-back-svg" aria-hidden="true">
  <path d="M11 5L4 12L11 19" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5 12H19C21.8 12 24 14.2 24 17V19" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const SVG_RETICLE = `
<svg viewBox="0 0 36 36" fill="none" class="entry-reticle-svg" aria-hidden="true">
  <circle cx="18" cy="18" r="15" stroke="currentColor" stroke-width="2"/>
  <path d="M18 3V8M18 28V33M3 18H8M28 18H33" stroke="currentColor" stroke-width="2"/>
</svg>`;

const SVG_USER = `
<svg viewBox="0 0 24 24" fill="currentColor" class="entry-user-svg" aria-hidden="true">
  <circle cx="12" cy="8.2" r="4.2"/>
  <path d="M4 20.5c0-4.2 3.6-6.8 8-6.8s8 2.6 8 6.8z"/>
</svg>`;

const SVG_STORE_BAG = `
<svg viewBox="0 0 24 24" fill="none" class="entry-store-svg" aria-hidden="true">
  <path d="M6 8h12l-1.2 12H7.2L6 8z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>`;

const SVG_TIKTOK_VERIFIED = `
<svg viewBox="0 0 24 24" class="entry-verified-svg" aria-hidden="true">
  <circle cx="12" cy="12" r="10.5" fill="#fe2c55" stroke="#ff6384" stroke-width="1"/>
  <path d="M7.6 12.4l3 3 5.8-6.2" fill="none" stroke="#ffffff" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const MENU_STORE_APPS = [
  { id: 'youtube', name: 'YouTube VR', cat: 'Vídeo · 360°', bg: '#dc2626' },
  { id: 'netflix', name: 'Netflix', cat: 'Cinema · TV', bg: '#991b1b' },
  { id: 'discord', name: 'Discord', cat: 'Social · Voz', bg: '#4f46e5' },
  { id: 'tiktok', name: 'TikTok', cat: 'Vídeos Curtos', bg: '#0f172a' },
  { id: 'twitch', name: 'Twitch', cat: 'Lives · Jogos', bg: '#7c3aed' },
  { id: 'spotify', name: 'Spotify', cat: 'Música · Áudio', bg: '#059669' },
];

const PRESET_AVATARS = [
  { id: 'chrome', label: 'Chrome N', url: './icons/nextvr-chrome-n.png' },
  { id: 'purple', label: 'Neon N', url: './icons/nextvr-n.png' },
  {
    id: 'cyber',
    label: 'Cyber Blue',
    url: 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#00d4ff"/><stop offset="1" stop-color="#1d4ed8"/></linearGradient></defs><rect width="80" height="80" fill="url(#g)"/><circle cx="40" cy="29" r="13" fill="#fff"/><path d="M16 68c0-13 11-21 24-21s24 8 24 21z" fill="#fff"/></svg>'),
  },
  {
    id: 'emerald',
    label: 'Emerald VR',
    url: 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#10b981"/><stop offset="1" stop-color="#0f172a"/></linearGradient></defs><rect width="80" height="80" fill="url(#g)"/><rect x="14" y="26" width="52" height="26" rx="10" fill="#fff"/><circle cx="30" cy="39" r="6" fill="#0f172a"/><circle cx="50" cy="39" r="6" fill="#0f172a"/></svg>'),
  },
];

function escHtml(str) {
  return String(str || '').replace(/[&<>"']/g, ch => (
    ch === '&' ? '&amp;' : ch === '<' ? '&lt;' : ch === '>' ? '&gt;' : ch === '"' ? '&quot;' : '&#39;'
  ));
}

const EM_I18N = {
  pt: {
    start: 'Iniciar', startVr: 'Iniciar VR', settings: 'Configurações', basicSettings: 'Configurações básicas',
    handStyle: 'Hand tracking style', handDrawn: 'Mão desenhada', handInvisible: 'Invisível',
    collaborators: 'Colaboradores', about: 'Sobre', back: 'Voltar', store: 'Store',
    storeTitle: 'Store NextVR — Jogos & Apps',
    langCell: 'IDIOMA', spatialCell: 'SPATIAL APP', on: 'Ativado', dock: 'Dock',
    dockSnapOn: 'Slot Dock: ON', dockSnapOff: 'Slot Dock: OFF',
    qualityCell: 'qualidade', qAuto: 'Auto', qHigh: 'Alta (1080p)', qMed: 'Média (890p)', qLow: 'Baixa (390p)',
    ocularCell: 'câmera grande ocular (0.5x)', volumeCell: 'VOLUME', brightnessCell: 'BRILHO',
    handCell: 'Hand tracking', fingerTouchOn: 'Toque (Sem Pinça): ON', fingerTouchOff: 'Toque (Sem Pinça): OFF',
    envTitle: 'Ambiente', envAr: 'Câmera (AR)', envSunset: 'Pôr do Sol', envNight: 'Noite',
  },
  en: {
    start: 'Start', startVr: 'Start VR', settings: 'Settings', basicSettings: 'Basic Settings',
    handStyle: 'Hand tracking style', handDrawn: 'Drawn hand', handInvisible: 'Invisible',
    collaborators: 'Collaborators', about: 'About', back: 'Back', store: 'Store',
    storeTitle: 'NextVR Store — Games & Apps',
    langCell: 'LANGUAGE', spatialCell: 'SPATIAL APP', on: 'Enabled', dock: 'Dock',
    dockSnapOn: 'Dock Slot: ON', dockSnapOff: 'Dock Slot: OFF',
    qualityCell: 'quality', qAuto: 'Auto', qHigh: 'High (1080p)', qMed: 'Medium (890p)', qLow: 'Low (390p)',
    ocularCell: 'ultra-wide camera (0.5x)', volumeCell: 'VOLUME', brightnessCell: 'BRIGHTNESS',
    handCell: 'Hand tracking', fingerTouchOn: 'Finger Touch: ON', fingerTouchOff: 'Finger Touch: OFF',
    envTitle: 'Environment', envAr: 'Camera (AR)', envSunset: 'Sunset', envNight: 'Night',
  },
  es: {
    start: 'Iniciar', startVr: 'Iniciar VR', settings: 'Ajustes', basicSettings: 'Ajustes básicos',
    handStyle: 'Hand tracking style', handDrawn: 'Mano dibujada', handInvisible: 'Invisible',
    collaborators: 'Colaboradores', about: 'Acerca de', back: 'Volver', store: 'Tienda',
    storeTitle: 'Tienda NextVR — Juegos y Apps',
    langCell: 'IDIOMA', spatialCell: 'SPATIAL APP', on: 'Activado', dock: 'Dock',
    dockSnapOn: 'Slot Dock: ON', dockSnapOff: 'Slot Dock: OFF',
    qualityCell: 'calidad', qAuto: 'Auto', qHigh: 'Alta (1080p)', qMed: 'Media (890p)', qLow: 'Baja (390p)',
    ocularCell: 'cámara gran angular (0.5x)', volumeCell: 'VOLUMEN', brightnessCell: 'BRILLO',
    handCell: 'Hand tracking', fingerTouchOn: 'Toque Índice: ON', fingerTouchOff: 'Toque Índice: OFF',
    envTitle: 'Entorno', envAr: 'Cámara (AR)', envSunset: 'Atardecer', envNight: 'Noche',
  },
  ja: {
    start: '開始', startVr: 'VRを開始', settings: '設定', basicSettings: '基本設定',
    handStyle: 'Hand tracking style', handDrawn: '手を表示', handInvisible: '非表示',
    collaborators: 'コラボレーター', about: '概要', back: '戻る', store: 'ストア',
    storeTitle: 'NextVR ストア — ゲーム＆アプリ',
    langCell: '言語', spatialCell: 'SPATIAL APP', on: 'オン', dock: 'ドック',
    dockSnapOn: 'スロット: ON', dockSnapOff: 'スロット: OFF',
    qualityCell: '画質', qAuto: '自動', qHigh: '高 (1080p)', qMed: '中 (890p)', qLow: '低 (390p)',
    ocularCell: '超広角カメラ (0.5x)', volumeCell: '音量', brightnessCell: '明るさ',
    handCell: 'Hand tracking', fingerTouchOn: '指タッチ: ON', fingerTouchOff: '指タッチ: OFF',
    envTitle: '環境', envAr: 'カメラ (AR)', envSunset: '夕暮れ', envNight: '夜',
  },
  ru: {
    start: 'Начать', startVr: 'Запустить VR', settings: 'Настройки', basicSettings: 'Основные настройки',
    handStyle: 'Hand tracking style', handDrawn: 'Рисованная рука', handInvisible: 'Невидимая',
    collaborators: 'Участники', about: 'О приложении', back: 'Назад', store: 'Магазин',
    storeTitle: 'Магазин NextVR — Игры и Приложения',
    langCell: 'ЯЗЫК', spatialCell: 'SPATIAL APP', on: 'Вкл.', dock: 'Док',
    dockSnapOn: 'Слот дока: ON', dockSnapOff: 'Слот дока: OFF',
    qualityCell: 'качество', qAuto: 'Авто', qHigh: 'Высокое (1080p)', qMed: 'Среднее (890p)', qLow: 'Низкое (390p)',
    ocularCell: 'широкоугольная камера (0.5x)', volumeCell: 'ГРОМКОСТЬ', brightnessCell: 'ЯРКОСТЬ',
    handCell: 'Hand tracking', fingerTouchOn: 'Касание пальцем: ON', fingerTouchOff: 'Касание пальцем: OFF',
    envTitle: 'Окружение', envAr: 'Камера (AR)', envSunset: 'Закат', envNight: 'Ночь',
  },
  de: {
    start: 'Starten', startVr: 'VR starten', settings: 'Einstellungen', basicSettings: 'Grundeinstellungen',
    handStyle: 'Hand tracking style', handDrawn: 'Gezeichnete Hand', handInvisible: 'Unsichtbar',
    collaborators: 'Mitwirkende', about: 'Über', back: 'Zurück', store: 'Store',
    storeTitle: 'NextVR Store — Spiele & Apps',
    langCell: 'SPRACHE', spatialCell: 'SPATIAL APP', on: 'Aktiviert', dock: 'Dock',
    dockSnapOn: 'Dock-Slot: ON', dockSnapOff: 'Dock-Slot: OFF',
    qualityCell: 'Qualität', qAuto: 'Auto', qHigh: 'Hoch (1080p)', qMed: 'Mittel (890p)', qLow: 'Niedrig (390p)',
    ocularCell: 'Ultraweitwinkel (0.5x)', volumeCell: 'LAUTSTÄRKE', brightnessCell: 'HELLIGKEIT',
    handCell: 'Hand tracking', fingerTouchOn: 'Finger-Touch: ON', fingerTouchOff: 'Finger-Touch: OFF',
    envTitle: 'Umgebung', envAr: 'Kamera (AR)', envSunset: 'Sonnenuntergang', envNight: 'Nacht',
  },
};
const emT = k => (EM_I18N[langTable()] || EM_I18N.pt)[k] || EM_I18N.pt[k] || k;

function handStyleText(handDraw) {
  return handDraw ? emT('handDrawn') : emT('handInvisible');
}

export function buildEntryMenu({ onStart, onLaunchGorilla, getStatus, fullscreen = false } = {}) {
  const root = document.createElement('div');
  root.className = fullscreen ? 'entry-menu-root entry-menu-root--fullscreen' : 'entry-menu-root';
  root.dataset.entryMenu = '2.0.0';
  if (fullscreen) root.dataset.entryFullscreen = '1';

  let activeView = 'home'; // 'home' | 'settings' | 'collaborators' | 'about' | 'profile' | 'store' | 'loading'
  let countdownSec = 6;
  let loadingPct = 0;
  let countdownTimer = null;
  let storeGorillaPct = null;

  const LOADING_MESSAGES = [
    'Carregando câmera AR...',
    'Carregando Dock...',
    'Otimizando Hand tracking...',
    'Calibrando lentes 3D...',
    'Carregando aplicativos espaciais...',
    'Iniciando NextVR...',
  ];

  const loadingStatusForPct = pct => {
    if (pct < 17) return LOADING_MESSAGES[0];
    if (pct < 35) return LOADING_MESSAGES[1];
    if (pct < 55) return LOADING_MESSAGES[2];
    if (pct < 75) return LOADING_MESSAGES[3];
    if (pct < 92) return LOADING_MESSAGES[4];
    return LOADING_MESSAGES[5];
  };

  const stopCountdown = () => {
    if (countdownTimer) {
      clearInterval(countdownTimer);
      countdownTimer = null;
    }
  };

  const updateCountdownDom = () => {
    const numEl = root.querySelector('[data-entry-countdown]');
    const pctEl = root.querySelector('[data-entry-load-pct]');
    const barEl = root.querySelector('[data-entry-load-bar]');
    const statusEl = root.querySelector('[data-entry-load-status]');
    const subEl = root.querySelector('[data-entry-countdown-sub]');
    if (numEl) numEl.textContent = String(countdownSec);
    if (pctEl) pctEl.textContent = `${loadingPct}%`;
    if (barEl) barEl.style.width = `${loadingPct}%`;
    if (statusEl) statusEl.textContent = loadingStatusForPct(loadingPct);
    if (subEl) {
      subEl.textContent = `COLOQUE O CELULAR NO VR BOX · Iniciando em ${countdownSec}s...`;
    }
  };

  const startCountdown = () => {
    stopCountdown();
    countdownSec = 6;
    loadingPct = 0;
    activeView = 'loading';
    paint();
    const durationMs = 6000;
    const startedAt = performance.now();
    countdownTimer = setInterval(() => {
      const elapsed = Math.max(0, performance.now() - startedAt);
      loadingPct = Math.min(100, Math.round((elapsed / durationMs) * 100));
      countdownSec = Math.max(1, Math.ceil((durationMs - elapsed) / 1000));
      if (elapsed >= durationMs) {
        loadingPct = 100;
        updateCountdownDom();
        stopCountdown();
        onStart?.();
        return;
      }
      updateCountdownDom();
    }, 60);
  };

  const currentClock = () => {
    const st = getStatus?.();
    if (st?.clockText) return st.clockText;
    if (st?.time && st.time !== '--:--') return st.time;
    const now = new Date();
    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  };

  const currentBattery = () => {
    try {
      const raw = window.NativeXR?.battery?.();
      if (raw && raw !== 'null') {
        const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw;
        if (parsed && typeof parsed.level === 'number') {
          const pct = Math.round(Math.max(0, Math.min(1, parsed.level)) * 100);
          return { percent: pct, charging: !!parsed.charging, text: `${pct}%${parsed.charging ? ' ⚡' : ''}` };
        }
      }
    } catch {}
    const st = getStatus?.();
    if (st && typeof st.batteryLevel === 'number') {
      const pct = Math.round(Math.max(0, Math.min(1, st.batteryLevel)) * 100);
      return { percent: pct, charging: !!st.charging, text: `${pct}%${st.charging ? ' ⚡' : ''}` };
    }
    return { percent: 100, charging: false, text: '100%' };
  };

  const toggleHandTrackingStyle = () => {
    S.handsOn = 1;
    S.handDraw = S.handDraw ? 0 : 1;
    save(S);
    window.NativeXR?.handVisuals?.(!!S.handDraw);
    emit('handDraw', !!S.handDraw);
  };

  const renderSlantedButtons = () => {
    const handLabel = handStyleText(S.handDraw);
    return `
      <nav class="entry-cards-row" role="navigation" aria-label="Menu principal NextVR">
        <button type="button" class="entry-card entry-card--primary" data-entry-act="start">
          <span class="entry-card-body">
            <span class="entry-card-title">${emT('start')}</span>
          </span>
          <span class="entry-card-stripes" aria-hidden="true"><i></i><i></i></span>
        </button>

        <button type="button" class="entry-card ${activeView === 'settings' ? 'entry-card--active' : ''}" data-entry-act="settings">
          <span class="entry-card-body">
            <span class="entry-card-title">${emT('settings')}</span>
          </span>
          <span class="entry-card-stripes" aria-hidden="true"><i></i><i></i></span>
        </button>

        <button type="button" class="entry-card ${S.handDraw ? 'entry-card--hand-drawn' : 'entry-card--hand-invisible'}" data-entry-act="hand-style" data-hand-draw="${S.handDraw ? '1' : '0'}">
          <span class="entry-card-body">
            <span class="entry-card-title">${emT('handStyle')}</span>
            <span class="entry-card-state" data-hand-style-label>${handLabel}</span>
          </span>
          <span class="entry-card-stripes" aria-hidden="true"><i></i><i></i></span>
        </button>

        <button type="button" class="entry-card ${activeView === 'collaborators' ? 'entry-card--active' : ''}" data-entry-act="collaborators">
          <span class="entry-card-body">
            <span class="entry-card-title">${emT('collaborators')}</span>
          </span>
          <span class="entry-card-stripes" aria-hidden="true"><i></i><i></i></span>
        </button>

        <button type="button" class="entry-card ${activeView === 'about' ? 'entry-card--active' : ''}" data-entry-act="about">
          <span class="entry-card-body">
            <span class="entry-card-title">${emT('about')}</span>
          </span>
          <span class="entry-card-stripes" aria-hidden="true"><i></i><i></i></span>
        </button>
      </nav>`;
  };

  const renderBrandStage = () => {
    return `
      <div class="entry-brand-stage" data-entry-panel="brand">
        <div class="entry-brand-grid-bg" aria-hidden="true"></div>
        <div class="entry-updates-feed" data-entry-updates role="region" aria-label="Atualizações NextVR">
          <div class="entry-updates-head">
            <span class="entry-updates-dot" aria-hidden="true"></span>
            <span class="entry-updates-title">ATUALIZAÇÕES · NOTIFICAÇÕES</span>
            <span class="entry-updates-badge">v2.0.0</span>
          </div>
          <div class="entry-updates-list">
            <article class="entry-notif-card" data-entry-notif="sixdof">
              <div class="entry-notif-top">
                <span class="entry-notif-tag">AGORA · 6DOF AR</span>
                <span class="entry-notif-time">Novo</span>
              </div>
              <strong class="entry-notif-heading">6DoF Estabilizado &amp; Verso Branco Translúcido</strong>
              <p class="entry-notif-desc">Corrigido o avanço sozinho; travamento horizontal no chão e verso da Dock branco translúcido ao passar por trás.</p>
            </article>
            <article class="entry-notif-card" data-entry-notif="browser-hold">
              <div class="entry-notif-top">
                <span class="entry-notif-tag">NOVO · NAVEGADOR (2S)</span>
                <span class="entry-notif-time">Novo</span>
              </div>
              <strong class="entry-notif-heading">+ Nova Guia &amp; + Guia Anônima</strong>
              <p class="entry-notif-desc">Segure por 2 segundos no app do Navegador (com Hand Tracking de Pinça ou Toque) para escolher + Nova Guia ou + Guia Anônima.</p>
            </article>
            <article class="entry-notif-card" data-entry-notif="dock-pinch">
              <div class="entry-notif-top">
                <span class="entry-notif-tag">CORREÇÃO · HAND TRACKING</span>
                <span class="entry-notif-time">Ativo</span>
              </div>
              <strong class="entry-notif-heading">Pinça Calibrada Perto da Dock (em Bar)</strong>
              <p class="entry-notif-desc">Corrigida a seleção de apps com pinça ao aproximar-se da Dock em barra, com prioridade sobre janelas de fundo.</p>
            </article>
            <article class="entry-notif-card" data-entry-notif="spatial-library">
              <div class="entry-notif-top">
                <span class="entry-notif-tag">GORILLA TAG VR · UPDATE</span>
                <span class="entry-notif-time">Novo</span>
              </div>
              <strong class="entry-notif-heading">Contador de Moedas no Braço Direito &amp; Mãos Corrigidas</strong>
              <p class="entry-notif-desc">Nova logo amarela do Gorilla Tag, contador de moedas 3D no braço direito, mão direita/esquerda corrigidas e saída automática desativada.</p>
            </article>
          </div>
        </div>
        <div class="entry-brand-store-dock">
          <div class="entry-brand-store-info" data-entry-act="store" role="button" tabindex="0">
            <img src="./icons/gorilla-tag-logo.jpg" alt="Gorilla Tag" class="entry-brand-store-thumb" draggable="false" />
            <div class="entry-brand-store-meta">
              <span class="entry-brand-store-tag">STORE · EM DESTAQUE</span>
              <strong class="entry-brand-store-name">Gorilla Tag VR</strong>
            </div>
          </div>
          <div class="entry-brand-store-actions">
            <button type="button" class="entry-btn entry-btn--primary entry-brand-store-open" data-entry-act="store">
              ${SVG_STORE_BAG}<span>${emT('store')}</span>
            </button>
          </div>
        </div>
      </div>`;
  };

  const renderStorePanel = () => {
    const installed = !!S.gorillaInstalled;
    const busy = storeGorillaPct !== null;
    const actionHtml = busy
      ? `<button type="button" class="entry-btn entry-btn--primary" disabled>Baixando... ${storeGorillaPct}%</button>`
      : installed
      ? `<span class="entry-store-badge-ok" data-entry-gorilla-installed>✓ Na Biblioteca</span>
         <button type="button" class="entry-btn entry-btn--primary" data-entry-play-gorilla>Jogar Gorilla Tag</button>`
      : `<button type="button" class="entry-btn entry-btn--primary" data-entry-install-gorilla>BAIXAR</button>`;

    return `
      <div class="entry-subpanel entry-subpanel--store" data-entry-panel="store">
        <div class="entry-subpanel-head">
          <h2 class="entry-subpanel-title">${emT('storeTitle')}</h2>
          <div class="entry-subpanel-actions">
            <button type="button" class="entry-btn entry-btn--ghost" data-entry-act="back">${emT('back')}</button>
            <button type="button" class="entry-btn entry-btn--primary" data-entry-act="start">${emT('startVr')}</button>
          </div>
        </div>

        <div class="entry-store-body">
          <div class="entry-store-featured" data-entry-store-gorilla>
            <img src="./icons/gorilla-tag-logo.jpg" alt="Gorilla Tag" class="entry-store-gorilla-logo" draggable="false" />
            <div class="entry-store-featured-info">
              <div class="entry-store-kicker">DESTAQUE VR · LENTES GOOGLE CARDBOARD 2015</div>
              <div class="entry-store-title">Gorilla Tag</div>
              <div class="entry-store-desc">Mapa da floresta 3D com locomoção física pelas mãos e braços de gorila em Hand Tracking. Ao baixar, vai para a Biblioteca de Apps.</div>
              <div class="entry-store-actions">
                ${actionHtml}
              </div>
            </div>
          </div>

          <div class="entry-store-section-label">APPS DISPONÍVEIS NA STORE &amp; BIBLIOTECA</div>
          <div class="entry-store-grid">
            ${MENU_STORE_APPS.map(app => `
              <div class="entry-store-card" data-entry-store-app="${app.id}">
                <div class="entry-store-card-dot" style="background:${app.bg}">${app.name.slice(0, 2).toUpperCase()}</div>
                <div class="entry-store-card-meta">
                  <div class="entry-store-card-name">${escHtml(app.name)}</div>
                  <div class="entry-store-card-cat">${escHtml(app.cat)}</div>
                </div>
                <span class="entry-store-card-pill">Incluso</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>`;
  };

  const renderSettingsPanel = () => {
    const envs = [
      { id: 'passthrough', label: emT('envAr') },
      { id: 'sunset', label: emT('envSunset') },
      { id: 'night', label: emT('envNight') },
    ];
    const qualities = [
      { id: 'auto', label: emT('qAuto') },
      { id: 'high', label: emT('qHigh') },
      { id: 'medium', label: emT('qMed') },
      { id: 'low', label: emT('qLow') },
    ];
    const activeEnv = S.entryEnvChosen && S.env && S.env !== 'passthrough' ? S.env : 'passthrough';
    const activeQuality = S.quality === 'med' ? 'medium' : (S.quality || 'auto');
    const wideCam = !!S.wideCamera;
    const spatialMode = !!S.spatialLauncher;
    const dockSnapOn = S.dockSnapSlot !== 0;
    const curLang = S.lang || 'pt';
    const vol = Number.isFinite(S.mediaVolume) ? S.mediaVolume : 70;
    const bri = Number.isFinite(S.brightness) ? S.brightness : 75;
    return `
      <div class="entry-subpanel entry-subpanel--settings" data-entry-panel="settings">
        <div class="entry-subpanel-head">
          <h2 class="entry-subpanel-title">${emT('basicSettings')}</h2>
          <div class="entry-subpanel-actions">
            <button type="button" class="entry-btn entry-btn--ghost" data-entry-act="back">${emT('back')}</button>
            <button type="button" class="entry-btn entry-btn--primary" data-entry-act="start">${emT('startVr')}</button>
          </div>
        </div>
        <div class="entry-bento-grid">
          <div class="entry-bento-cell entry-bento-cell--idioma">
            <div class="entry-bento-title">${emT('langCell')}</div>
            <div class="entry-seg-row entry-seg-row--compact">
              <button type="button" class="entry-seg-btn ${curLang === 'pt' ? 'on' : ''}" data-entry-lang="pt">PT</button>
              <button type="button" class="entry-seg-btn ${curLang === 'en' ? 'on' : ''}" data-entry-lang="en">EN</button>
              <button type="button" class="entry-seg-btn ${curLang === 'es' ? 'on' : ''}" data-entry-lang="es">ES</button>
              <button type="button" class="entry-seg-btn ${curLang === 'ja' ? 'on' : ''}" data-entry-lang="ja">JA</button>
              <button type="button" class="entry-seg-btn ${curLang === 'ru' ? 'on' : ''}" data-entry-lang="ru">RU</button>
              <button type="button" class="entry-seg-btn ${curLang === 'de' ? 'on' : ''}" data-entry-lang="de">DE</button>
            </div>
          </div>

          <div class="entry-bento-cell entry-bento-cell--spatial">
            <div class="entry-bento-title">${emT('spatialCell')}</div>
            <div class="entry-seg-row entry-seg-row--compact">
              <button type="button" class="entry-seg-btn ${spatialMode ? 'on' : ''}" data-entry-spatial="1">${emT('on')}</button>
              <button type="button" class="entry-seg-btn ${!spatialMode ? 'on' : ''}" data-entry-spatial="0">${emT('dock')}</button>
              <button type="button" class="entry-seg-btn ${dockSnapOn ? 'on' : ''}" data-entry-dock-snap="${dockSnapOn ? '1' : '0'}" title="Espaço pré-definido ao mover janelas na Dock normal">${dockSnapOn ? emT('dockSnapOn') : emT('dockSnapOff')}</button>
            </div>
          </div>

          <div class="entry-bento-cell entry-bento-cell--qualidade">
            <div class="entry-bento-title">${emT('qualityCell')}</div>
            <div class="entry-seg-row entry-seg-row--compact">
              ${qualities.map(q => `<button type="button" class="entry-seg-btn ${activeQuality === q.id ? 'on' : ''}" data-entry-quality="${q.id}">${q.label}</button>`).join('')}
            </div>
          </div>

          <div class="entry-bento-cell entry-bento-cell--ocular">
            <div class="entry-bento-title">${emT('ocularCell')} · 3DoF / 6DoF</div>
            <div class="entry-seg-row entry-seg-row--compact">
              <button type="button" class="entry-seg-btn ${wideCam ? 'on' : ''}" data-entry-wide-cam="1">0.5x</button>
              <button type="button" class="entry-seg-btn ${!wideCam ? 'on' : ''}" data-entry-wide-cam="0">1.0x</button>
              <button type="button" class="entry-seg-btn ${S.sixdof === 0 ? 'on' : ''}" data-entry-dof="3dof" title="Modo 3DoF (rotação de cabeça)">3DoF</button>
              <button type="button" class="entry-seg-btn ${S.sixdof !== 0 ? 'on' : ''}" data-entry-dof="6dof" title="Modo 6DoF Falso (andar no espaço)">6DoF</button>
            </div>
          </div>

          <div class="entry-bento-cell entry-bento-cell--volume">
            <div class="entry-bento-slider-head">
              <span class="entry-bento-big">${emT('volumeCell')}</span>
              <span class="entry-bento-val" data-vol-val>${vol}%</span>
            </div>
            <input type="range" min="0" max="100" value="${vol}" class="entry-slider" data-entry-volume />
          </div>

          <div class="entry-bento-cell entry-bento-cell--brilho">
            <div class="entry-bento-slider-head">
              <span class="entry-bento-big">${emT('brightnessCell')}</span>
              <span class="entry-bento-val" data-bri-val>${bri}%</span>
            </div>
            <input type="range" min="10" max="100" value="${bri}" class="entry-slider" data-entry-brightness />
          </div>

          <div class="entry-bento-cell entry-bento-cell--hand">
            <div class="entry-bento-title">${emT('handCell')}</div>
            <div class="entry-hand-col">
              <button type="button" class="entry-seg-btn ${S.handDraw ? 'on' : ''}" data-entry-hand-draw="1">${emT('handDrawn')}</button>
              <button type="button" class="entry-seg-btn ${!S.handDraw ? 'on' : ''}" data-entry-hand-draw="0">${emT('handInvisible')}</button>
              <button type="button" class="entry-seg-btn ${S.fingerTouch !== 0 ? 'on' : ''}" data-entry-finger-touch="${S.fingerTouch !== 0 ? '1' : '0'}" title="Toque com o indicador indo à frente sem precisar pinçar">${S.fingerTouch !== 0 ? emT('fingerTouchOn') : emT('fingerTouchOff')}</button>
              <button type="button" class="entry-seg-btn ${S.showFps ? 'on' : ''}" data-entry-fps="1">FPS: ${S.showFps ? 'ON' : 'OFF'}</button>
              <div class="entry-hand-env-title">${emT('envTitle')}</div>
              ${envs.map(e => `<button type="button" class="entry-seg-btn ${activeEnv === e.id ? 'on' : ''}" data-entry-env="${e.id}">${e.label}</button>`).join('')}
            </div>
          </div>
        </div>
      </div>`;
  };

  const renderCollaboratorsPanel = () => `
    <div class="entry-subpanel" data-entry-panel="collaborators">
      <div class="entry-subpanel-head">
        <h2 class="entry-subpanel-title">${emT('collaborators')}</h2>
        <div class="entry-subpanel-actions">
          <button type="button" class="entry-btn entry-btn--ghost" data-entry-act="back">${emT('back')}</button>
        </div>
      </div>
      <div class="entry-collab-list" role="list">
        ${ENTRY_COLLABORATORS.map(name => {
          const bio = ENTRY_COLLABORATOR_BIOS[name] || '';
          const isBlue = name === 'colaboradores do nextVR';
          return `
          <div class="entry-collab-item ${isBlue ? 'entry-collab-item--blue' : ''}" role="listitem" data-collaborator-name="${name}">
            <span class="entry-collab-name-row">
              <span class="entry-collab-name ${isBlue ? 'entry-collab-name--blue' : ''}" ${isBlue ? 'data-collab-blue="1"' : ''}>${name}</span>
              <span class="entry-collab-verified" data-collab-verified="${name}" title="Verificado">${SVG_TIKTOK_VERIFIED}</span>
              ${bio ? `<span class="entry-collab-bio" data-collab-bio="${name}">${escHtml(bio)}</span>` : ''}
            </span>
          </div>`;
        }).join('')}
      </div>
    </div>`;

  const renderAboutPanel = () => `
    <div class="entry-subpanel entry-subpanel--about" data-entry-panel="about">
      <div class="entry-subpanel-head">
        <h2 class="entry-subpanel-title" data-about-title>${ENTRY_ABOUT_TITLE}</h2>
        <div class="entry-subpanel-actions">
          <button type="button" class="entry-btn entry-btn--ghost" data-entry-act="back">Voltar</button>
        </div>
      </div>
      <div class="entry-about-body" data-about-body>
        ${ENTRY_ABOUT_PARAGRAPHS.map((p, idx) => `
          <p class="entry-about-p ${idx === ENTRY_ABOUT_PARAGRAPHS.length - 1 ? 'entry-about-p--closing' : ''}">${p}</p>
        `).join('')}
      </div>
    </div>`;

  const renderProfilePanel = () => {
    const currentName = S.profileName || '';
    const currentAvatar = S.profileAvatar || '';
    const avatarInner = currentAvatar
      ? `<img src="${escHtml(currentAvatar)}" alt="Foto de perfil" class="entry-login-avatar-img" data-profile-avatar-img />`
      : SVG_USER;
    return `
      <div class="entry-subpanel entry-subpanel--profile" data-entry-panel="profile">
        <div class="entry-subpanel-head">
          <h2 class="entry-subpanel-title">Login / Perfil NextVR</h2>
          <div class="entry-subpanel-actions">
            <button type="button" class="entry-btn entry-btn--ghost" data-entry-act="back">Voltar</button>
            <button type="button" class="entry-btn entry-btn--primary" data-profile-save>Salvar Login</button>
          </div>
        </div>
        <div class="entry-login-body">
          <div class="entry-login-left">
            <div class="entry-login-avatar-preview" data-profile-avatar-preview title="Toque para escolher foto da galeria">
              ${avatarInner}
            </div>
            <button type="button" class="entry-btn entry-btn--primary entry-login-upload-btn" data-profile-upload>
              Escolher Foto da Galeria
            </button>
            <input type="file" accept="image/*" data-profile-file hidden />
          </div>
          <div class="entry-login-right">
            <label class="entry-login-label">
              <span>SEU NOME / NICK</span>
              <input type="text" class="entry-login-input" data-profile-name-input maxlength="24" placeholder="Digite seu nome..." value="${escHtml(currentName)}" />
            </label>
            <div class="entry-login-presets-wrap">
              <span class="entry-login-presets-title">OU ESCOLHA UM AVATAR</span>
              <div class="entry-login-presets">
                ${PRESET_AVATARS.map(a => `
                  <button type="button" class="entry-login-preset ${currentAvatar === a.url ? 'on' : ''}" data-profile-preset="${escHtml(a.url)}" title="${escHtml(a.label)}">
                    <img src="${escHtml(a.url)}" alt="${escHtml(a.label)}" />
                  </button>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>`;
  };

  const renderLoadingScreen = (batInfo) => {
    const statusText = loadingStatusForPct(loadingPct);
    return `
      <div class="entry-hud-screen" data-entry-panel="loading" role="status" aria-live="polite">
        <div class="entry-subtitle">${ENTRY_SUBTITLE}</div>

        <header class="entry-hud-top">
          <div class="entry-hud-top-left" aria-hidden="true">
            <div class="entry-hud-sq-box"><div class="entry-hud-sq-inner"></div></div>
            <div class="entry-hud-lines">
              <span class="entry-hud-line-short"></span>
              <span class="entry-hud-line-long"></span>
            </div>
            <div class="entry-hud-vdiv"></div>
          </div>

          <div class="entry-hud-top-right">
            <div class="entry-hud-vdiv" aria-hidden="true"></div>
            <div class="entry-hud-rect" aria-hidden="true">
              <span>NEXTVR</span>
              <b data-entry-battery-top>${batInfo.text}</b>
            </div>
            <button type="button" class="entry-hud-rect entry-hud-rect--btn" data-entry-cancel-countdown title="Cancelar">
              CANCELAR
            </button>
          </div>
        </header>

        <div class="entry-hud-center">
          <div class="entry-hud-frame-wrap">
            <svg class="entry-hud-frame-svg" viewBox="0 0 920 400" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <filter id="entryHudGlow" x="-15%" y="-15%" width="130%" height="130%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <polygon points="274,14 646,14 628,32 292,32" fill="#00f2fe" filter="url(#entryHudGlow)" />
              <polygon points="292,368 628,368 646,386 274,386" fill="#00f2fe" filter="url(#entryHudGlow)" />
              <path d="M 68,14 L 256,14 L 284,42 L 636,42 L 664,14 L 852,14 L 876,66 L 868,78 Q 906,200 868,322 L 876,334 L 852,386 L 664,386 L 636,358 L 284,358 L 256,386 L 68,386 L 44,334 L 52,322 Q 14,200 52,78 L 44,66 Z"
                fill="rgba(4, 34, 58, 0.34)"
                stroke="#38bdf8"
                stroke-width="2.5"
                stroke-linejoin="round" />
            </svg>

            <div class="entry-hud-frame-content">
              <div class="entry-hud-brand">NextVR</div>
              <div class="entry-hud-pct-row">
                <span class="entry-hud-pct" data-entry-load-pct>${loadingPct}%</span>
                <span class="entry-hud-sec">(<b data-entry-countdown>${countdownSec}</b>s)</span>
              </div>
              <div class="entry-hud-status" data-entry-load-status>${statusText}</div>
              <div class="entry-hud-hint" data-entry-countdown-sub>COLOQUE O CELULAR NO VR BOX · Iniciando em ${countdownSec}s...</div>
            </div>
          </div>
        </div>

        <footer class="entry-hud-bottom">
          <div class="entry-hud-bar-track">
            <div class="entry-hud-bar-fill" data-entry-load-bar style="width:${loadingPct}%"></div>
          </div>
        </footer>
      </div>`;
  };

  const paint = () => {
    const batInfo = currentBattery();
    if (activeView === 'loading') {
      root.innerHTML = renderLoadingScreen(batInfo);
      const cancelCountdownBtn = root.querySelector('[data-entry-cancel-countdown]');
      if (cancelCountdownBtn) {
        cancelCountdownBtn.onclick = () => {
          stopCountdown();
          activeView = 'home';
          paint();
        };
      }
      return;
    }

    const rightStageContent =
      activeView === 'settings' ? renderSettingsPanel() :
      activeView === 'collaborators' ? renderCollaboratorsPanel() :
      activeView === 'about' ? renderAboutPanel() :
      activeView === 'profile' ? renderProfilePanel() :
      activeView === 'store' ? renderStorePanel() :
      renderBrandStage();

    const displayName = S.profileName ? escHtml(S.profileName) : 'NextVR (Login)';
    const profileAvatarHtml = S.profileAvatar
      ? `<img src="${escHtml(S.profileAvatar)}" alt="" class="entry-profile-q-img" />`
      : SVG_USER;

    root.innerHTML = `
      <div class="entry-left-pattern" aria-hidden="true">
        <div class="entry-left-slashes"></div>
      </div>

      <header class="entry-top-header">
        <div class="entry-top-bars" aria-hidden="true"></div>
        <h1 class="entry-main-title">MAIN MENU</h1>
        <div class="entry-subtitle">${ENTRY_SUBTITLE}</div>
        <div class="entry-top-right-cluster">
          <button type="button" class="entry-top-store-btn ${activeView === 'store' ? 'on' : ''}" data-entry-act="store" title="Abrir Store NextVR">
            ${SVG_STORE_BAG}
            <span>${emT('store')}</span>
          </button>
          <div class="entry-top-battery" data-entry-battery-pill title="Bateria sincronizada com o celular">
            <span class="entry-top-bat-bar"><i data-entry-battery-fill style="width:${batInfo.percent}%"></i></span>
            <b data-entry-battery-top>${batInfo.text}</b>
          </div>
        </div>
        <button type="button" class="entry-top-reticle" data-entry-act="gear" title="Configurações">${SVG_RETICLE}</button>
      </header>

      <div class="entry-rail-backdrop" aria-hidden="true">
        <div class="entry-rail-lines"></div>
      </div>

      <div class="entry-layout">
        <aside class="entry-left-column">
          ${renderSlantedButtons()}

          <div class="entry-profile-box" data-entry-act="profile" role="button" tabindex="0" title="Clique para editar Nome e Foto de Perfil">
            <button type="button" class="entry-profile-q" data-entry-act="profile" title="Foto de Perfil / Login">${profileAvatarHtml}</button>
            <div class="entry-profile-info">
              <div class="entry-profile-name"><span data-profile-display-name>${displayName}</span> <small class="entry-profile-edit-tag">PERFIL</small></div>
              <div class="entry-profile-meta">Hand: <span data-profile-hand>${handStyleText(S.handDraw)}</span></div>
              <div class="entry-profile-meta">Hora: <span data-entry-clock>${currentClock()}</span> · Bat: <span data-entry-battery>${batInfo.text}</span></div>
            </div>
            <div class="entry-profile-ver">${ENTRY_VERSION}</div>
          </div>
        </aside>

        <main class="entry-right-stage">
          ${rightStageContent}
          ${activeView === 'home' ? `
            <button type="button" class="entry-corner-back" data-entry-act="start" title="Iniciar">
              ${SVG_BACK_ARROW}
            </button>
          ` : ''}
        </main>
      </div>
    `;

    root.querySelectorAll('[data-entry-act="start"]').forEach(btn => {
      btn.onclick = () => {
        if (fullscreen) {
          startCountdown();
        } else {
          onStart?.();
        }
      };
    });
    const cancelCountdownBtn = root.querySelector('[data-entry-cancel-countdown]');
    if (cancelCountdownBtn) {
      cancelCountdownBtn.onclick = () => {
        stopCountdown();
        activeView = 'home';
        paint();
      };
    }
    root.querySelectorAll('[data-entry-act="settings"], [data-entry-act="gear"]').forEach(btn => {
      btn.onclick = () => {
        stopCountdown();
        activeView = activeView === 'settings' ? 'home' : 'settings';
        paint();
      };
    });
    root.querySelectorAll('[data-entry-act="store"]').forEach(btn => {
      btn.onclick = e => {
        e.stopPropagation();
        stopCountdown();
        activeView = activeView === 'store' ? 'home' : 'store';
        paint();
      };
    });
    root.querySelectorAll('[data-entry-act="hand-style"]').forEach(btn => {
      btn.onclick = () => {
        toggleHandTrackingStyle();
        paint();
      };
    });
    root.querySelectorAll('[data-entry-act="collaborators"]').forEach(btn => {
      btn.onclick = () => {
        stopCountdown();
        activeView = activeView === 'collaborators' ? 'home' : 'collaborators';
        paint();
      };
    });
    root.querySelectorAll('[data-entry-act="about"]').forEach(btn => {
      btn.onclick = () => {
        stopCountdown();
        activeView = activeView === 'about' ? 'home' : 'about';
        paint();
      };
    });
    root.querySelectorAll('[data-entry-act="profile"]').forEach(btn => {
      btn.onclick = e => {
        e.stopPropagation();
        stopCountdown();
        activeView = activeView === 'profile' ? 'home' : 'profile';
        paint();
      };
    });
    root.querySelectorAll('[data-entry-act="back"]').forEach(btn => {
      btn.onclick = () => {
        stopCountdown();
        activeView = 'home';
        paint();
      };
    });

    // Eventos da Store no menu principal
    const installGorillaBtn = root.querySelector('[data-entry-install-gorilla]');
    if (installGorillaBtn) {
      installGorillaBtn.onclick = () => {
        S.gorillaInstalled = 1;
        save(S);
        emit('gorilla-installed', true);
        if (window.__gorillaFastTest) {
          storeGorillaPct = null;
          paint();
          return;
        }
        storeGorillaPct = 45;
        paint();
        setTimeout(() => {
          storeGorillaPct = 90;
          if (activeView === 'store') paint();
        }, 110);
        setTimeout(() => {
          storeGorillaPct = null;
          if (activeView === 'store') paint();
        }, 230);
      };
    }

    const playGorillaBtn = root.querySelector('[data-entry-play-gorilla]');
    if (playGorillaBtn) {
      playGorillaBtn.onclick = () => {
        S.gorillaInstalled = 1;
        save(S);
        emit('gorilla-installed', true);
        if (typeof onLaunchGorilla === 'function') {
          onLaunchGorilla();
        } else {
          onStart?.();
        }
      };
    }

    // Eventos do painel Login / Perfil
    const nameInput = root.querySelector('[data-profile-name-input]');
    if (nameInput) {
      nameInput.oninput = () => {
        S.profileName = nameInput.value.trim();
        save(S);
        const disp = root.querySelector('[data-profile-display-name]');
        if (disp) disp.textContent = S.profileName || 'NextVR (Login)';
      };
    }
    const saveProfileBtn = root.querySelector('[data-profile-save]');
    if (saveProfileBtn) {
      saveProfileBtn.onclick = () => {
        if (nameInput) S.profileName = nameInput.value.trim();
        save(S);
        emit('profile-updated', { name: S.profileName, avatar: S.profileAvatar });
        activeView = 'home';
        paint();
      };
    }
    root.querySelectorAll('[data-profile-preset]').forEach(btn => {
      btn.onclick = () => {
        if (nameInput) S.profileName = nameInput.value.trim();
        S.profileAvatar = btn.dataset.profilePreset;
        save(S);
        emit('profile-updated', { name: S.profileName, avatar: S.profileAvatar });
        paint();
      };
    });
    const uploadBtn = root.querySelector('[data-profile-upload]');
    const avatarPreview = root.querySelector('[data-profile-avatar-preview]');
    const fileInput = root.querySelector('[data-profile-file]');
    const openGalleryPicker = () => {
      if (nameInput) {
        S.profileName = nameInput.value.trim();
        save(S);
      }
      if (typeof window.NativeXR?.pickProfilePhoto === 'function') {
        window.NativeXR.pickProfilePhoto();
      } else if (fileInput) {
        fileInput.click();
      }
    };
    if (uploadBtn) uploadBtn.onclick = openGalleryPicker;
    if (avatarPreview) avatarPreview.onclick = openGalleryPicker;
    if (fileInput) {
      fileInput.onchange = () => {
        const file = fileInput.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = 160;
            canvas.height = 160;
            const ctx = canvas.getContext('2d');
            const minSide = Math.min(img.width, img.height);
            const sx = (img.width - minSide) / 2;
            const sy = (img.height - minSide) / 2;
            ctx.drawImage(img, sx, sy, minSide, minSide, 0, 0, 160, 160);
            if (nameInput) S.profileName = nameInput.value.trim();
            S.profileAvatar = canvas.toDataURL('image/jpeg', 0.86);
            save(S);
            emit('profile-updated', { name: S.profileName, avatar: S.profileAvatar });
            paint();
          };
          img.src = String(reader.result);
        };
        reader.readAsDataURL(file);
      };
    }

    root.querySelectorAll('[data-entry-hand-draw]').forEach(btn => {
      btn.onclick = () => {
        S.handsOn = 1;
        S.handDraw = btn.dataset.entryHandDraw === '1' ? 1 : 0;
        save(S);
        window.NativeXR?.handVisuals?.(!!S.handDraw);
        emit('handDraw', !!S.handDraw);
        paint();
      };
    });
    root.querySelectorAll('[data-entry-finger-touch]').forEach(btn => {
      btn.onclick = () => {
        S.fingerTouch = S.fingerTouch === 0 ? 1 : 0;
        save(S);
        window.NativeXR?.setFingerTouch?.(Boolean(S.fingerTouch));
        emit('fingerTouch', !!S.fingerTouch);
        paint();
      };
    });
    root.querySelectorAll('[data-entry-env]').forEach(btn => {
      btn.onclick = () => {
        const envId = btn.dataset.entryEnv;
        S.entryEnvChosen = 1;
        if (envId === 'passthrough') {
          S.env = 'passthrough';
          save(S);
          setPassthrough(true);
        } else {
          setEnvironment(envId);
        }
        paint();
      };
    });
    root.querySelectorAll('[data-entry-quality]').forEach(btn => {
      btn.onclick = () => {
        S.quality = btn.dataset.entryQuality === 'med' ? 'medium' : btn.dataset.entryQuality;
        save(S);
        emit('quality', S.quality);
        window.NativeXR?.setQuality?.(S.quality);
        paint();
      };
    });
    root.querySelectorAll('[data-entry-dock-snap]').forEach(btn => {
      btn.onclick = () => {
        S.dockSnapSlot = S.dockSnapSlot === 0 ? 1 : 0;
        save(S);
        emit('dockSnapSlot', !!S.dockSnapSlot);
        paint();
      };
    });
    root.querySelectorAll('[data-entry-wide-cam]').forEach(btn => {
      btn.onclick = () => {
        S.wideCamera = btn.dataset.entryWideCam === '1' ? 1 : 0;
        save(S);
        window.NativeXR?.wideCamera?.(!!S.wideCamera);
        emit('wideCamera', !!S.wideCamera);
        paint();
      };
    });
    root.querySelectorAll('[data-entry-dof]').forEach(btn => {
      btn.onclick = () => {
        const enableSixDof = btn.dataset.entryDof === '6dof';
        S.sixdof = enableSixDof ? 1 : 0;
        save(S);
        if (!enableSixDof) SixDof.reset();
        window.NativeXR?.setSixDofEnabled?.(enableSixDof);
        emit('sixdof', enableSixDof);
        paint();
      };
    });
    root.querySelectorAll('[data-entry-spatial]').forEach(btn => {
      btn.onclick = () => {
        S.spatialLauncher = btn.dataset.entrySpatial === '1' ? 1 : 0;
        if (S.spatialLauncher) {
          S.env = 'passthrough';
          setPassthrough(true);
        }
        save(S);
        emit('spatialLauncher', !!S.spatialLauncher);
        paint();
      };
    });
    root.querySelectorAll('[data-entry-lang]').forEach(btn => {
      btn.onclick = () => {
        setLang(btn.dataset.entryLang);
        paint();
      };
    });
    root.querySelectorAll('[data-entry-fps]').forEach(btn => {
      btn.onclick = () => {
        S.showFps = S.showFps ? 0 : 1;
        save(S);
        emit('fps-toggle', S.showFps);
        paint();
      };
    });
    const volSlider = root.querySelector('[data-entry-volume]');
    if (volSlider) {
      volSlider.oninput = () => {
        const val = Number(volSlider.value);
        S.mediaVolume = val;
        save(S);
        if (native) window.NativeXR?.setMediaVolumePercent?.(val);
        const span = root.querySelector('[data-vol-val]');
        if (span) span.textContent = `${val}%`;
      };
    }
    const briSlider = root.querySelector('[data-entry-brightness]');
    if (briSlider) {
      briSlider.oninput = () => {
        const val = Number(briSlider.value);
        S.brightness = val;
        save(S);
        if (native) window.NativeXR?.setBrightnessPercent?.(val);
        const span = root.querySelector('[data-bri-val]');
        if (span) span.textContent = `${val}%`;
      };
    }
  };

  paint();
  root.resetToHome = () => {
    stopCountdown();
    activeView = 'home';
    paint();
  };

  on('handDraw', () => {
    const label = handStyleText(S.handDraw);
    const badge = root.querySelector('[data-hand-style-label]');
    const profHand = root.querySelector('[data-profile-hand]');
    const card = root.querySelector('[data-entry-act="hand-style"]');
    if (badge) badge.textContent = label;
    if (profHand) profHand.textContent = label;
    if (card) {
      card.dataset.handDraw = S.handDraw ? '1' : '0';
      card.classList.toggle('entry-card--hand-drawn', !!S.handDraw);
      card.classList.toggle('entry-card--hand-invisible', !S.handDraw);
    }
  });

  const syncClockAndBatteryDom = () => {
    const clockEl = root.querySelector('[data-entry-clock]');
    if (clockEl) clockEl.textContent = currentClock();
    const bat = currentBattery();
    const batEl = root.querySelector('[data-entry-battery]');
    const batTopEl = root.querySelector('[data-entry-battery-top]');
    const batFillEl = root.querySelector('[data-entry-battery-fill]');
    if (batEl) batEl.textContent = bat.text;
    if (batTopEl) batTopEl.textContent = bat.text;
    if (batFillEl) batFillEl.style.width = `${bat.percent}%`;
  };

  on('device-status', syncClockAndBatteryDom);

  window.nextvrProfilePhoto = dataUrl => {
    if (!dataUrl) return;
    S.profileAvatar = String(dataUrl);
    save(S);
    emit('profile-updated', { name: S.profileName, avatar: S.profileAvatar });
    paint();
  };

  return root;
}
