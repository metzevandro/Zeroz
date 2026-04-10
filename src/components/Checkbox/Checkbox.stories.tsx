import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Checkbox } from "./index";
import "../../styles.scss";
import { Button } from "../Button";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
O **Checkbox** é um input de seleção acessível e controlável.

Suporta estado indeterminado, modificadores \`disabled\` e \`noEvents\`,
acionamento por teclado via Enter, e sincronização com \`modelValue\` externo.

Um \`id\` único é gerado automaticamente via \`useId()\` quando nenhum é fornecido,
garantindo que \`<label>\` e \`<input>\` estejam sempre corretamente associados (WCAG 2.1 SC 1.3.1).

### Estados disponíveis
| Estado          | Descrição                                                              |
|-----------------|------------------------------------------------------------------------|
| Desmarcado      | Estado padrão — \`modelValue: false\`                                  |
| Marcado         | Selecionado — \`modelValue: true\`                                     |
| Indeterminado   | Estado misto — usado em padrões de "selecionar todos"                  |
| Desabilitado    | Bloqueado para interação — \`disabled: true\`                          |

### Acessibilidade
- O \`<label>\` e o \`<input>\` são sempre associados via \`htmlFor\` / \`id\`
- Navegação e acionamento por teclado suportados nativamente (Tab + Enter)
- \`indeterminate\` é aplicado via propriedade DOM nativa (\`el.indeterminate\`)
- Sem \`label\` visível, garanta contexto acessível via \`aria-label\` no elemento pai

### Quando usar
- Seleção de uma ou mais opções em uma lista
- Alternância de configurações booleanas ("Lembrar de mim", "Aceitar termos")
- Padrão "selecionar todos" usando o estado \`indeterminate\`

### Quando não usar
- Para seleção exclusiva de uma única opção — use \`RadioButton\`
- Para alternância de estado com efeito imediato — considere o modo \`switch\` ou \`Toggle\`
        `,
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10013",
    },
  },
  argTypes: {
    label: {
      control: "text",
      description:
        "Texto do label renderizado ao lado do checkbox. Quando omitido, apenas o checkbox é exibido.",
      table: { type: { summary: "string" } },
    },
    modelValue: {
      control: "boolean",
      description:
        "Estado controlado do checkbox. Quando fornecido, sincroniza o estado interno com este valor.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Desativa o checkbox e bloqueia qualquer interação.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    indeterminate: {
      control: "boolean",
      description:
        "Renderiza o checkbox no estado indeterminado (misto). Use em padrões de 'selecionar todos' quando apenas alguns filhos estão selecionados.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    noEvents: {
      control: "boolean",
      description:
        "Suprime eventos de ponteiro no wrapper. O checkbox fica visualmente interativo mas não é clicável. Use ao construir uma camada de interação customizada.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    required: {
      control: "boolean",
      description:
        "Marca o checkbox como obrigatório em contexto de formulário.",
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
        "ID explícito para o `<input>`. Quando omitido, um ID estável é gerado automaticamente.",
      table: { type: { summary: "string" } },
    },
    name: {
      control: "text",
      description:
        "Atributo `name` repassado ao `<input>` — usado para agrupar checkboxes em formulários.",
      table: { type: { summary: "string" } },
    },
    value: {
      control: "text",
      description:
        "Valor enviado com o formulário quando o checkbox está marcado.",
      table: { type: { summary: "string" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// ─── 1. Playground ────────────────────────────────────────────────────────────

/**
 * Story interativa para explorar todas as props via Controls.
 * Ponto de entrada recomendado para inspecionar o componente.
 */
export const Default: Story = {
  name: "Default",
  args: {
    label: "Aceitar termos e condições",
    modelValue: false,
    disabled: false,
    indeterminate: false,
  },
};

// ─── 2. Estados individuais ───────────────────────────────────────────────────

/**
 * Estado marcado — `modelValue: true`.
 * Use para pré-selecionar uma opção quando o valor inicial já é conhecido.
 */
export const Checked: Story = {
  name: "Estado — marcado",
  args: {
    label: "Receber novidades por e-mail",
    modelValue: true,
  },
};

/**
 * Estado indeterminado — checkbox no estado misto via prop `indeterminate`.
 * Aplicado via propriedade DOM nativa `el.indeterminate`.
 * Use exclusivamente em checkboxes "pai" de um grupo onde apenas alguns filhos estão selecionados.
 */
export const Indeterminate: Story = {
  name: "Estado — indeterminado",
  args: {
    label: "Selecionar todos",
    indeterminate: true,
  },
};

/**
 * Estado desabilitado e desmarcado.
 * O checkbox fica visualmente inativo e não responde a interações.
 */
export const Disabled: Story = {
  name: "Estado — desabilitado",
  args: {
    label: "Opção indisponível",
    disabled: true,
  },
};

/**
 * Estado desabilitado e marcado.
 * Use para configurações bloqueadas que não podem ser alteradas pelo usuário.
 */
export const DisabledChecked: Story = {
  name: "Estado — desabilitado (marcado)",
  args: {
    label: "Configuração bloqueada",
    modelValue: true,
    disabled: true,
  },
};

// ─── 3. Variações ─────────────────────────────────────────────────────────────

/**
 * Sem label — apenas o checkbox é renderizado.
 * Garanta contexto acessível via `aria-label` no elemento pai quando usar sem label.
 */
export const NoLabel: Story = {
  name: "Sem label",
  args: {},
};

// ─── 4. Uso controlado ────────────────────────────────────────────────────────

/**
 * Uso controlado com estado externo via `useState`.
 * Demonstra o padrão correto de uso em formulários:
 * `modelValue` recebe o estado e `onUpdate` atualiza o mesmo.
 */
export const Controlled: Story = {
  name: "Controlado (com estado externo)",
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--s-spacing-x-small)",
        }}
      >
        <Checkbox
          label="Concordo com os termos de uso"
          modelValue={checked}
          onUpdate={setChecked}
        />
        <small style={{ color: "var(--s-color-content-default)" }}>
          Valor atual: {checked ? "marcado" : "desmarcado"}
        </small>
      </div>
    );
  },
};

// ─── 5. Padrão selecionar todos ───────────────────────────────────────────────

/**
 * Padrão "selecionar todos" com estado indeterminado no checkbox pai.
 * O pai exibe `indeterminate` quando apenas alguns filhos estão selecionados,
 * `modelValue: true` quando todos estão, e `false` quando nenhum está.
 */
export const SelectAll: Story = {
  name: "Padrão — selecionar todos",
  render: () => {
    const options = ["Opção A", "Opção B", "Opção C"];
    const [selected, setSelected] = useState<string[]>([]);

    const allChecked = selected.length === options.length;
    const someChecked = selected.length > 0 && !allChecked;

    const toggleAll = (checked: boolean) => {
      setSelected(checked ? [...options] : []);
    };

    const toggleOne = (option: string, checked: boolean) => {
      setSelected((prev) =>
        checked ? [...prev, option] : prev.filter((o) => o !== option),
      );
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--s-spacing-x-small)",
        }}
      >
        <Checkbox
          label="Selecionar todos"
          modelValue={allChecked}
          indeterminate={someChecked}
          onUpdate={toggleAll}
        />
        <div
          style={{
            paddingLeft: "var(--s-spacing-medium)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--s-spacing-nano)",
          }}
        >
          {options.map((option) => (
            <Checkbox
              key={option}
              label={option}
              modelValue={selected.includes(option)}
              onUpdate={(checked) => toggleOne(option, checked)}
            />
          ))}
        </div>
      </div>
    );
  },
};

// ─── 6. Contexto real ─────────────────────────────────────────────────────────

/**
 * Grupo de checkboxes em formulário de preferências.
 * Demonstra o uso de múltiplos checkboxes independentes em contexto real.
 */
export const PreferencesForm: Story = {
  name: "Contexto real — formulário de preferências",
  render: () => {
    const [prefs, setPrefs] = useState({
      email: true,
      sms: false,
      push: true,
    });

    const toggle = (key: keyof typeof prefs) =>
      setPrefs((prev) => ({ ...prev, [key]: !prev[key] }));

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--s-spacing-nano)",
        }}
      >
        <p>Notificações</p>
        <Checkbox
          label="Receber por e-mail"
          modelValue={prefs.email}
          onUpdate={() => toggle("email")}
        />
        <Checkbox
          label="Receber por SMS"
          modelValue={prefs.sms}
          onUpdate={() => toggle("sms")}
        />
        <Checkbox
          label="Notificações push"
          modelValue={prefs.push}
          onUpdate={() => toggle("push")}
        />
      </div>
    );
  },
};

/**
 * Checkbox de aceite de termos em formulário de cadastro.
 * Demonstra o uso do `required` e o bloqueio de submissão sem aceite.
 */
export const TermsAcceptance: Story = {
  name: "Contexto real — aceite de termos",
  render: () => {
    const [accepted, setAccepted] = useState(false);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--s-spacing-x-small)",
        }}
      >
        <Checkbox
          label="Li e aceito os Termos de Uso e a Política de Privacidade"
          modelValue={accepted}
          onUpdate={setAccepted}
          required
        />
        <div style={{ width: "fit-content" }}>
          <Button disabled={!accepted}>Criar conta</Button>
        </div>
      </div>
    );
  },
};

// ─── 7. Matriz de estados ─────────────────────────────────────────────────────

/**
 * Todos os estados visuais lado a lado para validação rápida
 * após alterações de token ou tema.
 */
export const AllStates: Story = {
  name: "Matriz — todos os estados",
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--s-spacing-x-small)",
      }}
    >
      <Checkbox label="Desmarcado (padrão)" modelValue={false} />
      <Checkbox label="Marcado" modelValue={true} />
      <Checkbox label="Indeterminado" indeterminate={true} />
      <Checkbox label="Desabilitado (desmarcado)" disabled={true} />
      <Checkbox
        label="Desabilitado (marcado)"
        modelValue={true}
        disabled={true}
      />
    </div>
  ),
};
