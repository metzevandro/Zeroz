"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [2889],
  {
    "./src/app/components/Skeleton/Skeleton.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => Skeleton_Skeleton_Skeleton,
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
        Skeleton = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Skeleton/Skeleton.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Skeleton.A, options);
      Skeleton.A && Skeleton.A.locals && Skeleton.A.locals;
      function Skeleton_Skeleton_Skeleton(props) {
        return (0, jsx_runtime.jsx)("div", {
          className:
            "skeleton " + (!0 === props.circle ? "circle" : "no-circle"),
          style: {
            width: `${props.width}px`,
            height: `${props.height}px`,
            borderRadius: props.circle ? "var(--s-border-radius-pill)" : "",
            backgroundSize: `${props.width}px`,
          },
        });
      }
      try {
        (Skeleton_Skeleton_Skeleton.displayName = "Skeleton"),
          (Skeleton_Skeleton_Skeleton.__docgenInfo = {
            description: "",
            displayName: "Skeleton",
            props: {
              width: {
                defaultValue: null,
                description: "",
                name: "width",
                required: !0,
                type: { name: "string" },
              },
              height: {
                defaultValue: null,
                description: "",
                name: "height",
                required: !0,
                type: { name: "string" },
              },
              circle: {
                defaultValue: null,
                description: "",
                name: "circle",
                required: !1,
                type: { name: "boolean" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Skeleton/Skeleton.tsx#Skeleton"
            ] = {
              docgenInfo: Skeleton_Skeleton_Skeleton.__docgenInfo,
              name: "Skeleton",
              path: "src/app/components/Skeleton/Skeleton.tsx#Skeleton",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/Image/Image.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Skeleton: () => Image_stories_Skeleton,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Image_stories,
        });
      var jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        Skeleton = __webpack_require__(
          "./src/app/components/Skeleton/Skeleton.tsx",
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
        Image = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Image/Image.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Image.A, options);
      Image.A && Image.A.locals && Image.A.locals;
      __webpack_require__("./node_modules/next/dist/compiled/react/index.js");
      const Image_Image_Image = ({
          src,
          alt,
          width,
          height,
          skeleton,
          ...props
        }) =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: skeleton
              ? (0, jsx_runtime.jsx)(Skeleton.A, {
                  width: `${width}`,
                  height: `${height}`,
                })
              : (0, jsx_runtime.jsx)("img", {
                  className: "image-root",
                  width,
                  height,
                  src,
                  alt,
                  ...props,
                }),
          }),
        components_Image_Image = Image_Image_Image;
      try {
        (Image_Image_Image.displayName = "Image"),
          (Image_Image_Image.__docgenInfo = {
            description: "",
            displayName: "Image",
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
              width: {
                defaultValue: null,
                description: "",
                name: "width",
                required: !1,
                type: { name: "string" },
              },
              height: {
                defaultValue: null,
                description: "",
                name: "height",
                required: !1,
                type: { name: "string" },
              },
              skeleton: {
                defaultValue: null,
                description: "",
                name: "skeleton",
                required: !1,
                type: { name: "boolean" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Image/Image.tsx#Image"
            ] = {
              docgenInfo: Image_Image_Image.__docgenInfo,
              name: "Image",
              path: "src/app/components/Image/Image.tsx#Image",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_require__("./src/app/styles.scss");
      var dist = __webpack_require__(
        "./node_modules/@storybook/blocks/dist/index.mjs",
      );
      const Image_stories = {
          title: "Components/Image",
          component: components_Image_Image,
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
                        (0, jsx_runtime.jsx)("strong", { children: "Image" }),
                        " display a preview of the images.",
                      ],
                    }),
                    (0, jsx_runtime.jsx)(dist.Tn, {}),
                    (0, jsx_runtime.jsx)(dist.H2, {}),
                    (0, jsx_runtime.jsx)(dist.om, {}),
                  ],
                }),
            },
          },
          argTypes: {
            src: {
              description: "The URL of the image",
              control: { type: "text" },
              table: { category: "Content" },
            },
            width: {
              description: "The width of the image",
              control: { type: "text" },
              table: { category: "Appearance" },
            },
            height: {
              description: "The height of the image",
              control: { type: "text" },
              table: { category: "Appearance" },
            },
            alt: {
              description: "The alt text for the image",
              control: { type: "text" },
              table: { category: "Content" },
            },
            skeleton: {
              description: "Whether to display a skeleton loading state",
              control: { type: "boolean" },
              table: { category: "Behavior" },
            },
          },
        },
        Default = {
          args: {
            src: "https://picsum.photos/200",
            width: "200",
            height: "200",
            alt: "Image",
            skeleton: !1,
          },
        },
        Image_stories_Skeleton = {
          args: {
            src: "https://picsum.photos/200",
            width: "200",
            height: "200",
            alt: "Image",
            skeleton: !0,
          },
        },
        __namedExportsOrder = ["Default", "Skeleton"];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    src: "https://picsum.photos/200",\n    width: "200",\n    height: "200",\n    alt: "Image",\n    skeleton: false\n  }\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Image_stories_Skeleton.parameters = {
          ...Image_stories_Skeleton.parameters,
          docs: {
            ...Image_stories_Skeleton.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    src: "https://picsum.photos/200",\n    width: "200",\n    height: "200",\n    alt: "Image",\n    skeleton: true\n  }\n}',
              ...Image_stories_Skeleton.parameters?.docs?.source,
            },
          },
        });
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Image/Image.scss":
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
          ".image-root{border:var(--s-border-width-thin) solid var(--s-color-border-default);border-radius:var(--s-border-radius-medium);object-fit:cover}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Image/Image.scss"],
            names: [],
            mappings: "AAAA,YACE,qEAAA,CACA,2CAAA,CACA,gBAAA",
            sourcesContent: [
              ".image-root {\n  border: var(--s-border-width-thin) solid var(--s-color-border-default);\n  border-radius: var(--s-border-radius-medium);\n  object-fit: cover;\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Skeleton/Skeleton.scss":
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
          '.skeleton{position:relative;padding:0px;border:none;box-shadow:none;pointer-events:none;inline-size:100%;border-radius:var(--s-border-radius-medium);box-shadow:0px 1px 2px 0px rgba(14,21,36,.06)}.skeleton.no-circle::before{border-radius:var(--s-border-radius-medium);position:absolute;block-size:100%;content:"";inline-size:100%;background-color:var(--s-color-fill-default-light);background-image:linear-gradient(90deg, var(--s-color-fill-disable) 0, var(--s-color-fill-disable) 50%, var(--s-color-fill-disable) 100%);background-repeat:no-repeat;will-change:background-position;animation:skeleton ease-in-out 2000ms forwards infinite}.skeleton.circle::before{border-radius:var(--s-border-radius-pill);position:absolute;block-size:100%;content:"";inline-size:100%;background-color:var(--s-color-fill-default-light);background-image:linear-gradient(90deg, var(--s-color-fill-disable) 0, var(--s-color-fill-disable) 50%, var(--s-color-fill-disable) 100%);background-repeat:no-repeat;will-change:background-position;animation:skeleton ease-in-out 2000ms forwards infinite}@keyframes skeleton{0%{background-position:100% 0;background-size:0%}50%{background-position:100% 0;background-size:100%}100%{background-position:100% 0;background-size:0%}}',
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Skeleton/Skeleton.scss"],
            names: [],
            mappings:
              "AAmBA,UACE,iBAAA,CACA,WAAA,CACA,WAAA,CACA,eAAA,CACA,mBAAA,CACA,gBAAA,CACA,2CAAA,CACA,6CAAA,CAGF,4BACE,2CAAA,CACA,iBAAA,CACA,eAAA,CACA,UAAA,CACA,gBAAA,CAvBA,kDAZkB,CAalB,yIATkB,CAUlB,2BAAA,CACA,+BAAA,CACA,uDAAA,CAuBF,yBACE,yCAAA,CACA,iBAAA,CACA,eAAA,CACA,UAAA,CACA,gBAAA,CAhCA,kDAZkB,CAalB,yIATkB,CAUlB,2BAAA,CACA,+BAAA,CACA,uDAAA,CAgCF,oBACE,GACE,0BAAA,CACA,kBAAA,CAEF,IACE,0BAAA,CACA,oBAAA,CAEF,KACE,0BAAA,CACA,kBAAA,CAAA",
            sourcesContent: [
              '$skeleton-bg-color: var(--s-color-fill-default-light);\n$skeleton-gradient-color-start: var(--s-color-fill-disable);\n$skeleton-gradient-color-mid: var(--s-color-fill-disable);\n$skeleton-gradient-color-end: var(--s-color-fill-disable);\n$skeleton-gradient: linear-gradient(\n  90deg,\n  $skeleton-gradient-color-start 0,\n  $skeleton-gradient-color-mid 50%,\n  $skeleton-gradient-color-end 100%\n);\n\n@mixin skeleton {\n  background-color: $skeleton-bg-color;\n  background-image: $skeleton-gradient;\n  background-repeat: no-repeat;\n  will-change: background-position;\n  animation: skeleton ease-in-out 2000ms forwards infinite;\n}\n\n.skeleton {\n  position: relative;\n  padding: 0px;\n  border: none;\n  box-shadow: none;\n  pointer-events: none;\n  inline-size: 100%;\n  border-radius: var(--s-border-radius-medium);\n  box-shadow: 0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n}\n\n.skeleton.no-circle::before {\n  border-radius: var(--s-border-radius-medium);\n  position: absolute;\n  block-size: 100%;\n  content: "";\n  inline-size: 100%;\n  @include skeleton;\n}\n\n.skeleton.circle::before {\n  border-radius: var(--s-border-radius-pill);\n  position: absolute;\n  block-size: 100%;\n  content: "";\n  inline-size: 100%;\n  @include skeleton;\n}\n\n@keyframes skeleton {\n  0% {\n    background-position: 100% 0;\n    background-size: 0%;\n  }\n  50% {\n    background-position: 100% 0;\n    background-size: 100%;\n  }\n  100% {\n    background-position: 100% 0;\n    background-size: 0%;\n  }\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
