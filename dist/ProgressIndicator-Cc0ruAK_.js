import { jsxs, jsx } from 'react/jsx-runtime';
import { I as Icon } from './Icon-93G3RH-i.js';

/**
 * Maps each step state to its Material Symbol icon name.
 */
const STATE_ICON = {
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
function getWidthStyle(widthFull) {
    return widthFull ? { width: "100%" } : undefined;
}

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
const ProgressIndicator = ({ step, description, state, direction, onClick, widthFull = false, }) => {
    const icon = STATE_ICON[state];
    return (jsxs("div", { className: `progress-indicator ${direction} ${state}`, onClick: onClick, style: getWidthStyle(widthFull), children: [jsxs("div", { className: `header ${state}`, children: [jsx("div", { children: jsx(Icon, { icon: icon, size: "sm", fill: false }) }), jsx("h1", { children: step })] }), description && jsx("p", { children: description })] }));
};

export { ProgressIndicator as P };
