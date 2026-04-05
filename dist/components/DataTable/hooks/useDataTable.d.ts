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
export declare function useDataTable({ data, rowsPerPage, columns, onSelectedRowsChange, onUpdateSelectedRows, onSort, onSearch, }: UseDataTableOptions): {
    currentPage: number;
    currentRows: {
        id: string;
    }[];
    visibleData: {
        id: string;
    }[];
    totalPages: number;
    loadedPages: number;
    selectedRows: string[];
    sortStates: SortDirection[];
    allSelected: boolean;
    someSelected: boolean;
    handleSearch: (query: string) => void;
    handleSort: (columnIndex: number) => void;
    handleSelectAll: (checked: boolean) => void;
    handleRowSelection: (id: string, checked: boolean) => void;
    handlePageLeft: () => void;
    handlePageRight: () => void;
};
export {};
