import React from "react";
interface LineChartProps {
    data: any;
    legend?: boolean;
    lineStyles: {
        [key: string]: {
            color: string;
        };
    };
    dots?: boolean;
    label?: boolean;
    type?: "basis" | "basisClosed" | "basisOpen" | "bumpX" | "bumpY" | "bump" | "linear" | "linearClosed" | "natural" | "monotoneX" | "monotoneY" | "monotone" | "step" | "stepBefore" | "stepAfter";
}
export default function LineChart(props: LineChartProps): React.JSX.Element | null;
export {};
