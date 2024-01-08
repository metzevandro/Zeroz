// Tooltip.tsx
import React, { useState } from "react";
import "./Tooltip.scss";
import Icon from "../Icon/Icon";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  direction:
    | "top"
    | "bottom"
    | "right"
    | "left"
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left";
}

const Tooltip: React.FC<TooltipProps> = ({ text, children, direction }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={`tooltip-root ${direction}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && (
        <div className={`tooltip-container ${direction}`}>
          <div className={`tooltip-icon ${direction}`}>
            <Icon icon="arrow_drop_down" size="md" />
          </div>
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
