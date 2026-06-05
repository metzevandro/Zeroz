import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Slider from "./Slider";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=1365-11216",
    },
    docs: {
      description: {
        component: `
**Slider** é um input de intervalo com handle customizado, barra de progresso,
indicadores de mínimo/máximo e um input numérico auxiliar.

Todas as interações — arrasto por mouse, arrasto por touch, teclas de seta e
input numérico direto — encaixam o valor no \`step\` mais próximo e o mantêm
dentro do intervalo \`[min, max]\`.

\`value\` e \`onChange\` trabalham diretamente com \`number\`, sem necessidade de
\`parseInt\` no lado do consumidor.

### Quando usar
- Selecionar um valor dentro de um intervalo numérico contínuo
- Controles de volume, brilho, opacidade ou ajustes similares
- Casos em que tanto a entrada aproximada (arrastar) quanto a precisa (digitar) são úteis

### Quando **não** usar
- Escolha entre opções discretas nomeadas → use \`Select\` ou \`RadioGroup\`
- Seleção de dois extremos de um intervalo → este componente não suporta handle duplo
- Entrada de valor exato com alta precisão → use um \`Input\` numérico isolado

### Boas práticas
- Sempre forneça \`min\`, \`max\` e \`step\` — eles definem o intervalo válido
- Use \`label\` para acessibilidade — ela é associada ao input numérico via \`htmlFor\`
- O handle possui \`role="slider"\` e atributos \`aria-value*\` para leitores de tela
        `,
      },
    },
  },
  argTypes: {
    min: {
      control: "number",
      description: "Valor mínimo (inclusivo). **Obrigatório.**",
      table: { type: { summary: "number" } },
    },
    max: {
      control: "number",
      description: "Valor máximo (inclusivo). **Obrigatório.**",
      table: { type: { summary: "number" } },
    },
    step: {
      control: "number",
      description:
        "Incremento de cada passo. Aplicado no arrasto, clique e teclas de seta. **Obrigatório.**",
      table: { type: { summary: "number" } },
    },
    value: {
      control: "number",
      description:
        "Valor controlado atual. O componente é sempre controlado — mantenha o estado no consumidor. **Obrigatório.**",
      table: { type: { summary: "number" } },
    },
    label: {
      control: "text",
      description:
        "Label exibido acima do slider. Quando fornecido, é associado ao input numérico via `htmlFor`/`id` para acessibilidade.",
      table: { type: { summary: "string" } },
    },
    onChange: {
      action: "onChange",
      description:
        "Callback disparado em toda mudança de valor (arrasto, clique, seta, input direto). Recebe `number`.",
      table: { type: { summary: "(value: number) => void" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

// ─── 1. Default ───────────────────────────────────────────────────────────────

/**
 * Estado base do componente: slider de 0 a 100, passo 1, com label.
 * Representa o caso de uso mais comum (ex.: controle de volume).
 */
export const Default: Story = {
  name: "Default",
  render: () => {
    const [val, setVal] = useState(50);
    return (
      <Slider
        label="Volume"
        min={0}
        max={100}
        step={1}
        value={val}
        onChange={setVal}
      />
    );
  },
};

// ─── 2. Variações principais ──────────────────────────────────────────────────

/**
 * Passo de 10 — o handle encaixa apenas em múltiplos de 10.
 * Útil para valores percentuais com granularidade grossa, como opacidade em 10%.
 */
export const SteppedValues: Story = {
  name: "Stepped (step=10)",
  render: () => {
    const [val, setVal] = useState(40);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Slider
          label="Opacidade"
          min={0}
          max={100}
          step={10}
          value={val}
          onChange={setVal}
        />
        <small style={{ color: "gray" }}>Valor atual: {val}</small>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "O handle encaixa no múltiplo de `step` mais próximo a cada interação (arrasto, clique ou seta).",
      },
    },
  },
};

/**
 * Intervalo negativo — demonstra que `min` e `max` aceitam números negativos.
 * Útil para offsets de temperatura, balanço de áudio, ajustes de equalização, etc.
 */
export const NegativeRange: Story = {
  name: "Negative range (min=-50, max=50)",
  render: () => {
    const [val, setVal] = useState(0);
    return (
      <Slider
        label="Offset de temperatura"
        min={-50}
        max={50}
        step={5}
        value={val}
        onChange={setVal}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Slider com intervalo negativo. O valor zero é exibido no input e o handle fica posicionado ao centro.",
      },
    },
  },
};

/**
 * Passo fracionário — útil para controles de precisão, como zoom ou ajuste fino.
 * O input numérico aceita valores decimais diretamente.
 */
export const FractionalStep: Story = {
  name: "Fractional step (step=0.1)",
  render: () => {
    const [val, setVal] = useState(1.5);
    return (
      <Slider
        label="Zoom"
        min={0.5}
        max={3}
        step={0.1}
        value={val}
        onChange={setVal}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Passo decimal para controles de alta precisão. O snapping continua funcionando para steps fracionários.",
      },
    },
  },
};

/**
 * Sem label — o handle recebe `aria-label="Slider"` como fallback acessível.
 * Use somente quando o contexto visual já deixar o propósito claro.
 */
export const NoLabel: Story = {
  name: "Without label",
  render: () => {
    const [val, setVal] = useState(25);
    return <Slider min={0} max={100} step={1} value={val} onChange={setVal} />;
  },
  parameters: {
    docs: {
      description: {
        story:
          "Quando `label` não é fornecida, o handle recebe `aria-label=\"Slider\"` como fallback. Use apenas quando o propósito for visualmente óbvio pelo contexto.",
      },
    },
  },
};

/**
 * Painel de configurações — múltiplos sliders independentes em sequência.
 * Cada instância gera seu próprio `id` via `useId`, evitando conflitos de DOM.
 */
export const SettingsPanel: Story = {
  name: "Settings panel (multiple sliders)",
  render: () => {
    const [volume, setVolume] = useState(70);
    const [brightness, setBrightness] = useState(50);
    const [bass, setBass] = useState(30);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "360px",
        }}
      >
        <Slider
          label="Volume"
          min={0}
          max={100}
          step={1}
          value={volume}
          onChange={setVolume}
        />
        <Slider
          label="Brilho"
          min={0}
          max={100}
          step={5}
          value={brightness}
          onChange={setBrightness}
        />
        <Slider
          label="Graves"
          min={-10}
          max={10}
          step={1}
          value={bass}
          onChange={setBass}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Múltiplos sliders independentes — cada um mantém seu próprio estado e id único gerado pelo `useId` do React.",
      },
    },
  },
};

// ─── 3. Estado desabilitado ───────────────────────────────────────────────────

/**
 * Estado desabilitado — bloqueia visualmente e interativamente o slider.
 *
 * ⚠️ O componente atual não possui a prop `disabled` nativamente.
 * Este exemplo mostra o padrão recomendado via wrapper com
 * `pointer-events: none` + `opacity` enquanto a prop não for implementada.
 *
 * Ao implementar `disabled` nativamente, lembre-se de:
 * - Adicionar `aria-disabled="true"` no handle
 * - Remover `tabIndex` do handle
 * - Adicionar `disabled` ao `<input type="number">`
 */
export const Disabled: Story = {
  name: "Disabled (workaround)",
  render: () => {
    const [val] = useState(60);
    return (
      <div style={{ pointerEvents: "none", opacity: 0.4 }}>
        <Slider
          label="Slider desabilitado"
          min={0}
          max={100}
          step={1}
          value={val}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "O componente não possui prop `disabled` nativa. Enquanto não for adicionada, use `pointer-events: none` + `opacity` no wrapper e omita `onChange` para evitar atualizações de estado.",
      },
    },
  },
};

// ─── 4. Estados de borda (edge cases) ────────────────────────────────────────

/**
 * Valor no mínimo — barra de progresso vazia, handle posicionado no início da trilha.
 * Verifique que o handle não saia da área visível do track.
 */
export const AtMinimum: Story = {
  name: "At minimum value",
  render: () => {
    const [val, setVal] = useState(0);
    return (
      <Slider
        label="No mínimo"
        min={0}
        max={100}
        step={1}
        value={val}
        onChange={setVal}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Handle posicionado no início da trilha. Barra de progresso vazia. Seta para esquerda não deve alterar o valor.",
      },
    },
  },
};

/**
 * Valor no máximo — barra de progresso completamente preenchida, handle no fim da trilha.
 * Verifique que o handle não ultrapasse a borda direita do track.
 */
export const AtMaximum: Story = {
  name: "At maximum value",
  render: () => {
    const [val, setVal] = useState(100);
    return (
      <Slider
        label="No máximo"
        min={0}
        max={100}
        step={1}
        value={val}
        onChange={setVal}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Handle posicionado no fim da trilha. Barra de progresso totalmente preenchida. Seta para direita não deve alterar o valor.",
      },
    },
  },
};