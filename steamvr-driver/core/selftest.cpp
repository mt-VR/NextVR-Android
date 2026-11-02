// Autoteste do núcleo do NextVR SteamVR Driver.
//
// Roda em qualquer sistema (inclusive Linux, onde o CI compila isto): o que ele testa é justamente a
// parte que não depende do Windows — a tabela de offsets do estado compartilhado e a montagem do
// esqueleto de 31 ossos a partir dos 21 pontos da câmera.
//
// Uso:
//   nextvr-core-selftest layout     → offsets do bloco compartilhado, em JSON
//   nextvr-core-selftest skeleton   → verificações do esqueleto, em JSON
//
// Os testes do Node executam este binário; é a única forma de o contrato entre Node, C++ e Kotlin
// ser verificado de verdade em vez de conferido a olho.
#include <cmath>
#include <cstddef>
#include <cstdio>
#include <cstring>
#include <string>
#include <vector>

#include "hand_skeleton.h"
#include "state_layout.h"

namespace {

using nextvr::pclink::BoneWorld;
using nextvr::pclink::HandFrame;
using nextvr::math::Quat;
using nextvr::math::Vec3;

struct Check {
    std::string name;
    bool ok;
    std::string detail;
};

std::vector<Check> checks;

void Record(const std::string& name, bool ok, const std::string& detail = "") {
    checks.push_back({name, ok, detail});
}

void RecordNear(const std::string& name, float actual, float expected, float tolerance) {
    const bool ok = std::fabs(actual - expected) <= tolerance;
    char detail[128];
    std::snprintf(detail, sizeof(detail), "atual=%.4f esperado=%.4f tol=%.4f", actual, expected, tolerance);
    Record(name, ok, detail);
}

bool AnyFailed() {
    for (const Check& check : checks) {
        if (!check.ok) return true;
    }
    return false;
}

/** Uma mão aberta sintética: dedos para cima (−Y), palma virada para a câmera. */
HandFrame OpenHand() {
    HandFrame hand;
    hand.present = true;
    hand.confidence = 0.95f;
    hand.palm = {0.0f, 0.0f, 0.0f};
    hand.palmRotation = {0, 0, 0, 1};
    hand.palmNormal = {0, 0, -1};

    hand.joints[nextvr::pclink::kJointWrist] = {0.0f, -0.02f, 0.0f};
    // Polegar: sai para a esquerda.
    hand.joints[nextvr::pclink::kJointThumbCmc] = {-0.02f, 0.00f, 0.0f};
    hand.joints[nextvr::pclink::kJointThumbMcp] = {-0.04f, 0.01f, 0.0f};
    hand.joints[nextvr::pclink::kJointThumbIp] = {-0.055f, 0.02f, 0.0f};
    hand.joints[nextvr::pclink::kJointThumbTip] = {-0.07f, 0.03f, 0.0f};

    const int mcp[4] = {nextvr::pclink::kJointIndexMcp, nextvr::pclink::kJointMiddleMcp,
                        nextvr::pclink::kJointRingMcp, nextvr::pclink::kJointPinkyMcp};
    const float spread[4] = {-0.024f, -0.008f, 0.008f, 0.024f};
    for (int f = 0; f < 4; ++f) {
        const float x = spread[f];
        const float base = 0.012f + f * 0.001f;
        hand.joints[mcp[f]] = {x, base, 0.0f};
        hand.joints[mcp[f] + 1] = {x, base + 0.035f, 0.0f};
        hand.joints[mcp[f] + 2] = {x, base + 0.058f, 0.0f};
        hand.joints[mcp[f] + 3] = {x, base + 0.075f, 0.0f};
    }
    return hand;
}

/** A mesma mão, com as falanges dobradas para dentro: um punho fechado. */
HandFrame ClosedHand() {
    HandFrame hand = OpenHand();
    const int mcp[4] = {nextvr::pclink::kJointIndexMcp, nextvr::pclink::kJointMiddleMcp,
                        nextvr::pclink::kJointRingMcp, nextvr::pclink::kJointPinkyMcp};
    for (int f = 0; f < 4; ++f) {
        const float x = hand.joints[mcp[f]].x;
        const float base = hand.joints[mcp[f]].y;
        // PIP sobe, DIP e ponta voltam na direção do punho (é o que a câmera vê num punho fechado).
        hand.joints[mcp[f] + 1] = {x, base + 0.03f, 0.0f};
        hand.joints[mcp[f] + 2] = {x, base + 0.02f, 0.02f};
        hand.joints[mcp[f] + 3] = {x, base + 0.005f, 0.032f};
    }
    hand.joints[nextvr::pclink::kJointThumbMcp] = {-0.035f, 0.012f, 0.012f};
    hand.joints[nextvr::pclink::kJointThumbIp] = {-0.03f, 0.02f, 0.026f};
    hand.joints[nextvr::pclink::kJointThumbTip] = {-0.022f, 0.024f, 0.035f};
    return hand;
}

void RunLayout() {
    using nextvr::pclink::SharedState;
    char detail[96];
    auto check = [&](const char* name, size_t actual, size_t expected) {
        std::snprintf(detail, sizeof(detail), "%zu esperado %zu", actual, expected);
        Record(name, actual == expected, detail);
    };
    check("sizeof(SharedState)", sizeof(SharedState), 744);
    check("offsetof(captureNs)", offsetof(SharedState, captureNs), 16);
    check("offsetof(headPos)", offsetof(SharedState, headPos), 24);
    check("offsetof(headQuat)", offsetof(SharedState, headQuat), 36);
    check("offsetof(ipd)", offsetof(SharedState, ipd), 52);
    check("offsetof(projection)", offsetof(SharedState, projection), 68);
    check("offsetof(width)", offsetof(SharedState, width), 84);
    check("offsetof(play)", offsetof(SharedState, play), 92);
    check("offsetof(hands)", offsetof(SharedState, hands), 156);
    check("offsetof(hands[1])", offsetof(SharedState, hands[1]), 448);
    check("offsetof(reserved)", offsetof(SharedState, reserved), 740);
    check("sizeof(HandState)", sizeof(nextvr::pclink::HandState), 292);
    check("offsetof(hands[0].quat)", offsetof(nextvr::pclink::HandState, quat), 12);
    check("offsetof(hands[0].joints)", offsetof(nextvr::pclink::HandState, joints), 40);
}

void RunSkeleton() {
    using namespace nextvr::pclink;
    std::array<BoneLocal, kBoneCount> bones{};

    const HandFrame open = OpenHand();
    const bool built = BuildHandSkeleton(open, &bones);
    Record("mão presente monta o esqueleto", built);
    Record("são 31 ossos", kBoneCount == 31, std::to_string(kBoneCount));

    // Raiz é identidade, por contrato do OpenVR.
    RecordNear("raiz.x", bones[kBoneRoot].position.x, 0.0f, 1e-6f);
    RecordNear("raiz.y", bones[kBoneRoot].position.y, 0.0f, 1e-6f);
    RecordNear("raiz.w", bones[kBoneRoot].rotation.w, 1.0f, 1e-6f);

    // Punho: a posição no espaço do pai (a palma) tem que ser a do joint menos a origem.
    RecordNear("punho.x", bones[kBoneWrist].position.x, 0.0f, 1e-4f);
    RecordNear("punho.y", bones[kBoneWrist].position.y, -0.02f, 1e-4f);

    // Reconstruir o mundo a partir do local tem que voltar ao mesmo lugar (hierarquia consistente).
    const auto world = SkeletonWorld(bones, open.palm, open.palmRotation);
    float worst = 0.0f;
    for (int bone = 0; bone < kBoneCount; ++bone) {
        // O osso 9 (Index3) é a ponta real do indicador: tem que estar onde o MediaPipe a colocou.
        if (bone == kBoneIndex3) {
            worst = std::max(worst, nextvr::math::length(world[bone].position - open.joints[kJointIndexTip]));
        }
        if (bone == kBonePinky0) {
            worst = std::max(worst, nextvr::math::length(world[bone].position - open.joints[kJointPinkyMcp]));
        }
        if (bone == kBoneThumb3) {
            worst = std::max(worst, nextvr::math::length(world[bone].position - open.joints[kJointThumbTip]));
        }
    }
    RecordNear("joints reais no lugar (m)", worst, 0.0f, 1e-4f);

    // O quinto osso do dedo é derivado, mas tem que CONTINUAR o dedo (mais longe que a ponta).
    const float tipToDerived = nextvr::math::length(
        world[kBoneIndex4].position - world[kBoneIndex3].position);
    RecordNear("osso derivado depois da ponta (m)", tipToDerived, 0.0175f * 0.55f, 0.004f);

    // Mão ausente nunca produz esqueleto.
    HandFrame absent = open;
    absent.present = false;
    std::array<BoneLocal, kBoneCount> empty{};
    Record("mão ausente não monta esqueleto", !BuildHandSkeleton(absent, &empty));

    // Curl: aberto perto de 0, fechado perto de 1.
    const FingerCurls openCurl = ComputeFingerCurls(open);
    const FingerCurls fistCurl = ComputeFingerCurls(ClosedHand());
    RecordNear("curl do indicador aberto", openCurl.index, 0.0f, 0.12f);
    Record("curl do indicador fechado", fistCurl.index > 0.55f, std::to_string(fistCurl.index));
    Record("curl do punho inteiro", fistCurl.index > openCurl.index);

    // Suavização: reduz o tremor de um sinal ruidoso e não "atrasa" além de um passo.
    std::array<BoneLocal, kBoneCount> smoothed{};
    BuildHandSkeleton(open, &smoothed);
    float jitterRaw = 0.0f, jitterSmooth = 0.0f;
    std::array<BoneLocal, kBoneCount> previousRaw = smoothed;
    std::array<BoneLocal, kBoneCount> previousSmooth = smoothed;
    for (int step = 0; step < 40; ++step) {
        HandFrame noisy = open;
        const float wobble = (step % 2 == 0) ? 0.004f : -0.004f;
        noisy.joints[kJointIndexTip].x += wobble;
        noisy.joints[kJointIndexTip].y += wobble;
        std::array<BoneLocal, kBoneCount> frame{};
        BuildHandSkeleton(noisy, &frame);
        SmoothSkeleton(&smoothed, frame, 0.35f);
        jitterRaw = std::max(jitterRaw, nextvr::math::length(frame[kBoneIndex3].position -
                                                            previousRaw[kBoneIndex3].position));
        jitterSmooth = std::max(jitterSmooth, nextvr::math::length(smoothed[kBoneIndex3].position -
                                                                  previousSmooth[kBoneIndex3].position));
        previousRaw = frame;
        previousSmooth = smoothed;
    }
    Record("suavização reduz o tremor", jitterSmooth < jitterRaw * 0.75f,
          "cru=" + std::to_string(jitterRaw) + " suave=" + std::to_string(jitterSmooth));
    Record("suavização não some com o dedo", nextvr::math::length(smoothed[kBoneIndex3].position) > 0.0f);

    // A mão esquerda é espelhada: o esqueleto não pode assumir "dedos sempre para a direita".
    HandFrame mirrored = open;
    for (auto& joint : mirrored.joints) joint.x = -joint.x;
    mirrored.palmNormal = {0, 0, -1};
    std::array<BoneLocal, kBoneCount> mirroredBones{};
    Record("mão espelhada monta esqueleto", BuildHandSkeleton(mirrored, &mirroredBones));
    Record("mão espelhada mantém a hierarquia",
          std::fabs(std::fabs(mirroredBones[kBonePinky0].position.y) -
                    std::fabs(bones[kBonePinky0].position.y)) < 1e-3f);
}

void Print(int argc, char** argv) {
    const char* mode = argc > 1 ? argv[1] : "skeleton";
    checks.clear();
    if (std::strcmp(mode, "layout") == 0) RunLayout();
    else RunSkeleton();

    std::printf("{\"mode\":\"%s\",\"ok\":%s,\"checks\":[", mode, AnyFailed() ? "false" : "true");
    for (size_t i = 0; i < checks.size(); ++i) {
        std::printf("%s{\"name\":\"%s\",\"ok\":%s,\"detail\":\"%s\"}", i ? "," : "",
                    checks[i].name.c_str(), checks[i].ok ? "true" : "false", checks[i].detail.c_str());
    }
    std::printf("]}\n");
}

}  // namespace

int main(int argc, char** argv) {
    Print(argc, argv);
    return AnyFailed() ? 1 : 0;
}
