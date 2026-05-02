import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Skeleton } from "./index";
import "../../styles.scss";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
O **Skeleton** é um placeholder de carregamento que imita o formato do conteúdo
antes de ele estar disponível, evitando layout shift e reduzindo o tempo de espera percebido.

### Quando usar
- Enquanto dados são buscados (texto, imagens, cards, avatares)
- Como substituto de qualquer elemento durante seu estado de carregamento
- Em conjunto com a prop \`skeleton\` de outros componentes (ex: \`<Input skeleton />\`, \`<Avatar skeleton />\`)

### Boas práticas
- Ajuste \`width\` e \`height\` o mais próximo possível das dimensões reais do conteúdo
- Use \`circle\` para avatares, ícones ou qualquer elemento circular
- Agrupe múltiplos skeletons para simular um layout completo
- Remova os skeletons assim que os dados estiverem disponíveis — não os deixe visíveis mais tempo do que o necessário
        `,
      },
    },
     design: {
       type: 'figma',
     url: 'https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=5074-179',
    },
  },
  argTypes: {
    width: {
      control: "text",
      description:
        'Largura do elemento. Aceita qualquer valor CSS válido (ex: `"200px"`, `"100%"`, `"5rem"`).',
      table: { type: { summary: "string" } },
    },
    height: {
      control: "text",
      description:
        'Altura do elemento. Aceita qualquer valor CSS válido (ex: `"16px"`, `"1.5rem"`).',
      table: { type: { summary: "string" } },
    },
    circle: {
      control: "boolean",
      description:
        "Quando `true`, renderiza um skeleton circular. Ideal para avatares e ícones.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

// ─── 1. Default ───────────────────────────────────────────────────────────────

/**
 * Placeholder retangular padrão — simula uma linha de texto.
 * Use os Controls para ajustar largura, altura e formato circular.
 */
export const Default: Story = {
  name: "Default",
  args: { width: "200px", height: "16px", circle: false },
};

// ─── 2. Formatos ──────────────────────────────────────────────────────────────

/**
 * Placeholder circular — para avatares e ícones.
 * Use `circle` com largura e altura iguais para garantir a proporção correta.
 */
export const Circle: Story = {
  name: "Formato — circular (avatar)",
  args: { width: "40px", height: "40px", circle: true },
};

/**
 * Bloco de largura total — para cards, imagens e banners.
 * Ocupa 100% do container pai.
 */
export const FullWidth: Story = {
  name: "Formato — bloco de largura total",
  args: { width: "100%", height: "120px" },
};

// ─── 3. Composições ───────────────────────────────────────────────────────────

/**
 * Múltiplas linhas de texto com larguras variadas.
 * Simula um parágrafo em carregamento — a variação de largura torna
 * o placeholder mais natural e próximo do conteúdo real.
 */
export const TextBlock: Story = {
  name: "Composição — bloco de texto",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-nano)" }}>
      <Skeleton width="280px" height="14px" />
      <Skeleton width="240px" height="14px" />
      <Skeleton width="200px" height="14px" />
      <Skeleton width="160px" height="14px" />
    </div>
  ),
};

/**
 * Card de usuário — avatar circular + linhas de nome e cargo.
 * Demonstra a composição de múltiplos skeletons para simular um layout completo.
 * Ajuste as dimensões para corresponder ao componente real que substituirão.
 */
export const UserCard: Story = {
  name: "Composição — card de usuário",
  render: () => (
    <div style={{ display: "flex", gap: "var(--s-spacing-x-small)", alignItems: "center" }}>
      <Skeleton width="48px" height="48px" circle />
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-nano)" }}>
        <Skeleton width="140px" height="14px" />
        <Skeleton width="100px" height="12px" />
      </div>
    </div>
  ),
};

/**
 * Card completo — imagem de capa + título + descrição + ações.
 * Simula um card de produto ou artigo em carregamento.
 */
export const ContentCard: Story = {
  name: "Composição — card de conteúdo",
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--s-spacing-x-small)",
        width: "280px",
        padding: "var(--s-spacing-small)",
        border: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
        borderRadius: "var(--s-border-radius-medium)",
      }}
    >
      <Skeleton width="100%" height="140px" />
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-nano)" }}>
        <Skeleton width="80%" height="16px" />
        <Skeleton width="60%" height="12px" />
        <Skeleton width="70%" height="12px" />
      </div>
      <Skeleton width="100px" height="32px" />
    </div>
  ),
};

/**
 * Linha de tabela — células de texto em larguras variadas.
 * Use para simular listagens e tabelas durante o carregamento inicial.
 */
export const TableRow: Story = {
  name: "Composição — linha de tabela",
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--s-spacing-nano)",
        width: "480px",
      }}
    >
      {Array.from({ length: 4 }, (_, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            gap: "var(--s-spacing-small)",
            alignItems: "center",
            padding: "var(--s-spacing-x-small) 0",
            borderBottom: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
          }}
        >
          <Skeleton width="24px" height="24px" circle />
          <Skeleton width="140px" height="12px" />
          <Skeleton width="80px" height="12px" />
          <Skeleton width="60px" height="12px" />
        </div>
      ))}
    </div>
  ),
};

// ─── 4. Tamanhos de referência ────────────────────────────────────────────────

/**
 * Referência visual de alturas comuns mapeadas à tipografia do design system.
 * Use estas dimensões como ponto de partida para novos placeholders.
 */
export const HeightReference: Story = {
  name: "Referência — alturas comuns",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-x-small)" }}>
      {[
        { height: "12px", label: "12px — caption / label sm" },
        { height: "14px", label: "14px — paragraph regular" },
        { height: "16px", label: "16px — label medium" },
        { height: "20px", label: "20px — heading sm" },
        { height: "24px", label: "24px — heading md / ícone" },
        { height: "32px", label: "32px — botão / input" },
        { height: "40px", label: "40px — input md / avatar md" },
      ].map(({ height, label }) => (
        <div key={height} style={{ display: "flex", alignItems: "center", gap: "var(--s-spacing-x-small)" }}>
          <Skeleton width="200px" height={height} />
          <small>{label}</small>
        </div>
      ))}
    </div>
  ),
};