// The Java cross-reference tool stands in for javac in this workspace (there is no JDK here), so its
// own rules have to be pinned: both errors it caught late were real CI failures (a local shadowing
// an enclosing local, and a call on the shell service outside a try). Its synthetic cases run here.
import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const tool = fileURLToPath(new URL('../tools/check-java-refs.py', import.meta.url));

test('the Java reference tool passes its own synthetic cases', (t) => {
  let stdout;
  try {
    stdout = execFileSync('python3', [tool, '--self-test'], { encoding: 'utf8' });
  } catch (error) {
    if (String(error?.stdout || '').includes('javalang is not installed')) {
      t.skip('javalang unavailable');
      return;
    }
    assert.fail(`self-test failed:\n${error?.stdout || ''}${error?.stderr || ''}`);
  }
  if (stdout.includes('javalang is not installed')) {
    t.skip('javalang unavailable');
    return;
  }
  assert.match(stdout, /self-test ok \(\d+ cases\)/);
});
