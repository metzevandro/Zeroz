export interface InputTimeProps {
  /**
   * Label displayed above the time input field.
   */
  label: string;

  /**
   * Placeholder text shown inside the input when empty.
   */
  placeholder: string;

  /**
   * Disables the input and prevents the picker from opening.
   * @default false
   */
  disabled?: boolean;

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
   * Callback fired whenever the time value changes.
   * Receives the time string in `HH:MM` format.
   */
  onChange: (value: string) => void;

  /**
   * Controlled time value in `HH:MM` format.
   * When provided, the component syncs its internal state to this value.
   */
  value?: string;
}

export interface TimeColumnProps {
  /** Array of zero-padded values to display (e.g. `["00", "01", ..., "23"]`). */
  values: string[];

  /** The currently selected value in this column. */
  selected: string;

  /** Callback fired when the user snaps to a new value. */
  onSelect: (value: string) => void;
}
