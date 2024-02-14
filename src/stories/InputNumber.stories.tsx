import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import "./css/main.scss";
import InputNumber from "../app/components/InputNumber/InputNumber";

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
  typeIcon: string;
  error: boolean;
  textError: string;
  max: number;
  min: number;
  initialValue: number;
};

const Template: Story<Args> = (args) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <InputNumber
      label={args.label}
      placeholder={args.placeholder}
      initialValue={args.initialValue}
      max={args.max}
      min={args.min}
      value={inputValue}
      onChange={handleInputChange}
      disabled={args.disabled}
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
  initialValue: 0,
  max: 10,
  min: -10,
};
