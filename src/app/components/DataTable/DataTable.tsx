import React, { useState, useEffect } from "react";
import "./DataTable.scss";
import { CheckBox } from "../CheckBox/CheckBox";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import InputSearch from "../InputSearch/InputSearch";
import { Pagination } from "../Pagination/Pagination";
import Button from "../Button/Button";

interface DataTableProps {
  data: Array<{ id: string; [key: string]: string | number }>;
  expandedData?: Array<{ id: string; [key: string]: React.ReactNode }>;
  columns: string[];
  selectable?: boolean;
  expandable?: boolean;
  contentPrimaryButton: string;
  contentSecondButton: string;
  onClickFirstButton?: () => void;
  onClickSecondButton?: () => void;
  onClickOrderBy?: () => void;
  onClickFilterBy?: () => void;
}

const DataTable: React.FC<DataTableProps> = ({
  contentPrimaryButton,
  contentSecondButton,
  onClickFirstButton,
  onClickSecondButton,
  onClickFilterBy,
  onClickOrderBy,
  data,
  expandedData,
  columns,
  selectable,
  expandable,
}) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [expandedRows, setExpandedRows] = useState<string[]>([]);
  const [allRowsExpanded, setAllRowsExpanded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnyItemSelected, setIsAnyItemSelected] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 4;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const filteredData = data.filter((item) => {
    const values = columns.map((column) => String(item[column])).join(" ");
    return values.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
    const allIds = filteredData.map((item) => item.id);
    if (!selectAll) {
      setSelectedRows(allIds);
    } else {
      setSelectedRows([]);
    }
    setIsAnyItemSelected(!selectAll);
  };

  const toggleSelectRow = (id: string) => {
    const index = selectedRows.indexOf(id);
    let newSelectedRows: string[];

    if (index === -1) {
      newSelectedRows = [...selectedRows, id];
    } else {
      newSelectedRows = selectedRows.filter((rowId) => rowId !== id);
    }

    setSelectedRows(newSelectedRows);

    if (selectable) {
      const allIds = filteredData.map((item) => item.id);
      setSelectAll(newSelectedRows.length === allIds.length);
    }
    setIsAnyItemSelected(newSelectedRows.length > 0);
  };

  const toggleExpandRow = (id: string) => {
    setExpandedRows((prevExpandedRows) => {
      if (id === "header") {
        const allRowIds = filteredData.map((item) => item.id);
        const newExpandedRows = prevExpandedRows.length === 0 ? allRowIds : [];

        setAllRowsExpanded(newExpandedRows.length === filteredData.length);

        return newExpandedRows;
      }

      const newExpandedRows = prevExpandedRows.includes(id)
        ? prevExpandedRows.filter((rowId) => rowId !== id)
        : [...prevExpandedRows, id];

      if (newExpandedRows.length === filteredData.length) {
        setAllRowsExpanded(true);
      } else if (newExpandedRows.length === 0) {
        setAllRowsExpanded(false);
      }

      return newExpandedRows;
    });
  };

  const isIndeterminate =
    selectable &&
    selectedRows.length > 0 &&
    selectedRows.length !== filteredData.length;

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePaginationClick = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

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
            <Button
              size="md"
              variant="secondary"
              label={contentPrimaryButton}
              onClick={onClickFirstButton}
            />
            <Button
              size="md"
              variant="secondary"
              label={contentSecondButton}
              onClick={onClickSecondButton}
            />
          </div>
        </div>
      );
    }

    return (
      <div className="data-table-header">
        <InputSearch onChange={handleSearchChange} />
        <div className="data-table-header-buttons">
          <Button
            variant="secondary"
            typeIcon="swap_vert"
            size="md"
            label="Order by"
            onClick={onClickOrderBy}
          />
          <Button
            variant="secondary"
            typeIcon="filter_alt"
            size="md"
            label="Filter by"
            onClick={onClickFilterBy}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="data-table-root">
      {renderHeader()}
      <div className="data-table">
        <table>
          <thead>
            <tr>
              {expandable && (
                <th
                  className="data-table-expandable"
                  onClick={() => toggleExpandRow("header")}
                >
                  <ButtonIcon
                    variant=""
                    size="md"
                    typeIcon={
                      allRowsExpanded
                        ? "keyboard_arrow_up"
                        : "keyboard_arrow_down"
                    }
                    type="plain"
                  />
                </th>
              )}
              {selectable && (
                <th
                  className={`data-table-selectable ${
                    expandable ? "header-cell" : ""
                  }`}
                >
                  <CheckBox
                    checked={selectAll}
                    onChange={toggleSelectAll}
                    indeterminate={isIndeterminate}
                  />
                </th>
              )}
              {columns.map((column) => (
                <th key={column} className="header-cell">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="table-body">
            {paginatedData.map((item) => (
              <>
                <tr key={item.id}>
                  {expandable && (
                    <td
                      className={`data-table-expandable ${
                        expandedRows.includes(item.id) ? "expanded" : ""
                      }`}
                    >
                      <ButtonIcon
                        variant=""
                        size="md"
                        typeIcon={
                          expandedRows.includes(item.id)
                            ? "keyboard_arrow_up"
                            : "keyboard_arrow_down"
                        }
                        type="plain"
                        onClick={() => toggleExpandRow(item.id)}
                      />
                    </td>
                  )}
                  {selectable && (
                    <td className="data-table-selectable">
                      <CheckBox
                        checked={selectedRows.includes(item.id)}
                        onChange={() => toggleSelectRow(item.id)}
                      />
                    </td>
                  )}
                  {columns.map((column) => (
                    <td key={column}>{item[column]}</td>
                  ))}
                </tr>
                {expandedRows.includes(item.id) && expandedData && (
                  <tr className="expanded-row">
                    <td className="data-table-expandable none"></td>
                    <td
                      colSpan={expandable ? columns.length + 1 : columns.length}
                    >
                      <div className="expanded-content">
                        {expandedData
                          .filter((expandedItem) => expandedItem.id === item.id)
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
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
      <div className="data-table-footer">
        <Pagination
          variant="leftLabel"
          label={`Page ${currentPage} of ${totalPages}`}
          onClickLeft={() =>
            handlePaginationClick(currentPage > 1 ? currentPage - 1 : 1)
          }
          onClickRight={() =>
            handlePaginationClick(
              currentPage < totalPages ? currentPage + 1 : totalPages
            )
          }
        />
      </div>
    </div>
  );
};

export default DataTable;
