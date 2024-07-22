"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [3873],
  {
    "./src/app/components/EmptyState/EmptyState.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_EmptyState_EmptyState,
      });
      var jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        injectStylesIntoStyleTag =
          (__webpack_require__(
            "./node_modules/next/dist/compiled/react/index.js",
          ),
          __webpack_require__(
            "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
          )),
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
        EmptyState = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/EmptyState/EmptyState.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(EmptyState.A, options);
      EmptyState.A && EmptyState.A.locals && EmptyState.A.locals;
      var Button = __webpack_require__(
          "./src/app/components/Button/Button.tsx",
        ),
        Icon = __webpack_require__("./src/app/components/Icon/Icon.tsx");
      const EmptyState_EmptyState_EmptyState = ({
          title,
          description,
          icon,
          buttonContentPrimary,
          buttonContentSecondary,
          onClickActionPrimary,
          onClickActionSecondary,
        }) =>
          (0, jsx_runtime.jsxs)("div", {
            className: "empty-state-root",
            children: [
              (0, jsx_runtime.jsx)(Icon.A, { icon, size: "lg" }),
              (0, jsx_runtime.jsxs)("div", {
                className: "empty-state-content",
                children: [
                  (0, jsx_runtime.jsx)("h3", { children: title }),
                  (0, jsx_runtime.jsx)("p", { children: description }),
                ],
              }),
              (0, jsx_runtime.jsxs)("div", {
                className: "empty-state-footer",
                children: [
                  buttonContentPrimary &&
                    (0, jsx_runtime.jsx)(Button.A, {
                      size: "md",
                      variant: "primary",
                      label: buttonContentPrimary,
                      onClick: onClickActionPrimary,
                    }),
                  buttonContentSecondary &&
                    (0, jsx_runtime.jsx)(Button.A, {
                      size: "md",
                      variant: "secondary",
                      label: buttonContentSecondary,
                      onClick: onClickActionSecondary,
                    }),
                ],
              }),
            ],
          }),
        components_EmptyState_EmptyState = EmptyState_EmptyState_EmptyState;
      try {
        (EmptyState_EmptyState_EmptyState.displayName = "EmptyState"),
          (EmptyState_EmptyState_EmptyState.__docgenInfo = {
            description: "",
            displayName: "EmptyState",
            props: {
              title: {
                defaultValue: null,
                description: "",
                name: "title",
                required: !0,
                type: { name: "string" },
              },
              description: {
                defaultValue: null,
                description: "",
                name: "description",
                required: !0,
                type: { name: "string" },
              },
              icon: {
                defaultValue: null,
                description: "",
                name: "icon",
                required: !0,
                type: { name: "string" },
              },
              buttonContentPrimary: {
                defaultValue: null,
                description: "",
                name: "buttonContentPrimary",
                required: !1,
                type: { name: "string" },
              },
              buttonContentSecondary: {
                defaultValue: null,
                description: "",
                name: "buttonContentSecondary",
                required: !1,
                type: { name: "string" },
              },
              onClickActionPrimary: {
                defaultValue: null,
                description: "",
                name: "onClickActionPrimary",
                required: !1,
                type: { name: "(() => void)" },
              },
              onClickActionSecondary: {
                defaultValue: null,
                description: "",
                name: "onClickActionSecondary",
                required: !1,
                type: { name: "(() => void)" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/EmptyState/EmptyState.tsx#EmptyState"
            ] = {
              docgenInfo: EmptyState_EmptyState_EmptyState.__docgenInfo,
              name: "EmptyState",
              path: "src/app/components/EmptyState/EmptyState.tsx#EmptyState",
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
    "./src/app/components/InputSearch/InputSearch.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_InputSearch_InputSearch,
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
        InputSearch = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputSearch/InputSearch.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(InputSearch.A, options);
      InputSearch.A && InputSearch.A.locals && InputSearch.A.locals;
      var ButtonIcon = __webpack_require__(
        "./src/app/components/ButtonIcon/ButtonIcon.tsx",
      );
      const InputSearch_InputSearch_InputSearch = (props) => {
          const [inputValue, setInputValue] = (0, react.useState)(""),
            [isActive, setIsActive] = (0, react.useState)(!1),
            inputRef = (0, react.useRef)(null);
          return (0, jsx_runtime.jsx)("div", {
            className:
              "input-search-root " + (props.disabled ? "disabled" : ""),
            onClick: () => {
              setIsActive(!0), inputRef.current && inputRef.current.focus();
            },
            children: (0, jsx_runtime.jsxs)("div", {
              className: "input-search",
              children: [
                (0, jsx_runtime.jsx)(Icon.A, { size: "md", icon: "search" }),
                (0, jsx_runtime.jsx)("input", {
                  disabled: props.disabled,
                  size: 1e3,
                  type: "text",
                  placeholder: props.placeholder,
                  value: inputValue,
                  onChange: (event) => {
                    const { value } = event.target;
                    setInputValue(value),
                      props.onChange && props.onChange(value);
                  },
                  onBlur: () => {
                    setIsActive(!1);
                  },
                  ref: inputRef,
                }),
                inputValue &&
                  (0, jsx_runtime.jsx)("button", {
                    className: `input-search-button-close ${inputValue && "visible"}`,
                    onClick: () => {
                      setInputValue(""), props.onChange && props.onChange("");
                    },
                    children: (0, jsx_runtime.jsx)(ButtonIcon.A, {
                      variant: "primary",
                      typeIcon: "close",
                      buttonType: "plain",
                      size: "sm",
                    }),
                  }),
              ],
            }),
          });
        },
        components_InputSearch_InputSearch =
          InputSearch_InputSearch_InputSearch;
      try {
        (InputSearch_InputSearch_InputSearch.displayName = "InputSearch"),
          (InputSearch_InputSearch_InputSearch.__docgenInfo = {
            description: "",
            displayName: "InputSearch",
            props: {
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
                type: { name: "((value: string) => void)" },
              },
              placeholder: {
                defaultValue: null,
                description: "",
                name: "placeholder",
                required: !0,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/InputSearch/InputSearch.tsx#InputSearch"
            ] = {
              docgenInfo: InputSearch_InputSearch_InputSearch.__docgenInfo,
              name: "InputSearch",
              path: "src/app/components/InputSearch/InputSearch.tsx#InputSearch",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/Pagination/Pagination.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_Pagination_Pagination,
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
        Pagination = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Pagination/Pagination.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Pagination.A, options);
      Pagination.A && Pagination.A.locals && Pagination.A.locals;
      var Icon = __webpack_require__("./src/app/components/Icon/Icon.tsx");
      __webpack_require__("./node_modules/next/dist/compiled/react/index.js");
      const PaginationItem = ({ arrow, disabled, click }) =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children:
              "left" === arrow
                ? (0, jsx_runtime.jsx)("button", {
                    className: "arrow_back",
                    disabled,
                    onClick: click,
                    children: (0, jsx_runtime.jsx)(Icon.A, {
                      icon: "arrow_back",
                      size: "sm",
                    }),
                  })
                : "right" === arrow
                  ? (0, jsx_runtime.jsx)("button", {
                      className: "arrow_forward",
                      disabled,
                      onClick: click,
                      children: (0, jsx_runtime.jsx)(Icon.A, {
                        icon: "arrow_forward",
                        size: "sm",
                      }),
                    })
                  : "error",
          }),
        Pagination_Pagination_Pagination = ({
          disabledRight,
          disabledLeft,
          variant,
          onClickRight,
          onClickLeft,
          label,
        }) =>
          (0, jsx_runtime.jsx)("div", {
            className: "Pagination",
            children:
              "noLabel" === variant
                ? (0, jsx_runtime.jsxs)("div", {
                    className: "noLabel",
                    children: [
                      (0, jsx_runtime.jsx)(PaginationItem, {
                        arrow: "left",
                        disabled: disabledLeft,
                        click: onClickLeft,
                      }),
                      (0, jsx_runtime.jsx)(PaginationItem, {
                        arrow: "right",
                        disabled: disabledRight,
                        click: onClickRight,
                      }),
                    ],
                  })
                : "leftLabel" === variant
                  ? (0, jsx_runtime.jsxs)("div", {
                      className: "leftLabel",
                      children: [
                        (0, jsx_runtime.jsx)("p", { children: label }),
                        (0, jsx_runtime.jsxs)("div", {
                          style: { display: "flex" },
                          children: [
                            (0, jsx_runtime.jsx)(PaginationItem, {
                              arrow: "left",
                              disabled: disabledLeft,
                              click: onClickLeft,
                            }),
                            (0, jsx_runtime.jsx)(PaginationItem, {
                              arrow: "right",
                              disabled: disabledRight,
                              click: onClickRight,
                            }),
                          ],
                        }),
                      ],
                    })
                  : "centerLabel" === variant
                    ? (0, jsx_runtime.jsxs)("div", {
                        className: "centerLabel",
                        children: [
                          (0, jsx_runtime.jsx)(PaginationItem, {
                            arrow: "left",
                            disabled: disabledLeft,
                            click: onClickLeft,
                          }),
                          (0, jsx_runtime.jsx)("p", { children: label }),
                          (0, jsx_runtime.jsx)(PaginationItem, {
                            arrow: "right",
                            disabled: disabledRight,
                            click: onClickRight,
                          }),
                        ],
                      })
                    : "error",
          }),
        components_Pagination_Pagination = Pagination_Pagination_Pagination;
      try {
        (Pagination_Pagination_Pagination.displayName = "Pagination"),
          (Pagination_Pagination_Pagination.__docgenInfo = {
            description: "",
            displayName: "Pagination",
            props: {
              variant: {
                defaultValue: null,
                description: "",
                name: "variant",
                required: !0,
                type: {
                  name: "enum",
                  value: [
                    { value: '"noLabel"' },
                    { value: '"leftLabel"' },
                    { value: '"centerLabel"' },
                  ],
                },
              },
              disabledLeft: {
                defaultValue: null,
                description: "",
                name: "disabledLeft",
                required: !1,
                type: { name: "boolean" },
              },
              disabledRight: {
                defaultValue: null,
                description: "",
                name: "disabledRight",
                required: !1,
                type: { name: "boolean" },
              },
              onClickLeft: {
                defaultValue: null,
                description: "",
                name: "onClickLeft",
                required: !1,
                type: { name: "(() => void)" },
              },
              onClickRight: {
                defaultValue: null,
                description: "",
                name: "onClickRight",
                required: !1,
                type: { name: "(() => void)" },
              },
              label: {
                defaultValue: null,
                description: "",
                name: "label",
                required: !0,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Pagination/Pagination.tsx#Pagination"
            ] = {
              docgenInfo: Pagination_Pagination_Pagination.__docgenInfo,
              name: "Pagination",
              path: "src/app/components/Pagination/Pagination.tsx#Pagination",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/DataTable/DataTable.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => DataTable_stories,
          withExpandable: () => withExpandable,
          withFilters: () => withFilters,
          withSelectable: () => withSelectable,
          withSelectableAndWithExpandable: () =>
            withSelectableAndWithExpandable,
        });
      var jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        react = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        ),
        InputSearch = __webpack_require__(
          "./src/app/components/InputSearch/InputSearch.tsx",
        ),
        Button = __webpack_require__("./src/app/components/Button/Button.tsx"),
        Pagination = __webpack_require__(
          "./src/app/components/Pagination/Pagination.tsx",
        ),
        InputCheckbox = __webpack_require__(
          "./src/app/components/InputCheckbox/InputCheckbox.tsx",
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
        DataTable = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/DataTable/DataTable.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(DataTable.A, options);
      DataTable.A && DataTable.A.locals && DataTable.A.locals;
      var ButtonIcon = __webpack_require__(
          "./src/app/components/ButtonIcon/ButtonIcon.tsx",
        ),
        ButtonGroup = __webpack_require__(
          "./src/app/components/ButtonGroup/ButtonGroup.tsx",
        ),
        EmptyState = __webpack_require__(
          "./src/app/components/EmptyState/EmptyState.tsx",
        ),
        Icon = __webpack_require__("./src/app/components/Icon/Icon.tsx"),
        Modal = __webpack_require__("./src/app/components/Modal/Modal.tsx");
      const DataTable_DataTable_DataTable = ({
          columns,
          data: originalData,
          expandable,
          selectable,
          expandedData,
          itemPerPage,
          inputPlaceholder,
          selectableLabelSecondButton,
          labelSecondButton,
          typeIconSecondButton,
          titleNoDataMessage,
          labelButtonNoDataFilteredMessage,
          descriptionNoDataMessage,
          selectableIconSecondButton,
          filters,
          titleNoDataFilteredMessage,
          descriptionNoDataFilteredMessage,
          pagesText,
        }) => {
          const [currentPage, setCurrentPage] = (0, react.useState)(1),
            itemsPerPage = itemPerPage,
            [filteredData, setFilteredData] = (0, react.useState)(originalData),
            [totalPages, setTotalPages] = (0, react.useState)(0);
          (0, react.useEffect)(() => {
            setFilteredData(originalData);
            const totalPages = Math.ceil(originalData.length / itemsPerPage);
            setTotalPages(totalPages);
          }, [originalData, itemsPerPage]);
          const label =
            filteredData.length > 0
              ? `${pagesText} ${currentPage} - ${totalPages}`
              : `${pagesText} 0 - 0`;
          (0, react.useEffect)(() => {
            const totalPages = Math.ceil(filteredData.length / itemsPerPage);
            setTotalPages(totalPages);
          }, [originalData, itemsPerPage, filteredData]);
          const [originalDataState, setOriginalDataState] = (0, react.useState)(
              originalData,
            ),
            [selectAll, setSelectAll] = (0, react.useState)(!1),
            [selectedRows, setSelectedRows] = (0, react.useState)([]),
            [expandedRows, setExpandedRows] = (0, react.useState)([]),
            [isAnyItemSelected, setIsAnyItemSelected] = (0, react.useState)(!1),
            [searchTerm, setSearchTerm] = (0, react.useState)(""),
            [contentOverflowed, setContentOverflowed] = (0, react.useState)(!1),
            contentRef = (0, react.useRef)(null),
            [isOpenAside, setIsOpenAside] = (0, react.useState)(!1),
            [filterOptions, setFilterOptions] = (0, react.useState)(
              columns.reduce((acc, column) => ({ ...acc, [column]: [] }), {}),
            ),
            indexOfLastItem = currentPage * itemsPerPage,
            indexOfFirstItem = indexOfLastItem - itemsPerPage,
            [allItemsExpanded, setAllItemsExpanded] = (0, react.useState)(!1);
          (0, react.useEffect)(() => {
            setIsAnyItemSelected(selectedRows.length > 0),
              setSelectAll(selectedRows.length === filteredData.length);
          }, [selectedRows, filteredData]),
            (0, react.useEffect)(() => {
              const checkOverflow = () => {
                  const contentElement = contentRef.current;
                  contentElement &&
                    setContentOverflowed(
                      contentElement.scrollWidth > contentElement.clientWidth,
                    );
                },
                resizeObserver = new ResizeObserver(() => {
                  checkOverflow();
                }),
                contentElement = contentRef.current;
              return (
                contentElement &&
                  (resizeObserver.observe(contentElement), checkOverflow()),
                () => {
                  contentElement && resizeObserver.unobserve(contentElement);
                }
              );
            }, []);
          const isAllSelected = () => {
              const allIds = filteredData.map((item) => item.id);
              return selectedRows.length === allIds.length;
            },
            isIndeterminate =
              selectedRows.length > 0 &&
              selectedRows.length < filteredData.length &&
              !selectAll;
          function calculateGridTemplate(selectable = !1, expandable = !1) {
            return selectable && expandable
              ? {
                  gridTemplateColumns:
                    "56px 56px repeat(auto-fit, minmax(120px, 1fr))",
                }
              : selectable || expandable
                ? {
                    gridTemplateColumns:
                      "56px repeat(auto-fit, minmax(120px, 1fr))",
                  }
                : {};
          }
          function calculateLeft(selectable = !1, expandable = !1) {
            return selectable && expandable
              ? { left: "112px" }
              : selectable || expandable
                ? { left: "56px" }
                : { left: "0px" };
          }
          function calculateLeftToCheckBox(expandable = !1) {
            return expandable ? { left: "56px" } : { left: "0px" };
          }
          (0, react.useEffect)(() => {
            setIsAnyItemSelected(selectedRows.length > 0);
          }, [selectedRows]);
          const toggleAside = () => {
              setIsOpenAside(!isOpenAside);
            },
            [isOpen, setIsOpen] = (0, react.useState)(!1),
            removeRow = () => {
              const updatedOriginalData = originalDataState.filter(
                  (item) => !selectedRows.includes(item.id),
                ),
                updatedFilteredData = filteredData.filter(
                  (item) => !selectedRows.includes(item.id),
                );
              setFilteredData(updatedFilteredData),
                setSelectedRows([]),
                setIsOpen(!1),
                setOriginalDataState(updatedOriginalData);
            },
            toggleModal = () => {
              setIsOpen((prevIsOpen) => !prevIsOpen);
            },
            exportSelectedRowsAsCSV = () => {
              const selectedData = originalData.filter((row) =>
                  selectedRows.includes(row.id),
                ),
                columnNames = columns,
                csvContent = selectedData
                  .map((row) =>
                    columnNames.map((column) => row[column]).join(","),
                  )
                  .join("\n"),
                csvData = columnNames.join(",") + "\n" + csvContent,
                csvBlob = new Blob([csvData], { type: "text/csv" }),
                csvURL = window.URL.createObjectURL(csvBlob),
                downloadLink = document.createElement("a");
              (downloadLink.href = csvURL),
                (downloadLink.download = "selected_data.csv"),
                document.body.appendChild(downloadLink),
                downloadLink.click(),
                window.URL.revokeObjectURL(csvURL),
                document.body.removeChild(downloadLink);
            },
            handleSearchChange = (value) => {
              setSearchTerm(value);
              let searchedData = [...originalData];
              "" !== value.trim() &&
                (searchedData = searchedData.filter((item) =>
                  Object.values(item).some(
                    (val) => "string" == typeof val && val.includes(value),
                  ),
                )),
                Object.entries(filterOptions).forEach(
                  ([columnName, selectedValues]) => {
                    selectedValues.length > 0 &&
                      (searchedData = searchedData.filter((item) =>
                        selectedValues.includes(String(item[columnName])),
                      ));
                  },
                ),
                setFilteredData(searchedData);
            },
            initialSortConfig = columns.reduce(
              (acc, column) => ({ ...acc, [column]: "default" }),
              {},
            ),
            [sortConfig, setSortConfig] = (0, react.useState)(
              initialSortConfig,
            );
          (0, react.useEffect)(() => {
            const defaultSortConfig = columns.reduce(
              (acc, column) => ({ ...acc, [column]: "default" }),
              {},
            );
            setSortConfig(defaultSortConfig);
          }, [filterOptions]);
          const handleClearFilters = () => {
              const updatedFilteredData = [...originalData],
                updatedFilterOptions = columns.reduce(
                  (acc, column) => ({ ...acc, [column]: [] }),
                  {},
                );
              setFilteredData(updatedFilteredData),
                setFilterOptions(updatedFilterOptions),
                setSearchTerm("");
            },
            hasSelectedFilters = Object.values(filterOptions).some(
              (options) => options.length > 0,
            );
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsxs)("div", {
              className: "data-table-root",
              children: [
                isAnyItemSelected
                  ? (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                      children: [
                        (0, jsx_runtime.jsx)(Modal.Ay, {
                          footer: (0, jsx_runtime.jsx)(Modal.J9, {
                            children: (0, jsx_runtime.jsx)("div", {
                              style: { width: "min-content" },
                              children: (0, jsx_runtime.jsx)(ButtonGroup.A, {
                                contentFirstButton: "Delete",
                                contentSecondButton: "Cancel",
                                direction: "row",
                                variantFirstButton: "warning",
                                variantSecondButton: "secondary",
                                onClickFirstButton: removeRow,
                                onClickSecondButton: toggleModal,
                              }),
                            }),
                          }),
                          description:
                            "Are you sure that you want delete this row?",
                          dismissible: !0,
                          title: "Delete",
                          isOpen,
                          hideModal: toggleModal,
                        }),
                        (0, jsx_runtime.jsxs)("div", {
                          className: "data-table-header-selected-items",
                          children: [
                            (0, jsx_runtime.jsx)("div", {
                              className:
                                "data-table-header-selected-items-message",
                              children: (0, jsx_runtime.jsx)("p", {
                                children: `${selectedRows.length} item${selectedRows.length >= 2 ? "s" : ""} selected`,
                              }),
                            }),
                            (0, jsx_runtime.jsxs)("div", {
                              className:
                                "data-table-header-selected-items-buttons",
                              children: [
                                (0, jsx_runtime.jsx)(Button.A, {
                                  size: "md",
                                  variant: "secondary",
                                  label: "Export",
                                  onClick: exportSelectedRowsAsCSV,
                                  typeIcon: "download",
                                }),
                                (0, jsx_runtime.jsx)(Button.A, {
                                  size: "md",
                                  variant: "secondary",
                                  label: selectableLabelSecondButton,
                                  onClick: toggleModal,
                                  typeIcon: selectableIconSecondButton,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    })
                  : (0, jsx_runtime.jsxs)("div", {
                      className: "data-table-header",
                      children: [
                        (0, jsx_runtime.jsx)(InputSearch.A, {
                          placeholder: inputPlaceholder,
                          onChange: handleSearchChange,
                        }),
                        filters &&
                          (0, jsx_runtime.jsx)("div", {
                            className: "data-table-header-actions",
                            children: (0, jsx_runtime.jsx)("div", {
                              style: { width: "100%" },
                              children: (0, jsx_runtime.jsx)(Button.A, {
                                variant: "secondary",
                                typeIcon: typeIconSecondButton,
                                size: "md",
                                label: labelSecondButton,
                                onClick: toggleAside,
                              }),
                            }),
                          }),
                      ],
                    }),
                (0, jsx_runtime.jsx)("div", {
                  ref: contentRef,
                  className:
                    "data-table-content " +
                    (contentOverflowed ? "overflowed" : ""),
                  children:
                    filteredData.length > 0
                      ? (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                          children: [
                            (0, jsx_runtime.jsxs)("div", {
                              className: "data-table-content-header",
                              style: calculateGridTemplate(
                                selectable,
                                expandable,
                              ),
                              children: [
                                expandable &&
                                  (0, jsx_runtime.jsx)("div", {
                                    className:
                                      "data-table-content-header-expandable " +
                                      (allItemsExpanded ? "up" : "down"),
                                    children: (0, jsx_runtime.jsx)(
                                      ButtonIcon.A,
                                      {
                                        size: "md",
                                        buttonType: "plain",
                                        typeIcon: "keyboard_arrow_down",
                                        variant: "primary",
                                        onClick: () => {
                                          if (allItemsExpanded)
                                            setExpandedRows([]),
                                              setAllItemsExpanded(!1);
                                          else {
                                            const allIds = filteredData.map(
                                              (item) => item.id,
                                            );
                                            setExpandedRows(allIds),
                                              setAllItemsExpanded(!0);
                                          }
                                        },
                                      },
                                    ),
                                  }),
                                selectable &&
                                  (0, jsx_runtime.jsx)("div", {
                                    className:
                                      "data-table-content-header-checkbox",
                                    style: calculateLeftToCheckBox(expandable),
                                    children: (0, jsx_runtime.jsx)(
                                      InputCheckbox.A,
                                      {
                                        modelValue: selectAll,
                                        onUpdate: () => {
                                          const allIds = filteredData.map(
                                            (item) => item.id,
                                          );
                                          isAllSelected()
                                            ? (setSelectAll(!1),
                                              setSelectedRows([]))
                                            : (setSelectAll(!0),
                                              setSelectedRows(allIds));
                                        },
                                        indeterminate: isIndeterminate,
                                      },
                                    ),
                                  }),
                                columns.map((column, columnIndex) =>
                                  (0, jsx_runtime.jsxs)(
                                    "div",
                                    {
                                      className:
                                        "th " +
                                        (0 === columnIndex
                                          ? "sticky-first-column"
                                          : ""),
                                      style: calculateLeft(
                                        selectable,
                                        expandable,
                                      ),
                                      onClick: () =>
                                        ((column) => {
                                          const currentSortState =
                                            sortConfig[column];
                                          let nextSortState;
                                          nextSortState =
                                            "asc" === currentSortState
                                              ? "desc"
                                              : "desc" === currentSortState
                                                ? "default"
                                                : "asc";
                                          const updatedSortConfig = {
                                            ...initialSortConfig,
                                            [column]: nextSortState,
                                          };
                                          setSortConfig(updatedSortConfig);
                                          let sortedData = [...filteredData];
                                          if ("default" !== nextSortState)
                                            sortedData = sortedData.sort(
                                              (a, b) =>
                                                "asc" === nextSortState
                                                  ? a[column] > b[column]
                                                    ? 1
                                                    : -1
                                                  : "desc" === nextSortState
                                                    ? a[column] < b[column]
                                                      ? 1
                                                      : -1
                                                    : 0,
                                            );
                                          else if (
                                            Object.values(filterOptions).some(
                                              (options) => options.length > 0,
                                            )
                                          ) {
                                            let filteredOriginalData = [
                                              ...originalDataState,
                                            ];
                                            Object.entries(
                                              filterOptions,
                                            ).forEach(
                                              ([
                                                filterColumn,
                                                selectedValues,
                                              ]) => {
                                                selectedValues.length > 0 &&
                                                  (filteredOriginalData =
                                                    filteredOriginalData.filter(
                                                      (item) =>
                                                        selectedValues.includes(
                                                          String(
                                                            item[filterColumn],
                                                          ),
                                                        ),
                                                    ));
                                              },
                                            ),
                                              (sortedData =
                                                filteredOriginalData.sort(
                                                  (a, b) =>
                                                    a[column] > b[column]
                                                      ? 1
                                                      : a[column] < b[column]
                                                        ? -1
                                                        : 0,
                                                ));
                                          } else
                                            sortedData = [...originalDataState];
                                          setFilteredData(sortedData);
                                        })(column),
                                      children: [
                                        column,
                                        (0, jsx_runtime.jsx)("div", {
                                          className: "icon",
                                          children:
                                            "asc" === sortConfig[column]
                                              ? (0, jsx_runtime.jsx)(Icon.A, {
                                                  icon: "arrow_upward",
                                                  size: "sm",
                                                })
                                              : "desc" === sortConfig[column]
                                                ? (0, jsx_runtime.jsx)(Icon.A, {
                                                    icon: "arrow_downward",
                                                    size: "sm",
                                                  })
                                                : (0, jsx_runtime.jsx)(Icon.A, {
                                                    icon: "swap_vert",
                                                    size: "sm",
                                                  }),
                                        }),
                                      ],
                                    },
                                    columnIndex,
                                  ),
                                ),
                              ],
                            }),
                            filteredData
                              .slice(indexOfFirstItem, indexOfLastItem)
                              .map((row) =>
                                (0, jsx_runtime.jsxs)("div", {
                                  className: "data-table-wrapper",
                                  children: [
                                    (0, jsx_runtime.jsxs)(
                                      "div",
                                      {
                                        className: "data-table-content-body",
                                        style: calculateGridTemplate(
                                          selectable,
                                          expandable,
                                        ),
                                        children: [
                                          expandable &&
                                            (0, jsx_runtime.jsx)(
                                              "div",
                                              {
                                                className:
                                                  "data-table-content-body-expandable " +
                                                  (expandedRows.includes(row.id)
                                                    ? "up"
                                                    : "down"),
                                                children: (0, jsx_runtime.jsx)(
                                                  ButtonIcon.A,
                                                  {
                                                    size: "md",
                                                    buttonType: "plain",
                                                    typeIcon:
                                                      "keyboard_arrow_down",
                                                    variant: "primary",
                                                    onClick: () => {
                                                      return (
                                                        (rowId = row.id),
                                                        void (expandedRows.includes(
                                                          rowId,
                                                        )
                                                          ? (setExpandedRows(
                                                              expandedRows.filter(
                                                                (id) =>
                                                                  id !== rowId,
                                                              ),
                                                            ),
                                                            setAllItemsExpanded(
                                                              !1,
                                                            ))
                                                          : (setExpandedRows([
                                                              ...expandedRows,
                                                              rowId,
                                                            ]),
                                                            expandedRows.length +
                                                              1 ===
                                                              filteredData.length &&
                                                              setAllItemsExpanded(
                                                                !0,
                                                              )))
                                                      );
                                                      var rowId;
                                                    },
                                                  },
                                                ),
                                              },
                                              row.id,
                                            ),
                                          selectable &&
                                            (0, jsx_runtime.jsx)(
                                              "div",
                                              {
                                                className:
                                                  "data-table-content-body-checkbox",
                                                style:
                                                  calculateLeftToCheckBox(
                                                    expandable,
                                                  ),
                                                children: (0, jsx_runtime.jsx)(
                                                  InputCheckbox.A,
                                                  {
                                                    modelValue:
                                                      selectedRows.includes(
                                                        row.id,
                                                      ),
                                                    onUpdate: () => {
                                                      return (
                                                        (rowId = row.id),
                                                        void (selectedRows.includes(
                                                          rowId,
                                                        )
                                                          ? (setSelectedRows(
                                                              selectedRows.filter(
                                                                (id) =>
                                                                  id !== rowId,
                                                              ),
                                                            ),
                                                            setSelectAll(!1))
                                                          : (setSelectedRows([
                                                              ...selectedRows,
                                                              rowId,
                                                            ]),
                                                            isAllSelected() &&
                                                              setSelectAll(!0)))
                                                      );
                                                      var rowId;
                                                    },
                                                  },
                                                ),
                                              },
                                              row.id,
                                            ),
                                          columns.map((_, columnIndex) =>
                                            (0, jsx_runtime.jsx)(
                                              "div",
                                              {
                                                className:
                                                  "fixed " +
                                                  (0 === columnIndex
                                                    ? "sticky-first-column"
                                                    : ""),
                                                style: calculateLeft(
                                                  selectable,
                                                  expandable,
                                                ),
                                                children: (0, jsx_runtime.jsx)(
                                                  "div",
                                                  {
                                                    children: (0,
                                                    jsx_runtime.jsx)(
                                                      "div",
                                                      {
                                                        className: "td",
                                                        children:
                                                          row[
                                                            columns[columnIndex]
                                                          ],
                                                      },
                                                      row.id,
                                                    ),
                                                  },
                                                  row.id,
                                                ),
                                              },
                                              columnIndex,
                                            ),
                                          ),
                                        ],
                                      },
                                      row.id,
                                    ),
                                    expandedRows.includes(row.id) &&
                                      expandedData &&
                                      (0, jsx_runtime.jsxs)("div", {
                                        className:
                                          "data-table-content-expandable",
                                        children: [
                                          (0, jsx_runtime.jsx)("div", {
                                            className: "space-expanded-content",
                                          }),
                                          (0, jsx_runtime.jsx)("div", {
                                            className: "expanded-content",
                                            children: expandedData
                                              .filter(
                                                (expandedItem) =>
                                                  expandedItem.id === row.id,
                                              )
                                              .map((expandedItem) =>
                                                (0, jsx_runtime.jsx)(
                                                  "div",
                                                  {
                                                    children: Object.keys(
                                                      expandedItem,
                                                    )
                                                      .filter(
                                                        (key) => "id" !== key,
                                                      )
                                                      .map((key) =>
                                                        (0, jsx_runtime.jsx)(
                                                          "div",
                                                          {
                                                            children:
                                                              expandedItem[key],
                                                          },
                                                          key,
                                                        ),
                                                      ),
                                                  },
                                                  expandedItem.id,
                                                ),
                                              ),
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              ),
                          ],
                        })
                      : hasSelectedFilters || searchTerm
                        ? (0, jsx_runtime.jsx)("div", {
                            className: "render-no-data-message",
                            children: (0, jsx_runtime.jsx)(EmptyState.A, {
                              icon: "search_off",
                              title: titleNoDataFilteredMessage,
                              description: descriptionNoDataFilteredMessage,
                              buttonContentPrimary:
                                labelButtonNoDataFilteredMessage,
                              onClickActionPrimary: handleClearFilters,
                            }),
                          })
                        : (0, jsx_runtime.jsx)("div", {
                            className: "render-no-data-message",
                            children: (0, jsx_runtime.jsx)(EmptyState.A, {
                              icon: "search_off",
                              title: titleNoDataMessage,
                              description: descriptionNoDataMessage,
                            }),
                          }),
                }),
                (0, jsx_runtime.jsx)("div", {
                  className: "data-table-footer",
                  children: (0, jsx_runtime.jsx)(Pagination.A, {
                    label,
                    variant: "leftLabel",
                    onClickRight: () => {
                      setCurrentPage((prevPage) => {
                        const nextPage = prevPage + 1;
                        return nextPage > totalPages ? prevPage : nextPage;
                      });
                    },
                    onClickLeft: () => {
                      setCurrentPage((prevPage) => {
                        const newPage = prevPage - 1;
                        return newPage < 1 ? prevPage : newPage;
                      });
                    },
                  }),
                }),
              ],
            }),
          });
        },
        components_DataTable_DataTable = DataTable_DataTable_DataTable;
      try {
        (DataTable_DataTable_DataTable.displayName = "DataTable"),
          (DataTable_DataTable_DataTable.__docgenInfo = {
            description: "",
            displayName: "DataTable",
            props: {
              columns: {
                defaultValue: null,
                description: "",
                name: "columns",
                required: !0,
                type: { name: "string[]" },
              },
              data: {
                defaultValue: null,
                description: "",
                name: "data",
                required: !0,
                type: { name: "{ [key: string]: any; id: string; }[]" },
              },
              expandedData: {
                defaultValue: null,
                description: "",
                name: "expandedData",
                required: !1,
                type: { name: "{ [key: string]: ReactNode; id: string; }[]" },
              },
              selectable: {
                defaultValue: null,
                description: "",
                name: "selectable",
                required: !1,
                type: { name: "boolean" },
              },
              expandable: {
                defaultValue: null,
                description: "",
                name: "expandable",
                required: !1,
                type: { name: "boolean" },
              },
              itemPerPage: {
                defaultValue: null,
                description: "",
                name: "itemPerPage",
                required: !0,
                type: { name: "number" },
              },
              pagesText: {
                defaultValue: null,
                description: "",
                name: "pagesText",
                required: !0,
                type: { name: "string" },
              },
              inputPlaceholder: {
                defaultValue: null,
                description: "",
                name: "inputPlaceholder",
                required: !0,
                type: { name: "string" },
              },
              typeIconSecondButton: {
                defaultValue: null,
                description: "",
                name: "typeIconSecondButton",
                required: !0,
                type: { name: "string" },
              },
              labelSecondButton: {
                defaultValue: null,
                description: "",
                name: "labelSecondButton",
                required: !0,
                type: { name: "string" },
              },
              selectableLabelSecondButton: {
                defaultValue: null,
                description: "",
                name: "selectableLabelSecondButton",
                required: !0,
                type: { name: "string" },
              },
              selectableIconSecondButton: {
                defaultValue: null,
                description: "",
                name: "selectableIconSecondButton",
                required: !0,
                type: { name: "string" },
              },
              filters: {
                defaultValue: null,
                description: "",
                name: "filters",
                required: !1,
                type: { name: "{ [key: string]: string[]; }" },
              },
              asideTitle: {
                defaultValue: null,
                description: "",
                name: "asideTitle",
                required: !0,
                type: { name: "string" },
              },
              firstButtonLabelAside: {
                defaultValue: null,
                description: "",
                name: "firstButtonLabelAside",
                required: !0,
                type: { name: "string" },
              },
              secondButtonLabelAside: {
                defaultValue: null,
                description: "",
                name: "secondButtonLabelAside",
                required: !0,
                type: { name: "string" },
              },
              titleNoDataMessage: {
                defaultValue: null,
                description: "",
                name: "titleNoDataMessage",
                required: !0,
                type: { name: "string" },
              },
              descriptionNoDataMessage: {
                defaultValue: null,
                description: "",
                name: "descriptionNoDataMessage",
                required: !0,
                type: { name: "string" },
              },
              titleNoDataFilteredMessage: {
                defaultValue: null,
                description: "",
                name: "titleNoDataFilteredMessage",
                required: !0,
                type: { name: "string" },
              },
              labelButtonNoDataFilteredMessage: {
                defaultValue: null,
                description: "",
                name: "labelButtonNoDataFilteredMessage",
                required: !0,
                type: { name: "string" },
              },
              descriptionNoDataFilteredMessage: {
                defaultValue: null,
                description: "",
                name: "descriptionNoDataFilteredMessage",
                required: !0,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/DataTable/DataTable.tsx#DataTable"
            ] = {
              docgenInfo: DataTable_DataTable_DataTable.__docgenInfo,
              name: "DataTable",
              path: "src/app/components/DataTable/DataTable.tsx#DataTable",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_require__("./src/app/styles.scss");
      var dist = __webpack_require__(
        "./node_modules/@storybook/blocks/dist/index.mjs",
      );
      const DataTable_stories = {
          title: "Components/Data Table",
          component: components_DataTable_DataTable,
          parameters: {
            layout: "padded",
            docs: {
              page: () =>
                (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                  children: [
                    (0, jsx_runtime.jsx)(dist.hE, {}),
                    (0, jsx_runtime.jsx)(dist.Pd, { children: "Component" }),
                    (0, jsx_runtime.jsxs)("p", {
                      children: [
                        "The ",
                        (0, jsx_runtime.jsx)("strong", {
                          children: "Data table",
                        }),
                        " help organize and display information in an easy-to-understand way. You can use filters and arrange the content to analyze and take action.",
                      ],
                    }),
                    (0, jsx_runtime.jsx)(dist.Tn, {}),
                    (0, jsx_runtime.jsx)(dist.H2, {}),
                    (0, jsx_runtime.jsx)(dist.om, {}),
                  ],
                }),
            },
          },
          argTypes: {
            expandable: {
              description: "Enables expandable rows in the data table.",
              control: { type: "boolean" },
              defaultValue: !1,
              table: { category: "Behavior" },
            },
            selectable: {
              description: "Enables selectable rows in the data table.",
              control: { type: "boolean" },
              defaultValue: !1,
              table: { category: "Behavior" },
            },
            itemPerPage: {
              description: "Number of items to be displayed per page.",
              control: { type: "number" },
              defaultValue: 4,
              table: { category: "Pagination" },
            },
            pagesText: {
              description: "Text to be displayed for pagination.",
              control: { type: "text" },
              defaultValue: "Page",
              table: { category: "Pagination" },
            },
            inputPlaceholder: {
              description: "Placeholder text for the search input.",
              control: { type: "text" },
              defaultValue: "Search",
              table: { category: "Search" },
            },
            typeIconFirstButton: {
              description: "Icon type for the first button.",
              control: { type: "text" },
              defaultValue: "order",
              table: { category: "Buttons" },
            },
            typeIconSecondButton: {
              description: "Icon type for the second button.",
              control: { type: "text" },
              defaultValue: "filter_alt",
              table: { category: "Buttons" },
            },
            labelFirstButton: {
              description: "Label for the first button.",
              control: { type: "text" },
              defaultValue: "Order By",
              table: { category: "Buttons" },
            },
            labelSecondButton: {
              description: "Label for the second button.",
              control: { type: "text" },
              defaultValue: "Filter By",
              table: { category: "Buttons" },
            },
            onClickFirstButton: {
              description: "Click handler for the first button.",
              action: "clicked first button",
              table: { category: "Events" },
            },
            onClickSecondButton: {
              description: "Click handler for the second button.",
              action: "clicked second button",
              table: { category: "Events" },
            },
            selectableLabelFirstButton: {
              description:
                "Label for the first button when selectable is enabled.",
              control: { type: "text" },
              defaultValue: "Select",
              table: { category: "Selectable" },
            },
            selectableLabelSecondButton: {
              description:
                "Label for the second button when selectable is enabled.",
              control: { type: "text" },
              defaultValue: "Delete",
              table: { category: "Selectable" },
            },
            selectableOnClickFirstButton: {
              description:
                "Click handler for the first button when selectable is enabled.",
              action: "clicked selectable first button",
              table: { category: "Events" },
            },
            selectableOnClickSecondButton: {
              description:
                "Click handler for the second button when selectable is enabled.",
              action: "clicked selectable second button",
              table: { category: "Events" },
            },
            firstButtonLabelAside: {
              description: "Label for the first button in the aside section.",
              control: { type: "text" },
              defaultValue: "Apply",
              table: { category: "Aside" },
            },
            secondButtonLabelAside: {
              description: "Label for the second button in the aside section.",
              control: { type: "text" },
              defaultValue: "Cancel",
              table: { category: "Aside" },
            },
            titleNoDataMessage: {
              description: "Title for the no data message.",
              control: { type: "text" },
              defaultValue: "No Data Available",
              table: { category: "Messages" },
            },
            labelButtonNoDataFilteredMessage: {
              description:
                "Label for the button in the no data filtered message.",
              control: { type: "text" },
              defaultValue: "Remove filters",
              table: { category: "Messages" },
            },
            descriptionNoDataMessage: {
              description: "Description for the no data message.",
              control: { type: "text" },
              defaultValue:
                "This message indicates that there is currently no data present in the table. Please check back later or try refreshing the page.",
              table: { category: "Messages" },
            },
            asideTitle: {
              description: "Title for the aside section.",
              control: { type: "text" },
              defaultValue: "Filters",
              table: { category: "Aside" },
            },
            selectableIconFirstButton: {
              description:
                "Icon type for the first button when selectable is enabled.",
              control: { type: "text" },
              defaultValue: "select",
              table: { category: "Selectable" },
            },
            selectableIconSecondButton: {
              description:
                "Icon type for the second button when selectable is enabled.",
              control: { type: "text" },
              defaultValue: "delete",
              table: { category: "Selectable" },
            },
            filters: {
              description: "Available filters for the data table.",
              control: { type: "object" },
              defaultValue: {},
              table: { category: "Filters" },
            },
            columns: {
              description: "Columns to be displayed in the data table.",
              control: { type: "object" },
              defaultValue: ["Name", "Age", "Role", "Experience", "Company"],
              table: { category: "Data" },
            },
            data: {
              description: "Data to be displayed in the data table.",
              control: { type: "object" },
              defaultValue: [
                {
                  id: "1",
                  Name: "David",
                  Age: "25",
                  Role: "Developer",
                  Experience: "4 years",
                  Company: "Google",
                },
                {
                  id: "2",
                  Name: "Maria",
                  Age: "30",
                  Role: "Designer",
                  Experience: "1 year",
                  Company: "Microsoft",
                },
                {
                  id: "3",
                  Name: "Carlos",
                  Age: "30",
                  Role: "Data Analyst",
                  Experience: "1 month",
                  Company: "Netflix",
                },
                {
                  id: "4",
                  Name: "Roberto",
                  Age: "21",
                  Role: "Product Owner",
                  Experience: "2 years",
                  Company: "Instagram",
                },
                {
                  id: "5",
                  Name: "Juliana",
                  Age: "27",
                  Role: "Software Engineer",
                  Experience: "3 years",
                  Company: "Amazon",
                },
                {
                  id: "6",
                  Name: "Ana",
                  Age: "29",
                  Role: "UX Designer",
                  Experience: "2 years",
                  Company: "Apple",
                },
                {
                  id: "7",
                  Name: "Pedro",
                  Age: "26",
                  Role: "Data Scientist",
                  Experience: "6 months",
                  Company: "Facebook",
                },
                {
                  id: "8",
                  Name: "Mariana",
                  Age: "24",
                  Role: "Project Manager",
                  Experience: "1 year",
                  Company: "Twitter",
                },
              ],
              table: { category: "Data" },
            },
            expandedData: {
              description: "Expanded data to be displayed in the data table.",
              control: { type: "object" },
              defaultValue: [
                { id: "1", content: "First Content" },
                { id: "2", content: "Second Content" },
                { id: "3", content: "Third Content" },
                { id: "4", content: "Fourth Content" },
                { id: "5", content: "Fifth Content" },
                { id: "6", content: "Sixth Content" },
                { id: "7", content: "Seventh Content" },
                { id: "8", content: "Eighth Content" },
              ],
              table: { category: "Data" },
            },
            descriptionNoDataFilteredMessage: {
              description: "Description for the no data filtered message.",
              control: { type: "text" },
              defaultValue:
                "This option does not exist in your store, remove the filter and try again",
              table: { category: "Messages" },
            },
          },
        },
        Template = (args) =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)(components_DataTable_DataTable, {
              pagesText: args.pagesText,
              titleNoDataFilteredMessage: args.titleNoDataFilteredMessage,
              labelButtonNoDataFilteredMessage:
                args.labelButtonNoDataFilteredMessage,
              descriptionNoDataFilteredMessage:
                args.descriptionNoDataFilteredMessage,
              filters: args.filters,
              firstButtonLabelAside: args.firstButtonLabelAside,
              secondButtonLabelAside: args.secondButtonLabelAside,
              typeIconSecondButton: args.typeIconSecondButton,
              selectableLabelSecondButton: args.selectableLabelSecondButton,
              labelSecondButton: args.labelSecondButton,
              inputPlaceholder: args.inputPlaceholder,
              itemPerPage: args.itemPerPage,
              columns: args.columns,
              data: args.data,
              selectable: args.selectable,
              expandable: args.expandable,
              expandedData: args.expandedData,
              descriptionNoDataMessage: args.descriptionNoDataMessage,
              titleNoDataMessage: args.titleNoDataMessage,
              asideTitle: args.asideTitle,
              selectableIconSecondButton: args.selectableIconSecondButton,
            }),
          }),
        columns = ["Name", "Age", "Role", "Experience", "Company"],
        data = [
          {
            id: "1",
            Name: "David",
            Age: "25",
            Role: "Developer",
            Experience: "4 years",
            Company: "Google",
          },
          {
            id: "2",
            Name: "Maria",
            Age: "30",
            Role: "Designer",
            Experience: "1 year",
            Company: "Microsoft",
          },
          {
            id: "3",
            Name: "Carlos",
            Age: "30",
            Role: "Data Analyst",
            Experience: "1 month",
            Company: "Netflix",
          },
          {
            id: "4",
            Name: "Roberto",
            Age: "21",
            Role: "Product Owner",
            Experience: "2 years",
            Company: "Instagram",
          },
          {
            id: "5",
            Name: "Juliana",
            Age: "27",
            Role: "Software Engineer",
            Experience: "3 years",
            Company: "Amazon",
          },
          {
            id: "6",
            Name: "Ana",
            Age: "29",
            Role: "UX Designer",
            Experience: "2 years",
            Company: "Apple",
          },
          {
            id: "7",
            Name: "Pedro",
            Age: "26",
            Role: "Data Scientist",
            Experience: "6 months",
            Company: "Facebook",
          },
          {
            id: "8",
            Name: "Mariana",
            Age: "24",
            Role: "Project Manager",
            Experience: "1 year",
            Company: "Twitter",
          },
        ],
        expandedData = [
          { id: "1", content: "First Content" },
          { id: "2", content: "Second Content" },
          { id: "3", content: "Third Content" },
          { id: "4", content: "Fourth Content" },
          { id: "5", content: "Fifth Content" },
          { id: "6", content: "Sixth Content" },
          { id: "7", content: "Seventh Content" },
          { id: "8", content: "Eighth Content" },
        ],
        Default = Template.bind({});
      Default.args = {
        itemPerPage: 4,
        pagesText: "Page",
        columns,
        data,
        expandedData,
        selectable: !1,
        expandable: !1,
        inputPlaceholder: "Search",
        labelFirstButton: "Order By",
        labelSecondButton: "Filter By",
        typeIconSecondButton: "filter_alt",
        selectableLabelSecondButton: "Delete",
        selectableIconSecondButton: "delete",
        asideTitle: "Filters",
        firstButtonLabelAside: "Apply",
        secondButtonLabelAside: "Cancel",
        descriptionNoDataFilteredMessage:
          "This option does not exist in your store, remove the filter and try again.",
        labelButtonNoDataFilteredMessage: "Remove filters",
        titleNoDataFilteredMessage: "Your filter did not return any results.",
      };
      const withSelectable = Template.bind({});
      withSelectable.args = {
        itemPerPage: 4,
        pagesText: "Page",
        columns,
        data,
        expandedData,
        selectable: !0,
        expandable: !1,
        inputPlaceholder: "Search",
        labelFirstButton: "Order By",
        labelSecondButton: "Filter By",
        typeIconSecondButton: "filter_alt",
        selectableLabelSecondButton: "Delete",
        selectableIconSecondButton: "delete",
        asideTitle: "Filters",
        firstButtonLabelAside: "Apply",
        secondButtonLabelAside: "Cancel",
        descriptionNoDataFilteredMessage:
          "This option does not exist in your store, remove the filter and try again.",
        labelButtonNoDataFilteredMessage: "Remove filters",
        titleNoDataFilteredMessage: "Your filter did not return any results.",
        titleNoDataMessage: "No Data Available",
        descriptionNoDataMessage:
          "This message indicates that there is currently no data present in the table. Please check back later or try refreshing the page.",
      };
      const withExpandable = Template.bind({});
      withExpandable.args = {
        itemPerPage: 4,
        pagesText: "Page",
        columns,
        data,
        expandedData,
        selectable: !1,
        expandable: !0,
        inputPlaceholder: "Search",
        labelFirstButton: "Order By",
        labelSecondButton: "Filter By",
        typeIconSecondButton: "filter_alt",
        selectableLabelSecondButton: "Delete",
        selectableIconSecondButton: "delete",
        asideTitle: "Filters",
        firstButtonLabelAside: "Apply",
        secondButtonLabelAside: "Cancel",
        descriptionNoDataFilteredMessage:
          "This option does not exist in your store, remove the filter and try again.",
        labelButtonNoDataFilteredMessage: "Remove filters",
        titleNoDataFilteredMessage: "Your filter did not return any results.",
        titleNoDataMessage: "No Data Available",
        descriptionNoDataMessage:
          "This message indicates that there is currently no data present in the table. Please check back later or try refreshing the page.",
      };
      const withSelectableAndWithExpandable = Template.bind({});
      withSelectableAndWithExpandable.args = {
        itemPerPage: 4,
        pagesText: "Page",
        columns,
        data,
        expandedData,
        selectable: !0,
        expandable: !0,
        inputPlaceholder: "Search",
        labelFirstButton: "Order By",
        labelSecondButton: "Filter By",
        typeIconSecondButton: "filter_alt",
        selectableLabelSecondButton: "Delete",
        selectableIconSecondButton: "delete",
        asideTitle: "Filters",
        firstButtonLabelAside: "Apply",
        secondButtonLabelAside: "Cancel",
        descriptionNoDataFilteredMessage:
          "This option does not exist in your store, remove the filter and try again.",
        labelButtonNoDataFilteredMessage: "Remove filters",
        titleNoDataFilteredMessage: "Your filter did not return any results.",
        titleNoDataMessage: "No Data Available",
        descriptionNoDataMessage:
          "This message indicates that there is currently no data present in the table. Please check back later or try refreshing the page.",
      };
      const withFilters = Template.bind({});
      withFilters.args = {
        filters: {},
        itemPerPage: 4,
        pagesText: "Page",
        columns,
        data,
        expandedData,
        selectable: !0,
        expandable: !0,
        inputPlaceholder: "Search",
        labelFirstButton: "Order By",
        labelSecondButton: "Filter By",
        typeIconSecondButton: "filter_alt",
        selectableLabelSecondButton: "Delete",
        selectableIconSecondButton: "delete",
        asideTitle: "Filters",
        firstButtonLabelAside: "Apply",
        secondButtonLabelAside: "Cancel",
        descriptionNoDataFilteredMessage:
          "This option does not exist in your store, remove the filter and try again.",
        labelButtonNoDataFilteredMessage: "Remove filters",
        titleNoDataFilteredMessage: "Your filter did not return any results.",
        titleNoDataMessage: "No Data Available",
        descriptionNoDataMessage:
          "This message indicates that there is currently no data present in the table. Please check back later or try refreshing the page.",
      };
      const __namedExportsOrder = [
        "Default",
        "withSelectable",
        "withExpandable",
        "withSelectableAndWithExpandable",
        "withFilters",
      ];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "args => {\n  return <>\r\n      <DataTable pagesText={args.pagesText} titleNoDataFilteredMessage={args.titleNoDataFilteredMessage} labelButtonNoDataFilteredMessage={args.labelButtonNoDataFilteredMessage} descriptionNoDataFilteredMessage={args.descriptionNoDataFilteredMessage} filters={args.filters} firstButtonLabelAside={args.firstButtonLabelAside} secondButtonLabelAside={args.secondButtonLabelAside} typeIconSecondButton={args.typeIconSecondButton} selectableLabelSecondButton={args.selectableLabelSecondButton} labelSecondButton={args.labelSecondButton} inputPlaceholder={args.inputPlaceholder} itemPerPage={args.itemPerPage} columns={args.columns} data={args.data} selectable={args.selectable} expandable={args.expandable} expandedData={args.expandedData} descriptionNoDataMessage={args.descriptionNoDataMessage} titleNoDataMessage={args.titleNoDataMessage} asideTitle={args.asideTitle} selectableIconSecondButton={args.selectableIconSecondButton} />\r\n    </>;\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (withSelectable.parameters = {
          ...withSelectable.parameters,
          docs: {
            ...withSelectable.parameters?.docs,
            source: {
              originalSource:
                "args => {\n  return <>\r\n      <DataTable pagesText={args.pagesText} titleNoDataFilteredMessage={args.titleNoDataFilteredMessage} labelButtonNoDataFilteredMessage={args.labelButtonNoDataFilteredMessage} descriptionNoDataFilteredMessage={args.descriptionNoDataFilteredMessage} filters={args.filters} firstButtonLabelAside={args.firstButtonLabelAside} secondButtonLabelAside={args.secondButtonLabelAside} typeIconSecondButton={args.typeIconSecondButton} selectableLabelSecondButton={args.selectableLabelSecondButton} labelSecondButton={args.labelSecondButton} inputPlaceholder={args.inputPlaceholder} itemPerPage={args.itemPerPage} columns={args.columns} data={args.data} selectable={args.selectable} expandable={args.expandable} expandedData={args.expandedData} descriptionNoDataMessage={args.descriptionNoDataMessage} titleNoDataMessage={args.titleNoDataMessage} asideTitle={args.asideTitle} selectableIconSecondButton={args.selectableIconSecondButton} />\r\n    </>;\n}",
              ...withSelectable.parameters?.docs?.source,
            },
          },
        }),
        (withExpandable.parameters = {
          ...withExpandable.parameters,
          docs: {
            ...withExpandable.parameters?.docs,
            source: {
              originalSource:
                "args => {\n  return <>\r\n      <DataTable pagesText={args.pagesText} titleNoDataFilteredMessage={args.titleNoDataFilteredMessage} labelButtonNoDataFilteredMessage={args.labelButtonNoDataFilteredMessage} descriptionNoDataFilteredMessage={args.descriptionNoDataFilteredMessage} filters={args.filters} firstButtonLabelAside={args.firstButtonLabelAside} secondButtonLabelAside={args.secondButtonLabelAside} typeIconSecondButton={args.typeIconSecondButton} selectableLabelSecondButton={args.selectableLabelSecondButton} labelSecondButton={args.labelSecondButton} inputPlaceholder={args.inputPlaceholder} itemPerPage={args.itemPerPage} columns={args.columns} data={args.data} selectable={args.selectable} expandable={args.expandable} expandedData={args.expandedData} descriptionNoDataMessage={args.descriptionNoDataMessage} titleNoDataMessage={args.titleNoDataMessage} asideTitle={args.asideTitle} selectableIconSecondButton={args.selectableIconSecondButton} />\r\n    </>;\n}",
              ...withExpandable.parameters?.docs?.source,
            },
          },
        }),
        (withSelectableAndWithExpandable.parameters = {
          ...withSelectableAndWithExpandable.parameters,
          docs: {
            ...withSelectableAndWithExpandable.parameters?.docs,
            source: {
              originalSource:
                "args => {\n  return <>\r\n      <DataTable pagesText={args.pagesText} titleNoDataFilteredMessage={args.titleNoDataFilteredMessage} labelButtonNoDataFilteredMessage={args.labelButtonNoDataFilteredMessage} descriptionNoDataFilteredMessage={args.descriptionNoDataFilteredMessage} filters={args.filters} firstButtonLabelAside={args.firstButtonLabelAside} secondButtonLabelAside={args.secondButtonLabelAside} typeIconSecondButton={args.typeIconSecondButton} selectableLabelSecondButton={args.selectableLabelSecondButton} labelSecondButton={args.labelSecondButton} inputPlaceholder={args.inputPlaceholder} itemPerPage={args.itemPerPage} columns={args.columns} data={args.data} selectable={args.selectable} expandable={args.expandable} expandedData={args.expandedData} descriptionNoDataMessage={args.descriptionNoDataMessage} titleNoDataMessage={args.titleNoDataMessage} asideTitle={args.asideTitle} selectableIconSecondButton={args.selectableIconSecondButton} />\r\n    </>;\n}",
              ...withSelectableAndWithExpandable.parameters?.docs?.source,
            },
          },
        }),
        (withFilters.parameters = {
          ...withFilters.parameters,
          docs: {
            ...withFilters.parameters?.docs,
            source: {
              originalSource:
                "args => {\n  return <>\r\n      <DataTable pagesText={args.pagesText} titleNoDataFilteredMessage={args.titleNoDataFilteredMessage} labelButtonNoDataFilteredMessage={args.labelButtonNoDataFilteredMessage} descriptionNoDataFilteredMessage={args.descriptionNoDataFilteredMessage} filters={args.filters} firstButtonLabelAside={args.firstButtonLabelAside} secondButtonLabelAside={args.secondButtonLabelAside} typeIconSecondButton={args.typeIconSecondButton} selectableLabelSecondButton={args.selectableLabelSecondButton} labelSecondButton={args.labelSecondButton} inputPlaceholder={args.inputPlaceholder} itemPerPage={args.itemPerPage} columns={args.columns} data={args.data} selectable={args.selectable} expandable={args.expandable} expandedData={args.expandedData} descriptionNoDataMessage={args.descriptionNoDataMessage} titleNoDataMessage={args.titleNoDataMessage} asideTitle={args.asideTitle} selectableIconSecondButton={args.selectableIconSecondButton} />\r\n    </>;\n}",
              ...withFilters.parameters?.docs?.source,
            },
          },
        });
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/DataTable/DataTable.scss":
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
          ".aside-filter .aside-title-col{color:var(--s-color-content-light);font:var(--s-typography-heading-x-small);text-transform:uppercase}.aside-filter .aside-content-col{display:flex;flex-direction:column;gap:var(--s-spacing-xx-small)}.render-no-data-message{margin:var(--s-spacing-xx-large) var(--s-spacing-x-small)}.data-table-root{display:flex;overflow:auto;flex-direction:column;border:var(--s-border-width-hairline) solid var(--s-color-border-default);border-radius:var(--s-border-radius-medium);box-shadow:var(--s-shadow-card);background-color:var(--s-color-fill-default)}.data-table-root .tags{border-top:1px solid var(--s-color-border-default);padding:var(--s-spacing-x-small) var(--s-spacing-x-small) var(--s-spacing-xx-small) var(--s-spacing-x-small);display:flex;flex-direction:row;gap:var(--s-spacing-nano);overflow-x:scroll}.data-table-root .tags::-webkit-scrollbar{height:var(--s-spacing-nano);border-radius:12px;background-color:inherit}.data-table-root .tags::-webkit-scrollbar-thumb{background:var(--s-color-fill-default-light);border-radius:12px}.data-table-root .data-table-header-selected-items{background-color:var(--s-color-fill-highlight);border-top-left-radius:7px;border-top-right-radius:7px;display:flex;align-items:center;justify-content:space-between;padding:var(--s-spacing-x-small) var(--s-spacing-small)}.data-table-root .data-table-header-selected-items .data-table-header-selected-items-message{font:var(--s-typography-paragraph-regular);color:var(--s-color-content-on-color)}.data-table-root .data-table-header-selected-items .data-table-header-selected-items-buttons{display:flex;gap:var(--s-spacing-xx-small);align-items:center}.data-table-root .data-table-header{display:flex;padding:var(--s-spacing-x-small);gap:var(--s-spacing-xx-small)}.data-table-root .data-table-header .data-table-header-actions{display:flex;gap:var(--s-spacing-xx-small)}.data-table-root .data-table-content{display:grid;grid-template-rows:auto;overflow-x:scroll}.data-table-root .data-table-content.overflowed .data-table-content-header-expandable{position:sticky;left:0;z-index:2}.data-table-root .data-table-content.overflowed .data-table-content-header-checkbox{position:sticky;left:56px;z-index:2}.data-table-root .data-table-content.overflowed .th.sticky-first-column{position:sticky;z-index:2;box-shadow:6px 0px 8px 0px rgba(0,0,0,.08)}.data-table-root .data-table-content.overflowed .data-table-content-body .fixed.sticky-first-column{position:sticky;z-index:2;height:100%;display:flex;align-items:center;box-shadow:6px 0px 8px 0px rgba(0,0,0,.04)}.data-table-root .data-table-content.overflowed .data-table-content-body-expandable{position:sticky;left:0;z-index:2}.data-table-root .data-table-content.overflowed .data-table-content-body-checkbox{position:sticky;left:56px;z-index:2}.data-table-root .data-table-content::-webkit-scrollbar{height:0px;border-radius:12px}.data-table-root .data-table-content::-webkit-scrollbar-thumb{height:4px;background:var(--s-color-fill-default-light);border-radius:12px}.data-table-root .data-table-content .data-table-content-header{border-top:1px solid var(--s-color-border-default);display:grid;grid-auto-flow:column;grid-template-columns:repeat(auto-fit, minmax(120px, 1fr));background-color:var(--s-color-fill-default-light)}.data-table-root .data-table-content .data-table-content-header .th{background-color:var(--s-color-fill-default-light);padding:var(--s-spacing-xx-small) var(--s-spacing-small);font:var(--s-typography-paragraph-regular);font-weight:var(--s-font-weight-medium);color:var(--s-color-content-light);white-space:nowrap;display:flex;justify-content:space-between;flex-direction:row;align-items:center;cursor:pointer;user-select:none;box-sizing:border-box;height:40px;border:1px solid rgba(0,0,0,0)}.data-table-root .data-table-content .data-table-content-header .th .icon{display:flex;opacity:0;transition:.2s opacity ease-in}.data-table-root .data-table-content .data-table-content-header .th:hover{background-color:var(--s-color-fill-default-hover);border:1px solid}.data-table-root .data-table-content .data-table-content-header .th:hover .icon{color:var(--s-color-content-default);opacity:1}.data-table-root .data-table-content .data-table-content-header .data-table-content-header-checkbox{background-color:var(--s-color-fill-default-light);width:56px;align-items:center;display:flex;justify-content:center;height:40px}.data-table-root .data-table-content .data-table-content-header .data-table-content-header-expandable{background-color:var(--s-color-fill-default-light);width:56px;align-items:center;display:flex;justify-content:center;height:40px}.data-table-root .data-table-content .data-table-content-header .data-table-content-header-expandable.down .button-icon:hover{background-color:unset}.data-table-root .data-table-content .data-table-content-header .data-table-content-header-expandable.down .button-icon .material-symbols-outlined{transition:.3s all ease-in-out;transform:rotate(0deg)}.data-table-root .data-table-content .data-table-content-header .data-table-content-header-expandable.up .button-icon:hover{background-color:unset}.data-table-root .data-table-content .data-table-content-header .data-table-content-header-expandable.up .button-icon .material-symbols-outlined{transform:rotate(-180deg);transition:.3s all ease-in-out}.data-table-root .data-table-content .space-expanded-content{height:100%;width:56px}.data-table-root .data-table-content .expanded-content{width:100%;border-top:var(--s-border-width-hairline) solid var(--s-color-border-default);padding:var(--s-spacing-small);font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default)}.data-table-root .data-table-content .data-table-content-body{display:grid;grid-auto-flow:column;grid-template-columns:repeat(auto-fit, minmax(120px, 1fr));width:100%;align-items:center;border-top:var(--s-border-width-hairline) solid var(--s-color-border-default);box-sizing:border-box}.data-table-root .data-table-content .data-table-content-body .td{min-width:120px;padding:var(--s-spacing-small);font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default);height:100%;white-space:nowrap}.data-table-root .data-table-content .data-table-content-body .data-table-content-body-checkbox{width:56px;height:56px;align-items:center;display:flex;justify-content:center;flex-direction:column}.data-table-root .data-table-content .data-table-content-body .data-table-content-body-expandable{width:56px;align-items:center;display:flex;justify-content:center;height:56px}.data-table-root .data-table-content .data-table-content-body .data-table-content-body-expandable.down .button-icon .material-symbols-outlined{transition:.3s all ease-in-out;transform:rotate(0deg)}.data-table-root .data-table-content .data-table-content-body .data-table-content-body-expandable.up .button-icon .material-symbols-outlined{transform:rotate(-180deg);transition:.3s all ease-in-out}.data-table-root .data-table-footer{border-top:var(--s-border-width-hairline) solid var(--s-color-border-default)}.data-table-wrapper .fixed.sticky-first-column,.data-table-wrapper .data-table-content-body-checkbox,.data-table-wrapper .data-table-content-body-expandable{background-color:var(--s-color-fill-default)}.data-table-wrapper:hover{background-color:var(--s-color-fill-default-hover)}.data-table-wrapper:hover .fixed.sticky-first-column,.data-table-wrapper:hover .data-table-content-body-checkbox,.data-table-wrapper:hover .data-table-content-body-expandable{background-color:var(--s-color-fill-default-hover)}.data-table-content-expandable{display:flex}@media screen and (max-width: 490px){.data-table-root .data-table-header-actions{width:100%;gap:var(--s-spacing-xx-small)}.data-table-root .data-table-header-selected-items{border:var(--s-border-width-hairline) solid var(--s-color-border-highlight);flex-direction:column;align-items:start;gap:var(--s-spacing-xx-small);height:112px;box-sizing:border-box;padding:var(--s-spacing-x-small)}.data-table-root .data-table-header-selected-items-message{padding:var(--s-spacing-xx-small) 0}.data-table-root .data-table-header{flex-direction:column;gap:var(--s-spacing-xx-small);padding:var(--s-spacing-x-small)}}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/DataTable/DataTable.scss",
            ],
            names: [],
            mappings:
              "AACE,+BACE,kCAAA,CACA,wCAAA,CACA,wBAAA,CAGF,iCACE,YAAA,CACA,qBAAA,CACA,6BAAA,CAIJ,wBACE,yDAAA,CAGF,iBACE,YAAA,CACA,aAAA,CACA,qBAAA,CACA,yEAAA,CACA,2CAAA,CACA,+BAAA,CACA,4CAAA,CAEA,uBACE,kDAAA,CACA,4GAAA,CAEA,YAAA,CACA,kBAAA,CACA,yBAAA,CACA,iBAAA,CAEA,0CACE,4BAAA,CACA,kBAAA,CACA,wBAAA,CAGF,gDACE,4CAAA,CACA,kBAAA,CAIJ,mDACE,8CAAA,CACA,0BAAA,CACA,2BAAA,CACA,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,uDAAA,CAEA,6FACE,0CAAA,CACA,qCAAA,CAGF,6FACE,YAAA,CACA,6BAAA,CACA,kBAAA,CAIJ,oCACE,YAAA,CACA,gCAAA,CACA,6BAAA,CAEA,+DACE,YAAA,CACA,6BAAA,CAIJ,qCACE,YAAA,CACA,uBAAA,CACA,iBAAA,CAGE,sFACE,eAAA,CACA,MAAA,CACA,SAAA,CAEF,oFACE,eAAA,CACA,SAAA,CACA,SAAA,CAGF,wEACE,eAAA,CACA,SAAA,CACA,0CAAA,CAGF,oGACE,eAAA,CACA,SAAA,CACA,WAAA,CACA,YAAA,CACA,kBAAA,CACA,0CAAA,CAGF,oFACE,eAAA,CACA,MAAA,CACA,SAAA,CAGF,kFACE,eAAA,CACA,SAAA,CACA,SAAA,CAIJ,wDACE,UAAA,CACA,kBAAA,CAGF,8DACE,UAAA,CAEA,4CAAA,CACA,kBAAA,CAGF,gEACE,kDAAA,CACA,YAAA,CACA,qBAAA,CACA,0DAAA,CAIA,kDAAA,CAEA,oEACE,kDAAA,CACA,wDAAA,CACA,0CAAA,CACA,uCAAA,CACA,kCAAA,CACA,kBAAA,CACA,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,kBAAA,CACA,cAAA,CACA,gBAAA,CACA,qBAAA,CACA,WAAA,CACA,8BAAA,CAEA,0EACE,YAAA,CACA,SAAA,CACA,8BAAA,CAGF,0EACE,kDAAA,CACA,gBAAA,CACA,gFACE,oCAAA,CACA,SAAA,CAKN,oGACE,kDAAA,CACA,UAAA,CACA,kBAAA,CACA,YAAA,CACA,sBAAA,CACA,WAAA,CAGF,sGACE,kDAAA,CACA,UAAA,CACA,kBAAA,CACA,YAAA,CACA,sBAAA,CACA,WAAA,CAGE,8HACE,sBAAA,CAGF,mJACE,8BAAA,CACA,sBAAA,CAKF,4HACE,sBAAA,CAGF,iJACE,yBAAA,CACA,8BAAA,CAMR,6DACE,WAAA,CACA,UAAA,CAGF,uDACE,UAAA,CACA,6EAAA,CAEA,8BAAA,CACA,0CAAA,CACA,oCAAA,CAGF,8DACE,YAAA,CACA,qBAAA,CACA,0DAAA,CACA,UAAA,CACA,kBAAA,CACA,6EAAA,CAEA,qBAAA,CAEA,kEACE,eAAA,CACA,8BAAA,CACA,0CAAA,CACA,oCAAA,CACA,WAAA,CACA,kBAAA,CAGF,gGACE,UAAA,CACA,WAAA,CACA,kBAAA,CACA,YAAA,CACA,sBAAA,CACA,qBAAA,CAGF,kGACE,UAAA,CACA,kBAAA,CACA,YAAA,CACA,sBAAA,CACA,WAAA,CAEA,+IACE,8BAAA,CACA,sBAAA,CAGF,6IACE,yBAAA,CACA,8BAAA,CAMR,oCACE,6EAAA,CAMF,6JAGE,4CAAA,CAIJ,0BACE,kDAAA,CAEA,+KAGE,kDAAA,CAIJ,+BACE,YAAA,CAGF,qCAEI,4CACE,UAAA,CACA,6BAAA,CAEF,mDACE,2EAAA,CAEA,qBAAA,CACA,iBAAA,CACA,6BAAA,CACA,YAAA,CACA,qBAAA,CACA,gCAAA,CAEF,2DACE,mCAAA,CAGF,oCACE,qBAAA,CACA,6BAAA,CACA,gCAAA,CAAA",
            sourcesContent: [
              ".aside-filter {\n  .aside-title-col {\n    color: var(--s-color-content-light);\n    font: var(--s-typography-heading-x-small);\n    text-transform: uppercase;\n  }\n\n  .aside-content-col {\n    display: flex;\n    flex-direction: column;\n    gap: var(--s-spacing-xx-small);\n  }\n}\n\n.render-no-data-message {\n  margin: var(--s-spacing-xx-large) var(--s-spacing-x-small);\n}\n\n.data-table-root {\n  display: flex;\n  overflow: auto;\n  flex-direction: column;\n  border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n  border-radius: var(--s-border-radius-medium);\n  box-shadow: var(--s-shadow-card);\n  background-color: var(--s-color-fill-default);\n\n  .tags {\n    border-top: 1px solid var(--s-color-border-default);\n    padding: var(--s-spacing-x-small) var(--s-spacing-x-small)\n      var(--s-spacing-xx-small) var(--s-spacing-x-small);\n    display: flex;\n    flex-direction: row;\n    gap: var(--s-spacing-nano);\n    overflow-x: scroll;\n\n    &::-webkit-scrollbar {\n      height: var(--s-spacing-nano);\n      border-radius: 12px;\n      background-color: inherit;\n    }\n\n    &::-webkit-scrollbar-thumb {\n      background: var(--s-color-fill-default-light);\n      border-radius: 12px;\n    }\n  }\n\n  .data-table-header-selected-items {\n    background-color: var(--s-color-fill-highlight);\n    border-top-left-radius: 7px;\n    border-top-right-radius: 7px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: var(--s-spacing-x-small) var(--s-spacing-small);\n\n    .data-table-header-selected-items-message {\n      font: var(--s-typography-paragraph-regular);\n      color: var(--s-color-content-on-color);\n    }\n\n    .data-table-header-selected-items-buttons {\n      display: flex;\n      gap: var(--s-spacing-xx-small);\n      align-items: center;\n    }\n  }\n\n  .data-table-header {\n    display: flex;\n    padding: var(--s-spacing-x-small);\n    gap: var(--s-spacing-xx-small);\n\n    .data-table-header-actions {\n      display: flex;\n      gap: var(--s-spacing-xx-small);\n    }\n  }\n\n  .data-table-content {\n    display: grid;\n    grid-template-rows: auto;\n    overflow-x: scroll;\n\n    &.overflowed {\n      .data-table-content-header-expandable {\n        position: sticky;\n        left: 0;\n        z-index: 2;\n      }\n      .data-table-content-header-checkbox {\n        position: sticky;\n        left: 56px;\n        z-index: 2;\n      }\n\n      .th.sticky-first-column {\n        position: sticky;\n        z-index: 2;\n        box-shadow: 6px 0px 8px 0px rgba(0, 0, 0, 0.08);\n      }\n\n      .data-table-content-body .fixed.sticky-first-column {\n        position: sticky;\n        z-index: 2;\n        height: 100%;\n        display: flex;\n        align-items: center;\n        box-shadow: 6px 0px 8px 0px rgba(0, 0, 0, 0.04);\n      }\n\n      .data-table-content-body-expandable {\n        position: sticky;\n        left: 0;\n        z-index: 2;\n      }\n\n      .data-table-content-body-checkbox {\n        position: sticky;\n        left: 56px;\n        z-index: 2;\n      }\n    }\n\n    &::-webkit-scrollbar {\n      height: 0px;\n      border-radius: 12px;\n    }\n\n    &::-webkit-scrollbar-thumb {\n      height: 4px;\n\n      background: var(--s-color-fill-default-light);\n      border-radius: 12px;\n    }\n\n    .data-table-content-header {\n      border-top: 1px solid var(--s-color-border-default);\n      display: grid;\n      grid-auto-flow: column;\n      grid-template-columns: repeat(\n        auto-fit,\n        minmax(120px, 1fr)\n      ); /* Define as colunas com tamanho mínimo de 120px e ocupando o máximo de espaço disponível */\n      background-color: var(--s-color-fill-default-light);\n\n      .th {\n        background-color: var(--s-color-fill-default-light);\n        padding: var(--s-spacing-xx-small) var(--s-spacing-small);\n        font: var(--s-typography-paragraph-regular);\n        font-weight: var(--s-font-weight-medium);\n        color: var(--s-color-content-light);\n        white-space: nowrap;\n        display: flex;\n        justify-content: space-between;\n        flex-direction: row;\n        align-items: center;\n        cursor: pointer;\n        user-select: none;\n        box-sizing: border-box;\n        height: 40px;\n        border: 1px solid transparent;\n\n        .icon {\n          display: flex;\n          opacity: 0;\n          transition: 0.2s opacity ease-in;\n        }\n\n        &:hover {\n          background-color: var(--s-color-fill-default-hover);\n          border: 1px solid;\n          .icon {\n            color: var(--s-color-content-default);\n            opacity: 1;\n          }\n        }\n      }\n\n      .data-table-content-header-checkbox {\n        background-color: var(--s-color-fill-default-light);\n        width: 56px;\n        align-items: center;\n        display: flex;\n        justify-content: center;\n        height: 40px;\n      }\n\n      .data-table-content-header-expandable {\n        background-color: var(--s-color-fill-default-light);\n        width: 56px;\n        align-items: center;\n        display: flex;\n        justify-content: center;\n        height: 40px;\n\n        &.down .button-icon {\n          &:hover {\n            background-color: unset;\n          }\n\n          .material-symbols-outlined {\n            transition: 0.3s all ease-in-out;\n            transform: rotate(0deg);\n          }\n        }\n\n        &.up .button-icon {\n          &:hover {\n            background-color: unset;\n          }\n\n          .material-symbols-outlined {\n            transform: rotate(-180deg);\n            transition: 0.3s all ease-in-out;\n          }\n        }\n      }\n    }\n\n    .space-expanded-content {\n      height: 100%;\n      width: 56px;\n    }\n\n    .expanded-content {\n      width: 100%;\n      border-top: var(--s-border-width-hairline) solid\n        var(--s-color-border-default);\n      padding: var(--s-spacing-small);\n      font: var(--s-typography-paragraph-regular);\n      color: var(--s-color-content-default);\n    }\n\n    .data-table-content-body {\n      display: grid;\n      grid-auto-flow: column;\n      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n      width: 100%;\n      align-items: center;\n      border-top: var(--s-border-width-hairline) solid\n        var(--s-color-border-default);\n      box-sizing: border-box;\n\n      .td {\n        min-width: 120px;\n        padding: var(--s-spacing-small);\n        font: var(--s-typography-paragraph-regular);\n        color: var(--s-color-content-default);\n        height: 100%;\n        white-space: nowrap;\n      }\n\n      .data-table-content-body-checkbox {\n        width: 56px;\n        height: 56px;\n        align-items: center;\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n      }\n\n      .data-table-content-body-expandable {\n        width: 56px;\n        align-items: center;\n        display: flex;\n        justify-content: center;\n        height: 56px;\n\n        &.down .button-icon .material-symbols-outlined {\n          transition: 0.3s all ease-in-out;\n          transform: rotate(0deg);\n        }\n\n        &.up .button-icon .material-symbols-outlined {\n          transform: rotate(-180deg);\n          transition: 0.3s all ease-in-out;\n        }\n      }\n    }\n  }\n\n  .data-table-footer {\n    border-top: var(--s-border-width-hairline) solid\n      var(--s-color-border-default);\n  }\n}\n\n.data-table-wrapper {\n  .fixed.sticky-first-column,\n  .data-table-content-body-checkbox,\n  .data-table-content-body-expandable {\n    background-color: var(--s-color-fill-default);\n  }\n}\n\n.data-table-wrapper:hover {\n  background-color: var(--s-color-fill-default-hover);\n\n  .fixed.sticky-first-column,\n  .data-table-content-body-checkbox,\n  .data-table-content-body-expandable {\n    background-color: var(--s-color-fill-default-hover);\n  }\n}\n\n.data-table-content-expandable {\n  display: flex;\n}\n\n@media screen and (max-width: 490px) {\n  .data-table-root {\n    .data-table-header-actions {\n      width: 100%;\n      gap: var(--s-spacing-xx-small);\n    }\n    .data-table-header-selected-items {\n      border: var(--s-border-width-hairline) solid\n        var(--s-color-border-highlight);\n      flex-direction: column;\n      align-items: start;\n      gap: var(--s-spacing-xx-small);\n      height: 112px;\n      box-sizing: border-box;\n      padding: var(--s-spacing-x-small);\n    }\n    .data-table-header-selected-items-message {\n      padding: var(--s-spacing-xx-small) 0;\n    }\n\n    .data-table-header {\n      flex-direction: column;\n      gap: var(--s-spacing-xx-small);\n      padding: var(--s-spacing-x-small);\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/EmptyState/EmptyState.scss":
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
          ".empty-state-root{display:flex;flex-direction:column;align-items:center;width:100%;gap:var(--s-spacing-medium);color:var(--s-color-content-default)}.empty-state-root .empty-state-content{display:flex;align-items:center;gap:var(--s-spacing-xx-small);flex-direction:column;text-align:center}.empty-state-root .empty-state-content h3{color:var(--s-color-content-default)}.empty-state-root .empty-state-content p{color:var(--s-color-content-light)}.empty-state-root .empty-state-footer{display:flex;gap:var(--s-spacing-xx-small)}@media screen and (max-width: 490px){.empty-state-root .empty-state-footer{flex-direction:column}}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/EmptyState/EmptyState.scss",
            ],
            names: [],
            mappings:
              "AAAA,kBACE,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,UAAA,CACA,2BAAA,CACA,oCAAA,CAEA,uCACE,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,qBAAA,CACA,iBAAA,CAEA,0CACE,oCAAA,CAGF,yCACE,kCAAA,CAIJ,sCACE,YAAA,CACA,6BAAA,CAIJ,qCAEI,sCACE,qBAAA,CAAA",
            sourcesContent: [
              ".empty-state-root {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  gap: var(--s-spacing-medium);\n  color: var(--s-color-content-default);\n\n  .empty-state-content {\n    display: flex;\n    align-items: center;\n    gap: var(--s-spacing-xx-small);\n    flex-direction: column;\n    text-align: center;\n\n    h3 {\n      color: var(--s-color-content-default);\n    }\n\n    p {\n      color: var(--s-color-content-light);\n    }\n  }\n\n  .empty-state-footer {\n    display: flex;\n    gap: var(--s-spacing-xx-small);\n  }\n}\n\n@media screen and (max-width: 490px) {\n  .empty-state-root {\n    .empty-state-footer {\n      flex-direction: column;\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
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
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputSearch/InputSearch.scss":
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
          ".input-search-root{box-sizing:border-box;border:var(--s-border-width-hairline) solid var(--s-color-border-default);border-radius:var(--s-border-radius-medium);padding:var(--s-spacing-xx-small) var(--s-spacing-x-small);justify-content:space-between;background-color:var(--s-color-fill-default);color:var(--s-color-content-placeholder);display:flex;align-items:center;width:fit-content;height:40px;cursor:text;box-shadow:0px 1px 2px 0px rgba(14,21,36,.06)}.input-search-root.disabled{cursor:auto;background-color:var(--s-color-fill-disable);color:var(--s-color-content-disable);opacity:.64}.input-search-root.disabled:hover{background-color:var(--s-color-fill-disable);color:var(--s-color-content-disable);border-color:var(--s-color-border-default)}.input-search-root:hover{border:1px solid var(--s-color-border-default-hover)}.input-search-root:focus-within{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid;background-color:var(--s-color-fill-default);color:var(--s-color-content-default)}.input-search-root .input-search{display:flex;align-items:center;justify-content:center;gap:var(--s-spacing-nano)}.input-search-root .input-search input{border:none;background:rgba(0,0,0,0);width:100%;color:var(--s-color-content-default);font:var(--s-typography-paragraph-regular)}.input-search-root .input-search input::placeholder{color:var(--s-color-content-placeholder)}.input-search-root .input-search input:disabled::placeholder{color:var(--s-color-content-disable)}.input-search-root .input-search input:focus-visible{outline:none}.input-search-root .input-search .input-search-button-close{background:none;border:none;cursor:pointer;opacity:0;transition:opacity .3s ease-in-out;display:flex;align-items:center}.input-search-root .input-search .input-search-button-close.visible{opacity:1}.input-search-root .input-search .material-symbols-outlined.md{font-size:20px}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/InputSearch/InputSearch.scss",
            ],
            names: [],
            mappings:
              "AAAA,mBACE,qBAAA,CACA,yEAAA,CACA,2CAAA,CACA,0DAAA,CACA,6BAAA,CACA,4CAAA,CACA,wCAAA,CACA,YAAA,CACA,kBAAA,CACA,iBAAA,CACA,WAAA,CACA,WAAA,CACA,6CAAA,CAEA,4BACE,WAAA,CACA,4CAAA,CACA,oCAAA,CACA,WAAA,CAGF,kCACE,4CAAA,CACA,oCAAA,CACA,0CAAA,CAGF,yBACE,oDAAA,CAGF,gCACE,wCAAA,CACA,6CAAA,CACA,yCAAA,CACA,mBAAA,CACA,4CAAA,CACA,oCAAA,CAGF,iCACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,yBAAA,CAEA,uCACE,WAAA,CACA,wBAAA,CACA,UAAA,CACA,oCAAA,CACA,0CAAA,CAGF,oDACE,wCAAA,CAGF,6DACE,oCAAA,CAGF,qDACE,YAAA,CAGF,4DACE,eAAA,CACA,WAAA,CACA,cAAA,CACA,SAAA,CACA,kCAAA,CACA,YAAA,CACA,kBAAA,CAGF,oEACE,SAAA,CAGF,+DACE,cAAA",
            sourcesContent: [
              ".input-search-root {\n  box-sizing: border-box;\n  border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n  border-radius: var(--s-border-radius-medium);\n  padding: var(--s-spacing-xx-small) var(--s-spacing-x-small);\n  justify-content: space-between;\n  background-color: var(--s-color-fill-default);\n  color: var(--s-color-content-placeholder);\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  height: 40px;\n  cursor: text;\n  box-shadow: 0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n\n  &.disabled {\n    cursor: auto;\n    background-color: var(--s-color-fill-disable);\n    color: var(--s-color-content-disable);\n    opacity: 0.64;\n  }\n\n  &.disabled:hover {\n    background-color: var(--s-color-fill-disable);\n    color: var(--s-color-content-disable);\n    border-color: var(--s-color-border-default);\n  }\n\n  &:hover {\n    border: 1px solid var(--s-color-border-default-hover);\n  }\n\n  &:focus-within {\n    outline-width: var(--s-border-width-thin);\n    outline-color: var(--s-color-border-highlight);\n    outline-offset: var(--s-border-width-thin);\n    outline-style: solid;\n    background-color: var(--s-color-fill-default);\n    color: var(--s-color-content-default);\n  }\n\n  .input-search {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: var(--s-spacing-nano);\n\n    input {\n      border: none;\n      background: transparent;\n      width: 100%;\n      color: var(--s-color-content-default);\n      font: var(--s-typography-paragraph-regular);\n    }\n\n    input::placeholder {\n      color: var(--s-color-content-placeholder);\n    }\n\n    input:disabled::placeholder {\n      color: var(--s-color-content-disable);\n    }\n\n    input:focus-visible {\n      outline: none;\n    }\n\n    .input-search-button-close {\n      background: none;\n      border: none;\n      cursor: pointer;\n      opacity: 0;\n      transition: opacity 0.3s ease-in-out;\n      display: flex;\n      align-items: center;\n    }\n\n    .input-search-button-close.visible {\n      opacity: 1;\n    }\n\n    .material-symbols-outlined.md {\n      font-size: 20px;\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Pagination/Pagination.scss":
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
          ".arrow_back:hover+.arrow_forward{border-left:none;margin-left:0}.arrow_back{display:flex;align-items:center;border-radius:var(--s-border-radius-medium) 0 0 var(--s-border-radius-medium);cursor:pointer;background-color:var(--s-color-fill-default);color:var(--s-color-content-default);border:var(--s-border-width-hairline) solid var(--s-color-border-default);padding:var(--s-spacing-xx-small);box-shadow:0px 1px 2px 0px rgba(14,21,36,.06)}.arrow_back:hover{background-color:var(--s-color-fill-default-hover);border:1px solid var(--s-color-border-default-hover)}.arrow_back:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-hairline);outline-style:solid}.arrow_back:disabled{cursor:auto;opacity:.64;background-color:var(--s-color-fill-disable);color:var(--s-color-content-disable)}.arrow_back:disabled:hover{background-color:var(--s-color-fill-disable);border:1px solid var(--s-color-border-default)}.arrow_forward{margin-left:-1px;cursor:pointer;background-color:var(--s-color-fill-default);color:var(--s-color-content-default);border:var(--s-border-width-hairline) solid var(--s-color-border-default);padding:var(--s-spacing-xx-small);margin-right:-1px;align-items:center;border-radius:0 var(--s-border-radius-medium) var(--s-border-radius-medium) 0;display:flex;box-shadow:0px 1px 2px 0px rgba(14,21,36,.06)}.arrow_forward:hover{background-color:var(--s-color-fill-default-hover);border:1px solid var(--s-color-border-default-hover)}.arrow_forward:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:var(--s-border-width-hairline);outline-style:solid}.arrow_forward:disabled{cursor:auto;opacity:.64;background-color:var(--s-color-fill-disable);color:var(--s-color-content-disable)}.arrow_forward:disabled:hover{background-color:var(--s-color-fill-disable);border:1px solid var(--s-color-border-default)}.Pagination .noLabel,.Pagination .leftLabel,.Pagination .centerLabel{display:flex}.Pagination .leftLabel{padding:var(--s-spacing-small);align-items:center;justify-content:space-between}.Pagination .leftLabel p{font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default)}.Pagination .leftLabel div{display:flex}.Pagination .centerLabel{justify-content:space-between;padding:var(--s-spacing-small);align-items:center}.Pagination .centerLabel .arrow_back{border-radius:var(--s-border-radius-medium)}.Pagination .centerLabel .arrow_forward{border-radius:var(--s-border-radius-medium)}.Pagination .centerLabel p{font:var(--s-typography-paragraph-regular);color:var --s-color-content-default}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/Pagination/Pagination.scss",
            ],
            names: [],
            mappings:
              "AAAA,iCACE,gBAAA,CACA,aAAA,CAGF,YACE,YAAA,CACA,kBAAA,CACA,6EAAA,CACA,cAAA,CACA,4CAAA,CACA,oCAAA,CACA,yEAAA,CACA,iCAAA,CACA,6CAAA,CAEA,kBACE,kDAAA,CACA,oDAAA,CAGF,0BACE,wCAAA,CACA,2CAAA,CACA,6CAAA,CACA,mBAAA,CAGF,qBACE,WAAA,CACA,WAAA,CACA,4CAAA,CACA,oCAAA,CAEA,2BACE,4CAAA,CACA,8CAAA,CAKN,eACE,gBAAA,CACA,cAAA,CACA,4CAAA,CACA,oCAAA,CACA,yEAAA,CACA,iCAAA,CACA,iBAAA,CACA,kBAAA,CACA,6EAAA,CACA,YAAA,CACA,6CAAA,CAEA,qBACE,kDAAA,CACA,oDAAA,CAGF,6BACE,wCAAA,CACA,6CAAA,CACA,6CAAA,CACA,mBAAA,CAGF,wBACE,WAAA,CACA,WAAA,CACA,4CAAA,CACA,oCAAA,CAEA,8BACE,4CAAA,CACA,8CAAA,CAMJ,qEAGE,YAAA,CAGF,uBACE,8BAAA,CACA,kBAAA,CACA,6BAAA,CAEA,yBACE,0CAAA,CACA,oCAAA,CAGF,2BACE,YAAA,CAIJ,yBACE,6BAAA,CACA,8BAAA,CACA,kBAAA,CAEA,qCACE,2CAAA,CAGF,wCACE,2CAAA,CAGF,2BACE,0CAAA,CACA,mCAAA",
            sourcesContent: [
              ".arrow_back:hover + .arrow_forward {\n  border-left: none;\n  margin-left: 0;\n}\n\n.arrow_back {\n  display: flex;\n  align-items: center;\n  border-radius: var(--s-border-radius-medium) 0 0 var(--s-border-radius-medium);\n  cursor: pointer;\n  background-color: var(--s-color-fill-default);\n  color: var(--s-color-content-default);\n  border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n  padding: var(--s-spacing-xx-small);\n  box-shadow: 0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n\n  &:hover {\n    background-color: var(--s-color-fill-default-hover);\n    border: 1px solid var(--s-color-border-default-hover);\n  }\n\n  &:focus-visible {\n    outline-width: var(--s-border-width-thin);\n    outline-color: var(--s-color-fill-highlight);\n    outline-offset: var(--s-border-width-hairline);\n    outline-style: solid;\n  }\n\n  &:disabled {\n    cursor: auto;\n    opacity: 0.64;\n    background-color: var(--s-color-fill-disable);\n    color: var(--s-color-content-disable);\n\n    &:hover {\n      background-color: var(--s-color-fill-disable);\n      border: 1px solid var(--s-color-border-default);\n    }\n  }\n}\n\n.arrow_forward {\n  margin-left: -1px;\n  cursor: pointer;\n  background-color: var(--s-color-fill-default);\n  color: var(--s-color-content-default);\n  border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n  padding: var(--s-spacing-xx-small);\n  margin-right: -1px;\n  align-items: center;\n  border-radius: 0 var(--s-border-radius-medium) var(--s-border-radius-medium) 0;\n  display: flex;\n  box-shadow: 0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n\n  &:hover {\n    background-color: var(--s-color-fill-default-hover);\n    border: 1px solid var(--s-color-border-default-hover);\n  }\n\n  &:focus-visible {\n    outline-width: var(--s-border-width-thin);\n    outline-color: var(--s-color-border-highlight);\n    outline-offset: var(--s-border-width-hairline);\n    outline-style: solid;\n  }\n\n  &:disabled {\n    cursor: auto;\n    opacity: 0.64;\n    background-color: var(--s-color-fill-disable);\n    color: var(--s-color-content-disable);\n\n    &:hover {\n      background-color: var(--s-color-fill-disable);\n      border: 1px solid var(--s-color-border-default);\n    }\n  }\n}\n\n.Pagination {\n  .noLabel,\n  .leftLabel,\n  .centerLabel {\n    display: flex;\n  }\n\n  .leftLabel {\n    padding: var(--s-spacing-small);\n    align-items: center;\n    justify-content: space-between;\n\n    p {\n      font: var(--s-typography-paragraph-regular);\n      color: var(--s-color-content-default);\n    }\n\n    div {\n      display: flex;\n    }\n  }\n\n  .centerLabel {\n    justify-content: space-between;\n    padding: var(--s-spacing-small);\n    align-items: center;\n\n    .arrow_back {\n      border-radius: var(--s-border-radius-medium);\n    }\n\n    .arrow_forward {\n      border-radius: var(--s-border-radius-medium);\n    }\n\n    p {\n      font: var(--s-typography-paragraph-regular);\n      color: var (--s-color-content-default);\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
