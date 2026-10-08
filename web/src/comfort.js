export const COMFORT = Object.freeze({ version:4, welcomeDistance:.45, welcomeScale:1.0,
  windowDistance:.72, dockDistance:.42, dockDrop:.25, dockScale:.88,
  keyboardDistance:.48, keyboardDrop:.40, keyboardScale:.85 });
export function migrateComfort(settings) {
  if(settings.comfortVersion===COMFORT.version)return settings;
  const s={...settings,comfortVersion:COMFORT.version,winDist:COMFORT.windowDistance,dockDist:1};
  if(settings.comfortVersion===3)return s;
  if(settings.comfortVersion===2)return s;
  return s;
}
