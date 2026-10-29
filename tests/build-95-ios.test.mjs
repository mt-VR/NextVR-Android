// Build 95 — o ATMO XR no iPhone.
//
// O usuário: "Arena, consegue fazer uma versão pra ipa?". O que dá para garantir sem um Mac nesta
// máquina é que o projeto esteja COMPLETO e coerente: a ponte nativa tem todos os nomes que a
// interface usa, a Key é a mesma do Android, o pacote leva a mesma interface, e o CI do macOS monta o
// .ipa. É isso que estes testes conferem.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';

const read = p => readFileSync(p, 'utf8');
const bridge = () => read('ios/ATMOXR/Resources/bridge.js');
const shell = () => read('ios/ATMOXR/Sources/ShellViewController.swift');
const licenseSwift = () => read('ios/ATMOXR/Sources/License.swift');
const licenseJava = () => read('nextvr-android/src/main/java/com/nextvr/app/License.java');

/** Todos os métodos de `window.NativeXR` que a interface web chama. */
function webBridgeMethods() {
  const methods = new Set();
  for (const file of readdirSync('web/src').filter(name => name.endsWith('.js'))) {
    const source = read(`web/src/${file}`);
    for (const match of source.matchAll(/NativeXR\??\.([A-Za-z_][A-Za-z0-9_]*)/g)) methods.add(match[1]);
  }
  return methods;
}

test('Build 95: a ponte do iPhone responde a TODOS os nomes que a interface usa', () => {
  const source = bridge();
  const methods = webBridgeMethods();
  // O mesmo teste que já pegou um comando esquecido no lado Android. Se a interface ganhar um
  // `NativeXR.foo` novo e o bridge.js do iOS não o tiver, o iPhone fica com um botão morto.
  assert.ok(methods.size >= 45, `esperava a ponte inteira, achei ${methods.size}`);
  const missing = [...methods].filter(name => !source.includes(`'${name}'`) && !source.includes(`NativeXR.${name} =`));
  assert.deepEqual(missing, [], `métodos sem equivalente no iOS: ${missing.join(', ')}`);
  // Os que devolvem valor na hora (o JS do iPhone lê do último estado enviado pelo Swift).
  for (const name of ['battery', 'brightness', 'volume', 'cameraLuma', 'torchAvailable', 'licenseStatus',
    'deviceCode', 'googleAccounts', 'appsLibrary', 'xrLibrary', 'xrState', 'activateKey']) {
    assert.ok(source.includes(`NativeXR.${name} =`), `${name}() responde na hora`);
  }
  assert.ok(source.includes('window.webkit.messageHandlers.nextvr.postMessage'), 'a ponte é a do WKWebView');
  assert.ok(source.includes('window.__nextvrNativeState = function'), 'recebe o estado do Swift');
});

test('Build 95: a Key do iPhone é a MESMA do Android (mesmas 4 chaves liberam os dois)', () => {
  const swift = licenseSwift();
  const java = licenseJava();
  const constant = (source, pattern) => (source.match(pattern) || [])[1];

  // Segredo, prefixo do MAC e alfabeto Crockford têm de ser idênticos: é o que faz uma Key gerada
  // pelo tools/gen-key.mjs valer no iPhone.
  const secret = constant(java, /SECRET = "([^"]+)"/);
  assert.ok(secret && secret.length > 20);
  assert.ok(swift.includes(secret), 'mesmo segredo do gerador de Keys');
  assert.ok(swift.includes(constant(java, /MAC_PREFIX = "([^"]+)"/)), 'mesmo prefixo do MAC');
  const alphabet = constant(java, /ALPHABET = "([^"]+)"/);
  assert.equal(alphabet.length, 32);
  assert.ok(swift.includes(alphabet), 'mesmo alfabeto (sem I, L, O e U)');
  for (const [name, value] of [['keyLength', 22], ['payloadLength', 16], ['macLength', 6]]) {
    assert.ok(swift.includes(`static let ${name} = ${value}`), `${name} = ${value}`);
  }
  // HMAC-SHA256 de verdade, com o mesmo recorte de 30 bits.
  assert.ok(swift.includes('HMAC<SHA256>.authenticationCode'), 'HMAC-SHA256');
  assert.ok(swift.includes('bits >> shift'), '6 grupos de 5 bits');
  // Presa ao aparelho, como no Android.
  assert.ok(swift.includes('identifierForVendor'), 'impressão digital do iPhone');
  assert.ok(swift.includes('"aparelho"') && swift.includes('"ja-ativa"'), 'mesmos motivos de recusa');
});

test('Build 95: o app carrega a mesma interface do Android, transparente, por cima da câmera', () => {
  const code = shell();
  assert.ok(code.includes('controller.add(self, name: "nextvr")'), 'recebe os comandos da página');
  assert.ok(code.includes('configuration.userContentController = controller'));
  assert.ok(code.includes('addUserScript(WKUserScript(source: source, injectionTime: .atDocumentStart'), 'bridge antes da página');
  assert.ok(code.includes('webView.isOpaque = false'), 'a página é transparente para o mundo aparecer');
  assert.ok(code.includes('loadFileURL(index, allowingReadAccessTo:'), 'carrega a interface do pacote');
  assert.ok(code.includes('subdirectory: "ui"'), 'de ui/index.html, igual ao Android');
  const camera = read('ios/ATMOXR/Sources/CameraFeed.swift');
  const motion = read('ios/ATMOXR/Sources/MotionPose.swift');
  assert.ok(camera.includes('AVCaptureVideoPreviewLayer'), 'passthrough pela câmera do iPhone');
  assert.ok(camera.includes('AVCaptureDevice.default(.builtInWideAngleCamera, for: .video, position: .back'),
    'câmera traseira, a que aponta para o mundo');
  assert.ok(camera.includes('setTorchModeOn'), 'lanterna de verdade (câmera noturna)');
  assert.ok(camera.includes('kCVPixelFormatType_420YpCbCr8BiPlanarFullRange'), 'lê o plano Y (brilho)');
  assert.ok(motion.includes('CMMotionManager'), 'giroscópio');
  assert.ok(motion.includes('startDeviceMotionUpdates'), 'pose do aparelho');
  assert.ok(code.includes('window.nextvrPose&&window.nextvrPose(['), 'a pose chega no web como matriz');
  assert.ok(code.includes('String(format: "%.6f", $0)'), '16 números, prontos para o Matrix4.fromArray');
});

test('Build 95: o que o iPhone não tem responde vazio e honesto (nada de tela fingida)', () => {
  const source = bridge();
  assert.ok(source.includes("permission: 'unavailable'") || source.includes("permission:'unavailable'")
    || source.includes('unavailable'), 'sem AccountManager: sem lista de contas inventada');
  assert.ok(source.includes("unsupported: 'ios'"), 'biblioteca de apps Android marcada como indisponível');
  assert.ok(source.includes("reason: 'pendente'") || source.includes("reason: 'pendente'"), 'a Key responde assíncrona');
});

test('Build 95: cada arquivo Swift importa o framework que usa (erro que já custou uma rodada)', () => {
  // O compilador só reclama disso no macOS — e cada rodada do macOS é fila de minutos. A regra é
  // chata de propósito: quem toca em UIDevice/UIApplication/UIView precisa de UIKit, e assim por diante.
  const needs = [
    ['UIKit', /\b(UIDevice|UIApplication|UIView|UIImage|UIColor|UIScreen|UIImageView|UIViewController|UIGraphicsImageRenderer|CGRect|CGSize)\b/],
    ['WebKit', /\bWKWebView\b/],
    ['AVFoundation', /\bAVCaptureDevice\b/],
    ['CoreMotion', /\bCMMotionManager\b/],
    ['CryptoKit', /\bHMAC<SHA256>|\bSHA256\.hash/],
    ['simd', /\bsimd_float4x4\b/]
  ];
  for (const file of readdirSync('ios/ATMOXR/Sources').filter(name => name.endsWith('.swift'))) {
    const source = read(`ios/ATMOXR/Sources/${file}`);
    for (const [framework, usage] of needs) {
      if (!usage.test(source)) continue;
      assert.ok(source.includes(`import ${framework}`), `${file} usa ${framework} e não importa`);
    }
  }
});

test('Build 95: o Info.plist declara câmera, fotos e nada além disso', () => {
  const plist = read('ios/ATMOXR/Info.plist');
  assert.ok(plist.includes('<key>NSCameraUsageDescription</key>'), 'câmera explicada ao usuário');
  assert.ok(plist.includes('<key>NSPhotoLibraryUsageDescription</key>'), 'foto de perfil');
  assert.ok(plist.includes('<key>ITSAppUsesNonExemptEncryption</key>'), 'isenção de criptografia declarada');
  assert.ok(plist.includes('<key>UIRequiresFullScreen</key>'), 'tela cheia');
  assert.ok(plist.includes('UIInterfaceOrientationLandscapeLeft'), 'VR Box é usado deitado');
  assert.ok(!plist.includes('NSMicrophoneUsageDescription'), 'o app não grava áudio');
});

test('Build 95: o projeto Xcode é gerado por xcodegen e empacota a pasta ui', () => {
  const project = read('ios/project.yml');
  assert.ok(project.includes('name: ATMOXR'));
  assert.ok(project.includes('PRODUCT_BUNDLE_IDENTIFIER: com.nextvr.atmoxr'));
  assert.ok(project.includes('platform: iOS'));
  assert.ok(project.includes('path: ATMOXR/Resources/ui'), 'a interface entra no pacote');
  assert.ok(project.includes('type: folder'), 'como pasta, igual a assets/ui no Android');
  assert.ok(project.includes('path: ATMOXR/Resources/bridge.js'), 'a ponte também');
  assert.ok(project.includes('INFOPLIST_FILE: ATMOXR/Info.plist'));
});

test('Build 95: o CI do macOS monta o .ipa e publica na branch ipa-dist', () => {
  const workflow = read('.github/workflows/ios.yml');
  assert.ok(/runs-on: macos-\d+/.test(workflow), 'precisa de macOS');
  assert.ok(workflow.includes('brew install xcodegen'));
  assert.ok(workflow.includes('xcodebuild'));
  assert.ok(workflow.includes('CODE_SIGNING_ALLOWED=NO'), 'build sem assinatura (o usuário assina ao instalar)');
  assert.ok(workflow.includes('zip -qry ATMOXR.ipa Payload'), 'o .ipa é um zip com Payload/');
  assert.ok(workflow.includes('branch ipa-dist') || workflow.includes('origin ipa-dist'), 'publica em ipa-dist');
  assert.ok(workflow.includes('bash ios/Scripts/sync-ui.sh'), 'copia a interface antes de compilar');
});

test('Build 95: a interface do iOS sai do MESMO build do Android', () => {
  const script = read('ios/Scripts/sync-ui.sh');
  assert.ok(script.includes('nextvr-android/src/main/assets/ui'), 'mesma origem');
  assert.ok(script.includes('ios/ATMOXR/Resources/ui'), 'mesmo destino do projeto');
  assert.ok(script.includes('npm run build:ui'), 'monta antes de copiar');
  // A pasta copiada não é versionada: 19 MB de imagens não entram no git.
  assert.ok(read('.gitignore').includes('ios/ATMOXR/Resources/ui/'), 'cópia fora do git');
});

test('Build 95: a licença responde também de forma assíncrona (iOS) sem quebrar o Android', () => {
  const source = read('web/src/license.js');
  assert.ok(source.includes("if (parsed.pending) return { ok: false, pending: true, reason: 'pendente'"),
    'o menu sabe esperar a resposta do WKWebView');
  assert.ok(source.includes('window.nextvrLicenseActivated = raw =>'), 'e recebe o veredito depois');
  assert.ok(source.includes('export function onLicenseChange'), 'quem está na tela é avisado');
  const menu = read('web/src/entry-menu.js');
  assert.ok(menu.includes("licenseMessage('pendente')"), 'a tela diz "Conferindo a sua Key..."');
  // O caminho do Android continua síncrono: a mesma função devolve ok/reason de imediato.
  assert.ok(source.includes("const parsed = parse(window.NativeXR?.activateKey?.(key));"));
});

test('Build 95: a versão conta a mesma build nos dois aparelhos', () => {
  const gradle = read('nextvr-android/build.gradle');
  const code = Number((gradle.match(/versionCode (\d+)/) || [])[1]);
  assert.ok(code >= 95, `versionCode ${code}`);
  const project = read('ios/project.yml');
  assert.ok(project.includes('CURRENT_PROJECT_VERSION: "95"'), 'o .ipa diz Build 95');
  assert.ok(existsSync('docs/BUILD-95-IOS.md'), 'documentado');
});
