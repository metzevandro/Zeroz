import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ButtonIcon from "./ButtonIcon";
import type {
  ButtonIconVariant,
  ButtonIconAppearance,
  ButtonIconSize,
} from "./ButtonIcon.types";
import "../../styles.scss";

const meta: Meta<typeof ButtonIcon> = {
  title: "Components/ButtonIcon",
  component: ButtonIcon,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "An icon-only button with semantic color variants and two visual styles. Always provide `aria-label` for accessibility.",
      },
    },
  },
  argTypes: {
    icon: {
      control: "text",
      description: "Material Symbols icon identifier",
    },
    appearance: {
      control: "radio",
      options: ["plain", "default"] satisfies ButtonIconAppearance[],
      description: "Visual weight of the button",
    },
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "warning",
        "on-color",
      ] satisfies ButtonIconVariant[],
      description: "Semantic color intent",
    },
    size: {
      control: "radio",
      options: ["sm", "md"] satisfies ButtonIconSize[],
      description: "Size of the button",
    },
    disabled: {
      control: "boolean",
      description: "Disables the button",
      table: { defaultValue: { summary: "false" } },
    },
    skeleton: {
      control: "boolean",
      description: "Shows skeleton loading state",
      table: { defaultValue: { summary: "false" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonIcon>;

// --- Playground ---

export const Playground: Story = {
  name: "Playground",
  args: {
    icon: "edit",
    appearance: "default",
    variant: "primary",
    size: "md",
    "aria-label": "Edit",
  },
};

// --- Appearance variations ---

export const Plain: Story = {
  name: "Plain",
  args: {
    icon: "close",
    appearance: "plain",
    variant: "primary",
    size: "md",
    "aria-label": "Close",
  },
};

export const Default: Story = {
  name: "Default",
  args: {
    icon: "add",
    appearance: "default",
    variant: "primary",
    size: "md",
    "aria-label": "Add",
  },
};

// --- Variant showcase ---

const ALL_VARIANTS: ButtonIconVariant[] = [
  "primary",
  "secondary",
  "success",
  "warning",
];

export const AllVariants: Story = {
  name: "All Variants — Default appearance",
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      {ALL_VARIANTS.map((variant) => (
        <ButtonIcon
          key={variant}
          icon="star"
          appearance="default"
          variant={variant}
          size="md"
          aria-label={variant}
        />
      ))}
    </div>
  ),
};

// --- Size variations ---

export const Sizes: Story = {
  name: "Size Variations",
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      {(["sm", "md"] satisfies ButtonIconSize[]).map((size) => (
        <ButtonIcon
          key={size}
          icon="edit"
          appearance="default"
          variant="primary"
          size={size}
          aria-label={`Edit ${size}`}
        />
      ))}
    </div>
  ),
};

// --- States ---

export const Disabled: Story = {
  name: "Disabled",
  args: {
    icon: "delete",
    appearance: "default",
    variant: "warning",
    size: "md",
    disabled: true,
    "aria-label": "Delete",
  },
};

export const Loading: Story = {
  name: "Skeleton (Loading)",
  args: {
    icon: "edit",
    appearance: "default",
    variant: "primary",
    size: "md",
    skeleton: true,
    "aria-label": "Edit",
  },
};

// --- On-color variant ---

export const OnColor: Story = {
  name: "On-color variant",
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        background: "var(--s-color-fill-highlight, #6366f1)",
        padding: "16px",
        borderRadius: "8px",
      }}
    >
      <ButtonIcon
        icon="close"
        appearance="plain"
        variant="on-color"
        size="md"
        aria-label="Close"
      />
      <ButtonIcon
        icon="more_vert"
        appearance="plain"
        variant="on-color"
        size="md"
        aria-label="More options"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'The `on-color` variant is designed for placement on colored or dark backgrounds. Use with `appearance="plain"` only.',
      },
    },
  },
};

// --- Full matrix ---

export const FullMatrix: Story = {
  name: "Full Matrix",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {(["plain", "default"] satisfies ButtonIconAppearance[]).map(
        (appearance) => (
          <div
            key={appearance}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <span style={{ width: "64px", fontSize: "12px", color: "#888" }}>
              {appearance}
            </span>
            {ALL_VARIANTS.map((variant) => (
              <ButtonIcon
                key={variant}
                icon="bolt"
                appearance={appearance}
                variant={variant}
                size="md"
                aria-label={`${appearance} ${variant}`}
              />
            ))}
          </div>
        ),
      )}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Full matrix of all appearance × variant combinations.",
      },
    },
  },
};
