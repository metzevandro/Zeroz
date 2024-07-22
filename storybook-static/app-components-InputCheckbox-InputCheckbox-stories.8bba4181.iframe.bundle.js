"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [5121],
  {
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
        InputCheckbox = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputCheckbox/InputCheckbox.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(InputCheckbox.A, options);
      InputCheckbox.A && InputCheckbox.A.locals && InputCheckbox.A.locals;
      const InputCheckbox_InputCheckbox_InputCheckbox = ({
          modelValue,
          value,
          label,
          id,
          name,
          required,
          indeterminate,
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
                  : `ui-form-checkbox-${Math.random().toString(36).substr(2, 9)}`,
              [id],
            );
          (0, react.useEffect)(() => {
            modelValue !== checked && setChecked(modelValue);
          }, [modelValue]);
          const classList = (0, react.useMemo)(
              () =>
                [
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
            tabIndex: 0,
            className: `ui-form-checkbox ${classList}`,
            htmlFor: uid,
            onKeyDown: (event) => {
              "Enter" === event.key && !1 === disabled && handleChange();
            },
            children: [
              (0, jsx_runtime.jsx)("input", {
                type: "checkbox",
                id: uid,
                value,
                required,
                ref: (el) => {
                  el &&
                    (el.indeterminate = null != indeterminate && indeterminate);
                },
                name,
                disabled,
                checked,
                onChange: handleChange,
                tabIndex: -1,
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
        components_InputCheckbox_InputCheckbox =
          InputCheckbox_InputCheckbox_InputCheckbox;
      try {
        (InputCheckbox_InputCheckbox_InputCheckbox.displayName =
          "InputCheckbox"),
          (InputCheckbox_InputCheckbox_InputCheckbox.__docgenInfo = {
            description: "",
            displayName: "InputCheckbox",
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
              indeterminate: {
                defaultValue: null,
                description: "",
                name: "indeterminate",
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
              "src/app/components/InputCheckbox/InputCheckbox.tsx#InputCheckbox"
            ] = {
              docgenInfo:
                InputCheckbox_InputCheckbox_InputCheckbox.__docgenInfo,
              name: "InputCheckbox",
              path: "src/app/components/InputCheckbox/InputCheckbox.tsx#InputCheckbox",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/InputCheckbox/InputCheckbox.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Disabled: () => Disabled,
          Indeterminate: () => Indeterminate,
          NoEvents: () => NoEvents,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        ),
        _InputCheckbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./src/app/components/InputCheckbox/InputCheckbox.tsx",
        ),
        _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__ =
          (__webpack_require__("./src/app/styles.scss"),
          __webpack_require__(
            "./node_modules/@storybook/blocks/dist/index.mjs",
          ));
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Components/Input Checkbox",
          component: _InputCheckbox__WEBPACK_IMPORTED_MODULE_2__.A,
          parameters: {
            layout: "centered",
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
                              { children: "Checkboxes" },
                            ),
                            " are used when there are multiple items to select in a list or when users need to show they agree to specific terms or services.",
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
          tags: ["autodocs"],
          argTypes: {
            modelValue: {
              control: "text",
              description:
                "The bound value of the checkbox, used for two-way data binding.",
              table: { category: "Value" },
            },
            value: {
              control: "text",
              description:
                "The current value of the checkbox. Typically a boolean indicating whether it is checked.",
              table: { category: "Value" },
            },
            label: {
              control: "text",
              description: "The text label displayed next to the checkbox.",
              table: { category: "Appearance" },
            },
            id: {
              control: "text",
              description:
                "The unique identifier for the checkbox input element.",
              table: { category: "Attributes" },
            },
            name: {
              control: "text",
              description:
                "The name attribute for the checkbox input element, used to identify the checkbox in form submissions.",
              table: { category: "Attributes" },
            },
            required: {
              control: "boolean",
              description:
                "Specifies whether the checkbox must be checked before submitting the form.",
              table: { category: "Validation" },
            },
            indeterminate: {
              control: "boolean",
              description:
                'If true, the checkbox will be in an indeterminate state, often used to indicate a "partially selected" state in a list.',
              table: { category: "State" },
            },
            noEvents: {
              control: "boolean",
              description:
                "When true, the checkbox will not trigger any events.",
              table: { category: "Behavior" },
            },
            disabled: {
              control: "boolean",
              description:
                "If true, the checkbox will be disabled and unclickable.",
              table: { category: "State" },
            },
            onUpdate: {
              action: "onUpdate",
              description:
                "Callback function that is called when the checkbox value changes.",
              table: { category: "Events" },
            },
          },
        },
        Template = (props) => {
          const [isChecked, setChecked] = (0,
          react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _InputCheckbox__WEBPACK_IMPORTED_MODULE_2__.A,
            {
              ...props,
              value: isChecked,
              onUpdate: () => {
                setChecked((prevChecked) => !prevChecked),
                  props.onUpdate && props.onUpdate(!isChecked);
              },
            },
          );
        },
        Default = Template.bind({});
      Default.args = { label: "Label", disabled: !1, indeterminate: !1 };
      const Disabled = Template.bind({});
      Disabled.args = { label: "Label", disabled: !0 };
      const Indeterminate = Template.bind({});
      Indeterminate.args = { label: "Label", indeterminate: !0 };
      const NoEvents = Template.bind({});
      NoEvents.args = { label: "Label", noEvents: !0 };
      const __namedExportsOrder = [
        "Default",
        "Disabled",
        "Indeterminate",
        "NoEvents",
      ];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "props => {\n  const [isChecked, setChecked] = useState(false);\n  const handleInputCheckboxChange = () => {\n    setChecked(prevChecked => !prevChecked);\n    if (props.onUpdate) {\n      props.onUpdate(!isChecked);\n    }\n  };\n  return <InputCheckbox {...props} value={isChecked} onUpdate={handleInputCheckboxChange} />;\n}",
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
                "props => {\n  const [isChecked, setChecked] = useState(false);\n  const handleInputCheckboxChange = () => {\n    setChecked(prevChecked => !prevChecked);\n    if (props.onUpdate) {\n      props.onUpdate(!isChecked);\n    }\n  };\n  return <InputCheckbox {...props} value={isChecked} onUpdate={handleInputCheckboxChange} />;\n}",
              ...Disabled.parameters?.docs?.source,
            },
          },
        }),
        (Indeterminate.parameters = {
          ...Indeterminate.parameters,
          docs: {
            ...Indeterminate.parameters?.docs,
            source: {
              originalSource:
                "props => {\n  const [isChecked, setChecked] = useState(false);\n  const handleInputCheckboxChange = () => {\n    setChecked(prevChecked => !prevChecked);\n    if (props.onUpdate) {\n      props.onUpdate(!isChecked);\n    }\n  };\n  return <InputCheckbox {...props} value={isChecked} onUpdate={handleInputCheckboxChange} />;\n}",
              ...Indeterminate.parameters?.docs?.source,
            },
          },
        }),
        (NoEvents.parameters = {
          ...NoEvents.parameters,
          docs: {
            ...NoEvents.parameters?.docs,
            source: {
              originalSource:
                "props => {\n  const [isChecked, setChecked] = useState(false);\n  const handleInputCheckboxChange = () => {\n    setChecked(prevChecked => !prevChecked);\n    if (props.onUpdate) {\n      props.onUpdate(!isChecked);\n    }\n  };\n  return <InputCheckbox {...props} value={isChecked} onUpdate={handleInputCheckboxChange} />;\n}",
              ...NoEvents.parameters?.docs?.source,
            },
          },
        });
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputCheckbox/InputCheckbox.scss":
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
          '.ui-form-checkbox{display:flex;align-items:center;position:relative;cursor:pointer;user-select:none;font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default);gap:var(--s-spacing-xx-small)}.ui-form-checkbox:focus-visible{outline:none}.ui-form-checkbox:focus-visible .ui-form-checkbox-checkmark{outline:2px solid var(--s-color-border-highlight);outline-offset:2px}.ui-form-checkbox.-disabled{cursor:auto}.ui-form-checkbox.-no-events{pointer-events:none}.ui-form-checkbox+.ui-form-checkbox{margin-top:var(--s-spacing-nano)}.ui-form-checkbox:hover .ui-form-checkbox-checkmark{border-color:var(--s-color-fill-highlight)}.ui-form-checkbox .ui-form-checkbox-text:empty{display:none}.ui-form-checkbox input{position:absolute;opacity:0;cursor:pointer;height:1px;width:1px;left:calc(var(--s-spacing-x-small)/2 - 1px);top:var(--s-spacing-x-small)}.ui-form-checkbox input:hover~.ui-form-checkbox-checkmark{box-shadow:0px -1px 0px 0px rgba(0,0,0,.2) inset,0px 0px 0px 2px var(--s-color-fill-highlight) inset,0px -1px 2px 0px rgba(0,0,0,.24) inset,0px 1px .5px .5px rgba(255,255,255,.44) inset,0px 1px 2px 0px rgba(14,21,36,.06)}.ui-form-checkbox input:checked~.ui-form-checkbox-checkmark{background-color:var(--s-color-fill-highlight);border-color:rgba(0,0,0,0);box-shadow:0px -1px 0px 0px rgba(0,0,0,.2) inset,0px 0px 0px 2px var(--s-color-fill-highlight) inset,0px -1px 2px 0px rgba(0,0,0,.24) inset,0px 1px .5px .5px rgba(255,255,255,.44) inset,0px 1px 2px 0px rgba(14,21,36,.06)}.ui-form-checkbox input:checked~.ui-form-checkbox-checkmark::after{display:block}.ui-form-checkbox input:indeterminate~.ui-form-checkbox-checkmark{background-color:var(--s-color-fill-highlight);border-color:rgba(0,0,0,0);box-shadow:0px -1px 0px 0px rgba(0,0,0,.2) inset,0px 0px 0px 2px var(--s-color-fill-highlight) inset,0px -1px 2px 0px rgba(0,0,0,.24) inset,0px 1px .5px .5px rgba(255,255,255,.44) inset,0px 1px 2px 0px rgba(14,21,36,.06)}.ui-form-checkbox input:indeterminate~.ui-form-checkbox-checkmark:after{display:block;left:50%;top:50%;width:50%;height:0px;transform:translateX(-50%) translateY(-50%)}.ui-form-checkbox input:disabled~.ui-form-checkbox-checkmark,.ui-form-checkbox input:disabled:hover~.ui-form-checkbox-checkmark{background-color:rgba(0,0,0,0);box-shadow:0px -1px 0px 0px rgba(0,0,0,.2) inset,0px 0px 0px 2px var(--s-color-fill-disable) inset,0px -1px 2px 0px rgba(0,0,0,.24) inset,0px 1px .5px .5px rgba(255,255,255,.44) inset,0px 1px 2px 0px rgba(14,21,36,.06)}.ui-form-checkbox input:disabled{cursor:auto}.ui-form-checkbox input:disabled:hover~.ui-form-checkbox-checkmark{background-color:var(--s-color-fill-disable)}.ui-form-checkbox input:disabled~.ui-form-checkbox-checkmark{background-color:var(--s-color-fill-disable)}.ui-form-checkbox input:disabled~.ui-form-checkbox-checkmark::after{border-color:var(--s-color-content-disable)}.ui-form-checkbox input:disabled~.ui-form-checkbox-text{color:var(--s-color-content-disable)}.ui-form-checkbox .ui-form-checkbox-checkmark{position:relative;top:0;left:0;min-width:20px;width:20px;aspect-ratio:1;background-color:var(--s-color-fill-default);border-radius:var(--s-border-radius-small);display:flex;align-items:center;justify-content:center;box-shadow:0px -1px 0px 0px rgba(0,0,0,.2) inset,0px 0px 0px 2px var(--s-color-fill-disable) inset,0px -1px 2px 0px rgba(0,0,0,.24) inset,0px 1px .5px .5px rgba(255,255,255,.44) inset,0px 1px 2px 0px rgba(14,21,36,.06)}.ui-form-checkbox .ui-form-checkbox-checkmark:focus-within{outline:2px solid var(--s-color-border-highlight);outline-offset:2px}.ui-form-checkbox .ui-form-checkbox-checkmark:after{display:none;content:"";position:absolute;bottom:55%;left:50%;width:4px;height:8px;border:solid #fff;border-width:0 2px 2px 0;transform:translate(-50%, 50%) rotate(45deg)}.ui-form-checkbox.-switch input~.ui-form-checkbox-checkmark::after{display:block;background-color:var(--s-color-fill-default-hover)}.ui-form-checkbox.-switch input:checked~.ui-form-checkbox-checkmark{background-color:var(--s-color-fill-highlight)}.ui-form-checkbox.-switch input:checked~.ui-form-checkbox-checkmark:after{background-color:var(--s-color-content-on-color);left:55%}.ui-form-checkbox.-switch .ui-form-checkbox-checkmark{width:32px;min-width:32px;border-radius:12px;height:20px}.ui-form-checkbox.-switch .ui-form-checkbox-checkmark:after{width:12px;height:12px;left:8%;top:50%;border-radius:100%;bottom:1px;background-color:var(--s-color-fill-default);transition:all .15s cubic-bezier(0.2, 0.85, 0.32, 1.2),opacity .15s;border:none;transform:translate(0%, -50%)}',
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/InputCheckbox/InputCheckbox.scss",
            ],
            names: [],
            mappings:
              "AAAA,kBACE,YAAA,CACA,kBAAA,CACA,iBAAA,CACA,cAAA,CACA,gBAAA,CACA,0CAAA,CACA,oCAAA,CACA,6BAAA,CAEA,gCACE,YAAA,CAEA,4DACE,iDAAA,CACA,kBAAA,CAIJ,4BACE,WAAA,CAGF,6BACE,mBAAA,CAGF,oCACE,gCAAA,CAIA,oDACE,0CAAA,CAIJ,+CACE,YAAA,CAGF,wBACE,iBAAA,CACA,SAAA,CACA,cAAA,CACA,UAAA,CACA,SAAA,CACA,2CAAA,CACA,4BAAA,CAEA,0DACE,4NACE,CAOJ,4DACE,8CAAA,CACA,0BAAA,CACA,4NACE,CAMF,mEACE,aAAA,CAIJ,kEACE,8CAAA,CACA,0BAAA,CACA,4NACE,CAMF,wEACE,aAAA,CACA,QAAA,CACA,OAAA,CACA,SAAA,CACA,UAAA,CACA,2CAAA,CAIJ,gIAEE,8BAAA,CACA,0NACE,CAQN,iCACE,WAAA,CAGE,mEACE,4CAAA,CAIJ,6DACE,4CAAA,CAEA,oEACE,2CAAA,CAIJ,wDACE,oCAAA,CAIJ,8CACE,iBAAA,CACA,KAAA,CACA,MAAA,CACA,cAAA,CACA,UAAA,CACA,cAAA,CACA,4CAAA,CACA,0CAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,0NACE,CAMF,2DACE,iDAAA,CACA,kBAAA,CAGF,oDACE,YAAA,CACA,UAAA,CACA,iBAAA,CACA,UAAA,CACA,QAAA,CACA,SAAA,CACA,UAAA,CACA,iBAAA,CACA,wBAAA,CACA,4CAAA,CAOE,mEACE,aAAA,CACA,kDAAA,CAMJ,oEACE,8CAAA,CAEA,0EACE,gDAAA,CACA,QAAA,CAKN,sDACE,UAAA,CACA,cAAA,CACA,kBAAA,CACA,WAAA,CAEA,4DACE,UAAA,CACA,WAAA,CACA,OAAA,CACA,OAAA,CACA,kBAAA,CACA,UAAA,CACA,4CAAA,CACA,mEACE,CAEF,WAAA,CACA,6BAAA",
            sourcesContent: [
              '.ui-form-checkbox {\n  display: flex;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n  user-select: none;\n  font: var(--s-typography-paragraph-regular);\n  color: var(--s-color-content-default);\n  gap: var(--s-spacing-xx-small);\n\n  &:focus-visible {\n    outline: none;\n\n    .ui-form-checkbox-checkmark {\n      outline: 2px solid var(--s-color-border-highlight);\n      outline-offset: 2px;\n    }\n  }\n\n  &.-disabled {\n    cursor: auto;\n  }\n\n  &.-no-events {\n    pointer-events: none;\n  }\n\n  + .ui-form-checkbox {\n    margin-top: var(--s-spacing-nano);\n  }\n\n  &:hover {\n    .ui-form-checkbox-checkmark {\n      border-color: var(--s-color-fill-highlight);\n    }\n  }\n\n  .ui-form-checkbox-text:empty {\n    display: none;\n  }\n\n  input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 1px;\n    width: 1px;\n    left: calc(var(--s-spacing-x-small) / 2 - 1px);\n    top: var(--s-spacing-x-small);\n\n    &:hover ~ .ui-form-checkbox-checkmark {\n      box-shadow:\n        0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset,\n        0px 0px 0px 2px var(--s-color-fill-highlight) inset,\n        0px -1px 2px 0px rgba(0, 0, 0, 0.24) inset,\n        0px 1px 0.5px 0.5px rgba(255, 255, 255, 0.44) inset,\n        0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n    }\n\n    &:checked ~ .ui-form-checkbox-checkmark {\n      background-color: var(--s-color-fill-highlight);\n      border-color: transparent;\n      box-shadow:\n        0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset,\n        0px 0px 0px 2px var(--s-color-fill-highlight) inset,\n        0px -1px 2px 0px rgba(0, 0, 0, 0.24) inset,\n        0px 1px 0.5px 0.5px rgba(255, 255, 255, 0.44) inset,\n        0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n\n      &::after {\n        display: block;\n      }\n    }\n\n    &:indeterminate ~ .ui-form-checkbox-checkmark {\n      background-color: var(--s-color-fill-highlight);\n      border-color: transparent;\n      box-shadow:\n        0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset,\n        0px 0px 0px 2px var(--s-color-fill-highlight) inset,\n        0px -1px 2px 0px rgba(0, 0, 0, 0.24) inset,\n        0px 1px 0.5px 0.5px rgba(255, 255, 255, 0.44) inset,\n        0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n\n      &:after {\n        display: block;\n        left: 50%;\n        top: 50%;\n        width: 50%;\n        height: 0px;\n        transform: translateX(-50%) translateY(-50%);\n      }\n    }\n\n    &:disabled ~ .ui-form-checkbox-checkmark,\n    &:disabled:hover ~ .ui-form-checkbox-checkmark {\n      background-color: transparent;\n      box-shadow:\n        0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset,\n        0px 0px 0px 2px var(--s-color-fill-disable) inset,\n        0px -1px 2px 0px rgba(0, 0, 0, 0.24) inset,\n        0px 1px 0.5px 0.5px rgba(255, 255, 255, 0.44) inset,\n        0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n    }\n  }\n\n  input:disabled {\n    cursor: auto;\n\n    &:hover {\n      ~ .ui-form-checkbox-checkmark {\n        background-color: var(--s-color-fill-disable);\n      }\n    }\n\n    ~ .ui-form-checkbox-checkmark {\n      background-color: var(--s-color-fill-disable);\n\n      &::after {\n        border-color: var(--s-color-content-disable);\n      }\n    }\n\n    ~ .ui-form-checkbox-text {\n      color: var(--s-color-content-disable);\n    }\n  }\n\n  .ui-form-checkbox-checkmark {\n    position: relative;\n    top: 0;\n    left: 0;\n    min-width: 20px;\n    width: 20px;\n    aspect-ratio: 1;\n    background-color: var(--s-color-fill-default);\n    border-radius: var(--s-border-radius-small);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow:\n      0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset,\n      0px 0px 0px 2px var(--s-color-fill-disable) inset,\n      0px -1px 2px 0px rgba(0, 0, 0, 0.24) inset,\n      0px 1px 0.5px 0.5px rgba(255, 255, 255, 0.44) inset,\n      0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n\n    &:focus-within {\n      outline: 2px solid var(--s-color-border-highlight);\n      outline-offset: 2px;\n    }\n\n    &:after {\n      display: none;\n      content: "";\n      position: absolute;\n      bottom: 55%;\n      left: 50%;\n      width: 4px;\n      height: 8px;\n      border: solid white;\n      border-width: 0 2px 2px 0;\n      transform: translate(-50%, 50%) rotate(45deg);\n    }\n  }\n\n  &.-switch {\n    input {\n      ~ .ui-form-checkbox-checkmark {\n        &::after {\n          display: block;\n          background-color: var(--s-color-fill-default-hover);\n        }\n      }\n    }\n\n    input:checked {\n      ~ .ui-form-checkbox-checkmark {\n        background-color: var(--s-color-fill-highlight);\n\n        &:after {\n          background-color: var(--s-color-content-on-color);\n          left: calc(55%);\n        }\n      }\n    }\n\n    .ui-form-checkbox-checkmark {\n      width: 32px;\n      min-width: 32px;\n      border-radius: 12px;\n      height: 20px;\n\n      &:after {\n        width: 12px;\n        height: 12px;\n        left: 8%;\n        top: 50%;\n        border-radius: 100%;\n        bottom: 1px;\n        background-color: var(--s-color-fill-default);\n        transition:\n          all 0.15s cubic-bezier(0.2, 0.85, 0.32, 1.2),\n          opacity 0.15s;\n        border: none;\n        transform: translate(0%, -50%);\n      }\n    }\n  }\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
