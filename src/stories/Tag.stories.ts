import type { Meta, StoryObj } from "@storybook/react";
import "./css/main.scss";
import Tag from "../app/components/Tag/Tag";

const meta = {
  title: "Components/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    content: "Tag",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    content: "Tag",
    variant: "secondary",
  },
};

export const Success: Story = {
  args: {
    content: "Tag",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    content: "Tag",
    variant: "warning",
  },
};
