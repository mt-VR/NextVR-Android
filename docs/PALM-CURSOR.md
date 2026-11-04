# Palm Cursor

A bolinha entre o polegar e o indicador é o cursor de mão do NextVR. Esta é a regra dela.

## Quando aparece

**Palma voltada para a câmera/headset → aparece. Dorso da mão voltado para a câmera → desaparece.** Em
qualquer uma das mãos, e cada mão tem o seu próprio cursor (duas mãos levantadas, duas bolinhas — nenhuma
depende da outra). Girar a mão devagar atualiza a visibilidade junto com a orientação.

A orientação **não** é a altura da mão, nem a posição dos dedos, nem "a mão está alta, logo está virada".
Ela vem do plano da palma, em 3D:

```
u = MCP do indicador (5) − pulso (0)
v = MCP do dedo mínimo (17) − pulso (0)
n = u × v                       (normal do plano da palma)
para fora da palma = +n na mão esquerda, −n na mão direita
facing = n · (olho − palma)     (+1 palma de frente, −1 dorso, 0 de perfil)
```

Três detalhes que fazem isso funcionar:

* **A mão física manda no sinal.** A mesma pose na mão esquerda é a imagem espelhada da direita, então a
  normal é orientada por mão. Sem isso a bolinha aparecia na mão errada e a orientação se invertia quando
  as mãos se cruzavam.
* **Espaço da cabeça, não da imagem.** Os landmarks 3D que o rastreador publica (`head`, em metros, com o
  olho na origem) são usados assim que existem; a comparação é com a direção palma → olho. Levantar a
  mão, abaixar, andar ou girar o corpo não muda o resultado — só a orientação conta.
* **Sem 3D, o que dá para saber.** Com só os 63 landmarks 2D da imagem, a mesma conta é feita no plano da
  imagem (a convenção que o rastreador nativo usa, com compressão suave), então a bolinha não some num
  aparelho que não publicou os 3D daquele quadro. A diferença fica na precisão do ângulo, não no sinal.

## Estabilidade

Um portão por mão (`web/src/palm-cursor.js`) cuida do resto — ele não desenha nada, só decide:

```js
showAt:      .34,   // acende acima disto (palma claramente para a câmera)
hideAt:      .16,   // e só apaga abaixo disto (histerese)
smoothTauMs: 120,   // suavização da orientação
graceMs:     280,   // mão sem medida por este tempo antes de apagar
fadeMs:      180,   // saída em fade (casa com o CSS)
```

* **Suavização**: filtro de primeira ordem na orientação; um giro de 2 s passa por 60 quadros e muda o
  estado **duas** vezes (acende e apaga).
* **Histerese**: um valor entre .16 e .34 mantém o estado atual; mão parada na zona morta não pisca.
* **Tolerância**: um quadro perdido não apaga nada; sem medida por mais de `graceMs` a bolinha sai em fade;
  mão que desapareceu de vez tem o elemento removido na hora.
* **Entrada e saída suaves**: o cartão nasce com a classe `showing` (transparente, 82 % do tamanho) e assenta
  no quadro seguinte; ao sair recebe `hiding` e só é removido depois do fade.
* **Posição**: entre polegar e indicador, com passa-baixa de 70 ms e zona morta de ~0,0018 (≈1,5 px) —
  tremor menor não move a bolinha, movimento de verdade passa direto. A primeira amostra é exata.
* **Custo**: um produto vetorial e um produto escalar por mão por quadro, sem alocação e sem relógio global.

## O que NÃO mudou

* A posição continua entre o polegar e o indicador (`bolinhaNormalizedPoint`).
* O gatilho de pinça da bolinha continua igual: com a bolinha acesa e a pose de arminha feita, fechar os
  dedos alterna Dock/Apps (mão direita) ou abre a janelinha de Brilho e Som (mão esquerda). O sistema de
  pinça, os controles da dock e o resto da interface não foram tocados.
* A bolinha continua um cartão redondo com o logo, e a animação de "ativou" continua igual — agora sem
  recriar o elemento a cada gesto.

## Limites honestos

* A orientação depende da qualidade do rastreamento. Mão muito perto da lente, luz ruim ou mão parcialmente
  fora do quadro degradam os landmarks 3D; nesse caso a bolinha simplesmente não aparece (nunca por engano).
* Mão exatamente de perfil fica na zona morta: o estado atual é mantido até haver orientação clara.
* Não há retorno tátil: a bolinha e o cartão de ativação são a única confirmação.
