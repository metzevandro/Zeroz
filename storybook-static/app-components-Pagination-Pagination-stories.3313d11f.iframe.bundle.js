"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [6056],
  {
    "./src/app/components/Pagination/Pagination.stories.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Disable: () => Disable,
          LeftLabel: () => LeftLabel,
          __namedExportsOrder: () => __namedExportsOrder,
          centerLabel: () => centerLabel,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Default_parameters,
        _Default_parameters_docs,
        _Default_parameters1,
        _Disable_parameters,
        _Disable_parameters_docs,
        _Disable_parameters1,
        _LeftLabel_parameters,
        _LeftLabel_parameters_docs,
        _LeftLabel_parameters1,
        _centerLabel_parameters,
        _centerLabel_parameters_docs,
        _centerLabel_parameters1;
      __webpack_require__("./src/app/styles.scss");
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Components/Pagination",
          component: __webpack_require__(
            "./src/app/components/Pagination/Pagination.tsx",
          ).A,
          tags: ["autodocs"],
          argTypes: {},
        },
        Default = {
          args: {
            label: "Pagination",
            variant: "noLabel",
            disableLeft: !1,
            disableRight: !1,
          },
        },
        Disable = {
          args: {
            label: "Pagination",
            variant: "noLabel",
            disableLeft: !0,
            disableRight: !0,
          },
        },
        LeftLabel = { args: { label: "Pagination", variant: "leftLabel" } },
        centerLabel = { args: { label: "Pagination", variant: "centerLabel" } };
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...(null === (_Default_parameters = Default.parameters) ||
          void 0 === _Default_parameters
            ? void 0
            : _Default_parameters.docs),
          source: {
            originalSource:
              '{\n  args: {\n    label: "Pagination",\n    variant: "noLabel",\n    disableLeft: false,\n    disableRight: false\n  }\n}',
            ...(null === (_Default_parameters1 = Default.parameters) ||
            void 0 === _Default_parameters1 ||
            null === (_Default_parameters_docs = _Default_parameters1.docs) ||
            void 0 === _Default_parameters_docs
              ? void 0
              : _Default_parameters_docs.source),
          },
        },
      }),
        (Disable.parameters = {
          ...Disable.parameters,
          docs: {
            ...(null === (_Disable_parameters = Disable.parameters) ||
            void 0 === _Disable_parameters
              ? void 0
              : _Disable_parameters.docs),
            source: {
              originalSource:
                '{\n  args: {\n    label: "Pagination",\n    variant: "noLabel",\n    disableLeft: true,\n    disableRight: true\n  }\n}',
              ...(null === (_Disable_parameters1 = Disable.parameters) ||
              void 0 === _Disable_parameters1 ||
              null === (_Disable_parameters_docs = _Disable_parameters1.docs) ||
              void 0 === _Disable_parameters_docs
                ? void 0
                : _Disable_parameters_docs.source),
            },
          },
        }),
        (LeftLabel.parameters = {
          ...LeftLabel.parameters,
          docs: {
            ...(null === (_LeftLabel_parameters = LeftLabel.parameters) ||
            void 0 === _LeftLabel_parameters
              ? void 0
              : _LeftLabel_parameters.docs),
            source: {
              originalSource:
                '{\n  args: {\n    label: "Pagination",\n    variant: "leftLabel"\n  }\n}',
              ...(null === (_LeftLabel_parameters1 = LeftLabel.parameters) ||
              void 0 === _LeftLabel_parameters1 ||
              null ===
                (_LeftLabel_parameters_docs = _LeftLabel_parameters1.docs) ||
              void 0 === _LeftLabel_parameters_docs
                ? void 0
                : _LeftLabel_parameters_docs.source),
            },
          },
        }),
        (centerLabel.parameters = {
          ...centerLabel.parameters,
          docs: {
            ...(null === (_centerLabel_parameters = centerLabel.parameters) ||
            void 0 === _centerLabel_parameters
              ? void 0
              : _centerLabel_parameters.docs),
            source: {
              originalSource:
                '{\n  args: {\n    label: "Pagination",\n    variant: "centerLabel"\n  }\n}',
              ...(null ===
                (_centerLabel_parameters1 = centerLabel.parameters) ||
              void 0 === _centerLabel_parameters1 ||
              null ===
                (_centerLabel_parameters_docs =
                  _centerLabel_parameters1.docs) ||
              void 0 === _centerLabel_parameters_docs
                ? void 0
                : _centerLabel_parameters_docs.source),
            },
          },
        });
      const __namedExportsOrder = [
        "Default",
        "Disable",
        "LeftLabel",
        "centerLabel",
      ];
    },
    "./src/app/components/Icon/Icon.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_Icon_Icon,
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
        Icon = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Icon/Icon.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Icon.A, options);
      Icon.A && Icon.A.locals && Icon.A.locals;
      __webpack_require__("./node_modules/next/dist/compiled/react/index.js");
      const Icon_Icon_Icon = (param) => {
          let { size, fill, icon } = param;
          const sizeClass = size,
            fillStyle = "'FILL' ".concat(fill ? 1 : 0);
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)("span", {
              style: { fontVariationSettings: fillStyle },
              className: "material-symbols-outlined ".concat(sizeClass),
              children: icon,
            }),
          });
        },
        components_Icon_Icon = Icon_Icon_Icon;
      try {
        (Icon_Icon_Icon.displayName = "Icon"),
          (Icon_Icon_Icon.__docgenInfo = {
            description: "",
            displayName: "Icon",
            props: {
              size: {
                defaultValue: null,
                description: "",
                name: "size",
                required: !0,
                type: {
                  name: "enum",
                  value: [
                    { value: '"sm"' },
                    { value: '"md"' },
                    { value: '"lg"' },
                  ],
                },
              },
              icon: {
                defaultValue: null,
                description: "",
                name: "icon",
                required: !0,
                type: { name: "string | undefined" },
              },
              fill: {
                defaultValue: null,
                description: "",
                name: "fill",
                required: !1,
                type: { name: "boolean" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/app/components/Icon/Icon.tsx#Icon"] =
              {
                docgenInfo: Icon_Icon_Icon.__docgenInfo,
                name: "Icon",
                path: "src/app/components/Icon/Icon.tsx#Icon",
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
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Icon/Icon.scss":
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
          '@import"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";.material-symbols-outlined{font-weight:400;display:flex;user-select:none}.material-symbols-outlined.sm{font-size:16px}.material-symbols-outlined.md{font-size:24px}.material-symbols-outlined.lg{font-size:32px}',
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Icon/Icon.scss"],
            names: [],
            mappings:
              "AAAQ,6HAAA,CAER,2BACE,eAAA,CACA,YAAA,CACA,gBAAA,CAGF,8BACE,cAAA,CAGF,8BACE,cAAA,CAGF,8BACE,cAAA",
            sourcesContent: [
              '@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");\n\n.material-symbols-outlined {\n  font-weight: 400;\n  display: flex;\n  user-select: none;\n}\n\n.material-symbols-outlined.sm {\n  font-size: 16px;\n}\n\n.material-symbols-outlined.md {\n  font-size: 24px;\n}\n\n.material-symbols-outlined.lg {\n  font-size: 32px;\n}\n',
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
  },
]);
