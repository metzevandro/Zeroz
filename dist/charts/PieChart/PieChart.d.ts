import React from "react";
import type { PieChartProps } from "./PieChart.types";
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
declare const PieChart: React.FC<PieChartProps>;
export default PieChart;
