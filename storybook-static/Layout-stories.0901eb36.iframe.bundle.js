"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [9513],
  {
    "./src/stories/Layout.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          OneColumn: () => OneColumn,
          ThreeSymmetricColumn: () => ThreeSymmetricColumn,
          TwoAsymmetricColumn: () => TwoAsymmetricColumn,
          TwoSymmetricColumn: () => TwoSymmetricColumn,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__("./src/components/Layout/Layout.tsx"),
        _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__ =
          (__webpack_require__("./src/styles.scss"),
          __webpack_require__("./src/components/Icon/Icon.tsx")),
        _storybook_blocks__WEBPACK_IMPORTED_MODULE_5__ =
          (__webpack_require__(
            "./node_modules/next/dist/compiled/react/index.js",
          ),
          __webpack_require__(
            "./node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist/index.mjs",
          ));
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Templates/Layout",
          component: _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__.A,
          argTypes: {
            columns: {
              name: "Columns",
              description: "Number of columns in the layout.",
              control: {
                type: "select",
                options: [
                  "1",
                  "2 - Symmetric",
                  "2 - Asymmetric",
                  "3 - Symmetric",
                ],
              },
            },
          },
          parameters: {
            layout: "padded",
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
                              { children: "Layout" },
                            ),
                            " template is made to create layouts with one or more columns using ready-made patterns.",
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
          tags: ["autodocs"],
        },
        Template = (args) =>
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__.A,
            {
              columns: args.columns,
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  "div",
                  {
                    className: "slot",
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__.A,
                        { icon: "refresh", size: "md" },
                      ),
                      "1st Content",
                    ],
                  },
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  "div",
                  {
                    className: "slot",
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__.A,
                        { icon: "refresh", size: "md" },
                      ),
                      "2nd Content",
                    ],
                  },
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  "div",
                  {
                    className: "slot",
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__.A,
                        { icon: "refresh", size: "md" },
                      ),
                      "3rd Content",
                    ],
                  },
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  "div",
                  {
                    className: "slot",
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__.A,
                        { icon: "refresh", size: "md" },
                      ),
                      "4th Content",
                    ],
                  },
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  "div",
                  {
                    className: "slot",
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__.A,
                        { icon: "refresh", size: "md" },
                      ),
                      "5th Content",
                    ],
                  },
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  "div",
                  {
                    className: "slot",
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__.A,
                        { icon: "refresh", size: "md" },
                      ),
                      "6th Content",
                    ],
                  },
                ),
              ],
            },
          ),
        OneColumn = Template.bind({});
      OneColumn.args = { columns: "1" };
      const TwoSymmetricColumn = Template.bind({});
      TwoSymmetricColumn.args = { columns: "2 - Symmetric" };
      const TwoAsymmetricColumn = Template.bind({});
      TwoAsymmetricColumn.args = { columns: "2 - Asymmetric" };
      const ThreeSymmetricColumn = Template.bind({});
      ThreeSymmetricColumn.args = { columns: "3 - Symmetric" };
      const __namedExportsOrder = [
        "OneColumn",
        "TwoSymmetricColumn",
        "TwoAsymmetricColumn",
        "ThreeSymmetricColumn",
      ];
      (OneColumn.parameters = {
        ...OneColumn.parameters,
        docs: {
          ...OneColumn.parameters?.docs,
          source: {
            originalSource:
              'args => {\n  return <Layout columns={args.columns}>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        1st Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        2nd Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        3rd Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        4th Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        5th Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        6th Content\r\n      </div>\r\n    </Layout>;\n}',
            ...OneColumn.parameters?.docs?.source,
          },
        },
      }),
        (TwoSymmetricColumn.parameters = {
          ...TwoSymmetricColumn.parameters,
          docs: {
            ...TwoSymmetricColumn.parameters?.docs,
            source: {
              originalSource:
                'args => {\n  return <Layout columns={args.columns}>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        1st Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        2nd Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        3rd Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        4th Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        5th Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        6th Content\r\n      </div>\r\n    </Layout>;\n}',
              ...TwoSymmetricColumn.parameters?.docs?.source,
            },
          },
        }),
        (TwoAsymmetricColumn.parameters = {
          ...TwoAsymmetricColumn.parameters,
          docs: {
            ...TwoAsymmetricColumn.parameters?.docs,
            source: {
              originalSource:
                'args => {\n  return <Layout columns={args.columns}>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        1st Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        2nd Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        3rd Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        4th Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        5th Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        6th Content\r\n      </div>\r\n    </Layout>;\n}',
              ...TwoAsymmetricColumn.parameters?.docs?.source,
            },
          },
        }),
        (ThreeSymmetricColumn.parameters = {
          ...ThreeSymmetricColumn.parameters,
          docs: {
            ...ThreeSymmetricColumn.parameters?.docs,
            source: {
              originalSource:
                'args => {\n  return <Layout columns={args.columns}>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        1st Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        2nd Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        3rd Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        4th Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        5th Content\r\n      </div>\r\n      <div className="slot">\r\n        <Icon icon="refresh" size="md" />\r\n        6th Content\r\n      </div>\r\n    </Layout>;\n}',
              ...ThreeSymmetricColumn.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/Icon/Icon.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_Icon_Icon,
      });
      var jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        injectStylesIntoStyleTag = __webpack_require__(
          "./node_modules/@storybook/nextjs/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag,
        ),
        styleDomAPI = __webpack_require__(
          "./node_modules/@storybook/nextjs/node_modules/style-loader/dist/runtime/styleDomAPI.js",
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          "./node_modules/@storybook/nextjs/node_modules/style-loader/dist/runtime/insertBySelector.js",
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          "./node_modules/@storybook/nextjs/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js",
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes,
        ),
        insertStyleElement = __webpack_require__(
          "./node_modules/@storybook/nextjs/node_modules/style-loader/dist/runtime/insertStyleElement.js",
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          "./node_modules/@storybook/nextjs/node_modules/style-loader/dist/runtime/styleTagTransform.js",
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        Icon = __webpack_require__(
          "./node_modules/@storybook/nextjs/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/Icon/Icon.scss",
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
      const Icon_Icon_Icon = ({ size, fill, icon }) => {
          const sizeClass = size,
            fillStyle = `'FILL' ${fill ? 1 : 0},\n    'GRAD' 0,\n    'opsz' 24`;
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)("span", {
              style: { fontVariationSettings: fillStyle },
              className: `material-symbols-outlined ${sizeClass}`,
              children: icon,
            }),
          });
        },
        components_Icon_Icon = Icon_Icon_Icon;
      try {
        (Icon_Icon_Icon.displayName = "Icon"),
          (Icon_Icon_Icon.__docgenInfo = {
            description: "",
            displayName: "Icon",
            props: {
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
              icon: {
                defaultValue: null,
                description: "",
                name: "icon",
                required: !0,
                type: { name: "string | undefined" },
              },
              fill: {
                defaultValue: null,
                description: "",
                name: "fill",
                required: !1,
                type: { name: "boolean" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"] = {
              docgenInfo: Icon_Icon_Icon.__docgenInfo,
              name: "Icon",
              path: "src/components/Icon/Icon.tsx#Icon",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/components/Layout/Layout.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_Layout_Layout,
      });
      var jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        injectStylesIntoStyleTag =
          (__webpack_require__(
            "./node_modules/next/dist/compiled/react/index.js",
          ),
          __webpack_require__(
            "./node_modules/@storybook/nextjs/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
          )),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag,
        ),
        styleDomAPI = __webpack_require__(
          "./node_modules/@storybook/nextjs/node_modules/style-loader/dist/runtime/styleDomAPI.js",
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          "./node_modules/@storybook/nextjs/node_modules/style-loader/dist/runtime/insertBySelector.js",
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          "./node_modules/@storybook/nextjs/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js",
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes,
        ),
        insertStyleElement = __webpack_require__(
          "./node_modules/@storybook/nextjs/node_modules/style-loader/dist/runtime/insertStyleElement.js",
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          "./node_modules/@storybook/nextjs/node_modules/style-loader/dist/runtime/styleTagTransform.js",
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        Layout = __webpack_require__(
          "./node_modules/@storybook/nextjs/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/Layout/Layout.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Layout.A, options);
      Layout.A && Layout.A.locals && Layout.A.locals;
      const Layout_Layout_Layout = ({ children, columns, ...rest }) => {
          const columnClassName = {
            1: "one-column",
            "2 - Symmetric": "two-column-symmetric",
            "2 - Asymmetric": "two-column-asymmetric",
            "3 - Symmetric": "three-column-symmetric",
          }[columns];
          return (0, jsx_runtime.jsx)("div", {
            ...rest,
            className: `layout ${columnClassName}`,
            children,
          });
        },
        components_Layout_Layout = Layout_Layout_Layout;
      try {
        (Layout_Layout_Layout.displayName = "Layout"),
          (Layout_Layout_Layout.__docgenInfo = {
            description: "",
            displayName: "Layout",
            props: {
              columns: {
                defaultValue: null,
                description: "",
                name: "columns",
                required: !0,
                type: {
                  name: "enum",
                  value: [
                    { value: '"1"' },
                    { value: '"2 - Symmetric"' },
                    { value: '"2 - Asymmetric"' },
                    { value: '"3 - Symmetric"' },
                  ],
                },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/components/Layout/Layout.tsx#Layout"
            ] = {
              docgenInfo: Layout_Layout_Layout.__docgenInfo,
              name: "Layout",
              path: "src/components/Layout/Layout.tsx#Layout",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./node_modules/@storybook/nextjs/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/Icon/Icon.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_storybook_nextjs_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              "./node_modules/@storybook/nextjs/node_modules/css-loader/dist/runtime/sourceMaps.js",
            ),
          _node_modules_storybook_nextjs_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_storybook_nextjs_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
            ),
          _node_modules_storybook_nextjs_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              "./node_modules/@storybook/nextjs/node_modules/css-loader/dist/runtime/api.js",
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_storybook_nextjs_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          )()(
            _node_modules_storybook_nextjs_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '@import"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";.material-symbols-outlined{font-weight:300;display:flex;user-select:none}.material-symbols-outlined.sm{font-size:16px}.material-symbols-outlined.md{font-size:24px}.material-symbols-outlined.lg{font-size:32px}',
          "",
          {
            version: 3,
            sources: ["webpack://./src/components/Icon/Icon.scss"],
            names: [],
            mappings:
              "AAAQ,6HAAA,CAER,2BACE,eAAA,CACA,YAAA,CACA,gBAAA,CAGF,8BACE,cAAA,CAGF,8BACE,cAAA,CAGF,8BACE,cAAA",
            sourcesContent: [
              '@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");\n\n.material-symbols-outlined {\n  font-weight: 300;\n  display: flex;\n  user-select: none;\n}\n\n.material-symbols-outlined.sm {\n  font-size: 16px;\n}\n\n.material-symbols-outlined.md {\n  font-size: 24px;\n}\n\n.material-symbols-outlined.lg {\n  font-size: 32px;\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/@storybook/nextjs/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/components/Layout/Layout.scss":
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_storybook_nextjs_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              "./node_modules/@storybook/nextjs/node_modules/css-loader/dist/runtime/sourceMaps.js",
            ),
          _node_modules_storybook_nextjs_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_storybook_nextjs_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
            ),
          _node_modules_storybook_nextjs_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              "./node_modules/@storybook/nextjs/node_modules/css-loader/dist/runtime/api.js",
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_storybook_nextjs_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          )()(
            _node_modules_storybook_nextjs_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".layout{display:grid;grid-gap:var(--s-spacing-small);height:100%}.layout.one-column{grid-template-columns:1fr;grid-auto-flow:dense}.layout.two-column-asymmetric{grid-auto-flow:dense;grid-template-columns:2fr 1fr}.layout.two-column-symmetric{grid-auto-flow:dense;grid-template-columns:repeat(2, 1fr)}.layout.three-column-symmetric{grid-auto-flow:dense;grid-template-columns:repeat(3, 1fr)}@media screen and (max-width: 490px){.layout.two-column-symmetric{grid-template-columns:1fr}.layout.two-column-asymmetric{grid-template-columns:1fr}.layout.three-column-symmetric{grid-template-columns:1fr}}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/components/Layout/Layout.scss"],
            names: [],
            mappings:
              "AAAA,QACE,YAAA,CACA,+BAAA,CACA,WAAA,CAEA,mBACE,yBAAA,CACA,oBAAA,CAGF,8BACE,oBAAA,CACA,6BAAA,CAGF,6BACE,oBAAA,CACA,oCAAA,CAGF,+BACE,oBAAA,CACA,oCAAA,CAIJ,qCAEI,6BACE,yBAAA,CAEF,8BACE,yBAAA,CAEF,+BACE,yBAAA,CAAA",
            sourcesContent: [
              ".layout {\n  display: grid;\n  grid-gap: var(--s-spacing-small);\n  height: 100%;\n\n  &.one-column {\n    grid-template-columns: 1fr;\n    grid-auto-flow: dense;\n  }\n\n  &.two-column-asymmetric {\n    grid-auto-flow: dense;\n    grid-template-columns: 2fr 1fr;\n  }\n\n  &.two-column-symmetric {\n    grid-auto-flow: dense;\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  &.three-column-symmetric {\n    grid-auto-flow: dense;\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n\n@media screen and (max-width: 490px) {\n  .layout {\n    &.two-column-symmetric {\n      grid-template-columns: 1fr;\n    }\n    &.two-column-asymmetric {\n      grid-template-columns: 1fr;\n    }\n    &.three-column-symmetric {\n      grid-template-columns: 1fr;\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
