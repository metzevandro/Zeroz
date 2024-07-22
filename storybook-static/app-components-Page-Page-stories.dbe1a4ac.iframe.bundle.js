"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [5253],
  {
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
    "./src/app/components/Page/Page.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_Page_Page,
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
        Page = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Page/Page.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Page.A, options);
      Page.A && Page.A.locals && Page.A.locals;
      var ButtonIcon = __webpack_require__(
          "./src/app/components/ButtonIcon/ButtonIcon.tsx",
        ),
        Button = __webpack_require__("./src/app/components/Button/Button.tsx");
      const Page_Page_Page = ({
          children,
          namePage,
          withBackButton,
          withActionPrimary,
          withActionSecondary,
          buttonContentPrimary,
          buttonContentSecondary,
          onClickActionPrimary,
          onClickActionSecondary,
          onClickBackButton,
          iconButtonPrimary,
          iconButtonSecondary,
          skeletonButtonPrimary,
          skeletonButtonSecondary,
          description,
        }) =>
          (0, jsx_runtime.jsx)("div", {
            style: {
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              background: "var(--s-color-background-default);",
              overflowX: "hidden",
            },
            children: (0, jsx_runtime.jsxs)("div", {
              className: "page-root",
              children: [
                (0, jsx_runtime.jsxs)("div", {
                  children: [
                    (0, jsx_runtime.jsxs)("div", {
                      className: "page-header",
                      children: [
                        withBackButton &&
                          (0, jsx_runtime.jsx)(ButtonIcon.A, {
                            onClick: onClickBackButton,
                            size: "md",
                            buttonType: "default",
                            typeIcon: "arrow_back",
                            variant: "secondary",
                          }),
                        (0, jsx_runtime.jsx)("div", {
                          className: "page-header-title",
                          children: (0, jsx_runtime.jsx)("h1", {
                            children: namePage,
                          }),
                        }),
                        (0, jsx_runtime.jsxs)("div", {
                          className: "page-header-actions",
                          children: [
                            withActionSecondary &&
                              (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                  (0, jsx_runtime.jsx)("div", {
                                    className: "button-icon-actions",
                                    children: (0, jsx_runtime.jsx)(
                                      ButtonIcon.A,
                                      {
                                        buttonType: "default",
                                        size: "md",
                                        typeIcon: `${iconButtonSecondary || "more_vert"}`,
                                        variant: "secondary",
                                        onClick: onClickActionSecondary,
                                        skeleton: skeletonButtonSecondary,
                                      },
                                    ),
                                  }),
                                  (0, jsx_runtime.jsx)("div", {
                                    className: "button-actions",
                                    children: (0, jsx_runtime.jsx)(Button.A, {
                                      size: "md",
                                      variant: "secondary",
                                      label: buttonContentSecondary,
                                      onClick: onClickActionSecondary,
                                      typeIcon: iconButtonSecondary,
                                      skeleton: skeletonButtonSecondary,
                                    }),
                                  }),
                                ],
                              }),
                            withActionPrimary &&
                              (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                  (0, jsx_runtime.jsx)("div", {
                                    className: "button-icon-actions",
                                    children: (0, jsx_runtime.jsx)(
                                      ButtonIcon.A,
                                      {
                                        buttonType: "default",
                                        size: "md",
                                        typeIcon: `${iconButtonPrimary || "add"}`,
                                        variant: "primary",
                                        onClick: onClickActionPrimary,
                                        skeleton: skeletonButtonPrimary,
                                      },
                                    ),
                                  }),
                                  (0, jsx_runtime.jsx)("div", {
                                    className: "button-actions",
                                    children: (0, jsx_runtime.jsx)(Button.A, {
                                      size: "md",
                                      variant: "primary",
                                      skeleton: skeletonButtonPrimary,
                                      typeIcon: iconButtonPrimary,
                                      label: buttonContentPrimary,
                                      onClick: onClickActionPrimary,
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsx)("p", {
                      className:
                        "page-description " +
                        (withBackButton ? "with-back-button" : ""),
                      children: description,
                    }),
                  ],
                }),
                children,
              ],
            }),
          }),
        components_Page_Page = Page_Page_Page;
      try {
        (Page_Page_Page.displayName = "Page"),
          (Page_Page_Page.__docgenInfo = {
            description: "",
            displayName: "Page",
            props: {
              namePage: {
                defaultValue: null,
                description: "",
                name: "namePage",
                required: !0,
                type: { name: "string" },
              },
              withBackButton: {
                defaultValue: null,
                description: "",
                name: "withBackButton",
                required: !1,
                type: { name: "boolean" },
              },
              withActionPrimary: {
                defaultValue: null,
                description: "",
                name: "withActionPrimary",
                required: !1,
                type: { name: "boolean" },
              },
              withActionSecondary: {
                defaultValue: null,
                description: "",
                name: "withActionSecondary",
                required: !1,
                type: { name: "boolean" },
              },
              buttonContentPrimary: {
                defaultValue: null,
                description: "",
                name: "buttonContentPrimary",
                required: !1,
                type: { name: "string" },
              },
              buttonContentSecondary: {
                defaultValue: null,
                description: "",
                name: "buttonContentSecondary",
                required: !1,
                type: { name: "string" },
              },
              onClickActionPrimary: {
                defaultValue: null,
                description: "",
                name: "onClickActionPrimary",
                required: !1,
                type: { name: "(() => void)" },
              },
              onClickActionSecondary: {
                defaultValue: null,
                description: "",
                name: "onClickActionSecondary",
                required: !1,
                type: { name: "(() => void)" },
              },
              onClickBackButton: {
                defaultValue: null,
                description: "",
                name: "onClickBackButton",
                required: !1,
                type: { name: "(() => void)" },
              },
              iconButtonPrimary: {
                defaultValue: null,
                description: "",
                name: "iconButtonPrimary",
                required: !1,
                type: { name: "string" },
              },
              iconButtonSecondary: {
                defaultValue: null,
                description: "",
                name: "iconButtonSecondary",
                required: !1,
                type: { name: "string" },
              },
              skeletonButtonPrimary: {
                defaultValue: null,
                description: "",
                name: "skeletonButtonPrimary",
                required: !1,
                type: { name: "boolean" },
              },
              skeletonButtonSecondary: {
                defaultValue: null,
                description: "",
                name: "skeletonButtonSecondary",
                required: !1,
                type: { name: "boolean" },
              },
              description: {
                defaultValue: null,
                description: "",
                name: "description",
                required: !1,
                type: { name: "ReactNode" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/app/components/Page/Page.tsx#Page"] =
              {
                docgenInfo: Page_Page_Page.__docgenInfo,
                name: "Page",
                path: "src/app/components/Page/Page.tsx#Page",
              });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/Page/Page.stories.tsx": (
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
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        _Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./src/app/components/Page/Page.tsx",
        ),
        _Icon_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./src/app/components/Icon/Icon.tsx",
        ),
        _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__ =
          (__webpack_require__("./src/app/styles.scss"),
          __webpack_require__(
            "./node_modules/@storybook/blocks/dist/index.mjs",
          ));
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Templates/Page",
          component: _Page__WEBPACK_IMPORTED_MODULE_1__.A,
          parameters: {
            layout: "padded",
            docs: {
              page: () =>
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                  {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.hE,
                        {},
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Pd,
                        { children: "Template" },
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        "p",
                        {
                          children: [
                            "The ",
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              "strong",
                              { children: "Page" },
                            ),
                            " template helps you create pages. It gives you all the things you need to make different layouts.",
                          ],
                        },
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Tn,
                        {},
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.H2,
                        {},
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.om,
                        {},
                      ),
                    ],
                  },
                ),
            },
          },
          tags: ["autodocs"],
          argTypes: {
            children: {
              name: "Children",
              description: "Content rendered inside the page.",
              control: { disable: !0 },
              table: { category: "Content" },
            },
            namePage: {
              name: "Page Name",
              description: "Name of the page displayed.",
              table: { category: "Appearance" },
            },
            description: {
              name: "Page Description",
              description: "Description of the page content.",
              table: { category: "Appearance" },
            },
            withBackButton: {
              name: "Enable Back Button",
              description: "Determines if the back button is present.",
              table: { category: "Actions" },
            },
            onClickBackButton: {
              name: "Back Button Action",
              description: "Callback function for back button click.",
              action: "clicked",
              table: { category: "Actions" },
            },
            withActionPrimary: {
              name: "Enable Primary Action",
              description: "Determines if the primary action is enabled.",
              table: { category: "Actions" },
            },
            onClickActionPrimary: {
              name: "Primary Button Action",
              description: "Callback function for primary button click.",
              action: "clicked",
              table: { category: "Actions" },
            },
            withActionSecondary: {
              name: "Enable Secondary Action",
              description: "Determines if the secondary action is enabled.",
              table: { category: "Actions" },
            },
            onClickActionSecondary: {
              name: "Secondary Button Action",
              description: "Callback function for secondary button click.",
              action: "clicked",
              table: { category: "Actions" },
            },
            buttonContentPrimary: {
              name: "Primary Button Content",
              description: "Text displayed in the primary button.",
              table: { category: "Buttons" },
            },
            iconButtonPrimary: {
              name: "Primary Button Icon",
              description: "Icon displayed in the primary button.",
              table: { category: "Buttons" },
            },
            skeletonButtonPrimary: {
              name: "Primary Button Skeleton",
              description:
                "Determines if the primary button is in a loading state.",
              table: { category: "Buttons" },
            },
            buttonContentSecondary: {
              name: "Secondary Button Content",
              description: "Text displayed in the secondary button.",
              table: { category: "Buttons" },
            },
            iconButtonSecondary: {
              name: "Secondary Button Icon",
              description: "Icon displayed in the secondary button.",
              table: { category: "Buttons" },
            },
            skeletonButtonSecondary: {
              name: "Secondary Button Skeleton",
              description:
                "Determines if the secondary button is in a loading state.",
              table: { category: "Buttons" },
            },
          },
        },
        Default = {
          args: {
            namePage: "Name Page",
            description: "Description",
            buttonContentPrimary: "Button",
            buttonContentSecondary: "Button",
            withBackButton: !0,
            withActionPrimary: !0,
            iconButtonPrimary: "settings",
            iconButtonSecondary: "ac_unit",
            withActionSecondary: !0,
            skeletonButtonPrimary: !1,
            skeletonButtonSecondary: !1,
            onClickActionPrimary: () => alert("Primary button clicked"),
            onClickActionSecondary: () => alert("Secondary button clicked"),
            onClickBackButton: () => alert("Back button clicked"),
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    "div",
                    {
                      className: "slot",
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _Icon_Icon__WEBPACK_IMPORTED_MODULE_2__.A,
                          { icon: "refresh", size: "md" },
                        ),
                        "Slot Content",
                      ],
                    },
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    "div",
                    {
                      className: "slot",
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _Icon_Icon__WEBPACK_IMPORTED_MODULE_2__.A,
                          { icon: "refresh", size: "md" },
                        ),
                        "Slot Content",
                      ],
                    },
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    "div",
                    {
                      className: "slot",
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _Icon_Icon__WEBPACK_IMPORTED_MODULE_2__.A,
                          { icon: "refresh", size: "md" },
                        ),
                        "Slot Content",
                      ],
                    },
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    "div",
                    {
                      className: "slot",
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _Icon_Icon__WEBPACK_IMPORTED_MODULE_2__.A,
                          { icon: "refresh", size: "md" },
                        ),
                        "Slot Content",
                      ],
                    },
                  ),
                ],
              },
            ),
          },
        },
        __namedExportsOrder = ["Default"];
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    namePage: "Name Page",\n    description: "Description",\n    buttonContentPrimary: "Button",\n    buttonContentSecondary: "Button",\n    withBackButton: true,\n    withActionPrimary: true,\n    iconButtonPrimary: "settings",\n    iconButtonSecondary: "ac_unit",\n    withActionSecondary: true,\n    skeletonButtonPrimary: false,\n    skeletonButtonSecondary: false,\n    onClickActionPrimary: () => alert("Primary button clicked"),\n    onClickActionSecondary: () => alert("Secondary button clicked"),\n    onClickBackButton: () => alert("Back button clicked"),\n    children: <>\r\n        <div className="slot">\r\n          <Icon icon="refresh" size="md" />\r\n          Slot Content\r\n        </div>\r\n        <div className="slot">\r\n          <Icon icon="refresh" size="md" />\r\n          Slot Content\r\n        </div>\r\n        <div className="slot">\r\n          <Icon icon="refresh" size="md" />\r\n          Slot Content\r\n        </div>\r\n        <div className="slot">\r\n          <Icon icon="refresh" size="md" />\r\n          Slot Content\r\n        </div>\r\n      </>\n  }\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      };
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
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Page/Page.scss":
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
          ".page-root{grid-area:main;padding:var(--s-spacing-medium) var(--s-spacing-x-large);display:flex;flex-direction:column;width:100%;max-width:1280px;gap:var(--s-spacing-medium)}.page-root .page-description{display:flex;flex-direction:column;white-space:normal;word-wrap:break-word;color:var(--s-color-content-default)}.page-root .page-description.with-back-button{padding-left:var(--s-spacing-huge)}.page-root .page-header{display:flex;flex-direction:row;justify-content:space-between;align-items:center;box-sizing:border-box;gap:var(--s-spacing-small)}.page-root .page-header .page-header-title{width:100%;display:flex;align-items:center;gap:var(--s-spacing-small);min-height:var(--s-spacing-x-large);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.page-root .page-header .page-header-title h1{font:var(--s-typography-heading-large);line-height:var(--s-line-height-32);color:var(--s-color-content-default);overflow:hidden;text-overflow:ellipsis}.page-root .page-header .page-header-actions{display:flex;gap:var(--s-spacing-xx-small)}.page-root .page-header .page-header-actions .button-icon-actions{display:none}@media screen and (max-width: 768px){.page-root{padding:var(--s-spacing-medium) var(--s-spacing-small)}.page-root .page-header .page-header-actions .button-actions{display:none}.page-root .page-header .page-header-actions .button-icon-actions{display:flex}}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Page/Page.scss"],
            names: [],
            mappings:
              "AAAA,WACE,cAAA,CACA,wDAAA,CACA,YAAA,CACA,qBAAA,CACA,UAAA,CACA,gBAAA,CACA,2BAAA,CAEA,6BACE,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,oBAAA,CACA,oCAAA,CACA,8CACE,kCAAA,CAIJ,wBACE,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,kBAAA,CACA,qBAAA,CACA,0BAAA,CAEA,2CACE,UAAA,CACA,YAAA,CACA,kBAAA,CACA,0BAAA,CACA,mCAAA,CACA,kBAAA,CACA,eAAA,CACA,sBAAA,CAEA,8CACE,sCAAA,CACA,mCAAA,CACA,oCAAA,CACA,eAAA,CACA,sBAAA,CAIJ,6CACE,YAAA,CAEA,6BAAA,CAEA,kEACE,YAAA,CAMR,qCACE,WACE,sDAAA,CAGI,6DACE,YAAA,CAEF,kEACE,YAAA,CAAA",
            sourcesContent: [
              ".page-root {\n  grid-area: main;\n  padding: var(--s-spacing-medium) var(--s-spacing-x-large);\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 1280px;\n  gap: var(--s-spacing-medium);\n\n  .page-description {\n    display: flex;\n    flex-direction: column;\n    white-space: normal;\n    word-wrap: break-word;\n    color: var(--s-color-content-default);\n    &.with-back-button {\n      padding-left: var(--s-spacing-huge);\n    }\n  }\n\n  .page-header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    box-sizing: border-box;\n    gap: var(--s-spacing-small);\n\n    .page-header-title {\n      width: 100%;\n      display: flex;\n      align-items: center;\n      gap: var(--s-spacing-small);\n      min-height: var(--s-spacing-x-large);\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n\n      h1 {\n        font: var(--s-typography-heading-large);\n        line-height: var(--s-line-height-32);\n        color: var(--s-color-content-default);\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n    }\n\n    .page-header-actions {\n      display: flex;\n\n      gap: var(--s-spacing-xx-small);\n\n      .button-icon-actions {\n        display: none;\n      }\n    }\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .page-root {\n    padding: var(--s-spacing-medium) var(--s-spacing-small);\n    .page-header {\n      .page-header-actions {\n        .button-actions {\n          display: none;\n        }\n        .button-icon-actions {\n          display: flex;\n        }\n      }\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
