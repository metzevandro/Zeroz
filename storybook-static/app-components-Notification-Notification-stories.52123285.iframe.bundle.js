"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [8289],
  {
    "./src/app/components/Notification/Notification.stories.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Dismissible: () => Dismissible,
          Float: () => Float,
          Inline: () => Inline,
          Primary: () => Primary,
          Success: () => Success,
          Warning: () => Warning,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Notification_stories,
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
        Notification = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Notification/Notification.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Notification.A, options);
      Notification.A && Notification.A.locals && Notification.A.locals;
      var Button = __webpack_require__(
        "./src/app/components/Button/Button.tsx",
      );
      const Notification_Notification_Notification = (param) => {
          let {
            icon,
            title,
            description,
            variant,
            type,
            isOpen,
            dismissible,
            withAction,
            disableButton,
            onClickButton,
            buttonLabel,
          } = param;
          const [isClose, setIsClose] = (0, react.useState)(!0);
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children:
              isClose &&
              (0, jsx_runtime.jsxs)("div", {
                className: "notification "
                  .concat(variant, " ")
                  .concat(type, " ")
                  .concat(dismissible && "dismissible", " ")
                  .concat(isOpen ? "open" : ""),
                children: [
                  (0, jsx_runtime.jsx)("div", {
                    className: "notification-icon ".concat(variant),
                    children: (0, jsx_runtime.jsx)(Icon.A, {
                      icon,
                      size: "md",
                    }),
                  }),
                  (0, jsx_runtime.jsxs)("div", {
                    className: "notification-content",
                    children: [
                      (0, jsx_runtime.jsxs)("header", {
                        children: [
                          (0, jsx_runtime.jsx)("div", {
                            className: "title",
                            children: title,
                          }),
                          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
                            children:
                              dismissible &&
                              (0, jsx_runtime.jsx)(ButtonIcon.A, {
                                variant: "primary",
                                size: "md",
                                typeIcon: "close",
                                type: "plain",
                                onClick: () => {
                                  setIsClose(!1);
                                },
                              }),
                          }),
                        ],
                      }),
                      description &&
                        (0, jsx_runtime.jsx)("div", {
                          className: "description",
                          children: description,
                        }),
                      withAction &&
                        (0, jsx_runtime.jsx)("div", {
                          className: "notification-with-action",
                          children: (0, jsx_runtime.jsx)(Button.A, {
                            size: "md",
                            variant: "secondary",
                            disabled: disableButton,
                            label: buttonLabel,
                            onClick: onClickButton,
                          }),
                        }),
                    ],
                  }),
                ],
              }),
          });
        },
        components_Notification_Notification =
          Notification_Notification_Notification;
      try {
        (Notification_Notification_Notification.displayName = "Notification"),
          (Notification_Notification_Notification.__docgenInfo = {
            description: "",
            displayName: "Notification",
            props: {
              icon: {
                defaultValue: null,
                description: "",
                name: "icon",
                required: !1,
                type: { name: "string" },
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
              variant: {
                defaultValue: null,
                description: "",
                name: "variant",
                required: !0,
                type: {
                  name: "enum",
                  value: [
                    { value: '"primary"' },
                    { value: '"success"' },
                    { value: '"warning"' },
                  ],
                },
              },
              type: {
                defaultValue: null,
                description: "",
                name: "type",
                required: !0,
                type: {
                  name: "enum",
                  value: [{ value: '"inline"' }, { value: '"float"' }],
                },
              },
              isOpen: {
                defaultValue: null,
                description: "",
                name: "isOpen",
                required: !1,
                type: { name: "boolean" },
              },
              dismissible: {
                defaultValue: null,
                description: "",
                name: "dismissible",
                required: !1,
                type: { name: "boolean" },
              },
              withAction: {
                defaultValue: null,
                description: "",
                name: "withAction",
                required: !1,
                type: { name: "boolean" },
              },
              disableButton: {
                defaultValue: null,
                description: "",
                name: "disableButton",
                required: !1,
                type: { name: "boolean" },
              },
              buttonLabel: {
                defaultValue: null,
                description: "",
                name: "buttonLabel",
                required: !1,
                type: { name: "string" },
              },
              onClickButton: {
                defaultValue: null,
                description: "",
                name: "onClickButton",
                required: !1,
                type: { name: "(() => void)" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Notification/Notification.tsx#Notification"
            ] = {
              docgenInfo: Notification_Notification_Notification.__docgenInfo,
              name: "Notification",
              path: "src/app/components/Notification/Notification.tsx#Notification",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var _Inline_parameters,
        _Inline_parameters_docs,
        _Inline_parameters1,
        _Float_parameters,
        _Float_parameters_docs,
        _Float_parameters1,
        _Primary_parameters,
        _Primary_parameters_docs,
        _Primary_parameters1,
        _Success_parameters,
        _Success_parameters_docs,
        _Success_parameters1,
        _Warning_parameters,
        _Warning_parameters_docs,
        _Warning_parameters1,
        _Dismissible_parameters,
        _Dismissible_parameters_docs,
        _Dismissible_parameters1;
      __webpack_require__("./src/app/styles.scss");
      const Notification_stories = {
          title: "Components/Notification",
          component: components_Notification_Notification,
          tags: ["autodocs"],
          argTypes: {},
        },
        Inline = {
          args: {
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            icon: "ac_unit",
            title: "Title",
            type: "inline",
            variant: "primary",
            dismissible: !1,
            buttonLabel: "Button",
            disableButton: !1,
            withAction: !0,
          },
        },
        Float = {
          args: {
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            icon: "ac_unit",
            title: "Title",
            type: "float",
            variant: "primary",
            isOpen: !0,
            dismissible: !1,
            buttonLabel: "Button",
            disableButton: !1,
            withAction: !1,
          },
        },
        Primary = {
          args: {
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            icon: "ac_unit",
            title: "Title",
            type: "inline",
            variant: "primary",
            dismissible: !1,
            buttonLabel: "Button",
            disableButton: !1,
            withAction: !1,
          },
        },
        Success = {
          args: {
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            icon: "ac_unit",
            title: "Title",
            type: "inline",
            variant: "success",
            dismissible: !1,
            buttonLabel: "Button",
            disableButton: !1,
            withAction: !1,
          },
        },
        Warning = {
          args: {
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            icon: "ac_unit",
            title: "Title",
            type: "inline",
            variant: "warning",
            dismissible: !1,
            buttonLabel: "Button",
            disableButton: !1,
            withAction: !1,
          },
        },
        Dismissible = {
          args: {
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            icon: "ac_unit",
            title: "Title",
            type: "inline",
            variant: "primary",
            dismissible: !0,
            buttonLabel: "Button",
            disableButton: !1,
            withAction: !1,
          },
        };
      (Inline.parameters = {
        ...Inline.parameters,
        docs: {
          ...(null === (_Inline_parameters = Inline.parameters) ||
          void 0 === _Inline_parameters
            ? void 0
            : _Inline_parameters.docs),
          source: {
            originalSource:
              '{\n  args: {\n    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",\n    icon: "ac_unit",\n    title: "Title",\n    type: "inline",\n    variant: "primary",\n    dismissible: false,\n    buttonLabel: "Button",\n    disableButton: false,\n    withAction: true\n  }\n}',
            ...(null === (_Inline_parameters1 = Inline.parameters) ||
            void 0 === _Inline_parameters1 ||
            null === (_Inline_parameters_docs = _Inline_parameters1.docs) ||
            void 0 === _Inline_parameters_docs
              ? void 0
              : _Inline_parameters_docs.source),
          },
        },
      }),
        (Float.parameters = {
          ...Float.parameters,
          docs: {
            ...(null === (_Float_parameters = Float.parameters) ||
            void 0 === _Float_parameters
              ? void 0
              : _Float_parameters.docs),
            source: {
              originalSource:
                '{\n  args: {\n    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",\n    icon: "ac_unit",\n    title: "Title",\n    type: "float",\n    variant: "primary",\n    isOpen: true,\n    dismissible: false,\n    buttonLabel: "Button",\n    disableButton: false,\n    withAction: false\n  }\n}',
              ...(null === (_Float_parameters1 = Float.parameters) ||
              void 0 === _Float_parameters1 ||
              null === (_Float_parameters_docs = _Float_parameters1.docs) ||
              void 0 === _Float_parameters_docs
                ? void 0
                : _Float_parameters_docs.source),
            },
          },
        }),
        (Primary.parameters = {
          ...Primary.parameters,
          docs: {
            ...(null === (_Primary_parameters = Primary.parameters) ||
            void 0 === _Primary_parameters
              ? void 0
              : _Primary_parameters.docs),
            source: {
              originalSource:
                '{\n  args: {\n    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",\n    icon: "ac_unit",\n    title: "Title",\n    type: "inline",\n    variant: "primary",\n    dismissible: false,\n    buttonLabel: "Button",\n    disableButton: false,\n    withAction: false\n  }\n}',
              ...(null === (_Primary_parameters1 = Primary.parameters) ||
              void 0 === _Primary_parameters1 ||
              null === (_Primary_parameters_docs = _Primary_parameters1.docs) ||
              void 0 === _Primary_parameters_docs
                ? void 0
                : _Primary_parameters_docs.source),
            },
          },
        }),
        (Success.parameters = {
          ...Success.parameters,
          docs: {
            ...(null === (_Success_parameters = Success.parameters) ||
            void 0 === _Success_parameters
              ? void 0
              : _Success_parameters.docs),
            source: {
              originalSource:
                '{\n  args: {\n    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",\n    icon: "ac_unit",\n    title: "Title",\n    type: "inline",\n    variant: "success",\n    dismissible: false,\n    buttonLabel: "Button",\n    disableButton: false,\n    withAction: false\n  }\n}',
              ...(null === (_Success_parameters1 = Success.parameters) ||
              void 0 === _Success_parameters1 ||
              null === (_Success_parameters_docs = _Success_parameters1.docs) ||
              void 0 === _Success_parameters_docs
                ? void 0
                : _Success_parameters_docs.source),
            },
          },
        }),
        (Warning.parameters = {
          ...Warning.parameters,
          docs: {
            ...(null === (_Warning_parameters = Warning.parameters) ||
            void 0 === _Warning_parameters
              ? void 0
              : _Warning_parameters.docs),
            source: {
              originalSource:
                '{\n  args: {\n    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",\n    icon: "ac_unit",\n    title: "Title",\n    type: "inline",\n    variant: "warning",\n    dismissible: false,\n    buttonLabel: "Button",\n    disableButton: false,\n    withAction: false\n  }\n}',
              ...(null === (_Warning_parameters1 = Warning.parameters) ||
              void 0 === _Warning_parameters1 ||
              null === (_Warning_parameters_docs = _Warning_parameters1.docs) ||
              void 0 === _Warning_parameters_docs
                ? void 0
                : _Warning_parameters_docs.source),
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
                '{\n  args: {\n    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",\n    icon: "ac_unit",\n    title: "Title",\n    type: "inline",\n    variant: "primary",\n    dismissible: true,\n    buttonLabel: "Button",\n    disableButton: false,\n    withAction: false\n  }\n}',
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
      const __namedExportsOrder = [
        "Inline",
        "Float",
        "Primary",
        "Success",
        "Warning",
        "Dismissible",
      ];
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
                  value: [{ value: '"plain"' }, { value: '"default"' }],
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
    "./src/app/components/Button/Button.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_Button_Button,
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
        Button = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Button/Button.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Button.A, options);
      Button.A && Button.A.locals && Button.A.locals;
      var Icon = __webpack_require__("./src/app/components/Icon/Icon.tsx");
      const Button_Button_Button = (param) => {
          let { disabled, label, variant, typeIcon, onClick, size, ...rest } =
            param;
          const buttonClass = "button ".concat(variant, " ").concat(size);
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children:
              label &&
              (0, jsx_runtime.jsxs)("button", {
                ...rest,
                className: buttonClass,
                onClick,
                disabled,
                children: [
                  typeIcon &&
                    (0, jsx_runtime.jsx)(Icon.A, {
                      icon: typeIcon,
                      size: "sm",
                    }),
                  label,
                ],
              }),
          });
        },
        components_Button_Button = Button_Button_Button;
      try {
        (Button_Button_Button.displayName = "Button"),
          (Button_Button_Button.__docgenInfo = {
            description: "",
            displayName: "Button",
            props: {
              disabled: {
                defaultValue: null,
                description: "",
                name: "disabled",
                required: !1,
                type: { name: "boolean" },
              },
              label: {
                defaultValue: null,
                description: "",
                name: "label",
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
                  value: [{ value: '"sm"' }, { value: '"md"' }],
                },
              },
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
                  ],
                },
              },
              typeIcon: {
                defaultValue: null,
                description: "",
                name: "typeIcon",
                required: !1,
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
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Button/Button.tsx#Button"
            ] = {
              docgenInfo: Button_Button_Button.__docgenInfo,
              name: "Button",
              path: "src/app/components/Button/Button.tsx#Button",
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
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Button/Button.scss":
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
          ".button{display:flex;align-items:center;justify-content:center;font:var(--s-typography-label-medium);border-radius:var(--s-border-radius-small);white-space:nowrap;width:100%;height:40px;box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;border:none;gap:var(--s-spacing-nano);cursor:pointer}.button.sm{height:32px;padding:var(--s-spacing-nano) var(--s-spacing-x-small)}.button.md{padding:var(--s-spacing-xx-small) var(--s-spacing-x-small);height:40px}.button.primary{background-color:var(--s-color-fill-highlight);color:var(--s-color-content-on-color)}.button.primary:hover{background-color:var(--s-color-fill-highlight-hover)}.button.primary:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.button.primary:disabled{cursor:auto;background-color:var(--s-color-fill-disable);opacity:.64;color:var(--s-color-content-disable);border:var(--s-border-width-hairline) solid var(--s-color-border-default)}.button.secondary{background-color:var(--s-color-fill-default);color:var(--s-color-content-default);border:var(--s-border-width-hairline) solid var(--s-color-border-default)}.button.secondary:hover{background-color:var(--s-color-fill-default-hover)}.button.secondary:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.button.secondary:disabled{opacity:.64;background-color:var(--s-color-fill-disable);color:var(--s-color-content-disable);border:var(--s-border-width-hairline) solid var(--s-color-border-default)}.button.success{background-color:var(--s-color-fill-success);color:var(--s-color-content-on-color)}.button.success:hover{background-color:var(--s-color-fill-success-hover)}.button.success:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.button.success:disabled{opacity:.64;background-color:var(--s-color-fill-disable);color:var(--s-color-content-disable);border:var(--s-border-width-hairline) solid var(--s-color-border-default)}.button.warning{background-color:var(--s-color-fill-warning);color:var(--s-color-content-on-color)}.button.warning:hover{background-color:var(--s-color-fill-warning-hover)}.button.warning:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.button.warning:disabled{opacity:.64;background-color:var(--s-color-fill-disable);color:var(--s-color-content-disable);border:var(--s-border-width-hairline) solid var(--s-color-border-default)}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Button/Button.scss"],
            names: [],
            mappings:
              "AAAA,QACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,qCAAA,CACA,0CAAA,CACA,kBAAA,CACA,UAAA,CACA,WAAA,CACA,qBAAA,CACA,6BAAA,CACA,0BAAA,CACA,WAAA,CACA,yBAAA,CACA,cAAA,CAEA,WACE,WAAA,CACA,sDAAA,CAGF,WACE,0DAAA,CACA,WAAA,CAGF,gBACE,8CAAA,CACA,qCAAA,CAEA,sBACE,oDAAA,CAGF,8BACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,yBACE,WAAA,CACA,4CAAA,CACA,WAAA,CACA,oCAAA,CACA,yEAAA,CAIJ,kBACE,4CAAA,CACA,oCAAA,CACA,yEAAA,CAEA,wBACE,kDAAA,CAGF,gCACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,2BACE,WAAA,CACA,4CAAA,CACA,oCAAA,CACA,yEAAA,CAIJ,gBACE,4CAAA,CACA,qCAAA,CAEA,sBACE,kDAAA,CAGF,8BACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,yBACE,WAAA,CACA,4CAAA,CACA,oCAAA,CACA,yEAAA,CAIJ,gBACE,4CAAA,CACA,qCAAA,CAEA,sBACE,kDAAA,CAGF,8BACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,yBACE,WAAA,CACA,4CAAA,CACA,oCAAA,CACA,yEAAA",
            sourcesContent: [
              ".button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font: var(--s-typography-label-medium);\n  border-radius: var(--s-border-radius-small);\n  white-space: nowrap;\n  width: 100%;\n  height: 40px;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  border: none;\n  gap: var(--s-spacing-nano);\n  cursor: pointer;\n\n  &.sm {\n    height: 32px;\n    padding: var(--s-spacing-nano) var(--s-spacing-x-small);\n  }\n\n  &.md {\n    padding: var(--s-spacing-xx-small) var(--s-spacing-x-small);\n    height: 40px;\n  }\n\n  &.primary {\n    background-color: var(--s-color-fill-highlight);\n    color: var(--s-color-content-on-color);\n\n    &:hover {\n      background-color: var(--s-color-fill-highlight-hover);\n    }\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    &:disabled {\n      cursor: auto;\n      background-color: var(--s-color-fill-disable);\n      opacity: 0.64;\n      color: var(--s-color-content-disable);\n      border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n    }\n  }\n\n  &.secondary {\n    background-color: var(--s-color-fill-default);\n    color: var(--s-color-content-default);\n    border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n\n    &:hover {\n      background-color: var(--s-color-fill-default-hover);\n    }\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    &:disabled {\n      opacity: 0.64;\n      background-color: var(--s-color-fill-disable);\n      color: var(--s-color-content-disable);\n      border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n    }\n  }\n\n  &.success {\n    background-color: var(--s-color-fill-success);\n    color: var(--s-color-content-on-color);\n\n    &:hover {\n      background-color: var(--s-color-fill-success-hover);\n    }\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    &:disabled {\n      opacity: 0.64;\n      background-color: var(--s-color-fill-disable);\n      color: var(--s-color-content-disable);\n      border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n    }\n  }\n\n  &.warning {\n    background-color: var(--s-color-fill-warning);\n    color: var(--s-color-content-on-color);\n\n    &:hover {\n      background-color: var(--s-color-fill-warning-hover);\n    }\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    &:disabled {\n      opacity: 0.64;\n      background-color: var(--s-color-fill-disable);\n      color: var(--s-color-content-disable);\n      border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n    }\n  }\n}\n",
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
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Notification/Notification.scss":
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
          ".notification{padding:var(--s-spacing-small) var(--s-spacing-small) var(--s-spacing-small) var(--s-spacing-xx-small);background-color:var(--s-color-fill-default);display:flex;gap:var(--s-spacing-xx-small);border-radius:var(--s-border-radius-small);border:var(--s-border-width-hairline) solid var(--s-color-border-default);overflow:hidden}.notification.float{max-width:368px;position:fixed;right:24px;bottom:-100vw;border:none;box-shadow:var(--s-shadow-level-2)}.notification.float.open{animation:float 5s ease-in-out}.notification.float.dismissible{animation:floatDismissible 5s ease-in-out;animation-fill-mode:forwards}.notification.dismissible header{align-items:center}.notification.dismissible .notification-icon{padding-top:var(--s-spacing-nano)}.notification.primary{border-left:var(--s-border-width-heavy) solid var(--s-color-border-highlight)}.notification.warning{border-left:var(--s-border-width-heavy) solid var(--s-color-border-warning)}.notification.success{border-left:var(--s-border-width-heavy) solid var(--s-color-border-success)}.notification .notification-content{display:flex;flex-direction:column;width:100%;gap:var(--s-spacing-xx-small)}.notification .notification-content header{display:flex;justify-content:space-between;gap:var(--s-spacing-small)}.notification .notification-content .description{font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default);word-break:break-all}.notification .notification-content .title{font:var(--s-typography-heading-small);color:var(--s-color-content-default)}.notification .notification-content .notification-with-action{display:flex;width:min-content}.notification .notification-icon.primary{color:var(--s-color-content-highlight)}.notification .notification-icon.warning{color:var(--s-color-content-warning)}.notification .notification-icon.success{color:var(--s-color-content-success)}@media screen and (max-width: 490px){.notification.float{bottom:-100vw;right:24px;left:24px}.notification.float.open{animation:floatMobile 5s ease-in-out}.notification.float.dismissible{animation:floatDismissibleMobile 5s ease-in-out;animation-fill-mode:forwards}}@keyframes floatDismissibleMobile{0%{right:24px;bottom:-100vw}100%{bottom:24px;right:24px;left:24px}}@keyframes floatMobile{0%{right:24px;bottom:-100vw}20%{bottom:24px;right:24px;left:24px}80%{left:24px;bottom:24px;right:24px}100%{left:100vw;right:-85vw;bottom:24px}}@keyframes floatDismissible{0%{right:24px;bottom:-100vw}100%{bottom:24px;right:24px}}@keyframes float{0%{right:24px;bottom:-100vw}20%{bottom:24px;right:24px}80%{bottom:24px;right:24px}100%{right:-40vw;bottom:24px}}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/Notification/Notification.scss",
            ],
            names: [],
            mappings:
              "AAAA,cACE,sGAAA,CAEA,4CAAA,CACA,YAAA,CACA,6BAAA,CACA,0CAAA,CACA,yEAAA,CACA,eAAA,CAEA,oBACE,eAAA,CACA,cAAA,CACA,UAAA,CACA,aAAA,CACA,WAAA,CACA,kCAAA,CACA,yBACE,8BAAA,CAEF,gCACE,yCAAA,CACA,4BAAA,CAKF,iCACE,kBAAA,CAEF,6CACE,iCAAA,CAIJ,sBACE,6EAAA,CAIF,sBACE,2EAAA,CAGF,sBACE,2EAAA,CAGF,oCACE,YAAA,CACA,qBAAA,CACA,UAAA,CACA,6BAAA,CAEA,2CACE,YAAA,CACA,6BAAA,CACA,0BAAA,CAGF,iDACE,0CAAA,CACA,oCAAA,CACA,oBAAA,CAGF,2CACE,sCAAA,CACA,oCAAA,CAGF,8DACE,YAAA,CACA,iBAAA,CAKF,yCACE,sCAAA,CAGF,yCACE,oCAAA,CAGF,yCACE,oCAAA,CAKN,qCAEI,oBACE,aAAA,CACA,UAAA,CACA,SAAA,CACA,yBACE,oCAAA,CAEF,gCACE,+CAAA,CACA,4BAAA,CAAA,CAMR,kCACE,GACE,UAAA,CACA,aAAA,CAEF,KACE,WAAA,CACA,UAAA,CACA,SAAA,CAAA,CAIJ,uBACE,GACE,UAAA,CACA,aAAA,CAEF,IACE,WAAA,CACA,UAAA,CACA,SAAA,CAEF,IACE,SAAA,CACA,WAAA,CACA,UAAA,CAEF,KACE,UAAA,CACA,WAAA,CACA,WAAA,CAAA,CAIJ,4BACE,GACE,UAAA,CACA,aAAA,CAEF,KACE,WAAA,CACA,UAAA,CAAA,CAIJ,iBACE,GACE,UAAA,CACA,aAAA,CAEF,IACE,WAAA,CACA,UAAA,CAEF,IACE,WAAA,CACA,UAAA,CAEF,KACE,WAAA,CACA,WAAA,CAAA",
            sourcesContent: [
              ".notification {\n  padding: var(--s-spacing-small) var(--s-spacing-small) var(--s-spacing-small)\n    var(--s-spacing-xx-small);\n  background-color: var(--s-color-fill-default);\n  display: flex;\n  gap: var(--s-spacing-xx-small);\n  border-radius: var(--s-border-radius-small);\n  border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n  overflow: hidden;\n\n  &.float {\n    max-width: 368px;\n    position: fixed;\n    right: 24px;\n    bottom: -100vw;\n    border: none;\n    box-shadow: var(--s-shadow-level-2);\n    &.open {\n      animation: float 5s ease-in-out;\n    }\n    &.dismissible {\n      animation: floatDismissible 5s ease-in-out;\n      animation-fill-mode: forwards;\n    }\n  }\n\n  &.dismissible {\n    header {\n      align-items: center;\n    }\n    .notification-icon {\n      padding-top: var(--s-spacing-nano);\n    }\n  }\n\n  &.primary {\n    border-left: var(--s-border-width-heavy) solid\n      var(--s-color-border-highlight);\n  }\n\n  &.warning {\n    border-left: var(--s-border-width-heavy) solid var(--s-color-border-warning);\n  }\n\n  &.success {\n    border-left: var(--s-border-width-heavy) solid var(--s-color-border-success);\n  }\n\n  .notification-content {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    gap: var(--s-spacing-xx-small);\n\n    header {\n      display: flex;\n      justify-content: space-between;\n      gap: var(--s-spacing-small);\n    }\n\n    .description {\n      font: var(--s-typography-paragraph-regular);\n      color: var(--s-color-content-default);\n      word-break: break-all;\n    }\n\n    .title {\n      font: var(--s-typography-heading-small);\n      color: var(--s-color-content-default);\n    }\n\n    .notification-with-action {\n      display: flex;\n      width: min-content;\n    }\n  }\n\n  .notification-icon {\n    &.primary {\n      color: var(--s-color-content-highlight);\n    }\n\n    &.warning {\n      color: var(--s-color-content-warning);\n    }\n\n    &.success {\n      color: var(--s-color-content-success);\n    }\n  }\n}\n\n@media screen and (max-width: 490px) {\n  .notification {\n    &.float {\n      bottom: -100vw;\n      right: 24px;\n      left: 24px;\n      &.open {\n        animation: floatMobile 5s ease-in-out;\n      }\n      &.dismissible {\n        animation: floatDismissibleMobile 5s ease-in-out;\n        animation-fill-mode: forwards;\n      }\n    }\n  }\n}\n\n@keyframes floatDismissibleMobile {\n  0% {\n    right: 24px;\n    bottom: -100vw;\n  }\n  100% {\n    bottom: 24px;\n    right: 24px;\n    left: 24px;\n  }\n}\n\n@keyframes floatMobile {\n  0% {\n    right: 24px;\n    bottom: -100vw;\n  }\n  20% {\n    bottom: 24px;\n    right: 24px;\n    left: 24px;\n  }\n  80% {\n    left: 24px;\n    bottom: 24px;\n    right: 24px;\n  }\n  100% {\n    left: 100vw;\n    right: -85vw;\n    bottom: 24px;\n  }\n}\n\n@keyframes floatDismissible {\n  0% {\n    right: 24px;\n    bottom: -100vw;\n  }\n  100% {\n    bottom: 24px;\n    right: 24px;\n  }\n}\n\n@keyframes float {\n  0% {\n    right: 24px;\n    bottom: -100vw;\n  }\n  20% {\n    bottom: 24px;\n    right: 24px;\n  }\n  80% {\n    bottom: 24px;\n    right: 24px;\n  }\n  100% {\n    right: -40vw;\n    bottom: 24px;\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
