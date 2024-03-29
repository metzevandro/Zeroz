import type { Meta, StoryObj } from "@storybook/react";
import "../../styles.scss";
import InputRadioButton from "./InputRadioButton";

const meta = {
  title: "Components/Input Radio Button",
  component: InputRadioButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof InputRadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    disabled: false,
  },
};

export const Disable: Story = {
  args: {
    label: "Label",
    disabled: true,
  },
};
