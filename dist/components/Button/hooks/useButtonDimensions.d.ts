export interface ButtonDimensions {
    height: number;
    width: number;
}
/**
 * Tracks the rendered dimensions of a button element.
 * Used to render a Skeleton placeholder with the exact same size.
 *
 * @returns A tuple: [ref to attach to the button, dimensions object or null]
 */
export declare function useButtonDimensions(deps: unknown[]): [React.RefObject<HTMLButtonElement>, ButtonDimensions | null];
