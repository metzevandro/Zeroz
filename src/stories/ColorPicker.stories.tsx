import type { Meta, StoryObj } from "@storybook/react";
import ColorPicker from "../app/components/ColorPicker/ColorPicker";
import Story from "@storybook/react";
import "./css/main.scss";

const meta = {
  title: "Components/Color Picker",
  component: ColorPicker,

  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof ColorPicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    value: "#FFFFFF",
    disabled: false,
  },
};

export const Disable: Story = {
  args: {
    label: "Label",
    value: "#FFFFFF",
    disabled: true,
  },
};
