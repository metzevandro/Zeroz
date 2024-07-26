"use strict";
"use client";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _InputSearch = _interopRequireDefault(require("../InputSearch/InputSearch"));
var _Button = _interopRequireDefault(require("../Button/Button"));
var _Pagination = _interopRequireDefault(require("../Pagination/Pagination"));
var _InputCheckbox = _interopRequireDefault(require("../InputCheckbox/InputCheckbox"));
require("../DataTable/DataTable.scss");
var _ButtonIcon = _interopRequireDefault(require("../ButtonIcon/ButtonIcon"));
var _ButtonGroup = _interopRequireDefault(require("../ButtonGroup/ButtonGroup"));
var _EmptyState = _interopRequireDefault(require("../EmptyState/EmptyState"));
var _Icon = _interopRequireDefault(require("../Icon/Icon"));
var _Modal = _interopRequireWildcard(require("../Modal/Modal"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var DataTable = function DataTable(_ref) {
  var columns = _ref.columns,
    originalData = _ref.data,
    expandable = _ref.expandable,
    selectable = _ref.selectable,
    expandedData = _ref.expandedData,
    itemPerPage = _ref.itemPerPage,
    inputPlaceholder = _ref.inputPlaceholder,
    selectableLabelSecondButton = _ref.selectableLabelSecondButton,
    labelSecondButton = _ref.labelSecondButton,
    typeIconSecondButton = _ref.typeIconSecondButton,
    titleNoDataMessage = _ref.titleNoDataMessage,
    labelButtonNoDataFilteredMessage = _ref.labelButtonNoDataFilteredMessage,
    descriptionNoDataMessage = _ref.descriptionNoDataMessage,
    selectableIconSecondButton = _ref.selectableIconSecondButton,
    filters = _ref.filters,
    titleNoDataFilteredMessage = _ref.titleNoDataFilteredMessage,
    descriptionNoDataFilteredMessage = _ref.descriptionNoDataFilteredMessage,
    pagesText = _ref.pagesText;
  var _useState = (0, _react.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    currentPage = _useState2[0],
    setCurrentPage = _useState2[1];
  var itemsPerPage = itemPerPage;
  var _useState3 = (0, _react.useState)(originalData),
    _useState4 = _slicedToArray(_useState3, 2),
    filteredData = _useState4[0],
    setFilteredData = _useState4[1];
  var _useState5 = (0, _react.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    totalPages = _useState6[0],
    setTotalPages = _useState6[1];
  (0, _react.useEffect)(function () {
    setFilteredData(originalData);
    var totalPages = Math.ceil(originalData.length / itemsPerPage);
    setTotalPages(totalPages);
  }, [originalData, itemsPerPage]);
  var label = filteredData.length > 0 ? "".concat(pagesText, " ").concat(currentPage, " - ").concat(totalPages) : "".concat(pagesText, " 0 - 0");
  var handleNextPage = function handleNextPage() {
    setCurrentPage(function (prevPage) {
      var nextPage = prevPage + 1;
      return nextPage > totalPages ? prevPage : nextPage;
    });
  };
  var handlePrevPage = function handlePrevPage() {
    setCurrentPage(function (prevPage) {
      var newPage = prevPage - 1;
      return newPage < 1 ? prevPage : newPage;
    });
  };
  (0, _react.useEffect)(function () {
    var totalPages = Math.ceil(filteredData.length / itemsPerPage);
    setTotalPages(totalPages);
  }, [originalData, itemsPerPage, filteredData]);
  var _useState7 = (0, _react.useState)(originalData),
    _useState8 = _slicedToArray(_useState7, 2),
    originalDataState = _useState8[0],
    setOriginalDataState = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    selectAll = _useState10[0],
    setSelectAll = _useState10[1];
  var _useState11 = (0, _react.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    selectedRows = _useState12[0],
    setSelectedRows = _useState12[1];
  var _useState13 = (0, _react.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    expandedRows = _useState14[0],
    setExpandedRows = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isAnyItemSelected = _useState16[0],
    setIsAnyItemSelected = _useState16[1];
  var _useState17 = (0, _react.useState)(""),
    _useState18 = _slicedToArray(_useState17, 2),
    searchTerm = _useState18[0],
    setSearchTerm = _useState18[1];
  var _useState19 = (0, _react.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    contentOverflowed = _useState20[0],
    setContentOverflowed = _useState20[1];
  var contentRef = (0, _react.useRef)(null);
  var _useState21 = (0, _react.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    isOpenAside = _useState22[0],
    setIsOpenAside = _useState22[1];
  var _useState23 = (0, _react.useState)(columns.reduce(function (acc, column) {
      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, column, []));
    }, {})),
    _useState24 = _slicedToArray(_useState23, 2),
    filterOptions = _useState24[0],
    setFilterOptions = _useState24[1];
  var indexOfLastItem = currentPage * itemsPerPage;
  var indexOfFirstItem = indexOfLastItem - itemsPerPage;
  var _useState25 = (0, _react.useState)(false),
    _useState26 = _slicedToArray(_useState25, 2),
    allItemsExpanded = _useState26[0],
    setAllItemsExpanded = _useState26[1];
  (0, _react.useEffect)(function () {
    setIsAnyItemSelected(selectedRows.length > 0);
    setSelectAll(selectedRows.length === filteredData.length);
  }, [selectedRows, filteredData]);
  (0, _react.useEffect)(function () {
    var checkOverflow = function checkOverflow() {
      var contentElement = contentRef.current;
      if (contentElement) {
        setContentOverflowed(contentElement.scrollWidth > contentElement.clientWidth);
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
  var toggleSelectAll = function toggleSelectAll() {
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
  var isAllSelected = function isAllSelected() {
    var allIds = filteredData.map(function (item) {
      return item.id;
    });
    return selectedRows.length === allIds.length;
  };
  var toggleSelectRow = function toggleSelectRow(rowId) {
    if (selectedRows.includes(rowId)) {
      setSelectedRows(selectedRows.filter(function (id) {
        return id !== rowId;
      }));
      setSelectAll(false);
    } else {
      setSelectedRows([].concat(_toConsumableArray(selectedRows), [rowId]));
      if (isAllSelected()) {
        setSelectAll(true);
      }
    }
  };
  var isIndeterminate = selectedRows.length > 0 && selectedRows.length < filteredData.length && !selectAll;
  function calculateGridTemplate() {
    var selectable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var expandable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (selectable && expandable) {
      return {
        gridTemplateColumns: "56px 56px repeat(auto-fit, minmax(120px, 1fr))"
      };
    } else if (selectable || expandable) {
      return {
        gridTemplateColumns: "56px repeat(auto-fit, minmax(120px, 1fr))"
      };
    } else {
      return {};
    }
  }
  function calculateLeft() {
    var selectable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var expandable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (selectable && expandable) {
      return {
        left: "112px"
      };
    } else if (selectable || expandable) {
      return {
        left: "56px"
      };
    } else {
      return {
        left: "0px"
      };
    }
  }
  function calculateLeftToCheckBox() {
    var expandable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (expandable) {
      return {
        left: "56px"
      };
    } else {
      return {
        left: "0px"
      };
    }
  }
  (0, _react.useEffect)(function () {
    setIsAnyItemSelected(selectedRows.length > 0);
  }, [selectedRows]);
  var toggleAside = function toggleAside() {
    setIsOpenAside(!isOpenAside);
  };
  var _useState27 = (0, _react.useState)(false),
    _useState28 = _slicedToArray(_useState27, 2),
    isOpen = _useState28[0],
    setIsOpen = _useState28[1];
  var removeRow = function removeRow() {
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
  var toggleModal = function toggleModal() {
    setIsOpen(function (prevIsOpen) {
      return !prevIsOpen;
    });
  };
  var exportSelectedRowsAsCSV = function exportSelectedRowsAsCSV() {
    // Filter selected rows from the original data
    var selectedData = originalData.filter(function (row) {
      return selectedRows.includes(row.id);
    });

    // Extract column names
    var columnNames = columns;

    // Create the CSV content
    var csvContent = selectedData.map(function (row) {
      return columnNames.map(function (column) {
        return row[column];
      }).join(",");
    }).join("\n");

    // Add column names as the header
    var csvData = columnNames.join(",") + "\n" + csvContent;

    // Create a blob with the CSV data
    var csvBlob = new Blob([csvData], {
      type: "text/csv"
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
  var renderHeader = function renderHeader() {
    if (isAnyItemSelected) {
      return <>
          <_Modal.default footer={<_Modal.FooterModal>
                <div style={{
            width: "min-content"
          }}>
                  <_ButtonGroup.default contentFirstButton="Delete" contentSecondButton="Cancel" direction="row" variantFirstButton="warning" variantSecondButton="secondary" onClickFirstButton={removeRow} onClickSecondButton={toggleModal} />
                </div>
              </_Modal.FooterModal>} description="Are you sure that you want delete this row?" dismissible={true} title="Delete" isOpen={isOpen} hideModal={toggleModal} />
          <div className="data-table-header-selected-items">
            <div className="data-table-header-selected-items-message">
              <p>{"".concat(selectedRows.length, " item").concat(selectedRows.length >= 2 ? "s" : "", " selected")}</p>
            </div>
            <div className="data-table-header-selected-items-buttons">
              <_Button.default size="md" variant="secondary" label="Export" onClick={exportSelectedRowsAsCSV} typeIcon="download" />
              <_Button.default size="md" variant="secondary" label={selectableLabelSecondButton} onClick={toggleModal} typeIcon={selectableIconSecondButton} />
            </div>
          </div>
        </>;
    } else {}
    return <div className="data-table-header">
        <_InputSearch.default placeholder={inputPlaceholder} onChange={handleSearchChange} />
        {filters && <div className="data-table-header-actions">
            <div style={{
          width: "100%"
        }}>
              <_Button.default variant="secondary" typeIcon={typeIconSecondButton} size="md" label={labelSecondButton} onClick={toggleAside} />
            </div>
          </div>}
      </div>;
  };
  var handleExpandRow = function handleExpandRow(rowId) {
    if (expandedRows.includes(rowId)) {
      setExpandedRows(expandedRows.filter(function (id) {
        return id !== rowId;
      }));
      setAllItemsExpanded(false);
    } else {
      setExpandedRows([].concat(_toConsumableArray(expandedRows), [rowId]));
      if (expandedRows.length + 1 === filteredData.length) {
        setAllItemsExpanded(true);
      }
    }
  };
  var toggleExpandAllRows = function toggleExpandAllRows() {
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
  var handleSearchChange = function handleSearchChange(value) {
    setSearchTerm(value);
    var searchedData = _toConsumableArray(originalData);
    if (value.trim() !== "") {
      searchedData = searchedData.filter(function (item) {
        return Object.values(item).some(function (val) {
          return typeof val === "string" ? val.includes(value) : false;
        });
      });
    }
    Object.entries(filterOptions).forEach(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
        columnName = _ref3[0],
        selectedValues = _ref3[1];
      if (selectedValues.length > 0) {
        searchedData = searchedData.filter(function (item) {
          return selectedValues.includes(String(item[columnName]));
        });
      }
    });
    setFilteredData(searchedData);
  };
  var DEFAULT_SORT_STATE = "default";
  var initialSortConfig = columns.length > 0 ? columns.reduce(function (acc, column) {
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, column, DEFAULT_SORT_STATE));
  }, {}) : {};
  var _useState29 = (0, _react.useState)(initialSortConfig),
    _useState30 = _slicedToArray(_useState29, 2),
    sortConfig = _useState30[0],
    setSortConfig = _useState30[1];
  var handleSort = function handleSort(column) {
    var currentSortState = sortConfig[column];
    var nextSortState;
    if (currentSortState === "asc") {
      nextSortState = "desc";
    } else if (currentSortState === "desc") {
      nextSortState = "default";
    } else {
      nextSortState = "asc";
    }
    var updatedSortConfig = _objectSpread(_objectSpread({}, initialSortConfig), {}, _defineProperty({}, column, nextSortState));
    setSortConfig(updatedSortConfig);
    var sortedData = _toConsumableArray(filteredData);
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
      if (Object.values(filterOptions).some(function (options) {
        return options.length > 0;
      })) {
        var filteredOriginalData = _toConsumableArray(originalDataState);
        Object.entries(filterOptions).forEach(function (_ref4) {
          var _ref5 = _slicedToArray(_ref4, 2),
            filterColumn = _ref5[0],
            selectedValues = _ref5[1];
          if (selectedValues.length > 0) {
            filteredOriginalData = filteredOriginalData.filter(function (item) {
              return selectedValues.includes(String(item[filterColumn]));
            });
          }
        });
        sortedData = filteredOriginalData.sort(function (a, b) {
          if (a[column] > b[column]) return 1;
          if (a[column] < b[column]) return -1;
          return 0;
        });
      } else {
        sortedData = _toConsumableArray(originalDataState);
      }
    }
    setFilteredData(sortedData);
  };
  (0, _react.useEffect)(function () {
    var defaultSortConfig = columns.reduce(function (acc, column) {
      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, column, DEFAULT_SORT_STATE));
    }, {});
    setSortConfig(defaultSortConfig);
  }, [filterOptions]);
  var handleClearFilters = function handleClearFilters() {
    var updatedFilteredData = _toConsumableArray(originalData);
    var updatedFilterOptions = columns.reduce(function (acc, column) {
      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, column, []));
    }, {});
    setFilteredData(updatedFilteredData);
    setFilterOptions(updatedFilterOptions);
    setSearchTerm("");
  };
  var renderNoDataMessage = function renderNoDataMessage() {
    return <div className="render-no-data-message">
        <_EmptyState.default icon="search_off" title={titleNoDataMessage} description={descriptionNoDataMessage} />
      </div>;
  };
  var renderNoDataFilteredMessage = function renderNoDataFilteredMessage() {
    return <div className="render-no-data-message">
      <_EmptyState.default icon="search_off" title={titleNoDataFilteredMessage} description={descriptionNoDataFilteredMessage} buttonContentPrimary={labelButtonNoDataFilteredMessage} onClickActionPrimary={handleClearFilters} />
    </div>;
  };
  var hasSelectedFilters = Object.values(filterOptions).some(function (options) {
    return options.length > 0;
  });
  return <>
      <div className="data-table-root">
        {renderHeader()}
        <div ref={contentRef} className={"data-table-content ".concat(contentOverflowed ? "overflowed" : "")}>
          {filteredData.length > 0 ? <>
              <div className="data-table-content-header" style={calculateGridTemplate(selectable, expandable)}>
                {expandable && <div className={"data-table-content-header-expandable ".concat(allItemsExpanded ? "up" : "down")}>
                    <_ButtonIcon.default size="md" buttonType="plain" typeIcon="keyboard_arrow_down" variant="primary" onClick={toggleExpandAllRows} />
                  </div>}
                {selectable && <div className="data-table-content-header-checkbox" style={calculateLeftToCheckBox(expandable)}>
                    <_InputCheckbox.default modelValue={selectAll} onUpdate={toggleSelectAll} indeterminate={isIndeterminate} />
                  </div>}

                {columns.map(function (column, columnIndex) {
              return <div className={"th ".concat(columnIndex === 0 ? "sticky-first-column" : "")} style={calculateLeft(selectable, expandable)} key={columnIndex} onClick={function () {
                return handleSort(column);
              }}>
                    {column}
                    <div className="icon">
                      {sortConfig[column] === "asc" ? <_Icon.default icon="arrow_upward" size="sm" /> : sortConfig[column] === "desc" ? <_Icon.default icon="arrow_downward" size="sm" /> : <_Icon.default icon="swap_vert" size="sm" />}
                    </div>
                  </div>;
            })}
              </div>
              {filteredData.slice(indexOfFirstItem, indexOfLastItem).map(function (row) {
            return <div className="data-table-wrapper">
                    <div className="data-table-content-body" style={calculateGridTemplate(selectable, expandable)} key={row.id}>
                      {expandable && <div className={"data-table-content-body-expandable ".concat(expandedRows.includes(row.id) ? "up" : "down")} key={row.id}>
                          <_ButtonIcon.default size="md" buttonType="plain" typeIcon="keyboard_arrow_down" variant="primary" onClick={function () {
                    return handleExpandRow(row.id);
                  }} />
                        </div>}
                      {selectable && <div className="data-table-content-body-checkbox" style={calculateLeftToCheckBox(expandable)} key={row.id}>
                          <_InputCheckbox.default modelValue={selectedRows.includes(row.id)} onUpdate={function () {
                    return toggleSelectRow(row.id);
                  }} />
                        </div>}
                      {columns.map(function (_, columnIndex) {
                  return <div key={columnIndex} className={"fixed ".concat(columnIndex === 0 ? "sticky-first-column" : "")} style={calculateLeft(selectable, expandable)}>
                          <div key={row.id}>
                            <div className="td" key={row.id}>
                              {row[Number(columnIndex)]}
                            </div>
                          </div>
                        </div>;
                })}
                    </div>
                    {expandedRows.includes(row.id) && expandedData && <div className="data-table-content-expandable">
                        <div className="space-expanded-content" />
                        <div className="expanded-content">
                          {expandedData.filter(function (expandedItem) {
                    return expandedItem.id === row.id;
                  }).map(function (expandedItem) {
                    return <div key={expandedItem.id}>
                                {Object.keys(expandedItem).filter(function (key) {
                        return key !== "id";
                      }).map(function (key) {
                        return <div key={key}>{expandedItem[key]}</div>;
                      })}
                              </div>;
                  })}
                        </div>
                      </div>}
                  </div>;
          })}
            </> : hasSelectedFilters || searchTerm ? renderNoDataFilteredMessage() : renderNoDataMessage()}
        </div>
        <div className="data-table-footer">
          <_Pagination.default label={label} variant="leftLabel" onClickRight={handleNextPage} onClickLeft={handlePrevPage} />
        </div>
      </div>
    </>;
};
var _default = exports["default"] = DataTable;