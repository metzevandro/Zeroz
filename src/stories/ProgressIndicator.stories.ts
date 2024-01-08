import type { Meta, StoryObj } from "@storybook/react";

import ProgressIndicator from "../app/components/ProgressIndicator/ProgressIndicator";
import Story from "@storybook/react";

const meta = {
  title: "Components/ProgressIndicator",
  component: ProgressIndicator,

  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof ProgressIndicator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    direction: "row",
    description: "Optional text",
    state: "default",
    step: "Step",
  },
};

export const Current: Story = {
  args: {
    direction: "row",
    description: "Optional text",
    state: "current",
    step: "Step",
  },
};

export const Completed: Story = {
  args: {
    direction: "row",
    description: "Optional text",
    state: "completed",
    step: "Step",
  },
};

export const Error: Story = {
  args: {
    direction: "row",
    description: "Optional text",
    state: "error",
    step: "Step",
  },
};

export const Disable: Story = {
  args: {
    direction: "row",
    description: "Optional text",
    state: "disable",
    step: "Step",
  },
};
