import {crestFor} from './asset-library.js';
// Clubes do XFC; elencos novos da coleção são sinalizados como fictícios.
//
// Os retratos são gerados para o projeto (sem material de terceiros) e ficam em
// `assets/players/`. As médias seguem o formato do menu de FC: overall, forma
// recente e os seis atributos principais usados na tela de elenco.

import { COLLECTION_CLUBS } from './shirt-collection.js';

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
  },
  {
    id: 'flamengo',
    name: 'Flamengo',
    shortName: 'Flamengo',
    nickname: 'Mengo',
    city: 'Rio de Janeiro',
    country: 'Brasil',
    flag: 'br',
    league: 'Série A',
    stadium: 'Maracanã',
    crest: 'assets/crests/flamengo.png',
    colors: { primary: '#c8102e', secondary: '#141414', accent: '#ffd84a' },
    ratings: { att: 88, mid: 85, def: 83, ovr: 85 },
    stars: 4.5,
    formation: '4-3-3',
    players: [
      { id: 'fla-weverton', name: 'Weverton', fullName: 'Weverton Pereira da Costa', number: 1, pos: 'GK', ovr: 85, potential: 86, form: 'W', age: 38, height: 191, foot: 'Right', role: 'Shot Stopper', focus: 'Support', celebration: 'None', photo: photo('fla-01'), stats: { pace: 52, shooting: 24, passing: 72, dribbling: 54, defending: 30, physical: 82 } },
      { id: 'fla-matheuzinho', name: 'Matheuzinho', fullName: 'Matheus do Carmo Pereira', number: 2, pos: 'RB', ovr: 80, potential: 83, form: 'W', age: 25, height: 176, foot: 'Right', role: 'Fullback', focus: 'Attack', celebration: 'None', photo: photo('fla-02'), stats: { pace: 86, shooting: 62, passing: 74, dribbling: 78, defending: 72, physical: 74 } },
      { id: 'fla-leo-pereira', name: 'Léo Pereira', fullName: 'Leonardo Pereira da Silva', number: 4, pos: 'CB', ovr: 83, potential: 84, form: 'W', age: 28, height: 187, foot: 'Right', role: 'Ball-Playing Defender', focus: 'Support', celebration: 'None', photo: photo('fla-03'), stats: { pace: 78, shooting: 56, passing: 76, dribbling: 72, defending: 85, physical: 86 } },
      { id: 'fla-fabricio-bruno', name: 'Fabrício Bruno', fullName: 'Fabrício Bruno Sperotto', number: 6, pos: 'CB', ovr: 84, potential: 85, form: 'W', age: 29, height: 186, foot: 'Right', role: 'Stopper', focus: 'Support', celebration: 'None', photo: photo('fla-04'), stats: { pace: 74, shooting: 48, passing: 70, dribbling: 66, defending: 87, physical: 88 } },
      { id: 'fla-ayrton-lucas', name: 'Ayrton Lucas', fullName: 'Ayrton Lucas Dantas Pinheiro', number: 16, pos: 'LB', ovr: 81, potential: 83, form: 'W', age: 27, height: 178, foot: 'Left', role: 'Fullback', focus: 'Attack', celebration: 'None', photo: photo('fla-05'), stats: { pace: 87, shooting: 60, passing: 74, dribbling: 80, defending: 70, physical: 74 } },
      { id: 'fla-gerson', name: 'Gerson', fullName: 'Gerson Domingos da Silva', number: 8, pos: 'CM', ovr: 85, potential: 87, form: 'W', age: 28, height: 180, foot: 'Right', role: 'Box-to-Box', focus: 'Attack', celebration: 'None', photo: photo('fla-06'), stats: { pace: 80, shooting: 76, passing: 86, dribbling: 84, defending: 72, physical: 76 } },
      { id: 'fla-ataide', name: 'Ataíde', fullName: 'João Ataíde Vidal', number: 5, pos: 'CDM', ovr: 83, potential: 86, form: 'W', age: 23, height: 184, foot: 'Right', role: 'Anchor', focus: 'Support', celebration: 'None', photo: photo('fla-07'), stats: { pace: 72, shooting: 60, passing: 80, dribbling: 72, defending: 85, physical: 86 } },
      { id: 'fla-delgado', name: 'Delgado', fullName: 'Jorge Delgado Padilla', number: 19, pos: 'CAM', ovr: 82, potential: 84, form: 'W', age: 26, height: 179, foot: 'Left', role: 'Advanced Playmaker', focus: 'Attack', celebration: 'None', photo: photo('fla-08'), stats: { pace: 78, shooting: 74, passing: 86, dribbling: 84, defending: 58, physical: 72 } },
      { id: 'fla-luiz-henrique', name: 'Luiz Henrique', fullName: 'Luiz Henrique Santana', number: 21, pos: 'RW', ovr: 82, potential: 85, form: 'W', age: 24, height: 181, foot: 'Left', role: 'Winger', focus: 'Attack', celebration: 'None', photo: photo('fla-09'), stats: { pace: 86, shooting: 74, passing: 76, dribbling: 85, defending: 42, physical: 74 } },
      { id: 'fla-everton-ribeiro', name: 'Everton Ribeiro', fullName: 'Everton Ribeiro Campos', number: 7, pos: 'LW', ovr: 83, potential: 84, form: 'W', age: 35, height: 171, foot: 'Left', role: 'Inside Forward', focus: 'Attack', celebration: 'None', photo: photo('fla-10'), stats: { pace: 80, shooting: 76, passing: 84, dribbling: 86, defending: 44, physical: 68 } },
      { id: 'fla-pedro', name: 'Pedro', fullName: 'Pedro Guilherme Abreu dos Santos', number: 9, pos: 'ST', ovr: 87, potential: 88, form: 'W', age: 28, height: 183, foot: 'Right', role: 'Advanced Forward', focus: 'Attack', celebration: 'None', photo: photo('fla-11'), stats: { pace: 80, shooting: 88, passing: 76, dribbling: 82, defending: 42, physical: 80 } }
    ],
    substitutes: [
      { id: 'fla-hugo', name: 'Hugo Souza', fullName: 'Hugo Souza Calissta', number: 37, pos: 'GK', ovr: 74, potential: 77, form: 'D', age: 23, height: 190, foot: 'Right', role: 'Shot Stopper', focus: 'Support', celebration: 'None', photo: null, stats: { pace: 50, shooting: 22, passing: 66, dribbling: 50, defending: 28, physical: 76 } },
      { id: 'fla-varela', name: 'Varela', fullName: 'Matías Varela', number: 23, pos: 'RB', ovr: 78, potential: 80, form: 'W', age: 26, height: 175, foot: 'Right', role: 'Fullback', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 85, shooting: 60, passing: 72, dribbling: 78, defending: 70, physical: 74 } },
      { id: 'fla-caceres', name: 'Cáceres', fullName: 'Marcos Andrés Cáceres', number: 3, pos: 'CB', ovr: 79, potential: 81, form: 'W', age: 33, height: 187, foot: 'Right', role: 'Stopper', focus: 'Support', celebration: 'None', photo: null, stats: { pace: 70, shooting: 44, passing: 68, dribbling: 62, defending: 83, physical: 84 } },
      { id: 'fla-cleiton', name: 'Cleiton', fullName: 'Cleiton da Silva Barbosa', number: 24, pos: 'CB', ovr: 76, potential: 78, form: 'D', age: 28, height: 185, foot: 'Left', role: 'Ball-Playing Defender', focus: 'Support', celebration: 'None', photo: null, stats: { pace: 74, shooting: 46, passing: 72, dribbling: 66, defending: 79, physical: 82 } },
      { id: 'fla-igor', name: 'Igor Torres', fullName: 'Igor Torres Morais', number: 27, pos: 'LB', ovr: 75, potential: 78, form: 'D', age: 21, height: 176, foot: 'Left', role: 'Fullback', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 83, shooting: 54, passing: 70, dribbling: 74, defending: 68, physical: 70 } },
      { id: 'fla-erick', name: 'Erick', fullName: 'Erick Lopes da Silva', number: 17, pos: 'CM', ovr: 77, potential: 80, form: 'W', age: 25, height: 178, foot: 'Right', role: 'Box-to-Box', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 78, shooting: 70, passing: 80, dribbling: 78, defending: 70, physical: 74 } },
      { id: 'fla-thiago-batista', name: 'Thiago Batista', fullName: 'Thiago Batista Teixeira', number: 31, pos: 'ST', ovr: 75, potential: 79, form: 'D', age: 23, height: 182, foot: 'Right', role: 'Target Man', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 74, shooting: 74, passing: 62, dribbling: 66, defending: 34, physical: 84 } }
    ]
  },
  {
    id: 'palmeiras',
    name: 'Palmeiras',
    shortName: 'Palmeiras',
    nickname: 'Verdão',
    city: 'São Paulo',
    country: 'Brasil',
    flag: 'br',
    league: 'Série A',
    stadium: 'MorumBis',
    crest: 'assets/crests/palmeiras.png',
    colors: { primary: '#00843d', secondary: '#f4f4f4', accent: '#f5d000' },
    ratings: { att: 85, mid: 86, def: 86, ovr: 86 },
    stars: 4.5,
    formation: '4-3-3',
    players: [
      { id: 'pal-weverton', name: 'Weverton', fullName: 'Weverton Ramalho da Rocha', number: 1, pos: 'GK', ovr: 84, potential: 85, form: 'W', age: 38, height: 190, foot: 'Right', role: 'Shot Stopper', focus: 'Support', celebration: 'None', photo: photo('pal-01'), stats: { pace: 50, shooting: 22, passing: 70, dribbling: 52, defending: 28, physical: 80 } },
      { id: 'pal-mayke', name: 'Mayke', fullName: 'Mayke Rodrigo Pacheco de Oliveira', number: 2, pos: 'RB', ovr: 80, potential: 82, form: 'W', age: 32, height: 176, foot: 'Right', role: 'Fullback', focus: 'Attack', celebration: 'None', photo: photo('pal-02'), stats: { pace: 84, shooting: 58, passing: 72, dribbling: 76, defending: 72, physical: 74 } },
      { id: 'pal-gomez', name: 'Gustavo Gómez', fullName: 'Gustavo Gómez Araújo', number: 3, pos: 'CB', ovr: 85, potential: 86, form: 'W', age: 33, height: 187, foot: 'Right', role: 'Stopper', focus: 'Support', celebration: 'None', photo: photo('pal-03'), stats: { pace: 72, shooting: 46, passing: 72, dribbling: 66, defending: 88, physical: 88 } },
      { id: 'pal-murilo', name: 'Murilo', fullName: 'Murilo Nascimento de Sá', number: 6, pos: 'CB', ovr: 83, potential: 85, form: 'W', age: 25, height: 186, foot: 'Right', role: 'Ball-Playing Defender', focus: 'Support', celebration: 'None', photo: photo('pal-04'), stats: { pace: 76, shooting: 50, passing: 76, dribbling: 70, defending: 85, physical: 86 } },
      { id: 'pal-piquerez', name: 'Piquerez', fullName: 'Vanderson da Silva Brito', number: 14, pos: 'LB', ovr: 81, potential: 83, form: 'W', age: 27, height: 177, foot: 'Left', role: 'Fullback', focus: 'Attack', celebration: 'None', photo: photo('pal-05'), stats: { pace: 85, shooting: 58, passing: 74, dribbling: 78, defending: 72, physical: 74 } },
      { id: 'pal-ze-rafael', name: 'Zé Rafael', fullName: 'José Rafael dos Santos', number: 8, pos: 'CM', ovr: 82, potential: 84, form: 'W', age: 31, height: 178, foot: 'Right', role: 'Box-to-Box', focus: 'Attack', celebration: 'None', photo: photo('pal-06'), stats: { pace: 76, shooting: 74, passing: 84, dribbling: 80, defending: 72, physical: 74 } },
      { id: 'pal-menino', name: 'Menino', fullName: 'Gabriel Menino Barcellos', number: 20, pos: 'CDM', ovr: 82, potential: 85, form: 'W', age: 25, height: 182, foot: 'Right', role: 'Anchor', focus: 'Support', celebration: 'None', photo: photo('pal-07'), stats: { pace: 74, shooting: 64, passing: 82, dribbling: 76, defending: 82, physical: 82 } },
      { id: 'pal-veiga', name: 'Raphael Veiga', fullName: 'Raphael Souza Veiga', number: 10, pos: 'CAM', ovr: 84, potential: 86, form: 'W', age: 30, height: 180, foot: 'Left', role: 'Advanced Playmaker', focus: 'Attack', celebration: 'None', photo: photo('pal-08'), stats: { pace: 74, shooting: 78, passing: 88, dribbling: 84, defending: 60, physical: 72 } },
      { id: 'pal-rony', name: 'Rony', fullName: 'Rony Alejandro Reyna Robles', number: 10, pos: 'RW', ovr: 82, potential: 84, form: 'W', age: 30, height: 172, foot: 'Left', role: 'Winger', focus: 'Attack', celebration: 'None', photo: photo('pal-09'), stats: { pace: 86, shooting: 74, passing: 76, dribbling: 84, defending: 42, physical: 70 } },
      { id: 'pal-lazaro', name: 'Lazaro', fullName: 'Lazaro Vinícius Alves Barros', number: 17, pos: 'LW', ovr: 80, potential: 84, form: 'W', age: 24, height: 176, foot: 'Left', role: 'Winger', focus: 'Attack', celebration: 'None', photo: photo('pal-10'), stats: { pace: 86, shooting: 70, passing: 72, dribbling: 82, defending: 40, physical: 72 } },
      { id: 'pal-endrick', name: 'Endrick', fullName: 'Endrick Felipe Moreira Silva', number: 9, pos: 'ST', ovr: 83, potential: 90, form: 'W', age: 19, height: 181, foot: 'Right', role: 'Advanced Forward', focus: 'Attack', celebration: 'None', photo: photo('pal-11'), stats: { pace: 82, shooting: 84, passing: 72, dribbling: 80, defending: 40, physical: 82 } }
    ],
    substitutes: [
      { id: 'pal-lomba', name: 'Lomba', fullName: 'Marcelo Lomba Correa', number: 21, pos: 'GK', ovr: 76, potential: 78, form: 'D', age: 38, height: 188, foot: 'Right', role: 'Shot Stopper', focus: 'Support', celebration: 'None', photo: null, stats: { pace: 48, shooting: 20, passing: 64, dribbling: 48, defending: 26, physical: 74 } },
      { id: 'pal-vanderson', name: 'Vanderson', fullName: 'Vanderson de Almeida Balthazar', number: 2, pos: 'RB', ovr: 78, potential: 82, form: 'W', age: 23, height: 175, foot: 'Right', role: 'Fullback', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 85, shooting: 56, passing: 72, dribbling: 76, defending: 70, physical: 72 } },
      { id: 'pal-luan', name: 'Luan', fullName: 'Luan Correa de Freitas', number: 4, pos: 'CB', ovr: 78, potential: 80, form: 'D', age: 28, height: 186, foot: 'Right', role: 'Stopper', focus: 'Support', celebration: 'None', photo: null, stats: { pace: 72, shooting: 44, passing: 68, dribbling: 62, defending: 81, physical: 84 } },
      { id: 'pal-naves', name: 'Naves', fullName: 'Bruno Naves Lima', number: 26, pos: 'CB', ovr: 75, potential: 78, form: 'D', age: 24, height: 184, foot: 'Left', role: 'Ball-Playing Defender', focus: 'Support', celebration: 'None', photo: null, stats: { pace: 74, shooting: 46, passing: 70, dribbling: 64, defending: 78, physical: 80 } },
      { id: 'pal-mauricio', name: 'Maurício', fullName: 'Maurício Antônio Caetano', number: 13, pos: 'LB', ovr: 76, potential: 79, form: 'D', age: 27, height: 179, foot: 'Left', role: 'Fullback', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 82, shooting: 54, passing: 72, dribbling: 74, defending: 70, physical: 74 } },
      { id: 'pal-danilo', name: 'Danilo', fullName: 'Danilo da Silva Teixeira', number: 28, pos: 'CM', ovr: 79, potential: 82, form: 'W', age: 26, height: 180, foot: 'Right', role: 'Box-to-Box', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 78, shooting: 72, passing: 82, dribbling: 80, defending: 72, physical: 76 } },
      { id: 'pal-flaco', name: 'Flaco López', fullName: 'Flaco Andrés López', number: 19, pos: 'ST', ovr: 78, potential: 81, form: 'W', age: 26, height: 183, foot: 'Right', role: 'Target Man', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 76, shooting: 78, passing: 66, dribbling: 70, defending: 34, physical: 82 } }
    ]
  },
  {
    id: 'corinthians',
    name: 'Corinthians',
    shortName: 'Corinthians',
    nickname: 'Timão',
    city: 'São Paulo',
    country: 'Brasil',
    flag: 'br',
    league: 'Série A',
    stadium: 'Neo Química Arena',
    crest: 'assets/crests/corinthians.png',
    colors: { primary: '#141414', secondary: '#f4f4f4', accent: '#0a5c9c' },
    ratings: { att: 83, mid: 82, def: 82, ovr: 82 },
    stars: 4.5,
    formation: '4-3-3',
    players: [
      { id: 'cor-caca', name: 'Cacá', fullName: 'Cacá Carvalho Alves', number: 1, pos: 'GK', ovr: 82, potential: 84, form: 'W', age: 29, height: 190, foot: 'Right', role: 'Shot Stopper', focus: 'Support', celebration: 'None', photo: photo('cor-01'), stats: { pace: 50, shooting: 22, passing: 68, dribbling: 52, defending: 28, physical: 80 } },
      { id: 'cor-igor-torres', name: 'Igor Torres', fullName: 'Igor Torres Morais', number: 2, pos: 'RB', ovr: 79, potential: 82, form: 'W', age: 24, height: 176, foot: 'Right', role: 'Fullback', focus: 'Attack', celebration: 'None', photo: photo('cor-02'), stats: { pace: 84, shooting: 58, passing: 72, dribbling: 76, defending: 70, physical: 74 } },
      { id: 'cor-verissimo', name: 'Veríssimo', fullName: 'Lucas Eduardo Veríssimo da Silva', number: 3, pos: 'CB', ovr: 82, potential: 84, form: 'W', age: 30, height: 187, foot: 'Right', role: 'Ball-Playing Defender', focus: 'Support', celebration: 'None', photo: photo('cor-03'), stats: { pace: 74, shooting: 48, passing: 76, dribbling: 70, defending: 84, physical: 84 } },
      { id: 'cor-robert-renan', name: 'Robert Renan', fullName: 'Robert Renan Barros de Alencar', number: 4, pos: 'CB', ovr: 80, potential: 85, form: 'W', age: 22, height: 188, foot: 'Right', role: 'Stopper', focus: 'Support', celebration: 'None', photo: photo('cor-04'), stats: { pace: 72, shooting: 44, passing: 70, dribbling: 64, defending: 83, physical: 86 } },
      { id: 'cor-hugo', name: 'Hugo', fullName: 'Hugo Souza Calissta', number: 5, pos: 'LB', ovr: 78, potential: 81, form: 'W', age: 21, height: 178, foot: 'Left', role: 'Fullback', focus: 'Attack', celebration: 'None', photo: photo('cor-05'), stats: { pace: 83, shooting: 54, passing: 72, dribbling: 76, defending: 68, physical: 74 } },
      { id: 'cor-lucas-pereira', name: 'Lucas Pereira', fullName: 'Lucas Pereira Vasconcelos', number: 6, pos: 'CM', ovr: 79, potential: 82, form: 'W', age: 26, height: 179, foot: 'Right', role: 'Box-to-Box', focus: 'Attack', celebration: 'None', photo: photo('cor-06'), stats: { pace: 76, shooting: 72, passing: 80, dribbling: 78, defending: 70, physical: 74 } },
      { id: 'cor-romulo', name: 'Rômulo', fullName: 'Rômulo Caio Nascimento', number: 7, pos: 'CDM', ovr: 80, potential: 83, form: 'W', age: 26, height: 183, foot: 'Right', role: 'Anchor', focus: 'Support', celebration: 'None', photo: photo('cor-07'), stats: { pace: 72, shooting: 62, passing: 78, dribbling: 72, defending: 82, physical: 84 } },
      { id: 'cor-andre-luis', name: 'André Luis', fullName: 'André Luiz Silva da Costa', number: 8, pos: 'CAM', ovr: 81, potential: 84, form: 'W', age: 32, height: 177, foot: 'Left', role: 'Advanced Playmaker', focus: 'Attack', celebration: 'None', photo: photo('cor-08'), stats: { pace: 76, shooting: 76, passing: 84, dribbling: 82, defending: 58, physical: 72 } },
      { id: 'cor-romero', name: 'Romero', fullName: 'Romero Roberto Almirón', number: 10, pos: 'RW', ovr: 81, potential: 83, form: 'W', age: 30, height: 180, foot: 'Left', role: 'Winger', focus: 'Attack', celebration: 'None', photo: photo('cor-09'), stats: { pace: 84, shooting: 72, passing: 76, dribbling: 82, defending: 42, physical: 74 } },
      { id: 'cor-yuri-alberto', name: 'Yuri Alberto', fullName: 'Yuri Alberto Monteiro da Silva', number: 9, pos: 'ST', ovr: 82, potential: 84, form: 'W', age: 24, height: 182, foot: 'Right', role: 'Advanced Forward', focus: 'Attack', celebration: 'None', photo: photo('cor-10'), stats: { pace: 80, shooting: 84, passing: 74, dribbling: 78, defending: 42, physical: 80 } },
      { id: 'cor-pedro-henrique', name: 'Pedro Henrique', fullName: 'Pedro Henrique de Oliveira', number: 11, pos: 'LW', ovr: 78, potential: 82, form: 'D', age: 26, height: 177, foot: 'Right', role: 'Winger', focus: 'Attack', celebration: 'None', photo: photo('cor-11'), stats: { pace: 84, shooting: 68, passing: 72, dribbling: 80, defending: 40, physical: 72 } }
    ],
    substitutes: [
      { id: 'cor-matheus-donelli', name: 'Donelli', fullName: 'Matheus Donelli', number: 37, pos: 'GK', ovr: 76, potential: 80, form: 'D', age: 23, height: 190, foot: 'Right', role: 'Shot Stopper', focus: 'Support', celebration: 'None', photo: null, stats: { pace: 52, shooting: 22, passing: 66, dribbling: 50, defending: 28, physical: 78 } },
      { id: 'cor-igor-torres2', name: 'Igor Torres', fullName: 'Igor Torres Morais', number: 39, pos: 'RB', ovr: 75, potential: 79, form: 'D', age: 21, height: 175, foot: 'Right', role: 'Fullback', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 83, shooting: 54, passing: 70, dribbling: 74, defending: 68, physical: 70 } },
      { id: 'cor-mateus', name: 'Mateus', fullName: 'Mateus Gardim Coelho', number: 27, pos: 'CB', ovr: 76, potential: 80, form: 'D', age: 22, height: 185, foot: 'Right', role: 'Stopper', focus: 'Support', celebration: 'None', photo: null, stats: { pace: 72, shooting: 44, passing: 68, dribbling: 62, defending: 80, physical: 82 } },
      { id: 'cor-caetano', name: 'Caetano', fullName: 'Caetano Alves Pereira', number: 26, pos: 'CB', ovr: 77, potential: 80, form: 'W', age: 24, height: 186, foot: 'Left', role: 'Ball-Playing Defender', focus: 'Support', celebration: 'None', photo: null, stats: { pace: 74, shooting: 46, passing: 72, dribbling: 66, defending: 80, physical: 82 } },
      { id: 'cor-wendel', name: 'Wendel', fullName: 'Wendel Rafael da Silva', number: 13, pos: 'LB', ovr: 75, potential: 79, form: 'D', age: 25, height: 178, foot: 'Left', role: 'Fullback', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 82, shooting: 52, passing: 72, dribbling: 74, defending: 68, physical: 72 } },
      { id: 'cor-antonio', name: 'Antônio', fullName: 'Antônio Édson da Silva', number: 17, pos: 'CM', ovr: 77, potential: 80, form: 'W', age: 24, height: 180, foot: 'Right', role: 'Box-to-Box', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 78, shooting: 70, passing: 80, dribbling: 78, defending: 70, physical: 74 } },
      { id: 'cor-caio', name: 'Caio', fullName: 'Caio Alexandre Alves Pereira', number: 19, pos: 'ST', ovr: 76, potential: 80, form: 'D', age: 22, height: 183, foot: 'Right', role: 'Target Man', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 76, shooting: 74, passing: 64, dribbling: 68, defending: 34, physical: 82 } }
    ]
  },
  {
    id: 'santos',
    name: 'Santos',
    shortName: 'Santos',
    nickname: 'Peixe',
    city: 'Santos',
    country: 'Brasil',
    flag: 'br',
    league: 'Série A',
    stadium: 'Vila Belmiro',
    crest: 'assets/crests/santos.png',
    colors: { primary: '#f4f4f2', secondary: '#17191c', accent: '#17191c' },
    ratings: { att: 84, mid: 81, def: 78, ovr: 81 },
    stars: 4,
    formation: '4-3-3',
    players: [
      { id: 'san-joao-paulo', name: 'João Paulo', fullName: 'João Paulo da Silva Martins', number: 34, pos: 'GK', ovr: 80, potential: 83, form: 'W', age: 30, height: 188, foot: 'Right', role: 'Shot Stopper', focus: 'Support', celebration: 'None', photo: null, stats: { pace: 52, shooting: 22, passing: 72, dribbling: 56, defending: 30, physical: 80 } },
      { id: 'san-aderlan', name: 'Aderlan', fullName: 'Aderlan de Lima Silva', number: 13, pos: 'RB', ovr: 76, potential: 78, form: 'W', age: 34, height: 177, foot: 'Right', role: 'Fullback', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 76, shooting: 56, passing: 72, dribbling: 73, defending: 73, physical: 74 } },
      { id: 'san-gil', name: 'Gil', fullName: 'Carlos Gilberto Nascimento Silva', number: 4, pos: 'CB', ovr: 79, potential: 79, form: 'W', age: 39, height: 192, foot: 'Right', role: 'Stopper', focus: 'Support', celebration: 'None', photo: null, stats: { pace: 58, shooting: 42, passing: 68, dribbling: 62, defending: 82, physical: 84 } },
      { id: 'san-joaquim', name: 'Joaquim', fullName: 'Joaquim Henrique Nascimento', number: 28, pos: 'CB', ovr: 78, potential: 82, form: 'W', age: 27, height: 190, foot: 'Right', role: 'Ball-Playing Defender', focus: 'Support', celebration: 'None', photo: null, stats: { pace: 72, shooting: 46, passing: 72, dribbling: 66, defending: 80, physical: 82 } },
      { id: 'san-escobar', name: 'Escobar', fullName: 'Gonzalo Escobar', number: 31, pos: 'LB', ovr: 76, potential: 78, form: 'W', age: 28, height: 171, foot: 'Left', role: 'Fullback', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 79, shooting: 54, passing: 72, dribbling: 76, defending: 72, physical: 72 } },
      { id: 'san-rincon', name: 'Tomás Rincón', fullName: 'Tomás Eduardo Rincón Hernández', number: 8, pos: 'CDM', ovr: 76, potential: 76, form: 'W', age: 38, height: 177, foot: 'Right', role: 'Anchor', focus: 'Support', celebration: 'None', photo: null, stats: { pace: 65, shooting: 60, passing: 74, dribbling: 70, defending: 78, physical: 82 } },
      { id: 'san-pituca', name: 'Diego Pituca', fullName: 'Diego de Oliveira Barbosa', number: 21, pos: 'CM', ovr: 79, potential: 80, form: 'W', age: 33, height: 175, foot: 'Left', role: 'Box-to-Box', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 72, shooting: 70, passing: 80, dribbling: 78, defending: 76, physical: 76 } },
      { id: 'san-schmidt', name: 'João Schmidt', fullName: 'João Schmidt Urbano', number: 5, pos: 'CM', ovr: 77, potential: 79, form: 'W', age: 32, height: 183, foot: 'Right', role: 'Deep-lying Playmaker', focus: 'Support', celebration: 'None', photo: null, stats: { pace: 69, shooting: 64, passing: 80, dribbling: 74, defending: 76, physical: 76 } },
      { id: 'san-guilherme', name: 'Guilherme', fullName: 'Guilherme Augusto Vieira dos Santos', number: 11, pos: 'RW', ovr: 79, potential: 82, form: 'W', age: 30, height: 178, foot: 'Left', role: 'Winger', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 83, shooting: 78, passing: 76, dribbling: 82, defending: 40, physical: 72 } },
      { id: 'san-neymar', name: 'Neymar Jr.', fullName: 'Neymar da Silva Santos Júnior', number: 10, pos: 'LW', ovr: 88, potential: 88, form: 'W', age: 34, height: 175, foot: 'Right', role: 'Inside Forward', focus: 'Attack', celebration: 'None', photo: null, appearance: { skinTone: '#bd8868', hairColor: '#241b15', hairStyle: 'neymar', heightScale: 1.01 }, stats: { pace: 84, shooting: 88, passing: 88, dribbling: 94, defending: 38, physical: 69 } },
      { id: 'san-julio-furch', name: 'Julio Furch', fullName: 'Julio César Furch', number: 9, pos: 'ST', ovr: 78, potential: 78, form: 'W', age: 37, height: 188, foot: 'Right', role: 'Target Man', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 67, shooting: 82, passing: 72, dribbling: 72, defending: 38, physical: 84 } }
    ],
    substitutes: [
      { id: 'san-kevin-mota', name: 'Kevin Mota', fullName: 'Kevin Mota', number: 50, pos: 'GK', ovr: 70, potential: 77, form: 'D', age: 20, height: 190, foot: 'Right', role: 'Shot Stopper', focus: 'Support', celebration: 'None', photo: null, stats: { pace: 48, shooting: 20, passing: 62, dribbling: 48, defending: 28, physical: 74 } },
      { id: 'san-joao-lucas', name: 'João Lucas', fullName: 'João Lucas de Almeida Carvalho', number: 13, pos: 'RB', ovr: 74, potential: 78, form: 'D', age: 28, height: 176, foot: 'Right', role: 'Fullback', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 78, shooting: 54, passing: 70, dribbling: 74, defending: 70, physical: 72 } },
      { id: 'san-messias', name: 'Messias', fullName: 'Messias Rodrigues da Silva Júnior', number: 24, pos: 'CB', ovr: 75, potential: 76, form: 'D', age: 31, height: 186, foot: 'Right', role: 'Stopper', focus: 'Support', celebration: 'None', photo: null, stats: { pace: 67, shooting: 42, passing: 66, dribbling: 60, defending: 78, physical: 80 } },
      { id: 'san-joao-victor', name: 'João Victor', fullName: 'João Victor de Souza Menezes', number: 32, pos: 'CB', ovr: 73, potential: 80, form: 'D', age: 21, height: 187, foot: 'Right', role: 'Ball-Playing Defender', focus: 'Support', celebration: 'None', photo: null, stats: { pace: 74, shooting: 42, passing: 68, dribbling: 62, defending: 76, physical: 78 } },
      { id: 'san-lateral', name: 'Hayner', fullName: 'Hayner William David', number: 3, pos: 'LB', ovr: 73, potential: 77, form: 'D', age: 30, height: 178, foot: 'Left', role: 'Fullback', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 78, shooting: 50, passing: 70, dribbling: 74, defending: 68, physical: 70 } },
      { id: 'san-sandry', name: 'Sandry', fullName: 'Sandry Roberto Santos Goes', number: 6, pos: 'CM', ovr: 74, potential: 81, form: 'W', age: 24, height: 178, foot: 'Right', role: 'Box-to-Box', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 74, shooting: 64, passing: 76, dribbling: 74, defending: 72, physical: 72 } },
      { id: 'san-otero', name: 'Rómulo Otero', fullName: 'Rómulo Otero Vásquez', number: 22, pos: 'RW', ovr: 75, potential: 76, form: 'W', age: 33, height: 165, foot: 'Left', role: 'Winger', focus: 'Attack', celebration: 'None', photo: null, stats: { pace: 75, shooting: 74, passing: 78, dribbling: 78, defending: 38, physical: 64 } }
    ]
  },

// ---------------------------------------------------------------------------
];


// Clubes que entraram com o pacote de imagens (escudos e fotos de jogador).
// Os elencos são gerados: cada clube recebe nomes do seu país, notas coerentes
// com a posição e retrato de reserva mostrando as iniciais.
// ---------------------------------------------------------------------------

const FIRST_NAMES = {
  en: 'Jack Harry Oliver George Charlie Jacob Thomas Alfie Archie Finley Louie Ryan Callum Reece Connor Tyler Ethan Marcus'.split(' '),
  es: 'Álvaro Pablo Sergio Iker Unai Dani Hugo Marco Rubén Adrián Gonzalo Carlos Aarón Jorge'.split(' '),
  gr: 'Nikos Giorgos Kostas Vangelis Petros Dimitris Anastasios Christos Apostolos Manolis Filippos'.split(' '),
  ar: 'Joaquín Agustín Santiago Facundo Lautaro Enzo Gabriel Nahuel Thiago Nicolás Lucas Matías'.split(' '),
  de: 'Jonas Leon Tim Niklas Kai Florian Max Luca Elias Felix Julian Marvin'.split(' '),
  nl: 'Daan Sem Ruben Thijs Luuk Stijn Bas Jelle Mats Rick Niels Ferry Joost'.split(' '),
  gb: 'Ethan Alfie Owen Harry Mason Callum Louie Rhys Guto Ethan Kian Harvey'.split(' ')
};

const LAST_NAMES = {
  en: 'Hughes|Bennett|Walker|Chapman|Fletcher|Davies|Palmer|Barnes|Norris|Webster|Hayward|Spencer|Bishop|Carroll|Doyle|Heaton|Pennington|Langley|Whitfield|Ashby|Mercer'.split('|'),
  es: 'García|Martínez|López|Sánchez|Pérez|Gómez|Ruiz|Díaz|Moreno|Álvarez|Romero|Navarro|Torres|Vargas|Iglesias|Cabrera'.split('|'),
  gr: 'Papadopoulos|Nikolaidis|Georgiou|Vasileiou|Antoniou|Makris|Dimitriadis|Christodoulou|Stavrou|Karagiannis|Papadias|Galanopoulos'.split('|'),
  ar: 'González|Rodríguez|Fernández|López|Martínez|Hernández|Gómez|Sánchez|Romero|Díaz|Alvarez|Peralta|Benítez'.split('|'),
  de: 'Müller|Schmidt|Schneider|Fischer|Weber|Meyer|Wagner|Becker|Hoffmann|Schäfer|Koch|Bauer|Richter|Klein|Winkler'.split('|'),
  nl: 'de Jong|van Dijk|Bakker|Janssen|Visser|Smit|Meijer|Dekker|van den Berg|Vos|Peters|Hendriks|de Boer|Willemsen|Kuipers'.split('|'),
  gb: 'Jones|Williams|Davies|Evans|Thomas|Roberts|Hughes|Morgan|Griffith|Lloyd|Ellis|Vaughan|Jenkins|PARRY'.split('|')
};

const FORMATION_SLOTS = ['GK', 'RB', 'CB', 'CB', 'LB', 'CM', 'CDM', 'CAM', 'LW', 'ST', 'RW'];
const BENCH_SLOTS = ['GK', 'RB', 'CB', 'CM', 'LW', 'ST', 'CM'];

const POSITION_ROLE = {
  GK: 'Shot Stopper', RB: 'Fullback', CB: 'Stopper', LB: 'Fullback', CM: 'Box-to-Box',
  CDM: 'Anchor', CAM: 'Advanced Playmaker', LW: 'Winger', RW: 'Winger', ST: 'Complete Forward'
};

const POSITION_FOCUS = {
  GK: 'Support', RB: 'Attack', CB: 'Support', LB: 'Support', CM: 'Attack',
  CDM: 'Support', CAM: 'Attack', LW: 'Attack', RW: 'Attack', ST: 'Attack'
};

const POSITION_BIAS = {
  GK: { pace: -14, shooting: -36, passing: -10, dribbling: -20, defending: 8, physical: 6 },
  RB: { pace: 10, shooting: -4, passing: 2, dribbling: 6, defending: 2, physical: 0 },
  CB: { pace: -6, shooting: -16, passing: -2, dribbling: -12, defending: 15, physical: 10 },
  LB: { pace: 10, shooting: -4, passing: 2, dribbling: 6, defending: 2, physical: 0 },
  CM: { pace: 2, shooting: 0, passing: 10, dribbling: 4, defending: 0, physical: 0 },
  CDM: { pace: -4, shooting: -8, passing: 4, dribbling: -2, defending: 10, physical: 8 },
  CAM: { pace: 4, shooting: 8, passing: 12, dribbling: 10, defending: -16, physical: -6 },
  LW: { pace: 14, shooting: 4, passing: 4, dribbling: 12, defending: -18, physical: -8 },
  RW: { pace: 14, shooting: 4, passing: 4, dribbling: 12, defending: -18, physical: -8 },
  ST: { pace: 8, shooting: 16, passing: -2, dribbling: 8, defending: -22, physical: 6 }
};

const clamp = value => Math.max(24, Math.min(95, value));

/** Monta um elenco completo (onze em campo + sete reservas) para um clube. */
function generatedSquad(clubId, pool, offset, base) {
  const firsts = FIRST_NAMES[pool];
  const lasts = LAST_NAMES[pool];

  function player(position, index, number, tier) {
    const first = firsts[(offset * 3 + index * 5) % firsts.length];
    const last = lasts[(offset + index) % lasts.length];
    // "de Jong" vira "Jong" no cartão do campo.
    const short = last.split(' ').pop();
    const ovr = clamp(base + tier + ((index * 7 + offset * 5) % 5) - 2);
    const bias = POSITION_BIAS[position];
    const stats = {
      pace: clamp(ovr - 6 + bias.pace),
      shooting: clamp(ovr - 6 + bias.shooting),
      passing: clamp(ovr - 6 + bias.passing),
      dribbling: clamp(ovr - 6 + bias.dribbling),
      defending: clamp(ovr - 6 + bias.defending),
      physical: clamp(ovr - 6 + bias.physical)
    };
    return {
      id: `${clubId}-${short.toLowerCase().replace(/[^a-z]/g, '')}-${index}`,
      name: short,
      fullName: `${first} ${last}`,
      number,
      pos: position,
      ovr,
      potential: clamp(ovr + 2 + (index % 4)),
      form: (index % 5 === 0 ? 'W' : 'D'),
      age: 20 + ((index * 3 + offset) % 14),
      height: 168 + ((index * 5 + offset) % 26),
      foot: index % 3 === 0 ? 'Left' : 'Right',
      role: POSITION_ROLE[position],
      focus: POSITION_FOCUS[position],
      celebration: 'None',
      photo: null,
      stats
    };
  }

  const numbers = [1, 2, 3, 4, 5, 6, 8, 10, 7, 9, 11];
  const players = FORMATION_SLOTS.map((position, index) => player(position, index, numbers[index], 0));
  const substitutes = BENCH_SLOTS.map((position, index) => player(position, index + 11, 12 + index, -4));
  return { players, substitutes };
}

const EXTRA_CLUBS = [
  {
    id: 'aston-villa', name: 'Aston Villa', shortName: 'Villa', nickname: 'Villans', city: 'Birmingham',
    country: 'Inglaterra', flag: 'en', countryCrest: 'assets/crests/inglaterra.png',
    league: 'Premier League', stadium: 'Villa Park', crest: 'assets/crests/aston-villa.png',
    colors: { primary: '#670e36', secondary: '#95bfe5', accent: '#f4f4f4' },
    ratings: { att: 84, mid: 83, def: 82, ovr: 83 }, stars: 4, pool: 'en', offset: 0
  },
  {
    id: 'brentford', name: 'Brentford', shortName: 'Brentford', nickname: 'Bees', city: 'Londres',
    country: 'Inglaterra', flag: 'en', countryCrest: 'assets/crests/inglaterra.png',
    league: 'Premier League', stadium: 'Gtech Community Stadium', crest: 'assets/crests/brentford.png',
    colors: { primary: '#e30613', secondary: '#ffffff', accent: '#111111' },
    ratings: { att: 79, mid: 78, def: 79, ovr: 79 }, stars: 3, pool: 'en', offset: 4
  },
  {
    id: 'panathinaikos', name: 'Panathinaikos', shortName: 'Pana', nickname: 'Greens', city: 'Atenas',
    country: 'Grécia', flag: 'gr', league: 'Super League Greece', stadium: 'Georgios Karaiskakis Stadium',
    crest: 'assets/crests/panathinaikos.png',
    colors: { primary: '#00843d', secondary: '#ffffff', accent: '#00532a' },
    ratings: { att: 78, mid: 78, def: 78, ovr: 78 }, stars: 3, pool: 'gr', offset: 0
  },
  {
    id: 'river-plate', name: 'River Plate', shortName: 'River', nickname: 'Millonarios', city: 'Buenos Aires',
    country: 'Argentina', flag: 'ar', league: 'Liga Profesional', stadium: 'Estadio Monumental',
    crest: 'assets/crests/river-plate.png',
    colors: { primary: '#f4f4f4', secondary: '#d21c3a', accent: '#0d2c54' },
    ratings: { att: 82, mid: 82, def: 81, ovr: 82 }, stars: 4, pool: 'ar', offset: 0
  },
  {
    id: 'levante', name: 'Levante UD', shortName: 'Levante', nickname: 'Granotas', city: 'Valência',
    country: 'Espanha', flag: 'es', countryCrest: 'assets/crests/espanha.png',
    league: 'LaLiga', stadium: 'Estadi Ciutat de València', crest: 'assets/crests/levante.png',
    colors: { primary: '#b3121b', secondary: '#f5c400', accent: '#0b3b8c' },
    ratings: { att: 76, mid: 76, def: 76, ovr: 76 }, stars: 3, pool: 'es', offset: 3
  },
  {
    id: 'huddersfield-town', name: 'Huddersfield Town', shortName: 'Huddersfield', nickname: 'Terriers', city: 'Huddersfield',
    country: 'Inglaterra', flag: 'en', countryCrest: 'assets/crests/inglaterra.png',
    league: 'EFL Championship', stadium: 'John Smiths Stadium', crest: 'assets/crests/huddersfield-town.png',
    colors: { primary: '#0e63ad', secondary: '#f4f4f4', accent: '#f26522' },
    ratings: { att: 74, mid: 74, def: 73, ovr: 74 }, stars: 3, pool: 'en', offset: 8
  },
  {
    id: 'eintracht-frankfurt', name: 'Eintracht Frankfurt', shortName: 'Frankfurt', nickname: 'Adler', city: 'Frankfurt',
    country: 'Alemanha', flag: 'de', league: 'Bundesliga', stadium: 'Deutsche Bank Park',
    crest: 'assets/crests/eintracht-frankfurt.png',
    colors: { primary: '#e1000f', secondary: '#f4f4f4', accent: '#111111' },
    ratings: { att: 83, mid: 82, def: 81, ovr: 82 }, stars: 4, pool: 'de', offset: 0
  },
  {
    id: 'queens-park-rangers', name: 'Queens Park Rangers', shortName: 'QPR', nickname: 'Hoops', city: 'Londres',
    country: 'Inglaterra', flag: 'en', countryCrest: 'assets/crests/inglaterra.png',
    league: 'EFL Championship', stadium: 'Kiyan Prince Foundation Stadium', crest: 'assets/crests/queens-park-rangers.png',
    colors: { primary: '#1b2a63', secondary: '#f4f4f4', accent: '#d31245' },
    ratings: { att: 77, mid: 77, def: 77, ovr: 77 }, stars: 3, pool: 'en', offset: 12
  },
  {
    id: 'wrexham', name: 'Wrexham', shortName: 'Wrexham', nickname: 'Dragons', city: 'Wrexham',
    country: 'País de Gales', flag: 'gb', league: 'EFL League One', stadium: 'STōK Cae Ras',
    crest: 'assets/crests/wrexham.png',
    colors: { primary: '#f2f2f0', secondary: '#00843d', accent: '#d31245' },
    ratings: { att: 73, mid: 73, def: 72, ovr: 73 }, stars: 3, pool: 'gb', offset: 0
  },
  {
    id: 'sheffield-united', name: 'Sheffield United', shortName: 'Sheffield', nickname: 'Blades', city: 'Sheffield',
    country: 'Inglaterra', flag: 'en', countryCrest: 'assets/crests/inglaterra.png',
    league: 'EFL Championship', stadium: 'Bramall Lane', crest: 'assets/crests/sheffield-united.png',
    colors: { primary: '#1b1b1b', secondary: '#d31245', accent: '#f4f4f4' },
    ratings: { att: 75, mid: 75, def: 75, ovr: 75 }, stars: 3, pool: 'en', offset: 16
  },
  {
    id: 'northampton-town', name: 'Northampton Town', shortName: 'Northampton', nickname: 'Cobblers', city: 'Northampton',
    country: 'Inglaterra', flag: 'en', countryCrest: 'assets/crests/inglaterra.png',
    league: 'EFL League One', stadium: 'Sixfields Stadium', crest: 'assets/crests/northampton-town.png',
    colors: { primary: '#6b1f3b', secondary: '#f4f4f4', accent: '#f4f4f4' },
    ratings: { att: 70, mid: 70, def: 70, ovr: 70 }, stars: 2, pool: 'en', offset: 2
  },
  {
    id: 'rotherham-united', name: 'Rotherham United', shortName: 'Rotherham', nickname: 'Millers', city: 'Rotherham',
    country: 'Inglaterra', flag: 'en', countryCrest: 'assets/crests/inglaterra.png',
    league: 'EFL League One', stadium: 'New York Stadium', crest: 'assets/crests/rotherham-united.png',
    colors: { primary: '#1b1b1b', secondary: '#20a37a', accent: '#d31245' },
    ratings: { att: 71, mid: 71, def: 72, ovr: 71 }, stars: 2, pool: 'en', offset: 6
  },
  {
    id: 'wycombe-wanderers', name: 'Wycombe Wanderers', shortName: 'Wycombe', nickname: 'Chairboys', city: 'High Wycombe',
    country: 'Inglaterra', flag: 'en', countryCrest: 'assets/crests/inglaterra.png',
    league: 'EFL League One', stadium: 'Adams Park', crest: 'assets/crests/wycombe-wanderers.png',
    colors: { primary: '#7a4a2b', secondary: '#1b3f94', accent: '#f7c92e' },
    ratings: { att: 72, mid: 71, def: 70, ovr: 71 }, stars: 2, pool: 'en', offset: 10
  },
  {
    id: 'rkc-waalwijk', name: 'RKC Waalwijk', shortName: 'RKC', nickname: 'Rookies', city: 'Waalwijk',
    country: 'Países Baixos', flag: 'nl', league: 'Eredivisie', stadium: 'Polman Stadion',
    crest: 'assets/crests/rkc-waalwijk.png',
    colors: { primary: '#1b4f9c', secondary: '#f4f4f4', accent: '#f7c92e' },
    ratings: { att: 74, mid: 73, def: 73, ovr: 73 }, stars: 3, pool: 'nl', offset: 0
  }
];

for (const club of EXTRA_CLUBS) {
  const squad = generatedSquad(club.id, club.pool, club.offset, club.ratings.ovr);
  TEAMS.push({
    id: club.id,
    squadSource:'generated',
    name: club.name,
    shortName: club.shortName,
    nickname: club.nickname,
    city: club.city,
    country: club.country,
    flag: club.flag,
    countryCrest: club.countryCrest || null,
    league: club.league,
    stadium: club.stadium,
    crest: club.crest,
    colors: club.colors,
    ratings: club.ratings,
    stars: club.stars,
    formation: '4-3-3',
    players: squad.players,
    substitutes: squad.substitutes
  });
}

// Não duplica clubes que já existiam; os novos elencos são explicitamente fictícios.
for (const club of COLLECTION_CLUBS) {
  if (TEAMS.some(team => team.id === club.id)) continue;
  const squad = generatedSquad(club.id, FIRST_NAMES[club.flag] ? club.flag : 'en', 0, 75);
  TEAMS.push({ ...club, shortName: club.name, nickname: club.name,
    city: '', league: club.country, stadium: 'Elenco fictício', squadSource: 'generated',
    crest: `assets/crests/${club.id}.png`, formation: '4-3-3', stars: 3.5,
    ratings: { att: 75, mid: 75, def: 75, ovr: 75 }, ...squad });
}

// Getter preserva atualização/reversão das escolhas sem alterar o cadastro salvo.
for(const team of TEAMS){const original=team.crest;Object.defineProperty(team,'crest',{enumerable:true,get:()=>crestFor(team.id,original)});}

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
