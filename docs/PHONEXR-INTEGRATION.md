# PhoneXR no NextVR — jogos de headset dentro do mundo

O NextVR passa a hospedar **jogos de headset** — OpenXR, Gear VR/Quest (VrApi) e Daydream/Cardboard —
como janelas do próprio workspace, com as mãos do aparelho como controles. O runtime é o PhoneXR
(monado Android), rodando dentro de um pacote separado que a casca instala e fala por AIDL/UDP.
A casca continua sendo uma só: um frame estéreo, uma distorção de lente, os menus do NextVR por
cima do jogo.

**O PhoneXR é o único acervo de jogos do NextVR.** Os jogos demo embutidos (Minecraft VR, VRFS,
Roblox e Brawl Stars, que eram tiles fake sobre o mundo 3D do sandbox) foram removidos junto com o
sandbox (`web/src/game.js`, a ponte `gameMesh/gameFrame` e o `GameSceneRenderer`): a coleção de
jogos agora vem do runtime — hospedados na janela ou abertos pelo launcher do runtime na tela do
aparelho.

---

## 1. O que cada geração de jogo é, e como abre

| Jogo | Como é identificado | Como abre | Sem o suporte? |
| --- | --- | --- | --- |
| **OpenXR portado** (PhoneXR) | `libopenxr_loader.so` + catalog/runtime próprio dos PhoneXR | hospedado: display nossa, atividade nossa, o loader já resolve o runtime deste aparelho | a tile explica que falta o runtime |
| **OpenXR de loja** (original) | `libopenxr_loader.so` sem runtime embutido, descobre o runtime pelo **broker** | só abre aqui com o runtime-broker do Khronos instalado; sem ele, **não abre na casca** — a tile marca e o launcher do runtime pode abrir na tela do celular | marca "✕" na tile, com o motivo |
| **VrApi (Gear VR/Quest)** | `libvrapi.so`, `oculus.mobile.env` | com o driver VrApi (`com.oculus.systemdriver`) instalado, o adapter do phone-monado dá ao jogo a VrApi simulada | a tile marca o driver faltante |
| **Daydream/Cardboard** | `libgvr.so`, `sundog-*`, `targetSdk` baixo | hospedado direto | a tile marca |
| **App Android comum** | nada de VR nos libs/manifest | segue o fluxo normal de apps (`docs/ANDROID-APP-WINDOWS.md`) | — |

A classificação vive em **`xr/XrGameLibrary.java`** (varre o APK: libs nativas, o
`AndroidManifest.xml` binário via `xr/XrManifest.java`, `targetSdk`, categorias de intent) e é
publicada pra shell com um `describe` e um `hostable` por jogo. Nos testes, `XrManifestTest` prende
as regras (`targetSdk ≤ 29` dispensa o bloco `<queries>`; a partir de 30, quem não conhece o runtime
não o vê, a menos que já cite o `runtime_broker` ou o pacote dele).

## 2. O que entra no aparelho

Quando os APKs do runtime vêm embutidos no build, a instalação dos **3 pacotes** é feita pela casca
do Shizuku (serviço privilegiado, transação `installPackage`, versão 5 do serviço):

| Pacote | Papel | Asset embutido |
| --- | --- | --- |
| `org.freedesktop.monado.openxr_runtime.out_of_process` | o runtime OpenXR | `xr/runtime/phonexr-runtime.apk` |
| `com.oculus.systemdriver` | driver VrApi para jogos Gear VR/Quest | `xr/runtime/phonexr-vrapi-driver.apk` |
| `org.khronos.openxr.runtime_broker` | dá o runtime a jogos de loja que perguntam a ele | — opcional |

Sobre o broker: o runtime PhoneXR (v7) **declara ele mesmo** a autoridade
`org.khronos.openxr.system_runtime_broker` que o loader Khronos consulta, então os jogos de loja
resolvem o runtime sem o pacote do Khronos — o status de broker da página *PhoneXR* considera isso.

O APK do runtime não fica no git (regra `*.apk`): a tarefa **`fetchPhoneXrRuntime`** do gradle
materializa `assets/xr/runtime/phonexr-runtime.apk` a partir do commit **pinado** da upstream
(`samrat1games/phonexr`, `27c5bc469…`), conferindo o sha256 a cada build — tanto no CI quanto na
máquina local, e recusa um download que não corresponda ao pin.

Sem os APKs embutidos, tudo degrada bem: a biblioteca lista os jogos, a tile explica o que falta, e a
página *PhoneXR* em Configurações mostra `runtime APK not bundled` com o caminho da seção 8.

## 3. A linha de entrada: mão do NextVR → controle do jogo

- **`xr/XrHandBridge.kt`** recebe o frame de rastreamento que o app **já** produz (MediaPipe, sem
  segunda câmera nem segundo modelo), converte e envia por **UDP loopback**:
  * `PH5` na porta **42424** (o runtime) e `PH6`, com as cordas dos dedos, na **42425** (SDK);
  * cadência fixa de 60 Hz — o rastreamento é a parte variável, o jogo lê o estado mais novo;
  * pinça = gatilho (`fist` do protocolo), punho fechado = grip; as cordas dos dedos seguem a mão;
  * mão prevista nunca aperta nada: predição é pra silhueta fluida, não pra clicar por alguém.
- **Modo "controllers"** (padrão): como Oculus Touch — pinça é trigger, punho é grip.
- **Modo "hands"**: só posições/cordas e `FLAG_HANDS_ONLY` — nenhum botão, pra jogos que fazem as
  próprias mãos.

```
câmera → PhoneXrHands (rastreamento, filtros, pinça) → XrHandBridge → UDP 42424 + 42425 → runtime
```

Quem aperta o quê segue a regra de sempre da casca: **a pinça apontando pra uma janela nossa pertence
à janela** (menu, dock, config). A shell avisa o bridge (`hands-ui`) quando o cursor cai sobre uma
janela nossa durante a sessão — por mudança de borda, não a cada quadro — e o bridge solta os
botões do jogo enquanto a **pose** da mão continua chegando (aim segue, nada dispara).

## 4. O jogo dentro de um frame só

O runtime desenha o jogo **side-by-side, sem correção de lente**, numa display nossa do tamanho da
tela do aparelho em paisagem; o id da textura é `xr:<pacote>`. A pipeline da casca:

1. `XrGameController` (`startDisplay`) cria a display e a surface no GL; o slot da textura
   (`SpatialRenderer.browsers`) já aceita qualquer id que um painel cite.
2. `web/src/atlas.js` emite **um painel** para a janela do jogo com dois retângulos de amostragem:
   `uv` = metade esquerda do frame, `uvR` = metade direita.
3. No `SpatialRenderer`, o shader mistura `uRect`/`uRectR` por um `uEye` que vem do **viewport** da
   vez: viewport 0 é o passo do olho esquerdo; o outro é o direito.
4. `nextvr_app.cc` aplica a **distorção de lente Cardboard uma vez só**, como para as janelas.

Resultado: o jogo chega em **3D de verdade** (cada olho vê sua metade em tamanho pleno), no mesmo
frame das janelas, do dock e das mãos da casca.

## 5. Modo de jogo: o workspace preservado

Ao abrir um jogo:

- o workspace **some com o estado preservado** — janelas escondidas uma a uma, dock e teclado,
  foco — igual ao sandbox 3D (`web/src/game.js`), e restitui na saída, fechando o que foi aberto
  durante o modo (Configurações, por exemplo);
- a janela do jogo tem barra própria: badge "Jogo de headset", minimizar e fechar;
- **pinça das duas mãos por ~2 s** abre o menu do jogo (Continuar / Configurações / Sair) — o mesmo
  acorde `TwoHandMenuChord` do sandbox, pintando o mesmo anel `#gameRing`;
- minimizar **não encerra**: a surface da display é desatachada e o jogo segue vivo e com estado (a
  tile re-anexa; o Android decide matar a tarefa por memória, como sempre);
- **pausa do NextVR**: a display é desatachada e o feed da mão para — alimentar o runtime com
  quadros durante a pausa manteria os gatilhos do jogo no estado do último gesto; `onResume`
  re-atacha a display e alimenta de novo;
- **Sair**: a display e a surface são soltas — a atividade do jogo pausa; a tarefa dela é do Android.

Um jogo de headset e o sandbox **não coexistem**: com um ativo, a tile do outro avisa para sair
primeiro.

## 6. Fluxo no aparelho

1. Biblioteca → os jogos de headset aparecem junto das outras (badge "XR"). Sem runtime: uma nota
   PhoneXR explica e oferece "Instalar runtime" (quando o APK vem embutido) e "Verificar agora"
   (self-test de toda a corrente).
2. Toque na tile → o lado nativo decide (`open`): runtime pronto? Shizuku? o jogo é `hostable`?
   → publica o estado, a shell entra no modo de jogo. Negação vem de volta com o motivo e vira toast.
3. Deu certo: a janela aparece com o jogo e a mão vira controle.
4. Saída: menu do jogo → Sair, ✕ da janela, ou fechar a janela da mão — o lado nativo solta o mundo,
   publica `hosting=false`, e a shell restaura o workspace.

## 7. Onde vive cada pedaço

```
nextvr-android/src/main/java/com/nextvr/app/xr/
  XrRuntime.java         estado dos pacotes, extração de assets, versão
  XrManifest.java        leitor binário do AndroidManifest.xml (targetSdk, queries, categorias)
  XrGameLibrary.java     varredura/classificação dos APKs, e o launch de cada geração
  XrGameController.java  a sessão: display, surface, feed da mão, comandos, estado JSON
  XrHandProtocol.kt      o formato de pacote (PH5/PH6, portas 42424/42425)
  XrHandBridge.kt        frame de rastreamento → controle, feed 60 Hz, bloqueio de UI
nextvr-android/src/main/java/com/nextvr/app/apps/
  NextVrDisplayService.java  installPackage (serviço shell Shizuku, versão 5)
web/src/xr-games.js        biblioteca, janela do jogo, modo com estado preservado, acorde
web/src/atlas.js           painel do jogo com uv/uvR (as duas metades)
web/src/apps.js            tiles na Biblioteca, nota PhoneXR, página em Configurações
web/src/windows.js         jogo hospedado não recebe tap sintetizado da casca
web/src/core.js            strings (pt/en/es)
```

Testes: `nextvr-android/src/test/java/com/nextvr/app/xr/` (manifest, protocolo, tradução de mão) e
`tests/xr-games.test.mjs` (a casca inteira).

## 8. De onde vem o runtime (licença e build)

O runtime vem do projeto **PhoneXR** (`github.com/samrat1games/phonexr`, monado Android); a
procedência completa fica em `docs/THIRD-PARTY.md`. O APK não é compilado aqui: a PhoneXR publica
o runtime **pronto** — o rebrand do monado, o broker embarcado, o GameLauncher e a assinatura vêm
do pipeline deles (`openxr-runtime/build_runtime_apk.py`). Este repositório aponta esse APK por
commit e sha256 e o materializa sozinho: a tarefa `fetchPhoneXrRuntime` do
`nextvr-android/build.gradle` baixa o arquivo do commit pinado e confere os bytes a cada build,
tanto localmente quanto no CI.

Estado atual:

- `phonexr-runtime.apk` — **embutido** (pin `27c5bc469…`, versionCode 7). Jogos OpenXR, o launcher
  honesto para jogos de loja e o self-test funcionam com ele;
- `phonexr-vrapi-driver.apk` — **ainda não embutido**: exigiria as headers do VrApi (SDK Oculus,
  de distribuição restrita) e o build nativo do `gearvr-shim`. Enquanto ele falta, jogos Gear
  VR/Quest degradam para "abrir no celular", sem janela preta; a página *PhoneXR* mostra
  `VrApi missing`.

Para regenerar os APKs dentro do projeto PhoneXR (não deste repositório):

    python3 openxr-runtime/build_runtime_apk.py        # rework do monado: rebrand+broker+slim+sign
    python3 vrapi-driver/build_driver_apk.py           # após o cmake do gearvr-shim (dois ABIs)

O pin vive em `nextvr-android/build.gradle` (URL raw da upstream no commit + sha256 conferido).
Para apontá-lo para um build novo, troque os dois valores lá — o build recusa bytes que não
conferem.
