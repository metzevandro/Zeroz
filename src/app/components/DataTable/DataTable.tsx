import React, { useState, useEffect, useRef } from "react";
import InputSearch from "../InputSearch/InputSearch";
import Button from "../Button/Button";
import { Pagination } from "../Pagination/Pagination";
import { InputCheckbox } from "../InputCheckbox/InputCheckbox";
import "../DataTable/DataTable.scss";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import Aside, { AsideContent, AsideFooter } from "../Aside/Aside";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import EmptyState from "../EmptyState/EmptyState";
import { DropDownMenu, DropDownMenuItem } from "../DropdownMenu/DropdownMenu";
import Icon from "../Icon/Icon";
import { Tag } from "../Tag/Tag";

interface DataTableProps {
  columns: string[];
  data: { id: string; [key: string]: any }[];
  expandedData?: Array<{ id: string; [key: string]: React.ReactNode }>;
  selectable?: boolean;
  expandable?: boolean;
  itemPerPage: number;
  inputPlaceholder: string;
  typeIconFirstButton: string;
  typeIconSecondButton: string;
  labelFirstButton: string;
  labelSecondButton: string;
  selectableLabelFirstButton: string;
  selectableLabelSecondButton: string;
  selectableOnClickFirstButton?: () => void;
  selectableOnClickSecondButton?: () => void;
  firstButtonLabelAside: string;
  secondButtonLabelAside: string;
  titleNoDataMessage: string;
  labelButtonNoDataMessage: string;
  descriptionNoDataMessage: string;
  asideTitle: string;
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
  selectableLabelFirstButton,
  selectableLabelSecondButton,
  selectableOnClickFirstButton,
  selectableOnClickSecondButton,
  labelSecondButton,
  typeIconSecondButton,
  firstButtonLabelAside,
  secondButtonLabelAside,
  titleNoDataMessage,
  labelButtonNoDataMessage,
  descriptionNoDataMessage,
  asideTitle,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [isAnyItemSelected, setIsAnyItemSelected] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] =
    useState<{ id: string; [key: string]: any }[]>(originalData);
  const [expandedRows, setExpandedRows] = useState<string[]>([]);
  const [contentOverflowed, setContentOverflowed] = useState<boolean>(false);

  const contentRef = useRef<HTMLDivElement>(null);

  const [isOpenAside, setIsOpenAside] = useState(false);
  const [filterOptions, setFilterOptions] = useState<{
    [key: string]: string[];
  }>(columns.reduce((acc, column) => ({ ...acc, [column]: [] }), {}));

  const [selectedTags, setSelectedTags] = useState<{ [key: string]: string[] }>(
    columns.reduce((acc, column) => ({ ...acc, [column]: [] }), {})
  );

  const itemsPerPage = itemPerPage;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const [allItemsExpanded, setAllItemsExpanded] = useState<boolean>(false);

  useEffect(() => {
    setIsAnyItemSelected(selectedRows.length > 0);
    setSelectAll(selectedRows.length === filteredData.length);
  }, [selectedRows, filteredData]);

  useEffect(() => {
    setFilteredData(originalData);
  }, [originalData]);

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
  }, []);

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

  useEffect(() => {
    setIsAnyItemSelected(selectedRows.length > 0);
  }, [selectedRows]);

  const toggleAside = () => {
    setIsOpenAside(!isOpenAside);
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
              label={selectableLabelFirstButton}
              onClick={selectableOnClickFirstButton}
            />
            <Button
              size="md"
              variant="secondary"
              label={selectableLabelSecondButton}
              onClick={selectableOnClickSecondButton}
            />
          </div>
        </div>
      );
    } else {
    }

    return (
      <div className="data-table-header">
        <InputSearch
          placeholder={inputPlaceholder}
          onChange={handleSearchChange}
        />
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
    // Remove a tag do array de tags selecionadas
    const updatedSelectedTags = {
      ...selectedTags,
      [columnName]: selectedTags[columnName].filter(
        (tag) => !tags.includes(tag)
      ),
    };

    // Atualiza os filtros removendo os valores das tags
    const updatedFilterOptions = {
      ...filterOptions,
      [columnName]: filterOptions[columnName].filter(
        (option) => !tags.includes(option)
      ),
    };

    // Define os novos filtros
    setFilterOptions(updatedFilterOptions);

    // Aplica os filtros restantes aos dados originais
    let filteredData = [...originalData];
    Object.entries(updatedFilterOptions).forEach(([column, selectedValues]) => {
      if (selectedValues.length > 0) {
        filteredData = filteredData.filter((item) =>
          selectedValues.includes(String(item[column]))
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
          (item) => item !== value
        );
      } else {
        newFilterOptions[columnName] = [...newFilterOptions[columnName], value];
      }

      return newFilterOptions;
    });
  };

  const applyFilters = () => {
    let filteredData = [...originalData];
    const newSelectedTags: { [key: string]: string[] } = {};

    Object.entries(filterOptions).forEach(([columnName, selectedValues]) => {
      if (selectedValues.length > 0) {
        filteredData = filteredData.filter((item) =>
          selectedValues.includes(String(item[columnName]))
        );
        newSelectedTags[columnName] = selectedValues;
      }
    });

    setIsOpenAside(!isOpenAside);
    setFilteredData(filteredData);
    setCurrentPage(1);
    setSelectedTags(newSelectedTags);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);

    let searchedData = [...originalData];

    // Aplicar pesquisa ao conjunto de dados original
    if (value.trim() !== "") {
      searchedData = searchedData.filter((item) => {
        return Object.values(item).some((val) =>
          typeof val === "string" ? val.includes(value) : false
        );
      });
    }

    // Aplicar filtros selecionados ao conjunto de dados pesquisados
    Object.entries(filterOptions).forEach(([columnName, selectedValues]) => {
      if (selectedValues.length > 0) {
        searchedData = searchedData.filter((item) =>
          selectedValues.includes(String(item[columnName]))
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
    {}
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
      if (Object.values(filterOptions).some((options) => options.length > 0)) {
        sortedData = filteredData.slice().sort((a, b) => {
          const indexA = originalData.findIndex((item) => item.id === a.id);
          const indexB = originalData.findIndex((item) => item.id === b.id);
          return indexA - indexB;
        });
      } else {
        sortedData = [...originalData];
      }
    }

    setFilteredData(sortedData);
  };

  useEffect(() => {
    // Reset sortConfig to default state when filters are applied
    const defaultSortConfig: SortConfig = columns.reduce(
      (acc, column) => ({ ...acc, [column]: DEFAULT_SORT_STATE }),
      {}
    );
    setSortConfig(defaultSortConfig);
  }, [filterOptions]);

  const handleClearFilters = () => {
    setSearchTerm("");
    setFilterOptions(
      columns.reduce((acc, column) => ({ ...acc, [column]: [] }), {})
    );

    // Clear filters only if they are applied
    if (Object.values(filterOptions).some((options) => options.length > 0)) {
      setFilteredData(originalData);
    }

    setSelectedTags(
      columns.reduce((acc, column) => ({ ...acc, [column]: [] }), {})
    );
  };

  const renderNoDataMessage = () => (
    <div className="render-no-data-message">
      <EmptyState
        icon="search_off"
        title={titleNoDataMessage}
        description={descriptionNoDataMessage}
        buttonContentPrimary={labelButtonNoDataMessage}
        onClickActionPrimary={handleClearFilters}
      />
    </div>
  );

  return (
    <>
      <Aside
        isOpen={isOpenAside}
        title={asideTitle}
        toggleSidebar={toggleAside}
        content={
          <AsideContent>
            {columns.map((column, index) => {
              const uniqueValuesSet = new Set(
                originalData.map((item) => item[column])
              );
              const uniqueValuesArray = Array.from(uniqueValuesSet);
              const sortedValues = uniqueValuesArray.sort((a, b) => {
                if (!isNaN(a) && !isNaN(b)) {
                  return Number(a) - Number(b);
                } else {
                  return a.localeCompare(b);
                }
              });

              return (
                <div key={index} className="aside-filter">
                  <div className="aside-content-col">
                    <div className="aside-title-col">{column}</div>
                    {sortedValues.map((value, idx) => (
                      <div key={idx}>
                        <InputCheckbox
                          checked={filterOptions[column].includes(value)}
                          onChange={() => handleFilterChange(column, value)}
                          label={String(value)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
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
                )
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
                            .filter(
                              (expandedItem) => expandedItem.id === row.id
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
                  </>
                ))}
            </>
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
