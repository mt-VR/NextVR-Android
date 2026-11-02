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
