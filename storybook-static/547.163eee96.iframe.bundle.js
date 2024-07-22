"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [547],
  {
    "./src/app/components/Avatar/Avatar.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_Avatar_Avatar,
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
        Avatar = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Avatar/Avatar.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Avatar.A, options);
      Avatar.A && Avatar.A.locals && Avatar.A.locals;
      __webpack_require__("./node_modules/next/dist/compiled/react/index.js");
      var Skeleton = __webpack_require__(
        "./src/app/components/Skeleton/Skeleton.tsx",
      );
      const Avatar_Avatar_Avatar = ({ size, src, skeleton, letter }) => {
          var _getLetter;
          const sizeInPixels = ((size) => {
            switch (size) {
              case "sm":
                return 24;
              case "md":
                return 40;
              case "lg":
                return 64;
              default:
                return 32;
            }
          })(size);
          return (0, jsx_runtime.jsx)("div", {
            className: "avatar",
            children: skeleton
              ? (0, jsx_runtime.jsx)(Skeleton.A, {
                  height: `${sizeInPixels}`,
                  circle: !0,
                  width: `${sizeInPixels}`,
                })
              : (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
                  children: src
                    ? (0, jsx_runtime.jsx)("label", {
                        className: "avatar-image",
                        children: (0, jsx_runtime.jsx)("img", {
                          className: size,
                          src,
                          alt: "Avatar",
                        }),
                      })
                    : (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
                        children: letter
                          ? (0, jsx_runtime.jsx)("label", {
                              className: `avatar-letter ${size}`,
                              children:
                                null ===
                                  (_getLetter = ((letter) => {
                                    if (letter && letter.includes(" ")) {
                                      const [firstName, lastName] =
                                        letter.split(" ");
                                      return `${firstName.charAt(0)}${lastName.charAt(0)}`;
                                    }
                                    return letter && letter.length > 1
                                      ? letter.charAt(0)
                                      : letter;
                                  })(letter)) || void 0 === _getLetter
                                  ? void 0
                                  : _getLetter.toLocaleUpperCase(),
                            })
                          : (0, jsx_runtime.jsx)("label", {
                              className: `avatar-icon ${size}`,
                              children: (0, jsx_runtime.jsx)(Icon.A, {
                                size,
                                icon: "person",
                              }),
                            }),
                      }),
                }),
          });
        },
        components_Avatar_Avatar = Avatar_Avatar_Avatar;
      try {
        (Avatar_Avatar_Avatar.displayName = "Avatar"),
          (Avatar_Avatar_Avatar.__docgenInfo = {
            description: "",
            displayName: "Avatar",
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
              src: {
                defaultValue: null,
                description: "",
                name: "src",
                required: !1,
                type: { name: "string" },
              },
              skeleton: {
                defaultValue: null,
                description: "",
                name: "skeleton",
                required: !1,
                type: { name: "boolean" },
              },
              letter: {
                defaultValue: null,
                description: "",
                name: "letter",
                required: !1,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Avatar/Avatar.tsx#Avatar"
            ] = {
              docgenInfo: Avatar_Avatar_Avatar.__docgenInfo,
              name: "Avatar",
              path: "src/app/components/Avatar/Avatar.tsx#Avatar",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/Breadcrumb/Breadcrumb.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        Q: () => Breadcrumb_Breadcrumb_Breadcrumb,
        A: () => components_Breadcrumb_Breadcrumb,
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
        Breadcrumb = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Breadcrumb/Breadcrumb.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Breadcrumb.A, options);
      Breadcrumb.A && Breadcrumb.A.locals && Breadcrumb.A.locals;
      var Link = __webpack_require__("./src/app/components/Link/Link.tsx"),
        Icon = __webpack_require__("./src/app/components/Icon/Icon.tsx"),
        react = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        );
      const Breadcrumb_Breadcrumb_Breadcrumb = ({ items }) =>
          (0, jsx_runtime.jsx)("div", {
            className: "breadcrumb",
            children: items.map((item, index) =>
              (0, jsx_runtime.jsxs)(
                react.Fragment,
                {
                  children: [
                    (0, jsx_runtime.jsx)(Link.A, {
                      content: item.pageName,
                      href: item.href,
                    }),
                    index < items.length - 1 &&
                      (0, jsx_runtime.jsx)(Icon.A, {
                        icon: "keyboard_arrow_right",
                        size: "sm",
                      }),
                  ],
                },
                index,
              ),
            ),
          }),
        components_Breadcrumb_Breadcrumb = Breadcrumb_Breadcrumb_Breadcrumb;
      try {
        (Breadcrumb_Breadcrumb_Breadcrumb.displayName = "Breadcrumb"),
          (Breadcrumb_Breadcrumb_Breadcrumb.__docgenInfo = {
            description: "",
            displayName: "Breadcrumb",
            props: {
              items: {
                defaultValue: null,
                description: "",
                name: "items",
                required: !0,
                type: { name: "BreadcrumbItem[]" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Breadcrumb/Breadcrumb.tsx#Breadcrumb"
            ] = {
              docgenInfo: Breadcrumb_Breadcrumb_Breadcrumb.__docgenInfo,
              name: "Breadcrumb",
              path: "src/app/components/Breadcrumb/Breadcrumb.tsx#Breadcrumb",
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
    "./src/app/components/Dropdown/Dropdown.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        tJ: () => DropdownItem,
        EI: () => DropdownTitle,
        Ay: () => components_Dropdown_Dropdown,
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
        Dropdown = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Dropdown/Dropdown.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Dropdown.A, options);
      Dropdown.A && Dropdown.A.locals && Dropdown.A.locals;
      __webpack_require__("./node_modules/next/dist/compiled/react/index.js");
      const Dropdown_Dropdown_Dropdown = ({ children, dropdown }) =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children:
              !0 === dropdown &&
              (0, jsx_runtime.jsx)("div", {
                className: "dropdown-menu-root",
                children: (0, jsx_runtime.jsx)("div", {
                  className: "dropdown-menu",
                  children,
                }),
              }),
          }),
        DropdownTitle = ({ content }) =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)("div", {
              className: "dropdown-menu-title",
              children: content,
            }),
          }),
        DropdownItem = ({ typeIcon, content, onClick }) =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsxs)("button", {
              className: "dropdown-menu-item",
              onClick,
              children: [
                typeIcon &&
                  (0, jsx_runtime.jsx)(Icon.A, { size: "sm", icon: typeIcon }),
                content,
              ],
            }),
          }),
        components_Dropdown_Dropdown = Dropdown_Dropdown_Dropdown;
      try {
        (DropdownTitle.displayName = "DropdownTitle"),
          (DropdownTitle.__docgenInfo = {
            description: "",
            displayName: "DropdownTitle",
            props: {
              content: {
                defaultValue: null,
                description: "",
                name: "content",
                required: !0,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Dropdown/Dropdown.tsx#DropdownTitle"
            ] = {
              docgenInfo: DropdownTitle.__docgenInfo,
              name: "DropdownTitle",
              path: "src/app/components/Dropdown/Dropdown.tsx#DropdownTitle",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (DropdownItem.displayName = "DropdownItem"),
          (DropdownItem.__docgenInfo = {
            description: "",
            displayName: "DropdownItem",
            props: {
              typeIcon: {
                defaultValue: null,
                description: "",
                name: "typeIcon",
                required: !1,
                type: { name: "string" },
              },
              content: {
                defaultValue: null,
                description: "",
                name: "content",
                required: !0,
                type: { name: "string" },
              },
              onClick: {
                defaultValue: null,
                description: "",
                name: "onClick",
                required: !1,
                type: { name: "(() => void)" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Dropdown/Dropdown.tsx#DropdownItem"
            ] = {
              docgenInfo: DropdownItem.__docgenInfo,
              name: "DropdownItem",
              path: "src/app/components/Dropdown/Dropdown.tsx#DropdownItem",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Dropdown_Dropdown_Dropdown.displayName = "Dropdown"),
          (Dropdown_Dropdown_Dropdown.__docgenInfo = {
            description: "",
            displayName: "Dropdown",
            props: {
              dropdown: {
                defaultValue: null,
                description: "",
                name: "dropdown",
                required: !0,
                type: { name: "boolean" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Dropdown/Dropdown.tsx#Dropdown"
            ] = {
              docgenInfo: Dropdown_Dropdown_Dropdown.__docgenInfo,
              name: "Dropdown",
              path: "src/app/components/Dropdown/Dropdown.tsx#Dropdown",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/Header/Header.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        h: () => HeaderProfile,
        A: () => components_Header_Header,
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
        Header = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Header/Header.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Header.A, options);
      Header.A && Header.A.locals && Header.A.locals;
      var Avatar = __webpack_require__(
          "./src/app/components/Avatar/Avatar.tsx",
        ),
        Icon = __webpack_require__("./src/app/components/Icon/Icon.tsx"),
        react = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        ),
        ButtonIcon = __webpack_require__(
          "./src/app/components/ButtonIcon/ButtonIcon.tsx",
        ),
        Skeleton = __webpack_require__(
          "./src/app/components/Skeleton/Skeleton.tsx",
        );
      const Header_Header_Header = ({ children, onClick, breadcrumb }) =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsxs)("header", {
              className: "header-root",
              children: [
                (0, jsx_runtime.jsxs)("div", {
                  children: [
                    (0, jsx_runtime.jsx)("div", {
                      className: "header-action",
                      children: (0, jsx_runtime.jsx)(ButtonIcon.A, {
                        variant: "primary",
                        buttonType: "plain",
                        size: "md",
                        typeIcon: "menu",
                        onClick,
                      }),
                    }),
                    (0, jsx_runtime.jsx)("div", {
                      className: "header-breadcrumb",
                      children: breadcrumb,
                    }),
                  ],
                }),
                children,
              ],
            }),
          }),
        HeaderProfile = ({ name, children, avatar_src, skeleton, letter }) => {
          const [isDropDownOpen, setIsDropDownOpen] = (0, react.useState)(!1),
            dropdownRef = (0, react.useRef)(null),
            handleClickOutside = (event) => {
              dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                setIsDropDownOpen(!1);
            };
          return (
            (0, react.useEffect)(
              () => (
                document.addEventListener("mousedown", handleClickOutside),
                () => {
                  document.removeEventListener("mousedown", handleClickOutside);
                }
              ),
              [],
            ),
            (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
              children: (0, jsx_runtime.jsxs)("div", {
                ref: dropdownRef,
                className: "profile-root",
                children: [
                  (0, jsx_runtime.jsxs)("div", {
                    className: "profile",
                    tabIndex: 0,
                    onClick: () => {
                      setIsDropDownOpen(!isDropDownOpen);
                    },
                    children: [
                      (0, jsx_runtime.jsx)("div", {
                        className: "avatar",
                        children: (0, jsx_runtime.jsx)(Avatar.A, {
                          skeleton,
                          size: "md",
                          src: avatar_src,
                          letter,
                        }),
                      }),
                      skeleton
                        ? (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
                            children: (0, jsx_runtime.jsx)(Skeleton.A, {
                              height: "24",
                              width: "70",
                            }),
                          })
                        : (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
                            children: (0, jsx_runtime.jsx)("h1", {
                              className: "name",
                              children: name,
                            }),
                          }),
                      (0, jsx_runtime.jsx)("div", {
                        className:
                          "icon " + (isDropDownOpen ? "open" : "close"),
                        children: (0, jsx_runtime.jsx)(Icon.A, {
                          size: "sm",
                          icon: "keyboard_arrow_down",
                        }),
                      }),
                    ],
                  }),
                  (0, jsx_runtime.jsx)("div", {
                    className:
                      "dropdown " + (isDropDownOpen ? "open" : "close"),
                    children,
                  }),
                ],
              }),
            })
          );
        },
        components_Header_Header = Header_Header_Header;
      try {
        (HeaderProfile.displayName = "HeaderProfile"),
          (HeaderProfile.__docgenInfo = {
            description: "",
            displayName: "HeaderProfile",
            props: {
              name: {
                defaultValue: null,
                description: "",
                name: "name",
                required: !0,
                type: { name: "string" },
              },
              avatar_src: {
                defaultValue: null,
                description: "",
                name: "avatar_src",
                required: !1,
                type: { name: "string" },
              },
              skeleton: {
                defaultValue: null,
                description: "",
                name: "skeleton",
                required: !1,
                type: { name: "boolean" },
              },
              letter: {
                defaultValue: null,
                description: "",
                name: "letter",
                required: !1,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Header/Header.tsx#HeaderProfile"
            ] = {
              docgenInfo: HeaderProfile.__docgenInfo,
              name: "HeaderProfile",
              path: "src/app/components/Header/Header.tsx#HeaderProfile",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Header_Header_Header.displayName = "Header"),
          (Header_Header_Header.__docgenInfo = {
            description: "",
            displayName: "Header",
            props: {
              breadcrumb: {
                defaultValue: null,
                description: "",
                name: "breadcrumb",
                required: !0,
                type: { name: "ReactNode" },
              },
              onClick: {
                defaultValue: null,
                description: "",
                name: "onClick",
                required: !0,
                type: { name: "() => void" },
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
              "src/app/components/Header/Header.tsx#Header"
            ] = {
              docgenInfo: Header_Header_Header.__docgenInfo,
              name: "Header",
              path: "src/app/components/Header/Header.tsx#Header",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/Link/Link.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_Link_Link,
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
        Link = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Link/Link.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Link.A, options);
      Link.A && Link.A.locals && Link.A.locals;
      __webpack_require__("./node_modules/next/dist/compiled/react/index.js");
      const Link_Link_Link = ({ content, disabled, ...rest }) =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)("a", {
              className: "link " + (disabled ? "disabled" : ""),
              ...rest,
              children: content,
            }),
          }),
        components_Link_Link = Link_Link_Link;
      try {
        (Link_Link_Link.displayName = "Link"),
          (Link_Link_Link.__docgenInfo = {
            description: "",
            displayName: "Link",
            props: {
              href: {
                defaultValue: null,
                description: "",
                name: "href",
                required: !1,
                type: { name: "string" },
              },
              content: {
                defaultValue: null,
                description: "",
                name: "content",
                required: !0,
                type: { name: "string" },
              },
              disabled: {
                defaultValue: null,
                description: "",
                name: "disabled",
                required: !1,
                type: { name: "boolean" },
              },
              target: {
                defaultValue: null,
                description: "",
                name: "target",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"_blank"' },
                    { value: '"_self"' },
                    { value: '"_parent"' },
                    { value: '"_top"' },
                  ],
                },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/app/components/Link/Link.tsx#Link"] =
              {
                docgenInfo: Link_Link_Link.__docgenInfo,
                name: "Link",
                path: "src/app/components/Link/Link.tsx#Link",
              });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Avatar/Avatar.scss":
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
          ".avatar label{display:flex;align-items:center;justify-content:center;border-radius:var(--s-border-radius-pill);color:var(--s-color-content-highlight);width:fit-content}.avatar img{border-radius:var(--s-border-radius-pill);object-fit:cover;border:none}.avatar-icon,.avatar-letter{background-color:var(--s-color-fill-highlight-light)}.avatar-icon.sm,.avatar-letter.sm{padding:var(--s-spacing-nano);height:24px;width:24px}.avatar-icon.md,.avatar-letter.md{padding:var(--s-spacing-xx-small);height:40px;width:40px}.avatar-icon.lg,.avatar-letter.lg{padding:var(--s-spacing-small);height:64px;width:64px}.avatar-image .sm{height:24px;width:24px}.avatar-image .md{height:40px;width:40px}.avatar-image .lg{height:64px;width:64px}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Avatar/Avatar.scss"],
            names: [],
            mappings:
              "AAAA,cACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,yCAAA,CACA,sCAAA,CACA,iBAAA,CAGF,YACE,yCAAA,CACA,gBAAA,CACA,WAAA,CAGF,4BAEE,oDAAA,CAEA,kCACE,6BAAA,CACA,WAAA,CACA,UAAA,CAGF,kCACE,iCAAA,CACA,WAAA,CACA,UAAA,CAGF,kCACE,8BAAA,CACA,WAAA,CACA,UAAA,CAIJ,kBACE,WAAA,CACA,UAAA,CAGF,kBACE,WAAA,CACA,UAAA,CAGF,kBACE,WAAA,CACA,UAAA",
            sourcesContent: [
              ".avatar label {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--s-border-radius-pill);\n  color: var(--s-color-content-highlight);\n  width: fit-content;\n}\n\n.avatar img {\n  border-radius: var(--s-border-radius-pill);\n  object-fit: cover;\n  border: none;\n}\n\n.avatar-icon,\n.avatar-letter {\n  background-color: var(--s-color-fill-highlight-light);\n\n  &.sm {\n    padding: var(--s-spacing-nano);\n    height: 24px;\n    width: 24px;\n  }\n\n  &.md {\n    padding: var(--s-spacing-xx-small);\n    height: 40px;\n    width: 40px;\n  }\n\n  &.lg {\n    padding: var(--s-spacing-small);\n    height: 64px;\n    width: 64px;\n  }\n}\n\n.avatar-image .sm {\n  height: 24px;\n  width: 24px;\n}\n\n.avatar-image .md {\n  height: 40px;\n  width: 40px;\n}\n\n.avatar-image .lg {\n  height: 64px;\n  width: 64px;\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Breadcrumb/Breadcrumb.scss":
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
          ".breadcrumb{display:flex;gap:var(--s-spacing-xx-small);align-items:center;color:var(--s-color-content-light)}@media screen and (max-width: 768px){.breadcrumb{display:none}}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/Breadcrumb/Breadcrumb.scss",
            ],
            names: [],
            mappings:
              "AAAA,YACE,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,kCAAA,CAGF,qCACE,YACE,YAAA,CAAA",
            sourcesContent: [
              ".breadcrumb {\n  display: flex;\n  gap: var(--s-spacing-xx-small);\n  align-items: center;\n  color: var(--s-color-content-light);\n}\n\n@media screen and (max-width: 768px) {\n  .breadcrumb {\n    display: none;\n  }\n}\n",
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
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Dropdown/Dropdown.scss":
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
          ".dropdown-menu-root{position:relative}.dropdown-menu-root .dropdown-menu{margin-top:var(--s-spacing-xx-small);z-index:10;position:absolute;width:100%;display:flex;align-items:center;flex-direction:column;border-radius:var(--s-border-radius-medium);background-color:var(--s-color-fill-default);border:var(--s-border-width-hairline) solid var(--s-color-border-default);padding:var(--s-spacing-nano);box-shadow:var(--s-shadow-dropdown)}.dropdown-menu-root .dropdown-menu .dropdown-menu-title{font:var(--s-typography-paragraph-strong);padding:var(--s-spacing-xx-small) var(--s-spacing-xx-small) 0 var(--s-spacing-xx-small);border-radius:var(--s-border-radius-medium);background-color:var(--s-color-fill-default);color:var(--s-color-content-default);justify-content:start;display:flex;width:100%}.dropdown-menu-root .dropdown-menu .dropdown-menu-item{justify-content:start;cursor:pointer;width:100%;font:var(--s-typography-paragraph-regular);display:flex;align-items:center;gap:var(--s-spacing-xx-small);padding:var(--s-spacing-xx-small);border-radius:calc(var(--s-border-radius-medium) - 2px);background-color:var(--s-color-fill-default);color:var(--s-color-content-default)}.dropdown-menu-root .dropdown-menu .dropdown-menu-item:hover{background-color:var(--s-color-fill-default-hover)}.dropdown-menu-root .dropdown-menu .dropdown-menu-item:focus-visible{border-radius:var(--s-border-radius-medium);z-index:2;outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:-2px;outline-style:solid}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Dropdown/Dropdown.scss"],
            names: [],
            mappings:
              "AAAA,oBACE,iBAAA,CAEA,mCACE,oCAAA,CACA,UAAA,CACA,iBAAA,CACA,UAAA,CACA,YAAA,CACA,kBAAA,CACA,qBAAA,CACA,2CAAA,CACA,4CAAA,CACA,yEAAA,CACA,6BAAA,CACA,mCAAA,CAEA,wDACE,yCAAA,CACA,uFAAA,CAEA,2CAAA,CACA,4CAAA,CACA,oCAAA,CACA,qBAAA,CACA,YAAA,CACA,UAAA,CAGF,uDACE,qBAAA,CACA,cAAA,CACA,UAAA,CACA,0CAAA,CACA,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,iCAAA,CACA,uDAAA,CACA,4CAAA,CACA,oCAAA,CAEA,6DACE,kDAAA,CAGF,qEACE,2CAAA,CACA,SAAA,CACA,wCAAA,CACA,6CAAA,CACA,mBAAA,CACA,mBAAA",
            sourcesContent: [
              ".dropdown-menu-root {\n  position: relative;\n\n  .dropdown-menu {\n    margin-top: var(--s-spacing-xx-small);\n    z-index: 10;\n    position: absolute;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    border-radius: var(--s-border-radius-medium);\n    background-color: var(--s-color-fill-default);\n    border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n    padding: var(--s-spacing-nano);\n    box-shadow: var(--s-shadow-dropdown);\n\n    .dropdown-menu-title {\n      font: var(--s-typography-paragraph-strong);\n      padding: var(--s-spacing-xx-small) var(--s-spacing-xx-small) 0\n        var(--s-spacing-xx-small);\n      border-radius: var(--s-border-radius-medium);\n      background-color: var(--s-color-fill-default);\n      color: var(--s-color-content-default);\n      justify-content: start;\n      display: flex;\n      width: 100%;\n    }\n\n    .dropdown-menu-item {\n      justify-content: start;\n      cursor: pointer;\n      width: 100%;\n      font: var(--s-typography-paragraph-regular);\n      display: flex;\n      align-items: center;\n      gap: var(--s-spacing-xx-small);\n      padding: var(--s-spacing-xx-small);\n      border-radius: calc(var(--s-border-radius-medium) - 2px);\n      background-color: var(--s-color-fill-default);\n      color: var(--s-color-content-default);\n\n      &:hover {\n        background-color: var(--s-color-fill-default-hover);\n      }\n\n      &:focus-visible {\n        border-radius: var(--s-border-radius-medium);\n        z-index: 2;\n        outline-width: var(--s-border-width-thin);\n        outline-color: var(--s-color-border-highlight);\n        outline-offset: -2px;\n        outline-style: solid;\n      }\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Header/Header.scss":
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
          ".header-root{background-color:var(--s-color-fill-default);position:sticky;z-index:97;top:0;grid-area:header;display:flex;align-items:center;padding:var(--s-spacing-nano) var(--s-spacing-x-large);justify-content:space-between;border-bottom:var(--s-border-width-hairline) solid var(--s-color-border-default);box-sizing:border-box;height:64px}.header-root .header-action{display:none}.header-root .profile{max-width:calc(4*var(--s-spacing-huge));cursor:pointer;display:flex;align-items:center;padding:var(--s-spacing-xx-small);gap:var(--s-spacing-xx-small);font:var(--s-typography-label-medium);color:var(--s-color-content-default);background-color:var(--s-color-fill-default);border-radius:var(--s-border-radius-medium);user-select:none}.header-root .profile *{cursor:pointer}.header-root .profile:hover{background-color:var(--s-color-fill-default-hover);cursor:pointer}.header-root .profile:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.header-root .profile .icon{display:flex}.header-root .profile .icon.open{transform:rotate(-180deg);transition:.3s ease-out}.header-root .profile .icon.close{transition:.3s ease-out}.header-root .profile .name{width:100%;font:var(--s-typography-label-medium);color:var(--s-color-content-default);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.header-root .dropdown.close{display:none}@media screen and (max-width: 768px){.header-root{padding:var(--s-spacing-x-small) var(--s-spacing-small)}.header-root .header-breadcrumb{display:none}.header-root .header-action{display:flex}.header-root .dropdown.open{width:150px}.header-root .profile-root{display:flex;flex-direction:column;align-items:end}.header-root .profile-root .profile{padding:0;border-radius:var(--border-radius-pill)}.header-root .profile-root .profile:hover{background-color:rgba(0,0,0,0)}.header-root .profile-root .profile .name{display:none}.header-root .profile-root .profile .skeleton{display:none}.header-root .profile-root .profile .icon{display:none}}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Header/Header.scss"],
            names: [],
            mappings:
              "AAAA,aACE,4CAAA,CACA,eAAA,CACA,UAAA,CACA,KAAA,CACA,gBAAA,CACA,YAAA,CACA,kBAAA,CACA,sDAAA,CACA,6BAAA,CACA,gFAAA,CAEA,qBAAA,CACA,WAAA,CAEA,4BACE,YAAA,CAGF,sBACE,uCAAA,CACA,cAAA,CACA,YAAA,CACA,kBAAA,CACA,iCAAA,CACA,6BAAA,CACA,qCAAA,CACA,oCAAA,CACA,4CAAA,CACA,2CAAA,CACA,gBAAA,CAEA,wBACE,cAAA,CAGF,4BACE,kDAAA,CACA,cAAA,CAGF,oCACE,wCAAA,CACA,6CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,4BACE,YAAA,CACA,iCACE,yBAAA,CACA,uBAAA,CAEF,kCACE,uBAAA,CAIJ,4BACE,UAAA,CACA,qCAAA,CACA,oCAAA,CACA,kBAAA,CACA,eAAA,CACA,sBAAA,CAKF,6BACE,YAAA,CAKN,qCACE,aACE,uDAAA,CACA,gCACE,YAAA,CAEF,4BACE,YAAA,CAGF,4BACE,WAAA,CAGF,2BACE,YAAA,CACA,qBAAA,CACA,eAAA,CAEA,oCACE,SAAA,CACA,uCAAA,CACA,0CACE,8BAAA,CAGF,0CACE,YAAA,CAGF,8CACE,YAAA,CAGF,0CACE,YAAA,CAAA",
            sourcesContent: [
              ".header-root {\n  background-color: var(--s-color-fill-default);\n  position: sticky;\n  z-index: 97;\n  top: 0;\n  grid-area: header;\n  display: flex;\n  align-items: center;\n  padding: var(--s-spacing-nano) var(--s-spacing-x-large);\n  justify-content: space-between;\n  border-bottom: var(--s-border-width-hairline) solid\n    var(--s-color-border-default);\n  box-sizing: border-box;\n  height: 64px;\n\n  .header-action {\n    display: none;\n  }\n\n  .profile {\n    max-width: calc(4 * var(--s-spacing-huge));\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    padding: var(--s-spacing-xx-small);\n    gap: var(--s-spacing-xx-small);\n    font: var(--s-typography-label-medium);\n    color: var(--s-color-content-default);\n    background-color: var(--s-color-fill-default);\n    border-radius: var(--s-border-radius-medium);\n    user-select: none;\n\n    * {\n      cursor: pointer;\n    }\n\n    &:hover {\n      background-color: var(--s-color-fill-default-hover);\n      cursor: pointer;\n    }\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-border-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    .icon {\n      display: flex;\n      &.open {\n        transform: rotate(-180deg);\n        transition: 0.3s ease-out;\n      }\n      &.close {\n        transition: 0.3s ease-out;\n      }\n    }\n\n    .name {\n      width: 100%;\n      font: var(--s-typography-label-medium);\n      color: var(--s-color-content-default);\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n  }\n\n  .dropdown {\n    &.close {\n      display: none;\n    }\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .header-root {\n    padding: var(--s-spacing-x-small) var(--s-spacing-small);\n    .header-breadcrumb {\n      display: none;\n    }\n    .header-action {\n      display: flex;\n    }\n\n    .dropdown.open {\n      width: 150px;\n    }\n\n    .profile-root {\n      display: flex;\n      flex-direction: column;\n      align-items: end;\n\n      .profile {\n        padding: 0;\n        border-radius: var(--border-radius-pill);\n        &:hover {\n          background-color: transparent;\n        }\n\n        .name {\n          display: none;\n        }\n\n        .skeleton {\n          display: none;\n        }\n\n        .icon {\n          display: none;\n        }\n      }\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Link/Link.scss":
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
          ".link{cursor:pointer;text-decoration:underline;color:var(--s-color-content-highlight);font:var(--s-typography-label-medium);border-radius:var(--s-border-radius-small);padding:0px var(--s-spacing-quarck)}.link:hover{background-color:var(--s-color-fill-highlight-light)}.link:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.link.disabled{pointer-events:none;color:var(--s-color-content-disable)}.link.disabled:hover{background-color:var(--s-color-fill-default)}.link.disabled:focus-visible{outline-width:none;outline-color:none;outline-style:none}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Link/Link.scss"],
            names: [],
            mappings:
              "AAAA,MACE,cAAA,CACA,yBAAA,CACA,sCAAA,CACA,qCAAA,CACA,0CAAA,CACA,mCAAA,CAEA,YACE,oDAAA,CAEF,oBACE,wCAAA,CACA,6CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,eACE,mBAAA,CACA,oCAAA,CACA,qBACE,4CAAA,CAEF,6BACE,kBAAA,CACA,kBAAA,CACA,kBAAA",
            sourcesContent: [
              ".link {\n  cursor: pointer;\n  text-decoration: underline;\n  color: var(--s-color-content-highlight);\n  font: var(--s-typography-label-medium);\n  border-radius: var(--s-border-radius-small);\n  padding: 0px var(--s-spacing-quarck);\n\n  &:hover {\n    background-color: var(--s-color-fill-highlight-light);\n  }\n  &:focus-visible {\n    outline-width: var(--s-border-width-thin);\n    outline-color: var(--s-color-border-highlight);\n    outline-offset: var(--s-border-width-thin);\n    outline-style: solid;\n  }\n\n  &.disabled {\n    pointer-events: none;\n    color: var(--s-color-content-disable);\n    &:hover {\n      background-color: var(--s-color-fill-default);\n    }\n    &:focus-visible {\n      outline-width: none;\n      outline-color: none;\n      outline-style: none;\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
