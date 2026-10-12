# Apps Android em janelas flutuantes

Esta é a funcionalidade que transforma a dock do NextVR em um lançador de apps do próprio
aparelho: a biblioteca lista os apps instalados com os ícones reais e cada app aberto ganha uma
janela flutuante no arco multitarefa existente, com o visual da referência
(`new_references.zip`) — barra de arrasto branca, janela com vidro, mesmos botões.

O conteúdo da janela é o app de verdade rodando no Android. Não existe imitação em HTML, e a UI do
NextVR não desenha “telas falsas” de apps.

## O que a PhoneXR faz de verdade (e o que ela exige)

A PhoneXR foi lida linha por linha antes de implementar, e vale registrar o que ela **realmente**
exige, porque a única coisa que "não precisa" nela é o *root* — não o Shizuku:

| Evidência no repositório | O que ela diz |
| --- | --- |
| `VirtualScreen.kt` | o acesso é um tri-estado `NOT_RUNNING / NEEDS_PERMISSION / READY` calculado a partir de `Shizuku.pingBinder()`, `Shizuku.isPreV11()` e `Shizuku.checkSelfPermission()`. Não existe um quarto caminho "sem Shizuku". |
| `VrWindows.kt`, `VrHomeActivity.kt`, `MainActivity.kt`, `CinemaActivity.kt` | **todo** ponto de entrada de app verifica `VirtualScreen.access() != READY` e desiste com a mensagem "Запустите Shizuku e разрешите доступ PhoneXR" / "Сначала запустите Shizuku". |
| `PhoneXrRuntime.kt` | o retorno é literalmente `"Нет root и Shizuku"` — *sem root **e** sem Shizuku*. |
| `AndroidAppsContent.kt` | a própria tela diz: "abertos em janelas **через Shizuku**". |
| `DisplayUserService.kt` | o comentário da classe: "Shell pode criar um display virtual *trusted*, iniciar qualquer app nele e injetar entrada ali — **o que um app comum não pode**". |
| `grep MediaProjection` | **zero** ocorrências: a PhoneXR não tem espelho de tela. |

Ou seja: **é fisicamente impossível** hospedar o app de outro processo sem privilégio, e a PhoneXR
resolve isso do mesmo jeito que este PR — um *user service* do Shizuku rodando como `shell`. O que a
PhoneXR mostra sem Shizuku é o **conteúdo dela mesma**: as janelas de navegador, cinema e Compose
são displays virtuais **privados** (`createVirtualDisplay(..., flags 0)` + `Presentation`), criados
pelo próprio app. O NextVR já faz exatamente isso com o `WebSurface` (WebView em `Presentation` num
display virtual privado → `SurfaceTexture` → quad no GL). É aí que está a diferença entre
"não precisei de Shizuku para ver uma janela" (conteúdo próprio) e "não precisei de Shizuku para ver
**outro app**" (não existe).

### O que foi trazido da PhoneXR para cá

* As **flags numéricas** do display por versão do Android (`PUBLIC | PRESENTATION | OWN_CONTENT_ONLY
  | SUPPORTS_TOUCH | DESTROY_CONTENT_ON_REMOVAL`, mais `TRUSTED | OWN_DISPLAY_GROUP | ALWAYS_UNLOCKED |
  TOUCH_FEEDBACK_DISABLED` no 33+ e `OWN_FOCUS` no 34+) — já estavam neste PR, copiadas de lá.
* O `DisplayManager` construído por reflexão sobre um `ContextWrapper` que se identifica como
  `com.android.shell` (o `DisplayManagerService` rejeita o `packageName` que não pertence ao UID
  chamador) — implementado em `NextVrDisplayService.newDisplayManager()`.
* `am start --display <id> --activity-clear-task -a MAIN -c LAUNCHER -n <componente>` como forma de
  iniciar o app no display.
* `InputEvent#setDisplayId` + `InputManagerGlobal.injectInputEvent(evento, modo assíncrono)` por
  reflexão, **com o mesmo fallback** para o `InputManager` legado (`getInstance()`) nos Androids
  antigos — `NextVrDisplayService.resolveInjector()`.
* O `dummyContext()` da PhoneXR (serviço construído sem `Context` pelas versões antigas do Shizuku)
  está em `NextVrDisplayService.systemContext()`.
* A consulta da biblioteca, `queryIntentActivities(ACTION_MAIN + CATEGORY_LAUNCHER)` distinta por
  pacote, excluindo o próprio app.

### O que a PhoneXR **não** tem, e este PR precisou resolver

* **Redimensionar**: o AIDL dela é `createDisplay/releaseDisplay/launch/injectKey/injectMotion/
  installApk/destroy` — não existe `resizeDisplay`. A janela dela escala a imagem; a nossa também
  redimensiona o display quando vale a pena, e agora **confirma** o tamanho antes de acreditar nele
  (seção "Redimensionar" abaixo).
* **Espelho da tela** (o caminho sem Shizuku): não existe lá de forma alguma.
* **Declaração de visibilidade de pacotes**: a PhoneXR declara o intent `MAIN + LAUNCHER` em
  `<queries>`; sem isso, no Android 11+ a listagem volta com um punhado de apps de sistema. Este PR
  também declara (era um bug real, que só aparecia em aparelho).

## As duas arquiteturas, sempre separadas

| | **App hospedado** (`display`) | **Espelho da tela** (`mirror`) |
| --- | --- | --- |
| O que a janela mostra | o app executando em um **display virtual próprio**, criado por um serviço privilegiado | o que a **tela do celular** está mostrando, capturado por `MediaProjection` |
| O app está embutido? | **sim**: é a própria atividade em uma tela dedicada | **não**: é uma cópia do vídeo da tela |
| Como o app é iniciado | `am start --display <id>` (com `ActivityOptions.setLaunchDisplayId` como equivalente público) | pelo atalho *Espelhar* do tile (API pública: é a mesma coisa que tocar no ícone) ou pelo próprio usuário, no celular |
| Toque | injetado **no display do app** (`InputEvent#setDisplayId` + `InputManager#injectInputEvent`) | gesto encaminhado à tela real (acessibilidade) |
| Precisa de quê | Shizuku ativo e autorizado | consentimento de captura do Android |
| Vários apps ao mesmo tempo | um display por app (até 3 janelas) | uma captura por vez |

A UI mostra isso na própria janela: o rótulo da barra diz `APP DO ANDROID` na primeira e
`ESPELHO DA TELA` na segunda. Espelhar a tela **nunca** é apresentado como “app embutido”.

## Módulos

Tudo o que é específico desta funcionalidade está em
`nextvr-android/src/main/java/com/nextvr/app/apps/`:

| Classe | Papel |
| --- | --- |
| `AndroidAppManager` | descobre os apps lançáveis, guarda recentes/ocultos, grava os ícones reais em PNG |
| `AppEntry`, `AppLibrary` | dados de um app e a seleção/ordenação pura (busca sem acento, recentes primeiro, sistema oculto por padrão) |
| `AppSession`, `AppSessionManager` | uma janela: máquina de estados, capacidade (3), minimizar/restaurar/redimensionar |
| `AppDisplaySpec`, `AppInputGeometry` | tamanho da tela do app a partir da caixa da janela; ponto normalizado ⇄ pixel da tela |
| `AppDisplayController` | cria/redimensiona/libera o display, liga a `Surface`, supervisiona o processo do app, cria o espelho |
| `AppSurfaceHost` | o lado GL: recebe um `SurfaceTexture` que o `SpatialRenderer` já amostra como qualquer browser |
| `AppInputController` | toque/tecla/texto: Shizuku (display virtual) ou acessibilidade (espelho) |
| `AppWindowController` | a ponte com o shell: `appsLibrary`, `appsCommand`, o JSON de estado |
| `ShizukuManager` | `pingBinder`/`checkSelfPermission`/`requestPermission` e o *user service* |
| `NextVrDisplayService` | a metade privilegiada (AIDL `IDisplayService`), roda como usuário `shell` |
| `NextVrAccessibilityService` | o caminho sem Shizuku: `dispatchGesture` e ações globais |
| `AppMirrorService` | o serviço em primeiro plano, tipo `mediaProjection`, que o Android exige para a captura existir (e a notificação que avisa que a tela está sendo capturada) |

No shell (`web/src/`): `android-apps.js` (estado, janelas, biblioteca, dock) e `display-fit.js`
(onde a imagem da tela do app fica dentro da janela e como o toque volta normalizado).

## Como a imagem aparece na janela

1. `AppDisplayController.surfaceId(pkg)` = `"app:" + pacote`. O `NextVrActivity` implementa
   `AppSurfaceHost`: ele cria (na thread de GL) uma entrada no mapa `browsers` do
   `SpatialRenderer`, exatamente o mesmo tipo de textura que as janelas de navegador usam.
2. O `SurfaceTexture` dessa entrada é entregue ao display: `VirtualDisplay` (hospedado) ou
   `MediaProjection#createVirtualDisplay` (espelho).
3. O shell publica a geometria: `data-native-app` no corpo da janela, `data-aspect` com a
   proporção visível da tela do app. O `atlas.js` calcula o retângulo ajustado
   (`fitDisplay`) e envia `browser: "app:<pacote>"` + `uv` recortado ao `SpatialRenderer`.
4. Enquanto o app não produziu o primeiro quadro, nada é desenhado e a janela mostra
   “Abrindo o app na janela…”.

Nada disso depende de um tipo novo de textura: o compositor, o vidro, a curvatura 360, o
atlas e as duas passadas de desenho continuam iguais.

## Como o toque chega ao app

1. A mão é o único ponteiro (o tracking continua sendo o do PhoneXR;
   esta funcionalidade não instala nenhuma rota de toque físico nem de olhar).
2. O shell converte a posição da mão em coordenadas normalizadas (0..1) **do retângulo onde a
   tela do app aparece** e chama `NativeXR.handTouch("app:<pacote>", ação, u, v)`.
3. O `NextVrActivity` entrega o evento ao `AppWindowController.touch`, que usa
   `AppInputController`:
   - **hospedado**: `MotionEvent` com `setDisplayId` do display do app e
     `InputManager#injectInputEvent(event, INPUT_EVENT_INJECTION_MODE_ASYNC)`;
   - **espelho**: acessibilidade (`dispatchGesture`) sobre a tela real do aparelho.
4. Teclas da barra (voltar/início/recentes) e o teclado VR entram por `text`/`key`, com o mesmo
   roteamento.
5. Um ponto que cai nas faixas de letterbox é descartado: nunca é encaminhado um toque para
   fora da área visível do app (alguns apps tratam isso como gesto de sistema).

## Redimensionar sem quebrar o app

A regra é simples de enunciar e foi a que exigiu mais cuidado: **a sessão nunca declara um tamanho que
o display não tenha**. A imagem e o mapeamento do toque saem do tamanho declarado; um número
inventado significa imagem cortada e toque no lugar errado — exatamente o "quebrou quando
redimensionei".

O contrato, agora explícito entre as duas metades:

* `resizeDisplay` **devolve a resposta** (`String`: `null` = aplicado). Antes era `void`: uma recusa
  ficava invisível e a sessão continuava acreditando no tamanho novo.
* `AppSessionManager.windowResized` apenas *pede*: guarda o tamanho desejado em
  `AppSession.pendingResize` e chama o host. `session.width/height/density` só mudam em
  `resizeApplied`, quando o display confirma.
* `resizeFailed` mantém o tamanho real e marca `resizeRefused`: o app não é mais interrompido e a
  imagem passa a ser encaixada dentro da janela (o mesmo caminho de letterbox que já existia, com o
  toque descartado nas tarjas). A janela continua funcionando — não vira erro.
* Troca de forma só chega ao display acima de **12%** de diferença (`RESIZE_THRESHOLD`): arrastar a
  alça não dispara uma avalanche de `onConfigurationChanged`.
* Redimensionar **nunca** reinicia a atividade: o caminho é `VirtualDisplay.resize()` no serviço
  shell (e `resize` do display de captura no espelho), com `SurfaceTexture#setDefaultBufferSize`
  junto, mais a densidade preservada — o app reflui, não recomeça.
* App que não aceita ser redimensionado continua rodando: o framework o letterboxa **dentro** do
  display e a escala/tradução do toque é feita pela plataforma; a janela só mostra a imagem encaixada.

## Shizuku: por que é necessário e como fica claro na UI

Criar um display em que **outro** app pode rodar, iniciar uma atividade nele e injetar eventos
exige privilégios que um app comum não tem, com ou sem `MediaProjection`. O NextVR usa um
*user service* do Shizuku (`Shizuku.bindUserService`), que roda com o UID do `shell` (2000) —
o mesmo `adb shell`, sem root. Foi por isso que o caminho escolhido é o mesmo que o PhoneXR usa:
é o único caminho não-root conhecido que faz a coisa real.

A biblioteca mostra a linha do Shizuku com o estado exato e o próximo passo:

| Situação | O que a UI diz | O que o usuário faz |
| --- | --- | --- |
| Não instalado | “O Shizuku não está instalado” | instalar o Shizuku (ou Sui) |
| Instalado, parado | “está parado: inicie por ADB ou depuração sem fio” | `adb shell sh /sdcard/Android/data/moe.shizuku.privileged.api/start.sh` |
| Sem permissão | “falta permitir o NextVR no Shizuku” + botão | tocar em **Permitir** (diálogo do Shizuku) |
| Negado | “o acesso ao Shizuku foi negado” | reabrir a permissão no app do Shizuku |
| Versão antiga | “é antigo demais para esta versão” | atualizar o Shizuku |
| Serviço caiu | “Reconectando ao Shizuku” | nada: o app reconecta sozinho |

Depois de reiniciar o aparelho, o Shizuku fica parado de novo (isso é do Shizuku, não do NextVR):
a linha volta para “está parado” e os apps já abertos são encerrados com uma mensagem, em vez de
ficarem como janelas pretas.

## Sem Shizuku: o que ainda funciona

- **Espelho da tela** com consentimento do Android: imagem real, entrada pelo serviço de
  acessibilidade (que o usuário habilita em Configurações → Acessibilidade).
- **Espelhar um app específico**: quando o serviço shell não está disponível, cada tile da biblioteca
  ganha o botão *Espelhar*. Ele traz o app para a tela do celular com API pública
  (`getLaunchIntentForPackage` + `startActivity`, a mesma coisa que tocar no ícone) e abre a captura
  — no Android 14+ o diálogo do sistema permite escolher **aquele** app. É o mais próximo de "abrir o
  app numa janela" que existe sem privilégio, e a janela continua dizendo `ESPELHO DA TELA`, porque
  é o que é.
- A biblioteca, os ícones, o estado dos apps e a organização das janelas.
- Um app que falhou pode ser tentado de novo direto no tile (antes, um tile com sessão falhada ficava
  inerte e só outro app “destravava” a lista).
- Abrir um app **hospedado** não funciona: a janela explica o motivo e aponta o passo que falta em
  vez de falhar em silêncio.

## Compatibilidade real, versão por versão

Duas arquiteturas, duas exigências diferentes — e a resposta muda com a versão do Android:

| Android | App hospedado (`APP DO ANDROID`, Shizuku) | Espelho (`ESPELHO DA TELA`) | Toque no espelho |
| --- | --- | --- | --- |
| 8.0–9 (26–28) | **não** — o *user service* do Shizuku só existe a partir do Android 11 (abaixo disso o Shizuku roda em modo "pre-v11", que este app recusa com mensagem, igual à PhoneXR) | sim | `dispatchGesture` (API 24+) |
| 10 (29) | não (mesmo motivo) | sim, e **obrigatório** ter o serviço em primeiro plano (`mediaProjection`) | sim |
| 11–12 (30/31) | sim | sim | sim |
| 12L–13 (32/33) | sim, com as flags `TRUSTED | OWN_DISPLAY_GROUP | ALWAYS_UNLOCKED` | sim | sim |
| 14 (34) | sim, mais `OWN_FOCUS`; o app roda em `ActivityOptions`/task própria no display | sim; o diálogo do sistema permite escolher **um app só**, e `onCapturedContentResize` reajusta a tela do espelho | sim |
| 15/16 (35+) | sim | sim | sim |

Duas exigências que quebram o caminho sem Shizuku em aparelho — e que estavam ausentes até agora:

1. **Serviço em primeiro plano com tipo `mediaProjection`.** Desde o Android 10
   (`MediaProjectionManagerService`, `MediaProjection.start()`) uma projeção lança
   `SecurityException("Media projections require a foreground service of type ...")` para qualquer
   app com `targetSdk >= 29` que não tenha esse serviço **já em execução**. O NextVR tem
   `targetSdk 35`, portanto isso valia em **todo** aparelho moderno: o espelho simplesmente não
   iniciava. `AppMirrorService` entra em execução antes do diálogo de consentimento e a notificação
   dele é a indicação honesta de que a tela está sendo capturada.
2. **Visibilidade de pacotes (Android 11+).** Sem o intent `MAIN + LAUNCHER` declarado em
   `<queries>`, `queryIntentActivities()` devolve apenas alguns pacotes de sistema e a biblioteca
   aparece vazia em aparelho real (é o motivo nº 1 de launchers de terceiros falharem no 11+).
   `QUERY_ALL_PACKAGES` continua **não** sendo usado — ele é restrito por política do Play e não é
   necessário.

Outras notas de compatibilidade:

* O `AndroidManifest` pede `FOREGROUND_SERVICE_MEDIA_PROJECTION` (obrigatória a partir do 14) e
  `POST_NOTIFICATIONS` apenas para a notificação aparecer no 13+ (não é solicitada em runtime: sem
  ela a captura funciona e o sistema só oculta a notificação).
* No Android 14+ o `MediaProjection` exige `registerCallback` **antes** de `createVirtualDisplay`;
  a ordem está no código e no teste.
* Fabricantes (MIUI, EMUI, One UI): serviços em primeiro plano e o Shizuku podem ser encerrados por
  economia de bateria. O app reconecta e explica; em MIUI é preciso liberar "iniciar
  automaticamente". Nada disso é contornado por APIs privadas.

## DeX, anticheat e Play Protect: por que este caminho não põe a conta em risco

A preocupação é legítima e a resposta está na arquitetura, não em promessas:

* **É o modelo do DeX/desktop mode, não o de um "hack de outro app".** O NextVR cria *displays
  virtuais* e coloca o app neles — a mesma operação que o modo desktop da Samsung faz (um display
  lógico, um `ActivityOptions.setLaunchDisplayId`, um task próprio). O app hospedado roda **normal**:
  mesmo APK, assinatura intacta, nenhum código carregado em processo alheio.
* **Não há root, não há Magisk, não há `system_server`.** O privilégio é um *user service* do Shizuku
  rodando como o usuário `shell` (2000) — o mesmo `adb shell` que qualquer desenvolvedor usa. Quem
  concede é o usuário, no app do Shizuku, e é revogável a qualquer momento.
* **Não há hook, patch, injeção de `.so`, `ptrace`, `LD_PRELOAD` nem modificação de APK.** Nada é
  instalado ou alterado em outros apps. Compare com o que **não** foi copiado da PhoneXR: ela traz
  `ApkPatcher`/`DexPatcher`, `InternalInstaller`, `REQUEST_INSTALL_PACKAGES`,
  `REQUEST_DELETE_PACKAGES` e reescreve o AndroidManifest de outros apps para VR — isso sim é
  alteração de app de terceiros, e ficou de fora deste PR por decisão explícita.
* **Não há sobreposição (overlay) nem leitura da tela de outros apps.** O NextVR nunca desenha por
  cima de um app de terceiros: o app vai para um display que pertence a este app, e o NextVR desenha
  a *própria* composição. A captura (MediaProjection) existe apenas no caminho do espelho, com
  consentimento do sistema, indicador de captura visível e `FLAG_SECURE` respeitado.
* **Nenhuma entrada é enviada a um app sem o usuário estar vendo e mirando nele**: o gesto do
  controle só é traduzido no display que o NextVR criou (ou encaminhado pela captura consentida).
* **Anticheat**: como o jogo roda no display virtual com a mesma assinatura e sem instrumentação, o
  que ele vê é uma tela a mais no aparelho — não um ambiente adulterado. Jogos com restrição
  anti-emulação/anti-captura podem recusar rodar em display virtual ou aparecer preto com
  `FLAG_SECURE`; isso é **respeitado**, não contornado. Se algum anticheat específico incomodar,
  documente o caso: nenhuma contramedida será adicionada.
* **Play Protect / Play Store**: o app não pede nenhuma permissão da lista restrita
  (`QUERY_ALL_PACKAGES`, `SYSTEM_ALERT_WINDOW`, `INJECT_EVENTS`, `PACKAGE_USAGE_STATS`,
  `READ_LOGS`, `REQUEST_INSTALL_PACKAGES`…). Há um **teste** que falha se alguém acrescentar uma
  dessas sem discutir — a lista está em `tests/android-app-windows.test.mjs`
  ("the app declares no permission that would let it hook or overlay another app").
* O único ponto a vigiar, por honestidade: o Shizuku depende de ADB/depuração sem fio no
  (re)início do aparelho, e a própria Play Store não distribui esse fluxo. Isso é uma limitação de
  conveniência, não uma violação — o app continua instalável e funcional (com o espelho) sem ele.

## Limitações conhecidas (documentadas, não silenciadas)

- **Sem Shizuku não há app hospedado.** Não existe API pública que crie um display utilizável por
  outro app e injete eventos nele sem privilégio (o próprio comentário de classe da PhoneXR diz
  isso). O espelho — agora com o atalho *Espelhar* em cada tile — é o substituto honesto, e é
  apresentado como espelho.
- **Espelho é espelho do que está na tela do celular, não do app.** Quem espelha vive de "traga o app
  para frente e olhe": trocar de app no celular muda o que a janela mostra. No Android 14+ dá para
  escolher um app só no diálogo do sistema; abaixo disso, não — é limite do Android.
- **O serviço de acessibilidade é opcional e continua opcional**: sem ele o espelho mostra a imagem e
  não recebe toque. Ele lê a árvore de janelas apenas para escrever texto no campo focado; não
  navega, não clica e não faz nada por conta própria.
- **`getRunningTasks` é inútil para a maioria dos apps** (restrito desde o Android 5). O estado
  “rodando” vem do `pidof` executado pelo processo `shell`; sem Shizuku, o indicador reflete a
  sessão do NextVR, não a do sistema.
- **Captura não é universal**: apps com `FLAG_SECURE` (DRM, bancos, alguns campos de senha) ficam
  pretos no espelho. O app não contorna isso — é uma proteção do sistema.
- **App escolhido no diálogo de captura (Android 14+)**: o toque encaminhado pela acessibilidade
  usa a suposição de que a área capturada coincide com a tela. Com um app em tela cheia funciona;
  com divisão de tela, o toque pode errar. A janela do espelho avisa quando a proporção capturada
  difere da proporção da tela.
- **Orientação**: um app que força retrato roda normal dentro do display virtual (o Android gira a
  tela do app); a imagem é reajustada e o toque é desfeito pela mesma rotação. Se o compositor e o
  framework discordarem em algum aparelho, o toque fica girado — é o item 7 da conferência em
  aparelho.
- **Apps que exigem hardware específico** (câmera de sistema, Bluetooth, NFC, telefone), apps de
  bancos com atestação, e apps que só rodam em tela principal podem recusar-se a rodar no display
  virtual. A janela mostra o erro devolvido por `am`.
- **Um app por janela, três janelas por vez** (limite de sessões; o quarto app fecha o menos
  recente, como o arco já fazia com 5 janelas de HTML).
- **Gravação/DRM/segurança**: nada é burlado, nada é acessado fora das APIs públicas e do
  privilégio que o usuário concedeu explicitamente.

## Desempenho e recursos

- Cada app hospedado tem sua própria tela; o tamanho é derivado da caixa da janela
  (`AppDisplaySpec`: 480–1080 px de altura, densidade 160–320) e o `SurfaceTexture` tem
  `setDefaultBufferSize` do tamanho real, então nada é escalado na CPU.
- Minimizar destaca a `Surface` do display (`setDisplaySurface(displayId, null)`): o app continua
  vivo, mas **para de produzir quadros**. Restaurar religa a mesma superfície — nenhum app é
  reiniciado, nenhuma textura é recriada.
- Redimensionar só chega ao display quando a mudança passa de 12% (`AppDisplaySpec.RESIZE_THRESHOLD`),
  para não provocar `configuration change` a cada tremida da mão.
- Fechar libera: display, `Surface`, entrada do atlas, tarefa do app (o display é criado com
  `DESTROY_CONTENT_ON_REMOVAL`) e a entrada no histórico de recentes do sistema.
- O espelho tem o lado maior limitado a 1600 px e a densidade limitada a 320.
- A cada 2,5 s o processo `shell` verifica se o app continua vivo; se morreu, a janela vira um
  estado de erro com o motivo, em vez de congelar o último quadro.

## Testes

Automatizados (rodam no CI, sem aparelho):

- `tests/app-window-fit.test.mjs` — o ajuste da imagem dentro da janela e o descarte de toques no
  letterbox (os mesmos números do teste Java correspondente).
- `tests/android-app-windows.test.mjs` — o contrato entre as duas metades: o vocabulário de
  comandos, os tokens de estado, o prefixo `app:<pacote>`, a rota `/apps/<ícone>`, o manifesto do
  Shizuku, a acessibilidade e a origem única dos limites de tamanho. Na rodada 2 ganhou cinco blocos
  que existem para impedir a volta de bugs que **só aparecem em aparelho**: o serviço em primeiro
  plano antes do diálogo de consentimento, `registerCallback` antes de `createVirtualDisplay`, a
  visibilidade de pacotes (`MAIN + LAUNCHER` em `<queries>`), o caminho *Espelhar* ponta a ponta e a
  lista de permissões proibidas (a mesma que sustenta a seção de anticheat acima).
- `nextvr-android/src/test/java/…/AppSessionManagerTest.java` — o teste do redimensionamento agora
  prova as duas metades: o tamanho só muda depois de `resizeApplied`, e uma recusa (`resizeFailed`)
  mantém o tamanho real, marca `resizeRefused` e não deixa o app em erro.
- `nextvr-android/src/test/java/com/nextvr/app/apps/*Test.java` — `AppLibrary`, `AppSession`,
  `AppSessionManager` (com um `Host` falso), `AppDisplaySpec`, `AppInputGeometry`, `ShizukuStatus`.
- `tools/check-java-refs.py` — como este ambiente não tem JDK, este script confere chamadas em
  tipos próprios, a implementação completa do AIDL, **local sombreando outro local** e **chamada em
  receptor de AIDL fora de `try`** (o `RemoteException` que o javac exige tratar). Roda no CI junto
  dos testes, e `--self-test` fixa as duas regras com seis casos sintéticos (`tests/java-refs-tool.test.mjs`
  roda o mesmo self-test aqui).
- `tests/reference-ui.test.mjs` — o teste de integração em Chromium termina com o bloco das janelas:
  biblioteca, ícone, `{cmd:'open'}`, barra do app, recorte do shader igual ao `data-uv`, pinça da mão
  entregando toques em `app:<pacote>`, minimizar sem fechar, fechar mandando `{cmd:'close'}` e o texto
  de falha do Shizuku. Este teste **pula** em ambientes sem Chromium e roda no CI.

Estado no CI (verde, `06fdca5`/`0be7929`): Node **74/74**, testes JVM **120 em 18 classes, 0 falhas**
(47 nas seis classes de `apps/`), bundle conferido por `git diff --exit-code`. O APK de depuração sai
do próprio job de build e é publicado no branch `apk-dist` como `dist/app-debug.apk` (~46 MB,
`versionCode` 4); é essa a build para instalar no aparelho.

Só pode ser validado em aparelho (e é o que o PR reporta como não validado):

1. Abrir um app real e ver a interface dele na janela.
2. Tocar em um app com a mão e ver a reação dele (não do NextVR).
3. Minimizar/restaurar/redimensionar/fechar com o app rodando — e, no redimensionamento, conferir se
   a imagem continua preenchendo a janela e se o toque acerta o mesmo botão depois de redimensionar
   (é o par imagem/toque que o contrato de confirmação acima protege);
4. Continuar interagindo com a VR (dock, arco, teclado) com um app aberto.
5. Shizuku ativo, inativo, não autorizado e derrubado no meio do uso.
6. Espelho com e sem acessibilidade ativa, e o atalho *Espelhar* de um tile com o Shizuku parado
   (o caminho sem privilégio, que é o que roda no Android 14 sem Shizuku).
7. Rotação: app retrato e app paisagem, toque em cada canto.
8. Medir latência captura → quadro na janela e gesto → reação no app.

## Arquivos principais

- `nextvr-android/src/main/aidl/com/nextvr/app/apps/IDisplayService.aidl`
- `nextvr-android/src/main/java/com/nextvr/app/apps/` (as classes da tabela acima)
- `nextvr-android/src/main/java/com/nextvr/app/NextVrActivity.java` (ponte `appsLibrary`/`appsCommand`,
  `AppSurfaceHost`, consentimento de captura)
- `web/src/android-apps.js`, `web/src/display-fit.js`, `web/src/atlas.js`, `web/src/windows.js`
- `nextvr-android/src/main/res/xml/nextvr_accessibility_service.xml`
