import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import EmptyState from "./EmptyState";
import Button from "../Button/Button";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof EmptyState> = {
  title: "Templates/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**EmptyState** communicates that a section has no content to display,
guiding users toward a relevant next action.

The \`actions\` prop accepts any \`ReactNode\`, giving consumers full control
over which buttons, links, or custom elements appear in the footer.

### When to use
- A list, table, or feed has no items to display
- A search or filter returns zero results
- A feature hasn't been set up yet

### Best practices
- Use a descriptive \`title\` that states clearly what is missing
- Use \`description\` to explain why and/or what the user can do next
- Limit actions to 1–2 buttons; avoid overwhelming the user with choices
- Use a contextually relevant icon (e.g. \`"inbox"\` for empty inbox, \`"search_off"\` for no results)
- Omit \`actions\` when there is nothing meaningful the user can do
        `,
      },
    },
  },
  argTypes: {
    icon: {
      control: "text",
      description: "Material Symbol icon name displayed at the top.",
    },
    title: {
      control: "text",
      description: "Primary heading describing the empty state.",
    },
    description: {
      control: "text",
      description: "Supporting text with context or a call to action hint.",
    },
    actions: {
      control: false,
      description:
        "Footer content — typically `<Button>` components. Accepts any `ReactNode`.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Single primary action. */
export const Default: Story = {
  args: {
    icon: "folder_open",
    title: "No projects yet",
    description: "Create your first project to get started.",
    actions: (
      <Button variant="primary" size="md">
        New project
      </Button>
    ),
  },
};

/** Two actions — primary and secondary. */
export const TwoActions: Story = {
  name: "Two actions",
  args: {
    icon: "inbox",
    title: "No messages",
    description:
      "Your inbox is empty. Start a conversation or wait for replies.",
    actions: (
      <>
        <Button variant="primary" size="md">
          Compose
        </Button>
        <Button variant="secondary" size="md">
          Refresh
        </Button>
      </>
    ),
  },
};

/** No actions — informational only. */
export const NoActions: Story = {
  name: "No actions",
  args: {
    icon: "search_off",
    title: "No results found",
    description: "Try adjusting your search terms or filters.",
  },
  parameters: {
    docs: {
      description: {
        story:
          "When `actions` is omitted, the footer is not rendered. Use this variant when there is no meaningful action the user can take.",
      },
    },
  },
};

/** Search / filter empty state. */
export const SearchEmpty: Story = {
  name: "Search empty",
  args: {
    icon: "manage_search",
    title: "No matches",
    description: "We couldn't find anything matching your query.",
    actions: (
      <Button variant="secondary" size="md">
        Clear filters
      </Button>
    ),
  },
};

/** Error-like empty state with a retry action. */
export const WithRetry: Story = {
  name: "With retry",
  args: {
    icon: "cloud_off",
    title: "Failed to load",
    description: "Something went wrong while fetching your data.",
    actions: (
      <Button variant="primary" size="md">
        Try again
      </Button>
    ),
  },
};
