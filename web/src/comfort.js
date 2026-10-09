export const COMFORT = Object.freeze({ version:6, welcomeDistance:.42, welcomeScale:1.0,
  windowDistance:.68, dockDistance:.45, dockDrop:.22, dockScale:.90,
  keyboardDistance:.45, keyboardDrop:.5, keyboardScale:.92 });   // teclado deitado: centro mais baixo, como mesa
export function migrateComfort(settings) {
  if(settings.comfortVersion===COMFORT.version)return settings;
  const s={...settings,comfortVersion:COMFORT.version,winDist:COMFORT.windowDistance,dockDist:1};
  if(settings.comfortVersion===5)return s;
  if(settings.comfortVersion===4)return s;
  if(settings.comfortVersion===3)return s;
  if(settings.comfortVersion===2)return s;
  return s;
}