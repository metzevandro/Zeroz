import React from "react";
import "./Tooltip.scss";
interface TooltipProps {
  text: string;
  children: React.ReactNode;
  direction: "top" | "bottom" | "right" | "left";
}
declare const Tooltip: React.FC<TooltipProps>;
export default Tooltip;
