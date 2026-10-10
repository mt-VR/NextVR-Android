#!/usr/bin/env python3
"""Discrete-event model of camera -> tracking -> WebView, to attribute the hand-tracking rate.

admission_sim.py (in this directory) settled one question: admitting the tracker *inside* the Camera2
callback quantises the landmark rate to 30/15/10 Hz. That was fixed by LatestFrameSlot. This model
covers the rest of the chain, because "the feed and the dock are instant but the hands are slow" is a
statement about the whole chain, not about the model alone.

Threads and bounds it represents, one for one, from the code:

  camera thread  ImageReader(maxImages=2) -> YUV conversion (conv) -> analysis resample (scale)
                 -> LatestFrameSlot.offer -> hand-off to the renderer (handoff)
  tracking thread one inference in flight; per result: inference (slot policy) + the non-inference
                 work that runs between two inferences (json), and the recovery workers that run on
                 OTHER threads but still steal cycles (contention inflates the next inference)
  main thread     one drain per scheduled pass, replaying every queued hand frame at `webview` ms
                 each; a queued frame that ages past native validity becomes a stale cancel

Component costs come from tools/bench/hand_input_policy_bench.py and the camera-pixels benchmark in
tests/camera-pixels.test.mjs - host measurements, recorded in docs/hand-tracking-investigation.md.
They are NOT phone numbers: what the model shows is the *shape* of the result and which lever moves
it. Replace them with a device run: `adb logcat -s NextVR-Perf` prints track=, infer_mean=, cam_work=
and stale= directly.

Usage:
    python3 tools/bench/pipeline_sim.py
    python3 tools/bench/pipeline_sim.py --hands 2 --gpu 2 --hiccup-ms 150
"""
import argparse
import heapq
import statistics


class SlotPolicy:
    """Mirror of HandSlotPolicy.kt - same state machine, so the model cannot drift from the runtime."""

    def __init__(self, probe_ms):
        self.probe = probe_ms
        self.wide_last = True
        self.narrow = False
        self.next_probe = float("-inf")
        self.narrow_frames = 0
        self.wide_frames = 0
        self.probes = 0

    def slots_for(self, now_ms, hands_in_last_result):
        if hands_in_last_result == 0:
            self.narrow = False
        elif hands_in_last_result >= 2:
            self.narrow = False
        elif self.wide_last and not self.narrow:
            self.narrow = True
            self.next_probe = now_ms + self.probe
        if not self.narrow:
            slots = 2
        elif now_ms >= self.next_probe:
            self.next_probe = now_ms + self.probe
            self.probes += 1
            slots = 2
        else:
            self.narrow_frames += 1
            slots = 1
        if slots == 2:
            self.wide_frames += 1
        self.wide_last = slots == 2
        return slots


class Sim:
    def __init__(self, args, **over):
        for k, v in vars(args).items():
            setattr(self, k, v)
        for k, v in over.items():
            setattr(self, k, v)
        self.skip_scale_gate_ms = getattr(self, "skip_scale_gate", args.skip_scale_gate_ms)
        self.period = 1000.0 / self.camera_fps
        self.wide_cost = self.inference_wide * self.gpu
        self.narrow_cost = self.inference_narrow * self.gpu
        self.rescue_cost = self.rescue_ms * self.gpu
        self.policy = SlotPolicy(self.probe_ms)
        self.camera_free = self.tracker_free = self.main_free = 0.0
        self.pending = None
        self.tracking = False
        self.queue = []
        self.main_scheduled = False
        self.results = []
        self.dropped = self.stale = self.replayed = self.batches = 0
        self.skips = 0
        self.rescue_busy_until = -1.0
        self.next_rescue = 0.0
        self.next_hiccup = self.hiccup_every_ms
        self.costs = []
        self.horizon = self.seconds * 1000.0

    # --- camera thread ---------------------------------------------------------------
    def camera_callback(self, now, k):
        # Arrival is when the callback actually runs: this thread's own pixel work delays it, and
        # pretending otherwise would hide exactly the coupling being measured here.
        start = max(now, self.camera_free)
        scale = self.scale_ms
        if (self.pending is not None and self.skip_scale_gate_ms > 0
                and start - self.pending[1] <= self.skip_scale_gate_ms):
            # The slot still holds a frame the tracker has not taken, younger than the gate: this
            # camera frame's analysis copy would be superseded unread, so it is not produced at
            # all (AnalysisGate in the app). The camera thread only pays conversion + hand-off.
            scale = 0.0
            self.skips += 1
            work = start + self.conv_ms
            self.camera_free = work + self.handoff_ms + (self.conv_ms if self.blocking_handoff else 0)
            return (work + self.period, 0, k + 1, None)
        work = start + self.conv_ms + scale
        if self.pending is not None:
            self.dropped += 1  # the slot overwrites a frame the tracker has not taken yet
        self.pending = (start, work)
        # `blocking_handoff` = today's code: the display bitmap is created and handed to the renderer
        # before close()/requestNextBuffer, so the next capture waits behind it (and behind the GL
        # upload, when the renderer's lock is held across texSubImage2D).
        self.camera_free = work + self.handoff_ms + (self.conv_ms if self.blocking_handoff else 0)
        self.start_tracker_if_idle()
        return (work + self.period, 0, k + 1, None)

    def start_tracker_if_idle(self):
        if self.tracking or self.pending is None:
            return
        self.tracking = True
        capture, offered = self.pending
        self.pending = None
        begin = max(offered, self.tracker_free)
        cost, narrow = self.inference(begin)
        self.costs.append(cost)
        done = begin + cost + self.json_ms
        self.tracker_free = done
        heapq.heappush(self.events, (done, 1, capture, narrow))

    def inference(self, now):
        base, narrow = self.wide_cost, False
        if self.narrow_enabled and self.policy.slots_for(now, self.hands) == 1:
            base, narrow = self.narrow_cost, True
        if now < self.rescue_busy_until:
            base *= 1.18  # measured: YOLO + rescue inflate the primary from p95 36 to 46 ms
        return base, narrow

    # --- tracking thread -------------------------------------------------------------
    def tracker_done(self, now, capture, narrow):
        self.tracking = False
        self.results.append((capture, now))
        self.queue.append((capture, now))
        self.schedule_main()
        self.start_tracker_if_idle()
        # Recovery exists to re-acquire a lost hand, so it is only useful while nothing is tracked.
        if (not self.rescue_gated or self.hands == 0) and now >= self.next_rescue:
            self.next_rescue = now + self.rescue_every_ms
            self.rescue_busy_until = now + self.rescue_cost
            self.rescues = getattr(self, "rescues", 0) + 1

    # --- main thread -----------------------------------------------------------------
    def schedule_main(self):
        if self.main_scheduled:
            return
        self.main_scheduled = True
        heapq.heappush(self.events, (max(self.main_free, self.results[-1][1]), 2, None, None))

    def main_drain(self, now):
        self.main_scheduled = False
        if self.hiccup_ms and now >= self.next_hiccup:
            self.next_hiccup = now + self.hiccup_every_ms
            self.main_free = now + self.hiccup_ms
            heapq.heappush(self.events, (self.main_free, 2, None, None))
            self.main_scheduled = True
            return
        frames = self.queue
        self.queue = []
        coalesced = 0
        if self.bound_drain and len(frames) > self.drain_bound:
            # HandFrameMailbox.collapseToDrainBudget, and every queued frame here is a pose-only
            # sample of one unchanged gesture state, so the whole drain is one run: the last two
            # samples survive and the rest are superseded. An edge would never be dropped.
            kept = frames[-2:]
            coalesced = len(frames) - len(kept)
            frames = kept
        self.batches += 1
        self.replayed += len(frames)
        self.coalesced = getattr(self, "coalesced", 0) + coalesced
        for capture, completed in frames:
            if now - completed > self.valid_ms:
                self.stale += 1
        self.main_free = now + self.webview_ms * max(1, len(frames))

    def run(self):
        self.events = [(0.0, 0, 0, None)]
        heapq.heapify(self.events)
        while self.events:
            now, kind, a, b = heapq.heappop(self.events)
            if now > self.horizon:
                break
            if kind == 0:
                heapq.heappush(self.events, self.camera_callback(now, a))
            elif kind == 1:
                self.tracker_done(now, a, b)
            else:
                self.main_drain(now)
        return self.report()

    def report(self):
        secs = self.horizon / 1000.0
        done = self.results
        lat = [d - c for c, d in done]
        ages, j, latest = [], 0, None
        ordered = sorted(done, key=lambda r: r[1])
        t = self.horizon / 2  # measure the settled middle, not the warm-up
        while t <= self.horizon:
            while j < len(ordered) and ordered[j][1] <= t:
                latest = ordered[j][0]
                j += 1
            if latest is not None:
                ages.append(t - latest)
            t += 1.0
        return {
            "track_hz": round(len(done) / secs, 1),
            "camera_hz": round(len(done) / secs, 1),
            "infer_mean": round(statistics.fmean(self.costs), 1) if self.costs else 0,
            "lat_med": round(statistics.median(lat), 1) if lat else None,
            "lat_p95": round(sorted(lat)[int(.95 * (len(lat) - 1))], 1) if lat else None,
            "shown": round(statistics.fmean(ages), 1) if ages else None,
            "stale": self.stale,
            "per_drain": round(self.replayed / max(1, self.batches), 2),
            "coalesced": getattr(self, "coalesced", 0),
            "dropped": self.dropped,
            "skips": self.skips,
            "narrow": round(100.0 * self.policy.narrow_frames
                             / max(1, self.policy.narrow_frames + self.policy.wide_frames)),
            "probes": self.policy.probes,
            "rescues": getattr(self, "rescues", 0),
        }


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--seconds", type=int, default=60)
    ap.add_argument("--camera-fps", type=float, default=30.0)
    ap.add_argument("--conv-ms", type=float, default=4.3, help="YUV -> upright ARGB (host benchmark)")
    ap.add_argument("--scale-ms", type=float, default=1.0, help="filtered resample for the analysis copy")
    ap.add_argument("--handoff-ms", type=float, default=0.2, help="display bitmap + slot publish")
    ap.add_argument("--json-ms", type=float, default=0.4, help="serialise one result for the WebView")
    ap.add_argument("--webview-ms", type=float, default=1.5, help="one nextvrHands() evaluation")
    ap.add_argument("--inference-wide", type=float, default=29.1, help="numHands=2, one hand tracked")
    ap.add_argument("--inference-narrow", type=float, default=11.8, help="numHands=1, one hand tracked")
    ap.add_argument("--rescue-ms", type=float, default=18.0, help="rescue landmarker over both crops")
    ap.add_argument("--rescue-every-ms", type=float, default=33.0)
    ap.add_argument("--probe-ms", type=float, default=150.0)
    ap.add_argument("--valid-ms", type=float, default=500.0, help="native hand-frame validity")
    ap.add_argument("--drain-bound", type=int, default=8)
    ap.add_argument("--gpu", type=float, default=1.0, help="multiplier for GPU/shared-resource cost")
    ap.add_argument("--busy-ui", type=float, default=1.0, help="scales the WebView and hand-off cost")
    ap.add_argument("--hiccup-ms", type=float, default=0.0,
                    help="WebView stall every --hiccup-every-ms (route change, GC, dock animation)")
    ap.add_argument("--hiccup-every-ms", type=float, default=5000.0)
    ap.add_argument("--skip-scale-gate-ms", type=float, default=40.0,
                    help="age under which a pending analysis frame makes a new resample redundant "
                         "(0 disables: every camera frame resamples, today's code)")
    ap.add_argument("--hands", type=int, default=1, choices=(0, 1, 2),
                    help="0 = searching for a hand, 1 = one hand up, 2 = both hands up")
    args = ap.parse_args()
    args.webview_ms *= args.busy_ui
    args.handoff_ms *= args.busy_ui

    variants = [
        ("before  numHands=2, rescue always, blocking hand-off, unbounded drain",
         dict(narrow_enabled=False, rescue_gated=False, bound_drain=False, blocking_handoff=True,
              skip_scale_gate=0.0)),
        ("after   adaptive slots, gated rescue, fast hand-off, bounded drain",
         dict(narrow_enabled=True, rescue_gated=True, bound_drain=True, blocking_handoff=False,
              skip_scale_gate=0.0)),
        ("after + age-gated analysis resample (AnalysisGate)",
         dict(narrow_enabled=True, rescue_gated=True, bound_drain=True, blocking_handoff=False,
              skip_scale_gate=40.0)),
    ]
    print(f"camera {args.camera_fps:g} fps | conv {args.conv_ms} ms | resample {args.scale_ms} ms | "
          f"inference wide {args.inference_wide} / narrow {args.inference_narrow} ms | gpu x{args.gpu} "
          f"| ui x{args.busy_ui} | hiccup {args.hiccup_ms:g} ms | hands {args.hands}\n")
    header = (f"{'variant':64} | {'track':>6} {'infer':>6} {'lat':>6} {'p95':>6} {'shown':>6} "
              f"{'stale':>5} {'/drain':>6} {'drop':>4} {'skip':>4} {'narrow':>6} {'probe':>5} {'rec':>4}")
    print(header)
    print("-" * len(header))
    for label, extra in variants:
        s = Sim(args, **extra).run()
        print(f"{label:64} | {s['track_hz']:5.1f}H {s['infer_mean']:5.1f}m {s['lat_med']:5.1f}m "
              f"{s['lat_p95']:5.1f}m {s['shown']:5.1f}m {s['stale']:5d} {s['per_drain']:6.2f} "
              f"{s['dropped']:4d} {s['skips']:4d} {s['narrow']:5d}% {s['probes']:5d} {s['rescues']:4d}")
    print("\ncolumns: track = landmark results/s; infer = mean inference cost on the tracking thread;")
    print("lat/p95 = capture -> result; shown = age of the landmark pair the display is using;")
    print("stale = hand frames that lost native validity before the WebView ran them (each one turns")
    print("an in-flight press into a cancel); drop = camera frames superseded before the tracker took")
    print("them; skip = camera frames whose redundant analysis resample was not produced at all;")
    print("narrow = frames billed at the one-hand cost; probe = second-hand rechecks; rec =")
    print("recovery rounds started. Host-measured costs; validate on device with adb logcat -s NextVR-Perf.")


if __name__ == "__main__":
    main()
