import type { Meta, StoryObj } from "@storybook/react";

import RadioButton from "../app/components/RadioButton/RadioButton";

const meta = {
  title: "Components/RadioButton",
  component: RadioButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    disabled: false,
  },
};

export const Disable: Story = {
  args: {
    label: "Label",
    disabled: true,
  },
};
