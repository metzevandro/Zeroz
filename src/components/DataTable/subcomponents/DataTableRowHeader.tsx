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
}) => {
  return (
    <div style={{ display: "flex", flex: "1" }}>
      {withCheckbox && (
        <div className="data-table-body-header-checkbox">
          {skeleton ? (
            <Skeleton height="24" width="24" />
          ) : (
            <Checkbox
              indeterminate={someSelected}
              modelValue={allSelected}
              onUpdate={onSelectAll}
            />
          )}
        </div>
      )}

      {headers.map((header, index) => (
        <div
          key={header}
          className={`data-table-row-header ${skeleton ? "loading-skeleton" : ""} ${index === 0 ? "first" : ""}`}
          style={{ minWidth: columnWidths[index] }}
          onClick={() => onSort(index)}
        >
          {skeleton ? (
            <Skeleton height="24" width="80" />
          ) : (
            <>
              {header}
              <Icon icon={getSortIcon(sortStates[index])} size="sm" />
            </>
          )}
        </div>
      ))}
    </div>
  );
};
