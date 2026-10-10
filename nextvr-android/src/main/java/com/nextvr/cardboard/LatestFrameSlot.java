package com.nextvr.cardboard;

/**
 * One-slot mailbox that always holds the NEWEST camera frame waiting for hand tracking.
 *
 * Why it exists: the tracker used to be admitted only inside the Camera2 callback, so a finished
 * inference had to wait for the next camera callback before it could start again. With a 30 fps
 * camera that quantises the landmark rate to 30/15/10 Hz as soon as an inference exceeds 33 ms
 * (see docs/hand-tracking-investigation.md). The camera now always publishes its newest frame
 * here, and the tracking thread takes it as soon as it is free.
 *
 * Semantics: offering replaces an unconsumed older frame (latest wins, nothing queues), and the
 * replaced/cleared item is returned so the owner can release its bitmap. Pure Java, no Android
 * types, so the policy is unit-tested on the JVM.
 */
final class LatestFrameSlot<T> {
    private T pending;
    private long replaced;

    /** Stores [item] as the newest frame. Returns the older unconsumed frame, or null. */
    synchronized T offer(T item) {
        T old = pending;
        pending = item;
        if (old != null) replaced++;
        return old;
    }

    /** Takes the newest frame, leaving the slot empty. Returns null when nothing is waiting. */
    synchronized T poll() {
        T item = pending;
        pending = null;
        return item;
    }

    /** The newest waiting frame WITHOUT taking it, or null. Lets the publisher judge whether a new
     * item is worth producing at all (see AnalysisGate). */
    synchronized T peek() {
        return pending;
    }

    /** Empties the slot (camera stopped, hands disabled). Returns the discarded frame, or null. */
    synchronized T clear() {
        return poll();
    }

    synchronized boolean isEmpty() {
        return pending == null;
    }

    /** Frames that were superseded before the tracker could take them. */
    synchronized long replacedCount() {
        return replaced;
    }
}
