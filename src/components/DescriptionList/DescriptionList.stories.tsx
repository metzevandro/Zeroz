import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import DescriptionList from "./DescriptionList";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof DescriptionList> = {
  title: "Components/DescriptionList",
  component: DescriptionList,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=1641-12874",
    },
    docs: {
      description: {
        component: `
**DescriptionList** exibe uma lista estruturada de pares rótulo/valor,
semanticamente equivalente a um \`<dl>\` HTML.

Cada item gera uma linha com divisor inferior — exceto o último.
O layout de cada linha é controlado pela prop \`direction\`.

### Quando usar
- Detalhar registros: perfil de usuário, resumo de pedido, especificações de produto
- Apresentar metadados chave/valor de forma legível
- Revisar dados de formulário antes do envio

### Quando **não** usar
- Dados tabulares com múltiplas colunas comparáveis → use \`Table\`
- Listas simples sem par rótulo/valor → use \`<ul>\` ou \`List\`
- Conteúdo rico com imagens ou ações por linha → use um \`Card\` ou \`ListItem\`

### Boas práticas
- Mantenha os \`title\` curtos e em comprimento consistente para equilíbrio visual
- Use \`direction="row"\` para containers largos (desktop)
- Use \`direction="column"\` para containers estreitos ou mobile
- Quando \`description\` for desconhecido, passe \`"—"\` como placeholder em vez de omitir
        `,
      },
    },
  },
  argTypes: {
    direction: {
      control: "radio",
      options: ["row", "column"],
      description:
        "Layout de cada linha. `row` = rótulo e valor lado a lado; `column` = rótulo acima do valor.",
      table: {
        type: { summary: '"row" | "column"' },
      },
    },
    items: {
      control: "object",
      description:
        "Array de pares `{ title, description }`. `description` é opcional — renderiza célula vazia se omitido.",
      table: {
        type: { summary: "DescriptionItem[]" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DescriptionList>;

// ─── Fixtures ─────────────────────────────────────────────────────────────────

const accountItems = [
  { title: "Nome completo", description: "Jane Doe" },
  { title: "E-mail", description: "jane@example.com" },
  { title: "Plano", description: "Pro" },
  { title: "Status", description: "Ativo" },
  { title: "Renovação", description: "15/08/2025" },
];

const orderItems = [
  { title: "Nº do pedido", description: "#BR-00482" },
  { title: "Data", description: "02/06/2026" },
  { title: "Produto", description: "Design System Starter Kit" },
  { title: "Qtd.", description: "1" },
  { title: "Subtotal", description: "R$ 299,00" },
  { title: "Desconto", description: "–R$ 30,00" },
  { title: "Total", description: "R$ 269,00" },
  { title: "Pagamento", description: "Cartão de crédito" },
  { title: "Parcelas", description: "3× R$ 89,67" },
  { title: "Situação", description: "Aprovado" },
];

// ─── 1. Default ───────────────────────────────────────────────────────────────

/**
 * Estado base: layout `row` com 5 pares rótulo/valor.
 * Representa o caso de uso mais comum — detalhe de registro em tela larga.
 */
export const Default: Story = {
  name: "Default",
  args: {
    direction: "row",
    items: accountItems,
  },
};

// ─── 2. Variações de direção ──────────────────────────────────────────────────

/**
 * Layout `row` — rótulo e valor side by side, cada um ocupando 50% da largura.
 * Indicado para containers com largura suficiente (≥ 320 px).
 */
export const Row: Story = {
  name: "Direction — row",
  args: {
    direction: "row",
    items: accountItems,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Cada linha exibe `title` e `description` lado a lado. Cada coluna ocupa 50% da largura total do container.",
      },
    },
  },
};

/**
 * Layout `column` — rótulo empilhado acima do valor.
 * Indicado para containers estreitos ou breakpoints mobile.
 */
export const Column: Story = {
  name: "Direction — column",
  args: {
    direction: "column",
    items: accountItems,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Cada linha exibe `title` acima de `description`. Gap entre eles controlado por `--s-spacing-xx-small`.",
      },
    },
  },
};

/**
 * Comparação lado a lado das duas direções com o mesmo conjunto de dados.
 * Útil para decisão de layout em contextos responsivos.
 */
export const DirectionComparison: Story = {
  name: "Direction comparison (row vs column)",
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "48px",
        alignItems: "flex-start",
        flexWrap: "wrap",
      }}
    >
      <div style={{ flex: 1, minWidth: "240px" }}>
        <p
          style={{
            marginBottom: "8px",
            fontWeight: 600,
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            color: "gray",
          }}
        >
          row
        </p>
        <DescriptionList direction="row" items={accountItems} />
      </div>
      <div style={{ flex: 1, minWidth: "240px" }}>
        <p
          style={{
            marginBottom: "8px",
            fontWeight: 600,
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            color: "gray",
          }}
        >
          column
        </p>
        <DescriptionList direction="column" items={accountItems} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Comparação visual de `row` e `column` com os mesmos dados. Use para validar qual direção encaixa melhor no contexto do layout.",
      },
    },
  },
};

// ─── 3. Variações de conteúdo ─────────────────────────────────────────────────

/**
 * Lista longa com 10 itens — valida o espaçamento uniforme dos divisores
 * e o comportamento visual ao rolar o container.
 */
export const LongList: Story = {
  name: "Long list (10 items)",
  args: {
    direction: "row",
    items: orderItems,
  },
  parameters: {
    docs: {
      description: {
        story:
          "10 itens com divisores entre todos, exceto o último. Valida consistência de espaçamento (`--s-spacing-small`) e alinhamento em listas extensas.",
      },
    },
  },
};

/**
 * Uso recomendado de placeholder `"—"` para valores ausentes.
 */
export const PlaceholderDash: Story = {
  name: "With placeholder \"—\" for missing values",
  args: {
    direction: "row",
    items: [
      { title: "Nome completo", description: "Jane Doe" },
      { title: "Telefone", description: "—" },
      { title: "Empresa", description: "—" },
      { title: "E-mail", description: "jane@example.com" },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Passando `\"—\"` quando o valor não está disponível, o alinhamento das colunas é preservado e a leitura fica mais clara.",
      },
    },
  },
};

/**
 * Valores com texto longo — valida quebra de linha e alinhamento
 * quando `description` ultrapassa uma linha.
 */
export const LongValues: Story = {
  name: "Long description values",
  args: {
    direction: "row",
    items: [
      { title: "Endereço", description: "Av. Paulista, 1234, Apto 56, Bela Vista, São Paulo – SP, 01310-100" },
      { title: "Observação", description: "Cliente solicitou entrega no período da tarde, entre 14h e 18h, com assinatura obrigatória." },
      { title: "Status", description: "Ativo" },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Valores longos quebram linha naturalmente dentro da célula de 50%. Confirme que o `title` permanece alinhado ao topo (`align-items: start`).",
      },
    },
  },
};

// ─── 4. Cenários reais ────────────────────────────────────────────────────────

/**
 * Resumo de pedido — cenário real de checkout ou confirmação de compra.
 */
export const OrderSummary: Story = {
  name: "Real-world — order summary",
  render: () => (
    <div style={{ maxWidth: "480px" }}>
      <p
        style={{
          marginBottom: "12px",
          fontWeight: 600,
          fontSize: "14px",
        }}
      >
        Resumo do pedido
      </p>
      <DescriptionList direction="row" items={orderItems} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Caso de uso real: resumo de pedido em tela de confirmação de compra. Demonstra o uso em container de largura limitada.",
      },
    },
  },
};

/**
 * Perfil de usuário mobile — layout `column` em container estreito (320 px).
 * Simula o comportamento em telas pequenas.
 */
export const MobileProfile: Story = {
  name: "Real-world — mobile profile (column, 320px)",
  render: () => (
    <div style={{ width: "320px" }}>
      <p
        style={{
          marginBottom: "12px",
          fontWeight: 600,
          fontSize: "14px",
        }}
      >
        Meu perfil
      </p>
      <DescriptionList direction="column" items={accountItems} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Layout `column` em container de 320 px, simulando uma tela mobile. Cada rótulo fica acima do valor para melhor legibilidade em telas estreitas.",
      },
    },
  },
};

/**
 * Múltiplas seções — demonstra o uso de várias instâncias
 * como seções distintas dentro de um mesmo painel.
 */
export const MultipleSections: Story = {
  name: "Multiple sections",
  render: () => (
    <div style={{ maxWidth: "480px", display: "flex", flexDirection: "column", gap: "32px" }}>
      <div>
        <p style={{ marginBottom: "8px", fontWeight: 600, fontSize: "13px", color: "gray" }}>
          DADOS PESSOAIS
        </p>
        <DescriptionList
          direction="row"
          items={[
            { title: "Nome", description: "Jane Doe" },
            { title: "E-mail", description: "jane@example.com" },
            { title: "Telefone", description: "+55 11 99999-0000" },
          ]}
        />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontWeight: 600, fontSize: "13px", color: "gray" }}>
          PLANO & COBRANÇA
        </p>
        <DescriptionList
          direction="row"
          items={[
            { title: "Plano", description: "Pro" },
            { title: "Valor mensal", description: "R$ 99,00" },
            { title: "Próxima cobrança", description: "02/07/2026" },
            { title: "Forma de pagamento", description: "Cartão •••• 4242" },
          ]}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Múltiplas instâncias de `DescriptionList` usadas como seções separadas dentro de um painel. Cada instância é independente e mantém seus próprios divisores.",
      },
    },
  },
};