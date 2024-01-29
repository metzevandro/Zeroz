import type { Meta, StoryObj } from "@storybook/react";
import "./css/main.scss";
import FileUploader from "../app/components/FileUploader/FileUploader";
import Story from "@storybook/react";

const meta = {
  title: "Components/File Uploader",
  component: FileUploader,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof FileUploader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Title",
    description: "Description",
    multiple: false,
    disable: false,
  },
};

export const Disable: Story = {
  args: {
    title: "Title",
    description: "Description",
    multiple: false,
    disable: true,
  },
};
