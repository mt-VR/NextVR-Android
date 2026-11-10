# Créditos — XFC

Tudo que entra no jogo precisa estar aqui: origem, licença e o arquivo. As
pastas também têm créditos detalhados por tipo (`assets/crests/CREDITS.md`,
`assets/players/CREDITS.md`).

## Código e bibliotecas

| Recurso | Versão | Licença | Onde |
| --- | --- | --- | --- |
| three.js | 0.160.0 (pacote npm) | MIT | `vendor/three.module.min.js` |
| GLTFLoader, SkeletonUtils, BufferGeometryUtils (three.js) | 0.160.0 | MIT | `vendor/GLTFLoader.js`, `vendor/SkeletonUtils.js`, `vendor/BufferGeometryUtils.js` |
| Inter (fonte) | — | SIL Open Font License 1.1 | `assets/fonts/*.woff2` |

## Arte das competições (v0.5.9)

| Arquivo | Origem | Uso |
| --- | --- | --- |
| `assets/competitions/ucl.jpg` | Imagem de referência enviada pelo cliente nesta conversa, tratada no projeto | Menu da UEFA Champions League |
| `assets/competitions/copa-america.jpg` | idem | Menu da Copa América |
| `assets/competitions/libertadores.jpg` | idem | Menu da Libertadores |
| `assets/competitions/world-cup.jpg` | idem | Menu da Copa do Mundo |
| `assets/competitions/*-news.jpg` | recortes das mesmas imagens de referência | Foto dos cartões de notícias/artilharia |

Os menus foram montados sobre essas imagens: a arte (estádio, troféu, emblema)
fica na foto e **todo o resto é DOM** (menu, carteira, cartões, seleção de time,
calendário, tabelas). As áreas cobertas pela interface foram desfocadas na
imagem para não deixar texto "fantasma" atrás dos controles reais.

Escudos, bandeiras, retratos de jogadores, estádios e texturas têm crédito nas
pastas correspondentes em `assets/`.

## Áudio

Os efeitos sonoros são sintetizados em tempo real (`src/audio.js`); nenhum
arquivo de áudio de terceiros é usado.

## Modelos 3D

O fallback é gerado por código (`src/match3d/player.js`) — é esse rig que carrega
uniforme, escudo, número e retrato.

### Jogador de futebol importado (padrão desde v0.5.16)

**Micah / Soccer player, standing**, por **Innerscene**, adaptado dos assets
CC0 do MakeHuman. O corpo, rosto, cabelo, camisa, short, meiões e chuteiras
são malhas/texturas do arquivo externo — não são roupa ou corpo feitos por
código no XFC. Não é Soldier, Michelle nem Xbot.

- [Página e dedicação CC0 do autor](https://www.innerscene.com/tools/library/3d-parts/soccer-player-standing-3d-person-team-sports-f55b1b4f).
- [Termos de uso](https://www.innerscene.com/tools/library/terms): CC0 1.0,
  permite uso, modificação e redistribuição comercial. Cópia da licença em
  `assets/players/models/licenses/CC0-1.0.txt`.
- Binário otimizado obtido pelo [espelho GitHub, commit fixado](https://github.com/niktolis/pitchvolt-ai/blob/7e5e192541c06c2788cf8341ae297d543e433b7b/web/public/assets/hero/neutral-59ee4cbe96e07698.glb).
  Origem e hashes de entrada/saída em `assets/players/models/footballer.source.json`.
- `tools/optimize-footballer.mjs` usa glTF-Transform/Meshoptimizer para reduzir
  a malha a 22.386 triângulos (~1,81 MB), preservando UVs e pesos.
- **O original é estático**, sem rig/animação. `tools/rig-footballer.py` adiciona
  pesos, esqueleto de 22 juntas e clipes idle/walk/run feitos para esse repouso.
  Mantém a geometria original; retira bola decorativa, número fixo e travas
  instanciadas. Neutraliza somente as texturas de tecido para receber a cor
  do time. Pele, cabelo e olhos não são tingidos.
- Chute, cabeceio, carrinho, queda, mergulho e comemoração são gestos locais
  em `models.js`; não são mocap recebido do autor.
- Frente verificada: **+Z**, sem meia-volta extra. Teste mede os olhos da
  malha deformada contra a velocidade, nos quatro sentidos.

O rig procedural antigo fica somente como fallback em caso de erro do GLB ou
modo leve explícito (`?models=2d`). `buildKit()` foi removido.

### Animações (Mixamo)

Biblioteca de clipes mocap em glTF, um clipe por arquivo, esqueleto
`mixamorig:*`, biblioteca legada. Não é carregada pelo modelo Micah atual:

| Pasta | Clipe | Origem |
| --- | --- | --- |
| `assets/animations/idle` | Soccer Idle | Mixamo (Adobe), via `MisterYI/deevid-mixamo-assets` |
| `assets/animations/jog` | Jogging | idem |
| `assets/animations/run` | Sprint | idem |
| `assets/animations/kick` | Soccer Penalty Kick | idem |
| `assets/animations/header` | Soccer Header | idem |
| `assets/animations/tackle` | Soccer Tackle | idem |
| `assets/animations/celebrate` | Cheering | idem |
| `assets/animations/dive` | Goalkeeper Diving Save | idem |
| `assets/animations/keeper-idle` | Goalkeeper Idle | idem |
| `assets/animations/throw-in` | Throw In | idem |

Licença: as animações vêm do Mixamo (Adobe), cujo uso em projetos é permitido
pela licença Mixamo; não redistribua os arquivos fora do aplicativo. A licença
do Mixamo não permite revender os assets "como estão" — dentro do XFC eles são
usados apenas para animar o jogo.
