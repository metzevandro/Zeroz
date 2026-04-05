import type { Meta, StoryObj } from "@storybook/react";
import { Aside, AsideContent, AsideFooter, useAside } from "./index";
import type { AsideProps } from "./Aside.types";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "../../styles.scss";
import { DatePicker } from "../DataPicker";

const meta: Meta<typeof Aside> = {
  title: "Components/Aside",
  component: Aside,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
The **Aside** is an overlay component designed to display settings or additional content
that complements the main information on the screen.

It is **not** intended for decision-making flows (e.g. destructive confirmations).
Instead, use it to surface contextual details, creation forms, and configuration panels
without navigating away from the current page.

### Sub-components
- \`AsideContent\` — slot for the scrollable body content
- \`AsideFooter\` — slot for footer actions (e.g. save/cancel buttons)

### Hook
- \`useAside(initialState?)\` — manages open/close state; returns \`isOpen\`, \`openAside\`, \`closeAside\`, \`toggleAside\`

### Accessibility
- The panel root uses \`role="dialog"\` and \`aria-modal="true"\`
- The overlay uses \`aria-hidden="true"\` to hide it from assistive technologies
- Always provide a descriptive \`title\` — it maps directly to \`aria-label\` on the dialog

### Anatomy
\`\`\`
<Aside>
  ├── Overlay (closes panel on click)
  └── Panel root
       ├── Header  (title + close button + optional description)
       ├── Content (AsideContent — scrollable)
       └── Footer  (AsideFooter — actions)
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description:
        "Title displayed in the panel header. Also used as `aria-label` for accessibility.",
      defaultValue: "Panel title",
      table: { category: "Content" },
    },
    description: {
      control: "text",
      description:
        "Optional subtitle displayed below the title. Omit to hide the description row entirely.",
      table: { category: "Content" },
    },
    isOpen: {
      control: "boolean",
      description:
        "Controls the visibility of the panel. Manage this externally via `useAside` or `useState`.",
      defaultValue: false,
      table: { category: "State" },
    },
    toggleAside: {
      action: "toggleAside",
      description:
        "Callback invoked when the user closes the panel (close button or overlay click).",
      table: { category: "Events" },
    },
    content: {
      control: false,
      description:
        "Main scrollable content. Use `AsideContent` to apply standard spacing.",
      table: { category: "Slots" },
    },
    footer: {
      control: false,
      description:
        "Footer actions area. Use `AsideFooter` to apply standard styling.",
      table: { category: "Slots" },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "600px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Aside>;

const AsideWithTrigger = ({
  isOpen: _isOpen,
  toggleAside: _toggle,
  title,
  ...rest
}: Partial<AsideProps>) => {
  const { isOpen, toggleAside } = useAside(false);
  return (
    <>
      <div style={{ padding: "24px", width: "fit-content" }}>
        <Button onClick={toggleAside}>Open panel</Button>
      </div>
      <Aside
        {...rest}
        isOpen={isOpen}
        toggleAside={toggleAside}
        title={title ?? "Panel title"}
      />
    </>
  );
};

export const Default: Story = {
  name: "Default",
  render: (args) => <AsideWithTrigger {...args} />,
  args: {
    title: "Panel title",
    description: "A brief description about what this panel displays.",
  },
};

export const Playground: Story = {
  name: "Playground",
  render: (args) => <AsideWithTrigger {...args} />,
  args: {
    title: "Playground panel",
    description: "Use the controls panel to explore all available props.",
  },
};

export const WithoutDescription: Story = {
  name: "Without description",
  render: (args) => (
    <AsideWithTrigger
      {...args}
      content={
        <AsideContent>
          <p style={{ margin: 0 }}>
            This panel renders without a description. The title alone provides
            sufficient context for the user.
          </p>
        </AsideContent>
      }
    />
  ),
  args: {
    title: "Notification settings",
  },
};

export const EmptyState: Story = {
  name: "Empty state (no slots)",
  render: (args) => <AsideWithTrigger {...args} />,
  args: {
    title: "Loading details",
    description: "Content will appear here once data is loaded.",
  },
};

export const RecordDetails: Story = {
  name: "Contextual — record details",
  render: (args) => (
    <AsideWithTrigger
      {...args}
      content={
        <AsideContent>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {[
              { label: "Order ID", value: "#ORD-20481" },
              { label: "Customer", value: "Jane Doe" },
              { label: "Status", value: "Shipped" },
              { label: "Total", value: "$129.90" },
              { label: "Payment method", value: "Visa •••• 4242" },
              { label: "Shipping address", value: "123 Main St, New York, NY" },
              { label: "Created at", value: "Mar 21, 2025 – 14:32" },
              { label: "Last updated", value: "Mar 22, 2025 – 09:15" },
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{ display: "flex", flexDirection: "column", gap: "2px" }}
              >
                <small style={{ color: "#888" }}>{label}</small>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </AsideContent>
      }
    />
  ),
  args: {
    title: "Order details",
    description: "Additional information about the selected order.",
  },
};

export const CreateUser: Story = {
  name: "Creation — new user",
  render: (args) => (
    <AsideWithTrigger
      {...args}
      content={
        <AsideContent>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <Input placeholder="Ex: Jane" label="First name" type="text" />
            <Input placeholder="Ex: Doe" label="Last name" type="text" />
            <Input
              placeholder="Ex: jane@example.com"
              label="Email address"
              type="email"
            />
            <Input
              placeholder="Ex: Product Designer"
              label="Job title"
              type="text"
            />
          </div>
        </AsideContent>
      }
      footer={
        <AsideFooter>
          <Button variant="primary">Create user</Button>
          <Button variant="secondary">Cancel</Button>
        </AsideFooter>
      }
    />
  ),
  args: {
    title: "New user",
    description: "Fill in the information below to add a new user.",
  },
};

export const EditUser: Story = {
  name: "Settings — edit user",
  render: (args) => (
    <AsideWithTrigger
      {...args}
      content={
        <AsideContent>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <Input
              placeholder="Ex: Jane"
              label="First name"
              type="text"
              defaultValue="Jane"
            />
            <Input
              placeholder="Ex: Doe"
              label="Last name"
              type="text"
              defaultValue="Doe"
            />
            <Input
              placeholder="Ex: jane@example.com"
              label="Email address"
              type="email"
              defaultValue="jane@example.com"
            />
            <Input
              placeholder="Ex: Product Designer"
              label="Job title"
              type="text"
              defaultValue="Product Designer"
            />
          </div>
        </AsideContent>
      }
      footer={
        <AsideFooter>
          <Button variant="primary">Save changes</Button>
          <Button variant="secondary">Cancel</Button>
        </AsideFooter>
      }
    />
  ),
  args: {
    title: "Edit user",
    description: "Update the selected user's account information.",
  },
};

export const AccountSettings: Story = {
  name: "Settings — account preferences",
  render: (args) => (
    <AsideWithTrigger
      {...args}
      content={
        <AsideContent>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div>
              <p
                style={{
                  margin: "0 0 12px",
                  fontWeight: 600,
                  fontSize: "13px",
                  color: "#444",
                }}
              >
                Personal information
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <Input
                  placeholder="Ex: Jane"
                  label="Display name"
                  type="text"
                  defaultValue="Jane Doe"
                />
                <Input
                  placeholder="Ex: jane@example.com"
                  label="Email address"
                  type="email"
                  defaultValue="jane@example.com"
                />
              </div>
            </div>
            <div>
              <p
                style={{
                  margin: "0 0 12px",
                  fontWeight: 600,
                  fontSize: "13px",
                  color: "#444",
                }}
              >
                Security
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <Input label="Current password" type="password" />
                <Input label="New password" type="password" />
                <Input label="Confirm new password" type="password" />
              </div>
            </div>
          </div>
        </AsideContent>
      }
      footer={
        <AsideFooter>
          <Button variant="primary">Save changes</Button>
          <Button variant="secondary">Discard</Button>
        </AsideFooter>
      }
    />
  ),
  args: {
    title: "Account settings",
    description: "Manage your personal information and security preferences.",
  },
};

export const InviteTeamMember: Story = {
  name: "Creation — invite team member",
  render: (args) => (
    <AsideWithTrigger
      {...args}
      content={
        <AsideContent>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <Input
              label="Email address"
              type="email"
              placeholder="Ex: jane@example.com"
            />
            <Input label="Full name" type="text" placeholder="Ex: Jane Doe" />
            <Input
              label="Job title"
              type="text"
              placeholder="Ex: Product Designer"
            />
          </div>
        </AsideContent>
      }
      footer={
        <AsideFooter>
          <Button variant="primary">Send invite</Button>
          <Button variant="secondary">Cancel</Button>
        </AsideFooter>
      }
    />
  ),
  args: {
    title: "Invite team member",
    description: "Send an invitation to a new member to join your workspace.",
  },
};

export const FilterPanel: Story = {
  name: "Settings — filter panel",
  render: (args) => (
    <AsideWithTrigger
      {...args}
      content={
        <AsideContent>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <Input label="Search by name" type="text" />
            <Input label="Filter by status" type="text" />
            <DatePicker
              label="Date from"
              value="12/03/2026"
              onChange={() => {}}
            />
            <DatePicker
              label="Date to"
              value="12/03/2026"
              onChange={() => {}}
            />
          </div>
        </AsideContent>
      }
      footer={
        <AsideFooter>
          <Button variant="primary">Apply filters</Button>
          <Button variant="secondary">Reset</Button>
        </AsideFooter>
      }
    />
  ),
  args: {
    title: "Filter orders",
    description: "Narrow down results using the filters below.",
  },
};

export const ActivityLog: Story = {
  name: "Contextual — activity log (scrollable)",
  render: (args) => (
    <AsideWithTrigger
      {...args}
      content={
        <AsideContent>
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={i}
              style={{
                padding: "10px 0",
                borderBottom: "1px solid #eee",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p>Activity record #{i + 1}</p>
              <p style={{ color: "#888", fontSize: "13px" }}>
                Mar {(i % 28) + 1}, 2025
              </p>
            </div>
          ))}
        </AsideContent>
      }
      footer={
        <AsideFooter>
          <Button variant="primary">Export all</Button>
          <Button variant="secondary">Close</Button>
        </AsideFooter>
      }
    />
  ),
  args: {
    title: "Activity log",
    description: "All recorded events for the selected record.",
  },
};

export const LongTitle: Story = {
  name: "Edge case — long title",
  render: (args) => (
    <AsideWithTrigger
      {...args}
      content={
        <AsideContent>
          <p style={{ margin: 0 }}>
            Validates that the header handles a long title string without
            breaking the panel layout or overlapping the close button.
          </p>
        </AsideContent>
      }
    />
  ),
  args: {
    title:
      "Advanced configuration settings for notification preferences and delivery",
    description: "Validates overflow behavior with an unusually long title.",
  },
};

export const LongDescription: Story = {
  name: "Edge case — long description",
  render: (args) => (
    <AsideWithTrigger
      {...args}
      content={
        <AsideContent>
          <p style={{ margin: 0 }}>
            Validates that the description area handles long strings without
            disrupting the header layout or collapsing the close button.
          </p>
        </AsideContent>
      }
    />
  ),
  args: {
    title: "Settings",
    description:
      "This is an unusually long description intended to test how the panel header handles content that exceeds a single line and wraps into multiple rows without breaking the layout or obscuring interactive elements like the close button.",
  },
};
