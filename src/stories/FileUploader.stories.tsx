import type { Meta, StoryObj } from "@storybook/react";
import "../styles.scss";
import FileUploader from "../components/FileUploader/FileUploader";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
import React from "react";

const meta: Meta<typeof FileUploader> = {
  title: "Components/File Uploader",
  component: FileUploader,
  parameters: {
    layout: "padded",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong>File uploader</strong> lets you choose files and put
            them in a certain spot.
          </p>
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  argTypes: {
    title: {
      description: "The title for the file uploader component.",
      control: { type: "text" },
      defaultValue: "Upload files",
      table: {
        category: "Content",
      },
    },
    typeIconButton: {
      description: "The icon type for the upload button. Use Material Icons",
      control: { type: "text" },
      defaultValue: "upload_file",
      table: {
        category: "Content",
      },
    },
    buttonLabel: {
      description: "The label for the upload button.",
      control: { type: "text" },
      defaultValue: "Add file",
      table: {
        category: "Content",
      },
    },
    description: {
      description: "The description for the file uploader component.",
      control: { type: "text" },
      defaultValue: "Max file size is 1mb.",
      table: {
        category: "Content",
      },
    },
    multiple: {
      description: "Allows multiple file selection if true.",
      control: { type: "boolean" },
      defaultValue: false,
      table: {
        category: "Behavior",
      },
    },
    disabled: {
      description: "Disables the file uploader if true.",
      control: { type: "boolean" },
      defaultValue: false,
      table: {
        category: "Behavior",
      },
    },
    maxFileSize: {
      description: "The maximum file size allowed in MB.",
      control: { type: "number" },
      defaultValue: 1,
      table: {
        category: "Behavior",
      },
    },
    value: {
      description: "The currently selected files.",
      control: { type: "object" },
      defaultValue: null,
      table: {
        category: "Data",
      },
    },
    onChange: {
      description: "Callback function when files are selected.",
      action: "onChange",
      table: {
        category: "Events",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Upload files",
    description: "Max file size is 1mb.",
    buttonLabel: "Add file",
    typeIconButton: "upload_file",
    multiple: false,
    disabled: false,
    maxFileSize: 1,
    value: null,
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
    value: null,
    onChange: (files: FileList | null) => {},
  },
};
