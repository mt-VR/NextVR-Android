#include "hand_device.h"

#include <algorithm>
#include <cstdio>
#include <cstring>

namespace nextvr {
namespace pclink {
namespace {

/** Quanto do esqueleto novo entra por atualização. Ver `SmoothSkeleton`. */
constexpr float kSmoothing = 0.45f;

vr::EVRSkeletalTrackingLevel LevelFromInt(int level) {
    switch (level) {
        case 0: return vr::VRSkeletalTracking_Estimated;
        case 2: return vr::VRSkeletalTracking_Full;
        default: return vr::VRSkeletalTracking_Partial;
    }
}

}  // namespace

HandDevice::HandDevice(SharedStateReader* reader, bool leftHand, int skeletalLevel, bool controllerEmulation)
    : reader_(reader),
      left_(leftHand),
      skeletalLevel_(skeletalLevel),
      controllerEmulation_(controllerEmulation),
      serial_(leftHand ? "NEXTVR-HAND-L" : "NEXTVR-HAND-R") {}

vr::EVRInitError HandDevice::Activate(uint32_t objectId) {
    objectId_ = objectId;
    container_ = vr::VRProperties()->TrackedDeviceToPropertyContainer(objectId_);

    vr::VRProperties()->SetStringProperty(container_, vr::Prop_ManufacturerName_String, "NextVR");
    vr::VRProperties()->SetStringProperty(container_, vr::Prop_ModelNumber_String,
                                          "NextVR Hand (camera tracking)");
    vr::VRProperties()->SetStringProperty(container_, vr::Prop_SerialNumber_String, serial_.c_str());
    vr::VRProperties()->SetStringProperty(container_, vr::Prop_TrackingSystemName_String, "nextvr");
    vr::VRProperties()->SetStringProperty(
        container_, vr::Prop_InputProfilePath_String, "{nextvr}/input/nextvr_hand_profile.json");
    vr::VRProperties()->SetStringProperty(container_, vr::Prop_RenderModelName_String,
                                          left_ ? "{nextvr}rendermodels/nextvr_hand_left"
                                                : "{nextvr}rendermodels/nextvr_hand_right");
    vr::VRProperties()->SetInt32Property(container_, vr::Prop_ControllerRoleHint_Int32,
                                         left_ ? vr::TrackedControllerRole_LeftHand
                                               : vr::TrackedControllerRole_RightHand);
    // Tipo próprio: o SteamVR mostra as bindings do perfil do NextVR, e um jogo não confunde esta mão
    // com um Knuckles (que tem sticks e botões que aqui não existem).
    vr::VRProperties()->SetStringProperty(container_, vr::Prop_ControllerType_String, "nextvr_hand");
    // Preferir mãos a controles quando o jogo aceita as duas.
    vr::VRProperties()->SetInt32Property(container_, vr::Prop_ControllerHandSelectionPriority_Int32, 1000);
    vr::VRProperties()->SetBoolProperty(container_, vr::Prop_DeviceIsWireless_Bool, true);

    // Skeletal Input: o mesmo componente que um controle com rastreamento de dedos publica. O nível é
    // honesto por padrão (Partial): os dedos são articulados, mas 10 dos 31 ossos são derivados de
    // geometria, não medidos — dizer "Full" faria jogos exigentes desenharem um esqueleto que a
    // câmera não está entregando.
    const vr::EVRInputError skeletonError = vr::VRDriverInput()->CreateSkeletonComponent(
        container_,
        left_ ? "/input/skeleton/left" : "/input/skeleton/right",
        left_ ? "/skeleton/hand/left" : "/skeleton/hand/right",
        "/pose/raw",
        LevelFromInt(skeletalLevel_),
        nullptr,  // sem pose de "grip limit": a mão não segura um controle
        0,
        &skeletonHandle_);
    if (skeletonError != vr::VRInputError_None) {
        char message[128];
        std::snprintf(message, sizeof(message), "[nextvr] CreateSkeletonComponent falhou (%d) em %s",
                      static_cast<int>(skeletonError), serial_.c_str());
        vr::VRDriverLog()->Log(message);
    }

    if (controllerEmulation_) {
        vr::VRDriverInput()->CreateBooleanComponent(container_, "/input/grab/click", &grabClick_);
        vr::VRDriverInput()->CreateScalarComponent(container_, "/input/grab/value", &grabValue_,
                                                   vr::VRScalarType_Absolute, vr::VRScalarUnits_NormalizedOneSided);
        vr::VRDriverInput()->CreateBooleanComponent(container_, "/input/trigger/click", &triggerClick_);
        vr::VRDriverInput()->CreateScalarComponent(container_, "/input/trigger/value", &triggerValue_,
                                                   vr::VRScalarType_Absolute, vr::VRScalarUnits_NormalizedOneSided);
    }
    return vr::VRInitError_None;
}

void HandDevice::Deactivate() {
    objectId_ = vr::k_unTrackedDeviceIndexInvalid;
    container_ = vr::k_ulInvalidPropertyContainer;
    skeletonHandle_ = vr::k_ulInvalidInputComponentHandle;
    hasSkeleton_ = false;
}

void* HandDevice::GetComponent(const char*) { return nullptr; }

void HandDevice::DebugRequest(const char* request, char* responseBuffer, uint32_t responseBufferSize) {
    if (!responseBuffer || responseBufferSize == 0) return;
    responseBuffer[0] = 0;
    if (!request) return;
    if (std::strcmp(request, "nextvr-hand") == 0) {
        std::snprintf(responseBuffer, responseBufferSize, "present=%d conf=%.2f pinch=%d fist=%d",
                      present_ ? 1 : 0, confidence_, pinch_ ? 1 : 0, fist_ ? 1 : 0);
    }
}

vr::DriverPose_t HandDevice::GetPose() {
    vr::DriverPose_t pose{};
    pose.poseIsValid = present_;
    pose.result = present_ ? vr::TrackingResult_Running_OK : vr::TrackingResult_Running_OutOfRange;
    pose.deviceIsConnected = true;
    pose.qWorldFromDriverRotation = {0, 0, 0, 1};
    pose.qDriverFromHeadRotation = {0, 0, 0, 1};
    pose.vecPosition[0] = palmPos_.x;
    pose.vecPosition[1] = palmPos_.y;
    pose.vecPosition[2] = palmPos_.z;
    pose.qRotation = {palmRot_.x, palmRot_.y, palmRot_.z, palmRot_.w};
    return pose;
}

void HandDevice::Update(const Frame& frame) {
    if (objectId_ == vr::k_unTrackedDeviceIndexInvalid || !frame.valid) return;

    const HandState& state = frame.hands[left_ ? 0 : 1];
    const bool allowed = left_ ? frame.leftHand : frame.rightHand;
    // Uma pose prevista (ponte entre detecções) NUNCA é tratada como mão visível para o jogo: ela
    // move a silhueta, mas um clique não pode nascer de uma extrapolação.
    present_ = allowed && state.confidence > 0.0f && !frame.stale;
    confidence_ = state.confidence;

    if (present_) {
        palmPos_ = {state.pos[0], state.pos[1], state.pos[2]};
        palmRot_ = math::normalize({state.quat[0], state.quat[1], state.quat[2], state.quat[3]});
        pinch_ = state.pinch >= 0.5f;
        fist_ = state.fist >= 0.5f;

        HandFrame hand;
        hand.present = true;
        hand.confidence = state.confidence;
        hand.palm = palmPos_;
        hand.palmRotation = palmRot_;
        hand.palmNormal = math::normalize(math::rotate(palmRot_, {0, 0, -1}));
        for (int joint = 0; joint < static_cast<int>(kJointCount); ++joint) {
            hand.joints[joint] = {state.joints[joint][0], state.joints[joint][1], state.joints[joint][2]};
        }

        std::array<BoneLocal, kBoneCount> target{};
        if (BuildHandSkeleton(hand, &target)) {
            if (!hasSkeleton_) {
                smoothed_ = target;
                hasSkeleton_ = true;
            } else {
                SmoothSkeleton(&smoothed_, target, kSmoothing);
            }
            curls_ = ComputeFingerCurls(hand);
            PublishSkeleton(hand);
        }
        PublishButtons();
    } else {
        // Sem mão: o esqueleto para de ser atualizado e a pose fica inválida. SteamVR desenha "mão
        // perdida" — que é a verdade — em vez de congelar a última pose no ar.
        pinch_ = false;
        fist_ = false;
        hasSkeleton_ = false;
        PublishButtons();
    }

    vr::VRServerDriverHost()->TrackedDevicePoseUpdated(objectId_, GetPose(), sizeof(vr::DriverPose_t));
}

void HandDevice::PublishSkeleton(const HandFrame& /*hand*/) {
    if (skeletonHandle_ == vr::k_ulInvalidInputComponentHandle) return;

    // OpenVR consome posição como HmdVector4_t (w = 1) e orientação como quaternion.
    std::array<vr::VRBoneTransform_t, kBoneCount> transforms{};
    for (int bone = 0; bone < kBoneCount; ++bone) {
        transforms[bone].position.v[0] = smoothed_[bone].position.x;
        transforms[bone].position.v[1] = smoothed_[bone].position.y;
        transforms[bone].position.v[2] = smoothed_[bone].position.z;
        transforms[bone].position.v[3] = 1.0f;
        transforms[bone].orientation.x = smoothed_[bone].rotation.x;
        transforms[bone].orientation.y = smoothed_[bone].rotation.y;
        transforms[bone].orientation.z = smoothed_[bone].rotation.z;
        transforms[bone].orientation.w = smoothed_[bone].rotation.w;
    }
    // As duas faixas: jogos escolhem "com controle na mão" ou "sem". A mão real é a mesma; o que muda
    // é o modelo que o jogo desenha.
    vr::VRDriverInput()->UpdateSkeletonComponent(skeletonHandle_, vr::VRSkeletalMotionRange_WithController,
                                                 transforms.data(), kBoneCount);
    vr::VRDriverInput()->UpdateSkeletonComponent(skeletonHandle_, vr::VRSkeletalMotionRange_WithoutController,
                                                 transforms.data(), kBoneCount);
}

void HandDevice::PublishButtons() {
    if (!controllerEmulation_) return;

    // Pinça = gatilho, punho fechado = grab. São gestos MEDIDOS pela câmera; nada aqui inventa um
    // clique que a mão não fez (uma mão prevista não chega neste ponto, ver `Update`).
    if (triggerClick_ != vr::k_ulInvalidInputComponentHandle) {
        vr::VRDriverInput()->UpdateBooleanComponent(triggerClick_, pinch_, 0.0);
    }
    if (triggerValue_ != vr::k_ulInvalidInputComponentHandle) {
        vr::VRDriverInput()->UpdateScalarComponent(triggerValue_, pinch_ ? 1.0f : 0.0f, 0.0);
    }
    if (grabClick_ != vr::k_ulInvalidInputComponentHandle) {
        vr::VRDriverInput()->UpdateBooleanComponent(grabClick_, fist_, 0.0);
    }
    if (grabValue_ != vr::k_ulInvalidInputComponentHandle) {
        vr::VRDriverInput()->UpdateScalarComponent(grabValue_, fist_ ? 1.0f : 0.0f, 0.0);
    }
}

}  // namespace pclink
}  // namespace nextvr
