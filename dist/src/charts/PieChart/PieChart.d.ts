import React from "react";
import "./PieChart.scss";
interface PieData {
    quantity: number;
    keyName: string;
    fill: string;
}
interface PieChartProps {
    data: PieData[];
    label: string;
    caption: boolean;
    innerRadius: number;
    outerRadius: number;
    type: "donut" | "pie";
    tooltipFormatter?: (value: any) => string;
    labelFormatter?: (value: any) => string;
    height: number;
    width: number;
    dataKey: string;
    nameKey: string;
    skeleton?: boolean;
}
export default function PieChart({ data, label, caption, innerRadius, outerRadius, type, tooltipFormatter, labelFormatter, height, width, dataKey, nameKey, skeleton, }: PieChartProps): React.JSX.Element;
export {};
