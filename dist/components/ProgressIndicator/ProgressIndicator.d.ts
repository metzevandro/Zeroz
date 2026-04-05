import "./ProgressIndicator.scss";
import React from "react";
import { ProgressIndicatorProps } from "./ProgressIndicator.types";
/**
 * `ProgressIndicator` renders a single step in a multi-step flow.
 *
 * Each step has a state-driven icon, a label, and an optional description.
 * Steps can be arranged horizontally (`"row"`) or vertically (`"column"`),
 * and can expand to fill available width via `widthFull` for even distribution.
 *
 * @example
 * ```tsx
 * // Horizontal stepper
 * <div style={{ display: "flex" }}>
 *   <ProgressIndicator step="Details"  state="completed" direction="row" widthFull onClick={goTo(0)} />
 *   <ProgressIndicator step="Payment"  state="current"   direction="row" widthFull onClick={goTo(1)} />
 *   <ProgressIndicator step="Confirm"  state="default"   direction="row" widthFull />
 * </div>
 * ```
 */
declare const ProgressIndicator: React.FC<ProgressIndicatorProps>;
export default ProgressIndicator;
