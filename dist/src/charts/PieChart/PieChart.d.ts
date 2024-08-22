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
}
export default function PieChart({ data, labelList, label, legend, innerRadius, outerRadius, type, }: PieChartProps): React.JSX.Element;
export {};
