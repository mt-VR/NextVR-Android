// Ponto de entrada do NextVR SteamVR Driver.
//
// O vrserver carrega esta DLL quando o SteamVR inicia (o manifesto do driver pede `alwaysActivate`).
// Ela registra três dispositivos: o headset virtual e as duas mãos. Tudo o que eles publicam vem do
// bloco de estado que o PC Bridge escreve — o driver não fala rede com o celular, não captura câmera
// e não tem relógio próprio para o rastreamento. Isso é de propósito: um driver dentro do vrserver
// que faz trabalho de mais derruba o SteamVR inteiro quando erra.
//
// Configuração (SteamVR > Configurações > Desenvolvedor > ... > `steamvr.vrsettings`), seção `nextvr`:
//   controllerEmulation (bool, padrão true)  — publica grab/trigger a partir de punho/pinça
//   skeletalLevel (int, padrão 1)            — 0 Estimated, 1 Partial (honesto p/ câmera), 2 Full
#include <chrono>
#include <cstdio>
#include <cstring>
#include <memory>
#include <string>

#include "hand_device.h"
#include "hmd_device.h"
#include "openvr_driver.h"
#include "shared_state.h"

namespace {

constexpr const char* kSettingsSection = "nextvr";
constexpr const char* kSettingControllerEmulation = "controllerEmulation";
constexpr const char* kSettingSkeletalLevel = "skeletalLevel";

class NextVrProvider : public vr::IServerTrackedDeviceProvider {
public:
    vr::EVRInitError Init(vr::IVRDriverContext* context) override;
    void Cleanup() override;
    const char* const* GetInterfaceVersions() override { return vr::k_InterfaceVersions; }
    void RunFrame() override;
    bool ShouldBlockStandbyMode() override { return false; }
    void EnterStandby() override {}
    void LeaveStandby() override {}

private:
    uint64_t NowNs() const;

    nextvr::pclink::SharedStateReader reader_;
    std::unique_ptr<nextvr::pclink::HmdDevice> hmd_;
    std::unique_ptr<nextvr::pclink::HandDevice> left_;
    std::unique_ptr<nextvr::pclink::HandDevice> right_;
    bool readerOpen_ = false;
    uint64_t lastOpenAttempt_ = 0;
    uint64_t frames_ = 0;
};

uint64_t NextVrProvider::NowNs() const {
    using clock = std::chrono::steady_clock;
    return static_cast<uint64_t>(std::chrono::duration_cast<std::chrono::nanoseconds>(
        clock::now().time_since_epoch()).count());
}

vr::EVRInitError NextVrProvider::Init(vr::IVRDriverContext* context) {
    VR_INIT_SERVER_DRIVER_CONTEXT(context);

    vr::EVRSettingsError settingsError = vr::VRSettingsError_None;
    const bool controllerEmulation =
        vr::VRSettings()->GetBool(kSettingsSection, kSettingControllerEmulation, &settingsError) || settingsError != vr::VRSettingsError_None;
    settingsError = vr::VRSettingsError_None;
    const int32_t skeletalLevel =
        vr::VRSettings()->GetInt32(kSettingsSection, kSettingSkeletalLevel, &settingsError);

    // O Bridge pode não estar rodando ainda: o driver aparece mesmo assim, com o headset em
    // "aguardando conexão". Uma tentativa por segundo, sem travar o vrserver.
    readerOpen_ = reader_.Open();
    lastOpenAttempt_ = NowNs();

    hmd_ = std::make_unique<nextvr::pclink::HmdDevice>(&reader_);
    left_ = std::make_unique<nextvr::pclink::HandDevice>(&reader_, true,
                                                         settingsError == vr::VRSettingsError_None ? skeletalLevel : 1,
                                                         controllerEmulation);
    right_ = std::make_unique<nextvr::pclink::HandDevice>(&reader_, false,
                                                          settingsError == vr::VRSettingsError_None ? skeletalLevel : 1,
                                                          controllerEmulation);

    if (!vr::VRServerDriverHost()->TrackedDeviceAdded(hmd_->SerialNumber().c_str(),
                                                     vr::TrackedDeviceClass_HMD, hmd_.get())) {
        vr::VRDriverLog()->Log("[nextvr] nao foi possivel registrar o HMD virtual");
    }
    vr::VRServerDriverHost()->TrackedDeviceAdded(left_->SerialNumber().c_str(),
                                                 vr::TrackedDeviceClass_Controller, left_.get());
    vr::VRServerDriverHost()->TrackedDeviceAdded(right_->SerialNumber().c_str(),
                                                  vr::TrackedDeviceClass_Controller, right_.get());

    vr::VRDriverLog()->Log(readerOpen_ ? "[nextvr] estado do bridge encontrado"
                                      : "[nextvr] bridge ainda nao publicou estado; aguardando");
    return vr::VRInitError_None;
}

void NextVrProvider::Cleanup() {
    left_.reset();
    right_.reset();
    hmd_.reset();
    reader_.Close();
    VR_CLEANUP_SERVER_DRIVER_CONTEXT();
}

void NextVrProvider::RunFrame() {
    const uint64_t now = NowNs();

    if (!readerOpen_ && now - lastOpenAttempt_ > 1'000'000'000ull) {
        lastOpenAttempt_ = now;
        readerOpen_ = reader_.Open();
    }

    const nextvr::pclink::Frame frame = readerOpen_ ? reader_.Read(now) : nextvr::pclink::Frame{};

    // O HMD e as mãos são atualizados MESMO sem frame válido: assim eles publicam "rastreamento
    // perdido" e o SteamVR mostra o estado certo em vez de congelar a última pose.
    if (hmd_) hmd_->Update(frame, now);
    if (left_) left_->Update(frame);
    if (right_) right_->Update(frame);

    if (frame.valid && frame.session) ++frames_;
    if (!frame.valid && (now / 5'000'000'000ull) != (lastOpenAttempt_ / 5'000'000'000ull)) {
        lastOpenAttempt_ = now;
        if (!readerOpen_) readerOpen_ = reader_.Open();
    }
}

NextVrProvider g_provider;

}  // namespace

extern "C" void* HmdDriverFactory(const char* interfaceName, int* returnCode) {
    if (std::strcmp(vr::IServerTrackedDeviceProvider_Version, interfaceName) == 0) {
        return &g_provider;
    }
    if (returnCode) *returnCode = vr::VRInitError_Init_InterfaceNotFound;
    return nullptr;
}
