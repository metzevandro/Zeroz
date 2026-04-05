/**
 * Clamps a progress value to the valid `[0, 100]` range.
 */
export declare function clampProgress(value: number): number;
/**
 * Builds the CSS class string for the determinate progress bar,
 * applying state-based modifiers for success and error.
 */
export declare function getProgressBarClass(value: number, error: boolean): string;
