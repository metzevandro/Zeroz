import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { ProgressIndicator } from "./index";
import type { ProgressIndicatorState } from "./ProgressIndicator.types";
import "../../styles.scss";
import { Button } from "../Button";

const meta: Meta<typeof ProgressIndicator> = {
  title: "Components/ProgressIndicator",
  component: ProgressIndicator,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
O **ProgressIndicator** renderiza um único passo em um fluxo de múltiplas etapas.

Cada passo tem um ícone determinado pelo estado, um label e uma descrição opcional.
Os passos podem ser dispostos horizontalmente (\`"row"\`) ou verticalmente (\`"column"\`),
e expandir para preencher a largura disponível via \`widthFull\` para distribuição uniforme.

### Estados disponíveis
| Estado       | Ícone                | Descrição                                         |
|--------------|----------------------|---------------------------------------------------|
| \`default\`   | Círculo (outline)    | Passo ainda não alcançado                         |
| \`current\`   | Trip origin          | Passo ativo no momento                            |
| \`error\`     | Error (filled)       | Passo com erro de validação                       |
| \`completed\` | Check circle (filled)| Passo concluído                                   |
| \`disable\`   | Círculo (muted)      | Passo não acessível no momento                    |

### Direções
| direction  | comportamento                                              |
|------------|------------------------------------------------------------|
| \`"row"\`   | Ícone e texto lado a lado — para steppers horizontais      |
| \`"column"\`| Ícone acima do texto — para steppers verticais             |

### Quando usar
- Formulários multi-etapa (wizards, checkouts, onboardings)
- Qualquer fluxo sequencial onde o progresso precisa ser comunicado visualmente

### Boas práticas
- Sempre mostre exatamente um passo com estado \`"current"\` por vez
- Use \`widthFull\` para distribuir os passos uniformemente em um stepper horizontal
- Adicione \`onClick\` apenas nos passos alcançáveis (\`"completed"\` ou \`"current"\`)
- Passos \`"default"\` e \`"disable"\` não devem ser clicáveis
        `,
      },
    },
    design: {
       type: 'figma',
       url: 'https://figma.com/file/SEU_FILE_KEY/ProgressIndicator?node-id=NODE_ID',
     },
  },
  argTypes: {
    step: {
      control: "text",
      description: "Label do passo exibido como título.",
      table: { type: { summary: "string" } },
    },
    description: {
      control: "text",
      description: "Texto de suporte exibido abaixo do label.",
      table: { type: { summary: "string" } },
    },
    state: {
      control: "select",
      options: ["default", "current", "error", "completed", "disable"],
      description: "Estado visual do passo.",
      table: {
        type: {
          summary: '"default" | "current" | "error" | "completed" | "disable"',
        },
      },
    },
    direction: {
      control: "radio",
      options: ["row", "column"],
      description:
        'Direção do layout. `"row"` = horizontal (stepper horizontal). `"column"` = vertical (stepper vertical).',
      table: { type: { summary: '"row" | "column"' } },
    },
    widthFull: {
      control: "boolean",
      description:
        "Quando `true`, o indicador expande para preencher toda a largura disponível. Use para distribuir passos uniformemente.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    onClick: {
      action: "onClick",
      description:
        "Callback disparado ao clicar no passo. Adicione apenas em passos alcançáveis (`completed` ou `current`).",
      table: { type: { summary: "() => void" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressIndicator>;

// ─── 1. Default ───────────────────────────────────────────────────────────────

/**
 * Passo padrão ainda não alcançado.
 * Use os Controls para explorar todos os estados e direções disponíveis.
 */
export const Default: Story = {
  name: "Default",
  args: {
    step: "Detalhes",
    description: "Preencha suas informações",
    state: "default",
    direction: "row",
  },
};

// ─── 2. Estados individuais ───────────────────────────────────────────────────

/**
 * Passo atual — o passo ativo no fluxo.
 * Deve haver exatamente um passo com este estado por vez.
 */
export const Current: Story = {
  name: "Estado — current",
  args: {
    step: "Pagamento",
    description: "Dados de cobrança",
    state: "current",
    direction: "row",
  },
};

/**
 * Passo concluído — o usuário já completou este passo com sucesso.
 * Passos concluídos são clicáveis para permitir revisão.
 */
export const Completed: Story = {
  name: "Estado — completed",
  args: {
    step: "Detalhes",
    description: "Informações confirmadas",
    state: "completed",
    direction: "row",
    onClick: () => {},
  },
};

/**
 * Passo com erro — erro de validação que impede o avanço.
 * O ícone e o texto do label ficam na cor de atenção.
 */
export const ErrorState: Story = {
  name: "Estado — error",
  args: {
    step: "Pagamento",
    description: "Cartão recusado",
    state: "error",
    direction: "row",
  },
};

/**
 * Passo desabilitado — ainda não acessível no fluxo atual.
 * Não deve ser clicável.
 */
export const Disabled: Story = {
  name: "Estado — disable",
  args: {
    step: "Confirmação",
    description: "Ainda não disponível",
    state: "disable",
    direction: "row",
  },
};

// ─── 3. Direções ──────────────────────────────────────────────────────────────

/**
 * Direção `row` — ícone e label lado a lado.
 * Use em steppers horizontais, onde os passos ficam na mesma linha.
 */
export const DirectionRow: Story = {
  name: "Direção — row (horizontal)",
  args: {
    step: "Pagamento",
    description: "Dados de cobrança",
    state: "current",
    direction: "row",
  },
};

/**
 * Direção `column` — ícone acima do label.
 * Use em steppers verticais, onde os passos ficam empilhados.
 */
export const DirectionColumn: Story = {
  name: "Direção — column (vertical)",
  args: {
    step: "Pagamento",
    description: "Dados de cobrança",
    state: "current",
    direction: "column",
  },
};

// ─── 4. Matriz de estados ─────────────────────────────────────────────────────

const allStates: ProgressIndicatorState[] = [
  "default",
  "current",
  "error",
  "completed",
  "disable",
];

const stateLabels: Record<ProgressIndicatorState, string> = {
  default: "Detalhes",
  current: "Pagamento",
  error: "Endereço",
  completed: "Conta",
  disable: "Confirmação",
};

const stateDescriptions: Record<ProgressIndicatorState, string> = {
  default: "Ainda não iniciado",
  current: "Em andamento",
  error: "Corrija os erros",
  completed: "Concluído",
  disable: "Não disponível",
};

/**
 * Todos os estados lado a lado — row.
 * Use para validar ícones, cores e tokens após alterações de tema.
 */
export const AllStatesRow: Story = {
  name: "Matriz — todos os estados (row)",
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {allStates.map((state) => (
        <ProgressIndicator
          key={state}
          step={stateLabels[state]}
          description={stateDescriptions[state]}
          state={state}
          direction="row"
        />
      ))}
    </div>
  ),
};

/**
 * Todos os estados empilhados — column.
 * Use para validar o layout vertical com diferentes estados.
 */
export const AllStatesColumn: Story = {
  name: "Matriz — todos os estados (column)",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {allStates.map((state) => (
        <ProgressIndicator
          key={state}
          step={stateLabels[state]}
          description={stateDescriptions[state]}
          state={state}
          direction="column"
        />
      ))}
    </div>
  ),
};

// ─── 5. Stepper horizontal ────────────────────────────────────────────────────

/**
 * Stepper horizontal com `widthFull` — os passos preenchem a largura do container.
 * Passos concluídos e o atual são clicáveis. Passos futuros e desabilitados não.
 */
export const HorizontalStepper: Story = {
  name: "Stepper — horizontal",
  parameters: { layout: "fullscreen" },
  render: () => (
    <div style={{ display: "flex", width: "100%" }}>
      <ProgressIndicator
        step="Conta"
        description="Crie sua conta"
        state="completed"
        direction="row"
        widthFull
        onClick={() => {}}
      />
      <ProgressIndicator
        step="Pagamento"
        description="Dados de cobrança"
        state="current"
        direction="row"
        widthFull
        onClick={() => {}}
      />
      <ProgressIndicator
        step="Revisão"
        description="Confirme o pedido"
        state="default"
        direction="row"
        widthFull
      />
      <ProgressIndicator
        step="Confirmação"
        description="Tudo pronto"
        state="disable"
        direction="row"
        widthFull
      />
    </div>
  ),
};

// ─── 6. Stepper vertical ──────────────────────────────────────────────────────

/**
 * Stepper vertical — passos empilhados com `direction="column"`.
 * Padrão comum em formulários laterais ou fluxos de configuração.
 */
export const VerticalStepper: Story = {
  name: "Stepper — vertical",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ProgressIndicator
        step="Conta"
        description="Crie sua conta"
        state="completed"
        direction="column"
        onClick={() => {}}
      />
      <ProgressIndicator
        step="Perfil"
        description="Fale sobre você"
        state="current"
        direction="column"
        onClick={() => {}}
      />
      <ProgressIndicator
        step="Confirmação"
        description="Revise e envie"
        state="default"
        direction="column"
      />
    </div>
  ),
};

// ─── 7. Interativo ────────────────────────────────────────────────────────────

/**
 * Stepper interativo — clique nos passos concluídos ou no atual para navegar.
 * Demonstra o comportamento completo de um wizard multi-etapa.
 */
export const Interactive: Story = {
  name: "Interativo — wizard multi-etapa",
  parameters: { layout: "padded" },
  render: () => {
    const steps: { label: string; description: string }[] = [
      { label: "Dados pessoais", description: "Nome e e-mail" },
      { label: "Endereço", description: "Localização de entrega" },
      { label: "Pagamento", description: "Dados de cobrança" },
      { label: "Confirmação", description: "Revise o pedido" },
    ];
    const [current, setCurrent] = useState(1);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-medium)" }}>
        <div style={{ display: "flex", width: "100%" }}>
          {steps.map((s, i) => {
            const state: ProgressIndicatorState =
              i < current ? "completed" : i === current ? "current" : "default";
            return (
              <ProgressIndicator
                key={s.label}
                step={s.label}
                description={s.description}
                state={state}
                direction="row"
                widthFull
                onClick={state !== "default" ? () => setCurrent(i) : undefined}
              />
            );
          })}
        </div>
        <div
          style={{
            padding: "var(--s-spacing-medium)",
            border: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
            borderRadius: "var(--s-border-radius-medium)",
            background: "var(--s-color-fill-default)",
          }}
        >
          <small>
            Etapa atual: <strong>{steps[current].label}</strong>
          </small>
        </div>
        <div style={{ display: "flex", gap: "var(--s-spacing-xx-small)", width: 'fit-content' }}>
          <Button
            disabled={current === 0}
            onClick={() => setCurrent((p) => p - 1)}
            variant="secondary"
          >
            Voltar
          </Button>
          <Button
            disabled={current === steps.length - 1}
            onClick={() => setCurrent((p) => p + 1)}

          >
            Avançar
          </Button>
        </div>
      </div>
    );
  },
};