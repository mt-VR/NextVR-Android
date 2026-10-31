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

### Revisão atual: navegador como uma peça só

- Moldura, botões e página agora pertencem ao mesmo `ProjectedBrowserPanel`: um único transform, um único recorte arredondado e a mesma inversa para toques/pinças. Não há uma moldura HTML animando separada da página nativa.
- A geometria vem de quatro pontos do DOM, medidos na projeção CSS3D real. Atualizações antigas são substituídas pela mais recente antes do próximo frame Android, evitando fila de poses atrasadas.
- O viewport interno fica estável em 800 dp ao virar; todos os apps WebView começam com texto em 90% para caber mais da página, sem diminuir a janela no espaço VR, mantendo os botões + / −. A área vertical disponível e a escala-base do navegador foram ampliadas sem permitir sobreposição com a Dock.
- Dock a 1,55 m e arco a partir de 1,65 m. As três janelas usam o mesmo quadro de 760 × 480 e a mesma escala, sem encolher as laterais; quando necessário, o arco afasta o conjunto para evitar sobreposição. Mantidos os 3 espaços acima da Dock e World Lock. Botões **+ / −** ajustam a escala do conteúdo web.
- Logotipos de Google, YouTube e dos seis atalhos web são empacotados offline na biblioteca, loja e barra nativa, substituindo letras e recortes da referência. Fontes e direitos das marcas em `web/icons/NOTICE.md`.
- Biblioteca ganhou **Wikipedia, Reddit, GitHub, Twitch, Maps e Poki**. São atalhos web (não APKs instalados), compartilham a janela do navegador e exigem internet. Login, reprodução e compatibilidade dependem de cada site.
- Mãos com alvo de 24 análises/s e raio entre polegar/indicador; mira trava durante a pinça.
- Mantidas as correções de contraste/sombras do Chicken e a renderização estéreo dos jogos.
- O raio da mão intersecta o plano 3D da Dock: encurta na superfície e usa o mesmo ponto para a bolinha, hover e pinça.
- Espelho do DOM atualizado só quando há mudanças (até 10 Hz); pose continua em cada frame. Cópia de canvas, desenho das mãos e envio de geometria nativa ficam em até 30 Hz, sem limitar o loop principal dos jogos a 30 FPS. Observadores são desconectados ao sair do VR.
- Jogos reduzem gradualmente a resolução sob carga sustentada e recuperam qualidade quando há folga; Dreamcore sem MSAA. Espelho nativo limitado a 1280 px na maior dimensão. Essas reduções de trabalho não substituem medição de FPS no aparelho.

**APK sem ZIP:** o CI publica uma pré-release `dixvr-preview-<commit>` com `dixVR-debug.apk` e SHA-256, sem substituir a release principal NextVR. O comentário automático na PR #45 traz o link direto.

**Validação necessária:** virar a cabeça, mover a alça, tocar e fechar o navegador precisam ser conferidos no aparelho. O espelhamento da lente direita via PixelCopy é monocular e pode atrasar ou não capturar vídeo protegido. Ainda não há SDK óptico Cardboard, perfil QR ou correção de distorção. FPS real não é garantido por testes de build.

### Ícone DI e panoramas enviados

- Ícone Android **DI branco sobre preto**, conforme imagem enviada, em todas as densidades e nas variantes adaptativa/redonda. Identidade `com.dixvr.app` e chave de assinatura preservadas.
- Removida a praia procedural 3D. O botão **câmera / 360°** da Dock percorre somente os **sete panoramas enviados**, na ordem das imagens, e depois volta ao passthrough. O contador `1/7` … `7/7` identifica a seleção; `360°` indica câmera. Todos os arquivos são locais, sem download na execução.
- Panoramas monoscópicos equiretangulares: rotação acompanhando a cabeça, mesmo fundo nos dois olhos, sem parallax/6DoF. Uma esfera sem iluminação/sombras substitui a praia animada. Imagens mantidas na resolução recebida e com os créditos/marcas existentes; consulte `web/panoramas/NOTICE.md`.
- Raio encurtado: extrapolação de 2 para 0,85 e alcance visual livre de até 28% da menor dimensão da lente. Mantidos a trava durante a pinça e o ponto de contato na Dock.

### Qualidade e orientação ao abrir apps

- Panoramas preservados **byte a byte nos formatos recebidos** (JPEG/PNG/WebP), sem uma segunda compressão JPEG. Renderização com até 1,5× de resolução; segue cada frame da cabeça, mas reutiliza o último frame quando orientação/projeção não mudam. As imagens de 736×368/800×400 continuam limitadas pela resolução original — não há detalhe extra inventado.
- Jogos começam com resolução mais alta (Chicken até 1,15×) e a resolução adaptativa não desce de 0,8×. Sombras da sala estática são reutilizadas; ao mover a faca, são atualizadas em até 15 Hz e reaproveitadas nos dois olhos. Menos alocações por frame e intervalo adaptativo para deixar folga entre análises das mãos.
- Orientação nativa via `SensorManager` (game rotation vector, com rotation vector como fallback), independente do foco das WebViews Google/YouTube. Entrega limitada a uma pose JS pendente, registrada no resume e removida no pause/destroy. Giroscópio do navegador continua como fallback, com troca de fonte sem salto de direção; abrir apps não recalibra a cabeça nem muda o cadeado.
- Exige confirmação no aparelho: abrir/fechar Google e YouTube, virar para ambos os lados sem tocar no cadeado, voltar de app externo, e comparar nitidez/FPS. Os testes automatizados não medem fluidez no telefone.
