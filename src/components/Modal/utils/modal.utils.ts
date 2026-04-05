/**
 * Returns the CSS class string for a modal element based on its open state.
 */
export function getModalClass(base: string, isOpen: boolean): string {
  return isOpen ? `${base} visible` : base;
}
