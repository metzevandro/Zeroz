import React, { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import InputCheckbox from "../components/InputCheckbox/InputCheckbox";
import "../styles.scss";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";

const meta: Meta = {
  title: "Components/Input Checkbox",
  component: InputCheckbox,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong>Checkboxes</strong> are used when there are multiple
            items to select in a list or when users need to show they agree to
            specific terms or services.{" "}
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
    modelValue: {
      control: "text",
      description:
        "The bound value of the checkbox, used for two-way data binding.",
      table: {
        category: "Value",
      },
    },
    value: {
      control: "text",
      description:
        "The current value of the checkbox. Typically a boolean indicating whether it is checked.",
      table: {
        category: "Value",
      },
    },
    label: {
      control: "text",
      description: "The text label displayed next to the checkbox.",
      table: {
        category: "Appearance",
      },
    },
    id: {
      control: "text",
      description: "The unique identifier for the checkbox input element.",
      table: {
        category: "Attributes",
      },
    },
    name: {
      control: "text",
      description:
        "The name attribute for the checkbox input element, used to identify the checkbox in form submissions.",
      table: {
        category: "Attributes",
      },
    },
    required: {
      control: "boolean",
      description:
        "Specifies whether the checkbox must be checked before submitting the form.",
      table: {
        category: "Validation",
      },
    },
    indeterminate: {
      control: "boolean",
      description:
        'If true, the checkbox will be in an indeterminate state, often used to indicate a "partially selected" state in a list.',
      table: {
        category: "State",
      },
    },
    noEvents: {
      control: "boolean",
      description: "When true, the checkbox will not trigger any events.",
      table: {
        category: "Behavior",
      },
    },
    disabled: {
      control: "boolean",
      description: "If true, the checkbox will be disabled and unclickable.",
      table: {
        category: "State",
      },
    },
    onUpdate: {
      action: "onUpdate",
      description:
        "Callback function that is called when the checkbox value changes.",
      table: {
        category: "Events",
      },
    },
  },
};

export default meta;

interface CheckboxProps {
  modelValue?: any;
  value?: any;
  label?: string;
  id?: string;
  name?: string;
  required?: boolean;
  indeterminate?: boolean;
  noEvents?: boolean;
  disabled?: boolean;
  onUpdate?: (val: any) => void;
}

const Template: StoryFn<CheckboxProps> = (props) => {
  const [isChecked, setChecked] = useState(false);

  const handleInputCheckboxChange = () => {
    setChecked((prevChecked) => !prevChecked);
    if (props.onUpdate) {
      props.onUpdate(!isChecked);
    }
  };

  return (
    <InputCheckbox
      {...props}
      value={isChecked}
      onUpdate={handleInputCheckboxChange}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  disabled: false,
  indeterminate: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Label",
  disabled: true,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  label: "Label",
  indeterminate: true,
};

export const NoEvents = Template.bind({});
NoEvents.args = {
  label: "Label",
  noEvents: true,
};
