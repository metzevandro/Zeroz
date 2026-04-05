import React from "react";
interface DataTableBodyProps {
    withCheckbox: boolean;
    columnWidths: number[];
    columnKeys: string[];
    currentRows: Record<string, unknown>[];
    selectedRows: string[];
    skeleton: boolean;
    onRowSelection: (id: string, checked: boolean) => void;
}
/**
 * Corpo da tabela com as linhas de dados.
 * Em modo skeleton, exibe linhas fictícias para manter o layout.
 */
export declare const DataTableBody: React.FC<DataTableBodyProps>;
export {};
