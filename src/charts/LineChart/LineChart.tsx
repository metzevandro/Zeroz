import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart as RechartsLineChart,
  XAxis,
  Tooltip,
  Legend,
  LabelList,
} from "recharts";

import CustomTooltip from "../Tooltip/Tooltip";
import CustomCaption from "../Caption/Caption";
import { useSkeletonData } from "./LineChart.hooks";
import { extractSeriesKeys } from "./LineChart.utils";
import type { LineChartProps } from "./LineChart.types";

const SKELETON_LINE_COLOR = "var(--s-color-fill-disable)";

/**
 * ## LineChart
 *
 * Gráfico de linhas construído sobre Recharts.
 * Suporta múltiplas séries, diferentes tipos de curva, tooltip,
 * legenda, labels de valor e estado skeleton animado.
 *
 * ### Quando usar
 * - Evolução de valores ao longo do tempo (ex: receita mensal)
 * - Comparação de tendências entre séries
 *
 * @example
 * // Uso básico com duas séries
 * <LineChart
 *   data={[{ month: "Jan", receita: 120, despesas: 80 }]}
 *   seriesStyles={{
 *     receita:  { color: "#4CAF50" },
 *     despesas: { color: "#F44336" },
 *   }}
 *   width={600}
 *   height={300}
 * />
 *
 * @example
 * // Com skeleton durante carregamento
 * <LineChart
 *   data={data}
 *   seriesStyles={styles}
 *   width={600}
 *   height={300}
 *   skeleton={isLoading}
 * />
 */
const LineChart: React.FC<LineChartProps> = ({
  data,
  seriesStyles,
  height,
  width,
  curveType = "natural",
  caption = false,
  dots = false,
  label = false,
  skeleton = false,
  tooltipFormatter,
  xAxisFormatter,
}) => {
  const skeletonData = useSkeletonData();
  const displayData = skeleton ? skeletonData : data;

  if (!displayData || displayData.length === 0) return null;

  const seriesKeys = extractSeriesKeys(displayData[0]);
  if (seriesKeys.length === 0) return null;

  return (
    <RechartsLineChart
      height={height}
      width={width}
      accessibilityLayer
      data={displayData}
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

      {!skeleton && caption && <Legend content={<CustomCaption />} />}

      {!skeleton && (
        <Tooltip
          cursor={false}
          formatter={tooltipFormatter}
          content={<CustomTooltip />}
        />
      )}

      {seriesKeys.map((key) => {
        const color = skeleton
          ? SKELETON_LINE_COLOR
          : (seriesStyles[key]?.color ?? "black");

        return (
          <Line
            key={key}
            dataKey={key}
            type={curveType}
            stroke={color}
            strokeWidth={2}
            dot={dots}
          >
            {!skeleton && label && (
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
    </RechartsLineChart>
  );
};

LineChart.displayName = "LineChart";

export default LineChart;
