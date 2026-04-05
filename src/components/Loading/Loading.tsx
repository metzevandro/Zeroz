import "./Loading.scss";
import React from "react";
import Icon from "../Icon/Icon";
import { LoadingProps } from "./Loading.types";
import { LOADING_CONFIG } from "./utils/loading.utils";

/**
 * `Loading` renders a status indicator with an optional message.
 *
 * Four variants are available:
 * - `"default"` — animated spinner (sm) with optional message
 * - `"large"`   — animated spinner (lg), no message
 * - `"success"` — checkmark icon with optional message
 * - `"warning"` — warning icon with optional message
 *
 * @example
 * ```tsx
 * <Loading variant="default" message="Saving changes..." />
 * <Loading variant="large" />
 * <Loading variant="success" message="Saved successfully!" />
 * <Loading variant="warning" message="Something went wrong." />
 * ```
 */
const Loading: React.FC<LoadingProps> = ({ variant, message }) => {
  const { spanClass, icon, size, hasMessage } = LOADING_CONFIG[variant];

  const indicator = (
    <span className={spanClass}>
      <Icon icon={icon} size={size} />
    </span>
  );

  if (!hasMessage) return indicator;

  return (
    <div className="loading-with-message">
      {indicator}
      {message && <p className="loading-message">{message}</p>}
    </div>
  );
};

export default Loading;
