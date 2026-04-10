import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";
import type { BadgeType, BadgeVariant } from "./Badge.types";
import "../../styles.scss";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
O **Badge** é um rótulo inline compacto usado para comunicar status, categoria ou metadados.

Renderiza como elemento inline — seguro para uso dentro de células de tabela,
itens de lista, cards ou ao lado de qualquer conteúdo inline.

> Mantenha o \`label\` curto — badges não são adequados para textos longos.
> Use no máximo uma palavra ou uma expressão breve.

### Combinação type × variant
As props \`type\` e \`variant\` trabalham em conjunto para definir a aparência final:

| variant   | type      | resultado                                  |
|-----------|-----------|--------------------------------------------|
| default   | default   | Sólido neutro                              |
| default   | light     | Neutro com borda                           |
| primary   | default   | Sólido na cor de destaque                  |
| primary   | light     | Destaque claro com borda                   |
| success   | default   | Sólido verde                               |
| success   | light     | Verde claro com borda                      |
| warning   | default   | Sólido vermelho                            |
| warning   | light     | Vermelho claro com borda                   |

### Quando usar
- Indicadores de status em tabelas e listas: "Ativo", "Pendente", "Enviado"
- Tags de categoria em cards ou itens de navegação
- Sinalizadores de feature ou ambiente: "Beta", "Novo"
- Contadores ou rótulos compactos em itens de menu

### Quando não usar
- Como único indicador de estado — sempre complemente com texto ou ícone para acessibilidade
- Para ações clicáveis — prefira um \`Button\` com variante adequada
        `,
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10006",
    },
  },
  argTypes: {
    label: {
      control: "text",
      description:
        "Texto exibido dentro do badge. Mantenha curto — uma palavra ou expressão breve.",
      table: {
        defaultValue: { summary: "Label" },
        type: { summary: "string" },
      },
    },
    type: {
      control: "radio",
      options: ["default", "light"] satisfies BadgeType[],
      description:
        "Estilo visual. `default` = fundo sólido sem borda. `light` = fundo claro com borda colorida.",
      table: {
        defaultValue: { summary: "default" },
        type: { summary: '"default" | "light"' },
      },
    },
    variant: {
      control: "select",
      options: [
        "default",
        "primary",
        "success",
        "warning",
      ] satisfies BadgeVariant[],
      description:
        "Intenção semântica de cor. Combina com `type` para definir a aparência final.",
      table: {
        defaultValue: { summary: "default" },
        type: { summary: '"default" | "primary" | "success" | "warning"' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// ─── 1. Playground ────────────────────────────────────────────────────────────

/**
 * Story interativa para explorar todas as combinações de props via Controls.
 * Ponto de entrada recomendado para inspecionar o componente.
 */
export const Playground: Story = {
  name: "Playground",
  args: {
    label: "Badge",
    type: "default",
    variant: "primary",
  },
};

// ─── 2. Variantes — tipo sólido (default) ────────────────────────────────────

/**
 * Variante neutra sem intenção semântica.
 * Use para estados genéricos como "Rascunho" ou metadados sem significado de status.
 */
export const Default: Story = {
  name: "Default",
  args: { label: "Padrão", type: "default", variant: "default" },
};

/**
 * Variante de destaque — fundo sólido na cor primária.
 * Use para conteúdo em evidência: "Novo", "Beta", "Em destaque".
 */
export const Primary: Story = {
  name: "Primary",
  args: { label: "Novo", type: "default", variant: "primary" },
};

/**
 * Variante de sucesso — fundo sólido verde.
 * Use para estados positivos ou concluídos: "Ativo", "Aprovado", "Entregue".
 */
export const Success: Story = {
  name: "Success",
  args: { label: "Ativo", type: "default", variant: "success" },
};

/**
 * Variante de atenção — fundo sólido amarelo/laranja.
 * Use para estados que requerem atenção: "Pendente", "Em análise", "Atrasado".
 */
export const Warning: Story = {
  name: "Warning",
  args: { label: "Pendente", type: "default", variant: "warning" },
};

// ─── 3. Variantes — tipo claro com borda (light) ─────────────────────────────

/**
 * Variante neutra com borda — versão menos visualmente dominante do Default.
 * Indicada para contextos com muito conteúdo onde o badge não deve chamar atenção.
 */
export const DefaultLight: Story = {
  name: "Default — Light",
  args: { label: "Padrão", type: "light", variant: "default" },
};

/**
 * Variante de destaque com fundo claro e borda.
 * Use quando o contexto é denso e a versão sólida seria visualmente pesada.
 */
export const PrimaryLight: Story = {
  name: "Primary — Light",
  args: { label: "Novo", type: "light", variant: "primary" },
};

/**
 * Variante de sucesso com fundo claro e borda verde.
 * Alternativa sutil ao Success sólido para tabelas e listagens densas.
 */
export const SuccessLight: Story = {
  name: "Success — Light",
  args: { label: "Ativo", type: "light", variant: "success" },
};

/**
 * Variante de atenção com fundo claro e borda amarelo/laranja.
 * Alternativa sutil ao Warning sólido para contextos com menor hierarquia visual.
 */
export const WarningLight: Story = {
  name: "Warning — Light",
  args: { label: "Pendente", type: "light", variant: "warning" },
};

// ─── 4. Matriz completa ───────────────────────────────────────────────────────

const ALL_VARIANTS: BadgeVariant[] = [
  "default",
  "primary",
  "success",
  "warning",
];
const ALL_TYPES: BadgeType[] = ["default", "light"];

/**
 * Matriz completa de todas as combinações válidas de `type` × `variant`.
 * Use para validação visual rápida após alterações de token ou tema.
 */
export const AllCombinations: Story = {
  name: "Matriz completa — type × variant",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {ALL_TYPES.map((type) => (
        <div
          key={type}
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <small>{type}</small>
          {ALL_VARIANTS.map((variant) => (
            <Badge
              key={`${type}-${variant}`}
              label={variant}
              type={type}
              variant={variant}
            />
          ))}
        </div>
      ))}
    </div>
  ),
};

// ─── 5. Uso em contexto real ──────────────────────────────────────────────────

/**
 * Badge aplicado ao lado de conteúdo real — simulando tabelas, listas e cards.
 * Demonstra como o componente se comporta em proporção com outros elementos.
 */
export const InContext: Story = {
  name: "Exemplos em contexto real",
  render: () => (
    <div style={{ display: "grid", gap: "16px", width: "300px" }}>
      {[
        {
          label: "Pedido #1042",
          badge: "Enviado",
          type: "light" as BadgeType,
          variant: "success" as BadgeVariant,
        },
        {
          label: "Pagamento",
          badge: "Pendente",
          type: "light" as BadgeType,
          variant: "warning" as BadgeVariant,
        },
        {
          label: "Dashboard",
          badge: "Beta",
          type: "default" as BadgeType,
          variant: "primary" as BadgeVariant,
        },
        {
          label: "Relatório Q3",
          badge: "Rascunho",
          type: "default" as BadgeType,
          variant: "default" as BadgeVariant,
        },
      ].map(({ label, badge, type, variant }) => (
        <div
          key={label}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "8px",
          }}
        >
          <small>{label}</small>
          <Badge label={badge} type={type} variant={variant} />
        </div>
      ))}
    </div>
  ),
};
