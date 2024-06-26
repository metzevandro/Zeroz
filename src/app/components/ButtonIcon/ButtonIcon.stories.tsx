import type { Meta, StoryObj } from "@storybook/react";
import ButtonIcon from "./ButtonIcon";
import Story from "@storybook/react";
import "../../styles.scss";

const meta = {
  title: "Components/Button Icon",
  component: ButtonIcon,
  parameters: {
    layout: "centered",
  },
  args: {
    disable: false,
  },
} satisfies Meta<typeof ButtonIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: "md",
    variant: "primary",
    type: "default",
    typeIcon: "check_circle",
  },
};

export const Secondary: Story = {
  args: {
    size: "md",
    variant: "secondary",
    type: "default",
    typeIcon: "check_circle",
  },
};

export const Success: Story = {
  args: {
    size: "md",
    variant: "success",
    type: "default",
    typeIcon: "check_circle",
  },
};

export const Warning: Story = {
  args: {
    size: "md",
    variant: "warning",
    type: "default",
    typeIcon: "check_circle",
  },
};

export const Plain: Story = {
  args: {
    size: "md",
    variant: "primary",
    type: "plain",
    typeIcon: "check_circle",
  },
};

export const OnColor: Story = {
  args: {
    size: "md",
    variant: "on-color",
    type: "plain",
    typeIcon: "check_circle",
  },
};

export const Skeleton: Story = {
  args: {
    size: "md",
    variant: "on-color",
    type: "plain",
    typeIcon: "check_circle",
    skeleton: true,
  },
};
