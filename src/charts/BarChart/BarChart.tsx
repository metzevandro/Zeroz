import React from "react";
import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  Legend,
  LabelList,
} from "recharts";

import CustomTooltip from "../Tooltip/Tooltip";
import CustomCaption from "../Caption/Caption";
import { extractSeriesKeys, resolveBarRadius } from "./BarChart.utils";
import type { BarChartProps } from "./BarChart.types";

import "./BarChart.scss";
import { useSkeletonData } from "./BarChart.hooks";

const SKELETON_BAR_COLOR = "var(--s-color-fill-default-light)";

/**
 * ## BarChart
 *
 * Gráfico de barras construído sobre Recharts.
 * Suporta barras agrupadas ou empilhadas, tooltip, legenda,
 * labels de valor e estado skeleton animado.
 *
 * ### Quando usar
 * - Comparação de valores entre categorias (ex: vendas por mês)
 * - Visualização de composição proporcional (modo `stacked`)
 *
 * @example
 * // Barras agrupadas com tooltip
 * <BarChart
 *   data={[{ month: "Jan", vendas: 120, devoluções: 30 }]}
 *   seriesStyles={{ vendas: { color: "#4CAF50" }, devoluções: { color: "#F44336" } }}
 *   width={600}
 *   height={300}
 * />
 *
 * @example
 * // Empilhado com legenda e skeleton
 * <BarChart
 *   data={data}
 *   seriesStyles={styles}
 *   width={600}
 *   height={300}
 *   stacked
 *   caption
 *   skeleton={isLoading}
 * />
 */
const BarChart: React.FC<BarChartProps> = ({
  data,
  seriesStyles,
  height,
  width,
  stacked = false,
  caption = false,
  label = false,
  skeleton = false,
  tooltipFormatter,
  xAxisFormatter,
}) => {
  const skeletonData = useSkeletonData();
  const displayData = skeleton ? skeletonData : data;

  if (!skeleton && displayData.length === 0) return null;

  const seriesKeys = extractSeriesKeys(displayData[0]);
  if (seriesKeys.length === 0) return null;

  return (
    <RechartsBarChart
      accessibilityLayer
      data={displayData}
      height={height}
      width={width}
      margin={{ top: 20, left: 20, right: 20 }}
    >
      <CartesianGrid vertical={false} stroke="var(--s-color-border-default)" />

      <XAxis
        dataKey="month"
        tickLine={false}
        tickMargin={10}
        axisLine={false}
        tickFormatter={xAxisFormatter}
        style={{ font: "var(--s-typography-caption-regular)" }}
        stroke="var(--s-color-content-light)"
      />

      {!skeleton && (
        <Tooltip formatter={tooltipFormatter} content={<CustomTooltip />} />
      )}

      {!skeleton && caption && <Legend content={<CustomCaption />} />}

      {seriesKeys.map((key, index) => {
        const radius = resolveBarRadius(index, seriesKeys.length, stacked);
        const color = skeleton
          ? SKELETON_BAR_COLOR
          : (seriesStyles[key]?.color ?? "black");

        return (
          <Bar
            key={key}
            dataKey={key}
            stackId={stacked ? "a" : undefined}
            fill={color}
            stroke={color}
            radius={radius}
          >
            {!skeleton && label && (
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
    </RechartsBarChart>
  );
};

BarChart.displayName = "BarChart";

export default BarChart;
