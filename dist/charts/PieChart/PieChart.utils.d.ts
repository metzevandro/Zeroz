import type { PieDataItem } from "./PieChart.types";
export declare const DEFAULT_COLORS: string[];
export declare const OTHERS_COLOR = "var(--s-color-chart-8)";
/**
 * Quando há mais de `MAX_VISIBLE_ITEMS` itens, agrupa os excedentes
 * (ordenados por quantidade decrescente) em uma fatia "Outros",
 * preservando os subitens para exibição detalhada no tooltip.
 */
export declare function processChartData(data: PieDataItem[]): PieDataItem[];
/**
 * Resolve a cor de preenchimento de uma célula do gráfico.
 * Fatias "Outros" sempre recebem `OTHERS_COLOR`.
 */
export declare function resolveCellColor(entry: PieDataItem, index: number): string;
