export type IconSize = "sm" | "md" | "lg";
export interface IconProps {
    /**
     * Material Symbol icon name to render.
     * Accepts any valid name from the Material Symbols library
     * (e.g. `"search"`, `"keyboard_arrow_down"`, `"logout"`).
     *
     * When `undefined`, the element renders empty — useful for conditional rendering
     * without unmounting the host element.
     */
    icon: string | undefined;
    /**
     * Controls the rendered size of the icon.
     *
     * - `"sm"` — small
     * - `"md"` — medium
     * - `"lg"` — large
     */
    size: IconSize;
    /**
     * When `true`, renders the icon in its filled variant using
     * the `FILL` font variation axis.
     * @default false
     */
    fill?: boolean;
}
