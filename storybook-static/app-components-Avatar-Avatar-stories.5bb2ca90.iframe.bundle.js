"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [6817],
  {
    "./src/app/components/Avatar/Avatar.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Skeleton: () => Skeleton,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
          withImage: () => withImage,
        });
      var _Default_parameters,
        _Default_parameters_docs,
        _Default_parameters1,
        _withImage_parameters,
        _withImage_parameters_docs,
        _withImage_parameters1,
        _Skeleton_parameters,
        _Skeleton_parameters_docs,
        _Skeleton_parameters1,
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        _Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./src/app/components/Avatar/Avatar.tsx",
        );
      __webpack_require__("./node_modules/next/dist/compiled/react/index.js"),
        __webpack_require__("./src/app/styles.scss");
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Components/Avatar",
          component: _Avatar__WEBPACK_IMPORTED_MODULE_1__.A,
          parameters: { layout: "centered" },
        },
        Template = (args) =>
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _Avatar__WEBPACK_IMPORTED_MODULE_1__.A,
            { size: args.size, src: args.src, skeleton: args.skeleton },
          ),
        Default = Template.bind({});
      Default.args = { size: "md", src: "", skeleton: !1 };
      const withImage = Template.bind({});
      withImage.args = {
        size: "md",
        src: "https://picsum.photos/100",
        skeleton: !1,
      };
      const Skeleton = Template.bind({});
      (Skeleton.args = { size: "md", src: "", skeleton: !0 }),
        (Default.parameters = {
          ...Default.parameters,
          docs: {
            ...(null === (_Default_parameters = Default.parameters) ||
            void 0 === _Default_parameters
              ? void 0
              : _Default_parameters.docs),
            source: {
              originalSource:
                "args => {\n  return <Avatar size={args.size} src={args.src} skeleton={args.skeleton} />;\n}",
              ...(null === (_Default_parameters1 = Default.parameters) ||
              void 0 === _Default_parameters1 ||
              null === (_Default_parameters_docs = _Default_parameters1.docs) ||
              void 0 === _Default_parameters_docs
                ? void 0
                : _Default_parameters_docs.source),
            },
          },
        }),
        (withImage.parameters = {
          ...withImage.parameters,
          docs: {
            ...(null === (_withImage_parameters = withImage.parameters) ||
            void 0 === _withImage_parameters
              ? void 0
              : _withImage_parameters.docs),
            source: {
              originalSource:
                "args => {\n  return <Avatar size={args.size} src={args.src} skeleton={args.skeleton} />;\n}",
              ...(null === (_withImage_parameters1 = withImage.parameters) ||
              void 0 === _withImage_parameters1 ||
              null ===
                (_withImage_parameters_docs = _withImage_parameters1.docs) ||
              void 0 === _withImage_parameters_docs
                ? void 0
                : _withImage_parameters_docs.source),
            },
          },
        }),
        (Skeleton.parameters = {
          ...Skeleton.parameters,
          docs: {
            ...(null === (_Skeleton_parameters = Skeleton.parameters) ||
            void 0 === _Skeleton_parameters
              ? void 0
              : _Skeleton_parameters.docs),
            source: {
              originalSource:
                "args => {\n  return <Avatar size={args.size} src={args.src} skeleton={args.skeleton} />;\n}",
              ...(null === (_Skeleton_parameters1 = Skeleton.parameters) ||
              void 0 === _Skeleton_parameters1 ||
              null ===
                (_Skeleton_parameters_docs = _Skeleton_parameters1.docs) ||
              void 0 === _Skeleton_parameters_docs
                ? void 0
                : _Skeleton_parameters_docs.source),
            },
          },
        });
      const __namedExportsOrder = ["Default", "withImage", "Skeleton"];
    },
    "./src/app/components/Avatar/Avatar.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_Avatar_Avatar,
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
        Avatar = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Avatar/Avatar.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Avatar.A, options);
      Avatar.A && Avatar.A.locals && Avatar.A.locals;
      __webpack_require__("./node_modules/next/dist/compiled/react/index.js");
      var Skeleton = __webpack_require__(
        "./src/app/components/Skeleton/Skeleton.tsx",
      );
      const Avatar_Avatar_Avatar = (param) => {
          let { size, src, skeleton } = param;
          const sizeInPixels = ((size) => {
            switch (size) {
              case "sm":
                return 20;
              case "md":
                return 40;
              case "lg":
                return 64;
              default:
                return 32;
            }
          })(size);
          return (0, jsx_runtime.jsx)("div", {
            className: "avatar",
            children: skeleton
              ? (0, jsx_runtime.jsx)(Skeleton.A, {
                  circle: !0,
                  height: "".concat(sizeInPixels),
                  width: "".concat(sizeInPixels),
                })
              : (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
                  children: src
                    ? (0, jsx_runtime.jsx)("label", {
                        className: "avatar-image",
                        children: (0, jsx_runtime.jsx)("img", {
                          className: size,
                          src,
                          alt: "Avatar",
                        }),
                      })
                    : (0, jsx_runtime.jsx)("label", {
                        className: "avatar-icon ".concat(size),
                        children: (0, jsx_runtime.jsx)(Icon.A, {
                          size,
                          icon: "person",
                        }),
                      }),
                }),
          });
        },
        components_Avatar_Avatar = Avatar_Avatar_Avatar;
      try {
        (Avatar_Avatar_Avatar.displayName = "Avatar"),
          (Avatar_Avatar_Avatar.__docgenInfo = {
            description: "",
            displayName: "Avatar",
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
              src: {
                defaultValue: null,
                description: "",
                name: "src",
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
              "src/app/components/Avatar/Avatar.tsx#Avatar"
            ] = {
              docgenInfo: Avatar_Avatar_Avatar.__docgenInfo,
              name: "Avatar",
              path: "src/app/components/Avatar/Avatar.tsx#Avatar",
            });
      } catch (__react_docgen_typescript_loader_error) {}
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
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Skeleton/Skeleton.scss",
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
          className: "skeleton ".concat(
            !0 === props.circle ? "circle" : "no-circle",
          ),
          style: {
            width: "".concat(props.width, "px"),
            height: "".concat(props.height, "px"),
            borderRadius: props.circle ? "var(--s-border-radius-pill)" : "",
            backgroundSize: "".concat(props.width, "px"),
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
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Avatar/Avatar.scss":
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
          ".avatar label{display:flex;align-items:center;justify-content:center;border-radius:var(--s-border-radius-pill);color:var(--s-color-content-on-color);width:fit-content}.avatar img{border-radius:var(--s-border-radius-pill);object-fit:cover;border:none}.avatar-icon{background-color:var(--s-color-fill-highlight)}.avatar-icon .sm{padding:var(--s-spacing-nano)}.avatar-icon .md{padding:var(--s-spacing-xx-small)}.avatar-icon .lg{padding:var(--s-spacing-small)}.avatar-image .sm{height:24px;width:24px}.avatar-image .md{height:40px;width:40px}.avatar-image .lg{height:64px;width:64px}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Avatar/Avatar.scss"],
            names: [],
            mappings:
              "AAAA,cACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,yCAAA,CACA,qCAAA,CACA,iBAAA,CAGF,YACE,yCAAA,CACA,gBAAA,CACA,WAAA,CAGF,aACE,8CAAA,CAGF,iBACE,6BAAA,CAGF,iBACE,iCAAA,CAGF,iBACE,8BAAA,CAGF,kBACE,WAAA,CACA,UAAA,CAGF,kBACE,WAAA,CACA,UAAA,CAGF,kBACE,WAAA,CACA,UAAA",
            sourcesContent: [
              ".avatar label {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--s-border-radius-pill);\n  color: var(--s-color-content-on-color);\n  width: fit-content;\n}\n\n.avatar img {\n  border-radius: var(--s-border-radius-pill);\n  object-fit: cover;\n  border: none;\n}\n\n.avatar-icon {\n  background-color: var(--s-color-fill-highlight);\n}\n\n.avatar-icon .sm {\n  padding: var(--s-spacing-nano);\n}\n\n.avatar-icon .md {\n  padding: var(--s-spacing-xx-small);\n}\n\n.avatar-icon .lg {\n  padding: var(--s-spacing-small);\n}\n\n.avatar-image .sm {\n  height: 24px;\n  width: 24px;\n}\n\n.avatar-image .md {\n  height: 40px;\n  width: 40px;\n}\n\n.avatar-image .lg {\n  height: 64px;\n  width: 64px;\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
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
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Skeleton/Skeleton.scss":
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
          '.skeleton{position:relative;padding:0px;border:none;box-shadow:none;pointer-events:none;inline-size:100%;border-radius:var(--s-border-radius-small)}.skeleton.no-circle::before{border-radius:var(--s-border-radius-small);position:absolute;block-size:100%;content:"";inline-size:100%;background-color:var(--s-color-fill-default-light);background-image:linear-gradient(90deg, var(--s-color-fill-disable) 0, var(--s-color-fill-disable) 50%, var(--s-color-fill-disable) 100%);background-repeat:no-repeat;will-change:background-position;animation:skeleton ease-in-out 2000ms forwards infinite}.skeleton.circle::before{border-radius:var(--s-border-radius-pill);position:absolute;block-size:100%;content:"";inline-size:100%;background-color:var(--s-color-fill-default-light);background-image:linear-gradient(90deg, var(--s-color-fill-disable) 0, var(--s-color-fill-disable) 50%, var(--s-color-fill-disable) 100%);background-repeat:no-repeat;will-change:background-position;animation:skeleton ease-in-out 2000ms forwards infinite}@keyframes skeleton{0%{background-position:100% 0;background-size:0%}50%{background-position:100% 0;background-size:100%}100%{background-position:100% 0;background-size:0%}}',
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Skeleton/Skeleton.scss"],
            names: [],
            mappings:
              "AAmBA,UACE,iBAAA,CACA,WAAA,CACA,WAAA,CACA,eAAA,CACA,mBAAA,CACA,gBAAA,CACA,0CAAA,CAGF,4BACE,0CAAA,CACA,iBAAA,CACA,eAAA,CACA,UAAA,CACA,gBAAA,CAtBA,kDAZkB,CAalB,yIATkB,CAUlB,2BAAA,CACA,+BAAA,CACA,uDAAA,CAsBF,yBACE,yCAAA,CACA,iBAAA,CACA,eAAA,CACA,UAAA,CACA,gBAAA,CA/BA,kDAZkB,CAalB,yIATkB,CAUlB,2BAAA,CACA,+BAAA,CACA,uDAAA,CA+BF,oBACE,GACE,0BAAA,CACA,kBAAA,CAEF,IACE,0BAAA,CACA,oBAAA,CAEF,KACE,0BAAA,CACA,kBAAA,CAAA",
            sourcesContent: [
              '$skeleton-bg-color: var(--s-color-fill-default-light);\n$skeleton-gradient-color-start: var(--s-color-fill-disable);\n$skeleton-gradient-color-mid: var(--s-color-fill-disable);\n$skeleton-gradient-color-end: var(--s-color-fill-disable);\n$skeleton-gradient: linear-gradient(\n  90deg,\n  $skeleton-gradient-color-start 0,\n  $skeleton-gradient-color-mid 50%,\n  $skeleton-gradient-color-end 100%\n);\n\n@mixin skeleton {\n  background-color: $skeleton-bg-color;\n  background-image: $skeleton-gradient;\n  background-repeat: no-repeat;\n  will-change: background-position;\n  animation: skeleton ease-in-out 2000ms forwards infinite;\n}\n\n.skeleton {\n  position: relative;\n  padding: 0px;\n  border: none;\n  box-shadow: none;\n  pointer-events: none;\n  inline-size: 100%;\n  border-radius: var(--s-border-radius-small);\n}\n\n.skeleton.no-circle::before {\n  border-radius: var(--s-border-radius-small);\n  position: absolute;\n  block-size: 100%;\n  content: "";\n  inline-size: 100%;\n  @include skeleton;\n}\n\n.skeleton.circle::before {\n  border-radius: var(--s-border-radius-pill);\n  position: absolute;\n  block-size: 100%;\n  content: "";\n  inline-size: 100%;\n  @include skeleton;\n}\n\n@keyframes skeleton {\n  0% {\n    background-position: 100% 0;\n    background-size: 0%;\n  }\n  50% {\n    background-position: 100% 0;\n    background-size: 100%;\n  }\n  100% {\n    background-position: 100% 0;\n    background-size: 0%;\n  }\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
