import type { Meta, StoryObj } from "@storybook/react";

import { ButtonIcon } from "../app/components/ButtonIcon/ButtonIcon";
import Story from "@storybook/react";

const meta = {
  title: "Components/ButtonIcon",
  component: ButtonIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ButtonIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Plain: Story = {
  args: {
    size: "md",
    variant: "",
    type: "plain",
    typeIcon: "check_circle",
  },
};

export const PlainOnColor: Story = {
  args: {
    size: "md",
    variant: "on-color",
    type: "plain",
    typeIcon: "check_circle",
  },
  parameters: {
    backgrounds: { value: "black" },
  },
};

export const DefaultPrimary: Story = {
  args: {
    size: "md",
    variant: "primary",
    type: "default",
    typeIcon: "check_circle",
  },
};

export const DefaultSecondary: Story = {
  args: {
    size: "md",
    variant: "secondary",
    type: "default",
    typeIcon: "check_circle",
  },
};

export const DefaultSuccess: Story = {
  args: {
    size: "md",
    variant: "success",
    type: "default",
    typeIcon: "check_circle",
  },
};

export const DefaultWarning: Story = {
  args: {
    size: "md",
    variant: "warning",
    type: "default",
    typeIcon: "check_circle",
  },
};
