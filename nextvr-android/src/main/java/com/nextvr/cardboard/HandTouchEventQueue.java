package com.nextvr.cardboard;

import android.view.MotionEvent;
import java.util.ArrayDeque;

/**
 * Ordered hand-to-WebView event queue. DOWN/UP/CANCEL are never merged; adjacent MOVE samples for
 * the same surface collapse to the newest coordinates, preventing a display-rate move backlog from
 * putting a release behind stale pointer positions.
 */
final class HandTouchEventQueue {
    static final class Event {
        final String id;
        final int action;
        final float x, y;

        Event(String id, int action, float x, float y) {
            this.id = id;
            this.action = action;
            this.x = x;
            this.y = y;
        }
    }

    private final ArrayDeque<Event> events = new ArrayDeque<>();

    synchronized void offer(String id, int action, float x, float y) {
        Event event = new Event(id, action, x, y);
        Event last = events.peekLast();
        if (action == MotionEvent.ACTION_MOVE && last != null
                && last.action == MotionEvent.ACTION_MOVE && last.id.equals(id)) {
            events.removeLast();
        }
        events.addLast(event);
    }

    synchronized Event poll() { return events.pollFirst(); }
    synchronized boolean isEmpty() { return events.isEmpty(); }
}
