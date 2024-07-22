"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [6561],
  {
    "./src/app/components/Dropdown/Dropdown.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        tJ: () => DropdownItem,
        EI: () => DropdownTitle,
        Ay: () => components_Dropdown_Dropdown,
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
        Dropdown = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Dropdown/Dropdown.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Dropdown.A, options);
      Dropdown.A && Dropdown.A.locals && Dropdown.A.locals;
      __webpack_require__("./node_modules/next/dist/compiled/react/index.js");
      const Dropdown_Dropdown_Dropdown = ({ children, dropdown }) =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children:
              !0 === dropdown &&
              (0, jsx_runtime.jsx)("div", {
                className: "dropdown-menu-root",
                children: (0, jsx_runtime.jsx)("div", {
                  className: "dropdown-menu",
                  children,
                }),
              }),
          }),
        DropdownTitle = ({ content }) =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)("div", {
              className: "dropdown-menu-title",
              children: content,
            }),
          }),
        DropdownItem = ({ typeIcon, content, onClick }) =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsxs)("button", {
              className: "dropdown-menu-item",
              onClick,
              children: [
                typeIcon &&
                  (0, jsx_runtime.jsx)(Icon.A, { size: "sm", icon: typeIcon }),
                content,
              ],
            }),
          }),
        components_Dropdown_Dropdown = Dropdown_Dropdown_Dropdown;
      try {
        (DropdownTitle.displayName = "DropdownTitle"),
          (DropdownTitle.__docgenInfo = {
            description: "",
            displayName: "DropdownTitle",
            props: {
              content: {
                defaultValue: null,
                description: "",
                name: "content",
                required: !0,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Dropdown/Dropdown.tsx#DropdownTitle"
            ] = {
              docgenInfo: DropdownTitle.__docgenInfo,
              name: "DropdownTitle",
              path: "src/app/components/Dropdown/Dropdown.tsx#DropdownTitle",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (DropdownItem.displayName = "DropdownItem"),
          (DropdownItem.__docgenInfo = {
            description: "",
            displayName: "DropdownItem",
            props: {
              typeIcon: {
                defaultValue: null,
                description: "",
                name: "typeIcon",
                required: !1,
                type: { name: "string" },
              },
              content: {
                defaultValue: null,
                description: "",
                name: "content",
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
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Dropdown/Dropdown.tsx#DropdownItem"
            ] = {
              docgenInfo: DropdownItem.__docgenInfo,
              name: "DropdownItem",
              path: "src/app/components/Dropdown/Dropdown.tsx#DropdownItem",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Dropdown_Dropdown_Dropdown.displayName = "Dropdown"),
          (Dropdown_Dropdown_Dropdown.__docgenInfo = {
            description: "",
            displayName: "Dropdown",
            props: {
              dropdown: {
                defaultValue: null,
                description: "",
                name: "dropdown",
                required: !0,
                type: { name: "boolean" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Dropdown/Dropdown.tsx#Dropdown"
            ] = {
              docgenInfo: Dropdown_Dropdown_Dropdown.__docgenInfo,
              name: "Dropdown",
              path: "src/app/components/Dropdown/Dropdown.tsx#Dropdown",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/Dropdown/Dropdown.stories.tsx": (
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
        _Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./src/app/components/Dropdown/Dropdown.tsx",
        ),
        _Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./src/app/components/Button/Button.tsx",
        ),
        _storybook_blocks__WEBPACK_IMPORTED_MODULE_5__ =
          (__webpack_require__("./src/app/styles.scss"),
          __webpack_require__(
            "./node_modules/@storybook/blocks/dist/index.mjs",
          ));
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Components/Dropdown",
          component: _Dropdown__WEBPACK_IMPORTED_MODULE_2__.Ay,
          parameters: {
            layout: "centered",
            docs: {
              page: () =>
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                  {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.hE,
                        {},
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Pd,
                        { children: "Component" },
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        "p",
                        {
                          children: [
                            "The ",
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              "strong",
                              { children: "Dropdowns" },
                            ),
                            " are activated by a button and show a list of choices, allowing users to select one or more options. A chosen option can either lead to a page or be utilized as an action to filter or sort existing content.",
                            " ",
                          ],
                        },
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Tn,
                        {},
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.H2,
                        {},
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.om,
                        {},
                      ),
                    ],
                  },
                ),
            },
          },
          argTypes: {
            dropdown: {
              description: "Controls the visibility of the dropdown menu.",
              control: { type: "boolean" },
              defaultValue: !1,
              table: { category: "Behavior" },
            },
            children: {
              title: "Children",
              description:
                "Can be a title or an item to be displayed in the dropdown menu.",
              table: { category: "Content" },
            },
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
                style: { width: "100px", height: "200px" },
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
                        _Dropdown__WEBPACK_IMPORTED_MODULE_2__.Ay,
                        {
                          dropdown: isDropDownOpen || args.dropdown,
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _Dropdown__WEBPACK_IMPORTED_MODULE_2__.EI,
                              { content: "Title" },
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _Dropdown__WEBPACK_IMPORTED_MODULE_2__.tJ,
                              { content: "Item 1", typeIcon: "ac_unit" },
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _Dropdown__WEBPACK_IMPORTED_MODULE_2__.EI,
                              { content: "Title" },
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _Dropdown__WEBPACK_IMPORTED_MODULE_2__.tJ,
                              { content: "Item 1" },
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
      Default.args = { dropdown: !1 };
      const __namedExportsOrder = ["Default"];
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              'args => {\n  const [isDropDownOpen, setIsDropDownOpen] = useState(false);\n  const toggleDropDown = () => {\n    setIsDropDownOpen(!isDropDownOpen);\n  };\n  return <>\r\n      <div style={{\n      width: "100px",\n      height: "200px"\n    }}>\r\n        <Button size="md" variant="primary" label="Click here!" onClick={toggleDropDown} />\r\n        <div>\r\n          <Dropdown dropdown={isDropDownOpen || args.dropdown}>\r\n            <DropdownTitle content="Title" />\r\n            <DropdownItem content="Item 1" typeIcon="ac_unit" />\r\n            <DropdownTitle content="Title" />\r\n            <DropdownItem content="Item 1" />\r\n          </Dropdown>\r\n        </div>\r\n      </div>\r\n    </>;\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      };
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Dropdown/Dropdown.scss":
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
          ".dropdown-menu-root{position:relative}.dropdown-menu-root .dropdown-menu{margin-top:var(--s-spacing-xx-small);z-index:10;position:absolute;width:100%;display:flex;align-items:center;flex-direction:column;border-radius:var(--s-border-radius-medium);background-color:var(--s-color-fill-default);border:var(--s-border-width-hairline) solid var(--s-color-border-default);padding:var(--s-spacing-nano);box-shadow:var(--s-shadow-dropdown)}.dropdown-menu-root .dropdown-menu .dropdown-menu-title{font:var(--s-typography-paragraph-strong);padding:var(--s-spacing-xx-small) var(--s-spacing-xx-small) 0 var(--s-spacing-xx-small);border-radius:var(--s-border-radius-medium);background-color:var(--s-color-fill-default);color:var(--s-color-content-default);justify-content:start;display:flex;width:100%}.dropdown-menu-root .dropdown-menu .dropdown-menu-item{justify-content:start;cursor:pointer;width:100%;font:var(--s-typography-paragraph-regular);display:flex;align-items:center;gap:var(--s-spacing-xx-small);padding:var(--s-spacing-xx-small);border-radius:calc(var(--s-border-radius-medium) - 2px);background-color:var(--s-color-fill-default);color:var(--s-color-content-default)}.dropdown-menu-root .dropdown-menu .dropdown-menu-item:hover{background-color:var(--s-color-fill-default-hover)}.dropdown-menu-root .dropdown-menu .dropdown-menu-item:focus-visible{border-radius:var(--s-border-radius-medium);z-index:2;outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:-2px;outline-style:solid}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Dropdown/Dropdown.scss"],
            names: [],
            mappings:
              "AAAA,oBACE,iBAAA,CAEA,mCACE,oCAAA,CACA,UAAA,CACA,iBAAA,CACA,UAAA,CACA,YAAA,CACA,kBAAA,CACA,qBAAA,CACA,2CAAA,CACA,4CAAA,CACA,yEAAA,CACA,6BAAA,CACA,mCAAA,CAEA,wDACE,yCAAA,CACA,uFAAA,CAEA,2CAAA,CACA,4CAAA,CACA,oCAAA,CACA,qBAAA,CACA,YAAA,CACA,UAAA,CAGF,uDACE,qBAAA,CACA,cAAA,CACA,UAAA,CACA,0CAAA,CACA,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,iCAAA,CACA,uDAAA,CACA,4CAAA,CACA,oCAAA,CAEA,6DACE,kDAAA,CAGF,qEACE,2CAAA,CACA,SAAA,CACA,wCAAA,CACA,6CAAA,CACA,mBAAA,CACA,mBAAA",
            sourcesContent: [
              ".dropdown-menu-root {\n  position: relative;\n\n  .dropdown-menu {\n    margin-top: var(--s-spacing-xx-small);\n    z-index: 10;\n    position: absolute;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    border-radius: var(--s-border-radius-medium);\n    background-color: var(--s-color-fill-default);\n    border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n    padding: var(--s-spacing-nano);\n    box-shadow: var(--s-shadow-dropdown);\n\n    .dropdown-menu-title {\n      font: var(--s-typography-paragraph-strong);\n      padding: var(--s-spacing-xx-small) var(--s-spacing-xx-small) 0\n        var(--s-spacing-xx-small);\n      border-radius: var(--s-border-radius-medium);\n      background-color: var(--s-color-fill-default);\n      color: var(--s-color-content-default);\n      justify-content: start;\n      display: flex;\n      width: 100%;\n    }\n\n    .dropdown-menu-item {\n      justify-content: start;\n      cursor: pointer;\n      width: 100%;\n      font: var(--s-typography-paragraph-regular);\n      display: flex;\n      align-items: center;\n      gap: var(--s-spacing-xx-small);\n      padding: var(--s-spacing-xx-small);\n      border-radius: calc(var(--s-border-radius-medium) - 2px);\n      background-color: var(--s-color-fill-default);\n      color: var(--s-color-content-default);\n\n      &:hover {\n        background-color: var(--s-color-fill-default-hover);\n      }\n\n      &:focus-visible {\n        border-radius: var(--s-border-radius-medium);\n        z-index: 2;\n        outline-width: var(--s-border-width-thin);\n        outline-color: var(--s-color-border-highlight);\n        outline-offset: -2px;\n        outline-style: solid;\n      }\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
