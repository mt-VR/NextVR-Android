// ---------- ONLINE: o NOSSO servidor (server/gorilla-rush/server.mjs) ----------
//
// O jogo original entrava no PeerJS público: uma sala = um "peer id" e o anfitrião replicando o
// estado. Isso é serviço de terceiro, não abre sem internet e não é nosso. Aqui o online é um
// WebSocket para o NOSSO relé (o arquivo `server/gorilla-rush/server.mjs`), que roda no PC da
// mesma rede ou num VPS. O protocolo é o mesmo: o primeiro da sala é o anfitrião, ele recebe o
// estado dos outros (`p`) e devolve o mundo (`s`). Sem servidor configurado, o jogo entra sozinho —
// nunca finge que está online.
let SOCK = null, SRV_URL = '', NET_STATE = 'offline', NET_ERR = '', SOLO = true, JOINING = null;
let ROOM_CODE = '', ROOM_PUBLIC = false;

function nvUrl(raw) {
  let u = String(raw || '').trim();
  if (!u) return '';
  if (!/^wss?:\/\//i.test(u)) u = (/:\d+$/.test(u) || !/:\/\//.test(u)) && /^[\w.-]+(:\d+)?$/.test(u) ? 'ws://' + u : u.replace(/^https?/i, 'ws');
  return u.replace(/\/+$/, '');
}

/**
 * O estado do jogo NÃO vai para a tela.
 *
 * Pedido do usuário: "tira os textos que fica na tela, é só o jogo". Então nada de faixa de
 * "conectando", "sozinho" ou nome de sala por cima do gorila. O que continua existindo é o
 * diagnóstico para quem precisa dele: o console e o app (ponte `NextVRGame.report`), que é quem
 * mostra a janela de problema se a partida não abrir.
 */
function nvLog(text) {
  try { console.log('[gorilla] ' + text); } catch (e) {}
  try { if (typeof NextVRGame !== 'undefined' && NextVRGame && NextVRGame.report) NextVRGame.report('Gorilla Rush: ' + text); } catch (e) {}
}
function nvBanner(text) { if (text) nvLog(text); }

function nvFail(why) {
  NET_ERR = why || '';
  navigatorService(why);
}
function nvOnline(code, host) {
  NET_STATE = 'online';
  navigatorService((host ? 'anfitrião' : 'convidado') + ' da sala ' + code);
}
/** Um só lugar que registra o estado (console + app); a tela fica limpa. */
function navigatorService(text) {
  if (text) nvLog(text);
}

function nvSend(obj) {
  if (!SOCK || SOCK.readyState !== 1) return;
  try { SOCK.send(JSON.stringify(obj)); } catch (e) { /* a queda do socket já é tratada */ }
}

function nvClose(why) {
  const wasPlaying = state == 'play';
  try { if (SOCK) SOCK.close(); } catch (e) {}
  SOCK = null;
  NET_STATE = 'offline';
  if (wasPlaying) nvFail(why || 'conexão encerrada');
}

/** Abre o WebSocket e espera o `hello` do servidor (com prazo, para não travar o jogo). */
function nvConnect(opts) {
  return new Promise(resolve => {
    const url = nvUrl(SRV_URL);
    if (!url) { resolve({ ok: false, why: 'sem servidor configurado' }); return; }
    let ws;
    try { ws = new WebSocket(url); } catch (e) { resolve({ ok: false, why: 'endereço do servidor inválido' }); return; }
    let settled = false;
    const settle = value => { if (!settled) { settled = true; JOINING = null; resolve(value); } };
    JOINING = settle;
    nvBanner('CONECTANDO EM ' + url.replace(/^wss?:\/\//, '') + '…');
    const failTimer = setTimeout(() => { try { ws.close(); } catch (e) {} settle({ ok: false, why: 'o servidor não respondeu' }); }, 8000);

    ws.onopen = () => {
      clearTimeout(failTimer);
      SOCK = ws;
      nvSend(Object.assign({ t: 'join' }, opts));
    };
    ws.onmessage = event => {
      let m;
      try { m = JSON.parse(event.data); } catch (e) { return; }
      if (!m || typeof m != 'object') return;
      if (m.t == 'hello') {
        clearTimeout(failTimer);
        NET.host = !!m.host;
        NET.pub = !!m.pub;
        NET.mode = m.mode || NET.mode;
        NET.code = m.code || opts.code || 'SALA';
        me.id = m.id || 'me';
        ROOM_CODE = NET.code;
        ROOM_PUBLIC = !!m.pub;
        for (const k in RM) delete RM[k];
        nvOnline(NET.code, NET.host);
        settle({ ok: true });
        return;
      }
      if (m.t == 'full') { clearTimeout(failTimer); settle({ ok: false, why: 'a sala ' + (m.code || '') + ' está cheia' }); try { ws.close(); } catch (e) {} return; }
      if (m.t == 'error') { clearTimeout(failTimer); settle({ ok: false, why: m.why || 'o servidor recusou' }); return; }
      if (m.t == 'p') {
        // Estado de um jogador: só o anfitrião recebe. Mesmo formato que o `hostListen` usava.
        const h = m.h || [0, 0, 0, 0, 0, 0];
        RM[m.id] = { i: m.id, x: m.x, y: m.y, z: m.z, w: m.w, p: m.p, h, c: m.c, n: m.n, o: m.o, a: m.a, t: performance.now() };
        return;
      }
      if (m.t == 's') { netData(m); return; }
      if (m.t == 'promote') {
        // O anfitrião anterior saiu: o servidor elegou este cliente, e o jogo continua sem sala nova.
        NET.host = true; NET.pub = !!m.pub; NET.mode = m.mode || NET.mode;
        for (const k in RM) delete RM[k];
        nvOnline(NET.code, true);
        return;
      }
      if (m.t == 'peer') { if (m.on) nvBanner(''); return; }
      if (m.t == 'bye') { if (state == 'play') nvFail(m.why || 'a sala fechou'); return; }
    };
    ws.onerror = () => {};
    ws.onclose = () => {
      clearTimeout(failTimer);
      const wasOpen = SOCK === ws;
      if (wasOpen) SOCK = null;
      settle({ ok: false, why: wasOpen ? 'a conexão caiu' : 'não foi possível conectar' });
      if (wasOpen && state == 'play') { NET_STATE = 'offline'; nvFail('a conexão com o servidor caiu'); }
    };
  });
}

async function enter(mode, vr) {
  initAudio();
  me.nick = String(QNICK || $('nick').value || '').trim().slice(0, 12) || 'Gorilla';
  try { localStorage.setItem('gr_nick', me.nick); } catch (e) {}
  ['qj', 'jn'].forEach(i => { const b = $(i); if (b) b.disabled = true; });
  try { if (window.DeviceOrientationEvent && DeviceOrientationEvent.requestPermission) await DeviceOrientationEvent.requestPermission(); } catch (e) {}
  // Câmera: uma só no aparelho, e ela é do NextVR. Quando a ponte nativa existe (`NV_NATIVE_HANDS`)
  // o jogo NÃO abre a câmera dele: as mãos chegam por `window.__nvHands` (parts/hands.js). Só na
  // build web, sem app, ele usa o próprio MediaPipe.
  try { if (!R.xr.isPresenting && !NV_NATIVE_HANDS) await startCam(); }
  catch (e) { nvLog('sem câmera própria: arraste para olhar'); }

  // `mode`: 'solo' (biblioteca), 'quick' (sala pública) ou 'join' (código da sala).
  const want = mode == 'quick' ? 'quick' : (mode == 'join' ? 'join' : 'solo');
  let ok = false;
  if (want == 'solo' || SOLO || !nvUrl(SRV_URL)) {
    if (want != 'solo') nvFail(!nvUrl(SRV_URL) ? 'sem servidor configurado' : 'modo sozinho');
  } else {
    const code = (QROOM || $('code').value || '').trim().toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 8);
    const opts = want == 'quick'
      ? { quick: true, mode: QMODE, pub: true, nick: me.nick }
      : { code: code || rndCode(), mode: QMODE, pub: false, nick: me.nick };
    if (want == 'join' && code) opts.code = code;
    NET.mode = QMODE;
    const result = await nvConnect(opts);
    ok = !!result.ok;
    if (!ok) nvFail(result.why || 'não entrou na sala');
  }
  if (!ok) {
    // Sozinho de verdade: sem anfitrião remoto, sem promessas de online.
    SOCK = null;
    NET.host = true;
    NET.pub = false;
    NET.mode = QMODE;
    NET.code = 'SOZINHO';
    me.id = 'me';
    if (want == 'solo') nvFail(nvUrl(SRV_URL) ? 'você escolheu jogar sozinho' : 'sem servidor · jogando sozinho');
  }
  startGame();
}
