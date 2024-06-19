"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [6245],
  {
    "./src/app/components/Badge/Badge.stories.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Primary: () => Primary,
          Success: () => Success,
          Warning: () => Warning,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Badge_stories,
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
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Badge/Badge.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Badge.A, options);
      Badge.A && Badge.A.locals && Badge.A.locals;
      const Badge_Badge_Badge = (param) => {
          let { label, type, variant } = param;
          return (0, jsx_runtime.jsx)("div", {
            className: "badge ".concat(type, " ").concat(variant),
            children: (0, jsx_runtime.jsx)("p", { children: label }),
          });
        },
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
                    { value: '"default"' },
                    { value: '"primary"' },
                    { value: '"success"' },
                    { value: '"warning"' },
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
      var _Default_parameters,
        _Default_parameters_docs,
        _Default_parameters1,
        _Primary_parameters,
        _Primary_parameters_docs,
        _Primary_parameters1,
        _Success_parameters,
        _Success_parameters_docs,
        _Success_parameters1,
        _Warning_parameters,
        _Warning_parameters_docs,
        _Warning_parameters1;
      __webpack_require__("./src/app/styles.scss");
      const Badge_stories = {
          title: "Components/Badge",
          component: components_Badge_Badge,
          parameters: { layout: "centered" },
        },
        Default = {
          args: { label: "Badge", type: "default", variant: "default" },
        },
        Primary = {
          args: { label: "Badge", type: "default", variant: "primary" },
        },
        Success = {
          args: { label: "Badge", type: "default", variant: "success" },
        },
        Warning = {
          args: { label: "Badge", type: "default", variant: "warning" },
        };
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...(null === (_Default_parameters = Default.parameters) ||
          void 0 === _Default_parameters
            ? void 0
            : _Default_parameters.docs),
          source: {
            originalSource:
              '{\n  args: {\n    label: "Badge",\n    type: "default",\n    variant: "default"\n  }\n}',
            ...(null === (_Default_parameters1 = Default.parameters) ||
            void 0 === _Default_parameters1 ||
            null === (_Default_parameters_docs = _Default_parameters1.docs) ||
            void 0 === _Default_parameters_docs
              ? void 0
              : _Default_parameters_docs.source),
          },
        },
      }),
        (Primary.parameters = {
          ...Primary.parameters,
          docs: {
            ...(null === (_Primary_parameters = Primary.parameters) ||
            void 0 === _Primary_parameters
              ? void 0
              : _Primary_parameters.docs),
            source: {
              originalSource:
                '{\n  args: {\n    label: "Badge",\n    type: "default",\n    variant: "primary"\n  }\n}',
              ...(null === (_Primary_parameters1 = Primary.parameters) ||
              void 0 === _Primary_parameters1 ||
              null === (_Primary_parameters_docs = _Primary_parameters1.docs) ||
              void 0 === _Primary_parameters_docs
                ? void 0
                : _Primary_parameters_docs.source),
            },
          },
        }),
        (Success.parameters = {
          ...Success.parameters,
          docs: {
            ...(null === (_Success_parameters = Success.parameters) ||
            void 0 === _Success_parameters
              ? void 0
              : _Success_parameters.docs),
            source: {
              originalSource:
                '{\n  args: {\n    label: "Badge",\n    type: "default",\n    variant: "success"\n  }\n}',
              ...(null === (_Success_parameters1 = Success.parameters) ||
              void 0 === _Success_parameters1 ||
              null === (_Success_parameters_docs = _Success_parameters1.docs) ||
              void 0 === _Success_parameters_docs
                ? void 0
                : _Success_parameters_docs.source),
            },
          },
        }),
        (Warning.parameters = {
          ...Warning.parameters,
          docs: {
            ...(null === (_Warning_parameters = Warning.parameters) ||
            void 0 === _Warning_parameters
              ? void 0
              : _Warning_parameters.docs),
            source: {
              originalSource:
                '{\n  args: {\n    label: "Badge",\n    type: "default",\n    variant: "warning"\n  }\n}',
              ...(null === (_Warning_parameters1 = Warning.parameters) ||
              void 0 === _Warning_parameters1 ||
              null === (_Warning_parameters_docs = _Warning_parameters1.docs) ||
              void 0 === _Warning_parameters_docs
                ? void 0
                : _Warning_parameters_docs.source),
            },
          },
        });
      const __namedExportsOrder = ["Default", "Primary", "Success", "Warning"];
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Badge/Badge.scss":
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
          ".badge{font:var(--s-typography-caption-regular);padding:0 var(--s-spacing-xx-small);border-radius:var(--s-border-radius-pill);width:min-content;height:min-content;color:var(--s-color-content-on-color)}.badge.default{color:var(--s-color-content-default);background-color:var(--s-color-fill-default-light);border:1px solid rgba(0,0,0,0)}.badge.light{border:1px solid var(--s-color-border-default)}.badge.primary{color:var(--s-color-content-on-color);background-color:var(--s-color-fill-highlight)}.badge.warning{color:var(--s-color-content-on-color);background-color:var(--s-color-fill-warning)}.badge.success{color:var(--s-color-content-on-color);background-color:var(--s-color-fill-success)}.badge.primary.light{background-color:var(--s-color-fill-highlight-light);color:var(--s-color-content-highlight);border:1px solid var(--s-color-border-highlight-light)}.badge.warning.light{background-color:var(--s-color-fill-warning-light);color:var(--s-color-content-warning);border:1px solid var(--s-color-border-warning-light)}.badge.success.light{background-color:var(--s-color-fill-success-light);color:var(--s-color-content-success);border:1px solid var(--s-color-border-success-light)}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Badge/Badge.scss"],
            names: [],
            mappings:
              "AAAA,OACE,wCAAA,CACA,mCAAA,CACA,yCAAA,CACA,iBAAA,CACA,kBAAA,CACA,qCAAA,CAEA,eACE,oCAAA,CACA,kDAAA,CACA,8BAAA,CAGF,aACE,8CAAA,CAGF,eACE,qCAAA,CACA,8CAAA,CAGF,eACE,qCAAA,CACA,4CAAA,CAGF,eACE,qCAAA,CACA,4CAAA,CAGF,qBACE,oDAAA,CACA,sCAAA,CACA,sDAAA,CAGF,qBACE,kDAAA,CACA,oCAAA,CACA,oDAAA,CAGF,qBACE,kDAAA,CACA,oCAAA,CACA,oDAAA",
            sourcesContent: [
              ".badge {\n  font: var(--s-typography-caption-regular);\n  padding: 0 var(--s-spacing-xx-small);\n  border-radius: var(--s-border-radius-pill);\n  width: min-content;\n  height: min-content;\n  color: var(--s-color-content-on-color);\n\n  &.default {\n    color: var(--s-color-content-default);\n    background-color: var(--s-color-fill-default-light);\n    border: 1px solid transparent;\n  }\n\n  &.light {\n    border: 1px solid var(--s-color-border-default);\n  }\n\n  &.primary {\n    color: var(--s-color-content-on-color);\n    background-color: var(--s-color-fill-highlight);\n  }\n\n  &.warning {\n    color: var(--s-color-content-on-color);\n    background-color: var(--s-color-fill-warning);\n  }\n\n  &.success {\n    color: var(--s-color-content-on-color);\n    background-color: var(--s-color-fill-success);\n  }\n\n  &.primary.light {\n    background-color: var(--s-color-fill-highlight-light);\n    color: var(--s-color-content-highlight);\n    border: 1px solid var(--s-color-border-highlight-light);\n  }\n\n  &.warning.light {\n    background-color: var(--s-color-fill-warning-light);\n    color: var(--s-color-content-warning);\n    border: 1px solid var(--s-color-border-warning-light);\n  }\n\n  &.success.light {\n    background-color: var(--s-color-fill-success-light);\n    color: var(--s-color-content-success);\n    border: 1px solid var(--s-color-border-success-light);\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
