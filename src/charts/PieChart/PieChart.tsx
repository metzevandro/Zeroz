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
    "var(--s-color-chart-9)",
    "var(--s-color-chart-10)",
  ];

  const GRAY_COLOR = "var(--s-color-chart-8)";

  const processedData = React.useMemo(() => {
    if (skeleton) return data;
    if (data.length <= 5) return data;
    const sorted = [...data].sort((a, b) => b.quantity - a.quantity);
    const mainItems = sorted.slice(0, 4);
    const othersItems = sorted.slice(4).sort((a, b) => b.quantity - a.quantity);
    const othersTotal = othersItems.reduce(
      (acc, curr) => acc + curr.quantity,
      0,
    );
    return [
      ...mainItems,
      {
        quantity: othersTotal,
        keyName: "Outros",
        fill: GRAY_COLOR,
        others: othersItems,
      },
    ];
  }, [data, skeleton]);

  const renderLegend = () => {
    if (caption && !skeleton) {
      return (
        <Legend
          content={(props) => (
            <CustomCaption
              {...props}
              width={
                typeof props.width === "string"
                  ? Number(props.width)
                  : props.width
              }
              height={
                typeof props.height === "string"
                  ? Number(props.height)
                  : props.height
              }
            />
          )}
        />
      );
    }
  };

  const renderTooltip = () => {
    if (!skeleton) {
      return (
        <ChartTooltip
          formatter={tooltipFormatter}
          content={({
            active,
            payload,
            label,
          }: {
            active?: boolean;
            payload?: any[];
            label?: any;
          }) => {
            if (!active || !payload || !payload.length) return null;
            const item = payload[0].payload;
            if (
              item.keyName === "Outros" &&
              item.others &&
              item.others.length
            ) {
              return (
                <div className="TooltipContent">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "2px",
                        width: 10,
                        height: 10,
                        backgroundColor: item.fill,
                      }}
                    />
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <small
                        style={{
                          color: "var(--s-color-content-light)",
                        }}
                      >
                        Outros:
                      </small>
                      <small
                        style={{
                          color: "var(--s-color-content-default)",
                        }}
                      >
                        {tooltipFormatter
                          ? tooltipFormatter(item.quantity)
                          : item.quantity}
                      </small>
                    </div>
                  </div>
                  <div>
                    {item.others.map((o: PieData, idx: number) => (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                          gap: "var(--s-spacing-nano)",
                          alignItems: "center",
                        }}
                      >
                        <small
                          style={{
                            color: "var(--s-color-content-light)",
                          }}
                        >
                          {o.keyName}:
                        </small>
                        <small
                          style={{
                            color: "var(--s-color-content-default)",
                          }}
                        >
                          {tooltipFormatter
                            ? tooltipFormatter(o.quantity)
                            : o.quantity}
                        </small>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <CustomTooltip
                active={active}
                payload={payload as any}
                label={label}
                formatter={tooltipFormatter}
              />
            );
          }}
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
                      font: "var(--s-typography-heading-medium)",
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
        {(skeleton ? randomData : processedData).map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={
              entry.keyName === "Outros"
                ? GRAY_COLOR
                : entry.fill || defaultColors[index % defaultColors.length]
            }
            stroke={
              entry.keyName === "Outros"
                ? GRAY_COLOR
                : entry.fill || defaultColors[index % defaultColors.length]
            }
          />
        ))}
        {renderLabel(skeleton)}
      </Pie>
    </Chart>
  );
}
