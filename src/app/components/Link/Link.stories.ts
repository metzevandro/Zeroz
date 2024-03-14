import type { Meta, StoryObj } from "@storybook/react";
import "../../styles.scss";
import Link from "./Link";

const meta = {
  title: "Components/Link",
  component: Link,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: "Link",
    target: "_blank",
    href: "https://example.com",
    disabled: false,
  },
};

export const Disable: Story = {
  args: {
    content: "Link",
    target: "_blank",
    href: "https://example.com",
    disabled: true,
  },
};
