import type { Meta, StoryObj } from "@storybook/react";
import "../../styles.scss";
import TextArea from "./InputTextArea";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";

const meta: Meta<typeof TextArea> = {
  title: "Components/Input TextArea",
  component: TextArea,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong>Text Area</strong> input allows users to write and edit
            multiple lines of text, making it suitable for entering longer
            messages or detailed information
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
      description: "The text label displayed above the textarea.",
      table: {
        category: "Appearance",
      },
    },
    placeholder: {
      control: "text",
      description:
        "The placeholder text displayed inside the textarea when it is empty.",
      table: {
        category: "Appearance",
      },
    },
    value: {
      control: "text",
      description: "The current value of the textarea.",
      table: {
        category: "Value",
      },
    },
    disabled: {
      control: "boolean",
      description: "If true, the textarea will be disabled and uneditable.",
      table: {
        category: "State",
      },
    },
    error: {
      control: "boolean",
      description:
        "If true, the textarea will be styled to indicate an error state.",
      table: {
        category: "State",
      },
    },
    errorText: {
      control: "text",
      description:
        "The error message text displayed below the textarea when in an error state.",
      table: {
        category: "Text",
      },
    },
    onChange: {
      action: "onChange",
      description:
        "Callback function that is called when the value of the textarea changes.",
      table: {
        category: "Events",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    disabled: false,
    error: false,
    errorText: "Error",
  },
};

export const Disabled: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    disabled: true,
    error: false,
  },
};

export const Error: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    error: true,
    errorText: "Error",
    disabled: false,
  },
};
