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
  `LIBRARY_CRESTS` em `src/data/asset-library.js`. Escolhas locais permitem trocar
  ou restaurar o escudo original. Demais logos ficam disponíveis na galeria.
- Camisas: três atlas completos (#2, #406 e #417) adaptados por crops dos painéis
  centrais frente/costas para a projeção de camisa existente. Sem atribuir esses
  uniformes a um clube por suposição. Os PNGs `kit-*-front/back` são derivados
  dos JPEGs correspondentes. Resolução pequena preservada, não detalhe HD.
- Ícones: recortes numerados selecionáveis como ícone do perfil; padrão #1953.

A integração é local/offline. O código não faz upload, não executa scripts do
anexo e só aceita IDs locais válidos no save. Crédito e indicação de origem não
substituem uma autorização de redistribuição comercial das imagens de terceiros.
