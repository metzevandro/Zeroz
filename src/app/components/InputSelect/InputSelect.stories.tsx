import type { Meta, StoryObj } from "@storybook/react";
import InputSelect from "./InputSelect";
import "../../styles.scss";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";

const meta: Meta<typeof InputSelect> = {
  title: "Components/Input Select",
  component: InputSelect,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong>Input Select </strong> allows users to choose one option
            from a list of values.
          </p>
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "The text label displayed above the select input field.",
      table: {
        category: "Appearance",
      },
    },
    options: {
      control: "object",
      description:
        "An array of options to be displayed in the select dropdown. Each option should be a string.",
      table: {
        category: "Options",
      },
    },
    value: {
      control: "text",
      description:
        "The currently selected value from the options. It should match one of the values in the options array.",
      table: {
        category: "Value",
      },
    },
    error: {
      control: "boolean",
      description:
        "If true, the select input field will be styled to indicate an error state.",
      table: {
        category: "State",
      },
    },
    errorMessage: {
      control: "text",
      description:
        "The error message text displayed below the select input field when in an error state.",
      table: {
        category: "Text",
      },
    },
    disabled: {
      control: "boolean",
      description:
        "If true, the select input field will be disabled and unselectable.",
      table: {
        category: "State",
      },
    },
    onChange: {
      action: "onChange",
      description:
        "Callback function that is called when the selected value changes.",
      table: {
        category: "Events",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const options = ["Option 1", "Option 2", "Option 3"];

export const Default: Story = {
  args: {
    label: "Label",
    options: options,
    value: options[0],
    error: false,
    errorMessage: "",
    disabled: false,
    onChange: (value: string) => {},
  },
};

export const Error: Story = {
  args: {
    label: "Label",
    options: options,
    value: options[0],
    error: true,
    errorMessage: "Error",
    disabled: false,
    onChange: (value: string) => {},
  },
};

export const Disabled: Story = {
  args: {
    label: "Label",
    options: options,
    value: options[0],
    disabled: true,
    error: false,
    onChange: (value: string) => {},
  },
};
