export interface RadioButtonProps {
  /**
   * Label text rendered next to the radio button.
   * Clicking the label also toggles the button.
   */
  label?: string;

  /**
   * Disables the radio button and prevents interaction.
   * @default false
   */
  disabled?: boolean;

  /**
   * Controlled checked state.
   * When provided, the component syncs its internal state to this value.
   */
  checked?: boolean;

  /**
   * Callback fired when the checked state changes.
   * Receives the new boolean value.
   */
  onChange?: (isChecked: boolean) => void;
}
