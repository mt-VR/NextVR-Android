# MetaMR (PotatoVR) — Base Android APK Independente

Projeto Android isolado e enxuto criado especificamente a partir do código-base **`PotatoVR_ShootTheDie_AR_SLAM_OPTIMIZADO-2_AuraNeon_FLUXO-OPTICO.html`** (**MetaMR - VR Launcher**).

Possui identidade própria (`applicationId "com.metamr.potatovr"`), permitindo instalar este novo APK no mesmo celular **lado a lado com o NextVR (`com.nextvr.app`)** sem sobrescrever nem misturar código.

---

## O que vem integrado nesta base

- **Workspace AR/VR em Tela Cheia Imersiva (`MetaMrActivity`)**:
  - Orientação `sensorLandscape`, tela sempre acesa e barras do sistema ocultas.
  - Origem segura local (`https://appassets.androidplatform.net/assets/index.html`) para `getUserMedia` (câmera traseira), `WebXR`, `localStorage` e iframes `srcdoc`.
- **Funcionamento 100% Offline para AR e Hand Tracking (`AssetRequestRouter`)**:
  - `Three.js r128`, `CSS3DRenderer` e `@mediapipe/hands` (incluindo binários `.wasm`, `.data` e modelos `.tflite`) são empacotados dentro do próprio APK.
  - Carregamento instantâneo sem depender de CDN externa, inclusive dentro do jogo embutido **ShootTheDie**.
- **Recursos preservados do código-base**:
  - **Fluxo Óptico Lucas-Kanade (`FLUXO-OPTICO`)** somado ao giroscópio para compensação visual leve de deslocamento + suporte a **WebXR inline** e ponte `postMessage` (`arcore-pose`).
  - **4 estilos visuais de mãos**: *Mão fantasma*, *Aura Neon*, *3D* e *Original* (MediaPipe Hands para 2 mãos).
  - **Modo VR Cardboard Estéreo** (`#btn-dock-vr`) e **World Lock** (`#btn-dock-worldlock`).
  - **Ilha 3D em WebGL** (`#beach-webgl`) com ondas reais, areia e cadeira.
  - **Experiências embutidas na Loja / Biblioteca**: *ShootTheDie* (FPS VR HTML), *Chicken Cut VR*, *Dreamcore*, *Google* e *YouTube*.
- **Ponte Android Nativa (`window.PotatoAndroid` / `window.MetaMR` / `window.Android`)**:
  - Sub-WebViews nativas reais para os painéis flutuantes do **Google** e **YouTube** (sem bloqueio de `X-Frame-Options`), sincronizadas com a posição 3D do painel, rolagem por gesto de mão, clique por permanência (*dwell*) e camada transparente de cursor neon (`HandCursorOverlayView`).
  - Abertura nativa de aplicativos externos via `Intent` (`intent://`, pacotes instalados ou fallback para Play Store).
  - Botão **Voltar** do Android fecha primeiro o jogo/painel ativo antes de encerrar a sessão AR.

---

## Como baixar o APK pelo GitHub Actions

Cada commit neste Pull Request dispara o workflow **`Android CI (MetaMR PotatoVR)`**, que compila, testa, assina com `signing/debug.keystore` e publica o artefato **`metamr-potatovr-debug-apk`** (`MetaMR-PotatoVR-debug.apk`) na aba **Actions** da execução do PR.

---

## Como desenvolver e compilar localmente

### 1. Editar a interface/base Web (`web/index.html`)

```bash
npm ci
npm run build:ui
npm test
```

### 2. Compilar o APK Debug

Com JDK 21 e Android SDK 35:

```bash
./gradlew :app:testDebugUnitTest :app:assembleDebug
adb install -r app/build/outputs/apk/debug/app-debug.apk
```

> Mesmo sem Node.js instalado (por exemplo, abrindo direto no Android Studio), a task Gradle `prepareWebAssets` sincroniza automaticamente `web/index.html` e baixa os pacotes fixados do `Three.js` e `MediaPipe Hands` com verificação de hash SHA-1.
