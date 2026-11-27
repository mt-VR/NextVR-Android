// Utilities for the five-digit room-code UI. This is intentionally not a
// matchmaking service: a server/signalling transport is required for real rooms.
export function isFiveDigitRoomCode(value) {
  return typeof value === 'string' && /^\d{5}$/.test(value);
}

export function createFiveDigitRoomCode(random = Math.random) {
  const sample = Number(random());
  const normalized = Number.isFinite(sample) ? Math.min(0.999999999, Math.max(0, sample)) : 0;
  return String(10000 + Math.floor(normalized * 90000));
}
