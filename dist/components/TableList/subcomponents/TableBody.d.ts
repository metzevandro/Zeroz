import React from "react";
import { TableListSize } from "../TableList.types";
interface TableBodyProps {
    /** Column-major data (already transposed). */
    columns: React.ReactNode[][];
    size: TableListSize;
}
/**
 * Renders the table body as a set of column divs,
 * each containing the cells for that column.
 */
export declare function TableBody({ columns, size }: TableBodyProps): import("react/jsx-runtime").JSX.Element;
export {};
