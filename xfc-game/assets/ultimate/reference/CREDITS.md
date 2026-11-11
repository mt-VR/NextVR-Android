# Artes UT fornecidas pelo usuário

Duas colagens anexadas ao pedido desta versão:
- `file_000000004dc0820ebdd6d0c0118fcc59.png`: início, elenco, mercado, loja.
- `file_000000006cc0820e953c589c3ad429fb.png`: eventos, battles, walkout, temporada.

O usuário solicitou extração e uso no jogo. Não são assets oficiais licenciados
pela EA/FIFA, nem há licença pública presumida sobre marcas/retratos. Origem:
referências fornecidas pelo usuário; não foram baixadas de um jogo comercial.
`tools/extract-ultimate-reference.py` separa os oito painéis e recorta as áreas
decorativas. Números do nível, cartas do campo e cartas do walkout foram removidos
nas cópias de uso dinâmico; valores, jogadores, botões e recompensas são DOM real.
Mercado/eventos usam ilustração promocional identificada, não oferta garantida.
Os oito JPGs originais recortados são referências-fonte para reproduzir os crops.
Não há pontos pagos, leilões nem partidas online nesta implementação local.

## Uso integral e retratos (v0.5.25)

`home`, `market`, `store`, `events`, `battles` e `season` agora são fundos das
próprias telas inteiras, não banners de um menu redesenhado. `squad-field` mantém
o painel com área das cartas limpa para renderizar o elenco salvo; walkout usa
a cópia limpa com a carta realmente sorteada. Hotspots acessíveis fazem as ações.

`tools/extract-ut-portraits.py` recorta `neymar-portrait.jpg` do painel `market`
e `vinicius-portrait.jpg` do painel `walkout`. São **ilustrações/retratos das
referências fornecidas**, não fotografias oficiais verificadas nem prova de
licenciamento de imagem. Aplicados somente às cartas correspondentes. Os demais
retratos vêm do cadastro anterior e mantêm os créditos existentes de jogadores.
Não usar a cara de um atleta em outro ou em um atleta fictício para preencher
lacunas. Cartas sem imagem dizem “Sem retrato” ou “Fictício”.

## v0.5.26 — painéis sem recompressão adicional

`home.png`, `market.png`, `store.png`, `events.png`, `battles.png`, `season.png`:
crops de 834×469 pixels das mesmas duas fontes, preservados em PNG sem perda.
Script: `tools/extract-ut-lossless.py`. Não são reconstruções HD, não criam
pormenores ausentes das fontes e não usam geração de imagem. Texto dos links
principais/topo é DOM sobre o painel para não depender de letras raster ampliadas.
