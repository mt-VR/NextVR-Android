#include "hand_skeleton.h"

#include <algorithm>
#include <cmath>

namespace nextvr {
namespace pclink {
namespace {

using math::Vec3;
using math::Quat;

/** Os quatro ossos de um dedo normal (indicador…mínimo) e a ponta derivada depois do último. */
struct FingerMap {
    int mcp, pip, dip, tip;
    int bone0;  // primeiro osso desse dedo no esqueleto do OpenVR
};

constexpr FingerMap kFingers[4] = {
    {kJointIndexMcp, kJointIndexPip, kJointIndexDip, kJointIndexTip, kBoneIndex0},
    {kJointMiddleMcp, kJointMiddlePip, kJointMiddleDip, kJointMiddleTip, kBoneMiddle0},
    {kJointRingMcp, kJointRingPip, kJointRingDip, kJointRingTip, kBoneRing0},
    {kJointPinkyMcp, kJointPinkyPip, kJointPinkyDip, kJointPinkyTip, kBonePinky0},
};

constexpr int kAux[5] = {kBoneAuxThumb, kBoneAuxIndex, kBoneAuxMiddle, kBoneAuxRing, kBoneAuxPinky};

/** Quanto do último segmento a ponta derivada continua. Meia falange é o que a mão real tem. */
constexpr float kTipExtension = 0.55f;
/** Onde o osso "aux" fica entre o punho e a base do dedo. */
constexpr float kAuxFraction = 0.35f;

}  // namespace

int ParentOf(int bone) {
    if (bone == kBoneRoot) return -1;
    if (bone == kBoneWrist) return kBoneRoot;
    if (bone >= kBoneAuxThumb) return kBoneWrist;
    // Dentro de um dedo: 0 → punho, 1..4 → o anterior.
    const int base = bone < kBoneIndex0 ? kBoneThumb0 : kBoneIndex0 + ((bone - kBoneIndex0) / 5) * 5;
    if (bone == base) return kBoneWrist;
    return bone - 1;
}

bool BuildHandSkeleton(const HandFrame& frame, std::array<BoneLocal, kBoneCount>* out) {
    if (!out) return false;
    // Sem mão, sem esqueleto. Nada de completar com a palma em repouso.
    if (!frame.present || frame.confidence <= 0.0f) return false;

    std::array<BoneWorld, kBoneCount> world{};
    const Vec3 normal = math::normalize(frame.palmNormal, {0, 0, -1});
    const Vec3 wrist = frame.joints[kJointWrist];

    // Raiz: identidade, na palma. O punho carrega o deslocamento (é o contrato do OpenVR).
    world[kBoneRoot].position = frame.palm;
    world[kBoneRoot].rotation = frame.palmRotation;
    world[kBoneWrist].position = wrist;
    world[kBoneWrist].rotation = math::boneOrientation(
        math::normalize(frame.joints[kJointMiddleMcp] - wrist, {0, -1, 0}), normal);

    // Polegar: quatro ossos, todos medidos (CMC, MCP, IP, TIP).
    const int thumbJoints[4] = {kJointThumbCmc, kJointThumbMcp, kJointThumbIp, kJointThumbTip};
    for (int i = 0; i < 4; ++i) {
        const int next = thumbJoints[std::min(i + 1, 3)];
        const Vec3 here = frame.joints[thumbJoints[i]];
        Vec3 direction = frame.joints[next] - here;
        if (math::length(direction) < 1e-5f) direction = frame.joints[thumbJoints[3]] - here;
        world[kBoneThumb0 + i].position = here;
        world[kBoneThumb0 + i].rotation = math::boneOrientation(direction, normal);
    }

    // Dedos: três falanges medidas + a ponta do MediaPipe (4ª) + a derivada (5ª).
    for (const FingerMap& finger : kFingers) {
        const Vec3 mcp = frame.joints[finger.mcp];
        const Vec3 pip = frame.joints[finger.pip];
        const Vec3 dip = frame.joints[finger.dip];
        const Vec3 tip = frame.joints[finger.tip];

        world[finger.bone0 + 0].position = mcp;
        world[finger.bone0 + 1].position = pip;
        world[finger.bone0 + 2].position = dip;
        world[finger.bone0 + 3].position = tip;

        // Depois da ponta não existe medição: continua o último segmento proporcionalmente. É o único
        // ponto derivado de posição, e ele acompanha a mão em cada quadro (não é uma pose guardada).
        const Vec3 lastSegment = tip - dip;
        const float lastLength = math::length(lastSegment);
        const Vec3 extended = lastLength > 1e-5f
            ? tip + math::normalize(lastSegment) * (lastLength * kTipExtension)
            : tip;
        world[finger.bone0 + 4].position = extended;

        for (int bone = 0; bone < 5; ++bone) {
            const Vec3 here = world[finger.bone0 + bone].position;
            const Vec3 next = (bone < 4) ? world[finger.bone0 + bone + 1].position
                                         : extended + (extended - tip);
            world[finger.bone0 + bone].rotation =
                math::boneOrientation(next - here, normal);
        }

        // Osso auxiliar do dedo: uma fração do caminho punho → base do dedo, com a orientação do dedo.
        const int aux = kAux[1 + static_cast<int>(&finger - kFingers)];
        world[aux].position = math::lerp(wrist, mcp, kAuxFraction);
        world[aux].rotation = world[finger.bone0].rotation;
    }

    // Aux do polegar: mesma ideia, entre o punho e a base do polegar.
    world[kBoneAuxThumb].position = math::lerp(wrist, frame.joints[kJointThumbCmc], kAuxFraction);
    world[kBoneAuxThumb].rotation = world[kBoneThumb0].rotation;

    // De mundo para o espaço do pai, que é o que o OpenVR consome.
    for (int bone = 0; bone < kBoneCount; ++bone) {
        const int parent = ParentOf(bone);
        const Quat parentRotation = parent < 0 ? Quat{0, 0, 0, 1} : world[parent].rotation;
        const Vec3 parentPosition = parent < 0 ? Vec3{} : world[parent].position;
        const Quat inverse = math::conjugate(parentRotation);
        (*out)[bone].position = math::rotate(inverse, world[bone].position - parentPosition);
        (*out)[bone].rotation = math::normalize(inverse * world[bone].rotation);
    }
    // Raiz é identidade por contrato.
    (*out)[kBoneRoot].position = {0, 0, 0};
    (*out)[kBoneRoot].rotation = {0, 0, 0, 1};
    return true;
}

std::array<BoneWorld, kBoneCount> SkeletonWorld(const std::array<BoneLocal, kBoneCount>& local,
                                                const Vec3& rootPosition, const Quat& rootRotation) {
    std::array<BoneWorld, kBoneCount> world{};
    for (int bone = 0; bone < kBoneCount; ++bone) {
        const int parent = ParentOf(bone);
        const Vec3 parentPosition = parent < 0 ? rootPosition : world[parent].position;
        const Quat parentRotation = parent < 0 ? rootRotation : world[parent].rotation;
        world[bone].position = parentPosition + math::rotate(parentRotation, local[bone].position);
        world[bone].rotation = math::normalize(parentRotation * local[bone].rotation);
    }
    return world;
}

void SmoothSkeleton(std::array<BoneLocal, kBoneCount>* current,
                    const std::array<BoneLocal, kBoneCount>& target, float alpha) {
    if (!current) return;
    const float t = std::max(0.0f, std::min(1.0f, alpha));
    if (t >= 1.0f) {
        *current = target;
        return;
    }
    for (int bone = 0; bone < kBoneCount; ++bone) {
        (*current)[bone].position = math::lerp((*current)[bone].position, target[bone].position, t);
        (*current)[bone].rotation = math::slerp((*current)[bone].rotation, target[bone].rotation, t);
    }
}

FingerCurls ComputeFingerCurls(const HandFrame& frame) {
    FingerCurls curls;
    if (!frame.present) return curls;

    // Curl por ângulo total do dedo: a soma das deflexões entre falanges. Um dedo esticado soma 0;
    // um punho fechado passa de 90°. O resultado 0..1 é o que o jogo espera de um "curl".
    // As angulações são entre SEGMENTOS consecutivos (falange 1 × falange 2 × falange 3), não entre
    // as posições: um dedo perfeitamente esticado tem os três segmentos na mesma direção e soma 0.
    auto curlOf = [](const Vec3& a, const Vec3& b, const Vec3& c, const Vec3& d) {
        auto angle = [](const Vec3& u, const Vec3& v) {
            const float lu = math::length(u), lv = math::length(v);
            if (!(lu > 1e-6f) || !(lv > 1e-6f)) return 0.0f;
            const float cosine = std::max(-1.0f, std::min(1.0f, math::dot(u, v) / (lu * lv)));
            return std::acos(cosine);
        };
        const float total = angle(b - a, c - b) + angle(c - b, d - c);
        return std::max(0.0f, std::min(1.0f, total / 2.2f));  // ~125° = punho fechado
    };

    curls.thumb = curlOf(frame.joints[kJointThumbCmc], frame.joints[kJointThumbMcp],
                         frame.joints[kJointThumbIp], frame.joints[kJointThumbTip]);
    for (const FingerMap& finger : kFingers) {
        const float value = curlOf(frame.joints[finger.mcp], frame.joints[finger.pip],
                                   frame.joints[finger.dip], frame.joints[finger.tip]);
        switch (finger.bone0) {
            case kBoneIndex0: curls.index = value; break;
            case kBoneMiddle0: curls.middle = value; break;
            case kBoneRing0: curls.ring = value; break;
            case kBonePinky0: curls.pinky = value; break;
            default: break;
        }
    }
    return curls;
}

}  // namespace pclink
}  // namespace nextvr
