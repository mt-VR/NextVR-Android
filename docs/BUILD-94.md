# Build 94 — a conta do Gmail conecta no app (como no Kwai e no TikTok)

O pedido, com a print da tela do Kwai aberta no celular:

> *“era pra a conta do Gmail se conectar com o app, tipo que a do Kwai se conecta com o app, ou a do
> Tiktok, que fica assim (esses são meus e-mail)”*

Na print aparece **“Escolha uma conta — para continuar no Kwai”**, com as contas do próprio aparelho
(`haahaaahhaah@gmail.com`, `adarcos87@gmail.com`, …), o **avatar** de cada uma, o e-mail embaixo do
nome, **“Adicionar outra conta”** e o texto legal do Google. Era isso que faltava: na Build 93 o
cartão só mandava para o navegador e o jogador tinha que voltar e tocar em **JÁ ENTREI** — nada ficava
conectado de verdade.

APK: `https://github.com/mt-VR/NextVR-Android/raw/apk-dist/dist/NextVR.apk` (versionCode **94**).

## O que mudou

**1. A lista de contas é a do celular (não é desenho da página).**
O app lê as contas Google pelo `AccountManager` do Android
(`getAccountsByType("com.google")`) e entrega ao menu pela ponte nativa
`NativeXR.googleAccounts()`. A permissão `GET_ACCOUNTS` é declarada no manifesto e **pedida só no
toque**, nunca na abertura. Nada além do endereço de e-mail da conta Google é lido.

**2. O cartão virou a tela “Escolha uma conta”.**
Título **“Escolha uma conta”** + **“para continuar no NextVR”**, uma linha por conta com avatar
redondo colorido, nome, e-mail e seta; **“Adicionar outra conta”** com o ícone de pessoa; o texto legal
do Google; e o rodapé com **Usar o navegador do Google**, **JÁ ENTREI** e **Agora não**.

**3. Tocar na conta conecta.**
`connectGoogleAccount()` grava o e-mail escolhido (`accountEmail`), marca `googleSignedIn = 1`, põe
**google** nos vínculos do perfil (aparece **✓ VINCULADO** no Login/Perfil), preenche o nome do perfil
se estiver vazio, fecha o cartão e avisa o shell (`account-linked` + `profile-updated`). A conta Google
fica ligada ao perfil NextVR — como no Kwai.

**4. “Adicionar outra conta” abre a tela do próprio Android.**
`AccountManager.newChooseAccountIntent(..., new String[]{"com.google"}, true, "para continuar no NextVR
XR", ...)` — a mesma tela do sistema que o Kwai usa, já com “Adicionar conta”. O e-mail escolhido volta
em `onActivityResult` (request 22) e conecta sozinho (`nextvrGoogleAccount`).

**5. O Perfil também usa isso.**
Os botões **Google** e **YouTube** do Login/Perfil abrem a escolha de conta do Android primeiro; o
navegador (`AccountChooser` no Chrome) ficou como caminho alternativo — e é o único que existe no
PC/teste, onde não há ponte nativa. Nenhum vínculo falso: quem não tem conta no aparelho vê
**“Nenhuma conta Google neste celular”** e o botão de adicionar.

## Testes

* `tests/build-94.test.mjs` (5 testes): ponte nativa (`AccountManager`, `GET_ACCOUNTS` pedida só no
  toque, `newChooseAccountIntent` com “Adicionar”, resultado em `onActivityResult`), o cartão com a
  lista real, o `connectGoogleAccount` gravando e-mail + vínculo + sessão, o CSS das linhas e o
  versionCode 94.
* `tests/entry-menu.test.mjs` (Playwright, roda no CI): o cartão abre com **2 contas** simuladas do
  aparelho, mostra “Escolha uma conta / para continuar no NextVR”, o e-mail inteiro na linha, e ao
  tocar na conta o cartão fecha com `accountEmail` e `googleSignedIn` gravados.
* `tests/reference-ui.test.mjs` continua conferindo o cartão ao entrar e o “Agora não”.

Suíte: **189 testes, 0 falhas** (12 pulados: os que precisam de Chromium/APK).
