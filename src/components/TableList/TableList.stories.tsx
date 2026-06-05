import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { TableList } from "./index";
import type { TableListSize } from "./TableList.types";
import Badge from "../Badge/Badge";
import ButtonIcon from "../ButtonIcon";
import { Tooltip } from "../Tooltip";
import { Pagination } from "../Pagination";
import "../../styles.scss";

const meta: Meta<typeof TableList> = {
  title: "Components/TableList",
  component: TableList,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
O **TableList** renderiza uma tabela de dados orientada a colunas com cabeçalhos,
densidade de linha configurável e detecção automática de scroll horizontal.

A tabela é internamente transposta — os dados são fornecidos no formato
linha × coluna, mas renderizados coluna × linha para fixar a primeira coluna
com \`position: sticky\`.

> A prop **\`data\`** é uma matriz 2D de \`React.ReactNode\` —
> cada célula aceita qualquer conteúdo React: texto, Badge, ButtonIcon, Link, etc.

### Densidade
| size   | padding da célula      | uso recomendado                      |
|--------|------------------------|--------------------------------------|
| \`"sm"\` | xx-small / small       | Dashboards densos, muitas linhas     |
| \`"md"\` | small (todos os lados) | Uso geral, leitura confortável       |

### Scroll horizontal
Quando o conteúdo da tabela excede a largura do container, a classe
\`overflow-ativo\` é aplicada automaticamente via \`ResizeObserver\` —
a primeira coluna fica com \`box-shadow\` lateral para indicar o scroll.

### Quando usar
- Exibir registros estruturados: usuários, pedidos, produtos, logs
- Qualquer dado tabular que se beneficia de alinhamento consistente por coluna

### Boas práticas
- Garanta que \`columns.length\` seja igual ao comprimento de cada linha em \`data\`
- Use \`size="sm"\` para dashboards com muitas linhas; \`size="md"\` para leitura geral
- Envolva conteúdo de célula complexo em componentes nomeados — evite JSX anônimo inline
        `,
      },
    },
    design: {
       type: 'figma',
       url: 'https://www.figma.com/design/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?node-id=435-10082',
     },
  },
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md"] satisfies TableListSize[],
      description:
        "Densidade das células. `sm` = compacto. `md` = confortável.",
      table: { type: { summary: '"sm" | "md"' } },
    },
    columns: {
      control: "object",
      description: "Labels dos cabeçalhos das colunas.",
      table: { type: { summary: "string[]" } },
    },
    data: {
      control: false,
      description:
        "Dados da tabela como matriz 2D de `React.ReactNode`. Cada array interno representa uma linha.",
      table: { type: { summary: "React.ReactNode[][]" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TableList>;

// ─── Fixtures compartilhadas ──────────────────────────────────────────────────

const usuariosColumns = ["Nome", "Cargo", "Departamento", "Status"];

const usuariosData: React.ReactNode[][] = [
  ["Ana Souza", "Engenheira", "Produto", "Ativo"],
  ["Carlos Lima", "Designer", "Design", "Ativo"],
  ["Jane Doe", "Gerente de Produto", "Produto", "Férias"],
  ["Pedro Alves", "Engenheiro", "Plataforma", "Ativo"],
  ["Maria Clara", "Analista de Dados", "Analytics", "Ativo"],
];

// ─── 1. Tamanhos ──────────────────────────────────────────────────────────────

/**
 * Densidade padrão — padding confortável para leitura geral.
 * Use na maioria dos contextos.
 */
export const SizeMd: Story = {
  name: "Tamanho — md (padrão)",
  args: { columns: usuariosColumns, data: usuariosData, size: "md" },
};

/**
 * Densidade compacta — ideal para dashboards com muitas linhas
 * e espaço vertical limitado.
 */
export const SizeSm: Story = {
  name: "Tamanho — sm (compacto)",
  args: { columns: usuariosColumns, data: usuariosData, size: "sm" },
};

// ─── 2. Conteúdo rico nas células ─────────────────────────────────────────────

const badgeRows: React.ReactNode[][] = [
  ["Ana Souza", "Engenheira", <Badge label="Ativo" type="light" variant="success" />],
  ["Carlos Lima", "Designer", <Badge label="Férias" type="light" variant="warning" />],
  ["Jane Doe", "Gerente de Produto", <Badge label="Inativo" type="light" variant="default" />],
  ["Pedro Alves", "Engenheiro", <Badge label="Ativo" type="light" variant="success" />],
];

/**
 * Células com Badge — cada célula de status renderiza um Badge.
 * Demonstra que `data` aceita qualquer `ReactNode` por célula.
 */
export const WithBadges: Story = {
  name: "Células com Badge",
  args: {
    columns: ["Nome", "Cargo", "Status"],
    data: badgeRows,
    size: "sm",
  },
};

const actionRows: React.ReactNode[][] = [
  [
    "Ana Souza", "Engenheira",
    <Badge label="Ativo" type="light" variant="success" />,
    <div style={{ display: "flex", gap: "var(--s-spacing-nano)" }}>
      <Tooltip text="Editar" direction="top">
        <ButtonIcon icon="edit" appearance="plain" variant="secondary" size="sm" aria-label="Editar Ana Souza" />
      </Tooltip>
      <Tooltip text="Excluir" direction="top">
        <ButtonIcon icon="delete" appearance="plain" variant="warning" size="sm" aria-label="Excluir Ana Souza" />
      </Tooltip>
    </div>,
  ],
  [
    "Carlos Lima", "Designer",
    <Badge label="Férias" type="light" variant="warning" />,
    <div style={{ display: "flex", gap: "var(--s-spacing-nano)" }}>
      <Tooltip text="Editar" direction="top">
        <ButtonIcon icon="edit" appearance="plain" variant="secondary" size="sm" aria-label="Editar Carlos Lima" />
      </Tooltip>
      <Tooltip text="Excluir" direction="top">
        <ButtonIcon icon="delete" appearance="plain" variant="warning" size="sm" aria-label="Excluir Carlos Lima" />
      </Tooltip>
    </div>,
  ],
  [
    "Jane Doe", "Gerente de Produto",
    <Badge label="Inativo" type="light" variant="default" />,
    <div style={{ display: "flex", gap: "var(--s-spacing-nano)" }}>
      <Tooltip text="Editar" direction="top">
        <ButtonIcon icon="edit" appearance="plain" variant="secondary" size="sm" aria-label="Editar Jane Doe" />
      </Tooltip>
      <Tooltip text="Excluir" direction="top">
        <ButtonIcon icon="delete" appearance="plain" variant="warning" size="sm" aria-label="Excluir Jane Doe" />
      </Tooltip>
    </div>,
  ],
];

/**
 * Células com ações — última coluna contém ButtonIcons com Tooltip.
 * Padrão mais comum em tabelas administrativas.
 */
export const WithActions: Story = {
  name: "Células com ações",
  args: {
    columns: ["Nome", "Cargo", "Status", "Ações"],
    data: actionRows,
    size: "sm",
  },
};

// ─── 3. Scroll horizontal ─────────────────────────────────────────────────────

const wideColumns = ["Nome", "Cargo", "Departamento", "Localização", "Status", "Admissão", "E-mail"];
const wideData: React.ReactNode[][] = [
  ["Ana Souza", "Engenheira", "Produto", "São Paulo, SP", "Ativo", "Jan 2022", "ana@exemplo.com"],
  ["Carlos Lima", "Designer", "Design", "Rio de Janeiro, RJ", "Ativo", "Mar 2021", "carlos@exemplo.com"],
  ["Jane Doe", "Gerente", "Produto", "Belo Horizonte, MG", "Férias", "Jun 2020", "jane@exemplo.com"],
];

/**
 * Scroll horizontal — container estreito força overflow.
 * A primeira coluna fica fixada via `position: sticky` com sombra lateral
 * quando `overflow-ativo` é aplicado pelo `useOverflowDetection`.
 */
export const HorizontalScroll: Story = {
  name: "Scroll horizontal (overflow)",
  decorators: [
    (Story) => (
      <div style={{ width: "480px", overflow: "hidden" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    columns: wideColumns,
    data: wideData,
    size: "md",
  },
};

// ─── 4. Edge cases ────────────────────────────────────────────────────────────

/**
 * Coluna única — edge case que valida o layout com apenas uma coluna.
 * A coluna é fixada à esquerda via sticky sem sombra (sem overflow).
 */
export const SingleColumn: Story = {
  name: "Edge case — coluna única",
  args: {
    columns: ["Nome"],
    data: [["Ana Souza"], ["Carlos Lima"], ["Jane Doe"]],
    size: "md",
  },
};

/**
 * Linha única — valida que a borda superior da primeira linha aparece corretamente.
 */
export const SingleRow: Story = {
  name: "Edge case — linha única",
  args: {
    columns: usuariosColumns,
    data: [["Ana Souza", "Engenheira", "Produto", "Ativo"]],
    size: "md",
  },
};

// ─── 5. Contexto real ─────────────────────────────────────────────────────────

/**
 * Tabela de usuários com Badge de status e paginação no rodapé.
 * Demonstra o padrão mais completo de uso em dashboards administrativos.
 */
export const UserTable: Story = {
  name: "Contexto real — tabela de usuários com paginação",
  render: () => {
    const [page, setPage] = React.useState(1);

    const rows: React.ReactNode[][] = [
      ["Ana Souza", "Engenheira", <Badge label="Ativo" type="light" variant="success" />],
      ["Carlos Lima", "Designer", <Badge label="Ativo" type="light" variant="success" />],
      ["Jane Doe", "Gerente de Produto", <Badge label="Férias" type="light" variant="warning" />],
      ["Maria Silva", "QA", <Badge label="Ativo" type="light" variant="success" />],
      ["Pedro Santos", "Dev Backend", <Badge label="Ativo" type="light" variant="success" />],
      ["Lucas Oliveira", "UX Designer", <Badge label="Férias" type="light" variant="warning" />],
    ];

    const itemsPerPage = 3;

    const total = Math.ceil(rows.length / itemsPerPage);

    const paginatedRows = rows.slice(
      (page - 1) * itemsPerPage,
      page * itemsPerPage
    );

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        <TableList
          columns={["Nome", "Cargo", "Status"]}
          data={paginatedRows}
          size="sm"
        />

        <Pagination
          variant="leftLabel"
          label={`Página ${page} de ${total}`}
          disabledLeft={page === 1}
          disabledRight={page === total}
          onClickLeft={() => setPage((p) => Math.max(1, p - 1))}
          onClickRight={() => setPage((p) => Math.min(total, p + 1))}
        />
      </div>
    );
  },
};