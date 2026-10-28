import { settings as S, save, emit, on, setLang, langTable, setEnvironment, setPassthrough, setBwCamera, setWorldLock, native, SixDof } from './core.js';
import { CHARACTER_OPTIONS, loadCharacter, saveCharacter, drawCharacter2D } from './character-creator.js';
import { dockCatalogAll, extraDockIds, toggleExtraDockId } from './dock-catalog.js';
import { licenseStatus, activateKey, deviceCode, formatKey, licenseMessage, normalizeKey, KEY_LENGTH } from './license.js';
import { nightCameraState, setNightCameraMode, setTorchAuto } from './night-camera.js';
import {
  ENTRY_VERSION,
  ENTRY_VERSION_ALPHA,
  ENTRY_SUBTITLE,
  ENTRY_TAGLINE_TOP,
  ENTRY_TAGLINE_BOTTOM,
  ENTRY_COLLABORATORS,
  ENTRY_COLLABORATOR_BIOS,
  ENTRY_VERIFIED_NAMES,
  isVerifiedProfileName,
  ENTRY_ABOUT_TITLE,
  ENTRY_ABOUT_PARAGRAPHS,
  ENTRY_ABOUT_TEXT,
  ENTRY_UPDATES,
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
  ENTRY_UPDATES,
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

const SVG_PICO4_PRO_MEDALLION = `
<svg viewBox="0 0 260 260" class="entry-pico4pro-svg" aria-label="PICO 4 Pro">
  <defs>
    <linearGradient id="p4pVisor" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="35%" stop-color="#d4d4d8"/>
      <stop offset="70%" stop-color="#52525b"/>
      <stop offset="100%" stop-color="#18181b"/>
    </linearGradient>
    <linearGradient id="p4pFrontGlass" x1="0" y1="0" x2="1" y2="0.8">
      <stop offset="0%" stop-color="#3f3f46"/>
      <stop offset="45%" stop-color="#18181b"/>
      <stop offset="100%" stop-color="#09090b"/>
    </linearGradient>
    <linearGradient id="p4pStrap" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f4f4f5"/>
      <stop offset="100%" stop-color="#a1a1aa"/>
    </linearGradient>
  </defs>
  <!-- Estrela concêntrica de fundo dentro do medalhão -->
  <polygon points="130,18 156,84 228,88 171,132 190,202 130,162 70,202 89,132 32,88 104,84" fill="#18181b" stroke="#52525b" stroke-width="3"/>
  <!-- Alça superior e traseira do PICO 4 Pro -->
  <path d="M58 102 C58 52, 202 52, 202 102" fill="none" stroke="url(#p4pStrap)" stroke-width="12" stroke-linecap="round"/>
  <path d="M130 48 L130 74" fill="none" stroke="#e4e4e7" stroke-width="10" stroke-linecap="round"/>
  <!-- Hastes laterais brancas/cinzas do PICO 4 Pro -->
  <rect x="30" y="92" width="28" height="22" rx="9" fill="url(#p4pStrap)" stroke="#09090b" stroke-width="3"/>
  <rect x="202" y="92" width="28" height="22" rx="9" fill="url(#p4pStrap)" stroke="#09090b" stroke-width="3"/>
  <!-- Carcaça principal do visor PICO 4 Pro -->
  <rect x="44" y="68" width="172" height="74" rx="34" fill="url(#p4pVisor)" stroke="#09090b" stroke-width="4.5"/>
  <!-- Lente frontal espelhada escura PICO 4 Pro -->
  <rect x="54" y="76" width="152" height="58" rx="27" fill="url(#p4pFrontGlass)" stroke="#e4e4e7" stroke-width="2.2"/>
  <!-- Reflexo diagonal prateado no visor -->
  <path d="M76 80 L118 80 L94 130 L62 130 Z" fill="rgba(255,255,255,0.16)"/>
  <path d="M130 80 L146 80 L122 130 L106 130 Z" fill="rgba(255,255,255,0.09)"/>
  <!-- 4 câmeras de rastreamento óptico nos cantos do visor -->
  <circle cx="68" cy="89" r="5" fill="#09090b" stroke="#a1a1aa" stroke-width="2"/>
  <circle cx="192" cy="89" r="5" fill="#09090b" stroke="#a1a1aa" stroke-width="2"/>
  <circle cx="68" cy="121" r="5" fill="#09090b" stroke="#a1a1aa" stroke-width="2"/>
  <circle cx="192" cy="121" r="5" fill="#09090b" stroke="#a1a1aa" stroke-width="2"/>
  <!-- LED central e logo PICO 4 PRO -->
  <rect x="108" y="99" width="44" height="5" rx="2.5" fill="#ffffff"/>
  <text x="130" y="118" text-anchor="middle" fill="#e4e4e7" font-family="Inter,sans-serif" font-weight="900" font-size="10" letter-spacing="1.8">PICO 4 PRO</text>
  <!-- Controle Esquerdo PICO 4 Pro -->
  <g transform="translate(46, 152) rotate(-14)">
    <ellipse cx="32" cy="24" rx="26" ry="14" fill="none" stroke="#e4e4e7" stroke-width="6"/>
    <ellipse cx="32" cy="24" rx="26" ry="14" fill="none" stroke="#09090b" stroke-width="1.8"/>
    <rect x="22" y="16" width="18" height="44" rx="9" fill="url(#p4pStrap)" stroke="#09090b" stroke-width="3"/>
    <circle cx="31" cy="24" r="5" fill="#18181b" stroke="#ffffff" stroke-width="1.5"/>
  </g>
  <!-- Controle Direito PICO 4 Pro -->
  <g transform="translate(148, 138) rotate(14)">
    <ellipse cx="32" cy="24" rx="26" ry="14" fill="none" stroke="#e4e4e7" stroke-width="6"/>
    <ellipse cx="32" cy="24" rx="26" ry="14" fill="none" stroke="#09090b" stroke-width="1.8"/>
    <rect x="22" y="16" width="18" height="44" rx="9" fill="url(#p4pStrap)" stroke="#09090b" stroke-width="3"/>
    <circle cx="31" cy="24" r="5" fill="#18181b" stroke="#ffffff" stroke-width="1.5"/>
  </g>
</svg>`;

const SVG_PICO4_PRO_MINI = `
<svg viewBox="0 0 64 64" class="entry-pico4pro-mini-svg" aria-hidden="true">
  <circle cx="32" cy="32" r="29" fill="#18181b" stroke="#ffffff" stroke-width="3"/>
  <path d="M16 28 C16 14, 48 14, 48 28" fill="none" stroke="#d4d4d8" stroke-width="4" stroke-linecap="round"/>
  <rect x="11" y="23" width="42" height="20" rx="10" fill="#e4e4e7" stroke="#09090b" stroke-width="2.5"/>
  <rect x="15" y="26" width="34" height="14" rx="7" fill="#09090b" stroke="#a1a1aa" stroke-width="1.2"/>
  <rect x="25" y="32" width="14" height="2.4" rx="1.2" fill="#ffffff"/>
</svg>`;

const MENU_STORE_APPS = [
  { id: 'mr-pistol', name: 'ShootTheDie', cat: 'MR · G18 & Alvos 3D · 4.9 ★', bg: '#080a0f', img: './icons/shootthedie-logo.jpg' },
  { id: 'hand-draw', name: 'paintdrawer', cat: 'Desenhar com Hand Tracking · 4.9 ★', bg: '#09090b', img: './icons/paintdrawer-logo.jpg' },
  { id: 'vrfs', name: 'VRFS · Futebol VR', cat: 'Chuteiras VR · Bola 3D · 4.9 ★', bg: '#052e16', img: './icons/vrfs-logo.jpg' },
  { id: 'beat-vr', name: 'Beat Saber', cat: 'Modo VR Imediato · 4.9 ★', bg: '#070814', img: './beat-saber-logo.jpg' },
  { id: 'hyper-vr', name: 'Hyper Dash VR', cat: 'Ação · Arena VR · 4.8 ★', bg: '#0a1426', img: './hyper-dash-logo.jpg' },
  { id: 'roblox-vr', name: 'Roblox', cat: 'Ambiente Preto · 4.8 ★', bg: '#090d16', img: './roblox-logo.jpg' },
  { id: 'tiktok', name: 'TikTok', cat: 'Vídeos Curtos · 4.9 ★', bg: '#000000', img: './tiktok-logo.jpg' },
  { id: 'youtube', name: 'YouTube VR', cat: 'Vídeo · 360° · 4.8 ★', bg: '#dc2626', img: './icons/youtube.svg' },
  { id: 'discord', name: 'Discord', cat: 'Social · Voz · 4.7 ★', bg: '#4f46e5', img: './icons/discord.svg' },
  { id: 'netflix', name: 'Netflix', cat: 'Cinema · TV · 4.8 ★', bg: '#991b1b' },
  { id: 'spotify', name: 'Spotify', cat: 'Música · Áudio · 4.8 ★', bg: '#059669', img: './icons/spotify.svg' },
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
    storeTitle: 'Store ATMOXR — Jogos & Apps',
    langCell: 'IDIOMA', spatialCell: 'SPATIAL APP', on: 'Ativado', dock: 'Dock',
    dockSnapOn: 'Slot Dock: ON', dockSnapOff: 'Slot Dock: OFF',
    qualityCell: 'qualidade', qAuto: 'Auto', qHigh: 'Alta (1080p)', qMed: 'Média (890p)', qLow: 'Baixa (390p)',
    ocularCell: 'câmera grande ocular (0.5x)', volumeCell: 'VOLUME', brightnessCell: 'BRILHO',
    handCell: 'Hand tracking', fingerTouchOn: 'Raio Laser PICO 4: ON', fingerTouchOff: 'Raio Laser PICO 4: OFF',
    envTitle: 'Ambiente', envAr: 'Câmera (AR)', envSunset: 'Pôr do Sol', envNight: 'Noite',
  },
  en: {
    start: 'Start', startVr: 'Start VR', settings: 'Settings', basicSettings: 'Basic Settings',
    handStyle: 'Hand tracking style', handDrawn: 'Drawn hand', handInvisible: 'Invisible',
    collaborators: 'Collaborators', about: 'About', back: 'Back', store: 'Store',
    storeTitle: 'ATMOXR Store — Games & Apps',
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
    storeTitle: 'Tienda ATMOXR — Juegos y Apps',
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
    storeTitle: 'ATMOXR ストア — ゲーム＆アプリ',
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
    storeTitle: 'Магазин ATMOXR — Игры и Приложения',
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
    storeTitle: 'ATMOXR Store — Spiele & Apps',
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

  let activeView = 'home'; // 'home' | 'settings' | 'collaborators' | 'about' | 'profile' | 'store' | 'license' | 'loading'
  // Build 90 — aviso mostrado no painel da Key quando o jogador tenta iniciar sem licença.
  let licensePrompt = '';

  /*
   * Build 90 — a Key libera o jogo.
   *
   * "botou a Key pronto, não precisa por denovo" — então o app só insiste enquanto não houver
   * licença ATIVA neste aparelho. Duas proteções para nunca trancar ninguém fora por engano:
   *   1) se a ponte nativa não existir (navegador, teste, versão antiga do shell), libera;
   *   2) se o lado nativo respondeu com erro interno ("erro"), libera também — só barra quando
   *      ele deu uma resposta de verdade dizendo "sem key".
   */
  const licenseAllowsPlay = () => {
    if (typeof window.NativeXR?.licenseStatus !== 'function') return true;
    const st = licenseStatus(true);
    if (st.active || st.reason === 'erro' || st.reason === 'indisponivel') return true;
    licensePrompt = 'Ative a sua Key de 22 caracteres para jogar. Ela é digitada uma vez só e fica presa a este celular.';
    activeView = 'license';
    paint();
    const msg = root.querySelector('[data-entry-key-msg]');
    if (msg) { msg.textContent = licensePrompt; msg.dataset.state = 'error'; }
    return false;
  };
  // 1 | 2 | 3 — Aba 1 (básico), Aba 2 (mão & tela) e a Aba 3 da Build 89: os apps da Dock.
  let activeSettingsTab = 1;
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
    'Iniciando ATMOXR...',
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

        <button type="button" class="entry-card entry-card--key ${activeView === 'license' ? 'entry-card--active' : ''} ${licenseStatus().active ? 'entry-card--activated' : ''}" data-entry-act="license">
          <span class="entry-card-body">
            <span class="entry-card-title">🔑 KEY</span>
            <span class="entry-card-state" data-entry-key-state>${licenseStatus().active ? 'ATIVADA' : 'ATIVAR'}</span>
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

  const renderBrandStage = (batInfo) => {
    const bText = batInfo ? batInfo.text : currentBattery().text;
    return `
      <div class="entry-brand-stage entry-p5-stage" data-entry-panel="brand">
        <div class="entry-brand-grid-bg" aria-hidden="true"></div>

        <!-- Estrelas concêntricas estilo quadrinhos (Preto, Cinza e Branco) -->
        <svg class="entry-p5-stars-bg" viewBox="0 0 600 400" preserveAspectRatio="none" aria-hidden="true">
          <g transform="translate(385, 62) rotate(-12) scale(0.85)">
            <polygon points="0,-42 12,-12 44,-10 18,10 26,40 0,22 -26,40 -18,10 -44,-10 -12,-12" fill="#ffffff"/>
            <polygon points="0,-31 9,-9 32,-8 13,7 19,30 0,16 -19,30 -13,7 -32,-8 -9,-9" fill="#52525b"/>
            <polygon points="0,-20 6,-6 21,-5 8,5 12,19 0,10 -12,19 -8,5 -21,-5 -6,-6" fill="#09090b"/>
          </g>
          <g transform="translate(310, 290) rotate(14) scale(0.95)">
            <polygon points="0,-44 13,-13 46,-11 19,11 27,42 0,23 -27,42 -19,11 -46,-11 -13,-13" fill="#d4d4d8"/>
            <polygon points="0,-32 9,-9 33,-8 14,8 20,31 0,17 -20,31 -14,8 -33,-8 -9,-9" fill="#27272a"/>
            <polygon points="0,-19 6,-6 20,-5 8,5 12,18 0,10 -12,18 -8,5 -20,-5 -6,-6" fill="#ffffff"/>
          </g>
          <g transform="translate(390, 250) rotate(-8) scale(0.58)">
            <polygon points="0,-40 12,-12 42,-10 17,10 25,38 0,21 -25,38 -17,10 -42,-10 -12,-12" fill="#ffffff"/>
            <polygon points="0,-26 8,-8 27,-6 11,6 16,25 0,14 -16,25 -11,6 -27,-6 -8,-8" fill="#18181b"/>
          </g>
        </svg>

        <!-- Balão Angular Superior Direito (em Português + Mini PICO 4 Pro no lugar do mascote) -->
        <div class="entry-p5-top-callout" data-pico4pro-callout="1">
          <div class="entry-p5-callout-text">
            <strong>SISTEMA PICO 4 PRO · ATMOXR</strong>
            <span>Use o Hand Tracking otimizado, crie seu Personagem 3D e abra janelas flutuantes PICO 4 Pro!</span>
          </div>
          <div class="entry-p5-callout-mascot" data-entry-act="profile" title="Criar Personagem 3D / Perfil">
            ${SVG_PICO4_PRO_MINI}
          </div>
        </div>

        <!-- Feixe Gigante em Perspectiva 3D (estilo "SKILL" da foto, em Branco/Cinza/Preto e em Português) -->
        <div class="entry-p5-wedge-wrap" data-entry-act="start" role="button" tabindex="0" title="Clique para Iniciar o ATMOXR">
          <svg class="entry-p5-wedge-svg" viewBox="0 0 540 240" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="6,10 475,112 6,226" fill="#09090b" stroke="#ffffff" stroke-width="5" stroke-linejoin="round"/>
            <polygon points="14,22 458,112 14,212" fill="#f4f4f5"/>
            <polygon points="14,22 458,112 440,122 14,56" fill="#d4d4d8" opacity="0.65"/>
            <!-- Faixa preta inclinada na base da cunha -->
            <polygon points="14,166 290,144 282,192 14,212" fill="#09090b"/>
          </svg>
          <div class="entry-p5-wedge-text">ATMOXR</div>
          <div class="entry-p5-wedge-sub">INICIAR REALIDADE MISTA</div>
          <span class="entry-p5-wedge-star" aria-hidden="true">★</span>
        </div>

        <!-- Medalhão Circular Direito com o PICO 4 Pro (no lugar do boneco da foto) -->
        <div class="entry-p5-medallion" data-pico4pro-emblem="1" data-entry-act="store" role="button" tabindex="0" title="PICO 4 Pro · Abrir Store ATMOXR">
          <div class="entry-p5-medallion-inner">
            ${SVG_PICO4_PRO_MEDALLION}
          </div>
          <span class="entry-p5-medallion-tag">PICO 4 PRO · VR</span>
        </div>

        <!-- Barra Inferior de Atualizações + Store & Contador Angular (estilo ¥ 10,960 da foto) -->
        <div class="entry-p5-bottom-bar">
          <div class="entry-p5-currency-readout" title="Bateria e Relógio em Tempo Real">
            <span class="entry-p5-currency-sym">⚡</span>
            <span class="entry-p5-currency-val">${bText}</span>
          </div>

          <div class="entry-updates-feed entry-updates-feed--p5" data-entry-updates role="region" aria-label="Atualizações NextVR">
            <div class="entry-updates-head">
              <span class="entry-updates-dot" aria-hidden="true"></span>
              <span class="entry-updates-title">ATUALIZAÇÕES · NOTIFICAÇÕES</span>
              <span class="entry-updates-badge">v2.0.0</span>
            </div>
            <div class="entry-updates-list">
              ${ENTRY_UPDATES.slice(0, 4).map(u => `
              <article class="entry-notif-card" data-entry-notif="${escHtml(u.id)}">
                <div class="entry-notif-top">
                  <span class="entry-notif-tag">${escHtml(u.tag)}</span>
                  <span class="entry-notif-time">${escHtml(u.time)}</span>
                </div>
                <strong class="entry-notif-heading">${escHtml(u.heading)}</strong>
                <p class="entry-notif-desc">${escHtml(u.desc)}</p>
              </article>`).join('')}
            </div>
          </div>

          <div class="entry-brand-store-dock entry-brand-store-dock--p5">
            <div class="entry-brand-store-info" data-entry-act="store" role="button" tabindex="0">
              <img src="./icons/gorilla-tag-logo.jpg" alt="Gorilla Tag" class="entry-brand-store-thumb" draggable="false" />
              <div class="entry-brand-store-meta">
                <span class="entry-brand-store-tag">STORE · DESTAQUE</span>
                <strong class="entry-brand-store-name">Gorilla Tag VR</strong>
              </div>
            </div>
            <div class="entry-brand-store-actions">
              <button type="button" class="entry-btn entry-btn--primary entry-brand-store-open" data-entry-act="store">
                ${SVG_STORE_BAG}<span>${emT('store')}</span>
              </button>
            </div>
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
          <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
            <h2 class="entry-subpanel-title">${emT('storeTitle')}</h2>
            <div style="display:inline-flex;gap:6px;flex-wrap:wrap">
              <span class="entry-store-card-pill" style="background:rgba(255,255,255,.16);color:#fff">Página inicial</span>
              <span class="entry-store-card-pill">Jogos</span>
              <span class="entry-store-card-pill">Apps</span>
              <span class="entry-store-card-pill">Lista de desejos</span>
            </div>
          </div>
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

          <div class="entry-store-section-label">NAVEGAR POR TUDO · JOGOS &amp; APPS NEXTVR</div>
          <div class="entry-store-grid">
            ${MENU_STORE_APPS.map(app => {
              const iconInner = app.img
                ? `<img src="${app.img}" alt="${escHtml(app.name)}" style="width:100%;height:100%;object-fit:cover;border-radius:10px;display:block">`
                : app.name.slice(0, 2).toUpperCase();
              return `
              <div class="entry-store-card" data-entry-store-app="${app.id}">
                <div class="entry-store-card-dot" style="background:${app.bg};overflow:hidden;padding:0">${iconInner}</div>
                <div class="entry-store-card-meta">
                  <div class="entry-store-card-name">${escHtml(app.name)}</div>
                  <div class="entry-store-card-cat">${escHtml(app.cat)}</div>
                </div>
                <span class="entry-store-card-pill">Grátis</span>
              </div>`;
            }).join('')}
          </div>
        </div>
      </div>`;
  };

  /*
   * Build 89 — Aba 3: "bote uma opcao nas configuracoes de botar mais apps na dock ... pode ficar
   * gigante". Um tile por app do catalogo (e por app Android instalado, quando a lista chegou).
   * Nao ha limite: a Dock cresce, o carrossel rola e a contagem mostra quantos estao ligados.
   */
  const dockAppsPageHtml = () => {
    const enabled = extraDockIds(S);
    const all = dockCatalogAll();
    const groups = new Map();
    for (const item of all) {
      const key = item.group || 'Apps';
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(item);
    }
    const tile = item => {
      const on = enabled.includes(item.id);
      return `<button type="button" class="entry-dock-app ${on ? 'on' : ''}" data-dock-app="${escHtml(item.id)}"
        aria-pressed="${on ? 'true' : 'false'}" title="${escHtml(item.label)}">
        <span class="entry-dock-app-ico" style="background:${item.bg || '#27272a'}">${item.img
          ? `<img src="${escHtml(item.img)}" alt="" draggable="false">`
          : `<span>${escHtml(item.glyph || (item.label || '?').slice(0, 1))}</span>`}</span>
        <span class="entry-dock-app-name">${escHtml(item.label)}</span>
        <span class="entry-dock-app-check">${on ? '✓' : '+'}</span>
      </button>`;
    };
    return `
      <div class="entry-bento-grid entry-bento-grid--tab3 entry-settings-page" data-entry-settings-page="3">
        <div class="entry-bento-cell entry-bento-cell--wide">
          <div class="entry-bento-title">APPS NA DOCK · SEM LIMITE</div>
          <p class="entry-dock-apps-hint">Toque num app para ele entrar (ou sair) da Dock. A Dock pode ficar
            gigante: quanto mais apps, mais ela cresce para os lados.
            <b data-dock-apps-count>${enabled.length}</b> app(s) adicionado(s).</p>
          <div class="entry-seg-row">
            <button type="button" class="entry-seg-btn" data-dock-apps-clear="1">Limpar tudo</button>
            <button type="button" class="entry-seg-btn" data-dock-apps-scroll="1">Ver a Dock →</button>
          </div>
        </div>
        <div class="entry-bento-cell entry-bento-cell--wide entry-play-protect">
          <div class="entry-bento-title">SOBRE O AVISO DE "APP DESCONHECIDO" / PLAY PROTECT</div>
          <p class="entry-play-protect-note">${playProtectNote()}</p>
        </div>
        ${[...groups].map(([group, items]) => `
          <div class="entry-bento-cell entry-bento-cell--wide">
            <div class="entry-bento-title">${escHtml(group)}</div>
            <div class="entry-dock-apps-grid">${items.map(tile).join('')}</div>
          </div>`).join('')}
      </div>`;
  };

  /** Texto do estado da câmera noturna (a leitura da luz vem do lado nativo). */
  const nightCamNote = () => {
    const st = nightCameraState();
    const level = st.level >= 0 ? `${Math.round(st.level * 100)}% de luz` : 'sem leitura da câmera agora';
    const active = st.active ? 'ligada' : 'desligada';
    const torch = st.torchAvailable === false
      ? 'lanterna não disponível neste aparelho'
      : (st.torch ? 'lanterna ACESA' : 'lanterna apagada');
    // Build 91: mostra a luz do ambiente já descontando a luz da própria lanterna. É esse número
    // (e não a leitura crua) que decide se a lanterna apaga.
    const ambient = Number.isFinite(st.torchAmbient)
      ? ` · ambiente ${Math.round(st.torchAmbient * 100)}% (já sem a luz da lanterna)`
      : '';
    return `Agora: ${active} · ${level}${ambient} · ${torch}. A câmera mede o ambiente e sobe o ganho `
      + `do passthrough (+EV e redução de ruído) quando escurece. Sem luz nenhuma, o flash do celular `
      + `acende; quando a luz do ambiente volta, apaga — a luz da própria lanterna não conta. `
      + `Não grava nada.`;
  };

  /* Build 89 — aviso honesto sobre o Play Protect. O APK sai fora da Play Store, então o Android
     mostra "app desconhecido" na instalação. Isso NÃO é um problema do app e não dá para remover
     por código: só publicando na Play Store. O que dá para fazer (e foi feito) é entregar um build
     de release assinado, e explicar o caminho mais curto para instalar. */
  const playProtectNote = () => `ATENÇÃO: o ATMO XR é instalado direto do GitHub, fora da Play Store.
    Por isso o Android mostra "app desconhecido" na hora de instalar. Isso é o aviso padrão do
    sistema para qualquer APK baixado, não um problema do ATMO XR — não existe código que o remova,
    só publicar na Play Store. Para instalar: toque em "Mais detalhes" → "Instalar mesmo assim".
    Nas versões novas do Android o Play Protect volta a perguntar; isso é do sistema, mas o APK
    agora é assinado como release (não é mais um build de depuração), o que reduz os alertas.`;

  const renderSettingsPanel = () => {
    const envs = [
      { id: 'passthrough', label: emT('envAr') },
      { id: 'sunset', label: emT('envSunset') },
      { id: 'night', label: emT('envNight') },
      { id: 'dark', label: 'Dark Panorâmico' },
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
    const shMode = S.singleHandMode || 'both';
    return `
      <div class="entry-subpanel entry-subpanel--settings" data-entry-panel="settings">
        <div class="entry-subpanel-head">
          <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
            <h2 class="entry-subpanel-title">${emT('basicSettings')}</h2>
            <div class="entry-settings-tabs" role="tablist" aria-label="Abas de configurações">
              <button type="button" class="entry-settings-tab ${activeSettingsTab === 1 ? 'on' : ''}" data-entry-settings-tab="1">Aba 1 · Básico</button>
              <button type="button" class="entry-settings-tab ${activeSettingsTab === 2 ? 'on' : ''}" data-entry-settings-tab="2">Aba 2 · Hand &amp; Tela ↔</button>
              <button type="button" class="entry-settings-tab ${activeSettingsTab === 3 ? 'on' : ''}" data-entry-settings-tab="3">Aba 3 · Apps na Dock</button>
            </div>
          </div>
          <div class="entry-subpanel-actions">
            <button type="button" class="entry-btn entry-btn--ghost" data-entry-act="back">${emT('back')}</button>
            <button type="button" class="entry-btn entry-btn--primary" data-entry-act="start">${emT('startVr')}</button>
          </div>
        </div>
        <div class="entry-settings-carousel" data-entry-settings-carousel="1" data-menu-hscroll="1">
          <div class="entry-bento-grid entry-settings-page" data-entry-settings-page="1">
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
              <div class="entry-bento-title">DOCK &amp; PERSONAGEM</div>
              <div class="entry-seg-row entry-seg-row--compact">
                <button type="button" class="entry-seg-btn on">${emT('dock')} PICO 4 Pro</button>
                <button type="button" class="entry-seg-btn ${dockSnapOn ? 'on' : ''}" data-entry-dock-snap="${dockSnapOn ? '1' : '0'}" title="Espaço pré-definido ao mover janelas na Dock normal">${dockSnapOn ? emT('dockSnapOn') : emT('dockSnapOff')}</button>
                <button type="button" class="entry-seg-btn" data-entry-act="profile">Criar Personagem</button>
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
                <button type="button" class="entry-seg-btn ${S.worldLock ? 'on' : ''}" data-entry-worldlock="${S.worldLock ? '1' : '0'}" title="World Lock: trava o mundo no lugar (sem derivar para a frente ou para os lados)">🔒 World Lock: ${S.worldLock ? 'ON' : 'OFF'}</button>
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
          </div>

          <div class="entry-bento-grid entry-bento-grid--tab2 entry-settings-page" data-entry-settings-page="2">
            <div class="entry-bento-cell entry-bento-cell--singlehand">
              <div class="entry-bento-title">HAND TRACKING EM 1 MÃO SÓ (0 DELAY)</div>
              <div class="entry-seg-row entry-seg-row--compact" style="flex-wrap:wrap;gap:6px">
                <button type="button" class="entry-seg-btn ${shMode === 'both' ? 'on' : ''}" data-entry-single-hand-set="both">2 Mãos (Ambas)</button>
                <button type="button" class="entry-seg-btn ${shMode === 'right' ? 'on' : ''}" data-entry-single-hand-set="right">Só Mão Direita</button>
                <button type="button" class="entry-seg-btn ${shMode === 'left' ? 'on' : ''}" data-entry-single-hand-set="left">Só Mão Esquerda</button>
                <button type="button" class="entry-seg-btn ${shMode === 'one' ? 'on' : ''}" data-entry-single-hand="${shMode}" data-entry-single-hand-set="one">1 Mão Automática</button>
              </div>
            </div>

            <div class="entry-bento-cell entry-bento-cell--hand">
              <div class="entry-bento-title">${emT('handCell')} PICO 4 (SÓ A MÃO · RAIO LASER)</div>
              <div class="entry-hand-col">
                <button type="button" class="entry-seg-btn ${S.handDraw ? 'on' : ''}" data-entry-hand-draw="1">${emT('handDrawn')}</button>
                <button type="button" class="entry-seg-btn ${!S.handDraw ? 'on' : ''}" data-entry-hand-draw="0">${emT('handInvisible')}</button>
                <button type="button" class="entry-seg-btn ${S.fingerTouch !== 0 ? 'on' : ''}" data-entry-finger-touch="${S.fingerTouch !== 0 ? '1' : '0'}" title="Interação por Raio Laser estilo PICO 4 ao invés de pinça">${S.fingerTouch !== 0 ? emT('fingerTouchOn') : emT('fingerTouchOff')}</button>
              </div>
            </div>

            <div class="entry-bento-cell entry-bento-cell--dockcolor">
              <div class="entry-bento-title">COR DA DOCK &amp; MULTITAREFA</div>
              <div class="entry-seg-row entry-seg-row--compact" style="flex-wrap:wrap;gap:5px">
                ${[['default','Cinza'],['black','Preto'],['blue','Azul'],['purple','Roxo'],['green','Verde'],['red','Vermelho'],['glass','Vidro']].map(([cid, clbl]) => `<button type="button" class="entry-seg-btn ${(S.dockColor || 'default') === cid ? 'on' : ''}" data-entry-dock-color="${cid}" title="Cor da Dock: ${clbl}">${clbl}</button>`).join('')}
              </div>
              <div class="entry-seg-row entry-seg-row--compact" style="margin-top:8px;flex-wrap:wrap;gap:5px">
                <button type="button" class="entry-seg-btn ${S.depthLayerOrder !== 0 ? 'on' : ''}" data-entry-depth-layer="${S.depthLayerOrder !== 0 ? '1' : '0'}" title="Quando puxar a tela pra perto ela fica sobre todas as outras, e pra trás fica embaixo">Tela Perto Sobre / Trás Embaixo: ${S.depthLayerOrder !== 0 ? 'ON' : 'OFF'}</button>
                <button type="button" class="entry-seg-btn ${S.mrDim ? 'on' : ''}" data-entry-mr-dim="${S.mrDim ? '1' : '0'}" title="Escurecer o ambiente real (MR) em volta dos apps flutuantes">Ambiente MR: ${S.mrDim ? 'Escuro' : 'Normal'}</button>
                <button type="button" class="entry-seg-btn ${S.showFps ? 'on' : ''}" data-entry-fps="1">FPS: ${S.showFps ? 'ON' : 'OFF'}</button>
              </div>
            </div>

            <div class="entry-bento-cell entry-bento-cell--night">
              <div class="entry-bento-title">CÂMERA NOTURNA (ESCURO = MODO NOTURNO)</div>
              <div class="entry-seg-row entry-seg-row--compact" style="flex-wrap:wrap;gap:6px">
                <button type="button" class="entry-seg-btn ${(S.nightCamera || 'auto') === 'auto' ? 'on' : ''}" data-entry-night-cam="auto" title="Liga sozinha quando o ambiente escurece">Automática</button>
                <button type="button" class="entry-seg-btn ${S.nightCamera === 'on' ? 'on' : ''}" data-entry-night-cam="on" title="Sempre ligada">Sempre ligada</button>
                <button type="button" class="entry-seg-btn ${S.nightCamera === 'off' ? 'on' : ''}" data-entry-night-cam="off" title="Nunca ligar">Desligada</button>
              </div>
              <div class="entry-seg-row entry-seg-row--compact" style="margin-top:6px;flex-wrap:wrap;gap:6px">
                <button type="button" class="entry-seg-btn ${S.torchAuto !== 0 ? 'on' : ''}" data-entry-torch-auto="${S.torchAuto !== 0 ? '1' : '0'}" title="Sem luz nenhuma o celular acende a lanterna; quando a luz volta, apaga">🔦 Lanterna automática: ${S.torchAuto !== 0 ? 'ON' : 'OFF'}</button>
              </div>
              <p class="entry-night-cam-note" data-night-cam-state>${nightCamNote()}</p>
            </div>

            <div class="entry-bento-cell entry-bento-cell--env">
              <div class="entry-bento-title">${emT('envTitle')} &amp; PASSTHROUGH</div>
              <div class="entry-seg-row entry-seg-row--compact" style="flex-wrap:wrap;gap:6px">
                ${envs.map(e => `<button type="button" class="entry-seg-btn ${activeEnv === e.id ? 'on' : ''}" data-entry-env="${e.id}">${e.label}</button>`).join('')}
                <button type="button" class="entry-seg-btn ${S.bwCamera ? 'on' : ''}" data-entry-bw-cam="${S.bwCamera ? '1' : '0'}" title="Deixar só a câmera passthrough preto e branco estilo Meta Quest 2 (janelinhas e dock continuam coloridas)">Câmera P&amp;B (Quest 2): ${S.bwCamera ? 'ON' : 'OFF'}</button>
                <button type="button" class="entry-seg-btn ${!S.bwCamera ? 'on' : ''}" data-entry-camera="color" title="Câmera passthrough colorida (sem filtro P&amp;B)">📷 Câmera Colorida</button>
              </div>
            </div>
          </div>

          ${dockAppsPageHtml()}
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
          // Todos os nomes sao cinza do mesmo jeito e TODOS os colaboradores tem o selo vermelho
          // (Build 89: "ter em todos da colaboracao", inclusive o Apache).
          const verified = isVerifiedProfileName(name);
          return `
          <div class="entry-collab-item" role="listitem" data-collaborator-name="${name}">
            <span class="entry-collab-name-row">
              <span class="entry-collab-name" data-collab-name="${name}">${name}</span>
              ${verified ? `<span class="entry-collab-verified" data-collab-verified="${name}" title="Verificado">${SVG_TIKTOK_VERIFIED}</span>` : ''}
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

  /* Build 90 — conta ATMOXR por e-mail.
   *
   * O usuário: "quando entrar, bota a opção de e-mail pra a conta já ir vinculada no discord, tiktok
   * Google e YouTube". O e-mail é guardado no perfil e cada botão abre a página de login REAL do
   * serviço (é o que dá para fazer sem servidor OAuth registrado); o vínculo fica marcado aqui.
   */
  const ACCOUNT_LINKS = [
    { id: 'discord', label: 'Discord', glyph: 'D', url: 'https://discord.com/login', bg: 'linear-gradient(180deg,#5865f2,#3b45c9)' },
    { id: 'tiktok', label: 'TikTok', glyph: '♪', url: 'https://www.tiktok.com/login', bg: 'linear-gradient(180deg,#25f4ee,#fe2c55)' },
    { id: 'google', label: 'Google', glyph: 'G', url: 'https://accounts.google.com/', bg: 'linear-gradient(180deg,#4285f4,#1a73e8)' },
    { id: 'youtube', label: 'YouTube', glyph: '▶', url: 'https://accounts.google.com/ServiceLogin?service=youtube', bg: 'linear-gradient(180deg,#ff0033,#c4302b)' },
  ];
  const accountLinkedIds = () => String(S.accountLinks || '').split(',').map(v => v.trim()).filter(Boolean);
  const accountLinked = id => accountLinkedIds().includes(id);

  const renderProfilePanel = () => {
    const currentName = S.profileName || '';
    const currentAvatar = S.profileAvatar || '';
    const charCfg = loadCharacter();
    const avatarInner = currentAvatar
      ? `<img src="${escHtml(currentAvatar)}" alt="Foto de perfil" class="entry-login-avatar-img" data-profile-avatar-img />`
      : SVG_USER;
    return `
      <div class="entry-subpanel entry-subpanel--profile" data-entry-panel="profile">
        <div class="entry-subpanel-head">
          <h2 class="entry-subpanel-title">Login / Perfil NextVR</h2>
          <div class="entry-subpanel-actions">
            <button type="button" class="entry-btn entry-btn--ghost" data-entry-act="back">Voltar</button>
            <button type="button" class="entry-btn entry-btn--primary" data-char-apply-avatar>Usar Personagem no Perfil</button>
            <button type="button" class="entry-btn entry-btn--primary" data-profile-save>Salvar Login</button>
          </div>
        </div>
        <div class="entry-login-body" style="overflow-y:auto;max-height:100%">
          <div class="entry-login-left">
            <div class="entry-login-avatar-preview" data-profile-avatar-preview title="Toque para escolher foto da galeria">
              ${avatarInner}
            </div>
            <button type="button" class="entry-btn entry-btn--primary entry-login-upload-btn" data-profile-upload>
              Escolher Foto da Galeria
            </button>
            <input type="file" accept="image/*" data-profile-file hidden />
            <div style="margin-top:8px;padding:8px;border-radius:12px;background:rgba(9,9,11,.92);border:1px solid rgba(161,161,170,.28);text-align:center">
              <div style="font-size:10px;font-weight:800;color:#d4d4d8;margin-bottom:4px">SEU PERSONAGEM 3D</div>
              <canvas data-char-preview-canvas width="140" height="175" style="width:128px;height:160px;border-radius:10px;display:block;margin:0 auto;border:1px solid rgba(255,255,255,.12)"></canvas>
            </div>
          </div>
          <div class="entry-login-right">
            <label class="entry-login-label">
              <span>SEU NOME / NICK <span class="entry-collab-verified entry-profile-verified-preview" data-profile-verified-preview="1" ${isVerifiedProfileName(currentName) ? '' : 'hidden'} title="Verificado">${SVG_TIKTOK_VERIFIED}</span></span>
              <input type="text" class="entry-login-input" data-profile-name-input maxlength="24" placeholder="Digite seu nome..." value="${escHtml(currentName)}" />
            </label>

            <div class="entry-account" data-entry-account="1">
              <div class="entry-account-title">CONTA ATMOXR · E-MAIL E VÍNCULOS</div>
              <label class="entry-login-label">
                <span>SEU E-MAIL (a conta fica vinculada)</span>
                <input type="email" class="entry-login-input" data-account-email maxlength="80"
                  autocomplete="email" spellcheck="false" placeholder="voce@email.com"
                  value="${escHtml(S.accountEmail || '')}" />
              </label>
              <div class="entry-account-links">
                ${ACCOUNT_LINKS.map(link => {
                  const on = accountLinked(link.id);
                  return `<button type="button" class="entry-account-link ${on ? 'on' : ''}"
                    data-account-link="${link.id}" aria-pressed="${on ? 'true' : 'false'}"
                    title="${on ? 'Vinculado — toque para abrir' : 'Vincular ' + link.label}">
                    <span class="entry-account-ico" style="background:${link.bg}">${link.glyph}</span>
                    <span class="entry-account-name">${link.label}</span>
                    <span class="entry-account-state">${on ? '✓ VINCULADO' : 'VINCULAR'}</span>
                  </button>`;
                }).join('')}
              </div>
              <p class="entry-account-note">Digite o e-mail e toque em cada serviço para vincular: o app
                abre a página de login real do serviço (Discord, TikTok, Google, YouTube) e guarda o
                vínculo na sua conta ATMOXR deste perfil.</p>
            </div>

            <div class="entry-char-studio" data-character-creator="1" style="margin-top:8px;padding:10px 12px;border-radius:12px;background:rgba(15,15,18,.94);border:1px solid rgba(161,161,170,.3);display:flex;flex-direction:column;gap:7px">
              <div style="display:flex;align-items:center;justify-content:space-between">
                <strong style="font-size:11.5px;letter-spacing:.04em;color:#f4f4f5">CRIAR PERSONAGEM DO JOGO · ATMOXR</strong>
                <span style="font-size:10px;color:#38bdf8;font-weight:700">Sincronizado com Motion Tracker &amp; VR</span>
              </div>
              <div style="display:flex;align-items:center;gap:5px;flex-wrap:wrap">
                <span style="font-size:10px;font-weight:800;color:#a1a1aa;min-width:56px">PELE:</span>
                ${CHARACTER_OPTIONS.skins.map(s => `<button type="button" data-char-set="skin:${s.id}" title="${escHtml(s.label)}" style="width:20px;height:20px;border-radius:50%;background:${s.id};border:${charCfg.skin === s.id ? '2.5px solid #fff' : '1px solid rgba(255,255,255,.3)'};cursor:pointer"></button>`).join('')}
                <span style="font-size:10px;font-weight:800;color:#a1a1aa;margin-left:8px">COR CABELO:</span>
                ${CHARACTER_OPTIONS.hairColors.map(hc => `<button type="button" data-char-set="hairColor:${hc.id}" title="${escHtml(hc.label)}" style="width:18px;height:18px;border-radius:50%;background:${hc.id};border:${charCfg.hairColor === hc.id ? '2.5px solid #38bdf8' : '1px solid rgba(255,255,255,.3)'};cursor:pointer"></button>`).join('')}
              </div>
              <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap">
                <span style="font-size:10px;font-weight:800;color:#a1a1aa;min-width:56px">CABELO:</span>
                ${CHARACTER_OPTIONS.hairStyles.map(hs => `<button type="button" class="entry-seg-btn ${charCfg.hairStyle === hs.id ? 'on' : ''}" data-char-set="hairStyle:${hs.id}" style="padding:3px 7px;font-size:10px">${escHtml(hs.label)}</button>`).join('')}
              </div>
              <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap">
                <span style="font-size:10px;font-weight:800;color:#a1a1aa;min-width:56px">VISOR VR:</span>
                ${CHARACTER_OPTIONS.visors.map(v => `<button type="button" class="entry-seg-btn ${charCfg.visor === v.id ? 'on' : ''}" data-char-set="visor:${v.id}" style="padding:3px 7px;font-size:10px">${escHtml(v.label)}</button>`).join('')}
              </div>
              <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap">
                <span style="font-size:10px;font-weight:800;color:#a1a1aa;min-width:56px">TRAJE:</span>
                ${CHARACTER_OPTIONS.outfits.map(o => `<button type="button" class="entry-seg-btn ${charCfg.outfit === o.id ? 'on' : ''}" data-char-set="outfit:${o.id}" style="padding:3px 7px;font-size:10px">${escHtml(o.label)}</button>`).join('')}
              </div>
              <div style="display:flex;align-items:center;gap:5px;flex-wrap:wrap">
                <span style="font-size:10px;font-weight:800;color:#a1a1aa;min-width:56px">COR ROUPA:</span>
                ${CHARACTER_OPTIONS.outfitColors.map(oc => `<button type="button" data-char-set="outfitColor:${oc.id}" title="${escHtml(oc.label)}" style="width:18px;height:18px;border-radius:50%;background:${oc.id};border:${charCfg.outfitColor === oc.id ? '2.5px solid #fff' : '1px solid rgba(255,255,255,.3)'};cursor:pointer"></button>`).join('')}
                <span style="font-size:10px;font-weight:800;color:#a1a1aa;margin-left:6px">ACESSÓRIO:</span>
                ${CHARACTER_OPTIONS.accessories.map(ac => `<button type="button" class="entry-seg-btn ${charCfg.accessory === ac.id ? 'on' : ''}" data-char-set="accessory:${ac.id}" style="padding:3px 7px;font-size:10px">${escHtml(ac.label)}</button>`).join('')}
              </div>
            </div>

            <div class="entry-login-presets-wrap" style="margin-top:6px">
              <span class="entry-login-presets-title">OU ESCOLHA UM AVATAR PRONTO</span>
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

  /*
   * Build 90 — painel da Key.
   *
   * "bota um sistema de Key… a Key tem que ter 22 caracteres… essas keys só funciona uma vez…
   *  botou a Key pronto, não precisa por denovo, só se desinstalar e instalar denovo… e a Key só
   *  e pra esse celular".
   *
   * A tela é deliberadamente simples: uma caixa de 22 caracteres, o botão ATIVAR, o estado e o
   * código do aparelho. Quem manda é o lado nativo (License.java) — aqui só desenhamos.
   */
  const renderLicensePanel = () => {
    const st = licenseStatus(true);
    const active = !!st.active;
    return `
      <div class="entry-subpanel entry-subpanel--license" data-entry-panel="license">
        <div class="entry-subpanel-head">
          <h2 class="entry-subpanel-title">Key de ativação</h2>
          <div class="entry-subpanel-actions">
            <button type="button" class="entry-btn entry-btn--ghost" data-entry-act="back">Voltar</button>
          </div>
        </div>
        <div class="entry-key-body">
          <div class="entry-key-status ${active ? 'on' : ''}" data-entry-key-status>
            <span class="entry-key-dot" aria-hidden="true"></span>
            <span data-entry-key-status-text>${active ? 'KEY ATIVADA NESTE CELULAR' : 'SEM KEY ATIVA'}</span>
          </div>
          <p class="entry-key-help">
            A Key tem <b>22 caracteres</b>, funciona <b>uma vez</b> e fica presa a <b>este celular</b>.
            Digitou e ativou, não precisa digitar de novo — só se desinstalar e instalar o app outra vez.
          </p>
          ${active ? `
            <div class="entry-key-activated">
              <div><span>Key</span><b data-entry-key-mask>${escHtml(st.key || '—')}</b></div>
              <div><span>Aparelho</span><b>${escHtml(deviceCode())}</b></div>
              <div><span>Ativada</span><b>${st.since ? new Date(st.since).toLocaleDateString('pt-BR') : '—'}</b></div>
            </div>
          ` : `
            <label class="entry-login-label">
              <span>SUA KEY (22 CARACTERES)</span>
              <input type="text" class="entry-login-input entry-key-input" data-entry-key-input
                maxlength="${KEY_LENGTH + 6}" autocomplete="off" spellcheck="false"
                placeholder="XXXX XXXX XXXX XXXX XXXX XX" />
            </label>
            <div class="entry-key-row">
              <span class="entry-key-count" data-entry-key-count>0/${KEY_LENGTH}</span>
              <button type="button" class="entry-btn entry-btn--primary" data-entry-key-activate>Ativar Key</button>
            </div>
            <p class="entry-key-msg" data-entry-key-msg>${escHtml(licensePrompt)}</p>
            <p class="entry-key-device">Aparelho: <b>${escHtml(deviceCode())}</b> · a Key ativada aqui não funciona em outro celular.</p>
          `}
        </div>
      </div>`;
  };

  /*
   * Build 89 — tela de carregamento ATMO XR.
   *
   * O usuario mandou o print da tela nova e pediu "substitui aquela e poe essa". A antiga era um
   * HUD azul com moldura poligonal; a nova e' preta, com o wordmark ATMO gigante (o XR dentro de uma
   * caixa), um selo de realidade virtual embaixo, a barra de progresso fina e o texto de status.
   * Todos os ganchos que o countdown e os testes usam continuam aqui, com os mesmos nomes.
   */
  const renderLoadingScreen = (batInfo) => {
    const statusText = loadingStatusForPct(loadingPct);
    return `
      <div class="entry-atmo-load" data-entry-panel="loading" role="status" aria-live="polite">
        <img class="entry-atmo-art" src="atmo-load.jpg" alt="ATMO XR" draggable="false">
        <button type="button" class="entry-atmo-cancel" data-entry-cancel-countdown title="Cancelar">CANCELAR</button>
        <span class="entry-atmo-bat" data-entry-battery-top>${batInfo.text}</span>
        <footer class="entry-atmo-foot">
          <div class="entry-atmo-status" data-entry-load-status>${statusText}</div>
          <div class="entry-atmo-bar-row">
            <div class="entry-atmo-bar-track">
              <div class="entry-atmo-bar-fill" data-entry-load-bar style="width:${loadingPct}%"></div>
            </div>
            <span class="entry-atmo-pct" data-entry-load-pct>${loadingPct}%</span>
            <span class="entry-atmo-sec">(<b data-entry-countdown>${countdownSec}</b>s)</span>
          </div>
          <div class="entry-atmo-hint" data-entry-countdown-sub>Coloque o celular no VR Box · Iniciando em ${countdownSec}s...</div>
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
      activeView === 'license' ? renderLicensePanel() :
      activeView === 'store' ? renderStorePanel() :
      renderBrandStage(batInfo);

    const displayName = S.profileName ? escHtml(S.profileName) : 'ATMOXR (Login)';
    const profileAvatarHtml = S.profileAvatar
      ? `<img src="${escHtml(S.profileAvatar)}" alt="" class="entry-profile-q-img" />`
      : SVG_USER;

    root.innerHTML = `
      <div class="entry-left-pattern" aria-hidden="true">
        <div class="entry-left-slashes"></div>
      </div>

      <header class="entry-top-header">
        <div class="entry-top-bars" aria-hidden="true"></div>
        <h1 class="entry-main-title">ATMOXR</h1>
        <div class="entry-subtitle">${ENTRY_SUBTITLE}</div>
        <div class="entry-p5-sys-banner" data-p5-sys-banner="1">
          <span class="entry-p5-sys-tag">SISTEMA</span>
          <div class="entry-p5-sys-box">
            <span>"MENU PRINCIPAL" &amp; "PICO 4 PRO"</span>
            <i class="entry-p5-sys-bang" aria-hidden="true">!</i>
          </div>
        </div>
        <div class="entry-top-right-cluster">
          <button type="button" class="entry-top-store-btn ${activeView === 'store' ? 'on' : ''}" data-entry-act="store" title="Abrir Store ATMOXR">
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
          <div class="entry-p5-jagged-backing" aria-hidden="true"></div>
          ${renderSlantedButtons()}

          <div class="entry-profile-box" data-entry-act="profile" role="button" tabindex="0" title="Clique para editar Nome e Foto de Perfil">
            <button type="button" class="entry-profile-q" data-entry-act="profile" title="Foto de Perfil / Login">${profileAvatarHtml}</button>
            <div class="entry-profile-info">
              <div class="entry-profile-name"><span data-profile-display-name>${displayName}</span><span class="entry-collab-verified entry-profile-verified" data-profile-verified="1" ${isVerifiedProfileName(S.profileName) ? '' : 'hidden'} title="Verificado">${SVG_TIKTOK_VERIFIED}</span> <small class="entry-profile-edit-tag">PERFIL</small></div>
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
        if (!licenseAllowsPlay()) return;
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
    root.querySelectorAll('[data-entry-act="license"]').forEach(btn => {
      btn.onclick = () => {
        activeView = 'license';
        paint();
      };
    });
    const keyInput = root.querySelector('[data-entry-key-input]');
    if (keyInput) {
      const paintKeyCount = () => {
        const count = root.querySelector('[data-entry-key-count]');
        const clean = normalizeKey(keyInput.value);
        if (count) count.textContent = `${clean.length}/${KEY_LENGTH}`;
        // A caixa mostra a chave em grupos de 4 para caber na tela do celular.
        keyInput.value = formatKey(keyInput.value);
      };
      keyInput.addEventListener('input', paintKeyCount);
      paintKeyCount();
    }
    const keyActivate = root.querySelector('[data-entry-key-activate]');
    if (keyActivate) {
      keyActivate.onclick = () => {
        const raw = keyInput ? keyInput.value : '';
        const result = activateKey(raw);
        const msg = root.querySelector('[data-entry-key-msg]');
        if (msg) {
          msg.textContent = licenseMessage(result.reason);
          msg.dataset.state = result.ok ? 'ok' : 'error';
        }
        if (result.ok) {
          emit('license', result.status);
          activeView = 'license';
          paint();
        }
        return false;
      };
    }
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
    root.querySelectorAll('[data-entry-store-app]').forEach(card => {
      card.onclick = () => {
        const appId = card.dataset.entryStoreApp;
        if (appId) emit('store-app-launch', appId);
      };
    });
    const mrNotifCard = root.querySelector('[data-entry-notif="mr-pistol"]');
    if (mrNotifCard) {
      mrNotifCard.style.cursor = 'pointer';
      mrNotifCard.onclick = () => emit('store-app-launch', 'mr-pistol');
    }

    // Eventos do painel Login / Perfil
    const nameInput = root.querySelector('[data-profile-name-input]');
    if (nameInput) {
      nameInput.oninput = () => {
        S.profileName = nameInput.value.trim();
        save(S);
        const disp = root.querySelector('[data-profile-display-name]');
        if (disp) disp.textContent = S.profileName || 'ATMOXR (Login)';
        const verified = isVerifiedProfileName(S.profileName);
        const badge = root.querySelector('[data-profile-verified]');
        if (badge) badge.hidden = !verified;
        const previewBadge = root.querySelector('[data-profile-verified-preview]');
        if (previewBadge) previewBadge.hidden = !verified;
      };
    }
    const accountEmail = root.querySelector('[data-account-email]');
    if (accountEmail) {
      accountEmail.oninput = () => {
        S.accountEmail = accountEmail.value.trim();
        save(S);
      };
    }
    root.querySelectorAll('[data-account-link]').forEach(btn => {
      btn.onclick = () => {
        const id = btn.dataset.accountLink || '';
        const link = ACCOUNT_LINKS.find(l => l.id === id);
        if (!link) return;
        const current = accountLinkedIds();
        S.accountLinks = current.includes(id) ? current.filter(v => v !== id) : [...current, id];
        save(S);
        const on = accountLinkedIds().includes(id);
        btn.classList.toggle('on', on);
        btn.setAttribute('aria-pressed', on ? 'true' : 'false');
        const state = btn.querySelector('.entry-account-state');
        if (state) state.textContent = on ? '✓ VINCULADO' : 'VINCULAR';
        // Abre a página de login real do serviço na janela do navegador.
        emit('account-link', { id, url: link.url, email: S.accountEmail || '' });
      };
    });
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
    const charCanvas = root.querySelector('[data-char-preview-canvas]');
    if (charCanvas) {
      const ctx = charCanvas.getContext('2d');
      if (ctx) drawCharacter2D(ctx, charCanvas.width, charCanvas.height, loadCharacter(), { time: 0.4 });
    }
    root.querySelectorAll('[data-char-set]').forEach(btn => {
      btn.onclick = () => {
        const raw = btn.dataset.charSet || '';
        const sep = raw.indexOf(':');
        if (sep < 0) return;
        const key = raw.slice(0, sep);
        const val = raw.slice(sep + 1);
        if (nameInput) S.profileName = nameInput.value.trim();
        const cur = loadCharacter();
        cur[key] = val;
        saveCharacter(cur, { updateProfileAvatar: true });
        paint();
      };
    });
    const applyCharAvatarBtn = root.querySelector('[data-char-apply-avatar]');
    if (applyCharAvatarBtn) {
      applyCharAvatarBtn.onclick = () => {
        if (nameInput) S.profileName = nameInput.value.trim();
        saveCharacter(loadCharacter(), { updateProfileAvatar: true });
        paint();
      };
    }
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
    root.querySelectorAll('[data-entry-pinch-app]').forEach(btn => {
      btn.onclick = () => {
        S.pinchOnApp = S.pinchOnApp === 0 ? 1 : 0;
        save(S);
        emit('pinchOnApp', !!S.pinchOnApp);
        paint();
      };
    });
    root.querySelectorAll('[data-entry-gun-gesture]').forEach(btn => {
      btn.onclick = () => {
        S.gunGesture = S.gunGesture === 0 ? 1 : 0;
        save(S);
        emit('gunGesture', !!S.gunGesture);
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
    root.querySelectorAll('[data-entry-dock-color]').forEach(btn => {
      btn.onclick = () => {
        const cid = btn.dataset.entryDockColor || 'default';
        S.dockColor = cid;
        save(S);
        window.nextvrSetDockColor?.(cid);
        paint();
      };
    });
    root.querySelectorAll('[data-entry-depth-layer]').forEach(btn => {
      btn.onclick = () => {
        S.depthLayerOrder = S.depthLayerOrder === 0 ? 1 : 0;
        save(S);
        emit('depthLayerOrder', S.depthLayerOrder !== 0);
        window.nextvrUpdateDepthLayering?.();
        paint();
      };
    });
    const settingsCarousel = root.querySelector('[data-entry-settings-carousel]');
    if (settingsCarousel) {
      requestAnimationFrame(() => {
        if (settingsCarousel.clientWidth > 0 && activeSettingsTab > 1) {
          settingsCarousel.scrollLeft = settingsCarousel.clientWidth * (activeSettingsTab - 1);
        }
      });
      settingsCarousel.addEventListener('scroll', () => {
        if (settingsCarousel.clientWidth <= 0) return;
        const page = Math.round(settingsCarousel.scrollLeft / Math.max(1, settingsCarousel.clientWidth));
        const tab = Math.min(3, Math.max(1, page + 1));
        if (tab !== activeSettingsTab) {
          activeSettingsTab = tab;
          root.querySelectorAll('[data-entry-settings-tab]').forEach(b => {
            b.classList.toggle('on', Number(b.dataset.entrySettingsTab) === activeSettingsTab);
          });
        }
      }, { passive: true });
    }
    root.querySelectorAll('[data-entry-settings-tab]').forEach(btn => {
      btn.onclick = () => {
        const parsedTab = Number(btn.dataset.entrySettingsTab);
        const nextTab = parsedTab === 3 ? 3 : (parsedTab === 2 ? 2 : 1);
        activeSettingsTab = nextTab;
        root.querySelectorAll('[data-entry-settings-tab]').forEach(b => {
          b.classList.toggle('on', Number(b.dataset.entrySettingsTab) === activeSettingsTab);
        });
        if (settingsCarousel) {
          const targetX = Math.max(320, settingsCarousel.clientWidth) * (activeSettingsTab - 1);
          if (typeof settingsCarousel.scrollTo === 'function') {
            settingsCarousel.scrollTo({ left: targetX, behavior: 'smooth' });
          } else {
            settingsCarousel.scrollLeft = targetX;
          }
        }
      };
    });
    // Aba 3: liga/desliga um app da Dock. Salva em `S.dockExtraApps` e avisa o shell, que
    // reconstroi a Dock na hora (a Dock nao tem limite de tamanho).
    const paintDockCount = () => {
      const count = root.querySelector('[data-dock-apps-count]');
      if (count) count.textContent = String(extraDockIds(S).length);
    };
    root.querySelectorAll('[data-dock-app]').forEach(btn => {
      btn.onclick = () => {
        const id = btn.dataset.dockApp || '';
        S.dockExtraApps = toggleExtraDockId(S, id);
        save(S);
        const on = extraDockIds(S).includes(id);
        btn.classList.toggle('on', on);
        btn.setAttribute('aria-pressed', on ? 'true' : 'false');
        const check = btn.querySelector('.entry-dock-app-check');
        if (check) check.textContent = on ? '✓' : '+';
        paintDockCount();
        emit('dock-extras', S.dockExtraApps);
      };
    });
    const dockClear = root.querySelector('[data-dock-apps-clear]');
    if (dockClear) {
      dockClear.onclick = () => {
        S.dockExtraApps = '';
        save(S);
        root.querySelectorAll('[data-dock-app]').forEach(btn => {
          btn.classList.remove('on');
          btn.setAttribute('aria-pressed', 'false');
          const check = btn.querySelector('.entry-dock-app-check');
          if (check) check.textContent = '+';
        });
        paintDockCount();
        emit('dock-extras', '');
      };
    }
    const dockScroll = root.querySelector('[data-dock-apps-scroll]');
    if (dockScroll) dockScroll.onclick = () => { emit('dock-scroll-to', true); };

    // Lanterna (Build 89): "sem luz nenhuma o celular acende a lanterna; quando reconhece luz,
    // a lanterna apaga". O botão só liga/desliga a automação.
    root.querySelectorAll('[data-entry-torch-auto]').forEach(btn => {
      btn.onclick = () => {
        setTorchAuto(S.torchAuto === 0);
        paint();
      };
    });

    // Câmera noturna (Build 89): auto quando escurece, ou fixa ligada/desligada.
    root.querySelectorAll('[data-entry-night-cam]').forEach(btn => {
      btn.onclick = () => {
        const mode = btn.dataset.entryNightCam === 'on' ? 'on'
          : (btn.dataset.entryNightCam === 'off' ? 'off' : 'auto');
        S.nightCamera = mode;
        save(S);
        setNightCameraMode(mode);
        paint();
      };
    });

    root.querySelectorAll('[data-entry-single-hand-set]').forEach(btn => {
      btn.onclick = () => {
        const next = btn.dataset.entrySingleHandSet || 'both';
        S.singleHandMode = next;
        save(S);
        window.NativeXR?.setSingleHandMode?.(next);
        window.nextvrSetSingleHandMode?.(next);
        paint();
      };
    });
    root.querySelectorAll('[data-entry-single-hand]:not([data-entry-single-hand-set])').forEach(btn => {
      btn.onclick = () => {
        const order = ['both', 'right', 'left', 'one'];
        const cur = S.singleHandMode || 'both';
        const next = order[(order.indexOf(cur) + 1) % order.length];
        S.singleHandMode = next;
        save(S);
        window.NativeXR?.setSingleHandMode?.(next);
        window.nextvrSetSingleHandMode?.(next);
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
    root.querySelectorAll('[data-entry-mr-dim]').forEach(btn => {
      btn.onclick = () => {
        S.mrDim = S.mrDim ? 0 : 1;
        save(S);
        window.NativeXR?.setMrDim?.(!!S.mrDim);
        emit('mr-dim', S.mrDim);
        paint();
      };
    });
    root.querySelectorAll('[data-entry-bw-cam]').forEach(btn => {
      btn.onclick = () => {
        const next = S.bwCamera ? 0 : 1;
        setBwCamera(next === 1);
        paint();
      };
    });
    root.querySelectorAll('[data-entry-camera]').forEach(btn => {
      btn.onclick = () => {
        setBwCamera(btn.dataset.entryCamera !== 'color');
        paint();
      };
    });
    root.querySelectorAll('[data-entry-worldlock]').forEach(btn => {
      btn.onclick = () => {
        setWorldLock(!S.worldLock);
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
  setInterval(syncClockAndBatteryDom, 2500);
  const prevNextvrBattery = window.nextvrBattery;
  window.nextvrBattery = data => {
    try { prevNextvrBattery?.(data); } catch {}
    syncClockAndBatteryDom();
  };

  window.nextvrProfilePhoto = dataUrl => {
    if (!dataUrl) return;
    S.profileAvatar = String(dataUrl);
    save(S);
    emit('profile-updated', { name: S.profileName, avatar: S.profileAvatar });
    paint();
  };

  return root;
}
