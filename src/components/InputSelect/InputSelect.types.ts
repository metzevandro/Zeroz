export interface InputSelectProps {
  /**
   * Array of option strings to display in the dropdown.
   */
  options: string[];

  /**
   * Label rendered above the select field.
   * Associated with the trigger via `aria-labelledby` for accessibility.
   */
  label?: string;

  /**
   * When `true`, renders the field in error styling and disables interaction.
   * Use together with `errorMessage`.
   * @default false
   */
  error?: boolean;

  /**
   * Validation message displayed below the field when `error` is `true`.
   */
  errorMessage?: string;

  /**
   * Disables the select field.
   * @default false
   */
  disabled?: boolean;

  /**
   * Callback fired when the user selects an option.
   * Receives the selected string value.
   */
  onChange: (value: string) => void;

  /**
   * Controlled selected value.
   * When provided, the component syncs its internal state to this value.
   */
  value?: string;
}