import React from "react";
import type { LineChartProps } from "./LineChart.types";
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
declare const LineChart: React.FC<LineChartProps>;
export default LineChart;
