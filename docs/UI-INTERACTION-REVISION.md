# Revisão da UI, input e janelas flutuantes

## Escopo e referência visual

A revisão usa `new_references.zip` como fonte visual principal (SHA-256
`268ee731352e5385e1b9ea111dac7f0fe6611627959459f3dd110412b73cf42d`). O arquivo contém um
`index.html` autocontido; portanto, os recursos atuais foram extraídos dos vetores inline, não de
arquivos inexistentes:

- marca `N`: `web/assets/nextvr-n.svg`;
- ícones de fechar, centralizar, mover, câmera, volume, Wi-Fi, configurações e outros:
  `web/src/reference-icons.js`;
- tratamento de vidro e cores violeta: `web/index.html`.

`references.zip` é mantido somente como referência estrutural legada para componentes que não
existem no arquivo novo — janelas, arco multitarefa, loja/biblioteca e teclado. Quando há diferença,
o vetor e o tratamento de `new_references.zip` prevalecem. Os recursos são empacotados localmente;
a UI não depende de CDN ou de uma fonte de emojis para renderizar esses controles.

## Causas encontradas

### Input simultâneo

Havia três rotas independentes para ativar a interface:

1. o PhoneXR publicava pinça/toque direto;
2. `GLSurfaceView.setOnTouchListener` transformava DOWN/UP/CANCEL da tela (e o botão do visor) em
   `window.nextvrTrigger`, sempre no centro do olhar;
3. a primeira execução mantinha `DwellSelection`, que clicava no idioma após 1,2 s de olhar.

Ocultar o retículo não resolveria: os callbacks 2 e 3 continuariam clicando. Por isso foram
removidos o listener Android, `nextvrTrigger`, dwell/gaze, o método JNI de trigger e seus testes
antigos. O shell privilegiado agora expõe `handTouch`; somente o adaptador que acabou de processar
um frame PhoneXR o chama. A câmera continua funcionando normalmente para passthrough e tracking.
Os botões Android de fechar/configurar o visor continuam sendo controles nativos de segurança e
não são encaminhados à UI VR.

### Saltos e posição excessivamente baixa

A alça branca calculava o ponto de drag usando `window.position.length()`. Essa distância incluía a
altura absoluta da janela em relação à origem do mundo e, ao iniciar, colocava o centro diretamente
no raio, descartando o offset entre mão e janela. Isso causava salto no primeiro frame.

O punho usava `radius * direction.y / hypot(direction.x, direction.z)` para obter altura. Perto do
horizonte o denominador podia ficar pequeno, ampliando muito uma variação curta da mão. Esse caminho
não aplicava o limite vertical usado pela alça e começava a desancorar assim que `fist=true`.

Agora punho e alça usam o mesmo estado de gesto:

- o gesto é armado no DOWN/fechamento do punho, mas só começa após 18 px lógicos de deslocamento;
- um plano espacial fixo passa pelo centro inicial e preserva o offset mão–janela;
- jitter abaixo de 6 mm é ignorado e uma amostra não pode deslocar mais de 14 cm;
- distância, yaw e altura são limitados no espaço local do workspace;
- o limite vertical considera metade da altura **já redimensionada**, mantendo a janela inteira na
  faixa utilizável;
- perder tracking cancela o contato; não converte cancelamento em clique/release acidental.

Não há compensação arbitrária adicionada ao algoritmo antigo: a conversão e o modelo de drag que
produziam a singularidade foram substituídos.

## Movimentação da dock

A dock agora tem uma linha branca curta e uma área de captura maior e invisível na margem inferior.
Pinçar essa alça inicia um drag no plano espacial inicial, preservando o offset entre o ponto de
captura e o centro da dock; a dock só se solta depois do mesmo limiar deliberado de 18 px usado
pelas janelas. Assim, um pinch parado não a desloca. A posição é limitada ao arco frontal e à faixa
vertical confortável; a dock passa a encarar o usuário e fica nessa posição até Centralizar ou
recentralizar a vista. A alça tem um hit-test 3D próprio, separado dos botões para que a pinça nela
nunca abra um app. A posição padrão do headset foi ajustada de 45 cm para 55 cm.

## Redimensionamento

Todas as instâncias da classe de janela recebem uma alça vetorial no canto inferior direito e um
plano de hit independente. Uma pinça nessa alça não entra no caminho de conteúdo nem no de drag.
Após um limiar próprio de 14 px, a distância mão–centro controla uma escala proporcional por janela.

- mínimo: `0,72×`;
- máximo: `1,40×`;
- máximo adicional calculado pelo espaço vertical disponível;
- centro da janela permanece fixo;
- proporção do DOM e das superfícies de navegador permanece fixa, sem corte ou distorção;
- o atlas mantém as mesmas dimensões lógicas e ganha resolução física via matriz espacial, sem
  realocar slots ou interferir em outra janela.

A escala individual é usada pelo painel visual, superfície de hit, alça de movimento, alça de
redimensionamento, toque próximo, punho e composição nativa.

## Codificação

Os arquivos HTML e XML já declaram UTF-8, e `WebSurface` responde explicitamente com `UTF-8`.
A revisão também fixa `JavaCompile.options.encoding`, grava saídas web explicitamente em UTF-8 e
adiciona uma auditoria automatizada que:

- decodifica com modo estrito todos os textos de UI/configuração/documentação;
- procura padrões comuns de mojibake, incluindo corrupção de caracteres cedilha/til;
- confere as declarações nas fronteiras HTML, Android XML, Gradle e WebView.

O texto da primeira execução contém `faça uma pinça` e é coberto por regressão.

## Validação automatizada

Os testes cobrem, sem declarar validação em aparelho físico:

- ausência estática das rotas touchscreen, gaze, viewer trigger e JNI trigger;
- olhar mantido sem seleção e escolha do idioma por pinça PhoneXR;
- DOWN/UP/CANCEL de navegador originados pela mão;
- limiar de drag (pinça/punho parado não move), filtro de salto e limites espacial/vertical;
- redimensionamento proporcional, limites, centro estável e conteúdo `1040×660` sem corte;
- janelas/dock ancorados durante movimento de cabeça, repin e multitarefa;
- recursos e paths exatos da referência nova, inclusive hash do arquivo;
- UTF-8/mojibake;
- testes Java/Kotlin/C++, shaders, câmera, hand tracking e build Android existentes.

Ainda é obrigatório validar em telefone/headset os limiares com mãos reais, conforto, alinhamento
óptico, transparência do WebView, desempenho e comportamento térmico.
