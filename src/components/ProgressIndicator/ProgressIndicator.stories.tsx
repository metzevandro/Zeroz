import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import ProgressIndicator from "./ProgressIndicator";
import { ProgressIndicatorState } from "./ProgressIndicator.types";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof ProgressIndicator> = {
  title: "Components/ProgressIndicator",
  component: ProgressIndicator,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**ProgressIndicator** renders a single step in a multi-step flow.

Each step has a state-driven icon, a label, and an optional description.

| State | Icon | Use case |
|---|---|---|
| \`default\` | Circle (outline) | Step not yet reached |
| \`current\` | Trip origin | Currently active step |
| \`error\` | Error (filled) | Step has a validation error |
| \`completed\` | Check circle (filled) | Step completed |
| \`disable\` | Circle (outline, muted) | Step not reachable |

### When to use
- Multi-step forms or wizards
- Checkout flows, onboarding sequences, or setup wizards

### Best practices
- Always show one \`"current"\` step at a time
- Use \`widthFull\` to distribute steps evenly across a stepper row
- Add \`onClick\` only on reachable steps (completed or current)
        `,
      },
    },
  },
  argTypes: {
    step: { control: "text", description: "Step label." },
    description: {
      control: "text",
      description: "Supporting text below the label.",
    },
    state: {
      control: "select",
      options: ["default", "current", "error", "completed", "disable"],
      description: "Visual state of the step.",
    },
    direction: {
      control: "radio",
      options: ["row", "column"],
      description: "Layout direction.",
    },
    widthFull: {
      control: "boolean",
      description: "Stretches the indicator to fill available width.",
    },
    onClick: { action: "onClick" },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressIndicator>;

// ─── Stories ──────────────────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    step: "Details",
    description: "Fill in your details",
    state: "default",
    direction: "row",
  },
};

export const Current: Story = {
  args: {
    step: "Payment",
    description: "Enter payment info",
    state: "current",
    direction: "row",
  },
};

export const Completed: Story = {
  args: {
    step: "Details",
    description: "All set",
    state: "completed",
    direction: "row",
  },
};

export const Error: Story = {
  args: {
    step: "Payment",
    description: "Card declined",
    state: "error",
    direction: "row",
  },
};

export const Disabled: Story = {
  args: {
    step: "Confirm",
    description: "Not yet available",
    state: "disable",
    direction: "row",
  },
};

/** All states side by side for visual comparison. */
export const AllStates: Story = {
  name: "All states",
  render: () => {
    const states: ProgressIndicatorState[] = [
      "default",
      "current",
      "error",
      "completed",
      "disable",
    ];
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {states.map((state) => (
          <ProgressIndicator
            key={state}
            step={state.charAt(0).toUpperCase() + state.slice(1)}
            description={`State: ${state}`}
            state={state}
            direction="row"
          />
        ))}
      </div>
    );
  },
};

export const HorizontalStepper: Story = {
  name: "Horizontal stepper",
  render: () => (
    <div style={{ display: "flex", width: "100%" }}>
      <ProgressIndicator
        step="Details"
        description="Your info"
        state="completed"
        direction="row"
        widthFull
        onClick={() => {}}
      />
      <ProgressIndicator
        step="Payment"
        description="Billing"
        state="current"
        direction="row"
        widthFull
        onClick={() => {}}
      />
      <ProgressIndicator
        step="Review"
        description="Check order"
        state="default"
        direction="row"
        widthFull
      />
      <ProgressIndicator
        step="Confirm"
        description="All done"
        state="disable"
        direction="row"
        widthFull
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Use `widthFull` on each step to distribute them evenly. `onClick` should only be set on reachable steps.",
      },
    },
  },
};

export const VerticalStepper: Story = {
  name: "Vertical stepper",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ProgressIndicator
        step="Account"
        description="Create your account"
        state="completed"
        direction="column"
        onClick={() => {}}
      />
      <ProgressIndicator
        step="Profile"
        description="Tell us about yourself"
        state="current"
        direction="column"
        onClick={() => {}}
      />
      <ProgressIndicator
        step="Confirm"
        description="Review and submit"
        state="default"
        direction="column"
      />
    </div>
  ),
};
