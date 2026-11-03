# Palm Cursor

A bolinha entre o polegar e o indicador é o cursor de mão do NextVR. Esta é a regra dela.

## Quando aparece

**Palma virada para cima → aparece. Palma virada para baixo → desaparece.** Em qualquer uma das mãos,
e cada mão tem o seu próprio cursor (duas mãos levantadas, duas bolinhas — nenhuma delas depende da
outra).

A orientação **não** é a altura da mão, nem a direção em que os dedos apontam, nem "a palma está de
frente para a câmera". Ela vem do plano da palma:

```
u = MCP do indicador (5) − pulso (0)
v = MCP do dedo mínimo (17) − pulso (0)
n = u × v                    (normal do plano da palma)
para fora da palma = +n na mão esquerda, −n na mão direita
palma para cima = componente y dessa normal, no espaço da cabeça (+1 cima, −1 baixo)
```

Três detalhes que fazem isso funcionar:

* **A mão física manda no sinal.** A mesma pose na mão esquerda é a imagem espelhada da direita, então
  a normal é orientada por mão. Sem isso a bolinha aparecia na mão errada e a orientação se invertia
  quando as mãos se cruzavam.
* **Espaço da cabeça, não da imagem.** Os landmarks 3D que o rastreador publica (`head`, em metros,
  com o olho na origem) são usados assim que existem. Girar o corpo, andar ou levantar a mão não muda
  nada; a posição vertical da mão nunca entra na conta.
* **Sem 3D, o que dá para saber.** Se o pacote daquele quadro vier só com os 63 landmarks 2D, não é
  possível distinguir "palma para cima" de "palma de frente"; nesse caso o único sinal usado é o
  polegar contra o MCP do indicador (o dorso da mão), e ele só serve para **não** acender. É o que
  evita a bolinha sumir num aparelho cujo rastreador não publicou os landmarks 3D do quadro.

## Estabilidade

Um portão por mão (`web/src/palm-cursor.js`) cuida do resto — ele não desenha nada, só decide:

```js
showAt:      .34,   // acende acima disto (palma claramente para cima)
hideAt:      .16,   // e só apaga abaixo disto (histerese)
smoothTauMs: 120,   // suavização da orientação
graceMs:     280,   // mão sem medida por este tempo antes de apagar
fadeMs:      180,   // saída em fade (casa com o CSS)
```

* **Suavização**: a orientação é um filtro de primeira ordem, então o tremor dos landmarks não chega à
  decisão. Um giro de 2 s passa por 60 quadros e muda o estado **duas** vezes (liga e desliga).
* **Histerese**: um valor entre .16 e .34 mantém o estado atual. Mão parada na zona morta não pisca.
* **Tolerância**: um quadro perdido (ou um quadro com palma ilegível) não apaga nada; sem medida por
  mais de `graceMs`, a bolinha sai em fade. Mão que desapareceu de vez: o elemento é removido na hora.
* **Custo**: uma conta de produto vetorial por mão por quadro, sem alocação e sem relógio global — o
  tempo entra por parâmetro, e é por isso que os testes conseguem dirigir o portão quadro a quadro.

## O que NÃO mudou

* A posição continua entre o polegar e o indicador (`bolinhaNormalizedPoint`, o mesmo ponto de antes).
* O gatilho de pinça da bolinha continua igual: com a bolinha acesa e a pose de arminha feita, fechar
  os dedos alterna Dock/Apps (mão direita) ou abre a janelinha de Brilho e Som (mão esquerda). O
  sistema de pinça, os controles da dock e o resto da interface não foram tocados.
* A bolinha continua um cartão redondo com o logo, e a animação de "ativou" continua igual — agora
  sem recriar o elemento a cada gesto (era mais um motivo de piscada).

## Tremor e deformação da mão (lado nativo)

Duas coisas foram corrigidas no rastreador (`PhoneXrHands.kt`), ambas independentes do cursor:

* **O filtro estava, na prática, desligado.** Os `OneEuro` dos landmarks usavam `minCutoff=150 Hz`;
  a 30 quadros/s isso passa ~97 % do valor cru. Todo o tremor do MediaPipe ia direto para a silhueta.
  Agora o repouso é filtrado de verdade (`minCutoff=3 Hz`) e o `beta` alto devolve o valor cru assim
  que a mão se move — silêncio no repouso, nenhum atraso no movimento.
* **O limite de alcance deformava a mão.** Cada landmark era cortado contra um teto fixo, então um
  solavanco de um quadro esticava o dedo até o teto e ele voltava no quadro seguinte: a mão se
  contorcia. Agora o corte é contra o raio do **quadro anterior** (um salto de mais de 55 % num
  quadro só é ruído, não movimento) e o teto duro fica só como última barreira.
* **Reaparecer não deforma.** O pulso era misturado com o quadro antigo enquanto os dedos iam para a
  posição nova, e a palma esticava. O ajuste de reaquisição agora é uma **translação** da mão inteira:
  a forma fica rígida e é a posição que desliza.

## Limites honestos

* A orientação depende da qualidade do rastreamento. Mão muito perto da lente, luz ruim ou mão
  parcialmente fora do quadro degradam os landmarks 3D; nesse caso a bolinha simplesmente não aparece
  (nunca aparece por engano).
* Sem landmarks 3D, "para cima" e "para a câmera" são indistinguíveis: o aparelho mostra a bolinha com
  a palma visível e a esconde com o dorso, nada mais. Em uso normal o rastreador publica os 3D.
* O "para cima" é o da cabeça (o eco da orientação do celular no VR Box), não o do mundo com gravidade
  medida por acelerômetro: com a cabeça muito inclinada, o referencial inclina junto.
* Não há retorno tátil: a bolinha e o cartão de ativação são a única confirmação.
