import React, { useState } from "react";
import "../../styles.scss";
import InputNumber from "./InputNumber";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
var meta = {
  title: "Components/Input Number",
  component: InputNumber,
  parameters: {
    layout: "padded",
    docs: {
      page: function () {
        return (
          <>
            <Title />
            <Subtitle>Component</Subtitle>
            <p>
              The <strong>Number Input</strong> lets users type numbers and
              increase or decrease using icon buttons.{" "}
            </p>
            <Primary />
            <Controls />
            <Stories />
          </>
        );
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "The text label displayed above the input number field.",
      table: {
        category: "Text",
      },
    },
    placeholder: {
      control: "text",
      description:
        "The placeholder text displayed inside the input number field when it is empty.",
      table: {
        category: "Text",
      },
    },
    disabled: {
      control: "boolean",
      description:
        "If true, the input number field will be disabled and unclickable.",
      table: {
        category: "State",
      },
    },
    error: {
      control: "boolean",
      description:
        "If true, the input number field will be styled to indicate an error state.",
      table: {
        category: "State",
      },
    },
    textError: {
      control: "text",
      description:
        "The error message text displayed below the input number field when in an error state.",
      table: {
        category: "Text",
      },
    },
    max: {
      control: "number",
      description: "The maximum value allowed for the input number field.",
      table: {
        category: "Validation",
      },
    },
    min: {
      control: "number",
      description: "The minimum value allowed for the input number field.",
      table: {
        category: "Validation",
      },
    },
    initialValue: {
      control: "number",
      description: "The initial value set for the input number field.",
      table: {
        category: "Value",
      },
    },
  },
};
export default meta;
var Template = function (args) {
  var _a = useState(args.initialValue.toString()),
    inputValue = _a[0],
    setInputValue = _a[1];
  var handleInputChange = function (value) {
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
export var Default = Template.bind({});
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
export var Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: "Label",
  placeholder: "Placeholder",
  initialValue: 0,
  max: 10,
  min: -10,
};
export var Error = Template.bind({});
Error.args = {
  error: true,
  textError: "Error",
  label: "Label",
  placeholder: "Placeholder",
  initialValue: 0,
  max: 10,
  min: -10,
};
