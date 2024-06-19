"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [3821],
  {
    "./src/app/components/Aside/Aside.stories.tsx": (
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
      var _Default_parameters,
        _Default_parameters_docs,
        _Default_parameters1,
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        ),
        _Aside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./src/app/components/Aside/Aside.tsx",
        ),
        _Icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./src/app/components/Icon/Icon.tsx",
        ),
        _ButtonGroup_ButtonGroup__WEBPACK_IMPORTED_MODULE_5__ =
          (__webpack_require__("./src/app/components/Aside/Aside.scss"),
          __webpack_require__(
            "./src/app/components/ButtonGroup/ButtonGroup.tsx",
          )),
        _Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          "./src/app/components/Button/Button.tsx",
        );
      __webpack_require__("./src/app/styles.scss");
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Components/Aside",
          component: _Aside__WEBPACK_IMPORTED_MODULE_2__.Ay,
          parameters: { layout: "fullscreen", docs: {} },
        },
        Default = ((args) => {
          const [isOpenAside, setIsOpenAside] = (0,
            react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
            toggleAside = () => {
              setIsOpenAside(!isOpenAside);
            };
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
            {
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                  style: { width: "min-content" },
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _Button_Button__WEBPACK_IMPORTED_MODULE_6__.A,
                    {
                      size: "md",
                      variant: "primary",
                      label: "Click here!",
                      onClick: toggleAside,
                    },
                  ),
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _Aside__WEBPACK_IMPORTED_MODULE_2__.Ay,
                  {
                    isOpen: isOpenAside,
                    toggleAside,
                    title: args.title,
                    description: args.description,
                    content: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _Aside__WEBPACK_IMPORTED_MODULE_2__.cD,
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          "div",
                          {
                            className: "slot",
                            children: [
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _Icon_Icon__WEBPACK_IMPORTED_MODULE_3__.A,
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
                      _Aside__WEBPACK_IMPORTED_MODULE_2__.iE,
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
        }).bind({});
      (Default.args = {
        title: "Title aside here!",
        description: "Aside description",
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
                '(args: Args) => {\n  const [isOpenAside, setIsOpenAside] = useState(false);\n  const toggleAside = () => {\n    setIsOpenAside(!isOpenAside);\n  };\n  return <>\r\n      <div style={{\n      width: "min-content"\n    }}>\r\n        <Button size="md" variant="primary" label="Click here!" onClick={toggleAside} />\r\n      </div>\r\n      <Aside isOpen={isOpenAside} toggleAside={toggleAside} title={args.title} description={args.description} content={<AsideContent>\r\n            <div className="slot">\r\n              <Icon icon="refresh" size="md" />\r\n              Slot Content\r\n            </div>\r\n          </AsideContent>} footer={<AsideFooter>\r\n            <div style={{\n        width: "min-content"\n      }}>\r\n              <ButtonGroup direction="row" variantFirstButton="primary" variantSecondButton="secondary" contentFirstButton="Button" contentSecondButton="Button" />\r\n            </div>\r\n          </AsideFooter>} />\r\n    </>;\n}',
              ...(null === (_Default_parameters1 = Default.parameters) ||
              void 0 === _Default_parameters1 ||
              null === (_Default_parameters_docs = _Default_parameters1.docs) ||
              void 0 === _Default_parameters_docs
                ? void 0
                : _Default_parameters_docs.source),
            },
          },
        });
      const __namedExportsOrder = ["Default"];
    },
  },
]);
