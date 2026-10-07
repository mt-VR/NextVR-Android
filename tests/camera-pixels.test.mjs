import test from 'node:test';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';

test('actual native YUV converter preserves pixel order, channel order and independent strides', async()=>{
  const dir=await mkdtemp(join(tmpdir(),'nextvr-yuv-'));
  try {
    const source=`#include "camera_pixels.h"
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
    await writeFile(join(dir,'test.cc'),source);
    execFileSync('g++',['-std=c++17','-Wall','-Wextra','-Werror','-I',resolve('nextvr-android/src/main/jni'),join(dir,'test.cc'),'-o',join(dir,'test')]);
    execFileSync(join(dir,'test'));
  } finally { await rm(dir,{recursive:true,force:true}); }
});
