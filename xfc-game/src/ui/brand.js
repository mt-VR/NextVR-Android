// Marca do XFC: o selo circular "XF ESPORTES" e o logotipo "XFC".
//
// As duas marcas são desenhadas em SVG (sem arquivo binário) para ficarem nítidas
// em qualquer resolução e permitirem recolher por CSS.

const XF_MARK = `<g transform="translate(38.5 34)">
  <path d="M-26,-16 L-13,-16 L-5,-2 L3,-16 L16,-16 L4,2 L18,20 L4,20 L-5,8 L-15,20 L-29,20 L-16,2 Z" fill="#0b1016"/>
  <path d="M20,-16 L52,-16 L52,-7 L29,-7 L29,1 L48,1 L48,10 L29,10 L29,20 L20,20 Z" fill="#0b1016"/>
</g>`;

/** Selo circular "XF ESPORTES" usado na intro e no canto superior do menu. */
export function xfEsportesBadge({ className = '', title = 'XF Esports' } = {}) {
  return `<svg class="brand-badge ${className}" viewBox="0 0 100 100" role="img" aria-label="${title}">
    <circle cx="50" cy="50" r="49" fill="#ffffff"/>
    ${XF_MARK}
    <text x="50" y="78" text-anchor="middle" font-family="Inter, 'Arial Black', sans-serif"
      font-weight="800" font-size="14.5" letter-spacing="0.2" fill="#0b1016">ESPORTES</text>
  </svg>`;
}

// Logotipo XFC: letras angulares inclinadas, no desenho da identidade do projeto.
const XFC_WORDMARK = `<g transform="translate(14 0) skewX(-8)">
  <path d="M0,0 L26,0 L44,28 L62,0 L88,0 L58,44 L88,88 L60,88 L44,60 L26,88 L0,88 L28,44 Z" fill="currentColor"/>
  <path d="M100,0 L164,0 L164,16 L126,16 L126,38 L156,38 L156,54 L126,54 L126,88 L100,88 Z" fill="currentColor"/>
  <path d="M250,0 L206,0 L180,24 L180,64 L206,88 L250,88 L250,70 L218,70 L204,58 L204,30 L218,18 L250,18 Z" fill="currentColor"/>
</g>`;

/** Logotipo "XFC" usado na intro e no topo do menu. */
export function xfcWordmark({ className = '', title = 'XFC' } = {}) {
  return `<svg class="brand-wordmark ${className}" viewBox="0 0 264 88" role="img" aria-label="${title}">
    ${XFC_WORDMARK}
  </svg>`;
}
