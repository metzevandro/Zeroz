import React from "react";
import Icon from "../../Icon/Icon";
import Skeleton from "../../Skeleton/Skeleton";
import { Checkbox } from "../../Checkbox";
import { getSortIcon } from "../utils/sort.utils";
import type { SortDirection } from "../DataTable.types";

interface DataTableRowHeaderProps {
  skeleton: boolean;
  headers: string[];
  sortStates: SortDirection[];
  columnWidths: number[];
  withCheckbox: boolean;
  allSelected: boolean;
  someSelected: boolean;
  onSort: (index: number) => void;
  onSelectAll: (checked: boolean) => void;
  sortable?: boolean;
}

/**
 * Linha de cabeçalho das colunas.
 * Cada célula emite o evento de sort ao ser clicada —
 * a ordenação efetiva é responsabilidade do consumidor.
 */
export const DataTableRowHeader: React.FC<DataTableRowHeaderProps> = ({
  skeleton,
  headers,
  sortStates,
  columnWidths,
  withCheckbox,
  allSelected,
  someSelected,
  onSort,
  onSelectAll,
  sortable,
}) => {
  return (
    <div style={{ display: "flex", flex: "1" }}>
      {withCheckbox && (
        <div className="data-table-body-header-checkbox">
          {skeleton ? (
            <Skeleton height="24px" width="24px" />
          ) : (
            <Checkbox
              indeterminate={someSelected}
              modelValue={allSelected}
              onUpdate={onSelectAll}
            />
          )}
        </div>
      )}

      {headers.map((header, index) => {
        const rowClasses = [
          "data-table-row-header",
          skeleton && "loading-skeleton",
          index === 0 && "first",
          index === headers.length - 1 && "last",
          !sortable && "no-sort",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <div
            key={header}
            className={rowClasses}
            style={{ minWidth: columnWidths[index] }}
            onClick={() => onSort(index)}
          >
            {skeleton ? (
              <Skeleton height="24px" width="80px" />
            ) : (
              <>
                {header}
                <Icon icon={getSortIcon(sortStates[index])} size="sm" />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};
