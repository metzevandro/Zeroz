import React from "react";
import {
  PieChart as Chart,
  Pie,
  Legend,
  Tooltip as ChartTooltip,
  Label,
  Cell,
  LabelList,
} from "recharts";
import CustomTooltip from "../Tooltip/Tooltip";
import "./PieChart.scss";
import CustomCaption from "../Caption/Caption";

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

export default function PieChart({
  data,
  labelList,
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
}: PieChartProps) {
  const totalQuantity = React.useMemo(() => {
    return data.reduce((acc, curr) => acc + curr.quantity, 0);
  }, [data]);

  const renderLabelList = () => {
    if (labelList) {
      return (
        <LabelList
          style={{ font: "var(--s-typography-caption-regular)" }}
          offset={12}
          dataKey="browser"
          stroke="none"
          fill="var(--s-color-content-on-color)"
        />
      );
    }
  };

  const renderLegend = () => {
    if (caption) {
      return <Legend content={<CustomCaption />} />;
    }
  };

  const renderTooltip = () => {
    if (!labelList) {
      return (
        <ChartTooltip
          formatter={tooltipFormatter}
          content={<CustomTooltip />}
        />
      );
    }
  };

  const renderLabel = () => {
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
                  {labelFormatter ? labelFormatter(totalQuantity) : totalQuantity}
         
                  </tspan>
                  <tspan
                    style={{
                      font: "var(--s-typography-caption-regular)",
                      fill: "var(--s-color-content-light)",
                    }}
                    x={viewBox.cx}
                    y={(viewBox.cy || 0) + 24}
                  >
                    {label}
                  </tspan>
                </text>
              );
            }
          }}
        />
      );
    }
  };

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
        data={data}
        dataKey={dataKey}
        nameKey={nameKey}
        innerRadius={type === "donut" ? innerRadius : 0}
        outerRadius={outerRadius}
        strokeWidth={1}
      >
        {renderLabelList()}
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.fill} stroke={entry.fill} />
        ))}
        {renderLabel()}
      </Pie>
    </Chart>
  );
}
