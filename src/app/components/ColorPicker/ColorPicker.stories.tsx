import type { Meta, StoryObj } from "@storybook/react";
import ColorPicker from "./ColorPicker";
import Story from "@storybook/react";
import "../../styles.scss";
import mdx from "./ColorPicker.mdx";

const meta = {
  title: "Components/Color Picker",
  component: ColorPicker,
  parameters: {
    layout: "padded",
    page: mdx,
  },
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
