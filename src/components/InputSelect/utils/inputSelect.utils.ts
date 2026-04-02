/**
 * Builds the CSS class string for the trigger button,
 * applying state-based modifier classes.
 */
export function getTriggerClass(
  hasValue: boolean,
  error: boolean,
  disabled: boolean,
): string {
  return [
    "input-select-button",
    hasValue && "option",
    error && "error",
    disabled && "disabled",
  ]
    .filter(Boolean)
    .join(" ");
}