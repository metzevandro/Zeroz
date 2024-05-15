(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [3957],
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
    "./src/app/components/DropdownMenu/DropdownMenu.mdx": (
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
        _DropdownMenu_stories_tsx__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            "./src/app/components/DropdownMenu/DropdownMenu.stories.tsx",
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
                { of: _DropdownMenu_stories_tsx__WEBPACK_IMPORTED_MODULE_2__ },
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components.h1,
                { id: "dropdown-menu", children: "Dropdown Menu" },
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
                      { children: "DropdownMenu" },
                    ),
                    " são ativadas por um botão e mostram uma lista de opções, permitindo que os usuários selecionem uma ou mais opções. Uma opção escolhida pode levar a uma página ou ser utilizada como uma ação para filtrar ou classificar o conteúdo existente.",
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
                          "https://www.figma.com/file/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?type=design&node-id=435-10084&mode=design&t=tKh2sXjfWnqrJ4Ax-0",
                          "_blank",
                        );
                      },
                    },
                    {
                      title: "Open in GitHub",
                      onClick: () => {
                        window.open(
                          "https://github.com/metzevandro/Zeroz/blob/master/src/app/components/DropdownMenu/DropdownMenu.tsx",
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
                        'const [isDropDownOpen, setIsDropDownOpen] = useState(false);\n\nconst toggleDropDown = () => {\n  setIsDropDownOpen(!isDropDownOpen);\n};\nreturn (\n  <>\n    <div>\n      <Button\n        size="md"\n        variant="primary"\n        label="Click here!"\n        onClick={toggleDropDown}\n      />\n      <div>\n        <DropDownMenu dropDownMenu={isDropDownOpen}>\n          <DropDownMenuTitle content="Title" />\n          <DropDownMenuItem content="Item 1" typeIcon="ac_unit" />\n          <DropDownMenuItem content="Item 2" typeIcon="ac_unit" />\n          <DropDownMenuItem content="Item 3" typeIcon="ac_unit" />\n          <DropDownMenuTitle content="Title" />\n          <DropDownMenuItem content="Item 1" />\n          <DropDownMenuItem content="Item 2" />\n        </DropDownMenu>\n      </div>\n    </div>\n  </>\n);\n',
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
    "./src/app/components/DropdownMenu/DropdownMenu.stories.tsx": (
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
        _DropdownMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./src/app/components/DropdownMenu/DropdownMenu.tsx",
        ),
        _Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./src/app/components/Button/Button.tsx",
        ),
        _DropdownMenu_mdx__WEBPACK_IMPORTED_MODULE_5__ =
          (__webpack_require__("./src/app/styles.scss"),
          __webpack_require__(
            "./src/app/components/DropdownMenu/DropdownMenu.mdx",
          ));
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Components/Dropdown Menu",
          component: _DropdownMenu__WEBPACK_IMPORTED_MODULE_2__.Ay,
          parameters: {
            layout: "centered",
            page: _DropdownMenu_mdx__WEBPACK_IMPORTED_MODULE_5__.default,
          },
        },
        Default = ((args) => {
          const [isDropDownOpen, setIsDropDownOpen] = (0,
          react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
            {
              children: (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: { width: "288px" },
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _Button_Button__WEBPACK_IMPORTED_MODULE_3__.A,
                    {
                      size: "md",
                      variant: "primary",
                      label: "Click here!",
                      onClick: () => {
                        setIsDropDownOpen(!isDropDownOpen);
                      },
                    },
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    "div",
                    {
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        _DropdownMenu__WEBPACK_IMPORTED_MODULE_2__.Ay,
                        {
                          dropDownMenu: isDropDownOpen,
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _DropdownMenu__WEBPACK_IMPORTED_MODULE_2__.Hg,
                              { content: "Title" },
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _DropdownMenu__WEBPACK_IMPORTED_MODULE_2__.iO,
                              { content: "Item 1", typeIcon: "ac_unit" },
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _DropdownMenu__WEBPACK_IMPORTED_MODULE_2__.iO,
                              { content: "Item 2", typeIcon: "ac_unit" },
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _DropdownMenu__WEBPACK_IMPORTED_MODULE_2__.iO,
                              { content: "Item 3", typeIcon: "ac_unit" },
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _DropdownMenu__WEBPACK_IMPORTED_MODULE_2__.Hg,
                              { content: "Title" },
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _DropdownMenu__WEBPACK_IMPORTED_MODULE_2__.iO,
                              { content: "Item 1" },
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _DropdownMenu__WEBPACK_IMPORTED_MODULE_2__.iO,
                              { content: "Item 2" },
                            ),
                          ],
                        },
                      ),
                    },
                  ),
                ],
              }),
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
                'args => {\n  const [isDropDownOpen, setIsDropDownOpen] = useState(false);\n  const toggleDropDown = () => {\n    setIsDropDownOpen(!isDropDownOpen);\n  };\n  return <>\r\n      <div style={{\n      width: "288px"\n    }}>\r\n        <Button size="md" variant="primary" label="Click here!" onClick={toggleDropDown} />\r\n        <div>\r\n          <DropDownMenu dropDownMenu={isDropDownOpen}>\r\n            <DropDownMenuTitle content="Title" />\r\n            <DropDownMenuItem content="Item 1" typeIcon="ac_unit" />\r\n            <DropDownMenuItem content="Item 2" typeIcon="ac_unit" />\r\n            <DropDownMenuItem content="Item 3" typeIcon="ac_unit" />\r\n            <DropDownMenuTitle content="Title" />\r\n            <DropDownMenuItem content="Item 1" />\r\n            <DropDownMenuItem content="Item 2" />\r\n          </DropDownMenu>\r\n        </div>\r\n      </div>\r\n    </>;\n}',
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
    "./src/app/components/Button/Button.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
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
      Button_Button_Button.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "Button",
        props: {
          disabled: {
            required: !1,
            tsType: { name: "boolean" },
            description: "",
          },
          label: { required: !1, tsType: { name: "string" }, description: "" },
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
          variant: {
            required: !0,
            tsType: {
              name: "union",
              raw: '"primary" | "secondary" | "success" | "warning"',
              elements: [
                { name: "literal", value: '"primary"' },
                { name: "literal", value: '"secondary"' },
                { name: "literal", value: '"success"' },
                { name: "literal", value: '"warning"' },
              ],
            },
            description: "",
          },
          typeIcon: {
            required: !1,
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
        composes: ["ButtonHTMLAttributes"],
      };
    },
    "./src/app/components/DropdownMenu/DropdownMenu.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, {
        iO: () => DropDownMenuItem,
        Hg: () => DropDownMenuTitle,
        Ay: () => components_DropdownMenu_DropdownMenu,
      });
      var jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
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
        DropdownMenu = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/DropdownMenu/DropdownMenu.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(DropdownMenu.A, options);
      DropdownMenu.A && DropdownMenu.A.locals && DropdownMenu.A.locals;
      __webpack_require__("./node_modules/next/dist/compiled/react/index.js");
      const DropDownMenu = (param) => {
          let { children, dropDownMenu } = param;
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children:
              !0 === dropDownMenu &&
              (0, jsx_runtime.jsx)("div", {
                className: "dropdown-menu-root",
                children: (0, jsx_runtime.jsx)("div", {
                  className: "dropdown-menu",
                  children,
                }),
              }),
          });
        },
        DropDownMenuTitle = (param) => {
          let { content } = param;
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)("div", {
              className: "dropdown-menu-title",
              children: content,
            }),
          });
        },
        DropDownMenuItem = (param) => {
          let { typeIcon, content, onClick } = param;
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsxs)("button", {
              className: "dropdown-menu-item",
              onClick,
              children: [
                typeIcon &&
                  (0, jsx_runtime.jsx)(Icon.A, { size: "sm", icon: typeIcon }),
                content,
              ],
            }),
          });
        },
        components_DropdownMenu_DropdownMenu = DropDownMenu;
      (DropDownMenuTitle.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "DropDownMenuTitle",
        props: {
          content: {
            required: !0,
            tsType: { name: "string" },
            description: "",
          },
        },
      }),
        (DropDownMenuItem.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "DropDownMenuItem",
          props: {
            typeIcon: {
              required: !1,
              tsType: {
                name: "union",
                raw: "string | undefined",
                elements: [{ name: "string" }, { name: "undefined" }],
              },
              description: "",
            },
            content: {
              required: !0,
              tsType: { name: "string" },
              description: "",
            },
            onClick: {
              required: !1,
              tsType: {
                name: "signature",
                type: "function",
                raw: "() => void",
                signature: { arguments: [], return: { name: "void" } },
              },
              description: "",
            },
          },
        }),
        (DropDownMenu.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "DropDownMenu",
          props: {
            children: {
              required: !0,
              tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
              description: "",
            },
            dropDownMenu: {
              required: !0,
              tsType: { name: "boolean" },
              description: "",
            },
          },
        });
    },
    "./src/app/components/Icon/Icon.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_Icon_Icon,
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
        Icon = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Icon/Icon.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Icon.A, options);
      Icon.A && Icon.A.locals && Icon.A.locals;
      __webpack_require__("./node_modules/next/dist/compiled/react/index.js");
      const Icon_Icon_Icon = (param) => {
          let { size, fill, icon } = param;
          const sizeClass = size,
            fillStyle = "'FILL' ".concat(fill ? 1 : 0);
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)("span", {
              style: { fontVariationSettings: fillStyle },
              className: "material-symbols-outlined ".concat(sizeClass),
              children: icon,
            }),
          });
        },
        components_Icon_Icon = Icon_Icon_Icon;
      Icon_Icon_Icon.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "Icon",
        props: {
          size: {
            required: !0,
            tsType: {
              name: "union",
              raw: '"sm" | "md" | "lg"',
              elements: [
                { name: "literal", value: '"sm"' },
                { name: "literal", value: '"md"' },
                { name: "literal", value: '"lg"' },
              ],
            },
            description: "",
          },
          icon: {
            required: !0,
            tsType: {
              name: "union",
              raw: "string | undefined",
              elements: [{ name: "string" }, { name: "undefined" }],
            },
            description: "",
          },
          fill: { required: !1, tsType: { name: "boolean" }, description: "" },
        },
      };
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Button/Button.scss":
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
          ".button{display:flex;align-items:center;justify-content:center;font:var(--s-typography-label-medium);border-radius:var(--s-border-radius-small);white-space:nowrap;width:100%;height:40px;box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;border:none;gap:var(--s-spacing-nano);cursor:pointer}.button.sm{height:32px;padding:var(--s-spacing-nano) var(--s-spacing-x-small)}.button.md{padding:var(--s-spacing-xx-small) var(--s-spacing-x-small);height:40px}.button.primary{background-color:var(--s-color-fill-highlight);color:var(--s-color-content-on-color)}.button.primary:hover{background-color:var(--s-color-fill-highlight-hover)}.button.primary:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.button.primary:disabled{background-color:var(--s-color-fill-disable);opacity:.64;color:var(--s-color-content-disable);border:var(--s-border-width-hairline) solid var(--s-color-border-default)}.button.secondary{background-color:var(--s-color-fill-default);color:var(--s-color-content-default);border:var(--s-border-width-hairline) solid var(--s-color-border-default)}.button.secondary:hover{background-color:var(--s-color-fill-default-hover)}.button.secondary:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.button.secondary:disabled{opacity:.64;background-color:var(--s-color-fill-disable);color:var(--s-color-content-disable);border:var(--s-border-width-hairline) solid var(--s-color-border-default)}.button.success{background-color:var(--s-color-fill-success);color:var(--s-color-content-on-color)}.button.success:hover{background-color:var(--s-color-fill-success-hover)}.button.success:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.button.success:disabled{opacity:.64;background-color:var(--s-color-fill-disable);color:var(--s-color-content-disable);border:var(--s-border-width-hairline) solid var(--s-color-border-default)}.button.warning{background-color:var(--s-color-fill-warning);color:var(--s-color-content-on-color)}.button.warning:hover{background-color:var(--s-color-fill-warning-hover)}.button.warning:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.button.warning:disabled{opacity:.64;background-color:var(--s-color-fill-disable);color:var(--s-color-content-disable);border:var(--s-border-width-hairline) solid var(--s-color-border-default)}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Button/Button.scss"],
            names: [],
            mappings:
              "AAAA,QACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,qCAAA,CACA,0CAAA,CACA,kBAAA,CACA,UAAA,CACA,WAAA,CACA,qBAAA,CACA,6BAAA,CACA,0BAAA,CACA,WAAA,CACA,yBAAA,CACA,cAAA,CAEA,WACE,WAAA,CACA,sDAAA,CAGF,WACE,0DAAA,CACA,WAAA,CAGF,gBACE,8CAAA,CACA,qCAAA,CAEA,sBACE,oDAAA,CAGF,8BACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,yBACE,4CAAA,CACA,WAAA,CACA,oCAAA,CACA,yEAAA,CAIJ,kBACE,4CAAA,CACA,oCAAA,CACA,yEAAA,CAEA,wBACE,kDAAA,CAGF,gCACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,2BACE,WAAA,CACA,4CAAA,CACA,oCAAA,CACA,yEAAA,CAIJ,gBACE,4CAAA,CACA,qCAAA,CAEA,sBACE,kDAAA,CAGF,8BACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,yBACE,WAAA,CACA,4CAAA,CACA,oCAAA,CACA,yEAAA,CAIJ,gBACE,4CAAA,CACA,qCAAA,CAEA,sBACE,kDAAA,CAGF,8BACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,yBACE,WAAA,CACA,4CAAA,CACA,oCAAA,CACA,yEAAA",
            sourcesContent: [
              ".button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font: var(--s-typography-label-medium);\n  border-radius: var(--s-border-radius-small);\n  white-space: nowrap;\n  width: 100%;\n  height: 40px;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  border: none;\n  gap: var(--s-spacing-nano);\n  cursor: pointer;\n\n  &.sm {\n    height: 32px;\n    padding: var(--s-spacing-nano) var(--s-spacing-x-small);\n  }\n\n  &.md {\n    padding: var(--s-spacing-xx-small) var(--s-spacing-x-small);\n    height: 40px;\n  }\n\n  &.primary {\n    background-color: var(--s-color-fill-highlight);\n    color: var(--s-color-content-on-color);\n\n    &:hover {\n      background-color: var(--s-color-fill-highlight-hover);\n    }\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    &:disabled {\n      background-color: var(--s-color-fill-disable);\n      opacity: 0.64;\n      color: var(--s-color-content-disable);\n      border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n    }\n  }\n\n  &.secondary {\n    background-color: var(--s-color-fill-default);\n    color: var(--s-color-content-default);\n    border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n\n    &:hover {\n      background-color: var(--s-color-fill-default-hover);\n    }\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    &:disabled {\n      opacity: 0.64;\n      background-color: var(--s-color-fill-disable);\n      color: var(--s-color-content-disable);\n      border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n    }\n  }\n\n  &.success {\n    background-color: var(--s-color-fill-success);\n    color: var(--s-color-content-on-color);\n\n    &:hover {\n      background-color: var(--s-color-fill-success-hover);\n    }\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    &:disabled {\n      opacity: 0.64;\n      background-color: var(--s-color-fill-disable);\n      color: var(--s-color-content-disable);\n      border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n    }\n  }\n\n  &.warning {\n    background-color: var(--s-color-fill-warning);\n    color: var(--s-color-content-on-color);\n\n    &:hover {\n      background-color: var(--s-color-fill-warning-hover);\n    }\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    &:disabled {\n      opacity: 0.64;\n      background-color: var(--s-color-fill-disable);\n      color: var(--s-color-content-disable);\n      border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/DropdownMenu/DropdownMenu.scss":
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
          ".dropdown-menu-root{position:relative}.dropdown-menu-root .dropdown-menu{margin-top:var(--s-spacing-xx-small);z-index:10;position:absolute;width:100%;display:flex;align-items:center;flex-direction:column;border-radius:var(--s-border-radius-small);background-color:var(--s-color-fill-default);border:var(--s-border-width-hairline) solid var(--s-color-border-default);padding:var(--s-spacing-nano);box-shadow:var(--s-shadow-level-2)}.dropdown-menu-root .dropdown-menu .dropdown-menu-title{font:var(--s-typography-paragraph-strong);padding:var(--s-spacing-xx-small) var(--s-spacing-xx-small) 0 var(--s-spacing-xx-small);border-radius:var(--s-border-radius-small);background-color:var(--s-color-fill-default);color:var(--s-color-content-default);justify-content:start;display:flex;width:100%}.dropdown-menu-root .dropdown-menu .dropdown-menu-item{justify-content:start;cursor:pointer;width:100%;font:var(--s-typography-paragraph-regular);display:flex;align-items:center;gap:var(--s-spacing-xx-small);padding:var(--s-spacing-xx-small);border-radius:var(--s-border-radius-small);background-color:var(--s-color-fill-default);color:var(--s-color-content-default)}.dropdown-menu-root .dropdown-menu .dropdown-menu-item:hover{background-color:var(--s-color-fill-default-hover)}.dropdown-menu-root .dropdown-menu .dropdown-menu-item:focus-visible{border-radius:var(--s-border-radius-small);z-index:2;outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/DropdownMenu/DropdownMenu.scss",
            ],
            names: [],
            mappings:
              "AAAA,oBACE,iBAAA,CAEA,mCACE,oCAAA,CACA,UAAA,CACA,iBAAA,CACA,UAAA,CACA,YAAA,CACA,kBAAA,CACA,qBAAA,CACA,0CAAA,CACA,4CAAA,CACA,yEAAA,CACA,6BAAA,CACA,kCAAA,CAEA,wDACE,yCAAA,CACA,uFAAA,CAEA,0CAAA,CACA,4CAAA,CACA,oCAAA,CACA,qBAAA,CACA,YAAA,CACA,UAAA,CAGF,uDACE,qBAAA,CACA,cAAA,CACA,UAAA,CACA,0CAAA,CACA,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,iCAAA,CACA,0CAAA,CACA,4CAAA,CACA,oCAAA,CAEA,6DACE,kDAAA,CAGF,qEACE,0CAAA,CACA,SAAA,CACA,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA",
            sourcesContent: [
              ".dropdown-menu-root {\n  position: relative;\n\n  .dropdown-menu {\n    margin-top: var(--s-spacing-xx-small);\n    z-index: 10;\n    position: absolute;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    border-radius: var(--s-border-radius-small);\n    background-color: var(--s-color-fill-default);\n    border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n    padding: var(--s-spacing-nano);\n    box-shadow: var(--s-shadow-level-2);\n\n    .dropdown-menu-title {\n      font: var(--s-typography-paragraph-strong);\n      padding: var(--s-spacing-xx-small) var(--s-spacing-xx-small) 0\n        var(--s-spacing-xx-small);\n      border-radius: var(--s-border-radius-small);\n      background-color: var(--s-color-fill-default);\n      color: var(--s-color-content-default);\n      justify-content: start;\n      display: flex;\n      width: 100%;\n    }\n\n    .dropdown-menu-item {\n      justify-content: start;\n      cursor: pointer;\n      width: 100%;\n      font: var(--s-typography-paragraph-regular);\n      display: flex;\n      align-items: center;\n      gap: var(--s-spacing-xx-small);\n      padding: var(--s-spacing-xx-small);\n      border-radius: var(--s-border-radius-small);\n      background-color: var(--s-color-fill-default);\n      color: var(--s-color-content-default);\n\n      &:hover {\n        background-color: var(--s-color-fill-default-hover);\n      }\n\n      &:focus-visible {\n        border-radius: var(--s-border-radius-small);\n        z-index: 2;\n        outline-width: var(--s-border-width-thin);\n        outline-color: var(--s-color-fill-highlight);\n        outline-offset: var(--s-border-width-thin);\n        outline-style: solid;\n      }\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Icon/Icon.scss":
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
          '@import"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";.material-symbols-outlined{font-weight:400;display:flex;user-select:none}.material-symbols-outlined.sm{font-size:16px}.material-symbols-outlined.md{font-size:24px}.material-symbols-outlined.lg{font-size:32px}',
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Icon/Icon.scss"],
            names: [],
            mappings:
              "AAAQ,6HAAA,CAER,2BACE,eAAA,CACA,YAAA,CACA,gBAAA,CAGF,8BACE,cAAA,CAGF,8BACE,cAAA,CAGF,8BACE,cAAA",
            sourcesContent: [
              '@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");\n\n.material-symbols-outlined {\n  font-weight: 400;\n  display: flex;\n  user-select: none;\n}\n\n.material-symbols-outlined.sm {\n  font-size: 16px;\n}\n\n.material-symbols-outlined.md {\n  font-size: 24px;\n}\n\n.material-symbols-outlined.lg {\n  font-size: 32px;\n}\n',
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
