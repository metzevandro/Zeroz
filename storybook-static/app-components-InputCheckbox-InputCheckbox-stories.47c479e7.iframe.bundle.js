"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [5121],
  {
    "./src/app/components/InputCheckbox/InputCheckbox.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Disabled: () => Disabled,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Default_parameters,
        _Default_parameters_docs,
        _Default_parameters1,
        _Disabled_parameters,
        _Disabled_parameters_docs,
        _Disabled_parameters1,
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        ),
        _InputCheckbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./src/app/components/InputCheckbox/InputCheckbox.tsx",
        );
      __webpack_require__("./src/app/styles.scss");
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Components/Input Checkbox",
          component: _InputCheckbox__WEBPACK_IMPORTED_MODULE_2__.A,
          parameters: { layout: "centered" },
          tags: ["autodocs"],
        },
        Default = ((props) => {
          const [isChecked, setChecked] = (0,
          react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
            {
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _InputCheckbox__WEBPACK_IMPORTED_MODULE_2__.A,
                {
                  onChange: () => {
                    setChecked((prevChecked) => !prevChecked);
                  },
                  checked: isChecked,
                  label: props.label,
                  disabled: props.disabled,
                  indeterminate: props.indeterminate,
                },
              ),
            },
          );
        }).bind({});
      Default.args = { label: "Label", disabled: !1, indeterminate: !1 };
      const Disabled = ((props) => {
        const [isChecked, setChecked] = (0,
        react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
          {
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _InputCheckbox__WEBPACK_IMPORTED_MODULE_2__.A,
              {
                onChange: () => {
                  setChecked((prevChecked) => !prevChecked);
                },
                checked: isChecked,
                label: props.label,
                disabled: props.disabled,
              },
            ),
          },
        );
      }).bind({});
      (Disabled.args = { label: "Label", disabled: !0 }),
        (Default.parameters = {
          ...Default.parameters,
          docs: {
            ...(null === (_Default_parameters = Default.parameters) ||
            void 0 === _Default_parameters
              ? void 0
              : _Default_parameters.docs),
            source: {
              originalSource:
                "props => {\n  const [isChecked, setChecked] = useState(false);\n  const handleInputCheckboxChange = () => {\n    setChecked(prevChecked => !prevChecked);\n  };\n  return <>\r\n      <InputCheckbox onChange={handleInputCheckboxChange} checked={isChecked} label={props.label} disabled={props.disabled} indeterminate={props.indeterminate} />\r\n    </>;\n}",
              ...(null === (_Default_parameters1 = Default.parameters) ||
              void 0 === _Default_parameters1 ||
              null === (_Default_parameters_docs = _Default_parameters1.docs) ||
              void 0 === _Default_parameters_docs
                ? void 0
                : _Default_parameters_docs.source),
            },
          },
        }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...(null === (_Disabled_parameters = Disabled.parameters) ||
            void 0 === _Disabled_parameters
              ? void 0
              : _Disabled_parameters.docs),
            source: {
              originalSource:
                "props => {\n  const [isChecked, setChecked] = useState(false);\n  const handleInputCheckboxChange = () => {\n    setChecked(prevChecked => !prevChecked);\n  };\n  return <>\r\n      <InputCheckbox onChange={handleInputCheckboxChange} checked={isChecked} label={props.label} disabled={props.disabled} />\r\n    </>;\n}",
              ...(null === (_Disabled_parameters1 = Disabled.parameters) ||
              void 0 === _Disabled_parameters1 ||
              null ===
                (_Disabled_parameters_docs = _Disabled_parameters1.docs) ||
              void 0 === _Disabled_parameters_docs
                ? void 0
                : _Disabled_parameters_docs.source),
            },
          },
        });
      const __namedExportsOrder = ["Default", "Disabled"];
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
    "./src/app/components/InputCheckbox/InputCheckbox.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_InputCheckbox_InputCheckbox,
      });
      var jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        Icon =
          (__webpack_require__(
            "./node_modules/next/dist/compiled/react/index.js",
          ),
          __webpack_require__("./src/app/components/Icon/Icon.tsx")),
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
        InputCheckbox = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputCheckbox/InputCheckbox.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(InputCheckbox.A, options);
      InputCheckbox.A && InputCheckbox.A.locals && InputCheckbox.A.locals;
      function InputCheckbox_InputCheckbox_InputCheckbox(props) {
        const { checked, onChange, disabled, indeterminate, label } = props;
        return (0, jsx_runtime.jsxs)("div", {
          onClick: () => {
            disabled || onChange(!checked);
          },
          className: "check-box-root ".concat(disabled && "disabled"),
          children: [
            (0, jsx_runtime.jsx)("button", {
              className: "InputCheckbox "
                .concat(checked ? "checked" : "", " ")
                .concat(disabled ? "disabled" : ""),
              tabIndex: 0,
              role: "InputCheckbox",
              "aria-checked": checked,
              disabled,
              children: indeterminate
                ? (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
                    children: (0, jsx_runtime.jsx)("span", {
                      className: "indeterminate",
                      children: (0, jsx_runtime.jsx)(Icon.A, {
                        size: "md",
                        icon: "indeterminate_check_box",
                        fill: !0,
                      }),
                    }),
                  })
                : (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
                    children: checked
                      ? (0, jsx_runtime.jsx)("span", {
                          className: "checked",
                          children: (0, jsx_runtime.jsx)(Icon.A, {
                            size: "md",
                            icon: "check_box",
                            fill: !0,
                          }),
                        })
                      : (0, jsx_runtime.jsx)("span", {
                          className: "unchecked",
                          children: (0, jsx_runtime.jsx)(Icon.A, {
                            size: "md",
                            icon: "check_box_outline_blank",
                          }),
                        }),
                  }),
            }),
            label &&
              (0, jsx_runtime.jsx)("label", {
                className: "check-box-label ".concat(disabled && "disabled"),
                children: props.label,
              }),
          ],
        });
      }
      const components_InputCheckbox_InputCheckbox =
        InputCheckbox_InputCheckbox_InputCheckbox;
      try {
        (InputCheckbox_InputCheckbox_InputCheckbox.displayName =
          "InputCheckbox"),
          (InputCheckbox_InputCheckbox_InputCheckbox.__docgenInfo = {
            description: "",
            displayName: "InputCheckbox",
            props: {
              label: {
                defaultValue: null,
                description: "",
                name: "label",
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
              checked: {
                defaultValue: null,
                description: "",
                name: "checked",
                required: !0,
                type: { name: "boolean" },
              },
              onChange: {
                defaultValue: null,
                description: "",
                name: "onChange",
                required: !0,
                type: { name: "(checked: boolean) => void" },
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
              "src/app/components/InputCheckbox/InputCheckbox.tsx#InputCheckbox"
            ] = {
              docgenInfo:
                InputCheckbox_InputCheckbox_InputCheckbox.__docgenInfo,
              name: "InputCheckbox",
              path: "src/app/components/InputCheckbox/InputCheckbox.tsx#InputCheckbox",
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
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputCheckbox/InputCheckbox.scss":
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
          ".check-box-root{width:fit-content;height:fit-content;display:flex;user-select:none;cursor:pointer;gap:var(--s-spacing-xx-small)}.check-box-root.disabled{cursor:auto}.check-box-root span{width:24px;height:24px}.check-box-root .InputCheckbox{border:none;cursor:pointer;background-color:rgba(0,0,0,0);display:flex;align-items:center;justify-content:center;flex-direction:row;width:24px;height:24px;border-radius:var(--s-border-radius-small);align-items:center}.check-box-root .InputCheckbox:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-style:solid}.check-box-root .InputCheckbox.disabled{color:var(--s-color-content-disable)}.check-box-root .InputCheckbox.disabled:focus{outline:none}.check-box-root .InputCheckbox.disabled .unchecked{cursor:auto;color:var(--s-color-content-disable)}.check-box-root .InputCheckbox.disabled .unchecked:hover{color:var(--s-color-content-disable)}.check-box-root .InputCheckbox .unchecked{color:var(--s-color-content-default)}.check-box-root .InputCheckbox .unchecked:hover{color:var(--s-color-content-highlight)}.check-box-root .InputCheckbox .checked,.check-box-root .InputCheckbox .indeterminate{user-select:none;cursor:pointer;color:var(--s-color-content-highlight);background-color:rgba(0,0,0,0)}.check-box-root .check-box-label{font:var(--s-typography-label-medium);color:var(--s-color-content-default);cursor:pointer}.check-box-root .check-box-label.disabled{cursor:auto;color:var(--s-color-content-disable)}.check-box-root:hover .unchecked{color:var(--s-color-content-highlight)}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/InputCheckbox/InputCheckbox.scss",
            ],
            names: [],
            mappings:
              "AAAA,gBACE,iBAAA,CACA,kBAAA,CACA,YAAA,CACA,gBAAA,CACA,cAAA,CACA,6BAAA,CAEA,yBACE,WAAA,CAGF,qBACE,UAAA,CACA,WAAA,CAGF,+BACE,WAAA,CACA,cAAA,CACA,8BAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,kBAAA,CACA,UAAA,CACA,WAAA,CACA,0CAAA,CACA,kBAAA,CAEA,6CACE,wCAAA,CACA,6CAAA,CACA,mBAAA,CAGF,wCACE,oCAAA,CAEA,8CACE,YAAA,CAIJ,mDACE,WAAA,CACA,oCAAA,CAEA,yDACE,oCAAA,CAIJ,0CACE,oCAAA,CAGF,gDACE,sCAAA,CAGF,sFAEE,gBAAA,CACA,cAAA,CACA,sCAAA,CACA,8BAAA,CAIJ,iCACE,qCAAA,CACA,oCAAA,CACA,cAAA,CACA,0CACE,WAAA,CACA,oCAAA,CAKN,iCACE,sCAAA",
            sourcesContent: [
              ".check-box-root {\n  width: fit-content;\n  height: fit-content;\n  display: flex;\n  user-select: none;\n  cursor: pointer;\n  gap: var(--s-spacing-xx-small);\n\n  &.disabled {\n    cursor: auto;\n  }\n\n  span {\n    width: 24px;\n    height: 24px;\n  }\n\n  .InputCheckbox {\n    border: none;\n    cursor: pointer;\n    background-color: transparent;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: row;\n    width: 24px;\n    height: 24px;\n    border-radius: var(--s-border-radius-small);\n    align-items: center;\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-border-highlight);\n      outline-style: solid;\n    }\n\n    &.disabled {\n      color: var(--s-color-content-disable);\n\n      &:focus {\n        outline: none;\n      }\n    }\n\n    &.disabled .unchecked {\n      cursor: auto;\n      color: var(--s-color-content-disable);\n\n      &:hover {\n        color: var(--s-color-content-disable);\n      }\n    }\n\n    .unchecked {\n      color: var(--s-color-content-default);\n    }\n\n    .unchecked:hover {\n      color: var(--s-color-content-highlight);\n    }\n\n    .checked,\n    .indeterminate {\n      user-select: none;\n      cursor: pointer;\n      color: var(--s-color-content-highlight);\n      background-color: transparent;\n    }\n  }\n\n  .check-box-label {\n    font: var(--s-typography-label-medium);\n    color: var(--s-color-content-default);\n    cursor: pointer;\n    &.disabled {\n      cursor: auto;\n      color: var(--s-color-content-disable);\n    }\n  }\n}\n\n.check-box-root:hover .unchecked {\n  color: var(--s-color-content-highlight);\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
