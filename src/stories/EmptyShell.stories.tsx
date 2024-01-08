import type { Meta, StoryObj } from "@storybook/react";

import EmptyState from "../app/components/EmptyState/EmptyState";
import Story from "@storybook/react";

const meta = {
  title: "Templates/EmptyState",
  component: EmptyState,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Title",
    description: "Description",
    icon: "ac_unit",
    buttonContentPrimary: "Button",
    buttonContentSecondary: "Button",
  },
};
