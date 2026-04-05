import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SavebarTrigger from "./SavebarTrigger";
import { Header, HeaderProfile } from "../Header";
import Breadcrumb from "../Breadcrumb";
import Dropdown from "../Dropdown/Dropdown";
import { Input } from "../Input";
import { AppShell } from "../AppShell";
import { Sidebar, SidebarItem, SidebarSubItem, SidebarTitle } from "../Sidebar";
import Page from "../Page/Page";
import type { FormData } from "./SavebarTrigger.types";
import { DropdownItem } from "../Dropdown/subcomponents/DropdownItem";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof SavebarTrigger> = {
  title: "Templates/SavebarTrigger",
  component: SavebarTrigger,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
**SavebarTrigger** is a form wrapper that shows a fixed \`SaveBar\`
whenever any named child input differs from \`initialValues\`.

### How it works

Pass \`initialValues\` with the last-saved field values.
The component compares current input values against them on every keystroke:

- **SaveBar appears** when any field differs from \`initialValues\`
- **SaveBar disappears** when all fields are reverted back to \`initialValues\`
- **After save**: \`onSubmit(values)\` fires and the baseline updates
- **After cancel**: fields reset to \`initialValues\` automatically

\`\`\`tsx
const [saved, setSaved] = useState({ name: "Jane", email: "jane@example.com" });

<SavebarTrigger
  initialValues={saved}
  onSubmit={(values) => setSaved(values)}
>
  <Input name="name"  label="Name"  />
  <Input name="email" label="Email" />
</SavebarTrigger>
\`\`\`

Direct children with a \`name\` prop are automatically made controlled.
No need to wire \`value\` or \`onChange\` on the children.
        `,
      },
    },
  },
  argTypes: {
    label: { control: "text" },
    labelSave: { control: "text" },
    labelCancel: { control: "text" },
    onSubmit: { action: "onSubmit" },
    onCancel: { action: "onCancel" },
    initialValues: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof SavebarTrigger>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/**
 * Full app layout. Edit any field to trigger the SaveBar.
 * Revert the field back to its original value — the SaveBar disappears.
 */
export const Interactive: Story = {
  render: (args) => {
    const [saved, setSaved] = useState<FormData>({
      name: "Jane Doe",
      email: "jane@example.com",
      role: "Engineer",
    });

    return (
      <AppShell>
        <Header
          onClick={() => {}}
          breadcrumb={
            <Breadcrumb items={[{ pageName: "Settings", href: "#" }]} />
          }
        >
          <HeaderProfile name="Jane Doe" letter="J">
            <Dropdown visible={true}>
              <DropdownItem label="Sign out" onClick={() => {}} />
            </Dropdown>
          </HeaderProfile>
        </Header>

        <Sidebar
          brand="/logo-sm.svg"
          brandSize="md"
          toggle={false}
          setToggleSidebar={() => {}}
        >
          <SidebarTitle title="Main" />
          <SidebarItem title="Dashboard" icon="home" fillIcon={false} />
          <SidebarItem title="Settings" icon="settings" fillIcon={false}>
            <SidebarSubItem title="Profile" active={true} onClick={() => {}} />
            <SidebarSubItem title="Account" active={false} onClick={() => {}} />
          </SidebarItem>
        </Sidebar>

        <Page
          namePage="Profile settings"
          description="Update your personal information."
          withBackButton
        >
          <SavebarTrigger
            {...args}
            initialValues={saved}
            onSubmit={(values) => setSaved(values)}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                maxWidth: "480px",
              }}
            >
              <Input name="name" label="Full name" />
              <Input name="email" label="Email" />
              <Input name="role" label="Role" />
            </div>
          </SavebarTrigger>

          <div
            style={{
              marginTop: "32px",
              padding: "16px",
              background: "#F0FDF4",
              borderRadius: "8px",
              border: "1px solid #BBF7D0",
            }}
          >
            <p
              style={{
                margin: "0 0 8px",
                fontSize: "12px",
                fontWeight: 700,
                color: "#15803D",
              }}
            >
              Saved values (baseline for comparison)
            </p>
            {Object.entries(saved).map(([k, v]) => (
              <p
                key={k}
                style={{ margin: 0, fontSize: "13px", color: "#374151" }}
              >
                {k}: <strong>{v || "—"}</strong>
              </p>
            ))}
          </div>
        </Page>
      </AppShell>
    );
  },
  args: {
    label: "You have unsaved changes",
    labelSave: "Save",
    labelCancel: "Cancel",
  },
};

/**
 * Minimal — no layout wrapper.
 * Fields start empty. Type anything to show the SaveBar.
 * Clear the field again to hide it.
 */
export const Minimal: Story = {
  name: "Minimal (empty initial values)",
  render: (args) => {
    const [saved, setSaved] = useState<FormData>({ username: "", bio: "" });
    return (
      <div style={{ padding: "32px", maxWidth: "400px" }}>
        <p style={{ marginBottom: "16px", fontSize: "13px", color: "#6B7280" }}>
          Type in a field → SaveBar appears.
          <br />
          Clear the field → SaveBar disappears.
        </p>
        <SavebarTrigger
          {...args}
          initialValues={saved}
          onSubmit={(values) => setSaved(values)}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <Input
              name="username"
              label="Username"
              placeholder="your_username"
            />
            <Input
              name="bio"
              label="Bio"
              placeholder="Tell us about yourself"
            />
          </div>
        </SavebarTrigger>
      </div>
    );
  },
  args: {
    label: "You have unsaved changes",
    labelSave: "Save",
    labelCancel: "Cancel",
  },
};

/**
 * Pre-filled values. Shows that the SaveBar only appears when a value
 * actually differs from the initial state.
 */
export const WithPrefilledValues: Story = {
  name: "With pre-filled values",
  render: (args) => {
    const [saved, setSaved] = useState<FormData>({
      name: "Jane Doe",
      email: "jane@example.com",
    });
    return (
      <div style={{ padding: "32px", maxWidth: "400px" }}>
        <SavebarTrigger
          {...args}
          initialValues={saved}
          onSubmit={(values) => setSaved(values)}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <Input name="name" label="Name" />
            <Input name="email" label="Email" />
          </div>
        </SavebarTrigger>
      </div>
    );
  },
  args: {
    label: "You have unsaved changes",
    labelSave: "Save",
    labelCancel: "Cancel",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Fields start with pre-filled values. The SaveBar only appears when a field is edited to something different from its initial value.",
      },
    },
  },
};
