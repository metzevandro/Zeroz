/**
 * Clamps a number between optional `min` and `max` bounds.
 * Returns the value unchanged when no bounds are defined.
 */
export function clamp(
  value: number,
  min: number | undefined,
  max: number | undefined,
): number {
  if (max !== undefined && value > max) return max;
  if (min !== undefined && value < min) return min;
  return value;
}

/**
 * Parses a string into a number.
 * Returns `undefined` when the string is empty or not a valid integer.
 */
export function parseNumber(raw: string): number | undefined {
  if (raw === "") return undefined;
  const parsed = parseInt(raw, 10);
  return isNaN(parsed) ? undefined : parsed;
}

/**
 * Returns the initial numeric value for the stepper.
 * Uses `min` as the starting point when defined, otherwise `undefined`.
 */
export function resolveInitialValue(
  min: number | undefined,
): number | undefined {
  return min !== undefined ? min : undefined;
}
