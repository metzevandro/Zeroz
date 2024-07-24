"use client";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
import React, { useState, useEffect, useRef } from "react";
import InputSearch from "../InputSearch/InputSearch";
import Button from "../Button/Button";
import Pagination from "../Pagination/Pagination";
import InputCheckbox from "../InputCheckbox/InputCheckbox";
import "../DataTable/DataTable.scss";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import EmptyState from "../EmptyState/EmptyState";
import Icon from "../Icon/Icon";
import Modal, { FooterModal } from "../Modal/Modal";
var DataTable = function (_a) {
  var columns = _a.columns,
    originalData = _a.data,
    expandable = _a.expandable,
    selectable = _a.selectable,
    expandedData = _a.expandedData,
    itemPerPage = _a.itemPerPage,
    inputPlaceholder = _a.inputPlaceholder,
    selectableLabelSecondButton = _a.selectableLabelSecondButton,
    labelSecondButton = _a.labelSecondButton,
    typeIconSecondButton = _a.typeIconSecondButton,
    titleNoDataMessage = _a.titleNoDataMessage,
    labelButtonNoDataFilteredMessage = _a.labelButtonNoDataFilteredMessage,
    descriptionNoDataMessage = _a.descriptionNoDataMessage,
    selectableIconSecondButton = _a.selectableIconSecondButton,
    filters = _a.filters,
    titleNoDataFilteredMessage = _a.titleNoDataFilteredMessage,
    descriptionNoDataFilteredMessage = _a.descriptionNoDataFilteredMessage,
    pagesText = _a.pagesText;
  var _b = useState(1),
    currentPage = _b[0],
    setCurrentPage = _b[1];
  var itemsPerPage = itemPerPage;
  var _c = useState(originalData),
    filteredData = _c[0],
    setFilteredData = _c[1];
  var _d = useState(0),
    totalPages = _d[0],
    setTotalPages = _d[1];
  useEffect(
    function () {
      setFilteredData(originalData);
      var totalPages = Math.ceil(originalData.length / itemsPerPage);
      setTotalPages(totalPages);
    },
    [originalData, itemsPerPage],
  );
  var label =
    filteredData.length > 0
      ? "".concat(pagesText, " ").concat(currentPage, " - ").concat(totalPages)
      : "".concat(pagesText, " 0 - 0");
  var handleNextPage = function () {
    setCurrentPage(function (prevPage) {
      var nextPage = prevPage + 1;
      return nextPage > totalPages ? prevPage : nextPage;
    });
  };
  var handlePrevPage = function () {
    setCurrentPage(function (prevPage) {
      var newPage = prevPage - 1;
      return newPage < 1 ? prevPage : newPage;
    });
  };
  useEffect(
    function () {
      var totalPages = Math.ceil(filteredData.length / itemsPerPage);
      setTotalPages(totalPages);
    },
    [originalData, itemsPerPage, filteredData],
  );
  var _e = useState(originalData),
    originalDataState = _e[0],
    setOriginalDataState = _e[1];
  var _f = useState(false),
    selectAll = _f[0],
    setSelectAll = _f[1];
  var _g = useState([]),
    selectedRows = _g[0],
    setSelectedRows = _g[1];
  var _h = useState([]),
    expandedRows = _h[0],
    setExpandedRows = _h[1];
  var _j = useState(false),
    isAnyItemSelected = _j[0],
    setIsAnyItemSelected = _j[1];
  var _k = useState(""),
    searchTerm = _k[0],
    setSearchTerm = _k[1];
  var _l = useState(false),
    contentOverflowed = _l[0],
    setContentOverflowed = _l[1];
  var contentRef = useRef(null);
  var _m = useState(false),
    isOpenAside = _m[0],
    setIsOpenAside = _m[1];
  var _o = useState(
      columns.reduce(function (acc, column) {
        var _a;
        return __assign(__assign({}, acc), ((_a = {}), (_a[column] = []), _a));
      }, {}),
    ),
    filterOptions = _o[0],
    setFilterOptions = _o[1];
  var indexOfLastItem = currentPage * itemsPerPage;
  var indexOfFirstItem = indexOfLastItem - itemsPerPage;
  var _p = useState(false),
    allItemsExpanded = _p[0],
    setAllItemsExpanded = _p[1];
  useEffect(
    function () {
      setIsAnyItemSelected(selectedRows.length > 0);
      setSelectAll(selectedRows.length === filteredData.length);
    },
    [selectedRows, filteredData],
  );
  useEffect(function () {
    var checkOverflow = function () {
      var contentElement = contentRef.current;
      if (contentElement) {
        setContentOverflowed(
          contentElement.scrollWidth > contentElement.clientWidth,
        );
      }
    };
    var resizeObserver = new ResizeObserver(function () {
      checkOverflow();
    });
    var contentElement = contentRef.current;
    if (contentElement) {
      resizeObserver.observe(contentElement);
      checkOverflow();
    }
    return function () {
      if (contentElement) {
        resizeObserver.unobserve(contentElement);
      }
    };
  }, []);
  var toggleSelectAll = function () {
    var allIds = filteredData.map(function (item) {
      return item.id;
    });
    if (isAllSelected()) {
      setSelectAll(false);
      setSelectedRows([]);
    } else {
      setSelectAll(true);
      setSelectedRows(allIds);
    }
  };
  var isAllSelected = function () {
    var allIds = filteredData.map(function (item) {
      return item.id;
    });
    return selectedRows.length === allIds.length;
  };
  var toggleSelectRow = function (rowId) {
    if (selectedRows.includes(rowId)) {
      setSelectedRows(
        selectedRows.filter(function (id) {
          return id !== rowId;
        }),
      );
      setSelectAll(false);
    } else {
      setSelectedRows(
        __spreadArray(__spreadArray([], selectedRows, true), [rowId], false),
      );
      if (isAllSelected()) {
        setSelectAll(true);
      }
    }
  };
  var isIndeterminate =
    selectedRows.length > 0 &&
    selectedRows.length < filteredData.length &&
    !selectAll;
  function calculateGridTemplate(selectable, expandable) {
    if (selectable === void 0) {
      selectable = false;
    }
    if (expandable === void 0) {
      expandable = false;
    }
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
  function calculateLeft(selectable, expandable) {
    if (selectable === void 0) {
      selectable = false;
    }
    if (expandable === void 0) {
      expandable = false;
    }
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
  function calculateLeftToCheckBox(expandable) {
    if (expandable === void 0) {
      expandable = false;
    }
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
  useEffect(
    function () {
      setIsAnyItemSelected(selectedRows.length > 0);
    },
    [selectedRows],
  );
  var toggleAside = function () {
    setIsOpenAside(!isOpenAside);
  };
  var _q = useState(false),
    isOpen = _q[0],
    setIsOpen = _q[1];
  var removeRow = function () {
    var updatedOriginalData = originalDataState.filter(function (item) {
      return !selectedRows.includes(item.id);
    });
    var updatedFilteredData = filteredData.filter(function (item) {
      return !selectedRows.includes(item.id);
    });
    setFilteredData(updatedFilteredData);
    setSelectedRows([]);
    setIsOpen(false);
    // Atualiza os dados originais sem as linhas removidas
    setOriginalDataState(updatedOriginalData);
  };
  var toggleModal = function () {
    setIsOpen(function (prevIsOpen) {
      return !prevIsOpen;
    });
  };
  var exportSelectedRowsAsCSV = function () {
    // Filter selected rows from the original data
    var selectedData = originalData.filter(function (row) {
      return selectedRows.includes(row.id);
    });
    // Extract column names
    var columnNames = columns;
    // Create the CSV content
    var csvContent = selectedData
      .map(function (row) {
        return columnNames
          .map(function (column) {
            return row[column];
          })
          .join(",");
      })
      .join("\n");
    // Add column names as the header
    var csvData = columnNames.join(",") + "\n" + csvContent;
    // Create a blob with the CSV data
    var csvBlob = new Blob([csvData], {
      type: "text/csv",
    });
    // Create a temporary URL for downloading
    var csvURL = window.URL.createObjectURL(csvBlob);
    // Create an anchor element for initiating the download
    var downloadLink = document.createElement("a");
    downloadLink.href = csvURL;
    downloadLink.download = "selected_data.csv";
    // Simulate a click to trigger the download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    // Clean up by removing the temporary URL and anchor element
    window.URL.revokeObjectURL(csvURL);
    document.body.removeChild(downloadLink);
  };
  var renderHeader = function () {
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
              <p>
                {""
                  .concat(selectedRows.length, " item")
                  .concat(selectedRows.length >= 2 ? "s" : "", " selected")}
              </p>
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
        {filters && (
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
  var handleExpandRow = function (rowId) {
    if (expandedRows.includes(rowId)) {
      setExpandedRows(
        expandedRows.filter(function (id) {
          return id !== rowId;
        }),
      );
      setAllItemsExpanded(false);
    } else {
      setExpandedRows(
        __spreadArray(__spreadArray([], expandedRows, true), [rowId], false),
      );
      if (expandedRows.length + 1 === filteredData.length) {
        setAllItemsExpanded(true);
      }
    }
  };
  var toggleExpandAllRows = function () {
    if (allItemsExpanded) {
      setExpandedRows([]);
      setAllItemsExpanded(false);
    } else {
      var allIds = filteredData.map(function (item) {
        return item.id;
      });
      setExpandedRows(allIds);
      setAllItemsExpanded(true);
    }
  };
  var handleSearchChange = function (value) {
    setSearchTerm(value);
    var searchedData = __spreadArray([], originalData, true);
    if (value.trim() !== "") {
      searchedData = searchedData.filter(function (item) {
        return Object.values(item).some(function (val) {
          return typeof val === "string" ? val.includes(value) : false;
        });
      });
    }
    Object.entries(filterOptions).forEach(function (_a) {
      var columnName = _a[0],
        selectedValues = _a[1];
      if (selectedValues.length > 0) {
        searchedData = searchedData.filter(function (item) {
          return selectedValues.includes(String(item[columnName]));
        });
      }
    });
    setFilteredData(searchedData);
  };
  var DEFAULT_SORT_STATE = "default";
  var initialSortConfig = columns.reduce(function (acc, column) {
    var _a;
    return __assign(
      __assign({}, acc),
      ((_a = {}), (_a[column] = DEFAULT_SORT_STATE), _a),
    );
  }, {});
  var _r = useState(initialSortConfig),
    sortConfig = _r[0],
    setSortConfig = _r[1];
  var handleSort = function (column) {
    var _a;
    var currentSortState = sortConfig[column];
    var nextSortState;
    if (currentSortState === "asc") {
      nextSortState = "desc";
    } else if (currentSortState === "desc") {
      nextSortState = "default";
    } else {
      nextSortState = "asc";
    }
    var updatedSortConfig = __assign(
      __assign({}, initialSortConfig),
      ((_a = {}), (_a[column] = nextSortState), _a),
    );
    setSortConfig(updatedSortConfig);
    var sortedData = __spreadArray([], filteredData, true);
    if (nextSortState !== "default") {
      sortedData = sortedData.sort(function (a, b) {
        if (nextSortState === "asc") {
          return a[column] > b[column] ? 1 : -1;
        } else if (nextSortState === "desc") {
          return a[column] < b[column] ? 1 : -1;
        }
        return 0;
      });
    } else {
      if (
        Object.values(filterOptions).some(function (options) {
          return options.length > 0;
        })
      ) {
        var filteredOriginalData_1 = __spreadArray([], originalDataState, true);
        Object.entries(filterOptions).forEach(function (_a) {
          var filterColumn = _a[0],
            selectedValues = _a[1];
          if (selectedValues.length > 0) {
            filteredOriginalData_1 = filteredOriginalData_1.filter(
              function (item) {
                return selectedValues.includes(String(item[filterColumn]));
              },
            );
          }
        });
        sortedData = filteredOriginalData_1.sort(function (a, b) {
          if (a[column] > b[column]) return 1;
          if (a[column] < b[column]) return -1;
          return 0;
        });
      } else {
        sortedData = __spreadArray([], originalDataState, true);
      }
    }
    setFilteredData(sortedData);
  };
  useEffect(
    function () {
      var defaultSortConfig = columns.reduce(function (acc, column) {
        var _a;
        return __assign(
          __assign({}, acc),
          ((_a = {}), (_a[column] = DEFAULT_SORT_STATE), _a),
        );
      }, {});
      setSortConfig(defaultSortConfig);
    },
    [filterOptions],
  );
  var handleClearFilters = function () {
    var updatedFilteredData = __spreadArray([], originalData, true);
    var updatedFilterOptions = columns.reduce(function (acc, column) {
      var _a;
      return __assign(__assign({}, acc), ((_a = {}), (_a[column] = []), _a));
    }, {});
    setFilteredData(updatedFilteredData);
    setFilterOptions(updatedFilterOptions);
    setSearchTerm("");
  };
  var renderNoDataMessage = function () {
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
  var renderNoDataFilteredMessage = function () {
    return (
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
  };
  var hasSelectedFilters = Object.values(filterOptions).some(
    function (options) {
      return options.length > 0;
    },
  );
  return (
    <>
      <div className="data-table-root">
        {renderHeader()}
        <div
          ref={contentRef}
          className={"data-table-content ".concat(
            contentOverflowed ? "overflowed" : "",
          )}
        >
          {filteredData.length > 0 ? (
            <>
              <div
                className="data-table-content-header"
                style={calculateGridTemplate(selectable, expandable)}
              >
                {expandable && (
                  <div
                    className={"data-table-content-header-expandable ".concat(
                      allItemsExpanded ? "up" : "down",
                    )}
                  >
                    <ButtonIcon
                      size="md"
                      buttonType="plain"
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
                      modelValue={selectAll}
                      onUpdate={toggleSelectAll}
                      indeterminate={isIndeterminate}
                    />
                  </div>
                )}

                {columns.map(function (column, columnIndex) {
                  return (
                    <div
                      className={"th ".concat(
                        columnIndex === 0 ? "sticky-first-column" : "",
                      )}
                      style={calculateLeft(selectable, expandable)}
                      key={columnIndex}
                      onClick={function () {
                        return handleSort(column);
                      }}
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
                  );
                })}
              </div>
              {filteredData
                .slice(indexOfFirstItem, indexOfLastItem)
                .map(function (row) {
                  return (
                    <div className="data-table-wrapper">
                      <div
                        className="data-table-content-body"
                        style={calculateGridTemplate(selectable, expandable)}
                        key={row.id}
                      >
                        {expandable && (
                          <div
                            className={"data-table-content-body-expandable ".concat(
                              expandedRows.includes(row.id) ? "up" : "down",
                            )}
                            key={row.id}
                          >
                            <ButtonIcon
                              size="md"
                              buttonType="plain"
                              typeIcon="keyboard_arrow_down"
                              variant="primary"
                              onClick={function () {
                                return handleExpandRow(row.id);
                              }}
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
                              modelValue={selectedRows.includes(row.id)}
                              onUpdate={function () {
                                return toggleSelectRow(row.id);
                              }}
                            />
                          </div>
                        )}
                        {columns.map(function (_, columnIndex) {
                          return (
                            <div
                              key={columnIndex}
                              className={"fixed ".concat(
                                columnIndex === 0 ? "sticky-first-column" : "",
                              )}
                              style={calculateLeft(selectable, expandable)}
                            >
                              <div key={row.id}>
                                <div className="td" key={row.id}>
                                  {row[columns[columnIndex]]}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      {expandedRows.includes(row.id) && expandedData && (
                        <div className="data-table-content-expandable">
                          <div className="space-expanded-content" />
                          <div className="expanded-content">
                            {expandedData
                              .filter(function (expandedItem) {
                                return expandedItem.id === row.id;
                              })
                              .map(function (expandedItem) {
                                return (
                                  <div key={expandedItem.id}>
                                    {Object.keys(expandedItem)
                                      .filter(function (key) {
                                        return key !== "id";
                                      })
                                      .map(function (key) {
                                        return (
                                          <div key={key}>
                                            {expandedItem[key]}
                                          </div>
                                        );
                                      })}
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
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
