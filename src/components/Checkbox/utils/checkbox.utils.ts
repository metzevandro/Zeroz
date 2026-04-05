/**
 * Builds the CSS modifier class string for the checkbox wrapper.
 * Returns an empty string when no modifiers are active.
 */
export function getCheckboxClassList(
  disabled: boolean,
  noEvents: boolean,
): string {
  return [disabled && "-disabled", noEvents && "-no-events"]
    .filter(Boolean)
    .join(" ");
}
