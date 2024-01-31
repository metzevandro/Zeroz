import React, { useState, useEffect, useRef } from "react";
import InputSearch from "../InputSearch/InputSearch";
import Button from "../Button/Button";
import { Pagination } from "../Pagination/Pagination";
import { InputCheckbox } from "../InputCheckbox/InputCheckbox";
import "../DataTable/DataTable.scss";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

interface DataTableProps {
  columns: string[];
  data: { id: string; [key: string]: any }[];
  expandedData?: Array<{ id: string; [key: string]: React.ReactNode }>;
  selectable?: boolean;
  expandable?: boolean;
  itemPerPage: number;
}

const DataTable: React.FC<DataTableProps> = ({
  columns,
  data,
  expandable,
  selectable,
  expandedData,
  itemPerPage,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [isAnyItemSelected, setIsAnyItemSelected] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] =
    useState<{ id: string; [key: string]: any }[]>(data);
  const [expandedRows, setExpandedRows] = useState<string[]>([]);
  const [contentOverflowed, setContentOverflowed] = useState<boolean>(false);

  const contentRef = useRef<HTMLDivElement>(null);

  const itemsPerPage = itemPerPage;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const [allItemsExpanded, setAllItemsExpanded] = useState<boolean>(false);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  useEffect(() => {
    const filtered = data.filter((item) => {
      const values = columns.map((column) => String(item[column])).join(" ");
      return values.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredData(filtered);
  }, [searchTerm, data, columns]);

  useEffect(() => {
    setIsAnyItemSelected(selectedRows.length > 0);
  }, [selectedRows]);

  useEffect(() => {
    setSelectAll(isAllSelected());
  }, [selectedRows]);

  useEffect(() => {
    const checkOverflow = () => {
      const contentElement = contentRef.current;

      if (contentElement) {
        setContentOverflowed(
          contentElement.scrollWidth > contentElement.clientWidth
        );
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      checkOverflow();
    });

    const contentElement = contentRef.current;

    if (contentElement) {
      resizeObserver.observe(contentElement);
      checkOverflow();
    }

    return () => {
      if (contentElement) {
        resizeObserver.unobserve(contentElement);
      }
    };
  }, [filteredData]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => {
      const nextPage = prevPage + 1;
      return nextPage > totalPages ? prevPage : nextPage;
    });
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => {
      const newPage = prevPage - 1;
      return newPage < 1 ? prevPage : newPage;
    });
  };

  const toggleSelectAll = () => {
    const allIds = filteredData.map((item) => item.id);
    if (isAllSelected()) {
      setSelectAll(false);
      setSelectedRows([]);
    } else {
      setSelectAll(true);
      setSelectedRows(allIds);
    }
  };

  const isAllSelected = () => {
    const allIds = filteredData.map((item) => item.id);
    return selectedRows.length === allIds.length;
  };

  const toggleSelectRow = (rowId: string) => {
    if (selectedRows.includes(rowId)) {
      setSelectedRows(selectedRows.filter((id) => id !== rowId));
      setSelectAll(false);
    } else {
      setSelectedRows([...selectedRows, rowId]);
      if (isAllSelected()) {
        setSelectAll(true);
      }
    }
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const isIndeterminate =
    selectedRows.length > 0 &&
    selectedRows.length < filteredData.length &&
    !selectAll;

  const label = `Page ${currentPage} of ${totalPages}`;

  function calculateGridTemplate(
    selectable: boolean = false,
    expandable: boolean = false
  ) {
    if (selectable && expandable) {
      return {
        gridTemplateColumns: "56px 56px repeat(auto-fit, minmax(120px, 1fr))",
      };
    } else if (selectable || expandable) {
      return {
        gridTemplateColumns: "56px repeat(auto-fit, minmax(120px, 1fr))",
      };
    } else {
      return {};
    }
  }

  function calculateLeft(
    selectable: boolean = false,
    expandable: boolean = false
  ) {
    if (selectable && expandable) {
      return {
        left: "112px",
      };
    } else if (selectable || expandable) {
      return {
        left: "56px",
      };
    } else {
      return {
        left: "0px",
      };
    }
  }

  function calculateLeftToCheckBox(expandable: boolean = false) {
    if (expandable) {
      return {
        left: "56px",
      };
    } else {
      return {
        left: "0px",
      };
    }
  }

  const renderHeader = () => {
    if (isAnyItemSelected) {
      return (
        <div className="data-table-header-selected-items">
          <div className="data-table-header-selected-items-message">
            <p>{`${selectedRows.length} item${
              selectedRows.length >= 2 ? "s" : ""
            } selected`}</p>
          </div>
          <div className="data-table-header-selected-items-buttons">
            <Button size="md" variant="secondary" label="Action 1" />
            <Button size="md" variant="secondary" label="Action 2" />
          </div>
        </div>
      );
    }

    return (
      <div className="data-table-header">
        <InputSearch onChange={handleSearchChange} />{" "}
        <div className="data-table-header-actions">
          <Button
            variant="secondary"
            typeIcon="swap_vert"
            size="md"
            label="Order by"
          />
          <Button
            variant="secondary"
            typeIcon="filter_alt"
            size="md"
            label="Filter by"
          />
        </div>
      </div>
    );
  };

  const handleExpandRow = (rowId: string) => {
    if (expandedRows.includes(rowId)) {
      setExpandedRows(expandedRows.filter((id) => id !== rowId));
      setAllItemsExpanded(false);
    } else {
      setExpandedRows([...expandedRows, rowId]);
      if (expandedRows.length + 1 === filteredData.length) {
        setAllItemsExpanded(true);
      }
    }
  };

  const toggleExpandAllRows = () => {
    if (allItemsExpanded) {
      setExpandedRows([]);
      setAllItemsExpanded(false);
    } else {
      const allIds = filteredData.map((item) => item.id);
      setExpandedRows(allIds);
      setAllItemsExpanded(true);
    }
  };

  return (
    <>
      <div className="data-table-root">
        {renderHeader()}
        <div
          ref={contentRef}
          className={`data-table-content ${
            contentOverflowed ? "overflowed" : ""
          }`}
        >
          <div
            className="data-table-content-header"
            style={calculateGridTemplate(selectable, expandable)}
          >
            {expandable && (
              <div className="data-table-content-header-expandable">
                <ButtonIcon
                  size="md"
                  type="plain"
                  typeIcon={
                    allItemsExpanded
                      ? "keyboard_arrow_up"
                      : "keyboard_arrow_down"
                  }
                  variant="primary"
                  onClick={toggleExpandAllRows}
                />
              </div>
            )}
            {selectable && (
              <div
                className="data-table-content-header-checkbox"
                style={calculateLeftToCheckBox(expandable)}
              >
                <InputCheckbox
                  checked={selectAll}
                  onChange={toggleSelectAll}
                  indeterminate={isIndeterminate}
                />
              </div>
            )}

            {columns.map((column, columnIndex) => (
              <div
                className={`th ${
                  columnIndex === 0 ? "sticky-first-column" : ""
                }`}
                style={calculateLeft(selectable, expandable)}
                key={columnIndex}
              >
                {column}
              </div>
            ))}
          </div>
          {filteredData.slice(indexOfFirstItem, indexOfLastItem).map((row) => (
            <>
              <div
                className="data-table-content-body"
                style={calculateGridTemplate(selectable, expandable)}
                key={row.id}
              >
                {expandable && (
                  <div
                    className="data-table-content-body-expandable"
                    key={row.id}
                  >
                    <ButtonIcon
                      size="md"
                      type="plain"
                      typeIcon={
                        expandedRows.includes(row.id)
                          ? "keyboard_arrow_up"
                          : "keyboard_arrow_down"
                      }
                      variant="primary"
                      onClick={() => handleExpandRow(row.id)}
                    />
                  </div>
                )}
                {selectable && (
                  <div
                    className="data-table-content-body-checkbox"
                    style={calculateLeftToCheckBox(expandable)}
                    key={row.id}
                  >
                    <InputCheckbox
                      checked={selectedRows.includes(row.id)}
                      onChange={() => toggleSelectRow(row.id)}
                    />
                  </div>
                )}
                {columns.map((_, columnIndex) => (
                  <div
                    key={columnIndex}
                    className={`fixed ${
                      columnIndex === 0 ? "sticky-first-column" : ""
                    }`}
                    style={calculateLeft(selectable, expandable)}
                  >
                    <div key={row.id}>
                      <div className="td" key={row.id}>
                        {row[columns[columnIndex]]}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {expandedRows.includes(row.id) && expandedData && (
                <div style={{ display: "flex" }}>
                  <div className="space-expanded-content" />
                  <div className="expanded-content">
                    {expandedData
                      .filter((expandedItem) => expandedItem.id === row.id)
                      .map((expandedItem) => (
                        <div key={expandedItem.id}>
                          {Object.keys(expandedItem)
                            .filter((key) => key !== "id")
                            .map((key) => (
                              <div key={key}>{expandedItem[key]}</div>
                            ))}
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
        <div className="data-table-footer">
          <Pagination
            label={label}
            variant="leftLabel"
            onClickRight={handleNextPage}
            onClickLeft={handlePrevPage}
          />
        </div>
      </div>
    </>
  );
};

export default DataTable;
