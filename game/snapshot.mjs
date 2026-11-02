/* Captura cenas reais do jogo como SVG (rodando em jsdom com o gravador canvas->SVG). */
import fs from 'node:fs';
import path from 'node:path';
import { JSDOM, VirtualConsole } from '/tmp/ig/node_modules/jsdom/lib/api.js';
import { jsonRecorder } from './json-recorder.mjs';

const W = 390, H = 844;
const outDir = process.argv[3] || '/tmp/shots';
fs.mkdirSync(outDir, { recursive: true });

const vc = new VirtualConsole();
vc.on('jsdomError', e => console.log('JSDOMERR', (e.stack || '').split('\n')[0]));

let active = null;
function ctxStub() {
  const g = { addColorStop() {} };
  const t = { canvas: null, createLinearGradient: () => g, createRadialGradient: () => g,
    measureText: () => ({ width: 10 }), save() {}, restore() {}, setTransform() {}, getTransform: () => ({ a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 }) };
  return new Proxy(t, { get(o, k) { if (k in o) return o[k]; return () => {}; }, set(o, k, v) { o[k] = v; return true; } });
}

const dom = new JSDOM(fs.readFileSync(process.argv[2] || 'titans-clinic.html', 'utf8'), {
  runScripts: 'dangerously', pretendToBeVisual: true, virtualConsole: vc, url: 'http://localhost/',
  beforeParse(win) {
    win.HTMLCanvasElement.prototype.getContext = function () {
      const self = this;
      const stub = ctxStub(); stub.canvas = self;
      if (self.id !== 'cv') return stub;
      // proxy: encaminha para o gravador ativo (quando há) ou para o stub
      return new Proxy({}, {
        get(_t, k) {
          if (k === 'canvas') return self;
          const d = active ? active.ctx : stub;
          const v = d[k];
          return typeof v === 'function' ? v.bind(d) : v;
        },
        set(_t, k, v) { if (active) active.ctx[k] = v; else stub[k] = v; return true; },
        has(_t, k) { return active ? k in active.ctx : k in stub; }
      });
    };
    win.Element.prototype.getBoundingClientRect = function () {
      const f = this.id === 'cv';
      return { x: 0, y: 0, left: 0, top: 0, width: f ? W : 64, height: f ? H : 64,
        right: f ? W : 64, bottom: f ? H : 64, toJSON() {} };
    };
    win.innerWidth = W; win.innerHeight = H; win.devicePixelRatio = 1;
    win.navigator.vibrate = () => true;
    win.AudioContext = undefined; win.webkitAudioContext = undefined;
    win.addEventListener('error', e => console.log('WINERR', e.error?.stack?.split('\n').slice(0, 2).join(' | ')));
  }
});
const win = dom.window, doc = win.document, ev = e => win.eval(e);
const sleep = ms => new Promise(r => setTimeout(r, ms));
const click = el => el.dispatchEvent(new win.MouseEvent('click', { bubbles: true, cancelable: true }));
function ptr(type, x, y) {
  const e = new win.MouseEvent(type, { bubbles: true, cancelable: true, clientX: x, clientY: y });
  Object.defineProperty(e, 'pointerId', { value: 1 });
  doc.getElementById('cv').dispatchEvent(e);
}
async function until(pred, maxMs = 20000) { const t0 = Date.now();
  while (!pred() && Date.now() - t0 < maxMs) await sleep(60); }

async function shot(name) {
  const rec = jsonRecorder(W, H);
  active = rec;
  await sleep(110);          // deixa 1+ frame desenhar no gravador
  active = null;
  const json = rec.dump();
  const f = path.join(outDir, name + '.json');
  fs.writeFileSync(f, json);
  console.log(`  ${name}  ${(json.length / 1024).toFixed(0)} kB  ops=${JSON.parse(json).ops.length}`);
}

await sleep(200);
console.log('cenas:');
await shot('01-menu');

/* ---- clínica ---- */
click(doc.querySelectorAll('#prow .pcard')[0]); await sleep(80);
await shot('02-clinica-intro');
click(doc.getElementById('btnStart'));
await until(() => ev('G.t') > 0.4);
await shot('03-clinica-boca');

/* raio-X ativo */
const L = ev('G.layout');
click(doc.querySelector('#toolbar .tool[data-tool="xray"]'));
ptr('pointerdown', L.mx, L.my);
await until(() => ev('G.scan') > 0.9, 8000);
await shot('04-raiox');
ptr('pointerup', L.mx, L.my);

/* meio do tratamento: escova + picareta */
click(doc.querySelector('#toolbar .tool[data-tool="brush"]'));
const alvo = ev('(function(){var i=G.teeth.findIndex(function(x){return x.plaque>0;});return i<0?null:{x:G.teeth[i]._x,y:G.teeth[i]._y};})()');
if (alvo) { ptr('pointerdown', alvo.x, alvo.y); await until(() => ev('G.t') > 2.2, 6000); }
await shot('05-escovando');
if (alvo) ptr('pointerup', alvo.x, alvo.y);

/* cárie sendo brocada */
const cav = ev('(function(){var i=G.teeth.findIndex(function(x){return x.caries>0&&x.revealed;});return i<0?null:{x:G.teeth[i]._x,y:G.teeth[i]._y};})()');
click(doc.querySelector('#toolbar .tool[data-tool="drill"]'));
if (cav) { ptr('pointerdown', cav.x, cav.y); await until(() => ev('G.teeth.some(function(x){return x.drilled>0.5;})'), 8000);
  await shot('06-broca'); ptr('pointerup', cav.x, cav.y); }

/* final: sorriso */
await until(() => ev('clinicDone()') === true || ev('G.over') === true, 1000);
if (!ev('G.over')) { ev('G.teeth.forEach(function(x){x.plaque=0;x.tartar=0;x.debris=0;if(x.caries>0){x.caries=0;x.wasCaries=true;x.healed=true;}})'); }
await until(() => ev('G.over'), 4000);
await until(() => ev('G.smile') > 0.98, 6000);
await shot('07-sorriso-final');
await until(() => doc.getElementById('result').classList.contains('on'), 20000);
await shot('08-resultado');
click(doc.getElementById('resHome')); await sleep(120);

/* ---- salão ---- */
click(doc.querySelectorAll('#srow .pcard')[2]); await sleep(80);
click(doc.getElementById('btnStart'));
await until(() => ev('G.t') > 0.4);
await shot('09-salao-mao');

const npos = i => ev(`[G.nails[${i}]._x,G.nails[${i}]._y]`);
click(doc.querySelector('#toolbar .tool[data-tool="soap"]'));
for (let i = 0; i < 5; i++) { const [x, y] = npos(i); ptr('pointerdown', x, y);
  await until(() => ev(`G.nails[${i}].dirty`) === 0, 6000); ptr('pointerup', x, y); }
click(doc.querySelector('#toolbar .tool[data-tool="base"]'));
for (let i = 0; i < 5; i++) { const [x, y] = npos(i); ptr('pointerdown', x, y);
  await until(() => ev(`G.nails[${i}].base`) >= 1, 6000); ptr('pointerup', x, y); }
click(doc.querySelector('#toolbar .tool[data-tool="paint"]'));
click(doc.querySelector('#paints .sw[data-c="pink"]'));
for (let i = 0; i < 5; i++) { const [x, y] = npos(i); ptr('pointerdown', x, y); await sleep(220); ptr('pointerup', x, y); }
await shot('10-salao-esmaltado');
click(doc.querySelector('#toolbar .tool[data-tool="stamp"]'));
click(doc.querySelector('#paints .stp[data-s="star"]'));
for (let i = 0; i < 5; i++) { const [x, y] = npos(i); ptr('pointerdown', x, y); await sleep(220); ptr('pointerup', x, y); }
click(doc.querySelector('#toolbar .tool[data-tool="gloss"]'));
for (let i = 0; i < 5; i++) { const [x, y] = npos(i); ptr('pointerdown', x, y);
  await until(() => ev(`G.nails[${i}].gloss`) >= 1, 6000); ptr('pointerup', x, y); }
await shot('11-salao-final');

console.log('SVGs em', outDir);
process.exit(0);
