import React from "react";
import "./PieChart.scss";
interface PieData {
    visitors: number;
    browser: string;
    fill: string;
}
interface PieChartProps {
    data: PieData[];
    labelList: boolean;
    label: string;
    legend: boolean;
    innerRadius: number;
    outerRadius: number;
    type: "donut" | "pie";
    tooltipFormatter?: (value: any) => string;
    height: number;
    width: number;
}
export default function PieChart({ data, labelList, label, legend, innerRadius, outerRadius, type, tooltipFormatter, height, width, }: PieChartProps): React.JSX.Element;
export {};
