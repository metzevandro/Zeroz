import type { Meta, StoryObj } from "@storybook/react";
import Layout from "./Layout";
import type { LayoutColumns } from "./Layout";
import "../../styles.scss";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Layout> = {
  title: "Templates/Layout",
  component: Layout,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
\`Layout\` é um container de linha em um sistema de grid flexbox de 12 colunas.

Cada filho é automaticamente envolvido com a classe \`col-X\` correspondente ao variant escolhido.
Em telas ≤ 768px todas as colunas colapsam para \`width: 100%\` (empilhadas).

**Para criar quebra de linha, empilhe múltiplos \`<Layout>\` verticalmente.**

| Variant | Mapeamento de colunas |
|---|---|
| \`"1"\` | col-12 (100%) |
| \`"2 - Symmetric"\` | col-6 + col-6 (50% / 50%) |
| \`"2 - Asymmetric"\` | col-8 + col-4 (66% / 33%) |
| \`"3 - Symmetric"\` | col-4 + col-4 + col-4 (33% cada) |
        `,
      },
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
        "Variant de colunas. Mapeia cada filho para uma classe col-X do grid de 12 colunas.",
      table: {
        type: { summary: "LayoutColumns" },
      },
    },
    children: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Layout>;

// ─── Helpers ──────────────────────────────────────────────────────────────────

const Slot = ({ col }: { col: string }) => (
  <div
    style={{
      background: "var(--s-color-fill-highlight-light)",
      border: "1px dashed var(--s-color-border-highlight)",
      borderRadius: "6px",
      padding: "20px 12px",
      textAlign: "center",
      color: "var(--s-color-content-highlight)",
      fontSize: "13px",
      fontFamily: "monospace",
      minHeight: "72px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "4px",
    }}
  >
    <span style={{ fontWeight: 700 }}>Content</span>
    <span style={{ opacity: 0.65, fontSize: "11px" }}>{col}</span>
  </div>
);

export const Playground: Story = {
  args: { columns: "2 - Symmetric" },
  render: (args) => (
    <Layout {...args}>
      <Slot
        col={
          args.columns === "2 - Asymmetric"
            ? "col-8"
            : args.columns === "3 - Symmetric"
              ? "col-4"
              : args.columns === "1"
                ? "col-12"
                : "col-6"
        }
      />
      <Slot
        col={
          args.columns === "2 - Asymmetric"
            ? "col-4"
            : args.columns === "3 - Symmetric"
              ? "col-4"
              : args.columns === "1"
                ? "col-12"
                : "col-6"
        }
      />
      {args.columns === "3 - Symmetric" && <Slot col="col-4" />}
    </Layout>
  ),
};

export const OneColumn: Story = {
  name: "1 Column — col-12",
  args: { columns: "1" },
  render: (args) => (
    <Layout {...args}>
      <Slot col="col-12 (100%)" />
      <Slot col="col-12 (100%)" />
    </Layout>
  ),
};

export const TwoSymmetric: Story = {
  name: "2 Columns — Symmetric (col-6 + col-6)",
  args: { columns: "2 - Symmetric" },
  render: (args) => (
    <Layout {...args}>
      <Slot col="col-6 (50%)" />
      <Slot col="col-6 (50%)" />
    </Layout>
  ),
};

export const TwoAsymmetric: Story = {
  name: "2 Columns — Asymmetric (col-8 + col-4)",
  args: { columns: "2 - Asymmetric" },
  render: (args) => (
    <Layout {...args}>
      <Slot col="col-8 (66%)" />
      <Slot col="col-4 (33%)" />
    </Layout>
  ),
};

export const ThreeSymmetric: Story = {
  name: "3 Columns — Symmetric (col-4 + col-4 + col-4)",
  args: { columns: "3 - Symmetric" },
  render: (args) => (
    <Layout {...args}>
      <Slot col="col-4 (33%)" />
      <Slot col="col-4 (33%)" />
      <Slot col="col-4 (33%)" />
    </Layout>
  ),
};

/**
 * Demonstra como empilhar múltiplos <Layout> para criar quebras de linha.
 * Cada <Layout> é uma linha independente no grid.
 */
export const MultipleRows: Story = {
  name: "Multiple Rows (row break)",
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Empilhe múltiplos `<Layout>` para criar quebras de linha. Cada componente é uma linha independente no grid.",
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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

export const AllVariants: Story = {
  name: "All Variants",
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      {[
        {
          columns: "1" as LayoutColumns,
          slots: [
            { label: "Content", col: "col-12" },
            { label: "Content", col: "col-12" },
          ],
        },
        {
          columns: "2 - Symmetric" as LayoutColumns,
          slots: [
            { label: "Left", col: "col-6" },
            { label: "Right", col: "col-6" },
          ],
        },
        {
          columns: "2 - Asymmetric" as LayoutColumns,
          slots: [
            { label: "Main", col: "col-8" },
            { label: "Sidebar", col: "col-4" },
          ],
        },
        {
          columns: "3 - Symmetric" as LayoutColumns,
          slots: [
            { label: "A", col: "col-4" },
            { label: "B", col: "col-4" },
            { label: "C", col: "col-4" },
          ],
        },
      ].map(({ columns, slots }) => (
        <div key={columns}>
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "12px",
              color: "#6B7280",
              marginBottom: "6px",
            }}
          >
            columns="{columns}"
          </p>
          <Layout columns={columns}>
            {slots.map((s) => (
              <Slot key={s.label} col={s.col} />
            ))}
          </Layout>
        </div>
      ))}
    </div>
  ),
};
