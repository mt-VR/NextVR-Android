// Menus das competições do XFC: UEFA Champions League, Copa América,
// Libertadores e Copa do Mundo.
//
// A tela segue o layout das referências enviadas: arte de fundo com o troféu,
// menu lateral com ícones, carteira no topo e a faixa inferior com a próxima
// partida, a fase atual e o destaque de cada campeonato. Tudo que a pessoa
// aperta é DOM de verdade (botões com foco, hover e aria-pressed); só o
// estádio, o troféu e o emblema ficam na imagem.
//
// As telas internas (jogar, calendário, classificação, grupos, mata-mata,
// artilharia e final) continuam sendo geradas por `data/tournament.js`, então
// cada opção mostra dados reais do campeonato.

import { el, svg } from '../ui/dom.js';
import { flagSvg } from '../ui/flags.js';
import { kitsOf, kitSvg } from '../data/kits.js';
import { saveProfile } from '../state.js';
import { STADIUMS } from '../match3d/stadiums.js';
import {
  COMPETITIONS,
  getCompetition,
  competitionTeams,
  competitionTeam,
  createTournament,
  isTournamentValid,
  tournamentBracket,
  tournamentScorers,
  tournamentStatus,
  groupTable,
  allGroupTables,
  nextTournamentFixture,
  simulateRound,
  stageLabel,
  knockoutName
} from '../data/tournament.js';

/* --------------------------------------------------------------- ícones --- */

const ICONS = {
  ball: `<circle cx="12" cy="12" r="9.1" fill="none" stroke="currentColor" stroke-width="1.7"/>
    <path d="M12 6.9l4.2 3-1.6 5.1h-5.2L7.8 9.9z" fill="currentColor"/>
    <path d="M12 2.9v4M3.4 9.4l4.4 1.4M20.6 9.4l-4.4 1.4M6.6 20.1l1.9-4.2M17.4 20.1l-1.9-4.2" stroke="currentColor" stroke-width="1.5"/>`,
  trophy: `<path d="M6.2 3.4h11.6v5.2a5.8 5.8 0 0 1-11.6 0z" fill="currentColor"/>
    <path d="M6.2 4.6H3.4v2.2a3.5 3.5 0 0 0 3.3 3.5M17.8 4.6h2.8v2.2a3.5 3.5 0 0 1-3.3 3.5" fill="none" stroke="currentColor" stroke-width="1.7"/>
    <rect x="10.7" y="13.2" width="2.6" height="3.9" fill="currentColor"/>
    <path d="M7.4 20.6h9.2l-1.1-3.5H8.5z" fill="currentColor"/>`,
  cup: `<path d="M7.5 3.5h9v6.2a4.5 4.5 0 0 1-9 0z" fill="currentColor"/>
    <path d="M7.5 5H4.9v1.9A3 3 0 0 0 7.6 9.8M16.5 5h2.6v1.9a3 3 0 0 1-2.7 2.9" fill="none" stroke="currentColor" stroke-width="1.6"/>
    <path d="M11.2 13.5h1.6v3.2h-1.6z" fill="currentColor"/>
    <path d="M8.2 20.5h7.6l-1-3.2H9.2z" fill="currentColor"/>
    <path d="M12 5.2l.9 1.8 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2-1.5-1.4 2-.3z" fill="var(--comp-active-icon, #08172c)"/>`,
  calendar: `<rect x="3.2" y="5.2" width="17.6" height="15.6" rx="2.6" fill="none" stroke="currentColor" stroke-width="1.8"/>
    <path d="M3.2 10h17.6" stroke="currentColor" stroke-width="1.8"/>
    <path d="M8 3.2v4M16 3.2v4" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"/>
    <g fill="currentColor"><circle cx="7.6" cy="13.4" r="1.25"/><circle cx="12" cy="13.4" r="1.25"/><circle cx="16.4" cy="13.4" r="1.25"/><circle cx="7.6" cy="17.2" r="1.25"/><circle cx="12" cy="17.2" r="1.25"/></g>`,
  chart: `<g fill="currentColor"><rect x="3.2" y="12.4" width="4" height="8.4" rx="1.1"/><rect x="10" y="6.6" width="4" height="14.2" rx="1.1"/><rect x="16.8" y="9.6" width="4" height="11.2" rx="1.1"/></g>`,
  people: `<circle cx="9.3" cy="8.1" r="3.4" fill="currentColor"/>
    <path d="M3.1 19.6c0-3.4 2.8-5.9 6.2-5.9s6.2 2.5 6.2 5.9z" fill="currentColor"/>
    <circle cx="17.1" cy="9.4" r="2.6" fill="currentColor" opacity=".82"/>
    <path d="M14.6 19.6c0-2.9 1.9-4.9 4.3-4.9s4.2 2 4.2 4.9z" fill="currentColor" opacity=".82"/>`,
  bracket: `<g fill="currentColor"><rect x="2.6" y="3.4" width="6.4" height="4.2" rx="1.1"/><rect x="2.6" y="9.9" width="6.4" height="4.2" rx="1.1"/><rect x="2.6" y="16.4" width="6.4" height="4.2" rx="1.1"/><rect x="14.9" y="6.6" width="6.4" height="4.2" rx="1.1"/><rect x="14.9" y="13.2" width="6.4" height="4.2" rx="1.1"/></g>
    <path d="M9 5.5h2.6v13.2H9M9 12.1h2.6M11.6 12.1h3.3M11.6 8.7h3.3M11.6 15.3h3.3" fill="none" stroke="currentColor" stroke-width="1.5"/>`,
  boot: `<path d="M3.4 8.6h2.9l1.1 4.4h3.4c2.4 0 4.1.9 5.1 2.6l.7 1.2a1 1 0 0 1-.9 1.5H4.5a1.1 1.1 0 0 1-1.1-1.1z" fill="currentColor"/>
    <path d="M6.3 8.6V5.4c0-.5.4-.8.9-.8h1.1c.5 0 .9.3.9.8v3.2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M12.2 13.2l1.5 1.4M14.9 15.1l1.6 1.1" stroke="var(--comp-active-icon, #08172c)" stroke-width="1.2" fill="none" opacity=".55"/>`,
  back: `<path d="M15 4.2L7.2 12l7.8 7.8" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`,
  gear: `<circle cx="12" cy="12" r="3.1" fill="none" stroke="currentColor" stroke-width="1.9"/>
    <path d="M18.9 14.6a1.5 1.5 0 0 0 .3 1.7l.1.1a1.9 1.9 0 1 1-2.7 2.7l-.1-.1a1.5 1.5 0 0 0-2.5 1.1v.3a1.9 1.9 0 1 1-3.8 0v-.2a1.5 1.5 0 0 0-2.6-1l-.1.1a1.9 1.9 0 1 1-2.7-2.7l.1-.1a1.5 1.5 0 0 0-1.1-2.5H3.6a1.9 1.9 0 1 1 0-3.8h.2a1.5 1.5 0 0 0 1-2.6l-.1-.1A1.9 1.9 0 1 1 7.4 4.8l.1.1a1.5 1.5 0 0 0 1.7.3h.1a1.5 1.5 0 0 0 .9-1.4V3.6a1.9 1.9 0 1 1 3.8 0v.2a1.5 1.5 0 0 0 2.5 1.1l.1-.1a1.9 1.9 0 1 1 2.7 2.7l-.1.1a1.5 1.5 0 0 0 1 2.6h.3a1.9 1.9 0 1 1 0 3.8h-.2a1.5 1.5 0 0 0-1.3.9z" fill="none" stroke="currentColor" stroke-width="1.55"/>`
};

const CHEVRON = `<path d="M9.2 4.4L16.4 12l-7.2 7.6" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`;

function iconEl(name, className = 'comp__icon') {
  return el('span', {
    class: className,
    'aria-hidden': 'true',
    html: `<svg viewBox="0 0 24 24" focusable="false">${ICONS[name] || ICONS.ball}</svg>`
  });
}

/* ------------------------------------------------------- carteira/topbar --- */

const COIN = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <circle cx="12" cy="12" r="10" fill="#f6c945" stroke="#b8891b" stroke-width="1.2"/>
  <circle cx="12" cy="12" r="7.1" fill="none" stroke="#c99a20" stroke-width="1.3"/>
  <path d="M14.2 8.6c-2.6-.8-4.3.5-4.3 2.3 0 2.6 4 2.1 4 4 0 .9-.9 1.4-1.9 1.4-1 0-1.8-.4-2.2-1" fill="none" stroke="#8d5f0c" stroke-width="1.7" stroke-linecap="round"/>
</svg>`;

const GEM = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M7.6 3.4h8.8l4.2 6.1L12 20.6 3.4 9.5z" fill="#2fe07c"/>
  <path d="M7.6 3.4L6 9.5h12l-1.6-6.1z" fill="#6df2a6"/>
  <path d="M12 20.6L6 9.5h12z" fill="#17b45f"/>
</svg>`;

/* --------------------------------------------------------------- layout --- */

// Coordenadas em pixels do palco de 1280x720 (o mesmo das referências).
const LAYOUT = {
  'uefa-champions-league': {
    menu: { x: 26, y: 112, w: 292, h: 380 },
    deck: [
      { x: 26, w: 475, kind: 'match', variant: 'wide' },
      { x: 515, w: 212, kind: 'phase' },
      { x: 730, w: 155, kind: 'rank' }
    ],
    phaseLabel: 'FASE ATUAL'
  },
  'copa-america': {
    menu: { x: 26, y: 120, w: 292, h: 392 },
    deck: [
      { x: 26, w: 364, kind: 'match', variant: 'stack' },
      { x: 401, w: 368, kind: 'phase' },
      { x: 774, w: 412, kind: 'news' }
    ],
    phaseLabel: 'FASE ATUAL'
  },
  'conmebol-libertadores': {
    menu: { x: 26, y: 125, w: 292, h: 347 },
    deck: [
      { x: 26, w: 381, kind: 'match', variant: 'stack' },
      { x: 414, w: 355, kind: 'phase' },
      { x: 774, w: 476, kind: 'news' }
    ],
    phaseLabel: 'FASE DE GRUPOS'
  },
  'world-cup': {
    menu: { x: 26, y: 125, w: 292, h: 355 },
    deck: [
      { x: 26, w: 381, kind: 'match', variant: 'stack' },
      { x: 414, w: 355, kind: 'phase' },
      { x: 774, w: 476, kind: 'scorer' }
    ],
    phaseLabel: 'FASE DE GRUPOS'
  }
};

const ART = {
  'uefa-champions-league': 'assets/competitions/ucl.jpg',
  'copa-america': 'assets/competitions/copa-america.jpg',
  'conmebol-libertadores': 'assets/competitions/libertadores.jpg',
  'world-cup': 'assets/competitions/world-cup.jpg'
};

const NEWS_ART = {
  'copa-america': 'assets/competitions/copa-america-news.jpg',
  'conmebol-libertadores': 'assets/competitions/libertadores-news.jpg',
  'world-cup': 'assets/competitions/world-cup-news.jpg'
};

// Menus exatamente como nas referências de cada competição.
const MENUS = {
  'uefa-champions-league': [
    { id: 'play', label: 'Jogar Partida', icon: 'ball' },
    { id: 'calendar', label: 'Calendário', icon: 'calendar' },
    { id: 'standings', label: 'Classificação', icon: 'trophy' },
    { id: 'knockout', label: 'Mata-Mata', icon: 'bracket' },
    { id: 'scorers', label: 'Estatísticas', icon: 'chart' },
    { id: 'final', label: 'Final', icon: 'cup' }
  ],
  'copa-america': [
    { id: 'play', label: 'Jogar Partida', icon: 'trophy' },
    { id: 'entity', label: 'Seleções', icon: 'people' },
    { id: 'calendar', label: 'Calendário', icon: 'calendar' },
    { id: 'standings', label: 'Classificação', icon: 'chart' },
    { id: 'groups', label: 'Fase de Grupos', icon: 'people' },
    { id: 'knockout', label: 'Mata-Mata', icon: 'bracket' },
    { id: 'scorers', label: 'Artilharia', icon: 'boot' },
    { id: 'final', label: 'Final', icon: 'cup' }
  ],
  'conmebol-libertadores': [
    { id: 'play', label: 'Jogar Partida', icon: 'trophy' },
    { id: 'calendar', label: 'Calendário', icon: 'calendar' },
    { id: 'standings', label: 'Classificação', icon: 'chart' },
    { id: 'groups', label: 'Fase de Grupos', icon: 'people' },
    { id: 'knockout', label: 'Mata-Mata', icon: 'bracket' },
    { id: 'scorers', label: 'Artilharia', icon: 'boot' },
    { id: 'final', label: 'Final', icon: 'cup' }
  ],
  'world-cup': [
    { id: 'play', label: 'Jogar Partida', icon: 'trophy' },
    { id: 'entity', label: 'Seleções', icon: 'people' },
    { id: 'calendar', label: 'Calendário', icon: 'calendar' },
    { id: 'standings', label: 'Classificação', icon: 'chart' },
    { id: 'groups', label: 'Fase de Grupos', icon: 'people' },
    { id: 'knockout', label: 'Mata-Mata', icon: 'bracket' },
    { id: 'scorers', label: 'Artilharia', icon: 'boot' },
    { id: 'final', label: 'Final', icon: 'cup' }
  ]
};

const PANEL_IDS = new Set([
  'home', 'play', 'entity', 'calendar', 'standings', 'groups', 'knockout', 'scorers', 'final'
]);

/* ------------------------------------------------------------- troféus --- */

const TROPHIES = {
  ucl: `<svg viewBox="0 0 200 300" role="img" aria-label="Troféu da Champions League">
    <defs>
      <linearGradient id="uclSilver" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#ffffff"/><stop offset=".35" stop-color="#c9d6e6"/>
        <stop offset=".62" stop-color="#7f93ad"/><stop offset="1" stop-color="#e8f1fb"/>
      </linearGradient>
    </defs>
    <ellipse cx="100" cy="286" rx="64" ry="12" fill="rgba(0,0,0,.45)"/>
    <path d="M62 258h76l-6 22H68z" fill="#141a24"/>
    <path d="M70 244h60v16H70z" fill="#232c3a"/>
    <path d="M78 226h44l-4 20H82z" fill="url(#uclSilver)"/>
    <path d="M84 150h32v78H84z" fill="url(#uclSilver)"/>
    <path d="M46 78h108c0 52-18 80-54 80S46 130 46 78z" fill="url(#uclSilver)"/>
    <circle cx="100" cy="112" r="26" fill="#0b1430" stroke="#dfe9f6" stroke-width="3"/>
    <path d="M100 94l7 14 16 2-12 11 3 16-14-8-14 8 3-16-12-11 16-2z" fill="#ffffff"/>
  </svg>`,
  'copa-america': `<svg viewBox="0 0 200 300" role="img" aria-label="Troféu da Copa América">
    <defs>
      <linearGradient id="caSilver" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#ffffff"/><stop offset=".4" stop-color="#d8dee6"/>
        <stop offset=".7" stop-color="#93a0af"/><stop offset="1" stop-color="#f2f6fa"/>
      </linearGradient>
      <linearGradient id="caWood" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#4a2d16"/><stop offset=".5" stop-color="#8a5b2c"/>
        <stop offset="1" stop-color="#3a2210"/>
      </linearGradient>
    </defs>
    <ellipse cx="100" cy="288" rx="62" ry="11" fill="rgba(0,0,0,.45)"/>
    <path d="M40 248h120l-8 40H48z" fill="url(#caWood)"/>
    <path d="M72 196h56l-6 44H78z" fill="url(#caSilver)"/>
    <path d="M58 62h84c0 76-18 138-42 138S58 138 58 62z" fill="url(#caSilver)"/>
  </svg>`,
  libertadores: `<svg viewBox="0 0 200 300" role="img" aria-label="Troféu da Libertadores">
    <defs>
      <linearGradient id="libGold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#ffe9a8"/><stop offset=".35" stop-color="#e5b94e"/>
        <stop offset=".7" stop-color="#a97b1c"/><stop offset="1" stop-color="#f7dc8c"/>
      </linearGradient>
    </defs>
    <ellipse cx="100" cy="288" rx="66" ry="12" fill="rgba(0,0,0,.55)"/>
    <path d="M40 244h120l-10 44H50z" fill="#3a2a0c"/>
    <rect x="44" y="232" width="112" height="14" rx="4" fill="url(#libGold)"/>
    <path d="M74 170h52l-4 62H78z" fill="url(#libGold)"/>
    <path d="M54 60c22-10 70-10 92 0 6 40-4 96-46 108C58 156 48 100 54 60z" fill="url(#libGold)"/>
    <circle cx="100" cy="96" r="22" fill="#2a1c06" stroke="#ffe9a8" stroke-width="2"/>
  </svg>`,
  'world-cup': `<svg viewBox="0 0 200 300" role="img" aria-label="Taça da Copa do Mundo">
    <defs>
      <linearGradient id="wcGold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#fff2c0"/><stop offset=".3" stop-color="#f0c45a"/>
        <stop offset=".62" stop-color="#b8862c"/><stop offset="1" stop-color="#ffe08a"/>
      </linearGradient>
    </defs>
    <ellipse cx="100" cy="288" rx="56" ry="11" fill="rgba(0,0,0,.5)"/>
    <path d="M58 250h84l-8 34H66z" fill="#2a0c12"/>
    <rect x="58" y="240" width="84" height="12" rx="4" fill="url(#wcGold)"/>
    <path d="M84 190h32l-2 52H86z" fill="url(#wcGold)"/>
    <path d="M68 62c0 60 10 108 32 130 22-22 32-70 32-130-20-14-44-14-64 0z" fill="url(#wcGold)"/>
  </svg>`
};

function trophySvg(competition, className = 'comp__trophy') {
  return el('div', { class: className, 'aria-hidden': 'true', html: TROPHIES[competition.trophy] || TROPHIES.ucl });
}

/* ------------------------------------------------------------- ajudantes --- */

function teamBadge(team, className = 'comp-badge') {
  if (team?.crest) return el('img', { class: className, src: team.crest, alt: `Escudo do ${team.name}` });
  return el('span', { class: `${className} comp-badge--flag`, 'aria-label': `Bandeira ${team?.name || ''}` },
    flagSvg(team?.flagCode || 'br'));
}

function competitionTeamName(teamId) {
  return competitionTeam(teamId)?.name || teamId;
}

function shortName(teamId) {
  const team = competitionTeam(teamId);
  return team?.shortName || team?.name || teamId;
}

function tournamentOf(ctx, competitionId) {
  const profile = ctx.state.profile;
  if (!profile.tournaments || typeof profile.tournaments !== 'object') profile.tournaments = {};
  const tournament = profile.tournaments[competitionId];
  return isTournamentValid(tournament) ? tournament : null;
}

function storeTournament(ctx, tournament) {
  const profile = ctx.state.profile;
  profile.tournaments ||= {};
  profile.tournaments[tournament.competitionId] = tournament;
  saveProfile(ctx.state);
}

// A tela ocupa o palco inteiro: as medidas horizontais viram porcentagem para
// acompanharem telas mais largas que 16:9 (celulares 20:9, por exemplo).
const STAGE_WIDTH = 1280;
function pct(px) {
  return `${(px / STAGE_WIDTH * 100).toFixed(4)}%`;
}

function formatNumber(value) {
  const number = Math.max(0, Math.round(Number(value) || 0));
  try {
    return new Intl.NumberFormat('pt-BR').format(number);
  } catch {
    return String(number);
  }
}

/* --------------------------------------------------------------- tela --- */

export function competitionScreen(ctx, params = {}) {
  const competition = getCompetition(params.competitionId);
  const layout = LAYOUT[competition.id] || LAYOUT['uefa-champions-league'];
  const menuItems = MENUS[competition.id] || MENUS['uefa-champions-league'];
  const returnTo = params.returnTo || 'modes';
  const stadium = STADIUMS[competition.stadiumIndex] || STADIUMS[0];
  const baseURI = globalThis.document?.baseURI || 'about:blank';
  let panel = PANEL_IDS.has(params.panel) ? params.panel : 'home';
  let tournament = tournamentOf(ctx, competition.id);
  if (tournament) simulateRound(tournament, { random: Math.random });

  const root = el('div', {
    class: `screen screen--competition theme--${competition.theme}`,
    dataset: { competition: competition.id }
  });
  root.style.setProperty('--comp-art', `url("${new URL(ART[competition.id], baseURI).href}")`);
  if (NEWS_ART[competition.id]) {
    root.style.setProperty('--comp-news', `url("${new URL(NEWS_ART[competition.id], baseURI).href}")`);
  }

  const artboard = el('div', { class: 'comp__artboard' });
  const art = el('div', { class: 'comp__art', 'aria-hidden': 'true' });

  // O logo do XFC volta para o menu principal; fica sobre a arte, com foco
  // visível para quem navega pelo teclado.
  const brand = el('button', {
    class: 'comp__home',
    type: 'button',
    title: 'Voltar ao menu principal do XFC',
    'aria-label': 'Voltar ao menu principal do XFC',
    onClick: () => ctx.go('menu')
  });

  const wallet = el('div', { class: 'comp__wallet', 'aria-label': 'Carteira e nível' });
  const menu = el('nav', { class: 'comp__menu', 'aria-label': `Menu da ${competition.name}` });
  menu.style.setProperty('--comp-menu-x', pct(layout.menu.x));
  menu.style.setProperty('--comp-menu-y', `${layout.menu.y}px`);
  menu.style.setProperty('--comp-menu-w', pct(layout.menu.w));
  menu.style.setProperty('--comp-menu-h', `${layout.menu.h}px`);

  const stage = el('main', { class: 'comp__stage' });
  const deck = el('div', { class: 'comp__deck', 'aria-label': 'Resumo da competição' });
  const hints = el('div', { class: 'comp__hints' });

  artboard.append(art, brand, wallet, menu, stage, deck, hints);
  root.append(artboard);

  function paintWallet() {
    const profile = ctx.state.profile;
    const gems = Number(profile.gems ?? 1250);
    const level = Number(profile.level ?? 6);
    wallet.replaceChildren(
      el('span', { class: 'comp__wallet-item', title: 'Moedas' },
        el('span', { class: 'comp__wallet-icon', html: COIN }),
        el('b', { class: 'comp__wallet-value', text: formatNumber(profile.coins ?? 1250) })
      ),
      el('span', { class: 'comp__wallet-item', title: 'Gemas' },
        el('span', { class: 'comp__wallet-icon', html: GEM }),
        el('b', { class: 'comp__wallet-value', text: formatNumber(gems) })
      ),
      el('span', { class: 'comp__wallet-level', title: `Nível ${level}`, text: String(level) }),
      el('button', {
        class: 'comp__gear',
        type: 'button',
        'aria-label': 'Configurações',
        title: 'Configurações',
        onClick: () => ctx.go('customise')
      }, iconEl('gear', 'comp__gear-icon'))
    );
  }

  function paintMenu() {
    const activePanel = panel === 'home' ? 'play' : panel;
    const items = menuItems.map(item => el('button', {
      class: `comp__menu-item${activePanel === item.id ? ' is-active' : ''}`,
      type: 'button',
      dataset: { panel: item.id },
      'aria-pressed': activePanel === item.id ? 'true' : 'false',
      onClick: () => show(item.id === panel ? 'home' : item.id)
    },
      iconEl(item.icon),
      el('span', { class: 'comp__menu-label', text: item.label }),
      el('span', { class: 'comp__menu-chevron', 'aria-hidden': 'true', html: `<svg viewBox="0 0 24 24">${CHEVRON}</svg>` })
    ));

    menu.replaceChildren(
      ...items,
      el('span', { class: 'comp__menu-rule', 'aria-hidden': 'true' }),
      el('button', {
        class: 'comp__menu-item comp__menu-item--back',
        type: 'button',
        dataset: { panel: 'back' },
        onClick: () => ctx.go(returnTo)
      },
        iconEl('back'),
        el('span', { class: 'comp__menu-label', text: returnTo === 'menu' ? 'Voltar ao Menu' : 'Voltar aos Modos' })
      )
    );
  }

  function show(next) {
    panel = next;
    paintMenu();
    paintStage();
    paintDeck();
    stage.scrollTop = 0;
  }

  /* ---------------------------------------------------------- carteira --- */

  function userGroupPosition() {
    if (!tournament) return null;
    const tables = allGroupTables(tournament);
    for (const { table } of tables) {
      const index = table.findIndex(entry => entry.id === tournament.userTeamId);
      if (index >= 0) return { position: index + 1, group: table };
    }
    return null;
  }

  function remainingFixtures() {
    if (!tournament) return 0;
    return tournament.fixtures.filter(fixture => !fixture.played
      && (fixture.home === tournament.userTeamId || fixture.away === tournament.userTeamId)).length;
  }

  function lastResult() {
    if (!tournament) return null;
    const played = tournament.fixtures
      .filter(fixture => fixture.played
        && (fixture.home === tournament.userTeamId || fixture.away === tournament.userTeamId)
        && fixture.home && fixture.away);
    return played.length ? played[played.length - 1] : null;
  }

  function matchCard() {
    const upcoming = tournament ? nextTournamentFixture(tournament) : null;
    const wide = layout.deck[0].variant === 'wide';
    if (!upcoming) {
      return el('article', { class: 'comp__card comp__card--match' },
        el('span', { class: 'comp__card-label', text: 'PRÓXIMA PARTIDA' }),
        el('div', { class: 'comp__card-empty' },
          el('b', { text: tournament ? tournamentStatus(tournament).label : 'Escolha o seu time' }),
          el('span', { text: tournament ? tournamentStatus(tournament).detail : 'O sorteio cria grupos, calendário e mata-mata.' })
        )
      );
    }
    const meta = el('div', { class: `comp__card-meta${wide ? ' comp__card-meta--side' : ''}` },
      el('span', { class: 'comp__card-meta-row' },
        el('span', { class: 'comp__card-meta-icon', html: '<svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="12" rx="10" ry="7" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M12 5v14M4.2 8.6c4.6 2.2 11.6 2.2 15.6 0M4.2 15.4c4.6-2.2 11.6-2.2 15.6 0" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>' }),
        el('span', { text: stadium.name })
      ),
      el('span', { class: 'comp__card-meta-row' },
        el('span', { class: 'comp__card-meta-icon', html: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.4" y="5.4" width="17.2" height="15" rx="2.4" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M3.4 10h17.2M8 3.4v4M16 3.4v4" stroke="currentColor" stroke-width="1.8"/></svg>' }),
        el('span', { text: stageLabel(upcoming.stage) })
      )
    );
    return el('article', { class: `comp__card comp__card--match comp__card--${wide ? 'wide' : 'stack'}` },
      el('span', { class: 'comp__card-label', text: 'PRÓXIMA PARTIDA' }),
      el('div', { class: 'comp__card-body' },
        el('div', { class: 'comp__card-teams' },
          el('div', { class: 'comp__card-side' },
            teamBadge(competitionTeam(upcoming.home), 'comp__card-crest'),
            el('b', { class: 'comp__card-team', text: shortName(upcoming.home) })
          ),
          el('span', { class: 'comp__card-x', text: 'X' }),
          el('div', { class: 'comp__card-side' },
            teamBadge(competitionTeam(upcoming.away), 'comp__card-crest'),
            el('b', { class: 'comp__card-team', text: shortName(upcoming.away) })
          )
        ),
        meta
      )
    );
  }

  function phaseCard() {
    const status = tournamentStatus(tournament);
    const plain = competition.theme === 'ucl';
    const position = userGroupPosition();
    const value = position ? `GRUPO ${tournament.groups
      ? Object.keys(tournament.groups).find(key => tournament.groups[key].includes(tournament.userTeamId))
      : ''}` : status.label;
    const remaining = remainingFixtures();
    return el('article', { class: `comp__card comp__card--phase${plain ? ' comp__card--plain' : ''}` },
      el('span', { class: 'comp__card-label', text: layout.phaseLabel }),
      el('div', { class: 'comp__card-phase' },
        !plain && el('span', { class: 'comp__card-emblem', 'aria-hidden': 'true', html: TROPHIES[competition.trophy] || TROPHIES.ucl }),
        el('div', { class: 'comp__card-phase-copy' },
          el('b', { class: 'comp__card-phase-title', text: position ? value : (tournament ? value : 'FASE DE GRUPOS') }),
          el('span', { class: 'comp__card-phase-meta', text: `JOGOS RESTANTES: ${remaining}` })
        )
      )
    );
  }

  function rankCard() {
    const position = userGroupPosition();
    return el('article', { class: 'comp__card comp__card--rank' },
      el('span', { class: 'comp__card-label', text: 'CLASSIFICAÇÃO' }),
      el('div', { class: 'comp__card-rank' },
        el('span', { class: 'comp__card-rank-icon', 'aria-hidden': 'true', html: ICONS.trophy }),
        el('b', { class: 'comp__card-rank-value', text: position ? `${position.position}º` : '—' })
      )
    );
  }

  function newsCard() {
    const result = lastResult();
    const text = result
      ? `${shortName(result.home)} ${result.homeGoals}×${result.awayGoals} ${shortName(result.away)}`
      : `O sorteio da ${competition.shortName} está pronto.`;
    return el('article', { class: 'comp__card comp__card--news' },
      el('span', { class: 'comp__card-label', text: 'ÚLTIMAS NOTÍCIAS' }),
      el('div', { class: 'comp__card-news-copy' },
        el('p', { text: result ? `Placar da última rodada: ${text}.` : text })
      )
    );
  }

  function scorerCard() {
    const scorers = tournament ? tournamentScorers(tournament, 1) : [];
    const top = scorers[0];
    return el('article', { class: 'comp__card comp__card--scorer' },
      el('span', { class: 'comp__card-label', text: 'ARTILHARIA' }),
      el('div', { class: 'comp__card-scorer' },
        top
          ? [
            el('b', { class: 'comp__card-scorer-name', text: top.name }),
            el('span', { class: 'comp__card-scorer-goals', text: `${top.goals} ${top.goals > 1 ? 'GOLS' : 'GOL'}` })
          ]
          : el('span', { class: 'comp__card-scorer-empty', text: 'Nenhum gol marcado ainda.' })
      )
    );
  }

  function paintDeck() {
    const builders = { match: matchCard, phase: phaseCard, rank: rankCard, news: newsCard, scorer: scorerCard };
    deck.replaceChildren(...layout.deck.map(slot => {
      const card = builders[slot.kind]();
      card.style.left = pct(slot.x);
      card.style.width = pct(slot.w);
      return card;
    }));
  }

  function paintHints() {
    hints.replaceChildren(
      el('button', {
        class: 'comp__hint',
        type: 'button',
        onClick: () => (panel === 'home' ? ctx.go(returnTo) : show('home'))
      },
        el('span', { class: 'comp__hint-key', text: '✕' }),
        el('span', { text: panel === 'home' ? 'Voltar' : 'Início' })
      ),
      el('button', {
        class: 'comp__hint',
        type: 'button',
        onClick: () => show('play')
      },
        el('span', { class: 'comp__hint-key', text: 'Ⓛ' }),
        el('span', { text: 'Jogar' })
      )
    );
  }

  /* ----------------------------------------------------------- estágio --- */

  function paintStage() {
    const isHome = panel === 'home';
    root.classList.toggle('is-panel', !isHome);
    if (isHome) {
      stage.replaceChildren();
      return;
    }
    if (panel === 'play' || panel === 'entity') {
      stage.replaceChildren(panel === 'entity' && tournament ? entitiesPanel() : playPanel());
      return;
    }
    const builders = {
      calendar: calendarPanel,
      standings: standingsPanel,
      groups: groupsPanel,
      knockout: knockoutPanel,
      scorers: scorersPanel,
      final: finalPanel
    };
    const builder = builders[panel];
    if (!builder) {
      stage.replaceChildren();
      return;
    }
    if (!tournament && panel !== 'calendar') {
      stage.replaceChildren(emptyPanel());
      return;
    }
    stage.replaceChildren(builder());
  }

  function sectionTitle(title, note) {
    return el('div', { class: 'comp__section-heading' },
      el('h2', { class: 'comp__section-title', text: title }),
      note && el('span', { class: 'comp__section-note', text: note })
    );
  }

  function emptyPanel() {
    return el('section', { class: 'comp__empty' },
      el('h2', { class: 'comp__empty-title', text: 'Sorteie o campeonato primeiro' }),
      el('p', { class: 'comp__empty-copy', text: 'Escolha o seu time em “Jogar Partida” para gerar grupos, calendário e mata-mata.' }),
      el('button', {
        class: 'comp__cta', type: 'button',
        onClick: () => show('play')
      }, 'ESCOLHER TIME  →')
    );
  }

  /* ------------------------------------------------------- jogar partida --- */

  function kitsFor(team) {
    if (!team) return [];
    if (team.kind === 'club') return kitsOf(team.id);
    const colors = team.colors || {};
    return [
      { id: 'home', name: 'Home', pattern: 'solid', colors },
      {
        id: 'away', name: 'Away', pattern: 'solid',
        colors: { primary: colors.secondary, secondary: colors.primary, trim: colors.trim }
      }
    ];
  }

  function playPanel() {
    if (!tournament) {
      return selectionPanel();
    }
    const upcoming = nextTournamentFixture(tournament);
    const status = tournamentStatus(tournament);
    const userTeam = competitionTeam(tournament.userTeamId);
    const kits = kitsFor(userTeam);
    const kitIndex = Math.min(kits.length - 1, tournament.kits?.[tournament.userTeamId] ?? 0);

    const header = el('section', { class: 'comp__panel-head' },
      el('div', null,
        el('span', { class: 'comp__panel-eyebrow', text: `${competition.name.toUpperCase()} · ${competition.year}` }),
        el('h1', { class: 'comp__panel-title', text: `Sua campanha com ${userTeam.shortName || userTeam.name}` }),
        el('p', { class: 'comp__panel-copy', text: status.detail })
      ),
      el('div', { class: 'comp__panel-team' },
        teamBadge(userTeam, 'comp__panel-crest'),
        el('div', null,
          el('b', { text: userTeam.name }),
          el('span', { class: 'comp__panel-sub', text: `${userTeam.players.length} jogadores · OVR ${userTeam.ratings.ovr}` })
        )
      )
    );

    const kitPicker = el('div', { class: 'comp__kits', 'aria-label': 'Uniformes do seu time' },
      ...kits.map((kit, index) => el('button', {
        class: `comp__kit${index === kitIndex ? ' is-active' : ''}`,
        type: 'button',
        dataset: { kit: String(index) },
        'aria-pressed': index === kitIndex ? 'true' : 'false',
        onClick() {
          tournament.kits ||= {};
          tournament.kits[tournament.userTeamId] = index;
          storeTournament(ctx, tournament);
          paintStage();
        }
      },
        el('span', { class: 'comp__kit-shirt', html: kitSvg(kit, { width: 54 }) }),
        el('span', { class: 'comp__kit-label', text: kit.name })
      ))
    );

    const fixture = upcoming;
    const matchCardNode = fixture
      ? el('div', { class: 'comp__match' },
        el('span', { class: 'comp__match-stage', text: stageLabel(fixture.stage) }),
        el('div', { class: 'comp__match-row' },
          el('div', { class: 'comp__match-side' },
            teamBadge(competitionTeam(fixture.home), 'comp__match-crest'),
            el('b', { text: competitionTeamName(fixture.home) })
          ),
          el('span', { class: 'comp__match-vs', text: 'VS' }),
          el('div', { class: 'comp__match-side comp__match-side--away' },
            teamBadge(competitionTeam(fixture.away), 'comp__match-crest'),
            el('b', { text: competitionTeamName(fixture.away) })
          )
        ),
        el('button', {
          class: 'comp__cta comp__cta--play',
          type: 'button',
          onClick: () => openMatch(fixture)
        }, 'JOGAR PARTIDA  →')
      )
      : el('div', { class: 'comp__match comp__match--done' },
        el('h3', { class: 'comp__match-title', text: tournament.champion ? 'Campeonato encerrado' : 'Aguardando a rodada' }),
        el('p', { class: 'comp__panel-copy', text: status.detail }),
        tournament.champion && el('button', {
          class: 'comp__cta',
          type: 'button',
          onClick: () => startNewTournament(tournament.userTeamId)
        }, 'NOVO SORTEIO  ↻')
      );

    let friendlyOpponent = competition.pool.find(id => id !== tournament.userTeamId);
    const opponentChips = el('div', { class: 'comp__opponents' },
      ...competitionTeams(competition.id)
        .filter(team => team.id !== tournament.userTeamId)
        .map(team => el('button', {
          class: `comp__opponent${team.id === friendlyOpponent ? ' is-active' : ''}`,
          type: 'button',
          dataset: { opponent: team.id },
          'aria-pressed': team.id === friendlyOpponent ? 'true' : 'false',
          onClick() {
            friendlyOpponent = team.id;
            for (const chip of opponentChips.children) {
              const active = chip.dataset.opponent === friendlyOpponent;
              chip.classList.toggle('is-active', active);
              chip.setAttribute('aria-pressed', active ? 'true' : 'false');
            }
          }
        },
          teamBadge(team, 'comp__opponent-crest'),
          el('span', { text: team.shortName || team.name })
        ))
    );

    return el('section', { class: 'comp__panel comp__panel--play' },
      header,
      el('div', { class: 'comp__play-grid' },
        matchCardNode,
        el('aside', { class: 'comp__side' },
          sectionTitle('Uniformes', 'Escolha a blusa da sua equipe'),
          kitPicker,
          tournament.champion && el('button', {
            class: 'comp__ghost', type: 'button',
            onClick: () => startNewTournament(tournament.userTeamId)
          }, 'NOVO SORTEIO  ↻')
        )
      ),
      el('div', { class: 'comp__friendlies' },
        sectionTitle('Amistoso', 'Escolha o adversário e jogue fora do campeonato'),
        el('div', { class: 'comp__friendlies-row' },
          opponentChips,
          el('button', {
            class: 'comp__ghost comp__ghost--friendly',
            type: 'button',
            onClick: () => openFriendly(friendlyOpponent)
          }, 'JOGAR AMISTOSO  →')
        )
      )
    );
  }

  /* --------------------------------------------------- escolha do time --- */

  function selectionPanel() {
    const teams = competitionTeams(competition.id);
    let selectedId = competition.pool.includes(ctx.state.selection.home) ? ctx.state.selection.home : teams[0].id;
    const grid = el('div', { class: 'comp__team-grid' });
    const preview = el('div', { class: 'comp__selection-preview' });

    function paintPreview() {
      const team = competitionTeam(selectedId);
      preview.replaceChildren(
        teamBadge(team, 'comp__selection-crest'),
        el('div', { class: 'comp__selection-copy' },
          el('span', { class: 'comp__panel-eyebrow', text: `SEU ${competition.entitySingular.toUpperCase()}` }),
          el('b', { class: 'comp__selection-name', text: team.name }),
          el('span', { class: 'comp__selection-sub', text: `${team.league} · OVR ${team.ratings.ovr}` }),
          el('span', { class: 'comp__selection-stars', text: '★'.repeat(Math.round(team.stars || 0)) })
        ),
        el('button', {
          class: 'comp__cta',
          type: 'button',
          onClick: () => startNewTournament(selectedId)
        }, 'SORTEAR E COMEÇAR  →')
      );
    }

    function paintGrid() {
      grid.replaceChildren(...teams.map(team => el('button', {
        class: `comp__team-card${team.id === selectedId ? ' is-selected' : ''}`,
        type: 'button',
        dataset: { teamId: team.id },
        'aria-pressed': team.id === selectedId ? 'true' : 'false',
        onClick() {
          selectedId = team.id;
          paintGrid();
          paintPreview();
        }
      },
        teamBadge(team, 'comp__team-crest'),
        el('b', { class: 'comp__team-name', text: team.shortName || team.name }),
        el('span', { class: 'comp__team-meta', text: `OVR ${team.ratings.ovr}` })
      )));
    }

    paintGrid();
    paintPreview();

    return el('section', { class: 'comp__panel comp__panel--select' },
      el('div', { class: 'comp__panel-head' },
        el('div', null,
          el('span', { class: 'comp__panel-eyebrow', text: `${competition.name.toUpperCase()} · ${competition.year}` }),
          el('h1', { class: 'comp__panel-title', text: `Escolha o seu ${competition.entitySingular}` }),
          el('p', { class: 'comp__panel-copy', text: `São ${teams.length} ${competition.entityLabel.toLowerCase()} no sorteio. Os grupos e o calendário são gerados na hora.` })
        )
      ),
      el('div', { class: 'comp__selection' }, grid, preview)
    );
  }

  /* ---------------------------------------------------------- participantes --- */

  function entitiesPanel() {
    const teams = competitionTeams(competition.id);
    const userTeam = competitionTeam(tournament.userTeamId);
    return el('section', { class: 'comp__panel comp__panel--entities' },
      sectionTitle(`${competition.entityLabel} do torneio`, `${teams.length} participantes · ${competition.year}`),
      el('div', { class: 'comp__entity-user' },
        teamBadge(userTeam, 'comp__entity-crest'),
        el('div', null,
          el('span', { class: 'comp__panel-eyebrow', text: 'SEU TIME' }),
          el('b', { class: 'comp__entity-name', text: userTeam.name })
        ),
        el('div', { class: 'comp__entity-kit' },
          ...kitsFor(userTeam).map((kit, index) => el('button', {
            class: `comp__kit comp__kit--mini${(tournament.kits?.[userTeam.id] ?? 0) === index ? ' is-active' : ''}`,
            type: 'button',
            'aria-label': `Uniforme ${kit.name}`,
            onClick() {
              tournament.kits ||= {};
              tournament.kits[userTeam.id] = index;
              storeTournament(ctx, tournament);
              paintStage();
            }
          }, el('span', { class: 'comp__kit-shirt', html: kitSvg(kit, { width: 42 }) })))
        )
      ),
      el('div', { class: 'comp__entity-grid' },
        ...teams.map(team => el('article', {
          class: `comp__entity-card${team.id === userTeam.id ? ' is-user' : ''}`,
          dataset: { teamId: team.id }
        },
          teamBadge(team, 'comp__entity-crest'),
          el('b', { class: 'comp__entity-name', text: team.name }),
          el('span', { class: 'comp__entity-meta', text: `${team.league} · OVR ${team.ratings.ovr}` })
        ))
      )
    );
  }

  /* ----------------------------------------------------------- calendário --- */

  function calendarPanel() {
    if (!tournament) {
      return el('section', { class: 'comp__panel comp__panel--calendar' },
        sectionTitle('Calendário', `${competition.name} · ${competition.year}`),
        el('div', { class: 'comp__empty comp__empty--inline' },
          el('h3', { class: 'comp__empty-title', text: 'Nenhum jogo sorteado ainda' }),
          el('p', { class: 'comp__empty-copy', text: 'Escolha o seu time em “Jogar Partida” para gerar as rodadas.' })
        )
      );
    }
    const fixtures = [...tournament.fixtures]
      .sort((first, second) => stageOrder(first) - stageOrder(second)
        || (first.round || 0) - (second.round || 0));
    return el('section', { class: 'comp__panel comp__panel--calendar' },
      sectionTitle('Calendário', `${fixtures.length} jogos · ${competition.year}`),
      el('div', { class: 'comp__calendar' },
        ...fixtures.map(fixture => el('article', {
          class: `comp__fixture${fixture.played ? ' is-played' : ''}`
            + `${fixture.home === tournament.userTeamId || fixture.away === tournament.userTeamId ? ' is-user' : ''}`,
          dataset: { fixtureId: fixture.id }
        },
          el('div', { class: 'comp__fixture-stage' },
            el('b', { text: fixture.stage === 'group' ? `Grupo ${fixture.group}` : knockoutName(fixture.stage) }),
            el('span', { text: fixture.stage === 'group' ? `Rodada ${fixture.round}` : stageLabel(fixture.stage) })
          ),
          el('div', { class: 'comp__fixture-teams' },
            teamBadge(competitionTeam(fixture.home), 'comp__fixture-crest'),
            el('span', { text: shortName(fixture.home) }),
            el('b', { class: 'comp__fixture-score', text: fixture.played ? `${fixture.homeGoals} – ${fixture.awayGoals}` : 'VS' }),
            el('span', { text: shortName(fixture.away) }),
            teamBadge(competitionTeam(fixture.away), 'comp__fixture-crest')
          ),
          el('span', { class: 'comp__fixture-status', text: fixtureStatus(fixture) })
        ))
      )
    );
  }

  function fixtureStatus(fixture) {
    if (fixture.played) {
      return fixture.decidedBy === 'penalties'
        ? `Pênaltis ${fixture.penalties?.[0]}×${fixture.penalties?.[1]}`
        : 'Encerrado';
    }
    if (fixture === nextTournamentFixture(tournament)) return 'Sua próxima partida';
    return 'Aguardando';
  }

  function stageOrder(fixture) {
    return ['group', 'r16', 'qf', 'sf', 'final'].indexOf(fixture.stage);
  }

  /* ------------------------------------------------------- classificação --- */

  function standingsPanel() {
    const tables = allGroupTables(tournament);
    return el('section', { class: 'comp__panel comp__panel--standings' },
      sectionTitle('Classificação', 'Os dois primeiros de cada grupo avançam'),
      el('div', { class: 'comp__tables' },
        ...tables.map(({ group, table }) => el('article', { class: 'comp__table', dataset: { group } },
          el('h3', { class: 'comp__table-title', text: `Grupo ${group}` }),
          el('div', { class: 'comp__table-head' },
            el('span', { text: '#' }), el('span', { text: '' }), el('span', { text: competition.entityLabel === 'Clubes' ? 'Clube' : 'Seleção' }),
            el('span', { text: 'J' }), el('span', { text: 'V' }), el('span', { text: 'E' }),
            el('span', { text: 'D' }), el('span', { text: 'SG' }), el('span', { text: 'Pts' })
          ),
          ...table.map((entry, index) => el('div', {
            class: `comp__table-row${entry.id === tournament.userTeamId ? ' is-user' : ''}${index < 2 ? ' is-qualified' : ''}`
          },
            el('span', { class: 'comp__table-rank', text: String(index + 1) }),
            teamBadge(competitionTeam(entry.id), 'comp__table-crest'),
            el('span', { class: 'comp__table-name', text: shortName(entry.id) }),
            el('span', { text: String(entry.played) }),
            el('span', { text: String(entry.won) }),
            el('span', { text: String(entry.drawn) }),
            el('span', { text: String(entry.lost) }),
            el('span', { text: `${entry.gf - entry.ga > 0 ? '+' : ''}${entry.gf - entry.ga}` }),
            el('span', { class: 'comp__table-points', text: String(entry.points) })
          ))
        ))
      )
    );
  }

  /* --------------------------------------------------------- fase de grupos --- */

  function groupsPanel() {
    const groups = Object.keys(tournament.groups);
    return el('section', { class: 'comp__panel comp__panel--groups' },
      sectionTitle('Fase de grupos', `${groups.length} grupos · sorteio realizado`),
      el('div', { class: 'comp__groups' },
        ...groups.map(group => {
          const table = groupTable(tournament, group);
          const fixtures = tournament.fixtures.filter(fixture => fixture.stage === 'group' && fixture.group === group);
          return el('article', { class: 'comp__group', dataset: { group } },
            el('h3', { class: 'comp__group-title', text: `Grupo ${group}` }),
            ...table.map((entry, index) => el('div', {
              class: `comp__group-team${entry.id === tournament.userTeamId ? ' is-user' : ''}`
            },
              el('span', { class: 'comp__group-rank', text: String(index + 1) }),
              teamBadge(competitionTeam(entry.id), 'comp__group-crest'),
              el('span', { class: 'comp__group-name', text: shortName(entry.id) }),
              el('span', { class: 'comp__group-points', text: `${entry.points} pts` })
            )),
            el('div', { class: 'comp__group-fixtures' },
              ...fixtures.map(fixture => el('div', { class: 'comp__group-fixture' },
                el('span', { text: shortName(fixture.home) }),
                el('b', { text: fixture.played ? `${fixture.homeGoals}–${fixture.awayGoals}` : 'VS' }),
                el('span', { text: shortName(fixture.away) })
              ))
            )
          );
        })
      )
    );
  }

  /* ----------------------------------------------------------- mata-mata --- */

  function knockoutPanel() {
    const bracket = tournamentBracket(tournament);
    if (!bracket.length) {
      return el('section', { class: 'comp__panel comp__panel--knockout' },
        sectionTitle('Mata-mata', 'Chaveamento'),
        el('div', { class: 'comp__empty comp__empty--inline' },
          el('h3', { class: 'comp__empty-title', text: 'Chaveamento ainda bloqueado' }),
          el('p', { class: 'comp__empty-copy', text: 'Conclua a fase de grupos para liberar as eliminatórias.' })
        )
      );
    }
    return el('section', { class: 'comp__panel comp__panel--knockout' },
      sectionTitle('Mata-mata', 'Do primeiro jogo à decisão'),
      el('div', { class: 'comp__bracket' },
        ...bracket.map(round => el('div', { class: 'comp__round', dataset: { stage: round.stage } },
          el('h3', { class: 'comp__round-title', text: round.label }),
          ...round.fixtures.map(fixture => el('div', {
            class: `comp__tie${fixture.winner === tournament.userTeamId ? ' is-win' : ''}`
              + `${fixture.played ? ' is-played' : ''}`
          },
            el('div', { class: `comp__tie-side${fixture.winner === fixture.home ? ' is-winner' : ''}` },
              teamBadge(competitionTeam(fixture.home), 'comp__tie-crest'),
              el('span', { text: shortName(fixture.home) }),
              el('b', { text: fixture.played ? String(fixture.homeGoals) : '—' })
            ),
            el('div', { class: `comp__tie-side${fixture.winner === fixture.away ? ' is-winner' : ''}` },
              teamBadge(competitionTeam(fixture.away), 'comp__tie-crest'),
              el('span', { text: shortName(fixture.away) }),
              el('b', { text: fixture.played ? String(fixture.awayGoals) : '—' })
            )
          ))
        ))
      )
    );
  }

  /* ----------------------------------------------------------- artilharia --- */

  function scorersPanel() {
    const scorers = tournamentScorers(tournament, 24);
    return el('section', { class: 'comp__panel comp__panel--scorers' },
      sectionTitle(panel === 'scorers' && competition.theme === 'ucl' ? 'Estatísticas' : 'Artilharia',
        'Gols marcados no campeonato'),
      el('div', { class: 'comp__scorers' },
        ...scorers.map((entry, index) => el('div', {
          class: `comp__scorer${entry.teamId === tournament.userTeamId ? ' is-user' : ''}`
        },
          el('span', { class: 'comp__scorer-rank', text: String(index + 1) }),
          teamBadge(competitionTeam(entry.teamId), 'comp__scorer-crest'),
          el('span', { class: 'comp__scorer-name', text: entry.name }),
          el('span', { class: 'comp__scorer-team', text: shortName(entry.teamId) }),
          el('b', { class: 'comp__scorer-goals', text: String(entry.goals) })
        ))
      )
    );
  }

  /* ----------------------------------------------------------------- final --- */

  function finalPanel() {
    const finalFixture = tournament.fixtures.find(fixture => fixture.stage === 'final');
    const champion = tournament.champion ? competitionTeam(tournament.champion) : null;
    const body = finalFixture
      ? el('div', { class: 'comp__final-card' },
        el('span', { class: 'comp__panel-eyebrow', text: `FINAL · ${competition.name.toUpperCase()}` }),
        el('div', { class: 'comp__final-teams' },
          el('div', { class: 'comp__final-side' },
            teamBadge(competitionTeam(finalFixture.home), 'comp__final-crest'),
            el('b', { text: competitionTeamName(finalFixture.home) })
          ),
          el('b', { class: 'comp__final-score', text: finalFixture.played ? `${finalFixture.homeGoals} × ${finalFixture.awayGoals}` : 'VS' }),
          el('div', { class: 'comp__final-side' },
            teamBadge(competitionTeam(finalFixture.away), 'comp__final-crest'),
            el('b', { text: competitionTeamName(finalFixture.away) })
          )
        ),
        finalFixture.played && finalFixture.decidedBy === 'penalties'
          && el('span', { class: 'comp__final-note', text: `Decidida nos pênaltis (${finalFixture.penalties?.[0]}×${finalFixture.penalties?.[1]})` }),
        !finalFixture.played && finalFixture.home && finalFixture.away
          && (finalFixture.home === tournament.userTeamId || finalFixture.away === tournament.userTeamId)
          && el('button', {
            class: 'comp__cta comp__cta--play', type: 'button',
            onClick: () => openMatch(finalFixture)
          }, 'JOGAR A FINAL  →')
      )
      : el('div', { class: 'comp__empty comp__empty--inline' },
        el('h3', { class: 'comp__empty-title', text: 'A final ainda não foi definida' }),
        el('p', { class: 'comp__empty-copy', text: 'Ela aparece aqui assim que as semifinais terminarem.' })
      );

    return el('section', { class: 'comp__panel comp__panel--final' },
      sectionTitle('A decisão', `${competition.shortName} · ${competition.year}`),
      body,
      champion && el('div', { class: 'comp__champion' },
        trophySvg(competition, 'comp__champion-trophy'),
        el('div', { class: 'comp__champion-copy' },
          el('span', { class: 'comp__panel-eyebrow', text: 'CAMPEÃO' }),
          el('h3', { class: 'comp__champion-name', text: champion.name }),
          el('p', { class: 'comp__panel-copy', text: tournament.champion === tournament.userTeamId
            ? 'Você levantou a taça. Comece um novo sorteio para defender o título.'
            : 'O campeonato terminou. Faça um novo sorteio e tente o título.' }),
          el('button', {
            class: 'comp__ghost', type: 'button',
            onClick: () => startNewTournament(tournament.userTeamId)
          }, 'NOVO SORTEIO  ↻')
        )
      )
    );
  }

  /* ------------------------------------------------------------- partida --- */

  function openMatch(fixture) {
    const userIsHome = fixture.home === tournament.userTeamId;
    const opponentId = userIsHome ? fixture.away : fixture.home;
    const userKit = tournament.kits?.[tournament.userTeamId] ?? 0;
    ctx.go('play', {
      home: fixture.home,
      away: fixture.away,
      homeKit: userIsHome ? userKit : 0,
      awayKit: userIsHome ? 0 : userKit,
      minutes: 6,
      difficulty: 'normal',
      stadium: competition.stadiumIndex,
      userSide: userIsHome ? 'home' : 'away',
      competition: { id: competition.id, title: competition.name },
      tournamentMatchId: fixture.id,
      tournamentCompetitionId: competition.id,
      tournamentReturnTo: returnTo,
      tournamentOpponent: opponentId
    });
  }

  /** Amistoso: partida avulsa com o adversário escolhido, sem mexer na tabela. */
  function openFriendly(opponentId) {
    const userTeam = tournament?.userTeamId || competition.pool[0];
    const userKit = tournament?.kits?.[userTeam] ?? 0;
    ctx.go('play', {
      home: userTeam,
      away: opponentId,
      homeKit: userKit,
      awayKit: 0,
      minutes: 6,
      difficulty: 'normal',
      stadium: competition.stadiumIndex,
      userSide: 'home',
      competition: { id: competition.id, title: `${competition.name} · Amistoso` },
      returnTo
    });
  }

  /* ------------------------------------------------------------- sorteio --- */

  function startNewTournament(teamId) {
    const fresh = createTournament(competition.id, { teamId, random: Math.random });
    tournament = fresh;
    // O time da competição não sobrescreve a seleção do Kick Off: são
    // escolhas independentes.
    storeTournament(ctx, fresh);
    simulateRound(fresh, { random: Math.random });
    show('play');
  }

  paintWallet();
  paintMenu();
  paintStage();
  paintDeck();
  paintHints();

  return {
    node: root,
    onKey(event) {
      if (event.key === 'Escape' || event.key === 'Backspace') {
        if (panel !== 'home') {
          show('home');
          return true;
        }
        ctx.go(returnTo);
        return true;
      }
      return false;
    },
    mount() {
      root.classList.add('is-ready');
    }
  };
}

/** Atalho usado pelos modos de jogo e pelo menu principal. */
export function competitionMenuParams(competitionId, returnTo = 'modes') {
  return { competitionId, returnTo, panel: 'home' };
}

export const COMPETITION_IDS = COMPETITIONS.map(item => item.id);
