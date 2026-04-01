export interface ProgressProps {
  /**
   * Current progress value between `0` and `100`.
   * Values outside this range are clamped automatically.
   * Ignored when `indeterminate` is `true`.
   */
  value: number;

  /**
   * When `true`, renders the bar in error styling.
   * Typically used to communicate a failed operation.
   * @default false
   */
  error?: boolean;

  /**
   * When `true`, renders an animated indeterminate bar
   * instead of a determinate fill. Use when the total
   * progress is unknown (e.g. during an API call with no progress event).
   * @default false
   */
  indeterminate?: boolean;
}