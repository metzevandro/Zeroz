"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [9783],
  {
    "./src/app/components/DataTable/DataTable.mdx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          default: () => MDXContent,
        });
      __webpack_require__("./node_modules/next/dist/compiled/react/index.js");
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        C_Users_metzx_Desktop_ZeroZ_web_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),
        _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/@storybook/blocks/dist/index.mjs",
        ),
        _DataTable_stories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./src/app/components/DataTable/DataTable.stories.tsx",
        );
      function _createMdxContent(props) {
        const _components = {
          a: "a",
          code: "code",
          h1: "h1",
          h2: "h2",
          li: "li",
          p: "p",
          pre: "pre",
          ul: "ul",
          ...(0,
          C_Users_metzx_Desktop_ZeroZ_web_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),
          ...props.components,
        };
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,
          {
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,
                { of: _DataTable_stories__WEBPACK_IMPORTED_MODULE_2__ },
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components.h1,
                { id: "data-table", children: "Data Table" },
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components.h2,
                { id: "índice", children: "Índice" },
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                _components.ul,
                {
                  children: [
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components.li,
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                          _components.a,
                          {
                            href: "#vis%C3%A3o-geral",
                            children: "Visão Geral",
                          },
                        ),
                      },
                    ),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components.li,
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                          _components.a,
                          { href: "#como-usar", children: "Como usar" },
                        ),
                      },
                    ),
                    "\n",
                  ],
                },
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components.h2,
                { id: "visão-geral", children: "Visão Geral" },
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                _components.p,
                {
                  children: [
                    "O componente ",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components.code,
                      { children: "DataTable" },
                    ),
                    " ajuda a organizar e exibir informações de maneira fácil de entender. Você pode usar filtros e organizar o conteúdo para analisar e executar ações.",
                  ],
                },
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,
                {
                  additionalActions: [
                    {
                      title: "Open in Figma",
                      onClick: () => {
                        window.open(
                          "https://www.figma.com/file/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?type=design&node-id=2168-5730&mode=design&t=NEHn9Sk29i52RYc4-0",
                          "_blank",
                        );
                      },
                    },
                    {
                      title: "Open in GitHub",
                      onClick: () => {
                        window.open(
                          "https://github.com/metzevandro/Zeroz/blob/master/src/app/components/DataTable/DataTable.tsx",
                          "_blank",
                        );
                      },
                    },
                  ],
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gG,
                    {},
                  ),
                },
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.H2,
                {},
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components.h2,
                { id: "como-usar", children: "Como usar:" },
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components.pre,
                {
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    _components.code,
                    {
                      className: "language-tsx",
                      children:
                        'const columns: string[] = ["Name", "Age", "Role", "Experience", "Company"];\n\nconst data: { [key: string]: any; id: string }[] = [\n  {\n    id: "1",\n    Name: "David",\n    Age: "25",\n    Role: "Developer",\n    Experience: "4 years",\n    Company: "Google",\n  },\n  {\n    id: "2",\n    Name: "Maria",\n    Age: "30",\n    Role: "Designer",\n    Experience: "1 year",\n    Company: "Microsoft",\n  },\n  {\n    id: "3",\n    Name: "Carlos",\n    Age: "30",\n    Role: "Data Analyst",\n    Experience: "1 month",\n    Company: "Netflix",\n  },\n  {\n    id: "4",\n    Name: "Roberto",\n    Age: "21",\n    Role: "Product Owner",\n    Experience: "2 years",\n    Company: "Instagram",\n  },\n  {\n    id: "5",\n    Name: "Juliana",\n    Age: "27",\n    Role: "Software Engineer",\n    Experience: "3 years",\n    Company: "Amazon",\n  },\n  {\n    id: "6",\n    Name: "Ana",\n    Age: "29",\n    Role: "UX Designer",\n    Experience: "2 years",\n    Company: "Apple",\n  },\n  {\n    id: "7",\n    Name: "Pedro",\n    Age: "26",\n    Role: "Data Scientist",\n    Experience: "6 months",\n    Company: "Facebook",\n  },\n  {\n    id: "8",\n    Name: "Mariana",\n    Age: "24",\n    Role: "Project Manager",\n    Experience: "1 year",\n    Company: "Twitter",\n  },\n];\n\nconst expandedData: { [key: string]: any; id: string }[] = [\n  {\n    id: "1",\n    content: "First Content",\n  },\n  {\n    id: "2",\n    content: "Second Content",\n  },\n  {\n    id: "3",\n    content: "Third Content",\n  },\n  {\n    id: "4",\n    content: "Fourth Content",\n  },\n  {\n    id: "5",\n    content: "Fifth Content",\n  },\n  {\n    id: "6",\n    content: "Sixth Content",\n  },\n  {\n    id: "7",\n    content: "Seventh Content",\n  },\n  {\n    id: "8",\n    content: "Eighth Content",\n  },\n];\n\nconst availableFilters = {\n  Age: ["23", "24", "25", "26", "27", "28", "29", "30"],\n  Company: [\n    "Apple",\n    "Amazon",\n    "Google",\n    "Microsoft",\n    "Facebook",\n    "Netflix",\n    "Twitter",\n    "Walmart",\n  ],\n};\n\n<DataTable\n  itemPerPage={4}\n  pagesText="Page"\n  columns={columns}\n  data={data}\n  expandedData={expandedData}\n  selectable={false}\n  expandable={false}\n  inputPlaceholder="Search"\n  labelFirstButton="Order By"\n  labelSecondButton="Filter By"\n  typeIconSecondButton="filter_alt"\n  selectableLabelSecondButton="Delete"\n  selectableIconSecondButton="delete"\n  asideTitle="Filters"\n  firstButtonLabelAside="Apply"\n  secondButtonLabelAside="Cancel"\n  descriptionNoDataFilteredMessage="This option does not exist in your store, remove the filter and try again."\n  labelButtonNoDataFilteredMessage="Remove filters"\n  titleNoDataFilteredMessage="Your filter did not return any results."\n/>;\n',
                    },
                  ),
                },
              ),
            ],
          },
        );
      }
      function MDXContent(props = {}) {
        const { wrapper: MDXLayout } = {
          ...(0,
          C_Users_metzx_Desktop_ZeroZ_web_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),
          ...props.components,
        };
        return MDXLayout
          ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
              ...props,
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _createMdxContent,
                { ...props },
              ),
            })
          : _createMdxContent(props);
      }
    },
    "./src/app/components/DataTable/DataTable.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => DataTable_stories,
          withExpandable: () => withExpandable,
          withFilters: () => withFilters,
          withSelectable: () => withSelectable,
          withSelectableAndWithExpandable: () =>
            withSelectableAndWithExpandable,
        });
      var jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        react = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        ),
        InputSearch = __webpack_require__(
          "./src/app/components/InputSearch/InputSearch.tsx",
        ),
        Button = __webpack_require__("./src/app/components/Button/Button.tsx"),
        Pagination = __webpack_require__(
          "./src/app/components/Pagination/Pagination.tsx",
        ),
        InputCheckbox = __webpack_require__(
          "./src/app/components/InputCheckbox/InputCheckbox.tsx",
        ),
        injectStylesIntoStyleTag = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag,
        ),
        styleDomAPI = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js",
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertBySelector.js",
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js",
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes,
        ),
        insertStyleElement = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js",
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js",
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        DataTable = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/DataTable/DataTable.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(DataTable.A, options);
      DataTable.A && DataTable.A.locals && DataTable.A.locals;
      var ButtonIcon = __webpack_require__(
          "./src/app/components/ButtonIcon/ButtonIcon.tsx",
        ),
        Aside = __webpack_require__("./src/app/components/Aside/Aside.tsx"),
        ButtonGroup = __webpack_require__(
          "./src/app/components/ButtonGroup/ButtonGroup.tsx",
        ),
        EmptyState = __webpack_require__(
          "./src/app/components/EmptyState/EmptyState.tsx",
        ),
        Icon = __webpack_require__("./src/app/components/Icon/Icon.tsx"),
        Tag = __webpack_require__("./src/app/components/Tag/Tag.tsx"),
        Modal = __webpack_require__("./src/app/components/Modal/Modal.tsx");
      const DataTable_DataTable_DataTable = (param) => {
          let {
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
          } = param;
          const [currentPage, setCurrentPage] = (0, react.useState)(1),
            itemsPerPage = itemPerPage,
            [filteredData, setFilteredData] = (0, react.useState)(originalData),
            [totalPages, setTotalPages] = (0, react.useState)(0);
          (0, react.useEffect)(() => {
            setFilteredData(originalData);
            const totalPages = Math.ceil(originalData.length / itemsPerPage);
            setTotalPages(totalPages);
          }, [originalData, itemsPerPage]);
          const label =
            filteredData.length > 0
              ? ""
                  .concat(pagesText, " ")
                  .concat(currentPage, " - ")
                  .concat(totalPages)
              : "".concat(pagesText, " 0 - 0");
          (0, react.useEffect)(() => {
            const totalPages = Math.ceil(filteredData.length / itemsPerPage);
            setTotalPages(totalPages);
          }, [originalData, itemsPerPage, filteredData]);
          const [originalDataState, setOriginalDataState] = (0, react.useState)(
              originalData,
            ),
            [selectAll, setSelectAll] = (0, react.useState)(!1),
            [selectedRows, setSelectedRows] = (0, react.useState)([]),
            [expandedRows, setExpandedRows] = (0, react.useState)([]),
            [isAnyItemSelected, setIsAnyItemSelected] = (0, react.useState)(!1),
            [searchTerm, setSearchTerm] = (0, react.useState)(""),
            [contentOverflowed, setContentOverflowed] = (0, react.useState)(!1),
            contentRef = (0, react.useRef)(null),
            [isOpenAside, setIsOpenAside] = (0, react.useState)(!1),
            [filterOptions, setFilterOptions] = (0, react.useState)(
              columns.reduce((acc, column) => ({ ...acc, [column]: [] }), {}),
            ),
            [selectedTags, setSelectedTags] = (0, react.useState)(
              columns.reduce((acc, column) => ({ ...acc, [column]: [] }), {}),
            ),
            indexOfLastItem = currentPage * itemsPerPage,
            indexOfFirstItem = indexOfLastItem - itemsPerPage,
            [allItemsExpanded, setAllItemsExpanded] = (0, react.useState)(!1);
          (0, react.useEffect)(() => {
            setIsAnyItemSelected(selectedRows.length > 0),
              setSelectAll(selectedRows.length === filteredData.length);
          }, [selectedRows, filteredData]),
            (0, react.useEffect)(() => {
              const checkOverflow = () => {
                  const contentElement = contentRef.current;
                  contentElement &&
                    setContentOverflowed(
                      contentElement.scrollWidth > contentElement.clientWidth,
                    );
                },
                resizeObserver = new ResizeObserver(() => {
                  checkOverflow();
                }),
                contentElement = contentRef.current;
              return (
                contentElement &&
                  (resizeObserver.observe(contentElement), checkOverflow()),
                () => {
                  contentElement && resizeObserver.unobserve(contentElement);
                }
              );
            }, []);
          const isAllSelected = () => {
              const allIds = filteredData.map((item) => item.id);
              return selectedRows.length === allIds.length;
            },
            isIndeterminate =
              selectedRows.length > 0 &&
              selectedRows.length < filteredData.length &&
              !selectAll;
          function calculateGridTemplate() {
            let selectable =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              expandable =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return selectable && expandable
              ? {
                  gridTemplateColumns:
                    "56px 56px repeat(auto-fit, minmax(120px, 1fr))",
                }
              : selectable || expandable
                ? {
                    gridTemplateColumns:
                      "56px repeat(auto-fit, minmax(120px, 1fr))",
                  }
                : {};
          }
          function calculateLeft() {
            let selectable =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              expandable =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return selectable && expandable
              ? { left: "112px" }
              : selectable || expandable
                ? { left: "56px" }
                : { left: "0px" };
          }
          function calculateLeftToCheckBox() {
            return arguments.length > 0 &&
              void 0 !== arguments[0] &&
              arguments[0]
              ? { left: "56px" }
              : { left: "0px" };
          }
          (0, react.useEffect)(() => {
            setIsAnyItemSelected(selectedRows.length > 0);
          }, [selectedRows]);
          const toggleAside = () => {
              setIsOpenAside(!isOpenAside);
            },
            [isOpen, setIsOpen] = (0, react.useState)(!1),
            removeRow = () => {
              const updatedOriginalData = originalDataState.filter(
                  (item) => !selectedRows.includes(item.id),
                ),
                updatedFilteredData = filteredData.filter(
                  (item) => !selectedRows.includes(item.id),
                );
              setFilteredData(updatedFilteredData),
                setSelectedRows([]),
                setIsOpen(!1),
                setOriginalDataState(updatedOriginalData);
            },
            toggleModal = () => {
              setIsOpen((prevIsOpen) => !prevIsOpen);
            },
            exportSelectedRowsAsCSV = () => {
              const selectedData = originalData.filter((row) =>
                  selectedRows.includes(row.id),
                ),
                columnNames = columns,
                csvContent = selectedData
                  .map((row) =>
                    columnNames.map((column) => row[column]).join(","),
                  )
                  .join("\n"),
                csvData = columnNames.join(",") + "\n" + csvContent,
                csvBlob = new Blob([csvData], { type: "text/csv" }),
                csvURL = window.URL.createObjectURL(csvBlob),
                downloadLink = document.createElement("a");
              (downloadLink.href = csvURL),
                (downloadLink.download = "selected_data.csv"),
                document.body.appendChild(downloadLink),
                downloadLink.click(),
                window.URL.revokeObjectURL(csvURL),
                document.body.removeChild(downloadLink);
            },
            handleSearchChange = (value) => {
              setSearchTerm(value);
              let searchedData = [...originalData];
              "" !== value.trim() &&
                (searchedData = searchedData.filter((item) =>
                  Object.values(item).some(
                    (val) => "string" == typeof val && val.includes(value),
                  ),
                )),
                Object.entries(filterOptions).forEach((param) => {
                  let [columnName, selectedValues] = param;
                  selectedValues.length > 0 &&
                    (searchedData = searchedData.filter((item) =>
                      selectedValues.includes(String(item[columnName])),
                    ));
                }),
                setFilteredData(searchedData);
            },
            initialSortConfig = columns.reduce(
              (acc, column) => ({ ...acc, [column]: "default" }),
              {},
            ),
            [sortConfig, setSortConfig] = (0, react.useState)(
              initialSortConfig,
            ),
            [sortingColumn, setSortingColumn] = (0, react.useState)(null);
          (0, react.useEffect)(() => {
            const defaultSortConfig = columns.reduce(
              (acc, column) => ({ ...acc, [column]: "default" }),
              {},
            );
            setSortConfig(defaultSortConfig);
          }, [filterOptions]);
          const handleClearFilters = () => {
              const updatedFilteredData = [...originalData],
                updatedFilterOptions = columns.reduce(
                  (acc, column) => ({ ...acc, [column]: [] }),
                  {},
                ),
                updatedSelectedTags = { ...updatedFilterOptions };
              setFilteredData(updatedFilteredData),
                setFilterOptions(updatedFilterOptions),
                setSelectedTags(updatedSelectedTags),
                setSearchTerm("");
            },
            renderNoDataMessage = () =>
              (0, jsx_runtime.jsx)("div", {
                className: "render-no-data-message",
                children: (0, jsx_runtime.jsx)(EmptyState.A, {
                  icon: "search_off",
                  title: titleNoDataMessage,
                  description: descriptionNoDataMessage,
                }),
              }),
            hasSelectedFilters = Object.values(filterOptions).some(
              (options) => options.length > 0,
            );
          return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              availableFilters &&
                (0, jsx_runtime.jsx)(Aside.Ay, {
                  isOpen: isOpenAside,
                  title: asideTitle,
                  toggleAside,
                  content: (0, jsx_runtime.jsx)(Aside.cD, {
                    children:
                      filteredData.length > 0
                        ? (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
                            children: Object.entries(availableFilters)
                              .sort((param, param1) => {
                                let [columnA] = param,
                                  [columnB] = param1;
                                return columnA.localeCompare(columnB);
                              })
                              .map((param) => {
                                let [column, options] = param;
                                return (0, jsx_runtime.jsx)(
                                  "div",
                                  {
                                    className: "aside-filter",
                                    children: (0, jsx_runtime.jsxs)("div", {
                                      className: "aside-content-col",
                                      children: [
                                        (0, jsx_runtime.jsx)("div", {
                                          className: "aside-title-col",
                                          children: column,
                                        }),
                                        options
                                          .sort((a, b) => a.localeCompare(b))
                                          .map((option, idx) =>
                                            (0, jsx_runtime.jsx)(
                                              "div",
                                              {
                                                children: (0, jsx_runtime.jsx)(
                                                  InputCheckbox.A,
                                                  {
                                                    checked:
                                                      filterOptions[
                                                        column
                                                      ].includes(option),
                                                    onChange: () => {
                                                      return (
                                                        (columnName = column),
                                                        (value = option),
                                                        void setFilterOptions(
                                                          (
                                                            prevFilterOptions,
                                                          ) => {
                                                            const newFilterOptions =
                                                              {
                                                                ...prevFilterOptions,
                                                              };
                                                            return (
                                                              newFilterOptions[
                                                                columnName
                                                              ].includes(value)
                                                                ? (newFilterOptions[
                                                                    columnName
                                                                  ] =
                                                                    newFilterOptions[
                                                                      columnName
                                                                    ].filter(
                                                                      (item) =>
                                                                        item !==
                                                                        value,
                                                                    ))
                                                                : (newFilterOptions[
                                                                    columnName
                                                                  ] = [
                                                                    ...newFilterOptions[
                                                                      columnName
                                                                    ],
                                                                    value,
                                                                  ]),
                                                              newFilterOptions
                                                            );
                                                          },
                                                        )
                                                      );
                                                      var columnName, value;
                                                    },
                                                    label: option,
                                                  },
                                                ),
                                              },
                                              idx,
                                            ),
                                          ),
                                      ],
                                    }),
                                  },
                                  column,
                                );
                              }),
                          })
                        : (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
                            children: renderNoDataMessage(),
                          }),
                  }),
                  footer: (0, jsx_runtime.jsx)(Aside.iE, {
                    children: (0, jsx_runtime.jsx)("div", {
                      style: { display: "flex", width: "min-content" },
                      children: (0, jsx_runtime.jsx)(ButtonGroup.A, {
                        contentFirstButton: firstButtonLabelAside,
                        contentSecondButton: secondButtonLabelAside,
                        direction: "row",
                        variantFirstButton: "primary",
                        variantSecondButton: "secondary",
                        onClickFirstButton: () => {
                          let updatedFilteredData = [...originalDataState];
                          const newSelectedTags = {};
                          Object.entries(filterOptions).forEach((param) => {
                            let [columnName, selectedValues] = param;
                            selectedValues.length > 0 &&
                              ((updatedFilteredData =
                                updatedFilteredData.filter((item) =>
                                  selectedValues.includes(
                                    String(item[columnName]),
                                  ),
                                )),
                              (newSelectedTags[columnName] =
                                selectedValues.sort()));
                          }),
                            setIsOpenAside(!1),
                            setFilteredData(updatedFilteredData),
                            setSelectedTags(newSelectedTags),
                            setCurrentPage(1);
                        },
                        onClickSecondButton: toggleAside,
                      }),
                    }),
                  }),
                }),
              (0, jsx_runtime.jsxs)("div", {
                className: "data-table-root",
                children: [
                  isAnyItemSelected
                    ? (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                          (0, jsx_runtime.jsx)(Modal.Ay, {
                            footer: (0, jsx_runtime.jsx)(Modal.J9, {
                              children: (0, jsx_runtime.jsx)("div", {
                                style: { width: "min-content" },
                                children: (0, jsx_runtime.jsx)(ButtonGroup.A, {
                                  contentFirstButton: "Delete",
                                  contentSecondButton: "Cancel",
                                  direction: "row",
                                  variantFirstButton: "warning",
                                  variantSecondButton: "secondary",
                                  onClickFirstButton: removeRow,
                                  onClickSecondButton: toggleModal,
                                }),
                              }),
                            }),
                            description:
                              "Are you sure that you want delete this row?",
                            dismissible: !0,
                            title: "Delete",
                            isOpen,
                            hideModal: toggleModal,
                          }),
                          (0, jsx_runtime.jsxs)("div", {
                            className: "data-table-header-selected-items",
                            children: [
                              (0, jsx_runtime.jsx)("div", {
                                className:
                                  "data-table-header-selected-items-message",
                                children: (0, jsx_runtime.jsx)("p", {
                                  children: ""
                                    .concat(selectedRows.length, " item")
                                    .concat(
                                      selectedRows.length >= 2 ? "s" : "",
                                      " selected",
                                    ),
                                }),
                              }),
                              (0, jsx_runtime.jsxs)("div", {
                                className:
                                  "data-table-header-selected-items-buttons",
                                children: [
                                  (0, jsx_runtime.jsx)(Button.A, {
                                    size: "md",
                                    variant: "secondary",
                                    label: "Export",
                                    onClick: exportSelectedRowsAsCSV,
                                    typeIcon: "download",
                                  }),
                                  (0, jsx_runtime.jsx)(Button.A, {
                                    size: "md",
                                    variant: "secondary",
                                    label: selectableLabelSecondButton,
                                    onClick: toggleModal,
                                    typeIcon: selectableIconSecondButton,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      })
                    : (0, jsx_runtime.jsxs)("div", {
                        className: "data-table-header",
                        children: [
                          (0, jsx_runtime.jsx)(InputSearch.A, {
                            placeholder: inputPlaceholder,
                            onChange: handleSearchChange,
                          }),
                          availableFilters &&
                            (0, jsx_runtime.jsx)("div", {
                              className: "data-table-header-actions",
                              children: (0, jsx_runtime.jsx)("div", {
                                style: { width: "100%" },
                                children: (0, jsx_runtime.jsx)(Button.A, {
                                  variant: "secondary",
                                  typeIcon: typeIconSecondButton,
                                  size: "md",
                                  label: labelSecondButton,
                                  onClick: toggleAside,
                                }),
                              }),
                            }),
                        ],
                      }),
                  Object.values(selectedTags).some((tags) => tags.length > 0) &&
                    (0, jsx_runtime.jsx)("div", {
                      className: "tags",
                      children: Object.entries(selectedTags).map((param) => {
                        let [column, tags] = param;
                        return (
                          tags.length > 0 &&
                          (0, jsx_runtime.jsx)(
                            Tag.A,
                            {
                              content: ""
                                .concat(column, ": ")
                                .concat(tags.join(", ")),
                              variant: "primary",
                              onClose: () =>
                                ((columnName, tags) => {
                                  const updatedSelectedTags = {
                                      ...selectedTags,
                                      [columnName]: selectedTags[
                                        columnName
                                      ].filter((tag) => !tags.includes(tag)),
                                    },
                                    updatedFilterOptions = {
                                      ...filterOptions,
                                      [columnName]: filterOptions[
                                        columnName
                                      ].filter(
                                        (option) => !tags.includes(option),
                                      ),
                                    };
                                  setFilterOptions(updatedFilterOptions);
                                  let filteredData = [...originalDataState];
                                  Object.entries(updatedFilterOptions).forEach(
                                    (param) => {
                                      let [column, selectedValues] = param;
                                      selectedValues.length > 0 &&
                                        (filteredData = filteredData.filter(
                                          (item) =>
                                            selectedValues.includes(
                                              String(item[column]),
                                            ),
                                        ));
                                    },
                                  ),
                                    setFilteredData(filteredData),
                                    setSelectedTags(updatedSelectedTags);
                                })(column, tags),
                            },
                            column,
                          )
                        );
                      }),
                    }),
                  (0, jsx_runtime.jsx)("div", {
                    ref: contentRef,
                    className: "data-table-content ".concat(
                      contentOverflowed ? "overflowed" : "",
                    ),
                    children:
                      filteredData.length > 0
                        ? (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                              (0, jsx_runtime.jsxs)("div", {
                                className: "data-table-content-header",
                                style: calculateGridTemplate(
                                  selectable,
                                  expandable,
                                ),
                                children: [
                                  expandable &&
                                    (0, jsx_runtime.jsx)("div", {
                                      className:
                                        "data-table-content-header-expandable ".concat(
                                          allItemsExpanded ? "up" : "down",
                                        ),
                                      children: (0, jsx_runtime.jsx)(
                                        ButtonIcon.A,
                                        {
                                          size: "md",
                                          type: "plain",
                                          typeIcon: "keyboard_arrow_down",
                                          variant: "primary",
                                          onClick: () => {
                                            if (allItemsExpanded)
                                              setExpandedRows([]),
                                                setAllItemsExpanded(!1);
                                            else {
                                              const allIds = filteredData.map(
                                                (item) => item.id,
                                              );
                                              setExpandedRows(allIds),
                                                setAllItemsExpanded(!0);
                                            }
                                          },
                                        },
                                      ),
                                    }),
                                  selectable &&
                                    (0, jsx_runtime.jsx)("div", {
                                      className:
                                        "data-table-content-header-checkbox",
                                      style:
                                        calculateLeftToCheckBox(expandable),
                                      children: (0, jsx_runtime.jsx)(
                                        InputCheckbox.A,
                                        {
                                          checked: selectAll,
                                          onChange: () => {
                                            const allIds = filteredData.map(
                                              (item) => item.id,
                                            );
                                            isAllSelected()
                                              ? (setSelectAll(!1),
                                                setSelectedRows([]))
                                              : (setSelectAll(!0),
                                                setSelectedRows(allIds));
                                          },
                                          indeterminate: isIndeterminate,
                                        },
                                      ),
                                    }),
                                  columns.map((column, columnIndex) =>
                                    (0, jsx_runtime.jsxs)(
                                      "div",
                                      {
                                        className: "th ".concat(
                                          0 === columnIndex
                                            ? "sticky-first-column"
                                            : "",
                                        ),
                                        style: calculateLeft(
                                          selectable,
                                          expandable,
                                        ),
                                        onClick: () =>
                                          ((column) => {
                                            const currentSortState =
                                              sortConfig[column];
                                            let nextSortState;
                                            nextSortState =
                                              "asc" === currentSortState
                                                ? "desc"
                                                : "desc" === currentSortState
                                                  ? "default"
                                                  : "asc";
                                            const updatedSortConfig = {
                                              ...initialSortConfig,
                                              [column]: nextSortState,
                                            };
                                            setSortConfig(updatedSortConfig),
                                              setSortingColumn(column);
                                            let sortedData = [...filteredData];
                                            if ("default" !== nextSortState)
                                              sortedData = sortedData.sort(
                                                (a, b) =>
                                                  "asc" === nextSortState
                                                    ? a[column] > b[column]
                                                      ? 1
                                                      : -1
                                                    : "desc" === nextSortState
                                                      ? a[column] < b[column]
                                                        ? 1
                                                        : -1
                                                      : 0,
                                              );
                                            else if (
                                              Object.values(filterOptions).some(
                                                (options) => options.length > 0,
                                              )
                                            ) {
                                              let filteredOriginalData = [
                                                ...originalDataState,
                                              ];
                                              Object.entries(
                                                filterOptions,
                                              ).forEach((param) => {
                                                let [
                                                  filterColumn,
                                                  selectedValues,
                                                ] = param;
                                                selectedValues.length > 0 &&
                                                  (filteredOriginalData =
                                                    filteredOriginalData.filter(
                                                      (item) =>
                                                        selectedValues.includes(
                                                          String(
                                                            item[filterColumn],
                                                          ),
                                                        ),
                                                    ));
                                              }),
                                                (sortedData =
                                                  filteredOriginalData.sort(
                                                    (a, b) =>
                                                      a[column] > b[column]
                                                        ? 1
                                                        : a[column] < b[column]
                                                          ? -1
                                                          : 0,
                                                  ));
                                            } else
                                              sortedData = [
                                                ...originalDataState,
                                              ];
                                            setFilteredData(sortedData);
                                          })(column),
                                        children: [
                                          column,
                                          (0, jsx_runtime.jsx)("div", {
                                            className: "icon",
                                            children:
                                              "asc" === sortConfig[column]
                                                ? (0, jsx_runtime.jsx)(Icon.A, {
                                                    icon: "arrow_upward",
                                                    size: "sm",
                                                  })
                                                : "desc" === sortConfig[column]
                                                  ? (0, jsx_runtime.jsx)(
                                                      Icon.A,
                                                      {
                                                        icon: "arrow_downward",
                                                        size: "sm",
                                                      },
                                                    )
                                                  : (0, jsx_runtime.jsx)(
                                                      Icon.A,
                                                      {
                                                        icon: "swap_vert",
                                                        size: "sm",
                                                      },
                                                    ),
                                          }),
                                        ],
                                      },
                                      columnIndex,
                                    ),
                                  ),
                                ],
                              }),
                              filteredData
                                .slice(indexOfFirstItem, indexOfLastItem)
                                .map((row) =>
                                  (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                      (0, jsx_runtime.jsxs)(
                                        "div",
                                        {
                                          className: "data-table-content-body",
                                          style: calculateGridTemplate(
                                            selectable,
                                            expandable,
                                          ),
                                          children: [
                                            expandable &&
                                              (0, jsx_runtime.jsx)(
                                                "div",
                                                {
                                                  className:
                                                    "data-table-content-body-expandable ".concat(
                                                      expandedRows.includes(
                                                        row.id,
                                                      )
                                                        ? "up"
                                                        : "down",
                                                    ),
                                                  children: (0,
                                                  jsx_runtime.jsx)(
                                                    ButtonIcon.A,
                                                    {
                                                      size: "md",
                                                      type: "plain",
                                                      typeIcon:
                                                        "keyboard_arrow_down",
                                                      variant: "primary",
                                                      onClick: () => {
                                                        return (
                                                          (rowId = row.id),
                                                          void (expandedRows.includes(
                                                            rowId,
                                                          )
                                                            ? (setExpandedRows(
                                                                expandedRows.filter(
                                                                  (id) =>
                                                                    id !==
                                                                    rowId,
                                                                ),
                                                              ),
                                                              setAllItemsExpanded(
                                                                !1,
                                                              ))
                                                            : (setExpandedRows([
                                                                ...expandedRows,
                                                                rowId,
                                                              ]),
                                                              expandedRows.length +
                                                                1 ===
                                                                filteredData.length &&
                                                                setAllItemsExpanded(
                                                                  !0,
                                                                )))
                                                        );
                                                        var rowId;
                                                      },
                                                    },
                                                  ),
                                                },
                                                row.id,
                                              ),
                                            selectable &&
                                              (0, jsx_runtime.jsx)(
                                                "div",
                                                {
                                                  className:
                                                    "data-table-content-body-checkbox",
                                                  style:
                                                    calculateLeftToCheckBox(
                                                      expandable,
                                                    ),
                                                  children: (0,
                                                  jsx_runtime.jsx)(
                                                    InputCheckbox.A,
                                                    {
                                                      checked:
                                                        selectedRows.includes(
                                                          row.id,
                                                        ),
                                                      onChange: () => {
                                                        return (
                                                          (rowId = row.id),
                                                          void (selectedRows.includes(
                                                            rowId,
                                                          )
                                                            ? (setSelectedRows(
                                                                selectedRows.filter(
                                                                  (id) =>
                                                                    id !==
                                                                    rowId,
                                                                ),
                                                              ),
                                                              setSelectAll(!1))
                                                            : (setSelectedRows([
                                                                ...selectedRows,
                                                                rowId,
                                                              ]),
                                                              isAllSelected() &&
                                                                setSelectAll(
                                                                  !0,
                                                                )))
                                                        );
                                                        var rowId;
                                                      },
                                                    },
                                                  ),
                                                },
                                                row.id,
                                              ),
                                            columns.map((_, columnIndex) =>
                                              (0, jsx_runtime.jsx)(
                                                "div",
                                                {
                                                  className: "fixed ".concat(
                                                    0 === columnIndex
                                                      ? "sticky-first-column"
                                                      : "",
                                                  ),
                                                  style: calculateLeft(
                                                    selectable,
                                                    expandable,
                                                  ),
                                                  children: (0,
                                                  jsx_runtime.jsx)(
                                                    "div",
                                                    {
                                                      children: (0,
                                                      jsx_runtime.jsx)(
                                                        "div",
                                                        {
                                                          className: "td",
                                                          children:
                                                            row[
                                                              columns[
                                                                columnIndex
                                                              ]
                                                            ],
                                                        },
                                                        row.id,
                                                      ),
                                                    },
                                                    row.id,
                                                  ),
                                                },
                                                columnIndex,
                                              ),
                                            ),
                                          ],
                                        },
                                        row.id,
                                      ),
                                      expandedRows.includes(row.id) &&
                                        expandedData &&
                                        (0, jsx_runtime.jsxs)("div", {
                                          style: { display: "flex" },
                                          children: [
                                            (0, jsx_runtime.jsx)("div", {
                                              className:
                                                "space-expanded-content",
                                            }),
                                            (0, jsx_runtime.jsx)("div", {
                                              className: "expanded-content",
                                              children: expandedData
                                                .filter(
                                                  (expandedItem) =>
                                                    expandedItem.id === row.id,
                                                )
                                                .map((expandedItem) =>
                                                  (0, jsx_runtime.jsx)(
                                                    "div",
                                                    {
                                                      children: Object.keys(
                                                        expandedItem,
                                                      )
                                                        .filter(
                                                          (key) => "id" !== key,
                                                        )
                                                        .map((key) =>
                                                          (0, jsx_runtime.jsx)(
                                                            "div",
                                                            {
                                                              children:
                                                                expandedItem[
                                                                  key
                                                                ],
                                                            },
                                                            key,
                                                          ),
                                                        ),
                                                    },
                                                    expandedItem.id,
                                                  ),
                                                ),
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                ),
                            ],
                          })
                        : hasSelectedFilters || searchTerm
                          ? (0, jsx_runtime.jsx)("div", {
                              className: "render-no-data-message",
                              children: (0, jsx_runtime.jsx)(EmptyState.A, {
                                icon: "search_off",
                                title: titleNoDataFilteredMessage,
                                description: descriptionNoDataFilteredMessage,
                                buttonContentPrimary:
                                  labelButtonNoDataFilteredMessage,
                                onClickActionPrimary: handleClearFilters,
                              }),
                            })
                          : renderNoDataMessage(),
                  }),
                  (0, jsx_runtime.jsx)("div", {
                    className: "data-table-footer",
                    children: (0, jsx_runtime.jsx)(Pagination.A, {
                      label,
                      variant: "leftLabel",
                      onClickRight: () => {
                        setCurrentPage((prevPage) => {
                          const nextPage = prevPage + 1;
                          return nextPage > totalPages ? prevPage : nextPage;
                        });
                      },
                      onClickLeft: () => {
                        setCurrentPage((prevPage) => {
                          const newPage = prevPage - 1;
                          return newPage < 1 ? prevPage : newPage;
                        });
                      },
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        components_DataTable_DataTable = DataTable_DataTable_DataTable;
      try {
        (DataTable_DataTable_DataTable.displayName = "DataTable"),
          (DataTable_DataTable_DataTable.__docgenInfo = {
            description: "",
            displayName: "DataTable",
            props: {
              columns: {
                defaultValue: null,
                description: "",
                name: "columns",
                required: !0,
                type: { name: "string[]" },
              },
              data: {
                defaultValue: null,
                description: "",
                name: "data",
                required: !0,
                type: { name: "{ [key: string]: any; id: string; }[]" },
              },
              expandedData: {
                defaultValue: null,
                description: "",
                name: "expandedData",
                required: !1,
                type: { name: "{ [key: string]: ReactNode; id: string; }[]" },
              },
              selectable: {
                defaultValue: null,
                description: "",
                name: "selectable",
                required: !1,
                type: { name: "boolean" },
              },
              expandable: {
                defaultValue: null,
                description: "",
                name: "expandable",
                required: !1,
                type: { name: "boolean" },
              },
              itemPerPage: {
                defaultValue: null,
                description: "",
                name: "itemPerPage",
                required: !0,
                type: { name: "number" },
              },
              pagesText: {
                defaultValue: null,
                description: "",
                name: "pagesText",
                required: !0,
                type: { name: "string" },
              },
              inputPlaceholder: {
                defaultValue: null,
                description: "",
                name: "inputPlaceholder",
                required: !0,
                type: { name: "string" },
              },
              typeIconSecondButton: {
                defaultValue: null,
                description: "",
                name: "typeIconSecondButton",
                required: !0,
                type: { name: "string" },
              },
              labelSecondButton: {
                defaultValue: null,
                description: "",
                name: "labelSecondButton",
                required: !0,
                type: { name: "string" },
              },
              selectableLabelSecondButton: {
                defaultValue: null,
                description: "",
                name: "selectableLabelSecondButton",
                required: !0,
                type: { name: "string" },
              },
              selectableIconSecondButton: {
                defaultValue: null,
                description: "",
                name: "selectableIconSecondButton",
                required: !0,
                type: { name: "string" },
              },
              availableFilters: {
                defaultValue: null,
                description: "",
                name: "availableFilters",
                required: !1,
                type: { name: "{ [key: string]: string[]; }" },
              },
              asideTitle: {
                defaultValue: null,
                description: "",
                name: "asideTitle",
                required: !0,
                type: { name: "string" },
              },
              firstButtonLabelAside: {
                defaultValue: null,
                description: "",
                name: "firstButtonLabelAside",
                required: !0,
                type: { name: "string" },
              },
              secondButtonLabelAside: {
                defaultValue: null,
                description: "",
                name: "secondButtonLabelAside",
                required: !0,
                type: { name: "string" },
              },
              titleNoDataMessage: {
                defaultValue: null,
                description: "",
                name: "titleNoDataMessage",
                required: !0,
                type: { name: "string" },
              },
              descriptionNoDataMessage: {
                defaultValue: null,
                description: "",
                name: "descriptionNoDataMessage",
                required: !0,
                type: { name: "string" },
              },
              titleNoDataFilteredMessage: {
                defaultValue: null,
                description: "",
                name: "titleNoDataFilteredMessage",
                required: !0,
                type: { name: "string" },
              },
              labelButtonNoDataFilteredMessage: {
                defaultValue: null,
                description: "",
                name: "labelButtonNoDataFilteredMessage",
                required: !0,
                type: { name: "string" },
              },
              descriptionNoDataFilteredMessage: {
                defaultValue: null,
                description: "",
                name: "descriptionNoDataFilteredMessage",
                required: !0,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/DataTable/DataTable.tsx#DataTable"
            ] = {
              docgenInfo: DataTable_DataTable_DataTable.__docgenInfo,
              name: "DataTable",
              path: "src/app/components/DataTable/DataTable.tsx#DataTable",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_require__("./src/app/styles.scss");
      var _Default_parameters,
        _Default_parameters_docs,
        _Default_parameters1,
        _withSelectable_parameters,
        _withSelectable_parameters_docs,
        _withSelectable_parameters1,
        _withExpandable_parameters,
        _withExpandable_parameters_docs,
        _withExpandable_parameters1,
        _withSelectableAndWithExpandable_parameters,
        _withSelectableAndWithExpandable_parameters_docs,
        _withSelectableAndWithExpandable_parameters1,
        _withFilters_parameters,
        _withFilters_parameters_docs,
        _withFilters_parameters1,
        app_components_DataTable_DataTable = __webpack_require__(
          "./src/app/components/DataTable/DataTable.mdx",
        );
      const DataTable_stories = {
          title: "Components/Data Table",
          component: components_DataTable_DataTable,
          parameters: {
            layout: "padded",
            page: app_components_DataTable_DataTable.default,
          },
        },
        Template = (args) =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)(components_DataTable_DataTable, {
              pagesText: args.pagesText,
              titleNoDataFilteredMessage: args.titleNoDataFilteredMessage,
              labelButtonNoDataFilteredMessage:
                args.labelButtonNoDataFilteredMessage,
              descriptionNoDataFilteredMessage:
                args.descriptionNoDataFilteredMessage,
              availableFilters: args.filters,
              firstButtonLabelAside: args.firstButtonLabelAside,
              secondButtonLabelAside: args.secondButtonLabelAside,
              typeIconSecondButton: args.typeIconSecondButton,
              selectableLabelSecondButton: args.selectableLabelSecondButton,
              labelSecondButton: args.labelSecondButton,
              inputPlaceholder: args.inputPlaceholder,
              itemPerPage: args.itemPerPage,
              columns: args.columns,
              data: args.data,
              selectable: args.selectable,
              expandable: args.expandable,
              expandedData: args.expandedData,
              descriptionNoDataMessage: args.descriptionNoDataMessage,
              titleNoDataMessage: args.titleNoDataMessage,
              asideTitle: args.asideTitle,
              selectableIconSecondButton: args.selectableIconSecondButton,
            }),
          }),
        columns = ["Name", "Age", "Role", "Experience", "Company"],
        data = [
          {
            id: "1",
            Name: "David",
            Age: "25",
            Role: "Developer",
            Experience: "4 years",
            Company: "Google",
          },
          {
            id: "2",
            Name: "Maria",
            Age: "30",
            Role: "Designer",
            Experience: "1 year",
            Company: "Microsoft",
          },
          {
            id: "3",
            Name: "Carlos",
            Age: "30",
            Role: "Data Analyst",
            Experience: "1 month",
            Company: "Netflix",
          },
          {
            id: "4",
            Name: "Roberto",
            Age: "21",
            Role: "Product Owner",
            Experience: "2 years",
            Company: "Instagram",
          },
          {
            id: "5",
            Name: "Juliana",
            Age: "27",
            Role: "Software Engineer",
            Experience: "3 years",
            Company: "Amazon",
          },
          {
            id: "6",
            Name: "Ana",
            Age: "29",
            Role: "UX Designer",
            Experience: "2 years",
            Company: "Apple",
          },
          {
            id: "7",
            Name: "Pedro",
            Age: "26",
            Role: "Data Scientist",
            Experience: "6 months",
            Company: "Facebook",
          },
          {
            id: "8",
            Name: "Mariana",
            Age: "24",
            Role: "Project Manager",
            Experience: "1 year",
            Company: "Twitter",
          },
        ],
        expandedData = [
          { id: "1", content: "First Content" },
          { id: "2", content: "Second Content" },
          { id: "3", content: "Third Content" },
          { id: "4", content: "Fourth Content" },
          { id: "5", content: "Fifth Content" },
          { id: "6", content: "Sixth Content" },
          { id: "7", content: "Seventh Content" },
          { id: "8", content: "Eighth Content" },
        ],
        Default = Template.bind({});
      Default.args = {
        itemPerPage: 4,
        pagesText: "Page",
        columns,
        data,
        expandedData,
        selectable: !1,
        expandable: !1,
        inputPlaceholder: "Search",
        labelFirstButton: "Order By",
        labelSecondButton: "Filter By",
        typeIconSecondButton: "filter_alt",
        selectableLabelSecondButton: "Delete",
        selectableIconSecondButton: "delete",
        asideTitle: "Filters",
        firstButtonLabelAside: "Apply",
        secondButtonLabelAside: "Cancel",
        descriptionNoDataFilteredMessage:
          "This option does not exist in your store, remove the filter and try again.",
        labelButtonNoDataFilteredMessage: "Remove filters",
        titleNoDataFilteredMessage: "Your filter did not return any results.",
      };
      const withSelectable = Template.bind({});
      withSelectable.args = {
        itemPerPage: 4,
        pagesText: "Page",
        columns,
        data,
        expandedData,
        selectable: !0,
        expandable: !1,
        inputPlaceholder: "Search",
        labelFirstButton: "Order By",
        labelSecondButton: "Filter By",
        typeIconSecondButton: "filter_alt",
        selectableLabelSecondButton: "Delete",
        selectableIconSecondButton: "delete",
        asideTitle: "Filters",
        firstButtonLabelAside: "Apply",
        secondButtonLabelAside: "Cancel",
        descriptionNoDataFilteredMessage:
          "This option does not exist in your store, remove the filter and try again.",
        labelButtonNoDataFilteredMessage: "Remove filters",
        titleNoDataFilteredMessage: "Your filter did not return any results.",
        titleNoDataMessage: "No Data Available",
        descriptionNoDataMessage:
          "This message indicates that there is currently no data present in the table. Please check back later or try refreshing the page.",
      };
      const withExpandable = Template.bind({});
      withExpandable.args = {
        itemPerPage: 4,
        pagesText: "Page",
        columns,
        data,
        expandedData,
        selectable: !1,
        expandable: !0,
        inputPlaceholder: "Search",
        labelFirstButton: "Order By",
        labelSecondButton: "Filter By",
        typeIconSecondButton: "filter_alt",
        selectableLabelSecondButton: "Delete",
        selectableIconSecondButton: "delete",
        asideTitle: "Filters",
        firstButtonLabelAside: "Apply",
        secondButtonLabelAside: "Cancel",
        descriptionNoDataFilteredMessage:
          "This option does not exist in your store, remove the filter and try again.",
        labelButtonNoDataFilteredMessage: "Remove filters",
        titleNoDataFilteredMessage: "Your filter did not return any results.",
        titleNoDataMessage: "No Data Available",
        descriptionNoDataMessage:
          "This message indicates that there is currently no data present in the table. Please check back later or try refreshing the page.",
      };
      const withSelectableAndWithExpandable = Template.bind({});
      withSelectableAndWithExpandable.args = {
        itemPerPage: 4,
        pagesText: "Page",
        columns,
        data,
        expandedData,
        selectable: !0,
        expandable: !0,
        inputPlaceholder: "Search",
        labelFirstButton: "Order By",
        labelSecondButton: "Filter By",
        typeIconSecondButton: "filter_alt",
        selectableLabelSecondButton: "Delete",
        selectableIconSecondButton: "delete",
        asideTitle: "Filters",
        firstButtonLabelAside: "Apply",
        secondButtonLabelAside: "Cancel",
        descriptionNoDataFilteredMessage:
          "This option does not exist in your store, remove the filter and try again.",
        labelButtonNoDataFilteredMessage: "Remove filters",
        titleNoDataFilteredMessage: "Your filter did not return any results.",
        titleNoDataMessage: "No Data Available",
        descriptionNoDataMessage:
          "This message indicates that there is currently no data present in the table. Please check back later or try refreshing the page.",
      };
      const withFilters = Template.bind({});
      (withFilters.args = {
        filters: {
          Age: ["23", "24", "25", "26", "27", "28", "29", "30"],
          Company: [
            "Apple",
            "Amazon",
            "Google",
            "Microsoft",
            "Facebook",
            "Netflix",
            "Twitter",
            "Walmart",
          ],
        },
        itemPerPage: 4,
        pagesText: "Page",
        columns,
        data,
        expandedData,
        selectable: !0,
        expandable: !0,
        inputPlaceholder: "Search",
        labelFirstButton: "Order By",
        labelSecondButton: "Filter By",
        typeIconSecondButton: "filter_alt",
        selectableLabelSecondButton: "Delete",
        selectableIconSecondButton: "delete",
        asideTitle: "Filters",
        firstButtonLabelAside: "Apply",
        secondButtonLabelAside: "Cancel",
        descriptionNoDataFilteredMessage:
          "This option does not exist in your store, remove the filter and try again.",
        labelButtonNoDataFilteredMessage: "Remove filters",
        titleNoDataFilteredMessage: "Your filter did not return any results.",
        titleNoDataMessage: "No Data Available",
        descriptionNoDataMessage:
          "This message indicates that there is currently no data present in the table. Please check back later or try refreshing the page.",
      }),
        (Default.parameters = {
          ...Default.parameters,
          docs: {
            ...(null === (_Default_parameters = Default.parameters) ||
            void 0 === _Default_parameters
              ? void 0
              : _Default_parameters.docs),
            source: {
              originalSource:
                "args => {\n  return <>\r\n      <DataTable pagesText={args.pagesText} titleNoDataFilteredMessage={args.titleNoDataFilteredMessage} labelButtonNoDataFilteredMessage={args.labelButtonNoDataFilteredMessage} descriptionNoDataFilteredMessage={args.descriptionNoDataFilteredMessage} availableFilters={args.filters} firstButtonLabelAside={args.firstButtonLabelAside} secondButtonLabelAside={args.secondButtonLabelAside} typeIconSecondButton={args.typeIconSecondButton} selectableLabelSecondButton={args.selectableLabelSecondButton} labelSecondButton={args.labelSecondButton} inputPlaceholder={args.inputPlaceholder} itemPerPage={args.itemPerPage} columns={args.columns} data={args.data} selectable={args.selectable} expandable={args.expandable} expandedData={args.expandedData} descriptionNoDataMessage={args.descriptionNoDataMessage} titleNoDataMessage={args.titleNoDataMessage} asideTitle={args.asideTitle} selectableIconSecondButton={args.selectableIconSecondButton} />\r\n    </>;\n}",
              ...(null === (_Default_parameters1 = Default.parameters) ||
              void 0 === _Default_parameters1 ||
              null === (_Default_parameters_docs = _Default_parameters1.docs) ||
              void 0 === _Default_parameters_docs
                ? void 0
                : _Default_parameters_docs.source),
            },
          },
        }),
        (withSelectable.parameters = {
          ...withSelectable.parameters,
          docs: {
            ...(null ===
              (_withSelectable_parameters = withSelectable.parameters) ||
            void 0 === _withSelectable_parameters
              ? void 0
              : _withSelectable_parameters.docs),
            source: {
              originalSource:
                "args => {\n  return <>\r\n      <DataTable pagesText={args.pagesText} titleNoDataFilteredMessage={args.titleNoDataFilteredMessage} labelButtonNoDataFilteredMessage={args.labelButtonNoDataFilteredMessage} descriptionNoDataFilteredMessage={args.descriptionNoDataFilteredMessage} availableFilters={args.filters} firstButtonLabelAside={args.firstButtonLabelAside} secondButtonLabelAside={args.secondButtonLabelAside} typeIconSecondButton={args.typeIconSecondButton} selectableLabelSecondButton={args.selectableLabelSecondButton} labelSecondButton={args.labelSecondButton} inputPlaceholder={args.inputPlaceholder} itemPerPage={args.itemPerPage} columns={args.columns} data={args.data} selectable={args.selectable} expandable={args.expandable} expandedData={args.expandedData} descriptionNoDataMessage={args.descriptionNoDataMessage} titleNoDataMessage={args.titleNoDataMessage} asideTitle={args.asideTitle} selectableIconSecondButton={args.selectableIconSecondButton} />\r\n    </>;\n}",
              ...(null ===
                (_withSelectable_parameters1 = withSelectable.parameters) ||
              void 0 === _withSelectable_parameters1 ||
              null ===
                (_withSelectable_parameters_docs =
                  _withSelectable_parameters1.docs) ||
              void 0 === _withSelectable_parameters_docs
                ? void 0
                : _withSelectable_parameters_docs.source),
            },
          },
        }),
        (withExpandable.parameters = {
          ...withExpandable.parameters,
          docs: {
            ...(null ===
              (_withExpandable_parameters = withExpandable.parameters) ||
            void 0 === _withExpandable_parameters
              ? void 0
              : _withExpandable_parameters.docs),
            source: {
              originalSource:
                "args => {\n  return <>\r\n      <DataTable pagesText={args.pagesText} titleNoDataFilteredMessage={args.titleNoDataFilteredMessage} labelButtonNoDataFilteredMessage={args.labelButtonNoDataFilteredMessage} descriptionNoDataFilteredMessage={args.descriptionNoDataFilteredMessage} availableFilters={args.filters} firstButtonLabelAside={args.firstButtonLabelAside} secondButtonLabelAside={args.secondButtonLabelAside} typeIconSecondButton={args.typeIconSecondButton} selectableLabelSecondButton={args.selectableLabelSecondButton} labelSecondButton={args.labelSecondButton} inputPlaceholder={args.inputPlaceholder} itemPerPage={args.itemPerPage} columns={args.columns} data={args.data} selectable={args.selectable} expandable={args.expandable} expandedData={args.expandedData} descriptionNoDataMessage={args.descriptionNoDataMessage} titleNoDataMessage={args.titleNoDataMessage} asideTitle={args.asideTitle} selectableIconSecondButton={args.selectableIconSecondButton} />\r\n    </>;\n}",
              ...(null ===
                (_withExpandable_parameters1 = withExpandable.parameters) ||
              void 0 === _withExpandable_parameters1 ||
              null ===
                (_withExpandable_parameters_docs =
                  _withExpandable_parameters1.docs) ||
              void 0 === _withExpandable_parameters_docs
                ? void 0
                : _withExpandable_parameters_docs.source),
            },
          },
        }),
        (withSelectableAndWithExpandable.parameters = {
          ...withSelectableAndWithExpandable.parameters,
          docs: {
            ...(null ===
              (_withSelectableAndWithExpandable_parameters =
                withSelectableAndWithExpandable.parameters) ||
            void 0 === _withSelectableAndWithExpandable_parameters
              ? void 0
              : _withSelectableAndWithExpandable_parameters.docs),
            source: {
              originalSource:
                "args => {\n  return <>\r\n      <DataTable pagesText={args.pagesText} titleNoDataFilteredMessage={args.titleNoDataFilteredMessage} labelButtonNoDataFilteredMessage={args.labelButtonNoDataFilteredMessage} descriptionNoDataFilteredMessage={args.descriptionNoDataFilteredMessage} availableFilters={args.filters} firstButtonLabelAside={args.firstButtonLabelAside} secondButtonLabelAside={args.secondButtonLabelAside} typeIconSecondButton={args.typeIconSecondButton} selectableLabelSecondButton={args.selectableLabelSecondButton} labelSecondButton={args.labelSecondButton} inputPlaceholder={args.inputPlaceholder} itemPerPage={args.itemPerPage} columns={args.columns} data={args.data} selectable={args.selectable} expandable={args.expandable} expandedData={args.expandedData} descriptionNoDataMessage={args.descriptionNoDataMessage} titleNoDataMessage={args.titleNoDataMessage} asideTitle={args.asideTitle} selectableIconSecondButton={args.selectableIconSecondButton} />\r\n    </>;\n}",
              ...(null ===
                (_withSelectableAndWithExpandable_parameters1 =
                  withSelectableAndWithExpandable.parameters) ||
              void 0 === _withSelectableAndWithExpandable_parameters1 ||
              null ===
                (_withSelectableAndWithExpandable_parameters_docs =
                  _withSelectableAndWithExpandable_parameters1.docs) ||
              void 0 === _withSelectableAndWithExpandable_parameters_docs
                ? void 0
                : _withSelectableAndWithExpandable_parameters_docs.source),
            },
          },
        }),
        (withFilters.parameters = {
          ...withFilters.parameters,
          docs: {
            ...(null === (_withFilters_parameters = withFilters.parameters) ||
            void 0 === _withFilters_parameters
              ? void 0
              : _withFilters_parameters.docs),
            source: {
              originalSource:
                "args => {\n  return <>\r\n      <DataTable pagesText={args.pagesText} titleNoDataFilteredMessage={args.titleNoDataFilteredMessage} labelButtonNoDataFilteredMessage={args.labelButtonNoDataFilteredMessage} descriptionNoDataFilteredMessage={args.descriptionNoDataFilteredMessage} availableFilters={args.filters} firstButtonLabelAside={args.firstButtonLabelAside} secondButtonLabelAside={args.secondButtonLabelAside} typeIconSecondButton={args.typeIconSecondButton} selectableLabelSecondButton={args.selectableLabelSecondButton} labelSecondButton={args.labelSecondButton} inputPlaceholder={args.inputPlaceholder} itemPerPage={args.itemPerPage} columns={args.columns} data={args.data} selectable={args.selectable} expandable={args.expandable} expandedData={args.expandedData} descriptionNoDataMessage={args.descriptionNoDataMessage} titleNoDataMessage={args.titleNoDataMessage} asideTitle={args.asideTitle} selectableIconSecondButton={args.selectableIconSecondButton} />\r\n    </>;\n}",
              ...(null ===
                (_withFilters_parameters1 = withFilters.parameters) ||
              void 0 === _withFilters_parameters1 ||
              null ===
                (_withFilters_parameters_docs =
                  _withFilters_parameters1.docs) ||
              void 0 === _withFilters_parameters_docs
                ? void 0
                : _withFilters_parameters_docs.source),
            },
          },
        });
      const __namedExportsOrder = [
        "Default",
        "withSelectable",
        "withExpandable",
        "withSelectableAndWithExpandable",
        "withFilters",
      ];
    },
    "./src/app/components/EmptyState/EmptyState.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_EmptyState_EmptyState,
      });
      var jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        Icon =
          (__webpack_require__(
            "./node_modules/next/dist/compiled/react/index.js",
          ),
          __webpack_require__("./src/app/components/Icon/Icon.tsx")),
        injectStylesIntoStyleTag = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag,
        ),
        styleDomAPI = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js",
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertBySelector.js",
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js",
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes,
        ),
        insertStyleElement = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js",
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js",
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        EmptyState = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/EmptyState/EmptyState.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(EmptyState.A, options);
      EmptyState.A && EmptyState.A.locals && EmptyState.A.locals;
      var Button = __webpack_require__(
        "./src/app/components/Button/Button.tsx",
      );
      const EmptyState_EmptyState_EmptyState = (param) => {
          let {
            title,
            description,
            icon,
            buttonContentPrimary,
            buttonContentSecondary,
            onClickActionPrimary,
            onClickActionSecondary,
          } = param;
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsxs)("div", {
              className: "empty-state-root",
              children: [
                (0, jsx_runtime.jsx)(Icon.A, { icon, size: "lg" }),
                (0, jsx_runtime.jsxs)("div", {
                  className: "empty-state-content",
                  children: [
                    (0, jsx_runtime.jsx)("h1", { children: title }),
                    (0, jsx_runtime.jsx)("p", { children: description }),
                  ],
                }),
                (0, jsx_runtime.jsxs)("div", {
                  className: "empty-state-footer",
                  children: [
                    buttonContentPrimary &&
                      (0, jsx_runtime.jsx)(Button.A, {
                        size: "md",
                        variant: "primary",
                        label: buttonContentPrimary,
                        onClick: onClickActionPrimary,
                      }),
                    buttonContentSecondary &&
                      (0, jsx_runtime.jsx)(Button.A, {
                        size: "md",
                        variant: "secondary",
                        label: buttonContentSecondary,
                        onClick: onClickActionSecondary,
                      }),
                  ],
                }),
              ],
            }),
          });
        },
        components_EmptyState_EmptyState = EmptyState_EmptyState_EmptyState;
      try {
        (EmptyState_EmptyState_EmptyState.displayName = "EmptyState"),
          (EmptyState_EmptyState_EmptyState.__docgenInfo = {
            description: "",
            displayName: "EmptyState",
            props: {
              title: {
                defaultValue: null,
                description: "",
                name: "title",
                required: !0,
                type: { name: "string" },
              },
              description: {
                defaultValue: null,
                description: "",
                name: "description",
                required: !0,
                type: { name: "string" },
              },
              icon: {
                defaultValue: null,
                description: "",
                name: "icon",
                required: !0,
                type: { name: "string" },
              },
              buttonContentPrimary: {
                defaultValue: null,
                description: "",
                name: "buttonContentPrimary",
                required: !1,
                type: { name: "string" },
              },
              buttonContentSecondary: {
                defaultValue: null,
                description: "",
                name: "buttonContentSecondary",
                required: !1,
                type: { name: "string" },
              },
              onClickActionPrimary: {
                defaultValue: null,
                description: "",
                name: "onClickActionPrimary",
                required: !1,
                type: { name: "(() => void)" },
              },
              onClickActionSecondary: {
                defaultValue: null,
                description: "",
                name: "onClickActionSecondary",
                required: !1,
                type: { name: "(() => void)" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/EmptyState/EmptyState.tsx#EmptyState"
            ] = {
              docgenInfo: EmptyState_EmptyState_EmptyState.__docgenInfo,
              name: "EmptyState",
              path: "src/app/components/EmptyState/EmptyState.tsx#EmptyState",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/InputCheckbox/InputCheckbox.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_InputCheckbox_InputCheckbox,
      });
      var jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        Icon =
          (__webpack_require__(
            "./node_modules/next/dist/compiled/react/index.js",
          ),
          __webpack_require__("./src/app/components/Icon/Icon.tsx")),
        injectStylesIntoStyleTag = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag,
        ),
        styleDomAPI = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js",
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertBySelector.js",
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js",
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes,
        ),
        insertStyleElement = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js",
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js",
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        InputCheckbox = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputCheckbox/InputCheckbox.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(InputCheckbox.A, options);
      InputCheckbox.A && InputCheckbox.A.locals && InputCheckbox.A.locals;
      function InputCheckbox_InputCheckbox_InputCheckbox(props) {
        const { checked, onChange, disabled, indeterminate, label } = props;
        return (0, jsx_runtime.jsxs)("div", {
          onClick: () => {
            disabled || onChange(!checked);
          },
          className: "check-box-root ".concat(disabled && "disabled"),
          children: [
            (0, jsx_runtime.jsx)("button", {
              className: "InputCheckbox "
                .concat(checked ? "checked" : "", " ")
                .concat(disabled ? "disabled" : ""),
              tabIndex: 0,
              role: "InputCheckbox",
              "aria-checked": checked,
              disabled,
              children: indeterminate
                ? (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
                    children: (0, jsx_runtime.jsx)("span", {
                      className: "indeterminate",
                      children: (0, jsx_runtime.jsx)(Icon.A, {
                        size: "md",
                        icon: "indeterminate_check_box",
                        fill: !0,
                      }),
                    }),
                  })
                : (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
                    children: checked
                      ? (0, jsx_runtime.jsx)("span", {
                          className: "checked",
                          children: (0, jsx_runtime.jsx)(Icon.A, {
                            size: "md",
                            icon: "check_box",
                            fill: !0,
                          }),
                        })
                      : (0, jsx_runtime.jsx)("span", {
                          className: "unchecked",
                          children: (0, jsx_runtime.jsx)(Icon.A, {
                            size: "md",
                            icon: "check_box_outline_blank",
                          }),
                        }),
                  }),
            }),
            label &&
              (0, jsx_runtime.jsx)("label", {
                className: "check-box-label ".concat(disabled && "disabled"),
                children: props.label,
              }),
          ],
        });
      }
      const components_InputCheckbox_InputCheckbox =
        InputCheckbox_InputCheckbox_InputCheckbox;
      try {
        (InputCheckbox_InputCheckbox_InputCheckbox.displayName =
          "InputCheckbox"),
          (InputCheckbox_InputCheckbox_InputCheckbox.__docgenInfo = {
            description: "",
            displayName: "InputCheckbox",
            props: {
              label: {
                defaultValue: null,
                description: "",
                name: "label",
                required: !1,
                type: { name: "string" },
              },
              disabled: {
                defaultValue: null,
                description: "",
                name: "disabled",
                required: !1,
                type: { name: "boolean" },
              },
              checked: {
                defaultValue: null,
                description: "",
                name: "checked",
                required: !0,
                type: { name: "boolean" },
              },
              onChange: {
                defaultValue: null,
                description: "",
                name: "onChange",
                required: !0,
                type: { name: "(checked: boolean) => void" },
              },
              indeterminate: {
                defaultValue: null,
                description: "",
                name: "indeterminate",
                required: !1,
                type: { name: "boolean" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/InputCheckbox/InputCheckbox.tsx#InputCheckbox"
            ] = {
              docgenInfo:
                InputCheckbox_InputCheckbox_InputCheckbox.__docgenInfo,
              name: "InputCheckbox",
              path: "src/app/components/InputCheckbox/InputCheckbox.tsx#InputCheckbox",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/InputSearch/InputSearch.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_InputSearch_InputSearch,
      });
      var jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        react = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        ),
        Icon = __webpack_require__("./src/app/components/Icon/Icon.tsx"),
        injectStylesIntoStyleTag = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag,
        ),
        styleDomAPI = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js",
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertBySelector.js",
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js",
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes,
        ),
        insertStyleElement = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js",
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js",
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        InputSearch = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputSearch/InputSearch.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(InputSearch.A, options);
      InputSearch.A && InputSearch.A.locals && InputSearch.A.locals;
      var ButtonIcon = __webpack_require__(
        "./src/app/components/ButtonIcon/ButtonIcon.tsx",
      );
      const InputSearch_InputSearch_InputSearch = (props) => {
          const [inputValue, setInputValue] = (0, react.useState)(""),
            [isActive, setIsActive] = (0, react.useState)(!1),
            inputRef = (0, react.useRef)(null);
          return (0, jsx_runtime.jsx)("div", {
            className: "input-search-root ".concat(
              props.disabled ? "disabled" : "",
            ),
            onClick: () => {
              setIsActive(!0), inputRef.current && inputRef.current.focus();
            },
            children: (0, jsx_runtime.jsxs)("div", {
              className: "input-search",
              children: [
                (0, jsx_runtime.jsx)(Icon.A, { size: "md", icon: "search" }),
                (0, jsx_runtime.jsx)("input", {
                  disabled: props.disabled,
                  size: 1e3,
                  type: "text",
                  placeholder: props.placeholder,
                  value: inputValue,
                  onChange: (event) => {
                    const { value } = event.target;
                    setInputValue(value),
                      props.onChange && props.onChange(value);
                  },
                  onBlur: () => {
                    setIsActive(!1);
                  },
                  ref: inputRef,
                }),
                inputValue &&
                  (0, jsx_runtime.jsx)("button", {
                    className: "input-search-button-close ".concat(
                      inputValue && "visible",
                    ),
                    onClick: () => {
                      setInputValue(""), props.onChange && props.onChange("");
                    },
                    children: (0, jsx_runtime.jsx)(ButtonIcon.A, {
                      variant: "primary",
                      typeIcon: "close",
                      type: "plain",
                      size: "sm",
                    }),
                  }),
              ],
            }),
          });
        },
        components_InputSearch_InputSearch =
          InputSearch_InputSearch_InputSearch;
      try {
        (InputSearch_InputSearch_InputSearch.displayName = "InputSearch"),
          (InputSearch_InputSearch_InputSearch.__docgenInfo = {
            description: "",
            displayName: "InputSearch",
            props: {
              disabled: {
                defaultValue: null,
                description: "",
                name: "disabled",
                required: !1,
                type: { name: "boolean" },
              },
              onChange: {
                defaultValue: null,
                description: "",
                name: "onChange",
                required: !1,
                type: { name: "((value: string) => void)" },
              },
              placeholder: {
                defaultValue: null,
                description: "",
                name: "placeholder",
                required: !0,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/InputSearch/InputSearch.tsx#InputSearch"
            ] = {
              docgenInfo: InputSearch_InputSearch_InputSearch.__docgenInfo,
              name: "InputSearch",
              path: "src/app/components/InputSearch/InputSearch.tsx#InputSearch",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/Modal/Modal.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        Tg: () => ContentModal,
        J9: () => FooterModal,
        Ay: () => components_Modal_Modal,
      });
      var jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        injectStylesIntoStyleTag = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag,
        ),
        styleDomAPI = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js",
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertBySelector.js",
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js",
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes,
        ),
        insertStyleElement = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js",
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js",
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        Modal = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Modal/Modal.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Modal.A, options);
      Modal.A && Modal.A.locals && Modal.A.locals;
      var ButtonIcon = __webpack_require__(
        "./src/app/components/ButtonIcon/ButtonIcon.tsx",
      );
      __webpack_require__("./node_modules/next/dist/compiled/react/index.js");
      const Modal_Modal_Modal = (param) => {
          let {
            title,
            description,
            content,
            hideModal,
            isOpen,
            footer,
            dismissible,
          } = param;
          const modalClass = isOpen ? "modal-root visible" : "modal-root",
            ghostClass = isOpen ? "modal-ghost visible" : "modal-ghost";
          return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              (0, jsx_runtime.jsxs)("div", {
                className: modalClass,
                children: [
                  (0, jsx_runtime.jsxs)("div", {
                    className: "modal-header",
                    children: [
                      (0, jsx_runtime.jsxs)("div", {
                        className: "modal-title",
                        children: [
                          (0, jsx_runtime.jsx)("div", { children: title }),
                          dismissible &&
                            (0, jsx_runtime.jsx)(ButtonIcon.A, {
                              variant: "primary",
                              size: "md",
                              typeIcon: "close",
                              type: "plain",
                              onClick: hideModal,
                            }),
                        ],
                      }),
                      (0, jsx_runtime.jsx)("div", {
                        className: "modal-description",
                        children: description,
                      }),
                    ],
                  }),
                  content,
                  footer,
                ],
              }),
              (0, jsx_runtime.jsx)("div", {
                className: ghostClass,
                onClick: dismissible ? hideModal : void 0,
              }),
            ],
          });
        },
        ContentModal = (param) => {
          let { children } = param;
          return (0, jsx_runtime.jsx)("div", {
            className: "modal-content",
            children,
          });
        },
        FooterModal = (param) => {
          let { children } = param;
          return (0, jsx_runtime.jsx)("div", {
            className: "modal-footer",
            children,
          });
        },
        components_Modal_Modal = Modal_Modal_Modal;
      try {
        (ContentModal.displayName = "ContentModal"),
          (ContentModal.__docgenInfo = {
            description: "",
            displayName: "ContentModal",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Modal/Modal.tsx#ContentModal"
            ] = {
              docgenInfo: ContentModal.__docgenInfo,
              name: "ContentModal",
              path: "src/app/components/Modal/Modal.tsx#ContentModal",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (FooterModal.displayName = "FooterModal"),
          (FooterModal.__docgenInfo = {
            description: "",
            displayName: "FooterModal",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Modal/Modal.tsx#FooterModal"
            ] = {
              docgenInfo: FooterModal.__docgenInfo,
              name: "FooterModal",
              path: "src/app/components/Modal/Modal.tsx#FooterModal",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Modal_Modal_Modal.displayName = "Modal"),
          (Modal_Modal_Modal.__docgenInfo = {
            description: "",
            displayName: "Modal",
            props: {
              title: {
                defaultValue: null,
                description: "",
                name: "title",
                required: !0,
                type: { name: "string" },
              },
              description: {
                defaultValue: null,
                description: "",
                name: "description",
                required: !0,
                type: { name: "string" },
              },
              content: {
                defaultValue: null,
                description: "",
                name: "content",
                required: !1,
                type: { name: "ReactNode" },
              },
              dismissible: {
                defaultValue: null,
                description: "",
                name: "dismissible",
                required: !1,
                type: { name: "boolean" },
              },
              hideModal: {
                defaultValue: null,
                description: "",
                name: "hideModal",
                required: !0,
                type: { name: "() => void" },
              },
              isOpen: {
                defaultValue: null,
                description: "",
                name: "isOpen",
                required: !0,
                type: { name: "boolean" },
              },
              footer: {
                defaultValue: null,
                description: "",
                name: "footer",
                required: !1,
                type: { name: "ReactNode" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Modal/Modal.tsx#Modal"
            ] = {
              docgenInfo: Modal_Modal_Modal.__docgenInfo,
              name: "Modal",
              path: "src/app/components/Modal/Modal.tsx#Modal",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/Pagination/Pagination.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_Pagination_Pagination,
      });
      var jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        injectStylesIntoStyleTag = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag,
        ),
        styleDomAPI = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js",
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertBySelector.js",
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js",
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes,
        ),
        insertStyleElement = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js",
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js",
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        Pagination = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Pagination/Pagination.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Pagination.A, options);
      Pagination.A && Pagination.A.locals && Pagination.A.locals;
      var Icon = __webpack_require__("./src/app/components/Icon/Icon.tsx");
      __webpack_require__("./node_modules/next/dist/compiled/react/index.js");
      const PaginationItem = (param) => {
          let { arrow, disable, click } = param;
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)("div", {
              className: "PaginationItem",
              children:
                "left" === arrow
                  ? (0, jsx_runtime.jsx)("button", {
                      className: "arrow_back",
                      disabled: disable,
                      onClick: click,
                      children: (0, jsx_runtime.jsx)(Icon.A, {
                        icon: "arrow_back",
                        size: "md",
                      }),
                    })
                  : "right" === arrow
                    ? (0, jsx_runtime.jsx)("button", {
                        className: "arrow_forward",
                        disabled: disable,
                        onClick: click,
                        children: (0, jsx_runtime.jsx)(Icon.A, {
                          icon: "arrow_forward",
                          size: "md",
                        }),
                      })
                    : "error",
            }),
          });
        },
        Pagination_Pagination_Pagination = (param) => {
          let {
            disableRight,
            disableLeft,
            variant,
            onClickRight,
            onClickLeft,
            label,
          } = param;
          return (0, jsx_runtime.jsx)("div", {
            className: "Pagination",
            children:
              "noLabel" === variant
                ? (0, jsx_runtime.jsxs)("div", {
                    className: "noLabel",
                    children: [
                      (0, jsx_runtime.jsx)(PaginationItem, {
                        arrow: "left",
                        disable: disableLeft,
                        click: onClickLeft,
                      }),
                      (0, jsx_runtime.jsx)(PaginationItem, {
                        arrow: "right",
                        disable: disableRight,
                        click: onClickRight,
                      }),
                    ],
                  })
                : "leftLabel" === variant
                  ? (0, jsx_runtime.jsxs)("div", {
                      className: "leftLabel",
                      children: [
                        (0, jsx_runtime.jsx)("p", { children: label }),
                        (0, jsx_runtime.jsxs)("div", {
                          children: [
                            (0, jsx_runtime.jsx)(PaginationItem, {
                              arrow: "left",
                              disable: disableLeft,
                              click: onClickLeft,
                            }),
                            (0, jsx_runtime.jsx)(PaginationItem, {
                              arrow: "right",
                              disable: disableRight,
                              click: onClickRight,
                            }),
                          ],
                        }),
                      ],
                    })
                  : "centerLabel" === variant
                    ? (0, jsx_runtime.jsxs)("div", {
                        className: "centerLabel",
                        children: [
                          (0, jsx_runtime.jsx)(PaginationItem, {
                            arrow: "left",
                            disable: disableLeft,
                            click: onClickLeft,
                          }),
                          (0, jsx_runtime.jsx)("p", { children: label }),
                          (0, jsx_runtime.jsx)(PaginationItem, {
                            arrow: "right",
                            disable: disableRight,
                            click: onClickRight,
                          }),
                        ],
                      })
                    : "error",
          });
        },
        components_Pagination_Pagination = Pagination_Pagination_Pagination;
      try {
        (Pagination_Pagination_Pagination.displayName = "Pagination"),
          (Pagination_Pagination_Pagination.__docgenInfo = {
            description: "",
            displayName: "Pagination",
            props: {
              variant: {
                defaultValue: null,
                description: "",
                name: "variant",
                required: !0,
                type: {
                  name: "enum",
                  value: [
                    { value: '"noLabel"' },
                    { value: '"leftLabel"' },
                    { value: '"centerLabel"' },
                  ],
                },
              },
              disableLeft: {
                defaultValue: null,
                description: "",
                name: "disableLeft",
                required: !1,
                type: { name: "boolean" },
              },
              disableRight: {
                defaultValue: null,
                description: "",
                name: "disableRight",
                required: !1,
                type: { name: "boolean" },
              },
              onClickLeft: {
                defaultValue: null,
                description: "",
                name: "onClickLeft",
                required: !1,
                type: { name: "(() => void)" },
              },
              onClickRight: {
                defaultValue: null,
                description: "",
                name: "onClickRight",
                required: !1,
                type: { name: "(() => void)" },
              },
              label: {
                defaultValue: null,
                description: "",
                name: "label",
                required: !0,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Pagination/Pagination.tsx#Pagination"
            ] = {
              docgenInfo: Pagination_Pagination_Pagination.__docgenInfo,
              name: "Pagination",
              path: "src/app/components/Pagination/Pagination.tsx#Pagination",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/Tag/Tag.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_Tag_Tag,
      });
      var jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        react = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        ),
        ButtonIcon = __webpack_require__(
          "./src/app/components/ButtonIcon/ButtonIcon.tsx",
        ),
        injectStylesIntoStyleTag = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag,
        ),
        styleDomAPI = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js",
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertBySelector.js",
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js",
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes,
        ),
        insertStyleElement = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js",
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js",
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        Tag = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Tag/Tag.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Tag.A, options);
      Tag.A && Tag.A.locals && Tag.A.locals;
      function Tag_Tag_Tag(props) {
        const [closed, setClosed] = (0, react.useState)(!1);
        return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children:
            !closed &&
            (0, jsx_runtime.jsxs)("div", {
              className: "tag-root ".concat(props.variant),
              children: [
                props.content,
                (0, jsx_runtime.jsx)("span", {
                  children: (0, jsx_runtime.jsx)(ButtonIcon.A, {
                    type: "plain",
                    size: "sm",
                    typeIcon: "close",
                    variant:
                      "secondary" === props.variant ? "primary" : "on-color",
                    onClick: () => {
                      setClosed(!0), props.onClose && props.onClose();
                    },
                  }),
                }),
              ],
            }),
        });
      }
      const components_Tag_Tag = Tag_Tag_Tag;
      try {
        (Tag_Tag_Tag.displayName = "Tag"),
          (Tag_Tag_Tag.__docgenInfo = {
            description: "",
            displayName: "Tag",
            props: {
              content: {
                defaultValue: null,
                description: "",
                name: "content",
                required: !0,
                type: { name: "string" },
              },
              variant: {
                defaultValue: null,
                description: "",
                name: "variant",
                required: !0,
                type: {
                  name: "enum",
                  value: [
                    { value: '"primary"' },
                    { value: '"secondary"' },
                    { value: '"success"' },
                    { value: '"warning"' },
                  ],
                },
              },
              onClose: {
                defaultValue: null,
                description: "",
                name: "onClose",
                required: !1,
                type: { name: "(() => void)" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/app/components/Tag/Tag.tsx#Tag"] = {
              docgenInfo: Tag_Tag_Tag.__docgenInfo,
              name: "Tag",
              path: "src/app/components/Tag/Tag.tsx#Tag",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/DataTable/DataTable.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/sourceMaps.js",
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/api.js",
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".aside-filter .aside-title-col{color:var(--s-color-content-light);font:var(--s-typography-heading-x-small);text-transform:uppercase}.aside-filter .aside-content-col{display:flex;flex-direction:column;gap:var(--s-spacing-xx-small)}.render-no-data-message{margin:var(--s-spacing-xx-large) var(--s-spacing-x-small)}.data-table-root{display:flex;overflow:auto;flex-direction:column;border:var(--s-border-width-hairline) solid var(--s-color-border-default);border-radius:var(--s-border-radius-medium);background-color:var(--s-color-fill-default)}.data-table-root .tags{border-top:1px solid var(--s-color-border-default);padding:var(--s-spacing-x-small) var(--s-spacing-x-small) var(--s-spacing-xx-small) var(--s-spacing-x-small);display:flex;flex-direction:row;gap:var(--s-spacing-nano);overflow-x:scroll}.data-table-root .tags::-webkit-scrollbar{height:var(--s-spacing-nano);border-radius:12px}.data-table-root .tags::-webkit-scrollbar-thumb{background:var(--s-color-fill-default-light);border-radius:12px}.data-table-root .data-table-header-selected-items{background-color:var(--s-color-fill-highlight);border-top-left-radius:7px;border-top-right-radius:7px;display:flex;align-items:center;justify-content:space-between;padding:var(--s-spacing-x-small) var(--s-spacing-small)}.data-table-root .data-table-header-selected-items .data-table-header-selected-items-message{font:var(--s-typography-paragraph-regular);color:var(--s-color-content-on-color)}.data-table-root .data-table-header-selected-items .data-table-header-selected-items-buttons{display:flex;gap:var(--s-spacing-xx-small);align-items:center}.data-table-root .data-table-header{display:flex;padding:var(--s-spacing-x-small);gap:var(--s-spacing-xx-small)}.data-table-root .data-table-header .data-table-header-actions{display:flex;gap:var(--s-spacing-xx-small)}.data-table-root .data-table-content{display:grid;grid-template-rows:auto;overflow-x:scroll}.data-table-root .data-table-content.overflowed .data-table-content-header-expandable{position:sticky;left:0;z-index:2}.data-table-root .data-table-content.overflowed .data-table-content-header-checkbox{position:sticky;left:56px;z-index:2}.data-table-root .data-table-content.overflowed .th.sticky-first-column{position:sticky;z-index:2;box-shadow:4px 0 0 0 rgba(0,0,0,.04)}.data-table-root .data-table-content.overflowed .data-table-content-body .fixed.sticky-first-column{position:sticky;z-index:2;box-shadow:4px 0 0 0 rgba(0,0,0,.04)}.data-table-root .data-table-content.overflowed .data-table-content-body-expandable{position:sticky;left:0;z-index:2}.data-table-root .data-table-content.overflowed .data-table-content-body-checkbox{position:sticky;left:56px;z-index:2}.data-table-root .data-table-content::-webkit-scrollbar{height:4px;border-radius:12px}.data-table-root .data-table-content::-webkit-scrollbar-thumb{background:var(--s-color-fill-default-light);border-radius:12px}.data-table-root .data-table-content .data-table-content-header{display:grid;grid-auto-flow:column;grid-template-columns:repeat(auto-fit, minmax(120px, 1fr));background-color:var(--s-color-fill-default-light)}.data-table-root .data-table-content .data-table-content-header .th{background-color:var(--s-color-fill-default-light);padding:var(--s-spacing-xx-small) var(--s-spacing-small);font:var(--s-typography-paragraph-strong);text-transform:uppercase;color:var(--s-color-content-light);white-space:nowrap;display:flex;justify-content:space-between;flex-direction:row;align-items:center;cursor:pointer;user-select:none;transition:.2s background ease-in}.data-table-root .data-table-content .data-table-content-header .th .icon{display:flex;opacity:0;transition:.2s opacity ease-in}.data-table-root .data-table-content .data-table-content-header .th:hover{background-color:var(--s-color-fill-default-hover)}.data-table-root .data-table-content .data-table-content-header .th:hover .icon{opacity:1}.data-table-root .data-table-content .data-table-content-header .data-table-content-header-checkbox{background-color:var(--s-color-fill-default-light);width:56px;align-items:center;display:flex;justify-content:center;height:40px}.data-table-root .data-table-content .data-table-content-header .data-table-content-header-expandable{background-color:var(--s-color-fill-default-light);width:56px;align-items:center;display:flex;justify-content:center;height:40px}.data-table-root .data-table-content .data-table-content-header .data-table-content-header-expandable.down .button-icon .material-symbols-outlined{transition:.3s all ease-in-out;transform:rotate(0deg)}.data-table-root .data-table-content .data-table-content-header .data-table-content-header-expandable.up .button-icon .material-symbols-outlined{transform:rotate(-180deg);transition:.3s all ease-in-out}.data-table-root .data-table-content .space-expanded-content{height:56px;width:56px}.data-table-root .data-table-content .expanded-content{width:100%;border-top:var(--s-border-width-hairline) solid var(--s-color-border-default);padding:var(--s-spacing-small);font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default)}.data-table-root .data-table-content .data-table-content-body{display:grid;grid-auto-flow:column;grid-template-columns:repeat(auto-fit, minmax(120px, 1fr));width:100%;align-items:center;background-color:var(--s-color-fill-default);border-top:var(--s-border-width-hairline) solid var(--s-color-border-default);box-sizing:border-box}.data-table-root .data-table-content .data-table-content-body .td{min-width:120px;padding:var(--s-spacing-small);font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default);height:100%;white-space:nowrap;background-color:var(--s-color-fill-default)}.data-table-root .data-table-content .data-table-content-body .data-table-content-body-checkbox{width:56px;height:56px;align-items:center;display:flex;justify-content:center;flex-direction:column;background-color:var(--s-color-fill-default)}.data-table-root .data-table-content .data-table-content-body .data-table-content-body-expandable{width:56px;align-items:center;display:flex;justify-content:center;height:56px;background-color:var(--s-color-fill-default)}.data-table-root .data-table-content .data-table-content-body .data-table-content-body-expandable.down .button-icon .material-symbols-outlined{transition:.3s all ease-in-out;transform:rotate(0deg)}.data-table-root .data-table-content .data-table-content-body .data-table-content-body-expandable.up .button-icon .material-symbols-outlined{transform:rotate(-180deg);transition:.3s all ease-in-out}.data-table-root .data-table-footer{border-top:var(--s-border-width-hairline) solid var(--s-color-border-default)}@media screen and (max-width: 490px){.data-table-root .data-table-header-actions{width:100%;gap:var(--s-spacing-xx-small)}.data-table-root .data-table-header-selected-items{border:var(--s-border-width-hairline) solid var(--s-color-border-highlight);flex-direction:column;align-items:start;gap:var(--s-spacing-xx-small);height:112px;box-sizing:border-box;padding:var(--s-spacing-x-small)}.data-table-root .data-table-header-selected-items-message{padding:var(--s-spacing-xx-small) 0}.data-table-root .data-table-header{flex-direction:column;gap:var(--s-spacing-xx-small);padding:var(--s-spacing-x-small)}}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/DataTable/DataTable.scss",
            ],
            names: [],
            mappings:
              "AACE,+BACE,kCAAA,CACA,wCAAA,CACA,wBAAA,CAGF,iCACE,YAAA,CACA,qBAAA,CACA,6BAAA,CAIJ,wBACE,yDAAA,CAGF,iBACE,YAAA,CACA,aAAA,CACA,qBAAA,CACA,yEAAA,CACA,2CAAA,CACA,4CAAA,CAEA,uBACE,kDAAA,CACA,4GAAA,CAEA,YAAA,CACA,kBAAA,CACA,yBAAA,CACA,iBAAA,CAEA,0CACE,4BAAA,CACA,kBAAA,CAGF,gDACE,4CAAA,CACA,kBAAA,CAIJ,mDACE,8CAAA,CACA,0BAAA,CACA,2BAAA,CACA,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,uDAAA,CAEA,6FACE,0CAAA,CACA,qCAAA,CAGF,6FACE,YAAA,CACA,6BAAA,CACA,kBAAA,CAIJ,oCACE,YAAA,CACA,gCAAA,CACA,6BAAA,CAEA,+DACE,YAAA,CACA,6BAAA,CAIJ,qCACE,YAAA,CACA,uBAAA,CACA,iBAAA,CAGE,sFACE,eAAA,CACA,MAAA,CACA,SAAA,CAEF,oFACE,eAAA,CACA,SAAA,CACA,SAAA,CAGF,wEACE,eAAA,CACA,SAAA,CACA,oCAAA,CAGF,oGACE,eAAA,CACA,SAAA,CACA,oCAAA,CAGF,oFACE,eAAA,CACA,MAAA,CACA,SAAA,CAGF,kFACE,eAAA,CACA,SAAA,CACA,SAAA,CAIJ,wDACE,UAAA,CACA,kBAAA,CAGF,8DACE,4CAAA,CACA,kBAAA,CAGF,gEACE,YAAA,CACA,qBAAA,CACA,0DAAA,CAIA,kDAAA,CAEA,oEACE,kDAAA,CACA,wDAAA,CACA,yCAAA,CACA,wBAAA,CACA,kCAAA,CACA,kBAAA,CACA,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,kBAAA,CACA,cAAA,CACA,gBAAA,CACA,iCAAA,CAEA,0EACE,YAAA,CACA,SAAA,CACA,8BAAA,CAGF,0EACE,kDAAA,CACA,gFACE,SAAA,CAKN,oGACE,kDAAA,CACA,UAAA,CACA,kBAAA,CACA,YAAA,CACA,sBAAA,CACA,WAAA,CAGF,sGACE,kDAAA,CACA,UAAA,CACA,kBAAA,CACA,YAAA,CACA,sBAAA,CACA,WAAA,CAEA,mJACE,8BAAA,CACA,sBAAA,CAGF,iJACE,yBAAA,CACA,8BAAA,CAKN,6DACE,WAAA,CACA,UAAA,CAGF,uDACE,UAAA,CACA,6EAAA,CAEA,8BAAA,CACA,0CAAA,CACA,oCAAA,CAGF,8DACE,YAAA,CACA,qBAAA,CACA,0DAAA,CACA,UAAA,CACA,kBAAA,CACA,4CAAA,CACA,6EAAA,CAEA,qBAAA,CAEA,kEACE,eAAA,CACA,8BAAA,CACA,0CAAA,CACA,oCAAA,CACA,WAAA,CACA,kBAAA,CACA,4CAAA,CAGF,gGACE,UAAA,CACA,WAAA,CACA,kBAAA,CACA,YAAA,CACA,sBAAA,CACA,qBAAA,CACA,4CAAA,CAGF,kGACE,UAAA,CACA,kBAAA,CACA,YAAA,CACA,sBAAA,CACA,WAAA,CACA,4CAAA,CAEA,+IACE,8BAAA,CACA,sBAAA,CAGF,6IACE,yBAAA,CACA,8BAAA,CAMR,oCACE,6EAAA,CAKJ,qCAEI,4CACE,UAAA,CACA,6BAAA,CAEF,mDACE,2EAAA,CAEA,qBAAA,CACA,iBAAA,CACA,6BAAA,CACA,YAAA,CACA,qBAAA,CACA,gCAAA,CAEF,2DACE,mCAAA,CAGF,oCACE,qBAAA,CACA,6BAAA,CACA,gCAAA,CAAA",
            sourcesContent: [
              ".aside-filter {\n  .aside-title-col {\n    color: var(--s-color-content-light);\n    font: var(--s-typography-heading-x-small);\n    text-transform: uppercase;\n  }\n\n  .aside-content-col {\n    display: flex;\n    flex-direction: column;\n    gap: var(--s-spacing-xx-small);\n  }\n}\n\n.render-no-data-message {\n  margin: var(--s-spacing-xx-large) var(--s-spacing-x-small);\n}\n\n.data-table-root {\n  display: flex;\n  overflow: auto;\n  flex-direction: column;\n  border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n  border-radius: var(--s-border-radius-medium);\n  background-color: var(--s-color-fill-default);\n\n  .tags {\n    border-top: 1px solid var(--s-color-border-default);\n    padding: var(--s-spacing-x-small) var(--s-spacing-x-small)\n      var(--s-spacing-xx-small) var(--s-spacing-x-small);\n    display: flex;\n    flex-direction: row;\n    gap: var(--s-spacing-nano);\n    overflow-x: scroll;\n\n    &::-webkit-scrollbar {\n      height: var(--s-spacing-nano);\n      border-radius: 12px;\n    }\n\n    &::-webkit-scrollbar-thumb {\n      background: var(--s-color-fill-default-light);\n      border-radius: 12px;\n    }\n  }\n\n  .data-table-header-selected-items {\n    background-color: var(--s-color-fill-highlight);\n    border-top-left-radius: 7px;\n    border-top-right-radius: 7px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: var(--s-spacing-x-small) var(--s-spacing-small);\n\n    .data-table-header-selected-items-message {\n      font: var(--s-typography-paragraph-regular);\n      color: var(--s-color-content-on-color);\n    }\n\n    .data-table-header-selected-items-buttons {\n      display: flex;\n      gap: var(--s-spacing-xx-small);\n      align-items: center;\n    }\n  }\n\n  .data-table-header {\n    display: flex;\n    padding: var(--s-spacing-x-small);\n    gap: var(--s-spacing-xx-small);\n\n    .data-table-header-actions {\n      display: flex;\n      gap: var(--s-spacing-xx-small);\n    }\n  }\n\n  .data-table-content {\n    display: grid;\n    grid-template-rows: auto;\n    overflow-x: scroll;\n\n    &.overflowed {\n      .data-table-content-header-expandable {\n        position: sticky;\n        left: 0;\n        z-index: 2;\n      }\n      .data-table-content-header-checkbox {\n        position: sticky;\n        left: 56px;\n        z-index: 2;\n      }\n\n      .th.sticky-first-column {\n        position: sticky;\n        z-index: 2;\n        box-shadow: 4px 0 0 0 rgba(0, 0, 0, 0.04);\n      }\n\n      .data-table-content-body .fixed.sticky-first-column {\n        position: sticky;\n        z-index: 2;\n        box-shadow: 4px 0 0 0 rgba(0, 0, 0, 0.04);\n      }\n\n      .data-table-content-body-expandable {\n        position: sticky;\n        left: 0;\n        z-index: 2;\n      }\n\n      .data-table-content-body-checkbox {\n        position: sticky;\n        left: 56px;\n        z-index: 2;\n      }\n    }\n\n    &::-webkit-scrollbar {\n      height: 4px;\n      border-radius: 12px;\n    }\n\n    &::-webkit-scrollbar-thumb {\n      background: var(--s-color-fill-default-light);\n      border-radius: 12px;\n    }\n\n    .data-table-content-header {\n      display: grid;\n      grid-auto-flow: column;\n      grid-template-columns: repeat(\n        auto-fit,\n        minmax(120px, 1fr)\n      ); /* Define as colunas com tamanho mínimo de 120px e ocupando o máximo de espaço disponível */\n      background-color: var(--s-color-fill-default-light);\n\n      .th {\n        background-color: var(--s-color-fill-default-light);\n        padding: var(--s-spacing-xx-small) var(--s-spacing-small);\n        font: var(--s-typography-paragraph-strong);\n        text-transform: uppercase;\n        color: var(--s-color-content-light);\n        white-space: nowrap;\n        display: flex;\n        justify-content: space-between;\n        flex-direction: row;\n        align-items: center;\n        cursor: pointer;\n        user-select: none;\n        transition: 0.2s background ease-in;\n\n        .icon {\n          display: flex;\n          opacity: 0;\n          transition: 0.2s opacity ease-in;\n        }\n\n        &:hover {\n          background-color: var(--s-color-fill-default-hover);\n          .icon {\n            opacity: 1;\n          }\n        }\n      }\n\n      .data-table-content-header-checkbox {\n        background-color: var(--s-color-fill-default-light);\n        width: 56px;\n        align-items: center;\n        display: flex;\n        justify-content: center;\n        height: 40px;\n      }\n\n      .data-table-content-header-expandable {\n        background-color: var(--s-color-fill-default-light);\n        width: 56px;\n        align-items: center;\n        display: flex;\n        justify-content: center;\n        height: 40px;\n\n        &.down .button-icon .material-symbols-outlined {\n          transition: 0.3s all ease-in-out;\n          transform: rotate(0deg);\n        }\n\n        &.up .button-icon .material-symbols-outlined {\n          transform: rotate(-180deg);\n          transition: 0.3s all ease-in-out;\n        }\n      }\n    }\n\n    .space-expanded-content {\n      height: 56px;\n      width: 56px;\n    }\n\n    .expanded-content {\n      width: 100%;\n      border-top: var(--s-border-width-hairline) solid\n        var(--s-color-border-default);\n      padding: var(--s-spacing-small);\n      font: var(--s-typography-paragraph-regular);\n      color: var(--s-color-content-default);\n    }\n\n    .data-table-content-body {\n      display: grid;\n      grid-auto-flow: column;\n      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n      width: 100%;\n      align-items: center;\n      background-color: var(--s-color-fill-default);\n      border-top: var(--s-border-width-hairline) solid\n        var(--s-color-border-default);\n      box-sizing: border-box;\n\n      .td {\n        min-width: 120px;\n        padding: var(--s-spacing-small);\n        font: var(--s-typography-paragraph-regular);\n        color: var(--s-color-content-default);\n        height: 100%;\n        white-space: nowrap;\n        background-color: var(--s-color-fill-default);\n      }\n\n      .data-table-content-body-checkbox {\n        width: 56px;\n        height: 56px;\n        align-items: center;\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n        background-color: var(--s-color-fill-default);\n      }\n\n      .data-table-content-body-expandable {\n        width: 56px;\n        align-items: center;\n        display: flex;\n        justify-content: center;\n        height: 56px;\n        background-color: var(--s-color-fill-default);\n\n        &.down .button-icon .material-symbols-outlined {\n          transition: 0.3s all ease-in-out;\n          transform: rotate(0deg);\n        }\n\n        &.up .button-icon .material-symbols-outlined {\n          transform: rotate(-180deg);\n          transition: 0.3s all ease-in-out;\n        }\n      }\n    }\n  }\n\n  .data-table-footer {\n    border-top: var(--s-border-width-hairline) solid\n      var(--s-color-border-default);\n  }\n}\n\n@media screen and (max-width: 490px) {\n  .data-table-root {\n    .data-table-header-actions {\n      width: 100%;\n      gap: var(--s-spacing-xx-small);\n    }\n    .data-table-header-selected-items {\n      border: var(--s-border-width-hairline) solid\n        var(--s-color-border-highlight);\n      flex-direction: column;\n      align-items: start;\n      gap: var(--s-spacing-xx-small);\n      height: 112px;\n      box-sizing: border-box;\n      padding: var(--s-spacing-x-small);\n    }\n    .data-table-header-selected-items-message {\n      padding: var(--s-spacing-xx-small) 0;\n    }\n\n    .data-table-header {\n      flex-direction: column;\n      gap: var(--s-spacing-xx-small);\n      padding: var(--s-spacing-x-small);\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/EmptyState/EmptyState.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/sourceMaps.js",
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/api.js",
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".empty-state-root{display:flex;flex-direction:column;align-items:center;width:100%;gap:var(--s-spacing-medium);color:var(--s-color-content-default)}.empty-state-root .empty-state-content{display:flex;align-items:center;gap:var(--s-spacing-xx-small);flex-direction:column;text-align:center}.empty-state-root .empty-state-content h1{font:var(--s-typography-heading-medium);color:var(--s-color-content-default)}.empty-state-root .empty-state-content p{font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default)}.empty-state-root .empty-state-footer{display:flex;gap:var(--s-spacing-xx-small)}@media screen and (max-width: 490px){.empty-state-root .empty-state-footer{flex-direction:column}}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/EmptyState/EmptyState.scss",
            ],
            names: [],
            mappings:
              "AAAA,kBACE,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,UAAA,CACA,2BAAA,CACA,oCAAA,CAEA,uCACE,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,qBAAA,CACA,iBAAA,CAEA,0CACE,uCAAA,CACA,oCAAA,CAGF,yCACE,0CAAA,CACA,oCAAA,CAIJ,sCACE,YAAA,CACA,6BAAA,CAIJ,qCAEI,sCACE,qBAAA,CAAA",
            sourcesContent: [
              ".empty-state-root {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  gap: var(--s-spacing-medium);\n  color: var(--s-color-content-default);\n\n  .empty-state-content {\n    display: flex;\n    align-items: center;\n    gap: var(--s-spacing-xx-small);\n    flex-direction: column;\n    text-align: center;\n\n    h1 {\n      font: var(--s-typography-heading-medium);\n      color: var(--s-color-content-default);\n    }\n\n    p {\n      font: var(--s-typography-paragraph-regular);\n      color: var(--s-color-content-default);\n    }\n  }\n\n  .empty-state-footer {\n    display: flex;\n    gap: var(--s-spacing-xx-small);\n  }\n}\n\n@media screen and (max-width: 490px) {\n  .empty-state-root {\n    .empty-state-footer {\n      flex-direction: column;\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputCheckbox/InputCheckbox.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/sourceMaps.js",
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/api.js",
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".check-box-root{width:fit-content;height:fit-content;display:flex;user-select:none;cursor:pointer;gap:var(--s-spacing-xx-small)}.check-box-root.disabled{cursor:auto}.check-box-root span{width:24px;height:24px}.check-box-root .InputCheckbox{border:none;cursor:pointer;background-color:rgba(0,0,0,0);display:flex;align-items:center;justify-content:center;flex-direction:row;width:22px;height:22px;border-radius:var(--s-border-radius-small)}.check-box-root .InputCheckbox:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-style:solid}.check-box-root .InputCheckbox.disabled{color:var(--s-color-content-disable)}.check-box-root .InputCheckbox.disabled:focus{outline:none}.check-box-root .InputCheckbox.disabled .unchecked{cursor:auto;color:var(--s-color-content-disable)}.check-box-root .InputCheckbox.disabled .unchecked:hover{color:var(--s-color-content-disable)}.check-box-root .InputCheckbox .unchecked{color:var(--s-color-content-default)}.check-box-root .InputCheckbox .unchecked:hover{color:var(--s-color-content-highlight)}.check-box-root .InputCheckbox .checked,.check-box-root .InputCheckbox .indeterminate{user-select:none;cursor:pointer;color:var(--s-color-content-highlight);background-color:rgba(0,0,0,0)}.check-box-root .check-box-label{font:var(--s-typography-label-medium);color:var(--s-color-content-default);cursor:pointer}.check-box-root .check-box-label.disabled{cursor:auto;color:var(--s-color-content-disable)}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/InputCheckbox/InputCheckbox.scss",
            ],
            names: [],
            mappings:
              "AAAA,gBACE,iBAAA,CACA,kBAAA,CACA,YAAA,CACA,gBAAA,CACA,cAAA,CACA,6BAAA,CAEA,yBACE,WAAA,CAGF,qBACE,UAAA,CACA,WAAA,CAGF,+BACE,WAAA,CACA,cAAA,CACA,8BAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,kBAAA,CACA,UAAA,CACA,WAAA,CACA,0CAAA,CAEA,6CACE,wCAAA,CACA,2CAAA,CACA,mBAAA,CAGF,wCACE,oCAAA,CAEA,8CACE,YAAA,CAIJ,mDACE,WAAA,CACA,oCAAA,CAEA,yDACE,oCAAA,CAIJ,0CACE,oCAAA,CAGF,gDACE,sCAAA,CAGF,sFAEE,gBAAA,CACA,cAAA,CACA,sCAAA,CACA,8BAAA,CAIJ,iCACE,qCAAA,CACA,oCAAA,CACA,cAAA,CACA,0CACE,WAAA,CACA,oCAAA",
            sourcesContent: [
              ".check-box-root {\n  width: fit-content;\n  height: fit-content;\n  display: flex;\n  user-select: none;\n  cursor: pointer;\n  gap: var(--s-spacing-xx-small);\n\n  &.disabled {\n    cursor: auto;\n  }\n\n  span {\n    width: 24px;\n    height: 24px;\n  }\n\n  .InputCheckbox {\n    border: none;\n    cursor: pointer;\n    background-color: transparent;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: row;\n    width: 22px;\n    height: 22px;\n    border-radius: var(--s-border-radius-small);\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-style: solid;\n    }\n\n    &.disabled {\n      color: var(--s-color-content-disable);\n\n      &:focus {\n        outline: none;\n      }\n    }\n\n    &.disabled .unchecked {\n      cursor: auto;\n      color: var(--s-color-content-disable);\n\n      &:hover {\n        color: var(--s-color-content-disable);\n      }\n    }\n\n    .unchecked {\n      color: var(--s-color-content-default);\n    }\n\n    .unchecked:hover {\n      color: var(--s-color-content-highlight);\n    }\n\n    .checked,\n    .indeterminate {\n      user-select: none;\n      cursor: pointer;\n      color: var(--s-color-content-highlight);\n      background-color: transparent;\n    }\n  }\n\n  .check-box-label {\n    font: var(--s-typography-label-medium);\n    color: var(--s-color-content-default);\n    cursor: pointer;\n    &.disabled {\n      cursor: auto;\n      color: var(--s-color-content-disable);\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputSearch/InputSearch.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/sourceMaps.js",
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/api.js",
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".input-search-root{box-sizing:border-box;border:var(--s-border-width-hairline) solid var(--s-color-border-default);border-radius:var(--s-border-radius-small);padding:var(--s-spacing-xx-small) var(--s-spacing-x-small);justify-content:space-between;background-color:var(--s-color-fill-default);color:var(--s-color-content-placeholder);display:flex;align-items:center;width:fit-content;height:40px;cursor:text}.input-search-root.disabled{cursor:auto;background-color:var(--s-color-fill-disable);color:var(--s-color-content-disable);opacity:.64}.input-search-root.disabled:hover{background-color:var(--s-color-fill-disable);color:var(--s-color-content-disable)}.input-search-root:hover{background-color:var(--s-color-fill-default-hover)}.input-search-root:focus-within{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid;background-color:var(--s-color-fill-default);color:var(--s-color-content-default)}.input-search-root .input-search{display:flex;align-items:center;justify-content:center;gap:var(--s-spacing-nano)}.input-search-root .input-search input{border:none;background:rgba(0,0,0,0);width:100%;color:var(--s-color-content-default);font:var(--s-typography-paragraph-regular)}.input-search-root .input-search input::placeholder{color:var(--s-color-content-placeholder)}.input-search-root .input-search input:disabled::placeholder{color:var(--s-color-content-disable)}.input-search-root .input-search input:focus-visible{outline:none}.input-search-root .input-search .input-search-button-close{background:none;border:none;cursor:pointer;opacity:0;transition:opacity .3s ease-in-out;display:flex;align-items:center}.input-search-root .input-search .input-search-button-close.visible{opacity:1}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/InputSearch/InputSearch.scss",
            ],
            names: [],
            mappings:
              "AAAA,mBACE,qBAAA,CACA,yEAAA,CACA,0CAAA,CACA,0DAAA,CACA,6BAAA,CACA,4CAAA,CACA,wCAAA,CACA,YAAA,CACA,kBAAA,CACA,iBAAA,CACA,WAAA,CACA,WAAA,CAEA,4BACE,WAAA,CACA,4CAAA,CACA,oCAAA,CACA,WAAA,CAGF,kCACE,4CAAA,CACA,oCAAA,CAGF,yBACE,kDAAA,CAGF,gCACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CACA,4CAAA,CACA,oCAAA,CAGF,iCACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,yBAAA,CAEA,uCACE,WAAA,CACA,wBAAA,CACA,UAAA,CACA,oCAAA,CACA,0CAAA,CAGF,oDACE,wCAAA,CAGF,6DACE,oCAAA,CAGF,qDACE,YAAA,CAGF,4DACE,eAAA,CACA,WAAA,CACA,cAAA,CACA,SAAA,CACA,kCAAA,CACA,YAAA,CACA,kBAAA,CAGF,oEACE,SAAA",
            sourcesContent: [
              ".input-search-root {\n  box-sizing: border-box;\n  border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n  border-radius: var(--s-border-radius-small);\n  padding: var(--s-spacing-xx-small) var(--s-spacing-x-small);\n  justify-content: space-between;\n  background-color: var(--s-color-fill-default);\n  color: var(--s-color-content-placeholder);\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  height: 40px;\n  cursor: text;\n\n  &.disabled {\n    cursor: auto;\n    background-color: var(--s-color-fill-disable);\n    color: var(--s-color-content-disable);\n    opacity: 0.64;\n  }\n\n  &.disabled:hover {\n    background-color: var(--s-color-fill-disable);\n    color: var(--s-color-content-disable);\n  }\n\n  &:hover {\n    background-color: var(--s-color-fill-default-hover);\n  }\n\n  &:focus-within {\n    outline-width: var(--s-border-width-thin);\n    outline-color: var(--s-color-fill-highlight);\n    outline-offset: var(--s-border-width-thin);\n    outline-style: solid;\n    background-color: var(--s-color-fill-default);\n    color: var(--s-color-content-default);\n  }\n\n  .input-search {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: var(--s-spacing-nano);\n\n    input {\n      border: none;\n      background: transparent;\n      width: 100%;\n      color: var(--s-color-content-default);\n      font: var(--s-typography-paragraph-regular);\n    }\n\n    input::placeholder {\n      color: var(--s-color-content-placeholder);\n    }\n\n    input:disabled::placeholder {\n      color: var(--s-color-content-disable);\n    }\n\n    input:focus-visible {\n      outline: none;\n    }\n\n    .input-search-button-close {\n      background: none;\n      border: none;\n      cursor: pointer;\n      opacity: 0;\n      transition: opacity 0.3s ease-in-out;\n      display: flex;\n      align-items: center;\n    }\n\n    .input-search-button-close.visible {\n      opacity: 1;\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Modal/Modal.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/sourceMaps.js",
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/api.js",
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".modal-root{position:fixed;width:488px;border-radius:var(--s-border-radius-small);left:50%;top:50%;transform:translate(-50%, -50%);background-color:var(--s-color-fill-default);z-index:99;opacity:0;visibility:hidden;transition:opacity .5s ease,visibility .5s ease}.modal-root.visible{opacity:1;visibility:visible}.modal-root .modal-header{display:flex;flex-direction:column;padding:var(--s-spacing-medium);gap:var(--s-spacing-nano)}.modal-root .modal-header .modal-title{display:flex;justify-content:space-between;align-items:center;font:var(--s-typography-heading-medium);color:var(--s-color-content-default)}.modal-root .modal-header .modal-description{font:var(--s-typography-paragraph-regular);color:var(--s-color-content-light);white-space:normal}.modal-root .modal-content{display:flex;flex-direction:column;gap:var(--s-spacing-small);padding:0 var(--s-spacing-medium) var(--s-spacing-medium) var(--s-spacing-medium)}.modal-root .modal-footer{padding:0 var(--s-spacing-medium) var(--s-spacing-medium) var(--s-spacing-medium)}.modal-ghost{width:100vw;height:100vh;z-index:98;position:fixed;top:0;left:0;background-color:var(--s-color-background-overlay);opacity:0;visibility:hidden;transition:opacity .5s ease,visibility .5s ease}.modal-ghost.visible{opacity:1;visibility:visible}@media screen and (max-width: 490px){.modal-root{position:fixed;width:88%}}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Modal/Modal.scss"],
            names: [],
            mappings:
              "AAAA,YACE,cAAA,CACA,WAAA,CACA,0CAAA,CACA,QAAA,CACA,OAAA,CACA,+BAAA,CACA,4CAAA,CACA,UAAA,CACA,SAAA,CACA,iBAAA,CACA,+CACE,CAGF,oBACE,SAAA,CACA,kBAAA,CAGF,0BACE,YAAA,CACA,qBAAA,CACA,+BAAA,CACA,yBAAA,CAEA,uCACE,YAAA,CACA,6BAAA,CACA,kBAAA,CAEA,uCAAA,CACA,oCAAA,CAGF,6CACE,0CAAA,CACA,kCAAA,CACA,kBAAA,CAIJ,2BACE,YAAA,CACA,qBAAA,CACA,0BAAA,CACA,iFAAA,CAIF,0BACE,iFAAA,CAKJ,aACE,WAAA,CACA,YAAA,CACA,UAAA,CACA,cAAA,CACA,KAAA,CACA,MAAA,CACA,kDAAA,CACA,SAAA,CACA,iBAAA,CACA,+CACE,CAGF,qBACE,SAAA,CACA,kBAAA,CAIJ,qCACE,YACE,cAAA,CACA,SAAA,CAAA",
            sourcesContent: [
              ".modal-root {\n  position: fixed;\n  width: 488px;\n  border-radius: var(--s-border-radius-small);\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  background-color: var(--s-color-fill-default);\n  z-index: 99;\n  opacity: 0;\n  visibility: hidden;\n  transition:\n    opacity 0.5s ease,\n    visibility 0.5s ease;\n\n  &.visible {\n    opacity: 1;\n    visibility: visible;\n  }\n\n  .modal-header {\n    display: flex;\n    flex-direction: column;\n    padding: var(--s-spacing-medium);\n    gap: var(--s-spacing-nano);\n\n    .modal-title {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n\n      font: var(--s-typography-heading-medium);\n      color: var(--s-color-content-default);\n    }\n\n    .modal-description {\n      font: var(--s-typography-paragraph-regular);\n      color: var(--s-color-content-light);\n      white-space: normal;\n    }\n  }\n\n  .modal-content {\n    display: flex;\n    flex-direction: column;\n    gap: var(--s-spacing-small);\n    padding: 0 var(--s-spacing-medium) var(--s-spacing-medium)\n      var(--s-spacing-medium);\n  }\n\n  .modal-footer {\n    padding: 0 var(--s-spacing-medium) var(--s-spacing-medium)\n      var(--s-spacing-medium);\n  }\n}\n\n.modal-ghost {\n  width: 100vw;\n  height: 100vh;\n  z-index: 98;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: var(--s-color-background-overlay);\n  opacity: 0;\n  visibility: hidden;\n  transition:\n    opacity 0.5s ease,\n    visibility 0.5s ease;\n\n  &.visible {\n    opacity: 1;\n    visibility: visible;\n  }\n}\n\n@media screen and (max-width: 490px) {\n  .modal-root {\n    position: fixed;\n    width: 88%;\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Pagination/Pagination.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/sourceMaps.js",
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/api.js",
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".PaginationItem .arrow_back{border-right:0px !important}.PaginationItem .arrow_back,.PaginationItem .arrow_forward{cursor:pointer;background-color:var(--s-color-fill-default);color:var(--s-color-content-default);border:var(--s-border-width-hairline) solid var(--s-color-border-default);padding:var(--s-spacing-xx-small)}.PaginationItem .arrow_back:hover,.PaginationItem .arrow_forward:hover{background-color:var(--s-color-fill-default-hover)}.PaginationItem .arrow_back{border-radius:var(--s-border-radius-small) 0 0 var(--s-border-radius-small)}.PaginationItem .arrow_forward{border-radius:0 var(--s-border-radius-small) var(--s-border-radius-small) 0}.PaginationItem .arrow_back:focus-visible,.PaginationItem .arrow_forward:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-hairline);outline-style:solid}.PaginationItem .arrow_back:disabled,.PaginationItem .arrow_forward:disabled{background-color:var(--s-color-fill-disable);color:var(--s-color-content-disable)}.Pagination .noLabel,.Pagination .leftLabel,.Pagination .centerLabel{display:flex}.Pagination .leftLabel{padding:var(--s-spacing-small);align-items:center;justify-content:space-between}.Pagination .leftLabel p{font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default)}.Pagination .leftLabel div{display:flex}.Pagination .centerLabel{justify-content:space-between;padding:var(--s-spacing-small);align-items:center}.Pagination .centerLabel .arrow_back{border-right:var(--s-border-width-hairline) solid var(--s-color-border-default) !important;border-radius:var(--s-border-radius-small)}.Pagination .centerLabel .arrow_forward{border-radius:var(--s-border-radius-small)}.Pagination .centerLabel p{font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default)}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/Pagination/Pagination.scss",
            ],
            names: [],
            mappings:
              "AACE,4BACE,2BAAA,CAEF,2DAEE,cAAA,CACA,4CAAA,CACA,oCAAA,CACA,yEAAA,CACA,iCAAA,CACA,uEACE,kDAAA,CAIJ,4BACE,2EAAA,CAGF,+BACE,2EAAA,CAGF,uFAEE,wCAAA,CACA,2CAAA,CACA,6CAAA,CACA,mBAAA,CAGF,6EAEE,4CAAA,CACA,oCAAA,CAKF,qEAGE,YAAA,CAGF,uBACE,8BAAA,CACA,kBAAA,CACA,6BAAA,CAEA,yBACE,0CAAA,CACA,oCAAA,CAGF,2BACE,YAAA,CAIJ,yBACE,6BAAA,CACA,8BAAA,CACA,kBAAA,CAEA,qCACE,0FAAA,CAEA,0CAAA,CAGF,wCACE,0CAAA,CAGF,2BACE,0CAAA,CACA,oCAAA",
            sourcesContent: [
              ".PaginationItem {\n  .arrow_back {\n    border-right: 0px !important;\n  }\n  .arrow_back,\n  .arrow_forward {\n    cursor: pointer;\n    background-color: var(--s-color-fill-default);\n    color: var(--s-color-content-default);\n    border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n    padding: var(--s-spacing-xx-small);\n    &:hover {\n      background-color: var(--s-color-fill-default-hover);\n    }\n  }\n\n  .arrow_back {\n    border-radius: var(--s-border-radius-small) 0 0 var(--s-border-radius-small);\n  }\n\n  .arrow_forward {\n    border-radius: 0 var(--s-border-radius-small) var(--s-border-radius-small) 0;\n  }\n\n  .arrow_back:focus-visible,\n  .arrow_forward:focus-visible {\n    outline-width: var(--s-border-width-thin);\n    outline-color: var(--s-color-fill-highlight);\n    outline-offset: var(--s-border-width-hairline);\n    outline-style: solid;\n  }\n\n  .arrow_back:disabled,\n  .arrow_forward:disabled {\n    background-color: var(--s-color-fill-disable);\n    color: var(--s-color-content-disable);\n  }\n}\n\n.Pagination {\n  .noLabel,\n  .leftLabel,\n  .centerLabel {\n    display: flex;\n  }\n\n  .leftLabel {\n    padding: var(--s-spacing-small);\n    align-items: center;\n    justify-content: space-between;\n\n    p {\n      font: var(--s-typography-paragraph-regular);\n      color: var(--s-color-content-default);\n    }\n\n    div {\n      display: flex;\n    }\n  }\n\n  .centerLabel {\n    justify-content: space-between;\n    padding: var(--s-spacing-small);\n    align-items: center;\n\n    .arrow_back {\n      border-right: var(--s-border-width-hairline) solid\n        var(--s-color-border-default) !important;\n      border-radius: var(--s-border-radius-small);\n    }\n\n    .arrow_forward {\n      border-radius: var(--s-border-radius-small);\n    }\n\n    p {\n      font: var(--s-typography-paragraph-regular);\n      color: var(--s-color-content-default);\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Tag/Tag.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/sourceMaps.js",
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/api.js",
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".tag-root{display:flex;gap:var(--s-spacing-quarck);padding:0 0 0 var(--s-spacing-xx-small);border-radius:var(--s-border-radius-pill);font:var(--s-typography-caption-regular);align-items:center;width:fit-content;white-space:nowrap}.tag-root.secondary{background-color:var(--s-color-fill-default-light);color:var(--s-color-content-default)}.tag-root.primary{background-color:var(--s-color-fill-highlight);color:var(--s-color-content-on-color)}.tag-root.success{background-color:var(--s-color-fill-success);color:var(--s-color-content-on-color)}.tag-root.warning{background-color:var(--s-color-fill-warning);color:var(--s-color-content-on-color)}.tag-root .sm.plain{border-radius:var(--s-border-radius-pill)}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Tag/Tag.scss"],
            names: [],
            mappings:
              "AAAA,UACE,YAAA,CACA,2BAAA,CACA,uCAAA,CACA,yCAAA,CACA,wCAAA,CACA,kBAAA,CACA,iBAAA,CACA,kBAAA,CAEA,oBACE,kDAAA,CACA,oCAAA,CAGF,kBACE,8CAAA,CACA,qCAAA,CAGF,kBACE,4CAAA,CACA,qCAAA,CAGF,kBACE,4CAAA,CACA,qCAAA,CAEF,oBACE,yCAAA",
            sourcesContent: [
              ".tag-root {\n  display: flex;\n  gap: var(--s-spacing-quarck);\n  padding: 0 0 0 var(--s-spacing-xx-small);\n  border-radius: var(--s-border-radius-pill);\n  font: var(--s-typography-caption-regular);\n  align-items: center;\n  width: fit-content;\n  white-space: nowrap;\n\n  &.secondary {\n    background-color: var(--s-color-fill-default-light);\n    color: var(--s-color-content-default);\n  }\n\n  &.primary {\n    background-color: var(--s-color-fill-highlight);\n    color: var(--s-color-content-on-color);\n  }\n\n  &.success {\n    background-color: var(--s-color-fill-success);\n    color: var(--s-color-content-on-color);\n  }\n\n  &.warning {\n    background-color: var(--s-color-fill-warning);\n    color: var(--s-color-content-on-color);\n  }\n  .sm.plain {\n    border-radius: var(--s-border-radius-pill);\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
