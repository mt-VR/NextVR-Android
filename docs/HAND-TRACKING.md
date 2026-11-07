# Hand Tracking — pipeline, filtros e o que foi corrigido

Este documento descreve o caminho real de um quadro de mão no NextVR depois das correções, o que cada
filtro faz e quais são os limites medidos. Ele existe para que a próxima mudança seja feita com
conhecimento de causa, e não por tentativa.

## O caminho de um quadro

```
Camera2 (traseira, upright)
  └─ PassthroughCamera.frame(bitmap)            ~30 Hz, timestamp = instante da CAPTURA
       └─ MediaPipe HandLandmarker              ~15–30 ms (vira `inferenceMs` no pacote)
            └─ PhoneXrHands.process(...)        filtro + gestos + consistência anatômica
                 ├─ Frame.predicted(now)        → desenho NATIVO (reconstruído por quadro de exibição)
                 └─ Frame.json()                → WebView  → window.nextvrHands(...)
                       └─ hands.js: cursor, pinça, alvos  → windows.js: dock/janelas/toque
                             └─ NativeXR.handTargets(json)  → GL: anel da ponta, feixe, contorno
```

Regra de ouro depois desta rodada: **uma previsão só**. O nativo prevê para desenhar (ele roda no quadro
de exibição, a 60–120 Hz); o WebView recebe a **detecção** e prevê a partir do `timestampNs` de captura.
Antes o pacote mandado ao WebView já vinha extrapolado e o shell extrapolava de novo — em movimento rápido
as duas somavam e a mão "passava do ponto" e voltava.

## Filtros (por mão, 63 landmarks)

| Etapa | O que faz | Por quê |
|---|---|---|
| Limite de alcance | corta um landmark que salta mais de 55 % do raio (pulso → landmark) num quadro, contra o raio do **quadro anterior** | ruído de profundidade não pode esticar um dedo de uma vez |
| Consistência anatômica | comprimento de cada osso em fração da palma, aprendido devagar; corrige quando o osso fica **25 % mais comprido** que o natural, e quando **colapsa a menos de 62 %** num único quadro | dedo não estica nem encolhe sozinho, e nenhum osso atravessa outro. Encolher devagar é permitido de propósito: na projeção da câmera um dedo que se dobra em direção à lente encurta de verdade — travar isso desfaria o punho |
| One Euro x/y | `minCutoff 1.6 Hz`, `beta 14`, **zona morta 0.0006** | tremor de repouso não é publicado; movimento sai cru no primeiro quadro |
| One Euro z | `minCutoff 1.6 Hz`, `beta 6`, zona morta 0.0012 | profundidade (usada pelo Toque Direto) é a mais ruidosa do MediaPipe |
| Reaquisição | **translação** de todos os 21 landmarks ao reaparecer depois de uma falha | a mão entra deslizando, sem esticar a palma |

Os filtros de `pinch`/`fist` **não** passam por isso: gesto é decidido na detecção crua, para que a borda
do clique nunca seja suavizada.

## Previsão e latência

* Nativo: `Frame.predicted(now)` extrapola a última detecção na velocidade medida na **linha de captura**,
  no máximo um intervalo de rastreamento (`MAX_PREDICT_STEP` limita o passo). No instante da detecção ele
  mostra a detecção exata (latência zero adicionada).
* Web: `predictedHandScreenPoint` usa a idade medida desde `timestampNs` (captura), com o mesmo limite.
* Diagnóstico no aparelho: `window.__handStats` publica `frames`, `handleMs` (tempo do shell tratando o
  pacote), `inferenceMs` (idade do quadro ao sair do MediaPipe: captura → resultado) e `maxHandleMs`.
  Se `handleMs` crescer, o gargalo é a interface; se `inferenceMs` crescer, é o detector.

## Gestos que continuam iguais

Dedo em pinça → clique (com histerese de 0,38/0,56 na abertura polegar-indicador); punho fechado → grab e
arraste; punho por 2 s → menu rápido; pinça na bolinha → Dock/Apps (direita) e Brilho/Som (esquerda);
duas mãos pinçando → recentralizar. Nada disso foi alterado nesta rodada.

## Testes que rodam sem aparelho

`nextvr-android/src/test/java/com/nextvr/app/hands/PhoneXrHandsTest.kt` (38 testes) cobre, além dos
antigos: mão parada com ruído oposto no pulso e no indicador, ruído abaixo da zona morta (não pode mover
nada), movimento rápido (não pode atrasar), giro do pulso (proporções intactas em 0–180°), fechar e
abrir os dedos (o corretor de comprimento não pode desfazer o punho), aproximar/afastar da câmera
(proporção invariante), pinça repetida (uma borda por ciclo), reaparecer depois de uma falha (palma não
estica), solavanco de um quadro (segura perto do anterior), colapso de um dedo em um quadro (restaura) e
dedo que abre de verdade (não é segurado).

`tests/palm-cursor.test.mjs` cobre a orientação da palma e o portão da bolinha; `tests/direct-touch.test.mjs`
cobre o clique por pressão.

## Limites honestos

* Estes testes são de unidade e de integração sintética. **Nenhum deles é uma medição em celular real** —
  números de latência de captura e de inferência por aparelho só podem ser lidos com `window.__handStats`
  no aparelho.
* Mão muito perto da lente (menos de ~12 cm) e luz ruim degradam o MediaPipe: a mão fica menos estável
  porque a fonte é pior, não porque o filtro falhe.
* O filtro é causal: com movimento muito rápido existe latência de grupo intrínseca (alguns quadros). Ela é
  reduzida pelo `beta` alto e pela previsão, não eliminada.
* Não há skinned skeleton: a silhueta é o polígono dos 21 landmarks, então a "mão" desenhada é uma
  aproximação da forma, não uma malha anatômica.
