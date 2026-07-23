import { useState, useEffect, useCallback, useRef } from "react";
import { DataTableProps, SortDirection } from "../DataTable.types";

interface UseDataTableOptions {
  data: DataTableProps["data"];
  rowsPerPage: number;
  columns: DataTableProps["columns"];
  skeleton?: boolean;
  onSelectedRowsChange: DataTableProps["onSelectedRowsChange"];
  onUpdateSelectedRows: DataTableProps["onUpdateSelectedRows"];
  onSort: DataTableProps["onSort"];
  onSearch: DataTableProps["onSearch"];
  page?: DataTableProps["page"];
  totalItems?: DataTableProps["totalItems"];
  onPageChange?: DataTableProps["onPageChange"];
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

export function useDataTable({
  data,
  rowsPerPage,
  columns,
  skeleton,
  onSelectedRowsChange,
  onUpdateSelectedRows,
  onSort,
  onSearch,
  page: controlledPage,
  totalItems,
  onPageChange,
}: UseDataTableOptions) {
  const isControlled =
    controlledPage !== undefined &&
    totalItems !== undefined &&
    onPageChange !== undefined;

  const [internalPage, setInternalPage] = useState(1);
  const [loadedPages, setLoadedPages] = useState(4);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [sortStates, setSortStates] = useState<SortDirection[]>(() =>
    new Array(columns.length).fill("default"),
  );

  const rowIdMap = useRef(new Map<string, string>());
  const idCounter = useRef(0);

  const onSelectedRowsChangeRef = useRef(onSelectedRowsChange);
  useEffect(() => {
    onSelectedRowsChangeRef.current = onSelectedRowsChange;
  }, [onSelectedRowsChange]);

  const onUpdateSelectedRowsRef = useRef(onUpdateSelectedRows);
  useEffect(() => {
    onUpdateSelectedRowsRef.current = onUpdateSelectedRows;
  }, [onUpdateSelectedRows]);

  const currentPage = isControlled ? controlledPage! : internalPage;

  const indexedData = data.map((row, i) => {
    if (row.id !== undefined && row.id !== null) {
      return { ...row, id: String(row.id) };
    }

    const stableKey = JSON.stringify(row);
    if (!rowIdMap.current.has(stableKey)) {
      rowIdMap.current.set(stableKey, `__synthetic-${idCounter.current++}`);
    }
    return {
      ...row,
      id: rowIdMap.current.get(stableKey)!,
    };
  });

  useEffect(() => {
    if (!isControlled) {
      setLoadedPages(4);
      setInternalPage(1);
    }

    if (skeleton) return;

    setSelectedRows((prev) => {
      const currentIds = new Set(indexedData.map((row) => row.id as string));
      const filtered = prev.filter((id) => currentIds.has(id));
      return filtered.length === prev.length ? prev : filtered;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, skeleton, isControlled]);

  const totalPages = isControlled
    ? Math.max(1, Math.ceil((totalItems ?? 0) / rowsPerPage))
    : Math.ceil(indexedData.length / rowsPerPage);

  useEffect(() => {
    if (isControlled) return;
    if (currentPage === loadedPages && loadedPages < totalPages) {
      setLoadedPages((prev) => Math.min(prev + 4, totalPages));
    }
  }, [currentPage, loadedPages, totalPages, isControlled]);

  useEffect(() => {
    onSelectedRowsChangeRef.current?.(selectedRows);
  }, [selectedRows]);

  useEffect(() => {
    onUpdateSelectedRowsRef.current?.((ids) => setSelectedRows(ids));
  }, []);

  const handleSearch = useCallback(
    (query: string) => {
      if (isControlled) {
        onPageChange?.(1);
      } else {
        setInternalPage(1);
      }
      onSearch?.(query);
    },
    [onSearch, isControlled, onPageChange],
  );

  const handleSort = useCallback(
    (columnIndex: number) => {
      setSortStates((prev) => {
        const next = [...prev];
        const current = next[columnIndex];
        const cycle: SortDirection[] = ["default", "asc", "desc"];
        const nextDirection =
          cycle[(cycle.indexOf(current) + 1) % cycle.length];
        next[columnIndex] = nextDirection;
        onSort?.({ columnIndex, direction: nextDirection });
        return next;
      });
      if (isControlled) {
        onPageChange?.(1);
      } else {
        setInternalPage(1);
      }
    },
    [onSort, isControlled, onPageChange],
  );

  const visibleData = isControlled
    ? indexedData
    : indexedData.slice(0, loadedPages * rowsPerPage);
  const currentRows = isControlled
    ? visibleData
    : visibleData.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage,
      );

  const allSelected =
    visibleData.length > 0 &&
    visibleData.every((row) => selectedRows.includes(row.id as string));

  const someSelected =
    visibleData.some((row) => selectedRows.includes(row.id as string)) &&
    !allSelected;

  const handleSelectAll = useCallback(
    (checked: boolean) => {
      setSelectedRows(
        checked ? visibleData.map((row) => row.id as string) : [],
      );
    },
    [visibleData],
  );

  const handleRowSelection = useCallback((id: string, checked: boolean) => {
    setSelectedRows((prev) =>
      checked ? [...prev, id] : prev.filter((rowId) => rowId !== id),
    );
  }, []);

  const handlePageLeft = useCallback(() => {
    if (isControlled) {
      onPageChange?.(Math.max(currentPage - 1, 1));
    } else {
      setInternalPage((p) => Math.max(p - 1, 1));
    }
  }, [isControlled, onPageChange, currentPage]);

  const handlePageRight = useCallback(() => {
    if (isControlled) {
      onPageChange?.(Math.min(currentPage + 1, totalPages));
    } else {
      setInternalPage((p) =>
        Math.min(p + 1, Math.min(totalPages, loadedPages)),
      );
    }
  }, [isControlled, onPageChange, currentPage, totalPages, loadedPages]);

  return {
    currentPage,
    currentRows,
    visibleData,
    totalPages,
    loadedPages,
    isControlled,
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