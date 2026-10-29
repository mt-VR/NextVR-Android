import UIKit
import WebKit
import AVFoundation

/**
 * Build 95 — o NextVR rodando no iPhone.
 *
 * A arquitetura é a mesma do Android, em três camadas:
 *
 *   1. EMBAIXO, o mundo: a imagem da câmera traseira (passthrough) ou a foto do ambiente escolhido.
 *   2. NO MEIO, um véu escuro opcional (`setMrDim`), como o `mrDim` do renderizador nativo.
 *   3. EM CIMA, a interface: a MESMA página do Android (`assets/ui`), num `WKWebView` transparente.
 *
 * A página fala com este arquivo pelo `window.NativeXR` que o `bridge.js` define — os mesmos nomes,
 * os mesmos argumentos. O que o iPhone não tem (janelas de apps do Android, Shizuku, MediaProjection,
 * rastreio de mãos) responde vazio e honesto em vez de fingir.
 */
final class ShellViewController: UIViewController, WKScriptMessageHandler, WKNavigationDelegate,
    WKUIDelegate, UIImagePickerControllerDelegate, UINavigationControllerDelegate {

    private var webView: WKWebView!
    private let camera = CameraFeed()
    private let motion = MotionPose()
    private let license = License()

    private var environmentView: UIImageView!
    private var dimView: UIView!

    private var volumePercent = 65
    private var brightnessPercent = 50
    private var luma: Double = -1
    private var bwCamera = false
    private var currentEnvironment = "sunset"
    private var lastStateJSON = ""
    private var poseFrames = 0
    private var batteryTimer: Timer?

    /* ------------------------------------------------------------------ ciclo */

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .black
        buildLayers()
        buildWebView()
        wireCamera()
        wireMotion()
        wireBattery()
        camera.start()
        setEnvironment(currentEnvironment)
    }

    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        motion.start()
        UIApplication.shared.isIdleTimerDisabled = true
    }

    override func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)
        motion.stop()
        camera.stop()
        UIApplication.shared.isIdleTimerDisabled = false
    }

    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        environmentView.frame = view.bounds
        dimView.frame = view.bounds
        camera.previewLayer?.frame = view.bounds
    }

    override var prefersStatusBarHidden: Bool { true }
    override var prefersHomeIndicatorAutoHidden: Bool { true }

    /* ----------------------------------------------------------------- camadas */

    private func buildLayers() {
        environmentView = UIImageView(frame: view.bounds)
        environmentView.contentMode = .scaleAspectFill
        environmentView.clipsToBounds = true
        environmentView.backgroundColor = .black
        view.addSubview(environmentView)

        dimView = UIView(frame: view.bounds)
        dimView.backgroundColor = .black
        dimView.alpha = 0
        dimView.isUserInteractionEnabled = false
        view.addSubview(dimView)
    }

    private func buildWebView() {
        let configuration = WKWebViewConfiguration()
        configuration.allowsInlineMediaPlayback = true
        configuration.mediaTypesRequiringUserActionForPlayback = []

        let controller = WKUserContentController()
        controller.add(self, name: "nextvr")
        if let bridgeURL = Bundle.main.url(forResource: "bridge", withExtension: "js"),
           let source = try? String(contentsOf: bridgeURL, encoding: .utf8) {
            controller.addUserScript(WKUserScript(source: source, injectionTime: .atDocumentStart, forMainFrameOnly: true))
        } else {
            NSLog("NextVR: bridge.js não está no pacote — a página vai abrir sem a ponte nativa")
        }
        configuration.userContentController = controller

        webView = WKWebView(frame: .zero, configuration: configuration)
        webView.isOpaque = false
        webView.backgroundColor = .clear
        webView.scrollView.backgroundColor = .clear
        webView.scrollView.bounces = false
        webView.navigationDelegate = self
        webView.uiDelegate = self
        webView.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(webView)
        NSLayoutConstraint.activate([
            webView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            webView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            webView.topAnchor.constraint(equalTo: view.topAnchor),
            webView.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])

        guard let index = Bundle.main.url(forResource: "index", withExtension: "html", subdirectory: "ui") else {
            NSLog("NextVR: ui/index.html não está no pacote")
            return
        }
        webView.loadFileURL(index, allowingReadAccessTo: index.deletingLastPathComponent())
    }

    private func wireCamera() {
        camera.prepare()
        if let layer = camera.previewLayer {
            layer.isHidden = true
            view.layer.insertSublayer(layer, above: environmentView.layer)
        }
        camera.onLuma = { [weak self] value in
            guard let self = self else { return }
            self.luma = value
            self.pushState()
        }
    }

    private func wireMotion() {
        motion.onPose = { [weak self] values in
            guard let self = self else { return }
            // 30 Hz é o suficiente para olhar em volta sem gastar a bateria com 60 avaliações de JS.
            self.poseFrames += 1
            guard self.poseFrames % 2 == 0 else { return }
            let numbers = values.map { String(format: "%.6f", $0) }.joined(separator: ",")
            self.webView?.evaluateJavaScript("window.nextvrPose&&window.nextvrPose([\(numbers)])", completionHandler: nil)
        }
        motion.start()
    }

    private func wireBattery() {
        UIDevice.current.isBatteryMonitoringEnabled = true
        NotificationCenter.default.addObserver(self, selector: #selector(batteryChanged), name: UIDevice.batteryLevelDidChangeNotification, object: nil)
        NotificationCenter.default.addObserver(self, selector: #selector(batteryChanged), name: UIDevice.batteryStateDidChangeNotification, object: nil)
        batteryTimer = Timer.scheduledTimer(withTimeInterval: 5, repeats: true) { [weak self] _ in
            self?.pushState()
        }
    }

    @objc private func batteryChanged() { pushState() }

    /* ---------------------------------------------------------------- ambiente */

    private func setEnvironment(_ id: String) {
        currentEnvironment = id
        let passthrough = (id == "passthrough")
        camera.previewLayer?.isHidden = !passthrough
        if passthrough {
            camera.start()
            environmentView.image = nil
            environmentView.backgroundColor = .black
        } else {
            camera.setTorch(false)
            camera.stop()
            if let image = environmentImage(id) {
                environmentView.image = image
                environmentView.backgroundColor = .black
            } else {
                environmentView.image = nil
                environmentView.backgroundColor = id == "virtual" ? UIColor(white: 0.09, alpha: 1) : .black
            }
        }
        pushState()
    }

    private func environmentImage(_ id: String) -> UIImage? {
        guard let base = Bundle.main.url(forResource: "env", withExtension: nil, subdirectory: "ui") else { return nil }
        let file = base.appendingPathComponent(id).appendingPathExtension("jpg")
        guard FileManager.default.fileExists(atPath: file.path) else { return nil }
        return UIImage(contentsOfFile: file.path)
    }

    /* ---------------------------------------------------------------- estado  */

    private func numberOf(_ raw: Any?) -> Double {
        if let value = raw as? NSNumber { return value.doubleValue }
        if let value = raw as? String { return Double(value) ?? 0 }
        return 0
    }

    private func flagOf(_ raw: Any?) -> Bool {
        if let value = raw as? NSNumber { return value.boolValue }
        if let value = raw as? String { return value == "true" || value == "1" }
        return false
    }

    private func batteryPayload() -> [String: Any] {
        let raw = UIDevice.current.batteryLevel
        let level = raw < 0 ? 1.0 : Double(raw)
        let state = UIDevice.current.batteryState
        let charging = (state == .charging || state == .full)
        return ["level": level, "percent": Int((level * 100).rounded()), "charging": charging]
    }

    /// Envia ao web o estado que as funções síncronas do `NativeXR` leem na hora.
    private func pushState() {
        UIScreen.main.brightness = CGFloat(Double(brightnessPercent) / 100.0)
        let payload: [String: Any] = [
            "battery": batteryPayload(),
            "brightness": brightnessPercent,
            "volume": volumePercent,
            "luma": luma,
            "torch": camera.torchAvailable,
            "license": license.status(),
            "deviceCode": license.deviceCode(),
            "environment": currentEnvironment,
            "bwCamera": bwCamera
        ]
        guard JSONSerialization.isValidJSONObject(payload),
              let data = try? JSONSerialization.data(withJSONObject: payload),
              let json = String(data: data, encoding: .utf8) else { return }
        guard json != lastStateJSON else { return }
        lastStateJSON = json
        let script = "window.__nextvrNativeState&&window.__nextvrNativeState(\(json))"
        DispatchQueue.main.async { [weak self] in
            self?.webView?.evaluateJavaScript(script, completionHandler: nil)
        }
    }

    /* ------------------------------------------------------------------- key  */

    private func activateKey(_ raw: String) {
        let result = license.activate(raw)
        lastStateJSON = ""
        pushState()
        guard JSONSerialization.isValidJSONObject(result),
              let data = try? JSONSerialization.data(withJSONObject: result),
              let json = String(data: data, encoding: .utf8) else { return }
        webView?.evaluateJavaScript("window.nextvrLicenseActivated&&window.nextvrLicenseActivated(\(json))", completionHandler: nil)
    }

    /* ------------------------------------------------------------------ ponte */

    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        guard let body = message.body as? [String: Any], let method = body["method"] as? String else { return }
        let args = body["args"] as? [Any] ?? []
        handle(method: method, args: args)
    }

    private func handle(method: String, args: [Any]) {
        switch method {
        case "env":
            if let id = args.first as? String { setEnvironment(id) }

        case "openExternal":
            guard let raw = args.first as? String, let url = URL(string: raw),
                  let scheme = url.scheme?.lowercased(), scheme == "http" || scheme == "https" else { return }
            UIApplication.shared.open(url, options: [:], completionHandler: nil)

        case "setTorch":
            camera.setTorch(flagOf(args.first))
            pushState()

        case "refocusCamera":
            camera.refocus()

        case "pickProfilePhoto":
            presentPhotoPicker()

        case "setBrightness", "setBrightnessPercent":
            let value = numberOf(args.first)
            brightnessPercent = max(1, min(100, Int(value.rounded())))
            UIScreen.main.brightness = CGFloat(Double(brightnessPercent) / 100.0)
            pushState()

        case "setVolume", "setMediaVolumePercent":
            volumePercent = max(0, min(100, Int(numberOf(args.first).rounded())))
            pushState()

        case "setMrDim":
            dimView.alpha = flagOf(args.first) ? 0.18 : 0

        case "setBwCamera":
            // Preto e branco do passthrough. A página já desenha o mundo em preto e branco quando o
            // ambiente não é a câmera; aqui só guardamos a escolha para o estado.
            bwCamera = flagOf(args.first)
            pushState()

        case "activateKey":
            if let key = args.first as? String { activateKey(key) }

        case "startVrSession":
            // No iPhone não existe sessão estéreo nativa: o "workspace" é a própria página em tela
            // cheia. O que o Iniciar precisa fazer aqui é fechar o menu de entrada.
            webView?.evaluateJavaScript("window.nextvrEnterWorkspace&&window.nextvrEnterWorkspace(null)", completionHandler: nil)

        case "hands", "handVisuals", "handTargets", "handTouch", "setGameHandMode", "setMrGameMode",
             "setSingleHandMode", "setFingerTouch", "wideCamera", "setQuality", "setWorldLock",
             "setSixDofEnabled", "sixDof", "sixDofOffset", "resetSixDof", "click", "key", "frame",
             "handDrawStroke", "toggleInternalRecording", "internalRecordingSeconds", "systemPanel",
             "appsCommand", "browserCmd", "xrCommand", "xrHandMode", "audioEnabled", "openEntryMenu":
            // Sem equivalente no iPhone (ou sem efeito): o toque na tela é o ponteiro e a própria
            // página cuida do resto. Não inventamos resposta para nada disso.
            break

        default:
            NSLog("NextVR: comando sem equivalente no iOS: %@", method)
        }
    }

    /* ------------------------------------------------------------ foto de perfil */

    private func presentPhotoPicker() {
        guard UIImagePickerController.isSourceTypeAvailable(.photoLibrary) else { return }
        let picker = UIImagePickerController()
        picker.sourceType = .photoLibrary
        picker.delegate = self
        present(picker, animated: true, completion: nil)
    }

    func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey: Any]) {
        picker.dismiss(animated: true, completion: nil)
        guard let image = info[.originalImage] as? UIImage else { return }
        let side = min(image.size.width, image.size.height)
        guard side > 0 else { return }
        let canvas = CGSize(width: 160, height: 160)
        let renderer = UIGraphicsImageRenderer(size: canvas)
        let square = renderer.image { _ in
            let scale = max(canvas.width / image.size.width, canvas.height / image.size.height)
            let drawn = CGSize(width: image.size.width * scale, height: image.size.height * scale)
            image.draw(in: CGRect(x: (canvas.width - drawn.width) / 2, y: (canvas.height - drawn.height) / 2,
                                  width: drawn.width, height: drawn.height))
        }
        guard let jpeg = square.jpegData(compressionQuality: 0.86) else { return }
        let dataURL = "data:image/jpeg;base64," + jpeg.base64EncodedString()
        webView?.evaluateJavaScript("window.nextvrProfilePhoto&&window.nextvrProfilePhoto(\"\(dataURL)\")", completionHandler: nil)
    }

    func imagePickerControllerDidCancel(_ picker: UIImagePickerController) {
        picker.dismiss(animated: true, completion: nil)
    }

    /* --------------------------------------------------------- navegação web  */

    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        lastStateJSON = ""
        pushState()
    }

    func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction,
                 decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
        // Só a página do app abre aqui dentro; link de fora vai para o navegador do iPhone.
        if let url = navigationAction.request.url, let scheme = url.scheme?.lowercased(),
           scheme == "http" || scheme == "https" {
            UIApplication.shared.open(url, options: [:], completionHandler: nil)
            decisionHandler(.cancel)
            return
        }
        decisionHandler(.allow)
    }
}
