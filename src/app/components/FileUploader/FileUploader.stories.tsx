import type { Meta, StoryObj } from "@storybook/react";
import "../../styles.scss";
import FileUploader from "./FileUploader";
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
    disabled: false,
    maxFileSize: 1,
    onChange: (files: FileList | null) => {},
  },
};

export const Disable: Story = {
  args: {
    typeIconButton: "upload_file",
    buttonLabel: "Add file",
    title: "Upload files",
    description: "Max file size is 1mb.",
    multiple: false,
    disabled: true,
    maxFileSize: 1,
    onChange: (files: FileList | null) => {},
  },
};
