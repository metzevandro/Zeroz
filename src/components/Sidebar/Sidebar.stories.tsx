import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { SidebarTitle } from "./subcomponents/SidebarTitle";
import { SidebarItem } from "./subcomponents/SidebarItem";
import { SidebarSubItem } from "./subcomponents/SidebarSubItem";
import "../../styles.scss";
import { Button } from "../Button";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
**Sidebar** is the main navigation drawer for the application.

Compose it with the companion sub-components:

| Component | Purpose |
|---|---|
| \`<SidebarTitle>\` | Section heading above a group of items |
| \`<SidebarItem>\` | Navigation item, optionally with sub-items (accordion) |
| \`<SidebarSubItem>\` | Nested navigation item inside an expanded \`SidebarItem\` |

Items with \`children\` behave as accordions. Only one item can be expanded
at a time — clicking an open item collapses it. The accordion state is managed
centrally by \`Sidebar\` and injected into items via \`React.cloneElement\`.

### When to use
- As the primary navigation structure in a dashboard or admin layout
- Alongside \`<Header>\` and \`<AppShell>\` for a complete app frame

### Best practices
- Use \`<SidebarTitle>\` to group related navigation items
- Keep item labels short — one or two words
- Mark the active \`<SidebarSubItem>\` to reflect the current route
        `,
      },
    },
  },
  argTypes: {
    toggle: { control: "boolean", description: "Controls open/close state." },
    brand: { control: "text", description: "Logo image URL." },
    brandSize: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Brand logo size.",
    },
    children: { control: false },
    setToggleSidebar: { action: "setToggleSidebar" },
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const logo = "https://placehold.co/300x120/png";

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    const [active, setActive] = useState("dashboard");
    return (
      <div style={{ height: "100vh", position: "relative" }}>
        <Sidebar
          brand={logo}
          brandSize="md"
          toggle={open}
          setToggleSidebar={setOpen}
        >
          <SidebarTitle title="Main" />
          <SidebarItem
            title="Dashboard"
            icon="home"
            fillIcon={false}
            onClick={() => setActive("dashboard")}
          />
          <SidebarItem
            title="Analytics"
            icon="bar_chart"
            fillIcon={false}
            onClick={() => setActive("analytics")}
          />

          <SidebarTitle title="Settings" />
          <SidebarItem title="Account" icon="manage_accounts" fillIcon={false}>
            <SidebarSubItem
              title="Profile"
              active={active === "profile"}
              onClick={() => setActive("profile")}
            />
            <SidebarSubItem
              title="Security"
              active={active === "security"}
              onClick={() => setActive("security")}
            />
            <SidebarSubItem
              title="Billing"
              active={active === "billing"}
              onClick={() => setActive("billing")}
            />
          </SidebarItem>
          <SidebarItem title="Integrations" icon="extension" fillIcon={false}>
            <SidebarSubItem
              title="API keys"
              active={active === "api"}
              onClick={() => setActive("api")}
            />
            <SidebarSubItem
              title="Webhooks"
              active={active === "webhooks"}
              onClick={() => setActive("webhooks")}
            />
          </SidebarItem>
        </Sidebar>
      </div>
    );
  },
};

export const Closed: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ height: "100vh", position: "relative" }}>
        <Button
          style={{ width: "fit-content" }}
          variant="primary"
          size="md"
          onClick={() => setOpen(true)}
        >
          Open sidebar
        </Button>
        <Sidebar
          brand={logo}
          brandSize="md"
          toggle={open}
          setToggleSidebar={setOpen}
        >
          <SidebarTitle title="Main" />
          <SidebarItem title="Dashboard" icon="home" fillIcon={false} />
          <SidebarItem title="Reports" icon="description" fillIcon={false} />
        </Sidebar>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Sidebar starts closed. Click the button to open it, then use the overlay or close button to dismiss.",
      },
    },
  },
  globals: {
    viewport: { value: "mobile5", isRotated: false },
  },
};

export const FlatNavigation: Story = {
  name: "Flat navigation (no sub-items)",
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div style={{ height: "100vh", position: "relative" }}>
        <Sidebar
          brand={logo}
          brandSize="md"
          toggle={open}
          setToggleSidebar={setOpen}
        >
          <SidebarTitle title="Navigation" />
          <SidebarItem title="Home" icon="home" fillIcon={false} />
          <SidebarItem title="Users" icon="people" fillIcon={false} />
          <SidebarItem title="Orders" icon="shopping_bag" fillIcon={false} />
          <SidebarItem title="Reports" icon="description" fillIcon={false} />
          <SidebarItem title="Settings" icon="settings" fillIcon={false} />
        </Sidebar>
      </div>
    );
  },
};
