import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Modal from "./Modal";
import { ContentModal, FooterModal } from "./subcomponents/ModalSlots";
import Button from "../Button/Button";
import "../../styles.scss";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Modal** is a dialog overlay with a header, optional body, and optional footer.

Compose it with the companion slot components for consistent internal layout:
- \`<ContentModal>\` — wraps body content with consistent padding
- \`<FooterModal>\` — wraps action buttons in the footer

When \`dismissible\` is \`true\`, a close button appears in the header
and clicking the backdrop also fires \`hideModal\`.

### When to use
- Confirming destructive actions (delete, discard)
- Collecting input without leaving the current context
- Displaying additional information that requires user acknowledgment

### Best practices
- Always provide a clear \`title\` and concise \`description\`
- Use \`dismissible\` for informational modals; omit it for required confirmations
- Keep footer actions to 2 at most — primary action on the right, cancel on the left
- Avoid nesting modals
        `,
      },
    },
  },
  argTypes: {
    title: { control: "text", description: "Modal heading." },
    description: {
      control: "text",
      description: "Supporting text below the title.",
    },
    dismissible: {
      control: "boolean",
      description: "Shows a close button and allows backdrop click to dismiss.",
    },
    isOpen: { control: "boolean", description: "Controls modal visibility." },
    hideModal: {
      action: "hideModal",
      description: "Fired when the modal should close.",
    },
    content: {
      control: false,
      description: "Body content — use `<ContentModal>`.",
    },
    footer: {
      control: false,
      description: "Footer content — use `<FooterModal>`.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Wrapper that adds a trigger button for interactive stories. */
const ModalDemo = ({
  label = "Open modal",
  ...props
}: Omit<React.ComponentProps<typeof Modal>, "isOpen" | "hideModal"> & {
  label?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button variant="primary" size="md" onClick={() => setIsOpen(true)}>
        {label}
      </Button>
      <Modal {...props} isOpen={isOpen} hideModal={() => setIsOpen(false)} />
    </>
  );
};

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Dismissible modal with content and footer actions. */
export const Default: Story = {
  render: () => (
    <ModalDemo
      title="Confirm deletion"
      description="This action is permanent and cannot be undone."
      dismissible
      content={
        <ContentModal>
          <p>
            Are you sure you want to delete <strong>Project Alpha</strong>?
          </p>
        </ContentModal>
      }
      footer={
        <FooterModal>
          <Button variant="secondary" size="md">
            Cancel
          </Button>
          <Button variant="primary" size="md">
            Delete
          </Button>
        </FooterModal>
      }
    />
  ),
};

/** Non-dismissible modal — backdrop click and close button are disabled. */
export const NonDismissible: Story = {
  name: "Non-dismissible",
  render: () => (
    <ModalDemo
      label="Open (non-dismissible)"
      title="Session expired"
      description="Your session has expired. Please log in again to continue."
      footer={
        <FooterModal>
          <Button variant="primary" size="md">
            Log in
          </Button>
        </FooterModal>
      }
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          "When `dismissible` is `false`, the close button is hidden and clicking the backdrop does nothing. Use for required acknowledgments.",
      },
    },
  },
};

/** Modal with no footer — informational only. */
export const NoFooter: Story = {
  name: "No footer",
  render: () => (
    <ModalDemo
      title="Keyboard shortcuts"
      description="Use these shortcuts to navigate faster."
      dismissible
      content={
        <ContentModal>
          <ul>
            <li>
              <kbd>⌘ K</kbd> — Open command palette
            </li>
            <li>
              <kbd>⌘ /</kbd> — Toggle sidebar
            </li>
            <li>
              <kbd>Esc</kbd> — Close modal
            </li>
          </ul>
        </ContentModal>
      }
    />
  ),
};

/** Modal with no content — title and description only. */
export const TitleOnly: Story = {
  name: "Title and description only",
  render: () => (
    <ModalDemo
      title="Maintenance scheduled"
      description="The system will be unavailable on Sunday from 02:00 to 04:00 UTC."
      dismissible
      footer={
        <FooterModal>
          <Button variant="primary" size="md">
            Got it
          </Button>
        </FooterModal>
      }
    />
  ),
};
