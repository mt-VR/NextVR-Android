export const COMFORT = Object.freeze({ version:2, welcomeDistance:.60, welcomeScale:.90,
  windowDistance:.85, dockDistance:.65, dockDrop:.32, dockScale:.55,
  keyboardDistance:.60, keyboardDrop:.50, keyboardScale:.60 });
export function migrateComfort(settings) {
  if(settings.comfortVersion===COMFORT.version)return settings;
  return {...settings,comfortVersion:COMFORT.version,winDist:COMFORT.windowDistance,dockDist:1};
}
