import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { DatePicker } from "./index";
import "../../styles.scss";

const meta: Meta<typeof DatePicker> = {
  title: "Components/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
O **DatePicker** é um campo de entrada de data com calendário dropdown integrado.

O usuário pode digitar a data diretamente (auto-mascarada como \`DD/MM/YYYY\`)
ou selecioná-la visualmente no calendário. O calendário suporta navegação por
mês/ano via setas e um painel dedicado de mês+ano para navegação rápida em
longos intervalos de tempo.

### Entrada por digitação
- Auto-mascara a entrada no formato \`DD/MM/YYYY\` à medida que o usuário digita
- Backspace remove o último dígito respeitando a máscara
- Exibe mensagem de erro inline para datas inválidas (ex: \`31/02/2025\`)

### Calendário
- Clique no ícone do calendário ou no campo para abrir/fechar
- Clique no mês/ano no cabeçalho para alternar para o painel de seleção rápida
- "Reset" retorna para a data de hoje; "Done" confirma e fecha o calendário

### Quando usar
- Formulários que requerem uma data específica (nascimento, prazo, agendamento)
- Quando tanto a entrada digitada quanto a visual são úteis ao usuário
- Quando feedback de validação inline é necessário

### Quando não usar
- Quando apenas mês ou ano é necessário — use selects simples
- Para intervalos de datas — use dois campos \`DatePicker\` independentes
        `,
      },
    },
     design: {
       type: 'figma',
      url: 'https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=1320-551',
   },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Label exibido acima do campo de entrada.",
      table: { type: { summary: "string" } },
    },
    value: {
      control: "text",
      description:
        "Valor controlado no formato `DD/MM/YYYY`. Quando fornecido, inicializa o campo com esta data.",
      table: { type: { summary: "string" } },
    },
    disabled: {
      control: "boolean",
      description: "Desativa o campo e impede a interação com o calendário.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    skeleton: {
      control: "boolean",
      description:
        "Renderiza o campo em estado de skeleton/carregamento.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    onChange: {
      action: "onChange",
      description:
        "Callback disparado quando a data muda. Recebe a string no formato `DD/MM/YYYY`.",
      table: { type: { summary: "(value: string) => void" } },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "400px", maxWidth: "200px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

// ─── 1. Default ───────────────────────────────────────────────────────────────

/**
 * Estado base sem valor pré-preenchido.
 * O campo inicializa com a data de hoje.
 * Clique no campo ou no ícone de calendário para abrir o seletor.
 */
export const Default: Story = {
  name: "Default",
  args: {
    label: "Selecione uma data",
    onChange: () => {},
  },
};

// ─── 2. Estados ───────────────────────────────────────────────────────────────

/**
 * Campo com valor pré-preenchido via prop `value`.
 * Use para inicializar o campo com uma data conhecida (ex: data de criação do registro).
 */
export const WithValue: Story = {
  name: "Estado — com valor inicial",
  args: {
    label: "Data de nascimento",
    value: "15/06/1990",
    onChange: () => {},
  },
};

/**
 * Estado desabilitado — campo e calendário inativos.
 * Use quando a data não pode ser alterada no contexto atual.
 */
export const Disabled: Story = {
  name: "Estado — desabilitado",
  args: {
    label: "Data (bloqueada)",
    value: "01/01/2025",
    disabled: true,
    onChange: () => {},
  },
};

/**
 * Estado skeleton — campo em carregamento.
 * Use enquanto os dados do formulário ainda estão sendo buscados.
 */
export const Skeleton: Story = {
  name: "Estado — skeleton",
  args: {
    label: "Carregando data...",
    skeleton: true,
    onChange: () => {},
  },
};

// ─── 3. Uso controlado ────────────────────────────────────────────────────────

/**
 * Uso totalmente controlado com `value` + `onChange`.
 * O valor exibido abaixo do campo sincroniza em tempo real com
 * qualquer alteração feita por digitação ou seleção no calendário.
 */
export const Controlled: Story = {
  name: "Controlado — com estado externo",
  render: () => {
    const [date, setDate] = useState("01/01/2025");
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-x-small)" }}>
        <DatePicker label="Data do agendamento" value={date} onChange={setDate} />
        <small>Valor atual: <strong>{date}</strong></small>
      </div>
    );
  },
};

// ─── 4. Validação ─────────────────────────────────────────────────────────────

/**
 * Validação inline de data inválida.
 * Digite uma data impossível (ex: `31/02/2025`) para ver a mensagem de erro.
 * O erro é exibido ao completar os 10 caracteres da máscara.
 */
export const WithValidation: Story = {
  name: "Validação — data inválida",
  render: () => {
    const [date, setDate] = useState("");
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-x-small)" }}>
        <DatePicker label="Data de vencimento" value={date} onChange={setDate} />
        <small>Tente digitar: <strong>31/02/2025</strong></small>
      </div>
    );
  },
};

// ─── 5. Contexto real ─────────────────────────────────────────────────────────

/**
 * Seleção de intervalo de datas — dois campos independentes lado a lado.
 * Cada campo tem seu próprio estado e calendário.
 * Padrão comum em filtros de relatório e reservas.
 */
export const DateRange: Story = {
  name: "Contexto real — intervalo de datas",
  decorators: [
    (Story) => (
      <div style={{ minHeight: "380px", maxWidth: "640px" }}>
        <Story />
      </div>
    ),
  ],
  render: () => {
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-x-small)" }}>
        <div style={{ display: "flex", gap: "var(--s-spacing-medium)" }}>
          <DatePicker label="Data inicial" value={start} onChange={setStart} />
          <DatePicker label="Data final" value={end} onChange={setEnd} />
        </div>
        {start && end && (
          <small>
            Período: <strong>{start}</strong> até <strong>{end}</strong>
          </small>
        )}
      </div>
    );
  },
};

/**
 * Campo de data em formulário de cadastro.
 * Demonstra o uso integrado com outros campos e o botão de submissão.
 */
export const InForm: Story = {
  name: "Contexto real — em formulário",
  render: () => {
    const [birthdate, setBirthdate] = useState("");
    const [submitted, setSubmitted] = useState(false);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-x-small)", maxWidth: "320px" }}>
        <DatePicker
          label="Data de nascimento"
          value={birthdate}
          onChange={setBirthdate}
        />
        <div style={{ width: "fit-content" }}>
          <button
            onClick={() => setSubmitted(true)}
            disabled={!birthdate || birthdate.length < 10}
            style={{
              padding: "var(--s-spacing-xx-small) var(--s-spacing-x-small)",
              background: !birthdate || birthdate.length < 10
                ? "var(--s-color-fill-disable)"
                : "var(--s-color-fill-highlight)",
              color: !birthdate || birthdate.length < 10
                ? "var(--s-color-content-disable)"
                : "var(--s-color-content-on-color)",
              border: "none",
              borderRadius: "var(--s-border-radius-medium)",
              cursor: !birthdate || birthdate.length < 10 ? "not-allowed" : "pointer",
              font: "var(--s-typography-label-medium)",
            }}
          >
            Continuar
          </button>
        </div>
        {submitted && (
          <small>Nascimento registrado: <strong>{birthdate}</strong></small>
        )}
      </div>
    );
  },
};