import type { Meta, StoryObj } from "@storybook/react";
import InputSelect from "./InputSelect";
import "../../styles.scss";

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
    label: "Label",
    options: options,
    error: false,
    errorMessage: "",
    disabled: false,
    onChange: (value: string) => {},
  },
};

export const Error: Story = {
  args: {
    label: "Label",
    options: options,
    disabled: false,
    error: true,
    errorMessage: "Error",
    onChange: (value: string) => {},
  },
};

export const Disable: Story = {
  args: {
    label: "Label",
    options: options,
    disabled: true,
    error: false,
    onChange: (value: string) => {},
  },
};
