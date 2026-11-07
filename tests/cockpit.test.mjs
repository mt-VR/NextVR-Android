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
  assert.match(menu, /lq: true, as: true/, 'os gráficos leves vêm ligados por padrão');
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
  const open = activity.slice(activity.indexOf('private void openCockpitGame(String query)'));
  assert.ok(open.indexOf('camera.enableHands(false);') < open.indexOf('main.postDelayed(() -> showCockpitGame(query)')
    || open.indexOf('camera.enableHands(false);') < open.indexOf('main.postDelayed(()->showCockpitGame(query)'),
    'o rastreio de mão do NextVR sai antes da tela do jogo');
  assert.match(open, /camera\.stop\(\);/, 'e o Camera2 é fechado: a câmera do aparelho é uma só');
  assert.match(open, /main\.postDelayed\(\(\)->showCockpitGame\(query\),900\)/,
    'a página espera o aparelho devolver a câmera (senão o getUserMedia dela falha)');
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
  assert.match(activity, /if\("flight"\.equals\(cockpitStage\)\) return;/);
  assert.match(activity, /cockpitState\("falhou",why\);\s*report\("Cockpit VR: "\+why\);\s*\/\/[^\n]*\n\s*\/\/[^\n]*\n\s*closeCockpitGame\(\);/);
});

test('a rodada tem entrada no menu de Atualizações', async () => {
  const updates = await read(FILES.updates);
  assert.match(updates, /id: 'cockpit-vr-planevr'/,
    'o Cockpit VR entra no feed de atualizações, como todas as rodadas');
  assert.match(updates, /Cockpit VR/, 'e diz o que mudou, em português');
});
