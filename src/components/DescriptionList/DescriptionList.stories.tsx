import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import DescriptionList from "./DescriptionList";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof DescriptionList> = {
  title: "Components/DescriptionList",
  component: DescriptionList,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**DescriptionList** renders a structured list of label/value pairs,
similar to an HTML \`<dl>\` (definition list).

Items are separated by hairline dividers, except after the last one.
The row layout is controlled by the \`direction\` prop.

### When to use
- Displaying record details (user profile, order summary, product specs)
- Presenting key/value metadata in a readable format
- Summarizing form data before submission

### Best practices
- Keep \`title\` labels short and consistent in length for visual balance
- Use \`direction="row"\` for side-by-side layouts (wider containers)
- Use \`direction="column"\` for stacked layouts (narrower containers or mobile)
- Omitting \`description\` renders an empty value cell — prefer a placeholder string like \`"—"\` when no value is available
        `,
      },
    },
  },
  argTypes: {
    direction: {
      control: "radio",
      options: ["row", "column"],
      description:
        "Controls the layout of each row: `row` = side by side, `column` = stacked.",
    },
    items: {
      control: "object",
      description: "Array of `{ title, description }` pairs to render.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof DescriptionList>;

// ─── Fixtures ─────────────────────────────────────────────────────────────────

const accountItems = [
  { title: "Full name", description: "Jane Doe" },
  { title: "Email", description: "jane@example.com" },
  { title: "Plan", description: "Pro" },
  { title: "Status", description: "Active" },
  { title: "Renewal date", description: "08/15/2025" },
];

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Horizontal layout — title and description side by side. */
export const Row: Story = {
  args: {
    direction: "row",
    items: accountItems,
  },
};

/** Vertical/stacked layout — title above description. */
export const Column: Story = {
  args: {
    direction: "column",
    items: accountItems,
  },
};

/** Single item — no divider rendered. */
export const SingleItem: Story = {
  name: "Single item (no divider)",
  args: {
    direction: "row",
    items: [{ title: "Status", description: "Active" }],
  },
  parameters: {
    docs: {
      description: {
        story: "With only one item, no bottom divider is applied.",
      },
    },
  },
};

/** Items with missing description values. */
export const MissingDescriptions: Story = {
  name: "With missing descriptions",
  args: {
    direction: "row",
    items: [
      { title: "Full name", description: "Jane Doe" },
      { title: "Phone" },
      { title: "Company" },
      { title: "Email", description: "jane@example.com" },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'When `description` is omitted, an empty cell is rendered. Consider passing `"—"` as a placeholder for better readability.',
      },
    },
  },
};

/** Both directions side by side for visual comparison. */
export const DirectionComparison: Story = {
  name: "Direction comparison",
  render: () => (
    <div style={{ display: "flex", gap: "48px", alignItems: "flex-start" }}>
      <div style={{ flex: 1 }}>
        <p style={{ marginBottom: "8px", fontWeight: 600 }}>row</p>
        <DescriptionList direction="row" items={accountItems} />
      </div>
      <div style={{ flex: 1 }}>
        <p style={{ marginBottom: "8px", fontWeight: 600 }}>column</p>
        <DescriptionList direction="column" items={accountItems} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Side-by-side comparison of `row` and `column` directions with the same data set.",
      },
    },
  },
};
