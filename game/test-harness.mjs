/* Smoke test do jogo em DOM simulado (jsdom) com stub de canvas 2D.
   Roda o jogo inteiro: menu -> consultório (todas as ferramentas) -> resultado -> salão. */
import fs from 'node:fs';
import path from 'node:path';
import { JSDOM, VirtualConsole } from '/tmp/ig/node_modules/jsdom/lib/api.js';

const html = fs.readFileSync(process.argv[2] || 'titans-clinic.html', 'utf8');
const vc = new VirtualConsole();
const errors = [];
vc.on('jsdomError', e => errors.push('jsdomError: ' + (e.stack || e.message)));
vc.on('error', (...a) => errors.push('console.error: ' + a.join(' ')));

function ctxStub() {
  const gradient = { addColorStop() {} };
  const target = {
    canvas: null,
    createLinearGradient: () => gradient,
    createRadialGradient: () => gradient,
    createPattern: () => null,
    measureText: () => ({ width: 10 }),
    getImageData: () => ({ data: new Uint8ClampedArray(4) }),
    putImageData() {}, createImageData: () => ({ data: new Uint8ClampedArray(4) }),
    setTransform() {}, getTransform: () => ({ a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 }),
    save() {}, restore() {}
  };
  return new Proxy(target, {
    get(t, k) {
      if (k in t) return t[k];
      return () => {};
    },
    set(t, k, v) { t[k] = v; return true; }
  });
}

const dom = new JSDOM(html, {
  runScripts: 'dangerously',
  pretendToBeVisual: true,
  virtualConsole: vc,
  url: 'http://localhost/',
  beforeParse(win) {
    const W = 390, H = 844;
    win.HTMLCanvasElement.prototype.getContext = function () { const c = ctxStub(); c.canvas = this; return c; };
    win.Element.prototype.getBoundingClientRect = function () {
      const full = this.tagName === 'CANVAS' && this.id === 'cv';
      return { x: 0, y: 0, left: 0, top: 0, width: full ? W : 64, height: full ? H : 64,
        right: full ? W : 64, bottom: full ? H : 64, toJSON() {} };
    };
    win.innerWidth = W; win.innerHeight = H;
    win.devicePixelRatio = 2;
    win.requestAnimationFrame = cb => win.setTimeout(() => cb(win.performance.now()), 16);
    win.cancelAnimationFrame = id => win.clearTimeout(id);
    win.navigator.vibrate = () => true;
    win.AudioContext = undefined; win.webkitAudioContext = undefined;
    win.addEventListener('error', e => errors.push('window.error: ' + (e.error?.stack || e.message)));
  }
});

const win = dom.window, doc = win.document;
const sleep = ms => new Promise(r => setTimeout(r, ms));
const click = el => el.dispatchEvent(new win.MouseEvent('click', { bubbles: true, cancelable: true }));
function pointer(type, x, y) {
  const e = new win.MouseEvent(type, { bubbles: true, cancelable: true, clientX: x, clientY: y });
  Object.defineProperty(e, 'pointerId', { value: 1 });
  doc.getElementById('cv').dispatchEvent(e);
}
// `const`/`let` de script clássico não viram propriedade de window: use eval no contexto global
const ev = expr => win.eval(expr);
const G = () => ev('G');

/* Esfrega/aplica até o alvo mudar de estado, medindo o TEMPO DO JOGO (G.t) —
   em DOM simulado o requestAnimationFrame não acompanha o wall-clock. */
const gt = () => ev('G.t');
async function scrub(getTargets, maxGameSec = 14) {
  const t0 = gt();
  let passes = 0;
  for (;;) {
    const targets = getTargets();
    if (!targets.length) return passes;
    if (gt() - t0 > maxGameSec) return -1 - passes;
    passes++;
    for (const z of targets) {
      pointer('pointerdown', z.x, z.y);
      for (let k = 0; k < 10 && gt() - t0 < maxGameSec; k++) {
        await sleep(90);
        pointer('pointermove', z.x + (k % 3) * 5 - 5, z.y + (k % 2) * 6 - 3);
      }
      pointer('pointerup', z.x, z.y);
      await sleep(20);
      if (!getTargets().length) break;
    }
  }
}
async function tap(getTargets, taps = 6) {
  for (let i = 0; i < taps; i++) {
    const targets = getTargets();
    if (!targets.length) return;
    for (const z of targets) { pointer('pointerdown', z.x, z.y); await sleep(70); pointer('pointerup', z.x, z.y); await sleep(50); }
  }
}
async function waitForResult(maxMs = 30000) {
  const t0 = Date.now();
  while (!doc.getElementById('result').classList.contains('on') && Date.now() - t0 < maxMs) await sleep(150);
}
const checks = [];
const ok = (name, cond, extra = '') => { checks.push({ name, pass: !!cond, extra }); };

await sleep(120);

/* ---------- menu ---------- */
ok('menu visível', doc.getElementById('menu').classList.contains('on'));
ok('6 cards de pacientes', doc.querySelectorAll('#prow .pcard').length === 6,
  String(doc.querySelectorAll('#prow .pcard').length));
ok('6 cards do salão', doc.querySelectorAll('#srow .pcard').length === 6,
  String(doc.querySelectorAll('#srow .pcard').length));
ok('i18n aplicado', doc.querySelector('[data-i18n="clinic"]').textContent.length > 3);
ok('sem erros no boot', errors.length === 0, errors.join(' | '));

/* ---------- consultório: zumbi (mais difícil) ---------- */
click(doc.querySelectorAll('#prow .pcard')[5]);
await sleep(60);
ok('intro aberta', doc.getElementById('intro').classList.contains('on'));
ok('modo clínica', G().mode === 'clinic');
const case0 = G().teeth.map(t2 => ({ p: t2.plaque, ta: t2.tartar, c: t2.caries, h: t2.hidden }));
ok('16 dentes', G().teeth.length === 16, String(G().teeth.length));
const cnt0 = ev('countsOf()');
ok('problemas gerados', cnt0.plaque > 0 && cnt0.tartar > 0 && cnt0.caries > 0 && cnt0.hidden > 0,
  JSON.stringify(cnt0));
ok('checklist montado', doc.querySelectorAll('#checklist .task').length === 5);
ok('toolbar com 6 ferramentas', doc.querySelectorAll('#toolbar .tool').length === 6);

click(doc.getElementById('btnStart'));
await sleep(50);
ok('jogando', G().playing === true);

const L = () => G().layout;
const teethPos = () => G().teeth.map((t2, i) => ({ t: t2, x: t2._x ?? L().pos[i].x, y: t2._y ?? L().pos[i].y }))
  .filter(z => Number.isFinite(z.x) && Number.isFinite(z.y));

/* ferramenta errada = erro contado */
click(doc.querySelector('#toolbar .tool[data-tool="brush"]'));
let alvo = teethPos().find(z => !z.t.plaque && !z.t.tartar && !z.t.caries);
if (alvo) { pointer('pointerdown', alvo.x, alvo.y); await sleep(150); pointer('pointerup', alvo.x, alvo.y); }
ok('erro contado ao usar ferramenta errada', G().err > 0, 'err=' + G().err);

/* raio-X revela cáries ocultas */
click(doc.querySelector('#toolbar .tool[data-tool="xray"]'));
const c = L();
pointer('pointerdown', c.mx, c.my);
await sleep(1400);
pointer('pointerup', c.mx, c.my);
ok('raio-X revelou ocultas', ev('countsOf()').hidden === 0, 'hidden=' + ev('countsOf()').hidden);

/* escova -> placa */
click(doc.querySelector('#toolbar .tool[data-tool="brush"]'));
await scrub(() => teethPos().filter(z2 => z2.t.plaque > 0));
ok('placa removida', ev('countsOf()').plaque === 0, 'plaque=' + ev('countsOf()').plaque);

/* picareta -> tártaro */
click(doc.querySelector('#toolbar .tool[data-tool="pick"]'));
await tap(() => teethPos().filter(z2 => z2.t.tartar > 0), 5);
ok('tártaro removido', ev('countsOf()').tartar === 0, 'tartar=' + ev('countsOf()').tartar);

/* broca -> cárie vira detrito */
click(doc.querySelector('#toolbar .tool[data-tool="drill"]'));
await scrub(() => teethPos().filter(z2 => z2.t.caries > 0), 26);
ok('cáries brocadas', ev('countsOf()').caries === 0, 'caries=' + ev('countsOf()').caries);
ok('detritos criados', ev('countsOf()').debris > 0, 'debris=' + ev('countsOf()').debris);

/* aspirador */
click(doc.querySelector('#toolbar .tool[data-tool="vac"]'));
await scrub(() => teethPos().filter(z2 => z2.t.debris > 0), 20);
ok('detritos aspirados', ev('countsOf()').debris === 0, 'debris=' + ev('countsOf()').debris);

/* cura */
click(doc.querySelector('#toolbar .tool[data-tool="heal"]'));
await scrub(() => teethPos().filter(z2 => z2.t.wasCaries && !z2.t.healed), 26);
ok('caso concluído', ev('clinicDone()'), JSON.stringify(ev('countsOf()')));
await waitForResult();
ok('tela de resultado', doc.getElementById('result').classList.contains('on'));
ok('estrelas entre 1 e 3', doc.querySelectorAll('#resStars i').length === 3);
const coins1 = ev('S').coins;
ok('moedas ganhas', coins1 > 0, 'coins=' + coins1);
ok('progresso salvo', (ev('S').stars[G().patient.id] || 0) > 0);

/* ---------- próximo paciente ---------- */
click(doc.getElementById('resNext'));
await sleep(80);
ok('próximo paciente abriu intro', doc.getElementById('intro').classList.contains('on'));
click(doc.getElementById('btnStart'));
await sleep(40);
click(doc.getElementById('btnPause'));
ok('pause aberto', doc.getElementById('pause').classList.contains('on'));
click(doc.getElementById('pHome'));
ok('voltou ao menu', doc.getElementById('menu').classList.contains('on'));

/* ---------- salão ---------- */
click(doc.querySelectorAll('#srow .pcard')[2]);
await sleep(60);
click(doc.getElementById('btnStart'));
await sleep(40);
ok('modo salão', G().mode === 'salon');
ok('5 unhas', G().nails.length === 5);
ok('barra de cores escondida p/ sabão', !doc.getElementById('paints').classList.contains('on'));

const npos = () => G().nails.map((n, i) => ({ n, x: n._x ?? G().layout.nails[i].ex, y: n._y ?? G().layout.nails[i].ey }))
  .filter(z => Number.isFinite(z.x) && Number.isFinite(z.y));

click(doc.querySelector('#toolbar .tool[data-tool="soap"]'));
await scrub(() => npos().filter(z2 => z2.n.dirty > 0), 16);
ok('unhas limpas', ev('salonCounts()').dirty === 0, JSON.stringify(ev('salonCounts()')));

click(doc.querySelector('#toolbar .tool[data-tool="base"]'));
await scrub(() => npos().filter(z2 => z2.n.base < 1 && !z2.n.color), 16);
ok('base aplicada', ev('salonCounts()').base === 0, JSON.stringify(ev('salonCounts()')));

click(doc.querySelector('#toolbar .tool[data-tool="paint"]'));
ok('paleta visível ao pintar', doc.getElementById('paints').classList.contains('on'));
const sw = doc.querySelector('#paints .sw[data-c="blue"]');
click(sw);
for (const z of npos()) { pointer('pointerdown', z.x, z.y); await sleep(140); pointer('pointerup', z.x, z.y); }
ok('5 unhas esmaltadas', ev('salonCounts()').paint === 5, JSON.stringify(ev('salonCounts()')));

click(doc.querySelector('#toolbar .tool[data-tool="stamp"]'));
click(doc.querySelector('#paints .stp[data-s="heart"]'));
for (const z of npos()) { pointer('pointerdown', z.x, z.y); await sleep(140); pointer('pointerup', z.x, z.y); }
ok('carimbos iguais', G().nails.every(n => n.stamp === 'heart'));

click(doc.querySelector('#toolbar .tool[data-tool="gloss"]'));
await scrub(() => npos().filter(z2 => z2.n.gloss < 1), 16);
ok('salão concluído', ev('salonDone()'), JSON.stringify(ev('salonCounts()')));
await waitForResult();
ok('resultado do salão', doc.getElementById('result').classList.contains('on'));
ok('bônus de carimbo no texto', /Bônus|Bonus/.test(doc.getElementById('resText').textContent),
  doc.getElementById('resText').textContent);
ok('moedas aumentaram', ev('S').coins > coins1, coins1 + ' -> ' + ev('S').coins);

/* ---------- loja: cor bloqueada ---------- */
click(doc.getElementById('resHome'));
await sleep(40);
click(doc.querySelectorAll('#srow .pcard')[0]);
await sleep(40);
click(doc.getElementById('btnStart'));
await sleep(30);
click(doc.querySelector('#toolbar .tool[data-tool="paint"]'));
const locked = doc.querySelector('#paints .sw.lock');
if (locked) {
  click(locked);
  await sleep(30);
  ok('loja abre em cor bloqueada', doc.getElementById('shop').classList.contains('on'));
  ev('S').coins = 500; ev('save()');
  click(doc.getElementById('shopYes'));
  await sleep(30);
  ok('compra desbloqueia', ev('S').ownedColors.length > 4 && ev('S').coins < 500,
    ev('S').ownedColors.join(',') + ' coins=' + ev('S').coins);
  ok('loja fechou', !doc.getElementById('shop').classList.contains('on'));
} else ok('há cores bloqueadas', false, 'nenhuma .lock encontrada');

/* ---------- idioma ---------- */
click(doc.getElementById('btnHome'));
await sleep(30);
click(doc.getElementById('btnSet'));
click(doc.getElementById('btnLang2'));
await sleep(40);
ok('traduziu para EN', doc.querySelector('[data-i18n="clinic"]').textContent === 'Dental Clinic',
  doc.querySelector('[data-i18n="clinic"]').textContent);
ok('título do pause em EN', /Paused/.test(doc.getElementById('pauseTitle').textContent));
click(doc.getElementById('btnLang2'));
await sleep(40);
ok('voltou para PT', doc.querySelector('[data-i18n="clinic"]').textContent === 'Consultório Dentário');
click(doc.getElementById('setClose'));

/* ---------- relatório ---------- */
const failed = checks.filter(c2 => !c2.pass);
checks.forEach(c2 => console.log(`${c2.pass ? 'PASS' : 'FAIL'}  ${c2.name}${c2.extra ? '  [' + c2.extra + ']' : ''}`));
if (errors.length) { console.log('\n--- erros de runtime ---'); errors.slice(0, 8).forEach(e => console.log(e)); }
console.log(`\n${checks.length - failed.length}/${checks.length} passaram`);
process.exit(failed.length || errors.length ? 1 : 0);
