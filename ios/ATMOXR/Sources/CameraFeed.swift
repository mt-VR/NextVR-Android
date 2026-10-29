import AVFoundation
import UIKit

/**
 * Build 95 — a câmera traseira do iPhone como passthrough.
 *
 * No Android o passthrough é uma textura desenhada pelo renderizador nativo; no iOS a forma mais
 * direta (e a que não mente) é a `AVCaptureVideoPreviewLayer`: a imagem real do mundo fica ATRÁS da
 * página, e a página é transparente — o mesmo desenho de camadas do Android, só que com o sistema
 * fazendo o vídeo.
 *
 * Também entrega o que os recursos de câmera noturna precisam:
 *   * `torch` — a lanterna de verdade (`AVCaptureDevice.torchMode`);
 *   * `luma` — o brilho médio do quadro (plano Y), que é o que a Build 91 usa para decidir se está
 *     escuro E para não confundir a própria lanterna com luz do ambiente.
 */
final class CameraFeed: NSObject, AVCaptureVideoDataOutputSampleBufferDelegate {

    let session = AVCaptureSession()
    private(set) var previewLayer: AVCaptureVideoPreviewLayer?
    private let queue = DispatchQueue(label: "com.nextvr.ios.camera")
    private var device: AVCaptureDevice?
    private var configured = false
    private var frameCounter = 0

    /// Brilho médio do último quadro (0..1) e se há lanterna neste aparelho.
    var onLuma: ((Double) -> Void)?
    private(set) var torchAvailable = false

    func prepare() {
        guard !configured else { return }
        configured = true
        session.sessionPreset = .high
        guard let camera = AVCaptureDevice.default(.builtInWideAngleCamera, for: .video, position: .back) else { return }
        device = camera
        torchAvailable = camera.hasTorch
        do {
            let input = try AVCaptureDeviceInput(device: camera)
            if session.canAddInput(input) { session.addInput(input) }
            let output = AVCaptureVideoDataOutput()
            output.alwaysDiscardsLateVideoFrames = true
            output.videoSettings = [kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_420YpCbCr8BiPlanarFullRange]
            output.setSampleBufferDelegate(self, queue: queue)
            if session.canAddOutput(output) { session.addOutput(output) }
        } catch {
            NSLog("ATMOXR: camera indisponível (\(error.localizedDescription))")
            return
        }
        let layer = AVCaptureVideoPreviewLayer(session: session)
        layer.videoGravity = .resizeAspectFill
        previewLayer = layer
    }

    /// Pede a permissão (se preciso) e liga a câmera.
    func start() {
        prepare()
        guard configured else { return }
        switch AVCaptureDevice.authorizationStatus(for: .video) {
        case .authorized:
            run()
        case .notDetermined:
            AVCaptureDevice.requestAccess(for: .video) { [weak self] granted in
                guard granted else { return }
                DispatchQueue.main.async { self?.run() }
            }
        default:
            NSLog("ATMOXR: câmera sem permissão — o passthrough fica desligado")
        }
    }

    private func run() {
        queue.async { [weak self] in
            guard let self = self else { return }
            if !self.session.isRunning { self.session.startRunning() }
        }
    }

    func stop() {
        queue.async { [weak self] in
            guard let self = self else { return }
            if self.session.isRunning { self.session.stopRunning() }
        }
    }

    /* ------------------------------------------------------------------ lanterna */

    func setTorch(_ on: Bool) {
        guard let device = device, device.hasTorch else { return }
        do {
            try device.lockForConfiguration()
            if on && device.isTorchModeSupported(.on) {
                try device.setTorchModeOn(level: AVCaptureDevice.maxAvailableTorchLevel)
            } else if device.isTorchModeSupported(.off) {
                device.torchMode = .off
            }
            device.unlockForConfiguration()
        } catch {
            NSLog("ATMOXR: não consegui mexer na lanterna (\(error.localizedDescription))")
        }
    }

    /// Reenquadra o foco no centro (o botão "focar" das Configurações).
    func refocus() {
        guard let device = device else { return }
        do {
            try device.lockForConfiguration()
            if device.isFocusModeSupported(.continuousAutoFocus) { device.focusMode = .continuousAutoFocus }
            if device.isExposureModeSupported(.continuousAutoExposure) { device.exposureMode = .continuousAutoExposure }
            device.unlockForConfiguration()
        } catch {}
    }

    /* ---------------------------------------------------------------- luminância */

    func captureOutput(_ output: AVCaptureOutput, didOutput sampleBuffer: CMSampleBuffer, from connection: AVCaptureConnection) {
        frameCounter += 1
        guard frameCounter % 8 == 0 else { return } // ~7 leituras por segundo bastam para a decisão da noite
        guard let pixels = CMSampleBufferGetImageBuffer(sampleBuffer) else { return }
        CVPixelBufferLockBaseAddress(pixels, .readOnly)
        defer { CVPixelBufferUnlockBaseAddress(pixels, .readOnly) }
        guard let base = CVPixelBufferGetBaseAddressOfPlane(pixels, 0) else { return }
        let width = CVPixelBufferGetWidthOfPlane(pixels, 0)
        let height = CVPixelBufferGetHeightOfPlane(pixels, 0)
        let stride = CVPixelBufferGetBytesPerRowOfPlane(pixels, 0)
        guard width > 8, height > 8 else { return }
        let bytes = base.assumingMemoryBound(to: UInt8.self)
        var total = 0.0
        var samples = 0
        var y = 0
        while y < height {
            var x = 0
            while x < width {
                total += Double(bytes[y * stride + x])
                samples += 1
                x += 24
            }
            y += 24
        }
        guard samples > 0 else { return }
        let luma = total / Double(samples) / 255.0
        DispatchQueue.main.async { [weak self] in self?.onLuma?(luma) }
    }
}
