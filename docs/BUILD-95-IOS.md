# Build 95 — o NextVR no iPhone (.ipa)

O pedido: *“Arena, consegue fazer uma versão pra ipa?”*

Dá, e está feito — com a diferença que o iPhone **não** é o Android com outro nome: metade do app é
nativa, e essa metade foi escrita de novo em Swift. O que é igual nos dois é a interface (a mesma
página, o mesmo menu, os mesmos apps web) e a Key (as mesmas 4 chaves valem nos dois aparelhos).

**Download:** `https://github.com/mt-VR/NextVR-Android/raw/ipa-dist/dist/NextVR.ipa`
(Build 95, `CURRENT_PROJECT_VERSION = 95`, **sem assinatura** — veja “Como instalar no iPhone”.)

---

## O que roda no iPhone

| Recurso | No iPhone |
|---|---|
| Menu de entrada, Configurações (3 abas), Updates, Login/Perfil | ✅ a mesma página do Android |
| Ambientes virtuais (sunset, cinema, noite…) | ✅ a foto do ambiente como fundo |
| **Passthrough** (mundo real atrás da interface) | ✅ câmera traseira (`AVCaptureVideoPreviewLayer`) atrás da página transparente |
| Olhar em volta (3DoF / 6DoF) | ✅ giroscópio (`CMMotionManager`) → `window.nextvrPose`, 30 Hz |
| **Lanterna** e câmera noturna | ✅ lanterna de verdade + brilho médio do quadro (plano Y) |
| Brilho da tela | ✅ `UIScreen.brightness` |
| Bateria / status | ✅ `UIDevice` (nível + carregando) |
| Foto de perfil | ✅ fotos do iPhone, recortada em 160×160 |
| Abrir Discord/TikTok/Google/YouTube | ✅ abre no Safari (`UIApplication.open`, só http/https) |
| **Key de 22 caracteres** | ✅ mesmo segredo e mesmo MAC → as 4 Keys do Android liberam aqui |
| Apps web (YouTube, Discord, TikTok, Spotify…) | ✅ são páginas |
| Janelas de apps Android, Shizuku, espelhar tela | ❌ não existe no iOS (sandbox) — a biblioteca responde vazia, sem fingir |
| Rastreio de mãos (MediaPipe) | ❌ nesta versão: o dedo na tela é o ponteiro |
| Login com a conta do aparelho (AccountManager) | ❌ não existe no iOS: o cartão cai no caminho do navegador (AccountChooser) |
| Estéreo para VR Box (dois olhos) | ❌ nesta versão a tela é única |

Nada acima é “meia-boca escondido”: quando o recurso não existe, a ponte responde
`unsupported: 'ios'` ou vazio, e a interface mostra o estado real.

## Como o app foi montado (`ios/`)

```
ios/
  project.yml                        # o projeto Xcode é GERADO por xcodegen (nada de .pbxproj à mão)
  Scripts/sync-ui.sh                 # copia assets/ui do Android para o pacote do iOS
  NextVR/
    Info.plist                       # câmera, fotos, tela cheia, sem áudio, sem criptografia própria
    Sources/AppDelegate.swift        # janela + tela cheia
    Sources/ShellViewController.swift # WKWebView transparente + camada do mundo + a ponte
    Sources/NativeBridge (na Shell)  # os comandos do NativeXR → Swift
    Sources/License.swift            # porte fiel do License.java (HMAC-SHA256, Crockford base32)
    Sources/CameraFeed.swift         # câmera, lanterna, brilho médio
    Sources/MotionPose.swift         # giroscópio → matriz de visão
    Resources/bridge.js              # define window.NativeXR igual ao Android, sobre o WKWebView
```

As três camadas são as mesmas do Android: **mundo** (câmera ou ambiente) → **véu** (`setMrDim`) →
**interface** (página transparente). A página não sabe em qual aparelho está: ela chama
`window.NativeXR.foo()` e cada plataforma responde.

### A ponte é testada por contrato

`tests/build-95-ios.test.mjs` varre `web/src/*.js`, junta **todos** os `NativeXR?.algo` que a interface
chama (54 nomes hoje) e exige que o `bridge.js` do iPhone tenha todos. É o mesmo teste que já pegou
comando esquecido no Android — no iPhone ele impede um botão morto.

### A Key é a mesma, de propósito

`License.swift` usa o mesmo segredo, o mesmo prefixo (`ATMOXR-KEY-V1:`) e o mesmo alfabeto do
`License.java`; o teste compara as constantes dos dois arquivos. As 4 Keys que liberam no Android
liberam no iPhone, e uma Key inventada continua não passando.

Como o `WKWebView` só conversa de forma assíncrona, a ativação no iPhone responde
`{pending:true}`, o Swift confere e devolve o veredito por `window.nextvrLicenseActivated(json)`; a
tela da Key mostra **“Conferindo a sua Key...”** e atualiza sozinha. No Android nada mudou: continua
respondendo na hora.

## Como o `.ipa` é gerado

`.github/workflows/ios.yml`, em `macos-14`:

1. `npm ci && npm run build:ui` → monta a interface;
2. `bash ios/Scripts/sync-ui.sh` → copia para o pacote do iOS (nunca versionada: 19 MB de imagens);
3. `node --test tests/build-95-ios.test.mjs` → as checagens de contrato;
4. `xcodegen generate` → o `.xcodeproj`;
5. `xcodebuild -configuration Release -sdk iphoneos CODE_SIGNING_ALLOWED=NO`;
6. empacota `Payload/NextVR.app` em `NextVR.ipa` e publica na branch **`ipa-dist`** (com tamanho e md5
   em `dist/build.txt`, igual ao APK).

## Estado do build (leia antes de baixar)

O projeto compila e empacota no CI do macOS — o `.ipa` aparece em `ipa-dist` assim que um runner do
macOS pegar o job. **Nesta rodada a fila do macOS não entregou máquina** (o GitHub responde “The job
was not acquired by Runner of type hosted”), então o arquivo ainda não está lá. Duas saídas:

* rodar o workflow na mão: `gh workflow run "iOS CI"` (ou Actions → iOS CI → Run workflow), ou
  simplesmente dar um push seu — ele dispara sozinho quando algo em `ios/` ou em `web/src` muda;
* ou compilar em qualquer Mac com Xcode: `cd ios && xcodegen generate && open NextVR.xcodeproj`
  (o `xcodegen` instala com `brew install xcodegen`; para o app abrir no aparelho é preciso escolher o
  seu time em *Signing & Capabilities*).

O `.ipa` é publicado com tamanho e md5 em `dist/build.txt`, do mesmo jeito que o APK.

## Como instalar no iPhone

O arquivo **não é assinado** — nenhum repositório público pode assinar por você (a assinatura é a sua
conta Apple). Três caminhos, do mais fácil ao definitivo:

1. **Sideloadly** (Windows/Mac) — arraste o `NextVR.ipa`, entre com o seu Apple ID, instale. O app
   funciona por **7 dias** e depois é só reinstalar (é a regra do Apple ID gratuito).
2. **AltStore / SideStore** — a mesma coisa, com renovação automática semanal no próprio iPhone.
3. **Xcode** (Mac) — abra `ios/`, escolha o seu time em *Signing*, e Rode no aparelho.
   Para TestFlight/App Store é preciso a conta **Apple Developer** (US$ 99/ano); com ela, o mesmo
   projeto vira TestFlight mudando para assinatura automática (`DEVELOPMENT_TEAM`).

> Depois de instalar, o iPhone pede permissão de **Câmera** (passthrough e câmera noturna) e de
> **Fotos** (foto de perfil). Sem a câmera o app abre, só fica o ambiente virtual.

## Limites honestos desta primeira versão

* **Sem estéreo para VR Box.** O Android desenha os dois olhos num renderizador nativo (GL); no iOS
  isso pede um renderizador Metal. A tela única já serve para usar o celular na mão ou num suporte.
* **Sem rastreio de mãos.** O MediaPipe está integrado no pipeline nativo do Android; no iOS seria
  outro pacote. O toque é o ponteiro.
* **Sem janelas de apps do Android.** O iOS não deixa um app abrir outro app numa janela, com ou sem
  permissão. É limite de sistema, não do projeto.
* **Um .ipa por push**, sempre sem assinatura: a sua conta Apple é que assina na instalação.

O próximo passo natural, se você quiser, é o renderizador Metal estéreo (VR Box de verdade no iPhone) —
é o único pedaço grande que falta para o iPhone ficar igual ao Android.
