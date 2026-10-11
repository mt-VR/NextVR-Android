package com.nextvr.app;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;

import android.view.MotionEvent;
import org.junit.Test;

public class HandTouchEventQueueTest {
    @Test public void adjacentMovesCollapseButDownAndUpStayOrdered() {
        HandTouchEventQueue queue = new HandTouchEventQueue();
        queue.offer("shell", MotionEvent.ACTION_DOWN, 10, 20);
        queue.offer("shell", MotionEvent.ACTION_MOVE, 11, 21);
        queue.offer("shell", MotionEvent.ACTION_MOVE, 12, 22);
        queue.offer("shell", MotionEvent.ACTION_MOVE, 13, 23);
        queue.offer("shell", MotionEvent.ACTION_UP, 14, 24);

        HandTouchEventQueue.Event down = queue.poll();
        HandTouchEventQueue.Event move = queue.poll();
        HandTouchEventQueue.Event up = queue.poll();
        assertEquals(MotionEvent.ACTION_DOWN, down.action);
        assertEquals(MotionEvent.ACTION_MOVE, move.action);
        assertEquals(13f, move.x, 0f);
        assertEquals(23f, move.y, 0f);
        assertEquals(MotionEvent.ACTION_UP, up.action);
        assertNull(queue.poll());
        assertTrue(queue.isEmpty());
    }

    @Test public void cancellationAndDifferentSurfacesAreHardMoveBoundaries() {
        HandTouchEventQueue queue = new HandTouchEventQueue();
        queue.offer("shell", MotionEvent.ACTION_DOWN, 0, 0);
        queue.offer("shell", MotionEvent.ACTION_MOVE, 1, 1);
        queue.offer("shell", MotionEvent.ACTION_CANCEL, 1, 1);
        queue.offer("browser", MotionEvent.ACTION_MOVE, 2, 2);
        queue.offer("browser", MotionEvent.ACTION_MOVE, 3, 3);

        assertEquals(MotionEvent.ACTION_DOWN, queue.poll().action);
        assertEquals(MotionEvent.ACTION_MOVE, queue.poll().action);
        assertEquals(MotionEvent.ACTION_CANCEL, queue.poll().action);
        HandTouchEventQueue.Event browserMove = queue.poll();
        assertEquals("browser", browserMove.id);
        assertEquals(MotionEvent.ACTION_MOVE, browserMove.action);
        assertEquals(3f, browserMove.x, 0f);
        assertNull(queue.poll());
    }
}
