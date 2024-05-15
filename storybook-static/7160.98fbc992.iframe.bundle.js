"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [7160],
  {
    "./src/app/components/FileUploader/FileUploader.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_FileUploader_FileUploader,
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
        FileUploader = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/FileUploader/FileUploader.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(FileUploader.A, options);
      FileUploader.A && FileUploader.A.locals && FileUploader.A.locals;
      var Loading = __webpack_require__(
          "./src/app/components/Loading/Loading.tsx",
        ),
        ButtonIcon = __webpack_require__(
          "./src/app/components/ButtonIcon/ButtonIcon.tsx",
        ),
        Icon = __webpack_require__("./src/app/components/Icon/Icon.tsx"),
        Button = __webpack_require__("./src/app/components/Button/Button.tsx");
      const FileUploader_FileUploader_FileUploader = (param) => {
          let {
            title,
            description,
            multiple,
            disabled,
            maxFileSize,
            buttonLabel,
            typeIconButton,
            onChange,
            value,
          } = param;
          const fileInputRef = (0, react.useRef)(null),
            [selectedFiles, setSelectedFiles] = (0, react.useState)([]),
            [isLoading, setIsLoading] = (0, react.useState)(!1),
            maxFileSizeBytes =
              void 0 !== maxFileSize ? 1024 * maxFileSize * 1024 : void 0;
          (0, react.useEffect)(() => {
            if (value && value.length > 0) {
              const updatedFiles = [];
              Array.from(value).forEach((file) => {
                const hasError =
                    void 0 !== maxFileSizeBytes && file.size > maxFileSizeBytes,
                  errorMessage = hasError
                    ? 'O tamanho do arquivo "'
                        .concat(file.name, '" excede o limite de ')
                        .concat(maxFileSize, " MB.")
                    : null;
                updatedFiles.push({ file, hasError, errorMessage }),
                  hasError || handleFile(file);
              }),
                setSelectedFiles(updatedFiles);
            } else setSelectedFiles([]);
          }, [value, maxFileSizeBytes]);
          const handleFile = (file) => {
              setIsLoading(!0);
              const reader = new FileReader();
              (reader.onload = () => {
                setIsLoading(!1);
              }),
                (reader.onerror = () => {
                  setIsLoading(!1);
                }),
                reader.readAsDataURL(file);
            },
            [tamanhoPai, setTamanhoPai] = (0, react.useState)(null);
          (0, react.useEffect)(() => {
            const updateTamanhoPai = () => {
              const paiElement = document.querySelector(".file-uploader");
              paiElement && setTamanhoPai(paiElement.offsetWidth);
            };
            return (
              updateTamanhoPai(),
              window.addEventListener("resize", updateTamanhoPai),
              () => {
                window.removeEventListener("resize", updateTamanhoPai);
              }
            );
          }, []);
          const estiloFilha = tamanhoPai
            ? { maxWidth: "calc(".concat(tamanhoPai, "px - 60px)") }
            : {};
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsxs)("div", {
              className: "file-uploader",
              children: [
                (0, jsx_runtime.jsxs)("div", {
                  className: "file-uploader-header",
                  children: [
                    (0, jsx_runtime.jsx)("h1", { children: title }),
                    (0, jsx_runtime.jsxs)("div", {
                      className: "file-uploader-button",
                      children: [
                        (0, jsx_runtime.jsx)("input", {
                          disabled,
                          type: "file",
                          ref: fileInputRef,
                          multiple: !!multiple,
                          style: { display: "none" },
                          onChange: async (event) => {
                            const files = event.target.files;
                            if (files && files.length > 0) {
                              const updatedFiles = [];
                              Array.from(files).forEach((file) => {
                                const hasError =
                                    void 0 !== maxFileSizeBytes &&
                                    file.size > maxFileSizeBytes,
                                  errorMessage = hasError
                                    ? 'O tamanho do arquivo "'
                                        .concat(
                                          file.name,
                                          '" excede o limite de ',
                                        )
                                        .concat(maxFileSize, " MB.")
                                    : null;
                                updatedFiles.push({
                                  file,
                                  hasError,
                                  errorMessage,
                                }),
                                  hasError || handleFile(file);
                              }),
                                (event.target.value = ""),
                                !1 === multiple &&
                                  setSelectedFiles(updatedFiles),
                                !0 === multiple &&
                                  setSelectedFiles((prevFiles) => [
                                    ...prevFiles,
                                    ...updatedFiles,
                                  ]);
                              const updatedFileList = new DataTransfer();
                              updatedFiles.forEach((fileObj) => {
                                updatedFileList.items.add(fileObj.file);
                              }),
                                onChange(
                                  updatedFileList.files.length > 0
                                    ? updatedFileList.files
                                    : null,
                                );
                            }
                          },
                        }),
                        (0, jsx_runtime.jsx)(Button.A, {
                          variant: "primary",
                          disabled,
                          onClick: () => {
                            fileInputRef.current &&
                              fileInputRef.current.click();
                          },
                          label: buttonLabel,
                          typeIcon: typeIconButton,
                          size: "md",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)("div", {
                  className: "file-uploader-footer",
                  children: [
                    (0, jsx_runtime.jsx)("p", { children: description }),
                    selectedFiles.length > 0 &&
                      (0, jsx_runtime.jsx)("ul", {
                        className: "file-uploader-items",
                        children: selectedFiles.map((fileObj, index) =>
                          (0, jsx_runtime.jsxs)(
                            "li",
                            {
                              className: "file-uploader-item ".concat(
                                fileObj.hasError
                                  ? "file-uploader-item-error"
                                  : "",
                              ),
                              children: [
                                (0, jsx_runtime.jsxs)("div", {
                                  className: "file-uploaded ".concat(
                                    fileObj.hasError
                                      ? "file-uploaded-error"
                                      : "",
                                  ),
                                  children: [
                                    (0, jsx_runtime.jsx)("p", {
                                      style: estiloFilha,
                                      children: fileObj.file.name,
                                    }),
                                    (0, jsx_runtime.jsxs)("p", {
                                      className: "file-uploaded-icon",
                                      children: [
                                        isLoading &&
                                          (0, jsx_runtime.jsx)(Loading.A, {
                                            variant: "default",
                                          }),
                                        (0, jsx_runtime.jsx)("div", {
                                          className: "file-uploader-icon-error",
                                          children:
                                            fileObj.hasError &&
                                            (0, jsx_runtime.jsx)(Icon.A, {
                                              icon: "error_outline",
                                              size: "sm",
                                            }),
                                        }),
                                        (0, jsx_runtime.jsx)(ButtonIcon.A, {
                                          variant: "primary",
                                          type: "plain",
                                          onClick: () =>
                                            ((index) => {
                                              const updatedFiles = [
                                                ...selectedFiles,
                                              ];
                                              updatedFiles.splice(index, 1)[0],
                                                setSelectedFiles(updatedFiles);
                                              const updatedFileList =
                                                  updatedFiles.map(
                                                    (fileObj) => fileObj.file,
                                                  ),
                                                updatedFileListAsFileList =
                                                  new DataTransfer();
                                              updatedFileList.forEach(
                                                (file) => {
                                                  updatedFileListAsFileList.items.add(
                                                    file,
                                                  );
                                                },
                                              ),
                                                onChange(
                                                  updatedFileListAsFileList
                                                    .files.length > 0
                                                    ? updatedFileListAsFileList.files
                                                    : null,
                                                );
                                            })(index),
                                          size: "sm",
                                          typeIcon: "close",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                fileObj.hasError &&
                                  fileObj.errorMessage &&
                                  (0, jsx_runtime.jsx)("p", {
                                    className: "file-uploader-error",
                                    children: fileObj.errorMessage,
                                  }),
                              ],
                            },
                            index,
                          ),
                        ),
                      }),
                  ],
                }),
              ],
            }),
          });
        },
        components_FileUploader_FileUploader =
          FileUploader_FileUploader_FileUploader;
      FileUploader_FileUploader_FileUploader.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "FileUploader",
        props: {
          title: { required: !0, tsType: { name: "string" }, description: "" },
          description: {
            required: !1,
            tsType: { name: "string" },
            description: "",
          },
          multiple: {
            required: !1,
            tsType: { name: "boolean" },
            description: "",
          },
          disabled: {
            required: !1,
            tsType: {
              name: "union",
              raw: "boolean | undefined",
              elements: [{ name: "boolean" }, { name: "undefined" }],
            },
            description: "",
          },
          maxFileSize: {
            required: !1,
            tsType: { name: "number" },
            description: "",
          },
          buttonLabel: {
            required: !0,
            tsType: { name: "string" },
            description: "",
          },
          typeIconButton: {
            required: !0,
            tsType: { name: "string" },
            description: "",
          },
          onChange: {
            required: !0,
            tsType: {
              name: "signature",
              type: "function",
              raw: "(files: FileList | null) => void",
              signature: {
                arguments: [
                  {
                    type: {
                      name: "union",
                      raw: "FileList | null",
                      elements: [{ name: "FileList" }, { name: "null" }],
                    },
                    name: "files",
                  },
                ],
                return: { name: "void" },
              },
            },
            description: "",
          },
          value: {
            required: !1,
            tsType: {
              name: "union",
              raw: "FileList | null",
              elements: [{ name: "FileList" }, { name: "null" }],
            },
            description: "",
          },
        },
      };
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/FileUploader/FileUploader.scss":
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
          ".file-uploader{display:flex;flex-direction:column;gap:var(--s-spacing-x-small);max-width:100%}.file-uploader p{font:var(--s-typography-caption-regular);color:var(--s-color-content-light);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.file-uploader .file-uploader-header{display:flex;flex-direction:column;gap:var(--s-spacing-nano)}.file-uploader .file-uploader-header h1{font:var(--s-typography-label-medium);color:var(--s-color-content-default)}.file-uploader .file-uploader-button{width:fit-content}.file-uploader .file-uploader-footer{display:flex;flex-direction:column;gap:var(--s-spacing-nano)}.file-uploader .file-uploader-items{display:flex;flex-direction:column;gap:var(--s-spacing-small)}.file-uploader .file-uploader-items .file-uploader-item{display:flex;flex-direction:column;cursor:pointer;border-radius:var(--s-border-radius-small);background-color:var(--s-color-fill-default-light);color:var(--s-color-content-default)}.file-uploader .file-uploader-items .file-uploader-item.file-uploader-item-error{border:var(--s-border-width-hairline) solid var(--s-color-border-warning);background-color:var(--s-color-fill-default)}.file-uploader .file-uploader-items .file-uploader-item .file-uploaded{padding:var(--s-spacing-xx-small) var(--s-spacing-small);display:flex;flex-direction:row;width:100%;justify-content:space-between;align-items:center;font:var(--s-typography-paragraph-regular)}.file-uploader .file-uploader-items .file-uploader-item .file-uploaded.file-uploaded-error{border-bottom:var(--s-border-width-hairline) solid var(--s-color-border-warning)}.file-uploader .file-uploader-items .file-uploader-item .file-uploaded .file-uploaded-icon{display:flex;gap:var(--s-spacing-nano);align-items:center}.file-uploader .file-uploader-items .file-uploader-item .file-uploaded .file-uploaded-icon .file-uploader-icon-error{color:var(--s-color-content-warning)}.file-uploader .file-uploader-items .file-uploader-item .file-uploader-error{padding:var(--s-spacing-xx-small) var(--s-spacing-small);color:var(--s-color-content-warning);font:var(--s-typography-paragraph-regular)}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/FileUploader/FileUploader.scss",
            ],
            names: [],
            mappings:
              "AAAA,eACE,YAAA,CACA,qBAAA,CACA,4BAAA,CACA,cAAA,CAEA,iBACE,wCAAA,CACA,kCAAA,CACA,sBAAA,CACA,kBAAA,CACA,eAAA,CAGF,qCACE,YAAA,CACA,qBAAA,CACA,yBAAA,CAEA,wCACE,qCAAA,CACA,oCAAA,CAGJ,qCACE,iBAAA,CAGF,qCACE,YAAA,CACA,qBAAA,CACA,yBAAA,CAGF,oCACE,YAAA,CACA,qBAAA,CACA,0BAAA,CAEA,wDACE,YAAA,CACA,qBAAA,CACA,cAAA,CACA,0CAAA,CACA,kDAAA,CACA,oCAAA,CAEA,iFACE,yEAAA,CAEA,4CAAA,CAGF,uEACE,wDAAA,CACA,YAAA,CACA,kBAAA,CACA,UAAA,CACA,6BAAA,CACA,kBAAA,CACA,0CAAA,CAEA,2FACE,gFAAA,CAIF,2FACE,YAAA,CACA,yBAAA,CACA,kBAAA,CAEA,qHACE,oCAAA,CAKN,6EACE,wDAAA,CACA,oCAAA,CACA,0CAAA",
            sourcesContent: [
              ".file-uploader {\n  display: flex;\n  flex-direction: column;\n  gap: var(--s-spacing-x-small);\n  max-width: 100%;\n\n  p {\n    font: var(--s-typography-caption-regular);\n    color: var(--s-color-content-light);\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n\n  .file-uploader-header {\n    display: flex;\n    flex-direction: column;\n    gap: var(--s-spacing-nano);\n\n    h1 {\n      font: var(--s-typography-label-medium);\n      color: var(--s-color-content-default);\n    }\n  }\n  .file-uploader-button {\n    width: fit-content;\n  }\n\n  .file-uploader-footer {\n    display: flex;\n    flex-direction: column;\n    gap: var(--s-spacing-nano);\n  }\n\n  .file-uploader-items {\n    display: flex;\n    flex-direction: column;\n    gap: var(--s-spacing-small);\n\n    .file-uploader-item {\n      display: flex;\n      flex-direction: column;\n      cursor: pointer;\n      border-radius: var(--s-border-radius-small);\n      background-color: var(--s-color-fill-default-light);\n      color: var(--s-color-content-default);\n\n      &.file-uploader-item-error {\n        border: var(--s-border-width-hairline) solid\n          var(--s-color-border-warning);\n        background-color: var(--s-color-fill-default);\n      }\n\n      .file-uploaded {\n        padding: var(--s-spacing-xx-small) var(--s-spacing-small);\n        display: flex;\n        flex-direction: row;\n        width: 100%;\n        justify-content: space-between;\n        align-items: center;\n        font: var(--s-typography-paragraph-regular);\n\n        &.file-uploaded-error {\n          border-bottom: var(--s-border-width-hairline) solid\n            var(--s-color-border-warning);\n        }\n\n        .file-uploaded-icon {\n          display: flex;\n          gap: var(--s-spacing-nano);\n          align-items: center;\n\n          .file-uploader-icon-error {\n            color: var(--s-color-content-warning);\n          }\n        }\n      }\n\n      .file-uploader-error {\n        padding: var(--s-spacing-xx-small) var(--s-spacing-small);\n        color: var(--s-color-content-warning);\n        font: var(--s-typography-paragraph-regular);\n      }\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
