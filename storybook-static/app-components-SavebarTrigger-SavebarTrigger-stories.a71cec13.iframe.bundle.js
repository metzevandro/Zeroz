"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [2803],
  {
    "./src/app/components/AppShell/AppShell.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_AppShell_AppShell,
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
        AppShell = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/AppShell/AppShell.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(AppShell.A, options);
      AppShell.A && AppShell.A.locals && AppShell.A.locals;
      const AppShell_AppShell_AppShell = ({ children }) =>
          (0, jsx_runtime.jsx)("div", { className: "app-shell", children }),
        components_AppShell_AppShell = AppShell_AppShell_AppShell;
      try {
        (AppShell_AppShell_AppShell.displayName = "AppShell"),
          (AppShell_AppShell_AppShell.__docgenInfo = {
            description: "",
            displayName: "AppShell",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/AppShell/AppShell.tsx#AppShell"
            ] = {
              docgenInfo: AppShell_AppShell_AppShell.__docgenInfo,
              name: "AppShell",
              path: "src/app/components/AppShell/AppShell.tsx#AppShell",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/ButtonGroup/ButtonGroup.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_ButtonGroup_ButtonGroup,
      });
      var jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        Button = __webpack_require__("./src/app/components/Button/Button.tsx"),
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
        ButtonGroup = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/ButtonGroup/ButtonGroup.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(ButtonGroup.A, options);
      ButtonGroup.A && ButtonGroup.A.locals && ButtonGroup.A.locals;
      __webpack_require__("./node_modules/next/dist/compiled/react/index.js");
      const ButtonGroup_ButtonGroup_ButtonGroup = ({
          direction,
          onClickSecondButton,
          typeIconSecondButton,
          contentSecondButton,
          variantSecondButton,
          disableSecondButton,
          disableFirstButton,
          onClickFirstButton,
          contentFirstButton,
          typeIconFirstButton,
          variantFirstButton,
          skeletonFirstButton,
          skeletonSecondButton,
        }) =>
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsxs)("div", {
              className: `button-group ${direction}`,
              children: [
                (0, jsx_runtime.jsx)(Button.A, {
                  size: "md",
                  disabled: disableFirstButton,
                  onClick: onClickFirstButton,
                  label: contentFirstButton,
                  typeIcon: typeIconFirstButton,
                  variant: variantFirstButton,
                  skeleton: skeletonFirstButton,
                }),
                (0, jsx_runtime.jsx)(Button.A, {
                  size: "md",
                  disabled: disableSecondButton,
                  onClick: onClickSecondButton,
                  label: contentSecondButton,
                  typeIcon: typeIconSecondButton,
                  variant: variantSecondButton,
                  skeleton: skeletonSecondButton,
                }),
              ],
            }),
          }),
        components_ButtonGroup_ButtonGroup =
          ButtonGroup_ButtonGroup_ButtonGroup;
      try {
        (ButtonGroup_ButtonGroup_ButtonGroup.displayName = "ButtonGroup"),
          (ButtonGroup_ButtonGroup_ButtonGroup.__docgenInfo = {
            description: "",
            displayName: "ButtonGroup",
            props: {
              disableFirstButton: {
                defaultValue: null,
                description: "",
                name: "disableFirstButton",
                required: !1,
                type: { name: "boolean" },
              },
              disableSecondButton: {
                defaultValue: null,
                description: "",
                name: "disableSecondButton",
                required: !1,
                type: { name: "boolean" },
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
              variantFirstButton: {
                defaultValue: null,
                description: "",
                name: "variantFirstButton",
                required: !0,
                type: {
                  name: "enum",
                  value: [
                    { value: '"primary"' },
                    { value: '"secondary"' },
                    { value: '"success"' },
                    { value: '"warning"' },
                    { value: '"is-loading"' },
                  ],
                },
              },
              variantSecondButton: {
                defaultValue: null,
                description: "",
                name: "variantSecondButton",
                required: !0,
                type: {
                  name: "enum",
                  value: [
                    { value: '"primary"' },
                    { value: '"secondary"' },
                    { value: '"success"' },
                    { value: '"warning"' },
                    { value: '"is-loading"' },
                  ],
                },
              },
              contentFirstButton: {
                defaultValue: null,
                description: "",
                name: "contentFirstButton",
                required: !0,
                type: { name: "string" },
              },
              contentSecondButton: {
                defaultValue: null,
                description: "",
                name: "contentSecondButton",
                required: !0,
                type: { name: "string" },
              },
              typeIconFirstButton: {
                defaultValue: null,
                description: "",
                name: "typeIconFirstButton",
                required: !1,
                type: { name: "string" },
              },
              typeIconSecondButton: {
                defaultValue: null,
                description: "",
                name: "typeIconSecondButton",
                required: !1,
                type: { name: "string" },
              },
              onClickFirstButton: {
                defaultValue: null,
                description: "",
                name: "onClickFirstButton",
                required: !1,
                type: {
                  name: "((e: MouseEvent<Element, MouseEvent>) => void)",
                },
              },
              onClickSecondButton: {
                defaultValue: null,
                description: "",
                name: "onClickSecondButton",
                required: !1,
                type: {
                  name: "((e: MouseEvent<Element, MouseEvent>) => void)",
                },
              },
              skeletonFirstButton: {
                defaultValue: null,
                description: "",
                name: "skeletonFirstButton",
                required: !1,
                type: { name: "boolean" },
              },
              skeletonSecondButton: {
                defaultValue: null,
                description: "",
                name: "skeletonSecondButton",
                required: !1,
                type: { name: "boolean" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/ButtonGroup/ButtonGroup.tsx#ButtonGroup"
            ] = {
              docgenInfo: ButtonGroup_ButtonGroup_ButtonGroup.__docgenInfo,
              name: "ButtonGroup",
              path: "src/app/components/ButtonGroup/ButtonGroup.tsx#ButtonGroup",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
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
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/FileUploader/FileUploader.scss",
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
      const FileUploader_FileUploader_FileUploader = ({
          title,
          description,
          multiple,
          disabled,
          maxFileSize,
          buttonLabel,
          typeIconButton,
          onChange,
          value,
        }) => {
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
                    ? `O tamanho do arquivo "${file.name}" excede o limite de ${maxFileSize} MB.`
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
            ? { maxWidth: `calc(${tamanhoPai}px - 60px)` }
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
                                    ? `O tamanho do arquivo "${file.name}" excede o limite de ${maxFileSize} MB.`
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
                              className:
                                "file-uploader-item " +
                                (fileObj.hasError
                                  ? "file-uploader-item-error"
                                  : ""),
                              children: [
                                (0, jsx_runtime.jsxs)("div", {
                                  className:
                                    "file-uploaded " +
                                    (fileObj.hasError
                                      ? "file-uploaded-error"
                                      : ""),
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
                                          buttonType: "plain",
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
      try {
        (FileUploader_FileUploader_FileUploader.displayName = "FileUploader"),
          (FileUploader_FileUploader_FileUploader.__docgenInfo = {
            description: "",
            displayName: "FileUploader",
            props: {
              title: {
                defaultValue: null,
                description: "",
                name: "title",
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
              multiple: {
                defaultValue: null,
                description: "",
                name: "multiple",
                required: !1,
                type: { name: "boolean" },
              },
              disabled: {
                defaultValue: null,
                description: "",
                name: "disabled",
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
              buttonLabel: {
                defaultValue: null,
                description: "",
                name: "buttonLabel",
                required: !0,
                type: { name: "string" },
              },
              typeIconButton: {
                defaultValue: null,
                description: "",
                name: "typeIconButton",
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
              "src/app/components/FileUploader/FileUploader.tsx#FileUploader"
            ] = {
              docgenInfo: FileUploader_FileUploader_FileUploader.__docgenInfo,
              name: "FileUploader",
              path: "src/app/components/FileUploader/FileUploader.tsx#FileUploader",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/InputCheckbox/InputCheckbox.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_InputCheckbox_InputCheckbox,
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
        InputCheckbox = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputCheckbox/InputCheckbox.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(InputCheckbox.A, options);
      InputCheckbox.A && InputCheckbox.A.locals && InputCheckbox.A.locals;
      const InputCheckbox_InputCheckbox_InputCheckbox = ({
          modelValue,
          value,
          label,
          id,
          name,
          required,
          indeterminate,
          noEvents,
          disabled,
          onUpdate,
        }) => {
          const [checked, setChecked] = (0, react.useState)(
              null != modelValue && modelValue,
            ),
            uid = (0, react.useMemo)(
              () =>
                null != id
                  ? id
                  : `ui-form-checkbox-${Math.random().toString(36).substr(2, 9)}`,
              [id],
            );
          (0, react.useEffect)(() => {
            modelValue !== checked && setChecked(modelValue);
          }, [modelValue]);
          const classList = (0, react.useMemo)(
              () =>
                [
                  disabled ? "-disabled" : "",
                  noEvents ? "-no-events" : "",
                ].join(" "),
              [disabled, noEvents],
            ),
            handleChange = () => {
              const newValue = !checked;
              setChecked(newValue), null == onUpdate || onUpdate(newValue);
            };
          return (0, jsx_runtime.jsxs)("label", {
            tabIndex: 0,
            className: `ui-form-checkbox ${classList}`,
            htmlFor: uid,
            onKeyDown: (event) => {
              "Enter" === event.key && !1 === disabled && handleChange();
            },
            children: [
              (0, jsx_runtime.jsx)("input", {
                type: "checkbox",
                id: uid,
                value,
                required,
                ref: (el) => {
                  el &&
                    (el.indeterminate = null != indeterminate && indeterminate);
                },
                name,
                disabled,
                checked,
                onChange: handleChange,
                tabIndex: -1,
              }),
              (0, jsx_runtime.jsx)("span", {
                className: "ui-form-checkbox-checkmark",
              }),
              label &&
                (0, jsx_runtime.jsx)("div", {
                  className: "ui-form-checkbox-text",
                  children: label,
                }),
            ],
          });
        },
        components_InputCheckbox_InputCheckbox =
          InputCheckbox_InputCheckbox_InputCheckbox;
      try {
        (InputCheckbox_InputCheckbox_InputCheckbox.displayName =
          "InputCheckbox"),
          (InputCheckbox_InputCheckbox_InputCheckbox.__docgenInfo = {
            description: "",
            displayName: "InputCheckbox",
            props: {
              modelValue: {
                defaultValue: null,
                description: "",
                name: "modelValue",
                required: !1,
                type: { name: "any" },
              },
              value: {
                defaultValue: null,
                description: "",
                name: "value",
                required: !1,
                type: { name: "any" },
              },
              label: {
                defaultValue: null,
                description: "",
                name: "label",
                required: !1,
                type: { name: "string" },
              },
              id: {
                defaultValue: null,
                description: "",
                name: "id",
                required: !1,
                type: { name: "string" },
              },
              name: {
                defaultValue: null,
                description: "",
                name: "name",
                required: !1,
                type: { name: "string" },
              },
              required: {
                defaultValue: null,
                description: "",
                name: "required",
                required: !1,
                type: { name: "boolean" },
              },
              indeterminate: {
                defaultValue: null,
                description: "",
                name: "indeterminate",
                required: !1,
                type: { name: "boolean" },
              },
              noEvents: {
                defaultValue: null,
                description: "",
                name: "noEvents",
                required: !1,
                type: { name: "boolean" },
              },
              disabled: {
                defaultValue: null,
                description: "",
                name: "disabled",
                required: !1,
                type: { name: "boolean" },
              },
              onUpdate: {
                defaultValue: null,
                description: "",
                name: "onUpdate",
                required: !1,
                type: { name: "((val: any) => void)" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/InputCheckbox/InputCheckbox.tsx#InputCheckbox"
            ] = {
              docgenInfo:
                InputCheckbox_InputCheckbox_InputCheckbox.__docgenInfo,
              name: "InputCheckbox",
              path: "src/app/components/InputCheckbox/InputCheckbox.tsx#InputCheckbox",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/InputNumber/InputNumber.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_InputNumber_InputNumber,
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
        InputNumber = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputNumber/InputNumber.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(InputNumber.A, options);
      InputNumber.A && InputNumber.A.locals && InputNumber.A.locals;
      const InputNumber_InputNumber_InputNumber = ({
          max,
          min,
          placeholder,
          disabled,
          label,
          onChange,
          error,
          textError,
          value: propValue,
        }) => {
          const [numero, setNumero] = (0, react.useState)(() => {
            if (void 0 !== min) return min;
          });
          (0, react.useEffect)(() => {
            if (void 0 !== propValue) {
              const parsedValue = parseInt(propValue, 10);
              isNaN(parsedValue) || setNumero(parsedValue);
            }
          }, [propValue]);
          return (0, jsx_runtime.jsxs)("div", {
            className: "input-number-root",
            children: [
              label &&
                (0, jsx_runtime.jsx)("label", {
                  className: "input-number-label",
                  children: label,
                }),
              (0, jsx_runtime.jsxs)("div", {
                className: "input-number " + (disabled ? "disabled" : ""),
                children: [
                  (0, jsx_runtime.jsx)("button", {
                    disabled,
                    className: "subtract",
                    onClick: () => {
                      setNumero((prevNumero) => {
                        if (void 0 === prevNumero)
                          return void 0 !== min ? min : -1;
                        const newNum = prevNumero - 1;
                        return void 0 !== min && newNum < min
                          ? prevNumero
                          : (onChange && onChange(newNum.toString()), newNum);
                      });
                    },
                    children: (0, jsx_runtime.jsx)(Icon.A, {
                      size: "md",
                      icon: "remove",
                    }),
                  }),
                  (0, jsx_runtime.jsx)("input", {
                    className: "input " + (error ? "error" : ""),
                    type: "number",
                    placeholder,
                    onChange: (event) => {
                      const inputValue = event.target.value;
                      let newNum;
                      "" === inputValue
                        ? (newNum = void 0)
                        : ((newNum = parseInt(inputValue, 10)),
                          isNaN(newNum)
                            ? (newNum = void 0 !== min ? min : void 0)
                            : void 0 !== max && newNum > max
                              ? (newNum = max)
                              : void 0 !== min &&
                                newNum < min &&
                                (newNum = min)),
                        setNumero(newNum),
                        onChange &&
                          onChange(void 0 !== newNum ? newNum.toString() : "");
                    },
                    value: void 0 !== numero ? numero : "",
                    max,
                    min,
                    disabled,
                    inputMode: "numeric",
                  }),
                  (0, jsx_runtime.jsx)("button", {
                    disabled,
                    className: "add",
                    onClick: () => {
                      setNumero((prevNumero) => {
                        if (void 0 === prevNumero)
                          return void 0 !== min ? min : 1;
                        const newNum = prevNumero + 1;
                        return void 0 !== max && newNum > max
                          ? prevNumero
                          : (onChange && onChange(newNum.toString()), newNum);
                      });
                    },
                    children: (0, jsx_runtime.jsx)(Icon.A, {
                      size: "md",
                      icon: "add",
                    }),
                  }),
                ],
              }),
              error &&
                (0, jsx_runtime.jsx)("div", {
                  className: "textError",
                  children: textError,
                }),
            ],
          });
        },
        components_InputNumber_InputNumber =
          InputNumber_InputNumber_InputNumber;
      try {
        (InputNumber_InputNumber_InputNumber.displayName = "InputNumber"),
          (InputNumber_InputNumber_InputNumber.__docgenInfo = {
            description: "",
            displayName: "InputNumber",
            props: {
              max: {
                defaultValue: null,
                description: "",
                name: "max",
                required: !1,
                type: { name: "number" },
              },
              min: {
                defaultValue: null,
                description: "",
                name: "min",
                required: !1,
                type: { name: "number" },
              },
              placeholder: {
                defaultValue: null,
                description: "",
                name: "placeholder",
                required: !1,
                type: { name: "string" },
              },
              disabled: {
                defaultValue: null,
                description: "",
                name: "disabled",
                required: !1,
                type: { name: "boolean" },
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
              error: {
                defaultValue: null,
                description: "",
                name: "error",
                required: !1,
                type: { name: "boolean" },
              },
              textError: {
                defaultValue: null,
                description: "",
                name: "textError",
                required: !1,
                type: { name: "string" },
              },
              value: {
                defaultValue: null,
                description: "",
                name: "value",
                required: !1,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/InputNumber/InputNumber.tsx#InputNumber"
            ] = {
              docgenInfo: InputNumber_InputNumber_InputNumber.__docgenInfo,
              name: "InputNumber",
              path: "src/app/components/InputNumber/InputNumber.tsx#InputNumber",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/InputRadioButton/InputRadioButton.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_InputRadioButton_InputRadioButton,
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
        InputRadioButton = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputRadioButton/InputRadioButton.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(InputRadioButton.A, options);
      InputRadioButton.A &&
        InputRadioButton.A.locals &&
        InputRadioButton.A.locals;
      const InputRadioButton_InputRadioButton_InputRadioButton = ({
          disabled,
          label,
          onChange,
          checked: controlledChecked,
        }) => {
          const [isChecked, setIsChecked] = (0, react.useState)(
            controlledChecked || !1,
          );
          (0, react.useEffect)(() => {
            void 0 !== controlledChecked && setIsChecked(controlledChecked);
          }, [controlledChecked]);
          const toggleRadioButton = () => {
            if (!disabled) {
              const newValue = !isChecked;
              setIsChecked(newValue), onChange && onChange(newValue);
            }
          };
          return (0, jsx_runtime.jsxs)("div", {
            className: "radio-button-root  " + (disabled ? "disable" : ""),
            children: [
              (0, jsx_runtime.jsx)("div", {
                className: `radio-button ${disabled ? "disable" : ""} ${isChecked ? "checked" : ""}`,
                onClick: toggleRadioButton,
                onKeyDown: (e) => {
                  "Enter" === e.key && toggleRadioButton();
                },
                role: "radio",
                "aria-checked": isChecked,
                tabIndex: 0,
                children: (0, jsx_runtime.jsx)("span", {
                  className:
                    "radio-circle " + (isChecked ? "checked-circle" : ""),
                }),
              }),
              (0, jsx_runtime.jsx)("label", {
                onClick: toggleRadioButton,
                className: "radio-button-label " + (disabled ? "disabled" : ""),
                children: label,
              }),
            ],
          });
        },
        components_InputRadioButton_InputRadioButton =
          InputRadioButton_InputRadioButton_InputRadioButton;
      try {
        (InputRadioButton_InputRadioButton_InputRadioButton.displayName =
          "InputRadioButton"),
          (InputRadioButton_InputRadioButton_InputRadioButton.__docgenInfo = {
            description: "",
            displayName: "InputRadioButton",
            props: {
              label: {
                defaultValue: null,
                description: "",
                name: "label",
                required: !1,
                type: { name: "string" },
              },
              disabled: {
                defaultValue: null,
                description: "",
                name: "disabled",
                required: !1,
                type: { name: "boolean" },
              },
              onChange: {
                defaultValue: null,
                description: "",
                name: "onChange",
                required: !1,
                type: { name: "((isChecked: boolean) => void)" },
              },
              checked: {
                defaultValue: null,
                description: "",
                name: "checked",
                required: !1,
                type: { name: "boolean" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/InputRadioButton/InputRadioButton.tsx#InputRadioButton"
            ] = {
              docgenInfo:
                InputRadioButton_InputRadioButton_InputRadioButton.__docgenInfo,
              name: "InputRadioButton",
              path: "src/app/components/InputRadioButton/InputRadioButton.tsx#InputRadioButton",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/InputSelect/InputSelect.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_InputSelect_InputSelect,
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
        InputSelect = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputSelect/InputSelect.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(InputSelect.A, options);
      InputSelect.A && InputSelect.A.locals && InputSelect.A.locals;
      const InputSelect_InputSelect_InputSelect = ({
          options,
          label,
          error,
          errorMessage,
          disabled,
          onChange,
          value,
        }) => {
          const [isOpen, setIsOpen] = (0, react.useState)(!1),
            [selectedOption, setSelectedOption] = (0, react.useState)(
              value || void 0,
            );
          (0, react.useEffect)(() => {
            setSelectedOption(value || void 0);
          }, [value]);
          const dropdownRef = (0, react.useRef)(null),
            handleClickOutside = (event) => {
              isOpen &&
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                setIsOpen(!1);
            };
          return (
            (0, react.useEffect)(
              () => (
                document.addEventListener("mousedown", handleClickOutside),
                () => {
                  document.removeEventListener("mousedown", handleClickOutside);
                }
              ),
              [isOpen],
            ),
            (0, jsx_runtime.jsxs)("div", {
              className: "input-select-root",
              children: [
                (0, jsx_runtime.jsx)("div", {
                  className: "input-select-label",
                  children: label,
                }),
                (0, jsx_runtime.jsx)("div", {
                  className: "input-select",
                  children: (0, jsx_runtime.jsx)("div", {
                    className: `input-select-button ${selectedOption && "option"} ${error && "error"} ${disabled && "disabled"}`,
                    children: (0, jsx_runtime.jsx)("select", {
                      className: `${error && "select-error"}`,
                      value: selectedOption || "",
                      onChange: (event) => {
                        const newValue = event.target.value;
                        setSelectedOption(newValue), onChange(newValue);
                      },
                      disabled: disabled || error,
                      children: options.map((option, index) =>
                        (0, jsx_runtime.jsx)(
                          "option",
                          { value: option, children: option },
                          index,
                        ),
                      ),
                    }),
                  }),
                }),
                error &&
                  (0, jsx_runtime.jsx)("p", {
                    className: "input-select-error-message",
                    children: errorMessage,
                  }),
              ],
            })
          );
        },
        components_InputSelect_InputSelect =
          InputSelect_InputSelect_InputSelect;
      try {
        (InputSelect_InputSelect_InputSelect.displayName = "InputSelect"),
          (InputSelect_InputSelect_InputSelect.__docgenInfo = {
            description: "",
            displayName: "InputSelect",
            props: {
              options: {
                defaultValue: null,
                description: "",
                name: "options",
                required: !0,
                type: { name: "string[]" },
              },
              disabled: {
                defaultValue: null,
                description: "",
                name: "disabled",
                required: !1,
                type: { name: "boolean" },
              },
              label: {
                defaultValue: null,
                description: "",
                name: "label",
                required: !1,
                type: { name: "string" },
              },
              error: {
                defaultValue: null,
                description: "",
                name: "error",
                required: !1,
                type: { name: "boolean" },
              },
              errorMessage: {
                defaultValue: null,
                description: "",
                name: "errorMessage",
                required: !1,
                type: { name: "string" },
              },
              onChange: {
                defaultValue: null,
                description: "",
                name: "onChange",
                required: !0,
                type: { name: "(value: string) => void" },
              },
              value: {
                defaultValue: null,
                description: "",
                name: "value",
                required: !1,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/InputSelect/InputSelect.tsx#InputSelect"
            ] = {
              docgenInfo: InputSelect_InputSelect_InputSelect.__docgenInfo,
              name: "InputSelect",
              path: "src/app/components/InputSelect/InputSelect.tsx#InputSelect",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/InputTextArea/InputTextArea.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => app_components_InputTextArea_InputTextArea,
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
        InputTextArea_InputTextArea = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputTextArea/InputTextArea.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(
        InputTextArea_InputTextArea.A,
        options,
      );
      InputTextArea_InputTextArea.A &&
        InputTextArea_InputTextArea.A.locals &&
        InputTextArea_InputTextArea.A.locals;
      const app_components_InputTextArea_InputTextArea = ({
        placeholder,
        label,
        disabled,
        error,
        errorText,
        onChange,
        value = "",
      }) => {
        const [internalValue, setInternalValue] = (0, react.useState)(value),
          textareaRef = (0, react.useRef)(null);
        (0, react.useEffect)(() => {
          setInternalValue(value);
        }, [value]);
        return (0, jsx_runtime.jsxs)("div", {
          className: "text-area-root",
          children: [
            (0, jsx_runtime.jsx)("label", {
              className: "text-area-label",
              children: label,
            }),
            (0, jsx_runtime.jsx)("div", {
              tabIndex: 0,
              className: `text-area ${disabled && "disabled"} ${error && !disabled ? "error" : ""}`,
              onClick: () => {
                textareaRef.current && textareaRef.current.focus();
              },
              children: (0, jsx_runtime.jsx)("textarea", {
                ref: textareaRef,
                placeholder,
                disabled,
                onChange: (event) => {
                  const newValue = event.target.value;
                  setInternalValue(newValue), onChange && onChange(newValue);
                },
                value: internalValue,
              }),
            }),
            error &&
              (0, jsx_runtime.jsx)("p", {
                className: "description",
                children: errorText,
              }),
          ],
        });
      };
      try {
        (InputTextArea.displayName = "InputTextArea"),
          (InputTextArea.__docgenInfo = {
            description: "",
            displayName: "InputTextArea",
            props: {
              placeholder: {
                defaultValue: null,
                description: "",
                name: "placeholder",
                required: !0,
                type: { name: "string" },
              },
              label: {
                defaultValue: null,
                description: "",
                name: "label",
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
              error: {
                defaultValue: null,
                description: "",
                name: "error",
                required: !1,
                type: { name: "boolean" },
              },
              errorText: {
                defaultValue: null,
                description: "",
                name: "errorText",
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
              value: {
                defaultValue: { value: "" },
                description: "",
                name: "value",
                required: !1,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/InputTextArea/InputTextArea.tsx#InputTextArea"
            ] = {
              docgenInfo: InputTextArea.__docgenInfo,
              name: "InputTextArea",
              path: "src/app/components/InputTextArea/InputTextArea.tsx#InputTextArea",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/InputTime/InputTime.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_InputTime_InputTime,
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
        InputTime = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputTime/InputTime.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(InputTime.A, options);
      InputTime.A && InputTime.A.locals && InputTime.A.locals;
      var Input = __webpack_require__("./src/app/components/Input/Input.tsx");
      const InputTime_InputTime_InputTime = ({
          label,
          placeholder,
          disabled,
          error,
          textError,
          onChange,
          value: controlledValue,
          ...rest
        }) => {
          const [isModalOpen, setIsModalOpen] = (0, react.useState)(!1),
            [selectedHour, setSelectedHour] = (0, react.useState)(""),
            [selectedMinute, setSelectedMinute] = (0, react.useState)(""),
            modalRef = (0, react.useRef)(null);
          (0, react.useEffect)(() => {
            const handleClickOutside = (event) => {
              modalRef.current &&
                !modalRef.current.contains(event.target) &&
                setIsModalOpen(!1);
            };
            return (
              document.addEventListener("mousedown", handleClickOutside),
              () => {
                document.removeEventListener("mousedown", handleClickOutside);
              }
            );
          }, []),
            (0, react.useEffect)(() => {
              if (controlledValue) {
                const [hour, minute] = controlledValue.split(":");
                setSelectedHour(hour), setSelectedMinute(minute);
              }
            }, [controlledValue]);
          const renderButtons = (0, react.useCallback)(
            (maxValue, isHour) => {
              const buttons = [];
              for (let i = 0; i <= maxValue; i++) {
                const formattedValue = i < 10 ? `0${i}` : `${i}`;
                buttons.push(
                  (0, jsx_runtime.jsx)(
                    "button",
                    {
                      className: "input-time-buttons",
                      onClick: () => {
                        isHour
                          ? (setSelectedHour(formattedValue),
                            onChange(`${formattedValue}:${selectedMinute}`))
                          : (setSelectedMinute(formattedValue),
                            onChange(`${selectedHour}:${formattedValue}`));
                      },
                      "aria-label": formattedValue,
                      children: formattedValue,
                    },
                    formattedValue,
                  ),
                );
              }
              return buttons;
            },
            [onChange, selectedHour, selectedMinute],
          );
          return (0, jsx_runtime.jsxs)("div", {
            className: "input-time",
            children: [
              (0, jsx_runtime.jsx)(Input.A, {
                label,
                type: "text",
                value:
                  null != controlledValue
                    ? controlledValue
                    : selectedHour && selectedMinute
                      ? `${selectedHour}:${selectedMinute}`
                      : "",
                placeholder,
                typeIcon: "schedule",
                disabled,
                onClick: () => {
                  setIsModalOpen(!isModalOpen);
                },
                onChange: (event) => {
                  let newValue = event.target.value;
                  (newValue = newValue.replace(/[^\d:]/g, "")),
                    newValue.length > 5 &&
                      (newValue = newValue.substring(0, 5)),
                    2 === newValue.length &&
                      ":" !== newValue.charAt(2) &&
                      (newValue =
                        newValue.slice(0, 2) + ":" + newValue.slice(2)),
                    (event.target.value = newValue),
                    onChange(newValue);
                },
                error,
                textError,
                inputMode: "numeric",
                pattern: "[0-9]*",
                ...rest,
              }),
              isModalOpen &&
                (0, jsx_runtime.jsxs)("div", {
                  className: "input-time-modal",
                  ref: modalRef,
                  children: [
                    (0, jsx_runtime.jsx)("div", {
                      className: "modal-section",
                      children: renderButtons(23, !0),
                    }),
                    (0, jsx_runtime.jsx)("div", {
                      className: "modal-section",
                      children: renderButtons(59, !1),
                    }),
                  ],
                }),
            ],
          });
        },
        components_InputTime_InputTime = InputTime_InputTime_InputTime;
      try {
        (InputTime_InputTime_InputTime.displayName = "InputTime"),
          (InputTime_InputTime_InputTime.__docgenInfo = {
            description: "",
            displayName: "InputTime",
            props: {
              label: {
                defaultValue: null,
                description: "",
                name: "label",
                required: !0,
                type: { name: "string" },
              },
              placeholder: {
                defaultValue: null,
                description: "",
                name: "placeholder",
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
              error: {
                defaultValue: null,
                description: "",
                name: "error",
                required: !1,
                type: { name: "boolean" },
              },
              textError: {
                defaultValue: null,
                description: "",
                name: "textError",
                required: !1,
                type: { name: "string" },
              },
              onChange: {
                defaultValue: null,
                description: "",
                name: "onChange",
                required: !0,
                type: { name: "(value: string) => void" },
              },
              value: {
                defaultValue: null,
                description: "",
                name: "value",
                required: !1,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/InputTime/InputTime.tsx#InputTime"
            ] = {
              docgenInfo: InputTime_InputTime_InputTime.__docgenInfo,
              name: "InputTime",
              path: "src/app/components/InputTime/InputTime.tsx#InputTime",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/Layout/Layout.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_Layout_Layout,
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
        Layout = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Layout/Layout.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Layout.A, options);
      Layout.A && Layout.A.locals && Layout.A.locals;
      const Layout_Layout_Layout = ({ children, columns, ...rest }) => {
          const columnClassName = {
            1: "one-column",
            "2 - Symmetric": "two-column-symmetric",
            "2 - Asymmetric": "two-column-asymmetric",
            "3 - Symmetric": "three-column-symmetric",
          }[columns];
          return (0, jsx_runtime.jsx)("div", {
            ...rest,
            className: `layout ${columnClassName}`,
            children,
          });
        },
        components_Layout_Layout = Layout_Layout_Layout;
      try {
        (Layout_Layout_Layout.displayName = "Layout"),
          (Layout_Layout_Layout.__docgenInfo = {
            description: "",
            displayName: "Layout",
            props: {
              columns: {
                defaultValue: null,
                description: "",
                name: "columns",
                required: !0,
                type: {
                  name: "enum",
                  value: [
                    { value: '"1"' },
                    { value: '"2 - Symmetric"' },
                    { value: '"2 - Asymmetric"' },
                    { value: '"3 - Symmetric"' },
                  ],
                },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Layout/Layout.tsx#Layout"
            ] = {
              docgenInfo: Layout_Layout_Layout.__docgenInfo,
              name: "Layout",
              path: "src/app/components/Layout/Layout.tsx#Layout",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/Page/Page.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_Page_Page,
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
        Page = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Page/Page.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Page.A, options);
      Page.A && Page.A.locals && Page.A.locals;
      var ButtonIcon = __webpack_require__(
          "./src/app/components/ButtonIcon/ButtonIcon.tsx",
        ),
        Button = __webpack_require__("./src/app/components/Button/Button.tsx");
      const Page_Page_Page = ({
          children,
          namePage,
          withBackButton,
          withActionPrimary,
          withActionSecondary,
          buttonContentPrimary,
          buttonContentSecondary,
          onClickActionPrimary,
          onClickActionSecondary,
          onClickBackButton,
          iconButtonPrimary,
          iconButtonSecondary,
          skeletonButtonPrimary,
          skeletonButtonSecondary,
          description,
        }) =>
          (0, jsx_runtime.jsx)("div", {
            style: {
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              background: "var(--s-color-background-default);",
              overflowX: "hidden",
            },
            children: (0, jsx_runtime.jsxs)("div", {
              className: "page-root",
              children: [
                (0, jsx_runtime.jsxs)("div", {
                  children: [
                    (0, jsx_runtime.jsxs)("div", {
                      className: "page-header",
                      children: [
                        withBackButton &&
                          (0, jsx_runtime.jsx)(ButtonIcon.A, {
                            onClick: onClickBackButton,
                            size: "md",
                            buttonType: "default",
                            typeIcon: "arrow_back",
                            variant: "secondary",
                          }),
                        (0, jsx_runtime.jsx)("div", {
                          className: "page-header-title",
                          children: (0, jsx_runtime.jsx)("h1", {
                            children: namePage,
                          }),
                        }),
                        (0, jsx_runtime.jsxs)("div", {
                          className: "page-header-actions",
                          children: [
                            withActionSecondary &&
                              (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                  (0, jsx_runtime.jsx)("div", {
                                    className: "button-icon-actions",
                                    children: (0, jsx_runtime.jsx)(
                                      ButtonIcon.A,
                                      {
                                        buttonType: "default",
                                        size: "md",
                                        typeIcon: `${iconButtonSecondary || "more_vert"}`,
                                        variant: "secondary",
                                        onClick: onClickActionSecondary,
                                        skeleton: skeletonButtonSecondary,
                                      },
                                    ),
                                  }),
                                  (0, jsx_runtime.jsx)("div", {
                                    className: "button-actions",
                                    children: (0, jsx_runtime.jsx)(Button.A, {
                                      size: "md",
                                      variant: "secondary",
                                      label: buttonContentSecondary,
                                      onClick: onClickActionSecondary,
                                      typeIcon: iconButtonSecondary,
                                      skeleton: skeletonButtonSecondary,
                                    }),
                                  }),
                                ],
                              }),
                            withActionPrimary &&
                              (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                  (0, jsx_runtime.jsx)("div", {
                                    className: "button-icon-actions",
                                    children: (0, jsx_runtime.jsx)(
                                      ButtonIcon.A,
                                      {
                                        buttonType: "default",
                                        size: "md",
                                        typeIcon: `${iconButtonPrimary || "add"}`,
                                        variant: "primary",
                                        onClick: onClickActionPrimary,
                                        skeleton: skeletonButtonPrimary,
                                      },
                                    ),
                                  }),
                                  (0, jsx_runtime.jsx)("div", {
                                    className: "button-actions",
                                    children: (0, jsx_runtime.jsx)(Button.A, {
                                      size: "md",
                                      variant: "primary",
                                      skeleton: skeletonButtonPrimary,
                                      typeIcon: iconButtonPrimary,
                                      label: buttonContentPrimary,
                                      onClick: onClickActionPrimary,
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsx)("p", {
                      className:
                        "page-description " +
                        (withBackButton ? "with-back-button" : ""),
                      children: description,
                    }),
                  ],
                }),
                children,
              ],
            }),
          }),
        components_Page_Page = Page_Page_Page;
      try {
        (Page_Page_Page.displayName = "Page"),
          (Page_Page_Page.__docgenInfo = {
            description: "",
            displayName: "Page",
            props: {
              namePage: {
                defaultValue: null,
                description: "",
                name: "namePage",
                required: !0,
                type: { name: "string" },
              },
              withBackButton: {
                defaultValue: null,
                description: "",
                name: "withBackButton",
                required: !1,
                type: { name: "boolean" },
              },
              withActionPrimary: {
                defaultValue: null,
                description: "",
                name: "withActionPrimary",
                required: !1,
                type: { name: "boolean" },
              },
              withActionSecondary: {
                defaultValue: null,
                description: "",
                name: "withActionSecondary",
                required: !1,
                type: { name: "boolean" },
              },
              buttonContentPrimary: {
                defaultValue: null,
                description: "",
                name: "buttonContentPrimary",
                required: !1,
                type: { name: "string" },
              },
              buttonContentSecondary: {
                defaultValue: null,
                description: "",
                name: "buttonContentSecondary",
                required: !1,
                type: { name: "string" },
              },
              onClickActionPrimary: {
                defaultValue: null,
                description: "",
                name: "onClickActionPrimary",
                required: !1,
                type: { name: "(() => void)" },
              },
              onClickActionSecondary: {
                defaultValue: null,
                description: "",
                name: "onClickActionSecondary",
                required: !1,
                type: { name: "(() => void)" },
              },
              onClickBackButton: {
                defaultValue: null,
                description: "",
                name: "onClickBackButton",
                required: !1,
                type: { name: "(() => void)" },
              },
              iconButtonPrimary: {
                defaultValue: null,
                description: "",
                name: "iconButtonPrimary",
                required: !1,
                type: { name: "string" },
              },
              iconButtonSecondary: {
                defaultValue: null,
                description: "",
                name: "iconButtonSecondary",
                required: !1,
                type: { name: "string" },
              },
              skeletonButtonPrimary: {
                defaultValue: null,
                description: "",
                name: "skeletonButtonPrimary",
                required: !1,
                type: { name: "boolean" },
              },
              skeletonButtonSecondary: {
                defaultValue: null,
                description: "",
                name: "skeletonButtonSecondary",
                required: !1,
                type: { name: "boolean" },
              },
              description: {
                defaultValue: null,
                description: "",
                name: "description",
                required: !1,
                type: { name: "ReactNode" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/app/components/Page/Page.tsx#Page"] =
              {
                docgenInfo: Page_Page_Page.__docgenInfo,
                name: "Page",
                path: "src/app/components/Page/Page.tsx#Page",
              });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/Progress/Progress.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_Progress_Progress,
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
        Progress = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Progress/Progress.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Progress.A, options);
      Progress.A && Progress.A.locals && Progress.A.locals;
      var react = __webpack_require__(
        "./node_modules/next/dist/compiled/react/index.js",
      );
      const Progress_Progress_Progress = ({ value, error, indeterminate }) => {
          const [progress, setProgress] = (0, react.useState)(0);
          return (
            (0, react.useEffect)(() => {
              setProgress(value);
            }, [value]),
            (0, jsx_runtime.jsx)("div", {
              className: "progress",
              children:
                !0 === indeterminate
                  ? (0, jsx_runtime.jsx)("div", {
                      className: "progress-bar-loading",
                    })
                  : (0, jsx_runtime.jsx)("div", {
                      className: `progress-bar ${100 === value ? "progress-bar-success" : ""} ${error ? "progress-bar-error" : ""}`,
                      style: { width: `${progress}%` },
                    }),
            })
          );
        },
        components_Progress_Progress = Progress_Progress_Progress;
      try {
        (Progress_Progress_Progress.displayName = "Progress"),
          (Progress_Progress_Progress.__docgenInfo = {
            description: "",
            displayName: "Progress",
            props: {
              value: {
                defaultValue: null,
                description: "",
                name: "value",
                required: !0,
                type: { name: "number" },
              },
              error: {
                defaultValue: null,
                description: "",
                name: "error",
                required: !1,
                type: { name: "boolean" },
              },
              indeterminate: {
                defaultValue: null,
                description: "",
                name: "indeterminate",
                required: !1,
                type: { name: "boolean" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Progress/Progress.tsx#Progress"
            ] = {
              docgenInfo: Progress_Progress_Progress.__docgenInfo,
              name: "Progress",
              path: "src/app/components/Progress/Progress.tsx#Progress",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/SaveBar/SaveBar.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_SaveBar_SaveBar,
      });
      var jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        ButtonGroup =
          (__webpack_require__(
            "./node_modules/next/dist/compiled/react/index.js",
          ),
          __webpack_require__(
            "./src/app/components/ButtonGroup/ButtonGroup.tsx",
          )),
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
        SaveBar = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/SaveBar/SaveBar.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(SaveBar.A, options);
      SaveBar.A && SaveBar.A.locals && SaveBar.A.locals;
      const SaveBar_SaveBar_SaveBar = ({
          onClickSave,
          onClickCancel,
          label,
          labelSave,
          labelCancel,
        }) =>
          (0, jsx_runtime.jsx)("div", {
            className: "save-bar",
            children: (0, jsx_runtime.jsxs)("div", {
              className: "save-bar-content",
              children: [
                (0, jsx_runtime.jsx)("p", {
                  className: "save-bar-label",
                  children: label,
                }),
                (0, jsx_runtime.jsx)("div", {
                  className: "save-bar-buttons",
                  children: (0, jsx_runtime.jsx)(ButtonGroup.A, {
                    variantFirstButton: "secondary",
                    variantSecondButton: "success",
                    direction: "row",
                    contentFirstButton: labelCancel,
                    contentSecondButton: labelSave,
                    onClickFirstButton: onClickCancel,
                    onClickSecondButton: (e) => {
                      e.stopPropagation(), onClickSave(e);
                    },
                  }),
                }),
              ],
            }),
          }),
        components_SaveBar_SaveBar = SaveBar_SaveBar_SaveBar;
      try {
        (SaveBar_SaveBar_SaveBar.displayName = "SaveBar"),
          (SaveBar_SaveBar_SaveBar.__docgenInfo = {
            description: "",
            displayName: "SaveBar",
            props: {
              onClickSave: {
                defaultValue: null,
                description: "",
                name: "onClickSave",
                required: !0,
                type: { name: "(e: MouseEvent<Element, MouseEvent>) => void" },
              },
              onClickCancel: {
                defaultValue: null,
                description: "",
                name: "onClickCancel",
                required: !0,
                type: { name: "() => void" },
              },
              labelSave: {
                defaultValue: null,
                description: "",
                name: "labelSave",
                required: !0,
                type: { name: "string" },
              },
              labelCancel: {
                defaultValue: null,
                description: "",
                name: "labelCancel",
                required: !0,
                type: { name: "string" },
              },
              label: {
                defaultValue: null,
                description: "",
                name: "label",
                required: !0,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/SaveBar/SaveBar.tsx#SaveBar"
            ] = {
              docgenInfo: SaveBar_SaveBar_SaveBar.__docgenInfo,
              name: "SaveBar",
              path: "src/app/components/SaveBar/SaveBar.tsx#SaveBar",
            });
      } catch (__react_docgen_typescript_loader_error) {}
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
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Slider/Slider.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Slider.A, options);
      Slider.A && Slider.A.locals && Slider.A.locals;
      const Slider_Slider_Slider = ({
          step,
          min,
          max,
          value,
          label,
          onChange,
        }) => {
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
                          style: { width: `${progress}%` },
                        }),
                        (0, jsx_runtime.jsx)("div", {
                          className: "slider-button",
                          tabIndex: 0,
                          style: { left: `calc(${progress}% - 10px)` },
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
    "./src/app/components/Switch/Switch.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => components_Switch_Switch,
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
        Switch = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Switch/Switch.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Switch.A, options);
      Switch.A && Switch.A.locals && Switch.A.locals;
      const Switch_Switch_Switch = ({
          modelValue,
          value,
          label,
          id,
          name,
          required,
          noEvents,
          disabled,
          onUpdate,
        }) => {
          const [checked, setChecked] = (0, react.useState)(
              null != modelValue && modelValue,
            ),
            uid = (0, react.useMemo)(
              () =>
                null != id
                  ? id
                  : `ui-form-switch-${Math.random().toString(36).substr(2, 9)}`,
              [id],
            );
          (0, react.useEffect)(() => {
            modelValue !== checked && setChecked(modelValue);
          }, [modelValue]);
          const classList = (0, react.useMemo)(
              () =>
                [
                  "ui-form-switch",
                  "-switch",
                  disabled ? "-disabled" : "",
                  noEvents ? "-no-events" : "",
                ].join(" "),
              [disabled, noEvents],
            ),
            handleChange = () => {
              const newValue = !checked;
              setChecked(newValue), null == onUpdate || onUpdate(newValue);
            };
          return (0, jsx_runtime.jsxs)("label", {
            className: classList,
            htmlFor: uid,
            onKeyDown: (event) => {
              "Enter" === event.key && !1 === disabled && handleChange();
            },
            tabIndex: 0,
            children: [
              (0, jsx_runtime.jsx)("input", {
                type: "checkbox",
                id: uid,
                value,
                required,
                name,
                disabled,
                checked,
                onChange: handleChange,
              }),
              (0, jsx_runtime.jsx)("span", {
                className: "ui-form-checkbox-checkmark",
              }),
              label &&
                (0, jsx_runtime.jsx)("div", {
                  className: "ui-form-checkbox-text",
                  children: label,
                }),
            ],
          });
        },
        components_Switch_Switch = Switch_Switch_Switch;
      try {
        (Switch_Switch_Switch.displayName = "Switch"),
          (Switch_Switch_Switch.__docgenInfo = {
            description: "",
            displayName: "Switch",
            props: {
              modelValue: {
                defaultValue: null,
                description: "",
                name: "modelValue",
                required: !1,
                type: { name: "any" },
              },
              value: {
                defaultValue: null,
                description: "",
                name: "value",
                required: !1,
                type: { name: "any" },
              },
              label: {
                defaultValue: null,
                description: "",
                name: "label",
                required: !1,
                type: { name: "string" },
              },
              id: {
                defaultValue: null,
                description: "",
                name: "id",
                required: !1,
                type: { name: "string" },
              },
              name: {
                defaultValue: null,
                description: "",
                name: "name",
                required: !1,
                type: { name: "string" },
              },
              required: {
                defaultValue: null,
                description: "",
                name: "required",
                required: !1,
                type: { name: "boolean" },
              },
              noEvents: {
                defaultValue: null,
                description: "",
                name: "noEvents",
                required: !1,
                type: { name: "boolean" },
              },
              disabled: {
                defaultValue: null,
                description: "",
                name: "disabled",
                required: !1,
                type: { name: "boolean" },
              },
              onUpdate: {
                defaultValue: null,
                description: "",
                name: "onUpdate",
                required: !1,
                type: { name: "((val: any) => void)" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/Switch/Switch.tsx#Switch"
            ] = {
              docgenInfo: Switch_Switch_Switch.__docgenInfo,
              name: "Switch",
              path: "src/app/components/Switch/Switch.tsx#Switch",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/app/components/SavebarTrigger/SavebarTrigger.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => SavebarTrigger_stories,
        });
      var jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        react = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        ),
        dist = __webpack_require__(
          "./node_modules/@storybook/blocks/dist/index.mjs",
        ),
        SaveBar =
          (__webpack_require__("./src/app/styles.scss"),
          __webpack_require__("./src/app/components/SaveBar/SaveBar.tsx")),
        Progress = __webpack_require__(
          "./src/app/components/Progress/Progress.tsx",
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
        SavebarTrigger = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/SavebarTrigger/SavebarTrigger.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(SavebarTrigger.A, options);
      SavebarTrigger.A && SavebarTrigger.A.locals && SavebarTrigger.A.locals;
      var console = __webpack_require__(
        "./node_modules/console-browserify/index.js",
      );
      const SavebarTrigger_SavebarTrigger_SavebarTrigger = ({
          children,
          formChanged,
          handleSubmit,
          label,
          handleCancel: handleCancelProp,
          labelSave,
          labelCancel,
        }) => {
          const [formData, setFormData] = (0, react.useState)({}),
            [tamanhoPai, setTamanhoPai] = (0, react.useState)(null),
            [saving, setSaving] = (0, react.useState)(!1),
            [progressValue, setProgressValue] = (0, react.useState)(0),
            [elapsedTime, setElapsedTime] = (0, react.useState)(null);
          (0, react.useEffect)(() => {
            const updateTamanhoPai = () => {
              const paiElement = document.querySelector(".header-root");
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
              ? { width: `calc(${tamanhoPai}px)` }
              : {},
            modifiedChildren = react.Children.map(children, (child, index) => {
              if (react.isValidElement(child)) {
                const { name } = child.props;
                return react.cloneElement(child, {
                  onChange: (e) => {
                    ((name, value) => {
                      setFormData((prevData) => ({
                        ...prevData,
                        [name]: value,
                      }));
                    })(name, e.target.value);
                  },
                  value: formData[name] || "",
                  name,
                });
              }
              return child;
            });
          return (0, jsx_runtime.jsxs)("div", {
            className: "form-register-root",
            children: [
              saving &&
                (0, jsx_runtime.jsx)("div", {
                  className: "form-register-progress",
                  children: (0, jsx_runtime.jsx)(Progress.A, {
                    value: progressValue,
                  }),
                }),
              (0, jsx_runtime.jsx)("div", {
                className: "form-register-save-bar",
                style: estiloFilha,
                children:
                  formChanged &&
                  !saving &&
                  (0, jsx_runtime.jsx)(SaveBar.A, {
                    labelCancel,
                    labelSave,
                    label,
                    onClickCancel: () => {
                      console.log("Alterações canceladas"),
                        setSaving(!1),
                        setProgressValue(0),
                        setElapsedTime(null),
                        handleCancelProp();
                    },
                    onClickSave: () => {
                      setSaving(!0);
                      let currentProgress = 0;
                      const intervalId = setInterval(() => {
                        (currentProgress += 10),
                          setProgressValue(currentProgress),
                          currentProgress >= 100 &&
                            (clearInterval(intervalId),
                            setTimeout(() => {
                              setSaving(!1), setProgressValue(0);
                            }, 500)),
                          handleSubmit();
                      }, 50);
                    },
                  }),
              }),
              (0, jsx_runtime.jsx)("div", { children: modifiedChildren }),
            ],
          });
        },
        components_SavebarTrigger_SavebarTrigger =
          SavebarTrigger_SavebarTrigger_SavebarTrigger;
      try {
        (SavebarTrigger_SavebarTrigger_SavebarTrigger.displayName =
          "SavebarTrigger"),
          (SavebarTrigger_SavebarTrigger_SavebarTrigger.__docgenInfo = {
            description: "",
            displayName: "SavebarTrigger",
            props: {
              formChanged: {
                defaultValue: null,
                description: "",
                name: "formChanged",
                required: !0,
                type: { name: "boolean" },
              },
              handleSubmit: {
                defaultValue: null,
                description: "",
                name: "handleSubmit",
                required: !0,
                type: { name: "() => void" },
              },
              handleCancel: {
                defaultValue: null,
                description: "",
                name: "handleCancel",
                required: !0,
                type: { name: "() => void" },
              },
              label: {
                defaultValue: null,
                description: "",
                name: "label",
                required: !0,
                type: { name: "string" },
              },
              labelSave: {
                defaultValue: null,
                description: "",
                name: "labelSave",
                required: !0,
                type: { name: "string" },
              },
              labelCancel: {
                defaultValue: null,
                description: "",
                name: "labelCancel",
                required: !0,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/app/components/SavebarTrigger/SavebarTrigger.tsx#SavebarTrigger"
            ] = {
              docgenInfo:
                SavebarTrigger_SavebarTrigger_SavebarTrigger.__docgenInfo,
              name: "SavebarTrigger",
              path: "src/app/components/SavebarTrigger/SavebarTrigger.tsx#SavebarTrigger",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Input = __webpack_require__("./src/app/components/Input/Input.tsx"),
        AppShell = __webpack_require__(
          "./src/app/components/AppShell/AppShell.tsx",
        ),
        Sidebar = __webpack_require__(
          "./src/app/components/Sidebar/Sidebar.tsx",
        ),
        Header = __webpack_require__("./src/app/components/Header/Header.tsx"),
        Breadcrumb = __webpack_require__(
          "./src/app/components/Breadcrumb/Breadcrumb.tsx",
        ),
        Dropdown = __webpack_require__(
          "./src/app/components/Dropdown/Dropdown.tsx",
        ),
        Page = __webpack_require__("./src/app/components/Page/Page.tsx"),
        InputNumber = __webpack_require__(
          "./src/app/components/InputNumber/InputNumber.tsx",
        ),
        Layout = __webpack_require__("./src/app/components/Layout/Layout.tsx"),
        DataPicker = __webpack_require__(
          "./src/app/components/DataPicker/DataPicker.tsx",
        ),
        InputSelect = __webpack_require__(
          "./src/app/components/InputSelect/InputSelect.tsx",
        ),
        FileUploader = __webpack_require__(
          "./src/app/components/FileUploader/FileUploader.tsx",
        ),
        ImageUploader = __webpack_require__(
          "./src/app/components/ImageUploader/ImageUploader.tsx",
        ),
        InputCheckbox = __webpack_require__(
          "./src/app/components/InputCheckbox/InputCheckbox.tsx",
        ),
        InputRadioButton = __webpack_require__(
          "./src/app/components/InputRadioButton/InputRadioButton.tsx",
        ),
        Slider = __webpack_require__("./src/app/components/Slider/Slider.tsx"),
        Switch = __webpack_require__("./src/app/components/Switch/Switch.tsx"),
        InputTime = __webpack_require__(
          "./src/app/components/InputTime/InputTime.tsx",
        ),
        InputTextArea = __webpack_require__(
          "./src/app/components/InputTextArea/InputTextArea.tsx",
        ),
        SavebarTrigger_stories_console = __webpack_require__(
          "./node_modules/console-browserify/index.js",
        );
      const SavebarTrigger_stories = {
          title: "Templates/Savebar Trigger",
          component: components_SavebarTrigger_SavebarTrigger,
          parameters: {
            layout: "fullscreen",
            docs: {
              page: () =>
                (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                  children: [
                    (0, jsx_runtime.jsx)(dist.hE, {}),
                    (0, jsx_runtime.jsx)(dist.Pd, { children: "Template" }),
                    (0, jsx_runtime.jsxs)("p", {
                      children: [
                        "The ",
                        (0, jsx_runtime.jsx)("strong", {
                          children: "SavebarTrigger",
                        }),
                        " template is designed to monitor changes to inputs within its scope. This template serves as a proactive observer, ensuring timely detection and response to changes made, facilitating ongoing management of data updates, and associated save or cancel processes.",
                      ],
                    }),
                    (0, jsx_runtime.jsx)(dist.Tn, {}),
                    (0, jsx_runtime.jsx)(dist.H2, {}),
                    (0, jsx_runtime.jsx)(dist.om, {}),
                  ],
                }),
            },
          },
          tags: ["autodocs"],
          argTypes: {
            formChanged: {
              name: "Form Changed",
              description: "Determines if the form content has been changed.",
              type: { name: "boolean" },
              table: { type: { summary: "boolean" }, category: "events" },
            },
            handleCancel: {
              name: "Handle Cancel",
              description: "Callback function to handle cancel action.",
              action: "clicked",
              table: { type: { summary: "function" }, category: "events" },
            },
            handleSubmit: {
              name: "Handle Submit",
              description: "Callback function to handle submit action.",
              action: "clicked",
              table: { type: { summary: "function" }, category: "events" },
            },
            label: {
              name: "Label",
              description: "Text to display for the savebar trigger.",
              type: { name: "string" },
              defaultValue: { summary: "Unsaved changes" },
              table: {
                type: { summary: "string" },
                defaultValue: { summary: "Unsaved changes" },
                category: "content",
              },
            },
            labelCancel: {
              name: "Label Cancel",
              description: "Text for the cancel button in the savebar.",
              type: { name: "string" },
              defaultValue: { summary: "Cancel" },
              table: {
                type: { summary: "string" },
                defaultValue: { summary: "Cancel" },
                category: "content",
              },
            },
            labelSave: {
              name: "Label Save",
              description: "Text for the save button in the savebar.",
              type: { name: "string" },
              defaultValue: { summary: "Save" },
              table: {
                type: { summary: "string" },
                defaultValue: { summary: "Save" },
                category: "content",
              },
            },
          },
        },
        Default = ((args) => {
          const [isOpenSidebar, setIsOpenSidebar] = (0, react.useState)(!1),
            [formValuesFile, setFormValuesFile] = (0, react.useState)({
              ImageUploader: null,
              FileUploader: null,
            }),
            [formValues, setFormValues] = (0, react.useState)({
              Input: "",
              "Input Select": "Option 1",
              "Input Number": "0",
              Checkbox: !1,
              Switch: !1,
              "Radio Button": !1,
              "Input do DataPicker": "",
              ColorPicker: "#FFFFFF",
              Slider: "0",
              "Input Time": "",
              "Text Area": "",
            }),
            [initialValues, setInitialValues] = (0, react.useState)({}),
            [formChanged, setFormChanged] = (0, react.useState)(!1);
          (0, react.useEffect)(() => {
            setInitialValues(formValues);
          }, []);
          const handleInputChange = (name, value) => {
              setFormValues({ ...formValues, [name]: value });
            },
            handleFileChange = (name, files) => {
              files && files.length > 0
                ? setFormValues({ ...formValues, [name]: files })
                : setFormValues({ ...formValues, [name]: null });
            };
          (0, react.useEffect)(() => {
            const isFormChanged = Object.keys(formValues).some(
              (key) => initialValues[key] !== formValues[key],
            );
            setFormChanged(isFormChanged);
          }, [formValues, initialValues]);
          (0, react.useEffect)(() => {
            SavebarTrigger_stories_console.log(
              "Form Values after cancel:",
              formValues,
            );
          }, [formValues]);
          const toggleSidebar = () => {
            setIsOpenSidebar(!isOpenSidebar);
          };
          var _formValues_Checkbox, _formValues_Switch;
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsxs)(AppShell.A, {
              children: [
                (0, jsx_runtime.jsxs)(Sidebar.Ay, {
                  brandSize: "sm",
                  setToggleSidebar: toggleSidebar,
                  brand: "/logo-sm.svg",
                  toggle: isOpenSidebar,
                  children: [
                    (0, jsx_runtime.jsx)(Sidebar.FL, { title: "Sidebar" }),
                    (0, jsx_runtime.jsx)(Sidebar.uk, {
                      icon: "settings",
                      fillIcon: !0,
                      isActive: !0,
                      title: "Page Name",
                    }),
                  ],
                }),
                (0, jsx_runtime.jsx)(Header.A, {
                  breadcrumb: (0, jsx_runtime.jsx)(Breadcrumb.Q, { items: [] }),
                  onClick: toggleSidebar,
                  children: (0, jsx_runtime.jsx)(Header.h, {
                    name: "Username",
                    children: (0, jsx_runtime.jsxs)(Dropdown.Ay, {
                      dropdown: !0,
                      children: [
                        (0, jsx_runtime.jsx)(Dropdown.EI, {
                          content: "Settings",
                        }),
                        (0, jsx_runtime.jsx)(Dropdown.tJ, {
                          content: "Item 1",
                        }),
                        (0, jsx_runtime.jsx)(Dropdown.tJ, {
                          content: "Item 2",
                        }),
                        (0, jsx_runtime.jsx)(Dropdown.tJ, {
                          content: "Settings",
                          typeIcon: "settings",
                        }),
                      ],
                    }),
                  }),
                }),
                (0, jsx_runtime.jsx)(Page.A, {
                  namePage: "Page Name",
                  buttonContentSecondary: "Button",
                  withActionSecondary: !0,
                  buttonContentPrimary: "Button",
                  withActionPrimary: !0,
                  withBackButton: !0,
                  children: (0, jsx_runtime.jsx)(
                    components_SavebarTrigger_SavebarTrigger,
                    {
                      labelCancel: "Cancel",
                      labelSave: "Save",
                      label: "Unsaved changes",
                      formChanged,
                      handleCancel: () => {
                        SavebarTrigger_stories_console.log(
                          "Initial Values:",
                          initialValues,
                        ),
                          setFormValues(initialValues),
                          setFormChanged(!1);
                      },
                      handleSubmit: () => {
                        SavebarTrigger_stories_console.log(
                          "Formulário enviado!",
                        ),
                          setInitialValues(formValues),
                          setFormChanged(!1);
                      },
                      children: (0, jsx_runtime.jsxs)(Layout.A, {
                        columns: "2 - Symmetric",
                        children: [
                          (0, jsx_runtime.jsx)(Input.A, {
                            label: "Input",
                            placeholder: "Placeholder",
                            value: String(formValues.Input),
                            onChange: (e) => {
                              null !== e.target.value &&
                                handleInputChange("Input", e.target.value);
                            },
                          }),
                          (0, jsx_runtime.jsx)(InputNumber.A, {
                            label: "Input Number",
                            placeholder: "Placeholder",
                            min: 0,
                            max: 10,
                            value: String(formValues["Input Number"]),
                            onChange: (value) => {
                              handleInputChange("Input Number", value);
                            },
                          }),
                          (0, jsx_runtime.jsx)(InputTime.A, {
                            label: "Input Time",
                            placeholder: "Placeholder",
                            value: String(formValues["Input Time"]),
                            onChange: (value) => {
                              handleInputChange("Input Time", value);
                            },
                          }),
                          (0, jsx_runtime.jsx)(InputSelect.A, {
                            label: "Input Select",
                            value: String(formValues["Input Select"]),
                            onChange: (value) => {
                              handleInputChange("Input Select", value);
                            },
                            options: ["Option 1", "Option 2", "Option 3"],
                          }),
                          (0, jsx_runtime.jsx)(DataPicker.A, {
                            label: "Data Picker",
                            placeholder: "Placeholder",
                            date: String(formValues["Input do DataPicker"]),
                            onDateChange: (value) =>
                              ((name, newDate) => {
                                const formattedDate = `${newDate.getDate().toString().padStart(2, "0")}/${(newDate.getMonth() + 1).toString().padStart(2, "0")}/${newDate.getFullYear().toString()}`;
                                setFormValues({
                                  ...formValues,
                                  [name]: formattedDate,
                                });
                              })("Input do DataPicker", value),
                          }),
                          (0, jsx_runtime.jsx)(Slider.A, {
                            value: String(formValues.Slider),
                            max: 10,
                            min: 0,
                            step: 1,
                            label: "Slider",
                            onChange: (value) => {
                              setFormValues({ ...formValues, Slider: value });
                            },
                          }),
                          (0, jsx_runtime.jsx)(InputCheckbox.A, {
                            label: "Checkbox",
                            onUpdate: (checked) =>
                              ((checked) => {
                                setFormValues({
                                  ...formValues,
                                  Checkbox: checked,
                                });
                              })(checked),
                            modelValue:
                              null !==
                                (_formValues_Checkbox = formValues.Checkbox) &&
                              void 0 !== _formValues_Checkbox &&
                              _formValues_Checkbox,
                          }),
                          (0, jsx_runtime.jsx)(InputRadioButton.A, {
                            label: "Radio Button",
                            onChange: (checked) =>
                              ((checked) => {
                                setFormValues({
                                  ...formValues,
                                  "Radio Button": checked,
                                });
                              })(checked),
                            checked:
                              "boolean" == typeof formValues["Radio Button"] &&
                              formValues["Radio Button"],
                          }),
                          (0, jsx_runtime.jsx)(Switch.A, {
                            label: "Switch",
                            onUpdate: (checked) =>
                              ((checked) => {
                                setFormValues({
                                  ...formValues,
                                  Switch: checked,
                                });
                              })(checked),
                            modelValue:
                              null !==
                                (_formValues_Switch = formValues.Switch) &&
                              void 0 !== _formValues_Switch &&
                              _formValues_Switch,
                          }),
                          (0, jsx_runtime.jsx)(FileUploader.A, {
                            buttonLabel: "Add File",
                            title: "File Uploader",
                            typeIconButton: "upload_file",
                            maxFileSize: 10,
                            multiple: !0,
                            value: formValuesFile.FileUploader,
                            onChange: (files) =>
                              handleFileChange("FileUploader", files),
                          }),
                          (0, jsx_runtime.jsx)(ImageUploader.A, {
                            title: "Image Uploader",
                            proportion: "1/1",
                            labelDropzone: "Drop your images here",
                            iconDropzone: "add_a_photo",
                            multiple: !0,
                            value: formValuesFile.ImageUploader,
                            onChange: (files) =>
                              handleFileChange("ImageUploader", files),
                          }),
                          (0, jsx_runtime.jsx)(InputTextArea.A, {
                            label: "Text Area",
                            placeholder: "Placeholder",
                            value: String(formValues["Text Area"]),
                            onChange: (value) =>
                              handleInputChange("Text Area", value),
                          }),
                        ],
                      }),
                    },
                  ),
                }),
              ],
            }),
          });
        }).bind({});
      Default.args = {};
      const __namedExportsOrder = ["Default"];
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              'args => {\n  const [isOpenSidebar, setIsOpenSidebar] = useState(false);\n  const [formValuesFile, setFormValuesFile] = useState<FormValuesFile>({\n    ImageUploader: null,\n    FileUploader: null\n  });\n  const [formValues, setFormValues] = useState<FormValuesType>({\n    Input: "",\n    "Input Select": "Option 1",\n    "Input Number": "0",\n    Checkbox: false,\n    Switch: false,\n    "Radio Button": false,\n    "Input do DataPicker": "",\n    ColorPicker: "#FFFFFF",\n    Slider: "0",\n    "Input Time": "",\n    "Text Area": ""\n  });\n  const [initialValues, setInitialValues] = useState<FormValuesType>({});\n  const [formChanged, setFormChanged] = useState(false);\n  useEffect(() => {\n    setInitialValues(formValues);\n  }, []);\n  const handleInputChange = (name: string, value: string | boolean | number) => {\n    setFormValues({\n      ...formValues,\n      [name]: value\n    });\n  };\n  const handleFileChange = (name: string, files: FileList | null) => {\n    if (files && files.length > 0) {\n      setFormValues({\n        ...formValues,\n        [name]: files\n      });\n    } else {\n      setFormValues({\n        ...formValues,\n        [name]: null\n      });\n    }\n  };\n  const handleDateChange = (name: string, newDate: Date) => {\n    const day = newDate.getDate().toString().padStart(2, "0");\n    const month = (newDate.getMonth() + 1).toString().padStart(2, "0");\n    const year = newDate.getFullYear().toString();\n    const formattedDate = `${day}/${month}/${year}`;\n    setFormValues({\n      ...formValues,\n      [name]: formattedDate\n    });\n  };\n  const handleSliderChange = (value: string) => {\n    setFormValues({\n      ...formValues,\n      Slider: value\n    });\n  };\n  const handleSubmit = () => {\n    console.log("Formulário enviado!");\n    setInitialValues(formValues);\n    setFormChanged(false);\n  };\n  const handleCheckboxChange = (checked: boolean) => {\n    setFormValues({\n      ...formValues,\n      Checkbox: checked\n    });\n  };\n  const handleRadioChange = (checked: boolean) => {\n    setFormValues({\n      ...formValues,\n      "Radio Button": checked\n    });\n  };\n  const handleSwitchChange = (checked: boolean) => {\n    setFormValues({\n      ...formValues,\n      Switch: checked\n    });\n  };\n  const options = ["Option 1", "Option 2", "Option 3"];\n  useEffect(() => {\n    const isFormChanged = Object.keys(formValues).some(key => initialValues[key] !== formValues[key]);\n    setFormChanged(isFormChanged);\n  }, [formValues, initialValues]);\n  const handleCancel = () => {\n    console.log("Initial Values:", initialValues);\n    setFormValues(initialValues);\n    setFormChanged(false);\n  };\n  useEffect(() => {\n    console.log("Form Values after cancel:", formValues);\n  }, [formValues]);\n  const toggleSidebar = () => {\n    setIsOpenSidebar(!isOpenSidebar);\n  };\n  return <>\r\n      <AppShell>\r\n        <Sidebar brandSize="sm" setToggleSidebar={toggleSidebar} brand="/logo-sm.svg" toggle={isOpenSidebar}>\r\n          <SidebarTitle title="Sidebar"></SidebarTitle>\r\n          <SidebarItem icon="settings" fillIcon={true} isActive={true} title="Page Name" />\r\n        </Sidebar>\r\n        <Header breadcrumb={<Breadcrumb items={[]} />} onClick={toggleSidebar}>\r\n          <HeaderProfile name="Username">\r\n            <Dropdown dropdown>\r\n              <DropdownTitle content="Settings" />\r\n              <DropdownItem content="Item 1" />\r\n              <DropdownItem content="Item 2" />\r\n              <DropdownItem content="Settings" typeIcon="settings" />\r\n            </Dropdown>\r\n          </HeaderProfile>\r\n        </Header>\r\n        <Page namePage="Page Name" buttonContentSecondary="Button" withActionSecondary buttonContentPrimary="Button" withActionPrimary withBackButton>\r\n          <SavebarTrigger labelCancel="Cancel" labelSave="Save" label="Unsaved changes" formChanged={formChanged} handleCancel={handleCancel} handleSubmit={handleSubmit}>\r\n            <Layout columns="2 - Symmetric">\r\n              <Input label="Input" placeholder="Placeholder" value={String(formValues["Input"])} onChange={e => {\n              if (e.target.value !== null) {\n                handleInputChange("Input", e.target.value);\n              }\n            }} />\r\n              <InputNumber label="Input Number" placeholder="Placeholder" min={0} max={10} value={String(formValues["Input Number"])} onChange={(value: string) => {\n              handleInputChange("Input Number", value);\n            }} />\r\n              <InputTime label="Input Time" placeholder="Placeholder" value={String(formValues["Input Time"])} onChange={(value: string) => {\n              handleInputChange("Input Time", value);\n            }} />\r\n              <InputSelect label="Input Select" value={String(formValues["Input Select"])} onChange={(value: string) => {\n              handleInputChange("Input Select", value);\n            }} options={options} />\r\n              <DataPicker label="Data Picker" placeholder="Placeholder" date={String(formValues["Input do DataPicker"])} onDateChange={(value: Date) => handleDateChange("Input do DataPicker", value)} />\r\n              <Slider value={String(formValues.Slider)} max={10} min={0} step={1} label="Slider" onChange={handleSliderChange} />\r\n              <InputCheckbox label="Checkbox" onUpdate={checked => handleCheckboxChange(checked)} modelValue={formValues["Checkbox"] ?? false} />\r\n\r\n              <InputRadioButton label="Radio Button" onChange={checked => handleRadioChange(checked)} checked={typeof formValues["Radio Button"] === "boolean" ? formValues["Radio Button"] : false} />\r\n              <Switch label="Switch" onUpdate={checked => handleSwitchChange(checked)} modelValue={formValues["Switch"] ?? false} />\r\n              <FileUploader buttonLabel="Add File" title="File Uploader" typeIconButton="upload_file" maxFileSize={10} multiple={true} value={formValuesFile["FileUploader"]} onChange={(files: FileList | null) => handleFileChange("FileUploader", files)} />\r\n              <ImageUploader title="Image Uploader" proportion="1/1" labelDropzone={"Drop your images here"} iconDropzone={"add_a_photo"} multiple={true} value={formValuesFile["ImageUploader"]} onChange={(files: FileList | null) => handleFileChange("ImageUploader", files)} />\r\n              <TextArea label="Text Area" placeholder="Placeholder" value={String(formValues["Text Area"])} onChange={value => handleInputChange("Text Area", value)} />\r\n            </Layout>\r\n          </SavebarTrigger>\r\n        </Page>\r\n      </AppShell>\r\n    </>;\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      };
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/AppShell/AppShell.scss":
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
          '.app-shell{display:grid;background-color:var(--s-color-background-default);justify-content:center;align-items:start;grid-template-columns:auto 4fr;grid-template-rows:auto 1fr;grid-template-areas:"aside header" "aside main"}@media screen and (max-width: 768px){.app-shell{align-items:start;height:100dvh;justify-content:normal;grid-template-columns:1fr;grid-template-areas:"header" "main"}}',
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/AppShell/AppShell.scss"],
            names: [],
            mappings:
              "AAAA,WACE,YAAA,CACA,kDAAA,CACA,sBAAA,CACA,iBAAA,CACA,8BAAA,CACA,2BAAA,CACA,+CACE,CAIJ,qCACE,WACE,iBAAA,CACA,aAAA,CACA,sBAAA,CACA,yBAAA,CACA,mCACE,CAAA",
            sourcesContent: [
              '.app-shell {\n  display: grid;\n  background-color: var(--s-color-background-default);\n  justify-content: center;\n  align-items: start;\n  grid-template-columns: auto 4fr;\n  grid-template-rows: auto 1fr;\n  grid-template-areas:\n    "aside header"\n    "aside main";\n}\n\n@media screen and (max-width: 768px) {\n  .app-shell {\n    align-items: start;\n    height: 100dvh;\n    justify-content: normal;\n    grid-template-columns: 1fr;\n    grid-template-areas:\n      "header"\n      "main";\n  }\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/ButtonGroup/ButtonGroup.scss":
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
          ".button-group{display:flex;justify-content:space-between;width:100%}.button-group.row{display:flex;flex-direction:row;gap:var(--s-spacing-xx-small)}.button-group.column{display:flex;flex-direction:column;gap:var(--s-spacing-xx-small)}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/ButtonGroup/ButtonGroup.scss",
            ],
            names: [],
            mappings:
              "AAAA,cACE,YAAA,CACA,6BAAA,CACA,UAAA,CAEA,kBACE,YAAA,CACA,kBAAA,CACA,6BAAA,CAGF,qBACE,YAAA,CACA,qBAAA,CACA,6BAAA",
            sourcesContent: [
              ".button-group {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n\n  &.row {\n    display: flex;\n    flex-direction: row;\n    gap: var(--s-spacing-xx-small);\n  }\n\n  &.column {\n    display: flex;\n    flex-direction: column;\n    gap: var(--s-spacing-xx-small);\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/FileUploader/FileUploader.scss":
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
          ".file-uploader{display:flex;flex-direction:column;gap:var(--s-spacing-x-small);max-width:100%}.file-uploader p{font:var(--s-typography-caption-regular);color:var(--s-color-content-light);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.file-uploader .file-uploader-header{display:flex;flex-direction:column;gap:var(--s-spacing-nano)}.file-uploader .file-uploader-header h1{font:var(--s-typography-label-medium);color:var(--s-color-content-default)}.file-uploader .file-uploader-button{width:fit-content}.file-uploader .file-uploader-footer{display:flex;flex-direction:column;gap:var(--s-spacing-nano)}.file-uploader .file-uploader-items{display:flex;flex-direction:column;gap:var(--s-spacing-small)}.file-uploader .file-uploader-items .file-uploader-item{display:flex;flex-direction:column;cursor:pointer;border-radius:var(--s-border-radius-medium);background-color:var(--s-color-fill-default-light);color:var(--s-color-content-default)}.file-uploader .file-uploader-items .file-uploader-item.file-uploader-item-error{border:var(--s-border-width-hairline) solid var(--s-color-border-warning);background-color:var(--s-color-fill-default)}.file-uploader .file-uploader-items .file-uploader-item .file-uploaded{padding:var(--s-spacing-xx-small) var(--s-spacing-small);display:flex;flex-direction:row;width:100%;justify-content:space-between;align-items:center;font:var(--s-typography-paragraph-regular)}.file-uploader .file-uploader-items .file-uploader-item .file-uploaded.file-uploaded-error{border-bottom:var(--s-border-width-hairline) solid var(--s-color-border-warning)}.file-uploader .file-uploader-items .file-uploader-item .file-uploaded .file-uploaded-icon{display:flex;gap:var(--s-spacing-nano);align-items:center}.file-uploader .file-uploader-items .file-uploader-item .file-uploaded .file-uploaded-icon .file-uploader-icon-error{color:var(--s-color-content-warning)}.file-uploader .file-uploader-items .file-uploader-item .file-uploader-error{padding:var(--s-spacing-xx-small) var(--s-spacing-small);color:var(--s-color-content-warning);font:var(--s-typography-paragraph-regular)}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/FileUploader/FileUploader.scss",
            ],
            names: [],
            mappings:
              "AAAA,eACE,YAAA,CACA,qBAAA,CACA,4BAAA,CACA,cAAA,CAEA,iBACE,wCAAA,CACA,kCAAA,CACA,sBAAA,CACA,kBAAA,CACA,eAAA,CAGF,qCACE,YAAA,CACA,qBAAA,CACA,yBAAA,CAEA,wCACE,qCAAA,CACA,oCAAA,CAGJ,qCACE,iBAAA,CAGF,qCACE,YAAA,CACA,qBAAA,CACA,yBAAA,CAGF,oCACE,YAAA,CACA,qBAAA,CACA,0BAAA,CAEA,wDACE,YAAA,CACA,qBAAA,CACA,cAAA,CACA,2CAAA,CACA,kDAAA,CACA,oCAAA,CAEA,iFACE,yEAAA,CAEA,4CAAA,CAGF,uEACE,wDAAA,CACA,YAAA,CACA,kBAAA,CACA,UAAA,CACA,6BAAA,CACA,kBAAA,CACA,0CAAA,CAEA,2FACE,gFAAA,CAIF,2FACE,YAAA,CACA,yBAAA,CACA,kBAAA,CAEA,qHACE,oCAAA,CAKN,6EACE,wDAAA,CACA,oCAAA,CACA,0CAAA",
            sourcesContent: [
              ".file-uploader {\n  display: flex;\n  flex-direction: column;\n  gap: var(--s-spacing-x-small);\n  max-width: 100%;\n\n  p {\n    font: var(--s-typography-caption-regular);\n    color: var(--s-color-content-light);\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n\n  .file-uploader-header {\n    display: flex;\n    flex-direction: column;\n    gap: var(--s-spacing-nano);\n\n    h1 {\n      font: var(--s-typography-label-medium);\n      color: var(--s-color-content-default);\n    }\n  }\n  .file-uploader-button {\n    width: fit-content;\n  }\n\n  .file-uploader-footer {\n    display: flex;\n    flex-direction: column;\n    gap: var(--s-spacing-nano);\n  }\n\n  .file-uploader-items {\n    display: flex;\n    flex-direction: column;\n    gap: var(--s-spacing-small);\n\n    .file-uploader-item {\n      display: flex;\n      flex-direction: column;\n      cursor: pointer;\n      border-radius: var(--s-border-radius-medium);\n      background-color: var(--s-color-fill-default-light);\n      color: var(--s-color-content-default);\n\n      &.file-uploader-item-error {\n        border: var(--s-border-width-hairline) solid\n          var(--s-color-border-warning);\n        background-color: var(--s-color-fill-default);\n      }\n\n      .file-uploaded {\n        padding: var(--s-spacing-xx-small) var(--s-spacing-small);\n        display: flex;\n        flex-direction: row;\n        width: 100%;\n        justify-content: space-between;\n        align-items: center;\n        font: var(--s-typography-paragraph-regular);\n\n        &.file-uploaded-error {\n          border-bottom: var(--s-border-width-hairline) solid\n            var(--s-color-border-warning);\n        }\n\n        .file-uploaded-icon {\n          display: flex;\n          gap: var(--s-spacing-nano);\n          align-items: center;\n\n          .file-uploader-icon-error {\n            color: var(--s-color-content-warning);\n          }\n        }\n      }\n\n      .file-uploader-error {\n        padding: var(--s-spacing-xx-small) var(--s-spacing-small);\n        color: var(--s-color-content-warning);\n        font: var(--s-typography-paragraph-regular);\n      }\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputCheckbox/InputCheckbox.scss":
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
          '.ui-form-checkbox{display:flex;align-items:center;position:relative;cursor:pointer;user-select:none;font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default);gap:var(--s-spacing-xx-small)}.ui-form-checkbox:focus-visible{outline:none}.ui-form-checkbox:focus-visible .ui-form-checkbox-checkmark{outline:2px solid var(--s-color-border-highlight);outline-offset:2px}.ui-form-checkbox.-disabled{cursor:auto}.ui-form-checkbox.-no-events{pointer-events:none}.ui-form-checkbox+.ui-form-checkbox{margin-top:var(--s-spacing-nano)}.ui-form-checkbox:hover .ui-form-checkbox-checkmark{border-color:var(--s-color-fill-highlight)}.ui-form-checkbox .ui-form-checkbox-text:empty{display:none}.ui-form-checkbox input{position:absolute;opacity:0;cursor:pointer;height:1px;width:1px;left:calc(var(--s-spacing-x-small)/2 - 1px);top:var(--s-spacing-x-small)}.ui-form-checkbox input:hover~.ui-form-checkbox-checkmark{box-shadow:0px -1px 0px 0px rgba(0,0,0,.2) inset,0px 0px 0px 2px var(--s-color-fill-highlight) inset,0px -1px 2px 0px rgba(0,0,0,.24) inset,0px 1px .5px .5px rgba(255,255,255,.44) inset,0px 1px 2px 0px rgba(14,21,36,.06)}.ui-form-checkbox input:checked~.ui-form-checkbox-checkmark{background-color:var(--s-color-fill-highlight);border-color:rgba(0,0,0,0);box-shadow:0px -1px 0px 0px rgba(0,0,0,.2) inset,0px 0px 0px 2px var(--s-color-fill-highlight) inset,0px -1px 2px 0px rgba(0,0,0,.24) inset,0px 1px .5px .5px rgba(255,255,255,.44) inset,0px 1px 2px 0px rgba(14,21,36,.06)}.ui-form-checkbox input:checked~.ui-form-checkbox-checkmark::after{display:block}.ui-form-checkbox input:indeterminate~.ui-form-checkbox-checkmark{background-color:var(--s-color-fill-highlight);border-color:rgba(0,0,0,0);box-shadow:0px -1px 0px 0px rgba(0,0,0,.2) inset,0px 0px 0px 2px var(--s-color-fill-highlight) inset,0px -1px 2px 0px rgba(0,0,0,.24) inset,0px 1px .5px .5px rgba(255,255,255,.44) inset,0px 1px 2px 0px rgba(14,21,36,.06)}.ui-form-checkbox input:indeterminate~.ui-form-checkbox-checkmark:after{display:block;left:50%;top:50%;width:50%;height:0px;transform:translateX(-50%) translateY(-50%)}.ui-form-checkbox input:disabled~.ui-form-checkbox-checkmark,.ui-form-checkbox input:disabled:hover~.ui-form-checkbox-checkmark{background-color:rgba(0,0,0,0);box-shadow:0px -1px 0px 0px rgba(0,0,0,.2) inset,0px 0px 0px 2px var(--s-color-fill-disable) inset,0px -1px 2px 0px rgba(0,0,0,.24) inset,0px 1px .5px .5px rgba(255,255,255,.44) inset,0px 1px 2px 0px rgba(14,21,36,.06)}.ui-form-checkbox input:disabled{cursor:auto}.ui-form-checkbox input:disabled:hover~.ui-form-checkbox-checkmark{background-color:var(--s-color-fill-disable)}.ui-form-checkbox input:disabled~.ui-form-checkbox-checkmark{background-color:var(--s-color-fill-disable)}.ui-form-checkbox input:disabled~.ui-form-checkbox-checkmark::after{border-color:var(--s-color-content-disable)}.ui-form-checkbox input:disabled~.ui-form-checkbox-text{color:var(--s-color-content-disable)}.ui-form-checkbox .ui-form-checkbox-checkmark{position:relative;top:0;left:0;min-width:20px;width:20px;aspect-ratio:1;background-color:var(--s-color-fill-default);border-radius:var(--s-border-radius-small);display:flex;align-items:center;justify-content:center;box-shadow:0px -1px 0px 0px rgba(0,0,0,.2) inset,0px 0px 0px 2px var(--s-color-fill-disable) inset,0px -1px 2px 0px rgba(0,0,0,.24) inset,0px 1px .5px .5px rgba(255,255,255,.44) inset,0px 1px 2px 0px rgba(14,21,36,.06)}.ui-form-checkbox .ui-form-checkbox-checkmark:focus-within{outline:2px solid var(--s-color-border-highlight);outline-offset:2px}.ui-form-checkbox .ui-form-checkbox-checkmark:after{display:none;content:"";position:absolute;bottom:55%;left:50%;width:4px;height:8px;border:solid #fff;border-width:0 2px 2px 0;transform:translate(-50%, 50%) rotate(45deg)}.ui-form-checkbox.-switch input~.ui-form-checkbox-checkmark::after{display:block;background-color:var(--s-color-fill-default-hover)}.ui-form-checkbox.-switch input:checked~.ui-form-checkbox-checkmark{background-color:var(--s-color-fill-highlight)}.ui-form-checkbox.-switch input:checked~.ui-form-checkbox-checkmark:after{background-color:var(--s-color-content-on-color);left:55%}.ui-form-checkbox.-switch .ui-form-checkbox-checkmark{width:32px;min-width:32px;border-radius:12px;height:20px}.ui-form-checkbox.-switch .ui-form-checkbox-checkmark:after{width:12px;height:12px;left:8%;top:50%;border-radius:100%;bottom:1px;background-color:var(--s-color-fill-default);transition:all .15s cubic-bezier(0.2, 0.85, 0.32, 1.2),opacity .15s;border:none;transform:translate(0%, -50%)}',
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/InputCheckbox/InputCheckbox.scss",
            ],
            names: [],
            mappings:
              "AAAA,kBACE,YAAA,CACA,kBAAA,CACA,iBAAA,CACA,cAAA,CACA,gBAAA,CACA,0CAAA,CACA,oCAAA,CACA,6BAAA,CAEA,gCACE,YAAA,CAEA,4DACE,iDAAA,CACA,kBAAA,CAIJ,4BACE,WAAA,CAGF,6BACE,mBAAA,CAGF,oCACE,gCAAA,CAIA,oDACE,0CAAA,CAIJ,+CACE,YAAA,CAGF,wBACE,iBAAA,CACA,SAAA,CACA,cAAA,CACA,UAAA,CACA,SAAA,CACA,2CAAA,CACA,4BAAA,CAEA,0DACE,4NACE,CAOJ,4DACE,8CAAA,CACA,0BAAA,CACA,4NACE,CAMF,mEACE,aAAA,CAIJ,kEACE,8CAAA,CACA,0BAAA,CACA,4NACE,CAMF,wEACE,aAAA,CACA,QAAA,CACA,OAAA,CACA,SAAA,CACA,UAAA,CACA,2CAAA,CAIJ,gIAEE,8BAAA,CACA,0NACE,CAQN,iCACE,WAAA,CAGE,mEACE,4CAAA,CAIJ,6DACE,4CAAA,CAEA,oEACE,2CAAA,CAIJ,wDACE,oCAAA,CAIJ,8CACE,iBAAA,CACA,KAAA,CACA,MAAA,CACA,cAAA,CACA,UAAA,CACA,cAAA,CACA,4CAAA,CACA,0CAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,0NACE,CAMF,2DACE,iDAAA,CACA,kBAAA,CAGF,oDACE,YAAA,CACA,UAAA,CACA,iBAAA,CACA,UAAA,CACA,QAAA,CACA,SAAA,CACA,UAAA,CACA,iBAAA,CACA,wBAAA,CACA,4CAAA,CAOE,mEACE,aAAA,CACA,kDAAA,CAMJ,oEACE,8CAAA,CAEA,0EACE,gDAAA,CACA,QAAA,CAKN,sDACE,UAAA,CACA,cAAA,CACA,kBAAA,CACA,WAAA,CAEA,4DACE,UAAA,CACA,WAAA,CACA,OAAA,CACA,OAAA,CACA,kBAAA,CACA,UAAA,CACA,4CAAA,CACA,mEACE,CAEF,WAAA,CACA,6BAAA",
            sourcesContent: [
              '.ui-form-checkbox {\n  display: flex;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n  user-select: none;\n  font: var(--s-typography-paragraph-regular);\n  color: var(--s-color-content-default);\n  gap: var(--s-spacing-xx-small);\n\n  &:focus-visible {\n    outline: none;\n\n    .ui-form-checkbox-checkmark {\n      outline: 2px solid var(--s-color-border-highlight);\n      outline-offset: 2px;\n    }\n  }\n\n  &.-disabled {\n    cursor: auto;\n  }\n\n  &.-no-events {\n    pointer-events: none;\n  }\n\n  + .ui-form-checkbox {\n    margin-top: var(--s-spacing-nano);\n  }\n\n  &:hover {\n    .ui-form-checkbox-checkmark {\n      border-color: var(--s-color-fill-highlight);\n    }\n  }\n\n  .ui-form-checkbox-text:empty {\n    display: none;\n  }\n\n  input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 1px;\n    width: 1px;\n    left: calc(var(--s-spacing-x-small) / 2 - 1px);\n    top: var(--s-spacing-x-small);\n\n    &:hover ~ .ui-form-checkbox-checkmark {\n      box-shadow:\n        0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset,\n        0px 0px 0px 2px var(--s-color-fill-highlight) inset,\n        0px -1px 2px 0px rgba(0, 0, 0, 0.24) inset,\n        0px 1px 0.5px 0.5px rgba(255, 255, 255, 0.44) inset,\n        0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n    }\n\n    &:checked ~ .ui-form-checkbox-checkmark {\n      background-color: var(--s-color-fill-highlight);\n      border-color: transparent;\n      box-shadow:\n        0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset,\n        0px 0px 0px 2px var(--s-color-fill-highlight) inset,\n        0px -1px 2px 0px rgba(0, 0, 0, 0.24) inset,\n        0px 1px 0.5px 0.5px rgba(255, 255, 255, 0.44) inset,\n        0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n\n      &::after {\n        display: block;\n      }\n    }\n\n    &:indeterminate ~ .ui-form-checkbox-checkmark {\n      background-color: var(--s-color-fill-highlight);\n      border-color: transparent;\n      box-shadow:\n        0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset,\n        0px 0px 0px 2px var(--s-color-fill-highlight) inset,\n        0px -1px 2px 0px rgba(0, 0, 0, 0.24) inset,\n        0px 1px 0.5px 0.5px rgba(255, 255, 255, 0.44) inset,\n        0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n\n      &:after {\n        display: block;\n        left: 50%;\n        top: 50%;\n        width: 50%;\n        height: 0px;\n        transform: translateX(-50%) translateY(-50%);\n      }\n    }\n\n    &:disabled ~ .ui-form-checkbox-checkmark,\n    &:disabled:hover ~ .ui-form-checkbox-checkmark {\n      background-color: transparent;\n      box-shadow:\n        0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset,\n        0px 0px 0px 2px var(--s-color-fill-disable) inset,\n        0px -1px 2px 0px rgba(0, 0, 0, 0.24) inset,\n        0px 1px 0.5px 0.5px rgba(255, 255, 255, 0.44) inset,\n        0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n    }\n  }\n\n  input:disabled {\n    cursor: auto;\n\n    &:hover {\n      ~ .ui-form-checkbox-checkmark {\n        background-color: var(--s-color-fill-disable);\n      }\n    }\n\n    ~ .ui-form-checkbox-checkmark {\n      background-color: var(--s-color-fill-disable);\n\n      &::after {\n        border-color: var(--s-color-content-disable);\n      }\n    }\n\n    ~ .ui-form-checkbox-text {\n      color: var(--s-color-content-disable);\n    }\n  }\n\n  .ui-form-checkbox-checkmark {\n    position: relative;\n    top: 0;\n    left: 0;\n    min-width: 20px;\n    width: 20px;\n    aspect-ratio: 1;\n    background-color: var(--s-color-fill-default);\n    border-radius: var(--s-border-radius-small);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow:\n      0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset,\n      0px 0px 0px 2px var(--s-color-fill-disable) inset,\n      0px -1px 2px 0px rgba(0, 0, 0, 0.24) inset,\n      0px 1px 0.5px 0.5px rgba(255, 255, 255, 0.44) inset,\n      0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n\n    &:focus-within {\n      outline: 2px solid var(--s-color-border-highlight);\n      outline-offset: 2px;\n    }\n\n    &:after {\n      display: none;\n      content: "";\n      position: absolute;\n      bottom: 55%;\n      left: 50%;\n      width: 4px;\n      height: 8px;\n      border: solid white;\n      border-width: 0 2px 2px 0;\n      transform: translate(-50%, 50%) rotate(45deg);\n    }\n  }\n\n  &.-switch {\n    input {\n      ~ .ui-form-checkbox-checkmark {\n        &::after {\n          display: block;\n          background-color: var(--s-color-fill-default-hover);\n        }\n      }\n    }\n\n    input:checked {\n      ~ .ui-form-checkbox-checkmark {\n        background-color: var(--s-color-fill-highlight);\n\n        &:after {\n          background-color: var(--s-color-content-on-color);\n          left: calc(55%);\n        }\n      }\n    }\n\n    .ui-form-checkbox-checkmark {\n      width: 32px;\n      min-width: 32px;\n      border-radius: 12px;\n      height: 20px;\n\n      &:after {\n        width: 12px;\n        height: 12px;\n        left: 8%;\n        top: 50%;\n        border-radius: 100%;\n        bottom: 1px;\n        background-color: var(--s-color-fill-default);\n        transition:\n          all 0.15s cubic-bezier(0.2, 0.85, 0.32, 1.2),\n          opacity 0.15s;\n        border: none;\n        transform: translate(0%, -50%);\n      }\n    }\n  }\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputNumber/InputNumber.scss":
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
          ".input-number-root{box-sizing:border-box;width:100%;display:flex;flex-direction:column;gap:var(--s-spacing-nano);height:min-content}.input-number-root .input-number-label{font:var(--s-typography-label-medium);color:var(--s-color-content-default)}.input-number-root .input-number{border-radius:var(--s-border-radius-medium);display:flex;align-items:center;justify-content:space-between;width:100%;color:var(--s-color-content-default);box-shadow:0px 1px 2px 0px rgba(14,21,36,.06)}.input-number-root .input-number button:hover+input{border-left:none}.input-number-root .input-number input:hover+.add{border-left:none}.input-number-root .input-number input:hover{border-right:1px solid var(--s-color-border-default-hover)}.input-number-root .input-number.disabled{border-color:var(--s-color-border-default);background-color:var(--s-color-fill-disable);opacity:.64}.input-number-root .input-number.disabled input{background-color:var(--s-color-fill-disable)}.input-number-root .input-number.disabled input:hover{border-color:var(--s-color-border-default)}.input-number-root .input-number.disabled button:hover{background-color:rgba(0,0,0,0)}.input-number-root .input-number.disabled button:active{outline:none}.input-number-root .input-number:focus-within{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.input-number-root .input-number .add{display:flex;justify-content:center;height:40px;width:40px;box-sizing:border-box;border-radius:0 var(--s-border-radius-medium) var(--s-border-radius-medium) 0;z-index:2}.input-number-root .input-number .add:active{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:-1px;outline-style:solid}.input-number-root .input-number .add:hover{border:1px solid var(--s-color-border-default-hover)}.input-number-root .input-number .subtract{display:flex;justify-content:center;height:40px;width:40px;box-sizing:border-box;border-right:0;z-index:2;border-radius:var(--s-border-radius-medium) 0 0 var(--s-border-radius-medium)}.input-number-root .input-number .subtract:active{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:-1px;outline-style:solid}.input-number-root .input-number .subtract:hover{border:1px solid var(--s-color-border-default-hover)}.input-number-root .input-number button{display:flex;align-items:center;padding:var(--s-spacing-xx-small);margin:0;background-color:var(--s-color-fill-default);cursor:pointer;color:var(--s-color-content-default);border:var(--s-border-width-hairline) solid var(--s-color-border-default)}.input-number-root .input-number button:hover{background-color:var(--s-color-fill-default-hover)}.input-number-root .input-number button:focus-visible{outline:none}.input-number-root .input-number button:disabled{background-color:var(--s-color-fill-disable);color:var(--s-color-content-disable);cursor:auto}.input-number-root .input-number button:disabled:hover{border-color:var(--s-color-border-default)}.input-number-root .input-number input[type=number]::-webkit-inner-spin-button{-webkit-appearance:none}.input-number-root .input-number input[type=number]{-moz-appearance:textfield;appearance:textfield}.input-number-root .input-number input{height:40px;box-sizing:border-box;text-align:center;color:var(--s-color-content-default);font:var(--s-typography-paragraph-regular);width:100%;padding:var(--s-spacing-xx-small);border:1px solid var(--s-color-border-default);border-right:none;background-color:var(--s-color-fill-default)}.input-number-root .input-number input:hover{border-color:var(--s-color-border-default-hover)}.input-number-root .input-number input:focus-visible{outline:none}.input-number-root .input-number input::placeholder{text-align:center;color:var(--s-color-content-placeholder);font:var(--s-typography-paragraph-regular)}.input-number-root .input-number .input.error{background-color:var(--s-color-fill-warning-light);border:var(--s-border-width-hairline) solid var(--s-color-border-warning);color:var(--s-color-content-warning)}.input-number-root .textError{color:var(--s-color-content-warning);font:var(--s-typography-caption-regular)}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/InputNumber/InputNumber.scss",
            ],
            names: [],
            mappings:
              "AAAA,mBACE,qBAAA,CACA,UAAA,CACA,YAAA,CACA,qBAAA,CACA,yBAAA,CACA,kBAAA,CAEA,uCACE,qCAAA,CACA,oCAAA,CAGF,iCACE,2CAAA,CACA,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,UAAA,CACA,oCAAA,CACA,6CAAA,CAEA,oDACE,gBAAA,CAGF,kDACE,gBAAA,CAGF,6CACE,0DAAA,CAGF,0CACE,0CAAA,CACA,4CAAA,CACA,WAAA,CACA,gDACE,4CAAA,CAEA,sDACE,0CAAA,CAIJ,uDACE,8BAAA,CAGF,wDACE,YAAA,CAIJ,8CACE,wCAAA,CACA,6CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,sCACE,YAAA,CACA,sBAAA,CACA,WAAA,CACA,UAAA,CACA,qBAAA,CACA,6EAAA,CAEA,SAAA,CAEA,6CACE,wCAAA,CACA,6CAAA,CACA,mBAAA,CACA,mBAAA,CAGF,4CACE,oDAAA,CAIJ,2CACE,YAAA,CACA,sBAAA,CACA,WAAA,CACA,UAAA,CACA,qBAAA,CACA,cAAA,CACA,SAAA,CACA,6EAAA,CAGA,kDACE,wCAAA,CACA,6CAAA,CACA,mBAAA,CACA,mBAAA,CAGF,iDACE,oDAAA,CAIJ,wCACE,YAAA,CACA,kBAAA,CACA,iCAAA,CACA,QAAA,CACA,4CAAA,CACA,cAAA,CACA,oCAAA,CACA,yEAAA,CAEA,8CACE,kDAAA,CAGF,sDACE,YAAA,CAGF,iDACE,4CAAA,CACA,oCAAA,CACA,WAAA,CAEA,uDACE,0CAAA,CAKN,+EACE,uBAAA,CAGF,oDACE,yBAAA,CACA,oBAAA,CAGF,uCACE,WAAA,CACA,qBAAA,CACA,iBAAA,CACA,oCAAA,CACA,0CAAA,CACA,UAAA,CACA,iCAAA,CACA,8CAAA,CACA,iBAAA,CACA,4CAAA,CAEA,6CACE,gDAAA,CAGF,qDACE,YAAA,CAGF,oDACE,iBAAA,CACA,wCAAA,CACA,0CAAA,CAIJ,8CACE,kDAAA,CACA,yEAAA,CACA,oCAAA,CAIJ,8BACE,oCAAA,CACA,wCAAA",
            sourcesContent: [
              '.input-number-root {\n  box-sizing: border-box;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: var(--s-spacing-nano);\n  height: min-content;\n\n  .input-number-label {\n    font: var(--s-typography-label-medium);\n    color: var(--s-color-content-default);\n  }\n\n  .input-number {\n    border-radius: var(--s-border-radius-medium);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    color: var(--s-color-content-default);\n    box-shadow: 0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n\n    button:hover + input {\n      border-left: none;\n    }\n\n    input:hover + .add {\n      border-left: none;\n    }\n\n    input:hover {\n      border-right: 1px solid var(--s-color-border-default-hover);\n    }\n\n    &.disabled {\n      border-color: var(--s-color-border-default);\n      background-color: var(--s-color-fill-disable);\n      opacity: 0.64;\n      input {\n        background-color: var(--s-color-fill-disable);\n\n        &:hover {\n          border-color: var(--s-color-border-default);\n        }\n      }\n\n      button:hover {\n        background-color: transparent;\n      }\n\n      button:active {\n        outline: none;\n      }\n    }\n\n    &:focus-within {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-border-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    .add {\n      display: flex;\n      justify-content: center;\n      height: 40px;\n      width: 40px;\n      box-sizing: border-box;\n      border-radius: 0 var(--s-border-radius-medium)\n        var(--s-border-radius-medium) 0;\n      z-index: 2;\n\n      &:active {\n        outline-width: var(--s-border-width-thin);\n        outline-color: var(--s-color-border-highlight);\n        outline-offset: -1px;\n        outline-style: solid;\n      }\n\n      &:hover {\n        border: 1px solid var(--s-color-border-default-hover);\n      }\n    }\n\n    .subtract {\n      display: flex;\n      justify-content: center;\n      height: 40px;\n      width: 40px;\n      box-sizing: border-box;\n      border-right: 0;\n      z-index: 2;\n      border-radius: var(--s-border-radius-medium) 0 0\n        var(--s-border-radius-medium);\n\n      &:active {\n        outline-width: var(--s-border-width-thin);\n        outline-color: var(--s-color-border-highlight);\n        outline-offset: -1px;\n        outline-style: solid;\n      }\n\n      &:hover {\n        border: 1px solid var(--s-color-border-default-hover);\n      }\n    }\n\n    button {\n      display: flex;\n      align-items: center;\n      padding: var(--s-spacing-xx-small);\n      margin: 0;\n      background-color: var(--s-color-fill-default);\n      cursor: pointer;\n      color: var(--s-color-content-default);\n      border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n\n      &:hover {\n        background-color: var(--s-color-fill-default-hover);\n      }\n\n      &:focus-visible {\n        outline: none;\n      }\n\n      &:disabled {\n        background-color: var(--s-color-fill-disable);\n        color: var(--s-color-content-disable);\n        cursor: auto;\n\n        &:hover {\n          border-color: var(--s-color-border-default);\n        }\n      }\n    }\n\n    input[type="number"]::-webkit-inner-spin-button {\n      -webkit-appearance: none;\n    }\n\n    input[type="number"] {\n      -moz-appearance: textfield;\n      appearance: textfield;\n    }\n\n    input {\n      height: 40px;\n      box-sizing: border-box;\n      text-align: center;\n      color: var(--s-color-content-default);\n      font: var(--s-typography-paragraph-regular);\n      width: 100%;\n      padding: var(--s-spacing-xx-small);\n      border: 1px solid var(--s-color-border-default);\n      border-right: none;\n      background-color: var(--s-color-fill-default);\n\n      &:hover {\n        border-color: var(--s-color-border-default-hover);\n      }\n\n      &:focus-visible {\n        outline: none;\n      }\n\n      &::placeholder {\n        text-align: center;\n        color: var(--s-color-content-placeholder);\n        font: var(--s-typography-paragraph-regular);\n      }\n    }\n\n    .input.error {\n      background-color: var(--s-color-fill-warning-light);\n      border: var(--s-border-width-hairline) solid var(--s-color-border-warning);\n      color: var(--s-color-content-warning);\n    }\n  }\n\n  .textError {\n    color: var(--s-color-content-warning);\n    font: var(--s-typography-caption-regular);\n  }\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputRadioButton/InputRadioButton.scss":
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
          '.radio-button-root{display:flex;align-items:center;gap:var(--s-spacing-xx-small)}.radio-button-root:hover .radio-button{box-shadow:0px -1px 0px 0px rgba(0,0,0,.2) inset,0px 0px 0px 2px var(--s-color-border-highlight) inset,0px -1px 2px 0px rgba(0,0,0,.24) inset,0px 1px .5px .5px rgba(255,255,255,.44) inset,0px 1px 2px 0px rgba(14,21,36,.06)}.radio-button-root:hover .radio-button::before{box-shadow:0px -1px 0px 0px rgba(0,0,0,.2) inset,0px 0px 0px 2px var(--s-color-border-highlight) inset,0px -1px 2px 0px rgba(0,0,0,.24) inset,0px 1px .5px .5px rgba(255,255,255,.44) inset,0px 1px 2px 0px rgba(14,21,36,.06)}.radio-button-root .radio-button{width:24px;height:24px;border-radius:var(--s-border-radius-large);position:relative;cursor:pointer;color:var(--s-color-content-default);user-select:none}.radio-button-root .radio-button.disable{border-color:var(--s-color-content-disable);cursor:auto;background-color:var(--s-color-fill-disable)}.radio-button-root .radio-button:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-style:solid;outline-offset:var(--s-border-width-thin)}.radio-button-root .radio-button::before{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);z-index:1;width:24px;height:24px;background-color:rgba(0,0,0,0);box-shadow:0px -1px 0px 0px rgba(0,0,0,.2) inset,0px 0px 0px 2px var(--s-color-border-default) inset,0px -1px 2px 0px rgba(0,0,0,.24) inset,0px 1px .5px .5px rgba(255,255,255,.44) inset,0px 1px 2px 0px rgba(14,21,36,.06);border-radius:var(--s-border-radius-pill)}.radio-button-root .radio-button:hover::before{box-shadow:0px -1px 0px 0px rgba(0,0,0,.2) inset,0px 0px 0px 2px var(--s-color-fill-highlight) inset,0px -1px 2px 0px rgba(0,0,0,.24) inset,0px 1px .5px .5px rgba(255,255,255,.44) inset,0px 1px 2px 0px rgba(14,21,36,.06)}.radio-button-root .radio-button.checked{background-color:var(--s-color-fill-highlight)}.radio-button-root .radio-button.checked .radio-circle{box-shadow:0px 1px 2px rgba(14,21,36,.06)}.radio-button-root .radio-button.checked::before{box-shadow:0px -1px 0px 0px rgba(0,0,0,.2) inset,0px 0px 0px 2px var(--s-color-fill-highlight) inset,0px -1px 2px 0px rgba(0,0,0,.24) inset,0px 1px .5px .5px rgba(255,255,255,.44) inset,0px 1px 2px 0px rgba(14,21,36,.06)}.radio-button-root .radio-button.checked{border-color:var(--s-color-fill-highlight);color:var(--s-color-content-highlight)}.radio-button-root .radio-button.disabled{color:var(--s-color-content-disable);cursor:auto}.radio-button-root .radio-button.disabled .checked,.radio-button-root .radio-button.disabled .unchecked{color:var(--s-color-content-disable)}.radio-button-root .radio-button .unchecked:hover{color:var(--s-color-content-highlight)}.radio-button-root .radio-button .checked{cursor:pointer;color:var(--s-color-content-highlight);background-color:rgba(0,0,0,0)}.radio-button-root.disable .radio-button{background-color:var(--s-color-fill-disable)}.radio-button-root.disable .radio-button.checked::before{box-shadow:0px -1px 0px 0px rgba(0,0,0,.2) inset,0px 0px 0px 2px var(--s-color-border-default) inset,0px -1px 2px 0px rgba(0,0,0,.24) inset,0px 1px .5px .5px rgba(255,255,255,.44) inset,0px 1px 2px 0px rgba(14,21,36,.06)}.radio-button-root.disable:hover .radio-button{box-shadow:0px -1px 0px 0px rgba(0,0,0,.2) inset,0px 0px 0px 2px var(--s-color-border-default) inset,0px -1px 2px 0px rgba(0,0,0,.24) inset,0px 1px .5px .5px rgba(255,255,255,.44) inset,0px 1px 2px 0px rgba(14,21,36,.06);cursor:auto}.radio-button-root.disable:hover .radio-button::before{box-shadow:0px -1px 0px 0px rgba(0,0,0,.2) inset,0px 0px 0px 2px var(--s-color-border-disable) inset,0px -1px 2px 0px rgba(0,0,0,.24) inset,0px 1px .5px .5px rgba(255,255,255,.44) inset,0px 1px 2px 0px rgba(14,21,36,.06)}.radio-button-root .radio-circle{position:absolute;top:50%;left:50%;width:12px;height:12px;border-radius:50%;transition:background-color .1s ease-in-out;transform:translate(-50%, -50%)}.radio-button-root .checked-circle{background-color:var(--s-color-fill-default)}.radio-button-root .radio-button-label{font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default);cursor:pointer;user-select:none}.radio-button-root .radio-button-label.disabled{color:var(--s-color-content-disable);cursor:auto}.radio-button-root .radio-button-root:hover .unchecked{color:var(--s-color-content-highlight)}',
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/InputRadioButton/InputRadioButton.scss",
            ],
            names: [],
            mappings:
              "AAAA,mBACE,YAAA,CACA,kBAAA,CACA,6BAAA,CAGE,uCACE,8NACE,CAMF,+CACE,8NACE,CASR,iCACE,UAAA,CACA,WAAA,CACA,0CAAA,CACA,iBAAA,CACA,cAAA,CACA,oCAAA,CACA,gBAAA,CAEA,yCACE,2CAAA,CACA,WAAA,CACA,4CAAA,CAGF,+CACE,wCAAA,CACA,6CAAA,CACA,mBAAA,CACA,yCAAA,CAGF,yCACE,UAAA,CACA,iBAAA,CACA,OAAA,CACA,QAAA,CACA,+BAAA,CACA,SAAA,CACA,UAAA,CACA,WAAA,CACA,8BAAA,CACA,4NACE,CAKF,yCAAA,CAGF,+CACE,4NACE,CAOJ,yCACE,8CAAA,CAEA,uDACE,yCAAA,CAGF,iDACE,4NACE,CAQN,yCACE,0CAAA,CACA,sCAAA,CAGF,0CACE,oCAAA,CACA,WAAA,CAEA,wGAEE,oCAAA,CAKF,kDACE,sCAAA,CAIJ,0CACE,cAAA,CACA,sCAAA,CACA,8BAAA,CAKF,yCACE,4CAAA,CAEA,yDACE,4NACE,CAQJ,+CACE,4NACE,CAKF,WAAA,CAEA,uDACE,4NACE,CAUV,iCACE,iBAAA,CACA,OAAA,CACA,QAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,2CAAA,CACA,+BAAA,CAGF,mCACE,4CAAA,CAGF,uCACE,0CAAA,CACA,oCAAA,CACA,cAAA,CACA,gBAAA,CAEA,gDACE,oCAAA,CACA,WAAA,CAIJ,uDACE,sCAAA",
            sourcesContent: [
              '.radio-button-root {\n  display: flex;\n  align-items: center;\n  gap: var(--s-spacing-xx-small);\n\n  &:hover {\n    .radio-button {\n      box-shadow:\n        0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset,\n        0px 0px 0px 2px var(--s-color-border-highlight) inset,\n        0px -1px 2px 0px rgba(0, 0, 0, 0.24) inset,\n        0px 1px 0.5px 0.5px rgba(255, 255, 255, 0.44) inset,\n        0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n\n      &::before {\n        box-shadow:\n          0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset,\n          0px 0px 0px 2px var(--s-color-border-highlight) inset,\n          0px -1px 2px 0px rgba(0, 0, 0, 0.24) inset,\n          0px 1px 0.5px 0.5px rgba(255, 255, 255, 0.44) inset,\n          0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n      }\n    }\n  }\n\n  .radio-button {\n    width: 24px;\n    height: 24px;\n    border-radius: var(--s-border-radius-large);\n    position: relative;\n    cursor: pointer;\n    color: var(--s-color-content-default);\n    user-select: none;\n\n    &.disable {\n      border-color: var(--s-color-content-disable);\n      cursor: auto;\n      background-color: var(--s-color-fill-disable);\n    }\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-border-highlight);\n      outline-style: solid;\n      outline-offset: var(--s-border-width-thin);\n    }\n\n    &::before {\n      content: "";\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      z-index: 1;\n      width: 24px;\n      height: 24px;\n      background-color: transparent;\n      box-shadow:\n        0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset,\n        0px 0px 0px 2px var(--s-color-border-default) inset,\n        0px -1px 2px 0px rgba(0, 0, 0, 0.24) inset,\n        0px 1px 0.5px 0.5px rgba(255, 255, 255, 0.44) inset,\n        0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n      border-radius: var(--s-border-radius-pill);\n    }\n\n    &:hover::before {\n      box-shadow:\n        0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset,\n        0px 0px 0px 2px var(--s-color-fill-highlight) inset,\n        0px -1px 2px 0px rgba(0, 0, 0, 0.24) inset,\n        0px 1px 0.5px 0.5px rgba(255, 255, 255, 0.44) inset,\n        0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n    }\n\n    &.checked {\n      background-color: var(--s-color-fill-highlight);\n\n      .radio-circle {\n        box-shadow: 0px 1px 2px rgb(14 21 36/6%);\n      }\n\n      &::before {\n        box-shadow:\n          0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset,\n          0px 0px 0px 2px var(--s-color-fill-highlight) inset,\n          0px -1px 2px 0px rgba(0, 0, 0, 0.24) inset,\n          0px 1px 0.5px 0.5px rgba(255, 255, 255, 0.44) inset,\n          0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n      }\n    }\n\n    &.checked {\n      border-color: var(--s-color-fill-highlight);\n      color: var(--s-color-content-highlight);\n    }\n\n    &.disabled {\n      color: var(--s-color-content-disable);\n      cursor: auto;\n\n      .checked,\n      .unchecked {\n        color: var(--s-color-content-disable);\n      }\n    }\n\n    .unchecked {\n      &:hover {\n        color: var(--s-color-content-highlight);\n      }\n    }\n\n    .checked {\n      cursor: pointer;\n      color: var(--s-color-content-highlight);\n      background-color: transparent;\n    }\n  }\n\n  &.disable {\n    .radio-button {\n      background-color: var(--s-color-fill-disable);\n\n      &.checked::before {\n        box-shadow:\n          0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset,\n          0px 0px 0px 2px var(--s-color-border-default) inset,\n          0px -1px 2px 0px rgba(0, 0, 0, 0.24) inset,\n          0px 1px 0.5px 0.5px rgba(255, 255, 255, 0.44) inset,\n          0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n      }\n    }\n    &:hover {\n      .radio-button {\n        box-shadow:\n          0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset,\n          0px 0px 0px 2px var(--s-color-border-default) inset,\n          0px -1px 2px 0px rgba(0, 0, 0, 0.24) inset,\n          0px 1px 0.5px 0.5px rgba(255, 255, 255, 0.44) inset,\n          0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n        cursor: auto;\n\n        &::before {\n          box-shadow:\n            0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset,\n            0px 0px 0px 2px var(--s-color-border-disable) inset,\n            0px -1px 2px 0px rgba(0, 0, 0, 0.24) inset,\n            0px 1px 0.5px 0.5px rgba(255, 255, 255, 0.44) inset,\n            0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n        }\n      }\n    }\n  }\n\n  .radio-circle {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n    transition: background-color 0.1s ease-in-out;\n    transform: translate(-50%, -50%);\n  }\n\n  .checked-circle {\n    background-color: var(--s-color-fill-default);\n  }\n\n  .radio-button-label {\n    font: var(--s-typography-paragraph-regular);\n    color: var(--s-color-content-default);\n    cursor: pointer;\n    user-select: none;\n\n    &.disabled {\n      color: var(--s-color-content-disable);\n      cursor: auto;\n    }\n  }\n\n  .radio-button-root:hover .unchecked {\n    color: var(--s-color-content-highlight);\n  }\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputSelect/InputSelect.scss":
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
          ".input-select-root{display:flex;flex-direction:column;gap:var(--s-spacing-nano)}.input-select-root .input-select-label{font:var(--s-typography-label-medium);color:var(--s-color-content-default)}.input-select-root .input-select-button{cursor:pointer;padding:var(--s-spacing-xx-small) var(--s-spacing-x-small);display:flex;justify-content:space-between;align-items:center;border:var(--s-border-width-hairline) solid var(--s-color-border-default);background-color:var(--s-color-fill-default);border-radius:var(--s-border-radius-medium);color:var(--s-color-content-placeholder);box-shadow:0px 1px 2px 0px rgba(14,21,36,.06)}.input-select-root .input-select-button:hover{background-color:var(--s-color-fill-default-hover);border:1px solid var(--s-color-border-default-hover)}.input-select-root .input-select-button select{cursor:pointer;width:100%;background-color:rgba(0,0,0,0);color:var(--s-color-content-default);font:var(--s-typography-paragraph-regular);height:22px}.input-select-root .input-select-button select:focus{outline:none}.input-select-root .input-select-button select.select-error{color:var(--s-color-content-warning)}.input-select-root .input-select-button select option{cursor:pointer;display:flex;background-color:var(--s-color-fill-default);color:var(--s-color-content-default);font:var(--s-typography-paragraph-regular)}.input-select-root .input-select-button select:disabled{cursor:default}.input-select-root .input-select-button.option{color:var(--s-color-content-default)}.input-select-root .input-select-button.error{border-color:var(--s-color-border-warning);color:var(--s-color-content-warning);background-color:var(--s-color-fill-warning-light);cursor:auto}.input-select-root .input-select-button.error select{cursor:auto}.input-select-root .input-select-button.error:hover{background-color:var(--s-color-fill-warning-light)}.input-select-root .input-select-button.disabled{background-color:var(--s-color-fill-disable);color:var(--s-color-content-disable);opacity:.64;cursor:auto}.input-select-root .input-select-button.disabled:hover{border-color:var(--s-color-border-default)}.input-select-root .input-select-button:focus-within{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:var(--s-border-width-hairline);outline-style:solid}.input-select-root .input-select-error-message{color:var(--s-color-content-warning);font:VAR(--s-typography-caption-regular)}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/InputSelect/InputSelect.scss",
            ],
            names: [],
            mappings:
              "AAAA,mBACE,YAAA,CACA,qBAAA,CACA,yBAAA,CAEA,uCACE,qCAAA,CACA,oCAAA,CAGF,wCACE,cAAA,CACA,0DAAA,CACA,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,yEAAA,CACA,4CAAA,CACA,2CAAA,CACA,wCAAA,CACA,6CAAA,CAEA,8CACE,kDAAA,CACA,oDAAA,CAGF,+CACE,cAAA,CACA,UAAA,CACA,8BAAA,CACA,oCAAA,CACA,0CAAA,CACA,WAAA,CACA,qDACE,YAAA,CAGF,4DACE,oCAAA,CAGF,sDACE,cAAA,CACA,YAAA,CACA,4CAAA,CACA,oCAAA,CACA,0CAAA,CAIJ,wDACE,cAAA,CAGF,+CACE,oCAAA,CAGF,8CACE,0CAAA,CACA,oCAAA,CACA,kDAAA,CACA,WAAA,CAEA,qDACE,WAAA,CAGF,oDACE,kDAAA,CAIJ,iDACE,4CAAA,CACA,oCAAA,CACA,WAAA,CACA,WAAA,CAEA,uDACE,0CAAA,CAIJ,qDACE,wCAAA,CACA,6CAAA,CACA,6CAAA,CACA,mBAAA,CAIJ,+CACE,oCAAA,CACA,wCAAA",
            sourcesContent: [
              ".input-select-root {\n  display: flex;\n  flex-direction: column;\n  gap: var(--s-spacing-nano);\n\n  .input-select-label {\n    font: var(--s-typography-label-medium);\n    color: var(--s-color-content-default);\n  }\n\n  .input-select-button {\n    cursor: pointer;\n    padding: var(--s-spacing-xx-small) var(--s-spacing-x-small);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n    background-color: var(--s-color-fill-default);\n    border-radius: var(--s-border-radius-medium);\n    color: var(--s-color-content-placeholder);\n    box-shadow: 0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n\n    &:hover {\n      background-color: var(--s-color-fill-default-hover);\n      border: 1px solid var(--s-color-border-default-hover);\n    }\n\n    select {\n      cursor: pointer;\n      width: 100%;\n      background-color: transparent;\n      color: var(--s-color-content-default);\n      font: var(--s-typography-paragraph-regular);\n      height: 22px;\n      &:focus {\n        outline: none;\n      }\n\n      &.select-error {\n        color: var(--s-color-content-warning);\n      }\n\n      option {\n        cursor: pointer;\n        display: flex;\n        background-color: var(--s-color-fill-default);\n        color: var(--s-color-content-default);\n        font: var(--s-typography-paragraph-regular);\n      }\n    }\n\n    select:disabled {\n      cursor: default;\n    }\n\n    &.option {\n      color: var(--s-color-content-default);\n    }\n\n    &.error {\n      border-color: var(--s-color-border-warning);\n      color: var(--s-color-content-warning);\n      background-color: var(--s-color-fill-warning-light);\n      cursor: auto;\n\n      select {\n        cursor: auto;\n      }\n\n      &:hover {\n        background-color: var(--s-color-fill-warning-light);\n      }\n    }\n\n    &.disabled {\n      background-color: var(--s-color-fill-disable);\n      color: var(--s-color-content-disable);\n      opacity: 0.64;\n      cursor: auto;\n\n      &:hover {\n        border-color: var(--s-color-border-default);\n      }\n    }\n\n    &:focus-within {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-border-highlight);\n      outline-offset: var(--s-border-width-hairline);\n      outline-style: solid;\n    }\n  }\n\n  .input-select-error-message {\n    color: var(--s-color-content-warning);\n    font: VAR(--s-typography-caption-regular);\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputTextArea/InputTextArea.scss":
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
          ".text-area-root{display:flex;flex-direction:column;gap:var(--s-spacing-nano)}.text-area-root .text-area-label{color:var(--s-color-content-default);font:var(--s-typography-label-medium)}.text-area-root .text-area{cursor:text;display:flex;align-items:center;border-radius:var(--s-border-radius-medium);border:solid var(--s-border-width-hairline) var(--s-color-border-default);background-color:var(--s-color-fill-default);box-shadow:0px 1px 2px 0px rgba(14,21,36,.06)}.text-area-root .text-area textarea{width:100%;min-height:120px;padding:var(--s-spacing-xx-small) var(--s-spacing-x-small);color:var(--s-color-content-default);font:var(--s-typography-paragraph-regular);background-color:rgba(0,0,0,0);border:none;height:100%;resize:vertical}.text-area-root .text-area textarea::-webkit-scrollbar{width:var(--s-spacing-nano);border-radius:12px}.text-area-root .text-area textarea::-webkit-scrollbar-thumb{background:var(--s-color-fill-default-light);border-radius:12px}.text-area-root .text-area textarea:focus-visible{outline:none}.text-area-root .text-area textarea::placeholder{font:var(--s-typography-paragraph-regular);color:var(--s-color-content-placeholder)}.text-area-root .text-area:hover{border:1px solid var(--s-color-border-default-hover)}.text-area-root .text-area:focus-within{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:var(--s-border-width-hairline);outline-style:solid;background-color:var(--s-color-fill-default)}.text-area-root .text-area:active{color:var(--s-color-content-default);font:var(--s-typography-paragraph-regular)}.text-area-root .text-area.disabled{opacity:.64;color:var(--s-color-content-disable);background-color:var(--s-color-fill-disable);border-color:var(--s-color-border-default)}.text-area-root .text-area.disabled:focus-within{outline-style:none}.text-area-root .text-area.error{color:var(--s-color-content-warning);background-color:var(--s-color-fill-warning-light);cursor:not-allowed;border:solid var(--s-border-width-hairline) var(--s-color-border-warning)}.text-area-root .text-area.error textarea::placeholder{color:var(--s-color-content-warning)}.text-area-root .text-area.error:hover{background-color:var(--s-color-fill-warning-light)}.text-area-root .text-area.error:focus-within{outline:none;background-color:none}.text-area-root .text-area.error:active{color:var(--s-color-content-on-color)}.text-area-root .description{font:var(--s-typography-caption-regular);color:var(--s-color-content-warning);margin:0}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/InputTextArea/InputTextArea.scss",
            ],
            names: [],
            mappings:
              "AAAA,gBACE,YAAA,CACA,qBAAA,CACA,yBAAA,CAEA,iCACE,oCAAA,CACA,qCAAA,CAGF,2BACE,WAAA,CACA,YAAA,CACA,kBAAA,CACA,2CAAA,CACA,yEAAA,CACA,4CAAA,CACA,6CAAA,CAEA,oCACE,UAAA,CACA,gBAAA,CACA,0DAAA,CACA,oCAAA,CACA,0CAAA,CACA,8BAAA,CACA,WAAA,CACA,WAAA,CACA,eAAA,CAEA,uDACE,2BAAA,CACA,kBAAA,CAGF,6DACE,4CAAA,CACA,kBAAA,CAGF,kDACE,YAAA,CAGF,iDACE,0CAAA,CACA,wCAAA,CAIJ,iCACE,oDAAA,CAGF,wCACE,wCAAA,CACA,6CAAA,CACA,6CAAA,CACA,mBAAA,CACA,4CAAA,CAGF,kCACE,oCAAA,CACA,0CAAA,CAGF,oCACE,WAAA,CACA,oCAAA,CACA,4CAAA,CACA,0CAAA,CAGF,iDACE,kBAAA,CAGF,iCACE,oCAAA,CACA,kDAAA,CACA,kBAAA,CACA,yEAAA,CAEA,uDACE,oCAAA,CAGF,uCACE,kDAAA,CAGF,8CACE,YAAA,CACA,qBAAA,CAGF,wCACE,qCAAA,CAIN,6BACE,wCAAA,CACA,oCAAA,CACA,QAAA",
            sourcesContent: [
              ".text-area-root {\n  display: flex;\n  flex-direction: column;\n  gap: var(--s-spacing-nano);\n\n  .text-area-label {\n    color: var(--s-color-content-default);\n    font: var(--s-typography-label-medium);\n  }\n\n  .text-area {\n    cursor: text;\n    display: flex;\n    align-items: center;\n    border-radius: var(--s-border-radius-medium);\n    border: solid var(--s-border-width-hairline) var(--s-color-border-default);\n    background-color: var(--s-color-fill-default);\n    box-shadow: 0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n\n    textarea {\n      width: 100%;\n      min-height: 120px;\n      padding: var(--s-spacing-xx-small) var(--s-spacing-x-small);\n      color: var(--s-color-content-default);\n      font: var(--s-typography-paragraph-regular);\n      background-color: transparent;\n      border: none;\n      height: 100%;\n      resize: vertical;\n\n      &::-webkit-scrollbar {\n        width: var(--s-spacing-nano);\n        border-radius: 12px;\n      }\n\n      &::-webkit-scrollbar-thumb {\n        background: var(--s-color-fill-default-light);\n        border-radius: 12px;\n      }\n\n      &:focus-visible {\n        outline: none;\n      }\n\n      &::placeholder {\n        font: var(--s-typography-paragraph-regular);\n        color: var(--s-color-content-placeholder);\n      }\n    }\n\n    &:hover {\n      border: 1px solid var(--s-color-border-default-hover);\n    }\n\n    &:focus-within {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-border-highlight);\n      outline-offset: var(--s-border-width-hairline);\n      outline-style: solid;\n      background-color: var(--s-color-fill-default);\n    }\n\n    &:active {\n      color: var(--s-color-content-default);\n      font: var(--s-typography-paragraph-regular);\n    }\n\n    &.disabled {\n      opacity: 0.64;\n      color: var(--s-color-content-disable);\n      background-color: var(--s-color-fill-disable);\n      border-color: var(--s-color-border-default);\n    }\n\n    &.disabled:focus-within {\n      outline-style: none;\n    }\n\n    &.error {\n      color: var(--s-color-content-warning);\n      background-color: var(--s-color-fill-warning-light);\n      cursor: not-allowed;\n      border: solid var(--s-border-width-hairline) var(--s-color-border-warning);\n\n      textarea::placeholder {\n        color: var(--s-color-content-warning);\n      }\n\n      &:hover {\n        background-color: var(--s-color-fill-warning-light);\n      }\n\n      &:focus-within {\n        outline: none;\n        background-color: none;\n      }\n\n      &:active {\n        color: var(--s-color-content-on-color);\n      }\n    }\n  }\n  .description {\n    font: var(--s-typography-caption-regular);\n    color: var(--s-color-content-warning);\n    margin: 0;\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputTime/InputTime.scss":
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
          ".input-time{position:relative;z-index:1}.input-time .input-time-modal{z-index:99;padding:var(--s-spacing-nano);border-radius:var(--s-border-radius-small);margin-top:var(--s-spacing-xx-small);background-color:var(--s-color-fill-default);position:absolute;display:flex;height:232px;box-shadow:var(--s-shadow-dropdown);border:var(--s-border-width-hairline) solid var(--s-color-border-default)}.input-time .input-time-modal .modal-section{overflow-y:scroll;display:flex;flex-direction:column;gap:var(--s-spacing-xx-small);scroll-behavior:smooth}.input-time .input-time-modal .modal-section::-webkit-scrollbar{width:0px}.input-time .input-time-modal .modal-section .input-time-buttons{background-color:rgba(0,0,0,0);color:var(--s-color-content-default);border-radius:var(--s-border-radius-small);padding:var(--s-spacing-xx-small);cursor:pointer;z-index:999}.input-time .input-time-modal .modal-section .input-time-buttons:hover{background-color:var(--s-color-fill-default-hover)}.input-time .input-time-modal .modal-section .input-time-buttons:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:-2px;outline-style:solid}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/InputTime/InputTime.scss",
            ],
            names: [],
            mappings:
              "AAAA,YACE,iBAAA,CACA,SAAA,CAEA,8BACE,UAAA,CACA,6BAAA,CACA,0CAAA,CACA,oCAAA,CACA,4CAAA,CACA,iBAAA,CACA,YAAA,CACA,YAAA,CACA,mCAAA,CACA,yEAAA,CAEA,6CACE,iBAAA,CACA,YAAA,CACA,qBAAA,CACA,6BAAA,CACA,sBAAA,CAEA,gEACE,SAAA,CAGF,iEACE,8BAAA,CACA,oCAAA,CACA,0CAAA,CACA,iCAAA,CACA,cAAA,CACA,WAAA,CAGF,uEACE,kDAAA,CAGF,+EACE,wCAAA,CACA,6CAAA,CACA,mBAAA,CACA,mBAAA",
            sourcesContent: [
              ".input-time {\n  position: relative;\n  z-index: 1;\n\n  .input-time-modal {\n    z-index: 99;\n    padding: var(--s-spacing-nano);\n    border-radius: var(--s-border-radius-small);\n    margin-top: var(--s-spacing-xx-small);\n    background-color: var(--s-color-fill-default);\n    position: absolute;\n    display: flex;\n    height: 232px;\n    box-shadow: var(--s-shadow-dropdown);\n    border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n\n    .modal-section {\n      overflow-y: scroll;\n      display: flex;\n      flex-direction: column;\n      gap: var(--s-spacing-xx-small);\n      scroll-behavior: smooth;\n\n      &::-webkit-scrollbar {\n        width: 0px;\n      }\n\n      .input-time-buttons {\n        background-color: transparent;\n        color: var(--s-color-content-default);\n        border-radius: var(--s-border-radius-small);\n        padding: var(--s-spacing-xx-small);\n        cursor: pointer;\n        z-index: 999;\n      }\n\n      .input-time-buttons:hover {\n        background-color: var(--s-color-fill-default-hover);\n      }\n\n      .input-time-buttons:focus-visible {\n        outline-width: var(--s-border-width-thin);\n        outline-color: var(--s-color-border-highlight);\n        outline-offset: -2px;\n        outline-style: solid;\n      }\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Layout/Layout.scss":
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
          ".layout{display:grid;grid-gap:var(--s-spacing-small);height:100%}.layout.one-column{grid-template-columns:1fr;grid-auto-flow:dense}.layout.two-column-asymmetric{grid-auto-flow:dense;grid-template-columns:2fr 1fr}.layout.two-column-symmetric{grid-auto-flow:dense;grid-template-columns:repeat(2, 1fr)}.layout.three-column-symmetric{grid-auto-flow:dense;grid-template-columns:repeat(3, 1fr)}@media screen and (max-width: 490px){.layout.two-column-symmetric{grid-template-columns:1fr}.layout.two-column-asymmetric{grid-template-columns:1fr}.layout.three-column-symmetric{grid-template-columns:1fr}}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Layout/Layout.scss"],
            names: [],
            mappings:
              "AAAA,QACE,YAAA,CACA,+BAAA,CACA,WAAA,CAEA,mBACE,yBAAA,CACA,oBAAA,CAGF,8BACE,oBAAA,CACA,6BAAA,CAGF,6BACE,oBAAA,CACA,oCAAA,CAGF,+BACE,oBAAA,CACA,oCAAA,CAIJ,qCAEI,6BACE,yBAAA,CAEF,8BACE,yBAAA,CAEF,+BACE,yBAAA,CAAA",
            sourcesContent: [
              ".layout {\n  display: grid;\n  grid-gap: var(--s-spacing-small);\n  height: 100%;\n\n  &.one-column {\n    grid-template-columns: 1fr;\n    grid-auto-flow: dense;\n  }\n\n  &.two-column-asymmetric {\n    grid-auto-flow: dense;\n    grid-template-columns: 2fr 1fr;\n  }\n\n  &.two-column-symmetric {\n    grid-auto-flow: dense;\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  &.three-column-symmetric {\n    grid-auto-flow: dense;\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n\n@media screen and (max-width: 490px) {\n  .layout {\n    &.two-column-symmetric {\n      grid-template-columns: 1fr;\n    }\n    &.two-column-asymmetric {\n      grid-template-columns: 1fr;\n    }\n    &.three-column-symmetric {\n      grid-template-columns: 1fr;\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Page/Page.scss":
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
          ".page-root{grid-area:main;padding:var(--s-spacing-medium) var(--s-spacing-x-large);display:flex;flex-direction:column;width:100%;max-width:1280px;gap:var(--s-spacing-medium)}.page-root .page-description{display:flex;flex-direction:column;white-space:normal;word-wrap:break-word;color:var(--s-color-content-default)}.page-root .page-description.with-back-button{padding-left:var(--s-spacing-huge)}.page-root .page-header{display:flex;flex-direction:row;justify-content:space-between;align-items:center;box-sizing:border-box;gap:var(--s-spacing-small)}.page-root .page-header .page-header-title{width:100%;display:flex;align-items:center;gap:var(--s-spacing-small);min-height:var(--s-spacing-x-large);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.page-root .page-header .page-header-title h1{font:var(--s-typography-heading-large);line-height:var(--s-line-height-32);color:var(--s-color-content-default);overflow:hidden;text-overflow:ellipsis}.page-root .page-header .page-header-actions{display:flex;gap:var(--s-spacing-xx-small)}.page-root .page-header .page-header-actions .button-icon-actions{display:none}@media screen and (max-width: 768px){.page-root{padding:var(--s-spacing-medium) var(--s-spacing-small)}.page-root .page-header .page-header-actions .button-actions{display:none}.page-root .page-header .page-header-actions .button-icon-actions{display:flex}}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Page/Page.scss"],
            names: [],
            mappings:
              "AAAA,WACE,cAAA,CACA,wDAAA,CACA,YAAA,CACA,qBAAA,CACA,UAAA,CACA,gBAAA,CACA,2BAAA,CAEA,6BACE,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,oBAAA,CACA,oCAAA,CACA,8CACE,kCAAA,CAIJ,wBACE,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,kBAAA,CACA,qBAAA,CACA,0BAAA,CAEA,2CACE,UAAA,CACA,YAAA,CACA,kBAAA,CACA,0BAAA,CACA,mCAAA,CACA,kBAAA,CACA,eAAA,CACA,sBAAA,CAEA,8CACE,sCAAA,CACA,mCAAA,CACA,oCAAA,CACA,eAAA,CACA,sBAAA,CAIJ,6CACE,YAAA,CAEA,6BAAA,CAEA,kEACE,YAAA,CAMR,qCACE,WACE,sDAAA,CAGI,6DACE,YAAA,CAEF,kEACE,YAAA,CAAA",
            sourcesContent: [
              ".page-root {\n  grid-area: main;\n  padding: var(--s-spacing-medium) var(--s-spacing-x-large);\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 1280px;\n  gap: var(--s-spacing-medium);\n\n  .page-description {\n    display: flex;\n    flex-direction: column;\n    white-space: normal;\n    word-wrap: break-word;\n    color: var(--s-color-content-default);\n    &.with-back-button {\n      padding-left: var(--s-spacing-huge);\n    }\n  }\n\n  .page-header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    box-sizing: border-box;\n    gap: var(--s-spacing-small);\n\n    .page-header-title {\n      width: 100%;\n      display: flex;\n      align-items: center;\n      gap: var(--s-spacing-small);\n      min-height: var(--s-spacing-x-large);\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n\n      h1 {\n        font: var(--s-typography-heading-large);\n        line-height: var(--s-line-height-32);\n        color: var(--s-color-content-default);\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n    }\n\n    .page-header-actions {\n      display: flex;\n\n      gap: var(--s-spacing-xx-small);\n\n      .button-icon-actions {\n        display: none;\n      }\n    }\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .page-root {\n    padding: var(--s-spacing-medium) var(--s-spacing-small);\n    .page-header {\n      .page-header-actions {\n        .button-actions {\n          display: none;\n        }\n        .button-icon-actions {\n          display: flex;\n        }\n      }\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Progress/Progress.scss":
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
          ".progress{position:relative;width:100%;height:4px;background-color:var(--s-color-border-default);overflow:hidden}.progress .progress-bar-loading{position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;background:var(--s-color-fill-highlight);animation:loading 2s linear infinite}.progress .progress-bar{height:100%;background-color:var(--s-color-fill-highlight);transition:width .3s ease}.progress .progress-bar-success{background-color:var(--s-color-fill-success)}.progress .progress-bar-error{background-color:var(--s-color-fill-warning)}@keyframes loading{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Progress/Progress.scss"],
            names: [],
            mappings:
              "AAAA,UACE,iBAAA,CACA,UAAA,CACA,UAAA,CACA,8CAAA,CACA,eAAA,CAEA,gCACE,iBAAA,CACA,KAAA,CACA,MAAA,CACA,WAAA,CACA,UAAA,CACA,eAAA,CACA,wCAAA,CACA,oCAAA,CAGF,wBACE,WAAA,CACA,8CAAA,CACA,yBAAA,CAGF,gCACE,4CAAA,CAGF,8BACE,4CAAA,CAIJ,mBACE,GACE,2BAAA,CAEF,KACE,0BAAA,CAAA",
            sourcesContent: [
              ".progress {\n  position: relative;\n  width: 100%;\n  height: 4px;\n  background-color: var(--s-color-border-default);\n  overflow: hidden;\n\n  .progress-bar-loading {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    background: var(--s-color-fill-highlight);\n    animation: loading 2s linear infinite;\n  }\n\n  .progress-bar {\n    height: 100%;\n    background-color: var(--s-color-fill-highlight);\n    transition: width 0.3s ease;\n  }\n\n  .progress-bar-success {\n    background-color: var(--s-color-fill-success);\n  }\n\n  .progress-bar-error {\n    background-color: var(--s-color-fill-warning);\n  }\n}\n\n@keyframes loading {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/SaveBar/SaveBar.scss":
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
          ".save-bar{display:flex;justify-content:center;background-color:var(--s-color-fill-default-light);padding:var(--s-spacing-x-small) 0;border-bottom:1px solid var(--s-color-border-default)}.save-bar .save-bar-content{width:100%;display:flex;padding:0 var(--s-spacing-x-large);flex-direction:row;align-items:center;justify-content:space-between;max-width:1280px}.save-bar .save-bar-content .save-bar-label{font:var(--s-typography-heading-small);color:var(--s-color-content-default)}.save-bar .save-bar-content .save-bar-buttons{display:flex}@media screen and (max-width: 768px){.save-bar{padding:var(--s-spacing-x-small) var(--s-spacing-small)}.save-bar .save-bar-content{padding:0}}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/SaveBar/SaveBar.scss"],
            names: [],
            mappings:
              "AAAA,UACE,YAAA,CACA,sBAAA,CACA,kDAAA,CACA,kCAAA,CACA,qDAAA,CAEA,4BACE,UAAA,CACA,YAAA,CACA,kCAAA,CACA,kBAAA,CACA,kBAAA,CACA,6BAAA,CACA,gBAAA,CAEA,4CACE,sCAAA,CACA,oCAAA,CAGF,8CACE,YAAA,CAKN,qCACE,UACE,uDAAA,CAEA,4BACE,SAAA,CAAA",
            sourcesContent: [
              ".save-bar {\n  display: flex;\n  justify-content: center;\n  background-color: var(--s-color-fill-default-light);\n  padding: var(--s-spacing-x-small) 0;\n  border-bottom: 1px solid var(--s-color-border-default);\n\n  .save-bar-content {\n    width: 100%;\n    display: flex;\n    padding: 0 var(--s-spacing-x-large);\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    max-width: 1280px;\n\n    .save-bar-label {\n      font: var(--s-typography-heading-small);\n      color: var(--s-color-content-default);\n    }\n\n    .save-bar-buttons {\n      display: flex;\n    }\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .save-bar {\n    padding: var(--s-spacing-x-small) var(--s-spacing-small);\n\n    .save-bar-content {\n      padding: 0;\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/SavebarTrigger/SavebarTrigger.scss":
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
          ".form-register-root{position:relative}.form-register-save-bar{z-index:99;position:fixed;top:0;right:0}.form-register-progress{z-index:99;position:fixed;top:0;left:0;width:100%}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/SavebarTrigger/SavebarTrigger.scss",
            ],
            names: [],
            mappings:
              "AAAA,oBACE,iBAAA,CAGF,wBACE,UAAA,CACA,cAAA,CACA,KAAA,CACA,OAAA,CAGF,wBACE,UAAA,CACA,cAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA",
            sourcesContent: [
              ".form-register-root {\n  position: relative;\n}\n\n.form-register-save-bar {\n  z-index: 99;\n  position: fixed;\n  top: 0;\n  right: 0;\n}\n\n.form-register-progress {\n  z-index: 99;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Slider/Slider.scss":
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
          ".slider{display:flex;flex-direction:column;gap:var(--s-spacing-nano);min-width:250px}.slider .slider-label{font:var(--s-typography-label-medium);color:var(--s-color-content-default)}.slider .slider-container{display:flex;gap:var(--s-spacing-x-small);align-items:center}.slider .slider-container .slider-max-min{color:var(--s-color-content-default);font:var(--s-typography-paragraph-regular)}.slider .slider-container .slider-background{width:100%;height:4px;position:relative;border-radius:var(--s-border-radius-pill);background-color:var(--s-color-border-default)}.slider .slider-container .slider-progress-bar{border-radius:var(--s-border-radius-pill);height:100%;background-color:var(--s-color-fill-highlight);transition:.01s width ease-in-out}.slider .slider-container .slider-button{cursor:grab;background-color:var(--s-color-fill-highlight);width:16px;height:16px;border-radius:var(--s-border-radius-pill);position:absolute;top:50%;transform:translateY(-50%);z-index:2;transition:.01s left ease-in-out}.slider .slider-container .slider-button:hover{width:20px;height:20px}.slider .slider-container .slider-button:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.slider .slider-container .slider-input{min-width:64px;max-height:min-content;padding:var(--s-spacing-xx-small) var(--s-spacing-x-small);text-align:left;border:var(--s-border-width-hairline) solid var(--s-color-border-default);border-radius:var(--s-border-radius-medium);font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default);background-color:var(--s-color-fill-default);box-shadow:0px 1px 2px 0px rgba(14,21,36,.06)}.slider .slider-container .slider-input:hover{border-color:var(--s-color-border-default-hover)}.slider .slider-container .slider-input:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Slider/Slider.scss"],
            names: [],
            mappings:
              "AAAA,QACE,YAAA,CACA,qBAAA,CACA,yBAAA,CACA,eAAA,CAEA,sBACE,qCAAA,CACA,oCAAA,CAGF,0BACE,YAAA,CACA,4BAAA,CACA,kBAAA,CAEA,0CACE,oCAAA,CACA,0CAAA,CAGF,6CACE,UAAA,CACA,UAAA,CACA,iBAAA,CACA,yCAAA,CACA,8CAAA,CAGF,+CACE,yCAAA,CACA,WAAA,CACA,8CAAA,CACA,iCAAA,CAGF,yCACE,WAAA,CACA,8CAAA,CACA,UAAA,CACA,WAAA,CACA,yCAAA,CACA,iBAAA,CACA,OAAA,CACA,0BAAA,CACA,SAAA,CACA,gCAAA,CACA,+CACE,UAAA,CACA,WAAA,CAGF,uDACE,wCAAA,CACA,6CAAA,CACA,yCAAA,CACA,mBAAA,CAIJ,wCACE,cAAA,CACA,sBAAA,CACA,0DAAA,CACA,eAAA,CACA,yEAAA,CACA,2CAAA,CACA,0CAAA,CACA,oCAAA,CACA,4CAAA,CACA,6CAAA,CAEA,8CACE,gDAAA,CAGF,sDACE,wCAAA,CACA,6CAAA,CACA,yCAAA,CACA,mBAAA",
            sourcesContent: [
              ".slider {\n  display: flex;\n  flex-direction: column;\n  gap: var(--s-spacing-nano);\n  min-width: 250px;\n\n  .slider-label {\n    font: var(--s-typography-label-medium);\n    color: var(--s-color-content-default);\n  }\n\n  .slider-container {\n    display: flex;\n    gap: var(--s-spacing-x-small);\n    align-items: center;\n\n    .slider-max-min {\n      color: var(--s-color-content-default);\n      font: var(--s-typography-paragraph-regular);\n    }\n\n    .slider-background {\n      width: 100%;\n      height: 4px;\n      position: relative;\n      border-radius: var(--s-border-radius-pill);\n      background-color: var(--s-color-border-default);\n    }\n\n    .slider-progress-bar {\n      border-radius: var(--s-border-radius-pill);\n      height: 100%;\n      background-color: var(--s-color-fill-highlight);\n      transition: 0.01s width ease-in-out;\n    }\n\n    .slider-button {\n      cursor: grab;\n      background-color: var(--s-color-fill-highlight);\n      width: 16px;\n      height: 16px;\n      border-radius: var(--s-border-radius-pill);\n      position: absolute;\n      top: 50%;\n      transform: translateY(-50%);\n      z-index: 2;\n      transition: 0.01s left ease-in-out;\n      &:hover {\n        width: 20px;\n        height: 20px;\n      }\n\n      &:focus-visible {\n        outline-width: var(--s-border-width-thin);\n        outline-color: var(--s-color-border-highlight);\n        outline-offset: var(--s-border-width-thin);\n        outline-style: solid;\n      }\n    }\n\n    .slider-input {\n      min-width: 64px;\n      max-height: min-content;\n      padding: var(--s-spacing-xx-small) var(--s-spacing-x-small);\n      text-align: left;\n      border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n      border-radius: var(--s-border-radius-medium);\n      font: var(--s-typography-paragraph-regular);\n      color: var(--s-color-content-default);\n      background-color: var(--s-color-fill-default);\n      box-shadow: 0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n\n      &:hover {\n        border-color: var(--s-color-border-default-hover);\n      }\n\n      &:focus-visible {\n        outline-width: var(--s-border-width-thin);\n        outline-color: var(--s-color-border-highlight);\n        outline-offset: var(--s-border-width-thin);\n        outline-style: solid;\n      }\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Switch/Switch.scss":
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
          '.ui-form-switch{display:flex;align-items:center;position:relative;cursor:pointer;user-select:none;font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default);gap:var(--s-spacing-xx-small)}.ui-form-switch:focus-visible{outline:none}.ui-form-switch:focus-visible .ui-form-checkbox-checkmark{outline:2px solid var(--s-color-border-highlight);outline-offset:2px}.ui-form-switch.-disabled{cursor:auto}.ui-form-switch.-no-events{pointer-events:none}.ui-form-switch+.ui-form-checkbox{margin-top:var(--s-spacing-nano)}.ui-form-switch:hover .ui-form-checkbox-checkmark{box-shadow:inset 1px var(--s-color-border-highlight)}.ui-form-switch .ui-form-checkbox-text:empty{display:none}.ui-form-switch input{position:absolute;opacity:0;cursor:pointer;height:1px;width:1px;left:calc(var(--s-spacing-x-small)/2 - 1px);top:var(--s-spacing-x-small)}.ui-form-switch input:checked~.ui-form-checkbox-checkmark{background-color:var(--s-color-fill-highlight);border-color:rgba(0,0,0,0)}.ui-form-switch input:checked~.ui-form-checkbox-checkmark::after{display:block}.ui-form-switch input:hover~.ui-form-checkbox-checkmark{box-shadow:0px -1px 0px 0px rgba(0,0,0,.2) inset,0px 0px 0px 2px var(--s-color-border-highlight) inset,0px -1px 2px 0px rgba(0,0,0,.24) inset,0px 1px .5px .5px rgba(255,255,255,.44) inset,0px 1px 2px 0px rgba(14,21,36,.06)}.ui-form-switch input:indeterminate~.ui-form-checkbox-checkmark{background-color:var(--s-color-fill-highlight);border-color:var(--s-color-border-highlight)}.ui-form-switch input:indeterminate~.ui-form-checkbox-checkmark:after{display:block;left:50%;top:50%;width:50%;height:0px;transform:translateX(-50%) translateY(-50%)}.ui-form-switch .ui-form-checkbox-checkmark{position:relative;top:0;left:0;min-width:20px;width:20px;aspect-ratio:1;background-color:var(--s-color-fill-disable);border-radius:var(--s-border-radius-small);display:flex;align-items:center;justify-content:center;box-shadow:0 0 rgba(0,0,0,0),0 0 rgba(0,0,0,0),0px 1px 2px rgba(14,21,36,.06),inset 0 1px .5px .5px rgba(255,255,255,.24),inset 0 -1px 2px rgba(28,62,175,.24)}.ui-form-switch .ui-form-checkbox-checkmark:after{display:none;content:"";position:absolute;bottom:55%;left:50%;width:4px;height:8px;border:solid #fff;border-width:0 2px 2px 0;transform:translate(-50%, 50%) rotate(45deg);box-shadow:0px 1px 2px rgba(14,21,36,.06)}.ui-form-switch.-switch input~.ui-form-checkbox-checkmark::after{display:block;background-color:var(--s-color-fill-default)}.ui-form-switch.-switch input:disabled~.ui-form-checkbox-checkmark{background-color:var(--s-color-fill-disable) !important}.ui-form-switch.-switch input:checked~.ui-form-checkbox-checkmark{background-color:var(--s-color-fill-highlight)}.ui-form-switch.-switch input:checked~.ui-form-checkbox-checkmark:after{background-color:var(--s-color-content-on-color);left:50%}.ui-form-switch.-switch .ui-form-checkbox-checkmark{width:32px;min-width:32px;border-radius:12px;height:20px}.ui-form-switch.-switch .ui-form-checkbox-checkmark:after{width:12px;height:12px;left:12%;top:50%;border-radius:100%;bottom:1px;background-color:var(--s-color-fill-default);transition:all .15s cubic-bezier(0.2, 0.85, 0.32, 1.2),opacity .15s;border:none;transform:translate(0%, -50%)}.ui-form-switch.-switch input:disabled{cursor:auto}.ui-form-switch.-switch input:disabled:hover~.ui-form-checkbox-checkmark{box-shadow:0 0 rgba(0,0,0,0),0 0 rgba(0,0,0,0),0px 1px 2px rgba(14,21,36,.06),inset 0 1px .5px .5px rgba(255,255,255,.24),inset 0 -1px 2px rgba(28,62,175,.24)}.ui-form-switch.-switch input:disabled~.ui-form-checkbox-checkmark{background-color:var(--s-color-fill-disable)}.ui-form-switch.-switch input:disabled~.ui-form-checkbox-checkmark::after{border:none;background-color:var(--s-color-content-disable) !important}.ui-form-switch.-switch input:disabled~.ui-form-checkbox-checkmark:checked{background-color:var(--s-color-fill-disable)}.ui-form-switch.-switch input:disabled~.ui-form-checkbox-text{color:var(--s-color-content-disable)}',
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Switch/Switch.scss"],
            names: [],
            mappings:
              "AAAA,gBACE,YAAA,CACA,kBAAA,CACA,iBAAA,CACA,cAAA,CACA,gBAAA,CACA,0CAAA,CACA,oCAAA,CACA,6BAAA,CAEA,8BACE,YAAA,CAEA,0DACE,iDAAA,CACA,kBAAA,CAIJ,0BACE,WAAA,CAGF,2BACE,mBAAA,CAGF,kCACE,gCAAA,CAIA,kDACE,oDAAA,CAIJ,6CACE,YAAA,CAGF,sBACE,iBAAA,CACA,SAAA,CACA,cAAA,CACA,UAAA,CACA,SAAA,CACA,2CAAA,CACA,4BAAA,CAEA,0DACE,8CAAA,CACA,0BAAA,CAEA,iEACE,aAAA,CAIJ,wDACE,8NACE,CAOJ,gEACE,8CAAA,CACA,4CAAA,CAEA,sEACE,aAAA,CACA,QAAA,CACA,OAAA,CACA,SAAA,CACA,UAAA,CACA,2CAAA,CAKN,4CACE,iBAAA,CACA,KAAA,CACA,MAAA,CACA,cAAA,CACA,UAAA,CACA,cAAA,CACA,4CAAA,CACA,0CAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,8JACE,CAMF,kDACE,YAAA,CACA,UAAA,CACA,iBAAA,CACA,UAAA,CACA,QAAA,CACA,SAAA,CACA,UAAA,CACA,iBAAA,CACA,wBAAA,CACA,4CAAA,CACA,yCAAA,CAOE,iEACE,aAAA,CACA,4CAAA,CAMJ,mEACE,uDAAA,CAKF,kEACE,8CAAA,CAEA,wEACE,gDAAA,CACA,QAAA,CAKN,oDACE,UAAA,CACA,cAAA,CACA,kBAAA,CACA,WAAA,CAEA,0DACE,UAAA,CACA,WAAA,CACA,QAAA,CACA,OAAA,CACA,kBAAA,CACA,UAAA,CACA,4CAAA,CACA,mEACE,CAEF,WAAA,CACA,6BAAA,CAIJ,uCACE,WAAA,CAEA,yEACE,8JACE,CAOJ,mEACE,4CAAA,CAEA,0EACE,WAAA,CACA,0DAAA,CAGF,2EACE,4CAAA,CAIJ,8DACE,oCAAA",
            sourcesContent: [
              '.ui-form-switch {\n  display: flex;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n  user-select: none;\n  font: var(--s-typography-paragraph-regular);\n  color: var(--s-color-content-default);\n  gap: var(--s-spacing-xx-small);\n\n  &:focus-visible {\n    outline: none;\n\n    .ui-form-checkbox-checkmark {\n      outline: 2px solid var(--s-color-border-highlight);\n      outline-offset: 2px;\n    }\n  }\n\n  &.-disabled {\n    cursor: auto;\n  }\n\n  &.-no-events {\n    pointer-events: none;\n  }\n\n  + .ui-form-checkbox {\n    margin-top: var(--s-spacing-nano);\n  }\n\n  &:hover {\n    .ui-form-checkbox-checkmark {\n      box-shadow: inset 1px var(--s-color-border-highlight);\n    }\n  }\n\n  .ui-form-checkbox-text:empty {\n    display: none;\n  }\n\n  input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 1px;\n    width: 1px;\n    left: calc(var(--s-spacing-x-small) / 2 - 1px);\n    top: var(--s-spacing-x-small);\n\n    &:checked ~ .ui-form-checkbox-checkmark {\n      background-color: var(--s-color-fill-highlight);\n      border-color: transparent;\n\n      &::after {\n        display: block;\n      }\n    }\n\n    &:hover ~ .ui-form-checkbox-checkmark {\n      box-shadow:\n        0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset,\n        0px 0px 0px 2px var(--s-color-border-highlight) inset,\n        0px -1px 2px 0px rgba(0, 0, 0, 0.24) inset,\n        0px 1px 0.5px 0.5px rgba(255, 255, 255, 0.44) inset,\n        0px 1px 2px 0px rgba(14, 21, 36, 0.06);\n    }\n\n    &:indeterminate ~ .ui-form-checkbox-checkmark {\n      background-color: var(--s-color-fill-highlight);\n      border-color: var(--s-color-border-highlight);\n\n      &:after {\n        display: block;\n        left: 50%;\n        top: 50%;\n        width: 50%;\n        height: 0px;\n        transform: translateX(-50%) translateY(-50%);\n      }\n    }\n  }\n\n  .ui-form-checkbox-checkmark {\n    position: relative;\n    top: 0;\n    left: 0;\n    min-width: 20px;\n    width: 20px;\n    aspect-ratio: 1;\n    background-color: var(--s-color-fill-disable);\n    border-radius: var(--s-border-radius-small);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow:\n      0 0 #0000,\n      0 0 #0000,\n      0px 1px 2px rgb(14 21 36/6%),\n      inset 0 1px 0.5px 0.5px hsla(0, 0%, 100%, 0.24),\n      inset 0 -1px 2px rgba(28, 62, 175, 0.24);\n\n    &:after {\n      display: none;\n      content: "";\n      position: absolute;\n      bottom: 55%;\n      left: 50%;\n      width: 4px;\n      height: 8px;\n      border: solid white;\n      border-width: 0 2px 2px 0;\n      transform: translate(-50%, 50%) rotate(45deg);\n      box-shadow: 0px 1px 2px rgb(14 21 36/6%);\n    }\n  }\n\n  &.-switch {\n    input {\n      ~ .ui-form-checkbox-checkmark {\n        &::after {\n          display: block;\n          background-color: var(--s-color-fill-default);\n        }\n      }\n    }\n\n    input:disabled {\n      ~ .ui-form-checkbox-checkmark {\n        background-color: var(--s-color-fill-disable) !important;\n      }\n    }\n\n    input:checked {\n      ~ .ui-form-checkbox-checkmark {\n        background-color: var(--s-color-fill-highlight);\n\n        &:after {\n          background-color: var(--s-color-content-on-color);\n          left: calc(50%);\n        }\n      }\n    }\n\n    .ui-form-checkbox-checkmark {\n      width: 32px;\n      min-width: 32px;\n      border-radius: 12px;\n      height: 20px;\n\n      &:after {\n        width: 12px;\n        height: 12px;\n        left: 12%;\n        top: 50%;\n        border-radius: 100%;\n        bottom: 1px;\n        background-color: var(--s-color-fill-default);\n        transition:\n          all 0.15s cubic-bezier(0.2, 0.85, 0.32, 1.2),\n          opacity 0.15s;\n        border: none;\n        transform: translate(0%, -50%);\n      }\n    }\n\n    input:disabled {\n      cursor: auto;\n\n      &:hover ~ .ui-form-checkbox-checkmark {\n        box-shadow:\n          0 0 #0000,\n          0 0 #0000,\n          0px 1px 2px rgb(14 21 36/6%),\n          inset 0 1px 0.5px 0.5px hsla(0, 0%, 100%, 0.24),\n          inset 0 -1px 2px rgba(28, 62, 175, 0.24);\n      }\n\n      ~ .ui-form-checkbox-checkmark {\n        background-color: var(--s-color-fill-disable);\n\n        &::after {\n          border: none;\n          background-color: var(--s-color-content-disable) !important;\n        }\n\n        &:checked {\n          background-color: var(--s-color-fill-disable);\n        }\n      }\n\n      ~ .ui-form-checkbox-text {\n        color: var(--s-color-content-disable);\n      }\n    }\n  }\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
