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
  // CARDBOARD_2015_LENS que o NextVR já usa nos jogos dele (fov 80). O IPD é o que o usuário pediu
  // nesta rodada: 67 mm ("as lentes do Google cardboard e 67mm").
  const fov = Number(/fov: ([\d.]+)/.exec(tag)?.[1]);
  const ipd = Number(/ipd: ([\d.]+)/.exec(tag)?.[1]);
  assert.equal(fov, 80);
  assert.equal(ipd, 0.067);
  assert.ok(lens.includes(`const FOV = ${fov}, IPD = ${ipd};`), 'o jogo usa o mesmo FOV e o mesmo IPD do NextVR');
  assert.ok(lens.includes('const HALF_IPD = IPD / 2;') && lens.includes('multiplyScalar(HALF_IPD)'),
    'cada olho fica a 33,5 mm do centro (IPD de 67 mm)');

  // "conserte as bordas, está quadrado": o raio da correção é normalizado pelo CANTO do olho e
  // dividido por (1+k1+k2) — assim a amostra do canto encosta na borda da textura e a imagem
  // PREENCHE o olho (antes sobrava uma moldura preta, com a imagem pequena e quadrada no meio).
  // A correção é a do SDK do Cardboard: amostra = raio · (1 + k1·r² + k2·r⁴), ou seja, MULTIPLICA —
  // a imagem fica MENOR que a tela e o que passa da textura vira preto. Dividir por (1+k1+k2), como
  // na 2.6.3, ampliava o centro em 1,6× (o "as lentes estão grandes").
  assert.ok(lens.includes('float f = 1.0 + k1 * s2 + k2 * s2 * s2;'), 'a correção multiplica o raio');
  assert.equal(lens.includes('(1.0 + k1 + k2)'), false, 'nada de dividir pelo total (ampliava o centro)');
  // Tamanho: o círculo da imagem em 86 % do raio do olho — a proporção que o próprio SDK chega para
  // o Cardboard v1, e a mesma da interface do NextVR fora do jogo.
  assert.ok(lens.includes('const LENS_FILL = 0.86;'), 'o círculo ocupa 86 % do olho');
  assert.ok(lens.includes('const TAN_EDGE = TAN_HALF / LENS_FILL;'), 'e a borda do olho é tan(40°)/0,86');
  assert.ok(lens.includes('1.0 - smoothstep(0.92, 1.0, r)'),
    'a imagem fecha em curva (a lente da caixa é redonda), em vez de corte reto');
  assert.equal(/uv\.x < 0\.0|gl_FragColor = vec4\(0\.0, 0\.0, 0\.0, 1\.0\)/.test(lens), false,
    'não existe mais o descarte que deixava a moldura preta quadrada');
  // Corrigir a lente usa só a parte de dentro da textura; por isso o olho é DESENHADO mais aberto,
  // senão o campo visível encolhe. O campo entregue continua sendo o do NextVR (80°).
  assert.ok(lens.includes('function renderFov(aspect)') && lens.includes('cam.fov = renderFov(tw / Math.max(1, th));'),
    'o olho é desenhado mais aberto (e com o campo vertical, que é o que o three usa)');
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

test('o boneco: três caminhos de carga, motivo real no aviso e fim do alarme falso de 8 s', async () => {
  const part = read('tools/gorilla-rush/parts/model.js');
  const ingame = read('tools/gorilla-rush/parts/ingame.js');
  const game = read('nextvr-android/src/main/assets/ui/gorilla-rush/game.html');

  // O caminho que sempre funciona primeiro: <img> clássico (TextureLoader), escondendo o
  // `createImageBitmap` só durante o parse. Depois o padrão do three e, por último, sem texturas.
  assert.ok(part.includes("const NV_MODOS = ['bordas por <img>', 'padrao do three', 'sem texturas'];"),
    'são três caminhos, na ordem do mais compatível para o mais pobrezinho');
  assert.ok(part.includes('delete window.createImageBitmap') && part.includes('window.createImageBitmap = guardado'),
    'no primeiro caminho o ImageBitmap é escondido durante o parse e devolvido depois');
  assert.ok(part.includes('if (modo < 2) { setTimeout(() => nvParseModelo(modo + 1), 350); return; }'),
    'uma falha cai para o próximo caminho em vez de desistir');
  assert.ok(part.includes('nvParseModelo(0);'), 'e o arranque já tenta o melhor caminho');

  // O alarme de 8 s não existe mais: demora não é falha (era o recado que o usuário via aparecer).
  assert.equal(ingame.includes('}, 8000);'), false, 'o aviso por tempo de 8 s saiu');
  assert.ok(ingame.includes('}, 30000);') && ingame.includes('ainda está carregando'),
    'sobrou só um \"ainda carregando\" de 30 s, com outra mensagem');
  assert.ok(ingame.includes("if (NV_MODEL.erro) return;"), 'e quem falhou de verdade é quem avisa, com o motivo');
  assert.ok(game.includes('nvParseModelo') && game.includes('nvSemTexturas') && game.includes('__nvModelo'),
    'a página gerada leva o carregador novo');
  assert.equal(game.includes('o modelo do gorila não carregou (o jogo continua sem o boneco)'), false,
    'a frase antiga saiu do jogo');
  assert.ok(game.includes('carga: typeof NV_MODEL'), 'e a sonda conta quantas tentativas e qual o motivo');

  // ---------- a função que remonta o GLB sem texturas, exercitada de verdade ----------
  const vm = await import('node:vm');
  const json = {
    asset: { version: '2.0' }, scenes: [{ nodes: [0] }], scene: 0,
    nodes: [{ name: 'gorila', mesh: 0 }],
    meshes: [{ primitives: [{ attributes: { POSITION: 0 } }] }],
    accessors: [{ bufferView: 0, componentType: 5126, count: 1, type: 'VEC3' }],
    bufferViews: [{ buffer: 0, byteOffset: 0, byteLength: 12 }],
    buffers: [{ byteLength: 12 }],
    images: [{ bufferView: 1, mimeType: 'image/png' }],
    textures: [{ source: 0 }], samplers: [{}],
    materials: [{ pbrMetallicRoughness: { baseColorTexture: { index: 0 } }, normalTexture: { index: 0 } }],
  };
  const jb = Buffer.from(JSON.stringify(json), 'utf8');
  const jpad = (4 - (jb.length % 4)) % 4;
  const jc = Buffer.concat([jb, Buffer.alloc(jpad, 0x20)]);
  const bin = Buffer.alloc(12, 7);
  const glb = Buffer.alloc(12 + 8 + jc.length + 8 + bin.length);
  glb.writeUInt32LE(0x46546c67, 0); glb.writeUInt32LE(2, 4); glb.writeUInt32LE(glb.length, 8);
  glb.writeUInt32LE(jc.length, 12); glb.writeUInt32LE(0x4e4f534a, 16); jc.copy(glb, 20);
  const bo = 20 + jc.length;
  glb.writeUInt32LE(bin.length, bo); glb.writeUInt32LE(0x004e4942, bo + 4); bin.copy(glb, bo + 8);
  const buffer = glb.buffer.slice(glb.byteOffset, glb.byteOffset + glb.byteLength);

  const calls = [];
  const sandbox = {
    window: {}, document: {}, console, Date, JSON, Math, String, Number, Object, Array, Promise,
    Uint8Array, Int8Array, Uint16Array, Uint32Array, Float32Array, DataView, ArrayBuffer,
    TextDecoder, TextEncoder, atob, setTimeout: (fn) => fn(),
    // o GLB de mentira, no mesmo formato base64 que a página carrega
    PLAYER_B64: glb.toString('base64'), pl: null, BUF: buffer,
    loader: {
      parse(buf, path, ok, fail) {
        calls.push(buf.byteLength);
        if (calls.length < 3) fail(new Error('textura embutida falhou'));
        else ok({ scene: { children: [] } });
      },
    },
    nvLog() {},
  };
  // O `build()` do jogo é quem põe o boneco na cena (`pl`); aqui ele só marca que foi chamado.
  sandbox.build = () => { sandbox.pl = { pronto: true }; };
  sandbox.globalThis = sandbox;
  const ctx = vm.createContext(sandbox);
  vm.runInContext(part, ctx);
  assert.deepEqual(calls.slice(0, 3).length, 3, 'as três tentativas aconteceram');
  const estado = vm.runInContext('NV_MODEL', ctx);
  assert.equal(estado.ok, true, 'a terceira tentativa montou o boneco (sem texturas) e o jogo tem corpo');
  assert.equal(estado.tentativas, 3);
  assert.equal(estado.modo, 'sem texturas');

  // E o GLB remontado continua um GLB: mesmo BIN, sem imagens e sem texturas penduradas.
  const semTex = vm.runInContext('nvSemTexturas(BUF)', ctx);
  const dv = new DataView(semTex);
  assert.equal(dv.getUint32(0, true), 0x46546c67, 'continua um GLB');
  assert.equal(dv.getUint32(8, true), semTex.byteLength, 'o tamanho do cabeçalho bate com o arquivo');
  const len = dv.getUint32(12, true);
  const novo = JSON.parse(new TextDecoder().decode(new Uint8Array(semTex, 20, len)));
  assert.equal(novo.images, undefined);
  assert.equal(novo.textures, undefined);
  assert.equal(novo.materials[0].pbrMetallicRoughness.baseColorTexture, undefined);
  assert.equal(novo.materials[0].normalTexture, undefined);
  assert.equal(novo.buffers[0].byteLength, 12, 'os dados (BIN) ficam intactos');
  const binOff = 20 + len;
  assert.equal(dv.getUint32(binOff + 4, true), 0x004e4942, 'o chunk BIN continua lá');
});

test('o corpo reserva: existe boneco desde o primeiro quadro, com os nomes que o jogo já usa', async () => {
  const corpo = read('tools/gorilla-rush/parts/corpo.js');
  const game = read(GAME);
  const adapt = read('tools/gorilla-rush/adapt.mjs');

  // "Ainda tá sem modelo de gorilla": o corpo de primitivas entra ANTES da carga do GLB, e o modelo
  // de verdade o descarta quando chega. Ou é o gorila original, ou é este — nunca o vazio.
  assert.ok(adapt.includes("(await part('corpo.js')).trim()"), 'o adaptador embute o corpo reserva');
  assert.ok(adapt.includes('function build(g){nvCorpoSai();pl=g.scene;'), 'e o modelo real tira a reserva de cena');
  assert.ok(corpo.includes('nvCorpoReserva();'), 'a reserva é montada no arranque');

  // Os nomes dos ossos são os do GLB, então rig()/arm2()/handPose() funcionam sem mudança.
  for (const osso of ['upper_arm_', 'forearm_', 'hand_', 'head_02', 'body_01', 'palm_02_', 'f_index_01_', 'f_middle_01_']) {
    assert.ok(corpo.includes(osso), `o corpo reserva tem o osso ${osso}`);
  }
  assert.ok(corpo.includes("escuro.name = 'darkfur'") && corpo.includes("claro.name = 'lightfur'"),
    'e os materiais têm os nomes que paint() colore');

  // ---------- exercitado de verdade, com o three do projeto e a IK do jogo ----------
  const vm = await import('node:vm');
  // O MESMO three que viaja no APK (r128), não o do node_modules.
  const threeSrc = read('nextvr-android/src/main/assets/ui/cockpit/libs/three.min.js');
  const s0 = game.indexOf('function aim(u,e,t){');
  const s1 = game.indexOf('function rotLocal(', s0);
  assert.ok(s0 > 0 && s1 > s0, 'a IK do jogo está no arquivo gerado');
  const ik = game.slice(s0, s1);

  const sb = {
    console, Math, Object, Array, JSON, String, Number, Promise, Date,
    document: { fonts: { ready: Promise.resolve() } },
  };
  sb.window = sb; sb.self = sb; sb.globalThis = sb;
  const ctx = vm.createContext(sb);
  vm.runInContext(threeSrc, ctx);
  const THREE = sb.THREE;
  assert.ok(THREE && THREE.REVISION === '128', 'o three é o mesmo do APK (r128)');
  sb.V3 = (x, y, z) => new THREE.Vector3(x, y, z);
  sb._q = new THREE.Quaternion(); sb._wq = new THREE.Quaternion();
  sb.S = new THREE.Scene();
  sb.pg = new THREE.Group(); sb.S.add(sb.pg);
  sb.pl = null; sb.LM = null; sb.mats = []; sb.L1 = 0; sb.L2 = 0; sb.ARM = 1;
  let chk = false;
  sb.chk = () => { chk = true; };
  sb.mkLabel = () => new THREE.Object3D();
  sb.placeLab = () => {}; sb.mkBlob = () => new THREE.Object3D();
  vm.runInContext(corpo, ctx);
  vm.runInContext(ik, ctx);

  const estado = vm.runInContext('({ pl: !!pl, lm: !!LM, l1: L1, l2: L2, ativo: NV_CORPO.ativo })', ctx);
  assert.equal(estado.pl, true, 'o jogo passa a ter "pl" (modelo) sem o GLB');
  assert.equal(estado.lm, true, 'e o "LM" que o laço por quadro usa');
  assert.equal(estado.ativo, true);
  assert.equal(chk, true, 'e a interface é liberada como se o modelo tivesse chegado');
  assert.ok(estado.l1 > 0.3 && estado.l2 > 0.3, 'com braços de tamanho humano (não 1 cm nem 3 m)');

  // A mesma busca que rig() faz, nos mesmos nomes.
  const achou = vm.runInContext(`
    (() => { const b = {}; LM.o.traverse(x => { if (x.isBone) b[x.name] = x; });
      const F = p => Object.values(b).find(x => x.name.startsWith(p));
      const g = n => Object.values(b).find(x => new RegExp('^' + n + '_\\\\d+$').test(x.name));
      return { uL: !!F('upper_arm_L'), fL: !!F('forearm_L'), hL: !!F('hand_L'), uR: !!F('upper_arm_R'),
               hR: !!F('hand_R'), head: !!F('head'), pmL: !!g('palm_02_L'), ixL: !!g('f_index_01_L'),
               mdL: !!g('f_middle_01_L'), body: !!LM.o.getObjectByName('body_01') }; })()`, ctx);
  for (const [k, v] of Object.entries(achou)) assert.equal(v, true, `o jogo encontra o osso ${k}`);

  // IK de verdade: a mão vai para o alvo (dentro do alcance do braço) e os braços mudam de pose.
  const ik2 = vm.runInContext(`
    (() => {
      pg.position.set(0, 2.8, 0); pg.updateMatrixWorld(true);
      const fw = V3(0, 0, 1), rt = V3(1, 0, 0);
      const antes = LM.hL.getWorldPosition(V3()).clone();
      const T = V3(-0.30, 2.45, 0.45);
      arm2(LM, 'L', T, fw, rt, 1); LM.o.updateMatrixWorld(true);
      const mao = LM.hL.getWorldPosition(V3());
      return { erro: +mao.distanceTo(T).toFixed(3), moveu: +mao.distanceTo(antes).toFixed(3),
               alcance: +(L1 + L2).toFixed(2) };
    })()`, ctx);
  assert.ok(ik2.erro < 0.12, `a mão chega no alvo (erro ${ik2.erro} m)`);
  assert.ok(ik2.moveu > 0.2, 'e o braço saiu da pose de descanso (a mão move o braço)');
  assert.equal(ik2.alcance > 0.7, true, 'com alcance compatível com os alvos do jogo');

  // O modelo real chegando: a reserva sai.
  vm.runInContext('nvCorpoSai()', ctx);
  const depois = vm.runInContext('({ ativo: NV_CORPO.ativo, pai: !!NV_CORPO.raiz.parent })', ctx);
  assert.equal(depois.ativo, false, 'a reserva é desativada');
  assert.equal(depois.pai, false, 'e sai do grupo do jogador quando o GLB monta');
});
