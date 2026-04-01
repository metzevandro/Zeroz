/**
 * Clamps a progress value to the valid `[0, 100]` range.
 */
export function clampProgress(value: number): number {
  return Math.min(100, Math.max(0, value));
}

/**
 * Builds the CSS class string for the determinate progress bar,
 * applying state-based modifiers for success and error.
 */
export function getProgressBarClass(value: number, error: boolean): string {
  return [
    "progress-bar",
    value === 100 && "progress-bar-success",
    error && "progress-bar-error",
  ]
    .filter(Boolean)
    .join(" ");
}