import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveGoalCredit } from '../xfc-game/src/match3d/scoring.js';

for (const side of ['home', 'away']) {
  const shooter = { id: '9', side };
  const teammate = { id: '10', side };
  const keeper = { id: '1', side: side === 'home' ? 'away' : 'home', isKeeper: true };
  test(`${side}: toque do goleiro não rouba autoria e comemoração`, () => {
    assert.equal(resolveGoalCredit(side, shooter, shooter).scorer, shooter);
    assert.equal(resolveGoalCredit(side, keeper, shooter).scorer, shooter);
    assert.equal(resolveGoalCredit(side, keeper, shooter).ownGoalBy, null);
    assert.equal(resolveGoalCredit(side, teammate, shooter).scorer, teammate);
  });
  test(`${side}: posse deliberada do adversário encerra autoria antiga; gol contra não comemora`, () => {
    assert.deepEqual(resolveGoalCredit(side, keeper, keeper), { scorer: null, ownGoalBy: keeper });
    assert.deepEqual(resolveGoalCredit(side, null, null), { scorer: null, ownGoalBy: null });
  });
}
