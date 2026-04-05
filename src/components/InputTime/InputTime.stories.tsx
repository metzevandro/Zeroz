import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import InputTime from "./InputTime";
import "../../styles.scss";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof InputTime> = {
  title: "Components/InputTime",
  component: InputTime,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**InputTime** is a time selection field with a drum-roll picker dropdown.

The picker uses infinite-scroll columns (iOS-style) for hours and minutes —
the list loops seamlessly so the user can scroll in either direction without
hitting a boundary. Items snap to the center on scroll end.

Direct typing is also supported with auto-masking (\`HH:MM\`).

### When to use
- Time selection in forms (appointments, schedules, reminders)
- When a visual picker improves usability over a plain text field

### Best practices
- Always provide a descriptive \`label\` and a \`placeholder\` like \`"HH:MM"\`
- Use \`value\` + \`onChange\` for controlled usage in forms
- Validate the resulting string as \`HH:MM\` before submitting
        `,
      },
    },
  },
  argTypes: {
    label: { control: "text", description: "Label above the input." },
    placeholder: {
      control: "text",
      description: "Placeholder shown when empty.",
    },
    disabled: { control: "boolean", description: "Disables the input." },
    error: { control: "boolean", description: "Applies error styling." },
    textError: {
      control: "text",
      description: "Validation message when `error` is true.",
    },
    value: {
      control: "text",
      description: "Controlled value in `HH:MM` format.",
    },
    onChange: {
      action: "onChange",
      description: "Fires on every value change.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputTime>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default uncontrolled picker. */
export const Default: Story = {
  args: {
    label: "Start time",
    placeholder: "HH:MM",
  },
};

/** Pre-filled with a specific time. */
export const WithValue: Story = {
  name: "With pre-filled value",
  args: {
    label: "Meeting time",
    placeholder: "HH:MM",
    value: "09:30",
  },
};

/** Error state. */
export const WithError: Story = {
  name: "Error state",
  args: {
    label: "Start time",
    placeholder: "HH:MM",
    error: true,
    textError: "Please select a valid time.",
  },
};

/** Disabled. */
export const Disabled: Story = {
  args: {
    label: "Time (unavailable)",
    placeholder: "HH:MM",
    disabled: true,
    value: "14:00",
  },
};

/** Fully controlled with external state. */
export const Controlled: Story = {
  name: "Controlled (with state)",
  render: () => {
    const [time, setTime] = useState("10:00");
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <InputTime
          label="Appointment time"
          placeholder="HH:MM"
          value={time}
          onChange={setTime}
        />
        <small style={{ color: "gray" }}>
          Current value: {time || "empty"}
        </small>
      </div>
    );
  },
};

/** Two time pickers for a range (start / end). */
export const TimeRange: Story = {
  name: "Time range",
  render: () => {
    const [start, setStart] = useState("09:00");
    const [end, setEnd] = useState("17:00");
    return (
      <div style={{ display: "flex", gap: "16px" }}>
        <InputTime
          label="Start"
          placeholder="HH:MM"
          value={start}
          onChange={setStart}
        />
        <InputTime
          label="End"
          placeholder="HH:MM"
          value={end}
          onChange={setEnd}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Two independent pickers side by side for a start/end time range.",
      },
    },
  },
};
