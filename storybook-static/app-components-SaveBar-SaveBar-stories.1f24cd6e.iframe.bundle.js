"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [4121],
  {
    "./src/app/components/SaveBar/SaveBar.stories.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Default_parameters, _Default_parameters_docs, _Default_parameters1;
      __webpack_require__("./src/app/styles.scss");
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Components/Savebar",
          component: __webpack_require__(
            "./src/app/components/SaveBar/SaveBar.tsx",
          ).A,
          tags: ["autodocs"],
          argTypes: {},
        },
        Default = { args: {} };
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...(null === (_Default_parameters = Default.parameters) ||
          void 0 === _Default_parameters
            ? void 0
            : _Default_parameters.docs),
          source: {
            originalSource: "{\n  args: {}\n}",
            ...(null === (_Default_parameters1 = Default.parameters) ||
            void 0 === _Default_parameters1 ||
            null === (_Default_parameters_docs = _Default_parameters1.docs) ||
            void 0 === _Default_parameters_docs
              ? void 0
              : _Default_parameters_docs.source),
          },
        },
      };
      const __namedExportsOrder = ["Default"];
    },
    "./src/app/components/SaveBar/SaveBar.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_SaveBar_SaveBar,
      });
      var jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        ButtonGroup =
          (__webpack_require__(
            "./node_modules/next/dist/compiled/react/index.js",
          ),
          __webpack_require__(
            "./src/app/components/ButtonGroup/ButtonGroup.tsx",
          )),
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
        SaveBar = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/SaveBar/SaveBar.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(SaveBar.A, options);
      SaveBar.A && SaveBar.A.locals && SaveBar.A.locals;
      const SaveBar_SaveBar_SaveBar = (param) => {
          let { onClickSave, onClickCancel } = param;
          return (0, jsx_runtime.jsx)("div", {
            className: "save-bar",
            children: (0, jsx_runtime.jsxs)("div", {
              className: "save-bar-content",
              children: [
                (0, jsx_runtime.jsx)("p", {
                  className: "save-bar-label",
                  children: "Unsaved changes",
                }),
                (0, jsx_runtime.jsx)("div", {
                  className: "save-bar-buttons",
                  children: (0, jsx_runtime.jsx)(ButtonGroup.A, {
                    variantFirstButton: "primary",
                    variantSecondButton: "secondary",
                    direction: "row",
                    contentFirstButton: "Cancel",
                    contentSecondButton: "Save",
                    onClickFirstButton: onClickCancel,
                    onClickSecondButton: (e) => {
                      e.stopPropagation(), onClickSave(e);
                    },
                  }),
                }),
              ],
            }),
          });
        },
        components_SaveBar_SaveBar = SaveBar_SaveBar_SaveBar;
      SaveBar_SaveBar_SaveBar.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "SaveBar",
        props: {
          onClickSave: {
            required: !0,
            tsType: {
              name: "signature",
              type: "function",
              raw: "(e: React.MouseEvent) => void",
              signature: {
                arguments: [
                  {
                    type: { name: "ReactMouseEvent", raw: "React.MouseEvent" },
                    name: "e",
                  },
                ],
                return: { name: "void" },
              },
            },
            description: "",
          },
          onClickCancel: {
            required: !0,
            tsType: {
              name: "signature",
              type: "function",
              raw: "() => void",
              signature: { arguments: [], return: { name: "void" } },
            },
            description: "",
          },
        },
      };
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/SaveBar/SaveBar.scss":
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
          ".save-bar{display:flex;justify-content:center;background-color:var(--s-color-fill-highlight);padding:var(--s-spacing-x-small) var(--s-spacing-medium);box-shadow:var(--s-shadow-level-1)}.save-bar .save-bar-content{width:100%;display:flex;flex-direction:row;align-items:center;justify-content:space-between;max-width:1280px}.save-bar .save-bar-content .save-bar-label{font:var(--s-typography-heading-small);color:var(--s-color-content-on-color)}.save-bar .save-bar-content .save-bar-buttons{display:flex}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/SaveBar/SaveBar.scss"],
            names: [],
            mappings:
              "AAAA,UACE,YAAA,CACA,sBAAA,CACA,8CAAA,CACA,wDAAA,CACA,kCAAA,CAEA,4BACE,UAAA,CACA,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,6BAAA,CACA,gBAAA,CAEA,4CACE,sCAAA,CACA,qCAAA,CAGF,8CACE,YAAA",
            sourcesContent: [
              ".save-bar {\n  display: flex;\n  justify-content: center;\n  background-color: var(--s-color-fill-highlight);\n  padding: var(--s-spacing-x-small) var(--s-spacing-medium);\n  box-shadow: var(--s-shadow-level-1);\n\n  .save-bar-content {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    max-width: 1280px;\n\n    .save-bar-label {\n      font: var(--s-typography-heading-small);\n      color: var(--s-color-content-on-color);\n    }\n\n    .save-bar-buttons {\n      display: flex;\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
