"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [7709],
  {
    "./src/app/components/TableList/TableList.stories.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Small: () => Small,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => TableList_stories,
        });
      __webpack_require__("./src/app/styles.scss");
      var jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        react = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
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
        TableList = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/TableList/TableList.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(TableList.A, options);
      TableList.A && TableList.A.locals && TableList.A.locals;
      const TableList_TableList_TableList = (param) => {
          let { columns, data, size } = param;
          const [isOverflowed, setIsOverflowed] = (0, react.useState)(!1),
            tableListRef = (0, react.useRef)(null);
          (0, react.useEffect)(() => {
            const checkOverflow = () => {
                const tableListElement = tableListRef.current;
                tableListElement &&
                  setIsOverflowed(
                    tableListElement.scrollWidth > tableListElement.clientWidth,
                  );
              },
              resizeObserver = new ResizeObserver(() => {
                checkOverflow();
              }),
              tableListElement = tableListRef.current;
            return (
              tableListElement &&
                (resizeObserver.observe(tableListElement), checkOverflow()),
              () => {
                tableListElement && resizeObserver.unobserve(tableListElement);
              }
            );
          }, []);
          const transposedData = columns.map((_, columnIndex) =>
            data.map((row) => row[columnIndex]),
          );
          return (0, jsx_runtime.jsx)("div", {
            className: "table-list-root ".concat(
              isOverflowed ? "overflow-ativo" : "",
            ),
            ref: tableListRef,
            children: (0, jsx_runtime.jsxs)("div", {
              className: "table",
              children: [
                (0, jsx_runtime.jsx)("div", {
                  className: "table-container",
                  children: columns.map((column, columnIndex) =>
                    (0, jsx_runtime.jsx)(
                      "div",
                      { className: "th", children: column },
                      columnIndex,
                    ),
                  ),
                }),
                (0, jsx_runtime.jsx)("div", {
                  className: "table-container",
                  children: transposedData.map((column, columnIndex) =>
                    (0, jsx_runtime.jsx)(
                      "div",
                      {
                        className: "table-column",
                        children: column.map((cell, cellIndex) =>
                          (0, jsx_runtime.jsx)(
                            "div",
                            {
                              className: "td ".concat(size, " border"),
                              children: cell,
                            },
                            cellIndex,
                          ),
                        ),
                      },
                      columnIndex,
                    ),
                  ),
                }),
              ],
            }),
          });
        },
        components_TableList_TableList = TableList_TableList_TableList;
      try {
        (TableList_TableList_TableList.displayName = "TableList"),
          (TableList_TableList_TableList.__docgenInfo = {
            description: "",
            displayName: "TableList",
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
                type: { name: "any[][]" },
              },
              size: {
                defaultValue: null,
                description: "",
                name: "size",
                required: !0,
                type: {
                  name: "enum",
                  value: [{ value: '"sm"' }, { value: '"md"' }],
                },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/TableList/TableList.tsx#TableList"
            ] = {
              docgenInfo: TableList_TableList_TableList.__docgenInfo,
              name: "TableList",
              path: "src/app/components/TableList/TableList.tsx#TableList",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var _Default_parameters,
        _Default_parameters_docs,
        _Default_parameters1,
        _Small_parameters,
        _Small_parameters_docs,
        _Small_parameters1;
      const TableList_stories = {
          title: "Components/Table List",
          component: components_TableList_TableList,
          tags: ["autodocs"],
          argTypes: {},
        },
        columns = ["Name", "Age", "Role", "Experience", "Company"],
        data = [
          ["David", 25, "Developer", "4 years", "Google"],
          ["Maria", 30, "Designer", "1 years", "Microsoft"],
          ["Carlos", 28, "Data Analyst", "1 month", "Netflix"],
        ],
        Default = { args: { columns, data, size: "md" } },
        Small = { args: { columns, data, size: "sm" } };
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...(null === (_Default_parameters = Default.parameters) ||
          void 0 === _Default_parameters
            ? void 0
            : _Default_parameters.docs),
          source: {
            originalSource:
              '{\n  args: {\n    columns,\n    data,\n    size: "md"\n  }\n}',
            ...(null === (_Default_parameters1 = Default.parameters) ||
            void 0 === _Default_parameters1 ||
            null === (_Default_parameters_docs = _Default_parameters1.docs) ||
            void 0 === _Default_parameters_docs
              ? void 0
              : _Default_parameters_docs.source),
          },
        },
      }),
        (Small.parameters = {
          ...Small.parameters,
          docs: {
            ...(null === (_Small_parameters = Small.parameters) ||
            void 0 === _Small_parameters
              ? void 0
              : _Small_parameters.docs),
            source: {
              originalSource:
                '{\n  args: {\n    columns,\n    data,\n    size: "sm"\n  }\n}',
              ...(null === (_Small_parameters1 = Small.parameters) ||
              void 0 === _Small_parameters1 ||
              null === (_Small_parameters_docs = _Small_parameters1.docs) ||
              void 0 === _Small_parameters_docs
                ? void 0
                : _Small_parameters_docs.source),
            },
          },
        });
      const __namedExportsOrder = ["Default", "Small"];
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/TableList/TableList.scss":
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
          ".table-list-root{overflow:auto}.table-list-root .table{border-spacing:0;border-collapse:collapse;box-sizing:border-box;display:grid;grid-template-rows:auto}.table-list-root .table .th{box-sizing:border-box;padding:var(--s-spacing-xx-small) var(--s-spacing-small);text-align:left;background-color:var(--s-color-fill-default);text-transform:uppercase;color:var(--s-color-content-light);font:var(--s-typography-caption-strong)}.table-list-root .table .table-container{display:grid;grid-auto-flow:column;grid-template-columns:repeat(auto-fit, minmax(100px, 1fr))}.table-list-root .table .td{box-sizing:border-box;white-space:nowrap;background-color:var(--s-color-fill-default);color:var(--s-color-content-default);font:var(--s-typography-paragraph-regular);border:none}.table-list-root .table .td.sm{padding:var(--s-spacing-xx-small) var(--s-spacing-small)}.table-list-root .table .td.md{padding:var(--s-spacing-small)}.table-list-root .table .td.border{border-top:var(--s-border-width-hairline) solid var(--s-color-border-default)}.table-list-root .table .table-column:first-of-type,.table-list-root .table .th:first-of-type{position:sticky;top:0;left:0;z-index:2}.table-list-root::-webkit-scrollbar{height:4px;border-radius:12px}.table-list-root::-webkit-scrollbar-thumb{background:var(--s-color-fill-default-light);border-radius:12px}.table-list-root.overflow-ativo .table-column:first-of-type,.table-list-root.overflow-ativo .th:first-of-type{box-sizing:border-box;box-shadow:4px 0 0 0 rgba(0,0,0,.04)}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/TableList/TableList.scss",
            ],
            names: [],
            mappings:
              "AAAA,iBACE,aAAA,CAEA,wBACE,gBAAA,CACA,wBAAA,CACA,qBAAA,CACA,YAAA,CAEA,uBAAA,CAEA,4BACE,qBAAA,CACA,wDAAA,CACA,eAAA,CACA,4CAAA,CACA,wBAAA,CACA,kCAAA,CACA,uCAAA,CAIF,yCACE,YAAA,CACA,qBAAA,CACA,0DAAA,CAGF,4BACE,qBAAA,CACA,kBAAA,CACA,4CAAA,CACA,oCAAA,CACA,0CAAA,CACA,WAAA,CAEA,+BACE,wDAAA,CAGF,+BACE,8BAAA,CAEF,mCACE,6EAAA,CAMJ,8FAEE,eAAA,CACA,KAAA,CACA,MAAA,CACA,SAAA,CAKJ,oCACE,UAAA,CACA,kBAAA,CAGF,0CACE,4CAAA,CACA,kBAAA,CAKA,8GAEE,qBAAA,CACA,oCAAA",
            sourcesContent: [
              ".table-list-root {\n  overflow: auto;\n\n  .table {\n    border-spacing: 0;\n    border-collapse: collapse;\n    box-sizing: border-box;\n    display: grid;\n\n    grid-template-rows: auto;\n\n    .th {\n      box-sizing: border-box;\n      padding: var(--s-spacing-xx-small) var(--s-spacing-small);\n      text-align: left;\n      background-color: var(--s-color-fill-default);\n      text-transform: uppercase;\n      color: var(--s-color-content-light);\n      font: var(--s-typography-caption-strong);\n    }\n\n    // Define as linhas como grid\n    .table-container {\n      display: grid;\n      grid-auto-flow: column;\n      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n    }\n\n    .td {\n      box-sizing: border-box;\n      white-space: nowrap;\n      background-color: var(--s-color-fill-default);\n      color: var(--s-color-content-default);\n      font: var(--s-typography-paragraph-regular);\n      border: none;\n\n      &.sm {\n        padding: var(--s-spacing-xx-small) var(--s-spacing-small);\n      }\n\n      &.md {\n        padding: var(--s-spacing-small);\n      }\n      &.border {\n        border-top: var(--s-border-width-hairline) solid\n          var(--s-color-border-default);\n      }\n    }\n\n    // Ajuste para o posicionamento fixo da primeira coluna\n    .table-column:first-of-type,\n    .th:first-of-type {\n      position: sticky;\n      top: 0;\n      left: 0;\n      z-index: 2;\n    }\n  }\n\n  // Estilo da barra de rolagem\n  &::-webkit-scrollbar {\n    height: 4px;\n    border-radius: 12px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background: var(--s-color-fill-default-light);\n    border-radius: 12px;\n  }\n\n  // Ajuste quando há overflow horizontal\n  &.overflow-ativo {\n    .table-column:first-of-type,\n    .th:first-of-type {\n      box-sizing: border-box;\n      box-shadow: 4px 0 0 0 rgba(0, 0, 0, 0.04);\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
