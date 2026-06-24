import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Input } from "./index";
import "../../styles.scss";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
O **Input** é um campo de texto flexível com suporte a ícones, toggle de senha,
validação inline e estado de skeleton.

O \`label\` é automaticamente associado ao \`<input>\` via \`htmlFor\` / \`id\`
gerado por \`useId()\`, satisfazendo o WCAG 2.1 SC 1.3.1.

### Tipos disponíveis
Aceita qualquer \`type\` nativo do \`<input>\` HTML. O tipo \`"password"\` ativa
automaticamente o toggle de visibilidade — o ícone de olho substitui o \`icon\`.

### Quando usar
- Qualquer campo de texto livre em formulários
- Campos de senha com toggle de visibilidade
- Campos com feedback de validação inline
- Estados de carregamento onde o formulário ainda não está pronto

### Boas práticas
- Forneça sempre um \`label\` — é obrigatório para acessibilidade
- Use \`error\` + \`textError\` juntos para comunicar falhas de validação
- Use \`icon\` para reforçar o propósito do campo (ex: \`"mail"\`, \`"search"\`)
- Prefira \`skeleton\` durante carregamento assíncrono em vez de ocultar o campo
        `,
      },
    },
    design: {
      type: "figma",
      url: "https://figma.com/file/SEU_FILE_KEY/Input?node-id=NODE_ID",
    },
  },
  argTypes: {
    label: {
      control: "text",
      description:
        "Label exibido acima do campo. Associado ao `<input>` via `htmlFor` / `id` automaticamente.",
      table: { type: { summary: "string" } },
    },
    placeholder: {
      control: "text",
      description: "Texto exibido dentro do campo quando está vazio.",
      table: { type: { summary: "string" } },
    },
    type: {
      control: "select",
      options: ["text", "password", "email", "number", "tel", "url"],
      description:
        "Tipo nativo do `<input>`. O tipo `password` ativa o toggle de visibilidade automaticamente.",
      table: {
        type: {
          summary: '"text" | "password" | "email" | "number" | "tel" | "url"',
        },
      },
    },
    icon: {
      control: "text",
      description:
        'Nome do ícone Material Symbol renderizado à direita do campo. Ignorado quando `type="password"`.',
      table: { type: { summary: "string" } },
    },
    fillIcon: {
      control: "boolean",
      description: "Renderiza o ícone no variante preenchido.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    error: {
      control: "boolean",
      description: "Aplica estilo de erro ao campo. Use junto com `textError`.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    textError: {
      control: "text",
      description:
        "Mensagem de validação exibida abaixo do campo quando `error` é `true`.",
      table: { type: { summary: "string" } },
    },
    disabled: {
      control: "boolean",
      description: "Desativa o campo e bloqueia toda interação.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    skeleton: {
      control: "boolean",
      description:
        "Substitui o campo por um `<Skeleton>` com as mesmas dimensões. Use durante carregamento assíncrono.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    value: {
      control: "text",
      description: "Valor controlado externamente.",
      table: { type: { summary: "string" } },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Input>;

// ─── 1. Default ───────────────────────────────────────────────────────────────

/**
 * Campo de texto padrão com label, ícone e placeholder.
 * Use os Controls para explorar todas as props disponíveis.
 */
export const Default: Story = {
  name: "Default",
  args: {
    label: "E-mail",
    icon: "mail",
    placeholder: "voce@exemplo.com",
  },
};

// ─── 2. Tipos ─────────────────────────────────────────────────────────────────

/**
 * Campo sem ícone — apenas label e placeholder.
 * Use quando o contexto do campo já é autoexplicativo.
 */
export const NoIcon: Story = {
  name: "Tipo — sem ícone",
  args: {
    label: "Nome completo",
    placeholder: "Ex: Jane Doe",
  },
};

/**
 * Campo de senha — o toggle de visibilidade substitui automaticamente o `icon`.
 * Clique no ícone do olho para alternar entre ocultar e exibir a senha.
 */
export const Password: Story = {
  name: "Tipo — senha (com toggle)",
  args: {
    label: "Senha",
    type: "password",
    placeholder: "••••••••",
  },
};

/**
 * Campo de e-mail com tipo nativo `email`.
 * Ativa a validação nativa do browser e o teclado de e-mail em mobile.
 */
export const Email: Story = {
  name: "Tipo — e-mail",
  args: {
    label: "Endereço de e-mail",
    icon: "mail",
    type: "email",
    placeholder: "voce@exemplo.com",
  },
};

// ─── 3. Estados ───────────────────────────────────────────────────────────────

/**
 * Estado de erro com mensagem de validação inline.
 * Use `error` + `textError` juntos — nunca um sem o outro.
 */
export const WithError: Story = {
  name: "Estado — erro",
  args: {
    label: "Nome de usuário",
    icon: "person",
    value: "usuario_existente",
    error: true,
    textError: "Este nome de usuário já está em uso.",
  },
};

/**
 * Estado desabilitado — campo inativo com opacidade reduzida.
 * Bloqueia toda interação via atributo HTML `disabled`.
 */
export const Disabled: Story = {
  name: "Estado — desabilitado",
  args: {
    label: "ID da conta",
    icon: "badge",
    value: "ACC-00421",
    disabled: true,
  },
};

/**
 * Estado skeleton — placeholder com as dimensões exatas do campo.
 * Evita layout shift quando o formulário carrega assincronamente.
 */
export const Skeleton: Story = {
  name: "Estado — skeleton",
  args: {
    label: "Carregando campo...",
    skeleton: true,
  },
};

// ─── 4. Ícones ────────────────────────────────────────────────────────────────

/**
 * Ícone preenchido via `fillIcon: true`.
 * Use de forma consistente — evite misturar outlined e filled no mesmo formulário.
 */
export const FilledIcon: Story = {
  name: "Ícone — preenchido (fillIcon)",
  args: {
    label: "Buscar",
    icon: "search",
    fillIcon: true,
    placeholder: "Buscar...",
  },
};

// ─── 5. Uso controlado ────────────────────────────────────────────────────────

/**
 * Campo controlado com estado externo via `useState`.
 * O valor digitado é exibido em tempo real abaixo do campo.
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
        <Input
          label="Nome"
          placeholder="Digite seu nome"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <small>
          Valor atual: <strong>{valor || "vazio"}</strong>
        </small>
      </div>
    );
  },
};

/**
 * Validação ao sair do campo (`onBlur`).
 * O erro é ativado quando o campo perde o foco vazio e desativado ao digitar.
 */
export const WithBlurValidation: Story = {
  name: "Controlado — validação no blur",
  render: () => {
    const [valor, setValor] = useState("");
    const [erro, setErro] = useState(false);
    return (
      <Input
        label="E-mail"
        icon="mail"
        type="email"
        placeholder="voce@exemplo.com"
        value={valor}
        error={erro}
        textError="Campo obrigatório."
        onChange={(e) => {
          setValor(e.target.value);
          if (erro) setErro(false);
        }}
        onBlur={() => setErro(valor.trim().length === 0)}
      />
    );
  },
};

// ─── 6. Contexto real ─────────────────────────────────────────────────────────

/**
 * Formulário de login completo com campos de e-mail e senha.
 * Cada campo recebe um `id` único via `useId()` — sem conflito de labels.
 */
export const LoginForm: Story = {
  name: "Contexto real — formulário de login",
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--s-spacing-x-small)",
        width: "300px",
      }}
    >
      <Input
        label="E-mail"
        icon="mail"
        type="email"
        placeholder="voce@exemplo.com"
      />
      <Input label="Senha" type="password" placeholder="••••••••" />
    </div>
  ),
};

/**
 * Formulário de cadastro com múltiplos campos.
 * Demonstra que cada `Input` é independente e acessível mesmo quando múltiplas
 * instâncias coexistem na mesma página.
 */
export const RegisterForm: Story = {
  name: "Contexto real — formulário de cadastro",
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--s-spacing-x-small)",
        width: "300px",
      }}
    >
      <Input label="Nome" icon="person" placeholder="Jane" />
      <Input label="Sobrenome" icon="person" placeholder="Doe" />
      <Input
        label="E-mail"
        icon="mail"
        type="email"
        placeholder="jane@exemplo.com"
      />
      <Input label="Senha" type="password" />
    </div>
  ),
};

/**
 * Formulário em estado de carregamento — todos os campos exibem skeleton.
 * Use enquanto os dados do formulário ainda estão sendo buscados da API.
 */
export const SkeletonForm: Story = {
  name: "Contexto real — formulário em carregamento",
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--s-spacing-x-small)",
        width: "300px",
      }}
    >
      <Input label="Nome" skeleton />
      <Input label="E-mail" skeleton />
      <Input label="Cargo" skeleton />
    </div>
  ),
};
