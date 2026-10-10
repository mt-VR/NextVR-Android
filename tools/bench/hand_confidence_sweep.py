#!/usr/bin/env python3
"""Threshold, mode and landmark-noise sweep for the shipped hand_landmarker.task.

Answers the configuration questions that the app's constants encode, with measurements instead of
defaults copied from MediaPipe examples (host CPU delegate, MediaPipe Tasks 0.10.35 - the same
runtime version the Android AAR ships, on the app's own portrait geometry):

  * min_tracking_confidence: how long the ROI-tracking branch survives a DEGRADED hand (motion
    blur - the case that decides whether a moving hand flickers), how many frames the graph keeps
    reporting a hand after it LEFT (ghost tracking: a click source that must not exist), and the
    per-frame cost in each branch (tracking is cheaper than palm search);
  * min_hand_detection_confidence / min_hand_presence_confidence: re-acquisition latency when a
    hand enters, recall of a SMALL hand (12 % of frame height - the distance limit), and false
    positives on empty frames (a phantom hand is a phantom cursor);
  * num_hands 1 vs 2 cost per scenario (the HandSlotPolicy premise), on this runtime;
  * IMAGE vs VIDEO vs LIVE_STREAM cost on the same input: VIDEO is the mode that reuses the
    previous hand region between detections; this measures what the other two would cost;
  * landmark NOISE of the tracking branch, static and slowly moving: the per-frame measurement
    error the temporal filter has to remove. tools/bench/one_euro_sweep.py consumes it.

Behaviour metrics are counted in FRAMES of a 30 fps camera (1 frame ~ 33 ms), because that is how
the failure modes are felt: a ghost hand that lives 4 frames is 133 ms of phantom cursor.

These are host numbers (2-core x86, CPU delegate). They rank configurations; the device log
(adb logcat -s NextVR-Perf, tools/perf/README.md) confirms them on hardware.

Usage: pip install mediapipe==0.10.35 opencv-contrib-python-headless numpy
         python3 tools/bench/hand_confidence_sweep.py [--frames 40] [--out out.json] [--hands DIR]
On a machine without libGL the stub libs are enough (the CPU delegate never calls GL): see the
note in hand_input_policy_bench.py.
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
import numpy as np
import mediapipe as mp
from mediapipe.tasks import python as mp_tasks
from mediapipe.tasks.python import vision

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
ASSETS = os.path.join(ROOT, "nextvr-android", "src", "main", "assets")
HAND_MODEL = os.path.join(ASSETS, "hand_landmarker.task")
SENSOR_W, SENSOR_H = 1280, 720          # the profile PassthroughCamera selects
UPRIGHT_W, UPRIGHT_H = SENSOR_H, SENSOR_W
ANALYSIS_W = 640                       # TrackingBudget's default step
FPS_MS = 33                            # camera period the frame counts are expressed in


def pct(values, p):
    ordered = sorted(values)
    if not ordered:
        return float("nan")
    return ordered[min(len(ordered) - 1, max(0, int(round(p / 100.0 * (len(ordered) - 1)))))]


def stats(times):
    if not times:
        return {"n": 0, "mean_ms": float("nan"), "p95_ms": float("nan")}
    return {"n": len(times), "mean_ms": round(statistics.fmean(times), 2),
            "p95_ms": round(pct(times, 95), 2)}


def load_hands(directory):
    """Hand photos as RGB, oriented fingers-up.

    Two conversions the rest of the script depends on: MediaPipe takes SRGB (cv2 reads BGR, and
    skin fed as BGR is blue skin - the palm detector finds nothing), and scene() pastes the photo
    with the rotation that makes a FINGERS-UP hand upright in the app's portrait frame, so a
    landscape photo (fingers right) is turned a quarter turn here once, not per frame.
    """
    paths = sorted(glob.glob(os.path.join(directory, "**", "*.jpg"), recursive=True))
    hands = []
    for p in paths:
        im = cv2.imread(p)
        if im is None:
            continue
        gray = cv2.cvtColor(im, cv2.COLOR_BGR2GRAY)
        ys, xs = np.where(gray < 235)
        if len(xs) > 500:
            im = im[ys.min():ys.max() + 1, xs.min():xs.max() + 1]
        if im.shape[1] > im.shape[0]:
            im = cv2.rotate(im, cv2.ROTATE_90_COUNTERCLOCKWISE)
        hands.append(cv2.cvtColor(im, cv2.COLOR_BGR2RGB))
    if not hands:
        raise SystemExit(f"no hand images in {directory}")
    return hands


def scene(lands, count, seed, scale_of_height=0.40, blur=0, dx=0, dy=0):
    """Upright 720x1280 analysis frame, exactly like PassthroughCamera's (see that bench's scene)."""
    rng = np.random.default_rng(seed)
    frame = (110 + rng.normal(0, 6, (SENSOR_H, SENSOR_W, 3))).clip(0, 255).astype(np.uint8)
    slots = [(0.18, 0.28), (0.58, 0.32)][:max(0, count)]
    for i, (fx, fy) in enumerate(slots):
        hand = lands[i % len(lands)]
        h = int(UPRIGHT_H * scale_of_height)
        w = int(hand.shape[1] * (h / hand.shape[0]))
        resized = cv2.resize(hand, (max(8, w), max(8, h)), interpolation=cv2.INTER_AREA)
        if blur:
            k = blur | 1
            resized = cv2.GaussianBlur(resized, (k, k), 0)
        rot = cv2.rotate(resized, cv2.ROTATE_90_COUNTERCLOCKWISE)
        rh, rw = rot.shape[:2]
        if rh > SENSOR_H or rw > SENSOR_W:
            k = min(SENSOR_H / rh, SENSOR_W / rw)
            rot = cv2.resize(rot, (max(8, int(rw * k)), max(8, int(rh * k))))
            rh, rw = rot.shape[:2]
        x0 = int(max(0, min(fx * SENSOR_W, SENSOR_W - rw))) + dx
        y0 = int(max(0, min(fy * SENSOR_H, SENSOR_H - rh))) + dy
        x0, y0 = max(0, min(x0, SENSOR_W - rw)), max(0, min(y0, SENSOR_H - rh))
        frame[y0:y0 + rh, x0:x0 + rw] = rot[:rh, :rw]
    upright = cv2.rotate(frame, cv2.ROTATE_90_CLOCKWISE)
    h = int(round(ANALYSIS_W * upright.shape[0] / upright.shape[1]))
    return np.ascontiguousarray(cv2.resize(upright, (ANALYSIS_W, h), interpolation=cv2.INTER_LINEAR))


def as_mp(frame_rgb):
    return mp.Image(image_format=mp.ImageFormat.SRGB, data=frame_rgb)


def landmarker(mode, num_hands, det, pres, track):
    return vision.HandLandmarker.create_from_options(vision.HandLandmarkerOptions(
        base_options=mp_tasks.BaseOptions(model_asset_path=HAND_MODEL,
                                          delegate=mp_tasks.BaseOptions.Delegate.CPU),
        running_mode=mode, num_hands=num_hands,
        min_hand_detection_confidence=det, min_hand_presence_confidence=pres,
        min_tracking_confidence=track))


def run_sequence(lm, frames, mode, ts0=0, warmup=0):
    """Feed `frames` in order; returns (hands_per_frame, timed_ms after warmup, first_seen)."""
    seen, times, first = [], [], -1
    ts = ts0
    for i, f in enumerate(frames):
        ts += FPS_MS
        t0 = time.perf_counter()
        if mode == vision.RunningMode.VIDEO:
            r = lm.detect_for_video(as_mp(f), ts)
        elif mode == vision.RunningMode.IMAGE:
            r = lm.detect(as_mp(f))
        else:
            raise ValueError("live stream is timed separately")
        dt = (time.perf_counter() - t0) * 1000.0
        n = len(r.hand_landmarks)
        seen.append(n)
        if n and first < 0:
            first = i
        if i >= warmup:
            times.append(dt)
    return seen, times, first


def bench_config(lands, cfg, frames):
    """One configuration across the scenarios that decide its constants."""
    out = {}
    clean = [scene(lands, 1, s) for s in range(3)]
    blurred = [scene(lands, 1, s, blur=15) for s in range(3)]
    empty = [scene(lands, 0, 100 + s) for s in range(3)]
    small = [scene(lands, 1, s, scale_of_height=0.12) for s in range(3)]

    # 1. steady cost while tracking one hand (the app's dominant state), and the slot question.
    lm = landmarker(vision.RunningMode.VIDEO, cfg["num_hands"], cfg["det"], cfg["pres"], cfg["track"])
    seq = [clean[i % 3] for i in range(frames)]
    seen, times, _ = run_sequence(lm, seq, vision.RunningMode.VIDEO, warmup=8)
    out["tracked_one_hand"] = {"hands_last": seen[-1], **stats(times)}

    # 2. degraded hand: how many of the blurred frames keep tracking (flicker source).
    seq = [clean[0]] * 8 + [blurred[i % 3] for i in range(20)]
    seen, times, _ = run_sequence(lm, seq, vision.RunningMode.VIDEO, ts0=10_000, warmup=8)
    tail = seen[8:]
    out["blurred_retention"] = {"tracked_frames": sum(1 for n in tail if n), "of": len(tail),
                                **stats(times)}

    # 3. hand LEAVES: frames that still report a hand afterwards are a phantom cursor.
    seq = [clean[0]] * 10 + [empty[i % 3] for i in range(20)]
    seen, _, _ = run_sequence(lm, seq, vision.RunningMode.VIDEO, ts0=20_000)
    tail = seen[10:]
    ghost = 0
    for n in tail:
        if n:
            ghost += 1
        elif ghost:
            break
    out["ghost_frames_after_hand_left"] = ghost

    # 4. hand ENTERS: frames until the first detection (re-acquisition latency).
    seq = [empty[0]] * 5 + [clean[i % 3] for i in range(20)]
    seen, _, first = run_sequence(lm, seq, vision.RunningMode.VIDEO, ts0=30_000)
    out["frames_to_acquire"] = (first - 4) if first >= 0 else -1

    # 5. small hand recall (distance limit of the whole interaction).
    seq = [small[i % 3] for i in range(12)]
    seen, _, first = run_sequence(lm, seq, vision.RunningMode.VIDEO, ts0=40_000)
    out["small_hand"] = {"detected_frames": sum(1 for n in seen if n), "of": len(seen)}

    # 6. false positives on empty frames.
    seq = [empty[i % 3] for i in range(12)]
    seen, times, _ = run_sequence(lm, seq, vision.RunningMode.VIDEO, ts0=50_000, warmup=4)
    out["empty_false_positives"] = sum(1 for n in seen if n)
    out["palm_search"] = stats(times)
    lm.close()
    return out


def bench_modes(lands, frames):
    """Cost of the three running modes on identical tracked input."""
    seq = [scene(lands, 1, s) for s in range(3)] * (frames // 3 + 1)
    seq = seq[:frames]
    out = {}
    for mode, name in ((vision.RunningMode.VIDEO, "video"), (vision.RunningMode.IMAGE, "image")):
        lm = landmarker(mode, 2, .45, .45, .35)
        _, times, _ = run_sequence(lm, seq, mode, warmup=8)
        out[name] = stats(times)
        lm.close()
    # LIVE_STREAM: results arrive on a listener thread; time submit cost and submit-to-result
    # latency for the same frames. The graph may drop inputs it cannot keep up with ("it's not
    # guaranteed to have output per input image"): a frame whose result never arrives is counted.
    import threading
    done = threading.Event()
    gaps, shed = [], [0]
    state = {"submitted": 0.0}

    def on_result(result, image, ts_ms):
        gaps.append((time.perf_counter() - state["submitted"]) * 1000.0)
        done.set()

    lm = vision.HandLandmarker.create_from_options(vision.HandLandmarkerOptions(
        base_options=mp_tasks.BaseOptions(model_asset_path=HAND_MODEL,
                                          delegate=mp_tasks.BaseOptions.Delegate.CPU),
        running_mode=vision.RunningMode.LIVE_STREAM, num_hands=2,
        min_hand_detection_confidence=.45, min_hand_presence_confidence=.45,
        min_tracking_confidence=.35, result_callback=on_result))
    ts = 0
    times = []
    for i, f in enumerate(seq):
        ts += FPS_MS
        done.clear()
        state["submitted"] = time.perf_counter()
        t0 = time.perf_counter()
        lm.detect_async(as_mp(f), ts)   # returns None; dropping shows up as missing callbacks
        submit = (time.perf_counter() - t0) * 1000.0
        got = done.wait(2.0)
        if not got:
            shed[0] += 1
        if i >= 8:
            times.append(submit)
    out["live_stream_submit"] = stats(times)
    out["live_stream_end_to_end"] = stats(gaps[8:]) if len(gaps) > 8 else stats(gaps)
    out["live_stream_shed_frames"] = shed[0]
    lm.close()
    return out


def bench_noise(lands, frames=90):
    """Landmark measurement noise of the tracking branch: static hand, then a slow constant drift.

    The static case is pure sensor/model noise (the hand does not move, so every output delta is
    error). The drifting case adds a known 1.5 px/frame translation: the residual around that
    known motion is the noise a filter sees while the hand moves slowly.
    """
    static = scene(lands, 1, 0)
    lm = landmarker(vision.RunningMode.VIDEO, 2, .45, .45, .35)
    pts = []
    ts = 0
    for i in range(frames):
        ts += FPS_MS
        r = lm.detect_for_video(as_mp(static), ts)
        if r.hand_landmarks:
            pts.append([[p.x, p.y] for p in r.hand_landmarks[0]])
    lm.close()
    if len(pts) < 20:
        return None
    a = np.array(pts) * ANALYSIS_W                      # px on the analysis grid
    d = np.diff(a, axis=0)
    static_noise = {"mean_step_px": round(float(np.abs(d).mean()), 3),
                    "rms_step_px": round(float(np.sqrt((d ** 2).sum(-1).mean())), 3),
                    "per_landmark_std_px": round(float(a.std(axis=0).mean()), 3)}

    lm = landmarker(vision.RunningMode.VIDEO, 2, .45, .45, .35)
    pts = []
    ts = 0
    for i in range(frames):
        ts += FPS_MS
        frame = scene(lands, 1, 0, dx=int(i * 1.1), dy=int(i * 0.7))
        r = lm.detect_for_video(as_mp(frame), ts)
        if r.hand_landmarks:
            # remove the known translation so what remains is measurement noise, not motion
            pts.append([[p.x * ANALYSIS_W - i * 1.1, p.y * ANALYSIS_W - i * 0.7]
                        for p in r.hand_landmarks[0]])
    lm.close()
    moving = None
    if len(pts) > 20:
        a = np.array(pts)
        d = np.diff(a, axis=0)
        moving = {"mean_step_px": round(float(np.abs(d).mean()), 3),
                  "rms_step_px": round(float(np.sqrt((d ** 2).sum(-1).mean())), 3)}
    return {"analysis_width": ANALYSIS_W, "frames": frames, "static": static_noise,
            "moving_residual": moving}


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--frames", type=int, default=40)
    parser.add_argument("--hands", default="/tmp/handbench/image-search")
    parser.add_argument("--out", default=None)
    args = parser.parse_args()
    lands = load_hands(args.hands)

    configs = [
        {"tag": "current (det/pres .45, track .35, hands 2)", "num_hands": 2, "det": .45, "pres": .45, "track": .35},
        {"tag": "track .20", "num_hands": 2, "det": .45, "pres": .45, "track": .20},
        {"tag": "track .50 (MediaPipe default)", "num_hands": 2, "det": .45, "pres": .45, "track": .50},
        {"tag": "track .65", "num_hands": 2, "det": .45, "pres": .45, "track": .65},
        {"tag": "det/pres .30", "num_hands": 2, "det": .30, "pres": .30, "track": .35},
        {"tag": "det/pres .60", "num_hands": 2, "det": .60, "pres": .60, "track": .35},
        {"tag": "num_hands 1 (narrow)", "num_hands": 1, "det": .45, "pres": .45, "track": .35},
    ]
    report = {"host": {"python": sys.version.split()[0], "machine": platform.machine(),
                       "cpus": os.cpu_count(), "mediapipe": mp.__version__},
              "fps_ms_per_frame": FPS_MS, "configs": [], "modes": None, "noise": None}
    for cfg in configs:
        print(f"[sweep] {cfg['tag']}", file=sys.stderr)
        report["configs"].append({"tag": cfg["tag"], **bench_config(lands, cfg, args.frames)})
    print("[sweep] running modes", file=sys.stderr)
    report["modes"] = bench_modes(lands, args.frames)
    print("[sweep] landmark noise", file=sys.stderr)
    report["noise"] = bench_noise(lands)

    text = json.dumps(report, indent=2)
    print(text)
    if args.out:
        with open(args.out, "w", encoding="utf-8") as fh:
            fh.write(text + "\n")


if __name__ == "__main__":
    main()
