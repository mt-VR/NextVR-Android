package com.samrat.orangehanding

/** Keep primary MediaPipe inference responsive. YOLO is recovery, not a continuous second tracker. */
internal class RecoveryBudget(private val minimumMs:Long) {
    private var lastStart=Long.MIN_VALUE/2
    private var previousHands=0
    private var urgentUntil=0L
    private var dutyInterval=minimumMs
    @Synchronized fun shouldRun(now:Long,hands:Int,busy:Boolean=false):Boolean {
        if(hands<previousHands)urgentUntil=now+1500
        previousHands=hands
        if(hands>=2 || busy)return false
        val interval=maxOf(dutyInterval,when { now<urgentUntil->minimumMs;hands==1->2500L;else->1000L })
        if(now-lastStart<interval)return false
        lastStart=now;return true
    }
    @Synchronized fun completed(elapsedMs:Long) {
        dutyInterval=(elapsedMs*3).coerceIn(minimumMs,5000L)
    }
}
