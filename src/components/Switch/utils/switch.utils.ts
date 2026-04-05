/**
 * Builds the CSS class string for the switch wrapper,
 * applying state-based modifier classes when needed.
 */
export function getSwitchClassList(
  disabled: boolean,
  noEvents: boolean,
): string {
  return [
    "ui-form-switch",
    "-switch",
    disabled && "-disabled",
    noEvents && "-no-events",
  ]
    .filter(Boolean)
    .join(" ");
}
