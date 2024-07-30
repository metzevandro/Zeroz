import type { Meta, StoryObj } from "@storybook/react";
import "../styles.scss";
import ImageUploader from "../components/ImageUploader/ImageUploader";
import { Title, Subtitle, Primary, Controls, Stories } from "@storybook/blocks";
import React from "react";

const meta: Meta<typeof ImageUploader> = {
  title: "Components/Image Uploader",
  component: ImageUploader,
  parameters: {
    layout: "padded",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Component</Subtitle>
          <p>
            The <strong>Image Uploader</strong> allows you to put files on a
            page by either dragging them into a spot or clicking a button.
          </p>
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  argTypes: {
    iconDropzone: {
      description: "Icon displayed in the dropzone area.",
      control: {
        type: "text",
      },
      table: {
        category: "Appearance",
      },
    },
    labelDropzone: {
      description: "Label displayed in the dropzone area.",
      control: {
        type: "text",
      },
      table: {
        category: "Appearance",
      },
    },
    title: {
      description: "Title of the uploader component.",
      control: {
        type: "text",
      },
      table: {
        category: "Content",
      },
    },
    description: {
      description: "Description of the uploader component.",
      control: {
        type: "text",
      },
      table: {
        category: "Content",
      },
    },
    proportion: {
      description: "Proportion of the image to be uploaded.",
      control: {
        type: "text",
      },
      table: {
        category: "Behavior",
      },
    },
    disabled: {
      description: "Disables the uploader.",
      control: {
        type: "boolean",
      },
      table: {
        category: "Behavior",
      },
    },
    multiple: {
      description: "Allows multiple file uploads.",
      control: {
        type: "boolean",
      },
      table: {
        category: "Behavior",
      },
    },
    maxFileSize: {
      description: "Maximum file size allowed for upload in MB.",
      control: {
        type: "number",
      },
      table: {
        category: "Behavior",
      },
    },
    value: {
      description: "Current value of the uploader.",
      control: {
        type: "object",
      },
      table: {
        category: "Data",
      },
    },
    onChange: {
      description: "Function called when the value changes.",
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
    iconDropzone: "file_upload",
    labelDropzone: "Select an image",
    title: "Title",
    description: "Description",
    proportion: "1/1",
    disabled: false,
    multiple: false,
    maxFileSize: 5,
    value: null,
    onChange: () => {},
  },
};

export const Multiple: Story = {
  args: {
    iconDropzone: "file_upload",
    labelDropzone: "Select an image",
    title: "Title",
    description: "Description",
    proportion: "1/1",
    disabled: false,
    multiple: true,
    maxFileSize: 5,
    value: null,
    onChange: () => {},
  },
};

export const Disabled: Story = {
  args: {
    iconDropzone: "file_upload",
    labelDropzone: "Select an image",
    title: "Title",
    description: "Description",
    proportion: "1/1",
    disabled: true,
    multiple: false,
    maxFileSize: 5,
    value: null,
    onChange: () => {},
  },
};
