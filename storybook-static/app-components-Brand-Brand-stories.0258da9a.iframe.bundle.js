"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [929],
  {
    "./src/app/components/Brand/Brand.stories.tsx": (
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
        _Brand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./src/app/components/Brand/Brand.tsx",
        );
      __webpack_require__("./src/app/styles.scss");
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Components/Brand",
          component: _Brand__WEBPACK_IMPORTED_MODULE_0__.A,
          parameters: { layout: "centered" },
        },
        Default = { args: { size: "md", src: "/logo-sm.svg", alt: "Imagem" } };
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...(null === (_Default_parameters = Default.parameters) ||
          void 0 === _Default_parameters
            ? void 0
            : _Default_parameters.docs),
          source: {
            originalSource:
              '{\n  args: {\n    size: "md",\n    src: "/logo-sm.svg",\n    alt: "Imagem"\n  }\n}',
            ...(null === (_Default_parameters1 = Default.parameters) ||
            void 0 === _Default_parameters1 ||
            null === (_Default_parameters_docs = _Default_parameters1.docs) ||
            void 0 === _Default_parameters_docs
              ? void 0
              : _Default_parameters_docs.source),
          },
        },
      };
      const __namedExportsOrder = ["Default"];
    },
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
  },
]);
