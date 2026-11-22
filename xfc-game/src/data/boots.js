// Catálogo de chuteiras.
//
// Antes só existiam quatro cores soltas (Preta, Branca, Vermelha, Verde-lima),
// sem modelo nem marca: a chuteira era um recolor da malha do atleta. Aqui cada
// modelo tem nome, marca, cor da sola e a "rachura" (a faixa de velocidade),
// e o modelo 3D aplica isso na geometria do pé — em vez de pintar o tênis
// inteiro de uma cor só.
//
// Os nomes de marca/modelo são referências editoriais do mundo do futebol; o
// desenho no pé continua sendo a geometria do rig (não há malha de marca
// licenciada dentro do jogo).

/**
 * Velocidade (0–100), controle (0–100) e peso em gramas. Serve à leitura da
 * ficha e a um ajuste pequeno de "feel" no drible — não é pay-to-win: a
 * diferença entre o modelo mais rápido e o mais pesado é de 3% no ritmo.
 */
export const BOOTS = {
  'speed-black': {
    id: 'speed-black', brand: 'Velox', model: 'Falcon Preto',
    color: '#171b20', accent: '#ffd84a', sole: '#d8d8d2', laces: '#7a7f88',
    speed: 94, control: 74, weight: 178, plate: 'speed', studs: 6,
    desc: 'Chuteira de velocidade: cabedal liso, sola fina e oito travas curtas.',
    mark: '◆'
  },
  'speed-white': {
    id: 'speed-white', brand: 'Velox', model: 'Falcon Branco',
    color: '#f3f3ed', accent: '#1d2430', sole: '#1d2430', laces: '#f3f3ed',
    speed: 93, control: 75, weight: 180, plate: 'speed', studs: 6,
    desc: 'A mesma Falcon em branco gelo, com detalhe escuro na face externa.',
    mark: '▲'
  },
  'acid-green': {
    id: 'acid-green', brand: 'Velox', model: 'Falcon Neon',
    color: '#b3ef36', accent: '#101418', sole: '#101418', laces: '#e8ffb0',
    speed: 91, control: 76, weight: 185, plate: 'speed', studs: 6,
    desc: 'Verde-lima de série especial: a mais chamativa dentro de campo.',
    mark: '◈'
  },
  'red-court': {
    id: 'red-court', brand: 'Kinex', model: 'Arena Vermelha',
    color: '#ee4235', accent: '#ffffff', sole: '#f2f2ec', laces: '#ffffff',
    speed: 82, control: 88, weight: 205, plate: 'control', studs: 8,
    desc: 'Couro com costura em relevo e palmilha alta: feita para o passe curto.',
    mark: '◇'
  },
  'blue-control': {
    id: 'blue-control', brand: 'Kinex', model: 'Arena Azul',
    color: '#2563d8', accent: '#ffffff', sole: '#f2f2ec', laces: '#ffffff',
    speed: 80, control: 90, weight: 210, plate: 'control', studs: 8,
    desc: 'Cabedal texturizado que segura a bola no primeiro toque.',
    mark: '◉'
  },
  'gold-elite': {
    id: 'gold-elite', brand: 'Aurea', model: 'Edição Ouro',
    color: '#d8ab4f', accent: '#3a2708', sole: '#2b2116', laces: '#f7e6b8',
    speed: 86, control: 92, weight: 196, plate: 'control', studs: 8,
    desc: 'Chuteira de coleção: acabamento metálico e detalhe em relevo.',
    mark: '✦'
  },
  'classic-black': {
    id: 'classic-black', brand: 'Terra', model: 'Clássica Preta',
    color: '#141414', accent: '#f0f0e6', sole: '#8a6a3a', laces: '#141414',
    speed: 72, control: 86, weight: 232, plate: 'classic', studs: 6,
    desc: 'Couro liso e travas de alumínio: a chuteira de quem cresceu no campo.',
    mark: '■'
  }
};

export const BOOT_LIST = Object.values(BOOTS);

/** Compatível com o que já era salvo: a cor antiga vira um modelo do catálogo. */
const LEGACY_COLORS = {
  '#171b20': 'speed-black', '#f3f3ed': 'speed-white',
  '#ee4235': 'red-court', '#b3ef36': 'acid-green'
};

/**
 * Devolve o modelo de chuteira a partir do que está salvo no atleta. Aceita o
 * id novo, a cor antiga (saves de antes deste catálogo) ou nada.
 */
export function bootFor(value) {
  if (!value) return BOOTS['speed-black'];
  if (typeof value === 'object' && value.id && BOOTS[value.id]) return BOOTS[value.id];
  const key = String(value).toLowerCase();
  if (BOOTS[key]) return BOOTS[key];
  if (LEGACY_COLORS[key]) return BOOTS[LEGACY_COLORS[key]];
  return BOOTS['speed-black'];
}

/** Rótulos para a tela de personalização: "Marca · Modelo". */
export function bootOptions() {
  return Object.fromEntries(BOOT_LIST.map(boot => [boot.id, `${boot.brand} · ${boot.model}`]));
}
