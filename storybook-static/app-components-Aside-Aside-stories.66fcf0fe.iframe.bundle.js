"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [3821],
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
    "./src/app/components/Aside/Aside.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Aside_stories,
        });
      var jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        react = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        ),
        ButtonIcon = __webpack_require__(
          "./src/app/components/ButtonIcon/ButtonIcon.tsx",
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
        Aside = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Aside/Aside.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Aside.A, options);
      Aside.A && Aside.A.locals && Aside.A.locals;
      const Aside_Aside_Aside = ({
          title,
          isOpen,
          description,
          toggleAside,
          footer,
          content,
        }) =>
          (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              (0, jsx_runtime.jsx)("div", {
                className: "aside-overlay " + (isOpen ? "open" : "hidden"),
                onClick: toggleAside,
              }),
              (0, jsx_runtime.jsx)("div", {
                className: "aside-root " + (isOpen ? "open" : ""),
                children: (0, jsx_runtime.jsxs)("div", {
                  className: "aside",
                  children: [
                    (0, jsx_runtime.jsxs)("header", {
                      className: "aside-header",
                      children: [
                        (0, jsx_runtime.jsxs)("div", {
                          className: "aside-title",
                          children: [
                            (0, jsx_runtime.jsx)("div", { children: title }),
                            (0, jsx_runtime.jsx)(ButtonIcon.A, {
                              buttonType: "plain",
                              variant: "primary",
                              typeIcon: "close",
                              size: "md",
                              onClick: toggleAside,
                            }),
                          ],
                        }),
                        (0, jsx_runtime.jsx)("div", {
                          className: "aside-description",
                          children: description,
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsx)("main", {
                      className: "aside-children",
                      children: content,
                    }),
                    (0, jsx_runtime.jsx)("footer", {
                      className: "aside-footer",
                      children: footer,
                    }),
                  ],
                }),
              }),
            ],
          }),
        components_Aside_Aside = Aside_Aside_Aside,
        AsideContent = ({ children }) =>
          (0, jsx_runtime.jsx)("div", { className: "aside-content", children }),
        AsideFooter = ({ children }) =>
          (0, jsx_runtime.jsx)("div", { children });
      try {
        (Aside_Aside_Aside.displayName = "Aside"),
          (Aside_Aside_Aside.__docgenInfo = {
            description: "",
            displayName: "Aside",
            props: {
              isOpen: {
                defaultValue: null,
                description: "",
                name: "isOpen",
                required: !0,
                type: { name: "boolean" },
              },
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
              content: {
                defaultValue: null,
                description: "",
                name: "content",
                required: !1,
                type: { name: "ReactNode" },
              },
              footer: {
                defaultValue: null,
                description: "",
                name: "footer",
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
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Aside/Aside.tsx#Aside"
            ] = {
              docgenInfo: Aside_Aside_Aside.__docgenInfo,
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
      var Icon = __webpack_require__("./src/app/components/Icon/Icon.tsx"),
        ButtonGroup = __webpack_require__(
          "./src/app/components/ButtonGroup/ButtonGroup.tsx",
        ),
        Button = __webpack_require__("./src/app/components/Button/Button.tsx"),
        dist =
          (__webpack_require__("./src/app/styles.scss"),
          __webpack_require__(
            "./node_modules/@storybook/blocks/dist/index.mjs",
          ));
      const Aside_stories = {
          title: "Components/Aside",
          component: components_Aside_Aside,
          parameters: {
            layout: "fullscreen",
            docs: {
              page: () =>
                (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                  children: [
                    (0, jsx_runtime.jsx)(dist.hE, {}),
                    (0, jsx_runtime.jsx)(dist.Pd, { children: "Component" }),
                    (0, jsx_runtime.jsxs)("p", {
                      children: [
                        "The ",
                        (0, jsx_runtime.jsx)("strong", { children: "Aside" }),
                        " is an overlay component designed to display settings or additional content that complements the main information on the screen.",
                      ],
                    }),
                    (0, jsx_runtime.jsx)(dist.Tn, {}),
                    (0, jsx_runtime.jsx)(dist.H2, {}),
                    (0, jsx_runtime.jsx)(dist.om, {}),
                  ],
                }),
            },
          },
          tags: ["autodocs"],
          argTypes: {
            buttonLabel: {
              name: "Button Label",
              description:
                "The label of the button that opens/closes the Aside component.",
              control: "text",
              table: { category: "Data", type: { summary: "string" } },
            },
            isOpen: {
              name: "Is Open",
              description:
                "Indicates whether the Aside component is open or closed.",
              control: "boolean",
              table: { category: "State", type: { summary: "boolean" } },
            },
            toggleAside: {
              name: "Toggle Aside",
              description: "Action to open and close the aside component.",
              action: "toggled",
              table: {
                category: "Events",
                type: {
                  summary:
                    "(event: React.MouseEvent<HTMLButtonElement>) => void",
                },
              },
            },
            title: {
              name: "Title",
              description: "The title displayed in the Aside component.",
              control: "text",
              table: { category: "Data", type: { summary: "string" } },
            },
            description: {
              name: "Description",
              description: "The description displayed in the Aside component.",
              control: "text",
              table: { category: "Data", type: { summary: "string" } },
            },
            content: {
              name: "Content",
              description: "Content of the aside component.",
              table: {
                category: "Content",
                type: { summary: "React.ReactNode" },
              },
            },
            footer: {
              name: "Footer",
              description: "Footer of the aside component.",
              table: {
                category: "Content",
                type: { summary: "React.ReactNode" },
              },
            },
          },
        },
        Default = ((args) => {
          const [isOpenAside, setIsOpenAside] = (0, react.useState)(
              args.isOpen,
            ),
            toggleAside = () => {
              setIsOpenAside(!isOpenAside);
            };
          return (0, jsx_runtime.jsxs)("div", {
            style: { height: "500px", padding: "var(--s-spacing-medium)" },
            children: [
              (0, jsx_runtime.jsx)("div", {
                style: { width: "min-content" },
                children: (0, jsx_runtime.jsx)(Button.A, {
                  size: "md",
                  variant: "primary",
                  label: args.buttonLabel,
                  onClick: toggleAside,
                }),
              }),
              (0, jsx_runtime.jsx)(components_Aside_Aside, {
                isOpen: isOpenAside || args.isOpen,
                toggleAside,
                title: args.title,
                description: args.description,
                content: (0, jsx_runtime.jsx)(AsideContent, {
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
                footer: (0, jsx_runtime.jsx)(AsideFooter, {
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
            ],
          });
        }).bind({});
      Default.args = {
        title: "Title aside here!",
        description: "Aside description",
        isOpen: !1,
        buttonLabel: "Click here!",
      };
      const __namedExportsOrder = ["Default"];
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '(args: Args) => {\n  const [isOpenAside, setIsOpenAside] = useState(args.isOpen);\n  const toggleAside = () => {\n    setIsOpenAside(!isOpenAside);\n  };\n  return <div style={{\n    height: "500px",\n    padding: "var(--s-spacing-medium)"\n  }}>\r\n      <div style={{\n      width: "min-content"\n    }}>\r\n        <Button size="md" variant="primary" label={args.buttonLabel} onClick={toggleAside} />\r\n      </div>\r\n      <Aside isOpen={isOpenAside || args.isOpen} toggleAside={toggleAside} title={args.title} description={args.description} content={<AsideContent>\r\n            <div className="slot">\r\n              <Icon icon="refresh" size="md" />\r\n              Slot Content\r\n            </div>\r\n          </AsideContent>} footer={<AsideFooter>\r\n            <div style={{\n        width: "min-content"\n      }}>\r\n              <ButtonGroup direction="row" variantFirstButton="primary" variantSecondButton="secondary" contentFirstButton="Button" contentSecondButton="Button" />\r\n            </div>\r\n          </AsideFooter>} />\r\n    </div>;\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      };
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Aside/Aside.scss":
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
          ".aside-overlay{height:100%;width:100vw;position:fixed;top:0;left:0;display:none;transition:.5s;overflow-x:hidden;z-index:98}.aside-overlay.open{display:flex;opacity:1;background-color:var(--s-color-background-overlay)}.aside-root{height:100%;width:100vw;position:fixed;display:flex;flex-direction:column;top:0;right:-100vw;background-color:var(--s-color-fill-default);transition:.5s;z-index:99}.aside-root.open{width:50%;right:0}.aside-root .aside{display:flex;flex-direction:column;justify-content:space-between;height:100%;background-color:var(--s-color-fill-default)}.aside-root .aside .aside-header{background-color:var(--s-color-fill-default);display:flex;flex-direction:column;padding:var(--s-spacing-medium);gap:var(--s-spacing-nano);border-bottom:1px solid var(--s-color-border-default)}.aside-root .aside .aside-header .aside-title{align-items:center;color:var(--s-color-content-default);font:var(--s-typography-heading-medium);display:flex;flex-direction:row;justify-content:space-between}.aside-root .aside .aside-header .aside-description{color:var(--s-color-content-light);font:var(--s-typography-paragraph-regular);word-break:break-all}.aside-root .aside .aside-children{flex-grow:1;max-height:100%;overflow:auto;display:flex;flex-direction:column;justify-content:space-between}.aside-root .aside .aside-children::-webkit-scrollbar{width:8px;border-radius:12px}.aside-root .aside .aside-children::-webkit-scrollbar-thumb{background:var(--s-color-fill-default-light);border-radius:12px}.aside-root .aside .aside-children .aside-content{display:flex;flex-direction:column;gap:var(--s-spacing-small);padding:var(--s-spacing-medium)}.aside-root .aside .aside-footer{background-color:var(--s-color-fill-default-light);padding:var(--s-spacing-medium);border-top:var(--s-border-width-hairline) solid var(--s-color-border-default)}@media screen and (max-width: 490px){.aside-root.open{width:96%;right:0}}.css-jspizm{overflow:hidden !important}.css-jspizm *{overflow:hidden !important}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Aside/Aside.scss"],
            names: [],
            mappings:
              "AAAA,eACE,WAAA,CACA,WAAA,CACA,cAAA,CACA,KAAA,CACA,MAAA,CACA,YAAA,CACA,cAAA,CACA,iBAAA,CACA,UAAA,CAEA,oBACE,YAAA,CACA,SAAA,CACA,kDAAA,CAIJ,YACE,WAAA,CACA,WAAA,CACA,cAAA,CACA,YAAA,CACA,qBAAA,CACA,KAAA,CACA,YAAA,CACA,4CAAA,CACA,cAAA,CACA,UAAA,CAEA,iBACE,SAAA,CACA,OAAA,CAGF,mBACE,YAAA,CACA,qBAAA,CACA,6BAAA,CACA,WAAA,CACA,4CAAA,CAEA,iCACE,4CAAA,CACA,YAAA,CACA,qBAAA,CACA,+BAAA,CACA,yBAAA,CACA,qDAAA,CAEA,8CACE,kBAAA,CACA,oCAAA,CACA,uCAAA,CACA,YAAA,CACA,kBAAA,CACA,6BAAA,CAGF,oDACE,kCAAA,CACA,0CAAA,CACA,oBAAA,CAGJ,mCACE,WAAA,CACA,eAAA,CACA,aAAA,CACA,YAAA,CACA,qBAAA,CACA,6BAAA,CAEA,sDACE,SAAA,CACA,kBAAA,CAGF,4DACE,4CAAA,CACA,kBAAA,CAEF,kDACE,YAAA,CACA,qBAAA,CACA,0BAAA,CACA,+BAAA,CAIJ,iCACE,kDAAA,CACA,+BAAA,CACA,6EAAA,CAMN,qCAEI,iBACE,SAAA,CACA,OAAA,CAAA,CAKN,YACE,0BAAA,CACA,cACE,0BAAA",
            sourcesContent: [
              ".aside-overlay {\n  height: 100%;\n  width: 100vw;\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: none;\n  transition: 0.5s;\n  overflow-x: hidden;\n  z-index: 98;\n\n  &.open {\n    display: flex;\n    opacity: 1;\n    background-color: var(--s-color-background-overlay);\n  }\n}\n\n.aside-root {\n  height: 100%;\n  width: 100vw;\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  top: 0;\n  right: -100vw;\n  background-color: var(--s-color-fill-default);\n  transition: 0.5s;\n  z-index: 99;\n\n  &.open {\n    width: 50%;\n    right: 0;\n  }\n\n  .aside {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100%;\n    background-color: var(--s-color-fill-default);\n\n    .aside-header {\n      background-color: var(--s-color-fill-default);\n      display: flex;\n      flex-direction: column;\n      padding: var(--s-spacing-medium);\n      gap: var(--s-spacing-nano);\n      border-bottom: 1px solid var(--s-color-border-default);\n\n      .aside-title {\n        align-items: center;\n        color: var(--s-color-content-default);\n        font: var(--s-typography-heading-medium);\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n      }\n\n      .aside-description {\n        color: var(--s-color-content-light);\n        font: var(--s-typography-paragraph-regular);\n        word-break: break-all;\n      }\n    }\n    .aside-children {\n      flex-grow: 1;\n      max-height: 100%;\n      overflow: auto;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n\n      &::-webkit-scrollbar {\n        width: 8px;\n        border-radius: 12px;\n      }\n\n      &::-webkit-scrollbar-thumb {\n        background: var(--s-color-fill-default-light);\n        border-radius: 12px;\n      }\n      .aside-content {\n        display: flex;\n        flex-direction: column;\n        gap: var(--s-spacing-small);\n        padding: var(--s-spacing-medium);\n      }\n    }\n\n    .aside-footer {\n      background-color: var(--s-color-fill-default-light);\n      padding: var(--s-spacing-medium);\n      border-top: var(--s-border-width-hairline) solid\n        var(--s-color-border-default);\n    }\n  }\n}\n\n@media screen and (max-width: 490px) {\n  .aside-root {\n    &.open {\n      width: 96%;\n      right: 0;\n    }\n  }\n}\n\n.css-jspizm {\n  overflow: hidden !important;\n  * {\n    overflow: hidden !important;\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
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
  },
]);
