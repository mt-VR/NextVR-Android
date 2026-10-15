export const COMFORT = Object.freeze({ version:9, welcomeDistance:.42, welcomeScale:1.0,
  windowDistance:.68, windowScale:.75, dockDistance:.55, dockDrop:.22, dockScale:.78,
  keyboardDistance:.45, keyboardDrop:.5, keyboardScale:.92 });   // posição da dock inalterada; só o hand tracking mudou
export function migrateComfort(settings) {
  if(settings.comfortVersion===COMFORT.version)return settings;
  const s={...settings,comfortVersion:COMFORT.version,winDist:COMFORT.windowDistance,dockDist:1};
  // Nesta versão a dock fica centralizada na lente (drop menor).
  s.dockSize=1;
  if(settings.winScale==null || settings.winScale===1)s.winScale=COMFORT.windowScale;
  return s;
}
