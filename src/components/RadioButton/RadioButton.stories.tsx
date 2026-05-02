import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { RadioButton } from "./index";
import "../../styles.scss";

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
O **RadioButton** é um input de seleção exclusiva acessível com label opcional.

Suporta uso controlado via \`checked\` + \`onChange\`, estado desabilitado
e acionamento por teclado via **Enter** e **Space**.

O \`<label>\` é sempre associado ao elemento de controle via \`htmlFor\` / \`id\`
gerado por \`useId()\`, satisfazendo o WCAG 2.1 SC 1.3.1.

### Quando usar
- Selecionar uma opção de um conjunto pequeno (2–5 opções)
- Quando todas as opções devem estar visíveis simultaneamente — prefira ao \`InputSelect\` para ≤ 5 itens

### Quando não usar
- Para múltiplas seleções — use \`Checkbox\`
- Para grupos grandes (> 5 opções) — use \`InputSelect\`

### Padrão de grupo
\`\`\`tsx
const [selected, setSelected] = useState("a");

<RadioButton label="Opção A" checked={selected === "a"} onChange={() => setSelected("a")} />
<RadioButton label="Opção B" checked={selected === "b"} onChange={() => setSelected("b")} />
\`\`\`

### Boas práticas
- Sempre forneça um \`label\` para acessibilidade
- Gerencie o estado externamente — apenas um botão do grupo deve estar \`checked\`
- Use \`disabled\` de forma consistente no grupo quando a escolha não está disponível
        `,
      },
    },
    design: {
     type: 'figma',
      url: 'https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10075',
     },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Texto do label exibido ao lado do botão. Clicar no label também aciona o botão.",
      table: { type: { summary: "string" } },
    },
    checked: {
      control: "boolean",
      description: "Estado controlado. Quando fornecido, sincroniza o estado interno com este valor.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Desativa o botão e bloqueia toda interação.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    onChange: {
      action: "onChange",
      description: "Callback disparado quando o estado muda. Recebe o novo valor booleano.",
      table: { type: { summary: "(isChecked: boolean) => void" } },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: "200px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

// ─── 1. Default ───────────────────────────────────────────────────────────────

/**
 * Estado base desmarcado com label.
 * Use os Controls para explorar todas as props disponíveis.
 */
export const Default: Story = {
  name: "Default",
  args: { label: "Opção A" },
};

// ─── 2. Estados individuais ───────────────────────────────────────────────────

/**
 * Estado marcado — `checked: true`.
 * Use para pré-selecionar uma opção quando o valor inicial já é conhecido.
 */
export const Checked: Story = {
  name: "Estado — marcado",
  args: { label: "Opção selecionada", checked: true },
};

/**
 * Estado desabilitado e desmarcado.
 * O botão fica visualmente inativo e não responde a interações.
 */
export const Disabled: Story = {
  name: "Estado — desabilitado",
  args: { label: "Opção indisponível", disabled: true },
};

/**
 * Estado desabilitado e marcado.
 * Use para seleções bloqueadas que não podem ser alteradas pelo usuário.
 */
export const DisabledChecked: Story = {
  name: "Estado — desabilitado (marcado)",
  args: { label: "Seleção bloqueada", checked: true, disabled: true },
};

/**
 * Sem label — apenas o círculo do radio é renderizado.
 * Garanta contexto acessível via `aria-label` no elemento pai quando usar sem label.
 */
export const NoLabel: Story = {
  name: "Sem label",
  args: { checked: false },
};

// ─── 3. Matriz de estados ─────────────────────────────────────────────────────

/**
 * Todos os estados visuais lado a lado para validação rápida de tokens e tema.
 */
export const AllStates: Story = {
  name: "Matriz — todos os estados",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-x-small)" }}>
      <RadioButton label="Desmarcado (padrão)" checked={false} />
      <RadioButton label="Marcado" checked={true} />
      <RadioButton label="Desabilitado (desmarcado)" disabled />
      <RadioButton label="Desabilitado (marcado)" checked={true} disabled />
    </div>
  ),
};

// ─── 4. Grupos controlados ────────────────────────────────────────────────────

/**
 * Grupo de seleção exclusiva — apenas uma opção pode estar marcada por vez.
 * Demonstra o padrão correto: estado externo via `useState`,
 * `checked={selected === opt}` e `onChange` que atualiza o estado.
 */
export const ControlledGroup: Story = {
  name: "Grupo — seleção exclusiva",
  render: () => {
    const options = ["Opção A", "Opção B", "Opção C"];
    const [selected, setSelected] = useState("Opção A");
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-x-small)" }}>
        {options.map((opt) => (
          <RadioButton
            key={opt}
            label={opt}
            checked={selected === opt}
            onChange={() => setSelected(opt)}
          />
        ))}
        <small style={{ paddingTop: "var(--s-spacing-nano)" }}>
          Selecionado: <strong>{selected}</strong>
        </small>
      </div>
    );
  },
};

/**
 * Grupo com opção desabilitada — demonstra o comportamento correto
 * quando parte das opções não está disponível no contexto atual.
 */
export const GroupWithDisabled: Story = {
  name: "Grupo — com opção desabilitada",
  render: () => {
    const [selected, setSelected] = useState("Mensal");
    const options = [
      { label: "Mensal", disabled: false },
      { label: "Anual", disabled: false },
      { label: "Empresarial (entre em contato)", disabled: true },
    ];
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-x-small)" }}>
        {options.map(({ label, disabled }) => (
          <RadioButton
            key={label}
            label={label}
            disabled={disabled}
            checked={selected === label}
            onChange={() => !disabled && setSelected(label)}
          />
        ))}
      </div>
    );
  },
};

// ─── 5. Contexto real ─────────────────────────────────────────────────────────

/**
 * Seleção de plano de assinatura — padrão típico em páginas de pricing.
 * O usuário escolhe entre opções mutuamente exclusivas antes de prosseguir.
 */
export const PlanSelector: Story = {
  name: "Contexto real — seleção de plano",
  render: () => {
    const [plan, setPlan] = useState("Pro");
    const plans = [
      { label: "Starter", description: "Para projetos pessoais" },
      { label: "Pro", description: "Para times pequenos" },
      { label: "Enterprise", description: "Para grandes organizações" },
    ];
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-x-small)", minWidth: "280px" }}>
        {plans.map(({ label, description }) => (
          <div
            key={label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--s-spacing-x-small)",
              padding: "var(--s-spacing-x-small) var(--s-spacing-small)",
              border: `var(--s-border-width-thin) solid var(--s-color-${plan === label ? "border-highlight" : "border-default"})`,
              borderRadius: "var(--s-border-radius-medium)",
              background: "var(--s-color-fill-default)",
              cursor: "pointer",
            }}
            onClick={() => setPlan(label)}
          >
            <RadioButton
              checked={plan === label}
              onChange={() => setPlan(label)}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-nano)" }}>
              <small><strong>{label}</strong></small>
              <small>{description}</small>
            </div>
          </div>
        ))}
      </div>
    );
  },
};

/**
 * Seleção de forma de pagamento — grupo com ícone ou texto complementar.
 * Demonstra o uso do RadioButton dentro de cards clicáveis.
 */
export const PaymentMethod: Story = {
  name: "Contexto real — forma de pagamento",
  render: () => {
    const [method, setMethod] = useState("Cartão de crédito");
    const methods = ["Cartão de crédito", "PIX", "Boleto bancário"];
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-x-small)", minWidth: "280px" }}>
        {methods.map((m) => (
          <div
            key={m}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--s-spacing-x-small)",
              padding: "var(--s-spacing-x-small) var(--s-spacing-small)",
              border: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
              borderRadius: "var(--s-border-radius-medium)",
              background: "var(--s-color-fill-default)",
              cursor: "pointer",
            }}
            onClick={() => setMethod(m)}
          >
            <RadioButton
              checked={method === m}
              onChange={() => setMethod(m)}
            />
            <small>{m}</small>
          </div>
        ))}
      </div>
    );
  },
};