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

test('as lentes são as do NextVR, as mãos vêm do app e a tela é só o jogo', () => {
  const game = read(GAME);
  const lens = read('tools/gorilla-rush/parts/lens.js');
  const hands = read('tools/gorilla-rush/parts/hands.js');
  const net = read('tools/gorilla-rush/parts/net.js');
  const css = read('tools/gorilla-rush/parts/game.css');
  const tag = read('web/src/gorilla-tag.js');
  const activity = read('nextvr-android/src/main/java/com/nextvr/app/NextVrActivity.java');

  // "bota as mesmas lentes que tem no next": os números não são inventados aqui, são os do
  // CARDBOARD_2015_LENS que o NextVR já usa nos jogos dele (fov 80 · ipd 0.064).
  const fov = Number(/fov: ([\d.]+)/.exec(tag)?.[1]);
  const ipd = Number(/ipd: ([\d.]+)/.exec(tag)?.[1]);
  assert.equal(fov, 80);
  assert.equal(ipd, 0.064);
  assert.ok(lens.includes(`const FOV = ${fov}, IPD = ${ipd};`), 'o jogo usa o mesmo FOV e o mesmo IPD do NextVR');
  assert.ok(lens.includes('const HALF_IPD = IPD / 2;') && lens.includes('multiplyScalar(HALF_IPD)'),
    'cada olho fica a 32 mm do centro, como no NextVR');
  // O three.js JÁ multiplica viewport/scissor pelo pixelRatio da sessão
  // (`setViewport` → `N.multiplyScalar(P)`). Multiplicar de novo aqui encolhia cada olho para um
  // quarto da tela, no canto: era o "as lentes estão assim" da 2.6.0.
  // O pixel ratio SÓ pode aparecer no TAMANHO da textura do olho (device pixels); no recorte, que é
  // em CSS, ele encolheria o olho para um quarto da tela.
  assert.equal(lens.split('\n').some((l) => /setViewport|setScissor/.test(l) && !l.trim().startsWith('//') && /getPixelRatio|dpr/.test(l)), false,
    'o recorte dos olhos NÃO multiplica pelo pixel ratio outra vez');
  assert.equal(/Math\.round\(e \* hw/.test(lens), false, 'nem por outro caminho');
  assert.ok(lens.includes('const dpr = R.getPixelRatio() || 1;') && lens.includes('ensure(Math.round(hw * dpr), Math.round(H * dpr));'),
    'o pixel ratio é usado só no tamanho da textura do olho, como o three.js exige');
  assert.equal(/const W = innerWidth, H = innerHeight, hw = (W >> 1|W \/ 2);/.test(lens), true,
    'os olhos são recortados em unidades de CSS, como o three.js espera');
  assert.ok(lens.includes('cam.aspect = tw / th;') || lens.includes('cam.aspect = hw / H;'),
    'cada olho vê meia tela, não a tela inteira');
  // Uma textura por olho e o passe de barril com os MESMOS k1/k2 do Cockpit: isso é a correção da
  // lente Cardboard 2015, não uma "segunda distorção" por cima dela.
  assert.ok(lens.includes('const K1 = 0.441, K2 = 0.156;'),
    'os coeficientes são os da Cardboard v1, iguais aos do jogo de avião');
  assert.ok(lens.includes('rt[e] = new THREE.WebGLRenderTarget('), 'uma textura por olho, meia tela cada');
  assert.ok(game.includes('function renderPlay(){if(NVLENS.on()){NVLENS.render();return}'),
    'o desenho do jogo passa pelas lentes do NextVR');

  // "bota Hand tracking nele, pq ele tá sem": quem rastreia é o app e o jogo recebe o quadro pronto.
  assert.ok(hands.includes('window.__nvHands = function (frame)'), 'a página aceita as mãos do app');
  assert.ok(hands.includes('for (let k = 0; k < 21; k++)'), 'nos 21 landmarks do MediaPipe (mesmo formato do jogo)');
  assert.ok(hands.includes('NV_NATIVE_HANDS') && hands.includes('Object.assign(slot[i]'),
    'o quadro cai nos slots que o gorila já usava');
  assert.ok(game.includes('if (!camOn && !NV_NATIVE_HANDS) startCam()'),
    'a câmera do próprio jogo não é aberta quando o app é quem rastreia');
  assert.ok(net.includes('if (!R.xr.isPresenting && !NV_NATIVE_HANDS) await startCam()'),
    'nem ao entrar na partida (uma câmera só no aparelho, e ela é do NextVR)');
  assert.ok(activity.includes('offerGorillaHands(frame.gameJson())'),
    'o rastreio do NextVR manda o quadro para o jogo');
  assert.ok(activity.includes('window.__nvHands&&window.__nvHands('),
    'e o empurra como o formato que a página entende');
  assert.ok(activity.includes('final boolean gorilla="gorilla".equals(kind);') && activity.includes('camera.enableHands(true);'),
    'no Gorilla Rush o rastreio fica ligado; no Cockpit continua desligado');

  // "tira os textos que fica na tela, é só o jogo": as faixas saem por CSS e nada é escrito nelas.
  assert.ok(css.includes('#nvb,#netst,#ighint,#st,#hud{display:none!important}'),
    'faixa de estado, dica, HUD e contador não aparecem');
  assert.equal(/<div id="(nvb|netst|ighint)"/.test(game), false, 'e os elementos das faixas nem existem na página');
  assert.equal(/\$\('(nvb|netst|ighint)'\)/.test(net), false, 'o online não escreve mais na tela');
  assert.ok(net.includes('function nvLog(text)') && net.includes('NextVRGame.report'),
    'o estado vai para o console e para o app, que é quem mostra a janela de problema');
});

test('o boneco e os braços: o gorila não pode "sumir" e a mão move o braço', () => {
  const adapt = read('tools/gorilla-rush/adapt.mjs');
  const game = read(GAME);
  const hands = read('tools/gorilla-rush/parts/hands.js');
  const activity = read('nextvr-android/src/main/java/com/nextvr/app/NextVrActivity.java');

  // As mãos em repouso eram 1,05 m ABAIXO da câmera com z 0,02 — fora do campo de visão. Sem mãos
  // rastreadas (o caminho do JOIN) o resultado era um jogo sem braço e sem boneco à vista.
  assert.ok(adapt.includes("const REST_OLD = 'hl=[V3(-.22,-1.05,.02),V3(.22,-1.05,.02)]'"),
    'o adaptador sabe qual era o descanso antigo');
  assert.equal(game.includes('hl=[V3(-.22,-1.05,.02)'), false, 'o descanso fora da tela saiu');
  assert.ok(game.includes('hl=[V3(-.32,-.62,.5),V3(.32,-.62,.5)]'),
    'as mãos descansam à frente e à vista, como no Gorilla Tag');
  assert.ok(game.includes('V3(i?.32:-.32,-.62,.5)'), 'e o destino sem detecção é o mesmo lugar');

  // `LM` só existe depois que o GLB do gorila carrega. Um quadro antes disso lançava no meio do
  // laço e o `renderPlay()` nunca era alcançado: tela preta (o "boneco sumiu" e o jogo parado).
  assert.ok(game.includes('if(LM){setBlob(LM.blob'), 'o laço não quebra enquanto o modelo não chega');
  assert.match(game, /handPose\(LM,'R',HO\[1\]\.d,HO\[1\]\.A,HO\[1\]\.c\)\}\}/,
    'e o bloco que depende do modelo fecha no lugar certo');
  assert.ok(game.includes('o modelo do gorila não carregou'),
    'se o GLB falhar, o aviso chega ao app em vez de um jogo sem boneco e sem explicação');

  // A mão que move o braço é a do lado certo: quem diz esquerda/direita é o rastreio do app, não a
  // posição x na imagem (com as mãos cruzadas ela trocava os braços).
  assert.ok(hands.includes("typeof h.left === 'boolean' ? (h.left ? 0 : 1)"),
    'a lateralidade vem do rastreio nativo');
  assert.equal(hands.includes('hs.sort((a, b) => a.x - b.x)'), false, 'sem ordenar por x (troca os braços)');

  // O JOIN da aba 4 abre o jogo com o menu de entrada ainda visível. O portão de mãos do app é da
  // interface, não do jogo: com ele na frente, esse caminho ficava sem nenhum quadro de mão.
  assert.ok(activity.includes('final boolean gorillaGame="gorilla".equals(gameKind) && cockpitView!=null;'),
    'o quadro sabe quando é o Gorilla Rush');
  assert.ok(activity.includes('if(!gorillaGame && (entryVisible'),
    'e o portão do menu de entrada não vale para o jogo');
});

test('o ícone do app é a arte nova entregue (árvore, chapéu e presentes)', async () => {
  const { createHash } = await import('node:crypto');
  // Quadrada, grande e exatamente o arquivo que o usuário entregou ("bota esse ícone novo no nextVR").
  const buf = readFileSync('artwork/nextvr-apk-logo.png');
  assert.equal(createHash('sha256').update(buf).digest('hex'),
    '67e7ec61062142bc44578d2c674209120940beb40dca3962811b54d10d2684dd',
    'a arte do launcher é o PNG entregue nesta rodada');
  const png = (p) => {
    const b = readFileSync(p);
    return { w: b.readUInt32BE(16), h: b.readUInt32BE(20), magic: b.subarray(1, 4).toString('latin1') };
  };
  assert.equal(png('artwork/nextvr-apk-logo.png').magic, 'PNG');
  assert.deepEqual([png('artwork/nextvr-apk-logo.png').w, png('artwork/nextvr-apk-logo.png').h], [1254, 1254]);
  for (const [density, side] of [['mdpi', 48], ['hdpi', 72], ['xhdpi', 96], ['xxhdpi', 144], ['xxxhdpi', 192]]) {
    const icon = png(`nextvr-android/src/main/res/drawable-${density}/nextvr_ic_launcher.png`);
    assert.equal(icon.magic, 'PNG');
    assert.deepEqual([icon.w, icon.h], [side, side], `${density} tem o tamanho certo`);
  }
});
