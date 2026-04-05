import "./TableList.scss";
import React from "react";
import { TableListProps } from "./TableList.types";
import { useOverflowDetection } from "./hooks/useOverflowDetection";
import { transposeData } from "./utils/tableList.utils";
import { TableHeader } from "./subcomponents/TableHeader";
import { TableBody } from "./subcomponents/TableBody";

/**
 * `TableList` renders a column-oriented data table with header labels,
 * configurable cell density, and automatic horizontal scroll detection.
 *
 * When the table content overflows its container width, the `overflow-ativo`
 * class is applied — typically used in CSS to show a scroll shadow or indicator.
 *
 * Cell content accepts any `React.ReactNode`, so you can render icons, badges,
 * or custom components alongside plain text.
 *
 * @example
 * ```tsx
 * <TableList
 *   size="md"
 *   columns={["Name", "Role", "Status"]}
 *   data={[
 *     ["Alice", "Engineer", <Tag content="Active" variant="success" />],
 *     ["Bob",   "Designer", <Tag content="Away"   variant="warning" />],
 *   ]}
 * />
 * ```
 */
const TableList: React.FC<TableListProps> = ({ columns, data, size }) => {
  const { containerRef, isOverflowed } = useOverflowDetection();
  const transposedData = transposeData(columns, data);

  return (
    <div
      className={`table-list-root ${isOverflowed ? "overflow-ativo" : ""}`}
      ref={containerRef}
    >
      <div className="table">
        <TableHeader columns={columns} />
        <TableBody columns={transposedData} size={size} />
      </div>
    </div>
  );
};

export default TableList;
