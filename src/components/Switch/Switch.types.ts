export interface SwitchProps {
  /**
   * Controlled on/off state.
   * When provided, the component syncs its internal state to this value.
   */
  modelValue?: boolean;

  /**
   * Value submitted with the form when the switch is on.
   * Passed directly to the native `<input type="checkbox">` `value` attribute.
   */
  value?: string;

  /**
   * Label text rendered next to the switch.
   * When omitted, only the toggle is rendered.
   */
  label?: string;

  /**
   * Explicit `id` for the underlying `<input>` element.
   * When omitted, a stable unique id is generated automatically via `useId()`.
   */
  id?: string;

  /**
   * `name` attribute forwarded to the native `<input>`.
   */
  name?: string;

  /**
   * Marks the switch as required in a form context.
   * @default false
   */
  required?: boolean;

  /**
   * When `true`, suppresses pointer events on the switch wrapper.
   * @default false
   */
  noEvents?: boolean;

  /**
   * Disables the switch and prevents interaction.
   * @default false
   */
  disabled?: boolean;

  /**
   * Callback fired when the switch state changes.
   * Receives the new boolean value.
   */
  onUpdate?: (value: boolean) => void;
}
