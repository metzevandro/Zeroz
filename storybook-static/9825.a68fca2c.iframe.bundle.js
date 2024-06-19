"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [9825],
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
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Avatar/Avatar.scss",
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
      const Avatar_Avatar_Avatar = (param) => {
          let { size, src, skeleton } = param;
          const sizeInPixels = ((size) => {
            switch (size) {
              case "sm":
                return 20;
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
                  circle: !0,
                  height: "".concat(sizeInPixels),
                  width: "".concat(sizeInPixels),
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
                    : (0, jsx_runtime.jsx)("label", {
                        className: "avatar-icon ".concat(size),
                        children: (0, jsx_runtime.jsx)(Icon.A, {
                          size,
                          icon: "person",
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
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Breadcrumb/Breadcrumb.scss",
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
        Icon = __webpack_require__("./src/app/components/Icon/Icon.tsx");
      __webpack_require__("./node_modules/next/dist/compiled/react/index.js");
      const BreadcrumbInitial = (param) => {
          let { pageName, href } = param;
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)("div", {
              className: "breadcrumb",
              children: (0, jsx_runtime.jsx)(Link.A, {
                content: pageName,
                href,
              }),
            }),
          });
        },
        Breadcrumb_Breadcrumb_Breadcrumb = (param) => {
          let { pageName, href } = param;
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsxs)("div", {
              className: "breadcrumb",
              children: [
                (0, jsx_runtime.jsx)(Icon.A, {
                  icon: "keyboard_arrow_right",
                  size: "sm",
                }),
                (0, jsx_runtime.jsx)(Link.A, { content: pageName, href }),
              ],
            }),
          });
        },
        components_Breadcrumb_Breadcrumb = (param) => {
          let { children, pageName, href } = param;
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsxs)("div", {
              className: "breadcrumb",
              children: [
                (0, jsx_runtime.jsx)(BreadcrumbInitial, { pageName, href }),
                children,
              ],
            }),
          });
        };
      try {
        (Breadcrumb_Breadcrumb_Breadcrumb.displayName = "Breadcrumb"),
          (Breadcrumb_Breadcrumb_Breadcrumb.__docgenInfo = {
            description: "",
            displayName: "Breadcrumb",
            props: {
              pageName: {
                defaultValue: null,
                description: "",
                name: "pageName",
                required: !0,
                type: { name: "string" },
              },
              href: {
                defaultValue: null,
                description: "",
                name: "href",
                required: !0,
                type: { name: "string" },
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
      var Skeleton = __webpack_require__(
        "./src/app/components/Skeleton/Skeleton.tsx",
      );
      const ButtonIcon_ButtonIcon_ButtonIcon = (param) => {
          let { size, type, typeIcon, variant, onClick, disable, skeleton } =
            param;
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
                      height: "".concat(dimensions.height),
                      width: "".concat(dimensions.width),
                    })
                  : (0, jsx_runtime.jsx)("button", {
                      ref: buttonRef,
                      disabled: disable,
                      onClick,
                      className: "button-icon "
                        .concat(variant, " ")
                        .concat(size, " ")
                        .concat(type),
                      children:
                        typeIcon &&
                        (0, jsx_runtime.jsx)(Icon.A, { icon: typeIcon, size }),
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
              onClick: {
                defaultValue: null,
                description: "",
                name: "onClick",
                required: !1,
                type: {
                  name: "((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)",
                },
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
    "./src/app/components/DropdownMenu/DropdownMenu.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        iO: () => DropDownMenuItem,
        Hg: () => DropDownMenuTitle,
        Ay: () => app_components_DropdownMenu_DropdownMenu,
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
        DropdownMenu_DropdownMenu = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/DropdownMenu/DropdownMenu.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(DropdownMenu_DropdownMenu.A, options);
      DropdownMenu_DropdownMenu.A &&
        DropdownMenu_DropdownMenu.A.locals &&
        DropdownMenu_DropdownMenu.A.locals;
      __webpack_require__("./node_modules/next/dist/compiled/react/index.js");
      const DropDownMenuTitle = (param) => {
          let { content } = param;
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)("div", {
              className: "dropdown-menu-title",
              children: content,
            }),
          });
        },
        DropDownMenuItem = (param) => {
          let { typeIcon, content, onClick } = param;
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsxs)("button", {
              className: "dropdown-menu-item",
              onClick,
              children: [
                typeIcon &&
                  (0, jsx_runtime.jsx)(Icon.A, { size: "sm", icon: typeIcon }),
                content,
              ],
            }),
          });
        },
        app_components_DropdownMenu_DropdownMenu = (param) => {
          let { children, dropDownMenu } = param;
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children:
              !0 === dropDownMenu &&
              (0, jsx_runtime.jsx)("div", {
                className: "dropdown-menu-root",
                children: (0, jsx_runtime.jsx)("div", {
                  className: "dropdown-menu",
                  children,
                }),
              }),
          });
        };
      try {
        (DropDownMenuTitle.displayName = "DropDownMenuTitle"),
          (DropDownMenuTitle.__docgenInfo = {
            description: "",
            displayName: "DropDownMenuTitle",
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
              "src/app/components/DropdownMenu/DropdownMenu.tsx#DropDownMenuTitle"
            ] = {
              docgenInfo: DropDownMenuTitle.__docgenInfo,
              name: "DropDownMenuTitle",
              path: "src/app/components/DropdownMenu/DropdownMenu.tsx#DropDownMenuTitle",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (DropDownMenuItem.displayName = "DropDownMenuItem"),
          (DropDownMenuItem.__docgenInfo = {
            description: "",
            displayName: "DropDownMenuItem",
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
              "src/app/components/DropdownMenu/DropdownMenu.tsx#DropDownMenuItem"
            ] = {
              docgenInfo: DropDownMenuItem.__docgenInfo,
              name: "DropDownMenuItem",
              path: "src/app/components/DropdownMenu/DropdownMenu.tsx#DropDownMenuItem",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (DropdownMenu.displayName = "DropdownMenu"),
          (DropdownMenu.__docgenInfo = {
            description: "",
            displayName: "DropdownMenu",
            props: {
              dropDownMenu: {
                defaultValue: null,
                description: "",
                name: "dropDownMenu",
                required: !0,
                type: { name: "boolean" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/DropdownMenu/DropdownMenu.tsx#DropdownMenu"
            ] = {
              docgenInfo: DropdownMenu.__docgenInfo,
              name: "DropdownMenu",
              path: "src/app/components/DropdownMenu/DropdownMenu.tsx#DropdownMenu",
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
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Header/Header.scss",
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
      const Header_Header_Header = (param) => {
          let { children, onClick, breadcrumb } = param;
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsxs)("header", {
              className: "header-root",
              children: [
                (0, jsx_runtime.jsxs)("div", {
                  children: [
                    (0, jsx_runtime.jsx)("div", {
                      className: "header-action",
                      children: (0, jsx_runtime.jsx)(ButtonIcon.A, {
                        variant: "primary",
                        type: "plain",
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
          });
        },
        HeaderProfile = (param) => {
          let { name, children, avatar_src, skeleton } = param;
          const [isDropDownOpen, setIsDropDownOpen] = (0, react.useState)(!1),
            toggleDropDown = () => {
              setIsDropDownOpen(!isDropDownOpen);
            };
          return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              isDropDownOpen &&
                (0, jsx_runtime.jsx)("div", {
                  className: "profile-ghost",
                  onClick: toggleDropDown,
                }),
              (0, jsx_runtime.jsxs)("div", {
                className: "profile-root",
                children: [
                  (0, jsx_runtime.jsxs)("div", {
                    className: "profile",
                    tabIndex: 0,
                    onClick: toggleDropDown,
                    children: [
                      (0, jsx_runtime.jsx)("div", {
                        className: "avatar",
                        children: (0, jsx_runtime.jsx)(Avatar.A, {
                          skeleton,
                          size: "md",
                          src: avatar_src,
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
                        className: "icon ".concat(
                          isDropDownOpen ? "open" : "close",
                        ),
                        children: (0, jsx_runtime.jsx)(Icon.A, {
                          size: "sm",
                          icon: "keyboard_arrow_down",
                        }),
                      }),
                    ],
                  }),
                  (0, jsx_runtime.jsx)("div", {
                    className: "dropdown ".concat(
                      isDropDownOpen ? "open" : "close",
                    ),
                    children,
                  }),
                ],
              }),
            ],
          });
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
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Link/Link.scss",
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
      const Link_Link_Link = (param) => {
          let { content, disabled, ...rest } = param;
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsx)("a", {
              className: "link ".concat(disabled ? "disabled" : ""),
              ...rest,
              children: content,
            }),
          });
        },
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
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Avatar/Avatar.scss":
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
          ".avatar label{display:flex;align-items:center;justify-content:center;border-radius:var(--s-border-radius-pill);color:var(--s-color-content-on-color);width:fit-content}.avatar img{border-radius:var(--s-border-radius-pill);object-fit:cover;border:none}.avatar-icon{background-color:var(--s-color-fill-highlight)}.avatar-icon .sm{padding:var(--s-spacing-nano)}.avatar-icon .md{padding:var(--s-spacing-xx-small)}.avatar-icon .lg{padding:var(--s-spacing-small)}.avatar-image .sm{height:24px;width:24px}.avatar-image .md{height:40px;width:40px}.avatar-image .lg{height:64px;width:64px}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Avatar/Avatar.scss"],
            names: [],
            mappings:
              "AAAA,cACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,yCAAA,CACA,qCAAA,CACA,iBAAA,CAGF,YACE,yCAAA,CACA,gBAAA,CACA,WAAA,CAGF,aACE,8CAAA,CAGF,iBACE,6BAAA,CAGF,iBACE,iCAAA,CAGF,iBACE,8BAAA,CAGF,kBACE,WAAA,CACA,UAAA,CAGF,kBACE,WAAA,CACA,UAAA,CAGF,kBACE,WAAA,CACA,UAAA",
            sourcesContent: [
              ".avatar label {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--s-border-radius-pill);\n  color: var(--s-color-content-on-color);\n  width: fit-content;\n}\n\n.avatar img {\n  border-radius: var(--s-border-radius-pill);\n  object-fit: cover;\n  border: none;\n}\n\n.avatar-icon {\n  background-color: var(--s-color-fill-highlight);\n}\n\n.avatar-icon .sm {\n  padding: var(--s-spacing-nano);\n}\n\n.avatar-icon .md {\n  padding: var(--s-spacing-xx-small);\n}\n\n.avatar-icon .lg {\n  padding: var(--s-spacing-small);\n}\n\n.avatar-image .sm {\n  height: 24px;\n  width: 24px;\n}\n\n.avatar-image .md {\n  height: 40px;\n  width: 40px;\n}\n\n.avatar-image .lg {\n  height: 64px;\n  width: 64px;\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Breadcrumb/Breadcrumb.scss":
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
          ".breadcrumb{display:flex;gap:var(--s-spacing-xx-small);align-items:center;color:var(--s-color-content-default)}@media screen and (max-width: 768px){.breadcrumb{display:none}}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/Breadcrumb/Breadcrumb.scss",
            ],
            names: [],
            mappings:
              "AAAA,YACE,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,oCAAA,CAEF,qCACE,YACE,YAAA,CAAA",
            sourcesContent: [
              ".breadcrumb {\n  display: flex;\n  gap: var(--s-spacing-xx-small);\n  align-items: center;\n  color: var(--s-color-content-default);\n}\n@media screen and (max-width: 768px) {\n  .breadcrumb {\n    display: none;\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
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
          ".button-icon{display:flex;align-items:center;border:none;padding:0;cursor:pointer;box-sizing:border-box}.button-icon.sm.plain{padding:4px;height:24px}.button-icon.md.plain{padding:4px;height:32px}.button-icon.plain{border-radius:var(--s-border-radius-small);color:var(--s-color-content-default);background-color:rgba(0,0,0,0)}.button-icon.plain:hover{background-color:var(--s-color-fill-default-hover)}.button-icon.plain.on-color{color:var(--s-color-content-on-color)}.button-icon.plain.on-color:hover{background-color:rgba(255,255,255,.16)}.button-icon.plain:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.button-icon.plain:disabled{cursor:auto}.button-icon.plain:disabled:hover{color:var(--s-color-content-default);background-color:rgba(0,0,0,0)}.button-icon.sm.default>*{padding:var(--s-spacing-nano)}.button-icon.md.default>*{padding:var(--s-spacing-xx-small);font-size:24px}.button-icon.default{border-radius:4px}.button-icon.default.md{height:40px;width:40px}.button-icon.default:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.button-icon.default.primary{background-color:var(--s-color-fill-highlight);color:var(--s-color-content-on-color)}.button-icon.default.primary:hover{background-color:var(--s-color-fill-highlight-hover)}.button-icon.default.primary:disabled{cursor:auto;background-color:var(--s-color-fill-disable);opacity:.64}.button-icon.default.secondary{border:var(--s-border-width-hairline) solid var(--s-color-border-default);background-color:var(--s-color-fill-default);color:var(--s-color-content-default)}.button-icon.default.secondary:hover{background-color:var(--s-color-fill-default-hover);border-color:var(--s-color-border-default-hover)}.button-icon.default.secondary:disabled{cursor:auto;background-color:var(--s-color-fill-disable);opacity:.64}.button-icon.default.success{background-color:var(--s-color-fill-success);color:var(--s-color-content-on-color)}.button-icon.default.success:hover{background-color:var(--s-color-fill-success-hover)}.button-icon.default.success:disabled{cursor:auto;background-color:var(--s-color-fill-disable);opacity:.64}.button-icon.default.warning{background-color:var(--s-color-fill-warning);color:var(--s-color-content-on-color)}.button-icon.default.warning:hover{background-color:var(--s-color-fill-warning-hover)}.button-icon.default.warning:disabled{cursor:auto;background-color:var(--s-color-fill-disable);opacity:.64}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/ButtonIcon/ButtonIcon.scss",
            ],
            names: [],
            mappings:
              "AAAA,aACE,YAAA,CACA,kBAAA,CACA,WAAA,CACA,SAAA,CACA,cAAA,CACA,qBAAA,CAEA,sBACE,WAAA,CACA,WAAA,CAGF,sBACE,WAAA,CACA,WAAA,CAGF,mBACE,0CAAA,CACA,oCAAA,CACA,8BAAA,CAEA,yBACE,kDAAA,CAGF,4BACE,qCAAA,CAEA,kCACE,sCAAA,CAIJ,iCACE,wCAAA,CACA,6CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,4BACE,WAAA,CACA,kCACE,oCAAA,CACA,8BAAA,CAKN,0BACE,6BAAA,CAGF,0BACE,iCAAA,CACA,cAAA,CAGF,qBACE,iBAAA,CAEA,wBACE,WAAA,CACA,UAAA,CAGF,mCACE,wCAAA,CACA,6CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,6BACE,8CAAA,CACA,qCAAA,CAEA,mCACE,oDAAA,CAGF,sCACE,WAAA,CACA,4CAAA,CACA,WAAA,CAIJ,+BACE,yEAAA,CACA,4CAAA,CACA,oCAAA,CAEA,qCACE,kDAAA,CACA,gDAAA,CAGF,wCACE,WAAA,CACA,4CAAA,CACA,WAAA,CAIJ,6BACE,4CAAA,CACA,qCAAA,CAEA,mCACE,kDAAA,CAGF,sCACE,WAAA,CACA,4CAAA,CACA,WAAA,CAIJ,6BACE,4CAAA,CACA,qCAAA,CAEA,mCACE,kDAAA,CAGF,sCACE,WAAA,CACA,4CAAA,CACA,WAAA",
            sourcesContent: [
              ".button-icon {\n  display: flex;\n  align-items: center;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  box-sizing: border-box;\n\n  &.sm.plain {\n    padding: 4px;\n    height: 24px;\n  }\n\n  &.md.plain {\n    padding: 4px;\n    height: 32px;\n  }\n\n  &.plain {\n    border-radius: var(--s-border-radius-small);\n    color: var(--s-color-content-default);\n    background-color: transparent;\n\n    &:hover {\n      background-color: var(--s-color-fill-default-hover);\n    }\n\n    &.on-color {\n      color: var(--s-color-content-on-color);\n\n      &:hover {\n        background-color: rgba(white, 0.16);\n      }\n    }\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-border-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    &:disabled {\n      cursor: auto;\n      &:hover {\n        color: var(--s-color-content-default);\n        background-color: transparent;\n      }\n    }\n  }\n\n  &.sm.default > * {\n    padding: var(--s-spacing-nano);\n  }\n\n  &.md.default > * {\n    padding: var(--s-spacing-xx-small);\n    font-size: 24px;\n  }\n\n  &.default {\n    border-radius: 4px;\n\n    &.md {\n      height: 40px;\n      width: 40px;\n    }\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-border-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    &.primary {\n      background-color: var(--s-color-fill-highlight);\n      color: var(--s-color-content-on-color);\n\n      &:hover {\n        background-color: var(--s-color-fill-highlight-hover);\n      }\n\n      &:disabled {\n        cursor: auto;\n        background-color: var(--s-color-fill-disable);\n        opacity: 0.64;\n      }\n    }\n\n    &.secondary {\n      border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n      background-color: var(--s-color-fill-default);\n      color: var(--s-color-content-default);\n\n      &:hover {\n        background-color: var(--s-color-fill-default-hover);\n        border-color: var(--s-color-border-default-hover);\n      }\n\n      &:disabled {\n        cursor: auto;\n        background-color: var(--s-color-fill-disable);\n        opacity: 0.64;\n      }\n    }\n\n    &.success {\n      background-color: var(--s-color-fill-success);\n      color: var(--s-color-content-on-color);\n\n      &:hover {\n        background-color: var(--s-color-fill-success-hover);\n      }\n\n      &:disabled {\n        cursor: auto;\n        background-color: var(--s-color-fill-disable);\n        opacity: 0.64;\n      }\n    }\n\n    &.warning {\n      background-color: var(--s-color-fill-warning);\n      color: var(--s-color-content-on-color);\n\n      &:hover {\n        background-color: var(--s-color-fill-warning-hover);\n      }\n\n      &:disabled {\n        cursor: auto;\n        background-color: var(--s-color-fill-disable);\n        opacity: 0.64;\n      }\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/DropdownMenu/DropdownMenu.scss":
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
          ".dropdown-menu-root{position:relative}.dropdown-menu-root .dropdown-menu{margin-top:var(--s-spacing-xx-small);z-index:10;position:absolute;width:100%;display:flex;align-items:center;flex-direction:column;border-radius:var(--s-border-radius-small);background-color:var(--s-color-fill-default);border:var(--s-border-width-hairline) solid var(--s-color-border-default);padding:var(--s-spacing-nano);box-shadow:var(--s-shadow-dropdown)}.dropdown-menu-root .dropdown-menu .dropdown-menu-title{font:var(--s-typography-paragraph-strong);padding:var(--s-spacing-xx-small) var(--s-spacing-xx-small) 0 var(--s-spacing-xx-small);border-radius:var(--s-border-radius-small);background-color:var(--s-color-fill-default);color:var(--s-color-content-default);justify-content:start;display:flex;width:100%}.dropdown-menu-root .dropdown-menu .dropdown-menu-item{justify-content:start;cursor:pointer;width:100%;font:var(--s-typography-paragraph-regular);display:flex;align-items:center;gap:var(--s-spacing-xx-small);padding:var(--s-spacing-xx-small);border-radius:var(--s-border-radius-small);background-color:var(--s-color-fill-default);color:var(--s-color-content-default)}.dropdown-menu-root .dropdown-menu .dropdown-menu-item:hover{background-color:var(--s-color-fill-default-hover)}.dropdown-menu-root .dropdown-menu .dropdown-menu-item:focus-visible{border-radius:var(--s-border-radius-small);z-index:2;outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/DropdownMenu/DropdownMenu.scss",
            ],
            names: [],
            mappings:
              "AAAA,oBACE,iBAAA,CAEA,mCACE,oCAAA,CACA,UAAA,CACA,iBAAA,CACA,UAAA,CACA,YAAA,CACA,kBAAA,CACA,qBAAA,CACA,0CAAA,CACA,4CAAA,CACA,yEAAA,CACA,6BAAA,CACA,mCAAA,CAEA,wDACE,yCAAA,CACA,uFAAA,CAEA,0CAAA,CACA,4CAAA,CACA,oCAAA,CACA,qBAAA,CACA,YAAA,CACA,UAAA,CAGF,uDACE,qBAAA,CACA,cAAA,CACA,UAAA,CACA,0CAAA,CACA,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,iCAAA,CACA,0CAAA,CACA,4CAAA,CACA,oCAAA,CAEA,6DACE,kDAAA,CAGF,qEACE,0CAAA,CACA,SAAA,CACA,wCAAA,CACA,6CAAA,CACA,yCAAA,CACA,mBAAA",
            sourcesContent: [
              ".dropdown-menu-root {\n  position: relative;\n\n  .dropdown-menu {\n    margin-top: var(--s-spacing-xx-small);\n    z-index: 10;\n    position: absolute;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    border-radius: var(--s-border-radius-small);\n    background-color: var(--s-color-fill-default);\n    border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n    padding: var(--s-spacing-nano);\n    box-shadow: var(--s-shadow-dropdown);\n\n    .dropdown-menu-title {\n      font: var(--s-typography-paragraph-strong);\n      padding: var(--s-spacing-xx-small) var(--s-spacing-xx-small) 0\n        var(--s-spacing-xx-small);\n      border-radius: var(--s-border-radius-small);\n      background-color: var(--s-color-fill-default);\n      color: var(--s-color-content-default);\n      justify-content: start;\n      display: flex;\n      width: 100%;\n    }\n\n    .dropdown-menu-item {\n      justify-content: start;\n      cursor: pointer;\n      width: 100%;\n      font: var(--s-typography-paragraph-regular);\n      display: flex;\n      align-items: center;\n      gap: var(--s-spacing-xx-small);\n      padding: var(--s-spacing-xx-small);\n      border-radius: var(--s-border-radius-small);\n      background-color: var(--s-color-fill-default);\n      color: var(--s-color-content-default);\n\n      &:hover {\n        background-color: var(--s-color-fill-default-hover);\n      }\n\n      &:focus-visible {\n        border-radius: var(--s-border-radius-small);\n        z-index: 2;\n        outline-width: var(--s-border-width-thin);\n        outline-color: var(--s-color-border-highlight);\n        outline-offset: var(--s-border-width-thin);\n        outline-style: solid;\n      }\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Header/Header.scss":
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
          ".profile-ghost{height:100vh;width:100vw;position:fixed;top:0;left:0}.header-root{background-color:var(--s-color-fill-default);box-shadow:var(--s-shadow-header);position:sticky;z-index:97;top:0;grid-area:header;display:flex;align-items:center;padding:var(--s-spacing-nano) var(--s-spacing-x-large);justify-content:space-between;border-bottom:var(--s-border-width-hairline) solid var(--s-color-border-default);box-sizing:border-box;height:64px}.header-root .header-action{display:none}.header-root .profile{cursor:pointer;display:flex;align-items:center;padding:var(--s-spacing-xx-small);gap:var(--s-spacing-xx-small);font:var(--s-typography-paragraph-strong);color:var(--s-color-content-default);background-color:var(--s-color-fill-default);border-radius:var(--s-border-radius-small);user-select:none}.header-root .profile:hover{background-color:var(--s-color-fill-default-hover);cursor:pointer}.header-root .profile:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.header-root .profile .avatar{cursor:pointer}.header-root .profile .icon{display:flex}.header-root .profile .icon.open{transform:rotate(-180deg);transition:.3s ease-out}.header-root .profile .icon.close{transition:.3s ease-out}.header-root .profile .name{display:flex;font:var(--s-typography-paragraph-strong);color:var(--s-color-content-default)}.header-root .dropdown.close{display:none}@media screen and (max-width: 768px){.header-root{padding:var(--s-spacing-x-small) var(--s-spacing-small)}.header-root .header-breadcrumb{display:none}.header-root .header-action{display:flex}.header-root .dropdown.open{width:150px}.header-root .profile-root{display:flex;flex-direction:column;align-items:end}.header-root .profile-root .profile{padding:0;border-radius:var(--border-radius-pill)}.header-root .profile-root .profile:hover{background-color:rgba(0,0,0,0)}.header-root .profile-root .profile .name{display:none}.header-root .profile-root .profile .skeleton{display:none}.header-root .profile-root .profile .icon{display:none}}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Header/Header.scss"],
            names: [],
            mappings:
              "AAAA,eACE,YAAA,CACA,WAAA,CACA,cAAA,CACA,KAAA,CACA,MAAA,CAGF,aACE,4CAAA,CACA,iCAAA,CACA,eAAA,CACA,UAAA,CACA,KAAA,CACA,gBAAA,CACA,YAAA,CACA,kBAAA,CACA,sDAAA,CACA,6BAAA,CACA,gFAAA,CAEA,qBAAA,CACA,WAAA,CAEA,4BACE,YAAA,CAGF,sBACE,cAAA,CACA,YAAA,CACA,kBAAA,CACA,iCAAA,CACA,6BAAA,CACA,yCAAA,CACA,oCAAA,CACA,4CAAA,CACA,0CAAA,CACA,gBAAA,CAEA,4BACE,kDAAA,CACA,cAAA,CAGF,oCACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,8BACE,cAAA,CAGF,4BACE,YAAA,CACA,iCACE,yBAAA,CACA,uBAAA,CAEF,kCACE,uBAAA,CAIJ,4BACE,YAAA,CACA,yCAAA,CACA,oCAAA,CAKF,6BACE,YAAA,CAKN,qCACE,aACE,uDAAA,CACA,gCACE,YAAA,CAEF,4BACE,YAAA,CAGF,4BACE,WAAA,CAGF,2BACE,YAAA,CACA,qBAAA,CACA,eAAA,CAEA,oCACE,SAAA,CACA,uCAAA,CACA,0CACE,8BAAA,CAGF,0CACE,YAAA,CAGF,8CACE,YAAA,CAGF,0CACE,YAAA,CAAA",
            sourcesContent: [
              ".profile-ghost {\n  height: 100vh;\n  width: 100vw;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n\n.header-root {\n  background-color: var(--s-color-fill-default);\n  box-shadow: var(--s-shadow-header);\n  position: sticky;\n  z-index: 97;\n  top: 0;\n  grid-area: header;\n  display: flex;\n  align-items: center;\n  padding: var(--s-spacing-nano) var(--s-spacing-x-large);\n  justify-content: space-between;\n  border-bottom: var(--s-border-width-hairline) solid\n    var(--s-color-border-default);\n  box-sizing: border-box;\n  height: 64px;\n\n  .header-action {\n    display: none;\n  }\n\n  .profile {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    padding: var(--s-spacing-xx-small);\n    gap: var(--s-spacing-xx-small);\n    font: var(--s-typography-paragraph-strong);\n    color: var(--s-color-content-default);\n    background-color: var(--s-color-fill-default);\n    border-radius: var(--s-border-radius-small);\n    user-select: none;\n\n    &:hover {\n      background-color: var(--s-color-fill-default-hover);\n      cursor: pointer;\n    }\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    .avatar {\n      cursor: pointer;\n    }\n\n    .icon {\n      display: flex;\n      &.open {\n        transform: rotate(-180deg);\n        transition: 0.3s ease-out;\n      }\n      &.close {\n        transition: 0.3s ease-out;\n      }\n    }\n\n    .name {\n      display: flex;\n      font: var(--s-typography-paragraph-strong);\n      color: var(--s-color-content-default);\n    }\n  }\n\n  .dropdown {\n    &.close {\n      display: none;\n    }\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .header-root {\n    padding: var(--s-spacing-x-small) var(--s-spacing-small);\n    .header-breadcrumb {\n      display: none;\n    }\n    .header-action {\n      display: flex;\n    }\n\n    .dropdown.open {\n      width: 150px;\n    }\n\n    .profile-root {\n      display: flex;\n      flex-direction: column;\n      align-items: end;\n\n      .profile {\n        padding: 0;\n        border-radius: var(--border-radius-pill);\n        &:hover {\n          background-color: transparent;\n        }\n\n        .name {\n          display: none;\n        }\n\n        .skeleton {\n          display: none;\n        }\n\n        .icon {\n          display: none;\n        }\n      }\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Link/Link.scss":
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
