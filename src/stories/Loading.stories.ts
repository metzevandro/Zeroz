import type { Meta, StoryObj } from "@storybook/react";

import Loading from "../app/components/Loading/Loading";

const meta = {
  title: "Components/Loading",
  component: Loading,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "icon-small",
    message: "",
  },
};

export const Large: Story = {
  args: {
    variant: "icon-large",
  },
};

export const Success: Story = {
  args: {
    variant: "icon-success",
    message: "Success",
  },
};

export const Warning: Story = {
  args: {
    variant: "icon-warning",
    message: "Warning",
  },
};
