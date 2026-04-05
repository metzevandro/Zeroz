/**
 * Generates a zero-padded array of strings from `0` to `max` (inclusive).
 * e.g. `buildRange(3)` → `["00", "01", "02", "03"]`
 */
export function buildRange(max: number): string[] {
  return Array.from({ length: max + 1 }, (_, i) => (i < 10 ? `0${i}` : `${i}`));
}

/**
 * Applies a `HH:MM` mask to a raw digit string.
 * Automatically inserts `:` after two digits.
 */
export function applyTimeMask(raw: string): string {
  const digits = raw.replace(/[^\d]/g, "").slice(0, 4);
  if (digits.length > 2) {
    return `${digits.slice(0, 2)}:${digits.slice(2)}`;
  }
  return digits;
}

/**
 * Parses a `HH:MM` string into `{ hour, minute }`.
 * Returns empty strings for both when the input is invalid or empty.
 */
export function parseTime(value: string): { hour: string; minute: string } {
  const [hour = "", minute = ""] = value.split(":");
  return { hour, minute };
}

/** Height in pixels of each item cell in the scroll column. */
export const ITEM_HEIGHT = 36;

/** Number of visible items in the picker column. */
export const VISIBLE_ITEMS = 5;

/**
 * How many times the value list is repeated to simulate infinite scrolling.
 *
 * Kept intentionally small (5) to minimize DOM nodes:
 * - Hours:   24 × 5 = 120 nodes
 * - Minutes: 60 × 5 = 300 nodes
 *
 * The scroll position is silently reset to the middle repetition whenever
 * the user leaves the middle third, so the edges are never reachable in practice.
 */
export const REPEAT_COUNT = 5;
