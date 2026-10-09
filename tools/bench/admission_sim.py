#!/usr/bin/env python3
"""Deterministic model of the camera -> hand-tracking hand-off, before and after the fix.

Why it exists: the effective landmark rate is set by HOW a finished inference is followed by the
next admitted frame, not by the camera rate alone. This script replays the exact scheduling rules
of the two implementations on a fixed 30 fps camera and reports the effective tracking rate,
capture-to-landmark latency and dropped frames, for a range of inference times.

Policies
  current  (main, PassthroughCamera.onFrame): the frame is admitted ONLY inside a Camera2
           ImageReader callback, and only if the single-flight flag is free at the moment that
           callback finishes its YUV/rotation work. A finished inference therefore waits for the
           NEXT camera callback before it can start another one.
  latest   (this change, LatestFrameSlot): every callback publishes its frame into a one-slot
           mailbox (replacing an older unconsumed frame). The tracking thread starts the next
           inference the instant it finishes, using the newest frame available.

The costs of the camera callback (YUV->ARGB + rotation, scaling) are parameters. Host-measured
inference times come from tools/bench/hand_host_bench.py. Phone costs are NOT known here: the
on-device PerfLog (tools/perf) must be used to replace the defaults.

Usage: python3 tools/bench/admission_sim.py [--seconds 60] [--camera-fps 30] [--pre-ms 6] [--scale-ms 2]
"""
import argparse
import heapq
import statistics


def simulate(policy, inference_ms, camera_fps, pre_ms, scale_ms, seconds, gl_ms=1.0):
    period = 1000.0 / camera_fps
    horizon = seconds * 1000.0
    results = []          # (capture_ms, completion_ms)
    dropped = 0
    cam_free = 0.0        # the camera handler thread is single threaded
    tracker_free = 0.0    # tracking thread: busy until this time
    pending = None        # latest-slot content: capture time of the newest unconsumed frame
    k = 0
    events = []           # (time, kind, payload); kind 0 = camera callback, 1 = tracker finished

    def start_tracker(now, capture):
        nonlocal tracker_free
        done = now + inference_ms
        tracker_free = done
        heapq.heappush(events, (done, 1, capture))

    heapq.heappush(events, (0.0, 0, 0))
    while events:
        now, kind, payload = heapq.heappop(events)
        if now > horizon:
            break
        if kind == 0:
            k = payload
            capture = k * period                       # frame k was exposed at k * period
            start = max(now, cam_free)                 # callback waits if the thread is busy
            if policy == "current":
                admitted_at = start + pre_ms           # admission after YUV/rotation
                if tracker_free <= admitted_at:
                    begin = admitted_at + scale_ms
                    cam_free = begin + gl_ms
                    start_tracker(begin, capture)
                else:
                    cam_free = admitted_at + gl_ms
                    dropped += 1
            else:
                offered_at = start + pre_ms + scale_ms  # always produce the tracking input
                cam_free = offered_at + gl_ms
                if tracker_free <= offered_at and pending is None:
                    start_tracker(offered_at, capture)
                else:
                    if pending is not None:
                        dropped += 1                   # an unconsumed older frame is replaced
                    pending = capture
            heapq.heappush(events, ((k + 1) * period, 0, k + 1))
        else:
            results.append((payload, now))
            if policy == "latest" and pending is not None:
                capture = pending
                pending = None
                start_tracker(now, capture)
    latencies = [done - cap for cap, done in results]
    completed = sorted((r for r in results if r[1] <= horizon), key=lambda r: r[1])
    # What the renderer shows at a random display instant: the newest COMPLETED landmark result.
    # Its age is (display time - capture time of that frame), averaged after a 2 s warm-up.
    ages, j, latest_capture = [], 0, None
    t = 2000.0
    while t <= horizon:
        while j < len(completed) and completed[j][1] <= t:
            latest_capture = completed[j][0]
            j += 1
        if latest_capture is not None:
            ages.append(t - latest_capture)
        t += 1.0
    frames = int(seconds * camera_fps)
    return {
        "policy": policy,
        "effective_hz": round(len(completed) / seconds, 2),
        "latency_median_ms": round(statistics.median(latencies), 1) if latencies else None,
        "latency_p95_ms": round(sorted(latencies)[int(0.95 * (len(latencies) - 1))], 1) if latencies else None,
        "display_age_mean_ms": round(statistics.fmean(ages), 1) if ages else None,
        "camera_frames": frames,
        "frames_not_tracked_pct": round(100.0 * (1 - len(completed) / max(1, frames)), 1),
    }


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--seconds", type=int, default=60)
    parser.add_argument("--camera-fps", type=float, default=30.0)
    parser.add_argument("--pre-ms", type=float, default=6.0, help="YUV->ARGB + rotation per frame")
    parser.add_argument("--scale-ms", type=float, default=2.0, help="tracking-input scaling")
    parser.add_argument("--inference-ms", type=float, nargs="+",
                        default=[15, 20, 25, 30, 34, 40, 50, 60, 80])
    args = parser.parse_args()
    print(f"camera {args.camera_fps:.0f} fps | callback pre={args.pre_ms} ms scale={args.scale_ms} ms "
          f"| {args.seconds}s simulated | 'shown age' = mean age of the newest landmark result "
          f"at a random display instant")
    print(f"{'inference':>10} | {'current Hz':>10} {'lat med':>8} {'lat p95':>8} {'shown age':>9} | "
          f"{'latest Hz':>9} {'lat med':>8} {'lat p95':>8} {'shown age':>9}")
    for inf in args.inference_ms:
        cur = simulate("current", inf, args.camera_fps, args.pre_ms, args.scale_ms, args.seconds)
        new = simulate("latest", inf, args.camera_fps, args.pre_ms, args.scale_ms, args.seconds)
        print(f"{inf:>8.0f}ms | {cur['effective_hz']:>10.2f} {cur['latency_median_ms']:>7.1f}ms "
              f"{cur['latency_p95_ms']:>7.1f}ms {cur['display_age_mean_ms']:>8.1f}ms | "
              f"{new['effective_hz']:>9.2f} {new['latency_median_ms']:>7.1f}ms "
              f"{new['latency_p95_ms']:>7.1f}ms {new['display_age_mean_ms']:>8.1f}ms")


if __name__ == "__main__":
    main()
