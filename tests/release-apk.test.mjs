import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

// The deliverable is an APK that a phone can download and install directly. A workflow artifact
// is a ZIP, so the preview pipeline has to publish the raw .apk as a release asset and put that
// URL on the pull request. These assertions keep the direct-download contract from regressing.
test('PR builds publish the raw APK as a release asset and comment the direct link', async () => {
  const workflow = await readFile('.github/workflows/android.yml', 'utf8');
  assert.match(workflow, /name: Publish direct APK download/,
    'the workflow has a dedicated direct-download step');
  assert.match(workflow, /gh release create/,
    'the step creates a GitHub release instead of only a zipped artifact');
  assert.match(workflow, /gh release upload[\s\S]*--clobber/,
    're-runs replace the asset instead of failing on an existing tag');
  assert.match(workflow, /nextvr-android-debug\.apk/,
    'the release asset keeps the real APK file name');
  assert.match(workflow, /releases\/download\/.*nextvr-android-debug\.apk/,
    'the published URL is the release download endpoint, not an Actions artifact');
  assert.match(workflow, /gh pr comment/,
    'the direct link is posted on the pull request');
  assert.match(workflow, /--prerelease --latest=false/,
    'preview builds never masquerade as the latest stable release');
  assert.match(workflow, /sem ZIP/,
    'the release notes state that the APK is directly installable');
  assert.match(workflow, /github\.event\.pull_request\.head\.repo\.full_name == github\.repository/,
    'the release step only runs for same-repository pull requests');
});

// The trigger list used to name individual `arena/*` branches. Every new or renamed branch silently
// stopped building, and while the list was accurate a single commit produced two identical runs.
test('CI triggers every brand through pull_request instead of a hardcoded branch list', async () => {
  const workflow = await readFile('.github/workflows/android.yml', 'utf8');
  assert.doesNotMatch(workflow, /arena\/[0-9a-f]{8}-nextvr-android/,
    'no branch name is pinned in the workflow triggers');
  assert.match(workflow, /on:\s*\n\s*push:\s*\n(?:\s*#.*\n)*\s*branches: \[ "main" \]/,
    'push builds are limited to main, which owns the apk-dist publication');
  assert.match(workflow, /\n  pull_request:\n/,
    'every branch is built through its pull request');
  assert.match(workflow, /\n  workflow_dispatch:\n/,
    'a branch build can still be requested by hand');
});

// Without a pull request the release step used to be skipped, so the only APK available for a
// branch under evaluation was a ZIP inside an Actions artifact.
test('a dispatched branch build publishes the same direct APK as a pull request', async () => {
  const workflow = await readFile('.github/workflows/android.yml', 'utf8');
  assert.match(workflow, /github\.event_name == 'workflow_dispatch'/,
    'the release step is not restricted to pull requests');
  assert.match(workflow, /github\.event\.pull_request\.head\.sha \|\| github\.sha/,
    'the release tag falls back to the dispatched SHA');
  assert.match(workflow, /\$GITHUB_REF_NAME/,
    'the release notes record which branch produced the APK');
});

// Each preview is a ~60 MB APK and every commit created one more; eight accumulated in three days.
test('preview releases are pruned to a bounded number', async () => {
  const workflow = await readFile('.github/workflows/android.yml', 'utf8');
  assert.match(workflow, /name: Prune old preview releases/,
    'the workflow prunes old previews');
  assert.match(workflow, /KEEP: 10/,
    'the retention count is explicit');
  assert.match(workflow, /gh release delete[\s\S]*--cleanup-tag/,
    'both the release and its tag are deleted');
  assert.match(workflow, /sort_by\(\.createdAt\) \| reverse \| \.\[\$keep:\]/,
    'the newest releases are the ones kept');
});

// Two runs for one ref competed for the same release and check-run; a superseded PR run only burns
// runner minutes to produce an APK that installs nothing new.
test('runs on the same ref are serialized and superseded PR runs are cancelled', async () => {
  const workflow = await readFile('.github/workflows/android.yml', 'utf8');
  assert.match(workflow, /concurrency:\s*\n\s*group: \$\{\{ github\.workflow \}\}-\$\{\{ github\.ref \}\}/,
    'the concurrency group is per workflow and ref');
  assert.match(workflow, /cancel-in-progress: \$\{\{ github\.event_name == 'pull_request' \}\}/,
    'PR runs are cancelled, while a main run that pushes apk-dist is not interrupted');
});
