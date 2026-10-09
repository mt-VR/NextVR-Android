import test from 'node:test';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';

const HEADER = resolve('nextvr-android/src/main/jni');

async function compileAndRun(source) {
  const dir = await mkdtemp(join(tmpdir(), 'nextvr-yuv-'));
  try {
    await writeFile(join(dir, 'test.cc'), source);
    execFileSync('g++', ['-std=c++17', '-O2', '-Wall', '-Wextra', '-Werror', '-I', HEADER, join(dir, 'test.cc'), '-o', join(dir, 'test')]);
    return execFileSync(join(dir, 'test')).toString();
  } finally { await rm(dir, { recursive: true, force: true }); }
}

// The implementation as it was before the 2026-10 optimization: one scalar pass, per-pixel
// clamp, per-pixel chroma indexing. Kept here as the reference for bit-exactness.
const REFERENCE = `
#include <algorithm>
#include <cstdint>
static void ReferenceYuvArgb(const uint8_t* y,const uint8_t* u,const uint8_t* v,
    int w,int h,int ys,int us,int vs,int yp,int up,int vp,uint32_t* pixels) {
  auto clamp=[](int n){return std::clamp(n,0,255);};
  for(int row=0;row<h;row++)for(int col=0;col<w;col++) {
    int yy=int(y[row*ys+col*yp])-16, uu=int(u[(row/2)*us+(col/2)*up])-128, vv=int(v[(row/2)*vs+(col/2)*vp])-128;
    int r=(298*yy+409*vv+128)>>8, g=(298*yy-100*uu-208*vv+128)>>8, b=(298*yy+516*uu+128)>>8;
    pixels[row*w+col]=0xff000000u|(clamp(r)<<16)|(clamp(g)<<8)|clamp(b);
  }
}
`;

test('actual native YUV converter preserves pixel order, channel order and independent strides', async () => {
  const source = `#include "camera_pixels.h"
#include <cassert>
#include <array>
int main(){
  std::array<uint8_t,40> y{};std::array<uint8_t,14> u{};std::array<uint8_t,10> v{};
  uint32_t pixels[16]{};
  // Four labelled quadrants: R B / B R; padding and different strides on every plane.
  for(int row=0;row<4;row++)for(int col=0;col<4;col++)y[row*10+col*2]=((row/2)==(col/2))?81:41;
  for(int row=0;row<2;row++)for(int col=0;col<2;col++){
    const bool red=row==col;u[row*7+col*2]=red?90:240;v[row*5+col]=red?240:110;
  }
  ConvertYuvArgb(y.data(),u.data(),v.data(),4,4,10,7,5,2,2,1,pixels);
  for(int row=0;row<4;row++)for(int col=0;col<4;col++)assert(pixels[row*4+col]==(((row/2)==(col/2))?0xffff0000u:0xff0000ffu));
  uint8_t gray[]={16,235},chroma[]={128};uint32_t out[2];
  ConvertYuvArgb(gray,chroma,chroma,2,1,2,1,1,1,1,1,out);
  assert(out[0]==0xff000000u && out[1]==0xffffffffu);
}`;
  await compileAndRun(source);
});

test('optimized converter is bit-exact with the original scalar pass (fuzz, odd sizes, padded strides)', async () => {
  const source = `#include "camera_pixels.h"
${REFERENCE}
#include <cassert>
#include <cstdio>
#include <vector>
#include <random>
int main(){
  std::mt19937 rng(42);
  for(int trial=0;trial<300;trial++){
    const int w=1+int(rng()%40), h=1+int(rng()%40);
    const int ys=w+int(rng()%5), us=(w+1)/2+int(rng()%4), vs=(w+1)/2+int(rng()%4);
    const int yp=1+int(rng()%2), up=1+int(rng()%2), vp=1+int(rng()%2);
    std::vector<uint8_t> y(size_t(ys)*h+rng()%16), u(size_t(us)*((h+1)/2)+rng()%16), v(size_t(vs)*((h+1)/2)+rng()%16);
    for(auto&b:y)b=uint8_t(rng());
    for(auto&b:u)b=uint8_t(rng());
    for(auto&b:v)b=uint8_t(rng());
    std::vector<uint32_t> a(size_t(w)*h), b(size_t(w)*h);
    ConvertYuvArgb(y.data(),u.data(),v.data(),w,h,ys,us,vs,yp,up,vp,a.data());
    ReferenceYuvArgb(y.data(),u.data(),v.data(),w,h,ys,us,vs,yp,up,vp,b.data());
    if(a!=b){printf("mismatch trial=%d w=%d h=%d\\n",trial,w,h);return 1;}
  }
  printf("fuzz ok\\n");
}`;
  const out = await compileAndRun(source);
  if (!out.includes('fuzz ok')) throw new Error('fuzz output missing: ' + out);
});

test('fused quarter-turn rotation matches Matrix.postRotate normalized-coordinate mapping', async () => {
  const source = `#include "camera_pixels.h"
#include <cassert>
#include <cmath>
#include <cstdio>
#include <vector>
#include <random>
// Independent reference: android.graphics.Matrix.postRotate maps normalized image coordinates
// (x,y) -> (1-y,x) for 90, (1-x,1-y) for 180, (y,1-x) for 270 (CameraGeometry.uprightPoint).
static void ReferenceRotate(const uint32_t* src,int w,int h,uint32_t* dst,int rot){
  const int dw=(rot==90||rot==270)?h:w, dh=(rot==90||rot==270)?w:h;
  std::fill(dst,dst+size_t(dw)*dh,0xdeadbeefu);
  for(int row=0;row<h;row++)for(int col=0;col<w;col++){
    const float x=w>1?float(col)/(w-1):0.f, y=h>1?float(row)/(h-1):0.f;
    float nx,ny;
    if(rot==90){nx=1-y;ny=x;} else if(rot==180){nx=1-x;ny=1-y;} else if(rot==270){nx=y;ny=1-x;} else {nx=x;ny=y;}
    const int dc=dw>1?int(lroundf(nx*(dw-1))):0, dr=dh>1?int(lroundf(ny*(dh-1))):0;
    assert(dst[dr*dw+dc]==0xdeadbeefu); // a bijection: no two source pixels share a dest pixel
    dst[dr*dw+dc]=src[row*w+col];
  }
}
int main(){
  std::mt19937 rng(7);
  for(int trial=0;trial<120;trial++){
    const int w=1+int(rng()%33), h=1+int(rng()%33);
    const int ys=w, us=(w+1)/2, vs=(w+1)/2;
    std::vector<uint8_t> y(size_t(ys)*h), u(size_t(us)*((h+1)/2)), v(size_t(vs)*((h+1)/2));
    for(auto&b:y)b=uint8_t(rng());
    for(auto&b:u)b=uint8_t(rng());
    for(auto&b:v)b=uint8_t(rng());
    std::vector<uint32_t> flat(size_t(w)*h);
    ConvertYuvArgb(y.data(),u.data(),v.data(),w,h,ys,us,vs,1,1,1,flat.data(),0);
    for(int rot : {0,90,180,270}){
      const int dw=(rot==90||rot==270)?h:w, dh=(rot==90||rot==270)?w:h;
      std::vector<uint32_t> rotated(size_t(dw)*dh), expected(size_t(dw)*dh);
      ConvertYuvArgb(y.data(),u.data(),v.data(),w,h,ys,us,vs,1,1,1,rotated.data(),rot);
      ReferenceRotate(flat.data(),w,h,expected.data(),rot);
      if(rotated!=expected){printf("rotation mismatch trial=%d rot=%d w=%d h=%d\\n",trial,rot,w,h);return 1;}
    }
  }
  printf("rotation ok\\n");
}`;
  const out = await compileAndRun(source);
  if (!out.includes('rotation ok')) throw new Error('rotation output missing: ' + out);
});

// Informational benchmark (host CPU, not a device): old scalar pass vs optimized pass with and
// without the fused quarter-turn rotation. Prints ns/pixel; asserts nothing about timing.
test('benchmark: optimized converter vs original scalar pass (informational)', async () => {
  const source = `#include "camera_pixels.h"
${REFERENCE}
#include <chrono>
#include <cstdio>
#include <vector>
#include <random>
template<typename F> static double nsPerPixel(F&& f,long pixels){
  f(); // warmup
  const auto t0=std::chrono::steady_clock::now();
  const int reps=60;
  for(int i=0;i<reps;i++)f();
  const auto t1=std::chrono::steady_clock::now();
  return std::chrono::duration<double,std::nano>(t1-t0).count()/double(reps)/double(pixels);
}
int main(){
  const int w=1280,h=720;
  std::vector<uint8_t> y(size_t(w)*h), u(size_t(w/2)*h/2), v(size_t(w/2)*h/2);
  std::mt19937 rng(3);
  for(auto&b:y)b=uint8_t(rng());
  for(auto&b:u)b=uint8_t(rng());
  for(auto&b:v)b=uint8_t(rng());
  std::vector<uint32_t> out(size_t(w)*h);
  const long pixels=long(w)*h;
  const double oldNs=nsPerPixel([&]{ReferenceYuvArgb(y.data(),u.data(),v.data(),w,h,w,w/2,w/2,1,1,1,out.data());},pixels);
  const double newNs=nsPerPixel([&]{ConvertYuvArgb(y.data(),u.data(),v.data(),w,h,w,w/2,w/2,1,1,1,out.data(),0);},pixels);
  const double rotNs=nsPerPixel([&]{ConvertYuvArgb(y.data(),u.data(),v.data(),w,h,w,w/2,w/2,1,1,1,out.data(),90);},pixels);
  printf("reference=%.1f ns/px optimized=%.1f ns/px (%.2fx) rotated90=%.1f ns/px\\n",
    oldNs,newNs,oldNs/newNs,rotNs);
}`;
  const out = await compileAndRun(source);
  process.stdout.write(out);
});
