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
    caption?: boolean;
    label?: boolean;
    tooltipFormatter?: (value: any) => string;
    XAxisFormatter?: (value: any) => string;
    height: number;
    width: number;
}
export default function BarChart(props: BarChartProps): React.JSX.Element;
export {};
