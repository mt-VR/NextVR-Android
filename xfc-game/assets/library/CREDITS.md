# Biblioteca de assets enviada pelo usuário

Fonte: `biblioteca_assets_xfc27_corrigida.html`, anexada pelo usuário com pedido
expresso para incorporar faces, ícones, logos e camisas. SHA-256 e contagem em
`source.json`. O arquivo contém 1976 recortes JPEG em data URLs, sem nomes de
atletas ou catálogo de licenças. **Não presumimos licença pública, autoria,
identidade de cada rosto, endosso ou procedência oficial de EA/FIFA/DLS.**
Marcas/retratos continuam pertencendo a seus respectivos titulares.

`tools/import-asset-library.py` lê somente o array JSON, valida e decodifica
as imagens sem executar o HTML/JavaScript fornecido. Os JPEGs são preservados
nos arquivos `0001.jpg`…`1976.jpg`, sem upscale nem geração de novos rostos.
Classificação de tipo é aproximada; inclui duplicatas visuais, grupos, bandeiras
e fragmentos que a própria biblioteca chama de assets. Não escondemos recortes
nem prometemos que cada entrada seja uma textura utilizável diretamente.

- Faces: imagens 2D numeradas, associadas **pelo usuário** a jogadores nas telas.
  Nenhuma identidade foi inferida da fotografia e não são modelos/UVs de face 3D.
- Escudos: onze correspondências de marcas para clubes já cadastrados, conforme
  `LIBRARY_CRESTS` em `src/data/asset-library.js`, apenas como correspondências
  de referência. Desde v0.5.28 não há substituição automática. Escolhas locais permitem trocar
  ou restaurar o escudo original. Demais logos ficam disponíveis na galeria.
- Camisas: três atlas completos (#2, #406 e #417) adaptados por crops dos painéis
  centrais frente/costas para a projeção de camisa existente. Sem atribuir esses
  uniformes a um clube por suposição. Os PNGs `kit-*-front/back` são derivados
  dos JPEGs correspondentes. Resolução pequena preservada, não detalhe HD.
- Ícones: recortes numerados selecionáveis como ícone do perfil; desde v0.5.28 o ícone original é o padrão.

A integração é local/offline. O código não faz upload, não executa scripts do
anexo e só aceita IDs locais válidos no save. Crédito e indicação de origem não
substituem uma autorização de redistribuição comercial das imagens de terceiros.

## PNGs transparentes — v0.5.28

82 escudos individuais revisados têm derivados em `clean/NNNN.png`, gerados por
`tools/clean-library-crests.py`. Remoção de preto conectado às bordas, limpeza de
pequenas sobras periféricas e suavização do contorno; preto interno preservado.
Reamostragem Lanczos 2× para exibição, **não novos detalhes HD nem redesenho**.
Os JPEGs de fonte continuam intactos, assim como todos os logos anteriores em
`assets/crests`. Bandeiras, rostos, atlas e recortes não revisados não receberam
chroma key automático, evitando apagar faixas pretas ou conteúdo legítimo.
