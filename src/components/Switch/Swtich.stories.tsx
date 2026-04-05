import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Switch from "./Switch";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Switch** is an accessible toggle control rendered as a styled checkbox.

It supports controlled usage via \`modelValue\` + \`onUpdate\`, disabled and
no-events modifiers, Enter key toggling, and auto-generated accessible ids
via \`useId()\`.

The \`<label>\` is always associated with the \`<input>\` via \`htmlFor\` / \`id\`,
satisfying WCAG 2.1 SC 1.3.1.

### When to use
- Toggling a boolean setting on/off (dark mode, notifications, feature flags)
- Anywhere a checkbox would work but the toggle metaphor fits better

### Best practices
- Always provide a \`label\` for accessibility
- Use \`modelValue\` + \`onUpdate\` for controlled usage inside forms
- Prefer \`Switch\` over \`Checkbox\` when the action takes immediate effect
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Label text rendered next to the switch.",
    },
    modelValue: {
      control: "boolean",
      description: "Controlled on/off state.",
    },
    disabled: {
      control: "boolean",
      description: "Disables the switch.",
    },
    noEvents: {
      control: "boolean",
      description: "Suppresses pointer events on the wrapper.",
    },
    required: {
      control: "boolean",
      description: "Marks as required in a form context.",
    },
    onUpdate: {
      action: "onUpdate",
      description:
        "Fired when the state changes. Receives the new boolean value.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default off state. */
export const Default: Story = {
  args: { label: "Enable notifications" },
};

/** Pre-toggled on via `modelValue`. */
export const On: Story = {
  args: { label: "Dark mode", modelValue: true },
};

/** Disabled and off. */
export const Disabled: Story = {
  args: { label: "Unavailable setting", disabled: true },
};

/** Disabled and on. */
export const DisabledOn: Story = {
  name: "Disabled (on)",
  args: { label: "Locked setting", modelValue: true, disabled: true },
};

/** Without a label. */
export const NoLabel: Story = {
  name: "No label",
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "When `label` is omitted, only the toggle is rendered. Ensure an `aria-label` or surrounding context provides accessible meaning.",
      },
    },
  },
};

/** Fully controlled with external state. */
export const Controlled: Story = {
  name: "Controlled (with state)",
  render: () => {
    const [on, setOn] = useState(false);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Switch label="Dark mode" modelValue={on} onUpdate={setOn} />
        <small style={{ color: "gray" }}>
          Current value: {on ? "on" : "off"}
        </small>
      </div>
    );
  },
};

/** Multiple switches in a settings panel. */
export const SettingsPanel: Story = {
  name: "Settings panel",
  render: () => {
    const [settings, setSettings] = useState({
      notifications: true,
      darkMode: false,
      autoSave: true,
      analytics: false,
    });
    const toggle = (key: keyof typeof settings) =>
      setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          minWidth: "220px",
        }}
      >
        <Switch
          label="Notifications"
          modelValue={settings.notifications}
          onUpdate={() => toggle("notifications")}
        />
        <Switch
          label="Dark mode"
          modelValue={settings.darkMode}
          onUpdate={() => toggle("darkMode")}
        />
        <Switch
          label="Auto-save"
          modelValue={settings.autoSave}
          onUpdate={() => toggle("autoSave")}
        />
        <Switch
          label="Analytics"
          modelValue={settings.analytics}
          onUpdate={() => toggle("analytics")}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Multiple independent switches in a settings context — each auto-generates a unique id.",
      },
    },
  },
};
