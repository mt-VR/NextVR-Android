/*
 * ATMO XR no iPhone — a ponte `window.NativeXR` (Build 95).
 *
 * O Android expõe o `NativeXR` por `@JavascriptInterface`; no iOS a única ponte que existe é o
 * `window.webkit.messageHandlers`, que é assíncrona. Para o código web não precisar saber em qual
 * aparelho está rodando, este arquivo faz três coisas:
 *
 *   1. define o MESMO `window.NativeXR` que o Android define (os mesmos nomes, os mesmos argumentos);
 *   2. manda os comandos para o Swift (`postMessage({method, args})`);
 *   3. responde na hora as funções que o web usa como "produto de valor" (`battery()`,
 *      `licenseStatus()`, `cameraLuma()`…), lendo o último estado que o Swift enviou em
 *      `window.__nextvrNativeState(json)`.
 *
 * A exceção honesta é `activateKey`: a validação da Key mora só no Swift (License.swift, com o
 * segredo do MAC), então ela responde `{pending:true}` e o resultado de verdade chega depois por
 * `window.nextvrLicenseActivated(json)` — o license.js já sabe esperar por ele.
 */
(function () {
  'use strict';
  if (window.__nextvrIOS) return;
  window.__nextvrIOS = true;

  var state = {};

  function post(method, args) {
    try {
      window.webkit.messageHandlers.nextvr.postMessage({ method: method, args: args || [] });
    } catch (error) {
      // Sem ponte (Safari/teste): o comando só não faz nada. Nunca lança no meio da interface.
    }
  }

  window.__nextvrNativeState = function (json) {
    state = json && typeof json === 'object' ? json : {};
    if (typeof window.__nextvrOnState === 'function') {
      try { window.__nextvrOnState(state); } catch (error) {}
    }
  };

  // Comandos: mesmos nomes da ponte do Android (Android: NextVrActivity.NextVRBridge).
  var COMMANDS = [
    'frame', 'env', 'hands', 'handVisuals', 'handTargets', 'handTouch', 'click', 'key',
    'setQuality', 'setMrDim', 'setBwCamera', 'setWorldLock', 'setSixDofEnabled', 'sixDof',
    'sixDofOffset', 'resetSixDof', 'wideCamera', 'setGameHandMode', 'setMrGameMode',
    'setSingleHandMode', 'setFingerTouch', 'setTorch', 'setNightCamera', 'refocusCamera',
    'toggleInternalRecording', 'internalRecordingSeconds', 'openEntryMenu', 'openExternal',
    'requestGoogleAccounts', 'googleChooseAccount', 'appsCommand', 'browserCmd', 'systemPanel',
    'pickProfilePhoto', 'setVolume', 'setBrightness', 'setMediaVolumePercent',
    'setBrightnessPercent', 'audioEnabled', 'startVrSession', 'xrCommand', 'xrHandMode'
  ];

  var NativeXR = {};
  for (var i = 0; i < COMMANDS.length; i++) {
    (function (name) {
      NativeXR[name] = function () { post(name, Array.prototype.slice.call(arguments)); };
    })(COMMANDS[i]);
  }

  /* ---- valores que o web lê na hora (do último estado enviado pelo Swift) ---- */

  /** `{level:0..1, percent:0..100, charging:bool}` ou null, como no Android. */
  NativeXR.battery = function () { return state.battery || null; };
  NativeXR.volume = function () { return typeof state.volume === 'number' ? state.volume : 65; };
  NativeXR.brightness = function () { return typeof state.brightness === 'number' ? state.brightness : 50; };
  /** Luminância média do quadro da câmera (0..1); -1 = sem câmera, como o Android manda. */
  NativeXR.cameraLuma = function () { return typeof state.luma === 'number' ? state.luma : -1; };
  NativeXR.torchAvailable = function () { return !!state.torch; };
  NativeXR.licenseStatus = function () {
    return JSON.stringify(state.license || { active: false, reason: 'erro', key: '', device: '', since: 0, hasKey: false, slots: 1 });
  };
  NativeXR.deviceCode = function () { return state.deviceCode || ''; };
  /* O iOS não tem AccountManager: a lista de contas do aparelho não existe. O cartão de login cai no
     caminho do navegador (AccountChooser), que continua funcionando no iPhone. */
  NativeXR.googleAccounts = function () { return JSON.stringify({ permission: 'unavailable', accounts: [] }); };
  /* No iPhone não existe "abrir outro app dentro de uma janela" (sandbox). A biblioteca é vazia e
     honesta: o menu mostra que aquele recurso é do Android em vez de fingir apps. */
  NativeXR.appsLibrary = function () { return JSON.stringify({ apps: [], unsupported: 'ios' }); };
  NativeXR.xrLibrary = function () { return JSON.stringify({ games: [], unsupported: 'ios' }); };
  /* Sem runtime OpenXR no iPhone: estado vazio, do mesmo jeito que o Android responde quando não há
     runtime instalado. */
  NativeXR.xrState = function () { return JSON.stringify({ installed: false, ready: false, unsupported: 'ios' }); };

  /* ---- a Key: validação no Swift, resposta assíncrona ---- */
  NativeXR.activateKey = function (key) {
    post('activateKey', [String(key || '')]);
    return JSON.stringify({ pending: true, ok: false, reason: 'pendente', status: state.license || { active: false } });
  };

  window.NativeXR = NativeXR;
})();
