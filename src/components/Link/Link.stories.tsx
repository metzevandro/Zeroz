import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Link from "./Link";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Link** is a styled anchor element that extends the native \`<a>\` tag
with a \`disabled\` visual state and a constrained \`target\` type.

All standard anchor attributes (\`href\`, \`rel\`, \`aria-label\`, etc.)
are forwarded to the underlying element via the rest spread.

> **Accessibility note:** native \`<a>\` elements do not support a \`disabled\` attribute.
> The \`disabled\` prop applies visual styling via CSS but does **not** block navigation.
> Prevent it explicitly with \`onClick={(e) => e.preventDefault()}\` when needed.

### When to use
- Navigation to internal or external URLs
- Inline text links within paragraphs or descriptions
- Action links that open content in a new tab

### Best practices
- Always provide a meaningful \`children\` label — avoid "click here" or "read more"
- Use \`target="_blank"\` with \`rel="noreferrer"\` for external links (security)
- Use \`disabled\` + \`onClick={(e) => e.preventDefault()}\` to fully block a disabled link
        `,
      },
    },
  },
  argTypes: {
    href: {
      control: "text",
      description: "Destination URL.",
    },
    target: {
      control: "select",
      options: ["_self", "_blank", "_parent", "_top"],
      description: "Browsing context for the linked URL.",
    },
    disabled: {
      control: "boolean",
      description:
        "Applies disabled styling. Does not block navigation natively.",
    },
    children: {
      control: "text",
      description: "Link label or content.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Standard inline link. */
export const Default: Story = {
  args: {
    href: "https://example.com",
    children: "Visit example.com",
  },
};

/** Opens in a new tab with recommended security attributes. */
export const NewTab: Story = {
  name: "Opens in new tab",
  args: {
    href: "https://example.com",
    target: "_blank",
    rel: "noreferrer",
    children: "Open in new tab",
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use `rel="noreferrer"` alongside `target="_blank"` to prevent the new page from accessing `window.opener` (security best practice).',
      },
    },
  },
};

/** Disabled visual state — navigation is not blocked by CSS alone. */
export const Disabled: Story = {
  args: {
    href: "/settings",
    disabled: true,
    onClick: (e) => e.preventDefault(),
    children: "Settings (unavailable)",
  },
  parameters: {
    docs: {
      description: {
        story:
          "The `disabled` prop applies visual styling only. Navigation is blocked here via `onClick={(e) => e.preventDefault()}` — include this in production when using `disabled`.",
      },
    },
  },
};

/** Link used inline within a paragraph. */
export const Inline: Story = {
  render: () => (
    <p>
      By continuing, you agree to our{" "}
      <Link href="/terms">Terms of Service</Link> and{" "}
      <Link href="/privacy">Privacy Policy</Link>.
    </p>
  ),
  parameters: {
    docs: {
      description: {
        story: "Links flow naturally within paragraph text.",
      },
    },
  },
};
