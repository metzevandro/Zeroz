import type { Meta, StoryObj } from "@storybook/react";
import Notification from "../app/components/Notification/Notification";
import Story from "@storybook/react";

const meta = {
  title: "Components/Notification",
  component: Notification,
  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof Notification>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Inline: Story = {
  args: {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "ac_unit",
    title: "Title",
    type: "inline",
    variant: "primary",
    dismissible: false,
  },
};

export const Float: Story = {
  args: {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "ac_unit",
    title: "Title",
    type: "float",
    variant: "primary",
    isOpen: true,
  },
};

export const Primary: Story = {
  args: {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "ac_unit",
    title: "Title",
    type: "inline",
    variant: "primary",
  },
};

export const Success: Story = {
  args: {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "ac_unit",
    title: "Title",
    type: "inline",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "ac_unit",
    title: "Title",
    type: "inline",
    variant: "warning",
  },
};

export const Dismissible: Story = {
  args: {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "ac_unit",
    title: "Title",
    type: "inline",
    variant: "primary",
    dismissible: true,
  },
};
