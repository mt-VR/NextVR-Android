#ifndef NEXTVR_CAMERA_PIXELS_H_
#define NEXTVR_CAMERA_PIXELS_H_
#include <algorithm>
#include <cstdint>

// Camera2 YUV_420_888: each plane has its OWN row and pixel stride, including padding.
inline void ConvertYuvArgb(const uint8_t* y,const uint8_t* u,const uint8_t* v,
    int w,int h,int ys,int us,int vs,int yp,int up,int vp,uint32_t* pixels) {
  auto clamp=[](int n){return std::clamp(n,0,255);};
  for(int row=0;row<h;row++)for(int col=0;col<w;col++) {
    int yy=int(y[row*ys+col*yp])-16, uu=int(u[(row/2)*us+(col/2)*up])-128, vv=int(v[(row/2)*vs+(col/2)*vp])-128;
    int r=(298*yy+409*vv+128)>>8, g=(298*yy-100*uu-208*vv+128)>>8, b=(298*yy+516*uu+128)>>8;
    pixels[row*w+col]=0xff000000u|(clamp(r)<<16)|(clamp(g)<<8)|clamp(b);
  }
}
#endif
