"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [5197],
  {
    "./src/app/components/InputSelect/InputSelect.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Disable: () => Disable,
          Error: () => Error,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Default_parameters,
        _Default_parameters_docs,
        _Default_parameters1,
        _Error_parameters,
        _Error_parameters_docs,
        _Error_parameters1,
        _Disable_parameters,
        _Disable_parameters_docs,
        _Disable_parameters1,
        _InputSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./src/app/components/InputSelect/InputSelect.tsx",
        );
      __webpack_require__("./src/app/styles.scss");
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Components/Input Select",
          component: _InputSelect__WEBPACK_IMPORTED_MODULE_0__.A,
          tags: ["autodocs"],
          parameters: { layout: "padded" },
          argTypes: {},
        },
        options = ["Option 1", "Option 2", "Option 3"],
        Default = {
          args: {
            label: "Label",
            options,
            error: !1,
            errorMessage: "",
            disabled: !1,
            onChange: (value) => {},
          },
        },
        Error = {
          args: {
            label: "Label",
            options,
            disabled: !1,
            error: !0,
            errorMessage: "Error",
            onChange: (value) => {},
          },
        },
        Disable = {
          args: {
            label: "Label",
            options,
            disabled: !0,
            error: !1,
            onChange: (value) => {},
          },
        };
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...(null === (_Default_parameters = Default.parameters) ||
          void 0 === _Default_parameters
            ? void 0
            : _Default_parameters.docs),
          source: {
            originalSource:
              '{\n  args: {\n    label: "Label",\n    options: options,\n    error: false,\n    errorMessage: "",\n    disabled: false,\n    onChange: (value: string) => {}\n  }\n}',
            ...(null === (_Default_parameters1 = Default.parameters) ||
            void 0 === _Default_parameters1 ||
            null === (_Default_parameters_docs = _Default_parameters1.docs) ||
            void 0 === _Default_parameters_docs
              ? void 0
              : _Default_parameters_docs.source),
          },
        },
      }),
        (Error.parameters = {
          ...Error.parameters,
          docs: {
            ...(null === (_Error_parameters = Error.parameters) ||
            void 0 === _Error_parameters
              ? void 0
              : _Error_parameters.docs),
            source: {
              originalSource:
                '{\n  args: {\n    label: "Label",\n    options: options,\n    disabled: false,\n    error: true,\n    errorMessage: "Error",\n    onChange: (value: string) => {}\n  }\n}',
              ...(null === (_Error_parameters1 = Error.parameters) ||
              void 0 === _Error_parameters1 ||
              null === (_Error_parameters_docs = _Error_parameters1.docs) ||
              void 0 === _Error_parameters_docs
                ? void 0
                : _Error_parameters_docs.source),
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
                '{\n  args: {\n    label: "Label",\n    options: options,\n    disabled: true,\n    error: false,\n    onChange: (value: string) => {}\n  }\n}',
              ...(null === (_Disable_parameters1 = Disable.parameters) ||
              void 0 === _Disable_parameters1 ||
              null === (_Disable_parameters_docs = _Disable_parameters1.docs) ||
              void 0 === _Disable_parameters_docs
                ? void 0
                : _Disable_parameters_docs.source),
            },
          },
        });
      const __namedExportsOrder = ["Default", "Error", "Disable"];
    },
    "./src/app/components/InputSelect/InputSelect.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_InputSelect_InputSelect,
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
        InputSelect = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputSelect/InputSelect.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(InputSelect.A, options);
      InputSelect.A && InputSelect.A.locals && InputSelect.A.locals;
      const InputSelect_InputSelect_InputSelect = (param) => {
          let {
            options,
            label,
            error,
            errorMessage,
            disabled,
            onChange,
            value,
          } = param;
          const [isOpen, setIsOpen] = (0, react.useState)(!1),
            [selectedOption, setSelectedOption] = (0, react.useState)(
              value || void 0,
            );
          (0, react.useEffect)(() => {
            setSelectedOption(value || void 0);
          }, [value]);
          const dropdownRef = (0, react.useRef)(null),
            handleClickOutside = (event) => {
              isOpen &&
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                setIsOpen(!1);
            };
          return (
            (0, react.useEffect)(
              () => (
                document.addEventListener("mousedown", handleClickOutside),
                () => {
                  document.removeEventListener("mousedown", handleClickOutside);
                }
              ),
              [isOpen],
            ),
            (0, jsx_runtime.jsxs)("div", {
              className: "input-select-root",
              children: [
                (0, jsx_runtime.jsx)("div", {
                  className: "input-select-label",
                  children: label,
                }),
                (0, jsx_runtime.jsx)("div", {
                  className: "input-select",
                  children: (0, jsx_runtime.jsx)("div", {
                    className: "input-select-button "
                      .concat(selectedOption && "option", " ")
                      .concat(error && "error", " ")
                      .concat(disabled && "disabled"),
                    children: (0, jsx_runtime.jsx)("select", {
                      className: "".concat(error && "select-error"),
                      value: selectedOption || "",
                      onChange: (event) => {
                        const newValue = event.target.value;
                        setSelectedOption(newValue), onChange(newValue);
                      },
                      disabled: disabled || error,
                      children: options.map((option, index) =>
                        (0, jsx_runtime.jsx)(
                          "option",
                          { value: option, children: option },
                          index,
                        ),
                      ),
                    }),
                  }),
                }),
                error &&
                  (0, jsx_runtime.jsx)("p", {
                    className: "input-select-error-message",
                    children: errorMessage,
                  }),
              ],
            })
          );
        },
        components_InputSelect_InputSelect =
          InputSelect_InputSelect_InputSelect;
      try {
        (InputSelect_InputSelect_InputSelect.displayName = "InputSelect"),
          (InputSelect_InputSelect_InputSelect.__docgenInfo = {
            description: "",
            displayName: "InputSelect",
            props: {
              options: {
                defaultValue: null,
                description: "",
                name: "options",
                required: !0,
                type: { name: "string[]" },
              },
              disabled: {
                defaultValue: null,
                description: "",
                name: "disabled",
                required: !1,
                type: { name: "boolean" },
              },
              label: {
                defaultValue: null,
                description: "",
                name: "label",
                required: !1,
                type: { name: "string" },
              },
              error: {
                defaultValue: null,
                description: "",
                name: "error",
                required: !1,
                type: { name: "boolean" },
              },
              errorMessage: {
                defaultValue: null,
                description: "",
                name: "errorMessage",
                required: !1,
                type: { name: "string" },
              },
              onChange: {
                defaultValue: null,
                description: "",
                name: "onChange",
                required: !0,
                type: { name: "(value: string) => void" },
              },
              value: {
                defaultValue: null,
                description: "",
                name: "value",
                required: !1,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/InputSelect/InputSelect.tsx#InputSelect"
            ] = {
              docgenInfo: InputSelect_InputSelect_InputSelect.__docgenInfo,
              name: "InputSelect",
              path: "src/app/components/InputSelect/InputSelect.tsx#InputSelect",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputSelect/InputSelect.scss":
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
          ".input-select-root{display:flex;flex-direction:column;gap:var(--s-spacing-nano)}.input-select-root .input-select-label{font:var(--s-typography-label-medium);color:var(--s-color-content-default)}.input-select-root .input-select-button{cursor:pointer;padding:var(--s-spacing-xx-small) var(--s-spacing-x-small);display:flex;justify-content:space-between;align-items:center;border:var(--s-border-width-hairline) solid var(--s-color-border-default);background-color:var(--s-color-fill-default);border-radius:var(--s-border-radius-small);color:var(--s-color-content-placeholder)}.input-select-root .input-select-button select{cursor:pointer;width:100%;background-color:rgba(0,0,0,0);color:var(--s-color-content-default);font:var(--s-typography-paragraph-regular);height:22px}.input-select-root .input-select-button select:focus{outline:none}.input-select-root .input-select-button select.select-error{color:var(--s-color-content-warning)}.input-select-root .input-select-button select option{cursor:pointer;display:flex;background-color:var(--s-color-fill-default);color:var(--s-color-content-default);font:var(--s-typography-paragraph-regular)}.input-select-root .input-select-button select:disabled{cursor:default}.input-select-root .input-select-button.option{color:var(--s-color-content-default)}.input-select-root .input-select-button.error{border-color:var(--s-color-border-warning);color:var(--s-color-content-warning);background-color:var(--s-color-fill-warning-light)}.input-select-root .input-select-button.error:hover{background-color:var(--s-color-fill-warning-light)}.input-select-root .input-select-button.disabled{background-color:var(--s-color-fill-disable);color:var(--s-color-content-disable);opacity:.64}.input-select-root .input-select-button.disabled:hover{border-color:var(--s-color-border-default);cursor:default}.input-select-root .input-select-button:hover{background-color:var(--s-color-fill-disable);border:1px solid var(--s-color-border-default-hover)}.input-select-root .input-select-button:focus-within{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:var(--s-border-width-hairline);outline-style:solid}.input-select-root .input-select-error-message{color:var(--s-color-content-warning);font:VAR(--s-typography-caption-regular)}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/InputSelect/InputSelect.scss",
            ],
            names: [],
            mappings:
              "AAAA,mBACE,YAAA,CACA,qBAAA,CACA,yBAAA,CAEA,uCACE,qCAAA,CACA,oCAAA,CAGF,wCACE,cAAA,CACA,0DAAA,CACA,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,yEAAA,CACA,4CAAA,CACA,0CAAA,CACA,wCAAA,CAEA,+CACE,cAAA,CACA,UAAA,CACA,8BAAA,CACA,oCAAA,CACA,0CAAA,CACA,WAAA,CACA,qDACE,YAAA,CAGF,4DACE,oCAAA,CAGF,sDACE,cAAA,CACA,YAAA,CACA,4CAAA,CACA,oCAAA,CACA,0CAAA,CAIJ,wDACE,cAAA,CAGF,+CACE,oCAAA,CAGF,8CACE,0CAAA,CACA,oCAAA,CACA,kDAAA,CAEA,oDACE,kDAAA,CAIJ,iDACE,4CAAA,CACA,oCAAA,CACA,WAAA,CAEA,uDACE,0CAAA,CACA,cAAA,CAIJ,8CACE,4CAAA,CACA,oDAAA,CAGF,qDACE,wCAAA,CACA,6CAAA,CACA,6CAAA,CACA,mBAAA,CAIJ,+CACE,oCAAA,CACA,wCAAA",
            sourcesContent: [
              ".input-select-root {\n  display: flex;\n  flex-direction: column;\n  gap: var(--s-spacing-nano);\n\n  .input-select-label {\n    font: var(--s-typography-label-medium);\n    color: var(--s-color-content-default);\n  }\n\n  .input-select-button {\n    cursor: pointer;\n    padding: var(--s-spacing-xx-small) var(--s-spacing-x-small);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n    background-color: var(--s-color-fill-default);\n    border-radius: var(--s-border-radius-small);\n    color: var(--s-color-content-placeholder);\n\n    select {\n      cursor: pointer;\n      width: 100%;\n      background-color: transparent;\n      color: var(--s-color-content-default);\n      font: var(--s-typography-paragraph-regular);\n      height: 22px;\n      &:focus {\n        outline: none;\n      }\n\n      &.select-error {\n        color: var(--s-color-content-warning);\n      }\n\n      option {\n        cursor: pointer;\n        display: flex;\n        background-color: var(--s-color-fill-default);\n        color: var(--s-color-content-default);\n        font: var(--s-typography-paragraph-regular);\n      }\n    }\n\n    select:disabled {\n      cursor: default;\n    }\n\n    &.option {\n      color: var(--s-color-content-default);\n    }\n\n    &.error {\n      border-color: var(--s-color-border-warning);\n      color: var(--s-color-content-warning);\n      background-color: var(--s-color-fill-warning-light);\n\n      &:hover {\n        background-color: var(--s-color-fill-warning-light);\n      }\n    }\n\n    &.disabled {\n      background-color: var(--s-color-fill-disable);\n      color: var(--s-color-content-disable);\n      opacity: 0.64;\n\n      &:hover {\n        border-color: var(--s-color-border-default);\n        cursor: default;\n      }\n    }\n\n    &:hover {\n      background-color: var(--s-color-fill-disable);\n      border: 1px solid var(--s-color-border-default-hover);\n    }\n\n    &:focus-within {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-border-highlight);\n      outline-offset: var(--s-border-width-hairline);\n      outline-style: solid;\n    }\n  }\n\n  .input-select-error-message {\n    color: var(--s-color-content-warning);\n    font: VAR(--s-typography-caption-regular);\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
