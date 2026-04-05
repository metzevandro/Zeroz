/**
 * Clamps `value` within `[min, max]`.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

/**
 * Snaps `value` to the nearest multiple of `step`, then clamps within `[min, max]`.
 */
export function snapToStep(
  value: number,
  step: number,
  min: number,
  max: number,
): number {
  const snapped = Math.round(value / step) * step;
  return clamp(snapped, min, max);
}

/**
 * Converts a slider value to a CSS fill percentage (0–100).
 */
export function toPercent(value: number, min: number, max: number): number {
  if (max === min) return 0;
  return ((value - min) / (max - min)) * 100;
}

/**
 * Converts a raw pixel offset within the track rect to a snapped slider value.
 */
export function pixelToValue(
  clientX: number,
  rect: DOMRect,
  step: number,
  min: number,
  max: number,
): number {
  const ratio = clamp((clientX - rect.left) / rect.width, 0, 1);
  const raw = ratio * (max - min) + min;
  return snapToStep(raw, step, min, max);
}
