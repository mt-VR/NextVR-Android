import {bindAssetProfile} from './data/asset-library.js';
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
  gems: 1250,
  matchesPlayed: 0,
  favourite: null,
  worldCupCampaign: null,
  ultimatePlayers: []
};

function loadProfile() {
  try {
    const raw = globalThis.localStorage?.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_PROFILE, ultimatePlayers: [] };
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_PROFILE,
      ...parsed,
      ultimatePlayers: Array.isArray(parsed.ultimatePlayers) ? [...parsed.ultimatePlayers] : []
    };
  } catch {
    return { ...DEFAULT_PROFILE };
  }
}

export function createState() {
  const profile=loadProfile();bindAssetProfile(profile);
  return {
    profile,
    selection: { home: null, away: null },
    // Blusa escolhida por time (índice em KITS[teamId]).
    kits: {},
    settings: { liveForm: false, focus: 'home' },
    lastScreen: 'intro'
  };
}

export function saveProfile(state) {
  try {
    if(!globalThis.localStorage)return false;
    globalThis.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.profile));
    return true;
  } catch {
    // Sem storage o chamador pode avisar; nunca fingir que a gravação funcionou.
    return false;
  }
}

/** Formata a barra de XP como no menu: "3K/3K". */
export function formatXp(value) {
  if (value >= 1000) return `${(value / 1000).toFixed(value % 1000 === 0 ? 0 : 1)}K`;
  return String(value);
}
