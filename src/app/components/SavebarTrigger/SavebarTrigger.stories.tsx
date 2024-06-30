import React, { useEffect, useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import "../../styles.scss";
import SavebarTrigger from "./SavebarTrigger";
import Input from "../Input/Input";
import AppShell from "../AppShell/AppShell";
import Sidebar, { SidebarItem, SidebarTitle } from "../Sidebar/Sidebar";
import Header, { HeaderProfile } from "../Header/Header";
import BreadcrumbRoot, { Breadcrumb } from "../Breadcrumb/Breadcrumb";
import DropDownMenu, {
  DropDownMenuItem,
  DropDownMenuTitle,
} from "../DropdownMenu/DropdownMenu";
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
const meta: Meta = {
  title: "Templates/Savebar Trigger",
  component: SavebarTrigger,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type DefaultProps = {};

type FormValuesFile = {
  [key: string]: FileList | null | undefined;
};

type FormValuesType = {
  [key: string]:
    | string
    | boolean
    | number
    | File[]
    | FileList
    | null
    | undefined;
};

const Template: StoryFn<DefaultProps> = (args) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const [formValuesFile, setFormValuesFile] = useState<FormValuesFile>({
    ImageUploader: null,
    FileUploader: null,
  });

  const [formValues, setFormValues] = useState<FormValuesType>({
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
  });

  const [initialValues, setInitialValues] = useState<FormValuesType>({});
  const [formChanged, setFormChanged] = useState(false);

  useEffect(() => {
    setInitialValues(formValues);
  }, []);

  const handleInputChange = (
    name: string,
    value: string | boolean | number,
  ) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleFileChange = (name: string, files: FileList | null) => {
    if (files && files.length > 0) {
      setFormValues({
        ...formValues,
        [name]: files,
      });
    } else {
      setFormValues({
        ...formValues,
        [name]: null,
      });
    }
  };

  const handleDateChange = (name: string, newDate: Date) => {
    const day = newDate.getDate().toString().padStart(2, "0");
    const month = (newDate.getMonth() + 1).toString().padStart(2, "0");
    const year = newDate.getFullYear().toString();
    const formattedDate = `${day}/${month}/${year}`;

    setFormValues({
      ...formValues,
      [name]: formattedDate,
    });
  };

  const handleColorChange = (color: string) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      ColorPicker: color,
    }));
  };

  const handleSliderChange = (value: string) => {
    setFormValues({
      ...formValues,
      Slider: value,
    });
  };

  const handleSubmit = () => {
    console.log("Formulário enviado!");
    setInitialValues(formValues);
    setFormChanged(false);
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormValues({
      ...formValues,
      Checkbox: !!checked, // Convert checked to boolean
    });
  };

  const handleRadioChange = (checked: boolean) => {
    setFormValues({
      ...formValues,
      "Radio Button": checked,
    });
  };

  const handleSwitchChange = (checked: boolean) => {
    setFormValues({
      ...formValues,
      Switch: checked,
    });
  };

  const options = ["Option 1", "Option 2", "Option 3"];

  useEffect(() => {
    const isFormChanged = Object.keys(formValues).some(
      (key) => initialValues[key] !== formValues[key],
    );
    setFormChanged(isFormChanged);
  }, [formValues, initialValues]);

  const handleCancel = () => {
    console.log("Initial Values:", initialValues);
    setFormValues(initialValues);
    setFormChanged(false);
  };

  useEffect(() => {
    console.log("Form Values after cancel:", formValues);
  }, [formValues]);

  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  return (
    <>
      <AppShell>
        <Sidebar
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
        <Header
          breadcrumb={
            <>
              <BreadcrumbRoot href="" pageName="Breadcrumb">
                <Breadcrumb href="" pageName="Breadcrumb" />
              </BreadcrumbRoot>
            </>
          }
          onClick={toggleSidebar}
        >
          <HeaderProfile name="Username">
            <DropDownMenu dropDownMenu>
              <DropDownMenuTitle content="Settings" />
              <DropDownMenuItem content="Item 1" />
              <DropDownMenuItem content="Item 2" />
              <DropDownMenuItem content="Settings" typeIcon="settings" />
            </DropDownMenu>
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
            formChanged={formChanged}
            handleCancel={handleCancel}
            handleSubmit={handleSubmit}
          >
            <Layout columns="2 - Symmetric">
              <Input
                label="Input"
                placeholder="Placeholder"
                value={String(formValues["Input"])}
                onChange={(e) => {
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
                onChange={(value: string) => {
                  handleInputChange("Input Number", value);
                }}
              />
              <InputTime
                label="Input Time"
                placeholder="Placeholder"
                value={String(formValues["Input Time"])}
                onChange={(value: string) => {
                  handleInputChange("Input Time", value);
                }}
              />
              <InputSelect
                label="Input Select"
                value={String(formValues["Input Select"])}
                onChange={(value: string) => {
                  handleInputChange("Input Select", value);
                }}
                options={options}
              />
              <DataPicker
                label="Data Picker"
                placeholder="Placeholder"
                date={String(formValues["Input do DataPicker"])}
                onDateChange={(value: Date) =>
                  handleDateChange("Input do DataPicker", value)
                }
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
                onChange={(checked) => handleCheckboxChange(checked)}
                checked={
                  typeof formValues["Checkbox"] === "boolean"
                    ? formValues["Checkbox"]
                    : false
                }
              />

              <InputRadioButton
                label="Radio Button"
                onChange={(checked) => handleRadioChange(checked)}
                checked={
                  typeof formValues["Radio Button"] === "boolean"
                    ? formValues["Radio Button"]
                    : false
                }
              />
              <Switch
                label="Switch"
                onChange={(checked) => handleSwitchChange(checked)}
                checked={
                  typeof formValues["Switch"] === "boolean"
                    ? formValues["Switch"]
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
                onChange={(files: FileList | null) =>
                  handleFileChange("FileUploader", files)
                }
              />
              <ImageUploader
                title="Image Uploader"
                proportion="1/1"
                labelDropzone={"Drop your images here"}
                iconDropzone={"add_a_photo"}
                multiple={true}
                value={formValuesFile["ImageUploader"]}
                onChange={(files: FileList | null) =>
                  handleFileChange("ImageUploader", files)
                }
              />
              <TextArea
                label="Text Area"
                placeholder="Placeholder"
                value={String(formValues["Text Area"])}
                onChange={(value) => handleInputChange("Text Area", value)}
              />
            </Layout>
          </SavebarTrigger>
        </Page>
      </AppShell>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
