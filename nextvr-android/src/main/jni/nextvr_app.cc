/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#include "nextvr_app.h"
#include <time.h>
#include <android/log.h>

namespace ndk_nextvr {
NextVrApp::NextVrApp(JavaVM* vm, jobject obj, jobject /*assets*/) : vm_(vm) {
  JNIEnv* env = nullptr;
  vm->GetEnv(reinterpret_cast<void**>(&env), JNI_VERSION_1_6);
  activity_ = env->NewGlobalRef(obj);
  jclass cls = env->GetObjectClass(obj);
  draw_eye_ = env->GetMethodID(cls, "drawEye", "([F[F)V");
  pose_ = env->GetMethodID(cls, "headPose", "([F)V");
  env->DeleteLocalRef(cls);
  Cardboard_initializeAndroid(vm, obj);
  head_tracker_ = CardboardHeadTracker_create();
  CardboardHeadTracker_setLowPassFilter(head_tracker_, 6.f);
}
NextVrApp::~NextVrApp() {
  CardboardHeadTracker_destroy(head_tracker_);
  CardboardLensDistortion_destroy(lens_distortion_);
  CardboardDistortionRenderer_destroy(distortion_renderer_);
  JNIEnv* env = nullptr;
  vm_->GetEnv(reinterpret_cast<void**>(&env), JNI_VERSION_1_6);
  env->DeleteGlobalRef(activity_);
}
void NextVrApp::OnSurfaceCreated(JNIEnv* /*env*/) {
  // Names from a lost EGL context must NOT be deleted in the new context.
  CardboardDistortionRenderer_destroy(distortion_renderer_);
  distortion_renderer_ = nullptr;
  framebuffer_ = texture_ = depthRenderBuffer_ = 0;
  screen_params_changed_ = device_params_changed_ = true;
}
void NextVrApp::SetScreenParams(int width, int height) {
  screen_width_ = width; screen_height_ = height; screen_params_changed_ = true;
}
void NextVrApp::OnPause() { CardboardHeadTracker_pause(head_tracker_); }
void NextVrApp::OnResume() {
  CardboardHeadTracker_resume(head_tracker_); device_params_changed_ = true;
}
void NextVrApp::SwitchViewer() { CardboardQrCode_scanQrCodeAndSaveDeviceParams(); }
void NextVrApp::OnTriggerEvent() {} // Input goes to the same spatial ray as pinch input in Java/HTML.
void NextVrApp::OnDrawFrame() {
  if (screen_width_ <= 0 || screen_height_ <= 0 || !UpdateDeviceParams()) return;
  JNIEnv* env = nullptr;
  vm_->GetEnv(reinterpret_cast<void**>(&env), JNI_VERSION_1_6);
  timespec ts; clock_gettime(CLOCK_BOOTTIME, &ts);
  const int64_t now = int64_t(ts.tv_sec) * 1000000000LL + ts.tv_nsec;
  float position[3], orientation[4];
  CardboardHeadTracker_getPose(head_tracker_, now + 50000000LL, kLandscapeLeft, position, orientation);
  // Deliberately discard translation. No neck model, VINS, ARCore or 6 DoF.
  Matrix4x4 rotation = Quatf::FromXYZW(orientation).ToMatrix();
  auto raw = rotation.ToGlArray();
  jfloatArray view_array = env->NewFloatArray(16);
  jfloatArray projection_array = env->NewFloatArray(16);
  env->SetFloatArrayRegion(view_array, 0, 16, raw.data());
  env->CallVoidMethod(activity_, pose_, view_array);
  Matrix4x4 head = rotation * GetTranslationMatrix({0.f, -1.55f, 0.f});
  glBindFramebuffer(GL_FRAMEBUFFER, framebuffer_);
  glDisable(GL_SCISSOR_TEST);
  glClearColor(0, 0, 0, 1);
  glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
  for (int eye = 0; eye < 2; ++eye) {
    glViewport(eye * screen_width_ / 2, 0, screen_width_ / 2, screen_height_);
    auto view = (GetMatrixFromGlArray(eye_matrices_[eye]) * head).ToGlArray();
    env->SetFloatArrayRegion(view_array, 0, 16, view.data());
    env->SetFloatArrayRegion(projection_array, 0, 16, projection_matrices_[eye]);
    env->CallVoidMethod(activity_, draw_eye_, view_array, projection_array);
    if (env->ExceptionCheck()) break;
  }
  env->DeleteLocalRef(view_array); env->DeleteLocalRef(projection_array);
  glDisable(GL_BLEND); glDisable(GL_DEPTH_TEST); glDisable(GL_CULL_FACE);
  CardboardDistortionRenderer_renderEyeToDisplay(distortion_renderer_, 0, 0, 0,
      screen_width_, screen_height_, &left_eye_texture_description_, &right_eye_texture_description_);
}
bool NextVrApp::UpdateDeviceParams() {
  // Checks if screen or device parameters changed
  if (!screen_params_changed_ && !device_params_changed_) {
    return true;
  }

  // Get saved device parameters
  uint8_t* buffer;
  int size;
  CardboardQrCode_getSavedDeviceParams(&buffer, &size);

  // Use the SDK-owned Cardboard v1 defaults until the user explicitly pairs a viewer.
  bool defaults = size == 0;
  if (defaults) CardboardQrCode_getCardboardV1DeviceParams(&buffer, &size);

  CardboardLensDistortion_destroy(lens_distortion_);
  lens_distortion_ = CardboardLensDistortion_create(buffer, size, screen_width_,
                                                    screen_height_);

  if (!defaults) CardboardQrCode_destroy(buffer);

  GlSetup();

  CardboardDistortionRenderer_destroy(distortion_renderer_);
  const CardboardOpenGlEsDistortionRendererConfig config{kGlTexture2D};
  distortion_renderer_ = CardboardOpenGlEs2DistortionRenderer_create(&config);

  CardboardMesh left_mesh;
  CardboardMesh right_mesh;
  CardboardLensDistortion_getDistortionMesh(lens_distortion_, kLeft,
                                            &left_mesh);
  CardboardLensDistortion_getDistortionMesh(lens_distortion_, kRight,
                                            &right_mesh);

  CardboardDistortionRenderer_setMesh(distortion_renderer_, &left_mesh, kLeft);
  CardboardDistortionRenderer_setMesh(distortion_renderer_, &right_mesh,
                                      kRight);

  // Get eye matrices
  CardboardLensDistortion_getEyeFromHeadMatrix(lens_distortion_, kLeft,
                                               eye_matrices_[0]);
  CardboardLensDistortion_getEyeFromHeadMatrix(lens_distortion_, kRight,
                                               eye_matrices_[1]);
  CardboardLensDistortion_getProjectionMatrix(lens_distortion_, kLeft, kZNear,
                                              kZFar, projection_matrices_[0]);
  CardboardLensDistortion_getProjectionMatrix(lens_distortion_, kRight, kZNear,
                                              kZFar, projection_matrices_[1]);

  screen_params_changed_ = false;
  device_params_changed_ = false;

  CHECKGLERROR("UpdateDeviceParams");

  return true;
}

void NextVrApp::GlSetup() {
  LOGD("GL SETUP");

  if (framebuffer_ != 0) {
    GlTeardown();
  }

  // Create render texture.
  glGenTextures(1, &texture_);
  glBindTexture(GL_TEXTURE_2D, texture_);
  glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
  glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);
  glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_CLAMP_TO_EDGE);
  glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_CLAMP_TO_EDGE);

  glTexImage2D(GL_TEXTURE_2D, 0, GL_RGB, screen_width_, screen_height_, 0,
               GL_RGB, GL_UNSIGNED_BYTE, 0);

  left_eye_texture_description_.texture = texture_;
  left_eye_texture_description_.left_u = 0;
  left_eye_texture_description_.right_u = 0.5;
  left_eye_texture_description_.top_v = 1;
  left_eye_texture_description_.bottom_v = 0;

  right_eye_texture_description_.texture = texture_;
  right_eye_texture_description_.left_u = 0.5;
  right_eye_texture_description_.right_u = 1;
  right_eye_texture_description_.top_v = 1;
  right_eye_texture_description_.bottom_v = 0;

  // Generate depth buffer to perform depth test.
  glGenRenderbuffers(1, &depthRenderBuffer_);
  glBindRenderbuffer(GL_RENDERBUFFER, depthRenderBuffer_);
  glRenderbufferStorage(GL_RENDERBUFFER, GL_DEPTH_COMPONENT16, screen_width_,
                        screen_height_);
  CHECKGLERROR("Create Render buffer");

  // Create render target.
  glGenFramebuffers(1, &framebuffer_);
  glBindFramebuffer(GL_FRAMEBUFFER, framebuffer_);
  glFramebufferTexture2D(GL_FRAMEBUFFER, GL_COLOR_ATTACHMENT0, GL_TEXTURE_2D,
                         texture_, 0);
  glFramebufferRenderbuffer(GL_FRAMEBUFFER, GL_DEPTH_ATTACHMENT,
                            GL_RENDERBUFFER, depthRenderBuffer_);

  CHECKGLERROR("GlSetup");
}

void NextVrApp::GlTeardown() {
  if (framebuffer_ == 0) {
    return;
  }
  glDeleteRenderbuffers(1, &depthRenderBuffer_);
  depthRenderBuffer_ = 0;
  glDeleteFramebuffers(1, &framebuffer_);
  framebuffer_ = 0;
  glDeleteTextures(1, &texture_);
  texture_ = 0;

  CHECKGLERROR("GlTeardown");
}


} // namespace ndk_nextvr
