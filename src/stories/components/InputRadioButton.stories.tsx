import type { Meta, StoryObj } from "@storybook/react";
import "../../styles.scss";
import InputRadioButton from "../../components/InputRadioButton/InputRadioButton";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
import React from "react";

const meta: Meta<typeof InputRadioButton> = {
  title: "Components/Input Radio Button",
  component: InputRadioButton,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong>Radio Buttons</strong> when you need to make a single
            selection from a list of options.
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
    label: {
      control: "text",
      description: "The text label displayed next to the radio button.",
      table: {
        category: "Appearance",
      },
    },
    disabled: {
      control: "boolean",
      description:
        "If true, the radio button will be disabled and unselectable.",
      table: {
        category: "State",
      },
    },
    checked: {
      control: "boolean",
      description: "If true, the radio button will be checked.",
      table: {
        category: "State",
      },
    },
    onChange: {
      action: "onChange",
      description:
        "Callback function that is called when the radio button value changes.",
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
    disabled: false,
    checked: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Label",
    disabled: true,
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    label: "Label",
    disabled: false,
    checked: true,
  },
};
