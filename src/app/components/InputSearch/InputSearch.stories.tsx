import type { Meta, StoryObj } from "@storybook/react";
import InputSearch from "./InputSearch";
import "../../styles.scss";

const meta = {
  title: "Components/Input Search",
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
    placeholder: "Search",
    disabled: false,
  },
};

export const Disable: Story = {
  args: {
    placeholder: "Search",
    disabled: true,
  },
};
