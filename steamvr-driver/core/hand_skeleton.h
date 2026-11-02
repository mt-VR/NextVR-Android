// Os 31 ossos do esqueleto de mão do OpenVR, montados a partir dos 21 pontos que o celular manda.
//
// Isto é a parte em que é fácil mentir. A câmera do celular vê 21 articulações; o OpenVR define 31
// ossos. As 21 primeiras são medidas de verdade; as outras 10 são DERIVADAS por geometria
// (um quinto osso de dedo que continua a última falange e cinco "aux" na base dos metacarpos).
// Derivar não é animar: cada osso derivado sai da posição real dos vizinhos, no mesmo quadro, e
// quando a mão não está sendo vista o esqueleto inteiro é declarado inválido em vez de preenchido
// com uma pose plausível.
//
// Espaço: a entrada vem em metros no espaço do app (cabeça para cima, Z para trás, como o resto do
// NextVR). A saída é no espaço da PALMA — o osso raiz é identidade e o punho carrega o deslocamento,
// que é o que o OpenVR pede ("drivers should leave the root bone as an identity, then provide the
// offset needed to position the skeleton with the wrist bone").
#pragma once

#include <array>

#include "state_layout.h"
#include "vecmath.h"

namespace nextvr {
namespace pclink {

/** Índices do MediaPipe, para não espalhar números mágicos pelo código. */
enum JointIndex {
    kJointWrist = 0,
    kJointThumbCmc = 1, kJointThumbMcp = 2, kJointThumbIp = 3, kJointThumbTip = 4,
    kJointIndexMcp = 5, kJointIndexPip = 6, kJointIndexDip = 7, kJointIndexTip = 8,
    kJointMiddleMcp = 9, kJointMiddlePip = 10, kJointMiddleDip = 11, kJointMiddleTip = 12,
    kJointRingMcp = 13, kJointRingPip = 14, kJointRingDip = 15, kJointRingTip = 16,
    kJointPinkyMcp = 17, kJointPinkyPip = 18, kJointPinkyDip = 19, kJointPinkyTip = 20,
};

/** Os 31 ossos do OpenVR, na ordem em que `VRSkeletalTransform_t` os espera. */
enum HandBone {
    kBoneRoot = 0,
    kBoneWrist = 1,
    kBoneThumb0 = 2, kBoneThumb1 = 3, kBoneThumb2 = 4, kBoneThumb3 = 5,
    kBoneIndex0 = 6, kBoneIndex1 = 7, kBoneIndex2 = 8, kBoneIndex3 = 9, kBoneIndex4 = 10,
    kBoneMiddle0 = 11, kBoneMiddle1 = 12, kBoneMiddle2 = 13, kBoneMiddle3 = 14, kBoneMiddle4 = 15,
    kBoneRing0 = 16, kBoneRing1 = 17, kBoneRing2 = 18, kBoneRing3 = 19, kBoneRing4 = 20,
    kBonePinky0 = 21, kBonePinky1 = 22, kBonePinky2 = 23, kBonePinky3 = 24, kBonePinky4 = 25,
    kBoneAuxThumb = 26, kBoneAuxIndex = 27, kBoneAuxMiddle = 28, kBoneAuxRing = 29, kBoneAuxPinky = 30,
    kBoneCount = 31,
};

/** Um osso no espaço do app: onde ele está e para onde aponta. */
struct BoneWorld {
    math::Vec3 position;
    math::Quat rotation;
};

/** Pai de um osso na hierarquia do OpenVR (`-1` na raiz). */
int ParentOf(int bone);

/** Um osso no espaço do PAI, que é o que o OpenVR consome. */
struct BoneLocal {
    math::Vec3 position;
    math::Quat rotation;
};

/** Entrada de uma mão: os 21 joints em metros, a palma e a normal da palma. */
struct HandFrame {
    bool present = false;
    float confidence = 0.0f;
    math::Vec3 palm;                  // centro da palma, espaço do app
    math::Quat palmRotation;          // rotação da palma (o "raw pose" do dispositivo)
    math::Vec3 palmNormal{0, 0, -1};  // normal da palma (de onde sai a mão em direção ao mundo)
    std::array<math::Vec3, kJointCount> joints{};
};

/**
 * Monta os 31 ossos. Devolve false (e não escreve nada) quando a mão não está presente: um esqueleto
 * sem mão é pior que esqueleto nenhum, porque o jogo desenha uma mão em um lugar onde não há ninguém.
 */
bool BuildHandSkeleton(const HandFrame& frame, std::array<BoneLocal, kBoneCount>* out);

/**
 * Junta os 31 ossos no espaço do app (não do pai). Serve para o autoteste e para depurar: quem
 * integra não precisa disto em produção.
 */
std::array<BoneWorld, kBoneCount> SkeletonWorld(const std::array<BoneLocal, kBoneCount>& local,
                                                const math::Vec3& rootPosition,
                                                const math::Quat& rootRotation);

/**
 * Suavização entre dois esqueletos, um polo só (`alpha` = quanto do novo entra por atualização).
 *
 * A câmera já entrega a mão filtrada (One Euro, no celular); o que sobra de tremor é o do MediaPipe
 * entre inferências, e um polo leve tira isso sem acrescentar um quadro inteiro de atraso. Com
 * `alpha = 1` a função é uma cópia pura — o caminho para quando alguém quiser desligar.
 */
void SmoothSkeleton(std::array<BoneLocal, kBoneCount>* current,
                    const std::array<BoneLocal, kBoneCount>& target, float alpha);

/** Curl por dedo (0 = esticado, 1 = fechado), do jeito que o SteamVR publica em `VRSkeletalSummaryData_t`. */
struct FingerCurls {
    float thumb = 0, index = 0, middle = 0, ring = 0, pinky = 0;
};

FingerCurls ComputeFingerCurls(const HandFrame& frame);

}  // namespace pclink
}  // namespace nextvr
