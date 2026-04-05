import React from "react";
import type { BarChartProps } from "./BarChart.types";
import "./BarChart.scss";
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
declare const BarChart: React.FC<BarChartProps>;
export default BarChart;
