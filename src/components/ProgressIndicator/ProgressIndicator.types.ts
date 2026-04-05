export type ProgressIndicatorState =
  | "default"
  | "current"
  | "error"
  | "completed"
  | "disable";

export type ProgressIndicatorDirection = "row" | "column";

export interface ProgressIndicatorProps {
  /**
   * Step label rendered as the heading (e.g. `"Step 1"`, `"Review"`).
   */
  step: string;

  /**
   * Optional supporting text displayed below the step label.
   */
  description?: string;

  /**
   * Visual state of the step indicator.
   *
   * - `"default"`   — neutral, not yet reached
   * - `"current"`   — currently active step
   * - `"error"`     — step has a validation error
   * - `"completed"` — step has been completed
   * - `"disable"`   — step is not reachable
   */
  state: ProgressIndicatorState;

  /**
   * Layout direction of the indicator.
   *
   * - `"row"`    — icon and text side by side
   * - `"column"` — icon above text
   */
  direction: ProgressIndicatorDirection;

  /**
   * Callback fired when the indicator is clicked.
   * Typically used to navigate to the corresponding step.
   */
  onClick?: () => void;

  /**
   * When `true`, the indicator stretches to fill the available width.
   * Useful for distributing steps evenly in a stepper row.
   * @default false
   */
  widthFull?: boolean;
}
