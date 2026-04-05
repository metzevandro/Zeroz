/**
 * Clamps a number between optional `min` and `max` bounds.
 * Returns the value unchanged when no bounds are defined.
 */
export declare function clamp(value: number, min: number | undefined, max: number | undefined): number;
/**
 * Parses a string into a number.
 * Returns `undefined` when the string is empty or not a valid integer.
 */
export declare function parseNumber(raw: string): number | undefined;
/**
 * Returns the initial numeric value for the stepper.
 * Uses `min` as the starting point when defined, otherwise `undefined`.
 */
export declare function resolveInitialValue(min: number | undefined): number | undefined;
