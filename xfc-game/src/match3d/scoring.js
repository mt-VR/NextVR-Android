// A deflection changes lastTouch (corners/physics), not the shot's author.
// A deliberate new possession/kick replaces lastIntentionalTouch.
export function resolveGoalCredit(scoringSide, lastTouch, lastIntentionalTouch) {
  if (lastTouch?.side === scoringSide) return { scorer: lastTouch, ownGoalBy: null };
  if (lastIntentionalTouch?.side === scoringSide) {
    return { scorer: lastIntentionalTouch, ownGoalBy: null };
  }
  // Do not invent an attacking scorer for an actual own goal.
  return { scorer: null, ownGoalBy: lastTouch || lastIntentionalTouch || null };
}
