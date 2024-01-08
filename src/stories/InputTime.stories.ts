import type { Meta, StoryObj } from "@storybook/react";

import InputTime from "../app/components/InputTime/InputTime";

const meta = {
  title: "Components/InputTimer",
  component: InputTime,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {},
} satisfies Meta<typeof InputTime>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "placeholder",
    disabled: false,
  },
};

export const Disable: Story = {
  args: {
    label: "Label",
    placeholder: "placeholder",
    disabled: true,
  },
};
