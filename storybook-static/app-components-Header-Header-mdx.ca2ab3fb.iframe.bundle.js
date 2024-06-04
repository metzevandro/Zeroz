(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [2247],
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
    "./src/app/components/Header/Header.mdx": (
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
        C_Users_metzx_Desktop_ZeroZ_web_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),
        _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/@storybook/blocks/dist/index.mjs",
        ),
        _Header_stories_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./src/app/components/Header/Header.stories.tsx",
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
          C_Users_metzx_Desktop_ZeroZ_web_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),
          ...props.components,
        };
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,
          {
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,
                { of: _Header_stories_tsx__WEBPACK_IMPORTED_MODULE_2__ },
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components.h1,
                { id: "header", children: "Header" },
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
                      { children: "Header" },
                    ),
                    " é utilizado para criar uma barra lateral que pode ser aberta ou fechada. É útil para mostrar conteúdo adicional ou opções de navegação em uma aplicação.",
                  ],
                },
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,
                {
                  iframeHeight: 600,
                  additionalActions: [
                    {
                      title: "Open in Figma",
                      onClick: () => {
                        window.open(
                          "https://www.figma.com/file/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?type=design&node-id=435-10019&mode=design&t=FxaKlQMHGE14028d-0",
                          "_blank",
                        );
                      },
                    },
                    {
                      title: "Open in GitHub",
                      onClick: () => {
                        window.open(
                          "https://github.com/metzevandro/Zeroz/blob/master/src/app/components/Header/Header.tsx",
                          "_blank",
                        );
                      },
                    },
                  ],
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gG,
                    {
                      name: "primary",
                      of: _Header_stories_tsx__WEBPACK_IMPORTED_MODULE_2__,
                    },
                  ),
                },
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components.h2,
                { id: "como-usar", children: "Como usar" },
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
                        'const Template = () => {\n  return (\n    <>\n      <Header\n        breadcrumb={\n          <>\n            <BreadcrumbRoot href="" pageName="Breadcrumb">\n              <Breadcrumb href="" pageName="Breadcrumb" />\n            </BreadcrumbRoot>\n          </>\n        }\n        onClick={}\n      >\n        <HeaderProfile name="Username">\n          <DropDownMenu dropDownMenu>\n            <DropDownMenuTitle content="Settings" />\n            <DropDownMenuItem content="Item 1" />\n            <DropDownMenuItem content="Item 2" />\n            <DropDownMenuItem content="Settings" typeIcon="settings" />\n          </DropDownMenu>\n        </HeaderProfile>\n      </Header>\n    </>\n  );\n};\n',
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
          C_Users_metzx_Desktop_ZeroZ_web_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),
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
    "./src/app/components/Header/Header.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Default_parameters,
        _Default_parameters_docs,
        _Default_parameters1,
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        ),
        _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./src/app/components/Header/Header.tsx",
        ),
        _DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            "./src/app/components/DropdownMenu/DropdownMenu.tsx",
          ),
        _Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./src/app/components/Breadcrumb/Breadcrumb.tsx"),
        _Header_mdx__WEBPACK_IMPORTED_MODULE_6__ =
          (__webpack_require__("./src/app/styles.scss"),
          __webpack_require__("./src/app/components/Header/Header.mdx"));
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Components/Header",
          component: _Header__WEBPACK_IMPORTED_MODULE_2__.A,
          parameters: {
            layout: "fullscreen",
            docs: {
              page: _Header_mdx__WEBPACK_IMPORTED_MODULE_6__.default,
              story: { height: "500px" },
            },
          },
          args: { toggle: !1 },
        },
        Default = ((args) => {
          const [isOpenHeader, setIsOpenHeader] = (0,
          react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
            {
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _Header__WEBPACK_IMPORTED_MODULE_2__.A,
                {
                  breadcrumb: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                    {
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_4__.A,
                        {
                          href: "",
                          pageName: "Breadcrumb",
                          children: (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_4__.Q,
                            { href: "", pageName: "Breadcrumb" },
                          ),
                        },
                      ),
                    },
                  ),
                  onClick: () => {
                    setIsOpenHeader(!isOpenHeader);
                  },
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _Header__WEBPACK_IMPORTED_MODULE_2__.h,
                    {
                      name: "Username",
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        _DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_3__.Ay,
                        {
                          dropDownMenu: !0,
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_3__.Hg,
                              { content: "Settings" },
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_3__.iO,
                              { content: "Item 1" },
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_3__.iO,
                              { content: "Item 2" },
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_3__.iO,
                              { content: "Settings", typeIcon: "settings" },
                            ),
                          ],
                        },
                      ),
                    },
                  ),
                },
              ),
            },
          );
        }).bind({});
      (Default.args = {}),
        (Default.parameters = {
          ...Default.parameters,
          docs: {
            ...(null === (_Default_parameters = Default.parameters) ||
            void 0 === _Default_parameters
              ? void 0
              : _Default_parameters.docs),
            source: {
              originalSource:
                'args => {\n  const [isOpenHeader, setIsOpenHeader] = useState(false);\n  const toggleHeader = () => {\n    setIsOpenHeader(!isOpenHeader);\n  };\n  return <>\r\n      <Header breadcrumb={<>\r\n            <BreadcrumbRoot href="" pageName="Breadcrumb">\r\n              <Breadcrumb href="" pageName="Breadcrumb" />\r\n            </BreadcrumbRoot>\r\n          </>} onClick={toggleHeader}>\r\n        <HeaderProfile name="Username">\r\n          <DropDownMenu dropDownMenu>\r\n            <DropDownMenuTitle content="Settings" />\r\n            <DropDownMenuItem content="Item 1" />\r\n            <DropDownMenuItem content="Item 2" />\r\n            <DropDownMenuItem content="Settings" typeIcon="settings" />\r\n          </DropDownMenu>\r\n        </HeaderProfile>\r\n      </Header>\r\n    </>;\n}',
              ...(null === (_Default_parameters1 = Default.parameters) ||
              void 0 === _Default_parameters1 ||
              null === (_Default_parameters_docs = _Default_parameters1.docs) ||
              void 0 === _Default_parameters_docs
                ? void 0
                : _Default_parameters_docs.source),
            },
          },
        });
      const __namedExportsOrder = ["Default"];
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
