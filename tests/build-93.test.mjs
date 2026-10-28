// Build 93 — organização das Configurações (opções "em pé"), World Lock dentro do 6DoF e o cartão de
// login com Google aparecendo assim que o app abre.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = p => readFileSync(p, 'utf8');
const entrySrc = () => read('web/src/entry-menu.js');
const indexHtml = () => read('web/index.html');

test('Build 93: settings are one organized column with the options stacked (em pé)', () => {
  const entry = entrySrc();
  const css = indexHtml();

  // As três abas usam a lista vertical (nada de pastilhas espremidas numa linha).
  const lists = entry.match(/entry-bento-grid--list/g) || [];
  assert.ok(lists.length >= 2, 'abas 1 e 2 na lista vertical');
  const optLists = entry.match(/class="entry-opt-list"/g) || [];
  assert.ok(optLists.length >= 10, `cada grupo de opções é uma coluna (${optLists.length} grupos)`);

  // Nenhum grupo antigo de botões lado a lado dentro das Configurações.
  const settingsBlock = entry.slice(entry.indexOf('data-entry-panel="settings"'), entry.indexOf('dockAppsPageHtml()'));
  assert.ok(!settingsBlock.includes('entry-seg-row'), 'sem fileiras de botões apertados nas Configurações');
  assert.ok(!settingsBlock.includes('style="flex-wrap:wrap;gap:5px"'), 'sem micro-gaps inline');

  // E as opções ficam EM PÉ: uma embaixo da outra, largura toda, texto inteiro.
  assert.ok(css.includes('.entry-opt-list{'), 'lista vertical');
  assert.ok(/\.entry-opt-list\{[^}]*flex-direction:column/.test(css), 'empilhadas na vertical');
  assert.ok(/\.entry-opt-list \.entry-seg-btn\{[^}]*width:100%/.test(css), 'cada opção ocupa a linha');
  assert.ok(/\.entry-opt-list \.entry-seg-btn\{[^}]*white-space:normal/.test(css), 'o nome não é cortado');
  assert.ok(/\.entry-opt-list \.entry-seg-btn\{[^}]*text-align:left/.test(css), 'nomes alinhados como lista');
  assert.ok(/\.entry-opt-list \.entry-seg-btn\{[^}]*padding:13px 16px/.test(css), 'altura confortável');
});

test('Build 93: World Lock lives inside 6DoF, it is not a separate switch', () => {
  const entry = entrySrc();
  assert.ok(!entry.includes('data-entry-worldlock='), 'o botão separado do World Lock saiu');
  assert.ok(entry.includes('6DoF + World Lock'), 'o modo 6DoF diz que já vem com o World Lock');
  assert.ok(entry.includes('setWorldLock(enableSixDof)'), 'escolher 6DoF liga o World Lock');
  assert.ok(entry.includes('O 6DoF já vem com o <b>World Lock</b> ligado'), 'e explica isso na tela');
  // 3DoF desliga (não faz sentido travar o mundo sem 6DoF).
  const block = entry.slice(entry.indexOf("root.querySelectorAll('[data-entry-dof]')"));
  assert.ok(block.slice(0, 700).includes('setWorldLock(enableSixDof)'));
  assert.ok(!block.slice(0, 700).includes('setWorldLock(!S.worldLock)'), 'sem alternância solta');
});

test('Build 93: the Google sign-in card shows up when the app opens', () => {
  const entry = entrySrc();
  assert.ok(entry.includes('let signInOpen = !signedIn();'), 'abre no primeiro carregamento');
  assert.ok(entry.includes('data-entry-signin="1"'), 'cartão de login no menu');
  assert.ok(entry.includes('data-entry-google-signin'), 'com o botão Entrar com Google');
  assert.ok(entry.includes('Entrar no ATMO XR'), 'título do cartão');
  assert.ok(entry.includes("googleChooser('https://myaccount.google.com/')"),
    'usa a escolha de conta do Google (Continuar como)');
  assert.ok(entry.includes("window.NativeXR.openExternal(url)"), 'abre no navegador do celular');
  assert.ok(entry.includes('data-entry-signin-done') && entry.includes('JÁ ENTREI'),
    'depois de entrar, o jogador confirma');
  assert.ok(entry.includes('data-entry-signin-skip'), 'e pode deixar para depois');
  assert.ok(entry.includes('S.googleSignedIn = 1'), 'o login fica guardado');
  assert.ok(read('web/src/core.js').includes('googleSignedIn: 0'), 'estado salvo nas configurações');
  assert.ok(indexHtml().includes('.entry-signin-card{'), 'cartão branco estilo Google');
  assert.ok(indexHtml().includes('.entry-signin-backdrop{'), 'por cima do menu');
});

// O cartão cobre o menu enquanto está aberto (é isso que o jogador vê ao abrir o app), então o teste
// de ponta a ponta em Chromium precisa fechá-lo em "Agora não" antes de pinçar o Iniciar. Sem isso o
// botão do Google intercepta o toque e o menu não fecha — foi assim que a validação do CI caiu.
test('Build 93: the browser E2E closes the sign-in card before pinching', () => {
  const e2e = read('tests/reference-ui.test.mjs');
  assert.ok(e2e.includes('.entry-signin-card'), 'o E2E confere que o cartão aparece ao abrir');
  assert.ok(e2e.includes("document.querySelector('[data-entry-signin-skip]').click()"),
    'o E2E fecha o cartão em "Agora não"');
  assert.ok(e2e.indexOf('data-entry-signin-skip') < e2e.indexOf('entryStart='),
    'e faz isso antes de mirar o botão Iniciar');
});

test('Build 93: the shipped APK is version 93', () => {
  assert.ok(read('nextvr-android/build.gradle').includes('versionCode 93'));
});
