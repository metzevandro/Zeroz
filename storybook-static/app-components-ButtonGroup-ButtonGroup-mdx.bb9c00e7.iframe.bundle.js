(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [5507],
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
    "./src/app/components/ButtonGroup/ButtonGroup.mdx": (
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
        _ButtonGroup_stories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./src/app/components/ButtonGroup/ButtonGroup.stories.ts",
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
                { of: _ButtonGroup_stories__WEBPACK_IMPORTED_MODULE_2__ },
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components.h1,
                { id: "button-group", children: "Button Group" },
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
                      { children: "ButtonGroup" },
                    ),
                    " são dois buttons em sequência. Podendo ser em direções de ",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components.code,
                      { children: "row" },
                    ),
                    " ou ",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components.code,
                      { children: "column" },
                    ),
                    ".",
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
                          "https://www.figma.com/file/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?type=design&node-id=435-10011&mode=design&t=kP3T7Wz3WgTJX1r3-0",
                          "_blank",
                        );
                      },
                    },
                    {
                      title: "Open in GitHub",
                      onClick: () => {
                        window.open(
                          "https://github.com/metzevandro/Zeroz/blob/master/src/app/components/ButtonGroup/ButtonGroup.tsx",
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
                        '<ButtonGroup\n  direction="row"\n  onClickFirstButton={handleClickFirstButton}\n  onClickSecondButton={handleClickSecondButton}\n  contentFirstButton="Primeiro Botão"\n  contentSecondButton="Segundo Botão"\n  variantFirstButton="primary"\n  variantSecondButton="secondary"\n/>\n',
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
    "./src/app/components/ButtonGroup/ButtonGroup.stories.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Column: () => Column,
          Row: () => Row,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Row_parameters,
        _Row_parameters_docs,
        _Row_parameters1,
        _Column_parameters,
        _Column_parameters_docs,
        _Column_parameters1,
        _ButtonGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./src/app/components/ButtonGroup/ButtonGroup.tsx",
        ),
        _ButtonGroup_mdx__WEBPACK_IMPORTED_MODULE_2__ =
          (__webpack_require__("./src/app/styles.scss"),
          __webpack_require__(
            "./src/app/components/ButtonGroup/ButtonGroup.mdx",
          ));
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Components/Button Group",
          component: _ButtonGroup__WEBPACK_IMPORTED_MODULE_0__.A,
          parameters: {
            layout: "centered",
            page: _ButtonGroup_mdx__WEBPACK_IMPORTED_MODULE_2__.default,
          },
        },
        Row = {
          args: {
            direction: "row",
            contentFirstButton: "Button",
            variantFirstButton: "primary",
            typeIconFirstButton: "",
            disableFirstButton: !1,
            contentSecondButton: "Button",
            variantSecondButton: "secondary",
            disableSecondButton: !1,
            typeIconSecondButton: "",
          },
        },
        Column = {
          args: {
            direction: "column",
            contentFirstButton: "Button",
            variantFirstButton: "primary",
            typeIconFirstButton: "",
            disableFirstButton: !1,
            contentSecondButton: "Button",
            variantSecondButton: "secondary",
            disableSecondButton: !1,
            typeIconSecondButton: "",
          },
        };
      (Row.parameters = {
        ...Row.parameters,
        docs: {
          ...(null === (_Row_parameters = Row.parameters) ||
          void 0 === _Row_parameters
            ? void 0
            : _Row_parameters.docs),
          source: {
            originalSource:
              '{\n  args: {\n    direction: "row",\n    contentFirstButton: "Button",\n    variantFirstButton: "primary",\n    typeIconFirstButton: "",\n    disableFirstButton: false,\n    contentSecondButton: "Button",\n    variantSecondButton: "secondary",\n    disableSecondButton: false,\n    typeIconSecondButton: ""\n  }\n}',
            ...(null === (_Row_parameters1 = Row.parameters) ||
            void 0 === _Row_parameters1 ||
            null === (_Row_parameters_docs = _Row_parameters1.docs) ||
            void 0 === _Row_parameters_docs
              ? void 0
              : _Row_parameters_docs.source),
          },
        },
      }),
        (Column.parameters = {
          ...Column.parameters,
          docs: {
            ...(null === (_Column_parameters = Column.parameters) ||
            void 0 === _Column_parameters
              ? void 0
              : _Column_parameters.docs),
            source: {
              originalSource:
                '{\n  args: {\n    direction: "column",\n    contentFirstButton: "Button",\n    variantFirstButton: "primary",\n    typeIconFirstButton: "",\n    disableFirstButton: false,\n    contentSecondButton: "Button",\n    variantSecondButton: "secondary",\n    disableSecondButton: false,\n    typeIconSecondButton: ""\n  }\n}',
              ...(null === (_Column_parameters1 = Column.parameters) ||
              void 0 === _Column_parameters1 ||
              null === (_Column_parameters_docs = _Column_parameters1.docs) ||
              void 0 === _Column_parameters_docs
                ? void 0
                : _Column_parameters_docs.source),
            },
          },
        });
      const __namedExportsOrder = ["Row", "Column"];
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
