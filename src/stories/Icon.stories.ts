import type { Meta, StoryObj } from "@storybook/react";

import Icon from "../app/components/Icon/Icon";
import Story from "@storybook/react";

const meta = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "settings",
    fill: 0,
    size: "md",
  },
};
