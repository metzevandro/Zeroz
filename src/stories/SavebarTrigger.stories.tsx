import React, { useEffect, useState } from "react";
import type { Meta, Story } from "@storybook/react";
import "./css/main.scss";
import SavebarTrigger from "../app/components/SavebarTrigger/SavebarTrigger";
import Input from "../app/components/Input/Input";
import AppShell from "../app/components/AppShell/AppShell";
import Sidebar, {
  SidebarItem,
  SidebarList,
} from "../app/components/Sidebar/Sidebar";
import Header, { HeaderProfile } from "../app/components/Header/Header";
import BreadcrumbRoot, {
  Breadcrumb,
} from "../app/components/Breadcrumb/Breadcrumb";
import DropDownMenu, {
  DropDownMenuItem,
  DropDownMenuTitle,
} from "../app/components/DropdownMenu/DropdownMenu";
import Page from "../app/components/Page/Page";
import InputNumber from "../app/components/InputNumber/InputNumber";
import Layout from "../app/components/Layout/Layout";
import DataPicker from "../app/components/DataPicker/DataPicker";
import InputSelect from "../app/components/InputSelect/InputSelect";
import FileUploader from "../app/components/FileUploader/FileUploader";
import ImageUploader from "../app/components/ImageUploader/ImageUploader";
import InputCheckbox from "../app/components/InputCheckbox/InputCheckbox";
import InputRadioButton from "../app/components/InputRadioButton/InputRadioButton";
import ColorPicker from "../app/components/ColorPicker/ColorPicker";
import Slider from "../app/components/Slider/Slider";
import Switch from "../app/components/Switch/Switch";
import InputTime from "../app/components/InputTime/InputTime";
import TextArea from "../app/components/InputTextArea/InputTextArea";

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

const Template: Story<DefaultProps> = (args) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const [formValues, setFormValues] = useState<FormValuesType>({
    Input: "",
    "Input Select": "Option 1",
    "Input Number": "0",
    ImageUploader: null,
    FileUploader: null,
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
    value: string | boolean | number
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
      Checkbox: checked,
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
      (key) => initialValues[key] !== formValues[key]
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
          <SidebarList title="Sidebar">
            <SidebarItem
              icon="settings"
              fillIcon={true}
              active={true}
              title="Page Name"
            />
          </SidebarList>
        </Sidebar>
        <Header
          breadcrumb={
            <>
              <BreadcrumbRoot pageName="Breadcrumb">
                <Breadcrumb pageName="Breadcrumb" />
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
          columnLayout="1"
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
              <ColorPicker
                label="Color Picker"
                value={String(formValues.ColorPicker)}
                onChange={handleColorChange}
              />
              <DataPicker
                label="Data Picker"
                placeholder="Placeholder"
                date={String(formValues["Input do DataPicker"])}
                onDateChange={(value: Date) =>
                  handleDateChange("Input do DataPicker", value)
                }
              />
              <InputCheckbox
                label="Checkbox"
                onChange={(checked) => handleCheckboxChange(checked)}
                checked={formValues["Checkbox"]}
              />

              <InputRadioButton
                label="Radio Button"
                onChange={(checked) => handleRadioChange(checked)}
                checked={formValues["Radio Button"]}
              />
              <Switch
                label="Switch"
                onChange={(checked) => handleSwitchChange(checked)}
                checked={formValues["Switch"]}
              />
              <Slider
                value={String(formValues.Slider)}
                max={10}
                min={0}
                step={1}
                label="Slider"
                onChange={handleSliderChange}
              />
              <TextArea
                label="Text Area"
                placeholder="Placeholder"
                value={String(formValues["Text Area"])}
                onChange={(value) => handleInputChange("Text Area", value)}
              />
              <ImageUploader
                title="Image Uploader"
                proportion="1/1"
                labelDropzone={"Drop your images here"}
                iconDropzone={"add_a_photo"}
                multiple={true}
                value={formValues["ImageUploader"]}
                onChange={(files: FileList | null) =>
                  handleFileChange("ImageUploader", files)
                }
              />
              <FileUploader
                buttonLabel="Add File"
                title="File Uploader"
                typeIconButton="upload_file"
                maxFileSize={10}
                multiple={true}
                value={formValues["FileUploader"]}
                onChange={(files: FileList | null) =>
                  handleFileChange("FileUploader", files)
                }
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
