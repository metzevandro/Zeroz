"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [5763],
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
    "./src/app/components/Card/Card.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          WithImage: () => WithImage,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Card_stories,
        });
      var jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        injectStylesIntoStyleTag =
          (__webpack_require__("./src/app/styles.scss"),
          __webpack_require__(
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
        Card = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Card/Card.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Card.A, options);
      Card.A && Card.A.locals && Card.A.locals;
      function Card_Card_Card(props) {
        return (0, jsx_runtime.jsxs)("div", {
          className: "card-root",
          children: [
            (0, jsx_runtime.jsx)("div", { children: props.image }),
            (0, jsx_runtime.jsx)("div", { children: props.header }),
            (0, jsx_runtime.jsx)("div", { children: props.content }),
            (0, jsx_runtime.jsx)("div", { children: props.footer }),
          ],
        });
      }
      function CardImage(props) {
        return (0, jsx_runtime.jsx)("div", {
          className: "card-image",
          children: props.children,
        });
      }
      function CardHeader(props) {
        return (0, jsx_runtime.jsxs)("div", {
          className: "card-header",
          children: [
            (0, jsx_runtime.jsx)("h1", { children: props.title }),
            (0, jsx_runtime.jsx)("p", { children: props.description }),
          ],
        });
      }
      function CardContent(props) {
        return (0, jsx_runtime.jsx)("div", {
          className: "card-content",
          children: props.children,
        });
      }
      function CardFooter(props) {
        return (0, jsx_runtime.jsx)("div", {
          className: "card-footer",
          children: props.children,
        });
      }
      try {
        (Card_Card_Card.displayName = "Card"),
          (Card_Card_Card.__docgenInfo = {
            description: "",
            displayName: "Card",
            props: {
              content: {
                defaultValue: null,
                description: "",
                name: "content",
                required: !0,
                type: { name: "ReactNode" },
              },
              footer: {
                defaultValue: null,
                description: "",
                name: "footer",
                required: !1,
                type: { name: "ReactNode" },
              },
              image: {
                defaultValue: null,
                description: "",
                name: "image",
                required: !1,
                type: { name: "ReactNode" },
              },
              header: {
                defaultValue: null,
                description: "",
                name: "header",
                required: !1,
                type: { name: "ReactNode" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/app/components/Card/Card.tsx#Card"] =
              {
                docgenInfo: Card_Card_Card.__docgenInfo,
                name: "Card",
                path: "src/app/components/Card/Card.tsx#Card",
              });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (CardImage.displayName = "CardImage"),
          (CardImage.__docgenInfo = {
            description: "",
            displayName: "CardImage",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Card/Card.tsx#CardImage"
            ] = {
              docgenInfo: CardImage.__docgenInfo,
              name: "CardImage",
              path: "src/app/components/Card/Card.tsx#CardImage",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (CardHeader.displayName = "CardHeader"),
          (CardHeader.__docgenInfo = {
            description: "",
            displayName: "CardHeader",
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
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Card/Card.tsx#CardHeader"
            ] = {
              docgenInfo: CardHeader.__docgenInfo,
              name: "CardHeader",
              path: "src/app/components/Card/Card.tsx#CardHeader",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (CardContent.displayName = "CardContent"),
          (CardContent.__docgenInfo = {
            description: "",
            displayName: "CardContent",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Card/Card.tsx#CardContent"
            ] = {
              docgenInfo: CardContent.__docgenInfo,
              name: "CardContent",
              path: "src/app/components/Card/Card.tsx#CardContent",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (CardFooter.displayName = "CardFooter"),
          (CardFooter.__docgenInfo = {
            description: "",
            displayName: "CardFooter",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Card/Card.tsx#CardFooter"
            ] = {
              docgenInfo: CardFooter.__docgenInfo,
              name: "CardFooter",
              path: "src/app/components/Card/Card.tsx#CardFooter",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Icon = __webpack_require__("./src/app/components/Icon/Icon.tsx"),
        ButtonGroup = __webpack_require__(
          "./src/app/components/ButtonGroup/ButtonGroup.tsx",
        ),
        dist = __webpack_require__(
          "./node_modules/@storybook/blocks/dist/index.mjs",
        );
      const Card_stories = {
          title: "Components/Card",
          component: Card_Card_Card,
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
                        (0, jsx_runtime.jsx)("strong", { children: "Cards" }),
                        " are used to group similar content and tasks. They help you read and do things.",
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
            image: {
              description:
                "The image section of the card, accepts a React node.",
              control: { type: "object" },
              table: { category: "Content" },
            },
            header: {
              description:
                "The header section of the card, accepts a React node.",
              control: { type: "object" },
              table: { category: "Content" },
            },
            title: {
              description: "The title to be displayed in the card header.",
              control: { type: "text" },
              defaultValue: "Title",
              table: { category: "Content" },
            },
            description: {
              description:
                "The description to be displayed in the card header.",
              control: { type: "text" },
              defaultValue: "Description",
              table: { category: "Content" },
            },
            content: {
              description:
                "The content section of the card, accepts a React node.",
              control: { type: "object" },
              table: { category: "Content" },
            },
            footer: {
              description:
                "The footer section of the card, accepts a React node.",
              control: { type: "object" },
              table: { category: "Content" },
            },
          },
        },
        Default = ((args) => {
          var _args_header, _args_content, _args_footer;
          return (0, jsx_runtime.jsx)("div", {
            style: { width: "320px" },
            children: (0, jsx_runtime.jsx)(Card_Card_Card, {
              header:
                null !== (_args_header = args.header) && void 0 !== _args_header
                  ? _args_header
                  : (0, jsx_runtime.jsx)(CardHeader, {
                      title: args.title,
                      description: args.description,
                    }),
              content:
                null !== (_args_content = args.content) &&
                void 0 !== _args_content
                  ? _args_content
                  : (0, jsx_runtime.jsx)(CardContent, {
                      children: (0, jsx_runtime.jsxs)("div", {
                        className: "slot",
                        children: [
                          (0, jsx_runtime.jsx)(Icon.A, {
                            icon: "refresh",
                            size: "md",
                          }),
                          "Slot Content",
                        ],
                      }),
                    }),
              footer:
                null !== (_args_footer = args.footer) && void 0 !== _args_footer
                  ? _args_footer
                  : (0, jsx_runtime.jsx)(CardFooter, {
                      children: (0, jsx_runtime.jsx)("div", {
                        style: { width: "min-content" },
                        children: (0, jsx_runtime.jsx)(ButtonGroup.A, {
                          direction: "row",
                          variantFirstButton: "primary",
                          variantSecondButton: "secondary",
                          contentFirstButton: "Button",
                          contentSecondButton: "Button",
                        }),
                      }),
                    }),
            }),
          });
        }).bind({});
      Default.args = { title: "Title", description: "Description" };
      const WithImage = ((args) => {
        var _args_image, _args_header, _args_content, _args_footer;
        return (0, jsx_runtime.jsx)("div", {
          style: { width: "320px" },
          children: (0, jsx_runtime.jsx)(Card_Card_Card, {
            image:
              null !== (_args_image = args.image) && void 0 !== _args_image
                ? _args_image
                : (0, jsx_runtime.jsx)(CardImage, {
                    children: (0, jsx_runtime.jsx)("img", {
                      src: "https://picsum.photos/1200",
                      alt: "Card Image",
                      height: 200,
                    }),
                  }),
            header:
              null !== (_args_header = args.header) && void 0 !== _args_header
                ? _args_header
                : (0, jsx_runtime.jsx)(CardHeader, {
                    title: args.title,
                    description: args.description,
                  }),
            content:
              null !== (_args_content = args.content) &&
              void 0 !== _args_content
                ? _args_content
                : (0, jsx_runtime.jsx)(CardContent, {
                    children: (0, jsx_runtime.jsxs)("div", {
                      className: "slot",
                      children: [
                        (0, jsx_runtime.jsx)(Icon.A, {
                          icon: "refresh",
                          size: "md",
                        }),
                        "Slot Content",
                      ],
                    }),
                  }),
            footer:
              null !== (_args_footer = args.footer) && void 0 !== _args_footer
                ? _args_footer
                : (0, jsx_runtime.jsx)(CardFooter, {
                    children: (0, jsx_runtime.jsx)("div", {
                      style: { width: "min-content" },
                      children: (0, jsx_runtime.jsx)(ButtonGroup.A, {
                        direction: "row",
                        variantFirstButton: "primary",
                        variantSecondButton: "secondary",
                        contentFirstButton: "Button",
                        contentSecondButton: "Button",
                      }),
                    }),
                  }),
          }),
        });
      }).bind({});
      WithImage.args = { title: "Title", description: "Description" };
      const __namedExportsOrder = ["Default", "WithImage"];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              'args => {\n  return <div style={{\n    width: "320px"\n  }}>\r\n      <Card header={args.header ?? <CardHeader title={args.title} description={args.description} />} content={args.content ?? <CardContent>\r\n              <div className="slot">\r\n                <Icon icon="refresh" size="md" />\r\n                Slot Content\r\n              </div>\r\n            </CardContent>} footer={args.footer ?? <CardFooter>\r\n              <div style={{\n        width: "min-content"\n      }}>\r\n                <ButtonGroup direction="row" variantFirstButton="primary" variantSecondButton="secondary" contentFirstButton="Button" contentSecondButton="Button" />\r\n              </div>\r\n            </CardFooter>} />\r\n    </div>;\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (WithImage.parameters = {
          ...WithImage.parameters,
          docs: {
            ...WithImage.parameters?.docs,
            source: {
              originalSource:
                'args => {\n  return <div style={{\n    width: "320px"\n  }}>\r\n      <Card image={args.image ?? <CardImage>\r\n              <img src="https://picsum.photos/1200" alt="Card Image" height={200} />\r\n            </CardImage>} header={args.header ?? <CardHeader title={args.title} description={args.description} />} content={args.content ?? <CardContent>\r\n              <div className="slot">\r\n                <Icon icon="refresh" size="md" />\r\n                Slot Content\r\n              </div>\r\n            </CardContent>} footer={args.footer ?? <CardFooter>\r\n              <div style={{\n        width: "min-content"\n      }}>\r\n                <ButtonGroup direction="row" variantFirstButton="primary" variantSecondButton="secondary" contentFirstButton="Button" contentSecondButton="Button" />\r\n              </div>\r\n            </CardFooter>} />\r\n    </div>;\n}',
              ...WithImage.parameters?.docs?.source,
            },
          },
        });
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
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Card/Card.scss":
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
          ".card-root{display:flex;flex-direction:column;width:100%;border:var(--s-border-width-hairline) solid var(--s-color-border-default);border-radius:var(--s-border-radius-medium);gap:var(--s-spacing-nano);background-color:var(--s-color-fill-default);box-shadow:var(--s-shadow-card)}.card-root .card-image img{width:100%;max-height:288px;object-fit:cover;border-top-left-radius:7px;border-top-right-radius:7px}.card-root .card-header{display:flex;flex-direction:column;padding:var(--s-spacing-medium)}.card-root .card-header h1{font:var(--s-typography-heading-small);color:var(--s-color-content-default)}.card-root .card-header p{font:var(--s-typography-paragraph-regular);color:var(--s-color-content-light)}.card-root .card-content{display:flex;flex-direction:column;padding:0 var(--s-spacing-medium) var(--s-spacing-medium) var(--s-spacing-medium);gap:var(--s-spacing-small)}.card-root .card-footer{background-color:var(--s-color-fill-default-light);border-top:var(--s-border-width-hairline) solid var(--s-color-border-default);padding:var(--s-spacing-medium);border-bottom-left-radius:calc(var(--s-border-radius-medium) - 2px);border-bottom-right-radius:calc(var(--s-border-radius-medium) - 2px)}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Card/Card.scss"],
            names: [],
            mappings:
              "AAAA,WACE,YAAA,CACA,qBAAA,CACA,UAAA,CACA,yEAAA,CACA,2CAAA,CACA,yBAAA,CACA,4CAAA,CACA,+BAAA,CAEA,2BACE,UAAA,CACA,gBAAA,CACA,gBAAA,CACA,0BAAA,CACA,2BAAA,CAGF,wBACE,YAAA,CACA,qBAAA,CACA,+BAAA,CACA,2BACE,sCAAA,CACA,oCAAA,CAEF,0BACE,0CAAA,CACA,kCAAA,CAIJ,yBACE,YAAA,CACA,qBAAA,CACA,iFAAA,CAEA,0BAAA,CAGF,wBACE,kDAAA,CACA,6EAAA,CAEA,+BAAA,CACA,mEAAA,CACA,oEAAA",
            sourcesContent: [
              ".card-root {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n  border-radius: var(--s-border-radius-medium);\n  gap: var(--s-spacing-nano);\n  background-color: var(--s-color-fill-default);\n  box-shadow: var(--s-shadow-card);\n\n  .card-image img {\n    width: 100%;\n    max-height: 288px;\n    object-fit: cover;\n    border-top-left-radius: 7px;\n    border-top-right-radius: 7px;\n  }\n\n  .card-header {\n    display: flex;\n    flex-direction: column;\n    padding: var(--s-spacing-medium);\n    h1 {\n      font: var(--s-typography-heading-small);\n      color: var(--s-color-content-default);\n    }\n    p {\n      font: var(--s-typography-paragraph-regular);\n      color: var(--s-color-content-light);\n    }\n  }\n\n  .card-content {\n    display: flex;\n    flex-direction: column;\n    padding: 0 var(--s-spacing-medium) var(--s-spacing-medium)\n      var(--s-spacing-medium);\n    gap: var(--s-spacing-small);\n  }\n\n  .card-footer {\n    background-color: var(--s-color-fill-default-light);\n    border-top: var(--s-border-width-hairline) solid\n      var(--s-color-border-default);\n    padding: var(--s-spacing-medium);\n    border-bottom-left-radius: calc(var(--s-border-radius-medium) - 2px);\n    border-bottom-right-radius: calc(var(--s-border-radius-medium) - 2px);\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
