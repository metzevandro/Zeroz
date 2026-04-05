export interface InputNumberProps {
  /**
   * Maximum allowed value (inclusive).
   * Increment button is blocked and typed values are clamped when this is reached.
   */
  max?: number;

  /**
   * Minimum allowed value (inclusive).
   * Decrement button is blocked and typed values are clamped when this is reached.
   * Also used as the initial value when no `value` prop is provided.
   */
  min?: number;

  /**
   * Placeholder text shown inside the input when the value is empty.
   */
  placeholder?: string;

  /**
   * Disables the input and both stepper buttons.
   * @default false
   */
  disabled?: boolean;

  /**
   * Label text rendered above the input field.
   * Associated with the input via `htmlFor` / `id` for accessibility.
   */
  label?: string;

  /**
   * Callback fired whenever the numeric value changes.
   * Receives `undefined` when the field is empty.
   */
  onChange?: (value: number | undefined) => void;

  /**
   * When `true`, renders the input with error styling.
   * @default false
   */
  error?: boolean;

  /**
   * Validation message displayed below the input when `error` is `true`.
   */
  textError?: string;

  /**
   * Controlled numeric value.
   * When provided, the component syncs its internal state to this value.
   */
  value?: number;
}
