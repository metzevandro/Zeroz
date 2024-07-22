"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [6245],
  {
    "./src/app/components/Badge/Badge.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Success: () => Success,
          Warning: () => Warning,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Badge_stories,
          primary: () => primary,
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
        Badge = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Badge/Badge.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Badge.A, options);
      Badge.A && Badge.A.locals && Badge.A.locals;
      const Badge_Badge_Badge = ({ label, type, variant }) =>
          (0, jsx_runtime.jsx)("div", {
            className: `badge ${type} ${variant}`,
            children: (0, jsx_runtime.jsx)("p", { children: label }),
          }),
        components_Badge_Badge = Badge_Badge_Badge;
      try {
        (Badge_Badge_Badge.displayName = "Badge"),
          (Badge_Badge_Badge.__docgenInfo = {
            description: "",
            displayName: "Badge",
            props: {
              label: {
                defaultValue: null,
                description: "",
                name: "label",
                required: !0,
                type: { name: "string" },
              },
              type: {
                defaultValue: null,
                description: "",
                name: "type",
                required: !0,
                type: {
                  name: "enum",
                  value: [{ value: '"light"' }, { value: '"default"' }],
                },
              },
              variant: {
                defaultValue: null,
                description: "",
                name: "variant",
                required: !0,
                type: {
                  name: "enum",
                  value: [
                    { value: '"primary"' },
                    { value: '"success"' },
                    { value: '"warning"' },
                    { value: '"default"' },
                  ],
                },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Badge/Badge.tsx#Badge"
            ] = {
              docgenInfo: Badge_Badge_Badge.__docgenInfo,
              name: "Badge",
              path: "src/app/components/Badge/Badge.tsx#Badge",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_require__("./src/app/styles.scss");
      var dist = __webpack_require__(
        "./node_modules/@storybook/blocks/dist/index.mjs",
      );
      const Badge_stories = {
          title: "Components/Badge",
          component: components_Badge_Badge,
          parameters: {
            layout: "centered",
            docs: {
              page: () =>
                (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                  children: [
                    (0, jsx_runtime.jsx)(dist.hE, {}),
                    (0, jsx_runtime.jsx)(dist.Pd, { children: "Component" }),
                    (0, jsx_runtime.jsxs)("p", {
                      children: [
                        "The ",
                        (0, jsx_runtime.jsx)("strong", { children: "Badges" }),
                        " are like little signs that inform you about the status or actions that have been taken.",
                      ],
                    }),
                    (0, jsx_runtime.jsx)(dist.Tn, {}),
                    (0, jsx_runtime.jsx)(dist.H2, {}),
                    (0, jsx_runtime.jsx)(dist.om, {}),
                  ],
                }),
            },
          },
          tags: ["autodocs"],
          argTypes: {
            label: {
              name: "Label",
              description: "The text content to display within the badge.",
              type: { name: "string" },
              control: { type: "text" },
              table: { category: "Content", type: { summary: "string" } },
            },
            type: {
              name: "Type",
              description: "The type of badge.",
              control: { type: "select", options: ["default"] },
              table: { category: "Appearance", type: { summary: "'default'" } },
            },
            variant: {
              name: "Variant",
              description: "The visual variant of the badge.",
              control: {
                type: "select",
                options: ["default", "primary", "success", "warning"],
              },
              table: {
                category: "Appearance",
                type: {
                  summary: "'default' | 'primary' | 'success' | 'warning'",
                },
              },
            },
          },
        },
        Default = {
          args: { label: "Badge", type: "default", variant: "default" },
        },
        primary = {
          args: { label: "Badge", type: "default", variant: "primary" },
        },
        Success = {
          args: { label: "Badge", type: "default", variant: "success" },
        },
        Warning = {
          args: { label: "Badge", type: "default", variant: "warning" },
        },
        __namedExportsOrder = ["Default", "primary", "Success", "Warning"];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    label: "Badge",\n    type: "default",\n    variant: "default"\n  }\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (primary.parameters = {
          ...primary.parameters,
          docs: {
            ...primary.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    label: "Badge",\n    type: "default",\n    variant: "primary"\n  }\n}',
              ...primary.parameters?.docs?.source,
            },
          },
        }),
        (Success.parameters = {
          ...Success.parameters,
          docs: {
            ...Success.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    label: "Badge",\n    type: "default",\n    variant: "success"\n  }\n}',
              ...Success.parameters?.docs?.source,
            },
          },
        }),
        (Warning.parameters = {
          ...Warning.parameters,
          docs: {
            ...Warning.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    label: "Badge",\n    type: "default",\n    variant: "warning"\n  }\n}',
              ...Warning.parameters?.docs?.source,
            },
          },
        });
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Badge/Badge.scss":
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
          ".badge{font:var(--s-typography-caption-regular);padding:0 var(--s-spacing-xx-small);border-radius:var(--s-border-radius-medium);width:min-content;height:min-content;color:var(--s-color-content-on-color)}.badge.default{color:var(--s-color-content-default);background-color:var(--s-color-fill-default-light);border:1px solid rgba(0,0,0,0)}.badge.light{border:1px solid var(--s-color-border-default)}.badge.primary{color:var(--s-color-content-on-color);background-color:var(--s-color-fill-highlight)}.badge.warning{color:var(--s-color-content-on-color);background-color:var(--s-color-fill-warning)}.badge.success{color:var(--s-color-content-on-color);background-color:var(--s-color-fill-success)}.badge.primary.light{background-color:var(--s-color-fill-highlight-light);color:var(--s-color-content-highlight-light);border:1px solid var(--s-color-border-highlight-light)}.badge.warning.light{background-color:var(--s-color-fill-warning-light);color:var(--s-color-content-warning);border:1px solid var(--s-color-border-warning-light)}.badge.success.light{background-color:var(--s-color-fill-success-light);color:var(--s-color-content-success);border:1px solid var(--s-color-border-success-light)}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Badge/Badge.scss"],
            names: [],
            mappings:
              "AAAA,OACE,wCAAA,CACA,mCAAA,CACA,2CAAA,CACA,iBAAA,CACA,kBAAA,CACA,qCAAA,CAEA,eACE,oCAAA,CACA,kDAAA,CACA,8BAAA,CAGF,aACE,8CAAA,CAGF,eACE,qCAAA,CACA,8CAAA,CAGF,eACE,qCAAA,CACA,4CAAA,CAGF,eACE,qCAAA,CACA,4CAAA,CAGF,qBACE,oDAAA,CACA,4CAAA,CACA,sDAAA,CAGF,qBACE,kDAAA,CACA,oCAAA,CACA,oDAAA,CAGF,qBACE,kDAAA,CACA,oCAAA,CACA,oDAAA",
            sourcesContent: [
              ".badge {\n  font: var(--s-typography-caption-regular);\n  padding: 0 var(--s-spacing-xx-small);\n  border-radius: var(--s-border-radius-medium);\n  width: min-content;\n  height: min-content;\n  color: var(--s-color-content-on-color);\n\n  &.default {\n    color: var(--s-color-content-default);\n    background-color: var(--s-color-fill-default-light);\n    border: 1px solid transparent;\n  }\n\n  &.light {\n    border: 1px solid var(--s-color-border-default);\n  }\n\n  &.primary {\n    color: var(--s-color-content-on-color);\n    background-color: var(--s-color-fill-highlight);\n  }\n\n  &.warning {\n    color: var(--s-color-content-on-color);\n    background-color: var(--s-color-fill-warning);\n  }\n\n  &.success {\n    color: var(--s-color-content-on-color);\n    background-color: var(--s-color-fill-success);\n  }\n\n  &.primary.light {\n    background-color: var(--s-color-fill-highlight-light);\n    color: var(--s-color-content-highlight-light);\n    border: 1px solid var(--s-color-border-highlight-light);\n  }\n\n  &.warning.light {\n    background-color: var(--s-color-fill-warning-light);\n    color: var(--s-color-content-warning);\n    border: 1px solid var(--s-color-border-warning-light);\n  }\n\n  &.success.light {\n    background-color: var(--s-color-fill-success-light);\n    color: var(--s-color-content-success);\n    border: 1px solid var(--s-color-border-success-light);\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
