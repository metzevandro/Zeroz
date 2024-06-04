"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [230],
  {
    "./src/app/components/Brand/Brand.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_Brand_Brand,
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
        Brand = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Brand/Brand.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Brand.A, options);
      Brand.A && Brand.A.locals && Brand.A.locals;
      const Brand_Brand_Brand = (param) => {
          let { src, alt, size, ...rest } = param;
          return (0, jsx_runtime.jsx)("img", {
            className: "brand-".concat(size),
            src,
            alt,
            ...rest,
          });
        },
        components_Brand_Brand = Brand_Brand_Brand;
      try {
        (Brand_Brand_Brand.displayName = "Brand"),
          (Brand_Brand_Brand.__docgenInfo = {
            description: "",
            displayName: "Brand",
            props: {
              src: {
                defaultValue: null,
                description: "",
                name: "src",
                required: !0,
                type: { name: "string" },
              },
              alt: {
                defaultValue: null,
                description: "",
                name: "alt",
                required: !1,
                type: { name: "string" },
              },
              size: {
                defaultValue: null,
                description: "",
                name: "size",
                required: !0,
                type: {
                  name: "enum",
                  value: [
                    { value: '"sm"' },
                    { value: '"md"' },
                    { value: '"lg"' },
                  ],
                },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Brand/Brand.tsx#Brand"
            ] = {
              docgenInfo: Brand_Brand_Brand.__docgenInfo,
              name: "Brand",
              path: "src/app/components/Brand/Brand.tsx#Brand",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/Sidebar/Sidebar.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        uk: () => SidebarItem,
        Pg: () => SidebarList,
        e4: () => SidebarSubItem,
        Ay: () => components_Sidebar_Sidebar,
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
        Sidebar = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Sidebar/Sidebar.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Sidebar.A, options);
      Sidebar.A && Sidebar.A.locals && Sidebar.A.locals;
      var Brand = __webpack_require__("./src/app/components/Brand/Brand.tsx"),
        Icon = __webpack_require__("./src/app/components/Icon/Icon.tsx"),
        ButtonIcon = __webpack_require__(
          "./src/app/components/ButtonIcon/ButtonIcon.tsx",
        ),
        react = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        );
      const Sidebar_Sidebar_Sidebar = (param) => {
          let { brand, children, toggle, setToggleSidebar } = param;
          const closeSidebar = () => {
            setToggleSidebar(!1);
          };
          return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              (0, jsx_runtime.jsxs)("div", {
                className: "Sidebar ".concat(toggle ? "open" : "close"),
                children: [
                  (0, jsx_runtime.jsx)("div", {
                    className: "brand",
                    children: (0, jsx_runtime.jsx)(Brand.A, {
                      alt: "Logo-marca",
                      src: brand,
                      size: "sm",
                    }),
                  }),
                  children,
                ],
              }),
              (0, jsx_runtime.jsx)("div", {
                onClick: closeSidebar,
                className: "Sidebar-overlay ".concat(toggle ? "open" : "close"),
                children: (0, jsx_runtime.jsx)(ButtonIcon.A, {
                  variant: "on-color",
                  onClick: closeSidebar,
                  type: "plain",
                  size: "md",
                  typeIcon: "close",
                }),
              }),
            ],
          });
        },
        SidebarList = (param) => {
          let { title, children } = param;
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsxs)("div", {
              className: "Sidebar-list",
              children: [
                (0, jsx_runtime.jsx)("h1", {
                  className: "Sidebar-list-title",
                  children: title,
                }),
                children,
              ],
            }),
          });
        },
        SidebarItem = (param) => {
          let { title, icon, fillIcon, children, onClick, active } = param;
          const [toggleActive, setToggleActive] = (0, react.useState)(!1),
            toggleKey = () => {
              setToggleActive(!toggleActive);
            },
            handleKeyPress = (event) => {
              "Enter" === event.key && children && toggleKey();
            };
          return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              (0, jsx_runtime.jsxs)("div", {
                className: "Sidebar-item "
                  .concat(children ? "with-sub-item" : "", " ")
                  .concat(children ? "" : active ? "active" : ""),
                onClick: children ? toggleKey : onClick,
                tabIndex: 0,
                onKeyDown: handleKeyPress,
                children: [
                  (0, jsx_runtime.jsxs)("div", {
                    className: "Sidebar-item-header",
                    children: [
                      (0, jsx_runtime.jsx)(Icon.A, {
                        size: "sm",
                        icon,
                        fill: fillIcon,
                      }),
                      (0, jsx_runtime.jsx)("div", { children: title }),
                    ],
                  }),
                  children &&
                    (0, jsx_runtime.jsx)("div", {
                      onKeyDown: handleKeyPress,
                      onClick: toggleKey,
                      className: "".concat(
                        !0 === toggleActive
                          ? "Sidebar-item-with-action-open"
                          : "Sidebar-item-with-action-close",
                      ),
                      children: (0, jsx_runtime.jsx)(Icon.A, {
                        size: "sm",
                        icon: "keyboard_arrow_down",
                      }),
                    }),
                ],
              }),
              toggleActive && (0, jsx_runtime.jsx)("div", { children }),
            ],
          });
        },
        SidebarSubItem = (param) => {
          let { title, onClick, active } = param;
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsxs)("div", {
              className: "Sidebar-sub-item ".concat(active && "active"),
              tabIndex: 0,
              onClick,
              children: [
                (0, jsx_runtime.jsx)("div", {
                  style: !0 === active ? { opacity: 1 } : void 0,
                  children: (0, jsx_runtime.jsx)(Icon.A, {
                    size: "sm",
                    icon: "subdirectory_arrow_right",
                    fill: !0,
                  }),
                }),
                (0, jsx_runtime.jsx)("div", { children: title }),
              ],
            }),
          });
        },
        components_Sidebar_Sidebar = Sidebar_Sidebar_Sidebar;
      try {
        (SidebarList.displayName = "SidebarList"),
          (SidebarList.__docgenInfo = {
            description: "",
            displayName: "SidebarList",
            props: {
              title: {
                defaultValue: null,
                description: "",
                name: "title",
                required: !0,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Sidebar/Sidebar.tsx#SidebarList"
            ] = {
              docgenInfo: SidebarList.__docgenInfo,
              name: "SidebarList",
              path: "src/app/components/Sidebar/Sidebar.tsx#SidebarList",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (SidebarItem.displayName = "SidebarItem"),
          (SidebarItem.__docgenInfo = {
            description: "",
            displayName: "SidebarItem",
            props: {
              title: {
                defaultValue: null,
                description: "",
                name: "title",
                required: !0,
                type: { name: "string" },
              },
              icon: {
                defaultValue: null,
                description: "",
                name: "icon",
                required: !0,
                type: { name: "string" },
              },
              fillIcon: {
                defaultValue: null,
                description: "",
                name: "fillIcon",
                required: !0,
                type: { name: "boolean" },
              },
              onClick: {
                defaultValue: null,
                description: "",
                name: "onClick",
                required: !1,
                type: { name: "(() => void)" },
              },
              active: {
                defaultValue: null,
                description: "",
                name: "active",
                required: !0,
                type: { name: "boolean" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Sidebar/Sidebar.tsx#SidebarItem"
            ] = {
              docgenInfo: SidebarItem.__docgenInfo,
              name: "SidebarItem",
              path: "src/app/components/Sidebar/Sidebar.tsx#SidebarItem",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (SidebarSubItem.displayName = "SidebarSubItem"),
          (SidebarSubItem.__docgenInfo = {
            description: "",
            displayName: "SidebarSubItem",
            props: {
              title: {
                defaultValue: null,
                description: "",
                name: "title",
                required: !0,
                type: { name: "string" },
              },
              onClick: {
                defaultValue: null,
                description: "",
                name: "onClick",
                required: !1,
                type: { name: "(() => void)" },
              },
              active: {
                defaultValue: null,
                description: "",
                name: "active",
                required: !0,
                type: { name: "boolean" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Sidebar/Sidebar.tsx#SidebarSubItem"
            ] = {
              docgenInfo: SidebarSubItem.__docgenInfo,
              name: "SidebarSubItem",
              path: "src/app/components/Sidebar/Sidebar.tsx#SidebarSubItem",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Sidebar_Sidebar_Sidebar.displayName = "Sidebar"),
          (Sidebar_Sidebar_Sidebar.__docgenInfo = {
            description: "",
            displayName: "Sidebar",
            props: {
              brand: {
                defaultValue: null,
                description: "",
                name: "brand",
                required: !0,
                type: { name: "string" },
              },
              toggle: {
                defaultValue: null,
                description: "",
                name: "toggle",
                required: !1,
                type: { name: "boolean" },
              },
              setToggleSidebar: {
                defaultValue: null,
                description: "",
                name: "setToggleSidebar",
                required: !0,
                type: { name: "Dispatch<SetStateAction<boolean>>" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Sidebar/Sidebar.tsx#Sidebar"
            ] = {
              docgenInfo: Sidebar_Sidebar_Sidebar.__docgenInfo,
              name: "Sidebar",
              path: "src/app/components/Sidebar/Sidebar.tsx#Sidebar",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Brand/Brand.scss":
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
          ".brand{display:flex}.brand-sm{height:24px}.brand-md{height:32px}.brand-lg{height:40px}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Brand/Brand.scss"],
            names: [],
            mappings:
              "AAAA,OACE,YAAA,CAGF,UACE,WAAA,CAGF,UACE,WAAA,CAGF,UACE,WAAA",
            sourcesContent: [
              ".brand {\n  display: flex;\n}\n\n.brand-sm {\n  height: 24px;\n}\n\n.brand-md {\n  height: 32px;\n}\n\n.brand-lg {\n  height: 40px;\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Sidebar/Sidebar.scss":
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
          ".Sidebar{position:sticky;top:0;height:100vh;width:256px;grid-area:aside;background-color:var(--s-color-fill-default);border-right:var(--s-border-width-hairline) solid var(--s-color-border-default);box-sizing:border-box;display:flex;flex-direction:column;gap:var(--s-spacing-large);padding:var(--s-spacing-medium) var(--s-spacing-xx-small);overflow-x:hidden;overflow-y:scroll;transition:.3s}.Sidebar::-webkit-scrollbar{width:8px;border-radius:12px}.Sidebar::-webkit-scrollbar-thumb{background:var(--s-color-fill-default-light);border-radius:12px}.Sidebar .brand{padding:0 var(--s-spacing-xx-small)}.Sidebar .Sidebar-item{user-select:none;transition:.1s ease-out;cursor:pointer;display:flex;justify-content:space-between;align-items:center;padding:var(--s-spacing-xx-small);border-radius:var(--s-border-radius-small);background-color:var(--s-color-fill-default);color:var(--s-color-content-default)}.Sidebar .Sidebar-item.active{background-color:var(--s-color-fill-highlight-light);color:var(--s-color-content-highlight)}.Sidebar .Sidebar-item:hover{background-color:var(--s-color-fill-default-hover)}.Sidebar .Sidebar-item:focus-visible{z-index:2;outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:-2px;outline-style:solid}.Sidebar .Sidebar-item:active{background-color:var(--s-color-fill-highlight-light);color:var(--s-color-content-highlight)}.Sidebar .with-sub-item:active{background-color:var(--s-color-fill-default);color:var(--s-color-content-default)}.Sidebar .Sidebar-item-header{font:var(--s-typography-paragraph-strong);display:flex;align-items:center;gap:var(--s-spacing-xx-small)}.Sidebar .Sidebar-list{display:flex;flex-direction:column}.Sidebar .Sidebar-list .Sidebar-list-title{text-transform:uppercase;font:var(--s-typography-caption-strong);color:var(--s-color-content-light);padding:0 var(--s-spacing-xx-small)}.Sidebar .Sidebar-list .Sidebar-sub-item{user-select:none;cursor:pointer;padding:var(--s-spacing-xx-small);display:flex;gap:var(--s-spacing-xx-small);align-items:center;padding:var(--s-spacing-xx-small);border-radius:var(--s-border-radius-small);font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default);background-color:var(--s-color-fill-default)}.Sidebar .Sidebar-list .Sidebar-sub-item div:first-child{display:flex;align-items:center;transition:.2s opacity ease-in;opacity:0}.Sidebar .Sidebar-list .Sidebar-sub-item.active{background-color:var(--s-color-fill-highlight-light);color:var(--s-color-content-highlight)}.Sidebar .Sidebar-list .Sidebar-sub-item:hover{background-color:var(--s-color-fill-default-hover)}.Sidebar .Sidebar-list .Sidebar-sub-item:hover div:first-child{transition:.2s opacity ease-in;opacity:1}.Sidebar .Sidebar-list .Sidebar-sub-item:focus-visible{z-index:2;outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:-2px;outline-style:solid}.Sidebar .Sidebar-list .Sidebar-sub-item:active{background-color:var(--s-color-fill-highlight-light);color:var(--s-color-content-highlight)}.Sidebar .Sidebar-list .Sidebar-item-with-action-open{display:flex;align-items:center;transform:rotate(-180deg);transition:.3s ease-out}.Sidebar .Sidebar-list .Sidebar-item-with-action-close{display:flex;align-items:center;transition:.3s ease-out}.Sidebar-overlay{display:none}@media screen and (max-width: 768px){.Sidebar.close{border:none;left:-100vw;top:0;z-index:999;position:fixed;display:flex;transition:.5s}.Sidebar.open{width:256px;top:0;left:0;z-index:999;transition:.5s;position:fixed;display:flex}.Sidebar.open::-webkit-scrollbar{width:0}.Sidebar-overlay{top:0;right:0;z-index:998;position:fixed;background-color:var(--s-color-background-overlay);height:100vh;width:100%;justify-content:end;padding:24px}.Sidebar-overlay.close{transition:.3s;opacity:0}.Sidebar-overlay.open{top:0;right:0;display:flex;transition:.3s;opacity:1}}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Sidebar/Sidebar.scss"],
            names: [],
            mappings:
              "AAAA,SACE,eAAA,CACA,KAAA,CACA,YAAA,CACA,WAAA,CACA,eAAA,CACA,4CAAA,CACA,+EAAA,CAEA,qBAAA,CACA,YAAA,CACA,qBAAA,CACA,0BAAA,CACA,yDAAA,CACA,iBAAA,CACA,iBAAA,CACA,cAAA,CAEA,4BACE,SAAA,CACA,kBAAA,CAGF,kCACE,4CAAA,CACA,kBAAA,CAGF,gBACE,mCAAA,CAGF,uBACE,gBAAA,CACA,uBAAA,CACA,cAAA,CACA,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,iCAAA,CACA,0CAAA,CACA,4CAAA,CACA,oCAAA,CAEA,8BACE,oDAAA,CACA,sCAAA,CAIJ,6BACE,kDAAA,CAGF,qCACE,SAAA,CACA,wCAAA,CACA,2CAAA,CACA,mBAAA,CACA,mBAAA,CAGF,8BACE,oDAAA,CACA,sCAAA,CAGF,+BACE,4CAAA,CACA,oCAAA,CAGF,8BACE,yCAAA,CACA,YAAA,CACA,kBAAA,CACA,6BAAA,CAGF,uBACE,YAAA,CACA,qBAAA,CAEA,2CACE,wBAAA,CACA,uCAAA,CACA,kCAAA,CACA,mCAAA,CAGF,yCACE,gBAAA,CACA,cAAA,CACA,iCAAA,CACA,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,iCAAA,CACA,0CAAA,CACA,0CAAA,CACA,oCAAA,CACA,4CAAA,CAEA,yDACE,YAAA,CACA,kBAAA,CACA,8BAAA,CACA,SAAA,CAGF,gDACE,oDAAA,CACA,sCAAA,CAIJ,+CACE,kDAAA,CACA,+DACE,8BAAA,CACA,SAAA,CAIJ,uDACE,SAAA,CACA,wCAAA,CACA,2CAAA,CACA,mBAAA,CACA,mBAAA,CAGF,gDACE,oDAAA,CACA,sCAAA,CAGF,sDACE,YAAA,CACA,kBAAA,CACA,yBAAA,CACA,uBAAA,CAGF,uDACE,YAAA,CACA,kBAAA,CACA,uBAAA,CAKN,iBACE,YAAA,CAGF,qCACE,eACE,WAAA,CACA,WAAA,CACA,KAAA,CACA,WAAA,CACA,cAAA,CACA,YAAA,CACA,cAAA,CAGF,cACE,WAAA,CACA,KAAA,CACA,MAAA,CACA,WAAA,CACA,cAAA,CACA,cAAA,CACA,YAAA,CAEA,iCACE,OAAA,CAIJ,iBACE,KAAA,CACA,OAAA,CACA,WAAA,CACA,cAAA,CACA,kDAAA,CACA,YAAA,CACA,UAAA,CACA,mBAAA,CACA,YAAA,CAGF,uBACE,cAAA,CACA,SAAA,CAGF,sBACE,KAAA,CACA,OAAA,CACA,YAAA,CACA,cAAA,CACA,SAAA,CAAA",
            sourcesContent: [
              ".Sidebar {\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  width: 256px;\n  grid-area: aside;\n  background-color: var(--s-color-fill-default);\n  border-right: var(--s-border-width-hairline) solid\n    var(--s-color-border-default);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: var(--s-spacing-large);\n  padding: var(--s-spacing-medium) var(--s-spacing-xx-small);\n  overflow-x: hidden;\n  overflow-y: scroll;\n  transition: 0.3s;\n\n  &::-webkit-scrollbar {\n    width: 8px;\n    border-radius: 12px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background: var(--s-color-fill-default-light);\n    border-radius: 12px;\n  }\n\n  .brand {\n    padding: 0 var(--s-spacing-xx-small);\n  }\n\n  .Sidebar-item {\n    user-select: none;\n    transition: 0.1s ease-out;\n    cursor: pointer;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: var(--s-spacing-xx-small);\n    border-radius: var(--s-border-radius-small);\n    background-color: var(--s-color-fill-default);\n    color: var(--s-color-content-default);\n\n    &.active {\n      background-color: var(--s-color-fill-highlight-light);\n      color: var(--s-color-content-highlight);\n    }\n  }\n\n  .Sidebar-item:hover {\n    background-color: var(--s-color-fill-default-hover);\n  }\n\n  .Sidebar-item:focus-visible {\n    z-index: 2;\n    outline-width: var(--s-border-width-thin);\n    outline-color: var(--s-color-fill-highlight);\n    outline-offset: -2px;\n    outline-style: solid;\n  }\n\n  .Sidebar-item:active {\n    background-color: var(--s-color-fill-highlight-light);\n    color: var(--s-color-content-highlight);\n  }\n\n  .with-sub-item:active {\n    background-color: var(--s-color-fill-default);\n    color: var(--s-color-content-default);\n  }\n\n  .Sidebar-item-header {\n    font: var(--s-typography-paragraph-strong);\n    display: flex;\n    align-items: center;\n    gap: var(--s-spacing-xx-small);\n  }\n\n  .Sidebar-list {\n    display: flex;\n    flex-direction: column;\n\n    .Sidebar-list-title {\n      text-transform: uppercase;\n      font: var(--s-typography-caption-strong);\n      color: var(--s-color-content-light);\n      padding: 0 var(--s-spacing-xx-small);\n    }\n\n    .Sidebar-sub-item {\n      user-select: none;\n      cursor: pointer;\n      padding: var(--s-spacing-xx-small);\n      display: flex;\n      gap: var(--s-spacing-xx-small);\n      align-items: center;\n      padding: var(--s-spacing-xx-small);\n      border-radius: var(--s-border-radius-small);\n      font: var(--s-typography-paragraph-regular);\n      color: var(--s-color-content-default);\n      background-color: var(--s-color-fill-default);\n\n      div:first-child {\n        display: flex;\n        align-items: center;\n        transition: 0.2s opacity ease-in;\n        opacity: 0;\n      }\n\n      &.active {\n        background-color: var(--s-color-fill-highlight-light);\n        color: var(--s-color-content-highlight);\n      }\n    }\n\n    .Sidebar-sub-item:hover {\n      background-color: var(--s-color-fill-default-hover);\n      div:first-child {\n        transition: 0.2s opacity ease-in;\n        opacity: 1;\n      }\n    }\n\n    .Sidebar-sub-item:focus-visible {\n      z-index: 2;\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: -2px;\n      outline-style: solid;\n    }\n\n    .Sidebar-sub-item:active {\n      background-color: var(--s-color-fill-highlight-light);\n      color: var(--s-color-content-highlight);\n    }\n\n    .Sidebar-item-with-action-open {\n      display: flex;\n      align-items: center;\n      transform: rotate(-180deg);\n      transition: 0.3s ease-out;\n    }\n\n    .Sidebar-item-with-action-close {\n      display: flex;\n      align-items: center;\n      transition: 0.3s ease-out;\n    }\n  }\n}\n\n.Sidebar-overlay {\n  display: none;\n}\n\n@media screen and (max-width: 768px) {\n  .Sidebar.close {\n    border: none;\n    left: -100vw;\n    top: 0;\n    z-index: 999;\n    position: fixed;\n    display: flex;\n    transition: 0.5s;\n  }\n\n  .Sidebar.open {\n    width: 256px;\n    top: 0;\n    left: 0;\n    z-index: 999;\n    transition: 0.5s;\n    position: fixed;\n    display: flex;\n\n    &::-webkit-scrollbar {\n      width: 0;\n    }\n  }\n\n  .Sidebar-overlay {\n    top: 0;\n    right: 0;\n    z-index: 998;\n    position: fixed;\n    background-color: var(--s-color-background-overlay);\n    height: 100vh;\n    width: 100%;\n    justify-content: end;\n    padding: 24px;\n  }\n\n  .Sidebar-overlay.close {\n    transition: 0.3s;\n    opacity: 0;\n  }\n\n  .Sidebar-overlay.open {\n    top: 0;\n    right: 0;\n    display: flex;\n    transition: 0.3s;\n    opacity: 1;\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
