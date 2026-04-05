import React from "react";
interface DataTableFooterProps {
    currentPage: number;
    totalPages: number;
    disabledLeft: boolean;
    disabledRight: boolean;
    skeleton: boolean;
    onClickLeft: () => void;
    onClickRight: () => void;
}
/**
 * Footer com controles de paginação.
 */
export declare const DataTableFooter: React.FC<DataTableFooterProps>;
export {};
