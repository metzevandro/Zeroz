import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Header from "./Header";
import { HeaderProfile } from "./subcomponents/HeaderProfile";
import Dropdown from "../Dropdown/Dropdown";
import Breadcrumb from "../Breadcrumb";
import { DropdownItem } from "../Dropdown/subcomponents/DropdownItem";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
**Header** is the top-level application bar composed of three zones:

- **Left** — hamburger menu button (fires \`onClick\`)
- **Center** — breadcrumb slot (any \`ReactNode\`)
- **Right** — \`children\` slot, typically a \`<HeaderProfile>\`

Pair it with \`<HeaderProfile>\` for the standard user avatar + dropdown pattern.

### When to use
- As the persistent top bar in a dashboard or admin layout
- Whenever you need a global navigation trigger (sidebar toggle) and breadcrumb context

### Best practices
- Keep the \`breadcrumb\` slot concise — it should reflect the current page context
- Use \`<HeaderProfile>\` for user identity; avoid placing unrelated actions in the right slot
- Pass \`skeleton\` to \`<HeaderProfile>\` while user data is loading to prevent layout shift
        `,
      },
    },
  },
  argTypes: {
    onClick: {
      action: "onClick",
      description: "Fired when the hamburger menu button is clicked.",
    },
    breadcrumb: {
      control: false,
      description: "Breadcrumb content rendered in the center of the header.",
    },
    children: {
      control: false,
      description: "Right-side slot — typically `<HeaderProfile>`.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

// ─── Helpers ──────────────────────────────────────────────────────────────────

const defaultBreadcrumb = (
  <Breadcrumb
    items={[
      { pageName: "Home", href: "#" },
      { pageName: "Dashboard", href: "#" },
    ]}
  />
);

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Full header with profile dropdown. */
export const Default: Story = {
  args: {
    onClick: () => {},
    breadcrumb: defaultBreadcrumb,
    children: (
      <HeaderProfile name="Jane Doe" letter="J">
        <Dropdown visible={true}>
          <DropdownItem label="Profile" icon="person" />
          <DropdownItem label="Sign out" icon="logout" />
        </Dropdown>
      </HeaderProfile>
    ),
  },
};

/** Header with avatar image in the profile. */
export const WithAvatar: Story = {
  name: "With avatar image",
  args: {
    onClick: () => {},
    breadcrumb: defaultBreadcrumb,
    children: (
      <HeaderProfile
        name="Jane Doe"
        avatar_src="https://i.pravatar.cc/150?img=47"
      >
        <Dropdown visible={true}>
          <DropdownItem label="Profile" />
          <DropdownItem label="Sign out" />
        </Dropdown>
      </HeaderProfile>
    ),
  },
};

/** Skeleton loading state — user data not yet available. */
export const Skeleton: Story = {
  args: {
    onClick: () => {},
    breadcrumb: defaultBreadcrumb,
    children: (
      <HeaderProfile name="" letter="" skeleton>
        <Dropdown visible={true}>
          <DropdownItem label="Profile" />
        </Dropdown>
      </HeaderProfile>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Pass `skeleton` to `HeaderProfile` while user data is fetching. The name and avatar are replaced with placeholders.",
      },
    },
  },
};

/** Header without a profile — breadcrumb and menu only. */
export const NoProfile: Story = {
  name: "No profile",
  args: {
    onClick: () => {},
    breadcrumb: defaultBreadcrumb,
    children: null,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The right-side `children` slot is optional — omit it for a minimal header with only the menu button and breadcrumb.",
      },
    },
  },
};
