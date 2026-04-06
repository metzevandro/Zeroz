"use strict";

var jsxRuntime = require("react/jsx-runtime");
var EmptyState = require("./EmptyState-BwOewAIp.js");
var React = require("react");
var InputSearch = require("./InputSearch-D_yDg_jR.js");
var Icon = require("./Icon-BUoiqqF-.js");
var Skeleton = require("./Skeleton-CzoMYdQv.js");
var Checkbox = require("./Checkbox-BRo1-vUi.js");
var Pagination = require("./Pagination-BXch9eFJ.js");

/**
 * Header da DataTable.
 * Alterna entre a barra de busca (estado padrão)
 * e o painel de ações em bulk (quando há linhas selecionadas).
 *
 * Usa `onDebouncedChange` para capturar o valor atual sem flooding,
 * mas só dispara `onSearch` ao pressionar Enter.
 * Se o campo for limpo, dispara imediatamente com string vazia.
 */
const DataTableHeader = ({
  skeleton,
  onSearch,
  rowsSelected = 0,
  textRowsSelected,
  children,
}) => {
  const hasSelection = rowsSelected > 0;
  const selectionLabel = `${rowsSelected} ${textRowsSelected ?? ""}`.trim();
  const inputValueRef = React.useRef("");
  const handleDebouncedChange = (value) => {
    inputValueRef.current = value;
    if (value === "") onSearch("");
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(inputValueRef.current);
    }
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [
      jsxRuntime.jsxs("div", {
        className: `data-table-header-rows-selected ${hasSelection ? "fade-in" : "fade-out"}`,
        style: {
          visibility: hasSelection ? "visible" : "hidden",
          display: hasSelection ? "" : "none",
        },
        children: [
          jsxRuntime.jsx(
            "p",
            {
              className: "textRowsSelected",
              style: { height: "40px", alignItems: "center", display: "flex" },
              children: selectionLabel,
            },
            selectionLabel,
          ),
          jsxRuntime.jsx("div", {
            className: "data-table-header-rows-selected-buttons",
            children: children,
          }),
        ],
      }),
      jsxRuntime.jsx("div", {
        className: `data-table-header ${hasSelection ? "fade-out" : "fade-in"}`,
        style: {
          visibility: hasSelection ? "hidden" : "visible",
          display: hasSelection ? "none" : "",
        },
        children: jsxRuntime.jsx(InputSearch.InputSearch, {
          isSkeleton: skeleton,
          placeholder: "Procurar",
          onDebouncedChange: handleDebouncedChange,
          debounceMs: 0,
          onKeyDown: handleKeyDown,
        }),
      }),
    ],
  });
};

/**
 * Retorna o nome do ícone correspondente ao estado de ordenação.
 */
function getSortIcon(direction) {
  const iconMap = {
    asc: "arrow_downward",
    desc: "arrow_upward",
    default: "swap_vert",
  };
  return iconMap[direction];
}

/**
 * Linha de cabeçalho das colunas.
 * Cada célula emite o evento de sort ao ser clicada —
 * a ordenação efetiva é responsabilidade do consumidor.
 */
const DataTableRowHeader = ({
  skeleton,
  headers,
  sortStates,
  columnWidths,
  withCheckbox,
  allSelected,
  someSelected,
  onSort,
  onSelectAll,
}) => {
  return jsxRuntime.jsxs("div", {
    style: { display: "flex", flex: "1" },
    children: [
      withCheckbox &&
        jsxRuntime.jsx("div", {
          className: "data-table-body-header-checkbox",
          children: skeleton
            ? jsxRuntime.jsx(Skeleton.Skeleton, {
                height: "24px",
                width: "24px",
              })
            : jsxRuntime.jsx(Checkbox.Checkbox, {
                indeterminate: someSelected,
                modelValue: allSelected,
                onUpdate: onSelectAll,
              }),
        }),
      headers.map((header, index) =>
        jsxRuntime.jsx(
          "div",
          {
            className: `data-table-row-header ${skeleton ? "loading-skeleton" : ""} ${index === 0 ? "first" : ""}`,
            style: { minWidth: columnWidths[index] },
            onClick: () => onSort(index),
            children: skeleton
              ? jsxRuntime.jsx(Skeleton.Skeleton, {
                  height: "24px",
                  width: "80px",
                })
              : jsxRuntime.jsxs(jsxRuntime.Fragment, {
                  children: [
                    header,
                    jsxRuntime.jsx(Icon.Icon, {
                      icon: getSortIcon(sortStates[index]),
                      size: "sm",
                    }),
                  ],
                }),
          },
          header,
        ),
      ),
    ],
  });
};

/**
 * Célula individual de dados da tabela.
 * Exibe skeleton enquanto os dados estão carregando.
 */
const DataTableRowContent = ({ children, skeleton, style }) => {
  return jsxRuntime.jsx("div", {
    className: "data-table-row-content",
    style: style,
    children: skeleton
      ? jsxRuntime.jsx(Skeleton.Skeleton, { height: "24px", width: "80px" })
      : children,
  });
};

/**
 * Gera linhas de dados fictícios para o estado de skeleton.
 * Os valores são strings aleatórias apenas para preencher as células.
 */
function generateSkeletonRows(count, columnKeys) {
  return Array.from({ length: count }, (_, rowIndex) => ({
    id: `skeleton-${rowIndex}`,
    ...Object.fromEntries(
      columnKeys.map((key) => [
        key,
        Math.random().toString(36).substring(2, 8),
      ]),
    ),
  }));
}

/**
 * Corpo da tabela com as linhas de dados.
 * Em modo skeleton, exibe linhas fictícias para manter o layout.
 */
const DataTableBody = ({
  currentRows,
  selectedRows,
  skeleton,
  onRowSelection,
  columnWidths,
  withCheckbox,
  columnKeys,
}) => {
  const rows = skeleton ? generateSkeletonRows(5, columnKeys) : currentRows;
  return jsxRuntime.jsx("div", {
    className: "data-table-body-content",
    style: { flexDirection: "column" },
    children: rows.map((row, index) => {
      const rowId = skeleton ? `skeleton-${index}` : row.id;
      return jsxRuntime.jsx(
        "div",
        {
          className: "data-table-body-content-row",
          children: jsxRuntime.jsxs("div", {
            style: { display: "flex", flex: "1" },
            children: [
              withCheckbox &&
                jsxRuntime.jsx("div", {
                  className: "data-table-body-content-checkbox",
                  children: skeleton
                    ? jsxRuntime.jsx(Skeleton.Skeleton, {
                        height: "24px",
                        width: "24px",
                      })
                    : jsxRuntime.jsx(Checkbox.Checkbox, {
                        disabled: skeleton,
                        modelValue: selectedRows.includes(rowId),
                        onUpdate: (checked) => onRowSelection(rowId, checked),
                      }),
                }),
              columnKeys.map((key, colIndex) =>
                jsxRuntime.jsx(
                  "div",
                  {
                    className: "data-table-body-content-row",
                    children: jsxRuntime.jsx(DataTableRowContent, {
                      skeleton: skeleton,
                      style: { minWidth: columnWidths[colIndex] },
                      children: row[key],
                    }),
                  },
                  key,
                ),
              ),
            ],
          }),
        },
        rowId,
      );
    }),
  });
};

/**
 * Footer com controles de paginação.
 */
const DataTableFooter = ({
  currentPage,
  totalPages,
  disabledLeft,
  disabledRight,
  skeleton,
  onClickLeft,
  onClickRight,
}) => {
  const label = `Mostrando ${totalPages === 0 ? 0 : currentPage} de ${totalPages}`;
  return jsxRuntime.jsx("div", {
    className: "data-table-footer",
    children: jsxRuntime.jsx(Pagination.Pagination, {
      label: label,
      variant: "leftLabel",
      onClickLeft: onClickLeft,
      onClickRight: onClickRight,
      disabledLeft: disabledLeft,
      disabledRight: disabledRight,
      skeleton: skeleton,
    }),
  });
};

/**
 * Calcula a largura ideal de cada coluna baseado no conteúdo,
 * respeitando a largura mínima definida em cada `DataTableColumn`.
 *
 * A medição é feita via DOM (span temporário) para garantir precisão
 * com diferentes fontes e conteúdos.
 */
function useColumnWidths(columns, data) {
  const measureTextWidth = React.useCallback((text) => {
    const span = document.createElement("span");
    span.textContent = text;
    document.body.appendChild(span);
    const width = span.getBoundingClientRect().width;
    document.body.removeChild(span);
    return width;
  }, []);
  return React.useMemo(() => {
    return columns.map((column) => {
      const allCellValues = data.map((row) => String(row[column.key] ?? ""));
      const headerWidth = measureTextWidth(column.label);
      const maxCellWidth = Math.max(0, ...allCellValues.map(measureTextWidth));
      const calculated = Math.max(headerWidth, maxCellWidth) + 50;
      return Math.max(calculated, column.minWidth ?? 0);
    });
  }, [columns, data, measureTextWidth]);
}

/**
 * Detecta se o elemento referenciado tem conteúdo
 * horizontalmente maior que sua largura visível.
 * Usa `ResizeObserver` para reavaliação automática ao redimensionar.
 */
function useOverflowDetection() {
  const ref = React.useRef(null);
  const [isOverflowed, setIsOverflowed] = React.useState(false);
  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const check = () => {
      setIsOverflowed(element.scrollWidth > element.clientWidth);
    };
    const observer = new ResizeObserver(check);
    observer.observe(element);
    check();
    return () => observer.unobserve(element);
  }, []);
  return { ref, isOverflowed };
}

// useDataTable.ts
/**
 * Hook principal do DataTable.
 *
 * Responsabilidades:
 * - Enriquece os dados com IDs internos
 * - Gerencia paginação com carregamento progressivo
 * - Gerencia seleção de linhas (individual e total)
 * - Emite eventos de busca e ordenação para o consumidor externo
 *
 * Fora do escopo deste hook (responsabilidade do consumidor):
 * - Filtrar os dados com base em `onSearch`
 * - Ordenar os dados com base em `onSort`
 */
function useDataTable({
  data,
  rowsPerPage,
  columns,
  onSelectedRowsChange,
  onUpdateSelectedRows,
  onSort,
  onSearch,
}) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [loadedPages, setLoadedPages] = React.useState(4);
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [sortStates, setSortStates] = React.useState(() =>
    new Array(columns.length).fill("default"),
  );
  const rowIdMap = React.useRef(new Map());
  const idCounter = React.useRef(0);
  const indexedData = data.map((row) => {
    if (!rowIdMap.current.has(row)) {
      rowIdMap.current.set(row, String(idCounter.current++));
    }
    return {
      ...row,
      id: rowIdMap.current.get(row),
    };
  });
  React.useEffect(() => {
    setLoadedPages(4);
    setCurrentPage(1);
  }, [data]);
  const totalPages = Math.ceil(indexedData.length / rowsPerPage);
  React.useEffect(() => {
    if (currentPage === loadedPages && loadedPages < totalPages) {
      setLoadedPages((prev) => Math.min(prev + 4, totalPages));
    }
  }, [currentPage, loadedPages, totalPages]);
  React.useEffect(() => {
    onSelectedRowsChange?.(selectedRows);
  }, [selectedRows, onSelectedRowsChange]);
  React.useEffect(() => {
    onUpdateSelectedRows?.((ids) => setSelectedRows(ids));
  }, [onUpdateSelectedRows]);
  const handleSearch = React.useCallback(
    (query) => {
      setCurrentPage(1);
      onSearch?.(query);
    },
    [onSearch],
  );
  const handleSort = React.useCallback(
    (columnIndex) => {
      setSortStates((prev) => {
        const next = [...prev];
        const current = next[columnIndex];
        const cycle = ["default", "asc", "desc"];
        const nextDirection =
          cycle[(cycle.indexOf(current) + 1) % cycle.length];
        next[columnIndex] = nextDirection;
        onSort?.({ columnIndex, direction: nextDirection });
        return next;
      });
    },
    [onSort],
  );
  const visibleData = indexedData.slice(0, loadedPages * rowsPerPage);
  const currentRows = visibleData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );
  const allSelected =
    visibleData.length > 0 &&
    visibleData.every((row) => selectedRows.includes(row.id));
  const someSelected =
    visibleData.some((row) => selectedRows.includes(row.id)) && !allSelected;
  const handleSelectAll = React.useCallback(
    (checked) => {
      setSelectedRows(checked ? visibleData.map((row) => row.id) : []);
    },
    [visibleData],
  );
  const handleRowSelection = React.useCallback((id, checked) => {
    setSelectedRows((prev) =>
      checked ? [...prev, id] : prev.filter((rowId) => rowId !== id),
    );
  }, []);
  const handlePageLeft = React.useCallback(() => {
    setCurrentPage((p) => Math.max(p - 1, 1));
  }, []);
  const handlePageRight = React.useCallback(() => {
    setCurrentPage((p) => Math.min(p + 1, Math.min(totalPages, loadedPages)));
  }, [totalPages, loadedPages]);
  return {
    currentPage,
    currentRows,
    visibleData,
    totalPages,
    loadedPages,
    selectedRows,
    sortStates,
    allSelected,
    someSelected,
    handleSearch,
    handleSort,
    handleSelectAll,
    handleRowSelection,
    handlePageLeft,
    handlePageRight,
  };
}

/**
 * ## DataTable
 *
 * Tabela de dados com paginação, seleção de linhas e suporte a busca
 * e ordenação **server-side**.
 *
 * ### Estados de carregamento
 *
 * O componente distingue dois estados:
 *
 * - **`skeleton={true}` + `data=[]`** — primeiro carregamento, sem dados.
 *   Exibe linhas skeleton no lugar do conteúdo.
 *
 * - **`skeleton={true}` + `data=[...dadosAnteriores]`** — atualização após
 *   busca ou sort. Os dados anteriores permanecem visíveis com opacidade
 *   reduzida até a resposta chegar, evitando flicker.
 */
const DataTable = ({
  columns,
  data,
  skeleton,
  rowsPerPage = 4,
  withCheckbox = false,
  headerSelectedChildren,
  textRowsSelected,
  onSelectedRowsChange,
  onUpdateSelectedRows,
  onSort,
  onSearch,
}) => {
  const {
    currentPage,
    currentRows,
    totalPages,
    loadedPages,
    selectedRows,
    sortStates,
    allSelected,
    someSelected,
    handleSearch,
    handleSort,
    handleSelectAll,
    handleRowSelection,
    handlePageLeft,
    handlePageRight,
  } = useDataTable({
    data,
    rowsPerPage,
    columns,
    onSelectedRowsChange,
    onUpdateSelectedRows,
    onSort,
    onSearch,
  });
  const columnKeys = columns.map((col) => col.key);
  const columnLabels = columns.map((col) => col.label);
  const indexedData = data.map((row, i) => ({ ...row, id: String(i) }));
  const columnWidths = useColumnWidths(columns, indexedData);
  const { ref, isOverflowed } = useOverflowDetection();
  const isInitialLoading = skeleton && data.length === 0;
  const isRefreshing = skeleton && data.length > 0;
  const isEmpty = currentRows.length === 0 && !skeleton;
  return jsxRuntime.jsxs("div", {
    className: "data-table",
    children: [
      jsxRuntime.jsx(DataTableHeader, {
        skeleton: isInitialLoading,
        onSearch: handleSearch,
        rowsSelected: selectedRows.length,
        textRowsSelected: textRowsSelected,
        children: headerSelectedChildren,
      }),
      jsxRuntime.jsxs("div", {
        ref: ref,
        className: `data-table-body ${isOverflowed ? "overflowed" : ""}`,
        style: {
          height: rowsPerPage * 56.8 + 41.6,
          opacity: isRefreshing ? 0.5 : 1,
          pointerEvents: isRefreshing ? "none" : undefined,
          transition: "opacity 0.15s ease",
        },
        children: [
          jsxRuntime.jsx("div", {
            className: "data-table-body-header",
            children: jsxRuntime.jsx(DataTableRowHeader, {
              skeleton: isInitialLoading,
              headers: columnLabels,
              sortStates: sortStates,
              columnWidths: columnWidths,
              withCheckbox: withCheckbox,
              allSelected: allSelected,
              someSelected: someSelected,
              onSort: handleSort,
              onSelectAll: handleSelectAll,
            }),
          }),
          isEmpty
            ? jsxRuntime.jsx("div", {
                className: "data-table-body-empty",
                children: jsxRuntime.jsx(EmptyState.EmptyState, {
                  title: "Nenhum resultado encontrado",
                  description:
                    "Tente ajustar os termos de pesquisa para encontrar o que procura.",
                  icon: "search_off",
                }),
              })
            : jsxRuntime.jsx(DataTableBody, {
                withCheckbox: withCheckbox,
                columnWidths: columnWidths,
                columnKeys: columnKeys,
                currentRows: currentRows,
                selectedRows: selectedRows,
                skeleton: isInitialLoading,
                onRowSelection: handleRowSelection,
              }),
        ],
      }),
      jsxRuntime.jsx(DataTableFooter, {
        currentPage: currentPage,
        totalPages: totalPages,
        skeleton: isInitialLoading,
        onClickLeft: handlePageLeft,
        onClickRight: handlePageRight,
        disabledLeft: currentPage === 1 || currentRows.length === 0,
        disabledRight:
          currentPage === Math.min(totalPages, loadedPages) ||
          currentRows.length === 0,
      }),
    ],
  });
};
DataTable.displayName = "DataTable";

exports.DataTable = DataTable;
