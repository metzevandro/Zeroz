import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { InputSearch } from "./index";
import "../../styles.scss";

const meta: Meta<typeof InputSearch> = {
  title: "Components/InputSearch",
  component: InputSearch,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
O **InputSearch** é um campo de busca com botão de limpar integrado.

Os callbacks só disparam em ações explícitas do usuário — não a cada tecla:

| Ação                    | Comportamento                              |
|-------------------------|--------------------------------------------|
| Pressionar **Enter**    | Dispara \`onChange\` com o valor atual      |
| Clicar no botão limpar  | Dispara \`onChange\` com \`""\` imediatamente |

O valor interno é atualizado a cada tecla para manter o campo responsivo,
mas o callback só é chamado quando o usuário confirma a busca.

### Padrão URL + API
\`\`\`tsx
const [params, setParams] = useSearchParams();
const q = params.get("q") ?? "";

<InputSearch
  placeholder="Buscar usuários..."
  value={q}
  onChange={(val) => {
    setParams({ q: val }); // sincroniza URL
    fetchUsers(val);        // chama API
  }}
/>
\`\`\`

### Quando usar
- Busca em tabelas e listas com chamada à API no Enter
- Campos de pesquisa com sincronização de URL

### Boas práticas
- Inicialize \`value\` a partir da URL para que a busca sobreviva ao refresh e ao compartilhamento
- Sempre trate a string vazia \`""\` no seu fetch — ela normalmente significa "sem filtro"
- O botão de limpar já chama \`onChange("")\` — não é necessário tratar isso separadamente
        `,
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10074',
     },
  },
  argTypes: {
    placeholder: {
      control: "text",
      description: "Texto exibido dentro do campo quando está vazio.",
      table: { type: { summary: "string" } },
    },
    disabled: {
      control: "boolean",
      description: "Desativa o campo de busca e bloqueia toda interação.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    value: {
      control: "text",
      description:
        "Valor controlado externamente (ex: parâmetro de URL). Mantém o campo sincronizado quando a fonte muda.",
      table: { type: { summary: "string" } },
    },
    isSkeleton: {
      control: "boolean",
      description:
        "Exibe um placeholder skeleton no lugar do campo. Use durante estados de carregamento.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    onChange: {
      action: "onChange",
      description:
        "Disparado ao pressionar Enter ou ao limpar o campo. Recebe o valor atual como argumento.",
      table: { type: { summary: "(value: string) => void" } },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: "320px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof InputSearch>;

// ─── 1. Default ───────────────────────────────────────────────────────────────

/**
 * Campo de busca padrão.
 * Digite e pressione Enter para disparar o callback.
 * Clique no × para limpar e disparar `onChange("")`.
 */
export const Default: Story = {
  name: "Default",
  args: {
    placeholder: "Buscar...",
    disabled: false,
  },
};

// ─── 2. Estados ───────────────────────────────────────────────────────────────

/**
 * Estado desabilitado — campo inativo com cursor bloqueado.
 * Use quando a busca não está disponível no contexto atual.
 */
export const Disabled: Story = {
  name: "Estado — desabilitado",
  args: {
    placeholder: "Busca indisponível",
    disabled: true,
  },
};

/**
 * Estado skeleton — exibe placeholder com as mesmas dimensões do campo.
 * Use enquanto a página ou o contexto de busca ainda está carregando.
 */
export const Skeleton: Story = {
  name: "Estado — skeleton",
  args: {
    placeholder: "Buscar...",
    isSkeleton: true,
  },
};

// ─── 3. Comportamento no Enter ────────────────────────────────────────────────

/**
 * Demonstra que o callback só dispara ao pressionar Enter.
 * O contador só incrementa quando a busca é confirmada — não a cada tecla.
 */
export const EnterTrigger: Story = {
  name: "Comportamento — disparo no Enter",
  render: () => {
    const [lastSearch, setLastSearch] = useState("");
    const [count, setCount] = useState(0);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-x-small)" }}>
        <InputSearch
          placeholder="Digite e pressione Enter..."
          onChange={(val) => {
            setLastSearch(val);
            setCount((c) => c + 1);
          }}
        />
        <small>Buscas realizadas: <strong>{count}</strong></small>
        <small>Último termo: <strong>{lastSearch || "—"}</strong></small>
      </div>
    );
  },
};

// ─── 4. Filtragem local ───────────────────────────────────────────────────────

/**
 * Filtragem local — a lista filtra ao pressionar Enter.
 * Digite um termo e pressione Enter para filtrar a lista de frutas.
 * Clique no × para limpar e exibir todos os itens novamente.
 */
export const LocalFilter: Story = {
  name: "Padrão — filtragem local (Enter)",
  render: () => {
    const items = [
      "Abacaxi", "Banana", "Cereja", "Damasco",
      "Framboesa", "Goiaba", "Laranja", "Manga",
      "Pêssego", "Uva",
    ];
    const [filter, setFilter] = useState("");
    const filtered = items.filter((i) =>
      i.toLowerCase().includes(filter.toLowerCase()),
    );
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-x-small)" }}>
        <InputSearch
          placeholder="Buscar frutas... (Enter)"
          onChange={setFilter}
        />
        <ul style={{ paddingLeft: "var(--s-spacing-medium)" }}>
          {filtered.length > 0 ? (
            filtered.map((item) => <li key={item}><small>{item}</small></li>)
          ) : (
            <li><small>Nenhum resultado</small></li>
          )}
        </ul>
      </div>
    );
  },
};

// ─── 5. Valor inicializado externamente ───────────────────────────────────────

/**
 * Campo inicializado a partir de um valor externo via prop `value`.
 * Simula a inicialização a partir de um parâmetro de URL (`?q=react`).
 * Edite e pressione Enter para atualizar o valor.
 */
export const InitializedFromUrl: Story = {
  name: "Padrão — inicializado de URL (?q=...)",
  render: () => {
    const [query, setQuery] = useState("react");
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-x-small)" }}>
        <InputSearch
          placeholder="Buscar..."
          value={query}
          onChange={setQuery}
        />
        <small>URL seria: <code>?q={query || ""}</code></small>
      </div>
    );
  },
};

// ─── 6. Contexto real ─────────────────────────────────────────────────────────

/**
 * Campo de busca em tabela de usuários.
 * Digite um nome e pressione Enter para filtrar. Clique em × para limpar.
 */
export const UserTableFilter: Story = {
  name: "Contexto real — filtro de tabela",
  parameters: { layout: "padded" },
  render: () => {
    const users = [
      { name: "Ana Souza", role: "Admin" },
      { name: "Carlos Lima", role: "Editor" },
      { name: "Jane Doe", role: "Viewer" },
      { name: "Maria Clara", role: "Editor" },
      { name: "Pedro Alves", role: "Viewer" },
    ];
    const [filter, setFilter] = useState("");
    const filtered = users.filter((u) =>
      u.name.toLowerCase().includes(filter.toLowerCase()),
    );
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-spacing-x-small)", width: "400px" }}>
        <InputSearch
          placeholder="Buscar usuário... (Enter)"
          onChange={setFilter}
        />
        <div style={{ border: "var(--s-border-width-hairline) solid var(--s-color-border-default)", borderRadius: "var(--s-border-radius-medium)" }}>
          {filtered.length > 0 ? (
            filtered.map(({ name, role }, i) => (
              <div
                key={name}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "var(--s-spacing-x-small) var(--s-spacing-small)",
                  borderBottom: i < filtered.length - 1
                    ? "var(--s-border-width-hairline) solid var(--s-color-border-default)"
                    : "none",
                }}
              >
                <small>{name}</small>
                <small>{role}</small>
              </div>
            ))
          ) : (
            <div style={{ padding: "var(--s-spacing-small)", textAlign: "center" }}>
              <small>Nenhum usuário encontrado</small>
            </div>
          )}
        </div>
      </div>
    );
  },
};