import React, { useEffect, useState } from "react";
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
import CustomCaption from "../Caption/Caption";

import "./BarChar.scss";

interface BarChartProps {
  stacked?: boolean;
  data: any[];
  lineStyles: { [key: string]: { color: string } };
  caption?: boolean;
  label?: boolean;
  tooltipFormatter?: (value: any) => string;
  XAxisFormatter?: (value: any) => string;
  height: number;
  width: number;
  skeleton?: boolean;
}

export default function BarChart(props: BarChartProps) {
  const {
    data,
    stacked,
    lineStyles,
    caption,
    label,
    tooltipFormatter,
    XAxisFormatter,
    width,
    height,
    skeleton,
  } = props;

  const [randomData, setRandomData] = useState(data);

  useEffect(() => {
    const interval = setInterval(() => {
      const newRandomData = data.map((item) => {
        const randomValues = Object.keys(item).reduce((acc, key) => {
          if (key === "month") {
            acc[key] = item[key];
          } else {
            acc[key] = Math.floor(Math.random() * 100);
          }
          return acc;
        }, {} as any);

        return randomValues;
      });
      setRandomData(newRandomData);
    }, 2000);

    return () => clearInterval(interval);
  }, [skeleton, data]);

  const keys =
    randomData.length > 0
      ? Object.keys(randomData[0]).filter((key) => key !== "month")
      : [];

  return (
    <Chart
      accessibilityLayer
      data={randomData}
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
      {!skeleton && (
        <Tooltip formatter={tooltipFormatter} content={<CustomTooltip />} />
      )}
      {!skeleton && caption && <Legend content={<CustomCaption />} />}
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
            fill={
              skeleton
                ? "var(--s-color-fill-default-light)"
                : lineStyles[key]?.color || "black"
            }
            stroke={
              skeleton
                ? "var(--s-color-fill-default-light)"
                : lineStyles[key]?.color || "black"
            }
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
