import type { Meta, StoryObj } from "@storybook/react";
import Notification from "./Notification";
import Story from "@storybook/react";
import "../../styles.scss";

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
    buttonLabel: "Button",
    disableButton: false,
    withAction: true,
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
    dismissible: false,
    buttonLabel: "Button",
    disableButton: false,
    withAction: false,
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
    dismissible: false,
    buttonLabel: "Button",
    disableButton: false,
    withAction: false,
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
    dismissible: false,
    buttonLabel: "Button",
    disableButton: false,
    withAction: false,
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
    dismissible: false,
    buttonLabel: "Button",
    disableButton: false,
    withAction: false,
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
    buttonLabel: "Button",
    disableButton: false,
    withAction: false,
  },
};
