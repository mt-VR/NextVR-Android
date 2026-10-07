import test from 'node:test';
import assert from 'node:assert/strict';
import { DwellSelection } from '../web/src/dwell.js';
test('setup gaze selects once after a continuous dwell, independent of hand tracking',()=>{
  const dwell=new DwellSelection();
  for(let t=0;t<1200;t+=100)assert.equal(dwell.update('en',t).activate,false);
  assert.equal(dwell.update('en',1200).activate,true);
  assert.equal(dwell.update('en',1300).activate,false);
});
test('looking away, changing target, suspension and stalled frames cannot finish an old dwell',()=>{
  const dwell=new DwellSelection();
  for(let t=0;t<=1000;t+=100)dwell.update('en',t);
  assert.equal(dwell.update('pt',1100).progress,0);
  assert.equal(dwell.update(null,1200).progress,0);
  assert.equal(dwell.update('en',1300).progress,0);
  assert.equal(dwell.update('en',4000).activate,false);
  dwell.reset();assert.equal(dwell.update('en',4100).progress,0);
});
