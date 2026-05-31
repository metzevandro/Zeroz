import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Tooltip } from "./index";
import type { TooltipDirection } from "./Tooltip.types";
import { Button } from "../Button";
import ButtonIcon from "../ButtonIcon";
import "../../styles.scss";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
O **Tooltip** exibe uma bolha de texto contextual quando o usuário passa o cursor sobre o elemento filho.

A bolha aparece na \`direction\` especificada com uma seta CSS apontando de volta
para o gatilho, e entra/sai suavemente via transições de \`opacity\` e \`scale\`.

> ⚠️ **Acessibilidade:** o tooltip só é ativado por hover — ele não é acessível
> por teclado nem por toque. **Nunca coloque informação essencial somente no tooltip.**
> Use-o apenas para contexto suplementar.

### Posicionamento
| direction    | comportamento                                           |
|--------------|---------------------------------------------------------|
| \`"top"\`     | Acima do gatilho — seta apontando para baixo            |
| \`"bottom"\`  | Abaixo do gatilho — seta apontando para cima            |
| \`"right"\`   | À direita do gatilho — seta apontando para a esquerda   |
| \`"left"\`    | À esquerda do gatilho — seta apontando para a direita   |

### Quando usar
- Fornecer label para botões somente-ícone
- Oferecer contexto suplementar para texto truncado
- Esclarecer o propósito de um controle sem poluir a UI

### Boas práticas
- Mantenha o \`text\` conciso — uma frase ou expressão curta no máximo
- Prefira \`"top"\` como direção padrão quando o espaço permite
- O \`max-width\` é 200px; textos mais longos quebram automaticamente em múltiplas linhas
        `,
      },
    },
    design: {
       type: 'figma',
       url: 'https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10083',
     },
  },
  argTypes: {
    text: {
      control: "text",
      description: "Texto exibido dentro da bolha do tooltip.",
      table: { type: { summary: "string" } },
    },
    direction: {
      control: "select",
      options: ["top", "bottom", "right", "left"] satisfies TooltipDirection[],
      description: "Direção em que o tooltip aparece em relação ao gatilho.",
      table: { type: { summary: '"top" | "bottom" | "right" | "left"' } },
    },
    children: {
      control: false,
      description: "Elemento gatilho que ativa o tooltip ao receber hover.",
      table: { type: { summary: "React.ReactNode" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

// ─── 1. Playground ────────────────────────────────────────────────────────────

/**
 * Story interativa — passe o cursor sobre o botão para ver o tooltip.
 * Use os Controls para explorar direções e textos diferentes.
 */
export const Playground: Story = {
  name: "Playground",
  decorators: [
    (Story) => (
      <div style={{ padding: "var(--s-spacing-x-large)" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    text: "Texto do tooltip",
    direction: "top",
    children: <Button variant="secondary" size="md">Passe o cursor</Button>,
  },
};

// ─── 2. Direções ──────────────────────────────────────────────────────────────

/**
 * Tooltip acima do gatilho — direção padrão recomendada.
 * A seta aponta para baixo em direção ao elemento.
 */
export const Top: Story = {
  name: "Direção — top (padrão)",
  decorators: [
    (Story) => (
      <div style={{ padding: "var(--s-spacing-x-large)" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    text: "Tooltip acima",
    direction: "top",
    children: <Button variant="secondary" size="md">Hover</Button>,
  },
};

/**
 * Tooltip abaixo do gatilho.
 * Use quando não há espaço acima do elemento ou quando o tooltip
 * complementa conteúdo que aparece abaixo.
 */
export const Bottom: Story = {
  name: "Direção — bottom",
  decorators: [
    (Story) => (
      <div style={{ padding: "var(--s-spacing-x-large)" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    text: "Tooltip abaixo",
    direction: "bottom",
    children: <Button variant="secondary" size="md">Hover</Button>,
  },
};

/**
 * Tooltip à direita do gatilho.
 * Use em listas, menus ou elementos alinhados à esquerda.
 */
export const Right: Story = {
  name: "Direção — right",
  decorators: [
    (Story) => (
      <div style={{ padding: "var(--s-spacing-x-large)" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    text: "Tooltip à direita",
    direction: "right",
    children: <Button variant="secondary" size="md">Hover</Button>,
  },
};

/**
 * Tooltip à esquerda do gatilho.
 * Use em elementos alinhados à direita ou próximos à borda direita da tela.
 */
export const Left: Story = {
  name: "Direção — left",
  decorators: [
    (Story) => (
      <div style={{ padding: "var(--s-spacing-x-large)" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    text: "Tooltip à esquerda",
    direction: "left",
    children: <Button variant="secondary" size="md">Hover</Button>,
  },
};

/**
 * Comparativo das quatro direções lado a lado.
 * Passe o cursor sobre cada botão para ver o tooltip na direção correspondente.
 */
export const AllDirections: Story = {
  name: "Comparativo — todas as direções",
  render: () => (
    <div style={{ display: "flex", gap: "var(--s-spacing-x-large)", alignItems: "center", padding: "var(--s-spacing-x-large)" }}>
      <Tooltip text="Acima" direction="top">
        <Button variant="secondary" size="md">Top</Button>
      </Tooltip>
      <Tooltip text="Abaixo" direction="bottom">
        <Button variant="secondary" size="md">Bottom</Button>
      </Tooltip>
      <Tooltip text="À direita" direction="right">
        <Button variant="secondary" size="md">Right</Button>
      </Tooltip>
      <Tooltip text="À esquerda" direction="left">
        <Button variant="secondary" size="md">Left</Button>
      </Tooltip>
    </div>
  ),
};

// ─── 3. Variações de texto ────────────────────────────────────────────────────

/**
 * Texto curto — label de uma palavra.
 * Ideal para ações evidentes onde apenas o nome da ação é necessário.
 */
export const ShortText: Story = {
  name: "Texto — curto",
  decorators: [
    (Story) => (
      <div style={{ padding: "var(--s-spacing-x-large)" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    text: "Copiar",
    direction: "top",
    children: (
      <ButtonIcon icon="content_copy" appearance="plain" variant="secondary" size="md" aria-label="Copiar" />
    ),
  },
};

/**
 * Texto longo — quebra automaticamente em múltiplas linhas dentro do `max-width: 200px`.
 * Use para contexto suplementar que requer mais de uma frase curta.
 */
export const LongText: Story = {
  name: "Texto — longo (multi-linha)",
  decorators: [
    (Story) => (
      <div style={{ padding: "var(--s-spacing-x-large)" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    text: "Esta ação excluirá permanentemente todos os registros selecionados e não poderá ser desfeita.",
    direction: "top",
    children: (
      <ButtonIcon icon="delete" appearance="plain" variant="warning" size="md" aria-label="Excluir" />
    ),
  },
};

// ─── 4. Contexto real ─────────────────────────────────────────────────────────

/**
 * Tooltip em botões somente-ícone — uso mais comum do componente.
 * Fornece o label acessível que o ícone por si só não comunica.
 */
export const IconButtonsToolbar: Story = {
  name: "Contexto real — toolbar de ícones",
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "var(--s-spacing-nano)",
        padding: "var(--s-spacing-xx-small)",
        background: "var(--s-color-fill-default)",
        borderRadius: "var(--s-border-radius-medium)",
        border: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
      }}
    >
      <Tooltip text="Editar" direction="top">
        <ButtonIcon icon="edit" appearance="plain" variant="secondary" size="sm" aria-label="Editar" />
      </Tooltip>
      <Tooltip text="Duplicar" direction="top">
        <ButtonIcon icon="content_copy" appearance="plain" variant="secondary" size="sm" aria-label="Duplicar" />
      </Tooltip>
      <Tooltip text="Compartilhar" direction="top">
        <ButtonIcon icon="share" appearance="plain" variant="secondary" size="sm" aria-label="Compartilhar" />
      </Tooltip>
      <Tooltip text="Excluir permanentemente" direction="top">
        <ButtonIcon icon="delete" appearance="plain" variant="warning" size="sm" aria-label="Excluir" />
      </Tooltip>
    </div>
  ),
};

/**
 * Tooltip em ações inline de tabela.
 * Demonstra o uso com `direction="top"` em botões que se repetem por linha.
 */
export const InlineTableActions: Story = {
  name: "Contexto real — ações em tabela",
  render: () => (
    <div
      style={{
        border: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
        borderRadius: "var(--s-border-radius-medium)",
        overflow: "visible",
        width: "400px",
      }}
    >
      {["Ana Souza", "Carlos Lima", "Jane Doe"].map((name, i, arr) => (
        <div
          key={name}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "var(--s-spacing-x-small) var(--s-spacing-small)",
            borderBottom: i < arr.length - 1
              ? "var(--s-border-width-hairline) solid var(--s-color-border-default)"
              : "none",
            background: "var(--s-color-fill-default)",
          }}
        >
          <small>{name}</small>
          <div style={{ display: "flex", gap: "var(--s-spacing-nano)" }}>
            <Tooltip text="Editar" direction="top">
              <ButtonIcon icon="edit" appearance="plain" variant="secondary" size="sm" aria-label={`Editar ${name}`} />
            </Tooltip>
            <Tooltip text="Excluir" direction="top">
              <ButtonIcon icon="delete" appearance="plain" variant="warning" size="sm" aria-label={`Excluir ${name}`} />
            </Tooltip>
          </div>
        </div>
      ))}
    </div>
  ),
};