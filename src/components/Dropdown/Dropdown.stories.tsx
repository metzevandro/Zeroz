import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Dropdown, DropdownItem, DropdownTitle } from "./index";
import { Button } from "../Button";
import Avatar from "../Avatar/Avatar";
import "../../styles.scss";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
O **Dropdown** é um container de menu com animação de entrada e saída baseada em CSS.

Diferente de implementações que removem o DOM ao fechar, este componente
**sempre renderiza os filhos** e alterna a visibilidade via classes CSS —
garantindo transições suaves de \`opacity\` e \`transform\` em ambas as direções.

Componha com os subcomponentes para construir menus estruturados:

| Subcomponente    | Descrição                                                    |
|------------------|--------------------------------------------------------------|
| \`DropdownTitle\` | Cabeçalho de seção não-interativo para agrupar itens         |
| \`DropdownItem\`  | Item de menu interativo, com ícone opcional à esquerda       |

### Alinhamento
A prop \`align\` controla a qual borda do gatilho o painel é ancorado:

| align      | comportamento                                                              |
|------------|----------------------------------------------------------------------------|
| \`"left"\`  | Padrão — ancora na borda esquerda do gatilho e expande para a direita      |
| \`"right"\` | Ancora na borda direita do gatilho e expande para a esquerda               |

> Use \`align="right"\` quando o gatilho está próximo à borda direita da tela
> para evitar que o menu extravase a viewport.

### Quando usar
- Menus de ação contextual (overflow, opções de linha em tabela)
- Dropdowns de navegação acionados por botão ou avatar
- Menus com seções agrupadas por \`DropdownTitle\`

### Quando não usar
- Para seleção de valor em formulários — use um \`Select\`
- Para navegação principal — use um componente de menu de navegação dedicado

### Boas práticas
- Controle \`visible\` externamente — o componente não gerencia seu próprio estado
- Mantenha os labels curtos e orientados a ação: "Editar", "Excluir", "Sair"
- Use \`DropdownTitle\` para separar grupos logicamente distintos
- Combine com um handler de clique fora para fechar o menu ao clicar fora dele
        `,
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10084",
    },
  },
  argTypes: {
    visible: {
      control: "boolean",
      description:
        "Controla a visibilidade do menu via CSS. Quando `false`, o menu permanece no DOM mas fica oculto com `opacity: 0` e `visibility: hidden` — permitindo a animação de saída.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    align: {
      control: "radio",
      options: ["left", "right"],
      description:
        'Define a borda do gatilho à qual o painel é ancorado. `"left"` (padrão) expande para a direita; `"right"` expande para a esquerda — use quando o gatilho estiver próximo à borda direita da tela.',
      table: {
        defaultValue: { summary: '"left"' },
        type: { summary: '"left" | "right"' },
      },
    },
    children: {
      control: false,
      description:
        "Conteúdo do menu — componha com `<DropdownTitle>` e `<DropdownItem>`.",
      table: { type: { summary: "React.ReactNode" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

// ─── 1. Default ───────────────────────────────────────────────────────────────

/**
 * Menu padrão com títulos de seção e ícones nos itens.
 * Demonstra a composição completa com `DropdownTitle` e `DropdownItem`.
 */
export const Default: Story = {
  name: "Default",
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "220px", width: "fit-content" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    visible: true,
    align: "left",
    children: (
      <>
        <DropdownTitle label="Conta" />
        <DropdownItem icon="person" label="Perfil" onClick={() => {}} />
        <DropdownItem
          icon="settings"
          label="Configurações"
          onClick={() => {}}
        />
        <DropdownTitle label="Sessão" />
        <DropdownItem icon="logout" label="Sair" onClick={() => {}} />
      </>
    ),
  },
};

// ─── 2. Variações de composição ───────────────────────────────────────────────

/**
 * Itens sem ícone — apenas labels.
 * Use quando os itens são autoexplicativos e o ícone não agrega contexto.
 */
export const NoIcons: Story = {
  name: "Composição — sem ícones",
  decorators: [
    (Story) => (
      <div style={{ minHeight: "150px", width: "fit-content" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    visible: true,
    children: (
      <>
        <DropdownItem label="Copiar" onClick={() => {}} />
        <DropdownItem label="Colar" onClick={() => {}} />
        <DropdownItem label="Excluir" onClick={() => {}} />
      </>
    ),
  },
};

/**
 * Item único sem título de seção.
 * Padrão comum em dropdowns de ação única como o botão de logout no Header.
 */
export const SingleItem: Story = {
  name: "Composição — item único",
  decorators: [
    (Story) => (
      <div style={{ minHeight: "70px", width: "fit-content" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    visible: true,
    children: <DropdownItem icon="logout" label="Sair" onClick={() => {}} />,
  },
};

/**
 * Menu com múltiplas seções agrupadas por `DropdownTitle`.
 * Demonstra o agrupamento semântico de itens por contexto.
 */
export const WithSections: Story = {
  name: "Composição — com seções",
  parameters: { docs: { story: { inline: false, iframeHeight: 400 } } },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "320px", width: "fit-content" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    visible: true,
    children: (
      <>
        <DropdownTitle label="Arquivo" />
        <DropdownItem icon="add" label="Novo" onClick={() => {}} />
        <DropdownItem icon="upload" label="Importar" onClick={() => {}} />
        <DropdownTitle label="Edição" />
        <DropdownItem icon="edit" label="Renomear" onClick={() => {}} />
        <DropdownItem icon="content_copy" label="Duplicar" onClick={() => {}} />
        <DropdownTitle label="Perigo" />
        <DropdownItem icon="delete" label="Excluir" onClick={() => {}} />
      </>
    ),
  },
};

// ─── 3. Alinhamento ───────────────────────────────────────────────────────────

/**
 * Comparação lado a lado dos dois alinhamentos no mesmo contexto.
 * O botão da esquerda abre para a direita; o da direita abre para a esquerda.
 * Observe também a diferença no `transform-origin` da animação de entrada.
 */
export const AlignComparison: Story = {
  name: "Alinhamento — comparação",
  parameters: { docs: { story: { inline: false, iframeHeight: 280 } } },
  render: () => {
    const [openSide, setOpenSide] = useState<"left" | "right" | null>(null);
    const items = (side: "left" | "right") => (
      <>
        <DropdownItem
          icon="edit"
          label="Editar"
          onClick={() => setOpenSide(null)}
        />
        <DropdownItem
          icon="delete"
          label="Excluir"
          onClick={() => setOpenSide(null)}
        />
      </>
    );
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ position: "relative" }}>
          <div style={{ width: "fit-content" }}>
            <Button
              onClick={() => setOpenSide(openSide === "left" ? null : "left")}
            >
              "left"
            </Button>
          </div>
          <Dropdown visible={openSide === "left"} align="left">
            {items("left")}
          </Dropdown>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ width: "fit-content" }}>
            <Button
              onClick={() => setOpenSide(openSide === "right" ? null : "right")}
            >
              "right"
            </Button>
          </div>
          <Dropdown visible={openSide === "right"} align="right">
            {items("right")}
          </Dropdown>
        </div>
      </div>
    );
  },
};

// ─── 4. Uso controlado ────────────────────────────────────────────────────────

/**
 * Dropdown controlado com estado externo via `useState`.
 * Demonstra o padrão correto: `visible` acionado por um botão
 * e fechamento ao clicar em um item via `onClick`.
 */
export const Controlled: Story = {
  name: "Controlado — toggle por botão",
  decorators: [
    (Story) => (
      <div style={{ minHeight: "220px", width: "fit-content" }}>
        <Story />
      </div>
    ),
  ],
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div style={{ position: "relative", width: "fit-content" }}>
        <div style={{ width: "fit-content" }}>
          <Button onClick={() => setIsOpen((prev) => !prev)}>
            Clique aqui!
          </Button>
        </div>
        <Dropdown visible={isOpen}>
          <DropdownTitle label="Ações" />
          <DropdownItem
            icon="edit"
            label="Editar"
            onClick={() => setIsOpen(false)}
          />
          <DropdownItem
            icon="content_copy"
            label="Duplicar"
            onClick={() => setIsOpen(false)}
          />
          <DropdownItem
            icon="delete"
            label="Excluir"
            onClick={() => setIsOpen(false)}
          />
        </Dropdown>
      </div>
    );
  },
};

// ─── 5. Contexto real ─────────────────────────────────────────────────────────

/**
 * Dropdown de perfil acionado por Avatar — padrão do Header da aplicação.
 * Usa `align="right"` pois o Avatar está no canto direito do Header.
 */
export const ProfileMenu: Story = {
  name: "Contexto real — menu de perfil",
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: "220px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Story />
      </div>
    ),
  ],
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div style={{ position: "relative" }}>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Avatar size="md" letter="Jane Doe" />
        </div>
        <Dropdown visible={isOpen} align="right">
          <DropdownTitle label="Jane Doe" />
          <DropdownItem
            icon="person"
            label="Meu perfil"
            onClick={() => setIsOpen(false)}
          />
          <DropdownItem
            icon="settings"
            label="Configurações"
            onClick={() => setIsOpen(false)}
          />
          <DropdownItem
            icon="logout"
            label="Sair"
            onClick={() => setIsOpen(false)}
          />
        </Dropdown>
      </div>
    );
  },
};

/**
 * Menu de overflow em linha de tabela — padrão de três pontos (⋮).
 * Cada linha tem seu menu independente com `align="right"`.
 * Abrir um menu fecha os demais automaticamente.
 */
export const OverflowMenu: Story = {
  name: "Contexto real — menu de overflow (⋮)",
  parameters: { docs: { story: { inline: false, iframeHeight: 380 } } },
  render: () => {
    const [openId, setOpenId] = useState<string | null>(null);
    const rows = [
      { id: "1", name: "Notebook Pro X" },
      { id: "2", name: "Mouse Ergonômico" },
      { id: "3", name: "Teclado Mecânico" },
    ];
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--s-spacing-nano)",
          width: "320px",
        }}
      >
        {rows.map(({ id, name }) => (
          <div
            key={id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "var(--s-spacing-x-small) var(--s-spacing-small)",
              border:
                "var(--s-border-width-hairline) solid var(--s-color-border-default)",
              borderRadius: "var(--s-border-radius-medium)",
              background: "var(--s-color-fill-default)",
              position: "relative",
            }}
          >
            <small>{name}</small>
            <div style={{ position: "relative" }}>
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "4px",
                }}
                onClick={() => setOpenId(openId === id ? null : id)}
              >
                <small>⋮</small>
              </button>
              <Dropdown visible={openId === id} align="right">
                <DropdownItem
                  icon="edit"
                  label="Editar"
                  onClick={() => setOpenId(null)}
                />
                <DropdownItem
                  icon="content_copy"
                  label="Duplicar"
                  onClick={() => setOpenId(null)}
                />
                <DropdownItem
                  icon="delete"
                  label="Excluir"
                  onClick={() => setOpenId(null)}
                />
              </Dropdown>
            </div>
          </div>
        ))}
      </div>
    );
  },
};

// ─── 6. Edge cases ────────────────────────────────────────────────────────────

/**
 * Pai estreito — valida que o menu expande além do pai usando
 * `min-width: 100%; width: max-content`, sem quebrar o conteúdo.
 */
export const NarrowParent: Story = {
  name: "Edge case — pai estreito",
  decorators: [
    (Story) => (
      <div style={{ minHeight: "160px", position: "relative" }}>
        <div
          style={{
            width: "40px",
            border: "1px dashed var(--s-color-border-default)",
            position: "relative",
          }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
  args: {
    visible: true,
    children: (
      <>
        <DropdownTitle label="Ações" />
        <DropdownItem icon="edit" label="Editar" onClick={() => {}} />
        <DropdownItem icon="delete" label="Excluir" onClick={() => {}} />
      </>
    ),
  },
};

/**
 * Label longo — valida o layout quando o texto de um item
 * excede a largura natural do menu.
 */
export const LongLabel: Story = {
  name: "Edge case — label longo",
  decorators: [
    (Story) => (
      <div style={{ minHeight: "160px", width: "fit-content" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    visible: true,
    children: (
      <>
        <DropdownTitle label="Configurações avançadas" />
        <DropdownItem
          icon="settings"
          label="Gerenciar preferências de notificação"
          onClick={() => {}}
        />
        <DropdownItem
          icon="security"
          label="Autenticação em dois fatores"
          onClick={() => {}}
        />
        <DropdownItem icon="logout" label="Sair da conta" onClick={() => {}} />
      </>
    ),
  },
};

/**
 * Muitos itens (12) — valida o escalonamento máximo de `transition-delay`
 * e o comportamento de overflow quando o menu excede a altura da viewport.
 */
export const ManyItems: Story = {
  name: "Edge case — muitos itens (máx. delay escalonado)",
  parameters: { docs: { story: { inline: false, iframeHeight: 500 } } },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "550px", width: "fit-content" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    visible: true,
    children: (
      <>
        <DropdownTitle label="Opções" />
        {Array.from({ length: 12 }, (_, i) => (
          <DropdownItem
            key={i}
            icon="chevron_right"
            label={`Item ${i + 1}`}
            onClick={() => {}}
          />
        ))}
      </>
    ),
  },
};
