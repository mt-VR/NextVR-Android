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

## Rodada 3 — o que mudou depois do teste no aparelho

O relato foi direto: **“espelhamento não suportado”** e nenhum app abrindo numa janela. A causa não
era uma API faltando, era um caminho único:

1. A decisão de *como* abrir o app estava no shell, e o caminho hospedado era o único que o clique do
   tile pedia. Sem Shizuku, `start()` respondia `shizuku_unavailable` e a janela ficava vazia.
2. A única alternativa (a captura) existia escondida numa **página separada** de apps Android,
   alcançável por um botão *Espelhar* em cada tile, atrás de um *tile* na dock que ninguém sabia que
   existia. Ou seja: a função existia, o caminho até ela não.
3. A captura era tratada como um modo especial (“tela do celular”), com um pseudo-pacote
   `nextvr.screen` — não como *o app que o usuário pediu*, capturado.

Nesta rodada a arquitetura passou a ser: **o usuário pede um app, o lado nativo escolhe o
mecanismo**. Nada mais é escolha do usuário, e nenhum dos três mecanismos é apresentado como se
fosse outro:

| Mecanismo | Quando é usado | O que o usuário vê |
| --- | --- | --- |
| **Execução nativa da atividade** | sempre que um app precisa rodar em algum lugar: abrir no celular, ou subir o app no display hospedado | o app real, na tela do celular ou no display |
| **Janela de desktop (display próprio)** | quando o serviço shell está disponível (`canHost()`) | rótulo `APP DO ANDROID`; é a atividade real em um display dedicado |
| **Captura de tela** | quando não há serviço shell | rótulo `ESPELHO DA TELA`; é o vídeo da tela do celular com o app nela, e o toque vai pela acessibilidade |

### Por que a captura é o caminho sem privilégio (e o AOSP confirma)

O ponto de dúvida era se a atividade de *outro* processo pode ser iniciada em um display criado
pelo app. A resposta está em `services/core/java/com/android/server/wm/ActivityTaskSupervisor.java`
(`isCallerAllowedToLaunchOnDisplay`, Android 14.0.0_r1):

* display ausente/removido ou `FLAG_REAR` → recusa;
* **display não confiável** (criado por um app comum): exige `FLAG_ALLOW_EMBEDDED` na atividade de
  destino **e** a permissão `ACTIVITY_EMBEDDING` (ou o UID de quem chama já estar lá) — nada disso é
  obtenível por um app comum para a atividade de terceiros;
* display **público e confiável** → aceito (para o dono do display, e para qualquer um quando o
  usuário está visível nele).

Daí a separação exata: um display **confiável** aceita qualquer atividade e só o `shell` pode criá-lo;
um display criado pelo próprio app **não** hospeda app de terceiros — é um display privado, bom para
o *próprio* conteúdo (é o que o `WebSurface` já faz com o WebView). A captura é o único mecanismo que
mostra outro app numa janela sem identidade privilegiada, e é por isso que ela ficou, com o rótulo
certo.

### O que mudou no código

* `AppWindowController.open()` decide uma vez: `canHost()` → display próprio; senão, captura do app.
  `MIRROR_PACKAGE` e o campo `focus` **deixaram de existir**; a captura é a sessão do próprio app
  (o mesmo `pkg` do tile, da barra e da dock), e a superfície continua sendo `app:<pacote>`.
* Uma captura por vez (`capture_replaced`): o Android dá um consentimento por projeção; a janela que
  está sendo substituída fecha em vez de ficar congelada no último quadro.
* Trocar de mecanismo para o mesmo app fecha a sessão antiga (`mode_changed`), senão a sessão
  existente responderia o próximo toque com o mecanismo com que foi criada.
* `requestCapture(pkg)` traz o app para a tela do celular **antes** do diálogo de consentimento (o
  usuário autoriza a captura *daquele* app), e depois sobe o serviço em primeiro plano — a ordem que
  o Android 10+ exige para o `MediaProjection` existir.
* `launchOnDisplay()` (`ActivityOptions.setLaunchDisplayId`) ficou como **segunda** tentativa do
  caminho hospedado: é API pública suportada, mas um `startActivity` recusado dentro do sistema não
  devolve erro ao chamador — a atividade simplesmente vai para a tela do celular. Por isso o `am
  start` do serviço shell vem primeiro (ele devolve o texto do erro) e o backend usado é publicado no
  estado (`launch`).
* Guarda de display vazio: uma janela hospedada sem nenhum quadro depois de 15 s (o
  `SurfaceTexture.getTimestamp()` continua 0) vira falha com `display_empty` e texto, em vez de
  ficar preta para sempre.
* Todas as falhas da captura liberam a **projeção inteira** (display, callback e serviço), não só a
  notificação: uma projeção viva com um consentimento já usado faria a próxima tentativa pular o
  diálogo e falhar de novo.

### Ícones e interface

* **Ícones reais**: `AndroidAppManager` grava o ícone do `PackageManager` em PNG 144 px
  (`ICON_PX`), com nome derivado de `pacote + versionCode + componente` — atualizar o app gera outro
  arquivo, então o cache do WebView (`max-age=86400`) nunca serve o ícone velho.
* **Sempre visíveis**: o lado nativo publica uma revisão da biblioteca (`libraryVersion()`), que sobe
  quando um lote de ícones termina; o shell reconhece (`library` no JSON de estado) e relê a grade.
  Antes, a grade era montada uma vez, durante a renderização, e os tiles ficavam com as iniciais para
  sempre. Se um ícone não puder ser lido, o tile mostra as iniciais do app (`onerror` → `.noicon`) —
  nunca uma imagem quebrada.
* **Sem página separada**: os apps instalados são tiles do menu de aplicações que já existia — mesma
  grade, mesma busca, mesma ordenação, mesma `data-*` de clique. A entrada `data-nav="android"` da
  trilha, o tile da dock e o botão *Espelhar* foram removidos, junto com o CSS `.az-*`/`.az-mirror`.
  O que sobrou de específico é uma única linha de estado, e só enquanto o serviço shell não está
  pronto: ela diz qual mecanismo o toque vai usar e como chegar no outro.
* **Falha com saída**: quando a janela não pôde ser preenchida (captura recusada, display vazio,
  serviço caindo entre a checagem e a criação), o aviso da janela oferece “Abrir no celular” — o
  caminho que não precisa de privilégio nenhum — em vez de terminar num beco sem saída.

### Limites que continuam valendo

* Escolher **um app** na captura só existe do Android 14 em diante; até o 13 a captura é a tela
  inteira. Por isso o app é trazido para a frente antes do diálogo em todas as versões.
* No modo captura o toque depende do serviço de acessibilidade habilitado; sem ele a imagem aparece,
  mas a mão não alcança o app (a linha de estado diz isso com essas palavras).
* Um app protegido contra captura (`FLAG_SECURE`) aparece preto no modo captura; alguns jogos com
  anticheat se comportam assim, e é o comportamento correto do Android — nada aqui tenta contornar.

## As duas arquiteturas, sempre separadas

| | **App hospedado** (`display`) | **Espelho da tela** (`mirror`) |
| --- | --- | --- |
| O que a janela mostra | o app executando em um **display virtual próprio**, criado por um serviço privilegiado | o que a **tela do celular** está mostrando, capturado por `MediaProjection` |
| O app está embutido? | **sim**: é a própria atividade em uma tela dedicada | **não**: é uma cópia do vídeo da tela |
| Como o app é iniciado | `am start --display <id>`; se ele falhar, `ActivityOptions.setLaunchDisplayId` (API pública) | automaticamente, ao abrir a janela: API pública (`getLaunchIntentForPackage` + `startActivity`) traz o app para a tela e a captura começa depois do consentimento |
| Toque | injetado **no display do app** (`InputEvent#setDisplayId` + `InputManager#injectInputEvent`) | gesto encaminhado à tela real (acessibilidade) |
| Precisa de quê | Shizuku ativo e autorizado | consentimento de captura do Android (e acessibilidade, para o toque) |
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

- **Captura da tela com o app nela**, sem botão nenhum: tocar no tile já faz isso quando
  `canHost()` é falso. O app é trazido para a tela do celular com API pública
  (`getLaunchIntentForPackage` + `startActivity`, a mesma coisa que tocar no ícone) e a captura abre
  depois do consentimento — no Android 14+ o diálogo do sistema permite escolher **aquele** app. É o
  mais próximo de "abrir o app numa janela" que existe sem privilégio, e a janela diz
  `ESPELHO DA TELA`, porque é o que é. O toque vai pelo serviço de acessibilidade (que o usuário
  habilita em Configurações → Acessibilidade); sem ele a imagem aparece e a linha de estado avisa.
- O menu de aplicações com os ícones reais, o estado dos apps e a organização das janelas.
- Um app que falhou pode ser tentado de novo direto no tile (antes, um tile com sessão falhada ficava
  inerte e só outro app “destravava” a lista).
- Um app **hospedado** não abre sem o serviço: a janela explica o motivo e oferece “Abrir no
  celular”, em vez de falhar em silêncio. O toque no tile nunca termina em “Shizuku não está
  disponível” sem uma janela: a decisão do mecanismo acontece antes de a janela ser criada.

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
- `tests/android-app-windows.test.mjs` (17 casos) — o contrato entre as duas metades: o vocabulário
  de comandos, os tokens de estado, o prefixo `app:<pacote>`, a rota `/apps/<ícone>`, o manifesto do
  Shizuku, a acessibilidade e a origem única dos limites de tamanho. Os blocos que existem para
  impedir a volta de bugs que **só aparecem em aparelho**: o serviço em primeiro plano antes do
  diálogo de consentimento, `registerCallback` antes de `createVirtualDisplay`, a visibilidade de
  pacotes (`MAIN + LAUNCHER` em `<queries>`), a lista de permissões proibidas (a mesma que sustenta a
  seção de anticheat acima) e, na rodada 3, quatro novos: a decisão única de mecanismo no lado
  nativo (`canHost`), a revisão de ícones que faz a grade se repintar, a ausência de
  `MIRROR_PACKAGE`/`focus`/botão *Espelhar* e a integração dos apps instalados no menu que já existia
  (sem trilha, sem tile na dock, sem página).
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
- `tests/reference-ui.test.mjs` — o teste de integração em Chromium termina com o bloco das janelas.
  Na rodada 3 ele passou a abrir o menu de aplicações pelo lançador da dock e a exigir: nenhuma
  entrada de trilha para uma página de apps Android, os apps instalados na **mesma** grade dos apps
  do NextVR, o ícone real carregado de `/apps/<arquivo>.png`, as iniciais como reserva quando o ícone
  não veio, nenhum botão de espelhar em tile, o selo do sistema, a linha de estado aparecendo sem o
  serviço e sumindo com ele, `{cmd:'open'}` sem mecanismo escolhido pelo shell, o selo da janela
  seguindo o modo (`android app` × `screen mirror`), o contador na dock, o botão “Abrir no celular”
  mandando `{cmd:'phone'}`, o recorte do shader igual ao `data-uv`, a pinça da mão entregando toques
  em `app:<pacote>`, minimizar sem fechar e fechar mandando `{cmd:'close'}`. Este teste **pula** em
  ambientes sem Chromium e roda no CI.

Estado no CI (verde, rodada 3): Node **81/81** (incluindo o teste de integração em Chromium, que
aqui roda de verdade), testes JVM **121 em 18 classes, 0 falhas** (48 nas seis classes de `apps/`),
bundle conferido por `git diff --exit-code`. O APK de depuração sai do próprio job de build e é
publicado no branch `apk-dist` como `dist/app-debug.apk` (48.021.916 bytes,
`md5 a83c09f86607d006369e8caa2922e240`, `versionCode` 4); é essa a build para instalar no aparelho.

Só pode ser validado em aparelho (e é o que o PR reporta como não validado). O roteiro completo, na
ordem de execução e com o resultado esperado de cada passo, está em `docs/TESTE-EM-APARELHO.md`; a
lista abaixo é o resumo:

1. Abrir um app real e ver a interface dele na janela.
2. Tocar em um app com a mão e ver a reação dele (não do NextVR).
3. Minimizar/restaurar/redimensionar/fechar com o app rodando — e, no redimensionamento, conferir se
   a imagem continua preenchendo a janela e se o toque acerta o mesmo botão depois de redimensionar
   (é o par imagem/toque que o contrato de confirmação acima protege);
4. Continuar interagindo com a VR (dock, arco, teclado) com um app aberto.
5. Shizuku ativo, inativo, não autorizado e derrubado no meio do uso.
6. Captura com e sem acessibilidade ativa, e a captura automática de um tile com o Shizuku parado
   (o caminho sem privilégio, que é o que roda no Android 14 sem Shizuku), incluindo negar o diálogo
   e usar o botão “Abrir no celular”.
7. Rotação: app retrato e app paisagem, toque em cada canto.
8. Medir latência captura → quadro na janela e gesto → reação no app.

## Arquivos principais

- `nextvr-android/src/main/aidl/com/nextvr/app/apps/IDisplayService.aidl`
- `nextvr-android/src/main/java/com/nextvr/app/apps/` (as classes da tabela acima)
- `nextvr-android/src/main/java/com/nextvr/app/NextVrActivity.java` (ponte `appsLibrary`/`appsCommand`,
  `AppSurfaceHost`, consentimento de captura)
- `web/src/android-apps.js`, `web/src/display-fit.js`, `web/src/atlas.js`, `web/src/windows.js`
- `nextvr-android/src/main/res/xml/nextvr_accessibility_service.xml`
