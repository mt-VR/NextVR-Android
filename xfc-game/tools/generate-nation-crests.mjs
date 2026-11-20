// Gera os SVGs dos escudos de seleção (brasão) a partir das cores oficiais e
// do código da bandeira: escudo com borda, faixa diagonal, estrelas e as
// iniciais do país — legível a 40 px, como nos menus de jogo.
//
// Uso: node tools/generate-nation-crests.mjs   (só os SVGs)
// O PNG final é rasterizado por tools/rasterize-nation-crests.mjs.
// Rode os dois ao mudar cores em nation-kits.js.
import {mkdirSync, writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const M = await import(join(root, 'src/data/fifa-members.js'));
const W = await import(join(root, 'src/data/worldcup.js'));
const K = await import(join(root, 'src/data/nation-kits.js'));
const OUT = join(root, 'assets/crests/nations');
mkdirSync(OUT,{recursive:true});

const nations=new Map();
for(const t of W.NATIONAL_TEAMS){
  const c=t.colors||null;
  nations.set(t.flagCode,{name:t.name,colors:c,stars:t.stars});
}
for(const m of M.FIFA_MEMBERS){
  // nationColors espera o OBJETO da seleção (lê .id e .colors), não a string.
  const c=K.nationColors({id:m.id})||null;
  const cur=nations.get(m.flagCode);
  if(cur){
    // NÃO sobrescrever: as 32 da Copa já trouxeram cor e estrelas.
    if(!cur.name) cur.name=m.name;
    if(!cur.colors&&c) cur.colors=c;
  } else {
    nations.set(m.flagCode,{name:m.name,colors:c,stars:0});
  }
}
console.log('seleções:',nations.size);

// Desenha o brasão em SVG e rasteriza no navegador depois. Aqui só o SVG.
function esc(s){return String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));}
function initials(name){
  const clean=name.replace(/[^\p{L}\s]/gu,' ').trim().split(/\s+/).filter(Boolean);
  if(!clean.length) return '??';
  if(clean.length===1) return clean[0].slice(0,3).toUpperCase();
  return clean.slice(0,3).map(w=>w[0]).join('').toUpperCase();
}
const lum=hex=>{
  const n=parseInt(hex.replace('#',''),16);
  const r=(n>>16&255)/255,g=(n>>8&255)/255,b=(n&255)/255;
  return 0.2126*r+0.7152*g+0.0722*b;
};
function svg(flag,{name,colors,stars}){
  // `colors` é um OBJETO {primary,secondary,trim} em NATIONAL_TEAMS e também
  // em nationColors(). Aceitar array foi um erro que deixava tudo no azul.
  const arr=Array.isArray(colors)?colors:null;
  const primary=(arr?arr[0]:colors?.primary)||'#1f4f9c';
  const secondary=(arr?arr[1]:colors?.secondary)||'#ffffff';
  const trim=(arr?arr[2]:colors?.trim)||secondary;
  const ink=lum(primary)>0.55?'#101820':'#ffffff';
  const letter=initials(name);
  const starCount=Math.max(0,Math.min(5,Math.round((stars||0)/1.6)));
  // As estrelas vão no TOPO do escudo e menores: antes ficavam em cima das
  // iniciais e as duas coisas brigavam pela leitura.
  const starsSvg=Array.from({length:starCount},(_,i)=>{
    const x=48+(i-(starCount-1)/2)*11;
    return `<path d="M${x} 14 l2.5 5 5.6 .8 -4 3.9 .9 5.5 -5-2.6 -5 2.6 .9-5.5 -4-3.9 5.6-.8z" fill="#f6d04d" stroke="#0d1522" stroke-opacity=".35" stroke-width=".7"/>`;
  }).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="96" height="96">
<defs><clipPath id="shield"><path d="M8 6 H88 V52 C88 74 68 88 48 94 C28 88 8 74 8 52 Z"/></clipPath>
<linearGradient id="shine" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0" stop-color="#ffffff" stop-opacity=".22"/>
  <stop offset=".55" stop-color="#ffffff" stop-opacity="0"/>
  <stop offset="1" stop-color="#000000" stop-opacity=".26"/>
</linearGradient></defs>
<g clip-path="url(#shield)">
  <rect width="96" height="96" fill="${esc(primary)}"/>
  <path d="M-6 74 L74 -6 L104 24 L24 104 Z" fill="${esc(secondary)}" opacity=".55"/>
  <rect x="0" y="52" width="96" height="9" fill="${esc(trim)}" opacity=".9"/>
  <rect x="10" y="40" width="76" height="27" rx="4" fill="${esc(primary)}" fill-opacity=".92" stroke="#0d1522" stroke-opacity=".28" stroke-width="1.2"/>
  <text x="48" y="60" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-weight="bold" font-size="21" fill="${ink}" letter-spacing=".8">${esc(letter)}</text>
  <rect width="96" height="96" fill="url(#shine)"/>
</g>
${starsSvg}
<path d="M8 6 H88 V52 C88 74 68 88 48 94 C28 88 8 74 8 52 Z" fill="none" stroke="#0d1522" stroke-opacity=".55" stroke-width="2.5"/>
</svg>`;
}
// A gravação passa pelo navegador (Chromium já é dependência de teste).
const items=[];
for(const [flag,info] of [...nations].sort()){
  items.push({flag,markup:svg(flag,info),name:info.name});
}
writeFileSync(join(root, 'assets/crests/nations/.svg-source.json'),JSON.stringify(items));
console.log('SVGs prontos:',items.length);
