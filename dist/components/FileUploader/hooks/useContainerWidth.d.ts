interface UseContainerWidthReturn {
    containerRef: React.RefObject<HTMLDivElement>;
    fileNameMaxWidth: React.CSSProperties;
}
/**
 * Measures the uploader container's width and returns a `maxWidth` style
 * for the filename element, preventing long filenames from overflowing
 * the row when a close button and error icon are also present.
 *
 * Uses a `ResizeObserver` (falling back to a `resize` window listener)
 * for accurate tracking when the container is resized.
 */
export declare function useContainerWidth(): UseContainerWidthReturn;
export {};
