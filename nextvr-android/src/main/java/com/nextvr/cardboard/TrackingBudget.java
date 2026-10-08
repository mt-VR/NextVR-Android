package com.nextvr.cardboard;

/** Bounded analysis admission/resolution; no queued camera frames and no gesture changes. */
public final class TrackingBudget {
    private int width=448, slow=0, fast=0;
    private double averageMs=40;
    private long nextMs=0;
    public synchronized int width() { return width; }
    public synchronized boolean ready(long nowMs) { return nowMs>=nextMs; }
    public synchronized void started(long nowMs) { nextMs=nowMs+20; }
    public synchronized void completed(long nowMs,long inferenceMs) {
        averageMs=.8*averageMs+.2*Math.min(500,Math.max(1,inferenceMs));
        // Require sustained pressure/recovery; do not oscillate sizes every frame.
        slow=averageMs>85?slow+1:0; fast=averageMs<40?fast+1:0;
        if(slow>=4 && width>384){width=384;slow=fast=0;}
        else if(fast>=60 && width<640){width=width==384?448:640;fast=slow=0;}
        nextMs=Math.max(nextMs,nowMs+Math.max(2,inferenceMs/10));
    }
    public synchronized void reset(){width=448;slow=0;fast=0;averageMs=40;nextMs=0;}
}
