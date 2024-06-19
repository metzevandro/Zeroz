"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [436],
  {
    "./src/app/components/ImageUploader/ImageUploader.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_ImageUploader_ImageUploader,
      });
      var jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        react = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        ),
        Icon = __webpack_require__("./src/app/components/Icon/Icon.tsx"),
        Loading = __webpack_require__(
          "./src/app/components/Loading/Loading.tsx",
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
        ImageUploader = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/ImageUploader/ImageUploader.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(ImageUploader.A, options);
      ImageUploader.A && ImageUploader.A.locals && ImageUploader.A.locals;
      var ButtonIcon = __webpack_require__(
          "./src/app/components/ButtonIcon/ButtonIcon.tsx",
        ),
        console = __webpack_require__(
          "./node_modules/console-browserify/index.js",
        );
      const ImageUploader_ImageUploader_ImageUploader = (param) => {
          let {
            proportion,
            maxFileSize,
            description,
            title,
            disable,
            multiple,
            labelDropzone,
            iconDropzone,
            onChange,
            value,
          } = param;
          const [selectedFiles, setSelectedFiles] = (0, react.useState)(
              void 0 !== value ? value : null,
            ),
            [imagePreviews, setImagePreviews] = (0, react.useState)([]),
            [isLoading, setIsLoading] = (0, react.useState)(!1),
            fileInputRef = (0, react.useRef)(null),
            maxFileSizeBytes =
              void 0 !== maxFileSize ? 1024 * maxFileSize * 1024 : void 0,
            [errorMessage, setErrorMessage] = (0, react.useState)(null),
            [fileRemoved, setFileRemoved] = (0, react.useState)(!1);
          (0, react.useEffect)(() => {
            setSelectedFiles(void 0 !== value ? value : null);
          }, [value]),
            (0, react.useEffect)(() => {
              if (!selectedFiles) return void setImagePreviews([]);
              const readerPromises = [];
              Array.from(selectedFiles).forEach((file) => {
                readerPromises.push(
                  new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    (reader.onload = () => {
                      "string" == typeof reader.result
                        ? resolve(reader.result)
                        : reject(
                            new Error("Failed to convert file to data URL."),
                          );
                    }),
                      (reader.onerror = reject),
                      reader.readAsDataURL(file);
                  }),
                );
              }),
                Promise.all(readerPromises)
                  .then((results) => {
                    setImagePreviews(results);
                  })
                  .catch((error) => {
                    console.error("Error loading image previews:", error),
                      setImagePreviews([]);
                  });
            }, [selectedFiles]);
          const handleFile = async (file) =>
            new Promise((resolve, reject) => {
              const reader = new FileReader();
              (reader.onloadend = () => {
                setImagePreviews((prevPreviews) => [
                  ...prevPreviews,
                  reader.result,
                ]),
                  resolve();
              }),
                (reader.onerror = () => {
                  reject(new Error("Failed to read the file."));
                }),
                reader.readAsDataURL(file);
            });
          return (0, jsx_runtime.jsxs)("div", {
            className: "image-uploader",
            onDragOver: (event) => {
              event.preventDefault();
            },
            onDrop: (event) => {
              event.preventDefault();
              const files = event.dataTransfer.files;
              files && files.length > 0 && handleFile(files[0]);
            },
            children: [
              (0, jsx_runtime.jsx)("p", {
                className: "image-uploader-title",
                children: title,
              }),
              (0, jsx_runtime.jsxs)("div", {
                className: "image-previews",
                children: [
                  selectedFiles &&
                    imagePreviews &&
                    !isLoading &&
                    (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
                      children: Array.from(selectedFiles).map((file, index) =>
                        (0, jsx_runtime.jsxs)(
                          "div",
                          {
                            className: "image-uploader-item",
                            children: [
                              (0, jsx_runtime.jsx)("div", {
                                className: "delete-button-container",
                                children: (0, jsx_runtime.jsx)("div", {
                                  className: "delete-button",
                                  children: (0, jsx_runtime.jsx)(ButtonIcon.A, {
                                    size: "sm",
                                    type: "default",
                                    variant: "secondary",
                                    typeIcon: "delete",
                                    onClick: () =>
                                      ((index) => {
                                        const updatedFiles = Array.from(
                                          selectedFiles || [],
                                        );
                                        updatedFiles.splice(index, 1);
                                        const dataTransfer = new DataTransfer();
                                        updatedFiles.forEach((file) =>
                                          dataTransfer.items.add(file),
                                        );
                                        const newFileList = dataTransfer.files;
                                        setSelectedFiles(newFileList),
                                          onChange(newFileList),
                                          setImagePreviews((prevPreviews) => {
                                            const newPreviews = [
                                              ...prevPreviews,
                                            ];
                                            return (
                                              newPreviews.splice(index, 1),
                                              newPreviews
                                            );
                                          }),
                                          setFileRemoved(!0);
                                      })(index),
                                    disable,
                                  }),
                                }),
                              }),
                              (0, jsx_runtime.jsx)("img", {
                                style: {
                                  aspectRatio: "calc(".concat(proportion, ")"),
                                },
                                src:
                                  imagePreviews && imagePreviews[index]
                                    ? imagePreviews[index]
                                    : "",
                                alt: "Preview",
                                className: "image-preview",
                              }),
                            ],
                          },
                          index,
                        ),
                      ),
                    }),
                  (multiple || !selectedFiles || 0 === selectedFiles.length) &&
                    (0, jsx_runtime.jsxs)("div", {
                      className: "image-uploader-content "
                        .concat(
                          disable ? "image-uploader-content-disabled" : "",
                          " ",
                        )
                        .concat(
                          (!multiple && fileRemoved) ||
                            (multiple &&
                              (!selectedFiles || 0 === selectedFiles.length))
                            ? ""
                            : "hidden",
                        ),
                      style: { aspectRatio: "calc(".concat(proportion, ")") },
                      children: [
                        (0, jsx_runtime.jsx)("input", {
                          type: "file",
                          accept: "image/*",
                          onChange: async (event) => {
                            const files = event.target.files;
                            if (
                              (setIsLoading(!0),
                              setFileRemoved(!1),
                              files && files.length > 0)
                            ) {
                              const updatedFiles = selectedFiles
                                ? Array.from(selectedFiles)
                                : [];
                              try {
                                const promises = Array.from(files).map(
                                  async (file) => {
                                    file.size > (maxFileSizeBytes || 1 / 0)
                                      ? setErrorMessage(
                                          "File ".concat(
                                            file.name,
                                            " exceeds the maximum file size limit.",
                                          ),
                                        )
                                      : (await handleFile(file),
                                        updatedFiles.push(file));
                                  },
                                );
                                await Promise.all(promises);
                                const newFileList = new DataTransfer();
                                updatedFiles.forEach((file) =>
                                  newFileList.items.add(file),
                                ),
                                  setSelectedFiles(newFileList.files),
                                  onChange(newFileList.files),
                                  (event.target.value = "");
                              } catch (error) {
                                setErrorMessage("Error handling files.");
                              } finally {
                                setIsLoading(!1);
                              }
                            }
                          },
                          ref: fileInputRef,
                          disabled: disable,
                          style: { display: "none" },
                          multiple,
                        }),
                        (0, jsx_runtime.jsx)("div", {
                          className: "".concat(
                            isLoading ? "hidden" : "uploader-item",
                          ),
                          children: (0, jsx_runtime.jsxs)("button", {
                            onClick: () => {
                              var _fileInputRef_current;
                              null ===
                                (_fileInputRef_current =
                                  fileInputRef.current) ||
                                void 0 === _fileInputRef_current ||
                                _fileInputRef_current.click();
                            },
                            style: {
                              aspectRatio: "calc(".concat(proportion, ")"),
                            },
                            className: "image-uploader-dropzone ".concat(
                              disable ? "image-uploader-dropzone-disabled" : "",
                            ),
                            children: [
                              (0, jsx_runtime.jsx)(Icon.A, {
                                icon: iconDropzone,
                                size: "md",
                              }),
                              (0, jsx_runtime.jsx)("p", {
                                children: labelDropzone,
                              }),
                            ],
                          }),
                        }),
                        isLoading &&
                          (0, jsx_runtime.jsx)("div", {
                            className: "loading-screen",
                            children: (0, jsx_runtime.jsx)(Loading.A, {
                              variant: "default",
                            }),
                          }),
                      ],
                    }),
                ],
              }),
              errorMessage &&
                (0, jsx_runtime.jsx)("p", {
                  className: "image-uploader-error-message",
                  children: errorMessage,
                }),
              description &&
                (0, jsx_runtime.jsx)("p", {
                  className: "image-uploader-description",
                  children: description,
                }),
            ],
          });
        },
        components_ImageUploader_ImageUploader =
          ImageUploader_ImageUploader_ImageUploader;
      try {
        (ImageUploader_ImageUploader_ImageUploader.displayName =
          "ImageUploader"),
          (ImageUploader_ImageUploader_ImageUploader.__docgenInfo = {
            description: "",
            displayName: "ImageUploader",
            props: {
              proportion: {
                defaultValue: null,
                description: "",
                name: "proportion",
                required: !0,
                type: {
                  name: "enum",
                  value: [
                    { value: '"9/16"' },
                    { value: '"16/9"' },
                    { value: '"1/1"' },
                  ],
                },
              },
              description: {
                defaultValue: null,
                description: "",
                name: "description",
                required: !1,
                type: { name: "string" },
              },
              title: {
                defaultValue: null,
                description: "",
                name: "title",
                required: !1,
                type: { name: "string" },
              },
              disable: {
                defaultValue: null,
                description: "",
                name: "disable",
                required: !1,
                type: { name: "boolean" },
              },
              multiple: {
                defaultValue: null,
                description: "",
                name: "multiple",
                required: !1,
                type: { name: "boolean" },
              },
              maxFileSize: {
                defaultValue: null,
                description: "",
                name: "maxFileSize",
                required: !1,
                type: { name: "number" },
              },
              labelDropzone: {
                defaultValue: null,
                description: "",
                name: "labelDropzone",
                required: !0,
                type: { name: "string" },
              },
              iconDropzone: {
                defaultValue: null,
                description: "",
                name: "iconDropzone",
                required: !0,
                type: { name: "string" },
              },
              onChange: {
                defaultValue: null,
                description: "",
                name: "onChange",
                required: !0,
                type: { name: "(files: FileList | null) => void" },
              },
              value: {
                defaultValue: null,
                description: "",
                name: "value",
                required: !1,
                type: { name: "FileList | null" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/ImageUploader/ImageUploader.tsx#ImageUploader"
            ] = {
              docgenInfo:
                ImageUploader_ImageUploader_ImageUploader.__docgenInfo,
              name: "ImageUploader",
              path: "src/app/components/ImageUploader/ImageUploader.tsx#ImageUploader",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/ImageUploader/ImageUploader.scss":
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
          ".image-uploader{width:100%}.image-uploader .image-uploader-title{padding-bottom:var(--s-spacing-nano);font:var(--s-typography-label-medium);color:var(--s-color-content-default)}.image-uploader .image-previews{display:grid;grid-template-columns:repeat(4, 1fr);gap:var(--s-spacing-xx-small)}.image-uploader .image-previews .image-uploader-item{width:100%}.image-uploader .image-previews .image-uploader-item .image-preview{display:flex;box-sizing:border-box;width:100%;height:100%;object-fit:cover;z-index:1;cursor:pointer;border:var(--s-border-width-hairline) solid var(--s-color-border-default);border-radius:var(--s-border-radius-small);background-color:var(--s-color-fill-default)}.image-uploader .image-previews .image-uploader-item .delete-button-container{position:relative;top:0;right:0;z-index:99}.image-uploader .image-previews .image-uploader-item .delete-button-container .delete-button{position:absolute;top:8px;right:8px;z-index:9}.image-uploader .image-previews .image-uploader-content{position:relative;width:100%;height:100%}.image-uploader .image-previews .image-uploader-content.image-uploader-content-disabled{pointer-events:none}.image-uploader .image-previews .image-uploader-content .uploader-item{position:absolute;z-index:1;width:100%;height:100%}.image-uploader .image-previews .image-uploader-content .image-uploader-dropzone{width:100%;height:100%;display:flex;align-items:center;flex-direction:column;justify-content:center;color:var(--s-color-content-default);background-color:var(--s-color-fill-default);cursor:pointer;font:var(--s-typography-label-small);border:var(--s-border-width-hairline) dashed var(--s-color-border-default);border-radius:var(--s-border-radius-small)}.image-uploader .image-previews .image-uploader-content .image-uploader-dropzone.image-uploader-dropzone-disabled{display:flex;align-items:center;flex-direction:column;justify-content:center;color:var(--s-color-content-disable);background-color:var(--s-color-fill-disable);font:var(--s-typography-label-small);border:var(--s-border-width-hairline) dashed var(--s-color-border-default);border-radius:var(--s-border-radius-small)}.image-uploader .image-previews .image-uploader-content .image-uploader-dropzone:hover{background-color:var(--s-color-fill-default-hover);border:var(--s-border-width-hairline) dashed var(--s-color-border-default-hover)}.image-uploader .image-previews .image-uploader-content .image-uploader-dropzone:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.image-uploader .image-previews .image-uploader-content .loading-screen{position:absolute;z-index:999;top:0;left:0;width:100%;height:100%;background-color:var(--s-color-fill-default);display:flex;align-items:center;justify-content:center}.image-uploader .image-previews .image-uploader-content .loading-screen p{font:var(--s-typography-label-medium);color:var(--s-color-content-default)}.image-uploader .image-uploader-description{font:var(--s-typography-caption-regular);color:var(--s-color-content-light)}.image-uploader .image-uploader-error-message{color:var(--s-color-content-warning);font:var(--s-typography-caption-regular)}@media screen and (max-width: 768px){.image-uploader .image-previews{grid-template-columns:repeat(2, 1fr)}}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/ImageUploader/ImageUploader.scss",
            ],
            names: [],
            mappings:
              "AAAA,gBACE,UAAA,CAEA,sCACE,oCAAA,CACA,qCAAA,CACA,oCAAA,CAGF,gCACE,YAAA,CACA,oCAAA,CACA,6BAAA,CAEA,qDACE,UAAA,CAEA,oEACE,YAAA,CACA,qBAAA,CACA,UAAA,CACA,WAAA,CACA,gBAAA,CACA,SAAA,CACA,cAAA,CACA,yEAAA,CAEA,0CAAA,CACA,4CAAA,CAGF,8EACE,iBAAA,CACA,KAAA,CACA,OAAA,CACA,UAAA,CAEA,6FACE,iBAAA,CACA,OAAA,CACA,SAAA,CACA,SAAA,CAKN,wDACE,iBAAA,CACA,UAAA,CACA,WAAA,CACA,wFACE,mBAAA,CAEF,uEACE,iBAAA,CACA,SAAA,CACA,UAAA,CACA,WAAA,CAGF,iFACE,UAAA,CACA,WAAA,CACA,YAAA,CACA,kBAAA,CACA,qBAAA,CACA,sBAAA,CACA,oCAAA,CACA,4CAAA,CACA,cAAA,CACA,oCAAA,CACA,0EAAA,CAEA,0CAAA,CAEA,kHACE,YAAA,CACA,kBAAA,CACA,qBAAA,CACA,sBAAA,CACA,oCAAA,CACA,4CAAA,CACA,oCAAA,CACA,0EAAA,CAEA,0CAAA,CAIJ,uFACE,kDAAA,CACA,gFAAA,CAIF,+FACE,wCAAA,CACA,6CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,wEACE,iBAAA,CACA,WAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,4CAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CAEA,0EACE,qCAAA,CACA,oCAAA,CAMR,4CACE,wCAAA,CACA,kCAAA,CAGF,8CACE,oCAAA,CACA,wCAAA,CAIJ,qCAEI,gCACE,oCAAA,CAAA",
            sourcesContent: [
              ".image-uploader {\n  width: 100%;\n\n  .image-uploader-title {\n    padding-bottom: var(--s-spacing-nano);\n    font: var(--s-typography-label-medium);\n    color: var(--s-color-content-default);\n  }\n\n  .image-previews {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: var(--s-spacing-xx-small);\n\n    .image-uploader-item {\n      width: 100%;\n\n      .image-preview {\n        display: flex;\n        box-sizing: border-box;\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        z-index: 1;\n        cursor: pointer;\n        border: var(--s-border-width-hairline) solid\n          var(--s-color-border-default);\n        border-radius: var(--s-border-radius-small);\n        background-color: var(--s-color-fill-default);\n      }\n\n      .delete-button-container {\n        position: relative;\n        top: 0;\n        right: 0;\n        z-index: 99;\n\n        .delete-button {\n          position: absolute;\n          top: 8px;\n          right: 8px;\n          z-index: 9;\n        }\n      }\n    }\n\n    .image-uploader-content {\n      position: relative;\n      width: 100%;\n      height: 100%;\n      &.image-uploader-content-disabled {\n        pointer-events: none;\n      }\n      .uploader-item {\n        position: absolute;\n        z-index: 1;\n        width: 100%;\n        height: 100%;\n      }\n\n      .image-uploader-dropzone {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n        justify-content: center;\n        color: var(--s-color-content-default);\n        background-color: var(--s-color-fill-default);\n        cursor: pointer;\n        font: var(--s-typography-label-small);\n        border: var(--s-border-width-hairline) dashed\n          var(--s-color-border-default);\n        border-radius: var(--s-border-radius-small);\n\n        &.image-uploader-dropzone-disabled {\n          display: flex;\n          align-items: center;\n          flex-direction: column;\n          justify-content: center;\n          color: var(--s-color-content-disable);\n          background-color: var(--s-color-fill-disable);\n          font: var(--s-typography-label-small);\n          border: var(--s-border-width-hairline) dashed\n            var(--s-color-border-default);\n          border-radius: var(--s-border-radius-small);\n        }\n      }\n\n      .image-uploader-dropzone:hover {\n        background-color: var(--s-color-fill-default-hover);\n        border: var(--s-border-width-hairline) dashed\n          var(--s-color-border-default-hover);\n      }\n\n      .image-uploader-dropzone:focus-visible {\n        outline-width: var(--s-border-width-thin);\n        outline-color: var(--s-color-border-highlight);\n        outline-offset: var(--s-border-width-thin);\n        outline-style: solid;\n      }\n\n      .loading-screen {\n        position: absolute;\n        z-index: 999;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: var(--s-color-fill-default);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n\n        p {\n          font: var(--s-typography-label-medium);\n          color: var(--s-color-content-default);\n        }\n      }\n    }\n  }\n\n  .image-uploader-description {\n    font: var(--s-typography-caption-regular);\n    color: var(--s-color-content-light);\n  }\n\n  .image-uploader-error-message {\n    color: var(--s-color-content-warning);\n    font: var(--s-typography-caption-regular);\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .image-uploader {\n    .image-previews {\n      grid-template-columns: repeat(2, 1fr);\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
