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
};

const Template: Story<Args> = (args) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent) => {
    setInputValue(event.target.value);
  };

  return (
    <Input
      value={inputValue}
      onChange={handleInputChange}
      label={args.label}
      placeholder={args.placeholder}
      disabled={args.disabled}
      typeIcon={args.typeIcon}
      error={args.error}
      textError={args.textError}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  placeholder: "Placeholder",
  disabled: false,
  typeIcon: "",
  error: false,
  textError: "Error",
};
