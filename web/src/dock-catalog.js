// Catálogo de apps que podem entrar na Dock (Build 89).
//
// A Dock nasceu com uma lista fixa em apps.js. Agora a aba 3 das configurações deixa o usuário
// escolher QUALQUER app do catálogo (e também os apps Android instalados, quando o Shizuku
// entrega a lista) e a Dock cresce sem limite: os ids escolhidos ficam em `S.dockExtraApps`.
//
// Este módulo é só dado + estado: nada de DOM, nada de THREE. Ele é importado pelo menu de
// entrada (que desenha a aba 3) e pelo apps.js (que sabe abrir cada app), então não pode depender
// de nenhum dos dois — a abertura real chega por `registerDockLauncher`.

/** Apps de fábrica que podem ir para a Dock. `glyph` é o desenho do tile na Dock. */
export const DOCK_CATALOG = Object.freeze([
  { id: 'browser',   label: 'Navegador',            group: 'Sistema', glyph: '🌐', bg: 'linear-gradient(180deg,#1cb0f6 0%,#0062cc 100%)' },
  { id: 'store',     label: 'Store ATMOXR',         group: 'Sistema', glyph: '🛍', bg: 'linear-gradient(180deg,#ff9c1a 0%,#e04f00 100%)' },
  { id: 'settings',  label: 'Configurações',        group: 'Sistema', glyph: '⚙', bg: 'linear-gradient(180deg,#a78bfa 0%,#2563eb 100%)' },
  { id: 'gallery',   label: 'Galeria',              group: 'Sistema', glyph: '📷', bg: 'linear-gradient(180deg,#fb5678 0%,#e11d48 100%)' },
  { id: 'library',   label: 'Meus Apps',            group: 'Sistema', glyph: '▦', bg: 'linear-gradient(180deg,#334155 0%,#0f172a 100%)' },
  { id: 'shizuku',   label: 'Apps Android',         group: 'Sistema', glyph: '📱', bg: 'linear-gradient(180deg,#2dd4bf 0%,#0284c7 100%)' },
  { id: 'youtube',   label: 'YouTube',              group: 'Vídeo',   glyph: '▶', bg: 'linear-gradient(180deg,#f472b6 0%,#7c3aed 100%)' },
  { id: 'netflix',   label: 'Netflix',              group: 'Vídeo',   glyph: 'N', bg: 'linear-gradient(180deg,#450a0a 0%,#991b1b 100%)' },
  { id: 'prime',     label: 'Prime Video',          group: 'Vídeo',   glyph: 'P', bg: 'linear-gradient(180deg,#0ea5e9 0%,#075985 100%)' },
  { id: 'twitch',    label: 'Twitch',               group: 'Vídeo',   glyph: 'T', bg: 'linear-gradient(180deg,#a970ff 0%,#5b21b6 100%)' },
  { id: 'tiktok',    label: 'TikTok',               group: 'Vídeo',   glyph: '♪', bg: 'linear-gradient(180deg,#09090b 0%,#1f2937 100%)' },
  { id: 'spotify',   label: 'Spotify',              group: 'Música',  glyph: '♫', bg: 'linear-gradient(180deg,#1db954 0%,#065f46 100%)' },
  { id: 'discord',   label: 'Discord',              group: 'Social',  glyph: 'D', bg: 'linear-gradient(180deg,#ec4899 0%,#7c3aed 100%)' },
  { id: 'whatsapp',  label: 'WhatsApp',             group: 'Social',  glyph: 'W', bg: 'linear-gradient(180deg,#25d366 0%,#128c7e 100%)' },
  { id: 'instagram', label: 'Instagram',            group: 'Social',  glyph: 'IG', bg: 'linear-gradient(180deg,#f58529 0%,#dd2a7b 100%)' },
  { id: 'x',         label: 'X',                    group: 'Social',  glyph: 'X', bg: 'linear-gradient(180deg,#27272a 0%,#09090b 100%)' },
  { id: 'facebook',  label: 'Facebook',             group: 'Social',  glyph: 'f', bg: 'linear-gradient(180deg,#1877f2 0%,#0c4a9e 100%)' },
  { id: 'telegram',  label: 'Telegram',             group: 'Social',  glyph: '✈', bg: 'linear-gradient(180deg,#2aabee 0%,#1d4ed8 100%)' },
  { id: 'avatar-creator',    label: 'Criar Personagem', group: 'ATMOXR', glyph: '🧑‍🚀', bg: 'linear-gradient(180deg,#1d4ed8 0%,#06b6d4 100%)' },
  { id: 'character-viewer',  label: 'Personagem 3D',    group: 'ATMOXR', glyph: '🔄', bg: 'linear-gradient(180deg,#0ea5e9 0%,#1e1b4b 100%)' },
  { id: 'motion-tracker',    label: 'Motion Tracker',   group: 'ATMOXR', glyph: '🦵', bg: 'linear-gradient(180deg,#1e293b 0%,#84cc16 100%)' },
  { id: 'pico-explore',      label: 'PICO Explore',     group: 'ATMOXR', glyph: '8K', bg: 'linear-gradient(180deg,#3b0764 0%,#06b6d4 100%)' },
  { id: 'phone-notifications', label: 'Notificações',   group: 'ATMOXR', glyph: '🔔', bg: 'linear-gradient(180deg,#0f172a 0%,#334155 100%)' },
  { id: 'hand-draw',         label: 'paintdrawer',      group: 'Jogos',  glyph: '✎', bg: 'linear-gradient(180deg,#09090b 0%,#334155 100%)' },
  { id: 'mr-pistol',         label: 'ShootTheDie',      group: 'Jogos',  glyph: '✦', bg: 'linear-gradient(180deg,#090b10 0%,#dc2626 100%)' },
  { id: 'gorilla-tag',       label: 'Gorilla Tag',      group: 'Jogos',  glyph: '🦍', bg: 'linear-gradient(180deg,#431407 0%,#ea580c 100%)' },
  { id: 'beat-vr',           label: 'Beat Saber',       group: 'Jogos',  glyph: '⚔', bg: 'linear-gradient(180deg,#450a0a 0%,#0284c7 100%)' },
  { id: 'vrfs',              label: 'VRFS Futebol',     group: 'Jogos',  glyph: '⚽', bg: 'linear-gradient(180deg,#052e16 0%,#dc2626 100%)' },
  { id: 'roblox',            label: 'Roblox',           group: 'Jogos',  glyph: 'R', bg: 'linear-gradient(180deg,#090d16 0%,#1e293b 100%)' },
  { id: 'hyper-vr',          label: 'Hyper Dash',       group: 'Jogos',  glyph: '➤', bg: 'linear-gradient(180deg,#082f49 0%,#0284c7 100%)' },
]);

const byId = new Map(DOCK_CATALOG.map(item => [item.id, item]));

/** Metadados de um app do catálogo, ou null quando o id é de um app Android (`app:<pkg>`). */
export const catalogEntry = id => byId.get(id) || null;

let androidProvider = () => [];
/** apps.js registra aqui de onde vêm os apps Android instalados (ícone + pacote). */
export function registerDockAndroidProvider(fn) {
  if (typeof fn === 'function') androidProvider = fn;
}

/** Lista completa: catálogo de fábrica + apps Android instalados. */
export function dockCatalogAll() {
  let android = [];
  try { android = (androidProvider() || []).filter(item => item && item.id); }
  catch { android = []; }
  return [...DOCK_CATALOG, ...android];
}

/** Ids escolhidos em `S.dockExtraApps` (string separada por vírgula, como o resto do settings). */
export function extraDockIds(settings) {
  const raw = settings?.dockExtraApps;
  const list = Array.isArray(raw) ? raw : String(raw || '').split(',');
  const out = [];
  for (const value of list) {
    const id = String(value || '').trim();
    if (id && !out.includes(id)) out.push(id);
  }
  return out;
}

/** Liga/desliga um app da Dock. Devolve o novo id-list já no formato salvo em settings. */
export function toggleExtraDockId(settings, id) {
  const clean = String(id || '').trim();
  if (!clean) return extraDockIds(settings).join(',');
  const current = extraDockIds(settings);
  const next = current.includes(clean) ? current.filter(value => value !== clean) : [...current, clean];
  return next.join(',');
}

let launcher = null;
/** apps.js registra a função que abre um app da Dock pelo id (web, VR ou Android). */
export function registerDockLauncher(fn) {
  if (typeof fn === 'function') launcher = fn;
}

/** Abre o app pedido pela Dock. */
export function launchDockApp(id) {
  try { return launcher ? launcher(String(id)) : null; }
  catch (error) { return null; }
}

/**
 * Itens prontos para `buildDock`: um tile por app extra, na ordem em que o usuário escolheu.
 * `iconFor(id)` deixa o apps.js injetar o ícone real de um app Android.
 */
export function extraDockItems(settings, iconFor) {
  const items = [];
  for (const id of extraDockIds(settings)) {
    const meta = catalogEntry(id);
    if (!meta && !id.startsWith('app:')) continue;
    const dynamic = typeof iconFor === 'function' ? iconFor(id) : null;
    if (!meta && !dynamic) continue;
    items.push({
      id: 'dock-extra-' + id.replace(/[^A-Za-z0-9_-]/g, '-'),
      dockAppId: id,
      label: meta?.label || dynamic?.label || id.replace(/^app:/, ''),
      glyph: meta?.glyph || dynamic?.glyph || '•',
      img: dynamic?.img || '',
      bg: meta?.bg || dynamic?.bg || 'linear-gradient(180deg,#3f3f46 0%,#18181b 100%)',
      run: () => launchDockApp(id),
    });
  }
  return items;
}
