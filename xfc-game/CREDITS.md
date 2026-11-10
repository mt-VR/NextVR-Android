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

O elenco é gerado por código (`src/match3d/player.js`) — é esse rig que carrega
uniforme, escudo, número e retrato.

### Elenco humano 3D (padrão do jogo)

O time em campo é um **corpo humano de verdade**, rigado e animado:

| Arquivo | Origem | Licença | Onde |
| --- | --- | --- | --- |
| `assets/players/models/footballer.glb` | `Michelle.glb`, personagem Mixamo distribuído nos exemplos do three.js (repositório `mrdoob/three.js`, MIT) | Mixamo/Adobe (uso livre) + exemplo three.js (MIT) | 3,2 MB, 16.340 vértices, 65 ossos `mixamorig*`, 4 texturas de pele/roupa |
| `assets/animations/<ação>/<ação>.glb` | Clipes Mixamo (idle, jog, run, chute, cabeceio, carrinho, comemoração, mergulho, goleiro, lateral) | Mixamo/Adobe | biblioteca mocap do repositório |

O esqueleto do modelo casa com os clipes quase em repouso (delta médio de 6,3°
por osso; só o quadril raiz difere ~91°, corrigido por `retargetClip()`), por
isso a animação de futebol roda sem distorcer. A cor do time entra tingindo o
material (`white.lerp(cor, 0.55)`), o que preserva a textura de pele e muda
calça, camisa e chuteira.

O rig procedural continua no jogo como reserva (`?models=2d` ou
`window.__XFC_GLTF = false`) e é o que roda se o `.glb` faltar.

### Animações (Mixamo)

Biblioteca de clipes mocap em glTF, um clipe por arquivo, esqueleto
`mixamorig:*`, usada pelo caminho glTF:

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
