import type { Meta, StoryObj } from "@storybook/react";
import { LineChart } from "./index";
import "../../styles.scss";

const meta: Meta<typeof LineChart> = {
  title: "Charts/LineChart",
  component: LineChart,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Gráfico de linhas com suporte a múltiplas séries, tipos de curva, tooltip, legenda, labels e skeleton animado.",
      },
    },
  },
  argTypes: {
    width: { control: { type: "number" }, description: "Largura em pixels" },
    height: { control: { type: "number" }, description: "Altura em pixels" },
    curveType: {
      control: "select",
      options: [
        "basis",
        "basisClosed",
        "basisOpen",
        "bumpX",
        "bumpY",
        "bump",
        "linear",
        "linearClosed",
        "natural",
        "monotoneX",
        "monotoneY",
        "monotone",
        "step",
        "stepBefore",
        "stepAfter",
      ],
      description: "Tipo de interpolação da curva",
    },
    caption: { control: "boolean", description: "Exibe legenda" },
    dots: { control: "boolean", description: "Exibe pontos nos dados" },
    label: { control: "boolean", description: "Exibe valor nos pontos" },
    skeleton: { control: "boolean", description: "Modo skeleton animado" },
    data: { control: false },
    seriesStyles: { control: false },
  },
  args: {
    width: 600,
    height: 300,
    curveType: "natural",
    caption: false,
    dots: false,
    label: false,
    skeleton: false,
  },
};

export default meta;
type Story = StoryObj<typeof LineChart>;

// ─── Fixtures ────────────────────────────────────────────────────────────────

const MONTHLY_DATA = [
  { month: "Jan", receita: 120, despesas: 80 },
  { month: "Fev", receita: 95, despesas: 60 },
  { month: "Mar", receita: 140, despesas: 100 },
  { month: "Abr", receita: 180, despesas: 90 },
  { month: "Mai", receita: 160, despesas: 110 },
  { month: "Jun", receita: 200, despesas: 130 },
  { month: "Jul", receita: 175, despesas: 95 },
  { month: "Ago", receita: 210, despesas: 140 },
];

const SERIES_STYLES = {
  receita: { color: "var(--s-color-chart-1)" },
  despesas: { color: "var(--s-color-chart-2)" },
};

const SINGLE_DATA = MONTHLY_DATA.map(({ month, receita }) => ({
  month,
  receita,
}));
const SINGLE_STYLES = { receita: { color: "var(--s-color-chart-3)" } };

// ─── Stories ─────────────────────────────────────────────────────────────────

/** Estado padrão com duas séries e curva natural. */
export const Default: Story = {
  args: { data: MONTHLY_DATA, seriesStyles: SERIES_STYLES },
};

/** Série única. */
export const SingleSeries: Story = {
  args: { data: SINGLE_DATA, seriesStyles: SINGLE_STYLES },
};

/** Com pontos visíveis em cada dado. */
export const WithDots: Story = {
  args: { data: MONTHLY_DATA, seriesStyles: SERIES_STYLES, dots: true },
};

/** Com legenda das séries abaixo do gráfico. */
export const WithCaption: Story = {
  args: { data: MONTHLY_DATA, seriesStyles: SERIES_STYLES, caption: true },
};

/** Com valor de cada ponto exibido como label. */
export const WithLabels: Story = {
  args: { data: MONTHLY_DATA, seriesStyles: SERIES_STYLES, label: true },
};

/** Interpolação linear — útil para dados que não devem ser suavizados. */
export const LinearCurve: Story = {
  args: {
    data: MONTHLY_DATA,
    seriesStyles: SERIES_STYLES,
    curveType: "linear",
  },
};

/** Interpolação em degraus — útil para dados categóricos ou discretos. */
export const StepCurve: Story = {
  args: { data: MONTHLY_DATA, seriesStyles: SERIES_STYLES, curveType: "step" },
};

/** Combinação completa: dots, legenda e labels. */
export const FullFeatured: Story = {
  args: {
    data: MONTHLY_DATA,
    seriesStyles: SERIES_STYLES,
    dots: true,
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
    xAxisFormatter: (value) => value.charAt(0).toUpperCase() + value.slice(1),
    tooltipFormatter: (value: string | number) =>
      `R$ ${Number(value).toFixed(2)}`,
  },
};
