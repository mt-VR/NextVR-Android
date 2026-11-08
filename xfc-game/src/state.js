// Estado global do XFC: perfil do jogador, seleção de times e opções de tela.
//
// O perfil é salvo em `localStorage` para que a barra de XP continue no mesmo
// ponto quando a página é recarregada durante o desenvolvimento.

const STORAGE_KEY = 'xfc.profile.v1';

const DEFAULT_PROFILE = {
  name: 'XFC Player',
  level: 6,
  xp: 3000,
  xpMax: 3000,
  coins: 1250,
  matchesPlayed: 0,
  favourite: null
};

function loadProfile() {
  try {
    const raw = globalThis.localStorage?.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_PROFILE };
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_PROFILE, ...parsed };
  } catch {
    return { ...DEFAULT_PROFILE };
  }
}

export function createState() {
  return {
    profile: loadProfile(),
    selection: { home: null, away: null },
    // Blusa escolhida por time (índice em KITS[teamId]).
    kits: {},
    settings: { liveForm: false, focus: 'home' },
    lastScreen: 'intro'
  };
}

export function saveProfile(state) {
  try {
    globalThis.localStorage?.setItem(STORAGE_KEY, JSON.stringify(state.profile));
  } catch {
    // Sem storage (modo privado) o jogo continua funcionando, só não lembra do perfil.
  }
}

/** Formata a barra de XP como no menu: "3K/3K". */
export function formatXp(value) {
  if (value >= 1000) return `${(value / 1000).toFixed(value % 1000 === 0 ? 0 : 1)}K`;
  return String(value);
}
