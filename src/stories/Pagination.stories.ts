import type { Meta, StoryObj } from "@storybook/react";

import { Pagination } from "../app/components/Pagination/Pagination";
import Story from "@storybook/react";

const meta = {
  title: "Components/Pagination",
  component: Pagination,

  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Pagination",
    variant: "noLabel",
    disableLeft: false,
    disableRight: false,
  },
};

export const Disable: Story = {
  args: {
    label: "Pagination",
    variant: "noLabel",
    disableLeft: true,
    disableRight: true,
  },
};

export const LeftLabel: Story = {
  args: {
    label: "Pagination",
    variant: "leftLabel",
  },
};

export const centerLabel: Story = {
  args: {
    label: "Pagination",
    variant: "centerLabel",
  },
};
