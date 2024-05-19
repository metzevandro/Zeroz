"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [4779],
  {
    "./src/app/components/Aside/Aside.mdx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
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
        _Aside_stories_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./src/app/components/Aside/Aside.stories.tsx",
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
                { of: _Aside_stories_tsx__WEBPACK_IMPORTED_MODULE_2__ },
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components.h1,
                { id: "aside", children: "Aside" },
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
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components.li,
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                          _components.a,
                          { href: "#feedback", children: "Feedback" },
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
                      { children: "Aside" },
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
                          "https://www.figma.com/file/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?type=design&node-id=435-10008&mode=design&t=944jf8qwfPHcxTZT-0",
                          "_blank",
                        );
                      },
                    },
                    {
                      title: "Open in GitHub",
                      onClick: () => {
                        window.open(
                          "https://github.com/metzevandro/Zeroz/blob/master/src/app/components/Aside/Aside.tsx",
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
                      of: _Aside_stories_tsx__WEBPACK_IMPORTED_MODULE_2__,
                    },
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
                        'const Template = () => {\n  const [isOpenAside, setIsOpenAside] = useState(false);\n\n  const toggleAside = () => {\n    setIsOpenAside(!isOpenAside);\n  };\n\n  return (\n    <>\n      <div style={{ width: "min-content" }}>\n        <Button\n          size="md"\n          variant="primary"\n          label="Click here!"\n          onClick={toggleAside}\n        />\n      </div>\n      <Aside\n        isOpen={isOpenAside}\n        toggleAside={toggleAside}\n        title={args.title}\n        description={args.description}\n        content={\n          <AsideContent>\n            <div className="slot">\n              <Icon icon="refresh" size="md" />\n              Slot Content\n            </div>\n          </AsideContent>\n        }\n        footer={\n          <AsideFooter>\n            <div style={{ width: "min-content" }}>\n              <ButtonGroup\n                direction="row"\n                variantFirstButton="primary"\n                variantSecondButton="secondary"\n                contentFirstButton="Button"\n                contentSecondButton="Button"\n              />\n            </div>\n          </AsideFooter>\n        }\n      />\n    </>\n  );\n};\n\nexport default Template;\n',
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
    "./src/app/components/Aside/Aside.stories.tsx": (
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
      var _Default_parameters,
        _Default_parameters_docs,
        _Default_parameters1,
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        ),
        _Aside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./src/app/components/Aside/Aside.tsx",
        ),
        _Icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./src/app/components/Icon/Icon.tsx",
        ),
        _ButtonGroup_ButtonGroup__WEBPACK_IMPORTED_MODULE_5__ =
          (__webpack_require__("./src/app/components/Aside/Aside.scss"),
          __webpack_require__(
            "./src/app/components/ButtonGroup/ButtonGroup.tsx",
          )),
        _Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          "./src/app/components/Button/Button.tsx",
        ),
        _Aside_mdx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          "./src/app/components/Aside/Aside.mdx",
        );
      __webpack_require__("./src/app/styles.scss");
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Components/Aside",
          component: _Aside__WEBPACK_IMPORTED_MODULE_2__.Ay,
          parameters: {
            layout: "fullscreen",
            docs: {
              page: _Aside_mdx__WEBPACK_IMPORTED_MODULE_7__.default,
              story: { height: "500px" },
            },
          },
        },
        Default = ((args) => {
          const [isOpenAside, setIsOpenAside] = (0,
            react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
            toggleAside = () => {
              setIsOpenAside(!isOpenAside);
            };
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
            {
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                  style: { width: "min-content" },
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _Button_Button__WEBPACK_IMPORTED_MODULE_6__.A,
                    {
                      size: "md",
                      variant: "primary",
                      label: "Click here!",
                      onClick: toggleAside,
                    },
                  ),
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _Aside__WEBPACK_IMPORTED_MODULE_2__.Ay,
                  {
                    isOpen: isOpenAside,
                    toggleAside,
                    title: args.title,
                    description: args.description,
                    content: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _Aside__WEBPACK_IMPORTED_MODULE_2__.cD,
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          "div",
                          {
                            className: "slot",
                            children: [
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _Icon_Icon__WEBPACK_IMPORTED_MODULE_3__.A,
                                { icon: "refresh", size: "md" },
                              ),
                              "Slot Content",
                            ],
                          },
                        ),
                      },
                    ),
                    footer: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _Aside__WEBPACK_IMPORTED_MODULE_2__.iE,
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          "div",
                          {
                            style: { width: "min-content" },
                            children: (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _ButtonGroup_ButtonGroup__WEBPACK_IMPORTED_MODULE_5__.A,
                              {
                                direction: "row",
                                variantFirstButton: "primary",
                                variantSecondButton: "secondary",
                                contentFirstButton: "Button",
                                contentSecondButton: "Button",
                              },
                            ),
                          },
                        ),
                      },
                    ),
                  },
                ),
              ],
            },
          );
        }).bind({});
      (Default.args = {
        title: "Title aside here!",
        description: "Aside description",
      }),
        (Default.parameters = {
          ...Default.parameters,
          docs: {
            ...(null === (_Default_parameters = Default.parameters) ||
            void 0 === _Default_parameters
              ? void 0
              : _Default_parameters.docs),
            source: {
              originalSource:
                '(args: Args) => {\n  const [isOpenAside, setIsOpenAside] = useState(false);\n  const toggleAside = () => {\n    setIsOpenAside(!isOpenAside);\n  };\n  return <>\r\n      <div style={{\n      width: "min-content"\n    }}>\r\n        <Button size="md" variant="primary" label="Click here!" onClick={toggleAside} />\r\n      </div>\r\n      <Aside isOpen={isOpenAside} toggleAside={toggleAside} title={args.title} description={args.description} content={<AsideContent>\r\n            <div className="slot">\r\n              <Icon icon="refresh" size="md" />\r\n              Slot Content\r\n            </div>\r\n          </AsideContent>} footer={<AsideFooter>\r\n            <div style={{\n        width: "min-content"\n      }}>\r\n              <ButtonGroup direction="row" variantFirstButton="primary" variantSecondButton="secondary" contentFirstButton="Button" contentSecondButton="Button" />\r\n            </div>\r\n          </AsideFooter>} />\r\n    </>;\n}',
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
  },
]);
