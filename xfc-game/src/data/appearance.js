// Características visuais editáveis por atleta (não por posição/nacionalidade).
// Aproximações de pele/cabelo, não escaneamento facial nem identificação racial.
// Cortes `lab-*`: mechas no couro (Ragnarok/laboratório), não capacete/plataforma.
import { LAB_HAIR } from './player-customization.js';
const LAB_STYLES = Object.keys(LAB_HAIR).filter(id => id !== 'lab-none');
const LOOKS = [
  [['Vinícius Jr','Vinícius Júnior','Vinicius Junior','Vini Jr.'], '#68402e','lab-afro','#19120e'],
  [['Valverde','Federico Valverde'], '#d6a17d','lab-low-fade','#493327'],
  [['Courtois','Thibaut Courtois'], '#d5a580','lab-american','#33261e'],
  [['Carvajal','Daniel Carvajal'], '#c38e66','lab-mid-fade','#302016'],
  [['Rüdiger','Antonio Rüdiger'], '#603d2c','lab-shaved','#19120e'],
  [['Militão','Éder Militão'], '#a66c45','lab-curly','#211710'],
  [['Mendy','Ferland Mendy'], '#69432e','lab-high-fade','#19120e'],
  [['Tchouaméni','Aurélien Tchouaméni'], '#734b35','lab-wavy','#19120e'],
  [['Bellingham','Jude Bellingham'], '#ae7853','lab-quiff','#24180f'],
  [['Rodrygo','Rodrygo Goes'], '#96613f','lab-curly','#20160e'],
  [['Mbappé','Kylian Mbappé'], '#a16b48','lab-design','#241910'],
  [['Modrić','Luka Modrić'], '#d9ad89','lab-straight','#77553a'],
  [['Arda Güler','Arda'], '#d9a580','lab-ragnarok','#423023'],
  [['Brahim Díaz','Brahim'], '#be8b65','lab-medium','#281b11'],
  [['Ter Stegen','Marc-André ter Stegen'], '#e0b18d','lab-american','#796043'],
  [['Koundé','Jules Koundé'], '#805238','lab-afro','#20150e'],
  [['Araújo','Ronald Araújo'], '#bd875d','lab-low-fade','#302014'],
  [['Cubarsí','Pau Cubarsí'], '#dba581','lab-mid-fade','#583c27'],
  [['Balde','Alejandro Balde'], '#76482f','lab-curly','#20150e'],
  [['Pedri','Pedro González'], '#cb9974','lab-low-fade','#38261c'],
  [['Gavi','Pablo Gavi'], '#dca982','lab-wavy','#68472e'],
  [['De Jong','Frenkie de Jong'], '#e3b995','lab-medium','#b58c57'],
  [['Lewandowski','Robert Lewandowski'], '#d9aa86','lab-american','#463224'],
  [['Lamine Yamal','Yamal'], '#b6845d','lab-curly','#2b1d11'],
  [['Raphinha','Raphael Dias Belloli'], '#b9825a','lab-dreads','#302014'],
  [['Dani Olmo','Olmo'], '#deae87','lab-straight','#745039'],
  [['Ferran Torres','Ferran'], '#d5a17a','lab-low-fade','#493122'],
  [['Neymar Jr.','Neymar','Neymar da Silva Santos Júnior'], '#bd8868','lab-reference-mohawk','#a98c5e'],
  [['Lionel Messi','Messi'], '#d3a07b','lab-low-fade','#463023'],
  [['Cristiano Ronaldo','Ronaldo'], '#c69469','lab-mid-fade','#342218'],
  [['Alisson','Alisson Becker'], '#d1a07a','lab-low-fade','#4c3222'],
  [['Marquinhos'], '#a97450','lab-high-fade','#21170e'],
  [['Casemiro'], '#b6835c','lab-shaved','#312218'],
  [['Bruno Guimarães'], '#c9976b','lab-curly','#483125'],
  [['Gabriel Martinelli','Martinelli'], '#c79570','lab-low-fade','#34231a'],
  [['Gabriel Jesus'], '#996441','lab-afro','#25180f'],
  [['Richarlison'], '#b98c65','lab-high-fade','#bdab83'],
  [['Pedro'], '#d1a078','lab-low-fade','#302116'],
  [['Gerson'], '#825338','lab-low-fade','#241810'],
  [['Arrascaeta','Giorgian de Arrascaeta'], '#d5a17b','lab-mid-fade','#59402c'],
  [['Bruno Henrique'], '#815133','lab-afro','#25180f'],
  [['Endrick'], '#795033','lab-afro','#21150e'],
  [['Estêvão','Estevao'], '#b57f57','lab-curly','#2c1e14'],
  [['Memphis Depay','Memphis'], '#a97550','lab-dreads','#25190f'],
  [["Sergi Roberto"], "#d6a17a", "lab-low-fade", "#513724"],
  [["Weverton"], "#ba8b63", "lab-low-fade", "#302015"],
  [["Matheuzinho"], "#bb835b", "lab-curly", "#302015"],
  [["Léo Pereira"], "#c48d63", "lab-mid-fade", "#38271a"],
  [["Fabrício Bruno"], "#d4a280", "lab-quiff", "#8a5230"],
  [["Ayrton Lucas"], "#bd865f", "lab-low-fade", "#2b1c12"],
  [["Luiz Henrique"], "#865534", "lab-curly", "#20150d"],
  [["Everton Ribeiro"], "#c99a73", "lab-straight", "#493323"],
  [["Mayke"], "#b27d54", "lab-low-fade", "#312116"],
  [["Gustavo Gómez"], "#c18e63", "lab-shaved", "#352216"],
  [["Murilo"], "#98633f", "lab-low-fade", "#302015"],
  [["Piquerez"], "#d7a47e", "lab-mid-fade", "#59402b"],
  [["Zé Rafael"], "#c8966b", "lab-wavy", "#3e2a1c"],
  [["Menino", "Gabriel Menino"], "#be8b64", "lab-low-fade", "#342318"],
  [["Raphael Veiga"], "#c6946c", "lab-ragnarok", "#493222"],
  [["Rony"], "#875435", "lab-afro", "#302015"],
  [["Lazaro"], "#9b633e", "lab-curly", "#281a11"],
  [["Yuri Alberto"], "#c9956b", "lab-high-fade", "#3e291b"],
  [["Gil"], "#865538", "lab-shaved", "#26190f"],
  [["João Paulo"], "#b68159", "lab-low-fade", "#362216"],
  [["Aderlan"], "#a66d48", "lab-mid-fade", "#2b1d12"],
  [["Joaquim"], "#c28c64", "lab-low-fade", "#3e281a"],
  [["Tomás Rincón"], "#bf8d63", "lab-curly", "#39271a"],
  [["Diego Pituca"], "#d09b74", "lab-low-fade", "#49301e"],
  [["João Schmidt"], "#dbad86", "lab-straight", "#725136"],
  [["Julio Furch"], "#ce9d76", "lab-american", "#64452c"]
];
const key = name => String(name||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
function hashedStyle(name) {
  const k = key(name);
  let h = 2166136261;
  for (let i = 0; i < k.length; i += 1) h = Math.imul(h ^ k.charCodeAt(i), 16777619);
  return LAB_STYLES[(h >>> 0) % LAB_STYLES.length];
}
const profiles = new Map(LOOKS.flatMap(([names,skinTone,hairStyle,hairColor])=>names.map(name=>[key(name),{skinTone,hairStyle,hairColor}])));
export function appearanceFor(player={}) {
  const known=profiles.get(key(player.fullName)) || profiles.get(key(player.name));
  return { careerHair:true,skinTone:'#ad7955',hairStyle:hashedStyle(player.fullName||player.name||'xfc'),hairColor:'#2b1d14',
    ...(known||{}),...(player.appearance||{}),
    heightScale:player.appearance?.heightScale || (player.height?player.height/182:1),
    source:known?'player-profile':player.appearance?'roster':'default-unverified' };
}
