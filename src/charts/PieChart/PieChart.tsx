import React, { useEffect, useState } from "react";
import {
  PieChart as Chart,
  Pie,
  Legend,
  Tooltip as ChartTooltip,
  Label,
  Cell,
  LabelList,
  Sector,
} from "recharts";
import CustomTooltip from "../Tooltip/Tooltip";
import "./PieChart.scss";
import CustomCaption from "../Caption/Caption";

interface PieData {
  quantity: number;
  keyName: string;
  fill: string;
  others?: PieData[];
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

export default function PieChart({
  data,
  label,
  caption,
  innerRadius,
  outerRadius,
  type,
  tooltipFormatter,
  labelFormatter,
  height,
  width,
  dataKey,
  nameKey,
  skeleton = false,
}: PieChartProps) {
  const totalQuantity = React.useMemo(() => {
    return data.reduce((acc, curr) => acc + curr.quantity, 0);
  }, [data]);

  const defaultColors = [
    "var(--s-color-chart-1)",
    "var(--s-color-chart-2)",
    "var(--s-color-chart-3)",
    "var(--s-color-chart-4)",
    "var(--s-color-chart-5)",
    "var(--s-color-chart-6)",
    "var(--s-color-chart-7)",
    "var(--s-color-chart-8)",
    "var(--s-color-chart-9)",
    "var(--s-color-chart-10)",
  ];

  const processedData = React.useMemo(() => {
    if (skeleton) return data;
    if (data.length <= 5) return data;
    const sorted = [...data].sort((a, b) => b.quantity - a.quantity);
    const main = sorted.slice(0, 5);
    const others = sorted.slice(5);
    const othersQuantity = others.reduce((acc, curr) => acc + curr.quantity, 0);
    if (othersQuantity === 0) return main;
    const othersColor =
      main.length < defaultColors.length
        ? defaultColors[main.length]
        : defaultColors[defaultColors.length - 1];
    return [
      ...main,
      {
        quantity: othersQuantity,
        keyName: "Outros",
        fill: othersColor,
        others,
      },
    ];
  }, [data, skeleton]);

  const renderLegend = () => {
    if (caption && !skeleton) {
      return (
        <Legend
          content={
            <CustomCaption
              othersData={
                processedData.find((d) => d.keyName === "Outros")?.others
              }
            />
          }
        />
      );
    }
  };

  const renderTooltip = () => {
    if (!skeleton) {
      return (
        <ChartTooltip
          formatter={tooltipFormatter}
          content={
            <CustomTooltip
              othersData={
                processedData.find((d) => d.keyName === "Outros")?.others
              }
            />
          }
        />
      );
    }
  };

  const renderLabel = (skeleton: boolean) => {
    if (type === "donut") {
      return (
        <Label
          content={({ viewBox }) => {
            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
              return (
                <text
                  x={viewBox.cx}
                  y={viewBox.cy}
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  <tspan
                    style={{
                      font: "var(--s-typography-heading-x-large)",
                      fill: "var(--s-color-content-default)",
                    }}
                    x={viewBox.cx}
                    y={viewBox.cy}
                  >
                    {skeleton
                      ? ""
                      : labelFormatter
                        ? labelFormatter(totalQuantity)
                        : totalQuantity}
                  </tspan>

                  <tspan
                    style={{
                      font: "var(--s-typography-caption-regular)",
                      fill: "var(--s-color-content-light)",
                    }}
                    x={viewBox.cx}
                    y={(viewBox.cy || 0) + 24}
                  >
                    {skeleton ? "" : label}
                  </tspan>
                </text>
              );
            }
          }}
        />
      );
    }
  };

  const [randomData, setRandomData] = useState<PieData[]>([]);

  useEffect(() => {
    let toggle = true;

    const generateData = () =>
      Array.from({ length: 2 }, (_, index) => ({
        quantity: index === 0 ? (toggle ? 0 : 100) : toggle ? 100 : 0,
        keyName: `Item ${index + 1}`,
        fill:
          index % 2 === 0
            ? "var(--s-color-fill-default-light)"
            : "var(--s-color-fill-disable)",
        stroke:
          index % 2 === 0
            ? "var(--s-color-fill-default-light)"
            : "var(--s-color-fill-disable)",
      }));

    setRandomData(generateData());

    const interval = setInterval(() => {
      toggle = !toggle;
      setRandomData(generateData());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Chart
      height={height}
      width={width}
      margin={{
        top: 20,
        left: 20,
        right: 20,
      }}
    >
      {renderTooltip()}
      {renderLegend()}
      <Pie
        data={skeleton ? randomData : processedData}
        dataKey={dataKey}
        nameKey={nameKey}
        innerRadius={skeleton ? 0 : type === "donut" ? innerRadius : 0}
        outerRadius={outerRadius}
        strokeWidth={1}
      >
        {skeleton
          ? randomData.map((entry, index) => (
              <Cell
                key={`skeleton-cell-${index}-${entry.keyName}`}
                fill={entry.fill}
              />
            ))
          : processedData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.fill || defaultColors[index % defaultColors.length]}
                stroke={
                  entry.fill || defaultColors[index % defaultColors.length]
                }
              />
            ))}

        {renderLabel(skeleton)}
      </Pie>
    </Chart>
  );
}
