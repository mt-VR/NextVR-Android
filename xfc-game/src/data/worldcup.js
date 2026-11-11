import { FIFA_MEMBERS } from './fifa-members.js';
// Seleções da Copa do Mundo de 2022 e campanhas jogáveis no XFC.
// Cada seleção traz um XI de época; o sorteio distribui 32 países em oito
// grupos e a campanha acompanha os resultados até a decisão.

const lineup = players => players.map(([name, number, position, rating]) => ({
  name, number, position, rating
}));

function nation(id, name, flagCode, stars, ratings, colors, players) {
  return {
    id,
    name,
    flagCode,
    crest: flagCode,
    stars,
    ratings,
    colors: {
      primary: colors[0],
      secondary: colors[1],
      trim: colors[2] || '#ffffff',
      keeperPrimary: colors[3] || '#f2c94c',
      keeperSecondary: colors[4] || '#19202a'
    },
    players: lineup(players)
  };
}

// Ordem de cada XI: GK, RB, CB, CB, LB, CDM, CM, CM, RW, ST, LW.
export const NATIONAL_TEAMS = [
  nation('qatar', 'Catar', 'qa', 2, { ATT: 70, MID: 69, DEF: 67 }, ['#8a1538', '#ffffff', '#8a1538'], [
    ['Saad Al-Sheeb', 1, 'GK', 70], ['Pedro Miguel', 2, 'RB', 72], ['Boualem Khoukhi', 16, 'CB', 72],
    ['Tarek Salman', 5, 'CB', 69], ['Abdelkarim Hassan', 3, 'LB', 73], ['Assim Madibo', 23, 'CDM', 69],
    ['Karim Boudiaf', 14, 'CM', 68], ['Abdulaziz Hatem', 6, 'CM', 70], ['Ismaeel Mohammad', 17, 'RW', 69],
    ['Almoez Ali', 19, 'ST', 74], ['Akram Afif', 11, 'LW', 77]
  ]),
  nation('ecuador', 'Equador', 'ec', 3, { ATT: 76, MID: 76, DEF: 77 }, ['#ffdd00', '#15499a', '#d92732'], [
    ['Hernán Galíndez', 1, 'GK', 74], ['Ángelo Preciado', 17, 'RB', 76], ['Félix Torres', 2, 'CB', 77],
    ['Piero Hincapié', 3, 'CB', 81], ['Pervis Estupiñán', 7, 'LB', 80], ['Moisés Caicedo', 23, 'CDM', 82],
    ['Carlos Gruezo', 8, 'CM', 75], ['Alan Franco', 21, 'CM', 75], ['Gonzalo Plata', 19, 'RW', 78],
    ['Enner Valencia', 13, 'ST', 80], ['Romario Ibarra', 10, 'LW', 75]
  ]),
  nation('senegal', 'Senegal', 'sn', 3, { ATT: 78, MID: 76, DEF: 77 }, ['#087b45', '#f4d22f', '#d42635'], [
    ['Édouard Mendy', 16, 'GK', 82], ['Youssouf Sabaly', 21, 'RB', 76], ['Kalidou Koulibaly', 3, 'CB', 86],
    ['Abdou Diallo', 22, 'CB', 78], ['Ismail Jakobs', 14, 'LB', 75], ['Nampalys Mendy', 6, 'CDM', 75],
    ['Idrissa Gana Gueye', 5, 'CM', 80], ['Cheikhou Kouyaté', 8, 'CM', 77], ['Ismaïla Sarr', 18, 'RW', 82],
    ['Boulaye Dia', 9, 'ST', 78], ['Iliman Ndiaye', 13, 'LW', 77]
  ]),
  nation('netherlands', 'Países Baixos', 'nl', 4, { ATT: 82, MID: 82, DEF: 83 }, ['#f36c21', '#ffffff', '#21468b'], [
    ['Andries Noppert', 23, 'GK', 78], ['Denzel Dumfries', 22, 'RB', 82], ['Jurrien Timber', 2, 'CB', 82],
    ['Virgil van Dijk', 4, 'CB', 89], ['Nathan Aké', 5, 'LB', 83], ['Marten de Roon', 15, 'CDM', 79],
    ['Frenkie de Jong', 21, 'CM', 87], ['Davy Klaassen', 14, 'CM', 79], ['Steven Bergwijn', 7, 'RW', 81],
    ['Memphis Depay', 10, 'ST', 85], ['Cody Gakpo', 8, 'LW', 83]
  ]),
  nation('england', 'Inglaterra', 'en', 4, { ATT: 86, MID: 85, DEF: 84 }, ['#f4f4f4', '#19366f', '#d23b4b'], [
    ['Jordan Pickford', 1, 'GK', 84], ['Kyle Walker', 2, 'RB', 84], ['John Stones', 5, 'CB', 84],
    ['Harry Maguire', 6, 'CB', 80], ['Luke Shaw', 3, 'LB', 82], ['Declan Rice', 4, 'CDM', 86],
    ['Jude Bellingham', 22, 'CM', 86], ['Jordan Henderson', 8, 'CM', 82], ['Bukayo Saka', 17, 'RW', 86],
    ['Harry Kane', 9, 'ST', 90], ['Raheem Sterling', 10, 'LW', 84]
  ]),
  nation('usa', 'Estados Unidos', 'us', 3, { ATT: 76, MID: 77, DEF: 75 }, ['#ffffff', '#1b3f8b', '#d9273f'], [
    ['Matt Turner', 1, 'GK', 77], ['Sergiño Dest', 2, 'RB', 78], ['Walker Zimmerman', 3, 'CB', 76],
    ['Tim Ream', 13, 'CB', 77], ['Antonee Robinson', 5, 'LB', 78], ['Tyler Adams', 4, 'CDM', 80],
    ['Weston McKennie', 8, 'CM', 79], ['Yunus Musah', 6, 'CM', 78], ['Timothy Weah', 21, 'RW', 78],
    ['Josh Sargent', 24, 'ST', 75], ['Christian Pulisic', 10, 'LW', 82]
  ]),
  nation('iran', 'Irã', 'ir', 3, { ATT: 75, MID: 73, DEF: 73 }, ['#d92336', '#ffffff', '#218c55'], [
    ['Alireza Beiranvand', 1, 'GK', 76], ['Sadegh Moharrami', 2, 'RB', 73], ['Majid Hosseini', 19, 'CB', 73],
    ['Morteza Pouraliganji', 8, 'CB', 74], ['Milad Mohammadi', 5, 'LB', 74], ['Saeid Ezatolahi', 6, 'CDM', 74],
    ['Ehsan Hajsafi', 3, 'CM', 74], ['Ahmad Noorollahi', 21, 'CM', 75], ['Alireza Jahanbakhsh', 7, 'RW', 76],
    ['Mehdi Taremi', 9, 'ST', 84], ['Sardar Azmoun', 20, 'LW', 80]
  ]),
  nation('wales', 'País de Gales', 'wa', 3, { ATT: 76, MID: 74, DEF: 73 }, ['#d51d36', '#ffffff', '#13784b'], [
    ['Wayne Hennessey', 1, 'GK', 76], ['Neco Williams', 3, 'RB', 75], ['Chris Mepham', 5, 'CB', 73],
    ['Joe Rodon', 6, 'CB', 74], ['Ben Davies', 4, 'LB', 78], ['Ethan Ampadu', 15, 'CDM', 75],
    ['Aaron Ramsey', 10, 'CM', 78], ['Harry Wilson', 8, 'CM', 76], ['Gareth Bale', 11, 'RW', 82],
    ['Kieffer Moore', 13, 'ST', 75], ['Daniel James', 20, 'LW', 77]
  ]),
  nation('argentina', 'Argentina', 'ar', 5, { ATT: 88, MID: 89, DEF: 84 }, ['#79c6e8', '#ffffff', '#1a4f91'], [
    ['Emiliano Martínez', 23, 'GK', 86], ['Nahuel Molina', 26, 'RB', 80], ['Cristian Romero', 13, 'CB', 84],
    ['Nicolás Otamendi', 19, 'CB', 83], ['Marcos Acuña', 8, 'LB', 82], ['Leandro Paredes', 5, 'CDM', 82],
    ['Rodrigo De Paul', 7, 'CM', 84], ['Alexis Mac Allister', 20, 'CM', 83], ['Lionel Messi', 10, 'RW', 92],
    ['Julián Álvarez', 9, 'ST', 84], ['Ángel Di María', 11, 'LW', 85]
  ]),
  nation('saudi-arabia', 'Arábia Saudita', 'sa', 2, { ATT: 73, MID: 73, DEF: 71 }, ['#08784d', '#ffffff', '#08784d'], [
    ['Mohammed Al-Owais', 21, 'GK', 76], ['Mohammed Al-Breik', 2, 'RB', 74], ['Hassan Al-Tambakti', 17, 'CB', 73],
    ['Ali Al-Bulaihi', 5, 'CB', 74], ['Yasser Al-Shahrani', 13, 'LB', 75], ['Mohamed Kanno', 23, 'CDM', 76],
    ['Abdullah Al-Malki', 8, 'CM', 72], ['Salman Al-Faraj', 7, 'CM', 77], ['Firas Al-Buraikan', 9, 'RW', 74],
    ['Saleh Al-Shehri', 11, 'ST', 75], ['Salem Al-Dawsari', 10, 'LW', 81]
  ]),
  nation('mexico', 'México', 'mx', 4, { ATT: 80, MID: 79, DEF: 77 }, ['#087346', '#ffffff', '#d52637'], [
    ['Guillermo Ochoa', 13, 'GK', 82], ['Jorge Sánchez', 19, 'RB', 76], ['César Montes', 3, 'CB', 78],
    ['Héctor Moreno', 15, 'CB', 77], ['Jesús Gallardo', 23, 'LB', 77], ['Edson Álvarez', 4, 'CDM', 82],
    ['Héctor Herrera', 16, 'CM', 79], ['Luis Chávez', 24, 'CM', 80], ['Hirving Lozano', 22, 'RW', 82],
    ['Henry Martín', 20, 'ST', 78], ['Alexis Vega', 10, 'LW', 80]
  ]),
  nation('poland', 'Polônia', 'pl', 3, { ATT: 80, MID: 77, DEF: 76 }, ['#ffffff', '#d6243b', '#d6243b'], [
    ['Wojciech Szczęsny', 1, 'GK', 85], ['Matty Cash', 2, 'RB', 78], ['Kamil Glik', 15, 'CB', 76],
    ['Jakub Kiwior', 14, 'CB', 76], ['Bartosz Bereszyński', 18, 'LB', 76], ['Grzegorz Krychowiak', 10, 'CDM', 75],
    ['Piotr Zieliński', 20, 'CM', 84], ['Sebastian Szymański', 19, 'CM', 80], ['Przemysław Frankowski', 24, 'RW', 78],
    ['Robert Lewandowski', 9, 'ST', 90], ['Jakub Kamiński', 13, 'LW', 77]
  ]),
  nation('france', 'França', 'fr', 5, { ATT: 89, MID: 86, DEF: 86 }, ['#173c78', '#e6424a', '#ffffff'], [
    ['Hugo Lloris', 1, 'GK', 85], ['Jules Koundé', 5, 'RB', 82], ['Raphaël Varane', 4, 'CB', 84],
    ['Dayot Upamecano', 18, 'CB', 82], ['Theo Hernández', 22, 'LB', 85], ['Aurélien Tchouaméni', 8, 'CDM', 84],
    ['Adrien Rabiot', 14, 'CM', 82], ['Antoine Griezmann', 7, 'CM', 87], ['Ousmane Dembélé', 11, 'RW', 85],
    ['Olivier Giroud', 9, 'ST', 84], ['Kylian Mbappé', 10, 'LW', 92]
  ]),
  nation('australia', 'Austrália', 'au', 3, { ATT: 74, MID: 73, DEF: 73 }, ['#08794a', '#f2cd31', '#ffffff'], [
    ['Mathew Ryan', 1, 'GK', 77], ['Milos Degenek', 2, 'RB', 74], ['Harry Souttar', 19, 'CB', 78],
    ['Kye Rowles', 4, 'CB', 73], ['Aziz Behich', 16, 'LB', 74], ['Aaron Mooy', 13, 'CDM', 77],
    ['Jackson Irvine', 22, 'CM', 75], ['Riley McGree', 14, 'CM', 74], ['Mathew Leckie', 7, 'RW', 75],
    ['Mitchell Duke', 15, 'ST', 74], ['Craig Goodwin', 23, 'LW', 76]
  ]),
  nation('denmark', 'Dinamarca', 'dk', 4, { ATT: 80, MID: 81, DEF: 81 }, ['#d51d35', '#ffffff', '#d51d35'], [
    ['Kasper Schmeichel', 1, 'GK', 83], ['Rasmus Kristensen', 13, 'RB', 77], ['Andreas Christensen', 6, 'CB', 82],
    ['Joachim Andersen', 2, 'CB', 79], ['Joakim Mæhle', 5, 'LB', 80], ['Pierre-Emile Højbjerg', 23, 'CDM', 83],
    ['Thomas Delaney', 8, 'CM', 79], ['Christian Eriksen', 10, 'CM', 84], ['Andreas Skov Olsen', 11, 'RW', 80],
    ['Kasper Dolberg', 12, 'ST', 79], ['Mikkel Damsgaard', 14, 'LW', 78]
  ]),
  nation('tunisia', 'Tunísia', 'tn', 3, { ATT: 73, MID: 74, DEF: 75 }, ['#d32639', '#ffffff', '#d32639'], [
    ['Aymen Dahmen', 16, 'GK', 74], ['Wajdi Kechrida', 20, 'RB', 73], ['Yassine Meriah', 4, 'CB', 73],
    ['Montassar Talbi', 3, 'CB', 75], ['Ali Abdi', 24, 'LB', 75], ['Aïssa Laïdouni', 14, 'CDM', 77],
    ['Ellyes Skhiri', 17, 'CM', 79], ['Anis Ben Slimane', 25, 'CM', 74], ['Wahbi Khazri', 10, 'RW', 77],
    ['Issam Jebali', 9, 'ST', 74], ['Naim Sliti', 23, 'LW', 75]
  ]),
  nation('spain', 'Espanha', 'es', 4, { ATT: 85, MID: 88, DEF: 84 }, ['#d92332', '#f5ca31', '#f4f4f4'], [
    ['Unai Simón', 23, 'GK', 83], ['Dani Carvajal', 20, 'RB', 84], ['Rodri', 16, 'CB', 87],
    ['Aymeric Laporte', 24, 'CB', 83], ['Jordi Alba', 18, 'LB', 83], ['Sergio Busquets', 5, 'CDM', 84],
    ['Pedri', 26, 'CM', 86], ['Gavi', 9, 'CM', 83], ['Marco Asensio', 10, 'RW', 82],
    ['Álvaro Morata', 7, 'ST', 84], ['Ferran Torres', 11, 'LW', 83]
  ]),
  nation('costa-rica', 'Costa Rica', 'cr', 2, { ATT: 72, MID: 71, DEF: 73 }, ['#174a92', '#ffffff', '#d72839'], [
    ['Keylor Navas', 1, 'GK', 84], ['Keysher Fuller', 4, 'RB', 72], ['Óscar Duarte', 6, 'CB', 73],
    ['Francisco Calvo', 15, 'CB', 74], ['Bryan Oviedo', 8, 'LB', 73], ['Celso Borges', 5, 'CDM', 74],
    ['Yeltsin Tejeda', 17, 'CM', 73], ['Brandon Aguilera', 20, 'CM', 71], ['Joel Campbell', 12, 'RW', 76],
    ['Anthony Contreras', 7, 'ST', 72], ['Jewison Bennette', 9, 'LW', 73]
  ]),
  nation('germany', 'Alemanha', 'de', 4, { ATT: 85, MID: 86, DEF: 85 }, ['#f3f3f3', '#222222', '#d6323b'], [
    ['Manuel Neuer', 1, 'GK', 87], ['Joshua Kimmich', 6, 'RB', 87], ['Niklas Süle', 15, 'CB', 83],
    ['Antonio Rüdiger', 2, 'CB', 86], ['David Raum', 3, 'LB', 80], ['Leon Goretzka', 8, 'CDM', 84],
    ['İlkay Gündoğan', 21, 'CM', 85], ['Jamal Musiala', 14, 'CM', 86], ['Serge Gnabry', 10, 'RW', 84],
    ['Kai Havertz', 7, 'ST', 84], ['Thomas Müller', 13, 'LW', 84]
  ]),
  nation('japan', 'Japão', 'jp', 3, { ATT: 77, MID: 77, DEF: 75 }, ['#173b80', '#ffffff', '#d9273b'], [
    ['Shūichi Gonda', 12, 'GK', 76], ['Takehiro Tomiyasu', 16, 'RB', 82], ['Maya Yoshida', 22, 'CB', 78],
    ['Ko Itakura', 4, 'CB', 77], ['Yuto Nagatomo', 5, 'LB', 75], ['Wataru Endo', 6, 'CDM', 80],
    ['Hidemasa Morita', 13, 'CM', 77], ['Daichi Kamada', 15, 'CM', 81], ['Jun’ya Itō', 14, 'RW', 78],
    ['Daizen Maeda', 25, 'ST', 76], ['Kaoru Mitoma', 9, 'LW', 83]
  ]),
  nation('belgium', 'Bélgica', 'be', 4, { ATT: 85, MID: 84, DEF: 81 }, ['#d92735', '#f2cf29', '#1b1b1b'], [
    ['Thibaut Courtois', 1, 'GK', 90], ['Thomas Meunier', 15, 'RB', 80], ['Toby Alderweireld', 2, 'CB', 82],
    ['Jan Vertonghen', 5, 'CB', 81], ['Timothy Castagne', 21, 'LB', 79], ['Axel Witsel', 6, 'CDM', 81],
    ['Youri Tielemans', 8, 'CM', 83], ['Kevin De Bruyne', 7, 'CM', 91], ['Eden Hazard', 10, 'RW', 82],
    ['Romelu Lukaku', 9, 'ST', 87], ['Yannick Carrasco', 11, 'LW', 82]
  ]),
  nation('canada', 'Canadá', 'ca', 3, { ATT: 77, MID: 74, DEF: 72 }, ['#d92639', '#ffffff', '#d92639'], [
    ['Milan Borjan', 18, 'GK', 76], ['Alistair Johnston', 2, 'RB', 75], ['Steven Vitória', 5, 'CB', 74],
    ['Kamal Miller', 4, 'CB', 74], ['Sam Adekugbe', 3, 'LB', 74], ['Stephen Eustáquio', 7, 'CDM', 79],
    ['Atiba Hutchinson', 13, 'CM', 77], ['Jonathan Osorio', 21, 'CM', 76], ['Tajon Buchanan', 11, 'RW', 79],
    ['Jonathan David', 20, 'ST', 83], ['Alphonso Davies', 19, 'LW', 86]
  ]),
  nation('morocco', 'Marrocos', 'ma', 4, { ATT: 78, MID: 77, DEF: 80 }, ['#c82335', '#087448', '#c82335'], [
    ['Yassine Bounou', 1, 'GK', 84], ['Achraf Hakimi', 2, 'RB', 86], ['Nayef Aguerd', 5, 'CB', 80],
    ['Romain Saïss', 6, 'CB', 79], ['Noussair Mazraoui', 3, 'LB', 81], ['Sofyan Amrabat', 4, 'CDM', 82],
    ['Azzedine Ounahi', 8, 'CM', 78], ['Selim Amallah', 15, 'CM', 76], ['Hakim Ziyech', 7, 'RW', 84],
    ['Youssef En-Nesyri', 19, 'ST', 81], ['Sofiane Boufal', 17, 'LW', 80]
  ]),
  nation('croatia', 'Croácia', 'hr', 4, { ATT: 80, MID: 85, DEF: 82 }, ['#d92738', '#ffffff', '#174a91'], [
    ['Dominik Livaković', 1, 'GK', 82], ['Josip Juranović', 22, 'RB', 78], ['Dejan Lovren', 6, 'CB', 79],
    ['Joško Gvardiol', 20, 'CB', 84], ['Borna Sosa', 19, 'LB', 80], ['Marcelo Brozović', 11, 'CDM', 85],
    ['Luka Modrić', 10, 'CM', 89], ['Mateo Kovačić', 8, 'CM', 85], ['Mario Pašalić', 15, 'RW', 81],
    ['Andrej Kramarić', 9, 'ST', 83], ['Ivan Perišić', 14, 'LW', 84]
  ]),
  nation('brazil', 'Brasil', 'br', 5, { ATT: 89, MID: 88, DEF: 85 }, ['#f6d61b', '#16733b', '#ffffff', '#246bd1', '#10274b'], [
    ['Alisson', 1, 'GK', 89], ['Danilo', 2, 'RB', 81], ['Thiago Silva', 3, 'CB', 86],
    ['Marquinhos', 4, 'CB', 86], ['Alex Sandro', 6, 'LB', 81], ['Casemiro', 5, 'CDM', 89],
    ['Lucas Paquetá', 7, 'CM', 84], ['Fred', 8, 'CM', 81], ['Raphinha', 11, 'RW', 84],
    ['Richarlison', 9, 'ST', 85], ['Neymar Jr.', 10, 'LW', 91]
  ]),
  nation('serbia', 'Sérvia', 'rs', 3, { ATT: 81, MID: 78, DEF: 75 }, ['#c9233b', '#173f8c', '#ffffff'], [
    ['Vanja Milinković-Savić', 23, 'GK', 80], ['Nikola Milenković', 4, 'RB', 80], ['Miloš Veljković', 5, 'CB', 77],
    ['Strahinja Pavlović', 2, 'CB', 78], ['Filip Kostić', 17, 'LB', 82], ['Nemanja Gudelj', 8, 'CDM', 79],
    ['Sergej Milinković-Savić', 20, 'CM', 86], ['Dušan Tadić', 10, 'CM', 84], ['Andrija Živković', 14, 'RW', 78],
    ['Aleksandar Mitrović', 9, 'ST', 85], ['Dušan Vlahović', 18, 'LW', 84]
  ]),
  nation('switzerland', 'Suíça', 'ch', 4, { ATT: 79, MID: 78, DEF: 79 }, ['#e32035', '#ffffff', '#ffffff'], [
    ['Yann Sommer', 1, 'GK', 85], ['Silvan Widmer', 3, 'RB', 78], ['Manuel Akanji', 5, 'CB', 83],
    ['Nico Elvedi', 4, 'CB', 80], ['Ricardo Rodríguez', 13, 'LB', 80], ['Remo Freuler', 8, 'CDM', 81],
    ['Granit Xhaka', 10, 'CM', 84], ['Djibril Sow', 15, 'CM', 79], ['Xherdan Shaqiri', 23, 'RW', 82],
    ['Breel Embolo', 7, 'ST', 81], ['Ruben Vargas', 17, 'LW', 79]
  ]),
  nation('cameroon', 'Camarões', 'cm', 3, { ATT: 76, MID: 74, DEF: 74 }, ['#087748', '#d92738', '#f5cf2e'], [
    ['André Onana', 23, 'GK', 83], ['Collins Fai', 19, 'RB', 73], ['Jean-Charles Castelletto', 21, 'CB', 75],
    ['Nicolas Nkoulou', 3, 'CB', 75], ['Nouhou Tolo', 25, 'LB', 73], ['André-Frank Zambo Anguissa', 8, 'CDM', 83],
    ['Martin Hongla', 18, 'CM', 73], ['Pierre Kunde', 15, 'CM', 74], ['Bryan Mbeumo', 20, 'RW', 81],
    ['Eric Maxim Choupo-Moting', 13, 'ST', 80], ['Karl Toko Ekambi', 12, 'LW', 78]
  ]),
  nation('portugal', 'Portugal', 'pt', 4, { ATT: 87, MID: 85, DEF: 83 }, ['#b82132', '#176b43', '#f0c743'], [
    ['Diogo Costa', 22, 'GK', 84], ['João Cancelo', 20, 'RB', 87], ['Rúben Dias', 4, 'CB', 88],
    ['Pepe', 3, 'CB', 84], ['Raphaël Guerreiro', 5, 'LB', 83], ['William Carvalho', 14, 'CDM', 82],
    ['Bruno Fernandes', 8, 'CM', 88], ['Otávio', 25, 'CM', 83], ['Bernardo Silva', 10, 'RW', 88],
    ['Cristiano Ronaldo', 7, 'ST', 88], ['João Félix', 11, 'LW', 84]
  ]),
  nation('ghana', 'Gana', 'gh', 3, { ATT: 77, MID: 74, DEF: 73 }, ['#d7263d', '#f2d12c', '#087748'], [
    ['Lawrence Ati-Zigi', 1, 'GK', 74], ['Tariq Lamptey', 2, 'RB', 77], ['Daniel Amartey', 18, 'CB', 75],
    ['Mohammed Salisu', 4, 'CB', 77], ['Baba Rahman', 17, 'LB', 74], ['Thomas Partey', 5, 'CDM', 83],
    ['Salis Abdul Samed', 21, 'CM', 75], ['Mohammed Kudus', 20, 'CM', 82], ['Jordan Ayew', 9, 'RW', 77],
    ['Iñaki Williams', 19, 'ST', 80], ['André Ayew', 10, 'LW', 78]
  ]),
  nation('uruguay', 'Uruguai', 'uy', 4, { ATT: 83, MID: 82, DEF: 81 }, ['#78c9e8', '#ffffff', '#17233f'], [
    ['Sergio Rochet', 23, 'GK', 78], ['Guillermo Varela', 13, 'RB', 76], ['José María Giménez', 2, 'CB', 84],
    ['Diego Godín', 3, 'CB', 80], ['Mathías Olivera', 16, 'LB', 78], ['Federico Valverde', 15, 'CDM', 88],
    ['Rodrigo Bentancur', 6, 'CM', 84], ['Matías Vecino', 5, 'CM', 80], ['Facundo Pellistri', 8, 'RW', 76],
    ['Luis Suárez', 9, 'ST', 85], ['Darwin Núñez', 11, 'LW', 83]
  ]),
  nation('south-korea', 'Coreia do Sul', 'kr', 3, { ATT: 79, MID: 77, DEF: 75 }, ['#ffffff', '#d9273c', '#183f82'], [
    ['Kim Seung-gyu', 1, 'GK', 77], ['Kim Moon-hwan', 15, 'RB', 75], ['Kim Min-jae', 4, 'CB', 84],
    ['Kim Young-gwon', 19, 'CB', 78], ['Kim Jin-su', 3, 'LB', 76], ['Jung Woo-young', 5, 'CDM', 77],
    ['Hwang In-beom', 6, 'CM', 80], ['Lee Jae-sung', 10, 'CM', 78], ['Hwang Hee-chan', 11, 'RW', 79],
    ['Cho Gue-sung', 9, 'ST', 79], ['Son Heung-min', 7, 'LW', 89]
  ])
];

// A campanha clássica mantém seus 32 elencos e sorteios antigos. O catálogo
// mundial ampliado é separado para não invalidar campanhas já salvas.
const NATIONAL_ROLES=['GK','RB','CB','CB','LB','CDM','CM','CM','RW','ST','LW'];
export const FIFA_NATIONAL_TEAMS = FIFA_MEMBERS.map(member=>{
  const existing=NATIONAL_TEAMS.find(team=>team.id===member.id);
  if(existing)return {...existing,confederation:member.confederation,squadSource:'existing'};
  const generated=nation(member.id,member.name,member.flagCode,3,{ATT:70,MID:70,DEF:70},['#f0f1f4','#182947','#d4bd69'],NATIONAL_ROLES.map((pos,i)=>[`Atleta ${i+1} · ${member.name}`,i+1,pos,70]));
  return {...generated,confederation:member.confederation,squadSource:'fictional',squadNote:'Elenco fictício XFC · atributos de jogo, não ranking FIFA'};
});

export const GROUP_NAMES = Object.freeze(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']);
export const USER_NATIONAL_TEAM_ID = 'brazil';
const KNOCKOUT_STAGES = ['round-of-16', 'quarterfinals', 'semifinals', 'final'];

/** Sorteia todo o elenco em grupos do mesmo tamanho (a Copa usa 8 × 4). */
export function drawGroups(teams, random = Math.random) {
  const groupCount = Math.min(GROUP_NAMES.length, Math.max(1, Math.floor(teams.length / 4)));
  const groupSize = Math.ceil(teams.length / groupCount);
  const remaining = [...teams];
  for (let index = remaining.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [remaining[index], remaining[swapIndex]] = [remaining[swapIndex], remaining[index]];
  }
  return Object.fromEntries(GROUP_NAMES.slice(0, groupCount).map((name, index) => [
    name,
    remaining.slice(index * groupSize, (index + 1) * groupSize).map(team => team.id)
  ]));
}

export function findGroup(teamId, groups) {
  return Object.entries(groups || {}).find(([, ids]) => ids.includes(teamId))?.[0] || null;
}

/** Compatibilidade com telas de tabela: calcula uma classificação simulada. */
export function computeGroupStandings(teams, groups, seed = 12345) {
  const ratings = new Map(teams.map(team => [team.id, Number(team.ratings?.ATT || team.ratings?.att) || 80]));
  const table = new Map(Object.values(groups).flat().map(id => [id, {
    id, played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, points: 0
  }]));
  const random = mulberry32(seed);
  for (const ids of Object.values(groups)) {
    for (let first = 0; first < ids.length; first += 1) {
      for (let second = first + 1; second < ids.length; second += 1) {
        const homeId = ids[first];
        const awayId = ids[second];
        const difference = ((ratings.get(homeId) || 80) - (ratings.get(awayId) || 80)) / 12 + (random() - 0.5) * 3;
        const homeGoals = Math.max(0, Math.round(1.2 + difference + random() * 1.6));
        const awayGoals = Math.max(0, Math.round(1.05 - difference + random() * 1.6));
        applyScore(table.get(homeId), table.get(awayId), homeGoals, awayGoals);
      }
    }
  }
  return [...table.values()].sort(compareStandings);
}

/** Simula as quatro etapas eliminatórias de uma chave já classificada. */
export function simulateKnockout(teams, groups, standings, seed = 99991) {
  const byId = new Map(teams.map(team => [team.id, team]));
  const byGroup = new Map(Object.keys(groups).map(group => [group,
    standings.filter(entry => groups[group].includes(entry.id)).sort(compareStandings)
  ]));
  const qualifiers = Object.fromEntries([...byGroup].map(([group, table]) => [group, table.slice(0, 2).map(item => item.id)]));
  const pairs = bracketPairs(qualifiers);
  const random = mulberry32(seed);
  const rounds = {};
  let current = pairs.map(([home, away], index) => simulatePair(home, away, 'round-of-16', index, byId, random));
  rounds.roundOf16 = current;
  for (const [stage, key] of [['quarterfinals', 'quarterfinals'], ['semifinals', 'semifinals'], ['final', 'final']]) {
    const next = [];
    for (let index = 0; index < current.length; index += 2) {
      next.push(simulatePair(current[index].winner, current[index + 1].winner, stage, index / 2, byId, random));
    }
    rounds[key] = next;
    current = next;
  }
  return rounds;
}

function simulatePair(home, away, stage, index, byId, random) {
  const homeRating = Number(byId.get(home)?.ratings?.ATT || byId.get(home)?.ratings?.att) || 80;
  const awayRating = Number(byId.get(away)?.ratings?.ATT || byId.get(away)?.ratings?.att) || 80;
  const difference = (homeRating - awayRating) / 12 + (random() - 0.5) * 3.2;
  const homeGoals = Math.max(0, Math.round(1.15 + difference + random() * 1.7));
  const awayGoals = Math.max(0, Math.round(1.05 - difference + random() * 1.7));
  const winner = homeGoals === awayGoals ? (random() < 0.5 ? home : away) : homeGoals > awayGoals ? home : away;
  return { stage, index, home, away, homeGoals, awayGoals, winner, decidedBy: homeGoals === awayGoals ? 'penalties' : null };
}

function mulberry32(seed) {
  let state = seed >>> 0;
  return function random() {
    state = (state + 0x6D2B79F5) | 0;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

export function getNationalTeam(teamId) {
  return FIFA_NATIONAL_TEAMS.find(team => team.id === teamId) || null;
}

export function getTeamFlag(teamId) {
  return getNationalTeam(teamId)?.flagCode || 'br';
}

function roundRobinFixtures(ids, group, userTeamId) {
  const pairs = [
    [[ids[0], ids[1]], [ids[2], ids[3]]],
    [[ids[0], ids[2]], [ids[3], ids[1]]],
    [[ids[0], ids[3]], [ids[1], ids[2]]]
  ];
  return pairs.flatMap((games, index) => games.map(([home, away], gameIndex) => ({
    id: `${group}-${index + 1}-${gameIndex + 1}-${home}-${away}`,
    stage: 'group',
    group,
    round: index + 1,
    home,
    away,
    homeGoals: null,
    awayGoals: null,
    played: false,
    playable: home === userTeamId || away === userTeamId,
    winner: null,
    decidedBy: null
  })));
}

function nationalRating(teamId) {
  return Number(getNationalTeam(teamId)?.ratings?.ATT) || 80;
}

function simulateFixtureScore(home, away, random) {
  const difference = (nationalRating(home) - nationalRating(away)) / 12 + (random() - 0.5) * 3.2;
  return {
    homeGoals: Math.max(0, Math.round(1.15 + difference + random() * 1.7)),
    awayGoals: Math.max(0, Math.round(1.05 - difference + random() * 1.7))
  };
}

function winnerForScore(home, away, homeGoals, awayGoals, random, penalties = false) {
  if (homeGoals > awayGoals) return { winner: home, decidedBy: null };
  if (awayGoals > homeGoals) return { winner: away, decidedBy: null };
  if (!penalties) return { winner: null, decidedBy: null };
  const homeOdds = nationalRating(home) / Math.max(1, nationalRating(home) + nationalRating(away));
  return { winner: random() < homeOdds ? home : away, decidedBy: 'penalties' };
}

function isSameDraw(first, second) {
  if (!first || !second) return false;
  const signature = groups => Object.keys(groups).sort().map(name => [...groups[name]].sort().join(',')).sort().join('|');
  return signature(first) === signature(second);
}

function bracketPairs(qualified) {
  // Cruza os quatro grupos dos lados opostos da chave, sem repetir confronto.
  return [
    [qualified.A?.[0], qualified.B?.[1]], [qualified.C?.[0], qualified.D?.[1]],
    [qualified.B?.[0], qualified.A?.[1]], [qualified.D?.[0], qualified.C?.[1]],
    [qualified.E?.[0], qualified.F?.[1]], [qualified.G?.[0], qualified.H?.[1]],
    [qualified.F?.[0], qualified.E?.[1]], [qualified.H?.[0], qualified.G?.[1]]
  ];
}

/** Cria os 48 jogos dos grupos e sorteia uma seleção para a campanha. */
export function createWorldCupCampaign({
  mode = '2027',
  seed = Math.floor(Math.random() * 0x7fffffff),
  previousGroups = null,
  teamId = USER_NATIONAL_TEAM_ID,
  userTeamId = teamId
} = {}) {
  const selectedTeamId = NATIONAL_TEAMS.some(team=>team.id===userTeamId) ? userTeamId : USER_NATIONAL_TEAM_ID;
  let campaignSeed = seed >>> 0;
  let groups;
  for (let attempt = 0; attempt < 12; attempt += 1) {
    groups = drawGroups(NATIONAL_TEAMS, mulberry32(campaignSeed));
    if (!isSameDraw(groups, previousGroups)) break;
    campaignSeed = (campaignSeed + 0x9e3779b9) >>> 0;
  }

  const random = mulberry32((campaignSeed ^ 0x85ebca6b) >>> 0);
  const groupMatches = Object.entries(groups).flatMap(([group, ids]) => roundRobinFixtures(ids, group, selectedTeamId));
  for (const match of groupMatches) {
    if (match.playable) continue;
    const score = simulateFixtureScore(match.home, match.away, random);
    Object.assign(match, score, { played: true });
    Object.assign(match, winnerForScore(match.home, match.away, score.homeGoals, score.awayGoals, random));
  }

  return {
    id: `worldcup-${campaignSeed.toString(36)}-${Date.now().toString(36)}`,
    seed: campaignSeed,
    mode,
    year: mode === 'live' ? '2026' : '2027',
    userTeamId: selectedTeamId,
    userGroup: findGroup(selectedTeamId, groups),
    groups,
    groupMatches,
    knockoutMatches: [],
    stage: 'group',
    eliminatedIn: null,
    createdAt: Date.now(),
    completed: false,
    lastResult: null
  };
}

function compareStandings(first, second) {
  return second.points - first.points
    || (second.gf - second.ga) - (first.gf - first.ga)
    || second.gf - first.gf
    || nationalRating(second.id) - nationalRating(first.id)
    || first.id.localeCompare(second.id);
}

function applyScore(home, away, homeGoals, awayGoals) {
  if (!home || !away) return;
  home.played += 1;
  away.played += 1;
  home.gf += homeGoals;
  home.ga += awayGoals;
  away.gf += awayGoals;
  away.ga += homeGoals;
  if (homeGoals > awayGoals) {
    home.won += 1; home.points += 3; away.lost += 1;
  } else if (awayGoals > homeGoals) {
    away.won += 1; away.points += 3; home.lost += 1;
  } else {
    home.drawn += 1; away.drawn += 1; home.points += 1; away.points += 1;
  }
}

/** Classificação real, recalculada a partir dos jogos já disputados. */
export function campaignStandings(campaign, groupName) {
  const teamIds = campaign?.groups?.[groupName] || [];
  const table = new Map(teamIds.map(id => [id, {
    id, played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, points: 0
  }]));
  for (const match of campaign?.groupMatches || []) {
    if (match.group !== groupName || !match.played) continue;
    applyScore(table.get(match.home), table.get(match.away), match.homeGoals, match.awayGoals);
  }
  return [...table.values()].sort(compareStandings);
}

/** Próximo jogo que o usuário precisa disputar nesta fase. */
export function nextCampaignMatch(campaign) {
  if (!campaign) return null;
  const matches = campaign.stage === 'group'
    ? campaign.groupMatches
    : campaign.knockoutMatches;
  return (matches || []).find(match => match.stage === campaign.stage && match.playable && !match.played) || null;
}

function addKnockoutFixture(campaign, home, away, stage, index, random) {
  const match = {
    id: `${stage}-${index + 1}-${home}-${away}`,
    stage,
    group: null,
    round: null,
    home,
    away,
    homeGoals: null,
    awayGoals: null,
    played: false,
    playable: home === campaign.userTeamId || away === campaign.userTeamId,
    winner: null,
    decidedBy: null
  };
  if (!match.playable) {
    const score = simulateFixtureScore(home, away, random);
    Object.assign(match, score, { played: true });
    Object.assign(match, winnerForScore(home, away, score.homeGoals, score.awayGoals, random, true));
  }
  return match;
}

function eliminate(campaign, stage) {
  campaign.stage = 'eliminated';
  campaign.eliminatedIn = stage;
  campaign.completed = true;
}

function prepareRoundOf16(campaign) {
  const groupName = findGroup(campaign.userTeamId, campaign.groups);
  const standings = Object.fromEntries(GROUP_NAMES.map(group => [
    group,
    campaignStandings(campaign, group)
  ]));
  const userRank = standings[groupName]?.findIndex(team => team.id === campaign.userTeamId) ?? -1;
  if (userRank < 0 || userRank > 1) {
    eliminate(campaign, 'group');
    return;
  }

  const qualifiers = Object.fromEntries(GROUP_NAMES.map(group => [
    group,
    standings[group].slice(0, 2).map(team => team.id)
  ]));
  const random = mulberry32((campaign.seed ^ 0xc2b2ae35) >>> 0);
  campaign.knockoutMatches = bracketPairs(qualifiers)
    .map(([home, away], index) => addKnockoutFixture(campaign, home, away, 'round-of-16', index, random));
  campaign.stage = 'round-of-16';
}

function advanceKnockout(campaign) {
  const currentRound = campaign.knockoutMatches.filter(match => match.stage === campaign.stage);
  if (!currentRound.length || currentRound.some(match => !match.played)) return;
  const userMatch = currentRound.find(match => match.home === campaign.userTeamId || match.away === campaign.userTeamId);
  if (!userMatch || userMatch.winner !== campaign.userTeamId) {
    if (userMatch && campaign.stage === 'final') {
      campaign.stage = 'runnerup';
      campaign.completed = true;
      return;
    }
    eliminate(campaign, campaign.stage);
    return;
  }
  if (campaign.stage === 'final') {
    campaign.stage = 'champion';
    campaign.completed = true;
    return;
  }

  const stageIndex = KNOCKOUT_STAGES.indexOf(campaign.stage);
  const nextStage = KNOCKOUT_STAGES[stageIndex + 1];
  const random = mulberry32((campaign.seed ^ Math.imul(stageIndex + 3, 0x9e3779b9)) >>> 0);
  const nextRound = [];
  for (let index = 0; index < currentRound.length; index += 2) {
    const home = currentRound[index]?.winner;
    const away = currentRound[index + 1]?.winner;
    if (home && away) nextRound.push(addKnockoutFixture(campaign, home, away, nextStage, index / 2, random));
  }
  campaign.knockoutMatches.push(...nextRound);
  campaign.stage = nextStage;
}

/** Registra um placar e avança a campanha: oitavas, quartas, semis e final. */
export function recordCampaignMatchResult(campaign, matchId, homeGoals, awayGoals) {
  if (!campaign || campaign.completed) return campaign;
  const allMatches = [...(campaign.groupMatches || []), ...(campaign.knockoutMatches || [])];
  const match = allMatches.find(item => item.id === matchId);
  if (!match || match.played || match.stage !== campaign.stage || !match.playable) return campaign;
  match.homeGoals = Math.max(0, Math.floor(Number(homeGoals) || 0));
  match.awayGoals = Math.max(0, Math.floor(Number(awayGoals) || 0));
  match.played = true;
  const random = mulberry32((campaign.seed ^ match.id.length ^ match.homeGoals ^ match.awayGoals) >>> 0);
  Object.assign(match, winnerForScore(match.home, match.away, match.homeGoals, match.awayGoals, random, match.stage !== 'group'));
  campaign.lastResult = {
    matchId,
    homeGoals: match.homeGoals,
    awayGoals: match.awayGoals,
    winner: match.winner,
    decidedBy: match.decidedBy
  };

  if (campaign.stage === 'group') {
    const pending = campaign.groupMatches.some(item => item.playable && !item.played);
    if (!pending) prepareRoundOf16(campaign);
  } else {
    advanceKnockout(campaign);
  }
  return campaign;
}
