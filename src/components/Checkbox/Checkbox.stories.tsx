import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Checkbox from "./Checkbox";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Checkbox** is an accessible, controlled checkbox input.

It supports indeterminate state, disabled and no-events modifiers,
Enter key toggling via keyboard, and sync with an external \`modelValue\`.

A unique \`id\` is auto-generated via \`useId()\` when none is provided,
ensuring the \`<label>\` and \`<input>\` are always properly associated (WCAG 2.1 SC 1.3.1).

### When to use
- Selecting one or more options from a list
- Toggling a boolean setting (e.g. "Remember me", "Accept terms")
- "Select all" patterns using the \`indeterminate\` state

### Best practices
- Always provide a \`label\` — it is required for accessibility
- Use \`modelValue\` + \`onUpdate\` for controlled usage in forms
- Use \`indeterminate\` only for "select all" parent checkboxes, not as a standalone state
- Avoid \`noEvents\` unless you are building a custom interaction layer on top
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Label text rendered next to the checkbox.",
    },
    modelValue: {
      control: "boolean",
      description: "Controlled checked state.",
    },
    disabled: {
      control: "boolean",
      description: "Disables the checkbox.",
    },
    indeterminate: {
      control: "boolean",
      description: "Renders the checkbox in the indeterminate (mixed) state.",
    },
    noEvents: {
      control: "boolean",
      description: "Suppresses pointer events on the wrapper.",
    },
    required: {
      control: "boolean",
      description: "Marks the checkbox as required in a form context.",
    },
    onUpdate: {
      action: "onUpdate",
      description:
        "Fired when the checked state changes. Receives the new boolean value.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default unchecked state with a label. */
export const Default: Story = {
  args: {
    label: "Accept terms and conditions",
  },
};

/** Pre-checked via `modelValue`. */
export const Checked: Story = {
  args: {
    label: "Subscribe to newsletter",
    modelValue: true,
  },
};

/** Disabled and unchecked. */
export const Disabled: Story = {
  args: {
    label: "Unavailable option",
    disabled: true,
  },
};

/** Disabled and pre-checked. */
export const DisabledChecked: Story = {
  name: "Disabled (checked)",
  args: {
    label: "Locked setting",
    modelValue: true,
    disabled: true,
  },
};

/** Indeterminate state — used in "select all" patterns. */
export const Indeterminate: Story = {
  args: {
    label: "Select all",
    indeterminate: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The indeterminate state is set via the native `el.indeterminate` DOM property. Use it for parent checkboxes in a group where only some children are selected.",
      },
    },
  },
};

/** Without a label — checkbox only. */
export const NoLabel: Story = {
  name: "No label",
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "When `label` is omitted, only the checkbox is rendered. Ensure the parent element or an `aria-label` provides accessible context.",
      },
    },
  },
};

/** Fully controlled example with external state. */
export const Controlled: Story = {
  name: "Controlled (with state)",
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Checkbox
          label="I agree to the terms"
          modelValue={checked}
          onUpdate={setChecked}
        />
        <small style={{ color: "gray" }}>
          Current value: {checked ? "checked" : "unchecked"}
        </small>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates full controlled usage — `modelValue` and `onUpdate` keep the component in sync with external state.",
      },
    },
  },
};

/** Group of checkboxes with a select-all indeterminate parent. */
export const SelectAll: Story = {
  name: "Select all pattern",
  render: () => {
    const options = ["Option A", "Option B", "Option C"];
    const [selected, setSelected] = useState<string[]>([]);

    const allChecked = selected.length === options.length;
    const someChecked = selected.length > 0 && !allChecked;

    const toggleAll = (checked: boolean) => {
      setSelected(checked ? [...options] : []);
    };

    const toggleOne = (option: string, checked: boolean) => {
      setSelected((prev) =>
        checked ? [...prev, option] : prev.filter((o) => o !== option),
      );
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Checkbox
          label="Select all"
          modelValue={allChecked}
          indeterminate={someChecked}
          onUpdate={toggleAll}
        />
        <div
          style={{
            paddingLeft: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          {options.map((option) => (
            <Checkbox
              key={option}
              label={option}
              modelValue={selected.includes(option)}
              onUpdate={(checked) => toggleOne(option, checked)}
            />
          ))}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Classic select-all pattern using the `indeterminate` prop on the parent checkbox when only some children are selected.",
      },
    },
  },
};
