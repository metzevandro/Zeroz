"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [4258],
  {
    "./src/stories/Modal.stories.tsx": (
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
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        ),
        _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__("./src/components/Modal/Modal.tsx"),
        _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./src/components/Button/Button.tsx"),
        _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./src/components/Icon/Icon.tsx"),
        _components_ButtonGroup_ButtonGroup__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__("./src/components/ButtonGroup/ButtonGroup.tsx"),
        _storybook_blocks__WEBPACK_IMPORTED_MODULE_7__ =
          (__webpack_require__("./src/styles.scss"),
          __webpack_require__(
            "./node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist/index.mjs",
          ));
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Components/Modal",
          component: _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__.Ay,
          parameters: {
            layout: "fullscreen",
            docs: {
              page: () =>
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  "div",
                  {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.hE,
                        {},
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.Pd,
                        { children: "Component" },
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        "p",
                        {
                          children: [
                            "The ",
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              "strong",
                              { children: " Modals " },
                            ),
                            " are overlays strategically designed to focus the user's attention on a specific task or piece of information.",
                          ],
                        },
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.Tn,
                        {},
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.H2,
                        {},
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.om,
                        {},
                      ),
                    ],
                  },
                ),
            },
          },
          argTypes: {
            title: {
              control: "text",
              description: "The title of the modal.",
              table: { category: "Content" },
            },
            description: {
              control: "text",
              description: "The description text displayed in the modal.",
              table: { category: "Content" },
            },
            dismissible: {
              control: "boolean",
              description: "If true, the modal can be dismissed by the user.",
              table: { category: "State" },
            },
            content: {
              control: "object",
              description: "The content of the modal.",
              table: { category: "Content" },
            },
            footer: {
              control: "object",
              description: "The footer of the modal.",
              table: { category: "Content" },
            },
            hideModal: {
              action: "hideModal",
              description: "Callback function to hide the modal.",
              table: { category: "Actions" },
            },
            isOpen: {
              control: "boolean",
              description: "If true, the modal is open.",
              table: { category: "State" },
            },
          },
        },
        Template = (args) => {
          const [isOpen, setIsOpen] = (0,
            react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
            toggleModal = () => {
              setIsOpen(!isOpen);
            };
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            "div",
            {
              style: { height: "100vh", padding: "var(--s-spacing-small)" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                  style: { width: "min-content" },
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__.A,
                    {
                      size: "md",
                      variant: "primary",
                      label: "Click here!",
                      onClick: toggleModal,
                    },
                  ),
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__.Ay,
                  {
                    dismissible: args.dismissible,
                    description: args.description,
                    hideModal: toggleModal,
                    title: args.title,
                    isOpen,
                    content: args.content,
                    footer: args.footer,
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
        content: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__.Tg,
          {
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              "div",
              {
                className: "slot",
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__.A,
                    { icon: "refresh", size: "md" },
                  ),
                  "Slot Content",
                ],
              },
            ),
          },
        ),
        footer: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__.J9,
          {
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              "div",
              {
                style: { width: "min-content" },
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ButtonGroup_ButtonGroup__WEBPACK_IMPORTED_MODULE_5__.A,
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
      };
      const Dismissible = Template.bind({});
      Dismissible.args = {
        title: "Title",
        description: "Description",
        dismissible: !0,
        content: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__.Tg,
          {
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              "div",
              {
                className: "slot",
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__.A,
                    { icon: "refresh", size: "md" },
                  ),
                  "Slot Content",
                ],
              },
            ),
          },
        ),
        footer: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__.J9,
          {
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              "div",
              {
                style: { width: "min-content" },
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_ButtonGroup_ButtonGroup__WEBPACK_IMPORTED_MODULE_5__.A,
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
      };
      const __namedExportsOrder = ["Default", "Dismissible"];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              'args => {\n  const [isOpen, setIsOpen] = useState(false);\n  const toggleModal = () => {\n    setIsOpen(!isOpen);\n  };\n  return <div style={{\n    height: "100vh",\n    padding: "var(--s-spacing-small)"\n  }}>\r\n      <div style={{\n      width: "min-content"\n    }}>\r\n        <Button size="md" variant="primary" label="Click here!" onClick={toggleModal} />\r\n      </div>\r\n\r\n      <Modal dismissible={args.dismissible} description={args.description} hideModal={toggleModal} title={args.title} isOpen={isOpen} content={args.content} footer={args.footer} />\r\n    </div>;\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Dismissible.parameters = {
          ...Dismissible.parameters,
          docs: {
            ...Dismissible.parameters?.docs,
            source: {
              originalSource:
                'args => {\n  const [isOpen, setIsOpen] = useState(false);\n  const toggleModal = () => {\n    setIsOpen(!isOpen);\n  };\n  return <div style={{\n    height: "100vh",\n    padding: "var(--s-spacing-small)"\n  }}>\r\n      <div style={{\n      width: "min-content"\n    }}>\r\n        <Button size="md" variant="primary" label="Click here!" onClick={toggleModal} />\r\n      </div>\r\n\r\n      <Modal dismissible={args.dismissible} description={args.description} hideModal={toggleModal} title={args.title} isOpen={isOpen} content={args.content} footer={args.footer} />\r\n    </div>;\n}',
              ...Dismissible.parameters?.docs?.source,
            },
          },
        });
    },
  },
]);
