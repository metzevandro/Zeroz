"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [4797],
  {
    "./src/app/components/Button/Button.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_Button_Button,
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
        Button = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Button/Button.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Button.A, options);
      Button.A && Button.A.locals && Button.A.locals;
      var Icon = __webpack_require__("./src/app/components/Icon/Icon.tsx");
      const Button_Button_Button = (param) => {
          let { disabled, label, variant, typeIcon, onClick, size, ...rest } =
            param;
          const buttonClass = "button ".concat(variant, " ").concat(size);
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children:
              label &&
              (0, jsx_runtime.jsxs)("button", {
                ...rest,
                className: buttonClass,
                onClick,
                disabled,
                children: [
                  typeIcon &&
                    (0, jsx_runtime.jsx)(Icon.A, {
                      icon: typeIcon,
                      size: "sm",
                    }),
                  label,
                ],
              }),
          });
        },
        components_Button_Button = Button_Button_Button;
      try {
        (Button_Button_Button.displayName = "Button"),
          (Button_Button_Button.__docgenInfo = {
            description: "",
            displayName: "Button",
            props: {
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
              size: {
                defaultValue: null,
                description: "",
                name: "size",
                required: !0,
                type: {
                  name: "enum",
                  value: [{ value: '"sm"' }, { value: '"md"' }],
                },
              },
              variant: {
                defaultValue: null,
                description: "",
                name: "variant",
                required: !0,
                type: {
                  name: "enum",
                  value: [
                    { value: '"primary"' },
                    { value: '"secondary"' },
                    { value: '"success"' },
                    { value: '"warning"' },
                  ],
                },
              },
              typeIcon: {
                defaultValue: null,
                description: "",
                name: "typeIcon",
                required: !1,
                type: { name: "string" },
              },
              onClick: {
                defaultValue: null,
                description: "",
                name: "onClick",
                required: !1,
                type: {
                  name: "((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)",
                },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Button/Button.tsx#Button"
            ] = {
              docgenInfo: Button_Button_Button.__docgenInfo,
              name: "Button",
              path: "src/app/components/Button/Button.tsx#Button",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/Layout/Layout.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_Layout_Layout,
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
        Layout = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Layout/Layout.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Layout.A, options);
      Layout.A && Layout.A.locals && Layout.A.locals;
      const Layout_Layout_Layout = (param) => {
          let { children, columns, ...rest } = param;
          const columnClassName = {
            1: "one-column",
            "2 - Symmetric": "two-column-symmetric",
            "2 - Asymmetric": "two-column-asymmetric",
            "3 - Symmetric": "three-column-symmetric",
          }[columns];
          return (0, jsx_runtime.jsx)("div", {
            ...rest,
            className: "layout ".concat(columnClassName),
            children,
          });
        },
        components_Layout_Layout = Layout_Layout_Layout;
      try {
        (Layout_Layout_Layout.displayName = "Layout"),
          (Layout_Layout_Layout.__docgenInfo = {
            description: "",
            displayName: "Layout",
            props: {
              columns: {
                defaultValue: null,
                description: "",
                name: "columns",
                required: !0,
                type: {
                  name: "enum",
                  value: [
                    { value: '"1"' },
                    { value: '"2 - Symmetric"' },
                    { value: '"2 - Asymmetric"' },
                    { value: '"3 - Symmetric"' },
                  ],
                },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Layout/Layout.tsx#Layout"
            ] = {
              docgenInfo: Layout_Layout_Layout.__docgenInfo,
              name: "Layout",
              path: "src/app/components/Layout/Layout.tsx#Layout",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/Page/Page.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_Page_Page,
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
        Page = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Page/Page.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Page.A, options);
      Page.A && Page.A.locals && Page.A.locals;
      var ButtonIcon = __webpack_require__(
          "./src/app/components/ButtonIcon/ButtonIcon.tsx",
        ),
        Button = __webpack_require__("./src/app/components/Button/Button.tsx"),
        Layout = __webpack_require__("./src/app/components/Layout/Layout.tsx");
      const Page_Page_Page = (param) => {
          let {
            columnLayout,
            children,
            namePage,
            withBackButton,
            withActionPrimary,
            withActionSecondary,
            buttonContentPrimary,
            buttonContentSecondary,
            onClickActionPrimary,
            onClickActionSecondary,
            onClickBackButton,
          } = param;
          return (0, jsx_runtime.jsx)("div", {
            style: { display: "flex", justifyContent: "center", width: "100%" },
            children: (0, jsx_runtime.jsxs)("div", {
              className: "page-root",
              children: [
                (0, jsx_runtime.jsxs)("div", {
                  className: "page-header",
                  children: [
                    (0, jsx_runtime.jsxs)("div", {
                      className: "page-header-title",
                      children: [
                        withBackButton &&
                          (0, jsx_runtime.jsx)(ButtonIcon.A, {
                            onClick: onClickBackButton,
                            size: "md",
                            type: "default",
                            typeIcon: "arrow_back",
                            variant: "secondary",
                          }),
                        (0, jsx_runtime.jsx)("h1", { children: namePage }),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)("div", {
                      className: "page-header-actions",
                      children: [
                        withActionSecondary &&
                          (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                              (0, jsx_runtime.jsx)("div", {
                                className: "button-icon-actions",
                                children: (0, jsx_runtime.jsx)(ButtonIcon.A, {
                                  type: "default",
                                  size: "md",
                                  typeIcon: "more_vert",
                                  variant: "secondary",
                                  onClick: onClickActionSecondary,
                                }),
                              }),
                              (0, jsx_runtime.jsx)("div", {
                                className: "button-actions",
                                children: (0, jsx_runtime.jsx)(Button.A, {
                                  size: "md",
                                  variant: "secondary",
                                  label: buttonContentSecondary,
                                  onClick: onClickActionSecondary,
                                }),
                              }),
                            ],
                          }),
                        withActionPrimary &&
                          (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                              (0, jsx_runtime.jsx)("div", {
                                className: "button-icon-actions",
                                children: (0, jsx_runtime.jsx)(ButtonIcon.A, {
                                  type: "default",
                                  size: "md",
                                  typeIcon: "add",
                                  variant: "primary",
                                  onClick: onClickActionPrimary,
                                }),
                              }),
                              (0, jsx_runtime.jsx)("div", {
                                className: "button-actions",
                                children: (0, jsx_runtime.jsx)(Button.A, {
                                  size: "md",
                                  variant: "primary",
                                  label: buttonContentPrimary,
                                  onClick: onClickActionPrimary,
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
                (0, jsx_runtime.jsx)(Layout.A, {
                  columns: columnLayout,
                  children,
                }),
              ],
            }),
          });
        },
        components_Page_Page = Page_Page_Page;
      try {
        (Page_Page_Page.displayName = "Page"),
          (Page_Page_Page.__docgenInfo = {
            description: "",
            displayName: "Page",
            props: {
              columnLayout: {
                defaultValue: null,
                description: "",
                name: "columnLayout",
                required: !0,
                type: {
                  name: "enum",
                  value: [
                    { value: '"1"' },
                    { value: '"2 - Symmetric"' },
                    { value: '"2 - Asymmetric"' },
                    { value: '"3 - Symmetric"' },
                  ],
                },
              },
              namePage: {
                defaultValue: null,
                description: "",
                name: "namePage",
                required: !0,
                type: { name: "string" },
              },
              withBackButton: {
                defaultValue: null,
                description: "",
                name: "withBackButton",
                required: !1,
                type: { name: "boolean" },
              },
              withActionPrimary: {
                defaultValue: null,
                description: "",
                name: "withActionPrimary",
                required: !1,
                type: { name: "boolean" },
              },
              withActionSecondary: {
                defaultValue: null,
                description: "",
                name: "withActionSecondary",
                required: !1,
                type: { name: "boolean" },
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
              onClickBackButton: {
                defaultValue: null,
                description: "",
                name: "onClickBackButton",
                required: !1,
                type: { name: "(() => void)" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/app/components/Page/Page.tsx#Page"] =
              {
                docgenInfo: Page_Page_Page.__docgenInfo,
                name: "Page",
                path: "src/app/components/Page/Page.tsx#Page",
              });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Button/Button.scss":
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
          ".button{display:flex;align-items:center;justify-content:center;font:var(--s-typography-label-medium);border-radius:var(--s-border-radius-small);white-space:nowrap;width:100%;height:40px;box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;border:none;gap:var(--s-spacing-nano);cursor:pointer}.button.sm{height:32px;padding:var(--s-spacing-nano) var(--s-spacing-x-small)}.button.md{padding:var(--s-spacing-xx-small) var(--s-spacing-x-small);height:40px}.button.primary{background-color:var(--s-color-fill-highlight);color:var(--s-color-content-on-color)}.button.primary:hover{background-color:var(--s-color-fill-highlight-hover)}.button.primary:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.button.primary:disabled{cursor:auto;background-color:var(--s-color-fill-disable);opacity:.64;color:var(--s-color-content-disable);border:var(--s-border-width-hairline) solid var(--s-color-border-default)}.button.secondary{background-color:var(--s-color-fill-default);color:var(--s-color-content-default);border:var(--s-border-width-hairline) solid var(--s-color-border-default)}.button.secondary:hover{background-color:var(--s-color-fill-default-hover)}.button.secondary:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.button.secondary:disabled{opacity:.64;background-color:var(--s-color-fill-disable);color:var(--s-color-content-disable);border:var(--s-border-width-hairline) solid var(--s-color-border-default)}.button.success{background-color:var(--s-color-fill-success);color:var(--s-color-content-on-color)}.button.success:hover{background-color:var(--s-color-fill-success-hover)}.button.success:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.button.success:disabled{opacity:.64;background-color:var(--s-color-fill-disable);color:var(--s-color-content-disable);border:var(--s-border-width-hairline) solid var(--s-color-border-default)}.button.warning{background-color:var(--s-color-fill-warning);color:var(--s-color-content-on-color)}.button.warning:hover{background-color:var(--s-color-fill-warning-hover)}.button.warning:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.button.warning:disabled{opacity:.64;background-color:var(--s-color-fill-disable);color:var(--s-color-content-disable);border:var(--s-border-width-hairline) solid var(--s-color-border-default)}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Button/Button.scss"],
            names: [],
            mappings:
              "AAAA,QACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,qCAAA,CACA,0CAAA,CACA,kBAAA,CACA,UAAA,CACA,WAAA,CACA,qBAAA,CACA,6BAAA,CACA,0BAAA,CACA,WAAA,CACA,yBAAA,CACA,cAAA,CAEA,WACE,WAAA,CACA,sDAAA,CAGF,WACE,0DAAA,CACA,WAAA,CAGF,gBACE,8CAAA,CACA,qCAAA,CAEA,sBACE,oDAAA,CAGF,8BACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,yBACE,WAAA,CACA,4CAAA,CACA,WAAA,CACA,oCAAA,CACA,yEAAA,CAIJ,kBACE,4CAAA,CACA,oCAAA,CACA,yEAAA,CAEA,wBACE,kDAAA,CAGF,gCACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,2BACE,WAAA,CACA,4CAAA,CACA,oCAAA,CACA,yEAAA,CAIJ,gBACE,4CAAA,CACA,qCAAA,CAEA,sBACE,kDAAA,CAGF,8BACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,yBACE,WAAA,CACA,4CAAA,CACA,oCAAA,CACA,yEAAA,CAIJ,gBACE,4CAAA,CACA,qCAAA,CAEA,sBACE,kDAAA,CAGF,8BACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,yBACE,WAAA,CACA,4CAAA,CACA,oCAAA,CACA,yEAAA",
            sourcesContent: [
              ".button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font: var(--s-typography-label-medium);\n  border-radius: var(--s-border-radius-small);\n  white-space: nowrap;\n  width: 100%;\n  height: 40px;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  border: none;\n  gap: var(--s-spacing-nano);\n  cursor: pointer;\n\n  &.sm {\n    height: 32px;\n    padding: var(--s-spacing-nano) var(--s-spacing-x-small);\n  }\n\n  &.md {\n    padding: var(--s-spacing-xx-small) var(--s-spacing-x-small);\n    height: 40px;\n  }\n\n  &.primary {\n    background-color: var(--s-color-fill-highlight);\n    color: var(--s-color-content-on-color);\n\n    &:hover {\n      background-color: var(--s-color-fill-highlight-hover);\n    }\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    &:disabled {\n      cursor: auto;\n      background-color: var(--s-color-fill-disable);\n      opacity: 0.64;\n      color: var(--s-color-content-disable);\n      border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n    }\n  }\n\n  &.secondary {\n    background-color: var(--s-color-fill-default);\n    color: var(--s-color-content-default);\n    border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n\n    &:hover {\n      background-color: var(--s-color-fill-default-hover);\n    }\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    &:disabled {\n      opacity: 0.64;\n      background-color: var(--s-color-fill-disable);\n      color: var(--s-color-content-disable);\n      border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n    }\n  }\n\n  &.success {\n    background-color: var(--s-color-fill-success);\n    color: var(--s-color-content-on-color);\n\n    &:hover {\n      background-color: var(--s-color-fill-success-hover);\n    }\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    &:disabled {\n      opacity: 0.64;\n      background-color: var(--s-color-fill-disable);\n      color: var(--s-color-content-disable);\n      border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n    }\n  }\n\n  &.warning {\n    background-color: var(--s-color-fill-warning);\n    color: var(--s-color-content-on-color);\n\n    &:hover {\n      background-color: var(--s-color-fill-warning-hover);\n    }\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    &:disabled {\n      opacity: 0.64;\n      background-color: var(--s-color-fill-disable);\n      color: var(--s-color-content-disable);\n      border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Layout/Layout.scss":
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
          ".layout{display:grid;grid-gap:var(--s-spacing-small);height:min-content}.layout.one-column{grid-template-columns:1fr;grid-auto-flow:dense}.layout.two-column-asymmetric{grid-auto-flow:dense;grid-template-columns:2fr 1fr}.layout.two-column-symmetric{grid-auto-flow:dense;grid-template-columns:repeat(2, 1fr)}.layout.three-column-symmetric{grid-auto-flow:dense;grid-template-columns:repeat(3, 1fr)}@media screen and (max-width: 490px){.layout.two-column-symmetric{grid-template-columns:1fr}.layout.two-column-asymmetric{grid-template-columns:1fr}.layout.three-column-symmetric{grid-template-columns:1fr}}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Layout/Layout.scss"],
            names: [],
            mappings:
              "AAAA,QACE,YAAA,CACA,+BAAA,CACA,kBAAA,CAEA,mBACE,yBAAA,CACA,oBAAA,CAGF,8BACE,oBAAA,CACA,6BAAA,CAGF,6BACE,oBAAA,CACA,oCAAA,CAGF,+BACE,oBAAA,CACA,oCAAA,CAIJ,qCAEI,6BACE,yBAAA,CAEF,8BACE,yBAAA,CAEF,+BACE,yBAAA,CAAA",
            sourcesContent: [
              ".layout {\n  display: grid;\n  grid-gap: var(--s-spacing-small);\n  height: min-content;\n\n  &.one-column {\n    grid-template-columns: 1fr;\n    grid-auto-flow: dense;\n  }\n\n  &.two-column-asymmetric {\n    grid-auto-flow: dense;\n    grid-template-columns: 2fr 1fr;\n  }\n\n  &.two-column-symmetric {\n    grid-auto-flow: dense;\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  &.three-column-symmetric {\n    grid-auto-flow: dense;\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n\n@media screen and (max-width: 490px) {\n  .layout {\n    &.two-column-symmetric {\n      grid-template-columns: 1fr;\n    }\n    &.two-column-asymmetric {\n      grid-template-columns: 1fr;\n    }\n    &.three-column-symmetric {\n      grid-template-columns: 1fr;\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Page/Page.scss":
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
          ".page-root{grid-area:main;margin:var(--s-spacing-medium);display:flex;flex-direction:column;gap:var(--s-spacing-medium);width:100%;max-width:1280px}.page-root .page-header{display:flex;flex-direction:row;justify-content:space-between;align-items:center;box-sizing:border-box;height:40px}.page-root .page-header .page-header-title{display:flex;align-items:center;gap:var(--s-spacing-small)}.page-root .page-header .page-header-title h1{font:var(--s-typography-heading-large);color:var(--s-color-content-default)}.page-root .page-header .page-header-actions{display:flex;gap:var(--s-spacing-xx-small)}.page-root .page-header .page-header-actions .button-icon-actions{display:none}@media screen and (max-width: 490px){.page-root .page-header .page-header-actions .button-actions{display:none}.page-root .page-header .page-header-actions .button-icon-actions{display:flex}}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Page/Page.scss"],
            names: [],
            mappings:
              "AAAA,WACE,cAAA,CACA,8BAAA,CACA,YAAA,CACA,qBAAA,CACA,2BAAA,CACA,UAAA,CACA,gBAAA,CAEA,wBACE,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,kBAAA,CACA,qBAAA,CACA,WAAA,CAEA,2CACE,YAAA,CACA,kBAAA,CACA,0BAAA,CAEA,8CACE,sCAAA,CACA,oCAAA,CAIJ,6CACE,YAAA,CAEA,6BAAA,CAEA,kEACE,YAAA,CAMR,qCAIQ,6DACE,YAAA,CAEF,kEACE,YAAA,CAAA",
            sourcesContent: [
              ".page-root {\n  grid-area: main;\n  margin: var(--s-spacing-medium);\n  display: flex;\n  flex-direction: column;\n  gap: var(--s-spacing-medium);\n  width: 100%;\n  max-width: 1280px;\n\n  .page-header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    box-sizing: border-box;\n    height: 40px;\n\n    .page-header-title {\n      display: flex;\n      align-items: center;\n      gap: var(--s-spacing-small);\n\n      & h1 {\n        font: var(--s-typography-heading-large);\n        color: var(--s-color-content-default);\n      }\n    }\n\n    .page-header-actions {\n      display: flex;\n\n      gap: var(--s-spacing-xx-small);\n\n      .button-icon-actions {\n        display: none;\n      }\n    }\n  }\n}\n\n@media screen and (max-width: 490px) {\n  .page-root {\n    .page-header {\n      .page-header-actions {\n        .button-actions {\n          display: none;\n        }\n        .button-icon-actions {\n          display: flex;\n        }\n      }\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
