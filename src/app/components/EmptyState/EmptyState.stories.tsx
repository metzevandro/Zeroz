import type { Meta, StoryObj } from "@storybook/react";
import "../../styles.scss";
import EmptyState from "./EmptyState";
import Story from "@storybook/react";

import mdx from "./EmptyState.mdx";

const meta = {
  title: "Templates/Empty State",
  component: EmptyState,
  parameters: {
    layout: "padded",
    page: mdx,
  },
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
