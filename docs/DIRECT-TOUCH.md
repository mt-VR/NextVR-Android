# Toque Direto (Direct Touch)

O toque da mão no NextVR, do jeito do Meta Quest: **o dedo tem que encostar e empurrar**.

Antes, o caminho era o contrário disso. A interface escolhia o alvo quando o dedo passava por cima e
disparava o clique quando o dedo fazia um movimento pequeno **para cima** ("levantar o dedo"), com
limiares de 5,5 mm na coordenada da ponta e 6 mm na junta. O rastreamento oscila alguns milímetros
entre dois quadros — o mesmo tremor que mantinha o destaque aceso também passava desses limiares. Daí
o resultado que o usuário descreveu: passar o dedo na frente de um botão abria o aplicativo.

Agora o clique sai da máquina de estados `web/src/direct-touch.js`, e ela só olha para três coisas:

1. **alvo** — o que está debaixo da ponta do indicador (landmark 8) naquele quadro;
2. **dentro** — a ponta continua dentro da área desse alvo;
3. **profundidade** — a distância da ponta ao **plano do alvo**, em metros, positiva à frente do
   vidro e negativa atrás dele.

Nada de "passou por cima", nada de tempo parado (dwell), nada de pinça.

## Estados

```
idle ──(ponta entra na faixa de aproximação)──▶ hover ──(encosta: ≤ 12 mm)──▶ contact
  ▲                                             │                              │
  │                                    (sai do alvo/afasta)            (empurra: pressão)
  │                                             ▼                              ▼
  └──────────(afasta além do rearme)───────── released ◀──(volta a sair)────── pressed
```

| estado     | o que a interface faz                                        | o que o app faz |
|------------|--------------------------------------------------------------|-----------------|
| `idle`     | nada                                                          | nada |
| `hover`    | acende o alvo (`.finger-hover`), nada mais                    | **nada** |
| `contact`  | o alvo afunda um pouco, o anel da ponta fecha                 | nada |
| `pressed`  | o alvo afunda de vez e escurece, o ponto fica azul            | **um clique** |
| `released` | volta ao normal                                              | espera o dedo sair |

O evento `press` sai **uma vez**, no instante em que a pressão é confirmada. Segurar apertado não
repete: o estado fica `pressed` e o clique não volta. Para clicar de novo, a ponta tem que sair da
área de contacto (afastar além de `rearm` ou sair do alvo), o que leva a `released` e depois a
`idle`.

## Pressão: absoluta ou relativa

O plano do alvo é reconstruído em metros, mas a escala métrica do MediaPipe pode estar alguns
milímetros (ou centímetros, dependendo da mão e da luz) fora da escala do mundo do render. Por isso
duas condições confirmam a pressão — **qualquer uma basta**:

* **absoluta**: a ponta atravessou o plano do alvo (`depth ≤ −6 mm`);
* **relativa**: a ponta está na banda perto do vidro (≤ 35 mm) **e** avançou 30 mm na direção da
  superfície desde que entrou na faixa de aproximação;
* **meio do caminho**: avançou 30 mm **e** pelo menos 45 % da distância com que entrou na faixa.

As três exigem aproximação de verdade: nenhuma delas dispara com o dedo parado longe do botão. A
terceira existe por causa da dock e do teclado, onde a profundidade depende da escala métrica do
rastreamento: uma folga constante de alguns centímetros poderia deixar o alvo inalcançável pela
regra absoluta e pela banda, e "chegou na metade do caminho até o vidro" continua sendo um empurrão
— não uma mira.

## Anti-fantasma

| regra | por que |
|---|---|
| amostras **preditas** (`h.predicted`) não avançam, não confirmam e não soltam | o modelo de movimento continua andando depois que a mão parou; deixá-lo decidir era uma das fontes de clique fantasma |
| a condição de pressão tem que valer por `pressHoldMs` (30 ms) | histerese: dois quadros seguidos, não uma borda |
| o alvo tem que estar em aproximação por `minHoverMs` (30 ms) antes da pressão | um dedo que chega já atravessado não conta |
| a ponta tem que ter estado **à frente** do plano (`depth > 0`) desde que o alvo foi escolhido | uma mão que aparece no quadro já atrás do vidro, ou um salto do rastreador, não é um toque |
| `debounceMs` (260 ms) entre dois cliques | dois aplicativos por um toque duplo acidental |
| um clique por pressão, rearme obrigatório | a mesma pressão não abre várias coisas |

## O que é medido, e de onde

* **Ponta**: `h.points[24], h.points[25]` (normalizado, × `scaleX/scaleY`) escolhe o alvo;
  `h.head[24..26]` (metros, `camera.matrixWorld`) mede profundidade.
* **Alvos de janela** (conteúdo, superfície nativa, vidro pelado): profundidade com
  `windowPoint(win, ponta).d` — a mesma medida em metros que o toque de janela já usa, sem depender
  da escala métrica do MediaPipe.
* **Dock e teclado**: são planos próprios, não a superfície de uma janela; a profundidade é
  `distância do raio até o plano − distância métrica da ponta`.
* **Alvo do raio do olhar** (`viaRay`) nunca serve ao toque: apontar para longe não encosta em nada.
  A pinça com raio continua a usar esse caminho, intocada.

## O que acontece em cada tipo de alvo

| alvo | no `press` |
|---|---|
| dock, ícone, teclado, botão de janela | `triggerFingerTouchTap` → a ação, na hora |
| superfície de janela (vidro pelado, app nativo) | `handTouch(hit, 0)` = **DOWN**; arrastar manda **MOVE**; sair do `pressed` manda **UP** |

O caminho de superfície é o de uma tela de toque de verdade: apertar manda `down`, arrastar manda
`move` (slider, rolagem dentro do app), soltar manda `up` — e é o `up` que fecha o clique. Assim um
toque não vira dois: o botão de DOM é clicado pelo `presstap`, a superfície é tocada pelo caminho de
toque, nunca os dois para o mesmo ponto.

## Como ajustar

Todos os números estão em `POKE`, no topo de `web/src/direct-touch.js`, em metros e milissegundos:

```js
hoverEnter: 0.075,  // a partir daqui o botão acende
hoverExit:  0.12,   // histerese do destaque
contact:    0.012,  // encostado: efeito de contacto na ponta
nearBand:   0.035,  // banda onde a pressão relativa vale
press:     -0.006,  // pressão absoluta (6 mm atrás do vidro)
push:       0.030,  // pressão relativa (30 mm de avanço)
halfway:    0.45,   // ...e 45 % do caminho até o vidro conta como pressão
release:    0.02,   // volta a sair do vidro
rearm:      0.06,   // e só aqui pode existir outro clique
```

## Testes

`tests/direct-touch.test.mjs` cobre cada clique acidental que o usuário descreveu, no relógio real do
rastreador (33 ms por quadro): dedo passando por cima, dedo parado no ar, tremor de ±8 mm, dedo
apertado por dois segundos, saída e volta rápida, dois cliques dentro do debounce, mão que aparece já
atravessada, amostras preditas, troca de alvo no meio do gesto e as duas mãos independentes.

`tests/entry-menu.test.mjs` também falha se o caminho antigo (`checkFingerLift`, `checkForwardPush`,
`pulledOffTarget`) voltar ao `windows.js`.

## Limites honestos

* A profundidade vem do rastreamento de mão do celular (câmera traseira, MediaPipe). Com a mão muito
  perto da lente, ou em luz ruim, a medida degrada — nesse caso o toque simplesmente não acontece:
  não existe caminho alternativo que clique sem pressão.
* Não há retorno tátil. O "contacto" é visual (anel da ponta, alvo afundado, ponto azul).
* O ajuste fino de `press`, `push` e `nearBand` é por aparelho: eles foram escolhidos para mãos a
  15–45 cm da câmera, que é onde a dock e as janelas ficam. Um valor muito folgado traz de volta o
  clique acidental; muito apertado faz o usuário apertar duas vezes.
