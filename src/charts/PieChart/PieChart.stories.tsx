import type { Meta, StoryObj } from "@storybook/react";
import { PieChart } from "./index";
import "../../styles.scss";

const meta: Meta<typeof PieChart> = {
  title: "Charts/PieChart",
  component: PieChart,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Gráfico de pizza ou rosca com agrupamento automático de itens excedentes em "Outros",
tooltip detalhado e skeleton animado com efeito de respiração.

### Agrupamento automático
Quando \`data\` possui mais de 5 itens, os de menor valor são agrupados em uma
fatia "Outros". O tooltip desta fatia lista todos os subitens individualmente.
        `,
      },
    },
  },
  argTypes: {
    width: { control: { type: "number" }, description: "Largura em pixels" },
    height: { control: { type: "number" }, description: "Altura em pixels" },
    innerRadius: {
      control: { type: "number" },
      description: "Raio interno (donut)",
    },
    outerRadius: { control: { type: "number" }, description: "Raio externo" },
    type: {
      control: "radio",
      options: ["pie", "donut"],
      description: "Tipo visual",
    },
    caption: { control: "boolean", description: "Exibe legenda" },
    skeleton: { control: "boolean", description: "Modo skeleton animado" },
    label: { control: "text", description: "Texto abaixo do total (donut)" },
    data: { control: false },
    tooltipFormatter: { control: false },
    labelFormatter: { control: false },
  },
  args: {
    width: 400,
    height: 300,
    innerRadius: 70,
    outerRadius: 110,
    type: "donut",
    caption: false,
    skeleton: false,
    dataKey: "quantity",
    nameKey: "keyName",
  },
};

export default meta;
type Story = StoryObj<typeof PieChart>;

// ─── Fixtures ────────────────────────────────────────────────────────────────

const BASE_DATA = [
  { quantity: 400, keyName: "Produto A", fill: "var(--s-color-chart-1)" },
  { quantity: 300, keyName: "Produto B", fill: "var(--s-color-chart-2)" },
  { quantity: 200, keyName: "Produto C", fill: "var(--s-color-chart-3)" },
  { quantity: 100, keyName: "Produto D", fill: "var(--s-color-chart-4)" },
];

const MANY_ITEMS_DATA = [
  { quantity: 400, keyName: "Produto A", fill: "var(--s-color-chart-1)" },
  { quantity: 300, keyName: "Produto B", fill: "var(--s-color-chart-2)" },
  { quantity: 200, keyName: "Produto C", fill: "var(--s-color-chart-3)" },
  { quantity: 150, keyName: "Produto D", fill: "var(--s-color-chart-4)" },
  { quantity: 100, keyName: "Produto E", fill: "var(--s-color-chart-5)" },
  { quantity: 80, keyName: "Produto F", fill: "var(--s-color-chart-6)" },
  { quantity: 60, keyName: "Produto G", fill: "var(--s-color-chart-7)" },
  { quantity: 40, keyName: "Produto H", fill: "var(--s-color-chart-9)" },
];

// ─── Stories ─────────────────────────────────────────────────────────────────

/** Donut com label central e 4 itens. */
export const Donut: Story = {
  args: {
    type: "donut",
    data: BASE_DATA,
    label: "vendas",
    labelFormatter: (v) => v.toLocaleString("pt-BR"),
  },
};

/** Pizza sólida sem raio interno. */
export const Pie: Story = {
  args: {
    type: "pie",
    data: BASE_DATA,
    innerRadius: 0,
  },
};

/** Com legenda das séries abaixo do gráfico. */
export const WithCaption: Story = {
  args: {
    type: "donut",
    data: BASE_DATA,
    label: "vendas",
    caption: true,
  },
};

/**
 * Agrupamento automático em "Outros".
 * Itens excedentes (> 5) são agrupados e detalhados no tooltip.
 */
export const WithManyItems: Story = {
  args: {
    type: "donut",
    data: MANY_ITEMS_DATA,
    label: "produtos",
    caption: true,
  },
};

/** Formatação customizada no tooltip e no label central. */
export const WithFormatters: Story = {
  args: {
    type: "donut",
    data: BASE_DATA,
    label: "total",
    tooltipFormatter: (value: string | number) =>
      `R$ ${Number(value).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`,
    labelFormatter: (v) =>
      `R$ ${v.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`,
  },
};

/**
 * Skeleton animado com efeito de "respiração".
 * A proporção entre as duas fatias oscila suavemente via função seno.
 */
export const Skeleton: Story = {
  args: {
    type: "donut",
    data: [],
    skeleton: true,
  },
};

/** Combinação completa: donut, legenda, formatters e muitos itens. */
export const FullExample: Story = {
  args: {
    type: "donut",
    data: MANY_ITEMS_DATA,
    label: "produtos",
    caption: true,
    tooltipFormatter: (value: string | number) =>
      `${Number(value).toLocaleString("pt-BR")} un.`,
    labelFormatter: (v) => v.toLocaleString("pt-BR"),
  },
};
