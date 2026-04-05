import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import FileUploader from "./FileUploader";
import "../../styles.scss";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof FileUploader> = {
  title: "Components/FileUploader",
  component: FileUploader,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**FileUploader** is a file selection component with built-in size validation
and per-file error feedback.

Files that exceed \`maxFileSize\` are shown with an error indicator and message.
They are kept visible for user feedback but are **not** included in the \`onChange\` payload.

Use \`accept\` to restrict which file types appear in the system picker
(e.g. \`"image/*"\`, \`".pdf,.docx"\`, \`"image/png,application/pdf"\`).

### Single-file mode (default)
- One \`FileUploaderItem\` is shown at a time.
- Clicking the button again **replaces** the current file.
- Clicking X removes the file.

### Multi-file mode (\`multiple\`)
- Each selected file gets its own item.
- Clicking the button **appends** new files.
- Each item has its own X.

### State management
- **Uncontrolled** (no \`value\` prop): the component manages the list internally.
- **Controlled** (\`value\` prop): pass \`null\` to programmatically clear the list.
  Do **not** echo \`onChange\` back as \`value\` — the internal state is always
  the source of truth for the rendered list.
        `,
      },
    },
  },
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    buttonLabel: { control: "text" },
    typeIconButton: { control: "text" },
    multiple: { control: "boolean" },
    disabled: { control: "boolean" },
    maxFileSize: { control: "number", description: "Max file size in MB." },
    accept: {
      control: "text",
      description:
        "Restricts the file picker. Accepts MIME types or extensions, comma-separated. E.g. `image/*`, `.pdf,.docx`, `image/png,application/pdf`.",
    },
    onChange: { action: "onChange" },
    value: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof FileUploader>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/**
 * Default single-file uploader.
 * Selecting a new file replaces the current one.
 * No `value` prop — state is managed internally.
 */
export const Default: Story = {
  render: () => (
    <FileUploader
      title="Attachment"
      description="Select a file to upload."
      buttonLabel="Add file"
      typeIconButton="upload"
      onChange={(files) => console.log("onChange", files)}
    />
  ),
};

/**
 * Multiple file selection.
 * Each click on the button appends new files to the list.
 */
export const Multiple: Story = {
  render: () => (
    <FileUploader
      title="Documents"
      description="Select one or more files."
      buttonLabel="Add files"
      typeIconButton="upload"
      multiple
      onChange={(files) => console.log("onChange", files)}
    />
  ),
};

/**
 * Restricts the picker to images only (`accept="image/*"`).
 */
export const ImagesOnly: Story = {
  name: 'Images only (accept="image/*")',
  render: () => (
    <FileUploader
      title="Profile photo"
      description="PNG, JPG or GIF."
      buttonLabel="Upload photo"
      typeIconButton="photo_camera"
      accept="image/*"
      onChange={(files) => console.log("onChange", files)}
    />
  ),
};

/**
 * Restricts the picker to PDF and Word documents.
 */
export const PdfAndDocx: Story = {
  name: "PDF & DOCX only",
  render: () => (
    <FileUploader
      title="Contract"
      description="PDF or Word document only."
      buttonLabel="Attach document"
      typeIconButton="attach_file"
      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      onChange={(files) => console.log("onChange", files)}
    />
  ),
};

/**
 * With a 1 MB size limit — upload a large file to see the error state.
 */
export const WithSizeLimit: Story = {
  name: "With size limit (1 MB)",
  render: () => (
    <FileUploader
      title="Profile photo"
      description="PNG or JPG, max 1 MB."
      buttonLabel="Upload photo"
      typeIconButton="photo_camera"
      accept="image/*"
      maxFileSize={1}
      onChange={(files) => console.log("onChange", files)}
    />
  ),
};

/**
 * Multiple files with size limit and type restriction.
 */
export const MultipleWithValidation: Story = {
  name: "Multiple + size limit + accept",
  render: () => (
    <FileUploader
      title="Attachments"
      description="Images or PDFs, max 5 MB each."
      buttonLabel="Add files"
      typeIconButton="upload"
      multiple
      accept="image/*,.pdf,application/pdf"
      maxFileSize={5}
      onChange={(files) => console.log("onChange", files)}
    />
  ),
};

/**
 * Disabled state — the button is not interactive.
 */
export const Disabled: Story = {
  args: {
    title: "Attachments",
    description: "Upload is currently unavailable.",
    buttonLabel: "Add file",
    typeIconButton: "upload",
    disabled: true,
  },
};

/**
 * Controlled clear example.
 * Pass `value={null}` to programmatically clear the file list.
 * Note: do NOT echo `onChange` back as `value` — that causes a state loop.
 */
export const ControlledClear: Story = {
  name: "Controlled clear",
  render: () => {
    const [shouldClear, setShouldClear] = useState(false);

    const handleClear = () => {
      setShouldClear(true);
      // Reset flag after one render so future selections work normally.
      setTimeout(() => setShouldClear(false), 0);
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <FileUploader
          title="Attachments"
          description="Select files, then click Clear to reset."
          buttonLabel="Add file"
          typeIconButton="upload"
          multiple
          value={shouldClear ? null : undefined}
          onChange={(files) => console.log("onChange", files)}
        />
        <button
          onClick={handleClear}
          style={{
            width: "fit-content",
            padding: "8px 16px",
            background: "#6c757d",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Clear files
        </button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Pass `value={null}` momentarily to clear the list from the outside (e.g. after form submit). Do **not** set `value` to the `FileList` from `onChange` — that causes a state loop.",
      },
    },
  },
};
