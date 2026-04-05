interface UseTooltipReturn {
    isVisible: boolean;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
}
/**
 * Manages the visibility state of a tooltip.
 * Exposes stable mouse event handlers to avoid unnecessary re-renders.
 */
export declare function useTooltip(): UseTooltipReturn;
export {};
