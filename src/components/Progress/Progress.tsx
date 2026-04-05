import "./Progress.scss";
import React from "react";
import { ProgressProps } from "./Progress.types";
import { clampProgress, getProgressBarClass } from "./utils/progress.utils";

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
const Progress: React.FC<ProgressProps> = ({
  value,
  error = false,
  indeterminate = false,
}) => {
  const clamped = clampProgress(value);

  return (
    <div className="progress">
      {indeterminate ? (
        <div className="progress-bar-loading" />
      ) : (
        <div
          className={getProgressBarClass(clamped, error)}
          style={{ width: `${clamped}%` }}
        />
      )}
    </div>
  );
};

export default Progress;
