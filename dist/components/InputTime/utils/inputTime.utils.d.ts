/**
 * Generates a zero-padded array of strings from `0` to `max` (inclusive).
 * e.g. `buildRange(3)` → `["00", "01", "02", "03"]`
 */
export declare function buildRange(max: number): string[];
/**
 * Applies a `HH:MM` mask to a raw digit string.
 * Automatically inserts `:` after two digits.
 */
export declare function applyTimeMask(raw: string): string;
/**
 * Parses a `HH:MM` string into `{ hour, minute }`.
 * Returns empty strings for both when the input is invalid or empty.
 */
export declare function parseTime(value: string): {
    hour: string;
    minute: string;
};
/** Height in pixels of each item cell in the scroll column. */
export declare const ITEM_HEIGHT = 36;
/** Number of visible items in the picker column. */
export declare const VISIBLE_ITEMS = 5;
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
export declare const REPEAT_COUNT = 5;
