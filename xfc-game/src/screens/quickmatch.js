import { teamSelectionScreen } from './team-selection.js';
export function quickMatchScreen(ctx,params={}) { return teamSelectionScreen(ctx,{...params,randomMode:true}); }
