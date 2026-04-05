import { LoadingVariant } from "../Loading.types";
import { IconSize } from "../../Icon/Icon.types";
interface LoadingConfig {
    /** CSS class applied to the icon wrapper span. */
    spanClass: string;
    /** Material Symbol icon name. */
    icon: string;
    /** Icon size passed to the `<Icon>` component. */
    size: IconSize;
    /** Whether to render the message and wrapper div. */
    hasMessage: boolean;
}
/**
 * Returns the rendering configuration for a given `LoadingVariant`.
 * Centralises the variant → (icon, size, class) mapping so the component
 * contains no conditional logic.
 */
export declare const LOADING_CONFIG: Record<LoadingVariant, LoadingConfig>;
export {};
