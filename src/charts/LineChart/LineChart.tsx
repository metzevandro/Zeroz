import React, { useEffect, useState } from "react";
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
import CustomCaption from "../Caption/Caption";

interface LineChartProps {
  data: any;
  caption?: boolean;
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
  skeleton?: boolean;
}

export default function LineChart(props: LineChartProps) {
  const {
    caption,
    dots,
    label,
    type,
    data,
    lineStyles,
    tooltipFormatter,
    XAxisFormatter,
    height,
    width,
    skeleton,
  } = props;
  const [randomData, setRandomData] = useState<any[]>([]);

  const displayData = skeleton ? randomData : data;

  useEffect(() => {
    const generateData = () =>
      Array.from({ length: 10 }, (_, index) => ({
        month: `Month ${index + 1}`,
        value1: Math.floor(Math.random() * 100),
        value2: Math.floor(Math.random() * 100),
      }));

    const generatedData = generateData();
    setRandomData(generatedData);

    const interval = setInterval(() => {
      setRandomData(generateData());
    }, 1500);

    return () => clearInterval(interval);
  }, [skeleton]);

  if (!displayData || displayData.length === 0) {
    return null;
  }

  const keys = Object.keys(displayData[0]).filter((key) => key !== "month");

  if (keys.length === 0) {
    return null;
  }

  return (
    <Chart
      height={height}
      width={width}
      accessibilityLayer
      data={displayData}
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
      {!skeleton && caption && <Legend content={<CustomCaption />} />}
      {!skeleton && (
        <Tooltip
          cursor={false}
          formatter={tooltipFormatter}
          content={<CustomTooltip />}
        />
      )}

      {keys.map((key) => {
        const lineStyle = skeleton
          ? { color: "var(--s-color-fill-disable)" }
          : lineStyles[key] || {};
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
