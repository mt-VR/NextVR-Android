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

O jogo também sabe carregar um personagem glTF externo
(`assets/players/models/footballer.glb`, ligado por `?models=glb`), com
`src/match3d/models.js` cuidando de escala, orientação, cor do time e clipes.

| Arquivo | Origem | Licença |
| --- | --- | --- |
| `assets/players/models/footballer.glb` | `Soldier.glb` do repositório do three.js (personagem Mixamo "Vanguard") | Mixamo/Adobe (uso livre em projetos) + exemplo three.js (MIT) |

Limitação conhecida: esse personagem foi exportado com orientação de repouso
diferente da dos clipes de futebol do Mixamo, então as pernas e o tronco
encaixam (via `retargetClip()`), mas os braços ficam torcidos nos gestos. Por
isso o elenco visível do jogo continua sendo o rig procedural — o caminho glTF
é opt-in.

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
