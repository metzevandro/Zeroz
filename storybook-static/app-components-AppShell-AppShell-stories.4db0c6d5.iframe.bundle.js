"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [6477],
  {
    "./src/app/components/AppShell/AppShell.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_AppShell_AppShell,
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
        AppShell = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/AppShell/AppShell.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(AppShell.A, options);
      AppShell.A && AppShell.A.locals && AppShell.A.locals;
      const AppShell_AppShell_AppShell = ({ children }) =>
          (0, jsx_runtime.jsx)("div", { className: "app-shell", children }),
        components_AppShell_AppShell = AppShell_AppShell_AppShell;
      try {
        (AppShell_AppShell_AppShell.displayName = "AppShell"),
          (AppShell_AppShell_AppShell.__docgenInfo = {
            description: "",
            displayName: "AppShell",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/AppShell/AppShell.tsx#AppShell"
            ] = {
              docgenInfo: AppShell_AppShell_AppShell.__docgenInfo,
              name: "AppShell",
              path: "src/app/components/AppShell/AppShell.tsx#AppShell",
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
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Page/Page.scss",
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
        Button = __webpack_require__("./src/app/components/Button/Button.tsx");
      const Page_Page_Page = ({
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
          iconButtonPrimary,
          iconButtonSecondary,
          skeletonButtonPrimary,
          skeletonButtonSecondary,
          description,
        }) =>
          (0, jsx_runtime.jsx)("div", {
            style: {
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              background: "var(--s-color-background-default);",
              overflowX: "hidden",
            },
            children: (0, jsx_runtime.jsxs)("div", {
              className: "page-root",
              children: [
                (0, jsx_runtime.jsxs)("div", {
                  children: [
                    (0, jsx_runtime.jsxs)("div", {
                      className: "page-header",
                      children: [
                        withBackButton &&
                          (0, jsx_runtime.jsx)(ButtonIcon.A, {
                            onClick: onClickBackButton,
                            size: "md",
                            buttonType: "default",
                            typeIcon: "arrow_back",
                            variant: "secondary",
                          }),
                        (0, jsx_runtime.jsx)("div", {
                          className: "page-header-title",
                          children: (0, jsx_runtime.jsx)("h1", {
                            children: namePage,
                          }),
                        }),
                        (0, jsx_runtime.jsxs)("div", {
                          className: "page-header-actions",
                          children: [
                            withActionSecondary &&
                              (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                  (0, jsx_runtime.jsx)("div", {
                                    className: "button-icon-actions",
                                    children: (0, jsx_runtime.jsx)(
                                      ButtonIcon.A,
                                      {
                                        buttonType: "default",
                                        size: "md",
                                        typeIcon: `${iconButtonSecondary || "more_vert"}`,
                                        variant: "secondary",
                                        onClick: onClickActionSecondary,
                                        skeleton: skeletonButtonSecondary,
                                      },
                                    ),
                                  }),
                                  (0, jsx_runtime.jsx)("div", {
                                    className: "button-actions",
                                    children: (0, jsx_runtime.jsx)(Button.A, {
                                      size: "md",
                                      variant: "secondary",
                                      label: buttonContentSecondary,
                                      onClick: onClickActionSecondary,
                                      typeIcon: iconButtonSecondary,
                                      skeleton: skeletonButtonSecondary,
                                    }),
                                  }),
                                ],
                              }),
                            withActionPrimary &&
                              (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                  (0, jsx_runtime.jsx)("div", {
                                    className: "button-icon-actions",
                                    children: (0, jsx_runtime.jsx)(
                                      ButtonIcon.A,
                                      {
                                        buttonType: "default",
                                        size: "md",
                                        typeIcon: `${iconButtonPrimary || "add"}`,
                                        variant: "primary",
                                        onClick: onClickActionPrimary,
                                        skeleton: skeletonButtonPrimary,
                                      },
                                    ),
                                  }),
                                  (0, jsx_runtime.jsx)("div", {
                                    className: "button-actions",
                                    children: (0, jsx_runtime.jsx)(Button.A, {
                                      size: "md",
                                      variant: "primary",
                                      skeleton: skeletonButtonPrimary,
                                      typeIcon: iconButtonPrimary,
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
                    (0, jsx_runtime.jsx)("p", {
                      className:
                        "page-description " +
                        (withBackButton ? "with-back-button" : ""),
                      children: description,
                    }),
                  ],
                }),
                children,
              ],
            }),
          }),
        components_Page_Page = Page_Page_Page;
      try {
        (Page_Page_Page.displayName = "Page"),
          (Page_Page_Page.__docgenInfo = {
            description: "",
            displayName: "Page",
            props: {
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
              iconButtonPrimary: {
                defaultValue: null,
                description: "",
                name: "iconButtonPrimary",
                required: !1,
                type: { name: "string" },
              },
              iconButtonSecondary: {
                defaultValue: null,
                description: "",
                name: "iconButtonSecondary",
                required: !1,
                type: { name: "string" },
              },
              skeletonButtonPrimary: {
                defaultValue: null,
                description: "",
                name: "skeletonButtonPrimary",
                required: !1,
                type: { name: "boolean" },
              },
              skeletonButtonSecondary: {
                defaultValue: null,
                description: "",
                name: "skeletonButtonSecondary",
                required: !1,
                type: { name: "boolean" },
              },
              description: {
                defaultValue: null,
                description: "",
                name: "description",
                required: !1,
                type: { name: "ReactNode" },
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
    "./src/app/components/AppShell/AppShell.stories.tsx": (
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
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        ),
        _storybook_blocks__WEBPACK_IMPORTED_MODULE_9__ =
          (__webpack_require__("./src/app/styles.scss"),
          __webpack_require__(
            "./node_modules/@storybook/blocks/dist/index.mjs",
          )),
        _AppShell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./src/app/components/AppShell/AppShell.tsx",
        ),
        _Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./src/app/components/Sidebar/Sidebar.tsx",
        ),
        _Header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          "./src/app/components/Header/Header.tsx",
        ),
        _Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          "./src/app/components/Dropdown/Dropdown.tsx",
        ),
        _Page_Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          "./src/app/components/Page/Page.tsx",
        ),
        _Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__("./src/app/components/Breadcrumb/Breadcrumb.tsx");
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Templates/AppShell",
          component: _AppShell__WEBPACK_IMPORTED_MODULE_3__.A,
          parameters: {
            layout: "fullscreen",
            docs: {
              page: () =>
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                  {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_9__.hE,
                        {},
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_9__.Pd,
                        { children: "Template" },
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        "p",
                        {
                          children: [
                            "The ",
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              "strong",
                              { children: "AppShell" },
                            ),
                            " template serves as the primary outer framework for an application, furnishing the fundamental structure to develop applications.",
                          ],
                        },
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        "div",
                        {},
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_9__.Tn,
                        {},
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_9__.H2,
                        {},
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_9__.om,
                        {},
                      ),
                    ],
                  },
                ),
            },
          },
          tags: ["autodocs"],
          argTypes: {
            username: {
              name: "Username",
              description: "Username displayed in the header profile.",
              type: { name: "string" },
              table: { category: "Data", type: { summary: "string" } },
            },
            pageName: {
              name: "Page Name",
              description:
                "Page name displayed in the header and sidebar item.",
              type: { name: "string" },
              table: { category: "Data", type: { summary: "string" } },
            },
            description: {
              name: "Page Description",
              description: "Page description displayed in the Page component.",
              type: { name: "string" },
              table: { category: "Data", type: { summary: "string" } },
            },
            sidebarItemIcon: {
              name: "Sidebar Icon",
              description: "Icon displayed in the sidebar item.",
              type: { name: "string" },
              table: { category: "Appearance", type: { summary: "string" } },
            },
            buttonContentPrimary: {
              name: "Primary Button Content",
              description: "Text displayed in the primary button.",
              type: { name: "string" },
              table: { category: "Actions", type: { summary: "string" } },
            },
            buttonContentSecondary: {
              name: "Secondary Button Content",
              description: "Text displayed in the secondary button.",
              type: { name: "string" },
              table: { category: "Actions", type: { summary: "string" } },
            },
            withActionPrimary: {
              name: "Enable Primary Action",
              description: "Determines if the primary action is enabled.",
              type: { name: "boolean" },
              table: { category: "Actions", type: { summary: "boolean" } },
            },
            withActionSecondary: {
              name: "Enable Secondary Action",
              description: "Determines if the secondary action is enabled.",
              type: { name: "boolean" },
              table: { category: "Actions", type: { summary: "boolean" } },
            },
            withBackButton: {
              name: "Enable Back Button",
              description: "Determines if the back button is present.",
              type: { name: "boolean" },
              table: { category: "Actions", type: { summary: "boolean" } },
            },
            onClick: {
              name: "On Click",
              description:
                "Callback function triggered when clicking on the header.",
              action: "clicked",
              table: {
                category: "Events",
                type: {
                  summary:
                    "(event: React.MouseEvent<HTMLButtonElement>) => void",
                },
              },
            },
          },
        },
        Default = ((args) => {
          const [isOpenSidebar, setIsOpenSidebar] = (0,
            react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
            toggleSidebar = () => {
              setIsOpenSidebar(!isOpenSidebar);
            };
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
            {
              children: (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                _AppShell__WEBPACK_IMPORTED_MODULE_3__.A,
                {
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      _Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_4__.Ay,
                      {
                        brandSize: "sm",
                        setToggleSidebar: toggleSidebar,
                        brand: "/logo-sm.svg",
                        toggle: isOpenSidebar,
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_4__.FL,
                            { title: "Pages" },
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_4__.uk,
                            {
                              fillIcon: !0,
                              isActive: !0,
                              icon: args.sidebarItemIcon,
                              title: args.pageName,
                            },
                          ),
                        ],
                      },
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _Header_Header__WEBPACK_IMPORTED_MODULE_5__.A,
                      {
                        breadcrumb: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                          {
                            children: (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_8__.A,
                              {
                                items: [{ pageName: args.pageName, href: "/" }],
                              },
                            ),
                          },
                        ),
                        onClick: toggleSidebar,
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _Header_Header__WEBPACK_IMPORTED_MODULE_5__.h,
                          {
                            letter: args.username,
                            name: args.username,
                            children: (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              _Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_6__.Ay,
                              {
                                dropdown: !0,
                                children: [
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_6__.EI,
                                    { content: "Settings" },
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_6__.tJ,
                                    {
                                      content: "Settings",
                                      typeIcon: "settings",
                                    },
                                  ),
                                ],
                              },
                            ),
                          },
                        ),
                      },
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _Page_Page__WEBPACK_IMPORTED_MODULE_7__.A,
                      {
                        namePage: args.pageName,
                        buttonContentPrimary: args.buttonContentPrimary,
                        buttonContentSecondary: args.buttonContentSecondary,
                        withActionPrimary: args.withActionPrimary,
                        withActionSecondary: args.withActionSecondary,
                        withBackButton: args.withBackButton,
                        description: args.description,
                      },
                    ),
                  ],
                },
              ),
            },
          );
        }).bind({});
      Default.args = {
        username: "Username",
        description: "Description",
        pageName: "Page name",
        sidebarItemIcon: "home",
        withBackButton: !0,
        withActionPrimary: !0,
        withActionSecondary: !0,
        buttonContentPrimary: "Button",
        buttonContentSecondary: "Button",
      };
      const __namedExportsOrder = ["Default"];
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              'args => {\n  const [isOpenSidebar, setIsOpenSidebar] = useState(false);\n  const toggleSidebar = () => {\n    setIsOpenSidebar(!isOpenSidebar);\n  };\n  return <>\r\n      <AppShell>\r\n        <Sidebar brandSize="sm" setToggleSidebar={toggleSidebar} brand="/logo-sm.svg" toggle={isOpenSidebar}>\r\n          <SidebarTitle title="Pages" />\r\n          <SidebarItem fillIcon={true} isActive={true} icon={args.sidebarItemIcon} title={args.pageName} />\r\n        </Sidebar>\r\n        <Header breadcrumb={<>\r\n              <Breadcrumb items={[{\n          pageName: args.pageName,\n          href: "/"\n        }]} />\r\n            </>} onClick={toggleSidebar}>\r\n          <HeaderProfile letter={args.username} name={args.username}>\r\n            <Dropdown dropdown>\r\n              <DropdownTitle content="Settings" />\r\n              <DropdownItem content="Settings" typeIcon="settings" />\r\n            </Dropdown>\r\n          </HeaderProfile>\r\n        </Header>\r\n        <Page namePage={args.pageName} buttonContentPrimary={args.buttonContentPrimary} buttonContentSecondary={args.buttonContentSecondary} withActionPrimary={args.withActionPrimary} withActionSecondary={args.withActionSecondary} withBackButton={args.withBackButton} description={args.description}></Page>\r\n      </AppShell>\r\n    </>;\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      };
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/AppShell/AppShell.scss":
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
          '.app-shell{display:grid;background-color:var(--s-color-background-default);justify-content:center;align-items:start;grid-template-columns:auto 4fr;grid-template-rows:auto 1fr;grid-template-areas:"aside header" "aside main"}@media screen and (max-width: 768px){.app-shell{align-items:start;height:100dvh;justify-content:normal;grid-template-columns:1fr;grid-template-areas:"header" "main"}}',
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/AppShell/AppShell.scss"],
            names: [],
            mappings:
              "AAAA,WACE,YAAA,CACA,kDAAA,CACA,sBAAA,CACA,iBAAA,CACA,8BAAA,CACA,2BAAA,CACA,+CACE,CAIJ,qCACE,WACE,iBAAA,CACA,aAAA,CACA,sBAAA,CACA,yBAAA,CACA,mCACE,CAAA",
            sourcesContent: [
              '.app-shell {\n  display: grid;\n  background-color: var(--s-color-background-default);\n  justify-content: center;\n  align-items: start;\n  grid-template-columns: auto 4fr;\n  grid-template-rows: auto 1fr;\n  grid-template-areas:\n    "aside header"\n    "aside main";\n}\n\n@media screen and (max-width: 768px) {\n  .app-shell {\n    align-items: start;\n    height: 100dvh;\n    justify-content: normal;\n    grid-template-columns: 1fr;\n    grid-template-areas:\n      "header"\n      "main";\n  }\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Page/Page.scss":
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
          ".page-root{grid-area:main;padding:var(--s-spacing-medium) var(--s-spacing-x-large);display:flex;flex-direction:column;width:100%;max-width:1280px;gap:var(--s-spacing-medium)}.page-root .page-description{display:flex;flex-direction:column;white-space:normal;word-wrap:break-word;color:var(--s-color-content-default)}.page-root .page-description.with-back-button{padding-left:var(--s-spacing-huge)}.page-root .page-header{display:flex;flex-direction:row;justify-content:space-between;align-items:center;box-sizing:border-box;gap:var(--s-spacing-small)}.page-root .page-header .page-header-title{width:100%;display:flex;align-items:center;gap:var(--s-spacing-small);min-height:var(--s-spacing-x-large);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.page-root .page-header .page-header-title h1{font:var(--s-typography-heading-large);line-height:var(--s-line-height-32);color:var(--s-color-content-default);overflow:hidden;text-overflow:ellipsis}.page-root .page-header .page-header-actions{display:flex;gap:var(--s-spacing-xx-small)}.page-root .page-header .page-header-actions .button-icon-actions{display:none}@media screen and (max-width: 768px){.page-root{padding:var(--s-spacing-medium) var(--s-spacing-small)}.page-root .page-header .page-header-actions .button-actions{display:none}.page-root .page-header .page-header-actions .button-icon-actions{display:flex}}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Page/Page.scss"],
            names: [],
            mappings:
              "AAAA,WACE,cAAA,CACA,wDAAA,CACA,YAAA,CACA,qBAAA,CACA,UAAA,CACA,gBAAA,CACA,2BAAA,CAEA,6BACE,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,oBAAA,CACA,oCAAA,CACA,8CACE,kCAAA,CAIJ,wBACE,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,kBAAA,CACA,qBAAA,CACA,0BAAA,CAEA,2CACE,UAAA,CACA,YAAA,CACA,kBAAA,CACA,0BAAA,CACA,mCAAA,CACA,kBAAA,CACA,eAAA,CACA,sBAAA,CAEA,8CACE,sCAAA,CACA,mCAAA,CACA,oCAAA,CACA,eAAA,CACA,sBAAA,CAIJ,6CACE,YAAA,CAEA,6BAAA,CAEA,kEACE,YAAA,CAMR,qCACE,WACE,sDAAA,CAGI,6DACE,YAAA,CAEF,kEACE,YAAA,CAAA",
            sourcesContent: [
              ".page-root {\n  grid-area: main;\n  padding: var(--s-spacing-medium) var(--s-spacing-x-large);\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 1280px;\n  gap: var(--s-spacing-medium);\n\n  .page-description {\n    display: flex;\n    flex-direction: column;\n    white-space: normal;\n    word-wrap: break-word;\n    color: var(--s-color-content-default);\n    &.with-back-button {\n      padding-left: var(--s-spacing-huge);\n    }\n  }\n\n  .page-header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    box-sizing: border-box;\n    gap: var(--s-spacing-small);\n\n    .page-header-title {\n      width: 100%;\n      display: flex;\n      align-items: center;\n      gap: var(--s-spacing-small);\n      min-height: var(--s-spacing-x-large);\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n\n      h1 {\n        font: var(--s-typography-heading-large);\n        line-height: var(--s-line-height-32);\n        color: var(--s-color-content-default);\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n    }\n\n    .page-header-actions {\n      display: flex;\n\n      gap: var(--s-spacing-xx-small);\n\n      .button-icon-actions {\n        display: none;\n      }\n    }\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .page-root {\n    padding: var(--s-spacing-medium) var(--s-spacing-small);\n    .page-header {\n      .page-header-actions {\n        .button-actions {\n          display: none;\n        }\n        .button-icon-actions {\n          display: flex;\n        }\n      }\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
