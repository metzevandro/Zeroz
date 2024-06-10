import type { Meta, StoryObj } from "@storybook/react";
import Skeleton from "./Skeleton";
import Story from "@storybook/react";
import "../../styles.scss";
import mdx from "./Skeleton.mdx";

const meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
    page: mdx,
  },
} as Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: "150",
    height: "150",
  },
};