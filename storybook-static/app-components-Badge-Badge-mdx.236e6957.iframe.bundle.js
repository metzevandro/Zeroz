(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [9091],
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
    "./src/app/components/Badge/Badge.mdx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          default: () => MDXContent,
        });
      __webpack_require__("./node_modules/next/dist/compiled/react/index.js");
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        C_Users_metzx_Desktop_ZeroZ_web_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),
        _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/@storybook/blocks/dist/index.mjs",
        ),
        _Badge_stories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./src/app/components/Badge/Badge.stories.ts",
        );
      function _createMdxContent(props) {
        const _components = {
          a: "a",
          code: "code",
          h1: "h1",
          h2: "h2",
          li: "li",
          p: "p",
          pre: "pre",
          ul: "ul",
          ...(0,
          C_Users_metzx_Desktop_ZeroZ_web_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.R)(),
          ...props.components,
        };
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,
          {
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,
                { of: _Badge_stories__WEBPACK_IMPORTED_MODULE_2__ },
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components.h1,
                { id: "badge", children: "Badge" },
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components.h2,
                { id: "índice", children: "Índice" },
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                _components.ul,
                {
                  children: [
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components.li,
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                          _components.a,
                          {
                            href: "#vis%C3%A3o-geral",
                            children: "Visão Geral",
                          },
                        ),
                      },
                    ),
                    "\n",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components.li,
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                          _components.a,
                          { href: "#como-usar", children: "Como usar" },
                        ),
                      },
                    ),
                    "\n",
                  ],
                },
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components.h2,
                { id: "visão-geral", children: "Visão Geral" },
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                _components.p,
                {
                  children: [
                    "O componente ",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components.code,
                      { children: "Badge" },
                    ),
                    " pode ser usado para exibir um rótulo com diferentes estilos de acordo com as propriedades fornecidas. O type determina o esquema de cores da badge e pode ser ",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components.code,
                      { children: "default" },
                    ),
                    " ou ",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components.code,
                      { children: "light" },
                    ),
                    ". O variant determina o estilo da badge e pode ser ",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components.code,
                      { children: "default" },
                    ),
                    ", ",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components.code,
                      { children: "primary" },
                    ),
                    ", ",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components.code,
                      { children: "success" },
                    ),
                    " ou ",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components.code,
                      { children: "warning" },
                    ),
                    ". Você pode ajustar essas propriedades conforme necessário para se adequarem ao seu design e contexto específicos.",
                  ],
                },
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,
                {
                  additionalActions: [
                    {
                      title: "Open in Figma",
                      onClick: () => {
                        window.open(
                          "https://www.figma.com/file/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?type=design&node-id=435-10006&mode=design&t=DXqfkt1ZJSVSDmsR-0",
                          "_blank",
                        );
                      },
                    },
                    {
                      title: "Open in GitHub",
                      onClick: () => {
                        window.open(
                          "https://github.com/metzevandro/Zeroz/blob/master/src/app/components/Badge/Badge.tsx",
                          "_blank",
                        );
                      },
                    },
                  ],
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gG,
                    {},
                  ),
                },
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.H2,
                {},
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components.h2,
                { id: "como-usar", children: "Como usar:" },
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components.pre,
                {
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    _components.code,
                    {
                      className: "language-tsx",
                      children:
                        '<Badge label="Badge" type="default" variant="default" />\n',
                    },
                  ),
                },
              ),
            ],
          },
        );
      }
      function MDXContent(props = {}) {
        const { wrapper: MDXLayout } = {
          ...(0,
          C_Users_metzx_Desktop_ZeroZ_web_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.R)(),
          ...props.components,
        };
        return MDXLayout
          ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
              ...props,
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _createMdxContent,
                { ...props },
              ),
            })
          : _createMdxContent(props);
      }
    },
    "./src/app/components/Badge/Badge.stories.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Primary: () => Primary,
          Success: () => Success,
          Warning: () => Warning,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Badge_stories,
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
        Badge = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Badge/Badge.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Badge.A, options);
      Badge.A && Badge.A.locals && Badge.A.locals;
      const Badge_Badge_Badge = (param) => {
          let { label, type, variant } = param;
          return (0, jsx_runtime.jsx)("div", {
            className: "badge ".concat(type, " ").concat(variant),
            children: (0, jsx_runtime.jsx)("p", { children: label }),
          });
        },
        components_Badge_Badge = Badge_Badge_Badge;
      Badge_Badge_Badge.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "Badge",
        props: {
          label: { required: !0, tsType: { name: "string" }, description: "" },
          type: {
            required: !0,
            tsType: {
              name: "union",
              raw: '"default" | "light"',
              elements: [
                { name: "literal", value: '"default"' },
                { name: "literal", value: '"light"' },
              ],
            },
            description: "",
          },
          variant: {
            required: !0,
            tsType: {
              name: "union",
              raw: '"default" | "primary" | "success" | "warning"',
              elements: [
                { name: "literal", value: '"default"' },
                { name: "literal", value: '"primary"' },
                { name: "literal", value: '"success"' },
                { name: "literal", value: '"warning"' },
              ],
            },
            description: "",
          },
        },
      };
      var _Default_parameters,
        _Default_parameters_docs,
        _Default_parameters1,
        _Primary_parameters,
        _Primary_parameters_docs,
        _Primary_parameters1,
        _Success_parameters,
        _Success_parameters_docs,
        _Success_parameters1,
        _Warning_parameters,
        _Warning_parameters_docs,
        _Warning_parameters1;
      __webpack_require__("./src/app/styles.scss");
      const Badge_stories = {
          title: "Components/Badge",
          component: components_Badge_Badge,
          parameters: {
            layout: "centered",
            docs: {
              page: __webpack_require__("./src/app/components/Badge/Badge.mdx")
                .default,
            },
          },
        },
        Default = {
          args: { label: "Badge", type: "default", variant: "default" },
        },
        Primary = {
          args: { label: "Badge", type: "default", variant: "primary" },
        },
        Success = {
          args: { label: "Badge", type: "default", variant: "success" },
        },
        Warning = {
          args: { label: "Badge", type: "default", variant: "warning" },
        };
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...(null === (_Default_parameters = Default.parameters) ||
          void 0 === _Default_parameters
            ? void 0
            : _Default_parameters.docs),
          source: {
            originalSource:
              '{\n  args: {\n    label: "Badge",\n    type: "default",\n    variant: "default"\n  }\n}',
            ...(null === (_Default_parameters1 = Default.parameters) ||
            void 0 === _Default_parameters1 ||
            null === (_Default_parameters_docs = _Default_parameters1.docs) ||
            void 0 === _Default_parameters_docs
              ? void 0
              : _Default_parameters_docs.source),
          },
        },
      }),
        (Primary.parameters = {
          ...Primary.parameters,
          docs: {
            ...(null === (_Primary_parameters = Primary.parameters) ||
            void 0 === _Primary_parameters
              ? void 0
              : _Primary_parameters.docs),
            source: {
              originalSource:
                '{\n  args: {\n    label: "Badge",\n    type: "default",\n    variant: "primary"\n  }\n}',
              ...(null === (_Primary_parameters1 = Primary.parameters) ||
              void 0 === _Primary_parameters1 ||
              null === (_Primary_parameters_docs = _Primary_parameters1.docs) ||
              void 0 === _Primary_parameters_docs
                ? void 0
                : _Primary_parameters_docs.source),
            },
          },
        }),
        (Success.parameters = {
          ...Success.parameters,
          docs: {
            ...(null === (_Success_parameters = Success.parameters) ||
            void 0 === _Success_parameters
              ? void 0
              : _Success_parameters.docs),
            source: {
              originalSource:
                '{\n  args: {\n    label: "Badge",\n    type: "default",\n    variant: "success"\n  }\n}',
              ...(null === (_Success_parameters1 = Success.parameters) ||
              void 0 === _Success_parameters1 ||
              null === (_Success_parameters_docs = _Success_parameters1.docs) ||
              void 0 === _Success_parameters_docs
                ? void 0
                : _Success_parameters_docs.source),
            },
          },
        }),
        (Warning.parameters = {
          ...Warning.parameters,
          docs: {
            ...(null === (_Warning_parameters = Warning.parameters) ||
            void 0 === _Warning_parameters
              ? void 0
              : _Warning_parameters.docs),
            source: {
              originalSource:
                '{\n  args: {\n    label: "Badge",\n    type: "default",\n    variant: "warning"\n  }\n}',
              ...(null === (_Warning_parameters1 = Warning.parameters) ||
              void 0 === _Warning_parameters1 ||
              null === (_Warning_parameters_docs = _Warning_parameters1.docs) ||
              void 0 === _Warning_parameters_docs
                ? void 0
                : _Warning_parameters_docs.source),
            },
          },
        });
      const __namedExportsOrder = ["Default", "Primary", "Success", "Warning"];
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Badge/Badge.scss":
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
          ".badge{font:var(--s-typography-caption-regular);padding:0 var(--s-spacing-xx-small);border-radius:var(--s-border-radius-pill);width:min-content;height:min-content;color:var(--s-color-content-on-color)}.badge.default{color:var(--s-color-content-default);background-color:var(--s-color-fill-default-light)}.badge.default.primary{color:var(--s-color-content-on-color);background-color:var(--s-color-fill-highlight)}.badge.default.warning{color:var(--s-color-content-on-color);background-color:var(--s-color-fill-warning)}.badge.default.success{color:var(--s-color-content-on-color);background-color:var(--s-color-fill-success)}.badge.primary.light{background-color:var(--s-color-fill-highlight-light);color:var(--s-color-content-highlight)}.badge.warning.light{background-color:var(--s-color-fill-warning-light);color:var(--s-color-content-warning)}.badge.success.light{background-color:var(--s-color-fill-success-light);color:var(--s-color-content-success)}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Badge/Badge.scss"],
            names: [],
            mappings:
              "AAAA,OACE,wCAAA,CACA,mCAAA,CACA,yCAAA,CACA,iBAAA,CACA,kBAAA,CACA,qCAAA,CAEA,eACE,oCAAA,CACA,kDAAA,CAGF,uBACE,qCAAA,CACA,8CAAA,CAGF,uBACE,qCAAA,CACA,4CAAA,CAGF,uBACE,qCAAA,CACA,4CAAA,CAGF,qBACE,oDAAA,CACA,sCAAA,CAGF,qBACE,kDAAA,CACA,oCAAA,CAGF,qBACE,kDAAA,CACA,oCAAA",
            sourcesContent: [
              ".badge {\n  font: var(--s-typography-caption-regular);\n  padding: 0 var(--s-spacing-xx-small);\n  border-radius: var(--s-border-radius-pill);\n  width: min-content;\n  height: min-content;\n  color: var(--s-color-content-on-color);\n\n  &.default {\n    color: var(--s-color-content-default);\n    background-color: var(--s-color-fill-default-light);\n  }\n\n  &.default.primary {\n    color: var(--s-color-content-on-color);\n    background-color: var(--s-color-fill-highlight);\n  }\n\n  &.default.warning {\n    color: var(--s-color-content-on-color);\n    background-color: var(--s-color-fill-warning);\n  }\n\n  &.default.success {\n    color: var(--s-color-content-on-color);\n    background-color: var(--s-color-fill-success);\n  }\n\n  &.primary.light {\n    background-color: var(--s-color-fill-highlight-light);\n    color: var(--s-color-content-highlight);\n  }\n\n  &.warning.light {\n    background-color: var(--s-color-fill-warning-light);\n    color: var(--s-color-content-warning);\n  }\n\n  &.success.light {\n    background-color: var(--s-color-fill-success-light);\n    color: var(--s-color-content-success);\n  }\n}\n",
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
  },
]);
