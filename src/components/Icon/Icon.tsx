import "./Icon.scss";
import React from "react";
import { IconProps } from "./Icon.types";
import { buildIconVariationSettings } from "./utils/icon.utils";

/**
 * `Icon` renders a single Material Symbol using the variable icon font.
 *
 * Size and fill style are controlled via props. The component uses
 * `font-variation-settings` to switch between outlined and filled variants
 * without loading a separate font file.
 *
 * @example
 * ```tsx
 * // Outlined icon (default)
 * <Icon icon="search" size="md" />
 *
 * // Filled icon
 * <Icon icon="star" size="lg" fill />
 *
 * // Small icon
 * <Icon icon="keyboard_arrow_down" size="sm" />
 * ```
 *
 * @see https://fonts.google.com/icons
 */
const Icon: React.FC<IconProps> = ({ icon, size, fill = false }) => (
  <span
    className={`material-symbols-outlined ${size}`}
    style={{ fontVariationSettings: buildIconVariationSettings(fill) }}
    translate="no"
  >
    {icon}
  </span>
);

export default Icon;
