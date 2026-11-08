// Tela de abertura do XFC: depois da apresentação da XF Esports, o atleta
// destaque ocupa a tela inteira. Clicar em "Entrar" leva ao menu principal.
//
// A arte já traz o logotipo XFC e o botão desenhados — por isso o botão real
// fica por cima, invisível, exatamente na área do botão da imagem.

import { el } from '../ui/dom.js';

export function launchScreen(ctx) {
  const enter = () => ctx.go('menu');

  const node = el('div', { class: 'screen screen--launch' },
    el('img', {
      class: 'launch__art',
      src: 'assets/brand/launch-neymar.jpg',
      alt: 'XFC — Neymar Jr. vestindo a camisa do Santos com a taça'
    }),
    el('button', {
      class: 'launch__enter',
      type: 'button',
      'aria-label': 'Entrar no XFC',
      onClick: enter
    }),
    el('span', { class: 'launch__sr', text: 'Pressione Enter para entrar' })
  );

  return {
    node,
    onKey(event) {
      if (event.key === 'Enter' || event.key === ' ' || event.key === 'Escape') {
        enter();
        return true;
      }
      return false;
    }
  };
}
