// Elenco e dados dos dois clubes que existem no XFC por enquanto.
//
// Os retratos são gerados para o projeto (sem material de terceiros) e ficam em
// `assets/players/`. As médias seguem o formato do menu de FC: overall, forma
// recente e os seis atributos principais usados na tela de elenco.

export const POSITION_LABELS = {
  GK: 'Goleiro',
  CB: 'Zagueiro',
  LB: 'Lateral esquerdo',
  RB: 'Lateral direito',
  CDM: 'Meia defensivo',
  CM: 'Meia',
  CAM: 'Meia ofensivo',
  LW: 'Ponta esquerda',
  RW: 'Ponta direita',
  ST: 'Atacante'
};

/** Posições do 4-3-3 desenhadas no campo da tela de elenco. */
export const FORMATION_433 = [
  { pos: 'GK', x: 50, y: 90 },
  { pos: 'LB', x: 14, y: 68 },
  { pos: 'CB', x: 37, y: 74 },
  { pos: 'CB', x: 63, y: 74 },
  { pos: 'RB', x: 86, y: 68 },
  { pos: 'CM', x: 28, y: 50 },
  { pos: 'CDM', x: 50, y: 58 },
  { pos: 'CM', x: 72, y: 50 },
  { pos: 'LW', x: 13, y: 32 },
  { pos: 'ST', x: 50, y: 22 },
  { pos: 'RW', x: 87, y: 32 }
];

const photo = slug => `assets/players/${slug}.jpg`;

export const TEAMS = [
  {
    id: 'fc-barcelona',
    name: 'FC Barcelona',
    shortName: 'Barcelona',
    nickname: 'Barça',
    city: 'Barcelona',
    country: 'Espanha',
    flag: 'es',
    league: 'LaLiga',
    stadium: 'Estadi Olímpic Lluís Companys',
    crest: 'assets/crests/fc-barcelona.png',
    colors: { primary: '#a50044', secondary: '#004d98', accent: '#edbb00' },
    ratings: { att: 87, mid: 89, def: 83, ovr: 86 },
    stars: 4.5,
    formation: '4-3-3',
    players: [
      {
        id: 'barca-ter-stegen', name: 'ter Stegen', fullName: 'Marc-André ter Stegen', number: 1,
        pos: 'GK', ovr: 87, potential: 88, form: 'D', age: 33, height: 187, foot: 'Left',
        role: 'Shot Stopper', focus: 'Support', celebration: 'Slide', photo: photo('marc-andre-ter-stegen'),
        stats: { pace: 55, shooting: 28, passing: 80, dribbling: 65, defending: 35, physical: 80 }
      },
      {
        id: 'barca-kounde', name: 'Koundé', fullName: 'Jules Koundé', number: 23,
        pos: 'RB', ovr: 85, potential: 88, form: 'W', age: 27, height: 181, foot: 'Right',
        role: 'Fullback', focus: 'Attack', celebration: 'None', photo: photo('jules-kounde'),
        stats: { pace: 86, shooting: 70, passing: 80, dribbling: 84, defending: 82, physical: 84 }
      },
      {
        id: 'barca-araujo', name: 'Araújo', fullName: 'Ronald Araújo', number: 4,
        pos: 'CB', ovr: 86, potential: 88, form: 'W', age: 27, height: 189, foot: 'Right',
        role: 'Ball-Playing Defender', focus: 'Attack', celebration: 'None', photo: photo('ronald-araujo'),
        stats: { pace: 81, shooting: 65, passing: 75, dribbling: 76, defending: 88, physical: 89 }
      },
      {
        id: 'barca-cubarsi', name: 'Cubarsí', fullName: 'Pau Cubarsí', number: 33,
        pos: 'CB', ovr: 79, potential: 88, form: 'W', age: 19, height: 183, foot: 'Right',
        role: 'Stopper', focus: 'Support', celebration: 'None', photo: photo('pau-cubarsi'),
        stats: { pace: 76, shooting: 58, passing: 72, dribbling: 70, defending: 80, physical: 84 }
      },
      {
        id: 'barca-roberto', name: 'Sergi Roberto', fullName: 'Sergi Roberto Carnicer', number: 20,
        pos: 'LB', ovr: 81, potential: 82, form: 'D', age: 32, height: 180, foot: 'Right',
        role: 'Fullback', focus: 'Support', celebration: 'None', photo: photo('sergi-roberto'),
        stats: { pace: 78, shooting: 68, passing: 84, dribbling: 80, defending: 80, physical: 78 }
      },
      {
        id: 'barca-pedri', name: 'Pedri', fullName: 'Pedro González López', number: 8,
        pos: 'CM', ovr: 88, potential: 91, form: 'W', age: 23, height: 180, foot: 'Right',
        role: 'Deep-lying Playmaker', focus: 'Support', celebration: 'None', photo: photo('pedri'),
        stats: { pace: 78, shooting: 78, passing: 92, dribbling: 89, defending: 70, physical: 68 }
      },
      {
        id: 'barca-de-jong', name: 'De Jong', fullName: 'Frenkie de Jong', number: 21,
        pos: 'CM', ovr: 85, potential: 88, form: 'W', age: 28, height: 180, foot: 'Left',
        role: 'Box-to-Box', focus: 'Attack', celebration: 'None', photo: photo('frenkie-de-jong'),
        stats: { pace: 76, shooting: 82, passing: 86, dribbling: 84, defending: 78, physical: 84 }
      },
      {
        id: 'barca-olmo', name: 'Olmo', fullName: 'Dani Olmo', number: 20,
        pos: 'CAM', ovr: 87, potential: 90, form: 'W', age: 26, height: 180, foot: 'Left',
        role: 'Advanced Playmaker', focus: 'Attack', celebration: 'None', photo: photo('dani-olmo'),
        stats: { pace: 82, shooting: 84, passing: 90, dribbling: 88, defending: 58, physical: 72 }
      },
      {
        id: 'barca-yamal', name: 'Yamal', fullName: 'Lamine Yamal', number: 19,
        pos: 'RW', ovr: 85, potential: 93, form: 'W', age: 19, height: 182, foot: 'Left',
        role: 'Wide Playmaker', focus: 'Attack', celebration: 'None', photo: photo('lamine-yamal'),
        stats: { pace: 87, shooting: 80, passing: 82, dribbling: 88, defending: 40, physical: 68 }
      },
      {
        id: 'barca-raphinha', name: 'Raphinha', fullName: 'Raphael Dias Belloli', number: 11,
        pos: 'LW', ovr: 87, potential: 88, form: 'W', age: 29, height: 176, foot: 'Left',
        role: 'Inside Forward', focus: 'Attack', celebration: 'None', photo: photo('raphinha'),
        stats: { pace: 86, shooting: 86, passing: 83, dribbling: 87, defending: 45, physical: 76 }
      },
      {
        id: 'barca-lewandowski', name: 'Lewandowski', fullName: 'Robert Lewandowski', number: 9,
        pos: 'ST', ovr: 89, potential: 89, form: 'W', age: 37, height: 184, foot: 'Right',
        role: 'Advanced Forward', focus: 'Attack', celebration: 'None', photo: photo('robert-lewandowski'),
        stats: { pace: 78, shooting: 92, passing: 80, dribbling: 84, defending: 40, physical: 82 }
      }
    ],
    substitutes: [
      { id: 'barca-gavi', name: 'Gavi', fullName: 'Pablo Martín Páez Gavira', number: 6, pos: 'CM', ovr: 82, potential: 88, form: 'D', age: 21, height: 171, foot: 'Right', role: 'Shadow Striker', focus: 'Attack', celebration: 'None', photo: photo('gavi'), stats: { pace: 80, shooting: 78, passing: 82, dribbling: 85, defending: 74, physical: 74 } },
      { id: 'barca-ferran', name: 'Ferrán Torres', fullName: 'Ferrán Torres Gasset', number: 7, pos: 'RW', ovr: 81, potential: 84, form: 'W', age: 26, height: 183, foot: 'Left', role: 'Winger', focus: 'Attack', celebration: 'None', photo: photo('ferran-torres'), stats: { pace: 85, shooting: 80, passing: 76, dribbling: 83, defending: 42, physical: 74 } },
      { id: 'barca-rashford', name: 'Rashford', fullName: 'Marcus Rashford', number: 18, pos: 'LW', ovr: 82, potential: 84, form: 'D', age: 28, height: 180, foot: 'Right', role: 'Inside Forward', focus: 'Attack', celebration: 'None', photo: photo('marcus-rashford'), stats: { pace: 88, shooting: 82, passing: 78, dribbling: 85, defending: 35, physical: 78 } },
      { id: 'barca-gundogan', name: 'Gündoğan', fullName: 'İlkay Gündoğan', number: 22, pos: 'CM', ovr: 84, potential: 84, form: 'W', age: 35, height: 180, foot: 'Right', role: 'Deep-lying Playmaker', focus: 'Support', celebration: 'None', photo: photo('ilkay-gundogan'), stats: { pace: 70, shooting: 80, passing: 90, dribbling: 82, defending: 76, physical: 78 } },
      { id: 'barca-inaki-pena', name: 'Iñaki Peña', fullName: 'Iñaki Peña Garcia', number: 13, pos: 'GK', ovr: 76, potential: 84, form: 'D', age: 27, height: 187, foot: 'Right', role: 'Shot Stopper', focus: 'Support', celebration: 'None', photo: photo('inaki-pena'), stats: { pace: 54, shooting: 26, passing: 70, dribbling: 58, defending: 32, physical: 78 } },
      { id: 'barca-fermin', name: 'Fermín López', fullName: 'Fermín López García', number: 32, pos: 'CAM', ovr: 78, potential: 86, form: 'W', age: 22, height: 173, foot: 'Left', role: 'Shadow Striker', focus: 'Attack', celebration: 'None', photo: photo('fermin-lopez'), stats: { pace: 83, shooting: 76, passing: 82, dribbling: 84, defending: 55, physical: 66 } },
      { id: 'barca-casado', name: 'Casadó', fullName: 'Marc Casadó Torras', number: 17, pos: 'CDM', ovr: 76, potential: 84, form: 'D', age: 22, height: 180, foot: 'Right', role: 'Anchor', focus: 'Support', celebration: 'None', photo: photo('marc-casado'), stats: { pace: 74, shooting: 62, passing: 80, dribbling: 76, defending: 80, physical: 78 } }
    ]
  },
  {
    id: 'real-madrid',
    name: 'Real Madrid',
    shortName: 'Real Madrid',
    nickname: 'Los Blancos',
    city: 'Madrid',
    country: 'Espanha',
    flag: 'es',
    league: 'LaLiga',
    stadium: 'Santiago Bernabéu',
    crest: 'assets/crests/real-madrid.png',
    colors: { primary: '#febe10', secondary: '#ffffff', accent: '#00529f' },
    ratings: { att: 91, mid: 90, def: 84, ovr: 88 },
    stars: 5,
    formation: '4-3-3',
    players: [
      {
        id: 'madrid-courtois', name: 'Courtois', fullName: 'Thibaut Courtois', number: 1,
        pos: 'GK', ovr: 89, potential: 89, form: 'D', age: 34, height: 200, foot: 'Left',
        role: 'Shot Stopper', focus: 'Support', celebration: 'None', photo: photo('thibaut-courtois'),
        stats: { pace: 58, shooting: 30, passing: 78, dribbling: 62, defending: 38, physical: 84 }
      },
      {
        id: 'madrid-carvajal', name: 'Carvajal', fullName: 'Daniel Carvajal', number: 2,
        pos: 'RB', ovr: 84, potential: 84, form: 'W', age: 34, height: 178, foot: 'Right',
        role: 'Fullback', focus: 'Attack', celebration: 'None', photo: photo('dani-carvajal'),
        stats: { pace: 84, shooting: 70, passing: 82, dribbling: 80, defending: 80, physical: 76 }
      },
      {
        id: 'madrid-rudiger', name: 'Rüdiger', fullName: 'Antonio Rüdiger', number: 22,
        pos: 'CB', ovr: 86, potential: 87, form: 'W', age: 33, height: 190, foot: 'Right',
        role: 'Ball-Playing Defender', focus: 'Attack', celebration: 'None', photo: photo('antonio-rudiger'),
        stats: { pace: 82, shooting: 62, passing: 74, dribbling: 72, defending: 88, physical: 90 }
      },
      {
        id: 'madrid-militao', name: 'Militão', fullName: 'Éder Militão', number: 3,
        pos: 'CB', ovr: 85, potential: 87, form: 'W', age: 28, height: 186, foot: 'Right',
        role: 'Stopper', focus: 'Attack', celebration: 'None', photo: photo('eder-militao'),
        stats: { pace: 85, shooting: 68, passing: 76, dribbling: 78, defending: 85, physical: 87 }
      },
      {
        id: 'madrid-mendy', name: 'Mendy', fullName: 'Ferland Mendy', number: 23,
        pos: 'LB', ovr: 80, potential: 84, form: 'D', age: 30, height: 180, foot: 'Right',
        role: 'Fullback', focus: 'Attack', celebration: 'None', photo: photo('ferland-mendy'),
        stats: { pace: 85, shooting: 66, passing: 78, dribbling: 80, defending: 76, physical: 78 }
      },
      {
        id: 'madrid-valverde', name: 'Valverde', fullName: 'Federico Valverde', number: 15,
        pos: 'CM', ovr: 88, potential: 89, form: 'W', age: 28, height: 182, foot: 'Right',
        role: 'Box-to-Box', focus: 'Attack', celebration: 'None', photo: photo('federico-valverde'),
        stats: { pace: 83, shooting: 82, passing: 90, dribbling: 86, defending: 84, physical: 88 }
      },
      {
        id: 'madrid-tchouameni', name: 'Tchouaméni', fullName: 'Aurélien Tchouaméni', number: 18,
        pos: 'CDM', ovr: 87, potential: 90, form: 'W', age: 25, height: 186, foot: 'Right',
        role: 'Anchor', focus: 'Support', celebration: 'None', photo: photo('aurelien-tchouameni'),
        stats: { pace: 79, shooting: 72, passing: 88, dribbling: 84, defending: 87, physical: 88 }
      },
      {
        id: 'madrid-bellingham', name: 'Bellingham', fullName: 'Jude Bellingham', number: 5,
        pos: 'CM', ovr: 89, potential: 92, form: 'W', age: 22, height: 183, foot: 'Right',
        role: 'Advanced Playmaker', focus: 'Attack', celebration: 'None', photo: photo('jude-bellingham'),
        stats: { pace: 84, shooting: 85, passing: 88, dribbling: 90, defending: 70, physical: 84 }
      },
      {
        id: 'madrid-rodrygo', name: 'Rodrygo', fullName: 'Rodrygo Goes', number: 11,
        pos: 'RW', ovr: 86, potential: 90, form: 'W', age: 23, height: 178, foot: 'Right',
        role: 'Inside Forward', focus: 'Attack', celebration: 'None', photo: photo('rodrygo'),
        stats: { pace: 89, shooting: 84, passing: 80, dribbling: 88, defending: 40, physical: 70 }
      },
      {
        id: 'madrid-mbappe', name: 'Mbappé', fullName: 'Kylian Mbappé', number: 9,
        pos: 'ST', ovr: 91, potential: 92, form: 'W', age: 27, height: 183, foot: 'Right',
        role: 'Advanced Forward', focus: 'Attack', celebration: 'None', photo: photo('kylian-mbappe'),
        stats: { pace: 96, shooting: 90, passing: 84, dribbling: 93, defending: 35, physical: 78 }
      },
      {
        id: 'madrid-vinicius', name: 'Vinícius Jr', fullName: 'Vinícius Júnior', number: 7,
        pos: 'LW', ovr: 90, potential: 92, form: 'W', age: 26, height: 179, foot: 'Right',
        role: 'Inside Forward', focus: 'Attack', celebration: 'None', photo: photo('vinicius-junior'),
        stats: { pace: 93, shooting: 86, passing: 82, dribbling: 93, defending: 35, physical: 74 }
      }
    ],
    substitutes: [
      { id: 'madrid-modric', name: 'Modrić', fullName: 'Luka Modrić', number: 10, pos: 'CM', ovr: 86, potential: 86, form: 'W', age: 39, height: 172, foot: 'Right', role: 'Deep-lying Playmaker', focus: 'Support', celebration: 'None', photo: photo('luka-modric'), stats: { pace: 74, shooting: 80, passing: 92, dribbling: 86, defending: 74, physical: 70 } },
      { id: 'madrid-brahim', name: 'Brahim Díaz', fullName: 'Brahim Díaz Chakiri', number: 10, pos: 'CAM', ovr: 84, potential: 87, form: 'W', age: 26, height: 171, foot: 'Left', role: 'Advanced Playmaker', focus: 'Attack', celebration: 'None', photo: photo('brahim-diaz'), stats: { pace: 82, shooting: 80, passing: 88, dribbling: 88, defending: 40, physical: 66 } },
      { id: 'madrid-guler', name: 'Arda Güler', fullName: 'Arda Güler', number: 24, pos: 'CAM', ovr: 82, potential: 89, form: 'W', age: 21, height: 178, foot: 'Left', role: 'Advanced Playmaker', focus: 'Attack', celebration: 'None', photo: photo('arda-guler'), stats: { pace: 80, shooting: 78, passing: 86, dribbling: 85, defending: 45, physical: 68 } },
      { id: 'madrid-mastantuono', name: 'Mastantuono', fullName: 'Franco Mastantuono', number: 8, pos: 'CAM', ovr: 80, potential: 90, form: 'W', age: 18, height: 179, foot: 'Left', role: 'Wide Playmaker', focus: 'Attack', celebration: 'None', photo: photo('franco-mastantuono'), stats: { pace: 84, shooting: 76, passing: 84, dribbling: 86, defending: 38, physical: 62 } },
      { id: 'madrid-endrick', name: 'Endrick', fullName: 'Endrick Rodrigues dos Santos', number: 16, pos: 'ST', ovr: 79, potential: 90, form: 'D', age: 19, height: 173, foot: 'Right', role: 'Pressing Forward', focus: 'Attack', celebration: 'None', photo: photo('endrick'), stats: { pace: 88, shooting: 80, passing: 72, dribbling: 82, defending: 35, physical: 74 } },
      { id: 'madrid-alaba', name: 'Alaba', fullName: 'David Alaba', number: 6, pos: 'CB', ovr: 82, potential: 82, form: 'D', age: 33, height: 187, foot: 'Left', role: 'Stopper', focus: 'Support', celebration: 'None', photo: photo('david-alaba'), stats: { pace: 80, shooting: 66, passing: 78, dribbling: 76, defending: 84, physical: 86 } },
      { id: 'madrid-navas', name: 'Navas', fullName: 'Keylor Navas', number: 13, pos: 'GK', ovr: 79, potential: 79, form: 'D', age: 38, height: 185, foot: 'Right', role: 'Shot Stopper', focus: 'Support', celebration: 'None', photo: photo('keylor-navas'), stats: { pace: 56, shooting: 28, passing: 76, dribbling: 62, defending: 34, physical: 80 } }
    ]
  },
  {
    id: 'ibis-esporte',
    name: 'Ibis Esporte',
    shortName: 'Ibis',
    nickname: 'Ibis',
    city: 'Sobral',
    country: 'Brasil',
    flag: 'br',
    league: 'Série C',
    stadium: 'Estádio Plácido Aderaldo Castelo (Pladão)',
    crest: 'assets/crests/ibis-esporte.png',
    colors: { primary: '#c8102e', secondary: '#141414', accent: '#ffffff' },
    ratings: { att: 71, mid: 70, def: 72, ovr: 71 },
    stars: 3,
    formation: '4-3-3',
    players: [
      { id: 'ibis-matheus', name: 'Matheus', fullName: 'Matheus Ferreira Santos', number: 1, pos: 'GK', ovr: 70, potential: 71, form: 'D', age: 29, height: 189, foot: 'Right', role: 'Shot Stopper', focus: 'Support', celebration: 'None', photo: null, stats: { pace: 54, shooting: 26, passing: 68, dribbling: 58, defending: 32, physical: 76 } },
      { id: 'ibis-diego', name: 'Diego', fullName: 'Diego Ferreira de Souza', number: 2, pos: 'RB', ovr: 69, potential: 70, form: 'D', age: 26, height: 176, foot: 'Right', role: 'Fullback', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 82, shooting: 58, passing: 70, dribbling: 71, defending: 70, physical: 68 } },
      { id: 'ibis-lucas', name: 'Lucas', fullName: 'Lucas Almeida de Jesus', number: 3, pos: 'CB', ovr: 71, potential: 73, form: 'D', age: 28, height: 185, foot: 'Right', role: 'Stopper', focus: 'Support', celebration: 'None', photo: null, stats: { pace: 72, shooting: 48, passing: 68, dribbling: 60, defending: 76, physical: 80 } },
      { id: 'ibis-jefferson', name: 'Jefferson', fullName: 'Jefferson Luís Nascimento', number: 4, pos: 'CB', ovr: 70, potential: 71, form: 'D', age: 31, height: 187, foot: 'Left', role: 'Ball-Playing Defender', focus: 'Support', celebration: 'None', photo: null, stats: { pace: 68, shooting: 44, passing: 70, dribbling: 58, defending: 74, physical: 78 } },
      { id: 'ibis-alemao', name: 'Alemão', fullName: 'Alemão Oliveira da Silva', number: 6, pos: 'LB', ovr: 68, potential: 70, form: 'D', age: 24, height: 174, foot: 'Left', role: 'Fullback', focus: 'Support', celebration: 'None', photo: null, stats: { pace: 85, shooting: 52, passing: 71, dribbling: 72, defending: 66, physical: 64 } },
      { id: 'ibis-nando', name: 'Nando', fullName: 'Fernando Nando da Costa', number: 8, pos: 'CM', ovr: 70, potential: 72, form: 'D', age: 27, height: 178, foot: 'Right', role: 'Box-to-Box', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 74, shooting: 68, passing: 76, dribbling: 74, defending: 68, physical: 72 } },
      { id: 'ibis-kleber', name: 'Kleber', fullName: 'Kleber Ribeiro Mattos', number: 5, pos: 'CDM', ovr: 69, potential: 70, form: 'D', age: 30, height: 181, foot: 'Right', role: 'Anchor', focus: 'Support', celebration: 'None', photo: null, stats: { pace: 66, shooting: 52, passing: 72, dribbling: 62, defending: 76, physical: 78 } },
      { id: 'ibis-esquerdinha', name: 'Esquerdinha', fullName: 'Rafael Esquerdinha Lopes', number: 10, pos: 'CAM', ovr: 73, potential: 76, form: 'W', age: 22, height: 170, foot: 'Left', role: 'Advanced Playmaker', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 78, shooting: 74, passing: 80, dribbling: 84, defending: 38, physical: 58 } },
      { id: 'ibis-carlinhos', name: 'Carlinhos', fullName: 'Carlinhos Alves de Souza', number: 7, pos: 'LW', ovr: 72, potential: 74, form: 'D', age: 25, height: 172, foot: 'Right', role: 'Inside Forward', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 86, shooting: 70, passing: 74, dribbling: 80, defending: 36, physical: 62 } },
      { id: 'ibis-paulinho', name: 'Paulinho', fullName: 'Paulo Roberto Alves', number: 9, pos: 'ST', ovr: 74, potential: 77, form: 'W', age: 23, height: 179, foot: 'Right', role: 'Pressing Forward', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 84, shooting: 78, passing: 68, dribbling: 76, defending: 32, physical: 74 } },
      { id: 'ibis-rafa', name: 'Rafa', fullName: 'Rafael Edson Costa', number: 11, pos: 'RW', ovr: 71, potential: 74, form: 'D', age: 21, height: 175, foot: 'Left', role: 'Winger', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 88, shooting: 68, passing: 72, dribbling: 78, defending: 34, physical: 60 } }
    ],
    substitutes: [
      { id: 'ibis-ze-roberto', name: 'Zé Roberto', fullName: 'José Roberto da Silva', number: 12, pos: 'GK', ovr: 66, potential: 67, form: 'D', age: 33, height: 186, foot: 'Right', role: 'Shot Stopper', focus: 'Support', celebration: 'None', photo: null, stats: { pace: 50, shooting: 24, passing: 62, dribbling: 52, defending: 30, physical: 72 } },
      { id: 'ibis-dodo', name: 'Dodô', fullName: 'Douglas Souza Lima', number: 14, pos: 'RB', ovr: 65, potential: 67, form: 'D', age: 20, height: 173, foot: 'Right', role: 'Fullback', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 84, shooting: 50, passing: 64, dribbling: 68, defending: 62, physical: 58 } },
      { id: 'ibis-ze-carlos', name: 'Zé Carlos', fullName: 'José Carlos Ferreira', number: 13, pos: 'CB', ovr: 66, potential: 68, form: 'D', age: 27, height: 182, foot: 'Left', role: 'Stopper', focus: 'Support', celebration: 'None', photo: null, stats: { pace: 68, shooting: 40, passing: 66, dribbling: 56, defending: 70, physical: 74 } },
      { id: 'ibis-tata', name: 'Tatá', fullName: 'Gustavo Oliveira Tatá', number: 15, pos: 'CM', ovr: 67, potential: 70, form: 'D', age: 24, height: 177, foot: 'Right', role: 'Deep-lying Playmaker', focus: 'Support', celebration: 'None', photo: null, stats: { pace: 70, shooting: 60, passing: 78, dribbling: 72, defending: 64, physical: 66 } },
      { id: 'ibis-nene', name: 'Nenê', fullName: 'Wesley Nene dos Santos', number: 17, pos: 'LW', ovr: 69, potential: 72, form: 'D', age: 21, height: 168, foot: 'Right', role: 'Winger', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 88, shooting: 64, passing: 68, dribbling: 82, defending: 30, physical: 54 } },
      { id: 'ibis-wesley', name: 'Wesley', fullName: 'Wesley Ribeiro de Lima', number: 19, pos: 'ST', ovr: 70, potential: 73, form: 'D', age: 22, height: 180, foot: 'Right', role: 'Target Man', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 76, shooting: 74, passing: 62, dribbling: 66, defending: 34, physical: 82 } },
      { id: 'ibis-ruan', name: 'Ruan', fullName: 'Ruan Sousa Pereira', number: 18, pos: 'CM', ovr: 66, potential: 68, form: 'D', age: 26, height: 180, foot: 'Right', role: 'Carrilero', focus: 'Support', celebration: 'None', photo: null, stats: { pace: 72, shooting: 56, passing: 72, dribbling: 66, defending: 70, physical: 74 } }
    ]
  },
  {
    id: 'parana-clube',
    name: 'Paraná Clube',
    shortName: 'Paraná',
    nickname: 'Paraná',
    city: 'Curitiba',
    country: 'Brasil',
    flag: 'br',
    league: 'Série C',
    stadium: 'Estádio Durival Britto e Silva (Vila Capanema)',
    crest: 'assets/crests/parana-clube.png',
    colors: { primary: '#d0112b', secondary: '#f2f2f0', accent: '#141414' },
    ratings: { att: 70, mid: 69, def: 71, ovr: 70 },
    stars: 3,
    formation: '4-3-3',
    players: [
      { id: 'parana-joao-ricardo', name: 'João Ricardo', fullName: 'João Ricardo dos Santos', number: 1, pos: 'GK', ovr: 71, potential: 72, form: 'D', age: 32, height: 191, foot: 'Right', role: 'Shot Stopper', focus: 'Support', celebration: 'None', photo: null, stats: { pace: 52, shooting: 25, passing: 70, dribbling: 56, defending: 34, physical: 78 } },
      { id: 'parana-rafinha', name: 'Rafinha', fullName: 'Rafael Rocha da Silva', number: 2, pos: 'RB', ovr: 68, potential: 69, form: 'D', age: 27, height: 174, foot: 'Right', role: 'Fullback', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 80, shooting: 56, passing: 70, dribbling: 70, defending: 70, physical: 66 } },
      { id: 'parana-nilson', name: 'Nilson', fullName: 'Nilson Antônio de Souza', number: 3, pos: 'CB', ovr: 70, potential: 72, form: 'D', age: 29, height: 184, foot: 'Right', role: 'Stopper', focus: 'Support', celebration: 'None', photo: null, stats: { pace: 70, shooting: 46, passing: 66, dribbling: 58, defending: 75, physical: 80 } },
      { id: 'parana-vitor', name: 'Vitor', fullName: 'Vitor Hugo Gomes', number: 4, pos: 'CB', ovr: 69, potential: 71, form: 'D', age: 26, height: 183, foot: 'Left', role: 'Ball-Playing Defender', focus: 'Support', celebration: 'None', photo: null, stats: { pace: 70, shooting: 46, passing: 72, dribbling: 60, defending: 72, physical: 76 } },
      { id: 'parana-marcelo', name: 'Marcelo', fullName: 'Marcelo Ferreira da Silva', number: 6, pos: 'LB', ovr: 67, potential: 69, form: 'D', age: 25, height: 175, foot: 'Left', role: 'Fullback', focus: 'Support', celebration: 'None', photo: null, stats: { pace: 84, shooting: 50, passing: 70, dribbling: 70, defending: 65, physical: 64 } },
      { id: 'parana-junior', name: 'Júnior', fullName: 'Júnior Alves de Oliveira', number: 8, pos: 'CM', ovr: 70, potential: 72, form: 'D', age: 28, height: 177, foot: 'Right', role: 'Box-to-Box', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 72, shooting: 66, passing: 76, dribbling: 74, defending: 68, physical: 72 } },
      { id: 'parana-caca', name: 'Cacá', fullName: 'Cacá Ferreira Bezerra', number: 5, pos: 'CDM', ovr: 69, potential: 70, form: 'D', age: 29, height: 182, foot: 'Right', role: 'Anchor', focus: 'Support', celebration: 'None', photo: null, stats: { pace: 68, shooting: 50, passing: 72, dribbling: 62, defending: 76, physical: 78 } },
      { id: 'parana-tiago', name: 'Tiago', fullName: 'Tiago Antônio Marques', number: 10, pos: 'CAM', ovr: 72, potential: 75, form: 'D', age: 23, height: 171, foot: 'Right', role: 'Advanced Playmaker', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 76, shooting: 72, passing: 80, dribbling: 82, defending: 38, physical: 58 } },
      { id: 'parana-lele', name: 'Lelê', fullName: 'Rafael Martins Lelê', number: 7, pos: 'LW', ovr: 71, potential: 73, form: 'D', age: 24, height: 171, foot: 'Right', role: 'Winger', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 86, shooting: 68, passing: 72, dribbling: 80, defending: 34, physical: 58 } },
      { id: 'parana-denis', name: 'Denis', fullName: 'Denis Ribeiro da Silva', number: 9, pos: 'ST', ovr: 73, potential: 76, form: 'D', age: 26, height: 183, foot: 'Right', role: 'Complete Forward', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 76, shooting: 78, passing: 70, dribbling: 74, defending: 36, physical: 80 } },
      { id: 'parana-washington', name: 'Washington', fullName: 'Washington Gomes do Nascimento', number: 11, pos: 'RW', ovr: 70, potential: 73, form: 'D', age: 22, height: 174, foot: 'Left', role: 'Inside Forward', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 84, shooting: 70, passing: 72, dribbling: 80, defending: 34, physical: 60 } }
    ],
    substitutes: [
      { id: 'parana-rafael', name: 'Rafael', fullName: 'Rafael de Oliveira Souza', number: 12, pos: 'GK', ovr: 65, potential: 67, form: 'D', age: 34, height: 185, foot: 'Right', role: 'Shot Stopper', focus: 'Support', celebration: 'None', photo: null, stats: { pace: 48, shooting: 22, passing: 60, dribbling: 50, defending: 28, physical: 70 } },
      { id: 'parana-wesley', name: 'Wesley', fullName: 'Wesley dos Santos Lima', number: 14, pos: 'RB', ovr: 64, potential: 66, form: 'D', age: 21, height: 172, foot: 'Right', role: 'Fullback', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 83, shooting: 48, passing: 62, dribbling: 66, defending: 60, physical: 56 } },
      { id: 'parana-anderson', name: 'Anderson', fullName: 'Anderson Ferreira Costa', number: 13, pos: 'CB', ovr: 65, potential: 67, form: 'D', age: 28, height: 180, foot: 'Left', role: 'Stopper', focus: 'Support', celebration: 'None', photo: null, stats: { pace: 66, shooting: 38, passing: 64, dribbling: 54, defending: 68, physical: 72 } },
      { id: 'parana-murilo', name: 'Murilo', fullName: 'Murilo Alexandre Costa', number: 15, pos: 'CM', ovr: 66, potential: 69, form: 'D', age: 25, height: 176, foot: 'Right', role: 'Deep-lying Playmaker', focus: 'Support', celebration: 'None', photo: null, stats: { pace: 68, shooting: 58, passing: 76, dribbling: 70, defending: 64, physical: 66 } },
      { id: 'parana-eder', name: 'Éder', fullName: 'Éder Leite Barbosa', number: 17, pos: 'LW', ovr: 68, potential: 71, form: 'D', age: 20, height: 169, foot: 'Right', role: 'Winger', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 87, shooting: 62, passing: 66, dribbling: 80, defending: 30, physical: 52 } },
      { id: 'parana-juninho', name: 'Juninho', fullName: 'Juninho Pereira da Silva', number: 19, pos: 'ST', ovr: 69, potential: 72, form: 'D', age: 23, height: 181, foot: 'Right', role: 'Target Man', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 72, shooting: 72, passing: 60, dribbling: 62, defending: 34, physical: 82 } },
      { id: 'parana-regis', name: 'Régis', fullName: 'Régis Alves Monteiro', number: 18, pos: 'CM', ovr: 65, potential: 67, form: 'D', age: 27, height: 179, foot: 'Right', role: 'Carrilero', focus: 'Support', celebration: 'None', photo: null, stats: { pace: 70, shooting: 54, passing: 70, dribbling: 64, defending: 68, physical: 72 } }
    ]
  }
];

/** Times disponíveis no carousel da tela de escolha. */
export const TEAM_IDS = TEAMS.map(team => team.id);

export function getTeam(id) {
  return TEAMS.find(team => team.id === id) || null;
}

/** Estrelas de 0 a 5 em meia estrela, como no cartão de time. */
export function starSlots(rating) {
  const slots = [];
  for (let i = 0; i < 5; i++) {
    const value = rating - i;
    slots.push(value >= 1 ? 'full' : value >= 0.5 ? 'half' : 'empty');
  }
  return slots;
}
