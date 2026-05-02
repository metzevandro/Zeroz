import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { Progress } from "./index";
import Button from "../Button/Button";
import "../../styles.scss";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
O **Progress** exibe o status de conclusão de uma tarefa como uma barra horizontal.

Suporta quatro estados visuais:

| Estado         | Props                    | Descrição                                   |
|----------------|--------------------------|---------------------------------------------|
| Determinado    | \`value\` 0–99            | Preenchimento proporcional ao valor         |
| Sucesso        | \`value={100}\`           | Aplicado automaticamente ao atingir 100%    |
| Erro           | \`error\`                 | Indica uma operação com falha               |
| Indeterminado  | \`indeterminate\`         | Barra animada para progresso desconhecido   |

Valores fora de \`[0, 100]\` são truncados automaticamente pelo utilitário \`clampProgress\`.

### Quando usar
- Upload ou download de arquivos com progresso conhecido
- Indicador de conclusão em formulários multi-etapa
- Tarefas em segundo plano onde apenas início e fim são conhecidos (use \`indeterminate\`)

### Boas práticas
- Combine com um label de percentual ou etapa para que o usuário entenda o contexto
- Use \`indeterminate\` apenas quando o valor de progresso genuinamente não está disponível
- Transfira para o estado \`error\` (não apenas oculte a barra) quando uma operação falha
        `,
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=1365-11215",
    },
  },
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description:
        "Valor de progresso entre `0` e `100`. Valores fora do intervalo são truncados automaticamente.",
      table: { type: { summary: "number" } },
    },
    error: {
      control: "boolean",
      description:
        "Renderiza a barra com estilo de erro. Use para indicar uma operação que falhou.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    indeterminate: {
      control: "boolean",
      description:
        "Renderiza uma barra animada indeterminada. Use quando o progresso total não pode ser calculado. A prop `value` é ignorada neste modo.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
  },

};

export default meta;
type Story = StoryObj<typeof Progress>;

// ─── 1. Default ───────────────────────────────────────────────────────────────

/**
 * Barra determinada a 65%.
 * Use o controle deslizante no painel Controls para ajustar o valor.
 */
export const Default: Story = {
  name: "Default",
  args: { value: 65 },
};

// ─── 2. Estados visuais ───────────────────────────────────────────────────────

/**
 * Estado de sucesso — aplicado automaticamente quando `value` atinge 100.
 * A cor da barra transiciona para `--s-color-fill-success`.
 */
export const Success: Story = {
  name: "Estado — sucesso (value 100)",
  args: { value: 100 },
};

/**
 * Estado de erro — prop `error: true`.
 * Use para comunicar uma operação que falhou.
 * A cor da barra transiciona para `--s-color-fill-warning`.
 */
export const ErrorState: Story = {
  name: "Estado — erro",
  args: { value: 40, error: true },
};

/**
 * Estado indeterminado — barra animada para operações com duração desconhecida.
 * A prop `value` é ignorada neste modo.
 * Use durante chamadas de API sem evento de progresso.
 */
export const Indeterminate: Story = {
  name: "Estado — indeterminado (animado)",
  args: { value: 0, indeterminate: true },
};

/**
 * Estado vazio — 0%.
 * Ponto de partida antes de qualquer progresso ser registrado.
 */
export const Empty: Story = {
  name: "Estado — vazio (0%)",
  args: { value: 0 },
};

// ─── 3. Matriz de estados ─────────────────────────────────────────────────────

/**
 * Todos os estados visuais empilhados para validação rápida de tokens e tema.
 */
export const AllStates: Story = {
  name: "Matriz — todos os estados",
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--s-spacing-medium)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--s-spacing-nano)",
        }}
      >
        <small>Determinado — 65%</small>
        <Progress value={65} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--s-spacing-nano)",
        }}
      >
        <small>Sucesso — 100%</small>
        <Progress value={100} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--s-spacing-nano)",
        }}
      >
        <small>Erro</small>
        <Progress value={40} error />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--s-spacing-nano)",
        }}
      >
        <small>Indeterminado</small>
        <Progress value={0} indeterminate />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--s-spacing-nano)",
        }}
      >
        <small>Vazio — 0%</small>
        <Progress value={0} />
      </div>
    </div>
  ),
};

// ─── 4. Edge cases ────────────────────────────────────────────────────────────

/**
 * Valores fora do intervalo `[0, 100]` são truncados automaticamente.
 * Nenhum erro em runtime é lançado — o comportamento é silencioso.
 */
export const Clamped: Story = {
  name: "Edge case — valores fora do intervalo (truncados)",
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--s-spacing-medium)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--s-spacing-nano)",
        }}
      >
        <small>value=-20 → truncado para 0</small>
        <Progress value={-20} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--s-spacing-nano)",
        }}
      >
        <small>value=150 → truncado para 100 (sucesso)</small>
        <Progress value={150} />
      </div>
    </div>
  ),
};

// ─── 5. Interativo ────────────────────────────────────────────────────────────

/**
 * Simulação de upload com animação em tempo real.
 * Clique em "Iniciar" para ver o progresso avançar com incrementos aleatórios.
 * Clique em "Falhar" durante o upload para acionar a transição para o estado de erro.
 */
export const Animated: Story = {
  name: "Interativo — simulação de upload",
  render: () => {
    const [value, setValue] = useState(0);
    const [running, setRunning] = useState(false);
    const [done, setDone] = useState(false);
    const [failed, setFailed] = useState(false);

    const start = () => {
      setValue(0);
      setDone(false);
      setFailed(false);
      setRunning(true);
    };

    useEffect(() => {
      if (!running) return;
      if (value >= 100) {
        setRunning(false);
        setDone(true);
        return;
      }
      const timer = setTimeout(
        () =>
          setValue((prev) =>
            Math.min(prev + Math.floor(Math.random() * 12) + 3, 100),
          ),
        200,
      );
      return () => clearTimeout(timer);
    }, [running, value]);

    const statusLabel = done
      ? "Upload concluído!"
      : failed
        ? "Upload falhou."
        : running
          ? `${value}%`
          : "Aguardando início...";

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--s-spacing-x-small)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <small>{statusLabel}</small>
        </div>
        <Progress value={value} error={failed} />
        <div
          style={{
            display: "flex",
            gap: "var(--s-spacing-xx-small)",
            width: "fit-content",
          }}
        >
          <Button onClick={start} disabled={running}>
            Iniciar
          </Button>
          <Button
            onClick={() => {
              setRunning(false);
              setFailed(true);
            }}
            disabled={!running}
            variant="warning"
          >
            Falhar
          </Button>
        </div>
      </div>
    );
  },
};

// ─── 6. Contexto real ─────────────────────────────────────────────────────────

/**
 * Progresso de etapas em formulário multi-passo.
 * Demonstra o uso com label de etapa e percentual calculado dinamicamente.
 */
export const MultiStep: Story = {
  name: "Contexto real — formulário multi-etapa",
  render: () => {
    const steps = ["Dados pessoais", "Endereço", "Pagamento", "Confirmação"];
    const [current, setCurrent] = useState(0);
    const progress = Math.round((current / (steps.length - 1)) * 100);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--s-spacing-x-small)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <small>{steps[current]}</small>
          <small>
            Etapa {current + 1} de {steps.length}
          </small>
        </div>
        <Progress value={progress} />
        <div
          style={{
            display: "flex",
            gap: "var(--s-spacing-xx-small)",
            width: "fit-content",
          }}
        >
          <Button
            onClick={() => setCurrent((p) => Math.max(0, p - 1))}
            disabled={current === 0}
            variant="secondary"
          >
            Voltar
          </Button>
          <Button
            onClick={() => setCurrent((p) => Math.min(steps.length - 1, p + 1))}
            disabled={current === steps.length - 1}
            variant="primary"
          >
            Avançar
          </Button>
        </div>
      </div>
    );
  },
};
