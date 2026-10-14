export const COMFORT = Object.freeze({ version:8, welcomeDistance:.42, welcomeScale:1.0,
  windowDistance:.68, windowScale:.75, dockDistance:.55, dockDrop:.22, dockScale:.78,
  keyboardDistance:.45, keyboardDrop:.5, keyboardScale:.92 });   // dock menor, quadradinha estilo Quest
export function migrateComfort(settings) {
  if(settings.comfortVersion===COMFORT.version)return settings;
  const s={...settings,comfortVersion:COMFORT.version,
    winDist:COMFORT.windowDistance,dockDist:1};
  // Dock menor e quadradinha nesta versão: reseta tamanho da dock pro novo padrão compacto.
  s.dockSize=1;
  // Older releases used 1.0 as the untouched default window scale. Keep any size the user deliberately set.
  if(settings.winScale==null || settings.winScale===1)s.winScale=COMFORT.windowScale;
  return s;
}
