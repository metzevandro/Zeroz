"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [173],
  {
    "./src/app/components/InputTextArea/InputTextArea.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => app_components_InputTextArea_InputTextArea,
      });
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
        InputTextArea_InputTextArea = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputTextArea/InputTextArea.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(
        InputTextArea_InputTextArea.A,
        options,
      );
      InputTextArea_InputTextArea.A &&
        InputTextArea_InputTextArea.A.locals &&
        InputTextArea_InputTextArea.A.locals;
      const app_components_InputTextArea_InputTextArea = ({
        placeholder,
        label,
        disabled,
        error,
        errorText,
        onChange,
        value = "",
      }) => {
        const [internalValue, setInternalValue] = (0, react.useState)(value),
          textareaRef = (0, react.useRef)(null);
        (0, react.useEffect)(() => {
          setInternalValue(value);
        }, [value]);
        return (0, jsx_runtime.jsxs)("div", {
          className: "text-area-root",
          children: [
            (0, jsx_runtime.jsx)("label", {
              className: "text-area-label",
              children: label,
            }),
            (0, jsx_runtime.jsx)("div", {
              tabIndex: 0,
              className: `text-area ${disabled && "disabled"} ${error && !disabled ? "error" : ""}`,
              onClick: () => {
                textareaRef.current && textareaRef.current.focus();
              },
              children: (0, jsx_runtime.jsx)("textarea", {
                ref: textareaRef,
                placeholder,
                disabled,
                onChange: (event) => {
                  const newValue = event.target.value;
                  setInternalValue(newValue), onChange && onChange(newValue);
                },
                value: internalValue,
              }),
            }),
            error &&
              (0, jsx_runtime.jsx)("p", {
                className: "description",
                children: errorText,
              }),
          ],
        });
      };
      try {
        (InputTextArea.displayName = "InputTextArea"),
          (InputTextArea.__docgenInfo = {
            description: "",
            displayName: "InputTextArea",
            props: {
              placeholder: {
                defaultValue: null,
                description: "",
                name: "placeholder",
                required: !0,
                type: { name: "string" },
              },
              label: {
                defaultValue: null,
                description: "",
                name: "label",
                required: !0,
                type: { name: "string" },
              },
              disabled: {
                defaultValue: null,
                description: "",
                name: "disabled",
                required: !1,
                type: { name: "boolean" },
              },
              error: {
                defaultValue: null,
                description: "",
                name: "error",
                required: !1,
                type: { name: "boolean" },
              },
              errorText: {
                defaultValue: null,
                description: "",
                name: "errorText",
                required: !1,
                type: { name: "string" },
              },
              onChange: {
                defaultValue: null,
                description: "",
                name: "onChange",
                required: !1,
                type: { name: "((value: string) => void)" },
              },
              value: {
                defaultValue: { value: "" },
                description: "",
                name: "value",
                required: !1,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/InputTextArea/InputTextArea.tsx#InputTextArea"
            ] = {
              docgenInfo: InputTextArea.__docgenInfo,
              name: "InputTextArea",
              path: "src/app/components/InputTextArea/InputTextArea.tsx#InputTextArea",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/InputTextArea/InputTextArea.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Disabled: () => Disabled,
          Error: () => Error,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        _InputTextArea__WEBPACK_IMPORTED_MODULE_2__ =
          (__webpack_require__("./src/app/styles.scss"),
          __webpack_require__(
            "./src/app/components/InputTextArea/InputTextArea.tsx",
          )),
        _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./node_modules/@storybook/blocks/dist/index.mjs",
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Components/Input TextArea",
          component: _InputTextArea__WEBPACK_IMPORTED_MODULE_2__.A,
          tags: ["autodocs"],
          parameters: {
            layout: "padded",
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
                              { children: "Text Area" },
                            ),
                            " input allows users to write and edit multiple lines of text, making it suitable for entering longer messages or detailed information",
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
              description: "The text label displayed above the textarea.",
              table: { category: "Appearance" },
            },
            placeholder: {
              control: "text",
              description:
                "The placeholder text displayed inside the textarea when it is empty.",
              table: { category: "Appearance" },
            },
            value: {
              control: "text",
              description: "The current value of the textarea.",
              table: { category: "Value" },
            },
            disabled: {
              control: "boolean",
              description:
                "If true, the textarea will be disabled and uneditable.",
              table: { category: "State" },
            },
            error: {
              control: "boolean",
              description:
                "If true, the textarea will be styled to indicate an error state.",
              table: { category: "State" },
            },
            errorText: {
              control: "text",
              description:
                "The error message text displayed below the textarea when in an error state.",
              table: { category: "Text" },
            },
            onChange: {
              action: "onChange",
              description:
                "Callback function that is called when the value of the textarea changes.",
              table: { category: "Events" },
            },
          },
        },
        Default = {
          args: {
            label: "Label",
            placeholder: "Placeholder",
            disabled: !1,
            error: !1,
            errorText: "Error",
          },
        },
        Disabled = {
          args: {
            label: "Label",
            placeholder: "Placeholder",
            disabled: !0,
            error: !1,
          },
        },
        Error = {
          args: {
            label: "Label",
            placeholder: "Placeholder",
            error: !0,
            errorText: "Error",
            disabled: !1,
          },
        },
        __namedExportsOrder = ["Default", "Disabled", "Error"];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    label: "Label",\n    placeholder: "Placeholder",\n    disabled: false,\n    error: false,\n    errorText: "Error"\n  }\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    label: "Label",\n    placeholder: "Placeholder",\n    disabled: true,\n    error: false\n  }\n}',
              ...Disabled.parameters?.docs?.source,
            },
          },
        }),
        (Error.parameters = {
          ...Error.parameters,
          docs: {
            ...Error.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    label: "Label",\n    placeholder: "Placeholder",\n    error: true,\n    errorText: "Error",\n    disabled: false\n  }\n}',
              ...Error.parameters?.docs?.source,
            },
          },
        });
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputTextArea/InputTextArea.scss":
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
          ".text-area-root{display:flex;flex-direction:column;gap:var(--s-spacing-nano)}.text-area-root .text-area-label{color:var(--s-color-content-default);font:var(--s-typography-label-medium)}.text-area-root .text-area{cursor:text;display:flex;align-items:center;border-radius:var(--s-border-radius-medium);border:solid var(--s-border-width-hairline) var(--s-color-border-default);background-color:var(--s-color-fill-default);box-shadow:0px 1px 2px 0px rgba(14,21,36,.06)}.text-area-root .text-area textarea{width:100%;min-height:120px;padding:var(--s-spacing-xx-small) var(--s-spacing-x-small);color:var(--s-color-content-default);font:var(--s-typography-paragraph-regular);background-color:rgba(0,0,0,0);border:none;height:100%;resize:vertical}.text-area-root .text-area textarea::-webkit-scrollbar{width:var(--s-spacing-nano);border-radius:12px}.text-area-root .text-area textarea::-webkit-scrollbar-thumb{background:var(--s-color-fill-default-light);border-radius:12px}.text-area-root .text-area textarea:focus-visible{outline:none}.text-area-root .text-area textarea::placeholder{font:var(--s-typography-paragraph-regular);color:var(--s-color-content-placeholder)}.text-area-root .text-area:hover{border:1px solid var(--s-color-border-default-hover)}.text-area-root .text-area:focus-within{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:var(--s-border-width-hairline);outline-style:solid;background-color:var(--s-color-fill-default)}.text-area-root .text-area:active{color:var(--s-color-content-default);font:var(--s-typography-paragraph-regular)}.text-area-root .text-area.disabled{opacity:.64;color:var(--s-color-content-disable);background-color:var(--s-color-fill-disable);border-color:var(--s-color-border-default)}.text-area-root .text-area.disabled:focus-within{outline-style:none}.text-area-root .text-area.error{color:var(--s-color-content-warning);background-color:var(--s-color-fill-warning-light);cursor:not-allowed;border:solid var(--s-border-width-hairline) var(--s-color-border-warning)}.text-area-root .text-area.error textarea::placeholder{color:var(--s-color-content-warning)}.text-area-root .text-area.error:hover{background-color:var(--s-color-fill-warning-light)}.text-area-root .text-area.error:focus-within{outline:none;background-color:none}.text-area-root .text-area.error:active{color:var(--s-color-content-on-color)}.text-area-root .description{font:var(--s-typography-caption-regular);color:var(--s-color-content-warning);margin:0}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/InputTextArea/InputTextArea.scss",
            ],
            names: [],
            mappings:
              "AAAA,gBACE,YAAA,CACA,qBAAA,CACA,yBAAA,CAEA,iCACE,oCAAA,CACA,qCAAA,CAGF,2BACE,WAAA,CACA,YAAA,CACA,kBAAA,CACA,2CAAA,CACA,yEAAA,CACA,4CAAA,CACA,6CAAA,CAEA,oCACE,UAAA,CACA,gBAAA,CACA,0DAAA,CACA,oCAAA,CACA,0CAAA,CACA,8BAAA,CACA,WAAA,CACA,WAAA,CACA,eAAA,CAEA,uDACE,2BAAA,CACA,kBAAA,CAGF,6DACE,4CAAA,CACA,kBAAA,CAGF,kDACE,YAAA,CAGF,iDACE,0CAAA,CACA,wCAAA,CAIJ,iCACE,oDAAA,CAGF,wCACE,wCAAA,CACA,6CAAA,CACA,6CAAA,CACA,mBAAA,CACA,4CAAA,CAGF,kCACE,oCAAA,CACA,0CAAA,CAGF,oCACE,WAAA,CACA,oCAAA,CACA,4CAAA,CACA,0CAAA,CAGF,iDACE,kBAAA,CAGF,iCACE,oCAAA,CACA,kDAAA,CACA,kBAAA,CACA,yEAAA,CAEA,uDACE,oCAAA,CAGF,uCACE,kDAAA,CAGF,8CACE,YAAA,CACA,qBAAA,CAGF,wCACE,qCAAA,CAIN,6BACE,wCAAA,CACA,oCAAA,CACA,QAAA",
            sourcesContent: [
              ".text-area-root {\n  display: flex;\n  flex-direction: column;\n  gap: var(--s-spacing-nano);\n\n  .text-area-label {\n    color: var(--s-color-content-default);\n    font: var(--s-typography-label-medium);\n  }\n\n  .text-area {\n    cursor: text;\n    display: flex;\n    align-items: center;\n    border-radius: var(--s-border-radius-medium);\n    border: solid var(--s-border-width-hairline) var(--s-color-border-default);\n    background-color: var(--s-color-fill-default);\n    box-shadow: 0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n\n    textarea {\n      width: 100%;\n      min-height: 120px;\n      padding: var(--s-spacing-xx-small) var(--s-spacing-x-small);\n      color: var(--s-color-content-default);\n      font: var(--s-typography-paragraph-regular);\n      background-color: transparent;\n      border: none;\n      height: 100%;\n      resize: vertical;\n\n      &::-webkit-scrollbar {\n        width: var(--s-spacing-nano);\n        border-radius: 12px;\n      }\n\n      &::-webkit-scrollbar-thumb {\n        background: var(--s-color-fill-default-light);\n        border-radius: 12px;\n      }\n\n      &:focus-visible {\n        outline: none;\n      }\n\n      &::placeholder {\n        font: var(--s-typography-paragraph-regular);\n        color: var(--s-color-content-placeholder);\n      }\n    }\n\n    &:hover {\n      border: 1px solid var(--s-color-border-default-hover);\n    }\n\n    &:focus-within {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-border-highlight);\n      outline-offset: var(--s-border-width-hairline);\n      outline-style: solid;\n      background-color: var(--s-color-fill-default);\n    }\n\n    &:active {\n      color: var(--s-color-content-default);\n      font: var(--s-typography-paragraph-regular);\n    }\n\n    &.disabled {\n      opacity: 0.64;\n      color: var(--s-color-content-disable);\n      background-color: var(--s-color-fill-disable);\n      border-color: var(--s-color-border-default);\n    }\n\n    &.disabled:focus-within {\n      outline-style: none;\n    }\n\n    &.error {\n      color: var(--s-color-content-warning);\n      background-color: var(--s-color-fill-warning-light);\n      cursor: not-allowed;\n      border: solid var(--s-border-width-hairline) var(--s-color-border-warning);\n\n      textarea::placeholder {\n        color: var(--s-color-content-warning);\n      }\n\n      &:hover {\n        background-color: var(--s-color-fill-warning-light);\n      }\n\n      &:focus-within {\n        outline: none;\n        background-color: none;\n      }\n\n      &:active {\n        color: var(--s-color-content-on-color);\n      }\n    }\n  }\n  .description {\n    font: var(--s-typography-caption-regular);\n    color: var(--s-color-content-warning);\n    margin: 0;\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
