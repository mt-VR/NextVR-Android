#include <jni.h>
#include "camera_pixels.h"

// YUV strides belong to each individual plane. No assumptions about NV21 vs planar layouts.
extern "C" JNIEXPORT void JNICALL
Java_com_nextvr_cardboard_PassthroughCamera_nativeYuvToArgb(
    JNIEnv* env, jclass, jintArray out, jobject y_buffer, jobject u_buffer, jobject v_buffer,
    jint w, jint h, jint ys, jint us, jint vs, jint yp, jint up, jint vp) {
  auto* y=static_cast<uint8_t*>(env->GetDirectBufferAddress(y_buffer));
  auto* u=static_cast<uint8_t*>(env->GetDirectBufferAddress(u_buffer));
  auto* v=static_cast<uint8_t*>(env->GetDirectBufferAddress(v_buffer));
  auto fits=[&](jobject b,int rows,int cols,int stride,int pixel) {
    return rows>0 && cols>0 && stride>0 && pixel>0 &&
      int64_t(rows-1)*stride+int64_t(cols-1)*pixel < env->GetDirectBufferCapacity(b);
  };
  if(!out || !y || !u || !v || w<=0 || h<=0 || w>4096 || h>4096 ||
     env->GetArrayLength(out)<int64_t(w)*h ||
     !fits(y_buffer,h,w,ys,yp) || !fits(u_buffer,(h+1)/2,(w+1)/2,us,up) || !fits(v_buffer,(h+1)/2,(w+1)/2,vs,vp)) {
    jclass error=env->FindClass("java/lang/IllegalArgumentException");
    env->ThrowNew(error,"Invalid camera YUV planes");env->DeleteLocalRef(error);return;
  }
  auto* pixels=static_cast<jint*>(env->GetPrimitiveArrayCritical(out,nullptr));if(!pixels)return;
  ConvertYuvArgb(y,u,v,w,h,ys,us,vs,yp,up,vp,reinterpret_cast<uint32_t*>(pixels));
  env->ReleasePrimitiveArrayCritical(out,pixels,0);
}
