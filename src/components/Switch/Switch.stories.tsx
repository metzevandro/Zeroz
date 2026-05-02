import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Switch } from "./index";
import "../../styles.scss";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
O **Switch** é um controle de alternância acessível renderizado como um checkbox estilizado.

Suporta uso controlado via \`modelValue\` + \`onUpdate\`, modificadores \`disabled\`
e \`noEvents\`, acionamento por teclado (Enter) e geração automática de IDs
acessíveis via \`useId()\`.

O \`<label>\` é sempre associado ao \`<input>\` via \`htmlFor\` / \`id\`,
satisfazendo o WCAG 2.1 SC 1.3.1.

### Quando usar
- Alternância de configurações booleanas com efeito imediato (modo escuro, notificações, feature flags)
- Quando o metáfora de toggle (ligar/desligar) é mais clara que uma caixa de seleção

### Quando não usar
- Para seleção de múltiplos itens em uma lista — use \`Checkbox\`
- Quando a ação não tem efeito imediato e requer confirmação — use \`Checkbox\` + botão de salvar

### Boas práticas
- Sempre forneça um \`label\` descritivo para acessibilidade
- Use \`modelValue\` + \`onUpdate\` para uso controlado em formulários
- Prefira \`Switch\` sobre \`Checkbox\` quando a ação é aplicada imediatamente
        `,
      },
    },
   design: {
     type: 'figma',
       url: 'https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10076',
     },
  },
  argTypes: {
    label: {
      control: "text",
      description:
        "Texto exibido ao lado do switch. Quando omitido, apenas o toggle é renderizado.",
      table: { type: { summary: "string" } },
    },
    modelValue: {
      control: "boolean",
      description:
        "Estado controlado (ligado/desligado). Quando fornecido, sincroniza o estado interno com este valor.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Desativa o switch e bloqueia toda interação.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    noEvents: {
      control: "boolean",
      description:
        "Suprime eventos de ponteiro no wrapper. O switch fica visualmente interativo mas não é clicável.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    required: {
      control: "boolean",
      description: "Marca o switch como obrigatório em contexto de formulário.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    onUpdate: {
      action: "onUpdate",
      description:
        "Callback disparado quando o estado muda. Recebe o novo valor booleano.",
      table: { type: { summary: "(value: boolean) => void" } },
    },
    id: {
      control: "text",
      description:
        "ID explícito para o `<input>`. Quando omitido, um ID estável é gerado automaticamente via `useId()`.",
      table: { type: { summary: "string" } },
    },
    name: {
      control: "text",
      description:
        "Atributo `name` repassado ao `<input>` — usado para agrupar switches em formulários.",
      table: { type: { summary: "string" } },
    },
    value: {
      control: "text",
      description:
        "Valor enviado com o formulário quando o switch está ligado.",
      table: { type: { summary: "string" } },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: "220px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Switch>;

// ─── 1. Default ───────────────────────────────────────────────────────────────

/**
 * Estado base desligado com label.
 * Use os Controls para explorar todas as props disponíveis.
 */
export const Default: Story = {
  name: "Default",
  args: { label: "Ativar notificações" },
};

// ─── 2. Estados ───────────────────────────────────────────────────────────────

/**
 * Estado ligado — `modelValue: true`.
 * Use para pré-selecionar o switch quando o valor inicial já é conhecido.
 */
export const On: Story = {
  name: "Estado — ligado",
  args: { label: "Modo escuro", modelValue: true },
};

/**
 * Estado desabilitado e desligado.
 * O switch fica visualmente inativo e não responde a interações.
 */
export const Disabled: Story = {
  name: "Estado — desabilitado",
  args: { label: "Configuração indisponível", disabled: true },
};

/**
 * Estado desabilitado e ligado.
 * Use para configurações bloqueadas que não podem ser alteradas pelo usuário.
 */
export const DisabledOn: Story = {
  name: "Estado — desabilitado (ligado)",
  args: { label: "Configuração bloqueada", modelValue: true, disabled: true },
};

/**
 * Sem label — apenas o toggle é renderizado.
 * Garanta contexto acessível via `aria-label` no elemento pai quando usar sem label.
 */
export const NoLabel: Story = {
  name: "Sem label",
  args: {},
};

// ─── 3. Matriz de estados ─────────────────────────────────────────────────────

/**
 * Todos os estados visuais empilhados para validação rápida de tokens e tema.
 */
export const AllStates: Story = {
  name: "Matriz — todos os estados",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-x-small)" }}>
      <Switch label="Desligado (padrão)" modelValue={false} />
      <Switch label="Ligado" modelValue={true} />
      <Switch label="Desabilitado (desligado)" disabled />
      <Switch label="Desabilitado (ligado)" modelValue={true} disabled />
    </div>
  ),
};

// ─── 4. Uso controlado ────────────────────────────────────────────────────────

/**
 * Switch controlado externamente via `useState`.
 * Demonstra o padrão correto: `modelValue` recebe o estado e `onUpdate` o atualiza.
 */
export const Controlled: Story = {
  name: "Controlado — com estado externo",
  render: () => {
    const [on, setOn] = useState(false);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-nano)" }}>
        <Switch label="Modo escuro" modelValue={on} onUpdate={setOn} />
        <small>Valor atual: <strong>{on ? "ligado" : "desligado"}</strong></small>
      </div>
    );
  },
};

// ─── 5. Contexto real ─────────────────────────────────────────────────────────

/**
 * Painel de configurações com múltiplos switches independentes.
 * Cada switch gerencia um estado próprio — demonstra que IDs únicos
 * são gerados automaticamente via `useId()` sem conflito.
 */
export const SettingsPanel: Story = {
  name: "Contexto real — painel de configurações",
  render: () => {
    const [settings, setSettings] = useState({
      notificacoes: true,
      modoEscuro: false,
      salvamentoAuto: true,
      analytics: false,
    });

    const toggle = (key: keyof typeof settings) =>
      setSettings((prev) => ({ ...prev, [key]: !prev[key] }));

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-x-small)", minWidth: "260px" }}>
        <Switch
          label="Notificações por e-mail"
          modelValue={settings.notificacoes}
          onUpdate={() => toggle("notificacoes")}
        />
        <Switch
          label="Modo escuro"
          modelValue={settings.modoEscuro}
          onUpdate={() => toggle("modoEscuro")}
        />
        <Switch
          label="Salvamento automático"
          modelValue={settings.salvamentoAuto}
          onUpdate={() => toggle("salvamentoAuto")}
        />
        <Switch
          label="Compartilhar analytics"
          modelValue={settings.analytics}
          onUpdate={() => toggle("analytics")}
        />
      </div>
    );
  },
};

/**
 * Switch com label descritivo e estado exibido inline.
 * Demonstra o padrão recomendado para configurações com feedback imediato.
 */
export const FeatureFlag: Story = {
  name: "Contexto real — feature flag",
  render: () => {
    const [enabled, setEnabled] = useState(false);
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "var(--s-spacing-x-small) var(--s-spacing-small)",
          border: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
          borderRadius: "var(--s-border-radius-medium)",
          background: "var(--s-color-fill-default)",
          width: "320px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-nano)" }}>
          <small><strong>Novo painel de relatórios</strong></small>
          <small>Acesso antecipado à nova experiência</small>
        </div>
        <Switch modelValue={enabled} onUpdate={setEnabled} />
      </div>
    );
  },
};