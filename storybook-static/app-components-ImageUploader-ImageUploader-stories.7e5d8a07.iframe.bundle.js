"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [5593],
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
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Icon/Icon.scss",
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
      const Icon_Icon_Icon = ({ size, fill, icon }) => {
          const sizeClass = size,
            fillStyle = `'FILL' ${fill ? 1 : 0},\n    'GRAD' 0,\n    'opsz' 24`;
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)("span", {
              style: { fontVariationSettings: fillStyle },
              className: `material-symbols-outlined ${sizeClass}`,
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
    "./src/app/components/Loading/Loading.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_Loading_Loading,
      });
      var jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
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
        Loading = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Loading/Loading.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Loading.A, options);
      Loading.A && Loading.A.locals && Loading.A.locals;
      __webpack_require__("./node_modules/next/dist/compiled/react/index.js");
      const Loading_Loading_Loading = ({ variant, message }) =>
          (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              "default" === variant &&
                (0, jsx_runtime.jsxs)("div", {
                  className: "loading-with-message",
                  children: [
                    (0, jsx_runtime.jsx)("span", {
                      className: "loading",
                      children: (0, jsx_runtime.jsx)(Icon.A, {
                        size: "sm",
                        icon: "progress_activity",
                      }),
                    }),
                    message &&
                      (0, jsx_runtime.jsx)("p", {
                        className: "loading-message",
                        children: message,
                      }),
                  ],
                }),
              "large" === variant &&
                (0, jsx_runtime.jsx)("span", {
                  className: "loading",
                  children: (0, jsx_runtime.jsx)(Icon.A, {
                    size: "lg",
                    icon: "progress_activity",
                  }),
                }),
              "success" === variant &&
                (0, jsx_runtime.jsxs)("div", {
                  className: "loading-with-message",
                  children: [
                    (0, jsx_runtime.jsx)("span", {
                      className: "success",
                      children: (0, jsx_runtime.jsx)(Icon.A, {
                        size: "sm",
                        icon: "check_circle",
                      }),
                    }),
                    message &&
                      (0, jsx_runtime.jsx)("p", {
                        className: "loading-message",
                        children: message,
                      }),
                    " ",
                  ],
                }),
              "warning" === variant &&
                (0, jsx_runtime.jsxs)("div", {
                  className: "loading-with-message",
                  children: [
                    (0, jsx_runtime.jsx)("span", {
                      className: "warning",
                      children: (0, jsx_runtime.jsx)(Icon.A, {
                        size: "sm",
                        icon: "error_outline",
                      }),
                    }),
                    message &&
                      (0, jsx_runtime.jsx)("p", {
                        className: "loading-message",
                        children: message,
                      }),
                    " ",
                  ],
                }),
            ],
          }),
        components_Loading_Loading = Loading_Loading_Loading;
      try {
        (Loading_Loading_Loading.displayName = "Loading"),
          (Loading_Loading_Loading.__docgenInfo = {
            description: "",
            displayName: "Loading",
            props: {
              variant: {
                defaultValue: null,
                description: "",
                name: "variant",
                required: !0,
                type: {
                  name: "enum",
                  value: [
                    { value: '"success"' },
                    { value: '"warning"' },
                    { value: '"default"' },
                    { value: '"large"' },
                  ],
                },
              },
              message: {
                defaultValue: null,
                description: "",
                name: "message",
                required: !1,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Loading/Loading.tsx#Loading"
            ] = {
              docgenInfo: Loading_Loading_Loading.__docgenInfo,
              name: "Loading",
              path: "src/app/components/Loading/Loading.tsx#Loading",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/Skeleton/Skeleton.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => Skeleton_Skeleton_Skeleton,
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
        Skeleton = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Skeleton/Skeleton.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Skeleton.A, options);
      Skeleton.A && Skeleton.A.locals && Skeleton.A.locals;
      function Skeleton_Skeleton_Skeleton(props) {
        return (0, jsx_runtime.jsx)("div", {
          className:
            "skeleton " + (!0 === props.circle ? "circle" : "no-circle"),
          style: {
            width: `${props.width}px`,
            height: `${props.height}px`,
            borderRadius: props.circle ? "var(--s-border-radius-pill)" : "",
            backgroundSize: `${props.width}px`,
          },
        });
      }
      try {
        (Skeleton_Skeleton_Skeleton.displayName = "Skeleton"),
          (Skeleton_Skeleton_Skeleton.__docgenInfo = {
            description: "",
            displayName: "Skeleton",
            props: {
              width: {
                defaultValue: null,
                description: "",
                name: "width",
                required: !0,
                type: { name: "string" },
              },
              height: {
                defaultValue: null,
                description: "",
                name: "height",
                required: !0,
                type: { name: "string" },
              },
              circle: {
                defaultValue: null,
                description: "",
                name: "circle",
                required: !1,
                type: { name: "boolean" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Skeleton/Skeleton.tsx#Skeleton"
            ] = {
              docgenInfo: Skeleton_Skeleton_Skeleton.__docgenInfo,
              name: "Skeleton",
              path: "src/app/components/Skeleton/Skeleton.tsx#Skeleton",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/ImageUploader/ImageUploader.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Disabled: () => Disabled,
          Multiple: () => Multiple,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        _ImageUploader__WEBPACK_IMPORTED_MODULE_2__ =
          (__webpack_require__("./src/app/styles.scss"),
          __webpack_require__(
            "./src/app/components/ImageUploader/ImageUploader.tsx",
          )),
        _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./node_modules/@storybook/blocks/dist/index.mjs",
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Components/Image Uploader",
          component: _ImageUploader__WEBPACK_IMPORTED_MODULE_2__.A,
          parameters: {
            layout: "padded",
            docs: {
              page: () =>
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                  {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.hE,
                        {},
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Pd,
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
                              { children: "Image Uploader" },
                            ),
                            " allows you to put files on a page by either dragging them into a spot or clicking a button.",
                          ],
                        },
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Tn,
                        {},
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.H2,
                        {},
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.om,
                        {},
                      ),
                    ],
                  },
                ),
            },
          },
          argTypes: {
            iconDropzone: {
              description: "Icon displayed in the dropzone area.",
              control: { type: "text" },
              table: { category: "Appearance" },
            },
            labelDropzone: {
              description: "Label displayed in the dropzone area.",
              control: { type: "text" },
              table: { category: "Appearance" },
            },
            title: {
              description: "Title of the uploader component.",
              control: { type: "text" },
              table: { category: "Content" },
            },
            description: {
              description: "Description of the uploader component.",
              control: { type: "text" },
              table: { category: "Content" },
            },
            proportion: {
              description: "Proportion of the image to be uploaded.",
              control: { type: "text" },
              table: { category: "Behavior" },
            },
            disabled: {
              description: "Disables the uploader.",
              control: { type: "boolean" },
              table: { category: "Behavior" },
            },
            multiple: {
              description: "Allows multiple file uploads.",
              control: { type: "boolean" },
              table: { category: "Behavior" },
            },
            maxFileSize: {
              description: "Maximum file size allowed for upload in MB.",
              control: { type: "number" },
              table: { category: "Behavior" },
            },
            value: {
              description: "Current value of the uploader.",
              control: { type: "object" },
              table: { category: "Data" },
            },
            onChange: {
              description: "Function called when the value changes.",
              table: { category: "Events" },
            },
          },
        },
        Default = {
          args: {
            iconDropzone: "file_upload",
            labelDropzone: "Select an image",
            title: "Title",
            description: "Description",
            proportion: "1/1",
            disabled: !1,
            multiple: !1,
            maxFileSize: 5,
            value: null,
            onChange: () => {},
          },
        },
        Multiple = {
          args: {
            iconDropzone: "file_upload",
            labelDropzone: "Select an image",
            title: "Title",
            description: "Description",
            proportion: "1/1",
            disabled: !1,
            multiple: !0,
            maxFileSize: 5,
            value: null,
            onChange: () => {},
          },
        },
        Disabled = {
          args: {
            iconDropzone: "file_upload",
            labelDropzone: "Select an image",
            title: "Title",
            description: "Description",
            proportion: "1/1",
            disabled: !0,
            multiple: !1,
            maxFileSize: 5,
            value: null,
            onChange: () => {},
          },
        },
        __namedExportsOrder = ["Default", "Multiple", "Disabled"];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    iconDropzone: "file_upload",\n    labelDropzone: "Select an image",\n    title: "Title",\n    description: "Description",\n    proportion: "1/1",\n    disabled: false,\n    multiple: false,\n    maxFileSize: 5,\n    value: null,\n    onChange: () => {}\n  }\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Multiple.parameters = {
          ...Multiple.parameters,
          docs: {
            ...Multiple.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    iconDropzone: "file_upload",\n    labelDropzone: "Select an image",\n    title: "Title",\n    description: "Description",\n    proportion: "1/1",\n    disabled: false,\n    multiple: true,\n    maxFileSize: 5,\n    value: null,\n    onChange: () => {}\n  }\n}',
              ...Multiple.parameters?.docs?.source,
            },
          },
        }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    iconDropzone: "file_upload",\n    labelDropzone: "Select an image",\n    title: "Title",\n    description: "Description",\n    proportion: "1/1",\n    disabled: true,\n    multiple: false,\n    maxFileSize: 5,\n    value: null,\n    onChange: () => {}\n  }\n}',
              ...Disabled.parameters?.docs?.source,
            },
          },
        });
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
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Icon/Icon.scss":
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
          '@import"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";.material-symbols-outlined{font-weight:300;display:flex;user-select:none}.material-symbols-outlined.sm{font-size:16px}.material-symbols-outlined.md{font-size:24px}.material-symbols-outlined.lg{font-size:32px}',
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Icon/Icon.scss"],
            names: [],
            mappings:
              "AAAQ,6HAAA,CAER,2BACE,eAAA,CACA,YAAA,CACA,gBAAA,CAGF,8BACE,cAAA,CAGF,8BACE,cAAA,CAGF,8BACE,cAAA",
            sourcesContent: [
              '@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");\n\n.material-symbols-outlined {\n  font-weight: 300;\n  display: flex;\n  user-select: none;\n}\n\n.material-symbols-outlined.sm {\n  font-size: 16px;\n}\n\n.material-symbols-outlined.md {\n  font-size: 24px;\n}\n\n.material-symbols-outlined.lg {\n  font-size: 32px;\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Loading/Loading.scss":
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
          ".loading{overflow:hidden;display:flex;align-items:center;justify-content:center;color:var(--s-color-content-highlight);animation:spin 1s infinite linear}.loading-with-message{display:flex;align-items:center;gap:8px}.loading-with-message .success{color:var(--s-color-content-success)}.loading-with-message .warning{color:var(--s-color-content-warning)}.loading-with-message .loading-message{font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default)}.material-symbols-outlined.extra-large{font-size:88px}@keyframes spin{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Loading/Loading.scss"],
            names: [],
            mappings:
              "AAAA,SACE,eAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,sCAAA,CACA,iCAAA,CAGF,sBACE,YAAA,CACA,kBAAA,CACA,OAAA,CAEA,+BACE,oCAAA,CAGF,+BACE,oCAAA,CAGF,uCACE,0CAAA,CACA,oCAAA,CAIJ,uCACE,cAAA,CAGF,gBACE,GACE,uBAAA,CAEF,KACE,yBAAA,CAAA",
            sourcesContent: [
              ".loading {\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--s-color-content-highlight);\n  animation: spin 1s infinite linear;\n}\n\n.loading-with-message {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  .success {\n    color: var(--s-color-content-success);\n  }\n\n  .warning {\n    color: var(--s-color-content-warning);\n  }\n\n  .loading-message {\n    font: var(--s-typography-paragraph-regular);\n    color: var(--s-color-content-default);\n  }\n}\n\n.material-symbols-outlined.extra-large {\n  font-size: 88px;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotateZ(0deg);\n  }\n  100% {\n    transform: rotateZ(360deg);\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Skeleton/Skeleton.scss":
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
          '.skeleton{position:relative;padding:0px;border:none;box-shadow:none;pointer-events:none;inline-size:100%;border-radius:var(--s-border-radius-medium);box-shadow:0px 1px 2px 0px rgba(14,21,36,.06)}.skeleton.no-circle::before{border-radius:var(--s-border-radius-medium);position:absolute;block-size:100%;content:"";inline-size:100%;background-color:var(--s-color-fill-default-light);background-image:linear-gradient(90deg, var(--s-color-fill-disable) 0, var(--s-color-fill-disable) 50%, var(--s-color-fill-disable) 100%);background-repeat:no-repeat;will-change:background-position;animation:skeleton ease-in-out 2000ms forwards infinite}.skeleton.circle::before{border-radius:var(--s-border-radius-pill);position:absolute;block-size:100%;content:"";inline-size:100%;background-color:var(--s-color-fill-default-light);background-image:linear-gradient(90deg, var(--s-color-fill-disable) 0, var(--s-color-fill-disable) 50%, var(--s-color-fill-disable) 100%);background-repeat:no-repeat;will-change:background-position;animation:skeleton ease-in-out 2000ms forwards infinite}@keyframes skeleton{0%{background-position:100% 0;background-size:0%}50%{background-position:100% 0;background-size:100%}100%{background-position:100% 0;background-size:0%}}',
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Skeleton/Skeleton.scss"],
            names: [],
            mappings:
              "AAmBA,UACE,iBAAA,CACA,WAAA,CACA,WAAA,CACA,eAAA,CACA,mBAAA,CACA,gBAAA,CACA,2CAAA,CACA,6CAAA,CAGF,4BACE,2CAAA,CACA,iBAAA,CACA,eAAA,CACA,UAAA,CACA,gBAAA,CAvBA,kDAZkB,CAalB,yIATkB,CAUlB,2BAAA,CACA,+BAAA,CACA,uDAAA,CAuBF,yBACE,yCAAA,CACA,iBAAA,CACA,eAAA,CACA,UAAA,CACA,gBAAA,CAhCA,kDAZkB,CAalB,yIATkB,CAUlB,2BAAA,CACA,+BAAA,CACA,uDAAA,CAgCF,oBACE,GACE,0BAAA,CACA,kBAAA,CAEF,IACE,0BAAA,CACA,oBAAA,CAEF,KACE,0BAAA,CACA,kBAAA,CAAA",
            sourcesContent: [
              '$skeleton-bg-color: var(--s-color-fill-default-light);\n$skeleton-gradient-color-start: var(--s-color-fill-disable);\n$skeleton-gradient-color-mid: var(--s-color-fill-disable);\n$skeleton-gradient-color-end: var(--s-color-fill-disable);\n$skeleton-gradient: linear-gradient(\n  90deg,\n  $skeleton-gradient-color-start 0,\n  $skeleton-gradient-color-mid 50%,\n  $skeleton-gradient-color-end 100%\n);\n\n@mixin skeleton {\n  background-color: $skeleton-bg-color;\n  background-image: $skeleton-gradient;\n  background-repeat: no-repeat;\n  will-change: background-position;\n  animation: skeleton ease-in-out 2000ms forwards infinite;\n}\n\n.skeleton {\n  position: relative;\n  padding: 0px;\n  border: none;\n  box-shadow: none;\n  pointer-events: none;\n  inline-size: 100%;\n  border-radius: var(--s-border-radius-medium);\n  box-shadow: 0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n}\n\n.skeleton.no-circle::before {\n  border-radius: var(--s-border-radius-medium);\n  position: absolute;\n  block-size: 100%;\n  content: "";\n  inline-size: 100%;\n  @include skeleton;\n}\n\n.skeleton.circle::before {\n  border-radius: var(--s-border-radius-pill);\n  position: absolute;\n  block-size: 100%;\n  content: "";\n  inline-size: 100%;\n  @include skeleton;\n}\n\n@keyframes skeleton {\n  0% {\n    background-position: 100% 0;\n    background-size: 0%;\n  }\n  50% {\n    background-position: 100% 0;\n    background-size: 100%;\n  }\n  100% {\n    background-position: 100% 0;\n    background-size: 0%;\n  }\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
