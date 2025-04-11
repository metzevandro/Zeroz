import React, { useEffect, useRef, useState } from "react";
import InputSearch from "../InputSearch/InputSearch";
import Pagination from "../Pagination/Pagination";
import "./DataTable.scss";
import Icon from "../Icon/Icon";
import Skeleton from "../Skeleton/Skeleton";
import EmptyState from "../EmptyState/EmptyState";
import InputCheckbox from "../InputCheckbox/InputCheckbox";

const DataTableHeader = ({
  skeleton,
  onSearch,
  rowsSelected = 0,
  textRowsSelected,
  children,
}: {
  skeleton: boolean;
  onSearch: (query: string) => void;
  rowsSelected?: number;
  textRowsSelected?: string;
  children?: React.ReactNode;
}) => {
  const rowsSelectedCount = `${rowsSelected} ${textRowsSelected}`;

  return (
    <>
      <div
        className={`data-table-header-rows-selected ${rowsSelected > 0 ? "fade-in" : "fade-out"}`}
        style={{
          visibility: rowsSelected > 0 ? "visible" : "hidden",
          display: rowsSelected > 0 ? "" : "none",
        }}
      >
        <p
          key={rowsSelectedCount}
          className="textRowsSelected"
          style={{ height: "40px", alignItems: "center", display: "flex" }}
        >
          {rowsSelectedCount}
        </p>
        <div className="data-table-header-rows-selected-buttons">
          {children}
        </div>
      </div>
      <div
        className={`data-table-header ${rowsSelected > 0 ? "fade-out" : "fade-in"}`}
        style={{
          visibility: rowsSelected > 0 ? "hidden" : "visible",
          display: rowsSelected > 0 ? "none" : "",
        }}
      >
        <InputSearch
          placeholder="Procurar"
          disabled={skeleton}
          onChange={(value: string) => onSearch(value)}
        />
      </div>
    </>
  );
};

const DataTableRowHeader = ({
  headers,
  sortStates,
  skeleton,
  onSort,
  collumnWidths,
  withCheckbox,
  allSelected = false,
  someSelected = false,
  handleSelectAll,
}: {
  skeleton: boolean;
  headers: string[];
  sortStates: ("asc" | "desc" | "default")[];
  onSort: (index: number) => void;
  collumnWidths: number[];
  withCheckbox: boolean;
  allSelected: boolean;
  someSelected: boolean;
  handleSelectAll: (checked: boolean) => void;
}) => {
  return (
    <div style={{ display: "flex", flex: "1" }}>
      {withCheckbox && (
        <div className="data-table-body-header-checkbox">
          {skeleton ? (
            <Skeleton height="24" width="24" />
          ) : (
            <InputCheckbox
              indeterminate={someSelected}
              modelValue={allSelected}
              onUpdate={handleSelectAll}
            />
          )}
        </div>
      )}
      {headers.map((header, index) => {
        let icon: string;

        switch (sortStates[index]) {
          case "asc":
            icon = "arrow_downward";
            break;
          case "desc":
            icon = "arrow_upward";
            break;
          case "default":
            icon = "swap_vert";
            break;
          default:
            icon = "swap_vert";
        }

        return (
          <div
            key={header}
            className={`data-table-row-header ${skeleton ? "loading-skeleton" : ""} ${index === 0 ? "first" : ""}`}
            onClick={() => onSort(index)}
            style={{ minWidth: collumnWidths[index] }}
          >
            {skeleton ? (
              <Skeleton height="24" width="80" />
            ) : (
              <>
                {header}
                <Icon icon={icon} size="sm" />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

const DataTableRowContent = ({
  children,
  skeleton,
  style,
}: {
  children: React.ReactNode;
  skeleton: boolean;
  style: React.CSSProperties;
}) => {
  return (
    <div className="data-table-row-content" style={style}>
      {skeleton ? <Skeleton height="24" width="80" /> : children}
    </div>
  );
};

interface DataTableBodyProps {
  withCheckbox: boolean;
  columnWidths: number[];
  currentPage: number;
  currentRows: any[];
  selectedRows: string[];
  rowsPerPage: number;
  skeleton: boolean;
  onRowSelection: (id: string, checked: boolean) => void;
  headers: string[];
}

const DataTableBody = ({
  currentRows,
  selectedRows,
  skeleton,
  onRowSelection,
  columnWidths,
  withCheckbox,
  headers,
}: DataTableBodyProps) => {
  const generateRandomSkeletonData = () => {
    return Array.from({ length: 5 }).map((_, rowIndex) => ({
      id: `skeleton-${rowIndex}`,
      ...headers.reduce((acc, header) => {
        acc[header] = Math.random().toString(36).substring(2, 8);
        return acc;
      }, {} as Record<string, string>),
    }));
  };

  const skeletonRows = generateRandomSkeletonData();

  return (
    <div
      className="data-table-body-content"
      style={{ flexDirection: "column" }}
    >
      {(skeleton ? skeletonRows : currentRows).map((row, index) => {
        const rowId = row.id;

        return (
          <div key={rowId} className="data-table-body-content-row">
            <div style={{ display: "flex", flex: "1" }}>
              {withCheckbox === true && (
                <div className="data-table-body-content-checkbox">
                  {skeleton ? (
                    <Skeleton height="24" width="24" />
                  ) : (
                    <InputCheckbox
                      disabled={skeleton}
                      modelValue={selectedRows.includes(rowId)}
                      onUpdate={(checked) => onRowSelection(rowId, checked)}
                    />
                  )}
                </div>
              )}
              {headers.map((header, index) => (
                <div key={index} className="data-table-body-content-row">
                  <DataTableRowContent
                    skeleton={skeleton}
                    style={{ minWidth: columnWidths[index] }}
                  >
                    {row[header]}
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

const DataTableFooter = ({
  currentPage,
  totalPages,
  disabledLeft,
  disabledRight,
  skeleton,
  onClickLeft,
  onClickRight,
}: {
  currentPage: number;
  totalPages: number;
  disabledLeft: boolean;
  disabledRight: boolean;
  skeleton: boolean;
  onClickLeft: () => void;
  onClickRight: () => void;
}) => {
  return (
    <div className="data-table-footer">
      <Pagination
        label={`Mostrando ${totalPages === 0 ? 0 : currentPage} de ${totalPages}`}
        variant="leftLabel"
        onClickLeft={onClickLeft}
        onClickRight={onClickRight}
        disabledLeft={disabledLeft}
        disabledRight={disabledRight}
        skeleton={skeleton}
      />
    </div>
  );
};

interface DataTableProps {
  columns: string[];
  data: any[];
  skeleton: boolean;
  rowsPerPage?: number;
  withCheckbox?: boolean;
  headerSelectedChildren?: React.ReactNode;
  textRowsSelected?: string;
  onSelectedRowsChange?: (selectedRows: string[]) => void;
  onUpdateSelectedRows?: (updateSelectedRows: (ids: string[]) => void) => void; 
}

export const DataTable = (props: DataTableProps) => {
  const {
    columns,
    data,
    skeleton,
    textRowsSelected,
    onSelectedRowsChange,
    headerSelectedChildren,
    onUpdateSelectedRows, 
  } = props;
  const withCheckbox = props.withCheckbox || false;
  const rowsPerPage = props.rowsPerPage || 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [sortStates, setSortStates] = useState<("asc" | "desc" | "default")[]>(
    new Array(columns.length).fill("default"),
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [originalData, setOriginalData] = useState<any[]>([]);
  const [processedData, setProcessedData] = useState<any[]>([]);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [rowsSelectedCount, setRowsSelectedCount] = useState(0);

  useEffect(() => {
    setRowsSelectedCount(selectedRows.length);
    if (onSelectedRowsChange) {
      onSelectedRowsChange(selectedRows);
    }
  }, [selectedRows, onSelectedRowsChange]);

  useEffect(() => {
    const dataWithIds = data.map((row, index) => ({
      id: index.toString(),
      ...row,
    }));
    setOriginalData(dataWithIds);
    setProcessedData(dataWithIds);
  }, [data]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleSort = (index: number) => {
    const newSortStates = [...sortStates];
    const currentState = newSortStates[index];

    newSortStates[index] =
      currentState === "default"
        ? "asc"
        : currentState === "asc"
          ? "desc"
          : "default";
    setSortStates(newSortStates);
  };

  useEffect(() => {
    const filterData = (data: any[], query: string) => {
      if (!query) return data;

      const startsWithQuery = data.filter((row) =>
        columns.some((col) =>
          row[col].toLowerCase().startsWith(query.toLowerCase()),
        ),
      );

      const containsQuery = data.filter(
        (row) =>
          !startsWithQuery.includes(row) &&
          columns.some((col) =>
            row[col].toLowerCase().includes(query.toLowerCase()),
          ),
      );

      return [...startsWithQuery, ...containsQuery];
    };

    const sortData = (
      data: any[],
      index: number,
      order: "asc" | "desc" | "default",
    ) => {
      if (order === "default") return data;

      const sortedRows = [...data];
      const column = columns[index];
      sortedRows.sort((a, b) => {
        const valueA = a[column];
        const valueB = b[column];

        if (order === "asc")
          return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
        return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
      });

      return sortedRows;
    };

    let updatedData = filterData(originalData, searchQuery);

    sortStates.forEach((state, index) => {
      if (state !== "default") {
        updatedData = sortData(updatedData, index, state);
      }
    });

    setProcessedData(updatedData);
  }, [originalData, searchQuery, sortStates]);

  const currentRows = processedData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );

  const totalPages = Math.ceil(processedData.length / rowsPerPage);

  const allSelected = processedData.every((row) =>
    selectedRows.includes(row.id),
  );
  const someSelected =
    processedData.some((row) => selectedRows.includes(row.id)) && !allSelected;

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const allIds = processedData.map((row) => row.id);
      setSelectedRows(allIds);
    } else {
      setSelectedRows([]);
    }
  };

  const handleRowSelection = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedRows((prevSelectedRows) => [...prevSelectedRows, id]);
    } else {
      setSelectedRows((prevSelectedRows) =>
        prevSelectedRows.filter((rowId) => rowId !== id),
      );
    }
  };

  const [columnWidths, setColumnWidths] = useState<number[]>([]);

  const calculateColumnWidths = () => {
    const tempWidths = columns.map((header, colIndex) => {
      const allCells = originalData.map((row) => row[header]);

      const measureWidth = (text: string) => {
        const tempSpan = document.createElement("span");

        tempSpan.textContent = text;

        document.body.appendChild(tempSpan);
        const width = tempSpan.getBoundingClientRect().width;
        document.body.removeChild(tempSpan);

        return width;
      };

      const headerWidth = measureWidth(header);
      const maxCellWidth = Math.max(
        ...allCells.map((cell) => measureWidth(cell)),
      );

      return Math.max(headerWidth, maxCellWidth) + 50;
    });

    setColumnWidths(tempWidths);
  };

  useEffect(() => {
    calculateColumnWidths();
  }, [originalData, columns]);

  const ref = useRef<HTMLDivElement>(null);
  const [contentOverflowed, setContentOverflowed] = useState<boolean>(false);

  useEffect(() => {
    const checkOverflow = () => {
      const contentElement = ref.current;
      if (contentElement) {
        setContentOverflowed(
          contentElement.scrollWidth > contentElement.clientWidth,
        );
      }
    };
    const resizeObserver = new ResizeObserver(() => {
      checkOverflow();
    });
    const contentElement = ref.current;
    if (contentElement) {
      resizeObserver.observe(contentElement);
      checkOverflow();
    }
    return () => {
      if (contentElement) {
        resizeObserver.unobserve(contentElement);
      }
    };
  }, []);

  useEffect(() => {
    if (onUpdateSelectedRows) {
      onUpdateSelectedRows((ids: string[]) => {
        setSelectedRows(ids);
      });
    }
  }, [onUpdateSelectedRows]);

  useEffect(() => {
    setRowsSelectedCount(selectedRows.length); 
    if (onSelectedRowsChange) {
      onSelectedRowsChange(selectedRows);
    }
  }, [selectedRows, onSelectedRowsChange]);

  useEffect(() => {
    setRowsSelectedCount(selectedRows.length);
  }, [selectedRows]);

  return (
    <>
      <div className="data-table">
        <DataTableHeader
          textRowsSelected={textRowsSelected}
          children={headerSelectedChildren}
          skeleton={skeleton}
          onSearch={handleSearch}
          rowsSelected={rowsSelectedCount}
        />
        <div
          className={`data-table-body ${contentOverflowed ? "overflowed" : ""}`}
          ref={ref}
          style={{height: (rowsPerPage * 56.8) + 41.6}}
        >
          <div className="data-table-body-header">
            <DataTableRowHeader
              collumnWidths={columnWidths}
              headers={columns}
              skeleton={skeleton}
              sortStates={sortStates}
              onSort={handleSort}
              withCheckbox={withCheckbox}
              allSelected={allSelected}
              someSelected={someSelected}
              handleSelectAll={handleSelectAll}
            />
          </div>
          {currentRows.length === 0 && !skeleton && processedData.length === 0 ? (
            <div className="data-table-body-empty">
              <EmptyState
                title="Nenhum resultado encontrado"
                description={
                  searchQuery
                    ? "Nenhum resultado encontrado para sua pesquisa. Tente ajustar os termos."
                    : "Tente ajustar ou revisar os termos de pesquisa para encontrar o que procura."
                }
                icon="search_off"
              />
            </div>
          ) : (
            <DataTableBody
              withCheckbox={withCheckbox}
              columnWidths={columnWidths}
              currentPage={currentPage}
              currentRows={currentRows}
              selectedRows={selectedRows}
              rowsPerPage={rowsPerPage}
              skeleton={skeleton}
              onRowSelection={handleRowSelection}
              headers={columns}
            />
          )}
        </div>
        <DataTableFooter
          currentPage={currentPage}
          totalPages={totalPages}
          onClickLeft={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
            }
          }}
          onClickRight={() => {
            if (currentPage < totalPages) {
              setCurrentPage(currentPage + 1);
            }
          }}
          disabledLeft={currentPage === 1 || currentRows.length === 0}
          disabledRight={currentPage === totalPages || currentRows.length === 0}
          skeleton={skeleton}
        />
      </div>
    </>
  );
};

export default DataTable;
