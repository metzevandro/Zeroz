import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Tag from "./Tag";
import "../../styles.scss";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Tag** is a compact label with an optional dismiss button.

When \`onClose\` is provided, clicking the close button triggers a smooth
exit animation (fade + scale + width collapse) before removing the tag from
the DOM. \`onClose\` fires after the animation completes, not immediately.

### When to use
- Displaying selected filters, categories, or labels
- Showing removable items in a multi-select input
- Status badges that can be dismissed

### Best practices
- Keep \`content\` short — one or two words at most
- Use \`variant\` consistently with your design system's semantic colors
- Omit \`onClose\` for static, non-dismissible tags
        `,
      },
    },
  },
  argTypes: {
    content: { control: "text", description: "Text displayed inside the tag." },
    variant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning"],
      description: "Visual variant.",
    },
    onClose: {
      action: "onClose",
      description:
        "Fired after the exit animation completes. Renders a close button when provided.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Dismissible tag — click the × to see the exit animation. */
export const Default: Story = {
  args: { content: "Design system", variant: "primary", onClose: () => {} },
};

/** Static tag without a close button. */
export const Static: Story = {
  name: "Static (no close button)",
  args: { content: "React", variant: "secondary" },
  parameters: {
    docs: {
      description: {
        story: "When `onClose` is omitted, no close button is rendered.",
      },
    },
  },
};

/** All four variants. */
export const AllVariants: Story = {
  name: "All variants",
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Tag content="Primary" variant="primary" onClose={() => {}} />
      <Tag content="Secondary" variant="secondary" onClose={() => {}} />
      <Tag content="Success" variant="success" onClose={() => {}} />
      <Tag content="Warning" variant="warning" onClose={() => {}} />
    </div>
  ),
};

/** Dismissible tag group — remove tags one by one. */
export const DismissibleGroup: Story = {
  name: "Dismissible group",
  render: () => {
    const initial = [
      { id: 1, label: "React", variant: "primary" as const },
      { id: 2, label: "TypeScript", variant: "secondary" as const },
      { id: 3, label: "Deployed", variant: "success" as const },
      { id: 4, label: "Review needed", variant: "warning" as const },
    ];
    const [tags, setTags] = useState(initial);

    return (
      <div
        style={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          minHeight: "32px",
        }}
      >
        {tags.length === 0 && (
          <span style={{ color: "gray", fontSize: "12px" }}>
            All tags dismissed
          </span>
        )}
        {tags.map((tag) => (
          <Tag
            key={tag.id}
            content={tag.label}
            variant={tag.variant}
            onClose={() =>
              setTags((prev) => prev.filter((t) => t.id !== tag.id))
            }
          />
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Each tag animates out independently. `onClose` removes it from state after the animation completes, preventing a layout jump.",
      },
    },
  },
};
