import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Tabs from "./Tabs";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Tabs** renders a horizontal tab strip with an animated sliding indicator
and a content panel for the active tab.

The indicator slides smoothly between tabs via CSS transitions on an
absolutely-positioned element whose \`left\` and \`width\` are computed
from the active button's bounding rect.

When the strip overflows horizontally, the active tab is auto-scrolled
to the center of the visible area.

### When to use
- Switching between related views within the same context
- Content that is too dense to show all at once but belongs on the same page

### Best practices
- Keep tab labels short (1–2 words) to avoid overflow on small screens
- Use \`widthFull\` when there are 2–4 tabs and you want them to fill the width evenly
- Avoid more than 6–7 tabs — prefer a dropdown or navigation instead
        `,
      },
    },
  },
  argTypes: {
    widthFull: {
      control: "boolean",
      description:
        "Stretches each tab button to fill an equal share of the width.",
    },
    tabs: {
      control: false,
      description: "Array of `{ label, content }` tab definitions.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

// ─── Fixtures ─────────────────────────────────────────────────────────────────

const Panel = ({ title }: { title: string }) => (
  <div style={{ padding: "8px 0", color: "var(--s-color-content-light)" }}>
    Content for <strong>{title}</strong>
  </div>
);

const defaultTabs = [
  { label: "Overview", content: <Panel title="Overview" /> },
  { label: "Details", content: <Panel title="Details" /> },
  { label: "History", content: <Panel title="History" /> },
];

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default three-tab layout. */
export const Default: Story = {
  args: { tabs: defaultTabs },
};

/** Full-width tabs — each button fills equal share of available width. */
export const WidthFull: Story = {
  name: "Full width",
  args: { tabs: defaultTabs, widthFull: true },
};

/** Many tabs to demonstrate horizontal scroll and auto-center behavior. */
export const ManyTabs: Story = {
  name: "Many tabs (scrollable)",
  args: {
    tabs: [
      "Dashboard",
      "Analytics",
      "Users",
      "Billing",
      "Settings",
      "Integrations",
      "Logs",
      "Support",
    ].map((label) => ({ label, content: <Panel title={label} /> })),
  },
  parameters: {
    docs: {
      description: {
        story:
          "When the tab strip overflows, the active tab auto-scrolls to the center of the visible area and the indicator slides to follow.",
      },
    },
  },
};

/** Two tabs — common for simple toggle layouts. */
export const TwoTabs: Story = {
  name: "Two tabs",
  args: {
    tabs: [
      { label: "Active", content: <Panel title="Active" /> },
      { label: "Archived", content: <Panel title="Archived" /> },
    ],
    widthFull: true,
  },
};
