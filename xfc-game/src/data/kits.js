// Blusas (kits) dos times do XFC.
//
// Cada clube tem três uniformes — principal, reserva e terceiro — desenhados em
// SVG a partir das cores do escudo. Por serem vetores, a blusa fica nítida em
// qualquer tela (inclusive no celular deitado) e o jogo não carrega nenhum
// arquivo de imagem a mais.

export const KITS = {
  'fc-barcelona': [
    { id: 'home', name: 'Home', pattern: 'stripes', colors: { primary: '#004d98', secondary: '#a50044', trim: '#edbb00' } },
    { id: 'away', name: 'Away', pattern: 'solid', colors: { primary: '#fdb913', secondary: '#004d98', trim: '#004d98' } },
    { id: 'third', name: 'Third', pattern: 'solid', colors: { primary: '#f2f4f6', secondary: '#111820', trim: '#111820' } }
  ],
  'real-madrid': [
    { id: 'home', name: 'Home', pattern: 'solid', colors: { primary: '#f7f7f7', secondary: '#dcae47', trim: '#dcae47' } },
    { id: 'away', name: 'Away', pattern: 'solid', colors: { primary: '#1b1b1b', secondary: '#3c3c3c', trim: '#3c3c3c' } },
    { id: 'third', name: 'Third', pattern: 'solid', colors: { primary: '#12275c', secondary: '#6db9f0', trim: '#6db9f0' } }
  ],
  'ibis-esporte': [
    { id: 'home', name: 'Home', pattern: 'stripes', colors: { primary: '#c8102e', secondary: '#141414', trim: '#c8102e' } },
    { id: 'away', name: 'Away', pattern: 'solid', colors: { primary: '#f4f4f2', secondary: '#141414', trim: '#141414' } },
    { id: 'third', name: 'Third', pattern: 'solid', colors: { primary: '#141414', secondary: '#c8102e', trim: '#c8102e' } }
  ],
  'parana-clube': [
    { id: 'home', name: 'Home', pattern: 'stripes', colors: { primary: '#d0112b', secondary: '#f2f2f0', trim: '#141414' } },
    { id: 'away', name: 'Away', pattern: 'solid', colors: { primary: '#f2f2f0', secondary: '#d0112b', trim: '#d0112b' } },
    { id: 'third', name: 'Third', pattern: 'solid', colors: { primary: '#141414', secondary: '#d0112b', trim: '#d0112b' } }
  ],

  // Clubes do pacote de imagens: as blusas vindo com a foto real do jogador
  // (quando existe) e as reservas desenhadas em SVG.
  brentford: [
    { id: 'home', name: 'Home', pattern: 'solid', colors: { primary: '#e30613', secondary: '#ffffff', trim: '#111111' } },
    { id: 'away', name: 'Away', pattern: 'solid', colors: { primary: '#f2f2f0', secondary: '#111111', trim: '#e30613' } },
    { id: 'third', name: 'Third', pattern: 'solid', colors: { primary: '#f5d000', secondary: '#111111', trim: '#111111' } }
  ],
  panathinaikos: [
    { id: 'home', name: 'Home', pattern: 'solid', colors: { primary: '#00843d', secondary: '#ffffff', trim: '#00532a' } },
    { id: 'away', name: 'Away', pattern: 'solid', colors: { primary: '#f2f2f0', secondary: '#00843d', trim: '#00843d' } },
    { id: 'third', name: 'Third', pattern: 'solid', colors: { primary: '#00532a', secondary: '#f5d000', trim: '#f5d000' } }
  ],
  'river-plate': [
    { id: 'home', name: 'Home', pattern: 'sash', colors: { primary: '#f4f4f4', secondary: '#d21c3a', trim: '#0d2c54' } },
    { id: 'away', name: 'Away', pattern: 'solid', colors: { primary: '#d21c3a', secondary: '#f4f4f4', trim: '#0d2c54' } },
    { id: 'third', name: 'Third', pattern: 'solid', colors: { primary: '#0d2c54', secondary: '#f4f4f4', trim: '#d21c3a' } }
  ],
  levante: [
    { id: 'home', name: 'Home', pattern: 'stripes', colors: { primary: '#b3121b', secondary: '#f5c400', trim: '#0b3b8c' } },
    { id: 'away', name: 'Away', pattern: 'solid', colors: { primary: '#0b3b8c', secondary: '#f4f4f4', trim: '#b3121b' } },
    { id: 'third', name: 'Third', pattern: 'solid', colors: { primary: '#f4f4f4', secondary: '#b3121b', trim: '#f5c400' } }
  ],
  'aston-villa': [
    { id: 'home', name: 'Home', pattern: 'solid', colors: { primary: '#670e36', secondary: '#95bfe5', trim: '#f4f4f4' } },
    { id: 'away', name: 'Away', pattern: 'solid', colors: { primary: '#f4f4f4', secondary: '#95bfe5', trim: '#670e36' } },
    { id: 'third', name: 'Third', pattern: 'solid', colors: { primary: '#f6eb61', secondary: '#670e36', trim: '#111111' } }
  ],
  'huddersfield-town': [
    { id: 'home', name: 'Home', pattern: 'stripes', colors: { primary: '#0e63ad', secondary: '#f4f4f4', trim: '#0b3b8c' } },
    { id: 'away', name: 'Away', pattern: 'solid', colors: { primary: '#f4f4f4', secondary: '#0e63ad', trim: '#0e63ad' } },
    {
      id: 'third', name: 'Third', pattern: 'solid',
      colors: { primary: '#f26522', secondary: '#1b1b1b', trim: '#f4f4f4' },
      render: 'assets/players/kits/huddersfield-town.png',
      shirt: 'assets/players/kits/huddersfield-town-shirt.png'
    }
  ],
  'northampton-town': [
    { id: 'home', name: 'Home', pattern: 'solid', colors: { primary: '#6b1f3b', secondary: '#f4f4f4', trim: '#f4f4f4' } },
    { id: 'away', name: 'Away', pattern: 'solid', colors: { primary: '#f4f4f4', secondary: '#6b1f3b', trim: '#6b1f3b' } },
    { id: 'third', name: 'Third', pattern: 'solid', colors: { primary: '#1c3f94', secondary: '#f4f4f4', trim: '#f4f4f4' } }
  ],
  'rkc-waalwijk': [
    { id: 'home', name: 'Home', pattern: 'stripes', colors: { primary: '#1b4f9c', secondary: '#f4f4f4', trim: '#f7c92e' } },
    { id: 'away', name: 'Away', pattern: 'solid', colors: { primary: '#f7c92e', secondary: '#1b1b1b', trim: '#1b1b1b' } },
    { id: 'third', name: 'Third', pattern: 'solid', colors: { primary: '#d21c3a', secondary: '#f4f4f4', trim: '#f4f4f4' } }
  ],
  'eintracht-frankfurt': [
    {
      id: 'home', name: 'Home', pattern: 'check',
      colors: { primary: '#e1000f', secondary: '#f4f4f4', trim: '#111111' },
      render: 'assets/players/kits/eintracht-frankfurt.png',
      shirt: 'assets/players/kits/eintracht-frankfurt-shirt.png'
    },
    { id: 'away', name: 'Away', pattern: 'solid', colors: { primary: '#1c1c1c', secondary: '#f4f4f4', trim: '#e1000f' } },
    { id: 'third', name: 'Third', pattern: 'solid', colors: { primary: '#f4f4f4', secondary: '#e1000f', trim: '#111111' } }
  ],
  'queens-park-rangers': [
    {
      id: 'home', name: 'Home', pattern: 'solid',
      colors: { primary: '#1b2a63', secondary: '#f4f4f4', trim: '#d31245' },
      render: 'assets/players/kits/queens-park-rangers.png',
      shirt: 'assets/players/kits/queens-park-rangers-shirt.png'
    },
    { id: 'away', name: 'Away', pattern: 'solid', colors: { primary: '#f4f4f4', secondary: '#1b2a63', trim: '#1b2a63' } },
    { id: 'third', name: 'Third', pattern: 'solid', colors: { primary: '#0d2c54', secondary: '#f4f4f4', trim: '#d31245' } }
  ],
  wrexham: [
    {
      id: 'home', name: 'Home', pattern: 'solid',
      colors: { primary: '#f2f2f0', secondary: '#d31245', trim: '#00843d' },
      render: 'assets/players/kits/wrexham-home.png',
      shirt: 'assets/players/kits/wrexham-home-shirt.png'
    },
    {
      id: 'away', name: 'Away', pattern: 'solid',
      colors: { primary: '#00843d', secondary: '#f4f4f4', trim: '#d31245' },
      render: 'assets/players/kits/wrexham-away.png',
      shirt: 'assets/players/kits/wrexham-away-shirt.png'
    },
    {
      id: 'third', name: 'Third', pattern: 'solid',
      colors: { primary: '#e0459b', secondary: '#00843d', trim: '#f4f4f4' },
      render: 'assets/players/kits/wrexham-third.png',
      shirt: 'assets/players/kits/wrexham-third-shirt.png'
    }
  ],
  'rotherham-united': [
    {
      id: 'home', name: 'Home', pattern: 'solid',
      colors: { primary: '#1b1b1b', secondary: '#20a37a', trim: '#d31245' },
      render: 'assets/players/kits/rotherham-united.png',
      shirt: 'assets/players/kits/rotherham-united-shirt.png'
    },
    { id: 'away', name: 'Away', pattern: 'solid', colors: { primary: '#f4f4f4', secondary: '#1b1b1b', trim: '#20a37a' } },
    { id: 'third', name: 'Third', pattern: 'solid', colors: { primary: '#d31245', secondary: '#f4f4f4', trim: '#1b1b1b' } }
  ],
  'wycombe-wanderers': [
    {
      id: 'home', name: 'Home', pattern: 'solid',
      colors: { primary: '#7a4a2b', secondary: '#1b3f94', trim: '#f4f4f4' },
      render: 'assets/players/kits/wycombe-wanderers.png',
      shirt: 'assets/players/kits/wycombe-wanderers-shirt.png'
    },
    { id: 'away', name: 'Away', pattern: 'solid', colors: { primary: '#1b3f94', secondary: '#f4f4f4', trim: '#f7c92e' } },
    { id: 'third', name: 'Third', pattern: 'solid', colors: { primary: '#f4f4f4', secondary: '#1b3f94', trim: '#7a4a2b' } }
  ],
  'sheffield-united': [
    {
      id: 'home', name: 'Home', pattern: 'stripes',
      colors: { primary: '#1b1b1b', secondary: '#d31245', trim: '#f4f4f4' },
      render: 'assets/players/kits/sheffield-united.png',
      shirt: 'assets/players/kits/sheffield-united-shirt.png'
    },
    { id: 'away', name: 'Away', pattern: 'solid', colors: { primary: '#f4f4f4', secondary: '#d31245', trim: '#1b1b1b' } },
    { id: 'third', name: 'Third', pattern: 'solid', colors: { primary: '#0d2c54', secondary: '#f4f4f4', trim: '#d31245' } }
  ],
  flamengo: [
    { id: 'home', name: 'Home', pattern: 'stripes', colors: { primary: '#c8102e', secondary: '#141414', trim: '#ffd84a' } },
    { id: 'away', name: 'Away', pattern: 'solid', colors: { primary: '#f4f4f2', secondary: '#141414', trim: '#c8102e' } },
    { id: 'third', name: 'Third', pattern: 'solid', colors: { primary: '#0d2c54', secondary: '#f4f4f2', trim: '#c8102e' } }
  ],
  palmeiras: [
    { id: 'home', name: 'Home', pattern: 'solid', colors: { primary: '#00843d', secondary: '#f4f4f2', trim: '#003d1e' } },
    { id: 'away', name: 'Away', pattern: 'solid', colors: { primary: '#f4f4f2', secondary: '#00843d', trim: '#003d1e' } },
    { id: 'third', name: 'Third', pattern: 'solid', colors: { primary: '#0a1f5c', secondary: '#f4f4f2', trim: '#f5d000' } }
  ],
  corinthians: [
    { id: 'home', name: 'Home', pattern: 'solid', colors: { primary: '#141414', secondary: '#f4f4f2', trim: '#141414' } },
    { id: 'away', name: 'Away', pattern: 'solid', colors: { primary: '#f4f4f2', secondary: '#141414', trim: '#0a5c9c' } },
    { id: 'third', name: 'Third', pattern: 'stripes', colors: { primary: '#0a5c9c', secondary: '#f4f4f2', trim: '#141414' } }
  ],

};

/** Os três uniformes de um time (ou uma lista vazia, se o time não tiver). */
export function kitsOf(teamId) {
  return KITS[teamId] || [];
}

/** Uniforme inicial (o principal) de um time. */
export function defaultKit(teamId) {
  return kitsOf(teamId)[0] || null;
}

/** Foto do jogador de corpo inteiro vestindo a blusa (quando existe). */
export function kitRender(kit) {
  return kit?.render || null;
}

/** Recorte só da camisa, usado no carrossel da tela de blusas. */
export function kitShirt(kit) {
  return kit?.shirt || null;
}

const SHIRT_PATH = 'M78,22 L34,40 L8,86 L46,106 L54,84 L54,232 L166,232 L166,84 L174,106 L212,86 L186,40 L142,22 C134,38 86,38 78,22 Z';

let sequence = 0;

/** Identificador único por desenho, para os clipPath não colidirem. */
function nextId(prefix) {
  sequence += 1;
  return `${prefix}-${sequence}`;
}

/**
 * Desenho interno da blusa (sem <svg>), usado tanto pela blusa solta quanto
 * pelo jogador que veste o uniforme.
 */
function shirtMarkup(kit, clipId) {
  const { primary, secondary, trim } = kit.colors;
  const stripes = [];

  if (kit.pattern === 'stripes') {
    // Seis faixas verticais do ombro à barra, alternando as duas cores.
    const bodyLeft = 54;
    const bodyWidth = 112;
    const band = bodyWidth / 6;
    for (let i = 0; i < 6; i += 1) {
      stripes.push(`<rect x="${(bodyLeft + i * band).toFixed(1)}" y="0" width="${band.toFixed(1)}" height="240" fill="${i % 2 === 0 ? primary : secondary}"/>`);
    }
  }

  if (kit.pattern === 'sash') {
    // Faixa diagonal cruzando o peito.
    stripes.push(`<path d="M54,0 L106,0 L166,240 L114,240 Z" fill="${secondary}"/>`);
  }

  if (kit.pattern === 'check') {
    // Xadrez (Eintracht).
    const size = 26;
    for (let row = 0; row < 10; row += 1) {
      for (let column = 0; column < 5; column += 1) {
        if ((row + column) % 2 === 0) continue;
        stripes.push(`<rect x="${(54 + column * size).toFixed(1)}" y="${(row * size).toFixed(1)}" width="${size}" height="${size}" fill="${secondary}"/>`);
      }
    }
  }

  return `
      <defs>
        <clipPath id="${clipId}">
          <path d="${SHIRT_PATH}"/>
        </clipPath>
      </defs>
      <g clip-path="url(#${clipId})">
        <rect x="0" y="0" width="220" height="240" fill="${primary}"/>
        ${stripes.join('')}
        <rect x="0" y="0" width="220" height="30" fill="${trim}" opacity="0.14"/>
      </g>
      <path d="M34,40 L8,86 L46,106 L54,84 L54,74 Z" fill="${secondary}"/>
      <path d="M186,40 L212,86 L174,106 L166,84 L166,74 Z" fill="${secondary}"/>
      <path d="${SHIRT_PATH}" fill="none" stroke="rgba(0,0,0,0.35)" stroke-width="2"/>
      <path d="M78,22 C86,38 134,38 142,22" fill="none" stroke="${trim}" stroke-width="7" stroke-linecap="round"/>`;
}

/**
 * Blusa em SVG. `pattern: 'stripes'` alterna listras verticais com as duas
 * cores; `solid` usa a cor principal com detalhes na secundária.
 */
export function kitSvg(kit, { className = '', width = 220, id = '' } = {}) {
  if (!kit) return '';
  const clipId = id || nextId('kit');
  return `<svg class="kit ${className}".trim() viewBox="0 0 220 240" width="${width}" role="img" aria-label="Blusa ${kit.name}">
    ${shirtMarkup(kit, clipId)}
  </svg>`;
}

/**
 * Jogador "manequim" vestindo o uniforme: blusa, bermuda, meias e chuteiras.
 * É a prévia grande usada na tela de escolha de blusas (HOME à esquerda,
 * AWAY à direita), no lugar do jogador 3D do jogo original.
 */
export function kitFigureSvg(kit, { className = '', width = 300, id = '' } = {}) {
  if (!kit) return '';
  const clipId = id || nextId('figure');
  const { primary, secondary, trim } = kit.colors;
  const skin = '#d7a077';

  return `<svg class="kit-figure ${className}".trim() viewBox="0 0 220 470" width="${width}" role="img" aria-label="Jogador com a blusa ${kit.name}">
    <ellipse cx="110" cy="452" rx="74" ry="12" fill="rgba(0,0,0,0.35)"/>
    <path d="M48,82 L26,238" fill="none" stroke="${skin}" stroke-width="17" stroke-linecap="round"/>
    <circle cx="25" cy="242" r="10" fill="${skin}"/>
    <path d="M172,82 L194,238" fill="none" stroke="${skin}" stroke-width="17" stroke-linecap="round"/>
    <circle cx="195" cy="242" r="10" fill="${skin}"/>
    <g transform="translate(22,44) scale(0.8)">
      ${shirtMarkup(kit, clipId)}
    </g>
    <path d="M56,226 L164,226 L158,308 L114,308 L110,262 L106,308 L62,308 Z" fill="${primary}"/>
    <rect x="76" y="300" width="26" height="76" rx="12" fill="${skin}"/>
    <rect x="118" y="300" width="26" height="76" rx="12" fill="${skin}"/>
    <rect x="72" y="356" width="32" height="80" rx="10" fill="${primary}"/>
    <rect x="116" y="356" width="32" height="80" rx="10" fill="${primary}"/>
    <rect x="70" y="352" width="36" height="12" rx="5" fill="${secondary}" opacity="0.85"/>
    <rect x="114" y="352" width="36" height="12" rx="5" fill="${secondary}" opacity="0.85"/>
    <ellipse cx="88" cy="440" rx="22" ry="9" fill="#191919"/>
    <ellipse cx="132" cy="440" rx="22" ry="9" fill="#191919"/>
    <rect x="100" y="40" width="20" height="22" fill="${skin}"/>
    <circle cx="110" cy="26" r="21" fill="${skin}"/>
    <path d="M89,22 A21,21 0 0 1 131,22 L131,16 A21,21 0 0 0 89,16 Z" fill="#2a1c12"/>
    <rect x="52" y="222" width="116" height="10" rx="5" fill="${trim}" opacity="0.5"/>
  </svg>`;
}
