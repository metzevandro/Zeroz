'use strict';

var jsxRuntime = require('react/jsx-runtime');

/**
 * Clamps a progress value to the valid `[0, 100]` range.
 */
function clampProgress(value) {
    return Math.min(100, Math.max(0, value));
}
/**
 * Builds the CSS class string for the determinate progress bar,
 * applying state-based modifiers for success and error.
 */
function getProgressBarClass(value, error) {
    return [
        "progress-bar",
        value === 100 && "progress-bar-success",
        error && "progress-bar-error",
    ]
        .filter(Boolean)
        .join(" ");
}

/**
 * `Progress` displays the completion status of a task as a horizontal bar.
 *
 * Supports three visual states:
 * - **Determinate** — fills proportionally to `value` (0–100)
 * - **Success** — applied automatically when `value` reaches `100`
 * - **Error** — applied via the `error` prop to indicate failure
 * - **Indeterminate** — animated loading bar when progress is unknown
 *
 * @example
 * ```tsx
 * // Determinate
 * <Progress value={65} />
 *
 * // Complete
 * <Progress value={100} />
 *
 * // Error
 * <Progress value={40} error />
 *
 * // Indeterminate (e.g. during an API call)
 * <Progress value={0} indeterminate />
 * ```
 */
const Progress = ({ value, error = false, indeterminate = false, }) => {
    const clamped = clampProgress(value);
    return (jsxRuntime.jsx("div", { className: "progress", children: indeterminate ? (jsxRuntime.jsx("div", { className: "progress-bar-loading" })) : (jsxRuntime.jsx("div", { className: getProgressBarClass(clamped, error), style: { width: `${clamped}%` } })) }));
};

exports.Progress = Progress;
