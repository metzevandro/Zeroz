import type { Meta, StoryObj } from "@storybook/react";
import "../../styles.scss";
import Progress from "./Progress";
import Story from "@storybook/react";

const meta = {
  title: "Components/Progress",
  component: Progress,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 0,
    indeterminate: false,
    error: false,
  },
};

export const Loading: Story = {
  args: {
    value: 50,
  },
};

export const Success: Story = {
  args: {
    value: 100,
  },
};

export const Indeterminate: Story = {
  args: {
    value: 0,
    indeterminate: true,
  },
};

export const Error: Story = {
  args: {
    value: 90,
    error: true,
  },
};
