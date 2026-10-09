package com.nextvr.cardboard;

/**
 * Adaptive hand-input resolution only. Frame cadence is owned by Camera2 and the single-flight
 * admission flag in PassthroughCamera; this class must never impose an independent FPS ceiling.
 */
public final class TrackingBudget {
    private int width=640, slow=0, fast=0;
    private double averageMs=40;

    public synchronized int width() { return width; }

    public synchronized void completed(long inferenceMs) {
        averageMs=.8*averageMs+.2*Math.min(500,Math.max(1,inferenceMs));
        // Keep the reference's 640 px input for landmark precision. Reduce it only after sustained
        // pressure, and restore it only after sustained headroom to prevent resolution oscillation.
        slow=averageMs>85?slow+1:0;
        fast=averageMs<55?fast+1:0;
        if(slow>=8 && width>512){width=512;slow=fast=0;}
        else if(fast>=90 && width<640){width=640;fast=slow=0;}
    }

    public synchronized void reset(){width=640;slow=fast=0;averageMs=40;}
}
