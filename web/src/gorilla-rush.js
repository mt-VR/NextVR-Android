// Gorilla Rush no NextVR — o jogo HTML que o usuário entregou, no lugar do Gorilla Tag antigo.
//
// DOIS CAMINHOS, de propósito:
//   • A tile da BIBLIOTECA e o card da LOJA abrem SOZINHO (offline): é o "quero jogar sozinho".
//   • O botão JOIN da aba 4 das Configurações abre ONLINE, já na sala escolhida — sem passar pela
//     biblioteca, que era o pedido ("quando clicar em join ele entra automaticamente").
//
// Quem entrega a tela é o app (ponte nativa `gorillaGame`): ele fecha a câmera e o rastreio de mão
// do NextVR, porque o jogo tem o rastreio dele (MediaPipe na própria página), e devolve tudo ao
// sair. O online é o NOSSO servidor (`server/gorilla-rush`), nunca o serviço de terceiros do jogo
// original; a sala, a skin e o resto vão na query string montada pelo lado nativo.
import { toast } from './core.js';
import { open } from './windows.js';

const STORE_KEY = 'nextvrGorillaPrefs';

/** Modos de sala que o jogo tem (os mesmos `cas`/`tag`/`inf` do protocolo). */
export const GORILLA_MODES = Object.freeze([
  { id: 'cas', name: 'Casual', desc: 'Só ficar junto, sem pega-pego' },
  { id: 'tag', name: 'Pega-pego', desc: 'Um vira o pegador e passa para os outros' },
  { id: 'inf', name: 'Infecção', desc: 'O infectado contamina todo mundo' },
]);

export const GORILLA_COLORS = Object.freeze([
  '#ffffff', '#3a2a20', '#e53935', '#1e88e5', '#43a047', '#fdd835', '#8e24aa', '#ff7043',
]);

/** Sem skin é o padrão: o usuário pediu para entrar "sem skin" e escolher depois. */
export const GORILLA_ACCESSORIES = Object.freeze({
  accG: [{ id: '', name: 'Nenhum' }, { id: 'g_white', name: 'Óculos brancos' }],
  accH: [
    { id: '', name: 'Nenhum' }, { id: 'h_top', name: 'Cartola' }, { id: 'h_party', name: 'Chapéu de festa' },
    { id: 'h_banana', name: 'Casca de banana' }, { id: 'h_penguin', name: 'Chapéu de pinguim' },
  ],
  accC: [{ id: '', name: 'Nenhuma' }, { id: 'c_hawaii', name: 'Camiseta havaiana' }],
});

export const GORILLA_DEFAULTS = Object.freeze({
  nick: '', room: '', mode: 'cas', srv: '',
  col: '#ffffff', accG: '', accH: '', accC: '', accY: 0, accZ: 0,
  gfx: 0, vr: true, mv: true, ht: false, quick: false,
});

function loadPrefs() {
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(STORE_KEY) || '{}') || {}; } catch { saved = {}; }
  const prefs = { ...GORILLA_DEFAULTS, ...saved };
  if (!GORILLA_MODES.some(m => m.id === prefs.mode)) prefs.mode = 'cas';
  if (!GORILLA_COLORS.includes(prefs.col)) prefs.col = GORILLA_DEFAULTS.col;
  if (!GORILLA_ACCESSORIES.accG.some(a => a.id === prefs.accG)) prefs.accG = '';
  if (!GORILLA_ACCESSORIES.accH.some(a => a.id === prefs.accH)) prefs.accH = '';
  if (!GORILLA_ACCESSORIES.accC.some(a => a.id === prefs.accC)) prefs.accC = '';
  prefs.room = String(prefs.room || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 8);
  prefs.srv = normaliseServer(prefs.srv);
  prefs.gfx = Math.max(0, Math.min(2, Number(prefs.gfx) || 0));
  return prefs;
}

function savePrefs(prefs) {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(prefs)); } catch { /* modo privado */ }
}

/** `192.168.0.10:8787` vira `ws://192.168.0.10:8787`; https vira wss. Vazio continua vazio. */
export function normaliseServer(value) {
  let srv = String(value || '').trim();
  if (!srv) return '';
  if (/^https:\/\//i.test(srv)) return srv.replace(/^https/i, 'wss').replace(/\/+$/, '');
  if (/^http:\/\//i.test(srv)) return srv.replace(/^http/i, 'ws').replace(/\/+$/, '');
  if (/^wss?:\/\//i.test(srv)) return srv.replace(/\/+$/, '');
  return 'ws://' + srv.replace(/\/+$/, '');
}

export function gorillaPrefs() { return loadPrefs(); }

export function updateGorillaPrefs(patch) {
  const prefs = { ...loadPrefs(), ...(patch || {}) };
  savePrefs(prefs);
  return loadPrefs();
}

let state = { at: 0, what: 'inicial', detail: '' };

/** O que o lado nativo conta do jogo (aberto, falhou, saiu). Chamado por `nextvrGorillaState`. */
if (typeof window !== 'undefined') {
  window.nextvrGorillaState = (what, detail) => {
    state = { at: Date.now(), what: String(what || ''), detail: detail ? String(detail) : '' };
  };
}

/**
 * Abre o jogo.
 * @param {{mode?:'solo'|'online'|'quick'}} options
 *   solo   — biblioteca/Loja: entra sozinho, sem sala.
 *   online — JOIN da aba 4: entra na sala do código (ou numa sala pública, se não houver código).
 *   quick  — sala pública direto.
 */
export function launchGorillaRush(options = {}) {
  const how = options.mode || 'solo';
  const prefs = loadPrefs();
  // A ponte é consultada no momento do clique (e não pela cópia que o core guarda no carregamento):
  // se ela não existir, o usuário é avisado em vez de o toque não fazer nada.
  if (!window.NativeXR?.gorillaGame) {
    toast('O Gorilla Rush roda no app do NextVR (Android): ele precisa da câmera do aparelho para as mãos do jogo.');
    return false;
  }
  if (how !== 'solo' && !prefs.srv) {
    gorillaProblem('Nenhum servidor configurado. Em Configurações → aba 4 (Gorilla Tag) → SERVIDOR, '
      + 'ponha o endereço do nosso servidor (ex.: ws://192.168.0.10:8787). Sem ele, o jogo abre sozinho.');
    return false;
  }
  state = { at: Date.now(), what: 'enviado', detail: '' };
  // A APARÊNCIA NÃO VAI MAIS DAQUI. "o menu de escolher a aparência vai sair das configurações ...
  // o menu inicial do gorilla vai continuar": cor, óculos, chapéu e roupa são escolhidos no menu do
  // próprio jogo (STYLE), no arranque dele. O app manda só o que é da partida: nome, sala, modo,
  // servidor, gráficos e tela.
  const payload = {
    nick: prefs.nick, room: how === 'solo' ? '' : prefs.room, mode: prefs.mode,
    srv: how === 'solo' ? '' : prefs.srv,
    gfx: prefs.gfx, vr: !!prefs.vr, mv: !!prefs.mv, ht: !!prefs.ht,
    solo: how === 'solo', quick: how === 'quick' || (how === 'online' && !prefs.room),
  };
  try {
    window.NativeXR.gorillaGame(JSON.stringify(payload));
  } catch (error) {
    gorillaProblem('Não consegui abrir o Gorilla Rush: ' + (error?.message || error));
    return false;
  }
  toast(how === 'solo'
    ? 'Gorilla Rush: o menu do jogo abre — é lá que se escolhe a aparência e se aperta PLAY.'
    : 'Gorilla Rush: entrando na sala do nosso servidor.');
  // Falha visível: se em 6 s o jogo não disser que abriu, o usuário vê o motivo em vez de nada.
  setTimeout(() => {
    if (state.what === 'aberto') return;
    gorillaProblem('O jogo não abriu. Etapa: ' + state.what + '. ' + (state.detail || ''));
  }, 6000);
  return true;
}

/** Uma janela com o motivo — nunca um toque que não faz nada. */
export function gorillaProblem(text) {
  try {
    const node = document.createElement('div');
    node.style.cssText = 'display:flex;flex-direction:column;gap:10px;padding:14px;color:#e9eef2;'
      + 'font:500 14px/1.45 system-ui,sans-serif';
    const title = document.createElement('b');
    title.textContent = 'Gorilla Rush não abriu';
    const body = document.createElement('span');
    body.textContent = text;
    const again = document.createElement('button');
    again.type = 'button';
    again.textContent = 'TENTAR DE NOVO';
    again.style.cssText = 'font:600 15px system-ui,sans-serif;padding:14px;border-radius:14px;border:0;'
      + 'background:#3ddc84;color:#04210f;width:100%;min-height:52px';
    again.onclick = () => launchGorillaRush({ mode: 'online' });
    node.append(title, body, again);
    open({ id: 'nextvr-gorilla-problem', title: 'Gorilla Rush', node, w: 560, h: 380 });
  } catch { /* sem janela: o toast já avisou */ }
  toast('Gorilla Rush: ' + text);
}
