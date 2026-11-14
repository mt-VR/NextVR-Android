# Referências da atualização integrada

Seis imagens fornecidas pelo usuário nesta conversa, preservadas sem esticar:
- entry.png: file_0000000080c4820e8255290982630e53.png
- hub.png: file_000000002aa8820e9685e2400fddc700.png
- agenda.png: file_00000000ff8c820e85582f57454e4c63.png
- plan.png: file_00000000b2a8820ea656358df9abbaba.png
- controls.png: file_00000000887c820eae0b36bbdcee0e70.png
- customise.png: file_000000009790820e85e2a60bf02113d7.png

Artes de referência do usuário, sem atribuição de licença aberta ou afiliação a
clubes/atletas/marcas. O modelo editável é Micah CC0 já creditado no projeto.
Dados desenhados nas imagens não são resultados do save nem notícias reais.

## Derivados usados na interface

`tools/prepare-season-art.py` recorta `player-tile.png` e `manager-tile.png`
da imagem de entrada, e `neymar.png` da referência anterior em
`../career/reference.png` (mesma procedência creditada naquela pasta).
As coordenadas de revisão 1568×882 são convertidas para os arquivos originais
1672×941. Não há upscale. CSS usa `object-fit: cover/contain`, sem esticar.

Correção v0.5.34: `entry.png`, `agenda.png`, `hub.png` e `customise.png` são
usadas INTEIRAS como a apresentação dos respectivos menus, com hotspots DOM.
`agenda.png` é o nome histórico do arquivo de **Continue sua jornada**, não a
agenda detalhada. `hub.png` é a **central do jogador com Mbappé**, não Neymar.
Somente os campos de clube/XP/resultado/calendário/notícia/tabela recebem dados
do save por cima; os números impressos não são usados como estado real.
A arte de personalização é a entrada para as categorias do editor 3D existente.
Os antigos recortes continuam preservados, mas não substituem essas quatro artes.
Não foi obtido um modelo novo: a prévia e a partida continuam usando o Micah
CC0, com variações de material, escala limitada e cabelo sobre a malha existente.
