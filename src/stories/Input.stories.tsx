import type { Meta, Story } from "@storybook/react";
import "./css/main.scss";
import Input from "../app/components/Input/Input";
import { ChangeEvent, useState } from "react";

const meta: Meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "padded",
  },
};

export default meta;

type Args = {
  label: string;
  placeholder: string;
  disabled: boolean;
  typeIcon: string;
  error: boolean;
  textError: string;
  readOnly: boolean;
  fillIcon: boolean;
  value: string;
};

const Template: Story<Args> = (args) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent) => {
    setInputValue(event.target.value);
  };

  return (
    <Input
      value={inputValue || args.value}
      onChange={handleInputChange}
      label={args.label}
      placeholder={args.placeholder}
      disabled={args.disabled}
      typeIcon={args.typeIcon}
      error={args.error}
      textError={args.textError}
      readOnly={args.readOnly}
      fillIcon={args.fillIcon}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  placeholder: "Placeholder",
  typeIcon: "settings",
  fillIcon: true,
  disabled: false,
  error: false,
  textError: "Error",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: "Label",
  placeholder: "Placeholder",
  typeIcon: "settings",
  fillIcon: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  label: "Label",
  placeholder: "Placeholder",
  readOnly: true,
  value: "This is read only, you can't type more.",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Label",
  placeholder: "Placeholder",
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  label: "Label",
  placeholder: "Placeholder",
  error: true,
  textError: "Error",
};
