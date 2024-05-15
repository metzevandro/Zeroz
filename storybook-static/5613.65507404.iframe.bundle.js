(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [5613],
  {
    "./node_modules/@mdx-js/react/lib/index.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, {
        R: () => useMDXComponents,
        x: () => MDXProvider,
      });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "./node_modules/next/dist/compiled/react/index.js",
      );
      const emptyComponents = {},
        MDXContext =
          react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);
      function useMDXComponents(components) {
        const contextComponents =
          react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
        return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
          function () {
            return "function" == typeof components
              ? components(contextComponents)
              : { ...contextComponents, ...components };
          },
          [contextComponents, components],
        );
      }
      function MDXProvider(properties) {
        let allComponents;
        return (
          (allComponents = properties.disableParentContext
            ? "function" == typeof properties.components
              ? properties.components(emptyComponents)
              : properties.components || emptyComponents
            : useMDXComponents(properties.components)),
          react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            MDXContext.Provider,
            { value: allComponents },
            properties.children,
          )
        );
      }
    },
    "./src/app/components/Aside/Aside.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, {
        Ay: () => __WEBPACK_DEFAULT_EXPORT__,
        cD: () => AsideContent,
        iE: () => AsideFooter,
      });
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        _ButtonIcon_ButtonIcon__WEBPACK_IMPORTED_MODULE_2__ =
          (__webpack_require__(
            "./node_modules/next/dist/compiled/react/index.js",
          ),
          __webpack_require__(
            "./src/app/components/ButtonIcon/ButtonIcon.tsx",
          ));
      __webpack_require__("./src/app/components/Aside/Aside.scss");
      const Aside = (param) => {
          let { title, isOpen, description, toggleAside, footer, content } =
            param;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
            {
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                  className: "aside-overlay ".concat(
                    isOpen ? "open" : "hidden",
                  ),
                  onClick: toggleAside,
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                  className: "aside-root ".concat(isOpen ? "open" : ""),
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "aside",
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        "header",
                        {
                          className: "aside-header",
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              "div",
                              {
                                className: "aside-title",
                                children: [
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    "div",
                                    { children: title },
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _ButtonIcon_ButtonIcon__WEBPACK_IMPORTED_MODULE_2__.A,
                                    {
                                      type: "plain",
                                      variant: "primary",
                                      typeIcon: "close",
                                      size: "md",
                                      onClick: toggleAside,
                                    },
                                  ),
                                ],
                              },
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              "div",
                              {
                                className: "aside-description",
                                children: description,
                              },
                            ),
                          ],
                        },
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        "main",
                        { className: "aside-children", children: content },
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        "footer",
                        { className: "aside-footer", children: footer },
                      ),
                    ],
                  }),
                }),
              ],
            },
          );
        },
        __WEBPACK_DEFAULT_EXPORT__ = Aside,
        AsideContent = (param) => {
          let { children } = param;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            "div",
            { className: "aside-content", children },
          );
        },
        AsideFooter = (param) => {
          let { children } = param;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            "div",
            { children },
          );
        };
      (Aside.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "Aside",
        props: {
          title: { required: !0, tsType: { name: "string" }, description: "" },
          description: {
            required: !1,
            tsType: { name: "string" },
            description: "",
          },
          footer: {
            required: !1,
            tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
            description: "",
          },
          content: {
            required: !1,
            tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
            description: "",
          },
          toggleAside: {
            required: !0,
            tsType: {
              name: "signature",
              type: "function",
              raw: "() => void",
              signature: { arguments: [], return: { name: "void" } },
            },
            description: "",
          },
          isOpen: {
            required: !0,
            tsType: { name: "boolean" },
            description: "",
          },
        },
      }),
        (AsideContent.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "AsideContent",
          props: {
            children: {
              required: !0,
              tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
              description: "",
            },
          },
        }),
        (AsideFooter.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "AsideFooter",
          props: {
            children: {
              required: !0,
              tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
              description: "",
            },
          },
        });
    },
    "./src/app/components/ButtonIcon/ButtonIcon.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_ButtonIcon_ButtonIcon,
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
        ButtonIcon = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/ButtonIcon/ButtonIcon.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(ButtonIcon.A, options);
      ButtonIcon.A && ButtonIcon.A.locals && ButtonIcon.A.locals;
      const ButtonIcon_ButtonIcon_ButtonIcon = (param) => {
          let { size, type, typeIcon, variant, onClick, disable } = param;
          return (0, jsx_runtime.jsx)("button", {
            disabled: disable,
            onClick,
            className: "button-icon "
              .concat(variant, " ")
              .concat(size, " ")
              .concat(type),
            children:
              typeIcon &&
              (0, jsx_runtime.jsx)(Icon.A, { icon: typeIcon, size }),
          });
        },
        components_ButtonIcon_ButtonIcon = ButtonIcon_ButtonIcon_ButtonIcon;
      ButtonIcon_ButtonIcon_ButtonIcon.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "ButtonIcon",
        props: {
          variant: {
            required: !0,
            tsType: {
              name: "union",
              raw: '"primary" | "secondary" | "success" | "warning" | "on-color"',
              elements: [
                { name: "literal", value: '"primary"' },
                { name: "literal", value: '"secondary"' },
                { name: "literal", value: '"success"' },
                { name: "literal", value: '"warning"' },
                { name: "literal", value: '"on-color"' },
              ],
            },
            description: "",
          },
          disable: {
            required: !1,
            tsType: { name: "boolean" },
            description: "",
          },
          type: {
            required: !0,
            tsType: {
              name: "union",
              raw: '"plain" | "default"',
              elements: [
                { name: "literal", value: '"plain"' },
                { name: "literal", value: '"default"' },
              ],
            },
            description: "",
          },
          size: {
            required: !0,
            tsType: {
              name: "union",
              raw: '"sm" | "md"',
              elements: [
                { name: "literal", value: '"sm"' },
                { name: "literal", value: '"md"' },
              ],
            },
            description: "",
          },
          typeIcon: {
            required: !0,
            tsType: { name: "string" },
            description: "",
          },
          onClick: {
            required: !1,
            tsType: {
              name: "signature",
              type: "function",
              raw: "(event: React.MouseEvent<HTMLButtonElement>) => void",
              signature: {
                arguments: [
                  {
                    type: {
                      name: "ReactMouseEvent",
                      raw: "React.MouseEvent<HTMLButtonElement>",
                      elements: [{ name: "HTMLButtonElement" }],
                    },
                    name: "event",
                  },
                ],
                return: { name: "void" },
              },
            },
            description: "",
          },
        },
      };
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Aside/Aside.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        "use strict";
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
          ".aside-overlay{height:100%;width:100vw;position:fixed;top:0;left:0;display:none;transition:.5s;overflow-x:hidden;z-index:98}.aside-overlay.open{display:flex;opacity:1;background-color:var(--s-color-background-overlay)}.aside-root{height:100%;width:100vw;position:fixed;display:flex;flex-direction:column;top:0;right:-100vw;background-color:var(--s-color-fill-default);transition:.5s;z-index:99}.aside-root.open{width:50%;right:0}.aside-root .aside{display:flex;flex-direction:column;justify-content:space-between;height:100%;background-color:var(--s-color-fill-default)}.aside-root .aside .aside-header{background-color:var(--s-color-fill-default);display:flex;flex-direction:column;padding:var(--s-spacing-medium);gap:var(--s-spacing-nano)}.aside-root .aside .aside-header .aside-title{align-items:center;color:var(--s-color-content-default);font:var(--s-typography-heading-medium);display:flex;flex-direction:row;justify-content:space-between}.aside-root .aside .aside-header .aside-description{color:var(--s-color-content-light);font:var(--s-typography-paragraph-regular);word-break:break-all}.aside-root .aside .aside-children{flex-grow:1;max-height:100%;overflow:auto;display:flex;flex-direction:column;justify-content:space-between}.aside-root .aside .aside-children::-webkit-scrollbar{width:8px;border-radius:12px}.aside-root .aside .aside-children::-webkit-scrollbar-thumb{background:var(--s-color-fill-default-light);border-radius:12px}.aside-root .aside .aside-children .aside-content{display:flex;flex-direction:column;gap:var(--s-spacing-small);padding:0 var(--s-spacing-medium) var(--s-spacing-medium) var(--s-spacing-medium)}.aside-root .aside .aside-footer{padding:var(--s-spacing-medium);background-color:var(--s-color-background-default)}@media screen and (max-width: 490px){.aside-root.open{width:96%;right:0}}.css-jspizm{overflow:hidden !important}.css-jspizm *{overflow:hidden !important}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Aside/Aside.scss"],
            names: [],
            mappings:
              "AAAA,eACE,WAAA,CACA,WAAA,CACA,cAAA,CACA,KAAA,CACA,MAAA,CACA,YAAA,CACA,cAAA,CACA,iBAAA,CACA,UAAA,CAEA,oBACE,YAAA,CACA,SAAA,CACA,kDAAA,CAIJ,YACE,WAAA,CACA,WAAA,CACA,cAAA,CACA,YAAA,CACA,qBAAA,CACA,KAAA,CACA,YAAA,CACA,4CAAA,CACA,cAAA,CACA,UAAA,CAEA,iBACE,SAAA,CACA,OAAA,CAGF,mBACE,YAAA,CACA,qBAAA,CACA,6BAAA,CACA,WAAA,CACA,4CAAA,CAEA,iCACE,4CAAA,CACA,YAAA,CACA,qBAAA,CACA,+BAAA,CACA,yBAAA,CAEA,8CACE,kBAAA,CACA,oCAAA,CACA,uCAAA,CACA,YAAA,CACA,kBAAA,CACA,6BAAA,CAGF,oDACE,kCAAA,CACA,0CAAA,CACA,oBAAA,CAGJ,mCACE,WAAA,CACA,eAAA,CACA,aAAA,CACA,YAAA,CACA,qBAAA,CACA,6BAAA,CAEA,sDACE,SAAA,CACA,kBAAA,CAGF,4DACE,4CAAA,CACA,kBAAA,CAEF,kDACE,YAAA,CACA,qBAAA,CACA,0BAAA,CACA,iFAAA,CAKJ,iCACE,+BAAA,CACA,kDAAA,CAKN,qCAEI,iBACE,SAAA,CACA,OAAA,CAAA,CAKN,YACE,0BAAA,CACA,cACE,0BAAA",
            sourcesContent: [
              ".aside-overlay {\n  height: 100%;\n  width: 100vw;\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: none;\n  transition: 0.5s;\n  overflow-x: hidden;\n  z-index: 98;\n\n  &.open {\n    display: flex;\n    opacity: 1;\n    background-color: var(--s-color-background-overlay);\n  }\n}\n\n.aside-root {\n  height: 100%;\n  width: 100vw;\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  top: 0;\n  right: -100vw;\n  background-color: var(--s-color-fill-default);\n  transition: 0.5s;\n  z-index: 99;\n\n  &.open {\n    width: 50%;\n    right: 0;\n  }\n\n  .aside {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100%;\n    background-color: var(--s-color-fill-default);\n\n    .aside-header {\n      background-color: var(--s-color-fill-default);\n      display: flex;\n      flex-direction: column;\n      padding: var(--s-spacing-medium);\n      gap: var(--s-spacing-nano);\n\n      .aside-title {\n        align-items: center;\n        color: var(--s-color-content-default);\n        font: var(--s-typography-heading-medium);\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n      }\n\n      .aside-description {\n        color: var(--s-color-content-light);\n        font: var(--s-typography-paragraph-regular);\n        word-break: break-all;\n      }\n    }\n    .aside-children {\n      flex-grow: 1;\n      max-height: 100%;\n      overflow: auto;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n\n      &::-webkit-scrollbar {\n        width: 8px;\n        border-radius: 12px;\n      }\n\n      &::-webkit-scrollbar-thumb {\n        background: var(--s-color-fill-default-light);\n        border-radius: 12px;\n      }\n      .aside-content {\n        display: flex;\n        flex-direction: column;\n        gap: var(--s-spacing-small);\n        padding: 0 var(--s-spacing-medium) var(--s-spacing-medium)\n          var(--s-spacing-medium);\n      }\n    }\n\n    .aside-footer {\n      padding: var(--s-spacing-medium);\n      background-color: var(--s-color-background-default);\n    }\n  }\n}\n\n@media screen and (max-width: 490px) {\n  .aside-root {\n    &.open {\n      width: 96%;\n      right: 0;\n    }\n  }\n}\n\n.css-jspizm {\n  overflow: hidden !important;\n  * {\n    overflow: hidden !important;\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/ButtonIcon/ButtonIcon.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        "use strict";
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
          ".button-icon{display:flex;align-items:center;border:none;padding:0;cursor:pointer;box-sizing:border-box}.button-icon.sm.plain{padding:4px;height:24px}.button-icon.md.plain{padding:4px;height:32px}.button-icon.plain{border-radius:var(--s-border-radius-small);color:var(--s-color-content-default);background-color:rgba(0,0,0,0)}.button-icon.plain:hover{background-color:var(--s-color-fill-default-hover)}.button-icon.plain.on-color{color:var(--s-color-content-on-color)}.button-icon.plain.on-color:hover{background-color:rgba(255,255,255,.16)}.button-icon.plain:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.button-icon.plain:disabled{cursor:auto}.button-icon.plain:disabled:hover{color:var(--s-color-content-default);background-color:rgba(0,0,0,0)}.button-icon.sm.default>*{padding:var(--s-spacing-nano)}.button-icon.md.default>*{padding:var(--s-spacing-xx-small);font-size:24px}.button-icon.default{border-radius:4px;width:min-content;height:min-content}.button-icon.default:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.button-icon.default.primary{background-color:var(--s-color-fill-highlight);color:var(--s-color-content-on-color)}.button-icon.default.primary:hover{background-color:var(--s-color-fill-highlight-hover)}.button-icon.default.primary:disabled{cursor:auto;background-color:var(--s-color-fill-disable);opacity:.64}.button-icon.default.secondary{border:var(--s-border-width-hairline) solid var(--s-color-border-default);background-color:var(--s-color-fill-default);color:var(--s-color-content-default)}.button-icon.default.secondary:hover{background-color:var(--s-color-fill-default-hover)}.button-icon.default.secondary:disabled{cursor:auto;background-color:var(--s-color-fill-disable);opacity:.64}.button-icon.default.success{background-color:var(--s-color-fill-success);color:var(--s-color-content-on-color)}.button-icon.default.success:hover{background-color:var(--s-color-fill-success-hover)}.button-icon.default.success:disabled{cursor:auto;background-color:var(--s-color-fill-disable);opacity:.64}.button-icon.default.warning{background-color:var(--s-color-fill-warning);color:var(--s-color-content-on-color)}.button-icon.default.warning:hover{background-color:var(--s-color-fill-warning-hover)}.button-icon.default.warning:disabled{cursor:auto;background-color:var(--s-color-fill-disable);opacity:.64}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/ButtonIcon/ButtonIcon.scss",
            ],
            names: [],
            mappings:
              "AAAA,aACE,YAAA,CACA,kBAAA,CACA,WAAA,CACA,SAAA,CACA,cAAA,CACA,qBAAA,CAEA,sBACE,WAAA,CACA,WAAA,CAGF,sBACE,WAAA,CACA,WAAA,CAGF,mBACE,0CAAA,CACA,oCAAA,CACA,8BAAA,CAEA,yBACE,kDAAA,CAGF,4BACE,qCAAA,CAEA,kCACE,sCAAA,CAIJ,iCACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,4BACE,WAAA,CACA,kCACE,oCAAA,CACA,8BAAA,CAKN,0BACE,6BAAA,CAGF,0BACE,iCAAA,CACA,cAAA,CAGF,qBACE,iBAAA,CACA,iBAAA,CACA,kBAAA,CAEA,mCACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,6BACE,8CAAA,CACA,qCAAA,CAEA,mCACE,oDAAA,CAGF,sCACE,WAAA,CACA,4CAAA,CACA,WAAA,CAIJ,+BACE,yEAAA,CACA,4CAAA,CACA,oCAAA,CAEA,qCACE,kDAAA,CAGF,wCACE,WAAA,CACA,4CAAA,CACA,WAAA,CAIJ,6BACE,4CAAA,CACA,qCAAA,CAEA,mCACE,kDAAA,CAGF,sCACE,WAAA,CACA,4CAAA,CACA,WAAA,CAIJ,6BACE,4CAAA,CACA,qCAAA,CAEA,mCACE,kDAAA,CAGF,sCACE,WAAA,CACA,4CAAA,CACA,WAAA",
            sourcesContent: [
              ".button-icon {\n  display: flex;\n  align-items: center;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  box-sizing: border-box;\n\n  &.sm.plain {\n    padding: 4px;\n    height: 24px;\n  }\n\n  &.md.plain {\n    padding: 4px;\n    height: 32px;\n  }\n\n  &.plain {\n    border-radius: var(--s-border-radius-small);\n    color: var(--s-color-content-default);\n    background-color: transparent;\n\n    &:hover {\n      background-color: var(--s-color-fill-default-hover);\n    }\n\n    &.on-color {\n      color: var(--s-color-content-on-color);\n\n      &:hover {\n        background-color: rgba(white, 0.16);\n      }\n    }\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    &:disabled {\n      cursor: auto;\n      &:hover {\n        color: var(--s-color-content-default);\n        background-color: transparent;\n      }\n    }\n  }\n\n  &.sm.default > * {\n    padding: var(--s-spacing-nano);\n  }\n\n  &.md.default > * {\n    padding: var(--s-spacing-xx-small);\n    font-size: 24px;\n  }\n\n  &.default {\n    border-radius: 4px;\n    width: min-content;\n    height: min-content;\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    &.primary {\n      background-color: var(--s-color-fill-highlight);\n      color: var(--s-color-content-on-color);\n\n      &:hover {\n        background-color: var(--s-color-fill-highlight-hover);\n      }\n\n      &:disabled {\n        cursor: auto;\n        background-color: var(--s-color-fill-disable);\n        opacity: 0.64;\n      }\n    }\n\n    &.secondary {\n      border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n      background-color: var(--s-color-fill-default);\n      color: var(--s-color-content-default);\n\n      &:hover {\n        background-color: var(--s-color-fill-default-hover);\n      }\n\n      &:disabled {\n        cursor: auto;\n        background-color: var(--s-color-fill-disable);\n        opacity: 0.64;\n      }\n    }\n\n    &.success {\n      background-color: var(--s-color-fill-success);\n      color: var(--s-color-content-on-color);\n\n      &:hover {\n        background-color: var(--s-color-fill-success-hover);\n      }\n\n      &:disabled {\n        cursor: auto;\n        background-color: var(--s-color-fill-disable);\n        opacity: 0.64;\n      }\n    }\n\n    &.warning {\n      background-color: var(--s-color-fill-warning);\n      color: var(--s-color-content-on-color);\n\n      &:hover {\n        background-color: var(--s-color-fill-warning-hover);\n      }\n\n      &:disabled {\n        cursor: auto;\n        background-color: var(--s-color-fill-disable);\n        opacity: 0.64;\n      }\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/memoizerific sync recursive": (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      (webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id = "./node_modules/memoizerific sync recursive"),
        (module.exports = webpackEmptyContext);
    },
    "./src/app/components/Aside/Aside.scss": (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
          ),
        _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
          ),
        _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            "./node_modules/style-loader/dist/runtime/styleDomAPI.js",
          ),
        _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
          ),
        _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            "./node_modules/style-loader/dist/runtime/insertBySelector.js",
          ),
        _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
          ),
        _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js",
          ),
        _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
          ),
        _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            "./node_modules/style-loader/dist/runtime/insertStyleElement.js",
          ),
        _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
          ),
        _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            "./node_modules/style-loader/dist/runtime/styleTagTransform.js",
          ),
        _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
          ),
        _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_storybook_nextjs_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_Aside_scss__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Aside/Aside.scss",
          ),
        options = {};
      (options.styleTagTransform =
        _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default()),
        (options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default()),
        (options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            "head",
          )),
        (options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default()),
        (options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());
      _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
        _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_storybook_nextjs_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_Aside_scss__WEBPACK_IMPORTED_MODULE_6__.A,
        options,
      ),
        _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_storybook_nextjs_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_Aside_scss__WEBPACK_IMPORTED_MODULE_6__.A &&
          _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_storybook_nextjs_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_Aside_scss__WEBPACK_IMPORTED_MODULE_6__
            .A.locals &&
          _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_storybook_nextjs_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_Aside_scss__WEBPACK_IMPORTED_MODULE_6__
            .A.locals;
    },
  },
]);
