"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [8043],
  {
    "./src/app/components/EmptyState/EmptyState.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_EmptyState_EmptyState,
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
        EmptyState = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/EmptyState/EmptyState.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(EmptyState.A, options);
      EmptyState.A && EmptyState.A.locals && EmptyState.A.locals;
      var Button = __webpack_require__(
          "./src/app/components/Button/Button.tsx",
        ),
        Icon = __webpack_require__("./src/app/components/Icon/Icon.tsx");
      const EmptyState_EmptyState_EmptyState = ({
          title,
          description,
          icon,
          buttonContentPrimary,
          buttonContentSecondary,
          onClickActionPrimary,
          onClickActionSecondary,
        }) =>
          (0, jsx_runtime.jsxs)("div", {
            className: "empty-state-root",
            children: [
              (0, jsx_runtime.jsx)(Icon.A, { icon, size: "lg" }),
              (0, jsx_runtime.jsxs)("div", {
                className: "empty-state-content",
                children: [
                  (0, jsx_runtime.jsx)("h3", { children: title }),
                  (0, jsx_runtime.jsx)("p", { children: description }),
                ],
              }),
              (0, jsx_runtime.jsxs)("div", {
                className: "empty-state-footer",
                children: [
                  buttonContentPrimary &&
                    (0, jsx_runtime.jsx)(Button.A, {
                      size: "md",
                      variant: "primary",
                      label: buttonContentPrimary,
                      onClick: onClickActionPrimary,
                    }),
                  buttonContentSecondary &&
                    (0, jsx_runtime.jsx)(Button.A, {
                      size: "md",
                      variant: "secondary",
                      label: buttonContentSecondary,
                      onClick: onClickActionSecondary,
                    }),
                ],
              }),
            ],
          }),
        components_EmptyState_EmptyState = EmptyState_EmptyState_EmptyState;
      try {
        (EmptyState_EmptyState_EmptyState.displayName = "EmptyState"),
          (EmptyState_EmptyState_EmptyState.__docgenInfo = {
            description: "",
            displayName: "EmptyState",
            props: {
              title: {
                defaultValue: null,
                description: "",
                name: "title",
                required: !0,
                type: { name: "string" },
              },
              description: {
                defaultValue: null,
                description: "",
                name: "description",
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
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/EmptyState/EmptyState.tsx#EmptyState"
            ] = {
              docgenInfo: EmptyState_EmptyState_EmptyState.__docgenInfo,
              name: "EmptyState",
              path: "src/app/components/EmptyState/EmptyState.tsx#EmptyState",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/EmptyState/EmptyState.stories.tsx": (
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
        _EmptyState__WEBPACK_IMPORTED_MODULE_3__ =
          (__webpack_require__(
            "./node_modules/next/dist/compiled/react/index.js",
          ),
          __webpack_require__("./src/app/styles.scss"),
          __webpack_require__(
            "./src/app/components/EmptyState/EmptyState.tsx",
          )),
        _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/@storybook/blocks/dist/index.mjs",
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Templates/Empty State",
          component: _EmptyState__WEBPACK_IMPORTED_MODULE_3__.A,
          parameters: {
            layout: "padded",
            docs: {
              page: () =>
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                  {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.hE,
                        {},
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Pd,
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
                              { children: "EmptyState" },
                            ),
                            " template has many uses. It communicates when a search finds nothing, a page is empty, or data loading encounters issues. It can display an icon, a title, additional text, and even suggest actions to take next if there's a problem.",
                          ],
                        },
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Tn,
                        {},
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.H2,
                        {},
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.om,
                        {},
                      ),
                    ],
                  },
                ),
            },
          },
          argTypes: {
            icon: {
              name: "Icon",
              description: "Icon to display in the empty state.",
              table: { category: "Content" },
            },
            title: {
              name: "Title",
              description: "Main title displayed in the empty state.",
              table: { category: "Content" },
            },
            description: {
              name: "Description",
              description: "Description displayed in the empty state.",
              table: { category: "Content" },
            },
            buttonContentPrimary: {
              name: "Primary Button Content",
              description: "Text displayed in the primary button.",
              table: { category: "Appearence" },
            },
            buttonContentSecondary: {
              name: "Secondary Button Content",
              description: "Text displayed in the secondary button.",
              table: { category: "Appearence" },
            },
            onClickActionPrimary: {
              name: "Primary Button Action",
              description: "Function to be executed on primary button click.",
              table: { category: "Actions" },
            },
            onClickActionSecondary: {
              name: "Secondary Button Action",
              description: "Function to be executed on secondary button click.",
              table: { category: "Actions" },
            },
          },
          tags: ["autodocs"],
        },
        Default = ((args) =>
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _EmptyState__WEBPACK_IMPORTED_MODULE_3__.A,
            { ...args },
          )).bind({});
      Default.args = {
        title: "Title",
        description: "Description",
        icon: "ac_unit",
        buttonContentPrimary: "Button",
        buttonContentSecondary: "Button",
      };
      const __namedExportsOrder = ["Default"];
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: "args => {\n  return <EmptyState {...args} />;\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      };
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/EmptyState/EmptyState.scss":
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
          ".empty-state-root{display:flex;flex-direction:column;align-items:center;width:100%;gap:var(--s-spacing-medium);color:var(--s-color-content-default)}.empty-state-root .empty-state-content{display:flex;align-items:center;gap:var(--s-spacing-xx-small);flex-direction:column;text-align:center}.empty-state-root .empty-state-content h3{color:var(--s-color-content-default)}.empty-state-root .empty-state-content p{color:var(--s-color-content-light)}.empty-state-root .empty-state-footer{display:flex;gap:var(--s-spacing-xx-small)}@media screen and (max-width: 490px){.empty-state-root .empty-state-footer{flex-direction:column}}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/EmptyState/EmptyState.scss",
            ],
            names: [],
            mappings:
              "AAAA,kBACE,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,UAAA,CACA,2BAAA,CACA,oCAAA,CAEA,uCACE,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,qBAAA,CACA,iBAAA,CAEA,0CACE,oCAAA,CAGF,yCACE,kCAAA,CAIJ,sCACE,YAAA,CACA,6BAAA,CAIJ,qCAEI,sCACE,qBAAA,CAAA",
            sourcesContent: [
              ".empty-state-root {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  gap: var(--s-spacing-medium);\n  color: var(--s-color-content-default);\n\n  .empty-state-content {\n    display: flex;\n    align-items: center;\n    gap: var(--s-spacing-xx-small);\n    flex-direction: column;\n    text-align: center;\n\n    h3 {\n      color: var(--s-color-content-default);\n    }\n\n    p {\n      color: var(--s-color-content-light);\n    }\n  }\n\n  .empty-state-footer {\n    display: flex;\n    gap: var(--s-spacing-xx-small);\n  }\n}\n\n@media screen and (max-width: 490px) {\n  .empty-state-root {\n    .empty-state-footer {\n      flex-direction: column;\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
