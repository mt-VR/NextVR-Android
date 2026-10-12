# Apps Android em janelas flutuantes

Esta é a funcionalidade que transforma a dock do NextVR em um lançador de apps do próprio
aparelho: a biblioteca lista os apps instalados com os ícones reais e cada app aberto ganha uma
janela flutuante no arco multitarefa existente, com o visual da referência
(`new_references.zip`) — barra de arrasto branca, janela com vidro, mesmos botões.

O conteúdo da janela é o app de verdade rodando no Android. Não existe imitação em HTML, e a UI do
NextVR não desenha “telas falsas” de apps.

## As duas arquiteturas, sempre separadas

| | **App hospedado** (`display`) | **Espelho da tela** (`mirror`) |
| --- | --- | --- |
| O que a janela mostra | o app executando em um **display virtual próprio**, criado por um serviço privilegiado | o que a **tela do celular** está mostrando, capturado por `MediaProjection` |
| O app está embutido? | **sim**: é a própria atividade em uma tela dedicada | **não**: é uma cópia do vídeo da tela |
| Como o app é iniciado | `am start --display <id>` (com `ActivityOptions.setLaunchDisplayId` como equivalente público) | o usuário abre o app no celular |
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
- A biblioteca, os ícones, o estado dos apps e a organização das janelas.
- Abrir um app hospedado **não** funciona: a janela explica o motivo e aponta o passo que falta
  em vez de falhar em silêncio.

## Limitações conhecidas (documentadas, não silenciadas)

- **Sem Shizuku não há app hospedado.** Não existe API pública que crie um display utilizável por
  outro app e injete eventos nele sem privilégio. O espelho é o substituto honesto, e ele é
  apresentado como espelho.
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
  Shizuku, a acessibilidade e a origem única dos limites de tamanho.
- `nextvr-android/src/test/java/com/nextvr/app/apps/*Test.java` — `AppLibrary`, `AppSession`,
  `AppSessionManager` (com um `Host` falso), `AppDisplaySpec`, `AppInputGeometry`, `ShizukuStatus`.
- `tools/check-java-refs.py` — como este ambiente não tem JDK, este script confere chamadas em
  tipos próprios e a implementação completa do AIDL; roda no CI junto dos testes.

Só pode ser validado em aparelho (e é o que o PR reporta como não validado):

1. Abrir um app real e ver a interface dele na janela.
2. Tocar em um app com a mão e ver a reação dele (não do NextVR).
3. Minimizar/restaurar/redimensionar/fechar com o app rodando.
4. Continuar interagindo com a VR (dock, arco, teclado) com um app aberto.
5. Shizuku ativo, inativo, não autorizado e derrubado no meio do uso.
6. Espelho com e sem acessibilidade ativa.
7. Rotação: app retrato e app paisagem, toque em cada canto.
8. Medir latência captura → quadro na janela e gesto → reação no app.

## Arquivos principais

- `nextvr-android/src/main/aidl/com/nextvr/app/apps/IDisplayService.aidl`
- `nextvr-android/src/main/java/com/nextvr/app/apps/` (as classes da tabela acima)
- `nextvr-android/src/main/java/com/nextvr/app/NextVrActivity.java` (ponte `appsLibrary`/`appsCommand`,
  `AppSurfaceHost`, consentimento de captura)
- `web/src/android-apps.js`, `web/src/display-fit.js`, `web/src/atlas.js`, `web/src/windows.js`
- `nextvr-android/src/main/res/xml/nextvr_accessibility_service.xml`
