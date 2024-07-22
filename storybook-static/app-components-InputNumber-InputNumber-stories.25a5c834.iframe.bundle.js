"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [625],
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
    "./src/app/components/InputNumber/InputNumber.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_InputNumber_InputNumber,
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
        InputNumber = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputNumber/InputNumber.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(InputNumber.A, options);
      InputNumber.A && InputNumber.A.locals && InputNumber.A.locals;
      const InputNumber_InputNumber_InputNumber = ({
          max,
          min,
          placeholder,
          disabled,
          label,
          onChange,
          error,
          textError,
          value: propValue,
        }) => {
          const [numero, setNumero] = (0, react.useState)(() => {
            if (void 0 !== min) return min;
          });
          (0, react.useEffect)(() => {
            if (void 0 !== propValue) {
              const parsedValue = parseInt(propValue, 10);
              isNaN(parsedValue) || setNumero(parsedValue);
            }
          }, [propValue]);
          return (0, jsx_runtime.jsxs)("div", {
            className: "input-number-root",
            children: [
              label &&
                (0, jsx_runtime.jsx)("label", {
                  className: "input-number-label",
                  children: label,
                }),
              (0, jsx_runtime.jsxs)("div", {
                className: "input-number " + (disabled ? "disabled" : ""),
                children: [
                  (0, jsx_runtime.jsx)("button", {
                    disabled,
                    className: "subtract",
                    onClick: () => {
                      setNumero((prevNumero) => {
                        if (void 0 === prevNumero)
                          return void 0 !== min ? min : -1;
                        const newNum = prevNumero - 1;
                        return void 0 !== min && newNum < min
                          ? prevNumero
                          : (onChange && onChange(newNum.toString()), newNum);
                      });
                    },
                    children: (0, jsx_runtime.jsx)(Icon.A, {
                      size: "md",
                      icon: "remove",
                    }),
                  }),
                  (0, jsx_runtime.jsx)("input", {
                    className: "input " + (error ? "error" : ""),
                    type: "number",
                    placeholder,
                    onChange: (event) => {
                      const inputValue = event.target.value;
                      let newNum;
                      "" === inputValue
                        ? (newNum = void 0)
                        : ((newNum = parseInt(inputValue, 10)),
                          isNaN(newNum)
                            ? (newNum = void 0 !== min ? min : void 0)
                            : void 0 !== max && newNum > max
                              ? (newNum = max)
                              : void 0 !== min &&
                                newNum < min &&
                                (newNum = min)),
                        setNumero(newNum),
                        onChange &&
                          onChange(void 0 !== newNum ? newNum.toString() : "");
                    },
                    value: void 0 !== numero ? numero : "",
                    max,
                    min,
                    disabled,
                    inputMode: "numeric",
                  }),
                  (0, jsx_runtime.jsx)("button", {
                    disabled,
                    className: "add",
                    onClick: () => {
                      setNumero((prevNumero) => {
                        if (void 0 === prevNumero)
                          return void 0 !== min ? min : 1;
                        const newNum = prevNumero + 1;
                        return void 0 !== max && newNum > max
                          ? prevNumero
                          : (onChange && onChange(newNum.toString()), newNum);
                      });
                    },
                    children: (0, jsx_runtime.jsx)(Icon.A, {
                      size: "md",
                      icon: "add",
                    }),
                  }),
                ],
              }),
              error &&
                (0, jsx_runtime.jsx)("div", {
                  className: "textError",
                  children: textError,
                }),
            ],
          });
        },
        components_InputNumber_InputNumber =
          InputNumber_InputNumber_InputNumber;
      try {
        (InputNumber_InputNumber_InputNumber.displayName = "InputNumber"),
          (InputNumber_InputNumber_InputNumber.__docgenInfo = {
            description: "",
            displayName: "InputNumber",
            props: {
              max: {
                defaultValue: null,
                description: "",
                name: "max",
                required: !1,
                type: { name: "number" },
              },
              min: {
                defaultValue: null,
                description: "",
                name: "min",
                required: !1,
                type: { name: "number" },
              },
              placeholder: {
                defaultValue: null,
                description: "",
                name: "placeholder",
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
              label: {
                defaultValue: null,
                description: "",
                name: "label",
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
              error: {
                defaultValue: null,
                description: "",
                name: "error",
                required: !1,
                type: { name: "boolean" },
              },
              textError: {
                defaultValue: null,
                description: "",
                name: "textError",
                required: !1,
                type: { name: "string" },
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
              "src/app/components/InputNumber/InputNumber.tsx#InputNumber"
            ] = {
              docgenInfo: InputNumber_InputNumber_InputNumber.__docgenInfo,
              name: "InputNumber",
              path: "src/app/components/InputNumber/InputNumber.tsx#InputNumber",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/InputNumber/InputNumber.stories.tsx": (
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
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        ),
        _InputNumber__WEBPACK_IMPORTED_MODULE_3__ =
          (__webpack_require__("./src/app/styles.scss"),
          __webpack_require__(
            "./src/app/components/InputNumber/InputNumber.tsx",
          )),
        _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/@storybook/blocks/dist/index.mjs",
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Components/Input Number",
          component: _InputNumber__WEBPACK_IMPORTED_MODULE_3__.A,
          parameters: {
            layout: "padded",
            docs: {
              page: () =>
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                  {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.hE,
                        {},
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Pd,
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
                              { children: "Number Input" },
                            ),
                            " lets users type numbers and increase or decrease using icon buttons.",
                            " ",
                          ],
                        },
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Tn,
                        {},
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.H2,
                        {},
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.om,
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
              description:
                "The text label displayed above the input number field.",
              table: { category: "Text" },
            },
            placeholder: {
              control: "text",
              description:
                "The placeholder text displayed inside the input number field when it is empty.",
              table: { category: "Text" },
            },
            disabled: {
              control: "boolean",
              description:
                "If true, the input number field will be disabled and unclickable.",
              table: { category: "State" },
            },
            error: {
              control: "boolean",
              description:
                "If true, the input number field will be styled to indicate an error state.",
              table: { category: "State" },
            },
            textError: {
              control: "text",
              description:
                "The error message text displayed below the input number field when in an error state.",
              table: { category: "Text" },
            },
            max: {
              control: "number",
              description:
                "The maximum value allowed for the input number field.",
              table: { category: "Validation" },
            },
            min: {
              control: "number",
              description:
                "The minimum value allowed for the input number field.",
              table: { category: "Validation" },
            },
            initialValue: {
              control: "number",
              description: "The initial value set for the input number field.",
              table: { category: "Value" },
            },
          },
        },
        Template = (args) => {
          const [inputValue, setInputValue] = (0,
          react__WEBPACK_IMPORTED_MODULE_1__.useState)(
            args.initialValue.toString(),
          );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _InputNumber__WEBPACK_IMPORTED_MODULE_3__.A,
            {
              label: args.label,
              placeholder: args.placeholder,
              max: args.max,
              min: args.min,
              value: inputValue,
              onChange: (value) => {
                setInputValue(value);
              },
              disabled: args.disabled,
              error: args.error,
              textError: args.textError,
            },
          );
        },
        Default = Template.bind({});
      Default.args = {
        label: "Label",
        placeholder: "Placeholder",
        initialValue: 0,
        max: 10,
        min: -10,
        disabled: !1,
        error: !1,
        textError: "Error",
      };
      const Disabled = Template.bind({});
      Disabled.args = {
        disabled: !0,
        label: "Label",
        placeholder: "Placeholder",
        initialValue: 0,
        max: 10,
        min: -10,
      };
      const Error = Template.bind({});
      Error.args = {
        error: !0,
        textError: "Error",
        label: "Label",
        placeholder: "Placeholder",
        initialValue: 0,
        max: 10,
        min: -10,
      };
      const __namedExportsOrder = ["Default", "Disabled", "Error"];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "args => {\n  const [inputValue, setInputValue] = useState(args.initialValue.toString());\n  const handleInputChange = (value: string) => {\n    setInputValue(value);\n  };\n  return <InputNumber label={args.label} placeholder={args.placeholder} max={args.max} min={args.min} value={inputValue} onChange={handleInputChange} disabled={args.disabled} error={args.error} textError={args.textError} />;\n}",
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
                "args => {\n  const [inputValue, setInputValue] = useState(args.initialValue.toString());\n  const handleInputChange = (value: string) => {\n    setInputValue(value);\n  };\n  return <InputNumber label={args.label} placeholder={args.placeholder} max={args.max} min={args.min} value={inputValue} onChange={handleInputChange} disabled={args.disabled} error={args.error} textError={args.textError} />;\n}",
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
                "args => {\n  const [inputValue, setInputValue] = useState(args.initialValue.toString());\n  const handleInputChange = (value: string) => {\n    setInputValue(value);\n  };\n  return <InputNumber label={args.label} placeholder={args.placeholder} max={args.max} min={args.min} value={inputValue} onChange={handleInputChange} disabled={args.disabled} error={args.error} textError={args.textError} />;\n}",
              ...Error.parameters?.docs?.source,
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
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputNumber/InputNumber.scss":
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
          ".input-number-root{box-sizing:border-box;width:100%;display:flex;flex-direction:column;gap:var(--s-spacing-nano);height:min-content}.input-number-root .input-number-label{font:var(--s-typography-label-medium);color:var(--s-color-content-default)}.input-number-root .input-number{border-radius:var(--s-border-radius-medium);display:flex;align-items:center;justify-content:space-between;width:100%;color:var(--s-color-content-default);box-shadow:0px 1px 2px 0px rgba(14,21,36,.06)}.input-number-root .input-number button:hover+input{border-left:none}.input-number-root .input-number input:hover+.add{border-left:none}.input-number-root .input-number input:hover{border-right:1px solid var(--s-color-border-default-hover)}.input-number-root .input-number.disabled{border-color:var(--s-color-border-default);background-color:var(--s-color-fill-disable);opacity:.64}.input-number-root .input-number.disabled input{background-color:var(--s-color-fill-disable)}.input-number-root .input-number.disabled input:hover{border-color:var(--s-color-border-default)}.input-number-root .input-number.disabled button:hover{background-color:rgba(0,0,0,0)}.input-number-root .input-number.disabled button:active{outline:none}.input-number-root .input-number:focus-within{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.input-number-root .input-number .add{display:flex;justify-content:center;height:40px;width:40px;box-sizing:border-box;border-radius:0 var(--s-border-radius-medium) var(--s-border-radius-medium) 0;z-index:2}.input-number-root .input-number .add:active{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:-1px;outline-style:solid}.input-number-root .input-number .add:hover{border:1px solid var(--s-color-border-default-hover)}.input-number-root .input-number .subtract{display:flex;justify-content:center;height:40px;width:40px;box-sizing:border-box;border-right:0;z-index:2;border-radius:var(--s-border-radius-medium) 0 0 var(--s-border-radius-medium)}.input-number-root .input-number .subtract:active{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:-1px;outline-style:solid}.input-number-root .input-number .subtract:hover{border:1px solid var(--s-color-border-default-hover)}.input-number-root .input-number button{display:flex;align-items:center;padding:var(--s-spacing-xx-small);margin:0;background-color:var(--s-color-fill-default);cursor:pointer;color:var(--s-color-content-default);border:var(--s-border-width-hairline) solid var(--s-color-border-default)}.input-number-root .input-number button:hover{background-color:var(--s-color-fill-default-hover)}.input-number-root .input-number button:focus-visible{outline:none}.input-number-root .input-number button:disabled{background-color:var(--s-color-fill-disable);color:var(--s-color-content-disable);cursor:auto}.input-number-root .input-number button:disabled:hover{border-color:var(--s-color-border-default)}.input-number-root .input-number input[type=number]::-webkit-inner-spin-button{-webkit-appearance:none}.input-number-root .input-number input[type=number]{-moz-appearance:textfield;appearance:textfield}.input-number-root .input-number input{height:40px;box-sizing:border-box;text-align:center;color:var(--s-color-content-default);font:var(--s-typography-paragraph-regular);width:100%;padding:var(--s-spacing-xx-small);border:1px solid var(--s-color-border-default);border-right:none;background-color:var(--s-color-fill-default)}.input-number-root .input-number input:hover{border-color:var(--s-color-border-default-hover)}.input-number-root .input-number input:focus-visible{outline:none}.input-number-root .input-number input::placeholder{text-align:center;color:var(--s-color-content-placeholder);font:var(--s-typography-paragraph-regular)}.input-number-root .input-number .input.error{background-color:var(--s-color-fill-warning-light);border:var(--s-border-width-hairline) solid var(--s-color-border-warning);color:var(--s-color-content-warning)}.input-number-root .textError{color:var(--s-color-content-warning);font:var(--s-typography-caption-regular)}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/InputNumber/InputNumber.scss",
            ],
            names: [],
            mappings:
              "AAAA,mBACE,qBAAA,CACA,UAAA,CACA,YAAA,CACA,qBAAA,CACA,yBAAA,CACA,kBAAA,CAEA,uCACE,qCAAA,CACA,oCAAA,CAGF,iCACE,2CAAA,CACA,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,UAAA,CACA,oCAAA,CACA,6CAAA,CAEA,oDACE,gBAAA,CAGF,kDACE,gBAAA,CAGF,6CACE,0DAAA,CAGF,0CACE,0CAAA,CACA,4CAAA,CACA,WAAA,CACA,gDACE,4CAAA,CAEA,sDACE,0CAAA,CAIJ,uDACE,8BAAA,CAGF,wDACE,YAAA,CAIJ,8CACE,wCAAA,CACA,6CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,sCACE,YAAA,CACA,sBAAA,CACA,WAAA,CACA,UAAA,CACA,qBAAA,CACA,6EAAA,CAEA,SAAA,CAEA,6CACE,wCAAA,CACA,6CAAA,CACA,mBAAA,CACA,mBAAA,CAGF,4CACE,oDAAA,CAIJ,2CACE,YAAA,CACA,sBAAA,CACA,WAAA,CACA,UAAA,CACA,qBAAA,CACA,cAAA,CACA,SAAA,CACA,6EAAA,CAGA,kDACE,wCAAA,CACA,6CAAA,CACA,mBAAA,CACA,mBAAA,CAGF,iDACE,oDAAA,CAIJ,wCACE,YAAA,CACA,kBAAA,CACA,iCAAA,CACA,QAAA,CACA,4CAAA,CACA,cAAA,CACA,oCAAA,CACA,yEAAA,CAEA,8CACE,kDAAA,CAGF,sDACE,YAAA,CAGF,iDACE,4CAAA,CACA,oCAAA,CACA,WAAA,CAEA,uDACE,0CAAA,CAKN,+EACE,uBAAA,CAGF,oDACE,yBAAA,CACA,oBAAA,CAGF,uCACE,WAAA,CACA,qBAAA,CACA,iBAAA,CACA,oCAAA,CACA,0CAAA,CACA,UAAA,CACA,iCAAA,CACA,8CAAA,CACA,iBAAA,CACA,4CAAA,CAEA,6CACE,gDAAA,CAGF,qDACE,YAAA,CAGF,oDACE,iBAAA,CACA,wCAAA,CACA,0CAAA,CAIJ,8CACE,kDAAA,CACA,yEAAA,CACA,oCAAA,CAIJ,8BACE,oCAAA,CACA,wCAAA",
            sourcesContent: [
              '.input-number-root {\n  box-sizing: border-box;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: var(--s-spacing-nano);\n  height: min-content;\n\n  .input-number-label {\n    font: var(--s-typography-label-medium);\n    color: var(--s-color-content-default);\n  }\n\n  .input-number {\n    border-radius: var(--s-border-radius-medium);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    color: var(--s-color-content-default);\n    box-shadow: 0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n\n    button:hover + input {\n      border-left: none;\n    }\n\n    input:hover + .add {\n      border-left: none;\n    }\n\n    input:hover {\n      border-right: 1px solid var(--s-color-border-default-hover);\n    }\n\n    &.disabled {\n      border-color: var(--s-color-border-default);\n      background-color: var(--s-color-fill-disable);\n      opacity: 0.64;\n      input {\n        background-color: var(--s-color-fill-disable);\n\n        &:hover {\n          border-color: var(--s-color-border-default);\n        }\n      }\n\n      button:hover {\n        background-color: transparent;\n      }\n\n      button:active {\n        outline: none;\n      }\n    }\n\n    &:focus-within {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-border-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    .add {\n      display: flex;\n      justify-content: center;\n      height: 40px;\n      width: 40px;\n      box-sizing: border-box;\n      border-radius: 0 var(--s-border-radius-medium)\n        var(--s-border-radius-medium) 0;\n      z-index: 2;\n\n      &:active {\n        outline-width: var(--s-border-width-thin);\n        outline-color: var(--s-color-border-highlight);\n        outline-offset: -1px;\n        outline-style: solid;\n      }\n\n      &:hover {\n        border: 1px solid var(--s-color-border-default-hover);\n      }\n    }\n\n    .subtract {\n      display: flex;\n      justify-content: center;\n      height: 40px;\n      width: 40px;\n      box-sizing: border-box;\n      border-right: 0;\n      z-index: 2;\n      border-radius: var(--s-border-radius-medium) 0 0\n        var(--s-border-radius-medium);\n\n      &:active {\n        outline-width: var(--s-border-width-thin);\n        outline-color: var(--s-color-border-highlight);\n        outline-offset: -1px;\n        outline-style: solid;\n      }\n\n      &:hover {\n        border: 1px solid var(--s-color-border-default-hover);\n      }\n    }\n\n    button {\n      display: flex;\n      align-items: center;\n      padding: var(--s-spacing-xx-small);\n      margin: 0;\n      background-color: var(--s-color-fill-default);\n      cursor: pointer;\n      color: var(--s-color-content-default);\n      border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n\n      &:hover {\n        background-color: var(--s-color-fill-default-hover);\n      }\n\n      &:focus-visible {\n        outline: none;\n      }\n\n      &:disabled {\n        background-color: var(--s-color-fill-disable);\n        color: var(--s-color-content-disable);\n        cursor: auto;\n\n        &:hover {\n          border-color: var(--s-color-border-default);\n        }\n      }\n    }\n\n    input[type="number"]::-webkit-inner-spin-button {\n      -webkit-appearance: none;\n    }\n\n    input[type="number"] {\n      -moz-appearance: textfield;\n      appearance: textfield;\n    }\n\n    input {\n      height: 40px;\n      box-sizing: border-box;\n      text-align: center;\n      color: var(--s-color-content-default);\n      font: var(--s-typography-paragraph-regular);\n      width: 100%;\n      padding: var(--s-spacing-xx-small);\n      border: 1px solid var(--s-color-border-default);\n      border-right: none;\n      background-color: var(--s-color-fill-default);\n\n      &:hover {\n        border-color: var(--s-color-border-default-hover);\n      }\n\n      &:focus-visible {\n        outline: none;\n      }\n\n      &::placeholder {\n        text-align: center;\n        color: var(--s-color-content-placeholder);\n        font: var(--s-typography-paragraph-regular);\n      }\n    }\n\n    .input.error {\n      background-color: var(--s-color-fill-warning-light);\n      border: var(--s-border-width-hairline) solid var(--s-color-border-warning);\n      color: var(--s-color-content-warning);\n    }\n  }\n\n  .textError {\n    color: var(--s-color-content-warning);\n    font: var(--s-typography-caption-regular);\n  }\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
