package com.nextvr.cardboard;

import com.nextvr.cardboard.hands.PhoneXrHands;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Main-thread hand-frame mailbox. Pose-only updates may be coalesced, but gesture/contact edges
 * cannot be overwritten by a later snapshot while the WebView is busy.
 *
 * Pinch/fist transitions are always retained. Every sample in the near-reach band is retained too,
 * including the first sample leaving it, because the web layer needs the depth trajectory to
 * distinguish a real push from merely appearing behind a window. The queue is bounded; overflow
 * requests an explicit neutral reset and then publishes only the newest frame (fail closed).
 *
 * When a drain would evaluate more than {@link #DEFAULT_COLLAPSE_ABOVE} frames, runs of identical
 * gesture state are collapsed to their newest samples: the ordered sequence of edges the web layer
 * sees is untouched, and only poses a later same-state sample already replaced are dropped. That is
 * what keeps a backlog from making the drain slower than the interval that grows it (see the field
 * documentation).
 */
public final class HandFrameMailbox {
    public static final int DEFAULT_MAX_QUEUED_FRAMES = 96;
    /**
     * A drain that has to evaluate this many frames starts coalescing. The bound is not about
     * memory, it is about stability: every queued frame is one more nextvrHands() call inside a
     * single WebView evaluation, so a backlog makes each drain slower than the interval that grows
     * it - the queue feeds itself, frames age past their native validity, and an aged frame is a
     * CANCEL. "The dock is smooth but my clicks vanish when an app is open" is that failure.
     */
    public static final int DEFAULT_COLLAPSE_ABOVE = 8;
    /**
     * Samples kept per run of equal gesture state. One would be enough for the click state machine
     * (it only reacts to edges); two keeps a depth delta, which is what tells a real near-touch push
     * from a hand that merely appeared behind the glass.
     */
    public static final int TRAJECTORY_TAIL = 2;

    public static final class FrameScript {
        private final PhoneXrHands.Frame frame;
        private final String script;

        private FrameScript(PhoneXrHands.Frame frame, String script) {
            this.frame = frame;
            this.script = script;
        }

        public PhoneXrHands.Frame frame() { return frame; }
        public String script() { return script; }
    }

    public static final class Batch {
        private final boolean resetBeforeFrames;
        private final List<FrameScript> frames;
        private final int coalesced;

        private Batch(boolean resetBeforeFrames, List<FrameScript> frames, int coalesced) {
            this.resetBeforeFrames = resetBeforeFrames;
            this.frames = Collections.unmodifiableList(frames);
            this.coalesced = coalesced;
        }

        public boolean resetBeforeFrames() { return resetBeforeFrames; }
        public List<FrameScript> frames() { return frames; }

        /** Poses dropped because the drain budget was reached, for the perf log. */
        public int coalesced() { return coalesced; }
    }

    private final int maxQueuedFrames;
    private final int collapseAbove;
    private final ArrayDeque<FrameScript> transitions = new ArrayDeque<>();
    private Map<String, Integer> lastGestureState = Collections.emptyMap();
    private FrameScript latest;
    private boolean lastPoseSensitive;
    private boolean overflowed;
    private boolean resetRequested;

    public HandFrameMailbox() { this(DEFAULT_MAX_QUEUED_FRAMES, DEFAULT_COLLAPSE_ABOVE); }

    public HandFrameMailbox(int maxQueuedFrames) { this(maxQueuedFrames, DEFAULT_COLLAPSE_ABOVE); }

    public HandFrameMailbox(int maxQueuedFrames, int collapseAbove) {
        if (maxQueuedFrames < 1) throw new IllegalArgumentException("maxQueuedFrames must be positive");
        if (collapseAbove < TRAJECTORY_TAIL + 1) throw new IllegalArgumentException("collapseAbove must leave room for a run");
        this.maxQueuedFrames = maxQueuedFrames;
        this.collapseAbove = collapseAbove;
    }

    /** Called on the tracking thread. The script is serialized before it reaches this mailbox. */
    public synchronized void offer(PhoneXrHands.Frame frame, String script) {
        if (frame == null || script == null) throw new NullPointerException("frame and script are required");
        FrameScript snapshot = new FrameScript(frame, script);
        Map<String, Integer> state = gestureState(frame);
        boolean poseSensitive = hasPoseSensitiveHand(frame);
        boolean stateChanged = !state.equals(lastGestureState);

        // Retain all pinch/fist/near-reach state edges. While the hand is near a surface or making
        // a fist drag, retain each landmark sample so a slow UI drain cannot erase the trajectory.
        if (!overflowed && (stateChanged || poseSensitive || lastPoseSensitive)) {
            if (transitions.size() >= maxQueuedFrames) {
                transitions.clear();
                overflowed = true;
            } else {
                transitions.addLast(snapshot);
            }
        }
        lastGestureState = state;
        lastPoseSensitive = poseSensitive;
        latest = snapshot;
    }

    /** Request a cancellation boundary, for example when Camera2 tracking stops. */
    public synchronized void requestReset() {
        transitions.clear();
        latest = null;
        lastGestureState = Collections.emptyMap();
        lastPoseSensitive = false;
        overflowed = false;
        resetRequested = true;
    }

    /** Atomically take ordered gesture snapshots plus the latest pose, if it is newer. */
    public synchronized Batch drain() {
        boolean reset = resetRequested || overflowed;
        List<FrameScript> frames = new ArrayList<>();
        int coalesced = 0;
        if (latest != null) {
            if (reset) {
                // Never replay an unbounded/invalid sequence after a reset. The current state is
                // safe to resume from after the explicit neutral boundary.
                frames.add(latest);
            } else {
                frames.addAll(transitions);
                if (frames.isEmpty() || frames.get(frames.size() - 1) != latest) frames.add(latest);
                coalesced = collapseToDrainBudget(frames);
            }
        }
        transitions.clear();
        latest = null;
        overflowed = false;
        resetRequested = false;
        return new Batch(reset, frames, coalesced);
    }

    /**
     * Collapses runs of equal gesture state to their newest {@link #TRAJECTORY_TAIL} samples and
     * returns how many were dropped. Gesture edges are never lost: the state sequence the web layer
     * sees stays the same, only poses a later sample of the same state already replaced disappear.
     * Applied only once a drain is bigger than the configured bound, so a normal 60 Hz drain is
     * byte-for-byte what it was.
     */
    private int collapseToDrainBudget(List<FrameScript> frames) {
        if (frames.size() <= collapseAbove) return 0;
        List<Map<String, Integer>> state = new ArrayList<>(frames.size());
        for (FrameScript frame : frames) state.add(gestureState(frame.frame()));
        List<FrameScript> kept = new ArrayList<>(frames.size());
        int runStart = 0;
        for (int i = 1; i <= frames.size(); i++) {
            if (i < frames.size() && state.get(i).equals(state.get(runStart))) continue;
            for (int k = Math.max(runStart, i - TRAJECTORY_TAIL); k < i; k++) kept.add(frames.get(k));
            runStart = i;
        }
        int dropped = frames.size() - kept.size();
        if (dropped > 0) {
            frames.clear();
            frames.addAll(kept);
        }
        return dropped;
    }

    public synchronized boolean isEmpty() {
        return latest == null && transitions.isEmpty() && !resetRequested;
    }

    private static Map<String, Integer> gestureState(PhoneXrHands.Frame frame) {
        Map<String, Integer> result = new HashMap<>();
        for (PhoneXrHands.Hand hand : frame.getHands()) {
            int bits = (hand.getPinching() ? 1 : 0)
                | (hand.getShape().getFist() ? 2 : 0)
                | (withinNearReach(hand) ? 4 : 0);
            result.put(hand.getLeft() ? "left" : "right", bits);
        }
        return result;
    }

    private static boolean hasPoseSensitiveHand(PhoneXrHands.Frame frame) {
        for (PhoneXrHands.Hand hand : frame.getHands()) {
            if (hand.getShape().getFist() || withinNearReach(hand)) return true;
        }
        return false;
    }

    private static boolean withinNearReach(PhoneXrHands.Hand hand) {
        float[] head = hand.getHead();
        if (head == null || head.length < 27) return false;
        float x = head[24], y = head[25], z = head[26];
        return x * x + y * y + z * z <= NEAR_REACH_METRES * NEAR_REACH_METRES;
    }

    private static final float NEAR_REACH_METRES = .7f;
}
