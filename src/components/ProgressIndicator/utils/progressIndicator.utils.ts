import { ProgressIndicatorState } from "../ProgressIndicator.types";

/**
 * Maps each step state to its Material Symbol icon name.
 */
export const STATE_ICON: Record<ProgressIndicatorState, string> = {
  default: "circle",
  current: "trip_origin",
  error: "error",
  completed: "check_circle",
  disable: "circle",
};

/**
 * Returns the inline style object for `widthFull` behaviour.
 * Returns `undefined` when `widthFull` is false to avoid setting an empty style.
 */
export function getWidthStyle(
  widthFull: boolean,
): React.CSSProperties | undefined {
  return widthFull ? { width: "100%" } : undefined;
}
