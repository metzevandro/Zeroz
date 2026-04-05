import React from "react";
import EmptyState from "../EmptyState/EmptyState";
import { DataTableHeader } from "./subcomponents/DataTableHeader";
import { DataTableRowHeader } from "./subcomponents/DataTableRowHeader";
import { DataTableBody } from "./subcomponents/DataTableBody";
import { DataTableFooter } from "./subcomponents/DataTableFooter";
import { useColumnWidths } from "./hooks/useColumnWidths";
import { useOverflowDetection } from "./hooks/useOverflowDetection";
import type { DataTableProps } from "./DataTable.types";
import "./DataTable.scss";
import { useDataTable } from "./hooks/useDataTable";

/**
 * ## DataTable
 *
 * Tabela de dados com paginação, seleção de linhas e suporte a busca
 * e ordenação **server-side**.
 *
 * ### Estados de carregamento
 *
 * O componente distingue dois estados:
 *
 * - **`skeleton={true}` + `data=[]`** — primeiro carregamento, sem dados.
 *   Exibe linhas skeleton no lugar do conteúdo.
 *
 * - **`skeleton={true}` + `data=[...dadosAnteriores]`** — atualização após
 *   busca ou sort. Os dados anteriores permanecem visíveis com opacidade
 *   reduzida até a resposta chegar, evitando flicker.
 */
const DataTable: React.FC<DataTableProps> = ({
  columns,
  data,
  skeleton,
  rowsPerPage = 4,
  withCheckbox = false,
  headerSelectedChildren,
  textRowsSelected,
  onSelectedRowsChange,
  onUpdateSelectedRows,
  onSort,
  onSearch,
}) => {
  const {
    currentPage,
    currentRows,
    visibleData,
    totalPages,
    loadedPages,
    selectedRows,
    sortStates,
    allSelected,
    someSelected,
    handleSearch,
    handleSort,
    handleSelectAll,
    handleRowSelection,
    handlePageLeft,
    handlePageRight,
  } = useDataTable({
    data,
    rowsPerPage,
    columns,
    onSelectedRowsChange,
    onUpdateSelectedRows,
    onSort,
    onSearch,
  });

  const columnKeys = columns.map((col) => col.key);
  const columnLabels = columns.map((col) => col.label);

  const indexedData = data.map((row, i) => ({ ...row, id: String(i) }));
  const columnWidths = useColumnWidths(columns, indexedData);
  const { ref, isOverflowed } = useOverflowDetection();

  const isInitialLoading = skeleton && data.length === 0;

  const isRefreshing = skeleton && data.length > 0;

  const isEmpty = currentRows.length === 0 && !skeleton;

  return (
    <div className="data-table">
      <DataTableHeader
        skeleton={isInitialLoading}
        onSearch={handleSearch}
        rowsSelected={selectedRows.length}
        textRowsSelected={textRowsSelected}
      >
        {headerSelectedChildren}
      </DataTableHeader>

      <div
        ref={ref}
        className={`data-table-body ${isOverflowed ? "overflowed" : ""}`}
        style={{
          height: rowsPerPage * 56.8 + 41.6,
          opacity: isRefreshing ? 0.5 : 1,
          pointerEvents: isRefreshing ? "none" : undefined,
          transition: "opacity 0.15s ease",
        }}
      >
        <div className="data-table-body-header">
          <DataTableRowHeader
            skeleton={isInitialLoading}
            headers={columnLabels}
            sortStates={sortStates}
            columnWidths={columnWidths}
            withCheckbox={withCheckbox}
            allSelected={allSelected}
            someSelected={someSelected}
            onSort={handleSort}
            onSelectAll={handleSelectAll}
          />
        </div>

        {isEmpty ? (
          <div className="data-table-body-empty">
            <EmptyState
              title="Nenhum resultado encontrado"
              description="Tente ajustar os termos de pesquisa para encontrar o que procura."
              icon="search_off"
            />
          </div>
        ) : (
          <DataTableBody
            withCheckbox={withCheckbox}
            columnWidths={columnWidths}
            columnKeys={columnKeys}
            currentRows={currentRows}
            selectedRows={selectedRows}
            skeleton={isInitialLoading}
            onRowSelection={handleRowSelection}
          />
        )}
      </div>

      <DataTableFooter
        currentPage={currentPage}
        totalPages={totalPages}
        skeleton={isInitialLoading}
        onClickLeft={handlePageLeft}
        onClickRight={handlePageRight}
        disabledLeft={currentPage === 1 || currentRows.length === 0}
        disabledRight={
          currentPage === Math.min(totalPages, loadedPages) ||
          currentRows.length === 0
        }
      />
    </div>
  );
};

DataTable.displayName = "DataTable";

export default DataTable;
