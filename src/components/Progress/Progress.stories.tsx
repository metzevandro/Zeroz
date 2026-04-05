import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useState } from "react";
import Progress from "./Progress";
import "../../styles.scss";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Progress** displays the completion status of a task as a horizontal bar.

Supports four visual states:

| State | Props | Description |
|---|---|---|
| Determinate | \`value\` 0–99 | Fills proportionally to the value |
| Success | \`value={100}\` | Applied automatically at 100% |
| Error | \`error\` | Indicates a failed operation |
| Indeterminate | \`indeterminate\` | Animated bar for unknown progress |

Values outside \`[0, 100]\` are clamped automatically.

### When to use
- File uploads or downloads with known progress
- Multi-step form completion indicator
- Background tasks where only start/end are known (use \`indeterminate\`)

### Best practices
- Pair with a visible percentage or step label so users understand the context
- Use \`indeterminate\` only when you genuinely cannot know the progress value
- Transition to \`error\` state (not just hide the bar) when an operation fails
        `,
      },
    },
  },
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "Progress value between `0` and `100`.",
    },
    error: {
      control: "boolean",
      description: "Renders the bar in error styling.",
    },
    indeterminate: {
      control: "boolean",
      description: "Renders an animated indeterminate bar.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default determinate bar at 65%. */
export const Default: Story = {
  args: { value: 65 },
};

/** Success state — automatically applied when value reaches 100. */
export const Success: Story = {
  args: { value: 100 },
};

/** Error state — indicates a failed operation. */
export const Error: Story = {
  args: { value: 40, error: true },
};

/** Indeterminate — animated bar for operations with unknown duration. */
export const Indeterminate: Story = {
  args: { value: 0, indeterminate: true },
  parameters: {
    docs: {
      description: {
        story:
          "Use when the total progress cannot be determined — e.g. an API call with no progress event. The `value` prop is ignored in this mode.",
      },
    },
  },
};

/** Empty state — 0%. */
export const Empty: Story = {
  args: { value: 0 },
};

/** Out-of-range values are clamped to [0, 100]. */
export const Clamped: Story = {
  name: "Out-of-range (clamped)",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div>
        <small style={{ color: "gray" }}>value={-20} → clamped to 0</small>
        <Progress value={-20} />
      </div>
      <div>
        <small style={{ color: "gray" }}>value={150} → clamped to 100</small>
        <Progress value={150} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Values outside `[0, 100]` are silently clamped — no runtime error.",
      },
    },
  },
};

/** Simulated upload progress with live animation. */
export const Animated: Story = {
  name: "Animated (simulated upload)",
  render: () => {
    const [value, setValue] = useState(0);
    const [running, setRunning] = useState(false);
    const [done, setDone] = useState(false);
    const [failed, setFailed] = useState(false);

    const start = () => {
      setValue(0);
      setDone(false);
      setFailed(false);
      setRunning(true);
    };

    useEffect(() => {
      if (!running) return;
      if (value >= 100) {
        setRunning(false);
        setDone(true);
        return;
      }
      const timer = setTimeout(
        () =>
          setValue((prev) =>
            Math.min(prev + Math.floor(Math.random() * 12) + 3, 100),
          ),
        200,
      );
      return () => clearTimeout(timer);
    }, [running, value]);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          width: "320px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <small style={{ color: "gray" }}>
            {done
              ? "Upload complete!"
              : failed
                ? "Upload failed."
                : `${value}%`}
          </small>
        </div>
        <Progress value={value} error={failed} />
        <div style={{ display: "flex", gap: "8px" }}>
          <button onClick={start} disabled={running}>
            Start
          </button>
          <button
            onClick={() => {
              setRunning(false);
              setFailed(true);
            }}
            disabled={!running}
          >
            Fail
          </button>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Simulates a file upload with random increments. Click 'Fail' mid-upload to see the error state transition.",
      },
    },
  },
};
