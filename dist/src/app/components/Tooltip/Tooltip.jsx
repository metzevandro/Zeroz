// Tooltip.tsx
import React, { useState } from "react";
import "./Tooltip.scss";
var Tooltip = function (_a) {
  var text = _a.text,
    children = _a.children,
    direction = _a.direction;
  var _b = useState(false),
    isVisible = _b[0],
    setIsVisible = _b[1];
  var handleMouseEnter = function () {
    setIsVisible(true);
  };
  var handleMouseLeave = function () {
    setIsVisible(false);
  };
  return (
    <div
      className={"tooltip-root ".concat(direction)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && (
        <div className={"tooltip-container ".concat(direction)}>
          <div className={"tooltip-icon ".concat(direction)}></div>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
};
export default Tooltip;
