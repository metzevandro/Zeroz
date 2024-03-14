import type { Meta, StoryObj } from "@storybook/react";
import "../../styles.scss";
import Loading from "./Loading";

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
    variant: "default",
    message: "Loading",
  },
};

export const Large: Story = {
  args: {
    variant: "large",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    message: "Success",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    message: "Warning",
  },
};
