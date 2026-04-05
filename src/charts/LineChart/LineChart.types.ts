import type { Formatter } from "recharts/types/component/DefaultTooltipContent";

/** Tipos de interpolação disponíveis para as linhas do gráfico. */
export type LineChartCurveType =
  | "basis"
  | "basisClosed"
  | "basisOpen"
  | "bumpX"
  | "bumpY"
  | "bump"
  | "linear"
  | "linearClosed"
  | "natural"
  | "monotoneX"
  | "monotoneY"
  | "monotone"
  | "step"
  | "stepBefore"
  | "stepAfter";

/** Estilo visual de uma série (linha) do gráfico. */
export interface LineSeriesStyle {
  /** Cor da linha. */
  color: string;
}

/**
 * Props do componente LineChart.
 */
export interface LineChartProps {
  /**
   * Dados do gráfico. Cada objeto deve ter uma chave `month` (eixo X)
   * e uma chave por série, correspondendo às chaves de `seriesStyles`.
   *
   * @example
   * [
   *   { month: "Jan", receita: 120, despesas: 80 },
   *   { month: "Fev", receita: 95,  despesas: 60 },
   * ]
   */
  data: Record<string, unknown>[];

  /**
   * Mapa de estilos por série. As chaves devem corresponder
   * às chaves dos objetos em `data` (exceto `month`).
   *
   * @example
   * { receita: { color: "#4CAF50" }, despesas: { color: "#F44336" } }
   */
  seriesStyles: Record<string, LineSeriesStyle>;

  /** Altura do gráfico em pixels. */
  height: number;

  /** Largura do gráfico em pixels. */
  width: number;

  /**
   * Tipo de interpolação da curva.
   * @default "natural"
   */
  curveType?: LineChartCurveType;

  /** Exibe a legenda abaixo do gráfico. @default false */
  caption?: boolean;

  /** Exibe pontos em cada dado da linha. @default false */
  dots?: boolean;

  /** Exibe o valor de cada ponto como label. @default false */
  label?: boolean;

  /** Exibe estado de skeleton animado enquanto os dados carregam. @default false */
  skeleton?: boolean;

  /**
   * Formata o valor exibido no tooltip.
   * Usa o tipo `Formatter` do Recharts para compatibilidade total.
   */
  tooltipFormatter?: Formatter<string, string>;

  /** Formata os ticks do eixo X. O Recharts sempre fornece `string` neste callback. */
  xAxisFormatter?: (value: string) => string;
}
