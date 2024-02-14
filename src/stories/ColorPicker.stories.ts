import type { Meta, StoryObj } from "@storybook/react";
import "./css/main.scss";
import ColorPicker from "../app/components/ColorPicker/ColorPicker";
import Story from "@storybook/react";

const meta = {
  title: "Components/Color Picker",
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
    value: "#FFFFFF",
  },
};

export const Disable: Story = {
  args: {
    label: "Label",
    disabled: true,
    value: "#FFFFFF",
  },
};
