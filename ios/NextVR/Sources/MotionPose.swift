import Foundation
import CoreMotion
import simd

/**
 * Build 95 — o giroscópio do iPhone como "olhar em volta" (3DoF/6DoF do Cardboard, sem Cardboard).
 *
 * O web do NextVR já sabe receber a pose: `window.nextvrPose([16 números])` faz
 * `Matrix4.fromArray(values).invert()` e aplica na câmera. Ou seja, o array é a matriz de VISÃO
 * (mundo → câmera). Mandamos a transposta da rotação do aparelho (a inversa, para uma rotação pura),
 * em ordem de coluna — exatamente o que o `THREE.Matrix4.fromArray` espera.
 */
final class MotionPose {

    private let manager = CMMotionManager()
    private var started = false

    /// Recebe a matriz de visão com 16 números (coluna a coluna).
    var onPose: (([Double]) -> Void)?

    var isAvailable: Bool { manager.isDeviceMotionAvailable }

    func start() {
        guard isAvailable, !started else { return }
        started = true
        manager.deviceMotionUpdateInterval = 1.0 / 60.0
        // `.xArbitraryZVertical`: o "zero" do giro é onde o jogador estava quando abriu o app, que é o
        // que o web espera (ele também zera o yaw do conteúdo na primeira pose).
        manager.startDeviceMotionUpdates(using: .xArbitraryZVertical, to: .main) { [weak self] motion, _ in
            guard let self = self, let motion = motion else { return }
            let q = motion.attitude.quaternion
            let rotation = simd_float4x4(simd_quatf(ix: Float(q.x), iy: Float(q.y), iz: Float(q.z), r: Float(q.w)))
            let view = rotation.transpose
            var values: [Double] = []
            values.reserveCapacity(16)
            for column in 0..<4 {
                let vector = view[column]
                values.append(Double(vector.x))
                values.append(Double(vector.y))
                values.append(Double(vector.z))
                values.append(Double(vector.w))
            }
            self.onPose?(values)
        }
    }

    func stop() {
        guard started else { return }
        manager.stopDeviceMotionUpdates()
        started = false
    }
}
