import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { DropdownItem } from "./subcomponents/DropdownItem";
import { DropdownTitle } from "./subcomponents/DropdownTitle";
import "../../styles.scss";
import { Button } from "../Button";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Dropdown** is a conditional menu container that renders its children only when \`visible\` is \`true\`.

Compose it with the companion sub-components to build structured menus:
- \`<DropdownTitle>\` — non-interactive section heading
- \`<DropdownItem>\` — interactive menu entry, optionally with a leading icon

### When to use
- Contextual action menus (right-click, overflow menus)
- Navigation dropdowns triggered by a button or avatar
- Options menus with grouped sections

### Best practices
- Always control the \`visible\` prop externally — the component itself is stateless
- Use \`<DropdownTitle>\` to separate logically distinct groups of items
- Keep item labels short and action-oriented (e.g. "Edit", "Delete", "Sign out")
- Pair with a click-outside handler to close the menu when the user clicks elsewhere
        `,
      },
    },
  },
  argTypes: {
    visible: {
      control: "boolean",
      description: "Controls whether the menu is rendered.",
    },
    children: {
      control: false,
      description:
        "Menu content — compose with `<DropdownTitle>` and `<DropdownItem>`.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default open state with titles and icons. */
export const Default: Story = {
  args: {
    visible: true,
    children: (
      <>
        <DropdownTitle label="Account" />
        <DropdownItem icon="person" label="Profile" />
        <DropdownItem icon="settings" label="Settings" />
        <DropdownTitle label="Session" />
        <DropdownItem icon="logout" label="Sign out" />
      </>
    ),
  },
};

/** Menu items without icons. */
export const NoIcons: Story = {
  name: "No icons",
  args: {
    visible: true,
    children: (
      <>
        <DropdownItem label="Copy" />
        <DropdownItem label="Paste" />
        <DropdownItem label="Delete" />
      </>
    ),
  },
};

/** Hidden state — nothing is rendered into the DOM. */
export const Hidden: Story = {
  args: {
    visible: false,
    children: (
      <>
        <DropdownItem label="This will not render" />
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "When `visible` is `false`, the component returns `null` — no DOM nodes are rendered.",
      },
    },
  },
};

/** Fully interactive controlled example. */
export const Controlled: Story = {
  name: "Controlled (toggle)",
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div style={{ position: "relative" }}>
        <Button onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? "Close menu" : "Open menu"}
        </Button>
        <Dropdown visible={isOpen}>
          <DropdownTitle label="Actions" />
          <DropdownItem
            icon="edit"
            label="Edit"
            onClick={() => setIsOpen(false)}
          />
          <DropdownItem
            icon="content_copy"
            label="Duplicate"
            onClick={() => setIsOpen(false)}
          />
          <DropdownItem
            icon="delete"
            label="Delete"
            onClick={() => setIsOpen(false)}
          />
        </Dropdown>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates external state control — the `visible` prop is driven by a toggle button. Each item closes the menu via its `onClick` callback.",
      },
    },
  },
};

/** Single item, no title. */
export const SingleItem: Story = {
  name: "Single item",
  args: {
    visible: true,
    children: <DropdownItem icon="logout" label="Sign out" />,
  },
};
