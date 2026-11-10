# Créditos — XFC

Tudo que entra no jogo precisa estar aqui: origem, licença e o arquivo. As
pastas também têm créditos detalhados por tipo (`assets/crests/CREDITS.md`,
`assets/players/CREDITS.md`).

## Código e bibliotecas

| Recurso | Versão | Licença | Onde |
| --- | --- | --- | --- |
| three.js | 0.160.0 (pacote npm) | MIT | `vendor/three.module.js` |
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

O elenco é gerado por código (`src/match3d/player.js`) — não há modelo externo
rigged no pacote. Quando um `.glb` de terceiros for adicionado, ele deve entrar
aqui com autor, licença e URL **antes** do merge.
