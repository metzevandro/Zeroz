"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [2123],
  {
    "./src/app/components/Switch/Switch.stories.ts": (
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
          title: "Components/Switch",
          component: __webpack_require__(
            "./src/app/components/Switch/Switch.tsx",
          ).A,
          parameters: { layout: "centered" },
          tags: ["autodocs"],
        },
        Default = { args: { label: "Label", disabled: !1 } };
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...(null === (_Default_parameters = Default.parameters) ||
          void 0 === _Default_parameters
            ? void 0
            : _Default_parameters.docs),
          source: {
            originalSource:
              '{\n  args: {\n    label: "Label",\n    disabled: false\n  }\n}',
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
    "./src/app/components/Switch/Switch.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_Switch_Switch,
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
        Switch = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Switch/Switch.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Switch.A, options);
      Switch.A && Switch.A.locals && Switch.A.locals;
      const Switch_Switch_Switch = (param) => {
          let { label, disabled, checked: controlledChecked, onChange } = param;
          const [isChecked, setIsChecked] = (0, react.useState)(
            controlledChecked || !1,
          );
          (0, react.useEffect)(() => {
            void 0 !== controlledChecked && setIsChecked(controlledChecked);
          }, [controlledChecked]);
          const isDisabled = disabled,
            toggleCheckbox = () => {
              if (!0 !== isDisabled) {
                const newValue = !isChecked;
                setIsChecked(newValue), onChange && onChange(newValue);
              }
            };
          return (0, jsx_runtime.jsxs)("div", {
            className: "switch-root",
            children: [
              (0, jsx_runtime.jsx)("div", {
                className: "switch "
                  .concat(isChecked ? "checked" : "", " ")
                  .concat(disabled ? "disabled" : ""),
                onClick: toggleCheckbox,
                tabIndex: 0,
                onKeyDown: (e) => {
                  "Enter" === e.key && toggleCheckbox();
                },
                role: "checkbox",
                "aria-checked": isChecked,
                children: isChecked
                  ? (0, jsx_runtime.jsx)("span", {
                      className: "checked",
                      children: (0, jsx_runtime.jsx)(Icon.A, {
                        size: "md",
                        icon: "toggle_on",
                      }),
                    })
                  : (0, jsx_runtime.jsx)("span", {
                      className: "unchecked",
                      children: (0, jsx_runtime.jsx)(Icon.A, {
                        size: "md",
                        icon: "toggle_off",
                      }),
                    }),
              }),
              (0, jsx_runtime.jsx)("label", {
                className: "label ".concat(disabled && "disabled"),
                onClick: toggleCheckbox,
                children: label,
              }),
            ],
          });
        },
        components_Switch_Switch = Switch_Switch_Switch;
      try {
        (Switch_Switch_Switch.displayName = "Switch"),
          (Switch_Switch_Switch.__docgenInfo = {
            description: "",
            displayName: "Switch",
            props: {
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
              checked: {
                defaultValue: null,
                description: "",
                name: "checked",
                required: !1,
                type: { name: "boolean" },
              },
              onChange: {
                defaultValue: null,
                description: "",
                name: "onChange",
                required: !1,
                type: { name: "((value: boolean) => void)" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Switch/Switch.tsx#Switch"
            ] = {
              docgenInfo: Switch_Switch_Switch.__docgenInfo,
              name: "Switch",
              path: "src/app/components/Switch/Switch.tsx#Switch",
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
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Switch/Switch.scss":
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
          ".switch-root{display:flex;align-items:center}.switch-root .switch{display:flex;align-items:center;justify-content:center;flex-direction:row;width:22px;height:22px;border-radius:var(--s-border-radius-small);color:var(--s-color-content-default);user-select:none;cursor:pointer}.switch-root .switch:hover{color:var(--s-color-content-highlight)}.switch-root .switch:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-style:solid}.switch-root .switch.checked{color:var(--s-color-content-highlight);background-color:rgba(0,0,0,0);transition:all .3s ease}.switch-root .switch.checked:hover{color:var(--s-color-content-highlight)}.switch-root .switch.unchecked{transition:all .3s ease}.switch-root .label{padding-left:var(--s-spacing-xx-small);font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default);cursor:pointer;user-select:none}.switch-root .label.disabled{cursor:not-allowed}.switch-root .disabled{color:var(--s-color-content-disable);cursor:not-allowed}.switch-root .disabled .checked,.switch-root .disabled .unchecked,.switch-root .disabled:hover{color:var(--s-color-content-disable)}.switch-root .disabled:focus-visible{outline-width:none;outline-color:none;outline-style:none}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Switch/Switch.scss"],
            names: [],
            mappings:
              "AAAA,aACE,YAAA,CACA,kBAAA,CAEA,qBACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,kBAAA,CACA,UAAA,CACA,WAAA,CACA,0CAAA,CACA,oCAAA,CACA,gBAAA,CACA,cAAA,CAEA,2BACE,sCAAA,CAGF,mCACE,wCAAA,CACA,2CAAA,CACA,mBAAA,CAGF,6BACE,sCAAA,CACA,8BAAA,CACA,uBAAA,CAEA,mCACE,sCAAA,CAGJ,+BACE,uBAAA,CAIJ,oBACE,sCAAA,CACA,0CAAA,CACA,oCAAA,CACA,cAAA,CACA,gBAAA,CAEA,6BACE,kBAAA,CAIJ,uBACE,oCAAA,CACA,kBAAA,CAEA,+FAGE,oCAAA,CAGF,qCACE,kBAAA,CACA,kBAAA,CACA,kBAAA",
            sourcesContent: [
              ".switch-root {\n  display: flex;\n  align-items: center;\n\n  .switch {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: row;\n    width: 22px;\n    height: 22px;\n    border-radius: var(--s-border-radius-small);\n    color: var(--s-color-content-default);\n    user-select: none;\n    cursor: pointer;\n\n    &:hover {\n      color: var(--s-color-content-highlight);\n    }\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-style: solid;\n    }\n\n    &.checked {\n      color: var(--s-color-content-highlight);\n      background-color: transparent;\n      transition: all 0.3s ease;\n\n      &:hover {\n        color: var(--s-color-content-highlight);\n      }\n    }\n    &.unchecked {\n      transition: all 0.3s ease;\n    }\n  }\n\n  .label {\n    padding-left: var(--s-spacing-xx-small);\n    font: var(--s-typography-paragraph-regular);\n    color: var(--s-color-content-default);\n    cursor: pointer;\n    user-select: none;\n\n    &.disabled {\n      cursor: not-allowed;\n    }\n  }\n\n  .disabled {\n    color: var(--s-color-content-disable);\n    cursor: not-allowed;\n\n    .checked,\n    .unchecked,\n    &:hover {\n      color: var(--s-color-content-disable);\n    }\n\n    &:focus-visible {\n      outline-width: none;\n      outline-color: none;\n      outline-style: none;\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
