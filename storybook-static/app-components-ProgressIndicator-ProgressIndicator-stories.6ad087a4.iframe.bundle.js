"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [5709],
  {
    "./src/app/components/ProgressIndicator/ProgressIndicator.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          WidthFull: () => WidthFull,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => ProgressIndicator_stories,
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
        ProgressIndicator = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/ProgressIndicator/ProgressIndicator.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(ProgressIndicator.A, options);
      ProgressIndicator.A &&
        ProgressIndicator.A.locals &&
        ProgressIndicator.A.locals;
      const stateNames = {
          default: "circle",
          current: "trip_origin",
          error: "error",
          completed: "check_circle",
          disable: "circle",
        },
        ProgressIndicator_ProgressIndicator_ProgressIndicator = (param) => {
          let { step, description, state, direction, onClick, widthFull } =
            param;
          const displayName = stateNames[state] || state;
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsxs)("div", {
              className: "progress-indicator  "
                .concat(direction, " ")
                .concat(state),
              onClick,
              style: (function () {
                if (
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0]
                )
                  return { width: "100%" };
              })(widthFull),
              children: [
                (0, jsx_runtime.jsxs)("div", {
                  className: "header",
                  children: [
                    (0, jsx_runtime.jsx)("div", {
                      className: state,
                      children: (0, jsx_runtime.jsx)(Icon.A, {
                        icon: displayName,
                        size: "sm",
                        fill:
                          "check_circle" === displayName ||
                          "error" === displayName,
                      }),
                    }),
                    (0, jsx_runtime.jsx)("h1", { children: step }),
                  ],
                }),
                (0, jsx_runtime.jsx)("p", { children: description }),
              ],
            }),
          });
        },
        components_ProgressIndicator_ProgressIndicator =
          ProgressIndicator_ProgressIndicator_ProgressIndicator;
      try {
        (ProgressIndicator_ProgressIndicator_ProgressIndicator.displayName =
          "ProgressIndicator"),
          (ProgressIndicator_ProgressIndicator_ProgressIndicator.__docgenInfo =
            {
              description: "",
              displayName: "ProgressIndicator",
              props: {
                step: {
                  defaultValue: null,
                  description: "",
                  name: "step",
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
                state: {
                  defaultValue: null,
                  description: "",
                  name: "state",
                  required: !0,
                  type: {
                    name: "enum",
                    value: [
                      { value: '"default"' },
                      { value: '"current"' },
                      { value: '"completed"' },
                      { value: '"error"' },
                      { value: '"disable"' },
                    ],
                  },
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
                onClick: {
                  defaultValue: null,
                  description: "",
                  name: "onClick",
                  required: !1,
                  type: { name: "(() => void)" },
                },
                widthFull: {
                  defaultValue: null,
                  description: "",
                  name: "widthFull",
                  required: !1,
                  type: { name: "boolean" },
                },
              },
            }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/ProgressIndicator/ProgressIndicator.tsx#ProgressIndicator"
            ] = {
              docgenInfo:
                ProgressIndicator_ProgressIndicator_ProgressIndicator.__docgenInfo,
              name: "ProgressIndicator",
              path: "src/app/components/ProgressIndicator/ProgressIndicator.tsx#ProgressIndicator",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var _Default_parameters,
        _Default_parameters_docs,
        _Default_parameters1,
        _WidthFull_parameters,
        _WidthFull_parameters_docs,
        _WidthFull_parameters1;
      __webpack_require__("./src/app/styles.scss");
      const ProgressIndicator_stories = {
          title: "Components/Progress Indicator",
          component: components_ProgressIndicator_ProgressIndicator,
          argTypes: {},
          parameters: { ProgressIndicator: "padded" },
          tags: ["autodocs"],
        },
        Template = (args) =>
          (0, jsx_runtime.jsxs)("div", {
            style: {
              display: "flex",
              width: "100%",
              flexDirection: args.direction,
            },
            children: [
              (0, jsx_runtime.jsx)(
                components_ProgressIndicator_ProgressIndicator,
                {
                  direction: args.direction,
                  state: args.state1,
                  step: args.step1,
                  description: args.description1,
                  widthFull: args.widthFull1,
                },
              ),
              (0, jsx_runtime.jsx)(
                components_ProgressIndicator_ProgressIndicator,
                {
                  direction: args.direction,
                  state: args.state2,
                  step: args.step2,
                  description: args.description2,
                  widthFull: args.widthFull2,
                },
              ),
              (0, jsx_runtime.jsx)(
                components_ProgressIndicator_ProgressIndicator,
                {
                  direction: args.direction,
                  state: args.state3,
                  step: args.step3,
                  description: args.description3,
                  widthFull: args.widthFull3,
                },
              ),
              (0, jsx_runtime.jsx)(
                components_ProgressIndicator_ProgressIndicator,
                {
                  direction: args.direction,
                  state: args.state4,
                  step: args.step4,
                  description: args.description4,
                  widthFull: args.widthFull4,
                },
              ),
              (0, jsx_runtime.jsx)(
                components_ProgressIndicator_ProgressIndicator,
                {
                  direction: args.direction,
                  state: args.state5,
                  step: args.step5,
                  description: args.description5,
                  widthFull: args.widthFull5,
                },
              ),
            ],
          }),
        Default = Template.bind({});
      Default.args = {
        direction: "row",
        step1: "Step 1",
        description1: "Description 1",
        state1: "completed",
        widthFull1: !1,
        step2: "Step 2",
        description2: "Description 2",
        state2: "current",
        widthFull2: !1,
        step3: "Step 3",
        description3: "Description 3",
        state3: "default",
        widthFull3: !1,
        step4: "Step 4",
        description4: "Description 4",
        state4: "disable",
        widthFull4: !1,
        step5: "Step 5",
        description5: "Description 5",
        state5: "error",
        widthFull5: !1,
      };
      const WidthFull = Template.bind({});
      (WidthFull.args = {
        direction: "row",
        step1: "Step 1",
        description1: "Description 1",
        state1: "completed",
        widthFull1: !0,
        step2: "Step 2",
        description2: "Description 2",
        state2: "current",
        widthFull2: !0,
        step3: "Step 3",
        description3: "Description 3",
        state3: "default",
        widthFull3: !0,
        step4: "Step 4",
        description4: "Description 4",
        state4: "disable",
        widthFull4: !0,
        step5: "Step 5",
        description5: "Description 5",
        state5: "error",
        widthFull5: !0,
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
                'args => {\n  return <div style={{\n    display: "flex",\n    width: "100%",\n    flexDirection: args.direction\n  }}>\r\n      <ProgressIndicator direction={args.direction} state={args.state1} step={args.step1} description={args.description1} widthFull={args.widthFull1} />\r\n      <ProgressIndicator direction={args.direction} state={args.state2} step={args.step2} description={args.description2} widthFull={args.widthFull2} />\r\n      <ProgressIndicator direction={args.direction} state={args.state3} step={args.step3} description={args.description3} widthFull={args.widthFull3} />\r\n      <ProgressIndicator direction={args.direction} state={args.state4} step={args.step4} description={args.description4} widthFull={args.widthFull4} />\r\n      <ProgressIndicator direction={args.direction} state={args.state5} step={args.step5} description={args.description5} widthFull={args.widthFull5} />\r\n    </div>;\n}',
              ...(null === (_Default_parameters1 = Default.parameters) ||
              void 0 === _Default_parameters1 ||
              null === (_Default_parameters_docs = _Default_parameters1.docs) ||
              void 0 === _Default_parameters_docs
                ? void 0
                : _Default_parameters_docs.source),
            },
          },
        }),
        (WidthFull.parameters = {
          ...WidthFull.parameters,
          docs: {
            ...(null === (_WidthFull_parameters = WidthFull.parameters) ||
            void 0 === _WidthFull_parameters
              ? void 0
              : _WidthFull_parameters.docs),
            source: {
              originalSource:
                'args => {\n  return <div style={{\n    display: "flex",\n    width: "100%",\n    flexDirection: args.direction\n  }}>\r\n      <ProgressIndicator direction={args.direction} state={args.state1} step={args.step1} description={args.description1} widthFull={args.widthFull1} />\r\n      <ProgressIndicator direction={args.direction} state={args.state2} step={args.step2} description={args.description2} widthFull={args.widthFull2} />\r\n      <ProgressIndicator direction={args.direction} state={args.state3} step={args.step3} description={args.description3} widthFull={args.widthFull3} />\r\n      <ProgressIndicator direction={args.direction} state={args.state4} step={args.step4} description={args.description4} widthFull={args.widthFull4} />\r\n      <ProgressIndicator direction={args.direction} state={args.state5} step={args.step5} description={args.description5} widthFull={args.widthFull5} />\r\n    </div>;\n}',
              ...(null === (_WidthFull_parameters1 = WidthFull.parameters) ||
              void 0 === _WidthFull_parameters1 ||
              null ===
                (_WidthFull_parameters_docs = _WidthFull_parameters1.docs) ||
              void 0 === _WidthFull_parameters_docs
                ? void 0
                : _WidthFull_parameters_docs.source),
            },
          },
        });
      const __namedExportsOrder = ["Default", "WidthFull"];
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
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/ProgressIndicator/ProgressIndicator.scss":
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
          ".progress-indicator{text-wrap:nowrap;width:min-content;user-select:none;cursor:pointer;display:flex;flex-direction:column;align-items:start;justify-content:start;padding-top:var(--s-spacing-xx-small);padding-left:var(--s-spacing-x-small)}.progress-indicator.row{height:56px;border-top:var(--s-border-width-thin) solid var(--s-color-border-default)}.progress-indicator.row.current,.progress-indicator.row.completed{border-top-color:var(--s-color-border-highlight)}.progress-indicator.row.error,.progress-indicator.row.disable{border-top-color:var(--s-color-border-default)}.progress-indicator.column{height:64px}.progress-indicator.column.default{border-left:var(--s-border-width-thin) solid var(--s-color-border-default)}.progress-indicator.column.current,.progress-indicator.column.completed{border-left:var(--s-border-width-thin) solid var(--s-color-border-highlight)}.progress-indicator.column.error,.progress-indicator.column.disable{border-left:var(--s-border-width-thin) solid var(--s-color-border-default)}.progress-indicator.row,.progress-indicator.column{display:flex}.progress-indicator .header{display:flex;align-items:center;gap:var(--s-spacing-xx-small);font:var(--s-typography-paragraph-regular)}.progress-indicator .header h1{font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default)}.progress-indicator .header .default{color:var(--s-color-content-default)}.progress-indicator .header .error{color:var(--s-color-content-warning)}.progress-indicator .header .disable{color:var(--s-color-content-disable)}.progress-indicator .header .current,.progress-indicator .header .completed{color:var(--s-color-content-highlight)}.progress-indicator p{padding-left:var(--s-spacing-medium);font:var(--s-typography-caption-regular);color:var(--s-color-content-light)}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/ProgressIndicator/ProgressIndicator.scss",
            ],
            names: [],
            mappings:
              "AAAA,oBACE,gBAAA,CACA,iBAAA,CACA,gBAAA,CACA,cAAA,CACA,YAAA,CACA,qBAAA,CACA,iBAAA,CACA,qBAAA,CACA,qCAAA,CACA,qCAAA,CAEA,wBACE,WAAA,CACA,yEAAA,CAEA,kEAEE,gDAAA,CAGF,8DAEE,8CAAA,CAIJ,2BACE,WAAA,CACA,mCACE,0EAAA,CAIF,wEAEE,4EAAA,CAIF,oEAEE,0EAAA,CAKJ,mDAEE,YAAA,CAGF,4BACE,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,0CAAA,CAEA,+BACE,0CAAA,CACA,oCAAA,CAGF,qCACE,oCAAA,CAGF,mCACE,oCAAA,CAGF,qCACE,oCAAA,CAGF,4EAEE,sCAAA,CAIJ,sBACE,oCAAA,CACA,wCAAA,CACA,kCAAA",
            sourcesContent: [
              ".progress-indicator {\n  text-wrap: nowrap;\n  width: min-content;\n  user-select: none;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  justify-content: start;\n  padding-top: var(--s-spacing-xx-small);\n  padding-left: var(--s-spacing-x-small);\n\n  &.row {\n    height: 56px;\n    border-top: var(--s-border-width-thin) solid var(--s-color-border-default);\n\n    &.current,\n    &.completed {\n      border-top-color: var(--s-color-border-highlight);\n    }\n\n    &.error,\n    &.disable {\n      border-top-color: var(--s-color-border-default);\n    }\n  }\n\n  &.column {\n    height: 64px;\n    &.default {\n      border-left: var(--s-border-width-thin) solid\n        var(--s-color-border-default);\n    }\n\n    &.current,\n    &.completed {\n      border-left: var(--s-border-width-thin) solid\n        var(--s-color-border-highlight);\n    }\n\n    &.error,\n    &.disable {\n      border-left: var(--s-border-width-thin) solid\n        var(--s-color-border-default);\n    }\n  }\n\n  &.row,\n  &.column {\n    display: flex;\n  }\n\n  .header {\n    display: flex;\n    align-items: center;\n    gap: var(--s-spacing-xx-small);\n    font: var(--s-typography-paragraph-regular);\n\n    h1 {\n      font: var(--s-typography-paragraph-regular);\n      color: var(--s-color-content-default);\n    }\n\n    .default {\n      color: var(--s-color-content-default);\n    }\n\n    .error {\n      color: var(--s-color-content-warning);\n    }\n\n    .disable {\n      color: var(--s-color-content-disable);\n    }\n\n    .current,\n    .completed {\n      color: var(--s-color-content-highlight);\n    }\n  }\n\n  p {\n    padding-left: var(--s-spacing-medium);\n    font: var(--s-typography-caption-regular);\n    color: var(--s-color-content-light);\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
