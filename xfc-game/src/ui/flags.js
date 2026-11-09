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
  `,
  en: `
    <rect x="0" y="0" width="24" height="16" fill="#ffffff"/>
    <rect x="0" y="6.4" width="24" height="3.2" fill="#ce1124"/>
    <rect x="10.4" y="0" width="3.2" height="16" fill="#ce1124"/>
  `,
  gb: `
    <rect x="0" y="0" width="24" height="16" fill="#012169"/>
    <path d="M0,0 L24,16 M24,0 L0,16" stroke="#ffffff" stroke-width="4"/>
    <path d="M0,0 L24,16 M24,0 L0,16" stroke="#c8102e" stroke-width="2"/>
    <path d="M12,0 L12,16 M0,8 L24,8" stroke="#ffffff" stroke-width="6"/>
    <path d="M12,0 L12,16 M0,8 L24,8" stroke="#c8102e" stroke-width="3.4"/>
  `,
  gr: `
    <rect x="0" y="0" width="24" height="16" fill="#ffffff"/>
    <g fill="#0d5eaf">
      <rect x="0" y="0" width="24" height="1.78"/>
      <rect x="0" y="3.56" width="24" height="1.78"/>
      <rect x="0" y="7.11" width="24" height="1.78"/>
      <rect x="0" y="10.67" width="24" height="1.78"/>
      <rect x="0" y="14.22" width="24" height="1.78"/>
      <rect x="0" y="0" width="9.6" height="8.89"/>
    </g>
    <rect x="4.1" y="1.6" width="1.4" height="5.7" fill="#ffffff"/>
    <rect x="1.9" y="3.8" width="5.8" height="1.4" fill="#ffffff"/>
  `,
  ar: `
    <rect x="0" y="0" width="24" height="16" fill="#74acdf"/>
    <rect x="0" y="5.3" width="24" height="5.4" fill="#ffffff"/>
    <circle cx="12" cy="8" r="2.4" fill="#f6b40e"/>
  `,
  fr: `
    <rect x="0" y="0" width="8" height="16" fill="#0055a4"/>
    <rect x="8" y="0" width="8" height="16" fill="#ffffff"/>
    <rect x="16" y="0" width="8" height="16" fill="#ef4135"/>
  `,
  it: `
    <rect x="0" y="0" width="8" height="16" fill="#009246"/>
    <rect x="8" y="0" width="8" height="16" fill="#ffffff"/>
    <rect x="16" y="0" width="8" height="16" fill="#ce2b37"/>
  `,
  pt: `
    <rect x="0" y="0" width="10" height="16" fill="#006600"/>
    <rect x="10" y="0" width="14" height="16" fill="#ff0000"/>
    <circle cx="10" cy="8" r="3.1" fill="#ffcc33"/>
    <circle cx="10" cy="8" r="1.7" fill="#ffffff"/>
  `,
  nl: `
    <rect x="0" y="0" width="24" height="5.4" fill="#ae1c28"/>
    <rect x="0" y="5.4" width="24" height="5.3" fill="#ffffff"/>
    <rect x="0" y="10.7" width="24" height="5.3" fill="#21468b"/>
  `,
  de: `
    <rect x="0" y="0" width="24" height="5.4" fill="#000000"/>
    <rect x="0" y="5.4" width="24" height="5.3" fill="#dd0000"/>
    <rect x="0" y="10.7" width="24" height="5.3" fill="#ffce00"/>
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
