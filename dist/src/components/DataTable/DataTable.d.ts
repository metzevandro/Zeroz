import React from "react";
import "./DataTable.scss";
interface DataTableProps {
    columns: string[];
    data: any[];
    skeleton: boolean;
    rowsPerPage?: number;
    withCheckbox?: boolean;
    headerSelectedChildren?: React.ReactNode;
    textRowsSelected?: string;
    onSelectedRowsChange?: (selectedRows: string[]) => void;
}
export declare const DataTable: (props: DataTableProps) => React.JSX.Element;
export default DataTable;
