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
    ("dropped", "frames/window", "Camera frames superseded before tracking"),
    ("rescues", "count/window", "Rescue crops finished"),
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
    for key in ("track", "cpu_pct", "java_mb", "native_mb"):
        first = valid([r[key] for r in rows[:third] if key in r])
        last = valid([r[key] for r in rows[-third:] if key in r])
        if first and last:
            out.append(f"- {key}: {statistics.median(first):.1f} -> {statistics.median(last):.1f}")
    out.append("")
    return "\n".join(out)


SELF_TEST = """\
01-01 12:00:00.000 I/NextVR-Perf( 1): window=3.0s camera=29.8 render=60.1 track=14.9 infer_mean=31.2 infer_max=40.0 capture_to_landmark=95.0 acquire_to_landmark=60.0 publish=3.0 dropped=12 rescues=1 cpu_pct=85.0 native_mb=210.5 java_mb=60.2 delegate=GPU
01-01 12:00:03.000 I/NextVR-Perf( 1): window=3.0s camera=30.0 render=59.9 track=29.1 infer_mean=28.0 infer_max=33.0 capture_to_landmark=-1.0 acquire_to_landmark=45.0 publish=-1.0 dropped=0 rescues=0 cpu_pct=70.0 native_mb=211.0 java_mb=61.0 delegate=GPU
01-01 12:00:06.000 I/NextVR-Perf( 1): window=3.0s camera=30.0 render=60.0 track=28.5 infer_mean=29.0 infer_max=35.0 capture_to_landmark=80.0 acquire_to_landmark=42.0 publish=2.5 dropped=0 rescues=2 cpu_pct=72.0 native_mb=212.0 java_mb=61.5 delegate=GPU
unrelated line that must be ignored
"""


def self_test():
    rows = parse(SELF_TEST.splitlines())
    assert len(rows) == 3, rows
    assert rows[0]["track"] == 14.9 and rows[0]["_delegate"] == "GPU"
    assert valid([rows[1]["capture_to_landmark"]]) == []  # -1 sentinel is "no sample"
    assert statistics.median(valid([r["track"] for r in rows])) == 28.5
    text = summarise(rows, "self-test")
    assert "| track | fps |" in text and "Delegate: GPU" in text
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
