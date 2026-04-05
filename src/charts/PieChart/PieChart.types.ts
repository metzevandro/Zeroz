import type { Formatter } from "recharts/types/component/DefaultTooltipContent";

/** Item de dado individual do gráfico. */
export interface PieDataItem {
  quantity: number;
  keyName: string;
  fill: string;
  others?: PieDataItem[];
}

export interface PieChartProps {
  data: PieDataItem[];
  width: number;
  height: number;
  innerRadius: number;
  outerRadius: number;
  type: "donut" | "pie";
  dataKey: string;
  nameKey: string;
  label?: string;
  caption?: boolean;
  skeleton?: boolean;

  /**
   * Formata o valor exibido no tooltip.
   * `value` é `number` pois o `dataKey` aponta para `quantity: number`.
   */
  tooltipFormatter?: Formatter<number, string>;

  /**
   * Formata o total exibido no centro do donut.
   * Recebe o total somado de todos os `quantity`.
   */
  labelFormatter?: (value: number) => string;
}
