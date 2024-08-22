import "./Progress.scss";
import React from "react";
interface ProgressProps {
    value: number;
    error?: boolean;
    indeterminate?: boolean;
}
declare const Progress: React.FC<ProgressProps>;
export default Progress;
