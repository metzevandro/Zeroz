import "./ProgressIndicator.scss";
import React from "react";
import Icon from "../Icon/Icon";
import { ProgressIndicatorProps } from "./ProgressIndicator.types";
import { STATE_ICON, getWidthStyle } from "./utils/progressIndicator.utils";

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
const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  step,
  description,
  state,
  direction,
  onClick,
  widthFull = false,
}) => {
  const icon = STATE_ICON[state];

  return (
    <div
      className={`progress-indicator ${direction} ${state}`}
      onClick={onClick}
      style={getWidthStyle(widthFull)}
    >
      <div className={`header ${state}`}>
        <div>
          <Icon icon={icon} size="sm" fill={false} />
        </div>
        <h1>{step}</h1>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
};

export default ProgressIndicator;
