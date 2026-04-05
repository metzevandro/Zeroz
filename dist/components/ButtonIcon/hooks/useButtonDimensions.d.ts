interface ButtonDimensions {
    height: number;
    width: number;
}
/**
 * Measures and tracks the rendered dimensions of a button element.
 *
 * Attaches a ResizeObserver so dimensions stay accurate if the button
 * size changes (e.g. due to prop changes or container resize).
 *
 * @returns A tuple of [ref, dimensions] — attach `ref` to the button element.
 *
 * @example
 * const [buttonRef, dimensions] = useButtonDimensions();
 * <button ref={buttonRef}>...</button>
 * // dimensions → { height: 40, width: 40 } | null
 */
export declare const useButtonDimensions: () => readonly [import("react").RefObject<HTMLButtonElement>, ButtonDimensions | null];
export {};
