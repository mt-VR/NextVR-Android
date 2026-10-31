# dixVR — Standalone Android AR/VR APK

Aplicativo Android independente (`com.dixvr.app` / **dixVR**), completamente separado da base NextVR original, construído sobre a base **AR SLAM Otimizado + Aura Neon + Fluxo Óptico** com **Multitarefa Espacial de 3 Janelas estilo NextVR acima da Dock**.

## Principais Recursos

- **Multitarefa Espacial 3× acima da Dock (estilo NextVR)**:
  - Abra até **3 aplicativos simultaneamente** em um arco espacial 3D ao redor do usuário:
    - **1 janela principal na frente** (`FRENTE`, `0°`)
    - **1 janelinha angulada no lado esquerdo** (`ESQUERDA`)
    - **1 janelinha angulada no lado direito** (`DIREITA`)
  - **Tudo posicionado acima da Dock, com geometria medida no DOM**: o topo da dock é medido no
    elemento real (`.ar-dock-panel`) e cada janela é posicionada pela sua **altura medida**
    (`offsetHeight`), nunca por estimativas fixas. Resultado: a base de toda janela fica
    **≥ 18 cm acima do topo da dock** e nenhuma janela invade a área da dock.
  - **Janelas que crescem encolhem em vez de subir na cabeça**: quando um app carrega mais
    conteúdo (biblioteca, loja, notas), a janela é re-escalada para caber entre a dock e o teto
    de altura, e o layout é refeito via `ResizeObserver`.
  - **Arco sem sobreposição**: o passo angular é calculado a partir da largura real das janelas
    (`ARC_DIST · sin(passo) ≥ meia-largura da frente + meia-largura lateral + folga`), com limite
    de alcance do olhar; se não couber, as janelas laterais encolhem.
  - **Slots da dock funcionais**: tocar em `ESQUERDA` / `FRENTE` / `DIREITA` na dock abre o app em
    foco **exatamente naquele slot**; com o slot ocupado, a janela vai para a frente (e a da frente
    fecha).
  - **Substituição inteligente (LRU)**: ao abrir um 4º app com 3 janelas cheias, a janela lateral
    menos recente dá lugar automaticamente.
  - **Controles rápidos em cada janela**: botões `◀` (Esquerda), `⌖` (Frente), `▶` (Direita) e `×` (Fechar) acessíveis por toque ou permanência do indicador (1s).
  - **Google + YouTube nativos lado a lado**: `DixVrActivity` mantém as sub-WebViews nativas do Google e do YouTube independentes para rodarem ao mesmo tempo na multitarefa.
- **Passthrough AR + Fluxo Óptico (6DoF aproximado)** + **World Lock** e **Modo VR Cardboard** estereoscópico.
- **Hand Tracking Offline (MediaPipe Hands WASM/TFLite empacotado no APK)**: estilos **Fantasma**, **Aura Neon**, **3D** e **Original**.
- **Loja dixVR & Biblioteca dixVR**: **ShootTheDie** (FPS VR embutido via `dixvr-shoot-hand` / `dixvr-shoot-gyro`), **Chicken Cut VR**, **Dreamcore**, **Google**, **YouTube** e **Notas & Multitarefa dixVR**.

## Estrutura do Projeto

- `web/index.html` — código-fonte HTML/CSS/JS do workspace **dixVR** + multitarefa 3× em arco.
- `web/build.mjs` — empacota `web/index.html`, `three@0.128.0` (`CSS3DRenderer`) e `@mediapipe/hands` + `@mediapipe/camera_utils` em `app/src/main/assets/`.
- `app/` — módulo Android (`com.dixvr.app`, `DixVrActivity`, `AssetRequestRouter`, `PanelBounds`, `HandCursorOverlayView`).
- `tests/` — suíte automatizada de testes Node.js (branding `dixVR`, contrato da ponte Android, geometria 3D da multitarefa acima da dock e assets offline).

## Comandos Úteis

```bash
npm ci
npm run build:ui
python3 tools/check-java-refs.py --self-test
python3 tools/check-java-refs.py
npm test
./gradlew :app:testDebugUnitTest :app:assembleDebug
```

## APK pronto (link de download)

O APK de debug assinado com `signing/debug.keystore` (chave fixa do repositório, permite `adb install -r`) é publicado pelo GitHub Actions como artefato **`dixvr-debug-apk`**, contendo o arquivo **`dixVR-debug.apk`**:

1. Abra a aba **Actions** do repositório: <https://github.com/mt-VR/NextVR-Android/actions>
2. Escolha a execução do workflow **Android CI (dixVR)** do branch `arena/7e43774f-nextvr-android`.
3. No rodapé da execução (**Artifacts**), baixe **`dixvr-debug-apk`** e extraia `dixVR-debug.apk`.

> A URL direta de download de artefato (`/actions/artifacts/<id>`) não é estável no GitHub; use a
> página da execução. O próprio workflow publica um comentário no PR com o link e o SHA-256 do APK.

Instalação:

```bash
adb install -r dixVR-debug.apk
```

> O nome base do APK vem de `base.archivesName` no `app/build.gradle` (o Gradle 9 removeu `archivesBaseName` e o AGP 9 removeu `defaultConfig.archivesBaseName`). O CI sempre publica o arquivo com o nome `dixVR-debug.apk`, independentemente do nome gerado localmente pelo Gradle.

### Revisão atual: conteúdo integrado, raio de pinça e contraste

- Dock a 1,78 m e arco a 2 m (geometria medida, três janelas acima da Dock); World Lock mantido.
- Google/YouTube usam uma página por janela, projetada e recortada nos quatro cantos da superfície flutuante. Não há uma segunda moldura nativa nem um iframe ativo escondido no Google.
- Páginas sem zoom automático de visão geral, com texto em 140% para não virar uma miniatura de celular dentro da janela.
- Raio sai do ponto médio entre polegar e indicador. A palma dirige a mira com suavização/zona morta; a mira fica travada durante a pinça e volta a mover ao soltar. Ainda é uma aproximação em tela, não um controlador 6DoF.
- Mãos têm alvo de 24 inferências/s, sem concorrência; a taxa real depende do aparelho.
- Chicken: albedo sRGB, exposição/iluminação reduzidas para recuperar cores, sombras recebidas pelo frango/bancada e sombra de contato barata. Resolução interna limitada a DPR 0,85, sem MSAA; o cenário inteiro não balança a cada frame.
- Interface/canvases e mãos nas duas metades; jogos Chicken/Dreamcore com dois viewports no modo VR.
- WebViews nativos têm cópia visual assíncrona via PixelCopy na metade direita, sem segunda página/áudio. A cópia é monocular e pode atrasar; vídeo protegido pode não ser capturado.
- Sem botão/badge flutuante do ShootTheDie em VR; sair pelo Voltar do Android.

**APK sem ZIP:** o CI da PR publica uma pré-release `dixvr-preview-<commit>` com o arquivo `dixVR-debug.apk` e seu SHA-256, sem alterar a release principal NextVR. O comentário automático na PR #45 contém o link direto e a alternativa por artefato.

**Limitações:** ainda não há SDK óptico oficial Cardboard, perfil QR ou correção de distorção. A projeção nativa e o espelhamento precisam ser conferidos no aparelho. Testes de build não garantem FPS ou correção visual em todos os celulares.
