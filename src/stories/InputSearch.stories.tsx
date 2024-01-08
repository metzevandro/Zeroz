import type { Meta, StoryObj } from "@storybook/react";
import InputSearch from "../app/components/InputSearch/InputSearch";

const meta = {
  title: "Components/InputSearch",
  component: InputSearch,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {},
} satisfies Meta<typeof InputSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
  },
};

export const Disable: Story = {
  args: {
    disabled: true,
  },
};
