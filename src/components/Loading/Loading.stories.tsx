import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Loading from "./Loading";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Loading> = {
  title: "Components/Loading",
  component: Loading,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Loading** renders a status indicator with an optional message.

| Variant | Icon | Size | Message |
|---|---|---|---|
| \`default\` | Animated spinner | sm | ✅ |
| \`large\` | Animated spinner | lg | ❌ |
| \`success\` | Checkmark | sm | ✅ |
| \`warning\` | Warning outline | sm | ✅ |

### When to use
- \`default\` — inline loading state (inside buttons, table rows, form fields)
- \`large\` — full-section or page-level loading overlay
- \`success\` — operation completed successfully
- \`warning\` — operation completed with a non-blocking issue

### Best practices
- Always pair \`default\` with a \`message\` when the user needs context on what is loading
- Use \`large\` without a message for layout-level loading to keep the UI clean
- Transition from \`default\` → \`success\` or \`warning\` to give feedback on completion
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "large", "success", "warning"],
      description: "Visual variant of the loading indicator.",
    },
    message: {
      control: "text",
      description:
        "Optional message rendered next to the indicator. Not shown for `large`.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Loading>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Animated spinner with a message. */
export const Default: Story = {
  args: { variant: "default", message: "Loading data..." },
};

/** Large animated spinner — no message. */
export const Large: Story = {
  args: { variant: "large" },
};

/** Success state. */
export const Success: Story = {
  args: { variant: "success", message: "Changes saved successfully." },
};

/** Warning state. */
export const Warning: Story = {
  args: { variant: "warning", message: "Saved with warnings. Please review." },
};

/** Default spinner without a message — used inline in tight spaces. */
export const DefaultNoMessage: Story = {
  name: "Default (no message)",
  args: { variant: "default" },
};

/** All variants side by side for quick visual comparison. */
export const AllVariants: Story = {
  name: "All variants",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Loading variant="default" message="Loading data..." />
      <Loading variant="large" />
      <Loading variant="success" message="Saved successfully." />
      <Loading variant="warning" message="Saved with warnings." />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All four variants rendered together for visual reference.",
      },
    },
  },
};
