import React from "react";
import type { SortDirection } from "../DataTable.types";
interface DataTableRowHeaderProps {
    skeleton: boolean;
    headers: string[];
    sortStates: SortDirection[];
    columnWidths: number[];
    withCheckbox: boolean;
    allSelected: boolean;
    someSelected: boolean;
    onSort: (index: number) => void;
    onSelectAll: (checked: boolean) => void;
}
/**
 * Linha de cabeçalho das colunas.
 * Cada célula emite o evento de sort ao ser clicada —
 * a ordenação efetiva é responsabilidade do consumidor.
 */
export declare const DataTableRowHeader: React.FC<DataTableRowHeaderProps>;
export {};
