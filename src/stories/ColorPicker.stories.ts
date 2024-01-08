import type { Meta, StoryObj } from "@storybook/react";

import ColorPicker from "../app/components/ColorPicker/ColorPicker";
import Story from "@storybook/react";

const meta = {
  title: "Components/ColorPicker",
  component: ColorPicker,
  parameters: {
    layout: "padded",
  },
  argTypes: {},
} satisfies Meta<typeof ColorPicker>;

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
