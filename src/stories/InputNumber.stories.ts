import type { Meta, StoryObj } from "@storybook/react";
import "./css/main.scss";
import InputNumber from "../app/components/InputNumber/InputNumber";
import Story from "@storybook/react";

const meta = {
  title: "Components/Input Number",
  component: InputNumber,

  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof InputNumber>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    disabled: false,
    max: 10,
    min: 0,
  },
};

export const Error: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    disabled: false,
    max: 10,
    min: 0,
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
