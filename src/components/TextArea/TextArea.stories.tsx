import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { TextArea } from "./index";
import "../../styles.scss";

const meta: Meta<typeof TextArea> = {
  title: "Components/TextArea",
  component: TextArea,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
O **TextArea** é um campo de texto multilinha para entrada de conteúdo extenso.

Suporta estados de erro e desabilitado, é redimensionável verticalmente
e mantém sincronização com um valor controlado externamente.

O container externo é focável via teclado (\`tabIndex={0}\`) e delega
o foco ao \`<textarea>\` interno ao receber \`Enter\` ou \`Space\`.

> **Estado de erro vs. desabilitado:** quando \`disabled\` é \`true\`,
> o estado de erro é ignorado visualmente — o campo desabilitado tem prioridade.

### Quando usar
- Coleta de textos longos: descrições, comentários, observações
- Formulários que requerem mais de uma linha de texto

### Quando não usar
- Inputs de linha única — use \`Input\`
- Conteúdo somente leitura — considere um elemento de texto simples
        `,
      },
    },
     design: {
       type: 'figma',
      url: 'https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10072',
     },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Texto do label exibido acima do campo.",
      table: { type: { summary: "string" } },
    },
    placeholder: {
      control: "text",
      description: "Texto exibido dentro do campo quando está vazio.",
      table: { type: { summary: "string" } },
    },
    value: {
      control: "text",
      description: "Valor controlado externamente.",
      table: {
        defaultValue: { summary: '""' },
        type: { summary: "string" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Desativa o campo e bloqueia toda interação.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    error: {
      control: "boolean",
      description:
        "Ativa o estado de erro. Ignorado visualmente quando `disabled` é `true`.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    errorText: {
      control: "text",
      description:
        "Mensagem de erro exibida abaixo do campo quando `error` é `true` e `disabled` é `false`.",
      table: {
        defaultValue: { summary: '""' },
        type: { summary: "string" },
      },
    },
    onChange: {
      action: "onChange",
      description: "Callback disparado ao alterar o valor do campo.",
      table: {
        type: { summary: "React.ChangeEventHandler<HTMLTextAreaElement>" },
      },
    },
  },
  args: {
    label: "Descrição",
    placeholder: "Digite aqui...",
    disabled: false,
    error: false,
    errorText: "Mensagem de erro",
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
type Story = StoryObj<typeof TextArea>;

// ─── 1. Default ───────────────────────────────────────────────────────────────

/**
 * Estado base do campo sem nenhuma prop adicional.
 * Use os Controls para explorar todas as combinações disponíveis.
 */
export const Default: Story = {
  name: "Default",
};

// ─── 2. Estados ───────────────────────────────────────────────────────────────

/**
 * Estado desabilitado — campo inativo com opacidade reduzida.
 * Bloqueia toda interação e aplica fundo `--s-color-fill-disable`.
 */
export const Disabled: Story = {
  name: "Estado — desabilitado",
  args: { disabled: true },
};

/**
 * Estado de erro — borda e fundo na cor de atenção com mensagem abaixo.
 * A mensagem é acessível via `role="alert"` e `aria-describedby`.
 */
export const WithError: Story = {
  name: "Estado — erro",
  args: {
    error: true,
    errorText: "Este campo é obrigatório.",
  },
};

/**
 * Campo desabilitado com `error: true` — o estado de erro é ignorado.
 * `disabled` tem prioridade visual sobre `error`.
 */
export const DisabledWithError: Story = {
  name: "Estado — desabilitado (erro ignorado)",
  args: {
    disabled: true,
    error: true,
    errorText: "Este campo é obrigatório.",
  },
};

// ─── 3. Uso controlado ────────────────────────────────────────────────────────

/**
 * Campo controlado externamente via `value` + `onChange`.
 * O contador de caracteres é atualizado em tempo real.
 */
export const Controlled: Story = {
  name: "Controlado — com contador de caracteres",
  render: (args) => {
    const [text, setText] = useState("Valor inicial");
    const limit = 200;
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-nano)" }}>
        <TextArea
          {...args}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <small style={{ alignSelf: "flex-end" }}>
          {text.length} / {limit}
        </small>
      </div>
    );
  },
};

/**
 * Validação ao sair do campo (`onBlur`).
 * O estado de erro é ativado quando o campo perde o foco vazio,
 * e desativado assim que o usuário começa a digitar.
 */
export const WithBlurValidation: Story = {
  name: "Controlado — validação no blur",
  render: (args) => {
    const [error, setError] = useState(false);
    const [value, setValue] = useState("");

    return (
      <TextArea
        {...args}
        value={value}
        error={error}
        errorText="Campo obrigatório."
        onChange={(e) => {
          setValue(e.target.value);
          if (error) setError(false);
        }}
        onBlur={() => setError(value.trim().length === 0)}
      />
    );
  },
};

// ─── 4. Contexto real ─────────────────────────────────────────────────────────

/**
 * Campo de comentário em formulário de avaliação.
 * Demonstra o uso com limit de caracteres e validação de conteúdo mínimo.
 */
export const ReviewForm: Story = {
  name: "Contexto real — formulário de avaliação",
  render: () => {
    const [text, setText] = useState("");
    const [error, setError] = useState(false);
    const limit = 300;
    const minLength = 20;

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-x-small)", maxWidth: "480px" }}>
        <TextArea
          label="Sua avaliação"
          placeholder="Descreva sua experiência em pelo menos 20 caracteres..."
          value={text}
          error={error}
          errorText={`Mínimo de ${minLength} caracteres.`}
          onChange={(e) => {
            if (e.target.value.length <= limit) setText(e.target.value);
            if (error && e.target.value.length >= minLength) setError(false);
          }}
          onBlur={() => setError(text.trim().length < minLength && text.length > 0)}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <small>{error ? "" : text.length >= minLength ? "✓ Mínimo atingido" : `Mínimo: ${minLength} caracteres`}</small>
          <small>{text.length} / {limit}</small>
        </div>
      </div>
    );
  },
};

/**
 * Campo de observações em formulário de pedido.
 * Demonstra o uso sem validação — puramente opcional.
 */
export const OrderNotes: Story = {
  name: "Contexto real — observações de pedido",
  render: () => {
    const [notes, setNotes] = useState("");
    return (
      <TextArea
        label="Observações"
        placeholder="Ex: Entregar somente em dias úteis das 9h às 18h..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
    );
  },
};