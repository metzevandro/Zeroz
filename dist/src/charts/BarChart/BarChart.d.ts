import React from "react";
import "./BarChart.scss";
interface BarChartProps {
    stacked?: boolean;
    data: any[];
    lineStyles: {
        [key: string]: {
            color: string;
        };
    };
    legend?: boolean;
    label?: boolean;
}
export default function BarChart(props: BarChartProps): React.JSX.Element;
export {};
