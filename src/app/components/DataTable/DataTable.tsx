"use client";
import React, { useState, useEffect, useRef } from "react";
import InputSearch from "../InputSearch/InputSearch";
import Button from "../Button/Button";
import Pagination from "../Pagination/Pagination";
import InputCheckbox from "../InputCheckbox/InputCheckbox";
import "../DataTable/DataTable.scss";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import Aside, { AsideContent, AsideFooter } from "../Aside/Aside";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import EmptyState from "../EmptyState/EmptyState";
import Icon from "../Icon/Icon";
import Tag from "../Tag/Tag";
import Modal, { FooterModal } from "../Modal/Modal";

interface DataTableProps {
  columns: string[];
  data: { id: string; [key: string]: any }[];
  expandedData?: Array<{ id: string; [key: string]: React.ReactNode }>;
  selectable?: boolean;
  expandable?: boolean;
  itemPerPage: number;
  pagesText: string;
  inputPlaceholder: string;
  typeIconSecondButton: string;
  labelSecondButton: string;
  selectableLabelSecondButton: string;
  selectableIconSecondButton: string;
  availableFilters?: { [key: string]: string[] };
  asideTitle: string;
  firstButtonLabelAside: string;
  secondButtonLabelAside: string;
  titleNoDataMessage: string;
  descriptionNoDataMessage: string;
  titleNoDataFilteredMessage: string;
  labelButtonNoDataFilteredMessage: string;
  descriptionNoDataFilteredMessage: string;
}

type ColumnSorting = "asc" | "desc" | "default";

const DataTable: React.FC<DataTableProps> = ({
  columns,
  data: originalData,
  expandable,
  selectable,
  expandedData,
  itemPerPage,
  inputPlaceholder,
  selectableLabelSecondButton,
  labelSecondButton,
  typeIconSecondButton,
  firstButtonLabelAside,
  secondButtonLabelAside,
  titleNoDataMessage,
  labelButtonNoDataFilteredMessage,
  descriptionNoDataMessage,
  asideTitle,
  selectableIconSecondButton,
  availableFilters,
  titleNoDataFilteredMessage,
  descriptionNoDataFilteredMessage,
  pagesText,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = itemPerPage;
  const [filteredData, setFilteredData] =
    useState<{ id: string; [key: string]: any }[]>(originalData);

  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    setFilteredData(originalData);
    const totalPages = Math.ceil(originalData.length / itemsPerPage);
    setTotalPages(totalPages);
  }, [originalData, itemsPerPage]);

  const label =
    filteredData.length > 0
      ? `${pagesText} ${currentPage} - ${totalPages}`
      : `${pagesText} 0 - 0`;

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

  useEffect(() => {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    setTotalPages(totalPages);
  }, [originalData, itemsPerPage, filteredData]);

  const [originalDataState, setOriginalDataState] =
    useState<{ id: string; [key: string]: any }[]>(originalData);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [expandedRows, setExpandedRows] = useState<string[]>([]);

  const [isAnyItemSelected, setIsAnyItemSelected] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [contentOverflowed, setContentOverflowed] = useState<boolean>(false);

  const contentRef = useRef<HTMLDivElement>(null);

  const [isOpenAside, setIsOpenAside] = useState(false);
  const [filterOptions, setFilterOptions] = useState<{
    [key: string]: string[];
  }>(columns.reduce((acc, column) => ({ ...acc, [column]: [] }), {}));

  const [selectedTags, setSelectedTags] = useState<{ [key: string]: string[] }>(
    columns.reduce((acc, column) => ({ ...acc, [column]: [] }), {}),
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const [allItemsExpanded, setAllItemsExpanded] = useState<boolean>(false);

  useEffect(() => {
    setIsAnyItemSelected(selectedRows.length > 0);
    setSelectAll(selectedRows.length === filteredData.length);
  }, [selectedRows, filteredData]);

  useEffect(() => {
    const checkOverflow = () => {
      const contentElement = contentRef.current;

      if (contentElement) {
        setContentOverflowed(
          contentElement.scrollWidth > contentElement.clientWidth,
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
  }, []);

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

  const isIndeterminate =
    selectedRows.length > 0 &&
    selectedRows.length < filteredData.length &&
    !selectAll;

  function calculateGridTemplate(
    selectable: boolean = false,
    expandable: boolean = false,
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
    expandable: boolean = false,
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

  useEffect(() => {
    setIsAnyItemSelected(selectedRows.length > 0);
  }, [selectedRows]);

  const toggleAside = () => {
    setIsOpenAside(!isOpenAside);
  };

  const [isOpen, setIsOpen] = useState(false);

  const removeRow = () => {
    const updatedOriginalData = originalDataState.filter(
      (item) => !selectedRows.includes(item.id),
    );

    const updatedFilteredData = filteredData.filter(
      (item) => !selectedRows.includes(item.id),
    );

    setFilteredData(updatedFilteredData);
    setSelectedRows([]);
    setIsOpen(false);

    // Atualiza os dados originais sem as linhas removidas
    setOriginalDataState(updatedOriginalData);
  };

  const toggleModal = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const exportSelectedRowsAsCSV = () => {
    // Filter selected rows from the original data
    const selectedData = originalData.filter((row) =>
      selectedRows.includes(row.id),
    );

    // Extract column names
    const columnNames = columns;

    // Create the CSV content
    const csvContent = selectedData
      .map((row) => {
        return columnNames.map((column) => row[column]).join(",");
      })
      .join("\n");

    // Add column names as the header
    const csvData = columnNames.join(",") + "\n" + csvContent;

    // Create a blob with the CSV data
    const csvBlob = new Blob([csvData], {
      type: "text/csv",
    });

    // Create a temporary URL for downloading
    const csvURL = window.URL.createObjectURL(csvBlob);

    // Create an anchor element for initiating the download
    const downloadLink = document.createElement("a");
    downloadLink.href = csvURL;
    downloadLink.download = "selected_data.csv";

    // Simulate a click to trigger the download
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Clean up by removing the temporary URL and anchor element
    window.URL.revokeObjectURL(csvURL);
    document.body.removeChild(downloadLink);
  };

  const renderHeader = () => {
    if (isAnyItemSelected) {
      return (
        <>
          <Modal
            footer={
              <FooterModal>
                <div style={{ width: "min-content" }}>
                  <ButtonGroup
                    contentFirstButton="Delete"
                    contentSecondButton="Cancel"
                    direction="row"
                    variantFirstButton="warning"
                    variantSecondButton="secondary"
                    onClickFirstButton={removeRow}
                    onClickSecondButton={toggleModal}
                  />
                </div>
              </FooterModal>
            }
            description="Are you sure that you want delete this row?"
            dismissible={true}
            title="Delete"
            isOpen={isOpen}
            hideModal={toggleModal}
          />
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
                label="Export"
                onClick={exportSelectedRowsAsCSV}
                typeIcon="download"
              />
              <Button
                size="md"
                variant="secondary"
                label={selectableLabelSecondButton}
                onClick={toggleModal}
                typeIcon={selectableIconSecondButton}
              />
            </div>
          </div>
        </>
      );
    } else {
    }

    return (
      <div className="data-table-header">
        <InputSearch
          placeholder={inputPlaceholder}
          onChange={handleSearchChange}
        />
        {availableFilters && (
          <div className="data-table-header-actions">
            <div style={{ width: "100%" }}>
              <Button
                variant="secondary"
                typeIcon={typeIconSecondButton}
                size="md"
                label={labelSecondButton}
                onClick={toggleAside}
              />
            </div>
          </div>
        )}
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

  const removeTag = (columnName: string, tags: string[]) => {
    const updatedSelectedTags = {
      ...selectedTags,
      [columnName]: selectedTags[columnName].filter(
        (tag) => !tags.includes(tag),
      ),
    };

    const updatedFilterOptions = {
      ...filterOptions,
      [columnName]: filterOptions[columnName].filter(
        (option) => !tags.includes(option),
      ),
    };

    // Define os novos filtros
    setFilterOptions(updatedFilterOptions);

    // Aplica os filtros restantes aos dados originais
    let filteredData = [...originalDataState];
    Object.entries(updatedFilterOptions).forEach(([column, selectedValues]) => {
      if (selectedValues.length > 0) {
        filteredData = filteredData.filter((item) =>
          selectedValues.includes(String(item[column])),
        );
      }
    });

    // Define os novos dados filtrados
    setFilteredData(filteredData);

    // Define os novos tags selecionadas
    setSelectedTags(updatedSelectedTags);
  };

  const handleFilterChange = (columnName: string, value: string) => {
    setFilterOptions((prevFilterOptions) => {
      const newFilterOptions = { ...prevFilterOptions };

      if (newFilterOptions[columnName].includes(value)) {
        newFilterOptions[columnName] = newFilterOptions[columnName].filter(
          (item) => item !== value,
        );
      } else {
        newFilterOptions[columnName] = [...newFilterOptions[columnName], value];
      }

      return newFilterOptions;
    });
  };

  const applyFilters = () => {
    let updatedFilteredData = [...originalDataState]; // Usando originalDataState em vez de originalData
    const newSelectedTags: { [key: string]: string[] } = {};

    Object.entries(filterOptions).forEach(([columnName, selectedValues]) => {
      if (selectedValues.length > 0) {
        // Aplica os filtros apenas aos itens presentes nos dados filtrados
        updatedFilteredData = updatedFilteredData.filter((item) =>
          selectedValues.includes(String(item[columnName])),
        );

        // Ordena os filtros selecionados
        newSelectedTags[columnName] = selectedValues.sort();
      }
    });

    setIsOpenAside(false);

    // Atualiza os dados filtrados com base na filtragem aplicada
    setFilteredData(updatedFilteredData);

    // Atualiza os tags selecionados
    setSelectedTags(newSelectedTags);

    // Reseta a página para a primeira página após aplicar os filtros
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);

    let searchedData = [...originalData];

    // Aplicar pesquisa ao conjunto de dados original
    if (value.trim() !== "") {
      searchedData = searchedData.filter((item) => {
        return Object.values(item).some((val) =>
          typeof val === "string" ? val.includes(value) : false,
        );
      });
    }

    // Aplicar filtros selecionados ao conjunto de dados pesquisados
    Object.entries(filterOptions).forEach(([columnName, selectedValues]) => {
      if (selectedValues.length > 0) {
        searchedData = searchedData.filter((item) =>
          selectedValues.includes(String(item[columnName])),
        );
      }
    });

    setFilteredData(searchedData);
  };

  interface SortConfig {
    [column: string]: ColumnSorting;
  }

  const DEFAULT_SORT_STATE: ColumnSorting = "default";

  const initialSortConfig: SortConfig = columns.reduce(
    (acc, column) => ({ ...acc, [column]: DEFAULT_SORT_STATE }),
    {},
  );

  const [sortConfig, setSortConfig] = useState<SortConfig>(initialSortConfig);
  const [sortingColumn, setSortingColumn] = useState<string | null>(null);

  const handleSort = (column: string) => {
    const currentSortState = sortConfig[column];
    let nextSortState: ColumnSorting;

    if (currentSortState === "asc") {
      nextSortState = "desc";
    } else if (currentSortState === "desc") {
      nextSortState = "default";
    } else {
      nextSortState = "asc";
    }

    const updatedSortConfig: SortConfig = {
      ...initialSortConfig,
      [column]: nextSortState,
    };

    setSortConfig(updatedSortConfig);
    setSortingColumn(column);

    let sortedData = [...filteredData];

    if (nextSortState !== "default") {
      sortedData = sortedData.sort((a, b) => {
        if (nextSortState === "asc") {
          return a[column] > b[column] ? 1 : -1;
        } else if (nextSortState === "desc") {
          return a[column] < b[column] ? 1 : -1;
        }
        return 0;
      });
    } else {
      // Se houver filtros aplicados
      if (Object.values(filterOptions).some((options) => options.length > 0)) {
        // Filtra os dados originais com base nos filtros aplicados
        let filteredOriginalData = [...originalDataState];
        Object.entries(filterOptions).forEach(
          ([filterColumn, selectedValues]) => {
            if (selectedValues.length > 0) {
              filteredOriginalData = filteredOriginalData.filter((item) =>
                selectedValues.includes(String(item[filterColumn])),
              );
            }
          },
        );

        // Ordena os dados filtrados originalmente
        sortedData = filteredOriginalData.sort((a, b) => {
          if (a[column] > b[column]) return 1;
          if (a[column] < b[column]) return -1;
          return 0;
        });
      } else {
        // Se não houver filtros aplicados, mantém a ordem original
        sortedData = [...originalDataState];
      }
    }

    setFilteredData(sortedData);
  };

  useEffect(() => {
    // Reset sortConfig to default state when filters are applied
    const defaultSortConfig: SortConfig = columns.reduce(
      (acc, column) => ({ ...acc, [column]: DEFAULT_SORT_STATE }),
      {},
    );
    setSortConfig(defaultSortConfig);
  }, [filterOptions]);

  const handleClearFilters = () => {
    // Define os novos dados filtrados como os dados originais
    const updatedFilteredData = [...originalData];

    // Limpa os filtros e tags selecionadas
    const updatedFilterOptions = columns.reduce(
      (acc, column) => ({ ...acc, [column]: [] }),
      {},
    );
    const updatedSelectedTags = { ...updatedFilterOptions };

    // Define os novos dados filtrados, filtros e tags selecionadas
    setFilteredData(updatedFilteredData);
    setFilterOptions(updatedFilterOptions);
    setSelectedTags(updatedSelectedTags);
    setSearchTerm("");
  };

  const renderNoDataMessage = () => {
    return (
      <div className="render-no-data-message">
        <EmptyState
          icon="search_off"
          title={titleNoDataMessage}
          description={descriptionNoDataMessage}
        />
      </div>
    );
  };

  const renderNoDataFilteredMessage = () => (
    <div className="render-no-data-message">
      <EmptyState
        icon="search_off"
        title={titleNoDataFilteredMessage}
        description={descriptionNoDataFilteredMessage}
        buttonContentPrimary={labelButtonNoDataFilteredMessage}
        onClickActionPrimary={handleClearFilters}
      />
    </div>
  );

  const hasSelectedFilters = Object.values(filterOptions).some(
    (options) => options.length > 0,
  );

  return (
    <>
      {availableFilters && (
        <Aside
          isOpen={isOpenAside}
          title={asideTitle}
          toggleAside={toggleAside}
          content={
            <AsideContent>
              {filteredData.length > 0 ? (
                <>
                  {/* Conteúdo do aside quando houver dados filtrados */}
                  {Object.entries(availableFilters)
                    .sort(([columnA], [columnB]) =>
                      columnA.localeCompare(columnB),
                    )
                    .map(([column, options]) => (
                      <div key={column} className="aside-filter">
                        <div className="aside-content-col">
                          <div className="aside-title-col">{column}</div>
                          {options
                            .sort((a, b) => a.localeCompare(b))
                            .map((option, idx) => (
                              <div key={idx}>
                                <InputCheckbox
                                  checked={filterOptions[column].includes(
                                    option,
                                  )}
                                  onChange={() =>
                                    handleFilterChange(column, option)
                                  }
                                  label={option}
                                />
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                </>
              ) : (
                <>{renderNoDataMessage()}</>
              )}
            </AsideContent>
          }
          footer={
            <AsideFooter>
              <div style={{ display: "flex", width: "min-content" }}>
                <ButtonGroup
                  contentFirstButton={firstButtonLabelAside}
                  contentSecondButton={secondButtonLabelAside}
                  direction="row"
                  variantFirstButton="primary"
                  variantSecondButton="secondary"
                  onClickFirstButton={applyFilters}
                  onClickSecondButton={toggleAside}
                />
              </div>
            </AsideFooter>
          }
        />
      )}

      <div className="data-table-root">
        {renderHeader()}
        {Object.values(selectedTags).some((tags) => tags.length > 0) && (
          <div className="tags">
            {Object.entries(selectedTags).map(
              ([column, tags]) =>
                tags.length > 0 && (
                  <Tag
                    key={column}
                    content={`${column}: ${tags.join(", ")}`}
                    variant="primary"
                    onClose={() => removeTag(column, tags)}
                  />
                ),
            )}
          </div>
        )}
        <div
          ref={contentRef}
          className={`data-table-content ${
            contentOverflowed ? "overflowed" : ""
          }`}
        >
          {filteredData.length > 0 ? (
            <>
              <div
                className="data-table-content-header"
                style={calculateGridTemplate(selectable, expandable)}
              >
                {expandable && (
                  <div
                    className={`data-table-content-header-expandable ${
                      allItemsExpanded ? "up" : "down"
                    }`}
                  >
                    <ButtonIcon
                      size="md"
                      type="plain"
                      typeIcon="keyboard_arrow_down"
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
                    onClick={() => handleSort(column)}
                  >
                    {column}
                    <div className="icon">
                      {sortConfig[column] === "asc" ? (
                        <Icon icon="arrow_upward" size="sm" />
                      ) : sortConfig[column] === "desc" ? (
                        <Icon icon="arrow_downward" size="sm" />
                      ) : (
                        <Icon icon="swap_vert" size="sm" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {filteredData
                .slice(indexOfFirstItem, indexOfLastItem)
                .map((row) => (
                  <div className="data-table-wrapper">
                    <div
                      className="data-table-content-body"
                      style={calculateGridTemplate(selectable, expandable)}
                      key={row.id}
                    >
                      {expandable && (
                        <div
                          className={`data-table-content-body-expandable ${
                            expandedRows.includes(row.id) ? "up" : "down"
                          }`}
                          key={row.id}
                        >
                          <ButtonIcon
                            size="md"
                            type="plain"
                            typeIcon="keyboard_arrow_down"
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
                      <div className="data-table-content-expandable">
                        <div className="space-expanded-content" />
                        <div className="expanded-content">
                          {expandedData
                            .filter(
                              (expandedItem) => expandedItem.id === row.id,
                            )
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
                  </div>
                ))}
            </>
          ) : hasSelectedFilters || searchTerm ? (
            renderNoDataFilteredMessage()
          ) : (
            renderNoDataMessage()
          )}
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
