import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Notification from "./Notification";
import { NotificationContainer } from "./subcomponents/NotificationContainer";
import { NotificationEntry } from "./Notification.types";
import { Button } from "../Button";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Notification> = {
  title: "Components/Notification",
  component: Notification,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Notification** displays a contextual message with an optional action and close button.

### Float notifications — always use \`NotificationContainer\`

\`type="float"\` notifications must be wrapped in \`<NotificationContainer>\`.
It owns positioning, stacking, and all enter/exit/reorder animations.

\`\`\`tsx
import { NotificationContainer, NotificationEntry } from "@your/ui";

function App() {
  const [toasts, setToasts] = useState<NotificationEntry[]>([]);

  const add = (entry: Omit<NotificationEntry, "id">) =>
    setToasts(prev => [...prev, { ...entry, id: crypto.randomUUID() }]);

  const remove = (id: string) =>
    setToasts(prev => prev.filter(t => t.id !== id));

  return (
    <>
      {/* your app */}
      <NotificationContainer
        notifications={toasts.map(t => ({ ...t, onClose: () => remove(t.id) }))}
      />
    </>
  );
}
\`\`\`

### Inline notifications

\`type="inline"\` renders in the document flow — no container needed.
        `,
      },
    },
  },
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    icon: { control: "text" },
    variant: {
      control: "select",
      options: ["primary", "secondary", "warning", "success"],
    },
    type: { control: "radio", options: ["float", "inline"] },
    isOpen: { control: "boolean" },
    dismissible: { control: "boolean" },
    withAction: { control: "boolean" },
    disableButton: { control: "boolean" },
    buttonLabel: { control: "text" },
    onClose: { action: "onClose" },
    onClickButton: { action: "onClickButton" },
  },
};

export default meta;
type Story = StoryObj<typeof Notification>;

// ─── Inline stories ───────────────────────────────────────────────────────────

export const InlineSuccess: Story = {
  name: "Inline — success",
  args: {
    isOpen: true,
    type: "inline",
    variant: "success",
    icon: "check_circle",
    title: "Changes saved",
    description: "Your profile has been updated.",
    dismissible: true,
  },
};

export const InlineWarning: Story = {
  name: "Inline — warning",
  args: {
    isOpen: true,
    type: "inline",
    variant: "warning",
    icon: "warning",
    title: "Session expiring",
    description: "You will be signed out in 5 minutes.",
    withAction: true,
    buttonLabel: "Stay signed in",
    dismissible: true,
  },
};

export const InlinePrimary: Story = {
  name: "Inline — primary",
  args: {
    isOpen: true,
    type: "inline",
    variant: "primary",
    icon: "info",
    title: "Update available",
    description: "A new version is ready.",
    dismissible: true,
  },
};

export const InlineSecondary: Story = {
  name: "Inline — secondary",
  args: {
    isOpen: true,
    type: "inline",
    variant: "secondary",
    icon: "campaign",
    title: "Scheduled maintenance",
    description: "Sunday 02:00–04:00 UTC.",
    dismissible: true,
  },
};

export const AllInlineVariants: Story = {
  name: "All inline variants",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {(["primary", "secondary", "warning", "success"] as const).map((v) => (
        <Notification
          key={v}
          isOpen
          type="inline"
          variant={v}
          icon={
            v === "success"
              ? "check_circle"
              : v === "warning"
                ? "warning"
                : "info"
          }
          title={`${v.charAt(0).toUpperCase() + v.slice(1)} notification`}
          description="Supporting detail text goes here."
          dismissible
        />
      ))}
    </div>
  ),
};

// ─── Float stories ────────────────────────────────────────────────────────────

const TEMPLATES: Omit<NotificationEntry, "id">[] = [
  {
    variant: "success",
    icon: "check_circle",
    title: "File uploaded",
    description: "report_q3.pdf was uploaded.",
    dismissible: true,
  },
  {
    variant: "warning",
    icon: "warning",
    title: "Validation error",
    description: "Review the highlighted fields.",
    dismissible: true,
  },
  {
    variant: "primary",
    icon: "info",
    title: "Update available",
    description: "New version ready to install.",
    dismissible: true,
  },
  {
    variant: "secondary",
    icon: "campaign",
    title: "Maintenance tonight",
    description: "System down 02:00–04:00 UTC.",
    dismissible: true,
  },
  {
    variant: "success",
    icon: "cloud_done",
    title: "Sync complete",
    description: "All changes are saved to the cloud.",
    dismissible: true,
  },
  {
    variant: "warning",
    icon: "schedule",
    title: "Deadline approaching",
    description: "Task due in 30 minutes.",
    dismissible: true,
  },
  {
    variant: "primary",
    icon: "person_add",
    title: "New team member",
    description: "Alice joined your workspace.",
    dismissible: true,
  },
  {
    variant: "success",
    icon: "payment",
    title: "Payment received",
    description: "Invoice #1042 has been paid.",
    dismissible: true,
  },
];

/** Single dismissible float toast. */
export const FloatSingle: Story = {
  name: "Float — single",
  render: () => {
    const [toasts, setToasts] = useState<NotificationEntry[]>([]);
    const remove = (id: string) =>
      setToasts((p) => p.filter((t) => t.id !== id));
    const add = () => {
      const t = TEMPLATES[0];
      setToasts((p) => [...p, { ...t, id: crypto.randomUUID() }]);
    };
    return (
      <>
        <Button style={{ width: "fit-content" }} onClick={add}>
          Show toast
        </Button>
        <NotificationContainer
          notifications={toasts.map((t) => ({
            ...t,
            onClose: () => remove(t.id),
          }))}
        />
      </>
    );
  },
};

/**
 * The main story: add multiple toasts, dismiss any one of them,
 * and watch the remaining ones collapse smoothly into the freed space.
 */
export const FloatStacked: Story = {
  name: "Float — stacked + reorder (main demo)",
  render: () => {
    const [toasts, setToasts] = useState<NotificationEntry[]>([]);
    const remove = (id: string) =>
      setToasts((p) => p.filter((t) => t.id !== id));

    const addRandom = () => {
      const t = TEMPLATES[Math.floor(Math.random() * TEMPLATES.length)];
      setToasts((p) => [...p, { ...t, id: crypto.randomUUID() }]);
    };

    const addAll = () => {
      setToasts(TEMPLATES.map((t) => ({ ...t, id: crypto.randomUUID() })));
    };

    return (
      <>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <Button style={{ width: "fit-content" }} onClick={addRandom}>
            Add random toast
          </Button>
          <Button style={{ width: "fit-content" }} onClick={addAll}>
            Add all 8 toasts
          </Button>
          <Button
            style={{ width: "fit-content" }}
            variant="secondary"
            onClick={() => setToasts([])}
          >
            Clear all
          </Button>
        </div>
        <p style={{ fontSize: "12px", color: "gray", marginTop: "8px" }}>
          Add multiple toasts then dismiss any one — watch the others collapse
          into the freed space.
        </p>
        <NotificationContainer
          notifications={toasts.map((t) => ({
            ...t,
            onClose: () => remove(t.id),
          }))}
        />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Click **Add all 8 toasts** then dismiss the 5th one. The remaining toasts animate smoothly into the freed space via `max-height` collapse + `transform` transition.",
      },
    },
  },
};

export const FloatAutoDismiss: Story = {
  name: "Float — auto-dismiss",
  render: () => {
    const [toasts, setToasts] = useState<NotificationEntry[]>([]);
    const remove = (id: string) =>
      setToasts((p) => p.filter((t) => t.id !== id));
    return (
      <>
        <Button
          style={{ width: "fit-content" }}
          onClick={() => {
            setToasts((p) => [
              ...p,
              {
                id: crypto.randomUUID(),
                variant: "primary",
                icon: "sync",
                title: "Syncing data",
                description: "This will disappear automatically.",
                dismissible: false,
              },
            ]);
          }}
        >
          Trigger auto-dismiss toast
        </Button>
        <NotificationContainer
          notifications={toasts.map((t) => ({
            ...t,
            onClose: () => remove(t.id),
          }))}
        />
      </>
    );
  },
};
