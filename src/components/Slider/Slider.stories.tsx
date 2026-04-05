import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Slider from "./Slider";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Slider** is a range input with a custom drag handle, track fill,
min/max labels, and a companion numeric input.

All interactions — mouse drag, touch drag, arrow keys, and direct numeric input —
snap to \`step\` and clamp within \`[min, max]\`.

\`value\` and \`onChange\` use \`number\` directly, so no \`parseInt\` is needed on the consumer side.

### When to use
- Selecting a value within a continuous numeric range
- Volume, brightness, opacity, or similar bounded settings
- Any case where both precise input (number field) and approximate input (drag) are useful

### Best practices
- Always provide \`min\`, \`max\`, and \`step\` — they define the valid range
- Use \`label\` for accessibility — it associates with the number input via \`htmlFor\`
- The drag handle also has \`role="slider"\` and \`aria-value*\` attributes for screen readers
        `,
      },
    },
  },
  argTypes: {
    min: { control: "number", description: "Minimum value (inclusive)." },
    max: { control: "number", description: "Maximum value (inclusive)." },
    step: { control: "number", description: "Step increment." },
    value: { control: "number", description: "Controlled current value." },
    label: { control: "text", description: "Label above the slider." },
    onChange: {
      action: "onChange",
      description: "Fires on every value change. Receives a `number`.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default controlled slider. */
export const Default: Story = {
  render: () => {
    const [val, setVal] = useState(50);
    return (
      <Slider
        label="Volume"
        min={0}
        max={100}
        step={1}
        value={val}
        onChange={setVal}
      />
    );
  },
};

/** Step of 10 — handle snaps to multiples of 10. */
export const SteppedValues: Story = {
  name: "Stepped (step=10)",
  render: () => {
    const [val, setVal] = useState(40);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Slider
          label="Opacity"
          min={0}
          max={100}
          step={10}
          value={val}
          onChange={setVal}
        />
        <small style={{ color: "gray" }}>Value: {val}</small>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "The handle snaps to the nearest multiple of `step` on every interaction.",
      },
    },
  },
};

/** Negative range. */
export const NegativeRange: Story = {
  name: "Negative range",
  render: () => {
    const [val, setVal] = useState(0);
    return (
      <Slider
        label="Temperature offset"
        min={-50}
        max={50}
        step={5}
        value={val}
        onChange={setVal}
      />
    );
  },
};

/** Without a label. */
export const NoLabel: Story = {
  name: "No label",
  render: () => {
    const [val, setVal] = useState(25);
    return <Slider min={0} max={100} step={1} value={val} onChange={setVal} />;
  },
};

/** Multiple sliders in a settings panel. */
export const SettingsPanel: Story = {
  name: "Settings panel",
  render: () => {
    const [volume, setVolume] = useState(70);
    const [brightness, setBrightness] = useState(50);
    const [bass, setBass] = useState(30);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "360px",
        }}
      >
        <Slider
          label="Volume"
          min={0}
          max={100}
          step={1}
          value={volume}
          onChange={setVolume}
        />
        <Slider
          label="Brightness"
          min={0}
          max={100}
          step={5}
          value={brightness}
          onChange={setBrightness}
        />
        <Slider
          label="Bass"
          min={-10}
          max={10}
          step={1}
          value={bass}
          onChange={setBass}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Multiple independent sliders in a settings context — each has a unique auto-generated id.",
      },
    },
  },
};
