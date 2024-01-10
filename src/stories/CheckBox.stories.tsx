import React, { useState } from "react";
import type { Meta, Story } from "@storybook/react";
import { Checkbox } from "../app/components/Checkbox/Checkbox";

const meta: Meta = {
  title: "Components/Checkbox",
  component: Checkbox,
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

const Template: Story<DefaultProps> = (props) => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckBoxChange = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <>
      <Checkbox
        onChange={handleCheckBoxChange}
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

type DisabledCheckBoxProps = {
  label: string;
  disabled: boolean;
};

const DisabledCheckBoxTemplate: Story<DisabledCheckBoxProps> = (props) => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckBoxChange = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <>
      <Checkbox
        onChange={handleCheckBoxChange}
        checked={isChecked}
        label={props.label}
        disabled={props.disabled}
      />
    </>
  );
};

export const Disabled = DisabledCheckBoxTemplate.bind({});
Disabled.args = {
  label: "Label",
  disabled: true,
};
