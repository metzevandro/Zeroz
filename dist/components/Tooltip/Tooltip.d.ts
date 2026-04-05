import "./Tooltip.scss";
import React from "react";
import { TooltipProps } from "./Tooltip.types";
/**
 * `Tooltip` displays a contextual text bubble when the user hovers over
 * its child element. The bubble appears in the specified `direction` and
 * includes a CSS-drawn arrow pointing back toward the trigger.
 *
 * @example
 * ```tsx
 * <Tooltip text="Copy to clipboard" direction="top">
 *   <ButtonIcon icon="content_copy" />
 * </Tooltip>
 *
 * <Tooltip text="More options" direction="right">
 *   <ButtonIcon icon="more_vert" />
 * </Tooltip>
 * ```
 */
declare const Tooltip: React.FC<TooltipProps>;
export default Tooltip;
