import { RefObject } from "react";

/**
 * Returns a click handler for the input wrapper `<div>`.
 *
 * Handles two cases:
 * - Double-click → focuses the input and selects all text.
 * - Single-click → focuses the input while preserving the cursor position.
 *
 * Clicks originating from the password toggle button are ignored
 * so they don't interfere with the visibility state.
 */
export function useInputFocus(containerRef: RefObject<HTMLDivElement>) {
  const handleDivClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest(".toggle-password")) return;

    const inputElement = containerRef.current?.querySelector("input");
    if (!inputElement) return;

    if (event.detail === 2) {
      inputElement.focus();
      inputElement.select();
    } else {
      const cursorPosition = inputElement.selectionStart;
      setTimeout(() => {
        inputElement.focus();
        if (cursorPosition !== null) {
          inputElement.setSelectionRange(cursorPosition, cursorPosition);
        }
      }, 0);
    }
  };

  return { handleDivClick };
}
