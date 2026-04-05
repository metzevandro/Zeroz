export interface SkeletonProps {
    /**
     * Width of the skeleton element.
     * Accepts any valid CSS length value (e.g. `"100%"`, `"200px"`, `"5rem"`).
     */
    width: string;
    /**
     * Height of the skeleton element.
     * Accepts any valid CSS length value (e.g. `"20px"`, `"1.5rem"`).
     */
    height: string;
    /**
     * When `true`, renders a circular skeleton — ideal for avatar placeholders.
     * Uses `border-radius: pill` to produce the circle shape.
     * @default false
     */
    circle?: boolean;
}
