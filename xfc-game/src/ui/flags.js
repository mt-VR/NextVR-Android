// Bandeiras dos países desenhadas em SVG.
//
// Emoji não funciona bem em WebView (vira quadradinho) e arquivo de imagem
// demais pesa o pacote, então cada bandeira é um SVG pequeno e nítido.

const MARKS = {
  es: `
    <rect x="0" y="0" width="24" height="16" fill="#c60b1e"/>
    <rect x="0" y="4" width="24" height="8" fill="#ffc400"/>
  `,
  br: `
    <rect x="0" y="0" width="24" height="16" fill="#009b3a"/>
    <polygon points="12,1.2 22.6,8 12,14.8 1.4,8" fill="#fedf00"/>
    <circle cx="12" cy="8" r="3.6" fill="#002776"/>
    <path d="M8.6,6.6 C10.2,7.2 13.8,7.6 15.6,8.6 C13.6,9.8 10.2,10.2 8.6,9.4 Z" fill="#ffffff"/>
  `
};

/**
 * Bandeira de um país como elemento SVG. Países sem desenho pronto caem no
 * desenho genérico do Brasil.
 */
export function flagSvg(code) {
  const markup = MARKS[code] || MARKS.br;
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `<svg class="flag flag--${code}" viewBox="0 0 24 16" role="img" aria-label="Bandeira">${markup}</svg>`;
  return wrapper.firstElementChild;
}
