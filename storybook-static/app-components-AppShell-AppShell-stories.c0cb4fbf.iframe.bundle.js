"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [6477],
  {
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
      var _Default_parameters,
        _Default_parameters_docs,
        _Default_parameters1,
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        ),
        _AppShell__WEBPACK_IMPORTED_MODULE_3__ =
          (__webpack_require__("./src/app/styles.scss"),
          __webpack_require__("./src/app/components/AppShell/AppShell.tsx")),
        _Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./src/app/components/Sidebar/Sidebar.tsx",
        ),
        _Header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          "./src/app/components/Header/Header.tsx",
        ),
        _DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            "./src/app/components/DropdownMenu/DropdownMenu.tsx",
          ),
        _Page_Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          "./src/app/components/Page/Page.tsx",
        ),
        _Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__("./src/app/components/Breadcrumb/Breadcrumb.tsx");
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Templates/AppShell",
          component: _AppShell__WEBPACK_IMPORTED_MODULE_3__.A,
          parameters: { layout: "fullscreen" },
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
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_4__.Ay,
                      {
                        setToggleSidebar: toggleSidebar,
                        brand: "/logo-sm.svg",
                        toggle: isOpenSidebar,
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_4__.Pg,
                          {
                            title: "Sidebar",
                            children: (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_4__.uk,
                              {
                                fillIcon: !0,
                                active: !1,
                                icon: "settings",
                                title: "Settings",
                              },
                            ),
                          },
                        ),
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
                                href: "",
                                pageName: "Breadcrumb",
                                children: (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_8__.Q,
                                  { href: "", pageName: "Breadcrumb" },
                                ),
                              },
                            ),
                          },
                        ),
                        onClick: toggleSidebar,
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _Header_Header__WEBPACK_IMPORTED_MODULE_5__.h,
                          {
                            name: "Username",
                            children: (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              _DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_6__.Ay,
                              {
                                dropDownMenu: !0,
                                children: [
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_6__.Hg,
                                    { content: "Settings" },
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_6__.iO,
                                    { content: "Item 1" },
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_6__.iO,
                                    { content: "Item 2" },
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_6__.iO,
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
                        columnLayout: "1",
                        namePage: "Page Name",
                        buttonContentSecondary: "Button",
                        withActionSecondary: !0,
                        buttonContentPrimary: "Button",
                        withActionPrimary: !0,
                        withBackButton: !0,
                      },
                    ),
                  ],
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
                'args => {\n  const [isOpenSidebar, setIsOpenSidebar] = useState(false);\n  const toggleSidebar = () => {\n    setIsOpenSidebar(!isOpenSidebar);\n  };\n  return <>\r\n      <AppShell>\r\n        <Sidebar setToggleSidebar={toggleSidebar} brand="/logo-sm.svg" toggle={isOpenSidebar}>\r\n          <SidebarList title="Sidebar">\r\n            <SidebarItem fillIcon={true} active={false} icon="settings" title="Settings" />\r\n          </SidebarList>\r\n        </Sidebar>\r\n        <Header breadcrumb={<>\r\n              <BreadcrumbRoot href="" pageName="Breadcrumb">\r\n                <Breadcrumb href="" pageName="Breadcrumb" />\r\n              </BreadcrumbRoot>\r\n            </>} onClick={toggleSidebar}>\r\n          <HeaderProfile name="Username">\r\n            <DropDownMenu dropDownMenu>\r\n              <DropDownMenuTitle content="Settings" />\r\n              <DropDownMenuItem content="Item 1" />\r\n              <DropDownMenuItem content="Item 2" />\r\n              <DropDownMenuItem content="Settings" typeIcon="settings" />\r\n            </DropDownMenu>\r\n          </HeaderProfile>\r\n        </Header>\r\n        <Page columnLayout="1" namePage="Page Name" buttonContentSecondary="Button" withActionSecondary buttonContentPrimary="Button" withActionPrimary withBackButton></Page>\r\n      </AppShell>\r\n    </>;\n}',
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
        AppShell = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/AppShell/AppShell.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(AppShell.A, options);
      AppShell.A && AppShell.A.locals && AppShell.A.locals;
      __webpack_require__("./node_modules/next/dist/compiled/react/index.js");
      const AppShell_AppShell_AppShell = (param) => {
          let { children } = param;
          return (0, jsx_runtime.jsx)("div", {
            className: "app-shell",
            children,
          });
        },
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
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/AppShell/AppShell.scss":
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
          '.app-shell{display:grid;background-color:var(--s-color-background-default);justify-content:center;align-items:start;grid-template-columns:auto 4fr;grid-template-rows:auto 1fr;grid-template-areas:"aside header" "aside main"}@media screen and (max-width: 768px){.app-shell{height:100%;align-items:start;justify-content:normal;grid-template-columns:1fr;grid-template-areas:"header" "main"}}',
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/AppShell/AppShell.scss"],
            names: [],
            mappings:
              "AAAA,WACE,YAAA,CACA,kDAAA,CACA,sBAAA,CACA,iBAAA,CACA,8BAAA,CACA,2BAAA,CACA,+CACE,CAIJ,qCACE,WACE,WAAA,CACA,iBAAA,CACA,sBAAA,CACA,yBAAA,CACA,mCACE,CAAA",
            sourcesContent: [
              '.app-shell {\n  display: grid;\n  background-color: var(--s-color-background-default);\n  justify-content: center;\n  align-items: start;\n  grid-template-columns: auto 4fr;\n  grid-template-rows: auto 1fr;\n  grid-template-areas:\n    "aside header"\n    "aside main";\n}\n\n@media screen and (max-width: 768px) {\n  .app-shell {\n    height: 100%;\n    align-items: start;\n    justify-content: normal;\n    grid-template-columns: 1fr;\n    grid-template-areas:\n      "header"\n      "main";\n  }\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
