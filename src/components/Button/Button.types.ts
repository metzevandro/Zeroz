import React from "react";

/** Available size variants for the Button component. */
export type ButtonSize = "sm" | "md";

/** Available visual/semantic variants for the Button component. */
export type ButtonVariant = "primary" | "secondary" | "success" | "warning";

/**
 * Props for the Button component.
 *
 * Extends all native `<button>` HTML attributes, so any standard attribute
 * (e.g. `onClick`, `type`, `form`) is also accepted.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Controls the height and padding of the button.
   * - `"sm"` — compact, 32px height. Suitable for dense UIs or toolbars.
   * - `"md"` — default size, 40px height. Suitable for most contexts.
   * @default "md"
   */
  size?: ButtonSize;

  /**
   * The visual/semantic style of the button.
   * - `"primary"` — highlighted action, filled with brand color.
   * - `"secondary"` — neutral, outlined style for secondary actions.
   * - `"success"` — green-tinted for confirmations or positive actions.
   * - `"warning"` — amber-tinted for cautionary or destructive actions.
   * @default "primary"
   */
  variant?: ButtonVariant;

  /**
   * Name of an icon to render before the button label.
   * Must always be combined with `children` (a text label).
   * Use a dedicated icon-only button component for icon-only cases.
   */
  icon?: string;

  /**
   * When `true`, replaces the button with a `<Skeleton>` placeholder
   * that matches its rendered dimensions.
   * Useful for loading states where the button's layout must be preserved.
   * @default false
   */
  isSkeleton?: boolean;

  /**
   * When `true`, disables the button and shows a loading spinner.
   * Sets `aria-busy` to `true` and prevents interaction.
   * @default false
   */
  isLoading?: boolean;

  /**
   * Accessible label for the button, used by screen readers.
   * Required when the button contains only an icon or a non-descriptive label.
   */
  ariaLabel?: string;
}
