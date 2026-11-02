// O headset virtual do NextVR: pose da cabeça, óptica e o quadro que o SteamVR compõe.
//
// Três interfaces no mesmo objeto, como o OpenVR espera de um HMD:
//
//   • ITrackedDeviceServerDriver — pose a 90 Hz, propriedades, ciclo de vida;
//   • IVRDisplayComponent      — tamanho de render por olho, projeção crua, viewports;
//   • IVRVirtualDisplay        — recebe o backbuffer FINAL (já composto e distorcido para a lente)
//                                e o entrega ao canal de vídeo.
//
// O ponto que faz disto um headset e não um espelhamento de tela: a projeção que o SteamVR usa é a
// que o CELULAR precisa, publicada pelo próprio celular no estado compartilhado. O jogo renderiza
// exatamente o que a lente do aparelho vai mostrar, e o warp final continua sendo o da Cardboard, no
// Android.
#pragma once

#include <string>

#include "frame_sink.h"
#include "openvr_driver.h"
#include "shared_state.h"

namespace nextvr {
namespace pclink {

class HmdDevice : public vr::ITrackedDeviceServerDriver,
                  public vr::IVRDisplayComponent,
                  public vr::IVRVirtualDisplay {
public:
    explicit HmdDevice(SharedStateReader* reader);
    ~HmdDevice() = default;

    // ITrackedDeviceServerDriver
    vr::EVRInitError Activate(uint32_t objectId) override;
    void Deactivate() override;
    void* GetComponent(const char* componentNameAndVersion) override;
    void DebugRequest(const char* request, char* responseBuffer, uint32_t responseBufferSize) override;
    void EnterStandby() override {}
    vr::DriverPose_t GetPose() override;
    const std::string& SerialNumber() const { return serial_; }

    // IVRDisplayComponent
    void GetWindowBounds(int32_t* x, int32_t* y, uint32_t* width, uint32_t* height) override;
    bool IsDisplayOnDesktop() override { return false; }
    bool IsDisplayRealDisplay() override { return true; }
    void GetRecommendedRenderTargetSize(uint32_t* width, uint32_t* height) override;
    void GetEyeOutputViewport(vr::EVREye eye, uint32_t* x, uint32_t* y, uint32_t* width, uint32_t* height) override;
    void GetProjectionRaw(vr::EVREye eye, float* left, float* right, float* top, float* bottom) override;
    vr::DistortionCoordinates_t ComputeDistortion(vr::EVREye eye, float u, float v) override;
    bool ComputeInverseDistortion(vr::HmdVector2_t* result, vr::EVREye eye, uint32_t channel, float u,
                                  float v) override;

    // IVRVirtualDisplay (versão 002, a que o vrserver atual procura)
    void Present(const vr::PresentInfo_t* info, uint32_t infoSize) override;
    void WaitForPresent() override;
    void GetTiming(float* secondsSinceLastVsync, uint64_t* frameCounter);
    bool GetTimeSinceLastVsync(float* secondsSinceLastVsync, uint64_t* frameCounter) override;

    /** Chamado no `RunFrame` do provider: nova pose e novo estado, a 90 Hz. */
    void Update(const Frame& frame, uint64_t nowNs);

    bool active() const { return objectId_ != vr::k_unTrackedDeviceIndexInvalid; }

private:
    SharedStateReader* reader_;
    IFrameSink* sink_;
    uint32_t objectId_ = vr::k_unTrackedDeviceIndexInvalid;
    std::string serial_ = "NEXTVR-PCLINK-0001";

    vr::PropertyContainerHandle_t container_ = vr::k_ulInvalidPropertyContainer;
    float ipd_ = 0.063f;
    float displayFreq_ = 72.0f;
    uint32_t eyeWidth_ = 1832;
    uint32_t eyeHeight_ = 1920;
    float projection_[4] = {-1.2f, 1.2f, 1.1f, -1.1f};

    math::Vec3 pos_;
    math::Quat rot_;
    bool poseValid_ = false;

    uint64_t frameId_ = 0;
    double lastVsyncSeconds_ = 0.0;
    uint64_t vsyncCounter_ = 0;
    uint64_t lastFrameNs_ = 0;
};

}  // namespace pclink
}  // namespace nextvr
