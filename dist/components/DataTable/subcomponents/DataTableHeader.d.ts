import React from "react";
interface DataTableHeaderProps {
    skeleton: boolean;
    onSearch: (query: string) => void;
    rowsSelected: number;
    textRowsSelected?: string;
    children?: React.ReactNode;
}
/**
 * Header da DataTable.
 * Alterna entre a barra de busca (estado padrão)
 * e o painel de ações em bulk (quando há linhas selecionadas).
 *
 * Usa `onDebouncedChange` para capturar o valor atual sem flooding,
 * mas só dispara `onSearch` ao pressionar Enter.
 * Se o campo for limpo, dispara imediatamente com string vazia.
 */
export declare const DataTableHeader: React.FC<DataTableHeaderProps>;
export {};
