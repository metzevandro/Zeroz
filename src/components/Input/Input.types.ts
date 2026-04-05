import React, { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Material Symbol icon name rendered on the right side of the input.
   * Has no effect when `type="password"` (the visibility toggle is shown instead).
   */
  icon?: string;

  /**
   * When `true`, renders the icon in its filled variant.
   * @default false
   */
  fillIcon?: boolean;

  /**
   * Label text displayed above the input field.
   * Automatically associated with the `<input>` via `htmlFor` / `id`
   * for full accessibility compliance (WCAG 2.1 SC 1.3.1).
   */
  label?: string;

  /**
   * When `true`, renders the input with error styling.
   * Use together with `textError` to display a validation message.
   * @default false
   */
  error?: boolean;

  /**
   * Validation message displayed below the input when `error` is `true`.
   */
  textError?: string;

  /**
   * Forwarded ref for the underlying `<input>` element.
   * Use this instead of the native `ref` prop to keep the component API explicit.
   */
  inputRef?: React.Ref<HTMLInputElement>;

  /**
   * When `true`, replaces the input with a `<Skeleton>` placeholder
   * matching the input's dimensions. Useful during data loading states.
   * @default false
   */
  skeleton?: boolean;
}
