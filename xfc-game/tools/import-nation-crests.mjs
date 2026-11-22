// Copia os escudos reais das seleções (SVG da coleção football-logos.cc,
// a mesma família do pack HTML XFC27_Escudos_Selecoes_Mundo.html / FootyLogos)
// e rasteriza PNG 256×256 em assets/crests/nations/<flag>.png.
//
// Uso (a partir de xfc-game/):
//   node tools/import-nation-crests.mjs /caminho/para/JoseArroyave/football-logos
import {readdirSync, readFileSync, writeFileSync, existsSync} from 'node:fs';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {FIFA_MEMBERS} from '../src/data/fifa-members.js';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const sourceRoot = process.argv[2];
if (!sourceRoot) {
  console.error('informe a pasta do repositório football-logos (José Arroyave)');
  process.exit(1);
}
const logos = join(sourceRoot, 'logos');
const outDir = join(root, 'assets/crests/nations');

const ALIAS = {
  usa: 'usa',
  'south-korea': 'south-korea',
  'north-korea': 'north-korea',
  'ivory-coast': 'cote-d-ivoire',
  'cape-verde': 'cabo-verde',
  'cabo-verde': 'cabo-verde',
  'dr-congo': 'congo-dr',
  'congo-kinshasa': 'congo-dr',
  'congo-brazzaville': 'congo',
  'sao-tome-principe': 'sao-tome-and-principe',
  'hong-kong-sar-china': 'hong-kong',
  'macao-sar-china': 'macau',
  'myanmar-burma': 'myanmar',
  'palestinian-territories': 'palestine',
  'united-arab-emirates': 'uae',
  'bosnia-herzegovina': 'bosnia-and-herzegovina',
  czechia: 'czech-republic',
  ireland: 'republic-of-ireland',
  turkiye: 'turkey',
  'antigua-barbuda': 'antigua-and-barbuda',
  'st-kitts-nevis': 'st-kitts-and-nevis',
  'st-lucia': 'saint-lucia',
  'st-vincent-grenadines': 'saint-vincent-and-the-grenadines',
  'trinidad-tobago': 'trinidad-and-tobago',
  'turks-caicos-islands': 'turks-and-caicos-islands',
  'u-s-virgin-islands': 'us-virgin-islands',
  'french-polynesia': 'tahiti'
};

function pickSvg(folder) {
  const dir = join(logos, folder);
  if (!existsSync(dir)) return null;
  const files = readdirSync(dir);
  const national = files.find(name => /national_team\.svg$/i.test(name));
  if (national) return join(dir, national);
  const federation = files.find(name => /federation\.svg$/i.test(name));
  return federation ? join(dir, federation) : null;
}

const items = [];
const missing = [];
for (const member of FIFA_MEMBERS) {
  const folder = existsSync(join(logos, member.id)) ? member.id : (ALIAS[member.id] || null);
  const file = folder && pickSvg(folder);
  if (!file) {
    missing.push(member.id);
    continue;
  }
  items.push({flag: member.flagCode, id: member.id, name: member.name, svg: readFileSync(file, 'utf8')});
}
if (missing.length) {
  console.error('sem escudo:', missing.join(', '));
  process.exit(1);
}
writeFileSync(join(outDir, '.svg-source.json'), JSON.stringify(items.map(({flag, id, name, svg}) => ({flag, id, name, markup: svg}))));
console.log(`SVGs reais prontos: ${items.length}`);
