import type { Meta, StoryObj } from "@storybook/react";
import Button from "../app/components/Button/Button";
import Story from "@storybook/react";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: "md",
    disable: false,
    label: "Button",
    typeIcon: "",
    variant: "primary",
  },
};

export const secondary: Story = {
  args: {
    size: "md",
    disable: false,
    label: "Button",
    typeIcon: "",
    variant: "secondary",
  },
};

export const success: Story = {
  args: {
    size: "md",
    disable: false,
    label: "Button",
    typeIcon: "",
    variant: "success",
  },
};

export const warning: Story = {
  args: {
    size: "md",
    disable: false,
    label: "Button",
    typeIcon: "",
    variant: "warning",
  },
};

export const with_Icon: Story = {
  args: {
    size: "md",
    disable: false,
    label: "Button",
    typeIcon: "ac_unit",
    variant: "primary",
  },
};

export const disable: Story = {
  args: {
    size: "md",
    disable: true,
    label: "Button",
    typeIcon: "ac_unit",
    variant: "primary",
  },
};
