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

#ifndef NEXTVR_APP_H_
#define NEXTVR_APP_H_
#include <jni.h>
#include <GLES2/gl2.h>
#include "cardboard.h"
#include "util.h"
namespace ndk_nextvr {
// Cardboard owns pose, eye projections, the stereo framebuffer and distortion.
// Android's compositor supplies Camera2 and hardware WebView textures per eye.
class NextVrApp {
 public:
  NextVrApp(JavaVM*, jobject, jobject);
  ~NextVrApp();
  void OnSurfaceCreated(JNIEnv*);
  void SetScreenParams(int, int);
  void OnDrawFrame();
  void OnPause();
  void OnResume();
  void SwitchViewer();
 private:
  static constexpr float kZNear = .05f, kZFar = 100.f;
  bool UpdateDeviceParams();
  void GlSetup();
  void GlTeardown();
  JavaVM* vm_;
  jobject activity_;
  jmethodID draw_eye_, pose_;
  CardboardHeadTracker* head_tracker_ = nullptr;
  CardboardLensDistortion* lens_distortion_ = nullptr;
  CardboardDistortionRenderer* distortion_renderer_ = nullptr;
  CardboardEyeTextureDescription left_eye_texture_description_{}, right_eye_texture_description_{};
  bool screen_params_changed_ = true, device_params_changed_ = true;
  int screen_width_ = 0, screen_height_ = 0;
  float projection_matrices_[2][16], eye_matrices_[2][16];
  GLuint depthRenderBuffer_ = 0, framebuffer_ = 0, texture_ = 0;
};
}
#endif
