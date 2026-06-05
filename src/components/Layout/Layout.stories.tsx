import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Layout from "./Layout";
import type { LayoutColumns } from "./Layout";
import "../../styles.scss";

const meta: Meta<typeof Layout> = {
  title: "Templates/Layout",
  component: Layout,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
O **Layout** é um container de linha em um sistema de grid flexbox de 12 colunas.

Cada filho é automaticamente envolvido com a classe \`col-X\` correspondente ao variant escolhido.
Em telas \`≤ 768px\` todas as colunas colapsam para \`width: 100%\` (empilhadas).

**Para criar quebra de linha, empilhe múltiplos \`<Layout>\` verticalmente.**

### Variantes disponíveis
| columns               | mapeamento de colunas              |
|-----------------------|------------------------------------|
| \`"1"\`                | col-12 (100%)                      |
| \`"2 - Symmetric"\`    | col-6 + col-6 (50% / 50%)         |
| \`"2 - Asymmetric"\`   | col-8 + col-4 (66% / 33%)         |
| \`"3 - Symmetric"\`    | col-4 + col-4 + col-4 (33% cada)  |

### Regras de composição
- O número de filhos deve coincidir com o número de colunas do variant
- Filhos extras recebem a última classe de coluna do variant
- Qualquer \`ReactNode\` pode ser filho — campo de formulário, card, tabela, etc.
        `,
      },
    },
    design: {
     type: 'figma',
      url: 'https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=2416-4556',
     },
  },
  argTypes: {
    columns: {
      control: "select",
      options: [
        "1",
        "2 - Symmetric",
        "2 - Asymmetric",
        "3 - Symmetric",
      ] satisfies LayoutColumns[],
      description:
        "Variant de colunas. Mapeia cada filho para uma classe `col-X` do grid de 12 colunas.",
      table: { type: { summary: '"1" | "2 - Symmetric" | "2 - Asymmetric" | "3 - Symmetric"' } },
    },
    children: {
      control: false,
      description: "Conteúdo de cada slot. O número de filhos deve corresponder ao número de colunas.",
      table: { type: { summary: "React.ReactNode" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Layout>;

// ─── Helper: slot visual ──────────────────────────────────────────────────────

const Slot = ({ col }: { col: string }) => (
  <div
    style={{
      background: "var(--s-color-fill-highlight-light)",
      border: "1px dashed var(--s-color-border-highlight)",
      borderRadius: "var(--s-border-radius-medium)",
      padding: "var(--s-spacing-small) var(--s-spacing-x-small)",
      textAlign: "center",
      color: "var(--s-color-content-highlight)",
      fontFamily: "monospace",
      fontSize: "13px",
      minHeight: "72px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--s-spacing-nano)",
    }}
  >
    <strong>Conteúdo</strong>
    <small style={{ opacity: 0.7 }}>{col}</small>
  </div>
);

// ─── 1. Playground ────────────────────────────────────────────────────────────

/**
 * Story interativa para explorar todas as variantes via Controls.
 * O número de slots se adapta automaticamente à variante selecionada.
 */
export const Playground: Story = {
  name: "Playground",
  args: { columns: "2 - Symmetric" },
  render: (args) => {
    const colMap: Record<LayoutColumns, string[]> = {
      "1": ["col-12"],
      "2 - Symmetric": ["col-6", "col-6"],
      "2 - Asymmetric": ["col-8", "col-4"],
      "3 - Symmetric": ["col-4", "col-4", "col-4"],
    };
    const cols = colMap[args.columns];
    return (
      <Layout {...args}>
        {cols.map((col, i) => (
          <Slot key={i} col={col} />
        ))}
      </Layout>
    );
  },
};

// ─── 2. Variantes individuais ─────────────────────────────────────────────────

/**
 * Coluna única — `col-12` (100%).
 * Cada filho ocupa a linha inteira. Use para conteúdo de largura total.
 */
export const OneColumn: Story = {
  name: "Variante — 1 coluna (col-12)",
  args: { columns: "1" },
  render: (args) => (
    <Layout {...args}>
      <Slot col="col-12 · 100%" />
      <Slot col="col-12 · 100%" />
    </Layout>
  ),
};

/**
 * Duas colunas simétricas — `col-6 + col-6` (50% / 50%).
 * Padrão mais comum para divisão de conteúdo em dois blocos iguais.
 */
export const TwoSymmetric: Story = {
  name: "Variante — 2 colunas simétricas (col-6 + col-6)",
  args: { columns: "2 - Symmetric" },
  render: (args) => (
    <Layout {...args}>
      <Slot col="col-6 · 50%" />
      <Slot col="col-6 · 50%" />
    </Layout>
  ),
};

/**
 * Duas colunas assimétricas — `col-8 + col-4` (66% / 33%).
 * Use para layouts com área principal e sidebar: conteúdo + filtros, editor + preview.
 */
export const TwoAsymmetric: Story = {
  name: "Variante — 2 colunas assimétricas (col-8 + col-4)",
  args: { columns: "2 - Asymmetric" },
  render: (args) => (
    <Layout {...args}>
      <Slot col="col-8 · 66%" />
      <Slot col="col-4 · 33%" />
    </Layout>
  ),
};

/**
 * Três colunas simétricas — `col-4 + col-4 + col-4` (33% cada).
 * Use para grids de três cards, métricas de dashboard ou planos de pricing.
 */
export const ThreeSymmetric: Story = {
  name: "Variante — 3 colunas simétricas (col-4 + col-4 + col-4)",
  args: { columns: "3 - Symmetric" },
  render: (args) => (
    <Layout {...args}>
      <Slot col="col-4 · 33%" />
      <Slot col="col-4 · 33%" />
      <Slot col="col-4 · 33%" />
    </Layout>
  ),
};

// ─── 3. Múltiplas linhas ──────────────────────────────────────────────────────

/**
 * Múltiplos `<Layout>` empilhados verticalmente para criar quebras de linha.
 * Cada `<Layout>` é uma linha independente — combine variantes para layouts complexos.
 */
export const MultipleRows: Story = {
  name: "Múltiplas linhas (row break)",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-x-small)" }}>
      <Layout columns="3 - Symmetric">
        <Slot col="col-4" />
        <Slot col="col-4" />
        <Slot col="col-4" />
      </Layout>
      <Layout columns="2 - Asymmetric">
        <Slot col="col-8" />
        <Slot col="col-4" />
      </Layout>
      <Layout columns="1">
        <Slot col="col-12" />
      </Layout>
    </div>
  ),
};

// ─── 4. Matriz completa ───────────────────────────────────────────────────────

const variantConfig: { columns: LayoutColumns; slots: { label: string; col: string }[] }[] = [
  {
    columns: "1",
    slots: [{ label: "Conteúdo", col: "col-12" }, { label: "Conteúdo", col: "col-12" }],
  },
  {
    columns: "2 - Symmetric",
    slots: [{ label: "Esquerda", col: "col-6" }, { label: "Direita", col: "col-6" }],
  },
  {
    columns: "2 - Asymmetric",
    slots: [{ label: "Principal", col: "col-8" }, { label: "Sidebar", col: "col-4" }],
  },
  {
    columns: "3 - Symmetric",
    slots: [{ label: "A", col: "col-4" }, { label: "B", col: "col-4" }, { label: "C", col: "col-4" }],
  },
];

const VariantRow = ({
  columns,
  slots,
}: {
  columns: LayoutColumns;
  slots: { label: string; col: string }[];
}) => (
  <div>
    <p style={{ fontFamily: "monospace", fontSize: "12px", marginBottom: "var(--s-spacing-nano)", color: "var(--s-color-content-default)" }}>
      columns="{columns}"
    </p>
    <Layout columns={columns}>
      {slots.map((s) => (
        <Slot key={s.label} col={s.col} />
      ))}
    </Layout>
  </div>
);

/**
 * Todas as variantes empilhadas para comparação visual rápida.
 * Use para validar proporções e espaçamentos após alterações de token.
 */
export const AllVariants: Story = {
  name: "Matriz — todas as variantes",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-large)" }}>
      {variantConfig.map((v) => (
        <VariantRow key={v.columns} columns={v.columns} slots={v.slots} />
      ))}
    </div>
  ),
};

// ─── 5. Mobile ────────────────────────────────────────────────────────────────

/**
 * Layout mobile (≤ 768px) — todas as colunas colapsam para `width: 100%`.
 * As colunas passam a empilhar verticalmente independentemente da variante.
 */
export const MobileCollapse: Story = {
  name: "Mobile — colapso (≤ 768px)",
  globals: {
    viewport: { value: "mobile5", isRotated: false },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-x-small)" }}>
      <Layout columns="3 - Symmetric">
        <Slot col="col-4 → col-12 no mobile" />
        <Slot col="col-4 → col-12 no mobile" />
        <Slot col="col-4 → col-12 no mobile" />
      </Layout>
    </div>
  ),
};

// ─── 6. Contexto real ─────────────────────────────────────────────────────────

/**
 * Página de configurações com sidebar — `2 - Asymmetric`.
 * Menu de navegação lateral em `col-4` e conteúdo principal em `col-8`.
 */
export const SettingsPage: Story = {
  name: "Contexto real — configurações com sidebar",
  render: () => (
    <Layout columns="2 - Asymmetric">
      <div
        style={{
          background: "var(--s-color-fill-default)",
          border: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
          borderRadius: "var(--s-border-radius-medium)",
          padding: "var(--s-spacing-small)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--s-spacing-nano)",              height: '100%'

        }}
      >
        {["Perfil", "Segurança", "Faturamento", "Notificações"].map((item) => (
          <div
            key={item}
            style={{
              padding: "var(--s-spacing-xx-small) var(--s-spacing-x-small)",
              borderRadius: "var(--s-border-radius-small)",
              background: item === "Perfil" ? "var(--s-color-fill-highlight-light)" : "transparent",
              cursor: "pointer",
            }}
          >
            <small style={{ color: item === "Perfil" ? "var(--s-color-content-highlight)" : "var(--s-color-content-default)" }}>
              {item}
            </small>
          </div>
        ))}
      </div>
      <div
        style={{
          background: "var(--s-color-fill-default)",
          border: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
          borderRadius: "var(--s-border-radius-medium)",
          padding: "var(--s-spacing-medium)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--s-spacing-small)",
        }}
      >
        <p style={{ font: "var(--s-typography-paragraph-strong)" }}>Informações do perfil</p>
        <Slot col="campo de formulário" />
        <Slot col="campo de formulário" />
      </div>
    </Layout>
  ),
};

/**
 * Dashboard com grid de métricas — `3 - Symmetric`.
 * Três widgets de indicador lado a lado, cada um em `col-4`.
 */
export const DashboardGrid: Story = {
  name: "Contexto real — dashboard com métricas",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-x-small)" }}>
      <Layout columns="3 - Symmetric">
        {[
          { label: "Receita", value: "R$ 48.290", badge: "+12,4%" },
          { label: "Usuários ativos", value: "1.842", badge: "+3,1%" },
          { label: "Pedidos", value: "342", badge: "+8,7%" },
        ].map(({ label, value, badge }) => (
          <div
            key={label}
            style={{
              background: "var(--s-color-fill-default)",
              border: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
              borderRadius: "var(--s-border-radius-medium)",
              padding: "var(--s-spacing-small)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--s-spacing-nano)",
            }}
          >
            <small>{label}</small>
            <p style={{ font: "var(--s-typography-paragraph-strong)", fontSize: "24px" }}>{value}</p>
            <small style={{ color: "var(--s-color-content-success)" }}>{badge}</small>
          </div>
        ))}
      </Layout>
      <Layout columns="2 - Asymmetric">
        <Slot col="col-8 · gráfico principal" />
        <Slot col="col-4 · atividade recente" />
      </Layout>
    </div>
  ),
};