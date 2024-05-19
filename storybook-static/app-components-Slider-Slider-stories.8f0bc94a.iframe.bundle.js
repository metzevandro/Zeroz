"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [8561],
  {
    "./src/app/components/Slider/Slider.stories.tsx": (
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
      var _Default_parameters, _Default_parameters_docs, _Default_parameters1;
      __webpack_require__("./src/app/styles.scss");
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Components/Slider",
          component: __webpack_require__(
            "./src/app/components/Slider/Slider.tsx",
          ).A,
          tags: ["autodocs"],
        },
        Default = {
          args: { label: "Label", value: "5", max: 10, min: 0, step: 1 },
        };
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...(null === (_Default_parameters = Default.parameters) ||
          void 0 === _Default_parameters
            ? void 0
            : _Default_parameters.docs),
          source: {
            originalSource:
              '{\n  args: {\n    label: "Label",\n    value: "5",\n    max: 10,\n    min: 0,\n    step: 1\n  }\n}',
            ...(null === (_Default_parameters1 = Default.parameters) ||
            void 0 === _Default_parameters1 ||
            null === (_Default_parameters_docs = _Default_parameters1.docs) ||
            void 0 === _Default_parameters_docs
              ? void 0
              : _Default_parameters_docs.source),
          },
        },
      };
      const __namedExportsOrder = ["Default"];
    },
    "./src/app/components/Slider/Slider.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_Slider_Slider,
      });
      var jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        react = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
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
        Slider = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Slider/Slider.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Slider.A, options);
      Slider.A && Slider.A.locals && Slider.A.locals;
      const Slider_Slider_Slider = (param) => {
          let { step, min, max, value, label, onChange } = param;
          const [progress, setProgress] = (0, react.useState)(
              ((parseInt(value) - min) / (max - min)) * 100,
            ),
            [currentValue, setCurrentValue] = (0, react.useState)(value),
            isDragging = (0, react.useRef)(!1);
          (0, react.useEffect)(() => {
            const newValue = parseInt(value);
            setCurrentValue(value),
              setProgress(((newValue - min) / (max - min)) * 100);
          }, [value, min, max]);
          const updateProgress = (newValue) => {
              const clampedValue = Math.min(Math.max(newValue, min), max);
              setProgress(((clampedValue - min) / (max - min)) * 100),
                setCurrentValue(String(clampedValue)),
                onChange && onChange(String(clampedValue));
            },
            handleSliderClick = (e) => {
              ((e) => {
                if (
                  ((isDragging.current = !0),
                  window.addEventListener("mousemove", handleDragMove),
                  window.addEventListener("touchmove", handleDragMove),
                  window.addEventListener("mouseup", handleDragEnd),
                  window.addEventListener("touchend", handleDragEnd),
                  e instanceof MouseEvent)
                ) {
                  const { clientX, clientY } = e;
                  handleDragMove({ clientX, clientY });
                } else if (e instanceof TouchEvent) {
                  const { touches } = e;
                  if (touches.length > 0) {
                    const { clientX, clientY } = touches[0];
                    handleDragMove({ clientX, clientY });
                  }
                }
              })(e);
            },
            handleDragMove = (e) => {
              const clientX =
                e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
              e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
              if (isDragging.current) {
                const slider = document.getElementById("slider-background");
                if (slider) {
                  const rect = slider.getBoundingClientRect();
                  let rawPercentage =
                    ((clientX - rect.left) / rect.width) * 100;
                  rawPercentage > 100
                    ? (rawPercentage = 100)
                    : rawPercentage < 0 && (rawPercentage = 0);
                  const calculatedValue =
                      (rawPercentage / 100) * (max - min) + min,
                    alignedValue = Math.round(calculatedValue / step) * step;
                  updateProgress(alignedValue);
                }
              }
            },
            handleDragEnd = () => {
              (isDragging.current = !1),
                window.removeEventListener("mousemove", handleDragMove),
                window.removeEventListener("touchmove", handleDragMove),
                window.removeEventListener("mouseup", handleDragEnd),
                window.removeEventListener("touchend", handleDragEnd);
            };
          return (0, jsx_runtime.jsxs)("div", {
            className: "slider",
            children: [
              (0, jsx_runtime.jsx)("label", {
                className: "slider-label",
                htmlFor: "sliderInput",
                children: label,
              }),
              (0, jsx_runtime.jsxs)("div", {
                className: "slider-container",
                children: [
                  (0, jsx_runtime.jsx)("div", {
                    className: "slider-max-min",
                    children: min,
                  }),
                  (0, jsx_runtime.jsx)("div", {
                    style: {
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      cursor: "grabbing",
                    },
                    children: (0, jsx_runtime.jsxs)("div", {
                      id: "slider-background",
                      className: "slider-background",
                      onMouseDown: (e) => handleSliderClick(e),
                      children: [
                        (0, jsx_runtime.jsx)("div", {
                          className: "slider-progress-bar",
                          style: { width: "".concat(progress, "%") },
                        }),
                        (0, jsx_runtime.jsx)("div", {
                          className: "slider-button",
                          tabIndex: 0,
                          style: {
                            left: "calc(".concat(progress, "% - 10px)"),
                          },
                          onKeyDown: (e) => {
                            if (
                              "ArrowLeft" === e.key ||
                              "ArrowRight" === e.key
                            ) {
                              e.preventDefault();
                              const change =
                                "ArrowLeft" === e.key ? -step : step;
                              let newValue = parseInt(currentValue) + change;
                              const alignedValue =
                                Math.round(newValue / step) * step;
                              (newValue = Math.min(
                                Math.max(alignedValue, min),
                                max,
                              )),
                                updateProgress(newValue);
                            }
                          },
                        }),
                      ],
                    }),
                  }),
                  (0, jsx_runtime.jsx)("div", {
                    className: "slider-max-min",
                    children: max,
                  }),
                  (0, jsx_runtime.jsx)("input", {
                    inputMode: "numeric",
                    className: "slider-input",
                    type: "number",
                    min,
                    max,
                    step,
                    value: currentValue,
                    onChange: (e) => {
                      const newValue = parseInt(e.target.value);
                      updateProgress(newValue);
                    },
                    id: "sliderInput",
                  }),
                ],
              }),
            ],
          });
        },
        components_Slider_Slider = Slider_Slider_Slider;
      try {
        (Slider_Slider_Slider.displayName = "Slider"),
          (Slider_Slider_Slider.__docgenInfo = {
            description: "",
            displayName: "Slider",
            props: {
              step: {
                defaultValue: null,
                description: "",
                name: "step",
                required: !0,
                type: { name: "number" },
              },
              min: {
                defaultValue: null,
                description: "",
                name: "min",
                required: !0,
                type: { name: "number" },
              },
              max: {
                defaultValue: null,
                description: "",
                name: "max",
                required: !0,
                type: { name: "number" },
              },
              value: {
                defaultValue: null,
                description: "",
                name: "value",
                required: !0,
                type: { name: "string" },
              },
              label: {
                defaultValue: null,
                description: "",
                name: "label",
                required: !1,
                type: { name: "string" },
              },
              onChange: {
                defaultValue: null,
                description: "",
                name: "onChange",
                required: !1,
                type: { name: "((value: string) => void)" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Slider/Slider.tsx#Slider"
            ] = {
              docgenInfo: Slider_Slider_Slider.__docgenInfo,
              name: "Slider",
              path: "src/app/components/Slider/Slider.tsx#Slider",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Slider/Slider.scss":
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
          ".slider{display:flex;flex-direction:column;gap:var(--s-spacing-nano);min-width:250px}.slider .slider-label{font:var(--s-typography-label-medium);color:var(--s-color-content-default)}.slider .slider-container{display:flex;gap:var(--s-spacing-x-small);align-items:center}.slider .slider-container .slider-max-min{color:var(--s-color-content-default);font:var(--s-typography-paragraph-regular)}.slider .slider-container .slider-background{width:100%;height:4px;position:relative;border-radius:150px;background-color:var(--s-color-fill-default-light)}.slider .slider-container .slider-progress-bar{border-radius:150px;height:100%;background-color:var(--s-color-fill-highlight);transition:.01s width ease-in-out}.slider .slider-container .slider-button{cursor:grab;background-color:var(--s-color-fill-highlight);width:16px;height:16px;border-radius:var(--s-border-radius-pill);position:absolute;top:50%;transform:translateY(-50%);z-index:2;transition:.01s left ease-in-out}.slider .slider-container .slider-button:hover{width:20px;height:20px}.slider .slider-container .slider-button:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.slider .slider-container .slider-input{min-width:64px;max-height:min-content;padding:var(--s-spacing-xx-small) var(--s-spacing-x-small);text-align:left;border:var(--s-border-width-hairline) solid var(--s-color-border-default);border-radius:var(--s-border-radius-small);font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default);background-color:var(--s-color-fill-default)}.slider .slider-container .slider-input:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Slider/Slider.scss"],
            names: [],
            mappings:
              "AAAA,QACE,YAAA,CACA,qBAAA,CACA,yBAAA,CACA,eAAA,CAEA,sBACE,qCAAA,CACA,oCAAA,CAGF,0BACE,YAAA,CACA,4BAAA,CACA,kBAAA,CAEA,0CACE,oCAAA,CACA,0CAAA,CAGF,6CACE,UAAA,CACA,UAAA,CACA,iBAAA,CACA,mBAAA,CACA,kDAAA,CAGF,+CACE,mBAAA,CACA,WAAA,CACA,8CAAA,CACA,iCAAA,CAGF,yCACE,WAAA,CACA,8CAAA,CACA,UAAA,CACA,WAAA,CACA,yCAAA,CACA,iBAAA,CACA,OAAA,CACA,0BAAA,CACA,SAAA,CACA,gCAAA,CACA,+CACE,UAAA,CACA,WAAA,CAGF,uDACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CAIJ,wCACE,cAAA,CACA,sBAAA,CACA,0DAAA,CACA,eAAA,CACA,yEAAA,CACA,0CAAA,CACA,0CAAA,CACA,oCAAA,CACA,4CAAA,CAEA,sDACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA",
            sourcesContent: [
              ".slider {\n  display: flex;\n  flex-direction: column;\n  gap: var(--s-spacing-nano);\n  min-width: 250px;\n\n  .slider-label {\n    font: var(--s-typography-label-medium);\n    color: var(--s-color-content-default);\n  }\n\n  .slider-container {\n    display: flex;\n    gap: var(--s-spacing-x-small);\n    align-items: center;\n\n    .slider-max-min {\n      color: var(--s-color-content-default);\n      font: var(--s-typography-paragraph-regular);\n    }\n\n    .slider-background {\n      width: 100%;\n      height: 4px;\n      position: relative;\n      border-radius: 150px;\n      background-color: var(--s-color-fill-default-light);\n    }\n\n    .slider-progress-bar {\n      border-radius: 150px;\n      height: 100%;\n      background-color: var(--s-color-fill-highlight);\n      transition: 0.01s width ease-in-out;\n    }\n\n    .slider-button {\n      cursor: grab;\n      background-color: var(--s-color-fill-highlight);\n      width: 16px;\n      height: 16px;\n      border-radius: var(--s-border-radius-pill);\n      position: absolute;\n      top: 50%;\n      transform: translateY(-50%);\n      z-index: 2;\n      transition: 0.01s left ease-in-out;\n      &:hover {\n        width: 20px;\n        height: 20px;\n      }\n\n      &:focus-visible {\n        outline-width: var(--s-border-width-thin);\n        outline-color: var(--s-color-fill-highlight);\n        outline-offset: var(--s-border-width-thin);\n        outline-style: solid;\n      }\n    }\n\n    .slider-input {\n      min-width: 64px;\n      max-height: min-content;\n      padding: var(--s-spacing-xx-small) var(--s-spacing-x-small);\n      text-align: left;\n      border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n      border-radius: var(--s-border-radius-small);\n      font: var(--s-typography-paragraph-regular);\n      color: var(--s-color-content-default);\n      background-color: var(--s-color-fill-default);\n\n      &:focus-visible {\n        outline-width: var(--s-border-width-thin);\n        outline-color: var(--s-color-fill-highlight);\n        outline-offset: var(--s-border-width-thin);\n        outline-style: solid;\n      }\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
