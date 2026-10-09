#!/usr/bin/env python3
"""Host-side reference benchmark for the NextVR hand-tracking models.

It runs the SAME model files that ship in the APK (hand_landmarker.task, yolo11n-pose.tflite) on
the developer machine, with MediaPipe Tasks 0.10.35 (the Android AAR version) and LiteRT. It
answers the cost questions that do not depend on the phone's camera:

  * primary VIDEO-mode detection at the analysis widths used by the app (640/512 px) and at the
    full camera width (1280 px), with hands present (tracked) and absent (palm search every frame);
  * the CPU rescue landmarker on the 224 px crop that PassthroughCamera/FusionHands runs when YOLO
    reports a wrist MediaPipe misses;
  * YOLO11n-pose inference (the wrist finder).

These numbers are NOT phone numbers. They are a reproducible baseline on this machine (see
docs/hand-tracking-investigation.md for the host specification). Device validation remains
required and is done with `adb logcat -s NextVR-Perf` (see tools/perf/README.md).

Usage:  python3 tools/bench/hand_host_bench.py [--frames N] [--out result.json] [--hands DIR]
Requires: pip install mediapipe==0.10.35 ai-edge-litert opencv-python-headless numpy
"""
import argparse
import glob
import json
import os
import platform
import statistics
import sys
import time

import cv2
import mediapipe as mp
import numpy as np
from mediapipe.tasks import python as mp_tasks
from mediapipe.tasks.python import vision

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
ASSETS = os.path.join(ROOT, "nextvr-android", "src", "main", "assets")
HAND_MODEL = os.path.join(ASSETS, "hand_landmarker.task")
YOLO_MODEL = os.path.join(ASSETS, "yolo11n-pose.tflite")
CAMERA_W, CAMERA_H = 1280, 720


def percentile(values, p):
    ordered = sorted(values)
    if not ordered:
        return float("nan")
    k = min(len(ordered) - 1, max(0, int(round(p / 100.0 * (len(ordered) - 1)))))
    return ordered[k]


def stats(values_ms):
    return {
        "n": len(values_ms),
        "mean_ms": round(statistics.fmean(values_ms), 2),
        "median_ms": round(statistics.median(values_ms), 2),
        "p95_ms": round(percentile(values_ms, 95), 2),
        "min_ms": round(min(values_ms), 2),
        "max_ms": round(max(values_ms), 2),
    }


def load_hand_images(directory):
    paths = sorted(glob.glob(os.path.join(directory, "**", "*.jpg"), recursive=True))
    images = []
    for p in paths:
        im = cv2.imread(p)
        if im is None:
            continue
        # Crop away the white/blank border so the hand fills a useful part of the frame.
        gray = cv2.cvtColor(im, cv2.COLOR_BGR2GRAY)
        ys, xs = np.where(gray < 235)
        if len(xs) > 500:
            im = im[ys.min():ys.max() + 1, xs.min():xs.max() + 1]
        images.append(im)
    if not images:
        raise SystemExit(f"no hand images found in {directory}")
    return images


def camera_frame(hands, count, seed):
    """A 1280x720 'camera' frame: noisy grey background with `count` hands composited on it."""
    rng = np.random.default_rng(seed)
    frame = (110 + rng.normal(0, 6, (CAMERA_H, CAMERA_W, 3))).clip(0, 255).astype(np.uint8)
    slots = [(0.08, 0.20), (0.55, 0.22)]
    for i in range(count):
        hand = hands[i % len(hands)]
        scale = (CAMERA_H * 0.55) / hand.shape[0]
        h = int(hand.shape[0] * scale)
        w = int(hand.shape[1] * scale)
        resized = cv2.resize(hand, (w, h), interpolation=cv2.INTER_AREA)
        x0 = int(slots[i][0] * CAMERA_W)
        y0 = int(slots[i][1] * CAMERA_H)
        x1, y1 = min(CAMERA_W, x0 + w), min(CAMERA_H, y0 + h)
        frame[y0:y1, x0:x1] = resized[: y1 - y0, : x1 - x0]
    return frame


def to_bitmap_like(frame_bgr, width):
    """Mimic PassthroughCamera: the tracking input is a scaled copy of the upright frame."""
    if width == CAMERA_W:
        return cv2.cvtColor(frame_bgr, cv2.COLOR_BGR2RGB)
    height = int(round(width * frame_bgr.shape[0] / frame_bgr.shape[1]))
    scaled = cv2.resize(frame_bgr, (width, height), interpolation=cv2.INTER_LINEAR)
    return cv2.cvtColor(scaled, cv2.COLOR_BGR2RGB)


def make_landmarker(mode, min_conf):
    options = vision.HandLandmarkerOptions(
        base_options=mp_tasks.BaseOptions(model_asset_path=HAND_MODEL,
                                          delegate=mp_tasks.BaseOptions.Delegate.CPU
                                          if hasattr(mp_tasks.BaseOptions, "Delegate") else None),
        running_mode=mode,
        num_hands=2,
        min_hand_detection_confidence=min_conf,
        min_hand_presence_confidence=min_conf,
        min_tracking_confidence=0.35,
    )
    return vision.HandLandmarker.create_from_options(options)


def bench_video(frames_by_width, count, hands_present, warmup=10):
    """Time detect_for_video, the app's primary path, with the hand state held constant."""
    results = {}
    for width, frames in frames_by_width.items():
        landmarker = make_landmarker(vision.RunningMode.VIDEO, 0.45)
        times = []
        ts = 0
        for i in range(warmup + count):
            frame = frames[i % len(frames)]
            image = mp.Image(image_format=mp.ImageFormat.SRGB, data=np.ascontiguousarray(frame))
            ts += 33  # the camera cadence; detect_for_video requires increasing timestamps
            t0 = time.perf_counter()
            result = landmarker.detect_for_video(image, ts)
            dt = (time.perf_counter() - t0) * 1000.0
            if i >= warmup:
                times.append(dt)
        hands_seen = len(result.hand_landmarks)
        landmarker.close()
        results[str(width)] = {"scenario": "tracked_2_hands" if hands_present >= 2 else
                               ("tracked_1_hand" if hands_present == 1 else "no_hand_palm_search"),
                               "hands_in_last_result": hands_seen, **stats(times)}
    return results


def bench_rescue(hands, count, warmup=5):
    """Time the CPU IMAGE-mode landmarker on a 224 px crop, as FusionHands.rescueAt does."""
    landmarker = make_landmarker(vision.RunningMode.IMAGE, 0.3)
    base = camera_frame(hands, 1, 7)
    rng = np.random.default_rng(3)
    times, found = [], 0
    for i in range(warmup + count):
        cx = int(rng.integers(300, 900))
        cy = int(rng.integers(150, 500))
        crop = base[cy:cy + 300, cx:cx + 300]
        crop = cv2.resize(crop, (224, 224), interpolation=cv2.INTER_AREA)
        image = mp.Image(image_format=mp.ImageFormat.SRGB, data=np.ascontiguousarray(
            cv2.cvtColor(crop, cv2.COLOR_BGR2RGB)))
        t0 = time.perf_counter()
        result = landmarker.detect(image)
        dt = (time.perf_counter() - t0) * 1000.0
        if i >= warmup:
            times.append(dt)
            found += len(result.hand_landmarks) > 0
    landmarker.close()
    return {"crop_px": 224, "mode": "IMAGE", "hands_found_on_random_crops": found, **stats(times)}


def bench_yolo(threads, count, warmup=5):
    from ai_edge_litert.interpreter import Interpreter
    interpreter = Interpreter(model_path=YOLO_MODEL, num_threads=threads)
    interpreter.allocate_tensors()
    shape = interpreter.get_input_details()[0]["shape"]
    data = np.random.default_rng(5).random(shape).astype(np.float32)
    times = []
    for i in range(warmup + count):
        interpreter.set_tensor(interpreter.get_input_details()[0]["index"], data)
        t0 = time.perf_counter()
        interpreter.invoke()
        dt = (time.perf_counter() - t0) * 1000.0
        if i >= warmup:
            times.append(dt)
    return {"input_shape": [int(s) for s in shape], "threads": threads, **stats(times)}


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--frames", type=int, default=60, help="timed detections per scenario")
    parser.add_argument("--hands", default="/tmp/handbench/image-search",
                        help="directory with hand photos (jpg)")
    parser.add_argument("--out", default=None, help="write JSON results here")
    args = parser.parse_args()

    hands = load_hand_images(args.hands)
    one_hand = [camera_frame(hands, 1, s) for s in range(4)]
    two_hands = [camera_frame(hands, 2, 100 + s) for s in range(4)]
    empty = [camera_frame(hands, 0, 200 + s) for s in range(4)]

    report = {
        "host": {"python": sys.version.split()[0], "machine": platform.machine(),
                 "processor": platform.processor() or "unknown", "cpus": os.cpu_count(),
                 "mediapipe": mp.__version__, "opencv": cv2.__version__},
        "models": {"hand_landmarker.task": os.path.getsize(HAND_MODEL),
                   "yolo11n-pose.tflite": os.path.getsize(YOLO_MODEL)},
        "primary_video": {},
        "rescue_crop_image_mode": None,
        "yolo11n_pose": {},
    }
    for label, frames, count in (("no_hand_palm_search", empty, 0),
                                 ("tracked_1_hand", one_hand, 1),
                                 ("tracked_2_hands", two_hands, 2)):
        widths = {w: [to_bitmap_like(f, w) for f in frames] for w in (1280, 640, 512)}
        print(f"[bench] primary VIDEO {label} widths=1280/640/512 n={args.frames}", file=sys.stderr)
        report["primary_video"][label] = bench_video(widths, args.frames, count)
    print("[bench] rescue IMAGE-mode crop", file=sys.stderr)
    report["rescue_crop_image_mode"] = bench_rescue(hands, args.frames)
    for threads in (1, 2):
        print(f"[bench] YOLO11n-pose threads={threads}", file=sys.stderr)
        report["yolo11n_pose"][f"threads_{threads}"] = bench_yolo(threads, args.frames)

    text = json.dumps(report, indent=2)
    print(text)
    if args.out:
        with open(args.out, "w", encoding="utf-8") as fh:
            fh.write(text + "\n")


if __name__ == "__main__":
    main()
