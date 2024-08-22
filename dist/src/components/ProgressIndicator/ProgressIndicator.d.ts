import React from "react";
import "./ProgressIndicator.scss";
interface ProgressIndicatorProps {
    step: string;
    description?: string;
    state: "default" | "current" | "error" | "completed" | "disable";
    direction: "row" | "column";
    onClick?: () => void;
    widthFull?: boolean;
}
declare const ProgressIndicator: React.FC<ProgressIndicatorProps>;
export default ProgressIndicator;
