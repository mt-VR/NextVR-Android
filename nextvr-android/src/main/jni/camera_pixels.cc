#include <jni.h>
#include <algorithm>
#include <cstdint>

// YUV strides belong to each individual plane. No assumptions about NV21 vs planar layouts.
extern "C" JNIEXPORT jintArray JNICALL
Java_com_nextvr_cardboard_PassthroughCamera_nativeYuvToArgb(
    JNIEnv* env, jclass, jobject y_buffer, jobject u_buffer, jobject v_buffer,
    jint w, jint h, jint ys, jint us, jint vs, jint yp, jint up, jint vp) {
  auto* y=static_cast<uint8_t*>(env->GetDirectBufferAddress(y_buffer));
  auto* u=static_cast<uint8_t*>(env->GetDirectBufferAddress(u_buffer));
  auto* v=static_cast<uint8_t*>(env->GetDirectBufferAddress(v_buffer));
  auto fits=[&](jobject b,int rows,int cols,int stride,int pixel) {
    return rows>0 && cols>0 && stride>0 && pixel>0 &&
      int64_t(rows-1)*stride+int64_t(cols-1)*pixel < env->GetDirectBufferCapacity(b);
  };
  if(!y || !u || !v || w>4096 || h>4096 ||
     !fits(y_buffer,h,w,ys,yp) || !fits(u_buffer,(h+1)/2,(w+1)/2,us,up) || !fits(v_buffer,(h+1)/2,(w+1)/2,vs,vp)) {
    jclass error=env->FindClass("java/lang/IllegalArgumentException");
    env->ThrowNew(error,"Invalid camera YUV planes");env->DeleteLocalRef(error);return nullptr;
  }
  jintArray out=env->NewIntArray(w*h);if(!out)return nullptr;
  auto* pixels=static_cast<jint*>(env->GetPrimitiveArrayCritical(out,nullptr));if(!pixels)return nullptr;
  auto clamp=[](int n){return std::clamp(n,0,255);};
  for(int row=0;row<h;row++)for(int col=0;col<w;col++) {
    int yy=int(y[row*ys+col*yp])-16, uu=int(u[(row/2)*us+(col/2)*up])-128, vv=int(v[(row/2)*vs+(col/2)*vp])-128;
    int r=(298*yy+409*vv+128)>>8, g=(298*yy-100*uu-208*vv+128)>>8, b=(298*yy+516*uu+128)>>8;
    pixels[row*w+col]=static_cast<jint>(0xff000000u|(clamp(r)<<16)|(clamp(g)<<8)|clamp(b));
  }
  env->ReleasePrimitiveArrayCritical(out,pixels,0);return out;
}
