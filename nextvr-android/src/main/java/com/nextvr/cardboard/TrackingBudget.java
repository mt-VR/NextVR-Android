package com.nextvr.cardboard;

/** Bounded analysis admission/resolution; no queued camera frames and no gesture changes. */
public final class TrackingBudget {
    private int width=384, slow=0, fast=0;
    private double averageMs=30;
    private long nextMs=0;
    public synchronized int width() { return width; }
    public synchronized boolean ready(long nowMs) { return nowMs>=nextMs; }
    public synchronized void started(long nowMs) { nextMs=nowMs+12; }
    public synchronized void completed(long nowMs,long inferenceMs) {
        averageMs=.8*averageMs+.2*Math.min(500,Math.max(1,inferenceMs));
        // Require sustained pressure/recovery; do not oscillate sizes every frame.
        slow=averageMs>75?slow+1:0; fast=averageMs<35?fast+1:0;
        if(slow>=3 && width>320){width=320;slow=fast=0;}
        else if(fast>=40 && width<640){width=width==320?384:640;fast=slow=0;}
        nextMs=Math.max(nextMs,nowMs+Math.max(2,inferenceMs/10));
    }
    public synchronized void reset(){width=384;slow=0;fast=0;averageMs=30;nextMs=0;}
}
