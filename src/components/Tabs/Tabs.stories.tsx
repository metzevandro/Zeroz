import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Tabs } from "./index";
import  Badge from '../Badge/index'
import "../../styles.scss";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
O **Tabs** renderiza uma faixa horizontal de abas com indicador deslizante animado
e um painel de conteúdo para a aba ativa.

O indicador desliza suavemente entre as abas via transições CSS em um elemento
absolutamente posicionado cujas propriedades \`left\` e \`width\` são derivadas
do \`getBoundingClientRect()\` do botão ativo.

Quando a faixa transborda horizontalmente, a aba ativa é automaticamente
centralizada na área visível via scroll suave.

### Props
| Prop         | Tipo          | Padrão    | Descrição                                                          |
|--------------|---------------|-----------|--------------------------------------------------------------------|
| \`tabs\`      | \`TabItem[]\`  | —         | Array de definições de aba. Cada entrada produz um botão e painel  |
| \`widthFull\` | \`boolean\`   | \`false\`  | Estica cada botão para preencher uma fração igual da largura       |

### TabItem
| Campo      | Tipo               | Descrição                                    |
|------------|--------------------|----------------------------------------------|
| \`label\`   | \`string\`          | Texto exibido no botão da aba                |
| \`content\` | \`React.ReactNode\` | Conteúdo renderizado quando a aba está ativa |

### Quando usar
- Alternar entre visualizações relacionadas dentro do mesmo contexto
- Conteúdo denso que pertence à mesma página mas não pode ser exibido de uma vez

### Boas práticas
- Mantenha os labels curtos (1–2 palavras) para evitar overflow em telas pequenas
- Use \`widthFull\` quando há 2–4 abas e deseja que preencham a largura uniformemente
- Evite mais de 6–7 abas — prefira um dropdown ou navegação lateral
        `,
      },
    },
    design: {
      type: 'figma',
       url: 'https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10080',
    },
  },
  argTypes: {
    widthFull: {
      control: "boolean",
      description:
        "Quando `true`, estica cada botão de aba para preencher uma fração igual da largura disponível.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    tabs: {
      control: false,
      description:
        "Array de objetos `{ label, content }` que definem cada aba e seu painel de conteúdo. Use `render` nas stories — JSX em `args` causa erros de serialização no Storybook.",
      table: { type: { summary: "TabItem[]" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

// ─── Helper de painel ─────────────────────────────────────────────────────────

const Panel = ({ title, description }: { title: string; description?: string }) => (
  <div style={{ padding: "var(--s-spacing-x-small) 0" }}>
    <p style={{ font: "var(--s-typography-paragraph-strong)" }}>{title}</p>
    {description && (
      <p style={{ font: "var(--s-typography-paragraph-regular)" }}>{description}</p>
    )}
  </div>
);

// ─── 1. Default ───────────────────────────────────────────────────────────────

/**
 * Três abas padrão com conteúdo de painel.
 * Clique nas abas para ver o indicador deslizar e o conteúdo trocar.
 */
export const Default: Story = {
  name: "Default",
  render: () => (
    <Tabs
      tabs={[
        { label: "Visão geral", content: <Panel title="Visão geral" description="Resumo consolidado das informações do registro." /> },
        { label: "Detalhes", content: <Panel title="Detalhes" description="Informações completas e campos detalhados." /> },
        { label: "Histórico", content: <Panel title="Histórico" description="Registro cronológico de todas as alterações." /> },
      ]}
    />
  ),
};

// ─── 2. Variações de largura ──────────────────────────────────────────────────

/**
 * Abas em largura total — cada botão preenche uma fração igual da largura.
 * Recomendado para 2–4 abas em containers com largura definida.
 */
export const WidthFull: Story = {
  name: "Largura total (widthFull)",
  render: () => (
    <Tabs
      widthFull
      tabs={[
        { label: "Visão geral", content: <Panel title="Visão geral" description="Resumo consolidado das informações do registro." /> },
        { label: "Detalhes", content: <Panel title="Detalhes" description="Informações completas e campos detalhados." /> },
        { label: "Histórico", content: <Panel title="Histórico" description="Registro cronológico de todas as alterações." /> },
      ]}
    />
  ),
};

/**
 * Comparativo lado a lado de largura automática vs. largura total.
 */
export const WidthComparison: Story = {
  name: "Comparativo — largura automática vs. total",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-large)" }}>
      <div>
        <small style={{ display: "block", marginBottom: "var(--s-spacing-nano)" }}>
          widthFull: false (padrão)
        </small>
        <Tabs
          tabs={[
            { label: "Aba 1", content: <Panel title="Aba 1" /> },
            { label: "Aba 2", content: <Panel title="Aba 2" /> },
            { label: "Aba 3", content: <Panel title="Aba 3" /> },
          ]}
        />
      </div>
      <div>
        <small style={{ display: "block", marginBottom: "var(--s-spacing-nano)" }}>
          widthFull: true
        </small>
        <Tabs
          widthFull
          tabs={[
            { label: "Aba 1", content: <Panel title="Aba 1" /> },
            { label: "Aba 2", content: <Panel title="Aba 2" /> },
            { label: "Aba 3", content: <Panel title="Aba 3" /> },
          ]}
        />
      </div>
    </div>
  ),
};

// ─── 3. Variações de quantidade ───────────────────────────────────────────────

/**
 * Duas abas com `widthFull` — padrão comum para alternância binária
 * como "Ativos / Arquivados" ou "Entrada / Saída".
 */
export const TwoTabs: Story = {
  name: "Duas abas",
  render: () => (
    <Tabs
      widthFull
      tabs={[
        { label: "Ativos", content: <Panel title="Ativos" description="Registros ativos no sistema." /> },
        { label: "Arquivados", content: <Panel title="Arquivados" description="Registros arquivados e inativados." /> },
      ]}
    />
  ),
};

/**
 * Muitas abas — demonstra o scroll horizontal automático e o
 * comportamento de centralização da aba ativa quando a faixa transborda.
 * Clique em abas longe da vista para ver o auto-scroll.
 */
export const ManyTabs: Story = {
  name: "Muitas abas (scrollável)",
  render: () => (
    <Tabs
      tabs={[
        "Dashboard",
        "Análises",
        "Usuários",
        "Faturamento",
        "Configurações",
        "Integrações",
        "Logs",
        "Suporte",
      ].map((label) => ({
        label,
        content: <Panel title={label} description={`Conteúdo da aba ${label}.`} />,
      }))}
    />
  ),
};

// ─── 4. Conteúdo rico no painel ───────────────────────────────────────────────

/**
 * Conteúdo do painel como ReactNode livre — demonstra que `content`
 * aceita qualquer elemento React, incluindo Badges, listas e componentes compostos.
 */
export const RichContent: Story = {
  name: "Conteúdo rico no painel",
  render: () => (
    <Tabs
      tabs={[
        {
          label: "Resumo",
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-x-small)", padding: "var(--s-spacing-x-small) 0" }}>
              <div style={{ display: "flex", gap: "var(--s-spacing-nano)" }}>
                <Badge label="Ativo" type="light" variant="success" />
                <Badge label="Pro" type="default" variant="primary" />
              </div>
              <p style={{ font: "var(--s-typography-paragraph-regular)" }}>
                Conta criada em Janeiro de 2024. Plano Pro com renovação mensal.
              </p>
            </div>
          ),
        },
        {
          label: "Membros",
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-x-small)", padding: "var(--s-spacing-x-small) 0" }}>
              {["Ana Souza", "Carlos Lima", "Jane Doe"].map((name) => (
                <div key={name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <small>{name}</small>
                  <Badge label="Editor" type="light" variant="default" />
                </div>
              ))}
            </div>
          ),
        },
        {
          label: "Atividade",
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-nano)", padding: "var(--s-spacing-x-small) 0" }}>
              {[
                "Registro atualizado por Ana Souza — hoje às 14:32",
                "Novo membro adicionado — ontem às 09:15",
                "Plano alterado para Pro — 15/03/2025",
              ].map((event) => (
                <small key={event}>{event}</small>
              ))}
            </div>
          ),
        },
      ]}
    />
  ),
};

// ─── 5. Mobile ────────────────────────────────────────────────────────────────

/**
 * Layout mobile (≤ 490px) — padding das abas é reduzido automaticamente
 * via media query para acomodar labels em viewports estreitos.
 */
export const MobileLayout: Story = {
  name: "Layout mobile (≤ 490px)",
  globals: {
    viewport: { value: "mobile5", isRotated: false },
  },
  render: () => (
    <Tabs
      widthFull
      tabs={[
        { label: "Visão geral", content: <Panel title="Visão geral" description="Resumo das informações." /> },
        { label: "Detalhes", content: <Panel title="Detalhes" description="Informações detalhadas." /> },
        { label: "Histórico", content: <Panel title="Histórico" description="Registro de alterações." /> },
      ]}
    />
  ),
};

// ─── 6. Edge cases ────────────────────────────────────────────────────────────

/**
 * Labels longos — valida o comportamento de `text-wrap: nowrap` e
 * overflow horizontal quando os labels excedem o espaço disponível.
 */
export const LongLabels: Story = {
  name: "Edge case — labels longos",
  render: () => (
    <Tabs
      tabs={[
        { label: "Informações gerais", content: <Panel title="Informações gerais" /> },
        { label: "Configurações avançadas", content: <Panel title="Configurações avançadas" /> },
        { label: "Histórico de alterações", content: <Panel title="Histórico de alterações" /> },
      ]}
    />
  ),
};

/**
 * Aba única — edge case sem valor de navegação.
 * O indicador ocupa toda a largura do único botão.
 */
export const SingleTab: Story = {
  name: "Edge case — aba única",
  render: () => (
    <Tabs
      tabs={[
        { label: "Visão geral", content: <Panel title="Visão geral" description="Apenas uma aba disponível." /> },
      ]}
    />
  ),
};