// Álgebra mínima para o esqueleto das mãos: vec3 e quaternion, sem dependência nenhuma.
//
// O driver roda dentro do processo do vrserver; uma biblioteca de matemática de terceiro ali é mais
// uma coisa para versionar e para dar errado numa máquina de usuário. São quatro operações.
#pragma once

#include <cmath>

namespace nextvr {
namespace math {

struct Vec3 {
    float x = 0, y = 0, z = 0;
};

struct Quat {
    float x = 0, y = 0, z = 0, w = 1;
};

inline Vec3 operator+(const Vec3& a, const Vec3& b) { return {a.x + b.x, a.y + b.y, a.z + b.z}; }
inline Vec3 operator-(const Vec3& a, const Vec3& b) { return {a.x - b.x, a.y - b.y, a.z - b.z}; }
inline Vec3 operator*(const Vec3& a, float s) { return {a.x * s, a.y * s, a.z * s}; }

inline float dot(const Vec3& a, const Vec3& b) { return a.x * b.x + a.y * b.y + a.z * b.z; }

inline Vec3 cross(const Vec3& a, const Vec3& b) {
    return {a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x};
}

inline float length(const Vec3& v) { return std::sqrt(dot(v, v)); }

inline Vec3 normalize(const Vec3& v, const Vec3& fallback = {0, 1, 0}) {
    const float len = length(v);
    if (!(len > 1e-6f)) return fallback;
    return v * (1.0f / len);
}

inline Quat normalize(const Quat& q) {
    const float len = std::sqrt(q.x * q.x + q.y * q.y + q.z * q.z + q.w * q.w);
    if (!(len > 1e-6f)) return {};
    return {q.x / len, q.y / len, q.z / len, q.w / len};
}

inline Quat conjugate(const Quat& q) { return {-q.x, -q.y, -q.z, q.w}; }

inline Quat operator*(const Quat& a, const Quat& b) {
    return {
        a.w * b.x + a.x * b.w + a.y * b.z - a.z * b.y,
        a.w * b.y - a.x * b.z + a.y * b.w + a.z * b.x,
        a.w * b.z + a.x * b.y - a.y * b.x + a.z * b.w,
        a.w * b.w - a.x * b.x - a.y * b.y - a.z * b.z,
    };
}

inline Vec3 rotate(const Quat& q, const Vec3& v) {
    const Vec3 u{q.x, q.y, q.z};
    const Vec3 t = cross(u, v) * 2.0f;
    return v + t * q.w + cross(u, t);
}

/** Quaternion a partir de uma base ortonormal (x, y, z = colunas). */
inline Quat fromBasis(const Vec3& xAxis, const Vec3& yAxis, const Vec3& zAxis) {
    const float m00 = xAxis.x, m01 = yAxis.x, m02 = zAxis.x;
    const float m10 = xAxis.y, m11 = yAxis.y, m12 = zAxis.y;
    const float m20 = xAxis.z, m21 = yAxis.z, m22 = zAxis.z;
    const float trace = m00 + m11 + m22;
    Quat q;
    if (trace > 0.0f) {
        const float s = std::sqrt(trace + 1.0f) * 2.0f;
        q.w = 0.25f * s;
        q.x = (m21 - m12) / s;
        q.y = (m02 - m20) / s;
        q.z = (m10 - m01) / s;
    } else if (m00 > m11 && m00 > m22) {
        const float s = std::sqrt(1.0f + m00 - m11 - m22) * 2.0f;
        q.w = (m21 - m12) / s;
        q.x = 0.25f * s;
        q.y = (m01 + m10) / s;
        q.z = (m02 + m20) / s;
    } else if (m11 > m22) {
        const float s = std::sqrt(1.0f + m11 - m00 - m22) * 2.0f;
        q.w = (m02 - m20) / s;
        q.x = (m01 + m10) / s;
        q.y = 0.25f * s;
        q.z = (m12 + m21) / s;
    } else {
        const float s = std::sqrt(1.0f + m22 - m00 - m11) * 2.0f;
        q.w = (m10 - m01) / s;
        q.x = (m02 + m20) / s;
        q.y = (m12 + m21) / s;
        q.z = 0.25f * s;
    }
    return normalize(q);
}

/**
 * Base de um osso: o +Y local aponta do osso para o próximo (o "sentido do dedo") e o +Z local é a
 * normal da palma. É a convenção dos modelos de luva do SteamVR, e a única coisa ajustável aqui caso
 * um modelo específico espere outro eixo — está em uma função só, de propósito.
 */
inline Quat boneOrientation(const Vec3& direction, const Vec3& palmNormal) {
    const Vec3 y = normalize(direction, {0, -1, 0});
    Vec3 z = palmNormal - y * dot(palmNormal, y);
    if (length(z) < 1e-5f) {
        // Direção paralela à normal da palma (dedo apontando para a câmera): escolhe um eixo estável.
        z = std::fabs(y.z) < 0.9f ? cross(y, {0, 0, 1}) : cross(y, {1, 0, 0});
    }
    z = normalize(z);
    const Vec3 x = normalize(cross(y, z));
    return fromBasis(x, y, z);
}

/** Interpolação esférica entre duas rotações (o caminho curto). */
inline Quat slerp(const Quat& a, const Quat& b, float t) {
    Quat target = b;
    float cosine = a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
    if (cosine < 0.0f) { target = {-b.x, -b.y, -b.z, -b.w}; cosine = -cosine; }
    if (cosine > 0.9995f) {
        return normalize({a.x + (target.x - a.x) * t, a.y + (target.y - a.y) * t,
                          a.z + (target.z - a.z) * t, a.w + (target.w - a.w) * t});
    }
    const float theta = std::acos(cosine);
    const float sinTheta = std::sin(theta);
    const float wa = std::sin((1.0f - t) * theta) / sinTheta;
    const float wb = std::sin(t * theta) / sinTheta;
    return normalize({a.x * wa + target.x * wb, a.y * wa + target.y * wb,
                      a.z * wa + target.z * wb, a.w * wa + target.w * wb});
}

/** Interpolação linear simples, para o ponto derivado depois da ponta do dedo. */
inline Vec3 lerp(const Vec3& a, const Vec3& b, float t) { return a + (b - a) * t; }

}  // namespace math
}  // namespace nextvr
