import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../app/components/Avatar/Avatar";

const meta: Meta = {
  title: "Components/Avatar",
  component: Avatar,
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
    size: "md",
  },
};

export const withImage: Story = {
  args: {
    size: "md",
    src: `https://placehold.co/40x40`,
  },
};
