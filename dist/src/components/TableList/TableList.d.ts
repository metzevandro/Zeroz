import React from "react";
import "./TableList.scss";
interface TableListProps {
  columns: string[];
  data: any[][];
  size: "sm" | "md";
}
declare const TableList: React.FC<TableListProps>;
export default TableList;
