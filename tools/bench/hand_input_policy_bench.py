#!/usr/bin/env python3
"""What actually sets the hand-tracking rate: input size, detection state and thread contention.

This complements hand_host_bench.py. That one times the models; this one times the DECISIONS the app
makes around them, with the real shipped hand_landmarker.task and the app's own geometry:

  * PassthroughCamera produces a PORTRAIT frame (a 1280x720 sensor rotated 90 degrees) and the
    analysis bitmap is that frame scaled to TrackingBudget.width() x width*H/W - so the landmarker
    is fed e.g. 640x1138, not a 640x360 landscape. Cost is measured at those exact sizes.
  * MediaPipe's cost is different while searching for a palm and while tracking a hand (the landmark
    and presence models only run after a detection). Both are measured: the app spends most of its
    life in one of them.
  * Recall per analysis width, at several hand sizes: how much detection is traded away if the
    input gets smaller. A rate win that loses the hand is not a win.
  * Contension: the primary inference is timed while YOLO and the rescue landmarker run on their own
    background threads at MIN_PRIORITY, exactly like FusionHands does on a phone. On a 2-core box
    this reproduces the "phone with an app open" case, where a background worker inflates the
    critical path even though it is "off" it.

These are host numbers on the developer machine, NOT phone numbers. They rank options; the device
log (adb logcat -s NextVR-Perf, see tools/perf) is what confirms them.

Usage: pip install mediapipe==0.10.35 ai-edge-litert opencv-python-headless numpy
         python3 tools/bench/hand_input_policy_bench.py [--frames 60] [--out out.json]
         (on a machine without libGL, stub libs are enough: the CPU delegate never calls GL)
"""
import argparse
import glob
import json
import os
import platform
import statistics
import sys
import threading
import time

import cv2
import numpy as np
import mediapipe as mp
from mediapipe.tasks import python as mp_tasks
from mediapipe.tasks.python import vision

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
ASSETS = os.path.join(ROOT, "nextvr-android", "src", "main", "assets")
HAND_MODEL = os.path.join(ASSETS, "hand_landmarker.task")
YOLO_MODEL = os.path.join(ASSETS, "yolo11n-pose.tflite")
# The camera profile PassthroughCamera selects: 1280x720 sensor, upright via a 90-degree turn.
SENSOR_W, SENSOR_H = 1280, 720
UPRIGHT_W, UPRIGHT_H = SENSOR_H, SENSOR_W


def pct(values, p):
    ordered = sorted(values)
    if not ordered:
        return float("nan")
    return ordered[min(len(ordered) - 1, max(0, int(round(p / 100.0 * (len(ordered) - 1)))))]


def stats(times, extra=None):
    out = {"n": len(times), "mean_ms": round(statistics.fmean(times), 2),
           "p50_ms": round(statistics.median(times), 2), "p95_ms": round(pct(times, 95), 2),
           "max_ms": round(max(times), 2)}
    if extra:
        out.update(extra)
    return out


def load_hands(directory):
    """Real hand photos, cropped to content, composited over a mid-grey background."""
    out = []
    for path in sorted(glob.glob(os.path.join(directory, "**", "*.*"), recursive=True)):
        if not path.lower().endswith((".jpg", ".jpeg", ".png")):
            continue
        im = cv2.imread(path, cv2.IMREAD_UNCHANGED)
        if im is None:
            continue
        if im.ndim == 3 and im.shape[2] == 4:
            a = im[:, :, 3:4].astype(np.float32) / 255.0
            im = (im[:, :, :3] * a + np.full(im[:, :, :3].shape, 110, np.float32) * (1 - a)).astype(np.uint8)
        else:
            if im.ndim == 2:
                im = cv2.cvtColor(im, cv2.COLOR_GRAY2BGR)
            # Crop the flat stock background away: the hand should fill the photo, like a close hand.
            gray = cv2.cvtColor(im, cv2.COLOR_BGR2GRAY)
            ys, xs = np.where(gray < 235)
            if len(xs) > 500:
                im = im[ys.min():ys.max() + 1, xs.min():xs.max() + 1]
        im = cv2.cvtColor(im, cv2.COLOR_BGR2RGB)
        if min(im.shape[:2]) < 120:
            continue
        out.append(im)
    if not out:
        raise SystemExit(f"no usable hand photos in {directory}")
    return out


def scene(lands, count, seed, scale_of_height=0.40, analysis_width=None):
    """A 1280x720 sensor frame, rotated upright (720x1280) exactly like the app's `upright` bitmap.

    `scale_of_height` is how tall a hand is relative to the UPRIGHT frame height - the value that
    decides whether the palm detector sees it. Optionally returns the analysis bitmap instead.
    """
    rng = np.random.default_rng(seed)
    frame = (110 + rng.normal(0, 6, (SENSOR_H, SENSOR_W, 3))).clip(0, 255).astype(np.uint8)
    slots = [(0.18, 0.28), (0.58, 0.32)][:max(0, count)]
    for i, (fx, fy) in enumerate(slots):
        hand = lands[i % len(lands)]
        h = int(UPRIGHT_H * scale_of_height)
        w = int(hand.shape[1] * (h / hand.shape[0]))
        resized = cv2.resize(hand, (max(8, w), max(8, h)), interpolation=cv2.INTER_AREA)
        # The upright frame is the sensor rotated 90 degrees clockwise, so a hand that is upright in
        # the UPRIGHT frame is counter-clockwise in the SENSOR frame: paste it rotated the other way.
        rot = cv2.rotate(resized, cv2.ROTATE_90_COUNTERCLOCKWISE)
        rh, rw = rot.shape[:2]
        if rh > SENSOR_H or rw > SENSOR_W:  # too big to fit: rescale and retry
            k = min(SENSOR_H / rh, SENSOR_W / rw)
            rot = cv2.resize(rot, (max(8, int(rw * k)), max(8, int(rh * k))))
            rh, rw = rot.shape[:2]
        x0 = int(max(0, min(fx * SENSOR_W, SENSOR_W - rw)))
        y0 = int(max(0, min(fy * SENSOR_H, SENSOR_H - rh)))
        frame[y0:y0 + rh, x0:x0 + rw] = rot[:rh, :rw]
    upright = cv2.rotate(frame, cv2.ROTATE_90_CLOCKWISE)
    if analysis_width is None or analysis_width == UPRIGHT_W:
        return np.ascontiguousarray(upright)
    h = int(round(analysis_width * upright.shape[0] / upright.shape[1]))
    return np.ascontiguousarray(cv2.resize(upright, (analysis_width, h), interpolation=cv2.INTER_LINEAR))


def landmarker(mode, num_hands=2, conf=0.45):
    return vision.HandLandmarker.create_from_options(vision.HandLandmarkerOptions(
        base_options=mp_tasks.BaseOptions(model_asset_path=HAND_MODEL,
                                          delegate=mp_tasks.BaseOptions.Delegate.CPU),
        running_mode=mode, num_hands=num_hands,
        min_hand_detection_confidence=conf, min_hand_presence_confidence=conf,
        min_tracking_confidence=0.35))


def image(mp_image, lm):
    return lm.detect(mp_image)


def as_mp(frame_rgb):
    return mp.Image(image_format=mp.ImageFormat.SRGB, data=frame_rgb)


def bench_video_by_width(lands, widths, frames, hand_count, scale, tag):
    """Cost of the primary detect_for_video at each analysis width, hands present or not."""
    lm = landmarker(vision.RunningMode.VIDEO)
    out = {}
    ts = 0  # one landmarker instance is reused across widths: its timestamps must keep increasing
    for width in widths:
        frames_w = [scene(lands, hand_count, 1000 + i, scale, width) for i in range(8)]
        times, seen = [], 0
        for i in range(frames):
            image_rgb = frames_w[i % len(frames_w)]
            inp = as_mp(np.ascontiguousarray(image_rgb))
            ts += 33
            t0 = time.perf_counter()
            result = lm.detect_for_video(inp, ts)
            times.append((time.perf_counter() - t0) * 1000.0)
            seen += len(result.hand_landmarks) > 0
        out[str(width)] = stats(times, {"frames_with_a_hand": f"{seen}/{frames}"})
    lm.close()
    return {tag: out}


def bench_recall(lands, widths, scales, per_scale=12):
    """Does a smaller analysis input lose hands? IMAGE mode, jittered placement, per hand size."""
    out = {}
    for scale in scales:
        by_width = {}
        frames = {w: [scene(lands, 1, 4000 + int(scale * 1000) * 37 + i, scale, w)
                      for i in range(per_scale)] for w in widths}
        for width in widths:
            lm = landmarker(vision.RunningMode.IMAGE, conf=0.45)
            found = 0
            gaps = []
            for f in frames[width]:
                r = lm.detect(as_mp(f))
                if r.hand_landmarks:
                    found += 1
                    pts = np.array([[p.x, p.y] for p in r.hand_landmarks[0]])
                    gaps.append(float(np.hypot(*(pts[4] - pts[8]))))
            lm.close()
            by_width[str(width)] = {"recall": round(found / len(frames[width]), 3),
                                    "frames": len(frames[width]),
                                    "thumb_index_gap_norm_mean": round(float(np.mean(gaps)), 4) if gaps else None}
        out[f"hand_h_{int(scale * 100)}pct"] = by_width
    return out


def bench_num_hands(lands, width, frames):
    out = {}
    for n in (1, 2):
        lm = landmarker(vision.RunningMode.VIDEO, num_hands=n)
        times = []
        ts = 0
        for i in range(frames):
            inp = as_mp(scene(lands, 2, 7000 + i, 0.45, width))
            ts += 33
            t0 = time.perf_counter()
            lm.detect_for_video(inp, ts)
            times.append((time.perf_counter() - t0) * 1000.0)
        lm.close()
        out[f"num_hands_{n}"] = stats(times)
    return out


def low_priority():
    """Best effort: put this thread at the bottom, like Thread.MIN_PRIORITY does on Android."""
    try:
        os.setpriority(os.PRIO_PROCESS, threading.get_native_id(), 19)
    except Exception:
        pass


def bench_contention(lands, width, frames, rescue_width=224):
    """Time the primary inference while the recovery workers run concurrently.

    Cases: idle (nothing else running), +YOLO (the wrist finder on 1 thread), +RESCUE (the CPU
    landmarker on the crop), +BOTH. On a 2-core host this is the closest cheap model of a phone
    that is also rasterizing two WebViews.
    """
    from ai_edge_litert.interpreter import Interpreter

    crop = np.ascontiguousarray(cv2.resize(scene(lands, 1, 91, 0.5, None)[40:340, 200:500],
                                           (rescue_width, rescue_width), interpolation=cv2.INTER_AREA))
    yolo_in = np.random.default_rng(5).random((1, 3, 320, 320)).astype(np.float32)
    interp = Interpreter(model_path=YOLO_MODEL, num_threads=1)
    interp.allocate_tensors()
    in_idx = interp.get_input_details()[0]["index"]
    interp.set_tensor(in_idx, yolo_in)

    def run_yolo(stop):
        low_priority()
        while not stop.is_set():
            interp.invoke()

    def run_rescue(stop):
        low_priority()
        lm = landmarker(vision.RunningMode.IMAGE, conf=0.30)
        inp = as_mp(crop)
        while not stop.is_set():
            lm.detect(inp)
        lm.close()

    results = {}
    for label, workers in (("idle", []), ("yolo", [run_yolo]), ("rescue", [run_rescue]),
                          ("yolo+rescue", [run_yolo, run_rescue])):
        stop = threading.Event()
        threads = [threading.Thread(target=w, args=(stop,), daemon=True) for w in workers]
        for th in threads:
            th.start()
        time.sleep(0.4)
        lm = landmarker(vision.RunningMode.VIDEO)
        times, ts = [], 0
        frames_w = [scene(lands, 1, 6000 + i, 0.42, width) for i in range(6)]
        for i in range(frames):
            inp = as_mp(np.ascontiguousarray(frames_w[i % len(frames_w)]))
            ts += 33
            t0 = time.perf_counter()
            lm.detect_for_video(inp, ts)
            times.append((time.perf_counter() - t0) * 1000.0)
        lm.close()
        stop.set()
        for th in threads:
            th.join(timeout=2)
        results[label] = stats(times)
    interp.close()
    return {"primary_width": width, "case": results}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--frames", type=int, default=60)
    ap.add_argument("--hands", default="/tmp/handbench/image-search")
    ap.add_argument("--widths", default="1280,960,768,640,512,448,384,320,256")
    ap.add_argument("--out", default=None)
    args = ap.parse_args()
    widths = [int(w) for w in args.widths.split(",")]
    lands = load_hands(args.hands)
    report = {"host": {"python": sys.version.split()[0], "machine": platform.machine(),
                       "cpus": os.cpu_count(), "mediapipe": mp.__version__},
              "geometry": {"sensor": [SENSOR_W, SENSOR_H], "upright": [UPRIGHT_W, UPRIGHT_H]},
              "hand_photos": len(lands)}
    # sanity: the composite must actually be detected, or every number below is a palm search.
    lm = landmarker(vision.RunningMode.IMAGE, conf=0.45)
    probe = lm.detect(as_mp(scene(lands, 1, 1000, 0.45, 640)))
    lm.close()
    report["probe_hands_detected_at_640"] = len(probe.hand_landmarks)
    print(f"probe: hands detected in the composited frame at 640 px = {len(probe.hand_landmarks)}")
    if not probe.hand_landmarks:
        print("!! the synthetic scene is not detected; cost numbers would be palm-search only")

    for hand_count, scale, tag in ((0, 0.0, "no_hand_palm_search"), (1, 0.45, "one_hand_tracked"),
                                   (2, 0.45, "two_hands_tracked")):
        r = bench_video_by_width(lands, widths, args.frames, hand_count, scale, tag)[tag]
        report.setdefault("video_cost_ms_by_width", {})[tag] = r
        print(f"\n== detect_for_video, {tag} ==")
        for w in widths:
            s = r[str(w)]
            print(f"  {w:5d}px  mean {s['mean_ms']:6.2f}  p95 {s['p95_ms']:6.2f}  max {s['max_ms']:6.2f}"
                  f"  hands {s['frames_with_a_hand']}")

    report["recall_by_width"] = bench_recall(lands, [1280, 640, 512, 448, 384, 320], [0.18, 0.28, 0.45, 0.65])
    print("\n== detection recall vs analysis width (12 frames each) ==")
    for scale, by_w in report["recall_by_width"].items():
        line = "  ".join(f"{w}:{d['recall']:.2f}" for w, d in by_w.items())
        print(f"  {scale:14s} {line}")

    report["num_hands"] = bench_num_hands(lands, 640, args.frames)
    print("\n== num_hands 1 vs 2 at 640 px ==")
    for k, v in report["num_hands"].items():
        print(f"  {k:12s} mean {v['mean_ms']:6.2f} p95 {v['p95_ms']:6.2f}")

    report["contention"] = bench_contention(lands, 640, max(30, args.frames // 2))
    print("\n== primary inference while recovery workers run (640 px, low priority threads) ==")
    base = report["contention"]["case"]["idle"]["mean_ms"]
    for k, v in report["contention"]["case"].items():
        print(f"  {k:12s} mean {v['mean_ms']:6.2f} (+{v['mean_ms'] - base:5.2f})  "
              f"p95 {v['p95_ms']:6.2f}  max {v['max_ms']:6.2f}")

    if args.out:
        with open(args.out, "w") as fh:
            json.dump(report, fh, indent=1)
        print(f"\nwrote {args.out}")
    return report


if __name__ == "__main__":
    main()
