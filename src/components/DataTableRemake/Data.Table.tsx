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
  rowsSelected,
}: {
  skeleton: boolean;
  onSearch: (query: string) => void;
  rowsSelected?: number;
}) => {
  return (
    <>
      {rowsSelected ? (
        <div className="data-table-header-rows-selected">
          <p>
            Selected {rowsSelected} row{rowsSelected >= 2 ? "s" : ""}
          </p>
        </div>
      ) : (
        <div className="data-table-header">
          <InputSearch
            placeholder="Search"
            disabled={skeleton}
            onChange={(value: string) => onSearch(value)}
          />
        </div>
      )}
    </>
  );
};

const DataTableRowHeader = ({
  headers,
  sortStates,
  skeleton,
  onSort,
  collumnWidths,
}: {
  skeleton: boolean;
  headers: string[];
  sortStates: ("asc" | "desc" | "default")[];
  onSort: (index: number) => void;
  collumnWidths: number[];
}) => {
  return (
    <>
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
    </>
  );
};

const DataTableRow = ({
  row,
  skeleton,
  columnWidths,
}: {
  row: string[];
  skeleton: boolean;
  columnWidths: number[];
}) => {
  return (
    <div
      className={`data-table-body-content ${skeleton && "loading-skeleton"}`}
    >
      {row.map((cell, index) => (
        <>
          <DataTableRowContent
            key={index}
            skeleton={skeleton}
            style={{ minWidth: columnWidths[index] }}
          >
            {cell}
          </DataTableRowContent>
        </>
      ))}
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
  currentRows: string[][];
  selectedRows: boolean[];
  currentPage: number;
  rowsPerPage: number;
  skeleton: boolean;
  onRowSelection: (index: number, checked: boolean) => void;
  columnWidths: number[];
  withCheckbox: boolean;
}

const DataTableBody = ({
  currentRows,
  selectedRows,
  currentPage,
  rowsPerPage,
  skeleton,
  onRowSelection,
  columnWidths,
  withCheckbox,
}: DataTableBodyProps) => {
  return (
    <div
      className="data-table-body-content"
      style={{ flexDirection: "column" }}
    >
      {currentRows.map((row, index) => {
        const globalIndex = (currentPage - 1) * rowsPerPage + index;

        return (
          <div key={globalIndex} className="data-table-body-content-row">
            {withCheckbox === true ? (
              <div className="teste" style={{display: 'flex', flex: 1, maxWidth: '52px', minWidth: '52px'}}>
              <div className="data-table-body-content-checkbox">
                <InputCheckbox
                  modelValue={selectedRows[globalIndex]}
                  onUpdate={(checked) => onRowSelection(globalIndex, checked)}
                />
              </div></div>
            ) : null}
            <DataTableRow
              columnWidths={columnWidths}
              row={row}
              skeleton={skeleton}
            />
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
  data: string[][];
  skeleton: boolean;
  rowsPerPage?: number;
  withCheckbox?: boolean;
}
export const DataTable = (props: DataTableProps) => {
  const { columns, data, skeleton } = props;
  const withCheckbox = props.withCheckbox || false;
  const rowsPerPage = props.rowsPerPage || 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [sortStates, setSortStates] = useState<("asc" | "desc" | "default")[]>(
    new Array(columns.length).fill("default"),
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [processedData, setProcessedData] = useState<string[][]>(data);

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
    const filterData = (data: string[][], query: string) => {
      if (!query) return data;

      const startsWithQuery = data.filter((row) =>
        row.some((cell) => cell.toLowerCase().startsWith(query.toLowerCase())),
      );

      const containsQuery = data.filter(
        (row) =>
          !startsWithQuery.includes(row) &&
          row.some((cell) => cell.toLowerCase().includes(query.toLowerCase())),
      );

      return [...startsWithQuery, ...containsQuery];
    };

    const sortData = (
      data: string[][],
      index: number,
      order: "asc" | "desc" | "default",
    ) => {
      if (order === "default") return data;

      const sortedRows = [...data];
      sortedRows.sort((a, b) => {
        const valueA = a[index];
        const valueB = b[index];

        if (order === "asc")
          return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
        return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
      });

      return sortedRows;
    };

    let updatedData = filterData(data, searchQuery);

    sortStates.forEach((state, index) => {
      if (state !== "default") {
        updatedData = sortData(updatedData, index, state);
      }
    });

    setProcessedData(updatedData);
  }, [data, searchQuery, sortStates]);

  const currentRows = processedData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );

  const totalPages = Math.ceil(processedData.length / rowsPerPage);

  const [selectedRows, setSelectedRows] = useState<boolean[]>(
    Array(data.length).fill(false),
  );
  const allSelected = selectedRows.every((selected) => selected);
  const someSelected =
    selectedRows.some((selected) => selected) && !allSelected;

  const handleSelectAll = (checked: boolean) => {
    setSelectedRows(Array(data.length).fill(checked));
  };

  const handleRowSelection = (index: number, checked: boolean) => {
    const updatedRows = [...selectedRows];
    updatedRows[index] = checked;
    setSelectedRows(updatedRows);
  };

  const rowsSelectedCount = selectedRows.filter((row) => row).length;

  const [columnWidths, setColumnWidths] = useState<number[]>([]);

  const calculateColumnWidths = () => {
    const tempWidths = columns.map((header, colIndex) => {
      const allCells = data.map((row) => row[colIndex]);

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
  }, [data, columns]);

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

  const [height, setHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (ref.current) {
        setHeight(ref.current.clientHeight);
      }
    }, 0);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="data-table">
      <DataTableHeader
        skeleton={skeleton}
        onSearch={handleSearch}
        rowsSelected={rowsSelectedCount}
      />
      <div
        className={`data-table-body ${contentOverflowed ? "overflowed" : ""}`}
        ref={ref}
        style={{ height: height }}
      >
        <div className="data-table-body-header">
          {withCheckbox === true ? (
            <div className="data-table-body-header-checkbox">
              <InputCheckbox
                indeterminate={someSelected}
                modelValue={allSelected}
                onUpdate={handleSelectAll}
              />
            </div>
          ) : null}
          <div style={{ display: "flex", flex: "1" }}>
            <DataTableRowHeader
              collumnWidths={columnWidths}
              headers={columns}
              skeleton={skeleton}
              sortStates={sortStates}
              onSort={handleSort}
            />
          </div>
        </div>
        {currentRows.length === 0 ? (
          <div className="data-table-body-empty">
            <EmptyState
              title="Nenhum resultado encontrado"
              description="Tente ajustar ou revisar os termos de pesquisa para encontrar o que procura."
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
  );
};
