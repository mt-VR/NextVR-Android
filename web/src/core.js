// NextVR — núcleo: estado, idiomas, cena, giroscópio e centralização.
import * as THREE from 'three';
import { migrateComfort } from './comfort.js';
import { AtlasRenderer, VIEW } from './atlas.js';
import { SixDof, Walk, handBoxes, bindSixDofContext } from './sixdof.js';
export { SixDof, Walk, handBoxes };
export const native = !!window.NativeXR;
export const viewport = native ? VIEW : { width: innerWidth, height: innerHeight };
import { CSS3DRenderer } from 'three/addons/renderers/CSS3DRenderer.js';

/* ============================ estado ============================ */
const DEF = {
  lang: null,
  // O contorno da mao e ligado por padrao: e o que mostra ONDE a mao esta apontando. O feixe e o
  // cursor continuam desenhando de qualquer forma (showSilhouette so cobre o contorno).
  handsOn: true, handDraw: 1,
  winCurve: 1, winScale: .75, winDist: 2.2, winTilt: 1,
  // Curvatura "360" das janelas: ligada por padrão? (0/1) e a meia-abertura do arco em radianos.
  win360: 0, win360K: 1.15,
  dockSize: 1, dockDist: 1, dockColor: 'default', dockApps: 'browser,youtube,gallery,env,settings,menu',
  // O pôr do sol com palmeiras é o fundo inicial; passthrough continua a um toque de distância.
  env: 'sunset', panorama: 'sunset', quality: 'auto', showFps: 0,
  wideCamera: 0, spatialLauncher: 0, dockSnapSlot: 1, depthLayerOrder: 1, fingerTouch: 1, pinchOnApp: 1, gunGesture: 1,
  mrDim: 0,
  sixdof: 1, lateLatch: 0,
  gorillaInstalled: 0,
  profileName: '', profileAvatar: '',
};
let saved = {};
try { saved = JSON.parse(localStorage.getItem('nextvr.v1') || '{}') || {}; } catch {}
let S = { ...DEF, ...saved };
// O formato antigo não guardava o último panorama. Preserve escolhas explícitas, mas migre o
// passthrough herdado como padrão e faça o atalho voltar ao mesmo fundo que estava selecionado.
if (!S.sunsetDefaultVersion) {
  if (!S.envChosen && S.env === 'passthrough' && (!saved.panorama || saved.panorama === 'lagoon'))
    S.env = 'sunset';
  if (!saved.panorama || (S.env === 'sunset' && !S.envChosen))
    S.panorama = S.env === 'passthrough' ? 'sunset' : S.env;
  S.sunsetDefaultVersion = 1;
}
if(native){S=migrateComfort(S);S.handsOn=true;
  // O contorno da mao ja foi padrao de verdade no passado, e o 0 antigo era gravado no storage
  // no primeiro launch nativo — entao um 0 guardado quase sempre e o padrao velho herdado, e nao
  // uma escolha do usuario. Sobe uma vez so; depois disso o interruptor da settings funciona.
  // (A linha acima fica intacta de proposito: o guard de input-isolation ancora nela.)
  if(!S.handDrawSeen){S.handDraw=DEF.handDraw;S.handDrawSeen=1;}
  try{localStorage.setItem('nextvr.v1',JSON.stringify(S));}catch{}
}
export const settings = S;
export const save = () => { try { localStorage.setItem('nextvr.v1', JSON.stringify(S)); } catch {} };

/* ============================ idiomas ============================ */
const STR = {
  pt: {
    desktop:'Área de trabalho', browser:'Navegador', youtube:'YouTube', gallery:'Galeria',
    settings:'Configurações', menu:'Menu', store:'Loja', env:'Ambientes', keyboard:'Teclado', center:'Centralizar',
    search:'Pesquisar na web', searchYt:'Pesquisar vídeos', open:'Abrir', close:'Fechar',
    general:'Geral', hands:'Hand tracking', windows:'Janelas', dock:'Dock', perf:'Desempenho',
    language:'Idioma', on:'Ativado', off:'Desativado', sens:'Sensibilidade', scale:'Escala',
    dist:'Distância', curve:'Curvatura', size:'Tamanho', quality:'Qualidade', apps:'Aplicativos',
    recents:'Recentes', battery:'Bateria', net:'Conexão', time:'Hora',
    libAll:'Todos', libFilter:'Filtro', libGames:'Jogos',
    libGamesEmpty:'Os jogos de headset aparecem aqui quando o PhoneXR os encontra.',
    libRecentEmpty:'Os apps abertos recentemente aparecem aqui.',
    pickPhotos:'Escolher fotos', noPhotos:'Nenhuma foto escolhida ainda.',
    photosHelp:'As fotos ficam só no aparelho e não saem do Next VR.',
    centered:'Ambiente centralizado', langChanged:'Idioma alterado',
    arcFull:'Arco cheio (máx. 5 apps) — fechando',
    envPass:'Camera passthrough', envLagoon:'Panorama 360° · lagoa ao pôr do sol', envSunset:'Pôr do sol · palmeiras', envDusk:'Crepúsculo', envCinema:'Cinema', envPassOn:'Passthrough da câmera',
    envNight:'Panorama 360° · cidade à noite', envSpace:'Panorama 360° · espaço',
    envPalm:'Panorama 360° · Palmeira', envPalmeira:'Panorama 360° · Palmeira', envVirtual:'Ambiente virtual',
    envTropical:'Panorama 360° · vale tropical', envLakeside:'Panorama 360° · lago ao pôr do sol',
    envDark:'Panorama 360° · Dark',
    win360:'Curvatura 360°', win360k:'Meia-abertura do arco (0.2 leve · 1.1 bem curvada)',
    win360All:'Abrir novas janelas já curvadas', win360Btn:'Curvar esta janela em 360°',
    langTitle:'Idioma', langSoon:'Mais idiomas chegam nas próximas versões.',
    langContinue:'Continuar', langPick:'Escolha seu idioma',
    micOff:'Ditado por voz indisponível neste aparelho',
    notif:'Notificações', noNotif:'Sem notificações novas', profile:'Perfil',
    repin:'Voltar ao arco de janelas', resize:'Redimensionar janela', moveWindow:'Mover janela',
    moveDock:'Mover a dock',
    androidApps:'Apps do Android', appWindowBadge:'App do Android', appMirrorBadge:'Espelho da tela',
    shizuku:'Shizuku', noAndroidApps:'Nenhum app do Android disponível ainda.',
    appBack:'Voltar', appHome:'Início', appRecents:'Recentes', appKeyboard:'Digitar no app',
    appRotate:'Girar a janela do app',
    appStarting:'Abrindo o app na janela…', appFailed:'Não foi possível abrir o app',
    appStopped:'O app foi encerrado', appNeedShizuku:'O Shizuku não está disponível agora: veja a linha acima',
    appDisplayRefused:'O serviço privilegiado recusou criar a tela do app',
    appDisplayFailed:'A tela do app não pôde ser criada', appNoLauncher:'Este app não tem tela inicial',
    appConsentDenied:'A captura de tela não foi autorizada', appMirrorStopped:'A captura de tela terminou',
    appDisplayEmpty:'O app não abriu nesta janela (ele pode ter ido para a tela do celular)',
    appCommandFailed:'Comando de app ignorado',
    appSurfaceFailed:'A janela não pôde ser criada nesta tela', appMirrorFailed:'A captura de tela não pôde começar',
    appHosting:'Janelas do Android', appRestore:'Restaurar', appMinimize:'Minimizar',
    appSystem:'Sistema', appOpen:'Aberto', appMinimized:'Minimizado',
    appCaptureInput:'Sem o serviço de acessibilidade a janela mostra o app mas não recebe o toque da mão',
    routeHosted:'O Shizuku vai abrir este app no próprio display dele, dentro da janela',
    routePermission:'O Shizuku precisa da sua autorização; autorize e o app abre na janela',
    routeCapture:'Sem Shizuku: o app abre na tela do celular e a janela mostra a tela (com sua autorização de captura)',
    appShizukuDenied:'Autorize o NextVR dentro do Shizuku (o pedido aparece no headset) e toque no app de novo',
    appShizukuBlocked:'Abra o app do Shizuku e permita o NextVR na lista de apps dele',
    appWaitingService:'Conectando ao serviço shell do Shizuku (é só uma vez)…',
    appMirrorStarting:'O app abre na tela do celular; esta janela mostra a tela com a sua autorização de captura',
    appDiagnostics:'Diagnóstico', appDiagnosticsCopied:'Diagnóstico copiado',
    appSelfTest:'Testar Shizuku agora', appSelfTestOk:'Shizuku ok: display, entrada e am respondem', appSelfTestFailed:'O teste falhou; abra o Diagnóstico',
    appOpenOnPhone:'Abrir no celular',
    appNoResults:'Nenhum app encontrado', appNone:'Nenhum app com tela inicial foi encontrado',
    searchApps:'Buscar apps', appHide:'Toque longo em um app para escondê-lo',
    shizukuInstall:'O Shizuku não está instalado', shizukuStart:'O Shizuku está parado: inicie por ADB ou depuração sem fio',
    shizukuUpdate:'O Shizuku é antigo demais para esta versão', shizukuAsk:'Falta permitir o NextVR no Shizuku',
    shizukuDenied:'O acesso ao Shizuku foi negado', shizukuRebind:'Reconectando ao Shizuku',
    shizukuReady:'Shizuku pronto: apps abrem em janelas próprias',
    shizukuUnknown:'Verificando o Shizuku', shizukuGrant:'Permitir', shizukuRecheck:'Verificar de novo',
    /* Jogos de headset pelo runtime PhoneXR: OpenXR, GearVR/Quest (VrApi) e Daydream/Cardboard. */
    xrTitle:'PhoneXR',
    xrSub:'Jogos de headset (OpenXR e VrApi) abrindo dentro do NextVR, com as mãos como controles',
    xrBadge:'Jogo de headset',
    xrReady:'Runtime PhoneXR pronto',
    xrRuntimeReady:'Runtime PhoneXR pronto: jogos de headset abrem aqui dentro',
    xrMissing:'O runtime PhoneXR não está instalado: o jogo aparece na biblioteca mas não abre',
    xrMissingNoApk:'O runtime PhoneXR não está instalado: veja docs/PHONEXR-INTEGRATION.md',
    xrSummaryMissing:'Instale o runtime (requer Shizuku) para abrir jogos de headset aqui dentro',
    xrInstall:'Instalar runtime',
    xrInstalling:'Instalando o runtime PhoneXR…',
    xrSelfTest:'Verificar agora',
    xrNotHostable:'Este jogo precisa ser aberto pelo launcher do runtime na tela do aparelho',
    xrMenuHint:'Pinça sobre uma janela agita o menu · fora dela a pinça é o gatilho do jogo',
    xrHandMode:'Entrada das mãos',
    xrHandModeSub:'Como as mãos chegam ao jogo',
    xrHandModeNote:'No modo controles, pinça é gatilho e punho fechado é grip. No modo mãos as cordas dos dedos seguem a sua mão, sem botões.',
    xrModeControllers:'Controles',
    xrModeControllersSub:'Pinça = gatilho · punho fechado = grip (como Oculus Touch)',
    xrModeHands:'Mãos',
    xrModeHandsSub:'Só cordas dos dedos, sem botões (jogos com suporte a mãos)',
    xrBundlingNote:'Nenhum APK do runtime vem embutido neste build: coloque os APKs do PhoneXR em nextvr-android/src/main/assets/xr/runtime/ (veja docs/PHONEXR-INTEGRATION.md).',
    /* Mundo 3D jogável: a plataforma de jogos nativa (colocar, mover, girar, escalar, remover). */
    'game.exit':'Sair do jogo', 'game.menu':'Menu do jogo',
    'game.continue':'Continuar', 'game.settings':'Configurações',
    'tool.move':'Mover', 'tool.rotate':'Girar', 'tool.scale':'Tamanho', 'tool.place':'Colocar',
    'kind.box':'Cubo', 'kind.sphere':'Esfera', 'kind.cylinder':'Cilindro',
    'kind.cone':'Cone', 'kind.plate':'Placa',
  },
  en: {
    desktop:'Desktop', browser:'Browser', youtube:'YouTube', gallery:'Gallery',
    settings:'Settings', menu:'Menu', store:'Store', env:'Environments', keyboard:'Keyboard', center:'Recenter',
    search:'Search the web', searchYt:'Search videos', open:'Open', close:'Close',
    general:'General', hands:'Hand tracking', windows:'Windows', dock:'Dock', perf:'Performance',
    language:'Language', on:'On', off:'Off', sens:'Sensitivity', scale:'Scale',
    dist:'Distance', curve:'Curve', size:'Size', quality:'Quality', apps:'Apps',
    recents:'Recent', battery:'Battery', net:'Network', time:'Time',
    libAll:'All', libFilter:'Filter', libGames:'Games',
    libGamesEmpty:'Headset games appear here when PhoneXR finds them.',
    libRecentEmpty:'Recently opened apps will appear here.',
    pickPhotos:'Pick photos', noPhotos:'No photos picked yet.',
    photosHelp:'Photos stay on the device and never leave Next VR.',
    centered:'View recentered', langChanged:'Language changed',
    arcFull:'Arc full (max 5 apps) — closing',
    envPass:'Camera passthrough', envLagoon:'360° panorama · sunset lagoon', envSunset:'Sunset · palms', envDusk:'Dusk', envCinema:'Cinema', envPassOn:'Camera passthrough',
    envNight:'360° panorama · city at night', envSpace:'360° panorama · space',
    envPalm:'360° panorama · palm tree', envPalmeira:'360° panorama · palm tree', envVirtual:'Virtual environment',
    envTropical:'360° panorama · tropical valley', envLakeside:'360° panorama · sunset lake',
    envDark:'360° panorama · Dark',
    win360:'360° curvature', win360k:'Arc half-angle (0.2 subtle · 1.1 very curved)',
    win360All:'Open new windows already curved', win360Btn:'Curve this window in 360°',
    langTitle:'Language', langSoon:'More languages are coming in the next versions.',
    langContinue:'Continue', langPick:'Choose your language',
    micOff:'Voice dictation is unavailable on this device',
    notif:'Notifications', noNotif:'No new notifications', profile:'Profile',
    repin:'Return to the window arc', resize:'Resize window', moveWindow:'Move window',
    moveDock:'Move the dock',
    androidApps:'Android apps', appWindowBadge:'Android app', appMirrorBadge:'Screen mirror',
    shizuku:'Shizuku', noAndroidApps:'No Android apps available yet.',
    appBack:'Back', appHome:'Home', appRecents:'Recents', appKeyboard:'Type into the app',
    appRotate:'Rotate the app window',
    appStarting:'Opening the app in this window…', appFailed:'The app could not be opened',
    appStopped:'The app stopped', appNeedShizuku:'Shizuku is not available right now: see the row above',
    appDisplayRefused:'The privileged service refused to create the app display',
    appDisplayFailed:'The app display could not be created', appNoLauncher:'This app has no launcher screen',
    appConsentDenied:'Screen capture was not authorized', appMirrorStopped:'Screen capture ended',
    appDisplayEmpty:'The app did not open in this window (it may have gone to the phone screen)',
    appCommandFailed:'App command ignored',
    appSurfaceFailed:'The window could not be created on this display', appMirrorFailed:'Screen capture could not start',
    appHosting:'Android windows', appRestore:'Restore', appMinimize:'Minimize',
    appSystem:'System', appOpen:'Open', appMinimized:'Minimized',
    appCaptureInput:'Without the accessibility service the window shows the app but does not take the hand\u2019s touch',
    routeHosted:'Shizuku opens this app on its own display, inside the window',
    routePermission:'Shizuku needs your authorization; allow it and the app opens in the window',
    routeCapture:'Without Shizuku: the app opens on the phone screen and the window shows it (with your capture consent)',
    appShizukuDenied:'Allow NextVR inside Shizuku (the request appears in the headset) and tap the app again',
    appShizukuBlocked:'Open the Shizuku app and allow NextVR in its list of apps',
    appWaitingService:'Connecting to the Shizuku shell service (only once)\u2026',
    appMirrorStarting:'The app opens on the phone screen; this window shows it with your capture consent',
    appDiagnostics:'Diagnostics', appDiagnosticsCopied:'Diagnostics copied',
    appSelfTest:'Test Shizuku now', appSelfTestOk:'Shizuku ok: display, input and am answer', appSelfTestFailed:'The test failed; open Diagnostics',
    appOpenOnPhone:'Open on the phone',
    appNoResults:'No app found', appNone:'No app with a launcher screen was found',
    searchApps:'Search apps', appHide:'Long-press an app to hide it',
    shizukuInstall:'Shizuku is not installed', shizukuStart:'Shizuku is stopped: start it over ADB or wireless debugging',
    shizukuUpdate:'Shizuku is too old for this version', shizukuAsk:'NextVR still needs the Shizuku permission',
    shizukuDenied:'Shizuku access was denied', shizukuRebind:'Reconnecting to Shizuku',
    shizukuReady:'Shizuku ready: apps open in their own windows',
    shizukuUnknown:'Checking Shizuku', shizukuGrant:'Allow', shizukuRecheck:'Check again',
    /* Headset games through the PhoneXR runtime: OpenXR, GearVR/Quest (VrApi), Daydream/Cardboard. */
    xrTitle:'PhoneXR',
    xrSub:'Headset games (OpenXR and VrApi) opening inside NextVR, hands as controllers',
    xrBadge:'Headset game',
    xrReady:'PhoneXR runtime ready',
    xrRuntimeReady:'PhoneXR runtime ready: headset games open inside here',
    xrMissing:'The PhoneXR runtime is not installed: the game shows in the library but cannot open',
    xrMissingNoApk:'The PhoneXR runtime is not installed: see docs/PHONEXR-INTEGRATION.md',
    xrSummaryMissing:'Install the runtime (needs Shizuku) to open headset games in here',
    xrInstall:'Install runtime',
    xrInstalling:'Installing the PhoneXR runtime…',
    xrSelfTest:'Check now',
    xrNotHostable:'This game has to be started by the runtime launcher on the phone screen',
    xrMenuHint:'Pinch over a window works this menu · outside it the pinch is the game trigger',
    xrHandMode:'Hand input',
    xrHandModeSub:'How the hands reach the game',
    xrHandModeNote:'Controllers mode: pinch is trigger, a fist is grip. Hands mode tracks your finger curls with no buttons.',
    xrModeControllers:'Controllers',
    xrModeControllersSub:'Pinch = trigger · fist = grip (like Oculus Touch)',
    xrModeHands:'Hands',
    xrModeHandsSub:'Finger curls only, no buttons (hand-tracking-native games)',
    xrBundlingNote:'No runtime APK ships in this build: put the PhoneXR APKs in nextvr-android/src/main/assets/xr/runtime/ (see docs/PHONEXR-INTEGRATION.md).',
    /* Playable 3D world: the native game platform (place, move, rotate, scale, remove). */
    'game.exit':'Exit game', 'game.menu':'Game menu',
    'game.continue':'Continue', 'game.settings':'Settings',
    'tool.move':'Move', 'tool.rotate':'Rotate', 'tool.scale':'Scale', 'tool.place':'Place',
    'kind.box':'Cube', 'kind.sphere':'Sphere', 'kind.cylinder':'Cylinder',
    'kind.cone':'Cone', 'kind.plate':'Plate',
  },
  es: {
    desktop:'Escritorio', browser:'Navegador', youtube:'YouTube', gallery:'Galería',
    settings:'Ajustes', menu:'Menú', store:'Tienda', env:'Entornos', keyboard:'Teclado', center:'Centrar',
    search:'Buscar en la web', searchYt:'Buscar vídeos', open:'Abrir', close:'Cerrar',
    general:'General', hands:'Hand tracking', windows:'Ventanas', dock:'Dock', perf:'Rendimiento',
    language:'Idioma', on:'Activado', off:'Desactivado', sens:'Sensibilidad', scale:'Escala',
    dist:'Distancia', curve:'Curvatura', size:'Tamaño', quality:'Calidad', apps:'Aplicaciones',
    recents:'Recientes', battery:'Batería', net:'Conexión', time:'Hora',
    libAll:'Todo', libFilter:'Filtro', libGames:'Juegos',
    libGamesEmpty:'Los juegos de realidad virtual aparecerán aquí cuando PhoneXR los encuentre.',
    libRecentEmpty:'Las aplicaciones abiertas recientemente aparecerán aquí.',
    pickPhotos:'Elegir fotos', noPhotos:'Aún no hay fotos elegidas.',
    photosHelp:'Las fotos se quedan en el dispositivo y no salen de Next VR.',
    centered:'Vista centrada', langChanged:'Idioma cambiado',
    arcFull:'Arco lleno (máx. 5 apps) — cerrando',
    envPass:'Camera passthrough', envLagoon:'Panorama 360° · laguna al atardecer', envSunset:'Atardecer · palmeras', envDusk:'Crepúsculo', envCinema:'Cine', envPassOn:'Passthrough de la cámara',
    envNight:'Panorama 360° · ciudad de noche', envSpace:'Panorama 360° · espacio',
    envPalm:'Panorama 360° · palmera', envPalmeira:'Panorama 360° · palmera', envVirtual:'Entorno virtual',
    envTropical:'Panorama 360° · valle tropical', envLakeside:'Panorama 360° · lago al atardecer',
    win360:'Curvatura 360°', win360k:'Semiángulo del arco (0.2 leve · 1.1 muy curvada)',
    win360All:'Abrir ventanas nuevas ya curvadas', win360Btn:'Curvar esta ventana en 360°',
    langTitle:'Idioma', langSoon:'Más idiomas llegan en las próximas versiones.',
    langContinue:'Continuar', langPick:'Elige tu idioma',
    micOff:'El dictado por voz no está disponible en este dispositivo',
    notif:'Notificaciones', noNotif:'Sin notificaciones nuevas', profile:'Perfil',
    repin:'Volver al arco de ventanas', resize:'Cambiar tamaño de ventana', moveWindow:'Mover ventana',
    moveDock:'Mover el dock',
    androidApps:'Apps de Android', appWindowBadge:'App de Android', appMirrorBadge:'Espejo de pantalla',
    shizuku:'Shizuku', noAndroidApps:'Aún no hay apps de Android disponibles.',
    appBack:'Atrás', appHome:'Inicio', appRecents:'Recientes', appKeyboard:'Escribir en la app',
    appRotate:'Girar la ventana de la app',
    appStarting:'Abriendo la app en esta ventana…', appFailed:'No se pudo abrir la app',
    appStopped:'La app se cerró', appNeedShizuku:'Shizuku no está disponible ahora: mira la fila de arriba',
    appDisplayRefused:'El servicio privilegiado rechazó crear la pantalla de la app',
    appDisplayFailed:'No se pudo crear la pantalla de la app', appNoLauncher:'Esta app no tiene pantalla inicial',
    appConsentDenied:'No se autorizó la captura de pantalla', appMirrorStopped:'La captura de pantalla terminó',
    appDisplayEmpty:'La app no se abrió en esta ventana (puede haber ido a la pantalla del teléfono)',
    appCommandFailed:'Comando de app ignorado',
    appSurfaceFailed:'No se pudo crear la ventana en esta pantalla', appMirrorFailed:'No se pudo iniciar la captura de pantalla',
    appHosting:'Ventanas de Android', appRestore:'Restaurar', appMinimize:'Minimizar',
    appSystem:'Sistema', appOpen:'Abierta', appMinimized:'Minimizada',
    appCaptureInput:'Sin el servicio de accesibilidad la ventana muestra la app pero no recibe el toque de la mano',
    routeHosted:'Shizuku abre esta app en su propia pantalla, dentro de la ventana',
    routePermission:'Shizuku necesita tu autorización; concédela y la app se abre en la ventana',
    routeCapture:'Sin Shizuku: la app se abre en la pantalla del teléfono y la ventana la muestra (con tu consentimiento de captura)',
    appShizukuDenied:'Permite NextVR dentro de Shizuku (la petición aparece en el visor) y toca la app otra vez',
    appShizukuBlocked:'Abre la app de Shizuku y permite NextVR en su lista de apps',
    appWaitingService:'Conectando al servicio shell de Shizuku (solo una vez)\u2026',
    appMirrorStarting:'La app se abre en la pantalla del teléfono; esta ventana la muestra con tu consentimiento de captura',
    appDiagnostics:'Diagnóstico', appDiagnosticsCopied:'Diagnóstico copiado',
    appSelfTest:'Probar Shizuku ahora', appSelfTestOk:'Shizuku ok: pantalla, entrada y am responden', appSelfTestFailed:'La prueba falló; abre el Diagnóstico',
    appOpenOnPhone:'Abrir en el teléfono',
    appNoResults:'No se encontró ninguna app', appNone:'No se encontró ninguna app con pantalla inicial',
    searchApps:'Buscar apps', appHide:'Mantén pulsada una app para ocultarla',
    shizukuInstall:'Shizuku no está instalado', shizukuStart:'Shizuku está detenido: inícialo por ADB o depuración inalámbrica',
    shizukuUpdate:'Shizuku es demasiado antiguo para esta versión', shizukuAsk:'Falta permitir NextVR en Shizuku',
    shizukuDenied:'Se denegó el acceso a Shizuku', shizukuRebind:'Reconectando con Shizuku',
    shizukuReady:'Shizuku listo: las apps abren en sus propias ventanas',
    shizukuUnknown:'Comprobando Shizuku', shizukuGrant:'Permitir', shizukuRecheck:'Comprobar de nuevo',
    /* Juegos de visor con el runtime PhoneXR: OpenXR, GearVR/Quest (VrApi) y Daydream/Cardboard. */
    xrTitle:'PhoneXR',
    xrSub:'Juegos de visor (OpenXR y VrApi) abiertos dentro de NextVR, con las manos de controles',
    xrBadge:'Juego de visor',
    xrReady:'Runtime PhoneXR listo',
    xrRuntimeReady:'Runtime PhoneXR listo: los juegos de visor abren aquí dentro',
    xrMissing:'El runtime PhoneXR no está instalado: el juego aparece en la biblioteca pero no abre',
    xrMissingNoApk:'El runtime PhoneXR no está instalado: mira docs/PHONEXR-INTEGRATION.md',
    xrSummaryMissing:'Instala el runtime (necesita Shizuku) para abrir juegos de visor aquí',
    xrInstall:'Instalar runtime',
    xrInstalling:'Instalando el runtime PhoneXR…',
    xrSelfTest:'Comprobar ahora',
    xrNotHostable:'Este juego debe ser iniciado por el launcher del runtime en la pantalla del móvil',
    xrMenuHint:'Pinza sobre una ventana mueve este menú · fuera de ellas la pinza es el gatillo',
    xrHandMode:'Entrada de manos',
    xrHandModeSub:'Cómo llegan las manos al juego',
    xrHandModeNote:'En modo controles la pinza es gatillo y el puño es grip. En modo manos siguen las curvas de tus dedos, sin botones.',
    xrModeControllers:'Controles',
    xrModeControllersSub:'Pinza = gatillo · puño = grip (como Oculus Touch)',
    xrModeHands:'Manos',
    xrModeHandsSub:'Solo curvas de dedos, sin botones (juegos con manos nativas)',
    xrBundlingNote:'Ningún APK del runtime se incluye en este build: pon los APKs de PhoneXR en nextvr-android/src/main/assets/xr/runtime/ (mira docs/PHONEXR-INTEGRATION.md).',
    /* Mundo 3D jugable: la plataforma de juegos nativa (colocar, mover, girar, escalar, quitar). */
    'game.exit':'Salir del juego', 'game.menu':'Menú del juego',
    'game.continue':'Continuar', 'game.settings':'Ajustes',
    'tool.move':'Mover', 'tool.rotate':'Girar', 'tool.scale':'Tamaño', 'tool.place':'Colocar',
    'kind.box':'Cubo', 'kind.sphere':'Esfera', 'kind.cylinder':'Cilindro',
    'kind.cone':'Cono', 'kind.plate':'Placa',
  },
};
Object.assign(STR.pt, {
  dockSnapSlot:'Espaço pré-definido na Dock',
  dockSnapDesc:'Mostrar janela preta transparente ao mover janelas na Dock normal',
  dockSnapHint:'Solte aqui para encaixar no espaço pré-definido',
  fingerTouch:'Toque com indicador (sem pinça)',
  fingerTouchDesc:'Abrir apps na Dock ou Spatial levando o indicador à frente',
  qualityHigh:'Alta (1080p)', qualityMedium:'Média (890p)', qualityLow:'Baixa (390p)', qualityAuto:'Automática',
});
Object.assign(STR.en, {
  dockSnapSlot:'Pre-defined Dock Slot',
  dockSnapDesc:'Show semi-transparent black slot when moving windows in normal Dock',
  dockSnapHint:'Drop here to snap into pre-defined slot',
  fingerTouch:'Index Finger Touch (No Pinch)',
  fingerTouchDesc:'Open apps in Dock or Spatial by pushing your index finger forward',
  qualityHigh:'High (1080p)', qualityMedium:'Medium (890p)', qualityLow:'Low (390p)', qualityAuto:'Auto',
});
Object.assign(STR.es, {
  dockSnapSlot:'Espacio predefinido en Dock',
  dockSnapDesc:'Mostrar ventana negra semitransparente al mover ventanas en el Dock normal',
  dockSnapHint:'Suelta aquí para encajar en el espacio predefinido',
  fingerTouch:'Toque con índice (sin pinza)',
  fingerTouchDesc:'Abrir apps en el Dock o Spatial llevando el dedo índice hacia adelante',
  qualityHigh:'Alta (1080p)', qualityMedium:'Media (890p)', qualityLow:'Baja (390p)', qualityAuto:'Automática',
});
STR.ja = {
  ...STR.en,
  desktop:'ワークスペース', browser:'ブラウザ', youtube:'YouTube', gallery:'ギャラリー',
  settings:'設定', menu:'メニュー', store:'ストア', env:'環境', keyboard:'キーボード', center:'正面にリセット',
  search:'ウェブを検索', searchYt:'動画を検索', open:'開く', close:'閉じる',
  general:'一般', hands:'ハンドトラッキング', windows:'ウィンドウ', dock:'ドック', perf:'パフォーマンス',
  language:'言語', on:'オン', off:'オフ', sens:'感度', scale:'スケール',
  dist:'距離', curve:'カーブ', size:'サイズ', quality:'画質', apps:'アプリ',
  recents:'最近', battery:'バッテリー', net:'ネットワーク', time:'時刻',
  libAll:'すべて', libFilter:'フィルター', libGames:'ゲーム',
  centered:'視点をリセットしました', langChanged:'言語を変更しました',
  langTitle:'言語', langContinue:'次へ', langPick:'言語を選択',
  notif:'通知', noNotif:'新しい通知はありません', profile:'プロフィール',
  dockSnapSlot:'ドック定義済みスロット', dockSnapDesc:'ウィンドウ移動時に半透明の黒枠を表示',
  dockSnapHint:'ここにドロップして配置',
  qualityHigh:'高 (1080p)', qualityMedium:'中 (890p)', qualityLow:'低 (390p)', qualityAuto:'自動',
};
STR.fr = {
  ...STR.en,
  desktop:'Espace de travail', browser:'Navigateur', youtube:'YouTube', gallery:'Galerie',
  settings:'Paramètres', menu:'Menu', store:'Boutique', env:'Environnements', keyboard:'Clavier', center:'Recentrer',
  search:'Rechercher sur le web', searchYt:'Rechercher des vidéos', open:'Ouvrir', close:'Fermer',
  general:'Général', hands:'Suivi des mains', windows:'Fenêtres', dock:'Dock', perf:'Performance',
  language:'Langue', on:'Activé', off:'Désactivé', sens:'Sensibilité', scale:'Échelle',
  dist:'Distance', curve:'Courbure', size:'Taille', quality:'Qualité', apps:'Applications',
  recents:'Récents', battery:'Batterie', net:'Réseau', time:'Heure',
  libAll:'Tout', libFilter:'Filtre', libGames:'Jeux',
  centered:'Espace recentré', langChanged:'Langue modifiée',
  langTitle:'Langue', langContinue:'Continuer', langPick:'Choisissez votre langue',
  notif:'Notifications', noNotif:'Aucune notification', profile:'Profil',
  dockSnapSlot:'Emplacement prédéfini du Dock', dockSnapDesc:'Afficher un cadre noir semi-transparent lors du déplacement',
  dockSnapHint:'Relâchez ici pour placer la fenêtre',
  qualityHigh:'Haute (1080p)', qualityMedium:'Moyenne (890p)', qualityLow:'Basse (390p)', qualityAuto:'Auto',
};
STR.de = {
  ...STR.en,
  desktop:'Arbeitsbereich', browser:'Browser', youtube:'YouTube', gallery:'Galerie',
  settings:'Einstellungen', menu:'Menü', store:'Store', env:'Umgebungen', keyboard:'Tastatur', center:'Zentrieren',
  search:'Im Web suchen', searchYt:'Videos suchen', open:'Öffnen', close:'Schließen',
  general:'Allgemein', hands:'Hand-Tracking', windows:'Fenster', dock:'Dock', perf:'Leistung',
  language:'Sprache', on:'Ein', off:'Aus', sens:'Empfindlichkeit', scale:'Skalierung',
  dist:'Abstand', curve:'Krümmung', size:'Größe', quality:'Qualität', apps:'Apps',
  recents:'Zuletzt', battery:'Akku', net:'Netzwerk', time:'Zeit',
  libAll:'Alle', libFilter:'Filter', libGames:'Spiele',
  centered:'Ansicht zentriert', langChanged:'Sprache geändert',
  langTitle:'Sprache', langContinue:'Weiter', langPick:'Sprache auswählen',
  notif:'Mitteilungen', noNotif:'Keine neuen Mitteilungen', profile:'Profil',
  dockSnapSlot:'Vordefinierter Dock-Platz', dockSnapDesc:'Halbtransparentes schwarzes Zielfenster beim Bewegen anzeigen',
  dockSnapHint:'Hier ablegen zum Einrasten',
  qualityHigh:'Hoch (1080p)', qualityMedium:'Mittel (890p)', qualityLow:'Niedrig (390p)', qualityAuto:'Automatisch',
};
STR.ko = {
  ...STR.en,
  desktop:'작업 공간', browser:'브라우저', youtube:'YouTube', gallery:'갤러리',
  settings:'설정', menu:'메뉴', store:'스토어', env:'환경', keyboard:'키보드', center:'중앙 정렬',
  search:'웹 검색', searchYt:'동영상 검색', open:'열기', close:'닫기',
  general:'일반', hands:'핸드 트래킹', windows:'창', dock:'독', perf:'성능',
  language:'언어', on:'켜짐', off:'꺼짐', sens:'감도', scale:'크기 비율',
  dist:'거리', curve:'곡률', size:'크기', quality:'화질', apps:'앱',
  recents:'최근 항목', battery:'배터리', net:'네트워크', time:'시간',
  libAll:'전체', libFilter:'필터', libGames:'게임',
  centered:'화면이 중앙에 맞춰졌습니다', langChanged:'언어가 변경되었습니다',
  langTitle:'언어', langContinue:'계속', langPick:'언어 선택',
  notif:'알림', noNotif:'새 알림 없음', profile:'프로필',
  dockSnapSlot:'독 사전 정의 슬롯', dockSnapDesc:'창 이동 시 반투명 검은 슬롯 표시',
  dockSnapHint:'여기에 놓아 슬롯에 배치',
  qualityHigh:'높음 (1080p)', qualityMedium:'중간 (890p)', qualityLow:'낮음 (390p)', qualityAuto:'자동',
};
STR.it = {
  ...STR.en,
  desktop:'Spazio di lavoro', browser:'Browser', youtube:'YouTube', gallery:'Galleria',
  settings:'Impostazioni', menu:'Menu', store:'Store', env:'Ambienti', keyboard:'Tastiera', center:'Ricentra',
  search:'Cerca sul web', searchYt:'Cerca video', open:'Apri', close:'Chiudi',
  general:'Generale', hands:'Tracciamento mani', windows:'Finestre', dock:'Dock', perf:'Prestazioni',
  language:'Lingua', on:'Attivo', off:'Disattivo', sens:'Sensibilità', scale:'Scala',
  dist:'Distanza', curve:'Curvatura', size:'Dimensione', quality:'Qualità', apps:'App',
  recents:'Recenti', battery:'Batteria', net:'Rete', time:'Ora',
  libAll:'Tutti', libFilter:'Filtro', libGames:'Giochi',
  centered:'Ambiente centrato', langChanged:'Lingua modificata',
  langTitle:'Lingua', langContinue:'Continua', langPick:'Scegli la lingua',
  notif:'Notifiche', noNotif:'Nessuna notifica', profile:'Profilo',
  dockSnapSlot:'Slot predefinito Dock', dockSnapDesc:'Mostra finestra nera semitrasparente quando sposti le finestre',
  dockSnapHint:'Rilascia qui per agganciare',
  qualityHigh:'Alta (1080p)', qualityMedium:'Media (890p)', qualityLow:'Bassa (390p)', qualityAuto:'Automatica',
};
STR.nl = {
  ...STR.en,
  desktop:'Werkruimte', browser:'Browser', youtube:'YouTube', gallery:'Galerij',
  settings:'Instellingen', menu:'Menu', store:'Winkel', env:'Omgevingen', keyboard:'Toetsenbord', center:'Centreren',
  search:'Zoeken op het web', searchYt:'Video’s zoeken', open:'Openen', close:'Sluiten',
  general:'Algemeen', hands:'Handtracking', windows:'Vensters', dock:'Dock', perf:'Prestaties',
  language:'Taal', on:'Aan', off:'Uit', sens:'Gevoeligheid', scale:'Schaal',
  dist:'Afstand', curve:'Kromming', size:'Grootte', quality:'Kwaliteit', apps:'Apps',
  recents:'Recent', battery:'Batterij', net:'Netwerk', time:'Tijd',
  libAll:'Alles', libFilter:'Filter', libGames:'Games',
  centered:'Omgeving gecentreerd', langChanged:'Taal gewijzigd',
  langTitle:'Taal', langContinue:'Doorgaan', langPick:'Kies je taal',
  notif:'Meldingen', noNotif:'Geen nieuwe meldingen', profile:'Profiel',
  dockSnapSlot:'Vooraf ingesteld Dock-vak', dockSnapDesc:'Toon halftransparant zwart vak tijdens verplaatsen van vensters',
  dockSnapHint:'Laat hier los om te plaatsen',
  qualityHigh:'Hoog (1080p)', qualityMedium:'Gemiddeld (890p)', qualityLow:'Laag (390p)', qualityAuto:'Automatisch',
};
STR.ru = {
  ...STR.en,
  desktop:'Рабочее пространство', browser:'Браузер', youtube:'YouTube', gallery:'Галерея',
  settings:'Настройки', menu:'Меню', store:'Магазин', env:'Окружение', keyboard:'Клавиатура', center:'Центрировать',
  search:'Поиск в сети', searchYt:'Поиск видео', open:'Открыть', close:'Закрыть',
  general:'Общие', hands:'Отслеживание рук', windows:'Окна', dock:'Док', perf:'Производительность',
  language:'Язык', on:'Вкл.', off:'Выкл.', sens:'Чувствительность', scale:'Масштаб',
  dist:'Расстояние', curve:'Изгиб', size:'Размер', quality:'Качество', apps:'Приложения',
  recents:'Недавние', battery:'Батарея', net:'Сеть', time:'Время',
  libAll:'Все', libFilter:'Фильтр', libGames:'Игры',
  centered:'Пространство центрировано', langChanged:'Язык изменён',
  langTitle:'Язык', langContinue:'Продолжить', langPick:'Выберите язык',
  notif:'Уведомления', noNotif:'Нет новых уведомлений', profile:'Профиль',
  dockSnapSlot:'Предустановленный слот дока', dockSnapDesc:'Показывать полупрозрачное чёрное окно при перемещении окон',
  dockSnapHint:'Отпустите здесь для размещения',
  fingerTouch:'Касание указательным пальцем (без щипка)',
  fingerTouchDesc:'Наведение выбирает; движение руки вперёд открывает приложение (без луча и кружка)',
  qualityHigh:'Высокое (1080p)', qualityMedium:'Среднее (890p)', qualityLow:'Низкое (390p)', qualityAuto:'Авто',
};
/**
 * Idiomas do seletor, na ordem da referência (a lista do Quest), com o português na frente porque
 * é o idioma principal deste app. Todos os 12 idiomas possuem tabela de tradução ativa.
 */
export const LANG_ROWS = Object.freeze([
  { id: 'en', label: 'English (US)', table: 'en' },
  { id: 'ja', label: '日本語', table: 'ja' },
  { id: 'ru', label: 'Русский', table: 'ru' },
  { id: 'de', label: 'Deutsch', table: 'de' },
  { id: 'ko', label: '한국어', table: 'ko' },
  { id: 'es-ES', label: 'Español (España)', table: 'es' },
  { id: 'it', label: 'Italiano', table: 'it' },
  { id: 'en-GB', label: 'English (UK)', table: 'en' },
  { id: 'nl', label: 'Nederlands', table: 'nl' },
  { id: 'pt-PT', label: 'Português (Portugal)', table: 'pt' },
  { id: 'es', label: 'Español (Latinoamérica)', table: 'es' },
  { id: 'pt', label: 'Português (Brasil)', table: 'pt' },
]);
/**
 * Idioma quando nada foi escolhido ainda: português. NÃO usar `LANG_ROWS[0]` para isso — a ordem da
 * lista é a do print do Meta Horizon OS (English (USA) em cima), não a ordem de preferência do app:
 * na primeira execução, antes de o usuário tocar em qualquer linha, as próprias legendas da tela de
 * escolha têm de sair no idioma padrão.
 */
const LANG_FALLBACK = 'pt';
export const langRow = id => LANG_ROWS.find(r => r.id === id) || LANG_ROWS.find(r => r.id === LANG_FALLBACK);
export const langLabel = () => langRow(S.lang).label;
export const langTable = () => langRow(S.lang).table || 'pt';
export const t = k => (STR[langTable()] || STR.pt)[k] || STR.pt[k] || k;
export const setLang = l => {
  if (!LANG_ROWS.some(r => r.id === l && r.table)) return false;
  S.lang = l; save(); emit('lang'); return true;
};

/* ============================ eventos ============================ */
const subs = {};
export const on = (k, f) => ((subs[k] ||= []).push(f), f);
export const emit = (k, v) => (subs[k] || []).forEach(f => f(v));

export function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg; el.classList.add('on');
  clearTimeout(toast._t); toast._t = setTimeout(() => el.classList.remove('on'), 2400);
}

/* ============================ cena ============================ */
export const scene = new THREE.Scene();
export const camera = new THREE.PerspectiveCamera(72, 1, .05, 120);
camera.rotation.order = 'YXZ';

/**
 * Tudo que o usuário "coloca no mundo" entra aqui.
 *
 * A câmera é girada SÓ pelo giroscópio. O contentRoot só muda quando o usuário
 * aperta Centralizar. Por isso uma janela nunca acompanha o olhar: virar a cabeça
 * move a câmera, não o conteúdo.
 */
export const contentRoot = new THREE.Group();
scene.add(contentRoot);

export const EYE = 1.55;              // altura dos olhos, metros
camera.position.set(0, EYE, 0);
bindSixDofContext({ settings: S, camera, contentRoot });

export const renderer = native ? { setClearColor(){}, setPixelRatio(){}, setSize(){}, render(){} }
  : new THREE.WebGLRenderer({ antialias: true, alpha: true });
if (!native) { renderer.setClearColor(0, 0); document.getElementById('gl').appendChild(renderer.domElement); }
export const css3d = native ? new AtlasRenderer() : new CSS3DRenderer();
document.getElementById('css3d').appendChild(css3d.domElement);
if (native) {
  document.documentElement.classList.add('native');
  const hud = document.createElement('div'); hud.id = 'head-overlay';
  document.body.append(hud);
  for (const id of ['overlay','hud','toast','boot']) hud.append(document.getElementById(id));
}

export const QUALITY_PRESETS = Object.freeze({
  high:   { id: 'high',   height: 1080, label: '1080p', dpr: 2.25 },
  medium: { id: 'medium', height: 890,  label: '890p',  dpr: 1.85 },
  low:    { id: 'low',    height: 390,  label: '390p',  dpr: 1.35 },
});
let autoQualityTier = 'high';
export const activeQualityTier = () => S.quality === 'auto' ? autoQualityTier : (QUALITY_PRESETS[S.quality] ? S.quality : 'high');
export const activeQualityPreset = () => QUALITY_PRESETS[activeQualityTier()] || QUALITY_PRESETS.high;

function dpr() {
  const tier = activeQualityTier();
  if (tier === 'low') return Math.min(devicePixelRatio, 1.35);
  if (tier === 'high') return Math.min(devicePixelRatio, 2.25);
  return Math.min(devicePixelRatio, 1.85);     // medium (890p+)
}
function applyQualityState() {
  const tier = activeQualityTier();
  const preset = activeQualityPreset();
  document.documentElement.dataset.quality = S.quality;
  document.documentElement.dataset.qualityTier = tier;
  document.documentElement.dataset.qualityRes = preset.label;
  window.NativeXR?.setQuality?.(tier);
}
function resize() {
  applyQualityState();
  if (!native) { viewport.width = innerWidth; viewport.height = innerHeight; }
  const w = viewport.width, h = viewport.height;
  camera.aspect = w / h; camera.updateProjectionMatrix();
  renderer.setPixelRatio(dpr()); renderer.setSize(w, h);
  css3d.setSize(w, h);
  emit('resize');
}
addEventListener('resize', resize);
addEventListener('orientationchange', () => setTimeout(resize, 120));
resize();
on('quality', resize);

/* ============================ ambientes ============================ */
/**
 * O pôr do sol com palmeiras é o panorama inicial. O passthrough continua disponível; nos outros
 * ambientes, o GL nativo desenha uma esfera enquanto a câmera rastreia as mãos.
 * Os ids são os nomes dos assets (`env/<id>.jpg` no APK).
 */
export const ENV_IDS = Object.freeze(['passthrough', 'sunset', 'dusk', 'cinema', 'lagoon', 'virtual', 'palm', 'night', 'space', 'tropical', 'lakeside', 'dark']);
export const envList = () => [
  { id: 'sunset', name: t('envSunset'), thumb: './env/sunset.jpg' },
  { id: 'passthrough', name: t('envPass'), thumb: null },
  { id: 'dark', name: t('envDark'), thumb: './env/dark.jpg' },
  { id: 'dusk', name: t('envDusk'), thumb: './env/dusk.jpg' },
  { id: 'palm', name: t('envPalm'), thumb: './env/palm.jpg' },
  { id: 'lagoon', name: t('envLagoon'), thumb: './env/lagoon.jpg' },
  { id: 'virtual', name: t('envVirtual'), thumb: './env/virtual.jpg' },
  { id: 'night', name: t('envNight'), thumb: './env/night.jpg' },
  { id: 'space', name: t('envSpace'), thumb: './env/space.jpg' },
  { id: 'cinema', name: t('envCinema'), thumb: './env/cinema.jpg' },
  { id: 'tropical', name: t('envTropical'), thumb: './env/tropical.jpg' },
  { id: 'lakeside', name: t('envLakeside'), thumb: './env/lakeside.jpg' },
];
export function setEnvironment(id) {
  S.env = ENV_IDS.includes(id) ? id : 'passthrough';
  S.envChosen = 1; // Não sobrescreva uma escolha explícita em migrações futuras.
  // Lembra o último panorama escolhido: é ele que volta quando o passthrough é desligado.
  if (S.env !== 'passthrough') S.panorama = S.env;
  save(); emit('env', S.env);
  if (typeof window !== 'undefined') window.nextvrShowCircleLoader?.('env', S.env);
  // O fundo é renderizado no GL nativo; o WebView só informa qual ambiente usar.
  window.NativeXR?.env?.(S.env);
}

/** Liga/desliga o passthrough: desligado mostra o último panorama escolhido (padrão: pôr do sol). */
export const setPassthrough = enabled => setEnvironment(enabled ? 'passthrough' : S.panorama);

/** Liga/desliga o escurecimento do ambiente MR (câmera traseira escura em volta dos apps). */
export function setMrDim(enabled) {
  S.mrDim = enabled ? 1 : 0;
  save();
  if (typeof document !== 'undefined') {
    if (S.mrDim) document.documentElement.dataset.mrDim = '1';
    else delete document.documentElement.dataset.mrDim;
  }
  window.NativeXR?.setMrDim?.(!!S.mrDim);
  emit('mr-dim', S.mrDim);
}
if (typeof document !== 'undefined' && S.mrDim) {
  document.documentElement.dataset.mrDim = '1';
  window.NativeXR?.setMrDim?.(true);
}

/* ============================ giroscópio ============================ */
/*
 * Correções em relação ao comportamento antigo:
 *  - 1:1 com o aparelho: nenhum ganho/multiplicador (era a "sensibilidade altíssima").
 *  - compensa a rotação da tela (retrato/paisagem) — era a inversão esquerda/direita.
 *  - suavização leve por slerp, só para tirar o ruído do sensor, sem atraso perceptível.
 *  - a referência de frente é o contentRoot, não o sensor: abrir app nunca recalibra o giro.
 */
const gyro = { ok: false, has: false, q: new THREE.Quaternion(), tmp: new THREE.Quaternion(), e: new THREE.Euler() };
const Q_SCREEN = new THREE.Quaternion();
const Q_FLIP = new THREE.Quaternion(-Math.SQRT1_2, 0, 0, Math.SQRT1_2); // olhar sai pelas costas do aparelho
const ZEE = new THREE.Vector3(0, 0, 1);
const D2R = Math.PI / 180;

function screenAngle() {
  const a = (screen.orientation && screen.orientation.angle) || window.orientation || 0;
  return a * D2R;
}

function onOrient(ev) {
  if (ev.alpha == null) return;
  gyro.has = true;
  gyro.e.set(ev.beta * D2R, ev.alpha * D2R, -ev.gamma * D2R, 'YXZ');
  gyro.tmp.setFromEuler(gyro.e);
  gyro.tmp.multiply(Q_FLIP);
  gyro.tmp.multiply(Q_SCREEN.setFromAxisAngle(ZEE, -screenAngle()));
  gyro.q.copy(gyro.tmp);
}

export async function startGyro() {
  if (native) { gyro.ok = gyro.has = true; emit('gyro', true); return true; }
  try {
    const DOE = window.DeviceOrientationEvent;
    if (DOE && typeof DOE.requestPermission === 'function') {
      const r = await DOE.requestPermission();
      if (r !== 'granted') { toast('Permissão do giroscópio negada'); return false; }
    }
    addEventListener('deviceorientation', onOrient, true);
    gyro.ok = true;
    setTimeout(() => { if (!gyro.has) toast('Sem giroscópio: arraste para olhar'); }, 1200);
    emit('gyro', true);
    return true;
  } catch { toast('Giroscópio indisponível'); return false; }
}
export const gyroLive = () => gyro.ok && gyro.has;

/* arrasto (sem giroscópio, ou para ajuste fino) */
let drag = null, dragYaw = 0, dragPitch = 0;
addEventListener('pointerdown', e => {
  // a alça branca e as janelas tratam o próprio toque
  if (native) return;
  if (e.target.closest('.win-shell,.win,.win-handle,.kb,.dock,#hud,#boot')) return;
  drag = { x: e.clientX, y: e.clientY };
}, true);
addEventListener('pointermove', e => {
  if (!drag) return;
  dragYaw -= (e.clientX - drag.x) * .0032;
  dragPitch = Math.max(-1.2, Math.min(1.2, dragPitch - (e.clientY - drag.y) * .0032));
  drag = { x: e.clientX, y: e.clientY };
});
addEventListener('pointerup', () => drag = null);
addEventListener('pointercancel', () => drag = null);

/* ============================ centralizar ============================ */
/**
 * Usa a orientação atual como nova frente: gira o conteúdo para onde o usuário olha.
 * Não fecha app, não reinicia nada, não mexe no sensor.
 */
export function recenter() {
  SixDof.reset();
  const e = new THREE.Euler().setFromQuaternion(camera.quaternion, 'YXZ');
  contentRoot.rotation.y = e.y;
  contentRoot.position.set(0, 0, 0);
  camera.position.set(0, EYE, 0);
  emit('recenter');
  toast(t('centered'));
}

/* ============================ laço ============================ */
const frameSubs = [];
export const onFrame = f => frameSubs.push(f);

let last = performance.now(), fpsAcc = 0, fpsN = 0;
// Hand tracking runs on its own native cadence; measure its frame arrival separately from render.
let handLast = 0, handAcc = 0, handN = 0, handFps = 0;
/* Estado do pipeline nativo, publicado pelo PerfLog a cada ~3 s (delegate, FPS da câmera, custo da
 * inferência, quantos frames foram de uma ou de duas slots). É o que responde "por que a mão está
 * lenta" na própria tela: `infer` alto = o modelo/o delegate; `cam` baixo = a câmera não entrega;
 * duas mãos visíveis e `slots 2` = esperado; uma mão só e `slots 2` persistente = a trilha rápida
 * de uma slot não está entrando. */
let diag = null;

export const reportHandFrame = () => {
  const now = performance.now();
  if (handLast > 0) { handAcc += (now - handLast) / 1000; handN++; if (handAcc >= 1) { handFps = Math.round(handN / handAcc); handAcc = 0; handN = 0; } }
  handLast = now;
};
function loop(now) {
  const dt = Math.min((now - last) / 1000, .05); last = now;

  if (native) {
    // The Cardboard pose is already filtered and predicted; do not smooth or replace it.
  } else if (gyroLive()) {
    // frame-rate independent: suaviza sem o atraso exagerado de um fator fixo por frame
    camera.quaternion.slerp(gyro.q, 1 - Math.exp(-dt * 12));
    if (dragYaw) { camera.rotateY(dragYaw); dragYaw = 0; }
  } else {
    camera.quaternion.setFromEuler(new THREE.Euler(dragPitch, camera.rotation.y + dragYaw, 0, 'YXZ'));
    dragYaw = 0;
  }
  SixDof.update(now, dt);
  camera.position.set(SixDof.out.x, EYE + SixDof.out.y, SixDof.out.z);
  if (window.__gorillaStereoOverlay) {
    css3d.render(scene, camera);
    requestAnimationFrame(loop);
    return;
  }

  for (const f of frameSubs) f(dt, now);
  renderer.render(scene, camera);
  css3d.render(scene, camera);

  fpsAcc += dt; fpsN++;
  if (fpsAcc >= 1) {
    const measuredFps = Math.round(fpsN / fpsAcc);
    if (S.quality === 'auto') {
      const nextTier = measuredFps >= 28 ? 'high' : 'medium';
      if (nextTier !== autoQualityTier) {
        autoQualityTier = nextTier;
        applyQualityState();
        renderer.setPixelRatio(dpr());
        emit('quality-tier', autoQualityTier);
      }
    }
    const el = document.getElementById('fps');
    el.textContent = S.showFps
      ? measuredFps + ' fps · ' + activeQualityPreset().label
        + (native && S.handsOn ? ' · tracking ' + handFps + ' fps' : '')
        + (native && S.handsOn ? diagText() : '')
      : '';
    fpsAcc = 0; fpsN = 0;
  }
  requestAnimationFrame(loop);
}
const isFullscreenOverlay = typeof location !== 'undefined' &&
  (new URLSearchParams(location.search).get('fullscreen') === '1' || location.hash.includes('fullscreen=1'));
const isNativeShellSkip = typeof location !== 'undefined' && location.hash.includes('onboarding=skip');
if (!isFullscreenOverlay) {
  requestAnimationFrame(loop);
  if (isNativeShellSkip && !S.entryEnvChosen) {
    setPassthrough(true);
  } else {
    setEnvironment(S.env);
  }
}

if (native) {
  const poseMatrix = new THREE.Matrix4();
  let firstPose = true;
  window.nextvrPose = values => {
    poseMatrix.fromArray(values).invert();
    camera.quaternion.setFromRotationMatrix(poseMatrix);
    camera.position.set(SixDof.out.x, EYE + SixDof.out.y, SixDof.out.z); camera.updateMatrixWorld(true);
    if (firstPose) { contentRoot.rotation.y = new THREE.Euler().setFromQuaternion(camera.quaternion, 'YXZ').y; firstPose = false; }
  };
  window.nextvrMessage = toast;
  // O resumo de desempenho do pipeline nativo (PerfLog -> contador da tela). Chega como objeto.
  window.nextvrDiag = values => { diag = values; };
}

/** Uma linha curta com o que o contador precisa: câmera, inferência, delegate e slots. */
function diagText() {
  if (!diag) return '';
  const round = v => (typeof v === 'number' && v >= 0 ? Math.round(v) : null);
  const parts = [];
  const camera = round(diag.camera);
  if (camera !== null) parts.push('cam ' + camera);
  const infer = round(diag.infer);
  if (infer !== null) parts.push('infer ' + infer + 'ms');
  if (diag.delegate) parts.push(String(diag.delegate).split(' ')[0]);
  // Com uma mão levantada o grafo de uma slot deve dominar: é ele que evita pagar a segunda slot em
  // todo frame de mão rastreada (2,47x por frame, medido em tools/bench).
  if (typeof diag.narrow === 'number' && typeof diag.wide === 'number' && diag.narrow + diag.wide > 0)
    parts.push('slots ' + (diag.narrow >= diag.wide ? 1 : 2));
  if (round(diag.stale) > 0) parts.push('stale ' + Math.round(diag.stale));
  return parts.length ? ' · ' + parts.join(' · ') : '';
}
