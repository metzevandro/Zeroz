import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CardDropdown } from "./index";
import type { CardDropdownProps } from "./CardDropdown.types";
import { Button } from "../Button";
import Badge from "../Badge/Badge";
import "../../styles.scss";

const meta: Meta<CardDropdownProps> = {
  title: "Components/CardDropdown",
  component: CardDropdown,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
O **CardDropdown** é um card expansível que exibe um cabeçalho persistente e
revela conteúdo adicional ao ser clicado — com animação de abertura e fechamento.

> O \`title\` é **sempre visível** independentemente do estado aberto/fechado.
> Mantenha-o curto e objetivo para que o usuário entenda o conteúdo antes de expandir.

### Anatomia
\`\`\`
┌─────────────────────────────────┐
│  Header  (sempre visível)       │  ← clicável · title + description + chevron
├─────────────────────────────────┤
│  Content (revelado ao expandir) │  ← ReactNode livre
├─────────────────────────────────┤
│  Footer  (revelado ao expandir) │  ← fundo distinto · ideal para ações
└─────────────────────────────────┘
\`\`\`

### Props e slots
| Prop           | Obrigatório | Descrição                                                  |
|----------------|-------------|------------------------------------------------------------|
| \`title\`        | ✅ sim      | Título principal, sempre visível no cabeçalho              |
| \`description\`  | não         | Texto de apoio abaixo do título, também sempre visível     |
| \`content\`      | ¹           | Conteúdo revelado ao expandir — aceita qualquer ReactNode  |
| \`footer\`       | ¹           | Rodapé com fundo distinto — ideal para botões e links      |

> ¹ **Ao menos um de \`content\` ou \`footer\` deve ser fornecido** — um card que expande
> para o vazio não tem valor para o usuário.

### Quando usar
- Listas com detalhes sob demanda (pedidos, registros, histórico)
- Seções colapsáveis em painéis de configuração
- Resumos com opção de expansão para mais informações
- Agrupamento de informações em layouts compactos

### Quando não usar
- Quando o conteúdo precisa estar sempre visível — use \`Card\` simples
- Para navegação entre páginas — use um link ou menu
- Como substituto de modal para ações críticas
        `,
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10016",
    },
  } as any,
  argTypes: {
    title: {
      control: "text",
      description:
        "Título principal exibido no cabeçalho. Sempre visível independentemente do estado.",
      table: {
        type: { summary: "string" },
      },
    },
    description: {
      control: "text",
      description:
        "Texto descritivo exibido abaixo do título. Também sempre visível. Opcional.",
      table: {
        type: { summary: "string" },
      },
    },
    content: {
      control: false,
      description:
        "Conteúdo principal revelado ao expandir o card. Aceita qualquer `ReactNode`. Opcional.",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
    footer: {
      control: false,
      description:
        "Rodapé com fundo distinto, revelado ao expandir. Ideal para ações e botões. Opcional.",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "480px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<CardDropdownProps>;

// ─── 1. Playground ────────────────────────────────────────────────────────────

/**
 * Estado base com todas as props ativas.
 * Clique no cabeçalho para expandir e revelar o conteúdo e o rodapé.
 * Use os Controls para explorar as props individualmente.
 */
export const Default: Story = {
  name: "Default",
  args: {
    title: "Informações do pedido",
    description: "Clique para ver os detalhes",
    content: <p>Este é o conteúdo detalhado revelado ao expandir o card.</p>,
    footer: (
      <div style={{ width: "fit-content" }}>
        <Button variant="secondary" size="md">
          Ver pedido completo
        </Button>
      </div>
    ),
  },
};

// ─── 2. Variações de composição ───────────────────────────────────────────────

/**
 * Título + content mínimo — composição mais simples com valor expansível.
 * Sem descrição no cabeçalho e sem rodapé de ações.
 * Use quando o item precisa de um detalhe curto sob demanda, sem ação associada.
 */
export const TitleOnly: Story = {
  name: "Composição — título + content",
  args: {
    title: "Item de configuração",
    content: <p>Detalhes adicionais sobre este item de configuração.</p>,
  },
};

/**
 * Título + descrição + footer, sem content.
 * Ideal quando o cabeçalho já fornece contexto suficiente
 * e a expansão expõe diretamente uma ação.
 */
export const WithDescription: Story = {
  name: "Composição — título + descrição + footer",
  args: {
    title: "Resumo da assinatura",
    description: "Plano Pro · Renovação em 15/08/2025",
    footer: (
      <div style={{ width: "fit-content" }}>
        <Button variant="secondary" size="md">
          Gerenciar assinatura
        </Button>
      </div>
    ),
  },
};

/**
 * Título + descrição + content, sem footer.
 * Use quando o conteúdo expandido é puramente informativo,
 * sem necessidade de ação no rodapé.
 */
export const WithContentOnly: Story = {
  name: "Composição — com content, sem footer",
  args: {
    title: "Especificações técnicas",
    description: "Detalhes do produto selecionado",
    content: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--s-spacing-nano)",
        }}
      >
        {[
          { label: "Processador", value: "Intel i7-13700H" },
          { label: "Memória RAM", value: "16 GB DDR5" },
          { label: "Armazenamento", value: "512 GB SSD NVMe" },
          { label: "Tela", value: '14" 2K 120Hz' },
        ].map(({ label, value }) => (
          <div
            key={label}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <small>{label}</small>
            <small>{value}</small>
          </div>
        ))}
      </div>
    ),
  },
};

/**
 * Título + descrição + footer, sem content.
 * Use quando a expansão expõe diretamente uma ação,
 * sem necessidade de corpo informativo entre o header e o rodapé.
 */
export const WithFooterOnly: Story = {
  name: "Composição — com footer, sem content",
  args: {
    title: "Ação rápida",
    description: "Expanda para acessar a ação disponível",
    footer: (
      <div style={{ width: "fit-content" }}>
        <Button variant="primary" size="md">
          Executar ação
        </Button>
      </div>
    ),
  },
};

// ─── 3. Contexto real ─────────────────────────────────────────────────────────

/**
 * Card de pedido com status via Badge e detalhes de item.
 * Padrão típico em histórico de compras, listagens de pedidos e painéis de e-commerce.
 */
export const OrderCard: Story = {
  name: "Contexto real — pedido",
  args: {
    title: "Pedido #1042",
    description: "Realizado em 01/07/2025",
    content: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--s-spacing-x-small)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <small>Status</small>
          <Badge label="Enviado" type="light" variant="success" />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <small>Produto</small>
          <small>Notebook Pro X</small>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <small>Quantidade</small>
          <small>1 unidade</small>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <small>Total</small>
          <small>R$ 4.299,00</small>
        </div>
      </div>
    ),
    footer: (
      <div style={{ width: "fit-content" }}>
        <Button variant="secondary" size="md">
          Ver detalhes
        </Button>
      </div>
    ),
  },
};

/**
 * Card de seção de configuração colapsável.
 * Padrão comum em painéis de preferências e dashboards administrativos.
 */
export const SettingsSection: Story = {
  name: "Contexto real — seção de configurações",
  args: {
    title: "Notificações por e-mail",
    description: "Gerencie quais alertas você deseja receber",
    content: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--s-spacing-x-small)",
        }}
      >
        {[
          "Novos pedidos recebidos",
          "Atualizações de status de envio",
          "Alertas de estoque baixo",
          "Relatórios semanais",
        ].map((item) => (
          <div
            key={item}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <small>{item}</small>
            <Badge label="Ativo" type="light" variant="success" />
          </div>
        ))}
      </div>
    ),
    footer: (
      <div style={{ width: "fit-content" }}>
        <Button variant="secondary" size="md">
          Editar preferências
        </Button>
      </div>
    ),
  },
};

// ─── 4. Lista de cards ────────────────────────────────────────────────────────

/**
 * Múltiplos CardDropdowns empilhados — padrão de lista com detalhes sob demanda.
 * Cada card é independente: expandir um não afeta os demais.
 * Use para histórico de pedidos, logs de atividade e listas de registros.
 */
export const MultipleCards: Story = {
  name: "Lista de cards",
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "480px" }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--s-spacing-x-small)",
      }}
    >
      {[
        {
          id: "#1042",
          date: "01/07/2025",
          product: "Notebook Pro X",
          status: "Enviado",
          statusVariant: "success" as const,
        },
        {
          id: "#1043",
          date: "05/07/2025",
          product: "Mouse Ergonômico",
          status: "Em trânsito",
          statusVariant: "primary" as const,
        },
        {
          id: "#1044",
          date: "08/07/2025",
          product: "Teclado Mecânico",
          status: "Pendente",
          statusVariant: "warning" as const,
        },
      ].map(({ id, date, product, status, statusVariant }) => (
        <CardDropdown
          key={id}
          title={`Pedido ${id}`}
          description={`Realizado em ${date}`}
          content={
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <small>{product}</small>
              <Badge label={status} type="light" variant={statusVariant} />
            </div>
          }
          footer={
            <div style={{ width: "fit-content" }}>
              <Button variant="secondary" size="md">
                Ver detalhes
              </Button>
            </div>
          }
        />
      ))}
    </div>
  ),
};

// ─── 5. Edge cases ────────────────────────────────────────────────────────────

/**
 * Conteúdo longo — valida a animação de altura ao expandir um corpo denso.
 * O `useCardDropdown` calcula `scrollHeight` dinamicamente; este caso
 * confirma que a transição funciona corretamente com muitas linhas de conteúdo.
 */
export const LongContent: Story = {
  name: "Edge case — conteúdo longo",
  args: {
    title: "Termos e condições",
    description: "Leia com atenção antes de prosseguir",
    content: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--s-spacing-x-small)",
        }}
      >
        {Array.from({ length: 6 }, (_, i) => (
          <p key={i}>
            Parágrafo {i + 1}: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua ut enim.
          </p>
        ))}
      </div>
    ),
    footer: (
      <div style={{ width: "fit-content" }}>
        <Button variant="primary" size="md">
          Aceitar termos
        </Button>
      </div>
    ),
  },
};

/**
 * Título longo — valida se o layout do cabeçalho lida corretamente com
 * títulos extensos sem comprimir ou sobrepor o ícone de chevron.
 */
export const LongTitle: Story = {
  name: "Edge case — título longo",
  args: {
    title:
      "Configurações avançadas de notificações e preferências de entrega de mensagens",
    description: "Gerencie como e quando você recebe alertas do sistema",
    content: <p>Conteúdo da seção de configurações avançadas.</p>,
  },
};
