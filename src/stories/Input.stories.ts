import type { Meta, StoryObj } from "@storybook/react";
import "./css/main.scss";
import Input from "../app/components/Input/Input";
import Story from "@storybook/react";

const meta = {
  title: "Components/Input",
  component: Input,

  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    disabled: false,
    typeIcon: "",
    error: false,
    textError: "Error",
  },
};

export const Error: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    disabled: false,
    typeIcon: "",
    error: true,
    textError: "Error",
  },
};

export const Disable: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    disabled: true,
  },
};
