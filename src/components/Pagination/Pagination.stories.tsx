import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Pagination } from "./index";
import "../../styles.scss";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
O **Pagination** é um controle de navegação entre páginas ou etapas.

Três variantes de layout estão disponíveis:

| variant        | layout                                              |
|----------------|-----------------------------------------------------|
| \`noLabel\`     | Somente setas                                       |
| \`leftLabel\`   | Label à esquerda, setas agrupadas à direita         |
| \`centerLabel\` | Seta esquerda · label centralizado · seta direita   |

### Quando usar
- Tabelas ou listas com paginação server-side
- Fluxos passo a passo (wizards, carrosséis)
- Qualquer conteúdo dividido em múltiplas páginas

### Boas práticas
- Defina \`disabledLeft\` na primeira página e \`disabledRight\` na última
- Use \`skeleton\` enquanto o total de páginas ainda está carregando
- Forneça um \`label\` descritivo como \`"Página 3 de 10"\` ou \`"3 / 10"\`
        `,
      },
    },
     design: {
       type: 'figma',
      url: 'https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=1557-5788',
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["noLabel", "leftLabel", "centerLabel"],
      description:
        "Variante de layout. Define a posição do label em relação às setas.",
      table: {
        type: { summary: '"noLabel" | "leftLabel" | "centerLabel"' },
      },
    },
    label: {
      control: "text",
      description:
        'Texto do label (ex: `"Página 1 de 10"`). Ignorado quando `variant` é `"noLabel"`.',
      table: { type: { summary: "string" } },
    },
    disabledLeft: {
      control: "boolean",
      description: "Desativa a seta esquerda (anterior). Use na primeira página.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    disabledRight: {
      control: "boolean",
      description: "Desativa a seta direita (próxima). Use na última página.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    skeleton: {
      control: "boolean",
      description:
        "Exibe skeleton no lugar do label e desativa ambas as setas. Use enquanto o total de páginas está carregando.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    onClickLeft: {
      action: "onClickLeft",
      description: "Callback disparado ao clicar na seta esquerda.",
      table: { type: { summary: "() => void" } },
    },
    onClickRight: {
      action: "onClickRight",
      description: "Callback disparado ao clicar na seta direita.",
      table: { type: { summary: "() => void" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

// ─── 1. Variantes de layout ───────────────────────────────────────────────────

/**
 * Somente setas, sem label.
 * Use em espaços compactos onde o contexto de página já é visível na UI.
 */
export const NoLabel: Story = {
  name: "Variante — noLabel",
  args: {
    variant: "noLabel",
    label: "",
  },
};

/**
 * Label à esquerda com as setas agrupadas à direita.
 * Indicado para footers de tabela onde o texto de paginação precisa
 * estar alinhado à margem esquerda do conteúdo.
 */
export const LeftLabel: Story = {
  name: "Variante — leftLabel",
  args: {
    variant: "leftLabel",
    label: "Página 1 de 10",
  },
};

/**
 * Seta esquerda, label centralizado, seta direita.
 * Variante mais comum — indicada para a maioria dos contextos.
 */
export const CenterLabel: Story = {
  name: "Variante — centerLabel",
  args: {
    variant: "centerLabel",
    label: "Página 1 de 10",
  },
};

/**
 * Comparativo das três variantes de layout com o mesmo label.
 * Use para validar tokens e espaçamentos após alterações de tema.
 */
export const AllVariants: Story = {
  name: "Comparativo — todas as variantes",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-medium)" }}>
      <Pagination variant="noLabel" label="" />
      <Pagination variant="leftLabel" label="Página 3 de 10" />
      <Pagination variant="centerLabel" label="Página 3 de 10" />
    </div>
  ),
};

// ─── 2. Estados de navegação ──────────────────────────────────────────────────

/**
 * Primeira página — seta esquerda desativada via `disabledLeft`.
 * O usuário não pode navegar para uma página anterior à primeira.
 */
export const FirstPage: Story = {
  name: "Estado — primeira página (esquerda desativada)",
  args: {
    variant: "centerLabel",
    label: "Página 1 de 10",
    disabledLeft: true,
  },
};

/**
 * Última página — seta direita desativada via `disabledRight`.
 * O usuário não pode navegar para uma página além da última.
 */
export const LastPage: Story = {
  name: "Estado — última página (direita desativada)",
  args: {
    variant: "centerLabel",
    label: "Página 10 de 10",
    disabledRight: true,
  },
};

/**
 * Skeleton — ambas as setas desativadas e label substituído por placeholder.
 * Use enquanto o total de páginas ainda está sendo carregado da API.
 */
export const SkeletonState: Story = {
  name: "Estado — skeleton (carregando)",
  args: {
    variant: "centerLabel",
    label: "Carregando",
    skeleton: true,
  },
};

// ─── 3. Controlado ────────────────────────────────────────────────────────────

/**
 * Exemplo totalmente interativo com estado externo.
 * Demonstra o padrão correto: `disabledLeft` na primeira página,
 * `disabledRight` na última, e label atualizado a cada navegação.
 */
export const Controlled: Story = {
  name: "Controlado — com estado",
  render: () => {
    const total = 10;
    const [page, setPage] = useState(1);
    return (
      <Pagination
        variant="centerLabel"
        label={`Página ${page} de ${total}`}
        disabledLeft={page === 1}
        disabledRight={page === total}
        onClickLeft={() => setPage((p) => p - 1)}
        onClickRight={() => setPage((p) => p + 1)}
      />
    );
  },
};

// ─── 4. Contexto real ─────────────────────────────────────────────────────────

/**
 * Paginação no footer de uma tabela com variante `leftLabel`.
 * Demonstra o padrão mais comum em dashboards com listagens server-side.
 */
export const TableFooter: Story = {
  name: "Contexto real — footer de tabela",
  render: () => {
    const total = 5;
    const [page, setPage] = useState(1);
    const rows = [
      { id: "#1042", name: "Notebook Pro X", status: "Enviado" },
      { id: "#1043", name: "Mouse Ergonômico", status: "Pendente" },
      { id: "#1044", name: "Teclado Mecânico", status: "Enviado" },
    ];
    return (
      <div
        style={{
          width: "480px",
          border: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
          borderRadius: "var(--s-border-radius-medium)",
          overflow: "hidden",
        }}
      >
        {rows.map(({ id, name, status }, i) => (
          <div
            key={id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "var(--s-spacing-x-small) var(--s-spacing-small)",
              borderBottom: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
            }}
          >
            <small>{id} — {name}</small>
            <small>{status}</small>
          </div>
        ))}
        <div style={{ background: "var(--s-color-fill-default)" }}>
          <Pagination
            variant="leftLabel"
            label={`Página ${page} de ${total}`}
            disabledLeft={page === 1}
            disabledRight={page === total}
            onClickLeft={() => setPage((p) => p - 1)}
            onClickRight={() => setPage((p) => p + 1)}
          />
        </div>
      </div>
    );
  },
};