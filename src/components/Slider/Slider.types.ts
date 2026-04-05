export interface SliderProps {
  /**
   * Minimum value of the slider (inclusive).
   */
  min: number;

  /**
   * Maximum value of the slider (inclusive).
   */
  max: number;

  /**
   * Step increment between selectable values.
   * Arrow key presses and drag snapping both respect this value.
   */
  step: number;

  /**
   * Controlled current value.
   * The component always stays in sync with this prop.
   */
  value: number;

  /**
   * Label rendered above the slider, associated with the number input
   * via `htmlFor` / `id` for accessibility.
   */
  label?: string;

  /**
   * Callback fired whenever the value changes — via drag, click, arrow keys,
   * or direct numeric input.
   * Receives the new value as a `number` (not a string).
   */
  onChange?: (value: number) => void;
}
