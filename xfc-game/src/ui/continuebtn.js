// Botão CONTINUAR compartilhado pelas telas de pré-jogo.
//
// Em vez de escolher o estádio dentro do confronto (como antes), o fluxo é:
// CONTINUAR → tela de escolha de estádios → toque no cartão → partida.
// O botão é o mesmo em Kick Off, Confronto e Partidas Rápidas.

import { el, svg, ICONS } from './dom.js';

export function createContinueButton({ onEnter, label = 'CONTINUAR' } = {}) {
  const button = el('button', {
    class: 'continue-btn',
    type: 'button',
    'aria-label': 'Continuar para a escolha do estádio'
  },
    svg(ICONS.ball),
    el('span', { class: 'continue-btn__label', text: label })
  );

  button.addEventListener('click', () => {
    onEnter?.();
  });
  button.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onEnter?.();
    }
  });

  return { node: button };
}
