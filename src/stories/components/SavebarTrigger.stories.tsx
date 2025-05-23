import React, { useEffect, useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";

import "../../styles.scss";

import SavebarTrigger from "../../components/SavebarTrigger/SavebarTrigger";
import Input from "../../components/Input/Input";
import AppShell from "../../components/AppShell/AppShell";
import Sidebar, {
  SidebarItem,
  SidebarTitle,
} from "../../components/Sidebar/Sidebar";
import Header, { HeaderProfile } from "../../components/Header/Header";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";
import Dropdown, {
  DropdownItem,
  DropdownTitle,
} from "../../components/Dropdown/Dropdown";
import Page from "../../components/Page/Page";
import InputNumber from "../../components/InputNumber/InputNumber";
import Layout from "../../components/Layout/Layout";
import DataPicker from "../../components/DataPicker/DataPicker";
import InputSelect from "../../components/InputSelect/InputSelect";
import FileUploader from "../../components/FileUploader/FileUploader";
import ImageUploader from "../../components/ImageUploader/ImageUploader";
import InputCheckbox from "../../components/InputCheckbox/InputCheckbox";
import InputRadioButton from "../../components/InputRadioButton/InputRadioButton";
import Slider from "../../components/Slider/Slider";
import Switch from "../../components/Switch/Switch";
import InputTime from "../../components/InputTime/InputTime";
import TextArea from "../../components/InputTextArea/InputTextArea";

const meta: Meta = {
  title: "Templates/Savebar Trigger",
  component: SavebarTrigger,
  parameters: {
    layout: "fullscreen",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Template</Subtitle>
          <p>
            The <strong>SavebarTrigger</strong> template is designed to monitor
            changes to inputs within its scope. This template serves as a
            proactive observer, ensuring timely detection and response to
            changes made, facilitating ongoing management of data updates, and
            associated save or cancel processes.
          </p>
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
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

  const handleDateChange = (name: string, newDate: string) => {
    const formattedDate = newDate;
    setFormValues({
      ...formValues,
      [name]: formattedDate,
    });
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
                value={
                  formValues["Input do DataPicker"]
                    ? String(formValues["Input do DataPicker"])
                    : ""
                }
                onChange={(newDate: string) =>
                  handleDateChange("Input do DataPicker", newDate)
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
                onUpdate={(checked) => handleCheckboxChange(checked)}
                modelValue={formValues["Checkbox"] ?? false}
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
                onUpdate={(checked) => handleSwitchChange(checked)}
                modelValue={formValues["Switch"] ?? false}
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
