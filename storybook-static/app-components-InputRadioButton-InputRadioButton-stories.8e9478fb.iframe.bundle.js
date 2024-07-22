"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [641],
  {
    "./src/app/components/InputRadioButton/InputRadioButton.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_InputRadioButton_InputRadioButton,
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
        InputRadioButton = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputRadioButton/InputRadioButton.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(InputRadioButton.A, options);
      InputRadioButton.A &&
        InputRadioButton.A.locals &&
        InputRadioButton.A.locals;
      const InputRadioButton_InputRadioButton_InputRadioButton = ({
          disabled,
          label,
          onChange,
          checked: controlledChecked,
        }) => {
          const [isChecked, setIsChecked] = (0, react.useState)(
            controlledChecked || !1,
          );
          (0, react.useEffect)(() => {
            void 0 !== controlledChecked && setIsChecked(controlledChecked);
          }, [controlledChecked]);
          const toggleRadioButton = () => {
            if (!disabled) {
              const newValue = !isChecked;
              setIsChecked(newValue), onChange && onChange(newValue);
            }
          };
          return (0, jsx_runtime.jsxs)("div", {
            className: "radio-button-root  " + (disabled ? "disable" : ""),
            children: [
              (0, jsx_runtime.jsx)("div", {
                className: `radio-button ${disabled ? "disable" : ""} ${isChecked ? "checked" : ""}`,
                onClick: toggleRadioButton,
                onKeyDown: (e) => {
                  "Enter" === e.key && toggleRadioButton();
                },
                role: "radio",
                "aria-checked": isChecked,
                tabIndex: 0,
                children: (0, jsx_runtime.jsx)("span", {
                  className:
                    "radio-circle " + (isChecked ? "checked-circle" : ""),
                }),
              }),
              (0, jsx_runtime.jsx)("label", {
                onClick: toggleRadioButton,
                className: "radio-button-label " + (disabled ? "disabled" : ""),
                children: label,
              }),
            ],
          });
        },
        components_InputRadioButton_InputRadioButton =
          InputRadioButton_InputRadioButton_InputRadioButton;
      try {
        (InputRadioButton_InputRadioButton_InputRadioButton.displayName =
          "InputRadioButton"),
          (InputRadioButton_InputRadioButton_InputRadioButton.__docgenInfo = {
            description: "",
            displayName: "InputRadioButton",
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
              onChange: {
                defaultValue: null,
                description: "",
                name: "onChange",
                required: !1,
                type: { name: "((isChecked: boolean) => void)" },
              },
              checked: {
                defaultValue: null,
                description: "",
                name: "checked",
                required: !1,
                type: { name: "boolean" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/InputRadioButton/InputRadioButton.tsx#InputRadioButton"
            ] = {
              docgenInfo:
                InputRadioButton_InputRadioButton_InputRadioButton.__docgenInfo,
              name: "InputRadioButton",
              path: "src/app/components/InputRadioButton/InputRadioButton.tsx#InputRadioButton",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/InputRadioButton/InputRadioButton.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Checked: () => Checked,
          Default: () => Default,
          Disabled: () => Disabled,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        _InputRadioButton__WEBPACK_IMPORTED_MODULE_2__ =
          (__webpack_require__("./src/app/styles.scss"),
          __webpack_require__(
            "./src/app/components/InputRadioButton/InputRadioButton.tsx",
          )),
        _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./node_modules/@storybook/blocks/dist/index.mjs",
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Components/Input Radio Button",
          component: _InputRadioButton__WEBPACK_IMPORTED_MODULE_2__.A,
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
                              { children: "Radio Buttons" },
                            ),
                            " when you need to make a single selection from a list of options.",
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
            label: {
              control: "text",
              description: "The text label displayed next to the radio button.",
              table: { category: "Appearance" },
            },
            disabled: {
              control: "boolean",
              description:
                "If true, the radio button will be disabled and unselectable.",
              table: { category: "State" },
            },
            checked: {
              control: "boolean",
              description: "If true, the radio button will be checked.",
              table: { category: "State" },
            },
            onChange: {
              action: "onChange",
              description:
                "Callback function that is called when the radio button value changes.",
              table: { category: "Events" },
            },
          },
        },
        Default = { args: { label: "Label", disabled: !1, checked: !1 } },
        Disabled = { args: { label: "Label", disabled: !0, checked: !1 } },
        Checked = { args: { label: "Label", disabled: !1, checked: !0 } },
        __namedExportsOrder = ["Default", "Disabled", "Checked"];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    label: "Label",\n    disabled: false,\n    checked: false\n  }\n}',
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
                '{\n  args: {\n    label: "Label",\n    disabled: true,\n    checked: false\n  }\n}',
              ...Disabled.parameters?.docs?.source,
            },
          },
        }),
        (Checked.parameters = {
          ...Checked.parameters,
          docs: {
            ...Checked.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    label: "Label",\n    disabled: false,\n    checked: true\n  }\n}',
              ...Checked.parameters?.docs?.source,
            },
          },
        });
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputRadioButton/InputRadioButton.scss":
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
          '.radio-button-root{display:flex;align-items:center;gap:var(--s-spacing-xx-small)}.radio-button-root:hover .radio-button{box-shadow:0px -1px 0px 0px rgba(0,0,0,.2) inset,0px 0px 0px 2px var(--s-color-border-highlight) inset,0px -1px 2px 0px rgba(0,0,0,.24) inset,0px 1px .5px .5px rgba(255,255,255,.44) inset,0px 1px 2px 0px rgba(14,21,36,.06)}.radio-button-root:hover .radio-button::before{box-shadow:0px -1px 0px 0px rgba(0,0,0,.2) inset,0px 0px 0px 2px var(--s-color-border-highlight) inset,0px -1px 2px 0px rgba(0,0,0,.24) inset,0px 1px .5px .5px rgba(255,255,255,.44) inset,0px 1px 2px 0px rgba(14,21,36,.06)}.radio-button-root .radio-button{width:24px;height:24px;border-radius:var(--s-border-radius-large);position:relative;cursor:pointer;color:var(--s-color-content-default);user-select:none}.radio-button-root .radio-button.disable{border-color:var(--s-color-content-disable);cursor:auto;background-color:var(--s-color-fill-disable)}.radio-button-root .radio-button:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-style:solid;outline-offset:var(--s-border-width-thin)}.radio-button-root .radio-button::before{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);z-index:1;width:24px;height:24px;background-color:rgba(0,0,0,0);box-shadow:0px -1px 0px 0px rgba(0,0,0,.2) inset,0px 0px 0px 2px var(--s-color-border-default) inset,0px -1px 2px 0px rgba(0,0,0,.24) inset,0px 1px .5px .5px rgba(255,255,255,.44) inset,0px 1px 2px 0px rgba(14,21,36,.06);border-radius:var(--s-border-radius-pill)}.radio-button-root .radio-button:hover::before{box-shadow:0px -1px 0px 0px rgba(0,0,0,.2) inset,0px 0px 0px 2px var(--s-color-fill-highlight) inset,0px -1px 2px 0px rgba(0,0,0,.24) inset,0px 1px .5px .5px rgba(255,255,255,.44) inset,0px 1px 2px 0px rgba(14,21,36,.06)}.radio-button-root .radio-button.checked{background-color:var(--s-color-fill-highlight)}.radio-button-root .radio-button.checked .radio-circle{box-shadow:0px 1px 2px rgba(14,21,36,.06)}.radio-button-root .radio-button.checked::before{box-shadow:0px -1px 0px 0px rgba(0,0,0,.2) inset,0px 0px 0px 2px var(--s-color-fill-highlight) inset,0px -1px 2px 0px rgba(0,0,0,.24) inset,0px 1px .5px .5px rgba(255,255,255,.44) inset,0px 1px 2px 0px rgba(14,21,36,.06)}.radio-button-root .radio-button.checked{border-color:var(--s-color-fill-highlight);color:var(--s-color-content-highlight)}.radio-button-root .radio-button.disabled{color:var(--s-color-content-disable);cursor:auto}.radio-button-root .radio-button.disabled .checked,.radio-button-root .radio-button.disabled .unchecked{color:var(--s-color-content-disable)}.radio-button-root .radio-button .unchecked:hover{color:var(--s-color-content-highlight)}.radio-button-root .radio-button .checked{cursor:pointer;color:var(--s-color-content-highlight);background-color:rgba(0,0,0,0)}.radio-button-root.disable .radio-button{background-color:var(--s-color-fill-disable)}.radio-button-root.disable .radio-button.checked::before{box-shadow:0px -1px 0px 0px rgba(0,0,0,.2) inset,0px 0px 0px 2px var(--s-color-border-default) inset,0px -1px 2px 0px rgba(0,0,0,.24) inset,0px 1px .5px .5px rgba(255,255,255,.44) inset,0px 1px 2px 0px rgba(14,21,36,.06)}.radio-button-root.disable:hover .radio-button{box-shadow:0px -1px 0px 0px rgba(0,0,0,.2) inset,0px 0px 0px 2px var(--s-color-border-default) inset,0px -1px 2px 0px rgba(0,0,0,.24) inset,0px 1px .5px .5px rgba(255,255,255,.44) inset,0px 1px 2px 0px rgba(14,21,36,.06);cursor:auto}.radio-button-root.disable:hover .radio-button::before{box-shadow:0px -1px 0px 0px rgba(0,0,0,.2) inset,0px 0px 0px 2px var(--s-color-border-disable) inset,0px -1px 2px 0px rgba(0,0,0,.24) inset,0px 1px .5px .5px rgba(255,255,255,.44) inset,0px 1px 2px 0px rgba(14,21,36,.06)}.radio-button-root .radio-circle{position:absolute;top:50%;left:50%;width:12px;height:12px;border-radius:50%;transition:background-color .1s ease-in-out;transform:translate(-50%, -50%)}.radio-button-root .checked-circle{background-color:var(--s-color-fill-default)}.radio-button-root .radio-button-label{font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default);cursor:pointer;user-select:none}.radio-button-root .radio-button-label.disabled{color:var(--s-color-content-disable);cursor:auto}.radio-button-root .radio-button-root:hover .unchecked{color:var(--s-color-content-highlight)}',
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/InputRadioButton/InputRadioButton.scss",
            ],
            names: [],
            mappings:
              "AAAA,mBACE,YAAA,CACA,kBAAA,CACA,6BAAA,CAGE,uCACE,8NACE,CAMF,+CACE,8NACE,CASR,iCACE,UAAA,CACA,WAAA,CACA,0CAAA,CACA,iBAAA,CACA,cAAA,CACA,oCAAA,CACA,gBAAA,CAEA,yCACE,2CAAA,CACA,WAAA,CACA,4CAAA,CAGF,+CACE,wCAAA,CACA,6CAAA,CACA,mBAAA,CACA,yCAAA,CAGF,yCACE,UAAA,CACA,iBAAA,CACA,OAAA,CACA,QAAA,CACA,+BAAA,CACA,SAAA,CACA,UAAA,CACA,WAAA,CACA,8BAAA,CACA,4NACE,CAKF,yCAAA,CAGF,+CACE,4NACE,CAOJ,yCACE,8CAAA,CAEA,uDACE,yCAAA,CAGF,iDACE,4NACE,CAQN,yCACE,0CAAA,CACA,sCAAA,CAGF,0CACE,oCAAA,CACA,WAAA,CAEA,wGAEE,oCAAA,CAKF,kDACE,sCAAA,CAIJ,0CACE,cAAA,CACA,sCAAA,CACA,8BAAA,CAKF,yCACE,4CAAA,CAEA,yDACE,4NACE,CAQJ,+CACE,4NACE,CAKF,WAAA,CAEA,uDACE,4NACE,CAUV,iCACE,iBAAA,CACA,OAAA,CACA,QAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,2CAAA,CACA,+BAAA,CAGF,mCACE,4CAAA,CAGF,uCACE,0CAAA,CACA,oCAAA,CACA,cAAA,CACA,gBAAA,CAEA,gDACE,oCAAA,CACA,WAAA,CAIJ,uDACE,sCAAA",
            sourcesContent: [
              '.radio-button-root {\n  display: flex;\n  align-items: center;\n  gap: var(--s-spacing-xx-small);\n\n  &:hover {\n    .radio-button {\n      box-shadow:\n        0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset,\n        0px 0px 0px 2px var(--s-color-border-highlight) inset,\n        0px -1px 2px 0px rgba(0, 0, 0, 0.24) inset,\n        0px 1px 0.5px 0.5px rgba(255, 255, 255, 0.44) inset,\n        0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n\n      &::before {\n        box-shadow:\n          0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset,\n          0px 0px 0px 2px var(--s-color-border-highlight) inset,\n          0px -1px 2px 0px rgba(0, 0, 0, 0.24) inset,\n          0px 1px 0.5px 0.5px rgba(255, 255, 255, 0.44) inset,\n          0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n      }\n    }\n  }\n\n  .radio-button {\n    width: 24px;\n    height: 24px;\n    border-radius: var(--s-border-radius-large);\n    position: relative;\n    cursor: pointer;\n    color: var(--s-color-content-default);\n    user-select: none;\n\n    &.disable {\n      border-color: var(--s-color-content-disable);\n      cursor: auto;\n      background-color: var(--s-color-fill-disable);\n    }\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-border-highlight);\n      outline-style: solid;\n      outline-offset: var(--s-border-width-thin);\n    }\n\n    &::before {\n      content: "";\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      z-index: 1;\n      width: 24px;\n      height: 24px;\n      background-color: transparent;\n      box-shadow:\n        0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset,\n        0px 0px 0px 2px var(--s-color-border-default) inset,\n        0px -1px 2px 0px rgba(0, 0, 0, 0.24) inset,\n        0px 1px 0.5px 0.5px rgba(255, 255, 255, 0.44) inset,\n        0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n      border-radius: var(--s-border-radius-pill);\n    }\n\n    &:hover::before {\n      box-shadow:\n        0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset,\n        0px 0px 0px 2px var(--s-color-fill-highlight) inset,\n        0px -1px 2px 0px rgba(0, 0, 0, 0.24) inset,\n        0px 1px 0.5px 0.5px rgba(255, 255, 255, 0.44) inset,\n        0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n    }\n\n    &.checked {\n      background-color: var(--s-color-fill-highlight);\n\n      .radio-circle {\n        box-shadow: 0px 1px 2px rgb(14 21 36/6%);\n      }\n\n      &::before {\n        box-shadow:\n          0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset,\n          0px 0px 0px 2px var(--s-color-fill-highlight) inset,\n          0px -1px 2px 0px rgba(0, 0, 0, 0.24) inset,\n          0px 1px 0.5px 0.5px rgba(255, 255, 255, 0.44) inset,\n          0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n      }\n    }\n\n    &.checked {\n      border-color: var(--s-color-fill-highlight);\n      color: var(--s-color-content-highlight);\n    }\n\n    &.disabled {\n      color: var(--s-color-content-disable);\n      cursor: auto;\n\n      .checked,\n      .unchecked {\n        color: var(--s-color-content-disable);\n      }\n    }\n\n    .unchecked {\n      &:hover {\n        color: var(--s-color-content-highlight);\n      }\n    }\n\n    .checked {\n      cursor: pointer;\n      color: var(--s-color-content-highlight);\n      background-color: transparent;\n    }\n  }\n\n  &.disable {\n    .radio-button {\n      background-color: var(--s-color-fill-disable);\n\n      &.checked::before {\n        box-shadow:\n          0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset,\n          0px 0px 0px 2px var(--s-color-border-default) inset,\n          0px -1px 2px 0px rgba(0, 0, 0, 0.24) inset,\n          0px 1px 0.5px 0.5px rgba(255, 255, 255, 0.44) inset,\n          0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n      }\n    }\n    &:hover {\n      .radio-button {\n        box-shadow:\n          0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset,\n          0px 0px 0px 2px var(--s-color-border-default) inset,\n          0px -1px 2px 0px rgba(0, 0, 0, 0.24) inset,\n          0px 1px 0.5px 0.5px rgba(255, 255, 255, 0.44) inset,\n          0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n        cursor: auto;\n\n        &::before {\n          box-shadow:\n            0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset,\n            0px 0px 0px 2px var(--s-color-border-disable) inset,\n            0px -1px 2px 0px rgba(0, 0, 0, 0.24) inset,\n            0px 1px 0.5px 0.5px rgba(255, 255, 255, 0.44) inset,\n            0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n        }\n      }\n    }\n  }\n\n  .radio-circle {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n    transition: background-color 0.1s ease-in-out;\n    transform: translate(-50%, -50%);\n  }\n\n  .checked-circle {\n    background-color: var(--s-color-fill-default);\n  }\n\n  .radio-button-label {\n    font: var(--s-typography-paragraph-regular);\n    color: var(--s-color-content-default);\n    cursor: pointer;\n    user-select: none;\n\n    &.disabled {\n      color: var(--s-color-content-disable);\n      cursor: auto;\n    }\n  }\n\n  .radio-button-root:hover .unchecked {\n    color: var(--s-color-content-highlight);\n  }\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
