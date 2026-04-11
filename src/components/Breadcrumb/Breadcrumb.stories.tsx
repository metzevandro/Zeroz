import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumb from "./Breadcrumb";
import type { BreadcrumbItem } from "./Breadcrumb.types";
import "../../styles.scss";

const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
O **Breadcrumb** exibe uma trilha de navegação horizontal indicando a localização
atual do usuário dentro da hierarquia da aplicação.

> O componente é **ocultado em viewports ≤ 768px** via CSS.
> Em mobile, considere expor apenas o item anterior como link de retorno.

### Regras de renderização
- Todos os itens exceto o último são renderizados como links navegáveis
- O último item representa a página atual — renderizado como texto simples com \`aria-current="page"\` (sem link)
- Um separador chevron (\`keyboard_arrow_right\`) é exibido entre os itens, nunca após o último

### Acessibilidade
- Envolvido em \`<nav aria-label="Breadcrumb">\` para landmark de navegação
- Usa \`<ol>\` — elemento semântico correto para etapas sequenciais
- Último item com \`aria-current="page"\` conforme WCAG 2.1 SC 2.4.8

### Quando usar
- Hierarquias de múltiplos níveis: e-commerce, dashboards, CMS, documentação
- Fluxos de configuração com seções aninhadas
- Qualquer contexto onde o usuário precisa entender onde está e poder voltar

### Quando não usar
- Navegação plana ou de único nível — o breadcrumb não agrega valor
- Como único mecanismo de navegação em mobile — ele fica oculto abaixo de 768px
- Com apenas um item — uma trilha de um nível não tem valor navegacional
        `,
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10020",
    },
  },
  argTypes: {
    items: {
      control: "object",
      description:
        "Array ordenado de itens da trilha. O último item é a página atual (texto simples com `aria-current`, sem link).",
      table: {
        type: { summary: "BreadcrumbItem[]" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

// ─── Fixtures compartilhadas ──────────────────────────────────────────────────

const TRAIL_2: BreadcrumbItem[] = [
  { pageName: "Início", href: "/" },
  { pageName: "Produtos", href: "/produtos" },
];

const TRAIL_3: BreadcrumbItem[] = [
  { pageName: "Início", href: "/" },
  { pageName: "Produtos", href: "/produtos" },
  { pageName: "Notebooks", href: "/produtos/notebooks" },
];

const TRAIL_4: BreadcrumbItem[] = [
  { pageName: "Início", href: "/" },
  { pageName: "Loja", href: "/loja" },
  { pageName: "Eletrônicos", href: "/loja/eletronicos" },
  { pageName: "Notebooks", href: "/loja/eletronicos/notebooks" },
];

const TRAIL_5: BreadcrumbItem[] = [
  { pageName: "Início", href: "/" },
  { pageName: "Loja", href: "/loja" },
  { pageName: "Eletrônicos", href: "/loja/eletronicos" },
  { pageName: "Notebooks", href: "/loja/eletronicos/notebooks" },
  { pageName: "MacBook Pro", href: "/loja/eletronicos/notebooks/macbook-pro" },
];

// ─── 1. Playground ────────────────────────────────────────────────────────────

/**
 * Story interativa para explorar o componente via Controls.
 * Edite o array `items` no painel para testar diferentes trilhas.
 */
export const Playground: Story = {
  name: "Playground",
  args: {
    items: TRAIL_3,
  },
};

// ─── 2. Variações de profundidade ─────────────────────────────────────────────

/**
 * Dois níveis — profundidade mínima com valor navegacional.
 * Representa raiz + página atual. Menos que isso não tem utilidade como breadcrumb.
 */
export const TwoLevels: Story = {
  name: "Dois níveis",
  args: { items: TRAIL_2 },
};

/**
 * Três níveis — profundidade padrão para a maioria das hierarquias de aplicação.
 * Cobre a combinação mais comum: raiz → seção → página atual.
 */
export const ThreeLevels: Story = {
  name: "Três níveis",
  args: { items: TRAIL_3 },
};

/**
 * Quatro níveis — hierarquia intermediária.
 * Comum em dashboards com subseções: raiz → módulo → seção → página atual.
 */
export const FourLevels: Story = {
  name: "Quatro níveis",
  args: { items: TRAIL_4 },
};

/**
 * Cinco níveis — hierarquia profunda.
 * Valida o comportamento com trilhas longas. Em produção, considere truncar
 * os itens do meio para evitar sobrecarga visual.
 */
export const FiveLevels: Story = {
  name: "Cinco níveis (hierarquia profunda)",
  args: { items: TRAIL_5 },
};

// ─── 3. Contexto real ─────────────────────────────────────────────────────────

/**
 * Trilha de e-commerce — categoria → subcategoria → produto.
 * Demonstra o uso em páginas de produto com título de página abaixo.
 */
export const EcommerceTrail: Story = {
  name: "Contexto real — E-commerce",
  render: () => (
    <div style={{ padding: "16px" }}>
      <Breadcrumb
        items={[
          { pageName: "Início", href: "/" },
          { pageName: "Eletrônicos", href: "/eletronicos" },
          { pageName: "Notebooks", href: "/eletronicos/notebooks" },
          {
            pageName: 'MacBook Pro 14"',
            href: "/eletronicos/notebooks/macbook-pro-14",
          },
        ]}
      />
      <h1 style={{ marginTop: "16px", fontSize: "24px", fontWeight: 700 }}>
        MacBook Pro 14"
      </h1>
    </div>
  ),
};

/**
 * Trilha de dashboard — módulo de configurações com subseção.
 * Padrão típico de painéis administrativos com navegação aninhada.
 */
export const DashboardTrail: Story = {
  name: "Contexto real — Dashboard",
  render: () => (
    <div style={{ padding: "16px" }}>
      <Breadcrumb
        items={[
          { pageName: "Dashboard", href: "/dashboard" },
          { pageName: "Configurações", href: "/dashboard/configuracoes" },
          {
            pageName: "Notificações",
            href: "/dashboard/configuracoes/notificacoes",
          },
        ]}
      />
    </div>
  ),
};

/**
 * Trilha integrada ao Header — uso real dentro do AppShell.
 * Demonstra como o Breadcrumb se comporta quando compõe o Header da aplicação.
 */
export const InsideHeader: Story = {
  name: "Contexto real — dentro do Header",
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "12px 24px",
        background: "var(--s-color-fill-default, #fff)",
        borderBottom: "1px solid var(--s-color-border-default, #eee)",
        width: "500px",
      }}
    >
      <Breadcrumb
        items={[
          { pageName: "Dashboard", href: "/dashboard" },
          { pageName: "Usuários", href: "/dashboard/usuarios" },
          { pageName: "Perfil", href: "/dashboard/usuarios/perfil" },
        ]}
      />
    </div>
  ),
};

// ─── 4. Edge cases ────────────────────────────────────────────────────────────

/**
 * Item único — edge case sem valor navegacional.
 * Renderiza como texto com `aria-current="page"` sem nenhum link.
 * Evite em produção: uma trilha de um item não orienta o usuário.
 */
export const SingleItem: Story = {
  name: "Edge case — item único",
  args: {
    items: [{ pageName: "Início", href: "/" }],
  },
};

/**
 * Labels longos — valida o comportamento de layout com nomes de página extensos.
 * Mantenha os nomes curtos em produção para melhor legibilidade.
 */
export const LongLabels: Story = {
  name: "Edge case — labels longos",
  args: {
    items: [
      { pageName: "Início", href: "/" },
      { pageName: "Soluções Empresariais", href: "/empresarial" },
      {
        pageName: "Gerenciamento de Infraestrutura em Nuvem",
        href: "/empresarial/nuvem",
      },
    ],
  },
};

/**
 * Caracteres especiais e acentuação — valida renderização com texto em PT-BR
 * contendo acentos, cedilhas e outros caracteres Unicode comuns.
 */
export const SpecialChars: Story = {
  name: "Edge case — caracteres especiais",
  args: {
    items: [
      { pageName: "Início", href: "/" },
      { pageName: "Configurações & Preferências", href: "/configuracoes" },
      {
        pageName: "Notificações por E-mail",
        href: "/configuracoes/notificacoes",
      },
    ],
  },
};
