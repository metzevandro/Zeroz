import type { Meta, StoryObj } from "@storybook/react";
import Badge from "../app/components/Badge/Badge";

const meta: Meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Badge",
    type: "default",
    variant: "default",
  },
};

export const Primary: Story = {
  args: {
    label: "Badge",
    type: "default",
    variant: "primary",
  },
};

export const Success: Story = {
  args: {
    label: "Badge",
    type: "default",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    label: "Badge",
    type: "default",
    variant: "warning",
  },
};
