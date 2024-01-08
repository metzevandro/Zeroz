import type { Meta, StoryObj } from "@storybook/react";

import ImageUploader from "../app/components/ImageUploader/ImageUploader";
import Story from "@storybook/react";

const meta = {
  title: "Components/ImageUploader",
  component: ImageUploader,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof ImageUploader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Title",
    description: "Description",
    proportion: "1/1",
    disable: false,
    multiple: false,
  },
};

export const Disable: Story = {
  args: {
    title: "Title",
    description: "Description",
    proportion: "1/1",
    disable: true,
    multiple: false,
  },
};
