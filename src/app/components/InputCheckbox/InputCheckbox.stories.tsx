import React, { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import InputCheckbox from "./InputCheckbox";
import "../../styles.scss";

const meta: Meta = {
  title: "Components/Input Checkbox",
  component: InputCheckbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type DefaultProps = {
  label: string;
  disabled: boolean;
  indeterminate: boolean;
};

const Template: StoryFn<DefaultProps> = (props) => {
  const [isChecked, setChecked] = useState(false);

  const handleInputCheckboxChange = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <>
      <InputCheckbox
        onChange={handleInputCheckboxChange}
        checked={isChecked}
        label={props.label}
        disabled={props.disabled}
        indeterminate={props.indeterminate}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  disabled: false,
  indeterminate: false,
};

type DisabledInputCheckboxProps = {
  label: string;
  disabled: boolean;
};

const DisabledInputCheckboxTemplate: StoryFn<DisabledInputCheckboxProps> = (
  props
) => {
  const [isChecked, setChecked] = useState(false);

  const handleInputCheckboxChange = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <>
      <InputCheckbox
        onChange={handleInputCheckboxChange}
        checked={isChecked}
        label={props.label}
        disabled={props.disabled}
      />
    </>
  );
};

export const Disabled = DisabledInputCheckboxTemplate.bind({});
Disabled.args = {
  label: "Label",
  disabled: true,
};
