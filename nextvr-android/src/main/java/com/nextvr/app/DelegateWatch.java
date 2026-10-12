package com.nextvr.app;

/**
 * Decides when the GPU delegate is not worth keeping.
 *
 * The landmarker is created on the GPU delegate first, and it used to be abandoned only when it
 * *threw*. That is the wrong test for this app: on a phone the GPU is shared with the VR compositor
 * and with Chromium rasterizing the open pages, so a small GPU graph does not fail, it just queues -
 * which is exactly the reported symptom ("the feed and the dock are instant, the hands are slow"),
 * because the display path owns the GPU and the tracker waits behind it. And on some Android devices
 * the GPU delegate does the opposite of failing: it constructs cleanly, answers in a couple of
 * milliseconds, and returns no landmarks at all, forever (the "fast, empty" delegate documented for
 * MediaPipe Tasks on mid-range Android).
 *
 * So the delegate is judged on two pieces of evidence, both measured:
 *
 *  - **Cost** ([shouldDrop]): an exponentially weighted mean that stays above the budget for
 *    [patience] results in a row means "hand these frames to a core that is not contended". One
 *    slot of landmarks costs about 12 ms on a desktop-class core (measured, tools/bench), so the
 *    CPU path has real headroom. The window is deliberately short: a saturated GPU delegate runs at
 *    a couple of results per second, so 30 consecutive results - the old patience - was ten seconds
 *    of the very slowness the rule exists to escape.
 *  - **Output** ([noOutput]): a delegate that has never produced a hand since its graph was built,
 *    over a long run of empty results, each of them answered in less than [IMPLAUSIBLY_FAST_MS]. A
 *    graph that uploads a 640x1138 image, runs the palm detector and post-processes does not finish
 *    in three milliseconds; a graph that has silently stopped doing the work does. MediaPipe's own
 *    benchmark for the *whole* pipeline is 12.3 ms on a Pixel 6 GPU, with a hand in the frame.
 *
 * The first results after a graph is built are excluded ([warmup]): creating a GPU graph compiles
 * its shaders, and one such frame (often hundreds of milliseconds) inflates the mean enough to make
 * a healthy delegate look contended. [rebuilt] restarts the window; the caller calls it whenever a
 * new landmarker was built, including the lazily built one-slot graph.
 *
 * Deliberately one-way per graph: switching back and forth rebuilds the graph (a visible stall) and
 * oscillates with the load. The choice is logged so a device run can confirm it, and the caller owns
 * the retry policy (see PassthroughCamera).
 */
public final class DelegateWatch {
    /** A graph that answers a full-resolution palm search this fast is not running the graph. */
    public static final double IMPLAUSIBLY_FAST_MS = 3.0;
    /** Results that still do not feed the verdict after a graph was built (shader compilation). */
    public static final int DEFAULT_WARMUP_RESULTS = 10;
    /** Consecutive empty results before the no-output rule may fire (~3 s at 30 fps). */
    public static final int DEFAULT_EMPTY_PATIENCE = 90;

    private final double budgetMs;
    private final int patience;
    private final int warmup;
    private final int emptyPatience;

    private int warmupLeft;
    private double average = -1;
    private int slow;
    private boolean fired;

    /** Output audit: consecutive results with no hand, their mean cost, and whether one was ever seen. */
    private int empty;
    private double emptySum;
    private boolean produced;
    private boolean noOutput;

    public DelegateWatch() { this(55, 12, DEFAULT_WARMUP_RESULTS, DEFAULT_EMPTY_PATIENCE); }

    /**
     * @param budgetMs EWMA above which the GPU path counts as too slow (55 ms is ~18 landmark Hz).
     * @param patience consecutive slow results required before giving up, to ride out one spike.
     */
    public DelegateWatch(double budgetMs, int patience) {
        this(budgetMs, patience, DEFAULT_WARMUP_RESULTS, DEFAULT_EMPTY_PATIENCE);
    }

    public DelegateWatch(double budgetMs, int patience, int warmup, int emptyPatience) {
        if (budgetMs <= 0 || patience < 1 || warmup < 0 || emptyPatience < 0)
            throw new IllegalArgumentException("budgetMs and patience must be positive");
        this.budgetMs = budgetMs;
        this.patience = patience;
        this.warmup = warmup;
        this.emptyPatience = emptyPatience;
        this.warmupLeft = warmup;
    }

    /**
     * True when the GPU delegate should be replaced by the CPU one. Both the smoothed mean and the
     * current result have to be over budget: the mean alone decays slowly, so a burst that has
     * already been recovered from would still be able to reach the patience count.
     */
    public boolean shouldDrop(long inferenceMs) {
        if (warmupLeft > 0) { warmupLeft--; return fired; }
        average = average < 0 ? inferenceMs : .8 * average + .2 * inferenceMs;
        if (average > budgetMs && inferenceMs > budgetMs) {
            if (++slow >= patience) fired = true;
        } else {
            slow = 0;
        }
        return fired;
    }

    /**
     * True when the delegate looks like it is answering without doing the work: no hand has ever
     * come out of it, the run of empty results is at least [emptyPatience] long, and those results
     * averaged under [IMPLAUSIBLY_FAST_MS]. Call once per result, with the number of hands the
     * result carried. Latches once fired; a hand at any point clears the audit for good, because
     * "empty right now" is the normal state of a camera pointed at an empty room and only "never
     * once, at this speed" is evidence of a broken graph.
     */
    public boolean noOutput(long inferenceMs, int hands) {
        if (hands > 0) {
            produced = true;
            empty = 0;
            return false;
        }
        if (produced || noOutput || emptyPatience == 0) return noOutput;
        empty++;
        emptySum += inferenceMs;
        if (empty >= emptyPatience && emptySum / empty <= IMPLAUSIBLY_FAST_MS) noOutput = true;
        return noOutput;
    }

    /** EWMA of the observed inference cost, for the log. -1 while no sample has been taken. */
    public double averageMs() { return average; }

    /** Mean cost of the empty result run the no-output rule is judging, for the log. */
    public double emptyMeanMs() { return empty == 0 ? -1 : emptySum / empty; }

    /** Results seen since the graph was built that carried no hand, for the log. */
    public int emptyRun() { return empty; }

    /** Clears the mean but keeps the verdict: the caller already acted on it. */
    public void reset() { average = -1; slow = 0; }

    /**
     * A new landmarker graph was built: every verdict about the previous one is void, its first
     * results are the delegate compiling shaders rather than steady state, and a freshly built graph
     * deserves its own window. Restarts the latch so a rebuilt GPU gets a fair one.
     */
    public void rebuilt() {
        average = -1; slow = 0; fired = false;
        empty = 0; emptySum = 0; produced = false; noOutput = false;
        warmupLeft = warmup;
    }

    /** Once the timing guard has fired the caller abandons the delegate; it latches so no second attempt. */
    public boolean fired() { return fired; }

    /** True once the no-output rule has fired for the current graph. */
    public boolean noOutputFired() { return noOutput; }
}
