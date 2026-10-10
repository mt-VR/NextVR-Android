export const COMFORT = Object.freeze({ version:7, welcomeDistance:.42, welcomeScale:1.0,
  windowDistance:.68, windowScale:.75, dockDistance:.55, dockDrop:.22, dockScale:.90,
  keyboardDistance:.45, keyboardDrop:.5, keyboardScale:.92 });   // janelas menores e dock no mesmo plano confortável
export function migrateComfort(settings) {
  if(settings.comfortVersion===COMFORT.version)return settings;
  const s={...settings,comfortVersion:COMFORT.version,winDist:COMFORT.windowDistance,dockDist:1};
  // Older releases used 1.0 as the untouched default. Keep any size the user deliberately set.
  if(settings.winScale==null || settings.winScale===1)s.winScale=COMFORT.windowScale;
  return s;
}
