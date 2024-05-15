"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [209],
  {
    "./src/app/components/Modal/Modal.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Dismissible: () => Dismissible,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Default_parameters,
        _Default_parameters_docs,
        _Default_parameters1,
        _Dismissible_parameters,
        _Dismissible_parameters_docs,
        _Dismissible_parameters1,
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./src/app/components/Modal/Modal.tsx",
        ),
        _Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./src/app/components/Button/Button.tsx",
        ),
        react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        ),
        _Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./src/app/components/Icon/Icon.tsx",
        ),
        _ButtonGroup_ButtonGroup__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            "./src/app/components/ButtonGroup/ButtonGroup.tsx",
          );
      __webpack_require__("./src/app/styles.scss");
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Components/Modal",
          component: _Modal__WEBPACK_IMPORTED_MODULE_1__.Ay,
          argTypes: {},
          parameters: { layout: "centered" },
        },
        Template = (args) => {
          const [isOpen, setIsOpen] = (0,
            react__WEBPACK_IMPORTED_MODULE_3__.useState)(!1),
            toggleModal = () => {
              setIsOpen(!isOpen);
            };
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
            {
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                  style: { width: "min-content" },
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _Button_Button__WEBPACK_IMPORTED_MODULE_2__.A,
                    {
                      size: "md",
                      variant: "primary",
                      label: "Click here!",
                      onClick: toggleModal,
                    },
                  ),
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _Modal__WEBPACK_IMPORTED_MODULE_1__.Ay,
                  {
                    dismissible: args.dismissible,
                    description: args.description,
                    hideModal: toggleModal,
                    title: args.title,
                    isOpen,
                    content: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _Modal__WEBPACK_IMPORTED_MODULE_1__.Tg,
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          "div",
                          {
                            className: "slot",
                            children: [
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _Icon_Icon__WEBPACK_IMPORTED_MODULE_4__.A,
                                { icon: "refresh", size: "md" },
                              ),
                              "Slot Content",
                            ],
                          },
                        ),
                      },
                    ),
                    footer: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _Modal__WEBPACK_IMPORTED_MODULE_1__.J9,
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          "div",
                          {
                            style: { width: "min-content" },
                            children: (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _ButtonGroup_ButtonGroup__WEBPACK_IMPORTED_MODULE_5__.A,
                              {
                                direction: "row",
                                variantFirstButton: "primary",
                                variantSecondButton: "secondary",
                                contentFirstButton: "Button",
                                contentSecondButton: "Button",
                              },
                            ),
                          },
                        ),
                      },
                    ),
                  },
                ),
              ],
            },
          );
        },
        Default = Template.bind({});
      Default.args = {
        title: "Title",
        description: "Description",
        dismissible: !1,
      };
      const Dismissible = Template.bind({});
      (Dismissible.args = {
        title: "Title",
        description: "Description",
        dismissible: !0,
      }),
        (Default.parameters = {
          ...Default.parameters,
          docs: {
            ...(null === (_Default_parameters = Default.parameters) ||
            void 0 === _Default_parameters
              ? void 0
              : _Default_parameters.docs),
            source: {
              originalSource:
                'args => {\n  const [isOpen, setIsOpen] = useState(false);\n  const toggleModal = () => {\n    setIsOpen(!isOpen);\n  };\n  return <>\r\n      <div style={{\n      width: "min-content"\n    }}>\r\n        <Button size="md" variant="primary" label="Click here!" onClick={toggleModal} />\r\n      </div>\r\n\r\n      <Modal dismissible={args.dismissible} description={args.description} hideModal={toggleModal} title={args.title} isOpen={isOpen} content={<ContentModal>\r\n            <div className="slot">\r\n              <Icon icon="refresh" size="md" />\r\n              Slot Content\r\n            </div>\r\n          </ContentModal>} footer={<FooterModal>\r\n            <div style={{\n        width: "min-content"\n      }}>\r\n              <ButtonGroup direction="row" variantFirstButton="primary" variantSecondButton="secondary" contentFirstButton="Button" contentSecondButton="Button" />\r\n            </div>\r\n          </FooterModal>} />\r\n    </>;\n}',
              ...(null === (_Default_parameters1 = Default.parameters) ||
              void 0 === _Default_parameters1 ||
              null === (_Default_parameters_docs = _Default_parameters1.docs) ||
              void 0 === _Default_parameters_docs
                ? void 0
                : _Default_parameters_docs.source),
            },
          },
        }),
        (Dismissible.parameters = {
          ...Dismissible.parameters,
          docs: {
            ...(null === (_Dismissible_parameters = Dismissible.parameters) ||
            void 0 === _Dismissible_parameters
              ? void 0
              : _Dismissible_parameters.docs),
            source: {
              originalSource:
                'args => {\n  const [isOpen, setIsOpen] = useState(false);\n  const toggleModal = () => {\n    setIsOpen(!isOpen);\n  };\n  return <>\r\n      <div style={{\n      width: "min-content"\n    }}>\r\n        <Button size="md" variant="primary" label="Click here!" onClick={toggleModal} />\r\n      </div>\r\n\r\n      <Modal dismissible={args.dismissible} description={args.description} hideModal={toggleModal} title={args.title} isOpen={isOpen} content={<ContentModal>\r\n            <div className="slot">\r\n              <Icon icon="refresh" size="md" />\r\n              Slot Content\r\n            </div>\r\n          </ContentModal>} footer={<FooterModal>\r\n            <div style={{\n        width: "min-content"\n      }}>\r\n              <ButtonGroup direction="row" variantFirstButton="primary" variantSecondButton="secondary" contentFirstButton="Button" contentSecondButton="Button" />\r\n            </div>\r\n          </FooterModal>} />\r\n    </>;\n}',
              ...(null ===
                (_Dismissible_parameters1 = Dismissible.parameters) ||
              void 0 === _Dismissible_parameters1 ||
              null ===
                (_Dismissible_parameters_docs =
                  _Dismissible_parameters1.docs) ||
              void 0 === _Dismissible_parameters_docs
                ? void 0
                : _Dismissible_parameters_docs.source),
            },
          },
        });
      const __namedExportsOrder = ["Default", "Dismissible"];
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
        Icon =
          (__webpack_require__(
            "./node_modules/next/dist/compiled/react/index.js",
          ),
          __webpack_require__("./src/app/components/Icon/Icon.tsx")),
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
      const ButtonIcon_ButtonIcon_ButtonIcon = (param) => {
          let { size, type, typeIcon, variant, onClick, disable } = param;
          return (0, jsx_runtime.jsx)("button", {
            disabled: disable,
            onClick,
            className: "button-icon "
              .concat(variant, " ")
              .concat(size, " ")
              .concat(type),
            children:
              typeIcon &&
              (0, jsx_runtime.jsx)(Icon.A, { icon: typeIcon, size }),
          });
        },
        components_ButtonIcon_ButtonIcon = ButtonIcon_ButtonIcon_ButtonIcon;
      ButtonIcon_ButtonIcon_ButtonIcon.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "ButtonIcon",
        props: {
          variant: {
            required: !0,
            tsType: {
              name: "union",
              raw: '"primary" | "secondary" | "success" | "warning" | "on-color"',
              elements: [
                { name: "literal", value: '"primary"' },
                { name: "literal", value: '"secondary"' },
                { name: "literal", value: '"success"' },
                { name: "literal", value: '"warning"' },
                { name: "literal", value: '"on-color"' },
              ],
            },
            description: "",
          },
          disable: {
            required: !1,
            tsType: { name: "boolean" },
            description: "",
          },
          type: {
            required: !0,
            tsType: {
              name: "union",
              raw: '"plain" | "default"',
              elements: [
                { name: "literal", value: '"plain"' },
                { name: "literal", value: '"default"' },
              ],
            },
            description: "",
          },
          size: {
            required: !0,
            tsType: {
              name: "union",
              raw: '"sm" | "md"',
              elements: [
                { name: "literal", value: '"sm"' },
                { name: "literal", value: '"md"' },
              ],
            },
            description: "",
          },
          typeIcon: {
            required: !0,
            tsType: { name: "string" },
            description: "",
          },
          onClick: {
            required: !1,
            tsType: {
              name: "signature",
              type: "function",
              raw: "(event: React.MouseEvent<HTMLButtonElement>) => void",
              signature: {
                arguments: [
                  {
                    type: {
                      name: "ReactMouseEvent",
                      raw: "React.MouseEvent<HTMLButtonElement>",
                      elements: [{ name: "HTMLButtonElement" }],
                    },
                    name: "event",
                  },
                ],
                return: { name: "void" },
              },
            },
            description: "",
          },
        },
      };
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
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Modal/Modal.scss",
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
      const Modal_Modal_Modal = (param) => {
          let {
            title,
            description,
            content,
            hideModal,
            isOpen,
            footer,
            dismissible,
          } = param;
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
                              type: "plain",
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
        ContentModal = (param) => {
          let { children } = param;
          return (0, jsx_runtime.jsx)("div", {
            className: "modal-content",
            children,
          });
        },
        FooterModal = (param) => {
          let { children } = param;
          return (0, jsx_runtime.jsx)("div", {
            className: "modal-footer",
            children,
          });
        },
        components_Modal_Modal = Modal_Modal_Modal;
      (ContentModal.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "ContentModal",
        props: {
          children: {
            required: !0,
            tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
            description: "",
          },
        },
      }),
        (FooterModal.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "FooterModal",
          props: {
            children: {
              required: !0,
              tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
              description: "",
            },
          },
        }),
        (Modal_Modal_Modal.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Modal",
          props: {
            title: {
              required: !0,
              tsType: { name: "string" },
              description: "",
            },
            description: {
              required: !0,
              tsType: { name: "string" },
              description: "",
            },
            content: {
              required: !1,
              tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
              description: "",
            },
            dismissible: {
              required: !1,
              tsType: { name: "boolean" },
              description: "",
            },
            hideModal: {
              required: !0,
              tsType: {
                name: "signature",
                type: "function",
                raw: "() => void",
                signature: { arguments: [], return: { name: "void" } },
              },
              description: "",
            },
            isOpen: {
              required: !0,
              tsType: { name: "boolean" },
              description: "",
            },
            footer: {
              required: !1,
              tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
              description: "",
            },
          },
        });
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
          ".button-icon{display:flex;align-items:center;border:none;padding:0;cursor:pointer;box-sizing:border-box}.button-icon.sm.plain{padding:4px;height:24px}.button-icon.md.plain{padding:4px;height:32px}.button-icon.plain{border-radius:var(--s-border-radius-small);color:var(--s-color-content-default);background-color:rgba(0,0,0,0)}.button-icon.plain:hover{background-color:var(--s-color-fill-default-hover)}.button-icon.plain.on-color{color:var(--s-color-content-on-color)}.button-icon.plain.on-color:hover{background-color:rgba(255,255,255,.16)}.button-icon.plain:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.button-icon.plain:disabled{cursor:auto}.button-icon.plain:disabled:hover{color:var(--s-color-content-default);background-color:rgba(0,0,0,0)}.button-icon.sm.default>*{padding:var(--s-spacing-nano)}.button-icon.md.default>*{padding:var(--s-spacing-xx-small);font-size:24px}.button-icon.default{border-radius:4px;width:min-content;height:min-content}.button-icon.default:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.button-icon.default.primary{background-color:var(--s-color-fill-highlight);color:var(--s-color-content-on-color)}.button-icon.default.primary:hover{background-color:var(--s-color-fill-highlight-hover)}.button-icon.default.primary:disabled{cursor:auto;background-color:var(--s-color-fill-disable);opacity:.64}.button-icon.default.secondary{border:var(--s-border-width-hairline) solid var(--s-color-border-default);background-color:var(--s-color-fill-default);color:var(--s-color-content-default)}.button-icon.default.secondary:hover{background-color:var(--s-color-fill-default-hover)}.button-icon.default.secondary:disabled{cursor:auto;background-color:var(--s-color-fill-disable);opacity:.64}.button-icon.default.success{background-color:var(--s-color-fill-success);color:var(--s-color-content-on-color)}.button-icon.default.success:hover{background-color:var(--s-color-fill-success-hover)}.button-icon.default.success:disabled{cursor:auto;background-color:var(--s-color-fill-disable);opacity:.64}.button-icon.default.warning{background-color:var(--s-color-fill-warning);color:var(--s-color-content-on-color)}.button-icon.default.warning:hover{background-color:var(--s-color-fill-warning-hover)}.button-icon.default.warning:disabled{cursor:auto;background-color:var(--s-color-fill-disable);opacity:.64}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/ButtonIcon/ButtonIcon.scss",
            ],
            names: [],
            mappings:
              "AAAA,aACE,YAAA,CACA,kBAAA,CACA,WAAA,CACA,SAAA,CACA,cAAA,CACA,qBAAA,CAEA,sBACE,WAAA,CACA,WAAA,CAGF,sBACE,WAAA,CACA,WAAA,CAGF,mBACE,0CAAA,CACA,oCAAA,CACA,8BAAA,CAEA,yBACE,kDAAA,CAGF,4BACE,qCAAA,CAEA,kCACE,sCAAA,CAIJ,iCACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,4BACE,WAAA,CACA,kCACE,oCAAA,CACA,8BAAA,CAKN,0BACE,6BAAA,CAGF,0BACE,iCAAA,CACA,cAAA,CAGF,qBACE,iBAAA,CACA,iBAAA,CACA,kBAAA,CAEA,mCACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,6BACE,8CAAA,CACA,qCAAA,CAEA,mCACE,oDAAA,CAGF,sCACE,WAAA,CACA,4CAAA,CACA,WAAA,CAIJ,+BACE,yEAAA,CACA,4CAAA,CACA,oCAAA,CAEA,qCACE,kDAAA,CAGF,wCACE,WAAA,CACA,4CAAA,CACA,WAAA,CAIJ,6BACE,4CAAA,CACA,qCAAA,CAEA,mCACE,kDAAA,CAGF,sCACE,WAAA,CACA,4CAAA,CACA,WAAA,CAIJ,6BACE,4CAAA,CACA,qCAAA,CAEA,mCACE,kDAAA,CAGF,sCACE,WAAA,CACA,4CAAA,CACA,WAAA",
            sourcesContent: [
              ".button-icon {\n  display: flex;\n  align-items: center;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  box-sizing: border-box;\n\n  &.sm.plain {\n    padding: 4px;\n    height: 24px;\n  }\n\n  &.md.plain {\n    padding: 4px;\n    height: 32px;\n  }\n\n  &.plain {\n    border-radius: var(--s-border-radius-small);\n    color: var(--s-color-content-default);\n    background-color: transparent;\n\n    &:hover {\n      background-color: var(--s-color-fill-default-hover);\n    }\n\n    &.on-color {\n      color: var(--s-color-content-on-color);\n\n      &:hover {\n        background-color: rgba(white, 0.16);\n      }\n    }\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    &:disabled {\n      cursor: auto;\n      &:hover {\n        color: var(--s-color-content-default);\n        background-color: transparent;\n      }\n    }\n  }\n\n  &.sm.default > * {\n    padding: var(--s-spacing-nano);\n  }\n\n  &.md.default > * {\n    padding: var(--s-spacing-xx-small);\n    font-size: 24px;\n  }\n\n  &.default {\n    border-radius: 4px;\n    width: min-content;\n    height: min-content;\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    &.primary {\n      background-color: var(--s-color-fill-highlight);\n      color: var(--s-color-content-on-color);\n\n      &:hover {\n        background-color: var(--s-color-fill-highlight-hover);\n      }\n\n      &:disabled {\n        cursor: auto;\n        background-color: var(--s-color-fill-disable);\n        opacity: 0.64;\n      }\n    }\n\n    &.secondary {\n      border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n      background-color: var(--s-color-fill-default);\n      color: var(--s-color-content-default);\n\n      &:hover {\n        background-color: var(--s-color-fill-default-hover);\n      }\n\n      &:disabled {\n        cursor: auto;\n        background-color: var(--s-color-fill-disable);\n        opacity: 0.64;\n      }\n    }\n\n    &.success {\n      background-color: var(--s-color-fill-success);\n      color: var(--s-color-content-on-color);\n\n      &:hover {\n        background-color: var(--s-color-fill-success-hover);\n      }\n\n      &:disabled {\n        cursor: auto;\n        background-color: var(--s-color-fill-disable);\n        opacity: 0.64;\n      }\n    }\n\n    &.warning {\n      background-color: var(--s-color-fill-warning);\n      color: var(--s-color-content-on-color);\n\n      &:hover {\n        background-color: var(--s-color-fill-warning-hover);\n      }\n\n      &:disabled {\n        cursor: auto;\n        background-color: var(--s-color-fill-disable);\n        opacity: 0.64;\n      }\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Modal/Modal.scss":
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
          ".modal-root{position:fixed;width:488px;border-radius:var(--s-border-radius-small);left:50%;top:50%;transform:translate(-50%, -50%);background-color:var(--s-color-fill-default);z-index:99;opacity:0;visibility:hidden;transition:opacity .5s ease,visibility .5s ease}.modal-root.visible{opacity:1;visibility:visible}.modal-root .modal-header{display:flex;flex-direction:column;padding:var(--s-spacing-medium);gap:var(--s-spacing-nano)}.modal-root .modal-header .modal-title{display:flex;justify-content:space-between;align-items:center;font:var(--s-typography-heading-medium);color:var(--s-color-content-default)}.modal-root .modal-header .modal-description{font:var(--s-typography-paragraph-regular);color:var(--s-color-content-light);word-break:break-all}.modal-root .modal-content{display:flex;flex-direction:column;gap:var(--s-spacing-small);padding:0 var(--s-spacing-medium) var(--s-spacing-medium) var(--s-spacing-medium)}.modal-root .modal-footer{padding:0 var(--s-spacing-medium) var(--s-spacing-medium) var(--s-spacing-medium)}.modal-ghost{width:100vw;height:100vh;z-index:98;position:fixed;top:0;left:0;background-color:var(--s-color-background-overlay);opacity:0;visibility:hidden;transition:opacity .5s ease,visibility .5s ease}.modal-ghost.visible{opacity:1;visibility:visible}@media screen and (max-width: 490px){.modal-root{position:fixed;width:88%}}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Modal/Modal.scss"],
            names: [],
            mappings:
              "AAAA,YACE,cAAA,CACA,WAAA,CACA,0CAAA,CACA,QAAA,CACA,OAAA,CACA,+BAAA,CACA,4CAAA,CACA,UAAA,CACA,SAAA,CACA,iBAAA,CACA,+CACE,CAGF,oBACE,SAAA,CACA,kBAAA,CAGF,0BACE,YAAA,CACA,qBAAA,CACA,+BAAA,CACA,yBAAA,CAEA,uCACE,YAAA,CACA,6BAAA,CACA,kBAAA,CAEA,uCAAA,CACA,oCAAA,CAGF,6CACE,0CAAA,CACA,kCAAA,CACA,oBAAA,CAIJ,2BACE,YAAA,CACA,qBAAA,CACA,0BAAA,CACA,iFAAA,CAIF,0BACE,iFAAA,CAKJ,aACE,WAAA,CACA,YAAA,CACA,UAAA,CACA,cAAA,CACA,KAAA,CACA,MAAA,CACA,kDAAA,CACA,SAAA,CACA,iBAAA,CACA,+CACE,CAGF,qBACE,SAAA,CACA,kBAAA,CAIJ,qCACE,YACE,cAAA,CACA,SAAA,CAAA",
            sourcesContent: [
              ".modal-root {\n  position: fixed;\n  width: 488px;\n  border-radius: var(--s-border-radius-small);\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  background-color: var(--s-color-fill-default);\n  z-index: 99;\n  opacity: 0;\n  visibility: hidden;\n  transition:\n    opacity 0.5s ease,\n    visibility 0.5s ease;\n\n  &.visible {\n    opacity: 1;\n    visibility: visible;\n  }\n\n  .modal-header {\n    display: flex;\n    flex-direction: column;\n    padding: var(--s-spacing-medium);\n    gap: var(--s-spacing-nano);\n\n    .modal-title {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n\n      font: var(--s-typography-heading-medium);\n      color: var(--s-color-content-default);\n    }\n\n    .modal-description {\n      font: var(--s-typography-paragraph-regular);\n      color: var(--s-color-content-light);\n      word-break: break-all;\n    }\n  }\n\n  .modal-content {\n    display: flex;\n    flex-direction: column;\n    gap: var(--s-spacing-small);\n    padding: 0 var(--s-spacing-medium) var(--s-spacing-medium)\n      var(--s-spacing-medium);\n  }\n\n  .modal-footer {\n    padding: 0 var(--s-spacing-medium) var(--s-spacing-medium)\n      var(--s-spacing-medium);\n  }\n}\n\n.modal-ghost {\n  width: 100vw;\n  height: 100vh;\n  z-index: 98;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: var(--s-color-background-overlay);\n  opacity: 0;\n  visibility: hidden;\n  transition:\n    opacity 0.5s ease,\n    visibility 0.5s ease;\n\n  &.visible {\n    opacity: 1;\n    visibility: visible;\n  }\n}\n\n@media screen and (max-width: 490px) {\n  .modal-root {\n    position: fixed;\n    width: 88%;\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
