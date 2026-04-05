import type { Meta, StoryObj } from "@storybook/react";
import { BarChart } from "./index";
import "../../styles.scss";

const meta: Meta<typeof BarChart> = {
  title: "Charts/BarChart",
  component: BarChart,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Gráfico de barras com suporte a modo agrupado e empilhado, tooltip, legenda, labels e skeleton animado.",
      },
    },
  },
  argTypes: {
    width: { control: { type: "number" }, description: "Largura em pixels" },
    height: { control: { type: "number" }, description: "Altura em pixels" },
    stacked: { control: "boolean", description: "Empilha as séries" },
    caption: { control: "boolean", description: "Exibe legenda" },
    label: { control: "boolean", description: "Exibe valor nas barras" },
    skeleton: { control: "boolean", description: "Modo skeleton animado" },
    data: { control: false },
    seriesStyles: { control: false },
  },
  args: {
    width: 600,
    height: 300,
    stacked: false,
    caption: false,
    label: false,
    skeleton: false,
  },
};

export default meta;
type Story = StoryObj<typeof BarChart>;

// ─── Fixtures ────────────────────────────────────────────────────────────────

const MONTHLY_DATA = [
  { month: "Jan", Vendas: 120, Devoluções: 30 },
  { month: "Fev", Vendas: 95, Devoluções: 15 },
  { month: "Mar", Vendas: 140, Devoluções: 40 },
  { month: "Abr", Vendas: 180, Devoluções: 25 },
  { month: "Mai", Vendas: 160, Devoluções: 35 },
  { month: "Jun", Vendas: 200, Devoluções: 50 },
];

const SERIES_STYLES = {
  Vendas: { color: "var(--s-color-chart-1)" },
  Devoluções: { color: "var(--s-color-chart-2)" },
};

const SINGLE_DATA = MONTHLY_DATA.map(({ month, Vendas }) => ({
  month,
  Vendas,
}));
const SINGLE_STYLES = { Vendas: { color: "var(--s-color-chart-3)" } };

// ─── Stories ─────────────────────────────────────────────────────────────────

/** Barras agrupadas com duas séries. */
export const Default: Story = {
  args: { data: MONTHLY_DATA, seriesStyles: SERIES_STYLES },
};

/** Série única. */
export const SingleSeries: Story = {
  args: { data: SINGLE_DATA, seriesStyles: SINGLE_STYLES },
};

/** Barras empilhadas — ideal para composição proporcional. */
export const Stacked: Story = {
  args: { data: MONTHLY_DATA, seriesStyles: SERIES_STYLES, stacked: true },
};

/** Com legenda das séries abaixo do gráfico. */
export const WithCaption: Story = {
  args: { data: MONTHLY_DATA, seriesStyles: SERIES_STYLES, caption: true },
};

/** Com valor de cada barra exibido como label. */
export const WithLabels: Story = {
  args: { data: MONTHLY_DATA, seriesStyles: SERIES_STYLES, label: true },
};

/** Combinação completa: empilhado, legenda e labels. */
export const FullFeatured: Story = {
  args: {
    data: MONTHLY_DATA,
    seriesStyles: SERIES_STYLES,
    stacked: true,
    caption: true,
    label: true,
  },
};

/** Skeleton animado — exibido durante o carregamento dos dados. */
export const Skeleton: Story = {
  args: {
    data: [],
    seriesStyles: {},
    skeleton: true,
  },
};

/** Formatação customizada no eixo X e no tooltip. */
export const WithFormatters: Story = {
  args: {
    data: MONTHLY_DATA,
    seriesStyles: SERIES_STYLES,
    xAxisFormatter: (value: string) => value.toString(),
    tooltipFormatter: (value) =>
      `R$ ${Number(value).toFixed(2).toString().replace(".", ",")}`,
  },
};
