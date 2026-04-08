import { useState, useEffect, useCallback, useRef } from "react";
import { DataTableProps, SortDirection } from "../DataTable.types";

interface UseDataTableOptions {
  data: DataTableProps["data"];
  rowsPerPage: number;
  columns: DataTableProps["columns"];
  onSelectedRowsChange: DataTableProps["onSelectedRowsChange"];
  onUpdateSelectedRows: DataTableProps["onUpdateSelectedRows"];
  onSort: DataTableProps["onSort"];
  onSearch: DataTableProps["onSearch"];
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
  onSelectedRowsChange,
  onUpdateSelectedRows,
  onSort,
  onSearch,
}: UseDataTableOptions) {
  const [currentPage, setCurrentPage] = useState(1);
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

  const indexedData = data.map((row) => {
    const stableKey = String(row.id ?? JSON.stringify(row));
    if (!rowIdMap.current.has(stableKey)) {
      rowIdMap.current.set(stableKey, String(idCounter.current++));
    }
    return {
      ...row,
      id: rowIdMap.current.get(stableKey)!,
    };
  });

  useEffect(() => {
    setLoadedPages(4);
    setCurrentPage(1);
  }, [data]);

  const totalPages = Math.ceil(indexedData.length / rowsPerPage);

  useEffect(() => {
    if (currentPage === loadedPages && loadedPages < totalPages) {
      setLoadedPages((prev) => Math.min(prev + 4, totalPages));
    }
  }, [currentPage, loadedPages, totalPages]);

  useEffect(() => {
    onSelectedRowsChangeRef.current?.(selectedRows);
  }, [selectedRows]);

  useEffect(() => {
    onUpdateSelectedRowsRef.current?.((ids) => setSelectedRows(ids));
  }, []);

  const handleSearch = useCallback(
    (query: string) => {
      setCurrentPage(1);
      onSearch?.(query);
    },
    [onSearch],
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