import type { ButtonHTMLAttributes } from "react";

/**
 * Visual style of the button.
 * - `plain`: transparent background, minimal chrome
 * - `default`: filled/bordered background with full visual weight
 */
export type ButtonIconAppearance = "plain" | "default";

/**
 * Size of the button.
 * - `sm`: compact — 24px icon area
 * - `md`: standard — 40px icon area
 */
export type ButtonIconSize = "sm" | "md";

/**
 * Semantic color variant of the button.
 * Only applies when `appearance="default"`.
 *
 * - `primary`: main action, highlight color
 * - `secondary`: secondary action, neutral
 * - `success`: positive or confirmatory action
 * - `warning`: destructive or cautionary action
 * - `on-color`: for use on colored/dark backgrounds
 */
export type ButtonIconVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "on-color";

export interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Semantic color variant of the button.
   * Visual effect depends on the `appearance` prop.
   */
  variant: ButtonIconVariant;

  /**
   * Controls the overall visual style of the button.
   * - `plain`: minimal, transparent — for low-emphasis actions
   * - `default`: filled or bordered — for standard actions
   */
  appearance: ButtonIconAppearance;

  /**
   * Controls the size of the button and its icon.
   * - `sm`: compact layout
   * - `md`: standard layout
   */
  size: ButtonIconSize;

  /**
   * Material Symbols icon identifier to render inside the button.
   * Passed directly to the `<Icon>` component.
   *
   * @example "close", "edit", "delete", "add"
   */
  icon: string;

  /**
   * When `true`, renders a skeleton placeholder matching the button's
   * dimensions. Use during async loading states.
   *
   * The button remains mounted (hidden) so dimensions can always
   * be measured, ensuring the skeleton matches exactly.
   *
   * @default false
   */
  skeleton?: boolean;

  /**
   * When `true`, disables the button and applies disabled styles.
   * Forwarded to the native `<button>` element.
   *
   * @default false
   */
  disabled?: boolean;
}
