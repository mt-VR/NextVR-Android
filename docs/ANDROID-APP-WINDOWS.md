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
| **Janela de desktop (display próprio)** | quando o Shizuku está autorizado (`AppHostPolicy` = `hosted`) | rótulo `APP DO ANDROID`; é a atividade real em um display dedicado |
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
* `launchOnDisplay()` (`ActivityOptions.setLaunchDisplayId`) existiu como **segunda** tentativa do
  caminho hospedado e foi **removida na rodada 4**: um `startActivity` recusado dentro do sistema não
  devolve erro ao chamador — a atividade simplesmente vai para a tela do celular —, então o
  "fallback" produzia exatamente o bug relatado (o app abrindo no celular) sem dizer nada. Só o
  `am start --display` do serviço shell fica, porque ele devolve o texto do erro, e o backend usado é
  publicado no estado (`launch`).
* Guarda de display vazio: uma janela hospedada sem nenhum quadro depois de 15 s (o
  `SurfaceTexture.getTimestamp()` continua 0) vira falha com `display_empty` e texto, em vez de
  ficar preta para sempre.
* Todas as falhas da captura liberam a **projeção inteira** (display, callback e serviço), não só a
  notificação: uma projeção viva com um consentimento já usado faria a próxima tentativa pular o
  diálogo e falhar de novo.

### Ícones e interface

* **Ícones reais**: `AndroidAppManager` grava o ícone do `PackageManager` em PNG 144 px
  (`ICON_PX`), com nome derivado de `pacote + versionCode + componente` — atualizar o app gera outro
  arquivo, então o cache do WebView (`max-age=86400`) nunca serve o ícone velho. Cada ícone é uma
  chamada direta (`getActivityIcon(component)`), não uma consulta de pacote por app, e a biblioteca
  é aquecida no boot (`warmIcons()`), para o primeiro paint já ter os ícones em vez de preenchê-los
  enquanto o usuário olha para o menu.
* **Sempre visíveis**: o lado nativo publica um contador de lotes (`iconEpoch()`), que sobe quando um
  lote de ícones termina e viaja no JSON de estado (`icons`); quando ele muda, o shell descarta a
  lista em cache e relê a grade. Antes, a grade era montada uma vez durante a renderização e ficava
  com as iniciais para sempre — era exatamente o relato "nenhum ícone aparece". O arquivo que ainda
  não existe responde 404 **sem cache** (`no-store, must-revalidate`), para a próxima leitura
  encontrá-lo; e se um ícone não puder ser lido, o tile mostra as iniciais do app (`onerror` →
  `.noicon`) — nunca uma imagem quebrada. O ícone é desenhado em 52 px, a mesma caixa dos logos dos
  apps da web na grade.
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

## Rodada 4 — por que o app ia para a tela do celular (causa raiz, não sintoma)

O relato foi: tocar num app leva o app para a tela do celular e pede captura de tela, e "não deveria
nem precisar pedir para compartilhar a tela". Estava certo em cada palavra, e a causa não era
permissão faltando nem limite do Android: era **uma pergunta feita na hora errada**, em três lugares.

1. `ShizukuManager.status()` respondia `SERVICE_DOWN` enquanto um bind estava em curso (`binding ==
   true` e `service == null`). O bind do Shizuku é assíncrono: o processo `shell` é criado e o APK é
   carregado nele, o que leva um instante — e é exatamente nesse instante que o estado era lido.
2. `AppWindowController.onShizukuChanged()` reagia a `SERVICE_DOWN` com `shizuku.unbind()`. Ligando
   os dois: a resposta a "acabei de pedir o serviço" era **desfazer o pedido**. Pior: `SERVICE_DOWN`
   também é o estado de um Shizuku recém-iniciado (serviço ainda não pedido), então o cancelamento
   acontecia também no primeiro toque. Na prática o serviço shell quase nunca subia.
3. `AppDisplayController.canHost()` perguntava `shizuku.service() != null` no momento do toque — o
   mesmo instante transitório —, então o toque era encaminhado para a captura. E a captura **por
   definição** traz o app para a tela do celular e **por exigência do Android** pede consentimento
   (e, no Android 10+, precisa do serviço em primeiro plano antes do `getMediaProjection` — sem ele o
   usuário vê a `SecurityException` do `MediaProjectionManagerService`).

O agravante era o "fallback": `launchOnDisplay()` mandava a atividade para a tela do celular sem
devolver erro nenhum — o usuário via o app abrir no telefone e nenhuma explicação na janela.

### A pergunta certa, e onde ela mora agora

A decisão agora é **do estado da autorização**, nunca de "está ligado neste instante", e mora numa
classe só (`AppHostPolicy`), usada pelo toque, pelo comando da shell e pela mensagem da tela — não há
como os três discordarem:

| `ShizukuStatus.State` | Rota | O que acontece ao tocar no app |
| --- | --- | --- |
| `READY` (autorizado e ligado) | `hosted` | display próprio criado pelo serviço shell; **sem diálogo, sem app no celular, sem captura** |
| `SERVICE_DOWN` (autorizado, serviço ainda não subiu) | `hosted` | idem: o bind é (re)feito e a janela espera o serviço, com "conectando ao serviço shell" no lugar do spinner mudo |
| `NEEDS_PERMISSION` | `permission` | abre **um** diálogo (o do Shizuku) e mantém a sessão hospedada esperando **até 60 s** — a espera é do usuário lendo o diálogo, não do serviço; concedido, o app abre na janela; recusado, a janela diz "autorize o NextVR dentro do Shizuku" (e, se o Shizuku não mostrar mais o diálogo, diz para abrir o app dele e permitir na lista) |
| `NOT_INSTALLED`, `NOT_RUNNING`, `OLD_VERSION`, `DENIED`, `UNKNOWN` | `capture` | o único caminho que resta: o app vai para a tela do celular porque *é ela* que a janela captura, com o consentimento que o Android exige para capturar |

### O que mudou no código (rodada 4)

* **`ShizukuManager`**: `bind()` pode ser chamado de qualquer thread (o `bindUserService` é postado na
  main, onde o Shizuku entrega os callbacks); `awaitService(20 s)` substitui a pergunta "está ligado
  agora?" por "espera até 20 s, no thread de trabalho da janela"; `rebind()` derruba um serviço que
  parou de responder; `onBindingDied`/`onNullBinding` transformam "o serviço não subiu" em
  `bindError` legível em vez de spinner infinito; `capabilities()` é cacheado por 2 s e limpa o
  serviço quando a chamada falha; `status()` só reporta `SERVICE_DOWN` quando **não há bind em
  curso** e o serviço já existiu (ou falhou); `installed || alive` resolve o caso do Sui/root, onde o
  pacote do gerenciador não tem o nome que o NextVR conhece.
* **`AppDisplayController`**: `canHost()` → `route()`; a criação do display espera o serviço
  (`SERVICE_WAIT_MS = 20 s`) em vez de desistir; o `am start --display` é tentado **3 vezes** com
  400 ms entre elas e o erro verbatim fica em `lastLaunchError`; a janela vazia deixa de ser um preto
  mudo: o serviço shell é perguntado onde o app foi parar (`displayReport`) e a resposta distingue
  "rodando mas não desenhando" de "não subiu"; a captura confere `AppMirrorService.isRunning()` antes
  de pedir consentimento, e as mensagens carregam o texto integral da exceção.
* **`IDisplayService`** ganhou dois métodos (10 e 11): `displayReport(pkg)` — onde o `shell` vê o app
  (display e task, lido de `dumpsys activity activities`) — e `selfTest()` — a verificação de todo o
  caminho privilegiado **no aparelho**, descrita abaixo.
* **`AppMirrorService`** informa se está rodando e por que não está (`isRunning()`/`failure()`), o que
  troca a `SecurityException` crua do `MediaProjection` por uma frase do próprio app.
* **Shell**: a linha de estado passa a dizer qual rota o toque vai seguir (`routeHosted`,
  `routePermission`, `routeCapture`) e não aparece quando a rota hospedada vai funcionar; a janela
  hospedada mostra "conectando ao serviço shell" enquanto o bind acontece; a janela de espelho diz,
  enquanto abre, que **é a tela do celular** e que precisa de autorização de captura; e o botão
  **Diagnóstico** (copiável) reúne rota, estado e motivo do Shizuku, `bindError`, backend e erro do
  `am start`, onde o shell viu o app, o estado do serviço de captura e o self-test do aparelho.

### Verificação no aparelho, sem computador e sem log

O menu de aplicações tem o botão **Testar Shizuku agora**. Ele executa, dentro do serviço shell, o
mesmo caminho privilegiado que abre uma janela — nada em HTML, nada simulado:

| Passo do self-test | O que ele prova |
| --- | --- |
| `uid` + `id` (executado no serviço) | o processo realmente roda como usuário `shell` |
| `shellContext` | o `ContextWrapper` se identifica como `com.android.shell` (o `DisplayManagerService` rejeita outro nome) |
| `am`, `dumpsys` | os binários que a rota usa existem neste aparelho |
| `createVirtualDisplay("NextVR self-test", 64, 64, 160, null, 0)` + `release()` | o serviço **pode** criar o display de uma janela — é o portão da funcionalidade, e uma recusa vem com o texto exato da exceção. O display de teste é 64×64 e privado (flags 0): não pega foco e não aparece na tela |
| `injector`, `setDisplayId`, `injectInputEvent` | o injetor de entrada foi resolvido (o mesmo `InputManagerGlobal`/`InputManager` da rota real) |
| `launcherQuery` | a consulta de atividade lançável que a janela usa responde neste aparelho |

O resultado aparece no Diagnóstico como `device self-test: {...}` com `"ok": true/false`. É a
resposta honesta à pergunta "o ADB e o Shizuku estão funcionando neste aparelho?" sem precisar de
nem um `adb shell` do lado de fora.

### O que a PhoneXR confirma (e o que ela custa)

Reler a PhoneXR para esta rodada confirmou o desenho: `DisplayUserService.kt` cria o display como
`com.android.shell` com as flags `TRUSTED`/`PUBLIC` e **sem `MediaProjection`** — `grep
MediaProjection` no repositório inteiro continua dando **zero**. Não existe diálogo de captura em
nenhum momento do caminho dela, porque não há captura: o app roda de verdade num display que só o
`shell` pode criar, e a imagem chega à VR por um `SurfaceTexture` que ela mesma compõe. É
exatamente o que o `NextVrDisplayService` faz aqui, e é por isso que a correção foi de roteamento e
ciclo de vida, não de mecanismo. As flags, o `ContextWrapper` de identidade `shell`, o
`am start --display` e o `InputEvent#setDisplayId` por reflexão deste PR vieram dessa leitura.

## Rodada 5 — o formato da janela, e o que o Android faz (e não faz) quando o app quer girar

O relato, palavra por palavra: *"as janelas eram do tamanho de uma janela normal e alguns apps se
ajustaram na metade esquerda dela, redimensionando a altura, e um emulador de PS3 cortou a metade de
baixo e ainda não usou todo o espaço do display virtual"*. A causa é simples e não era de encaixe:
**a janela não tinha o formato do app**.

Toda janela de app nascia com a mesma superfície, `1040x546` — aspecto **1,9**, mais larga do que
qualquer celular em paisagem (≈2,1) e muito mais larga do que um celular em retrato (≈0,45). O Android
faz, então, o que foi desenhado para fazer: um app que se declara **retrato** é *letterboxed* pelo
sistema dentro dessa tela larga (o app ocupa uma faixa no meio), e um app que desenha um quadro
**16:9** fixo (o emulador) deixa barras. Nada estava esticado — tudo estava encaixado —, mas o espaço
que o app não podia usar era o espaço da janela errada.

### 1. A resposta ao estudo: quem gira o quê

A pergunta era: *ao mandar o app girar, o Android já troca o aspecto sozinho (e não temos nada a
fazer), ou precisamos pegar o novo aspecto, ou a imagem também vem girada?* As três coisas podem
acontecer, e a resposta depende de **quem** pediu a rotação:

| Situação | Quem reage | O que o NextVR precisa fazer |
| --- | --- | --- |
| **O app pede outra orientação** (`android:screenOrientation`, ou em tempo de execução, como um vídeo que vira tela cheia) | o **WindowManager**, que decide entre duas respostas: (a) **girar o display** — o tamanho lógico passa a ser o natural girado e o compositor gira o conteúdo para o buffer, com a *transform* do buffer dizendo ao consumidor como ler; ou (b) **letterboxar o app** dentro do display que ficou (é o caso de display de carro/TV/desktop, e é configurável por aparelho) | **ler o que o display realmente é** e seguir: tamanho natural, tamanho que os apps veem, rotação e estado. É o que o `displayState` (AIDL 12) faz, e `AppDisplayGeometry` decide qual dos dois casos aconteceu |
| **O usuário gira a janela** (botão de girar) | **nós**: o Android *não* gira a nossa janela nem o nosso display | trocar o formato da janela e da superfície juntos, mandar os novos pixels do display no `sync` (o display é redimensionado por isso) e guardar a escolha **por app** |
| **O app não preenche o display** (ele não redimensiona, ou desenha um quadro de proporção fixa) | o **próprio Android**, com o compat scaling dele | nada: é decisão do app, mostrada como é. O `fixed` (de `resizeableActivity`) vai no JSON da biblioteca e na janela, para o usuário saber por que há barras |

Sobre a **imagem girada**: o `SurfaceTexture` recebe a *transform* que o compositor manda e o shader
já a aplica (isso é o que mantém a imagem de pé quando o display gira) — a parte que **não** vem de
graça é a geometria: em que retângulo do buffer a imagem vive e, portanto, qual aspecto a janela deve
encaixar e como o toque tem de voltar. Era exatamente aí que a conta estava errada: o código assumia
que o display nunca mudava de tamanho nem de rotação. Regra implementada (e testada como classe pura
`AppDisplayGeometry`):

> **o tamanho lógico é a verdade sobre a imagem**; a rotação só é levada em conta quando o tamanho
> lógico é o natural **girado** (`logical == (natural.h, natural.w)` com rotação 90/270 — é o
> platform dizendo "o conteúdo girou"). Quando o tamanho lógico é igual ao natural, o que aconteceu
> foi *letterbox* — o app foi desenhado de pé dentro do display que ficou — e aí a imagem **não**
> está girada: acreditar na rotação nesse caso encaixaria a imagem com um aspecto que ela não tem, que
> é a receita para a imagem aparecer na metade esquerda ou perder a metade de baixo.

### 2. O que mudou no código

* **`AppWindowShape`** (novo, Java puro e testado): o formato da janela de um app — retrato
  `585x1040` (9:16) para quem se declara retrato, paisagem `1040x585` (16:9, o que quase todo jogo e
  emulador desenha) para quem se declara paisagem, e paisagem como neutro para quem se declara
  adaptável (`unspecified`, `sensor`, `fullSensor` — esses se arranjam em qualquer formato, e impor um
  palpite seria pior do que deixar o usuário girar). Os dois formatos são **os mesmos dois números
  trocados**, então girar é uma troca e nada mais.
* **`AndroidAppManager`**: lê a orientação declarada da activity lançável e o que o app diz sobre
  redimensionamento (as duas informações já vinham na consulta da biblioteca — nenhuma consulta a
  mais), guarda a escolha do usuário por app (`shape.<pacote>` nas preferências) e expõe
  `windowShape`/`windowBox`. Um app que declara que **não** redimensiona é reportado (`fixed`), nunca
  combatido. O sinal de "não redimensiona" é lido **por reflexão**, porque o SDK esconde todos os
  `ActivityInfo.RESIZE_MODE_*` e o antigo bit `FLAG_RESIZEABLE_FOR_SCREENS` (conferido no AOSP 14): um
  campo que não se consegue ler é reportado como redimensionável — a nota nunca vira afirmação falsa.
* **Shell**: a janela nasce com a superfície do app **mais** as duas barras e a borda
  (`62 + 52 + 2`), sem os 2 px de borda que antes faziam todo app começar uma fração letterboxado; a
  biblioteca publica `shape`, `orient`, `fixed` e `box` por app, e o botão **girar** (ícone que já
  existia na referência) troca o formato da janela e da superfície juntos, manda `{cmd:'shape'}` e é
  lembrado: girar uma vez resolve aquele app para sempre.
* **Os dois tamanhos de pixels** (e isto é a correção de um erro da primeira versão da rodada): o
  *display* tem os pixels do app (`1040x585` / `585x1040`, 16:9 e 9:16 exatos) e é isso que o shell
  manda no `open` e no `sync`; a **janela** tem pixels próprios, o maior retângulo de mesmo aspecto
  que o atlas de composição consegue empacotar — `960x540` (paisagem) e `306x544` (retrato), que com as
  duas barras dão `962x656` e `308x660`. Os slots do atlas são `1360x980` com 160 px de sangria
  (`atlas.js:pack`), ou seja uma janela pode ter no máximo `1040x660`: uma janela de `1042x701` (ou
  `587x1156`) **não** degrada, ela faz o `pack` recusar o lote inteiro e a cena toda parar de
  atualizar — a janela simplesmente nunca aparece. Como os dois retângulos têm o mesmo aspecto, o
  recorte do shader, o encaixe e o toque continuam exatos, e a imagem do app continua vindo da textura
  do display (resolução cheia), só colocada: nada é esticado nem perdido. O teste
  `reference-ui` cobre as duas contagens, e o `android-app-windows` passa os dois tamanhos pelo `pack`
  de verdade.
* **`displayState` (AIDL 12) + `reconcileDisplay`**: o serviço shell responde o que o display é
  (natural, lógico, rotação, estado, modo, densidade) e o supervisor de cada janela (a cada 2,5 s, no
  thread de trabalho) adota o que o display virou — inclusive o hint de buffer
  (`SurfaceTexture.setDefaultBufferSize`) e o `markDisplayChanged`, que é o que o encaixe e o toque
  usam. O estado bruto vai para o Diagnóstico.
* **`MIN_ASPECT` 0,6 → 0,45** nos dois lados: 9:16 (0,5625) e um celular alto 9:20 (0,45) passam a
  caber; com o limite antigo a janela retrato seria letterboxada dentro do próprio display (6% de
  faixa dos dois lados).
* **`setSize` na janela** (`windows.js`): trocar o formato reconstrói a geometria da superfície
  invisível que o toque da mão usa (ela é criada em metros a partir do tamanho) e re-layouta o arco,
  sem tocar no objeto 3D — a janela não anda nem escala ao girar.

### 3. Como verificar no aparelho

> **Corrigido na rodada 6:** o *formato* da janela estava certo, mas a **tela do app** ainda era
> dimensionada a partir da janela — e é isso que cortava o rodapé da maioria dos apps. A seção
> abaixo continua valendo como roteiro; a explicação e os números estão em
> **“Rodada 6 — o rodapé cortado”**.

1. Abra na grade um app que você sabe ser **retrato** (Instagram, um banco, um app de notas).
   → esperado: a janela nasce **retrato** (mais alta que larga), com as proporções do app, e o app
   **preenche** a janela; nada de faixa preta no meio.
2. Abra um app **paisagem** (um jogo, o emulador).
   → esperado: janela 16:9 e o app preenchendo; se ele desenhar um quadro de outra proporção, as
   barras são decisão dele — e o **Diagnóstico** mostra `display state:` com o tamanho que os apps
   veem.
3. Toque em **girar** na barra do app, com a mão.
   → esperado: a janela e a superfície trocam de formato **juntas**, a imagem continua preenchendo
   (depois de o display ser redimensionado) e a escolha **fica**: feche, abra de novo pelo tile — abre
   girada.
4. Depois de girar, toque com a mão num botão do app.
   → esperado: o toque cai no mesmo lugar que você mirou (o encaixe, o crop do shader e o toque saem
   todos do mesmo retângulo).
5. Abra um vídeo e ponha em tela cheia (o app pede outra orientação sozinho).
   → esperado: ou o display gira (a imagem acompanha de pé, a janela continua correta) ou o app é
   letterboxado pelo sistema — os dois são respostas do Android, e o `display state:` do Diagnóstico
   diz qual foi. **Anota isso:** o JSON exato desse momento.

## Rodada 6 — o rodapé cortado: a tela do app era a janela

O relato, palavra por palavra: *“a maioria dos apps continua abrindo com a parte de baixo cortada”*
— e a instrução: *“olhe como a PhoneXR faz originalmente e tente entender o nosso erro”*. A PhoneXR
foi lida de novo no original antes de mexer em qualquer linha, e o erro está **um nível abaixo** do
que a rodada 5 corrigiu: o *formato* da janela passou a ser o do app, mas a **tela em que o app
roda** continuava sendo dimensionada **a partir da janela**.

### O erro, em números

| | Retrato | Paisagem | O que o app vê |
| --- | --- | --- | --- |
| Canvas da rodada 5 (`AppDisplaySpec.forBox`, densidade limitada a 320) | 585x1040 | 1040x585 | **292x520 dp** |
| Este aparelho (1080x2400 @ 420) | 1080x2400 | 2400x1080 | **411x914 dp** |

Um app de celular é desenhado para a caixa em dp do **aparelho** — 411x914 dp aqui — e recebia uma
tela 350 dp mais baixa que isso. Aplicativo que fixa qualquer coisa no rodapé (barra de abas,
`BottomNavigationView`, diálogo em tela cheia, barra de ações, teclado, FAB, um formulário de altura
fixa) abre exatamente com essa parte **fora** da tela que lhe foi dada: não havia espaço, e o app não
tem como saber que a tela é nossa. É o mesmo erro de classe que o relato anterior (“o app se ajustou
na metade esquerda e redimensionou a altura”), só que na outra direção.

### O que a PhoneXR realmente faz (no original)

Ela **não tem esse bug** porque tem *um único par de números por conteúdo*:

* `VrWindows.kt` (`ShizukuAppContent`): `pixelWidth`/`pixelHeight` = **1080x1920** em retrato e
  **1920x1080** em paisagem, e esse par é usado **três vezes com o mesmo valor** —
  `SurfaceTexture#setDefaultBufferSize`, `createDisplay(surface, pixelWidth, pixelHeight, 320)` e
  `TouchEvents(pixelWidth, pixelHeight)`;
* a janela dela **deriva o formato desse par**: `VrWindows.kt:68`,
  `heightM = WIDTH_M * content.pixelHeight / content.pixelWidth * heightScale` — a janela é o mesmo
  retângulo do display, então não existe recorte, letterbox nem espaço sobrando;
* `requestedPortrait()` = a `screenOrientation` da atividade de lançador; se ela não diz nada, o
  padrão é **retrato**, a menos que o pacote se declare `CATEGORY_GAME` (jogo é a única categoria
  que significa “paisagem” num celular).

Ou seja: o display dela é uma **tela de celular**, não o tamanho da janela. Era isso que faltava.

### O que o NextVR faz agora

O canvas do app é **este celular**: a tela do próprio aparelho, no formato que o app pediu, na
densidade do aparelho — e com o par 1080x1920/1920x1080 da PhoneXR como **piso**, para um aparelho
menor hospedar o app numa tela de celular em vez de numa tela de 720p.

| Espaço | Quem decide | Valor atual (1080x2400 @ 420) |
| --- | --- | --- |
| **Canvas** — o display em que o app roda, o buffer da textura e o espaço do toque | o lado nativo, uma vez, na abertura: `AppWindowShape.canvas(forma, tela do aparelho)` + `AppDisplaySpec.forCanvas` | retrato **1080x2400**, paisagem **2400x1080** = **411x914 dp**: a mesma caixa em dp que o app tem no celular |
| **Elemento da janela** — o tamanho da janela no DOM/shell | o shell, pelo formato do canvas, no **maior** tamanho que o atlas empacota (célula de 1360x980 menos o bleed) | retrato **245x544**, paisagem **1038x467** (as duas barras dão 247x660 e 1040x583) |

O app é desenhado no primeiro e a imagem é **amostrada** do primeiro para o segundo: encolher o
elemento muda o tamanho da janela na frente do usuário, nunca o que o app desenha. A regra que
impede a volta do bug, e que está escrita no código dos dois lados: **o tamanho da janela nunca é o
tamanho da tela do app.**

### O que mudou no código (rodada 6)

* **`AppWindowShape.canvas(forma, largura, altura)`** (novo, Java puro e testado): a tela do aparelho
  girada para a forma pedida, com lados pares e o piso 1920/1080.
* **`AppDisplaySpec.forCanvas(w, h, densidade)`** substitui o `forBox`: o tamanho é tomado como veio,
  a densidade é a do aparelho (com limites de sanidade) e **não existe mais clamp de tamanho nem de
  aspecto**. `widthDp()/heightDp()` dizem em uma linha a caixa que o app vê.
* **A regra do formato mudou** para a da PhoneXR: quem não declara orientação recebe o formato que o
  **celular** daria a ele — retrato —, exceto se o pacote se declarar `CATEGORY_GAME` (paisagem). O
  `game` vai no JSON da biblioteca, junto de `orient` e `fixed`.
* **O comando `open` carrega a *forma*, nunca um tamanho**; o `sync` carrega **só visibilidade**; a
  biblioteca reporta `canvas{w,h,dpW,dpH}` no lugar do antigo `box`, e a sessão reporta
  `display.dpW/dpH` — o número que responde “o app está sendo cortado?” é o dp, e agora ele aparece no
  Diagnóstico.
* **Nada mais redimensiona o display do app**: saíram `windowResized`, `resizeApplied`, `resizeFailed`,
  `AppSession.pendingResize`, `resizeRefused`, `boxWidth/boxHeight` e o `resize` do host. Arrastar a
  janela muda a janela; a imagem é encaixada dentro dela pelo shader (e o toque é descartado nas
  tarjas, como sempre foi).
* **Girar continua sendo um toque**: troca a forma, guarda a escolha por app e **reinicia** o app num
  canvas do novo formato (o mesmo caminho do `open`). Como o canvas do outro formato é a **mesma tela
  girada**, o shell troca o formato da janela no mesmo quadro do toque e o app é relançado em seguida.
* No shell, **`web/src/app-window-box.js`** (novo, puro, sem DOM) define o par de tamanhos e é
  testado: canvas = tela do aparelho, elemento = formato do canvas no maior tamanho que o atlas
  empacota. `display-fit.js` perdeu o clamp de aspecto — sem tela menor que o aparelho não há mais
  nada a clampar no encaixe.

### Como saber, no Diagnóstico, que a correção está valendo

Cada sessão aparece com o canvas e a caixa em dp:

```
app com.instagram.android: shape=portrait canvas=1080x2400@420 (411x914dp, running)
```

Um app que deve ocupar a tela toda mostrando um canvas **menor em dp** do que o celular é o sintoma
exato deste bug; a linha acima é o que se lê quando ele está corrigido.

## As duas arquiteturas, sempre separadas

| | **App hospedado** (`display`) | **Espelho da tela** (`mirror`) |
| --- | --- | --- |
| O que a janela mostra | o app executando em um **display virtual próprio**, criado por um serviço privilegiado | o que a **tela do celular** está mostrando, capturado por `MediaProjection` |
| O app está embutido? | **sim**: é a própria atividade em uma tela dedicada | **não**: é uma cópia do vídeo da tela |
| Como o app é iniciado | `am start --display <id>` (com 3 tentativas e o erro verbatim guardado; `startActivity` do próprio app **não** é usado, porque uma recusa dentro do sistema não devolve erro e a atividade iria para a tela do celular em silêncio) | automaticamente, ao abrir a janela: API pública (`getLaunchIntentForPackage` + `startActivity`) traz o app para a tela e a captura começa depois do consentimento |
| Toque | injetado **no display do app** (`InputEvent#setDisplayId` + `InputManager#injectInputEvent`) | gesto encaminhado à tela real (acessibilidade) |
| Formato da janela | o que o app declara (retrato 9:16 ou paisagem 16:9), girável pelo botão da barra e lembrado por app | a proporção do que está sendo capturado |
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
| `AppWindowShape` | o formato da janela de cada app (retrato/paisagem), do que o app declara ou do que o usuário escolheu — Java puro, testado |
| `AppDisplayGeometry` | o que a imagem realmente é a partir do que o display reporta (tamanho natural, tamanho lógico, rotação): distingue "o display girou" de "o app foi letterboxado" |
| `AppHostPolicy` | a decisão única de rota (`hosted` / `permission` / `capture`) a partir do estado do Shizuku — o lugar onde "ainda não ligado" deixou de significar "não disponível" |
| `ShizukuManager` | `pingBinder`/`checkSelfPermission`/`requestPermission`, o *user service*, `awaitService`/`rebind` e o self-test do aparelho |
| `NextVrDisplayService` | a metade privilegiada (AIDL `IDisplayService`), roda como usuário `shell` |
| `NextVrAccessibilityService` | o caminho sem Shizuku: `dispatchGesture` e ações globais |
| `AppMirrorService` | o serviço em primeiro plano, tipo `mediaProjection`, que o Android exige para a captura existir (e a notificação que avisa que a tela está sendo capturada) |

No shell (`web/src/`): `android-apps.js` (estado, janelas, biblioteca, dock), `app-window-box.js`
(os dois tamanhos — canvas e elemento da janela —, puros e testados) e `display-fit.js` (onde a
imagem da tela do app fica dentro da janela e como o toque volta normalizado).

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

São **dois** contadores de pixel, e trocá-los é o bug desta rodada: a **tela do app** (o canvas,
 1080x2400 neste aparelho) e o **elemento da janela** (245x544 em retrato, 1038x467 em paisagem — o
maior retângulo do formato do canvas que o atlas empacota). O app desenha no primeiro; o shader
amostra o primeiro para o segundo. O tamanho da janela nunca é enviado ao lado nativo como se fosse a
tela do app: `open` carrega a forma, `sync` carrega visibilidade.

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

## Redimensionar: a janela é do usuário, a tela é do app

A pergunta que separa as duas coisas: **quem está redimensionando o quê?**

* **A janela** é do usuário. A alça, a mão e a curvatura mudam o *elemento* da janela a qualquer
  momento; a imagem é encaixada dentro dele pelo shader (`fitDisplay`), centrada e sem esticar, e um
  toque que cai nas tarjas é **descartado** — nunca é encaminhado para fora da área visível do app.
* **A tela do app** é do app. O canvas é criado **uma vez**, na abertura, com o tamanho do aparelho no
  formato pedido, e não muda enquanto o app roda. Redimensionar o canvas de um app em execução é,
  para o Android, exatamente o que uma rotação de aparelho é: uma mudança de configuração — e para
  quem não opta por `resizeableActivity`, um reinício de atividade. A PhoneXR nunca faz isso (o AIDL
  dela nem tem `resizeDisplay`), e o NextVR também não: arrastar a janela muda o tamanho da janela,
  e o app continua desenhando na mesma tela, no mesmo estado.

Por isso a rodada 6 **removeu** a maquinaria de redimensionamento de display (`windowResized`,
`resizeApplied`, `resizeFailed`, `pendingResize`, `resizeRefused`, `boxWidth/boxHeight` e o `resize`
do host): ela existia para manter o display casado com a janela, e era justamente esse casamento —
tela do app = tamanho da janela — que cortava o rodapé dos apps.

O que continua valendo do que a rodada 5 construiu:

* `resizeDisplay` no AIDL **devolve a resposta** (`String`, `null` = aplicado) e o serviço reporta um
  display liberado em vez de deixar a plataforma lançar; o método segue no contrato do serviço (o
  `SERVICE_VERSION` continua 4), sem chamador do lado do shell — um display que mudou de tamanho
  debaixo de um app em execução é o caso que precisa de um dono explícito, e o dono é o app.
* **Girar** é o único caso em que o canvas muda de formato, e ele muda por **recriação**: a sessão é
  fechada, o display é liberado e o app é iniciado de novo num canvas do novo formato — o mesmo
  caminho do `open`, inclusive no toque e no registro do backend.
* `AppDisplayGeometry` continua sendo quem lê o que o display **realmente é** (tamanho natural,
  tamanho que os apps veem, rotação) para a imagem e o toque saírem do mesmo retângulo.

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
  isso). O espelho é o substituto honesto: ele abre o app na tela do celular (é o que ele captura) e
  diz isso na própria janela, sem pedir consentimento quando o caminho hospedado está disponível.
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

- Cada app hospedado tem sua própria tela; o tamanho é o do aparelho no formato pedido
  (`AppDisplaySpec.forCanvas`: a tela do próprio celular, com piso de 1080x1920 e densidade
  160–640) e o `SurfaceTexture` tem `setDefaultBufferSize` do tamanho real, então nada é escalado na
  CPU. A imagem aparece na janela amostrada do display pelo shader — encolher a janela não muda o que
  o app desenha.
- Minimizar destaca a `Surface` do display (`setDisplaySurface(displayId, null)`): o app continua
  vivo, mas **para de produzir quadros**. Restaurar religa a mesma superfície — nenhum app é
  reiniciado, nenhuma textura é recriada.
- A tela do app **não** é redimensionada enquanto ele roda (ver "Redimensionar: a janela é do
  usuário, a tela é do app"): arrastar a janela custa um encaixe no shader, e nenhum
  `configuration change` chega ao app.
- Fechar libera: display, `Surface`, entrada do atlas, tarefa do app (o display é criado com
  `DESTROY_CONTENT_ON_REMOVAL`) e a entrada no histórico de recentes do sistema.
- O espelho tem o lado maior limitado a 1600 px e a densidade limitada a 320.
- A cada 2,5 s o processo `shell` verifica se o app continua vivo; se morreu, a janela vira um
  estado de erro com o motivo, em vez de congelar o último quadro.

## Testes

Automatizados (rodam no CI, sem aparelho):

- `tests/app-window-fit.test.mjs` — o ajuste da imagem dentro da janela e o descarte de toques no
  letterbox (os mesmos números do teste Java correspondente).
- `tests/android-app-windows.test.mjs` (26 casos) — o contrato entre as duas metades: o vocabulário
  de comandos, os tokens de estado, o prefixo `app:<pacote>`, a rota `/apps/<ícone>`, o manifesto do
  Shizuku, a acessibilidade e a origem única dos limites de tamanho. Os blocos que existem para
  impedir a volta de bugs que **só aparecem em aparelho**: o serviço em primeiro plano antes do
  diálogo de consentimento, `registerCallback` antes de `createVirtualDisplay`, a visibilidade de
  pacotes (`MAIN + LAUNCHER` em `<queries>`), a lista de permissões proibidas (a mesma que sustenta a
  seção de anticheat acima) e, na rodada 3, quatro novos: a decisão única de mecanismo no lado
  nativo (`route`, no lugar de `canHost`), a revisão de ícones que faz a grade se repintar, a ausência
  de `MIRROR_PACKAGE`/`focus`/botão *Espelhar* e a integração dos apps instalados no menu que já
  existia (sem trilha, sem tile na dock, sem página). A rodada 4 acrescentou quatro blocos que
  descrevem o bug relatado por escrito: tocar num app **hospeda** (e o teste quebra se alguém voltar a
  decidir a rota pelo instante do bind, a reintroduzir `setLaunchDisplayId` ou a chamar `unbind` na
  mudança de estado), o caminho privilegiado **verificável no aparelho** (`selfTest`, com display de
  teste criado e liberado), a janela de espelho dizendo que é a tela do celular **e** que precisa de
  autorização de captura, e o Diagnóstico carregando `launchError`/`displayReport`/`bindError`/
  `captureService` — com o texto do diagnóstico vindo do bundle que o app realmente carrega.
- `nextvr-android/src/test/java/…/AppSessionManagerTest.java` — o teste do ciclo de vida prova que a
  tela de um app **não** muda enquanto ele roda (nenhum `windowResized` existe mais) e que o shape viaja
  na criação da sessão.
- `tests/app-window-box.test.mjs` (rodada 6) — os dois tamanhos como números: o canvas é a tela do
  aparelho, o elemento da janela é o formato do canvas no maior retângulo que o atlas empacota, e o
  giro é a mesma tela virada.
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

Estado no CI (verde, rodada 6 já com o `main` mesclado, runs `38653780575` (push) e `38653786814`
(pull request), commit `1efd1c9`): Node **116/116** (incluindo o teste de integração em Chromium, que
no CI roda de verdade — e que aqui roda com o mesmo Chromium do CI) e testes JVM **150 em 21 classes,
0 falhas** — 67 deles nas nove classes de `apps/`, entre elas as três que a rodada 6 reescreveu
(`AppWindowShapeTest`, 8 casos, `AppDisplaySpecTest`, 6, e `AppSessionManagerTest`, 11). O verificador
de referências Java continua rodando no CI no mesmo passo do bundle: **0 problems em 47 arquivos**. O teste `reference-ui` é o que guarda a geometria da janela: ele mede a
superfície do app no formato da tela do aparelho que o estado falso reporta (2400x1080 em paisagem →
**1038x467**, 1080x2400 em retrato → **245x544**, com as duas barras dando 1040x583 e 247x660), confere
que o `sync` manda **só visibilidade** — nunca um tamanho de janela como se fosse a tela do app — e faz
o giro completo conferindo o recorte do shader nas duas frações. O APK de depuração sai do próprio job
de build e é publicado no branch `apk-dist` como `dist/app-debug.apk`, acompanhado de `dist/build.txt` —
que diz de que run e de que commit ele veio, com **tamanho e md5** —, então a build instalada se
identifica sozinha: nesta rodada ela é `versionCode` **8** / `versionName` **1.0.7**, o merge das
janelas de app com a plataforma de jogos (a rodada 6 era `7` / `1.0.6`, 48 040 916 bytes, e a rodada 5
era `6` / `1.0.5`, 48 040 700 bytes).

> **A `apk-dist` é compartilhada por todas as linhas de trabalho do repositório**: cada run verde
> regrava a branch (é um `push --force` de um único arquivo). O `dist/build.txt` publicado ao lado do
> APK diz **de que run e de que commit** o arquivo veio, com tamanho e md5 — é por isso que ele existe.
> Na hora de instalar, confira que o `build.txt` aponta o commit deste merge; se apontar outro, o
> arquivo foi trocado por um run de outra linha depois deste.

Só pode ser validado em aparelho (e é o que o PR reporta como não validado). O roteiro completo, na
ordem de execução e com o resultado esperado de cada passo, está em `docs/TESTE-EM-APARELHO.md`; a
lista abaixo é o resumo:

0. **ADB e Shizuku antes de tudo**: `adb shell id` (uid 2000 = shell) e o botão *Testar Shizuku
   agora* do menu de aplicações — ele executa o caminho privilegiado no aparelho e devolve `ok: true`
   com identidade, display de teste, injetor e consulta de launcher (seção 0 de
   `docs/TESTE-EM-APARELHO.md`).
1. Abrir um app real e ver a interface dele na janela — com Shizuku autorizado, **sem diálogo de
   captura nenhum** e sem o app aparecer na tela do celular (é o item que estava quebrado).
2. Tocar em um app com a mão e ver a reação dele (não do NextVR).
3. Minimizar/restaurar/arrastar/fechar com o app rodando — e, ao arrastar a alça, conferir se a
   imagem continua inteira e se o toque acerta o mesmo botão depois (a tela do app **não** muda de
   tamanho: a imagem é encaixada dentro da janela e o toque sai do mesmo retângulo);
4. Continuar interagindo com a VR (dock, arco, teclado) com um app aberto.
5. Shizuku ativo, inativo, não autorizado e derrubado no meio do uso.
6. Captura com e sem acessibilidade ativa, e a captura automática de um tile com o Shizuku parado
   (o caminho sem privilégio, que é o que roda no Android 14 sem Shizuku), incluindo negar o diálogo
   e usar o botão “Abrir no celular”.
7. Rotação: app retrato e app paisagem, toque em cada canto — e o rodapé de cada um visível, que é o
   item que a rodada 6 corrige (roteiro em `docs/TESTE-EM-APARELHO.md`, seção B2).
8. Medir latência captura → quadro na janela e gesto → reação no app.

## Arquivos principais

- `nextvr-android/src/main/aidl/com/nextvr/app/apps/IDisplayService.aidl`
- `nextvr-android/src/main/java/com/nextvr/app/apps/` (as classes da tabela acima)
- `nextvr-android/src/main/java/com/nextvr/app/NextVrActivity.java` (ponte `appsLibrary`/`appsCommand`,
  `AppSurfaceHost`, consentimento de captura)
- `web/src/android-apps.js`, `web/src/app-window-box.js` (os dois tamanhos: canvas do app e elemento da
  janela), `web/src/display-fit.js`, `web/src/atlas.js`, `web/src/windows.js`
- `nextvr-android/src/main/res/xml/nextvr_accessibility_service.xml`
