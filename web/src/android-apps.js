const PACKAGE_NAME = /^[A-Za-z0-9_]+(?:\.[A-Za-z0-9_]+)+$/;

/** Known Library shortcuts should launch the installed Android package when one is present. */
export const NATIVE_SHORTCUTS = Object.freeze({
  netflix:['com.netflix.mediaclient'], youtube:['com.google.android.youtube'],
  tiktok:['com.zhiliaoapp.musically','com.ss.android.ugc.trill'],
  discord:['com.discord'], twitch:['tv.twitch.android.app'],
  prime:['com.amazon.avod.thirdpartyclient'], pluto:['tv.pluto.android'],
  whatsapp:['com.whatsapp'], instagram:['com.instagram.android'],
  x:['com.twitter.android','com.x.android'], facebook:['com.facebook.katana'],
  telegram:['org.telegram.messenger'], spotify:['com.spotify.music'],
});

export const androidSurfaceId = packageName => `android_${packageName}`;

/** Parse and validate the launcher-app JSON returned by the native PackageManager bridge. */
export function parseInstalledAndroidApps(json) {
  let values;
  try { values=typeof json==='string'?JSON.parse(json):json; }
  catch { return []; }
  if (!Array.isArray(values)) return [];
  const unique=new Map();
  for (const app of values) {
    if (!app || typeof app.packageName!=='string' || app.packageName.length>255 || !PACKAGE_NAME.test(app.packageName)) continue;
    const label=String(app.label||app.name||app.packageName).trim()||app.packageName;
    if (!unique.has(app.packageName)) unique.set(app.packageName,{
      packageName:app.packageName,name:String(app.name||label).trim()||label,label,portrait:!!app.portrait,
    });
  }
  return [...unique.values()].sort((a,b)=>a.label.localeCompare(b.label));
}

/** Keep web tools as fallbacks, but replace popular shortcuts with the real installed app. */
export function mapLibraryApps(webApps, installedApps) {
  const byPackage=new Map(installedApps.map(app=>[app.packageName,app]));
  const consumed=new Set();
  const branded=webApps.map(app=>{
    const match=(NATIVE_SHORTCUTS[app.id]||[]).map(packageName=>byPackage.get(packageName)).find(Boolean);
    if (!match) return {...app,kind:'app'};
    consumed.add(match.packageName);
    return {...app,id:androidSurfaceId(match.packageName),kind:'android',packageName:match.packageName,
      name:app.name,label:app.label||app.name,portrait:match.portrait,sourceId:app.id};
  });
  const remaining=installedApps.filter(app=>!consumed.has(app.packageName)).map(app=>({
    ...app,id:androidSurfaceId(app.packageName),kind:'android',bg:'linear-gradient(145deg,#4775be,#263a62)',
  }));
  return [...branded,...remaining];
}
