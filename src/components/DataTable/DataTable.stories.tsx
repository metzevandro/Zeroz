import type { Meta, StoryObj } from "@storybook/react";
import { useState, useRef } from "react";
import { DataTable } from "./index";
import type { SortState, DataTableColumn } from "./index";
import Button from "../Button/Button";
import "../../styles.scss";

const DEFAULT_COLUMNS: DataTableColumn[] = [
  { key: "name", label: "Nome", minWidth: 160 },
  { key: "email", label: "E-mail", minWidth: 220 },
  { key: "role", label: "Cargo", minWidth: 140 },
  { key: "department", label: "Área", minWidth: 140 },
  { key: "status", label: "Status", minWidth: 100 },
];

const ALL_ROWS = [
  {
    name: "Ana Souza",
    email: "ana@empresa.com",
    role: "Engenheira",
    department: "Produto",
    status: "Ativo",
  },
  {
    name: "Bruno Lima",
    email: "bruno@empresa.com",
    role: "Designer",
    department: "Design",
    status: "Ativo",
  },
  {
    name: "Carla Mendes",
    email: "carla@empresa.com",
    role: "PO",
    department: "Produto",
    status: "Inativo",
  },
  {
    name: "Diego Faria",
    email: "diego@empresa.com",
    role: "Engenheiro",
    department: "Plataforma",
    status: "Ativo",
  },
  {
    name: "Elena Castro",
    email: "elena@empresa.com",
    role: "Data Scientist",
    department: "Dados",
    status: "Ativo",
  },
  {
    name: "Felipe Rocha",
    email: "felipe@empresa.com",
    role: "SRE",
    department: "Plataforma",
    status: "Inativo",
  },
  {
    name: "Gabi Torres",
    email: "gabi@empresa.com",
    role: "UX Writer",
    department: "Design",
    status: "Ativo",
  },
  {
    name: "Hugo Martins",
    email: "hugo@empresa.com",
    role: "Engenheiro",
    department: "Backend",
    status: "Ativo",
  },
  {
    name: "Íris Nunes",
    email: "iris@empresa.com",
    role: "QA",
    department: "Qualidade",
    status: "Ativo",
  },
  {
    name: "João Pires",
    email: "joao@empresa.com",
    role: "DevOps",
    department: "Plataforma",
    status: "Inativo",
  },
  {
    name: "Karen Alves",
    email: "karen@empresa.com",
    role: "Engenheira",
    department: "Frontend",
    status: "Ativo",
  },
  {
    name: "Lucas Barros",
    email: "lucas@empresa.com",
    role: "Product Analyst",
    department: "Produto",
    status: "Ativo",
  },
];

const meta: Meta<typeof DataTable> = {
  title: "Components/DataTable",
  component: DataTable,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Tabela de dados com paginação, seleção de linhas e suporte a busca e ordenação **server-side**.

### Modelo de busca e ordenação

O componente **não filtra nem ordena os dados internamente**.
Ele emite \`onSearch(query)\` e \`onSort({ columnIndex, direction })\` para que o
consumidor aplique essas operações via API ou estado local.

\`\`\`tsx
const [query, setQuery] = useState("");
const [sort, setSort] = useState<SortState | null>(null);

// Aplique query e sort na sua chamada de API
const { data, isLoading } = useMyApi({ query, sort });

<DataTable
  columns={columns}
  data={data}
  skeleton={isLoading}
  onSearch={setQuery}
  onSort={setSort}
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    columns: {
      control: false,
      description:
        "Definição das colunas. Cada item possui `key` (campo no objeto de dados), `label` (cabeçalho) e `minWidth` opcional.",
    },
    data: {
      control: false,
      description:
        "Array de objetos com campos correspondentes às `key`s das colunas.",
    },
    skeleton: {
      control: "boolean",
      description: "Exibe o estado de carregamento skeleton.",
    },
    rowsPerPage: {
      control: { type: "number", min: 1, max: 20 },
      description: "Número de linhas por página.",
    },
    withCheckbox: {
      control: "boolean",
      description: "Exibe checkboxes para seleção de linhas.",
    },
    textRowsSelected: {
      control: "text",
      description: "Sufixo do contador de linhas selecionadas.",
    },
    onSearch: {
      control: false,
      description:
        "Callback disparado ao digitar na busca. A filtragem é responsabilidade do consumidor.",
    },
    onSort: {
      control: false,
      description:
        "Callback disparado ao clicar em um cabeçalho de coluna. A ordenação é responsabilidade do consumidor.",
    },
    onSelectedRowsChange: {
      control: false,
      description: "Callback disparado quando a seleção de linhas muda.",
    },
    onUpdateSelectedRows: {
      control: false,
      description: "Expõe uma função para atualizar a seleção externamente.",
    },
    headerSelectedChildren: {
      control: false,
      description:
        "ReactNode exibido na barra de ações quando há linhas selecionadas.",
    },
  },
  args: {
    columns: DEFAULT_COLUMNS,
    data: ALL_ROWS,
    skeleton: false,
    rowsPerPage: 4,
    withCheckbox: false,
    textRowsSelected: "itens selecionados",
  },
};

export default meta;
type Story = StoryObj<typeof DataTable>;

/**
 * Estado padrão com dados estáticos.
 * Navegue pelas páginas usando os controles de paginação.
 */
export const Default: Story = {};

/**
 * Estado de carregamento — exibe linhas skeleton enquanto os dados chegam.
 */
export const Loading: Story = {
  args: {
    skeleton: true,
    data: [],
  },
};

/**
 * Tabela sem dados após busca sem resultados.
 */
export const Empty: Story = {
  args: {
    data: [],
    skeleton: false,
  },
};

/**
 * Demonstração do `onSearch` server-side.
 * O componente emite o valor digitado; a filtragem é feita localmente
 * neste exemplo para simular uma resposta de API.
 */
export const WithServerSideSearch: Story = {
  render: (args) => {
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const filtered = ALL_ROWS.filter((row) =>
      Object.values(row).some((val) =>
        String(val).toLowerCase().includes(query.toLowerCase()),
      ),
    );

    const handleSearch = (value: string) => {
      setIsLoading(true);
      setTimeout(() => {
        setQuery(value);
        setIsLoading(false);
      }, 600);
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <p style={{ fontSize: 12, color: "#666" }}>
          Query atual: <strong>"{query}"</strong> — {filtered.length}{" "}
          resultado(s)
        </p>
        <DataTable
          {...args}
          data={filtered}
          skeleton={isLoading}
          onSearch={handleSearch}
        />
      </div>
    );
  },
};

/**
 * Demonstração do `onSort` server-side.
 * O componente emite `{ columnIndex, direction }`;
 * a ordenação é aplicada localmente para simular uma resposta de API.
 */
export const WithServerSideSort: Story = {
  render: (args) => {
    const [sortState, setSortState] = useState<SortState | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const sorted = (() => {
      if (!sortState || sortState.direction === "default") return ALL_ROWS;

      const key = DEFAULT_COLUMNS[sortState.columnIndex]?.key;
      if (!key) return ALL_ROWS;

      return [...ALL_ROWS].sort((a, b) => {
        const aVal = String(a[key as keyof typeof a]);
        const bVal = String(b[key as keyof typeof b]);
        return sortState.direction === "asc"
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      });
    })();

    const handleSort = (sort: SortState) => {
      setIsLoading(true);
      setTimeout(() => {
        setSortState(sort);
        setIsLoading(false);
      }, 400);
    };

    const directionLabel: Record<string, string> = {
      asc: "crescente",
      desc: "decrescente",
      default: "padrão",
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <p style={{ fontSize: 12, color: "#666" }}>
          {sortState
            ? `Ordenando por coluna ${sortState.columnIndex} (${DEFAULT_COLUMNS[sortState.columnIndex]?.label}) — ${directionLabel[sortState.direction]}`
            : "Clique em um cabeçalho de coluna para ordenar"}
        </p>
        <DataTable
          {...args}
          data={sorted}
          skeleton={isLoading}
          onSort={handleSort}
        />
      </div>
    );
  },
};

/**
 * Busca e sort server-side combinados — o cenário mais comum em produção.
 */
export const WithSearchAndSort: Story = {
  render: (args) => {
    const [query, setQuery] = useState("");
    const [sortState, setSortState] = useState<SortState | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const processedData = (() => {
      let result = ALL_ROWS.filter((row) =>
        Object.values(row).some((val) =>
          String(val).toLowerCase().includes(query.toLowerCase()),
        ),
      );

      if (sortState && sortState.direction !== "default") {
        const key = DEFAULT_COLUMNS[sortState.columnIndex]?.key;
        if (key) {
          result = [...result].sort((a, b) => {
            const aVal = String(a[key as keyof typeof a]);
            const bVal = String(b[key as keyof typeof b]);
            return sortState.direction === "asc"
              ? aVal.localeCompare(bVal)
              : bVal.localeCompare(aVal);
          });
        }
      }
      return result;
    })();

    const simulateApiCall = (fn: () => void) => {
      setIsLoading(true);
      setTimeout(() => {
        fn();
        setIsLoading(false);
      }, 500);
    };

    return (
      <DataTable
        {...args}
        data={processedData}
        skeleton={isLoading}
        onSearch={(value) => simulateApiCall(() => setQuery(value))}
        onSort={(sort) => simulateApiCall(() => setSortState(sort))}
      />
    );
  },
};

/**
 * Seleção de linhas habilitada com ações em bulk no header.
 */
export const WithCheckboxAndBulkActions: Story = {
  args: {
    withCheckbox: true,
    textRowsSelected: "itens selecionados",
    headerSelectedChildren: (
      <>
        <Button
          size="md"
          variant="secondary"
          onClick={() => alert("Exportar selecionados")}
        >
          Exportar
        </Button>
        <Button
          size="md"
          variant="primary"
          onClick={() => alert("Excluir selecionados")}
        >
          Excluir
        </Button>
      </>
    ),
  },
  render: (args) => {
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <p style={{ fontSize: 12, color: "#666" }}>
          IDs selecionados:{" "}
          <strong>[{selectedIds.join(", ") || "nenhum"}]</strong>
        </p>
        <DataTable {...args} onSelectedRowsChange={setSelectedIds} />
      </div>
    );
  },
};

/**
 * Controle externo da seleção via `onUpdateSelectedRows`.
 * Útil para selecionar linhas programaticamente (ex: após uma ação de API).
 */
export const WithExternalSelectionControl: Story = {
  args: {
    withCheckbox: true,
    textRowsSelected: "itens selecionados",
  },
  render: (args) => {
    const updaterRef = useRef<((ids: string[]) => void) | null>(null);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", gap: 8 }}>
          <Button
            size="md"
            variant="secondary"
            onClick={() => updaterRef.current?.(["0", "1", "2"])}
          >
            Selecionar primeiros 3
          </Button>
          <Button
            size="md"
            variant="secondary"
            onClick={() => updaterRef.current?.([])}
          >
            Limpar seleção
          </Button>
        </div>
        <DataTable
          {...args}
          onUpdateSelectedRows={(updater) => {
            updaterRef.current = updater;
          }}
        />
      </div>
    );
  },
};

/**
 * Tabela com maior número de linhas por página para visualização densa.
 */
export const DenseTable: Story = {
  args: {
    rowsPerPage: 8,
  },
};

/**
 * Combinação completa: search, sort, checkbox, bulk actions e controle externo.
 * Representa o cenário mais completo de uso em produção.
 */
export const FullExample: Story = {
  render: () => {
    const [query, setQuery] = useState("");
    const [sortState, setSortState] = useState<SortState | null>(null);
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const updaterRef = useRef<((ids: string[]) => void) | null>(null);

    const processedData = (() => {
      let result = ALL_ROWS.filter((row) =>
        Object.values(row).some((val) =>
          String(val).toLowerCase().includes(query.toLowerCase()),
        ),
      );
      if (sortState && sortState.direction !== "default") {
        const key = DEFAULT_COLUMNS[sortState.columnIndex]?.key;
        if (key) {
          result = [...result].sort((a, b) => {
            const aVal = String(a[key as keyof typeof a]);
            const bVal = String(b[key as keyof typeof b]);
            return sortState.direction === "asc"
              ? aVal.localeCompare(bVal)
              : bVal.localeCompare(aVal);
          });
        }
      }
      return result;
    })();

    const simulate = (fn: () => void) => {
      setIsLoading(true);
      setTimeout(() => {
        fn();
        setIsLoading(false);
      }, 500);
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", gap: 8 }}>
          <Button
            size="md"
            variant="secondary"
            onClick={() => updaterRef.current?.([])}
          >
            Limpar seleção
          </Button>
          <Button
            size="md"
            variant="secondary"
            onClick={() => updaterRef.current?.(["0", "1", "2", "3"])}
          >
            Selecionar primeiros 4
          </Button>
        </div>

        {selectedIds.length > 0 && (
          <p style={{ fontSize: 12, color: "#666" }}>
            Selecionados: <strong>[{selectedIds.join(", ")}]</strong>
          </p>
        )}

        <DataTable
          columns={DEFAULT_COLUMNS}
          data={processedData}
          skeleton={isLoading}
          rowsPerPage={4}
          withCheckbox
          textRowsSelected="itens selecionados"
          onSearch={(value) => simulate(() => setQuery(value))}
          onSort={(sort) => simulate(() => setSortState(sort))}
          onSelectedRowsChange={setSelectedIds}
          onUpdateSelectedRows={(updater) => {
            updaterRef.current = updater;
          }}
          headerSelectedChildren={
            <>
              <Button
                size="md"
                variant="secondary"
                onClick={() => alert("Exportar")}
              >
                Exportar
              </Button>
              <Button
                size="md"
                variant="primary"
                onClick={() => alert("Excluir")}
              >
                Excluir
              </Button>
            </>
          }
        />
      </div>
    );
  },
};
