import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import Story from "@storybook/react";
import "../../styles.scss";
import mdx from "./Button.mdx";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    page: mdx,
  },
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: "md",
    disabled: false,
    label: "Button",
    typeIcon: "",
    variant: "primary",
  },
};

export const secondary: Story = {
  args: {
    size: "md",
    disabled: false,
    label: "Button",
    typeIcon: "",
    variant: "secondary",
  },
};

export const success: Story = {
  args: {
    size: "md",
    disabled: false,
    label: "Button",
    typeIcon: "",
    variant: "success",
  },
};

export const warning: Story = {
  args: {
    size: "md",
    disabled: false,
    label: "Button",
    typeIcon: "",
    variant: "warning",
  },
};

export const with_Icon: Story = {
  args: {
    size: "md",
    disabled: false,
    label: "Button",
    typeIcon: "ac_unit",
    variant: "primary",
  },
};

export const disable: Story = {
  args: {
    size: "md",
    disabled: true,
    label: "Button",
    typeIcon: "ac_unit",
    variant: "primary",
  },
};
