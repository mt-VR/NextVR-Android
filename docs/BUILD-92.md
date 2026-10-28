# Build 92 — avatar 3D humano, Configurações espaçadas e conta Google de verdade

Três pedidos nesta rodada:

1. *“o do Google é pra abrir aquela firebase algo assim que dá acesso às contas do Google, e você
   clica em continuar como (sua conta), aí a sua conta real entra”*;
2. *“deixa mais espaçamento nas configurações, tá tudo muito apertado, olha isso, e na página 3
   também”*;
3. *“o boneco em 3D é desse jeito, não aquele feio”* (print do avatar do PICO Motion Tracker).

APK: `https://github.com/mt-VR/NextVR-Android/raw/apk-dist/dist/ATMOXR.apk` (versionCode **92**).

## 1. Conta Google / YouTube com “Continuar como (sua conta)”

* **`NextVrActivity`** ganhou a ponte `openExternal(String url)`: abre a página no **navegador de
  verdade** do celular (`Intent.ACTION_VIEW`), só `http`/`https` (nada de intent arbitrário vindo da
  página). Se não houver navegador, mostra um aviso em vez de falhar calado.
* **`entry-menu.js`** monta a URL da **escolha de conta do Google**:
  `https://accounts.google.com/AccountChooser?continue=<destino>` — é a mesma tela que o login do
  Firebase usa por baixo dos panos. Google → `myaccount.google.com`, YouTube → `youtube.com`.
* O botão do serviço chama `NativeXR.openExternal(...)` e avisa o shell
  (`browser: true`), então **não** abre uma segunda janela interna (`apps.js`).
* O texto do painel explica: “toque em **Continuar como (sua conta)** e a sua conta real entra”.
* Por que no navegador e não numa janelinha: o Google **recusa** login dentro de WebView (“este
  navegador ou app pode não ser seguro”). Só no navegador do sistema a lista de contas do aparelho
  aparece — era exatamente isso que faltava para a conta real entrar.
* Limite honesto: com essa tela o **login** é real e é o do Google. Um vínculo OAuth completo
  (token voltando para o app, foto/nome puxados da conta) exige um projeto Firebase com
  `client_id`/`client_secret` e um servidor de callback — o app não inventa esse token; ele abre a
  mesma tela que o Firebase usaria.

## 2. Configurações com espaçamento (Abas 1, 2 e 3)

| O que | Antes | Agora |
| --- | --- | --- |
| espaço entre cartões | 8 px | **16 px** (Aba 3: 18 px) |
| respiro dentro do cartão | 7×10 px | **12×14 px** |
| título do cartão | 10 px, cortado com “…” | **11,5 px**, quebra linha e aparece inteiro |
| botões | 3×4 px, 9 px | **8×10 px, 11 px** |
| abas do topo | 4×11 px | **7×14 px, 12 px** |
| painel | gap 7 px, padding 10×12 | gap **14 px**, padding **14×16** |
| apps da Dock | 8 px de espaço | **12 px**, tile um pouco maior |

E para nunca cortar conteúdo: as linhas do grid agora são `minmax(min-content, 1fr)` e a aba rola
verticalmente se precisar (`overflow-y:auto`).

## 3. Avatar 3D com proporções de gente (estilo PICO)

O boneco antigo tinha cabeça de 21,5 de raio para um corpo de 161 → **3,7 cabeças**: boneco de
desenho, com contorno preto em tudo e bolas nos ombros. O novo:

* **esqueleto explícito**: chão −96, quadril −14, ombros 30, cabeça 46,5 (raio 11,4) → altura ≈153
  com cabeça de 22,8 → **≈6,7 cabeças**, a proporção de uma pessoa adulta;
* **corpo em silhueta contínua** (`sweepBody` + `profileAt`): tronco, bacia e cada perna são
  desenhados como um contorno único a partir de uma tabela de largura/profundidade por altura. Como
  cada seção é uma elipse, a largura na tela é `hypot(w·cos(yaw), d·sin(yaw))` — o giro 360°
  continua com volume e sem “peças soltas”;
* **visual do avatar do PICO**: camiseta amarela de manga curta, calça escura (azulada, para não
  sumir no fundo), tênis branco, headset branco com a frente escura e cabelo curto com franja;
* **sem contorno preto**: luz difusa + brilho especular + recorte discreto;
* **estúdio limpo**: fundo escuro com luz vinda de cima e sombra no chão (a grade neon saiu);
* o retrato do perfil (128 px) agora enquadra cabeça e ombros sem cortar braço.

Todas as opções antigas do criador continuam funcionando (6 tons de pele, 6 cabelos, 7 cores, 4
visores, 4 roupas, acessórios e poses) — só o desenho e o padrão mudaram.

## Testes (`tests/build-92.test.mjs`)

5 testes novos: proporções de pessoa (≈6,7 cabeças), silhueta contínua com giro 360°, padrão do
avatar do PICO, espaçamento medido no CSS (16/12/11,5/8…), escolha de conta do Google + ponte
`openExternal` restrita a http(s), e versionCode 92. Suíte completa: 179 testes.
