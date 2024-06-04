"use strict";
(self.webpackChunkdesign_system_zeroz =
  self.webpackChunkdesign_system_zeroz || []).push([
  [2803],
  {
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
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/SavebarTrigger/SavebarTrigger.scss",
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
      const SavebarTrigger_SavebarTrigger_SavebarTrigger = (param) => {
          let {
            children,
            formChanged,
            handleSubmit,
            handleCancel: handleCancelProp,
          } = param;
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
              ? { width: "calc(".concat(tamanhoPai, "px)") }
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
      var _Default_parameters,
        _Default_parameters_docs,
        _Default_parameters1,
        Input = __webpack_require__("./src/app/components/Input/Input.tsx"),
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
        DropdownMenu = __webpack_require__(
          "./src/app/components/DropdownMenu/DropdownMenu.tsx",
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
          parameters: { layout: "fullscreen" },
          tags: ["autodocs"],
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
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsxs)(AppShell.A, {
              children: [
                (0, jsx_runtime.jsx)(Sidebar.Ay, {
                  setToggleSidebar: toggleSidebar,
                  brand: "/logo-sm.svg",
                  toggle: isOpenSidebar,
                  children: (0, jsx_runtime.jsx)(Sidebar.Pg, {
                    title: "Sidebar",
                    children: (0, jsx_runtime.jsx)(Sidebar.uk, {
                      icon: "settings",
                      fillIcon: !0,
                      active: !0,
                      title: "Page Name",
                    }),
                  }),
                }),
                (0, jsx_runtime.jsx)(Header.A, {
                  breadcrumb: (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
                    children: (0, jsx_runtime.jsx)(Breadcrumb.A, {
                      href: "",
                      pageName: "Breadcrumb",
                      children: (0, jsx_runtime.jsx)(Breadcrumb.Q, {
                        href: "",
                        pageName: "Breadcrumb",
                      }),
                    }),
                  }),
                  onClick: toggleSidebar,
                  children: (0, jsx_runtime.jsx)(Header.h, {
                    name: "Username",
                    children: (0, jsx_runtime.jsxs)(DropdownMenu.Ay, {
                      dropDownMenu: !0,
                      children: [
                        (0, jsx_runtime.jsx)(DropdownMenu.Hg, {
                          content: "Settings",
                        }),
                        (0, jsx_runtime.jsx)(DropdownMenu.iO, {
                          content: "Item 1",
                        }),
                        (0, jsx_runtime.jsx)(DropdownMenu.iO, {
                          content: "Item 2",
                        }),
                        (0, jsx_runtime.jsx)(DropdownMenu.iO, {
                          content: "Settings",
                          typeIcon: "settings",
                        }),
                      ],
                    }),
                  }),
                }),
                (0, jsx_runtime.jsx)(Page.A, {
                  columnLayout: "1",
                  namePage: "Page Name",
                  buttonContentSecondary: "Button",
                  withActionSecondary: !0,
                  buttonContentPrimary: "Button",
                  withActionPrimary: !0,
                  withBackButton: !0,
                  children: (0, jsx_runtime.jsx)(
                    components_SavebarTrigger_SavebarTrigger,
                    {
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
                                const day = newDate
                                    .getDate()
                                    .toString()
                                    .padStart(2, "0"),
                                  month = (newDate.getMonth() + 1)
                                    .toString()
                                    .padStart(2, "0"),
                                  year = newDate.getFullYear().toString(),
                                  formattedDate = ""
                                    .concat(day, "/")
                                    .concat(month, "/")
                                    .concat(year);
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
                            onChange: (checked) =>
                              ((checked) => {
                                setFormValues({
                                  ...formValues,
                                  Checkbox: !!checked,
                                });
                              })(checked),
                            checked:
                              "boolean" == typeof formValues.Checkbox &&
                              formValues.Checkbox,
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
                            onChange: (checked) =>
                              ((checked) => {
                                setFormValues({
                                  ...formValues,
                                  Switch: checked,
                                });
                              })(checked),
                            checked:
                              "boolean" == typeof formValues.Switch &&
                              formValues.Switch,
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
      (Default.args = {}),
        (Default.parameters = {
          ...Default.parameters,
          docs: {
            ...(null === (_Default_parameters = Default.parameters) ||
            void 0 === _Default_parameters
              ? void 0
              : _Default_parameters.docs),
            source: {
              originalSource:
                'args => {\n  const [isOpenSidebar, setIsOpenSidebar] = useState(false);\n  const [formValuesFile, setFormValuesFile] = useState<FormValuesFile>({\n    ImageUploader: null,\n    FileUploader: null\n  });\n  const [formValues, setFormValues] = useState<FormValuesType>({\n    Input: "",\n    "Input Select": "Option 1",\n    "Input Number": "0",\n    Checkbox: false,\n    Switch: false,\n    "Radio Button": false,\n    "Input do DataPicker": "",\n    ColorPicker: "#FFFFFF",\n    Slider: "0",\n    "Input Time": "",\n    "Text Area": ""\n  });\n  const [initialValues, setInitialValues] = useState<FormValuesType>({});\n  const [formChanged, setFormChanged] = useState(false);\n  useEffect(() => {\n    setInitialValues(formValues);\n  }, []);\n  const handleInputChange = (name: string, value: string | boolean | number) => {\n    setFormValues({\n      ...formValues,\n      [name]: value\n    });\n  };\n  const handleFileChange = (name: string, files: FileList | null) => {\n    if (files && files.length > 0) {\n      setFormValues({\n        ...formValues,\n        [name]: files\n      });\n    } else {\n      setFormValues({\n        ...formValues,\n        [name]: null\n      });\n    }\n  };\n  const handleDateChange = (name: string, newDate: Date) => {\n    const day = newDate.getDate().toString().padStart(2, "0");\n    const month = (newDate.getMonth() + 1).toString().padStart(2, "0");\n    const year = newDate.getFullYear().toString();\n    const formattedDate = `${day}/${month}/${year}`;\n    setFormValues({\n      ...formValues,\n      [name]: formattedDate\n    });\n  };\n  const handleColorChange = (color: string) => {\n    setFormValues(prevFormValues => ({\n      ...prevFormValues,\n      ColorPicker: color\n    }));\n  };\n  const handleSliderChange = (value: string) => {\n    setFormValues({\n      ...formValues,\n      Slider: value\n    });\n  };\n  const handleSubmit = () => {\n    console.log("Formulário enviado!");\n    setInitialValues(formValues);\n    setFormChanged(false);\n  };\n  const handleCheckboxChange = (checked: boolean) => {\n    setFormValues({\n      ...formValues,\n      Checkbox: !!checked // Convert checked to boolean\n    });\n  };\n  const handleRadioChange = (checked: boolean) => {\n    setFormValues({\n      ...formValues,\n      "Radio Button": checked\n    });\n  };\n  const handleSwitchChange = (checked: boolean) => {\n    setFormValues({\n      ...formValues,\n      Switch: checked\n    });\n  };\n  const options = ["Option 1", "Option 2", "Option 3"];\n  useEffect(() => {\n    const isFormChanged = Object.keys(formValues).some(key => initialValues[key] !== formValues[key]);\n    setFormChanged(isFormChanged);\n  }, [formValues, initialValues]);\n  const handleCancel = () => {\n    console.log("Initial Values:", initialValues);\n    setFormValues(initialValues);\n    setFormChanged(false);\n  };\n  useEffect(() => {\n    console.log("Form Values after cancel:", formValues);\n  }, [formValues]);\n  const toggleSidebar = () => {\n    setIsOpenSidebar(!isOpenSidebar);\n  };\n  return <>\r\n      <AppShell>\r\n        <Sidebar setToggleSidebar={toggleSidebar} brand="/logo-sm.svg" toggle={isOpenSidebar}>\r\n          <SidebarList title="Sidebar">\r\n            <SidebarItem icon="settings" fillIcon={true} active={true} title="Page Name" />\r\n          </SidebarList>\r\n        </Sidebar>\r\n        <Header breadcrumb={<>\r\n              <BreadcrumbRoot href="" pageName="Breadcrumb">\r\n                <Breadcrumb href="" pageName="Breadcrumb" />\r\n              </BreadcrumbRoot>\r\n            </>} onClick={toggleSidebar}>\r\n          <HeaderProfile name="Username">\r\n            <DropDownMenu dropDownMenu>\r\n              <DropDownMenuTitle content="Settings" />\r\n              <DropDownMenuItem content="Item 1" />\r\n              <DropDownMenuItem content="Item 2" />\r\n              <DropDownMenuItem content="Settings" typeIcon="settings" />\r\n            </DropDownMenu>\r\n          </HeaderProfile>\r\n        </Header>\r\n        <Page columnLayout="1" namePage="Page Name" buttonContentSecondary="Button" withActionSecondary buttonContentPrimary="Button" withActionPrimary withBackButton>\r\n          <SavebarTrigger formChanged={formChanged} handleCancel={handleCancel} handleSubmit={handleSubmit}>\r\n            <Layout columns="2 - Symmetric">\r\n              <Input label="Input" placeholder="Placeholder" value={String(formValues["Input"])} onChange={e => {\n              if (e.target.value !== null) {\n                handleInputChange("Input", e.target.value);\n              }\n            }} />\r\n              <InputNumber label="Input Number" placeholder="Placeholder" min={0} max={10} value={String(formValues["Input Number"])} onChange={(value: string) => {\n              handleInputChange("Input Number", value);\n            }} />\r\n              <InputTime label="Input Time" placeholder="Placeholder" value={String(formValues["Input Time"])} onChange={(value: string) => {\n              handleInputChange("Input Time", value);\n            }} />\r\n              <InputSelect label="Input Select" value={String(formValues["Input Select"])} onChange={(value: string) => {\n              handleInputChange("Input Select", value);\n            }} options={options} />\r\n              <DataPicker label="Data Picker" placeholder="Placeholder" date={String(formValues["Input do DataPicker"])} onDateChange={(value: Date) => handleDateChange("Input do DataPicker", value)} />\r\n              <Slider value={String(formValues.Slider)} max={10} min={0} step={1} label="Slider" onChange={handleSliderChange} />\r\n              <InputCheckbox label="Checkbox" onChange={checked => handleCheckboxChange(checked)} checked={typeof formValues["Checkbox"] === "boolean" ? formValues["Checkbox"] : false} />\r\n\r\n              <InputRadioButton label="Radio Button" onChange={checked => handleRadioChange(checked)} checked={typeof formValues["Radio Button"] === "boolean" ? formValues["Radio Button"] : false} />\r\n              <Switch label="Switch" onChange={checked => handleSwitchChange(checked)} checked={typeof formValues["Switch"] === "boolean" ? formValues["Switch"] : false} />\r\n              <FileUploader buttonLabel="Add File" title="File Uploader" typeIconButton="upload_file" maxFileSize={10} multiple={true} value={formValuesFile["FileUploader"]} onChange={(files: FileList | null) => handleFileChange("FileUploader", files)} />\r\n              <ImageUploader title="Image Uploader" proportion="1/1" labelDropzone={"Drop your images here"} iconDropzone={"add_a_photo"} multiple={true} value={formValuesFile["ImageUploader"]} onChange={(files: FileList | null) => handleFileChange("ImageUploader", files)} />\r\n              <TextArea label="Text Area" placeholder="Placeholder" value={String(formValues["Text Area"])} onChange={value => handleInputChange("Text Area", value)} />\r\n            </Layout>\r\n          </SavebarTrigger>\r\n        </Page>\r\n      </AppShell>\r\n    </>;\n}',
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
        AppShell = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/AppShell/AppShell.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(AppShell.A, options);
      AppShell.A && AppShell.A.locals && AppShell.A.locals;
      __webpack_require__("./node_modules/next/dist/compiled/react/index.js");
      const AppShell_AppShell_AppShell = (param) => {
          let { children } = param;
          return (0, jsx_runtime.jsx)("div", {
            className: "app-shell",
            children,
          });
        },
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
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/ButtonGroup/ButtonGroup.scss",
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
      const ButtonGroup_ButtonGroup_ButtonGroup = (param) => {
          let {
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
          } = param;
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsxs)("div", {
              className: "button-group ".concat(direction),
              children: [
                (0, jsx_runtime.jsx)(Button.A, {
                  size: "md",
                  disabled: disableFirstButton,
                  onClick: onClickFirstButton,
                  label: contentFirstButton,
                  typeIcon: typeIconFirstButton,
                  variant: variantFirstButton,
                }),
                (0, jsx_runtime.jsx)(Button.A, {
                  size: "md",
                  disabled: disableSecondButton,
                  onClick: onClickSecondButton,
                  label: contentSecondButton,
                  typeIcon: typeIconSecondButton,
                  variant: variantSecondButton,
                }),
              ],
            }),
          });
        },
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
        InputCheckbox = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputCheckbox/InputCheckbox.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(InputCheckbox.A, options);
      InputCheckbox.A && InputCheckbox.A.locals && InputCheckbox.A.locals;
      function InputCheckbox_InputCheckbox_InputCheckbox(props) {
        const { checked, onChange, disabled, indeterminate, label } = props;
        return (0, jsx_runtime.jsxs)("div", {
          onClick: () => {
            disabled || onChange(!checked);
          },
          className: "check-box-root ".concat(disabled && "disabled"),
          children: [
            (0, jsx_runtime.jsx)("button", {
              className: "InputCheckbox "
                .concat(checked ? "checked" : "", " ")
                .concat(disabled ? "disabled" : ""),
              tabIndex: 0,
              role: "InputCheckbox",
              "aria-checked": checked,
              disabled,
              children: indeterminate
                ? (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
                    children: (0, jsx_runtime.jsx)("span", {
                      className: "indeterminate",
                      children: (0, jsx_runtime.jsx)(Icon.A, {
                        size: "md",
                        icon: "indeterminate_check_box",
                        fill: !0,
                      }),
                    }),
                  })
                : (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
                    children: checked
                      ? (0, jsx_runtime.jsx)("span", {
                          className: "checked",
                          children: (0, jsx_runtime.jsx)(Icon.A, {
                            size: "md",
                            icon: "check_box",
                            fill: !0,
                          }),
                        })
                      : (0, jsx_runtime.jsx)("span", {
                          className: "unchecked",
                          children: (0, jsx_runtime.jsx)(Icon.A, {
                            size: "md",
                            icon: "check_box_outline_blank",
                          }),
                        }),
                  }),
            }),
            label &&
              (0, jsx_runtime.jsx)("label", {
                className: "check-box-label ".concat(disabled && "disabled"),
                children: props.label,
              }),
          ],
        });
      }
      const components_InputCheckbox_InputCheckbox =
        InputCheckbox_InputCheckbox_InputCheckbox;
      try {
        (InputCheckbox_InputCheckbox_InputCheckbox.displayName =
          "InputCheckbox"),
          (InputCheckbox_InputCheckbox_InputCheckbox.__docgenInfo = {
            description: "",
            displayName: "InputCheckbox",
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
              checked: {
                defaultValue: null,
                description: "",
                name: "checked",
                required: !0,
                type: { name: "boolean" },
              },
              onChange: {
                defaultValue: null,
                description: "",
                name: "onChange",
                required: !0,
                type: { name: "(checked: boolean) => void" },
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
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputNumber/InputNumber.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(InputNumber.A, options);
      InputNumber.A && InputNumber.A.locals && InputNumber.A.locals;
      const InputNumber_InputNumber_InputNumber = (param) => {
          let {
            max,
            min,
            placeholder,
            disabled,
            label,
            onChange,
            error,
            textError,
            value: propValue,
          } = param;
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
                className: "input-number ".concat(disabled ? "disabled" : ""),
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
                    className: "input ".concat(error ? "error" : ""),
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
        InputRadioButton = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputRadioButton/InputRadioButton.scss",
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
      const InputRadioButton_InputRadioButton_InputRadioButton = (param) => {
          let { disabled, label, onChange, checked: controlledChecked } = param;
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
            className: "radio-button-root",
            children: [
              (0, jsx_runtime.jsx)("div", {
                className: "radio-button "
                  .concat(disabled ? "disabled" : "", " ")
                  .concat(isChecked ? "checked" : ""),
                onClick: toggleRadioButton,
                onKeyDown: (e) => {
                  "Enter" === e.key && toggleRadioButton();
                },
                role: "radio",
                "aria-checked": isChecked,
                tabIndex: 0,
                children: isChecked
                  ? (0, jsx_runtime.jsx)("span", {
                      className: "checked",
                      children: (0, jsx_runtime.jsx)(Icon.A, {
                        size: "md",
                        icon: "radio_button_checked",
                      }),
                    })
                  : (0, jsx_runtime.jsx)("span", {
                      className: "unchecked",
                      children: (0, jsx_runtime.jsx)(Icon.A, {
                        size: "md",
                        icon: "radio_button_unchecked",
                      }),
                    }),
              }),
              (0, jsx_runtime.jsx)("label", {
                onClick: toggleRadioButton,
                className: "radio-button-label ".concat(
                  disabled ? "disabled" : "",
                ),
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
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputSelect/InputSelect.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(InputSelect.A, options);
      InputSelect.A && InputSelect.A.locals && InputSelect.A.locals;
      const InputSelect_InputSelect_InputSelect = (param) => {
          let {
            options,
            label,
            error,
            errorMessage,
            disabled,
            onChange,
            value,
          } = param;
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
                    className: "input-select-button "
                      .concat(selectedOption && "option", " ")
                      .concat(error && "error", " ")
                      .concat(disabled && "disabled"),
                    children: (0, jsx_runtime.jsx)("select", {
                      className: "".concat(error && "select-error"),
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
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputTextArea/InputTextArea.scss",
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
      const app_components_InputTextArea_InputTextArea = (param) => {
        let {
          placeholder,
          label,
          disabled,
          error,
          errorText,
          onChange,
          value = "",
        } = param;
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
              className: "text-area "
                .concat(disabled && "disabled", " ")
                .concat(error && !disabled ? "error" : ""),
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
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputTime/InputTime.scss",
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
      const InputTime_InputTime_InputTime = (param) => {
          let {
            label,
            placeholder,
            disabled,
            error,
            textError,
            onChange,
            value: controlledValue,
            ...rest
          } = param;
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
                const formattedValue = i < 10 ? "0".concat(i) : "".concat(i);
                buttons.push(
                  (0, jsx_runtime.jsx)(
                    "button",
                    {
                      className: "input-time-buttons",
                      onClick: () => {
                        isHour
                          ? (setSelectedHour(formattedValue),
                            onChange(
                              ""
                                .concat(formattedValue, ":")
                                .concat(selectedMinute),
                            ))
                          : (setSelectedMinute(formattedValue),
                            onChange(
                              ""
                                .concat(selectedHour, ":")
                                .concat(formattedValue),
                            ));
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
                      ? "".concat(selectedHour, ":").concat(selectedMinute)
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
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Progress/Progress.scss",
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
      const Progress_Progress_Progress = (param) => {
          let { value, error, indeterminate } = param;
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
                      className: "progress-bar "
                        .concat(
                          100 === value ? "progress-bar-success" : "",
                          " ",
                        )
                        .concat(error ? "progress-bar-error" : ""),
                      style: { width: "".concat(progress, "%") },
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
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/SaveBar/SaveBar.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(SaveBar.A, options);
      SaveBar.A && SaveBar.A.locals && SaveBar.A.locals;
      const SaveBar_SaveBar_SaveBar = (param) => {
          let { onClickSave, onClickCancel } = param;
          return (0, jsx_runtime.jsx)("div", {
            className: "save-bar",
            children: (0, jsx_runtime.jsxs)("div", {
              className: "save-bar-content",
              children: [
                (0, jsx_runtime.jsx)("p", {
                  className: "save-bar-label",
                  children: "Unsaved changes",
                }),
                (0, jsx_runtime.jsx)("div", {
                  className: "save-bar-buttons",
                  children: (0, jsx_runtime.jsx)(ButtonGroup.A, {
                    variantFirstButton: "primary",
                    variantSecondButton: "secondary",
                    direction: "row",
                    contentFirstButton: "Cancel",
                    contentSecondButton: "Save",
                    onClickFirstButton: onClickCancel,
                    onClickSecondButton: (e) => {
                      e.stopPropagation(), onClickSave(e);
                    },
                  }),
                }),
              ],
            }),
          });
        },
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
        Switch = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Switch/Switch.scss",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Switch.A, options);
      Switch.A && Switch.A.locals && Switch.A.locals;
      const Switch_Switch_Switch = (param) => {
          let { label, disabled, checked: controlledChecked, onChange } = param;
          const [isChecked, setIsChecked] = (0, react.useState)(
            controlledChecked || !1,
          );
          (0, react.useEffect)(() => {
            void 0 !== controlledChecked && setIsChecked(controlledChecked);
          }, [controlledChecked]);
          const isDisabled = disabled,
            toggleCheckbox = () => {
              if (!0 !== isDisabled) {
                const newValue = !isChecked;
                setIsChecked(newValue), onChange && onChange(newValue);
              }
            };
          return (0, jsx_runtime.jsxs)("div", {
            className: "switch-root",
            children: [
              (0, jsx_runtime.jsx)("div", {
                className: "switch "
                  .concat(isChecked ? "checked" : "", " ")
                  .concat(disabled ? "disabled" : ""),
                onClick: toggleCheckbox,
                tabIndex: 0,
                onKeyDown: (e) => {
                  "Enter" === e.key && toggleCheckbox();
                },
                role: "checkbox",
                "aria-checked": isChecked,
                children: isChecked
                  ? (0, jsx_runtime.jsx)("span", {
                      className: "checked",
                      children: (0, jsx_runtime.jsx)(Icon.A, {
                        size: "md",
                        icon: "toggle_on",
                      }),
                    })
                  : (0, jsx_runtime.jsx)("span", {
                      className: "unchecked",
                      children: (0, jsx_runtime.jsx)(Icon.A, {
                        size: "md",
                        icon: "toggle_off",
                      }),
                    }),
              }),
              (0, jsx_runtime.jsx)("label", {
                className: "label ".concat(disabled && "disabled"),
                onClick: toggleCheckbox,
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
              checked: {
                defaultValue: null,
                description: "",
                name: "checked",
                required: !1,
                type: { name: "boolean" },
              },
              onChange: {
                defaultValue: null,
                description: "",
                name: "onChange",
                required: !1,
                type: { name: "((value: boolean) => void)" },
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
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/AppShell/AppShell.scss":
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
          '.app-shell{display:grid;background-color:var(--s-color-background-default);justify-content:center;align-items:start;grid-template-columns:auto 4fr;grid-template-rows:auto 1fr;grid-template-areas:"aside header" "aside main"}@media screen and (max-width: 768px){.app-shell{height:100%;align-items:start;justify-content:normal;grid-template-columns:1fr;grid-template-areas:"header" "main"}}',
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/AppShell/AppShell.scss"],
            names: [],
            mappings:
              "AAAA,WACE,YAAA,CACA,kDAAA,CACA,sBAAA,CACA,iBAAA,CACA,8BAAA,CACA,2BAAA,CACA,+CACE,CAIJ,qCACE,WACE,WAAA,CACA,iBAAA,CACA,sBAAA,CACA,yBAAA,CACA,mCACE,CAAA",
            sourcesContent: [
              '.app-shell {\n  display: grid;\n  background-color: var(--s-color-background-default);\n  justify-content: center;\n  align-items: start;\n  grid-template-columns: auto 4fr;\n  grid-template-rows: auto 1fr;\n  grid-template-areas:\n    "aside header"\n    "aside main";\n}\n\n@media screen and (max-width: 768px) {\n  .app-shell {\n    height: 100%;\n    align-items: start;\n    justify-content: normal;\n    grid-template-columns: 1fr;\n    grid-template-areas:\n      "header"\n      "main";\n  }\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/ButtonGroup/ButtonGroup.scss":
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
          ".button-group{display:flex;justify-content:space-between;width:100%}.button-group.row{display:flex;flex-direction:row;gap:var(--s-spacing-x-small)}.button-group.column{display:flex;flex-direction:column;gap:var(--s-spacing-x-small)}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/ButtonGroup/ButtonGroup.scss",
            ],
            names: [],
            mappings:
              "AAAA,cACE,YAAA,CACA,6BAAA,CACA,UAAA,CAEA,kBACE,YAAA,CACA,kBAAA,CACA,4BAAA,CAGF,qBACE,YAAA,CACA,qBAAA,CACA,4BAAA",
            sourcesContent: [
              ".button-group {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n\n  &.row {\n    display: flex;\n    flex-direction: row;\n    gap: var(--s-spacing-x-small);\n  }\n\n  &.column {\n    display: flex;\n    flex-direction: column;\n    gap: var(--s-spacing-x-small);\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
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
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputCheckbox/InputCheckbox.scss":
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
          ".check-box-root{width:fit-content;height:fit-content;display:flex;user-select:none;cursor:pointer;gap:var(--s-spacing-xx-small)}.check-box-root.disabled{cursor:auto}.check-box-root span{width:24px;height:24px}.check-box-root .InputCheckbox{border:none;cursor:pointer;background-color:rgba(0,0,0,0);display:flex;align-items:center;justify-content:center;flex-direction:row;width:22px;height:22px;border-radius:var(--s-border-radius-small)}.check-box-root .InputCheckbox:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-style:solid}.check-box-root .InputCheckbox.disabled{color:var(--s-color-content-disable)}.check-box-root .InputCheckbox.disabled:focus{outline:none}.check-box-root .InputCheckbox.disabled .unchecked{cursor:auto;color:var(--s-color-content-disable)}.check-box-root .InputCheckbox.disabled .unchecked:hover{color:var(--s-color-content-disable)}.check-box-root .InputCheckbox .unchecked{color:var(--s-color-content-default)}.check-box-root .InputCheckbox .unchecked:hover{color:var(--s-color-content-highlight)}.check-box-root .InputCheckbox .checked,.check-box-root .InputCheckbox .indeterminate{user-select:none;cursor:pointer;color:var(--s-color-content-highlight);background-color:rgba(0,0,0,0)}.check-box-root .check-box-label{font:var(--s-typography-label-medium);color:var(--s-color-content-default);cursor:pointer}.check-box-root .check-box-label.disabled{cursor:auto;color:var(--s-color-content-disable)}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/InputCheckbox/InputCheckbox.scss",
            ],
            names: [],
            mappings:
              "AAAA,gBACE,iBAAA,CACA,kBAAA,CACA,YAAA,CACA,gBAAA,CACA,cAAA,CACA,6BAAA,CAEA,yBACE,WAAA,CAGF,qBACE,UAAA,CACA,WAAA,CAGF,+BACE,WAAA,CACA,cAAA,CACA,8BAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,kBAAA,CACA,UAAA,CACA,WAAA,CACA,0CAAA,CAEA,6CACE,wCAAA,CACA,2CAAA,CACA,mBAAA,CAGF,wCACE,oCAAA,CAEA,8CACE,YAAA,CAIJ,mDACE,WAAA,CACA,oCAAA,CAEA,yDACE,oCAAA,CAIJ,0CACE,oCAAA,CAGF,gDACE,sCAAA,CAGF,sFAEE,gBAAA,CACA,cAAA,CACA,sCAAA,CACA,8BAAA,CAIJ,iCACE,qCAAA,CACA,oCAAA,CACA,cAAA,CACA,0CACE,WAAA,CACA,oCAAA",
            sourcesContent: [
              ".check-box-root {\n  width: fit-content;\n  height: fit-content;\n  display: flex;\n  user-select: none;\n  cursor: pointer;\n  gap: var(--s-spacing-xx-small);\n\n  &.disabled {\n    cursor: auto;\n  }\n\n  span {\n    width: 24px;\n    height: 24px;\n  }\n\n  .InputCheckbox {\n    border: none;\n    cursor: pointer;\n    background-color: transparent;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: row;\n    width: 22px;\n    height: 22px;\n    border-radius: var(--s-border-radius-small);\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-style: solid;\n    }\n\n    &.disabled {\n      color: var(--s-color-content-disable);\n\n      &:focus {\n        outline: none;\n      }\n    }\n\n    &.disabled .unchecked {\n      cursor: auto;\n      color: var(--s-color-content-disable);\n\n      &:hover {\n        color: var(--s-color-content-disable);\n      }\n    }\n\n    .unchecked {\n      color: var(--s-color-content-default);\n    }\n\n    .unchecked:hover {\n      color: var(--s-color-content-highlight);\n    }\n\n    .checked,\n    .indeterminate {\n      user-select: none;\n      cursor: pointer;\n      color: var(--s-color-content-highlight);\n      background-color: transparent;\n    }\n  }\n\n  .check-box-label {\n    font: var(--s-typography-label-medium);\n    color: var(--s-color-content-default);\n    cursor: pointer;\n    &.disabled {\n      cursor: auto;\n      color: var(--s-color-content-disable);\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputNumber/InputNumber.scss":
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
          ".input-number-root{display:flex;flex-direction:column;gap:var(--s-spacing-nano);height:min-content}.input-number-root .input-number-label{font:var(--s-typography-label-medium);color:var(--s-color-content-default)}.input-number-root .input-number{border-radius:var(--s-border-radius-small);display:flex;align-items:center;justify-content:space-between;width:100%;color:var(--s-color-content-default)}.input-number-root .input-number.disabled{border-color:var(--s-color-border-default);background-color:var(--s-color-fill-disable);opacity:.64}.input-number-root .input-number.disabled input{background-color:var(--s-color-fill-disable)}.input-number-root .input-number.disabled button:hover{background-color:rgba(0,0,0,0)}.input-number-root .input-number.disabled button:active{outline:none}.input-number-root .input-number:focus-within{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-thin);outline-style:solid}.input-number-root .input-number .add{border-radius:0 var(--s-border-radius-small) var(--s-border-radius-small) 0;border-left:0}.input-number-root .input-number .add:active{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:-1px;outline-style:solid}.input-number-root .input-number .subtract{border-right:0;z-index:2;border-radius:var(--s-border-radius-small) 0 0 var(--s-border-radius-small)}.input-number-root .input-number .subtract:active{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:-1px;outline-style:solid}.input-number-root .input-number button{display:flex;align-items:center;padding:var(--s-spacing-xx-small);margin:0;background-color:var(--s-color-fill-default);cursor:pointer;color:var(--s-color-content-default);border:var(--s-border-width-hairline) solid var(--s-color-border-default)}.input-number-root .input-number button:hover{background-color:var(--s-color-fill-default-hover)}.input-number-root .input-number button:focus-visible{outline:none}.input-number-root .input-number button:disabled{background-color:var(--s-color-fill-disable);color:var(--s-color-content-disable);cursor:auto}.input-number-root .input-number input[type=number]::-webkit-inner-spin-button{-webkit-appearance:none}.input-number-root .input-number input[type=number]{-moz-appearance:textfield;appearance:textfield}.input-number-root .input-number input{box-sizing:border-box;text-align:center;color:var(--s-color-content-default);font:var(--s-typography-paragraph-regular);width:100%;padding:var(--s-spacing-xx-small);border:var(--s-border-width-hairline) solid var(--s-color-border-default);background-color:var(--s-color-fill-default)}.input-number-root .input-number input:hover{background-color:var(--s-color-fill-default-hover)}.input-number-root .input-number input:focus-visible{outline:none;background-color:var(--s-color-fill-default-hover)}.input-number-root .input-number input::placeholder{text-align:center;color:var(--s-color-content-placeholder);font:var(--s-typography-paragraph-regular)}.input-number-root .input-number .input.error{background-color:var(--s-color-fill-warning-light);border:var(--s-border-width-hairline) solid var(--s-color-border-warning);color:var(--s-color-content-warning)}.input-number-root .textError{color:var(--s-color-content-warning);font:var(--s-typography-caption-regular)}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/InputNumber/InputNumber.scss",
            ],
            names: [],
            mappings:
              "AAAA,mBACE,YAAA,CACA,qBAAA,CACA,yBAAA,CACA,kBAAA,CAEA,uCACE,qCAAA,CACA,oCAAA,CAGF,iCACE,0CAAA,CACA,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,UAAA,CACA,oCAAA,CAEA,0CACE,0CAAA,CACA,4CAAA,CACA,WAAA,CACA,gDACE,4CAAA,CAGF,uDACE,8BAAA,CAGF,wDACE,YAAA,CAIJ,8CACE,wCAAA,CACA,2CAAA,CACA,yCAAA,CACA,mBAAA,CAGF,sCACE,2EAAA,CAEA,aAAA,CAEA,6CACE,wCAAA,CACA,2CAAA,CACA,mBAAA,CACA,mBAAA,CAIJ,2CACE,cAAA,CACA,SAAA,CACA,2EAAA,CAGA,kDACE,wCAAA,CACA,2CAAA,CACA,mBAAA,CACA,mBAAA,CAIJ,wCACE,YAAA,CACA,kBAAA,CACA,iCAAA,CACA,QAAA,CACA,4CAAA,CACA,cAAA,CACA,oCAAA,CACA,yEAAA,CAEA,8CACE,kDAAA,CAGF,sDACE,YAAA,CAGF,iDACE,4CAAA,CACA,oCAAA,CACA,WAAA,CAIJ,+EACE,uBAAA,CAGF,oDACE,yBAAA,CACA,oBAAA,CAGF,uCACE,qBAAA,CACA,iBAAA,CACA,oCAAA,CACA,0CAAA,CACA,UAAA,CACA,iCAAA,CACA,yEAAA,CACA,4CAAA,CAEA,6CACE,kDAAA,CAGF,qDACE,YAAA,CACA,kDAAA,CAGF,oDACE,iBAAA,CACA,wCAAA,CACA,0CAAA,CAIJ,8CACE,kDAAA,CACA,yEAAA,CACA,oCAAA,CAIJ,8BACE,oCAAA,CACA,wCAAA",
            sourcesContent: [
              '.input-number-root {\n  display: flex;\n  flex-direction: column;\n  gap: var(--s-spacing-nano);\n  height: min-content;\n\n  .input-number-label {\n    font: var(--s-typography-label-medium);\n    color: var(--s-color-content-default);\n  }\n\n  .input-number {\n    border-radius: var(--s-border-radius-small);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    color: var(--s-color-content-default);\n\n    &.disabled {\n      border-color: var(--s-color-border-default);\n      background-color: var(--s-color-fill-disable);\n      opacity: 0.64;\n      input {\n        background-color: var(--s-color-fill-disable);\n      }\n\n      button:hover {\n        background-color: transparent;\n      }\n\n      button:active {\n        outline: none;\n      }\n    }\n\n    &:focus-within {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: var(--s-border-width-thin);\n      outline-style: solid;\n    }\n\n    .add {\n      border-radius: 0 var(--s-border-radius-small) var(--s-border-radius-small)\n        0;\n      border-left: 0;\n\n      &:active {\n        outline-width: var(--s-border-width-thin);\n        outline-color: var(--s-color-fill-highlight);\n        outline-offset: -1px;\n        outline-style: solid;\n      }\n    }\n\n    .subtract {\n      border-right: 0;\n      z-index: 2;\n      border-radius: var(--s-border-radius-small) 0 0\n        var(--s-border-radius-small);\n\n      &:active {\n        outline-width: var(--s-border-width-thin);\n        outline-color: var(--s-color-fill-highlight);\n        outline-offset: -1px;\n        outline-style: solid;\n      }\n    }\n\n    button {\n      display: flex;\n      align-items: center;\n      padding: var(--s-spacing-xx-small);\n      margin: 0;\n      background-color: var(--s-color-fill-default);\n      cursor: pointer;\n      color: var(--s-color-content-default);\n      border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n\n      &:hover {\n        background-color: var(--s-color-fill-default-hover);\n      }\n\n      &:focus-visible {\n        outline: none;\n      }\n\n      &:disabled {\n        background-color: var(--s-color-fill-disable);\n        color: var(--s-color-content-disable);\n        cursor: auto;\n      }\n    }\n\n    input[type="number"]::-webkit-inner-spin-button {\n      -webkit-appearance: none;\n    }\n\n    input[type="number"] {\n      -moz-appearance: textfield;\n      appearance: textfield;\n    }\n\n    input {\n      box-sizing: border-box;\n      text-align: center;\n      color: var(--s-color-content-default);\n      font: var(--s-typography-paragraph-regular);\n      width: 100%;\n      padding: var(--s-spacing-xx-small);\n      border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n      background-color: var(--s-color-fill-default);\n\n      &:hover {\n        background-color: var(--s-color-fill-default-hover);\n      }\n\n      &:focus-visible {\n        outline: none;\n        background-color: var(--s-color-fill-default-hover);\n      }\n\n      &::placeholder {\n        text-align: center;\n        color: var(--s-color-content-placeholder);\n        font: var(--s-typography-paragraph-regular);\n      }\n    }\n\n    .input.error {\n      background-color: var(--s-color-fill-warning-light);\n      border: var(--s-border-width-hairline) solid var(--s-color-border-warning);\n      color: var(--s-color-content-warning);\n    }\n  }\n\n  .textError {\n    color: var(--s-color-content-warning);\n    font: var(--s-typography-caption-regular);\n  }\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputRadioButton/InputRadioButton.scss":
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
          ".radio-button-root{display:flex;align-items:center;gap:var(--s-spacing-xx-small)}.radio-button-root .radio-button{display:flex;align-items:center;justify-content:center;flex-direction:row;width:22px;height:22px;border-radius:var(--s-border-radius-large);user-select:none;cursor:pointer;color:var(--s-color-content-default)}.radio-button-root .radio-button:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-style:solid}.radio-button-root .radio-button.disabled{color:var(--s-color-content-disable);cursor:auto}.radio-button-root .radio-button.disabled .checked,.radio-button-root .radio-button.disabled .unchecked{display:flex;color:var(--s-color-content-disable)}.radio-button-root .radio-button.disabled .checked,.radio-button-root .radio-button.disabled .unchecked:hover{color:var(--s-color-content-disable)}.radio-button-root .radio-button.disabled:focus-visible{outline-width:none;outline-color:none;outline-style:none}.radio-button-root .radio-button .unchecked:hover{color:var(--s-color-content-highlight)}.radio-button-root .radio-button .checked{cursor:pointer;color:var(--s-color-content-highlight);background-color:rgba(0,0,0,0)}.radio-button-root .radio-button-label{font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default);cursor:pointer;user-select:none}.radio-button-root .radio-button-label.disabled{color:var(--s-color-content-disable);cursor:auto}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/InputRadioButton/InputRadioButton.scss",
            ],
            names: [],
            mappings:
              "AAAA,mBACE,YAAA,CACA,kBAAA,CACA,6BAAA,CAEA,iCACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,kBAAA,CACA,UAAA,CACA,WAAA,CACA,0CAAA,CACA,gBAAA,CACA,cAAA,CACA,oCAAA,CAEA,+CACE,wCAAA,CACA,2CAAA,CACA,mBAAA,CAGF,0CACE,oCAAA,CACA,WAAA,CAEA,wGAEE,YAAA,CACA,oCAAA,CAGF,8GAEE,oCAAA,CAGF,wDACE,kBAAA,CACA,kBAAA,CACA,kBAAA,CAKF,kDACE,sCAAA,CAIJ,0CACE,cAAA,CACA,sCAAA,CACA,8BAAA,CAIJ,uCACE,0CAAA,CACA,oCAAA,CACA,cAAA,CACA,gBAAA,CAEA,gDACE,oCAAA,CACA,WAAA",
            sourcesContent: [
              ".radio-button-root {\n  display: flex;\n  align-items: center;\n  gap: var(--s-spacing-xx-small);\n\n  .radio-button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: row;\n    width: 22px;\n    height: 22px;\n    border-radius: var(--s-border-radius-large);\n    user-select: none;\n    cursor: pointer;\n    color: var(--s-color-content-default);\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-style: solid;\n    }\n\n    &.disabled {\n      color: var(--s-color-content-disable);\n      cursor: auto;\n\n      .checked,\n      .unchecked {\n        display: flex;\n        color: var(--s-color-content-disable);\n      }\n\n      .checked,\n      .unchecked:hover {\n        color: var(--s-color-content-disable);\n      }\n\n      &:focus-visible {\n        outline-width: none;\n        outline-color: none;\n        outline-style: none;\n      }\n    }\n\n    .unchecked {\n      &:hover {\n        color: var(--s-color-content-highlight);\n      }\n    }\n\n    .checked {\n      cursor: pointer;\n      color: var(--s-color-content-highlight);\n      background-color: transparent;\n    }\n  }\n\n  .radio-button-label {\n    font: var(--s-typography-paragraph-regular);\n    color: var(--s-color-content-default);\n    cursor: pointer;\n    user-select: none;\n\n    &.disabled {\n      color: var(--s-color-content-disable);\n      cursor: auto;\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputSelect/InputSelect.scss":
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
          ".input-select-root{display:flex;flex-direction:column;gap:var(--s-spacing-nano)}.input-select-root .input-select-label{font:var(--s-typography-label-medium);color:var(--s-color-content-default)}.input-select-root .input-select-button{cursor:pointer;padding:var(--s-spacing-xx-small) var(--s-spacing-x-small);display:flex;justify-content:space-between;align-items:center;border:var(--s-border-width-hairline) solid var(--s-color-border-default);background-color:var(--s-color-fill-default);border-radius:var(--s-border-radius-small);color:var(--s-color-content-placeholder)}.input-select-root .input-select-button select{cursor:pointer;width:100%;background-color:rgba(0,0,0,0);color:var(--s-color-content-default);font:var(--s-typography-paragraph-regular);height:22px}.input-select-root .input-select-button select:focus{outline:none}.input-select-root .input-select-button select.select-error{color:var(--s-color-content-warning)}.input-select-root .input-select-button select option{cursor:pointer;display:flex;background-color:var(--s-color-fill-default);color:var(--s-color-content-default);font:var(--s-typography-paragraph-regular)}.input-select-root .input-select-button.option{color:var(--s-color-content-default)}.input-select-root .input-select-button.error{border-color:var(--s-color-border-warning);color:var(--s-color-content-warning);background-color:var(--s-color-fill-warning-light)}.input-select-root .input-select-button.error:hover{background-color:var(--s-color-fill-warning-light)}.input-select-root .input-select-button.disabled{background-color:var(--s-color-fill-disable);color:var(--s-color-content-disable);opacity:.64}.input-select-root .input-select-button:hover{background-color:var(--s-color-fill-disable)}.input-select-root .input-select-button:focus-within{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:var(--s-border-width-hairline);outline-style:solid}.input-select-root .input-select-error-message{color:var(--s-color-content-warning);font:VAR(--s-typography-caption-regular)}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/InputSelect/InputSelect.scss",
            ],
            names: [],
            mappings:
              "AAAA,mBACE,YAAA,CACA,qBAAA,CACA,yBAAA,CAEA,uCACE,qCAAA,CACA,oCAAA,CAGF,wCACE,cAAA,CACA,0DAAA,CACA,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,yEAAA,CACA,4CAAA,CACA,0CAAA,CACA,wCAAA,CAEA,+CACE,cAAA,CACA,UAAA,CACA,8BAAA,CACA,oCAAA,CACA,0CAAA,CACA,WAAA,CACA,qDACE,YAAA,CAGF,4DACE,oCAAA,CAGF,sDACE,cAAA,CACA,YAAA,CACA,4CAAA,CACA,oCAAA,CACA,0CAAA,CAIJ,+CACE,oCAAA,CAGF,8CACE,0CAAA,CACA,oCAAA,CACA,kDAAA,CAEA,oDACE,kDAAA,CAIJ,iDACE,4CAAA,CACA,oCAAA,CACA,WAAA,CAGF,8CACE,4CAAA,CAGF,qDACE,wCAAA,CACA,2CAAA,CACA,6CAAA,CACA,mBAAA,CAIJ,+CACE,oCAAA,CACA,wCAAA",
            sourcesContent: [
              ".input-select-root {\n  display: flex;\n  flex-direction: column;\n  gap: var(--s-spacing-nano);\n\n  .input-select-label {\n    font: var(--s-typography-label-medium);\n    color: var(--s-color-content-default);\n  }\n\n  .input-select-button {\n    cursor: pointer;\n    padding: var(--s-spacing-xx-small) var(--s-spacing-x-small);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n    background-color: var(--s-color-fill-default);\n    border-radius: var(--s-border-radius-small);\n    color: var(--s-color-content-placeholder);\n\n    select {\n      cursor: pointer;\n      width: 100%;\n      background-color: transparent;\n      color: var(--s-color-content-default);\n      font: var(--s-typography-paragraph-regular);\n      height: 22px;\n      &:focus {\n        outline: none;\n      }\n\n      &.select-error {\n        color: var(--s-color-content-warning);\n      }\n\n      option {\n        cursor: pointer;\n        display: flex;\n        background-color: var(--s-color-fill-default);\n        color: var(--s-color-content-default);\n        font: var(--s-typography-paragraph-regular);\n      }\n    }\n\n    &.option {\n      color: var(--s-color-content-default);\n    }\n\n    &.error {\n      border-color: var(--s-color-border-warning);\n      color: var(--s-color-content-warning);\n      background-color: var(--s-color-fill-warning-light);\n\n      &:hover {\n        background-color: var(--s-color-fill-warning-light);\n      }\n    }\n\n    &.disabled {\n      background-color: var(--s-color-fill-disable);\n      color: var(--s-color-content-disable);\n      opacity: 0.64;\n    }\n\n    &:hover {\n      background-color: var(--s-color-fill-disable);\n    }\n\n    &:focus-within {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-offset: var(--s-border-width-hairline);\n      outline-style: solid;\n    }\n  }\n\n  .input-select-error-message {\n    color: var(--s-color-content-warning);\n    font: VAR(--s-typography-caption-regular);\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputTextArea/InputTextArea.scss":
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
          ".text-area-root{display:flex;flex-direction:column;gap:var(--s-spacing-nano)}.text-area-root .text-area-label{color:var(--s-color-content-default);font:var(--s-typography-label-medium)}.text-area-root .text-area{cursor:text;display:flex;align-items:center;border-radius:var(--s-border-radius-small);border:solid var(--s-border-width-hairline) var(--s-color-border-default);background-color:var(--s-color-fill-default)}.text-area-root .text-area textarea{width:100%;min-height:120px;padding:var(--s-spacing-xx-small) var(--s-spacing-x-small);color:var(--s-color-content-default);font:var(--s-typography-paragraph-regular);background-color:rgba(0,0,0,0);border:none;height:100%;resize:vertical}.text-area-root .text-area textarea::-webkit-scrollbar{width:var(--s-spacing-nano);border-radius:12px}.text-area-root .text-area textarea::-webkit-scrollbar-thumb{background:var(--s-color-fill-default-light);border-radius:12px}.text-area-root .text-area textarea:focus-visible{outline:none}.text-area-root .text-area textarea::placeholder{font:var(--s-typography-paragraph-regular);color:var(--s-color-content-placeholder)}.text-area-root .text-area:hover{background-color:var(--s-color-fill-default-hover)}.text-area-root .text-area:focus-within{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-border-highlight);outline-offset:var(--s-border-width-hairline);outline-style:solid;background-color:var(--s-color-fill-default)}.text-area-root .text-area:active{color:var(--s-color-content-default);font:var(--s-typography-paragraph-regular)}.text-area-root .text-area.disabled{opacity:.64;color:var(--s-color-content-disable);background-color:var(--s-color-fill-disable);border-color:var(--s-color-border-default)}.text-area-root .text-area.disabled:focus-within{outline-style:none}.text-area-root .text-area.error{color:var(--s-color-content-warning);background-color:var(--s-color-fill-warning-light);cursor:not-allowed;border:solid var(--s-border-width-hairline) var(--s-color-border-warning)}.text-area-root .text-area.error textarea::placeholder{color:var(--s-color-content-warning)}.text-area-root .text-area.error:hover{background-color:var(--s-color-fill-warning-light)}.text-area-root .text-area.error:focus-within{outline:none;background-color:none}.text-area-root .text-area.error:active{color:var(--s-color-content-on-color)}.text-area-root .description{font:var(--s-typography-caption-regular);color:var(--s-color-content-warning);margin:0}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/InputTextArea/InputTextArea.scss",
            ],
            names: [],
            mappings:
              "AAAA,gBACE,YAAA,CACA,qBAAA,CACA,yBAAA,CAEA,iCACE,oCAAA,CACA,qCAAA,CAGF,2BACE,WAAA,CACA,YAAA,CACA,kBAAA,CACA,0CAAA,CACA,yEAAA,CACA,4CAAA,CAEA,oCACE,UAAA,CACA,gBAAA,CACA,0DAAA,CACA,oCAAA,CACA,0CAAA,CACA,8BAAA,CACA,WAAA,CACA,WAAA,CACA,eAAA,CAEA,uDACE,2BAAA,CACA,kBAAA,CAGF,6DACE,4CAAA,CACA,kBAAA,CAGF,kDACE,YAAA,CAGF,iDACE,0CAAA,CACA,wCAAA,CAIJ,iCACE,kDAAA,CAGF,wCACE,wCAAA,CACA,6CAAA,CACA,6CAAA,CACA,mBAAA,CACA,4CAAA,CAGF,kCACE,oCAAA,CACA,0CAAA,CAGF,oCACE,WAAA,CACA,oCAAA,CACA,4CAAA,CACA,0CAAA,CAGF,iDACE,kBAAA,CAGF,iCACE,oCAAA,CACA,kDAAA,CACA,kBAAA,CACA,yEAAA,CAEA,uDACE,oCAAA,CAGF,uCACE,kDAAA,CAGF,8CACE,YAAA,CACA,qBAAA,CAGF,wCACE,qCAAA,CAIN,6BACE,wCAAA,CACA,oCAAA,CACA,QAAA",
            sourcesContent: [
              ".text-area-root {\n  display: flex;\n  flex-direction: column;\n  gap: var(--s-spacing-nano);\n\n  .text-area-label {\n    color: var(--s-color-content-default);\n    font: var(--s-typography-label-medium);\n  }\n\n  .text-area {\n    cursor: text;\n    display: flex;\n    align-items: center;\n    border-radius: var(--s-border-radius-small);\n    border: solid var(--s-border-width-hairline) var(--s-color-border-default);\n    background-color: var(--s-color-fill-default);\n\n    textarea {\n      width: 100%;\n      min-height: 120px;\n      padding: var(--s-spacing-xx-small) var(--s-spacing-x-small);\n      color: var(--s-color-content-default);\n      font: var(--s-typography-paragraph-regular);\n      background-color: transparent;\n      border: none;\n      height: 100%;\n      resize: vertical;\n\n      &::-webkit-scrollbar {\n        width: var(--s-spacing-nano);\n        border-radius: 12px;\n      }\n\n      &::-webkit-scrollbar-thumb {\n        background: var(--s-color-fill-default-light);\n        border-radius: 12px;\n      }\n\n      &:focus-visible {\n        outline: none;\n      }\n\n      &::placeholder {\n        font: var(--s-typography-paragraph-regular);\n        color: var(--s-color-content-placeholder);\n      }\n    }\n\n    &:hover {\n      background-color: var(--s-color-fill-default-hover);\n    }\n\n    &:focus-within {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-border-highlight);\n      outline-offset: var(--s-border-width-hairline);\n      outline-style: solid;\n      background-color: var(--s-color-fill-default);\n    }\n\n    &:active {\n      color: var(--s-color-content-default);\n      font: var(--s-typography-paragraph-regular);\n    }\n\n    &.disabled {\n      opacity: 0.64;\n      color: var(--s-color-content-disable);\n      background-color: var(--s-color-fill-disable);\n      border-color: var(--s-color-border-default);\n    }\n\n    &.disabled:focus-within {\n      outline-style: none;\n    }\n\n    &.error {\n      color: var(--s-color-content-warning);\n      background-color: var(--s-color-fill-warning-light);\n      cursor: not-allowed;\n      border: solid var(--s-border-width-hairline) var(--s-color-border-warning);\n\n      textarea::placeholder {\n        color: var(--s-color-content-warning);\n      }\n\n      &:hover {\n        background-color: var(--s-color-fill-warning-light);\n      }\n\n      &:focus-within {\n        outline: none;\n        background-color: none;\n      }\n\n      &:active {\n        color: var(--s-color-content-on-color);\n      }\n    }\n  }\n  .description {\n    font: var(--s-typography-caption-regular);\n    color: var(--s-color-content-warning);\n    margin: 0;\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/InputTime/InputTime.scss":
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
          ".input-time{position:relative;z-index:1}.input-time .input-time-modal{z-index:99;padding:var(--s-spacing-nano);border-radius:var(--s-border-radius-small);margin-top:var(--s-spacing-xx-small);background-color:var(--s-color-fill-default);position:absolute;display:flex;height:232px;box-shadow:var(--s-shadow-level-1);border:var(--s-border-width-hairline) solid var(--s-color-border-default)}.input-time .input-time-modal .modal-section{overflow-y:scroll;display:flex;flex-direction:column;gap:var(--s-spacing-xx-small);scroll-behavior:smooth}.input-time .input-time-modal .modal-section::-webkit-scrollbar{width:0px}.input-time .input-time-modal .modal-section .input-time-buttons{background-color:rgba(0,0,0,0);color:var(--s-color-content-default);border-radius:var(--s-border-radius-small);padding:var(--s-spacing-xx-small);cursor:pointer;z-index:999}.input-time .input-time-modal .modal-section .input-time-buttons:hover{background-color:var(--s-color-fill-default-hover)}.input-time .input-time-modal .modal-section .input-time-buttons:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-offset:-2px;outline-style:solid}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/app/components/InputTime/InputTime.scss",
            ],
            names: [],
            mappings:
              "AAAA,YACE,iBAAA,CACA,SAAA,CAEA,8BACE,UAAA,CACA,6BAAA,CACA,0CAAA,CACA,oCAAA,CACA,4CAAA,CACA,iBAAA,CACA,YAAA,CACA,YAAA,CACA,kCAAA,CACA,yEAAA,CAEA,6CACE,iBAAA,CACA,YAAA,CACA,qBAAA,CACA,6BAAA,CACA,sBAAA,CAEA,gEACE,SAAA,CAGF,iEACE,8BAAA,CACA,oCAAA,CACA,0CAAA,CACA,iCAAA,CACA,cAAA,CACA,WAAA,CAGF,uEACE,kDAAA,CAGF,+EACE,wCAAA,CACA,2CAAA,CACA,mBAAA,CACA,mBAAA",
            sourcesContent: [
              ".input-time {\n  position: relative;\n  z-index: 1;\n\n  .input-time-modal {\n    z-index: 99;\n    padding: var(--s-spacing-nano);\n    border-radius: var(--s-border-radius-small);\n    margin-top: var(--s-spacing-xx-small);\n    background-color: var(--s-color-fill-default);\n    position: absolute;\n    display: flex;\n    height: 232px;\n    box-shadow: var(--s-shadow-level-1);\n    border: var(--s-border-width-hairline) solid var(--s-color-border-default);\n\n    .modal-section {\n      overflow-y: scroll;\n      display: flex;\n      flex-direction: column;\n      gap: var(--s-spacing-xx-small);\n      scroll-behavior: smooth;\n\n      &::-webkit-scrollbar {\n        width: 0px;\n      }\n\n      .input-time-buttons {\n        background-color: transparent;\n        color: var(--s-color-content-default);\n        border-radius: var(--s-border-radius-small);\n        padding: var(--s-spacing-xx-small);\n        cursor: pointer;\n        z-index: 999;\n      }\n\n      .input-time-buttons:hover {\n        background-color: var(--s-color-fill-default-hover);\n      }\n\n      .input-time-buttons:focus-visible {\n        outline-width: var(--s-border-width-thin);\n        outline-color: var(--s-color-fill-highlight);\n        outline-offset: -2px;\n        outline-style: solid;\n      }\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Progress/Progress.scss":
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
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/SaveBar/SaveBar.scss":
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
          ".save-bar{display:flex;justify-content:center;background-color:var(--s-color-fill-highlight);padding:var(--s-spacing-x-small) var(--s-spacing-medium);box-shadow:var(--s-shadow-level-1)}.save-bar .save-bar-content{width:100%;display:flex;flex-direction:row;align-items:center;justify-content:space-between;max-width:1280px}.save-bar .save-bar-content .save-bar-label{font:var(--s-typography-heading-small);color:var(--s-color-content-on-color)}.save-bar .save-bar-content .save-bar-buttons{display:flex}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/SaveBar/SaveBar.scss"],
            names: [],
            mappings:
              "AAAA,UACE,YAAA,CACA,sBAAA,CACA,8CAAA,CACA,wDAAA,CACA,kCAAA,CAEA,4BACE,UAAA,CACA,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,6BAAA,CACA,gBAAA,CAEA,4CACE,sCAAA,CACA,qCAAA,CAGF,8CACE,YAAA",
            sourcesContent: [
              ".save-bar {\n  display: flex;\n  justify-content: center;\n  background-color: var(--s-color-fill-highlight);\n  padding: var(--s-spacing-x-small) var(--s-spacing-medium);\n  box-shadow: var(--s-shadow-level-1);\n\n  .save-bar-content {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    max-width: 1280px;\n\n    .save-bar-label {\n      font: var(--s-typography-heading-small);\n      color: var(--s-color-content-on-color);\n    }\n\n    .save-bar-buttons {\n      display: flex;\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/SavebarTrigger/SavebarTrigger.scss":
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
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/nextjs/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/app/components/Switch/Switch.scss":
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
          ".switch-root{display:flex;align-items:center}.switch-root .switch{display:flex;align-items:center;justify-content:center;flex-direction:row;width:22px;height:22px;border-radius:var(--s-border-radius-small);color:var(--s-color-content-default);user-select:none;cursor:pointer}.switch-root .switch:hover{color:var(--s-color-content-highlight)}.switch-root .switch:focus-visible{outline-width:var(--s-border-width-thin);outline-color:var(--s-color-fill-highlight);outline-style:solid}.switch-root .switch.checked{color:var(--s-color-content-highlight);background-color:rgba(0,0,0,0);transition:all .3s ease}.switch-root .switch.checked:hover{color:var(--s-color-content-highlight)}.switch-root .switch.unchecked{transition:all .3s ease}.switch-root .label{padding-left:var(--s-spacing-xx-small);font:var(--s-typography-paragraph-regular);color:var(--s-color-content-default);cursor:pointer;user-select:none}.switch-root .label.disabled{cursor:not-allowed}.switch-root .disabled{color:var(--s-color-content-disable);cursor:not-allowed}.switch-root .disabled .checked,.switch-root .disabled .unchecked,.switch-root .disabled:hover{color:var(--s-color-content-disable)}.switch-root .disabled:focus-visible{outline-width:none;outline-color:none;outline-style:none}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/components/Switch/Switch.scss"],
            names: [],
            mappings:
              "AAAA,aACE,YAAA,CACA,kBAAA,CAEA,qBACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,kBAAA,CACA,UAAA,CACA,WAAA,CACA,0CAAA,CACA,oCAAA,CACA,gBAAA,CACA,cAAA,CAEA,2BACE,sCAAA,CAGF,mCACE,wCAAA,CACA,2CAAA,CACA,mBAAA,CAGF,6BACE,sCAAA,CACA,8BAAA,CACA,uBAAA,CAEA,mCACE,sCAAA,CAGJ,+BACE,uBAAA,CAIJ,oBACE,sCAAA,CACA,0CAAA,CACA,oCAAA,CACA,cAAA,CACA,gBAAA,CAEA,6BACE,kBAAA,CAIJ,uBACE,oCAAA,CACA,kBAAA,CAEA,+FAGE,oCAAA,CAGF,qCACE,kBAAA,CACA,kBAAA,CACA,kBAAA",
            sourcesContent: [
              ".switch-root {\n  display: flex;\n  align-items: center;\n\n  .switch {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: row;\n    width: 22px;\n    height: 22px;\n    border-radius: var(--s-border-radius-small);\n    color: var(--s-color-content-default);\n    user-select: none;\n    cursor: pointer;\n\n    &:hover {\n      color: var(--s-color-content-highlight);\n    }\n\n    &:focus-visible {\n      outline-width: var(--s-border-width-thin);\n      outline-color: var(--s-color-fill-highlight);\n      outline-style: solid;\n    }\n\n    &.checked {\n      color: var(--s-color-content-highlight);\n      background-color: transparent;\n      transition: all 0.3s ease;\n\n      &:hover {\n        color: var(--s-color-content-highlight);\n      }\n    }\n    &.unchecked {\n      transition: all 0.3s ease;\n    }\n  }\n\n  .label {\n    padding-left: var(--s-spacing-xx-small);\n    font: var(--s-typography-paragraph-regular);\n    color: var(--s-color-content-default);\n    cursor: pointer;\n    user-select: none;\n\n    &.disabled {\n      cursor: not-allowed;\n    }\n  }\n\n  .disabled {\n    color: var(--s-color-content-disable);\n    cursor: not-allowed;\n\n    .checked,\n    .unchecked,\n    &:hover {\n      color: var(--s-color-content-disable);\n    }\n\n    &:focus-visible {\n      outline-width: none;\n      outline-color: none;\n      outline-style: none;\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
  },
]);
