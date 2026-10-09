#ifndef NEXTVR_CAMERA_PIXELS_H_
#define NEXTVR_CAMERA_PIXELS_H_
#include <algorithm>
#include <cstdint>

// Camera2 YUV_420_888: each plane has its OWN row and pixel stride, including padding.
// No assumptions about NV21 vs planar layouts.
//
// The conversion is bit-exact with the original per-pixel formula, but processes 2x2 blocks
// (one chroma sample serves four pixels) and clamps through a table instead of per-pixel
// branches. A quarter-turn rotation is fused into the same pass: it only remaps the write
// index, so the upright frame costs no extra resampling at all — the old Java-side bilinear
// rotate (pixel-exact for quarter turns, but a full resample) is gone. The tracking-sized
// analysis frame stays a Skia createScaledBitmap, whose NEON bilinear beats scalar code.

namespace nextvr {

// Clamp table indexed by (value + 512). The BT.601 intermediate results below stay within
// [-276, 534], well inside the table's [-512, 1023] range.
inline const uint8_t* ClampTable() {
  static const struct Table {
    uint8_t v[1536];
    Table() { for (int i = 0; i < 1536; i++) v[i] = (uint8_t)std::clamp(i - 512, 0, 255); }
  } table;
  return table.v;
}

inline uint32_t YuvToArgb(int yy, int uu, int vv, const uint8_t* clamp) {
  const int r = (298 * yy + 409 * vv + 128) >> 8;
  const int g = (298 * yy - 100 * uu - 208 * vv + 128) >> 8;
  const int b = (298 * yy + 516 * uu + 128) >> 8;
  return 0xff000000u | (uint32_t(clamp[r + 512]) << 16) | (uint32_t(clamp[g + 512]) << 8) |
         uint32_t(clamp[b + 512]);
}

// ROT is a quarter turn in degrees, matching android.graphics.Matrix.postRotate exactly:
// (x, y) -> (h-1-y, x) for 90, (w-1-x, h-1-y) for 180, (y, w-1-x) for 270, in a dest of
// width h and height w for the 90/270 cases.
template <int ROT>
inline void ConvertYuvArgbRot(const uint8_t* y, const uint8_t* u, const uint8_t* v, int w,
                             int h, int ys, int us, int vs, int yp, int up, int vp,
                             uint32_t* pixels, const uint8_t* clamp) {
  for (int row = 0; row < h; row += 2) {
    const uint8_t* y0 = y + int64_t(row) * ys;
    const uint8_t* y1 = (row + 1 < h) ? y + int64_t(row + 1) * ys : y0;
    const uint8_t* urow = u + int64_t(row / 2) * us;
    const uint8_t* vrow = v + int64_t(row / 2) * vs;
    const bool lastRow = row + 1 >= h;
    for (int col = 0; col < w; col += 2) {
      const bool lastCol = col + 1 >= w;
      const int yy0 = int(y0[int64_t(col) * yp]) - 16;
      const int yy1 = lastCol ? yy0 : int(y0[int64_t(col + 1) * yp]) - 16;
      const int yy2 = lastRow ? yy0 : int(y1[int64_t(col) * yp]) - 16;
      const int yy3 = (lastRow || lastCol) ? yy0 : int(y1[int64_t(col + 1) * yp]) - 16;
      const int uu = int(urow[int64_t(col / 2) * up]) - 128;
      const int vv = int(vrow[int64_t(col / 2) * vp]) - 128;
      const uint32_t p00 = YuvToArgb(yy0, uu, vv, clamp);
      const uint32_t p10 = YuvToArgb(yy1, uu, vv, clamp);
      const uint32_t p01 = YuvToArgb(yy2, uu, vv, clamp);
      const uint32_t p11 = YuvToArgb(yy3, uu, vv, clamp);
      if constexpr (ROT == 0) {
        uint32_t* o = pixels + int64_t(row) * w + col;
        o[0] = p00;
        if (!lastCol) o[1] = p10;
        if (!lastRow) {
          o[w] = p01;
          if (!lastCol) o[w + 1] = p11;
        }
      } else if constexpr (ROT == 180) {
        uint32_t* o = pixels + int64_t(h - 1 - row) * w + (w - 1 - col);
        o[0] = p00;
        if (!lastCol) o[-1] = p10;
        if (!lastRow) {
          o[-w] = p01;
          if (!lastCol) o[-w - 1] = p11;
        }
      } else if constexpr (ROT == 90) {
        // (x, y) -> index x*h + (h-1-y): the four block pixels share one base pointer.
        uint32_t* o = pixels + int64_t(col) * h + (h - 1 - row);
        o[0] = p00;                       // (col, row)
        if (!lastCol) o[h] = p10;         // (col+1, row)
        if (!lastRow) {
          o[-1] = p01;                    // (col, row+1)
          if (!lastCol) o[h - 1] = p11;   // (col+1, row+1)
        }
      } else { // ROT == 270: (x, y) -> index (w-1-x)*h + y
        uint32_t* o = pixels + int64_t(w - 1 - col) * h + row;
        o[0] = p00;                       // (col, row)
        if (!lastCol) o[-h] = p10;        // (col+1, row)
        if (!lastRow) {
          o[1] = p01;                     // (col, row+1)
          if (!lastCol) o[-h + 1] = p11;  // (col+1, row+1)
        }
      }
    }
  }
}

}  // namespace nextvr

// Bit-exact conversion with optional fused quarter-turn rotation. [rotation] must be one of
// 0/90/180/270; the output is dw x dh with dw/dh swapped for 90/270.
inline void ConvertYuvArgb(const uint8_t* y, const uint8_t* u, const uint8_t* v, int w, int h,
                           int ys, int us, int vs, int yp, int up, int vp, uint32_t* pixels,
                           int rotation = 0) {
  const uint8_t* clamp = nextvr::ClampTable();
  switch (rotation) {
    case 90:
      nextvr::ConvertYuvArgbRot<90>(y, u, v, w, h, ys, us, vs, yp, up, vp, pixels, clamp);
      break;
    case 180:
      nextvr::ConvertYuvArgbRot<180>(y, u, v, w, h, ys, us, vs, yp, up, vp, pixels, clamp);
      break;
    case 270:
      nextvr::ConvertYuvArgbRot<270>(y, u, v, w, h, ys, us, vs, yp, up, vp, pixels, clamp);
      break;
    default:
      nextvr::ConvertYuvArgbRot<0>(y, u, v, w, h, ys, us, vs, yp, up, vp, pixels, clamp);
      break;
  }
}

#endif
