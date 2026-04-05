import "./Loading.scss";
import React from "react";
import { LoadingProps } from "./Loading.types";
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
declare const Loading: React.FC<LoadingProps>;
export default Loading;
