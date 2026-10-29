// Build 94 — a conta Google CONECTA no app, como no Kwai e no TikTok.
//
// O usuário: "era pra a conta do Gmail se conectar com o app, tipo que a do Kwai se conecta com o
// app... (esses são meus e-mail)" — com a print da tela "Escolha uma conta / para continuar no Kwai"
// listando os e-mails do aparelho. Ou seja: a lista tem de ser a do CELULAR (AccountManager), não uma
// lista desenhada pela página, e a conta escolhida tem de ficar ligada ao perfil.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = p => readFileSync(p, 'utf8');
const entrySrc = () => read('web/src/entry-menu.js');
const indexHtml = () => read('web/index.html');
const activity = () => read('nextvr-android/src/main/java/com/nextvr/app/NextVrActivity.java');
const manifest = () => read('nextvr-android/src/main/AndroidManifest.xml');

test('Build 94: the phone accounts reach the page through the native bridge', () => {
  const act = activity();
  // A lista vem do AccountManager do Android (as contas Google do aparelho), nunca da página.
  assert.ok(act.includes('AccountManager.get(this)'), 'lê as contas do aparelho');
  assert.ok(act.includes('getAccountsByType("com.google")'), 'só contas Google');
  assert.ok(act.includes('public String googleAccounts()'), 'a página pede a lista');
  assert.ok(act.includes('public void requestGoogleAccounts()'), 'e pode pedir o acesso');
  assert.ok(act.includes('Manifest.permission.GET_ACCOUNTS'), 'permissão de contas');
  assert.ok(act.includes('window.nextvrGoogleAccounts&&window.nextvrGoogleAccounts('), 'devolve ao menu');
  // A tela "Escolha uma conta" do próprio Android, com "Adicionar conta" (allowAddAccount=true).
  assert.ok(act.includes('AccountManager.newChooseAccountIntent('), 'abre a escolha de conta do sistema');
  assert.ok(act.includes('new String[]{"com.google"},true'), 'filtrada nas contas Google e com "Adicionar"');
  assert.ok(act.includes('startActivityForResult(intent,22)'), 'espera a escolha');
  assert.ok(act.includes('AccountManager.KEY_ACCOUNT_NAME'), 'recebe o e-mail escolhido');
  assert.ok(act.includes('public void googleChooseAccount()'), 'a página pede essa tela');
  assert.ok(act.includes('window.nextvrGoogleAccount&&window.nextvrGoogleAccount('), 'devolve o resultado');
  assert.ok(act.includes('if(code==23) { pushGoogleAccounts(); return; }'), 'resposta da permissão');
});

test('Build 94: the app declares the accounts permission and keeps it request-time only', () => {
  const xml = manifest();
  assert.ok(xml.includes('<uses-permission android:name="android.permission.GET_ACCOUNTS" />'),
    'GET_ACCOUNTS declarada');
  const act = activity();
  // Nunca pede a permissão na abertura: só quando o jogador toca em conectar.
  assert.ok(!/onCreate[\s\S]{0,4000}GET_ACCOUNTS/.test(act), 'a permissão não é pedida ao abrir o app');
  assert.ok(act.includes('requestPermissions(new String[]{Manifest.permission.GET_ACCOUNTS},23)'),
    'pedida no toque');
});

test('Build 94: the card lists the real accounts like the Kwai screen', () => {
  const entry = entrySrc();
  assert.ok(entry.includes('Escolha uma conta'), 'mesmo título da tela do Kwai');
  assert.ok(entry.includes('para continuar no NextVR'), 'e o mesmo subtítulo, com o nome do app');
  assert.ok(entry.includes('data-entry-google-accounts'), 'a lista de contas do celular');
  assert.ok(entry.includes('data-entry-google-account='), 'cada conta é um botão');
  assert.ok(entry.includes('data-entry-google-choose'), '"Adicionar outra conta"');
  assert.ok(entry.includes('data-entry-google-permission'), 'e o pedido de acesso quando falta');
  assert.ok(entry.includes('window.NativeXR.googleAccounts()'), 'a lista vem da ponte nativa');
  assert.ok(entry.includes('window.NativeXR.googleChooseAccount()'), 'outra conta abre no sistema');
  assert.ok(entry.includes('Para continuar, o Google vai compartilhar o seu nome'), 'texto legal como no Kwai');
  // Escolher a conta conecta de verdade: e-mail no perfil, Google vinculado e sessão marcada.
  const connect = entry.slice(entry.indexOf('const connectGoogleAccount = email => {'));
  const block = connect.slice(0, 900);
  assert.ok(block.includes('S.googleSignedIn = 1'), 'marca a sessão Google');
  assert.ok(block.includes('S.accountEmail = mail'), 'guarda o e-mail escolhido');
  assert.ok(block.includes('accountLinkedIds(), \'google\''), 'vincula o Google no perfil');
  assert.ok(block.includes('signInOpen = false'), 'fecha o cartão');
  assert.ok(block.includes("emit('profile-updated'"), 'e o perfil do app é atualizado');
  // O caminho do navegador continua existindo como alternativa (e é o único no PC/teste).
  assert.ok(entry.includes('const openGoogleBrowserFallback = () =>'), 'alternativa pelo navegador');
  assert.ok(entry.includes('window.nextvrGoogleAccounts = raw =>'), 'recebe a lista nativa');
  assert.ok(entry.includes('window.nextvrGoogleAccount = raw =>'), 'recebe a conta escolhida');
  assert.ok(entry.includes("if (status === 'connected') { connectGoogleAccount(data?.email || ''); return; }"),
    'a escolha no Android conecta a conta aqui');
  // No Perfil, Google/YouTube também passam pela conta do aparelho antes do navegador.
  assert.ok(entry.includes("(id === 'google' || id === 'youtube') && typeof window.NativeXR?.googleChooseAccount === 'function'"),
    'os botões do Perfil usam a escolha de conta do Android');
});

test('Build 94: the account rows are readable (avatar, name, e-mail, one per line)', () => {
  const css = indexHtml();
  for (const selector of ['.entry-signin-accounts{', '.entry-signin-account{', '.entry-signin-avatar{',
    '.entry-signin-account-name{', '.entry-signin-account-mail{', '.entry-signin-add{']) {
    assert.ok(css.includes(selector), `${selector} existe`);
  }
  assert.match(css, /\.entry-signin-account\{[^}]*width:100%/, 'a linha ocupa a largura toda');
  assert.match(css, /\.entry-signin-account-mail\{[^}]*font-size:12\.5px/, 'e-mail legível');
  assert.match(css, /\.entry-signin-avatar\{[^}]*border-radius:50%/, 'avatar redondo como no Kwai');
});

test('Build 94: the shipped APK is version 94', () => {
  const code = Number((read('nextvr-android/build.gradle').match(/versionCode (\d+)/) || [])[1]);
  assert.ok(code >= 94, `versionCode ${code}`);
});
