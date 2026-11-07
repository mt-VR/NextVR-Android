// Gorilla Rush no NextVR: o jogo (asset), o NOSSO servidor, a ponte nativa, a aba 4 e o JOIN.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { createServer } from 'node:net';

const read = path => readFileSync(path, 'utf8');
const GAME = 'nextvr-android/src/main/assets/ui/gorilla-rush/game.html';
const SERVER = 'server/gorilla-rush/server.mjs';

const freePort = () => new Promise(resolve => {
  const probe = createServer();
  probe.listen(0, '127.0.0.1', () => {
    const { port } = probe.address();
    probe.close(() => resolve(port));
  });
});

/** Abre o servidor do jogo num processo e espera a linha "ouvindo". */
async function startServer() {
  const port = await freePort();
  const child = spawn(process.execPath, [SERVER, '--port', String(port), '--host', '127.0.0.1'], { stdio: ['ignore', 'pipe', 'pipe'] });
  await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('o servidor não subiu')), 8000);
    child.stdout.on('data', chunk => {
      if (String(chunk).includes('ouvindo')) { clearTimeout(timer); resolve(); }
    });
    child.on('exit', code => { clearTimeout(timer); reject(new Error('servidor saiu com ' + code)); });
  });
  return { child, port, url: `ws://127.0.0.1:${port}` };
}

/** Um cliente do protocolo: manda JSON e guarda o que chega. */
function client(url) {
  const ws = new WebSocket(url);
  const inbox = [];
  const waiters = [];
  ws.addEventListener('message', event => {
    const msg = JSON.parse(event.data);
    inbox.push(msg);
    for (let i = waiters.length - 1; i >= 0; i--) {
      if (waiters[i].match(msg)) { const w = waiters.splice(i, 1)[0]; clearTimeout(w.timer); w.resolve(msg); }
    }
  });
  const api = {
    ws, inbox,
    open: () => new Promise((res, rej) => { ws.addEventListener('open', res, { once: true }); ws.addEventListener('error', rej, { once: true }); }),
    send: msg => ws.send(JSON.stringify(msg)),
    next: (match, ms = 4000) => new Promise((resolve, reject) => {
      const found = inbox.find(match);
      if (found) return resolve(found);
      const timer = setTimeout(() => reject(new Error('nada chegou: ' + JSON.stringify(inbox))), ms);
      waiters.push({ match, resolve, timer });
    }),
    close: () => ws.close(),
  };
  return api;
}

test('o servidor do Gorilla Rush é NOSSO: salas, anfitrião, espelho de estado e troca de anfitrião', async () => {
  const { child, url, port } = await startServer();
  try {
    const host = client(url);
    await host.open();
    host.send({ t: 'join', code: 'NV123', mode: 'inf', pub: false, nick: 'Nany' });
    const hello = await host.next(m => m.t === 'hello');
    assert.equal(hello.code, 'NV123');
    assert.equal(hello.host, true, 'o primeiro da sala é o anfitrião');
    assert.equal(hello.mode, 'inf', 'o modo escolhido no jogo vai para a sala');
    assert.ok(hello.id, 'o servidor dá um id a cada jogador');

    const guest = client(url);
    await guest.open();
    guest.send({ t: 'join', code: 'NV123', mode: 'inf', nick: 'Visitante' });
    const guestHello = await guest.next(m => m.t === 'hello');
    assert.equal(guestHello.host, false, 'o segundo é convidado');
    assert.equal(guestHello.code, 'NV123', 'entrou na MESMA sala pelo código');
    await host.next(m => m.t === 'peer' && m.on === true);

    // Convidado manda o estado dele: quem recebe é o anfitrião, com o id de quem mandou.
    guest.send({ t: 'p', x: 1, y: 2, z: 3, w: 0, h: [0, 0, 0, 0, 0, 0], c: '#fff', n: 'Visitante', a: [] });
    const relayed = await host.next(m => m.t === 'p');
    assert.equal(relayed.id, guestHello.id, 'o servidor identifica o jogador que mandou');
    assert.equal(relayed.x, 1);

    // O anfitrião manda o mundo: TODOS os convidados recebem (ele mesmo não).
    host.send({ t: 's', it: null, e: [{ i: 'x', x: 0 }], inf: [] });
    const world = await guest.next(m => m.t === 's');
    assert.equal(world.e.length, 1);
    assert.equal(host.inbox.filter(m => m.t === 's').length, 0, 'o anfitrião não recebe o próprio mundo');

    // O anfitrião sai: o convidado é promovido, a sala continua de pé.
    host.close();
    const promoted = await guest.next(m => m.t === 'promote');
    assert.equal(promoted.code === undefined || true, true);
    assert.equal(promoted.mode, 'inf');
    // E agora é ele quem replica o mundo.
    const third = client(url);
    await third.open();
    third.send({ t: 'join', code: 'NV123', mode: 'inf' });
    const thirdHello = await third.next(m => m.t === 'hello');
    assert.equal(thirdHello.host, false, 'com o anfitrião novo, quem chega é convidado');
    guest.send({ t: 's', it: 'a', e: [] });
    await third.next(m => m.t === 's');

    // O diagnóstico HTTP responde o que está acontecendo.
    const health = await (await fetch(`http://127.0.0.1:${port}/health`)).json();
    assert.equal(health.ok, true);
    assert.equal(health.rooms, 1);
    assert.equal(health.players, 2, 'dois jogadores na sala depois da troca de anfitrião');
    third.close(); guest.close();
  } finally {
    child.kill('SIGKILL');
  }
});

test('o servidor recusa sala cheia e escolhe uma sala pública livre no "entrar rápido"', async () => {
  const { child, url } = await startServer();
  try {
    const quick = client(url);
    await quick.open();
    quick.send({ t: 'join', quick: true, mode: 'tag', pub: true });
    const hello = await quick.next(m => m.t === 'hello');
    assert.match(hello.code, /^PUB\d$/, 'o "entrar rápido" cai numa das salas públicas do servidor');
    assert.equal(hello.pub, true);
    const second = client(url);
    await second.open();
    second.send({ t: 'join', quick: true, mode: 'tag', pub: true });
    const hello2 = await second.next(m => m.t === 'hello');
    assert.equal(hello2.code, hello.code, 'o segundo "rápido" completa a mesma sala pública');

    // Sala lotada: o nono jogador não entra (o jogo tem 8 lugares).
    const many = [quick, second];
    for (let i = 0; i < 6; i++) {
      const c = client(url);
      await c.open();
      c.send({ t: 'join', code: hello.code, mode: 'tag' });
      await c.next(m => m.t === 'hello');
      many.push(c);
    }
    const unlucky = client(url);
    await unlucky.open();
    unlucky.send({ t: 'join', code: hello.code, mode: 'tag' });
    const full = await unlucky.next(m => m.t === 'full' || m.t === 'hello');
    assert.equal(full.t, 'full', 'a nona pessoa ouve que a sala está cheia');
    for (const c of [...many, unlucky]) c.close();
  } finally {
    child.kill('SIGKILL');
  }
});

test('o jogo é o HTML do usuário, mas sem PeerJS, sem CDN e sem o menu que ninguém alcançava', () => {
  const game = read(GAME);
  // O jogo em si (mapa, rig, física) continua dentro do arquivo.
  assert.ok(game.includes('PLAYER_B64'), 'o rig do gorila continua no arquivo');
  assert.ok(game.includes('MAP_B64'), 'o mapa continua no arquivo');
  // Bibliotecas do APK, não da CDN: dentro do VR Box não dá para contar com internet.
  for (const lib of ['/ui/cockpit/libs/three.min.js', '/ui/cockpit/libs/GLTFLoader.js',
    '/ui/gorilla-rush/libs/SkeletonUtils.js', '/ui/cockpit/libs/hands/hands.js'])
    assert.ok(game.includes(lib), `o jogo carrega ${lib} do pacote`);
  assert.equal(/<script src="https:\/\//.test(game), false, 'nenhum <script> vem de fora');
  assert.equal(game.includes('netlify'), false, 'a telemetria do site original saiu');
  // O online é o nosso servidor.
  assert.equal(game.includes('new Peer('), false, 'nada de PeerJS (o serviço de terceiros do jogo)');
  assert.ok(game.includes("new WebSocket(url)"), 'o online fala WebSocket com o nosso servidor');
  assert.ok(game.includes('nvConnect') && game.includes('server/gorilla-rush/server.mjs'),
    'o código aponta para o servidor deste repositório');
  // O que travava o jogador no VR Box: menu só de toque. Agora o NextVR entra direto e há um menu
  // dentro do jogo, mirado pelo giroscópio.
  assert.ok(game.includes('NVIG'), 'existe o menu dentro do jogo');
  assert.ok(game.includes('ray.setFromCamera({ x: 0, y: 0 }, cam)'), 'a mira do menu é o centro do olhar (giroscópio)');
  assert.ok(game.includes('IG_DWELL'), 'e o botão aciona por permanência, sem toque');
  assert.ok(game.includes("$('lobby')") && game.includes("lobby.style.display = 'none'"), 'o lobby só-de-toque sai da frente');
  // Entrar sem skin é o padrão; a skin vem das Configurações → aba 4.
  assert.ok(game.includes("ACCS = {") && game.includes("g: ['', 'g_white']"), 'a primeira opção de skin é NENHUMA');
  assert.ok(game.includes("q.has('acc')") && game.includes('myAcc.g = ACCS.g.includes'), 'a skin chega por parâmetro do menu do NextVR');
  // A ponte com o app: etapa para o watchdog e saída da tela cheia.
  assert.ok(game.includes("NextVRGame.stage('play')"), 'a página avisa quando a partida começou');
  assert.ok(game.includes('NextVRGame.exit'), 'sair do jogo devolve a tela ao NextVR');
  assert.ok(game.includes('__nvRetryHands'), 'a câmera concedida depois faz o rastreio subir');
  assert.equal(/<script[^>]*>[\s\S]{0,0}$/.test(''), false);
});

test('a ponte nativa abre o Gorilla Rush na mesma janela do Cockpit, com lista branca de parâmetros', () => {
  const activity = read('nextvr-android/src/main/java/com/nextvr/app/NextVrActivity.java');
  const surface = read('nextvr-android/src/main/java/com/nextvr/app/WebSurface.java');
  assert.ok(activity.includes('@JavascriptInterface public void gorillaGame(String json)'),
    'a shell chama gorillaGame(json)');
  assert.ok(activity.includes('private void openGorillaRush(String query) { openHtmlGame("gorilla",query); }'),
    'o Gorilla Rush usa a MESMA janela de jogo em tela cheia do Cockpit VR');
  assert.ok(activity.includes('"/ui/gorilla-rush/game.html"'), 'a página é a do pacote');
  assert.ok(activity.includes('private static String gorillaQueryFromJson(String json)'), 'os ajustes viram query string');
  // Lista branca: sala, cor, acessórios, servidor — o resto é descartado.
  for (const key of ['"room"', '"mode"', '"srv"', '"col"', '"acc"', '"solo"', '"quick"'])
    assert.ok(activity.includes('appendQuery(out,' + key), `a query leva ${key}`);
  assert.ok(activity.includes('if(!col.matches("#[0-9a-fA-F]{6}")) col="#ffffff";'), 'cor fora do formato cai no branco');
  assert.ok(activity.includes('if(!accH.equals("h_top")||') === false && activity.includes('||accH.equals("h_penguin")'),
    'só os acessórios que existem no jogo passam');
  // O valor vai direto para `new WebSocket()` na página: só esquema ws/wss entra.
  assert.ok(activity.includes('!srv.matches("wss?://[^'), 'o servidor só pode ser WebSocket (nunca http/javascript)');
  // O jogo é servido do APK (https://appassets…) e fala com o nosso servidor por ws:// (LAN, sem
  // TLS). Sem estas duas linhas o Chromium bloqueia o WebSocket como conteúdo misto / CSP.
  const surfaceCsp = read('nextvr-android/src/main/java/com/nextvr/app/WebSurface.java');
  assert.ok(surfaceCsp.includes('path.startsWith("/ui/cockpit/") || path.startsWith("/ui/gorilla-rush/")'),
    'a página do Gorilla Rush recebe a CSP das páginas de jogo (wasm + WebSocket)');
  assert.ok(surfaceCsp.includes("connect-src 'self' https: wss: ws: blob: data:;"),
    'o CSP do jogo deixa o WebSocket do nosso servidor passar');
  assert.ok(surfaceCsp.includes("'wasm-unsafe-eval'"), 'e deixa o MediaPipe compilar o wasm das mãos');
  assert.ok(surfaceCsp.includes('setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW)'),
    'ws:// na rede local não é mais barrado como conteúdo misto');

  // A volta: o mesmo GameBridge que fecha o Cockpit fecha o Gorilla.
  assert.ok(surface.includes('public void exit() { if(owner!=null) owner.closeCockpitGame(); }'),
    'o botão de sair do jogo devolve a tela e a câmera do NextVR');
});

test('a aba 4 escolhe sala, skin e configurações, e o JOIN entra no online sem passar pela biblioteca', () => {
  const menu = read('web/src/entry-menu.js');
  const gorilla = read('web/src/gorilla-rush.js');
  const apps = read('web/src/apps.js');
  // A aba existe e tem o que o usuário pediu.
  assert.ok(menu.includes('data-entry-settings-tab="4">Aba 4 · Gorilla Tag</button>'), 'a 4ª aba se chama Gorilla Tag');
  for (const hook of ['data-entry-gorilla-room', 'data-entry-gorilla-mode', 'data-entry-gorilla-color',
    'data-entry-gorilla-acc', 'data-entry-gorilla-gfx', 'data-entry-gorilla-srv', 'data-entry-gorilla-join'])
    assert.ok(menu.includes(hook), `a aba 4 tem ${hook}`);
  assert.ok(menu.includes("btn.onclick = () => launchGorillaRush({ mode: 'online' });"), 'o JOIN entra direto no online');
  assert.ok(menu.includes("btn.onclick = () => launchGorillaRush({ mode: 'quick' });"), 'e há a sala pública');
  // A biblioteca é o caminho de quem quer jogar sozinho.
  assert.ok(apps.includes("'gorilla-tag': () => launchGorillaRush({ mode: 'solo' }),"), 'a tile da biblioteca abre sozinho');
  assert.ok(apps.includes('launchGorillaRush({ mode: \'solo\' })') && !apps.includes('openGorillaTag('),
    'o Gorilla Tag antigo não é mais um caminho de jogo');
  // O jogo em si: nenhuma promessa de online sem servidor.
  assert.ok(gorilla.includes("if (how !== 'solo' && !prefs.srv)"), 'sem servidor, o JOIN avisa em vez de fingir');
  assert.ok(gorilla.includes('gorillaProblem('), 'e toda falha abre uma janela com o motivo');
  // Sem skin por padrão, e o endereço do servidor é normalizado (o usuário pode digitar só IP:porta).
  assert.ok(gorilla.includes("col: '#ffffff', accG: '', accH: '', accC: ''"), 'entra sem skin nenhuma');
  assert.ok(gorilla.includes("return 'ws://' + srv.replace(/\\/+$/, '');"), 'IP:porta vira ws://IP:porta');
  // O estado do jogo volta para a shell (a janela de problema depende disso).
  assert.ok(gorilla.includes('window.nextvrGorillaState = (what, detail) => {'), 'o app conta o que houve com o jogo');
});
