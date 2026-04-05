/**
 * Builds the CSS class string for the input content wrapper,
 * applying state-based modifier classes when needed.
 */
export function getInputContentClass(
  disabled: boolean,
  error: boolean,
): string {
  return ["input-content", disabled && "disabled", error && "error"]
    .filter(Boolean)
    .join(" ");
}
