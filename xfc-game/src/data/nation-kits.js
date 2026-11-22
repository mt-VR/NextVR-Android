// Uniformes de seleção.
//
// As 32 da Copa clássica trazem as cores no próprio cadastro
// (`worldcup.js`). As 179 seleções restantes entravam todas com as mesmas
// cores claras de preenchimento (`#f0f1f4`/`#182947`), então o Kick Off
// mostrava todo mundo de branco. Aqui cada associação tem a cor da sua
// camisa de verdade; quem não está nesta lista cai numa paleta estável
// (derivada do id), nunca no branco genérico.

/** [camisa, detalhe, barra, goleiro, goleiro reserva] */
const NATION_KITS = {
  algeria: ['#ffffff', '#0a7a3d', '#0a7a3d', '#1c3f7a', '#f2c94c'],
  angola: ['#d01b2c', '#111111', '#f2d12c', '#1f9d55', '#20232a'],
  benin: ['#f2d12c', '#0a7a3d', '#d01b2c', '#2b6cb0', '#20232a'],
  botswana: ['#6fb8e8', '#111111', '#ffffff', '#d01b2c', '#20232a'],
  'burkina-faso': ['#ef3340', '#0a7a3d', '#f2d12c', '#1c3f7a', '#f2c94c'],
  burundi: ['#d01b2c', '#ffffff', '#0a7a3d', '#20232a', '#f2c94c'],
  'cape-verde': ['#0057a8', '#ffffff', '#d01b2c', '#f2d12c', '#20232a'],
  'central-african-republic': ['#1c3f7a', '#ffffff', '#f2d12c', '#d01b2c', '#20232a'],
  chad: ['#1c3f7a', '#f2d12c', '#d01b2c', '#0a7a3d', '#20232a'],
  comoros: ['#0a7a3d', '#f2d12c', '#1c3f7a', '#d01b2c', '#20232a'],
  'congo-brazzaville': ['#0a7a3d', '#f2d12c', '#d01b2c', '#1c3f7a', '#20232a'],
  'congo-kinshasa': ['#1e6fd0', '#f2d12c', '#d01b2c', '#0a7a3d', '#20232a'],
  'cote-d-ivoire': ['#f27c1e', '#ffffff', '#0a7a3d', '#1c3f7a', '#20232a'],
  djibouti: ['#5aa9e6', '#ffffff', '#0a7a3d', '#d01b2c', '#20232a'],
  egypt: ['#d01b2c', '#ffffff', '#111111', '#1c3f7a', '#f2c94c'],
  'equatorial-guinea': ['#d01b2c', '#ffffff', '#0a7a3d', '#1c3f7a', '#20232a'],
  eritrea: ['#5aa9e6', '#d01b2c', '#0a7a3d', '#20232a', '#f2c94c'],
  eswatini: ['#1e6fd0', '#f2d12c', '#d01b2c', '#0a7a3d', '#20232a'],
  ethiopia: ['#0a7a3d', '#f2d12c', '#d01b2c', '#1c3f7a', '#20232a'],
  gabon: ['#1e6fd0', '#f2d12c', '#0a7a3d', '#d01b2c', '#20232a'],
  gambia: ['#d01b2c', '#1c3f7a', '#0a7a3d', '#f2d12c', '#20232a'],
  guinea: ['#d01b2c', '#f2d12c', '#0a7a3d', '#1c3f7a', '#20232a'],
  'guinea-bissau': ['#f2d12c', '#d01b2c', '#0a7a3d', '#20232a', '#f2c94c'],
  kenya: ['#d01b2c', '#111111', '#0a7a3d', '#1c3f7a', '#20232a'],
  lesotho: ['#1e6fd0', '#ffffff', '#0a7a3d', '#d01b2c', '#20232a'],
  liberia: ['#1e6fd0', '#ffffff', '#d01b2c', '#f2d12c', '#20232a'],
  libya: ['#0a7a3d', '#ffffff', '#111111', '#d01b2c', '#20232a'],
  madagascar: ['#d01b2c', '#0a7a3d', '#ffffff', '#1c3f7a', '#20232a'],
  malawi: ['#d01b2c', '#111111', '#0a7a3d', '#1c3f7a', '#20232a'],
  mali: ['#f2d12c', '#0a7a3d', '#d01b2c', '#1c3f7a', '#20232a'],
  mauritania: ['#0a7a3d', '#f2d12c', '#d01b2c', '#1c3f7a', '#20232a'],
  mauritius: ['#d01b2c', '#1e6fd0', '#f2d12c', '#0a7a3d', '#20232a'],
  mozambique: ['#d01b2c', '#0a7a3d', '#111111', '#1c3f7a', '#f2c94c'],
  namibia: ['#1e6fd0', '#d01b2c', '#0a7a3d', '#f2d12c', '#20232a'],
  niger: ['#f27c1e', '#ffffff', '#0a7a3d', '#1c3f7a', '#20232a'],
  nigeria: ['#0a7a3d', '#ffffff', '#0a7a3d', '#1c3f7a', '#f2c94c'],
  rwanda: ['#1e6fd0', '#f2d12c', '#0a7a3d', '#d01b2c', '#20232a'],
  'sao-tome-principe': ['#f2d12c', '#0a7a3d', '#d01b2c', '#1c3f7a', '#20232a'],
  seychelles: ['#1e6fd0', '#f2d12c', '#d01b2c', '#0a7a3d', '#20232a'],
  'sierra-leone': ['#1e6fd0', '#ffffff', '#0a7a3d', '#d01b2c', '#20232a'],
  somalia: ['#5aa9e6', '#ffffff', '#5aa9e6', '#0a7a3d', '#20232a'],
  'south-africa': ['#f2d12c', '#0a7a3d', '#111111', '#1c3f7a', '#20232a'],
  'south-sudan': ['#1e6fd0', '#f2d12c', '#111111', '#d01b2c', '#20232a'],
  sudan: ['#d01b2c', '#ffffff', '#111111', '#0a7a3d', '#20232a'],
  tanzania: ['#1e6fd0', '#f2d12c', '#111111', '#0a7a3d', '#20232a'],
  togo: ['#f2d12c', '#0a7a3d', '#d01b2c', '#1c3f7a', '#20232a'],
  uganda: ['#f2d12c', '#111111', '#d01b2c', '#0a7a3d', '#20232a'],
  zambia: ['#0a7a3d', '#f27c1e', '#111111', '#d01b2c', '#20232a'],
  zimbabwe: ['#f2d12c', '#0a7a3d', '#d01b2c', '#111111', '#20232a'],
  afghanistan: ['#d01b2c', '#111111', '#0a7a3d', '#1c3f7a', '#20232a'],
  bahrain: ['#d01b2c', '#ffffff', '#ffffff', '#0a7a3d', '#20232a'],
  bangladesh: ['#0a7a3d', '#d01b2c', '#ffffff', '#1c3f7a', '#20232a'],
  bhutan: ['#f27c1e', '#f2d12c', '#ffffff', '#20232a', '#f2c94c'],
  brunei: ['#f2d12c', '#111111', '#ffffff', '#d01b2c', '#20232a'],
  cambodia: ['#1c3f7a', '#d01b2c', '#ffffff', '#0a7a3d', '#20232a'],
  china: ['#d01b2c', '#f2d12c', '#ffffff', '#20232a', '#f2c94c'],
  taiwan: ['#1e6fd0', '#ffffff', '#d01b2c', '#0a7a3d', '#20232a'],
  guam: ['#1c3f7a', '#5aa9e6', '#d01b2c', '#f2d12c', '#20232a'],
  'hong-kong-sar-china': ['#d01b2c', '#ffffff', '#d01b2c', '#1c3f7a', '#20232a'],
  india: ['#1e6fd0', '#f27c1e', '#0a7a3d', '#20232a', '#f2c94c'],
  indonesia: ['#d01b2c', '#ffffff', '#d01b2c', '#0a7a3d', '#20232a'],
  iraq: ['#0a7a3d', '#ffffff', '#111111', '#1c3f7a', '#f2c94c'],
  jordan: ['#d01b2c', '#111111', '#0a7a3d', '#1c3f7a', '#20232a'],
  'north-korea': ['#d01b2c', '#1c3f7a', '#ffffff', '#0a7a3d', '#20232a'],
  kuwait: ['#1e6fd0', '#ffffff', '#d01b2c', '#0a7a3d', '#20232a'],
  kyrgyzstan: ['#d01b2c', '#f2d12c', '#ffffff', '#1c3f7a', '#20232a'],
  laos: ['#d01b2c', '#1c3f7a', '#ffffff', '#0a7a3d', '#20232a'],
  lebanon: ['#d01b2c', '#ffffff', '#0a7a3d', '#1c3f7a', '#20232a'],
  'macao-sar-china': ['#0a7a3d', '#ffffff', '#f2d12c', '#1c3f7a', '#20232a'],
  malaysia: ['#f2d12c', '#1c3f7a', '#d01b2c', '#0a7a3d', '#20232a'],
  maldives: ['#d01b2c', '#0a7a3d', '#ffffff', '#1c3f7a', '#20232a'],
  mongolia: ['#1e6fd0', '#d01b2c', '#f2d12c', '#0a7a3d', '#20232a'],
  'myanmar-burma': ['#f2d12c', '#0a7a3d', '#d01b2c', '#1c3f7a', '#20232a'],
  nepal: ['#d01b2c', '#1c3f7a', '#ffffff', '#0a7a3d', '#20232a'],
  oman: ['#d01b2c', '#ffffff', '#0a7a3d', '#1c3f7a', '#20232a'],
  pakistan: ['#0a7a3d', '#ffffff', '#0a7a3d', '#1c3f7a', '#20232a'],
  'palestinian-territories': ['#d01b2c', '#111111', '#0a7a3d', '#1c3f7a', '#20232a'],
  philippines: ['#1e6fd0', '#d01b2c', '#f2d12c', '#0a7a3d', '#20232a'],
  singapore: ['#d01b2c', '#ffffff', '#d01b2c', '#1c3f7a', '#20232a'],
  'sri-lanka': ['#8a1538', '#f2d12c', '#0a7a3d', '#1c3f7a', '#20232a'],
  syria: ['#d01b2c', '#ffffff', '#111111', '#0a7a3d', '#20232a'],
  tajikistan: ['#d01b2c', '#f2d12c', '#0a7a3d', '#1c3f7a', '#20232a'],
  thailand: ['#1c3f7a', '#d01b2c', '#ffffff', '#0a7a3d', '#20232a'],
  'timor-leste': ['#d01b2c', '#f2d12c', '#111111', '#1c3f7a', '#20232a'],
  turkmenistan: ['#0a7a3d', '#d01b2c', '#ffffff', '#1c3f7a', '#20232a'],
  'united-arab-emirates': ['#ffffff', '#d01b2c', '#0a7a3d', '#111111', '#f2c94c'],
  uzbekistan: ['#1e6fd0', '#ffffff', '#0a7a3d', '#d01b2c', '#20232a'],
  vietnam: ['#d01b2c', '#f2d12c', '#d01b2c', '#1c3f7a', '#20232a'],
  yemen: ['#d01b2c', '#ffffff', '#111111', '#0a7a3d', '#20232a'],
  albania: ['#d01b2c', '#111111', '#d01b2c', '#1c3f7a', '#20232a'],
  andorra: ['#f2d12c', '#1c3f7a', '#d01b2c', '#ffffff', '#20232a'],
  armenia: ['#d01b2c', '#1c3f7a', '#f27c1e', '#0a7a3d', '#20232a'],
  austria: ['#d01b2c', '#ffffff', '#d01b2c', '#111111', '#f2c94c'],
  azerbaijan: ['#1e6fd0', '#d01b2c', '#0a7a3d', '#f2d12c', '#20232a'],
  belarus: ['#d01b2c', '#0a7a3d', '#ffffff', '#1c3f7a', '#20232a'],
  'bosnia-herzegovina': ['#1c3f7a', '#f2d12c', '#ffffff', '#d01b2c', '#20232a'],
  bulgaria: ['#ffffff', '#0a7a3d', '#d01b2c', '#1c3f7a', '#20232a'],
  cyprus: ['#ffffff', '#f27c1e', '#1c3f7a', '#0a7a3d', '#20232a'],
  czechia: ['#d01b2c', '#1c3f7a', '#ffffff', '#0a7a3d', '#20232a'],
  estonia: ['#1e6fd0', '#111111', '#ffffff', '#d01b2c', '#20232a'],
  'faroe-islands': ['#ffffff', '#d01b2c', '#1e6fd0', '#0a7a3d', '#20232a'],
  finland: ['#ffffff', '#1c3f7a', '#ffffff', '#d01b2c', '#20232a'],
  georgia: ['#ffffff', '#d01b2c', '#1c3f7a', '#0a7a3d', '#20232a'],
  gibraltar: ['#d01b2c', '#ffffff', '#1c3f7a', '#0a7a3d', '#20232a'],
  greece: ['#ffffff', '#1c3f7a', '#1c3f7a', '#d01b2c', '#20232a'],
  hungary: ['#d01b2c', '#ffffff', '#0a7a3d', '#1c3f7a', '#20232a'],
  iceland: ['#1c3f7a', '#d01b2c', '#ffffff', '#0a7a3d', '#20232a'],
  ireland: ['#0a7a3d', '#ffffff', '#f27c1e', '#1c3f7a', '#20232a'],
  israel: ['#1e6fd0', '#ffffff', '#1e6fd0', '#f2d12c', '#20232a'],
  kazakhstan: ['#5aa9e6', '#f2d12c', '#ffffff', '#1c3f7a', '#20232a'],
  kosovo: ['#1c3f7a', '#f2d12c', '#ffffff', '#d01b2c', '#20232a'],
  latvia: ['#8a1538', '#ffffff', '#8a1538', '#1c3f7a', '#20232a'],
  liechtenstein: ['#1e6fd0', '#d01b2c', '#ffffff', '#0a7a3d', '#20232a'],
  lithuania: ['#f2d12c', '#0a7a3d', '#d01b2c', '#1c3f7a', '#20232a'],
  luxembourg: ['#d01b2c', '#ffffff', '#1e6fd0', '#f2d12c', '#20232a'],
  malta: ['#d01b2c', '#ffffff', '#d01b2c', '#1c3f7a', '#20232a'],
  moldova: ['#1c3f7a', '#f2d12c', '#d01b2c', '#0a7a3d', '#20232a'],
  montenegro: ['#c8102e', '#f2d12c', '#c8102e', '#1c3f7a', '#20232a'],
  'north-macedonia': ['#d01b2c', '#f2d12c', '#d01b2c', '#1c3f7a', '#20232a'],
  'northern-ireland': ['#0a7a3d', '#ffffff', '#0a7a3d', '#1c3f7a', '#20232a'],
  norway: ['#d01b2c', '#1c3f7a', '#ffffff', '#0a7a3d', '#20232a'],
  russia: ['#d01b2c', '#ffffff', '#1c3f7a', '#f2d12c', '#20232a'],
  romania: ['#f2d12c', '#d01b2c', '#1c3f7a', '#0a7a3d', '#20232a'],
  'san-marino': ['#5aa9e6', '#ffffff', '#5aa9e6', '#d01b2c', '#20232a'],
  scotland: ['#1c3f7a', '#ffffff', '#1c3f7a', '#f2d12c', '#20232a'],
  serbia: ['#c8102e', '#1c3f7a', '#ffffff', '#0a7a3d', '#20232a'],
  slovakia: ['#1e6fd0', '#ffffff', '#d01b2c', '#0a7a3d', '#20232a'],
  slovenia: ['#ffffff', '#1c3f7a', '#d01b2c', '#0a7a3d', '#20232a'],
  sweden: ['#f2d12c', '#1c3f7a', '#f2d12c', '#d01b2c', '#20232a'],
  ukraine: ['#f2d12c', '#1e6fd0', '#f2d12c', '#20232a', '#f2c94c'],
  wales: ['#c8102e', '#0a7a3d', '#ffffff', '#1c3f7a', '#20232a'],
  anguilla: ['#ffffff', '#1c3f7a', '#d01b2c', '#0a7a3d', '#20232a'],
  'antigua-barbuda': ['#d01b2c', '#111111', '#f2d12c', '#1c3f7a', '#20232a'],
  aruba: ['#5aa9e6', '#f2d12c', '#d01b2c', '#ffffff', '#20232a'],
  bahamas: ['#1e6fd0', '#f2d12c', '#111111', '#d01b2c', '#20232a'],
  barbados: ['#1e6fd0', '#f2d12c', '#111111', '#d01b2c', '#20232a'],
  belize: ['#1c3f7a', '#d01b2c', '#ffffff', '#0a7a3d', '#20232a'],
  bermuda: ['#d01b2c', '#1c3f7a', '#ffffff', '#0a7a3d', '#20232a'],
  'british-virgin-islands': ['#1e6fd0', '#ffffff', '#d01b2c', '#0a7a3d', '#20232a'],
  'cayman-islands': ['#1c3f7a', '#d01b2c', '#ffffff', '#0a7a3d', '#20232a'],
  cuba: ['#d01b2c', '#1c3f7a', '#ffffff', '#0a7a3d', '#20232a'],
  curacao: ['#1c3f7a', '#f2d12c', '#ffffff', '#d01b2c', '#20232a'],
  dominica: ['#0a7a3d', '#f2d12c', '#111111', '#d01b2c', '#20232a'],
  'dominican-republic': ['#1e6fd0', '#d01b2c', '#ffffff', '#0a7a3d', '#20232a'],
  'el-salvador': ['#1e6fd0', '#ffffff', '#1e6fd0', '#d01b2c', '#20232a'],
  grenada: ['#d01b2c', '#f2d12c', '#0a7a3d', '#1c3f7a', '#20232a'],
  guatemala: ['#5aa9e6', '#ffffff', '#5aa9e6', '#d01b2c', '#20232a'],
  guyana: ['#0a7a3d', '#f2d12c', '#d01b2c', '#1c3f7a', '#20232a'],
  haiti: ['#1e6fd0', '#d01b2c', '#ffffff', '#0a7a3d', '#20232a'],
  honduras: ['#ffffff', '#1e6fd0', '#1e6fd0', '#d01b2c', '#20232a'],
  jamaica: ['#f2d12c', '#111111', '#0a7a3d', '#1c3f7a', '#20232a'],
  montserrat: ['#0a7a3d', '#f2d12c', '#111111', '#d01b2c', '#20232a'],
  nicaragua: ['#1e6fd0', '#ffffff', '#1e6fd0', '#d01b2c', '#20232a'],
  panama: ['#d01b2c', '#1c3f7a', '#ffffff', '#0a7a3d', '#20232a'],
  'puerto-rico': ['#d01b2c', '#ffffff', '#1e6fd0', '#0a7a3d', '#20232a'],
  'st-kitts-nevis': ['#0a7a3d', '#f2d12c', '#111111', '#d01b2c', '#20232a'],
  'st-lucia': ['#5aa9e6', '#f2d12c', '#111111', '#d01b2c', '#20232a'],
  'st-vincent-grenadines': ['#1e6fd0', '#f2d12c', '#0a7a3d', '#d01b2c', '#20232a'],
  suriname: ['#0a7a3d', '#ffffff', '#d01b2c', '#1c3f7a', '#20232a'],
  'trinidad-tobago': ['#d01b2c', '#111111', '#ffffff', '#0a7a3d', '#20232a'],
  'turks-caicos-islands': ['#5aa9e6', '#ffffff', '#f2d12c', '#d01b2c', '#20232a'],
  'u-s-virgin-islands': ['#ffffff', '#1c3f7a', '#d01b2c', '#0a7a3d', '#20232a'],
  'american-samoa': ['#1c3f7a', '#d01b2c', '#ffffff', '#0a7a3d', '#20232a'],
  'cook-islands': ['#0a7a3d', '#ffffff', '#1e6fd0', '#d01b2c', '#20232a'],
  fiji: ['#5aa9e6', '#ffffff', '#5aa9e6', '#0a7a3d', '#20232a'],
  'new-caledonia': ['#1e6fd0', '#d01b2c', '#ffffff', '#0a7a3d', '#20232a'],
  'new-zealand': ['#ffffff', '#111111', '#ffffff', '#1c3f7a', '#20232a'],
  'papua-new-guinea': ['#d01b2c', '#111111', '#f2d12c', '#0a7a3d', '#20232a'],
  samoa: ['#1e6fd0', '#d01b2c', '#ffffff', '#0a7a3d', '#20232a'],
  'solomon-islands': ['#1e6fd0', '#f2d12c', '#0a7a3d', '#d01b2c', '#20232a'],
  'french-polynesia': ['#d01b2c', '#ffffff', '#d01b2c', '#1c3f7a', '#20232a'],
  tonga: ['#d01b2c', '#ffffff', '#d01b2c', '#1c3f7a', '#20232a'],
  vanuatu: ['#d01b2c', '#0a7a3d', '#f2d12c', '#1c3f7a', '#20232a'],
  bolivia: ['#0a7a3d', '#f2d12c', '#d01b2c', '#1c3f7a', '#20232a'],
  chile: ['#d01b2c', '#ffffff', '#1c3f7a', '#f2d12c', '#20232a'],
  colombia: ['#f2d12c', '#1c3f7a', '#d01b2c', '#0a7a3d', '#20232a'],
  paraguay: ['#d01b2c', '#ffffff', '#1c3f7a', '#f2d12c', '#20232a'],
  peru: ['#ffffff', '#d01b2c', '#d01b2c', '#1c3f7a', '#20232a'],
  venezuela: ['#8a1538', '#f2d12c', '#1c3f7a', '#0a7a3d', '#20232a']
};

// Paleta de reserva: nada de branco genérico. O par é escolhido pelo id, então
// a mesma seleção tem sempre a mesma cor entre partidas e na carreira.
const FALLBACK_KITS = [
  ['#1c3f7a', '#f2d12c', '#ffffff', '#0a7a3d', '#20232a'],
  ['#c8102e', '#ffffff', '#111111', '#1c3f7a', '#f2c94c'],
  ['#0a7a3d', '#f2d12c', '#ffffff', '#d01b2c', '#20232a'],
  ['#f27c1e', '#111111', '#ffffff', '#1c3f7a', '#20232a'],
  ['#5aa9e6', '#ffffff', '#1c3f7a', '#d01b2c', '#20232a'],
  ['#8a1538', '#f2d12c', '#ffffff', '#0a7a3d', '#20232a']
];

function hashId(id) {
  let hash = 0;
  for (let index = 0; index < String(id).length; index += 1) hash = (hash * 31 + String(id).charCodeAt(index)) >>> 0;
  return hash;
}

/**
 * Cores de uma seleção: as do cadastro (Copa clássica) quando existem, senão a
 * camisa desta tabela, senão uma paleta estável escolhida pelo id.
 */
export function nationColors(team) {
  if (!team?.id) return null;
  const existing = team.colors;
  // `#f0f1f4` é o preenchimento antigo das 179 seleções geradas: não é uma
  // cor de camisa, é a ausência de cor.
  const generic = !existing || String(existing.primary || '').toLowerCase() === '#f0f1f4';
  if (!generic) return withShorts(team.id, existing);
  const [primary, secondary, trim, keeperPrimary, keeperSecondary] =
    NATION_KITS[team.id] || FALLBACK_KITS[hashId(team.id) % FALLBACK_KITS.length];
  return withShorts(team.id, { primary, secondary, trim, keeperPrimary, keeperSecondary });
}

/** Uniformes da seleção para o carrossel do Kick Off (casa e visitante). */
export function nationKits(team) {
  const colors = nationColors(team) || withShorts(team?.id, { primary: '#f6d61b', secondary: '#16733b', trim: '#ffffff', keeperPrimary: '#246bd1', keeperSecondary: '#10274b' });
  const name = team?.name || 'Seleção';
  const homeShorts = colors.shorts || '#183891';
  const homeSocks = colors.socks || '#ffffff';
  return [
    {
      name: `${name} Home`,
      colors: { primary: colors.primary, secondary: colors.secondary, trim: colors.trim, shorts: homeShorts, socks: homeSocks, keeperPrimary: colors.keeperPrimary, keeperSecondary: colors.keeperSecondary },
      pattern: 'solid',
      shorts: homeShorts,
      socks: homeSocks,
      keeper: { primary: colors.keeperPrimary || '#f2c94c', secondary: colors.keeperSecondary || '#20232a' }
    },
    (() => {
      const away = NATION_AWAY[team?.id];
      const primary = away?.primary || colors.secondary;
      const secondary = away?.secondary || colors.primary;
      const trim = away?.trim || colors.trim;
      const shorts = away?.shorts || colors.primary;
      const socks = away?.socks || colors.primary;
      return {
        name: `${name} Away`,
        colors: { primary, secondary, trim, shorts, socks, keeperPrimary: colors.keeperSecondary, keeperSecondary: colors.keeperPrimary },
        pattern: 'solid',
        shorts,
        socks,
        keeper: { primary: colors.keeperSecondary || '#20232a', secondary: colors.keeperPrimary || '#f2c94c' }
      };
    })()
  ];
}

export const NATION_KIT_COLORS = NATION_KITS;

/**
 * Calção e meiões do uniforme de verdade — a camisa sozinha não basta.
 * Brasil casa: amarelo + calção AZUL (nunca verde). Argentina 2022: calção preto.
 */
/** Segundo uniforme: Brasil = camisa azul e calção branco. */
export const NATION_AWAY = {
  brazil: { primary: '#1c4fd8', secondary: '#ffffff', trim: '#ffffff', shorts: '#ffffff', socks: '#1c4fd8' }
};

export const NATION_SHORTS = {
  brazil: { shorts: '#183891', socks: '#ffffff' },
  argentina: { shorts: '#1a1a1a', socks: '#ffffff' },
  portugal: { shorts: '#176b43', socks: '#b82132' },
  france: { shorts: '#f4f4f4', socks: '#e6424a' },
  england: { shorts: '#19366f', socks: '#f4f4f4' },
  spain: { shorts: '#1a3d8f', socks: '#d92332' },
  germany: { shorts: '#222222', socks: '#f3f3f3' },
  italy: { shorts: '#f5f5f5', socks: '#1566a5' },
  netherlands: { shorts: '#f36c21', socks: '#f36c21' },
  belgium: { shorts: '#d92735', socks: '#d92735' },
  croatia: { shorts: '#ffffff', socks: '#d92738' },
  uruguay: { shorts: '#17233f', socks: '#78c9e8' },
  mexico: { shorts: '#087346', socks: '#ffffff' },
  poland: { shorts: '#d6243b', socks: '#ffffff' },
  usa: { shorts: '#1b3f8b', socks: '#d9273f' },
  japan: { shorts: '#173b80', socks: '#173b80' },
  'south-korea': { shorts: '#d9273c', socks: '#d9273c' },
  morocco: { shorts: '#c82335', socks: '#c82335' },
  senegal: { shorts: '#ffffff', socks: '#087b45' },
  ghana: { shorts: '#d7263d', socks: '#d7263d' },
  cameroon: { shorts: '#087748', socks: '#087748' },
  switzerland: { shorts: '#e32035', socks: '#e32035' },
  serbia: { shorts: '#173f8c', socks: '#c9233b' },
  denmark: { shorts: '#ffffff', socks: '#d51d35' },
  tunisia: { shorts: '#ffffff', socks: '#d32639' },
  australia: { shorts: '#08794a', socks: '#f2cd31' },
  wales: { shorts: '#d51d36', socks: '#d51d36' },
  iran: { shorts: '#ffffff', socks: '#d92336' },
  'saudi-arabia': { shorts: '#ffffff', socks: '#08784d' },
  ecuador: { shorts: '#15499a', socks: '#d92732' },
  qatar: { shorts: '#8a1538', socks: '#8a1538' },
  'costa-rica': { shorts: '#174a92', socks: '#d72839' },
  canada: { shorts: '#d92639', socks: '#d92639' },
  chile: { shorts: '#1c3f7a', socks: '#d01b2c' },
  colombia: { shorts: '#1c3f7a', socks: '#d01b2c' },
  peru: { shorts: '#ffffff', socks: '#d01b2c' },
  paraguay: { shorts: '#1c3f7a', socks: '#d01b2c' },
  nigeria: { shorts: '#0a7a3d', socks: '#ffffff' },
  egypt: { shorts: '#ffffff', socks: '#d01b2c' },
  algeria: { shorts: '#0a7a3d', socks: '#ffffff' },
  ireland: { shorts: '#ffffff', socks: '#0a7a3d' },
  scotland: { shorts: '#1c3f7a', socks: '#1c3f7a' },
  sweden: { shorts: '#1c3f7a', socks: '#f2d12c' },
  norway: { shorts: '#ffffff', socks: '#d01b2c' },
  ukraine: { shorts: '#1e6fd0', socks: '#f2d12c' }
};

function luminance(hex) {
  const value = String(hex || '').replace('#', '');
  if (value.length < 6) return 0.5;
  const r = parseInt(value.slice(0, 2), 16) / 255;
  const g = parseInt(value.slice(2, 4), 16) / 255;
  const b = parseInt(value.slice(4, 6), 16) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function defaultShorts(primary, secondary) {
  if (luminance(primary) > 0.55) {
    return luminance(secondary) > 0.55 ? '#1a2744' : secondary;
  }
  return '#f4f4f4';
}

function withShorts(id, colors) {
  const extra = NATION_SHORTS[id];
  const shorts = extra?.shorts || colors.shorts || defaultShorts(colors.primary, colors.secondary);
  const socks = extra?.socks || colors.socks || (luminance(colors.primary) > 0.55 ? colors.primary : colors.secondary);
  return { ...colors, shorts, socks };
}
