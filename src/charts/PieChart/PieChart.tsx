import React from "react";
import {
  PieChart as RechartsPieChart,
  Pie,
  Legend,
  Tooltip as ChartTooltip,
  Label,
  Cell,
} from "recharts";

import CustomTooltip from "../Tooltip/Tooltip";
import CustomCaption from "../Caption/Caption";
import { usePieSkeletonData } from "./PieChart.hooks";
import {
  processChartData,
  resolveCellColor,
  OTHERS_COLOR,
} from "./PieChart.utils";
import type { PieChartProps, PieDataItem } from "./PieChart.types";

import "./PieChart.scss";

/**
 * ## PieChart
 *
 * Gráfico de pizza ou rosca construído sobre Recharts.
 * Quando há mais de 5 itens, os excedentes são agrupados
 * automaticamente em uma fatia "Outros" com tooltip detalhado.
 *
 * ### Quando usar
 * - Composição proporcional de um todo (ex: distribuição de categorias)
 * - Modo `donut` quando se quer exibir um total central
 *
 * @example
 * // Donut com total formatado
 * <PieChart
 *   type="donut"
 *   data={[{ quantity: 60, keyName: "A", fill: "#4CAF50" }]}
 *   label="transações"
 *   labelFormatter={(v) => v.toLocaleString()}
 *   dataKey="quantity"
 *   nameKey="keyName"
 *   innerRadius={60}
 *   outerRadius={90}
 *   width={300}
 *   height={300}
 * />
 */
const PieChart: React.FC<PieChartProps> = ({
  data,
  label,
  caption = false,
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
}) => {
  const skeletonData = usePieSkeletonData();
  const processedData = React.useMemo(() => processChartData(data), [data]);

  const displayData = skeleton ? skeletonData : processedData;

  const totalQuantity = React.useMemo(
    () => data.reduce((acc, curr) => acc + curr.quantity, 0),
    [data],
  );

  const formatTooltipValue = (
    value: number,
    name: string,
    item?: any,
    index?: number,
    payload?: any[],
  ) => {
    if (!tooltipFormatter) return value;
    return tooltipFormatter(
      value,
      name,
      item as any,
      index ?? 0,
      payload ?? [],
    );
  };

  return (
    <RechartsPieChart
      height={height}
      width={width}
      margin={{ top: 20, left: 20, right: 20 }}
    >
      {!skeleton && (
        <ChartTooltip
          formatter={tooltipFormatter}
          content={({ active, payload, label: ttLabel }) => {
            if (!active || !payload?.length) return null;

            const item = payload[0].payload as PieDataItem;

            // Fatia "Outros" — exibe subitens detalhados
            if (item.keyName === "Outros" && item.others?.length) {
              return (
                <div className="TooltipContent pie-chart-tooltip">
                  <div className="tooltip-others-header">
                    <div
                      className="tooltip-color-dot"
                      style={{ backgroundColor: item.fill }}
                    />
                    <div className="tooltip-row">
                      <small className="tooltip-label">Outros:</small>
                      <small className="tooltip-value">
                        {tooltipFormatter
                          ? formatTooltipValue(item.quantity, item.keyName)
                          : item.quantity}
                      </small>
                    </div>
                  </div>
                  <div>
                    {item.others.map((o, idx) => (
                      <div key={idx} className="tooltip-row">
                        <small className="tooltip-label">{o.keyName}:</small>
                        <small className="tooltip-value">
                          {tooltipFormatter
                            ? formatTooltipValue(o.quantity, o.keyName)
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
                payload={payload as never}
                label={ttLabel}
                formatter={tooltipFormatter}
              />
            );
          }}
        />
      )}

      {/* ── Legenda ─────────────────────────────────────────── */}
      {!skeleton && caption && (
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
      )}

      {/* ── Fatias ──────────────────────────────────────────── */}
      <Pie
        data={displayData}
        dataKey={dataKey}
        nameKey={nameKey}
        innerRadius={skeleton ? 0 : type === "donut" ? innerRadius : 0}
        outerRadius={outerRadius}
        strokeWidth={1}
        isAnimationActive={!skeleton}
      >
        {displayData.map((entry, index) => {
          const color = resolveCellColor(entry, index);
          return <Cell key={`cell-${index}`} fill={color} stroke={color} />;
        })}

        {type === "donut" && (
          <Label
            content={({ viewBox }) => {
              if (!viewBox || !("cx" in viewBox) || !("cy" in viewBox)) {
                return null;
              }
              const { cx, cy } = viewBox as { cx: number; cy: number };

              return (
                <text
                  x={cx}
                  y={cy}
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  <tspan
                    style={{
                      font: "var(--s-typography-heading-medium)",
                      fill: skeleton
                        ? "transparent"
                        : "var(--s-color-content-default)",
                    }}
                    x={cx}
                    y={cy}
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
                      fill: skeleton
                        ? "transparent"
                        : "var(--s-color-content-light)",
                    }}
                    x={cx}
                    y={cy + 24}
                  >
                    {skeleton ? "" : label}
                  </tspan>
                </text>
              );
            }}
          />
        )}
      </Pie>
    </RechartsPieChart>
  );
};

PieChart.displayName = "PieChart";

export default PieChart;
