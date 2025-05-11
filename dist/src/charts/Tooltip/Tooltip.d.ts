import React from "react";
import { TooltipProps } from "recharts";
import "./Tooltip.scss";
declare const CustomTooltip: React.FC<TooltipProps<number, string> & {
    othersData?: any[];
}>;
export default CustomTooltip;
