import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import InputNumber from "./InputNumber";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof InputNumber> = {
  title: "Components/InputNumber",
  component: InputNumber,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**InputNumber** is a numeric stepper input with increment and decrement buttons.

Values are automatically clamped within the \`[min, max]\` range on every interaction.
\`onChange\` receives a \`number | undefined\` — no string parsing needed on the consumer side.

The label is associated with the input via \`htmlFor\` / \`id\` (WCAG 2.1 SC 1.3.1).

### When to use
- Quantity selectors (e.g. items in a cart)
- Numeric settings with defined bounds (e.g. font size, timeout duration)
- Any field where only whole numbers are valid

### Best practices
- Always set \`min\` and \`max\` to communicate the valid range to the user
- Use \`label\` for accessibility — avoid relying solely on \`placeholder\`
- Use \`value\` + \`onChange\` for controlled usage inside forms
- Handle \`undefined\` in \`onChange\` — it means the field was cleared
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Label associated with the input via `htmlFor` / `id`.",
    },
    min: {
      control: "number",
      description: "Minimum allowed value (inclusive).",
    },
    max: {
      control: "number",
      description: "Maximum allowed value (inclusive).",
    },
    placeholder: {
      control: "text",
      description: "Placeholder shown when empty.",
    },
    disabled: {
      control: "boolean",
      description: "Disables the input and both buttons.",
    },
    error: {
      control: "boolean",
      description: "Renders the input in error state.",
    },
    textError: {
      control: "text",
      description: "Validation message shown below when `error` is true.",
    },
    value: { control: "number", description: "Controlled numeric value." },
    onChange: {
      action: "onChange",
      description:
        "Fired on every value change. Receives `number | undefined`.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputNumber>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default stepper with no bounds. */
export const Default: Story = {
  args: {
    label: "Quantity",
  },
};

/** Bounded between 1 and 10. */
export const WithBounds: Story = {
  name: "With min / max",
  args: {
    label: "Items",
    min: 1,
    max: 10,
  },
};

/** Disabled. */
export const Disabled: Story = {
  args: {
    label: "Quantity (unavailable)",
    min: 1,
    max: 10,
    disabled: true,
  },
};

/** Error state. */
export const WithError: Story = {
  name: "Error state",
  args: {
    label: "Quantity",
    error: true,
    textError: "Value must be at least 1.",
  },
};

/** Fully controlled with number state. */
export const Controlled: Story = {
  name: "Controlled (with state)",
  render: () => {
    const [qty, setQty] = useState<number | undefined>(1);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <InputNumber
          label="Quantity"
          min={1}
          max={99}
          value={qty}
          onChange={setQty}
        />
        <small style={{ color: "gray" }}>Current value: {qty ?? "empty"}</small>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "`value` and `onChange` both use `number | undefined` — no string conversion needed on the consumer side.",
      },
    },
  },
};

/** Multiple independent steppers. */
export const MultipleSteppers: Story = {
  name: "Multiple steppers",
  render: () => (
    <div style={{ display: "flex", gap: "24px" }}>
      <InputNumber label="Adults" min={0} max={10} />
      <InputNumber label="Children" min={0} max={10} />
      <InputNumber label="Infants" min={0} max={5} />
    </div>
  ),
};
