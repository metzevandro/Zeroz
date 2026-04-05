import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import InputSelect from "./InputSelect";
import "../../styles.scss";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof InputSelect> = {
  title: "Components/InputSelect",
  component: InputSelect,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**InputSelect** is a fully custom select field with a styled dropdown panel.

Unlike a native \`<select>\`, this component renders its own option list,
giving you complete visual control on both desktop and mobile — no OS picker,
no unstyled native dropdown.

On **mobile** (≤ 490px), the dropdown slides up as a bottom sheet anchored
to the viewport, with larger touch targets for easier selection.

### When to use
- Single-option selection from a known list
- When you need visual consistency with the rest of the design system
- When native \`<select>\` styling is insufficient (always, on mobile)

### Best practices
- Always provide a \`label\` for accessibility
- Keep option lists short (< 10) — use a searchable dropdown for longer lists
- Use \`value\` + \`onChange\` for controlled usage inside forms
        `,
      },
    },
  },
  argTypes: {
    label: { control: "text", description: "Label above the field." },
    options: { control: "object", description: "Array of option strings." },
    value: { control: "text", description: "Controlled selected value." },
    disabled: { control: "boolean", description: "Disables the field." },
    error: {
      control: "boolean",
      description: "Renders the field in error state.",
    },
    errorMessage: {
      control: "text",
      description: "Validation message shown when `error` is true.",
    },
    onChange: {
      action: "onChange",
      description: "Fires when an option is selected.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputSelect>;

const countries = ["Brazil", "United States", "Portugal", "Germany", "Japan"];

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default uncontrolled field. */
export const Default: Story = {
  args: { label: "Country", options: countries },
};

/** Pre-selected value. */
export const WithValue: Story = {
  name: "With pre-selected value",
  args: { label: "Country", options: countries, value: "Brazil" },
};

/** Error state. */
export const WithError: Story = {
  name: "Error state",
  args: {
    label: "Country",
    options: countries,
    error: true,
    errorMessage: "Please select a valid country.",
  },
};

/** Disabled. */
export const Disabled: Story = {
  args: { label: "Country", options: countries, disabled: true },
};

/** Controlled with external state. */
export const Controlled: Story = {
  name: "Controlled (with state)",
  render: () => {
    const [val, setVal] = useState("");
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <InputSelect
          label="Country"
          options={countries}
          value={val}
          onChange={setVal}
        />
        <small style={{ color: "gray" }}>Selected: {val || "none"}</small>
      </div>
    );
  },
};

/** Long list to validate scroll behavior inside the dropdown. */
export const LongList: Story = {
  name: "Long option list",
  args: {
    label: "Framework",
    options: [
      "React",
      "Vue",
      "Angular",
      "Svelte",
      "SolidJS",
      "Qwik",
      "Astro",
      "Remix",
      "Next.js",
      "Nuxt",
      "SvelteKit",
      "Ember",
      "Backbone",
      "Preact",
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "The dropdown panel scrolls when there are more options than fit in the 240px max-height.",
      },
    },
  },
};
