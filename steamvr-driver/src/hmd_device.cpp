#include "hmd_device.h"

#include <algorithm>
#include <chrono>
#include <cstdio>
#include <cstring>
#include <string>

namespace nextvr {
namespace pclink {
namespace {

uint64_t NowNs() {
    return static_cast<uint64_t>(std::chrono::duration_cast<std::chrono::nanoseconds>(
        std::chrono::steady_clock::now().time_since_epoch()).count());
}

}  // namespace

HmdDevice::HmdDevice(SharedStateReader* reader) : reader_(reader), sink_(CreateFrameSink()) {}

vr::EVRInitError HmdDevice::Activate(uint32_t objectId) {
    objectId_ = objectId;
    container_ = vr::VRProperties()->TrackedDeviceToPropertyContainer(objectId_);

    // Pega o que o celular já publicou (projeção, IPD, tamanho por olho) antes de anunciar o display:
    // o SteamVR lê estas propriedades uma vez, quando o dispositivo aparece.
    if (reader_) {
        const Frame frame = reader_->Read(NowNs(), 2000);
        if (frame.valid) {
            displayFreq_ = std::max(60.0f, frame.displayFreq);
            eyeWidth_ = std::max(256u, frame.width);
            eyeHeight_ = std::max(256u, frame.height);
            for (int i = 0; i < 4; ++i) projection_[i] = frame.projection[i];
            ipd_ = frame.ipd;
        }
    }

    auto string = [this](vr::ETrackedDeviceProperty key, const char* value) {
        vr::VRProperties()->SetStringProperty(container_, key, value);
    };
    auto number = [this](vr::ETrackedDeviceProperty key, float value) {
        vr::VRProperties()->SetFloatProperty(container_, key, value);
    };
    auto flag = [this](vr::ETrackedDeviceProperty key, bool value) {
        vr::VRProperties()->SetBoolProperty(container_, key, value);
    };

    string(vr::Prop_ManufacturerName_String, "NextVR");
    string(vr::Prop_ModelNumber_String, "NextVR PC Link");
    string(vr::Prop_SerialNumber_String, serial_.c_str());
    string(vr::Prop_TrackingSystemName_String, "nextvr");
    string(vr::Prop_RenderModelName_String, "{nextvr}rendermodels/generic_hmd");
    string(vr::Prop_InputProfilePath_String, "{nextvr}/input/nextvr_hand_profile.json");

    number(vr::Prop_DisplayFrequency_Float, displayFreq_);
    number(vr::Prop_UserIpdMeters_Float, ipd_);
    number(vr::Prop_UserHeadToEyeDepthMeters_Float, 0.011f);
    // Atraso do vidro até o pixel acender, mais a decodificação no celular. É o número que o SteamVR
    // usa para prever a pose: subestimado, a imagem "arrasta" quando o usuário gira a cabeça.
    number(vr::Prop_SecondsFromVsyncToPhotons_Float, 0.018f);
    flag(vr::Prop_IsOnDesktop_Bool, false);
    flag(vr::Prop_ContainsProximitySensor_Bool, true);
    flag(vr::Prop_DeviceIsWireless_Bool, true);
    flag(vr::Prop_DeviceCanPowerOff_Bool, false);
    flag(vr::Prop_HasCamera_Bool, false);
    flag(vr::Prop_Firmware_ManualUpdate_Bool, false);

    // Sem o Bridge rodando o headset continua aparecendo no SteamVR ("aguardando o celular") em vez
    // de sumir — que é o que faria o usuário achar que o driver não instalou.
    if (sink_ && sink_->Start()) {
        vr::VRDriverLog()->Log("[nextvr] canal de video aberto com o PC Bridge");
    } else {
        vr::VRDriverLog()->Log("[nextvr] PC Bridge nao esta rodando; o HMD aparece aguardando conexao");
    }

    char message[160];
    std::snprintf(message, sizeof(message), "[nextvr] HMD ativado: %ux%u por olho, %.0f Hz", eyeWidth_,
                  eyeHeight_, displayFreq_);
    vr::VRDriverLog()->Log(message);
    return vr::VRInitError_None;
}

void HmdDevice::Deactivate() {
    if (sink_) sink_->Stop();
    objectId_ = vr::k_unTrackedDeviceIndexInvalid;
    container_ = vr::k_ulInvalidPropertyContainer;
}

void* HmdDevice::GetComponent(const char* componentNameAndVersion) {
    if (!componentNameAndVersion) return nullptr;
    if (std::strcmp(componentNameAndVersion, vr::IVRDisplayComponent_Version) == 0) {
        return static_cast<vr::IVRDisplayComponent*>(this);
    }
    if (std::strcmp(componentNameAndVersion, vr::IVRVirtualDisplay_Version) == 0) {
        return static_cast<vr::IVRVirtualDisplay*>(this);
    }
    return nullptr;
}

void HmdDevice::DebugRequest(const char* request, char* responseBuffer, uint32_t responseBufferSize) {
    if (!responseBuffer || responseBufferSize == 0) return;
    responseBuffer[0] = 0;
    if (!request) return;
    if (std::strcmp(request, "nextvr-status") == 0) {
        std::snprintf(responseBuffer, responseBufferSize, "frames=%llu pose=%s freq=%.0f %ux%u",
                      static_cast<unsigned long long>(frameId_), poseValid_ ? "ok" : "stale",
                      displayFreq_, eyeWidth_, eyeHeight_);
    }
}

vr::DriverPose_t HmdDevice::GetPose() {
    vr::DriverPose_t pose{};
    pose.poseIsValid = poseValid_;
    pose.result = poseValid_ ? vr::TrackingResult_Running_OK : vr::TrackingResult_Running_OutOfRange;
    pose.deviceIsConnected = true;
    pose.qWorldFromDriverRotation = {0, 0, 0, 1};
    pose.qDriverFromHeadRotation = {0, 0, 0, 1};

    pose.vecPosition[0] = pos_.x;
    pose.vecPosition[1] = pos_.y;
    pose.vecPosition[2] = pos_.z;
    pose.qRotation = {rot_.x, rot_.y, rot_.z, rot_.w};

    // O celular já manda a pose filtrada. Declarar velocidade aqui faria o SteamVR extrapolar duas
    // vezes, e a imagem passaria da cabeça em movimentos rápidos.
    return pose;
}

void HmdDevice::GetWindowBounds(int32_t* x, int32_t* y, uint32_t* width, uint32_t* height) {
    if (x) *x = 0;
    if (y) *y = 0;
    if (width) *width = eyeWidth_ * 2;
    if (height) *height = eyeHeight_;
}

void HmdDevice::GetRecommendedRenderTargetSize(uint32_t* width, uint32_t* height) {
    if (width) *width = eyeWidth_;
    if (height) *height = eyeHeight_;
}

void HmdDevice::GetEyeOutputViewport(vr::EVREye eye, uint32_t* x, uint32_t* y, uint32_t* width, uint32_t* height) {
    if (x) *x = eye == vr::Eye_Left ? 0 : eyeWidth_;
    if (y) *y = 0;
    if (width) *width = eyeWidth_;
    if (height) *height = eyeHeight_;
}

void HmdDevice::GetProjectionRaw(vr::EVREye, float* left, float* right, float* top, float* bottom) {
    // A projeção vem do CELULAR: é a da lente dele, publicada no estado compartilhado.
    // Convenção do OpenVR: esquerda e topo negativos, direita e baixo positivos.
    if (left) *left = std::min(projection_[0], -0.01f);
    if (right) *right = std::max(projection_[1], 0.01f);
    if (top) *top = std::min(projection_[2], -0.01f);
    if (bottom) *bottom = std::max(projection_[3], 0.01f);
}

vr::DistortionCoordinates_t HmdDevice::ComputeDistortion(vr::EVREye, float u, float v) {
    // Sem distorção aqui: o warp de lente é do Cardboard, no Android, depois de decodificar.
    // Distorcer duas vezes deixaria a imagem "afunilada" dentro do headset.
    vr::DistortionCoordinates_t out = {};
    out.rfRed[0] = out.rfGreen[0] = out.rfBlue[0] = u;
    out.rfRed[1] = out.rfGreen[1] = out.rfBlue[1] = v;
    return out;
}

bool HmdDevice::ComputeInverseDistortion(vr::HmdVector2_t* result, vr::EVREye, uint32_t, float u, float v) {
    if (result) {
        result->v[0] = u;
        result->v[1] = v;
    }
    return true;  // a distorção é a identidade aqui: a inversa também é.
}

void HmdDevice::Present(const vr::PresentInfo_t* info, uint32_t infoSize) {
    if (!sink_ || !info || infoSize < sizeof(vr::PresentInfo_t)) return;
    DisplayFrame frame;
    frame.texture = reinterpret_cast<void*>(info->backbufferTextureHandle);
    frame.width = eyeWidth_ * 2;
    frame.height = eyeHeight_;
    // O id do SteamVR é a referência de ordem; sem ele (0), usa o contador do driver.
    frame.frameId = info->nFrameId != 0 ? static_cast<uint32_t>(info->nFrameId) : static_cast<uint32_t>(++frameId_);
    frameId_ = frame.frameId;
    frame.captureNs = NowNs();
    lastFrameNs_ = frame.captureNs;
    sink_->Submit(frame);
}

void HmdDevice::WaitForPresent() {
    // Não bloqueia: o quadro já foi entregue ao anel do sink. Segurar o compositor aqui só somaria
    // atraso, e o ritmo quem informa é o `GetTimeSinceLastVsync`.
}

void HmdDevice::GetTiming(float* secondsSinceLastVsync, uint64_t* frameCounter) {
    const double now = static_cast<double>(NowNs()) / 1e9;
    if (lastVsyncSeconds_ == 0.0) lastVsyncSeconds_ = now;
    const double interval = 1.0 / std::max(60.0f, displayFreq_);
    if (now - lastVsyncSeconds_ >= interval) {
        lastVsyncSeconds_ += interval * std::floor((now - lastVsyncSeconds_) / interval);
        ++vsyncCounter_;
    }
    if (secondsSinceLastVsync) *secondsSinceLastVsync = static_cast<float>(now - lastVsyncSeconds_);
    if (frameCounter) *frameCounter = vsyncCounter_;
}

bool HmdDevice::GetTimeSinceLastVsync(float* secondsSinceLastVsync, uint64_t* frameCounter) {
    GetTiming(secondsSinceLastVsync, frameCounter);
    return true;
}

void HmdDevice::Update(const Frame& frame, uint64_t /*nowNs*/) {
    if (!active() || !frame.valid) return;

    // Sem publicação recente do Bridge (celular desconectou), a pose deixa de ser válida: o SteamVR
    // mostra "rastreamento perdido" e o compositor para de usar uma pose velha como se fosse atual.
    poseValid_ = frame.headValid && !frame.stale;
    if (poseValid_) {
        pos_ = frame.headPos;
        rot_ = frame.headRot;
    }
    if (frame.ipd > 0.02f && std::fabs(frame.ipd - ipd_) > 0.0005f) {
        ipd_ = frame.ipd;
        if (container_ != vr::k_ulInvalidPropertyContainer) {
            vr::VRProperties()->SetFloatProperty(container_, vr::Prop_UserIpdMeters_Float, ipd_);
        }
    }

    vr::VRServerDriverHost()->TrackedDevicePoseUpdated(objectId_, GetPose(), sizeof(vr::DriverPose_t));
}

}  // namespace pclink
}  // namespace nextvr
