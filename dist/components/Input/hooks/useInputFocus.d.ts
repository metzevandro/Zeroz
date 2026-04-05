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
export declare function useInputFocus(containerRef: RefObject<HTMLDivElement>): {
    handleDivClick: (event: React.MouseEvent<HTMLDivElement>) => void;
};
