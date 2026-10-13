import test from 'node:test';
import assert from 'node:assert/strict';
import { androidSurfaceId, mapLibraryApps, parseInstalledAndroidApps } from '../web/src/android-apps.js';

test('installed launcher-app JSON is validated, deduplicated and sorted without trusting package names', () => {
  const apps=parseInstalledAndroidApps(JSON.stringify([
    {packageName:'org.zeta.reader',label:'Zeta'},
    {packageName:'com.netflix.mediaclient',name:'Netflix',label:'Netflix',portrait:true},
    {packageName:'org.zeta.reader',label:'Duplicate should not replace the first'},
    {packageName:'com..invalid',label:'Malformed'},
    {packageName:'org.example/Activity',label:'Component, not package'},
    {packageName:`org.${'x'.repeat(260)}`,label:'Too long'},
    null,
  ]));
  assert.deepEqual(apps.map(app=>app.packageName),['com.netflix.mediaclient','org.zeta.reader']);
  assert.equal(apps[1].label,'Zeta');
  assert.equal(apps[0].portrait,true);
  assert.deepEqual(parseInstalledAndroidApps('{not json'),[]);
  assert.deepEqual(parseInstalledAndroidApps('{}'),[]);
});

test('Library shortcuts resolve to installed Android packages and keep other launchers discoverable', () => {
  const webApps=[
    {id:'netflix',name:'Netflix',slug:'netflix'},
    {id:'browser',name:'Browser'},
  ];
  const installed=[
    {packageName:'com.netflix.mediaclient',name:'Netflix',label:'Netflix',portrait:true},
    {packageName:'org.example.reader',name:'Reader',label:'Reader',portrait:false},
  ];
  const catalog=mapLibraryApps(webApps,installed);
  assert.equal(catalog.length,3);
  assert.deepEqual(catalog[0],{
    ...webApps[0],id:androidSurfaceId('com.netflix.mediaclient'),kind:'android',
    packageName:'com.netflix.mediaclient',label:'Netflix',portrait:true,sourceId:'netflix',
  });
  assert.equal(catalog[1].kind,'app','uninstalled web tools remain available as web shortcuts');
  assert.equal(catalog[2].kind,'android');
  assert.equal(catalog[2].id,'android_org.example.reader');
  assert.equal(catalog[2].name,'Reader');
});

test('Android virtual-display IDs are stable and distinct from Library/window IDs', () => {
  assert.equal(androidSurfaceId('com.example.reader'),'android_com.example.reader');
  assert.notEqual(androidSurfaceId('com.example.reader'),'android:com.example.reader');
});
