import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Skeleton from "./Skeleton";
import "../../styles.scss";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Skeleton** is a loading placeholder that mimics the shape of content
before it has loaded, preventing layout shift and reducing perceived wait time.

### When to use
- While data is being fetched (text, images, cards, avatars)
- As a drop-in replacement for any element during its loading state
- In conjunction with a component's \`skeleton\` prop (e.g. \`<Input skeleton />\`)

### Best practices
- Match \`width\` and \`height\` as closely as possible to the real content dimensions
- Use \`circle\` for avatars, icons, or any circular element
- Group multiple skeletons to simulate a full layout (see "Content card" story)
- Remove skeletons as soon as data is available — don't leave them visible longer than needed
        `,
      },
    },
  },
  argTypes: {
    width: {
      control: "text",
      description:
        'Width — any valid CSS length (e.g. `"200px"`, `"100%"`, `"5rem"`).',
    },
    height: {
      control: "text",
      description: 'Height — any valid CSS length (e.g. `"16px"`, `"1.5rem"`).',
    },
    circle: {
      control: "boolean",
      description: "Renders a circular skeleton when `true`.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Standard rectangular placeholder — text line. */
export const Default: Story = {
  args: { width: "200px", height: "16px" },
};

/** Circular placeholder — avatar or icon. */
export const Circle: Story = {
  args: { width: "40px", height: "40px", circle: true },
};

/** Full-width block — card or image placeholder. */
export const FullWidth: Story = {
  name: "Full-width block",
  args: { width: "100%", height: "120px" },
};

/** Multiple sizes to compare proportions. */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Skeleton width="280px" height="12px" />
      <Skeleton width="220px" height="12px" />
      <Skeleton width="180px" height="12px" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Varying widths simulate a multi-line text block.",
      },
    },
  },
};

/** Simulates a user card with avatar, name line, and subtitle. */
export const ContentCard: Story = {
  name: "Content card (composed)",
  render: () => (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <Skeleton width="48px" height="48px" circle />
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <Skeleton width="140px" height="14px" />
        <Skeleton width="100px" height="12px" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Compose multiple `Skeleton` instances to simulate a full content layout — matching avatar, name, and subtitle dimensions.",
      },
    },
  },
};
