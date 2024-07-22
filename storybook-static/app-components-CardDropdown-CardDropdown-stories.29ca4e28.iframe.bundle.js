"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [2757],
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
    "./src/app/components/CardDropdown/CardDropdown.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => CardDropdown_stories,
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
        CardDropdown = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/CardDropdown/CardDropdown.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(CardDropdown.A, options);
      CardDropdown.A && CardDropdown.A.locals && CardDropdown.A.locals;
      var react = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        ),
        Icon = __webpack_require__("./src/app/components/Icon/Icon.tsx");
      const CardDropdown_CardDropdown_CardDropdown = ({
          title,
          content,
          footer,
          description,
        }) => {
          const [isOpen, setIsOpen] = (0, react.useState)(!1);
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsxs)("div", {
              className: "card-dropdown",
              children: [
                (0, jsx_runtime.jsxs)("div", {
                  className: "card-dropdown-header",
                  onClick: () => {
                    setIsOpen(!isOpen);
                  },
                  children: [
                    (0, jsx_runtime.jsxs)("div", {
                      className: "card-dropdown-title",
                      children: [
                        (0, jsx_runtime.jsx)("div", { children: title }),
                        (0, jsx_runtime.jsx)("div", {
                          className:
                            "card-dropdown-button " +
                            (isOpen ? "open" : "close"),
                          children: (0, jsx_runtime.jsx)(Icon.A, {
                            size: "md",
                            icon: "keyboard_arrow_down",
                          }),
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsx)("div", {
                      children:
                        description &&
                        (0, jsx_runtime.jsx)("p", { children: description }),
                    }),
                  ],
                }),
                content &&
                  (0, jsx_runtime.jsx)("div", {
                    className:
                      "card-dropdown-content " + (isOpen ? "open" : "close"),
                    children: content,
                  }),
                footer &&
                  (0, jsx_runtime.jsx)("div", {
                    className:
                      "card-dropdown-footer " + (isOpen ? "open" : "close"),
                    children: footer,
                  }),
              ],
            }),
          });
        },
        components_CardDropdown_CardDropdown =
          CardDropdown_CardDropdown_CardDropdown;
      try {
        (CardDropdown_CardDropdown_CardDropdown.displayName = "CardDropdown"),
          (CardDropdown_CardDropdown_CardDropdown.__docgenInfo = {
            description: "",
            displayName: "CardDropdown",
            props: {
              title: {
                defaultValue: null,
                description: "",
                name: "title",
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
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/CardDropdown/CardDropdown.tsx#CardDropdown"
            ] = {
              docgenInfo: CardDropdown_CardDropdown_CardDropdown.__docgenInfo,
              name: "CardDropdown",
              path: "src/app/components/CardDropdown/CardDropdown.tsx#CardDropdown",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var ButtonGroup = __webpack_require__(
          "./src/app/components/ButtonGroup/ButtonGroup.tsx",
        ),
        dist =
          (__webpack_require__("./src/app/styles.scss"),
          __webpack_require__(
            "./node_modules/@storybook/blocks/dist/index.mjs",
          ));
      const CardDropdown_stories = {
          title: "Components/Card Dropdown",
          component: components_CardDropdown_CardDropdown,
          parameters: {
            layout: "padded",
            docs: {
              page: () =>
                (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                  children: [
                    (0, jsx_runtime.jsx)(dist.hE, {}),
                    (0, jsx_runtime.jsx)(dist.Pd, { children: "Component" }),
                    (0, jsx_runtime.jsxs)("p", {
                      children: [
                        "A ",
                        (0, jsx_runtime.jsx)("strong", {
                          children: "Card Dropdown",
                        }),
                        " is employed when you want to use a card, but the content is too extensive, allowing it to show and hide as necessary.",
                      ],
                    }),
                    (0, jsx_runtime.jsx)(dist.Tn, {}),
                    (0, jsx_runtime.jsx)(dist.H2, {}),
                    (0, jsx_runtime.jsx)(dist.om, {}),
                  ],
                }),
            },
          },
          args: {
            title: "Card dropdown title",
            description: "Card dropdown description",
          },
          argTypes: {
            title: {
              description: "The title to be displayed in the card dropdown.",
              control: { type: "text" },
              defaultValue: "Card dropdown title",
              table: { category: "Content" },
            },
            description: {
              description:
                "The description to be displayed in the card dropdown.",
              control: { type: "text" },
              defaultValue: "Card dropdown description",
              table: { category: "Content" },
            },
            content: {
              description:
                "The content section of the card dropdown, accepts a React node.",
              control: { type: "object" },
              table: { category: "Content" },
            },
            footer: {
              description:
                "The footer section of the card dropdown, accepts a React node.",
              control: { type: "object" },
              table: { category: "Content" },
            },
          },
        },
        Default = {
          render: (args) => {
            var _args_content, _args_footer;
            return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
              children: (0, jsx_runtime.jsx)(
                components_CardDropdown_CardDropdown,
                {
                  title: args.title,
                  description: args.description,
                  content:
                    null !== (_args_content = args.content) &&
                    void 0 !== _args_content
                      ? _args_content
                      : (0, jsx_runtime.jsxs)("div", {
                          className: "slot",
                          children: [
                            (0, jsx_runtime.jsx)(Icon.A, {
                              icon: "refresh",
                              size: "md",
                            }),
                            "Slot Content",
                          ],
                        }),
                  footer:
                    null !== (_args_footer = args.footer) &&
                    void 0 !== _args_footer
                      ? _args_footer
                      : (0, jsx_runtime.jsx)("div", {
                          style: { display: "flex", width: "min-content" },
                          children: (0, jsx_runtime.jsx)(ButtonGroup.A, {
                            variantFirstButton: "primary",
                            variantSecondButton: "secondary",
                            direction: "row",
                            contentFirstButton: "Button",
                            contentSecondButton: "Button",
                          }),
                        }),
                },
              ),
            });
          },
        },
        __namedExportsOrder = ["Default"];
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: args => <>\r\n      <CardDropdown title={args.title} description={args.description} content={args.content ?? <div className="slot">\r\n              <Icon icon="refresh" size="md" />\r\n              Slot Content\r\n            </div>} footer={args.footer ?? <div style={{\n      display: "flex",\n      width: "min-content"\n    }}>\r\n              <ButtonGroup variantFirstButton="primary" variantSecondButton="secondary" direction="row" contentFirstButton="Button" contentSecondButton="Button" />\r\n            </div>}></CardDropdown>\r\n    </>\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      };
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
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/CardDropdown/CardDropdown.scss":
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
          ".card-dropdown{box-sizing:border-box;display:flex;flex-direction:column;border-radius:var(--s-border-radius-small);border:var(--s-border-width-hairline) solid var(--s-color-border-default);background-color:var(--s-color-fill-default);box-shadow:var(--s-shadow-card)}.card-dropdown:hover{border-color:var(--s-color-border-default-hover)}.card-dropdown .card-dropdown-header{cursor:pointer;padding:var(--s-spacing-medium);display:flex;flex-direction:column;gap:var(--s-spacing-nano)}.card-dropdown .card-dropdown-header p{font:var(--s-typography-paragraph-regular);color:var(--s-color-content-light);word-break:break-all}.card-dropdown .card-dropdown-header .card-dropdown-title{font:var(--s-typography-heading-small);color:var(--s-color-content-default);display:flex;justify-content:space-between;align-items:center}.card-dropdown .card-dropdown-header .card-dropdown-button{height:min-content}.card-dropdown .card-dropdown-header .card-dropdown-button{display:flex}.card-dropdown .card-dropdown-header .card-dropdown-button.open{transform:rotate(-180deg);transition:transform .3s linear}.card-dropdown .card-dropdown-header .card-dropdown-button.close{transform:rotate(0deg);transition:transform .3s linear}.card-dropdown .card-dropdown-content{transition:padding .3s ease-out,opacity .3s ease-out;overflow:hidden;font:var(--s-typography-paragraph-regular);color:var(--s-color-content-light);margin-left:var(--s-spacing-medium);margin-right:var(--s-spacing-medium)}.card-dropdown .card-dropdown-content.close{height:0;padding:0;opacity:0}.card-dropdown .card-dropdown-content.open{opacity:1;padding-bottom:var(--s-spacing-medium)}.card-dropdown .card-dropdown-footer{background-color:var(--s-color-fill-default-light);border-top:var(--s-border-width-hairline) solid var(--s-color-border-default);padding:var(--s-spacing-medium);transition:visible .3s ease-out,opacity .3s ease-out;overflow:hidden;font:var(--s-typography-paragraph-regular);color:var(--s-color-content-light);border-bottom-left-radius:calc(var(--s-border-radius-small) - 1px);border-bottom-right-radius:calc(var(--s-border-radius-small) - 1px)}.card-dropdown .card-dropdown-footer.close{height:0;opacity:0;visibility:hidden;padding:0}.card-dropdown .card-dropdown-footer.open{opacity:1;visibility:visible;padding-bottom:var(--s-spacing-medium)}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/CardDropdown/CardDropdown.scss",
            ],
            names: [],
            mappings:
              "AAAA,eACE,qBAAA,CACA,YAAA,CACA,qBAAA,CACA,0CAAA,CACA,yEAAA,CACA,4CAAA,CACA,+BAAA,CAEA,qBACE,gDAAA,CAGF,qCACE,cAAA,CACA,+BAAA,CACA,YAAA,CACA,qBAAA,CACA,yBAAA,CAEA,uCACE,0CAAA,CACA,kCAAA,CACA,oBAAA,CAGF,0DACE,sCAAA,CACA,oCAAA,CACA,YAAA,CACA,6BAAA,CACA,kBAAA,CAGF,2DACE,kBAAA,CAGF,2DACE,YAAA,CAEA,gEACE,yBAAA,CACA,+BAAA,CAGF,iEACE,sBAAA,CACA,+BAAA,CAIN,sCACE,oDACE,CAEF,eAAA,CACA,0CAAA,CACA,kCAAA,CACA,mCAAA,CACA,oCAAA,CAEA,4CACE,QAAA,CACA,SAAA,CACA,SAAA,CAGF,2CACE,SAAA,CACA,sCAAA,CAIJ,qCACE,kDAAA,CACA,6EAAA,CAEA,+BAAA,CACA,oDACE,CAEF,eAAA,CACA,0CAAA,CACA,kCAAA,CACA,kEAAA,CACA,mEAAA,CAEA,2CACE,QAAA,CACA,SAAA,CACA,iBAAA,CACA,SAAA,CAGF,0CACE,SAAA,CACA,kBAAA,CACA,sCAAA",
            sourcesContent: [
              ".card-dropdown {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  border-radius: var(--s-border-radius-small);\n  border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n  background-color: var(--s-color-fill-default);\n  box-shadow: var(--s-shadow-card);\n\n  &:hover {\n    border-color: var(--s-color-border-default-hover);\n  }\n\n  .card-dropdown-header {\n    cursor: pointer;\n    padding: var(--s-spacing-medium);\n    display: flex;\n    flex-direction: column;\n    gap: var(--s-spacing-nano);\n\n    & p {\n      font: var(--s-typography-paragraph-regular);\n      color: var(--s-color-content-light);\n      word-break: break-all;\n    }\n\n    .card-dropdown-title {\n      font: var(--s-typography-heading-small);\n      color: var(--s-color-content-default);\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n    }\n\n    .card-dropdown-button {\n      height: min-content;\n    }\n\n    .card-dropdown-button {\n      display: flex;\n\n      &.open {\n        transform: rotate(-180deg);\n        transition: transform 0.3s linear;\n      }\n\n      &.close {\n        transform: rotate(0deg);\n        transition: transform 0.3s linear;\n      }\n    }\n  }\n  .card-dropdown-content {\n    transition:\n      padding 0.3s ease-out,\n      opacity 0.3s ease-out;\n    overflow: hidden;\n    font: var(--s-typography-paragraph-regular);\n    color: var(--s-color-content-light);\n    margin-left: var(--s-spacing-medium);\n    margin-right: var(--s-spacing-medium);\n\n    &.close {\n      height: 0;\n      padding: 0;\n      opacity: 0;\n    }\n\n    &.open {\n      opacity: 1;\n      padding-bottom: var(--s-spacing-medium);\n    }\n  }\n\n  .card-dropdown-footer {\n    background-color: var(--s-color-fill-default-light);\n    border-top: var(--s-border-width-hairline) solid\n      var(--s-color-border-default);\n    padding: var(--s-spacing-medium);\n    transition:\n      visible 0.3s ease-out,\n      opacity 0.3s ease-out;\n    overflow: hidden;\n    font: var(--s-typography-paragraph-regular);\n    color: var(--s-color-content-light);\n    border-bottom-left-radius: calc(var(--s-border-radius-small) - 1px);\n    border-bottom-right-radius: calc(var(--s-border-radius-small) - 1px);\n\n    &.close {\n      height: 0;\n      opacity: 0;\n      visibility: hidden;\n      padding: 0;\n    }\n\n    &.open {\n      opacity: 1;\n      visibility: visible;\n      padding-bottom: var(--s-spacing-medium);\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
