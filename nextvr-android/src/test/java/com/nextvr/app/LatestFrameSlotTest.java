package com.nextvr.app;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertFalse;

import org.junit.Test;

public class LatestFrameSlotTest {
    @Test
    public void emptySlotHasNothingToTake() {
        LatestFrameSlot<String> slot = new LatestFrameSlot<>();
        assertTrue(slot.isEmpty());
        assertNull(slot.poll());
        assertEquals(0L, slot.replacedCount());
    }

    @Test
    public void offeredFrameIsTakenExactlyOnce() {
        LatestFrameSlot<String> slot = new LatestFrameSlot<>();
        assertNull(slot.offer("f1"));
        assertFalse(slot.isEmpty());
        assertEquals("f1", slot.poll());
        assertNull(slot.poll());
        assertTrue(slot.isEmpty());
    }

    @Test
    public void newerFrameReplacesUnconsumedOlderFrameAndReturnsIt() {
        LatestFrameSlot<String> slot = new LatestFrameSlot<>();
        slot.offer("f1");
        // The caller must release the superseded bitmap, so the slot hands it back.
        assertEquals("f1", slot.offer("f2"));
        assertEquals("f2", slot.offer("f3"));
        assertEquals("f3", slot.poll());
        assertEquals(2L, slot.replacedCount());
    }

    @Test
    public void clearReturnsWaitingFrameSoItCanBeReleased() {
        LatestFrameSlot<String> slot = new LatestFrameSlot<>();
        slot.offer("f1");
        assertEquals("f1", slot.clear());
        assertNull(slot.clear());
        assertTrue(slot.isEmpty());
    }

    @Test
    public void peekShowsTheWaitingFrameWithoutTakingIt() {
        LatestFrameSlot<String> slot = new LatestFrameSlot<>();
        assertNull(slot.peek());
        slot.offer("f1");
        assertEquals("f1", slot.peek());
        assertEquals("f1", slot.peek());          // peeking must not consume
        assertEquals("f1", slot.offer("f2"));
        assertEquals("f2", slot.peek());
        assertEquals("f2", slot.poll());
        assertNull(slot.peek());
    }

    @Test
    public void nextFrameIsAvailableImmediatelyAfterTakingPrevious() {
        // Models the tracker finishing an inference: the newest frame is ready at once, with no
        // wait for the next camera callback. This is the property that removes the 15 Hz floor.
        LatestFrameSlot<Integer> slot = new LatestFrameSlot<>();
        slot.offer(1);
        assertEquals(Integer.valueOf(1), slot.poll());
        slot.offer(2);
        assertEquals(Integer.valueOf(2), slot.poll());
    }
}
