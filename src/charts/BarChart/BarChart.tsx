import React from "react";
import {
  Bar,
  BarChart as Chart,
  CartesianGrid,
  Tooltip,
  XAxis,
  Legend,
  LabelList,
} from "recharts";
import CustomTooltip from "../Tooltip/Tooltip";
import CustomLegend from "../Legend/Legend";

import "./BarChart.scss";
interface BarChartProps {
  stacked?: boolean;
  data: any[];
  lineStyles: { [key: string]: { color: string } };
  legend?: boolean;
  label?: boolean;
  tooltipFormatter?: (value: any) => string;
  XAxisFormatter?: (value: any) => string;
  height: number;
  width: number;
}

export default function BarChart(props: BarChartProps) {
  const { data, stacked, lineStyles, legend, label, tooltipFormatter, XAxisFormatter, width, height } = props;
  const keys =
    data.length > 0
      ? Object.keys(data[0]).filter((key) => key !== "month")
      : [];

  return (
    <Chart
      accessibilityLayer
      data={data}
      height={height}
      width={width}
      margin={{
        top: 20,
        left: 20,
        right: 20,
      }}
    >
      <CartesianGrid vertical={false} stroke="var(--s-color-border-default)" />
      <XAxis
        dataKey="month"
        tickLine={false}
        tickMargin={10}
        axisLine={false}
        tickFormatter={XAxisFormatter}
        style={{ font: "var(--s-typography-caption-regular)" }}
        stroke="var(--s-color-content-light)"
      />
      <Tooltip formatter={tooltipFormatter} content={<CustomTooltip />} />
      {legend && <Legend content={<CustomLegend />} />}
      {keys.map((key, index) => {
        let radius: [number, number, number, number];
        if (stacked) {
          if (index === 0) {
            radius = [0, 0, 4, 4];
          } else if (index === keys.length - 1) {
            radius = [4, 4, 0, 0];
          } else {
            radius = [0, 0, 0, 0];
          }
        } else {
          radius = [4, 4, 4, 4];
        }

        return (
          <Bar
            key={key}
            dataKey={key}
            stackId={stacked ? "a" : undefined}
            fill={lineStyles[key]?.color || "black"}
            stroke={lineStyles[key]?.color || "black"}
            radius={radius}
          >
            {label && (
              <LabelList
                position="top"
                style={{ font: "var(--s-typography-caption-regular)" }}
                fill="var(--s-color-content-light)"
                offset={12}
              />
            )}
          </Bar>
        );
      })}
    </Chart>
  );
}
