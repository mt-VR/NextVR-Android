# Contribuindo para o NextVR

Obrigado pelo interesse em contribuir! Este documento resume o fluxo básico para abrir uma alteração no projeto.

## Antes de começar

- Leia a seção **Requirements** e **Build** do [README](README.md) para preparar o ambiente (JDK 21, Android SDK 35, NDK e, apenas para a UI HTML, Node 22).
- Para mudanças na interface, edite `web/index.html` e `web/src/`. Não edite manualmente o bundle minificado incluído no APK.

## Fluxo de contribuição

1. Crie (ou use) um branch a partir da `main` para a sua alteração.
2. Faça alterações pequenas e focadas, com mensagens de commit claras.
3. Execute as verificações relevantes antes de abrir o pull request:

   ```bash
   # UI HTML (quando aplicável)
   npm ci
   npm run build:ui
   npm test

   # Android
   ./gradlew :nextvr-android:testDebugUnitTest :nextvr-android:assembleDebug
   ```

4. Abra um pull request para a `main` descrevendo:
   - o que foi alterado e por quê;
   - como a alteração foi testada;
   - limitações conhecidas, se houver (por exemplo, testes que exigem um dispositivo físico).

## Observações

- Testes em aparelho físico continuam necessários para validar VR, câmera, hand tracking e áudio de forma significativa — o CI não substitui essa validação.
- Não inclua APKs gerados localmente no repositório; eles são artefatos do CI.
