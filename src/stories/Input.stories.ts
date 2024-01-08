import type { Meta, StoryObj } from "@storybook/react";

import Input from "../app/components/Input/Input";
import Story from "@storybook/react";

const meta = {
  title: "Components/Input",
  component: Input,

  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    disabled: false,
    typeIcon: "",
    error: false,
  },
};

export const Disable: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    disabled: true,
  },
};
