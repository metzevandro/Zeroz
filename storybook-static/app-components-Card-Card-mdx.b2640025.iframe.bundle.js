(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [6033],
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
    "./src/app/components/Card/Card.mdx": (
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
        _Card_stories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./src/app/components/Card/Card.stories.tsx",
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
                { of: _Card_stories__WEBPACK_IMPORTED_MODULE_2__ },
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components.h1,
                { id: "card", children: "Card" },
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
                      { children: "Card" },
                    ),
                    " é usado ​​para agrupar conteúdos e tarefas semelhantes. Eles ajudam você a ler e fazer coisas. O card tem 4 componentes filhos: o ",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components.code,
                      { children: "CardImage" },
                    ),
                    ", ",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components.code,
                      { children: "CardHeader" },
                    ),
                    ", o ",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components.code,
                      { children: "CardContent" },
                    ),
                    " e o ",
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components.code,
                      { children: "CardFooter" },
                    ),
                    ", que podem ou não ser usados (é aconselhado o uso).",
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
                          "https://www.figma.com/file/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?type=design&node-id=435-10014&mode=design&t=HveeJ0emyZvlNEZy-0",
                          "_blank",
                        );
                      },
                    },
                    {
                      title: "Open in GitHub",
                      onClick: () => {
                        window.open(
                          "https://github.com/metzevandro/Zeroz/blob/master/src/app/components/Card/Card.tsx",
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
                        '<Card>\n  <CardHeader title="Card Title" description="Card Description" />\n  <CardContent>\n    <div className="slot">\n      <Icon icon="refresh" size="md" />\n      Slot Content\n    </div>\n  </CardContent>\n  <CardFooter>\n    <div style={{ width: "min-content" }}>\n      <ButtonGroup\n        direction="row"\n        variantFirstButton="primary"\n        variantSecondButton="secondary"\n        contentFirstButton="Button"\n        contentSecondButton="Button"\n      />\n    </div>\n  </CardFooter>\n</Card>\n',
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
    "./src/app/components/Card/Card.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          WithImage: () => WithImage,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Card_stories,
        });
      var jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        injectStylesIntoStyleTag =
          (__webpack_require__("./src/app/styles.scss"),
          __webpack_require__(
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
        Card = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Card/Card.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Card.A, options);
      Card.A && Card.A.locals && Card.A.locals;
      function Card_Card_Card(props) {
        return (0, jsx_runtime.jsx)("div", {
          className: "card-root",
          children: props.children,
        });
      }
      function CardImage(props) {
        return (0, jsx_runtime.jsx)("div", {
          className: "card-image",
          children: props.children,
        });
      }
      function CardHeader(props) {
        return (0, jsx_runtime.jsxs)("div", {
          className: "card-header",
          children: [
            (0, jsx_runtime.jsx)("h1", { children: props.title }),
            (0, jsx_runtime.jsx)("p", { children: props.description }),
          ],
        });
      }
      function CardContent(props) {
        return (0, jsx_runtime.jsx)("div", {
          className: "card-content",
          children: props.children,
        });
      }
      function CardFooter(props) {
        return (0, jsx_runtime.jsx)("div", {
          className: "card-footer",
          children: props.children,
        });
      }
      (Card_Card_Card.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "Card",
        props: {
          children: {
            required: !1,
            tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
            description: "",
          },
        },
      }),
        (CardImage.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "CardImage",
          props: {
            children: {
              required: !0,
              tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
              description: "",
            },
          },
        }),
        (CardHeader.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "CardHeader",
          props: {
            title: {
              required: !0,
              tsType: { name: "string" },
              description: "",
            },
            description: {
              required: !0,
              tsType: { name: "string" },
              description: "",
            },
            children: {
              required: !1,
              tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
              description: "",
            },
          },
        }),
        (CardContent.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "CardContent",
          props: {
            children: {
              required: !0,
              tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
              description: "",
            },
          },
        }),
        (CardFooter.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "CardFooter",
          props: {
            children: {
              required: !0,
              tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
              description: "",
            },
          },
        });
      var _Default_parameters,
        _Default_parameters_docs,
        _Default_parameters1,
        _WithImage_parameters,
        _WithImage_parameters_docs,
        _WithImage_parameters1,
        Icon = __webpack_require__("./src/app/components/Icon/Icon.tsx"),
        ButtonGroup = __webpack_require__(
          "./src/app/components/ButtonGroup/ButtonGroup.tsx",
        );
      const Card_stories = {
          title: "Components/Card",
          component: Card_Card_Card,
          parameters: {
            layout: "centered",
            page: __webpack_require__("./src/app/components/Card/Card.mdx")
              .default,
          },
          args: { toggle: !1 },
        },
        Default = ((args) =>
          (0, jsx_runtime.jsx)("div", {
            style: { width: "320px" },
            children: (0, jsx_runtime.jsxs)(Card_Card_Card, {
              children: [
                (0, jsx_runtime.jsx)(CardHeader, {
                  title: "Card Title",
                  description: "Card Description",
                }),
                (0, jsx_runtime.jsx)(CardContent, {
                  children: (0, jsx_runtime.jsxs)("div", {
                    className: "slot",
                    children: [
                      (0, jsx_runtime.jsx)(Icon.A, {
                        icon: "refresh",
                        size: "md",
                      }),
                      "Slot Content",
                    ],
                  }),
                }),
                (0, jsx_runtime.jsx)(CardFooter, {
                  children: (0, jsx_runtime.jsx)("div", {
                    style: { width: "min-content" },
                    children: (0, jsx_runtime.jsx)(ButtonGroup.A, {
                      direction: "row",
                      variantFirstButton: "primary",
                      variantSecondButton: "secondary",
                      contentFirstButton: "Button",
                      contentSecondButton: "Button",
                    }),
                  }),
                }),
              ],
            }),
          })).bind({});
      Default.args = {};
      const WithImage = ((args) =>
        (0, jsx_runtime.jsx)("div", {
          style: { width: "320px" },
          children: (0, jsx_runtime.jsxs)(Card_Card_Card, {
            children: [
              (0, jsx_runtime.jsx)(CardImage, {
                children: (0, jsx_runtime.jsx)("img", {
                  src: "https://picsum.photos/200",
                  alt: "Card Image",
                  height: 200,
                }),
              }),
              (0, jsx_runtime.jsx)(CardHeader, {
                title: "Card Title",
                description: "Card Description",
              }),
              (0, jsx_runtime.jsx)(CardContent, {
                children: (0, jsx_runtime.jsxs)("div", {
                  className: "slot",
                  children: [
                    (0, jsx_runtime.jsx)(Icon.A, {
                      icon: "refresh",
                      size: "md",
                    }),
                    "Slot Content",
                  ],
                }),
              }),
              (0, jsx_runtime.jsx)(CardFooter, {
                children: (0, jsx_runtime.jsx)("div", {
                  style: { width: "min-content" },
                  children: (0, jsx_runtime.jsx)(ButtonGroup.A, {
                    direction: "row",
                    variantFirstButton: "primary",
                    variantSecondButton: "secondary",
                    contentFirstButton: "Button",
                    contentSecondButton: "Button",
                  }),
                }),
              }),
            ],
          }),
        })).bind({});
      (WithImage.args = {}),
        (Default.parameters = {
          ...Default.parameters,
          docs: {
            ...(null === (_Default_parameters = Default.parameters) ||
            void 0 === _Default_parameters
              ? void 0
              : _Default_parameters.docs),
            source: {
              originalSource:
                'args => {\n  return <div style={{\n    width: "320px"\n  }}>\r\n      <Card>\r\n        <CardHeader title="Card Title" description="Card Description" />\r\n        <CardContent>\r\n          <div className="slot">\r\n            <Icon icon="refresh" size="md" />\r\n            Slot Content\r\n          </div>\r\n        </CardContent>\r\n        <CardFooter>\r\n          <div style={{\n          width: "min-content"\n        }}>\r\n            <ButtonGroup direction="row" variantFirstButton="primary" variantSecondButton="secondary" contentFirstButton="Button" contentSecondButton="Button" />\r\n          </div>\r\n        </CardFooter>\r\n      </Card>\r\n    </div>;\n}',
              ...(null === (_Default_parameters1 = Default.parameters) ||
              void 0 === _Default_parameters1 ||
              null === (_Default_parameters_docs = _Default_parameters1.docs) ||
              void 0 === _Default_parameters_docs
                ? void 0
                : _Default_parameters_docs.source),
            },
          },
        }),
        (WithImage.parameters = {
          ...WithImage.parameters,
          docs: {
            ...(null === (_WithImage_parameters = WithImage.parameters) ||
            void 0 === _WithImage_parameters
              ? void 0
              : _WithImage_parameters.docs),
            source: {
              originalSource:
                'args => {\n  return <div style={{\n    width: "320px"\n  }}>\r\n      <Card>\r\n        <CardImage>\r\n          <img src="https://picsum.photos/200" alt="Card Image" height={200} />\r\n        </CardImage>\r\n        <CardHeader title="Card Title" description="Card Description" />\r\n        <CardContent>\r\n          <div className="slot">\r\n            <Icon icon="refresh" size="md" />\r\n            Slot Content\r\n          </div>\r\n        </CardContent>\r\n        <CardFooter>\r\n          <div style={{\n          width: "min-content"\n        }}>\r\n            <ButtonGroup direction="row" variantFirstButton="primary" variantSecondButton="secondary" contentFirstButton="Button" contentSecondButton="Button" />\r\n          </div>\r\n        </CardFooter>\r\n      </Card>\r\n    </div>;\n}',
              ...(null === (_WithImage_parameters1 = WithImage.parameters) ||
              void 0 === _WithImage_parameters1 ||
              null ===
                (_WithImage_parameters_docs = _WithImage_parameters1.docs) ||
              void 0 === _WithImage_parameters_docs
                ? void 0
                : _WithImage_parameters_docs.source),
            },
          },
        });
      const __namedExportsOrder = ["Default", "WithImage"];
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Card/Card.scss":
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
          ".card-root{width:100%;border:var(--s-border-width-hairline) solid var(--s-color-border-default);border-radius:var(--s-border-radius-medium);gap:var(--s-spacing-nano);background-color:var(--s-color-fill-default)}.card-root .card-image img{width:100%;max-height:288px;object-fit:cover;border-top-left-radius:7px;border-top-right-radius:7px}.card-root .card-header{display:flex;flex-direction:column;padding:var(--s-spacing-medium)}.card-root .card-header h1{font:var(--s-typography-heading-small);color:var(--s-color-content-default)}.card-root .card-header p{font:var(--s-typography-paragraph-regular);color:var(--s-color-content-light)}.card-root .card-content{display:flex;flex-direction:column;padding:0 var(--s-spacing-medium) var(--s-spacing-medium) var(--s-spacing-medium);gap:var(--s-spacing-small)}.card-root .card-footer{padding:0 var(--s-spacing-medium) var(--s-spacing-medium) var(--s-spacing-medium)}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Card/Card.scss"],
            names: [],
            mappings:
              "AAAA,WACE,UAAA,CACA,yEAAA,CACA,2CAAA,CACA,yBAAA,CACA,4CAAA,CAEA,2BACE,UAAA,CACA,gBAAA,CACA,gBAAA,CACA,0BAAA,CACA,2BAAA,CAGF,wBACE,YAAA,CACA,qBAAA,CACA,+BAAA,CACA,2BACE,sCAAA,CACA,oCAAA,CAEF,0BACE,0CAAA,CACA,kCAAA,CAIJ,yBACE,YAAA,CACA,qBAAA,CACA,iFAAA,CAEA,0BAAA,CAGF,wBACE,iFAAA",
            sourcesContent: [
              ".card-root {\n  width: 100%;\n  border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n  border-radius: var(--s-border-radius-medium);\n  gap: var(--s-spacing-nano);\n  background-color: var(--s-color-fill-default);\n\n  .card-image img {\n    width: 100%;\n    max-height: 288px;\n    object-fit: cover;\n    border-top-left-radius: 7px;\n    border-top-right-radius: 7px;\n  }\n\n  .card-header {\n    display: flex;\n    flex-direction: column;\n    padding: var(--s-spacing-medium);\n    h1 {\n      font: var(--s-typography-heading-small);\n      color: var(--s-color-content-default);\n    }\n    p {\n      font: var(--s-typography-paragraph-regular);\n      color: var(--s-color-content-light);\n    }\n  }\n\n  .card-content {\n    display: flex;\n    flex-direction: column;\n    padding: 0 var(--s-spacing-medium) var(--s-spacing-medium)\n      var(--s-spacing-medium);\n    gap: var(--s-spacing-small);\n  }\n\n  .card-footer {\n    padding: 0 var(--s-spacing-medium) var(--s-spacing-medium)\n      var(--s-spacing-medium);\n  }\n}\n",
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
