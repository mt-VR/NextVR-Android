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
  `,
  qa: `
    <rect width="24" height="16" fill="#8a1538"/>
    <path d="M0 0h8l1.2 1.6L8 3.2l1.2 1.6L8 6.4 9.2 8 8 9.6l1.2 1.6L8 12.8l1.2 1.6L8 16H0z" fill="#fff"/>
  `,
  ec: `
    <rect width="24" height="16" fill="#ed1c24"/><rect width="24" height="10.7" fill="#034ea2"/>
    <rect width="24" height="5.4" fill="#ffdd00"/><circle cx="12" cy="8" r="1.5" fill="#9b6c34"/>
  `,
  sn: `
    <rect width="8" height="16" fill="#00853f"/><rect x="8" width="8" height="16" fill="#fdef42"/>
    <rect x="16" width="8" height="16" fill="#e31b23"/>
    <path d="m12 5 .8 2.1 2.2.1-1.7 1.3.6 2.1-1.9-1.2-1.9 1.2.6-2.1L9 7.2l2.2-.1z" fill="#00853f"/>
  `,
  us: `
    <rect width="24" height="16" fill="#fff"/>
    <path d="M0 0h24v1.25H0zm0 2.5h24v1.25H0zm0 2.5h24v1.25H0zm0 2.5h24v1.25H0zm0 2.5h24v1.25H0zm0 2.5h24v1.25H0zm0 2.5h24v1.25H0z" fill="#c9233b"/>
    <rect width="10.5" height="8.7" fill="#17407f"/><circle cx="2" cy="2" r=".45" fill="#fff"/><circle cx="5" cy="2" r=".45" fill="#fff"/><circle cx="8" cy="2" r=".45" fill="#fff"/><circle cx="3.5" cy="4.5" r=".45" fill="#fff"/><circle cx="6.5" cy="4.5" r=".45" fill="#fff"/><circle cx="2" cy="7" r=".45" fill="#fff"/><circle cx="5" cy="7" r=".45" fill="#fff"/><circle cx="8" cy="7" r=".45" fill="#fff"/>
  `,
  ir: `
    <rect width="24" height="5.3" fill="#239f40"/><rect y="5.3" width="24" height="5.4" fill="#fff"/>
    <rect y="10.7" width="24" height="5.3" fill="#da0000"/>
    <path d="M12 6.2v3.6m-1.4-2.8c.4-1.7 2.5-1.7 2.9 0v2.1c-.4 1.7-2.5 1.7-2.9 0" stroke="#da0000" stroke-width=".55" fill="none"/>
  `,
  wa: `
    <rect width="24" height="8" fill="#fff"/><rect y="8" width="24" height="8" fill="#169b62"/>
    <path d="M11 2.4c2 .3 1.3 2.4 3.3 2.8l-1.1 1.7 2.6 1.4-2.1 1.4-1.2 3.7-2.3-2-2.2 1.1.7-2.7-2.1-1.3 2-1.7-.8-2.5 2.1.6z" fill="#d51d36" stroke="#9b1227" stroke-width=".35"/>
  `,
  sa: `
    <rect width="24" height="16" fill="#08784d"/>
    <path d="M4 10.5h15M5 12.3h12" stroke="#fff" stroke-width=".8" stroke-linecap="round"/>
    <path d="M6 4h12l-1 1.1h-9z" fill="#fff"/>
  `,
  mx: `
    <rect width="8" height="16" fill="#006847"/><rect x="8" width="8" height="16" fill="#fff"/><rect x="16" width="8" height="16" fill="#ce1126"/>
    <circle cx="12" cy="8.5" r="1.25" fill="#8b6b2e"/><path d="M10.8 9.2q1.2-2.6 2.4 0" fill="none" stroke="#087443" stroke-width=".55"/>
  `,
  pl: `
    <rect width="24" height="8" fill="#fff"/><rect y="8" width="24" height="8" fill="#dc143c"/>
  `,
  au: `
    <rect width="24" height="16" fill="#0b1f63"/>
    <path d="M0 0l10 7M10 0L0 7" stroke="#fff" stroke-width="2.1"/><path d="M0 0l10 7M10 0L0 7" stroke="#cf142b" stroke-width=".9"/>
    <path d="M5 0v7M0 3.5h10" stroke="#fff" stroke-width="2.6"/><path d="M5 0v7M0 3.5h10" stroke="#cf142b" stroke-width="1.2"/>
    <path d="m17 3 .6 1.3 1.4.1-1 1 .3 1.4-1.3-.7-1.2.7.2-1.4-1-1 1.4-.1zM20 10l.5 1 1.1.1-.8.7.2 1.1-1-.5-.9.5.2-1.1-.8-.7 1.1-.1zM14 9l.5 1 1.1.1-.8.7.2 1.1-1-.5-.9.5.2-1.1-.8-.7 1.1-.1z" fill="#fff"/>
  `,
  dk: `
    <rect width="24" height="16" fill="#c8102e"/><path d="M7 0v16M0 8h24" stroke="#fff" stroke-width="2.2"/>
  `,
  tn: `
    <rect width="24" height="16" fill="#e70013"/><circle cx="12" cy="8" r="5.2" fill="#fff"/>
    <circle cx="12.9" cy="8" r="2.5" fill="#e70013"/><circle cx="12" cy="8" r="2.2" fill="#fff"/>
    <path d="m12.2 5.8.7 1.4 1.6.2-1.2 1.1.3 1.6-1.4-.8-1.4.8.3-1.6-1.2-1.1 1.6-.2z" fill="#e70013"/>
  `,
  cr: `
    <rect width="24" height="16" fill="#fff"/><rect y="1.6" width="24" height="2.4" fill="#174a92"/>
    <rect y="4" width="24" height="8" fill="#d72839"/><rect y="12" width="24" height="2.4" fill="#174a92"/>
  `,
  jp: `
    <rect width="24" height="16" fill="#fff"/><circle cx="12" cy="8" r="4.1" fill="#bc002d"/>
  `,
  be: `
    <rect width="8" height="16" fill="#1b1b1b"/><rect x="8" width="8" height="16" fill="#f2cf29"/><rect x="16" width="8" height="16" fill="#d92735"/>
  `,
  ca: `
    <rect width="5" height="16" fill="#d80621"/><rect x="5" width="14" height="16" fill="#fff"/><rect x="19" width="5" height="16" fill="#d80621"/>
    <path d="m12 3 1 2.1 1.6-.6-.5 1.8 1.2.8-1.5.5.1 2-1.4-.9-1.4.9.1-2-1.5-.5 1.2-.8-.5-1.8 1.6.6z" fill="#d80621"/>
  `,
  ma: `
    <rect width="24" height="16" fill="#c1272d"/><path d="m12 3.3 1.4 3.1 3.3.2-2.5 2.1.9 3.2-3.1-1.8-3.1 1.8.9-3.2-2.5-2.1 3.3-.2z" fill="none" stroke="#006233" stroke-width=".75"/>
  `,
  hr: `
    <rect width="24" height="5.3" fill="#d92738"/><rect y="5.3" width="24" height="5.4" fill="#fff"/><rect y="10.7" width="24" height="5.3" fill="#174a91"/>
    <path d="M9 5.1h6v5.7l-3 2.3-3-2.3z" fill="#fff" stroke="#d92738" stroke-width=".45"/>
    <path d="M9.5 5.6h1.5v1.5H9.5zm3 0H14v1.5h-1.5zm-3 3H11v1.5H9.5zm3 0H14v1.5h-1.5z" fill="#d92738"/>
  `,
  rs: `
    <rect width="24" height="5.3" fill="#c9233b"/><rect y="5.3" width="24" height="5.4" fill="#173f8c"/><rect y="10.7" width="24" height="5.3" fill="#fff"/>
  `,
  ch: `
    <rect width="24" height="16" fill="#e32035"/><path d="M10 3h4v3.5h3.5v3H14V13h-4V9.5H6.5v-3H10z" fill="#fff"/>
  `,
  cm: `
    <rect width="8" height="16" fill="#087748"/><rect x="8" width="8" height="16" fill="#d92738"/><rect x="16" width="8" height="16" fill="#f5cf2e"/>
    <path d="m12 5 .8 2 2.2.1-1.7 1.3.6 2.1-1.9-1.2-1.9 1.2.6-2.1L9 7.1l2.2-.1z" fill="#f5cf2e"/>
  `,
  gh: `
    <rect width="24" height="5.3" fill="#d7263d"/><rect y="5.3" width="24" height="5.4" fill="#f2d12c"/><rect y="10.7" width="24" height="5.3" fill="#087748"/>
    <path d="m12 6.1.7 1.5 1.7.2-1.2 1.1.3 1.7-1.5-.8-1.5.8.3-1.7-1.2-1.1 1.7-.2z" fill="#1b1b1b"/>
  `,
  uy: `
    <rect width="24" height="16" fill="#fff"/><path d="M0 2h24v1.6H0zm0 3.2h24v1.6H0zm0 3.2h24V10H0zm0 3.2h24v1.6H0z" fill="#75bde9"/>
    <circle cx="5" cy="3.2" r="2.1" fill="#f2bd37"/><path d="M5 1.6l.5 1 1.1.1-.8.7.2 1.1-1-.5-.9.5.2-1.1-.8-.7 1.1-.1z" fill="#fff"/>
  `,
  kr: `
    <rect width="24" height="16" fill="#fff"/><path d="M10 5.2a3 3 0 0 1 5.2 2.1 3 3 0 0 1-5.2 2.1 1.5 1.5 0 0 0 0-4.2" fill="#cd2e3a"/>
    <path d="M10 9.4a3 3 0 0 1 5.2-2.1 3 3 0 0 1-5.2-2.1 1.5 1.5 0 0 0 0 4.2" fill="#0047a0"/>
    <path d="M3 3l4 1m-4 1 4 1M17 11l4 1m-4 1 4 1" stroke="#1b1b1b" stroke-width=".8"/>
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
