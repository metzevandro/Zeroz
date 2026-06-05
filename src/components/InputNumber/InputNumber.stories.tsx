import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";

import "../../styles.scss";

import { Button, Input, InputNumber, Page } from '../../index'
import Card from "../Card";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof InputNumber> = {
  title: "Components/InputNumber",
  component: InputNumber,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=1365-11217",
    },
    docs: {
      description: {
        component: `
**InputNumber** é um input numérico com botões de incremento e decremento.

Os valores são automaticamente limitados ao intervalo \`[min, max]\` em toda
interação — ao clicar nos botões, ao digitar ou ao colar um número.
O \`onChange\` recebe \`number | undefined\` — sem necessidade de \`parseInt\` no lado do consumidor.

A label é associada ao \`<input>\` via \`htmlFor\` / \`id\` gerado por \`useId\`
(WCAG 2.1 SC 1.3.1).

### Quando usar
- Seletor de quantidade (itens no carrinho, número de passageiros)
- Configurações numéricas com limites definidos (tamanho de fonte, timeout, paginação)
- Qualquer campo onde apenas números inteiros são válidos

### Quando **não** usar
- Quando o valor aceita decimais → use \`Input type="number"\` com step fracionário
- Quando o intervalo é muito amplo e a precisão é crítica → use um \`Input\` numérico simples
- Quando as opções são discretas e nomeadas → use \`InputSelect\`

### Boas práticas
- Sempre defina \`min\` e \`max\` para comunicar o intervalo válido ao usuário
- Use \`label\` para acessibilidade — não dependa apenas de \`placeholder\`
- Use \`value\` + \`onChange\` para uso controlado dentro de formulários
- Trate \`undefined\` no \`onChange\` — significa que o campo foi apagado
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description:
        "Label exibida acima do input, associada via `htmlFor` / `id`.",
      table: { type: { summary: "string" } },
    },
    min: {
      control: "number",
      description: "Valor mínimo permitido (inclusivo).",
      table: { type: { summary: "number" } },
    },
    max: {
      control: "number",
      description: "Valor máximo permitido (inclusivo).",
      table: { type: { summary: "number" } },
    },
    placeholder: {
      control: "text",
      description: "Texto exibido no input quando o valor está vazio.",
      table: { type: { summary: "string" } },
    },
    disabled: {
      control: "boolean",
      description: "Desabilita o input e ambos os botões.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    error: {
      control: "boolean",
      description: "Renderiza o input com estilo de erro.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    textError: {
      control: "text",
      description: "Mensagem de validação exibida abaixo quando `error=true`.",
      table: { type: { summary: "string" } },
    },
    value: {
      control: "number",
      description: "Valor controlado externamente.",
      table: { type: { summary: "number" } },
    },
    onChange: {
      action: "onChange",
      description:
        "Disparado a cada mudança de valor. Recebe `number | undefined` — `undefined` quando o campo é apagado.",
      table: { type: { summary: "(value: number | undefined) => void" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputNumber>;

// ─── 1. Default ───────────────────────────────────────────────────────────────

/**
 * Estado base: stepper sem limites definidos.
 * Todos os args ficam disponíveis no painel Controls.
 */
export const Default: Story = {
  name: "Default",
  args: {
    label: "Quantidade",
  },
};

// ─── 2. Variações de limites ──────────────────────────────────────────────────

/**
 * Intervalo de 1 a 10 — os botões são bloqueados ao atingir os extremos.
 * O valor inicial é `min` (1) quando nenhum `value` é fornecido.
 */
export const WithBounds: Story = {
  name: "With min / max (1–10)",
  args: {
    label: "Itens",
    min: 1,
    max: 10,
  },
  parameters: {
    docs: {
      description: {
        story:
          "O botão `−` fica desabilitado em `min=1` e o botão `+` em `max=10`. O valor inicial é `min` quando nenhum `value` é passado.",
      },
    },
  },
};

/**
 * Intervalo negativo — demonstra que `min` e `max` aceitam valores negativos.
 * Útil para offsets, temperaturas ou ajustes relativos.
 */
export const NegativeRange: Story = {
  name: "Negative range (min=-10, max=10)",
  args: {
    label: "Offset de temperatura",
    min: -10,
    max: 10,
  },
  parameters: {
    docs: {
      description: {
        story:
          "O valor inicial é `min` (-10). O clamping funciona normalmente para valores negativos.",
      },
    },
  },
};

/**
 * Sem limites definidos — o stepper aceita qualquer inteiro positivo ou negativo.
 * Use apenas quando não houver restrição semântica no domínio.
 */
export const NoBounds: Story = {
  name: "Without min / max",
  args: {
    label: "Valor livre",
    placeholder: "—",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Sem `min` / `max`, o clamping é desativado e o valor inicial é `undefined` (campo vazio com placeholder).",
      },
    },
  },
};

/**
 * Valor no mínimo — botão `−` bloqueado visualmente.
 */
export const AtMinimum: Story = {
  name: "At minimum value",
  args: {
    label: "No mínimo",
    min: 0,
    max: 10,
    value: 0,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Quando `value === min`, o botão de decremento fica `disabled`. O botão de incremento continua ativo.",
      },
    },
  },
};

/**
 * Valor no máximo — botão `+` bloqueado visualmente.
 */
export const AtMaximum: Story = {
  name: "At maximum value",
  args: {
    label: "No máximo",
    min: 0,
    max: 10,
    value: 10,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Quando `value === max`, o botão de incremento fica `disabled`. O botão de decremento continua ativo.",
      },
    },
  },
};

// ─── 3. Estado desabilitado ───────────────────────────────────────────────────

/**
 * Estado desabilitado — input e ambos os botões bloqueados.
 * O componente aplica a classe `.disabled` e opacidade 0.64 ao container.
 */
export const Disabled: Story = {
  name: "Disabled",
  args: {
    label: "Quantidade (indisponível)",
    min: 1,
    max: 10,
    value: 5,
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A prop `disabled` é propagada para o `<input>` e para ambos os `<button>`s nativos. A classe `.disabled` no container aplica `opacity: 0.64` e `background-color` do token de desabilitado.",
      },
    },
  },
};

// ─── 4. Estado de erro ────────────────────────────────────────────────────────

/**
 * Estado de erro com mensagem — input com fundo `warning-light`,
 * borda `warning` e texto de erro abaixo.
 */
export const WithError: Story = {
  name: "Error state",
  args: {
    label: "Quantidade",
    error: true,
    textError: "O valor deve ser pelo menos 1.",
  },
  parameters: {
    docs: {
      description: {
        story:
          "A classe `.error` no `<input>` aplica `background-color: --s-color-fill-warning-light` e `border-color: --s-color-border-warning`. A mensagem abaixo usa `--s-color-content-warning`.",
      },
    },
  },
};

/**
 * Validação de campo obrigatório — o erro aparece somente após o usuário
 * apagar o valor (campo fica `undefined`).
 */
export const RequiredValidation: Story = {
  name: "Required field validation",
  render: () => {
    const [value, setValue] = useState<number | undefined>(1);
    const isEmpty = value === undefined;

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <InputNumber
          label="Quantidade mínima"
          min={1}
          max={99}
          value={value}
          error={isEmpty}
          textError="Campo obrigatório. Informe um valor entre 1 e 99."
          onChange={setValue}
        />
        {!isEmpty && (
          <p style={{ fontSize: "12px", color: "gray", margin: 0 }}>
            Valor atual: {value}
          </p>
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "O erro é ativado somente quando o campo é apagado (`value === undefined`). Apague o campo manualmente para ver o estado de erro.",
      },
    },
  },
};

// ─── 5. Modo controlado ───────────────────────────────────────────────────────

/**
 * Modo controlado com `useState` — `value` e `onChange` usam `number | undefined`
 * sem necessidade de conversão de string no consumidor.
 */
export const Controlled: Story = {
  name: "Controlled (with state)",
  render: () => {
    const [qty, setQty] = useState<number | undefined>(1);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <InputNumber
          label="Quantidade"
          min={1}
          max={99}
          value={qty}
          onChange={setQty}
        />
        <p style={{ fontSize: "12px", color: "gray", margin: 0 }}>
          Valor atual: <strong>{qty ?? "vazio (undefined)"}</strong>
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "`value` e `onChange` trabalham diretamente com `number | undefined`. Apague o campo para ver `undefined` no log.",
      },
    },
  },
};

/**
 * Reset controlado via `Button` do Zeroz — demonstra como resetar o valor
 * programaticamente a partir de um botão externo.
 */
export const ControlledReset: Story = {
  name: "Controlled reset",
  render: () => {
    const DEFAULT = 1;
    const [value, setValue] = useState<number | undefined>(DEFAULT);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <InputNumber
          label="Quantidade"
          min={1}
          max={50}
          value={value}
          onChange={setValue}
        />
        <div style={{ display: "flex", gap: "8px" }}>
          <Button style={{width: 'fit-content'}} size='sm' variant="secondary" onClick={() => setValue(DEFAULT)}>
            Resetar para {DEFAULT}
          </Button>
          <Button style={{width: 'fit-content'}} size='sm' variant="warning" onClick={() => setValue(undefined)}>
            Limpar campo
          </Button>
        </div>
        <small>
          Valor: <strong>{value ?? "undefined"}</strong>
        </small>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Usando `Button` do Zeroz para resetar (`variant="secondary"`) ou limpar (`variant="warning"`) o valor externamente. Demonstra que o componente sincroniza via `useEffect` quando `value` muda.',
      },
    },
  },
};

// ─── 6. Múltiplos steppers ────────────────────────────────────────────────────

/**
 * Múltiplos steppers independentes — cada instância tem seu próprio `id`
 * gerado pelo `useId` do React, sem conflitos de DOM.
 */
export const MultipleSteppers: Story = {
  name: "Multiple independent steppers",
  render: () => (
    <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
      <InputNumber label="Adultos" min={0} max={10} />
      <InputNumber label="Crianças" min={0} max={10} />
      <InputNumber label="Bebês" min={0} max={5} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Cada instância gera seu próprio `id` via `useId()`, garantindo que os `htmlFor` das labels apontem para o input correto mesmo com múltiplos steppers na mesma página.",
      },
    },
  },
};





