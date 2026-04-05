import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";
import type { BadgeType, BadgeVariant } from "./Badge.types";
import "../../styles.scss";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",

    docs: {
      description: {
        component:
          "A compact inline label used to communicate status, category, or metadata. Supports semantic color variants and two visual styles.",
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Text content displayed inside the badge",
      table: { defaultValue: { summary: "Label" } },
    },
    type: {
      control: "radio",
      options: ["default", "light"] satisfies BadgeType[],
      description: "Visual style — solid fill or light bordered",
      table: { defaultValue: { summary: "default" } },
    },
    variant: {
      control: "select",
      options: [
        "default",
        "primary",
        "success",
        "warning",
      ] satisfies BadgeVariant[],
      description: "Semantic color intent of the badge",
      table: { defaultValue: { summary: "default" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// --- Playground ---

export const Playground: Story = {
  name: "Playground",
  args: {
    label: "Badge",
    type: "default",
    variant: "primary",
  },
};

// --- Individual variants (default type) ---

export const Default: Story = {
  name: "Default",
  args: { label: "Default", type: "default", variant: "default" },
};

export const Primary: Story = {
  name: "Primary",
  args: { label: "New", type: "default", variant: "primary" },
};

export const Success: Story = {
  name: "Success",
  args: { label: "Active", type: "default", variant: "success" },
};

export const Warning: Story = {
  name: "Warning",
  args: { label: "Pending", type: "default", variant: "warning" },
};

// --- Light type variants ---

export const DefaultLight: Story = {
  name: "Default — Light",
  args: { label: "Default", type: "light", variant: "default" },
};

export const PrimaryLight: Story = {
  name: "Primary — Light",
  args: { label: "New", type: "light", variant: "primary" },
};

export const SuccessLight: Story = {
  name: "Success — Light",
  args: { label: "Active", type: "light", variant: "success" },
};

export const WarningLight: Story = {
  name: "Warning — Light",
  args: { label: "Pending", type: "light", variant: "warning" },
};

// --- Full combination matrix ---

const ALL_VARIANTS: BadgeVariant[] = [
  "default",
  "primary",
  "success",
  "warning",
];
const ALL_TYPES: BadgeType[] = ["default", "light"];

export const AllCombinations: Story = {
  name: "All Combinations",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {ALL_TYPES.map((type) => (
        <div
          key={type}
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <h4>{type}</h4>
          {ALL_VARIANTS.map((variant) => (
            <Badge
              key={`${type}-${variant}`}
              label={variant}
              type={type}
              variant={variant}
            />
          ))}
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Full matrix of all valid type × variant combinations.",
      },
    },
  },
};

// --- Real-world usage examples ---

export const InContext: Story = {
  name: "Real-world Examples",
  render: () => (
    <div style={{ display: "grid", gap: "16px", width: "300px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          justifyContent: "space-between",
        }}
      >
        <h4>Order #1042</h4>
        <Badge label="Shipped" type="light" variant="success" />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          justifyContent: "space-between",
        }}
      >
        <h4>Payment</h4>
        <Badge label="Pending" type="light" variant="warning" />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          justifyContent: "space-between",
        }}
      >
        <h4>Dashboard</h4>
        <Badge label="Beta" type="default" variant="primary" />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          justifyContent: "space-between",
        }}
      >
        <h4>Report Q3</h4>
        <Badge label="Draft" type="default" variant="default" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Examples of Badge used alongside real content.",
      },
    },
  },
};
