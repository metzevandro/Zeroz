import type { Meta, StoryObj } from "@storybook/react";
import React, { useState, useEffect } from "react";
import { Loading } from "./index";
import "../../styles.scss";

const meta: Meta<typeof Loading> = {
  title: "Components/Loading",
  component: Loading,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
O **Loading** renderiza um indicador de status com mensagem opcional.

| variant      | ícone                    | tamanho | mensagem |
|--------------|--------------------------|---------|----------|
| \`default\`   | Spinner animado          | sm      | ✅        |
| \`large\`     | Spinner animado          | lg      | ❌        |
| \`success\`   | Ícone de confirmação     | sm      | ✅        |
| \`warning\`   | Ícone de atenção         | sm      | ✅        |

### Quando usar
- \`default\` — estado de carregamento inline (dentro de botões, linhas de tabela, campos de formulário)
- \`large\` — carregamento de seção inteira ou overlay de página
- \`success\` — operação concluída com êxito
- \`warning\` — operação concluída com algum problema não-bloqueante

### Boas práticas
- Sempre combine \`default\` com \`message\` quando o usuário precisa de contexto sobre o que está carregando
- Use \`large\` sem mensagem para carregamentos de layout — mantém a UI limpa
- Faça a transição \`default\` → \`success\` ou \`warning\` para dar feedback ao término da operação
        `,
      },
    },
     design: {
      type: 'figma',
      url: 'https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=1237-124',
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "large", "success", "warning"],
      description:
        "Variante visual do indicador de status.",
      table: {
        type: { summary: '"default" | "large" | "success" | "warning"' },
      },
    },
    message: {
      control: "text",
      description:
        "Mensagem opcional exibida ao lado do indicador. Ignorada quando `variant` é `\"large\"`.",
      table: { type: { summary: "string" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Loading>;

// ─── 1. Default ───────────────────────────────────────────────────────────────

/**
 * Spinner animado com mensagem — estado de carregamento inline padrão.
 * Use os Controls para explorar as demais variantes.
 */
export const Default: Story = {
  name: "Default",
  args: {
    variant: "default",
    message: "Carregando dados...",
  },
};

// ─── 2. Variantes individuais ─────────────────────────────────────────────────

/**
 * Spinner grande sem mensagem — para carregamento de seção ou página inteira.
 * A mensagem é ignorada nesta variante.
 */
export const Large: Story = {
  name: "Variante — large",
  args: {
    variant: "large",
  },
};

/**
 * Spinner padrão sem mensagem — para espaços compactos onde o contexto já é claro.
 */
export const DefaultNoMessage: Story = {
  name: "Variante — default (sem mensagem)",
  args: {
    variant: "default",
  },
};

/**
 * Estado de sucesso — operação concluída com êxito.
 * Use após transição do estado `default`.
 */
export const Success: Story = {
  name: "Variante — success",
  args: {
    variant: "success",
    message: "Alterações salvas com sucesso.",
  },
};

/**
 * Estado de atenção — operação concluída com problema não-bloqueante.
 * Use quando a operação foi concluída mas requer revisão do usuário.
 */
export const Warning: Story = {
  name: "Variante — warning",
  args: {
    variant: "warning",
    message: "Salvo com avisos. Verifique os campos destacados.",
  },
};

// ─── 3. Matriz completa ───────────────────────────────────────────────────────

/**
 * Todas as variantes lado a lado para referência visual rápida.
 * Use para validar tokens de cor e espaçamento após alterações de tema.
 */
export const AllVariants: Story = {
  name: "Matriz — todas as variantes",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-medium)" }}>
      <Loading variant="default" message="Carregando dados..." />
      <Loading variant="large" />
      <Loading variant="success" message="Salvo com sucesso." />
      <Loading variant="warning" message="Salvo com avisos." />
    </div>
  ),
};

// ─── 4. Transição de estados ──────────────────────────────────────────────────

/**
 * Simula a transição completa: default → success.
 * Demonstra o padrão recomendado de feedback para operações assíncronas.
 * Clique em "Salvar" para iniciar o ciclo.
 */
export const TransitionToSuccess: Story = {
  name: "Transição — default → success",
  render: () => {
    const [state, setState] = useState<"idle" | "loading" | "success">("idle");

    const handleSave = () => {
      setState("loading");
      setTimeout(() => setState("success"), 2000);
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-x-small)", minWidth: "260px" }}>
        {state === "idle" && (
          <div style={{ width: "fit-content" }}>
            <button
              onClick={handleSave}
              style={{
                padding: "var(--s-spacing-xx-small) var(--s-spacing-x-small)",
                background: "var(--s-color-fill-highlight)",
                color: "var(--s-color-content-on-color)",
                border: "none",
                borderRadius: "var(--s-border-radius-medium)",
                cursor: "pointer",
                font: "var(--s-typography-label-medium)",
              }}
            >
              Salvar alterações
            </button>
          </div>
        )}
        {state === "loading" && <Loading variant="default" message="Salvando alterações..." />}
        {state === "success" && <Loading variant="success" message="Alterações salvas com sucesso." />}
      </div>
    );
  },
};

/**
 * Simula a transição completa: default → warning.
 * Demonstra o padrão de feedback quando a operação é concluída com ressalvas.
 * Clique em "Enviar" para iniciar o ciclo.
 */
export const TransitionToWarning: Story = {
  name: "Transição — default → warning",
  render: () => {
    const [state, setState] = useState<"idle" | "loading" | "warning">("idle");

    const handleSubmit = () => {
      setState("loading");
      setTimeout(() => setState("warning"), 2000);
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-x-small)", minWidth: "260px", alignItems: 'left' }}>
        {state === "idle" && (
          <div style={{ width: "fit-content" }}>
            <button
              onClick={handleSubmit}
              style={{
                padding: "var(--s-spacing-xx-small) var(--s-spacing-x-small)",
                background: "var(--s-color-fill-highlight)",
                color: "var(--s-color-content-on-color)",
                border: "none",
                borderRadius: "var(--s-border-radius-medium)",
                cursor: "pointer",
                font: "var(--s-typography-label-medium)",
              }}
            >
              Enviar formulário
            </button>
          </div>
        )}
        {state === "loading" && <Loading variant="default" message="Enviando formulário..." />}
        {state === "warning" && <Loading variant="warning" message="Enviado com avisos. Verifique os campos destacados." />}
      </div>
    );
  },
};

// ─── 5. Contexto real ─────────────────────────────────────────────────────────

/**
 * Spinner `default` inline numa linha de tabela — simula carregamento de um registro.
 */
export const InlineTableRow: Story = {
  name: "Contexto real — inline em linha de tabela",
  render: () => (
    <div
      style={{
        width: "400px",
        border: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
        borderRadius: "var(--s-border-radius-medium)",
        overflow: "hidden",
      }}
    >
      {["Pedido #1042", "Pedido #1043"].map((label) => (
        <div
          key={label}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "var(--s-spacing-x-small) var(--s-spacing-small)",
            borderBottom: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
          }}
        >
          <small>{label}</small>
          <Loading variant="default" />
        </div>
      ))}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "var(--s-spacing-x-small) var(--s-spacing-small)",
        }}
      >
        <small>Pedido #1044</small>
        <Loading variant="success" message="Concluído" />
      </div>
    </div>
  ),
};