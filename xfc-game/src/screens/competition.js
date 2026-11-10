// Menus das competições do XFC: UEFA Champions League, Copa América,
// Libertadores e Copa do Mundo.
//
// Cada competição tem identidade própria (cores, troféu, iluminação do
// estádio) e um menu lateral funcional: jogar, clubes/seleções, calendário,
// classificação, fase de grupos, mata-mata, artilharia e final. As telas são
// geradas a partir do mesmo motor de torneio (`data/tournament.js`), então
// todas as opções mostram dados reais do campeonato — nada de imagem estática.

import { el, svg } from '../ui/dom.js';
import { xfcWordmark } from '../ui/brand.js';
import { flagSvg } from '../ui/flags.js';
import { kitsOf, kitSvg } from '../data/kits.js';
import { saveProfile } from '../state.js';
import { STADIUMS } from '../match3d/stadiums.js';
import {
  COMPETITIONS,
  getCompetition,
  competitionTeams,
  competitionTeam,
  startingEleven,
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

const MENU_BASE = [
  { id: 'play', label: 'Jogar Partida', mark: '▶' },
  { id: 'entity', label: 'Clubes', mark: '◉' },
  { id: 'calendar', label: 'Calendário', mark: '▤' },
  { id: 'standings', label: 'Classificação', mark: '▥' },
  { id: 'groups', label: 'Fase de Grupos', mark: '⁙' },
  { id: 'knockout', label: 'Mata-Mata', mark: '⑃' },
  { id: 'scorers', label: 'Artilharia', mark: '◈' },
  { id: 'final', label: 'Final', mark: '♛' }
];

function menuFor(competition) {
  // A Champions não tem entrada de clubes no menu de referência: a escolha do
  // time acontece dentro de "Jogar Partida".
  return MENU_BASE
    .filter(item => item.id !== 'entity' || competition.id !== 'uefa-champions-league')
    .map(item => item.id === 'entity' ? { ...item, label: competition.entityLabel } : item);
}

function teamBadge(team, className = 'comp-badge') {
  if (team?.crest) return el('img', { class: className, src: team.crest, alt: `Escudo do ${team.name}` });
  return el('span', { class: `${className} comp-badge--flag`, 'aria-label': `Bandeira ${team?.name || ''}` },
    flagSvg(team?.flagCode || 'br'));
}

function teamName(teamId) {
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
    <path d="M46 78c-18 0-26 10-26 24s10 24 24 24c8 0 12-4 12-10 0-4-4-6-8-6-6 0-10-4-10-10 0-8 6-12 14-12z" fill="url(#uclSilver)"/>
    <path d="M154 78c18 0 26 10 26 24s-10 24-24 24c-8 0-12-4-12-10 0-4 4-6 8-6 6 0 10-4 10-10 0-8-6-12-14-12z" fill="url(#uclSilver)"/>
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
    <rect x="46" y="238" width="108" height="14" rx="4" fill="#2c1a0c"/>
    <path d="M72 196h56l-6 44H78z" fill="url(#caSilver)"/>
    <path d="M58 62h84c0 76-18 138-42 138S58 138 58 62z" fill="url(#caSilver)"/>
    <path d="M58 62c-14 4-20 18-16 30 4 12 14 16 22 10l8-14z" fill="url(#caSilver)"/>
    <path d="M142 62c14 4 20 18 16 30-4 12-14 16-22 10l-8-14z" fill="url(#caSilver)"/>
    <path d="M52 70h96" stroke="#ffffff" stroke-width="3" opacity=".7"/>
    <path d="M66 122h68M70 150h60" stroke="#8e9aa8" stroke-width="2" opacity=".8"/>
    <circle cx="100" cy="96" r="18" fill="none" stroke="#ffffff" stroke-width="2.5" opacity=".85"/>
    <path d="M94 96l4 6 8-12" fill="none" stroke="#ffffff" stroke-width="3"/>
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
    <path d="M54 62c-16 2-24 16-20 30 4 12 16 16 24 8l6-18z" fill="url(#libGold)"/>
    <path d="M146 62c16 2 24 16 20 30-4 12-16 16-24 8l-6-18z" fill="url(#libGold)"/>
    <circle cx="100" cy="96" r="22" fill="#2a1c06" stroke="#ffe9a8" stroke-width="2"/>
    <path d="M100 80l5 11 12 2-9 9 2 12-10-6-10 6 2-12-9-9 12-2z" fill="#ffe9a8"/>
    <path d="M72 176h56" stroke="#7a5410" stroke-width="3" opacity=".8"/>
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
    <path d="M68 62c-14 8-18 40-6 66 8 18 18 26 26 28l-4-42z" fill="url(#wcGold)"/>
    <path d="M132 62c14 8 18 40 6 66-8 18-18 26-26 28l4-42z" fill="url(#wcGold)"/>
    <circle cx="100" cy="76" r="20" fill="none" stroke="#fff6d0" stroke-width="3" opacity=".8"/>
    <path d="M88 76a12 12 0 0 0 24 0" fill="none" stroke="#fff6d0" stroke-width="3" opacity=".8"/>
  </svg>`
};

function trophySvg(competition, className = 'comp__trophy') {
  return el('div', { class: className, 'aria-hidden': 'true', html: TROPHIES[competition.trophy] || TROPHIES.ucl });
}

/* --------------------------------------------------------------- tela --- */

export function competitionScreen(ctx, params = {}) {
  const competition = getCompetition(params.competitionId);
  const returnTo = params.returnTo || 'modes';
  const stadium = STADIUMS[competition.stadiumIndex] || STADIUMS[0];
  let panel = params.panel && MENU_BASE.some(item => item.id === params.panel)
    ? params.panel
    : 'home';
  if (params.panel === 'entity' && competition.id === 'uefa-champions-league') panel = 'play';
  let tournament = tournamentOf(ctx, competition.id);
  if (tournament) simulateRound(tournament, { random: Math.random });

  const root = el('div', {
    class: `screen screen--competition theme--${competition.theme}`,
    dataset: { competition: competition.id }
  });
  // A foto do estádio é usada dentro do CSS: o caminho precisa ser absoluto,
  // senão o navegador resolve o relativo a partir da folha de estilo.
  const photoUrl = new URL(stadium.file, globalThis.document?.baseURI || 'about:blank').href;
  root.style.setProperty('--comp-photo', `url("${photoUrl}")`);

  const header = el('header', { class: 'comp__topbar' },
    el('button', {
      class: 'comp__back',
      type: 'button',
      'aria-label': returnTo === 'menu' ? 'Voltar ao menu principal' : 'Voltar aos modos',
      onClick: () => ctx.go(returnTo)
    }, svg('<svg viewBox="0 0 24 24"><path d="M15 4L7 12l8 8" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>')),
    el('span', { class: 'comp__wordmark', html: xfcWordmark({ title: 'XFC' }) }),
    el('span', { class: 'comp__topbar-divider' }),
    el('span', { class: 'comp__topbar-mark', text: competition.mark }),
    el('span', { class: 'comp__topbar-name', text: competition.name }),
    el('button', {
      class: 'comp__home',
      type: 'button',
      title: 'Voltar ao menu principal do XFC',
      onClick: () => ctx.go('menu')
    }, el('span', { 'aria-hidden': 'true', text: '⌂' }), el('span', { text: 'VOLTAR AO INÍCIO' }))
  );

  const menu = el('nav', { class: 'comp__menu', 'aria-label': `Menu da ${competition.name}` });
  const stage = el('main', { class: 'comp__stage' });
  const footer = el('footer', { class: 'comp__footer' });

  root.append(
    el('div', { class: 'comp__bg', 'aria-hidden': 'true' }),
    el('div', { class: 'comp__glow', 'aria-hidden': 'true' }),
    header,
    el('div', { class: 'comp__body' }, menu, stage),
    footer
  );

  function paintMenu() {
    const items = menuFor(competition);
    // No palco inicial (herói), "Jogar Partida" fica destacado como na
    // referência de cada competição.
    const activePanel = panel === 'home' ? 'play' : panel;
    menu.replaceChildren(
      ...items.map(item => el('button', {
        class: `comp__menu-item${activePanel === item.id ? ' is-active' : ''}`,
        type: 'button',
        dataset: { panel: item.id },
        'aria-pressed': activePanel === item.id ? 'true' : 'false',
        onClick: () => show(item.id)
      },
        el('span', { class: 'comp__menu-mark', 'aria-hidden': 'true', text: item.mark }),
        el('span', { class: 'comp__menu-label', text: item.label }),
        el('span', { class: 'comp__menu-chevron', 'aria-hidden': 'true', text: '›' })
      )),
      el('span', { class: 'comp__menu-rule', 'aria-hidden': 'true' }),
      el('button', {
        class: 'comp__menu-item comp__menu-item--back',
        type: 'button',
        dataset: { panel: 'back' },
        onClick: () => ctx.go(returnTo)
      },
        el('span', { class: 'comp__menu-mark', 'aria-hidden': 'true', text: '‹' }),
        el('span', { class: 'comp__menu-label', text: returnTo === 'menu' ? 'Voltar ao Menu' : 'Voltar aos Modos' })
      )
    );
  }

  function show(next) {
    panel = next;
    paintMenu();
    paintStage();
    stage.scrollTop = 0;
  }

  /* ---------------------------------------------------------- rodapé --- */

  function paintFooter() {
    const upcoming = tournament ? nextTournamentFixture(tournament) : null;
    const status = tournamentStatus(tournament);
    const scorers = tournament ? tournamentScorers(tournament, 1) : [];
    const topScorer = scorers[0];

    const nextCard = upcoming
      ? el('div', { class: 'comp__footer-match' },
        el('span', { class: 'comp__footer-label', text: 'PRÓXIMA PARTIDA' }),
        el('div', { class: 'comp__footer-teams' },
          teamBadge(competitionTeam(upcoming.home), 'comp__footer-crest'),
          el('b', { class: 'comp__footer-name', text: shortName(upcoming.home) }),
          el('span', { class: 'comp__footer-vs', text: '×' }),
          el('b', { class: 'comp__footer-name', text: shortName(upcoming.away) }),
          teamBadge(competitionTeam(upcoming.away), 'comp__footer-crest')
        ),
        el('span', { class: 'comp__footer-meta', text: stageLabel(upcoming.stage) })
      )
      : el('div', { class: 'comp__footer-match' },
        el('span', { class: 'comp__footer-label', text: 'PRÓXIMA PARTIDA' }),
        el('b', { class: 'comp__footer-name', text: tournament ? status.label : 'Escolha seu time' }),
        el('span', { class: 'comp__footer-meta', text: tournament ? status.detail : 'A fase de grupos começa no sorteio.' })
      );

    footer.replaceChildren(
      nextCard,
      el('div', { class: 'comp__footer-phase' },
        el('span', { class: 'comp__footer-label', text: 'FASE ATUAL' }),
        el('b', { class: 'comp__footer-value', text: status.label }),
        el('span', { class: 'comp__footer-meta', text: status.detail })
      ),
      el('div', { class: 'comp__footer-scorer' },
        el('span', { class: 'comp__footer-label', text: 'ARTILHARIA' }),
        topScorer
          ? el('div', { class: 'comp__footer-scorer-row' },
            teamBadge(competitionTeam(topScorer.teamId), 'comp__footer-crest'),
            el('b', { class: 'comp__footer-name', text: topScorer.name }),
            el('b', { class: 'comp__footer-goals', text: `${topScorer.goals} GOL${topScorer.goals > 1 ? 'S' : ''}` })
          )
          : el('span', { class: 'comp__footer-meta', text: 'Sem gols registrados ainda.' })
      )
    );
  }

  /* ----------------------------------------------------------- estágio --- */

  function paintStage() {
    paintFooter();
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
      stage.replaceChildren(heroPanel());
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

  /* --------------------------------------------------------------- herói --- */

  function heroPanel() {
    return el('section', { class: 'comp__hero' },
      el('div', { class: 'comp__hero-copy' },
        el('span', { class: 'comp__hero-eyebrow', text: `${competition.name.toUpperCase()} · ${competition.year}` }),
        el('h1', { class: 'comp__hero-title', text: competition.shortName }),
        el('p', { class: 'comp__hero-tagline', text: competition.tagline }),
        el('button', {
          class: 'comp__hero-cta', type: 'button',
          onClick: () => show('play')
        }, tournament ? 'CONTINUAR CAMPANHA  →' : 'COMEÇAR CAMPEONATO  →')
      ),
      trophySvg(competition)
    );
  }

  /* ------------------------------------------------------- jogar partida --- */

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
    const matchCard = fixture
      ? el('div', { class: 'comp__match' },
        el('span', { class: 'comp__match-stage', text: stageLabel(fixture.stage) }),
        el('div', { class: 'comp__match-row' },
          el('div', { class: 'comp__match-side' },
            teamBadge(competitionTeam(fixture.home), 'comp__match-crest'),
            el('b', { text: competitionTeam(fixture.home).name })
          ),
          el('span', { class: 'comp__match-vs', text: 'VS' }),
          el('div', { class: 'comp__match-side comp__match-side--away' },
            teamBadge(competitionTeam(fixture.away), 'comp__match-crest'),
            el('b', { text: competitionTeam(fixture.away).name })
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
        matchCard,
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

  /* ---------------------------------------------------------- adversário --- */

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
            el('span', { text: shortName(fixture.away) },),
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
      sectionTitle('Artilharia', 'Gols marcados no campeonato'),
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
            el('b', { text: competitionTeam(finalFixture.home).name })
          ),
          el('b', { class: 'comp__final-score', text: finalFixture.played ? `${finalFixture.homeGoals} × ${finalFixture.awayGoals}` : 'VS' }),
          el('div', { class: 'comp__final-side' },
            teamBadge(competitionTeam(finalFixture.away), 'comp__final-crest'),
            el('b', { text: competitionTeam(finalFixture.away).name })
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

  paintMenu();
  paintStage();

  return {
    node: root,
    onKey(event) {
      if (event.key === 'Escape' || event.key === 'Backspace') {
        ctx.go(returnTo);
        return true;
      }
      return false;
    },
    mount() {
      // A câmera do estádio escolhido já está aplicada no fundo via CSS.
      root.classList.add('is-ready');
    }
  };
}

/** Atalho usado pelos modos de jogo e pelo menu principal. */
export function competitionMenuParams(competitionId, returnTo = 'modes') {
  return { competitionId, returnTo, panel: 'play' };
}

export const COMPETITION_IDS = COMPETITIONS.map(item => item.id);
