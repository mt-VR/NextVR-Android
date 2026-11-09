// Tela de escolha de estádios: a galeria dos seis estádios brasileiros.
//
// O fluxo de pré-jogo é: CONTINUAR (Kick Off, Confronto ou Partidas Rápidas)
// → esta tela → toque no cartão → partida 3D naquele estádio. Não há "escolher
// estádio" como clique separado: o estádio já é a porta da partida.

import { el } from '../ui/dom.js';
import { xfcWordmark } from '../ui/brand.js';
import { STADIUMS } from '../match3d/stadiums.js';
import { modeHomeButton } from '../ui/mode-home.js';

export function stadiumsScreen(ctx, params = {}) {
  const returnTo = params.returnTo || 'kickoff';

  function enterStadium(index) {
    ctx.go('play', {
      home: params.home,
      away: params.away,
      homeKit: params.homeKit ?? 0,
      awayKit: params.awayKit ?? 0,
      minutes: params.minutes ?? 6,
      difficulty: params.difficulty ?? 'normal',
      stadium: index,
      competition: params.competition || null,
      returnTo: params.competitionReturnTo || 'menu'
    });
  }

  const node = el('div', { class: 'screen screen--stadiums' },
    modeHomeButton(ctx),
    el('header', { class: 'topbar' },
      el('span', { class: 'topbar__mark', html: xfcWordmark() }),
      el('span', { class: 'topbar__title', text: 'Classic Match' }),
      el('span', { class: 'topbar__sep', text: '|' }),
      el('span', { class: 'topbar__subtitle', text: 'Choose Stadium' })
    ),
    el('p', {
      class: 'stadiums__lead',
      text: 'Escolha a casa do futebol brasileiro: toque em um estádio e a bola rola.'
    }),
    el('div', { class: 'stadiums__grid' },
      STADIUMS.map((stadium, index) => el('button', {
        class: 'stadiums__card',
        type: 'button',
        dataset: { stadium: String(index) },
        onClick() {
          enterStadium(index);
        }
      },
        el('span', { class: 'stadiums__art' },
          el('img', { src: stadium.file, alt: stadium.name, loading: 'lazy' })
        ),
        el('span', { class: 'stadiums__card-body' },
          el('span', { class: 'stadiums__card-name', text: stadium.name }),
          el('span', { class: 'stadiums__card-city', text: stadium.city }),
          el('span', { class: 'stadiums__card-cap', text: `${stadium.capacity} lugares` })
        )
      ))
    ),
    el('div', { class: 'stadiums__hint', text: 'Toque em um estádio para entrar em campo' })
  );

  return {
    node,
    onKey(event) {
      if (event.key === 'Escape' || event.key === 'Backspace') {
        ctx.go(returnTo, {
          home: params.home,
          away: params.away,
          competition: params.competition || null,
          returnTo: params.competitionReturnTo || 'menu'
        });
        return true;
      }
      if (event.key === 'Enter') {
        const index = Number(params.stadium ?? 0);
        enterStadium(Number.isFinite(index) ? index : 0);
        return true;
      }
      return false;
    }
  };
}
