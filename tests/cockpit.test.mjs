// Cockpit VR (planeVR): o jogo HTML que o usuário entregou.
//
// Duas metades, e as duas são testadas aqui pelo que ELAS precisam garantir:
//   * o MENU é da shell e é operado pelo rastreio de mão do NextVR;
//   * o VOO é a página do jogo, em tela cheia, com o rastreio de mão DELA — e, enquanto ele roda, o
//     rastreio do NextVR e a câmera dele estão parados.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';

const FILES = {
  cockpit: 'web/src/cockpit.js',
  apps: 'web/src/apps.js',
  webSurface: 'nextvr-android/src/main/java/com/nextvr/app/WebSurface.java',
  activity: 'nextvr-android/src/main/java/com/nextvr/app/NextVrActivity.java',
  game: 'nextvr-android/src/main/assets/ui/cockpit/game.html',
  logo: 'web/assets/cockpit-vr-logo.svg',
  build: 'web/build.mjs',
  updates: 'web/src/entry-data.js',
};
const read = path => readFile(path, 'utf8');

test('o menu do Cockpit VR é da shell: aviões e início, com a ponte nativa', async () => {
  const menu = await read(FILES.cockpit);
  // Os cinco aviões que a biblioteca do jogo tinha, com os ids que a página entende.
  for (const air of ['cessna', 'tucano', 'f22', 'f117', 'f35']) {
    assert.ok(menu.includes(`id: '${air}'`), `o menu oferece o avião ${air}`);
  }
  // Dois modos de verdade: VR Cardboard (estéreo do jogo) e tela única — e os botões que ENTREGAM a
  // tela ficam no alto (antes ficavam abaixo de cinco aviões e seis ajustes: ninguém achava o
  // começo, e "o jogo não abre" era isso).
  assert.match(menu, /const goVr = button\('▶  VOAR · VR CARDBOARD'/);
  assert.match(menu, /const goMono = button\('TELA ÚNICA'/);
  assert.match(menu, /prefs\.mode = 'vr'; launch\(\);/);
  assert.match(menu, /prefs\.mode = 'mono'; launch\(\);/);
  assert.match(menu, /const ok = startCockpitGame\(prefs\);/);
  assert.match(menu, /position:sticky;top:0/, 'os botões de voar ficam presos no alto, sempre à vista');
  // "deixa com maior qualidade": o cenário completo é o padrão agora; a fluidez vem da resolução
  // adaptativa do jogo, não do modo leve.
  assert.match(menu, /lq: false, as: true/, 'os gráficos leves vêm desligados (qualidade) e o assistente ligado');
  // A entrega da tela ao jogo vai pela ponte nativa, e falha ALTO quando ela não existe.
  assert.match(menu, /window\.NativeXR\.cockpitGame\(JSON\.stringify\(\{/,
    'o botão de iniciar entrega os ajustes ao lado nativo');
  assert.match(menu, /if \(!native \|\| !window\.NativeXR\?\.cockpitGame\)[\s\S]*?toast\(/,
    'sem a ponte o usuário é avisado, em vez de o toque não fazer nada');
  // Ajustes que eram da tela do jogo (6DoF falso, som, gráficos leves, assistente, motor ligado).
  for (const key of ['dof', 'd6s', 'snd', 'lq', 'as', 'ck']) {
    assert.ok(menu.includes(key), `o menu guarda o ajuste ${key}`);
  }
});

test('Loja e biblioteca ENTRAM NO VOO (avião sorteado), e o logo viaja no pacote', async () => {
  const apps = await read(FILES.apps);
  const cockpit = await read(FILES.cockpit);
  assert.match(apps, /import \{ launchCockpitGame, COCKPIT_LABEL, COCKPIT_LOGO \} from '\.\/cockpit\.js';/);
  // Um toque = dentro do avião. O menu deixou de ser o caminho para voar: era mais uma tela que podia
  // não aparecer, e foi exatamente o que travava tudo ("não inicia e nem o menu aparece").
  assert.match(apps, /'cockpit-vr': \(\) => launchCockpitGame\(\),/,
    'a ação da Loja e da tile da biblioteca entra no voo direto');
  assert.match(cockpit, /export function launchCockpitGame\(\) \{/);
  assert.match(cockpit, /const pick = pool\[Math\.floor\(Math\.random\(\) \* pool\.length\)\] \|\| COCKPIT_PLANES\[0\];/,
    'o avião é sorteado');
  assert.match(cockpit, /prefs\.air = pick\.id;/);
  // O menu continua alcançável para ajustes, sem ser obrigatório.
  assert.match(cockpit, /window\.nextvrCockpitMenu = openCockpitMenu;/);
  assert.match(apps, /\{ id: 'cockpit-vr', name: COCKPIT_LABEL, cat: 'games',/,
    'o Cockpit VR é um jogo na Loja');
  assert.match(apps, /const COCKPIT_VR_ITEM = \{[\s\S]*?id: 'cockpit-vr',/,
    'e uma tile da biblioteca — existe sempre, porque a página viaja no APK');
  assert.match(apps, /\.\.\.LIB_APPS\.map\(a => \(\{ \.\.\.a, kind: 'app' \}\)\), COCKPIT_VR_ITEM,/);
  // A lista do anel (menu principal) sai de LIB_APPS: o jogo NÃO entra no menu principal.
  assert.ok(!/LIB_APPS\s*=\s*\[[^\]]*cockpit-vr/.test(apps),
    'o Cockpit VR não pode aparecer no anel de apps do menu principal');
  assert.match(await read(FILES.build), /'cockpit-vr-logo\.svg'/);
  await stat(FILES.logo);
});

test('a página do jogo é a do usuário, com as duas emendas do NextVR', async () => {
  const game = await read(FILES.game);
  // O jogo em si continua lá: three, MediaPipe e os modelos embutidos.
  assert.ok(game.includes('@mediapipe/hands@0.4.1675469240/hands.js'), 'o MediaPipe do próprio jogo');
  assert.ok(game.includes('three@0.128.0/build/three.min.js'), 'o three do próprio jogo');
  assert.ok(game.includes('const GLBS={'), 'os aviões embutidos');
  assert.ok((await stat(FILES.game)).size > 3_000_000, 'a página viaja inteira no APK');
  // Emenda 1: o estado das mãos do MediaPipe sai para o gesto de sair.
  assert.match(game, /try\{if\(window\.__nvFrame\)window\.__nvFrame\(hs\)\}catch\(e0\)\{\}/,
    'o retorno do MediaPipe entrega as mãos para o NextVR (sem mudar nada do rastreio)');
  // Emenda 2: ajustes do menu, entrada direta no voo e saída.
  assert.match(game, /var q=new URLSearchParams\(location\.search\|\|''\);/);
  assert.match(game, /document\.getElementById\('lib'\)\.style\.display='none';/,
    'a biblioteca do jogo não aparece: quem escolhe o avião é o menu do NextVR');
  assert.match(game, /try\{ window\.pickAir\(air\) \}/, 'o avião escolhido no menu é o que entra no voo');
  assert.match(game, /try\{ window\.go\(mode!=='mono'\) \}/, 'o modo escolhido (Cardboard ou tela única)');
  assert.match(game, /window\.NextVRGame\.exit/, 'o ✕ da tela do jogo sai para o NextVR');
  assert.match(game, /var live=function\(h\)\{ return h&&h\.fresh&&h\.pinch&&\(now-h\.t\)<800 \};/,
    'o gesto de sair usa as mãos DO JOGO (pinça nas duas mãos)');
  // Sem parâmetros (teste no navegador) o jogo abre como sempre foi, com o menu dele.
  assert.match(game, /if\(!hasSetup\) return;/, 'sem ajustes da URL o jogo não muda de comportamento');
});

test('no lado nativo: câmera e mãos do NextVR param enquanto o jogo roda', async () => {
  const surface = await read(FILES.webSurface);
  // A página do jogo é a única que pode compilar WASM (MediaPipe) — o resto da UI não.
  assert.match(surface, /path\.startsWith\("\/ui\/cockpit\/"\)/);
  assert.match(surface, /'wasm-unsafe-eval'/);
  assert.match(surface, /script-src 'self' 'unsafe-inline' https:\/\/cdn\.jsdelivr\.net; style-src/,
    'a CSP antiga continua valendo para todo o resto da UI');
  assert.match(surface, /static WebView createFullscreenGameView\(NextVrActivity owner, String url, String tag\)/);
  assert.match(surface, /@Override public void onPermissionRequest\(PermissionRequest request\) \{\n                try \{ request\.grant\(request\.getResources\(\)\); \}/,
    'a câmera que o jogo pede é concedida na janela do jogo');
  assert.match(surface, /game\.addJavascriptInterface\(new GameBridge\(owner\),"NextVRGame"\);/);

  const activity = await read(FILES.activity);
  // Pedido da shell → o jogo, e só com ajustes em lista branca.
  assert.match(activity, /@JavascriptInterface public void cockpitGame\(String json\) \{/);
  // A permissão de câmera é pedida SEM travar a abertura: esperar a resposta antes de abrir a página
  // prendia o voo no menu do NextVR ("escolho o avião e não acontece nada").
  assert.match(activity, /REQUEST_GAME_CAMERA=12/);
  const openGame = activity.slice(activity.indexOf('private void openCockpitGame(String query)'),
    activity.indexOf('private void showCockpitGame(String query)'));
  assert.match(openGame, /requestPermissions\(new String\[\]\{Manifest\.permission\.CAMERA\},REQUEST_GAME_CAMERA\)/,
    'a permissão é pedida');
  assert.ok(!/requestPermissions[^;]*;\s*return;/.test(openGame),
    'pedir a permissão NÃO pode devolver antes de abrir o voo');
  assert.match(openGame, /main\.postDelayed\(\(\)->showCockpitGame\(query\),900\)/,
    'o voo abre logo depois de a câmera ser solta, sem esperar diálogo nenhum');
  // Quando o Android responde, a página que já está na tela levanta as mãos dela.
  assert.match(activity, /if\(code==REQUEST_GAME_CAMERA\)[\s\S]{0,500}?__nvRetryHands/,
    'a resposta da permissão avisa o jogo que já está aberto');
  const game = await read(FILES.game);
  assert.match(game, /window\.__nvRetryHands=function\(\)\{/,
    'e o jogo sabe levantar as mãos de novo sem reabrir o voo');
  // Sem reabrir o voo, o jogo tenta a câmera de novo sozinho: o próximo quadro do aparelho pode
  // ainda estar com a nossa Camera2.
  assert.match(game, /try\{ if\(hp\) return; \}/, 'não abre uma segunda câmera por cima de uma tentativa em curso');
  assert.match(game, /setTimeout\(function\(\)\{ window\.__nvRetryHands\(\); \},3000\);\n\s+setTimeout\(function\(\)\{ window\.__nvRetryHands\(\); \},7000\);/,
    'o voo reabre as mãos dele em 3 s e em 7 s se a câmera estava ocupada');
  // Com o voo aberto, quem é dona da câmera é a página do jogo.
  // A câmera é do jogo também enquanto a tela dele está A CAMINHO: o diálogo de permissão pausa a
  // activity, o onResume reabria a nossa Camera2 e a página do jogo chegava depois sem câmera.
  assert.match(activity, /if\(cockpitView==null && !cockpitPending\) startCamera\(\);/,
    'o NextVR não toma a câmera do jogo (nem enquanto a tela dele está a caminho)');
  assert.match(activity, /if\(cockpitView==null && !cockpitPending\) camera\.enableHands\(true\);/);
  assert.match(activity, /main\.postDelayed\(\(\)->\{ if\(cockpitView==null\) cockpitPending=false; \},15000\);/,
    'e o "a caminho" não fica ligado para sempre segurando a câmera');
  assert.match(activity, /if\(entryView!=null && entryVisible\) entryView\.setVisibility\(View\.GONE\);/,
    'o menu de entrada sai da frente do voo');
  assert.match(activity, /if\(air\.isEmpty\(\) \|\| "random"\.equals\(air\) \|\| !air\.matches\("\[a-z0-9\]\{1,12\}"\)\)/, 
    'a query string é montada por lista branca, não colada da shell');
  // Sem avião escolhido (o caminho normal) o nativo também sorteia, entre os cinco da página.
  assert.match(activity, /private static final String\[\] COCKPIT_PLANES=\{"cessna","tucano","f22","f117","f35"\};/);
  assert.match(activity, /air=COCKPIT_PLANES\[rnd\.nextInt\(COCKPIT_PLANES\.length\)\];/,
    'o avião é sorteado quando a shell não escolhe um');
  // A ordem que importa: mãos fora, câmera fechada, e só então a página (que já vai pedir a câmera).
  // O GORILLA RUSH é a exceção e ela está explícita no mesmo lugar: ele NÃO tem rastreio próprio,
  // então a câmera e as mãos continuam com o NextVR e os quadros vão para a página.
  const open = activity.slice(activity.indexOf('private void openCockpitGame(String query)'));
  assert.match(open, /final boolean gorilla="gorilla"\.equals\(kind\);/,
    'o mesmo lugar decide a câmera de cada jogo');
  const cockpitBranch = open.slice(open.indexOf('} else {'), open.indexOf('main.postDelayed(()->showCockpitGame(query),900);'));
  assert.match(cockpitBranch, /camera\.enableHands\(false\);/, 'o rastreio de mão do NextVR sai antes da tela do Cockpit');
  assert.match(cockpitBranch, /camera\.stop\(\);/, 'e o Camera2 é fechado: a câmera do aparelho é uma só');
  assert.match(open, /main\.postDelayed\(\(\)->showCockpitGame\(query\),900\)/,
    'a página do Cockpit espera o aparelho devolver a câmera (senão o getUserMedia dela falha)');
  // Gorilla Rush: câmera do app fica, e o quadro de mãos é empurrado para a página.
  const gorillaBranch = open.slice(open.indexOf('if(gorilla) {'), open.indexOf('} else {'));
  assert.match(gorillaBranch, /camera\.enableHands\(true\);/, 'o Gorilla Rush usa o rastreio de mão do NextVR');
  assert.match(gorillaBranch, /startCamera\(\);/, 'e a câmera continua com o app');
  assert.match(gorillaBranch, /main\.postDelayed\(\(\)->showCockpitGame\(query\),300\);/, 'a página abre já com a câmera pronta');
  assert.match(activity, /private void offerGorillaHands\(String json\)/);
  assert.match(activity, /window\.__nvHands&&window\.__nvHands\(/, 'os 21 landmarks vão para o jogo a cada quadro');
  assert.match(activity, /if\(gorillaGame\) \{[\s\S]{0,200}?offerGorillaHands\(frame\.gameJson\(\)\);/,
    'o quadro do rastreio é o do jogo (gameJson: points/palm/pinching)');
  // Voltar/✕/pausa fecham o jogo e devolvem a câmera e as mãos.
  const close = activity.slice(activity.indexOf('void closeCockpitGame()'));
  assert.match(close, /restartTracking\(\);/, 'sair do jogo devolve a câmera e o rastreio de mão do NextVR');
  assert.match(activity, /private void restartTracking\(\) \{[\s\S]{0,900}?camera\.enableHands\(true\);/,
    'restartTracking is the one place that hands the camera and the hand feed back to NextVR');
  assert.match(activity, /if\(cockpitView!=null\) \{ closeCockpitGame\(\); return; \}/,
    'o Voltar do Android sai do jogo antes de qualquer outra regra');
  assert.match(activity, /if\(cockpitView!=null\) closeCockpitGame\(\);/, 'sair do app também fecha o jogo');
});

test('nada de tela preta muda: o app sabe que o jogo abriu, e a página conta até onde chegou', async () => {
  const activity = await read(FILES.activity);
  const surface = await read(FILES.webSurface);
  const game = await read(FILES.game);
  const cockpit = await read(FILES.cockpit);
  // A página diz ao app que existe e que está voando; sem esse recado o app sabe que algo falhou.
  assert.match(surface, /public void stage\(String stage\) \{ if\(owner!=null\) owner\.cockpitStage\(stage\); \}/);
  assert.match(game, /function stage\(s\)\{try\{if\(window\.NextVRGame&&window\.NextVRGame\.stage\)window\.NextVRGame\.stage\(s\)\}catch\(e\)\{\}\}/);
  assert.match(game, /stage\('boot'\);/);
  assert.match(game, /stage\('flight'\);/);
  // E o primeiro pixel da janela é o aviso de abertura: se ele não aparecer, a janela não carregou.
  assert.match(game, /id="nvb"[\s\S]{0,200}Cockpit VR · abrindo o voo…/);
  assert.match(game, /var bv=document\.getElementById\('nvb'\); if\(bv\) bv\.style\.display='none';/);
  // O app conta o estado para a shell (que mostra uma janela se não receber "aberto" em 6 s).
  assert.match(activity, /private void cockpitState\(String what,String detail\)/);
  assert.match(activity, /cockpitState\("aberto",""\);/);
  assert.match(activity, /cockpitState\("falhou",why\);/);
  assert.match(activity, /cockpitState\("saiu",""\);/);
  assert.match(cockpit, /window\.nextvrCockpitState = \(what, detail\) => \{/);
  assert.match(cockpit, /cockpitProblem\('O jogo não abriu\. Etapa: ' \+ state\.what/);
  // Se o voo não montar em 12 s, o app TIRA o usuário da tela preta (e já disse o motivo).
  // A janela é a mesma para o Cockpit VR e para o Gorilla Rush: a etapa que diz "já está rodando"
  // muda por página ("flight" no voo, "play" na partida).
  assert.match(activity, /String ready="gorilla"\.equals\(gameKind\)\?"play":"flight";/);
  assert.match(activity, /if\(ready\.equals\(cockpitStage\)\) return;/);
  assert.match(activity, /String label="gorilla"\.equals\(gameKind\)\?"Gorilla Rush":"Cockpit VR";/);
  assert.match(activity, /cockpitState\("falhou",why\);\s*report\(label\+": "\+why\);\s*\/\/[^\n]*\n\s*\/\/[^\n]*\n\s*closeCockpitGame\(\);/);
});

test('o voo tem MAIS qualidade: 900 px por olho e a proporção exata da meia-tela', async () => {
  const game = await read(FILES.game);
  // "ajeita a qualidade do jogo de avião, deixa com maior qualidade": a textura de cada olho subiu de
  // 560 px para 900 px de altura, e o céu/nuvens/cenário voltam a ser os completos por padrão.
  assert.match(game, /RT_H=900/, 'a resolução base do olho é 900 px (era 560)');
  assert.match(game, /makeRTs\(RT_H,2,RT_STEPS\[rtStep\]\)/, 'nasce já no degrau do aparelho, com MSAA 2');
  // O olho é esticado para a METADE da tela no draw(); com proporção fixa (1.26) contra ~1.07 da tela
  // a imagem saía alargada na horizontal — e gastava ~15 % de pixels à toa.
  assert.match(game, /function rtW\(hh\)\{return Math\.max\(2,Math\.round\(hh\*\(Math\.max\(2,innerWidth\)\/2\)\/Math\.max\(2,innerHeight\)\)\)\}/,
    'a textura do olho tem a proporção da meia-tela');
  assert.match(game, /const hw=w\/2,aspE=hw\/Math\.max\(1,h\);/, 'e a câmera de cada olho usa essa mesma proporção');
  assert.match(game, /eyeL\.aspect=eyeR\.aspect=aspE;eyeL\.fov=eyeR\.fov=eyeFov\(aspE\);/,
    'com a projeção refeita (rotação troca a proporção E o campo vertical)');
  assert.match(game, /eyeL\.updateProjectionMatrix\(\);eyeR\.updateProjectionMatrix\(\)/, 'e a matriz refeita');
});

test('e MENOS travamento: degraus com histerese, mão a 20 Hz em voo e nenhuma realocação à toa', async () => {
  const game = await read(FILES.game);
  // O engasgo periódico era a resolução mudando a cada 1,2 s em passos de 6 %, e cada mudança
  // realoca duas texturas. Agora são degraus, histerese larga e 4 s entre decisões.
  assert.match(game, /const RT_STEPS=\[1,\.9,\.8,\.72,\.64,\.56,\.5,\.45\];/, 'a resolução anda em degraus fixos');
  assert.match(game, /t-lastRs>\(adj<3\?1200:4000\)/, 'decisão a cada 4 s (1,2 s só na calibragem inicial)');
  assert.match(game, /else if\(fAvg>26\)setStep\(rtStep\+1\)/, 'cai de degrau acima de 26 ms');
  assert.match(game, /else if\(fAvg<17\)setStep\(rtStep-1\)/, 'e sobe abaixo de 17 ms (histerese larga)');
  assert.match(game, /function applyRt\(\)\{if\(!rtL\)return;const sc=RT_STEPS\[rtStep\];const nh=Math\.round\(baseH\*sc\),nw=rtW\(nh\);/,
    'sem mexer em nada quando o tamanho não muda (e sem render target não há o que mexer)');
  assert.match(game, /if\(baseH!==448\)makeRTs\(448,0\);/, 'entrar no voo de novo não refaz as texturas');
  // O rastreio da mão da página é MediaPipe no thread principal: em voo, 20 Hz bastam (manche e piscar).
  assert.match(game, /handInt=fAvg>26\?80:\(run\?45:33\);/, 'inferência a ~20 Hz durante o voo, ~12 Hz no menu');
  assert.match(game, /if\(t-lastHandSeen>3000\)handInt=Math\.max\(handInt,120\)/, 'sem mão na tela, quase para');
  // A sonda diz o que o aparelho escolheu, sem escrever nada na tela ("é só o jogo").
  assert.match(game, /window\.__nvPerf=\(\)=>\(\{olho:lastRtH/, 'há uma sonda de desempenho para conferir no aparelho');
  assert.equal(/<div id=\"nvperf\"/.test(game), false, 'e nada disso aparece na tela');
  // 6DoF intacto: mexer na resolução não pode mexer no piso de emissão do rastreio.
  const sixdof = await read('web/src/sixdof.js');
  assert.ok(sixdof.includes('const PLAUSIBLE_MIN = 0.0012, EMIT_MIN = 0.0028, FLOW_MAX = 0.14;'),
    'o piso de emissão do 6DoF continua 0.0028 (não desce com esta rodada)');
});

test('lentes: 67 mm, a conta do SDK do Cardboard e o retângulo de cantos redondos (como o app)', async () => {
  const game = await read(FILES.game);
  // "as lentes do Google cardboard e 67mm": o IPD do app e o do voo passam de 64 para 67 mm.
  assert.match(game, /const IPD=\.067, SCR_W=\.145/, 'o voo usa 67 mm entre os olhos (era 64)');
  const tag = await read('web/src/gorilla-tag.js');
  assert.match(tag, /ipd: 0\.067,/, 'e o CARDBOARD_2015_LENS do NextVR também');
  // "as lentes não são assim, são igual a do webXr": no WebXR a página não desenha lente nenhuma.
  // O passe de distorção com recorte saiu; ficou o PRESET da Cardboard 2015 (80° por olho, 67 mm) e
  // um desenho por olho, de tela cheia.
  assert.equal(game.includes('ShaderMaterial({uniforms:{t:'), false, 'não existe mais passe de lente');
  assert.match(game, /const LN_FOV=80, LN_TH=Math\.tan\(\(LN_FOV\/2\)\*Math\.PI\/180\);/,
    'o campo entregue é o da Cardboard 2015 (80°)');
  assert.ok(game.includes('renderer.render(scene,eyeL);') && game.includes('renderer.render(scene,eyeR);'),
    'cada olho é desenhado direto na tela');
  assert.ok(game.includes('const eyeFov=(asp)=>2*Math.atan(LN_TH/Math.max(.05,asp))*180/Math.PI,'),
    'o campo vertical do olho deriva do horizontal da lente');
  assert.ok(game.includes('renderer.setScissor(0,0,hw,h);renderer.render(scene,eyeL);'),
    'meia tela por olho, sem recorte no meio');
  // O `fov` do three é vertical: sai do horizontal (80°) dividido pela proporção do olho.
  assert.equal(game.includes('LN_TT'), false, 'não existe mais campo de textura (nem correção)');
});

test('a rodada tem entrada no menu de Atualizações', async () => {
  const updates = await read(FILES.updates);
  assert.match(updates, /id: 'cockpit-vr-planevr'/,
    'o Cockpit VR entra no feed de atualizações, como todas as rodadas');
  assert.match(updates, /Cockpit VR/, 'e diz o que mudou, em português');
  // A rodada 2.6.2 tem ficha própria, no topo, e o selo do menu acompanha a versão do APK.
  assert.match(updates, /id: 'gorilla-lentes-webxr-menu-do-jogo-gorila-visivel'/,
    'a rodada 2.6.6 tem ficha própria, no topo (lentes do WebXR, gorila visível, menu do jogo)');
  assert.match(updates, /id: 'gorilla-modelo-antigo-lentes-retangulo-chao'/,
    'e a do gorila do HTML antigo continua logo abaixo');
  assert.match(updates, /id: 'gorilla-corpo-reserva-lentes-menores'/,
    'e a do corpo reserva continua lá, logo abaixo');
  assert.match(updates, /id: 'gorilla-boneco-lentes-67-bordas'/,
    'o boneco, as lentes de 67 mm e as bordas têm ficha própria, no topo');
  assert.match(updates, /id: 'cockpit-qualidade-e-sem-travamento'/,
    'a qualidade e a fluidez do voo têm ficha no menu');
  assert.match(updates, /900 px de altura \(era 560 px\)/, 'e a ficha diz o que mudou de verdade');
  assert.match(updates, /id: 'gorilla-rush-cardboard-maos-grudadas-seta-ryuzaki'/,
    'lentes, mãos grudadas, seta e Ryuzaki também');
  const build = await read('nextvr-android/build.gradle');
  assert.match(build, /versionCode 122/, 'o APK desta rodada é o 122');
  assert.match(build, /versionName "2\.6\.6"/, 'e se chama 2.6.6');
  const badge = await read('web/src/entry-menu.js');
  assert.match(badge, /v2\.6\.6/, 'o selo da tela de entrada acompanha');
});
