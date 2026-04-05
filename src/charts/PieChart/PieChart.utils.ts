import type { PieDataItem } from "./PieChart.types";

export const DEFAULT_COLORS = [
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

export const OTHERS_COLOR = "var(--s-color-chart-8)";

const MAX_VISIBLE_ITEMS = 5;
const OTHERS_LABEL = "Outros";

/**
 * Quando há mais de `MAX_VISIBLE_ITEMS` itens, agrupa os excedentes
 * (ordenados por quantidade decrescente) em uma fatia "Outros",
 * preservando os subitens para exibição detalhada no tooltip.
 */
export function processChartData(data: PieDataItem[]): PieDataItem[] {
  if (data.length <= MAX_VISIBLE_ITEMS) return data;

  const sorted = [...data].sort((a, b) => b.quantity - a.quantity);
  const mainItems = sorted.slice(0, MAX_VISIBLE_ITEMS - 1);
  const othersItems = sorted.slice(MAX_VISIBLE_ITEMS - 1);
  const othersTotal = othersItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return [
    ...mainItems,
    {
      quantity: othersTotal,
      keyName: OTHERS_LABEL,
      fill: OTHERS_COLOR,
      others: othersItems,
    },
  ];
}

/**
 * Resolve a cor de preenchimento de uma célula do gráfico.
 * Fatias "Outros" sempre recebem `OTHERS_COLOR`.
 */
export function resolveCellColor(entry: PieDataItem, index: number): string {
  if (entry.keyName === OTHERS_COLOR) return OTHERS_COLOR;
  return entry.fill || DEFAULT_COLORS[index % DEFAULT_COLORS.length];
}
