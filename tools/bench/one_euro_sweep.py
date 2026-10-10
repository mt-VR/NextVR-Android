#!/usr/bin/env python3
"""Temporal-filter sweep: does the app's One Euro configuration earn its constants?

Ports `HandGestures.OneEuro` (including the dead-zone hysteresis) and the exact filter chain of
`PhoneXrHands.State` line by line, feeds it synthetic landmark trajectories whose noise is the
noise MEASURED on this model by tools/bench/hand_confidence_sweep.py (`noise` section: static
rms step and moving residual at the 640 px analysis width), and scores candidates on the two
things the filter exists to separate:

  * jitter while the hand rests  - rms output step, in analysis pixels; the cursor must not tremble;
  * lag while the hand moves     - mean |output - truth| during and just after a fast displacement
                                   (a swipe, a pinch approach); a filter that calms the cursor must
                                   not drag it;
  * rate independence            - the same trajectory sampled at 15, 30 and 60 Hz must give the
                                   same behaviour, because the filter is stamped with the camera
                                   capture time and the inference rate varies with device load.

No sliding-window averaging is considered: it adds latency proportional to the window and is
exactly what the One Euro filter replaces.

Usage: python3 tools/bench/one_euro_sweep.py [--noise sweep.json]
Pure python+math; no mediapipe needed.
"""
import argparse
import json
import math
import os

# Defaults: what tools/bench/hand_confidence_sweep.py measured on the shipped model at 640 px,
# converted to normalized landmark units (the unit PhoneXrHands filters in).
DEFAULT_STATIC_STEP_PX = 0.277
DEFAULT_MOVING_STEP_PX = 1.828
ANALYSIS_W = 640.0


class OneEuro:
    """Line-by-line port of HandGestures.OneEuro (Kotlin), dead zone included."""

    def __init__(self, min_cutoff=1.2, beta=.6, derivative_cutoff=1.0, dead_zone=0.0):
        self.min_cutoff = min_cutoff
        self.beta = beta
        self.derivative_cutoff = derivative_cutoff
        self.dead_zone = dead_zone
        self.value = float("nan")
        self.shown = float("nan")
        self.derivative = 0.0
        self.last_ns = 0

    def filter(self, raw, time_ns):
        if math.isnan(self.value) or self.last_ns == 0:
            self.value = raw
            self.shown = raw
            self.last_ns = time_ns
            return raw
        dt = min(max((time_ns - self.last_ns) / 1e9, 1e-3), .2)
        self.last_ns = time_ns
        raw_derivative = (raw - self.value) / dt
        self.derivative += self._alpha(self.derivative_cutoff, dt) * (raw_derivative - self.derivative)
        cutoff = self.min_cutoff + self.beta * abs(self.derivative)
        self.value += self._alpha(cutoff, dt) * (raw - self.value)
        gap = self.value - self.shown
        if abs(gap) > self.dead_zone:
            self.shown = self.value - self.dead_zone * (1.0 if gap > 0 else -1.0)
        return self.shown

    def reset(self):
        self.value = float("nan")
        self.shown = float("nan")
        self.derivative = 0.0
        self.last_ns = 0

    @staticmethod
    def _alpha(cutoff, dt):
        tau = 1.0 / (2.0 * math.pi * cutoff)
        return 1.0 / (1.0 + tau / dt)


def trajectory(kind, hz, seconds, noise_px, seed=7):
    """(time_ns, truth, noisy_sample) triples of a normalized-x trajectory.

    noise_px is a per-frame step noise in analysis pixels; as position noise its std is
    noise_px / sqrt(2) (a step is the difference of two independent positions). The clean truth is
    kept alongside so metrics are measured against what the hand ACTUALLY did, not against the
    noisy observation.
    """
    import random
    rng = random.Random(seed)
    std = (noise_px / math.sqrt(2.0)) / ANALYSIS_W
    out = []
    for i in range(int(seconds * hz)):
        t = i / hz
        if kind == "static":
            truth = 0.5
        elif kind == "drift":
            truth = 0.5 + 0.05 * t                      # slow reach, 5 % of frame per second
        elif kind == "rest_move_rest":
            if t < 0.6:
                truth = 0.5
            elif t < 0.9:
                truth = 0.5 + 0.3 * (t - 0.6) / 0.3
            else:
                truth = 0.8
        else:
            raise ValueError(kind)
        out.append((int(t * 1e9), truth, truth + rng.gauss(0.0, std)))
    return out


def score(params, traj, hz):
    """Returns (jitter_px_while_still, lag_px_while_moving, lag_px_settling, rise_frames)."""
    f = OneEuro(*params)
    shown = [f.filter(noisy, t) for t, _, noisy in traj]
    truth = [tr for _, tr, _ in traj]
    still = [i for i in range(1, len(truth)) if truth[i] == truth[i - 1]]
    moving = [i for i in range(1, len(truth)) if truth[i] != truth[i - 1]]
    jit = (math.sqrt(sum((shown[i] - shown[i - 1]) ** 2 for i in still) / max(1, len(still)))
           * ANALYSIS_W) if still else 0.0
    lag_move = (sum(abs(shown[i] - truth[i]) for i in moving) / max(1, len(moving))
                * ANALYSIS_W) if moving else 0.0
    lag_settle = 0.0
    if moving:
        s = moving[-1] + 1
        win = list(range(s, min(len(truth), s + int(0.15 * hz))))
        if win:
            lag_settle = sum(abs(shown[i] - truth[i]) for i in win) / len(win) * ANALYSIS_W
    # rise: frames from motion start until the output first reaches 90 % of the displacement
    rise = -1
    if moving:
        start = moving[0]
        base, target = truth[start - 1], truth[-1]
        for i in range(start, len(truth)):
            if abs(shown[i] - base) >= 0.9 * abs(target - base):
                rise = i - start + 1
                break
    return jit, lag_move, lag_settle, rise


def static_jitter(params, hz, noise_px, seed=11):
    traj = trajectory("static", hz, 2.0, noise_px, seed=seed)
    f = OneEuro(*params)
    shown = [f.filter(noisy, t) for t, _, noisy in traj]
    return math.sqrt(sum((shown[i] - shown[i - 1]) ** 2
                         for i in range(1, len(shown))) / (len(shown) - 1)) * ANALYSIS_W


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--noise", default=None, help="sweep.json from hand_confidence_sweep.py")
    args = parser.parse_args()
    static_px, moving_px = DEFAULT_STATIC_STEP_PX, DEFAULT_MOVING_STEP_PX
    if args.noise and os.path.exists(args.noise):
        with open(args.noise, encoding="utf-8") as fh:
            n = json.load(fh).get("noise") or {}
        if n.get("static"):
            static_px = n["static"]["rms_step_px"]
        if n.get("moving_residual"):
            moving_px = n["moving_residual"]["rms_step_px"]
    print(f"measured noise: static rms step {static_px} px, moving residual {moving_px} px "
          f"(analysis width {ANALYSIS_W:.0f})")

    current = (1.4, 12.0, 1.0, 0.0008)     # PhoneXrHands.State landmark x/y
    candidates = [
        ("current  minCutoff 1.4 beta 12 dz .0008", current),
        ("no dead zone", (1.4, 12.0, 1.0, 0.0)),
        ("calmer   minCutoff 1.0 beta 12 dz .0008", (1.0, 12.0, 1.0, 0.0008)),
        ("calmer+  minCutoff 0.8 beta 10 dz .0008", (0.8, 10.0, 1.0, 0.0008)),
        ("faster   minCutoff 2.0 beta 14 dz .0008", (2.0, 14.0, 1.0, 0.0008)),
        ("beta 6   (slower adaptation)", (1.4, 6.0, 1.0, 0.0008)),
        ("beta 20  (faster adaptation)", (1.4, 20.0, 1.0, 0.0008)),
        ("dz .0015 (wider tremor gate)", (1.4, 12.0, 1.0, 0.0015)),
        ("dz .0004 (narrower gate)", (1.4, 12.0, 1.0, 0.0004)),
    ]
    hdr = (f"{'candidate':38s} | {'rest jit px':>11s} | {'drift jit px':>12s} | "
           f"{'move lag px':>11s} | {'settle px':>9s} | {'rise frames':>11s}")
    print()
    print(hdr)
    hz = 30
    for name, params in candidates:
        rest = trajectory("rest_move_rest", hz, 2.0, moving_px)
        jit, lag_move, lag_settle, rise = score(params, rest, hz)
        # tremor while the hand moves SLOWLY: output step rms on a drifting hand with moving noise
        drift = trajectory("drift", hz, 2.0, moving_px, seed=21)
        f = OneEuro(*params)
        shown = [f.filter(noisy, t) for t, _, noisy in drift]
        drift_jit = math.sqrt(sum((shown[i] - shown[i - 1]) ** 2
                                  for i in range(1, len(shown))) / (len(shown) - 1)) * ANALYSIS_W
        # rest jitter is scored on a purely static run at the STATIC noise level
        print(f"{name:38s} | {static_jitter(params, hz, static_px):11.3f} | {drift_jit:12.3f} | "
              f"{lag_move:11.2f} | {lag_settle:9.2f} | {rise:11d}")

    print(f"\nrate independence of the current configuration (same trajectory, three rates):")
    print(f"{'hz':>4s} | {'rest jitter px':>14s} | {'move lag px':>11s} | {'settle lag px':>13s} | {'rise ms':>8s}")
    for hz in (15, 30, 60):
        rest = trajectory("rest_move_rest", hz, 2.0, moving_px)
        jit, lag_move, lag_settle, rise = score(current, rest, hz)
        print(f"{hz:4d} | {static_jitter(current, hz, static_px):14.3f} | {lag_move:11.2f} | "
              f"{lag_settle:13.2f} | {rise * 1000 // hz:8d}")


if __name__ == "__main__":
    main()
