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
  },
]);
