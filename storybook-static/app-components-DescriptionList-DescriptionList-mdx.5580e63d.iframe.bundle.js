(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [2987],
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
    "./src/app/components/DescriptionList/DescriptionList.mdx": (
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
        _DescriptionList_stories__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            "./src/app/components/DescriptionList/DescriptionList.stories.tsx",
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
                { of: _DescriptionList_stories__WEBPACK_IMPORTED_MODULE_2__ },
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components.h1,
                { id: "description-list", children: "Description List" },
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
                      { children: "DescriptionList" },
                    ),
                    " ajuda a organizar e explicar informações relacionadas, perfeitas para listar e definir termos.",
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
                          "https://www.figma.com/file/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?type=design&node-id=1641-12874&mode=design&t=NEHn9Sk29i52RYc4-0",
                          "_blank",
                        );
                      },
                    },
                    {
                      title: "Open in GitHub",
                      onClick: () => {
                        window.open(
                          "https://github.com/metzevandro/Zeroz/blob/master/src/app/components/DescriptionList/DescriptionList.tsx",
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
                        '<DescriptionList direction="row" title="title" description="description" />\n',
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
    "./src/app/components/DescriptionList/DescriptionList.stories.tsx": (
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
          default: () => DescriptionList_stories,
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
        DescriptionList = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/DescriptionList/DescriptionList.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(DescriptionList.A, options);
      DescriptionList.A && DescriptionList.A.locals && DescriptionList.A.locals;
      __webpack_require__("./node_modules/next/dist/compiled/react/index.js");
      const DescriptionList_DescriptionList_DescriptionList = (param) => {
          let { title, description, direction } = param;
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsxs)("div", {
              className: "description-list-root ".concat(direction),
              children: [
                (0, jsx_runtime.jsx)("div", {
                  className: "title",
                  children: title,
                }),
                (0, jsx_runtime.jsx)("div", {
                  className: "description",
                  children: description,
                }),
              ],
            }),
          });
        },
        components_DescriptionList_DescriptionList =
          DescriptionList_DescriptionList_DescriptionList;
      DescriptionList_DescriptionList_DescriptionList.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "DescriptionList",
        props: {
          title: { required: !0, tsType: { name: "string" }, description: "" },
          description: {
            required: !1,
            tsType: { name: "string" },
            description: "",
          },
          direction: {
            required: !0,
            tsType: {
              name: "union",
              raw: '"row" | "column"',
              elements: [
                { name: "literal", value: '"row"' },
                { name: "literal", value: '"column"' },
              ],
            },
            description: "",
          },
        },
      };
      __webpack_require__("./src/app/styles.scss");
      var _Row_parameters,
        _Row_parameters_docs,
        _Row_parameters1,
        _Column_parameters,
        _Column_parameters_docs,
        _Column_parameters1,
        app_components_DescriptionList_DescriptionList = __webpack_require__(
          "./src/app/components/DescriptionList/DescriptionList.mdx",
        );
      const DescriptionList_stories = {
          title: "Components/Description List",
          component: components_DescriptionList_DescriptionList,
          parameters: {
            layout: "padded",
            page: app_components_DescriptionList_DescriptionList.default,
          },
        },
        Template = (args) =>
          (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              (0, jsx_runtime.jsx)(components_DescriptionList_DescriptionList, {
                direction: args.direction,
                title: args.title,
                description: args.description,
              }),
              (0, jsx_runtime.jsx)(components_DescriptionList_DescriptionList, {
                direction: args.direction,
                title: args.title,
                description: args.description,
              }),
              (0, jsx_runtime.jsx)(components_DescriptionList_DescriptionList, {
                direction: args.direction,
                title: args.title,
                description: args.description,
              }),
            ],
          }),
        Row = Template.bind({});
      Row.args = {
        direction: "row",
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas maecenas pharetra convallis. Sit amet facilisis magna etiam tempor orci eu lobortis. Nibh praesent tristique magna sit amet purus gravida.",
      };
      const Column = Template.bind({});
      (Column.args = {
        direction: "column",
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas maecenas pharetra convallis. Sit amet facilisis magna etiam tempor orci eu lobortis. Nibh praesent tristique magna sit amet purus gravida.",
      }),
        (Row.parameters = {
          ...Row.parameters,
          docs: {
            ...(null === (_Row_parameters = Row.parameters) ||
            void 0 === _Row_parameters
              ? void 0
              : _Row_parameters.docs),
            source: {
              originalSource:
                "args => {\n  return <>\r\n      <DescriptionList direction={args.direction} title={args.title} description={args.description} />\r\n      <DescriptionList direction={args.direction} title={args.title} description={args.description} />\r\n      <DescriptionList direction={args.direction} title={args.title} description={args.description} />\r\n    </>;\n}",
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
                "args => {\n  return <>\r\n      <DescriptionList direction={args.direction} title={args.title} description={args.description} />\r\n      <DescriptionList direction={args.direction} title={args.title} description={args.description} />\r\n      <DescriptionList direction={args.direction} title={args.title} description={args.description} />\r\n    </>;\n}",
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
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/DescriptionList/DescriptionList.scss":
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
          ".description-list-root{width:100%;display:flex;padding:var(--s-spacing-small) 0;justify-content:space-between;border-bottom:var(--s-border-width-hairline) solid var(--s-color-border-default);align-items:start;margin:0;margin-block-end:0;margin-block-start:0}.description-list-root.row{flex-direction:row}.description-list-root.row *{width:50%}.description-list-root.column{gap:var(--s-spacing-xx-small);flex-direction:column}.description-list-root .title{font:var(--s-typography-paragraph-strong);color:var(--s-color-content-default)}.description-list-root .description{font:var(--s-typography-paragraph-regular);color:var(--s-color-content-light)}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/DescriptionList/DescriptionList.scss",
            ],
            names: [],
            mappings:
              "AAAA,uBACE,UAAA,CACA,YAAA,CACA,gCAAA,CACA,6BAAA,CACA,gFAAA,CAEA,iBAAA,CACA,QAAA,CACA,kBAAA,CACA,oBAAA,CAEA,2BACE,kBAAA,CAEA,6BACE,SAAA,CAIJ,8BACE,6BAAA,CACA,qBAAA,CAGF,8BACE,yCAAA,CACA,oCAAA,CAGF,oCACE,0CAAA,CACA,kCAAA",
            sourcesContent: [
              ".description-list-root {\n  width: 100%;\n  display: flex;\n  padding: var(--s-spacing-small) 0;\n  justify-content: space-between;\n  border-bottom: var(--s-border-width-hairline) solid\n    var(--s-color-border-default);\n  align-items: start;\n  margin: 0;\n  margin-block-end: 0;\n  margin-block-start: 0;\n\n  &.row {\n    flex-direction: row;\n\n    * {\n      width: 50%;\n    }\n  }\n\n  &.column {\n    gap: var(--s-spacing-xx-small);\n    flex-direction: column;\n  }\n\n  .title {\n    font: var(--s-typography-paragraph-strong);\n    color: var(--s-color-content-default);\n  }\n\n  .description {\n    font: var(--s-typography-paragraph-regular);\n    color: var(--s-color-content-light);\n  }\n}\n",
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
