export const COMFORT = Object.freeze({ version:5, welcomeDistance:.42, welcomeScale:1.0,
  windowDistance:.68, dockDistance:.38, dockDrop:.22, dockScale:.95,
  keyboardDistance:.45, keyboardDrop:.38, keyboardScale:.92 });
export function migrateComfort(settings) {
  if(settings.comfortVersion===COMFORT.version)return settings;
  const s={...settings,comfortVersion:COMFORT.version,winDist:COMFORT.windowDistance,dockDist:1};
  if(settings.comfortVersion===4)return s;
  if(settings.comfortVersion===3)return s;
  if(settings.comfortVersion===2)return s;
  return s;
}
