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
    typeIconButton: "upload_file",
    buttonLabel: "Add file",
    title: "Upload files",
    description: "Max file size is 1mb.",
    multiple: false,
    disable: false,
    maxFileSize: 1,
  },
};

export const Disable: Story = {
  args: {
    typeIconButton: "upload_file",
    buttonLabel: "Add file",
    title: "Upload files",
    description: "Max file size is 1mb.",
    multiple: false,
    disable: true,
    maxFileSize: 1,
  },
};
