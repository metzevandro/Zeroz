import type { Meta, StoryObj } from "@storybook/react";

import InputNumber from "../app/components/InputNumber/InputNumber";
import Story from "@storybook/react";

const meta = {
  title: "Components/Input Number",
  component: InputNumber,

  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof InputNumber>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    disabled: false,
    max: 10,
    min: 5,
  },
};

export const Disable: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    disabled: true,
  },
};
