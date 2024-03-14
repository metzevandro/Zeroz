import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import "../../styles.scss";
import InputNumber from "./InputNumber";

const meta: Meta = {
  title: "Components/Input Number",
  component: InputNumber,
  parameters: {
    layout: "padded",
  },
};

export default meta;

type Args = {
  label: string;
  placeholder: string;
  disabled: boolean;
  error: boolean;
  textError: string;
  max: number;
  min: number;
  initialValue: number;
};

const Template: StoryFn<Args> = (args) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <InputNumber
      label={args.label}
      placeholder={args.placeholder}
      max={args.max}
      min={args.min}
      value={inputValue}
      onChange={handleInputChange}
      disabled={args.disabled}
      error={args.error}
      textError={args.textError}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  placeholder: "Placeholder",
  initialValue: 0,
  max: 10,
  min: -10,
  disabled: false,
  error: false,
  textError: "Error",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: "Label",
  placeholder: "Placeholder",
  initialValue: 0,
  max: 10,
  min: -10,
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  textError: "Error",
  label: "Label",
  placeholder: "Placeholder",
  initialValue: 0,
  max: 10,
  min: -10,
};
