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
export function TableBody({ columns, size }: TableBodyProps) {
  return (
    <div className="table-container">
      {columns.map((column, colIndex) => (
        <div key={colIndex} className="table-column">
          {column.map((cell, cellIndex) => (
            <div className={`td ${size} border`} key={cellIndex}>
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
