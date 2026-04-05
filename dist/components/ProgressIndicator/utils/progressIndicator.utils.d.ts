import { ProgressIndicatorState } from "../ProgressIndicator.types";
/**
 * Maps each step state to its Material Symbol icon name.
 */
export declare const STATE_ICON: Record<ProgressIndicatorState, string>;
/**
 * Returns the inline style object for `widthFull` behaviour.
 * Returns `undefined` when `widthFull` is false to avoid setting an empty style.
 */
export declare function getWidthStyle(widthFull: boolean): React.CSSProperties | undefined;
