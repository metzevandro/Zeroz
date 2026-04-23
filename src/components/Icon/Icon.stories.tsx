import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Icon } from "./index";
import "../../styles.scss";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
O **Icon** renderiza um único [Material Symbol](https://fonts.google.com/icons)
usando a fonte de ícones variável — sem carregar arquivos adicionais.

O componente usa \`font-variation-settings\` para alternar entre os variantes
outlined e filled via eixo \`FILL\` da fonte variável, mantendo o bundle leve.

### Tamanhos
| size  | font-size | uso recomendado                                    |
|-------|-----------|----------------------------------------------------|
| \`sm\` | 16px      | Controles compactos, badges, inputs                |
| \`md\` | 24px      | Uso geral — padrão recomendado                     |
| \`lg\` | 32px      | Empty states, áreas de destaque, hero sections     |

### Quando usar
- Inline com texto ou botões para reforçar o significado
- Como indicadores visuais autônomos (status, categoria, ação)

### Boas práticas
- Sempre combine ícones com um label visível ou \`aria-label\` no elemento pai
- Use \`fill\` de forma consistente — evite misturar outlined e filled na mesma região da UI
- Prefira \`"md"\` como tamanho padrão; use \`"sm"\` em controles compactos e \`"lg"\` em empty states
- Passe \`icon={undefined}\` quando o nome ainda não é conhecido — o elemento renderiza vazio sem lançar erro
        `,
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10017",
    },
  },
  argTypes: {
    icon: {
      control: "text",
      description:
        'Nome do Material Symbol a renderizar (ex: `"search"`, `"logout"`, `"keyboard_arrow_down"`).',
      table: { type: { summary: "string | undefined" } },
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description:
        "Tamanho renderizado do ícone. `sm` = 16px, `md` = 24px, `lg` = 32px.",
      table: {
        defaultValue: { summary: "md" },
        type: { summary: '"sm" | "md" | "lg"' },
      },
    },
    fill: {
      control: "boolean",
      description:
        "Quando `true`, renderiza o ícone no variante preenchido via eixo `FILL` da fonte variável.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

// ─── 1. Default ───────────────────────────────────────────────────────────────

/**
 * Ícone outlined no tamanho padrão.
 * Use os Controls para explorar tamanhos e o variante filled.
 */
export const Default: Story = {
  name: "Default",
  args: {
    icon: "house",
    size: "md",
    fill: false,
  },
};

// ─── 2. Variantes outlined vs filled ─────────────────────────────────────────

/**
 * Variante outlined — `fill: false` (padrão).
 * Use para ações secundárias e ícones de menor hierarquia visual.
 */
export const Outlined: Story = {
  name: "Variante — outlined (padrão)",
  args: {
    icon: "favorite",
    size: "md",
    fill: false,
  },
};

/**
 * Variante filled — `fill: true`.
 * Use para ações ativas, itens selecionados ou ícones de maior hierarquia visual.
 */
export const Filled: Story = {
  name: "Variante — filled",
  args: {
    icon: "favorite",
    size: "md",
    fill: true,
  },
};

/**
 * Comparação lado a lado de outlined vs filled com o mesmo ícone.
 * A troca é feita via eixo `FILL` da fonte variável — sem carregar
 * um segundo arquivo de fonte.
 */
export const OutlinedVsFilled: Story = {
  name: "Comparativo — outlined vs filled",
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--s-spacing-medium)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--s-spacing-nano)",
        }}
      >
        <Icon icon="favorite" size="md" fill={false} />
        <small>outlined</small>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--s-spacing-nano)",
        }}
      >
        <Icon icon="favorite" size="md" fill />
        <small>filled</small>
      </div>
    </div>
  ),
};

// ─── 3. Tamanhos ──────────────────────────────────────────────────────────────

/**
 * Comparativo dos três tamanhos disponíveis com o mesmo ícone.
 */
export const Sizes: Story = {
  name: "Comparativo — tamanhos",
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--s-spacing-medium)",
      }}
    >
      {(["sm", "md", "lg"] as const).map((size) => (
        <div
          key={size}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "var(--s-spacing-nano)",
          }}
        >
          <Icon icon="home" size={size} />
          <small>{size}</small>
        </div>
      ))}
    </div>
  ),
};

// ─── 4. Grade de referência ───────────────────────────────────────────────────

/**
 * Grade de referência com os ícones mais usados no design system.
 * Use como consulta rápida de nomes de ícones disponíveis.
 */
export const CommonIcons: Story = {
  name: "Grade de referência — ícones comuns",
  parameters: {
    layout: "padded",
  },
  render: () => {
    const icons = [
      "search",
      "close",
      "menu",
      "settings",
      "person",
      "logout",
      "keyboard_arrow_down",
      "keyboard_arrow_right",
      "calendar_month",
      "visibility",
      "visibility_off",
      "delete",
      "edit",
      "add",
      "check",
      "home",
      "inbox",
      "star",
      "favorite",
      "notifications",
      "download",
      "upload",
      "filter_list",
      "bar_chart",
      "cloud_off",
      "folder_open",
      "content_copy",
      "chevron_right",
      "security",
    ];

    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--s-spacing-small)",
        }}
      >
        {icons.map((name) => (
          <div
            key={name}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "var(--s-spacing-nano)",
              padding: "var(--s-spacing-x-small)",
              minWidth: '120px',
              border:
                "var(--s-border-width-hairline) solid var(--s-color-border-default)",
              borderRadius: "var(--s-border-radius-medium)",
            }}
          >
            <Icon icon={name} size="md" />
            <small style={{ textAlign: "center", wordBreak: "break-all" }}>
              {name}
            </small>
          </div>
        ))}
      </div>
    );
  },
};

// ─── 5. Contexto de uso ───────────────────────────────────────────────────────

/**
 * Ícones inline com texto — demonstra o alinhamento vertical em contexto real.
 */
export const InlineWithText: Story = {
  name: "Contexto — inline com texto",
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--s-spacing-x-small)",
      }}
    >
      {[
        { icon: "check", label: "Pedido confirmado" },
        { icon: "schedule", label: "Aguardando pagamento" },
        { icon: "local_shipping", label: "Em trânsito" },
        { icon: "close", label: "Pedido cancelado" },
      ].map(({ icon, label }) => (
        <div
          key={icon}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--s-spacing-xx-small)",
          }}
        >
          <Icon icon={icon} size="sm" />
          <small>{label}</small>
        </div>
      ))}
    </div>
  ),
};

// ─── 6. Edge cases ────────────────────────────────────────────────────────────

/**
 * `icon={undefined}` — o elemento renderiza vazio sem lançar erro.
 * Use quando o nome do ícone ainda não é conhecido (carregamento assíncrono,
 * configuração dinâmica).
 */
export const UndefinedIcon: Story = {
  name: "Edge case — icon undefined",
  args: {
    icon: undefined,
    size: "md",
  },
};
