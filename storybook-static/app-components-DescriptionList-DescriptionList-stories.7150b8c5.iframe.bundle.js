"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [8013],
  {
    "./src/app/components/DescriptionList/DescriptionList.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Column: () => Column,
          Row: () => Row,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => DescriptionList_stories,
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
        DescriptionList = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/DescriptionList/DescriptionList.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(DescriptionList.A, options);
      DescriptionList.A && DescriptionList.A.locals && DescriptionList.A.locals;
      var react = __webpack_require__(
        "./node_modules/next/dist/compiled/react/index.js",
      );
      const DescriptionList_DescriptionList_DescriptionList = ({
          items,
          direction,
        }) =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: items.map((item, index) =>
              (0, jsx_runtime.jsx)(
                react.Fragment,
                {
                  children: (0, jsx_runtime.jsxs)("div", {
                    className: `description-list-root ${direction}`,
                    style:
                      index < items.length - 1
                        ? {
                            borderBottom:
                              "var(--s-border-width-hairline) solid var(--s-color-border-default)",
                          }
                        : void 0,
                    children: [
                      (0, jsx_runtime.jsx)("div", {
                        className: "title",
                        children: item.title,
                      }),
                      (0, jsx_runtime.jsx)("div", {
                        className: "description",
                        children: item.description,
                      }),
                    ],
                  }),
                },
                index,
              ),
            ),
          }),
        components_DescriptionList_DescriptionList =
          DescriptionList_DescriptionList_DescriptionList;
      try {
        (DescriptionList_DescriptionList_DescriptionList.displayName =
          "DescriptionList"),
          (DescriptionList_DescriptionList_DescriptionList.__docgenInfo = {
            description: "",
            displayName: "DescriptionList",
            props: {
              items: {
                defaultValue: null,
                description: "",
                name: "items",
                required: !0,
                type: { name: "DescriptionItem[]" },
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
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/DescriptionList/DescriptionList.tsx#DescriptionList"
            ] = {
              docgenInfo:
                DescriptionList_DescriptionList_DescriptionList.__docgenInfo,
              name: "DescriptionList",
              path: "src/app/components/DescriptionList/DescriptionList.tsx#DescriptionList",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_require__("./src/app/styles.scss");
      var dist = __webpack_require__(
        "./node_modules/@storybook/blocks/dist/index.mjs",
      );
      const DescriptionList_stories = {
          title: "Components/Description List",
          component: components_DescriptionList_DescriptionList,
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
                        "The ",
                        (0, jsx_runtime.jsx)("strong", {
                          children: "Description list",
                        }),
                        " helps organize and explain related info, perfect for listing and defining terms.",
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
            direction: {
              description:
                "The direction of the description list, either row or column.",
              control: { type: "radio" },
              options: ["row", "column"],
              defaultValue: "row",
              table: { category: "Layout" },
            },
            items: {
              description:
                "Array of items to be displayed in the description list. Each item contains a title and description.",
              control: { type: "object" },
              defaultValue: [
                { title: "Title 1", description: "Description 1" },
                { title: "Title 2", description: "Description 2" },
                { title: "Title 3", description: "Description 3" },
              ],
              table: { category: "Content" },
            },
          },
        },
        Template = (args) =>
          (0, jsx_runtime.jsx)(components_DescriptionList_DescriptionList, {
            direction: args.direction,
            items: args.items,
          }),
        Row = Template.bind({});
      Row.args = {
        direction: "row",
        items: [
          { title: "Title 1", description: "Description 1" },
          { title: "Title 2", description: "Description 2" },
          { title: "Title 3", description: "Description 3" },
        ],
      };
      const Column = Template.bind({});
      Column.args = {
        direction: "column",
        items: [
          { title: "Title 1", description: "Description 1" },
          { title: "Title 2", description: "Description 2" },
          { title: "Title 3", description: "Description 3" },
        ],
      };
      const __namedExportsOrder = ["Row", "Column"];
      (Row.parameters = {
        ...Row.parameters,
        docs: {
          ...Row.parameters?.docs,
          source: {
            originalSource:
              "args => {\n  return <DescriptionList direction={args.direction} items={args.items} />;\n}",
            ...Row.parameters?.docs?.source,
          },
        },
      }),
        (Column.parameters = {
          ...Column.parameters,
          docs: {
            ...Column.parameters?.docs,
            source: {
              originalSource:
                "args => {\n  return <DescriptionList direction={args.direction} items={args.items} />;\n}",
              ...Column.parameters?.docs?.source,
            },
          },
        });
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/DescriptionList/DescriptionList.scss":
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
          ".description-list-root{width:100%;display:flex;padding:var(--s-spacing-small) 0;justify-content:space-between;align-items:start;margin:0;margin-block-end:0;margin-block-start:0}.description-list-root.row{flex-direction:row}.description-list-root.row *{width:50%}.description-list-root.column{gap:var(--s-spacing-xx-small);flex-direction:column}.description-list-root .title{font:var(--s-typography-paragraph-strong);color:var(--s-color-content-default)}.description-list-root .description{font:var(--s-typography-paragraph-regular);color:var(--s-color-content-light)}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/DescriptionList/DescriptionList.scss",
            ],
            names: [],
            mappings:
              "AAAA,uBACE,UAAA,CACA,YAAA,CACA,gCAAA,CACA,6BAAA,CAEA,iBAAA,CACA,QAAA,CACA,kBAAA,CACA,oBAAA,CAEA,2BACE,kBAAA,CAEA,6BACE,SAAA,CAIJ,8BACE,6BAAA,CACA,qBAAA,CAGF,8BACE,yCAAA,CACA,oCAAA,CAGF,oCACE,0CAAA,CACA,kCAAA",
            sourcesContent: [
              ".description-list-root {\n  width: 100%;\n  display: flex;\n  padding: var(--s-spacing-small) 0;\n  justify-content: space-between;\n\n  align-items: start;\n  margin: 0;\n  margin-block-end: 0;\n  margin-block-start: 0;\n\n  &.row {\n    flex-direction: row;\n\n    * {\n      width: 50%;\n    }\n  }\n\n  &.column {\n    gap: var(--s-spacing-xx-small);\n    flex-direction: column;\n  }\n\n  .title {\n    font: var(--s-typography-paragraph-strong);\n    color: var(--s-color-content-default);\n  }\n\n  .description {\n    font: var(--s-typography-paragraph-regular);\n    color: var(--s-color-content-light);\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
