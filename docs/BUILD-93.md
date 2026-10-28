# Build 93 — organização das Configurações, World Lock no 6DoF e login com Google ao entrar

Três correções pedidas:

1. *“não sabe o que é organização… os nomes aparecem deitados, não em pé”*;
2. *“aquele World Lock é pra tá no 6DoF, não ser separado”*;
3. *“não consigo ver o negócio do Google, quero que quando entrar no app apareça o negócio de fazer
   login com Google”*.

APK: `https://github.com/mt-VR/NextVR-Android/raw/apk-dist/dist/ATMOXR.apk` (versionCode **93**).

## 1. Configurações organizadas (opções em pé)

Antes: cada cartão era uma fileira de pastilhas minúsculas, com o nome cortado (“CÂMERA NOTURNA
(ESCURO = MODO NOTURN…”, “Mão…”). Agora:

* **uma coluna** (`entry-bento-grid--list`): um grupo embaixo do outro, com título;
* **opções empilhadas** (`entry-opt-list`): cada opção ocupa a linha inteira, texto **em pé**, na
  horizontal normal, alinhado à esquerda, com o nome completo — **nada de corte**;
* altura confortável (13×16 px de respiro, 13 px de fonte) e **✓** no lado direito da opção ativa;
* cabeçalho das Configurações quebra em duas linhas (título em cima, abas embaixo) em vez de
  espremer as abas;
* a aba rola quando o conteúdo não couber.

Grupos da **Aba 1**: Idioma · Dock & Personagem · Qualidade · Câmera & Movimento (3DoF/6DoF) ·
Volume · Brilho.
Grupos da **Aba 2**: Hand tracking (1 mão) · Mão PICO 4 · Cor da Dock · Janelas & Multitarefa ·
Câmera noturna · Ambiente & Passthrough. A **Aba 3** (apps na Dock) já era lista e ganhou mais
respiro.

## 2. World Lock dentro do 6DoF

O botão separado do World Lock saiu. Agora:

* **6DoF + World Lock (andar no espaço)** → liga `S.sixdof = 1` **e** `setWorldLock(true)`;
* **3DoF (só girar a cabeça)** → desliga os dois (sem 6DoF o mundo nem se move);
* um texto curto abaixo explica que o World Lock é parte do modo.

## 3. Login com Google ao abrir o app

* Assim que o menu carrega aparece um **cartão branco de login** por cima: logo do Google, “Entrar no
  ATMO XR” e o botão **“Entrar com Google”**;
* o botão abre `accounts.google.com/AccountChooser?continue=…` — a mesma escolha de conta que o login
  do Firebase usa — **no navegador do celular** (`NativeXR.openExternal`), onde aparecem as contas do
  aparelho e o **“Continuar como (você)”**;
* ao voltar, **“JÁ ENTREI”** grava `S.googleSignedIn = 1` e a conta Google fica marcada como vinculada
  no Login/Perfil; **“Agora não”** fecha o cartão (ele volta a aparecer na próxima abertura, até a
  conta ser vinculada);
* sem a ponte nativa (PC/teste) a tela abre na janela interna do app.

## Testes

`tests/build-93.test.mjs` (5 testes): opções empilhadas e sem corte de texto, World Lock embutido no
6DoF (e o botão separado ausente), cartão de login presente com `AccountChooser` + `openExternal` +
`JÁ ENTREI`, o teste de navegador fechando o cartão antes de pinçar o Iniciar, e versionCode 93.
Suíte: **184 testes, 0 falhas**.

### Correção da validação (mesma Build 93, sem mudar o APK)

O teste de navegador (Playwright, só roda no CI) falhou na primeira rodada: o cartão do Google cobre
o menu de entrada — de propósito, é o que o jogador vê ao abrir o app — e o toque simulado que aperta
**Iniciar** caía no cartão, então o menu nunca fechava (`waitForFunction` estourava em 30 s). O teste
agora confere que o cartão aparece ao entrar, toca em **“Agora não”** e só então pinça o Iniciar. Um
teste estático em `tests/build-93.test.mjs` garante que o E2E continua fechando o cartão antes de
mirar o botão — é a regressão que derrubou a rodada `40633284996`.
