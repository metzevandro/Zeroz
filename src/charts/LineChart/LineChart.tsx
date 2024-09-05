import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart as Chart,
  XAxis,
  Tooltip,
  Legend,
  LabelList,
} from "recharts";
import CustomTooltip from "../Tooltip/Tooltip";
import CustomLegend from "../Legend/Legend";

interface LineChartProps {
  data: any;
  legend?: boolean;
  lineStyles: { [key: string]: { color: string } };
  dots?: boolean;
  label?: boolean;
  tooltipFormatter?: (value: any) => string;
  XAxisFormatter?: (value: any) => string;

  height: number;
  width: number;
  type?:
    | "basis"
    | "basisClosed"
    | "basisOpen"
    | "bumpX"
    | "bumpY"
    | "bump"
    | "linear"
    | "linearClosed"
    | "natural"
    | "monotoneX"
    | "monotoneY"
    | "monotone"
    | "step"
    | "stepBefore"
    | "stepAfter";
}

export default function LineChart(props: LineChartProps) {
  const {
    legend,
    dots,
    label,
    type,
    data,
    lineStyles,
    tooltipFormatter,
    XAxisFormatter,
    height,
    width,
  } = props;

  if (!data || data.length === 0) {
    return null;
  }

  const keys = Object.keys(data[0]).filter((key) => key !== "month");

  if (keys.length === 0) {
    return null;
  }

  return (
    <Chart
      height={height}
      width={width}
      accessibilityLayer
      data={data}
      margin={{
        top: 20,
        left: 20,
        right: 20,
      }}
    >
      <CartesianGrid vertical={false} />
      <XAxis
        dataKey="month"
        tickLine={false}
        tickMargin={10}
        axisLine={false}
        tickFormatter={XAxisFormatter}
        style={{ font: "var(--s-typography-caption-regular)" }}
        stroke="var(--s-color-content-light)"
      />
      {legend && <Legend content={<CustomLegend />} />}
      <Tooltip
        cursor={false}
        formatter={tooltipFormatter}
        content={<CustomTooltip />}
      />
      {keys.map((key) => {
        const lineStyle = lineStyles[key] || {};
        return (
          <Line
            key={key}
            dataKey={key}
            type={type || "natural"}
            stroke={lineStyle.color || "black"}
            strokeWidth={2}
            dot={dots}
          >
            {label && (
              <LabelList
                dataKey={key}
                position="top"
                style={{ font: "var(--s-typography-caption-regular)" }}
                fill="var(--s-color-content-light)"
                offset={12}
              />
            )}
          </Line>
        );
      })}
    </Chart>
  );
}
