package com.nextvr.cardboard;

import org.junit.Test;
import static org.junit.Assert.*;

public class TrackingBudgetTest {
    @Test public void startsAtReferenceResolutionAndDoesNotImposeAFrameRateLimit() {
        TrackingBudget b=new TrackingBudget();
        assertEquals(640,b.width());
        // Admission is single-flight in PassthroughCamera, not time-gated by this policy.
        b.completed(12);
        b.completed(12);
        assertEquals(640,b.width());
    }

    @Test public void resolutionChangesOnlyAfterSustainedLoadAndRecoversWithHysteresis() {
        TrackingBudget b=new TrackingBudget();
        for(int i=0;i<8;i++)b.completed(180);
        assertEquals(640,b.width());
        b.completed(180);
        assertEquals(512,b.width());
        b.completed(180);
        assertEquals(512,b.width());
        for(int i=0;i<120;i++)b.completed(20);
        assertEquals(640,b.width());
        b.reset();
        assertEquals(640,b.width());
    }
}
