import "./Tooltip.scss";
import React from "react";
import { TooltipProps } from "./Tooltip.types";
import { useTooltip } from "./hooks/useTooltip";

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
const Tooltip: React.FC<TooltipProps> = ({ text, children, direction }) => {
  const { isVisible, handleMouseEnter, handleMouseLeave } = useTooltip();

  return (
    <div
      className={`tooltip-root ${direction}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div className={`tooltip-container ${isVisible ? "visible" : ""}`}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Tooltip;
