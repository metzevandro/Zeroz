"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [9165],
  {
    "./src/app/components/Aside/Aside.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        Ay: () => __WEBPACK_DEFAULT_EXPORT__,
        cD: () => AsideContent,
        iE: () => AsideFooter,
      });
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        _ButtonIcon_ButtonIcon__WEBPACK_IMPORTED_MODULE_2__ =
          (__webpack_require__(
            "./node_modules/next/dist/compiled/react/index.js",
          ),
          __webpack_require__(
            "./src/app/components/ButtonIcon/ButtonIcon.tsx",
          ));
      __webpack_require__("./src/app/components/Aside/Aside.scss");
      const Aside = (param) => {
          let { title, isOpen, description, toggleAside, footer, content } =
            param;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
            {
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                  className: "aside-overlay ".concat(
                    isOpen ? "open" : "hidden",
                  ),
                  onClick: toggleAside,
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                  className: "aside-root ".concat(isOpen ? "open" : ""),
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "aside",
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        "header",
                        {
                          className: "aside-header",
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              "div",
                              {
                                className: "aside-title",
                                children: [
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    "div",
                                    { children: title },
                                  ),
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _ButtonIcon_ButtonIcon__WEBPACK_IMPORTED_MODULE_2__.A,
                                    {
                                      type: "plain",
                                      variant: "primary",
                                      typeIcon: "close",
                                      size: "md",
                                      onClick: toggleAside,
                                    },
                                  ),
                                ],
                              },
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              "div",
                              {
                                className: "aside-description",
                                children: description,
                              },
                            ),
                          ],
                        },
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        "main",
                        { className: "aside-children", children: content },
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        "footer",
                        { className: "aside-footer", children: footer },
                      ),
                    ],
                  }),
                }),
              ],
            },
          );
        },
        __WEBPACK_DEFAULT_EXPORT__ = Aside,
        AsideContent = (param) => {
          let { children } = param;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            "div",
            { className: "aside-content", children },
          );
        },
        AsideFooter = (param) => {
          let { children } = param;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            "div",
            { children },
          );
        };
      try {
        (Aside.displayName = "Aside"),
          (Aside.__docgenInfo = {
            description: "",
            displayName: "Aside",
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
                required: !1,
                type: { name: "string" },
              },
              footer: {
                defaultValue: null,
                description: "",
                name: "footer",
                required: !1,
                type: { name: "ReactNode" },
              },
              content: {
                defaultValue: null,
                description: "",
                name: "content",
                required: !1,
                type: { name: "ReactNode" },
              },
              toggleAside: {
                defaultValue: null,
                description: "",
                name: "toggleAside",
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
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Aside/Aside.tsx#Aside"
            ] = {
              docgenInfo: Aside.__docgenInfo,
              name: "Aside",
              path: "src/app/components/Aside/Aside.tsx#Aside",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (AsideContent.displayName = "AsideContent"),
          (AsideContent.__docgenInfo = {
            description: "",
            displayName: "AsideContent",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Aside/Aside.tsx#AsideContent"
            ] = {
              docgenInfo: AsideContent.__docgenInfo,
              name: "AsideContent",
              path: "src/app/components/Aside/Aside.tsx#AsideContent",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (AsideFooter.displayName = "AsideFooter"),
          (AsideFooter.__docgenInfo = {
            description: "",
            displayName: "AsideFooter",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Aside/Aside.tsx#AsideFooter"
            ] = {
              docgenInfo: AsideFooter.__docgenInfo,
              name: "AsideFooter",
              path: "src/app/components/Aside/Aside.tsx#AsideFooter",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
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
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/ButtonGroup/ButtonGroup.scss",
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
      const ButtonGroup_ButtonGroup_ButtonGroup = (param) => {
          let {
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
          } = param;
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsxs)("div", {
              className: "button-group ".concat(direction),
              children: [
                (0, jsx_runtime.jsx)(Button.A, {
                  size: "md",
                  disabled: disableFirstButton,
                  onClick: onClickFirstButton,
                  label: contentFirstButton,
                  typeIcon: typeIconFirstButton,
                  variant: variantFirstButton,
                }),
                (0, jsx_runtime.jsx)(Button.A, {
                  size: "md",
                  disabled: disableSecondButton,
                  onClick: onClickSecondButton,
                  label: contentSecondButton,
                  typeIcon: typeIconSecondButton,
                  variant: variantSecondButton,
                }),
              ],
            }),
          });
        },
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
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/ButtonIcon/ButtonIcon.scss",
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
      const ButtonIcon_ButtonIcon_ButtonIcon = (param) => {
          let { size, type, typeIcon, variant, onClick, disable, skeleton } =
            param;
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
                      height: "".concat(dimensions.height),
                      width: "".concat(dimensions.width),
                    })
                  : (0, jsx_runtime.jsx)("button", {
                      ref: buttonRef,
                      disabled: disable,
                      onClick,
                      className: "button-icon "
                        .concat(variant, " ")
                        .concat(size, " ")
                        .concat(type),
                      children:
                        typeIcon &&
                        (0, jsx_runtime.jsx)(Icon.A, { icon: typeIcon, size }),
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
              disable: {
                defaultValue: null,
                description: "",
                name: "disable",
                required: !1,
                type: { name: "boolean" },
              },
              type: {
                defaultValue: null,
                description: "",
                name: "type",
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
              onClick: {
                defaultValue: null,
                description: "",
                name: "onClick",
                required: !1,
                type: {
                  name: "((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)",
                },
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
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Aside/Aside.scss":
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
          ".aside-overlay{height:100%;width:100vw;position:fixed;top:0;left:0;display:none;transition:.5s;overflow-x:hidden;z-index:98}.aside-overlay.open{display:flex;opacity:1;background-color:var(--s-color-background-overlay)}.aside-root{height:100%;width:100vw;position:fixed;display:flex;flex-direction:column;top:0;right:-100vw;background-color:var(--s-color-fill-default);transition:.5s;z-index:99}.aside-root.open{width:50%;right:0}.aside-root .aside{display:flex;flex-direction:column;justify-content:space-between;height:100%;background-color:var(--s-color-fill-default)}.aside-root .aside .aside-header{background-color:var(--s-color-fill-default);display:flex;flex-direction:column;padding:var(--s-spacing-medium);gap:var(--s-spacing-nano);border-bottom:1px solid var(--s-color-border-default)}.aside-root .aside .aside-header .aside-title{align-items:center;color:var(--s-color-content-default);font:var(--s-typography-heading-medium);display:flex;flex-direction:row;justify-content:space-between}.aside-root .aside .aside-header .aside-description{color:var(--s-color-content-light);font:var(--s-typography-paragraph-regular);word-break:break-all}.aside-root .aside .aside-children{flex-grow:1;max-height:100%;overflow:auto;display:flex;flex-direction:column;justify-content:space-between}.aside-root .aside .aside-children::-webkit-scrollbar{width:8px;border-radius:12px}.aside-root .aside .aside-children::-webkit-scrollbar-thumb{background:var(--s-color-fill-default-light);border-radius:12px}.aside-root .aside .aside-children .aside-content{display:flex;flex-direction:column;gap:var(--s-spacing-small);padding:var(--s-spacing-medium)}.aside-root .aside .aside-footer{padding:var(--s-spacing-medium);border-top:var(--s-border-width-hairline) solid var(--s-color-border-default)}@media screen and (max-width: 490px){.aside-root.open{width:96%;right:0}}.css-jspizm{overflow:hidden !important}.css-jspizm *{overflow:hidden !important}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Aside/Aside.scss"],
            names: [],
            mappings:
              "AAAA,eACE,WAAA,CACA,WAAA,CACA,cAAA,CACA,KAAA,CACA,MAAA,CACA,YAAA,CACA,cAAA,CACA,iBAAA,CACA,UAAA,CAEA,oBACE,YAAA,CACA,SAAA,CACA,kDAAA,CAIJ,YACE,WAAA,CACA,WAAA,CACA,cAAA,CACA,YAAA,CACA,qBAAA,CACA,KAAA,CACA,YAAA,CACA,4CAAA,CACA,cAAA,CACA,UAAA,CAEA,iBACE,SAAA,CACA,OAAA,CAGF,mBACE,YAAA,CACA,qBAAA,CACA,6BAAA,CACA,WAAA,CACA,4CAAA,CAEA,iCACE,4CAAA,CACA,YAAA,CACA,qBAAA,CACA,+BAAA,CACA,yBAAA,CACA,qDAAA,CAEA,8CACE,kBAAA,CACA,oCAAA,CACA,uCAAA,CACA,YAAA,CACA,kBAAA,CACA,6BAAA,CAGF,oDACE,kCAAA,CACA,0CAAA,CACA,oBAAA,CAGJ,mCACE,WAAA,CACA,eAAA,CACA,aAAA,CACA,YAAA,CACA,qBAAA,CACA,6BAAA,CAEA,sDACE,SAAA,CACA,kBAAA,CAGF,4DACE,4CAAA,CACA,kBAAA,CAEF,kDACE,YAAA,CACA,qBAAA,CACA,0BAAA,CACA,+BAAA,CAIJ,iCACE,+BAAA,CACA,6EAAA,CAKN,qCAEI,iBACE,SAAA,CACA,OAAA,CAAA,CAKN,YACE,0BAAA,CACA,cACE,0BAAA",
            sourcesContent: [
              ".aside-overlay {\n  height: 100%;\n  width: 100vw;\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: none;\n  transition: 0.5s;\n  overflow-x: hidden;\n  z-index: 98;\n\n  &.open {\n    display: flex;\n    opacity: 1;\n    background-color: var(--s-color-background-overlay);\n  }\n}\n\n.aside-root {\n  height: 100%;\n  width: 100vw;\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  top: 0;\n  right: -100vw;\n  background-color: var(--s-color-fill-default);\n  transition: 0.5s;\n  z-index: 99;\n\n  &.open {\n    width: 50%;\n    right: 0;\n  }\n\n  .aside {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100%;\n    background-color: var(--s-color-fill-default);\n\n    .aside-header {\n      background-color: var(--s-color-fill-default);\n      display: flex;\n      flex-direction: column;\n      padding: var(--s-spacing-medium);\n      gap: var(--s-spacing-nano);\n      border-bottom: 1px solid var(--s-color-border-default);\n\n      .aside-title {\n        align-items: center;\n        color: var(--s-color-content-default);\n        font: var(--s-typography-heading-medium);\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n      }\n\n      .aside-description {\n        color: var(--s-color-content-light);\n        font: var(--s-typography-paragraph-regular);\n        word-break: break-all;\n      }\n    }\n    .aside-children {\n      flex-grow: 1;\n      max-height: 100%;\n      overflow: auto;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n\n      &::-webkit-scrollbar {\n        width: 8px;\n        border-radius: 12px;\n      }\n\n      &::-webkit-scrollbar-thumb {\n        background: var(--s-color-fill-default-light);\n        border-radius: 12px;\n      }\n      .aside-content {\n        display: flex;\n        flex-direction: column;\n        gap: var(--s-spacing-small);\n        padding: var(--s-spacing-medium);\n      }\n    }\n\n    .aside-footer {\n      padding: var(--s-spacing-medium);\n      border-top: var(--s-border-width-hairline) solid var(--s-color-border-default);\n    }\n  }\n}\n\n@media screen and (max-width: 490px) {\n  .aside-root {\n    &.open {\n      width: 96%;\n      right: 0;\n    }\n  }\n}\n\n.css-jspizm {\n  overflow: hidden !important;\n  * {\n    overflow: hidden !important;\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/ButtonGroup/ButtonGroup.scss":
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
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/ButtonIcon/ButtonIcon.scss":
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
          ".button-icon{display:flex;align-items:center;border:none;padding:0;cursor:pointer;box-sizing:border-box}.button-icon.sm.plain{padding:4px;height:24px}.button-icon.md.plain{padding:4px;height:32px}.button-icon.plain{border-radius:var(--s-border-radius-small);color:var(--s-color-content-default);background-color:rgba(0,0,0,0)}.button-icon.plain:hover{background-color:var(--s-color-fill-default-hover)}.button-icon.plain.on-color{color:var(--s-color-content-on-color)}.button-icon.plain.on-color:hover{background-color:rgba(255,255,255,.16)}.button-icon.plain:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.button-icon.plain:disabled{cursor:auto}.button-icon.plain:disabled:hover{color:var(--s-color-content-default);background-color:rgba(0,0,0,0)}.button-icon.sm.default>*{padding:var(--s-spacing-nano)}.button-icon.md.default>*{padding:var(--s-spacing-xx-small);font-size:24px}.button-icon.default{border-radius:4px}.button-icon.default.md{height:40px;width:40px}.button-icon.default:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.button-icon.default.primary{background-color:var(--s-color-fill-highlight);color:var(--s-color-content-on-color)}.button-icon.default.primary:hover{background-color:var(--s-color-fill-highlight-hover)}.button-icon.default.primary:disabled{cursor:auto;background-color:var(--s-color-fill-disable);opacity:.64}.button-icon.default.secondary{border:var(--s-border-width-hairline) solid var(--s-color-border-default);background-color:var(--s-color-fill-default);color:var(--s-color-content-default)}.button-icon.default.secondary:hover{background-color:var(--s-color-fill-default-hover);border-color:var(--s-color-border-default-hover)}.button-icon.default.secondary:disabled{cursor:auto;background-color:var(--s-color-fill-disable);opacity:.64}.button-icon.default.success{background-color:var(--s-color-fill-success);color:var(--s-color-content-on-color)}.button-icon.default.success:hover{background-color:var(--s-color-fill-success-hover)}.button-icon.default.success:disabled{cursor:auto;background-color:var(--s-color-fill-disable);opacity:.64}.button-icon.default.warning{background-color:var(--s-color-fill-warning);color:var(--s-color-content-on-color)}.button-icon.default.warning:hover{background-color:var(--s-color-fill-warning-hover)}.button-icon.default.warning:disabled{cursor:auto;background-color:var(--s-color-fill-disable);opacity:.64}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/ButtonIcon/ButtonIcon.scss",
            ],
            names: [],
            mappings:
              "AAAA,aACE,YAAA,CACA,kBAAA,CACA,WAAA,CACA,SAAA,CACA,cAAA,CACA,qBAAA,CAEA,sBACE,WAAA,CACA,WAAA,CAGF,sBACE,WAAA,CACA,WAAA,CAGF,mBACE,0CAAA,CACA,oCAAA,CACA,8BAAA,CAEA,yBACE,kDAAA,CAGF,4BACE,qCAAA,CAEA,kCACE,sCAAA,CAIJ,iCACE,wCAAA,CACA,6CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,4BACE,WAAA,CACA,kCACE,oCAAA,CACA,8BAAA,CAKN,0BACE,6BAAA,CAGF,0BACE,iCAAA,CACA,cAAA,CAGF,qBACE,iBAAA,CAEA,wBACE,WAAA,CACA,UAAA,CAGF,mCACE,wCAAA,CACA,6CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,6BACE,8CAAA,CACA,qCAAA,CAEA,mCACE,oDAAA,CAGF,sCACE,WAAA,CACA,4CAAA,CACA,WAAA,CAIJ,+BACE,yEAAA,CACA,4CAAA,CACA,oCAAA,CAEA,qCACE,kDAAA,CACA,gDAAA,CAGF,wCACE,WAAA,CACA,4CAAA,CACA,WAAA,CAIJ,6BACE,4CAAA,CACA,qCAAA,CAEA,mCACE,kDAAA,CAGF,sCACE,WAAA,CACA,4CAAA,CACA,WAAA,CAIJ,6BACE,4CAAA,CACA,qCAAA,CAEA,mCACE,kDAAA,CAGF,sCACE,WAAA,CACA,4CAAA,CACA,WAAA",
            sourcesContent: [
              ".button-icon {\n  display: flex;\n  align-items: center;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  box-sizing: border-box;\n\n  &.sm.plain {\n    padding: 4px;\n    height: 24px;\n  }\n\n  &.md.plain {\n    padding: 4px;\n    height: 32px;\n  }\n\n  &.plain {\n    border-radius: var(--s-border-radius-small);\n    color: var(--s-color-content-default);\n    background-color: transparent;\n\n    &:hover {\n      background-color: var(--s-color-fill-default-hover);\n    }\n\n    &.on-color {\n      color: var(--s-color-content-on-color);\n\n      &:hover {\n        background-color: rgba(white, 0.16);\n      }\n    }\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-border-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    &:disabled {\n      cursor: auto;\n      &:hover {\n        color: var(--s-color-content-default);\n        background-color: transparent;\n      }\n    }\n  }\n\n  &.sm.default > * {\n    padding: var(--s-spacing-nano);\n  }\n\n  &.md.default > * {\n    padding: var(--s-spacing-xx-small);\n    font-size: 24px;\n  }\n\n  &.default {\n    border-radius: 4px;\n\n    &.md {\n      height: 40px;\n      width: 40px;\n    }\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-border-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    &.primary {\n      background-color: var(--s-color-fill-highlight);\n      color: var(--s-color-content-on-color);\n\n      &:hover {\n        background-color: var(--s-color-fill-highlight-hover);\n      }\n\n      &:disabled {\n        cursor: auto;\n        background-color: var(--s-color-fill-disable);\n        opacity: 0.64;\n      }\n    }\n\n    &.secondary {\n      border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n      background-color: var(--s-color-fill-default);\n      color: var(--s-color-content-default);\n\n      &:hover {\n        background-color: var(--s-color-fill-default-hover);\n        border-color: var(--s-color-border-default-hover);\n      }\n\n      &:disabled {\n        cursor: auto;\n        background-color: var(--s-color-fill-disable);\n        opacity: 0.64;\n      }\n    }\n\n    &.success {\n      background-color: var(--s-color-fill-success);\n      color: var(--s-color-content-on-color);\n\n      &:hover {\n        background-color: var(--s-color-fill-success-hover);\n      }\n\n      &:disabled {\n        cursor: auto;\n        background-color: var(--s-color-fill-disable);\n        opacity: 0.64;\n      }\n    }\n\n    &.warning {\n      background-color: var(--s-color-fill-warning);\n      color: var(--s-color-content-on-color);\n\n      &:hover {\n        background-color: var(--s-color-fill-warning-hover);\n      }\n\n      &:disabled {\n        cursor: auto;\n        background-color: var(--s-color-fill-disable);\n        opacity: 0.64;\n      }\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./src/app/components/Aside/Aside.scss": (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__,
    ) => {
      var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
          ),
        _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
          ),
        _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            "./node_modules/style-loader/dist/runtime/styleDomAPI.js",
          ),
        _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
          ),
        _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            "./node_modules/style-loader/dist/runtime/insertBySelector.js",
          ),
        _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
          ),
        _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js",
          ),
        _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
          ),
        _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            "./node_modules/style-loader/dist/runtime/insertStyleElement.js",
          ),
        _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
          ),
        _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            "./node_modules/style-loader/dist/runtime/styleTagTransform.js",
          ),
        _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
          ),
        _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_storybook_nextjs_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_Aside_scss__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Aside/Aside.scss",
          ),
        options = {};
      (options.styleTagTransform =
        _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default()),
        (options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default()),
        (options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            "head",
          )),
        (options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default()),
        (options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());
      _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
        _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_storybook_nextjs_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_Aside_scss__WEBPACK_IMPORTED_MODULE_6__.A,
        options,
      ),
        _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_storybook_nextjs_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_Aside_scss__WEBPACK_IMPORTED_MODULE_6__.A &&
          _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_storybook_nextjs_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_Aside_scss__WEBPACK_IMPORTED_MODULE_6__
            .A.locals &&
          _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_storybook_nextjs_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_Aside_scss__WEBPACK_IMPORTED_MODULE_6__
            .A.locals;
    },
  },
]);
