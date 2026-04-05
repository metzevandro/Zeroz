import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";
import "../../styles.scss";

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],

  parameters: {
    docs: {
      description: {
        component: `
The **Button** component is the primary interactive element for triggering actions.

It supports four semantic variants, two sizes, and built-in loading/skeleton states.

### When to use
- Use \`primary\` for the main call-to-action on a page or form.
- Use \`secondary\` for supporting actions (e.g. "Cancel", "Go back").
- Use \`success\` for confirmations (e.g. "Confirm", "Mark as done").
- Use \`warning\` for destructive or cautionary actions (e.g. "Delete", "Overwrite").

### Accessibility
- Always provide a meaningful text label via \`children\`.
- Use \`ariaLabel\` to supplement when the visual label is not self-explanatory.
- \`isLoading\` sets \`aria-busy\` automatically.
        `,
      },
    },
  },

  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning"],
      description: "The visual/semantic style of the button.",
      table: { defaultValue: { summary: "primary" } },
    },
    size: {
      control: "radio",
      options: ["sm", "md"],
      description: "Controls button height and padding.",
      table: { defaultValue: { summary: "md" } },
    },
    icon: {
      control: "text",
      description: "Icon name rendered before the label. Requires `children`.",
    },
    isLoading: {
      control: "boolean",
      description: "Shows a loading spinner and disables interaction.",
      table: { defaultValue: { summary: "false" } },
    },
    isSkeleton: {
      control: "boolean",
      description:
        "Replaces the button with a size-matched skeleton placeholder.",
      table: { defaultValue: { summary: "false" } },
    },
    disabled: {
      control: "boolean",
      description: "Disables the button natively.",
    },
    ariaLabel: {
      control: "text",
      description: "Accessible label for screen readers.",
    },
    children: {
      control: "text",
      description: "Button label text.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ---------------------------------------------------------------------------
// Playground (interactive via Controls panel)
// ---------------------------------------------------------------------------

export const Playground: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
    isLoading: false,
    isSkeleton: false,
    disabled: false,
  },
  render: (args) => (
    <div style={{ width: "fit-content" }}>
      <Button {...args} />
    </div>
  ),
};

// ---------------------------------------------------------------------------
// Variants
// ---------------------------------------------------------------------------

export const Primary: Story = {
  args: { children: "Primary", variant: "primary" },
  render: (args) => (
    <div style={{ width: "fit-content" }}>
      <Button {...args} />
    </div>
  ),
};

export const Secondary: Story = {
  args: { children: "Secondary", variant: "secondary" },
  render: (args) => (
    <div style={{ width: "fit-content" }}>
      <Button {...args} />
    </div>
  ),
};

export const Success: Story = {
  args: { children: "Confirm", variant: "success" },
  render: (args) => (
    <div style={{ width: "fit-content" }}>
      <Button {...args} />
    </div>
  ),
};

export const Warning: Story = {
  args: { children: "Delete", variant: "warning" },
  render: (args) => (
    <div style={{ width: "fit-content" }}>
      <Button {...args} />
    </div>
  ),
};

// ---------------------------------------------------------------------------
// Sizes
// ---------------------------------------------------------------------------

export const SizeMd: Story = {
  name: "Size / MD (default)",
  args: { children: "Medium button", size: "md" },
  render: (args) => (
    <div style={{ width: "fit-content" }}>
      <Button {...args} />
    </div>
  ),
};

export const SizeSm: Story = {
  name: "Size / SM",
  args: { children: "Small button", size: "sm" },
  render: (args) => (
    <div style={{ width: "fit-content" }}>
      <Button {...args} />
    </div>
  ),
};

// ---------------------------------------------------------------------------
// States
// ---------------------------------------------------------------------------

export const Loading: Story = {
  args: { children: "Saving…", isLoading: true },
  render: (args) => (
    <div style={{ width: "fit-content" }}>
      <Button {...args} />
    </div>
  ),
};

export const Disabled: Story = {
  args: { children: "Unavailable", disabled: true },
  render: (args) => (
    <div style={{ width: "fit-content" }}>
      <Button {...args} />
    </div>
  ),
};

export const Skeleton: Story = {
  args: { children: "Submit", isSkeleton: true },
  render: (args) => (
    <div style={{ width: "fit-content" }}>
      <Button {...args} />
    </div>
  ),

  parameters: {
    docs: {
      description: {
        story:
          "Renders a `<Skeleton>` placeholder with the exact dimensions of the button. " +
          "Useful for preserving layout during page-level loading states.",
      },
    },
  },
};

// ---------------------------------------------------------------------------
// With Icon
// ---------------------------------------------------------------------------

export const WithIcon: Story = {
  args: { children: "Add item", icon: "plus", variant: "primary" },
  render: (args) => (
    <div style={{ width: "fit-content" }}>
      <Button {...args} />
    </div>
  ),
};

export const WithIconSecondary: Story = {
  name: "With Icon / Secondary",
  args: { children: "Export", icon: "download", variant: "secondary" },
  render: (args) => (
    <div style={{ width: "fit-content" }}>
      <Button {...args} />
    </div>
  ),
};

// ---------------------------------------------------------------------------
// All Variants Matrix
// ---------------------------------------------------------------------------

export const AllVariants: Story = {
  name: "Matrix / All variants × sizes",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {(["primary", "secondary", "success", "warning"] as const).map(
        (variant) => (
          <div
            key={variant}
            style={{ display: "flex", gap: "12px", alignItems: "center" }}
          >
            <Button variant={variant} size="md">
              {variant} md
            </Button>
            <Button variant={variant} size="sm">
              {variant} sm
            </Button>
            <Button variant={variant} size="md" disabled>
              disabled
            </Button>
            <Button variant={variant} size="md" isLoading>
              loading
            </Button>
          </div>
        ),
      )}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Overview of all variant × size combinations including disabled and loading states.",
      },
    },
  },
};
