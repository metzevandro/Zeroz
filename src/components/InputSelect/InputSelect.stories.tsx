import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { InputSelect } from "./index";
import { Button } from "../Button/index";
import "../../styles.scss";

const meta: Meta<typeof InputSelect> = {
  title: "Components/InputSelect",
  component: InputSelect,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
O **InputSelect** é um campo de seleção totalmente customizado com dropdown estilizado.

Diferente do \`<select>\` nativo, este componente renderiza sua própria lista de opções —
garantindo consistência visual completa em desktop e mobile, sem OS picker nem dropdown nativo sem estilo.

Em **mobile** (≤ 490px), o dropdown sobe como um bottom sheet ancorado à viewport,
com alvos de toque maiores para seleção mais fácil.

Suporta navegação por teclado: **Enter/Espaço** para abrir/fechar, **Escape** para fechar,
e \`aria-labelledby\` para associação acessível com o label.

### Quando usar
- Seleção de uma opção de uma lista conhecida
- Quando a consistência visual com o design system é essencial
- Quando o \`<select>\` nativo não é suficiente (sempre, no mobile)

### Quando não usar
- Para múltipla seleção — use \`Checkbox\` ou um componente de multi-select
- Para listas longas (> 10 itens) — considere um select com busca

### Boas práticas
- Sempre forneça um \`label\` para acessibilidade
- Mantenha a lista curta (< 10 opções) — use busca para listas maiores
- Use \`value\` + \`onChange\` para uso controlado em formulários
        `,
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10073",
    },
  },
  argTypes: {
    label: {
      control: "text",
      description:
        "Label exibido acima do campo. Associado ao trigger via `aria-labelledby`.",
      table: { type: { summary: "string" } },
    },
    options: {
      control: "object",
      description: "Array de strings com as opções disponíveis no dropdown.",
      table: { type: { summary: "string[]" } },
    },
    value: {
      control: "text",
      description:
        "Valor controlado externamente. Quando fornecido, sincroniza o estado interno com esta opção.",
      table: { type: { summary: "string" } },
    },
    disabled: {
      control: "boolean",
      description: "Desativa o campo e impede a abertura do dropdown.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    error: {
      control: "boolean",
      description:
        "Renderiza o campo em estado de erro. Desativa a interação e exibe `errorMessage`.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    errorMessage: {
      control: "text",
      description:
        "Mensagem de validação exibida abaixo do campo quando `error` é `true`.",
      table: { type: { summary: "string" } },
    },
    onChange: {
      action: "onChange",
      description: "Callback disparado quando o usuário seleciona uma opção.",
      table: { type: { summary: "(value: string) => void" } },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: "280px", minHeight: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof InputSelect>;

// ─── Fixtures compartilhadas ──────────────────────────────────────────────────

const paises = ["Brasil", "Estados Unidos", "Portugal", "Alemanha", "Japão"];

const cargos = [
  "Product Designer",
  "Engenheiro de Software",
  "Gerente de Produto",
  "Analista de Dados",
  "DevOps",
];

// ─── 1. Default ───────────────────────────────────────────────────────────────

/**
 * Campo de seleção padrão sem valor pré-selecionado.
 * Clique para abrir o dropdown. Use os Controls para explorar todas as props.
 */
export const Default: Story = {
  name: "Default",
  args: {
    label: "País",
    options: paises,
    onChange: () => {},
  },
};

// ─── 2. Com valor pré-selecionado ─────────────────────────────────────────────

/**
 * Campo inicializado com um valor pré-selecionado via prop `value`.
 * O trigger exibe o valor selecionado na cor padrão (não placeholder).
 */
export const WithValue: Story = {
  name: "Com valor pré-selecionado",
  args: {
    label: "País",
    options: paises,
    value: "Brasil",
    onChange: () => {},
  },
};

// ─── 3. Estados ───────────────────────────────────────────────────────────────

/**
 * Estado de erro — campo desativado com borda e fundo de atenção.
 * A mensagem de validação é exibida abaixo do campo.
 */
export const WithError: Story = {
  name: "Estado — erro",
  args: {
    label: "País",
    options: paises,
    error: true,
    errorMessage: "Selecione um país válido.",
    onChange: () => {},
  },
};

/**
 * Estado desabilitado — campo inativo com opacidade reduzida.
 * Nenhuma interação é possível.
 */
export const Disabled: Story = {
  name: "Estado — desabilitado",
  args: {
    label: "País",
    options: paises,
    disabled: true,
    onChange: () => {},
  },
};

/**
 * Estado desabilitado com valor pré-selecionado.
 * Use para exibir uma seleção que não pode ser alterada no contexto atual.
 */
export const DisabledWithValue: Story = {
  name: "Estado — desabilitado (com valor)",
  args: {
    label: "País",
    options: paises,
    value: "Brasil",
    disabled: true,
    onChange: () => {},
  },
};

// ─── 4. Uso controlado ────────────────────────────────────────────────────────

/**
 * Campo controlado com estado externo via `useState`.
 * O valor selecionado é exibido em tempo real abaixo do campo.
 */
export const Controlled: Story = {
  name: "Controlado — com estado externo",
  render: () => {
    const [valor, setValor] = useState("");
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--s-spacing-x-small)",
        }}
      >
        <InputSelect
          label="Cargo"
          options={cargos}
          value={valor}
          onChange={setValor}
        />
        <small>
          Selecionado: <strong>{valor || "nenhum"}</strong>
        </small>
      </div>
    );
  },
};

// ─── 5. Lista longa ───────────────────────────────────────────────────────────

/**
 * Dropdown com muitas opções — valida o scroll interno da lista.
 * O painel tem `max-height: 240px` e rola quando há mais opções do que cabem.
 */
export const LongList: Story = {
  name: "Lista longa (scroll)",
  args: {
    label: "Framework",
    options: [
      "React",
      "Vue",
      "Angular",
      "Svelte",
      "SolidJS",
      "Qwik",
      "Astro",
      "Remix",
      "Next.js",
      "Nuxt",
      "SvelteKit",
      "Ember",
      "Backbone",
      "Preact",
    ],
    onChange: () => {},
  },
};

// ─── 6. Mobile ────────────────────────────────────────────────────────────────

/**
 * Comportamento mobile (≤ 490px) — o dropdown sobe como bottom sheet
 * ancorado à viewport com alvos de toque maiores (48px de altura mínima).
 */
export const MobileBottomSheet: Story = {
  name: "Mobile — bottom sheet (≤ 490px)",
  globals: {
    viewport: { value: "mobile5", isRotated: false },
  },
  args: {
    label: "País",
    options: paises,
    onChange: () => {},
  },
};

// ─── 7. Contexto real ─────────────────────────────────────────────────────────

/**
 * Seleção em formulário de endereço.
 * Demonstra o uso do InputSelect com validação ao submeter sem seleção.
 */
export const InAddressForm: Story = {
  name: "Contexto real — formulário de endereço",
  render: () => {
    const [estado, setEstado] = useState("");
    const [erro, setErro] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
      if (!estado) {
        setErro(true);
        return;
      }
      setErro(false);
      setSubmitted(true);
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--s-spacing-x-small)",
          minWidth: "280px",
        }}
      >
        <InputSelect
          label="Estado"
          options={[
            "AC",
            "AM",
            "BA",
            "CE",
            "DF",
            "ES",
            "GO",
            "MA",
            "MG",
            "MS",
            "MT",
            "PA",
            "PB",
            "PE",
            "PI",
            "PR",
            "RJ",
            "RN",
            "RO",
            "RR",
            "RS",
            "SC",
            "SE",
            "SP",
            "TO",
          ]}
          value={estado}
          error={erro}
          errorMessage="Selecione um estado."
          onChange={(v) => {
            setEstado(v);
            setErro(false);
            setSubmitted(false);
          }}
        />
        <div style={{ width: "fit-content" }}>
          <Button onClick={handleSubmit}>Continuar</Button>
        </div>
        {submitted && (
          <small>
            Estado selecionado: <strong>{estado}</strong>
          </small>
        )}
      </div>
    );
  },
};
