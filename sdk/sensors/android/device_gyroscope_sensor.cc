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
#include "sensors/device_gyroscope_sensor.h"

#include <android/looper.h>
#include <android/sensor.h>
#include <cmath>
#include <stddef.h>

#include <memory>

#include "sensors/accelerometer_data.h"
#include "sensors/gyroscope_data.h"
#include "util/constants.h"
#include "util/logging.h"

// Workaround to avoid the inclusion of "android_native_app_glue.h.
#ifndef LOOPER_ID_USER
#define LOOPER_ID_USER 3
#endif

namespace cardboard {

namespace {

// Creates an Android sensor event queue for the current thread.
static ASensorEventQueue* CreateSensorQueue(ASensorManager* sensor_manager) {
  ALooper* event_looper = ALooper_forThread();

  if (event_looper == nullptr) {
    event_looper = ALooper_prepare(ALOOPER_PREPARE_ALLOW_NON_CALLBACKS);
    CARDBOARD_LOGI(
        "AccelerometerSensor: Created new event looper for gyroscope sensor "
        "capture thread.");
  }

  return ASensorManager_createEventQueue(sensor_manager, event_looper,
                                         LOOPER_ID_USER, nullptr, nullptr);
}

enum PrivateSensors {
  ASENSOR_TYPE_ROTATION_VECTOR_ANDROID = 11,
  ASENSOR_TYPE_MAGNETIC_FIELD_UNCALIBRATED = 14,
  ASENSOR_TYPE_GAME_ROTATION_VECTOR_ANDROID = 15,
  ASENSOR_TYPE_GYROSCOPE_UNCALIBRATED = 16,
  ASENSOR_TYPE_GEOMAGNETIC_ROTATION_VECTOR_ANDROID = 20,
  ASENSOR_TYPE_ADDITIONAL_INFO = 33,
};

const ASensor* InitSensor(ASensorManager* sensor_manager) {
  // Prefer calibrated ASENSOR_TYPE_GYROSCOPE first: on devices with virtual/HAL-fused
  // gyroscopes, the calibrated sensor is populated while UNCALIBRATED may be absent or zero.
  const ASensor* calibrated =
      ASensorManager_getDefaultSensor(sensor_manager, ASENSOR_TYPE_GYROSCOPE);
  if (calibrated != nullptr) {
    CARDBOARD_LOGI("Android Gyro Sensor: ASENSOR_TYPE_GYROSCOPE");
    return calibrated;
  }
  const ASensor* uncalibrated = ASensorManager_getDefaultSensor(
      sensor_manager, ASENSOR_TYPE_GYROSCOPE_UNCALIBRATED);
  if (uncalibrated != nullptr) {
    CARDBOARD_LOGI("Android Gyro Sensor: ASENSOR_TYPE_GYRO_UNCALIBRATED");
    return uncalibrated;
  }
  return nullptr;
}

const ASensor* InitFallbackRotationSensor(ASensorManager* sensor_manager) {
  const int candidates[] = {
      ASENSOR_TYPE_GAME_ROTATION_VECTOR_ANDROID,
      ASENSOR_TYPE_ROTATION_VECTOR_ANDROID,
      ASENSOR_TYPE_GEOMAGNETIC_ROTATION_VECTOR_ANDROID,
  };
  for (int type : candidates) {
    const ASensor* sensor = ASensorManager_getDefaultSensor(sensor_manager, type);
    if (sensor != nullptr) {
      CARDBOARD_LOGI("Android Fallback Rotation Sensor: type=%d", type);
      return sensor;
    }
  }
  return nullptr;
}

bool PollLooper(int timeout_ms, int* num_events) {
  void* source = nullptr;
  const int looper_id = ALooper_pollOnce(timeout_ms, NULL, num_events,
                                        reinterpret_cast<void**>(&source));
  if (looper_id != LOOPER_ID_USER) {
    return false;
  }
  if (*num_events <= 0) {
    return false;
  }
  return true;
}

static void EnableSensorAtBestRate(ASensorEventQueue* queue,
                                   const ASensor* sensor) {
  if (sensor == nullptr) return;
  ASensorEventQueue_enableSensor(queue, sensor);
  const int min_delay = ASensor_getMinDelay(sensor);
  const int target_delay = min_delay > 0 ? min_delay : 5000;
  if (ASensorEventQueue_setEventRate(queue, sensor, target_delay) < 0 &&
      target_delay < 5000) {
    ASensorEventQueue_setEventRate(queue, sensor, 5000);
  }
}

class SensorEventQueueReader {
 public:
  SensorEventQueueReader(ASensorManager* manager, const ASensor* sensor,
                         const ASensor* fallback_sensor)
      : manager_(manager),
        sensor_(sensor),
        fallback_sensor_(fallback_sensor),
        queue_(CreateSensorQueue(manager_)) {}

  ~SensorEventQueueReader() {
    ASensorManager_destroyEventQueue(manager_, queue_);
  }

  bool Start() {
    EnableSensorAtBestRate(queue_, sensor_);
    if (sensor_ == nullptr && fallback_sensor_ != nullptr) {
      EnableSensorAtBestRate(queue_, fallback_sensor_);
    } else if (fallback_sensor_ != nullptr) {
      // Also enable rotation vector as backup in case hardware gyro delivers all zeros.
      EnableSensorAtBestRate(queue_, fallback_sensor_);
    }
    return true;
  }

  void Stop() {
    if (sensor_ != nullptr) {
      ASensorEventQueue_disableSensor(queue_, sensor_);
    }
    if (fallback_sensor_ != nullptr) {
      ASensorEventQueue_disableSensor(queue_, fallback_sensor_);
    }
  }

  bool WaitForEvent(int timeout_ms, ASensorEvent* event) {
    int num_events;
    if (!PollLooper(timeout_ms, &num_events)) {
      return false;
    }
    return (ASensorEventQueue_getEvents(queue_, event, 1) > 0);
  }

  bool ReadEvent(ASensorEvent* event) {
    return (ASensorEventQueue_getEvents(queue_, event, 1) > 0);
  }

 private:
  ASensorManager* manager_;          // Owned by android library.
  const ASensor* sensor_;            // Owned by android library.
  const ASensor* fallback_sensor_;   // Owned by android library.
  ASensorEventQueue* queue_;         // Owned by this.
};

}  // namespace

// This struct holds android gyroscope specific sensor information.
struct DeviceGyroscopeSensor::SensorInfo {
  SensorInfo()
      : sensor_manager(nullptr),
        sensor(nullptr),
        fallback_sensor(nullptr),
        has_real_gyro(false),
        has_prev_quat(false),
        prev_quat_ns(0),
        prev_qx(0.0f),
        prev_qy(0.0f),
        prev_qz(0.0f),
        prev_qw(1.0f) {}
  ASensorManager* sensor_manager;
  const ASensor* sensor;
  const ASensor* fallback_sensor;
  bool has_real_gyro;
  bool has_prev_quat;
  int64_t prev_quat_ns;
  float prev_qx;
  float prev_qy;
  float prev_qz;
  float prev_qw;
  std::unique_ptr<SensorEventQueueReader> reader;
};

namespace {

bool ParseGyroEvent(const ASensorEvent& event,
                    DeviceGyroscopeSensor::SensorInfo* info,
                    GyroscopeData* sample) {
  if (event.type == ASENSOR_TYPE_ADDITIONAL_INFO) {
    return false;
  }

  sample->sensor_timestamp_ns = event.timestamp;
  sample->system_timestamp = event.timestamp;
  if (event.type == ASENSOR_TYPE_GYROSCOPE ||
      event.type == ASENSOR_TYPE_GYROSCOPE_UNCALIBRATED) {
    const float gx = event.vector.x;
    const float gy = event.vector.y;
    const float gz = event.vector.z;
    if (gx * gx + gy * gy + gz * gz > 1e-10f) {
      info->has_real_gyro = true;
    }
    if (info->has_real_gyro || info->fallback_sensor == nullptr) {
      sample->data = {gx, gy, gz};
      return true;
    }
    return false;
  }

  if (event.type == ASENSOR_TYPE_GAME_ROTATION_VECTOR_ANDROID ||
      event.type == ASENSOR_TYPE_ROTATION_VECTOR_ANDROID ||
      event.type == ASENSOR_TYPE_GEOMAGNETIC_ROTATION_VECTOR_ANDROID) {
    if (info->has_real_gyro) {
      return false;
    }
    float qx = event.data[0];
    float qy = event.data[1];
    float qz = event.data[2];
    float qw = event.data[3];
    const float norm_xyz = qx * qx + qy * qy + qz * qz;
    if (qw == 0.0f && norm_xyz < 1.0f) {
      qw = std::sqrt(std::max(0.0f, 1.0f - norm_xyz));
    }
    const float norm = std::sqrt(qx * qx + qy * qy + qz * qz + qw * qw);
    if (norm < 1e-6f) {
      return false;
    }
    qx /= norm;
    qy /= norm;
    qz /= norm;
    qw /= norm;

    if (!info->has_prev_quat) {
      info->has_prev_quat = true;
      info->prev_quat_ns = event.timestamp;
      info->prev_qx = qx;
      info->prev_qy = qy;
      info->prev_qz = qz;
      info->prev_qw = qw;
      sample->data = {0.0f, 0.0f, 0.0f};
      return true;
    }

    const double dt =
        static_cast<double>(event.timestamp - info->prev_quat_ns) * 1e-9;
    info->prev_quat_ns = event.timestamp;
    const float p_qx = info->prev_qx;
    const float p_qy = info->prev_qy;
    const float p_qz = info->prev_qz;
    const float p_qw = info->prev_qw;
    info->prev_qx = qx;
    info->prev_qy = qy;
    info->prev_qz = qz;
    info->prev_qw = qw;

    if (dt <= 1e-5 || dt > 0.5) {
      sample->data = {0.0f, 0.0f, 0.0f};
      return true;
    }

    // Relative rotation in sensor frame: dq = q_prev^* * q_curr
    float dw = p_qw * qw + p_qx * qx + p_qy * qy + p_qz * qz;
    float dx = p_qw * qx - p_qx * qw - p_qy * qz + p_qz * qy;
    float dy = p_qw * qy + p_qx * qz - p_qy * qw - p_qz * qx;
    float dz = p_qw * qz - p_qx * qy + p_qy * qx - p_qz * qw;
    if (dw < 0.0f) {
      dw = -dw;
      dx = -dx;
      dy = -dy;
      dz = -dz;
    }
    const float v_norm = std::sqrt(dx * dx + dy * dy + dz * dz);
    float scale = 0.0f;
    if (v_norm > 1e-6f) {
      const float angle = 2.0f * std::atan2(v_norm, dw);
      scale = angle / (v_norm * static_cast<float>(dt));
    } else {
      scale = 2.0f / static_cast<float>(dt);
    }
    sample->data = {dx * scale, dy * scale, dz * scale};
    return true;
  }

  return false;
}

}  // namespace

DeviceGyroscopeSensor::DeviceGyroscopeSensor()
    : sensor_info_(new SensorInfo()) {
#if __ANDROID_MIN_SDK_VERSION__ >= 26
  sensor_info_->sensor_manager =
      ASensorManager_getInstanceForPackage(Constants::kCardboardSdkPackageName);
#else
  // TODO: b/314792983 - Remove deprecated NDK methods.
  sensor_info_->sensor_manager = ASensorManager_getInstance();
#endif
  sensor_info_->sensor = InitSensor(sensor_info_->sensor_manager);
  sensor_info_->fallback_sensor =
      InitFallbackRotationSensor(sensor_info_->sensor_manager);
  if (!sensor_info_->sensor && !sensor_info_->fallback_sensor) {
    return;
  }

  sensor_info_->reader =
      std::unique_ptr<SensorEventQueueReader>(new SensorEventQueueReader(
          sensor_info_->sensor_manager, sensor_info_->sensor,
          sensor_info_->fallback_sensor));
}

DeviceGyroscopeSensor::~DeviceGyroscopeSensor() {}

void DeviceGyroscopeSensor::PollForSensorData(
    int timeout_ms, std::vector<GyroscopeData>* results) const {
  results->clear();
  if (!sensor_info_->reader) {
    return;
  }
  ASensorEvent event;
  if (!sensor_info_->reader->WaitForEvent(timeout_ms, &event)) {
    return;
  }
  do {
    GyroscopeData sample;
    if (ParseGyroEvent(event, sensor_info_.get(), &sample)) {
      results->push_back(sample);
    }
  } while (sensor_info_->reader->ReadEvent(&event));
}

bool DeviceGyroscopeSensor::Start() {
  if (!sensor_info_->reader) {
    CARDBOARD_LOGE("Could not start gyroscope sensor.");
    return false;
  }
  return sensor_info_->reader->Start();
}

void DeviceGyroscopeSensor::Stop() {
  if (!sensor_info_->reader) {
    return;
  }
  sensor_info_->reader->Stop();
}

}  // namespace cardboard
