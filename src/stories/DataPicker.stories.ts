import type { Meta, StoryObj } from "@storybook/react";
import "./css/main.scss";
import DataPicker from "../app/components/DataPicker/DataPicker";
import Story from "@storybook/react";

const meta = {
  title: "Components/Data Picker",
  component: DataPicker,
  parameters: {
    layout: "padded",
  },
  argTypes: {},
} satisfies Meta<typeof DataPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    disabled: false,
  },
};

export const Disable: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    disabled: true,
  },
};
