// Elencos reais do futebol atual, por clube.
//
// O catálogo antigo misturava jogadores que já saíram (Hugo Souza aparecia no
// Flamengo, mas ele é goleiro do Corinthians) com elencos gerados por sorteio
// nos clubes da coleção. Aqui ficam os nomes de verdade de cada clube, com
// posição e força, e `teams.js` aplica em cima do elenco gerado: o time passa a
// ter 11 titulares + banco com os jogadores atuais e o resto do plantel é
// completado por jogadores gerados do mesmo país (elenco nunca fica vazio).
//
// Formato de cada jogador: [nome, número, posição, overall].
// Os elencos são um retrato editorial do plantel (não uma tabela oficial de
// transferências) e podem ser atualizados só editando esta lista.

/** Clubes brasileiros com elenco real. */
export const BRAZIL_SQUADS = {
  flamengo: [
    ['Rossi', 1, 'GK', 84], ['Varela', 2, 'RB', 79], ['Léo Ortiz', 4, 'CB', 83],
    ['Léo Pereira', 3, 'CB', 83], ['Ayrton Lucas', 6, 'LB', 82], ['Erick Pulgar', 5, 'CDM', 82],
    ['Jorginho', 8, 'CM', 83], ['De Arrascaeta', 10, 'CAM', 88], ['Luiz Araújo', 7, 'RW', 82],
    ['Pedro', 9, 'ST', 87], ['Gerson', 11, 'LW', 84],
    ['Matheus Cunha', 25, 'GK', 78], ['Wesley', 43, 'RB', 78], ['Cleiton', 24, 'CB', 76],
    ['Danilo', 13, 'CB', 79], ['Allan', 21, 'CDM', 77], ['Everton Araújo', 19, 'CM', 75],
    ['Juninho', 17, 'ST', 76], ['Michael', 30, 'RW', 79]
  ],
  palmeiras: [
    ['Weverton', 1, 'GK', 85], ['Giay', 2, 'RB', 80], ['Murilo', 3, 'CB', 82],
    ['Gustavo Gómez', 15, 'CB', 84], ['Piquerez', 22, 'LB', 84], ['Aníbal Moreno', 5, 'CDM', 84],
    ['Richard Ríos', 8, 'CM', 83], ['Raphael Veiga', 23, 'CAM', 85], ['Estêvão', 41, 'RW', 84],
    ['Vitor Roque', 9, 'ST', 84], ['Felipe Anderson', 7, 'LW', 81],
    ['Marcelo Lomba', 12, 'GK', 75], ['Mayke', 6, 'RB', 77], ['Naves', 34, 'CB', 75],
    ['Benedetti', 4, 'CB', 76], ['Fabinho', 20, 'CDM', 77], ['Gabriel Menino', 25, 'CM', 78],
    ['Flaco López', 42, 'ST', 79], ['Facundo Torres', 17, 'LW', 80]
  ],
  corinthians: [
    ['Hugo Souza', 1, 'GK', 83], ['Matheuzinho', 2, 'RB', 79], ['Cacá', 4, 'CB', 78], // Hugo Souza É do Corinthians.
    ['Félix Torres', 3, 'CB', 79], ['Matheus Bidu', 6, 'LB', 78], ['Raniele', 26, 'CDM', 79],
    ['Rodrigo Garro', 10, 'CAM', 83], ['André Carrillo', 17, 'RW', 78], ['Memphis Depay', 94, 'ST', 84],
    ['Yuri Alberto', 9, 'ST', 84], ['Ángel Romero', 11, 'LW', 80],
    ['Matheus Donelli', 32, 'GK', 76], ['Gustavo Henrique', 27, 'CB', 77], ['André Ramalho', 5, 'CB', 76],
    ['Breno Bidon', 25, 'CM', 77], ['Maycon', 14, 'CM', 76], ['Talles Magno', 43, 'LW', 76],
    ['Pedro Raul', 20, 'ST', 75]
  ],
  santos: [
    ['Gabriel Brazão', 1, 'GK', 80], ['JP Chermont', 33, 'RB', 76], ['Léo Godoy', 6, 'LB', 74],
    ['Zé Ivaldo', 4, 'CB', 77], ['Gil', 3, 'CB', 76],
    ['João Schmidt', 5, 'CDM', 77], ['Diego Pituca', 21, 'CM', 79], ['Neymar Jr.', 10, 'CAM', 88],
    ['Guilherme', 11, 'RW', 78], ['Rollheiser', 19, 'RW', 78], ['Tiquinho Soares', 9, 'ST', 79], ['Soteldo', 22, 'LW', 79],
    ['João Paulo', 34, 'GK', 79], ['Keven Mota', 50, 'GK', 70], ['Aderlan', 13, 'RB', 74], ['Luan Peres', 14, 'CB', 76],
    ['Tomás Rincón', 8, 'CDM', 75], ['Gabriel Barbosa', 27, 'ST', 82], ['Thaciano', 20, 'CM', 77]
  ],
  'sao-paulo': [
    ['Rafael', 23, 'GK', 81], ['Rafinha', 13, 'RB', 76], ['Arboleda', 5, 'CB', 80],
    ['Sabino', 2, 'CB', 78], ['Wendell', 6, 'LB', 78], ['Alisson', 25, 'CDM', 79],
    ['Bobadilla', 15, 'CM', 76], ['Lucas Moura', 10, 'CAM', 82], ['Ferreyra', 11, 'ST', 77],
    ['Calleri', 9, 'ST', 83], ['Oscar', 8, 'CAM', 82],
    ['Jandrei', 1, 'GK', 75], ['Igor Vinícius', 22, 'RB', 75], ['Ferraresi', 4, 'CB', 76],
    ['Luiz Gustavo', 16, 'CDM', 76], ['Rodrigo Nestor', 14, 'CM', 77], ['André Silva', 19, 'ST', 75]
  ],
  fluminense: [
    ['Fábio', 1, 'GK', 82], ['Guga', 23, 'RB', 78], ['Thiago Silva', 3, 'CB', 82],
    ['Ignácio', 4, 'CB', 77], ['Renê', 6, 'LB', 76], ['Hércules', 8, 'CDM', 78],
    ['Martinelli', 22, 'CM', 78], ['Jhon Arias', 17, 'RW', 82], ['Keno', 11, 'LW', 79],
    ['Germán Cano', 14, 'ST', 80], ['Colombia', 10, 'CAM', 79],
    ['Vitor Eudes', 12, 'GK', 73], ['Samuel Xavier', 2, 'RB', 75], ['Manuel', 21, 'CB', 74],
    ['Nonato', 5, 'CM', 75], ['Ganso', 7, 'CAM', 78], ['Everaldo', 9, 'ST', 74]
  ],
  botafogo: [
    ['John', 1, 'GK', 81], ['Vitinho', 2, 'RB', 78], ['Alexander Barboza', 4, 'CB', 80],
    ['Bastos', 3, 'CB', 79], ['Marçal', 6, 'LB', 76], ['Allan', 5, 'CDM', 78],
    ['Marlon Freitas', 8, 'CM', 79], ['Savarino', 10, 'CAM', 82], ['Luiz Henrique', 7, 'RW', 82],
    ['Igor Jesus', 9, 'ST', 81], ['Artur', 11, 'LW', 80],
    ['Léo Linck', 12, 'GK', 73], ['Mateo Ponte', 13, 'RB', 74], ['Jair', 14, 'CB', 75],
    ['Tchê Tchê', 15, 'CM', 76], ['Patrick de Paula', 16, 'CM', 75], ['Matheus Nascimento', 19, 'ST', 75]
  ],
  'vasco-da-gama': [
    ['Léo Jardim', 1, 'GK', 82], ['Paulo Henrique', 2, 'RB', 77], ['Maicon', 4, 'CB', 78],
    ['Léo', 3, 'CB', 78], ['Lucas Piton', 6, 'LB', 79], ['Hugo Moura', 5, 'CDM', 78],
    ['Mateus Carvalho', 15, 'CM', 76], ['Philippe Coutinho', 11, 'CAM', 82], ['Rayan', 7, 'RW', 79],
    ['Vegetti', 9, 'ST', 81], ['Nuno Moreira', 10, 'LW', 78],
    ['Pablo', 12, 'GK', 74], ['Vitor Luis', 13, 'RB', 74], ['João Victor', 14, 'CB', 75],
    ['Tchê Tchê', 8, 'CM', 75], ['Payet', 22, 'CAM', 80], ['David Corrêa', 19, 'ST', 75]
  ],
  cruzeiro: [
    ['Cássio', 1, 'GK', 83], ['William', 2, 'RB', 77], ['Fabricio Bruno', 3, 'CB', 80],
    ['João Marcelo', 4, 'CB', 76], ['Marlon', 6, 'LB', 77], ['Lucas Romero', 5, 'CDM', 79],
    ['Lucas Villalba', 8, 'CM', 76], ['Matheus Pereira', 10, 'CAM', 83], ['Christian', 7, 'RW', 77],
    ['Kaio Jorge', 9, 'ST', 79], ['Lucas Silva', 11, 'LW', 78],
    ['Léo Aragão', 12, 'GK', 73], ['Kaiki', 13, 'RB', 73], ['Zé Ivaldo', 14, 'CB', 75],
    ['Walace', 15, 'CDM', 77], ['Barreal', 16, 'LW', 76], ['Bolasie', 19, 'ST', 74]
  ],
  internacional: [
    ['Anthoni', 1, 'GK', 79], ['Agustín Rogel', 2, 'RB', 76], ['Vitão', 3, 'CB', 79],
    ['Mercado', 4, 'CB', 77], ['Bernabei', 6, 'LB', 76], ['Bruno Henrique', 5, 'CDM', 78],
    ['Thiago Maia', 8, 'CM', 77], ['Alan Patrick', 10, 'CAM', 82], ['Wesley', 7, 'RW', 77],
    ['Ricardo Mathias', 9, 'ST', 78], ['Enner Valencia', 13, 'ST', 79],
    ['Ivan', 12, 'GK', 73], ['Bustos', 14, 'RB', 75], ['Vitor Gabriel', 15, 'CB', 73],
    ['Rômulo', 16, 'CM', 74], ['Hyoran', 17, 'CAM', 75], ['Borré', 19, 'ST', 78]
  ]
};

/**
 * Clubes europeus com elenco real. Só os que o jogo já conhece como clube
 * grande; o resto do catálogo europeu continua com o elenco gerado.
 */
export const EUROPE_SQUADS = {
  'fc-barcelona': [
    ['Joan García', 1, 'GK', 84], ['Jules Koundé', 23, 'RB', 86], ['Ronald Araújo', 4, 'CB', 85],
    ['Pau Cubarsí', 2, 'CB', 84], ['Alejandro Balde', 3, 'LB', 84], ['Frenkie de Jong', 21, 'CDM', 86],
    ['Pedri', 8, 'CM', 88], ['Dani Olmo', 20, 'CAM', 85], ['Lamine Yamal', 19, 'RW', 88],
    ['Robert Lewandowski', 9, 'ST', 87], ['Raphinha', 11, 'LW', 87],
    ['Wojciech Szczęsny', 25, 'GK', 80], ['Héctor Fort', 32, 'RB', 75], ['Eric García', 24, 'CB', 79],
    ['Gavi', 6, 'CM', 83], ['Fermín López', 16, 'CAM', 82], ['Ferran Torres', 7, 'LW', 82],
    ['Marc Casadó', 17, 'CDM', 78]
  ],
  'real-madrid': [
    ['Thibaut Courtois', 1, 'GK', 89], ['Federico Valverde', 8, 'RB', 87], ['Antonio Rüdiger', 22, 'CB', 86],
    ['Dean Huijsen', 24, 'CB', 83], ['Fran García', 20, 'LB', 80], ['Aurélien Tchouaméni', 14, 'CDM', 85],
    ['Jude Bellingham', 5, 'CM', 89], ['Arda Güler', 15, 'CAM', 84], ['Vinícius Júnior', 7, 'LW', 90],
    ['Kylian Mbappé', 9, 'ST', 91], ['Rodrygo', 11, 'RW', 86],
    ['Andriy Lunin', 13, 'GK', 80], ['Dani Carvajal', 2, 'RB', 84], ['Éder Militão', 3, 'CB', 85],
    ['Eduardo Camavinga', 6, 'CM', 84], ['Brahim Díaz', 21, 'RW', 82], ['Endrick', 16, 'ST', 79]
  ],
  'manchester-city': [
    ['Gianluigi Donnarumma', 25, 'GK', 88], ['Rico Lewis', 82, 'RB', 81], ['Rúben Dias', 3, 'CB', 88],
    ['Joško Gvardiol', 24, 'CB', 85], ['Nathan Aké', 6, 'LB', 82], ['Rodri', 16, 'CDM', 91],
    ['Tijjani Reijnders', 4, 'CM', 85], ['Bernardo Silva', 20, 'CAM', 87], ['Phil Foden', 47, 'LW', 86],
    ['Erling Haaland', 9, 'ST', 91], ['Savinho', 26, 'RW', 82],
    ['Stefan Ortega', 18, 'GK', 79], ['John Stones', 5, 'CB', 84], ['Matheus Nunes', 27, 'CM', 79],
    ['Nico González', 14, 'CDM', 80], ['Jeremy Doku', 11, 'LW', 84], ['Omar Marmoush', 7, 'ST', 83]
  ],
  liverpool: [
    ['Alisson', 1, 'GK', 89], ['Conor Bradley', 84, 'RB', 80], ['Virgil van Dijk', 4, 'CB', 88],
    ['Ibrahima Konaté', 5, 'CB', 85], ['Milos Kerkez', 6, 'LB', 81], ['Ryan Gravenberch', 38, 'CDM', 84],
    ['Alexis Mac Allister', 10, 'CM', 86], ['Dominik Szoboszlai', 8, 'CAM', 85], ['Mohamed Salah', 11, 'RW', 89],
    ['Alexander Isak', 9, 'ST', 87], ['Florian Wirtz', 7, 'CAM', 88],
    ['Caoimhín Kelleher', 62, 'GK', 78], ['Andy Robertson', 26, 'LB', 82], ['Joe Gomez', 2, 'CB', 79],
    ['Curtis Jones', 17, 'CM', 79], ['Cody Gakpo', 18, 'LW', 83], ['Hugo Ekitiké', 22, 'ST', 82]
  ],
  'bayern-munich': [
    ['Manuel Neuer', 1, 'GK', 86], ['Josip Stanišić', 44, 'RB', 79], ['Dayot Upamecano', 2, 'CB', 84],
    ['Kim Min-jae', 3, 'CB', 83], ['Alphonso Davies', 19, 'LB', 85], ['Joshua Kimmich', 6, 'CDM', 87],
    ['Leon Goretzka', 8, 'CM', 83], ['Jamal Musiala', 42, 'CAM', 88], ['Michael Olise', 17, 'RW', 86],
    ['Harry Kane', 9, 'ST', 90], ['Serge Gnabry', 7, 'LW', 84],
    ['Sven Ulreich', 26, 'GK', 76], ['Konrad Laimer', 27, 'RB', 82], ['Dayot', 5, 'CB', 79],
    ['Aleksandar Pavlović', 45, 'CDM', 82], ['Kingsley Coman', 11, 'LW', 83], ['Nicolas Jackson', 24, 'ST', 81]
  ],
  psg: [
    ['Lucas Chevalier', 30, 'GK', 83], ['Achraf Hakimi', 2, 'RB', 86], ['Marquinhos', 5, 'CB', 86],
    ['Willian Pacho', 51, 'CB', 84], ['Nuno Mendes', 25, 'LB', 86], ['Vitinha', 17, 'CDM', 87],
    ['João Neves', 87, 'CM', 85], ['Fabián Ruiz', 8, 'CAM', 85], ['Désiré Doué', 14, 'RW', 82],
    ['Ousmane Dembélé', 10, 'ST', 89], ['Khvicha Kvaratskhelia', 7, 'LW', 87],
    ['Matvey Safonov', 39, 'GK', 78], ['Lucas Hernández', 21, 'CB', 79], ['Lee Kang-in', 19, 'CAM', 81],
    ['Bradley Barcola', 29, 'LW', 83], ['Gonçalo Ramos', 9, 'ST', 82], ['Warren Zaïre-Emery', 33, 'CM', 81]
  ],
  'celtic': [
    ['Kasper Schmeichel', 1, 'GK', 79], ['Alistair Johnston', 2, 'RB', 77], ['Cameron Carter-Vickers', 20, 'CB', 78],
    ['Liam Scales', 5, 'CB', 75], ['Kieran Tierney', 3, 'LB', 79], ['Callum McGregor', 42, 'CM', 80],
    ['Reo Hatate', 41, 'CM', 77], ['Arne Engels', 27, 'CAM', 77], ['Nicolas Kühn', 10, 'RW', 78],
    ['Daizen Maeda', 38, 'ST', 78], ['Hyun-jun Yang', 13, 'LW', 74],
    ['Viljami Sinisalo', 12, 'GK', 72], ['Greg Taylor', 15, 'LB', 74], ['Maik Nawrocki', 17, 'CB', 73],
    ['Luke McCowan', 21, 'CM', 74], ['James Forrest', 49, 'RW', 74], ['Adam Idah', 9, 'ST', 75]
  ]
};

// Força de cada clube: o XI real define a média, mas o tamanho do clube manda
// na hora da negociação (o atleta novo chega num Real Madrid ou num Celtic e a
// chance de entrar é diferente). A nota é a média do XI ajustada para o alvo.
export const CLUB_STRENGTH = {
  'real-madrid': 89, 'fc-barcelona': 88, 'manchester-city': 88, 'liverpool': 87,
  'bayern-munich': 87, 'psg': 86, 'inter': 85, 'arsenal': 85,
  'flamengo': 83, 'palmeiras': 83, 'corinthians': 80, 'botafogo': 80,
  'sao-paulo': 79, 'fluminense': 79, 'vasco-da-gama': 79, 'cruzeiro': 79,
  'santos': 78, 'internacional': 78, 'celtic': 77
};

/** Todos os elencos reais, por id de clube. */
export const REAL_SQUADS = { ...BRAZIL_SQUADS, ...EUROPE_SQUADS };

export const realSquadFor = clubId => REAL_SQUADS[clubId] || null;

/** Nomes conhecidos de um clube, usados pelos testes e pela auditoria. */
export function squadNames(clubId) {
  const squad = realSquadFor(clubId);
  return squad ? squad.map(([name]) => name) : [];
}
