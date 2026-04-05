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
export const LOADING_CONFIG: Record<LoadingVariant, LoadingConfig> = {
  default: {
    spanClass: "loading",
    icon: "progress_activity",
    size: "sm",
    hasMessage: true,
  },
  large: {
    spanClass: "loading",
    icon: "progress_activity",
    size: "lg",
    hasMessage: false,
  },
  success: {
    spanClass: "success",
    icon: "check_circle",
    size: "sm",
    hasMessage: true,
  },
  warning: {
    spanClass: "warning",
    icon: "error_outline",
    size: "sm",
    hasMessage: true,
  },
};
