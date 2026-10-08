export const COMFORT = Object.freeze({ version:3, welcomeDistance:.55, welcomeScale:1.0,
  windowDistance:.85, dockDistance:.52, dockDrop:.28, dockScale:.72,
  keyboardDistance:.55, keyboardDrop:.45, keyboardScale:.70 });
export function migrateComfort(settings) {
  if(settings.comfortVersion===COMFORT.version)return settings;
  const s={...settings,comfortVersion:COMFORT.version,winDist:COMFORT.windowDistance,dockDist:1};
  if(settings.comfortVersion===2)return s;
  return s;
}
