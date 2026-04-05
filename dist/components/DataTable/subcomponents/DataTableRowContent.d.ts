import React from "react";
interface DataTableRowContentProps {
    children: React.ReactNode;
    skeleton: boolean;
    style?: React.CSSProperties;
}
/**
 * Célula individual de dados da tabela.
 * Exibe skeleton enquanto os dados estão carregando.
 */
export declare const DataTableRowContent: React.FC<DataTableRowContentProps>;
export {};
