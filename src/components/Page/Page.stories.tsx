import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Page } from "./index";
import { Button } from "../Button";
import ButtonIcon from "../ButtonIcon";
import Badge from "../Badge/Badge";
import "../../styles.scss";

const meta: Meta<typeof Page> = {
  title: "Templates/Page",
  component: Page,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
O **Page** é o componente estrutural de layout que define a área principal de cada rota da aplicação.

Fornece um header padronizado com título, botão de voltar opcional,
área de ações customizável e slot de descrição — garantindo consistência
visual entre todas as páginas do produto.

### Anatomia do header
\`\`\`
┌─────────────────────────────────────────────────────┐
│  [← voltar]  Título da Página         [ações]        │
│  Descrição opcional (recuada quando voltar ativo)    │
└─────────────────────────────────────────────────────┘
\`\`\`

### Responsividade
Em viewports \`≤ 768px\` os botões de ação com label (\`.button-actions\`) são
ocultados e substituídos pelos ícones (\`.button-icon-actions\`) para economizar espaço.

### Quando usar
- Como wrapper de alto nível para cada rota/tela da aplicação
- Sempre que precisar de consistência visual no header das páginas

### Quando não usar
- Dentro de modais, drawers ou painéis laterais — esses contextos têm layouts próprios
        `,
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=2416-4557',
     },
  },
  argTypes: {
    namePage: {
      control: "text",
      description: "Título principal exibido no header da página.",
      table: { type: { summary: "string" } },
    },
    withBackButton: {
      control: "boolean",
      description:
        "Exibe o botão de voltar (`arrow_back`) à esquerda do título quando `true`.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    description: {
      control: "text",
      description:
        "Conteúdo descritivo exibido abaixo do header. Recuado à esquerda quando `withBackButton` é `true`. Aceita `ReactNode`.",
      table: { type: { summary: "React.ReactNode" } },
    },
    actions: {
      control: false,
      description:
        "Slot de ações renderizado no lado direito do header. Aceita qualquer `ReactNode` — botões, menus, etc.",
      table: { type: { summary: "React.ReactNode" } },
    },
    onClickBackButton: {
      action: "onClickBackButton",
      description:
        "Callback disparado ao clicar no botão de voltar. Tipicamente navega para a rota anterior.",
      table: { type: { summary: "() => void" } },
    },
    children: {
      control: false,
      description: "Conteúdo principal da página, renderizado abaixo do header.",
      table: { type: { summary: "React.ReactNode" } },
    },
  },
  args: {
    namePage: "Nome da página",
    withBackButton: false,
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100%', width: '100%' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Page>;

// ─── Fixture compartilhada ────────────────────────────────────────────────────

const PageContent = () => (
  <div
  >
    <p>Conteúdo da página</p>
  </div>
);

// ─── 1. Default ───────────────────────────────────────────────────────────────

/**
 * Header mínimo — apenas título e área de conteúdo.
 * Use como ponto de partida para qualquer rota da aplicação.
 */
export const Default: Story = {
  name: "Default",
  args: {
    namePage: "Usuários",
    children: <PageContent />,
  },
};

// ─── 2. Variações do header ───────────────────────────────────────────────────

/**
 * Header com botão de voltar.
 * A descrição é recuada automaticamente para se alinhar ao título
 * quando `withBackButton` é `true`.
 */
export const WithBackButton: Story = {
  name: "Header — com botão de voltar",
  args: {
    namePage: "Detalhes do usuário",
    withBackButton: true,
    onClickBackButton: () => {},
    children: <PageContent />,
  },
};

/**
 * Header com descrição abaixo do título.
 * Use para contextualizar o propósito da página ao usuário.
 */
export const WithDescription: Story = {
  name: "Header — com descrição",
  args: {
    namePage: "Usuários",
    description: "Gerencie os membros e as permissões do workspace.",
    children: <PageContent />,
  },
};

/**
 * Header com ação primária única.
 * Padrão mais comum em listagens: título à esquerda, botão de criação à direita.
 */
export const WithSingleAction: Story = {
  name: "Header — com ação única",
  render: () => (
    <Page
      namePage="Usuários"
      description="Gerencie os membros do workspace."
      actions={
        <div style={{ width: "fit-content" }}>
          <Button variant="primary" size="md" icon="add">
            Novo usuário
          </Button>
        </div>
      }
    >
      <PageContent />
    </Page>
  ),
};

/**
 * Header com múltiplas ações.
 * Use quando há uma ação principal e uma ou mais ações secundárias.
 */
export const WithMultipleActions: Story = {
  name: "Header — com múltiplas ações",
  render: () => (
    <Page
      namePage="Relatório Q3"
      description="Visualize os dados consolidados do terceiro trimestre."
      actions={
        <>
          <div style={{ width: "fit-content" }}>
            <Button variant="secondary" size="md" icon="download">
              Exportar
            </Button>
          </div>
          <div style={{ width: "fit-content" }}>
            <Button variant="primary" size="md" icon="edit">
              Editar
            </Button>
          </div>
        </>
      }
    >
      <PageContent />
    </Page>
  ),
};

// ─── 3. Composição completa ───────────────────────────────────────────────────

/**
 * Composição completa com todos os slots ativos:
 * botão de voltar, título, descrição, ações e conteúdo.
 * Demonstra o layout mais completo possível do componente.
 */
export const FullPage: Story = {
  name: "Composição — todos os slots",
  render: () => (
    <Page
      namePage="Detalhes do pedido"
      withBackButton
      onClickBackButton={() => {}}
      description="Visualize e edite as informações do pedido selecionado."
      actions={
        <>
          <div style={{ width: "fit-content" }}>
            <Button variant="secondary" size="md">
              Cancelar
            </Button>
          </div>
          <div style={{ width: "fit-content" }}>
            <Button variant="primary" size="md">
              Salvar
            </Button>
          </div>
        </>
      }
    >
      <PageContent />
    </Page>
  ),
};

// ─── 4. Contexto real ─────────────────────────────────────────────────────────

const userListRows = [
  { name: "Ana Souza", role: "Admin", status: "Ativo" },
  { name: "Carlos Lima", role: "Editor", status: "Ativo" },
  { name: "Jane Doe", role: "Viewer", status: "Inativo" },
];

const UserRow = ({
  name,
  role,
  status,
  isLast,
}: {
  name: string;
  role: string;
  status: string;
  isLast: boolean;
}) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "var(--s-spacing-x-small) var(--s-spacing-small)",
      borderBottom: isLast
        ? "none"
        : "var(--s-border-width-hairline) solid var(--s-color-border-default)",
      background: "var(--s-color-fill-default)",
    }}
  >
    <div style={{ display: "flex", gap: "var(--s-spacing-x-small)", alignItems: "center" }}>
      <small><strong>{name}</strong></small>
      <small>{role}</small>
    </div>
    <Badge
      label={status}
      type="light"
      variant={status === "Ativo" ? "success" : "default"}
    />
  </div>
);

/**
 * Página de listagem de usuários — padrão de tabela com ação de criação.
 * Layout típico de dashboards administrativos.
 */
export const UserListPage: Story = {
  name: "Contexto real — listagem de usuários",
  render: () => (
    <Page
      namePage="Usuários"
      description="Gerencie os membros e as permissões do workspace."
      actions={
        <div style={{ width: "fit-content" }}>
          <Button variant="primary" size="md" icon="add">
            Novo usuário
          </Button>
        </div>
      }
    >
      <div
        style={{
          border: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
          borderRadius: "var(--s-border-radius-medium)",
          overflow: "hidden",
        }}
      >
        {userListRows.map(({ name, role, status }, i) => (
          <UserRow
            key={name}
            name={name}
            role={role}
            status={status}
            isLast={i === userListRows.length - 1}
          />
        ))}
      </div>
    </Page>
  ),
};

/**
 * Página de detalhes com botão de voltar — layout de detalhe/edição.
 * O recuo da descrição alinha com o título, ignorando a largura do botão de voltar.
 */
const orderFields = [
  { label: "Cliente", value: "Jane Doe" },
  { label: "Status", value: "Enviado" },
  { label: "Total", value: "R$ 4.299,00" },
  { label: "Data", value: "21/03/2025" },
];

const OrderField = ({ label, value }: { label: string; value: string }) => (
  <div
    style={{
      padding: "var(--s-spacing-small)",
      border: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
      borderRadius: "var(--s-border-radius-medium)",
      background: "var(--s-color-fill-default)",
    }}
  >
    <small>{label}</small>
    <p style={{ font: "var(--s-typography-paragraph-strong)" }}>{value}</p>
  </div>
);

/**
 * Página de detalhes com botão de voltar — layout de detalhe/edição.
 * O recuo da descrição alinha com o título, ignorando a largura do botão de voltar.
 */
export const DetailPage: Story = {
  name: "Contexto real — página de detalhes",
  render: () => (
    <Page
      namePage="Pedido #1042"
      withBackButton
      onClickBackButton={() => {}}
      description="Visualize e edite as informações do pedido."
      actions={
        <>
          <div style={{ width: "fit-content" }}>
            <Button variant="secondary" size="md">Cancelar</Button>
          </div>
          <div style={{ width: "fit-content" }}>
            <Button variant="primary" size="md">Salvar</Button>
          </div>
        </>
      }
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--s-spacing-small)",
        }}
      >
        {orderFields.map(({ label, value }) => (
          <OrderField key={label} label={label} value={value} />
        ))}
      </div>
    </Page>
  ),
};

// ─── 5. Mobile ────────────────────────────────────────────────────────────────

const MobileActions = () => (
  <>
    <div className="button-actions" style={{ width: "fit-content" }}>
      <Button variant="primary" size="md" icon="add">
        Novo usuário
      </Button>
    </div>
    <div className="button-icon-actions">
      <ButtonIcon variant="primary" size="md" icon="add" appearance="default" />
    </div>
  </>
);

/**
 * Layout mobile (≤ 768px) — botões de ação com label são ocultados e
 * substituídos pelos `ButtonIcon` equivalentes para economizar espaço no header.
 */
export const MobileLayout: Story = {
  name: "Layout mobile (≤ 768px)",
  globals: {
    viewport: { value: "mobile5", isRotated: false },
  },
  render: () => (
    <Page
      namePage="Usuários"
      description="Gerencie os membros do workspace."
      actions={<MobileActions />}
    >
      <PageContent />
    </Page>
  ),
};