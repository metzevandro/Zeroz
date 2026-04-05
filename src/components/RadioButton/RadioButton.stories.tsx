import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import RadioButton from "./RadioButton";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**RadioButton** is an accessible radio input with optional label.

Supports controlled usage via \`checked\` + \`onChange\`, disabled state,
and keyboard activation via **Enter** and **Space**.

For mutually exclusive options, manage the selected value externally and
render one \`RadioButton\` per option, passing \`checked={selected === value}\`.

### When to use
- Selecting one option from a small set (2–5 options)
- When all options should be visible simultaneously (prefer over \`InputSelect\` for ≤ 5 items)

### Best practices
- Always provide a \`label\` for accessibility
- Manage selection state externally — only one button in a group should be \`checked\`
- Use \`disabled\` consistently across the whole group when the choice is unavailable
        `,
      },
    },
  },
  argTypes: {
    label: { control: "text", description: "Label text next to the button." },
    checked: { control: "boolean", description: "Controlled checked state." },
    disabled: { control: "boolean", description: "Disables the button." },
    onChange: {
      action: "onChange",
      description: "Fires when checked state changes.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default unchecked. */
export const Default: Story = {
  args: { label: "Option A" },
};

/** Pre-checked. */
export const Checked: Story = {
  args: { label: "Selected option", checked: true },
};

/** Disabled and unchecked. */
export const Disabled: Story = {
  args: { label: "Unavailable option", disabled: true },
};

/** Disabled and checked. */
export const DisabledChecked: Story = {
  name: "Disabled (checked)",
  args: { label: "Locked selection", checked: true, disabled: true },
};

/** Without a label. */
export const NoLabel: Story = {
  name: "No label",
  args: { checked: false },
  parameters: {
    docs: {
      description: {
        story:
          "When `label` is omitted, only the radio circle is rendered. Ensure surrounding context provides accessible meaning.",
      },
    },
  },
};

/** Controlled group — single-select. */
export const ControlledGroup: Story = {
  name: "Controlled group (single-select)",
  render: () => {
    const options = ["Option A", "Option B", "Option C"];
    const [selected, setSelected] = useState("Option A");
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {options.map((opt) => (
          <RadioButton
            key={opt}
            label={opt}
            checked={selected === opt}
            onChange={() => setSelected(opt)}
          />
        ))}
        <small style={{ color: "gray", marginTop: "4px" }}>
          Selected: <strong>{selected}</strong>
        </small>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "The standard single-select pattern — only one option is `checked` at a time, managed by external state.",
      },
    },
  },
};

/** Mixed group with a disabled option. */
export const GroupWithDisabled: Story = {
  name: "Group with disabled option",
  render: () => {
    const [selected, setSelected] = useState("Monthly");
    const options = [
      { label: "Monthly", disabled: false },
      { label: "Annually", disabled: false },
      { label: "Enterprise (contact us)", disabled: true },
    ];
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {options.map(({ label, disabled }) => (
          <RadioButton
            key={label}
            label={label}
            disabled={disabled}
            checked={selected === label}
            onChange={() => !disabled && setSelected(label)}
          />
        ))}
      </div>
    );
  },
};
