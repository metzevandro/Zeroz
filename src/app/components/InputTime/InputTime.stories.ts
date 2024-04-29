import type { Meta, StoryObj } from "@storybook/react";
import "../../styles.scss";
import InputTime from "./InputTime";

const meta = {
  title: "Components/Input Time",
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
    onChange(value) {},
    label: "Label",
    placeholder: "Placeholder",
    error: false,
    textError: "Error",
    disabled: false,
  },
};

export const Error: Story = {
  args: {
    onChange(value) {},
    label: "Label",
    placeholder: "Placeholder",
    error: true,
    textError: "Error",
    disabled: false,
  },
};

export const Disable: Story = {
  args: {
    onChange(value) {},
    label: "Label",
    placeholder: "Placeholder",
    disabled: true,
  },
};
