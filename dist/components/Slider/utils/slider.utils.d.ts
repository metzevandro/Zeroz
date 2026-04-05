/**
 * Clamps `value` within `[min, max]`.
 */
export declare function clamp(value: number, min: number, max: number): number;
/**
 * Snaps `value` to the nearest multiple of `step`, then clamps within `[min, max]`.
 */
export declare function snapToStep(value: number, step: number, min: number, max: number): number;
/**
 * Converts a slider value to a CSS fill percentage (0–100).
 */
export declare function toPercent(value: number, min: number, max: number): number;
/**
 * Converts a raw pixel offset within the track rect to a snapped slider value.
 */
export declare function pixelToValue(clientX: number, rect: DOMRect, step: number, min: number, max: number): number;
