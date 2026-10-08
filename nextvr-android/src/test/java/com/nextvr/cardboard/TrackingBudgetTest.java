package com.nextvr.cardboard;
import org.junit.Test;
import static org.junit.Assert.*;
public class TrackingBudgetTest {
    @Test public void capsAdmissionAndAdaptsOnlyToSustainedPressure() {
        TrackingBudget b=new TrackingBudget();assertEquals(512,b.width());
        assertTrue(b.ready(100));b.started(100);assertFalse(b.ready(120));
        b.completed(120,20);assertFalse(b.ready(130));assertTrue(b.ready(134));
        for(int i=0;i<20;i++)b.completed(1000+i*180,180);
        assertEquals(384,b.width());
        b.completed(5000,20);assertEquals(384,b.width());
        for(int i=0;i<220;i++)b.completed(6000+i*33,20);
        assertEquals(640,b.width());
        b.reset();assertEquals(512,b.width());assertTrue(b.ready(0));
    }
}
