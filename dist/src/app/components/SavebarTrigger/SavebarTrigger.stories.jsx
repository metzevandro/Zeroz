var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
import React, { useEffect, useState } from "react";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
import "../../styles.scss";
import SavebarTrigger from "./SavebarTrigger";
import Input from "../Input/Input";
import AppShell from "../AppShell/AppShell";
import Sidebar, { SidebarItem, SidebarTitle } from "../Sidebar/Sidebar";
import Header, { HeaderProfile } from "../Header/Header";
import { Breadcrumb } from "../Breadcrumb/Breadcrumb";
import Dropdown, { DropdownItem, DropdownTitle } from "../Dropdown/Dropdown";
import Page from "../Page/Page";
import InputNumber from "../InputNumber/InputNumber";
import Layout from "../Layout/Layout";
import DataPicker from "../DataPicker/DataPicker";
import InputSelect from "../InputSelect/InputSelect";
import FileUploader from "../FileUploader/FileUploader";
import ImageUploader from "../ImageUploader/ImageUploader";
import InputCheckbox from "../InputCheckbox/InputCheckbox";
import InputRadioButton from "../InputRadioButton/InputRadioButton";
import Slider from "../Slider/Slider";
import Switch from "../Switch/Switch";
import InputTime from "../InputTime/InputTime";
import TextArea from "../InputTextArea/InputTextArea";
var meta = {
  title: "Templates/Savebar Trigger",
  component: SavebarTrigger,
  parameters: {
    layout: "fullscreen",
    docs: {
      page: function () {
        return (
          <>
            <Title />
            <Subtitle>Template</Subtitle>
            <p>
              The <strong>SavebarTrigger</strong> template is designed to
              monitor changes to inputs within its scope. This template serves
              as a proactive observer, ensuring timely detection and response to
              changes made, facilitating ongoing management of data updates, and
              associated save or cancel processes.
            </p>
            <Primary />
            <Controls />
            <Stories />
          </>
        );
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    formChanged: {
      name: "Form Changed",
      description: "Determines if the form content has been changed.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "events",
      },
    },
    handleCancel: {
      name: "Handle Cancel",
      description: "Callback function to handle cancel action.",
      action: "clicked",
      table: {
        type: { summary: "function" },
        category: "events",
      },
    },
    handleSubmit: {
      name: "Handle Submit",
      description: "Callback function to handle submit action.",
      action: "clicked",
      table: {
        type: { summary: "function" },
        category: "events",
      },
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
};
export default meta;
var Template = function (args) {
  var _a, _b;
  var _c = useState(false),
    isOpenSidebar = _c[0],
    setIsOpenSidebar = _c[1];
  var _d = useState({
      ImageUploader: null,
      FileUploader: null,
    }),
    formValuesFile = _d[0],
    setFormValuesFile = _d[1];
  var _e = useState({
      Input: "",
      "Input Select": "Option 1",
      "Input Number": "0",
      Checkbox: false,
      Switch: false,
      "Radio Button": false,
      "Input do DataPicker": "",
      ColorPicker: "#FFFFFF",
      Slider: "0",
      "Input Time": "",
      "Text Area": "",
    }),
    formValues = _e[0],
    setFormValues = _e[1];
  var _f = useState({}),
    initialValues = _f[0],
    setInitialValues = _f[1];
  var _g = useState(false),
    formChanged = _g[0],
    setFormChanged = _g[1];
  useEffect(function () {
    setInitialValues(formValues);
  }, []);
  var handleInputChange = function (name, value) {
    var _a;
    setFormValues(
      __assign(__assign({}, formValues), ((_a = {}), (_a[name] = value), _a)),
    );
  };
  var handleFileChange = function (name, files) {
    var _a, _b;
    if (files && files.length > 0) {
      setFormValues(
        __assign(__assign({}, formValues), ((_a = {}), (_a[name] = files), _a)),
      );
    } else {
      setFormValues(
        __assign(__assign({}, formValues), ((_b = {}), (_b[name] = null), _b)),
      );
    }
  };
  var handleDateChange = function (name, newDate) {
    var _a;
    var day = newDate.getDate().toString().padStart(2, "0");
    var month = (newDate.getMonth() + 1).toString().padStart(2, "0");
    var year = newDate.getFullYear().toString();
    var formattedDate = "".concat(day, "/").concat(month, "/").concat(year);
    setFormValues(
      __assign(
        __assign({}, formValues),
        ((_a = {}), (_a[name] = formattedDate), _a),
      ),
    );
  };
  var handleSliderChange = function (value) {
    setFormValues(__assign(__assign({}, formValues), { Slider: value }));
  };
  var handleSubmit = function () {
    console.log("Formulário enviado!");
    setInitialValues(formValues);
    setFormChanged(false);
  };
  var handleCheckboxChange = function (checked) {
    setFormValues(__assign(__assign({}, formValues), { Checkbox: checked }));
  };
  var handleRadioChange = function (checked) {
    setFormValues(
      __assign(__assign({}, formValues), { "Radio Button": checked }),
    );
  };
  var handleSwitchChange = function (checked) {
    setFormValues(__assign(__assign({}, formValues), { Switch: checked }));
  };
  var options = ["Option 1", "Option 2", "Option 3"];
  useEffect(
    function () {
      var isFormChanged = Object.keys(formValues).some(function (key) {
        return initialValues[key] !== formValues[key];
      });
      setFormChanged(isFormChanged);
    },
    [formValues, initialValues],
  );
  var handleCancel = function () {
    console.log("Initial Values:", initialValues);
    setFormValues(initialValues);
    setFormChanged(false);
  };
  useEffect(
    function () {
      console.log("Form Values after cancel:", formValues);
    },
    [formValues],
  );
  var toggleSidebar = function () {
    setIsOpenSidebar(!isOpenSidebar);
  };
  return (
    <>
      <AppShell>
        <Sidebar
          brandSize="sm"
          setToggleSidebar={toggleSidebar}
          brand="/logo-sm.svg"
          toggle={isOpenSidebar}
        >
          <SidebarTitle title="Sidebar"></SidebarTitle>
          <SidebarItem
            icon="settings"
            fillIcon={true}
            isActive={true}
            title="Page Name"
          />
        </Sidebar>
        <Header breadcrumb={<Breadcrumb items={[]} />} onClick={toggleSidebar}>
          <HeaderProfile name="Username">
            <Dropdown dropdown>
              <DropdownTitle content="Settings" />
              <DropdownItem content="Item 1" />
              <DropdownItem content="Item 2" />
              <DropdownItem content="Settings" typeIcon="settings" />
            </Dropdown>
          </HeaderProfile>
        </Header>
        <Page
          namePage="Page Name"
          buttonContentSecondary="Button"
          withActionSecondary
          buttonContentPrimary="Button"
          withActionPrimary
          withBackButton
        >
          <SavebarTrigger
            labelCancel="Cancel"
            labelSave="Save"
            label="Unsaved changes"
            formChanged={formChanged}
            handleCancel={handleCancel}
            handleSubmit={handleSubmit}
          >
            <Layout columns="2 - Symmetric">
              <Input
                label="Input"
                placeholder="Placeholder"
                value={String(formValues["Input"])}
                onChange={function (e) {
                  if (e.target.value !== null) {
                    handleInputChange("Input", e.target.value);
                  }
                }}
              />
              <InputNumber
                label="Input Number"
                placeholder="Placeholder"
                min={0}
                max={10}
                value={String(formValues["Input Number"])}
                onChange={function (value) {
                  handleInputChange("Input Number", value);
                }}
              />
              <InputTime
                label="Input Time"
                placeholder="Placeholder"
                value={String(formValues["Input Time"])}
                onChange={function (value) {
                  handleInputChange("Input Time", value);
                }}
              />
              <InputSelect
                label="Input Select"
                value={String(formValues["Input Select"])}
                onChange={function (value) {
                  handleInputChange("Input Select", value);
                }}
                options={options}
              />
              <DataPicker
                label="Data Picker"
                placeholder="Placeholder"
                date={String(formValues["Input do DataPicker"])}
                onDateChange={function (value) {
                  return handleDateChange("Input do DataPicker", value);
                }}
              />
              <Slider
                value={String(formValues.Slider)}
                max={10}
                min={0}
                step={1}
                label="Slider"
                onChange={handleSliderChange}
              />
              <InputCheckbox
                label="Checkbox"
                onUpdate={function (checked) {
                  return handleCheckboxChange(checked);
                }}
                modelValue={
                  (_a = formValues["Checkbox"]) !== null && _a !== void 0
                    ? _a
                    : false
                }
              />

              <InputRadioButton
                label="Radio Button"
                onChange={function (checked) {
                  return handleRadioChange(checked);
                }}
                checked={
                  typeof formValues["Radio Button"] === "boolean"
                    ? formValues["Radio Button"]
                    : false
                }
              />
              <Switch
                label="Switch"
                onUpdate={function (checked) {
                  return handleSwitchChange(checked);
                }}
                modelValue={
                  (_b = formValues["Switch"]) !== null && _b !== void 0
                    ? _b
                    : false
                }
              />
              <FileUploader
                buttonLabel="Add File"
                title="File Uploader"
                typeIconButton="upload_file"
                maxFileSize={10}
                multiple={true}
                value={formValuesFile["FileUploader"]}
                onChange={function (files) {
                  return handleFileChange("FileUploader", files);
                }}
              />
              <ImageUploader
                title="Image Uploader"
                proportion="1/1"
                labelDropzone={"Drop your images here"}
                iconDropzone={"add_a_photo"}
                multiple={true}
                value={formValuesFile["ImageUploader"]}
                onChange={function (files) {
                  return handleFileChange("ImageUploader", files);
                }}
              />
              <TextArea
                label="Text Area"
                placeholder="Placeholder"
                value={String(formValues["Text Area"])}
                onChange={function (value) {
                  return handleInputChange("Text Area", value);
                }}
              />
            </Layout>
          </SavebarTrigger>
        </Page>
      </AppShell>
    </>
  );
};
export var Default = Template.bind({});
Default.args = {};
