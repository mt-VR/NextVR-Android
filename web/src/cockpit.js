// Cockpit VR (o jogo de avião do planeVR) — o MENU, na shell do NextVR.
//
// O jogo em si é uma página HTML que o usuário entregou: ela desenha o próprio estéreo (dois olhos
// com a distorção da lente do VR Box), lê a câmera do aparelho e rastreia as mãos com o MediaPipe
// DELA. Isso é o que o jogo é, e é o que roda durante o voo.
//
// O que não podia continuar igual é o menu dele: uma tela cheia com "6DoF falso", "Controle: NÃO" e
// botões que só respondem a toque — dentro do NextVR o usuário tem as mãos e um feixe, não tem
// controle na mão. Então o menu do jogo passa a ser ESTA janela, desenhada na shell e operada pelo
// rastreio de mão do NextVR (aponte e faça a pinça), com as mesmas escolhas que o jogo tinha:
// avião, VR Cardboard ou tela única, som, gráficos leves, assistente, motor ligado, 3DoF/6DoF.
//
// O botão de iniciar entrega a tela ao jogo (ponte nativa `cockpitGame`): o NextVR fecha a câmera,
// desliga o próprio rastreio de mão e devolve a tela inteira para a página do jogo, que a partir daí
// usa as mãos dela. Ao sair (duas mãos em pinça, ✕ na tela do jogo ou Voltar), o NextVR volta com a
// câmera e as mãos exatamente como estavam.
import { toast, native } from './core.js';
import { open, wins, focus } from './windows.js';

const WIN_ID = 'nextvr-cockpit-menu';
const STORE_KEY = 'nextvrCockpitPrefs';

/** Os cinco aviões do jogo, com a descrição que a biblioteca dele mostrava. */
export const COCKPIT_PLANES = Object.freeze([
  { id: 'cessna', name: 'Cessna 172 Skyhawk', desc: 'Treinador clássico · 1 motor a pistão · ~120 kt · pouso fácil' },
  { id: 'tucano', name: 'EMB-314 Super Tucano', desc: 'Turboélice de ataque leve · ~280 kt · mais pesado e rápido' },
  { id: 'f22', name: 'F-22 Raptor', desc: 'Caça bimotor · bateria, gerador, 2 motores e acelerador' },
  { id: 'f117', name: 'F-117 Nighthawk', desc: 'Caça furtivo subsônico · 2 motores e luzes de painel' },
  { id: 'f35', name: 'F-35 Lightning II', desc: 'Cockpit botão por botão: bateria, APU, motor, gerador · HUD' },
]);

export const COCKPIT_LABEL = 'Cockpit VR';
export const COCKPIT_LOGO = './icons/cockpit-vr-logo.svg';

// `lq` (gráficos leves) nasce LIGADO: o jogo foi escrito para uma tela de PC e, num celular dentro
// de um VR Box, o cenário cheio (1 400 campos, árvores, nuvens) derruba o quadro a ponto de parecer
// travado. O menu continua com o interruptor, para quem quiser o cenário completo.
const DEFAULTS = { air: 'cessna', mode: 'vr', snd: true, lq: true, as: true, ck: false, dof: '6', d6s: '1' };

function loadPrefs() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return { ...DEFAULTS };
    const saved = JSON.parse(raw);
    const prefs = { ...DEFAULTS, ...(saved && typeof saved === 'object' ? saved : {}) };
    if (!COCKPIT_PLANES.some(p => p.id === prefs.air)) prefs.air = DEFAULTS.air;
    if (prefs.mode !== 'mono') prefs.mode = 'vr';
    if (prefs.dof !== '3') prefs.dof = '6';
    if (prefs.d6s !== '0.6' && prefs.d6s !== '1.5') prefs.d6s = '1';
    return prefs;
  } catch { return { ...DEFAULTS }; }
}
function savePrefs(prefs) {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(prefs)); } catch { /* modo privado */ }
}

/**
 * Entrega a tela ao jogo com os ajustes do menu.
 *
 * A ponte só existe no app Android: sem ela (build web de teste) o usuário é avisado em vez de o
 * toque não fazer nada, que foi o defeito do Táxi na rodada passada.
 */
export function startCockpitGame(prefs) {
  const cfg = { ...DEFAULTS, ...(prefs || {}) };
  savePrefs(cfg);
  if (!native || !window.NativeXR?.cockpitGame) {
    toast('O Cockpit VR roda no app do NextVR (Android): ele precisa da câmera do aparelho para as mãos do jogo.');
    return false;
  }
  try {
    window.NativeXR.cockpitGame(JSON.stringify({
      air: cfg.air, mode: cfg.mode, snd: !!cfg.snd, lq: !!cfg.lq, as: !!cfg.as,
      ck: !!cfg.ck, dof: cfg.dof, d6s: cfg.d6s,
    }));
  } catch (error) {
    toast('Não consegui abrir o Cockpit VR: ' + (error?.message || error));
    return false;
  }
  toast('Cockpit VR: o voo começa já. As mãos do NextVR param — as mãos do jogo assumem.');
  return true;
}

function button(label, onClick, kind) {
  const b = document.createElement('button');
  b.type = 'button';
  b.textContent = label;
  b.style.cssText = [
    'font:600 15px/1.15 system-ui,sans-serif',
    'padding:15px 18px',
    'border-radius:14px',
    'border:1px solid ' + (kind === 'primary' ? 'rgba(255,176,32,.85)' : 'rgba(233,238,242,.22)'),
    'background:' + (kind === 'primary' ? '#ffb020' : 'rgba(255,255,255,.07)'),
    'color:' + (kind === 'primary' ? '#10151a' : '#e9eef2'),
    'width:100%',
    'text-align:center',
    'cursor:pointer',
    'min-height:52px',
  ].join(';');
  b.onclick = onClick;
  return b;
}

function toggle(label, value, onChange) {
  const row = document.createElement('label');
  row.style.cssText = [
    'display:flex', 'align-items:center', 'gap:12px', 'padding:10px 12px',
    'border-radius:12px', 'background:rgba(255,255,255,.05)', 'color:#e9eef2',
    'font:500 14px/1.2 system-ui,sans-serif', 'cursor:pointer', 'min-height:48px',
  ].join(';');
  const box = document.createElement('input');
  box.type = 'checkbox';
  box.checked = !!value;
  box.style.cssText = 'width:26px;height:26px;accent-color:#ffb020';
  box.onchange = () => onChange(box.checked);
  const span = document.createElement('span');
  span.textContent = label;
  span.style.flex = '1';
  row.append(box, span);
  return row;
}

function select(label, options, value, onChange) {
  const row = document.createElement('label');
  row.style.cssText = 'display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:12px;'
    + 'background:rgba(255,255,255,.05);color:#e9eef2;font:500 14px/1.2 system-ui,sans-serif;min-height:48px';
  const span = document.createElement('span');
  span.textContent = label;
  span.style.flex = '1';
  const sel = document.createElement('select');
  sel.style.cssText = 'font:600 14px/1 system-ui,sans-serif;padding:10px 12px;border-radius:10px;'
    + 'background:#26323d;color:#e9eef2;border:0;min-height:40px';
  for (const [v, text] of options) {
    const o = document.createElement('option');
    o.value = v; o.textContent = text;
    if (v === value) o.selected = true;
    sel.append(o);
  }
  sel.onchange = () => onChange(sel.value);
  row.append(span, sel);
  return row;
}

/** O menu do jogo: a janela que as mãos do NextVR operam. */
export function openCockpitMenu() {
  const existing = wins.find(w => w.id === WIN_ID);
  if (existing) { focus(existing); return existing; }

  const prefs = loadPrefs();
  const node = document.createElement('div');
  node.style.cssText = 'display:flex;flex-direction:column;gap:12px;padding:14px;height:100%;'
    + 'box-sizing:border-box;overflow-y:auto;color:#e9eef2;touch-action:pan-y';

  const head = document.createElement('div');
  head.innerHTML = `<div style="font:700 11px/1 system-ui,sans-serif;letter-spacing:.14em;color:#ffb020">PLANEVR · COCKPIT VR</div>
    <p style="margin:6px 0 0;font:400 12px/1.4 system-ui,sans-serif;color:#aab6c0">Este menu é do NextVR:
    aponte com a mão e faça a pinça. No voo, o NextVR desliga o rastreio de mão dele — quem pilota é o
    rastreio da própria página do jogo.</p>`;
  node.append(head);

  // --- OS BOTÕES DE VOAR FICAM NO ALTO, SEMPRE À VISTA ---------------------------
  // Antes eles ficavam depois dos cinco aviões e dos seis ajustes: numa janela de VR isso é uma tela
  // inteira de rolagem, e quem abria o Cockpit VR não achava como começar ("o jogo não abre").
  const status = document.createElement('p');
  status.style.cssText = 'margin:0;min-height:16px;font:600 12px/1.3 system-ui,sans-serif;color:#ffb020';
  const actions = document.createElement('div');
  actions.style.cssText = 'display:grid;grid-template-columns:1.35fr 1fr;gap:8px;position:sticky;top:0;'
    + 'z-index:2;background:rgba(16,21,26,.92);padding:2px 0 4px';
  const goVr = button('▶  VOAR · VR CARDBOARD', () => {
    prefs.mode = 'vr'; launch();
  }, 'primary');
  const goMono = button('TELA ÚNICA', () => {
    prefs.mode = 'mono'; launch();
  });
  actions.append(goVr, goMono);
  node.append(actions, status);

  function launch() {
    status.style.color = '#ffb020';
    status.textContent = 'Abrindo o voo… a tela do jogo assume em instantes.';
    const ok = startCockpitGame(prefs);
    if (!ok) status.textContent = 'Não consegui abrir o voo: o jogo roda no app do NextVR (Android).';
  }

  // --- os cinco aviões (um toque/pinça escolhe) ----------------------------------
  const gridHead = document.createElement('div');
  gridHead.style.cssText = 'font:600 12px/1 system-ui,sans-serif;color:#aab6c0;letter-spacing:.06em';
  gridHead.textContent = 'AVIÃO';
  const grid = document.createElement('div');
  grid.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:8px';
  const cards = new Map();
  for (const plane of COCKPIT_PLANES) {
    const card = document.createElement('button');
    card.type = 'button';
    card.dataset.cockpitAir = plane.id;
    card.style.cssText = 'text-align:left;padding:9px 11px;border-radius:12px;cursor:pointer;min-height:62px;'
      + 'border:2px solid rgba(233,238,242,.16);background:rgba(255,255,255,.05);color:#e9eef2;'
      + 'font:600 13px/1.2 system-ui,sans-serif';
    card.innerHTML = `<b style="display:block;font-size:13px">${plane.name}</b>
      <span style="display:block;margin-top:4px;font:400 10px/1.3 system-ui,sans-serif;color:#aab6c0">${plane.desc}</span>`;
    card.onclick = () => { prefs.air = plane.id; savePrefs(prefs); paintPick(); };
    cards.set(plane.id, card);
    grid.append(card);
  }
  node.append(gridHead, grid);

  function paintPick() {
    for (const [id, card] of cards) {
      const on = id === prefs.air;
      card.style.borderColor = on ? '#ffb020' : 'rgba(233,238,242,.16)';
      card.style.background = on ? 'rgba(255,176,32,.16)' : 'rgba(255,255,255,.05)';
    }
  }
  paintPick();

  // --- ajustes que o jogo tinha na tela dele (em duas colunas, para caber) --------
  const optionsHead = document.createElement('div');
  optionsHead.style.cssText = 'font:600 12px/1 system-ui,sans-serif;color:#aab6c0;letter-spacing:.06em';
  optionsHead.textContent = 'AJUSTES';
  const options = document.createElement('div');
  options.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:6px';
  options.append(
    select('Cabeça', [['6', '6DoF (do jogo)'], ['3', '3DoF']],
      prefs.dof, v => { prefs.dof = v; savePrefs(prefs); }),
    select('6DoF', [['0.6', 'Fraco'], ['1', 'Médio'], ['1.5', 'Forte']],
      prefs.d6s, v => { prefs.d6s = v; savePrefs(prefs); }),
    toggle('Som do avião', prefs.snd, v => { prefs.snd = v; savePrefs(prefs); }),
    toggle('Gráficos leves', prefs.lq, v => { prefs.lq = v; savePrefs(prefs); }),
    toggle('Assistente de voo', prefs.as, v => { prefs.as = v; savePrefs(prefs); }),
    toggle('Motor ligado', prefs.ck, v => { prefs.ck = v; savePrefs(prefs); }),
  );
  node.append(optionsHead, options);

  const note = document.createElement('p');
  note.style.cssText = 'margin:2px 0 8px;font:400 11px/1.4 system-ui,sans-serif;color:#8d9aa5';
  note.textContent = 'O jogo já vai no pacote — three.js, cannon e o rastreio de mão do MediaPipe estão '
    + 'dentro do APK: nada é baixado. Ele pede a câmera e o NextVR concede. No canto da tela do voo há uma '
    + 'linha de estado (bibliotecas, mãos, câmera). Para sair: as duas mãos em pinça por dois segundos, '
    + 'o ✕ no alto da tela, ou o Voltar do Android.';
  node.append(note);

  const win = open({ id: WIN_ID, title: 'Cockpit VR', node, w: 660, h: 780 });
  return win;
}
