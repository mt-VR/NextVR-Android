#!/usr/bin/env python3
"""Summarise NextVR-Perf logcat lines (emitted by PerfLog.java, one line per ~3 s window).

Usage:
    adb logcat -d -v time -s NextVR-Perf > session.log
    python3 tools/perf/summarize_logcat.py session.log [more.log ...]
    python3 tools/perf/summarize_logcat.py --self-test

Output is a Markdown table per log file: median, min, max of each rate/latency, and the first-third
versus last-third medians of the effective track rate and CPU, so a long session shows whether
throughput or memory drifts over time. Values of -1 mean "no sample in that window".
"""
import argparse
import re
import statistics
import sys

LINE = re.compile(r"NextVR-Perf(?:\(\s*\d+\))?:\s*(window=.*)$")
PAIR = re.compile(r"(\w+)=([^\s]+)")
METRICS = [
    ("camera", "fps", "Camera callback rate"),
    ("render", "fps", "GL render rate (app FPS)"),
    ("track", "fps", "Effective hand tracking rate (results/s)"),
    ("infer_mean", "ms", "MediaPipe primary inference, mean"),
    ("infer_max", "ms", "MediaPipe primary inference, max"),
    ("capture_to_landmark", "ms", "Sensor capture to landmarks"),
    ("acquire_to_landmark", "ms", "Camera acquire to landmarks"),
    ("publish", "ms", "Landmarks to WebView script"),
    ("cam_work", "ms", "Camera-thread pixel work per frame (it gates tracking admission)"),
    ("cam_work_max", "ms", "Worst camera-thread frame in the window"),
    ("handoff", "ms", "Camera thread spent handing the frame to the renderer"),
    ("handoff_max", "ms", "Worst hand-off: the camera thread waiting on the display path"),
    ("dropped", "frames/window", "Camera frames superseded before tracking"),
    ("skips", "frames/window", "Analysis copies not produced: slot held a fresh unread frame (gate)"),
    ("loss", "events/window", "Results with no hand right after one with a hand (real losses)"),
    ("empty_ms", "ms/window", "Time spent in lost-hand runs (excludes the initial palm search)"),
    ("gap_max", "ms", "Longest interval between two results (scheduler stalls, GC)"),
    ("track_jitter", "ms", "Stddev of result intervals: rate stability, independent of rate"),
    ("replayed", "frames/drain", "Hand frames the WebView evaluated per drain"),
    ("stale", "frames/window", "Hand frames that lost validity before the WebView ran them"),
    ("coalesced", "frames/window", "Superseded poses dropped by the drain budget"),
    ("cpu_pct", "%", "Process CPU (all threads)"),
    ("native_mb", "MB", "Native heap"),
    ("java_mb", "MB", "Java heap used"),
]


def parse(lines):
    """Yields dicts of numeric values, one per window line. Non-matching lines are ignored."""
    rows = []
    for line in lines:
        m = LINE.search(line)
        if not m:
            continue
        row = {}
        delegate = None
        for key, value in PAIR.findall(m.group(1)):
            if key == "delegate":
                delegate = value
                continue
            if key == "window":
                value = value.rstrip("s")
            try:
                row[key] = float(value)
            except ValueError:
                continue
        if delegate:
            row["_delegate"] = delegate
        if "window" in row:
            rows.append(row)
    return rows


def valid(values):
    """Drops the -1 sentinel (no sample) so it does not pull medians down."""
    return [v for v in values if v >= 0]


def summarise(rows, title):
    out = [f"### {title}", "", f"Windows: {len(rows)}"]
    if not rows:
        out += ["", "No NextVR-Perf lines found. Was the app run with `-s NextVR-Perf`?", ""]
        return "\n".join(out)
    delegates = sorted({r["_delegate"] for r in rows if "_delegate" in r})
    if delegates:
        out.append("Delegate: " + ", ".join(delegates))
    out += ["", "| Metric | Unit | Median | Min | Max | Meaning |", "|---|---|---|---|---|---|"]
    for key, unit, meaning in METRICS:
        values = valid([r[key] for r in rows if key in r])
        if not values:
            out.append(f"| {key} | {unit} | n/a | n/a | n/a | {meaning} |")
            continue
        out.append(
            f"| {key} | {unit} | {statistics.median(values):.1f} | {min(values):.1f} | {max(values):.1f} | {meaning} |"
        )
    out += ["", "Stability (first third vs last third, medians):", ""]
    third = max(1, len(rows) // 3)
    for key in ("track", "cam_work", "infer_mean", "capture_to_landmark", "cpu_pct", "java_mb",
                "native_mb"):
        first = valid([r[key] for r in rows[:third] if key in r])
        last = valid([r[key] for r in rows[-third:] if key in r])
        if first and last:
            out.append(f"- {key}: {statistics.median(first):.1f} -> {statistics.median(last):.1f}")
    out.append("")
    return "\n".join(out)


SELF_TEST = """\
01-01 12:00:00.000 I/NextVR-Perf( 1): window=3.0s camera=29.8 render=60.1 track=14.9 infer_mean=31.2 infer_max=40.0 capture_to_landmark=95.0 acquire_to_landmark=60.0 publish=3.0 cam_work=18.0 cam_work_max=44.0 handoff=1.4 handoff_max=9.0 dropped=12 skips=0 replayed=6.00 stale=9 coalesced=0 camera_retries=2 hand_retries=1 loss=0 empty_ms=0 gap_max=120 track_jitter=9.0 cpu_pct=85.0 native_mb=210.5 java_mb=60.2 delegate=GPU
01-01 12:00:03.000 I/NextVR-Perf( 1): window=3.0s camera=30.0 render=59.9 track=29.1 infer_mean=28.0 infer_max=33.0 capture_to_landmark=-1.0 acquire_to_landmark=45.0 publish=-1.0 cam_work=5.1 cam_work_max=7.0 handoff=0.2 handoff_max=1.0 dropped=0 skips=3 replayed=1.00 stale=0 coalesced=0 camera_retries=0 hand_retries=3 loss=1 empty_ms=120 gap_max=70 track_jitter=4.0 cpu_pct=70.0 native_mb=211.0 java_mb=61.0 delegate=GPU
01-01 12:00:06.000 I/NextVR-Perf( 1): window=3.0s camera=30.0 render=60.0 track=28.5 infer_mean=29.0 infer_max=35.0 capture_to_landmark=80.0 acquire_to_landmark=42.0 publish=2.5 cam_work=5.4 cam_work_max=8.0 handoff=0.2 handoff_max=1.0 dropped=0 skips=0 replayed=1.02 stale=0 coalesced=12 camera_retries=1 hand_retries=0 loss=0 empty_ms=0 gap_max=40 track_jitter=2.0 cpu_pct=72.0 native_mb=212.0 java_mb=61.5 delegate=GPU
unrelated line that must be ignored
"""


def self_test():
    rows = parse(SELF_TEST.splitlines())
    assert len(rows) == 3, rows
    assert rows[0]["track"] == 14.9 and rows[0]["_delegate"] == "GPU"
    assert valid([rows[1]["capture_to_landmark"]]) == []  # -1 sentinel is "no sample"
    assert statistics.median(valid([r["track"] for r in rows])) == 28.5
    assert rows[0]["stale"] == 9 and rows[1]["skips"] == 3
    assert rows[1]["skips"] == 3 and rows[1]["loss"] == 1 and rows[1]["empty_ms"] == 120
    assert rows[0]["gap_max"] == 120 and rows[2]["track_jitter"] == 2.0
    assert rows[0]["camera_retries"] == 2 and rows[1]["hand_retries"] == 3
    assert rows[2]["coalesced"] == 12 and rows[0]["camera_retries"] == 2
    text = summarise(rows, "self-test")
    assert "| track | fps |" in text and "Delegate: GPU" in text
    assert "| cam_work | ms |" in text and "| stale | frames/window |" in text
    assert "n/a" not in text  # every declared metric must actually reach the summariser
    assert summarise([], "empty").startswith("### empty")
    print("self-test ok")


def main(argv):
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("logs", nargs="*", help="captured logcat files")
    parser.add_argument("--self-test", action="store_true")
    args = parser.parse_args(argv)
    if args.self_test:
        self_test()
        return 0
    if not args.logs:
        parser.error("give at least one log file, or --self-test")
    for path in args.logs:
        with open(path, encoding="utf-8", errors="replace") as handle:
            print(summarise(parse(handle), path))
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
