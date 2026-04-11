import { CardDropdownState } from "../CardDropdown.types";

/**
 * Returns the CSS state string corresponding to the boolean `isOpen` value.
 * Centralizes the mapping logic to avoid duplication across JSX classNames.
 *
 * @param isOpen - If `true`, returns `"open"`; otherwise, returns `"close"`.
 * @returns Visual state as a CSS string.
 */
export function getDropdownState(isOpen: boolean): CardDropdownState {
  return isOpen ? "open" : "close";
}
