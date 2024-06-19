"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [3865],
  {
    "./src/app/components/Loading/Loading.stories.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Large: () => Large,
          Success: () => Success,
          Warning: () => Warning,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Default_parameters,
        _Default_parameters_docs,
        _Default_parameters1,
        _Large_parameters,
        _Large_parameters_docs,
        _Large_parameters1,
        _Success_parameters,
        _Success_parameters_docs,
        _Success_parameters1,
        _Warning_parameters,
        _Warning_parameters_docs,
        _Warning_parameters1;
      __webpack_require__("./src/app/styles.scss");
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Components/Loading",
          component: __webpack_require__(
            "./src/app/components/Loading/Loading.tsx",
          ).A,
          tags: ["autodocs"],
          parameters: { layout: "centered" },
          argTypes: {},
        },
        Default = { args: { variant: "default", message: "Loading" } },
        Large = { args: { variant: "large" } },
        Success = { args: { variant: "success", message: "Success" } },
        Warning = { args: { variant: "warning", message: "Warning" } };
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...(null === (_Default_parameters = Default.parameters) ||
          void 0 === _Default_parameters
            ? void 0
            : _Default_parameters.docs),
          source: {
            originalSource:
              '{\n  args: {\n    variant: "default",\n    message: "Loading"\n  }\n}',
            ...(null === (_Default_parameters1 = Default.parameters) ||
            void 0 === _Default_parameters1 ||
            null === (_Default_parameters_docs = _Default_parameters1.docs) ||
            void 0 === _Default_parameters_docs
              ? void 0
              : _Default_parameters_docs.source),
          },
        },
      }),
        (Large.parameters = {
          ...Large.parameters,
          docs: {
            ...(null === (_Large_parameters = Large.parameters) ||
            void 0 === _Large_parameters
              ? void 0
              : _Large_parameters.docs),
            source: {
              originalSource: '{\n  args: {\n    variant: "large"\n  }\n}',
              ...(null === (_Large_parameters1 = Large.parameters) ||
              void 0 === _Large_parameters1 ||
              null === (_Large_parameters_docs = _Large_parameters1.docs) ||
              void 0 === _Large_parameters_docs
                ? void 0
                : _Large_parameters_docs.source),
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
                '{\n  args: {\n    variant: "success",\n    message: "Success"\n  }\n}',
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
                '{\n  args: {\n    variant: "warning",\n    message: "Warning"\n  }\n}',
              ...(null === (_Warning_parameters1 = Warning.parameters) ||
              void 0 === _Warning_parameters1 ||
              null === (_Warning_parameters_docs = _Warning_parameters1.docs) ||
              void 0 === _Warning_parameters_docs
                ? void 0
                : _Warning_parameters_docs.source),
            },
          },
        });
      const __namedExportsOrder = ["Default", "Large", "Success", "Warning"];
    },
    "./src/app/components/Icon/Icon.tsx": (
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
        Icon = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Icon/Icon.scss",
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
      const Icon_Icon_Icon = (param) => {
          let { size, fill, icon } = param;
          const sizeClass = size,
            fillStyle = "'FILL' ".concat(fill ? 1 : 0);
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)("span", {
              style: { fontVariationSettings: fillStyle },
              className: "material-symbols-outlined ".concat(sizeClass),
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
            (STORYBOOK_REACT_CLASSES["src/app/components/Icon/Icon.tsx#Icon"] =
              {
                docgenInfo: Icon_Icon_Icon.__docgenInfo,
                name: "Icon",
                path: "src/app/components/Icon/Icon.tsx#Icon",
              });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/Loading/Loading.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_Loading_Loading,
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
        Loading = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Loading/Loading.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Loading.A, options);
      Loading.A && Loading.A.locals && Loading.A.locals;
      __webpack_require__("./node_modules/next/dist/compiled/react/index.js");
      const Loading_Loading_Loading = (param) => {
          let { variant, message } = param;
          return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              "default" === variant &&
                (0, jsx_runtime.jsxs)("div", {
                  className: "loading-with-message",
                  children: [
                    (0, jsx_runtime.jsx)("span", {
                      className: "loading",
                      children: (0, jsx_runtime.jsx)(Icon.A, {
                        size: "sm",
                        icon: "progress_activity",
                      }),
                    }),
                    message &&
                      (0, jsx_runtime.jsx)("p", {
                        className: "loading-message",
                        children: message,
                      }),
                  ],
                }),
              "large" === variant &&
                (0, jsx_runtime.jsx)("span", {
                  className: "loading",
                  children: (0, jsx_runtime.jsx)(Icon.A, {
                    size: "lg",
                    icon: "progress_activity",
                  }),
                }),
              "success" === variant &&
                (0, jsx_runtime.jsxs)("div", {
                  className: "loading-with-message",
                  children: [
                    (0, jsx_runtime.jsx)("span", {
                      className: "success",
                      children: (0, jsx_runtime.jsx)(Icon.A, {
                        size: "sm",
                        icon: "check_circle",
                      }),
                    }),
                    message &&
                      (0, jsx_runtime.jsx)("p", {
                        className: "loading-message",
                        children: message,
                      }),
                    " ",
                  ],
                }),
              "warning" === variant &&
                (0, jsx_runtime.jsxs)("div", {
                  className: "loading-with-message",
                  children: [
                    (0, jsx_runtime.jsx)("span", {
                      className: "warning",
                      children: (0, jsx_runtime.jsx)(Icon.A, {
                        size: "sm",
                        icon: "error_outline",
                      }),
                    }),
                    message &&
                      (0, jsx_runtime.jsx)("p", {
                        className: "loading-message",
                        children: message,
                      }),
                    " ",
                  ],
                }),
            ],
          });
        },
        components_Loading_Loading = Loading_Loading_Loading;
      try {
        (Loading_Loading_Loading.displayName = "Loading"),
          (Loading_Loading_Loading.__docgenInfo = {
            description: "",
            displayName: "Loading",
            props: {
              variant: {
                defaultValue: null,
                description: "",
                name: "variant",
                required: !0,
                type: {
                  name: "enum",
                  value: [
                    { value: '"default"' },
                    { value: '"success"' },
                    { value: '"warning"' },
                    { value: '"large"' },
                  ],
                },
              },
              message: {
                defaultValue: null,
                description: "",
                name: "message",
                required: !1,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Loading/Loading.tsx#Loading"
            ] = {
              docgenInfo: Loading_Loading_Loading.__docgenInfo,
              name: "Loading",
              path: "src/app/components/Loading/Loading.tsx#Loading",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Icon/Icon.scss":
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
          '@import"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";.material-symbols-outlined{font-weight:400;display:flex;user-select:none}.material-symbols-outlined.sm{font-size:16px}.material-symbols-outlined.md{font-size:24px}.material-symbols-outlined.lg{font-size:32px}',
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Icon/Icon.scss"],
            names: [],
            mappings:
              "AAAQ,6HAAA,CAER,2BACE,eAAA,CACA,YAAA,CACA,gBAAA,CAGF,8BACE,cAAA,CAGF,8BACE,cAAA,CAGF,8BACE,cAAA",
            sourcesContent: [
              '@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");\n\n.material-symbols-outlined {\n  font-weight: 400;\n  display: flex;\n  user-select: none;\n}\n\n.material-symbols-outlined.sm {\n  font-size: 16px;\n}\n\n.material-symbols-outlined.md {\n  font-size: 24px;\n}\n\n.material-symbols-outlined.lg {\n  font-size: 32px;\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Loading/Loading.scss":
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
          ".loading{overflow:hidden;display:flex;align-items:center;justify-content:center;color:var(--s-color-content-highlight);animation:spin 1s infinite linear}.loading-with-message{display:flex;align-items:center;gap:8px}.loading-with-message .success{color:var(--s-color-content-success)}.loading-with-message .warning{color:var(--s-color-content-warning)}.loading-with-message .loading-message{font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default)}.material-symbols-outlined.extra-large{font-size:88px}@keyframes spin{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Loading/Loading.scss"],
            names: [],
            mappings:
              "AAAA,SACE,eAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,sCAAA,CACA,iCAAA,CAGF,sBACE,YAAA,CACA,kBAAA,CACA,OAAA,CAEA,+BACE,oCAAA,CAGF,+BACE,oCAAA,CAGF,uCACE,0CAAA,CACA,oCAAA,CAIJ,uCACE,cAAA,CAGF,gBACE,GACE,uBAAA,CAEF,KACE,yBAAA,CAAA",
            sourcesContent: [
              ".loading {\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--s-color-content-highlight);\n  animation: spin 1s infinite linear;\n}\n\n.loading-with-message {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  .success {\n    color: var(--s-color-content-success);\n  }\n\n  .warning {\n    color: var(--s-color-content-warning);\n  }\n\n  .loading-message {\n    font: var(--s-typography-paragraph-regular);\n    color: var(--s-color-content-default);\n  }\n}\n\n.material-symbols-outlined.extra-large {\n  font-size: 88px;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotateZ(0deg);\n  }\n  100% {\n    transform: rotateZ(360deg);\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
