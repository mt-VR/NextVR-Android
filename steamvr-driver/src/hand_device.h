// As duas mãos do NextVR como dispositivos de rastreamento do SteamVR.
//
// Cada mão é um dispositivo normal (pose + Skeletal Input). A pose vem da palma medida pela câmera
// do celular; o esqueleto, dos 21 pontos — os mesmos que o NextVR usa para desenhar a mão e para a
// pinça dentro do headset. Não existe um segundo rastreador: o driver não gera movimento nenhum, ele
// publica o que o celular mediu.
//
// Sobre "controle virtual": por padrão a mão também publica `grab` (punho) e `trigger` (pinça) como
// entradas booleanas/analógicas, porque a maioria dos jogos do SteamVR só conhece controles. Isso é
// uma TRADUÇÃO explícita de gestos reais, não uma mão animada — e pode ser desligada
// (`controllerEmulation: false`), caso em que só o Skeletal Input é publicado. Um jogo que não aceita
// mão nenhuma continua sem receber mão nenhuma, e a interface do NextVR diz isso.
#pragma once

#include <array>
#include <string>

#include "hand_skeleton.h"
#include "openvr_driver.h"
#include "shared_state.h"

namespace nextvr {
namespace pclink {

class HandDevice : public vr::ITrackedDeviceServerDriver {
public:
    HandDevice(SharedStateReader* reader, bool leftHand, int skeletalLevel, bool controllerEmulation);
    ~HandDevice() = default;

    vr::EVRInitError Activate(uint32_t objectId) override;
    void Deactivate() override;
    void* GetComponent(const char* componentNameAndVersion) override;
    void DebugRequest(const char* request, char* responseBuffer, uint32_t responseBufferSize) override;
    void EnterStandby() override {}
    vr::DriverPose_t GetPose() override;

    const std::string& SerialNumber() const { return serial_; }

    /** Chamado no `RunFrame` do provider, a 90 Hz, com o estado mais novo do celular. */
    void Update(const Frame& frame);

    /** Para o relatório do Bridge: `ok`, `one` (só uma mão) ou `idle`. */
    bool tracking() const { return present_; }
    float confidence() const { return confidence_; }
    const FingerCurls& curls() const { return curls_; }

private:
    void PublishSkeleton(const HandFrame& hand);
    void PublishButtons();

    SharedStateReader* reader_;
    bool left_;
    int skeletalLevel_;
    bool controllerEmulation_;
    uint32_t objectId_ = vr::k_unTrackedDeviceIndexInvalid;
    vr::PropertyContainerHandle_t container_ = vr::k_ulInvalidPropertyContainer;
    std::string serial_;

    vr::VRInputComponentHandle_t skeletonHandle_ = vr::k_ulInvalidInputComponentHandle;
    vr::VRInputComponentHandle_t grabClick_ = vr::k_ulInvalidInputComponentHandle;
    vr::VRInputComponentHandle_t grabValue_ = vr::k_ulInvalidInputComponentHandle;
    vr::VRInputComponentHandle_t triggerClick_ = vr::k_ulInvalidInputComponentHandle;
    vr::VRInputComponentHandle_t triggerValue_ = vr::k_ulInvalidInputComponentHandle;

    std::array<BoneLocal, kBoneCount> bones_{};
    std::array<BoneLocal, kBoneCount> smoothed_{};
    bool hasSkeleton_ = false;
    bool present_ = false;
    float confidence_ = 0.0f;
    FingerCurls curls_{};

    math::Vec3 palmPos_;
    math::Quat palmRot_;
    bool pinch_ = false;
    bool fist_ = false;
};

}  // namespace pclink
}  // namespace nextvr
