import React from "react";
import "./PieChart.scss";
interface PieData {
    quantity: number;
    keyName: string;
    fill: string;
}
interface PieChartProps {
    data: PieData[];
    labelList: boolean;
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
}
export default function PieChart({ data, labelList, label, caption, innerRadius, outerRadius, type, tooltipFormatter, labelFormatter, height, width, dataKey, nameKey, }: PieChartProps): React.JSX.Element;
export {};
