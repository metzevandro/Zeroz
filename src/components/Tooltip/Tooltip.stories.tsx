import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Tooltip from "./Tooltip";
import "../../styles.scss";
import { Button } from "../Button";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
**Tooltip** displays a contextual text bubble when the user hovers over its child element.

The bubble appears in the specified \`direction\` with a CSS-drawn arrow pointing
back toward the trigger, and fades in/out smoothly via CSS transitions.

### When to use
- Providing a label for icon-only buttons
- Offering supplementary context for truncated text
- Clarifying the purpose of a control without cluttering the UI

### Best practices
- Keep \`text\` concise — one short sentence or phrase at most
- Prefer \`"top"\` as the default direction when space permits
- Never put essential information only in a tooltip — it is not accessible to keyboard or touch users
        `,
      },
    },
  },
  argTypes: {
    text: {
      control: "text",
      description: "Text displayed inside the tooltip bubble.",
    },
    direction: {
      control: "select",
      options: ["top", "bottom", "right", "left"],
      description: "Direction the tooltip appears relative to the trigger.",
    },
    children: { control: false, description: "Trigger element." },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

// ─── Helpers ──────────────────────────────────────────────────────────────────

const TriggerButton = ({ label = "Hover me" }: { label?: string }) => (
  <Button>{label}</Button>
);

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default — tooltip above the trigger. */
export const Top: Story = {
  args: {
    text: "Tooltip on top",
    direction: "top",
    children: <TriggerButton />,
  },
};

export const Bottom: Story = {
  args: {
    text: "Tooltip on bottom",
    direction: "bottom",
    children: <TriggerButton />,
  },
};

export const Right: Story = {
  args: {
    text: "Tooltip on right",
    direction: "right",
    children: <TriggerButton />,
  },
};

export const Left: Story = {
  args: {
    text: "Tooltip on left",
    direction: "left",
    children: <TriggerButton />,
  },
};

/** All four directions side by side. */
export const AllDirections: Story = {
  name: "All directions",
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "48px",
        alignItems: "center",
        padding: "48px",
      }}
    >
      <Tooltip text="Top" direction="top">
        <TriggerButton label="Top" />
      </Tooltip>
      <Tooltip text="Bottom" direction="bottom">
        <TriggerButton label="Bottom" />
      </Tooltip>
      <Tooltip text="Right" direction="right">
        <TriggerButton label="Right" />
      </Tooltip>
      <Tooltip text="Left" direction="left">
        <TriggerButton label="Left" />
      </Tooltip>
    </div>
  ),
};

/** Multi-word text that wraps inside the bubble. */
export const LongText: Story = {
  name: "Long text",
  args: {
    text: "This action will permanently\ndelete the selected items.",
    direction: "top",
    children: <TriggerButton label="Delete" />,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Use `\\n` in `text` to force line breaks inside the bubble (`white-space: pre`).",
      },
    },
  },
};
