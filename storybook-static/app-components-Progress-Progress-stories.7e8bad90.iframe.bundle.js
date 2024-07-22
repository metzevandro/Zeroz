"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [585],
  {
    "./src/app/components/Progress/Progress.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_Progress_Progress,
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
        Progress = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Progress/Progress.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Progress.A, options);
      Progress.A && Progress.A.locals && Progress.A.locals;
      var react = __webpack_require__(
        "./node_modules/next/dist/compiled/react/index.js",
      );
      const Progress_Progress_Progress = ({ value, error, indeterminate }) => {
          const [progress, setProgress] = (0, react.useState)(0);
          return (
            (0, react.useEffect)(() => {
              setProgress(value);
            }, [value]),
            (0, jsx_runtime.jsx)("div", {
              className: "progress",
              children:
                !0 === indeterminate
                  ? (0, jsx_runtime.jsx)("div", {
                      className: "progress-bar-loading",
                    })
                  : (0, jsx_runtime.jsx)("div", {
                      className: `progress-bar ${100 === value ? "progress-bar-success" : ""} ${error ? "progress-bar-error" : ""}`,
                      style: { width: `${progress}%` },
                    }),
            })
          );
        },
        components_Progress_Progress = Progress_Progress_Progress;
      try {
        (Progress_Progress_Progress.displayName = "Progress"),
          (Progress_Progress_Progress.__docgenInfo = {
            description: "",
            displayName: "Progress",
            props: {
              value: {
                defaultValue: null,
                description: "",
                name: "value",
                required: !0,
                type: { name: "number" },
              },
              error: {
                defaultValue: null,
                description: "",
                name: "error",
                required: !1,
                type: { name: "boolean" },
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
              "src/app/components/Progress/Progress.tsx#Progress"
            ] = {
              docgenInfo: Progress_Progress_Progress.__docgenInfo,
              name: "Progress",
              path: "src/app/components/Progress/Progress.tsx#Progress",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/Progress/Progress.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Error: () => Error,
          Indeterminate: () => Indeterminate,
          Loading: () => Loading,
          Success: () => Success,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        _Progress__WEBPACK_IMPORTED_MODULE_2__ =
          (__webpack_require__("./src/app/styles.scss"),
          __webpack_require__("./src/app/components/Progress/Progress.tsx")),
        _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./node_modules/@storybook/blocks/dist/index.mjs",
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Components/Progress",
          component: _Progress__WEBPACK_IMPORTED_MODULE_2__.A,
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
                              { children: "Progress" },
                            ),
                            " component shows how a task or operation is loading.",
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
          tags: ["autodocs"],
          argTypes: {
            value: {
              control: "number",
              description:
                "The current value of the progress bar. When the value is 100, the progress bar turns green.",
              table: { category: "Value" },
            },
            indeterminate: {
              control: "boolean",
              description:
                "If true, the progress bar will display an indeterminate state.",
              table: { category: "State" },
            },
            error: {
              control: "boolean",
              description:
                "If true, the progress bar will display an error state.",
              table: { category: "State" },
            },
          },
        },
        Default = { args: { value: 0, indeterminate: !1, error: !1 } },
        Loading = { args: { value: 50, indeterminate: !1, error: !1 } },
        Success = { args: { value: 100, indeterminate: !1, error: !1 } },
        Indeterminate = { args: { value: 0, indeterminate: !0, error: !1 } },
        Error = { args: { value: 90, indeterminate: !1, error: !0 } },
        __namedExportsOrder = [
          "Default",
          "Loading",
          "Success",
          "Indeterminate",
          "Error",
        ];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    value: 0,\n    indeterminate: false,\n    error: false\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Loading.parameters = {
          ...Loading.parameters,
          docs: {
            ...Loading.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    value: 50,\n    indeterminate: false,\n    error: false\n  }\n}",
              ...Loading.parameters?.docs?.source,
            },
          },
        }),
        (Success.parameters = {
          ...Success.parameters,
          docs: {
            ...Success.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    value: 100,\n    indeterminate: false,\n    error: false\n  }\n}",
              ...Success.parameters?.docs?.source,
            },
          },
        }),
        (Indeterminate.parameters = {
          ...Indeterminate.parameters,
          docs: {
            ...Indeterminate.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    value: 0,\n    indeterminate: true,\n    error: false\n  }\n}",
              ...Indeterminate.parameters?.docs?.source,
            },
          },
        }),
        (Error.parameters = {
          ...Error.parameters,
          docs: {
            ...Error.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    value: 90,\n    indeterminate: false,\n    error: true\n  }\n}",
              ...Error.parameters?.docs?.source,
            },
          },
        });
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Progress/Progress.scss":
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
          ".progress{position:relative;width:100%;height:4px;background-color:var(--s-color-border-default);overflow:hidden}.progress .progress-bar-loading{position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;background:var(--s-color-fill-highlight);animation:loading 2s linear infinite}.progress .progress-bar{height:100%;background-color:var(--s-color-fill-highlight);transition:width .3s ease}.progress .progress-bar-success{background-color:var(--s-color-fill-success)}.progress .progress-bar-error{background-color:var(--s-color-fill-warning)}@keyframes loading{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Progress/Progress.scss"],
            names: [],
            mappings:
              "AAAA,UACE,iBAAA,CACA,UAAA,CACA,UAAA,CACA,8CAAA,CACA,eAAA,CAEA,gCACE,iBAAA,CACA,KAAA,CACA,MAAA,CACA,WAAA,CACA,UAAA,CACA,eAAA,CACA,wCAAA,CACA,oCAAA,CAGF,wBACE,WAAA,CACA,8CAAA,CACA,yBAAA,CAGF,gCACE,4CAAA,CAGF,8BACE,4CAAA,CAIJ,mBACE,GACE,2BAAA,CAEF,KACE,0BAAA,CAAA",
            sourcesContent: [
              ".progress {\n  position: relative;\n  width: 100%;\n  height: 4px;\n  background-color: var(--s-color-border-default);\n  overflow: hidden;\n\n  .progress-bar-loading {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    background: var(--s-color-fill-highlight);\n    animation: loading 2s linear infinite;\n  }\n\n  .progress-bar {\n    height: 100%;\n    background-color: var(--s-color-fill-highlight);\n    transition: width 0.3s ease;\n  }\n\n  .progress-bar-success {\n    background-color: var(--s-color-fill-success);\n  }\n\n  .progress-bar-error {\n    background-color: var(--s-color-fill-warning);\n  }\n}\n\n@keyframes loading {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
