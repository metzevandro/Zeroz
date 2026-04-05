/**
 * Builds the CSS class string for the radio button circle element.
 */
export function getRadioButtonClass(
  disabled: boolean,
  checked: boolean,
): string {
  return ["radio-button", disabled && "disable", checked && "checked"]
    .filter(Boolean)
    .join(" ");
}

/**
 * Builds the CSS class string for the radio button label.
 */
export function getLabelClass(disabled: boolean): string {
  return ["radio-button-label", disabled && "disabled"]
    .filter(Boolean)
    .join(" ");
}
