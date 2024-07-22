"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [3675],
  {
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
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Icon/Icon.scss",
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
      const Icon_Icon_Icon = ({ size, fill, icon }) => {
          const sizeClass = size,
            fillStyle = `'FILL' ${fill ? 1 : 0},\n    'GRAD' 0,\n    'opsz' 24`;
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)("span", {
              style: { fontVariationSettings: fillStyle },
              className: `material-symbols-outlined ${sizeClass}`,
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
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Pagination/Pagination.scss",
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
      const PaginationItem = ({ arrow, disabled, click }) =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children:
              "left" === arrow
                ? (0, jsx_runtime.jsx)("button", {
                    className: "arrow_back",
                    disabled,
                    onClick: click,
                    children: (0, jsx_runtime.jsx)(Icon.A, {
                      icon: "arrow_back",
                      size: "sm",
                    }),
                  })
                : "right" === arrow
                  ? (0, jsx_runtime.jsx)("button", {
                      className: "arrow_forward",
                      disabled,
                      onClick: click,
                      children: (0, jsx_runtime.jsx)(Icon.A, {
                        icon: "arrow_forward",
                        size: "sm",
                      }),
                    })
                  : "error",
          }),
        Pagination_Pagination_Pagination = ({
          disabledRight,
          disabledLeft,
          variant,
          onClickRight,
          onClickLeft,
          label,
        }) =>
          (0, jsx_runtime.jsx)("div", {
            className: "Pagination",
            children:
              "noLabel" === variant
                ? (0, jsx_runtime.jsxs)("div", {
                    className: "noLabel",
                    children: [
                      (0, jsx_runtime.jsx)(PaginationItem, {
                        arrow: "left",
                        disabled: disabledLeft,
                        click: onClickLeft,
                      }),
                      (0, jsx_runtime.jsx)(PaginationItem, {
                        arrow: "right",
                        disabled: disabledRight,
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
                          style: { display: "flex" },
                          children: [
                            (0, jsx_runtime.jsx)(PaginationItem, {
                              arrow: "left",
                              disabled: disabledLeft,
                              click: onClickLeft,
                            }),
                            (0, jsx_runtime.jsx)(PaginationItem, {
                              arrow: "right",
                              disabled: disabledRight,
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
                            disabled: disabledLeft,
                            click: onClickLeft,
                          }),
                          (0, jsx_runtime.jsx)("p", { children: label }),
                          (0, jsx_runtime.jsx)(PaginationItem, {
                            arrow: "right",
                            disabled: disabledRight,
                            click: onClickRight,
                          }),
                        ],
                      })
                    : "error",
          }),
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
              disabledLeft: {
                defaultValue: null,
                description: "",
                name: "disabledLeft",
                required: !1,
                type: { name: "boolean" },
              },
              disabledRight: {
                defaultValue: null,
                description: "",
                name: "disabledRight",
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
    "./src/app/components/Pagination/Pagination.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          CenterLabel: () => CenterLabel,
          Default: () => Default,
          Disable: () => Disable,
          LeftLabel: () => LeftLabel,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        _Pagination__WEBPACK_IMPORTED_MODULE_2__ =
          (__webpack_require__("./src/app/styles.scss"),
          __webpack_require__(
            "./src/app/components/Pagination/Pagination.tsx",
          )),
        _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./node_modules/@storybook/blocks/dist/index.mjs",
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Components/Pagination",
          component: _Pagination__WEBPACK_IMPORTED_MODULE_2__.A,
          tags: ["autodocs"],
          parameters: {
            docs: {
              page: () =>
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                  {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.hE,
                        {},
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Pd,
                        { children: "Component" },
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        "p",
                        {
                          children: [
                            "The ",
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              "strong",
                              { children: "Pagination" },
                            ),
                            " enable users to navigate through an ordered collection of items split into pages.",
                          ],
                        },
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Tn,
                        {},
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.H2,
                        {},
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.om,
                        {},
                      ),
                    ],
                  },
                ),
            },
          },
          argTypes: {
            label: {
              control: "text",
              description: "The label for the pagination component.",
              table: { category: "Content" },
            },
            variant: {
              control: "select",
              options: ["noLabel", "leftLabel", "centerLabel"],
              description: "The variant of the pagination label position.",
              table: { category: "Appearance" },
            },
            disabledLeft: {
              control: "boolean",
              description: "If true, the left pagination button is disabled.",
              table: { category: "State" },
            },
            disabledRight: {
              control: "boolean",
              description: "If true, the right pagination button is disabled.",
              table: { category: "State" },
            },
            onClickLeft: {
              action: "leftClick",
              description:
                "Callback function when the left pagination button is clicked.",
              table: { category: "Actions" },
            },
            onClickRight: {
              action: "rightClick",
              description:
                "Callback function when the right pagination button is clicked.",
              table: { category: "Actions" },
            },
          },
        },
        Default = {
          args: {
            label: "Pagination",
            variant: "noLabel",
            disabledLeft: !1,
            disabledRight: !1,
          },
        },
        Disable = {
          args: {
            label: "Pagination",
            variant: "noLabel",
            disabledLeft: !0,
            disabledRight: !0,
          },
        },
        LeftLabel = {
          args: {
            label: "Pagination",
            variant: "leftLabel",
            disabledLeft: !1,
            disabledRight: !1,
          },
        },
        CenterLabel = {
          args: {
            label: "Pagination",
            variant: "centerLabel",
            disabledLeft: !1,
            disabledRight: !1,
          },
        },
        __namedExportsOrder = [
          "Default",
          "Disable",
          "LeftLabel",
          "CenterLabel",
        ];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    label: "Pagination",\n    variant: "noLabel",\n    disabledLeft: false,\n    disabledRight: false\n  }\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Disable.parameters = {
          ...Disable.parameters,
          docs: {
            ...Disable.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    label: "Pagination",\n    variant: "noLabel",\n    disabledLeft: true,\n    disabledRight: true\n  }\n}',
              ...Disable.parameters?.docs?.source,
            },
          },
        }),
        (LeftLabel.parameters = {
          ...LeftLabel.parameters,
          docs: {
            ...LeftLabel.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    label: "Pagination",\n    variant: "leftLabel",\n    disabledLeft: false,\n    disabledRight: false\n  }\n}',
              ...LeftLabel.parameters?.docs?.source,
            },
          },
        }),
        (CenterLabel.parameters = {
          ...CenterLabel.parameters,
          docs: {
            ...CenterLabel.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    label: "Pagination",\n    variant: "centerLabel",\n    disabledLeft: false,\n    disabledRight: false\n  }\n}',
              ...CenterLabel.parameters?.docs?.source,
            },
          },
        });
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Icon/Icon.scss":
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
          '@import"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";.material-symbols-outlined{font-weight:300;display:flex;user-select:none}.material-symbols-outlined.sm{font-size:16px}.material-symbols-outlined.md{font-size:24px}.material-symbols-outlined.lg{font-size:32px}',
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Icon/Icon.scss"],
            names: [],
            mappings:
              "AAAQ,6HAAA,CAER,2BACE,eAAA,CACA,YAAA,CACA,gBAAA,CAGF,8BACE,cAAA,CAGF,8BACE,cAAA,CAGF,8BACE,cAAA",
            sourcesContent: [
              '@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");\n\n.material-symbols-outlined {\n  font-weight: 300;\n  display: flex;\n  user-select: none;\n}\n\n.material-symbols-outlined.sm {\n  font-size: 16px;\n}\n\n.material-symbols-outlined.md {\n  font-size: 24px;\n}\n\n.material-symbols-outlined.lg {\n  font-size: 32px;\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Pagination/Pagination.scss":
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
          ".arrow_back:hover+.arrow_forward{border-left:none;margin-left:0}.arrow_back{display:flex;align-items:center;border-radius:var(--s-border-radius-medium) 0 0 var(--s-border-radius-medium);cursor:pointer;background-color:var(--s-color-fill-default);color:var(--s-color-content-default);border:var(--s-border-width-hairline) solid var(--s-color-border-default);padding:var(--s-spacing-xx-small);box-shadow:0px 1px 2px 0px rgba(14,21,36,.06)}.arrow_back:hover{background-color:var(--s-color-fill-default-hover);border:1px solid var(--s-color-border-default-hover)}.arrow_back:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-hairline);outline-style:solid}.arrow_back:disabled{cursor:auto;opacity:.64;background-color:var(--s-color-fill-disable);color:var(--s-color-content-disable)}.arrow_back:disabled:hover{background-color:var(--s-color-fill-disable);border:1px solid var(--s-color-border-default)}.arrow_forward{margin-left:-1px;cursor:pointer;background-color:var(--s-color-fill-default);color:var(--s-color-content-default);border:var(--s-border-width-hairline) solid var(--s-color-border-default);padding:var(--s-spacing-xx-small);margin-right:-1px;align-items:center;border-radius:0 var(--s-border-radius-medium) var(--s-border-radius-medium) 0;display:flex;box-shadow:0px 1px 2px 0px rgba(14,21,36,.06)}.arrow_forward:hover{background-color:var(--s-color-fill-default-hover);border:1px solid var(--s-color-border-default-hover)}.arrow_forward:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:var(--s-border-width-hairline);outline-style:solid}.arrow_forward:disabled{cursor:auto;opacity:.64;background-color:var(--s-color-fill-disable);color:var(--s-color-content-disable)}.arrow_forward:disabled:hover{background-color:var(--s-color-fill-disable);border:1px solid var(--s-color-border-default)}.Pagination .noLabel,.Pagination .leftLabel,.Pagination .centerLabel{display:flex}.Pagination .leftLabel{padding:var(--s-spacing-small);align-items:center;justify-content:space-between}.Pagination .leftLabel p{font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default)}.Pagination .leftLabel div{display:flex}.Pagination .centerLabel{justify-content:space-between;padding:var(--s-spacing-small);align-items:center}.Pagination .centerLabel .arrow_back{border-radius:var(--s-border-radius-medium)}.Pagination .centerLabel .arrow_forward{border-radius:var(--s-border-radius-medium)}.Pagination .centerLabel p{font:var(--s-typography-paragraph-regular);color:var --s-color-content-default}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/Pagination/Pagination.scss",
            ],
            names: [],
            mappings:
              "AAAA,iCACE,gBAAA,CACA,aAAA,CAGF,YACE,YAAA,CACA,kBAAA,CACA,6EAAA,CACA,cAAA,CACA,4CAAA,CACA,oCAAA,CACA,yEAAA,CACA,iCAAA,CACA,6CAAA,CAEA,kBACE,kDAAA,CACA,oDAAA,CAGF,0BACE,wCAAA,CACA,2CAAA,CACA,6CAAA,CACA,mBAAA,CAGF,qBACE,WAAA,CACA,WAAA,CACA,4CAAA,CACA,oCAAA,CAEA,2BACE,4CAAA,CACA,8CAAA,CAKN,eACE,gBAAA,CACA,cAAA,CACA,4CAAA,CACA,oCAAA,CACA,yEAAA,CACA,iCAAA,CACA,iBAAA,CACA,kBAAA,CACA,6EAAA,CACA,YAAA,CACA,6CAAA,CAEA,qBACE,kDAAA,CACA,oDAAA,CAGF,6BACE,wCAAA,CACA,6CAAA,CACA,6CAAA,CACA,mBAAA,CAGF,wBACE,WAAA,CACA,WAAA,CACA,4CAAA,CACA,oCAAA,CAEA,8BACE,4CAAA,CACA,8CAAA,CAMJ,qEAGE,YAAA,CAGF,uBACE,8BAAA,CACA,kBAAA,CACA,6BAAA,CAEA,yBACE,0CAAA,CACA,oCAAA,CAGF,2BACE,YAAA,CAIJ,yBACE,6BAAA,CACA,8BAAA,CACA,kBAAA,CAEA,qCACE,2CAAA,CAGF,wCACE,2CAAA,CAGF,2BACE,0CAAA,CACA,mCAAA",
            sourcesContent: [
              ".arrow_back:hover + .arrow_forward {\n  border-left: none;\n  margin-left: 0;\n}\n\n.arrow_back {\n  display: flex;\n  align-items: center;\n  border-radius: var(--s-border-radius-medium) 0 0 var(--s-border-radius-medium);\n  cursor: pointer;\n  background-color: var(--s-color-fill-default);\n  color: var(--s-color-content-default);\n  border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n  padding: var(--s-spacing-xx-small);\n  box-shadow: 0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n\n  &:hover {\n    background-color: var(--s-color-fill-default-hover);\n    border: 1px solid var(--s-color-border-default-hover);\n  }\n\n  &:focus-visible {\n    outline-width: var(--s-border-width-thin);\n    outline-color: var(--s-color-fill-highlight);\n    outline-offset: var(--s-border-width-hairline);\n    outline-style: solid;\n  }\n\n  &:disabled {\n    cursor: auto;\n    opacity: 0.64;\n    background-color: var(--s-color-fill-disable);\n    color: var(--s-color-content-disable);\n\n    &:hover {\n      background-color: var(--s-color-fill-disable);\n      border: 1px solid var(--s-color-border-default);\n    }\n  }\n}\n\n.arrow_forward {\n  margin-left: -1px;\n  cursor: pointer;\n  background-color: var(--s-color-fill-default);\n  color: var(--s-color-content-default);\n  border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n  padding: var(--s-spacing-xx-small);\n  margin-right: -1px;\n  align-items: center;\n  border-radius: 0 var(--s-border-radius-medium) var(--s-border-radius-medium) 0;\n  display: flex;\n  box-shadow: 0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n\n  &:hover {\n    background-color: var(--s-color-fill-default-hover);\n    border: 1px solid var(--s-color-border-default-hover);\n  }\n\n  &:focus-visible {\n    outline-width: var(--s-border-width-thin);\n    outline-color: var(--s-color-border-highlight);\n    outline-offset: var(--s-border-width-hairline);\n    outline-style: solid;\n  }\n\n  &:disabled {\n    cursor: auto;\n    opacity: 0.64;\n    background-color: var(--s-color-fill-disable);\n    color: var(--s-color-content-disable);\n\n    &:hover {\n      background-color: var(--s-color-fill-disable);\n      border: 1px solid var(--s-color-border-default);\n    }\n  }\n}\n\n.Pagination {\n  .noLabel,\n  .leftLabel,\n  .centerLabel {\n    display: flex;\n  }\n\n  .leftLabel {\n    padding: var(--s-spacing-small);\n    align-items: center;\n    justify-content: space-between;\n\n    p {\n      font: var(--s-typography-paragraph-regular);\n      color: var(--s-color-content-default);\n    }\n\n    div {\n      display: flex;\n    }\n  }\n\n  .centerLabel {\n    justify-content: space-between;\n    padding: var(--s-spacing-small);\n    align-items: center;\n\n    .arrow_back {\n      border-radius: var(--s-border-radius-medium);\n    }\n\n    .arrow_forward {\n      border-radius: var(--s-border-radius-medium);\n    }\n\n    p {\n      font: var(--s-typography-paragraph-regular);\n      color: var (--s-color-content-default);\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
