import React from "react";
import { Checkbox } from "../../Checkbox";
import Skeleton from "../../Skeleton/Skeleton";
import { DataTableRowContent } from "./DataTableRowContent";
import { generateSkeletonRows } from "../utils/skeleton.utils";

interface DataTableBodyProps {
  withCheckbox: boolean;
  columnWidths: number[];
  columnKeys: string[];
  currentRows: Record<string, unknown>[];
  selectedRows: string[];
  skeleton: boolean;
  onRowSelection: (id: string, checked: boolean) => void;
}

/**
 * Corpo da tabela com as linhas de dados.
 * Em modo skeleton, exibe linhas fictícias para manter o layout.
 */

export const DataTableBody: React.FC<DataTableBodyProps> = ({
  currentRows,
  selectedRows,
  skeleton,
  onRowSelection,
  columnWidths,
  withCheckbox,
  columnKeys,
}) => {
  const rows = skeleton ? generateSkeletonRows(5, columnKeys) : currentRows;

  return (
    <div
      className="data-table-body-content"
      style={{ flexDirection: "column" }}
    >
      {rows.map((row, index) => {
        const rowId = skeleton
          ? `skeleton-${index}`
          : (row.id as string);

        return (
          <div key={rowId} className="data-table-body-content-row">
            <div style={{ display: "flex", flex: "1" }}>
              {withCheckbox && (
                <div className="data-table-body-content-checkbox">
                  {skeleton ? (
                    <Skeleton height="24px" width="24px" />
                  ) : (
                    <Checkbox
                      disabled={skeleton}
                      modelValue={selectedRows.includes(rowId)}
                      onUpdate={(checked) => onRowSelection(rowId, checked)}
                    />
                  )}
                </div>
              )}

              {columnKeys.map((key, colIndex) => (
                <div key={key} className="data-table-body-content-row">
                  <DataTableRowContent
                    skeleton={skeleton}
                    style={{ minWidth: columnWidths[colIndex] }}
                  >
                    {row[key] as React.ReactNode}
                  </DataTableRowContent>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};