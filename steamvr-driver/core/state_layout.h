// NextVR PC Link — o bloco de estado compartilhado entre o PC Bridge e este driver.
//
// A tabela de offsets é a mesma de `pclink/state.mjs` e da seção 6 do `pclink/PROTOCOL.md`; os
// `static_assert` abaixo são o que impede os três de divergirem em silêncio (o teste de protocolo
// compila este arquivo e compara offset por offset).
//
// Um campo fora do lugar não dá erro em lugar nenhum: o driver lê lixo, a cabeça vai para o lugar
// errado e o problema aparece como "o SteamVR está tremendo", três camadas de distância da causa.
#pragma once

#include <cstddef>
#include <cstdint>

namespace nextvr {
namespace pclink {

constexpr uint32_t kStateMagic = 0x5453564Eu;   // 'NVST' little-endian
constexpr uint32_t kStateVersion = 1;
constexpr size_t kStateBytes = 744;

constexpr uint32_t kFlagHead = 1u << 0;
constexpr uint32_t kFlagLeftHand = 1u << 1;
constexpr uint32_t kFlagRightHand = 1u << 2;
constexpr uint32_t kFlagSession = 1u << 3;

constexpr size_t kHandCount = 2;
constexpr size_t kJointCount = 21;

/** 292 bytes: posição, rotação, confiança, pinça, punho e os 21 joints. */
struct HandState {
    float pos[3];           // +0
    float quat[4];          // +12  x,y,z,w
    float confidence;       // +28
    float pinch;            // +32
    float fist;             // +36
    float joints[kJointCount][3];   // +40
};

#pragma pack(push, 4)
struct SharedState {
    uint32_t magic;         // +0
    uint32_t version;       // +4
    uint32_t sequence;      // +8
    uint32_t flags;         // +12
    uint64_t captureNs;     // +16
    float headPos[3];       // +24
    float headQuat[4];      // +36
    float ipd;              // +52
    float userHeight;       // +56
    float worldScale;       // +60
    float displayFreq;      // +64
    float projection[4];    // +68  left, right, top, bottom (tangentes, como o OpenVR pede)
    uint32_t width;         // +84  por olho
    uint32_t height;        // +88
    float play[16];         // +92  reservado para calibração
    HandState hands[kHandCount];    // +156
    uint32_t reserved;      // +740
};
#pragma pack(pop)

static_assert(sizeof(HandState) == 292, "HandState precisa ter 292 bytes");
static_assert(offsetof(HandState, quat) == 12, "quat em +12");
static_assert(offsetof(HandState, confidence) == 28, "confiança em +28");
static_assert(offsetof(HandState, joints) == 40, "joints em +40");
static_assert(sizeof(SharedState) == kStateBytes, "SharedState precisa ter 744 bytes");
static_assert(offsetof(SharedState, captureNs) == 16, "captureNs em +16");
static_assert(offsetof(SharedState, headQuat) == 36, "quat da cabeça em +36");
static_assert(offsetof(SharedState, projection) == 68, "projeção em +68");
static_assert(offsetof(SharedState, width) == 84, "largura em +84");
static_assert(offsetof(SharedState, play) == 92, "reservado em +92");
static_assert(offsetof(SharedState, hands) == 156, "mãos em +156");
static_assert(offsetof(SharedState, hands[1]) == 448, "mão 1 em +448");
static_assert(offsetof(SharedState, reserved) == 740, "reservado final em +740");

}  // namespace pclink
}  // namespace nextvr
