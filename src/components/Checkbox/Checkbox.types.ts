export interface CheckboxProps {
  /**
   * Controlled checked state of the checkbox.
   * When provided, the component syncs its internal state to this value.
   */
  modelValue?: boolean;

  /**
   * Value submitted with the form when the checkbox is checked.
   * Passed directly to the native `<input type="checkbox">` `value` attribute.
   */
  value?: string;

  /**
   * Label text rendered next to the checkbox.
   * When omitted, only the checkbox itself is rendered.
   */
  label?: string;

  /**
   * Explicit `id` for the underlying `<input>` element.
   * When omitted, a stable unique id is generated automatically.
   */
  id?: string;

  /**
   * `name` attribute forwarded to the native `<input>` — used to group
   * checkboxes within a form or submit the value to a server.
   */
  name?: string;

  /**
   * Marks the checkbox as required in a form context.
   * @default false
   */
  required?: boolean;

  /**
   * Renders the checkbox in the indeterminate (mixed) state.
   * Useful for "select all" patterns where only some children are checked.
   * @default false
   */
  indeterminate?: boolean;

  /**
   * When `true`, suppresses pointer events on the checkbox wrapper,
   * making it visually interactive but not clickable.
   * @default false
   */
  noEvents?: boolean;

  /**
   * When `true`, disables the checkbox and prevents any interaction.
   * @default false
   */
  disabled?: boolean;

  /**
   * Callback fired when the checked state changes.
   * Receives the new boolean value.
   */
  onUpdate?: (value: boolean) => void;
}
