import type { Meta, StoryObj } from "@storybook/react";
import "../../styles.scss";
import ImageUploader from "./ImageUploader";
import Story from "@storybook/react";

const meta = {
  title: "Components/Image Uploader",
  component: ImageUploader,
  parameters: {
    layout: "padded",
  },
} as Meta<typeof ImageUploader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconDropzone: "file_upload",
    labelDropzone: "Select an image",
    title: "Title",
    description: "Description",
    proportion: "1/1",
    disable: false,
    multiple: false,
  },
};

export const Multiple: Story = {
  args: {
    iconDropzone: "file_upload",
    labelDropzone: "Select an image",
    title: "Title",
    description: "Description",
    proportion: "1/1",
    disable: false,
    multiple: true,
  },
};

export const Disable: Story = {
  args: {
    iconDropzone: "file_upload",
    labelDropzone: "Select an image",
    title: "Title",
    description: "Description",
    proportion: "1/1",
    disable: true,
    multiple: false,
  },
};
