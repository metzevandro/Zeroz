"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [7661],
  {
    "./src/stories/Input.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Disabled: () => Disabled,
          Error: () => Error,
          ReadOnly: () => ReadOnly,
          WithIcon: () => WithIcon,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        _components_Input_Input__WEBPACK_IMPORTED_MODULE_2__ =
          (__webpack_require__("./src/styles.scss"),
          __webpack_require__("./src/components/Input/Input.tsx")),
        _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist/index.mjs",
        );
      __webpack_require__("./node_modules/next/dist/compiled/react/index.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Components/Input",
          component: _components_Input_Input__WEBPACK_IMPORTED_MODULE_2__.A,
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
                              { children: "Input" },
                            ),
                            " is a space where users can type and enter short pieces of information, such as names, addresses, or other brief text.",
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
              description: "Label for the input field.",
              control: { type: "text" },
              table: { category: "Appearance" },
            },
            placeholder: {
              description: "Placeholder text for the input field.",
              control: { type: "text" },
              table: { category: "Appearance" },
            },
            typeIcon: {
              description: "Icon type to be displayed in the input field.",
              control: { type: "text" },
              table: { category: "Appearance" },
            },
            fillIcon: {
              description: "Fills the input field icon.",
              control: { type: "boolean" },
              table: { category: "Appearance" },
            },
            value: {
              description: "Value of the input field.",
              control: { type: "text" },
              table: { category: "Behavior" },
            },
            onChange: {
              description: "Function called when the input value changes.",
              table: { category: "Behavior" },
            },
            disabled: {
              description: "Disables the input field.",
              control: { type: "boolean" },
              table: { category: "State" },
            },
            readOnly: {
              description: "Makes the input field read-only.",
              control: { type: "boolean" },
              table: { category: "State" },
            },
            error: {
              description: "Indicates if there is an error.",
              control: { type: "boolean" },
              table: { category: "State" },
            },
            textError: {
              description: "Error message text.",
              control: { type: "text" },
              table: { category: "State" },
            },
          },
        },
        Template = (args) =>
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _components_Input_Input__WEBPACK_IMPORTED_MODULE_2__.A,
            {
              value: args.value,
              label: args.label,
              placeholder: args.placeholder,
              disabled: args.disabled,
              typeIcon: args.typeIcon,
              error: args.error,
              textError: args.textError,
              readOnly: args.readOnly,
              fillIcon: args.fillIcon,
            },
          ),
        Default = Template.bind({});
      Default.args = {
        label: "Label",
        placeholder: "Placeholder",
        typeIcon: "settings",
        fillIcon: !0,
        disabled: !1,
        error: !1,
        textError: "Error",
        readOnly: !1,
      };
      const WithIcon = Template.bind({});
      WithIcon.args = {
        label: "Label",
        placeholder: "Placeholder",
        typeIcon: "settings",
        fillIcon: !0,
        disabled: !1,
        error: !1,
        textError: "",
        readOnly: !1,
      };
      const ReadOnly = Template.bind({});
      ReadOnly.args = {
        label: "Label",
        placeholder: "Placeholder",
        typeIcon: "",
        fillIcon: !1,
        disabled: !1,
        error: !1,
        textError: "",
        readOnly: !0,
        value: "This is read only, you can't type more.",
      };
      const Disabled = Template.bind({});
      Disabled.args = {
        label: "Label",
        placeholder: "Placeholder",
        typeIcon: "",
        fillIcon: !1,
        disabled: !0,
        error: !1,
        textError: "",
        readOnly: !1,
      };
      const Error = Template.bind({});
      Error.args = {
        label: "Label",
        placeholder: "Placeholder",
        typeIcon: "",
        fillIcon: !1,
        disabled: !1,
        error: !0,
        textError: "Error",
        readOnly: !1,
      };
      const __namedExportsOrder = [
        "Default",
        "WithIcon",
        "ReadOnly",
        "Disabled",
        "Error",
      ];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "args => {\n  return <Input value={args.value} label={args.label} placeholder={args.placeholder} disabled={args.disabled} typeIcon={args.typeIcon} error={args.error} textError={args.textError} readOnly={args.readOnly} fillIcon={args.fillIcon} />;\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (WithIcon.parameters = {
          ...WithIcon.parameters,
          docs: {
            ...WithIcon.parameters?.docs,
            source: {
              originalSource:
                "args => {\n  return <Input value={args.value} label={args.label} placeholder={args.placeholder} disabled={args.disabled} typeIcon={args.typeIcon} error={args.error} textError={args.textError} readOnly={args.readOnly} fillIcon={args.fillIcon} />;\n}",
              ...WithIcon.parameters?.docs?.source,
            },
          },
        }),
        (ReadOnly.parameters = {
          ...ReadOnly.parameters,
          docs: {
            ...ReadOnly.parameters?.docs,
            source: {
              originalSource:
                "args => {\n  return <Input value={args.value} label={args.label} placeholder={args.placeholder} disabled={args.disabled} typeIcon={args.typeIcon} error={args.error} textError={args.textError} readOnly={args.readOnly} fillIcon={args.fillIcon} />;\n}",
              ...ReadOnly.parameters?.docs?.source,
            },
          },
        }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource:
                "args => {\n  return <Input value={args.value} label={args.label} placeholder={args.placeholder} disabled={args.disabled} typeIcon={args.typeIcon} error={args.error} textError={args.textError} readOnly={args.readOnly} fillIcon={args.fillIcon} />;\n}",
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
                "args => {\n  return <Input value={args.value} label={args.label} placeholder={args.placeholder} disabled={args.disabled} typeIcon={args.typeIcon} error={args.error} textError={args.textError} readOnly={args.readOnly} fillIcon={args.fillIcon} />;\n}",
              ...Error.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/Icon/Icon.tsx": (
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
          "./node_modules/@storybook/nextjs/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag,
        ),
        styleDomAPI = __webpack_require__(
          "./node_modules/@storybook/nextjs/node_modules/style-loader/dist/runtime/styleDomAPI.js",
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          "./node_modules/@storybook/nextjs/node_modules/style-loader/dist/runtime/insertBySelector.js",
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          "./node_modules/@storybook/nextjs/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js",
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes,
        ),
        insertStyleElement = __webpack_require__(
          "./node_modules/@storybook/nextjs/node_modules/style-loader/dist/runtime/insertStyleElement.js",
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          "./node_modules/@storybook/nextjs/node_modules/style-loader/dist/runtime/styleTagTransform.js",
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        Icon = __webpack_require__(
          "./node_modules/@storybook/nextjs/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/Icon/Icon.scss",
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
            (STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"] = {
              docgenInfo: Icon_Icon_Icon.__docgenInfo,
              name: "Icon",
              path: "src/components/Icon/Icon.tsx#Icon",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/components/Input/Input.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_Input_Input,
      });
      var jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        react = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        ),
        injectStylesIntoStyleTag = __webpack_require__(
          "./node_modules/@storybook/nextjs/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag,
        ),
        styleDomAPI = __webpack_require__(
          "./node_modules/@storybook/nextjs/node_modules/style-loader/dist/runtime/styleDomAPI.js",
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          "./node_modules/@storybook/nextjs/node_modules/style-loader/dist/runtime/insertBySelector.js",
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          "./node_modules/@storybook/nextjs/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js",
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes,
        ),
        insertStyleElement = __webpack_require__(
          "./node_modules/@storybook/nextjs/node_modules/style-loader/dist/runtime/insertStyleElement.js",
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          "./node_modules/@storybook/nextjs/node_modules/style-loader/dist/runtime/styleTagTransform.js",
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        Input = __webpack_require__(
          "./node_modules/@storybook/nextjs/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/Input/Input.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Input.A, options);
      Input.A && Input.A.locals && Input.A.locals;
      var Icon = __webpack_require__("./src/components/Icon/Icon.tsx");
      const Input_Input_Input = ({
          typeIcon,
          fillIcon,
          label,
          error,
          disabled,
          textError,
          value,
          ...rest
        }) => {
          const inputRef = (0, react.useRef)(null);
          return (0, jsx_runtime.jsxs)("div", {
            className: "input-root",
            children: [
              label &&
                (0, jsx_runtime.jsx)("div", {
                  className: "input-header",
                  children: (0, jsx_runtime.jsx)("label", { children: label }),
                }),
              (0, jsx_runtime.jsxs)("div", {
                children: [
                  (0, jsx_runtime.jsxs)("div", {
                    className: `input-content ${disabled ? "disabled" : ""} ${error ? "error" : ""}`,
                    onClick: () => {
                      inputRef.current && inputRef.current.focus();
                    },
                    children: [
                      (0, jsx_runtime.jsx)("input", {
                        size: 0,
                        ...rest,
                        value,
                        disabled,
                        ref: inputRef,
                      }),
                      (0, jsx_runtime.jsx)(Icon.A, {
                        icon: typeIcon,
                        size: "md",
                        fill: fillIcon,
                      }),
                    ],
                  }),
                  error &&
                    (0, jsx_runtime.jsx)("div", {
                      className: "input-error",
                      children: textError,
                    }),
                ],
              }),
            ],
          });
        },
        components_Input_Input = Input_Input_Input;
      try {
        (Input_Input_Input.displayName = "Input"),
          (Input_Input_Input.__docgenInfo = {
            description: "",
            displayName: "Input",
            props: {
              typeIcon: {
                defaultValue: null,
                description: "",
                name: "typeIcon",
                required: !1,
                type: { name: "string" },
              },
              fillIcon: {
                defaultValue: null,
                description: "",
                name: "fillIcon",
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
              disabled: {
                defaultValue: null,
                description: "",
                name: "disabled",
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
            (STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#Input"] = {
              docgenInfo: Input_Input_Input.__docgenInfo,
              name: "Input",
              path: "src/components/Input/Input.tsx#Input",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./node_modules/@storybook/nextjs/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/Icon/Icon.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_storybook_nextjs_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              "./node_modules/@storybook/nextjs/node_modules/css-loader/dist/runtime/sourceMaps.js",
            ),
          _node_modules_storybook_nextjs_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_storybook_nextjs_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
            ),
          _node_modules_storybook_nextjs_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              "./node_modules/@storybook/nextjs/node_modules/css-loader/dist/runtime/api.js",
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_storybook_nextjs_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          )()(
            _node_modules_storybook_nextjs_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '@import"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";.material-symbols-outlined{font-weight:300;display:flex;user-select:none}.material-symbols-outlined.sm{font-size:16px}.material-symbols-outlined.md{font-size:24px}.material-symbols-outlined.lg{font-size:32px}',
          "",
          {
            version: 3,
            sources: ["webpack://./src/components/Icon/Icon.scss"],
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
    "./node_modules/@storybook/nextjs/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/Input/Input.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_storybook_nextjs_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              "./node_modules/@storybook/nextjs/node_modules/css-loader/dist/runtime/sourceMaps.js",
            ),
          _node_modules_storybook_nextjs_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_storybook_nextjs_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
            ),
          _node_modules_storybook_nextjs_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              "./node_modules/@storybook/nextjs/node_modules/css-loader/dist/runtime/api.js",
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_storybook_nextjs_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          )()(
            _node_modules_storybook_nextjs_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".input-root{display:flex;flex-direction:column;gap:var(--s-spacing-nano)}.input-root .input-header{font:var(--s-typography-label-medium);color:var(--s-color-content-default)}.input-root .input-content{height:40px;box-sizing:border-box;cursor:text;display:flex;justify-content:space-between;align-items:center;padding:var(--s-spacing-xx-small) var(--s-spacing-x-small);border-radius:var(--s-border-radius-medium);border:var(--s-border-width-hairline) solid var(--s-color-border-default);background-color:var(--s-color-fill-default);color:var(--s-color-content-placeholder);box-shadow:0px 1px 2px 0px rgba(14,21,36,.06)}.input-root .input-content.has-value{color:var(--s-color-content-default)}.input-root .input-content:hover{border-color:var(--s-color-border-default-hover)}.input-root .input-content:focus-within{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.input-root .input-content:read-only{cursor:auto}.input-root .input-content.error{color:var(--s-color-content-warning);background-color:var(--s-color-fill-warning-light);border-color:var(--s-color-border-warning)}.input-root .input-content.error input::placeholder{color:var(--s-color-content-warning)}.input-root .input-content.error:hover{background-color:var(--s-color-fill-warning-light)}.input-root .input-content.error:focus-within{outline:none}.input-root .input-content input{width:100%;background-color:rgba(0,0,0,0);border:none;margin:0;padding:0;color:var(--s-color-content-default);font:var(--s-typography-paragraph-regular)}.input-root .input-content input:focus{outline:none}.input-root .input-content input::placeholder{color:var(--s-color-content-placeholder)}.input-root .input-content input:disabled{color:var(--s-color-content-disable)}.input-root .input-content .material-symbols-outlined.md{font-size:20px}.input-root .input-content.disabled{color:var(--s-color-content-disable);background-color:var(--s-color-fill-disable);cursor:auto;opacity:.64}.input-root .input-content.disabled input::placeholder{color:var(--s-color-content-disable)}.input-root .input-content.disabled:hover{background-color:var(--s-color-fill-disable);border-color:var(--s-color-border-default)}.input-root .input-content.disabled:focus-within{outline:none}.input-root .input-error{color:var(--s-color-content-warning);font:var(--s-typography-caption-regular)}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/components/Input/Input.scss"],
            names: [],
            mappings:
              "AAAA,YACE,YAAA,CACA,qBAAA,CACA,yBAAA,CAEA,0BACE,qCAAA,CACA,oCAAA,CAGF,2BACE,WAAA,CACA,qBAAA,CACA,WAAA,CACA,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,0DAAA,CACA,2CAAA,CACA,yEAAA,CACA,4CAAA,CACA,wCAAA,CACA,6CAAA,CAEA,qCACE,oCAAA,CAGF,iCACE,gDAAA,CAGF,wCACE,wCAAA,CACA,6CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,qCACE,WAAA,CAGF,iCACE,oCAAA,CACA,kDAAA,CACA,0CAAA,CAGE,oDACE,oCAAA,CAIJ,uCACE,kDAAA,CAGF,8CACE,YAAA,CAIJ,iCACE,UAAA,CACA,8BAAA,CACA,WAAA,CACA,QAAA,CACA,SAAA,CACA,oCAAA,CACA,0CAAA,CAEA,uCACE,YAAA,CAGF,8CACE,wCAAA,CAGF,0CACE,oCAAA,CAIJ,yDACE,cAAA,CAGF,oCACE,oCAAA,CACA,4CAAA,CACA,WAAA,CACA,WAAA,CAEE,uDACE,oCAAA,CAIJ,0CACE,4CAAA,CACA,0CAAA,CAGF,iDACE,YAAA,CAKN,yBACE,oCAAA,CACA,wCAAA",
            sourcesContent: [
              ".input-root {\n  display: flex;\n  flex-direction: column;\n  gap: var(--s-spacing-nano);\n\n  .input-header {\n    font: var(--s-typography-label-medium);\n    color: var(--s-color-content-default);\n  }\n\n  .input-content {\n    height: 40px;\n    box-sizing: border-box;\n    cursor: text;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: var(--s-spacing-xx-small) var(--s-spacing-x-small);\n    border-radius: var(--s-border-radius-medium);\n    border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n    background-color: var(--s-color-fill-default);\n    color: var(--s-color-content-placeholder);\n    box-shadow: 0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n\n    &.has-value {\n      color: var(--s-color-content-default);\n    }\n\n    &:hover {\n      border-color: var(--s-color-border-default-hover);\n    }\n\n    &:focus-within {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-border-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    &:read-only {\n      cursor: auto;\n    }\n\n    &.error {\n      color: var(--s-color-content-warning);\n      background-color: var(--s-color-fill-warning-light);\n      border-color: var(--s-color-border-warning);\n\n      input {\n        &::placeholder {\n          color: var(--s-color-content-warning);\n        }\n      }\n\n      &:hover {\n        background-color: var(--s-color-fill-warning-light);\n      }\n\n      &:focus-within {\n        outline: none;\n      }\n    }\n\n    input {\n      width: 100%;\n      background-color: transparent;\n      border: none;\n      margin: 0;\n      padding: 0;\n      color: var(--s-color-content-default);\n      font: var(--s-typography-paragraph-regular);\n\n      &:focus {\n        outline: none;\n      }\n\n      &::placeholder {\n        color: var(--s-color-content-placeholder);\n      }\n\n      &:disabled {\n        color: var(--s-color-content-disable);\n      }\n    }\n\n    .material-symbols-outlined.md {\n      font-size: 20px;\n    }\n\n    &.disabled {\n      color: var(--s-color-content-disable);\n      background-color: var(--s-color-fill-disable);\n      cursor: auto;\n      opacity: 0.64;\n      input {\n        &::placeholder {\n          color: var(--s-color-content-disable);\n        }\n      }\n\n      &:hover {\n        background-color: var(--s-color-fill-disable);\n        border-color: var(--s-color-border-default);\n      }\n\n      &:focus-within {\n        outline: none;\n      }\n    }\n  }\n\n  .input-error {\n    color: var(--s-color-content-warning);\n    font: var(--s-typography-caption-regular);\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
