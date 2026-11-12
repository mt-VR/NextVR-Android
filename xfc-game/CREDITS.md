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

## Artes e integração enviadas pelo usuário (v0.5.17)

| Arquivo no jogo | Arquivo fornecido na conversa | Tratamento |
| --- | --- | --- |
| `assets/menus/tournaments.jpg` | `file_000000002d40820eb6b32c3a5a826c3f.png` | JPEG; fundo do seletor direto de competições |
| `assets/menus/stadiums.jpg` | `file_00000000a4ac820ebb45ce315df7f1d2.png` | JPEG; galeria de estádios |
| `assets/menus/training.jpg` | `file_00000000084c820e9319de3989c9de2a.png` | JPEG; centro de treino |
| `assets/brand/launch-neymar.jpg` | `file_000000001bbc820e8173eb1a51e7de62.png` | Substituição da abertura antiga |
| `assets/stadiums/{bernabeu,camp-nou,allianz,wembley,monumental}-menu.jpg` | Imagem de estádios acima | Recortes dos cinco cartões; previews, não panoramas fotográficos |

Material fornecido pelo usuário com pedido explícito de integração. Não foi
obtido de banco externo nem recebe uma nova licença CC0 por estar no projeto.
Direitos sobre fotografias, pessoas, marcas, escudos e troféus permanecem com
seus titulares; a entrega não afirma licença oficial de ligas/clubes/atletas.

Variações de pele/cabelo e atlas de uniformes são adaptações de código do projeto
sobre a malha Micah CC0 já creditada. Os escudos usam os arquivos existentes em
`assets/crests` (origens na pasta). Os uniformes são reconstruções estilizadas;
não são scans/arquivos oficiais de uma temporada. Novas geometrias de estádios
usam o construtor do projeto com configuração própria; os previews não provam
fidelidade arquitetônica dos modelos 3D.

## v0.5.18 — detalhe do gramado

- `assets/textures/turf-detail.jpg`: **Dark grass / grasslight-big**, por
  **qubodup**, a partir de Grass texture de **Blender Foundation
  (apricot.blender.org, 2009)** e **Lamoot (2009)**; adaptação de qubodup (2010).
  Licença **CC BY 3.0 Unported**, texto em
  `assets/textures/licenses/CC-BY-3.0.txt` e
  https://creativecommons.org/licenses/by/3.0/ .
- Fonte e atribuição: https://opengameart.org/content/dark-grass .
  Espelho utilizado: https://github.com/mrdoob/three.js/blob/7e89746a687bb88271253698fa108b1dd59825d0/examples/textures/terrain/grasslight-big.jpg
  (licença indicada no `readme.txt` da mesma pasta).
- Adaptação XFC: redução 2048→1024 px, recompressão JPEG qualidade 85;
  luminosidade aplicada no shader ao gramado com linhas/faixas próprias,
  repetição a cada 4 m e filtragem mipmap. Não implica endosso dos autores.
- Rede elástica e ajustes de animação/iluminação são código próprio. Nenhum
  asset ou código de EA Sports FC foi extraído ou incluído. A referência é
  visual, não uma reprodução do motor, captura de movimento ou física do FC.

## v0.5.19 — correções da partida

- Mantido o mesmo futebolista masculino Micah CC0 e sua malha/roupa importada.
  Trajetória dos pés por IK de duas articulações, pedalada, chapéu e poses de
  transportar/colocar a bola são adaptações próprias; não são mocap externo.
- Luvas: capa de látex própria no shader dos vértices das mãos (com 6 mm de
  espessura visual), mais punho geométrico ciano. Preserva dedos e esqueleto
  importados, sem esferas soltas atravessando as mãos.
- Arte da bola **XFC Orbit** (branco, azul, ciano e coral), placar e geometria de
  sustentação do estádio: autoria própria, sem logos/texturas do EA Sports FC.
- Prints de referência fornecidos pelo usuário: composição da câmera do
  pênalti e do placar horizontal. Não foram redistribuídos nem usados como
  texturas do jogo. Uma das capturas do XFC chegou parcialmente truncada;
  foi lida com recuperação local de JPEG apenas para diagnóstico.


## Coleção de camisas do HTML — v0.5.20

- Origem: `camisas_separadas.html`, fornecido pelo usuário nesta conversa.
- 69 PNGs associados a 54 clubes; identificação incerta excluída conforme autorização.
  Inventário completo, números originais e omitidos: `docs/shirt-collection.md`.
- Tratamento: remoção conservadora do fundo preto conectado (1–6%), fragmentos
  externos e margens. Mantida a resolução da origem, sem geração de logotipos.
- Fotos/escudos/marcas dos uniformes pertencem aos respectivos titulares; o envio
  não transfere direitos comerciais. Uso referencial no protótipo, sem afiliação.
- Escudos reais novos: fontes públicas fixadas por commit e páginas registradas
  em `assets/crests/CREDITS.md`. Não são anunciados como CC0/licenciados pelo clube.
- Micah CC0 permanece o atleta. As mudanças de corrida/goleiro/reposições são
  adaptações de animação do projeto, não um novo modelo, mocap ou asset EA FC.

## Interface e cartas — v0.5.21

Referência visual de pausa/placar fornecida pelo usuário na conversa
(`file_0000000082f8820ebe361acb35688e2b.png`). A interface foi implementada em
DOM/CSS com a marca SVG existente, não como imagem estática. O fundo é a própria
partida renderizada e congelada. Cartas usam apenas escudos e retratos já
creditados neste projeto; não usam templates oficiais de cartas EA. Não foram
adicionados modelos, texturas nem clipes de terceiros nesta revisão.

## Ultimate Team e competições domésticas — v0.5.22

- Referências enviadas pelo usuário: `file_000000006cc0820e953c589c3ad429fb.png`
  e `file_000000004dc0820ebdd6d0c0118fcc59.png` (UT); implementadas como
  componentes DOM/CSS, sem importar templates de cartas oficiais EA.
- `file_000000004d4c820e91a71038c5bce4d1.png` →
  `assets/competitions/brasileirao.jpg`; `file_000000007a98820ebeab166b1607f683.png`
  → `assets/competitions/copa-do-brasil.jpg`. Conversão JPEG, sem geração dos
  troféus/escudos. Artes fornecidas pelo usuário; autoria/licença comercial não
  verificadas. Marcas, patrocinadores e CBF permanecem dos titulares; não há
  afiliação oficial nem declaração de licença CC0 dessas imagens.
- Cards usam somente fotos e escudos do acervo já creditado, com as condições
  originais em `assets/players/CREDITS.md` e `assets/crests/CREDITS.md`.
  Retrato ausente não é substituído por foto de outra pessoa. As raridades
  Ídolo/Herói/Especial/TOTW são edições conceituais de jogo XFC.
- Placar: referência `IMG_20261111_001747.jpg`, refeito em DOM/CSS.
- Animações modificam o rig do mesmo Micah CC0. Sem modelo novo, mocap ou clipes EA.

## Pausa e placar — v0.5.23

Por solicitação de manter exatamente a arte da pausa enviada, marca, textos e
ícones foram recortados da referência em `assets/ui/pause/`, com transparência
sobre botões DOM. Origem e processo em `assets/ui/pause/CREDITS.md`. Campo e
placar não são imagens estáticas: preservam a partida/dados reais. O placar ao
vivo segue `IMG_20261111_001747.jpg` em DOM/CSS (escudos existentes e siglas
variáveis); na pausa usa a faixa preta da segunda referência.

## Ajustes v0.5.35

- `assets/ui/season/backdrops/*.jpg`: derivados das mesmas quatro artes de
  carreira fornecidas pelo usuário; extensão das colunas de borda para preencher
  telas largas sem cortar controles, repetir texto ou deformar atletas. Processo
  reproduzível em `tools/career-backdrops.mjs`. Mesmos direitos das artes originais.
- `footballer.glb`: reprocessado a partir do mesmo arquivo Micah CC0 fixado no
  manifest. Simplificação menos agressiva (.42/.001), sem substituir corpo/rig.
  Normais suaves e mechas leves são adaptações locais; não são escaneamentos,
  cabelo capturado ou modelos fotorrealistas licenciados de terceiros.

## Correção v0.5.36

Os derivados `season/backdrops` e seu gerador foram removidos após rejeição do
preenchimento lateral. As quatro PNG originais são apresentadas diretamente em
todo o quadro, com expansão horizontal autorizada pelo usuário. Sem imagem nova,
recorte, blur ou alteração de autoria/licença.

## Jogadores clássicos — v0.5.37

Direção visual baseada SOMENTE nos atletas das capturas fornecidas pelo usuário:
`Screenshot_2026-11-09-12-24-38-173_com.igpsp.jpg`,
`Screenshot_2026-11-09-12-44-59-089_com.igpsp.jpg` e
`Screenshot_2026-11-09-12-47-08-655_com.igpsp.jpg`.
Não foram extraídos/embutidos modelos, texturas, HUD, anúncios ou controles de
Bomba Patch/PES/emulador. As capturas não viraram assets do jogo.

A base continua derivada do Micah CC0 creditado no manifest; reotimização por
`tools/classic-footballer.mjs`, texturas difusas reduzidas e rig/UVs preservados.
Cortes sólidos em `classic-player.js` são geometria local autoral; variações de
rosto são deformações locais, não escaneamentos de atletas reais. O arquivo
`hair-fibers.js` da tentativa de realismo anterior foi retirado. As marcas dos
uniformes existentes continuam com a procedência já documentada.
