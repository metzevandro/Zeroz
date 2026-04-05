interface Dimensions {
    width: number;
    height: number;
}
interface UseInputDimensionsReturn {
    containerRef: React.RefObject<HTMLDivElement>;
    dimensions: Dimensions;
}
/**
 * Measures the input container's dimensions after mount.
 * Used to size the `<Skeleton>` placeholder to match the real input exactly.
 */
export declare function useInputDimensions(): UseInputDimensionsReturn;
export {};
