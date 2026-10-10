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
 */
public final class HandFrameMailbox {
    public static final int DEFAULT_MAX_QUEUED_FRAMES = 96;
    private static final float NEAR_REACH_METRES = .7f;

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

        private Batch(boolean resetBeforeFrames, List<FrameScript> frames) {
            this.resetBeforeFrames = resetBeforeFrames;
            this.frames = Collections.unmodifiableList(frames);
        }

        public boolean resetBeforeFrames() { return resetBeforeFrames; }
        public List<FrameScript> frames() { return frames; }
    }

    private final int maxQueuedFrames;
    private final ArrayDeque<FrameScript> transitions = new ArrayDeque<>();
    private Map<String, Integer> lastGestureState = Collections.emptyMap();
    private FrameScript latest;
    private boolean lastPoseSensitive;
    private boolean overflowed;
    private boolean resetRequested;

    public HandFrameMailbox() { this(DEFAULT_MAX_QUEUED_FRAMES); }

    public HandFrameMailbox(int maxQueuedFrames) {
        if (maxQueuedFrames < 1) throw new IllegalArgumentException("maxQueuedFrames must be positive");
        this.maxQueuedFrames = maxQueuedFrames;
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
        if (latest != null) {
            if (reset) {
                // Never replay an unbounded/invalid sequence after a reset. The current state is
                // safe to resume from after the explicit neutral boundary.
                frames.add(latest);
            } else {
                frames.addAll(transitions);
                if (frames.isEmpty() || frames.get(frames.size() - 1) != latest) frames.add(latest);
            }
        }
        transitions.clear();
        latest = null;
        overflowed = false;
        resetRequested = false;
        return new Batch(reset, frames);
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
}
