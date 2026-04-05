import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Pagination from "./Pagination";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Pagination** is a navigation control for moving between pages or steps.

Three layout variants are available:

| Variant | Layout |
|---|---|
| \`noLabel\` | Arrows only |
| \`leftLabel\` | Label on the left, arrows grouped on the right |
| \`centerLabel\` | Left arrow · label · right arrow |

### When to use
- Tables or lists with server-side pagination
- Step-by-step flows (wizards, carousels)
- Any content split across multiple pages

### Best practices
- Set \`disabledLeft\` on the first page and \`disabledRight\` on the last
- Use \`skeleton\` while the page count is still loading
- Provide a meaningful \`label\` like \`"Page 3 of 10"\` or \`"3 / 10"\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["noLabel", "leftLabel", "centerLabel"],
      description: "Layout variant.",
    },
    label: {
      control: "text",
      description: 'Label text (e.g. `"Page 1 of 10"`).',
    },
    disabledLeft: {
      control: "boolean",
      description: "Disables the left arrow.",
    },
    disabledRight: {
      control: "boolean",
      description: "Disables the right arrow.",
    },
    skeleton: {
      control: "boolean",
      description: "Shows skeleton placeholder.",
    },
    onClickLeft: { action: "onClickLeft" },
    onClickRight: { action: "onClickRight" },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Arrows only — no label. */
export const NoLabel: Story = {
  args: { variant: "noLabel", label: "" },
};

/** Label on the left, arrows on the right. */
export const LeftLabel: Story = {
  args: { variant: "leftLabel", label: "Page 1 of 10" },
};

/** Left arrow, label in the center, right arrow. */
export const CenterLabel: Story = {
  args: { variant: "centerLabel", label: "Page 1 of 10" },
};

/** First page — left arrow disabled. */
export const FirstPage: Story = {
  name: "First page (left disabled)",
  args: {
    variant: "centerLabel",
    label: "Page 1 of 10",
    disabledLeft: true,
  },
};

/** Last page — right arrow disabled. */
export const LastPage: Story = {
  name: "Last page (right disabled)",
  args: {
    variant: "centerLabel",
    label: "Page 10 of 10",
    disabledRight: true,
  },
};

/** Skeleton loading state. */
export const Skeleton: Story = {
  args: { variant: "centerLabel", label: "", skeleton: true },
  parameters: {
    docs: {
      description: {
        story:
          "Both arrows are disabled and the label is replaced with a skeleton placeholder while page data is loading.",
      },
    },
  },
};

/** Fully interactive controlled example. */
export const Controlled: Story = {
  name: "Controlled (with state)",
  render: () => {
    const total = 10;
    const [page, setPage] = useState(1);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <Pagination
          variant="centerLabel"
          label={`Page ${page} of ${total}`}
          disabledLeft={page === 1}
          disabledRight={page === total}
          onClickLeft={() => setPage((p) => p - 1)}
          onClickRight={() => setPage((p) => p + 1)}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates correct wiring: `disabledLeft` on the first page, `disabledRight` on the last, and the label updating on every navigation.",
      },
    },
  },
};

/** All three variants stacked for visual comparison. */
export const AllVariants: Story = {
  name: "All variants",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Pagination variant="noLabel" label="" />
      <Pagination variant="leftLabel" label="Page 3 of 10" />
      <Pagination variant="centerLabel" label="Page 3 of 10" />
    </div>
  ),
};
