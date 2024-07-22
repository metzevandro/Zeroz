"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [2123],
  {
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
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Switch/Switch.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Switch.A, options);
      Switch.A && Switch.A.locals && Switch.A.locals;
      const Switch_Switch_Switch = ({
          modelValue,
          value,
          label,
          id,
          name,
          required,
          noEvents,
          disabled,
          onUpdate,
        }) => {
          const [checked, setChecked] = (0, react.useState)(
              null != modelValue && modelValue,
            ),
            uid = (0, react.useMemo)(
              () =>
                null != id
                  ? id
                  : `ui-form-switch-${Math.random().toString(36).substr(2, 9)}`,
              [id],
            );
          (0, react.useEffect)(() => {
            modelValue !== checked && setChecked(modelValue);
          }, [modelValue]);
          const classList = (0, react.useMemo)(
              () =>
                [
                  "ui-form-switch",
                  "-switch",
                  disabled ? "-disabled" : "",
                  noEvents ? "-no-events" : "",
                ].join(" "),
              [disabled, noEvents],
            ),
            handleChange = () => {
              const newValue = !checked;
              setChecked(newValue), null == onUpdate || onUpdate(newValue);
            };
          return (0, jsx_runtime.jsxs)("label", {
            className: classList,
            htmlFor: uid,
            onKeyDown: (event) => {
              "Enter" === event.key && !1 === disabled && handleChange();
            },
            tabIndex: 0,
            children: [
              (0, jsx_runtime.jsx)("input", {
                type: "checkbox",
                id: uid,
                value,
                required,
                name,
                disabled,
                checked,
                onChange: handleChange,
              }),
              (0, jsx_runtime.jsx)("span", {
                className: "ui-form-checkbox-checkmark",
              }),
              label &&
                (0, jsx_runtime.jsx)("div", {
                  className: "ui-form-checkbox-text",
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
              modelValue: {
                defaultValue: null,
                description: "",
                name: "modelValue",
                required: !1,
                type: { name: "any" },
              },
              value: {
                defaultValue: null,
                description: "",
                name: "value",
                required: !1,
                type: { name: "any" },
              },
              label: {
                defaultValue: null,
                description: "",
                name: "label",
                required: !1,
                type: { name: "string" },
              },
              id: {
                defaultValue: null,
                description: "",
                name: "id",
                required: !1,
                type: { name: "string" },
              },
              name: {
                defaultValue: null,
                description: "",
                name: "name",
                required: !1,
                type: { name: "string" },
              },
              required: {
                defaultValue: null,
                description: "",
                name: "required",
                required: !1,
                type: { name: "boolean" },
              },
              noEvents: {
                defaultValue: null,
                description: "",
                name: "noEvents",
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
              onUpdate: {
                defaultValue: null,
                description: "",
                name: "onUpdate",
                required: !1,
                type: { name: "((val: any) => void)" },
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
    "./src/app/components/Switch/Switch.stories.tsx": (
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
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        _Switch__WEBPACK_IMPORTED_MODULE_2__ =
          (__webpack_require__("./src/app/styles.scss"),
          __webpack_require__("./src/app/components/Switch/Switch.tsx")),
        _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./node_modules/@storybook/blocks/dist/index.mjs",
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Components/Switch",
          component: _Switch__WEBPACK_IMPORTED_MODULE_2__.A,
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
                              { children: "Switch " },
                            ),
                            ' is used to change between two states, often used for turning things "on" or "off."',
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
              name: "Label",
              description: "The label displayed for the switch.",
              type: { name: "string" },
              defaultValue: { summary: "Label" },
              control: { type: "text" },
              table: {
                category: "Appearance",
                type: { summary: "string" },
                defaultValue: { summary: "Label" },
              },
            },
            disabled: {
              name: "Disabled",
              description: "Indicates whether the switch is disabled.",
              type: { name: "boolean" },
              defaultValue: { summary: !1 },
              control: { type: "boolean" },
              table: { category: "Behavior", type: { summary: "boolean" } },
            },
            onUpdate: {
              name: "On Update",
              description:
                "Callback function that is triggered when the switch value changes.",
              type: { name: "function" },
              action: "updated",
              table: {
                category: "Events",
                type: { summary: "(checked: boolean) => void" },
              },
            },
            modelValue: {
              name: "Model Value",
              description: "The model value of the switch.",
              table: { category: "Data", type: { summary: "any" } },
            },
            value: {
              name: "Value",
              description: "The value of the switch.",
              table: { category: "Data", type: { summary: "any" } },
            },
            id: {
              name: "ID",
              description: "The unique identifier for the switch.",
              type: { name: "string" },
              table: {
                category: "Identification",
                type: { summary: "string" },
              },
            },
            name: {
              name: "Name",
              description: "The name of the switch.",
              type: { name: "string" },
              table: {
                category: "Identification",
                type: { summary: "string" },
              },
            },
            required: {
              name: "Required",
              description: "Indicates whether the switch is required.",
              type: { name: "boolean" },
              defaultValue: { summary: !1 },
              control: { type: "boolean" },
              table: { category: "Validation", type: { summary: "boolean" } },
            },
            noEvents: {
              name: "No Events",
              description: "Indicates whether events should be ignored.",
              type: { name: "boolean" },
              defaultValue: { summary: !1 },
              control: { type: "boolean" },
              table: { category: "Behavior", type: { summary: "boolean" } },
            },
          },
        },
        Default = {
          args: {
            label: "Label",
            disabled: !1,
            modelValue: null,
            value: null,
            id: "switch-id",
            name: "switch-name",
            required: !1,
            noEvents: !1,
          },
        },
        __namedExportsOrder = ["Default"];
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    label: "Label",\n    disabled: false,\n    modelValue: null,\n    value: null,\n    id: "switch-id",\n    name: "switch-name",\n    required: false,\n    noEvents: false\n  }\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      };
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Switch/Switch.scss":
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
          '.ui-form-switch{display:flex;align-items:center;position:relative;cursor:pointer;user-select:none;font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default);gap:var(--s-spacing-xx-small)}.ui-form-switch:focus-visible{outline:none}.ui-form-switch:focus-visible .ui-form-checkbox-checkmark{outline:2px solid var(--s-color-border-highlight);outline-offset:2px}.ui-form-switch.-disabled{cursor:auto}.ui-form-switch.-no-events{pointer-events:none}.ui-form-switch+.ui-form-checkbox{margin-top:var(--s-spacing-nano)}.ui-form-switch:hover .ui-form-checkbox-checkmark{box-shadow:inset 1px var(--s-color-border-highlight)}.ui-form-switch .ui-form-checkbox-text:empty{display:none}.ui-form-switch input{position:absolute;opacity:0;cursor:pointer;height:1px;width:1px;left:calc(var(--s-spacing-x-small)/2 - 1px);top:var(--s-spacing-x-small)}.ui-form-switch input:checked~.ui-form-checkbox-checkmark{background-color:var(--s-color-fill-highlight);border-color:rgba(0,0,0,0)}.ui-form-switch input:checked~.ui-form-checkbox-checkmark::after{display:block}.ui-form-switch input:hover~.ui-form-checkbox-checkmark{box-shadow:0px -1px 0px 0px rgba(0,0,0,.2) inset,0px 0px 0px 2px var(--s-color-border-highlight) inset,0px -1px 2px 0px rgba(0,0,0,.24) inset,0px 1px .5px .5px rgba(255,255,255,.44) inset,0px 1px 2px 0px rgba(14,21,36,.06)}.ui-form-switch input:indeterminate~.ui-form-checkbox-checkmark{background-color:var(--s-color-fill-highlight);border-color:var(--s-color-border-highlight)}.ui-form-switch input:indeterminate~.ui-form-checkbox-checkmark:after{display:block;left:50%;top:50%;width:50%;height:0px;transform:translateX(-50%) translateY(-50%)}.ui-form-switch .ui-form-checkbox-checkmark{position:relative;top:0;left:0;min-width:20px;width:20px;aspect-ratio:1;background-color:var(--s-color-fill-disable);border-radius:var(--s-border-radius-small);display:flex;align-items:center;justify-content:center;box-shadow:0 0 rgba(0,0,0,0),0 0 rgba(0,0,0,0),0px 1px 2px rgba(14,21,36,.06),inset 0 1px .5px .5px rgba(255,255,255,.24),inset 0 -1px 2px rgba(28,62,175,.24)}.ui-form-switch .ui-form-checkbox-checkmark:after{display:none;content:"";position:absolute;bottom:55%;left:50%;width:4px;height:8px;border:solid #fff;border-width:0 2px 2px 0;transform:translate(-50%, 50%) rotate(45deg);box-shadow:0px 1px 2px rgba(14,21,36,.06)}.ui-form-switch.-switch input~.ui-form-checkbox-checkmark::after{display:block;background-color:var(--s-color-fill-default)}.ui-form-switch.-switch input:disabled~.ui-form-checkbox-checkmark{background-color:var(--s-color-fill-disable) !important}.ui-form-switch.-switch input:checked~.ui-form-checkbox-checkmark{background-color:var(--s-color-fill-highlight)}.ui-form-switch.-switch input:checked~.ui-form-checkbox-checkmark:after{background-color:var(--s-color-content-on-color);left:50%}.ui-form-switch.-switch .ui-form-checkbox-checkmark{width:32px;min-width:32px;border-radius:12px;height:20px}.ui-form-switch.-switch .ui-form-checkbox-checkmark:after{width:12px;height:12px;left:12%;top:50%;border-radius:100%;bottom:1px;background-color:var(--s-color-fill-default);transition:all .15s cubic-bezier(0.2, 0.85, 0.32, 1.2),opacity .15s;border:none;transform:translate(0%, -50%)}.ui-form-switch.-switch input:disabled{cursor:auto}.ui-form-switch.-switch input:disabled:hover~.ui-form-checkbox-checkmark{box-shadow:0 0 rgba(0,0,0,0),0 0 rgba(0,0,0,0),0px 1px 2px rgba(14,21,36,.06),inset 0 1px .5px .5px rgba(255,255,255,.24),inset 0 -1px 2px rgba(28,62,175,.24)}.ui-form-switch.-switch input:disabled~.ui-form-checkbox-checkmark{background-color:var(--s-color-fill-disable)}.ui-form-switch.-switch input:disabled~.ui-form-checkbox-checkmark::after{border:none;background-color:var(--s-color-content-disable) !important}.ui-form-switch.-switch input:disabled~.ui-form-checkbox-checkmark:checked{background-color:var(--s-color-fill-disable)}.ui-form-switch.-switch input:disabled~.ui-form-checkbox-text{color:var(--s-color-content-disable)}',
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Switch/Switch.scss"],
            names: [],
            mappings:
              "AAAA,gBACE,YAAA,CACA,kBAAA,CACA,iBAAA,CACA,cAAA,CACA,gBAAA,CACA,0CAAA,CACA,oCAAA,CACA,6BAAA,CAEA,8BACE,YAAA,CAEA,0DACE,iDAAA,CACA,kBAAA,CAIJ,0BACE,WAAA,CAGF,2BACE,mBAAA,CAGF,kCACE,gCAAA,CAIA,kDACE,oDAAA,CAIJ,6CACE,YAAA,CAGF,sBACE,iBAAA,CACA,SAAA,CACA,cAAA,CACA,UAAA,CACA,SAAA,CACA,2CAAA,CACA,4BAAA,CAEA,0DACE,8CAAA,CACA,0BAAA,CAEA,iEACE,aAAA,CAIJ,wDACE,8NACE,CAOJ,gEACE,8CAAA,CACA,4CAAA,CAEA,sEACE,aAAA,CACA,QAAA,CACA,OAAA,CACA,SAAA,CACA,UAAA,CACA,2CAAA,CAKN,4CACE,iBAAA,CACA,KAAA,CACA,MAAA,CACA,cAAA,CACA,UAAA,CACA,cAAA,CACA,4CAAA,CACA,0CAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,8JACE,CAMF,kDACE,YAAA,CACA,UAAA,CACA,iBAAA,CACA,UAAA,CACA,QAAA,CACA,SAAA,CACA,UAAA,CACA,iBAAA,CACA,wBAAA,CACA,4CAAA,CACA,yCAAA,CAOE,iEACE,aAAA,CACA,4CAAA,CAMJ,mEACE,uDAAA,CAKF,kEACE,8CAAA,CAEA,wEACE,gDAAA,CACA,QAAA,CAKN,oDACE,UAAA,CACA,cAAA,CACA,kBAAA,CACA,WAAA,CAEA,0DACE,UAAA,CACA,WAAA,CACA,QAAA,CACA,OAAA,CACA,kBAAA,CACA,UAAA,CACA,4CAAA,CACA,mEACE,CAEF,WAAA,CACA,6BAAA,CAIJ,uCACE,WAAA,CAEA,yEACE,8JACE,CAOJ,mEACE,4CAAA,CAEA,0EACE,WAAA,CACA,0DAAA,CAGF,2EACE,4CAAA,CAIJ,8DACE,oCAAA",
            sourcesContent: [
              '.ui-form-switch {\n  display: flex;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n  user-select: none;\n  font: var(--s-typography-paragraph-regular);\n  color: var(--s-color-content-default);\n  gap: var(--s-spacing-xx-small);\n\n  &:focus-visible {\n    outline: none;\n\n    .ui-form-checkbox-checkmark {\n      outline: 2px solid var(--s-color-border-highlight);\n      outline-offset: 2px;\n    }\n  }\n\n  &.-disabled {\n    cursor: auto;\n  }\n\n  &.-no-events {\n    pointer-events: none;\n  }\n\n  + .ui-form-checkbox {\n    margin-top: var(--s-spacing-nano);\n  }\n\n  &:hover {\n    .ui-form-checkbox-checkmark {\n      box-shadow: inset 1px var(--s-color-border-highlight);\n    }\n  }\n\n  .ui-form-checkbox-text:empty {\n    display: none;\n  }\n\n  input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 1px;\n    width: 1px;\n    left: calc(var(--s-spacing-x-small) / 2 - 1px);\n    top: var(--s-spacing-x-small);\n\n    &:checked ~ .ui-form-checkbox-checkmark {\n      background-color: var(--s-color-fill-highlight);\n      border-color: transparent;\n\n      &::after {\n        display: block;\n      }\n    }\n\n    &:hover ~ .ui-form-checkbox-checkmark {\n      box-shadow:\n        0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset,\n        0px 0px 0px 2px var(--s-color-border-highlight) inset,\n        0px -1px 2px 0px rgba(0, 0, 0, 0.24) inset,\n        0px 1px 0.5px 0.5px rgba(255, 255, 255, 0.44) inset,\n        0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n    }\n\n    &:indeterminate ~ .ui-form-checkbox-checkmark {\n      background-color: var(--s-color-fill-highlight);\n      border-color: var(--s-color-border-highlight);\n\n      &:after {\n        display: block;\n        left: 50%;\n        top: 50%;\n        width: 50%;\n        height: 0px;\n        transform: translateX(-50%) translateY(-50%);\n      }\n    }\n  }\n\n  .ui-form-checkbox-checkmark {\n    position: relative;\n    top: 0;\n    left: 0;\n    min-width: 20px;\n    width: 20px;\n    aspect-ratio: 1;\n    background-color: var(--s-color-fill-disable);\n    border-radius: var(--s-border-radius-small);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow:\n      0 0 #0000,\n      0 0 #0000,\n      0px 1px 2px rgb(14 21 36/6%),\n      inset 0 1px 0.5px 0.5px hsla(0, 0%, 100%, 0.24),\n      inset 0 -1px 2px rgba(28, 62, 175, 0.24);\n\n    &:after {\n      display: none;\n      content: "";\n      position: absolute;\n      bottom: 55%;\n      left: 50%;\n      width: 4px;\n      height: 8px;\n      border: solid white;\n      border-width: 0 2px 2px 0;\n      transform: translate(-50%, 50%) rotate(45deg);\n      box-shadow: 0px 1px 2px rgb(14 21 36/6%);\n    }\n  }\n\n  &.-switch {\n    input {\n      ~ .ui-form-checkbox-checkmark {\n        &::after {\n          display: block;\n          background-color: var(--s-color-fill-default);\n        }\n      }\n    }\n\n    input:disabled {\n      ~ .ui-form-checkbox-checkmark {\n        background-color: var(--s-color-fill-disable) !important;\n      }\n    }\n\n    input:checked {\n      ~ .ui-form-checkbox-checkmark {\n        background-color: var(--s-color-fill-highlight);\n\n        &:after {\n          background-color: var(--s-color-content-on-color);\n          left: calc(50%);\n        }\n      }\n    }\n\n    .ui-form-checkbox-checkmark {\n      width: 32px;\n      min-width: 32px;\n      border-radius: 12px;\n      height: 20px;\n\n      &:after {\n        width: 12px;\n        height: 12px;\n        left: 12%;\n        top: 50%;\n        border-radius: 100%;\n        bottom: 1px;\n        background-color: var(--s-color-fill-default);\n        transition:\n          all 0.15s cubic-bezier(0.2, 0.85, 0.32, 1.2),\n          opacity 0.15s;\n        border: none;\n        transform: translate(0%, -50%);\n      }\n    }\n\n    input:disabled {\n      cursor: auto;\n\n      &:hover ~ .ui-form-checkbox-checkmark {\n        box-shadow:\n          0 0 #0000,\n          0 0 #0000,\n          0px 1px 2px rgb(14 21 36/6%),\n          inset 0 1px 0.5px 0.5px hsla(0, 0%, 100%, 0.24),\n          inset 0 -1px 2px rgba(28, 62, 175, 0.24);\n      }\n\n      ~ .ui-form-checkbox-checkmark {\n        background-color: var(--s-color-fill-disable);\n\n        &::after {\n          border: none;\n          background-color: var(--s-color-content-disable) !important;\n        }\n\n        &:checked {\n          background-color: var(--s-color-fill-disable);\n        }\n      }\n\n      ~ .ui-form-checkbox-text {\n        color: var(--s-color-content-disable);\n      }\n    }\n  }\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
