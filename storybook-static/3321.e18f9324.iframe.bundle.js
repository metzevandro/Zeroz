"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [3321],
  {
    "./src/app/components/ButtonGroup/ButtonGroup.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_ButtonGroup_ButtonGroup,
      });
      var jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        Button = __webpack_require__("./src/app/components/Button/Button.tsx"),
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
        ButtonGroup = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/ButtonGroup/ButtonGroup.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(ButtonGroup.A, options);
      ButtonGroup.A && ButtonGroup.A.locals && ButtonGroup.A.locals;
      __webpack_require__("./node_modules/next/dist/compiled/react/index.js");
      const ButtonGroup_ButtonGroup_ButtonGroup = ({
          direction,
          onClickSecondButton,
          typeIconSecondButton,
          contentSecondButton,
          variantSecondButton,
          disableSecondButton,
          disableFirstButton,
          onClickFirstButton,
          contentFirstButton,
          typeIconFirstButton,
          variantFirstButton,
          skeletonFirstButton,
          skeletonSecondButton,
        }) =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsxs)("div", {
              className: `button-group ${direction}`,
              children: [
                (0, jsx_runtime.jsx)(Button.A, {
                  size: "md",
                  disabled: disableFirstButton,
                  onClick: onClickFirstButton,
                  label: contentFirstButton,
                  typeIcon: typeIconFirstButton,
                  variant: variantFirstButton,
                  skeleton: skeletonFirstButton,
                }),
                (0, jsx_runtime.jsx)(Button.A, {
                  size: "md",
                  disabled: disableSecondButton,
                  onClick: onClickSecondButton,
                  label: contentSecondButton,
                  typeIcon: typeIconSecondButton,
                  variant: variantSecondButton,
                  skeleton: skeletonSecondButton,
                }),
              ],
            }),
          }),
        components_ButtonGroup_ButtonGroup =
          ButtonGroup_ButtonGroup_ButtonGroup;
      try {
        (ButtonGroup_ButtonGroup_ButtonGroup.displayName = "ButtonGroup"),
          (ButtonGroup_ButtonGroup_ButtonGroup.__docgenInfo = {
            description: "",
            displayName: "ButtonGroup",
            props: {
              disableFirstButton: {
                defaultValue: null,
                description: "",
                name: "disableFirstButton",
                required: !1,
                type: { name: "boolean" },
              },
              disableSecondButton: {
                defaultValue: null,
                description: "",
                name: "disableSecondButton",
                required: !1,
                type: { name: "boolean" },
              },
              direction: {
                defaultValue: null,
                description: "",
                name: "direction",
                required: !0,
                type: {
                  name: "enum",
                  value: [{ value: '"row"' }, { value: '"column"' }],
                },
              },
              variantFirstButton: {
                defaultValue: null,
                description: "",
                name: "variantFirstButton",
                required: !0,
                type: {
                  name: "enum",
                  value: [
                    { value: '"primary"' },
                    { value: '"secondary"' },
                    { value: '"success"' },
                    { value: '"warning"' },
                    { value: '"is-loading"' },
                  ],
                },
              },
              variantSecondButton: {
                defaultValue: null,
                description: "",
                name: "variantSecondButton",
                required: !0,
                type: {
                  name: "enum",
                  value: [
                    { value: '"primary"' },
                    { value: '"secondary"' },
                    { value: '"success"' },
                    { value: '"warning"' },
                    { value: '"is-loading"' },
                  ],
                },
              },
              contentFirstButton: {
                defaultValue: null,
                description: "",
                name: "contentFirstButton",
                required: !0,
                type: { name: "string" },
              },
              contentSecondButton: {
                defaultValue: null,
                description: "",
                name: "contentSecondButton",
                required: !0,
                type: { name: "string" },
              },
              typeIconFirstButton: {
                defaultValue: null,
                description: "",
                name: "typeIconFirstButton",
                required: !1,
                type: { name: "string" },
              },
              typeIconSecondButton: {
                defaultValue: null,
                description: "",
                name: "typeIconSecondButton",
                required: !1,
                type: { name: "string" },
              },
              onClickFirstButton: {
                defaultValue: null,
                description: "",
                name: "onClickFirstButton",
                required: !1,
                type: {
                  name: "((e: MouseEvent<Element, MouseEvent>) => void)",
                },
              },
              onClickSecondButton: {
                defaultValue: null,
                description: "",
                name: "onClickSecondButton",
                required: !1,
                type: {
                  name: "((e: MouseEvent<Element, MouseEvent>) => void)",
                },
              },
              skeletonFirstButton: {
                defaultValue: null,
                description: "",
                name: "skeletonFirstButton",
                required: !1,
                type: { name: "boolean" },
              },
              skeletonSecondButton: {
                defaultValue: null,
                description: "",
                name: "skeletonSecondButton",
                required: !1,
                type: { name: "boolean" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/ButtonGroup/ButtonGroup.tsx#ButtonGroup"
            ] = {
              docgenInfo: ButtonGroup_ButtonGroup_ButtonGroup.__docgenInfo,
              name: "ButtonGroup",
              path: "src/app/components/ButtonGroup/ButtonGroup.tsx#ButtonGroup",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/ButtonIcon/ButtonIcon.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_ButtonIcon_ButtonIcon,
      });
      var jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        react = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
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
        ButtonIcon = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/ButtonIcon/ButtonIcon.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(ButtonIcon.A, options);
      ButtonIcon.A && ButtonIcon.A.locals && ButtonIcon.A.locals;
      var Skeleton = __webpack_require__(
        "./src/app/components/Skeleton/Skeleton.tsx",
      );
      const ButtonIcon_ButtonIcon_ButtonIcon = ({
          size,
          buttonType,
          typeIcon,
          variant,
          disabled,
          skeleton,
          ...rest
        }) => {
          const buttonRef = (0, react.useRef)(null),
            [dimensions, setDimensions] = (0, react.useState)(null);
          return (
            (0, react.useEffect)(() => {
              if (buttonRef.current) {
                const { offsetHeight: height, offsetWidth: width } =
                  buttonRef.current;
                setDimensions({ height, width });
              }
            }, [size, variant]),
            (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
              children:
                skeleton && dimensions
                  ? (0, jsx_runtime.jsx)(Skeleton.A, {
                      height: `${dimensions.height}`,
                      width: `${dimensions.width}`,
                    })
                  : (0, jsx_runtime.jsx)("button", {
                      ...rest,
                      ref: buttonRef,
                      disabled,
                      className: `button-icon ${variant} ${size} ${buttonType}`,
                      children:
                        typeIcon &&
                        (0, jsx_runtime.jsx)(Icon.A, {
                          icon: typeIcon,
                          size: "default" === buttonType ? "md" : size,
                        }),
                    }),
            })
          );
        },
        components_ButtonIcon_ButtonIcon = ButtonIcon_ButtonIcon_ButtonIcon;
      try {
        (ButtonIcon_ButtonIcon_ButtonIcon.displayName = "ButtonIcon"),
          (ButtonIcon_ButtonIcon_ButtonIcon.__docgenInfo = {
            description: "",
            displayName: "ButtonIcon",
            props: {
              variant: {
                defaultValue: null,
                description: "",
                name: "variant",
                required: !0,
                type: {
                  name: "enum",
                  value: [
                    { value: '"primary"' },
                    { value: '"secondary"' },
                    { value: '"success"' },
                    { value: '"warning"' },
                    { value: '"on-color"' },
                  ],
                },
              },
              disabled: {
                defaultValue: null,
                description: "",
                name: "disabled",
                required: !1,
                type: { name: "boolean" },
              },
              buttonType: {
                defaultValue: null,
                description: "",
                name: "buttonType",
                required: !0,
                type: {
                  name: "enum",
                  value: [{ value: '"default"' }, { value: '"plain"' }],
                },
              },
              size: {
                defaultValue: null,
                description: "",
                name: "size",
                required: !0,
                type: {
                  name: "enum",
                  value: [{ value: '"sm"' }, { value: '"md"' }],
                },
              },
              typeIcon: {
                defaultValue: null,
                description: "",
                name: "typeIcon",
                required: !0,
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
              "src/app/components/ButtonIcon/ButtonIcon.tsx#ButtonIcon"
            ] = {
              docgenInfo: ButtonIcon_ButtonIcon_ButtonIcon.__docgenInfo,
              name: "ButtonIcon",
              path: "src/app/components/ButtonIcon/ButtonIcon.tsx#ButtonIcon",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/Modal/Modal.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        Tg: () => ContentModal,
        J9: () => FooterModal,
        Ay: () => components_Modal_Modal,
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
        Modal = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Modal/Modal.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Modal.A, options);
      Modal.A && Modal.A.locals && Modal.A.locals;
      var ButtonIcon = __webpack_require__(
        "./src/app/components/ButtonIcon/ButtonIcon.tsx",
      );
      __webpack_require__("./node_modules/next/dist/compiled/react/index.js");
      const Modal_Modal_Modal = ({
          title,
          description,
          content,
          hideModal,
          isOpen,
          footer,
          dismissible,
        }) => {
          const modalClass = isOpen ? "modal-root visible" : "modal-root",
            ghostClass = isOpen ? "modal-ghost visible" : "modal-ghost";
          return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              (0, jsx_runtime.jsxs)("div", {
                className: modalClass,
                children: [
                  (0, jsx_runtime.jsxs)("div", {
                    className: "modal-header",
                    children: [
                      (0, jsx_runtime.jsxs)("div", {
                        className: "modal-title",
                        children: [
                          (0, jsx_runtime.jsx)("div", { children: title }),
                          dismissible &&
                            (0, jsx_runtime.jsx)(ButtonIcon.A, {
                              variant: "primary",
                              size: "md",
                              typeIcon: "close",
                              buttonType: "plain",
                              onClick: hideModal,
                            }),
                        ],
                      }),
                      (0, jsx_runtime.jsx)("div", {
                        className: "modal-description",
                        children: description,
                      }),
                    ],
                  }),
                  content,
                  footer,
                ],
              }),
              (0, jsx_runtime.jsx)("div", {
                className: ghostClass,
                onClick: dismissible ? hideModal : void 0,
              }),
            ],
          });
        },
        ContentModal = ({ children }) =>
          (0, jsx_runtime.jsx)("div", { className: "modal-content", children }),
        FooterModal = ({ children }) =>
          (0, jsx_runtime.jsx)("div", { className: "modal-footer", children }),
        components_Modal_Modal = Modal_Modal_Modal;
      try {
        (ContentModal.displayName = "ContentModal"),
          (ContentModal.__docgenInfo = {
            description: "",
            displayName: "ContentModal",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Modal/Modal.tsx#ContentModal"
            ] = {
              docgenInfo: ContentModal.__docgenInfo,
              name: "ContentModal",
              path: "src/app/components/Modal/Modal.tsx#ContentModal",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (FooterModal.displayName = "FooterModal"),
          (FooterModal.__docgenInfo = {
            description: "",
            displayName: "FooterModal",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Modal/Modal.tsx#FooterModal"
            ] = {
              docgenInfo: FooterModal.__docgenInfo,
              name: "FooterModal",
              path: "src/app/components/Modal/Modal.tsx#FooterModal",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Modal_Modal_Modal.displayName = "Modal"),
          (Modal_Modal_Modal.__docgenInfo = {
            description: "",
            displayName: "Modal",
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
              content: {
                defaultValue: null,
                description: "",
                name: "content",
                required: !1,
                type: { name: "ReactNode" },
              },
              dismissible: {
                defaultValue: null,
                description: "",
                name: "dismissible",
                required: !1,
                type: { name: "boolean" },
              },
              hideModal: {
                defaultValue: null,
                description: "",
                name: "hideModal",
                required: !0,
                type: { name: "() => void" },
              },
              isOpen: {
                defaultValue: null,
                description: "",
                name: "isOpen",
                required: !0,
                type: { name: "boolean" },
              },
              footer: {
                defaultValue: null,
                description: "",
                name: "footer",
                required: !1,
                type: { name: "ReactNode" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Modal/Modal.tsx#Modal"
            ] = {
              docgenInfo: Modal_Modal_Modal.__docgenInfo,
              name: "Modal",
              path: "src/app/components/Modal/Modal.tsx#Modal",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/ButtonGroup/ButtonGroup.scss":
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
          ".button-group{display:flex;justify-content:space-between;width:100%}.button-group.row{display:flex;flex-direction:row;gap:var(--s-spacing-xx-small)}.button-group.column{display:flex;flex-direction:column;gap:var(--s-spacing-xx-small)}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/ButtonGroup/ButtonGroup.scss",
            ],
            names: [],
            mappings:
              "AAAA,cACE,YAAA,CACA,6BAAA,CACA,UAAA,CAEA,kBACE,YAAA,CACA,kBAAA,CACA,6BAAA,CAGF,qBACE,YAAA,CACA,qBAAA,CACA,6BAAA",
            sourcesContent: [
              ".button-group {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n\n  &.row {\n    display: flex;\n    flex-direction: row;\n    gap: var(--s-spacing-xx-small);\n  }\n\n  &.column {\n    display: flex;\n    flex-direction: column;\n    gap: var(--s-spacing-xx-small);\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/ButtonIcon/ButtonIcon.scss":
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
          ".button-icon{display:flex;align-items:center;justify-content:center;cursor:pointer}.button-icon:focus-visible{outline:var(--s-border-width-thin) solid var(--s-color-border-highlight);outline-offset:var(--s-border-width-thin)}.button-icon.plain{padding:4px;border-radius:var(--s-border-radius-medium);color:var(--s-color-content-default);background-color:rgba(0,0,0,0)}.button-icon.plain:hover{background-color:var(--s-color-fill-default-hover)}.button-icon.plain.on-color{background-color:rgba(0,0,0,0);color:var(--s-color-content-on-color);box-shadow:none}.button-icon.plain.on-color:hover{background-color:rgba(255,255,255,.16)}.button-icon.sm.default{padding:4px}.button-icon.md.default{padding:8px}.button-icon.default.primary{color:var(--s-color-content-on-color);background-color:var(--s-color-fill-highlight);border-radius:var(--s-border-radius-medium);box-shadow:0px -1px 0px 0px rgba(0,0,0,.2) inset,0px 0px 0px 1px var(--s-color-fill-highlight) inset,0px -1px 2px 0px rgba(0,0,0,.24) inset,0px 1px .5px .5px rgba(255,255,255,.44) inset,0px 1px 2px 0px rgba(14,21,36,.06)}.button-icon.default.primary:hover{background-color:var(--s-color-fill-highlight-hover)}.button-icon.default.secondary{color:var(--s-color-content-default);background-color:var(--s-color-fill-default);border:var(--s-border-width-hairline) var(--s-color-border-default) solid;border-radius:var(--s-border-radius-medium)}.button-icon.default.secondary:hover{background-color:var(--s-color-fill-default-hover);border:var(--s-border-width-hairline) var(--s-color-border-default-hover) solid}.button-icon.default.success{color:var(--s-color-content-on-color);background-color:var(--s-color-fill-success);border-radius:var(--s-border-radius-medium);box-shadow:0px -1px 0px 0px rgba(0,0,0,.2) inset,0px 0px 0px 1px var(--s-color-fill-success) inset,0px -1px 2px 0px rgba(0,0,0,.24) inset,0px 1px .5px .5px rgba(255,255,255,.44) inset,0px 1px 2px 0px rgba(14,21,36,.06)}.button-icon.default.success:hover{background-color:var(--s-color-fill-success-hover)}.button-icon.default.warning{color:var(--s-color-content-on-color);background-color:var(--s-color-fill-warning);border-radius:var(--s-border-radius-medium);box-shadow:0px -1px 0px 0px rgba(0,0,0,.2) inset,0px 0px 0px 1px var(--s-color-fill-warning) inset,0px -1px 2px 0px rgba(0,0,0,.24) inset,0px 1px .5px .5px rgba(255,255,255,.44) inset,0px 1px 2px 0px rgba(14,21,36,.06)}.button-icon.default.warning:hover{background-color:var(--s-color-fill-warning-hover)}.button-icon:disabled{cursor:auto;border-radius:var(--s-border-radius-medium);background-color:var(--s-color-fill-disable) !important;color:var(--s-color-content-disable) !important;box-shadow:none !important}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/ButtonIcon/ButtonIcon.scss",
            ],
            names: [],
            mappings:
              "AAAA,aACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,cAAA,CAEA,2BACE,wEAAA,CACA,yCAAA,CAGF,mBACE,WAAA,CACA,2CAAA,CACA,oCAAA,CACA,8BAAA,CAEA,yBACE,kDAAA,CAGF,4BACE,8BAAA,CACA,qCAAA,CACA,eAAA,CAEA,kCACE,sCAAA,CAMJ,wBACE,WAAA,CAKF,wBACE,WAAA,CAKF,6BACE,qCAAA,CACA,8CAAA,CACA,2CAAA,CACA,4NACE,CAMF,mCACE,oDAAA,CAIJ,+BACE,oCAAA,CACA,4CAAA,CACA,yEAAA,CACA,2CAAA,CAEA,qCACE,kDAAA,CACA,+EAAA,CAKJ,6BACE,qCAAA,CACA,4CAAA,CACA,2CAAA,CACA,0NACE,CAMF,mCACE,kDAAA,CAIJ,6BACE,qCAAA,CACA,4CAAA,CACA,2CAAA,CACA,0NACE,CAMF,mCACE,kDAAA,CAKN,sBACE,WAAA,CACA,2CAAA,CACA,uDAAA,CACA,+CAAA,CACA,0BAAA",
            sourcesContent: [
              ".button-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  &:focus-visible {\n    outline: var(--s-border-width-thin) solid var(--s-color-border-highlight);\n    outline-offset: var(--s-border-width-thin);\n  }\n\n  &.plain {\n    padding: 4px;\n    border-radius: var(--s-border-radius-medium);\n    color: var(--s-color-content-default);\n    background-color: transparent;\n\n    &:hover {\n      background-color: var(--s-color-fill-default-hover);\n    }\n\n    &.on-color {\n      background-color: transparent;\n      color: var(--s-color-content-on-color);\n      box-shadow: none;\n\n      &:hover {\n        background-color: rgba(white, 0.16);\n      }\n    }\n  }\n\n  &.sm {\n    &.default {\n      padding: 4px;\n    }\n  }\n\n  &.md {\n    &.default {\n      padding: 8px;\n    }\n  }\n\n  &.default {\n    &.primary {\n      color: var(--s-color-content-on-color);\n      background-color: var(--s-color-fill-highlight);\n      border-radius: var(--s-border-radius-medium);\n      box-shadow:\n        0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset,\n        0px 0px 0px 1px var(--s-color-fill-highlight) inset,\n        0px -1px 2px 0px rgba(0, 0, 0, 0.24) inset,\n        0px 1px 0.5px 0.5px rgba(255, 255, 255, 0.44) inset,\n        0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n\n      &:hover {\n        background-color: var(--s-color-fill-highlight-hover);\n      }\n    }\n\n    &.secondary {\n      color: var(--s-color-content-default);\n      background-color: var(--s-color-fill-default);\n      border: var(--s-border-width-hairline) var(--s-color-border-default) solid;\n      border-radius: var(--s-border-radius-medium);\n\n      &:hover {\n        background-color: var(--s-color-fill-default-hover);\n        border: var(--s-border-width-hairline)\n          var(--s-color-border-default-hover) solid;\n      }\n    }\n\n    &.success {\n      color: var(--s-color-content-on-color);\n      background-color: var(--s-color-fill-success);\n      border-radius: var(--s-border-radius-medium);\n      box-shadow:\n        0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset,\n        0px 0px 0px 1px var(--s-color-fill-success) inset,\n        0px -1px 2px 0px rgba(0, 0, 0, 0.24) inset,\n        0px 1px 0.5px 0.5px rgba(255, 255, 255, 0.44) inset,\n        0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n\n      &:hover {\n        background-color: var(--s-color-fill-success-hover);\n      }\n    }\n\n    &.warning {\n      color: var(--s-color-content-on-color);\n      background-color: var(--s-color-fill-warning);\n      border-radius: var(--s-border-radius-medium);\n      box-shadow:\n        0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset,\n        0px 0px 0px 1px var(--s-color-fill-warning) inset,\n        0px -1px 2px 0px rgba(0, 0, 0, 0.24) inset,\n        0px 1px 0.5px 0.5px rgba(255, 255, 255, 0.44) inset,\n        0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n\n      &:hover {\n        background-color: var(--s-color-fill-warning-hover);\n      }\n    }\n  }\n\n  &:disabled {\n    cursor: auto;\n    border-radius: var(--s-border-radius-medium);\n    background-color: var(--s-color-fill-disable) !important;\n    color: var(--s-color-content-disable) !important;\n    box-shadow: none !important;\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Modal/Modal.scss":
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
          ".modal-root{position:fixed;width:488px;border-radius:var(--s-border-radius-medium);left:50%;top:50%;transform:translate(-50%, -50%);background-color:var(--s-color-fill-default);z-index:99;opacity:0;visibility:hidden;transition:opacity .5s ease,visibility .5s ease}.modal-root.visible{box-shadow:var(--s-shadow-modal);opacity:1;visibility:visible}.modal-root .modal-header{display:flex;flex-direction:column;padding:var(--s-spacing-medium);gap:var(--s-spacing-nano)}.modal-root .modal-header .modal-title{display:flex;justify-content:space-between;align-items:center;font:var(--s-typography-heading-medium);color:var(--s-color-content-default)}.modal-root .modal-header .modal-description{font:var(--s-typography-paragraph-regular);color:var(--s-color-content-light);white-space:normal}.modal-root .modal-content{display:flex;flex-direction:column;gap:var(--s-spacing-small);padding:0 var(--s-spacing-medium) var(--s-spacing-medium) var(--s-spacing-medium)}.modal-root .modal-footer{background-color:var(--s-color-fill-default-light);border-top:1px solid var(--s-color-border-default);padding:var(--s-spacing-medium);border-radius:0 0 var(--s-border-radius-medium) var(--s-border-radius-medium)}.modal-ghost{width:100vw;height:100vh;z-index:98;position:fixed;top:0;left:0;background-color:var(--s-color-background-overlay);opacity:0;visibility:hidden;transition:opacity .5s ease,visibility .5s ease}.modal-ghost.visible{opacity:1;visibility:visible}@media screen and (max-width: 490px){.modal-root{position:fixed;width:88%}}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Modal/Modal.scss"],
            names: [],
            mappings:
              "AAAA,YACE,cAAA,CACA,WAAA,CACA,2CAAA,CACA,QAAA,CACA,OAAA,CACA,+BAAA,CACA,4CAAA,CACA,UAAA,CACA,SAAA,CACA,iBAAA,CACA,+CACE,CAGF,oBACE,gCAAA,CACA,SAAA,CACA,kBAAA,CAGF,0BACE,YAAA,CACA,qBAAA,CACA,+BAAA,CACA,yBAAA,CAEA,uCACE,YAAA,CACA,6BAAA,CACA,kBAAA,CAEA,uCAAA,CACA,oCAAA,CAGF,6CACE,0CAAA,CACA,kCAAA,CACA,kBAAA,CAIJ,2BACE,YAAA,CACA,qBAAA,CACA,0BAAA,CACA,iFAAA,CAIF,0BACE,kDAAA,CACA,kDAAA,CACA,+BAAA,CACA,6EAAA,CAKJ,aACE,WAAA,CACA,YAAA,CACA,UAAA,CACA,cAAA,CACA,KAAA,CACA,MAAA,CACA,kDAAA,CACA,SAAA,CACA,iBAAA,CACA,+CACE,CAGF,qBACE,SAAA,CACA,kBAAA,CAIJ,qCACE,YACE,cAAA,CACA,SAAA,CAAA",
            sourcesContent: [
              ".modal-root {\n  position: fixed;\n  width: 488px;\n  border-radius: var(--s-border-radius-medium);\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  background-color: var(--s-color-fill-default);\n  z-index: 99;\n  opacity: 0;\n  visibility: hidden;\n  transition:\n    opacity 0.5s ease,\n    visibility 0.5s ease;\n\n  &.visible {\n    box-shadow: var(--s-shadow-modal);\n    opacity: 1;\n    visibility: visible;\n  }\n\n  .modal-header {\n    display: flex;\n    flex-direction: column;\n    padding: var(--s-spacing-medium);\n    gap: var(--s-spacing-nano);\n\n    .modal-title {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n\n      font: var(--s-typography-heading-medium);\n      color: var(--s-color-content-default);\n    }\n\n    .modal-description {\n      font: var(--s-typography-paragraph-regular);\n      color: var(--s-color-content-light);\n      white-space: normal;\n    }\n  }\n\n  .modal-content {\n    display: flex;\n    flex-direction: column;\n    gap: var(--s-spacing-small);\n    padding: 0 var(--s-spacing-medium) var(--s-spacing-medium)\n      var(--s-spacing-medium);\n  }\n\n  .modal-footer {\n    background-color: var(--s-color-fill-default-light);\n    border-top: 1px solid var(--s-color-border-default);\n    padding: var(--s-spacing-medium);\n    border-radius: 0 0 var(--s-border-radius-medium)\n      var(--s-border-radius-medium);\n  }\n}\n\n.modal-ghost {\n  width: 100vw;\n  height: 100vh;\n  z-index: 98;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: var(--s-color-background-overlay);\n  opacity: 0;\n  visibility: hidden;\n  transition:\n    opacity 0.5s ease,\n    visibility 0.5s ease;\n\n  &.visible {\n    opacity: 1;\n    visibility: visible;\n  }\n}\n\n@media screen and (max-width: 490px) {\n  .modal-root {\n    position: fixed;\n    width: 88%;\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
