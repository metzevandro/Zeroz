"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [5301],
  {
    "./src/app/components/ButtonGroup/ButtonGroup.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_ButtonGroup_ButtonGroup,
      });
      var jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        Button = __webpack_require__("./src/app/components/Button/Button.tsx"),
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
        ButtonGroup = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/ButtonGroup/ButtonGroup.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(ButtonGroup.A, options);
      ButtonGroup.A && ButtonGroup.A.locals && ButtonGroup.A.locals;
      __webpack_require__("./node_modules/next/dist/compiled/react/index.js");
      const ButtonGroup_ButtonGroup_ButtonGroup = ({
          direction,
          onClickSecondButton,
          typeIconSecondButton,
          contentSecondButton,
          variantSecondButton,
          disableSecondButton,
          disableFirstButton,
          onClickFirstButton,
          contentFirstButton,
          typeIconFirstButton,
          variantFirstButton,
          skeletonFirstButton,
          skeletonSecondButton,
        }) =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsxs)("div", {
              className: `button-group ${direction}`,
              children: [
                (0, jsx_runtime.jsx)(Button.A, {
                  size: "md",
                  disabled: disableFirstButton,
                  onClick: onClickFirstButton,
                  label: contentFirstButton,
                  typeIcon: typeIconFirstButton,
                  variant: variantFirstButton,
                  skeleton: skeletonFirstButton,
                }),
                (0, jsx_runtime.jsx)(Button.A, {
                  size: "md",
                  disabled: disableSecondButton,
                  onClick: onClickSecondButton,
                  label: contentSecondButton,
                  typeIcon: typeIconSecondButton,
                  variant: variantSecondButton,
                  skeleton: skeletonSecondButton,
                }),
              ],
            }),
          }),
        components_ButtonGroup_ButtonGroup =
          ButtonGroup_ButtonGroup_ButtonGroup;
      try {
        (ButtonGroup_ButtonGroup_ButtonGroup.displayName = "ButtonGroup"),
          (ButtonGroup_ButtonGroup_ButtonGroup.__docgenInfo = {
            description: "",
            displayName: "ButtonGroup",
            props: {
              disableFirstButton: {
                defaultValue: null,
                description: "",
                name: "disableFirstButton",
                required: !1,
                type: { name: "boolean" },
              },
              disableSecondButton: {
                defaultValue: null,
                description: "",
                name: "disableSecondButton",
                required: !1,
                type: { name: "boolean" },
              },
              direction: {
                defaultValue: null,
                description: "",
                name: "direction",
                required: !0,
                type: {
                  name: "enum",
                  value: [{ value: '"row"' }, { value: '"column"' }],
                },
              },
              variantFirstButton: {
                defaultValue: null,
                description: "",
                name: "variantFirstButton",
                required: !0,
                type: {
                  name: "enum",
                  value: [
                    { value: '"primary"' },
                    { value: '"secondary"' },
                    { value: '"success"' },
                    { value: '"warning"' },
                    { value: '"is-loading"' },
                  ],
                },
              },
              variantSecondButton: {
                defaultValue: null,
                description: "",
                name: "variantSecondButton",
                required: !0,
                type: {
                  name: "enum",
                  value: [
                    { value: '"primary"' },
                    { value: '"secondary"' },
                    { value: '"success"' },
                    { value: '"warning"' },
                    { value: '"is-loading"' },
                  ],
                },
              },
              contentFirstButton: {
                defaultValue: null,
                description: "",
                name: "contentFirstButton",
                required: !0,
                type: { name: "string" },
              },
              contentSecondButton: {
                defaultValue: null,
                description: "",
                name: "contentSecondButton",
                required: !0,
                type: { name: "string" },
              },
              typeIconFirstButton: {
                defaultValue: null,
                description: "",
                name: "typeIconFirstButton",
                required: !1,
                type: { name: "string" },
              },
              typeIconSecondButton: {
                defaultValue: null,
                description: "",
                name: "typeIconSecondButton",
                required: !1,
                type: { name: "string" },
              },
              onClickFirstButton: {
                defaultValue: null,
                description: "",
                name: "onClickFirstButton",
                required: !1,
                type: {
                  name: "((e: MouseEvent<Element, MouseEvent>) => void)",
                },
              },
              onClickSecondButton: {
                defaultValue: null,
                description: "",
                name: "onClickSecondButton",
                required: !1,
                type: {
                  name: "((e: MouseEvent<Element, MouseEvent>) => void)",
                },
              },
              skeletonFirstButton: {
                defaultValue: null,
                description: "",
                name: "skeletonFirstButton",
                required: !1,
                type: { name: "boolean" },
              },
              skeletonSecondButton: {
                defaultValue: null,
                description: "",
                name: "skeletonSecondButton",
                required: !1,
                type: { name: "boolean" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/ButtonGroup/ButtonGroup.tsx#ButtonGroup"
            ] = {
              docgenInfo: ButtonGroup_ButtonGroup_ButtonGroup.__docgenInfo,
              name: "ButtonGroup",
              path: "src/app/components/ButtonGroup/ButtonGroup.tsx#ButtonGroup",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/ButtonGroup/ButtonGroup.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Column: () => Column,
          Row: () => Row,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        _ButtonGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./src/app/components/ButtonGroup/ButtonGroup.tsx",
        ),
        _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ =
          (__webpack_require__("./src/app/styles.scss"),
          __webpack_require__(
            "./node_modules/@storybook/blocks/dist/index.mjs",
          ));
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Components/Button Group",
          component: _ButtonGroup__WEBPACK_IMPORTED_MODULE_1__.A,
          parameters: {
            layout: "centered",
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
                              { children: "Button group" },
                            ),
                            " is used to group related buttons, either stacked or in a row. It helps keep things organized and spaced nicely.",
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
            direction: {
              description:
                "Defines the direction of the button group. Options are 'row' or 'column'.",
              control: { type: "select", options: ["row", "column"] },
              defaultValue: "row",
              table: { category: "Layout", type: { summary: "row | column" } },
            },
            contentFirstButton: {
              description: "Text to be displayed inside the first button.",
              control: { type: "text" },
              defaultValue: "Button",
              table: { category: "Button 1", type: { summary: "string" } },
            },
            variantFirstButton: {
              description:
                "Defines the visual style of the first button. Options are 'primary', 'secondary', 'success', 'warning', etc.",
              control: {
                type: "select",
                options: ["primary", "secondary", "success", "warning"],
              },
              defaultValue: "primary",
              table: {
                category: "Button 1",
                type: { summary: "primary | secondary | success | warning" },
              },
            },
            typeIconFirstButton: {
              description:
                "Defines the type of icon to be displayed inside the first button. Uses Material Icons names.",
              control: { type: "text" },
              defaultValue: "",
              table: { category: "Button 1", type: { summary: "string" } },
            },
            disableFirstButton: {
              description: "Determines if the first button is disabled.",
              control: { type: "boolean" },
              defaultValue: !1,
              table: { category: "Button 1", type: { summary: "boolean" } },
            },
            skeletonFirstButton: {
              description:
                "Displays the first button in a skeleton loading state.",
              control: { type: "boolean" },
              defaultValue: !1,
              table: { category: "Button 1", type: { summary: "boolean" } },
            },
            onClickFirstButton: {
              description: "Function to call when the first button is clicked.",
              action: "clicked",
              table: {
                category: "Button 1",
                type: {
                  summary:
                    "(event: React.MouseEvent<HTMLButtonElement>) => void",
                },
              },
            },
            contentSecondButton: {
              description: "Text to be displayed inside the second button.",
              control: { type: "text" },
              defaultValue: "Button",
              table: { category: "Button 2", type: { summary: "string" } },
            },
            variantSecondButton: {
              description:
                "Defines the visual style of the second button. Options are 'primary', 'secondary', 'success', 'warning', etc.",
              control: {
                type: "select",
                options: ["primary", "secondary", "success", "warning"],
              },
              defaultValue: "secondary",
              table: {
                category: "Button 2",
                type: { summary: "primary | secondary | success | warning" },
              },
            },
            typeIconSecondButton: {
              description:
                "Defines the type of icon to be displayed inside the second button. Uses Material Icons names.",
              control: { type: "text" },
              defaultValue: "",
              table: { category: "Button 2", type: { summary: "string" } },
            },
            disableSecondButton: {
              description: "Determines if the second button is disabled.",
              control: { type: "boolean" },
              defaultValue: !1,
              table: { category: "Button 2", type: { summary: "boolean" } },
            },
            skeletonSecondButton: {
              description:
                "Displays the second button in a skeleton loading state.",
              control: { type: "boolean" },
              defaultValue: !1,
              table: { category: "Button 2", type: { summary: "boolean" } },
            },
            onClickSecondButton: {
              description:
                "Function to call when the second button is clicked.",
              action: "clicked",
              table: {
                category: "Button 2",
                type: {
                  summary:
                    "(event: React.MouseEvent<HTMLButtonElement>) => void",
                },
              },
            },
          },
          tags: ["autodocs"],
        },
        Row = {
          args: {
            direction: "row",
            contentFirstButton: "Button",
            variantFirstButton: "primary",
            typeIconFirstButton: "",
            disableFirstButton: !1,
            skeletonFirstButton: !1,
            contentSecondButton: "Button",
            variantSecondButton: "secondary",
            disableSecondButton: !1,
            typeIconSecondButton: "",
            skeletonSecondButton: !1,
          },
          argTypes: {
            onClickFirstButton: { action: "clicked" },
            onClickSecondButton: { action: "clicked" },
          },
        },
        Column = {
          args: {
            direction: "column",
            contentFirstButton: "Button",
            variantFirstButton: "primary",
            typeIconFirstButton: "",
            disableFirstButton: !1,
            skeletonFirstButton: !1,
            contentSecondButton: "Button",
            variantSecondButton: "secondary",
            disableSecondButton: !1,
            typeIconSecondButton: "",
            skeletonSecondButton: !1,
          },
        },
        __namedExportsOrder = ["Row", "Column"];
      (Row.parameters = {
        ...Row.parameters,
        docs: {
          ...Row.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    direction: "row",\n    contentFirstButton: "Button",\n    variantFirstButton: "primary",\n    typeIconFirstButton: "",\n    disableFirstButton: false,\n    skeletonFirstButton: false,\n    contentSecondButton: "Button",\n    variantSecondButton: "secondary",\n    disableSecondButton: false,\n    typeIconSecondButton: "",\n    skeletonSecondButton: false\n  },\n  argTypes: {\n    onClickFirstButton: {\n      action: "clicked"\n    },\n    onClickSecondButton: {\n      action: "clicked"\n    }\n  }\n}',
            ...Row.parameters?.docs?.source,
          },
        },
      }),
        (Column.parameters = {
          ...Column.parameters,
          docs: {
            ...Column.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    direction: "column",\n    contentFirstButton: "Button",\n    variantFirstButton: "primary",\n    typeIconFirstButton: "",\n    disableFirstButton: false,\n    skeletonFirstButton: false,\n    contentSecondButton: "Button",\n    variantSecondButton: "secondary",\n    disableSecondButton: false,\n    typeIconSecondButton: "",\n    skeletonSecondButton: false\n  }\n}',
              ...Column.parameters?.docs?.source,
            },
          },
        });
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/ButtonGroup/ButtonGroup.scss":
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
          ".button-group{display:flex;justify-content:space-between;width:100%}.button-group.row{display:flex;flex-direction:row;gap:var(--s-spacing-xx-small)}.button-group.column{display:flex;flex-direction:column;gap:var(--s-spacing-xx-small)}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/ButtonGroup/ButtonGroup.scss",
            ],
            names: [],
            mappings:
              "AAAA,cACE,YAAA,CACA,6BAAA,CACA,UAAA,CAEA,kBACE,YAAA,CACA,kBAAA,CACA,6BAAA,CAGF,qBACE,YAAA,CACA,qBAAA,CACA,6BAAA",
            sourcesContent: [
              ".button-group {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n\n  &.row {\n    display: flex;\n    flex-direction: row;\n    gap: var(--s-spacing-xx-small);\n  }\n\n  &.column {\n    display: flex;\n    flex-direction: column;\n    gap: var(--s-spacing-xx-small);\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
