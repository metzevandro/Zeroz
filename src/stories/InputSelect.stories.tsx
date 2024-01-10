import type { Meta, StoryObj } from "@storybook/react";
import InputSelect from "../app/components/InputSelect/InputSelect";

const meta = {
  title: "Components/Input Select",
  component: InputSelect,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {},
} satisfies Meta<typeof InputSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = ["Option 1", "Option 2", "Option 3"];

export const Default: Story = {
  args: {
    placeholder: "Placeholder",
    label: "Label",
    options: options,
    error: false,
    errorMessage: "",
    disabled: false,
  },
};

export const Disable: Story = {
  args: {
    placeholder: "Placeholder",
    label: "Label",
    options: options,
    disabled: true,
    error: false,
  },
};
