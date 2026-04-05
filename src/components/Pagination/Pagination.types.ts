export type PaginationVariant = "noLabel" | "leftLabel" | "centerLabel";
export type PaginationArrow = "left" | "right";

export interface PaginationProps {
  /**
   * Layout variant for the pagination control.
   *
   * - `"noLabel"`     — arrows only, no label
   * - `"leftLabel"`   — label on the left, arrows on the right
   * - `"centerLabel"` — left arrow, label in the center, right arrow
   */
  variant: PaginationVariant;

  /**
   * Text label rendered next to the arrows (e.g. `"Page 1 of 10"`).
   * Not rendered when `variant` is `"noLabel"`.
   */
  label: string;

  /**
   * Disables the left (previous) arrow button.
   * @default false
   */
  disabledLeft?: boolean;

  /**
   * Disables the right (next) arrow button.
   * @default false
   */
  disabledRight?: boolean;

  /**
   * Callback fired when the left (previous) arrow is clicked.
   */
  onClickLeft?: () => void;

  /**
   * Callback fired when the right (next) arrow is clicked.
   */
  onClickRight?: () => void;

  /**
   * When `true`, replaces the label with a skeleton placeholder
   * and disables both arrow buttons.
   * @default false
   */
  skeleton?: boolean;
}

export interface PaginationArrowButtonProps {
  /** Direction of the arrow. */
  direction: PaginationArrow;

  /** Disables the button when `true`. */
  disabled?: boolean;

  /** Callback fired on click. */
  onClick?: () => void;
}
