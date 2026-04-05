/**
 * Estilo visual de uma série (barra) do gráfico.
 */
export interface BarSeriesStyle {
    /** Cor de preenchimento da barra. */
    color: string;
}
/**
 * Props do componente BarChart.
 */
export interface BarChartProps {
    /**
     * Dados do gráfico. Cada objeto deve ter uma chave `month` (eixo X)
     * e uma chave por série, correspondendo às chaves de `seriesStyles`.
     *
     * @example
     * [
     *   { month: "Jan", vendas: 120, devoluções: 30 },
     *   { month: "Fev", vendas: 95,  devoluções: 15 },
     * ]
     */
    data: Record<string, unknown>[];
    /**
     * Mapa de estilos por série. As chaves devem corresponder
     * às chaves dos objetos em `data` (exceto `month`).
     *
     * @example
     * { vendas: { color: "#4CAF50" }, devoluções: { color: "#F44336" } }
     */
    seriesStyles: Record<string, BarSeriesStyle>;
    /** Altura do gráfico em pixels. */
    height: number;
    /** Largura do gráfico em pixels. */
    width: number;
    /** Empilha as barras de cada série verticalmente. @default false */
    stacked?: boolean;
    /** Exibe a legenda abaixo do gráfico. @default false */
    caption?: boolean;
    /** Exibe o valor de cada barra como label. @default false */
    label?: boolean;
    /** Exibe estado de skeleton animado enquanto os dados carregam. @default false */
    skeleton?: boolean;
    /**
     * Formata o valor exibido no tooltip.
     * Usa o tipo `Formatter` do Recharts para compatibilidade total.
     */
    tooltipFormatter?: (value: string | number, name: string) => [string, string] | string;
    /** Formata os ticks do eixo X. */
    xAxisFormatter?: (value: string) => string;
}
