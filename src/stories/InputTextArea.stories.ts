import type { Meta, StoryObj } from "@storybook/react";

import TextArea from "../app/components/InputTextArea/InputTextArea";

const meta = {
  title: "Components/Input TextArea",
  component: TextArea,

  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    disabled: false,
    error: false,
    errorText: "Error",
  },
};

export const Disable: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    disabled: true,
  },
};

export const withError: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    error: true,
    errorText: "Error",
  },
};
