package com.nextvr.cardboard;

/**
 * Decides when a GPU-delegate inference is slower than it is worth.
 *
 * The landmarker is created on the GPU delegate first, and until now it was only abandoned when the
 * delegate *threw*. That is the wrong test for this app: on a phone the GPU is shared with the VR
 * compositor and with Chromium rasterizing the open pages, so a small GPU graph does not fail, it
 * just queues - which is exactly the reported symptom ("the feed and the dock are instant, the hands
 * are slow"), because the display path owns the GPU and the tracker waits behind it.
 *
 * So the delegate is judged on the measured cost of the inference instead: an exponentially weighted
 * mean that stays above the budget for [patience] results in a row means "hand these frames to a
 * core that is not contended". One slot of landmarks costs about 12 ms on a desktop-class core
 * (measured, tools/bench), so the CPU path has real headroom - the whole point of the guard is that
 * "GPU available" is not the same question as "GPU available for the tracker right now".
 *
 * Deliberately one-way: switching back and forth rebuilds the graph (a visible stall) and oscillates
 * with the load. The choice is logged so a device run can confirm it.
 */
public final class DelegateWatch {
    private final double budgetMs;
    private final int patience;
    private double average = -1;
    private int slow;
    private boolean fired;

    public DelegateWatch() { this(55, 30); }

    /**
     * @param budgetMs EWMA above which the GPU path counts as too slow (55 ms is ~18 landmark Hz).
     * @param patience consecutive slow results required before giving up, to ride out one spike.
     */
    public DelegateWatch(double budgetMs, int patience) {
        if (budgetMs <= 0 || patience < 1) throw new IllegalArgumentException("budgetMs and patience must be positive");
        this.budgetMs = budgetMs;
        this.patience = patience;
    }

    /**
     * True when the GPU delegate should be replaced by the CPU one. Both the smoothed mean and the
     * current result have to be over budget: the mean alone decays slowly, so a burst that has
     * already been recovered from would still be able to reach the patience count.
     */
    public boolean shouldDrop(long inferenceMs) {
        average = average < 0 ? inferenceMs : .8 * average + .2 * inferenceMs;
        if (average > budgetMs && inferenceMs > budgetMs) {
            if (++slow >= patience) fired = true;
        } else {
            slow = 0;
        }
        return fired;
    }

    /** EWMA of the observed inference cost, for the log. */
    public double averageMs() { return average; }

    public void reset() { average = -1; slow = 0; }

    /** Once the guard has fired the caller abandons the delegate; it latches so no second attempt. */
    public boolean fired() { return fired; }
}
