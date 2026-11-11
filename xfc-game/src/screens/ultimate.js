// Ultimate Team: mercado local de cartas, saldo de moedas e coleção persistida.

import { el } from '../ui/dom.js';
import { xfcWordmark } from '../ui/brand.js';
import { TEAMS } from '../data/teams.js';
import { saveProfile } from '../state.js';

const FEATURED_CLUBS = [
  'fc-barcelona', 'real-madrid', 'flamengo', 'palmeiras',
  'corinthians', 'aston-villa', 'river-plate', 'eintracht-frankfurt'
];

function makeCatalog() {
  const cards = [];
  for (const clubId of FEATURED_CLUBS) {
    const club = TEAMS.find(team => team.id === clubId);
    if (!club) continue;
    const candidate = [...club.players, ...club.substitutes]
      .filter(player => player.pos !== 'GK')
      .sort((a, b) => b.ovr - a.ovr)[0] || club.players[0];
    if (!candidate || cards.some(card => card.id === candidate.id)) continue;
    cards.push({
      id: candidate.id,
      name: candidate.name,
      fullName: candidate.fullName,
      number: candidate.number,
      position: candidate.pos,
      rating: candidate.ovr,
      photo: candidate.photo,
      team: club.name,
      teamId: club.id,
      colors: club.colors,
      stats: candidate.stats,
      price: Math.max(250, Math.round((candidate.ovr - 65) * 42 / 10) * 10)
    });
  }
  return cards.sort((a, b) => b.rating - a.rating);
}

const CATALOG = makeCatalog();

export function ultimateTeamScreen(ctx) {
  const profile = ctx.state.profile;
  profile.ultimatePlayers ||= [];
  const ownedIds = new Set(profile.ultimatePlayers);
  let section = 'store';

  const coins = el('b', { class: 'ultimate__coin-value', text: String(profile.coins || 0) });
  const collectionCount = el('span', { class: 'ultimate__collection-count', text: String(ownedIds.size) });
  const collectionGrid = el('div', { class: 'ultimate__cards', dataset: { section: 'collection' } });
  const storeGrid = el('div', { class: 'ultimate__cards', dataset: { section: 'store' } });
  const emptyCollection = el('p', { class: 'ultimate__empty', text: 'Sua coleção está vazia. Ganhe moedas em partidas e contrate sua primeira estrela.' });
  const notice = el('p', { class: 'ultimate__notice', text: 'Complete uma partida para receber moedas. Cartas compradas ficam salvas no seu perfil.' });

  function cardView(card, isOwned) {
    const colors = card.colors || {};
    const cardNode = el('article', {
      class: `ultimate-card${isOwned ? ' is-owned' : ''}`,
      style: {
        '--card-primary': colors.primary || '#15794f',
        '--card-secondary': colors.secondary || '#d2bf65'
      },
      dataset: { playerId: card.id }
    },
      el('span', { class: 'ultimate-card__glow' }),
      el('span', { class: 'ultimate-card__rating' },
        el('b', { text: String(card.rating) }),
        el('i', { text: card.position })
      ),
      el('span', { class: 'ultimate-card__crest', text: card.team.slice(0, 1) }),
      card.photo
        ? el('img', { class: 'ultimate-card__portrait', src: card.photo, alt: `Retrato de ${card.fullName}` })
        : el('span', { class: 'ultimate-card__portrait ultimate-card__portrait--initials', text: initials(card.name) }),
      el('div', { class: 'ultimate-card__identity' },
        el('b', { class: 'ultimate-card__name', text: card.name }),
        el('span', { class: 'ultimate-card__club', text: card.team })
      ),
      el('div', { class: 'ultimate-card__stats' },
        el('span', {}, el('b', { text: String(card.stats.pace) }), el('i', { text: 'RIT' })),
        el('span', {}, el('b', { text: String(card.stats.shooting) }), el('i', { text: 'FIN' })),
        el('span', {}, el('b', { text: String(card.stats.passing) }), el('i', { text: 'PAS' })),
        el('span', {}, el('b', { text: String(card.stats.dribbling) }), el('i', { text: 'CON' }))
      ),
      isOwned
        ? el('span', { class: 'ultimate-card__owned', text: 'NO ELENCO' })
        : el('button', {
          class: 'ultimate-card__buy',
          type: 'button',
          dataset: { buyPlayer: card.id },
          onClick() { buyPlayer(card); }
        }, `CONTRATAR  ·  ${card.price} moedas`)
    );
    return cardNode;
  }

  function paint() {
    coins.textContent = String(profile.coins || 0);
    collectionCount.textContent = String(profile.ultimatePlayers.length);
    const owned = CATALOG.filter(card => profile.ultimatePlayers.includes(card.id));
    const available = CATALOG.filter(card => !profile.ultimatePlayers.includes(card.id));
    collectionGrid.replaceChildren(...owned.map(card => cardView(card, true)));
    storeGrid.replaceChildren(...available.map(card => cardView(card, false)));
    emptyCollection.hidden = owned.length > 0;
    collectionGrid.hidden = section !== 'collection' || owned.length === 0;
    emptyCollection.hidden = owned.length > 0 || section !== 'collection';
    storeGrid.hidden = section !== 'store';
    storeTab.classList.toggle('is-active', section === 'store');
    collectionTab.classList.toggle('is-active', section === 'collection');
    storeTab.setAttribute('aria-pressed', section === 'store' ? 'true' : 'false');
    collectionTab.setAttribute('aria-pressed', section === 'collection' ? 'true' : 'false');
  }

  function buyPlayer(card) {
    if (profile.ultimatePlayers.includes(card.id)) return;
    if ((profile.coins || 0) < card.price) {
      ctx.toast('Moedas insuficientes. Jogue uma partida para ganhar mais moedas.', { variant: 'warn' });
      return;
    }
    profile.coins -= card.price;
    profile.ultimatePlayers.push(card.id);
    saveProfile(ctx.state);
    ctx.toast(`${card.name} contratado para o Ultimate Team!`);
    section = 'collection';
    paint();
  }

  const back = el('button', {
    class: 'ultimate__back', type: 'button', 'aria-label': 'Voltar ao menu',
    onClick() { ctx.go('menu'); }
  }, '‹');
  const storeTab = el('button', {
    class: 'ultimate__tab is-active', type: 'button', 'aria-pressed': 'true',
    onClick() { section = 'store'; paint(); }
  }, 'LOJA');
  const collectionTab = el('button', {
    class: 'ultimate__tab', type: 'button', 'aria-pressed': 'false',
    onClick() { section = 'collection'; paint(); }
  }, 'MEU ELENCO');

  const header = el('header', { class: 'ultimate__topbar' },
    back,
    el('span', { class: 'ultimate__brand', html: xfcWordmark() }),
    el('div', { class: 'ultimate__title-wrap' },
      el('span', { class: 'ultimate__eyebrow', text: 'MONTE SEU TIME' }),
      el('h1', { class: 'ultimate__title', text: 'ULTIMATE TEAM' })
    ),
    el('div', { class: 'ultimate__wallet' },
      el('span', { class: 'ultimate__coin-icon', text: '✦' }),
      coins,
      el('span', { class: 'ultimate__coin-label', text: 'MOEDAS' })
    )
  );

  const tabs = el('nav', { class: 'ultimate__tabs', 'aria-label': 'Ultimate Team' },
    storeTab,
    collectionTab,
    el('span', { class: 'ultimate__tabs-count' }, collectionCount, el('span', { text: ' cartas' }))
  );

  const hero = el('section', { class: 'ultimate__hero' },
    el('div', { class: 'ultimate__hero-copy' },
      el('span', { class: 'ultimate__eyebrow', text: 'XFC 27 · CARTAS DE JOGADOR' }),
      el('h2', { text: 'Construa seu elenco dos sonhos.' }),
      el('p', { text: 'Contrate jogadores com moedas conquistadas em campo. Cada atleta traz posição, nota geral e atributos próprios.' })
    ),
    el('div', { class: 'ultimate__hero-mark', 'aria-hidden': 'true' },
      el('span', { text: 'X' }), el('b', { text: 'UT' })
    )
  );

  const node = el('div', { class: 'screen screen--ultimate' },
    header,
    hero,
    tabs,
    notice,
    emptyCollection,
    collectionGrid,
    storeGrid,
    el('footer', { class: 'ultimate__footer' },
      el('span', { text: '✕  Selecionar' }),
      el('span', { text: '○  Voltar' }),
      el('button', { type: 'button', onClick() { ctx.go('quick'); } }, 'JOGAR UMA PARTIDA  →')
    )
  );

  function initials(name) {
    return name.split(/\s+/).map(part => part[0]).slice(0, 2).join('').toUpperCase();
  }

  paint();
  return {
    node,
    onKey(event) {
      if (event.key === 'Escape' || event.key === 'Backspace') {
        ctx.go('menu');
        return true;
      }
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        section = section === 'store' ? 'collection' : 'store';
        paint();
        return true;
      }
      return false;
    }
  };
}
