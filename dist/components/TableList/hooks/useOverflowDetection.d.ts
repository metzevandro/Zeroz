import React from "react";
interface UseOverflowDetectionReturn {
    containerRef: React.RefObject<HTMLDivElement>;
    isOverflowed: boolean;
}
/**
 * Detects whether an element's content overflows its visible width.
 * Uses `ResizeObserver` for accurate tracking when the container is resized.
 *
 * The `isOverflowed` flag is used to apply a CSS class that enables
 * a horizontal scroll shadow/indicator on the table.
 */
export declare function useOverflowDetection(): UseOverflowDetectionReturn;
export {};
