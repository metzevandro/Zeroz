import React from "react";

interface TableHeaderProps {
  columns: string[];
}

/**
 * Renders the table header row with column labels.
 */
export function TableHeader({ columns }: TableHeaderProps) {
  return (
    <div className="table-container">
      {columns.map((column, index) => (
        <div className="th" key={index}>
          {column}
        </div>
      ))}
    </div>
  );
}
