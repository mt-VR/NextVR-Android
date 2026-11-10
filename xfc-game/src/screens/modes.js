// Seletor de modos e torneios do XFC 27. A barra inferior é um carrossel
// horizontal inspirado em menus de futebol: Copa, Champions, Libertadores,
// finais e formatos especiais ficam à mão sem apertar os cartões.

import { el } from '../ui/dom.js';
import { xfEsportesBadge, xfcWordmark } from '../ui/brand.js';
import { featuredPlayer } from './featured-player.js';

const MODES = [
  {
    id: 'worldcup-live',
    label: 'FIFA WORLD CUP™, LIVE',
    title: 'XFC World Cup™, Live',
    subtitle: 'Escolha uma seleção, dispute a fase de grupos e tente chegar à final.',
    eyebrow: 'FIFA WORLD CUP™  •  LIVE',
    action: 'competition',
    competitionId: 'world-cup',
    mode: 'live',
    mark: '♜'
  },
  {
    id: 'worldcup-2027',
    label: 'XFC WORLD CUP™ 2027',
    title: 'XFC World Cup™ 2027',
    subtitle: 'Monte sua campanha, avance pelos grupos e leve sua seleção até a final.',
    eyebrow: 'TORNEIO INTERNACIONAL  •  2027',
    action: 'competition',
    competitionId: 'world-cup',
    mode: '2027',
    mark: '♜'
  },
  {
    id: 'worldcup-kickoff',
    label: 'WORLD CUP™ KICK OFF',
    title: 'World Cup™ Kick Off',
    subtitle: 'Entre em campo agora para uma partida rápida com clima de Copa.',
    eyebrow: 'PARTIDA RÁPIDA  •  SELEÇÕES',
    action: 'kickoff',
    mark: '⚽'
  },
  {
    id: 'uefa-champions-league',
    label: 'UEFA CHAMPIONS LEAGUE',
    title: 'UEFA Champions League',
    subtitle: 'Escolha seus clubes e jogue uma decisão com a identidade da maior noite europeia.',
    eyebrow: 'TORNEIO EUROPEU  •  NOITE DE DECISÃO',
    action: 'competition',
    competitionId: 'uefa-champions-league',
    mark: '✦',
    competition: { id: 'uefa-champions-league', title: 'UEFA Champions League', format: 'Final' }
  },
  {
    id: 'conmebol-libertadores',
    label: 'CONMEBOL LIBERTADORES',
    title: 'CONMEBOL Libertadores',
    subtitle: 'Leve dois clubes ao gramado e dispute uma partida com clima de Libertadores.',
    eyebrow: 'TORNEIO SUL-AMERICANO  •  A GLÓRIA ETERNA',
    action: 'competition',
    competitionId: 'conmebol-libertadores',
    mark: '✦',
    competition: { id: 'conmebol-libertadores', title: 'CONMEBOL Libertadores', format: 'Final' }
  },
  {
    id: 'cup-final',
    label: 'CUP FINAL',
    title: 'Final de Copa',
    subtitle: 'Uma decisão, dois clubes e um troféu em jogo. Escolha o confronto e entre em campo.',
    eyebrow: 'TORNEIO ELIMINATÓRIO  •  A GRANDE FINAL',
    action: 'kickoff',
    mark: '🏆',
    competition: { id: 'cup-final', title: 'Final de Copa', format: 'Final única' }
  },
  {
    id: 'home-away',
    label: 'HOME & AWAY',
    title: 'Home & Away',
    subtitle: 'Prepare o confronto entre mandante e visitante e escolha os dois clubes.',
    eyebrow: 'FORMATO DE CONFRONTO  •  CASA E FORA',
    action: 'kickoff',
    mark: '↔',
    competition: { id: 'home-away', title: 'Home & Away', format: 'Mandante · visitante' }
  },
  {
    id: 'best-of-series',
    label: 'BEST OF SERIES',
    title: 'Best of Series',
    subtitle: 'Monte seu duelo entre clubes e jogue uma partida especial da série.',
    eyebrow: 'FORMATO DE CONFRONTO  •  SÉRIE',
    action: 'kickoff',
    mark: 'Ⅲ',
    competition: { id: 'best-of-series', title: 'Best of Series', format: 'Série especial' }
  },
  {
    id: 'copa-america',
    label: 'COPA AMÉRICA',
    title: 'Copa América',
    subtitle: 'Represente uma seleção sul-americana em uma partida especial de torneio.',
    eyebrow: 'TORNEIO INTERNACIONAL  •  AMÉRICA DO SUL',
    action: 'competition',
    competitionId: 'copa-america',
    mark: '★',
    competition: { id: 'copa-america', title: 'Copa América', format: 'Partida especial' }
  },
  {
    id: 'online',
    label: 'ONLINE TOURNAMENT',
    title: 'Online Tournament',
    subtitle: 'Encontre amigos e dispute uma partida no XFC.',
    eyebrow: 'JOGUE COM A COMUNIDADE',
    action: 'quick',
    mark: '↗'
  },
  {
    id: 'training',
    label: 'CENTRO DE TREINO',
    title: 'Centro de Treino XFC',
    subtitle: 'Escolha entre faltas livres, pênaltis ou treino coletivo com seus companheiros.',
    eyebrow: 'CENTRO DE TREINO  •  3 EXERCÍCIOS JOGÁVEIS',
    action: 'training',
    mark: '⚽'
  },
  {
    id: 'customise',
    label: 'CUSTOMISE',
    title: 'Personalize seu XFC',
    subtitle: 'Ajuste seu perfil, as equipes e as preferências do jogo.',
    eyebrow: 'SEU JOGO  •  DO SEU JEITO',
    action: 'customise',
    mark: '⚙'
  }
];

function logoLockup() {
  return el('div', { class: 'modes__logo', 'aria-label': 'XFC 27' },
    el('span', { class: 'modes__badge', html: xfEsportesBadge({ title: 'XF Esports' }) }),
    el('span', { class: 'modes__wordmark', html: xfcWordmark() }),
    el('b', { class: 'modes__year', text: '27' })
  );
}

export function modesScreen(ctx) {
  let focusIndex = 0;
  const player = featuredPlayer({ className: 'modes__player', name: 'Jogador em destaque no XFC' });

  const breadcrumb = el('div', { class: 'modes__breadcrumb' },
    el('span', { text: 'HOME' }),
    el('i', { text: '›' }),
    el('span', { text: 'PLAY MODES' }),
    el('i', { text: '›' }),
    el('b', { class: 'modes__crumb-current', text: MODES[0].label })
  );

  const header = el('header', { class: 'modes__topbar' }, logoLockup(), breadcrumb);
  const heroEyebrow = el('p', { class: 'modes__eyebrow', text: MODES[0].eyebrow });
  const heroTitle = el('h1', { class: 'modes__hero-title', text: MODES[0].title });
  const heroSub = el('p', { class: 'modes__hero-sub', text: MODES[0].subtitle });
  const detailTitle = el('span', { class: 'modes__event-title', text: 'XFC WORLD CUP™ 2027' });
  const detailGroup = el('span', { class: 'modes__event-group', text: 'ESCOLHA SUA SELEÇÃO' });
  const brazilFlag = el('span', { class: 'modes__brazil-flag', text: '🇧🇷' });
  const brazilName = el('b', { text: 'BRASIL' });
  const cta = el('button', { class: 'modes__cta', type: 'button', onClick() { openSelected(); } },
    el('span', { class: 'modes__cta-icon', text: '✕' }),
    el('span', { text: 'TAKE ME THERE' }),
    el('span', { class: 'modes__cta-arrow', text: '→' })
  );

  const hero = el('section', { class: 'modes__hero-card' },
    heroEyebrow,
    heroTitle,
    el('div', { class: 'modes__matchup' },
      el('div', { class: 'modes__brazil-crest', 'aria-label': 'Destaque da competição' },
        el('span', { class: 'modes__brazil-stars', text: '★★★★★' }),
        brazilFlag,
        brazilName
      ),
      el('div', { class: 'modes__event-meta' },
        detailTitle,
        el('b', { class: 'modes__versus', text: 'V' }),
        detailGroup
      )
    ),
    heroSub,
    cta
  );

  const poster = el('aside', { class: 'modes__poster' },
    el('span', { class: 'modes__poster-glow' }),
    el('span', { class: 'modes__poster-brand', html: xfcWordmark({ title: 'XFC' }) }),
    el('span', { class: 'modes__poster-caption', text: 'THE WORLD IS YOURS' })
  );

  const optionButtons = MODES.map((item, index) => el('button', {
    class: `modes__option${index === focusIndex ? ' is-active' : ''}`,
    type: 'button',
    dataset: { option: item.id },
    'aria-pressed': index === focusIndex ? 'true' : 'false',
    onClick() { select(index); }
  },
    el('span', { class: 'modes__option-label', text: item.label }),
    el('span', { class: 'modes__option-mark', text: item.mark })
  ));
  const tabs = el('nav', { class: 'modes__options', 'aria-label': 'Modos e torneios' }, ...optionButtons);

  const footer = el('footer', { class: 'modes__footer' },
    el('div', { class: 'modes__footer-left' },
      el('span', { class: 'modes__pad', text: '✕' }),
      el('span', { text: 'Select' }),
      el('span', { class: 'modes__pad modes__pad--back', text: '○' }),
      el('span', { text: 'Back' }),
      el('span', { class: 'modes__mini-touch', text: '▤' }),
      el('span', { text: 'Training Centre' })
    ),
    el('div', { class: 'modes__online' }, el('span', { class: 'modes__r2', text: 'R2' }), el('span', { text: '♟  4' }))
  );

  const node = el('div', { class: 'screen screen--modes' },
    el('div', { class: 'xfc-stadium-lights xfc-stadium-lights--red', 'aria-hidden': 'true' }),
    player.node,
    header,
    hero,
    poster,
    tabs,
    footer
  );

  function select(index) {
    focusIndex = (index + MODES.length) % MODES.length;
    const item = MODES[focusIndex];
    optionButtons.forEach((button, i) => {
      const active = i === focusIndex;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    optionButtons[focusIndex].scrollIntoView?.({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
    heroEyebrow.textContent = item.eyebrow;
    heroTitle.textContent = item.title;
    heroSub.textContent = item.subtitle;
    detailTitle.textContent = item.competition?.title
      || (item.mode === 'live' ? 'XFC WORLD CUP™ 2026' : item.id.startsWith('worldcup') ? 'XFC WORLD CUP™ 2027' : item.label);
    detailGroup.textContent = item.competition?.format
      || (item.id.startsWith('worldcup') ? 'ESCOLHA SUA SELEÇÃO' : 'XFC 27');
    brazilFlag.textContent = item.competition ? '🏆' : '🇧🇷';
    brazilName.textContent = item.competition ? item.competition.id === 'uefa-champions-league' ? 'UEFA' : item.competition.id === 'conmebol-libertadores' ? 'CONMEBOL' : 'XFC' : 'BRASIL';
    cta.querySelector('span:nth-child(2)').textContent = item.action === 'customise' ? 'CUSTOMISE'
      : item.action === 'quick' ? 'PLAY ONLINE'
        : item.action === 'competition' ? 'ABRIR COMPETIÇÃO'
          : item.action === 'kickoff' ? item.competition ? 'ESCOLHER CLUBES' : 'KICK OFF'
            : item.action === 'training' ? 'TREINAR' : 'TAKE ME THERE';
    breadcrumb.lastElementChild.textContent = item.label;
  }

  function openSelected() {
    const item = MODES[focusIndex];
    if (item.action === 'competition') ctx.go('competition', { competitionId: item.competitionId, returnTo: 'modes' });
    else if (item.action === 'worldcup') ctx.go('worldcup', { mode: item.mode, returnTo: 'modes' });
    else if (item.action === 'kickoff') ctx.go('kickoff', { competition: item.competition || null, returnTo: 'modes' });
    else if (item.action === 'quick') ctx.go('quick');
    else if (item.action === 'training') ctx.go('training', { returnTo: 'modes' });
    else ctx.go('customise');
  }

  function onKey(event) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown' || event.key === 'j') {
      select(focusIndex + 1);
      return true;
    }
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp' || event.key === 'k') {
      select(focusIndex - 1);
      return true;
    }
    if (event.key === 'Enter' || event.key === ' ') {
      openSelected();
      return true;
    }
    if (event.key === 'Escape' || event.key === 'Backspace') {
      ctx.go('menu');
      return true;
    }
    return false;
  }

  return {
    node,
    onKey,
    mount() { player.mount(); },
    unmount() { player.unmount(); }
  };
}
