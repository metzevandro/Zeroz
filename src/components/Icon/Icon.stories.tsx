import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Icon from "./Icon";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Icon** renders a single [Material Symbol](https://fonts.google.com/icons) using the variable icon font.

The component uses \`font-variation-settings\` to switch between outlined and filled variants
without loading a separate font file, keeping the bundle lean.

### When to use
- Inline with text or buttons to reinforce meaning
- As standalone visual indicators (status, category, action)

### Best practices
- Always pair icons with a visible label or \`aria-label\` on the parent element for accessibility
- Use \`fill\` consistently within a context — avoid mixing filled and outlined icons in the same UI region
- Prefer \`"md"\` as the default size; use \`"sm"\` inside compact controls and \`"lg"\` for empty states or hero areas
- Pass \`icon={undefined}\` when the icon name is not yet known — the element renders empty without throwing
        `,
      },
    },
  },
  argTypes: {
    icon: {
      control: "text",
      description:
        'Material Symbol icon name (e.g. `"search"`, `"logout"`, `"keyboard_arrow_down"`).',
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "Rendered size of the icon.",
    },
    fill: {
      control: "boolean",
      description: "Renders the icon in its filled variant when `true`.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default outlined icon at medium size. */
export const Default: Story = {
  args: {
    icon: "house",
    size: "md",
    fill: false,
  },
};

/** Filled variant using the `FILL` font variation axis. */
export const Filled: Story = {
  args: {
    icon: "star",
    size: "md",
    fill: true,
  },
};

/** All three sizes side by side. */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <Icon icon="home" size="sm" />
      <Icon icon="home" size="md" />
      <Icon icon="home" size="lg" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Comparison of `sm`, `md`, and `lg` sizes using the same icon.",
      },
    },
  },
};

/** Outlined vs filled comparison. */
export const OutlinedVsFilled: Story = {
  name: "Outlined vs filled",
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <Icon icon="favorite" size="md" fill={false} />
      <Icon icon="favorite" size="md" fill />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "The `fill` prop switches between the outlined and filled font variation without changing the icon name or loading a second font.",
      },
    },
  },
};

/** Common icons used throughout the design system. */
export const CommonIcons: Story = {
  name: "Common icons",
  render: () => {
    const icons = [
      "search",
      "close",
      "menu",
      "settings",
      "person",
      "logout",
      "keyboard_arrow_down",
      "keyboard_arrow_right",
      "calendar_month",
      "visibility",
      "visibility_off",
      "delete",
      "edit",
      "add",
      "check",
    ];
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {icons.map((name) => (
          <div
            key={name}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "4px",
              width: "80px",
            }}
          >
            <Icon icon={name} size="md" />
            <span
              style={{ fontSize: "10px", color: "gray", textAlign: "center" }}
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "A reference grid of icons commonly used across the design system.",
      },
    },
  },
};
