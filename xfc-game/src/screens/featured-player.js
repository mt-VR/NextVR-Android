// Imagem estática do jogador em destaque usada apenas nas telas de frontend.
// Os atletas controláveis da partida continuam sendo modelos 3D independentes.

import { el } from '../ui/dom.js';

export function featuredPlayer({ className = '', name = 'Jogador em destaque' } = {}) {
  const node = el('div', { class: `featured-player ${className}`.trim(), 'aria-hidden': 'false' });
  const image = el('img', {
    class: 'featured-player__image',
    src: 'assets/bg/menu-hero.jpg',
    alt: name,
    loading: 'eager',
    decoding: 'async'
  });
  node.appendChild(image);
  return {
    node,
    mount() {},
    unmount() {}
  };
}
