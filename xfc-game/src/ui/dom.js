// Ajudantes de DOM usados pelas telas do XFC. Sem framework: o jogo roda direto
// no navegador, sem build, para poder ser aberto em qualquer máquina de teste.

/** Cria um elemento com atributos, estilo e filhos em uma chamada só. */
export function el(tag, props = {}, ...children) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(props || {})) {
    if (value === null || value === undefined || value === false) continue;
    if (key === 'class') node.className = value;
    else if (key === 'text') node.textContent = value;
    else if (key === 'html') node.innerHTML = value;
    else if (key === 'dataset') Object.assign(node.dataset, value);
    else if (key === 'style' && typeof value === 'object') Object.assign(node.style, value);
    else if (key.startsWith('on') && typeof value === 'function') node.addEventListener(key.slice(2).toLowerCase(), value);
    else node.setAttribute(key, value === true ? '' : value);
  }
  append(node, children);
  return node;
}

/** Acrescenta filhos (texto, nós ou arrays) a um elemento. */
export function append(parent, children) {
  for (const child of children.flat(4)) {
    if (child === null || child === undefined || child === false) continue;
    parent.appendChild(typeof child === 'string' || typeof child === 'number'
      ? document.createTextNode(String(child))
      : child);
  }
  return parent;
}

/** Transforma uma string de SVG em um elemento utilizável no DOM. */
export function svg(markup) {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = markup.trim();
  return wrapper.firstElementChild;
}

/** Limpa todos os filhos de um elemento. */
export function clear(node) {
  while (node.firstChild) node.removeChild(node.firstChild);
  return node;
}

/**
 * Fileira de estrelas de 0 a 5 com meias estrelas, no mesmo desenho do cartão
 * de time do menu.
 */
export function starRow(rating, { size = 18, className = '' } = {}) {
  const row = el('div', { class: `stars ${className}`.trim(), 'aria-label': `${rating} estrelas` });
  for (let i = 0; i < 5; i++) {
    const value = rating - i;
    const kind = value >= 1 ? 'full' : value >= 0.5 ? 'half' : 'empty';
    const star = el('span', { class: `star star--${kind}` });
    star.appendChild(svg('<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1.6l3.1 6.6 7.1.9-5.2 5 1.3 7.1L12 17.9 5.7 21.2 7 14.1 1.8 9.1l7.1-.9z"/></svg>'));
    row.appendChild(star);
  }
  if (size) row.style.setProperty('--star-size', `${size}px`);
  return row;
}

/** Ícones de botão do DualSense/FC, desenhados em SVG. */
export const ICONS = {
  cross: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11"/><path d="M8 8l8 8M16 8l-8 8"/></svg>',
  circle: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11"/></svg>',
  triangle: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4l9 16H3z"/></svg>',
  square: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/></svg>',
  gear: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5zm9 4.2v-1.4l-2.3-.4a7 7 0 0 0-.7-1.7l1.3-2-1-1-2 1.3a7 7 0 0 0-1.7-.7L14.2 4h-1.4l-.4 2.3a7 7 0 0 0-1.7.7L9 5.7l-1 1 1.3 2a7 7 0 0 0-.7 1.7L6.3 11v1.4l2.3.4c.1.6.4 1.2.7 1.7L8 16.5l1 1 2-1.3c.5.3 1.1.6 1.7.7l.4 2.3h1.4l.4-2.3c.6-.1 1.2-.4 1.7-.7l2 1.3 1-1-1.3-2c.3-.5.6-1.1.7-1.7z"/></svg>',
  accessibility: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="4.5" r="2.2"/><path d="M12 8c-2.5 0-4.6 1-5.8 2.2l1.6 2.1c.6-.6 1.4-1 2.4-1.2V13l-2.4 7h2.7l1.5-4.8 1.5 4.8h2.7L13.8 13v-1.9c1 .2 1.8.6 2.4 1.2l1.6-2.1C16.6 9 14.5 8 12 8z"/></svg>',
  profile: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8z"/></svg>',
  ball: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9.2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 6.5l4 2.9-1.5 4.7h-5L8 9.4z" fill="currentColor"/><path d="M12 2.8v3.7M3.6 10.2l4.4.2M20.4 10.2L16 10.4M6.4 19.6l2.1-4.5M17.6 19.6l-2.1-4.5" fill="none" stroke="currentColor" stroke-width="1.3"/></svg>',
  camera: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 4h6l1.4 2H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.6z"/><circle cx="12" cy="12.5" r="3.6" fill="none" stroke="#0a1016" stroke-width="1.6"/></svg>',
  hub: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.6l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9l6-.9z"/></svg>',
  friends: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3.4"/><path d="M2.8 20c0-3.4 2.8-6 6.2-6s6.2 2.6 6.2 6z"/><circle cx="17" cy="9.5" r="2.6"/><path d="M15.6 14.4c2.9-.3 5.6 2 5.6 5.6h-4.3c0-2-.6-3.9-1.6-5.2z"/></svg>',
  chevronLeft: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 4L7 12l8 8" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>',
  chevronRight: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 4l8 8-8 8" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>',
  arrowLeft: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12H4m0 0l6-6m-6 6l6 6" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
  info: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9.2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 10.5v6M12 7.4v.6" stroke="currentColor" stroke-width="1.8"/></svg>'
};

/** Iniciais de um nome (usadas no retrato de reserva quando a foto falta). */
export function initialsOf(name) {
  return String(name || '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0].toUpperCase())
    .join('');
}

/**
 * Retrato do jogador. Se o arquivo de imagem não existir, o cartão mostra as
 * iniciais em vez de um imagem quebrada.
 */
export function avatar(player, { className = '' } = {}) {
  const node = el('span', { class: `avatar ${className}`.trim() });
  // Elenco sem foto no pacote (ainda sem retrato) mostra as iniciais.
  if (!player.photo) {
    node.classList.add('avatar--empty');
    node.appendChild(el('span', { class: 'avatar__initials', text: initialsOf(player.name) }));
    return node;
  }
  const img = el('img', { src: player.photo, alt: `Retrato de ${player.fullName}`, loading: 'lazy' });
  img.addEventListener('error', () => {
    node.classList.add('avatar--empty');
    node.replaceChildren(el('span', { class: 'avatar__initials', text: initialsOf(player.name) }));
  }, { once: true });
  node.appendChild(img);
  return node;
}

/** Ícone de controle (✕, ○, △, □) como <span>, para usar dentro de outro botão. */
export function padIcon(kind) {
  return el('span', { class: `pad-btn pad-btn--${kind}`, 'aria-hidden': 'true' }, svg(ICONS[kind]));
}

/** Botão redondo com ícone de controle do controle (✕, ○, △, □). */
export function padButton(kind, label, onClick) {
  return el('button', {
    class: `pad-btn pad-btn--${kind}`,
    type: 'button',
    title: label,
    'aria-label': label,
    onClick
  }, svg(ICONS[kind]));
}
