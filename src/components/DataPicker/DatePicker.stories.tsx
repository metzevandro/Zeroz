import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import DatePicker from "./DataPicker";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof DatePicker> = {
  title: "Components/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**DatePicker** is a date input field with an attached calendar dropdown.

Users can type a date directly (auto-masked as \`DD/MM/YYYY\`) or pick one from the
visual calendar. The calendar supports month/year navigation arrows and a dedicated
month+year panel for faster long-range navigation.

### When to use
- Forms requiring a specific date (birth date, appointment, deadline)
- Situations where both typed and visual input are useful
- When date validation feedback is needed inline

### Best practices
- Always provide a descriptive \`label\` that tells the user what date is expected
- Use \`value\` in controlled mode to sync the date with external form state
- Combine with form validation to prevent submission of invalid dates
- Avoid using \`DatePicker\` when only a year or month is needed — use simpler selects instead
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Label displayed above the input field.",
    },
    value: {
      control: "text",
      description: "Controlled date value in `DD/MM/YYYY` format.",
    },
    disabled: {
      control: "boolean",
      description: "Disables the input and prevents calendar interaction.",
    },
    skeleton: {
      control: "boolean",
      description: "Renders the input in a skeleton/loading state.",
    },
    onChange: {
      action: "onChange",
      description:
        "Callback fired when the date changes. Receives `DD/MM/YYYY` string.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default controlled state with today's date pre-filled. */
export const Default: Story = {
  args: {
    label: "Select a date",
  },
};

/** Pre-filled with a specific date value. */
export const WithValue: Story = {
  name: "With pre-filled value",
  args: {
    label: "Birth date",
    value: "15/06/1990",
  },
};

/** Input and calendar interaction are fully disabled. */
export const Disabled: Story = {
  args: {
    label: "Date (disabled)",
    value: "01/01/2025",
    disabled: true,
  },
};

/** Renders the input in a loading/skeleton state. */
export const Skeleton: Story = {
  args: {
    label: "Loading date...",
    skeleton: true,
  },
};

/**
 * Fully controlled example showing how to wire `value` and `onChange`
 * together in a parent component.
 */
export const Controlled: Story = {
  name: "Controlled (with state)",
  render: () => {
    const [date, setDate] = useState("01/01/2025");
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <DatePicker label="Appointment date" value={date} onChange={setDate} />
        <small style={{ color: "gray" }}>Current value: {date}</small>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates full controlled usage — the displayed value and the parent state stay in sync as the user types or selects a date.",
      },
    },
  },
};

/** Multiple pickers side by side, each with independent state. */
export const MultiplePickers: Story = {
  name: "Multiple pickers",
  render: () => (
    <div style={{ display: "flex", gap: "16px" }}>
      <DatePicker label="Start date" onChange={() => {}} />
      <DatePicker label="End date" onChange={() => {}} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Shows two independent DatePicker instances side by side — useful for date range inputs.",
      },
    },
  },
};
