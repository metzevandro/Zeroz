import type { Meta, StoryObj } from "@storybook/react";

import DescriptionList from "../app/components/DescriptionList/DescriptionList";
import Story from "@storybook/react";

const meta = {
  title: "Components/DescriptionList",
  component: DescriptionList,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof DescriptionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Title",
    description: "Description",
    direction: "row",
  },
};
