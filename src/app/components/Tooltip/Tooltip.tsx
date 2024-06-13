// Tooltip.tsx
import React, { useState } from "react";
import "./Tooltip.scss";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  direction:
    | "top"
    | "bottom"
    | "right"
    | "left";
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
          </div>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
