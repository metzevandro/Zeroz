import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import InputSearch from "./InputSearch";
import "../../styles.scss";

const meta: Meta<typeof InputSearch> = {
  title: "Components/InputSearch",
  component: InputSearch,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**InputSearch** is a search input with a clear button and built-in debounce support.

It exposes two complementary callbacks designed for different use cases:

| Callback | Fires | Use for |
|---|---|---|
| \`onChange\` | Every keystroke | Local list filtering |
| \`onDebouncedChange\` | After user stops typing | API calls, URL sync |

The \`value\` prop initializes the field from an external source (e.g. a URL query param)
and keeps it in sync when that source changes — such as browser back/forward navigation.

### URL + API integration pattern
\`\`\`tsx
const [params, setParams] = useSearchParams();
const q = params.get("q") ?? "";

<InputSearch
  placeholder="Search users..."
  value={q}
  debounceMs={400}
  onDebouncedChange={(val) => {
    setParams({ q: val });  // sync URL
    fetchUsers(val);         // call API
  }}
/>
\`\`\`

### Best practices
- Use \`onChange\` alone for purely client-side filtering (no debounce needed)
- Use \`onDebouncedChange\` (with \`debounceMs\` ≥ 300) for any network call
- Initialize \`value\` from the URL so the search survives page refresh and sharing
- Always handle the empty string \`""\` in your fetch — it typically means "no filter"
        `,
      },
    },
  },
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder shown when empty.",
    },
    disabled: { control: "boolean", description: "Disables the input." },
    debounceMs: {
      control: "number",
      description: "Debounce delay in ms for `onDebouncedChange`.",
    },
    value: {
      control: "text",
      description: "Controlled value (e.g. from URL param).",
    },
    onChange: { action: "onChange", description: "Fires on every keystroke." },
    onDebouncedChange: {
      action: "onDebouncedChange",
      description: "Fires after user stops typing.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputSearch>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default uncontrolled search field. */
export const Default: Story = {
  args: {
    placeholder: "Search...",
  },
};

/** Disabled. */
export const Disabled: Story = {
  args: {
    placeholder: "Search unavailable",
    disabled: true,
  },
};

/** Local filter — onChange fires on every keystroke. */
export const LocalFilter: Story = {
  name: "Local filter (onChange)",
  render: () => {
    const items = [
      "Apple",
      "Banana",
      "Cherry",
      "Date",
      "Elderberry",
      "Fig",
      "Grape",
    ];
    const [filter, setFilter] = useState("");
    const filtered = items.filter((i) =>
      i.toLowerCase().includes(filter.toLowerCase()),
    );
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <InputSearch placeholder="Filter fruits..." onChange={setFilter} />
        <ul style={{ margin: 0, paddingLeft: "16px" }}>
          {filtered.length > 0 ? (
            filtered.map((item) => <li key={item}>{item}</li>)
          ) : (
            <li style={{ color: "gray" }}>No results</li>
          )}
        </ul>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Uses `onChange` for instant client-side filtering. No debounce needed since no network call is made.",
      },
    },
  },
};

/** Debounced — onDebouncedChange fires after the user stops typing. */
export const Debounced: Story = {
  name: "Debounced (onDebouncedChange)",
  render: () => {
    const [committed, setCommitted] = useState("");
    const [live, setLive] = useState("");
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <InputSearch
          placeholder="Search with debounce..."
          debounceMs={500}
          onChange={setLive}
          onDebouncedChange={setCommitted}
        />
        <small style={{ color: "gray" }}>
          Live (every keystroke): <strong>{live || "—"}</strong>
        </small>
        <small style={{ color: "gray" }}>
          Debounced (500ms, would call API): <strong>{committed || "—"}</strong>
        </small>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "The debounced value only updates after the user pauses for 500ms. In production this is where you'd call the API or push to the URL.",
      },
    },
  },
};

/** Initialized from an external value (simulates URL param). */
export const InitializedFromUrl: Story = {
  name: "Initialized from URL param",
  render: () => {
    // Simulates: const q = new URLSearchParams(location.search).get("q") ?? ""
    const [query, setQuery] = useState("react");
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <InputSearch
          placeholder="Search..."
          value={query}
          debounceMs={400}
          onDebouncedChange={setQuery}
        />
        <small style={{ color: "gray" }}>
          URL would be: <code>?q={query || ""}</code>
        </small>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'The field is pre-filled with `"react"` — simulating initialization from `?q=react` in the URL. Editing the field updates the query string.',
      },
    },
  },
};
