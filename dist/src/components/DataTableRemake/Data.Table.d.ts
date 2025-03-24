import React from "react";
import "./DataTable.scss";
interface DataTableProps {
  columns: string[];
  data: string[][];
  skeleton: boolean;
  rowsPerPage?: number;
  withCheckbox?: boolean;
}
export declare const DataTable: (props: DataTableProps) => React.JSX.Element;
export {};
