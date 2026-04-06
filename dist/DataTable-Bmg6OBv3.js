import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { E as EmptyState } from "./EmptyState-DM0C-SUZ.js";
import { useRef, useCallback, useMemo, useState, useEffect } from "react";
import { I as InputSearch } from "./InputSearch-BXAiCXc5.js";
import { I as Icon } from "./Icon-93G3RH-i.js";
import { S as Skeleton } from "./Skeleton-CvObjom8.js";
import { C as Checkbox } from "./Checkbox-CYLfDHHd.js";
import { P as Pagination } from "./Pagination-Iif0t6it.js";

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
  const inputValueRef = useRef("");
  const handleDebouncedChange = (value) => {
    inputValueRef.current = value;
    if (value === "") onSearch("");
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(inputValueRef.current);
    }
  };
  return jsxs(Fragment, {
    children: [
      jsxs("div", {
        className: `data-table-header-rows-selected ${hasSelection ? "fade-in" : "fade-out"}`,
        style: {
          visibility: hasSelection ? "visible" : "hidden",
          display: hasSelection ? "" : "none",
        },
        children: [
          jsx(
            "p",
            {
              className: "textRowsSelected",
              style: { height: "40px", alignItems: "center", display: "flex" },
              children: selectionLabel,
            },
            selectionLabel,
          ),
          jsx("div", {
            className: "data-table-header-rows-selected-buttons",
            children: children,
          }),
        ],
      }),
      jsx("div", {
        className: `data-table-header ${hasSelection ? "fade-out" : "fade-in"}`,
        style: {
          visibility: hasSelection ? "hidden" : "visible",
          display: hasSelection ? "none" : "",
        },
        children: jsx(InputSearch, {
          placeholder: "Procurar",
          disabled: skeleton,
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
  return jsxs("div", {
    style: { display: "flex", flex: "1" },
    children: [
      withCheckbox &&
        jsx("div", {
          className: "data-table-body-header-checkbox",
          children: skeleton
            ? jsx(Skeleton, { height: "24", width: "24" })
            : jsx(Checkbox, {
                indeterminate: someSelected,
                modelValue: allSelected,
                onUpdate: onSelectAll,
              }),
        }),
      headers.map((header, index) =>
        jsx(
          "div",
          {
            className: `data-table-row-header ${skeleton ? "loading-skeleton" : ""} ${index === 0 ? "first" : ""}`,
            style: { minWidth: columnWidths[index] },
            onClick: () => onSort(index),
            children: skeleton
              ? jsx(Skeleton, { height: "24", width: "80" })
              : jsxs(Fragment, {
                  children: [
                    header,
                    jsx(Icon, {
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
  return jsx("div", {
    className: "data-table-row-content",
    style: style,
    children: skeleton
      ? jsx(Skeleton, { height: "24", width: "80" })
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
  return jsx("div", {
    className: "data-table-body-content",
    style: { flexDirection: "column" },
    children: rows.map((row) => {
      const rowId = row.id;
      return jsx(
        "div",
        {
          className: "data-table-body-content-row",
          children: jsxs("div", {
            style: { display: "flex", flex: "1" },
            children: [
              withCheckbox &&
                jsx("div", {
                  className: "data-table-body-content-checkbox",
                  children: skeleton
                    ? jsx(Skeleton, { height: "24", width: "24" })
                    : jsx(Checkbox, {
                        disabled: skeleton,
                        modelValue: selectedRows.includes(rowId),
                        onUpdate: (checked) => onRowSelection(rowId, checked),
                      }),
                }),
              columnKeys.map((key, index) =>
                jsx(
                  "div",
                  {
                    className: "data-table-body-content-row",
                    children: jsx(DataTableRowContent, {
                      skeleton: skeleton,
                      style: { minWidth: columnWidths[index] },
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
  return jsx("div", {
    className: "data-table-footer",
    children: jsx(Pagination, {
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
  const measureTextWidth = useCallback((text) => {
    const span = document.createElement("span");
    span.textContent = text;
    document.body.appendChild(span);
    const width = span.getBoundingClientRect().width;
    document.body.removeChild(span);
    return width;
  }, []);
  return useMemo(() => {
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
  const ref = useRef(null);
  const [isOverflowed, setIsOverflowed] = useState(false);
  useEffect(() => {
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
  const [currentPage, setCurrentPage] = useState(1);
  const [loadedPages, setLoadedPages] = useState(4);
  const [selectedRows, setSelectedRows] = useState([]);
  const [sortStates, setSortStates] = useState(() =>
    new Array(columns.length).fill("default"),
  );
  // Enriquece os dados externos com IDs internos para seleção
  const indexedData = data.map((row, index) => ({
    ...row,
    id: String(index),
  }));
  // Reset de paginação quando os dados externos mudam
  useEffect(() => {
    setLoadedPages(4);
    setCurrentPage(1);
  }, [data]);
  // Carregamento progressivo de páginas
  const totalPages = Math.ceil(indexedData.length / rowsPerPage);
  useEffect(() => {
    if (currentPage === loadedPages && loadedPages < totalPages) {
      setLoadedPages((prev) => Math.min(prev + 4, totalPages));
    }
  }, [currentPage, loadedPages, totalPages]);
  // Notifica o consumidor quando a seleção muda
  useEffect(() => {
    onSelectedRowsChange?.(selectedRows);
  }, [selectedRows, onSelectedRowsChange]);
  // Expõe o setter de seleção para controle externo
  useEffect(() => {
    onUpdateSelectedRows?.((ids) => setSelectedRows(ids));
  }, [onUpdateSelectedRows]);
  const handleSearch = useCallback(
    (query) => {
      setCurrentPage(1);
      onSearch?.(query);
    },
    [onSearch],
  );
  const handleSort = useCallback(
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
  const handleSelectAll = useCallback(
    (checked) => {
      setSelectedRows(checked ? visibleData.map((row) => row.id) : []);
    },
    [visibleData],
  );
  const handleRowSelection = useCallback((id, checked) => {
    setSelectedRows((prev) =>
      checked ? [...prev, id] : prev.filter((rowId) => rowId !== id),
    );
  }, []);
  const handlePageLeft = useCallback(() => {
    setCurrentPage((p) => Math.max(p - 1, 1));
  }, []);
  const handlePageRight = useCallback(() => {
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
  return jsxs("div", {
    className: "data-table",
    children: [
      jsx(DataTableHeader, {
        skeleton: isInitialLoading,
        onSearch: handleSearch,
        rowsSelected: selectedRows.length,
        textRowsSelected: textRowsSelected,
        children: headerSelectedChildren,
      }),
      jsxs("div", {
        ref: ref,
        className: `data-table-body ${isOverflowed ? "overflowed" : ""}`,
        style: {
          height: rowsPerPage * 56.8 + 41.6,
          opacity: isRefreshing ? 0.5 : 1,
          pointerEvents: isRefreshing ? "none" : undefined,
          transition: "opacity 0.15s ease",
        },
        children: [
          jsx("div", {
            className: "data-table-body-header",
            children: jsx(DataTableRowHeader, {
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
            ? jsx("div", {
                className: "data-table-body-empty",
                children: jsx(EmptyState, {
                  title: "Nenhum resultado encontrado",
                  description:
                    "Tente ajustar os termos de pesquisa para encontrar o que procura.",
                  icon: "search_off",
                }),
              })
            : jsx(DataTableBody, {
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
      jsx(DataTableFooter, {
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

export { DataTable as D };
