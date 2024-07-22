"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [8595],
  {
    "./src/app/components/Link/Link.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_Link_Link,
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
        Link = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Link/Link.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Link.A, options);
      Link.A && Link.A.locals && Link.A.locals;
      __webpack_require__("./node_modules/next/dist/compiled/react/index.js");
      const Link_Link_Link = ({ content, disabled, ...rest }) =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)("a", {
              className: "link " + (disabled ? "disabled" : ""),
              ...rest,
              children: content,
            }),
          }),
        components_Link_Link = Link_Link_Link;
      try {
        (Link_Link_Link.displayName = "Link"),
          (Link_Link_Link.__docgenInfo = {
            description: "",
            displayName: "Link",
            props: {
              href: {
                defaultValue: null,
                description: "",
                name: "href",
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
              disabled: {
                defaultValue: null,
                description: "",
                name: "disabled",
                required: !1,
                type: { name: "boolean" },
              },
              target: {
                defaultValue: null,
                description: "",
                name: "target",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"_blank"' },
                    { value: '"_self"' },
                    { value: '"_parent"' },
                    { value: '"_top"' },
                  ],
                },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/app/components/Link/Link.tsx#Link"] =
              {
                docgenInfo: Link_Link_Link.__docgenInfo,
                name: "Link",
                path: "src/app/components/Link/Link.tsx#Link",
              });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/Link/Link.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Disabled: () => Disabled,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        _Link__WEBPACK_IMPORTED_MODULE_2__ =
          (__webpack_require__("./src/app/styles.scss"),
          __webpack_require__("./src/app/components/Link/Link.tsx")),
        _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./node_modules/@storybook/blocks/dist/index.mjs",
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Components/Link",
          component: _Link__WEBPACK_IMPORTED_MODULE_2__.A,
          tags: ["autodocs"],
          parameters: {
            layout: "centered",
            docs: {
              page: () =>
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                  {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.hE,
                        {},
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Pd,
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
                              { children: "Links" },
                            ),
                            " are pathways to other places, often showing up within or right after a sentence, paragraph, or independently, guiding you to new destinations.",
                          ],
                        },
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Tn,
                        {},
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.H2,
                        {},
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.om,
                        {},
                      ),
                    ],
                  },
                ),
            },
          },
          argTypes: {
            content: {
              control: "text",
              description: "The text content of the link.",
              table: { category: "Content" },
            },
            href: {
              control: "text",
              description: "The URL that the link points to.",
              table: { category: "Link" },
            },
            target: {
              control: "text",
              description:
                'The target attribute specifies where to open the link (e.g., "_blank" for a new tab).',
              table: { category: "Link" },
            },
            disabled: {
              control: "boolean",
              description:
                "If true, the link will be styled as disabled and will not be clickable.",
              table: { category: "State" },
            },
          },
        },
        Default = {
          args: {
            content: "Link",
            target: "_blank",
            href: "https://example.com",
            disabled: !1,
          },
        },
        Disabled = {
          args: {
            content: "Link",
            target: "_blank",
            href: "https://example.com",
            disabled: !0,
          },
        },
        __namedExportsOrder = ["Default", "Disabled"];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    content: "Link",\n    target: "_blank",\n    href: "https://example.com",\n    disabled: false\n  }\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    content: "Link",\n    target: "_blank",\n    href: "https://example.com",\n    disabled: true\n  }\n}',
              ...Disabled.parameters?.docs?.source,
            },
          },
        });
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Link/Link.scss":
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
          ".link{cursor:pointer;text-decoration:underline;color:var(--s-color-content-highlight);font:var(--s-typography-label-medium);border-radius:var(--s-border-radius-small);padding:0px var(--s-spacing-quarck)}.link:hover{background-color:var(--s-color-fill-highlight-light)}.link:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.link.disabled{pointer-events:none;color:var(--s-color-content-disable)}.link.disabled:hover{background-color:var(--s-color-fill-default)}.link.disabled:focus-visible{outline-width:none;outline-color:none;outline-style:none}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Link/Link.scss"],
            names: [],
            mappings:
              "AAAA,MACE,cAAA,CACA,yBAAA,CACA,sCAAA,CACA,qCAAA,CACA,0CAAA,CACA,mCAAA,CAEA,YACE,oDAAA,CAEF,oBACE,wCAAA,CACA,6CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,eACE,mBAAA,CACA,oCAAA,CACA,qBACE,4CAAA,CAEF,6BACE,kBAAA,CACA,kBAAA,CACA,kBAAA",
            sourcesContent: [
              ".link {\n  cursor: pointer;\n  text-decoration: underline;\n  color: var(--s-color-content-highlight);\n  font: var(--s-typography-label-medium);\n  border-radius: var(--s-border-radius-small);\n  padding: 0px var(--s-spacing-quarck);\n\n  &:hover {\n    background-color: var(--s-color-fill-highlight-light);\n  }\n  &:focus-visible {\n    outline-width: var(--s-border-width-thin);\n    outline-color: var(--s-color-border-highlight);\n    outline-offset: var(--s-border-width-thin);\n    outline-style: solid;\n  }\n\n  &.disabled {\n    pointer-events: none;\n    color: var(--s-color-content-disable);\n    &:hover {\n      background-color: var(--s-color-fill-default);\n    }\n    &:focus-visible {\n      outline-width: none;\n      outline-color: none;\n      outline-style: none;\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
